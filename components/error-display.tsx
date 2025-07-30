'use client'

import { AlertCircle } from 'lucide-react'
import { Button } from "./ui/button"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

interface ErrorDisplayProps {
  message: string
  retry?: () => void
}

export function ErrorDisplay({ message, retry }: ErrorDisplayProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
        <p>{message}</p>
        {retry && (
          <Button variant="outline" size="sm" onClick={retry}>
            Try Again
          </Button>
        )}
      </AlertDescription>
    </Alert>
  )
}

