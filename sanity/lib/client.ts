//sanity/lib/client.ts
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Create a Sanity client instance
export const client = createClient({
  projectId, // Project ID from environment variables
  dataset, // Dataset from environment variables
  apiVersion, // API version to use
  useCdn: true, // Use CDN for faster responses, set to false for real-time updates
})
