<template>
  <v-footer style="background-color: #67A83B" class="text-white pa-5">
    <v-row justify="center">
      <v-col cols="12" class="text-center">

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
      </v-col>

      <v-col cols="12" sm="4" class="text-center mt-4">
        <v-row dense>
          <v-col cols="12" sm="4">
            <center>
              <v-img width="180" src="/logo.png"></v-img>

            </center>
          </v-col>
          <v-col cols="12" sm="8">

            <p class="text-h5 font-weight-black text-center">About Us</p>
            <p class="text-justify">
              At Evans Race & Van Dreel CPAs, we set ourselves apart from traditional accounting and CPA firms by
              offering you experience with a personal touch and innovative solutions for your individual tax needs.
              The firm of Evans and Race Co. was founded in 1941.
            </p>
          </v-col>
        </v-row>


      </v-col>
<v-divider vertical></v-divider>
      <v-col cols="12" sm="4" class="mt-4">
        <p class="text-h5 font-weight-black pl-5">Forms</p>

        <v-list class="bg-transparent" lines>
          <v-list-item v-for="(form, index) in forms" :key="index" :href="form.link">
          <template v-slot:prepend>
            <v-icon color="white">mdi-download-outline</v-icon>
          </template>  <v-list-item-title>{{form.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-divider vertical></v-divider>

      <v-col cols="12" sm="4" class="mt-4">
        <p class="text-h5 font-weight-black pl-5">Useful Links</p>
        <v-list class="bg-transparent" lines>
          <v-list-item target="_blank" v-for="(link, index) in links" :key="index" :href="link.url">
            <template v-slot:prepend>
              <v-icon color="white">mdi-link</v-icon>
            </template>  <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col class="text-center mt-4" cols="12">
        Accounting and Tax Solutions of Illinois  <v-icon size="x-small">mdi-copyright</v-icon>
        {{ new Date().getFullYear() }}
      </v-col>

    </v-row>


  </v-footer>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      forms: [
        {
          title: "2023 Individual Tax Engagement Letter",
          link: "http://www.vandreel.com/resources/2023%20INDIV%20TAX%20ENGAGEMENT.pdf"
        },
        {
          title: "Charitable Deduction Schedule (Optional)",
          link: "http://www.vandreel.com/resources/CHARITABLE%20DEDUCTION%20SCHEDULE.pdf"
        },
        {
          title: "Dependency Determination Schedule (Optional)",
          link: "http://www.vandreel.com/resources/Dependency%20Determination%20Schedule.pdf"
        }
      ] ,

      links:[

        {
          title:"My Tax Office Portal",
          url:"https://www.mytaxoffice.com/cp/home/cp_login.php"
        },
        {
          title:"2023 Tax Engagement Letters",
          url:"http://www.vandreel.com/resources/2023%20INDIV%20TAX%20ENGAGEMENT.pdf"
        },
        {
          title:"2023 Individual Tax Engagement Letter",
          url:"http://www.vandreel.com/resources/CHARITABLE%20DEDUCTION%20SCHEDULE.pdf"
        }
        ,
        {
          title:"Charitable Deduction Schedule (Optional)",
          url:"http://www.vandreel.com/resources/Dependency%20Determination%20Schedule.pdf"
        },
        {
          title:"IRS Federal Refund Status",
          url:"https://sa.www4.irs.gov/wmr"
        },
        {
          title:"State of Illinois Refund Status",
          url:"https://mytax.illinois.gov"
        }

      ]
    }
  }
})
</script>


<style scoped>

</style>