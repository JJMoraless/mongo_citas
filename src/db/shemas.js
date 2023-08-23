import db from "./conection.js";
await db.createCollection("tipo_documento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "abreviatura"],
      additionalProperties: false,
      properties: {
        nombre: {
          bsonType: ["string", "null"],
          description: "el nombre es obligatorio y es string",
        },
        abreviatura: {
          bsonType: ["string", "null"],
          description: "la abreviatura es obligatoria y es string",
        },
      },
    },
  },
});

import db from "./conection.js";
await db.createCollection("genero", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "abreviatura"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        nombre: {
          bsonType: ["string", "null"],
          description: "El nombre de la bodega",
        },
        abreviatura: {
          bsonType: ["string", "null"],
          description: "ID del responsable de la bodega",
        },
      },
    },
  },
});

import db from "./conection.js";
await db.createCollection("usuario", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre",
        "segundo_nombre",
        "primer_apellido",
        "segundo_apellido",
        "telefono",
        "direccion",
        "e-mail",
        "id_genero",
        "id_acudiente",
        "id_tipo_documento",
      ],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        nombre: {
          bsonType: ["string", "null"],
          description: "El nombre de la bodega",
        },
        segundo_nombre: {
          bsonType: ["string", "null"],
          description: "Segundo nombre del usuario",
        },
        primer_apellido: {
          bsonType: ["string", "null"],
          description: "Primer apellido del usuario",
        },
        segundo_apellido: {
          bsonType: ["string", "null"],
          description: "Segundo apellido del usuario",
        },
        telefono: {
          bsonType: ["string", "null"],
          description: "Número de teléfono del usuario",
        },
        direccion: {
          bsonType: ["string", "null"],
          description: "Dirección del usuario",
        },
        "e-mail": {
          bsonType: ["string", "null"],
          description: "Correo electrónico del usuario",
        },
        id_genero: {
          bsonType: ["objectId", "null"],
          description: "ID del género del usuario",
        },
        id_acudiente: {
          bsonType: ["objectId", "null"],
          description: "ID del acudiente del usuario",
        },
        id_tipo_documento: {
          bsonType: ["objectId", "null"],
          description: "ID del tipo de documento del usuario",
        },
      },
    },
  },
});

import db from "./conection.js";
await db.createCollection("medico", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre_completo", "id_consultorio", "id_especialidad"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "int",
          description: "Matrícula profesional del médico",
        },
        nombre_completo: {
          bsonType: "string",
          description: "Nombre completo del médico",
        },
        id_consultorio: {
          bsonType: "objectId",
          description: "Número de consultorio del médico",
        },
        id_especialidad: {
          bsonType: "objectId",
          description: "Especialidad médica del médico",
        },
      },
    },
  },
});

import db from "./conection.js";
await db.createCollection("cita", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fecha", "id_estado_cita", "id_medico", "id_usuario"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        fecha: {
          bsonType: ["string", "date", "null"],
          description: "Fecha de la cita",
        },
        id_estado_cita: {
          bsonType: ["objectId", "null"],
          description: "ID del estado de la cita",
        },
        id_medico: {
          bsonType: ["int", "null"],
          description: "ID del médico asignado a la cita",
        },
        id_usuario: {
          bsonType: ["objectId", "null"],
          description: "ID del usuario que agendó la cita",
        },
      },
    },
  },
});

import db from "./conection.js";
await db.createCollection("estado_cita", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        nombre: {
          bsonType: "string",
          description: "Nombre del estado de la cita",
        },
      },
    },
  },
});

import db from "./conection.js";
await db.createCollection("especialidad", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        nombre: {
          bsonType: "string",
          description: "Nombre del estado de la especialidad",
        },
      },
    },
  },
});

import db from "./conection.js";
await db.createCollection("consultorio", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        nombre: {
          bsonType: "string",
          description: "Nombre del estado de la consultorio",
        },
      },
    },
  },
});
