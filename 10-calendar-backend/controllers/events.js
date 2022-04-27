const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async (req, res = response) => {

    const events = await Evento.find()
        .populate('user', 'name')

    res.json({
        ok: true,
        events: events
    });
}

const crearEvento = async (req, res = response) => {

    const evento = new Evento(req.body);

    try {
        evento.user = req.uid;
        const eventoSaved = await evento.save();

        res.json({
            ok: true,
            msg: eventoSaved
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado',
            error
        });
    }

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