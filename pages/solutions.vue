
<template>
<v-container style=" padding-top: 60px;">
  <v-col cols="12" sm="8" class="mx-auto">
    <p class="text-center text-h4 font-weight-black ma-2" style="color: #68A73E">Our Services</p>
    <p class="text-center">Some of our professional service include</p>

    <v-row class="mt-5" >
      <v-col cols="12" sm="4" v-for="(service, index) in services" :key="index">
        <v-card class="text-center" height="200" exact :variant="(index+1)%2!==0 ? 'outlined' : 'outlined'" color="#32A0CE" >
          <v-card-text>
            <v-icon color="#32A0CE" size="60">{{service.icon}}</v-icon>
            <p class="font-weight-light text-h6">{{service.title}}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card variant="flat" color="#32A0CE" height="200" class="text-center">
          <v-card-text>
            <v-icon color="white" size="60">mdi-email-outline</v-icon>
            <p class="text-white font-weight-light text-h6">Contact Us Now</p>
            <v-btn size="x-large" color="white" class="mt-4" variant="outlined">Contact Us<sup><v-icon size="x-small">mdi-open-in-new</v-icon></sup></v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-col>
</v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "solutions",
  data(){
    return{
      services:[
        {
          title:"IRS tax audits",
          icon:"mdi-calculator-variant-outline",
          description:""
        },
        {
          title:"State tax audits",
          icon:"mdi-scale-balance",
          description:""
        },
        {
          title:"IRS and state lien cancellation and reversals",
          icon:"mdi-sort-reverse-variant",
          description:""
        }
        ,
        {
          title:"Wage garnishments",
          icon:"mdi-bank-circle-outline",
          description:""
        } ,
        {
          title:"Penalties and interest abatement",
          icon:"mdi-file-chart-check",
          description:""
        }

      ]
    }
  },
  mounted() {
    useSeoMeta({
      title: 'Accounting and Tax Solutions of Illinois | our solution',
      ogTitle: 'Accounting and Tax Solutions of Illinois',
      description: 'Accounting and Tax Solutions of Illinois',
      ogDescription: 'Accounting and Tax Solutions of Illinois',
      ogImage: '/logo.png',
      twitterCard: 'summary_large_image',
    })
  }
})
</script>

<style scoped>

</style>