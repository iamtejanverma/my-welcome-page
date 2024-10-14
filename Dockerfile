# Use the official Nginx image as a base
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static files into the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80
