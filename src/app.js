const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { router } = require("./routers.js");

function main() {
    dotenv.config();
    const port = process.env.PORT;
    const url = process.env.DB;

    const server = express();
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, (err, res)=> {
        
        if (err) throw error
        console.log('Conexión a la base de datos establecida...')
        
    })
    server.use(router);
    server.listen(port, () => console.log(`servidor escuchando en puerto ${port}`));
}

main();
