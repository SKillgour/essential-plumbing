export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'title', title: 'Service Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Short Description', type: 'text' },
    { name: 'body', title: 'Full Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'icon', title: 'Icon (emoji or name)', type: 'string' },
    { name: 'image', title: 'Service Image', type: 'image' },
    { name: 'sortOrder', title: 'Sort Order', type: 'number' },
    { name: 'featured', title: 'Show on Homepage', type: 'boolean', initialValue: false },
  ],
}
