export default {
  name: 'teamMember',
  title: 'Membre de l\'Équipe',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom Complet',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Titre/Fonction',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Domaine / Rôle',
      type: 'string',
      options: {
        list: [
          { title: 'Direction', value: 'direction' },
          { title: 'Recherche Clinique', value: 'clinical_research' },
          { title: 'Epidémiologie', value: 'epidemiology' },
          { title: 'Laboratoire', value: 'laboratory' },
          { title: 'Formation', value: 'training' },
          { title: 'Administration', value: 'admin' },
        ],
      },
    },
    {
      name: 'bio',
      title: 'Biographie (EN)',
      type: 'text',
    },
    {
      name: 'bio_fr',
      title: 'Biographie (FR)',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'specialties',
      title: 'Spécialités',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
    },
  },
}
