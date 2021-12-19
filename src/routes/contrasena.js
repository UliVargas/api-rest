const express = require("express");
const router = express.Router();
const putContrasenaUsuario = require("../controllers/contrasena");
const { validateToken } = require("../middleware/validateToken");

router.put("/:uid", validateToken, putContrasenaUsuario);

module.exports = router;