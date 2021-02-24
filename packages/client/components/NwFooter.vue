<template>
  <div class="stb_align_h_center">
    <div class="stb_align_h_center nw_footer" style="width: 1920px;">
      <div style="display: flex; flex-direction: column">
        <div class="stb_align_wh_center nw_logo nw_logo_pos">
          <div class="nw_logo_text">ЛОГО</div>
        </div>
        <div style="height: 20px;"></div>
        <div class="nw_logo_subtext">Короткое описание магазина</div>
        <div class="nw_logo_subtext">в две строки</div>
      </div>
      <div style="width: 105px;"></div>
      <NwNavbarB style="margin-top: 40px;"/>
      <div style="width: 188px;"></div>
      <div style="margin-top: 40px;">
        <div class="nw_text">Мы в социальных сетях:</div>
        <div style="height: 25px;"></div>
        <NwStdSocialBtns/>
      </div>
      <div style="width: 187px;"></div>
      <div>
        <div style="height: 40px;"></div>
        <div class="nw_text">Способы оплаты:</div>
        <div style="height: 25px;"></div>
        <NwStdPayBtns/>
      </div>
    </div>
  </div>
</template>

<script>
  import NwNavbarB from './NwNavbarB';
  import NwStdPayBtns from './NwStdPayBtns';
  import NwStdSocialBtns from './NwStdSocialBtns';
  import StbBtn from './std/StbBtn';
  import pc from '../utils/project-config';

  export default {
    components: {
      NwStdSocialBtns,
      NwStdPayBtns,
      NwNavbarB,
      StbBtn
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

  .nw_footer {
    background: rgba(0, 0, 0, 0.85);
    height: 230px;

    font-family: 'Montserrat Alternates', monospace;
  }

  .nw_logo {
    width: 170px;
    height: 60px;
    background: #A6A6A6;
    opacity: 0.5;
    border-radius: 5px;
  }

  .nw_logo_pos {
    margin-top: 40px;
  }

  .nw_logo_text {
    font-family: 'Montserrat Alternates', monospace;
    font-size: 16px;
    line-height: 30px;
    color: #FFFFFF;
  }

  .nw_sublogo {
    font-family: 'Montserrat Alternates', monospace;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    opacity: 0.6;
  }

  .nw_text {
    color: white;
    font-size: 16px;
    line-height: 20px
  }

  .nw_logo_subtext {
    color: #FFFFFF;
  }
</style>
