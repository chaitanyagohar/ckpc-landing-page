# Project: CKPC Landing Page
# Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.

## Core Directives for Code Generation:
1. **Performance First (LCP < 2.5s on 4G):**
   - ALWAYS use `next/image` for images. Include `priority` for above-the-fold assets.
   - Use dynamic imports `next/dynamic` with skeleton loaders for heavy components (like 360 Maps).
2. **Security & Storage:**
   - NEVER use raw `localStorage.setItem`. All session data MUST be encrypted using `crypto-js` via the custom wrapper in `src/lib/security`.
   - The UI must implement anti-inspect/anti-right-click hooks.
3. **UI / UX:**
   - Follow a "Mobile-First" approach using Tailwind CSS.
   - Design aesthetic: Premium, minimal, "Swiss-style" bento grids (Living Walls True North reference).
   - Form inputs must accommodate a 4-digit OTP using individual boxes.
4. **Code Quality (For Senior Dev Review):**
   - Strict TypeScript definitions for all props and API responses.
   - Keep files modular. Separate UI components from business logic/hooks.
   - Add concise, professional comments explaining the *why* behind complex logic.