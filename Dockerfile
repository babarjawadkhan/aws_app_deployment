# Use an official Nginx base image
FROM nginx:latest

# Copy your code and any other static files to the container
COPY . /usr/share/nginx/html

# Expose port 8080 to listen for incoming HTTP requests
EXPOSE 8080

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

