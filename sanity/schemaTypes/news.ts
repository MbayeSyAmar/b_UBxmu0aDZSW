import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'News / Actualité',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'excerptEn',
      title: 'Excerpt (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Corps',
      type: 'blockContent',
    }),
    defineField({
      name: 'bodyEn',
      title: 'Body (English)',
      type: 'blockContent',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Regional partnership', value: 'regional_partnership' },
          { title: 'Clinical platform', value: 'clinical_platform' },
          { title: 'Training', value: 'training' },
          { title: 'Research', value: 'research' },
          { title: 'Community', value: 'community' },
          { title: 'Event', value: 'event' },
        ]
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'teamMember' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      media: 'image',
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: new Date(date).toLocaleDateString('fr-FR'),
        media,
      }
    },
  },
})
