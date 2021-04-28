<template>
  <ul class="vacancies-top__list">
    <li class="vacancies-top__item">
      <div class="vacancies-top__link">
        <div class="vacancies-start">
          <img
            class="vacancies__img"
            :src="require('../../assets/image/vacancies/item-' + id + '.svg')"
            alt="item"
          />
           <h3 class="vacancies__title"> {{ Name }}</h3>
        </div>
        <div @click="isShowDropdown = !isShowDropdown" class="vacancies-end">
          <span
            v-bind:class="{
              micon__up: !isShowDropdown,
              micon__down: isShowDropdown
            }"
            class=" micon  "
          ></span>
        </div>
      </div>
      <ul v-if="!isShowDropdown" style="display: block" class="vacancies__list">
        <li
          v-for="(item, idx) in listVacancies"
          :key="idx"
          class="vacancies__item"
        >
          <div class="vacancies__description">
            <router-link :to="`/vacancies/${item.id}`">
              <p class="vacancies__name">{{ item.position }}</p></router-link>
            <router-link
              class="vacancies__about"

              :to="`/vacancies/${item.id}`"
            >
              <span>
                Узнать больше
              </span>
              <span class="micon micon__vektor"></span>
            </router-link>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "listVacancies",
  props: {
    id: Number,
    Name: String,
    listVacancies: Array
  },
  data() {
    return {
      isShow: false,
      isShowDropdown: true
    };
  },
  mounted() {},
  method: {
    open() {
      this.isShow = true;
    }
  }
};
</script>
