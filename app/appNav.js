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
		/*},{
			"name":"Costos",
			"link":"costos.html"*/
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
	}

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
		this.titulo = "Plan de Estudios";
		this.contentGrado = gradoApp;
	})

	var gradoApp = 
	[
		{
			"name": "Grade 1",
			"number":1,
			"math" :
			{
				"name": "Math",
				"themes":
				[
					"Focusing on math review including basic addition and subtraction problems with 2- and 3-digit numbers ",
					"Multiplication problems as repeated addition problems",
					"Multiplication tables",
					"Understanding numbers to 1,000 by various ways of counting, adding and subtracting horizontally and vertically",
					"Telling time",
					"Measuring",
					"Regrouping",
					"Beginning geometry",
					"Fractions",
					"Multiplication"
				]
			},
			"language":
			{
				"name": "Language Arts",
				"themes" : 
				[
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
			"science":
			{
				"name": "Science",
				"themes":
				[
					"General Science",
					"Living Things and Their Habitats: Deserts &oceans",
					"The Food Chain",
					"Dinosaurs",
					"Introduction to the body",
					"Matter",
					"Units of Measurement",
					"The Environment",
					"Plants",
					"Animals,",
					"The solar system",
					"Measuring the seasons"
				]
			},
			"social":
			{
				"name": "Social Science",
				"themes":
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
			"arts":
			{
				"name":"Fine Arts",
				"themes":
				[
					"Visual art history",
					"Color, Drawing",
					"Shapes, Texture",
					"Portraits, Murals",
					"Orchestra instruments",
					"The Orchestra",
					"Great Composers",
					"Dance ",
					"Music"
				]
			}
		},
		{
			"name": "Grade 2",
			"number":2,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Focusing on math review including basic addition and subtraction problems with 2- and 3-digit numbers",
					"Multiplication problems as repeated addition problems",
					"Multiplication tables",
					"Understanding numbers to 1,000 by various ways of counting, adding and subtracting horizontally and vertically",
					"Telling time",
					"Measuring",
					"Regrouping",
					"Beginning geometry",
					"Fractions",
					"Multiplication"
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Learning to develop basic reading skills",
					"Vocabulary",
					"Reading for information using classic children stories including: Cinderella, A Christmas Carol, Hansel and Gretel, Peter Pan, and Greek and Roman myth",
					"Enjoying poetry",
					"Sayings and phrases",
					"Beginning to understand parts of speech",
					"Sentences",
					"Using proper punctuation"
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Introducing the cycles of life from birth to death",
					"Zoology",
					"Botany",
					"Beginning with the seasons.",
					"Presenting experiments to see the world",
					"Understanding health and human growth",
					"Introduction to chemistry",
					"Physics",
					"Astronomy",
					"Earth science",
					"Meteorology"
				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"Beginning to use maps to find oceans, continents, and the four cardinal directions	",
					"Looking at geography	",
					"Early history of Mexico, Central America, South America, the Mediterranean countries, Africa, India, China.	",
					"Beginning American history to 1776	"
				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"Introducing music and the instruments in the orchestra",
					"Kinds of music",
					"Chopin",
					"Architecture of the Greeks",
					"Painters including: El Greco, Miro, Charles Demuth, Pieter Bruegel and Jan Vermeer",
					"Observing and appreciating sculpture and color.",
					"Acting in a play"
				]
			}
		},
		{
			"name": "Grade 3",
			"number":3,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Telling time",
					"Numbers and money into the 100,000's",
					"Multiplying and dividing numbers from six to nine",
					"Introduction to geometry, algebra and adding and subtracting number in the thousands",
					"Practicing mental addition",
					"Word problems",
					"Fractions",
					"Estimation"
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Developing and extending basic writing skills spelling rules, word derivations, word roots, parts of a sentence and parts of speech",
					"Reading biographies of famous people",
					"Alice's Adventures in Wonderland",
					"Pollyanna",
					"Sayings and phrases",
					"Myths and legends from all lands"
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Studying seeds and plants",
					"The balance of nature",
					"Pollution",
					"The brain",
					"Matter",
					"Earth's rocks",
					"Discussion of forces",
					"Atoms",
					"Machines",
					"Metals and electricity in the physical sciences",
					"Introducing chemistry and astronomy",
					"Gravity",
					"The solar system",
					"Comparing the earth and the moon",
					"Reading biographies of scientists: John Muir, Jane Goodall, Edward Jenner, and Elijah McCoy"
				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"Reading and using maps",
					"Globes and graphs",
					"The history of world civilizations including Ancient Rome, the Byzantine Empire, and Islam",
					"American Indian civilizations through early English settlements,",
					"History of the high civilizations of Africa to slavery",
					"Growth of the American colonies through The Declaration of Independence."
				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"Beginning study of music with instruments",
					"Percussion, tempo and rhythm",
					"Developing imagination",
					"Basic art techniques and art elements including design, mosaic, murals, patterns, lines, colors, quilt making, architecture and puppetry",
					"Meeting artists including Grandma Moses, George Gershwin, Aaron Copland, Duke Ellington, Diana Ross, Joan Baez, and Georgia O’Keeffe"
				]
			}
		},
		{
			"name": "Grade 4",
			"number":4,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Studying how to multiply and divide by two-digit numbers",
					"Three-digit numbers",
					"Practicing mental arithmetic with emphasis on place value, estimations, and checking of work",
					"Introducing basic geometry",
					"Working with decimals",
					"Roman numerals",
					"Probability, word problems",
					"Knowing how to convert units of measurement",
					"Working with fractions and money"
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Developing basic skills in reading",
					"vocabulary building",
					"recognizing parts of speech",
					"usage of subjects and predicate",
					"correct grammar",
					"Reading classics by Homer, Shakespeare, Cervantes, Robert Lewis Stevenson, Washington Irving, and Mark Twain",
					"Legends, speeches, and poetry"
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Discussing the history of the earth, rocks, and fossils",
					"Sources of energy; weather; electricity and magnets",
					"Fossil fuels",
					"Hydroelectricity",
					"Electric power from nuclear fission",
					"Solar energy",
					"Geothermal energy",
					"Health",
					"Respiratory and circulatory systems",
					"Personal hygiene",
					"Introduction to noted scientists."
				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"Focusing on world geography",
					"Map reading",
					"Prominent physical features",
					"Historical events from the Stone Age, through the Middle Ages to the Renaissance",
					"American history from the Revolution to the Civil War"

				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"Studying music including basic keyboard, chords, and chord progressions",
					"Famous paintings, artists and cartoonists",
					"Introduction to architecture and cathedrals",
					"Masters of art including Brunelleschi, Michelangelo, Raphael, Leonardo da Vinci, Van Eyck, Rembrandt, Jacques-Louis David, and cartoonists including Shultz, Davis and Nash"
				]
			}
		},
		{
			"name": "Grade 5",
			"number":5,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Reviewing math skills including:",
					"addition",
					"multiplication",
					"division",
					"mixed numbers",
					"numbers to billions",
					"decimals",
					"tables and graphing",
					"geometric figures",
					"multiplying and dividing fractions",
					"areas",
					"word problems",
					"functions",
					"equations",
					"ratios"
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Comprehension and interpretation in reading fables, myths, non-fiction writing and classics including Tom Sawyer, Julius Caesar, Don Quixote, and Homer's Iliad and Odyssey",
					"Vocabulary",
					"Syllables",
					"Word division",
					"Capitalization",
					"Abbreviations",
					"Parts of speech",
					"Verb tenses",
					"Writing poetry",
					"Original stories"
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Studying animal, matter and plant classification",
					"Reproduction in plants and animals",
					"Weather and climate patterns",
					"Photosynthesis",
					"Physics",
					"Energy",
					"Engines",
					"Electricity",
					"Power",
					"Stars",
					"Earth's structure",
					"Health and personal hygiene."
				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"Clarifying map skills",
					"Early American histor including the first explorers, colonization, independence, the Civil War, Reconstruction, expansion into the wild west, immigration",
					"History of early twentieth century of the United States",
					"Introducing European history including: the Renaissance, the Reformation, the growth of English power, the Enlightenment, revolutions of France",
					"Discussing Japan, Russia"
				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"Exploring music",
					"Harmony",
					"Melody",
					"The keyboards",
					"The orchestra",
					"Musicians including Mozart, Rossini and Sousa",
					"The history of painting and biographies of great artists including Ingres, Delacroix, El Greco, Michelangelo, Raphael, and Leonardo de Vinci",
					"Reviewing architecture including the study of buildings such as The Palace of Versailles, Saint Paul’s Cathedral, Moorish style, and buildings by Inigo Jones, John Soane, Mies van der Rohe, Louis Sullivan, Frank Lloyd Wright, and Walter Gropius",
				]
			}
		},
		{
			"name": "Grade 6",
			"number":6,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Place value",
					"Estimation",
					"Properties",
					"Division",
					"Decimals",
					"Fractions",
					"Reciprocals",
					"Expressions",
					"Exponents",
					"Exponent notation",
					"Order of operations",
					"Frequency tables",
					"Adding and subtracting units of time",
					"Percents",
					"Introduction to geometry",
					"Integers",
					"Coordinate graphing"
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Improving comprehension and reading using Romeo and Juliet, Oliver Twist, The Secret Garden, Animal Farm, and The Diary of Anne Frank",
					"Poetry, myths, phrases, sayings and other adventure and mystery classics",
					"Studying daily vocabulary",
					"Commonly misspelled words",
					"How to write original compositions, reports, poetry, friendly and business letters including sentence structure, parts of speech, and research skills"
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Examining the classifying of life forms",
					"Reproduction",
					"Heredity",
					"Genetics",
					"Matter",
					"Space",
					"Light",
					"Sound",
					"Energy sources",
					"Body systems",
					"Crust history",
					"Electricity",
					"Chemistry",
					"Plant reproduction",
					"Health and personal hygiene",
					"Introducing scientists"
				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"Studying maps with focus on vegetation, minerals, demographics, weather and economy of Asia, Africa, Australia, New Zealand, and the Pacific Islands",
					"Examining ancient history including the civilizations of Egypt, Greece, Southwest Asia, Rome, and Europe",
					"The Middle Ages",
					"The revolutions of Latin America",
					"The discovery of Americ",
					"The industrial revolution",
					"The British Empire",
					"Missionaries",
					"Explorers",
					"World War I",
					"The depression",
					"World War II",
					"The twentieth century"
				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"Studying the musical keyboard",
					"Chords",
					"Patterns in music",
					"Musicians including Aaron Copland, Mozart, Gershwin, Joplin, Berlin, and Chopin.",
					"Looking at the visual arts and the artists including Tanner, Homer, van Gogh, Monet, Rodin, Kandinsky, Munch, Picasso, Mondrian, Hopper, Wyeth, and Frank Lloyd Wright",
					"Examining dance with Stravinsky's Rite of Spring"
				]
			}
		},
		{
			"name": "Grade 7",
			"number":7,
			"math": 
			{
				"name":"Math",
				"themes":
				[
				"Math skill review with standard form, exponential form, factors, equalities and inequalities, variables and formulas, prime factorization, square roots, estimating, order of operations, decimals, geometry, the metric system and percents."
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Guided reading of children's classics including The Red Pony, biographies, short stories, non-fiction, myths, comprehension and interpretation with daily spelling and vocabulary",	
				"Discussion of descriptive, narrative writing and poetry writing, focusing on the planning and outlining of an essay",	
				"Discussion of diagramming simple, compound and complex sentences with emphasis on punctuation and a review of the parts of speech."
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Focus on the scientific method",	
					"Elementary physics",	
					"Solids",	
					"Liquids",	
					"Gases",	
					"Heat",	
					"Magnetism",	
					"Atoms",	
					"Electricity",	
					"Engines",	
					"Inertia",	
					"Fire",	
					"Weather",	
					"Photosynthesis",	
					"Composting",	
					"Friction",	
					"Sound",	
					"Environmental issues",	
					"Health and personal hygiene",	
				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"The study of maps",	
					"Climate",	
					"Landforms",	
					"Vegetation",	
					"Minerals",	
					"Rivers",	
					"Economies of Europe, the former Soviet Union, Oceania, Antarctica, Australia, New Zealand, North America, South America, India and Asia."
				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"The art of the theatre",	
					"Music appreciation with a look at great musicians including Haydn, Bach, Rimsky-Korsakov, Mozart, Gershwin, Rachmaninoff, Chopin, Beethoven, and Tchaikovsky",	
					"Appreciation of great visual artists, including Michelangelo, Monet, O'Keeffe, Rembrandt, Cassatt , John Singer Sargent, and Leonardo da Vinci",	
				]
			}
		},
		{
			"name": "Grade 8",
			"number":8,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Problem solving",	
					"Introduction to algebra, exponents and power",	
					"Review of variables, expressions, and equations",	
					"Explore solving division and multiplication equations and two step equations",	
					"Geometry",	
					"Graphs and statistics",	
					"Symmetry",	
					"Prime factorization",	
					"Rational numbers and decimals",	
					"Discussion of square roots, scientific notation, ratio, proportion and percent, and probability."	
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Guided reading of literary classics of Shakespeare and Arthur Conan Doyle",	
					"improving comprehension and reading of authors: Hemingway, Frost, Isaac Bashevis Singer, Richard Wilbur, Saki, Plath, Keats, and Tennyson",	
					"Introduction to writing the five paragraph essay",	
					"Building spoken, reading and written vocabulary",	
					"Narrative, descriptive and explanatory writing",	
					"Proofreading",	
					"Story writing",	
					"Review of parts of speech"	
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					 "Review of the scientific method",	
					 "Design experiments",	
					 "Physics",	
					 "States of matter",	
					 "The heat and motion connection",	
					 "The study of the atom",	
					 "The periodic table",	
					 "Rational numbers and decimals",	
					 "Discussion of organic and inorganic material",	
					 "Solutions",	
					 "Concentration",	
					 "Acids and bases",	
					 "Waves",	
					 "Frequency and pitch",	
					 "The optics of lenses",	
					 "Electricity",	
					 "Matter",	
					 "Energy",	
					 "Electricit",	
					 "Nuclear sources of energy",
				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"The responsibilities and privileges of citizenship",	
					"The history of America's government",	
					"National, state and local government's responsibilities to citizens",	
					"The political party system",	
					"Voting",	
					"Nominating candidates",	
					"Elections",	
					"How a bill becomes a law",	
					"How the Congress, courts and executive branch of the government work",	
					"How our economic system operates",	
				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"History of American home entertainment from the games and songs of the colonists to the computers and iPods of the twenty-first century",	
					"Frescos",	
					"The marches of John Phillip Sousa",	
					"The photography of Brady, Jackson, and Hine."
				]
			}
		},
		{
			"name": "Grade 9",
			"number":9,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Algebra I: ",
					"Evaluating Expressions",	
					"Writing Equations and Inequalities",	
					"Math Properties",	
					"History of Algebra",	
					"Equations & Inequalities",	
					"Graphing",	
					"Systems of Equations",	
					"Polynomials",	
					"Radicals"
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Grade appropriate vocabulary, reading, writing, and grammar studies, including stories, essays, poems and prose by: ",	
					"O. Henry",	
					"Walt Whitman",	
					"Langston Hughes",	
					"Edgar Allan Poe",	
					"Jack London",	
					"Anton Chekhov",	
					"Shirley Jackson",	
					"Dorothy Canfield Fisher",	
					"William Shakespeare",	
					"Carl Sandburg",	
					"E. E. Cummings",	
					"David Wagoner",	
					"Robert Herrick",
					"Homer",	
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Physical & Earth Science: ",	
					"Measurement",	
					"Scientific Methods",	
					"Variables and Control in Experiments",	
					"Atoms and Matter",	
					"Minerals / Crystals",	
					"Technology",	
					"Intro to The Rock Cycle",	
					"Maps / Map Projections",	
					"Landforms",	
					"Soil",	
					"Weathering",	
					"Erosion",	
					"Glaciers",	
					"Wind",	
					"Water Erosion",	
					"Groundwater",	
					"Continental Drift",	
					"Seafloor Spreading",	
					"Plate Tectonics",	
					"Earthquakes",	
					"Volcanoes",	
					"Relative and Absolute Ages of Rocks",	
					"Evolution and Geologic Time",	
					"Early Earth History",	
					"Fossils",	
					"Extinction of Dinosaurs",	
					"Earth's Atmosphere",	
					"The Ozone Layer",	
					"The Water Cycle",	
					"Weather Patterns",	
					"Severe Weather",	
					"Climate & Climate Changes",	
					"Pollution",	
					"Population Impact on the Environment",	
					"Using the Land",	
					"Oceans",	
					"The Moon",	
					"The Solar System",	
					"Radiation from Space",	
					"Electromagnetic Radiation",	
					"Telescopes, Satellites",	
					"Contemporary Issues in Physical & Earth Science"
				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"World History I",	
					"What is History and How is it Understood",	
					"Earliest Civilizations",	
					"Greek Civilization",	
					"Roman Civilization",	
					"Indian Civilization",	
					"Chinese Civilization",	
					"Byzantine Empire",	
					"Islamic Civilization",	
					"African Civilizations",	
					"Pre-Columbian Civilizations of the Americas",	
					"The Fall of Rome and its Effects",	
					"The Late Middle Ages and The Renaissance",	
					"Reformation and The Age of Absolutism",	
					"European Exploration and the Beginnings of Global Trade",	
					"The Effects of European Exploration",	
					"European Colonialism After the Age of Exploration and its Effects",	
					"Revolution in Europe, Russia, Africa, Asia, and Latin America",	
					"World War I and WWII",	
					"The Holocaust",	
					"The Rise of Fascism",	
					"Joseph Stalin",	
					"The Aftermath of World War II and Beyond"
				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"Lascaux Caves",	
					"The Mythical Story of Romulus and Remus and the Naming of Rome",	
					"The Terracotta Army",	
					"The Hagia Sophia",	
					"Tuvan Throat Singing",	
					"West Africa (Benin) in the 16th Century",	
					"Mayan Writing and Hieroglyphics",	
					"Iroquois and the Longhouse",	
					"Byzantine Art",	
					"Giotto and The Gates of Paradise",	
					"Perspective and Perspective Machines",	
					"Inca Architecture",	
					"The Art of Azulejo",	
					"Classical Gardens of Versailles",	
					"Faberge Easter Eggs and the Russian Revolution",	
					"Diego Rivera and Mexican Nationalism",	
					"Art During World War I: A Portrait",	
					"Creating Music During War: Claude Debussy",	
					"Symbolism",	
					"Naum Gabo",	
					"Alberto Giacometti",	
					"Degenerate Art ",	
					"Holocaust Films",	
					"Futurism",	
					"Intonarumori",	
					"Socialist Realism"	
		
				]
			}
		},
		{
			"name": "Grade 10",
			"number":10,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Geometry: ",	
					"Lines, Line Segments, Rays and Angles",
					"Angle Measures",
					"Classifying Angles",
					"Angle Relationships",
					"Parallel Lines",
					"Triangles",
					"SSS, SAS, ASA, AAS and HL Congruence",
					"Angle Bisectors",
					"Medians and Centroids",
					"Quadrilaterals",
					"Polygons",
					"The Pythagorean Theorem",
					"Solids",
					"Volume and Surface Area: Prisms",
					"Spheres",
					"Circles",
					"Arcs and Central Angles",
					"Transformations",
					"Constructions",
					"History of Geometry"	

				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Grade appropriate vocabulary, reading, writing, and grammar studies, including:",	
					"Twelve Angry Men",
					"Animal Farm",
					"To Kill and Mockingbird",
					"Cold Equations",
					"Mr. Parker",
					"Julius Caesar",
					"The Pedestrian",
					"With All Flags Flying",
					"Of Mice and Men",
					"Antigone"
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Biology: ",
					"Introduction to Biology",
					"Branches of Biology",
					"The Scientific Method",
					"Matter",
					"Chemical Reactions",
					"Water, Mixtures, Solutions, Suspensions",
					"The Cell Theory",
					"Cells and their Parts",
					"DNA",
					"RNA",
					"Cell Growth",
					"Genetics",
					"Heredity",
					"The Human Organism",
					"Food and Nutrition",
					"Organs",
					"Development"	

				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"American History I:",
					"The history of the United States from its founding to The Civil War 	",
					"Themes of American democracy, civil rights, liberties, economic development, technology, cultural diversity and family life. "	

				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"Global Art Connections I:",
					"An eclectic look at the history of art including: Islamic art, the architecture of Frank Lloyd Wright, the Baroque, the Impressionists, early Renaissance artists to the greats of the Renaissance. ",
					"Seventeenth, eighteenth and nineteenth century artists including Rembrandt, Gainsborough, Ingress, Delacroix, Goya, Blake, David, Turner, Constable, Manet, Degas, and Renoir."
				]
			}
		},
		{
			"name": "Grade 11",
			"number":11,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Algebra II / Statistics:",
					"Intermediate to advanced algebra skills including expressions, equations, functions, rational numbers, linear equations, proportional reasoning, graphing, polynomials, quadratic and exponential functions."
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Guided reading of American literature, including Our Town and Glass Menagerie, with poets, novelists and short story writers' techniques examined	",
					"Daily spelling and vocabulary",
					"Persuasive and expository writing and outlining",
					"Writing grammatically correct essays"
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Chemistry / Social Health and Hygiene:",	
					"Chemistry and atoms",
					"Electrons",
					"Compounds",
					"Molecular substances",
					"The periodic table",
					"Equations",
					"Reactions",
					"Elements",
					"Gases",
					"Acids, bases, and pH",
					"Nuclear and organic chemistry",
					"Personal and social health and hygiene"
				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"American History II:",	
					"The history of the United States since 1865 ",
					"Themes of American democracy, civil rights, liberties, economic development, technology, cultural diversity, family life and the United States' role in world affairs"
				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"The History of Painting & The History of Sculpture:",
					"The history of painting and sculpture during historical moments including: the Parthenon, The Baroque Style of Bernini, The Hudson River School, George Catlin, and Gustave Caillebotte",
					"The greats of Medieval art including: Fra Filippo Lippi, Francois Duquesnoy, Gregorio Fernandez, Andrea Pisano, and Fra Angelico",
					"American artists from the nineteenth century",
					"American artists from the twentieth century"
				]
			}
		},
		{
			"name": "Grade 12",
			"number":12,
			"math": 
			{
				"name":"Math",
				"themes":
				[
					"Pre-calculus",
					"Trigonometric functions",
					"Graphs",
					"Equations",
					"Parametric equations",
					"Conics",
					"Exponential and logarithmic functions",
					"Calculus"
				]
			},
			"language": 
			{
				"name": "Language Arts",
				"themes":
				[
					"Guided reading of British literature including Macbeth",
					"World masterpieces including Dante's writing.",
					"Daily spelling, vocabulary, research and personal writing",
					"Review of parts of speech",
					"Online and library research techniques."
				]
			},
			"science": 
			{
				"name": "Science",
				"themes":
				[
					"Physics:",	
					"Physics",
					"Vectors",
					"Motion",
					"Momentum",
					"Thermal energy",
					"Waves",
					"Sound",
					"Light electromagnetic induction ",
					"Quantum theory",
					"Solid state electronics",
					"Community health"	

				]
			},
			"social":{
				"name": "Social Science",
				"themes":
				[
					"Economics:",	
					"Fundamental economic concepts",
					"Microeconomics",
					"Macroeconomics",
					"Economic institutions and policies",
					"International and global economics"	
				]
			},
			"arts":{
				"name": "Fine Arts",
				"themes": 
				[
					"History of Design:	",
					"Elements of design including repetition, variety, rhythm, balance, emphasis, economy, controlling attention, viewing angle, viewing distance, conveying an idea, and understanding and valuing what others have created",
					"Distinguishing between the fine arts and the applied arts",
					"Designed experiments for line, implied lines, positive and negative areas, descriptive line, shape and form"
				]
			}
		}
	]
/*
<<<<<<< HEAD
=======
	
>>>>>>> 281450ec975c5af0edd42dbb3b0a6a79d3b73c07
*/

//Contenido de graduacionesUSDE.htl

app.controller('contentUSDE', function(){
		this.content = USDE;
	})


var USDE = {
	"titulo":"Graduaciones USDE",
	"contenido":[
	"Todos nuestros estudiantes obtienen certificaciones de estudio o títulos de graduación avalados por el sistema de Educación Americano, lo cual les facilita el ingreso a universidades en USA.",
	"Además los títulos son validados para el ingreso en cualquier universidad privada dentro del territorio centroamericano.",
	],
	"articulo":{
		"titulo": "Entrar a Universidades Americanas",
		"parrafo":"Contamos con todo el soporte y seguimiento para que nuestros egresados puedan ingresar a la universidad poniendo su disposición programas de refuerzo como TOEFL y SATs."
	},
	"universidades":{
		"titulo":"Listado de Universidades",
		"lista":[
		"Adelphi U. NY",
		"Agnes Scott C. GA",
		"Albertson C. ID",
		"Albion C. MI",
		"Alfred U. NY",
		"Allegheny C. PA",
		"Alverno C. WI",
		"American U. DC",
		"Amherst C. MA",
		"Antioch C. OH",
		"Arizona State U. AZ",
		"Asbury C. KY",
		"Assumption C. MA",
		"Auburn U. AL",
		"Augustana C. IL",
		"Austin C. TX",
		"Baylor U. TX",
		"Beloit C. WI",
		"Bemidji State U. MN",
		"Bennington C. VT",
		"Berea C. KY",
		"Berklee C. of Music MA",
		"Berry C. GA",
		"Bethany C. WV",
		"Bethel C. MN",
		"Biola U. CA",
		"Birmingham-Southern C. AL",
		"Boston C. MA",
		"Boston Conservatory MA",
		"Boston U. MA",
		"Bowdoin C. ME",
		"Bradley U. IL",
		"Brandeis U. MA",
		"Brigham Young U. UT",
		"Brown U. RI",
		"Bryn Mawr C. PA",
		"Bucknell U. PA",
		"Buena Vista U. IA",
		"Butler U. IN",
		"California Institute of Technology CA",
		"California Polytechnic State U. CA",
		"California State U. Los Angeles CA",
		"Calvin C. MI",
		"Capital U. OH",
		"Carleton C. MN",
		"Carnegie Mellon U. PA",
		"Carroll C. MT",
		"Case Western Reserve U. OH",
		"Catholic U. of America DC",
		"Cedarville C. OH",
		"Central C. IA",
		"Christian Brothers U. TN",
		"Claremont McKenna C. CA",
		"Clemson U. SC",
		"Coe C. IA",
		"Colby C. ME",
		"C. of St. Benedict MN",
		"C. of St. Scholastica MN",
		"C. of the Atlantic ME",
		"C. of William and Mary VA",
		"C. of Wooster OH",
		"Colorado C. CO",
		"Colorado School of Mines CO",
		"Colorado State U. CO",
		"Concordia C. Moorhead, MN",
		"Cornell C. IA",
		"Cornell U. NY",
		"Creighton U. NE",
		"Dartmouth C. NH",
		"David Lipscomb U. TN",
		"Davidson C. NC",
		"Delaware Valley C. PA",
		"Denison U. OH",
		"DePaul U. IL",
		"DePauw U. IN",
		"Dickinson C. PA",
		"Drake U. IA",
		"Drew U. NJ",
		"Drexel U. PA",
		"Duke U. NC",
		"Duquesne U. PA",
		"Earlham C. IN",
		"Eckerd C. FL",
		"Edinboro U. of Pennsylvania PA",
		"Elizabethtown C. PA",
		"Emory U. GA",
		"Evergreen State C. WA",
		"Fashion Institute of Technology NY",
		"Florida Institute of Technology FL",
		"Franciscan U. of Steubenville OH",
		"Franklin and Marshall C. PA",
		"George Fox U. OR",
		"George Mason U. VA",
		"George Washington U. DC",
		"Georgetown U. DC",
		"Georgia Institute of Technology GA",
		"Gettysburg C. PA",
		"Goddard C. VT",
		"Gordon C. MA",
		"Goshen C. IN",
		"Goucher C. MD",
		"Grinnell C. IA",
		"Grove City C. PA",
		"Guilford C. NC",
		"Gustavus Adolphus C. MN",
		"Hampshire C. MA",
		"Hanover C. IN",
		"Harvey Mudd C. CA",
		"Hastings C. NE",
		"Haverford C. PA",
		"Hillsdale C. MI",
		"Hobart and William Smith Colleges NY",
		"Hood C. MD",
		"Hope C. MI",
		"Houghton C. NY",
		"Humboldt State U. CA",
		"Illinois Institute of Technology IL",
		"Illinois Wesleyan U. IL",
		"Indiana U., Bloomington IN",
		"Iowa State U. IA",
		"Ithaca C. NY",
		"James Madison U. VA",
		"John Brown U. AR",
		"Johns Hopkins U. MD",
		"Juniata C. PA",
		"Kalamazoo C. MI",
		"Kansas State U. KS",
		"Kenyon C. OH",
		"Kettering U. MI",
		"King C. TN",
		"Knox C. IL",
		"Lafayette C. PA",
		"Lake Forest C. IL",
		"Lawrence U. WI",
		"LeTourneau U. TX",
		"Lewis &amp; Clark C. OR",
		"Linfield C. OR",
		"Louisiana State U. and Agricultural and Mechanical C. LA",
		"Loyola C. MD",
		"Loyola U. Chicago IL",
		"Luther C. IA",
		"Macalester C. MN",
		"Marietta C. OH",
		"Marlboro C. VT",
		"Marquette U. WI",
		"Maryland Institute C. of Art MD",
		"Maryville C. TN",
		"Massachusetts Institute of Technology MA",
		"Messiah C. PA",
		"Miami U. OH",
		"Michigan Technological U. MI",
		"Middlebury C. VT",
		"Mills C. CA",
		"Montana State U.--Billings MT",
		"Montana State U.--Bozeman MT",
		"Montana Tech of the U. of Montana MT",
		"Mount Holyoke C. MA",
		"Muhlenberg C. PA",
		"Muskingtum C. OH",
		"New C. of the U. of South Florida FL",
		"New Mexico Institute of Mining and Technology (New Mexico Tech) NM",
		"New York U. NY",
		"North Carolina State U.",
		"North Central C. IL",
		"Northwestern C. IA",
		"Northwestern U. IL",
		"Oberlin C. OH",
		"Occidental C. CA",
		"Oglethorpe U. GA",
		"Ohio Northern U. OH ",
		"Ohio State U.: Columbus Campus OH",
		"Ohio U. OH",
		"Ohio Wesleyan U. OH",
		"Oklahoma City U. OK",
		"Oklahoma State U. OK",
		"Oregon State U. OR",
		"Ouachita Baptist U. AR",
		"Pacific Lutheran U. WA",
		"Pennsylvania State U. University Park Campus PA",
		"Pepperdine U. CA",
		"Philadelphia C. of Pharmacy and Science PA",
		"Polytechnic U. [yes] NY",
		"Pomona C. CA",
		"Princeton U. NJ",
		"Providence C. RI",
		"Purdue U. IN",
		"Radford U. VA",
		"Reed C. OR",
		"Regis U. CO",
		"Rensselaer Polytechnic Institute NY",
		"Rhode Island School of Design RI",
		"Rhodes C. TN",
		"Rice U. TX",
		"Ripon C. WI",
		"Rose-Hulman Institute of Technology IN",
		"Rutgers, State U. of New Jersey, Rutgers C. NJ",
		"Samford U. AL",
		"Sarah Lawrence C. NY",
		"Seattle U. WA",
		"Seton Hall U. NJ",
		"Shepherd C. [yes] WV",
		"Simmons C. MA",
		"Simon's Rock C. of Bard MA",
		"Smith C. MA",
		"Southern Methodist U. TX",
		"St. Andrews Presbyterian C. NC",
		"St. John's C. MD &amp; NM",
		"St. John's U. MN",
		"St. Joseph's C. ME",
		"St. Joseph's U. PA",
		"Saint Mary's C. IN",
		"St. Mary's C. of Maryland MD",
		"St. Norbert C. WI",
		"St. Olaf C. MN",
		"St. Vincent C. PA",
		"Stanford U. CA",
		"State U. of New York at Binghamton NY",
		"State U. of New York C. at Geneseo NY",
		"Stephens C. MO",
		"Stetson U. FL",
		"Swarthmore C. PA",
		"Sweet Briar C. VA",
		"Syracuse U. NY",
		"Taylor U. IN",
		"Temple U. PA",
		"Texas A &amp; M U., College Station TX",
		"Texas Christian U. TX",
		"Thomas Aquinas C. CA",
		"Trinity U. TX",
		"Tulane U. LA",
		"Union U. TN",
		"United States Air Force Academy Colorado Springs, CO",
		"United States Coast Guard Academy CT",
		"United States Military Academy West Point, NY",
		"United States Naval Academy Annapolis, MD",
		"U. of California: Riverside CA",
		"U. of California: Santa Cruz CA",
		"U. of Chicago IL",
		"U. of Cincinnati OH",
		"U. of Colorado at Boulder CO",
		"U. of Connecticut CT",
		"U. of Dallas TX",
		"U. of Dayton OH",
		"U. of Delaware DE",
		"U. of Denver CO",
		"U. of Evansville IN",
		"U. of Florida FL",
		"U. of Georgia GA",
		"U. of Idaho ID",
		"U. of Illinois IL",
		"U. of Iowa IA",
		"U. of Kansas KS",
		"U. of Kentucky KY",
		"U. of Maine, Farmington ME",
		"U. of Maine ME",
		"U. of Maryland MD",
		"U. of Massachusetts Amherst MA",
		"U. of Miami FL ",
		"U. of Michigan MI",
		"U. of Minnesota, Morris MN",
		"U. of Minnesota, Twin Cities MN",
		"U. of Missouri-Columbia MO",
		"U. of Missouri-Kansas City MO",
		"U. of Missouri-Rolla MO",
		"U. of Montana MT",
		"U. of Nebraska-Lincoln NE",
		"U. of New Hampshire NH",
		"U. of North Carolina at Asheville NC",
		"U. of North Carolina NC",
		"U. of North Dakota ND",
		"U. of Notre Dame IN",
		"U. of Oklahoma OK",
		"U. of Oregon OR",
		"U. of Pennsylvania PA",
		"U. of Pittsburgh PA ",
		"U. of Puget Sound WA",
		"U. of Redlands CA",
		"U. of Rhode Island RI",
		"U. of Rochester NY",
		"U. of St. Thomas MN",
		"U. of San Francisco CA",
		"U. of Southern California CA",
		"U. of Tennessee TN",
		"U. of Texas at Austin TX",
		"U. of the South",
		"U. of Utah UT",
		"U. of Vermont VT",
		"U. of Virginia VA",
		"U. of Washington WA",
		"U. of Wisconsin--Madison WI",
		"U. of Wyoming WY",
		"Ursinus C. PA",
		"Valparaiso U. IN",
		"Vanderbilt U. TN",
		"Vassar C. NY",
		"Villanova U. PA",
		"Virginia Polytechnic Institute and State U. VA",
		"Wabash C. IN",
		"Warren Wilson C. NC",
		"Wartburg C. IA",
		"Washington C. MD",
		"Washington U. MO",
		"Wellesley C. MA",
		"Wells C. NY",
		"Wesleyan U. CT",
		"West Virginia Wesleyan C. WV",
		"Westminster Choir C. of Rider U. NJ",
		"Westminster C. MO",
		"Wheaton C. IL",
		"Wheaton C. MA",
		"Whitman C. WA",
		"Whittier C. CA",
		"Willamette U. OR",
		"William Jewell C. MO",
		"Williams C. MA",
		"Wingate U. NC",
		"Winona State U. MN",
		"Wittenberg U. OH",
		"Wofford C. S ",
		"Yale U. CT"
		
		]
	}
	};