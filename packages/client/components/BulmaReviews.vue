<template>
  <div>
    <div class="title is-2 has-text-centered is-family-sans-serif">Отзывы наших клиентов</div>
    <b-carousel-list v-model="test" :data="items" :items-to-show="2">
      <template slot="item" slot-scope="list">
        <div class="card" style="height: 100%">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="`/user-avatars/${list.image}`" alt="👨‍👨‍👧👨‍👧👨‍👧">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{list.title}}</p>
                <p class="subtitle is-6">{{list.nick}}</p>
              </div>
            </div>

            <div class="content is-italic is-size-5">
              {{list.review}}
            </div>
            <time class="is-size-7">{{list.datetime}}</time>
          </div>
        </div>
      </template>
    </b-carousel-list>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        st24: '@/assets/user-avatar-01.png',
        test: 0,
        items: [
          {
            title: 'Иван',
            image: 'user-avatar-01.png',
            review: 'Прекрасный сервис. Заказывал iPad. Получилось выгодно. Всем доволен',
            nick: '@ivan89',
            datetime: '11:09 AM - 28 Aug 2020'
          },
          {
            title: 'Алла',
            image: 'user-avatar-03.png',
            review: 'Всё супер. Есть где развернутся шопоголику 😊',
            nick: '@aacaty',
            datetime: '09:10 PM - 26 Aug 2020'
          },
          {
            title: 'Сергей',
            image: 'user-avatar-02.png',
            review: 'Пользуюсь не первый раз. Ни разу не подводили. Рекомендую',
            nick: '@seriyCool',
            datetime: '06:26 PM - 23 Aug 2020'
          },
          {
            title: 'Кристина',
            image: 'user-avatar-04.png',
            review: 'Рекомендую всем. Одеваемся всей семьёй. Всегда на пике моды)',
            nick: '@kristynka',
            datetime: '07:16 PM - 22 Aug 2020'
          }
        ]
      }
    },
    methods: {
      info(value) {
        this.test = value
      }
    }
  }
</script>
