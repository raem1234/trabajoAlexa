
const mongoose = require('mongoose');

const PerroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  raza: { type: String, required: true },
  edad: { type: Number, required: true },
  tamaño: { type: String, required: true },
  estadoAdopcion: { type: String, enum: ['disponible', 'adoptado'], default: 'disponible' }
});

module.exports = mongoose.model('perro', PerroSchema);
