<template>
  <div id="howWorks" class="container" style="margin-top: 5rem">
    <div class="level">
      <p class="level-item title is-2">Как это работает</p>
    </div>
    <div class="columns is-vcentered">
      <Block47
        text1="1"
        text2="👕 Выбираешь покупку в одном из магазинов США или в нашем Instagram"
      />
      <Block47
        text1="2"
        text2="💲 Оставляешь заявку и оплачиваешь заказ"
      />
      <Block47
        text1="3"
        text2="👨‍👦‍👦 Присоединяем тебя к совместному заказу, ведь так выгоднее"
      />
    </div>
    <div class="columns is-vcentered">
      <BulmaTableGap/>
      <Block47
        text1="4"
        text2="⌛ Ждешь заказ приблизительно 2,5-4,5 недели"
      />
      <Block47
        text1="5"
        text2="📦 Забираешь у нас в шоу руме или заказываешь доставку по нужному адресу"
      />
      <BulmaTableGap/>
    </div>
  </div>
</template>

<script>
  import Block47 from './Block47';
  import BulmaTableGap from './BulmaTableGap';

  export default {
    components: {Block47, BulmaTableGap}
  }
</script>
