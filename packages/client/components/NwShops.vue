<template>
  <div class="nw_shops-main_cont">
    <div class="nw_col" style="position: relative">
      <img
        src="/main-page/area-r.svg"
        style="position: absolute; top: 210px; left: calc(50% + 1653px - 960px + 17px)"
      >
      <img
        src="/main-page/area-l.svg"
        style="position: absolute; top: -176px; left: calc(50% - 960px)"
      >
      <img
        src="/main-page/arc-l-d.svg"
        style="position: absolute; top: 630px; left: calc(50% - 960px)"
      >
      <img
        src="/main-page/arc-l-t.svg"
        style="position: absolute; top: calc(-64px - 18px); left: calc(50% - 960px + 339px)"
      >
      <img
        src="/main-page/arc-r.svg"
        style="position: absolute; top: 76px; left: calc(50% - 960px + 1501px)"
      >
      <div class="nw_txt1">Магазины и бренды</div>
      <div class="nw_txt2">с которыми мы работаем</div>

      <div style="height: 60px;"></div>
      <NwBtnSwitch
        :texts="['МАГАЗИНЫ', 'БРЕНДЫ']"
        :select-index="0"
        :gap="30"
        @change="handleChange"
      />

      <div style="height: 34px;"></div>
      <div class="nw_shops">
        <NwShopsBlock
          :p-is-random="true"
          :mode="false"
          :is-brands="isBrands"
          :key="keyShops"
        />
      </div>

      <div style="height: 40px;"></div>
      <NwBtnC
        text="СМОТРЕТЬ ВСЕ"
        link="shops"
        :stylesText="`
          font-family: 'Montserrat Alternates', monospace;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          color: #FF4D4F;
        `"
        :stylesNormal="`
          border: 1px solid #FF4D4F;
          boxSizing : border-box;
          borderRadius: 5px
        `"
        :stylesHover="`
          border: 1px solid #FF4D4F;
          boxSizing : border-box;
          borderRadius: 5px;
          background-color: #FFF1F0;
          cursor: pointer;
        `"
      />
    </div>
  </div>
</template>

<script>
  import NwBtnSwitch from '../components/NwBtnSwitch';
  import NwShopsBlock from '../components/NwShopsBlock';
  import NwBtnC from '../components/NwBtnС';

  export default {
    components: { NwBtnSwitch, NwShopsBlock, NwBtnC },
    data() {
      return {
        isBrands: false,
        keyShops: Date.now()
      }
    },
    methods: {
      handleChange(val) {
        this.isBrands = val === 1;
        this.keyShops = Date.now();
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    // outline: 1px solid black;
  }

  .nw_shops-main_cont {
    display: flex;
    justify-content: center;
    font-family: 'Montserrat Alternates', monospace;

    .nw_col {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 1600px;

      .nw_txt1 {
        font-weight: bold;
        text-align: center;
        font-size: 38px;
        line-height: 46px;
        color: $nw_color_02;
      }

      .nw_txt2 {
        font-weight: bold;
        text-align: center;
        font-size: 38px;
        line-height: 46px;
        color: $nw_color_01_black
      }
    }
  }
</style>
