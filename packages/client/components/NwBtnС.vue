<template>
  <div
    class="nw_btn_main"
    :style="isHover ? stylesHover : stylesNormal"
    @mouseover="hoverOnHandle"
    @mouseout="hoverOutHandle"
    @click="handleClick"
  >
    <div class="nw_btn_text" :style="stylesText">{{text}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      stylesNormal: { type: String, default: '' },
      stylesHover: { type: String, default: '' },
      stylesText: { type: String, default: '' },
      link: String,
      linkType: { type: String, default: 'route' }
    },
    data() {
      return {
        styles: this.$props.stylesNormal,
        isHover: false
      }
    },
    methods: {
      hoverOnHandle() {
        this.isHover = true
      },
      hoverOutHandle() {
        this.isHover = false
      },
      handleClick() {
        if (this.link) {
          if (this.linkType === 'route') {
            this.$router.push(this.link)
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  .nw_btn_main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 205px;
    height: 50px;

    &:hover {
      cursor: pointer;
    }
  }

</style>
