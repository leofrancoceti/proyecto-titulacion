const usuarioModel = require("../models/usuarioModel");

const getUsuarios = (req, res) => {
  usuarioModel.obtenerUsuarios((err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
};

module.exports = {
  getUsuarios,
};