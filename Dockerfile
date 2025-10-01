# Stage 1: build
FROM node:20-alpine as build
WORKDIR /app

# Dependências para build de módulos nativos
RUN apk add --no-cache python3 g++ make bash

COPY package*.json ./

#RUN rm -rf dist node_modules package-lock.json && npm install
# Use legacy-peer-deps para ignorar conflitos de peer dependencies
RUN rm -rf dist node_modules package-lock.json && npm install --legacy-peer-deps

COPY . .
COPY .env ./
RUN npm run build
RUN rm -rf node_modules 

# Stage 2: Nginx para servir arquivos estáticos
FROM nginx:alpine
# Remove arquivos antigos do Nginx
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
# Copia config customizada (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
