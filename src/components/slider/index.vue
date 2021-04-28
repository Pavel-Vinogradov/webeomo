<template>
  <div class="partners_wiget section">
    <h2 class="section__title">{{ title }}</h2>
    <div class="partnersslider">
      <Carousel :items-to-show="5" :wrap-around="true">
        <Slide v-for="(item, idx) in list" :key="idx">
          <div class="carousel__item">
            <img
              :src="require('../../assets/image/slider/' + item.image + '.png')"
              :alt="item.title"
              :title="item.title"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div></div
></template>

<script>
import { defineComponent } from "vue";

// import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default defineComponent({
  name: "PartnersWiget",
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data: () => ({
    title: "Нам доверяют",
    list: [
      {
        title: "",
        image: "item-1"
      },
      {
        title: "",
        image: "item-2"
      },
      {
        title: "",
        image: "item-3"
      },
      {
        title: "",
        image: "item-4"
      },
      {
        title: "",
        image: "item-5"
      },
      {
        title: "",
        image: "item-6"
      },
      {
        title: "",
        image: "item-7"
      },
      {
        title: "",
        image: "item-8"
      },
      {
        title: "",
        image: "item-9"
      },
      {
        title: "",
        image: "item-10"
      },
      {
        title: "",
        image: "item-11"
      },
      {
        title: "",
        image: "item-12"
      },
      {
        title: "",
        image: "item-13"
      },
      {
        title: "",
        image: "item-14"
      }
    ]
  })
});
</script>
