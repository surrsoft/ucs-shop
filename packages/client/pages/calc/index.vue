<template>
  <div>
    <div class="title is-2">Калькулятор</div>
    <div>{{categories}}</div>
  </div>
</template>

<script>

  import { gqlTarifCategoriesGet } from '../../utils/gql-queries';

  export default {
    data() {
      return {
        isLoading: true
      }
    },
    apollo: {
      tarifCategoriesGet: {
        query: gqlTarifCategoriesGet,
        update: ({ tarifCategoriesGet }) => {
          this.isLoading = false;
          return tarifCategoriesGet
        }
      }
    },
    computed: {
      categories() {
        return this.tarifCategoriesGet.map(el => el.prodcat)
      }
    }
  }
</script>
