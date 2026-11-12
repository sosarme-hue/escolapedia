// Matemáticas 2º ESO: semejanza. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Semejanza",
  minutos: 55,
  objetivos: ["Reconocer figuras semejantes y calcular la razón de semejanza", "Aplicar el teorema de Tales", "Usar los criterios de semejanza de triángulos", "Trabajar con escalas en planos y mapas y relacionar áreas y volúmenes de figuras semejantes"],
  claves: ["figuras semejantes", "razón de semejanza", "teorema de Tales", "posición de Tales", "escala", "criterios de semejanza"],
  pregunta: {
    texto: "¿Cómo pudo medir Tales de Mileto la altura de una pirámide de Egipto sin subirse a ella?",
    respuesta: "Clavó un bastón en el suelo y comparó sombras. A la misma hora, la razón entre la altura de un objeto y su sombra es la misma para todos: <mark>altura pirámide / sombra pirámide = altura bastón / sombra bastón</mark>. Midiendo las dos sombras y el bastón, calculó la altura con una proporción. Los triángulos que forman son <b>semejantes</b>.",
  },
  bloques: [
    {
      html: `<h3>Figuras semejantes</h3><p>Dos figuras son <b>semejantes</b> si tienen la <mark>misma forma</mark> aunque distinto tamaño: una es una ampliación o reducción de la otra. Para ello:</p><ul><li>Sus <b>ángulos correspondientes</b> son iguales.</li><li>Sus <b>lados correspondientes</b> (homólogos) son proporcionales.</li></ul><p>Una fotografía y su ampliación son semejantes; dos rectángulos cualesquiera, no siempre (un rectángulo de 2 × 4 y otro de 3 × 4 no tienen la misma forma). Todos los cuadrados son semejantes entre sí, y todas las circunferencias también.</p>`,
      svg: svg("Dos triángulos semejantes: uno con lados 3, 4 y 5 y otro con lados 6, 8 y 10; razón 2", `<path d="M24 140 L 24 104 L 72 140 Z" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/><path d="M110 150 L 110 78 L 206 150 Z" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/>
        ${t(16, 126, "3", { c: "var(--pen)", s: 11 })}${t(48, 156, "4", { c: "var(--pen)", s: 11 })}${t(56, 116, "5", { c: "var(--pen)", s: 11 })}${t(100, 118, "6", { c: "var(--leaf)", s: 12 })}${t(158, 166, "8", { c: "var(--leaf)", s: 12 })}${t(168, 104, "10", { c: "var(--leaf)", s: 12 })}${t(130, 34, "razón k = 6/3 = 8/4 = 10/5 = 2", { s: 12 })}`),
      video: { id: "4MxChkgm370", titulo: "Figuras semejantes", canal: "Daniel Carreón", vistas: 2380862 },
    },
    {
      html: `<h3>La razón de semejanza</h3><p>El cociente entre dos lados homólogos es siempre el mismo número, la <b>razón de semejanza</b> <b>k</b>:</p><p style="text-align:center"><mark>k = a'/a = b'/b = c'/c</mark></p><ul><li>Si k &gt; 1, la figura nueva es una <b>ampliación</b> (k = 2: el doble).</li><li>Si k &lt; 1, es una <b>reducción</b> (k = 0,5: la mitad).</li><li>Si k = 1, las figuras son <b>iguales</b> (congruentes).</li></ul><p>Conocida k, cualquier lado se calcula multiplicando: si k = 1,5 y un lado mide 6 cm, su homólogo mide 9 cm. Los <b>perímetros</b> también están en razón k.</p>`,
    },
    {
      html: `<h3>El teorema de Tales</h3><p>Si varias rectas paralelas cortan a dos rectas secantes, los <b>segmentos</b> que determinan en una son <mark>proporcionales</mark> a los que determinan en la otra:</p><p style="text-align:center"><b>AB / A'B' = BC / B'C'</b></p><p>Ejemplo: si en una recta los segmentos miden 2 y 3 cm, y en la otra el primero mide 4 cm, el segundo mide x: 2/4 = 3/x → x = 6 cm.</p><p>El teorema sirve para <b>dividir un segmento en partes iguales</b> con regla y compás, y para calcular distancias inaccesibles.</p>`,
      svg: svg("Dos rectas cortadas por tres paralelas; los segmentos AB y BC son proporcionales a A'B' y B'C'", `<path d="M30 160 L 120 20 M30 160 L 240 40" stroke="var(--ink)" stroke-width="2"/>
        ${[[0.3, "A"], [0.55, "B"], [0.9, "C"]].map(([f, l]) => { const x1 = 30 + 90 * f, y1 = 160 - 140 * f, x2 = 30 + 210 * f, y2 = 160 - 120 * f; return `<path d="M${(x1 - 14).toFixed(1)} ${(y1 + 4).toFixed(1)} L ${(x2 + 14).toFixed(1)} ${(y2 - 4).toFixed(1)}" stroke="var(--pen)" stroke-width="2"/><circle cx="${x1.toFixed(1)}" cy="${y1.toFixed(1)}" r="3.5" fill="var(--red)"/><circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="3.5" fill="var(--leaf)"/>${t(x1 - 10, y1 - 2, l, { c: "var(--red)", s: 11 })}${t(x2 + 4, y2 + 14, l + "'", { c: "var(--leaf)", s: 11 })}`; }).join("")}
        ${t(196, 150, "AB/A'B' = BC/B'C'", { s: 11 })}`),
      video: { id: "JGyYSzhCxFA", titulo: "Teorema de Tales: introducción", canal: "Matemáticas profe Alex", vistas: 3895756 },
    },
    {
      html: `<h3>Triángulos en posición de Tales</h3><p>Si en un triángulo se traza una recta <b>paralela</b> a un lado, se forma un triángulo pequeño <b>semejante</b> al grande. Se dice que están en <b>posición de Tales</b>: comparten un ángulo y los lados opuestos son paralelos.</p><p>Así se miden alturas con sombras: un poste de 2 m da una sombra de 1,5 m y, a la vez, un árbol da una sombra de 6 m. Los triángulos son semejantes: h/6 = 2/1,5 → <b>h = 8 m</b>.</p>`,
      svg: svg("Un árbol y un poste con sus sombras forman dos triángulos semejantes", `<path d="M20 150 H 240" stroke="var(--muted)" stroke-width="2"/><path d="M60 150 V 40" stroke="var(--leaf)" stroke-width="5"/><circle cx="60" cy="40" r="20" fill="var(--leaf)" fill-opacity=".4"/><path d="M60 40 L 200 150" stroke="var(--sun)" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M60 150 H 200" stroke="var(--ink)" stroke-width="4" opacity=".35"/>
        <path d="M165 150 V 122" stroke="var(--pen)" stroke-width="4"/><path d="M165 150 H 200" stroke="var(--pen)" stroke-width="4" opacity=".5"/>
        ${t(44, 100, "h", { c: "var(--leaf)", s: 15 })}${t(130, 170, "sombra 6 m", { s: 11 })}${t(158, 142, "2 m", { c: "var(--pen)", s: 11, a: "end" })}${t(212, 140, "1,5 m", { c: "var(--pen)", s: 11, a: "start" })}`),
    },
    {
      html: `<h3>Criterios de semejanza de triángulos</h3><p>Para saber si dos triángulos son semejantes no hace falta comprobarlo todo. Basta con uno de estos criterios:</p>${tabla(["Criterio", "Se cumple si…"], [["1.º Dos ángulos iguales", "tienen dos ángulos iguales (el tercero también lo será)"], ["2.º Tres lados proporcionales", "a'/a = b'/b = c'/c"], ["3.º Ángulo y dos lados", "tienen un ángulo igual y los lados que lo forman son proporcionales"]])}<p>Consecuencia: dos triángulos rectángulos son semejantes si tienen un ángulo agudo igual. Y dos triángulos equiláteros siempre lo son.</p>`,
      video: { id: "g_c0c1b4rlA", titulo: "Criterios de semejanza de triángulos", canal: "Susi Profe", vistas: 782046 },
    },
    {
      html: `<h3>Escalas: planos y mapas</h3><p>Un plano o un mapa es una figura <b>semejante</b> a la realidad. La <b>escala</b> indica la razón entre las medidas del dibujo y las reales: <mark>1 : 100</mark> significa que 1 cm del plano son 100 cm (1 m) en la realidad.</p><ul><li>Escala <b>numérica</b>: 1 : 50.000 (1 cm → 50.000 cm = 500 m).</li><li>Escala <b>gráfica</b>: un segmento dibujado con su equivalencia real.</li></ul><p>Distancia real = distancia en el plano · denominador de la escala. Si en un mapa 1 : 200.000 dos pueblos están a 3,5 cm, en la realidad están a 700.000 cm = <b>7 km</b>. Las maquetas usan escalas de reducción (1 : 87 en los trenes), y los dibujos de microscopio, de ampliación (50 : 1).</p>`,
    },
    {
      html: `<h3>Áreas y volúmenes de figuras semejantes</h3><p>Si la razón de semejanza es k:</p><ul><li>La razón de los <b>perímetros</b> es <b>k</b>.</li><li>La razón de las <b>áreas</b> es <mark>k²</mark>.</li><li>La razón de los <b>volúmenes</b> es <mark>k³</mark>.</li></ul><p>Si se duplica el lado de un cuadrado (k = 2), su área se multiplica por 4; si se duplica la arista de un cubo, su volumen se multiplica por 8. Por eso un plano a escala 1 : 100 representa una superficie 10.000 veces menor que la real.</p>`,
      svg: svg("Un cuadrado de lado 1 y otro de lado 2 que contiene 4 cuadrados pequeños: al doblar el lado, el área se multiplica por 4", `<rect x="34" y="80" width="40" height="40" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<rect x="${120 + (i % 2) * 40}" y="${40 + Math.floor(i / 2) * 40}" width="40" height="40" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>`).join("")}
        ${t(54, 140, "lado 1", { c: "var(--pen)", s: 11 })}${t(54, 156, "área 1", { c: "var(--pen)", s: 11 })}${t(160, 140, "lado 2 (k = 2)", { c: "var(--leaf)", s: 11 })}${t(160, 156, "área 4 = k²", { c: "var(--leaf)", s: 12 })}${t(130, 24, "áreas × k² · volúmenes × k³", { s: 12 })}`),
    },
    {
      html: `<h3>Semejanza en la vida real</h3><ul><li><b>Fotocopias</b>: ampliar al 150 % es aplicar k = 1,5; el área de la hoja necesaria es 2,25 veces mayor.</li><li><b>Pantallas y formatos</b>: los folios A4, A3, A5… son semejantes; un A3 tiene el doble de área que un A4.</li><li><b>Arquitectura</b>: los planos de una casa suelen estar a 1 : 50 o 1 : 100.</li><li><b>Distancias inaccesibles</b>: anchura de un río, altura de un edificio o de una montaña usando sombras o espejos.</li><li><b>Naturaleza</b>: un elefante no puede ser un ratón «ampliado», porque su peso crece con k³ y la sección de sus huesos solo con k².</li></ul>`,
    },
  ],
  figura: {
    titulo: "Semejanza en un vistazo",
    svg: filas("Resumen: misma forma, razón k, teorema de Tales, criterios, escalas y áreas y volúmenes", [["Semejantes", "ángulos iguales · lados proporcionales", "var(--pen)"], ["Razón k", "k = a'/a · ampliación si k > 1", "var(--inf)"], ["Tales", "paralelas → segmentos proporcionales", "var(--leaf)"], ["Criterios", "2 ángulos · 3 lados · ángulo y 2 lados", "var(--sun)"], ["Escala", "1 : 100 → 1 cm son 1 m", "var(--red)"], ["Áreas y volúmenes", "× k² y × k³", "var(--ink)"]], 220),
  },
  video: { id: "staL7w-eT58", titulo: "Teorema de Tales, explicación fácil", canal: "Daniel Carreón", vistas: 4840587, megusta: 0, busqueda: "semejanza de figuras teorema de tales" },
  quiz: mezcla([
    { q: "Dos figuras semejantes tienen…", o: ["la misma forma", "el mismo tamaño", "el mismo perímetro"], a: 0, e: "Ampliación o reducción." },
    { q: "Si k = 3 y un lado mide 4 cm, su homólogo mide…", o: ["12 cm", "7 cm", "4/3 cm"], a: 0, e: "4 · 3." },
    { q: "Una razón k = 0,5 indica…", o: ["una reducción a la mitad", "una ampliación", "figuras iguales"], a: 0, e: "k < 1." },
    { q: "¿Son siempre semejantes dos cuadrados?", o: ["sí", "no", "solo si son iguales"], a: 0, e: "Misma forma." },
    { q: "Con Tales: 2/5 = 4/x → x =", o: ["10", "8", "2,5"], a: 0, e: "5 · 4 : 2." },
    { q: "Dos triángulos con dos ángulos iguales son…", o: ["semejantes", "iguales", "rectángulos"], a: 0, e: "Primer criterio." },
    { q: "En un plano 1 : 50, 4 cm son…", o: ["2 m", "200 m", "50 cm"], a: 0, e: "200 cm." },
    { q: "Si k = 2, las áreas se multiplican por…", o: ["4", "2", "8"], a: 0, e: "k²." },
    { q: "Si k = 3, los volúmenes se multiplican por…", o: ["27", "9", "3"], a: 0, e: "k³." },
    { q: "En un mapa 1 : 100.000, 1 cm son…", o: ["1 km", "100 m", "10 km"], a: 0, e: "100.000 cm." },
  ]),
  examen: mezcla([
    { q: "Un edificio da una sombra de 24 m cuando un palo de 1,5 m da 2 m. El edificio mide…", o: ["18 m", "32 m", "36 m"], a: 0, e: "1,5 · 24 : 2." },
    { q: "Un piso de 90 m² en un plano 1 : 100 ocupa…", o: ["90 cm²", "9 cm²", "900 cm²"], a: 0, e: "900.000 cm² : 10.000." },
    { q: "Los triángulos de lados 4-6-8 y 6-9-12 son…", o: ["semejantes, k = 1,5", "iguales", "no semejantes"], a: 0, e: "6/4 = 9/6 = 12/8." },
  ]),
  feynman: ["Qué condiciones cumplen dos figuras semejantes", "Qué es la razón de semejanza", "Qué dice el teorema de Tales y cómo midió la pirámide", "Los criterios de semejanza de triángulos", "Por qué el área se multiplica por k²"],
  mapa: mapa("SEMEJANZA", "var(--eso)", [
    ["Figuras semejantes", "misma forma · razón k", "var(--pen)"],
    ["Tales", "paralelas · sombras", "var(--leaf)"],
    ["Escalas", "planos y mapas", "var(--red)"],
    ["Áreas y volúmenes", "k² y k³", "var(--sun)"],
  ], 240),
  tarjetas: [
    ["Semejantes", "Misma forma: ángulos iguales y lados proporcionales."],
    ["Razón de semejanza", "k = lado de la nueva / lado homólogo de la original."],
    ["Teorema de Tales", "Paralelas cortan segmentos proporcionales."],
    ["Posición de Tales", "Triángulos con un ángulo común y lados opuestos paralelos."],
    ["Criterio 1", "Dos ángulos iguales."],
    ["Escala 1 : n", "1 unidad en el plano son n en la realidad."],
    ["Áreas semejantes", "Razón k²."],
    ["Volúmenes semejantes", "Razón k³."],
  ],
  familias: ["Medid la altura de un árbol con su sombra y la de una persona.", "Buscad la escala en un mapa de carreteras y calculad distancias reales.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Figuras semejantes y razón de semejanza; teorema de Tales; criterios de semejanza de triángulos; escalas; relación entre áreas y volúmenes de figuras semejantes (RD 217/2022, Matemáticas, sentido espacial y de la medida).",
    ideas: ["Medir la altura del edificio del centro con sombras o con un espejo.", "Ampliar un dibujo con una cuadrícula.", "Plano a escala del aula."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): semejanza", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Un triángulo tiene lados de 5, 7 y 9 cm. Se construye otro semejante cuyo lado menor mide 15 cm. Calcula los otros lados y la razón de los perímetros.", pasos: ["k = 15/5 = 3.", "Lados: 7 · 3 = 21 cm y 9 · 3 = 27 cm.", "Perímetros: 21 y 63 cm; razón 3 = k."], resultado: "21 cm y 27 cm; razón de perímetros 3." },
    { enunciado: "En un plano 1 : 200 una habitación mide 2 cm × 2,5 cm. ¿Cuál es su superficie real?", pasos: ["Medidas reales: 2 · 200 = 400 cm = 4 m; 2,5 · 200 = 500 cm = 5 m.", "Área: 4 · 5 = 20 m².", "Comprobación con k²: 5 cm² · 200² = 200.000 cm² = 20 m²."], resultado: "20 m²" },
    { enunciado: "Para medir la anchura x de un río se marcan dos triángulos en posición de Tales. En el pequeño, los lados homólogos miden 4 m (por la orilla) y 3 m; en el grande, el lado por la orilla mide 10 m y el homólogo del de 3 m es la anchura del río. Calcula x.", pasos: ["Los triángulos son semejantes: x / 3 = 10 / 4.", "x = 3 · 10 : 4.", "x = 7,5 m."], resultado: "El río mide unos 7,5 m de ancho." },
  ],
  errores: [
    "Pensar que dos rectángulos cualesquiera son semejantes.",
    "Emparejar mal los lados homólogos.",
    "Multiplicar el área por k en lugar de por k².",
    "Olvidar pasar los centímetros a metros o kilómetros al usar escalas.",
    "Aplicar Tales con rectas que no son paralelas.",
  ],
  ejercicios: [
    { q: "¿Son semejantes dos rectángulos de 4 × 6 y 6 × 9?", sol: "Sí: 6/4 = 9/6 = 1,5." },
    { q: "Un triángulo de lados 3, 5 y 6 cm se amplía con k = 2,5. ¿Cuánto miden los lados nuevos?", sol: "7,5; 12,5 y 15 cm." },
    { q: "Aplica Tales: los segmentos de una recta miden 3 y 4,5 cm; en la otra el primero mide 2 cm. ¿Cuánto mide el segundo?", sol: "3/2 = 4,5/x → x = 3 cm." },
    { q: "Un palo de 1 m da una sombra de 0,8 m. A la misma hora una torre da 20 m de sombra. ¿Cuánto mide?", sol: "25 m." },
    { q: "¿Son semejantes dos triángulos con ángulos 50°, 60° y 70° y 50°, 70° y 60°?", sol: "Sí: tienen los ángulos iguales." },
    { q: "En un mapa 1 : 25.000, una ruta mide 18 cm. ¿Cuántos km son?", sol: "450.000 cm = 4,5 km." },
    { q: "Dos ciudades a 120 km aparecen a 4 cm en un mapa. ¿Cuál es la escala?", sol: "12.000.000 cm : 4 = 1 : 3.000.000." },
    { q: "Dos cuadrados tienen razón de semejanza 3. Si el pequeño tiene 5 cm² de área, ¿cuánta tiene el grande?", sol: "5 · 9 = 45 cm²." },
    { q: "Una maqueta de un edificio a escala 1 : 50 tiene un volumen de 0,02 m³. ¿Cuál es el volumen real?", sol: "0,02 · 50³ = 2.500 m³." },
    { q: "Explica por qué un A3 tiene el doble de área que un A4 si ambos son semejantes.", sol: "Su razón de semejanza es √2 ≈ 1,41, y las áreas van en razón k² = 2." },
  ],
};
