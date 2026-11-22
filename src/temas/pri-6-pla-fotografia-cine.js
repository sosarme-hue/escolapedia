// Educación Plástica 6º de Primaria: fotografía y cine. Dibujos propios en SVG.
const { tema, L, svg, tx, planos, AZ, RO, VE, NA, AM } = require("./_pri6d");

const M = "Educación Plástica";

// Cámara oscura: la luz entra por un agujero y forma una imagen invertida.
const camaraOscura = svg("Cámara oscura: la luz de un árbol entra por un agujero y forma la imagen al revés", `
  <path d="M40 120 V 80" stroke="#8a5a2b" stroke-width="6"/><circle cx="40" cy="66" r="22" fill="${VE}"/>
  <rect x="120" y="40" width="120" height="100" rx="4" fill="var(--ink)" fill-opacity=".85"/><circle cx="120" cy="90" r="3" fill="${AM}"/>
  <path d="M40 46 L 120 90 L 232 130 M40 120 L 120 90 L 232 54" fill="none" stroke="${AM}" stroke-width="1.6" stroke-dasharray="5 4"/>
  <g transform="translate(222 92) rotate(180)"><path d="M0 34 V 4" stroke="#8a5a2b" stroke-width="4"/><circle cx="0" cy="-6" r="15" fill="${VE}"/></g>
  ${tx(40, 156, "objeto", { s: 11 })}${tx(180, 160, "imagen invertida", { s: 11, c: AM })}${tx(120, 30, "agujero", { s: 10.5, c: "var(--muted)" })}`);

// Regla de los tercios.
const tercios = svg("Regla de los tercios: el sujeto se coloca en un cruce de las líneas", `
  <rect x="30" y="20" width="200" height="134" rx="4" fill="#dbe9fb"/><rect x="30" y="110" width="200" height="44" fill="#9bc59d"/>
  <path d="M96.7 20 V 154 M163.3 20 V 154 M30 64.7 H 230 M30 109.3 H 230" stroke="${RO}" stroke-width="1.4" stroke-dasharray="5 4"/>
  <path d="M163 109 V 80" stroke="#8a5a2b" stroke-width="5"/><circle cx="163" cy="66" r="18" fill="${VE}"/><circle cx="96.7" cy="64.7" r="6" fill="${AM}"/>
  ${[[96.7, 64.7], [163.3, 64.7], [96.7, 109.3], [163.3, 109.3]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="${RO}"/>`).join("")}
  ${tx(130, 172, "pon lo importante en un cruce", { s: 11, c: "var(--muted)" })}`);

// Fotogramas: un muñeco que salta en varias imágenes seguidas.
const fotogramas = svg("Tira de película con cinco fotogramas de una pelota que bota", `
  <rect x="10" y="40" width="240" height="96" fill="var(--ink)"/>
  ${[...Array(12)].map((_, i) => `<rect x="${16 + i * 20}" y="44" width="10" height="7" rx="1.5" fill="var(--paper)"/><rect x="${16 + i * 20}" y="125" width="10" height="7" rx="1.5" fill="var(--paper)"/>`).join("")}
  ${[0, 1, 2, 3, 4].map((i) => { const y = [62, 84, 104, 84, 62][i]; return `<rect x="${16 + i * 47}" y="56" width="42" height="64" fill="var(--card)"/><circle cx="${37 + i * 47}" cy="${y + 8}" r="7" fill="${RO}"/><path d="M${18 + i * 47} 116 h 38" stroke="var(--muted)" stroke-width="2"/>`; }).join("")}
  ${tx(130, 158, "24 imágenes por segundo = movimiento", { s: 11, c: "var(--muted)" })}${tx(130, 28, "fotogramas", { s: 12 })}`);

module.exports = tema({
  materia: M,
  titulo: "Fotografía y cine",
  objetivos: ["Conocer cómo nacieron la fotografía y el cine", "Usar los planos y la composición para hacer mejores fotos", "Entender que el cine es una sucesión de imágenes fijas", "Planificar un vídeo corto o una animación con storyboard"],
  claves: ["fotografía", "cámara oscura", "encuadre", "plano", "regla de los tercios", "ángulo", "fotograma", "cine", "storyboard", "stop motion"],
  pregunta: [
    "Una película parece movimiento continuo, pero en realidad está hecha de fotos fijas. ¿Cómo puede ser?",
    "El cine proyecta unas <mark>24 imágenes por segundo</mark>, llamadas <b>fotogramas</b>. Cada una es un poco distinta de la anterior. Nuestros ojos y nuestro cerebro no pueden separarlas a esa velocidad y las «unen», creando la <mark>ilusión de movimiento</mark>. Es el mismo truco que un libro de dibujos que pasas rápido con el dedo.",
  ],
  bloques: [
    ["Escribir con la luz", `<p><mark>Fotografía</mark> significa «escribir con la luz». Mucho antes de las cámaras, ya se conocía la <b>cámara oscura</b>: una caja o habitación a oscuras con un agujerito. La luz que entra proyecta en la pared de enfrente la imagen del exterior, ¡pero al revés! Algunos pintores la usaban para calcar paisajes.</p><p>En el siglo XIX, inventores como Niépce y Daguerre lograron <b>fijar</b> esa imagen sobre placas con productos químicos sensibles a la luz. Las primeras fotos necesitaban varios minutos de exposición: ¡la gente no podía moverse!</p>`,
      camaraOscura],
    ["El encuadre y los planos", `<p>Hacer una foto es <mark>elegir</mark>: qué dejas dentro del marco y qué fuera. Eso es el <b>encuadre</b>. Según la distancia, hablamos de <mark>planos</mark>: el <b>plano general</b> muestra el lugar y la persona pequeña; el <b>plano entero</b>, a la persona de pies a cabeza; el <b>plano medio</b>, de cintura para arriba, y el <b>primer plano</b>, la cara.</p><p>El <b>plano detalle</b> muestra algo muy pequeño: unos ojos, una mano, una flor. Cada plano transmite algo distinto: el general sitúa; el primer plano emociona.</p>`,
      planos("Planos fotográficos: general, entero, medio y primer plano", [["general", 0.55, 14], ["entero", 1, 4], ["medio", 1.9, 26], ["primer plano", 3.4, 74]]), "pl5b"],
    ["Ángulos de cámara", `<p>El <mark>ángulo</mark> es la altura desde la que miramos con la cámara. En el <b>ángulo normal</b> la cámara está a la altura de los ojos. En el <b>picado</b>, la cámara está arriba y mira hacia abajo: el sujeto parece pequeño o indefenso. En el <b>contrapicado</b>, la cámara está abajo y mira hacia arriba: el sujeto parece grande y poderoso.</p><p>Prueba a fotografiar a tu mascota o un juguete desde el suelo (contrapicado) y desde una silla (picado): ¡parecerán personajes distintos!</p>`,
      svg("Ángulos: picado desde arriba, normal y contrapicado desde abajo", `<circle cx="130" cy="90" r="16" fill="${AM}" stroke="var(--ink)" stroke-width="1.5"/><path d="M116 106 h 28 l 4 40 h -36 z" fill="${AZ}"/>${[[40, 30, "picado", RO], [40, 92, "normal", VE], [40, 154, "contrapicado", NA]].map(([x, y, n, c]) => `<rect x="${x - 16}" y="${y - 10}" width="32" height="20" rx="4" fill="${c}"/><circle cx="${x + 10}" cy="${y}" r="5" fill="var(--card)"/><path d="M${x + 16} ${y} L 112 ${y < 60 ? 88 : y > 120 ? 120 : 92}" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3"/>${tx(246, y + 4, n, { s: 11, c, a: "end" })}`).join("")}`)],
    ["La composición: la regla de los tercios", `<p>Para que una foto sea más interesante, los fotógrafos usan la <mark>regla de los tercios</mark>: imagina que divides la imagen con dos líneas horizontales y dos verticales, como un tres en raya. Coloca lo importante en uno de los <b>cruces</b>, no justo en el centro, y el horizonte sobre una de las líneas horizontales.</p><p>Otros consejos: busca un fondo limpio que no distraiga, aprovecha líneas que guíen la mirada (un camino, una valla) y fíjate en la luz. La luz suave del amanecer o del atardecer suele ser la más bonita.</p>`,
      tercios],
    ["El nacimiento del cine", `<p>En 1895, en París, los hermanos <mark>Lumière</mark> hicieron la primera proyección pública de cine con su <b>cinematógrafo</b>, una máquina que grababa y proyectaba. Sus películas duraban menos de un minuto: obreros saliendo de una fábrica, un tren llegando a la estación… Se cuenta que algunos espectadores se asustaron al ver el tren venir hacia ellos.</p><p>Poco después, <b>Georges Méliès</b>, que era mago, inventó los primeros efectos especiales y contó historias fantásticas, como un viaje a la Luna. El cine se convirtió en el gran espectáculo del siglo XX.</p>`,
      L.linea("Línea del tiempo de la imagen", [["1826", "primera fotografía conservada", AZ], ["1895", "cine de los hermanos Lumière", RO], ["1927", "primeras películas sonoras", VE], ["hoy", "cine digital y móviles", NA]]), "pl5c"],
    ["¿Cómo funciona el cine?", `<p>Una película es una sucesión de <mark>fotogramas</mark>: imágenes fijas que, pasadas rápido (unas 24 por segundo), engañan a nuestro cerebro y parecen movimiento. Antes se grababan en rollos de película; hoy se graban en tarjetas digitales.</p><p>Al principio el cine era <b>mudo</b> y en blanco y negro: los diálogos se escribían en carteles y un pianista tocaba en la sala. Hacia 1927 llegó el <b>cine sonoro</b> y más tarde el <b>color</b>. Hoy tenemos cine en 3D, animación por ordenador y películas grabadas con un móvil.</p>`,
      fotogramas],
    ["El lenguaje del cine", `<p>El cine usa los mismos <b>planos</b> y <b>ángulos</b> que la fotografía, y además el <mark>movimiento de cámara</mark>: la <b>panorámica</b> (la cámara gira sobre sí misma para mostrar un paisaje), el <b>travelling</b> (la cámara se desplaza siguiendo a alguien) y el <b>zoom</b> (acercar o alejar la imagen).</p><p>El <b>montaje</b> une los planos en un orden para contar la historia. La <b>música</b> y los <b>sonidos</b> crean emociones: la misma escena da miedo o risa según la música que suene. Un buen espectador se fija en todo esto.</p>`,
      L.filas("Movimientos de cámara y montaje", [["panorámica", "la cámara gira", AZ], ["travelling", "la cámara se desplaza", VE], ["zoom", "acerca o aleja la imagen", NA], ["montaje", "ordena los planos", RO]])],
    ["Animación y stop motion", `<p>Los <mark>dibujos animados</mark> se hacen dibujando cada fotograma con una pequeña diferencia. En el <mark>stop motion</mark> se fotografían muñecos de plastilina o juguetes moviéndolos un poquito entre foto y foto; al pasar las fotos seguidas, ¡cobran vida!</p><p>Antes de grabar, se dibuja un <b>storyboard</b>: una especie de cómic con las escenas, el plano de cada una y notas sobre el sonido. Es el plan de la película. Los grandes estudios de animación usan storyboards de miles de viñetas.</p>`,
      L.filas("Cómo se hace un stop motion", [["1", "Storyboard: dibuja las escenas.", AZ], ["2", "Prepara personajes y decorado.", VE], ["3", "Foto, mueve un poco, foto…", NA], ["4", "Junta las fotos en una app.", RO]], "Stop motion")],
    ["Taller: un minuto de cine", `<p>En grupos, cread una película de <b>un minuto</b> con una tableta o un móvil del colegio. <b>1)</b> Escribid una idea sencilla con inicio, problema y final. <b>2)</b> Dibujad el storyboard con 6 a 8 viñetas e indicad el plano de cada una. <b>3)</b> Grabad cada plano por separado, sujetando bien la cámara.</p><p><b>4)</b> Montad los planos en orden y añadid música sin derechos o grabada por vosotros. <b>Importante:</b> pedid permiso antes de grabar a cualquier persona y no publiquéis imágenes de compañeros en internet.</p>`,
      L.filas("Pasos del taller de cine", [["Idea", "inicio, problema, final", AZ], ["Storyboard", "6–8 viñetas con plano", VE], ["Grabar", "cada plano por separado", NA], ["Montar", "orden, música, título", RO]], "Un minuto de cine")],
  ],
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    ["Quieres una foto de tu abuela que muestre su sonrisa. ¿Qué plano usas?", ["La emoción se ve en la cara.", "Primer plano, con un fondo sencillo."], "Primer plano."],
    ["¿Cómo harías que un gato pareciera un gigante?", ["Un sujeto parece poderoso visto desde abajo.", "Coloca la cámara en el suelo mirando hacia arriba."], "Con un contrapicado."],
    ["¿Cuántas fotos necesitas para 5 segundos de stop motion a 12 fotos por segundo?", ["Fotos = segundos × fotos por segundo.", "5 × 12 = 60."], "60 fotos."],
  ],
  errores: [
    "Poner siempre lo importante en el centro de la foto: prueba la regla de los tercios.",
    "Fotografiar a contraluz sin querer: la persona sale oscura.",
    "Mover la cámara mientras se graba un stop motion: la imagen salta.",
    "Grabar sin storyboard: luego faltan planos o sobran.",
    "Grabar o publicar imágenes de otras personas sin su permiso.",
  ],
  ejercicios: [
    ["¿Qué significa la palabra fotografía?", "Escribir con la luz."],
    ["¿Qué es una cámara oscura?", "Una caja o sala oscura con un agujero que proyecta la imagen exterior invertida."],
    ["Nombra cuatro tipos de plano.", "General, entero, medio, primer plano (y detalle)."],
    ["¿Qué efecto produce el picado?", "El sujeto parece pequeño o indefenso."],
    ["Explica la regla de los tercios.", "Dividir la imagen en 3×3 y colocar lo importante en un cruce de las líneas."],
    ["¿Quiénes hicieron la primera proyección pública de cine y cuándo?", "Los hermanos Lumière, en 1895."],
    ["¿Qué es un fotograma?", "Cada una de las imágenes fijas que forman una película."],
    ["¿Qué es un travelling?", "Un movimiento en el que la cámara se desplaza."],
    ["¿Para qué sirve un storyboard?", "Para planificar las escenas y los planos antes de grabar."],
    ["Haz tres fotos del mismo objeto: plano general, medio y detalle.", "Respuesta práctica."],
  ],
  figura: ["Fotografía y cine", L.columnas("Fotografía y cine", [["escribir con luz", "FOTO", ["encuadre", "y tercios"], AZ], ["distancia", "PLANOS", ["general, medio,", "primer plano"], VE], ["24 por segundo", "CINE", ["fotogramas", "y montaje"], RO], ["plan", "STORYBOARD", ["stop motion", "y animación"], AM]])],
  video: "pl5v",
  quiz: [
    ["Fotografía significa…", ["escribir con la luz", "pintar rápido", "imagen en movimiento"], "Del griego."],
    ["En la cámara oscura la imagen aparece…", ["invertida", "más grande", "en color siempre"], "Al revés."],
    ["El plano que muestra la cara es el…", ["primer plano", "plano general", "plano entero"], "Primer plano."],
    ["Con la cámara arriba mirando hacia abajo hacemos un…", ["picado", "contrapicado", "zoom"], "Picado."],
    ["La regla de los tercios divide la imagen en…", ["9 partes", "2 partes", "4 partes"], "3 × 3."],
    ["Los hermanos Lumière presentaron el cine en…", ["1895", "1995", "1795"], "Siglo XIX."],
    ["Un fotograma es…", ["una imagen fija de una película", "un tipo de cámara", "una sala de cine"], "Imagen fija."],
    ["El cine proyecta unas…", ["24 imágenes por segundo", "2 imágenes por segundo", "1000 imágenes por segundo"], "Ilusión de movimiento."],
    ["Mover muñecos un poco entre foto y foto es…", ["stop motion", "travelling", "montaje"], "Animación."],
    ["Unir los planos en orden es el…", ["montaje", "encuadre", "revelado"], "Montaje."],
  ],
  examen: [
    ["¿Quién fue un mago que creó efectos especiales en el cine?", ["Georges Méliès", "Daguerre", "Velázquez"], "Viaje a la Luna."],
    ["La cámara gira sobre sí misma en una…", ["panorámica", "travelling", "zoom"], "Panorámica."],
    ["El dibujo previo de las escenas de una película es el…", ["storyboard", "guion musical", "fotograma"], "Storyboard."],
    ["Visto en contrapicado, un personaje parece…", ["poderoso", "débil", "lejano"], "Desde abajo."],
  ],
  feynman: ["Cómo nació la fotografía y qué es la cámara oscura", "Planos, ángulos y regla de los tercios", "Por qué vemos movimiento en el cine", "Qué es un storyboard y cómo se hace un stop motion"],
  mapa: ["FOTOGRAFÍA Y CINE", "var(--bac)", [["Fotografía", "luz · cámara oscura · encuadre", AZ], ["Planos y ángulos", "primer plano · picado", VE], ["Cine", "1895 · 24 fotogramas/s", RO], ["Animación", "storyboard · stop motion", AM]], 240],
  tarjetas: [
    ["Cámara oscura", "Caja con agujero: imagen invertida."],
    ["Encuadre", "Lo que dejamos dentro del marco."],
    ["Primer plano", "La cara: muestra emociones."],
    ["Picado / contrapicado", "Desde arriba / desde abajo."],
    ["Regla de los tercios", "Lo importante en un cruce de líneas."],
    ["Lumière", "Primera proyección de cine, 1895."],
    ["Fotograma", "Imagen fija de una película."],
    ["Storyboard", "Plan dibujado de las escenas."],
  ],
  familias: ["Haced fotos de la familia con distintos planos y ángulos y comparad cómo cambian.", "Ved juntos una película corta muda y comentad cómo se entiende la historia sin diálogos."],
  saberes: "La imagen fija y en movimiento: fotografía, planos, ángulos y composición; origen y lenguaje del cine; animación y storyboard (Educación Plástica y Visual)",
  ideas: ["Concurso de fotos del colegio con la regla de los tercios.", "Stop motion de 10 segundos con plastilina por grupos.", "Cine-fórum con un cortometraje y análisis de planos."],
  fuentes: [["Filmoteca Española", "https://www.cultura.gob.es/cultura/areas/cine/mc/fe/portada.html"], ["Real Academia Española: fotografía", "https://dle.rae.es/fotograf%C3%ADa"]],
});

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Comprender cómo funciona una cámara: diafragma, obturador e ISO", "Conocer a Méliès, Segundo de Chomón y los pioneros del cine", "Identificar los oficios del cine y grandes fotógrafos", "Usar la fotografía de forma respetuosa en internet"],
  lectura: { titulo: "La foto que no salió", html: `<p>En la final del campeonato de atletismo del colegio, Hugo tenía una misión: hacer la foto de la llegada de su hermana Alba en los 100 metros.</p><p>Se colocó junto a la meta con el móvil preparado. Alba cruzó la línea la primera, con los brazos en alto. Hugo pulsó el botón. Pero cuando miró la pantalla, solo vio una mancha borrosa de colores.</p><p>—¡No puede ser! —se lamentó.</p><p>Su tío Javier, que era fotógrafo de deportes, le pidió el móvil.</p><p>—Estaba nublado y había poca luz —le explicó—. El móvil ha dejado el obturador abierto más tiempo para captar luz, y tu hermana iba tan deprisa que ha salido movida.</p><p>Le enseñó el modo profesional de la cámara: cómo poner una velocidad más rápida, subir la sensibilidad y enfocar antes en la línea de meta.</p><p>En la carrera de relevos, Hugo lo intentó otra vez. Clic. En la pantalla apareció Alba congelada en el aire, con el testigo en la mano y una expresión de esfuerzo increíble.</p><p>—Esa sí que es una foto —dijo el tío Javier.</p><p>La foto acabó colgada en el pasillo del colegio. Debajo, Hugo escribió: «Velocidad: 1/1000».</p>` },
  tras: {
    "Escribir con la luz": [
      ["Cómo funciona una cámara", `<p>Todas las cámaras, desde la más antigua hasta la del móvil, controlan <b>cuánta luz</b> entra y <b>durante cuánto tiempo</b>. Tres ajustes deciden cómo saldrá la foto; juntos forman el llamado <b>triángulo de exposición</b>:</p><ul><li><b>El diafragma</b> (apertura): es un agujero en el objetivo que se abre o se cierra, como la <b>pupila</b> del ojo. Muy abierto deja entrar mucha luz y deja el <b>fondo desenfocado</b>, ideal para retratos. Más cerrado consigue que todo salga nítido, ideal para paisajes.</li><li><b>El obturador</b> (velocidad): es una cortinilla que se abre durante un tiempo. Una velocidad <b>rápida</b> (1/1000 de segundo) <b>congela</b> el movimiento: una gota, un salto. Una velocidad <b>lenta</b> (1 segundo) deja <b>estelas</b>: los faros de los coches de noche se convierten en líneas de luz.</li><li><b>La sensibilidad (ISO)</b>: indica cuánto «amplifica» el sensor la luz. Un ISO alto permite fotografiar con poca luz, pero la imagen sale con <b>ruido</b> (puntitos).</li></ul><p>Además, la cámara tiene que <b>enfocar</b>: ajustar el objetivo para que el sujeto principal se vea nítido.</p><p>Los móviles hacen estos cálculos automáticamente, pero muchos tienen un <b>modo manual</b> o profesional con el que puedes experimentar.</p>`,
        L6.filas("Triángulo de exposición", [["diafragma", "luz y desenfoque", cAZ], ["obturador", "congelar o estela", cRO], ["ISO", "sensibilidad", cNA], ["enfoque", "nitidez", cVE]]), ["qQMridBZFpA", "Explicado fácil (Iso, Velocidad de obturación y Apertura) | Ejemplos", "Luis Araujo", 1491353]],
    ],
    "El nacimiento del cine": [
      ["Magos del cine: Méliès y Segundo de Chomón", `<p>Los hermanos Lumière filmaban la realidad. Pero muy pronto otros cineastas descubrieron que el cine también podía mostrar <b>lo imposible</b>.</p><p>El francés <b>Georges Méliès</b> era mago antes que cineasta. Un día, según se cuenta, su cámara se atascó mientras filmaba una calle; al proyectar la película, ¡un autobús se convertía de repente en un coche fúnebre! Así descubrió el <b>truco de sustitución</b>: parar la cámara, cambiar algo y seguir filmando. En 1902 rodó <i>Viaje a la Luna</i>, en la que una cápsula se clava en el ojo de una Luna con cara. Usó decorados pintados, maquetas y sobreimpresiones: fue el padre de los <b>efectos especiales</b>.</p><p>En España tuvimos a un genio parecido: <b>Segundo de Chomón</b> (1871-1929), nacido en Teruel. Trabajó en Barcelona, París y Turín, y fue un maestro de los trucos: hizo que los objetos se movieran solos fotograma a fotograma, una de las primeras formas de animación (como en <i>El hotel eléctrico</i>, de 1908), y coloreaba las películas a mano con plantillas.</p><p>Años después, en 1929, <b>Luis Buñuel</b> y <b>Salvador Dalí</b> rodaron <i>Un perro andaluz</i>, una película surrealista llena de imágenes de sueño.</p>`,
        H6.dos("Dos pioneros", ["MÉLIÈS", ["Francia", "Viaje a la Luna", "sustitución"], cMO], ["CHOMÓN", ["Teruel", "objetos animados", "color a mano"], cNA]), ["gJqRxMQZvZw", "Segundo de Chomón | Reportajes TCM | TCM", "TCM España", 10611]],
    ],
    "El lenguaje del cine": [
      ["Los oficios del cine", `<p>Al final de una película aparecen los <b>créditos</b>: una larga lista de nombres. Hacer cine es un trabajo de equipo en el que participan cientos de personas:</p><ul><li><b>Guionista</b>: escribe la historia, los diálogos y lo que ocurre en cada escena.</li><li><b>Director o directora</b>: decide cómo se cuenta la historia: qué planos, cómo actúan los intérpretes, qué ritmo tiene. Es quien coordina a todo el equipo.</li><li><b>Productor</b>: consigue el dinero y organiza el rodaje.</li><li><b>Director de fotografía</b>: se encarga de la luz y de la cámara.</li><li><b>Director de arte</b>, <b>vestuario</b>, <b>maquillaje</b> y <b>peluquería</b>: crean el aspecto de los lugares y los personajes.</li><li><b>Actores y actrices</b>: dan vida a los personajes.</li><li><b>Montador</b>: une los planos en el orden adecuado. El montaje decide el ritmo y puede cambiar por completo el sentido de una escena.</li><li><b>Sonido, música y efectos visuales</b>: completan la película en la posproducción.</li></ul><p>En España, la Academia de Cine entrega cada año los <b>Premios Goya</b>, desde 1987, para reconocer el trabajo de todos estos oficios. La estatuilla es un busto del pintor Francisco de Goya.</p>`,
        H6.flujo("Hacer una película", ["guion|historia", "rodaje|cámara", "montaje|ritmo", "estreno|público"], cAZ)],
    ],
  },
  final: [
    ["Grandes fotógrafos", `<p>Algunas fotografías han cambiado la manera de ver el mundo:</p><ul><li><b>Robert Capa</b>: fotógrafo húngaro que cubrió la Guerra Civil española, donde tomó en 1936 una de las imágenes de guerra más famosas de la historia, un miliciano en el momento de caer. Fue uno de los fundadores de la agencia <b>Magnum</b>. Su compañera, <b>Gerda Taro</b>, también fotógrafa, murió en 1937 en la batalla de Brunete mientras hacía su trabajo.</li><li><b>Dorothea Lange</b>: retrató en 1936 a una madre con sus hijos en un campamento de trabajadores pobres de Estados Unidos. <i>Madre migrante</i> se convirtió en el símbolo de la Gran Depresión.</li><li><b>Ansel Adams</b>: fotografió en blanco y negro los paisajes de los parques nacionales de Estados Unidos, con un control extraordinario de las luces y las sombras.</li><li><b>Cristina García Rodero</b> (Puertollano, 1949): recorrió durante años los pueblos de España fotografiando fiestas, ritos y tradiciones en su libro <i>España oculta</i>. Fue la primera fotógrafa española en entrar en la agencia Magnum.</li></ul><p>El <b>fotoperiodismo</b> cuenta la realidad con imágenes. Su compromiso es mostrar la verdad: por eso no se permite manipular las fotos de prensa.</p>`,
      L6.filas("Fotógrafos", [["Robert Capa", "guerra", cRO], ["D. Lange", "Madre migrante", cMO], ["Ansel Adams", "paisajes", cVE], ["G. Rodero", "España oculta", cNA]])],
    ["Fotos y redes: derechos y respeto", `<p>Hoy hacemos y compartimos más fotos que nunca. Por eso conviene conocer algunas normas:</p><ul><li><b>Derecho a la propia imagen</b>: cada persona decide si se publica su foto. Antes de subir una foto en la que salga otra persona, <b>pide permiso</b>. Con menores, deciden también sus familias.</li><li><b>Privacidad</b>: las fotos pueden revelar dónde vives o dónde está tu colegio (el uniforme, la fachada, el nombre de la calle). Muchas fotos guardan además la <b>ubicación</b> en sus datos ocultos (metadatos). Revisa la configuración y no publiques información personal.</li><li><b>Lo que se sube se queda</b>: aunque borres una foto, alguien puede haberla guardado o reenviado. Piensa antes de publicar.</li><li><b>Derechos de autor</b>: las fotos de internet tienen autor. Para usarlas en un trabajo, busca imágenes con licencia libre y cita la fuente.</li><li><b>Nunca</b> compartas fotos que puedan avergonzar o hacer daño a alguien: eso es una forma de acoso.</li></ul><p>Una buena pregunta antes de compartir: «¿Me gustaría que publicaran esta foto si fuera yo?».</p>`,
      H6.rueda("Antes de publicar", "PIENSA", [["permiso", cAZ], ["privacidad", cVE], ["autoría", cNA], ["respeto", cRO]])],
  ],
  ejemplos: [
    ["Quieres fotografiar una gota de agua en el aire. ¿Qué velocidad de obturación usas?", ["Hay que congelar un movimiento muy rápido.", "Velocidad muy alta."], "Muy rápida, por ejemplo 1/1000 de segundo."],
    ["Una película muestra un coche que se convierte de repente en caballo. ¿Qué truco de Méliès se usó?", ["Se para la cámara y se cambia el objeto.", "Truco de sustitución."], "El truco de sustitución."],
  ],
  errores: ["Pensar que un ISO alto no tiene ningún inconveniente.", "Creer que se puede publicar la foto de otra persona sin su permiso."],
  ejercicios: [
    ["b", "¿Qué controla el diafragma?", "La cantidad de luz que entra."],
    ["b", "¿Qué hace una velocidad de obturación rápida?", "Congela el movimiento."],
    ["b", "¿Quién rodó Viaje a la Luna?", "Georges Méliès."],
    ["b", "¿De dónde era Segundo de Chomón?", "De Teruel."],
    ["b", "¿Qué hace el montador?", "Une los planos en orden y marca el ritmo."],
    ["m", "Explica qué es el triángulo de exposición.", "Diafragma, obturador e ISO, que juntos controlan la luz."],
    ["m", "¿Cómo conseguirías un fondo desenfocado en un retrato?", "Abriendo mucho el diafragma."],
    ["m", "¿Qué aportó Chomón al cine?", "Trucos, animación de objetos y color a mano."],
    ["m", "¿Qué es el fotoperiodismo?", "Contar la realidad con fotografías de prensa."],
    ["m", "Escribe tres normas antes de publicar una foto.", "Pedir permiso, cuidar la privacidad, respetar la autoría."],
    ["a", "Haz dos fotos de un objeto en movimiento: una congelada y otra con estela.", "Respuesta abierta."],
    ["a", "Graba un truco de sustitución con el móvil.", "Respuesta abierta."],
    ["a", "Escribe los créditos de un corto de tu clase con los oficios del cine.", "Respuesta abierta."],
    ["a", "Crea una serie de fotos sobre una tradición de tu localidad.", "Respuesta abierta."],
  ],
  quiz: [
    ["El diafragma funciona como…", ["la pupila", "el párpado", "la oreja"], "Cámara."],
    ["Un ISO muy alto produce…", ["ruido", "más nitidez", "colores más vivos"], "Cámara."],
    ["Un perro andaluz es de…", ["Buñuel y Dalí", "Méliès", "los Lumière"], "Pioneros."],
    ["Los Premios Goya se entregan desde…", ["1987", "1895", "2010"], "Oficios."],
    ["Cristina García Rodero publicó…", ["España oculta", "Madre migrante", "Maus"], "Fotógrafos."],
  ],
  examen: [
    ["En la lectura, ¿por qué salió movida la primera foto?", ["el obturador estuvo abierto demasiado tiempo", "la cámara estaba rota", "había demasiada luz"], "Lectura."],
    ["Los metadatos de una foto pueden revelar…", ["la ubicación", "el color favorito", "la edad"], "Redes."],
  ],
  tarjetas: [
    ["Cámara", "Diafragma (luz, desenfoque), obturador (movimiento), ISO (sensibilidad)."],
    ["Pioneros", "Méliès (Viaje a la Luna), Chomón (Teruel), Buñuel y Dalí."],
    ["Oficios del cine", "Guion, dirección, fotografía, arte, montaje, sonido; Goya."],
    ["Fotografía", "Capa, Lange, Adams, García Rodero; permiso y privacidad."],
  ],
  glosario: [
    ["Diafragma", "Abertura que regula la luz que entra en la cámara."],
    ["Obturador", "Mecanismo que deja pasar la luz durante un tiempo."],
    ["ISO", "Sensibilidad del sensor a la luz."],
    ["Desenfoque", "Zona de la imagen que no se ve nítida."],
    ["Truco de sustitución", "Parar la cámara, cambiar algo y seguir filmando."],
    ["Efectos especiales", "Técnicas para mostrar lo imposible en el cine."],
    ["Créditos", "Lista de personas que hicieron la película."],
    ["Montaje", "Unión ordenada de los planos de una película."],
    ["Posproducción", "Trabajo que se hace tras el rodaje."],
    ["Fotoperiodismo", "Periodismo contado con fotografías."],
    ["Derecho a la propia imagen", "Derecho a decidir si se publica tu imagen."],
    ["Metadatos", "Datos ocultos de un archivo, como la fecha o la ubicación."],
  ],
  situacion: {
    titulo: "Festival de cine y foto del cole",
    reto: "La clase organiza un festival con fotografías y cortos propios.",
    pasos: ["Haced una serie de fotos aplicando el triángulo de exposición y la regla de los tercios.", "Rodad un corto de un minuto con un truco de cine de los pioneros.", "Repartid oficios y escribid los créditos.", "Organizad la proyección y la exposición, pidiendo permiso a quienes aparecen."],
    producto: "Un festival con una exposición fotográfica y cortos proyectados.",
    evaluacion: ["Ajusta la cámara según la situación.", "Aplica trucos y lenguaje del cine.", "Trabaja en equipo con roles definidos.", "Respeta los derechos de imagen y autor."],
  },
});
