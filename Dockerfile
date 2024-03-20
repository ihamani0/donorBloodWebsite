FROM nginx:alpine


# Copy HTML, CSS, and JS files to the appropriate directory
COPY index.html /usr/share/nginx/html
COPY css /usr/share/nginx/html/css
COPY js  /usr/share/nginx/html/js
COPY icons  /usr/share/nginx/html/icons
COPY image  /usr/share/nginx/html/image
COPY page  /usr/share/nginx/html/page
COPY webfonts  /usr/share/nginx/html/webfonts

# Expose port 80
EXPOSE 80