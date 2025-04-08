//component/cookieConsent
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// The PostHog settings: replace these with your actual environment variables 
// or hard-coded values if needed.
const POSTHOG_API_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_API_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Check for the stored consent choice when the component mounts.
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      // No decision has been made yet.
      setShowBanner(true);
    } else if (consent === "true") {
      // Consent was given previously, initialize PostHog tracking.
      loadPostHog();
    }
    // If consent is "false", do nothing.
  }, []);

  // This function dynamically imports PostHog and initializes it.
  const loadPostHog = async () => {
    const posthogModule = await import("posthog-js");
    posthogModule.default.init(POSTHOG_API_KEY!, {
      api_host: POSTHOG_API_HOST!,
      // You can pass additional PostHog configuration options here.
    });
  };

  // Handle "Accept" button click.
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
    loadPostHog();
  };

  // Handle "Decline" button click.
  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
    // Optionally, you might want to remove existing tracking cookies or disable posthog here.
  };

  // If the banner should not be shown, return null.
  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <h3 className="text-lg font-bold">Cookie Consent</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            We use cookies to enhance your experience. By clicking “Accept,” you consent to have a cookie stored and to
            allow our tracking as described in our{" "}
            <a href="/privacy" className="underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={handleDecline}>
            Decline
          </Button>
          <Button onClick={handleAccept}>Accept</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CookieConsent;
