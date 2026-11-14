// Matemáticas 2º ESO · Semejanza. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, baraja, psvg, pvid, C, RD, DECRET, REV } = require("./_eso2L2");

const razon = lienzo("Dos rectángulos semejantes con razón de semejanza 2: los lados del grande miden el doble", `
  <rect x="24" y="70" width="60" height="40" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.4"/>
  <rect x="120" y="30" width="120" height="80" fill="var(--red)" fill-opacity=".15" stroke="var(--red)" stroke-width="2.4"/>
  ${tx(54, 126, "3", { fs: 12, c: "var(--pen)" })}${tx(16, 94, "2", { fs: 12, c: "var(--pen)", a: "end" })}${tx(180, 126, "6", { fs: 12, c: "var(--red)" })}${tx(112, 74, "4", { fs: 12, c: "var(--red)", a: "end" })}
  ${tx(130, 154, "6/3 = 4/2 = 2 → k = 2", { fs: 15, fam: D })}`, 170);

const ampliar = comparar("Según la razón de semejanza, la figura se amplía, se reduce o queda igual", [
  ["k > 1", ["ampliación", "k = 3: triple"], "var(--leaf)"],
  ["k < 1", ["reducción", "k = 0,5: mitad"], "var(--red)"],
  ["k = 1", ["figuras", "iguales"], "var(--pen)"],
], "Razón de semejanza");

const proporcional = pasos("Calcular un lado desconocido en dos figuras semejantes con una proporción", ["Lados homólogos: 4 ↔ 10 y 6 ↔ x", "k = 10/4 = 2,5", "x = 6 · 2,5", "x = 15"], "Lado desconocido");

const posTales = lienzo("Triángulos en posición de Tales: una paralela a BC forma el triángulo ADE semejante a ABC", `
  <polygon points="130,22 40,150 220,150" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2.2"/>
  <polygon points="130,22 94,73 166,73" fill="var(--red)" fill-opacity=".18" stroke="var(--red)" stroke-width="2.2"/>
  ${tx(130, 16, "A", { fs: 12 })}${tx(86, 72, "D", { fs: 12, a: "end", c: "var(--red)" })}${tx(174, 72, "E", { fs: 12, a: "start", c: "var(--red)" })}${tx(34, 158, "B", { fs: 12, a: "end" })}${tx(226, 158, "C", { fs: 12, a: "start" })}
  ${tx(130, 68, "DE ∥ BC", { fs: 10.5, c: "var(--red)" })}${tx(130, 172, "AD/AB = AE/AC = DE/BC", { fs: 13, fam: D })}`, 182);

const criterios = cajas("Criterios de semejanza de triángulos", [
  ["AA", ["dos ángulos", "iguales"], "var(--pen)"],
  ["LLL", ["tres lados", "proporcionales"], "var(--leaf)"],
  ["LAL", ["dos lados prop.", "y ángulo igual"], "var(--sun)"],
  ["Rectángulos", ["un ángulo agudo", "igual basta"], "var(--red)"],
], "Criterios");

const sombra = lienzo("Medir la altura de un árbol con su sombra y la de un palo: triángulos semejantes", `
  <path d="M20 150 H240" stroke="var(--muted)" stroke-width="2"/>
  <path d="M70 150 V40" stroke="var(--leaf)" stroke-width="5"/><circle cx="70" cy="40" r="18" fill="var(--leaf)" fill-opacity=".5"/>
  <path d="M70 40 L190 150" stroke="var(--sun)" stroke-width="1.6" stroke-dasharray="4 3"/>
  <path d="M206 150 V128" stroke="var(--pen)" stroke-width="4"/><path d="M206 128 L230 150" stroke="var(--sun)" stroke-width="1.6" stroke-dasharray="4 3"/>
  ${tx(130, 166, "sombra árbol 12 m", { fs: 10.5, c: "var(--muted)", max: 110 })}${tx(52, 100, "h", { fs: 15, fam: D, c: "var(--leaf)", a: "end" })}${tx(214, 122, "1 m", { fs: 10, c: "var(--pen)", a: "start", max: 30 })}${tx(222, 166, "1,5 m", { fs: 10, c: "var(--muted)", max: 40 })}
  ${tx(170, 30, "h/12 = 1/1,5 → h = 8 m", { fs: 12.5, c: "var(--red)", max: 150 })}`, 176);

const escala = formula("Escala de un plano o mapa: medida en el dibujo dividida entre medida real, en las mismas unidades", "E = 1 : n", ["1 cm en el plano = n cm reales", "1 : 50 000 → 1 cm = 500 m", "4,2 cm → 4,2 · 500 = 2100 m"], "var(--inf)");

const escalaGraf = lienzo("Escala gráfica: una barra dividida que indica la distancia real que representa", `
  ${[0, 1, 2, 3, 4].map((i) => `<rect x="${30 + i * 40}" y="60" width="40" height="14" fill="${i % 2 ? "var(--card)" : "var(--ink)"}" stroke="var(--ink)" stroke-width="1.4"/>${tx(30 + i * 40, 92, i * 5, { fs: 11, c: "var(--muted)", max: 30 })}`).join("")}${tx(230, 92, "25 km", { fs: 11, c: "var(--muted)", max: 40 })}
  ${tx(130, 40, "Escala gráfica", { fs: 13, c: "var(--muted)" })}${tx(130, 126, "cada tramo de 1 cm = 5 km", { fs: 13 })}${tx(130, 150, "no cambia al ampliar o reducir el mapa", { fs: 11, c: "var(--muted)" })}`, 166);

const areas = comparar("Si la razón de semejanza es k, las áreas están en razón k al cuadrado y los volúmenes en razón k al cubo", [
  ["Longitudes", ["· k", "k = 2 → doble"], "var(--pen)"],
  ["Áreas", ["· k²", "k = 2 → cuádruple"], "var(--leaf)"],
  ["Volúmenes", ["· k³", "k = 2 → óctuple"], "var(--red)"],
], "k, k², k³");

const homotecia = lienzo("Homotecia de centro O y razón 2: cada punto se aleja del centro el doble", `
  <circle cx="30" cy="140" r="4" fill="var(--ink)"/>${tx(22, 154, "O", { fs: 12 })}
  <polygon points="80,120 110,120 90,95" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>
  <polygon points="130,100 190,100 150,50" fill="var(--red)" fill-opacity=".15" stroke="var(--red)" stroke-width="2"/>
  ${[[130, 100], [190, 100], [150, 50]].map(([x, y]) => `<path d="M30 140 L${x} ${y}" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>`).join("")}
  ${tx(96, 136, "ABC", { fs: 11, c: "var(--pen)" })}${tx(212, 80, "A'B'C'", { fs: 11, c: "var(--red)", a: "start", max: 44 })}
  ${tx(150, 160, "OA' = 2 · OA", { fs: 13, fam: D })}`, 172);

const aplicaciones = cajas("La semejanza en la vida real", [
  ["Maquetas", ["trenes 1 : 87", "edificios 1 : 200"], "var(--pen)"],
  ["Fotografía", ["ampliar sin", "deformar"], "var(--leaf)"],
  ["Cartografía", ["mapas", "y planos"], "var(--sun)"],
  ["Formatos A", ["A4 → A3", "razón √2"], "var(--red)"],
], "Aplicaciones");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Semejanza",
  minutos: 100,
  objetivos: [
    "Reconocer figuras semejantes y calcular la razón de semejanza",
    "Aplicar el teorema de Tales y reconocer triángulos en posición de Tales",
    "Utilizar los criterios de semejanza de triángulos",
    "Interpretar y usar escalas numéricas y gráficas en planos y mapas",
    "Relacionar la razón de semejanza con la razón de áreas y volúmenes",
  ],
  claves: ["figuras semejantes", "razón de semejanza", "lados homólogos", "teorema de Tales", "criterios de semejanza", "escala", "homotecia"],
  pregunta: {
    texto: "¿Cómo puedes medir la altura de un árbol sin subirte a él, con solo un palo y una cinta métrica?",
    respuesta: "Clava un palo vertical y mide su sombra y la del árbol a la misma hora. Los dos triángulos son semejantes, así que altura del árbol / su sombra = altura del palo / su sombra. Si el palo de 1 m da 1,5 m de sombra y el árbol 12 m, el árbol mide <mark>8 m</mark>.",
  },
  lectura: {
    titulo: "Tales y la Gran Pirámide",
    html: `<p>Cuenta el historiador griego Plutarco que, hacia el año 600 a. C., el sabio <b>Tales de Mileto</b> viajó a Egipto. Los sacerdotes, orgullosos de sus pirámides, le retaron a medir la altura de la Gran Pirámide de Keops, algo que nadie sabía hacer sin subir a la cima.</p><p>Tales clavó su bastón vertical en la arena y esperó. Razonó así: los rayos del Sol llegan paralelos, así que el bastón y su sombra forman un triángulo con la misma forma que el que forman la pirámide y la suya. Cuando la sombra del bastón midiera lo mismo que el bastón, la sombra de la pirámide mediría lo mismo que la pirámide. Midió esa sombra (sumándole la mitad del lado de la base) y obtuvo la altura. Los sacerdotes quedaron asombrados.</p><p>La idea de Tales es la de la <b>semejanza</b>: figuras con la misma forma y distinto tamaño, cuyas medidas son proporcionales. Con ella se dibujan mapas y planos, se construyen maquetas, se amplían fotografías o se calculan distancias inaccesibles, como la anchura de un río o la altura de una montaña.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Figuras semejantes</h3><p>Dos figuras son <b>semejantes</b> si tienen la <b>misma forma</b> aunque distinto tamaño. Matemáticamente, esto significa que cumplen dos condiciones:</p><ul><li>Sus <b>ángulos correspondientes son iguales</b>.</li><li>Sus <b>lados correspondientes son proporcionales</b>.</li></ul><p>Los lados y ángulos que se corresponden se llaman <b>homólogos</b>. Una fotografía y su ampliación son semejantes: todo crece en la misma proporción, sin deformarse. En cambio, si estiramos una foto solo a lo ancho, deja de ser semejante.</p><p>Todos los cuadrados son semejantes entre sí, igual que todos los círculos y todos los triángulos equiláteros. Pero no todos los rectángulos lo son: uno de 2 × 3 y otro de 2 × 4 tienen los mismos ángulos, pero sus lados no son proporcionales.</p>`, svg: psvg("semejanza", 0), video: pvid("semejanza", 0) },
    { html: `<h3>1.2 La razón de semejanza</h3><p>La <b>razón de semejanza</b> k es el cociente entre dos lados homólogos: <mark>k = lado de la figura 2 / lado homólogo de la figura 1</mark>. Si un rectángulo de 3 × 2 cm se amplía a 6 × 4 cm, k = 6/3 = 4/2 = 2.</p><p>Según su valor:</p><ul><li>Si <b>k &gt; 1</b>, la segunda figura es una <b>ampliación</b>.</li><li>Si <b>k &lt; 1</b>, es una <b>reducción</b>. k = 0,5 significa que todo mide la mitad.</li><li>Si <b>k = 1</b>, las figuras son iguales (congruentes).</li></ul><p>Para comprobar si dos polígonos son semejantes, se calculan los cocientes de todos los pares de lados homólogos: deben dar el mismo número. Un triángulo de lados 3, 4, 5 y otro de lados 6, 8, 10 son semejantes con k = 2.</p><p>Si se conoce k, los perímetros también están en razón k.</p>`, svg: razon },
    { html: `<h3>1.3 Calcular medidas en figuras semejantes</h3><p>Si dos figuras son semejantes, se pueden calcular lados desconocidos con una <b>proporción</b> o con la razón de semejanza.</p><p>Ejemplo: dos triángulos semejantes; un lado de 4 cm del primero corresponde a uno de 10 cm del segundo. ¿Cuánto mide en el segundo el lado homólogo de uno de 6 cm?</p><ul><li>Con la razón: k = 10/4 = 2,5 → x = 6 · 2,5 = <mark>15 cm</mark>.</li><li>Con una proporción: 4/10 = 6/x → 4x = 60 → x = 15 cm.</li></ul><p>Lo más importante es emparejar bien los lados homólogos: el lado más corto con el más corto, el mayor con el mayor, y los que están entre los mismos ángulos. Si las figuras están giradas, conviene marcar los ángulos iguales antes de calcular.</p>`, svg: proporcional },
    { html: `<h3>1.4 Ampliaciones y reducciones</h3><p>Cuando ampliamos o reducimos una figura con razón k, todas sus <b>longitudes</b> (lados, alturas, diagonales, perímetro) se multiplican por k, y los <b>ángulos no cambian</b>.</p><p>Esta propiedad se usa a diario: en una fotocopiadora, «ampliar al 141 %» significa k = 1,41, y «reducir al 70 %», k = 0,7. En una pantalla, al hacer zoom con dos dedos, la imagen se amplía de forma semejante.</p><p>Una aplicación curiosa son los <b>formatos de papel</b> DIN A: al doblar una hoja A3 por la mitad se obtiene un A4 semejante al A3. Para que esto ocurra, la razón entre el lado largo y el corto tiene que ser √2 ≈ 1,41. Por eso un A4 mide 29,7 × 21 cm (29,7 / 21 ≈ 1,41).</p><p>Si una figura se amplía y después se reduce, las razones se multiplican: k = 2 y luego k = 0,5 dan una figura igual a la original.</p>`, svg: ampliar },
    { html: `<h3>2.1 El teorema de Tales</h3><p>El <b>teorema de Tales</b> dice: si dos rectas cualesquiera se cortan por varias rectas <b>paralelas</b>, los segmentos que determinan en una de ellas son <b>proporcionales</b> a los segmentos correspondientes en la otra.</p><p>Si las paralelas cortan a una recta en segmentos a y b, y a la otra en a' y b', entonces <mark>a/b = a'/b'</mark>, y también a/a' = b/b'.</p><p>Ejemplo: en una recta, las paralelas determinan segmentos de 3 cm y 5 cm; en la otra, el primero mide 4,5 cm. ¿Cuánto mide el segundo? 3/5 = 4,5/x → x = 7,5 cm.</p><p>Una aplicación práctica es <b>dividir un segmento en partes iguales</b> sin medir: se traza una semirrecta auxiliar, se marcan en ella partes iguales con el compás y se trazan paralelas.</p>`, svg: psvg("semejanza", 2), video: pvid("semejanza", 2) },
    { html: `<h3>2.2 Triángulos en posición de Tales</h3><p>Si en un triángulo trazamos una recta <b>paralela</b> a uno de sus lados, se forma un triángulo pequeño que comparte un vértice con el grande. Decimos que los dos triángulos están en <b>posición de Tales</b>, y son <b>semejantes</b>: tienen un ángulo común y los otros dos iguales porque las rectas son paralelas.</p><p>Esto permite calcular longitudes: si en el triángulo ABC trazamos una paralela a BC que corta AB en D y AC en E, entonces <mark>AD/AB = AE/AC = DE/BC</mark>.</p><p>Ejemplo: AB = 10, AD = 4, BC = 15. DE = 15 · 4/10 = 6.</p><p>Cuidado con un error frecuente: AD/DB no es igual a DE/BC. La proporción con el lado paralelo usa los lados <b>completos</b> desde el vértice común (AD y AB), no los trocitos.</p>`, svg: posTales },
    { html: `<h3>2.3 Criterios de semejanza de triángulos</h3><p>Para saber si dos triángulos son semejantes no hace falta comprobar los tres ángulos y los tres lados. Basta con uno de estos <b>criterios</b>:</p><ul><li><b>Ángulo-ángulo (AA)</b>: tienen <b>dos ángulos iguales</b>. El tercero también lo será, porque los ángulos suman 180°.</li><li><b>Lado-lado-lado (LLL)</b>: tienen los <b>tres lados proporcionales</b>. 4, 6, 8 y 6, 9, 12: 6/4 = 9/6 = 12/8 = 1,5.</li><li><b>Lado-ángulo-lado (LAL)</b>: tienen <b>dos lados proporcionales</b> y el <b>ángulo comprendido</b> entre ellos <b>igual</b>.</li></ul><p>En los <b>triángulos rectángulos</b> es aún más sencillo: basta con que tengan <b>un ángulo agudo igual</b>, porque ya comparten el recto. También son semejantes si los catetos son proporcionales.</p><p>Los criterios son muy útiles porque los ángulos suelen ser fáciles de reconocer (paralelas, ángulos opuestos por el vértice, ángulos rectos).</p>`, svg: criterios, video: pvid("semejanza", 4) },
    { html: `<h3>2.4 Medir lo que no se puede medir</h3><p>La semejanza de triángulos permite calcular <b>distancias inaccesibles</b>:</p><ul><li><b>Alturas con sombras</b>: a una misma hora, los rayos del Sol son paralelos, así que un objeto vertical y su sombra forman triángulos semejantes. Si un palo de 1 m da una sombra de 1,5 m y un árbol da 12 m, su altura es h = 12 · 1/1,5 = <mark>8 m</mark>.</li><li><b>Con un espejo</b>: se coloca un espejo en el suelo y nos alejamos hasta ver la copa del árbol reflejada. Como los ángulos de incidencia y reflexión son iguales, se forman dos triángulos semejantes.</li><li><b>Anchura de un río</b>: con estacas y triángulos en posición de Tales en la orilla accesible.</li></ul><p>Estos métodos se usaron durante siglos en topografía y navegación, antes de los instrumentos electrónicos.</p>`, svg: sombra },
    { html: `<h3>3.1 Escalas numéricas</h3><p>Un plano o un mapa es una <b>reducción semejante</b> de la realidad. La <b>escala</b> es la razón entre una medida en el dibujo y la medida real correspondiente, en las mismas unidades: <mark>E = 1 : n</mark> significa que 1 cm del plano representa n cm reales.</p><ul><li>Plano de una casa a escala 1 : 100: 1 cm del plano son 100 cm = 1 m.</li><li>Mapa a escala 1 : 50 000: 1 cm son 50 000 cm = 500 m.</li></ul><p>Para pasar del mapa a la realidad se <b>multiplica</b> por n; para pasar de la realidad al mapa se <b>divide</b>. En un mapa 1 : 50 000, 4,2 cm son 4,2 · 50 000 = 210 000 cm = 2,1 km. Y 3 km reales son 300 000 cm : 50 000 = 6 cm en el mapa.</p><p>También hay escalas de <b>ampliación</b>, como 10 : 1 en el dibujo de una pieza pequeña o de un insecto.</p>`, svg: escala },
    { html: `<h3>3.2 Escala gráfica y cálculo de escalas</h3><p>La <b>escala gráfica</b> es una barra dividida en tramos que indica la distancia real que representa cada uno. Su gran ventaja es que, si el mapa se amplía o reduce (por ejemplo, al imprimirlo o verlo en una pantalla), la barra cambia de tamaño con él y sigue siendo válida; la escala numérica, en cambio, deja de ser correcta.</p><p>Para usarla, se mide la distancia en el mapa con una regla o un papel y se compara con la barra.</p><p>A veces hay que <b>calcular la escala</b>: si dos ciudades separadas 60 km aparecen a 12 cm en un mapa, la escala es 12 cm : 6 000 000 cm = 1 : 500 000.</p><p>Error frecuente: no pasar las dos medidas a la misma unidad. 12 cm : 60 km no es 1 : 5, porque los km y los cm son unidades distintas.</p>`, svg: escalaGraf },
    { html: `<h3>3.3 Áreas y volúmenes de figuras semejantes</h3><p>Si dos figuras son semejantes con razón k:</p><ul><li>La razón de sus <b>longitudes</b> (y perímetros) es <b>k</b>.</li><li>La razón de sus <b>áreas</b> es <mark>k²</mark>.</li><li>La razón de sus <b>volúmenes</b> (en cuerpos) es <mark>k³</mark>.</li></ul><p>¿Por qué? Un cuadrado de lado 1 tiene área 1; si duplicamos el lado (k = 2), el nuevo cuadrado de lado 2 tiene área 4 = 2²: caben 4 cuadrados pequeños. Un cubo de arista 2 tiene volumen 8 = 2³: caben 8 cubitos.</p><p>Esto tiene consecuencias sorprendentes: una pizza de 40 cm de diámetro tiene 4 veces más superficie que una de 20 cm, aunque su diámetro solo es el doble. Y en un plano 1 : 100, una habitación de 12 cm² en el plano mide 12 · 100² = 120 000 cm² = 12 m² en la realidad.</p>`, svg: areas },
    { html: `<h3>3.4 Homotecias</h3><p>Una <b>homotecia</b> es una transformación geométrica que amplía o reduce una figura desde un punto fijo O llamado <b>centro</b>, con una razón k. Cada punto A se transforma en un punto A' situado en la semirrecta OA de modo que <mark>OA' = k · OA</mark>.</p><p>La figura obtenida es semejante a la original, con razón k, y además sus lados son <b>paralelos</b> a los originales. Por eso las figuras homotéticas están siempre en «posición de Tales».</p><p>El ejemplo más claro es un proyector: la bombilla es el centro de la homotecia, la diapositiva es la figura original y la imagen en la pantalla es su homotética ampliada. Cuanto más lejos está la pantalla, mayor es k.</p><p>Las homotecias permiten construir ampliaciones exactas con regla, y los programas de diseño las usan cuando se escala una imagen manteniendo las proporciones.</p>`, svg: homotecia },
    { html: `<h3>3.5 Semejanza en la vida real</h3><p>La semejanza aparece en muchos ámbitos:</p><ul><li><b>Maquetas</b>: los trenes en miniatura usan escalas como 1 : 87 (escala H0); los arquitectos construyen maquetas 1 : 200 de sus edificios.</li><li><b>Cartografía</b>: mapas topográficos 1 : 25 000 o 1 : 50 000 para excursionistas; mapas de carreteras 1 : 400 000.</li><li><b>Fotografía y diseño</b>: ampliar una foto sin deformarla exige mantener la razón entre ancho y alto.</li><li><b>Arte</b>: los pintores del Renacimiento usaban la perspectiva y cuadrículas para copiar a escala.</li><li><b>Biología</b>: por la ley de k² y k³, un animal el doble de grande pesa 8 veces más pero sus huesos solo tienen 4 veces más sección; por eso los animales grandes tienen patas proporcionalmente más gruesas.</li></ul><p>Fíjate en que «parecido» no siempre es «semejante»: un niño no es una reducción semejante de un adulto.</p>`, svg: aplicaciones },
  ],
  ejemplos: [
    { enunciado: "¿Son semejantes los triángulos de lados 6, 8, 12 y 9, 12, 18?", pasos: ["9/6 = 1,5; 12/8 = 1,5; 18/12 = 1,5.", "Los tres cocientes coinciden (criterio LLL)."], resultado: "Sí, con razón k = 1,5." },
    { enunciado: "Un rectángulo de 5 × 8 cm se amplía con k = 3. Calcula las dimensiones, el perímetro y el área del nuevo.", pasos: ["Lados: 15 × 24 cm.", "Perímetro: 26 · 3 = 78 cm.", "Área: 40 · 3² = 360 cm²."], resultado: "15 × 24 cm; 78 cm; 360 cm²." },
    { enunciado: "Tres paralelas cortan a dos rectas. En una determinan segmentos de 4 y 6 cm; en la otra, el primero mide 5 cm. Calcula el segundo.", pasos: ["Teorema de Tales: 4/6 = 5/x.", "4x = 30 → x = 7,5."], resultado: "7,5 cm." },
    { enunciado: "Un edificio proyecta una sombra de 18 m y, a la vez, una persona de 1,60 m proyecta una sombra de 1,20 m. ¿Cuál es la altura del edificio?", pasos: ["h/18 = 1,60/1,20.", "h = 18 · 1,60 / 1,20 = 24."], resultado: "24 m." },
    { enunciado: "En un mapa 1 : 200 000, dos pueblos están a 7,5 cm. ¿Qué distancia real los separa?", pasos: ["7,5 · 200 000 = 1 500 000 cm.", "1 500 000 cm = 15 km."], resultado: "15 km." },
    { enunciado: "Una maqueta de un coche a escala 1 : 20 tiene un volumen de 1,5 dm³. ¿Qué volumen tiene el coche real?", pasos: ["k = 20 → razón de volúmenes k³ = 8000.", "1,5 · 8000 = 12 000 dm³ = 12 m³."], resultado: "12 m³." },
  ],
  errores: [
    "Pensar que dos rectángulos cualesquiera son semejantes porque tienen los ángulos iguales.",
    "Emparejar mal los lados homólogos al plantear la proporción.",
    "En triángulos en posición de Tales, usar los trozos (AD/DB) en vez de los lados completos.",
    "No pasar a la misma unidad las medidas al calcular una escala.",
    "Multiplicar las áreas por k en lugar de por k².",
    "Confundir la escala 1 : 50 000 (1 cm = 500 m) con 1 cm = 50 km.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Son semejantes dos cuadrados cualesquiera? ¿Y dos rectángulos? Justifícalo.", sol: "Dos cuadrados sí: ángulos rectos y lados proporcionales. Dos rectángulos no siempre: tienen ángulos iguales, pero sus lados pueden no ser proporcionales (2 × 3 y 2 × 4)." },
    { nivel: "básico", q: "Un triángulo tiene lados 3, 5 y 7 cm. Calcula los de otro semejante con k = 4.", sol: "12, 20 y 28 cm." },
    { nivel: "básico", q: "Calcula la razón de semejanza entre un rectángulo de 4 × 6 y otro de 10 × 15.", sol: "10/4 = 15/6 = 2,5. k = 2,5 (ampliación)." },
    { nivel: "básico", q: "Una foto de 10 × 15 cm se reduce con k = 0,6. ¿Qué medidas tiene?", sol: "6 × 9 cm." },
    { nivel: "básico", q: "¿Son semejantes los triángulos de lados 2, 3, 4 y 6, 9, 12?", sol: "6/2 = 9/3 = 12/4 = 3. Sí, k = 3." },
    { nivel: "básico", q: "Dos triángulos tienen dos ángulos de 50° y 70°. ¿Son semejantes? ¿Cuánto mide el tercer ángulo?", sol: "Sí, por el criterio AA. El tercero mide 180 − 50 − 70 = 60°." },
    { nivel: "básico", q: "En un plano 1 : 100, una habitación mide 4,5 × 3 cm. ¿Cuáles son sus medidas reales?", sol: "450 × 300 cm = 4,5 × 3 m." },
    { nivel: "básico", q: "En un mapa 1 : 25 000, ¿cuántos metros representa 1 cm? ¿Y 6 cm?", sol: "25 000 cm = 250 m. 6 cm = 1500 m." },
    { nivel: "básico", q: "Un cuadrado de lado 3 cm se amplía con k = 2. ¿Cuánto aumenta el área?", sol: "De 9 cm² a 36 cm²: se multiplica por k² = 4." },
    { nivel: "básico", q: "Un palo de 2 m proyecta una sombra de 3 m. A la vez, una farola proyecta una de 9 m. ¿Qué altura tiene la farola?", sol: "h/9 = 2/3 → h = 6 m." },
    { nivel: "medio", q: "Dos triángulos semejantes tienen perímetros de 24 y 36 cm. Si un lado del primero mide 10 cm, ¿cuánto mide su homólogo?", sol: "k = 36/24 = 1,5. 10 · 1,5 = 15 cm." },
    { nivel: "medio", q: "Tres paralelas cortan a dos rectas r y s. En r determinan segmentos de 2,5 y 4 cm; en s, el segundo mide 6 cm. Calcula el primero.", sol: "2,5/4 = x/6 → x = 3,75 cm." },
    { nivel: "medio", q: "En un triángulo ABC, AB = 12 cm y BC = 9 cm. Una paralela a BC corta AB en D, con AD = 4 cm. Calcula DE.", sol: "DE/BC = AD/AB → DE = 9 · 4/12 = 3 cm." },
    { nivel: "medio", q: "Comprueba si los triángulos rectángulos de catetos 5 y 12, y 7,5 y 18 son semejantes. Calcula sus hipotenusas.", sol: "7,5/5 = 18/12 = 1,5: sí. Hipotenusas: 13 y 19,5 (13 · 1,5)." },
    { nivel: "medio", q: "Dos ciudades están a 45 km y en un mapa aparecen a 9 cm. ¿Cuál es la escala?", sol: "45 km = 4 500 000 cm. 9 : 4 500 000 = 1 : 500 000." },
    { nivel: "medio", q: "Queremos dibujar una pista de 40 × 20 m en un papel A4 (29,7 × 21 cm). ¿Qué escala sencilla usarías?", sol: "Con 1 : 200: 20 × 10 cm, cabe. (1 : 150 daría 26,7 × 13,3 cm, también cabe.)" },
    { nivel: "medio", q: "Una pizza de 30 cm de diámetro cuesta 10 € y una de 45 cm, 20 €. ¿Cuál sale más barata por superficie?", sol: "k = 1,5, áreas en razón 2,25. La grande da 2,25 veces más pizza por el doble de precio: sale más barata la grande." },
    { nivel: "medio", q: "Una maqueta de un edificio a escala 1 : 200 tiene 45 cm de alto y su planta ocupa 300 cm². ¿Altura y superficie de la planta real?", sol: "Altura: 45 · 200 = 9000 cm = 90 m. Superficie: 300 · 200² = 12 000 000 cm² = 1200 m²." },
    { nivel: "medio", q: "Un cubo de 2 cm de arista se amplía a uno de 6 cm. ¿Cuántas veces aumenta su superficie? ¿Y su volumen?", sol: "k = 3: superficie · 9, volumen · 27." },
    { nivel: "medio", q: "Una persona de 1,70 m se sitúa a 2 m de un espejo en el suelo y ve reflejada la copa de un árbol que está a 10 m del espejo. ¿Cuánto mide el árbol? (Toma la altura de los ojos como 1,60 m.)", sol: "h/10 = 1,60/2 → h = 8 m." },
    { nivel: "medio", q: "Dibuja un triángulo y aplícale una homotecia de razón 2 con centro en uno de sus vértices. ¿Qué observas?", sol: "El triángulo nuevo tiene los lados el doble de largos, paralelos a los originales, y comparte el vértice centro: están en posición de Tales." },
    { nivel: "medio", q: "Divide un segmento de 10 cm en 3 partes iguales con el teorema de Tales (explica los pasos).", sol: "Trazar una semirrecta desde un extremo, marcar 3 segmentos iguales con el compás, unir la última marca con el otro extremo y trazar paralelas por las otras marcas: cortan el segmento en 3 partes iguales." },
    { nivel: "avanzado", q: "Calcula la altura de la Gran Pirámide como Tales: su sombra sobresale 80 m de la base, la mitad del lado de la base mide 115 m y, a la misma hora, un bastón de 1,5 m da una sombra de 2 m.", sol: "Sombra total desde el centro: 115 + 80 = 195 m. h/195 = 1,5/2 → h = 146,25 m, muy cerca de la altura original de la pirámide (unos 146 m)." },
    { nivel: "avanzado", q: "La razón entre las áreas de dos polígonos semejantes es 16/9. ¿Cuál es la razón de semejanza? ¿Y la de sus perímetros?", sol: "k² = 16/9 → k = 4/3. Perímetros en razón 4/3." },
    { nivel: "avanzado", q: "Dos botellas semejantes tienen alturas de 20 cm y 30 cm. Si la pequeña contiene 0,8 L, ¿cuánto contiene la grande?", sol: "k = 1,5; k³ = 3,375. 0,8 · 3,375 = 2,7 L." },
    { nivel: "avanzado", q: "Comprueba que un A4 (29,7 × 21) y un A5 (21 × 14,85) son semejantes y calcula k. ¿Por qué ocurre?", sol: "29,7/21 ≈ 1,414 y 21/14,85 ≈ 1,414. k ≈ 0,707 = 1/√2. Porque el formato tiene razón √2 entre lados y al doblar por la mitad se conserva." },
    { nivel: "avanzado", q: "En un triángulo rectángulo, la altura sobre la hipotenusa divide al triángulo en dos triángulos. Demuestra que son semejantes al original.", sol: "Cada triángulo pequeño es rectángulo y comparte un ángulo agudo con el grande. Por el criterio de triángulos rectángulos (un ángulo agudo igual), ambos son semejantes al original." },
    { nivel: "avanzado", q: "Una ruta en un mapa 1 : 50 000 mide 18 cm. Si caminas a 4 km/h, ¿cuánto tardas?", sol: "18 · 50 000 = 900 000 cm = 9 km. 9 : 4 = 2,25 h = 2 h 15 min." },
    { nivel: "avanzado", q: "Para medir la anchura de un río se forman dos triángulos rectángulos semejantes. El pequeño, en la orilla, tiene catetos de 4 m y 3 m. En el grande, el cateto homólogo al de 4 m mide 20 m (medido por la orilla) y el homólogo al de 3 m cruza el río. ¿Cuánto mide el río?", sol: "k = 20/4 = 5. El cateto que cruza el río mide 3 · 5 = 15 m." },
    { nivel: "avanzado", q: "Explica por qué un elefante no podría tener las patas tan finas como una gacela aunque fuera semejante a ella.", sol: "Si fuera k veces más grande, su peso (volumen) crecería k³, pero la sección de sus patas solo k². Las patas tendrían que soportar k veces más presión; por eso necesitan ser proporcionalmente más gruesas." },
  ],
  quiz: baraja([
    { q: "Dos figuras semejantes tienen…", o: ["la misma forma", "el mismo tamaño", "la misma área", "el mismo perímetro"], a: 0, e: "Forma igual, tamaño distinto." },
    { q: "En figuras semejantes, los ángulos homólogos son…", o: ["iguales", "proporcionales", "suplementarios", "el doble"], a: 0, e: "No cambian." },
    { q: "Si k = 0,5, la figura se…", o: ["reduce a la mitad", "amplía al doble", "queda igual", "deforma"], a: 0, e: "k < 1." },
    { q: "Lados 4 y 10 homólogos. k =", o: ["2,5", "6", "0,4", "40"], a: 0, e: "10/4." },
    { q: "¿Son siempre semejantes dos círculos?", o: ["Sí", "No", "Solo si tienen el mismo radio", "Nunca"], a: 0, e: "Misma forma." },
    { q: "Triángulos con lados 3, 4, 5 y 9, 12, 15:", o: ["semejantes, k = 3", "no semejantes", "iguales", "semejantes, k = 6"], a: 0, e: "Todos por 3." },
    { q: "El criterio AA dice que basta con…", o: ["dos ángulos iguales", "dos lados iguales", "un ángulo igual", "tres lados iguales"], a: 0, e: "El tercero se deduce." },
    { q: "Dos triángulos rectángulos son semejantes si tienen…", o: ["un ángulo agudo igual", "la misma hipotenusa", "un cateto igual", "el mismo perímetro"], a: 0, e: "El recto ya es común." },
    { q: "El teorema de Tales trata de rectas…", o: ["paralelas que cortan a dos rectas", "perpendiculares", "que se cortan en un punto", "curvas"], a: 0, e: "Segmentos proporcionales." },
    { q: "Si a/b = a'/b' con a = 2, b = 3, a' = 4, entonces b' =", o: ["6", "5", "1,5", "8"], a: 0, e: "Doble." },
    { q: "Escala 1 : 100 significa que 1 cm son…", o: ["1 m", "100 m", "1 km", "10 cm"], a: 0, e: "100 cm." },
    { q: "En 1 : 50 000, 2 cm son…", o: ["1 km", "100 m", "10 km", "50 km"], a: 0, e: "100 000 cm." },
    { q: "Ventaja de la escala gráfica:", o: ["sirve aunque se amplíe el mapa", "es más precisa siempre", "no necesita regla", "es numérica"], a: 0, e: "Cambia con el mapa." },
    { q: "Si k = 3, las áreas se multiplican por…", o: ["9", "3", "27", "6"], a: 0, e: "k²." },
    { q: "Si k = 2, los volúmenes se multiplican por…", o: ["8", "2", "4", "6"], a: 0, e: "k³." },
    { q: "Si k = 2, los perímetros se multiplican por…", o: ["2", "4", "8", "1"], a: 0, e: "Son longitudes." },
    { q: "En una homotecia de razón 3, OA' =", o: ["3 · OA", "OA/3", "OA + 3", "9 · OA"], a: 0, e: "Definición." },
    { q: "Un palo de 1 m da 2 m de sombra; un árbol, 10 m. Altura:", o: ["5 m", "20 m", "12 m", "8 m"], a: 0, e: "10 · 1/2." },
    { q: "La razón entre lados de un DIN A es…", o: ["√2", "2", "1,5", "√3"], a: 0, e: "≈ 1,41." },
    { q: "Áreas en razón 25. La razón de semejanza es…", o: ["5", "25", "625", "12,5"], a: 0, e: "√25." },
  ]),
  examen: baraja([
    { q: "Triángulo 4, 6, 7 ampliado con k = 1,5:", o: ["6, 9, 10,5", "5,5, 7,5, 8,5", "8, 12, 14", "6, 8, 9"], a: 0, e: "Todo por 1,5." },
    { q: "¿Son semejantes 5, 7, 9 y 10, 14, 20?", o: ["No", "Sí, k = 2", "Sí, k = 5", "Son iguales"], a: 0, e: "20/9 ≠ 2." },
    { q: "Tales: 3/5 = 4,2/x → x =", o: ["7", "2,52", "6", "8,4"], a: 0, e: "5 · 4,2 / 3." },
    { q: "Mapa 1 : 200 000, 3 cm son…", o: ["6 km", "600 m", "60 km", "0,6 km"], a: 0, e: "600 000 cm." },
    { q: "30 km reales aparecen como 6 cm. Escala:", o: ["1 : 500 000", "1 : 5", "1 : 50 000", "1 : 5 000 000"], a: 0, e: "3 000 000 : 6." },
    { q: "Cuadrado de área 12 cm² ampliado con k = 2. Área nueva:", o: ["48 cm²", "24 cm²", "96 cm²", "144 cm²"], a: 0, e: "12 · 4." },
    { q: "Cubo de 5 cm³ ampliado con k = 3. Volumen:", o: ["135 cm³", "15 cm³", "45 cm³", "125 cm³"], a: 0, e: "5 · 27." },
    { q: "Persona de 1,8 m, sombra 1,2 m; torre con sombra 20 m. Altura:", o: ["30 m", "13,3 m", "24 m", "36 m"], a: 0, e: "20 · 1,8 / 1,2." },
  ], 1),
  feynman: ["Qué significa que dos figuras sean semejantes", "Cómo midió Tales la altura de una pirámide", "Por qué al duplicar el lado el área se multiplica por cuatro", "Qué ventaja tiene la escala gráfica frente a la numérica"],
  figura: {
    titulo: "La semejanza en un vistazo",
    svg: resumen("Resumen del tema de semejanza", [
      ["Semejantes", "ángulos iguales y lados proporcionales", "var(--pen)"],
      ["Razón k", "k = lado'/lado · k > 1 amplía · k < 1 reduce", "var(--leaf)"],
      ["Tales", "paralelas → segmentos proporcionales", "var(--sun)"],
      ["Criterios", "AA · LLL · LAL · rectángulos: un agudo", "var(--inf)"],
      ["Escalas y k", "1 : n · áreas · k² · volúmenes · k³", "var(--red)"],
    ]),
  },
  video: { id: "4wFaT3TBEo4", titulo: "Escalas, mapas y planos: semejanza", canal: "Susi Profe", vistas: 798490, megusta: 0, busqueda: "escalas mapas y planos semejanza" },
  mapa: mapa("SEMEJANZA", "var(--sun)", [
    ["Figuras semejantes", "razón k · homólogos", "var(--pen)"],
    ["Tales", "paralelas · posición de Tales", "var(--leaf)"],
    ["Triángulos", "criterios AA, LLL, LAL", "var(--sun)"],
    ["Aplicaciones", "escalas · k² · k³ · homotecia", "var(--red)"],
  ], 250),
  glosario: [
    ["Figuras semejantes", "Las que tienen la misma forma: ángulos iguales y lados proporcionales."],
    ["Lados homólogos", "Lados que se corresponden en dos figuras semejantes."],
    ["Razón de semejanza", "Cociente entre dos lados homólogos."],
    ["Ampliación", "Figura semejante con razón mayor que 1."],
    ["Reducción", "Figura semejante con razón menor que 1."],
    ["Teorema de Tales", "Paralelas que cortan a dos rectas determinan segmentos proporcionales."],
    ["Posición de Tales", "Dos triángulos con un ángulo común y lados opuestos paralelos."],
    ["Criterio de semejanza", "Condición mínima para asegurar que dos triángulos son semejantes."],
    ["Escala", "Razón entre una medida en un plano o mapa y la real."],
    ["Escala gráfica", "Barra que indica la distancia real que representa cada tramo."],
    ["Homotecia", "Transformación que amplía o reduce una figura desde un centro."],
    ["Centro de homotecia", "Punto fijo desde el que se amplía o reduce la figura."],
    ["Maqueta", "Reproducción semejante de un objeto a escala."],
  ],
  situacion: {
    titulo: "El plano de nuestra aula",
    reto: "Vais a dibujar el plano a escala de vuestra aula con el mobiliario y a construir una pequeña maqueta, calculando escalas, áreas y volúmenes reales y a escala.",
    pasos: [
      "Medid el aula, puertas, ventanas y muebles principales con una cinta métrica.",
      "Elegid una escala que permita dibujar el plano en un A4 o A3 y calculad todas las medidas a escala.",
      "Dibujad el plano con escala numérica y gráfica, y calculad la superficie real a partir del plano.",
      "Construid una maqueta sencilla (cartón) con otra escala y comparad volúmenes con k³.",
      "Proponed una redistribución del aula y presentadla con el plano y la maqueta.",
    ],
    producto: "Un plano a escala del aula, una maqueta y un informe con los cálculos de escalas, áreas y volúmenes.",
    evaluacion: ["Elige una escala adecuada y la aplica sin errores.", "Calcula medidas reales y a escala correctamente.", "Relaciona razón de semejanza, áreas y volúmenes.", "Presenta un trabajo preciso y bien acabado."],
  },
  tarjetas: [
    ["Semejantes", "Ángulos iguales, lados proporcionales"], ["Razón k", "Lado' / lado homólogo"], ["k > 1 / k < 1", "Ampliación / reducción"],
    ["Teorema de Tales", "a/b = a'/b'"], ["Posición de Tales", "Paralela a un lado → triángulo semejante"], ["Criterio AA", "Dos ángulos iguales"],
    ["Criterio LLL", "Tres lados proporcionales"], ["Escala 1 : n", "1 cm = n cm reales"], ["Áreas", "Se multiplican por k²"],
    ["Volúmenes", "Se multiplican por k³"], ["Homotecia", "OA' = k · OA"], ["Sombras", "Rayos paralelos → triángulos semejantes"],
  ],
  familias: ["Medid la altura de un árbol o una farola con la sombra de un palo.", "Usad un mapa de excursión y calculad distancias reales con la escala.", "Comparad el precio por superficie de pizzas de distintos tamaños.", "Buscad maquetas o juguetes a escala y calculad las medidas del objeto real."],
  profesores: {
    saberes: "Sentido espacial y de la medida: semejanza, razón de semejanza, teorema de Tales, criterios de semejanza de triángulos, escalas, relación entre longitudes, áreas y volúmenes y transformaciones (homotecias) (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Medir alturas en el patio con sombras y espejos.", "Fotocopiadora: ampliaciones y reducciones y su efecto en áreas.", "Planos del instituto a escala y maquetas.", "GeoGebra para homotecias y triángulos en posición de Tales."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Teorema de Tales", url: "https://es.wikipedia.org/wiki/Teorema_de_Tales" }, { t: "Wikipedia: Formato de papel ISO 216", url: "https://es.wikipedia.org/wiki/ISO_216" }],
  revisado: REV,
};
