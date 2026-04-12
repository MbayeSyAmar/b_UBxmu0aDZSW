export default {
  name: 'newsItem',
  title: 'Actualité / News',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Partenariat régional', value: 'Regional partnership' },
          { title: 'Plateforme clinique', value: 'Clinical platform' },
          { title: 'Formation', value: 'Training' },
          { title: 'Événement', value: 'Event' },
          { title: 'Publication', value: 'Publication' },
        ],
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Résumé',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image mise en avant',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
}
