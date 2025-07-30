'use client'

import { useState, useEffect, useRef } from 'react'
import { collection, query, orderBy, addDoc, serverTimestamp, onSnapshot, limit, getDocs, startAfter, QueryDocumentSnapshot, DocumentData, Timestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, RefreshCw } from 'lucide-react'
import type { User } from 'firebase/auth'

interface Message {
  id: string;
  text: string;
  userId: string;
  userName: string;
  userPhoto: string;
  createdAt: Timestamp;
}

interface ChatProps {
  user: User;
}

const MESSAGES_PER_PAGE = 100

export function Chat({ user }: ChatProps) {

  const [messages, setMessages] = useState<Message[]>([])

  const [newMessage, setNewMessage] = useState('')
  
  const [error, setError] = useState<string | null>(null)

  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const [hasMore, setHasMore] = useState(true)

  const [lastMessageRef, setLastMessageRef] = useState<QueryDocumentSnapshot<DocumentData> | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const [prevScrollHeight, setPrevScrollHeight] = useState(0)

  useEffect(() => {
    if (!user || !db) {
      setError('Chat is not available. Please check your configuration.')
      return
    }

    try {
      const q = query(
        collection(db, 'messages'),
        orderBy('createdAt', 'desc'),
        limit(MESSAGES_PER_PAGE)
      )
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Message[]
        
        setMessages(newMessages.reverse())
        if (snapshot.docs.length > 0) {
          setLastMessageRef(snapshot.docs[0])
        }
        setHasMore(snapshot.docs.length === MESSAGES_PER_PAGE)
      }, (error) => {
        // Chat snapshot error handled
        setError('Failed to load messages')
      })

      return () => unsubscribe()
    } catch (err) {
              // Chat error handled
      setError('Failed to load messages')
    }
  }, [user])

  useEffect(() => {
    if (prevScrollHeight > 0 && messagesContainerRef.current) {
      const newScrollTop = messagesContainerRef.current.scrollHeight - prevScrollHeight
      messagesContainerRef.current.scrollTop = newScrollTop
      setPrevScrollHeight(0)
    }
  }, [prevScrollHeight, messages])

  useEffect(() => {
    if (!isLoadingMore) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoadingMore])

  const handleLoadMore = async () => {
    if (!db || !lastMessageRef || isLoadingMore) return

    try {
      setIsLoadingMore(true)
      if (messagesContainerRef.current) {
        setPrevScrollHeight(messagesContainerRef.current.scrollHeight)
      }

      const q = query(
        collection(db, 'messages'),
        orderBy('createdAt', 'desc'),
        startAfter(lastMessageRef),
        limit(MESSAGES_PER_PAGE)
      )

      const snapshot = await getDocs(q)
      const oldMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Message[]

      if (snapshot.docs.length > 0) {
        setLastMessageRef(snapshot.docs[0])
        setMessages(prev => [...oldMessages.reverse(), ...prev])
      }
      
      setHasMore(snapshot.docs.length === MESSAGES_PER_PAGE)
    } catch (err) {
              // Error loading more messages handled
      setError('Failed to load more messages')
    } finally {
      setIsLoadingMore(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() || !user || !db) return

    try {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        userId: user.uid,
        userName: user.displayName,
        userPhoto: user.photoURL,
        createdAt: serverTimestamp()
      })
      
      setNewMessage('')
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    } catch (err) {
              // Error sending message handled
      setError('Failed to send message')
    }
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="space-y-2">
          <p>{error}</p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setError(null)}
          >
            Try Again
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="flex flex-col h-[600px] border rounded-lg">
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {hasMore && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
            >
              {isLoadingMore ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                'Load Previous Messages'
              )}
            </Button>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.userId === user?.uid ? 'flex-row-reverse' : ''
            }`}
          >
            <Avatar>
              <AvatarImage src={message.userPhoto} />
              <AvatarFallback>{message.userName?.[0]}</AvatarFallback>
            </Avatar>
            <div className={`flex flex-col ${
              message.userId === user?.uid ? 'items-end' : ''
            }`}>
              <div className={`rounded-lg p-3 ${
                message.userId === user?.uid
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}>
                <p className="text-sm">{message.text}</p>
              </div>
              <span className="text-xs text-muted-foreground mt-1">
                {message.userName} • {message.createdAt?.toDate().toLocaleDateString() || new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit" disabled={!newMessage.trim()}>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}
