const express = require("express");
const router = express.Router();

const get = require("./get");
const post = require("./post");

router.route("/alumnos").get(get.getAlumnos).post(post.postAlumnos);
router.route('/alumnos/:curd').get(get.getAlumnosCurd);
router.route('/alumnosMaterias').get(get.getAlumnosMaterias);

router.route("/docentes").get(get.getDocentes).post(post.postDocentes);
router.route("/docentesReservacion").get(get.getDocentesReservacion);
router.route("/docentes/:curd").get(get.getDocentesCurd);
router.route("/docentesMaterias/:curd").get(get.getDocentesMaterias);
module.exports = router;
