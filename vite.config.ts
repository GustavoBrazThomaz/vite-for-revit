import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    {
      name: 'my-plugin',
      transform(code, id) {
        if (id.endsWith('.js')) {
          code = code.replace(/catch\s*\(\s*\)\s*{/g, 'catch (e) {');
        }
        return {
          code,
          map: null
        };
      }
    }
  ],
})
