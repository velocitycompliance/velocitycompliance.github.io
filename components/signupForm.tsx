// components/SignupForm.tsx
'use client';

import { usePostHog } from 'posthog-js/react';
import React, { FormEvent } from 'react';

interface SignupFormProps {
  onSuccess: () => void;
}

export default function SignupForm({ onSuccess }: SignupFormProps) {
  const posthog = usePostHog();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value;

    if (posthog) {
      posthog.capture('waitlist_signup', { email });
      console.log('Captured waitlist_signup for email:', email);
    } else {
      console.error('PostHog is not available');
    }
    onSuccess(); // Close the modal after capturing the event
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
