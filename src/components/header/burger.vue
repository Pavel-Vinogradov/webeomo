<template>
  <div v-click-away="handleClickOutside" class="mobile">
    <div
      :class="{ burger: true, 'burger--active': showingNavigation }"
      @click="toggleNav"
    >
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <transition name="slide" mode="out-in">
      <ul v-show="showingNavigation" class="navigation">
        <li v-for="(item, idx) in links" :key="idx">
          <router-link :to="link(item)">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "burger",
  props: { links: Array },
  setup() {
    const showingNavigation = ref(false);
    const triggerClickAway = ref(false);

    //toggleNav
    const toggleNav = () => {
      showingNavigation.value = !showingNavigation.value;
      setTimeout(() => {
        triggerClickAway.value = !triggerClickAway.value;
      }, 500);
    };

    const handleClickOutside = () => {
      if (triggerClickAway.value === false) return;
      showingNavigation.value = false;
      triggerClickAway.value = false;
    };
    const link = item => {
      return "/" + item.href;
    };
    return {
      showingNavigation,
      toggleNav,
      handleClickOutside,
      link
    };
  }
};
</script>
