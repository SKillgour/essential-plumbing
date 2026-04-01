export default {
  name: 'news',
  title: 'News & Updates',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'summary', title: 'Summary', type: 'text' },
    { name: 'body', title: 'Content', type: 'array', of: [{ type: 'block' }] },
    { name: 'image', title: 'Featured Image', type: 'image' },
    { name: 'publishedAt', title: 'Published Date', type: 'datetime' },
    { name: 'published', title: 'Published', type: 'boolean', initialValue: false },
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
}
