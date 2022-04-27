const { response } = require('express');
const Usuario = require('../models/Usuario');


const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }
        usuario = new Usuario(req.body)
        await usuario.save()

        res.status(201).json({
            ok: true,
            uid: usuario._id,
            name: usuario.name
        });

    } catch (err) {
        res.status(400).json({
            ok: false,
            error: {
                msg: 'Error al crear usuario',
                err
            }
        });
    };

}


const loginUsuario = (req, res = response) => {
    const { email, password } = req.body;

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