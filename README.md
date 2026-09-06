# Utkarsh Morwal — Portfolio Website

Live : https://utkarsh-class.vercel.app/

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
