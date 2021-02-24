<template>
  <div
    class="btn_main"
    @mouseover="isHover = true"
    @mouseout="isHover = false"
    @click="handleClick"
  >
    <figure v-if="!isHover || !imgHover">
      <img :src="imgNormal">
    </figure>
    <figure v-else-if="!!imgHover">
      <img :src="imgHover">
    </figure>
  </div>
</template>

<script>
  export default {
    props: {
      imgNormal: { type: String, required: true },
      imgHover: String,
      link: String,
      // if false - opening external tab, true - opening on current tab
      isLinkLocal: Boolean,
      callback: Function,
      callbackOj: { type: Object, default: () => ({}) },
      callbackCtx: { type: Object, default: () => ({}) },
    },
    data() {
      return {
        isHover: false
      }
    },
    methods: {
      handleClick() {
        if (this.link) {
          if (this.isLinkLocal) {
            location.href = this.link
          } else {
            window.open(this.link)
          }
        } else if (this.callback) {
          this.callback.call(this.callbackCtx, this.callbackOj)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .btn_main {
    display: inline-block;

    :hover {
      cursor: pointer;
    }
  }
</style>
