import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'



// @ts-ignore
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components,
        directives,
        defaults:{

            VBtn: {
                color: "blue",
                variant: 'flat',
                rounded: 'lg',
                style: 'text-transform: capitalize; cursor:pointer; ',
            },
            VAppBar:{
                variant:"flat",
                flat:true
            },
            VCard:{
                style:"border-radius:15px"
            }
        }
    })
    app.vueApp.use(vuetify)
})