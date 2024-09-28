const mongoose = require('mongoose');

const AdopcionSchema = new mongoose.Schema({
  perro: { type: mongoose.Schema.Types.ObjectId, ref: 'perro', required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario', required: true },
  fechaAdopcion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('adopcion', AdopcionSchema);
