<template>
  <div class="menu">
    <div class="menu__item contacts">
      <h2 class="title">Контакты</h2>
      <ul class="list">
        <h3>Где мы находимся:</h3>
        <li>{{ footerText.address }}</li>
        <h3>Как с нами связаться:</h3>
        <li>
          <a :href="`tel:${footerText.tel}`">{{ footerText.tel }}</a>
        </li>
        <li>
          <a :href="`mailto:${footerText.mail}`">{{ footerText.mail }}</a>
        </li>
        <FooterSocials />
        <h3>Время работы:</h3>
        <li class="worktime">{{ footerText.work_time }}</li>
        <Callback />
      </ul>
    </div>
    <IndexMaps  />
  </div>
</template>

<script>
import { ref } from "vue";
import FooterSocials from "@/components/footer/footersocials";
import Callback from "@/components/footer/callback";
import IndexMaps from "@/components/maps";
export default {
  name: "FooterMenu",
  components: { IndexMaps, Callback, FooterSocials },
  setup() {
    const footerText = ref({
      name: 'ООО "ITWebNet"',
      address: "г.Киров ул.Урицкого 24 ",
      work_time: `
      c 9.30 до 18.30

    (Пн-Пт)`,
      tel: "+7(8332)21-72-78",
      mail: "office@itwebnet.ru"
    });
    return { footerText };
  }
};
</script>
