//Modificadores jQuery para el CSS
var ht = $(window).height();

var ma = (($(window).height())/5);
$(document).ready(function(){
    $("#inicioHeader").css("height",ht);

    $(".vcenter").css("margin-top",ma)

});
var app = angular.module('appNav', [ ]);

	//Botones para el nav

	/*Se inicia el controller*/
	/* keyword       nombre          inicia Controler*/
	app.controller('navController', function(){
		/*Asignamos un método a las variables que tienen el contenido*/
		/* metodo    variable que tiene el contenido*/
		this.navs = botones;	
	})

	/*Declaramos las variables y sus contenidos para usar el controller*/
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

	//Contenido de comoFunciona.html
	app.controller('contentComoFunciona', function(){
		this.primero = fucniona1;
		this.segundo = funciona2;
		this.tercero = funciona3;
		this.cuarto	= funciona4;
		this.quinto = funciona5;
	})

	var fucniona1 = {
		"titulo": "Como Funciona?",
		"sub":"¿Como Me Inscribo?",
		"contenido":"Los Pasos que debes seguir son los siguientes: ",
		"lista":[
			"Ponte en contacto a través de nuestra página y se solicitara algunos documentos necesarios para la inscripción.",
			"Debes realizar un examen de ubicación, el cual podrá ser en línea, cualquier día y cualquier hora o en nuestras instalaciones, previa cita de día y horario disponible.",
			"El examen de ubicación tiene un costo de $75.00.",
			"Luego se te enviará vía correo electrónico todos los pasos para necesarios para la inscripción, pago de cuotas, entrega de materiales y la adjudicación de usuario dentro de la plataforma educativa.",
			"Listo, puedes empezar a estudiar a tu ritmo, con tu horario y con disponibilidad de tutorías."
		]};

	var funciona2 = {
		"titulo":"¿Cómo funciona la plataforma educativa?",
		"lista":[
			"El alumno recibe con la inscripción todo el material que va a utilizar.",
			"Si tiene dudas puede, por medio de la plataforma solicitar tutorías, de lunes a viernes, en horario de 8 am a 5 pm un máximo de 1 hora diaria, con tutor en forma personal.",
			"Por medio de la plataforma recibirás las tutorías y más material para desarrollar tus conocimientos, podrás también participar el foros y trabajo en grupo para interactuar, desde casa, con la comunidad educativa.",
			"Recibirás informes y evaluaciones para conocer avances de lo aprendido.",
			"Tienes acceso desde cualquier dispositivo con acceso a internet, 24/7 (no aplica a tutorías)."
		],
	};

	var funciona3 = {
		"titulo":"¿Cómo obtengo mis documentos de grados aprobados?",
		"contnido":"Por medio de nuestra plataforma se mantendrá la información permanente de los avances del estudiante y cuando este complete un grado en particular, será notificado y se le entregará sus respectivas constancias de aprobación."
	};

	var funciona4 = {
		"titulo":"¿En qué momento me puedo integrar al programa de estudio?",
		"contenido":"En cualquier momento, dada su naturaleza de principio, un alumno puede integrarse en el momento que lo desee y comenzar sus estudios."
	};

	var funciona5 = {
		"titulo":"¿Hay algún costo adicional?",
		"contenido":"Únicamente en el momento que el alumno se gradúa tiene un costo adicional de $60.00 por los trámites de acreditación consular del título. </br> Queda también pendientes, los costos del acto de graduación a llevarse a cabo en el país."
	};

	//Contenido de planDeEstudios.html
	app.controller('contentGrado', function(){
		this.contentGrado = gradoApp;
	})

	var gradoApp = 
	[
		{ // Grado
			"grado": 1,
			"materias":
			[
				{	//Materia
					"nombre": "Language Arts",
					"temas":
					[ // Temas de Materia
						"Listening skills and beginning reading",
						"Fairy tales",
						"Nursery rhymes",
						"Myths",
						"Riddles",
						"Aesop’s Fables",
						"Simple sentence writing",
						"Introduction to punctuation signs"
					]
				},
				{
					"nombre": "Math",
					"temas":
					[
						"Patterns and classifications",
						"Understanding numbers to 100",
						"Ordinal numbers",
						"Place Value",
						"Using Graphs",
						"Fractions",
						"Adding and subtracting simple problems"
					]
				},
				{
					"nombre":"Science",
					"temas":
					[
						"Living Things and Their Habitats: Deserts &oceans",
						"The Food Chain",
						"Dinosaurs",
						"Introduction to the body",
						"Matter",
						"Units of Measurement",
						"The Environment",
						"Plants",
						"Animals, ",
						"The solar system",
						"Measuring the seasons."
					]
				},
				{
					"nombre":"Social Science",
					"temas":
					[
						"An introduction to the Ice Age,",
						"Egypt",
						"Mesopotamia",
						"Hammurabi",
						"Crossing the Land Bridge",
						"Early American history",
						"World religions"
					]
				},
				{
					"nombre":"Fine Arts",

				}
			]	
		},
		{ 
			"grado": 2,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 3,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 4,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 5,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 6,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 7,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 8,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 9,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 10,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 11,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		},
		{ 
			"grado": 12,
			"materias":
			[ 
				{ //Materia
					"nombre": "",
					"temas":
					[
						// Temas de Materia
					]
				}
			]
		}
	]