import { client } from '@/sanity/lib/client'
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'

export async function getSiteSettings() {
  return client.fetch(SITE_SETTINGS_QUERY)
}
