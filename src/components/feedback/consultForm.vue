<template>
  <Form class="forms" @submit="onSubmit" :validation-schema="schema">
    <h2>Подать <span class="textColor"> заявку</span></h2>
    <p>Оставьте ваши контакты, наш менеджер свяжется с Вами:</p>
    <TextInput
      name="name"
      type="text"
      label="Ваше имя"
      placeholder="Ваше имя"
      success-message="Корректное имя"
      mistake-message=""
    />
    <TextInput
      name="email"
      type="email"
      label="E-mail:"
      placeholder="Ваша эл.почта, куда направить ответ"
      success-message="Корректный адресс"
      mistake-message="Не корректный адресс"
    />
    <div class="form_group">
      <label for="field.file"> Ваше резюме</label>
      <Field
        id="field.file"
        class="form_input_text"
        type="file"
        name="field"
        :rules="{
          mimes: [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          ]
        }"
      />
    </div>

    <button type="submit" class="btn blue">Отправить</button>
    <div class="attention">
      Отправляя данные в этой форме, вы соглашаетесь с
      <a href="#">Политикой конфиденциальности</a>
      сайта.
    </div>
  </Form>
  <modal v-show="isShow" size="sm" @close="close">
    <template #body>
      <div class="modal__answer">
        <span>Ваше сообщение успешно отправлено</span>
        <p>Наш менеджер скоро свяжется с вами</p>
        <img src="../../assets/image/answer/item.svg" alt="item" />
      </div>
    </template>
  </modal>
</template>

<script>
import { Form, Field } from "vee-validate";
import { ref } from "vue";

import Modal from "@/components/modal";
import TextInput from "@/components/TextInput";
import * as Yup from "yup";

export default {
  name: "ConsultForm",
  components: { Field, TextInput, Modal, Form },
  setup() {
    const isShow = ref(false);
    const form = ref({
      name: "",
      email: "",
      file: null,
      phone: "",
      body: ""
    });
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      field: Yup.string().required()
    });
    const close = () => {
      isShow.value = false;
    };
    function onSubmit(values) {
      console.log(values);
    }
    return { isShow, form, schema, close, onSubmit };
  }
};
</script>
