
const express = require('express');
const router = express.Router();
const { registrarAdopcion, historialAdopciones } = require('../controller/adopcontroller');

router.post('/adopciones', registrarAdopcion);
router.get('/adopciones/historial', historialAdopciones);

module.exports = router;
