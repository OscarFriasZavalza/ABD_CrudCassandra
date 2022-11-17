const { cassandra } = require("./conexion");
const { v4: uuidv4 } = require("uuid");


//redis conexion
const redis = require('redis')
const client=redis.createClient({
  host: '127.0.0.1',
  port :6379
});

client.connect().then(() => console.log("Conectado a redis"))
.catch((error) => console.error(error));


///*toda informacion de alumnos
const getAlumnos = (req, res) => {
  cassandra
    .execute("select*from alumnosmaterias;")
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.send(err);
    });
};
//*toda informacion de alumnos x curd
const getAlumnosCurd = (req, res) => {
  cassandra
    .execute("select*from alumnosmaterias where curd=?;", [req.params.curd], {
      prepare: true,
    })
    .then((result) => {
      res.send(result.first());
    })
    .catch((err) => {
      res.send(err);
    });
};

//*toda infromacion de docente
const getDocentes = (req, res) => {
  cassandra
    .execute("select*from docentesmateriassalas;")
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.send(err);
    });
};

//*toda infromacion de docente x curd
const getDocentesCurd = (req, res) => {
  cassandra
    .execute(
      "select*from docentesmateriassalas where curd=?;",
      [req.params.curd],
      { prepare: true }
    )
    .then((result) => {
      res.send(result.first());
    })
    .catch((err) => {
      res.send(err);
    });
};

//!Q1 Muestre a todos los alumnos y las materias en las que están inscritos.Incluya el código de la  consulta y la imagen del resultado.
const getAlumnosMaterias = (req, res) => {
  //redis
  client.set('get alumnos Materias '+fecha_actual(),' SE HIZO POST A ALUMNOS');

  cassandra
    .execute(
      "select curd, nombre, fecha_nacimiento, telefono,mat_codigo,mat_nombre,mat_horas,mat_docente from alumnosmaterias;"
    )
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.send(err);
    });
};

//!Q2. Muestre un docente en específico y las materias que imparte. Incluya el código de la  consulta y la imagen del resultado.
const getDocentesMaterias = (req, res) => {
  client.set('get Docentes Materias '+fecha_actual(),' SE HIZO POST A docentes');

  cassandra
    .execute(
      "select curd, nombre, mat_codigo,mat_nombre,mat_horas from docentesmateriassalas where curd=?;",
      [req.params.curd],
      { prepare: true }
    )
    .then((result) => {
      res.send(result.first());
    })
    .catch((err) => {
      res.send(err);
    });
};

//!Q3. /* c.	Q3. Muestre a todos los docentes que han realizado reservaciones de salas de conciertos.Incluya el código de la  consulta y la imagen del resultado.*/

const getDocentesReservacion = (req, res) => {
  client.set('get docentes reservacion '+fecha_actual(),' SE HIZO POST A docentes');

  cassandra
    .execute(
     /* "select curd, nombre,sala_id,sala_nombre,sala_ubicacion,sala_aforo,sala_fecha from docentesmateriassalas where sala_id != null ALLOW FILTERING;"*/

     "select curd, nombre,sala_id,sala_nombre,sala_ubicacion,sala_aforo,sala_fecha from docentesmateriassalas where sala_id > '0' ALLOW FILTERING;"
    )
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.send(err);
    });
};


function fecha_actual() {
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  return hoy.toUTCString();
}

module.exports = {
  getAlumnos,
  getDocentes,
  getAlumnosCurd,
  getDocentesCurd,
  getAlumnosMaterias,
  getDocentesMaterias,
  getDocentesReservacion,
};
