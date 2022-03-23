const express = require("express");
const app = express();
const useRouter = require("./routes");

app.set("view engine", "ejs");

app.use(express.static("../public"));
app.use(express.static("../scripts"));
app.use(useRouter);

app.listen(4000);
console.log("server Rodando");