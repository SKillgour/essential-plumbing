import { client } from '@/sanity/lib/client'
import { MENU_CATEGORIES_QUERY, MENU_ITEMS_QUERY } from '@/sanity/lib/queries'

export async function getMenuCategories() {
  return client.fetch(MENU_CATEGORIES_QUERY)
}

export async function getMenuItems() {
  return client.fetch(MENU_ITEMS_QUERY)
}
