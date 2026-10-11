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
    dato: "Escrita por los argentinos Ignacio Olivera y Juan Pablo Schapira, se presentó en Argentina, Chile, Perú, Panamá y República Dominicana.",
  },

  // foto: ruta dentro de img/elenco/ (ej. "img/elenco/rita.webp"), idealmente vertical.
  // Sin foto, muestra la inicial del personaje.
  elenco: [
    { personaje: "Rita", nombre: "", foto: "", instagram: "" },
    { personaje: "Diego", nombre: "", foto: "", instagram: "" },
    { personaje: "Clara", nombre: "", foto: "", instagram: "" },
    { personaje: "Germán", nombre: "", foto: "", instagram: "" },
    { personaje: "Alicia", nombre: "", foto: "", instagram: "" },
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
    { rol: "Comunicación y redes", nombres: [] },
    { rol: "Producción general", nombres: ["Brux Producciones"] },
  ],

  // Unas palabras de la dirección o de la producción. Párrafos separados por una línea en blanco.
  palabras: { texto: "", firma: "" },

  galeria: [
    { src: "img/fotos/foto-01-1600.webp", chica: "img/fotos/foto-01-800.webp", alt: "Detrás de escena de Mamá está más chiquita" },
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
