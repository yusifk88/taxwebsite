// @ts-ignore
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// @ts-ignore
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '3a2d83ebc541a480f2fba1cca5f7743e-6fafb9bf-2c50c057',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      apiSecret: '3a2d83ebc541a480f2fba1cca5f7743e-6fafb9bf-2c50c057',
    }
  },
  gtag: {
    id: 'G-DJTJKJP10Y',
    config: {
      page_title: 'Accounting and Tax Solutions of Illinois'
    }
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-gtag'
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})