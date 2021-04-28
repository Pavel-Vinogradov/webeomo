<template>
  <SingleColumnTemplate
    sectionClass="vacancies"
    title="В нашей компании требуются"
    :parents="parents"
  >
    <template #section>
      <nav class=" container vacancies__navbar">
        <ListVacancies
          v-for="(item, idx) in getVacancies"
          :key="idx"
          :id="item.id"
          :Name="item.name"
          :list-vacancies="item.vacancies"
        />
      </nav>
    </template>
  </SingleColumnTemplate>
</template>

<script>
import SingleColumnTemplate from "@/components/templates/singleColumn";
import ListVacancies from "@/components/ListVacansies";

export default {
  name: "vacancies",
  components: { ListVacancies, SingleColumnTemplate },
  data: () => ({
    parents: [{ title: "Вакансии", link: "/vacancies" }],
    title: "Список вакансий"
  }),
  created() {
    this.$store.dispatch("getListVacancies");
  },
  computed: {
    getVacancies() {
      return this.$store.getters.Vacancies;
    }
  }
};
</script>
