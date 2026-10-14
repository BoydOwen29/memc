// Elenco y banda, en el orden del video de presentación y con sus biografías (14/10/2026).
// "rol" de la banda: deducido de cada biografía, a confirmar.
window.PERSONAS = {
  elenco: {
    titulo: "El elenco",
    portada: "../img/burbujas/elenco-titulo.webp",
    pregunta: "¿Conocés quiénes están en escena?",
    vacia: "../img/burbujas/elenco-vacia.webp",
    gente: [
      { id: "diego", personaje: "Diego", nombre: "Bruno Maretto",
        bio: "Es actor, director y profesor teatral. Comenzó su formación a los 10 años, principalmente en el CCI María Castaña. Actualmente es profesor de Teatro por la Universidad Nacional de Córdoba y se encuentra en el tramo final de la Licenciatura. Trabajó con Pepe Cibrián Campoy en Dorothy y recorrió escenarios como el Teatro Real, la Sala de las Américas, la Ciudad de las Artes, el Teatro Comedia y el Teatro Verdi. Participó en más de 40 obras del circuito teatral cordobés." },
      { id: "rita", personaje: "Rita", nombre: "Gioia Falco",
        bio: "Técnica Productora en Medios Audiovisuales (UNC) y Técnica Instrumentista Musical en Canto Lírico (UPC), de registro mezzosoprano. Cuenta con una destacada trayectoria como actriz y cantante lírica. Protagonizó Dorothy, un mágico musical, y participó en Drácula, ambas producciones de Pepe Cibrián Campoy. También compartió escenario con Víctor Laplace en La pasión de Don Juan. Desde 2004 integra el Coro Polifónico de la Provincia de Córdoba, participando en numerosas óperas y producciones sinfónico-corales, también como solista." },
      { id: "clara", personaje: "Clara", nombre: "Loreley de Barberín",
        bio: "Es intérprete de teatro musical. Entre sus trabajos más destacados están el protagónico de Wendy, la aventura de crecer, con presentaciones en Córdoba y distintas localidades de la provincia, y su participación en el ensamble de bailarines de El principio del fin, que llegó al Quality de Córdoba y al Teatro Broadway de Buenos Aires. También formó parte de Camino Amarillo, una producción teatral infantil en Catamarca. Continúa sumando experiencias en el teatro musical, formando parte de nuevas propuestas escénicas." },
      { id: "german", personaje: "Germán", nombre: "Joel Aguirre",
        bio: "Es profesor de teatro e intérprete vocal y actoral, con formación en actuación frente a cámara. Participó en obras como Mamá está más chiquita, El principito, Las D'enfrente, Saverio el Cruel, High School Musical y El Club de las Bataclanas, entre otras. Musicalmente trabajó como solista vocal y en distintas bandas, en carnavales, bares, festivales y cumpleaños. En 2022 participó en la Performer Cup Argentina P.A.S.S., el campeonato argentino de artes escénicas, donde ganó las nacionales en las categorías \"artista completo\" e \"intérprete vocal\"." },
      { id: "alicia", personaje: "Alicia", nombre: "Sonia Daniel",
        bio: "Actriz, dramaturga, directora, docente y gestora cultural, con más de 40 años de trayectoria en el teatro. En 1995 fundó, junto a Leo Rey, el Centro Cultural Independiente María Castaña, espacio emblemático del teatro cordobés que continúa dirigiendo. Sus obras se estrenaron y publicaron en Argentina, Latinoamérica y Europa, y recibió numerosos premios y reconocimientos, entre ellos el Jerónimo de la Gente. Desde 1990 se dedica también a la formación teatral y es impulsora y directora del Festival Regional de Teatro Adolescente Vamos que Venimos – Córdoba." },
    ],
  },
  banda: {
    titulo: "La banda",
    vacia: "../img/burbujas/banda-vacia.webp",
    gente: [
      { id: "matias", personaje: "Arreglos y composición", nombre: "Matías Ardiles",
        bio: "Es músico, compositor, arreglador y productor musical. Inició su recorrido musical en 2010 y desde 2015 se dedica a la composición, explorando distintos lenguajes y géneros de la música popular. Se formó en la Universidad Nacional de Villa María y en La Colmena Escuela de Música, donde está terminando su tesis de composición. Participó como músico, compositor y arreglador en proyectos de Córdoba como Mister Pippa, La Garetto y Orenda Kilig, además de trabajar como músico sesionista y docente particular." },
      { id: "tobias", personaje: "Piano y guitarra", nombre: "Tobías Sarmiento",
        bio: "Es pianista, guitarrista, docente y arreglador. Inició su formación en el Conservatorio Provincial Félix T. Garzón y continuó en el Profesorado en Educación Musical de la Facultad de Artes de la UNC. Como docente desarrolla experiencias musicales con infancias y adolescencias en talleres, instituciones y orquestas populares. Integra El Rejunte Cordobés, conjunto de raíz folclórica con presentaciones en peñas y festivales de Córdoba, Alta Gracia y Cosquín." },
      { id: "gonzalo", personaje: "Violonchelo", nombre: "Gonzalo Di Giusto",
        bio: "Es violonchelista cordobés. Empezó sus estudios en 2016 en la Universidad Nacional de Córdoba, con Cristian Montes; después se perfeccionó con Stanimir Todorov y hoy continúa con Marcelo Montes. Entre 2017 y 2020 integró la Orquesta Juvenil del Teatro del Libertador General San Martín y en 2023 se sumó a la Orquesta Filarmónica de Córdoba. Participó del festival Gramado en Concierto (Brasil) y del Festival Latinoamericano de Cellos (Buenos Aires). Forma parte de la Filarmónica y del Ensamble Foco." },
      { id: "fran", personaje: "Batería", nombre: "Fran Layús",
        bio: "Es músico, baterista y profesor de batería. Formó parte de proyectos como Poder Vivo (tributo a Rata Blanca), Diego Giannini (cantante de cuarteto) y Philharmonie Ensamble, entre otros. Tocó en escenarios importantes de Córdoba como Studio Theater, Ex Sala Formosa y Club Paraguay. Está cursando el segundo año de la Licenciatura en Composición Musical en la UNC." },
      { id: "pablo", personaje: "Guitarra", nombre: "Pablo Guzmán",
        bio: "Es músico, guitarrista, compositor y profesor. Se recibió de técnico instrumental en guitarra clásica en la E.S.P.E.A. N.º 1 de Santiago del Estero. Formó parte de proyectos como El tercer Guzmán y Sueño artificial, y participó en los Juegos Evita como guitarrista con su ensamble. Hizo arreglos para la empresa Cinema Sonum y compuso música para cortometrajes y distintos ensambles. Está cursando el último año de la Licenciatura en Composición Musical en la UNC." },
    ],
  },
};
