
const Usuario = require('../models/usuariomodels');

exports.crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);;
    await nuevoUsuario.save();
    res.status(201).send(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar el usuario.' });
    console.log(err) 
  }
};

exports.actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre,  direccion } = req.body;
  
    try {
      let usuario = await Usuario.findById(id);
  
      if (!usuario) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
      }
  
      usuario = await Usuario.findByIdAndUpdate(
        id,
        { nombre, direccion },
        { new: true }
      );
  
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  };
  
exports.eliminarUsuario = async (req, res) => {
    const { id } = req.params;
  
    try {
      let usuario = await Usuario.findById(id);
  
      if (!usuario) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
      }
  
      await Usuario.findByIdAndRemove(id);
  
      res.json({ msg: 'Usuario eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  };
  
  
