<template>
  <div style="display: flex">
    <NwBtnB v-for="(text, i) in texts" :key="i"
            :text="text"
            :is-selected="selectIndexB === i"
            :style="(i>0 && !!gap) ? `margin-left: ${gap}px` : ''"
            @click.native="handleClick(i)"
    />
  </div>
</template>

<script>
  import NwBtnB from '../components/NwBtnB';

  export default {
    components: { NwBtnB },
    props: {
      texts: Array,
      selectIndex: Number,
      gap: Number,
    },
    data() {
      return {
        selectIndexC: this.$props.selectIndex
      }
    },
    computed: {
      selectIndexB: {
        get: function () {
          return this.selectIndexC;
        },
        set: function (val) {
          this.selectIndexC = val
        }
      }
    },
    methods: {
      handleClick(val) {
        if (val !== this.selectIndexC) {
          this.selectIndexB = val;
          this.$emit('change', val);
        }
      }
    }
  }
</script>
