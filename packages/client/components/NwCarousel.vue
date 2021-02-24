<template>
  <div class="stb_align_h_center">
    <div
      class="stb_align_h_center"
      style="position: relative; width: 1920px; overflow: hidden"
    >
      <div class="nw_img_tel"></div>

      <div
        ref="movedBlock"
        :style="`
          display: flex;
          flex-wrap: nowrap;
          position: absolute;
          top: 32px;
          left: calc(50% - 134px - ${imgStartIndex * step}px);
        `"
      >
        <div
          v-for="(imgPath, ix) in images"
          :key="ix"
          :style="{
            'margin-left': ix === 0 ? '0px' : (step - imgWidth) + 'px',
            display: 'inline-block',
            width: imgWidth+'px',
            height: '502px',
          }"
        >
          <img
            :class="'img'+ix"
            :src="imgPath"
            :style="`
              width: ${ix === imgIndexCurr && isInit ? imgWidth : imgWidth * koef}px;
              border-radius: 22px;
              filter: blur(${ix === imgIndexCurr && isInit ? '0' : blurValue}px);
            `"
          >
        </div>
      </div>

      <!-- right button   -->
      <StbBtnB
        style="position: absolute; top: 256px; left: calc(50% + 170px); z-index: 2"
        v-bind="mtBtnRProps()"
        @click.native="handleClickR"
      />

      <!-- left button   -->
      <StbBtnB
        style="position: absolute; top: 256px; left: calc(50% - 290px); z-index: 2"
        v-bind="mtBtnLProps()"
        @click.native="handleClickL"
      />

    </div>
  </div>
</template>

<script>
  import gsap from 'gsap';
  import StbBtnB from './std/StbBtnB';
  import { TimelineLite } from 'gsap'

  const timeline = new TimelineLite();

  export default {
    components: { StbBtnB },
    data() {
      return {
        images: [
          '/main-page/reviews/s03.png',
          '/main-page/reviews/s04.png',
          '/main-page/reviews/s01.png',
          '/main-page/reviews/s02.png',
          '/main-page/reviews/s09.png',
          '/main-page/reviews/s12.png',
          '/main-page/reviews/s17.png',
          '/main-page/reviews/s05.png',
          '/main-page/reviews/s06.png',
          '/main-page/reviews/s07.png',
          '/main-page/reviews/s08.png',
          '/main-page/reviews/s10.png',
          '/main-page/reviews/s11.png',
          '/main-page/reviews/s13.png',
          '/main-page/reviews/s14.png',
          '/main-page/reviews/s15.png',
          '/main-page/reviews/s16.png',
          '/main-page/reviews/s18.png',
        ],
        imgWidth: 230,
        step: 530,
        imgStartIndex: 3,
        imgIndexCurr: 0,
        lcNewPos: 0,
        isInit: true,
        blurValue: 5,
        animDurationSec: 1,
        koef: 0.8,
        isAnimRunning: false
      }
    },
    created() {
      this.imgIndexCurr = this.imgStartIndex;
    },
    mounted() {
      // костыль, чтобы не "прыгала" картинка при первой анимации
      this.handleClickRL(true);
      this.handleClickRL(false);
    },
    methods: {
      handleClickRL(left) {
        this.isInit = false;
        const b = left ? this.imgIndexCurr > 0 : this.imgIndexCurr < this.images.length - 1
        if (b && !this.isAnimRunning) {
          const sideNum = left ? -1 : 1;
          this.imgIndexCurr = this.imgIndexCurr + sideNum;
          const { movedBlock } = this.$refs
          this.lcNewPos = this.lcNewPos - (this.step * sideNum);
          // --- move
          gsap.to(movedBlock, { x: this.lcNewPos, duration: this.animDurationSec })
          // ---
          gsap.to('.img' + (this.imgIndexCurr - sideNum), {
            filter: `blur(5px)`,
            width: this.imgWidth * this.koef,
            duration: this.animDurationSec
          });
          gsap.to('.img' + this.imgIndexCurr, {
            filter: 'blur(0px)',
            width: this.imgWidth,
            duration: this.animDurationSec,
            onStart: () => this.isAnimRunning = true,
            onComplete: () => this.isAnimRunning = false
          });

        }
      },
      handleClickR() {
        this.handleClickRL(false)
      },
      handleClickL() {
        this.handleClickRL(true)
      },
      mtBtnRProps() {
        return {
          state: 'normal',
          states: [
            {
              name: 'normal',
              propData: {
                imgNormal: "/a1/btn-carousel-r.svg",
                imgHover: "/a1/btn-carousel-r-hover.svg",
              }
            }
          ]
        }
      },
      mtBtnLProps() {
        return {
          state: 'normal',
          states: [
            {
              name: 'normal',
              propData: {
                imgNormal: "/a1/btn-carousel-l.svg",
                imgHover: "/a1/btn-carousel-l-hover.svg",
              }
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  * {
    // outline: 1px solid rgba(0, 0, 0, 0.15);
  }

  .nw_img_tel {
    width: 527px;
    height: 669px;
    background-image: url('/a2/reviews_img_e.svg');
    z-index: 1;
  }
</style>
