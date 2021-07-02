<template>
  <div class="LoginBlock">
    <notifications group="foo"/>
    <div class="columns ">
      <div class="column is-3"></div>
      <div class="column is-6">
        <validation-observer v-slot="{invalid}">
          <div class="card">
            <div v-if="showCommentRetryEmail">Пользователь с таким email уже существует</div>

            <validation-provider rules="required|email" v-slot="{ errors }">
              <div class="field">
                <div class="label">Email</div>
                <label class="control">
                  <input
                    :disabled="isEmailDisable"
                    v-model="dEmail"
                    :class="['input', 'is-rounded', !!errors[0] ? 'is-danger' : '']"
                    type="email"
                    placeholder="введите email"
                  >
                </label>
              </div>
            </validation-provider>

            <validation-provider rules="required|alpha_num|min:6|max:20" v-slot="{ errors }">
              <div class="field">
                <div class="label">Пароль</div>
                <label class="control">
                  <input
                    v-model="dPassword"
                    :class="['input', 'is-rounded', !!errors[0] ? 'is-danger' : '']"
                    type="password"
                    placeholder="латинские буквы, цифры, 6-20 символов"
                  >
                </label>
                <p v-if="!!errors[0]" class="has-text-danger is-size-7">{{errors[0]}}</p>
              </div>
            </validation-provider>

            <div v-if="showComment">пожалуйста введите пароль из email</div>

            <div class="mt-4 buttons is-right">
              <button
                v-if="showForgotButton"
                :class="['is-text', 'button', isLoading ? 'is-loading' : '']"
                @click="forgotHandle"
              >
                Забыли пароль?
              </button>

              <button
                :class="['button', 'is-primary', isLoading ? 'is-loading' : '']"
                :disabled="invalid || isLoading"
                @click="loginHandle"
              >
                {{btnSubmitText || "войти"}}
              </button>
            </div>

          </div>
        </validation-observer>
      </div>
      <div class="column is-3"></div>
    </div>
  </div>
</template>

<script>

import { utilAuthLoginB, utilAuthRegister } from '../utils/auth';
  import { CST_REG_MODE__REG, CST_RESAUTH_OK, VIKW__USER_NO_FOUND } from '../utils/consts';
  import { stdSleep, utilIsEmail, utilStringNormalize } from '../utils/stdutils';
  import { gqlUserPasswordRestore } from '../utils/gql-queries';
  import { get } from 'lodash';

  export default {
    // mode - see [200908173000]
    props: [
      'email',
      'password',
      'showComment',
      'showCommentRetryEmail',
      'showForgotButton',
      'isEmailDisable',
      'btnSubmitText',
      'mode'
    ],
    data() {
      return {
        temp: '',
        dEmail: '',
        dPassword: '',
        isLoading: false
      }
    },
    mounted() {
      this.dEmail = this.$route.params.email
    },
    methods: {
      async loginHandle() {
        console.log(`!!-!!-!! 1528-10 -> :::::::::::::: loginHandle() {210702152821}:${Date.now()}`); // del+
        await stdSleep(1000); // TODO temp
        const dEmail0 = utilStringNormalize(this.dEmail);
        console.log('!!-!!-!! 1528-20 dEmail0 {210702150259}\n', dEmail0); // del+
        console.log('!!-!!-!! 1528-30 this.mode {210702152759}\n', this.mode); // del+
        // ---
        let res;
        if(this.mode === CST_REG_MODE__REG) {
          res = await utilAuthRegister(dEmail0, this.dPassword)
        } else {
          res = await utilAuthLoginB(dEmail0, this.dPassword);
        }
        console.log('!!-!!-!! res {210702150321}\n', res); // del+
        // ---
        if (res.code === CST_RESAUTH_OK) {
          this.$nuxt.$emit('event-12');
          await this.$router.push({ name: 'userpage' });
        } else {
          this.$notify({ group: 'foo', title: 'Неверный логин или пароль', type: 'error' });
        }
      },
      // snippet 200904090200
      classesInputGet(errors) {
        const ret = ["input", "is-rounded"];
        if (errors && errors[0]) {
          ret.push("is-danger");
        }
        return ret;
      },
      async forgotHandle() {
        const email0 = utilStringNormalize(this.dEmail);
        const isEmail = utilIsEmail(email0)
        if (!isEmail) {
          this.$notify({ group: 'foo', title: 'Невалидный email', type: 'error' })
        } else {
          this.isLoading = true;
          await stdSleep(1000)
          await this.$apollo.mutate({
            mutation: gqlUserPasswordRestore,
            variables: {
              email: email0
            },
            update: (store, { data }) => {
              this.isLoading = false;
              const b = get(data, 'userPasswordRestore.isSuccess')
              if (b) {
                this.$notify({ group: 'foo', title: 'МЫ ОТПРАВИЛИ ВАМ НА ПОЧТУ НОВЫЙ ПАРОЛЬ', type: 'success' })
              } else {
                const errors = get(data, 'userPasswordRestore.errors')
                if (errors && errors.length > 0) {
                  errors.forEach(el => {
                    let elCode = el.code;
                    let elMessage = el.message;
                    if (el.code === VIKW__USER_NO_FOUND) {
                      elCode = '';
                      elMessage = 'Пользователь с указанным email не найден';
                    }
                    this.$notify({
                      group: 'foo',
                      title: 'Ошибка: ' + elMessage + (elCode ? ` (${elCode})` : ''),
                      type: 'error'
                    })
                  })
                } else {
                  this.$notify({ group: 'foo', title: 'Ошибка' + errors, type: 'error' })
                }
              }
            },
          })
        }
      }
    }
  };
</script>

