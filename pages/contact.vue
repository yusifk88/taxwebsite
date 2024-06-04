
<template>
  <v-container style="padding-top: 60px;">
<v-row>
  <v-col cols="12" sm="6" class="mx-auto">
    <h2 style="color: #68A73E">Contact Us</h2>
    <p>Contact us on</p>

    <v-list>

      <v-list-item>
        <template v-slot:prepend>
          <v-icon color="#68A73E">mdi-phone</v-icon>
        </template>
        <v-list-item-title class="font-weight-black">+1 (708) 665-6000</v-list-item-title>
        <v-list-item-subtitle class="text-grey">Tel. No.</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <template v-slot:prepend>
          <v-icon color="#68A73E">mdi-email-outline</v-icon>
        </template>
        <v-list-item-title class="font-weight-black">support@myatsii.com</v-list-item-title>
        <v-list-item-subtitle class="text-grey">Email</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <template v-slot:prepend>
          <v-icon color="#68A73E">mdi-map-marker-outline</v-icon>
        </template>
        <v-list-item-title class="font-weight-black">
          15545 S 71st Ct<br>
          Ste 202<br>
          Orland Park il 60462-5300<br>
          United States</v-list-item-title>
        <v-list-item-subtitle class="text-grey">Address</v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-card flat variant="outlined" class="mt-5">
      <v-card-title>
        Send us an email
      </v-card-title>
      <v-card-text>
        <v-form ref="contactForm">
          <v-label>Name<sup><v-icon color="red" size="x-small">mdi-asterisk</v-icon></sup></v-label>
          <v-text-field :rules="rules" variant="outlined"></v-text-field>

            <v-label>Company<sup><v-icon color="red" size="x-small">mdi-asterisk</v-icon></sup></v-label>
          <v-text-field :rules="rules" variant="outlined"></v-text-field>

            <v-label>Phone<sup><v-icon color="red" size="x-small">mdi-asterisk</v-icon></sup></v-label>
          <v-text-field :rules="rules" type="tel" variant="outlined"></v-text-field>

            <v-label>Email<sup><v-icon color="red" size="x-small">mdi-asterisk</v-icon></sup></v-label>
          <v-text-field :rules="rules" type="email" variant="outlined"></v-text-field>

            <v-label>Comment<sup><v-icon color="red" size="x-small">mdi-asterisk</v-icon></sup></v-label>
          <v-textarea :rules="rules" rows="4" variant="outlined"></v-textarea>

        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn block size="x-large" variant="flat" color="#67A83B">Send</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>

  </v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "contact",
  data(){
    return{
      rules: [
        value => {
          if (value) return true

          return 'This field is required'
        },
      ],
    }
  }
})
</script>

<style scoped>

</style>