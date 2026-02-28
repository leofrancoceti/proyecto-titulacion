const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const rows = await db.query("SELECT * FROM usuarios");
    res.json(rows[0]);
  } catch (error) {
    console.error("ERROR EN QUERY:", error);
    res.status(500).json({ error: "Error en base de datos" });
  }
});

module.exports = router;