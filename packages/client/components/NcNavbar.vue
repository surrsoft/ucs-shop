<template>
  <nav style="display: flex; flex-direction: column; width: 178px; flex: 0 0; gap: 8px">
    <nuxt-link exact class="nc-link" to="/cabinet">Мои заказы</nuxt-link>
    <nuxt-link exact class="nc-link" to="/profile">Профиль</nuxt-link>
  </nav>
</template>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
  }

  .nc-link {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 172px;
    height: 42px;
  }

  .nuxt-link-exact-active {
    font-weight: bold;
    background: #E6F7FF;
    box-shadow: inset -3px 0px 0px #1890FF;
  }
</style>
