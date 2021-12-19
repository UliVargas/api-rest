const express = require("express");
const router = express.Router();
const sesionUsuario = require("../controllers/sesion");

router.post("/", sesionUsuario);


module.exports = router;