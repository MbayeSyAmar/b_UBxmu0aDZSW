export default {
  name: 'partner',
  title: 'Partenaire Institutionnel',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom de l\'organisation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Ministère', value: 'ministry' },
          { title: 'Université', value: 'university' },
          { title: 'Hôpital', value: 'hospital' },
          { title: 'ONG', value: 'ngo' },
          { title: 'Bailleur de fonds', value: 'funder' },
          { title: 'Organisation internationale', value: 'international' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'website',
      title: 'Site web',
      type: 'url',
    },
    {
      name: 'country',
      title: 'Pays',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
    },
  },
}
