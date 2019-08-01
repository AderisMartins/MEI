const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando conexão ao db
mongoose.connect(
        "mongodb://localhost:27017/nodeapi", 
        {useNewUrlParser: true}
    );
mongoose.set('useFindAndModify', false);

//Importando models
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);