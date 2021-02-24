<template>
  <div>
    <Helloblk4/>

    <div style="height: 115px;"></div>
    <NwShops/>

    <div style="height: 120px;"></div>
    <div class="stb_align_h_center" style="position: relative">
      <div class="nw_howmake"></div>
      <NwBtn style="position: absolute; top: 984px" text="ЗАКАЗАТЬ"/>
    </div>

    <div style="height: 120px;"></div>
    <NwReviews/>

    <div class="stb_align_h_center">
      <div style="background: #FFF7E6; position: relative; width: 1920px;">
        <img
          src="/main-page/arc-feedback.svg"
          style="position: absolute; top: 149px; left: calc(50% - 960px + 102px)"
        >
        <div style="height: 120px;"></div>
        <div class="nw_podpinsta">Подписывайся на наш Instagram</div>
        <div style="height: 60px;"></div>
        <div class="stb_align_h_center" style="height: 50px;">
          <NwBtnD text="@usa_check_shop" :link="pc.socialLinks.instagram"/>
        </div>
        <div style="height: 73px;"></div>
        <div class="stb_align_h_center">
          <div class="nw_prefoot"></div>
        </div>
        <div style="height: 120px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import BulmaWhyWe from '../components/BulmaWhyWe'
  import BulmaHowItWork from '../components/BulmaHowItWork'
  import BulmaReviews from '../components/BulmaReviews'
  import Shops from '../components/Shops'
  import BuetyShopCarausel from '../components/BuetyShopCarausel'
  import Helloblk4 from '../components/Helloblk4'
  import NwShops from '../components/NwShops'
  import NwBtn from '../components/NwBtn'
  import NwReviews from '../components/NwReviews'
  import NwBtnD from '../components/NwBtnD'
  import pc from '../utils/project-config';

  export default {
    layout: 'lay_main',
    components: {
      NwReviews,
      NwBtn,
      NwBtnD,
      Helloblk4,
      NwShops,
      BulmaHowItWork,
      BulmaWhyWe,
      BulmaReviews,
      Shops,
      BuetyShopCarausel
    },
    data() {
      return {
        pc
      }
    },
  }

</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
  }

  .nw_howmake {
    width: 1920px;
    height: 1156px;
    background-image: url('/a2/howmake_img.svg');
    background-position-x: center;
  }

  .nw_elem {
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    text-align: center;

    .nw_elem_s {
      color: $nw_color_02;
    }
  }

  .nw_podpinsta {
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    text-align: center;
  }

  .nw_prefoot {
    background-image: url('/a2/prefoot.png');
    background-position-x: center;
    background-size: cover;
    width: 1920px;
    height: 271px;
  }
</style>
