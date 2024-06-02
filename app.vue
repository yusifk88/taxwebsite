<template>
  <NuxtLayout>

    <v-app>
      <v-system-bar color="white" class="pl-3 pr-3">

        <p class="ml-5 mr-5">Some address here</p> |
        <p class="ml-5 mr-5">mail@zerotrust.com</p> |
        <p class="ml-5 mr-5">+1 (708) 940-9918</p>
        <v-icon color="blue" class="ms-2" icon="mdi-facebook"></v-icon>
        <v-icon class="ms-2" icon="mdi-linkedin" color="blue"></v-icon>
        <v-icon class="ms-2" icon="mdi-alpha-x" color="blue"></v-icon>
      </v-system-bar>
      <v-app-bar color="blue" class="pl-5 pr-5">
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


      </v-app-bar>

      <v-container fluid style=" padding-top: 20px;" class="mt-5 pr-0 pl-0">

<NuxtPage/>

      </v-container>

      <v-footer  style="background-color: #1E293E" class="text-white">
        <v-row justify="center" no-gutters>
          <v-btn variant="text" NuxtLink to="/" style="color: white !important;">
            Home
          </v-btn>

          <v-btn variant="text" to="/staff" NuxtLink style="color: white !important;">
            Our Staff
          </v-btn>

          <v-btn variant="text" to="/solutions" NuxtLink style="color: white !important;">
            Tax Solutions
          </v-btn>

          <v-btn variant="text" to="/resources" NuxtLink style="color: white !important;">
            Resources
          </v-btn>

          <v-btn variant="text" to="/contact" NuxtLink style="color: white !important;">
            Contact Us
          </v-btn>
          <v-col cols="12" class="text-center">
            Accounting and Tax Solutions of Illinois
          </v-col>
          <v-col class="text-center mt-4" cols="12">
           <v-icon size="x-small">mdi-copyright</v-icon> {{ new Date().getFullYear() }}
          </v-col>
        </v-row>
      </v-footer>

    </v-app>
  </NuxtLayout>
</template>
<script  lang="ts">
</script>