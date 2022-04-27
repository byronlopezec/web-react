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
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('password', 'La contraseña debe ser mayor a 5 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario
);

router.post(
    '/', [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email es incorrecto').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe ser mayor a 5 caracteres').isLength({ min: 6 }),
    validarCampos
],
    loginUsuario
);

router.get(
    '/renew',
    validarJWT,
    revalidarToken
)

module.exports = router;
