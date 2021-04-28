<template>
  <div class="dbl">
    <div class="page_header">
      <div class="container">
        <h1>{{ headerTitle }}</h1>
      </div>
    </div>
    <div class="container dbl">
      <aside class="aside"><slot name="aside" /></aside>
      <section :class="`section section__${sectionClass}`">
        <crumbs v-if="parents" :parents="parents" />
        <slot name="section" />
      </section>
    </div>
  </div>
</template>
<script>
import crumbs from "@/components/crumbs";

export default {
  name: "DoubleColumnTemplate",
  components: {
    crumbs
  },
  props: {
    headerTitle: String,
    headerImage: String,
    sectionClass: String,
    parents: Array
  },
  methods: {}
};
</script>
