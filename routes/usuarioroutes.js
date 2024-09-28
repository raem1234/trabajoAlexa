
const express = require('express');
const router = express.Router();
const { crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controller/usuariocontroller');

router.post('/usuarios', crearUsuario);
router.put('/usuarios/:id', actualizarUsuario);  
router.delete('/usuarios/:id', eliminarUsuario); 

module.exports = router;
