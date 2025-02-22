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
        <title>ComplianceAI - EU Trade Compliance Platform</title>
        <script src="/script.js" async></script>
      </head>
      <body><PostHogProvider>{children}</PostHogProvider></body>
    </html>
  );
}
