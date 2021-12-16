const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes/index")

//Middleware
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api", routes);


module.exports = app;