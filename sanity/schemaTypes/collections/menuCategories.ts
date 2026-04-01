export default {
  name: 'menuCategories',
  title: 'Menu Categories',
  type: 'document',
  fields: [
    { name: 'title', title: 'Category Name (e.g. Starters, Mains)', type: 'string' },
    { name: 'sortOrder', title: 'Sort Order', type: 'number' },
  ],
}
