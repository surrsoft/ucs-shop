<template>
  <div class="stb_align_h_center">
    <div class="stb_align_h_center"
         style="width: 1920px; background: #FFF7E6; padding-bottom: 105px; position: relative">
      <img src="/a2/man-flag-arc-blue.svg" style="position: absolute; top:506px; left: calc(50% + 743px);">
      <img src="/a2/man-flag-arc-orange.svg" style="position: absolute; top:112px; left: calc(50% - 713px);">
      <img src="/a2/man-flag-nr.svg" style="position: absolute; top:134px; left: calc(50% + 735px);">
      <img src="/a2/man-flag-nl.svg" style="position: absolute; top:89px; left: calc(50% - 960px);">
      <div class="nw_qimg"></div>
      <div style="width: 130px"></div>
      <div style="display: flex; flex-direction: column">
        <div style="height: 120px"></div>
        <div class="nw_text1"><b>Остались вопросы?</b></div>
        <div style="height: 40px"></div>
        <div class="nw_text5">Свяжись со мной в один клик через мессенджер</div>
        <div style="height: 40px"></div>
        <StbBtn
          img-normal="/a1/social-whatsapp-xbtn.svg"
          img-hover="/a1/social-whatsapp-xbtn-hover.svg"
          :link="pc.socialLinks.wathsapp"
        />
        <div style="height: 20px"></div>
        <StbBtn
          img-normal="/a1/social-telegram-xbtn.svg"
          img-hover="/a1/social-telegram-xbtn-hover.svg"
          :link="pc.socialLinks.telegram"
        />
        <div style="height: 20px"></div>
        <StbBtn
          img-normal="/a1/social-viber-xbtn.svg"
          img-hover="/a1/social-viber-xbtn-hover.svg"
          :link="pc.socialLinks.viber"
        />
      </div>

    </div>
  </div>
</template>

<script>
  import StbBtn from './std/StbBtn';
  import pc from '../utils/project-config';

  export default {
    components: { StbBtn },
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
    // outline: 1px solid rgba(0, 0, 0, 0.15);
  }

  .nw_qimg {
    width: 570px;
    height: 416.75px;
    margin-top: 104px;
    background-image: url('/a2/man-flag.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
  }

  .nw_text1 {
    font-size: 38px;
    line-height: 46px;
    color: rgba(0, 0, 0, 0.85);
    text-align: center
  }

  .nw_text5 {
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.65);
    opacity: 0.6;
  }

</style>
