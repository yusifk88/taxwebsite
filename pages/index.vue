<template>

  <home-jombothrone></home-jombothrone>

  <v-container class="pr-0 mt-6">
    <v-row class="mt-5" >
      <v-col cols="12" sm="8">
        <p class="text-center text-h4 font-weight-black ma-2">Our Services</p>
        <p class="text-center">Some of our professional service include</p>

        <v-row class="mt-5" >
          <v-col cols="12" sm="4" v-for="(service, index) in services" :key="index">
            <v-card height="200" exact :variant="(index+1)%2!==0 ? 'outlined' : 'outlined'" color="blue" >
              <v-card-text class="text-center">
                <v-icon color="blue" size="60">{{service.icon}}</v-icon>
                <p class="font-weight-light text-h6">{{service.title}}</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card variant="flat" color="blue" height="200" class="text-center">
              <v-card-text>
                <v-icon color="white" size="60">mdi-email-outline</v-icon>
                <p class="text-white font-weight-light text-h6">Contact Us Now</p>
                <v-btn size="x-large" color="white" class="mt-4" variant="outlined">Contact Us<sup><v-icon size="x-small">mdi-open-in-new</v-icon></sup></v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
      <v-col cols="12" sm="4" class="pt-8">
        <v-card variant="outlined">
          <v-card-title class="text-center">
            Quick links
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item color="blue" class="text-blue" v-for="(link,index) in quickLinks" :key="index" :href="link.url" target="_blank">
                <template v-slot:prepend>
                  <v-icon>mdi-link</v-icon>
                </template>
                <v-list-item-title :title="link.title" >{{link.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>

    <customers-component></customers-component>
    <testimonials-component></testimonials-component>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HomeJombothrone from "~/components/HomeJombothrone.vue";
import CustomersComponent from "~/components/CustomersComponent.vue";

export default defineComponent({
  name: "index",
  components: {CustomersComponent, HomeJombothrone},
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

      ],
      quickLinks:[
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
          url:"https://sa2.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp"
        },
         {
          title:"Wisconsin DOR Estimated Payment Inquiry",
          url:"https://www.revenue.wi.gov/Pages/Apps/TaxPaymentInquiry.aspx"
        },
         {
          title:"Wisconsin Income Tax Return Status",
          url:"https://ww2.revenue.wi.gov/RefundInquiry/request.html"
        },
         {
          title:"Where is my refund ? State of Illinois",
          url:"https://mytax.illinois.gov"
        },
         {
          title:"Where is my Refund Federal?",
          url:"https://sa.www4.irs.gov/wmr"
        },
         {
          title:"My Tax Office Portal",
          url:"https://www.mytaxoffice.com/cp/home/cp_login.php"
        }

      ]

    }
  }
})
</script>


<style scoped>

</style>