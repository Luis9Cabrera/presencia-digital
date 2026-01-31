// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Luis9Cabrera.github.io',          // ej: https://luisdevpuebla.github.io
  base: '/presencia-digital/',                     // ej: '/mi-pagina-astro/'   ← importante si NO es tu repo usuario.github.io
  output: 'static',                              // ya debería estar así por defecto
  vite: {
    plugins: [tailwindcss()]
  }
});