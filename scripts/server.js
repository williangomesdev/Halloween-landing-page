const express = require("express");
const app = express();
const routes = require("./routes");

app.use(routes);

app.listen(8080);
console.log("server Rodando");