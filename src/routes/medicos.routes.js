import { Router } from "express";
import db from "../db/conection.js";
const Medico = db.collection("medico");
const Especialidad = db.collection("especialidad");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { especialidad } = req.query;

    if (!especialidad) {
      return res
        .status(400)
        .json({ msg: "especifique una especialidad en una query" });
    }

    const especiadlidadFound = await Especialidad.findOne({
      nombre: especialidad,
    });

    if (!especiadlidadFound) {
      return res.status(400).json({ msg: "no tenemos esa tegoria" });
    }

    const medicosFound = await Medico.find({
      id_especialidad: especiadlidadFound._id,
    }).toArray();

    res.json({
      ok: true,
      medicos: medicosFound,
      especialidad: especiadlidadFound,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: pacientes.routes.js:24 ~ router.get ~ error:",
      error
    );
    res.status(500).json({ ok: false, error });
  }
});

export { router };
