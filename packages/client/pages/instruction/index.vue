<template>
  <div class="stb_align_column_center" style="position: relative">
    <NwBreadcrumbs :pages="[
        {title: pc.pages.main.title},
        {title: pc.pages.faq.title, path: pc.pages.faq.path},
        {title: pc.pages.instruction.title},
    ]" style="position: absolute; top: 40px; left: calc(50% - 960px + 375px);"/>
    <img
      src="/instruction/instr-r-blue.svg"
      style="position: absolute; top: calc(36px + 151px); left: calc(50% + 960px - 234px - 32px);"
    >
    <img
      src="/instruction/instr-r-orange.svg"
      style="position: absolute; top: calc(528px + 151px); left: calc(50% + 1880px - 960px);"
    >
    <div style="height: 120px"></div>
    <div class="nw_text1"><b>Инструкция</b></div>
    <div style="height: 60px"></div>
    <div class="nw_text2"><b>Как сделать заказ?</b></div>
    <div style="height: 50px"></div>
    <div class="stb_align_h_center">
      <!--      left column-->
      <div class="nw_instr_col1 nw_col_w">
        <div class="nw_elm1">
          <div class="nw_text4 nw_w70">01</div>
          <div class="nw_text3 nw_w500 nw_pl25">Для того, что бы самостоятельно выбирать вещи
            и следить за актуальными скидками, пройдите по ссылке выше
          </div>
        </div>
        <div style="height: 30px"></div>
        <div class="nw_elm1">
          <div class="nw_text4 nw_w70">02</div>
          <div class="nw_text3 nw_w500 nw_pl25">Для того, что бы оформить заказ нужно: отправить мне ссылку/скрин на
            выбранный
            товар,
            указать нужный цвет
            и размер. Отправить можно в телеграм, вайбер, ватсап или директ
          </div>
        </div>
        <div style="height: 30px"></div>
        <div class="nw_elm1">
          <div class="nw_text4 nw_w70">03</div>
          <div class="nw_text3 nw_w500 nw_pl25">Далее я еще раз проверю доступность товара
            и производим расчёт стоимости
            с учетом доставки. Стоимость доставки рассчитывается индивидуально. 1кг- 900 рублей
          </div>
        </div>
      </div>

      <div style="width: 30px"></div>
      <!--      right column -->
      <div class="nw_col_w" style="display: flex; ">
        <div class="nw_text4 nw_w70">04</div>
        <div style="width: 25px"></div>
        <div>
          <div class="nw_text3">
            Процесс доставки состоит из нескольких этапов:
          </div>
          <div class="nw_w457 nw_pl18 nw_posrel">
            <img src="/a1/fig-elipse.svg" class="nw_img_point">
            Сначала мы ждём пока выбранный вами товар придёт
            ко мне, на американский адрес, а это 5-7 дней,
            в действительности все посылки приходят на 3 день
            (но могут и задержаться, что бывает редко, в основном в праздничные дни)
          </div>
          <div class="nw_w457 nw_pl18 nw_posrel">
            <img src="/a1/fig-elipse.svg" class="nw_img_point">
            Затем я отправляю общие посылки в Москву или Нижний Новгород!
            Посылка проходит таможню сначала в Германии, а потом в России
          </div>
          <div class="nw_w457 nw_pl18 nw_posrel">
            <img src="/a1/fig-elipse.svg" class="nw_img_point">
            Если вы находитесь в других городах, то отправляем почтой России или сдеком (это
            оплачивается вами
            отдельно, в пределах 100-300₽)
          </div>
          <div class="nw_w457 nw_pl18 nw_posrel">
            <img src="/a1/fig-elipse.svg" class="nw_img_point">
            В нижнем Новгороде, все посылки можно забрать
            в шоуруме, в центре города, ежедневно!
          </div>
        </div>
      </div>
    </div>
    <div style="height: 120px"></div>
  </div>
</template>

<script>
  import pc from '../../utils/project-config';

  export default {
    layout: 'lay_main',
    data() {
      return { pc }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/main";

  * {
    // outline: 1px solid rgba(0, 0, 0, 0.15);
    font-family: 'Montserrat Alternates', monospace;
  }

  .nw_instr_col1 {
    display: flex;
    flex-direction: column;
  }

  .nw_col_w {
    width: 570px;
  }

  .nw_elm1 {
    display: flex;
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
    text-align: center;
    color: #2D2D2D;
  }

  .nw_text3 {
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.85);
  }

  .nw_text4 {
    font-size: 50px;
    line-height: 61px;
    text-align: right;
    color: #FF7875;
  }

  .nw_w70 {
    width: 70px;
  }

  .nw_w500 {
    width: 500px;
  }

  .nw_pl25 {
    padding-left: 25px;
  }

  .nw_w457 {
    width: 457px;
  }

  .nw_pl18 {
    padding-left: 18px;
  }

  .nw_posrel {
    position: relative;
  }

  .nw_img_point {
    position: absolute;
    top: 7px;
    left: 0;
  }
</style>
