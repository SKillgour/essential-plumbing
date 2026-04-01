export default {
  name: 'menuItems',
  title: 'Menu Items',
  type: 'document',
  fields: [
    { name: 'name', title: 'Item Name', type: 'string' },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'menuCategories' }],
    },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'price', title: 'Price', type: 'number' },
    {
      name: 'dietaryTags',
      title: 'Dietary Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Vegetarian', value: 'vegetarian' },
          { title: 'Vegan', value: 'vegan' },
          { title: 'Gluten Free', value: 'gluten-free' },
          { title: 'Contains Nuts', value: 'nuts' },
          { title: 'Spicy', value: 'spicy' },
        ],
      },
    },
    { name: 'image', title: 'Item Photo', type: 'image' },
    { name: 'available', title: 'Currently Available', type: 'boolean', initialValue: true },
    { name: 'featured', title: 'Feature This Item', type: 'boolean', initialValue: false },
    { name: 'sortOrder', title: 'Sort Order', type: 'number' },
  ],
}
