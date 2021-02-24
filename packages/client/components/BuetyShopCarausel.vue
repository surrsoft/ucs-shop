<template>
  <section>
    <b-carousel
      :indicator="false"
      :arrow="true"
      :repeat="true"
      :arrow-hover="false"
      icon-pack="mdi"
      icon-prev="arrow-left"
      icon-next="arrow-right"
      icon-size="is-medium"
      :pause-info="false"
    >
      <b-carousel-item v-for="(ix) in dataLength" :key="ix">
        <Shops :page-number="ix" :per-page="th.perPage" :imgMaxHeightPx="72" />
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
  import { shopsGet } from './Shops/shopsData';
  import Shops from './Shops';
  import { StdPagination } from '../utils/stdutils';

  export default {
    components: {
      Shops
    },
    data() {
      return {
        th: {
          perPage: 8,
          dataLength: 0,
        },
      }
    },
    created() {
      this.dataLength = new StdPagination(shopsGet().length, this.th.perPage).pageCountGet()
    }
  }
</script>
