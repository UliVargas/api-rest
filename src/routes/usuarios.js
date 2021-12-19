const express = require("express");
const router = express.Router();
const { postUsuario, putUsuario, getUsuarios, getUsuarioId } = require("../controllers/usuarios");
const {validateToken} = require("../middleware/validateToken");

router.get("/", getUsuarios);
router.get("/:uid", getUsuarioId);
router.post("/", postUsuario);
router.put("/:uid", validateToken, putUsuario);

module.exports = router;
