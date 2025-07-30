export interface TweetMedia {
    type: 'photo' | 'video'
    url: string
    width?: number
    height?: number
  }
  
  export interface Tweet {
    tweet_id: string
    text: string
    created_at: string
    favorites: number
    retweets: number
    replies: number
    views: string
    author_name: string
    author_screen_name: string
    author_avatar: string
    author_verified: boolean
    media?: TweetMedia[]
  }
  
  