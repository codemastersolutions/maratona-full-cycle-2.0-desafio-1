FROM node:14.1-alpine
MAINTAINER "Gilson Gabriel <gilson@codemastersolucoes.com>"

WORKDIR /app

COPY . .

CMD ["node", "index.js"]

EXPOSE 3000
