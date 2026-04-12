import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titre/Position',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'specialization',
      title: 'Specialization',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., Parasitology, Immunology, Epidemiology',
    }),
    defineField({
      name: 'bio',
      title: 'Biographie',
      type: 'text',
    }),
    defineField({
      name: 'bioEn',
      title: 'Biography (English)',
      type: 'text',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Research', value: 'research' },
          { title: 'Clinical', value: 'clinical' },
          { title: 'Administration', value: 'administration' },
          { title: 'Training', value: 'training' },
          { title: 'Community', value: 'community' },
        ]
      }
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    },
  },
})
