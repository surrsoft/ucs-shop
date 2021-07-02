
# скачать зависимости
dep_inst:
	cd $(join $(shell pwd), /packages/api) && yarn install
	cd $(join $(shell pwd), /packages/client) && yarn install

# --- фронт
# запустить фронт, порт 22082
front_start:
	cd $(join $(shell pwd), /packages/client) && yarn dev

# --- mongodb, порт 22083:27017
mongo_start:
	docker-compose -f docker-compose-mongo.yml up

mongo_del:
	sudo -S chmod 777 -R mongodb && rm -r mongodb

# --- бэк, порт 22083
# запустить в docker-контейнере
back_start:
	docker-compose -f docker-compose-back.yml up --build

# запустить бэк локально, без контейнера
back_start_local:
	cd $(join $(shell pwd), /packages/api) && yarn run start:dev

back_down:
	docker-compose -f docker-compose-back.yml down


