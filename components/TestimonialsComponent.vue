<template>
  <v-row>
    <v-col cols="12" sm="12">
      <p class="text-h4 font-weight-black text-center mt-4" style="color: #68A73E">What our clients are saying</p>
    </v-col>
    <v-col cols="12" sm="4" v-for="(message, index) in testimonials" :key="index">
      <v-card variant="outlined">
        <v-card-text>
         <p class="mb-3">
           {{message.content}}
         </p>

          <v-row>
            <v-col cols="2">
              <v-avatar rounded>
                <v-img contain :src="message.photo_url"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="10">
              <p class="font-weight-black">{{message.name}}</p>
              <small>{{message.company}}</small>
            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TestimonialsComponent",
  data(){
    return{
      testimonials:[
         {
          content:"ATSII Registered my business and are taking care of my taxes while I focus on growing my business.",
          name:"Anas Nanjo",
          company:"ZeroTrust Managed IT & Cybersecurity Solutions LLC",
          photo_url:"https://avatar.iran.liara.run/public"
        }

      ]
    }
  }
})
</script>

<style scoped>

</style>
