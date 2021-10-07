# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary

npx 04-gif-expert-app

## Docker init

crear imagen con el nombre o tag: 04-git-expert-app
del directorio actual "."

    docker build --tag 04-gif-image .

una vez construida la imagen debemos correrla: 

    docker run 04-gif-image

correr la imagen para en segundo plano:

    docker run -d 04-gif-image

correr la imagen en publico 

    docker run -dp 3000:3000 04-gif-image

## Docker Compose

Permite evitar correr comandos docker con todas sus configuraciones

    docker-compose up -d