<template>
  <div class="nw_box_appear nw_box_pos">
    <div class="nw_text_title">{{textTitle}}</div>
    <div v-if="isOpenD" style="padding-bottom: 30px; padding-right: 30px">{{textContent}}</div>
    <img
      v-if="!isOpenD"
      src="/a1/btn-expand-closed.svg"
      class="nw_btn"
      @click="handleClick"
    >
    <img
      v-else
      src="/a1/btn-expand-opened.svg"
      class="nw_btn"
      @click="handleClick"
    >
  </div>
</template>

<script>
  export default {
    props: {
      textTitle: String,
      textContent: String,
      isOpen: false,
    },
    data() {
      return {
        isOpenD: this.isOpen
      }
    },
    methods: {
      handleClick() {
        this.isOpenD = !this.isOpenD
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
  }

  .nw_box_appear {
    background: #FFFFFF;
    box-shadow: 0 10px 25px #E3E3E3;
    border-radius: 5px;
  }

  .nw_box_pos {
    position: relative;
    width: 570px;
    padding-left: 30px;
  }

  .nw_text_title {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.85);
    margin-top: 30px;
    margin-bottom: 30px;
    padding-right: 100px;
  }

  .nw_btn {
    position: absolute;
    top: 22px;
    right: 30px;
    cursor: pointer;
  }
</style>
