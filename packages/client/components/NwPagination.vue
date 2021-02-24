<template>
  <div
    class="stb_root" style="display: flex; flex-wrap: wrap; justify-content: center"
    :key="pPageNumberCurrentC"
  >
    <StbBtn
      class="stb_cls"
      img-normal="/components/NwPagination/nw-pagination-next-left.svg"
      img-hover="/components/NwPagination/nw-pagination-next-left-hover.svg"
      :callback="handleLeft"
    />
    <div
      class="stb_cls"
      v-for="(num, ix) in afzkPagination"
      :key="ix"
      style="position: relative"
    >
      <StbBtnB v-bind="mtBtnProps(num)"/>
    </div>
    <StbBtn
      class="stb_cls"
      img-normal="/components/NwPagination/nw-pagination-next-right.svg"
      img-hover="/components/NwPagination/nw-pagination-next-right-hover.svg"
      :callback="handleRight"
    />
  </div>
</template>

<script>
  import StbBtnB from './std/StbBtnB';
  import StbBtn from './std/StbBtn';
  import { AfzkPagination } from '../utils/stdutils';

  export default {
    components: {
      StbBtnB,
      StbBtn
    },
    props: {
      // 1+
      pPageNumberCurrent: Number,
      // 0+
      pPagesCount: {
        type: Number,
        default: 10
      },
      callback: Function,
      callbackCtx: Object
    },
    data() {
      return {
        pPageNumberCurrentC: this.pPageNumberCurrent,
        diapLeftRightC: 2,
      }
    },
    watch: {
      pPageNumberCurrentC: function () {
        if (this.callback) {
          this.callback.call(this.callbackCtx, this.pPageNumberCurrentC)
        }
      },
    },
    computed: {
      afzkPagination: function () {
        return new AfzkPagination(this.pPagesCount, 4, 10, 1, 1).get(this.pPageNumberCurrentC);
      }
    },
    methods: {
      handleClickBaseBtns(oj) {
        this.pPageNumberCurrentC = oj.ix + 1;
      },
      mtBtnProps(num) {
        return {
          state: num === (this.pPageNumberCurrentC) ? 'pressed' : 'normal',
          stateAtPressed: 'pressed',
          isOnlyCallbackAtPressed: true,
          states: [
            {
              name: 'normal',
              propData: {
                imgNormal: "/components/NwPagination/nw-pagination-border.svg",
                imgHover: "/components/NwPagination/nw-pagination-border-hover.svg",
                text: (num === -1 ? '...' : num) + '',
                textStylesHover: { color: '#FF7875' },
                callback: num !== -1 ? this.handleClickBaseBtns : undefined,
                callbackCtx: this,
                callbackOj: { ix: num - 1 },
                state: 'normal',
                stateAtPressed: 'pressed',
              }
            },
            {
              name: 'pressed',
              propData: {
                imgNormal: "/components/NwPagination/nw-pagination-pressed.svg",
                imgHover: "/components/NwPagination/nw-pagination-pressed.svg",
                text: (num === -1 ? '...' : num) + '',
                textStyles: { color: '#FFFFFF' },
                textStylesHover: { color: '#FFFFFF' },
                callback: num !== -1 ? this.handleClickBaseBtns : undefined,
                callbackCtx: this,
                callbackOj: { ix: num - 1 },
                stateAtPressed: 'pressed',
              }
            }
          ]
        }
      },
      handleLeft() {
        if (this.pPageNumberCurrentC > 1) {
          this.pPageNumberCurrentC--
        }
      },
      handleRight() {
        if (this.pPageNumberCurrentC < this.pPagesCount) {
          this.pPageNumberCurrentC++
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .stb_root {
    &:hover {
      cursor: pointer;
    }
  }

  .stb_cls:not(:first-child) {
    margin-left: 5px;
  }

  .stb_text {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      color: #FF7875;
    }
  }
</style>
