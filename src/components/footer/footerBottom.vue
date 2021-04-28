<template>
  <div class="footer__bottom">
    <div class="container">
      <div class="footer__wrap">
        <div class="copyright">
          <div>&copy; 2004 &mdash; {{ currentYear }}, ITWebNet</div>
          <router-link to="/polyce">Политика конфиденциальности</router-link>
        </div>
        <div class="developer">
          Сайт разработан
          <a href="http://www.itwebnet.ru" target="_blank"><i> ITWebNet </i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerBottom",
  data() {
    return {};
  },
  computed: {
    currentYear() {
      const d = new Date();
      return d.getFullYear();
    }
  }
};
</script>
