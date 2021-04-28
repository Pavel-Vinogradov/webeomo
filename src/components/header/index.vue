<template>
  <header class="header">
    <nav id="navbar" class="header__navbar container">
      <div class="header__navbar-start">
        <router-link to="/">
          <div class="header__navbar-logo micon"></div
        ></router-link>
      </div>
      <div class="header__navbar-end">
        <div class="header__navbar-routing">
          <ul class="header__navbar-list">
            <li
              v-for="(item, idx) in links"
              :key="idx"
              class="header__navbar-item"
            >
              <router-link :to="link(item)">{{ item.name }}</router-link>
            </li>
            <li class="header__navbar-item toleft">
              <a href="tel:+7(8332)21-72-78" class="contacts_item">
                +7(8332)21-72-78
              </a>
            </li>
          </ul>
        </div>
      </div>
      <burger :links="links" />
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";
import Burger from "@/components/header/burger";
export default {
  name: "HeaderIndex",
  components: { Burger },
  setup() {
    const links = ref([
      {
        name: "Главная",
        href: ""
      },
      {
        name: "О Компании",
        href: "about"
      },
      {
        name: "Вакансии",
        href: "vacancies"
      }
    ]);
    const link = item => {
      return "/" + item.href;
    };

    return {
      links,
      link
    };
  }
};
</script>
