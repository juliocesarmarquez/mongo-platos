const express = require("express");
const mongoose = require("mongoose");
const { router } = require("./routers.js");

function main() {
    const server = express();
    mongoose.connect('mongodb://localhost:27017/menu', (err, res)=> {
        if (err) throw error
        console.log('Conexión a la base de datos establecida...')
    })
    server.use(router);
    server.listen(3000, () => console.log("servidor escuchando en puerto 3000"));
}

main();
