<template>
  <div style="position: relative">
    <NwBreadcrumbs :pages="[
        {title: pc.pages.main.title},
        {title: pc.pages.faq.title}
    ]" style="position: absolute; top: 40px; left: calc(50% - 960px + 375px);"/>
    <div style="height: 120px;"></div>
    <div class="nw_text1"><b>FAQ</b></div>
    <div style="height: 60px;"></div>
    <div style="display: flex; flex-direction: column; align-items: center; position: relative">
      <img
        src="/faq/faq-statuses-r.svg"
        style="position: absolute; top: -23px; left: calc(50% + 960px - 233px)"
      >
      <img
        src="/faq/faq-statuses-l.svg"
        style="position: absolute; top: 299px; left: calc(50% - 960px + 150px)"
      >
      <div>
        <div class="nw_text2" style="align-self: start">Расшифровка статусов</div>
        <div style="display: flex; justify-content: center">
          <div class="nw_text3 nw_col1">
            <div style="height: 30px;"></div>
            <div><b>«Новый (необходимо оплатить)»</b> — заявка отправлена, но заказ ещё
              не оплачен; или пользователь не сообщил об оплате заказа.
            </div>
            <div>&nbsp;</div>
            <div><b>«Новый (оплачен, ждёт заказа)»</b> — заказ оплачен,но ещё не отправлен посреднику.
              Задержки в отправке заказов
              могут возникнуть, если совместный заказ на сумму, необходимую для бесплатной доставки
              по США, ещё не набран. В таком случае можно согласиться на платную доставку (обычно 5-10$).
            </div>
            <div>&nbsp;</div>
            <div><b>«В обработке (отправили на выкуп)»</b> — заказ обработан, заявка отправлена
              посреднику,
              он все купил в
              магазине, и мы ждем подтверждения заказа от него, чтобы поменять ваш заказ
              на следующий статус.
            </div>
            <div>&nbsp;</div>
            <div><b>«Сбор заказа»</b> — заказ обработан и добавлен в единый заказ, но мы собираем
              совместный заказ для бесплатной
              доставки по США. Если
              не хотите ждать сбора минималки, мы можем заказать с платной доставкой по США (7-10$). Напишите нам об
              этом
              в
              чате, под вашим заказом.
            </div>

          </div>
          <div style="width: 30px;"></div>
          <div class="nw_text3 nw_col1">
            <div style="height: 30px;"></div>
            <div>
              <div><b>«Заказан»</b> — все заказан, посредник ожидает получения товара
                для дальнейшей отправки в РФ.
              </div>
              <div>&nbsp;</div>
              <div><b>«Отправлен в Россию»</b> — посредник сформировал и отправил посылку
                с нашим совместным заказом.
              </div>
              <div>&nbsp;</div>
              <div><b>«Приехал в Клуб Шопоголиков»</b> — заказ прибыл в шоурум в Нижнем Новгороде. Можно забирать
                покупку или
                заказывать доставку
                по России в личном кабинете.
              </div>
              <div>&nbsp;</div>
              <div><b>«Есть вопрос»</b> — с заказом возникла какая-либо трудность: необходимо зайти в ЛК и посмотреть
                сообщение
                от администратора в заказе.
              </div>
              <div>&nbsp;</div>
              <div><b>«Отменён»</b> — товар распродан или покупатель отказался от заказа.
              </div>
              <div>&nbsp;</div>
              <div><b>«Завершён»</b> — заказ успешно получен покупателем, ждем ваших отзывов.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 60px"></div>
    <div class="stb_align_h_center" >
      <div style="background: #E6F7FF; width: 1920px;">
        <div style="height: 60px"></div>

        <div class="stb_align_h_center" style="position: relative">
          <img
            src="/faq/faq-que-r.svg"
            style="position: absolute; top: 92px; left: calc(50% + 1880px - 960px)"
          >
          <img
            src="/faq/faq-que-l.svg"
            style="position: absolute; top: 706px; left: calc(50% - 960px + 207px)"
          >

          <div class="nw_card">
            <div class="nw_text4">Как сделать заказ?</div>
            <div style="height: 20px"></div>
            <div class="nw_text5">Ознакомьтесь с инструкцией</div>
            <div style="height: 20px"></div>
            <NwBtnB2 text="СМОТРЕТЬ ИНСТРУКЦИЮ" is-selected @click.native="handleShowInstr"/>
          </div>
          <div style="width: 30px"></div>
          <div class="nw_card">
            <div class="nw_text4">Чем вы отличаетесь от других посредников?</div>
            <div style="height: 20px"></div>
            <div class="nw_text5">Безусловно в мире существует огромное кол-во посредников в США, но заказывая с нами,
              итоговая цена вещи будет гораздо ниже, если вы заказываете эту же вещь самостоятельно с помощью стороннего
              посредника. Только если вы будете делать заказ на 10-15 кг за раз, это может быть равноценно по цене. Наша
              фишка в том, что объединяя заказы клиентов в одну общую коробку, мы экономим на услугах посредника и на
              доставке в Россию.
            </div>
          </div>
        </div>

        <div style="height: 30px"></div>
        <div class="stb_align_h_center">
          <div class="nw_card">
            <div class="nw_text4">Почему я могу вам доверять?</div>
            <div style="height: 20px"></div>
            <div class="nw_text5">Уже более 6 лет мы радуем шопоголиков не только Н.Новгорода, но и всей России! Эмоции
              от
              покупок мы собираем в нашей группе в Вк, а так же в Instagram под тегом #кш_спасибо
            </div>
          </div>
          <div style="width: 30px"></div>
          <div class="nw_card">
            <div class="nw_text4">А вы помогаете с выбором размера?</div>
            <div style="height: 20px"></div>
            <div class="nw_text5">Вы можете проконсультироваться у нас по размеру, ведь мы делимся своим опытом покупок
              и
              опытом наших клиентов, но окончательный выбор всегда остаётся за вами. Так же всегда можно загуглить
              размерные сетки всех брендов.
            </div>
          </div>
        </div>

        <div style="height: 30px"></div>
        <div class="stb_align_h_center">
          <div class="nw_card">
            <div class="nw_text4">Как узнать, что у вас оригинал?</div>
            <div style="height: 20px"></div>
            <div class="nw_text5">Мы заказываем с помощью нашего посредника уже 6 лет, покупки совершаются только в
              официальных магазинах США. При необходимости, готовы выслать подтверждения заказов. В Америке строгое
              законодательство, и торговля подделками карается законом, поэтому на подделку достаточно трудно нарваться!
              Так же, отслеживая треккинг посылки, вы можете видеть, что посылка летит к нам из США!
            </div>
          </div>
          <div style="width: 30px"></div>
          <div class="nw_card">
            <div class="nw_text4">Сколько ждать свой заказ?</div>
            <div style="height: 20px"></div>
            <div class="nw_text5">Ориентировочные сроки 2,5-4,5 недели. У почты есть относительно не загруженное время
              (весна/лето) и более сложное время (осень/зима), когда всемирный почтовый поток увеличивается в несколько
              сотен раз! Если хотите, что бы ваши подарки 100% приехали под Новый Год, заказывайте их в Ноябре! В Летнее
              время наши посылки из Америки добираются до нас очень шустро!
            </div>
          </div>
        </div>

        <div style="height: 30px"></div>
        <div class="stb_align_h_center">
          <div class="nw_card">
            <div class="nw_text4">Почему нельзя оформить заказ
              по WhatsApp?
            </div>
            <div style="height: 20px"></div>
            <div class="nw_text5">Именно для вашего удобства мы создали этот сайт, что бы в личном кабинете отображалась
              вся наглядная информация по доставке. Кроме того, это гарантия того, что мы верно закажем ваш заказ, в
              нужном цвете и размере.
            </div>
          </div>
          <div style="width: 30px"></div>
          <div class="nw_card">
            <div class="nw_text4">Что делать, если не подошло?</div>
            <div style="height: 20px"></div>
            <div class="nw_text5">Если по каким-либо причинам Вам не подошёл ваш заказ, его можно пристроить в альбоме
              группы Вк, или выложить фото в Instagram с хэштегом #кш_вналичии. Так же у нас есть специальный чат в
              WhatsApp по пристрою, напишите нам и мы пришлем ссылку-приглашение.
            </div>
          </div>
        </div>

        <div style="height: 120px"></div>
      </div>
    </div>

    <NwRestQuestions/>


  </div>
</template>

<script>
  import pc from '../../utils/project-config';
  import NwBtnB2 from '../../components/NwBtnB2';
  import StbBtn from '../../components/std/StbBtn';
  import NwRestQuestions from '../../components/NwRestQuestions';
  import NwBreadcrumbs from '../../components/NwBreadcrumbs';

  export default {
    layout: 'lay_main',
    components: {
      NwBreadcrumbs,
      NwRestQuestions,
      NwBtnB2,
      StbBtn
    },
    data() {
      return {
        pc
      }
    },
    methods: {
      handleShowInstr() {
        this.$router.push('/instruction')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
    // outline: 1px solid rgba(0, 0, 0, 0.15);
  }

  .nw_text1 {
    font-size: 38px;
    line-height: 46px;
    color: rgba(0, 0, 0, 0.85);
    text-align: center
  }

  .nw_text2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: rgba(0, 0, 0, 0.85);
  }

  .nw_text3 {
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.65);
  }

  .nw_text4 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: rgba(0, 0, 0, 0.85);
  }

  .nw_text5 {
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.65);
    opacity: 0.6;
  }

  .nw_col1 {
    width: 570px;
  }

  .nw_card {
    width: 570px;
    padding: 30px;
    background: #FFFFFF;
    box-shadow: 0 10px 25px rgba(152, 185, 207, 0.5);
    border-radius: 5px;
  }
</style>
