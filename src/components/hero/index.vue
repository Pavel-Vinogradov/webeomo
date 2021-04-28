<template>
  <section id="hero" class="hero">
    <video class="video" autoplay muted loop>
      <source src="../../assets/image/hero/Program.mp4" type="video/mp4" />
    </video>
    <div class="hero-block">
      <div class="container">
        <div class="hero-text">
          <h2 class="hero-text__title">
            {{ title }}
          </h2>
          <p class="hero-text__subtitle">
            {{ subtitle }}
          </p>
          <button class="btn hero-text__btn blue" @click="show">
            Заказать проект
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <modal v-show="isShow" size="sm" @close="close">
    <template #header>
      <h5>Заказать обратный звонок</h5>
    </template>
    <template #body>
      <Form
        v-if="!isAnswer"
        class="forms"
        @submit="sendMessage"
        :validation-schema="schema"
      >
        <TextInput
          name="name"
          type="text"
          label="Ваше имя"
          placeholder="Ваше имя"
          success-message="Корректное имя"
          mistake-message="Не Корректное имя"
        />
        <TextInput
          name="phone"
          type="tel"
          label="Ваш телефон"
          placeholder="Ваш телефон"
          success-message="Корректный телефон"
          mistake-message="Не корректный телефон"
        />
        <div class="attention">
          Отправляя данные в этой форме, вы соглашаетесь с
          <a href="#">Политикой конфиденциальности</a>
          сайта.
        </div>
        <button class="btn blue" type="submit">Отправить</button>
      </Form>
      <Form v-if="isAnswer" class="forms">
        <div class="modal__answer">
          <span>Ваше сообщение успешно отправлено</span>
          <p>Наш менеджер скоро свяжется с вами</p>
          <img src="../../assets/image/answer/item.svg" alt="item" />
        </div>
      </Form>
    </template>
  </modal>
  <!-- Modal -->
</template>

<script>
import modal from "../modal";
import { Form } from "vee-validate";
import TextInput from "@/components/TextInput";
import { ref } from "vue";
import axios from "axios";
import * as Yup from "yup";
import "yup-phone";
export default {
  name: "HeroSection",
  components: { modal, Form, TextInput },
  setup() {
    const title = ref(
      "Разработка програмного \n" + "обеспечения и информационных \n" + "систем"
    );
    const subtitle = ref("Комплексный сервис для корпоративных клиентов");
    const isShow = ref(false);
    const isAnswer = ref(false);
    let callbackMessage = ref({
      theme: "Заказ обратного звонка",
      body: ""
    });
    const emptyCallbackMessage = ref({
      theme: "Заказ обратного звонка",
      body: "",
      email: "senosag507@whipjoy.com"
    });
    const clearForm = () => {
      callbackMessage.value = emptyCallbackMessage.value;
    };
    const schema = Yup.object().shape({
      name: Yup.string()
        .typeError("Имя не корректное")
        .required("Имя не корректное"),
      phone: Yup.string()
        .typeError("Номер не корректный")
        .phone("RU")
        .required("Номер не корректный")
    });
    function onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
    }
    const sendMessage = values => {
      callbackMessage.value.body = `
      <p>Имя</p> ${values.name}
      <p>Телефон</p> ${values.phone}`;
      callbackMessage.value.email = "senosag507@whipjoy.com";

      axios
        .post(
          "http://77.72.139.18:8100/action/Mail/sendCallBack",
          callbackMessage.value
        )
        .then(() => {
          setTimeout(() => {
            clearForm();
            isAnswer.value = true;
          }, 100);
        })
        .catch(err => console.log(err.response));
    };
    const close = () => {
      isShow.value = false;
      isAnswer.value = false;
    };
    const show = () => {
      isShow.value = true;
    };
    return {
      isShow,
      isAnswer,
      callbackMessage,
      emptyCallbackMessage,
      schema,
      clearForm,
      sendMessage,
      close,
      show,
      onSubmit,
      title,
      subtitle
    };
  }
};
</script>
