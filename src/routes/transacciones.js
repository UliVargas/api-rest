const express = require("express");
const router = express.Router();
const { getTransacciones, getTransaccionesId, postTransaccion } = require("../controller/transacciones");


router.get("/", getTransacciones);
router.get("/:id", getTransaccionesId);
router.post("/:uid", postTransaccion);


module.exports = router;