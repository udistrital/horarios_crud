-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler version: 1.0.4
-- PostgreSQL version: 14.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler version: 0.9.4
-- PostgreSQL version: 13.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: new_database | type: DATABASE --
-- DROP DATABASE IF EXISTS new_database;
-- CREATE DATABASE new_database;
-- ddl-end --


-- object: horarios | type: SCHEMA --
-- DROP SCHEMA IF EXISTS horarios CASCADE;
-- CREATE SCHEMA horarios;
-- ddl-end --
--ALTER SCHEMA horarios OWNER TO postgres;
-- ddl-end --


-- object: horarios.horario | type: TABLE --
-- DROP TABLE IF EXISTS horarios.horario CASCADE;
CREATE TABLE horarios.horario (
	id serial NOT NULL,
	nombre character varying(100) NOT NULL,
	codigo_abrieavacion character varying(20),
	codigo character varying(30),
	proyecto_academico_id integer NOT NULL,
	plan_estudio_id integer NOT NULL,
	semestres numeric(2) NOT NULL,
	periodo_id integer NOT NULL,
	estado_creacion_id integer NOT NULL,
	observacion character varying,
	activo boolean NOT NULL,
	fecha_creacion timestamp NOT NULL,
	fecha_modificacion timestamp NOT NULL,
	CONSTRAINT pk_horario PRIMARY KEY (id)
);
-- ddl-end --
COMMENT ON COLUMN horarios.horario.nombre IS E'Campo para la relación del nombre del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.codigo_abrieavacion IS E'Campo para el registro del codigo de abreviacion';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.codigo IS E'Campo para el manejo del codigo del horario';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.proyecto_academico_id IS E'campo para referenciar el prouyecto academico del esquema del proyecto_curricular_crud';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.plan_estudio_id IS E'Campo para refereciar el id del plan de estudios del esquema de plan_estudio_crud';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.semestres IS E'Campo para realicianar la cantidad de semenstre que tiene el horario';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.periodo_id IS E'Campo para referencia el periodo del esquema parmetros_crud';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.estado_creacion_id IS E'Campo para referenciar el estado del horario';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.observacion IS E'Campo para el manejo de observaciones';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.activo IS E'Campo parametrico para el registro de estado';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.fecha_creacion IS E'Campo parametrico para la fecha de creación';
-- ddl-end --
COMMENT ON COLUMN horarios.horario.fecha_modificacion IS E'Campo parametrico para la relación de la fecha de modificación del registro';
-- ddl-end --
-- ALTER TABLE horarios.horario OWNER TO postgres;
-- ddl-end --

-- object: horarios.estado_creacion | type: TABLE --
-- DROP TABLE IF EXISTS horarios.estado_creacion CASCADE;
CREATE TABLE horarios.estado_creacion (
	id serial NOT NULL,
	nombre character varying(80) NOT NULL,
	descripcion character varying(250),
	codigo_abreviacion character varying(20),
	activo boolean NOT NULL,
	fecha_creacion timestamp NOT NULL,
	fecha_modificacion timestamp NOT NULL,
	CONSTRAINT pk_estado_creacion PRIMARY KEY (id)
);
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion.nombre IS E'Campo para la relación del nombre del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion.descripcion IS E'Campo para la relación de la descripcion del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion.codigo_abreviacion IS E'Campo para el codigo de abreciación del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion.activo IS E'Campo para saber el estado del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion.fecha_creacion IS E'Campo para el registrode la fecha de creación del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion.fecha_modificacion IS E'Campo para el registro de la fecha de modificación';
-- ddl-end --
-- ALTER TABLE horarios.horario OWNER TO postgres;
-- ddl-end --

-- object: horarios.horario_semestre | type: TABLE --
-- DROP TABLE IF EXISTS horarios.horario_semestre CASCADE;
CREATE TABLE horarios.horario_semestre (
	id serial NOT NULL,
	nombre character varying(80) NOT NULL,
	codigo_abreviacion character varying(30),
	semestre_id integer NOT NULL,
	periodo_id integer NOT NULL,
	horario_id integer NOT NULL,
	estado_creacion_semestre_id integer NOT NULL,
	observacion character varying,
	activo boolean NOT NULL,
	fecha_creacion timestamp NOT NULL,
	fecha_modificacion timestamp NOT NULL,
	CONSTRAINT pk_horario_semestre PRIMARY KEY (id)
);
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.nombre IS E'Campo para el registro de nombre del horario por semestre';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.codigo_abreviacion IS E'Campo para el registro del codigo de abreviación del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.semestre_id IS E'Campo para la relación del id del semestre del esquema de parametros_crud';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.periodo_id IS E'Campo para la relacipon del id del periodo del esquema de paramentros_crud';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.horario_id IS E'Campo para relacionar el id del registro de la tabla horario';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.estado_creacion_semestre_id IS E'Campo para el registro del estado del horario del semestre';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.observacion IS E'Campo para el registro de la observación del horario por semestre';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.activo IS E'Campo parametrico para el estado del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.fecha_creacion IS E'Campo parametrico para el registo de la fecha de creación';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre.fecha_modificacion IS E'Campo parametrico para el registo de la fecha de modificación';
-- ddl-end --
-- ALTER TABLE horarios.horario OWNER TO postgres;
-- ddl-end --

-- object: horarios.estado_creacion_semestre | type: TABLE --
-- DROP TABLE IF EXISTS horarios.estado_creacion_semestre CASCADE;
CREATE TABLE horarios.estado_creacion_semestre (
	id serial NOT NULL,
	nombre character varying(80) NOT NULL,
	descripcion character varying(250),
	codigo_abreviacion character varying(20),
	activo boolean NOT NULL,
	fecha_creacion timestamp NOT NULL,
	fecha_modificacion timestamp NOT NULL,
	CONSTRAINT pk_estado_creacion_semestre PRIMARY KEY (id)
);
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion_semestre.nombre IS E'Campo para la relación del nombre del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion_semestre.descripcion IS E'Campo para la relación de la descripcion del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion_semestre.codigo_abreviacion IS E'Campo para el codigo de abreciación del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion_semestre.activo IS E'Campo para saber el estado del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion_semestre.fecha_creacion IS E'Campo para el registrode la fecha de creación del registro';
-- ddl-end --
COMMENT ON COLUMN horarios.estado_creacion_semestre.fecha_modificacion IS E'Campo para el registro de la fecha de modificación';
-- ddl-end --
-- ALTER TABLE horarios.horario OWNER TO postgres;
-- ddl-end --

-- object: horarios.grupo_espacio_academico | type: TABLE --
-- DROP TABLE IF EXISTS horarios.grupo_espacio_academico CASCADE;
CREATE TABLE horarios.grupo_espacio_academico (
	id serial NOT NULL,
	codigo_proyecto character varying(30) NOT NULL,
	indicador_grupo character varying(30) NOT NULL,
	cupos_grupos numeric(4) NOT NULL,
	espacios_academicos json NOT NULL,
	activo boolean NOT NULL,
	fecha_creacion timestamp NOT NULL,
	fecha_modificacion timestamp NOT NULL,
	CONSTRAINT pk_grupo_espacio_academico PRIMARY KEY (id)
);
-- ddl-end --
COMMENT ON COLUMN horarios.grupo_espacio_academico.codigo_proyecto IS E'Campo para el registro del codigo del proyecto curricular';
-- ddl-end --
COMMENT ON COLUMN horarios.grupo_espacio_academico.indicador_grupo IS E'Campo para el registro del indicador del grupo';
-- ddl-end --
COMMENT ON COLUMN horarios.grupo_espacio_academico.cupos_grupos IS E'Campo para el registro de cupo para los grupos de espacios academicos';
-- ddl-end --
COMMENT ON COLUMN horarios.grupo_espacio_academico.espacios_academicos IS E'Campo json para el registro de los espacios academicos en el grupo';
-- ddl-end --
COMMENT ON COLUMN horarios.grupo_espacio_academico.activo IS E'Campo parametrica para el registro del estado';
-- ddl-end --
COMMENT ON COLUMN horarios.grupo_espacio_academico.fecha_creacion IS E'Campo parametrico para el registro de la fecha de creación';
-- ddl-end --
COMMENT ON COLUMN horarios.grupo_espacio_academico.fecha_modificacion IS E'Campo parametrico para el registro de la fecha de modificación';
-- ddl-end --
-- ALTER TABLE horarios.horario OWNER TO postgres;
-- ddl-end --

-- object: horarios.horario_grupo_espacio_academico | type: TABLE --
-- DROP TABLE IF EXISTS horarios.horario_grupo_espacio_academico CASCADE;
CREATE TABLE horarios.horario_grupo_espacio_academico (
	id serial NOT NULL,
	horario_semestre_id integer NOT NULL,
	grupo_espacio_academico integer NOT NULL,
	activo boolean NOT NULL,
	fecha_creacion timestamp NOT NULL,
	fecha_modificacio timestamp NOT NULL,
	CONSTRAINT pk_horario_grupo_espacio_academico PRIMARY KEY (id)
);
-- ddl-end --
COMMENT ON COLUMN horarios.horario_grupo_espacio_academico.horario_semestre_id IS E'Campo para relación de tabla horario semetre';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_grupo_espacio_academico.grupo_espacio_academico IS E'Campo para la relacion con la tabla grupo espacio academico';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_grupo_espacio_academico.activo IS E'Campo parametrico para el registro del estado';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_grupo_espacio_academico.fecha_creacion IS E'Campo parametrico para el registro de la fecha de creación';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_grupo_espacio_academico.fecha_modificacio IS E'Campo parametrico para el registro de la fecha de modificación';
-- ddl-end --
-- ALTER TABLE horarios.horario OWNER TO postgres;
-- ddl-end --

-- object: horarios.colocacion_espacio_academico | type: TABLE --
-- DROP TABLE IF EXISTS horarios.colocacion_espacio_academico CASCADE;
CREATE TABLE horarios.colocacion_espacio_academico (
	id serial NOT NULL,
	espacio_academico_id integer NOT NULL,
	espacio_fisico_id integer NOT NULL,
	colocacion_espacio_academico json NOT NULL,
	resumen_colocacion_espacio_fisico json,
	activo boolean NOT NULL,
	fecha_creacion timestamp NOT NULL,
	fecha_modificacion timestamp NOT NULL,
	CONSTRAINT pk_colocacion_espacio_academico PRIMARY KEY (id)
);
-- ddl-end --
COMMENT ON COLUMN horarios.colocacion_espacio_academico.espacio_academico_id IS E'Campo de referencia espacio academico esquema espacio academico crud';
-- ddl-end --
COMMENT ON COLUMN horarios.colocacion_espacio_academico.espacio_fisico_id IS E'Campo de refrencia espacio fisico esquema oikos crud';
-- ddl-end --
COMMENT ON COLUMN horarios.colocacion_espacio_academico.colocacion_espacio_academico IS E'Campo para registrar la ubicación en el tiempo y dia del espacio academico';
-- ddl-end --
COMMENT ON COLUMN horarios.colocacion_espacio_academico.resumen_colocacion_espacio_fisico IS E'Campo para almacenar el resumen de la colocación y espacio fisico del horario';
-- ddl-end --
COMMENT ON COLUMN horarios.colocacion_espacio_academico.activo IS E'Campo parametrico para el registro del estado';
-- ddl-end --
COMMENT ON COLUMN horarios.colocacion_espacio_academico.fecha_creacion IS E'Campo parametrico para el registro de la fecha de creación';
-- ddl-end --
COMMENT ON COLUMN horarios.colocacion_espacio_academico.fecha_modificacion IS E'Campo parametrico para el registro de la fecha de modificación';
-- ddl-end --
-- ALTER TABLE horarios.horario OWNER TO postgres;
-- ddl-end --

-- object: horarios.horario_semestre_colocacion_espacio_academico | type: TABLE --
-- DROP TABLE IF EXISTS horarios.horario_semestre_colocacion_espacio_academico CASCADE;
CREATE TABLE horarios.horario_semestre_colocacion_espacio_academico (
	id serial NOT NULL,
	horario_semestre_id integer NOT NULL,
	colocacion_espacio_academico_id integer NOT NULL,
	activo boolean NOT NULL,
	fecha_creacion timestamp NOT NULL,
	fecha_modificacion timestamp NOT NULL,
	CONSTRAINT pk_horario_semestre_colocacion_espacio_academico PRIMARY KEY (id)
);
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre_colocacion_espacio_academico.horario_semestre_id IS E'Campo para la referencia del registro con la tabal horario semestre';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre_colocacion_espacio_academico.colocacion_espacio_academico_id IS E'Campo para referenciar el registro de la tabla colocacion_espacio_academico';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre_colocacion_espacio_academico.activo IS E'Campo parametrico para el registro del estado';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre_colocacion_espacio_academico.fecha_creacion IS E'Campo parametrico para el registro de la fecha de creación';
-- ddl-end --
COMMENT ON COLUMN horarios.horario_semestre_colocacion_espacio_academico.fecha_modificacion IS E'Campo parametrico para el registro de la fecha de modificación';
-- ddl-end --
-- ALTER TABLE horarios.horario OWNER TO postgres;
-- ddl-end --

-- object: rel_horario_estado_creacion_semestre | type: CONSTRAINT --
-- ALTER TABLE horarios.horario DROP CONSTRAINT IF EXISTS rel_horario_estado_creacion_semestre CASCADE;
ALTER TABLE horarios.horario ADD CONSTRAINT rel_horario_estado_creacion_semestre FOREIGN KEY (estado_creacion_id)
REFERENCES horarios.estado_creacion (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: rel_horario_semestre_horario | type: CONSTRAINT --
-- ALTER TABLE horarios.horario_semestre DROP CONSTRAINT IF EXISTS rel_horario_semestre_horario CASCADE;
ALTER TABLE horarios.horario_semestre ADD CONSTRAINT rel_horario_semestre_horario FOREIGN KEY (horario_id)
REFERENCES horarios.horario (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: rel_horario_estado_creacion_semestre | type: CONSTRAINT --
-- ALTER TABLE horarios.horario_semestre DROP CONSTRAINT IF EXISTS rel_horario_estado_creacion_semestre CASCADE;
ALTER TABLE horarios.horario_semestre ADD CONSTRAINT rel_horario_estado_creacion_semestre FOREIGN KEY (estado_creacion_semestre_id)
REFERENCES horarios.estado_creacion_semestre (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: rel_horario_grupo_espacio_academico_grupo_espacio_academico | type: CONSTRAINT --
-- ALTER TABLE horarios.horario_grupo_espacio_academico DROP CONSTRAINT IF EXISTS rel_horario_grupo_espacio_academico_grupo_espacio_academico CASCADE;
ALTER TABLE horarios.horario_grupo_espacio_academico ADD CONSTRAINT rel_horario_grupo_espacio_academico_grupo_espacio_academico FOREIGN KEY (grupo_espacio_academico)
REFERENCES horarios.grupo_espacio_academico (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: rel_horario_grupo_espacio_academico_horario_semestre | type: CONSTRAINT --
-- ALTER TABLE horarios.horario_grupo_espacio_academico DROP CONSTRAINT IF EXISTS rel_horario_grupo_espacio_academico_horario_semestre CASCADE;
ALTER TABLE horarios.horario_grupo_espacio_academico ADD CONSTRAINT rel_horario_grupo_espacio_academico_horario_semestre FOREIGN KEY (horario_semestre_id)
REFERENCES horarios.horario_semestre (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: rel_horario_semestre_colocacion_espacio_academico | type: CONSTRAINT --
-- ALTER TABLE horarios.horario_semestre_colocacion_espacio_academico DROP CONSTRAINT IF EXISTS rel_horario_semestre_colocacion_espacio_academico CASCADE;
ALTER TABLE horarios.horario_semestre_colocacion_espacio_academico ADD CONSTRAINT rel_horario_semestre_colocacion_espacio_academico FOREIGN KEY (horario_semestre_id)
REFERENCES horarios.horario_semestre (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: rel_horario_semestre_colocacion_espacio | type: CONSTRAINT --
-- ALTER TABLE horarios.horario_semestre_colocacion_espacio_academico DROP CONSTRAINT IF EXISTS rel_horario_semestre_colocacion_espacio CASCADE;
ALTER TABLE horarios.horario_semestre_colocacion_espacio_academico ADD CONSTRAINT rel_horario_semestre_colocacion_espacio FOREIGN KEY (colocacion_espacio_academico_id)
REFERENCES horarios.colocacion_espacio_academico (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --


