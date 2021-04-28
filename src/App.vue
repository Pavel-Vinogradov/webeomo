<template>
  <HeaderIndex />
  <main class="main">
    <router-view />
  </main>
  <FooterIndex />
</template>
<script>
import HeaderIndex from "@/components/header";
import FooterIndex from "@/components/footer";
export default {
  components: { FooterIndex, HeaderIndex },
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("login");
      console.log(token);
      // Do stuff with the received token.
    }
  },
  template: '<button @click="recaptcha">Execute recaptcha</button>'
};
</script>
<style>
:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}
</style>
