<template>
  <div>
    <notifications group="foo"/>
    <validation-observer>
      <div class="title is-2">Регистрация</div>

      <div class="field">
        <div class="label">E-mail*</div>
        <div class="control">
          <validation-provider rules="required" v-slot="{ errors }">
            <input
              v-model="email"
              :class="classesInputGet(errors)"
              type="email"
              placeholder="Введите email"
            />
          </validation-provider>
        </div>
      </div>

      <div class="field">
        <div class="label">Имя</div>
        <validation-provider v-slot="{ errors }">
          <div class="control">
            <input
              v-model="nameFirst"
              :class="classesInputGet(errors)"
              type="text"
              placeholder="Введите имя"
            />
          </div>
        </validation-provider>
      </div>

      <div class="field">
        <div class="label">Фамилия</div>
        <div class="control">
          <validation-provider v-slot="{ errors }">
            <input
              v-model="nameLast"
              :class="classesInputGet(errors)"
              type="text"
              placeholder="Введите фамилию"
            />
          </validation-provider>
        </div>
      </div>

      <div class="field">
        <div class="label">Телефон</div>
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control is-expanded">
              <validation-provider rules="phone" v-slot="{ errors }">
                <input
                  v-model="tel"
                  :class="classesInputGet(errors)"
                  type="tel"
                  placeholder="Введите телефон, например +79201112233"
                />
              </validation-provider>
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="label">Город</div>
        <div class="control">
          <input v-model="city" :class="classesInputGet()" type="text" placeholder="Введите город"/>
        </div>
      </div>

      <div class="field">
        <div class="label">Ближайший пункт выдачи заказов СДЭК</div>
        <div class="control">
          <input class="input is-rounded" type="text" placeholder="Введите"/>
        </div>
      </div>

      <div class="field is-grouped mt-6">
        <div class="control">
          <button
            :class="['button is-link', {'is-loading': isLoading}]"
            :disabled="isLoading"
            @click="userRegPerform"
          >
            Отправить
          </button>
        </div>
      </div>

    </validation-observer>
  </div>
</template>

<script>
  import Fas from "../../components/std/Fas";
  import gql from "graphql-tag";
  import { gqlUserCreate } from "../../utils/gql-queries.js";
  import { get } from 'lodash';
  import {
    CST_REG_MODE__REG,
    CST_ERR_CODE__DUP_KEY_EMAIL, CST_REG_MODE__FORGOT
  } from '../../utils/consts';
  import { stdSleep } from '../../utils/stdutils';

  export default {
    components: {
      Fas,
    },
    data() {
      return {
        isLoading: false,
        nameFirst: '',
        nameLast: '',
        email: '',
        tel: '',
        city: '',
      };
    },
    methods: {
      classesInputGet(errors) {
        const ret = ["input", "is-rounded"];
        if (errors && errors[0]) {
          ret.push("is-danger");
        }
        return ret;
      },
      async userRegPerform() {
        this.isLoading = true;
        const variables = {
          input: {
            email: this.email,
            nameFirst: this.nameFirst,
            nameLast: this.nameLast,
            tel: this.tel,
            city: this.city,
          },
        };

        await stdSleep(1500);

        try {
          await this.$apollo.mutate({
            mutation: gqlUserCreate,
            variables,
            update: (store, { data }) => {
              if (get(data, 'userCreate.user')) {
                this.$notify({
                  group: 'foo', title: 'Успешно', type: 'success'
                });
                // --- route
                this.$router.push({
                  name: 'loginReg',
                  params: { mode: CST_REG_MODE__REG, email: this.email }
                });
              } else {
                const errors = get(data, 'userCreate.errors.errors')
                if (errors && errors.length > 0) {
                  const isEmailDiplicate = errors.find(el => el.code === CST_ERR_CODE__DUP_KEY_EMAIL)
                  if (isEmailDiplicate) {
                    this.$notify({ group: 'foo', title: 'temp: duplicate email', type: 'error' })
                    // --- route
                    this.$router.push({
                      name: 'loginReg',
                      params: { mode: CST_REG_MODE__FORGOT, email: this.email }
                    });
                  } else {
                    errors.forEach(el => {
                      this.$notify({ group: 'foo', title: 'error', text: el.message, type: 'error' })
                    })
                  }
                }
              }
            },
          });
        } catch (err) {
          this.$notify({ group: 'foo', title: 'error', text: err.message, type: 'error' })
        } finally {
          this.isLoading = false
        }

      }
    }
  };
</script>
