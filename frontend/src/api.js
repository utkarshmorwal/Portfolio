// Thin wrapper around the Spring Boot API. Every getter falls back to the
// bundled resume data if the request fails, so the site is never blank --
// this is what lets the frontend be deployed and look complete even before
// the backend is live, and keeps working if the backend ever sleeps/cold-starts.

import {
  fallbackProfile,
  fallbackProjects,
  fallbackExperience,
  fallbackSkills,
  fallbackCertifications,
} from './data/fallbackData'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

async function getJson(path) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 6000)
  try {
    const res = await fetch(`${API_URL}${path}`, { signal: controller.signal })
    if (!res.ok) throw new Error(`Request to ${path} failed with ${res.status}`)
    return await res.json()
  } finally {
    clearTimeout(timeout)
  }
}

export async function fetchProfile() {
  try {
    return { data: await getJson('/api/profile'), live: true }
  } catch {
    return { data: fallbackProfile, live: false }
  }
}

export async function fetchProjects() {
  try {
    return { data: await getJson('/api/projects'), live: true }
  } catch {
    return { data: fallbackProjects, live: false }
  }
}

export async function fetchExperience() {
  try {
    return { data: await getJson('/api/experience'), live: true }
  } catch {
    return { data: fallbackExperience, live: false }
  }
}

export async function fetchSkills() {
  try {
    return { data: await getJson('/api/skills'), live: true }
  } catch {
    return { data: fallbackSkills, live: false }
  }
}

export async function fetchCertifications() {
  try {
    return { data: await getJson('/api/certifications'), live: true }
  } catch {
    return { data: fallbackCertifications, live: false }
  }
}

export async function submitContactForm(payload) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    const err = new Error(body.message || 'Something went wrong. Please try again.')
    err.fieldErrors = body.errors || {}
    throw err
  }
  return body
}

export { API_URL }
