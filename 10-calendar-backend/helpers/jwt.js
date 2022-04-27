const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {

    return new Promise((resolve, reject) => {
            
            const payload = {
                uid,
                name
            };
    
            jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            }, (err, token) => {
                if (err) {
                    reject('Error al crear token');
                } else {
                    resolve(token);
                }
            });
    })
}

module.exports = {
    generarJWT
}