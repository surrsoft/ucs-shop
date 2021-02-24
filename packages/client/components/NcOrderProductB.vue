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
      <div style="height: 8px"></div>
      <a-button @click="handleEdit" size="small">изменить</a-button>
      <a-popconfirm
        title="Удаление товара"
        ok-text="Удалить"
        cancel-text="Отмена"
        @confirm="handleDelete"
      >
        <a-button size="small">удалить</a-button>
      </a-popconfirm>
    </div>
    <div class="nc-text-1">{{competedCost}}</div>
  </div>
</template>

<script>
  import { utilNumberAsMoneyRub } from '../utils/stdutils';

  export default {
    props: {
      product: Object,
    },
    created() {
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
      },
      handleEdit() {
        this.$emit('product-edit-1606', this.product)
      },
      handleDelete() {
        this.$emit('product-delete-1606', this.product)
      },
    },
    filters: {
      strTrim(value) {
        if (value) {
          return value.substring(0, 100)
        }
        return value;
      }
    },
    computed: {
      competedCost() {
        return utilNumberAsMoneyRub(this.product.costRub) || ''
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
