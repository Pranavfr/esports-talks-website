'use client'

import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  error: Error
  reset: () => void
}

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <Alert variant="destructive" className="my-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="mt-2 flex flex-col gap-2">
        <p>{error.message}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={reset}
          className="w-fit"
        >
          Try again
        </Button>
      </AlertDescription>
    </Alert>
  )
}

