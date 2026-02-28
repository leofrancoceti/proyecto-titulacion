const db = require("../config/db");

const obtenerUsuarios = (callback) => {
  db.query("SELECT * FROM usuarios", callback);
};

module.exports = {
  obtenerUsuarios,
};