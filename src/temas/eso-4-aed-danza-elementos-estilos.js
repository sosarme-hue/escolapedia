// Artes Escénicas y Danza 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda } = require("./_hum");

module.exports = {
  materia: "Artes Escénicas y Danza",
  curso: "4-eso",
  titulo: "La danza: elementos y estilos",
  minutos: 60,
  objetivos: ["Identificar los elementos de la danza: cuerpo, espacio, tiempo y energía", "Conocer la evolución histórica de la danza y sus principales estilos", "Reconocer danzas tradicionales de España y del mundo", "Crear y analizar una secuencia de movimiento sencilla"],
  claves: ["cuerpo", "espacio", "tiempo", "energía", "coreografía", "estilo"],
  pregunta: {
    texto: "Un ballet clásico, una sardana, un baile de TikTok y una pieza de danza contemporánea parecen no tener nada en común. ¿Qué comparten?",
    respuesta: "Todas trabajan con los mismos <mark>elementos</mark>: un <b>cuerpo</b> que se mueve en un <b>espacio</b>, durante un <b>tiempo</b> (con ritmo) y con una <b>energía</b> determinada. Lo que cambia es cómo los combina cada estilo, cada época y cada cultura.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la danza?</h3><p>La <b>danza</b> es el arte de expresar mediante el <mark>movimiento del cuerpo</mark>, normalmente organizado según un ritmo y acompañado de música. Es una de las expresiones artísticas más antiguas: aparece en pinturas rupestres y en todas las culturas del mundo. Ha tenido funciones muy diversas: <b>ritual</b> (pedir lluvia, celebrar), <b>social</b> (bailes en fiestas, cortejo), <b>artística</b> (espectáculo) y también <b>terapéutica</b> y de salud. Una <b>coreografía</b> es la composición de una danza: la secuencia ordenada de movimientos creada por un coreógrafo.</p>`,
      svg: rueda("Funciones de la danza", "DANZA", [["ritual", "var(--bac)"], ["social", "var(--sun)"], ["artística", "var(--pen)"], ["salud", "var(--leaf)"], ["identidad", "var(--red)"]], "var(--ink)"),
    },
    {
      html: `<h3>Elemento 1: el cuerpo</h3><p>El <b>cuerpo</b> es el instrumento de la danza. Se trabaja preguntándose <mark>qué se mueve</mark>: el cuerpo entero o partes aisladas (cabeza, brazos, torso, cadera, piernas). Las <b>acciones</b> básicas son desplazarse, girar, saltar, caer, estirarse, encogerse, retorcerse, equilibrarse y detenerse. Las <b>formas</b> que adopta pueden ser rectas, curvas, angulares o retorcidas, simétricas o asimétricas. La danza también trabaja la relación entre bailarines: al unísono, en espejo, en canon (uno tras otro), en contraste o en contacto.</p>`,
    },
    {
      html: `<h3>Elemento 2: el espacio</h3><p>El <b>espacio</b> responde a <mark>dónde</mark> se mueve el cuerpo. El <b>espacio personal</b> o kinesfera es la burbuja que alcanzamos sin desplazarnos; el <b>espacio general</b>, toda la sala. Se trabajan los <b>niveles</b> (alto, medio, bajo), las <b>direcciones</b> (adelante, atrás, lados, diagonales), las <b>trayectorias</b> o dibujos en el suelo (rectas, curvas, zigzag, espirales) y el <b>tamaño</b> del movimiento (grande o pequeño). Las <b>formaciones</b> del grupo (línea, círculo, bloques) también comunican.</p>`,
      svg: filas("El espacio en la danza", [["Niveles", "alto · medio · bajo", "var(--pen)"], ["Direcciones", "delante · atrás · lados", "var(--red)"], ["Trayectorias", "recta · curva · zigzag", "var(--sun)"], ["Tamaño", "grande · pequeño", "var(--leaf)"], ["Formaciones", "línea · círculo · bloque", "var(--bac)"]]),
    },
    {
      html: `<h3>Elemento 3: el tiempo</h3><p>El <b>tiempo</b> responde a <mark>cuándo y a qué velocidad</mark>. Incluye el <b>pulso</b> (la pulsación regular de la música), el <b>ritmo</b> (combinación de duraciones), el <b>tempo</b> o velocidad (rápido, lento, acelerando, ritardando), el <b>compás</b> (agrupación de pulsos: el vals se baila en 3, la mayoría del pop en 4) y las <b>pausas</b>. Los bailarines cuentan los tiempos en grupos de ocho («cinco, seis, siete, ocho…») para coordinarse. Se puede bailar siguiendo la música o en contraste con ella, e incluso en silencio.</p>`,
      video: { id: "Nv0ODJPROTI", titulo: "Elementos de la danza", canal: "Mr. Art Peru", vistas: 82193, megusta: 0 },
    },
    {
      html: `<h3>Elemento 4: la energía</h3><p>La <b>energía</b> responde a <mark>cómo</mark> se mueve el cuerpo: la cualidad o dinámica del movimiento. Siguiendo a Rudolf Laban, se combina el <b>peso</b> (fuerte o ligero), el <b>flujo</b> (libre o controlado), el <b>tiempo</b> (súbito o sostenido) y el <b>espacio</b> (directo o indirecto). Con ellos se obtienen acciones como <i>golpear</i> (fuerte, súbito, directo), <i>flotar</i> (ligero, sostenido, indirecto), <i>deslizar</i> o <i>sacudir</i>. Un mismo paso cambia por completo con otra energía: caminar como un robot, como un astronauta o como si pisáramos brasas.</p>`,
      svg: dos("Cualidades de la energía", ["Fuerte", ["golpear", "empujar", "cortar", "saltar con fuerza", "caer de golpe"], "var(--red)"], ["Suave", ["flotar", "deslizar", "acariciar", "fundirse", "suspender"], "var(--inf)"]),
    },
    {
      html: `<h3>Historia de la danza escénica</h3><p>En las cortes del Renacimiento se bailaban danzas sociales que dieron origen al <b>ballet</b>. Luis XIV de Francia, gran bailarín, fundó en 1661 la Real Academia de Danza, y se fijaron las cinco <b>posiciones</b> de pies y el vocabulario en francés (<i>plié</i>, <i>relevé</i>, <i>pirouette</i>). En el siglo XIX, el <mark>ballet romántico</mark> introdujo las puntas y el tutú (<i>Giselle</i>), y Chaikovski compuso <i>El lago de los cisnes</i>, <i>La bella durmiente</i> y <i>El cascanueces</i>. En el siglo XX, <b>Isadora Duncan</b> bailó descalza y libre, y <b>Martha Graham</b> creó la <b>danza moderna</b>, con la técnica de contracción y relajación. Después llegaron la <b>danza contemporánea</b> y la <b>danza-teatro</b> de Pina Bausch.</p>`,
      video: { id: "mR8uo1-yDAc", titulo: "Historia de la danza: prehistoria, clásico y contemporáneo", canal: "Kevin G", vistas: 209414, megusta: 0 },
    },
    {
      html: `<h3>Estilos de danza</h3>${tabla(["Estilo", "Rasgos", "Ejemplo o figura"], [["Ballet clásico", "puntas, verticalidad, ligereza, técnica estricta", "El lago de los cisnes"], ["Danza moderna", "uso del suelo y del torso, expresión", "Martha Graham"], ["Danza contemporánea", "libertad, investigación del movimiento, cualquier tema", "Sol Picó, Nacho Duato"], ["Danza española", "escuela bolera, folclore estilizado, castañuelas", "Ballet Nacional de España"], ["Flamenco", "zapateado, braceo, cante y guitarra, palos", "Antonio Gades, Sara Baras"], ["Danzas urbanas", "hip hop, breaking, popping, voguing; nacidas en la calle", "el breaking fue olímpico en París 2024"], ["Bailes de salón y latinos", "en pareja: vals, tango, salsa, bachata", "competiciones de baile deportivo"]])}`,
    },
    {
      html: `<h3>Danzas tradicionales</h3><p>Cada región tiene <b>danzas folclóricas</b> que expresan su identidad y se transmiten de generación en generación: la <mark>jota</mark> en Aragón, Navarra, Valencia y otras zonas; la <b>sardana</b> en Cataluña, en círculo y cogidos de la mano; la <b>muiñeira</b> en Galicia; el <b>aurresku</b> en el País Vasco; las <b>sevillanas</b> en Andalucía; la <b>isa</b> en Canarias; el <b>fandango</b> en muchas zonas. En el mundo hay danzas famosas como el <b>haka</b> maorí, el <b>tango</b> argentino (Patrimonio de la Humanidad), el <b>kathak</b> de la India o las danzas africanas de percusión. Bailarlas es una forma de conocer otras culturas.</p>`,
      svg: filas("Danzas tradicionales de España", [["Jota", "Aragón, Navarra, Valencia", "var(--red)"], ["Sardana", "Cataluña, en círculo", "var(--sun)"], ["Muiñeira", "Galicia, con gaita", "var(--leaf)"], ["Aurresku", "País Vasco, de honor", "var(--pen)"], ["Sevillanas", "Andalucía, en pareja", "var(--bac)"]]),
    },
  ],
  figura: {
    titulo: "Los cuatro elementos de la danza",
    svg: `<svg viewBox="0 0 680 210" role="img" aria-label="Cuerpo: qué se mueve; espacio: dónde; tiempo: cuándo y a qué velocidad; energía: cómo">
      <rect width="680" height="210" rx="16" fill="var(--paper)"/>
      ${[["Cuerpo", "¿qué se mueve?", "partes · acciones", "var(--red)"], ["Espacio", "¿dónde?", "niveles · trayectorias", "var(--pen)"], ["Tiempo", "¿cuándo?", "pulso · ritmo · tempo", "var(--sun)"], ["Energía", "¿cómo?", "fuerte · ligera", "var(--leaf)"]].map(([t, q, d, c], i) => `<rect x="${20 + i * 162}" y="20" width="150" height="170" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><circle cx="${95 + i * 162}" cy="66" r="28" fill="${c}"/><text x="${95 + i * 162}" y="72" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" ${D}>${i + 1}</text><text x="${95 + i * 162}" y="122" text-anchor="middle" font-size="17" font-weight="700" fill="${c}" ${D}>${t}</text><text x="${95 + i * 162}" y="146" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${q}</text><text x="${95 + i * 162}" y="170" text-anchor="middle" font-size="11.5" fill="var(--muted)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "toGgmllHgkA", titulo: "Hagamos arte: elementos de la danza", canal: "elprofeleo", vistas: 100588, megusta: 0, busqueda: "elementos de la danza cuerpo espacio tiempo energía" },
  ejemplos: [
    { enunciado: "Analiza con los cuatro elementos este fragmento: un grupo avanza en diagonal, despacio, agachado, y de repente salta a la vez con un golpe de brazos.", pasos: ["Cuerpo: todo el cuerpo; acciones de avanzar y saltar; brazos que golpean.", "Espacio: trayectoria diagonal; cambio de nivel bajo a alto.", "Tiempo: lento y sostenido, luego súbito.", "Energía: contenida y ligera al principio, fuerte y explosiva al final; unísono."], resultado: "El contraste de nivel, tiempo y energía crea sorpresa." },
    { enunciado: "Crea una secuencia de 4 × 8 tiempos sobre el tema «la tormenta».", pasos: ["8 tiempos: quietud en nivel bajo; pequeños movimientos de dedos como gotas.", "8 tiempos: los brazos crecen y el cuerpo se balancea (viento), nivel medio.", "8 tiempos: giros y saltos súbitos y fuertes (rayos).", "8 tiempos: el movimiento se ralentiza y vuelve al suelo (calma)."], resultado: "Una coreografía corta con inicio, clímax y final." },
    { enunciado: "Compara el ballet clásico y la danza contemporánea.", pasos: ["Ballet: técnica codificada, verticalidad, puntas, sensación de ingravidez, historias de cuento.", "Contemporánea: libertad de movimiento, uso del suelo y del peso, pies descalzos, temas actuales o abstractos.", "Ambas exigen técnica, pero buscan efectos distintos."], resultado: "El ballet busca elevarse; la contemporánea explora todas las posibilidades del cuerpo." },
  ],
  errores: [
    "Pensar que bailar es solo seguir el ritmo de la música: también cuentan espacio, energía y expresión.",
    "Creer que la danza contemporánea es «hacer lo que quieras»: exige técnica y composición.",
    "Confundir flamenco con sevillanas: las sevillanas son un baile popular; el flamenco es un arte con muchos palos.",
    "Contar los tiempos sin escuchar el pulso de la música.",
    "Pensar que las danzas tradicionales son cosa del pasado: siguen vivas en fiestas y grupos.",
  ],
  ejercicios: [
    { q: "Define danza y coreografía.", sol: "Danza: arte de expresar con el movimiento del cuerpo, normalmente con ritmo y música. Coreografía: composición ordenada de movimientos de una danza." },
    { q: "Escribe cuatro funciones que ha tenido la danza.", sol: "Ritual, social, artística y terapéutica o de salud (también de identidad cultural)." },
    { q: "¿Cuáles son los cuatro elementos de la danza y a qué pregunta responde cada uno?", sol: "Cuerpo (¿qué se mueve?), espacio (¿dónde?), tiempo (¿cuándo y a qué velocidad?) y energía (¿cómo?)." },
    { q: "Explica qué son los niveles y las trayectorias.", sol: "Niveles: altura a la que se mueve el cuerpo (alto, medio, bajo). Trayectorias: dibujos que trazamos en el suelo al desplazarnos (rectas, curvas, zigzag)." },
    { q: "Diferencia pulso, ritmo y tempo.", sol: "Pulso: latido regular de la música. Ritmo: combinación de duraciones. Tempo: velocidad." },
    { q: "Describe golpear y flotar según la energía.", sol: "Golpear: fuerte, súbito y directo. Flotar: ligero, sostenido e indirecto." },
    { q: "¿Qué aportó el ballet romántico?", sol: "Las zapatillas de puntas, el tutú y temas de fantasía y amor, como Giselle." },
    { q: "¿Qué cambiaron Isadora Duncan y Martha Graham?", sol: "Duncan bailó descalza y con libertad; Graham creó la danza moderna con la técnica de contracción y relajación y el uso del suelo." },
    { q: "Escribe cinco danzas tradicionales de España con su comunidad.", sol: "Jota (Aragón), sardana (Cataluña), muiñeira (Galicia), aurresku (País Vasco), sevillanas (Andalucía) (también isa canaria)." },
    { q: "Crea y describe una secuencia de 2 × 8 tiempos que use dos niveles y dos energías distintas.", sol: "Respuesta abierta. Debe indicar movimientos, nivel, energía y cómo se reparten los tiempos." },
  ],
  quiz: [
    { q: "Los cuatro elementos de la danza son cuerpo, espacio, tiempo y…", o: ["energía", "vestuario", "escenario"], a: 0, e: "Cómo se mueve." },
    { q: "La kinesfera es…", o: ["el espacio personal", "un paso de ballet", "una danza griega"], a: 0, e: "La burbuja que alcanzamos sin desplazarnos." },
    { q: "El tempo es…", o: ["la velocidad", "la altura", "la fuerza"], a: 0, e: "Rápido o lento." },
    { q: "El vals se cuenta en…", o: ["3", "4", "2"], a: 0, e: "Compás ternario." },
    { q: "Flotar es un movimiento…", o: ["ligero y sostenido", "fuerte y súbito", "rígido"], a: 0, e: "Según Laban." },
    { q: "El ballet se codificó en la corte de…", o: ["Luis XIV", "Felipe II", "Napoleón"], a: 0, e: "Real Academia de Danza, 1661." },
    { q: "El lago de los cisnes es de…", o: ["Chaikovski", "Mozart", "Bach"], a: 0, e: "Ballet ruso." },
    { q: "La creadora de la danza moderna fue…", o: ["Martha Graham", "Pina Bausch", "Sara Baras"], a: 0, e: "Contracción y relajación." },
    { q: "La sardana se baila en…", o: ["Cataluña", "Galicia", "Andalucía"], a: 0, e: "En círculo." },
    { q: "El breaking fue deporte olímpico en…", o: ["París 2024", "Barcelona 1992", "Atenas 2004"], a: 0, e: "Danza urbana." },
  ],
  examen: [
    { q: "Moverse al unísono significa…", o: ["todos a la vez igual", "uno tras otro", "en espejo"], a: 0, e: "El canon es uno tras otro." },
    { q: "Pina Bausch es conocida por la…", o: ["danza-teatro", "jota", "escuela bolera"], a: 0, e: "Alemania, siglo XX." },
    { q: "El tango argentino es…", o: ["Patrimonio de la Humanidad", "una danza griega", "un estilo de ballet"], a: 0, e: "Declarado por la UNESCO." },
  ],
  feynman: ["Qué es la danza y qué funciones ha tenido", "Los cuatro elementos: cuerpo, espacio, tiempo y energía", "La evolución del ballet a la danza contemporánea", "Estilos actuales y danzas tradicionales"],
  mapa: mapa("DANZA", "var(--pen)", [
    ["Elementos", "cuerpo · espacio · tiempo · energía", "var(--red)"],
    ["Historia", "ballet · moderna · contemporánea", "var(--pen)"],
    ["Estilos", "flamenco · urbana · salón", "var(--sun)"],
    ["Tradición", "jota · sardana · muiñeira", "var(--leaf)"],
  ], 290),
  tarjetas: [
    ["Coreografía", "Composición ordenada de los movimientos de una danza."],
    ["Kinesfera", "Espacio personal que alcanzamos sin desplazarnos."],
    ["Niveles", "Alto, medio y bajo."],
    ["Tempo", "Velocidad del movimiento o de la música."],
    ["Energía", "Cualidad del movimiento: fuerte o ligera, súbita o sostenida."],
    ["Ballet romántico", "Siglo XIX: puntas, tutú y temas de fantasía."],
    ["Danza moderna", "Martha Graham: contracción, relajación y uso del suelo."],
    ["Canon", "Los bailarines repiten el mismo movimiento uno detrás de otro."],
  ],
  familias: ["Bailad juntos una canción cambiando la energía cada ocho tiempos (robot, astronauta, gelatina).", "Buscad la danza tradicional de vuestra localidad o de vuestro lugar de origen.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Artes Escénicas y Danza 4º ESO (optativa autonómica; marco del RD 217/2022): elementos de la danza, historia y estilos, danzas tradicionales y composición coreográfica.",
    ideas: ["Composición por grupos con tarjetas de elementos sorteados (nivel, trayectoria, energía).", "Taller de una danza tradicional con una asociación local.", "Ver fragmentos de ballet, Graham y breaking y analizarlos con los cuatro elementos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ballet Nacional de España (INAEM)", url: "https://balletnacional.mcu.es/" },
  ],
  revisado: "2026-11-12",
};
