<template>
  <NuxtLayout>

    <v-app>
      <v-system-bar v-if="$vuetify.display.mdAndUp" color="white" class="pl-3 pr-3">

        <p class="ml-5 mr-5">15545 S 71st Ct
          Ste 202
          Orland Park il 60462-5300
          United States</p> |
        <p class="ml-5 mr-5">Support@myatsii.com</p> |
        <p class="ml-5 mr-5">+1 (708) 665-6000</p>
        <v-icon color="blue" class="ms-2" icon="mdi-facebook"></v-icon>
        <v-icon class="ms-2" icon="mdi-linkedin" color="blue"></v-icon>
        <v-icon class="ms-2" icon="mdi-alpha-x" color="blue"></v-icon>
      </v-system-bar>
      <v-app-bar color="blue" class="pl-5 pr-5">

        <template v-slot:prepend v-if="$vuetify.display.mobile">
          <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
        </template>

        <template v-if="$vuetify.display.mdAndUp">

        <v-btn NuxtLink to="/" class="text-white" style="color: white !important;">
          Home
        </v-btn>

        <v-btn to="/staff" NuxtLink style="color: white !important;">
          Our Staff
        </v-btn>

        <v-btn to="/solutions" NuxtLink style="color: white !important;">
          Tax Solutions
        </v-btn>

        <v-btn to="/resources" NuxtLink style="color: white !important;" >
          Resources
        </v-btn>

        <v-btn to="/contact" NuxtLink style="color: white !important;">
          Contact Us
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
<script  lang="ts">
import {defineComponent} from "vue";
import FooterComponent from "~/components/FooterComponent.vue";

export default defineComponent({
  components: {FooterComponent}
})
</script>