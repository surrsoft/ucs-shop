
# Описание
* на бэке используем Nest.js и БД MongoDB. Оба упаковываем в Docker-контейнеры (см. docker-compose.yml)
* на фронте используем Nuxt.js (Vue)

# Запуск локальный
* клонируем
  * clone `git clone ...`
  
* скачиваем зависимости
  * cd packages/api && yarn install
  * cd packages/client && yarn install

* запускаем фронт
    * `cd packages/client`
    * `yarn dev`
    * переходим в браузере по адресу `localhost:22082`

* запускаем MongoDB
  * из корня проекта выполняем `docker-compose -f docker-compose-mongo.yml up`
  * БД будет располагаться на эндпоинте `localhost:22081`
  * mongodb без логина/пароля, имя БД - `test`

* запуск бэка в контейнере:
    * из корня проекта выполнить `docker-compose -f docker-compose-back.yml up`; 
    * бэк будет работать на эандпоинте `localhost:22083`; 
    * "GraphQL Playground" будет доступен в браузере по адресу `localhost:22083/graphql`

# История
* 2021-07-01 почему то бэкенд перестал запускаться через npm, а через yarn запускается
![img.png](img.png)
