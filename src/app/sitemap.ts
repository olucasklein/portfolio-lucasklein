import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrls = [
    'https://www.lucaskleindev.com',
  ]
  
  return baseUrls.map(baseUrl => ({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }))
}
