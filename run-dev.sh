docker build -f Dockerfile.dev -t website .
docker run -p 8080:8080 website
