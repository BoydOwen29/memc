// Todo el texto del programa vive acá. Para cambiar algo, editá este archivo y recargá.
// Lo que queda vacío ("" o []) no se muestra.
// Mientras borrador sea true, lo que falta se ve en amarillo como "a confirmar".
// Antes de la función, pasarlo a false: lo pendiente desaparece.

window.MEMC = {
  borrador: true,

  obra: {
    titulo: "Mamá está más chiquita",
    autores: "de Ignacio Olivera & Juan Pablo Schapira",
    ciudad: "Córdoba",
    genero: "Comedia musical",
    duracion: "", // ej. "90 minutos, sin intervalo"
  },

  // Fechas en formato AAAA-MM-DD. El sitio resalta sola la función del día.
  funciones: [
    // { fecha: "2026-10-16", hora: "21:00", sala: "Nombre de la sala", direccion: "Calle 123, Córdoba", mapa: "https://maps.app.goo.gl/..." },
  ],
  funcionesTexto: "Viernes de octubre · 21 h", // se muestra mientras no haya fechas cargadas

  entradas: "", // link de venta de entradas

  bienvenida: {
    titulo: ["Bienvenidos", "a la función"],
    aviso: "Poné el celu en silencio y bajale el brillo. El programa te espera acá para cuando termine.",
  },

  sinopsis: {
    pendiente: true, // borrador escrito por nosotros: reemplazar por el texto oficial
    parrafos: [
      "Rita cría sola a sus dos hijos. Diego vive en un mundo de fantasía que le ganó lugar a la realidad. Clara quiere despegarse de una madre que la protege de más y vivir su propia historia.",
      "Un día llega una noticia imposible: Rita empieza a achicarse. Mientras mamá se hace cada vez más chiquita, la familia tiene que aprender a cuidarse de otra manera.",
      "Una comedia musical sobre el amor, el paso del tiempo y los vínculos que nos sostienen.",
    ],
    sello: "Premio Hugo · Mejor musical off · 2016 ·",
    // foto grande que corta la sinopsis
    foto: { src: "img/fotos/prensa-01-1600.webp", chica: "img/fotos/prensa-01-800.webp", alt: "Rita con sus hijos y el resto de la familia" },
    dato: "Escrita por los argentinos Ignacio Olivera y Juan Pablo Schapira, se presentó en Argentina, Chile, Perú, Panamá y República Dominicana.",
  },

  // foto: ruta dentro de img/elenco/ (ej. "img/elenco/rita.webp"), idealmente vertical.
  // Sin foto, muestra la inicial del personaje.
  // Las fotos salen de las publicitarias (Drive "Audiovisuales MEMC"); qué actor hace cada personaje se dedujo
  // por el vestuario: confirmarlo cuando pasen los nombres.
  elenco: [
    { personaje: "Rita", nombre: "", foto: "img/elenco/rita.webp", instagram: "" },
    { personaje: "Diego", nombre: "", foto: "img/elenco/diego.webp", instagram: "" },
    { personaje: "Clara", nombre: "", foto: "img/elenco/clara.webp", instagram: "" },
    { personaje: "Germán", nombre: "", foto: "img/elenco/german.webp", instagram: "" },
    { personaje: "Alicia", nombre: "", foto: "img/elenco/alicia.webp", instagram: "" },
  ],

  // Números musicales, en orden: "Título" o { titulo: "…", quien: "Rita y Diego" }.
  // Si queda vacío, la sección no aparece.
  canciones: [],

  ficha: [
    { rol: "Libro", nombres: ["Ignacio Olivera"] },
    { rol: "Música y letras", nombres: ["Juan Pablo Schapira"] },
    { rol: "Dirección", nombres: [] },
    { rol: "Dirección musical", nombres: [] },
    { rol: "Coreografía", nombres: [] },
    { rol: "Escenografía", nombres: [] },
    { rol: "Vestuario", nombres: [] },
    { rol: "Diseño de luces", nombres: [] },
    { rol: "Diseño gráfico", nombres: [] },
    { rol: "Fotografía", nombres: [] },
    { rol: "Comunicación y redes", nombres: [] },
    { rol: "Producción general", nombres: ["Brux Producciones"] },
  ],

  // Unas palabras de la dirección o de la producción. Párrafos separados por una línea en blanco.
  palabras: { texto: "", firma: "" },

  // vertical: true para las fotos paradas (se muestran más angostas)
  galeria: [
    { src: "img/fotos/prensa-02-1600.webp", chica: "img/fotos/prensa-02-800.webp", alt: "Rita abraza a Clara" },
    { src: "img/fotos/prensa-03-1600.webp", chica: "img/fotos/prensa-03-800.webp", alt: "Diego y Clara jugando a los piratas con Rita", vertical: true },
    { src: "img/fotos/prensa-04-1600.webp", chica: "img/fotos/prensa-04-800.webp", alt: "Diego y Clara abrazan a Rita" },
    { src: "img/fotos/prensa-05-1600.webp", chica: "img/fotos/prensa-05-800.webp", alt: "Diego y Clara", vertical: true },
    { src: "img/fotos/prensa-06-1600.webp", chica: "img/fotos/prensa-06-800.webp", alt: "Germán y Clara", vertical: true },
    { src: "img/fotos/prensa-07-1600.webp", chica: "img/fotos/prensa-07-800.webp", alt: "Los piratas al ataque", vertical: true },
    { src: "img/fotos/prensa-08-1600.webp", chica: "img/fotos/prensa-08-800.webp", alt: "El equipo de Mamá está más chiquita" },
  ],

  cierre: {
    titulo: ["Gracias", "por venir"],
    texto: "Si te gustó, contale a alguien. El teatro independiente se sostiene de boca en boca.",
  },

  redes: {
    obra: "", // Instagram de la obra, si tiene
    productora: "https://www.instagram.com/brux.producciones/",
  },

  credito: { texto: "Programa digital · Capra Labs", url: "https://capralabsdata.com" },
};
