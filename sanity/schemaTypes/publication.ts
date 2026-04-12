import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publication',
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
      name: 'year',
      title: 'Année',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'focus',
      title: 'Focus',
      type: 'string',
      options: {
        list: [
          { title: 'Diagnostics', value: 'Diagnostics' },
          { title: 'Field surveillance', value: 'Field surveillance' },
          { title: 'Implementation science', value: 'Implementation science' },
          { title: 'Clinical pathways', value: 'Clinical pathways' },
          { title: 'Therapeutics', value: 'Therapeutics' },
          { title: 'Vector ecology', value: 'Vector ecology' },
        ]
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'journal',
      title: 'Journal',
      type: 'string',
    }),
    defineField({
      name: 'doi',
      title: 'DOI',
      type: 'string',
    }),
    defineField({
      name: 'pubmedId',
      title: 'PubMed ID',
      type: 'string',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pdfUrl',
      title: 'PDF URL',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      focus: 'focus',
    },
    prepare({ title, year, focus }) {
      return {
        title,
        subtitle: `${year} • ${focus}`,
      }
    },
  },
})
