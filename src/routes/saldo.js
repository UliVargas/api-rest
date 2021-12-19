const express = require("express");
const router = express.Router();
const {validateToken} = require("../middleware/validateToken");
const putSaldoUsuario = require("../controllers/saldo");

router.put("/:uid", validateToken, putSaldoUsuario)


module.exports = router;