# 5M Wellness Center

A modern, responsive website for **5M Wellness Center** — combining ancient herbal wisdom with modern naturopathic science.

> _"Treat the root cause — not just the symptoms."_

## Overview

This project is the official web presence for 5M Wellness Center. It showcases the center's philosophy, services, herbal treatments, and client testimonials through a visually rich, editorial-style design.

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org/)   |
| Language     | TypeScript                          |
| UI Library   | React 19                            |
| Styling      | Tailwind CSS v4                     |
| Fonts        | Geist Sans & Geist Mono (via `next/font`) |

## Project Structure

```
app/
├── components/         # Shared UI components (Navbar, Footer)
│   └── ui/             # Reusable primitives
├── home/
│   └── sections/       # Home page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── HerbsSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── ApproachSection.tsx
│       └── ContactSection.tsx
├── lib/                # Utilities and helpers
├── globals.css         # Global styles and design tokens
├── layout.tsx          # Root layout
└── page.tsx            # Home page entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/5mwellnesscenter.git
cd 5mwellnesscenter

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally. The page hot-reloads as you edit.

### Production Build

```bash
npm run build
npm start
```

## Available Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the development server       |
| `npm run build` | Create an optimized production build |
| `npm start`     | Serve the production build         |
| `npm run lint`  | Run ESLint checks                  |

## License

This project is private and proprietary. All rights reserved.
<!-- Vercel Trigger 20260831063339 -->
