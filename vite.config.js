import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'HairPhones Shipper App',
        short_name: 'HairPhones Shipper',
        description: 'Ứng dụng giao hàng PWA cho shipper',
        theme_color: '#d42020ff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/image512.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/image512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    host: true
  },
  preview: {
    host: true
  }
})
