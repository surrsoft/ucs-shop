<template>
  <div style="display: flex">
    <StbBtn
      img-normal="/a1/social-instagram.svg"
      img-hover="/a1/social-instagram-hover.svg"
      :link="pc.socialLinks.instagram"
    />
    <div style="width: 10px;"></div>
    <StbBtn
      img-normal="/a1/social-whatsapp.svg"
      img-hover="/a1/social-whatsapp-hover.svg"
      :link="pc.socialLinks.wathsapp || 'https://www.whatsapp.com'"
    />
    <div style="width: 10px;"></div>
    <StbBtn
      img-normal="/a1/social-viber.svg"
      img-hover="/a1/social-viber-hover.svg"
      :link="pc.socialLinks.viber"
    />
    <div style="width: 10px;"></div>
    <StbBtn
      img-normal="/a1/social-telegram.svg"
      img-hover="/a1/social-telegram-hover.svg"
      :link="pc.socialLinks.telegram"
    />
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
