import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-04-11',
  useCdn: process.env.NODE_ENV === 'production',
})

// Queries
export const PUBLICATIONS_QUERY = `*[_type == "publication"] | order(year desc) {
  _id,
  year,
  focus,
  title,
  journal,
  url
}`

export const TEAM_QUERY = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  title,
  role,
  bio,
  image,
  specialties
}`

export const PARTNERS_QUERY = `*[_type == "partner"] | order(category asc) {
  _id,
  name,
  category,
  description,
  logo,
  website
}`

export const NEWS_QUERY = `*[_type == "newsItem"] | order(date desc)[0:3] {
  _id,
  title,
  category,
  date,
  summary,
  content
}`

export const RESEARCH_AREAS_QUERY = `*[_type == "researchArea"] | order(order asc) {
  _id,
  title,
  summary,
  tag,
  fullDescription
}`

export const PROGRAMS_QUERY = `*[_type == "program"] {
  _id,
  title,
  format,
  summary,
  fullDescription,
  image
}`

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  role,
  message,
  image,
  type
}`
