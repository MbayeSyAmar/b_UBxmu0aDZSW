export default {
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Rôle / Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Patient', value: 'patient' },
          { title: 'Chercheur', value: 'researcher' },
          { title: 'Partenaire', value: 'partner' },
          { title: 'Professionnel de santé', value: 'healthcare' },
          { title: 'Donateur/Bailleur', value: 'funder' },
          { title: 'Communauté', value: 'community' },
        ],
      },
    },
    {
      name: 'message',
      title: 'Témoignage',
      type: 'text',
      validation: (Rule) => Rule.required(),
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
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'image',
    },
  },
}
