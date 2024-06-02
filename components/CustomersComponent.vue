<template>

  <v-row class="mt-5">
    <v-col cols="12" sm="12">
      <p class="text-h4 font-weight-black text-center mt-4">Let's serve you</p>
      <p class="text-center">Join our long list of happy and grateful customers </p>
    </v-col>
    <v-col cols="12" sm="12">
      <Vue3Marquee
          :gradient="true"
          :gradient-color="[255, 255, 255]"
          gradient-length="30%"
      >
        <img
            v-for="(img,index) in imagesArr"
            :key="index"
            :src="img"
        />
      </Vue3Marquee>
    </v-col>
  </v-row>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Vue3Marquee} from "vue3-marquee";

export default defineComponent({
  name: "CustomersComponent",
  components: {Vue3Marquee},
  data(){
    return{
      imagesArr:[
        'https://sponsors.vuejs.org/images/vueschool.avif',
        'https://sponsors.vuejs.org/images/vehikl.avif',
        'https://sponsors.vuejs.org/images/dronahq.avif',
      ]
    }
  }
})
</script>


<style scoped>

</style>