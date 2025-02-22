// tailwind.config.js
module.exports = {
    darkMode: 'class', // ✅ Required for class-based dark mode
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Use Inter or similar modern font
          mono: ['Fira Code', 'monospace'], // For code-like elements
        },
        fontSize: {
          sm: ['0.875rem', { lineHeight: '1.25rem' }],
          base: ['1rem', { lineHeight: '1.5rem' }],
          lg: ['1.125rem', { lineHeight: '1.75rem' }],
          xl: ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
        },
        letterSpacing: {
          tightest: '-0.02em',
          tighter: '-0.01em',
          tight: '-0.005em',
        },
      },
    },
  };
  