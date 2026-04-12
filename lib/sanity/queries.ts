import { client } from './client'

export const getPublications = async () => {
  const query = `*[_type == "publication"] | order(year desc) {
    _id,
    title,
    titleEn,
    year,
    focus,
    description,
    journal,
    doi,
    pubmedId,
    authors,
    pdfUrl,
    publishedAt,
  }`
  return client.fetch(query)
}

export const getPublicationBySlug = async (slug: string) => {
  const query = `*[_type == "publication" && slug.current == $slug][0] {
    _id,
    title,
    titleEn,
    year,
    focus,
    description,
    journal,
    doi,
    pubmedId,
    authors,
    pdfUrl,
    publishedAt,
  }`
  return client.fetch(query, { slug })
}

export const getTeamMembers = async () => {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    title,
    titleEn,
    specialization,
    bio,
    bioEn,
    photo {
      asset -> {
        url,
      },
      alt,
    },
    email,
    phone,
    department,
    order,
  }`
  return client.fetch(query)
}

export const getPartners = async () => {
  const query = `*[_type == "partner"] | order(order asc) {
    _id,
    name,
    description,
    website,
    logo {
      asset -> {
        url,
      },
    },
    type,
    country,
    order,
  }`
  return client.fetch(query)
}

export const getNews = async () => {
  const query = `*[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    category,
    image {
      asset -> {
        url,
      },
      alt,
    },
    publishedAt,
    author -> {
      name,
    },
  }`
  return client.fetch(query)
}

export const getNewsBySlug = async (slug: string) => {
  const query = `*[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    body,
    bodyEn,
    category,
    image {
      asset -> {
        url,
      },
      alt,
    },
    publishedAt,
    author -> {
      name,
    },
  }`
  return client.fetch(query, { slug })
}

export const getResearch = async () => {
  const query = `*[_type == "research"] | order(order asc) {
    _id,
    title,
    titleEn,
    slug,
    summary,
    summaryEn,
    tag,
    image {
      asset -> {
        url,
      },
    },
    publications[] -> {
      _id,
      title,
      year,
    },
    order,
  }`
  return client.fetch(query)
}

export const getPrograms = async () => {
  const query = `*[_type == "program"] | order(order asc) {
    _id,
    title,
    titleEn,
    slug,
    format,
    summary,
    summaryEn,
    startDate,
    endDate,
    capacity,
    location,
    contactEmail,
    requirements,
    order,
  }`
  return client.fetch(query)
}

export const getTestimonials = async (featured?: boolean) => {
  const query = featured
    ? `*[_type == "testimonial" && featured == true] | order(order asc) {
        _id,
        name,
        title,
        organization,
        quote,
        quoteEn,
        type,
        photo {
          asset -> {
            url,
          },
        },
        date,
        order,
      }`
    : `*[_type == "testimonial"] | order(order asc) {
        _id,
        name,
        title,
        organization,
        quote,
        quoteEn,
        type,
        photo {
          asset -> {
            url,
          },
        },
        date,
        order,
      }`
  return client.fetch(query)
}
