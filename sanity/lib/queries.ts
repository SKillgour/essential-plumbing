export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]`
export const CONTACT_SETTINGS_QUERY = `*[_type == "contactSettings"][0]`
export const SEO_DEFAULTS_QUERY = `*[_type == "seoDefaults"][0]`

export const ALL_NEWS_QUERY = `*[_type == "news" && published == true] | order(publishedAt desc)`
export const LATEST_NEWS_QUERY = `*[_type == "news" && published == true] | order(publishedAt desc)[0..2]`

export const ALL_SERVICES_QUERY = `*[_type == "services"] | order(sortOrder asc)`
export const FEATURED_SERVICES_QUERY = `*[_type == "services" && featured == true] | order(sortOrder asc)`

export const FEATURED_TESTIMONIALS_QUERY = `*[_type == "testimonials" && featured == true]`

export const MENU_CATEGORIES_QUERY = `*[_type == "menuCategories"] | order(sortOrder asc)`
export const MENU_ITEMS_QUERY = `*[_type == "menuItems" && available == true]{
  ...,
  category->{ _id, title }
} | order(sortOrder asc)`
export const FEATURED_MENU_QUERY = `*[_type == "menuItems" && featured == true && available == true]{
  ...,
  category->{ _id, title }
}`
