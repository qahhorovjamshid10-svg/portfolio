# Jamshid Qahhorov — Personal Portfolio

A production-ready personal portfolio website for **Jamshid Qahhorov** (**Front-End Developer**), art-directed in **Dark Premium Minimalism** with restrained **Champagne Gold (`#D4AF72`)** accents and **CELLIX-specific Neon Red (`#FF304F`)** project highlights.

---

## 1. Visual & Architectural Direction

### Color System
| Token | Hex | Role |
|---|---|---|
| `obsidian` | `#080808` | Primary background |
| `surface` | `#111111` | Secondary architectural surface |
| `card` | `#171717` | Project & content card surface |
| `ivory` | `#F5F3EF` | Primary editorial text |
| `muted` | `#929292` | Secondary / supporting text |
| `gold` | `#D4AF72` | Restrained Champagne Gold accent |
| `hairline` | `#292929` | Subtle 1px structural borders |
| `cellix.red` | `#FF304F` | Reserved strictly for CELLIX visuals & telemetry |

### Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Component Animations**: Motion (`motion/react`) with `prefers-reduced-motion` support
- **Scroll Parallax**: GSAP (`gsap` + `ScrollTrigger`) isolated to dedicated project image containers
- **Icons**: Lucide React (`lucide-react`)

---

## 2. Project Structure

```text
portfolio/
├── public/
│   ├── Jamshid_Qahhorov_CV.pdf        # Original supplied CV
│   └── images/projects/               # CELLIX SVG interface & architecture visuals
│       ├── cellix-hub.svg
│       ├── cellix-arena.svg
│       ├── cellix-armory.svg
│       └── cellix-telemetry.svg
├── src/
│   ├── app/
│   │   ├── globals.css                # Design tokens & reduced-motion rules
│   │   ├── icon.svg                   # Monogram favicon (JQ.)
│   │   ├── layout.tsx                 # Root layout, fonts, SEO & Open Graph metadata
│   │   ├── not-found.tsx              # Custom 404 page
│   │   ├── page.tsx                   # Main portfolio page (Hero -> Contact)
│   │   └── projects/cellix/page.tsx   # Dedicated CELLIX engineering case study route
│   ├── components/
│   │   ├── PortfolioProvider.tsx      # Bilingual (EN/UZ) & reduced-motion provider
│   │   ├── Navbar.tsx                 # Accessible sticky navigation + mobile drawer
│   │   ├── Hero.tsx                   # Monumental typography + interactive CELLIX frame
│   │   ├── AboutSection.tsx           # Verified CV summary & architectural pillars
│   │   ├── ProjectCard.tsx            # Reusable project card with GSAP parallax
│   │   ├── ProjectsSection.tsx        # Selected Projects section
│   │   ├── SkillsSection.tsx          # Categorized CV skills & technologies
│   │   ├── ExperienceSection.tsx      # 8 months practical experience + transparent placeholder
│   │   ├── EducationSection.tsx       # Vatan University, Najot Ta'lim, IT-Park
│   │   ├── LanguagesSection.tsx       # Uzbek (Native), English (B1), Russian (A2)
│   │   ├── ContactSection.tsx         # Direct verified channels & inquiry composer
│   │   ├── CellixCaseStudyClient.tsx  # Full CELLIX engineering case study view
│   │   ├── MagneticButton.tsx         # Desktop-only magnetic button primitive
│   │   ├── SectionHeader.tsx          # Editorial section header primitive
│   │   └── Footer.tsx                 # Colophon with live Tashkent clock
│   └── data/
│       └── portfolio.ts               # Centralized TypeScript source of truth
```

---

## 3. Running & Building Locally

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Run TypeScript type check
npm run typecheck

# Create production build
npm run build

# Start production server
npm run start
```

---

## 4. Editing Content

All portfolio copy, contact links, projects, skills, experience, education, and languages are centralized in:
- `src/data/portfolio.ts`

Both English (`en`, default) and Uzbek (`uz`) translations are maintained in the same typed data file.

---

## 5. Deployment (Vercel / Production)

1. Push the repository to GitHub (`https://github.com/qahhorovjamshid10-svg/...`).
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js App Router (`npm run build`).
4. Click **Deploy** — zero environment variables are required.
