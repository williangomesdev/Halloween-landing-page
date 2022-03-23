const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.render("pages/index");
});

module.exports = app;