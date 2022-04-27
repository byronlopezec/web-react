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

const actualizarEvento = async(req, res = response) => {

    const eventoId = req.params.id;

    try {
        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            });
        }

        if (evento.user.toString() !== req.uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tienes permiso para actualizar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: req.uid
        }

        // new = true permite que devuelva el objeto actualizado
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento,{new: true});

        res.json({
            ok: true,
            eventoActualizado
        });


    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado',
            error
        });
    }

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