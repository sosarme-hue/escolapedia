// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "El átomo y los modelos atómicos",
  minutos: 55,
  objetivos: ["Describir la evolución de los modelos atómicos de Dalton a Bohr", "Identificar las partículas subatómicas con su carga, masa y posición", "Usar el número atómico y el número másico para calcular protones, neutrones y electrones", "Explicar qué son los isótopos y los iones y algunas aplicaciones de la radiactividad"],
  claves: ["átomo", "protón", "neutrón", "electrón", "número atómico", "número másico", "isótopo", "ion"],
  pregunta: {
    texto: "En 1909, Rutherford disparó partículas contra una lámina de oro finísima. Casi todas la atravesaron, pero 1 de cada 8000 rebotó hacia atrás. Dijo que era «como disparar una bala de cañón contra un pañuelo de papel y que volviera». ¿Qué descubrió?",
    respuesta: "Que el átomo está casi <mark>vacío</mark>, y que toda su masa y su carga positiva están concentradas en un <mark>núcleo</mark> diminuto. Si el átomo fuera un estadio de fútbol, el núcleo sería un garbanzo en el centro del campo. Las partículas que rebotaban eran las pocas que chocaban de frente con un núcleo.",
  },
  bloques: [
    {
      html: `<h3>La idea de átomo</h3><p>Hace unos 2.400 años, los filósofos griegos <b>Leucipo</b> y <b>Demócrito</b> se preguntaron qué pasaría si partiéramos un trozo de materia en mitades cada vez más pequeñas. Pensaron que se llegaría a una partícula que ya no se podría dividir, y la llamaron <mark>átomo</mark>, que en griego significa «indivisible». Aristóteles defendía, en cambio, que la materia era continua y que todo estaba formado por cuatro elementos: tierra, agua, aire y fuego. Su idea dominó durante casi dos mil años. Pero eran solo razonamientos: no hicieron experimentos. La teoría atómica científica llegó en el siglo XIX, cuando se empezaron a medir las masas en las reacciones químicas.</p>`,
    },
    {
      html: `<h3>El modelo de Dalton</h3><p>En 1808, el químico inglés <b>John Dalton</b> propuso la primera <mark>teoría atómica</mark> basada en experimentos. Sus ideas principales eran: la materia está formada por átomos <b>indivisibles</b> e indestructibles; todos los átomos de un mismo <b>elemento</b> son iguales en masa y propiedades, y distintos de los de otros elementos; los <b>compuestos</b> se forman al unirse átomos de distintos elementos en una proporción fija de números enteros; y en una <b>reacción química</b> los átomos no se crean ni se destruyen, solo se reorganizan. Dalton imaginaba los átomos como <b>esferas macizas</b>. Hoy sabemos que algunas ideas eran incorrectas, pero su teoría explicó la ley de conservación de la masa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Modelo de Dalton: esferas macizas; átomos de un elemento iguales entre sí, distintos de los de otro elemento; un compuesto une átomos en proporción fija">${BG}
        ${[40, 80].map(x => `<circle cx="${x}" cy="60" r="16" fill="var(--pen)"/>`).join("")}${[170, 210].map(x => `<circle cx="${x}" cy="60" r="12" fill="var(--red)"/>`).join("")}
        ${t(60, 100, "elemento A", { size: 11, color: "var(--pen)" })}${t(190, 100, "elemento B", { size: 11, color: "var(--red)" })}
        <circle cx="116" cy="140" r="16" fill="var(--pen)"/><circle cx="142" cy="140" r="12" fill="var(--red)"/>
        ${t(130, 172, "compuesto AB", { size: 11 })}${t(130, 22, "esferas macizas e indivisibles", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El electrón y el modelo de Thomson</h3><p>En 1897, <b>J. J. Thomson</b> estudiaba los <b>rayos catódicos</b>, unos rayos que aparecen en tubos de vidrio con gas a baja presión cuando se aplica un voltaje alto. Comprobó que estaban formados por partículas con <b>carga negativa</b>, mucho más ligeras que el átomo más pequeño. Las llamó <mark>electrones</mark>. Por tanto, el átomo no era indivisible: tenía partes. Como la materia es neutra, Thomson propuso que el átomo era una <b>esfera de carga positiva</b> con los electrones incrustados, como las pasas en un bizcocho. Por eso se conoce como el «modelo del pudin de pasas».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Modelo de Thomson: una esfera de carga positiva con electrones negativos incrustados como pasas en un bizcocho">${BG}
        <circle cx="130" cy="92" r="62" fill="var(--red)" fill-opacity=".18" stroke="var(--red)" stroke-width="2.5"/>
        ${[[106, 64], [150, 60], [96, 104], [130, 92], [166, 112], [122, 132], [158, 82]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="var(--pen)"/><text x="${x}" y="${y + 4}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>−</text>`).join("")}
        ${t(130, 20, "esfera positiva con electrones", { size: 11, color: "var(--muted)" })}${t(230, 170, "+", { size: 16, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>El experimento de Rutherford</h3><p>En 1909, <b>Ernest Rutherford</b> y sus colaboradores lanzaron <b>partículas alfa</b>, con carga positiva, contra una lámina de oro muy fina. Si el modelo de Thomson fuera cierto, todas la atravesarían casi sin desviarse. Observaron que la mayoría pasaba en línea recta, algunas se desviaban y muy pocas <mark>rebotaban</mark>. Rutherford concluyó que el átomo tiene un <b>núcleo</b> muy pequeño, con carga positiva y casi toda la masa, y una <b>corteza</b> donde los electrones giran a gran distancia, como los planetas alrededor del Sol. Entre el núcleo y los electrones hay <b>vacío</b>. Más tarde se descubrió que el núcleo está formado por <b>protones</b> (positivos) y <b>neutrones</b> (sin carga), estos últimos por Chadwick en 1932.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Experimento de Rutherford: partículas alfa contra una lámina de oro; la mayoría pasa recta, alguna se desvía y muy pocas rebotan">${BG}
        <rect x="20" y="78" width="40" height="24" rx="4" fill="var(--muted)"/>${t(40, 120, "fuente α", { size: 10 })}
        <rect x="128" y="24" width="8" height="132" fill="#d4a017"/>${t(132, 172, "lámina de oro", { size: 10, color: "#b8860b" })}
        ${[78, 86, 94, 102].map(y => `<line x1="60" y1="${y}" x2="128" y2="${y}" stroke="var(--red)" stroke-width="1.5"/>`).join("")}
        ${fl(136, 82, 236, 82, "var(--red)", 1.5)}${fl(136, 98, 236, 98, "var(--red)", 1.5)}${fl(136, 90, 220, 40, "var(--red)", 1.5)}
        <path d="M128 86 Q 140 86 96 50" fill="none" stroke="var(--pen)" stroke-width="2"/>${fl(104, 58, 96, 50, "var(--pen)", 2)}
        ${t(244, 76, "la mayoría", { size: 10, anchor: "end" })}${t(226, 34, "se desvían", { size: 10, anchor: "end" })}${t(92, 40, "rebotan", { size: 10, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>El modelo de Bohr</h3><p>El modelo de Rutherford tenía un problema: según las leyes de la física, un electrón girando debería perder energía y caer al núcleo. En 1913, el danés <b>Niels Bohr</b> propuso que los electrones solo pueden girar en ciertas <mark>órbitas permitidas</mark>, cada una con una energía determinada, llamadas <b>niveles de energía</b> o capas. Mientras un electrón está en su órbita, no pierde energía. Si absorbe energía, salta a una órbita más externa; al volver, emite esa energía en forma de <b>luz</b> de un color concreto. Así se explica que cada elemento emita colores característicos en los fuegos artificiales: el sodio, amarillo; el estroncio, rojo; el cobre, verde azulado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Modelo de Bohr: núcleo central y electrones en órbitas circulares permitidas; un electrón salta de una órbita externa a otra interna y emite luz">${BG}
        <circle cx="110" cy="92" r="16" fill="var(--red)"/>${t(110, 97, "+", { size: 14, color: "#fff" })}
        ${[36, 58, 80].map(r => `<circle cx="110" cy="92" r="${r}" fill="none" stroke="var(--muted)" stroke-width="1.5"/>`).join("")}
        ${[[146, 92], [74, 92], [110, 34], [110, 150], [168, 92]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--pen)"/>`).join("")}
        <circle cx="167" cy="58" r="6" fill="var(--pen)" fill-opacity=".4"/>${fl(164, 62, 152, 76, "var(--pen)", 1.5)}
        <path d="M176 58 q 6 -6 12 0 t 12 0 t 12 0" stroke="#e0a000" stroke-width="2.5" fill="none"/>${t(244, 46, "luz", { size: 11, anchor: "end", color: "#b8860b" })}
        ${t(250, 174, "niveles de energía", { size: 10, anchor: "end", color: "var(--muted)" })}</svg>`,
      video: { id: "LS3N5hOxRPE", titulo: "Modelos Atómicos [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 969611 },
    },
    {
      html: `<h3>Las partículas subatómicas</h3><p>Hoy sabemos que el átomo está formado por tres tipos de partículas. En el <b>núcleo</b> están los <mark>protones</mark>, con carga positiva, y los <mark>neutrones</mark>, sin carga; juntos se llaman <b>nucleones</b> y tienen casi la misma masa. En la <b>corteza</b> se mueven los <mark>electrones</mark>, con carga negativa igual a la del protón pero de signo contrario, y una masa unas 1836 veces menor. Por eso casi toda la masa del átomo está en el núcleo. Un átomo es <b>neutro</b> porque tiene tantos electrones como protones. El tamaño de un átomo es de unos 10⁻¹⁰ m, y el del núcleo, unas cien mil veces menor.</p>${tabla(["Partícula", "Carga", "Masa relativa", "Lugar"], [["Protón", "+1", "1", "núcleo"], ["Neutrón", "0", "1", "núcleo"], ["Electrón", "−1", "1/1836", "corteza"]])}`,
    },
    {
      html: `<h3>Número atómico y número másico</h3><p>Cada elemento se identifica por su <mark>número atómico (Z)</mark>, que es el número de <b>protones</b> del núcleo. Todos los átomos de carbono tienen 6 protones; todos los de oxígeno, 8. Si cambia Z, cambia el elemento. En un átomo neutro, Z también es el número de electrones. El <mark>número másico (A)</mark> es el número total de partículas del núcleo: <b>A = protones + neutrones</b>. Por tanto, el número de neutrones es <b>N = A − Z</b>. Se representa así: el símbolo del elemento con A arriba a la izquierda y Z abajo a la izquierda. Por ejemplo, el sodio-23 tiene Z = 11 y A = 23: 11 protones, 11 electrones y 12 neutrones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Notación del sodio: número másico 23 arriba a la izquierda, número atómico 11 abajo; 11 protones, 11 electrones y 12 neutrones">${BG}
        ${t(64, 70, "23", { size: 20, color: "var(--red)", anchor: "end" })}${t(64, 118, "11", { size: 20, color: "var(--pen)", anchor: "end" })}${t(96, 112, "Na", { size: 50 })}
        ${t(18, 46, "A: másico", { size: 10, anchor: "start", color: "var(--red)" })}${t(18, 142, "Z: atómico", { size: 10, anchor: "start", color: "var(--pen)" })}
        ${caja(150, 30, 100, 30, "p⁺ = Z = 11", "var(--pen)", { size: 11 })}${caja(150, 70, 100, 30, "e⁻ = Z = 11", "var(--pen)", { size: 11 })}${caja(150, 110, 100, 30, "n = A − Z = 12", "var(--red)", { size: 11 })}
        ${t(200, 164, "átomo neutro", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "5-jW1Tppdgs", titulo: "Calcular PROTONES, NEUTRONES y ELECTRONES. Número Másico y Atómico", canal: "Susi Profe", vistas: 2996891 },
    },
    {
      html: `<h3>Los isótopos</h3><p>Los <mark>isótopos</mark> son átomos de un mismo elemento, es decir, con el mismo número de protones (mismo Z), pero con distinto número de neutrones (distinto A). Tienen las mismas propiedades químicas, pero distinta masa. El hidrógeno tiene tres: el <b>protio</b> (¹H, sin neutrones), el <b>deuterio</b> (²H, un neutrón) y el <b>tritio</b> (³H, dos neutrones). El carbono tiene el carbono-12, el más abundante, y el <b>carbono-14</b>. Como en la naturaleza los elementos son mezclas de isótopos, la <b>masa atómica</b> que aparece en la tabla periódica es una media ponderada; por eso la del cloro es 35,5 y no un número entero.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los tres isótopos del hidrógeno: protio con un protón, deuterio con un protón y un neutrón, tritio con un protón y dos neutrones; todos con un electrón">${BG}
        ${[["¹H protio", 0], ["²H deuterio", 1], ["³H tritio", 2]].map(([n, k], i) => { const x = 46 + i * 84; return `<circle cx="${x}" cy="84" r="34" fill="none" stroke="var(--muted)" stroke-width="1.5"/><circle cx="${x + 34}" cy="84" r="5" fill="var(--pen)"/><circle cx="${x - (k ? 5 : 0)}" cy="84" r="8" fill="var(--red)"/>${k > 0 ? `<circle cx="${x + 7}" cy="${k === 2 ? 78 : 84}" r="8" fill="var(--muted)"/>` : ""}${k === 2 ? `<circle cx="${x + 3}" cy="93" r="8" fill="var(--muted)"/>` : ""}${t(x, 140, n, { size: 11 })}`; }).join("")}
        ${t(130, 24, "mismo Z = 1, distinto número de neutrones", { size: 10, color: "var(--muted)" })}
        ${t(60, 168, "● protón", { size: 10, color: "var(--red)" })}${t(130, 168, "● neutrón", { size: 10, color: "var(--muted)" })}${t(200, 168, "● electrón", { size: 10, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>La radiactividad y sus aplicaciones</h3><p>Algunos isótopos tienen núcleos <b>inestables</b> que se desintegran espontáneamente y emiten radiación: son <mark>radiactivos</mark>. La radiactividad la descubrió Henri Becquerel en 1896 y la investigó a fondo <b>Marie Curie</b>, primera persona en ganar dos premios Nobel. Tiene muchas aplicaciones. En <b>medicina</b>, se usan isótopos para diagnosticar enfermedades (gammagrafías) y para tratar tumores (radioterapia). El <b>carbono-14</b> permite saber la edad de restos de seres vivos de hasta unos 50.000 años. Las <b>centrales nucleares</b> producen electricidad con la fisión del uranio-235. Pero la radiación es peligrosa: daña las células y genera <b>residuos radiactivos</b> que hay que guardar durante miles de años.</p>`,
    },
    {
      html: `<h3>Los iones</h3><p>Los átomos pueden ganar o perder <b>electrones</b> (nunca protones en una reacción química). Entonces dejan de ser neutros y se convierten en <mark>iones</mark>. Si un átomo <b>pierde</b> electrones, queda con más protones que electrones y forma un ion positivo o <b>catión</b>: el sodio pierde un electrón y forma Na⁺, con 11 protones y 10 electrones. Si un átomo <b>gana</b> electrones, forma un ion negativo o <b>anión</b>: el cloro gana uno y forma Cl⁻, con 17 protones y 18 electrones. La carga se escribe arriba a la derecha del símbolo. Los iones son fundamentales en la vida: los impulsos nerviosos funcionan gracias a los iones de sodio y potasio, y la sal común está formada por iones Na⁺ y Cl⁻.</p>`,
    },
  ],
  figura: {
    titulo: "Cómo cambió la idea de átomo",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Línea del tiempo de los modelos atómicos: Dalton 1808 esfera maciza, Thomson 1897 esfera positiva con electrones, Rutherford 1911 núcleo y vacío, Bohr 1913 órbitas permitidas">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      <line x1="40" y1="200" x2="600" y2="200" stroke="var(--muted)" stroke-width="3"/>
      ${[["Dalton", "1808", "esfera maciza"], ["Thomson", "1897", "pudin de pasas"], ["Rutherford", "1911", "núcleo y vacío"], ["Bohr", "1913", "órbitas fijas"]].map(([n, a, d], i) => { const x = 90 + i * 150; return `<circle cx="${x}" cy="200" r="7" fill="var(--pen)"/>${t(x, 224, a, { size: 13, color: "var(--muted)" })}${t(x, 26, n, { size: 17, color: "var(--pen)", font: D })}${t(x, 166, d, { size: 13, weight: 400 })}`; }).join("")}
      <circle cx="90" cy="96" r="34" fill="var(--pen)"/>
      <circle cx="240" cy="96" r="38" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/>${[[222, 80], [256, 84], [236, 110], [258, 112], [228, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--pen)"/>`).join("")}
      <circle cx="390" cy="96" r="6" fill="var(--red)"/><ellipse cx="390" cy="96" rx="44" ry="16" fill="none" stroke="var(--muted)"/><ellipse cx="390" cy="96" rx="44" ry="16" transform="rotate(60 390 96)" fill="none" stroke="var(--muted)"/><ellipse cx="390" cy="96" rx="44" ry="16" transform="rotate(-60 390 96)" fill="none" stroke="var(--muted)"/>
      <circle cx="540" cy="96" r="8" fill="var(--red)"/>${[22, 38, 54].map(r => `<circle cx="540" cy="96" r="${r}" fill="none" stroke="var(--muted)"/>`).join("")}<circle cx="562" cy="96" r="4" fill="var(--pen)"/><circle cx="540" cy="58" r="4" fill="var(--pen)"/><circle cx="502" cy="134" r="4" fill="var(--pen)"/>
    </svg>`,
  },
  video: { id: "8lX8FjjLKhc", titulo: "Modelos atómicos (Dalton, Thomson, Rutherford, Bohr y Chadwick)", canal: "Es Ciencia", vistas: 2514269, megusta: 0, busqueda: "modelos atómicos Dalton Thomson Rutherford Bohr" },
  ejemplos: [
    { enunciado: "El hierro-56 tiene Z = 26. ¿Cuántos protones, neutrones y electrones tiene un átomo neutro?",
      pasos: ["Protones = Z = 26.", "Electrones = protones, por ser neutro = 26.", "Neutrones = A − Z = 56 − 26 = 30."],
      resultado: "26 p⁺, 30 n y 26 e⁻." },
    { enunciado: "El ion Mg²⁺ procede del magnesio-24 (Z = 12). Calcula sus partículas.",
      pasos: ["Protones = 12; neutrones = 24 − 12 = 12.", "La carga 2+ indica que ha perdido 2 electrones.", "Electrones = 12 − 2 = 10."],
      resultado: "12 p⁺, 12 n y 10 e⁻; es un catión." },
    { enunciado: "Un átomo tiene 17 protones y 20 neutrones, y otro 17 protones y 18 neutrones. ¿Qué relación hay entre ellos?",
      pasos: ["Ambos tienen Z = 17: son del mismo elemento, el cloro.", "Sus números másicos son 37 y 35.", "Mismo Z y distinto A: isótopos."],
      resultado: "son isótopos del cloro: cloro-37 y cloro-35." },
  ],
  errores: [
    "Pensar que el número másico es el número de neutrones: es protones más neutrones.",
    "Creer que un ion positivo ha ganado protones: ha perdido electrones.",
    "Pensar que los isótopos son elementos distintos: son el mismo elemento con distinta masa.",
    "Imaginar el átomo macizo: es casi todo vacío.",
    "Confundir los modelos: Thomson no tenía núcleo; el núcleo lo descubrió Rutherford.",
  ],
  ejercicios: [
    { q: "Resume la teoría atómica de Dalton en cuatro ideas.", sol: "Materia formada por átomos indivisibles; los átomos de un elemento son iguales; los compuestos se forman uniendo átomos en proporción fija; en las reacciones los átomos se reorganizan sin crearse ni destruirse." },
    { q: "¿Qué partícula descubrió Thomson y cómo era su modelo?", sol: "El electrón. Una esfera de carga positiva con los electrones incrustados." },
    { q: "Explica las tres observaciones de Rutherford y su conclusión.", sol: "La mayoría de partículas pasa recta (el átomo está casi vacío), algunas se desvían y unas pocas rebotan (hay un núcleo pequeño, positivo y con casi toda la masa)." },
    { q: "¿Qué aportó Bohr al modelo atómico?", sol: "Que los electrones solo giran en órbitas permitidas con energía fija y que, al saltar entre ellas, absorben o emiten luz." },
    { q: "Completa: carbono-14 (Z = 6): protones, neutrones, electrones.", sol: "6 protones, 8 neutrones y 6 electrones." },
    { q: "Un átomo tiene A = 40 y 20 neutrones. ¿Cuál es su Z? ¿Qué elemento es si Z = 20 es el calcio?", sol: "Z = 40 − 20 = 20: calcio." },
    { q: "Calcula las partículas del ion O²⁻ (oxígeno-16, Z = 8).", sol: "8 protones, 8 neutrones y 10 electrones." },
    { q: "Define isótopo y pon un ejemplo.", sol: "Átomos del mismo elemento (igual Z) con distinto número de neutrones (distinto A). Ejemplo: carbono-12 y carbono-14." },
    { q: "Cita dos aplicaciones y un riesgo de la radiactividad.", sol: "Aplicaciones: radioterapia, datación con carbono-14, centrales nucleares. Riesgo: daña las células y genera residuos peligrosos durante miles de años." },
    { q: "Explica la diferencia entre un catión y un anión.", sol: "Un catión es un ion positivo que ha perdido electrones; un anión es un ion negativo que ha ganado electrones." },
  ],
  quiz: [
    { q: "«Átomo» significa…", o: ["pequeño", "indivisible", "partícula"], a: 1, e: "Indivisible, en griego." },
    { q: "El electrón lo descubrió…", o: ["Dalton", "Thomson", "Bohr"], a: 1, e: "Thomson, en 1897." },
    { q: "El núcleo atómico lo descubrió…", o: ["Rutherford", "Demócrito", "Thomson"], a: 0, e: "Rutherford." },
    { q: "En el núcleo hay…", o: ["protones y electrones", "protones y neutrones", "solo electrones"], a: 1, e: "Protones y neutrones." },
    { q: "El número atómico Z es el número de…", o: ["neutrones", "protones", "nucleones"], a: 1, e: "Protones." },
    { q: "Si A = 27 y Z = 13, los neutrones son…", o: ["13", "14", "40"], a: 1, e: "27 − 13 = 14." },
    { q: "Los isótopos se diferencian en el número de…", o: ["protones", "neutrones", "electrones de valencia"], a: 1, e: "Neutrones." },
    { q: "Un catión se forma al…", o: ["ganar electrones", "perder electrones", "ganar protones"], a: 1, e: "Perder electrones." },
    { q: "El Cl⁻ tiene…", o: ["17 electrones", "18 electrones", "16 electrones"], a: 1, e: "17 + 1 = 18." },
    { q: "Las órbitas de energía fija son del modelo de…", o: ["Dalton", "Rutherford", "Bohr"], a: 2, e: "Bohr." },
  ],
  examen: [
    { q: "La masa del electrón comparada con la del protón es…", o: ["igual", "unas 1836 veces menor", "el doble"], a: 1, e: "Unas 1836 veces menor." },
    { q: "Un átomo neutro con 15 protones tiene…", o: ["15 electrones", "30 electrones", "0 electrones"], a: 0, e: "15 electrones." },
    { q: "El carbono-14 se usa para…", o: ["datar restos de seres vivos", "fabricar acero", "hacer plásticos"], a: 0, e: "Datación." },
  ],
  feynman: ["Por qué el modelo de Thomson no explicaba el experimento de Rutherford", "Cómo calcular protones, neutrones y electrones con Z y A", "Qué diferencia hay entre un isótopo y un ion"],
  mapa: mapa("ÁTOMO", "var(--eso)", [
    ["Modelos", "Dalton · Thomson · Rutherford · Bohr", "var(--pen)"],
    ["Partículas", "protón · neutrón · electrón", "var(--red)"],
    ["Números", "Z = protones · A = p + n", "var(--leaf)"],
    ["Variantes", "isótopos · iones", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Protón", "Partícula del núcleo con carga +1."],
    ["Neutrón", "Partícula del núcleo sin carga."],
    ["Electrón", "Partícula de la corteza con carga −1, muy ligera."],
    ["Número atómico Z", "Número de protones; identifica el elemento."],
    ["Número másico A", "Protones + neutrones."],
    ["Isótopos", "Mismo Z, distinto A."],
    ["Catión / anión", "Catión: ion positivo. Anión: ion negativo."],
    ["Modelo de Bohr", "Electrones en órbitas de energía fija."],
  ],
  familias: ["Construid un modelo de átomo con plastilina de tres colores para protones, neutrones y electrones.", "Buscad en un paquete de sal o en el agua mineral qué iones aparecen en la etiqueta.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La materia: modelos atómicos, partículas subatómicas, número atómico y másico, isótopos, iones y aplicaciones de la radiactividad (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Simular el experimento de Rutherford lanzando canicas contra objetos ocultos bajo un cartón.", "Ensayo a la llama con sales de distintos metales para ilustrar el modelo de Bohr.", "Línea del tiempo colaborativa con biografías de científicas y científicos del átomo."],
  },
  fuentes: [RD, wiki("Modelo atómico", "Modelo_at%C3%B3mico"), wiki("Isótopo", "Is%C3%B3topo")],
  revisado: "2026-11-12",
};
