import { defineConfig } from 'vite'
import { join } from "path";
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
      vue(),
  ],
    define: {
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
    },
    resolve: {
        alias: {
            '@': join(__dirname, "src"),
        }
    }
})
