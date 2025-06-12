# Etapa 1: build de la app
FROM node:20.18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servir con NGINX
FROM nginx:alpine

# Elimina el contenido HTML por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia el build desde la etapa anterior
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf


# Expone el puerto deseado (puedes cambiarlo si gustas)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
