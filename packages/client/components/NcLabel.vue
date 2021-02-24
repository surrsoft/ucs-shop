<template>
  <div class="nc-main">{{text}}</div>
</template>

<script>

  export default {
    props: {
      text: String
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
  }

  .nc-main {
    font-size: 12px;
    line-height: 15px;
    color: #096DD9;
    background: #E6F7FF;
    border-radius: 20px;
    padding: 8px 16px;
  }
</style>
