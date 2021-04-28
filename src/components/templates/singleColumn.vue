<template>
  <div class="sgl">
    <div class=" sgl">
      <section :class="`section section__${sectionClass}`">
        <div :class="`${sectionClass}`">
          <div class="container">
            <div :class="`${sectionClass}__wrapper`">
              <Crumbs v-if="parents" :parents="parents" />
              <h1>{{ title }}</h1>
            </div>
          </div>
        </div>
        <slot name="section" />
      </section>
    </div>
  </div>
</template>

<script>
import Crumbs from "@/components/crumbs";
export default {
  name: "SingleColumnTemplate",
  components: {
    Crumbs
  },
  props: {
    sectionClass: String,
    parents: Array,
    title: String
  },

  methods: {}
};
</script>
