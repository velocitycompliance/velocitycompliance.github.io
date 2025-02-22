// app/providers.tsx
'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import PostHogPageView from './postHogPageView'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true // Enable pageleave captur
      })
  }, [])

  return (
    <PHProvider client={posthog}>
     <PostHogPageView />
      {children}
    </PHProvider> //test
  )
}