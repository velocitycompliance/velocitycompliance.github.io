// app/providers.tsx
"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect, useState } from "react";
import PostHogPageView from "./postHogPageView";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const maybeInitPostHog = () => {
      if (!initialized && localStorage.getItem("cookieConsent") === "true") {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
          capture_pageview: false,
          capture_pageleave: true,
        });
        window.posthogReady = true;
        setInitialized(true);
      }
    };

    maybeInitPostHog();

    const handleConsentGranted = () => {
      maybeInitPostHog();
    };

    window.addEventListener("posthogConsentGranted", handleConsentGranted);
    return () => {
      window.removeEventListener("posthogConsentGranted", handleConsentGranted);
    };
  }, [initialized]);

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}
