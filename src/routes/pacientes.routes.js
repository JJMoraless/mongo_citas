import { Router } from "express";
import db from "../db/conection.js";
import { ObjectId } from "mongodb";
const Paciente = db.collection("usuario");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const pacientesfound = await Paciente.find().sort({ nombre: 1 }).toArray();
    res.json({ ok: true, pacientes: pacientesfound });
  } catch (error) {
    console.log(
      "🚀 ~ file: pacientes.routes.js:24 ~ router.get ~ error:",
      error
    );
    res.status(500).json({ ok: false, error });
  }
});

export { router };
