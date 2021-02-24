<template>
  <nav class="nw_navbar">
    <div class="nw_navbar-menu">
      <nuxt-link class="nw_navbar-item_leaf" :to="pc.pages.main.path">
        {{pc.pages.main.title}}
      </nuxt-link>
      <div class="nw_navbar_gap"></div>
      <nuxt-link class="nw_navbar-item_leaf" :to="pc.pages.faq.path">
        {{pc.pages.faq.title}}
      </nuxt-link>
      <div class="nw_navbar_gap"></div>
      <nuxt-link class="nw_navbar-item_leaf" :to="pc.pages.shops.path">
        {{pc.pages.shops.title}}
      </nuxt-link>
      <div class="nw_navbar_gap"></div>
      <nuxt-link class="nw_navbar-item_leaf" :to="pc.pages.learn.path">
        {{pc.pages.learn.title}}
      </nuxt-link>
      <div class="nw_navbar_gap"></div>
      <nuxt-link class="nw_navbar-item_leaf" :to="pc.pages.videoshopping.path">
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

  .nw_navbar {
    position: absolute;
    top: 106px;
    right: 0;
    display: inline-block;
    float: right;
    clear: right;

    .nw_navbar-menu {
      display: flex;

      .nw_navbar-item_leaf {
        text-align: center;
        color: $nw_color_01_black;
        font-size: 16px;
        line-height: 20px;
        padding: 0;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .nw_navbar_gap {
      width: 66px;
    }
  }
</style>
