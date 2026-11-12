// Matemáticas 6º de Primaria: ángulos y su medida. Dibujos propios en SVG.
const P = require("./_pri6a");
const { svg, t, arco, AZ, RO, VE, NA, SO, MO } = P;

// Ángulo con vértice (x, y), un lado horizontal hacia la derecha y otro a «g» grados; con arco y etiqueta.
const R = (a) => (a * Math.PI) / 180;
const ang = (x, y, L, g, c = AZ, etq, desde = 0) => {
  const p = (a) => `${(x + L * Math.cos(R(a))).toFixed(1)} ${(y - L * Math.sin(R(a))).toFixed(1)}`;
  return `<path d="M${p(desde)} L ${x} ${y} L ${p(desde + g)}" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round"/>${g === 90 && !desde ? `<path d="M${x + 14} ${y} V ${y - 14} H ${x}" fill="none" stroke="${c}" stroke-width="2"/>` : arco(x, y, 18, desde, desde + g, c)}<circle cx="${x}" cy="${y}" r="3" fill="var(--ink)"/>${etq ? t(x, y + 20, etq, { s: 11, c }) : ""}`;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Ángulos y su medida",
  minutos: 50,
  objetivos: ["Reconocer los elementos de un ángulo y clasificarlo según su abertura", "Medir y dibujar ángulos con el transportador", "Usar el sistema sexagesimal: grados, minutos y segundos", "Identificar ángulos complementarios, suplementarios, consecutivos y opuestos por el vértice"],
  claves: ["vértice", "lado", "grado", "transportador", "agudo", "recto", "obtuso", "llano", "complementario", "suplementario", "sistema sexagesimal"],
  pregunta: ["¿Qué ángulo forman las agujas de un reloj a las 3 en punto? ¿Y a las 6?", "A las 3 en punto forman un <b>ángulo recto</b>, de <mark>90°</mark>, como la esquina de un folio. A las 6 forman un ángulo <b>llano</b>, de 180°: las dos agujas están en línea recta. Cada «hora» del reloj son 30°, porque 360 : 12 = 30."],
  bloques: [
    ["¿Qué es un ángulo?", `<p>Un <b>ángulo</b> es la parte del plano comprendida entre dos semirrectas que tienen el mismo origen.</p><ul><li>Las dos semirrectas son los <b>lados</b> del ángulo.</li><li>El punto donde se juntan es el <b>vértice</b>.</li><li>La <b>abertura</b> entre los lados es lo que medimos.</li></ul><p>Ojo: el tamaño de un ángulo <mark>no depende de lo largos que dibujemos los lados</mark>, sino de lo abiertos que estén. Un ángulo con lados cortos puede ser mayor que otro con lados largos.</p>`,
      svg("Elementos de un ángulo: vértice, dos lados y la abertura marcada con un arco", `${ang(60, 130, 150, 40, RO)}${t(56, 154, "vértice", { s: 12, c: "var(--ink)" })}${t(190, 152, "lado", { s: 12, c: AZ })}${t(104, 64, "lado", { s: 12, c: AZ })}${t(104, 116, "abertura", { s: 11, c: RO, a: "start" })}`)],
    ["El grado, la unidad para medir ángulos", `<p>Los ángulos se miden en <b>grados</b> (°). Si dividimos una vuelta completa en 360 partes iguales, cada parte es <mark>1 grado</mark>.</p><ul><li>Una vuelta completa: <b>360°</b>.</li><li>Media vuelta: <b>180°</b>.</li><li>Un cuarto de vuelta: <b>90°</b>.</li></ul><p>¿Por qué 360? Los antiguos babilonios contaban de 60 en 60 y pensaban que el año tenía unos 360 días. ¡Esa idea de hace más de 4 000 años sigue en nuestros relojes y en nuestros ángulos!</p>`,
      svg("Una vuelta completa son 360 grados, media vuelta 180 y un cuarto de vuelta 90", `<circle cx="64" cy="92" r="40" fill="${AZ}" fill-opacity=".2" stroke="${AZ}" stroke-width="2"/>${t(64, 152, "360°", { s: 14, d: true, c: AZ })}<path d="M106 112 A 40 40 0 0 1 186 112 Z" fill="${VE}" fill-opacity=".25" stroke="${VE}" stroke-width="2"/>${t(146, 152, "180°", { s: 14, d: true, c: VE })}<path d="M206 112 V 72 A 40 40 0 0 1 246 112 Z" fill="${RO}" fill-opacity=".25" stroke="${RO}" stroke-width="2"/>${t(226, 152, "90°", { s: 14, d: true, c: RO })}${t(130, 34, "1 vuelta · ½ vuelta · ¼ de vuelta", { s: 11, c: "var(--muted)" })}`)],
    ["Clases de ángulos según su abertura", `<ul><li><b>Agudo</b>: mide menos de 90°. Es más cerrado que una esquina.</li><li><b>Recto</b>: mide exactamente 90°. Sus lados son perpendiculares; se marca con un cuadradito.</li><li><b>Obtuso</b>: mide más de 90° y menos de 180°.</li><li><b>Llano</b>: mide 180°. Sus lados forman una línea recta.</li></ul><p>Hay también ángulos de más de 180° (cóncavos) y el ángulo completo de 360°. Para saber si un ángulo es agudo u obtuso, compáralo con la esquina de un folio, que es un ángulo recto.</p>`,
      svg("Clases de ángulos: agudo, recto, obtuso y llano", `${ang(20, 70, 46, 45, VE, "")}${t(42, 88, "agudo", { s: 11, c: VE })}${ang(150, 70, 46, 90, AZ, "")}${t(172, 88, "recto 90°", { s: 11, c: AZ })}${ang(70, 150, 46, 130, SO, "")}${t(80, 170, "obtuso", { s: 11, c: SO })}<path d="M150 150 H 240" stroke="var(--ink)" stroke-width="2.5"/>${arco(195, 150, 16, 0, 180, RO)}<circle cx="195" cy="150" r="3" fill="var(--ink)"/>${t(195, 170, "llano 180°", { s: 11, c: RO })}`)],
    ["Medir ángulos con el transportador", `<p>El <b>transportador</b> es una regla en forma de semicírculo graduada de 0° a 180°. Para medir un ángulo:</p><ol><li>Coloca el <b>centro</b> del transportador sobre el <b>vértice</b>.</li><li>Haz coincidir la línea del 0° con <b>uno de los lados</b>.</li><li>Lee el número por donde pasa el <b>otro lado</b>, usando la escala que empieza en 0 en tu lado.</li></ol><p>El error más típico es leer la escala equivocada: si el ángulo es agudo y lees 130°, has mirado la otra escala. <mark>Piensa antes si es agudo u obtuso</mark>.</p>`,
      svg("Transportador colocado sobre un ángulo de 60 grados con el centro en el vértice", `<path d="M30 140 A 100 100 0 0 1 230 140 Z" fill="${SO}" fill-opacity=".15" stroke="${SO}" stroke-width="2"/>${[...Array(19)].map((_, i) => { const a = R(i * 10), r1 = i % 3 ? 92 : 86; return `<path d="M${(130 + 100 * Math.cos(a)).toFixed(1)} ${(140 - 100 * Math.sin(a)).toFixed(1)} L ${(130 + r1 * Math.cos(a)).toFixed(1)} ${(140 - r1 * Math.sin(a)).toFixed(1)}" stroke="var(--muted)" stroke-width="1.3"/>`; }).join("")}${[0, 30, 60, 90, 120, 150, 180].map((g) => t((130 + 74 * Math.cos(R(g))).toFixed(1), (144 - 74 * Math.sin(R(g))).toFixed(1), String(g), { s: 9, c: "var(--muted)" })).join("")}<path d="M130 140 H 240 M130 140 L ${(130 + 112 * Math.cos(R(60))).toFixed(1)} ${(140 - 112 * Math.sin(R(60))).toFixed(1)}" stroke="${RO}" stroke-width="2.5"/>${arco(130, 140, 22, 0, 60, RO)}<circle cx="130" cy="140" r="3.5" fill="var(--ink)"/>${t(130, 166, "centro en el vértice · lee 60°", { s: 11, c: RO })}`),
      P.V("angB")],
    ["Dibujar un ángulo", `<p>Para dibujar un ángulo de, por ejemplo, 125°:</p><ol><li>Traza con la regla una semirrecta: será un lado. Su origen será el vértice.</li><li>Coloca el centro del transportador en el vértice y el 0° sobre la semirrecta.</li><li>Marca un punto pequeño en el 125° de la escala que empieza en tu lado.</li><li>Une el vértice con el punto usando la regla.</li></ol><p>Comprueba al final: 125° es mayor que 90°, así que tiene que verse <b>obtuso</b>. Si te sale cerrado, has usado la escala equivocada.</p>`,
      P.filas("Cuatro pasos para dibujar un ángulo con el transportador", [["1. Un lado", "traza una semirrecta", AZ], ["2. Coloca", "centro en vértice y 0° en lado", VE], ["3. Marca", "un punto en los grados pedidos", SO], ["4. Une", "el vértice con el punto", RO]])],
    ["Grados, minutos y segundos", `<p>A veces necesitamos medir ángulos con más precisión que un grado. Entonces usamos el <b>sistema sexagesimal</b>, que funciona de 60 en 60, igual que las horas:</p><ul><li>1 grado (1°) = <b>60 minutos</b> (60').</li><li>1 minuto (1') = <b>60 segundos</b> (60'').</li></ul><p>Un ángulo puede medir 35° 20' 15'' (treinta y cinco grados, veinte minutos y quince segundos).</p><p>Para pasar a una unidad menor, multiplica por 60: 3° = 180'. Para pasar a una mayor, divide entre 60: 120'' = 2'. <mark>Es como el reloj</mark>: 1 hora = 60 minutos.</p>`,
      P.filas("Sistema sexagesimal: un grado son sesenta minutos y un minuto sesenta segundos", [["1° =", "60 minutos (60')", AZ], ["1' =", "60 segundos (60'')", VE], ["Ejemplo", "35° 20' 15''", RO]], "de 60 en 60, como el reloj")],
    ["Sumar y restar ángulos", `<p>Para <b>sumar</b> ángulos en grados, minutos y segundos, coloca grados con grados, minutos con minutos y segundos con segundos. Si los segundos o los minutos llegan a 60 o más, <b>pasa 60 a la unidad siguiente</b>.</p><p>Ejemplo: 25° 40' + 18° 35' = 43° 75' → 75' = 1° 15' → <b>44° 15'</b>.</p><p>Para <b>restar</b>, si arriba hay menos minutos que abajo, «pide prestado» 1° y conviértelo en 60': 50° 10' − 20° 30' → 49° 70' − 20° 30' = <b>29° 40'</b>.</p>`,
      svg("Suma de ángulos 25 grados 40 minutos más 18 grados 35 minutos: 43 grados 75 minutos, que son 44 grados 15 minutos", `${t(170, 40, "25° 40'", { s: 18, d: true, a: "end" })}${t(170, 68, "+ 18° 35'", { s: 18, d: true, a: "end" })}<path d="M70 78 H 180" stroke="var(--ink)" stroke-width="2"/>${t(170, 104, "43° 75'", { s: 18, d: true, a: "end", c: SO })}${t(214, 104, "75' = 1° 15'", { s: 10, c: RO })}${t(130, 148, "= 44° 15'", { s: 22, d: true, c: AZ })}`),
      P.V("angB2")],
    ["Ángulos complementarios y suplementarios", `<p>Algunas parejas de ángulos tienen nombre propio:</p><ul><li><b>Complementarios</b>: suman <mark>90°</mark>. 30° y 60° son complementarios.</li><li><b>Suplementarios</b>: suman <mark>180°</mark>. 110° y 70° son suplementarios.</li></ul><p>Para calcular el complementario de un ángulo, réstalo de 90°: el complementario de 35° es 55°. Para el suplementario, réstalo de 180°: el suplementario de 35° es 145°.</p><p>Solo los ángulos agudos tienen complementario.</p>`,
      svg("Ángulos complementarios de 30 y 60 grados que forman un recto y suplementarios de 110 y 70 que forman un llano", `<path d="M30 110 H 110 M30 110 V 30" stroke="var(--ink)" stroke-width="2.5" fill="none"/><path d="M30 110 L ${(30 + 80 * Math.cos(R(30))).toFixed(1)} ${(110 - 80 * Math.sin(R(30))).toFixed(1)}" stroke="var(--ink)" stroke-width="2"/>${arco(30, 110, 26, 0, 30, AZ)}${arco(30, 110, 34, 30, 90, VE)}${t(74, 102, "30°", { s: 10, c: AZ })}${t(54, 62, "60°", { s: 10, c: VE })}${t(70, 140, "suman 90°", { s: 11, c: AZ })}<path d="M140 110 H 250" stroke="var(--ink)" stroke-width="2.5"/><path d="M195 110 L ${(195 + 60 * Math.cos(R(110))).toFixed(1)} ${(110 - 60 * Math.sin(R(110))).toFixed(1)}" stroke="var(--ink)" stroke-width="2"/>${arco(195, 110, 22, 0, 110, RO)}${arco(195, 110, 30, 110, 180, SO)}${t(222, 84, "110°", { s: 10, c: RO })}${t(158, 98, "70°", { s: 10, c: SO })}${t(195, 140, "suman 180°", { s: 11, c: RO })}`)],
    ["Ángulos consecutivos, adyacentes y opuestos", `<ul><li><b>Consecutivos</b>: tienen el vértice y un lado en común, uno al lado del otro.</li><li><b>Adyacentes</b>: son consecutivos y además sus lados no comunes forman una recta. Por eso siempre son suplementarios (suman 180°).</li><li><b>Opuestos por el vértice</b>: al cruzarse dos rectas se forman cuatro ángulos; los que quedan enfrentados son opuestos por el vértice y <mark>miden lo mismo</mark>.</li></ul><p>Fíjate en una tijera abierta: los ángulos de las hojas y de los mangos son opuestos por el vértice. ¡Si abres una parte, la otra se abre igual!</p>`,
      svg("Dos rectas que se cortan forman cuatro ángulos: los opuestos por el vértice miden lo mismo, 53 y 127 grados", `<path d="M30 140 L 230 40 M30 40 L 230 140" stroke="var(--ink)" stroke-width="2.5"/>${arco(130, 90, 26, -26.6, 26.6, AZ)}${arco(130, 90, 26, 153.4, 206.6, AZ)}${arco(130, 90, 20, 26.6, 153.4, RO)}${t(176, 95, "53°", { s: 11, c: AZ })}${t(84, 95, "53°", { s: 11, c: AZ })}${t(130, 60, "127°", { s: 11, c: RO })}${t(130, 168, "opuestos por el vértice: iguales", { s: 11 })}`)],
  ],
  figura: ["Los ángulos en un vistazo", P.columnas("Resumen: clases de ángulos, medida, sexagesimal y parejas de ángulos", [["menos de 90°", "AGUDO", ["recto = 90°", "esquina de folio"], VE], ["más de 90°", "OBTUSO", ["llano = 180°", "vuelta = 360°"], SO], ["1° = 60'", "60 en 60", ["1' = 60''", "como el reloj"], AZ], ["parejas", "90° · 180°", ["complementarios", "suplementarios"], RO]])],
  video: P.V("angV", true),
  ejemplos: [
    ["Clasifica los ángulos: 45°, 90°, 160° y 180°.", ["45° < 90°: agudo.", "90°: recto.", "160° está entre 90° y 180°: obtuso.", "180°: llano."], "agudo, recto, obtuso y llano"],
    ["Calcula el complementario y el suplementario de 28°.", ["Complementario: 90° − 28° = 62°.", "Suplementario: 180° − 28° = 152°."], "62° y 152°"],
    ["Pasa a minutos: 4° 25'. Y a grados y minutos: 200'.", ["4° = 4 × 60 = 240'; 240' + 25' = 265'.", "200 : 60 = 3, resto 20 → 3° 20'."], "265' y 3° 20'"],
  ],
  errores: [
    "Pensar que un ángulo es mayor porque sus lados están dibujados más largos.",
    "Leer en el transportador la escala que no empieza en 0 sobre el lado del ángulo.",
    "No poner el centro del transportador justo en el vértice.",
    "Contar de 100 en 100 en el sistema sexagesimal: 1° son 60 minutos, no 100.",
    "Confundir complementarios (suman 90°) con suplementarios (suman 180°).",
  ],
  ejercicios: [
    ["Dibuja un ángulo agudo, uno recto y uno obtuso, y señala en cada uno el vértice y los lados.", "Respuesta libre: agudo < 90°, recto = 90° (con cuadradito), obtuso entre 90° y 180°."],
    ["Clasifica: 89°, 91°, 30°, 180°.", "Agudo, obtuso, agudo y llano."],
    ["¿Cuántos grados hay en tres cuartos de vuelta?", "270°."],
    ["Dibuja con el transportador un ángulo de 75° y otro de 140°.", "Comprobar que el de 75° sale agudo y el de 140°, obtuso."],
    ["Pasa a segundos: 5'. Y a minutos: 2°.", "300'' y 120'."],
    ["Calcula: 32° 45' + 15° 30'.", "47° 75' = 48° 15'."],
    ["Calcula: 60° − 24° 40'.", "59° 60' − 24° 40' = 35° 20'."],
    ["Calcula el complementario de 54° y el suplementario de 99°.", "36° y 81°."],
    ["Dos rectas se cortan y uno de los ángulos mide 70°. ¿Cuánto miden los otros tres?", "70° (opuesto), 110° y 110° (adyacentes)."],
    ["¿Qué ángulo forman las agujas del reloj a las 2 en punto? ¿Y a las 9?", "60° (2 × 30°) y 90°."],
  ],
  quiz: [
    ["El punto donde se unen los lados de un ángulo es el…", ["vértice", "centro", "radio"], "Vértice."],
    ["Una vuelta completa mide…", ["360°", "180°", "100°"], "360 grados."],
    ["Un ángulo de 120° es…", ["obtuso", "agudo", "llano"], "Entre 90° y 180°."],
    ["Un ángulo recto mide…", ["90°", "100°", "45°"], "Un cuarto de vuelta."],
    ["El instrumento para medir ángulos es el…", ["transportador", "compás", "metro"], "Semicírculo graduado."],
    ["1° equivale a…", ["60'", "100'", "10'"], "Sistema sexagesimal."],
    ["El complementario de 40° es…", ["50°", "140°", "60°"], "90 − 40."],
    ["El suplementario de 40° es…", ["140°", "50°", "320°"], "180 − 40."],
    ["Los ángulos opuestos por el vértice…", ["miden lo mismo", "suman 90°", "suman 360°"], "Son iguales."],
    ["Un ángulo llano mide…", ["180°", "90°", "360°"], "Media vuelta."],
  ],
  examen: [
    ["150' son…", ["2° 30'", "1° 50'", "15°"], "150 : 60 = 2, resto 30."],
    ["10° 50' + 20° 20' =", ["31° 10'", "30° 70'", "30° 10'"], "70' = 1° 10'."],
    ["Dos ángulos adyacentes suman…", ["180°", "90°", "360°"], "Forman un llano."],
    ["A las 4 en punto, las agujas forman…", ["120°", "40°", "90°"], "4 × 30°."],
  ],
  feynman: ["Qué es un ángulo y por qué no importa la longitud de los lados", "Por qué una vuelta tiene 360°", "Cómo se mide un ángulo con el transportador sin equivocarse de escala", "Cómo funciona el sistema sexagesimal", "Qué son los ángulos complementarios y suplementarios"],
  mapa: ["ÁNGULOS", [["Elementos", "vértice y lados", AZ], ["Clases", "agudo · recto · obtuso · llano", VE], ["Medida", "transportador · 1° = 60'", SO], ["Parejas", "90° · 180° · opuestos", RO]]],
  tarjetas: [
    ["Ángulo agudo", "Mide menos de 90°."],
    ["Ángulo recto", "Mide 90°."],
    ["Ángulo obtuso", "Mide entre 90° y 180°."],
    ["Ángulo llano", "Mide 180°."],
    ["1 grado", "60 minutos; 1 minuto = 60 segundos."],
    ["Ángulos complementarios", "Suman 90°."],
    ["Ángulos suplementarios", "Suman 180°."],
    ["Ángulos opuestos por el vértice", "Miden lo mismo."],
  ],
  familias: ["Buscad ángulos rectos, agudos y obtusos en casa: puertas, tijeras, relojes, libros abiertos.", "Mirad un reloj de agujas a distintas horas y calculad el ángulo (cada hora son 30°).", "Si tenéis transportador, medid las esquinas de objetos de la casa.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido espacial y de la medida: el ángulo y sus elementos, clasificación, medida con transportador, sistema sexagesimal y relaciones entre ángulos",
  ideas: ["Ángulos con el cuerpo: los brazos como lados y el codo como vértice.", "Reloj gigante en el patio para descubrir los ángulos de las agujas.", "Plegar papel para obtener ángulos de 90°, 45° y 180°."],
});
