# Use the official Nginx image as a base
FROM nginx:alpine

# Copy the static files into the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80
