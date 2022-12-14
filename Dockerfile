# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18.10 as build-stage
WORKDIR /app
COPY package*.json /app/

RUN yarn

COPY ./ /app/


RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx

FROM nginx:1.23

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]