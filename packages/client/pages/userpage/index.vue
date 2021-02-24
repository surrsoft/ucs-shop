<template>
  <div>
    <p class="title is-2">Личный кабинет</p>
    <div>email: {{user ? user.email : ''}}</div>
    <div>Имя: {{user ? user.nameFirst : ''}}</div>
    <div>Фамилия: {{user ? user.nameLast : ''}}</div>
    <div>Телефон: {{user ? user.tel : ''}}</div>
    <div>Город: </div>
    <div>Ближайший пункт выдачи заказов СДЭК: </div>
  </div>
</template>

<script>
  import { CST_AUTH_LS__USERNAME } from '../../utils/consts';
  import gql from 'graphql-tag';

  export default {
    data() {
      return {
        email: '',
        user: '',
      }
    },
    created() {
    },
    mounted() {
      this.email = localStorage.getItem(CST_AUTH_LS__USERNAME);
    },
    apollo: {
      user: {
        query: gql`query user($email: String!) {
                      user(email:$email) {
                        email
                        nameFirst
                        nameLast
                        tel
                      }
                    }`,
        variables() {
          return {
            email: this.email
          }
        } // variables()
      } // user:
    } // apollo:
  }
</script>
