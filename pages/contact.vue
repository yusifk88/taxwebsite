<template>
  <v-container style="padding-top: 60px;">
    <v-row>
      <v-col cols="12" sm="6" class="mx-auto">
        <h2 style="color: #68A73E">Contact Us</h2>


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
              United States
            </v-list-item-title>
            <v-list-item-subtitle class="text-grey">Address</v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <v-card flat variant="outlined" class="mt-5">
          <v-card-title>
            Send us an email
          </v-card-title>
          <v-card-text>
            <v-form ref="contactForm">
              <v-label>Name<sup>
                <v-icon color="red" size="x-small">mdi-asterisk</v-icon>
              </sup></v-label>
              <v-text-field v-model="name" :rules="rules" variant="outlined"></v-text-field>

              <v-label>Company<sup>
                <v-icon color="red" size="x-small">mdi-asterisk</v-icon>
              </sup></v-label>
              <v-text-field v-model="company" :rules="rules" variant="outlined"></v-text-field>

              <v-label>Phone<sup>
                <v-icon color="red" size="x-small">mdi-asterisk</v-icon>
              </sup></v-label>
              <v-text-field v-model="phone" :rules="rules" type="tel" variant="outlined"></v-text-field>

              <v-label>Email<sup>
                <v-icon color="red" size="x-small">mdi-asterisk</v-icon>
              </sup></v-label>
              <v-text-field v-model="email" :rules="rules" type="email" variant="outlined"></v-text-field>

              <v-label>Comment<sup>
                <v-icon color="red" size="x-small">mdi-asterisk</v-icon>
              </sup></v-label>
              <v-textarea v-model="comment" :rules="rules" rows="4" variant="outlined"></v-textarea>

            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn :loading="sending" @click="sendContact" block size="x-large" variant="flat" color="#67A83B">Send</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog persistent width="400" v-model="ShowSentDialog">
      <v-card>
        <v-card-text class="text-center align-content-center">

          <v-img class="mx-auto" width="100" src="/mail_sent.svg"></v-img>
          <p class="mt-3 text-h6 text-green font-weight-bold">We have received your inquiry</p>
          <p class="mt-2 text-grey">Dear <strong>{{name}}</strong>, thank you for contacting us,
            a service representative would reach out to you via the email you provided(<strong> {{email}}</strong>) shortly. <br> Thank You</p>

        </v-card-text>
        <v-card-actions>
          <v-btn @click="sentDone" block color="green" variant="flat" size="x-large">OKay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { Buffer } from 'buffer';

export default defineComponent({
  name: "contact",
  data() {
    return {
      name: "",
      email: "",
      company: "",
      phone: "",
      comment: "",
      ShowSentDialog:false,
      sending:false,
      rules: [
        value => {
          if (value) return true

          return 'This field is required'
        },
      ],
    }
  },
  methods: {

    sentDone(){

      this.name="";
      this.company="";
      this.email="";
      this.comment="";
      this.phone="";
      this.ShowSentDialog=false;

    },
    async sendContact() {
      const {valid} = await this.$refs.contactForm.validate();

      if (valid) {

        this.sending=true;
        const contactForm = new FormData();
        const subject = "inquiry: " + this.company;
        let html = "<p>" + this.comment+"</p>";
        html+="<p> Name:"+this.name+"</p>";
        html+="<p> Company:"+this.company+"</p>";
        html+="<p> Phone Number:"+this.phone+"</p>";
        html+="<p> Email:"+this.email+"</p>";


        contactForm.append("from", "support@myatsii.com");
        contactForm.append("to", "support@myatsii.com");
        contactForm.append("reply-to", this.email);
        contactForm.append('subject', subject);
        contactForm.append('html', html);
        const runtimeConfig = useRuntimeConfig();

        const Key = runtimeConfig.public.apiSecret;

        const domainname = "sandboxebc9aa0483c34608af87735d8ee45c14.mailgun.org";
        const resp = await fetch(
            `https://api.mailgun.net/v3/${domainname}/messages`,
            {
              method: 'POST',
              headers: {
                Authorization: 'Basic ' + Buffer.from('api:'+Key).toString('base64')
              },
              body: contactForm
            }
        );

        await resp.text();
        this.sending=false;
        this.ShowSentDialog=true;


      }


    }

  },
  mounted() {
    useSeoMeta({
      title: 'Contact Us',
      ogTitle: 'Accounting and Tax Solutions of Illinois',
      description: 'Accounting and Tax Solutions of Illinois',
      ogDescription: 'Accounting and Tax Solutions of Illinois',
      ogImage: '/logo.png',
      twitterCard: 'summary_large_image',
    })
  }
})
</script>

<style scoped>

</style>
