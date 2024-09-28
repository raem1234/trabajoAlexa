const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const adopRoutes = require('./routes/adoproutes.js')
const perRouter = require('./routes/perroutes.js')
const  usuarioRouter = require('./routes/usuarioroutes.js')




app.use(express.json());


require('./config/db.js');

app.use('/api', adopRoutes, perRouter, usuarioRouter);

const port = process.env.PORT  || 5000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
