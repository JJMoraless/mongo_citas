import { Router } from "express";
import db from "../db/conection.js";
import { ObjectId } from "mongodb";
const Cita = db.collection("cita");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const cientasFound = await Cita.aggregate([
      {
        $lookup: {
          from: "usuario",
          localField: "id_usuario",
          foreignField: "_id",
          as: "paciente",
        },
      },
      {
        $sort: { "paciente.nombre": 1 },
      },
      {
        $unwind: "$paciente",
      },
    ]).toArray();
    res.json({ ok: true, pacientes: cientasFound });
  } catch (error) {
    console.log(
      "🚀 ~ file: pacientes.routes.js:24 ~ router.get ~ error:",
      error
    );
    res.status(500).json({ ok: false, error });
  }
});

export { router };
