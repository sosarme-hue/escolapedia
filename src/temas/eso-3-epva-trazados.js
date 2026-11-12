// Educación Plástica, Visual y Audiovisual 3º ESO: trazados geométricos básicos. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Trazados geométricos básicos",
  minutos: 50,
  objetivos: ["Usar con precisión los instrumentos de dibujo técnico", "Trazar paralelas y perpendiculares con escuadra y cartabón", "Construir mediatrices, bisectrices y dividir segmentos en partes iguales", "Operar con ángulos y resolver tangencias sencillas"],
  claves: ["escuadra", "cartabón", "compás", "mediatriz", "bisectriz", "Tales"],
  pregunta: {
    texto: "Los arquitectos y diseñadores trabajan hoy con ordenador. ¿Para qué sirve aprender a dibujar con regla y compás?",
    respuesta: "Porque los programas de diseño (CAD) usan <mark>las mismas construcciones</mark>: mediatrices, paralelas, tangencias. Si entiendes cómo se trazan a mano, entiendes qué hace el programa y puedes resolver problemas de diseño, desde un logotipo hasta una pieza de una máquina.",
  },
  bloques: [
    {
      html: `<h3>Los instrumentos de dibujo técnico</h3>${tabla(["Instrumento", "Para qué sirve"], [["<b>Lápices</b> duros (H, 2H) y blandos (HB, B)", "duros para construir con línea fina; blandos para repasar el resultado"], ["<b>Regla</b> graduada", "medir y trazar segmentos"], ["<b>Escuadra</b>", "triángulo rectángulo isósceles: ángulos de 90°, 45° y 45°"], ["<b>Cartabón</b>", "triángulo rectángulo escaleno: ángulos de 90°, 60° y 30°"], ["<b>Compás</b>", "trazar circunferencias y arcos y trasladar medidas"], ["<b>Transportador</b>", "medir y dibujar ángulos"]])}<p>La <b>precisión</b> es lo más importante: punta del lápiz y del compás bien afiladas, instrumentos limpios y líneas auxiliares finas que no se borran, porque demuestran cómo se ha hecho la construcción.</p>`,
      svg: svg("La escuadra con ángulos de 45 grados y el cartabón con ángulos de 30 y 60 grados", `<path d="M20 150 L 120 150 L 20 50 Z" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/><path d="M140 150 L 240 150 L 140 92 Z" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2.5"/>
        <path d="M20 140 h 10 v 10 M140 140 h 10 v 10" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
        ${t(70, 170, "escuadra", { c: "var(--pen)", s: 12 })}${t(190, 170, "cartabón", { c: "var(--leaf)", s: 12 })}${t(98, 144, "45°", { s: 10 })}${t(30, 80, "45°", { s: 10, a: "start" })}${t(214, 144, "30°", { s: 10 })}${t(150, 112, "60°", { s: 10, a: "start" })}`),
    },
    {
      html: `<h3>Paralelas y perpendiculares</h3><p>Dos rectas son <b>paralelas</b> si nunca se cortan y <b>perpendiculares</b> si se cortan formando cuatro ángulos rectos (90°).</p><ul><li><b>Paralelas</b>: se apoya un lado de la escuadra en la recta y el cartabón como guía junto a otro lado; se desliza la escuadra sobre el cartabón y se trazan las paralelas.</li><li><b>Perpendiculares</b>: se coloca la hipotenusa de la escuadra sobre la recta y el cartabón apoyado en ella; se gira la escuadra 90° apoyándola en el otro cateto y se traza.</li></ul><p>Con compás también se puede trazar la perpendicular por un punto: es la <b>mediatriz</b> de un segmento centrado en ese punto.</p>`,
      video: { id: "4tpTZjV-ewU", titulo: "Paralelas y perpendiculares con escuadra y cartabón", canal: "Profe Vili", vistas: 628902, megusta: 0 },
    },
    {
      html: `<h3>Mediatriz de un segmento</h3><p>La <b>mediatriz</b> es la recta perpendicular a un segmento que pasa por su punto medio. Todos sus puntos están a la misma distancia de los extremos.</p><ol><li>Con centro en A y radio mayor que la mitad de AB, traza un arco por encima y otro por debajo del segmento.</li><li>Con el <mark>mismo radio</mark> y centro en B, traza dos arcos que corten a los anteriores.</li><li>Une los dos puntos de corte: esa recta es la mediatriz.</li></ol><p>Sirve para hallar el punto medio de un segmento, trazar perpendiculares y encontrar el centro de una circunferencia que pasa por tres puntos.</p>`,
      svg: svg("Construcción de la mediatriz: arcos con centro en A y en B que se cortan en dos puntos; la recta que los une es la mediatriz", `<path d="M60 100 H 200" stroke="var(--ink)" stroke-width="3"/><circle cx="60" cy="100" r="4" fill="var(--ink)"/><circle cx="200" cy="100" r="4" fill="var(--ink)"/>
        <path d="M118 40 A 90 90 0 0 1 148 40 M118 160 A 90 90 0 0 0 148 160" fill="none" stroke="var(--pen)" stroke-width="1.8"/><path d="M142 40 A 90 90 0 0 0 112 40 M142 160 A 90 90 0 0 1 112 160" fill="none" stroke="var(--leaf)" stroke-width="1.8"/>
        <path d="M130 20 V 176" stroke="var(--red)" stroke-width="2.5"/><circle cx="130" cy="100" r="4" fill="var(--red)"/>
        ${t(50, 120, "A", { s: 14 })}${t(210, 120, "B", { s: 14 })}${t(138, 90, "M", { c: "var(--red)", s: 12, a: "start" })}${t(200, 40, "mediatriz", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>Bisectriz de un ángulo</h3><p>La <b>bisectriz</b> divide un ángulo en dos ángulos iguales. Sus puntos están a la misma distancia de los dos lados.</p><ol><li>Con centro en el vértice V, traza un arco que corte los dos lados en los puntos 1 y 2.</li><li>Con centro en 1 y en 2 y un mismo radio, traza dos arcos que se corten en un punto P.</li><li>Une V con P: es la bisectriz.</li></ol><p>Aplicando bisectrices sucesivas a un ángulo recto se obtienen ángulos de 45°, 22,5°… Las bisectrices son clave para construir tangencias y polígonos.</p>`,
      video: { id: "1b8GPGamYfI", titulo: "Bisectriz de un ángulo", canal: "Arturo Geometría", vistas: 616123, megusta: 0 },
    },
    {
      html: `<h3>Operaciones con ángulos</h3><p>Con compás se pueden <b>copiar</b>, <b>sumar</b> y <b>restar</b> ángulos sin transportador: se traza un arco con el mismo radio en el ángulo original y en el nuevo vértice, y se traslada con el compás la abertura entre los puntos de corte.</p><p>Con escuadra y cartabón, combinando sus ángulos, se dibujan directamente ángulos de <mark>15°, 30°, 45°, 60°, 75°, 90°, 105°, 120°, 135° y 150°</mark>. Por ejemplo, 75° = 45° + 30° y 15° = 45° − 30°.</p>${tabla(["Ángulo", "Cómo"], [["15°", "45° − 30°"], ["75°", "45° + 30°"], ["105°", "60° + 45°"], ["135°", "90° + 45°"]])}`,
    },
    {
      html: `<h3>Dividir un segmento en partes iguales: teorema de Tales</h3><p>Para dividir un segmento AB en, por ejemplo, 5 partes iguales, aunque su medida no sea exacta:</p><ol><li>Desde A traza una semirrecta auxiliar con cualquier inclinación.</li><li>Sobre ella, con el compás, marca <b>5 segmentos iguales</b> de cualquier medida.</li><li>Une la última marca con B.</li><li>Traza <mark>paralelas</mark> a esa línea por las demás marcas: cortan AB en 5 partes iguales.</li></ol><p>Funciona por el <b>teorema de Tales</b>: rectas paralelas que cortan a dos rectas determinan segmentos proporcionales.</p>`,
      svg: svg("División de un segmento en cinco partes iguales con una recta auxiliar y paralelas, según el teorema de Tales", `<path d="M20 140 H 240" stroke="var(--ink)" stroke-width="3"/><path d="M20 140 L 200 30" stroke="var(--muted)" stroke-width="1.8"/>
        ${[1, 2, 3, 4, 5].map((i) => `<circle cx="${20 + i * 36}" cy="${140 - i * 22}" r="3" fill="var(--pen)"/><path d="M${20 + i * 36} ${140 - i * 22} L ${20 + i * 44} 140" stroke="var(--pen)" stroke-width="1.5" ${i === 5 ? "" : 'stroke-dasharray="4 3"'}/><circle cx="${20 + i * 44}" cy="140" r="3.5" fill="var(--red)"/>`).join("")}
        ${t(14, 160, "A", { s: 13 })}${t(240, 160, "B", { s: 13 })}${t(130, 172, "5 partes iguales", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>Circunferencia: elementos y posiciones</h3><p>Elementos de la <b>circunferencia</b>: centro, <b>radio</b> (del centro a un punto), <b>diámetro</b> (cuerda que pasa por el centro, el doble del radio), <b>cuerda</b> (segmento entre dos puntos), <b>arco</b> (trozo de circunferencia) y <b>flecha</b>.</p><p>Una recta puede ser <b>exterior</b> (no la toca), <b>secante</b> (la corta en dos puntos) o <b>tangente</b> (la toca en un solo punto). La recta tangente es siempre <mark>perpendicular al radio</mark> en el punto de tangencia. Esta propiedad es la base de todas las construcciones de tangencias.</p>`,
    },
    {
      html: `<h3>Tangencias y enlaces</h3><p>Dos curvas o una recta y una curva son <b>tangentes</b> si se tocan en un punto sin cortarse, con una transición suave. Reglas básicas:</p><ul><li>El punto de tangencia entre una recta y una circunferencia está en la perpendicular a la recta que pasa por el centro.</li><li>El punto de tangencia entre dos circunferencias está en la recta que une sus <b>centros</b>.</li></ul><p>Los <b>enlaces</b> unen rectas y arcos de forma continua, sin «escalones». Están en las curvas de una carretera, en los logotipos redondeados, en el perfil de una llave o en los arcos arquitectónicos. Por ejemplo, para redondear la esquina de un rectángulo se traza un arco cuyo centro está a la misma distancia (el radio) de los dos lados.</p>`,
      svg: svg("Esquina de un rectángulo redondeada con un arco tangente a los dos lados; el centro del arco equidista de ambos lados", `<path d="M30 40 H 150 A 60 60 0 0 1 210 100 V 160" fill="none" stroke="var(--pen)" stroke-width="4"/><path d="M150 40 H 210 V 100" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
        <circle cx="150" cy="100" r="4" fill="var(--red)"/><path d="M150 100 V 40 M150 100 H 210" stroke="var(--red)" stroke-width="1.5"/><circle cx="150" cy="40" r="4" fill="var(--leaf)"/><circle cx="210" cy="100" r="4" fill="var(--leaf)"/>
        ${t(140, 112, "O", { c: "var(--red)", s: 12, a: "end" })}${t(90, 120, "centro a distancia r", { c: "var(--red)", s: 10 })}${t(90, 134, "de los dos lados", { c: "var(--red)", s: 10 })}${t(214, 28, "puntos de tangencia", { c: "var(--leaf)", s: 10, a: "end" })}`),
    },
    {
      html: `<h3>Trazados geométricos en el arte y el diseño</h3><p>La geometría ha guiado el arte desde la Antigüedad: los <b>templos griegos</b> se basaban en proporciones exactas; los <b>rosetones góticos</b> y los <b>arcos</b> (de medio punto, apuntado, de herradura) se trazaban con compás; la <b>decoración islámica</b> parte de redes de circunferencias y polígonos.</p><p>Hoy, el <b>diseño gráfico</b> construye logotipos sobre retículas de círculos y tangencias para que las curvas sean perfectas, y el <b>diseño industrial</b> define piezas con planos acotados. Los programas de CAD y de vectores, como Inkscape, trabajan con estas mismas herramientas: paralelas, perpendiculares, ajustes a tangente.</p>`,
    },
  ],
  figura: {
    titulo: "Construcciones fundamentales",
    svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Paralelas y perpendiculares con escuadra y cartabón; mediatriz con dos pares de arcos; bisectriz con arcos desde los lados; Tales para dividir segmentos; tangente perpendicular al radio">
      <rect width="640" height="280" rx="16" fill="var(--paper)"/>
      ${[["Paralelas / perpendiculares", "escuadra que desliza sobre el cartabón", "var(--pen)"], ["Mediatriz", "arcos iguales desde A y B; une los cortes", "var(--red)"], ["Bisectriz", "arco desde V; arcos iguales desde 1 y 2", "var(--leaf)"], ["Tales", "recta auxiliar + paralelas = partes iguales", "var(--inf)"], ["Tangencia", "la tangente es perpendicular al radio", "var(--hl-ink)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${41 + i * 52}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="290" y="${41 + i * 52}" font-size="14" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "LKsylMVkBJc", titulo: "Mediatriz y bisectriz paso a paso", canal: "Dibujo Técnico paso a paso", vistas: 330427, megusta: 0, busqueda: "mediatriz y bisectriz con compás" },
  quiz: mezcla([
    { q: "El cartabón tiene ángulos de…", o: ["90°, 45° y 45°", "90°, 60° y 30°", "60°, 60° y 60°"], a: 1, e: "Es un triángulo escaleno." },
    { q: "Para las líneas auxiliares conviene un lápiz…", o: ["duro (H)", "blando (6B)", "de color"], a: 0, e: "Traza líneas finas." },
    { q: "La mediatriz de un segmento es…", o: ["perpendicular por su punto medio", "paralela al segmento", "la mitad del segmento"], a: 0, e: "Equidista de los extremos." },
    { q: "La bisectriz divide un ángulo en…", o: ["dos ángulos iguales", "tres partes", "dos ángulos rectos"], a: 0, e: "Por definición." },
    { q: "Con escuadra y cartabón, 75° se obtiene como…", o: ["45° + 30°", "60° + 30°", "90° − 30°"], a: 0, e: "45 + 30 = 75." },
    { q: "Para dividir un segmento en partes iguales se usa el teorema de…", o: ["Pitágoras", "Tales", "Euler"], a: 1, e: "Paralelas y proporcionalidad." },
    { q: "Una recta que toca a una circunferencia en un solo punto es…", o: ["secante", "tangente", "exterior"], a: 1, e: "Punto de tangencia." },
    { q: "La tangente a una circunferencia es perpendicular…", o: ["al diámetro horizontal", "al radio en el punto de tangencia", "a cualquier cuerda"], a: 1, e: "Propiedad básica." },
    { q: "El punto de tangencia de dos circunferencias está…", o: ["en la recta que une sus centros", "en su mediatriz", "en cualquier sitio"], a: 0, e: "Alineado con los centros." },
    { q: "El diámetro mide…", o: ["la mitad del radio", "el doble del radio", "lo mismo que el radio"], a: 1, e: "Pasa por el centro." },
  ]),
  examen: mezcla([
    { q: "Con escuadra y cartabón, 15° se obtiene como…", o: ["45° − 30°", "60° − 30°", "30° / 2"], a: 0, e: "Restando ángulos." },
    { q: "Al trazar la mediatriz, los arcos desde A y B deben tener…", o: ["el mismo radio", "radios distintos", "radio igual a AB/4"], a: 0, e: "Y mayor que la mitad de AB." },
    { q: "Las líneas auxiliares de una construcción…", o: ["se borran siempre", "se dejan finas", "se repasan en negro"], a: 1, e: "Demuestran el proceso." },
  ]),
  feynman: ["Diferencia entre escuadra y cartabón", "Cómo trazar la mediatriz y por qué funciona", "Cómo dividir un segmento en 7 partes iguales", "Qué condición cumple una recta tangente"],
  mapa: mapa("TRAZADOS", "var(--eso)", [
    ["Instrumentos", "escuadra · cartabón · compás", "var(--pen)"],
    ["Lugares", "mediatriz · bisectriz", "var(--red)"],
    ["Tales", "dividir segmentos", "var(--leaf)"],
    ["Tangencias", "rectas · arcos · enlaces", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Escuadra", "Triángulo con ángulos de 90°, 45° y 45°."],
    ["Cartabón", "Triángulo con ángulos de 90°, 60° y 30°."],
    ["Mediatriz", "Perpendicular a un segmento por su punto medio."],
    ["Bisectriz", "Recta que divide un ángulo en dos iguales."],
    ["Teorema de Tales", "Paralelas cortan a dos rectas en segmentos proporcionales."],
    ["Recta tangente", "Toca la circunferencia en un punto y es perpendicular al radio."],
    ["Tangencia entre circunferencias", "El punto está en la recta que une los centros."],
    ["Enlace", "Unión suave y continua de rectas y arcos."],
  ],
  familias: ["Buscad en casa objetos con esquinas redondeadas (móvil, mesa) y señalad dónde están las tangencias.", "Practicad juntos a dividir una tira de papel en partes iguales con el método de Tales.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Geometría plana: instrumentos de dibujo técnico, paralelas y perpendiculares, mediatriz, bisectriz, operaciones con ángulos, teorema de Tales y tangencias básicas (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Reproducir un logotipo sencillo a partir de su retícula de circunferencias.", "Trazar arcos arquitectónicos de medio punto, apuntado y de herradura.", "Comparar construcciones a mano y en GeoGebra o Inkscape."],
  },
  fuentes: [RD, { t: "GeoGebra: construcciones con regla y compás", url: "https://www.geogebra.org/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Construcciones paso a paso",
  ejemplos: [
    { enunciado: "Divide un segmento de 8,3 cm en 3 partes iguales.",
      pasos: ["Traza desde A una semirrecta auxiliar inclinada unos 30°.", "Marca con el compás 3 segmentos iguales (por ejemplo, de 2 cm): puntos 1, 2 y 3.", "Une el punto 3 con B.", "Traza por 1 y 2 paralelas a 3B con escuadra y cartabón."],
      resultado: "Las paralelas cortan AB en tres segmentos iguales de unos 2,77 cm." },
    { enunciado: "Construye un ángulo de 22,5° solo con compás y regla.",
      pasos: ["Traza una recta y su perpendicular (mediatriz de un segmento): ángulo de 90°.", "Traza la bisectriz del ángulo recto: 45°.", "Traza la bisectriz de 45°: 22,5°."],
      resultado: "Ángulo de 22,5° obtenido con dos bisectrices." },
    { enunciado: "Halla el centro de una circunferencia de la que solo conoces un arco.",
      pasos: ["Marca tres puntos A, B y C sobre el arco.", "Traza la mediatriz de AB y la de BC.", "El punto donde se cortan es el centro."],
      resultado: "El centro equidista de A, B y C." },
  ],
  errores: [
    "Cambiar la abertura del compás entre los arcos de una mediatriz.",
    "Repasar con fuerza las líneas auxiliares o borrarlas.",
    "Trazar paralelas moviendo los dos instrumentos a la vez.",
    "Unir arcos y rectas sin hallar el punto de tangencia, dejando un «escalón».",
    "Medir con regla para dividir un segmento cuya longitud no es exacta, en vez de usar Tales.",
  ],
  ejercicios: [
    { q: "¿Qué ángulos puedes trazar con la escuadra sola? ¿Y con el cartabón solo?", sol: "Escuadra: 90° y 45°. Cartabón: 90°, 60° y 30°." },
    { q: "Explica cómo trazarías ángulos de 105° y 120° con escuadra y cartabón.", sol: "105° = 60° + 45°. 120° = 90° + 30° (o 180° − 60°)." },
    { q: "Traza la mediatriz de un segmento de 7 cm y comprueba con la regla que corta en su punto medio.", sol: "Respuesta gráfica. El punto de corte debe quedar a 3,5 cm de cada extremo." },
    { q: "Dibuja un ángulo de 70° con transportador y traza su bisectriz. ¿Cuánto mide cada mitad?", sol: "35°." },
    { q: "Divide un segmento de 10 cm en 7 partes iguales usando Tales.", sol: "Respuesta gráfica. Cada parte medirá unos 1,43 cm." },
    { q: "Dibuja una circunferencia y señala radio, diámetro, cuerda, arco y una recta tangente.", sol: "Respuesta gráfica. La tangente debe ser perpendicular al radio en el punto de contacto." },
    { q: "Copia un ángulo dado con compás, sin transportador. Describe los pasos.", sol: "Arco con centro en el vértice original; mismo arco desde el nuevo vértice; trasladar con el compás la distancia entre los cortes; unir." },
    { q: "Redondea las cuatro esquinas de un rectángulo de 8 × 5 cm con arcos de 1 cm de radio.", sol: "En cada esquina, el centro del arco está a 1 cm de los dos lados; los puntos de tangencia están a 1 cm del vértice." },
    { q: "Halla el centro de la circunferencia que pasa por tres puntos no alineados.", sol: "Es el corte de las mediatrices de los segmentos que los unen (circuncentro)." },
    { q: "Busca un logotipo construido con circunferencias y tangencias y reprodúcelo con compás.", sol: "Respuesta abierta. Se valora la precisión de las tangencias y que no haya escalones." },
  ],
};
