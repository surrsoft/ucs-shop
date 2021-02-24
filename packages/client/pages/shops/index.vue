<template>
  <div style="display: flex; flex-direction: column; align-items: center; position: relative">
    <NwBreadcrumbs :pages="[
        {title: pc.pages.main.title},
        {title: pc.pages.shops.title}
    ]" style="position: absolute; top: 40px; left: calc(50% - 960px + 375px);"/>

    <div style="height: 120px"></div>
    <div class="nw_text1"><b>Магазины</b></div>

    <div style="height: 60px"></div>
    <NwBtnSwitch
      :texts="['МАГАЗИНЫ', 'БРЕНДЫ']"
      :select-index="0"
      :gap="30"
      @change="handleSwitcherChange"
    />

    <div style="height: 60px"></div>
    <NwShopsBlock
      :p-row-elems-count="columnsCount"
      :p-rows-count="rowsCount"
      :key="keyShopsBlock"
      :p-page-index="pageIndexCurr"
      :is-brands="switcherIndexCurr === 1"
    />

    <div style="height: 50px"></div>
    <NwPagination
      :p-pages-count="pagesCount"
      :p-page-number-current="pageIndexCurr + 1"
      :callback="handlePageChange"
      :key="keyPagination"
    />

    <div style="height: 120px"></div>
  </div>
</template>

<script>
  import config from '../../utils/project-config'
  import NwBtnSwitch from '../../components/NwBtnSwitch';
  import NwShopsBlock from '../../components/NwShopsBlock';
  import NwBreadcrumbs from '../../components/NwBreadcrumbs';
  import NwPagination from '../../components/NwPagination';
  import { brandsAllCount, shopsAllCount } from '../../components/Shops/shopsData';
  import { StdPagination } from '../../utils/stdutils';

  export default {
    layout: 'lay_main',
    components: {
      NwPagination,
      NwBtnSwitch,
      NwShopsBlock,
      NwBreadcrumbs,
    },
    data() {
      return {
        pc: config,
        // 0+
        pageIndexCurr: 0,
        columnsCount: 6,
        rowsCount: 6,
        pagesCount: 0,
        switcherIndexCurr: 0,
        keyPagination: Date.now(),
        keyShopsBlock: Date.now(),
      }
    },
    created() {
      this.mtPagesCountUpdate();
    },
    methods: {
      mtPagesCountUpdate() {
        const elemsCount = this.switcherIndexCurr === 0 ? shopsAllCount() : brandsAllCount();
        const nx = this.columnsCount * this.rowsCount;
        const pgn = new StdPagination(elemsCount, nx);
        this.pagesCount = pgn.pageCountGet();
      },
      handleSwitcherChange(val) {
        if (this.switcherIndexCurr !== val) {
          this.switcherIndexCurr = val;
          this.pageIndexCurr = 0;
          this.mtPagesCountUpdate();
          this.keyShopsBlock = Date.now();
          this.keyPagination = Date.now()+1;
        }
      },
      handlePageChange(pageNum) {
        this.pageIndexCurr = pageNum - 1;
        this.keyShopsBlock = Date.now();
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/main";

  .nw_text1 {
    font-family: 'Montserrat Alternates', monospace;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0;
    text-align: center;
  }

</style>
