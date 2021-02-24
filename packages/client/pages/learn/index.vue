<template>
  <div>
    <div class="stb_align_h_center nw_img">
      <div class="nw_1 nw_img" style="position: relative">
        <NwBtn
          v-bind="{text: 'ПРИОБРЕСТИ ГАЙД'}"
          style="width: 249px; position: absolute; top: 531px; left: calc(50% - 585px);"
          @click.native="handleOpenBuyForm"
        />
      </div>
    </div>
    <div class="stb_align_h_center nw_img">
      <div class="nw_for nw_img" style="position: relative">
        <img src="/learn/man_book/arc_orange.svg" style="position: absolute; left: calc(50% + 661px); top: -12px;">
      </div>
    </div>
    <div style="height: 140px"></div>
    <div class="nw_img" style="display: flex; justify-content: center; position: relative">
      <div class="nw_cont_guide nw_img" style="position: relative;">
        <NwBtn
          v-bind="{text: 'ПРИОБРЕСТИ ГАЙД'}"
          style="width: 249px; position: absolute; top: calc(605px + 68px); left: calc(50% - 960px + 846px);"
          @click.native="handleOpenBuyForm"
        />
        <img src="/learn/man_book/arc_blue.svg" style="position: absolute; left: calc(50% - 633px); top: -33px;">
      </div>
    </div>
    <div class="stb_align_h_center nw_img">
      <div class="nw_4 nw_img"></div>
    </div>
    <div class="stb_align_h_center nw_img">
      <div class="nw_5 nw_img"></div>
    </div>
    <div class="stb_align_h_center nw_img">
      <div class="nw_how nw_img" style="position: relative">
        <NwBtn
          v-bind="{text: 'ПРИОБРЕСТИ ГАЙД'}"
          style="width: 249px; position: absolute; top: 576px; left: calc(50% - 585px);"
          @click.native="handleOpenBuyForm"
        />
      </div>
    </div>
    <div style="height: 120px"></div>


    <div style="position: relative">
      <div class="nw_text1" style="text-align: center;">
        <img
          src="/learn/que-arc-l.svg"
          style="position: absolute; top: -61px; left: calc(50% - 960px + 55px);"
        >
        <img
          src="/learn/que-arc-r.svg"
          style="position: absolute; top: 406px; left: calc(50% + 452px + 303px);"
        >
        <b>Часто задаваемые вопросы</b>
      </div>
    </div>
    <div style="height: 60px"></div>
    <div class="stb_align_h_center">
      <div>
        <div class="stb_align_h_center" style="align-items: baseline">
          <NwExpand
            text-title="Что мне потребуется для обучения?"
            text-content="Для изучения всего материала тебе будет достаточно телефона."
          />
          <div style="width: 30px"></div>
          <NwExpand
            text-title="Что включает гайд?"
            text-content='Гайд состоит из pdf файла. В нем находится структурированоя информация по приобретению професии "байер" с активными ссылками на внешние источники, которые я использую в работе.'
          />
        </div>
        <div style="height: 30px"></div>
        <div class="stb_align_h_center" style="align-items: baseline">
          <NwExpand
            text-title="Если я живу в маленьком городе, у меня получится?"
            text-content="Данная профессия не подразумевает привязки к определенному месту жительства. Ты можешь работать из любой точки мира, главное чтобы был интернет."
          />
          <div style="width: 30px"></div>
          <NwExpand
            text-title="Сколько времени потребуется для изучения?"
            text-content="Всё зависит от твоего рвения и стремления получить профессию и зарабатывать. В среднем на обучение может уйти от 7 до 14 дней."
          />
        </div>
        <div style="height: 30px"></div>
        <div class="stb_align_h_center" style="align-items: baseline">
          <NwExpand
            text-title="Я ничего не умею разберусь ли?"
            text-content="В гайде будет вся информация по заработку удалёно. Описанны все фишки и нюансы, через которые я прошла свой пусть. Тебе лишь останется внедрить все знания и начать зарабатывать."
          />
          <div style="width: 30px"></div>
          <NwExpand
            text-title="В каком формате будет обучение?"
            text-content="Ты получаешь файл со знаниями и в любое время самостоятельно будешь изучать профессию. Так же у тебя будет доступ к чату с другими уже действующими байерам, где ты сможешь спросить совета, делать совместные покупки и просто общаться с единомышлениками."
          />
        </div>
      </div>
    </div>
    <div style="height: 120px"></div>

    <NwRestQuestions/>

    <!-- Modal form  -->
    <div
      :class="{modal: true, 'is-active': isModalActive}"
      :key="keyForm"
    >
      <div class="modal-background"></div>
      <div class="modal-content ">
        <div style="position: relative; background-color: white; width: 570px; height: 625px;">
          <div class="nw_text2" style="position: absolute; left: 166px; top: 50px">Приобрести гайд</div>
          <div class="nw_text3" style="position: absolute; top: 109px; left: 50px; width: 330px;">
            Гайд «Как стать байером и начать зарабатывать от 25.000₽ до 100.000₽»
          </div>
          <div class="nw_text4" style="position: absolute; top: 131px; left: 469px;">3.500₽</div>

          <validation-observer v-slot="{handleSubmit, reset}" ref="refValidationObserver">
            <form @reset.prevent="reset">

              <div class="nw_text5" style="position: absolute; top: 186px; left: 50px;">Имя *</div>
              <validation-provider rules="required" v-slot="{ errors }">
                <label style="position: absolute; top: 202px; left: 50px;">
                  <input
                    v-model="frmName"
                    type="text"
                    :class="{ input2: true, 'is-danger': mtIsDanger(errors) }"
                    placeholder="Введите имя"
                  />
                </label>
              </validation-provider>

              <div class="nw_text5" style="position: absolute; top: 282px; left: 50px;">E-mail *</div>
              <validation-provider rules="required|email" v-slot="{ errors }">
                <label style="position: absolute; top: 301px; left: 50px;">
                  <input
                    v-model="frmEmail"
                    :class="{ input2: true, 'is-danger': mtIsDanger(errors) }"
                    type="email"
                    placeholder="Введите email"
                  />
                </label>
              </validation-provider>
              <div class="nw_text5" style="position: absolute; top: 381px; left: 50px;">Промокод</div>
              <label style="position: absolute; top: 400px; left: 50px;">
                <input
                  v-model="frmPromoCode"
                  type="text"
                  class="input2"
                  placeholder="Введите промокод"
                />
              </label>

              <NwBtn
                v-if="frmConditionChecked"
                v-bind="{text: 'КУПИТЬ'}"
                class="nw_btn_buy"
                @click.native="handleSubmit(handleBuy)"
              />
              <NwBtnDisable v-else v-bind="{text: 'КУПИТЬ'}" class="nw_btn_buy"/>

            </form>
          </validation-observer>

          <!-- checkbox-->
          <div style="position: absolute; left: 50px; top: 554px;">
            <StbBtnB v-bind="mtBtnProps()"/>
          </div>
          <div class="nw_text6" style="position: absolute; top: 553px; left: 80px;">
            <div>Нажимая на кнопку, я даю согласие на обработку персональных данных
            и принимаю</div>
            <div class="nw_cond_link" @click="handleCondClick">условия обработки персональных данных</div>
          </div>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="isModalActive = false"
      ></button>
    </div>
  </div>
</template>

<script>
  import pc from '../../utils/project-config'
  import NwBtn from '../../components/NwBtn'
  import NwExpand from '../../components/NwExpand'
  import NwRestQuestions from '../../components/NwRestQuestions'
  import StbBtnB from '../../components/std/StbBtnB';
  import NwBtnDisable from '../../components/NwBtnDisable';

  export default {
    layout: 'lay_main',
    components: {
      NwBtnDisable,
      StbBtnB,
      NwRestQuestions,
      NwBtn,
      NwExpand,
    },
    data() {
      return {
        pc,
        isModalActive: false,
        frmEmail: '',
        frmName: '',
        frmPromoCode: '',
        frmConditionChecked: true,
        keyForm: Date.now()
      }
    },
    watch: {
      isModalActive: function() {
        if(this.isModalActive){
          document.documentElement.style.overflow = 'hidden'
          return
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
    methods: {
      mtBtnProps() {
        return {
          state: 'pressed',
          stateAtPressed: 'pressed',
          isToggleMode: true,
          states: [
            {
              name: 'normal',
              propData: {
                imgNormal: "/a1/checkbox-normal.svg",
                imgHover: "/a1/checkbox-hover.svg",
                callback: () => {
                  this.frmConditionChecked = true;
                }
              }
            },
            {
              name: 'pressed',
              propData: {
                imgNormal: "/a1/checkbox-checked.svg",
                imgHover: "/a1/checkbox-checked.svg",
                callback: () => {
                  this.frmConditionChecked = false;
                }
              }
            }
          ]
        }
      },
      mtIsDanger(errors) {
        return errors && errors[0];
      },
      handleOpenBuyForm() {
        this.isModalActive = true;
        this.keyForm = Date.now();
        // --- reset values
        this.mtFormValuesReset();
      },
      handleBuy(val) {
        this.$refs.refValidationObserver.validate().then(success => {
          if (!success) {
            return;
          }
          // Resetting Values
          this.mtFormValuesReset();
          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.refValidationObserver.reset();
            this.isModalActive = false;
          });
        });
      },
      mtFormValuesReset() {
        this.frmConditionChecked = true;
        this.frmEmail = '';
        this.frmName = '';
        this.frmPromoCode = '';
      },
      handleCondClick() {
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/main";

  .input2 {
    @extend .input;
    border-radius: 5px;
    width: 470px;
    height: 60px;
    padding-left: 30px;
    padding-right: 30px;
  }

  * {
    // outline: 1px solid rgba(0, 0, 0, 0.1);
    font-family: 'Montserrat Alternates', monospace;
  }

  .nw_img {
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
    background-repeat: no-repeat;
  }

  .nw_1 {
    width: 1920px;
    height: 829px;
    background-image: url('/learn/title-4.svg');
  }

  .nw_for {
    width: 1195px;
    height: 516px;
    background-image: url('/learn/man_book/Group_139.svg');
  }

  .nw_cont_guide {
    width: 1920px;
    height: 892px;
    background-image: url('/learn/cont_guide_2.svg');
  }

  .nw_4 {
    width: 1920px;
    height: 892px;
    background-image: url('/learn/author.svg');
  }

  .nw_5 {
    width: 1920px;
    height: 529px;
    background-image: url('/learn/opportunities.svg');
  }

  .nw_how {
    width: 1920px;
    height: 1044px;
    background-image: url('/learn/how.svg');
  }

  .nw_btn_buy {
    position: absolute;
    top: 490px;
    left: 183px;
  }

  .nw_text1 {
    font-size: 38px;
    line-height: 46px;
    text-align: center;
    color: #2D2D2D;
  }

  .nw_text2 {
    font-size: 24px;
    line-height: 29px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.85);
    text-align: left;
  }

  .nw_text3 {
    @extend .nw_text2;
    font-size: 14px;
    line-height: 22px;
  }

  .nw_text4 {
    @extend .nw_text3;
    color: #FF4D4F;
  }

  .nw_text5 {
    font-size: 12px;
    line-height: 15px;
    color: rgba(0, 0, 0, 0.85);
    text-align: left;
  }

  .nw_text6 {
    font-size: 9px;
    line-height: 11px;
    color: #2D2D2D;;
    text-align: left;
  }

  .nw_cond_link {
    color: #40A9FF;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

</style>
