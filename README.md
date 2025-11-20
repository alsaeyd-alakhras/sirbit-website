# Sirbit Website

A modern, multilingual website for Sirbit - Digital Solutions company built with Next.js, React, and TailwindCSS.

## Features

✨ **Multi-language Support** (Arabic RTL / English LTR)  
🌓 **Dark/Light Mode** with smooth transitions  
🎨 **Modern UI** with glassmorphism and gradients  
⚡ **High Performance** with Next.js 16 App Router  
📱 **Fully Responsive** with mobile-first approach  
🎭 **Smooth Animations** using Framer Motion  

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** TailwindCSS 4
- **Animations:** Framer Motion
- **Theming:** next-themes
- **Internationalization:** next-intl
- **Icons:** Lucide React
- **Language:** TypeScript

## Project Structure

```
├── app/
│   ├── [locale]/              # Locale-based routing
│   │   ├── page.tsx           # Home page
│   │   ├── services/          # Services page
│   │   ├── portfolio/         # Portfolio page
│   │   │   └── [slug]/        # Project details
│   │   ├── about/             # About page
│   │   └── contact/           # Contact page
│   └── globals.css            # Global styles
├── components/
│   ├── layout/                # Layout components (Navbar, Footer)
│   ├── sections/              # Page sections
│   ├── ui/                    # Reusable UI components
│   └── providers/             # Context providers
├── locales/
│   ├── ar.json               # Arabic translations
│   └── en.json               # English translations
└── public/                    # Static assets

```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sirbit-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will automatically redirect to `/ar` (Arabic) as the default language.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Pages

### 🏠 Home (`/`)
- Hero section with animated gradient
- Who is Sirbit section
- Services preview
- Why Sirbit features
- Featured projects
- Technology stack
- Final CTA

### 💼 Services (`/services`)
- Web Development details
- Mobile Development (Flutter)
- WordPress Sites
- Alternating layout sections

### 📁 Portfolio (`/portfolio`)
- Filterable project grid (All, Web, Mobile, WordPress)
- Project cards with hover effects
- Dynamic filtering

### 🔍 Project Details (`/portfolio/[slug]`)
- Project hero with images
- Project summary (domain, role, tech, duration)
- Challenge description
- Solution and key features
- Call to action

### 👥 About (`/about`)
- Company introduction
- Vision, Mission, Values cards
- How we work timeline
- Team section

### 📧 Contact (`/contact`)
- Contact form
- Contact information (email, phone, location)
- Form validation

## Theme Configuration

### Colors

**Brand Colors:**
- Primary Blue: `#00AEEF`
- Primary Purple: `#7B61FF`
- Accent Turquoise: `#29C6B7`

**Light Mode:**
- Background: `#F7F9FC`
- Surface: `#FFFFFF`
- Text: `#1E1E1E`

**Dark Mode:**
- Background: `#0E0F11`
- Surface: `#1A1C1F`
- Text: `#F5F6FA`

## Internationalization

The site supports Arabic (RTL) and English (LTR) with full translation support:

- All text content comes from `locales/ar.json` and `locales/en.json`
- Automatic RTL/LTR layout switching
- Language toggle in navigation
- Maintains current page when switching languages

## Animations

Implemented using Framer Motion:
- Fade in/out transitions
- Slide animations (left, right, up)
- Hover effects (lift, scale)
- Stagger animations for lists
- Page transitions

## Responsive Design

- **Mobile:** Hamburger menu, single column layouts
- **Tablet:** 2-column grids, optimized spacing
- **Desktop:** Full multi-column layouts, floating navbar

## Floating Navbar

The navigation bar features:
- Glassmorphism effect with backdrop blur
- Capsule shape (rounded 40px)
- Centered, doesn't touch screen edges
- Shrinks slightly on scroll
- Mobile: Transforms into slide-in menu

## Dark Mode

- Toggle button in navbar (sun/moon icons)
- Smooth transitions between themes
- Persists user preference
- All components support both themes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The site is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm run build
vercel deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential.

## Contact

**Sirbit Team**  
Email: info@sirbit.com  
Website: [sirbit.com](https://sirbit.com)

---

Built with ❤️ by Sirbit
