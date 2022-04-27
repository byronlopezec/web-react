const { response } = require('express');

const getEventos = (req, res = response) => {

    res.json({
        ok: true,
        events: []
    });
}

const crearEvento = (req, res = response) => {

    console.log(req.body);

    res.json({
        ok: true,
        msg: "Evento creado"
    });
}

const actualizarEvento = (req, res = response) => {

    res.json({
        ok: true,
        msg: "Evento actualizado"
    });
}

const eliminarEvento = (req, res = response) => {

    res.json({
        ok: true,
        msg: "Evento eliminado"
    });
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}