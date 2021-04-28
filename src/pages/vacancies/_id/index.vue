<template>
  <SingleColumnTemplate
      sectionClass="vacancies"
      :title="response.position"
      :parents="parents"
  >
    <template #section>
      <div class="container">
        <div class="description__wrapper">
          <div class="description__article">
            <div class="description__requirement">
              <h2 class="description__title">Обязанности</h2>
            <div v-html="response.workingConditions"></div>
            </div>
            <div class="description__requirement">
              <h2 class="description__title">Требования</h2>
              <div v-html="response.responsibilites"></div>
            </div>
            <div class="description__requirement">
              <h2 class="description__title">
                Условия работы
              </h2>
              <div v-html="response.requirements"></div>
            </div>
          </div>
          <div class="form__with">
            <consult-form></consult-form>
          </div>
        </div>
      </div>
    </template>
  </SingleColumnTemplate>
</template>

<script>
import SingleColumnTemplate from "@/components/templates/singleColumn";
import ConsultForm from "@/components/feedback/consultForm";
import axios from "axios";

export default {
  name: "descriptionIndex",
  components: {ConsultForm, SingleColumnTemplate},
  props: {
    item: Object,
    id: Number,
    title: String,
    workingConditions: String,
    responsibilites: String,
    requirements: String
  },
  data: () => ({
    parents: [
      {title: "Вакансии", link: "/vacancies"},
      {
        title: `Front-end Middle Developer`,
        link: "/"
      }
    ],
    response: []
  }),
  async mounted() {
    const res = await axios.get(`https://hr.itwebnet.ru/api/Vacancies/${this.$route.params.id}`)
    this.response = res.data
  }

};
</script>
