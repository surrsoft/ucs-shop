<template>
  <div>
    <BuetyCarousel class="mt-5"/>

    <BulmaHowItWork />

    <BulmaWhyWe />

    <BulmaReviews style="margin-top: 4rem;" />

    <div class="title is-2 has-text-centered mt-6">Магазины</div>
    <BuetyShopCarausel class="mt-6" />

  </div>
</template>


<script>
  import BuetyCarousel from '../components/BuetyCarousel'
  import BulmaWhyWe from '../components/BulmaWhyWe'
  import BulmaHowItWork from '../components/BulmaHowItWork'
  import BulmaReviews from '../components/BulmaReviews'
  import Shops from '../components/Shops'
  import BuetyShopCarausel from '../components/BuetyShopCarausel'

  export default {
    components: {
      BulmaHowItWork,
      BuetyCarousel,
      BulmaWhyWe,
      BulmaReviews,
      Shops,
      BuetyShopCarausel
    }
  }

</script>


