'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { usePostHog } from 'posthog-js/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface SignupFormProps {
  onSuccess: () => void;
}

// ✅ Define form schema with Zod
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  challenge: z.string().nonempty({ message: "Please select a compliance challenge." }),
});

export default function SignupForm({ onSuccess }: SignupFormProps) {
  const posthog = usePostHog();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', challenge: '' },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    posthog?.capture('waitlist_signup', values); // Capture email + challenge
    console.log('Captured:', values);
    onSuccess(); // Close modal on success
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
                <Input placeholder="Enter your email" {...field} />
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
                  <SelectTrigger>
                    <SelectValue placeholder="Select a challenge" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Customs delays">Customs delays</SelectItem>
                  <SelectItem value="High costs">High costs</SelectItem>
                  <SelectItem value="Manual paperwork">Manual paperwork</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Join the Waitlist
        </Button>

        <FormDescription className="text-center text-xs text-muted-foreground line-through ...">
          First 100 sign-ups get a free consultation when we launch.
        </FormDescription>
      </form>
    </Form>
  );
}
