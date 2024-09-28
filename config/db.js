const mongoose = require('mongoose');
require('dotenv').config()

const conexionDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO);
        console.log("Conectada a la db de adopción de mascotas");
    } catch (e) {
        console.log("Error al conectar a la base de datos", e);
        process.exit(1); 
    }
}

module.exports = conexionDB;
