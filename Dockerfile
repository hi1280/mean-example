FROM hi1280/angular-cli:latest
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent
COPY . .
EXPOSE 3000
ENV NODE_ENV production
CMD npm start