import { client } from '@/sanity/lib/client'
import { ALL_NEWS_QUERY, LATEST_NEWS_QUERY } from '@/sanity/lib/queries'

export async function getAllNews() {
  return client.fetch(ALL_NEWS_QUERY)
}

export async function getLatestNews() {
  return client.fetch(LATEST_NEWS_QUERY)
}
