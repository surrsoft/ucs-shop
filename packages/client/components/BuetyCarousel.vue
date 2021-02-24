<template>
  <b-carousel
    :pause-info="false"
  >
    <BuetyCarouselElem>
      <template v-slot:slotBodyCrouselElem>
        <h1 class="title">Хочешь покупать в Америке? Присоединяйся к нам. Вместе выгоднее</h1>
      </template>
    </BuetyCarouselElem>
    <BuetyCarouselElem>
      <template v-slot:slotBodyCrouselElem>
        <h1 class="title">Еженедельно проводим акции и скидки в нашем шоу-руме</h1>
      </template>
    </BuetyCarouselElem>
    <BuetyCarouselElem>
      <template v-slot:slotBodyCrouselElem>
        <h1 class="title">Свяжитесь с нами в <a :href="projectData.socialLinks.instagram" target="_blank">Instagram</a>
          /
          <a :href="projectData.socialLinks.viber" target="_blank">Viber</a> / <a :href="projectData.socialLinks.telegram"
                                                                               target="_blank">Telegram</a></h1>
      </template>
    </BuetyCarouselElem>
    <BuetyCarouselElem>
      <template v-slot:slotBodyCrouselElem>
        <h1 class="title">Мультибрендовые и монобрендовые магазины</h1>
      </template>
    </BuetyCarouselElem>
  </b-carousel>
</template>

<script>
  import BuetyCarouselElem from './BuetyCarouselElem'
  import projectData from '../utils/project-config';

  export default {
    data() {
        return {
            projectData
        }
    },
    components: {
      BuetyCarouselElem
    }
  }
</script>
