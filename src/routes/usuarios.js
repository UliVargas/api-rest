const express = require("express");
const router = express.Router();
const { postUsuario, putUsuario, getUsuarios, getUsuarioId } = require("../controller/usuarios");

router.get("/", getUsuarios);
router.get("/:uid", getUsuarioId);
router.post("/", postUsuario);
router.put("/:uid", putUsuario);

module.exports = router;
