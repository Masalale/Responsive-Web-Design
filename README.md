# Clarence Chomba - Portfolio (Next.js)

A modern portfolio website built with Next.js, TypeScript, GSAP animations, Lenis smooth scrolling, and React Three Fiber for future 3D enhancements.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Animation:** GSAP with ScrollTrigger
- **Scrolling:** Lenis (smooth scroll)
- **3D/WebGL:** React Three Fiber + Drei (foundation ready)
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
portfolio-next/
├── app/
│   ├── globals.css        # All styles (preserved from original)
│   ├── layout.tsx         # Root layout with Lenis provider
│   └── page.tsx           # Main page component
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, About, Experience, Skills, Projects, Contact
│   ├── ui/                # Card, ScrollHint, SocialLink
│   ├── providers/         # LenisProvider for smooth scrolling
│   └── three/             # Scene, Experience (R3F foundation)
├── data/
│   ├── experience.ts      # Job history data
│   ├── projects.ts        # GitHub projects data
│   ├── skills.ts          # Skills categories data
│   └── social.ts          # Social links data
├── hooks/
│   ├── useScrollReveal.ts # GSAP scroll-triggered animations
│   └── useScrollTo.ts     # Lenis scroll navigation
└── public/
    ├── fonts/             # Custom fonts (Boliens, CharimaShareneDemo)
    └── images/            # Profile pic, favicon
```

## Features

- ✅ Smooth scrolling with Lenis
- ✅ GSAP ScrollTrigger animations
- ✅ Responsive design (preserved from original)
- ✅ Dynamic navbar color on scroll
- ✅ Touch-friendly card interactions
- ✅ Lucide icons for social links
- ✅ Next.js Image optimization
- ✅ TypeScript type safety
- ✅ Separate data files for easy content updates
- ✅ React Three Fiber foundation for future 3D elements

## Adding 3D Elements (Future)

The R3F foundation is set up in `components/three/`. To enable 3D:

1. Import the Scene component:
```tsx
import { Scene } from "@/components/three";
```

2. Add it to a section (e.g., Hero):
```tsx
<section className="intro" style={{ position: "relative" }}>
  <Scene />
  {/* ... rest of content */}
</section>
```

3. Customize `Experience.tsx` to add your 3D objects.

## Customization

- **Colors:** Edit CSS variables in `app/globals.css`
- **Content:** Update data files in `data/` folder
- **Animations:** Modify GSAP settings in `hooks/useScrollReveal.ts`
- **Scroll behavior:** Adjust Lenis config in `components/providers/LenisProvider.tsx`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
