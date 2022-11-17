
docker run --name cassandra01 -p 9042:9042 -v C:\contenedor\cassandra:/var/lib/cassandra -d cassandra

docker run -p 9042:9042 -e DS_LICENSE=accept --memory 4g --name my-dse-openwebinars - d datastax/dse-server -g -s -k


docker exec -it cassandra01 bash

CREATE KEYSPACE escuela_musica
WITH REPLICATION = {'class':'SimpleStrategy','replication_factor':1};

CREATE KEYSPACE obras
WITH REPLICATION = {'class':'SimpleStrategy','replication_factor':1};
------------elimiar KEYSPACE
DROP KEYSPACE IF EXISTS "myGSGKeyspace" ;
------------comprobar eliminacion
SELECT * from system_schema.keyspaces ;
-----------eliminar tabla
DROP TABLE IF EXISTS AlumnosMaterias ;


use escuela_musica;
-----------------------------------------------------------------------------
CREATE TABLE AlumnosMaterias (
    curd varchar,
    nombre varchar,
    fecha_nacimiento varchar,
    telefono varchar,
    mat_codigo varchar,
    mat_nombre varchar,
    mat_horas varchar,
    mat_docente map<text,text>,
    instrumentos map<text,text>,
    PRIMARY KEY (curd,nombre)
    );

INSERT INTO AlumnosMaterias (curd, nombre, fecha_nacimiento, telefono,mat_codigo,mat_nombre,mat_horas,mat_docente,instrumentos)
VALUES ('FRZ0990303MZTRLA08','Oscar', '03-03-99','3111477764','p11','percusion','55',
{
'curp' : 'BRAN750110BRALNS10',
'nombre' : 'Nora',
'instrumento':'bateria',
'instrumento':'guitarra'
},{
'id' : 'i03',
'nombre' : 'piano',
'tipo' : 'electrico',
'desripcion' : 'teclas finas',
'edad_recomentada' : '8'
});

INSERT INTO AlumnosMaterias (curd, nombre, fecha_nacimiento, telefono,mat_codigo,mat_nombre,mat_horas,mat_docente,instrumentos)
VALUES ('DIBP000308MNZRLA17','Paola', '08-03-00','3112814032','C10','cuerdas','45',
{
'curp' : 'GDBR850121TADGCL24',
'nombre' : 'Pedro',
'instrumento':'violin'
},{
'id' : 'i04',
'nombre' : 'violin',
'tipo' : 'cuerda frotada',
'desripcion' : 'pequeño y agudo',
'edad_recomentada' : '20'
});
------------------------------------------------------------------
DROP TABLE IF EXISTS AlumnosMaterias ;

------------------------------------------------------------------

CREATE TABLE DocentesMAteriasSalas (
    curd varchar,
    nombre varchar,
    mat_codigo varchar,
    mat_nombre varchar,
    mat_horas varchar,
    instrumentos map<text,text>,
    sala_id varchar,
    sala_nombre varchar,
    sala_ubicacion varchar,
    sala_aforo varchar,
    sala_fecha varchar,
    PRIMARY KEY (curd,nombre)
    );

INSERT INTO DocentesMAteriasSalas (curd, nombre, mat_codigo,mat_nombre,mat_horas,instrumentos,sala_id,sala_nombre,sala_ubicacion,sala_aforo,sala_fecha)
VALUES ('GDBR850121TADGCL24','PEDRO','C10','cuerdas','45',
{
'id' : 'i04',
'nombre' : 'violin',
'tipo' : 'cuerda frotada',
'desripcion' : 'pequeño y agudo',
'edad_recomentada' : '20'
},'S1','auditorio','lopez mateos','300','15-12-22');


INSERT INTO DocentesMAteriasSalas (curd, nombre, mat_codigo,mat_nombre,mat_horas,instrumentos,sala_id,sala_nombre,sala_ubicacion,sala_aforo,sala_fecha)
VALUES ('BRAN750110BRALNS10','nora','C10','cuerdas','45',
{
'id' : 'i02',
'nombre' : 'bateria',
'tipo' : 'percusion',
'desripcion' : 'tambores grandes y platillos',
'edad_recomentada' : '13'
},'S2','Teatro del pueblo','Juan Escutia','300','20-11-22');
------------------------------------------------------------------------
SELECT*from DocentesMAteriasSalas;

DROP TABLE IF EXISTS DocentesMAteriasSalas ;