# Tcongs Infotech — Homepage(assesment)

Interactive marketing homepage for **Tcongs Infotech**, built with React, Vite, and Tailwind CSS. Features an interactive 3D globe (Three.js / React Three Fiber), smooth scroll-based animations, and a custom "air wisp" cursor trail.

## Tech Stack

- **React** — UI components
- **Vite** — dev server & build tooling
- **Tailwind CSS v4** — styling
- **Framer Motion** — scroll & entrance animations
- **@react-three/fiber** + **drei** — the interactive 3D globe
- **react-icons** — icon set

## Features

- Hero section with an interactive, draggable 3D globe with orbit controls
- Custom canvas-based cursor trail (dispersing blue "air wisp" effect)
- Responsive services, process, and stats sections
- Contact form with client-side validation and a human-verification check
- Horizontal multi-column footer

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/tcongs-homepage.git
cd tcongs-homepage
npm install
```

Run the dev server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── HeroBackground.jsx
│   ├── Globe.jsx
│   ├── TechStack.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── MouseTrail.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## License

All rights reserved — © 2026 Tcongs Infotech.
