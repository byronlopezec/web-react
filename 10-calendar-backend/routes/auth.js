/* 
    Rutas de Usuarios / Auth
    host + /api/auth

*/

// const express = require('express');
// const router = express.Router();

const { Router } = require('express');
const router = Router();

const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth');

router.post('/new', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken)



module.exports = router;
