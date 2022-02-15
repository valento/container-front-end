FROM nginx

COPY ./nginx_enhanced.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html
