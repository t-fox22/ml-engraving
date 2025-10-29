// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import 'dotenv/config';


// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  site: 'https://www.midlandslaserengraving.com',
  base: '/',
  // site: 'https://t-fox22.github.io/',
  // base: '/ml-engraving/',
});
