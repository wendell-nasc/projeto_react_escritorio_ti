FROM nginx:stable-alpine

# Copia build do frontend
COPY ./dist /usr/share/nginx/html

# Copia config customizada (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
