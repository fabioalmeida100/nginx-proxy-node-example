# Docker application example with docker-compose using dockerize for wait for the database

This is a simple example of a dockerized application using docker-compose. The application is a simple web server that connects to a database. The database is a MySQL database. The web server is a express.js server.

## Concepts

Below are some concepts that are used in this example:

- **Docker**: Docker is a platform for developing, shipping, and running applications in containers.
- **Docker-compose**: Docker Compose is a tool for defining and running multi-container Docker applications.
- **Dockerize**: Dockerize is a tool to simplify running applications in docker containers. It allows to wait for a service to be ready before starting another service.
- **MySQL**: MySQL is an open-source relational database management system.
- **Express.js**: Express.js is a web application framework for Node.js.
- **Nginx**: Nginx is a web server that in this case was used as a reverse proxy.

## How to run

To run this example, you need to have Docker and Docker Compose installed on your machine.

1. Clone this repository:
2. Clone the file `env.sample` inside _server_ folder to `.env` and set the environment variables if you want to change the default values.
3. Run the following command to start the application:

```bash
docker-compose up -d
```

4. Access the web server at `http://localhost:8080`.
