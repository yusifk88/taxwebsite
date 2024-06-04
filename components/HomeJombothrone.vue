
<template>
<v-card variant="flat"  class="pa-5 bg-blue-grey-lighten-5" style="border-radius: 55px;  padding-top: 60px;">
<v-card-text>
  <v-row class="mt-6">
    <v-col cols="12" sm="6" offset-md="1" class="pa-5">
      <v-row dense>
        <v-col cols="12" sm="3">
          <v-img src="/logo.png" width="200"></v-img>

        </v-col>
        <v-col cols="12" sm="9" class="pt-6">
          <p class="text-black text-h3 font-weight-black" style="color: #032A3C;" >Accounting and Tax</p>
          <v-img width="100"  src="/blue_line_zig.svg"></v-img>
          <p style="margin-top: -30px; color: #032A3C;" class="text-black text-h3 font-weight-black" >Solutions of <span style="color: #68A73E;">Illinois</span></p>

        </v-col>
      </v-row>

      <p class="text-h5 font-weight-light text-justify mt-3">
        At Evans Race & Van Dreel CPAs, we set ourselves apart from traditional accounting and CPA firms by offering you experience with a personal touch and innovative solutions for your individual tax needs.

        The firm of Evans and Race Co. was founded in 1941. Then in 2008, Van Dreel Business & Tax Consulting purchased the business and renamed it Evans Race & Van Dreel CPAs. With us, you will receive sound yet cost-effective advice and personal attention, coupled with an honest work ethic and our intense drive to add value to every customer relationship.</p>
   <v-row dense>
     <v-col cols="12">
       <v-btn to="/contact" size="x-large" class=" mt-3" color="#68A73E">Contact Us Now</v-btn>
     </v-col>
   </v-row>
    </v-col>
    <v-col cols="12" sm="4"  class="pa-6">
      <v-card style="border-radius: 15px; border:5px solid  #68A73E"
              height="500"
              image="https://plus.unsplash.com/premium_photo-1661598999213-2a052c9871aa?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              flat
              class="ma-6 image-card">
      </v-card>
    </v-col>
  </v-row>
</v-card-text>
</v-card>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HomeJombothrone"
})
</script>

<style scoped>

.image-card{
  box-shadow: 1px 16px 229px -16px rgba(22,16,247,0.35);
  -webkit-box-shadow: 1px 16px 229px -16px rgba(22,16,247,0.35);
  -moz-box-shadow: 1px 16px 229px -16px rgba(22,16,247,0.35);
}

</style>