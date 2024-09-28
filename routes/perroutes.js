const express = require('express');
const router = express.Router();
const { crearPerro, listarPerrosDisponibles, actualizarPerro, eliminarPerro } = require('../controller/perroscontroller');

router.post('/perros', crearPerro);
router.get('/perros/disponibles', listarPerrosDisponibles);
router.put('/perros/:id', actualizarPerro);     
router.delete('/perros/:id', eliminarPerro);    

module.exports = router;
