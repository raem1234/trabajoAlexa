
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
});

module.exports = mongoose.model('usuario', UsuarioSchema);
