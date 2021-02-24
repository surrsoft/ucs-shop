<template>
  <div class="uienter">

    <div class="title is-2 has-text-centered">Вход</div>
    <LoginBlock
      :show-forgot-button="true"
    />
  </div>
</template>

<script>
  import LoginBlock from '../../components/LoginBlock';

  export default {
    components: {
      LoginBlock
    }
  }
</script>
