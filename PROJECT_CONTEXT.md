# Muhammad Iqbal Khan – React Native Portfolio

## 1. 📘 Project Overview

- **Name:** Muhammad Iqbal Khan – React Native Portfolio
- **Purpose:** Showcase the developer's skills, projects, experience, and contact information in a modern, full-stack portfolio web app.
- **Target Users:**
  - Potential employers, clients, and collaborators
  - Recruiters and hiring managers
  - Anyone interested in React Native/mobile development
- **Business Logic:**
  - Display dynamic project data, experience, and skills
  - Allow visitors to contact the developer via a form (with backend API)
  - (Optional) Blog for technical articles

---

## 2. ⚙️ Tech Stack

- **Frontend:**
  - Next.js (App Router, TypeScript, TailwindCSS)
  - React (with Framer Motion for animation)
  - SEO: Metadata API, OpenGraph, Twitter Cards
  - Charting: Recharts
  - Timeline: react-vertical-timeline-component
  - Icons: lucide-react
- **Backend:**
  - Node.js, Express.js
  - MongoDB (Mongoose ODM)
  - dotenv, cors, nodemon
- **State Management:**
  - React useState/useEffect (no Redux/Zustand)
- **Other Tools:**
  - concurrently (run frontend/backend together)
  - ESLint, Prettier (code quality)
  - GitHub Actions (CI/CD)
  - Vercel (frontend deploy), Railway/Render (backend deploy)

---

## 3. 📁 Folder & File Structure

```
Portfoluo/
├── backend/
│   ├── config/           # Database config
│   ├── controllers/      # (Future) API controllers
│   ├── models/           # Mongoose models (Contact, Project)
│   ├── routes/           # Express routes (contact, projects)
│   └── index.js          # Express server entry
├── frontend/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Hero/Landing
│   │   ├── about/        # About Me
│   │   ├── experience/   # Experience Timeline
│   │   ├── projects/     # Project Gallery
│   │   ├── skills/       # Skills & Charts
│   │   ├── contact/      # Contact Form
│   │   └── blog/         # (Optional) Blog
│   ├── components/       # Reusable UI (Navigation, ThemeProvider, Toast, etc.)
│   ├── data/             # Modular data (journey, experience, projects, skills)
│   ├── public/           # Static assets (images, favicon, robots.txt, etc.)
│   └── ...               # Config, styles, etc.
├── .github/              # GitHub Actions workflows
├── .vscode/              # Editor settings
├── package.json          # Root scripts (concurrently, lint, format)
├── README.md             # Project overview
└── PROJECT_CONTEXT.md    # (This file)
```

**Key Custom Components:**

- `Navigation.tsx` – Top nav with theme toggle
- `ThemeProvider.tsx` – Light/dark mode context
- `Toast.tsx` – Animated toast notifications
- `ProjectCard.tsx` – (Suggested) Project display
- `ContactForm.tsx` – (Suggested) Contact form logic
- `RadarChart.tsx` – (Suggested) Skills chart

---

## 4. 🔐 Authentication & Authorization

- **Current State:** No authentication or user roles implemented.
- **Token Management:** N/A
- **Roles:** N/A (all API endpoints are public; admin routes are noted but not protected)
- **Future:** Add JWT or session-based auth for admin/project POST/PUT/DELETE.

---

## 5. 🧩 Core Features & Modules

- **Hero/Landing Page:**
  - Animated intro, quick stats, CTA buttons
  - File: `frontend/src/app/page.tsx`
- **About Me:**
  - Timeline of developer's journey, profile, social links
  - File: `frontend/src/app/about/page.tsx`, data in `data/journey.ts`
- **Experience:**
  - Work/leadership timeline, badges, company logos
  - File: `frontend/src/app/experience/page.tsx`, data in `data/experience.ts`
- **Projects:**
  - Dynamic gallery, filtering, API integration
  - File: `frontend/src/app/projects/page.tsx`, data in `data/projects.ts`, backend in `backend/routes/projects.js`
- **Skills:**
  - Radar chart, progress bars, animated categories
  - File: `frontend/src/app/skills/page.tsx`, data in `data/skills.ts`
- **Contact:**
  - Form (name, email, message), social links, API POST
  - File: `frontend/src/app/contact/page.tsx`, backend in `backend/index.js`
- **Blog (Optional):**
  - Blog listing, markdown rendering, dynamic routes
  - File: `frontend/src/app/blog/`

---

## 6. 🔄 Data Flow & API Handling

- **API Utility:** Uses `fetch()` for all API calls (no axios)
- **Proxy:** Next.js `rewrites` proxies `/api/*` to backend in dev
- **Backend Endpoints:**
  - `POST /api/contact` – Contact form submission
  - `GET /api/projects` – List all projects (with filters)
  - `POST /api/projects` – Add project (admin, not protected)
- **Async Logic:** Managed with React hooks (`useState`, `useEffect`)
- **Redux/Thunks:** Not used

---

## 7. 🧪 Testing

- **Libraries:** No automated tests implemented
- **Manual Testing:**
  - Run `npm run dev` at root to start both servers
  - Test API endpoints with Postman or frontend forms
- **Future:** Add Jest/React Testing Library for frontend, supertest for backend

---

## 8. 🚀 Deployment

- **Frontend:**
  - Target: Web (Next.js, Vercel)
  - Deploy: Push to GitHub, auto-deploy via Vercel
- **Backend:**
  - Target: Node.js (Railway, Render, or similar)
  - Deploy: Push to GitHub, deploy via Railway/Render
- **Mobile:**
  - Not a mobile app, but showcases mobile dev skills

---

## 9. 🔔 Notifications

- **Toast Notifications:**
  - Shown on frontend for form success/error (see `Toast.tsx`)
- **Push/In-app/Email:**
  - Not implemented
  - (Future) Add email notifications for contact form via backend

---

## 10. 📝 Additional Notes

- **Known Issues:**
  - MongoDB connection is optional; falls back to in-memory for contacts if DB is down
  - No authentication on admin/project routes
  - Some features (blog, admin UI) are optional/incomplete
- **TODOs/Improvements:**
  - Add authentication for admin routes
  - Add automated tests
  - Add email notifications for contact form
  - Improve error handling and validation
  - Add more project data and images
- **Useful Links:**
  - [Next.js Docs](https://nextjs.org/docs)
  - [Express Docs](https://expressjs.com/)
  - [Mongoose Docs](https://mongoosejs.com/)
  - [TailwindCSS Docs](https://tailwindcss.com/)
  - [Vercel](https://vercel.com/)
  - [Railway](https://railway.app/)

---

**For any future developer or AI agent:**

- Start by reading this file and the main `README.md`.
- Use the scripts in the root `package.json` to run, lint, or format the codebase.
- All major logic is modular and data-driven for easy extension.
