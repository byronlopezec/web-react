
const express = require('express');
const { dbConexion } = require('./database/config');
require('dotenv').config();

// Create a new express application instance
const app = express();


// base de datos
dbConexion();

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth',require('./routes/auth'));

// TODO: CRUD: eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor ejecutandose en el puerto ${process.env.PORT}`);
});