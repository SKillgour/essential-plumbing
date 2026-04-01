export default {
  name: 'seoDefaults',
  title: 'SEO Defaults',
  type: 'document',
  fields: [
    { name: 'titlePattern', title: 'Title Pattern (e.g. %s | Business Name)', type: 'string' },
    { name: 'defaultDescription', title: 'Default Meta Description', type: 'text' },
    { name: 'ogImage', title: 'Default Social Share Image', type: 'image' },
  ],
}
