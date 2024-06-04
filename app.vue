<template>
  <NuxtLayout>

    <v-app>

      <v-navigation-drawer
          v-model="drawer"
          temporary
      >

        <v-list>
          <v-list-item v-for="(nav,index) in navLinks" :to="nav.to" color="#32A0CE" :key="index">
            <v-list-item-title>{{nav.label}}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <v-system-bar v-if="$vuetify.display.mdAndUp" color="white" class="pl-3 pr-3">

        <p class="ml-5 mr-5">15545 S 71st Ct
          Ste 202
          Orland Park il 60462-5300
          United States</p> |
        <p class="ml-5 mr-5">Support@myatsii.com</p> |
        <p class="ml-5 mr-5">+1 (708) 665-6000</p>
<!--        <v-icon color="blue" class="ms-2" icon="mdi-facebook"></v-icon>-->
<!--        <v-icon class="ms-2" icon="mdi-linkedin" color="blue"></v-icon>-->
<!--        <v-icon class="ms-2" icon="mdi-alpha-x" color="blue"></v-icon>-->
      </v-system-bar>
      <v-app-bar color="#32A0CE" class="pl-5 pr-5">

        <template v-if="$vuetify.display.mobile">
          <v-app-bar-nav-icon @click="drawer=!drawer" color="white"></v-app-bar-nav-icon>
        </template>

        <template v-if="$vuetify.display.mdAndUp">

        <v-btn v-for="(nav,index) in navLinks" :key="index" NuxtLink :to="nav.to" class="text-white" style="color: white !important;">
          {{nav.label}}
        </v-btn>


        </template>

      </v-app-bar>

      <v-container fluid style=" padding-top: 20px;" class="mt-5 pr-0 pl-0">

<NuxtPage/>

      </v-container>

<footer-component></footer-component>
    </v-app>
  </NuxtLayout>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import FooterComponent from "~/components/FooterComponent.vue";
export default defineComponent({
  components: {FooterComponent},
  data(){
    return{
      drawer:false,
      navLinks:[
        {
          label:"Home",
          to:"/"
        },
        {
          label:"Our Staff",
          to:"/staff"
        },
        {
          label:"Tax Solutions",
          to:"/solutions"
        },
        {
          label:"Resources",
          to:"/resources"
        },
        {
          label:"Contact Us",
          to:"/contact"
        }

      ]
    }
  },
  mounted() {
    useSeoMeta({
      title: 'Accounting and Tax Solutions of Illinois',
      ogTitle: 'Accounting and Tax Solutions of Illinois',
      description: 'Accounting and Tax Solutions of Illinois',
      ogDescription: 'Accounting and Tax Solutions of Illinois',
      ogImage: '/logo.png',
      twitterCard: 'summary_large_image',
    })

  }
})

</script>

<style>

*{
  font-family: "Noto Sans Hanunoo", sans-serif;
}

</style>