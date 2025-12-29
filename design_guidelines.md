# Design Guidelines: Anime-Themed Pixel-Art Portfolio

## Design Approach
**Reference-Based Approach**: Combining Death Note gothic aesthetic + Demon Slayer Infinity Castle floating architecture + retro pixel art with modern 3D portfolio standards.

**Core Principle**: Hand-crafted premium feel - avoid generic AI patterns. Every element should feel intentional, artistic, and anime-inspired.

---

## Color Palette
**Strict Rule**: Pale, muted tones only - NO bright colors

**Dark Mode (Default)**:
- Background: Deep charcoal (#1a1a1a to #0d0d0d)
- Accent: Muted purple/red (#6b4c5c, #5c4b5b)
- Text: Off-white (#e8e6e3)
- Glows: Soft pale purple (#9b8fa5 at 20% opacity)

**Light Mode**:
- Background: Warm pale gray (#f5f3f0)
- Accent: Muted lavender (#b8afc7)
- Text: Deep charcoal (#2a2a2a)
- Glows: Subtle gray shadows

---

## Typography Hierarchy

**Landing Page ("Bhavesh Note")**:
- Title: Gothic handwritten serif (Cinzel Decorative or similar), 4rem desktop / 2.5rem mobile
- Subtle letter-spacing for elegance

**Main Site**:
- Headlines: Anime-inspired clean sans (Poppins or Montserrat), bold weights
- H1: 3rem desktop / 2rem mobile
- H2: 2.25rem desktop / 1.75rem mobile
- H3: 1.5rem
- Body: Clean sans-serif (Inter), 1rem, line-height 1.7
- Accent text: Pixel font for labels/UI elements (Press Start 2P at 0.75rem)

---

## Layout & Spacing System

**Tailwind Units**: Primary spacing in 4, 8, 12, 16, 24, 32 units (p-4, p-8, etc.)

**Section Structure**:
- Section padding: py-24 desktop / py-16 mobile
- Container: max-w-7xl mx-auto px-6
- Grid gaps: gap-8 for cards, gap-4 for tight elements

**Responsive Breakpoints**:
- Mobile: Stack all, single column
- Tablet (md): 2-column grids where appropriate
- Desktop (lg): Full 3D effects, 3-4 column grids

---

## Component Library

### Landing Screen (Entry Experience)
- Full viewport (100vh) black background
- Center: "Bhavesh Note" title with gothic typography
- Animated falling feather particles (slow float, 3-5 particles)
- Central anime notebook illustration (pixel-art style, 400px × 300px)
- On click: Zoom-in transition with fade (1.5s duration) + soft piano audio cue
- Exit reveals main homepage

### Navigation Bar
- Sticky top position
- Semi-transparent backdrop (backdrop-blur-md)
- Links: Home, About, Skills, Projects, Clubs App, Contact
- Hover: Soft glow underline animation (pale purple)
- Pixel-style hamburger menu for mobile

### Hero Section (Main Homepage)
- Height: 80vh minimum
- Background: Infinity Castle inspired - floating geometric platforms in parallax layers
- Name: "Bhavesh Desale" - large anime typography (H1)
- Subtitle: "Android Developer | Full-Stack Learner | Creative Engineer"
- Floating pixel-art elements: 5-7 small objects (cubes, stars, sparkles) with slow rotation
- Placeholder pixel avatar (256px × 256px, positioned left or center)
- CTA button: "Explore Portfolio" with blurred background (backdrop-blur-sm)

### About Section
- 2-column layout (desktop): Text left, pixel illustration right
- Pale tone background (#f9f7f5 light / #1f1f1f dark)
- Pixel-based character illustration (placeholder, 400px × 500px)
- Scroll-triggered fade-in animations (stagger by 200ms)
- Text in readable blocks, max-w-prose

### Skills Section
- 3D card grid: 3 columns desktop / 2 tablet / 1 mobile
- Each card: Pixel icon (64px × 64px), skill name, brief description
- Hover: Float upward (translateY(-8px)), subtle glow shadow
- Cards have soft rounded borders (rounded-lg)
- Background: Subtle gradient or Infinity Castle motif

### Projects Section
- Infinity Castle aesthetic background (floating rooms, depth layers)
- Project cards: Animated 3D perspective on hover (rotateY slight tilt)
- Each card: Pixel-styled frame border, placeholder image/video area (16:9 ratio), title, description
- Grid: 2 columns desktop / 1 mobile
- Spacing: gap-12 for visual breathing room

### Clubs App Section
- Dedicated showcase area with prominent placement
- Pixel UI mockup frames (use placeholder device frames)
- Soft neon border glow (pale purple/blue, 2px)
- Feature highlights in bullet points or cards
- Clean, modern layout with ample whitespace

### Contact Section
- Anime particle background (floating sparkles, subtle motion)
- Form: Glowing input fields (focus state: pale purple outline glow)
- Pixel mailbox icon (128px × 128px) positioned decoratively
- Input styling: backdrop-blur, semi-transparent backgrounds
- Submit button: Pixel-style with hover glow effect

### Footer
- Visitor counter: Animated pixel-style numbers with rolling effect
- Text: "Visited by [X] anime travelers so far"
- Social links with pixel icons
- Theme toggle and music toggle positioned here

---

## 3D & Animation Specifications

**Three.js Elements**:
- Floating pixel cubes: 5-8 objects, slow rotation (0.002 rad/frame)
- Parallax depth layers: 3 layers with different scroll speeds
- Infinity Castle floating platforms: Subtle vertical movement (±10px, 4s duration)

**CSS Animations**:
- Page transitions: Fade + zoom (0.8s ease-in-out)
- Scroll animations: Fade-in-up on viewport entry (IntersectionObserver)
- Hover animations: Transform scale(1.05) or translateY(-8px), 0.3s ease
- Feather fall: keyframe animation, 8s duration, infinite loop

**Performance**:
- Limit active 3D objects to viewport
- Use CSS transforms over position changes
- Implement lazy loading for images

---

## Special Features

### Background Music Player
- Pixel-style music icon (fixed position, bottom-right)
- Death Note piano instrumental (soft, looping)
- Starts muted, user toggles on
- Visual indicator: animated sound waves when playing

### Theme Toggle
- Light/Dark mode switch (pixel-style toggle)
- Smooth color transitions (0.5s)
- Pixel objects auto-recolor based on theme
- Positioned in header or footer

### Visitor Counter
- Footer placement
- Pixel-font numbers
- Rolling animation on load (count-up effect)
- Local storage for tracking

---

## Images

**Hero Section**: Pixel-art character illustration of portfolio owner (256px × 256px, centered or left-aligned) - placeholder pixel avatar style

**About Section**: Side illustration pixel character in casual pose (400px × 500px) - replaceable

**Skills Section**: Pixel icons for each skill (64px × 64px each) - use simple geometric pixel designs

**Projects Section**: Placeholder project screenshots in pixel frames - 16:9 ratio, replaceable

**Contact Section**: Pixel mailbox/envelope icon (128px × 128px) - decorative

**Landing Page**: Anime-style notebook illustration (400px × 300px, central) - Death Note inspired

**Background**: Infinity Castle floating platforms - layered PNG assets for parallax

---

## Responsive Behavior

**Mobile**: 
- Stack all sections vertically
- Reduce animation complexity
- Enlarge touch targets (48px minimum)
- Simplify 3D to 2D transforms

**Tablet**:
- 2-column grids for skills/projects
- Maintain key animations
- Adjust spacing (py-16 instead of py-24)

**Desktop**:
- Full 3D effects active
- Multi-column layouts (3-4 columns)
- Enhanced parallax and hover interactions

---

## Asset Structure (Modular)
All images/videos in organized folders for easy replacement:
- `/assets/pixel-art/` - character sprites, icons
- `/assets/3d-objects/` - Three.js models
- `/assets/backgrounds/` - Infinity Castle scenes
- `/assets/audio/` - background music files