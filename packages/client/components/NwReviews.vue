<template>
  <div id="nw_reviews" class="stb_align_h_center" style="flex-direction: column; position: relative">
    <img
        src="/main-page/arc-review.svg"
        style="position: absolute; top: -48px; left: calc(50% + 1437px - 960px)"
    >
    <img
        src="/main-page/arc-review-blue.svg"
        style="position: absolute; top: calc(683px + 92px); left: calc(50% + 1613px - 960px)"
    >
    <img
        src="/main-page/arc-review-area-r.svg"
        style="position: absolute; top: calc(393px + 92px); left: calc(50% + 1700px - 960px + 26px)"
    >
    <img
        src="/main-page/arc-review-area-l.svg"
        style="position: absolute; top: calc(-112px); left: calc(50% - 960px)"
    >
    <div class="nw_elem">
      <div><span class="nw_elem_s">Отзывы</span> счастливых</div>
      <div>покупателей</div>
    </div>
    <div style="height: 49px;"></div>
    <NwCarousel />
  </div>
</template>

<script>
import NwCarousel from './NwCarousel';
export default {
  components: { NwCarousel }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  .nw_elem {
    font-family: 'Montserrat Alternates', monospace;
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    text-align: center;

    .nw_elem_s {
      color: $nw_color_02;
    }
  }
</style>
