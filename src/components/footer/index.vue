<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="footer__top">
        <FooterMenu />
      </div>
    </div>
    <footer-bottom />
  </footer>
</template>

<script>
import FooterMenu from "@/components/footer/footermenu";
import FooterBottom from "@/components/footer/footerBottom";
export default {
  name: "FooterIndex",
  components: { FooterBottom, FooterMenu }
};
</script>
