<template>
  <div class="hw_helloblk_cont">
    <div class="hw_helloblk-main_cont">
      <NwBtn v-bind="{text: 'СДЕЛАТЬ ЗАКАЗ'}" class="nw_helloblk-n1" />
    </div>
  </div>
</template>

<script>
  import NwBtn from '../components/NwBtn';

  export default {
    components: { NwBtn }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  .hw_helloblk_cont {
    * {
      // outline: 1px rgba(0, 0, 0, 0.99) solid;
    }

    position: relative;
    display: flex;
    justify-content: center;
    font-family: 'Montserrat Alternates', monospace;

    .hw_helloblk-main_cont {
      width: 1920px;
      height: 723px;
      position: relative;
      display: flex;
      justify-content: center;
      background-image: url('/a2/helloblk_2.png');
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: top;
      background-size: cover;

      .nw_helloblk-n1 {
        margin-top: 470px;
        margin-right: 965px;
      }

    }

  }
</style>
