<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <TextInput
        name="name"
        type="text"
        label="Ваше имя"
        placeholder="Ваше имя"
        success-message="Nice to meet you!"
      />
      <TextInput
        name="phone"
        type="tel"
        label="Ваш телефон"
        placeholder="Your email address"
        success-message="Got it, we won't spam you!"
      />
      <TextInput
        name="file"
        type="file"
        label="Файл"
        placeholder="Type it again"
        success-message="Glad you remembered it!"
      />

      <button class="submit-btn" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import "yup-phone";

import TextInput from "./TextInput.vue";

export default {
  name: "testForm",
  components: {
    TextInput,
    Form
  },
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }

    // Using yup to generate a validation schema
    // https://vee-validate.logaretm.com/v4/guide/validation#validation-schemas-with-yup
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string()
        .phone("RU")
        .required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
      confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Passwords do not match")
    });

    return {
      onSubmit,
      schema
    };
  }
};
</script>
