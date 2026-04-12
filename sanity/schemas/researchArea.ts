export default {
  name: 'researchArea',
  title: 'Domaine de Recherche',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Résumé court',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Étiquette / Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Surveillance', value: 'Surveillance' },
          { title: 'Diagnostics', value: 'Diagnostics' },
          { title: 'Recherche clinique', value: 'Clinical research' },
          { title: 'Justice équité', value: 'Equity' },
          { title: 'Science systémique', value: 'Systems science' },
          { title: 'Impact', value: 'Impact' },
        ],
      },
    },
    {
      name: 'fullDescription',
      title: 'Description complète',
      type: 'blockContent',
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
    },
  },
}
