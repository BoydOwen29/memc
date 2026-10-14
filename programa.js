// Arma el programa a partir de contenido.js y le da movimiento.
// La versión se publica con herramientas/publicar.js, que la copia a los ?v= de index.html.
(function () {
  "use strict";
  const VERSION = "1.6";
  const D = window.MEMC;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const borrador = D.borrador !== false;
  const PEND = borrador ? '<span class="pendiente">a confirmar</span>' : "";
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ICONO_COMPARTIR = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v13M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>';
  const ICONO_IG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';

  // ---------- Título de la portada, armado en piezas ----------
  // Posiciones en % sobre el logo enderezado (ver img/titulo/_layout.json)
  const PIEZAS = [
    { n: "mama", l: 5.333, t: 0.116, w: 41.392, h: 39.721, tipo: "palabra", d: 150, dx: -18, dy: -30 },
    { n: "esta", l: 51.244, t: 0.116, w: 34.129, h: 39.837, tipo: "palabra", d: 260, dx: 22, dy: -40 },
    { n: "mas", l: 0.762, t: 42.625, w: 30.371, h: 39.954, tipo: "palabra", d: 380, dx: -40, dy: 10 },
    { n: "chiqu", l: 34.84, t: 49.593, w: 45.658, h: 39.954, tipo: "palabra", d: 490, dx: -6, dy: 30 },
    { n: "ta", l: 85.78, t: 50.058, w: 13.611, h: 32.172, tipo: "palabra", d: 600, dx: 70, dy: 20 },
    { n: "figura", l: 80.091, t: 52.962, w: 4.317, h: 29.965, tipo: "figura", d: 860 },
    { n: "cordoba", l: 75.216, t: 86.411, w: 24.784, h: 13.589, tipo: "cordoba", d: 1150, dx: 30, dy: 60 },
    { n: "autores", l: 0, t: 87.224, w: 55.51, h: 5.343, tipo: "autores", d: 1280, dx: -20, dy: 80 },
  ];
  const tituloObra = $("#tituloObra");
  tituloObra.insertAdjacentHTML("beforeend", PIEZAS.map((p) => {
    const img = `<img src="img/titulo/${p.n}.webp" alt="" decoding="async">`;
    return `<span class="pieza ${p.tipo}" style="--l:${p.l};--t:${p.t};--w:${p.w};--h:${p.h};--d:${p.d}ms;--dx:${p.dx || 0};--dy:${p.dy || 0}">${p.tipo === "figura" ? `<span class="f">${img}</span><i class="chispa"></i><i class="chispa"></i><i class="chispa"></i>` : img}</span>`;
  }).join(""));

  // ---------- Armado de secciones ----------
  const lineas = (arr, acentos = [1]) => arr.map((l, i) =>
    `<span class="l${acentos.includes(i) ? " acento" : ""}" style="--i:${i}"><span>${esc(l)}</span></span>`).join("");
  const titulo = (arr, acentos) => `<h2 class="titulo" data-reveal="lineas">${lineas(arr, acentos)}</h2>`;
  const kicker = (txt) => `<p class="kicker" data-reveal="sube"><span class="num">{{n}}</span><span class="raya"></span>${esc(txt)}</p>`;
  const secciones = [];
  const agregar = (id, nombre, tono, html, extra = "") => secciones.push({ id, nombre, tono, html, extra });

  const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const hoy = (() => { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); })();

  // 02 · La obra
  if (D.sinopsis && D.sinopsis.parrafos.length) {
    const s = D.sinopsis;
    const claves = /^(achicarse|chiquita|imposible|amor)/i;
    const palabras = (t) => esc(t).split(/\s+/).map((w) => `<span class="w${claves.test(w) ? " clave" : ""}">${w}</span>`).join(" ");
    const sello = s.sello ? `
      <div class="sello" data-reveal="sello">
        <svg viewBox="0 0 116 116" aria-hidden="true">
          <defs><path id="circulo" d="M58,58 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs>
          <text><textPath href="#circulo" textLength="289" lengthAdjust="spacing">${esc(s.sello)}</textPath></text>
        </svg>
        <img src="img/figura.webp" alt="">
      </div>` : "";
    agregar("la-obra", "La obra", "coral", `
      ${kicker("La obra")}
      ${titulo(["De qué", "se trata"])}
      ${s.pendiente && borrador ? '<p class="nota-pendiente" data-reveal="sube">Borrador: falta el texto oficial</p>' : ""}
      <div class="lectura">${s.parrafos.map((p) => `<p>${palabras(p)}</p>`).join("")}</div>
      ${s.foto ? `<figure class="foto-obra" data-reveal="telon"><img src="${esc(s.foto.chica || s.foto.src)}" srcset="${esc(s.foto.chica || s.foto.src)} 800w, ${esc(s.foto.src)} 1600w" sizes="(min-width: 700px) 600px, 100vw" alt="${esc(s.foto.alt)}" loading="lazy" decoding="async"></figure>` : ""}
      ${(sello || s.dato) ? `<div class="premio">${sello}${s.dato ? `<p data-reveal="sube" style="--d:200ms">${esc(s.dato)}</p>` : ""}</div>` : ""}
      ${D.obra.duracion ? `<p class="duracion" data-reveal="sube">Duración: ${esc(D.obra.duracion)}</p>` : ""}
    `, cintas("a"));
  }

  // 03 · Elenco
  {
    const elenco = (D.elenco || []).filter((p) => p.nombre || borrador);
    if (elenco.length) {
      const ig = (u) => {
        if (!u) return "";
        const h = u.replace(/^@/, "").replace(/^https?:\/\/(www\.)?instagram\.com\//, "").replace(/\/.*$/, "");
        return `<a class="ig" href="https://www.instagram.com/${esc(h)}/" target="_blank" rel="noopener">@${esc(h)}</a>`;
      };
      agregar("elenco", "Elenco", "oro", `
        ${kicker("En escena")}
        ${titulo(["El", "elenco"])}
        <div class="elenco">${elenco.map((p, i) => `
          <article class="actor${i % 2 ? " der" : ""}" data-reveal="actor">
            <div class="marco"><div class="foto">${p.foto
              ? `<img src="${esc(p.foto)}" alt="${esc(p.nombre ? p.nombre + " como " + p.personaje : p.personaje)}" loading="lazy" decoding="async">`
              : `<div class="sin-foto" aria-hidden="true"><span class="ini">${esc(p.personaje[0])}</span><img class="fig" src="img/figura-blanca.webp" alt=""></div>`}
            </div></div>
            <div class="info">
              <span class="n">${String(i + 1).padStart(2, "0")}</span>
              <h3 class="personaje"><span>${esc(p.personaje)}</span></h3>
              <div class="nombre">${p.nombre ? esc(p.nombre) : PEND}</div>
              ${ig(p.instagram)}
            </div>
          </article>`).join("")}
        </div>
      `);
    }
  }

  // Canciones
  if (D.canciones && D.canciones.length) {
    agregar("canciones", "Canciones", "teal", `
      ${kicker("Números musicales")}
      ${titulo(["Las", "canciones"])}
      <ol class="canciones">${D.canciones.map((c, i) => {
        const t = typeof c === "string" ? { titulo: c } : c;
        return `<li data-reveal="sube" style="--d:${Math.min(i, 8) * 50}ms"><span><span class="tit">${esc(t.titulo)}</span>${t.quien ? `<span class="quien">${esc(t.quien)}</span>` : ""}</span></li>`;
      }).join("")}</ol>
    `);
  }

  // Equipo
  {
    const ficha = (D.ficha || []).filter((f) => (f.nombres && f.nombres.length) || borrador);
    if (ficha.length) {
      agregar("equipo", "Equipo", "verde", `
        ${kicker("Ficha técnica")}
        ${titulo(["Detrás de", "escena"])}
        <ul class="creditos">${ficha.map((f) => `
          <li data-reveal="sube"><span class="rol">${esc(f.rol)}</span><span class="nombres">${f.nombres && f.nombres.length ? f.nombres.map(esc).join("<br>") : PEND}</span></li>`).join("")}
        </ul>
      `, cintas("b"));
    }
  }

  // Palabras
  if (D.palabras && D.palabras.texto) {
    agregar("palabras", "Palabras", "coral", `
      ${kicker("Unas palabras")}
      <blockquote class="palabras" data-reveal="sube">${D.palabras.texto.split(/\n\s*\n/).map((p) => `<p>${esc(p)}</p>`).join("")}
        ${D.palabras.firma ? `<footer>${esc(D.palabras.firma)}</footer>` : ""}</blockquote>
    `);
  }

  // Fotos
  if (D.galeria && D.galeria.length) {
    agregar("fotos", "Fotos", "oro", `
      ${kicker("Fotos")}
      ${titulo(["Así", "se vive"])}
      <div class="galeria${D.galeria.length === 1 ? " una" : ""}" data-reveal="sube">${D.galeria.map((g, i) => `
        <button type="button" data-foto="${i}" class="${g.vertical ? "vertical" : ""}" aria-label="Ver foto ${i + 1} en grande">
          <img src="${esc(g.chica || g.src)}" alt="${esc(g.alt)}" loading="lazy" decoding="async">
        </button>`).join("")}
      </div>
      ${D.galeria.length > 1 ? '<p class="galeria-pista">Deslizá para ver más · tocá para ampliar</p>' : ""}
    `);
  }

  // Esta noche: el aviso del celular va al final, cuando ya leyeron todo y la función está por empezar
  {
    const funciones = (D.funciones || []).slice().sort((a, b) => a.fecha.localeCompare(b.fecha));
    let fechas = "";
    if (funciones.length) {
      fechas = `<h3 class="subtitulo" data-reveal="sube">Funciones</h3><div class="funciones">` + funciones.map((f, i) => {
        const d = new Date(f.fecha + "T12:00:00");
        const estado = f.fecha === hoy ? "hoy" : f.fecha < hoy ? "pasada" : "";
        const sala = [f.sala, f.direccion].filter(Boolean).map(esc).join(" · ");
        const mapa = f.mapa ? ` · <a href="${esc(f.mapa)}" target="_blank" rel="noopener">Cómo llegar</a>` : "";
        return `<div class="funcion ${estado}" data-reveal="sube" style="--d:${i * 70}ms">
          <div class="dia"><b>${d.getDate()}</b><span>${MESES[d.getMonth()]}</span></div>
          <div class="cuando">${DIAS[d.getDay()]} · ${esc(f.hora)} h${estado === "hoy" ? '<span class="chip-hoy">HOY</span>' : ""}</div>
          <div class="donde">${sala || PEND}${mapa}</div>
        </div>`;
      }).join("") + "</div>";
    } else if (D.funcionesTexto) {
      fechas = `<h3 class="subtitulo" data-reveal="sube">Funciones</h3><p class="fechas-texto" data-reveal="sube">${esc(D.funcionesTexto)}</p>`;
    }
    const botones = [];
    if (D.entradas) botones.push(`<a class="boton" href="${esc(D.entradas)}" target="_blank" rel="noopener">Entradas</a>`);
    agregar("esta-noche", "Esta noche", "teal", `
      ${kicker("Esta noche")}
      ${titulo(D.bienvenida.titulo)}
      <div class="silencio" data-reveal="sube">
        <span class="cel" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="7" y="2.5" width="10" height="19" rx="2.4"/><path d="M11 18.2h2"/>
            <path class="onda" d="M19.5 8.5c1 1 1 6 0 7M21.8 6.5c2 2.4 2 8.6 0 11"/>
            <path class="onda" d="M4.5 8.5c-1 1-1 6 0 7M2.2 6.5c-2 2.4-2 8.6 0 11"/>
            <path class="tachado" d="M3 3l18 18"/>
          </svg>
        </span>
        <p>${esc(D.bienvenida.aviso)}</p>
      </div>
      ${fechas}
      ${botones.length ? `<div class="botones" data-reveal="sube">${botones.join("")}</div>` : ""}
    `);
  }

  // Cierre
  {
    const redes = [];
    if (D.entradas) redes.push(`<a class="boton" href="${esc(D.entradas)}" target="_blank" rel="noopener">Entradas</a>`);
    redes.push(`<button class="boton${D.entradas ? " secundario" : ""}" type="button" data-compartir>${ICONO_COMPARTIR}Compartir el programa</button>`);
    if (D.redes.obra) redes.push(`<a class="boton secundario" href="${esc(D.redes.obra)}" target="_blank" rel="noopener">${ICONO_IG}La obra en Instagram</a>`);
    if (D.redes.productora) redes.push(`<a class="boton secundario" href="${esc(D.redes.productora)}" target="_blank" rel="noopener">${ICONO_IG}Brux en Instagram</a>`);
    agregar("gracias", "Gracias", "coral", `
      <div class="centrado">${titulo(D.cierre.titulo)}</div>
      <div class="escenario" data-reveal="escenario"><img src="img/figura.webp" alt=""></div>
      <p class="leyenda" data-reveal="sube">Mamá, cada vez más chiquita.</p>
      ${D.cierre.texto ? `<p class="texto" data-reveal="sube">${esc(D.cierre.texto)}</p>` : ""}
      <div class="botones" data-reveal="sube">${redes.join("")}</div>
    `);
  }

  secciones.forEach((s, i) => { s.num = String(i + 1).padStart(2, "0"); });
  $("#programa").innerHTML = secciones.map((s) =>
    `<section class="seccion${s.id === "gracias" ? " cierre" : ""}" id="${s.id}" data-tono="${s.tono}">${s.html.replace("{{n}}", s.num)}</section>${s.extra}`).join("");

  $("#pie").innerHTML = `
    <img class="brux" src="img/brux-blanco.svg" alt="Brux Producciones" width="122" height="54">
    <div>Brux Producciones · Córdoba</div>
    <div><a href="${esc(D.redes.productora)}" target="_blank" rel="noopener">@brux.producciones</a></div>
    ${D.credito ? `<a class="credito" href="${esc(D.credito.url)}" target="_blank" rel="noopener">${esc(D.credito.texto)} · v${VERSION}</a>` : ""}
  `;

  // Menú
  $("#menuLista").innerHTML = secciones.map((s, i) =>
    `<li><a href="#${s.id}" style="--i:${i}" data-ir="${s.id}"><span class="num">${s.num}</span><span class="nom">${esc(s.nombre)}</span></a></li>`).join("");
  $("#menuPie").innerHTML = `
    <button class="boton" type="button" data-compartir>${ICONO_COMPARTIR}Compartir</button>
    ${D.redes.productora ? `<a class="boton secundario" href="${esc(D.redes.productora)}" target="_blank" rel="noopener">${ICONO_IG}Brux</a>` : ""}`;

  function cintas(variante) {
    const a = variante === "a"
      ? ["Mamá está más chiquita", "Córdoba"]
      : ["Comedia musical", "Brux Producciones"];
    const b = variante === "a"
      ? ["Comedia musical", "Viernes 21 h"]
      : ["Mamá está más chiquita", "Córdoba"];
    const rollo = (arr) => {
      const uno = arr.map((t) => `<span>${esc(t)}</span><b>✦</b>`).join("");
      return `<div class="rodillo">${uno.repeat(6)}</div>`;
    };
    return `<div class="cintas" aria-hidden="true" data-reveal="cintas"><div class="cinta b" data-dir="1">${rollo(b)}</div><div class="cinta a" data-dir="-1">${rollo(a)}</div></div>`;
  }

  // ---------- Revelado al entrar en pantalla ----------
  const revelables = $$("[data-reveal]");
  if (quieto || !("IntersectionObserver" in window)) {
    revelables.forEach((el) => el.classList.add("visto"));
  } else {
    // lo que entra en pantalla en la misma tanda aparece escalonado, de arriba hacia abajo
    const io = new IntersectionObserver((entradas) => {
      entradas.filter((en) => en.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        .forEach((en, k) => {
          const el = en.target;
          if (k && !el.style.getPropertyValue("--d")) el.style.setProperty("--d", Math.min(k, 6) * 90 + "ms");
          el.classList.add("visto");
          io.unobserve(el);
        });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    revelables.forEach((el) => io.observe(el));
  }

  // ---------- Intro de la portada ----------
  const empezar = () => document.documentElement.classList.add("listo");
  const imgsTitulo = $$("img", tituloObra);
  Promise.race([
    Promise.all(imgsTitulo.map((im) => (im.decode ? im.decode().catch(() => {}) : Promise.resolve()))),
    new Promise((r) => setTimeout(r, 1800)),
  ]).then(() => requestAnimationFrame(() => requestAnimationFrame(empezar)));

  // ---------- Dock, índice y tono de cada sección ----------
  const dock = $("#dock");
  const dockNum = $("#dockNum");
  const dockNombre = $("#dockNombre");
  const avance = $("#avance");
  const mini = $("#mini");
  const enlacesMenu = $$("#menuLista a");
  const luces = $$(".luz");
  let actual = null;
  function activar(id) {
    if (id === actual) return;
    actual = id;
    const s = secciones.find((x) => x.id === id);
    if (!s) return;
    dockNum.textContent = s.num + " / " + String(secciones.length).padStart(2, "0");
    dockNombre.textContent = s.nombre;
    dockNombre.classList.remove("cambia"); void dockNombre.offsetWidth; dockNombre.classList.add("cambia");
    luces.forEach((l) => l.classList.toggle("on", l.dataset.tono === s.tono));
    enlacesMenu.forEach((a) => a.classList.toggle("actual", a.dataset.ir === id));
  }
  activar(secciones[0].id);
  const ioSecciones = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => { if (en.isIntersecting) activar(en.target.id); });
  }, { rootMargin: "-48% 0px -52% 0px" });
  $$("main .seccion").forEach((s) => ioSecciones.observe(s));

  // ---------- Bucle de scroll ----------
  const raiz = document.documentElement;
  const portada = $("#portada");
  const parrafos = $$(".lectura p").map((p) => ({ el: p, w: $$(".w", p), n: -1 }));
  const fotosActor = $$(".actor .foto img, .foto-obra img");
  const cintasEls = $$(".cinta").map((c) => ({ el: c, r: $(".rodillo", c), dir: +c.dataset.dir, x: 0, ancho: 0, visible: false }));
  let ultimoY = window.scrollY;
  let velocidad = 0;
  let corriendo = false;
  let ultimoP = -1;

  function medirCintas() {
    cintasEls.forEach((c) => { c.ancho = c.r.scrollWidth / 6; });
  }
  medirCintas();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(medirCintas);
  addEventListener("resize", medirCintas);
  const ioCintas = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => { const c = cintasEls.find((x) => x.el === en.target); if (c) c.visible = en.isIntersecting; });
    arrancar();
  });
  cintasEls.forEach((c) => ioCintas.observe(c.el));

  // Todo se mide en tiempo y no en cuadros: el iPhone en ahorro de batería corre a 30 por segundo
  // y los ProMotion a 120; así las cintas y la inercia van igual en todos.
  let ultimoT = 0;
  function cuadro(t) {
    const dt = ultimoT ? Math.min(t - ultimoT, 64) : 16.7;
    ultimoT = t;
    const f = dt / 16.7;
    const y = window.scrollY;
    const vh = window.innerHeight;
    velocidad += ((y - ultimoY) / f - velocidad) * Math.min(1, 0.15 * f);
    ultimoY = y;

    // Portada: el título se desarma y la nena se achica
    // la portada ya no queda fija: el efecto dura lo que tarda en irse de la pantalla
    const recorrido = Math.max(1, portada.offsetHeight * 0.85);
    const p = clamp(y / recorrido);
    if (Math.abs(p - ultimoP) > 0.001) {
      portada.style.setProperty("--p", p.toFixed(4));
      portada.classList.toggle("moviendo", p > 0 && p < 1);
      ultimoP = p;
    }
    dock.classList.toggle("visible", y > portada.offsetHeight * 0.6);

    // Progreso total: el anillo se llena y la nena de la barra se achica
    const inicio = portada.offsetHeight;
    const total = clamp((y - inicio * 0.6) / Math.max(1, raiz.scrollHeight - vh - inicio * 0.6));
    avance.style.strokeDashoffset = (131.95 * (1 - total)).toFixed(2);
    mini.style.setProperty("--s", (1 - total * 0.62).toFixed(3));

    // Sinopsis: las palabras se encienden a medida que las leés (es un fundido: queda también con "Reducir movimiento")
    const linea = vh * 0.78;
    parrafos.forEach((pp) => {
      const r = pp.el.getBoundingClientRect();
      if ((r.bottom < -50 && pp.n === pp.w.length) || (r.top > vh && pp.n === 0)) return;
      const prog = clamp((linea - r.top) / (r.height + vh * 0.12));
      const n = Math.round(prog * pp.w.length);
      if (n !== pp.n) {
        pp.w.forEach((w, i) => w.classList.toggle("on", i < n));
        pp.n = n;
      }
    });

    if (!quieto) {
      // Fotos del elenco: leve paralaje
      fotosActor.forEach((im) => {
        const r = im.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const k = (r.top + r.height / 2 - vh / 2) / vh;
        im.style.setProperty("--py", (k * -8).toFixed(2) + "%");
      });

      // Cintas: avanzan solas, aceleran con el scroll y se inclinan con el envión
      const inclina = clamp(-velocidad * 0.25, -6, 6);
      cintasEls.forEach((c) => {
        if (!c.visible || !c.ancho) return;
        c.x += c.dir * (0.6 + Math.min(Math.abs(velocidad) * 0.35, 9)) * f;
        if (c.x <= -c.ancho) c.x += c.ancho;
        if (c.x > 0) c.x -= c.ancho;
        c.r.style.transform = `translate3d(${c.x.toFixed(1)}px,0,0) skewX(${inclina.toFixed(2)}deg)`;
      });
    }

    const siguen = (!quieto && cintasEls.some((c) => c.visible)) || Math.abs(velocidad) > 0.2;
    if (siguen) requestAnimationFrame(cuadro); else { corriendo = false; ultimoT = 0; }
  }
  function arrancar() {
    if (corriendo) return;
    corriendo = true;
    ultimoT = 0;
    requestAnimationFrame(cuadro);
  }
  addEventListener("scroll", arrancar, { passive: true });
  addEventListener("resize", arrancar);
  // al volver atrás desde Instagram, Safari restaura la página congelada: reanudar
  addEventListener("pageshow", (e) => { if (e.persisted) { corriendo = false; arrancar(); } });
  // sin esto iOS no muestra el :active de los botones al tocarlos
  document.addEventListener("touchstart", () => {}, { passive: true });
  arrancar();

  // ---------- Menú ----------
  const menu = $("#menu");
  const botonMenu = $("#abrirMenu");
  function abrirMenu(abrir) {
    const r = botonMenu.getBoundingClientRect();
    menu.style.setProperty("--cx", (r.right - 30) + "px");
    menu.style.setProperty("--cy", (r.top + r.height / 2) + "px");
    menu.classList.toggle("abierto", abrir);
    raiz.classList.toggle("menu-abierto", abrir);
    botonMenu.setAttribute("aria-expanded", String(abrir));
    botonMenu.setAttribute("aria-label", abrir ? "Cerrar el índice" : "Abrir el índice");
    if (abrir) { menu.removeAttribute("inert"); } else { menu.setAttribute("inert", ""); }
  }
  botonMenu.addEventListener("click", () => abrirMenu(!menu.classList.contains("abierto")));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("abierto")) abrirMenu(false); });
  enlacesMenu.forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    const destino = document.getElementById(a.dataset.ir);
    abrirMenu(false);
    setTimeout(() => destino.scrollIntoView({ behavior: quieto ? "auto" : "smooth" }), quieto ? 0 : 280);
  }));

  // ---------- Compartir ----------
  $$("[data-compartir]").forEach((b) => b.addEventListener("click", async () => {
    const datos = { title: document.title, text: "El programa de Mamá está más chiquita", url: location.href.split("#")[0] };
    if (navigator.share) { try { await navigator.share(datos); } catch (e) { /* cancelado */ } return; }
    try {
      await navigator.clipboard.writeText(datos.url);
      const antes = b.innerHTML; b.textContent = "Link copiado"; setTimeout(() => { b.innerHTML = antes; }, 1800);
    } catch (e) { /* sin portapapeles */ }
  }));

  // ---------- Galería ----------
  const galeria = $(".galeria");
  if (galeria) {
    const tarjetas = $$("button", galeria);
    const inclinar = () => {
      const g = galeria.getBoundingClientRect();
      const centro = g.left + g.width / 2;
      tarjetas.forEach((t, i) => {
        const r = t.getBoundingClientRect();
        const k = clamp((r.left + r.width / 2 - centro) / g.width, -1, 1);
        t.style.setProperty("--r", (k * 7 + (i % 2 ? 1.2 : -1.2) * (1 - Math.abs(k))).toFixed(2) + "deg");
        t.style.setProperty("--s", (1 - Math.abs(k) * 0.08).toFixed(3));
      });
    };
    if (tarjetas.length > 1 && !quieto) { galeria.addEventListener("scroll", () => requestAnimationFrame(inclinar), { passive: true }); inclinar(); }

    const visor = $("#visor");
    const pistaVisor = $("#visorPista");
    const cuenta = $("#visorCuenta");
    pistaVisor.innerHTML = D.galeria.map((g) => `<figure><img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy" decoding="async"></figure>`).join("");
    const actualizarCuenta = () => {
      const i = Math.round(pistaVisor.scrollLeft / pistaVisor.clientWidth);
      cuenta.textContent = D.galeria.length > 1 ? `${i + 1} / ${D.galeria.length}` : "";
    };
    pistaVisor.addEventListener("scroll", () => requestAnimationFrame(actualizarCuenta), { passive: true });
    tarjetas.forEach((t) => t.addEventListener("click", () => {
      visor.showModal();
      pistaVisor.scrollLeft = +t.dataset.foto * pistaVisor.clientWidth;
      actualizarCuenta();
    }));
    $("#visorCerrar").addEventListener("click", () => visor.close());
    visor.addEventListener("click", (e) => { if (e.target.tagName === "FIGURE") visor.close(); });
  }
})();
