<template>
  <div class="callback">
    <button class="btn blue callback_toggler" @click="show">
      <span class="micon micon__phone"></span>
      <span class="callback__title">Обратный звонок</span>
    </button>
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
            name="name_footer"
            type="text"
            label="Ваше имя"
            placeholder="Ваше имя"
            success-message="Корректное имя"
            mistake-message="Не Корректное имя"
          />
          <TextInput
            name="phone_footer"
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
  </div>
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
  name: "callback",
  components: { TextInput, modal, Form },
  setup() {
    const isShow = ref(false);
    const isAnswer = ref(false);
    let callbackMessage = ref({
      theme: "Заказ обратного звонка",
      body: "",
      email: "senosag507@whipjoy.com"
    });
    const emptyCallbackMessage = ref({
      theme: "Заказ обратного звонка",
      body: ""
    });
    const clearForm = () => {
      callbackMessage.value = emptyCallbackMessage.value;
    };
    const schema = Yup.object().shape({
      name_footer: Yup.string()
        .typeError("Имя не корректное")
        .required("Имя не корректное"),
      phone_footer: Yup.string()
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
      onSubmit
    };
  }
  // data: () => ({
  //   isShow: false,
  //   isAnswer: true,
  //   callbackMessage: {
  //     theme: "Заказ обратного звонка",
  //     name: "",
  //     phone: "",
  //     body: ""
  //   },
  //   emptyCallbackMessage: {
  //     theme: "Заказ обратного звонка",
  //     name: "",
  //     phone: "",
  //     body: ""
  //   },
  //   errors: []
  // }),
  // computed() {},
  //
  // methods: {
  //   validate(fieldName) {
  //     const isSetItem = this.errors.find(item => item.field === fieldName);
  //     if (isSetItem !== undefined) return isSetItem.message;
  //     else return false;
  //   },
  //   clearForm() {
  //     this.callbackMessage = this.emptyCallbackMessage;
  //     this.errors = [];
  //   },
  //   sendMessage() {
  //     this.callbackMessage.body = `
  // <p>Имя</p> ${this.callbackMessage.name}
  // <p>Телефон</p> ${this.callbackMessage.phone}`;
  //     this.axios
  //       .post("/action/Mail/sendCallBack", this.callbackMessage)
  //       .then(() => {
  //         setTimeout(() => {
  //           this.form = this.emptyCallbackMessage;
  //           this.isAnswer = false;
  //         }, 300);
  //       })
  //       .catch(err => (this.errors = err.response));
  //   },
  //   close() {
  //     this.isShow = false;
  //     //document.body.classList.remove("noscroll");
  //     this.isAnswer = true;
  //   },
  //   show() {
  //     this.isShow = true;
  //     //document.body.classList.add("noscroll");
  //   }
  // }
};
</script>
