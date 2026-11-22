// Matemáticas 5º de Primaria: cuerpos geométricos, poliedros y cuerpos redondos. Dibujos propios en SVG.
const P = require("./_pri5a");
const { svg, t, AZ, RO, VE, NA, SO, MO, AG } = P;

// Prisma recto de base poligonal regular de n lados (vista oblicua). (x, y) centro de la base inferior.
const prisma = (x, y, n, r, h, c = AZ) => {
  const b = [...Array(n)].map((_, i) => { const a = (i / n) * 2 * Math.PI + Math.PI / 2 + 0.3; return [x + r * Math.cos(a), y + r * 0.38 * Math.sin(a)]; });
  const s = (p, dy = 0) => p.map(([px, py]) => `${px.toFixed(1)},${(py + dy).toFixed(1)}`).join(" ");
  return `<polygon points="${s(b)}" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="2"/>${b.map(([px, py]) => `<path d="M${px.toFixed(1)} ${py.toFixed(1)} V ${(py - h).toFixed(1)}" stroke="${c}" stroke-width="2"/>`).join("")}<polygon points="${s(b, -h)}" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>`;
};
// Pirámide de base poligonal regular de n lados con cúspide a altura h.
const piramide = (x, y, n, r, h, c = RO) => {
  const b = [...Array(n)].map((_, i) => { const a = (i / n) * 2 * Math.PI + Math.PI / 2 + 0.3; return [x + r * Math.cos(a), y + r * 0.38 * Math.sin(a)]; });
  return `<polygon points="${b.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ")}" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>${b.map(([px, py]) => `<path d="M${px.toFixed(1)} ${py.toFixed(1)} L ${x} ${y - h}" stroke="${c}" stroke-width="2"/>`).join("")}<circle cx="${x}" cy="${y - h}" r="3" fill="var(--ink)"/>`;
};
const cilindro = (x, y, r, h, c = VE) => `<path d="M${x - r} ${y} V ${y - h} M${x + r} ${y} V ${y - h}" stroke="${c}" stroke-width="2"/><path d="M${x - r} ${y} A ${r} ${r * 0.35} 0 0 0 ${x + r} ${y}" fill="none" stroke="${c}" stroke-width="2"/><path d="M${x - r} ${y} A ${r} ${r * 0.35} 0 0 1 ${x + r} ${y}" fill="none" stroke="${c}" stroke-width="1.4" stroke-dasharray="4 3"/><ellipse cx="${x}" cy="${y - h}" rx="${r}" ry="${r * 0.35}" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>`;
const cono = (x, y, r, h, c = NA) => `<path d="M${x - r} ${y} L ${x} ${y - h} L ${x + r} ${y}" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="2"/><path d="M${x - r} ${y} A ${r} ${r * 0.35} 0 0 0 ${x + r} ${y}" fill="none" stroke="${c}" stroke-width="2"/><path d="M${x - r} ${y} A ${r} ${r * 0.35} 0 0 1 ${x + r} ${y}" fill="none" stroke="${c}" stroke-width="1.4" stroke-dasharray="4 3"/>`;
const esfera = (x, y, r, c = MO) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="2"/><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.3}" fill="none" stroke="${c}" stroke-width="1.4" stroke-dasharray="4 3"/>`;
// Cubo sencillo en perspectiva.
const cubo = (x, y, l, c = AZ) => { const d = l * 0.45; return `<path d="M${x} ${y} h ${l} l ${d} ${-d} h ${-l} Z" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2"/><path d="M${x + l} ${y} v ${l} l ${d} ${-d} v ${-l} Z" fill="${c}" fill-opacity=".4" stroke="${c}" stroke-width="2"/><rect x="${x}" y="${y}" width="${l}" height="${l}" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="2"/>`; };

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Cuerpos geométricos",
  minutos: 50,
  objetivos: ["Distinguir figuras planas y cuerpos geométricos", "Reconocer los poliedros y sus elementos: caras, aristas y vértices", "Clasificar prismas y pirámides y conocer los poliedros regulares", "Identificar los cuerpos redondos: cilindro, cono y esfera"],
  claves: ["cuerpo geométrico", "poliedro", "cara", "arista", "vértice", "prisma", "pirámide", "cubo", "cilindro", "cono", "esfera", "desarrollo plano"],
  pregunta: ["Una caja de zapatos, un dado y una lata de refresco: ¿cuál de ellos puede rodar?", "Solo la <b>lata</b>, porque es un <b>cilindro</b>, un <b>cuerpo redondo</b> con una superficie curva. La caja y el dado son <b>poliedros</b>: todas sus caras son planas (polígonos) y por eso no ruedan, <mark>se quedan quietos sobre una cara</mark>."],
  bloques: [
    ["Figuras planas y cuerpos geométricos", `<p>Las <b>figuras planas</b>, como el triángulo o el círculo, solo tienen dos dimensiones: <b>largo y ancho</b>. Se pueden dibujar en un papel.</p><p>Los <b>cuerpos geométricos</b> tienen <b>tres dimensiones</b>: largo, ancho y <b>alto</b>. Ocupan un lugar en el espacio y podemos cogerlos con la mano: una caja, una pelota, un dado, un cucurucho…</p><p>Los cuerpos geométricos se dividen en dos grandes grupos:</p><ul><li><b>Poliedros</b>: todas sus caras son <b>planas</b> y son polígonos.</li><li><b>Cuerpos redondos</b>: tienen alguna superficie <b>curva</b>.</li></ul><p>Truco: si un cuerpo <mark>puede rodar</mark>, es un cuerpo redondo.</p>`,
      svg("Un cuadrado plano frente a un cubo con tres dimensiones", `<rect x="26" y="60" width="64" height="64" fill="${AZ}" fill-opacity=".2" stroke="${AZ}" stroke-width="2.5"/>${t(58, 146, "figura plana", { s: 11, c: AZ })}${t(58, 162, "2 dimensiones", { s: 10, c: "var(--muted)" })}${cubo(150, 70, 56, VE)}${t(196, 146, "cuerpo", { s: 11, c: VE })}${t(196, 162, "3 dimensiones", { s: 10, c: "var(--muted)" })}`)],
    ["Los poliedros y sus elementos", `<p>Un <b>poliedro</b> es un cuerpo geométrico limitado por <b>polígonos</b>. Sus elementos son:</p><ul><li><b>Caras</b>: los polígonos que lo limitan.</li><li><b>Aristas</b>: los segmentos donde se juntan dos caras.</li><li><b>Vértices</b>: los puntos donde se juntan varias aristas.</li></ul><p>Un cubo tiene <b>6 caras</b>, <b>12 aristas</b> y <b>8 vértices</b>.</p><p>Un matemático suizo, <b>Euler</b>, descubrió una regla curiosa que cumplen muchos poliedros: <mark>caras + vértices = aristas + 2</mark>. En el cubo: 6 + 8 = 12 + 2. ¡Compruébalo con otros poliedros!</p>`,
      svg("Cubo con una cara, una arista y un vértice señalados", `${cubo(56, 66, 80, AZ)}<path d="M56 146 H 136" stroke="${RO}" stroke-width="4"/><circle cx="136" cy="66" r="5" fill="${VE}"/>${t(96, 112, "cara", { s: 12, c: AZ })}${t(96, 166, "arista", { s: 12, c: RO })}${t(206, 46, "vértice", { s: 12, c: VE })}${P.flecha(186, 50, 142, 64, VE, 2)}`),
      P.V("cueB")],
    ["Los prismas", `<p>Un <b>prisma</b> es un poliedro que tiene:</p><ul><li><b>Dos bases</b> iguales y paralelas, que son polígonos.</li><li><b>Caras laterales</b> que son <b>paralelogramos</b> (normalmente rectángulos).</li></ul><p>Los prismas se nombran según el polígono de sus bases:</p><ul><li><b>Prisma triangular</b>: bases triangulares (como una tienda de campaña).</li><li><b>Prisma cuadrangular</b>: bases cuadradas o rectangulares (como una caja de zapatos).</li><li><b>Prisma pentagonal</b>, <b>hexagonal</b> (como un lápiz)…</li></ul><p>Un caso especial es el <b>cubo</b>: un prisma con todas sus caras cuadradas e iguales. Una caja de zapatos es un prisma rectangular llamado <mark>ortoedro</mark>.</p>`,
      svg("Prismas triangular, cuadrangular y hexagonal", `${prisma(46, 140, 3, 30, 70, AZ)}${t(46, 168, "triangular", { s: 10, c: AZ })}${prisma(130, 140, 4, 30, 70, VE)}${t(130, 168, "cuadrangular", { s: 10, c: VE })}${prisma(214, 140, 6, 30, 70, MO)}${t(214, 168, "hexagonal", { s: 10, c: MO })}`)],
    ["Las pirámides", `<p>Una <b>pirámide</b> es un poliedro que tiene:</p><ul><li><b>Una base</b>, que es un polígono cualquiera.</li><li><b>Caras laterales triangulares</b> que se unen en un punto llamado <b>cúspide</b> o vértice de la pirámide.</li></ul><p>Como los prismas, se nombran según el polígono de su base: <b>pirámide triangular</b>, <b>cuadrangular</b>, <b>pentagonal</b>…</p><p>Diferencias con el prisma: el prisma tiene <b>dos</b> bases y caras laterales rectangulares; la pirámide tiene <b>una</b> base y caras laterales triangulares.</p><p>Las pirámides de Egipto, construidas hace más de 4 500 años, son <mark>pirámides cuadrangulares</mark> gigantes.</p>`,
      svg("Pirámides triangular, cuadrangular y pentagonal con su cúspide", `${piramide(46, 140, 3, 30, 90, RO)}${t(46, 166, "triangular", { s: 10, c: RO })}${piramide(130, 140, 4, 32, 90, NA)}${t(130, 166, "cuadrangular", { s: 10, c: NA })}${piramide(214, 140, 5, 30, 90, AZ)}${t(214, 166, "pentagonal", { s: 10, c: AZ })}${t(130, 30, "cúspide", { s: 11 })}`)],
    ["Los poliedros regulares", `<p>Un poliedro es <b>regular</b> si todas sus caras son <b>polígonos regulares iguales</b> y en cada vértice se juntan el mismo número de caras.</p><p>¡Solo existen <b>cinco</b>! Se llaman <b>sólidos platónicos</b>, en honor al filósofo griego Platón:</p><ul><li><b>Tetraedro</b>: 4 caras triangulares.</li><li><b>Cubo</b> o hexaedro: 6 caras cuadradas.</li><li><b>Octaedro</b>: 8 caras triangulares.</li><li><b>Dodecaedro</b>: 12 caras pentagonales.</li><li><b>Icosaedro</b>: 20 caras triangulares.</li></ul><p>Los dados de muchos juegos de mesa tienen estas formas: hay dados de 4, 6, 8, 12 y <mark>20 caras</mark>.</p>`,
      P.tabla("Los cinco poliedros regulares y sus caras", ["Poliedro", "Caras", "Forma"], [["Tetraedro", "4", "triángulos"], ["Cubo", "6", "cuadrados"], ["Octaedro", "8", "triángulos"], ["Dodecaedro", "12", "pentágonos"], ["Icosaedro", "20", "triángulos"]], MO)],
    ["Los cuerpos redondos", `<p>Los <b>cuerpos redondos</b> tienen al menos una superficie <b>curva</b>. Los tres principales son:</p><ul><li><b>Cilindro</b>: dos bases que son <b>círculos</b> iguales y una superficie lateral curva. Ejemplos: una lata, un rollo de papel.</li><li><b>Cono</b>: una base circular y una superficie lateral curva que termina en un punto, el <b>vértice</b>. Ejemplos: un cucurucho, un cono de tráfico.</li><li><b>Esfera</b>: toda su superficie es curva y todos sus puntos están a la misma distancia del <b>centro</b>. Ejemplos: una pelota, una canica.</li></ul><p>El cilindro y el cono pueden rodar en círculo o en línea recta; la esfera <mark>rueda en todas direcciones</mark>.</p>`,
      svg("Cuerpos redondos: cilindro, cono y esfera", `${cilindro(46, 140, 28, 76)}${t(46, 168, "cilindro", { s: 11, c: VE })}${cono(130, 140, 30, 90)}${t(130, 168, "cono", { s: 11, c: NA })}${esfera(214, 104, 32)}${t(214, 168, "esfera", { s: 11, c: MO })}`),
      P.V("cueB2")],
    ["Los desarrollos planos", `<p>Si «desdoblas» un cuerpo geométrico y lo extiendes sobre una mesa, obtienes su <b>desarrollo plano</b>. Al revés, recortando y doblando un desarrollo plano, puedes <b>construir</b> el cuerpo.</p><ul><li>El desarrollo del <b>cubo</b> está formado por <b>6 cuadrados</b> (hay 11 formas distintas de colocarlos).</li><li>El de un <b>prisma</b>: 2 polígonos (bases) y varios rectángulos.</li><li>El de una <b>pirámide</b>: 1 polígono (base) y varios triángulos.</li><li>El del <b>cilindro</b>: 2 círculos y un rectángulo (como la etiqueta de una lata).</li><li>El del <b>cono</b>: 1 círculo y un sector circular.</li></ul><p>La esfera <mark>no tiene desarrollo plano</mark>: por eso los mapas del mundo siempre deforman un poco los continentes.</p>`,
      svg("Desarrollo plano del cubo en forma de cruz con seis cuadrados", `${[[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]].map(([i, j], k) => `<rect x="${30 + i * 40}" y="${24 + j * 40}" width="40" height="40" fill="${[AZ, VE, SO, MO, RO, AG][k]}" fill-opacity=".3" stroke="var(--ink)" stroke-width="2"/>${t(50 + i * 40, 49 + j * 40, String(k + 1), { s: 13 })}`).join("")}${t(200, 140, "6 cuadrados", { s: 12 })}${t(200, 158, "= 1 cubo", { s: 12, c: VE })}`)],
    ["Comparar poliedros y cuerpos redondos", `<p>Para clasificar cualquier objeto, hazte estas preguntas:</p><ol><li>¿Tiene alguna superficie curva? Si la respuesta es sí, es un <b>cuerpo redondo</b>; si no, es un <b>poliedro</b>.</li><li>Si es un poliedro: ¿tiene dos bases iguales y paralelas? → <b>prisma</b>. ¿Una base y caras triangulares que se juntan en un punto? → <b>pirámide</b>.</li><li>Si es redondo: ¿dos bases circulares? → <b>cilindro</b>. ¿Una base y un vértice? → <b>cono</b>. ¿Sin bases? → <b>esfera</b>.</li></ol><p>Ejemplos: un tetrabrik es un <b>prisma</b>; un gorro de cumpleaños es un <b>cono</b>; una tienda india es una <mark>pirámide</mark>.</p>`,
      P.filas("Preguntas para clasificar un cuerpo geométrico", [["¿Curva?", "sí: redondo · no: poliedro", AZ], ["2 bases iguales", "prisma o cilindro", VE], ["1 base y vértice", "pirámide o cono", RO], ["Sin bases", "esfera", MO]])],
    ["Los cuerpos geométricos a nuestro alrededor", `<p>Los cuerpos geométricos están en todas partes. Los arquitectos y diseñadores eligen cada forma por algo:</p><ul><li>Las <b>cajas</b> son prismas porque se apilan sin dejar huecos y aprovechan el espacio.</li><li>Las <b>latas</b> son cilindros porque resisten bien la presión y son fáciles de sujetar.</li><li>Los <b>balones</b> son esferas para que boten y rueden igual en todas direcciones.</li><li>Los <b>tejados</b> de muchas torres son pirámides o conos para que resbale la lluvia y la nieve.</li><li>Los <b>edificios</b> suelen ser ortoedros, pero algunos tienen formas sorprendentes.</li></ul><p>Reto: busca en tu cocina un ejemplo de cada cuerpo geométrico. ¿Encuentras <mark>alguna pirámide</mark>?</p>`,
      P.filas("Objetos con forma de cuerpo geométrico", [["Caja de cereales", "prisma (ortoedro)", AZ], ["Lata de tomate", "cilindro", VE], ["Cucurucho", "cono", NA], ["Naranja", "esfera", MO]])],
  ],
  figura: ["Cuerpos geométricos", P.columnas("Resumen: poliedros, prismas, pirámides y cuerpos redondos", [["caras planas", "POLIEDROS", ["caras, aristas", "vértices"], AZ], ["2 bases", "PRISMAS", ["caras laterales", "rectangulares"], VE], ["1 base + cúspide", "PIRÁMIDES", ["caras laterales", "triangulares"], RO], ["superficie curva", "REDONDOS", ["cilindro, cono", "esfera"], MO]])],
  video: P.V("cueV", true),
  ejemplos: [
    ["¿Cuántas caras, aristas y vértices tiene un prisma triangular?", ["Caras: 2 bases + 3 laterales = 5.", "Aristas: 3 en cada base + 3 laterales = 9.", "Vértices: 3 en cada base = 6.", "Comprobación de Euler: 5 + 6 = 9 + 2 ✓"], "5 caras, 9 aristas y 6 vértices"],
    ["¿Cuántas caras, aristas y vértices tiene una pirámide cuadrangular?", ["Caras: 1 base + 4 triángulos = 5.", "Aristas: 4 en la base + 4 laterales = 8.", "Vértices: 4 de la base + la cúspide = 5."], "5 caras, 8 aristas y 5 vértices"],
    ["Clasifica: un dado, un cucurucho, una canica y un tetrabrik.", ["Dado: poliedro, cubo.", "Cucurucho: cuerpo redondo, cono.", "Canica: cuerpo redondo, esfera.", "Tetrabrik: poliedro, prisma (ortoedro)."], "cubo, cono, esfera y prisma"],
  ],
  errores: [
    "Confundir figuras planas (cuadrado, círculo) con cuerpos (cubo, esfera).",
    "Confundir prisma (dos bases) con pirámide (una base y cúspide).",
    "Pensar que el cilindro y el cono son poliedros porque tienen bases planas.",
    "Contar mal las aristas: cada arista es compartida por dos caras.",
    "Creer que hay muchos poliedros regulares: solo hay cinco.",
  ],
  ejercicios: [
    ["Escribe tres diferencias entre una figura plana y un cuerpo geométrico.", "El cuerpo tiene tres dimensiones, ocupa espacio y tiene caras o superficies; la figura plana solo tiene largo y ancho."],
    ["¿Cuántas caras, aristas y vértices tiene un cubo?", "6 caras, 12 aristas y 8 vértices."],
    ["¿Qué polígonos forman las caras laterales de un prisma? ¿Y las de una pirámide?", "Rectángulos (paralelogramos) y triángulos."],
    ["¿Cómo se llama un prisma cuyas bases son hexágonos?", "Prisma hexagonal."],
    ["Cuenta las caras, aristas y vértices de una pirámide pentagonal.", "6 caras, 10 aristas y 6 vértices."],
    ["Comprueba la regla de Euler en la pirámide pentagonal.", "6 + 6 = 10 + 2 ✓."],
    ["Escribe el nombre de los cinco poliedros regulares.", "Tetraedro, cubo, octaedro, dodecaedro e icosaedro."],
    ["¿Qué figuras forman el desarrollo plano de un cilindro?", "Dos círculos y un rectángulo."],
    ["¿Por qué la esfera no tiene caras ni bases?", "Porque toda su superficie es curva."],
    ["Escribe dos objetos con forma de cilindro y dos con forma de cono.", "Por ejemplo, una lata y un tubo; un cucurucho y un cono de tráfico."],
  ],
  quiz: [
    ["Un poliedro tiene todas sus caras…", ["planas", "curvas", "circulares"], "Polígonos."],
    ["El segmento donde se juntan dos caras es una…", ["arista", "vértice", "base"], "Arista."],
    ["Un cubo tiene… caras.", ["6", "8", "12"], "Seis cuadrados."],
    ["Un cubo tiene… aristas.", ["12", "8", "6"], "Doce."],
    ["Un prisma tiene… bases.", ["2", "1", "0"], "Dos iguales y paralelas."],
    ["Las caras laterales de una pirámide son…", ["triángulos", "rectángulos", "círculos"], "Se unen en la cúspide."],
    ["Una lata de refresco tiene forma de…", ["cilindro", "cono", "prisma"], "Dos bases circulares."],
    ["Un cucurucho tiene forma de…", ["cono", "cilindro", "pirámide"], "Una base y un vértice."],
    ["¿Cuántos poliedros regulares existen?", ["5", "6", "infinitos"], "Sólidos platónicos."],
    ["El desarrollo plano del cubo tiene…", ["6 cuadrados", "4 cuadrados", "6 triángulos"], "Una por cara."],
  ],
  examen: [
    ["¿Qué cuerpo NO tiene desarrollo plano?", ["la esfera", "el cono", "el cilindro"], "Toda curva."],
    ["Una pirámide hexagonal tiene… caras.", ["7", "6", "12"], "1 + 6."],
    ["Las pirámides de Egipto son pirámides…", ["cuadrangulares", "triangulares", "hexagonales"], "Base cuadrada."],
    ["El tetraedro tiene… caras triangulares.", ["4", "6", "8"], "Tetra = 4."],
  ],
  feynman: ["Qué diferencia hay entre una figura plana y un cuerpo geométrico", "Qué son las caras, aristas y vértices de un poliedro", "Qué diferencia hay entre un prisma y una pirámide", "Cuáles son los cuerpos redondos y cómo son", "Qué es el desarrollo plano de un cuerpo"],
  mapa: ["CUERPOS GEOMÉTRICOS", [["Poliedros", "caras · aristas · vértices", AZ], ["Prismas y pirámides", "2 bases · 1 base", VE], ["Regulares", "solo 5 platónicos", MO], ["Redondos", "cilindro · cono · esfera", NA]]],
  tarjetas: [
    ["Poliedro", "Cuerpo limitado por polígonos."],
    ["Caras, aristas, vértices", "Polígonos, segmentos y puntos del poliedro."],
    ["Prisma", "Dos bases iguales y paralelas; caras laterales rectangulares."],
    ["Pirámide", "Una base y caras triangulares que se unen en la cúspide."],
    ["Poliedros regulares", "Tetraedro, cubo, octaedro, dodecaedro, icosaedro."],
    ["Cilindro", "Dos bases circulares y superficie lateral curva."],
    ["Cono", "Una base circular y un vértice."],
    ["Esfera", "Superficie curva con todos sus puntos a igual distancia del centro."],
  ],
  familias: ["Buscad en la cocina objetos con forma de prisma, cilindro, cono y esfera.", "Desmontad una caja de cartón con cuidado para ver su desarrollo plano.", "Construid un cubo o una pirámide con palillos y plastilina y contad aristas y vértices.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido espacial: cuerpos geométricos; poliedros y sus elementos; prismas y pirámides; poliedros regulares; cuerpos redondos: cilindro, cono y esfera; desarrollos planos y relación de Euler",
  ideas: ["Construcción de poliedros con palillos y plastilina o con desarrollos de cartulina.", "Museo de cuerpos geométricos con envases traídos de casa.", "Tabla de Euler: contar caras, vértices y aristas y descubrir la regla."],
});

// ---------- Nivel libro (5º de Primaria) ----------
const { caja, rejilla } = P;
require("./_priL").libro(module.exports, {
  minutos: 80,
  objetivos: ["Contar caras, aristas y vértices de prismas y pirámides con una regla", "Reconocer cuerpos de revolución y dibujar las vistas de un cuerpo", "Aproximarse al volumen contando cubos"],
  lectura: { titulo: "El misterio de las pirámides", html: `<p>Hace unos 4 500 años, en Egipto, miles de trabajadores levantaron la <b>Gran Pirámide de Guiza</b>. Tardaron unos veinte años en colocar más de dos millones de bloques de piedra, algunos tan pesados como un elefante. Durante casi 4 000 años fue el edificio más alto del mundo.</p><p>Su forma no es casualidad. Una <b>pirámide</b> tiene una base ancha y se va estrechando hasta terminar en un punto, la <b>cúspide</b>. Así es muy estable: el peso se reparte hacia abajo y no se derrumba. Por eso ha resistido terremotos, tormentas de arena y el paso de los siglos.</p><p>Si miras a tu alrededor, descubrirás muchas más formas en tres dimensiones: la caja de cereales es un <b>prisma</b>, la lata de refresco un <b>cilindro</b>, el cucurucho de helado un <b>cono</b> y la pelota una <b>esfera</b>. A todas ellas las llamamos <b>cuerpos geométricos</b>.</p><p>En este tema aprenderás a reconocerlos, a contar sus elementos, a construirlos con desarrollos planos y a mirarlos desde distintos puntos de vista.</p>` },
  tras: {
    "Las pirámides": [
      ["Una regla para contar caras, aristas y vértices", `<p>No hace falta contar uno a uno los elementos de un prisma o una pirámide: si sabes cuántos lados tiene la <b>base</b>, puedes calcularlos. Llamemos <b>n</b> al número de lados de la base.</p><p><b>Prisma</b> (dos bases iguales):</p><ul><li>Caras: n + 2 (las laterales y las dos bases).</li><li>Aristas: n × 3 (las de arriba, las de abajo y las laterales).</li><li>Vértices: n × 2.</li></ul><p><b>Pirámide</b> (una base y una cúspide):</p><ul><li>Caras: n + 1.</li><li>Aristas: n × 2.</li><li>Vértices: n + 1.</li></ul><p>Ejemplo: un prisma hexagonal (n = 6) tiene 8 caras, 18 aristas y 12 vértices. Una pirámide hexagonal tiene 7 caras, 12 aristas y 7 vértices.</p><p>Comprueba siempre con la <b>fórmula de Euler</b>: caras + vértices = aristas + 2. En el prisma hexagonal: 8 + 12 = 18 + 2 ✓.</p>`,
        svg("Prisma hexagonal con ocho caras, dieciocho aristas y doce vértices, y pirámide hexagonal con siete caras, doce aristas y siete vértices", `${prisma(64, 130, 6, 42, 70, AZ)}${t(64, 32, "prisma (n = 6)", { s: 11, c: AZ })}${t(64, 166, "8 C · 18 A · 12 V", { s: 11, d: true })}${piramide(192, 130, 6, 42, 90, RO)}${t(192, 166, "7 C · 12 A · 7 V", { s: 11, d: true })}`)],
    ],
    "Los poliedros regulares": [
      ["Poliedros cóncavos y convexos", `<p>Los poliedros se pueden clasificar también por su forma:</p><ul><li>Un poliedro es <b>convexo</b> si, al apoyarlo sobre cualquiera de sus caras, se queda bien apoyado y estable. No tiene «entrantes». Los prismas, las pirámides y los cinco poliedros regulares son convexos.</li><li>Un poliedro es <b>cóncavo</b> si tiene alguna parte hundida: al apoyarlo sobre alguna cara, se tambalea o queda inclinado. Por ejemplo, un cuerpo con forma de letra L o de estrella.</li></ul><p>Una prueba sencilla: si puedes unir dos puntos cualesquiera del poliedro con un segmento que se quede siempre <b>dentro</b> del cuerpo, es convexo. Si alguna vez el segmento se «sale», es cóncavo.</p><p>Las piezas de construcción, los edificios modernos y algunas esculturas tienen formas cóncavas. Los dados, las cajas y los envases suelen ser convexos, porque así se apilan y se guardan mejor.</p>`,
        svg("Un poliedro convexo, un cubo, y otro cóncavo con forma de ele", `${cubo(30, 62, 56, AZ)}${t(70, 150, "convexo", { s: 12, c: AZ, d: true })}<path d="M150 120 H 230 V 90 H 180 V 40 H 150 Z" fill="${RO}" fill-opacity=".18" stroke="${RO}" stroke-width="2"/><path d="M150 40 l 18 -14 h 30 l -18 14 M180 90 l 18 -14 V 26 M230 90 l 18 -14 h -50 M230 120 l 18 -14 V 76" fill="none" stroke="${RO}" stroke-width="2"/>${t(196, 150, "cóncavo", { s: 12, c: RO, d: true })}`)],
    ],
    "Los cuerpos redondos": [
      ["Cuerpos de revolución: girar una figura", `<p>Los cuerpos redondos se llaman también <b>cuerpos de revolución</b> porque se pueden obtener haciendo <b>girar una figura plana</b> alrededor de una línea, llamada <b>eje de giro</b>.</p><ul><li>Si giras un <b>rectángulo</b> alrededor de uno de sus lados, obtienes un <b>cilindro</b>.</li><li>Si giras un <b>triángulo rectángulo</b> alrededor de uno de sus lados del ángulo recto, obtienes un <b>cono</b>.</li><li>Si giras un <b>semicírculo</b> alrededor de su diámetro, obtienes una <b>esfera</b>.</li></ul><p>Puedes comprobarlo con un experimento: pega una figura de cartulina a un lápiz o a una pajita y hazla girar muy rápido entre las manos. ¡Verás aparecer el cuerpo en el aire!</p><p>Los alfareros usan esta idea en el <b>torno</b>: el barro gira y, al darle forma con las manos, salen jarrones, cuencos y vasijas, que son cuerpos de revolución. También los torneros que hacen patas de mesas o peones de ajedrez.</p><p>Fíjate en que los cuerpos de revolución no tienen aristas ni vértices como los poliedros: sus superficies son curvas, y por eso pueden rodar con facilidad por una mesa o por el suelo inclinado. El cono es especial, porque tiene un punto en la punta llamado <b>vértice</b>, aunque no tenga aristas.</p>`,
        svg("Cuerpos de revolución: un rectángulo que gira da un cilindro y un triángulo rectángulo da un cono", `<path d="M40 30 V 140" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 3"/><rect x="40" y="50" width="34" height="80" fill="${VE}" fill-opacity=".35" stroke="${VE}" stroke-width="2"/>${P.flecha(84, 90, 104, 90)}${cilindro(140, 130, 26, 80, VE)}<path d="M180 30 V 140" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 3"/><path d="M180 50 L 180 130 L 212 130 Z" fill="${NA}" fill-opacity=".35" stroke="${NA}" stroke-width="2"/>${t(130, 164, "rectángulo → cilindro · triángulo → cono", { s: 10 })}`)],
    ],
    "Los desarrollos planos": [
      ["Las vistas de un cuerpo", `<p>Un mismo cuerpo se ve diferente según desde dónde lo miremos. Los arquitectos y los ingenieros dibujan siempre tres <b>vistas</b>:</p><ul><li><b>Alzado</b>: lo que se ve de <b>frente</b>.</li><li><b>Perfil</b>: lo que se ve de <b>lado</b>.</li><li><b>Planta</b>: lo que se ve desde <b>arriba</b>.</li></ul><p>Por ejemplo, un <b>cilindro</b> de pie se ve como un rectángulo de frente y de lado, pero como un círculo desde arriba. Un <b>cono</b> se ve como un triángulo de frente y como un círculo con un punto en el centro desde arriba. Una <b>esfera</b> se ve siempre como un círculo, la mires desde donde la mires.</p><p>Con construcciones de cubitos se practica muy bien: monta una figura con cubos encajables y dibuja en papel cuadriculado su alzado, su perfil y su planta. Después, pide a un compañero que la construya solo mirando tus tres dibujos. ¡Así trabajan los arquitectos!</p>`,
        svg("Vistas de un cilindro: de frente y de lado es un rectángulo, desde arriba es un círculo", `${cilindro(54, 136, 30, 90, VE)}${t(54, 164, "cilindro", { s: 11 })}<rect x="118" y="46" width="44" height="60" fill="${VE}" fill-opacity=".25" stroke="${VE}" stroke-width="2"/>${t(140, 124, "alzado", { s: 11 })}${t(140, 138, "y perfil", { s: 11 })}<circle cx="214" cy="76" r="24" fill="${VE}" fill-opacity=".25" stroke="${VE}" stroke-width="2"/>${t(214, 124, "planta", { s: 11 })}${t(214, 138, "(desde arriba)", { s: 10 })}`)],
    ],
  },
  final: [
    ["¿Cuánto cabe dentro? Una primera idea del volumen", `<p>Los cuerpos geométricos ocupan un lugar en el espacio. La cantidad de espacio que ocupan se llama <b>volumen</b>. Una forma sencilla de medirlo es contar cuántos <b>cubitos</b> iguales caben dentro.</p><p>Imagina una caja con forma de prisma rectangular. Si en el fondo caben 4 cubitos a lo largo y 3 a lo ancho, en la primera capa hay 4 × 3 = 12 cubitos. Si caben 2 capas, en total hay 12 × 2 = <b>24 cubitos</b>.</p><p>Es decir, el volumen de un prisma rectangular se calcula <b>multiplicando sus tres medidas</b>: largo × ancho × alto.</p><p>Esto explica por qué casi todas las cajas y envases tienen forma de prisma: se apilan sin dejar huecos y aprovechan muy bien el espacio en camiones, almacenes y estanterías. Las latas cilíndricas, en cambio, dejan huecos entre ellas al juntarlas.</p><p>En 6º de Primaria aprenderás las unidades de volumen, como el centímetro cúbico, y descubrirás su sorprendente relación con el litro y con la capacidad de los envases./p>`,
      svg("Una caja con cuatro por tres cubitos en cada capa y dos capas: veinticuatro cubitos", `${[0, 1].map((k) => [...Array(12)].map((_, i) => { const x = 30 + (i % 4) * 24 + Math.floor(i / 4) * 10, y = 110 - k * 24 - Math.floor(i / 4) * 10; return `<rect x="${x}" y="${y}" width="24" height="24" fill="${[AZ, MO][k]}" fill-opacity=".3" stroke="${[AZ, MO][k]}" stroke-width="1.3"/>`; }).join("")).join("")}${t(206, 60, "4 × 3 = 12", { s: 13 })}${t(206, 80, "por capa", { s: 11 })}${t(206, 112, "× 2 capas", { s: 13 })}${t(206, 142, "= 24", { s: 18, d: true, c: MO })}`)],
  ],
  ejemplos: [
    ["¿Cuántas caras, aristas y vértices tiene una pirámide octogonal?", ["La base tiene n = 8 lados.", "Caras: 8 + 1 = 9; aristas: 8 × 2 = 16; vértices: 8 + 1 = 9.", "Euler: 9 + 9 = 16 + 2 ✓."], "9 caras, 16 aristas y 9 vértices"],
    ["¿Cuántos cubitos caben en una caja de 5 de largo, 3 de ancho y 4 de alto?", ["Una capa: 5 × 3 = 15 cubitos.", "Hay 4 capas.", "15 × 4 = 60 cubitos."], "60 cubitos"],
  ],
  errores: ["Confundir las vistas: la planta es lo que se ve desde arriba, no de frente."],
  nivelesBase: "bbbmbmbmma",
  ejercicios: [
    ["b", "¿Qué figura plana tienes que girar para obtener un cilindro?", "Un rectángulo, alrededor de uno de sus lados."],
    ["b", "¿Cómo se llaman las tres vistas de un cuerpo?", "Alzado (de frente), perfil (de lado) y planta (desde arriba)."],
    ["b", "¿Cómo se ve una esfera desde arriba? ¿Y de frente?", "Como un círculo en los dos casos."],
    ["b", "¿Es convexo o cóncavo un dado? ¿Por qué?", "Convexo: se apoya bien sobre cualquier cara y no tiene entrantes."],
    ["m", "Calcula caras, aristas y vértices de un prisma pentagonal sin dibujarlo.", "Caras 5 + 2 = 7; aristas 5 × 3 = 15; vértices 5 × 2 = 10."],
    ["m", "Comprueba la fórmula de Euler en una pirámide cuadrangular.", "Caras 5, vértices 5, aristas 8: 5 + 5 = 8 + 2 ✓."],
    ["m", "¿Qué cuerpo se obtiene al girar un semicírculo alrededor de su diámetro?", "Una esfera."],
    ["m", "Dibuja la planta, el alzado y el perfil de un cono apoyado en su base.", "Planta: un círculo con un punto en el centro. Alzado y perfil: un triángulo isósceles."],
    ["a", "Un prisma tiene 24 aristas. ¿Qué polígono es su base?", "n × 3 = 24 → n = 8: un octógono."],
    ["a", "Una pirámide tiene 11 caras. ¿Cuántos lados tiene su base? ¿Cuántas aristas?", "n + 1 = 11 → n = 10 (decágono). Aristas: 20."],
    ["a", "¿Cuántos cubitos de 1 cm caben en una caja de 6 cm × 4 cm × 3 cm?", "6 × 4 × 3 = 72 cubitos."],
    ["a", "¿Por qué los envases suelen ser prismas y no cilindros?", "Porque los prismas se apilan sin dejar huecos y aprovechan mejor el espacio."],
    ["a", "Construye con 6 cubitos una figura y dibuja sus tres vistas en papel cuadriculado. Pide a un compañero que la reproduzca.", "Respuesta abierta. Se valora que las tres vistas correspondan a la figura."],
    ["m", "¿Cuántos vértices tiene un prisma triangular? ¿Y una pirámide triangular?", "Prisma: 6. Pirámide: 4."],
    ["a", "Dos cajas: A de 4 × 4 × 4 cubos y B de 8 × 4 × 2. ¿Cuál tiene más volumen?", "A: 64 cubos. B: 64 cubos. Tienen el mismo volumen."],
    ["b", "Escribe un objeto hecho en un torno de alfarero.", "Por ejemplo, un jarrón, un cuenco o una vasija."],
  ],
  quiz: [
    ["Un prisma con base de n lados tiene…", ["n × 3 aristas", "n + 1 aristas", "n × 2 aristas"], "Las de arriba, las de abajo y las laterales."],
    ["Si giras un triángulo rectángulo sobre un lado del ángulo recto, obtienes…", ["Un cono", "Un cilindro", "Una esfera"], "Es un cuerpo de revolución."],
    ["La vista desde arriba de un cuerpo se llama…", ["Planta", "Alzado", "Perfil"], "El alzado es de frente y el perfil, de lado."],
    ["Una caja de 3 × 2 × 2 cubitos tiene…", ["12 cubitos", "7 cubitos", "10 cubitos"], "Largo × ancho × alto."],
    ["Un poliedro con alguna parte hundida es…", ["Cóncavo", "Convexo", "Regular"], "No se apoya bien en todas sus caras."],
  ],
  examen: [
    ["Una pirámide hexagonal tiene…", ["7 vértices", "12 vértices", "6 vértices"], "n + 1 = 7."],
    ["La Gran Pirámide de Guiza está en…", ["Egipto", "Grecia", "México"], "Tiene unos 4 500 años."],
    ["El alzado de un cilindro de pie es…", ["Un rectángulo", "Un círculo", "Un triángulo"], "De frente se ve rectangular."],
    ["El volumen es…", ["El espacio que ocupa un cuerpo", "La suma de sus aristas", "El área de su base"], "Se puede medir contando cubitos."],
  ],
  tarjetas: [
    ["Elementos del prisma", "Caras n + 2, aristas 3n, vértices 2n."],
    ["Elementos de la pirámide", "Caras n + 1, aristas 2n, vértices n + 1."],
    ["Cuerpos de revolución", "Rectángulo → cilindro; triángulo → cono; semicírculo → esfera."],
    ["Vistas", "Alzado (frente), perfil (lado) y planta (arriba)."],
  ],
  glosario: [
    ["Cuerpo geométrico", "Figura de tres dimensiones que ocupa un lugar en el espacio."],
    ["Poliedro", "Cuerpo limitado solo por caras planas que son polígonos."],
    ["Cara", "Cada polígono que limita un poliedro."],
    ["Arista", "Segmento donde se unen dos caras."],
    ["Vértice", "Punto donde se unen varias aristas."],
    ["Prisma", "Poliedro con dos bases iguales y paralelas y caras laterales rectangulares."],
    ["Pirámide", "Poliedro con una base y caras laterales triangulares que se unen en la cúspide."],
    ["Cuerpo de revolución", "Cuerpo que se obtiene al girar una figura plana alrededor de un eje."],
    ["Desarrollo plano", "Figura plana que, al doblarse, forma un cuerpo geométrico."],
    ["Alzado", "Vista de frente de un cuerpo."],
    ["Planta", "Vista desde arriba de un cuerpo."],
    ["Volumen", "Espacio que ocupa un cuerpo."],
  ],
  situacion: {
    titulo: "Diseñamos un envase",
    reto: "Una empresa de galletas nos pide diseñar un envase original que se pueda apilar bien en las estanterías del supermercado.",
    pasos: ["Analizad envases reales: qué cuerpo geométrico son y cuántas caras, aristas y vértices tienen.", "Elegid un cuerpo (prisma, pirámide, cilindro…) y dibujad su desarrollo plano en cartulina con regla y compás.", "Recortad, doblad y pegad el envase. Dibujad sus tres vistas.", "Comprobad cuántas galletas (o cubitos) caben dentro y si los envases se apilan sin huecos. Presentad el diseño."],
    producto: "Un envase de cartulina con su desarrollo plano, sus vistas y una ficha técnica.",
    evaluacion: ["Identifica cuerpos geométricos y cuenta sus elementos.", "Construye correctamente un desarrollo plano.", "Dibuja las vistas de un cuerpo.", "Justifica la elección del diseño con argumentos geométricos."],
  },
});
