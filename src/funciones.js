const { platos } = require('./model.js');

async function crearPlato(req, res) {
    const nuevoPlato = new platos({ plato: req.body.plato, precio: req.body.precio, tipo_de_plato: req.body.tipo_de_plato });
    const saved = await nuevoPlato.save();
    res.status(200).json(`El plato ${nuevoPlato.plato} fue creado de manera correcta`);
}

async function buscarPlatos(req, res) {
    const found = await platos.find({});
    console.log(found);
    res.status(200).json(found);
}

async function actualizarPlato(req, res) {
    const filter = { plato: req.body.plato };
    const update = { precio: req.body.precio, tipo_de_plato: req.body.tipo_de_plato };

    let doc = await platos.findOneAndUpdate(filter, update, {
        returnOriginal: false
    });
    res.status(200).json(doc);
}

async function eliminarPlato(req, res) {
    let doc = await platos.deleteOne({ plato: req.body.plato });
    res.status(200).json(`El plato ${req.body.plato} fue eliminado`);
}

async function buscarUnPlato(req, res) {
    let doc = await platos.findOne({ plato: req.body.plato }).exec();
    res.status(200).json(doc);
}

async function midPlato(req, res, next) {
    const found = await platos.find();
    for (comida of found) {
        if (req.body.plato === comida.plato) {
            return next();
        } else {
            return res.status(404).json(`El plato no ha sido encontrado`);
        }
    }
}


module.exports = { crearPlato, buscarPlatos, actualizarPlato, eliminarPlato, buscarUnPlato, midPlato }
