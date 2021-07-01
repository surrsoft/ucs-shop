FROM node:12.22.0
# --- variables
ENV ENV_START_MODE=docker
ARG PATH_APP=/usr/src/app
# --- create directories
RUN mkdir -p $PATH_APP
# --- copy files
COPY . $PATH_APP
# ---
WORKDIR $PATH_APP
RUN yarn install
EXPOSE 22083
# ---
# ---
CMD [ "yarn", "run", "start:dev" ]
