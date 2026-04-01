import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './singletons/siteSettings'
import contactSettings from './singletons/contactSettings'
import seoDefaults from './singletons/seoDefaults'
import news from './collections/news'
import services from './collections/services'
import testimonials from './collections/testimonials'
import menuCategories from './collections/menuCategories'
import menuItems from './collections/menuItems'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    contactSettings,
    seoDefaults,
    news,
    services,
    testimonials,
    menuCategories,
    menuItems,
  ],
}
