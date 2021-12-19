const express = require("express");
const router = express.Router();
const { getTransacciones, getTransaccionesId, postTransaccion } = require("../controllers/transacciones");
const { validateToken } = require("../middleware/validateToken");

router.get("/", validateToken, getTransacciones);
router.get("/:uid", validateToken, getTransaccionesId);
router.post("/:uid", validateToken, postTransaccion);


module.exports = router;