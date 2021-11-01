FROM node:lts
ENV PORT 3001
RUN mkdir -p /usr/src/app
COPY . /usr/src/app/
EXPOSE 3001
WORKDIR /usr/src/app
CMD ["node", "Server.js"]