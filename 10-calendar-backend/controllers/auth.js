const { response } = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body;

    // if(name.length <= 5) {
    //     return res.status(400).json({
    //         ok: false,
    //         msg: 'El nombre debe ser mayor a 5 caracteres'
    //     });
    // }

    // manejo de errores
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        });
    }

    res.status(201).json({
        ok: true,
        name,
        email,
        password
    });
}


const loginUsuario = (req, res = response) => {
    const { email, password } = req.body;

    // manejo de errores
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        });
    }


    res.status(200).json({
        ok: true,
        email,
        password
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'revalidarToken'
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};