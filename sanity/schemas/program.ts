export default {
  name: 'program',
  title: 'Programme de Formation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { title: '12-month cohort', value: '12-month cohort' },
          { title: 'Modular curriculum', value: 'Modular curriculum' },
          { title: 'Executive format', value: 'Executive format' },
          { title: 'On-demand', value: 'On-demand' },
        ],
      },
    },
    {
      name: 'summary',
      title: 'Résumé',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullDescription',
      title: 'Description complète',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'eligibility',
      title: 'Critères d\'éligibilité',
      type: 'text',
    },
    {
      name: 'startDate',
      title: 'Date de démarrage',
      type: 'date',
    },
    {
      name: 'applicationUrl',
      title: 'Lien de candidature',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'format',
      media: 'image',
    },
  },
}
