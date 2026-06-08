# Event Platform Microservices

## Overview

Event Platform is a distributed event management system developed using a Microservices Architecture with Spring Boot and React.

The project aims to provide a scalable and maintainable platform for managing users, events, and registrations while demonstrating the use of modern software engineering practices such as service discovery, API gateway routing, automated testing, and continuous integration.

---

## Architecture

The application is composed of the following microservices:

* Discovery Server (Eureka)
* API Gateway
* User Service
* Event Service
* Registration Service

### Architecture Diagram

Client → API Gateway → Microservices

* User Service
* Event Service
* Registration Service

Service discovery is handled through Eureka Discovery Server.

---

## Technologies Used

### Backend

* Java 17
* Spring Boot
* Spring Cloud
* Spring Security
* JWT Authentication
* Eureka Discovery Server
* OpenFeign
* Maven

### Frontend

* React
* Vite
* Material UI
* Axios

### Testing

* JUnit 5
* Mockito

### DevOps

* GitHub
* GitHub Actions

---

## Project Structure

event-platform-microservices/

├── discovery-server

├── api-gateway

├── user-service

├── event-service

├── registration-service

├── frontend

└── .github/workflows

---

## Main Features

### Authentication & Security

* JWT-based authentication
* Role-based access management
* Secure API access

### User Management

* Create users
* Update users
* Delete users
* View user information

### Event Management

* Create events
* Update events
* Delete events
* Browse available events

### Registration Management

* Register participants to events
* Manage registrations
* View registration history

---

## Continuous Integration

The project uses GitHub Actions to automatically:

* Build all services
* Execute tests
* Verify application integrity
* Validate frontend build

---

## Build and Run

### Backend Services

For each microservice:

```bash
mvn clean package
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Testing

Unit tests were implemented using:

* JUnit 5
* Mockito

Run tests with:

```bash
mvn test
```

---

## User Interface Design

The user interface was initially designed using Figma and later implemented using React and Material UI.

---

## Authors

* Razan EL BARKI
* Hafsa Faiz

---

## Academic Context

Faculty of Sciences Semlalia (FSSM)

Cadi Ayyad University

Academic Year 2025 – 2026
