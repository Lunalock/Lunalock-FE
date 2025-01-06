// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt'],
  plugins: [
    '~/plugins/vue-chartjs.ts'
  ],
  quasar: {
    extras: {
      font: 'roboto-font', // Use the Roboto font
      fontIcons: ['material-icons'], // Use Material Icons
    },
  },
  css: [
    '@/assets/styles/main.css', 
    '@/assets/styles/variables.css',
    'quasar/dist/quasar.css'
  ],
  app: {
    baseURL: '/Lunalock-FE/', // Add the subdirectory path for GitHub Pages
  },
})