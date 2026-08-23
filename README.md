# Utkarsh Morwal — Portfolio Website

A full-stack portfolio built from your resume:

- **Backend:** Java 17 + Spring Boot 3 (REST API serving your profile, projects,
  experience, skills, and certifications; handles the contact form)
- **Frontend:** React + Vite, styled as an interactive "code editor" --
  tabs double as section navigation, a hero that types out a live Java class,
  dark/light theme toggle, scroll-reveal animations, and a contact form wired
  to the real API.

```
utkarsh-portfolio/
├── backend/     Spring Boot API (Maven)
└── frontend/    React app (Vite)
```

The frontend also ships with a copy of your resume data baked in
(`frontend/src/data/fallbackData.js`), so the site looks complete and never
shows a blank page even before the backend is deployed or if it's ever down.
A small status pill in the top bar shows `api: connected` when it's
successfully talking to your live backend, and `api: cached data` otherwise.

---

## 1. Run it locally first

### Backend

Requires JDK 17+ and Maven (or use the included `mvnw` if you add one via
`mvn -N io.takari:maven:wrapper`).

```bash
cd backend
mvn spring-boot:run
```

The API starts on `http://localhost:8080`. Sanity check:

```bash
curl http://localhost:8080/api/profile
```

### Frontend

Requires Node.js 18+.

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). With the backend
running, the status pill should read `api: connected`.

---

## 2. Customize your content

Before deploying, update the placeholder values:

- **`backend/src/main/java/com/utkarsh/portfolio/data/PortfolioData.java`**
  and **`frontend/src/data/fallbackData.js`** -- both currently hold the same
  resume data with placeholder GitHub/LinkedIn/live-project URLs
  (`your-handle`). Update both files identically so the live API and the
  offline fallback always agree. Swap in your real repo/live links per
  project.
- **`frontend/public/resume.pdf`** -- replace with the exact PDF you want
  visitors to download.
- **`frontend/public/favicon.svg`** -- swap for your own mark if you like.

---

## 3. Deploy the backend to Railway

Railway matches what your resume already lists for the Auren project, so
it's a natural fit here too.

1. Push the `backend/` folder to its own GitHub repo (or push the whole
   monorepo -- Railway lets you set a root directory).
2. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from
   GitHub repo** → select your repo.
3. If it's a monorepo, set **Root Directory** to `backend` in the service
   settings.
4. Railway auto-detects the Maven/Spring Boot project and builds it. If you
   want to be explicit, set:
   - **Build command:** `mvn -DskipTests clean package`
   - **Start command:** `java -jar target/portfolio.jar`
5. Under **Variables**, add:
   - `ALLOWED_ORIGINS` = `https://your-project.vercel.app` (you'll get this
     exact URL in step 4 below -- come back and update it once you have it;
     comma-separate multiple origins, e.g. add `http://localhost:5173` too
     while testing)
   - Optional, to email yourself contact-form submissions:
     `MAIL_HOST=smtp.gmail.com`, `MAIL_PORT=587`, `MAIL_USERNAME=you@gmail.com`,
     `MAIL_PASSWORD=<a Gmail App Password, not your login password>`,
     `CONTACT_NOTIFY_TO=you@gmail.com`
6. Deploy. Railway gives you a public URL like
   `https://portfolio-production-xxxx.up.railway.app` -- copy it, you'll need
   it for the frontend.
7. Confirm it works: `curl https://<your-railway-url>/api/profile`.

*(Note: `server.port` in `application.properties` already reads Railway's
injected `PORT` variable automatically -- no change needed there.)*

---

## 4. Deploy the frontend to Vercel

1. Push `frontend/` to GitHub (its own repo, or the same monorepo with a
   different root directory).
2. Go to [vercel.com](https://vercel.com) → **Add New...** → **Project** →
   import your repo.
3. If it's a monorepo, set **Root Directory** to `frontend`.
4. Vercel auto-detects Vite (`Build Command: vite build`,
   `Output Directory: dist`) -- leave the defaults.
5. Under **Environment Variables**, add:
   - `VITE_API_URL` = `https://<your-railway-url>` (no trailing slash --
     the exact URL from step 3.6 above)
6. Click **Deploy**. Vercel gives you a URL like
   `https://your-project.vercel.app`.

---

## 5. Connect them (the important last step)

The two services need to know about each other:

1. **Frontend → Backend:** Already done via `VITE_API_URL` in step 4.5.
   Vite bakes env vars starting with `VITE_` into the build at build time, so
   if you change it later, redeploy the frontend for it to take effect.
2. **Backend → Frontend (CORS):** Go back to Railway's `ALLOWED_ORIGINS`
   variable and set it to your real Vercel URL from step 4.6, e.g.
   `ALLOWED_ORIGINS=https://your-project.vercel.app`. Redeploy the backend
   (Railway usually does this automatically when you save a variable).

Then open your Vercel URL -- the title bar's status pill should read
`api: connected`, and submitting the contact form should return a success
message from the real backend.

---

## 6. If you'd rather use React for the frontend but skip Railway

Any Java host that runs a standard Spring Boot jar works the same way --
Render, Fly.io, an EC2/VM with `java -jar`, or your own server behind Nginx.
The only things that ever need to change are:
- `ALLOWED_ORIGINS` on the backend (must match your real frontend URL)
- `VITE_API_URL` on the frontend (must match your real backend URL)

## 7. Optional next steps

- Swap the in-memory contact-message storage for a database (add
  `spring-boot-starter-data-jpa` + MySQL, matching the stack you already
  used in the Auren and Banking System projects) if you want a persistent
  admin view of submissions.
- Add a custom domain in Vercel's project settings, then update
  `ALLOWED_ORIGINS` on Railway to match.
- Add analytics (Vercel Analytics is a one-click toggle in the project
  dashboard).
