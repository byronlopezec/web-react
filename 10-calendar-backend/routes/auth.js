/* 
    Rutas de Usuarios / Auth
    host + /api/auth

*/

// const express = require('express');
// const router = express.Router();

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth');

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('password', 'La contraseña debe ser mayor a 5 caracteres').isLength({ min: 6 })
    ],
    crearUsuario
);

router.post(
    '/',[
        check('email', 'El email es obligatorio').not().isEmpty(),
        check('email', 'El email es incorrecto').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('password', 'La contraseña debe ser mayor a 5 caracteres').isLength({ min: 6 })
    ],
    loginUsuario
);

router.get(
    '/renew',
    revalidarToken
)



module.exports = router;
