const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {

    // x-tolken headers

    const token = req.headers['x-token'];

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token'
        });
    }

    try {
        const { uid, name } = jwt.verify(token, process.env.JWT_SECRET);

        req.uid = uid;
        req.name = name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Error al validar token',
        });
    }



    next();

}

module.exports = {
    validarJWT
}