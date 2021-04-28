<template>
  <div class="crumbs">
    <router-link to="/">Главная</router-link>
    <span class="delimitter" />
    <template v-bind:key="idx" v-for="(item, idx) in parents">
      <router-link :to="item.link">{{ trunc(item.title) }}</router-link>
      <span class="delimitter"></span>
    </template>
  </div>
</template>

<script>
export default {
  name: "Crumbs",
  props: {
    parents: Array
  },
  computed: {
    bla() {
      return this.getLastParent();
    }
  },
  methods: {
    getLastParent() {
      return this.parents.slice(-1).pop();
    },
    trunc(srt) {
      return srt.replace(/^(.{20}[^\s]*).*/, "$1"); // return first few words -> max 20 symbols
    }
  }
};
</script>
