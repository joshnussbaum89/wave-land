import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://wavelandweb.com',
  output: 'hybrid',
  scopedStyleStrategy: 'class',
  integrations: [
    sitemap({
      lastmod: new Date(),
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
    },
  },
  devToolbar: {
    enabled: false,
  },
})
