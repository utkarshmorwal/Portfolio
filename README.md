# Utkarsh Morwal — Portfolio Website

A full-stack portfolio built from your resume: https://utkarsh-class.vercel.app/

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
