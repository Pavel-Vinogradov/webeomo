<template>
  <section id="offer" class="offer section">
    <div class="container">
      <h2 class="section__title">{{ title }}</h2>
      <div class="offer-wrapper">
        <ul class="offer-list">
          <li v-for="(item, idx) in list" :key="idx" class="offer-item">
            <div class="offer-card">
              <img
                :src="
                  require('../../assets/image/offer/' + item.image + '.svg')
                "
                alt="item.image"
                class="offer-card__img"
              />
              <div class="offer-card__description">
                <h3 class="offer-card__title">{{ item.title }}</h3>
                <p class="offer-card__subtitle">{{ item.subtitle }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionOffer",
  data() {
    return {
      title: "Что мы делаем",
      list: [
        {
          title: "Разработка ПО",
          subtitle: "Разработка программного обеспечения",
          image: "item-1"
        },
        {
          title: "ИТ поддержка",
          subtitle: "Техническая поддержка  существующих решений ",
          image: "item-2"
        },
        {
          title: "ИТ рекрутинг",
          subtitle: "Подбор ИТ специалиста",
          image: "item-3"
        },
        {
          title: "ИТ консалтинг",
          subtitle:
            "Разработка ИТ-стратегии предприятия, внедрение ITSM \n" +
            "и систем управления проектами",
          image: "item-4"
        },
        {
          title: "Решения",
          subtitle: "Готовые продукты для бизнеса",
          image: "item-5"
        },
        {
          title: "Обучение",
          subtitle: "Курсы по программированию",
          image: "item-6"
        }
      ]
    };
  }
};
</script>
