const { Router } = require('express');
const router = Router();

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

// Todas las siguientes rutas a partir de la siguiente linea requieren autenticación
// De esa manera ya no pongo el midleware en cada ruta
router.use(validarJWT);

// obtener eventos
router.get("/", getEventos);

// Crear Eventos
router.post("/",  crearEvento);

// Actualizar Eventos
router.put("/:id",  actualizarEvento);

// Eliminar Eventos
router.delete("/:id", eliminarEvento);

module.exports = router;