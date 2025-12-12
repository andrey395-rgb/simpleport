# simpleport

A single-page portfolio site built with React and Vite. It highlights projects, skills, and contact details, includes a downloadable résumé, and offers light/dark theme toggling with preference stored in local storage.

## Tech Stack
- Vite + React 18
- CSS modules for section styling
- Formspree for contact form handling

## Features
- Theme toggle with persistence via `ThemeContext`.
- Hero section with social links and résumé download.
- Project gallery driven by reusable `ProjectCard` components.
- Skills grid with icon-based badges.
- Contact form submitted to Formspree endpoint `https://formspree.io/f/mrbzgoow`.

## Project Structure
- `src/main.jsx` — app bootstrap with `ThemeProvider`.
- `src/App.jsx` — page layout assembling all sections.
- `src/sections/*` — individual page sections (Hero, Projects, Skills, Contact, etc.).
- `src/common/*` — shared UI pieces like `ProjectCard`, `SkillList`, and `ThemeContext`.
- `src/assets/` — images, icons, and résumé PDFs.

## Getting Started
Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Then open the dev server URL printed in the terminal (Vite defaults to `http://localhost:5173`).

## Scripts
- `npm run dev` — start Vite dev server.
- `npm run build` — production build.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run eslint on the project.

## Deployment
Run `npm run build` and deploy the contents of `dist/` to any static host (e.g., GitHub Pages, Netlify, Vercel static).

## Customization
- Update résumé and profile assets under `src/assets/assets/`.
- Edit social links and hero copy in `src/sections/Hero/Hero.jsx`.
- Adjust projects in `src/sections/Projects/Projects.jsx` by swapping `ProjectCard` entries.
- Change the Formspree endpoint in `src/sections/Contact/Contacts.jsx` if you use a different form handler.


