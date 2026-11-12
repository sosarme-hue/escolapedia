// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Cadena de carbonos en zigzag con hidrógenos implícitos.
function zigzag(x, y, n, dx = 30, dy = 18, color = "var(--ink)") {
  const pts = Array.from({ length: n }, (_, i) => [x + i * dx, y + (i % 2 ? -dy : 0)]);
  return `<path d="M${pts.map((p) => p.join(" ")).join(" L ")}" fill="none" stroke="${color}" stroke-width="3" stroke-linejoin="round"/>`;
}

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "Química del carbono",
  minutos: 40,
  objetivos: ["Explicar por qué el carbono forma tantos compuestos", "Nombrar y formular hidrocarburos sencillos", "Reconocer los grupos funcionales más importantes"],
  claves: ["tetravalente", "hidrocarburo", "alcano", "alqueno", "alquino", "grupo funcional"],
  pregunta: {
    texto: "Se conocen unos 120 000 compuestos inorgánicos, pero más de 20 millones con carbono. ¿Qué tiene de especial este átomo?",
    respuesta: "El carbono tiene <mark>4 electrones de valencia</mark> y forma cuatro enlaces covalentes muy estables, también <b>con otros carbonos</b>. Así se construyen cadenas largas, ramificadas y anillos casi sin límite: de ahí el plástico, la gasolina, el azúcar y tu propio ADN.",
  },
  bloques: [
    {
      html: `<h3>El átomo de carbono</h3><p>El carbono (Z = 6) es <b>tetravalente</b>: forma <mark>cuatro enlaces</mark>. Puede unirse a otros carbonos con enlaces <b>simples</b> (C–C), <b>dobles</b> (C=C) o <b>triples</b> (C≡C) y formar cadenas abiertas, ramificadas o cerradas en anillo. Con el hidrógeno, el oxígeno y el nitrógeno da lugar a toda la <b>química orgánica</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Molécula de metano: un carbono en el centro con cuatro enlaces a hidrógenos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g stroke="var(--ink)" stroke-width="3"><path d="M130 90 V 40 M130 90 V 140 M130 90 H 70 M130 90 H 190"/></g>
        <circle cx="130" cy="90" r="20" fill="var(--ink)"/><text x="130" y="97" text-anchor="middle" font-size="20" font-weight="700" fill="#fff" ${D}>C</text>
        ${[[130, 36], [130, 144], [64, 90], [196, 90]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="var(--pen)" ${F}>H</text>`).join("")}
        <text x="214" y="40" font-size="14" font-weight="700" fill="var(--red)" ${F}>CH₄</text><text x="200" y="160" font-size="12" fill="var(--muted)" ${F}>metano</text>
      </svg>`,
    },
    {
      html: `<h3>Formas de escribir una molécula</h3><p>La <b>fórmula molecular</b> dice cuántos átomos hay (C₄H₁₀). La <b>semidesarrollada</b> muestra los enlaces entre carbonos (CH₃–CH₂–CH₂–CH₃) y es la que más se usa. La <b>desarrollada</b> dibuja todos los enlaces. En la <b>fórmula de esqueleto</b> cada vértice es un carbono y los hidrógenos no se dibujan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Butano escrito como fórmula molecular, semidesarrollada y de esqueleto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F}><text x="20" y="36" font-size="12" fill="var(--muted)">molecular</text><text x="110" y="36" font-size="18" font-weight="700" fill="var(--ink)">C₄H₁₀</text>
        <text x="20" y="84" font-size="12" fill="var(--muted)">semidesarrollada</text><text x="20" y="108" font-size="16" font-weight="700" fill="var(--pen)">CH₃–CH₂–CH₂–CH₃</text>
        <text x="20" y="150" font-size="12" fill="var(--muted)">esqueleto</text></g>
        ${zigzag(120, 160, 4, 32, 22, "var(--leaf)")}
      </svg>`,
    },
    {
      html: `<h3>Hidrocarburos</h3><p>Solo tienen <b>carbono e hidrógeno</b>. Se nombran con un <b>prefijo</b> según el número de carbonos (<mark>met-, et-, prop-, but-, pent-, hex-…</mark>) y una <b>terminación</b> según el enlace: <mark>-ano</mark> si todos son simples (alcanos), <mark>-eno</mark> si hay uno doble (alquenos) y <mark>-ino</mark> si hay uno triple (alquinos). El número indica dónde está el enlace múltiple: CH₂=CH–CH₂–CH₃ es el <b>but-1-eno</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Etano, eteno y etino: enlace simple, doble y triple">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["CH₃–CH₃", "etano (-ano)", "var(--pen)"], ["CH₂=CH₂", "eteno (-eno)", "var(--leaf)"], ["CH≡CH", "etino (-ino)", "var(--red)"]]
          .map(([f, n, c], i) => `<text x="24" y="${50 + i * 48}" font-size="20" font-weight="700" fill="${c}" ${D}>${f}</text><text x="236" y="${50 + i * 48}" text-anchor="end" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Grupos funcionales</h3><p>Un <b>grupo funcional</b> es un átomo o grupo de átomos que da a la molécula sus propiedades. Los más comunes:</p>
      <p><b>Alcoholes</b> –OH (<mark>-ol</mark>): etanol, CH₃–CH₂OH. <b>Aldehídos</b> –CHO (<mark>-al</mark>): metanal. <b>Cetonas</b> –CO– (<mark>-ona</mark>): propanona o acetona. <b>Ácidos carboxílicos</b> –COOH (<mark>ácido -oico</mark>): ácido etanoico, el del vinagre. <b>Aminas</b> –NH₂ (<mark>-amina</mark>).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ejemplos de grupos funcionales: alcohol, cetona y ácido carboxílico">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["CH₃–CH₂–OH", "etanol", "alcohol", "var(--pen)"], ["CH₃–CO–CH₃", "propanona", "cetona", "var(--leaf)"], ["CH₃–COOH", "ácido etanoico", "ácido", "var(--red)"]]
          .map(([f, n, g, c], i) => `<rect x="12" y="${14 + i * 54}" width="236" height="46" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="24" y="${42 + i * 54}" font-size="17" font-weight="700" fill="${c}" ${D}>${f}</text><text x="236" y="${34 + i * 54}" text-anchor="end" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${n}</text><text x="236" y="${50 + i * 54}" text-anchor="end" font-size="11" fill="var(--muted)" ${F}>${g}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Compuestos de interés</h3><p>Los <b>hidrocarburos</b> del petróleo y el gas natural son combustibles (butano, octano de la gasolina) y la materia prima de los <b>plásticos</b> o <mark>polímeros</mark>: moléculas gigantes hechas de una unidad que se repite, como el polietileno a partir del eteno. En los seres vivos están las <b>biomoléculas</b>: glúcidos, lípidos, proteínas y ácidos nucleicos. Quemar combustibles fósiles libera CO₂, que contribuye al cambio climático.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Polimerización: muchas moléculas de eteno se unen formando una cadena de polietileno">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[0, 1, 2, 3].map((i) => `<g transform="translate(${18 + i * 60} 30)"><circle cx="10" cy="16" r="9" fill="var(--ink)"/><circle cx="34" cy="16" r="9" fill="var(--ink)"/><path d="M19 13 H 25 M19 19 H 25" stroke="var(--ink)" stroke-width="2.5"/></g>`).join("")}
        <text x="130" y="88" text-anchor="middle" font-size="22" fill="var(--muted)" ${F}>↓</text>
        <path d="M14 124 H 246" stroke="var(--ink)" stroke-width="3"/>${Array.from({ length: 10 }, (_, i) => `<circle cx="${24 + i * 24}" cy="124" r="7" fill="var(--leaf)"/>`).join("")}
        <g ${F} font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="130" y="24">eteno (monómero)</text><text x="130" y="160">polietileno (polímero)</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Prefijos y terminaciones",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Prefijos según el número de carbonos y terminaciones según el enlace o el grupo funcional">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <text x="170" y="38" text-anchor="middle" font-size="16" font-weight="700" fill="var(--pen)" ${F}>Número de carbonos</text>
      ${["met-", "et-", "prop-", "but-", "pent-", "hex-", "hept-", "oct-"].map((p, i) => `<rect x="${30 + (i % 4) * 72}" y="${54 + Math.floor(i / 4) * 74}" width="64" height="62" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="${62 + (i % 4) * 72}" y="${80 + Math.floor(i / 4) * 74}" text-anchor="middle" font-size="22" font-weight="700" fill="var(--pen)" ${D}>${i + 1}</text><text x="${62 + (i % 4) * 72}" y="${102 + Math.floor(i / 4) * 74}" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${p}</text>`).join("")}
      <text x="480" y="38" text-anchor="middle" font-size="16" font-weight="700" fill="var(--red)" ${F}>Terminación</text>
      ${[["-ano", "solo enlaces simples"], ["-eno / -ino", "doble / triple"], ["-ol", "alcohol (–OH)"], ["-al / -ona", "aldehído / cetona"], ["ácido -oico", "–COOH"]].map(([t, d], i) => `<text x="350" y="${74 + i * 32}" font-size="17" font-weight="700" fill="var(--red)" ${D}>${t}</text><text x="470" y="${74 + i * 32}" font-size="14" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "wxcFaTPi03Y", titulo: "Alcanos, alquenos y alquinos", canal: "Profesor Particular Puebla", vistas: 4562663, megusta: 0, busqueda: "química del carbono hidrocarburos" },
  quiz: [
    { q: "¿Cuántos enlaces forma el carbono?", o: ["2", "4", "6"], a: 1, e: "Tiene 4 electrones de valencia y comparte los cuatro: es tetravalente." },
    { q: "¿Cómo se llama CH₃–CH₂–CH₃?", o: ["Propano", "Propeno", "Butano"], a: 0, e: "Tres carbonos (prop-) y solo enlaces simples (-ano)." },
    { q: "Un alquino tiene al menos…", o: ["un enlace doble", "un enlace triple", "un grupo –OH"], a: 1, e: "Alquinos: -ino, enlace triple C≡C." },
    { q: "¿A qué grupo funcional pertenece el etanol?", o: ["Ácido carboxílico", "Alcohol", "Cetona"], a: 1, e: "La terminación -ol indica el grupo hidroxilo –OH: es un alcohol." },
    { q: "¿Qué es un polímero?", o: ["Una molécula muy pequeña", "Una molécula gigante formada por unidades que se repiten", "Un tipo de átomo de carbono"], a: 1, e: "Los polímeros, como los plásticos o las proteínas, son cadenas de muchos monómeros unidos." },
  ],
  examen: [
    { q: "Formula el pent-2-eno.", o: ["CH₃–CH=CH–CH₂–CH₃", "CH₂=CH–CH₂–CH₂–CH₃", "CH₃–C≡C–CH₂–CH₃"], a: 0, e: "Cinco carbonos (pent-), doble enlace (-eno) que empieza en el carbono 2." },
    { q: "¿Cuál es la fórmula molecular del butano?", o: ["C₄H₈", "C₄H₁₀", "C₄H₆"], a: 1, e: "Los alcanos siguen CₙH₂ₙ₊₂: con n = 4, C₄H₁₀." },
    { q: "La acetona del quitaesmalte es una…", o: ["cetona (propanona)", "amina", "aldehído"], a: 0, e: "CH₃–CO–CH₃: tres carbonos con el grupo carbonilo en medio, propanona." },
  ],
  feynman: ["Por qué el carbono forma millones de compuestos", "Las distintas formas de escribir una fórmula orgánica", "Cómo se nombra un hidrocarburo: prefijo y terminación", "Qué es un grupo funcional, con dos ejemplos", "Qué es un polímero y de dónde salen los plásticos"],
  mapa: mapa("QUÍMICA DEL CARBONO", "var(--eso)", [
    ["Carbono", "4 enlaces · cadenas y anillos", "var(--ink)"],
    ["Hidrocarburos", "-ano · -eno · -ino", "var(--pen)"],
    ["Grupos funcionales", "-ol · -al · -ona · -oico", "var(--red)"],
    ["Interés", "combustibles · plásticos · vida", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["¿Por qué se dice que el carbono es tetravalente?", "Porque forma cuatro enlaces covalentes."],
    ["Fórmula general de los alcanos", "CₙH₂ₙ₊₂."],
    ["Prefijos de 1 a 5 carbonos", "met-, et-, prop-, but-, pent-."],
    ["Terminación de los alcoholes", "-ol (grupo –OH). Ejemplo: etanol."],
    ["¿Qué ácido contiene el vinagre?", "El ácido etanoico (acético), CH₃–COOH."],
  ],
  familias: ["Buscad en casa productos con nombres de química orgánica: butano, acetona, etanol, ácido acético.", "Mirad el triángulo de reciclaje de los envases de plástico y averiguad qué polímero es (PET, PE, PP).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La materia: compuestos del carbono, hidrocarburos y grupos funcionales sencillos, y su importancia (RD 217/2022, Física y Química 4º).",
    ideas: ["Kits de modelos moleculares (o plastilina y palillos) para construir isómeros del butano.", "Identificar polímeros por su código de reciclaje y debatir sobre su impacto.", "Síntesis de un bioplástico con almidón, vinagre y glicerina."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Química orgánica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Qu%C3%ADmica_org%C3%A1nica" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Nombrar y formular hidrocarburos sencillos, también ramificados", "Reconocer isómeros y relacionar los polímeros con su impacto ambiental"],
  tras: {
    "Hidrocarburos": [
      { html: `<h3>Nombrar hidrocarburos</h3><p>El nombre de un hidrocarburo tiene un <b>prefijo</b> que dice cuántos carbonos tiene la cadena (met- 1, et- 2, prop- 3, but- 4, pent- 5, hex- 6, hept- 7, oct- 8) y un <b>sufijo</b> que dice el tipo de enlace: <mark>-ano</mark> si todos son sencillos, <mark>-eno</mark> si hay un doble y <mark>-ino</mark> si hay un triple. Los pasos son: elegir la cadena más larga que contenga el enlace múltiple; numerarla para que el doble o triple enlace tenga el número más bajo; indicar su posición delante del sufijo. Así, CH₂=CH–CH₂–CH₃ es <b>but-1-eno</b>. Las ramificaciones se nombran como <b>radicales</b> terminados en -il (metil, etil) delante del nombre de la cadena, con el número del carbono al que se unen: CH₃–CH(CH₃)–CH₃ es <b>metilpropano</b>.</p>`, video: { id: "RmLf2gU5tIQ", titulo: "Alcanos, alquenos y alquinos (y radicales)", canal: "Amigos de la Química", vistas: 3165762 } },
      { html: `<h3>Hidrocarburos cíclicos y aromáticos</h3><p>Las cadenas pueden cerrarse en un anillo: son los <b>cicloalcanos</b>, que se nombran con el prefijo ciclo-, como el ciclohexano (C₆H₁₂). Un caso especial es el <b>benceno</b>, C₆H₆: un anillo de seis carbonos con enlaces que se reparten por todo el anillo, lo que le da una gran estabilidad. Se dibuja como un hexágono con un círculo dentro. Los compuestos que contienen este anillo se llaman <mark>aromáticos</mark>, porque los primeros que se conocieron tenían olor intenso. Muchos medicamentos, colorantes y plásticos tienen anillos de benceno, aunque el benceno puro es tóxico.</p>` },
    ],
    "Grupos funcionales": [
      { html: `<h3>Isomería</h3><p>Los <b>isómeros</b> son compuestos con la <mark>misma fórmula molecular pero distinta estructura</mark>, y por eso tienen propiedades diferentes. Hay varios tipos: de <b>cadena</b> (butano, con la cadena recta, y metilpropano, ramificado, son los dos C₄H₁₀); de <b>posición</b> (but-1-eno y but-2-eno, con el doble enlace en sitios distintos); y de <b>función</b> (el etanol, CH₃–CH₂OH, un alcohol, y el dimetil éter, CH₃–O–CH₃, tienen la misma fórmula C₂H₆O pero el primero es líquido y se bebe en las bebidas alcohólicas, y el segundo es un gas). La isomería explica en parte la enorme variedad de compuestos del carbono.</p>`, video: { id: "fMllRfO7eII", titulo: "Tipos de isómeros. Química orgánica", canal: "Breaking Vlad", vistas: 643087 } },
    ],
    "Compuestos de interés": [
      { html: `<h3>Polímeros y plásticos</h3><p>Los <b>polímeros</b> son moléculas gigantes formadas por la unión de miles de moléculas pequeñas llamadas <b>monómeros</b>. Hay polímeros naturales (almidón, celulosa, proteínas, ADN) y sintéticos, los <b>plásticos</b>: el polietileno (bolsas) se obtiene uniendo moléculas de eteno; el PVC, el PET de las botellas o el nailon son otros ejemplos. Son ligeros, baratos y duraderos, pero esa misma durabilidad es un problema: tardan cientos de años en degradarse y se fragmentan en <mark>microplásticos</mark> que llegan al mar y a la cadena alimentaria. Reducir su uso, reutilizarlos, reciclarlos y desarrollar <b>bioplásticos</b> biodegradables son parte de la solución.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Nombra CH₃–CH₂–CH=CH–CH₃.", pasos: ["La cadena tiene 5 carbonos: prefijo pent-.", "Hay un doble enlace: sufijo -eno.", "Numerando desde la derecha, el doble enlace empieza en el carbono 2 (desde la izquierda sería el 3)."], resultado: "Pent-2-eno." },
    { enunciado: "Formula el hex-1-ino y escribe su fórmula molecular.", pasos: ["Hex-: 6 carbonos. -ino: un triple enlace entre los carbonos 1 y 2.", "Fórmula: CH≡C–CH₂–CH₂–CH₂–CH₃.", "Cuenta los hidrógenos: 1 + 2 + 2 + 2 + 3 = 10."], resultado: "CH≡C–CH₂–CH₂–CH₂–CH₃, C₆H₁₀." },
    { enunciado: "Escribe la reacción ajustada de combustión completa del propano, C₃H₈.", pasos: ["Combustión completa: el hidrocarburo reacciona con O₂ y da CO₂ y H₂O.", "Ajusta C: 3 CO₂. Ajusta H: 8 hidrógenos dan 4 H₂O.", "Cuenta los O de la derecha: 3·2 + 4 = 10, es decir, 5 O₂."], resultado: "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O." },
  ],
  errores: [
    "Elegir una cadena que no es la más larga o que no contiene el doble enlace.",
    "Numerar la cadena desde el extremo equivocado y dar al doble enlace un número más alto del necesario.",
    "Dibujar un carbono con 5 enlaces: el carbono siempre forma 4.",
    "Confundir los sufijos -ol (alcohol), -al (aldehído) y -ona (cetona).",
    "Pensar que todos los compuestos con la misma fórmula molecular son la misma sustancia (olvidar los isómeros).",
  ],
  ejercicios: [
    { q: "Escribe la fórmula semidesarrollada del butano y del propeno.", sol: "Butano: CH₃–CH₂–CH₂–CH₃. Propeno: CH₂=CH–CH₃." },
    { q: "Nombra: CH₃–CH₂–CH₂–CH₂–CH₃ y CH≡C–CH₃.", sol: "Pentano y propino." },
    { q: "Nombra CH₃–CH(CH₃)–CH₂–CH₃.", sol: "Cadena más larga: 4 carbonos (butano). Un metil en el carbono 2: 2-metilbutano (o metilbutano)." },
    { q: "Calcula la fórmula molecular de un alcano de 7 carbonos usando CₙH₂ₙ₊₂.", sol: "n = 7: C₇H₁₆ (heptano)." },
    { q: "Identifica el grupo funcional: CH₃–CH₂OH, CH₃–COOH, CH₃–CO–CH₃, CH₃–NH₂.", sol: "Alcohol (etanol), ácido carboxílico (ácido etanoico o acético), cetona (propanona o acetona) y amina (metilamina)." },
    { q: "¿Son isómeros el pentano y el 2-metilbutano? ¿De qué tipo?", sol: "Sí: los dos son C₅H₁₂. Son isómeros de cadena (uno lineal y otro ramificado)." },
    { q: "Escribe dos isómeros de posición de fórmula C₄H₈ con un doble enlace en cadena lineal.", sol: "But-1-eno (CH₂=CH–CH₂–CH₃) y but-2-eno (CH₃–CH=CH–CH₃)." },
    { q: "Ajusta la combustión del metano.", sol: "CH₄ + 2 O₂ → CO₂ + 2 H₂O." },
    { q: "¿Qué es un monómero? Pon un ejemplo de polímero natural y otro sintético.", sol: "La molécula pequeña que se repite en un polímero. Natural: almidón (monómero glucosa). Sintético: polietileno (monómero eteno)." },
    { q: "Explica dos problemas ambientales de los plásticos y dos soluciones.", sol: "Problemas: tardan siglos en degradarse y forman microplásticos que contaminan mares y seres vivos; se fabrican a partir del petróleo. Soluciones: reducir los de un solo uso y reciclar; usar bioplásticos biodegradables." },
  ],
  quiz: [
    { q: "El sufijo -ino indica…", o: ["un doble enlace", "un triple enlace", "solo enlaces sencillos"], a: 1, e: "Alquinos: C≡C." },
    { q: "¿Cuántos carbonos indica el prefijo hex-?", o: ["5", "6", "8"], a: 1, e: "Met 1, et 2, prop 3, but 4, pent 5, hex 6." },
    { q: "Los isómeros tienen…", o: ["la misma fórmula molecular y distinta estructura", "distinta fórmula y la misma estructura", "las mismas propiedades"], a: 0, e: "Por eso son sustancias distintas." },
    { q: "El benceno es un hidrocarburo…", o: ["aromático", "lineal", "gaseoso de cadena larga"], a: 0, e: "Anillo de 6 carbonos muy estable." },
    { q: "El polietileno se obtiene uniendo moléculas de…", o: ["metano", "eteno", "benceno"], a: 1, e: "El eteno es su monómero." },
  ],
  tarjetas: [
    ["Sufijos -ano, -eno, -ino", "Enlaces sencillos, doble y triple."],
    ["Isómeros", "Misma fórmula molecular, distinta estructura."],
    ["Polímero", "Molécula gigante formada por la unión de muchos monómeros."],
  ],
});
