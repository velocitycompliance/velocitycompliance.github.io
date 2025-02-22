// app/layout.tsx
import { ReactNode } from 'react';
import { PostHogProvider } from './providers'
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark" />
        <title>VelocityCompliance - The Trade Compliance Platform</title>
      </head>
      <body className="dark bg-background text-foreground"><PostHogProvider>
        {children}
      </PostHogProvider></body>
    </html>
  );
}
