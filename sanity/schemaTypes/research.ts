import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'research',
  title: 'Research Area',
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
      options: { source: 'title' },
    }),
    defineField({
      name: 'summary',
      title: 'Résumé',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'summaryEn',
      title: 'Summary (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'details',
      title: 'Détails',
      type: 'blockContent',
    }),
    defineField({
      name: 'detailsEn',
      title: 'Details (English)',
      type: 'blockContent',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Surveillance', value: 'Surveillance' },
          { title: 'Diagnostics', value: 'Diagnostics' },
          { title: 'Clinical research', value: 'Clinical research' },
          { title: 'Equity', value: 'Equity' },
          { title: 'Systems science', value: 'Systems science' },
          { title: 'Impact', value: 'Impact' },
        ]
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'publication' }] }],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
      media: 'image',
    },
  },
})
