import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://wavelandweb.com',
  scopedStyleStrategy: 'class',
  integrations: [
    sitemap({
      lastmod: new Date(),
    }),
  ],
  devToolbar: {
    enabled: false,
  },
})
