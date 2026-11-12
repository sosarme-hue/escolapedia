// Física y Química 2º ESO: el átomo y los elementos. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "El átomo y los elementos",
  minutos: 55,
  objetivos: ["Describir la evolución de los modelos atómicos de Dalton, Thomson, Rutherford y Bohr", "Conocer las partículas del átomo y calcular protones, neutrones y electrones a partir de Z y A", "Explicar qué son los isótopos y los iones", "Manejar la tabla periódica y distinguir metales, no metales y gases nobles, átomos y moléculas"],
  claves: ["átomo", "protón", "neutrón", "electrón", "número atómico", "número másico", "isótopo", "ion", "tabla periódica", "molécula"],
  pregunta: {
    texto: "Si pudieras ampliar un átomo hasta que su núcleo fuera del tamaño de una canica en el centro de un estadio de fútbol, ¿dónde estarían los electrones?",
    respuesta: "En las gradas más lejanas. Un átomo es casi todo <mark>espacio vacío</mark>: el <b>núcleo</b>, donde está casi toda la masa, es unas 100 000 veces más pequeño que el átomo entero. Los <b>electrones</b>, mucho más ligeros, se mueven alrededor a gran distancia. Esto lo descubrió Rutherford en 1911 disparando partículas contra una lámina de oro.",
  },
  bloques: [
    {
      html: `<h3>La idea de átomo</h3><p>Hace unos 2400 años, el filósofo griego <b>Demócrito</b> se preguntó qué pasaría si partiéramos un trozo de materia en trozos cada vez más pequeños. Pensó que llegaría un momento en que no se podría dividir más, y llamó a esas partículas <mark>átomos</mark>, que en griego significa «indivisible». Era solo una idea filosófica, sin experimentos. A principios del siglo XIX, el químico inglés <b>John Dalton</b> recuperó la idea para explicar las leyes de las reacciones químicas. Su <mark>teoría atómica</mark> decía que: la materia está formada por átomos indivisibles; todos los átomos de un mismo elemento son iguales en masa y propiedades; los átomos de elementos distintos son diferentes; y los compuestos se forman al unirse átomos de distintos elementos en proporciones fijas. Para Dalton, el átomo era una esfera maciza.</p>`,
    },
    {
      html: `<h3>Los modelos atómicos</h3><p>Hoy sabemos que el átomo sí se puede dividir. Los científicos fueron proponiendo <mark>modelos</mark> cada vez mejores. En 1897, <b>J. J. Thomson</b> descubrió el <b>electrón</b>, una partícula con carga negativa, y propuso que el átomo era una esfera de carga positiva con los electrones incrustados, como las pasas en un bizcocho. En 1911, <b>Ernest Rutherford</b> bombardeó una lámina finísima de oro con partículas positivas: casi todas la atravesaban, pero unas pocas rebotaban. Dedujo que el átomo tiene un <b>núcleo</b> diminuto, positivo y con casi toda la masa, y una <b>corteza</b> donde giran los electrones; el resto es vacío. En 1913, <b>Niels Bohr</b> propuso que los electrones solo pueden girar en ciertas <b>órbitas</b> o niveles de energía. El modelo actual, el cuántico, habla de <b>orbitales</b>: zonas donde es probable encontrar al electrón.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro modelos atómicos: Dalton, esfera maciza; Thomson, esfera positiva con electrones incrustados; Rutherford, núcleo y electrones girando; Bohr, electrones en órbitas fijas">${BG}
        ${[[36, 1803, "Dalton"], [100, 1897, "Thomson"], [164, 1911, "Rutherford"], [226, 1913, "Bohr"]].map(([x, a, n]) => `${t(x, 140, n, { size: 10 })}${t(x, 156, String(a), { size: 10, color: "var(--muted)" })}`).join("")}
        <circle cx="36" cy="80" r="24" fill="#9aa0a6"/>
        <circle cx="100" cy="80" r="24" fill="var(--red)" fill-opacity=".35" stroke="var(--red)"/>${[[-10, -10], [8, -12], [-12, 8], [10, 8], [0, -2]].map(([a, b]) => `<circle cx="${100 + a}" cy="${80 + b}" r="3.5" fill="var(--pen)"/>`).join("")}
        <circle cx="164" cy="80" r="4" fill="var(--red)"/><ellipse cx="164" cy="80" rx="26" ry="10" fill="none" stroke="var(--muted)"/><ellipse cx="164" cy="80" rx="26" ry="10" fill="none" stroke="var(--muted)" transform="rotate(60 164 80)"/><ellipse cx="164" cy="80" rx="26" ry="10" fill="none" stroke="var(--muted)" transform="rotate(-60 164 80)"/><circle cx="190" cy="80" r="3" fill="var(--pen)"/><circle cx="151" cy="58" r="3" fill="var(--pen)"/>
        <circle cx="226" cy="80" r="5" fill="var(--red)"/><circle cx="226" cy="80" r="14" fill="none" stroke="var(--muted)"/><circle cx="226" cy="80" r="24" fill="none" stroke="var(--muted)"/><circle cx="240" cy="80" r="3" fill="var(--pen)"/><circle cx="226" cy="56" r="3" fill="var(--pen)"/><circle cx="209" cy="97" r="3" fill="var(--pen)"/>
        ${t(130, 30, "evolución de los modelos →", { size: 11, color: "var(--muted)" })}</svg>`,
      video: { id: "8lX8FjjLKhc", titulo: "Modelos atómicos (Dalton, Thomson, Rutherford, Bohr y Chadwick)", canal: "Es Ciencia", vistas: 2514366 },
    },
    {
      html: `<h3>Las partículas del átomo</h3><p>Según el modelo actual, el átomo tiene dos zonas. En el <mark>núcleo</mark> están los <b>protones</b>, con carga eléctrica positiva (+), y los <b>neutrones</b>, sin carga, descubiertos por James Chadwick en 1932. Los dos tienen casi la misma masa, y juntos reúnen casi toda la masa del átomo. En la <mark>corteza</mark> se mueven los <b>electrones</b>, con carga negativa (−) y una masa unas 1840 veces menor que la del protón. Un átomo es <b>eléctricamente neutro</b>: tiene el mismo número de protones que de electrones, así que las cargas positivas y negativas se compensan. Las masas de estas partículas son tan pequeñas que se usa una unidad especial, la <b>unidad de masa atómica (u)</b>: un protón o un neutrón tienen aproximadamente 1 u.</p>${tabla(["Partícula", "Dónde está", "Carga", "Masa aproximada"], [["Protón", "núcleo", "+1", "1 u"], ["Neutrón", "núcleo", "0", "1 u"], ["Electrón", "corteza", "−1", "1/1840 u"]])}`,
    },
    {
      html: `<h3>Número atómico y número másico</h3><p>Cada elemento se identifica por su <mark>número atómico (Z)</mark>, que es el <b>número de protones</b> de su núcleo. Todos los átomos con 6 protones son carbono; todos los que tienen 8 son oxígeno. Si el átomo es neutro, Z también es el número de electrones. El <mark>número másico (A)</mark> es la <b>suma de protones y neutrones</b>: A = Z + N. Por tanto, el número de neutrones es N = A − Z. Para representar un átomo se escribe el símbolo del elemento con A arriba a la izquierda y Z abajo a la izquierda. Por ejemplo, el sodio-23 tiene Z = 11 y A = 23: tiene 11 protones, 11 electrones y 23 − 11 = 12 neutrones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Representación de un átomo de sodio: número másico 23 arriba a la izquierda, número atómico 11 abajo a la izquierda y símbolo Na; tiene 11 protones, 11 electrones y 12 neutrones">${BG}
        ${t(40, 64, "23", { size: 20, color: "var(--red)" })}${t(40, 116, "11", { size: 20, color: "var(--pen)" })}${t(92, 104, "Na", { size: 48, font: D })}
        ${t(136, 40, "A = protones + neutrones", { size: 9, color: "var(--red)", anchor: "start" })}${fl(132, 36, 58, 56, "var(--red)", 1.5)}
        ${t(136, 140, "Z = protones", { size: 10, color: "var(--pen)", anchor: "start" })}${fl(132, 136, 58, 114, "var(--pen)", 1.5)}
        ${t(150, 80, "p⁺ = 11", { size: 12, anchor: "start" })}${t(150, 98, "e⁻ = 11", { size: 12, anchor: "start" })}${t(150, 116, "n = 23 − 11 = 12", { size: 12, anchor: "start" })}</svg>`,
      video: { id: "5-jW1Tppdgs", titulo: "Calcular protones, neutrones y electrones: número másico y atómico", canal: "Susi Profe", vistas: 2996954 },
    },
    {
      html: `<h3>Los isótopos</h3><p>Los átomos de un mismo elemento siempre tienen el mismo número de protones, pero pueden tener <b>distinto número de neutrones</b>. Se llaman <mark>isótopos</mark>: tienen el mismo Z y distinto A. El hidrógeno tiene tres: el protio (sin neutrones), el deuterio (1 neutrón) y el tritio (2 neutrones). El carbono más abundante es el carbono-12, pero también existe el <b>carbono-14</b>, que es radiactivo y se desintegra poco a poco; midiendo cuánto queda en un hueso o en una madera, los científicos calculan su edad (<b>datación por carbono-14</b>). Otros isótopos radiactivos se usan en medicina para diagnosticar y tratar enfermedades, como el yodo-131 en el tiroides, o en las centrales nucleares, como el uranio-235. Los isótopos de un elemento tienen las mismas propiedades químicas, porque tienen los mismos electrones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Isótopos del hidrógeno: protio con un protón, deuterio con un protón y un neutrón, tritio con un protón y dos neutrones; los tres tienen un electrón">${BG}
        ${[[46, 0, "protio", "¹H"], [130, 1, "deuterio", "²H"], [214, 2, "tritio", "³H"]].map(([x, n, s, f]) => `<circle cx="${x}" cy="80" r="34" fill="none" stroke="var(--muted)" stroke-dasharray="3 3"/><circle cx="${x + 24}" cy="56" r="4" fill="var(--pen)"/><circle cx="${x - (n ? 5 : 0)}" cy="80" r="7" fill="var(--red)"/>${n > 0 ? `<circle cx="${x + 6}" cy="${n === 2 ? 74 : 80}" r="7" fill="#9aa0a6"/>` : ""}${n === 2 ? `<circle cx="${x + 4}" cy="88" r="7" fill="#9aa0a6"/>` : ""}${t(x, 136, s, { size: 11 })}${t(x, 156, f, { size: 13, color: "var(--muted)" })}`).join("")}
        ${t(130, 174, "mismo Z = 1, distinto número de neutrones", { size: 9, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Los iones</h3><p>Los protones están muy sujetos en el núcleo, pero los electrones de la corteza pueden ganarse o perderse. Cuando un átomo gana o pierde electrones, deja de ser neutro y se convierte en un <mark>ion</mark>, una partícula con carga eléctrica. Si <b>pierde electrones</b>, le quedan más protones que electrones y su carga es positiva: es un <b>catión</b>. Por ejemplo, el sodio pierde un electrón y forma Na⁺. Los metales tienden a formar cationes. Si <b>gana electrones</b>, su carga es negativa: es un <b>anión</b>. Por ejemplo, el cloro gana un electrón y forma Cl⁻. Los no metales tienden a formar aniones. Los iones están en todas partes: la sal común está formada por iones Na⁺ y Cl⁻; las bebidas isotónicas reponen iones que se pierden con el sudor, y nuestros nervios funcionan gracias a iones de sodio y potasio.</p>`,
    },
    {
      html: `<h3>Los elementos y sus símbolos</h3><p>Un <mark>elemento químico</mark> es una sustancia formada por átomos con el mismo número atómico. Se conocen 118: unos 90 existen en la naturaleza y el resto se han fabricado en laboratorios. Cada elemento tiene un <mark>símbolo</mark> de una o dos letras, la primera en mayúscula y la segunda en minúscula. Muchos vienen de su nombre en latín o griego: Fe (hierro, de <i>ferrum</i>), Au (oro, de <i>aurum</i>), Ag (plata, de <i>argentum</i>), Na (sodio, de <i>natrium</i>), Pb (plomo, de <i>plumbum</i>). Otros homenajean a científicos (Es, einstenio; Cm, curio), lugares (Ge, germanio; Po, polonio) o planetas (U, uranio). En el universo, los más abundantes son el hidrógeno y el helio; en la corteza terrestre, el oxígeno y el silicio; y en nuestro cuerpo, el oxígeno, el carbono, el hidrógeno y el nitrógeno.</p>${tabla(["Elemento", "Símbolo", "Elemento", "Símbolo"], [["Hidrógeno", "H", "Sodio", "Na"], ["Carbono", "C", "Hierro", "Fe"], ["Nitrógeno", "N", "Cobre", "Cu"], ["Oxígeno", "O", "Plata", "Ag"], ["Cloro", "Cl", "Oro", "Au"], ["Calcio", "Ca", "Mercurio", "Hg"]])}`,
    },
    {
      html: `<h3>La tabla periódica</h3><p>En 1869, el químico ruso <b>Dmitri Mendeléiev</b> ordenó los 63 elementos conocidos en una tabla según sus propiedades y dejó huecos para elementos que aún no se conocían, prediciendo cómo serían. Cuando se descubrieron, acertó. Hoy la <mark>tabla periódica</mark> ordena los elementos por su <b>número atómico creciente</b>. Tiene 7 filas horizontales, los <mark>periodos</mark>, y 18 columnas, los <mark>grupos</mark> o familias. Los elementos de un mismo grupo tienen <b>propiedades químicas parecidas</b> porque tienen el mismo número de electrones en su última capa. Algunos grupos tienen nombre propio: los <b>alcalinos</b> (grupo 1: Li, Na, K), muy reactivos; los <b>alcalinotérreos</b> (grupo 2: Mg, Ca); los <b>halógenos</b> (grupo 17: F, Cl, Br, I); y los <b>gases nobles</b> (grupo 18: He, Ne, Ar), que casi no reaccionan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla periódica simplificada con 18 grupos y 7 periodos: metales a la izquierda y en el centro, no metales a la derecha arriba, gases nobles en la última columna e hidrógeno arriba a la izquierda">${BG}
        ${(() => { let s = ""; const w = 12.6, h = 13, x0 = 16, y0 = 26; const noMet = { 1: [14, 15, 16, 17], 2: [15, 16, 17], 3: [16, 17], 4: [17] }; for (let p = 0; p < 7; p++) for (let g = 0; g < 18; g++) { let ok = (p === 0 && (g === 0 || g === 17)) || (p < 3 && (g < 2 || g > 11)) || p >= 3; if (!ok) continue; let c = "var(--pen)"; if (g === 17) c = "#7b3fc4"; else if (p === 0 && g === 0) c = "var(--leaf)"; else if ((noMet[p] || []).includes(g + 1) || (p === 1 && g === 13)) c = "var(--leaf)"; s += `<rect x="${x0 + g * w}" y="${y0 + p * h}" width="${w - 1.5}" height="${h - 1.5}" rx="1.5" fill="${c}" fill-opacity=".7"/>`; } return s; })()}
        <rect x="16" y="130" width="10" height="10" fill="var(--pen)" fill-opacity=".7"/>${t(30, 139, "metales", { size: 10, anchor: "start" })}
        <rect x="96" y="130" width="10" height="10" fill="var(--leaf)" fill-opacity=".7"/>${t(110, 139, "no metales", { size: 10, anchor: "start" })}
        <rect x="186" y="130" width="10" height="10" fill="#7b3fc4" fill-opacity=".7"/>${t(200, 139, "nobles", { size: 10, anchor: "start" })}
        ${t(20, 20, "grupos →", { size: 9, color: "var(--muted)", anchor: "start" })}${t(130, 164, "periodos: filas · grupos: columnas", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "FqZ3BSeu1d0", titulo: "Entendiendo la tabla periódica", canal: "UBUinvestiga", vistas: 2428612 },
    },
    {
      html: `<h3>Metales, no metales y gases nobles</h3><p>Una línea en escalera divide la tabla periódica. A la izquierda y en el centro están los <mark>metales</mark>, que son la mayoría: tienen <b>brillo metálico</b>, son sólidos a temperatura ambiente (excepto el mercurio), <b>conducen bien</b> el calor y la electricidad, y son dúctiles (se estiran en hilos) y maleables (se laminan). Tienden a perder electrones y formar cationes. A la derecha están los <mark>no metales</mark>: no tienen brillo, conducen mal el calor y la electricidad, y muchos son gases (oxígeno, nitrógeno, cloro); los sólidos, como el azufre o el carbono, son frágiles. Tienden a ganar electrones. Junto a la escalera están los <b>semimetales</b>, como el silicio, con propiedades intermedias, muy usados en electrónica. En la última columna están los <mark>gases nobles</mark>, muy estables, usados en carteles luminosos (neón) y globos (helio).</p>`,
    },
    {
      html: `<h3>Átomos, moléculas y cristales</h3><p>En la naturaleza, casi ningún átomo está solo: los átomos se unen mediante <mark>enlaces químicos</mark>. Solo los gases nobles existen como átomos aislados. Cuando unos pocos átomos se unen formando una agrupación independiente, se forma una <mark>molécula</mark>. Puede ser de un elemento, como el oxígeno que respiramos (O₂), el nitrógeno (N₂) o el ozono (O₃), o de un compuesto, como el agua (H₂O), el dióxido de carbono (CO₂) o el amoniaco (NH₃). Otras veces, millones de átomos o iones se unen ordenadamente formando una red tridimensional llamada <mark>cristal</mark>: así son la sal común, formada por iones Na⁺ y Cl⁻ que se alternan, el diamante, formado solo por átomos de carbono, y los metales. La <b>fórmula química</b> indica qué elementos forman una sustancia y en qué proporción.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Moléculas de oxígeno O2 y agua H2O, y un cristal de sal con iones de sodio y cloro alternados en una red">${BG}
        <circle cx="34" cy="60" r="12" fill="#e04a3a" stroke="var(--ink)"/><circle cx="56" cy="60" r="12" fill="#e04a3a" stroke="var(--ink)"/>${t(45, 96, "O₂", { size: 13 })}
        <circle cx="100" cy="60" r="12" fill="#e04a3a" stroke="var(--ink)"/><circle cx="86" cy="74" r="8" fill="#fff" stroke="var(--ink)"/><circle cx="114" cy="74" r="8" fill="#fff" stroke="var(--ink)"/>${t(100, 106, "H₂O", { size: 13 })}
        ${[0, 1, 2, 3].map((i) => [0, 1, 2, 3].map((j) => `<circle cx="${160 + i * 22}" cy="${30 + j * 22}" r="${(i + j) % 2 ? 9 : 6}" fill="${(i + j) % 2 ? "var(--leaf)" : "#9a66e0"}"/>`).join("")).join("")}
        ${t(193, 136, "cristal de NaCl", { size: 11 })}${t(70, 136, "moléculas", { size: 11 })}
        <circle cx="160" cy="160" r="5" fill="#9a66e0"/>${t(170, 164, "Na⁺", { size: 10, anchor: "start" })}<circle cx="206" cy="160" r="7" fill="var(--leaf)"/>${t(218, 164, "Cl⁻", { size: 10, anchor: "start" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Cómo es un átomo",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Átomo de carbono: núcleo con 6 protones y 6 neutrones y corteza con 6 electrones; número atómico 6 y número másico 12">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <circle cx="170" cy="115" r="90" fill="none" stroke="var(--muted)" stroke-dasharray="4 4"/><circle cx="170" cy="115" r="50" fill="none" stroke="var(--muted)" stroke-dasharray="4 4"/>
      ${[[-7, -7, 1], [7, -7, 0], [-7, 7, 0], [7, 7, 1], [0, -14, 0], [0, 14, 1], [-14, 0, 1], [14, 0, 0], [0, 0, 1], [-10, -16, 0], [10, 16, 1], [16, -10, 0]].map(([a, b, p]) => `<circle cx="${170 + a}" cy="${115 + b}" r="8" fill="${p ? "var(--red)" : "#9aa0a6"}" stroke="var(--paper)"/>`).join("")}
      ${[[220, 115], [120, 115], [170, 25], [234, 178], [106, 52], [106, 178]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--pen)"/>`).join("")}
      <circle cx="320" cy="60" r="8" fill="var(--red)"/>${t(338, 65, "protón (+) en el núcleo", { size: 15, anchor: "start" })}
      <circle cx="320" cy="100" r="8" fill="#9aa0a6"/>${t(338, 105, "neutrón (sin carga) en el núcleo", { size: 15, anchor: "start" })}
      <circle cx="320" cy="140" r="7" fill="var(--pen)"/>${t(338, 145, "electrón (−) en la corteza", { size: 15, anchor: "start" })}
      ${t(320, 192, "Carbono: Z = 6, A = 12", { size: 17, color: "var(--leaf)", anchor: "start", font: D })}
    </svg>`,
  },
  video: { id: "D0V-N3TrAkY", titulo: "¿Qué son los átomos?", canal: "FlexFlix Kids en Español", vistas: 2187555, megusta: 42168, busqueda: "el átomo y sus partes" },
  ejemplos: [
    { enunciado: "El átomo de aluminio tiene Z = 13 y A = 27. ¿Cuántos protones, electrones y neutrones tiene?",
      pasos: ["Protones = Z = 13.", "Al ser neutro, electrones = protones = 13.", "Neutrones = A − Z = 27 − 13 = 14."],
      resultado: "13 protones, 13 electrones y 14 neutrones." },
    { enunciado: "Un ion tiene 20 protones, 18 electrones y 20 neutrones. ¿De qué elemento es? ¿Qué carga tiene?",
      pasos: ["Z = 20: es calcio (Ca).", "Carga = protones − electrones = 20 − 18 = +2.", "A = 20 + 20 = 40."],
      resultado: "Es el catión Ca²⁺ (calcio-40)." },
    { enunciado: "El cloro-35 y el cloro-37 son isótopos. ¿En qué se parecen y en qué se diferencian? (Z = 17)",
      pasos: ["Los dos tienen 17 protones y, si son neutros, 17 electrones.", "Cloro-35: 35 − 17 = 18 neutrones.", "Cloro-37: 37 − 17 = 20 neutrones."],
      resultado: "Mismos protones y electrones; distinto número de neutrones (18 y 20)." },
  ],
  errores: [
    "Pensar que el número másico es el número de neutrones: es protones más neutrones.",
    "Creer que un ion positivo ha ganado protones: ha perdido electrones.",
    "Escribir los símbolos con las dos letras en mayúscula: es Co (cobalto), no CO (monóxido de carbono).",
    "Confundir periodos (filas) con grupos (columnas) en la tabla periódica.",
    "Pensar que los isótopos son elementos distintos: son el mismo elemento con distinto número de neutrones.",
  ],
  ejercicios: [
    { q: "Ordena cronológicamente los modelos de Bohr, Dalton, Rutherford y Thomson y di qué aportó cada uno.", sol: "Dalton (átomo indivisible), Thomson (electrones en una esfera positiva), Rutherford (núcleo y corteza, mucho vacío), Bohr (electrones en órbitas fijas)." },
    { q: "¿Qué descubrió Rutherford con su experimento de la lámina de oro?", sol: "Que el átomo es casi todo vacío y tiene un núcleo pequeño, positivo y con casi toda la masa." },
    { q: "Completa: el oxígeno-16 (Z = 8) tiene … protones, … neutrones y … electrones.", sol: "8 protones, 8 neutrones y 8 electrones." },
    { q: "Un átomo tiene 26 protones y 30 neutrones. Calcula Z y A y di qué elemento es.", sol: "Z = 26, A = 56. Es el hierro." },
    { q: "Indica protones y electrones de: Na⁺ (Z = 11), O²⁻ (Z = 8), Al³⁺ (Z = 13).", sol: "Na⁺: 11 p, 10 e. O²⁻: 8 p, 10 e. Al³⁺: 13 p, 10 e." },
    { q: "¿Qué es un catión y qué es un anión? Pon un ejemplo de cada.", sol: "Catión: ion positivo, ha perdido electrones (Na⁺). Anión: ion negativo, ha ganado electrones (Cl⁻)." },
    { q: "Escribe el símbolo de: potasio, azufre, plomo, cinc y helio.", sol: "K, S, Pb, Zn y He." },
    { q: "¿Por qué el sodio y el potasio tienen propiedades parecidas?", sol: "Porque están en el mismo grupo (alcalinos) y tienen el mismo número de electrones en la última capa." },
    { q: "Clasifica en metal o no metal: cobre, azufre, oxígeno, hierro, carbono, oro.", sol: "Metales: cobre, hierro, oro. No metales: azufre, oxígeno, carbono." },
    { q: "Explica la diferencia entre una molécula y un cristal y pon un ejemplo de cada.", sol: "Una molécula es una agrupación pequeña de átomos (H₂O, O₂). Un cristal es una red ordenada de muchísimos átomos o iones (sal común, diamante)." },
  ],
  quiz: [
    { q: "La palabra «átomo» significa…", o: ["pequeño", "indivisible", "partícula"], a: 1, e: "Indivisible, en griego." },
    { q: "El electrón lo descubrió…", o: ["Dalton", "Thomson", "Bohr"], a: 1, e: "Thomson, en 1897." },
    { q: "En el núcleo del átomo hay…", o: ["protones y electrones", "protones y neutrones", "solo electrones"], a: 1, e: "Protones y neutrones." },
    { q: "El número atómico Z indica el número de…", o: ["neutrones", "protones", "protones y neutrones"], a: 1, e: "Protones." },
    { q: "Un átomo con Z = 6 y A = 14 tiene…", o: ["6 neutrones", "8 neutrones", "14 neutrones"], a: 1, e: "14 − 6 = 8." },
    { q: "Los isótopos tienen distinto número de…", o: ["protones", "neutrones", "electrones"], a: 1, e: "Neutrones." },
    { q: "Un átomo que gana electrones forma un…", o: ["catión", "anión", "isótopo"], a: 1, e: "Anión, negativo." },
    { q: "El símbolo del hierro es…", o: ["Hi", "Fe", "H"], a: 1, e: "Fe, de ferrum." },
    { q: "Las columnas de la tabla periódica son…", o: ["periodos", "grupos", "capas"], a: 1, e: "Grupos." },
    { q: "Los gases nobles están en el grupo…", o: ["1", "17", "18"], a: 2, e: "El 18." },
  ],
  examen: [
    { q: "La tabla periódica actual ordena los elementos por…", o: ["su masa", "su número atómico", "su descubrimiento"], a: 1, e: "Por Z creciente." },
    { q: "¿Cuál es un no metal?", o: ["El sodio", "El azufre", "El cobre"], a: 1, e: "El azufre." },
    { q: "La molécula de agua tiene…", o: ["2 H y 1 O", "1 H y 2 O", "2 H y 2 O"], a: 0, e: "H₂O." },
  ],
  feynman: ["Cómo fue cambiando la idea de átomo de Dalton a Bohr", "Cómo se calculan protones, neutrones y electrones con Z y A", "Cómo está organizada la tabla periódica"],
  mapa: mapa("EL ÁTOMO", "var(--eso)", [
    ["Modelos", "Dalton · Thomson · Rutherford · Bohr", "var(--pen)"],
    ["Partículas", "protón · neutrón · electrón", "var(--red)"],
    ["Z y A", "isótopos · iones", "#b8860b"],
    ["Tabla periódica", "grupos · periodos · metales", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Átomo", "Partícula más pequeña de un elemento que conserva sus propiedades."],
    ["Protón", "Partícula del núcleo con carga positiva."],
    ["Neutrón", "Partícula del núcleo sin carga."],
    ["Electrón", "Partícula de la corteza con carga negativa y masa muy pequeña."],
    ["Número atómico (Z)", "Número de protones; identifica al elemento."],
    ["Número másico (A)", "Protones + neutrones."],
    ["Isótopos", "Átomos del mismo elemento con distinto número de neutrones."],
    ["Ion", "Átomo con carga por haber ganado (anión) o perdido (catión) electrones."],
  ],
  familias: ["Buscad en etiquetas de alimentos y medicamentos nombres de elementos (calcio, hierro, sodio…) y escribid su símbolo.", "Construid modelos de moléculas (H₂O, CO₂, O₂) con plastilina y palillos.", "Jugad a adivinar elementos por su símbolo con tarjetas."],
  profesores: {
    saberes: "La materia: modelos atómicos, partículas subatómicas, número atómico y másico, isótopos, iones, tabla periódica, elementos, moléculas y cristales (RD 217/2022, Física y Química, bloque «La materia»).",
    ideas: ["Línea del tiempo de los modelos atómicos con maquetas por grupos.", "Simulación del experimento de Rutherford con canicas lanzadas contra objetos ocultos bajo una tabla.", "Concurso de la tabla periódica: cada alumno «adopta» un elemento y presenta su ficha."],
  },
  fuentes: [RD, wiki("Átomo", "Átomo"), wiki("Tabla periódica de los elementos", "Tabla_periódica_de_los_elementos")],
  revisado: REV,
};
