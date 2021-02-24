<template>
  <div :class="[
      'nw_btn_main_cont',
      isSelected ? 'nw_bg_1' : 'nw_bg_2',
      isSelected ? 'nw_hv_1' : 'nw_hv_2'
    ]">
    <div :class="[
        'nw_btn_txt',
        isSelected ? 'nw_txt_1' : 'nw_txt_2'
      ]">{{text}}</div>
  </div>
</template>

<script>
  export default {
    props: { text: String, isSelected: Boolean },
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  .nw_bg_1 {
    background-color: #40A9FF;
  }

  .nw_bg_2 {
    background-color: #FDFDFD;
    box-shadow: inset 0px -1px 8px rgba(0, 0, 0, 0.08);
  }

  .nw_txt_1 {
    color: #FFFFFF;
  }

  .nw_txt_2 {
    color: rgba(0, 0, 0, 0.65);
    opacity: 0.6;
  }

  .nw_hv_1 {
    &:hover {
      background-color: #1890FF;
      box-shadow: 0 10px 15px rgba(64, 169, 255, 0.25);
      cursor: pointer;
    }
  }

  .nw_hv_2 {
    &:hover {
      background: #F3F3F3;
      box-shadow: inset 0px -1px 8px rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }
  }

  .nw_btn_main_cont {
    display: flex;
    justify-content: center;
    width: 270px;
    height: 60px;
    border-radius: 5px;

    .nw_btn_txt {
      font-family: 'Montserrat Alternates', monospace;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin: 23px;
    }
  }
</style>
