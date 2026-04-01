import { client } from '@/sanity/lib/client'
import { ALL_SERVICES_QUERY, FEATURED_SERVICES_QUERY } from '@/sanity/lib/queries'

export async function getAllServices() {
  return client.fetch(ALL_SERVICES_QUERY)
}

export async function getFeaturedServices() {
  return client.fetch(FEATURED_SERVICES_QUERY)
}
