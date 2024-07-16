// @ts-ignore
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// @ts-ignore
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    mailgunKey: '',
    // Keys within public, will be also exposed to the client-side
    public: {
      mailgunKey:'',
      mailgunDomain:''
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