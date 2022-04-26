
const express = require('express');
require('dotenv').config();

// Create a new express application instance
const app = express();


// Directorio publico
app.use(express.static('public'));

// Rutas
app.use('/api/auth',require('./routes/auth'));

// TODO: CRUD: eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor ejecutandose en el puerto ${process.env.PORT}`);
});