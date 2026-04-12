export default {
  name: 'publication',
  title: 'Publication Scientifique',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Année',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'focus',
      title: 'Domaine de Focus',
      type: 'string',
      options: {
        list: [
          { title: 'Diagnostics', value: 'Diagnostics' },
          { title: 'Field surveillance', value: 'Field surveillance' },
          { title: 'Implementation science', value: 'Implementation science' },
          { title: 'Clinical pathways', value: 'Clinical pathways' },
        ],
      },
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'journal',
      title: 'Journal/Revue',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL de l\'article (DOI ou lien direct)',
      type: 'url',
    },
    {
      name: 'authors',
      title: 'Auteurs',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'journal',
    },
  },
}
