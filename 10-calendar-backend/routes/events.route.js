const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

// Todas las siguientes rutas a partir de la siguiente linea requieren autenticación
// De esa manera ya no pongo el midleware en cada ruta
router.use(validarJWT);

// obtener eventos
router.get("/", getEventos);

// Crear Eventos
router.post("/",
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha de fin es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

// Actualizar Eventos
router.put("/:id", actualizarEvento);

// Eliminar Eventos
router.delete("/:id", eliminarEvento);

module.exports = router;