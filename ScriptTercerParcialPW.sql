create database pruebaPW;

use pruebaPW;
show tables;
insert into gh22i04001_menu(valor) value
("inicio"),
("admision"),
("directorio"),
("facultades"),
("Academias"),
("Servicios"),
("Ayuda");


select * from gh22i04001_visionmision;
insert into gh22i04001_visionmision (tema, descripcion) value
("Vision", "Ser una institucion de educacion superior reconocida por su excelencia academica y su contribucion al desarrollo justo y equitativo de la sociedad salvadoreña."),
("Mision", "Somos una institucion de educacion superior que a traves del mejoramiento continuo de la docencia; investigacion y proyeccion social, competitivos comprometidos con la realidad nacional para contribuir al desarrollo humano sostenible en El Salvador.");

select * from gh22i04001_facultad;
insert into gh22i04001_facultad (nombre) value
("F. Ciencias Juridicas"),
("F. de Economia"),
("F. de  Ingenieria");

select * from gh22i04001_programa;
insert into gh22i04001_programa (nombre, facultad_id) value
("Lic. Ciencia Juridica", 1),
("Lic. en Administracion", 2),
("Lic. en Contaduria", 2),
("Lic. en Educacion", 2),
("Ing. Electrica", 3),
("Ing. Industrial", 3),
("Ing. en Sistemas", 3),
("Ing. en Agronegocios", 3);

