import { client } from '@/sanity/lib/client'
import { FEATURED_TESTIMONIALS_QUERY } from '@/sanity/lib/queries'

export async function getFeaturedTestimonials() {
  return client.fetch(FEATURED_TESTIMONIALS_QUERY)
}
