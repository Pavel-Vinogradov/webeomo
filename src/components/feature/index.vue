<template>
  <section id="feature" class="section feature">
    <div class="container">
      <h2 class="section__title">{{ title }}</h2>
    </div>
    <div class="feature__bottom">
      <img class="feature__lent" src="../../assets/image/lent.svg" alt="lent" />

      <div
        v-for="(item, idx) in content"
        :key="idx"
        class="feature-wrapper container"
      >
        <div class="feature-article">
          <img
            :src="require('../../assets/image/features/' + item.image + '.svg')"
            :alt="item.image"
          />
        </div>
        <div class="feature-article">
          <h3 class="feature-article__title">{{ item.title }}</h3>
          <p class="feature-article__subtitle">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeatureSection",
  components: {},
  data() {
    return {
      title: "Как мы работаем",
      content: [
        {
          title: "ПОДГОТОВКА",
          description: "Встречаемся. Обсуждаем цели и задачи проекта.\n",
          image: "item_1"
        },
        {
          title: "ИССЛЕДОВАНИЯ",
          description: "Анализируем. Готовим прототипы.",
          image: "item_2"
        },
        {
          title: "ПЛАНИРОВАНИЕ И РАЗРАБОТКА",
          description: "Реализация проекта по календарному плану проекта.",
          image: "item_3"
        },
        {
          title: "ВНЕДРЕНИЕ",
          description: "Запуск проекта в эксплуатацию.",
          image: "item_4"
        },
        {
          title: "ПОДДЕРЖКА И РАЗВИТИЕ",
          description: "Организуем техническую и информационную поддержку.",
          image: "item_5"
        }
      ]
    };
  }
};
</script>
