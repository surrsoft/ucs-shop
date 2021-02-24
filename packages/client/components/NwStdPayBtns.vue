<template>
  <div style="display: flex; ">
    <StbBtn
      img-normal="/a1/pay-visa.svg"
    />
    <div style="width: 10px;"></div>
    <StbBtn
      img-normal="/a1/pay-mastercard.svg"
    />
    <div style="width: 10px;"></div>
    <StbBtn
      img-normal="/a1/pay-maestro.svg"
    />
    <div style="width: 10px;"></div>
    <StbBtn
      img-normal="/a1/pay-paypal.svg"
    />
  </div>
</template>

<script>
  import StbBtn from './std/StbBtn';

  export default {
    components: { StbBtn }
  }
</script>
