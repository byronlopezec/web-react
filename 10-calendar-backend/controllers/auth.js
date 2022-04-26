const { response } = require('express');


const crearUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crearUsuario'
    });
}


const loginUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'loginUsuario'
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