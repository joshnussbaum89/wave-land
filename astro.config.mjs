import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import sentry from '@sentry/astro'
import spotlightjs from '@spotlightjs/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://wavelandweb.com',
  scopedStyleStrategy: 'class',
  integrations: [
    sitemap({
      lastmod: new Date(),
    }),
    sentry(),
    spotlightjs(),
  ],
})
