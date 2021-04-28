// api/VacanciesController
import axios from "axios";

export const state = () => ({
  Vacancies: [],
  itemVacancies: []
});

export const actions = {
  getListVacancies: async contex => {
    const response = await axios.get(
      "https://hr.itwebnet.ru/api/VacancyCategories"
    );
    contex.commit("setListVacancies", response.data);
  },
  getItemVacancies: async contex => {
    const response = await axios.get(
      "https://hr.itwebnet.ru/api/VacancyCategories"
    );
    contex.commit("setItemVacancies", response.data);
  }
};

export const mutations = {
  setListVacancies: (state, data) => (state.Vacancies = data),
  setItemVacancies: (state, data) => {
    for (const item of data) {
      state.itemVacancies.push(item["vacancies"]);
    }
  }
};
export const getters = {
  Vacancies: state => {
    return state.Vacancies;
  },
  itemVacancies: state => {
    return state.itemVacancies;
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
