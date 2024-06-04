
<template>
  <v-container style=" padding-top: 60px;">

    <v-row>
      <v-col cols="12" sm="6" class="mx-auto">
        <h2 style="color: #68A73E">Resources</h2>
        <p>Find some helpful links and forms for your accounting and tax enquiries</p>

        <v-card variant="plain" class="mt-3">
          <v-card-title>
            Useful links
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item color="#32A0CE" style="color: #32A0CE" v-for="(link,index) in quickLinks" :key="index" :href="link.url" target="_blank">
                <template v-slot:prepend>
                  <v-icon>mdi-link</v-icon>
                </template>
                <v-list-item-title :title="link.title" >{{link.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>

        </v-card>


        <v-card variant="plain" class="mt-3">
          <v-card-title>
            Forms
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item color="#32A0CE" style="color: #32A0CE" v-for="(form,index) in forms" :key="index" :href="form.link" target="_blank">
                <template v-slot:prepend>
                  <v-icon>mdi-download-outline</v-icon>
                </template>
                <v-list-item-title :title="form.title" >{{form.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>

        </v-card>


      </v-col>

    </v-row>

  </v-container>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "resources",
  data(){
    return{
      quickLinks:[

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

      ],
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
      ]
    }
  }
})
</script>

<style scoped>

</style>