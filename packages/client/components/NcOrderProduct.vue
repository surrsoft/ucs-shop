<template>
  <div style="display: flex; justify-content: space-between; padding: 16px;">
    <div>
      <div class="nc-text-1">{{product.name}}</div>
      <div class="nc-text-2" style="margin-top: 8px;">
        {{productInfo()}}
      </div>
      <div style="margin-top: 8px;">
        <a class="nc-text-3" :href="product.url" target="_blank">{{product.url | strTrim}}</a>
      </div>
    </div>
    <div class="nc-text-1">{{computedCost}}</div>
  </div>
</template>

<script>
  import { stdStrFirstSymbols, utilNumberAsMoneyRub } from '../utils/stdutils';

  export default {
    props: {
      product: Object,
      isDollar: Boolean
    },
    methods: {
      productInfo() {
        return [
          this.product.prodcatName,
          this.product.prodsubcatName,
          this.product.size,
          this.product.color,
          `${this.product.costDollar || ''}$`
        ].filter(Boolean).join(', ')
      }
    },
    filters: {
      strTrim(value) {
        return stdStrFirstSymbols(value, 100);
      }
    },
    computed: {
      computedCost() {
        const nx = utilNumberAsMoneyRub(this.product.costRub)
        return (nx || '');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
  }

  .nc-text-1 {
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.65);
  }

  .nc-text-2 {
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.65);
  }

  .nc-text-3 {
    font-size: 12px;
    line-height: 15px;
    color: rgba(0, 0, 0, 0.45);

    &:hover {
      cursor: pointer;
      color: #1890FF;
    }
  }
</style>
