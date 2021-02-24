<template>
  <div class="container">
    <div class="shopsCls">
      <a :href="shop.url" target="_blanck" class="box" v-for="shop in shops" :key="shop.name">
        <figure>
          <img :src="`/shop-logos/${shop.image}`" :alt="shop.name" :style="`max-height: ${imgMaxHeightPx}px;`">
        </figure>
      </a>
    </div>
  </div>
</template>

<script>
  import { shopsGet } from './shopsData';
  import { stdArrSubArrayGet, StdPagination } from '../../utils/stdutils';

  export default {
    props: {
      pageNumber: {
        type: Number,
        default: 0
      },
      perPage: {
        type: Number,
        default: 10
      },
      imgMaxHeightPx: {
        type: Number,
        default: 72
      }
    },
    data() {
      return {
        shops: shopsGet()
      }
    },
    mounted() {
      if (this.pageNumber > 0) {
        const sp = new StdPagination(this.shops.length, this.perPage)
        const indexes = sp.indexesByPage(this.pageNumber)
        this.shops = stdArrSubArrayGet(this.shops, indexes[0], indexes[1])
      }
    }
  }
</script>

<style scoped>
  .shopsCls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .shopsCls a {
    margin: 0.5rem;
  }

</style>
