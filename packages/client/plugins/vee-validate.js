import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, email, alpha_num, min, max } from "vee-validate/dist/rules";
import validator from 'validator';

extend("required", {
  ...required,
  message: "Это обязательное поле"
});

extend("email", {
  ...email,
  message: "некорректное значение"
});

extend("alpha_num", {
  ...alpha_num,
  message: "некорректное значение (допустимы только латинские буквы и цифры)"
});

extend('min', {
  ...min,
  message: 'недостаточная длина'
});

extend('max', {
  ...max,
  message: 'длина больше допустимой'
});

extend('phone', value => {
  if(validator.isMobilePhone(value)) {
    return true;
  }
  return 'Невалидный номер телефона'
})

Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);

