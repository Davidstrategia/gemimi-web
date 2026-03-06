FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website files
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Copy assets
COPY logo-icon.png /usr/share/nginx/html/
COPY logo-full.png /usr/share/nginx/html/
COPY logo.svg /usr/share/nginx/html/
COPY gemimi_app_mockup.png /usr/share/nginx/html/
COPY martini-divider.png /usr/share/nginx/html/
COPY ["portada hero.jpeg", "/usr/share/nginx/html/"]
COPY Logo_turns_on_effect_delpmaspu_.mp4 /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
