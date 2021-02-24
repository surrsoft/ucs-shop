<template>
  <div class="nw_img_tel" style="display: flex">
    <div class="stb_align_h_center" v-for="(page, ix) in pages" :key="ix">
      <div class="nw_x" v-if="ix > 0">></div>
      <div
        class="nw_link" v-if="ix < (pages.length - 1)"
        @click="handleClick(page.path || '/')"
      >{{page.title}}</div>
      <div class="nw_text1" v-if="ix === (pages.length - 1)">{{page.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pages: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      handleClick(val) {
        this.$router.push(val);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
    font-size: 12px;
    line-height: 15px;
    color: rgba(0, 0, 0, 0.85);
  }

  .nw_link {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .nw_text1 {
    font-weight: bold;
  }

  .nw_x {
    margin-left: 9px;
    margin-right: 8px;
  }
</style>
