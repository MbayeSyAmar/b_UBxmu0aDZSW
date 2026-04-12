import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'program',
  title: 'Training Program',
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
      name: 'format',
      title: 'Format/Duration',
      type: 'string',
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
      name: 'description',
      title: 'Description complète',
      type: 'blockContent',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Full Description (English)',
      type: 'blockContent',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'capacity',
      title: 'Maximum Participants',
      type: 'number',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
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
      subtitle: 'format',
    },
  },
})
