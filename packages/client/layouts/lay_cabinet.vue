<template>
  <div>
    <NwHeader/>
    <div class="nc-main" style="display: flex; position: relative; max-width: 1920px; margin: auto">
      <div id="inf-nc-l-side">
        <NcNavbar style="margin-top: 32px; margin-left: 24px;"/>
      </div>
      <div id="inf-nc-r-side" style="flex-grow: 1">
        <Nuxt/>
      </div>
    </div>
    <NwFooter/>
  </div>
</template>

<script>
  import NwHeader from '../components/NwHeader';
  import NwFooter from '../components/NwFooter';
  import NcNavbar from '../components/NcNavbar';

  export default {
    components: {
      NwFooter,
      NwHeader,
      NcNavbar
    },
  }
</script>
