
# скачать зависимости
dep_inst:
	cd $(join $(shell pwd), /packages/api) && npm i
	cd $(join $(shell pwd), /packages/client) && yarn install

# запустить фронт, порт 3000
front_start:
	cd $(join $(shell pwd), /packages/client) && yarn dev

# запустить бэк
back_start:
	docker-compose up

back_start2:
	cd $(join $(shell pwd), /packages/api) && npm run start:dev
