# Bhavesh Note - Anime-Themed Portfolio

## Overview

This is a personal portfolio website featuring an anime-inspired pixel-art aesthetic, combining elements from Death Note and Demon Slayer's Infinity Castle with modern 3D design principles. The application showcases professional projects, skills, and contact information through an immersive, visually striking interface.

The site begins with a dramatic landing page ("Bhavesh Note") featuring a clickable notebook entrance, then transitions to a full portfolio with sections for hero, about, skills, projects, featured Clubs App, and contact information. The design emphasizes muted color palettes, floating pixel art elements, and smooth animations to create a premium, hand-crafted feel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack React Query for server state management and API data fetching
- Tailwind CSS for utility-first styling with extensive custom theming

**Component Structure:**
- Page-level components (`landing.tsx`, `portfolio.tsx`, `home.tsx`) manage major application states
- Section components (`HeroSection`, `AboutSection`, `SkillsSection`, etc.) organize content into logical blocks
- Shared UI components built with Radix UI primitives (shadcn/ui library) provide accessible, customizable interface elements
- Context providers (`ThemeContext`, `MusicContext`) handle global state for theme switching and background music

**Design System:**
- Custom CSS variables for light/dark theme support with muted color palettes
- Typography hierarchy using Google Fonts (Cinzel Decorative for gothic headers, Poppins for anime-style headings, Press Start 2P for pixel accents)
- Tailwind configuration extends base theme with custom animations (floating, feather-fall, fade-in)
- Spacing system based on 4px increments for consistency

**State Management:**
- React Query manages visitor count API calls with automatic caching
- Context API handles theme toggle (light/dark) and music player state
- Session storage tracks visitor count to prevent duplicate increments
- React Hook Form with Zod validation for contact form

### Backend Architecture

**Server Framework:**
- Express.js HTTP server with TypeScript
- Dual entry points: `index-dev.ts` (development with Vite middleware) and `index-prod.ts` (production with static file serving)
- Custom logging middleware tracking request duration and API responses

**API Design:**
- RESTful endpoints for visitor statistics (`/api/visitors` GET, `/api/visitors/increment` POST)
- JSON request/response format with express.json middleware
- Error handling returns appropriate HTTP status codes

**Development vs Production:**
- Development mode integrates Vite middleware for hot module replacement
- Production mode serves pre-built static assets from `dist/public`
- Environment-based configuration controlled by `NODE_ENV`

### Data Storage

**Current Implementation:**
- In-memory storage (`MemStorage` class) using JavaScript Maps
- Visitor counter persists only during server runtime (resets on restart)
- User schema defined but not actively used in current portfolio

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL with `@neondatabase/serverless` driver
- Schema defines `users` table (id, username, password) and `visitorStats` table (id, count)
- Migration setup through `drizzle.config.ts` with output to `./migrations` directory
- Database URL expected via `DATABASE_URL` environment variable
- **Note:** While Drizzle is configured, the application currently uses in-memory storage; actual PostgreSQL integration requires database provisioning and switching from `MemStorage` to database-backed implementation

**Schema Design:**
- Zod schemas (`drizzle-zod`) provide runtime validation matching database types
- UUID primary keys with PostgreSQL `gen_random_uuid()` function
- Type inference creates TypeScript types from Drizzle schemas

### Authentication & Authorization

Not currently implemented. User schema exists but no authentication flow, session management, or protected routes are in place.

### Asset Management

**Static Assets:**
- Pixel art images stored in `attached_assets/generated_images/` directory
- Images include character avatars, backgrounds, UI elements (notebook, mailbox, etc.)
- Vite alias `@assets` resolves to `attached_assets` folder
- Images use `imageRendering: "pixelated"` CSS for sharp pixel art rendering

**Font Loading:**
- Google Fonts loaded via CDN links in `index.html`
- Preconnect hints optimize font loading performance

## Latest Updates (Final)

### Changes Made:
1. **Removed Landing Page Animation** - Users now see the home portfolio directly (no book animation)
2. **Added Multiple Loading Animations** for smooth content loading:
   - `animate-fade-in` - Text fade-in effect
   - `animate-card-load` - Cards slide up with staggered timing
   - `animate-text-slide` - Text slides in from left
   - `animate-line-grow` - Lines draw from left to right
   - `animate-pulse-gentle` - Subtle pulsing for interactive elements
   - `animate-shimmer` - Shimmer loading effect

### How to Use Animations in Components:
Add these classes to your HTML elements:
```html
<!-- Text fade in -->
<p className="animate-fade-in">Your text here</p>

<!-- Card with staggered load animation -->
<div className="animate-card-load">Card content</div>

<!-- Text slide animation -->
<h1 className="animate-text-slide">Heading</h1>

<!-- Line animation -->
<div className="animate-line-grow h-1 bg-primary"></div>

<!-- Gentle pulse for buttons -->
<button className="animate-pulse-gentle">Click me</button>

<!-- Shimmer loading skeleton -->
<div className="animate-shimmer h-12 bg-muted rounded"></div>
```

## Local Development Setup (Windows)

### For Running Locally on Windows

Since this project uses cross-env, the development setup is compatible with Windows. Follow these steps:

**1. Extract the ZIP file and open in VSCode**
- Download the project ZIP from Replit
- Extract it to your desired location
- Open the folder in VSCode

**2. Install dependencies**
```bash
npm install
```

**3. Run the development server**
```bash
npm run dev
```

The app will start on `http://localhost:5000`

### Important Server Configuration

**File:** `server/app.ts` (lines 88-102)
- The server is configured to bind to `127.0.0.1` (Windows-compatible)
- Port 5000 is the default; can be changed via `PORT` environment variable
- Error handling for port conflicts included

**DO NOT CHANGE:**
- Host binding (currently `127.0.0.1`)
- The error handler at line 93-102
- This setup is Windows-tested and final

### Troubleshooting

If you get "port already in use" error:
```powershell
Get-Process node | Stop-Process -Force
npm run dev
```

If issues persist, try a different port:
```bash
set PORT=3000 && npm run dev
```

## External Dependencies

### UI Component Library
- **shadcn/ui**: Complete set of accessible, customizable React components built on Radix UI primitives
- **Radix UI**: Unstyled, accessible component primitives (accordion, dialog, dropdown, toast, etc.)
- **Lucide React**: Icon library for consistent iconography

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe component variant management
- **clsx** and **tailwind-merge**: Conditional class name composition

### Data Fetching & Forms
- **TanStack React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant form management with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API responses
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for type-safe database queries
- **@neondatabase/serverless**: Serverless-compatible PostgreSQL driver
- **drizzle-zod**: Generate Zod schemas from Drizzle table definitions

### Development Tools
- **Vite**: Fast build tool with HMR and optimized production builds
- **TypeScript**: Static type checking across frontend and backend
- **esbuild**: Fast JavaScript bundler for server-side code
- **tsx**: TypeScript execution for development server
- **@replit/vite-plugin-***: Replit-specific development plugins (error overlay, dev banner, cartographer)

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command palette component
- **embla-carousel-react**: Touch-friendly carousel implementation
- **nanoid**: Compact unique ID generation
- **wouter**: Minimalist routing library

### Session Management
- **express-session** (implied by architecture, though not explicitly in visible package.json)
- **connect-pg-simple**: PostgreSQL session store for Express (configured but not actively used)

### Production Considerations
- Static file serving through Express in production
- Build process: Vite builds client assets, esbuild bundles server code
- No CDN or image optimization currently configured
- Visitor counting currently non-persistent (in-memory only)