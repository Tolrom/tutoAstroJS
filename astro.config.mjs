// @ts-check
import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';

const env = loadEnv("", process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      host: 'localhost'
    },
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN
    }),
    tailwind()
  ]
})