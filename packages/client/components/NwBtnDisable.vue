<template>
  <div class="nw_btn-main">
    <div class="nw_btn-rect-down"></div>
    <div class="nw_btn-rect-top">
      <div v-if="!!text" class="nw_btn-txt">{{text}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  .nw_btn-main {
    position: absolute;
    width: 205px;
    height: 50px;
  }

  .nw_btn-rect-down {
    position: absolute;
    left: 0;
    right: 0;
    top: 5.66%;
    bottom: 0;

    /* Dust red/500 */
    background: #5c5656;
    box-shadow: 0 10px 15px rgba(255, 120, 117, 0.2);
    border-radius: 5px;

    &:hover {
      background: #9e7d7f;
      cursor: pointer;
    }
  }

  /* Rectangle 13 */
  .nw_btn-rect-top {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 5.66%;

    background: #bbb8b8;
    border-radius: 5px;

    &:hover {
      background: #6f6767;
      cursor: pointer;
    }
  }

  .nw_btn-txt {
    position: absolute;
    top: 33.96%;
    left: 19.02%;
    right: 19.51%;
    bottom: 33.96%;

    font-family: 'Montserrat Alternates', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    text-align: center;

    /* Character/Inverse */
    color: #FFFFFF;
  }
</style>
