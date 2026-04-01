export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'quote', title: 'Quote', type: 'text' },
    { name: 'name', title: 'Customer Name', type: 'string' },
    { name: 'location', title: 'Suburb or Company', type: 'string' },
    {
      name: 'rating',
      title: 'Star Rating (1–5)',
      type: 'number',
      validation: (R: any) => R.min(1).max(5),
    },
    { name: 'featured', title: 'Show on Homepage', type: 'boolean', initialValue: false },
  ],
}
