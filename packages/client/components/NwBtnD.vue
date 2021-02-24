<template>
  <div class="nw_btn-main" @click="handleClick">
    <div class="nw_btn-rect-down"></div>
    <div class="nw_btnd_rect_top">
      <div class="nw_btn_img" style="margin-top: 17px;"></div>
      <div style="width: 10px;"></div>
      <div v-if="!!text" class="nw_btnd_text" style="margin-top: 17px;">{{text}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      link: String,
      linkType: {
        type: String,
        default: 'external'
      }
    },
    methods: {
      handleClick() {
        if (this.link) {
          if (this.linkType === 'external') {
            window.open(this.link)
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  .nw_btn-main {
    position: absolute;
    width: 219px;
    height: 50px;
  }

  .nw_btn-rect-down {
    position: absolute;
    left: 0;
    right: 0;
    top: 5.66%;
    bottom: 0;

    background: #FF4D4F;
    box-shadow: 0 10px 15px rgba(255, 120, 117, 0.2);
    border-radius: 5px;

    &:hover {
      background: #F5222D;
      cursor: pointer;
    }
  }

  /* Rectangle 13 */
  .nw_btnd_rect_top {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 5.66%;
    display: flex;
    justify-content: center;

    background: #FF7875;
    border-radius: 5px;

    &:hover {
      background: #FF4D4F;
      cursor: pointer;
    }
  }

  .nw_btnd_text {
    font-family: 'Montserrat Alternates', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
  }

  .nw_btn_img {
    width: 18px;
    height: 18px;
    background-image: url('/a1/social-instagram-btn.svg');
  }
</style>
