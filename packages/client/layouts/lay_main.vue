<template>
  <div>
    <NwHeader />
    <Nuxt/>
    <NwFooter/>
  </div>
</template>

<script>
  import NwHeader from '../components/NwHeader';
  import NwFooter from '../components/NwFooter';

  export default {
    components: { NwFooter, NwHeader },
  }
</script>
