# Notas Cloud - Frontend

Frontend de una aplicación de notas conectada a un backend serverless en AWS.

## Tecnologías

- HTML
- CSS
- JavaScript

## Proyecto

Interfaz web que permite interactuar con una API creada con AWS API Gateway y AWS Lambda.

## Estructura

- index.html
- style.css
- script.js

## Arquitectura

Frontend (S3) → API Gateway (HTTP API) → Lambda → DynamoDB

El frontend está hosteado como sitio estático en S3, y se comunica con una API creada con AWS API Gateway y AWS Lambda para el CRUD de notas.

## Funcionalidad

- Crear notas (título + contenido)
- Listar notas guardadas
- Actualización automática de la lista al guardar, sin recargar la página

## Backend

El backend de este proyecto está en [notas-cloud-backend](https://github.com/flopy-cloud/notas-cloud-backend)