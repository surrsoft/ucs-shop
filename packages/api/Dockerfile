FROM node:12.6.0
ENV ENV_START_MODE=docker
# --- variables
ARG PATH_APP=/usr/src/app
# --- create directories
RUN mkdir -p $PATH_APP
# --- copy files
COPY . $PATH_APP
# ---
WORKDIR $PATH_APP
RUN npm install
EXPOSE 22083
# ---
# ---
CMD [ "npm", "run", "start:dev" ]
