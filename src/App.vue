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
  methods: {}
};
</script>
<style></style>
