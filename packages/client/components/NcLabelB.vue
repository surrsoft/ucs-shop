<template>
  <div class="nc-main">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
  }

  .nc-main {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 16px;

    background: #E6F7FF;
    border: 1px solid #91D5FF;
    box-sizing: border-box;
    border-radius: 2px;

    font-size: 14px;
    line-height: 16px;
  }
</style>
