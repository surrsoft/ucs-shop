<template>
  <div>
    <footer class="footer" style="background-color: hsl(347, 90%, 96%)">
      <div class="columns">
        <div class="column is-4">
          <div class="surr-flex-v-center">
            <p>"USA CHECK SHOP"</p>
            <p class="mt-2">© 2020</p>
            <p class="mt-2">
              <img src="~/assets/logo-09.png"/>
            </p>
          </div>
        </div>

        <div class="column is-4">
          <div class="surr-flex-v-center">
            <nuxt-link
              exact
              class="navbar-item"
              to="/"
            >
              {{projectData.pages.main.title}}
            </nuxt-link>

            <nuxt-link
              exact
              class="navbar-item"
              to="/shops"
            >
              {{projectData.pages.shops.title}}
            </nuxt-link>

            <nuxt-link
              exact
              class="navbar-item"
              to="/faq"
            >
              {{projectData.pages.faq.title}}
            </nuxt-link>

          </div>
        </div>
        <div class="column is-4">
          <div class="is-medium has-text-centered">Свяжитесь с нами</div>
          <div class="has-text-centered mt-2">
            <a class="cls42" :href="projectData.socialLinks.instagram" target="_blank">
              <Fab i="instagram"/>
            </a>
            <a class="cls42" :href="projectData.socialLinks.viber" target="_blank">
              <Fab i="viber"/>
            </a>
            <a class="cls42" :href="projectData.socialLinks.telegram" target="_blank">
              <Fab i="telegram-plane"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
    <div class="level" style="color: #F5F5F5; background-color: #9d9fa3; padding: 0 1.5rem 0 0">
      <div class="level-left" style="background-color: white">
        <div class="level-item">
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a
            href="https://www.7rlines.ru/"
            target="_blank"
            style="color: #f7f8fb"
          >© "7 Red Lines"</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import projectData from '../utils/project-config';
  import Fab from '../components/std/Fab';

  export default {
    components: {
      Fab
    },
    data() {
      return {
        projectData
      }
    }
  }
</script>

<style scoped>
  .cls42 {
    color: black;
    margin-right: 0.5rem;
  }

  .cls42:visited {
    color: black
  }

  .cls42:hover {
    color: aqua;
  }
</style>
