const express = require("express");
const { crearPlato, buscarPlatos, actualizarPlato, eliminarPlato, buscarUnPlato, midPlato } = require("./funciones");
const router = express();

router.use(express.json());
/* router.use("/", midPlato); */

router.get("/platos", buscarPlatos);
router.post("/platos", crearPlato);
router.put("/platos", actualizarPlato);
router.delete("/platos", eliminarPlato);
router.get("/buscarplato", buscarUnPlato);


module.exports = {
    router
}
