import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kestrel Precision Technical Industrial Palette
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',        // #0cbde8 Cold Cyan
          foreground: 'hsl(var(--primary-foreground))',
        },
        'muted-foreground': 'hsl(var(--muted-foreground))', // #7a889b
        border: 'hsl(var(--border))',                       // #2d333b
        card: {
          DEFAULT: 'hsl(var(--card))',                      // #1c2026 Machined Steel Dark
          elevated: 'hsl(var(--card-elevated))',            // #232830
        },
        spec: 'hsl(var(--spec))',                           // #f5b922 Tolerance Highlight Amber
        // Direct hex helpers for rapid styling
        machined: {
          900: '#15181d', // Machined dark base
          800: '#1c2026', // Card surface
          700: '#232830', // Elevated surface
          600: '#2d333b', // Borders
          500: '#475363', // Muted borders / dividers
          400: '#7a889b', // Secondary / muted text
          100: '#eaedf0', // Crisp foreground text
        },
        cyan: {
          DEFAULT: '#0cbde8', // Cold cyan brand
          hover: '#0aa1c6',
          dim: 'rgba(12, 189, 232, 0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'Barlow', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.025em',
        eyebrow: '0.12em',
      },
    },
  },
  plugins: [],
};

export default config;
