// Artes Escénicas y Danza 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, flujo } = require("./_hum");

module.exports = {
  materia: "Artes Escénicas y Danza",
  curso: "4-eso",
  titulo: "Las artes escénicas: teatro, danza y circo",
  minutos: 60,
  objetivos: ["Definir las artes escénicas y sus elementos comunes", "Distinguir teatro, danza, circo, ópera, musical y performance", "Conocer los espacios escénicos y los oficios que hacen posible un espectáculo", "Valorar las artes escénicas como experiencia en vivo y como patrimonio"],
  claves: ["artes escénicas", "espectáculo en vivo", "intérprete", "espectador", "espacio escénico", "convención"],
  pregunta: {
    texto: "Una película se puede ver cien veces y siempre es igual. Una obra de teatro o un espectáculo de danza, aunque se repitan, nunca son exactamente iguales. ¿Por qué?",
    respuesta: "Porque las <mark>artes escénicas</mark> ocurren <b>en directo</b>: intérpretes y público comparten el mismo espacio y el mismo tiempo. Cada función depende de la energía de ese día, de la reacción de la sala y de pequeños cambios. Por eso se dice que el teatro es un arte <b>efímero</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son las artes escénicas?</h3><p>Las <b>artes escénicas</b> son las que se crean para ser <mark>representadas en vivo</mark> ante un público, en un espacio escénico. Usan el cuerpo, la voz, el movimiento, la música y la imagen. Incluyen el <b>teatro</b>, la <b>danza</b>, el <b>circo</b>, la <b>ópera</b>, el <b>musical</b>, los <b>títeres</b> y la <b>performance</b>. Todas comparten tres elementos imprescindibles: un <b>intérprete</b> (actor, bailarín, acróbata), un <b>espectador</b> y un <b>espacio</b> donde se encuentran. Sin público, no hay espectáculo.</p>`,
      svg: rueda("Artes escénicas", "ARTES|ESCÉNICAS", [["teatro", "var(--red)"], ["danza", "var(--pen)"], ["circo", "var(--sun)"], ["ópera", "var(--bac)"], ["musical", "var(--leaf)"], ["títeres", "var(--inf)"]], "var(--ink)"),
      video: { id: "jluiD-Oc4Eg", titulo: "¿Qué son las artes escénicas?", canal: "Profe Teatro", vistas: 109377, megusta: 0 },
    },
    {
      html: `<h3>El hecho escénico: un pacto con el público</h3><p>Cuando vamos al teatro aceptamos unas <mark>convenciones</mark>: sabemos que el actor no es de verdad el rey Lear, que el decorado de cartón representa un castillo y que la acción de un día puede durar dos horas. El público hace un «pacto de ficción»: decide creerse lo que ve durante el espectáculo. También hay convenciones de comportamiento: silencio, aplaudir al final, no usar el móvil. Algunas formas modernas rompen estas reglas e invitan al público a participar o a moverse por el espacio.</p>`,
    },
    {
      html: `<h3>Teatro</h3><p>El <b>teatro</b> representa una historia mediante <mark>personajes</mark> que dialogan y actúan. Su base suele ser un <b>texto dramático</b>, aunque también hay teatro sin palabras (mimo, teatro gestual). Sus géneros principales son la <b>tragedia</b>, la <b>comedia</b> y el <b>drama</b>, y de ellos derivan muchos más: el sainete, la farsa, el teatro del absurdo, el teatro documental. En España, la tradición teatral va desde los autos medievales hasta Lope de Vega, Calderón, Lorca, Buero Vallejo o autores actuales.</p>`,
    },
    {
      html: `<h3>Danza</h3><p>La <b>danza</b> expresa ideas, emociones o historias a través del <mark>movimiento del cuerpo</mark>, normalmente acompañado de música y con un ritmo. Puede ser <b>ritual</b> (en ceremonias), <b>popular o folclórica</b> (la jota, la sardana, la muiñeira), <b>académica</b> (el ballet clásico, la danza española), <b>moderna y contemporánea</b>, o <b>urbana</b> (hip hop, breaking). El flamenco, que une cante, toque y baile, fue declarado <b>Patrimonio Cultural Inmaterial de la Humanidad</b> por la UNESCO en 2010.</p>`,
      svg: filas("Tipos de danza", [["Ritual", "ceremonias y fiestas", "var(--bac)"], ["Folclórica", "jota, sardana, muiñeira", "var(--sun)"], ["Académica", "ballet, danza española", "var(--pen)"], ["Contemporánea", "libertad de movimiento", "var(--leaf)"], ["Urbana", "hip hop, breaking", "var(--red)"]]),
    },
    {
      html: `<h3>Circo</h3><p>El <b>circo</b> combina habilidad física, riesgo y espectáculo: <b>acrobacias</b>, malabares, equilibrios, trapecio, payasos, magia. El circo moderno nació en Londres en 1768, cuando Philip Astley creó una pista circular de 13 metros para hacer acrobacias a caballo; esa medida sigue siendo la de muchas pistas. Hoy el <mark>circo contemporáneo</mark> (o «nuevo circo»), cuyo ejemplo famoso es el Cirque du Soleil, ya no usa animales: une acrobacia, teatro, danza y música para contar una historia. En España hay escuelas como la Escola de Circ de Barcelona y festivales como Trapezi en Reus.</p>`,
      svg: dos("Circo tradicional y circo contemporáneo", ["Tradicional", ["carpa y pista", "números sueltos", "animales", "presentador", "payasos clásicos"], "var(--red)"], ["Actual", ["cualquier espacio", "hilo narrativo", "sin animales", "danza y teatro", "música en vivo"], "var(--pen)"]),
    },
    {
      html: `<h3>Ópera, musical y otras formas</h3><p>La <b>ópera</b> nació en Italia hacia 1600: es teatro <mark>cantado</mark> de principio a fin, con orquesta (<i>La traviata</i>, <i>Carmen</i>). En España tenemos la <b>zarzuela</b>, que alterna partes habladas y cantadas. El <b>musical</b>, nacido en Broadway y el West End, mezcla diálogo, canciones y baile (<i>El rey león</i>, <i>Los miserables</i>). Los <b>títeres y marionetas</b> dan vida a objetos. La <b>performance</b> es una acción artística en vivo, a menudo única, que mezcla artes plásticas y escénicas.</p>${tabla(["Forma", "Lo principal", "Ejemplo"], [["Ópera", "canto lírico y orquesta", "Carmen (Bizet)"], ["Zarzuela", "canto y diálogo", "La verbena de la Paloma"], ["Musical", "canción, diálogo y baile", "El rey león"], ["Títeres", "objetos animados", "Don Cristóbal, Guiñol"], ["Performance", "acción artística única", "Marina Abramović"]])}`,
    },
    {
      html: `<h3>Los espacios escénicos</h3><p>La relación entre escenario y público cambia la experiencia. El <b>escenario a la italiana</b>, el más habitual, sitúa al público de frente, separado por la boca del escenario (la «cuarta pared»). En el escenario <b>circular o arena</b>, el público rodea la acción. En el <b>escenario de tres lados</b>, como en los corrales de comedias del Siglo de Oro, el público está a ambos lados y delante. También se actúa en <mark>espacios no convencionales</mark>: calles, plazas, fábricas, parques. El Corral de Comedias de Almagro (Ciudad Real) es el único del siglo XVII que se conserva tal cual.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tipos de espacio escénico vistos desde arriba: a la italiana con el público delante, circular con el público alrededor y de tres lados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="30" width="60" height="36" rx="4" fill="var(--red)"/>${[0, 1, 2].map((i) => `<rect x="${22 + i * 20}" y="${84 + 0}" width="16" height="10" rx="3" fill="var(--pen)"/><rect x="${22 + i * 20}" y="100" width="16" height="10" rx="3" fill="var(--pen)"/>`).join("")}
        <circle cx="130" cy="72" r="18" fill="var(--red)"/>${[...Array(10)].map((_, i) => `<circle cx="${130 + 34 * Math.cos(i * Math.PI / 5)}" cy="${72 + 34 * Math.sin(i * Math.PI / 5)}" r="5" fill="var(--pen)"/>`).join("")}
        <rect x="206" y="44" width="34" height="40" rx="4" fill="var(--red)"/>${[0, 1, 2].map((i) => `<rect x="${190}" y="${46 + i * 14}" width="10" height="10" rx="3" fill="var(--pen)"/><rect x="${246}" y="${46 + i * 14}" width="8" height="10" rx="3" fill="var(--pen)"/><rect x="${208 + i * 12}" y="92" width="10" height="10" rx="3" fill="var(--pen)"/>`).join("")}
        <g ${F} font-size="11.5" font-weight="700" text-anchor="middle"><text x="50" y="140" fill="var(--ink)">a la italiana</text><text x="130" y="140" fill="var(--ink)">circular</text><text x="222" y="140" fill="var(--ink)">tres lados</text><text x="130" y="168" fill="var(--muted)" font-weight="400">rojo: escena · azul: público</text></g></svg>`,
    },
    {
      html: `<h3>Quién hace un espectáculo</h3><p>Detrás de cada función trabaja un <mark>equipo</mark>. El <b>dramaturgo</b> escribe el texto; el <b>coreógrafo</b> crea los movimientos de la danza; el <b>director</b> coordina la puesta en escena; los <b>intérpretes</b> actúan, bailan o cantan. El equipo artístico incluye <b>escenógrafo</b>, <b>figurinista</b> (vestuario), <b>iluminador</b>, <b>diseñador de sonido</b> y maquillaje. El equipo técnico monta y maneja todo: maquinistas, técnicos de luz y sonido, regidor (que da las órdenes durante la función). Y el equipo de <b>producción</b> consigue el dinero, el teatro y el público.</p>`,
      svg: flujo("Del proyecto a la función", ["idea|y texto", "dirección", "ensayos", "técnica", "estreno"], "var(--red)"),
    },
  ],
  figura: {
    titulo: "Los tres elementos de toda arte escénica",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Intérprete, espacio y espectador unidos en un tiempo compartido">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["Intérprete", "actor · bailarín · acróbata", "var(--red)", 120], ["Espacio", "escenario · calle · pista", "var(--sun)", 340], ["Espectador", "público en vivo", "var(--pen)", 560]].map(([t, d, c, x]) => `<circle cx="${x}" cy="88" r="58" fill="var(--card)" stroke="${c}" stroke-width="3"/><text x="${x}" y="88" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${t}</text><text x="${x}" y="168" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${d}</text>`).join("")}
      <path d="M180 88 H 280 M400 88 H 500" stroke="var(--ink)" stroke-width="3" stroke-dasharray="6 5"/>
      <text x="340" y="190" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>aquí y ahora: un tiempo compartido</text>
    </svg>`,
  },
  video: { id: "oLqeJqRhsX8", titulo: "¿Qué son las artes escénicas?", canal: "Tengo algo que EnsayARTE", vistas: 45090, megusta: 0, busqueda: "artes escénicas qué son teatro danza circo" },
  ejemplos: [
    { enunciado: "Clasifica: a) Carmen en el Teatro Real; b) un grupo de breaking en la plaza; c) un espectáculo con trapecio que cuenta una historia sin animales; d) La verbena de la Paloma.", pasos: ["a) Teatro totalmente cantado con orquesta: ópera.", "b) Movimiento con música en la calle: danza urbana en espacio no convencional.", "c) Acrobacias con hilo narrativo: circo contemporáneo.", "d) Alterna canto y diálogo: zarzuela."], resultado: "a) Ópera; b) danza urbana; c) circo contemporáneo; d) zarzuela." },
    { enunciado: "¿Qué convenciones aceptamos al ver una obra en la que un actor sale con una corona de cartón y dice «¡Estamos en el año 1600!»?", pasos: ["Que el actor representa a un rey aunque no lo sea.", "Que el cartón es oro.", "Que el escenario es otra época y otro lugar.", "Que el tiempo pasa más deprisa que en la realidad."], resultado: "Aceptamos el pacto de ficción y las convenciones teatrales." },
    { enunciado: "Para una obra en la que el público debe sentirse dentro de la acción, ¿qué espacio escénico conviene?", pasos: ["A la italiana el público mira desde fuera, separado.", "En un espacio circular el público rodea a los actores y está muy cerca.", "Un espacio no convencional permitiría incluso que el público se mueva."], resultado: "Un escenario circular o un espacio no convencional." },
  ],
  errores: [
    "Pensar que el teatro grabado en vídeo es lo mismo que el teatro: pierde el directo y la presencia del público.",
    "Creer que la danza es solo ballet: hay danza folclórica, urbana, contemporánea, ritual…",
    "Confundir ópera y zarzuela: la zarzuela alterna partes habladas y cantadas.",
    "Pensar que en un espectáculo solo trabajan los que salen al escenario.",
    "Creer que el circo necesita animales: el circo contemporáneo no los usa.",
  ],
  ejercicios: [
    { q: "Define artes escénicas y nombra cinco.", sol: "Artes creadas para representarse en vivo ante un público. Teatro, danza, circo, ópera y musical (también títeres, zarzuela y performance)." },
    { q: "¿Cuáles son los tres elementos imprescindibles de toda arte escénica?", sol: "El intérprete, el espectador y el espacio escénico (en un tiempo compartido)." },
    { q: "¿Qué es el pacto de ficción?", sol: "El acuerdo implícito por el que el público acepta como real lo que ocurre en escena mientras dura el espectáculo." },
    { q: "Explica por qué se dice que el teatro es un arte efímero.", sol: "Porque cada función es única y desaparece al terminar; aunque se repita, nunca es idéntica." },
    { q: "Escribe cinco tipos de danza con un ejemplo de cada uno.", sol: "Ritual (danzas de ceremonias), folclórica (jota), académica (ballet), contemporánea (piezas de autor) y urbana (hip hop)." },
    { q: "¿Qué diferencia el circo contemporáneo del tradicional?", sol: "El contemporáneo no usa animales, cuenta una historia y mezcla acrobacia con teatro, danza y música." },
    { q: "Diferencia ópera, zarzuela y musical.", sol: "Ópera: todo cantado con orquesta. Zarzuela: española, alterna canto y diálogo. Musical: diálogo, canciones y baile, de tradición anglosajona." },
    { q: "Describe tres tipos de espacio escénico.", sol: "A la italiana (público de frente), circular o arena (público alrededor) y de tres lados (público delante y a los lados, como en los corrales de comedias)." },
    { q: "Nombra seis oficios que intervienen en un espectáculo.", sol: "Dramaturgo, director, intérprete, escenógrafo, figurinista, iluminador (también coreógrafo, técnico de sonido, maquinista, regidor, productor)." },
    { q: "Elige un espectáculo que hayas visto y explica qué arte escénica era, qué espacio usaba y cómo era la relación con el público.", sol: "Respuesta abierta. Debe identificar el tipo de espectáculo, el espacio y si el público era pasivo o participaba." },
  ],
  quiz: [
    { q: "Lo propio de las artes escénicas es que son…", o: ["en vivo", "grabadas", "escritas"], a: 0, e: "Intérprete y público comparten espacio y tiempo." },
    { q: "Sin … no hay espectáculo escénico.", o: ["público", "decorado", "música"], a: 0, e: "El espectador es imprescindible." },
    { q: "El teatro totalmente cantado con orquesta es la…", o: ["ópera", "zarzuela", "performance"], a: 0, e: "Nacida en Italia hacia 1600." },
    { q: "La zarzuela…", o: ["alterna canto y diálogo", "no tiene música", "es un tipo de circo"], a: 0, e: "Género lírico español." },
    { q: "El flamenco es Patrimonio Inmaterial de la Humanidad desde…", o: ["2010", "1950", "1992"], a: 0, e: "Declarado por la UNESCO." },
    { q: "El circo moderno nació en…", o: ["Londres, 1768", "Roma, año 1", "Nueva York, 1950"], a: 0, e: "Con Philip Astley." },
    { q: "En el escenario a la italiana el público está…", o: ["de frente", "alrededor", "en el escenario"], a: 0, e: "Separado por la cuarta pared." },
    { q: "El único corral de comedias del siglo XVII conservado está en…", o: ["Almagro", "Madrid", "Sevilla"], a: 0, e: "Ciudad Real." },
    { q: "El figurinista diseña…", o: ["el vestuario", "las luces", "el texto"], a: 0, e: "Los figurines." },
    { q: "Quien crea los movimientos de una danza es el…", o: ["coreógrafo", "dramaturgo", "regidor"], a: 0, e: "Diseña la coreografía." },
  ],
  examen: [
    { q: "Una convención teatral es…", o: ["una regla que el público acepta", "un congreso de actores", "un tipo de decorado"], a: 0, e: "Pacto de ficción." },
    { q: "El regidor…", o: ["da las órdenes durante la función", "escribe la obra", "cobra las entradas"], a: 0, e: "Coordina técnica y escena en directo." },
    { q: "La performance es…", o: ["una acción artística en vivo, a menudo única", "una ópera corta", "un baile folclórico"], a: 0, e: "Mezcla artes plásticas y escénicas." },
  ],
  feynman: ["Qué son las artes escénicas y sus tres elementos", "Diferencias entre teatro, danza, circo, ópera y musical", "Tipos de espacio escénico", "Los oficios que hacen posible un espectáculo"],
  mapa: mapa("ARTES ESCÉNICAS", "var(--red)", [
    ["Elementos", "intérprete · espacio · público", "var(--ink)"],
    ["Formas", "teatro · danza · circo · ópera", "var(--red)"],
    ["Espacios", "italiana · circular · calle", "var(--sun)"],
    ["Oficios", "dirección · técnica · producción", "var(--pen)"],
  ], 270),
  tarjetas: [
    ["Artes escénicas", "Artes que se representan en vivo ante un público."],
    ["Pacto de ficción", "El público acepta como real lo que ve en escena."],
    ["Efímero", "Que dura poco: cada función es única."],
    ["Zarzuela", "Género español que alterna canto y diálogo."],
    ["Circo contemporáneo", "Acrobacia con teatro, danza y música, sin animales."],
    ["Escenario a la italiana", "El público mira de frente, separado por la cuarta pared."],
    ["Coreógrafo", "Quien crea los movimientos de una danza."],
    ["Figurinista", "Quien diseña el vestuario."],
  ],
  familias: ["Consultad la programación de un teatro o festival cercano y elegid juntos un espectáculo.", "Ved en vídeo fragmentos de ópera, musical y circo contemporáneo y comparad.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Artes Escénicas y Danza 4º ESO (optativa autonómica; marco del RD 217/2022): las artes escénicas y sus manifestaciones, elementos del hecho escénico, espacios y oficios.",
    ideas: ["Visita a un teatro con recorrido por el escenario y la parte técnica.", "Mural colectivo con fotos de distintas artes escénicas.", "Representar la misma escena en tres espacios distintos del instituto."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Instituto Nacional de las Artes Escénicas y de la Música (INAEM)", url: "https://www.culturaydeporte.gob.es/cultura/areas/artes-escenicas.html" },
  ],
  revisado: "2026-11-12",
};
