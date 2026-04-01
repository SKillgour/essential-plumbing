import { client } from '@/sanity/lib/client'
import { CONTACT_SETTINGS_QUERY } from '@/sanity/lib/queries'

export async function getContactSettings() {
  return client.fetch(CONTACT_SETTINGS_QUERY)
}
