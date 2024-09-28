
const Adopcion = require('../models/adopmodels');
const Perro = require('../models/perrosmodels');

exports.registrarAdopcion = async (req, res) => {
  const { perroId, usuarioId } = req.body;
  try {
    const perro = await Perro.findById(perroId);
    if (perro.estadoAdopcion === 'adoptado') {
      return res.status(400).json({ error: 'Este perro ya ha sido adoptado.' });
    }

    const nuevaAdopcion = new Adopcion({ perro: perroId, usuario: usuarioId });
    perro.estadoAdopcion = 'adoptado';
    await perro.save();
    await nuevaAdopcion.save();

    res.status(201).json(nuevaAdopcion);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar la adopción.' });
  }
};

exports.historialAdopciones = async (req, res) => {
  try {
    const adopciones = await Adopcion.find().populate('perro').populate('usuario');
    res.json(adopciones);
  } catch (err) {
    res.status(500).json({ error: 'Error al listar el historial de adopciones.' });
  }
};
