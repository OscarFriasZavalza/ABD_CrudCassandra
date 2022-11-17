const { cassandra } = require("./conexion");

const postAlumnos = (req, res) => {
  const queries = [
    {
      query:
        "INSERT INTO alumnosmaterias (curd, nombre, fecha_nacimiento, telefono,mat_codigo,mat_nombre,mat_horas,mat_docente,instrumentos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      params: [
        req.body.curd,
        req.body.nombre,
        req.body.fecha_nacimiento,
        req.body.telefono,
        req.body.mat_codigo,
        req.body.mat_nombre,
        req.body.mat_horas,
        req.body.mat_docente,
        req.body.instrumentos,
      ],
    },
  ];
  cassandra
    .batch(queries, { prepare: true })
    .then(() => {
      res.send("INSERTADO CON EXITO");
    })
    .catch((err) => {
      res.send(err);
    });
};

const postDocentes = (req, res) => {
  const queries = [
    {
      query:
        "INSERT INTO DocentesMAteriasSalas (curd, nombre, mat_codigo,mat_nombre,mat_horas,instrumentos,sala_id,sala_nombre,sala_ubicacion,sala_aforo,sala_fecha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)",
      params: [
        req.body.curd,
        req.body.nombre,
        req.body.mat_codigo,
        req.body.mat_nombre,
        req.body.mat_horas,
        req.body.instrumentos,
        req.body.sala_id,
        req.body.sala_nombre,
        req.body.sala_ubicacion,
        req.body.sala_aforo,
        req.body.sala_fecha,
      ],
    },
  ];
  cassandra
    .batch(queries, { prepare: true })
    .then(() => {
      res.send("INSERTADO CON EXITO");
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = {
  postAlumnos,
  postDocentes,
};
