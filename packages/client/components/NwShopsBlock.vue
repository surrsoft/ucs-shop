<template>
  <div>
    <div v-for="(shopGroup, iRow) in elemsGroups" :key="iRow" class="nw_row">
      <a
        v-for="(shop, iCell) in shopGroup"
        :key="iCell"
        :class="[
          'nw_cell',
          'stb_align_wh_center',
          iRow > 0 ? 'nw_border_top' : '',
          iCell > 0 ? 'nw_border_left' : '',
        ]"
        :href="shop.url"
        target="_blank"
      >
        <figure>
          <img
            class="nw_shop_img"
            :alt="shop.name"
            :src="`/shop-logos/${shop.image}`"
            :style="`max-height: ${imgMaxHeightPx}px;`"
          >
        </figure>
      </a>
    </div>
  </div>
</template>

<script>
  import { brandsAllCount, brandsGet, shopsAllCount, shopsGet } from './Shops/shopsData';
  import { StdPagination } from '../utils/stdutils';

  export default {
    props: {
      pRowsCount: { type: Number, default: 2, },
      pRowElemsCount: { type: Number, default: 6, },
      pPageIndex: { type: Number, default: 0 },
      pIsRandom: false,
      isBrands: false,
      mode: { type: Boolean, default: true }
    },
    data() {
      return {
        rowsCount: this.$props.pRowsCount,
        rowElemsCount: this.$props.pRowElemsCount,
        imgMaxHeightPx: 74,
        elemsGroups: []
      }
    },
    mounted() {
      const elems01 = this.fnElemsGet();
      const pgn = new StdPagination(this.fnElemsCountAll(), this.rowsCount * this.rowElemsCount);
      const ixs = pgn.indexesByPage(this.pPageIndex + 1);
      const elems0 = elems01.slice(ixs[0], ixs[1] + 1);
      for (let i = 1; i <= this.rowsCount; i++) {
        const iStart = i === 1 ? 0 : (i - 1) * this.rowElemsCount;
        const iEnd = i * this.rowElemsCount;
        const elemsGroup = elems0.slice(iStart, iEnd);
        this.elemsGroups.push(elemsGroup);
      }
    },
    methods: {
      handleClick() {
      },
      fnElemsCountAll() {
        if (!this.isBrands) {
          return shopsAllCount(this.mode);
        }
        return brandsAllCount(this.mode);
      },
      fnElemsGet() {
        if (!this.isBrands) {
          return shopsGet(this.pIsRandom, this.rowsCount * this.rowElemsCount, this.mode);
        }
        return brandsGet(true, this.rowsCount * this.rowElemsCount, this.mode);
      }
    }
  }
</script>

<style scoped lang="scss">
  * {
    // outline: 1px solid rgba(0, 0, 0, 0.99);
  }

  .nw_row {
    display: flex;
    justify-content: center;
  }

  .nw_cell {
    width: 202px;
    height: 202px;
    padding: 26px;

    &:hover {
      cursor: pointer;
      box-shadow: 0 10px 25px rgba(227, 227, 227, 0.8);
    }
  }

  $nw_color_01: rgba(0, 0, 0, 0.1);

  .nw_border_top {
    border-top: $nw_color_01 1px solid;
  }

  .nw_border_left {
    border-left: $nw_color_01 1px solid;
  }

  .nw_shop_img {
    filter: grayscale(100%);
    opacity: .7;
    transition-delay: 0s;
    transition-duration: .3s;
    transition-property: all;
    transition-timing-function: ease;

    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }
  }
</style>
