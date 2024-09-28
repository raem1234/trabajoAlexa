
const Perro = require('../models/perrosmodels');

exports.crearPerro = async (req, res) => {
  const { nombre, raza, edad, tamaño } = req.body;
  try {
    const nuevoPerro = new Perro({ nombre, raza, edad, tamaño });
    await nuevoPerro.save();
    res.status(201).json(nuevoPerro);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar el perro.' });
  }
};

exports.listarPerrosDisponibles = async (req, res) => {
  try {
    const perros = await Perro.find({ estadoAdopcion: 'disponible' });
    res.json(perros);
  } catch (err) {
    res.status(500).json({ error: 'Error al listar los perros disponibles.' });
  }
};

exports.actualizarPerro = async (req, res) => {
    const { id } = req.params;
    const { nombre, raza, edad, tamaño, estadoAdopcion } = req.body;
  
    try {
      let perro = await Perro.findById(id);
  
      if (!perro) {
        return res.status(404).json({ msg: 'Perro no encontrado' });
      }
  
      perro = await Perro.findByIdAndUpdate(
        id,
        { nombre, raza, edad, tamaño, estadoAdopcion },
        { new: true }
      );
  
      res.json(perro);
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el perro' });
    }
  };
  
exports.eliminarPerro = async (req, res) => {
    const { id } = req.params;
  
    try {
      let perro = await Perro.findById(id);
  
      if (!perro) {
        return res.status(404).json({ msg: 'Perro no encontrado' });
      }
  
      await Perro.findByIdAndRemove(id);
  
      res.json({ msg: 'Perro eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el perro' });
    }
  };
  
  
