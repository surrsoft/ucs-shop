<template>
  <nav class="nw_navbar_b">
    <div class="nw_navbar_b-menu">
      <nuxt-link class="nw_navbar_b_item" :to="pc.pages.main.path">
        {{pc.pages.main.title}}
      </nuxt-link>
      <div class="hw_navbar_b_gap_size"></div>
      <nuxt-link class="nw_navbar_b_item" :to="pc.pages.faq.path">
        {{pc.pages.faq.title}}
      </nuxt-link>
      <div class="hw_navbar_b_gap_size"></div>
      <nuxt-link class="nw_navbar_b_item" :to="pc.pages.shops.path">
        {{pc.pages.shops.title}}
      </nuxt-link>
      <div class="hw_navbar_b_gap_size"></div>
      <nuxt-link class="nw_navbar_b_item" :to="pc.pages.learn.path">
        {{pc.pages.learn.title}}
      </nuxt-link>
      <div class="hw_navbar_b_gap_size"></div>
      <nuxt-link class="nw_navbar_b_item" :to="pc.pages.videoshopping.path">
        {{pc.pages.videoshopping.title}}
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
  import pc from '../utils/project-config';

  export default {
    props: {
      isAlternate: Boolean,
    },
    data() {
      return {
        pc
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  .nw_navbar_b {

    .nw_navbar_b-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .nw_navbar_b_item {
        text-align: center;
        color: white;
        font-size: 15px;
        line-height: 20px;
        padding: 0;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .hw_navbar_b_gap_size {
    height: 13px;
  }
</style>
