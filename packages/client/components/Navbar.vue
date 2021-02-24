<template>
  <nav
    class="navbar is-fixed-top mx-5"
    role="navigation"
    aria-label="main navigation"
    :key="key1"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img src="../assets/logo-20.png" width="92" height="54">
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link
          exact
          class="navbar-item"
          to="/"
        >
          {{projectConfig.pages.main.title}}
        </nuxt-link>

        <nuxt-link
          exact
          class="navbar-item"
          to="/shops"
        >
          {{projectConfig.pages.shops.title}}
        </nuxt-link>

        <nuxt-link exact class="navbar-item" to="/faq">
          {{projectConfig.pages.faq.title}}
        </nuxt-link>

        <nuxt-link exact class="navbar-item" to="/calc">
          Калькулятор
        </nuxt-link>

        <nuxt-link
          v-if="username"
          exact
          class="navbar-item"
          to="/userpage"
        >
          {{projectConfig.pages.userpage.title}}
        </nuxt-link>

      </div>

      <div class="navbar-end">
        <div
          v-if="username && isDone"
          style=" margin: auto"
          class="is-family-sans-serif is-size-7"
        >🧍‍♂ {{username}}
        </div>
        <div v-if="!username && isDone" class="navbar-item">
          <div class="buttons">
            <nuxt-link
              exact
              class="button is-primary"
              to="/regform"
            >
              Регистрация
            </nuxt-link>
            <span class="button is-light" @click="loginHandle">
              Войти
            </span>
          </div>
        </div>
      </div>
      <div v-if="username && isDone" class="navbar-item">
        <div class="button is-light" @click="outHandle">
          Выйти
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import config from '../utils/project-config'
  import { CST_AUTH_LS__TOKEN, CST_AUTH_LS__USERNAME, CST_REG_MODE__LOGIN, CST_REG_MODE__REG } from '../utils/consts';

  export default {
    data() {
      return {
        isDone: false,
        projectConfig: config,
        username: '',
        key1: Date.now()
      }
    },
    created() {
      this.$nuxt.$on('event-12', () => {
        this.mounted1();
        this.key1 = Date.now();
      })
    },
    mounted() {
      this.mounted1();
      // ---
      let navbar = document.querySelector('.navbar-burger');
      navbar.addEventListener('click', function () {
        let target = navbar.dataset.target;
        let $target = document.getElementById(target);
        navbar.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    },
    methods: {
      mounted1() {
        this.username = localStorage.getItem(CST_AUTH_LS__USERNAME);
        this.isDone = true;
      },
      loginHandle() {
        this.$router.push({ name: 'login', params: { mode: CST_REG_MODE__LOGIN } });
      },
      outHandle() {
        localStorage.removeItem(CST_AUTH_LS__USERNAME);
        localStorage.removeItem(CST_AUTH_LS__TOKEN);
        this.username = '';
        this.$router.push('/')
      }
    }
  }
</script>

