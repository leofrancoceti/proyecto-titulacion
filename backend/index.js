process.on("uncaughtException", (err) => {
  console.error("Error no controlado:", err);
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.use("/usuarios", usuarioRoutes);

app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});