//Modificadores jQuery para el CSS
var ht = $(window).height();

var ma = (($(window).height())/5);
$(document).ready(function(){
    $("#inicioHeader").css("height",ht);

    $(".vcenter").css("margin-top",ma)

});
var app = angular.module('appNav', [ ]);

	//Botones para el nav

	app.controller('navController', function(){
		this.navs = botones;	
	})

	var botones = [
		{
			"name":"Inicio",
			"link":"index.html"
		},{
			"name":"Cómo Funciona",
			"link":"comoFunciona.html"
		},{
			"name":"Costos",
			"link":"costos.html"
		},{
			"name":"Graduaciones USDE",
			"link":"graduacionesUSDE.html"
		},{
			"name":"Plan de Estudios",
			"link":"planDeEstudios.html"
		/*},{
			"name":"Escuela de Idiomas",
			"link":"escuelaDeIdiomas.html"
		},{
			"name":"Otras Tutorías",
			"link":"otrasTutorias.html"*/
		},{
			"name":"Contácto",
			"link":"contacto.html"
		}
	]

	//Contenido de Inicio.html

	app.controller('contentInicio', function(){
		this.primero = sec1;
		this.segundo = sec2;
		this.tercero = sec3;
		this.cuarto = sec4;
		this.quinto = sec5;
	})
	var sec1 = {
		"titulo":"Su mejor elección para la educación de sus hijos.",
		"image":"Niña escribiendo en el suelo. Fondo"
	};

	var sec2 = {
		"titulo":"Educación en Casa",	
		"contenido":[
			"Somos la más reciente y moderna opción en el área pedagógica y tecnológica que nos permite desarrollar programas de home schooling adaptados a las necesidades y exigencias de la actualidad.",
			"La mayoría de los colegios Guatemaltecos solo ofrecen educación aprobada por el Ministerio de Educación, pero el diploma que se obtiene no les permite a los estudiantes entradas a Universidades de USA.",
			"Los programas de WELDS ofrecen estudios desde primer grado hasta doce grado, de acuerdo a estándares de USA., lo cual le otorga al alumno egresado reconocimientos educativos o diplomas de graduación, de un colegio americano aprobado por US Department of Education, lo que les da acceso muchas universidades americanas."
		],
		"image":"Adolescente mujer sentada en el suelo. Fondo"
	};

	var sec3 = {
		"contenido": [
			{
			"texto":"Graduación en reconocida por el US Departmet of Education",
			"icon":"fa-graduation-cap"
			},{
			"texto":"Entrar a Universidades Americanas",
			"icon":"fa-lightbulb-o"
			},{
			"texto":"Cursos en Ingles",
			"icon":"fa-book"
			},{
			"texto":"Plataforma educativa online",
			"icon":"fa-pencil"
		}
	]};

	var sec4 = {
		"titulo": "La llave para el futuro de sus hijos",
		"articulos": [{
			"titulo": "E-Books y Lecciones",
			"image": "Grupo de adolescentes estudiando en grupo.",
			"contenido": [
				"Cada curso cuenta con un grupo de libros digitales y lecciones para que los alumnos puedan estudiar, estos mismos están diseñados para que los alumnos puedan ir aprendiendo a su paso."
			]
		}, {
			"titulo": "Reporte de Avances",
			"image": "Adolescente mujer estudiando en la biblioteca.",
			"contenido": [
				"Podrá observar en tiempo real los avances del alumno, lecciones aprendidas, punteos y cursos superados."
			]

		}, {

			"titulo": "Evaluaciones Periódicas",
			"image": "Mujer adulta maestra.",
			"contenido": [
				"Contamos con evaluaciones para medir el desempeño y lo aprendido para los alumnos."
				]
			}
		]
	};
	var sec5 = {
		"titulo": "Enseñanza con Valores",
		"contenido": [
			"Nuestros planes educativos contienes dolidos valores para que los alumnos puedan desempeñarse en un mundo laboral activo."
		]
	};


