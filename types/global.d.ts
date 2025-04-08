export {};

declare global {
  interface Window {
    posthogReady?: boolean;
  }
}