FROM node:8.9-alpine
# FROM hypriot/rpi-node:latestnpm 
# docker pull hypriot/rpi-node
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN npm install --production && mv node_modules ../
# RUN npm install --production -g feathers-cli yarn && mv node_modules ../
RUN npm i npm@latest -g
# RUN npm update
COPY . .
EXPOSE 80
# EXPOSE  22
ENV PORT=80
# ENTRYPOINT ["echo", "${PORT}"]  
CMD npm start