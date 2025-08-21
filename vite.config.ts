import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import sassDts from 'vite-plugin-sass-dts';

export default defineConfig({
  plugins: [react(), sassDts()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:map";
                        @use "sass:meta";
                        @use "@styles/_variables" as *;
                        @use "@styles/_mixins" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
})
