// Todo el texto del programa vive acá. Para cambiar algo, editá este archivo y recargá.
// Lo que queda vacío ("" o []) no se muestra.
// Mientras borrador sea true, lo que falta se ve en amarillo como "a confirmar".
// Antes de la función, pasarlo a false: lo pendiente desaparece.

window.MEMC = {
  borrador: false,

  obra: {
    titulo: "Mamá está más chiquita",
    autores: "de Ignacio Olivera & Juan Pablo Schapira",
    ciudad: "Córdoba",
    genero: "Teatro musical",
    duracion: "", // ej. "90 minutos, sin intervalo"
  },

  // Fechas en formato AAAA-MM-DD. El sitio resalta sola la función del día.
  funciones: [
    // { fecha: "2026-10-16", hora: "21:00", sala: "Nombre de la sala", direccion: "Calle 123, Córdoba", mapa: "https://maps.app.goo.gl/..." },
  ],
  funcionesTexto: "Viernes de octubre · 21 h", // se muestra mientras no haya fechas cargadas

  entradas: "", // link de venta de entradas

  // Va al final del programa, justo antes del "Gracias": cuando ya leyeron todo y la función está por empezar.
  bienvenida: {
    titulo: ["Está por", "empezar"],
    aviso: "Ahora sí: poné el celu en silencio y bajale el brillo. Cuando termine la función, el programa te espera acá.",
  },

  sinopsis: {
    // parafraseada de la reseña de Brisa Martínez para Criticario Teatral (https://www.instagram.com/p/DeaeJ9rj8Xr/)
    parrafos: [
      "Rita es la capitana de un barco de tres, y un día empieza a achicarse. Entonces sus hijos tienen que agrandarse de golpe: Diego y Clara salen a pelear contra dragones y miedos. Les toca sostener el timón, intentando que, aunque las olas golpeen fuerte, el barco siga flotando.",
      "Crecer es ocupar más lugar, y nadie te enseña a bajar de la fantasía al mundo de los grandes mientras todavía sos chico. Pero la aventura también tiene su belleza: aunque mamá esté cada vez más chiquita, los tres siguen navegando juntos.",
      "Con canciones y banda en vivo, una obra de teatro musical sobre la familia, el amor y las pérdidas.",
    ],
    sello: "Premio Hugo · Mejor musical off · 2016 ·",
    // foto grande que corta la sinopsis
    foto: { src: "img/obra/abrazo-1600.webp", chica: "img/obra/abrazo-800.webp", alt: "Diego y Clara abrazan a Rita" },
    dato: "Escrita por los argentinos Ignacio Olivera y Juan Pablo Schapira, se presentó en Argentina, Chile, Perú, Panamá y República Dominicana.",
  },

  // Elenco y banda en el orden del video de presentación. "id" es el nombre de sus imágenes: img/elenco/<id>.webp
  // (retrato sin fondo) e img/elenco/<id>-cara.webp (img/banda/ para la banda). Salen de material/retratos/ con
  // herramientas/retratos.py. Las biografías salen del video; el "rol" de la banda se dedujo de cada biografía.
  elenco: [
    { personaje: "Diego", nombre: "Bruno Maretto", id: "diego",
      bio: "Es actor, director y profesor teatral. Comenzó su formación a los 10 años, principalmente en el CCI María Castaña. Actualmente es profesor de Teatro por la Universidad Nacional de Córdoba y se encuentra en el tramo final de la Licenciatura. Trabajó con Pepe Cibrián Campoy en Dorothy y recorrió escenarios como el Teatro Real, la Sala de las Américas, la Ciudad de las Artes, el Teatro Comedia y el Teatro Verdi. Participó en más de 40 obras del circuito teatral cordobés." },
    { personaje: "Rita", nombre: "Gioia Falco", id: "rita",
      bio: "Técnica Productora en Medios Audiovisuales (UNC) y Técnica Instrumentista Musical en Canto Lírico (UPC), de registro mezzosoprano. Cuenta con una destacada trayectoria como actriz y cantante lírica. Protagonizó Dorothy, un mágico musical, y participó en Drácula, ambas producciones de Pepe Cibrián Campoy. También compartió escenario con Víctor Laplace en La pasión de Don Juan. Desde 2004 integra el Coro Polifónico de la Provincia de Córdoba, participando en numerosas óperas y producciones sinfónico-corales, también como solista." },
    { personaje: "Clara", nombre: "Loreley de Barberin", id: "clara",
      bio: "Es intérprete de teatro musical. Entre sus trabajos más destacados están el protagónico de Wendy, la aventura de crecer, con presentaciones en Córdoba y distintas localidades de la provincia, y su participación en el ensamble de bailarines de El principio del fin, que llegó al Quality de Córdoba y al Teatro Broadway de Buenos Aires. También formó parte de Camino Amarillo, una producción teatral infantil en Catamarca. Continúa sumando experiencias en el teatro musical, formando parte de nuevas propuestas escénicas." },
    { personaje: "Germán", nombre: "Joel Aguirre", id: "german",
      bio: "Es profesor de teatro e intérprete vocal y actoral, con formación en actuación frente a cámara. Participó en obras como Mamá está más chiquita, El principito, Las D'enfrente, Saverio el Cruel, High School Musical y El Club de las Bataclanas, entre otras. Musicalmente trabajó como solista vocal y en distintas bandas, en carnavales, bares, festivales y cumpleaños. En 2022 participó en la Performer Cup Argentina P.A.S.S., el campeonato argentino de artes escénicas, donde ganó las nacionales en las categorías \"artista completo\" e \"intérprete vocal\"." },
    { personaje: "Alicia", nombre: "Sonia Daniel", id: "alicia",
      bio: "Actriz, dramaturga, directora, docente y gestora cultural, con más de 40 años de trayectoria en el teatro. En 1995 fundó, junto a Leo Rey, el Centro Cultural Independiente María Castaña, espacio emblemático del teatro cordobés que continúa dirigiendo. Sus obras se estrenaron y publicaron en Argentina, Latinoamérica y Europa, y recibió numerosos premios y reconocimientos, entre ellos el Jerónimo de la Gente. Desde 1990 se dedica también a la formación teatral y es impulsora y directora del Festival Regional de Teatro Adolescente Vamos que Venimos – Córdoba." },
  ],
  elencoIntro: "¿Conocés quiénes están en escena?",

  banda: [
    { rol: "Dirección musical y bajo", nombre: "Matías Ardiles", id: "matias",
      bio: "Es músico, compositor, arreglador y productor musical. Inició su recorrido musical en 2010 y desde 2015 se dedica a la composición, explorando distintos lenguajes y géneros de la música popular. Se formó en la Universidad Nacional de Villa María y en La Colmena Escuela de Música, donde está terminando su tesis de composición. Participó como músico, compositor y arreglador en proyectos de Córdoba como Mister Pippa, La Garetto y Orenda Kilig, además de trabajar como músico sesionista y docente particular." },
    { rol: "Piano", nombre: "Tobías Sarmiento", id: "tobias",
      bio: "Es pianista, docente y arreglador. Inició su formación en el Conservatorio Provincial Félix T. Garzón y continuó en el Profesorado en Educación Musical de la Facultad de Artes de la UNC. Como docente desarrolla experiencias musicales con infancias y adolescencias en talleres, instituciones y orquestas populares. Integra El Rejunte Cordobés, conjunto de raíz folclórica con presentaciones en peñas y festivales de Córdoba, Alta Gracia y Cosquín." },
    { rol: "Violonchelo", nombre: "Gonzalo Di Giusto", id: "gonzalo",
      bio: "Es violonchelista cordobés. Empezó sus estudios en 2016 en la Universidad Nacional de Córdoba, con Cristian Montes; después se perfeccionó con Stanimir Todorov y hoy continúa con Marcelo Montes. Entre 2017 y 2020 integró la Orquesta Juvenil del Teatro del Libertador General San Martín y en 2023 se sumó a la Orquesta Filarmónica de Córdoba. Participó del festival Gramado en Concierto (Brasil) y del Festival Latinoamericano de Cellos (Buenos Aires). Forma parte de la Filarmónica y del Ensamble Foco." },
    { rol: "Batería", nombre: "Franco Layús", id: "fran",
      bio: "Es músico, baterista y profesor de batería. Formó parte de proyectos como Poder Vivo (tributo a Rata Blanca), Diego Giannini (cantante de cuarteto) y Philharmonie Ensamble, entre otros. Tocó en escenarios importantes de Córdoba como Studio Theater, Ex Sala Formosa y Club Paraguay. Está cursando el segundo año de la Licenciatura en Composición Musical en la UNC." },
    { rol: "Guitarra", nombre: "Pablo Guzmán", id: "pablo",
      bio: "Es músico, guitarrista, compositor y profesor. Se recibió de técnico instrumental en guitarra clásica en la E.S.P.E.A. N.º 1 de Santiago del Estero. Formó parte de proyectos como El tercer Guzmán y Sueño artificial, y participó en los Juegos Evita como guitarrista con su ensamble. Hizo arreglos para la empresa Cinema Sonum y compuso música para cortometrajes y distintos ensambles. Está cursando el último año de la Licenciatura en Composición Musical en la UNC." },
  ],
  bandaIntro: "La música, en vivo",


  // Números musicales, en orden: "Título" o { titulo: "…", quien: "Rita y Diego" }.
  // Si queda vacío, la sección no aparece.
  canciones: [],

  ficha: [
    { rol: "Libro", nombres: ["Ignacio Olivera"] },
    { rol: "Música y letras", nombres: ["Juan Pablo Schapira"] },
    { rol: "Dirección", nombres: ["Mailen Escudero"] },
    { rol: "Dirección musical", nombres: ["Matías Ardiles"] },
    { rol: "Asistencia de producción y redes", nombres: ["Valentina Marino", "Martina Vargas"] },
    { rol: "Iluminación", nombres: ["Hernán Córdoba"] },
    { rol: "Sonido", nombres: ["Manuel Camiletti"] },
  ],

  // Unas palabras de la dirección o de la producción. Párrafos separados por una línea en blanco.
  palabras: { texto: "", firma: "" },

  // fotos de la función (material/asi-se-vive/); vertical: true para las fotos paradas (se muestran más angostas)
  galeria: [
    { src: "img/vive/vive-01-1600.webp", chica: "img/vive/vive-01-800.webp", alt: "Diego, Rita y Clara: los piratas al ataque" },
    { src: "img/vive/vive-02-1600.webp", chica: "img/vive/vive-02-800.webp", alt: "Rita y Diego" },
    { src: "img/vive/vive-03-1600.webp", chica: "img/vive/vive-03-800.webp", alt: "Rita baila con Diego" },
    { src: "img/vive/vive-04-1600.webp", chica: "img/vive/vive-04-800.webp", alt: "Diego en su mundo de fantasía" },
    { src: "img/vive/vive-05-1600.webp", chica: "img/vive/vive-05-800.webp", alt: "Clara y Diego en la mesa" },
    { src: "img/vive/vive-06-1600.webp", chica: "img/vive/vive-06-800.webp", alt: "Rita en el centro de la escena" },
    { src: "img/vive/vive-07-1600.webp", chica: "img/vive/vive-07-800.webp", alt: "Clara y Diego" },
    { src: "img/vive/vive-08-1600.webp", chica: "img/vive/vive-08-800.webp", alt: "La familia a la mesa" },
    { src: "img/vive/vive-09-1600.webp", chica: "img/vive/vive-09-800.webp", alt: "Clara abraza a Rita" },
    { src: "img/vive/vive-10-1600.webp", chica: "img/vive/vive-10-800.webp", alt: "Diego hace la tarea con Clara y Alicia" },
    { src: "img/vive/vive-11-1600.webp", chica: "img/vive/vive-11-800.webp", alt: "El saludo final" },
    { src: "img/vive/vive-12-1600.webp", chica: "img/vive/vive-12-800.webp", alt: "El elenco con el público" },
  ],

  cierre: {
    titulo: ["Gracias", "por venir"],
    texto: "Si te gustó, contale a alguien. El teatro independiente se sostiene de boca en boca.",
  },

  redes: {
    obra: "", // Instagram de la obra, si tiene
    productora: "https://www.instagram.com/brux.producciones/",
    tiktok: "https://www.tiktok.com/@brux.producciones",
  },

  credito: { texto: "Programa digital · Capra Labs", url: "https://capralabsdata.com" },
};
