FROM node:14.8-alpine

RUN apk add --no-cache bash curl git shadow

ENV GOSU_VERSION 1.10
RUN curl -sS -Lo /usr/bin/gosu https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-amd64
RUN chmod +x /usr/bin/gosu

ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN git clone https://gist.github.com/c9e335f85acb9bc27f0504563419a80a.git /usr/bin/entrypoint
RUN chmod +x /usr/bin/entrypoint/entrypoint.sh

RUN npm install -g expo-cli

VOLUME /app
WORKDIR /app

ENTRYPOINT [ "/usr/bin/entrypoint/entrypoint.sh" ]
CMD [ node ]
