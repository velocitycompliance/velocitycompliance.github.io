"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { usePostHog } from 'posthog-js/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface SignupFormProps {
  onSuccess: () => void;
  ctaText?: string;
}

// Updated schema: add `consent`
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  challenge: z.string().nonempty({ message: "Please select a compliance challenge." }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy terms." }),
  }),
});

export default function SignupForm({ onSuccess, ctaText = "Unlock Early Access" }: SignupFormProps) {
  const posthog = usePostHog();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      challenge: 'Customs delays'
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    localStorage.setItem("cookieConsent", "true");
    window.dispatchEvent(new Event("posthogConsentGranted"));
  
    const tryCapture = () => {
      if (window.posthogReady) {
        posthog?.capture("waitlist_signup", {
          email: values.email,
          challenge: values.challenge,
        });
        console.log("Captured:", values);
        onSuccess();
      } else {
        // Retry in 100ms (or use a backoff if you want)
        setTimeout(tryCapture, 100);
      }
    };
  
    tryCapture(); // Start polling
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input paddingY="py-6" textSize="m" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Compliance Challenge Dropdown */}
        <FormField
          control={form.control}
          name="challenge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What’s your biggest compliance challenge?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger textSize="text-m" paddingY="py-6">
                    <SelectValue textSize="text-m" placeholder="Select a challenge" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem textSize="text-m" value="Customs delays">Customs delays</SelectItem>
                  <SelectItem textSize="text-m" value="High costs">High costs</SelectItem>
                  <SelectItem textSize="text-m" value="Manual paperwork">Manual paperwork</SelectItem>
                  <SelectItem textSize="text-m" value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Consent Checkbox */}
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  className="border-gray-200"
                  id="consent"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
              </FormControl>
              <FormLabel htmlFor="consent" className="text-sm font-normal">
                I agree to have my email stored and to receive updates as described in the{" "}
                <a href="/privacy" className="underline" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>.
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button size="lg" variant="default" type="submit" className="w-full">
          {ctaText}
        </Button>
      </form>
    </Form>
  );
}
