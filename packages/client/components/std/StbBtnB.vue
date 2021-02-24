<template>
  <div
    class="btn_main"
    @mouseover="handleOver"
    @mouseout="handleOut"
    @click="handleClick"
    style="position: relative"
  >
    <figure v-if="!isHover || !propData.imgHover">
      <img :src="propData.imgNormal">
    </figure>
    <figure v-else-if="!!propData.imgHover">
      <img :src="propData.imgHover">
    </figure>
    <span v-if="!!propData.text" :style="textStylesCurr">{{propData.text}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      state: String,
      states: Array,
      stateAtPressed: String,
      // если TRUE то при pressed вызывается только колбэк (т.е. внешний вид не меняется)
      isOnlyCallbackAtPressed: false,
      isToggleMode: false
    },
    data() {
      return {
        isHover: false,

        propData: {},
        stateC: '',
        statesC: this.states,

        textStylesCurr: {},
        textStylesDefault: { position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' },
      }
    },
    created() {
      this.stateVisualHandle(this.state)
    },
    methods: {
      stateVisualHandle(newState) {
        if (this.stateC !== newState) {
          const oj = this.statesC.find(el => el.name === newState)
          if (oj) {
            this.stateC = newState;
            this.propData = oj.propData;
            this.textStylesCurr = Object.assign(
              {},
              this.textStylesDefault,
              this.isHover ? this.propData.textStylesHover : this.propData.textStyles
            );
          }
        }
      },
      handleClick: function () {
        if (this.propData.link) {
          if (this.propData.isLinkLocal) {
            location.href = this.propData.link
          } else {
            window.open(this.propData.link)
          }
        } else if (this.propData.callback) {
          this.propData.callback.call(this.propData.callbackCtx, this.propData.callbackOj);
        }
        if (this.stateAtPressed && !this.isOnlyCallbackAtPressed) {
          let ix = this.states.findIndex(o => o.name === this.stateC);
          if (ix === this.states.length - 1) {
            ix = 0;
          } else {
            ix++;
          }
          this.stateVisualHandle(this.states[ix].name);
        }
      },
      handleOver() {
        this.isHover = true;
        if (this.propData.textStylesHover) {
          this.textStylesCurr = Object.assign({}, this.textStylesDefault, this.propData.textStylesHover);
        }
      },
      handleOut() {
        this.isHover = false;
        if (this.propData.textStylesHover) {
          this.textStylesCurr = Object.assign({}, this.textStylesDefault, this.propData.textStyles);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .btn_main {
    display: inline-block;

    :hover {
      cursor: pointer;
    }
  }
</style>
