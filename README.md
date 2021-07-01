
# Описание
* на бэке используем Nest.js и БД MongoDB. Оба упаковываем в Docker-контейнеры (см. docker-compose.yml)
* на фронте используем Nuxt.js (Vue)

# local start
* clone `git clone ...`
* cd packages/api && npm i
* cd packages/client && yarn install

* start frontend:
    * `cd packages/client`
    * `yarn dev`
    * navigate in browser to `localhost:22082`

* start backend:
    * at root run `docker-compose up`; 
    * backend will started at `localhost:22083`; 
    * "GraphQL Playground" will accessed in browser  at `localhost:22083/graphql`
    * mongodb без логина/пароля

# История
* 2021-07-01 почему то бэкенд перестал запускаться через npm, а через yarn запускается
![img.png](img.png)
