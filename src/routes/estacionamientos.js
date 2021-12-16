const express = require("express");
const router = express.Router();
const getEstacionamiento = require("../controller/estacionamientos");

router.get("/", getEstacionamiento);

module.exports = router;