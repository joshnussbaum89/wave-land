import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      published: z.string(),
      image: image(),
      imageAlt: z.string(),
      socialImage: z.string(),
      layout: z.string(),
    }),
})

export const collections = {
  blog: blogCollection,
}
