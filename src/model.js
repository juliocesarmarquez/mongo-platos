const mongoose = require("mongoose");

const schemaPlato = new mongoose.Schema({plato:String, precio:String, tipo_de_plato:String});
const platos = new mongoose.model("platos", schemaPlato);

module.exports = {
    platos
};
