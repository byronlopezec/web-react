const bcrypt = require('bcryptjs/dist/bcrypt');
const { response } = require('express');
const { generarJWT } = require('../helpers/jwt');
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

        // Cifrar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save()

        const token = await generarJWT(usuario._id, usuario.name);

        res.status(201).json({
            ok: true,
            uid: usuario._id,
            name: usuario.name,
            token
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


const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario/Contrasenia no existe'
            });
        }

        // confirmar dos contraseñas

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario/Contrasenia no existe'
            });
        }

        const token = await generarJWT(usuario._id, usuario.name);

        res.status(200).json({
            ok: true,
            uid: usuario._id,
            name: usuario.name,
            token
        });


    } catch (err) {
        res.status(400).json({
            ok: false,
            error: {
                msg: 'Error al ingresar usuario',
                err
            }
        });
    };


}

const revalidarToken = async (req, res = response) => {

    const { uid, name } = req;

    // generar nuevo token
    const token = await generarJWT(uid, name);

    if (!token) {
        return res.status(400).json({
            ok: false,
            msg: 'No se pudo generar token'
        });
    }

    res.json({
        ok: true,
        token,
        uid, name
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};