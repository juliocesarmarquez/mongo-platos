const mongoose = require("mongoose");

const schemaPlato = new mongoose.Schema({plato:String, precio:String, tipo_de_plato:String});
const plato = new mongoose.model("plato", schemaPlato);

module.exports = {
    plato
};
