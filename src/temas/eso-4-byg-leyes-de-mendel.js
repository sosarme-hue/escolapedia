// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Guisante: color amarillo (A, dominante) o verde (a).
const pea = (x, y, r, amarillo) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${amarillo ? "#f2c200" : "#5aa832"}" stroke="var(--ink)" stroke-width="2"/>`;

// Cuadro de Punnett 2x2 para Aa x Aa.
function punnett(x, y, s) {
  const g = ["A", "a"];
  let out = "";
  g.forEach((c, i) => {
    out += `<text x="${x + s * (i + 1) + s / 2}" y="${y + s * 0.65}" text-anchor="middle" font-size="22" font-weight="700" fill="var(--pen)" ${D}>${c}</text>`;
    out += `<text x="${x + s / 2}" y="${y + s * (i + 1) + s * 0.62}" text-anchor="middle" font-size="22" font-weight="700" fill="var(--inf)" ${D}>${c}</text>`;
  });
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    const gen = [g[i], g[j]].sort().join("");
    const cx = x + s * (j + 1), cy = y + s * (i + 1);
    out += `<rect x="${cx}" y="${cy}" width="${s}" height="${s}" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`;
    out += pea(cx + s / 2, cy + s * 0.38, s * 0.2, gen !== "aa");
    out += `<text x="${cx + s / 2}" y="${cy + s * 0.86}" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${gen}</text>`;
  }
  return out;
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "La herencia: leyes de Mendel",
  minutos: 35,
  objetivos: ["Usar el vocabulario de la genética: gen, alelo, genotipo y fenotipo", "Enunciar las tres leyes de Mendel", "Resolver cruces con el cuadro de Punnett"],
  claves: ["alelo", "dominante", "recesivo", "homocigoto", "heterocigoto", "genotipo", "fenotipo"],
  pregunta: {
    texto: "Tus padres tienen los ojos marrones y tú los tienes azules. ¿Cómo es posible si ninguno de los dos los tiene azules?",
    respuesta: "Porque cada uno de tus padres puede llevar <mark>escondido un alelo de ojos azules</mark>. El marrón domina sobre el azul, así que no se nota en ellos, pero si los dos te pasan su alelo azul, tú tienes dos copias y se manifiesta. Mendel descubrió esta lógica con guisantes en 1865. (En realidad el color de ojos depende de varios genes, pero el principio es el mismo.)",
  },
  bloques: [
    {
      html: `<h3>El vocabulario de la herencia</h3><p>Un <b>gen</b> es un trozo de ADN con la información de un carácter, como el color de la semilla. Cada gen puede tener versiones distintas llamadas <mark>alelos</mark>. Como recibimos un cromosoma de cada progenitor, tenemos <b>dos alelos</b> de cada gen. El <b>genotipo</b> es la pareja de alelos (Aa) y el <b>fenotipo</b> es lo que se ve (semilla amarilla).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pareja de cromosomas homólogos con un alelo A y un alelo a en el mismo lugar">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="70" y="20" width="26" height="140" rx="13" fill="var(--pen)" opacity=".85"/>
        <rect x="150" y="20" width="26" height="140" rx="13" fill="var(--inf)" opacity=".85"/>
        <rect x="66" y="74" width="34" height="18" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="146" y="74" width="34" height="18" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <text x="83" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>A</text>
        <text x="163" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>a</text>
        <text x="83" y="176" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>de la madre</text>
        <text x="163" y="176" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>del padre</text>
        <text x="218" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>gen</text>
        <path d="M200 83 H 184" stroke="var(--ink)" stroke-width="2"/>
      </svg>`,
    },
    {
      html: `<h3>Dominante y recesivo</h3><p>Cuando los dos alelos son distintos, uno puede tapar al otro. El que se manifiesta es el <mark>dominante</mark> (se escribe en mayúscula, A) y el que queda oculto es el <mark>recesivo</mark> (minúscula, a). Si los dos alelos son iguales (AA o aa) el individuo es <b>homocigoto</b>; si son distintos (Aa), <b>heterocigoto</b>. Un guisante Aa es amarillo, igual que uno AA.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres genotipos y su fenotipo: AA amarillo, Aa amarillo, aa verde">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${pea(50, 70, 26, true)}${pea(130, 70, 26, true)}${pea(210, 70, 26, false)}
        <g ${D} font-weight="700" font-size="22" fill="var(--ink)" text-anchor="middle"><text x="50" y="132">AA</text><text x="130" y="132">Aa</text><text x="210" y="132">aa</text></g>
        <g ${F} font-size="12" fill="var(--muted)" text-anchor="middle"><text x="50" y="154">homocigoto</text><text x="130" y="154">heterocigoto</text><text x="210" y="154">homocigoto</text><text x="50" y="168">dominante</text><text x="210" y="168">recesivo</text></g>
      </svg>`,
    },
    {
      html: `<h3>Primera ley: uniformidad</h3><p>Mendel cruzó guisantes puros amarillos (AA) con puros verdes (aa). <mark>Todos los hijos de la primera generación (F1) salieron iguales</mark>: amarillos y Aa. El verde no había desaparecido: estaba oculto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cruce AA por aa: todos los descendientes Aa amarillos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${pea(70, 40, 20, true)}${pea(190, 40, 20, false)}
        <text x="130" y="47" text-anchor="middle" font-size="22" font-weight="700" fill="var(--red)" ${D}>×</text>
        <g ${F} font-size="13" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="70" y="78">AA</text><text x="190" y="78">aa</text></g>
        <path d="M130 86 V 104" stroke="var(--ink)" stroke-width="2.5"/>
        ${[40, 100, 160, 220].map((x) => pea(x, 128, 16, true)).join("")}
        <text x="130" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>F1: 100 % Aa, amarillos</text>
      </svg>`,
    },
    {
      html: `<h3>Segunda ley: segregación</h3><p>Al cruzar entre sí dos plantas de la F1 (Aa × Aa), cada una reparte sus dos alelos por separado en sus gametos: la mitad lleva A y la mitad a. En los hijos (F2) <mark>vuelve a aparecer el verde</mark> en una proporción de <b>3 amarillos : 1 verde</b>. Lo vemos con el <b>cuadro de Punnett</b>.</p>`,
      svg: `<svg viewBox="0 0 260 200" role="img" aria-label="Cuadro de Punnett Aa por Aa: AA, Aa, Aa y aa; tres amarillos y un verde">
        <rect width="260" height="200" rx="14" fill="var(--paper)"/>
        ${punnett(36, 4, 58)}
      </svg>`,
    },
    {
      html: `<h3>Tercera ley: transmisión independiente</h3><p>Si seguimos dos caracteres a la vez, como el color (A/a) y la textura de la semilla (B/b, lisa/rugosa), cada gen se hereda <mark>sin depender del otro</mark>. En el cruce AaBb × AaBb aparecen cuatro fenotipos en proporción <b>9 : 3 : 3 : 1</b>. Esto se cumple cuando los genes están en cromosomas distintos.</p>
      <div class="formula" aria-label="9 amarillos lisos, 3 amarillos rugosos, 3 verdes lisos, 1 verde rugoso"><span>9 amarillo-liso</span><span class="op">:</span><span>3 amarillo-rugoso</span><span class="op">:</span><span>3 verde-liso</span><span class="op">:</span><span>1 verde-rugoso</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barras de proporción 9, 3, 3 y 1 de 16">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[9, true, "liso"], [3, true, "rugoso"], [3, false, "liso"], [1, false, "rugoso"]].map(([n, am, t], i) => `
          <rect x="${30 + i * 56}" y="${150 - n * 13}" width="40" height="${n * 13}" rx="4" fill="${am ? "#f2c200" : "#5aa832"}" stroke="var(--ink)" stroke-width="2"/>
          <text x="${50 + i * 56}" y="${142 - n * 13}" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${D}>${n}</text>
          <text x="${50 + i * 56}" y="168" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
  ],
  figura: {
    titulo: "El experimento de Mendel en tres generaciones",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Generación parental AA por aa, F1 todos Aa amarillos, F2 tres amarillos y un verde">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="15" font-weight="700" fill="var(--muted)"><text x="24" y="56">P</text><text x="24" y="156">F1</text><text x="24" y="256">F2</text></g>
      ${pea(250, 50, 24, true)}${pea(390, 50, 24, false)}
      <text x="320" y="58" text-anchor="middle" font-size="26" font-weight="700" fill="var(--red)" ${D}>×</text>
      <g ${F} font-size="14" fill="var(--ink)" text-anchor="middle"><text x="250" y="92">AA</text><text x="390" y="92">aa</text></g>
      <path d="M320 98 V 122" stroke="var(--ink)" stroke-width="2.5"/>
      ${pea(250, 150, 24, true)}${pea(390, 150, 24, true)}
      <text x="320" y="158" text-anchor="middle" font-size="26" font-weight="700" fill="var(--red)" ${D}>×</text>
      <g ${F} font-size="14" fill="var(--ink)" text-anchor="middle"><text x="250" y="192">Aa</text><text x="390" y="192">Aa</text></g>
      <path d="M320 198 V 222" stroke="var(--ink)" stroke-width="2.5"/>
      ${[[200, true, "AA"], [280, true, "Aa"], [360, true, "Aa"], [440, false, "aa"]].map(([x, a, g]) => pea(x, 250, 20, a) + `<text x="${x}" y="288" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${g}</text>`).join("")}
      <text x="510" y="256" font-size="15" font-weight="700" fill="var(--ink)" ${F}>3 : 1</text>
      <text x="470" y="156" font-size="13" fill="var(--muted)" ${F}>todos amarillos</text>
    </svg>`,
  },
  video: { id: "LXXK2l1pdv8", titulo: "Las leyes de Mendel y el cuadro de Punnett paso a paso", canal: "A Cierta Ciencia", vistas: 3904729, megusta: 106434, busqueda: "leyes de Mendel" },
  quiz: [
    { q: "Un individuo con genotipo Bb es…", o: ["homocigoto dominante", "heterocigoto", "homocigoto recesivo"], a: 1, e: "Tiene dos alelos distintos (B y b), así que es heterocigoto." },
    { q: "Cruzamos AA × aa. ¿Qué genotipo tendrá la F1?", o: ["Todos AA", "Todos Aa", "La mitad AA y la mitad aa"], a: 1, e: "Cada hijo recibe A de un progenitor y a del otro: todos Aa (primera ley, uniformidad)." },
    { q: "En el cruce Aa × Aa, ¿qué proporción de hijos mostrará el carácter recesivo?", o: ["1/4", "1/2", "3/4"], a: 0, e: "En el cuadro de Punnett sale AA, Aa, Aa y aa. Solo aa muestra el recesivo: 1 de 4." },
    { q: "Una planta de semilla amarilla puede tener genotipo…", o: ["Solo AA", "Solo Aa", "AA o Aa"], a: 2, e: "El amarillo es dominante: se ve tanto en AA como en Aa. Para saberlo se hace un cruce prueba con aa." },
    { q: "¿Qué dice la tercera ley de Mendel?", o: ["Que los híbridos son todos iguales", "Que los alelos de genes distintos se heredan de forma independiente", "Que los caracteres recesivos desaparecen"], a: 1, e: "Cada carácter se hereda sin depender del otro, de ahí la proporción 9:3:3:1." },
  ],
  feynman: ["Diferencia entre gen y alelo, y entre genotipo y fenotipo", "Qué significan dominante y recesivo", "Las tres leyes con sus proporciones (100 %, 3:1 y 9:3:3:1)", "Cómo se construye un cuadro de Punnett"],
  mapa: mapa("LEYES DE MENDEL", "var(--leaf)", [
    ["Vocabulario", "gen, alelo, genotipo, fenotipo", "var(--ink)"],
    ["1ª ley: uniformidad", "AA × aa → 100 % Aa", "var(--pen)"],
    ["2ª ley: segregación", "Aa × Aa → 3 : 1", "var(--inf)"],
    ["3ª ley: independencia", "AaBb × AaBb → 9 : 3 : 3 : 1", "var(--red)"],
  ], 240),
  tarjetas: [
    ["¿Qué es un alelo?", "Cada una de las versiones de un gen. Tenemos dos de cada gen, uno de cada progenitor."],
    ["Diferencia entre genotipo y fenotipo", "Genotipo: los alelos que tienes (Aa). Fenotipo: lo que se ve (amarillo)."],
    ["¿Qué es un heterocigoto?", "Un individuo con dos alelos distintos de un gen, por ejemplo Aa."],
    ["Proporción de la F2 en un cruce Aa × Aa", "3 dominantes : 1 recesivo (1 AA : 2 Aa : 1 aa)."],
    ["¿Qué es un cruce prueba?", "Cruzar con un homocigoto recesivo (aa) para saber si un dominante es AA o Aa."],
  ],
  familias: ["Hablad de rasgos de la familia (hoyuelos, lóbulo de la oreja pegado o suelto) y quién los tiene.", "Pedidle que os resuelva un cuadro de Punnett con el color de ojos de abuelos y padres.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Genética y evolución: leyes de Mendel, resolución de problemas de herencia y genética humana (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Simular la segregación con dos monedas (cara = A, cruz = a) y comparar 100 tiradas con el 3:1.", "Árbol genealógico de un rasgo familiar real o ficticio.", "Problemas de herencia ligada al sexo como ampliación."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Gregor Mendel, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Gregor_Mendel" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Resolver problemas de herencia con un método ordenado, incluido el cruzamiento prueba", "Reconocer la herencia intermedia y la codominancia"],
  tras: {
    "El vocabulario de la herencia": [
      { html: `<h3>Mendel y su método</h3><p>Gregor Mendel (1822-1884) era un monje agustino de Brno, en la actual República Checa, que durante ocho años cruzó unas <b>28.000 plantas de guisante</b> en el huerto de su monasterio. Su éxito se debió a un buen método: eligió una planta fácil de cultivar, que se autopoliniza y tiene muchas generaciones; estudió caracteres con <b>solo dos formas</b> muy claras (semilla amarilla o verde, lisa o rugosa, planta alta o baja); partió de <b>líneas puras</b>, que siempre daban hijos iguales a ellas; y, sobre todo, <mark>contó los resultados y usó las matemáticas</mark> para analizarlos. Publicó sus conclusiones en 1866, pero nadie les hizo caso hasta 1900, cuando otros científicos las redescubrieron. Hoy se le considera el padre de la genética.</p>` },
    ],
    "Segunda ley: segregación": [
      { html: `<h3>El cruzamiento prueba</h3><p>Una planta de semilla amarilla puede ser AA o Aa: las dos tienen el mismo fenotipo. ¿Cómo saber su genotipo? Con el <b>cruzamiento prueba</b> o retrocruzamiento: se cruza con un individuo <b>homocigoto recesivo</b> (aa), que solo puede dar gametos a. Si <mark>todos los hijos salen amarillos</mark>, la planta era AA, porque solo aporta A. Si aparecen hijos verdes, aproximadamente la mitad, la planta era Aa, porque la mitad de sus gametos llevan a. Los ganaderos y agricultores lo usan para saber si un animal o una planta es de «raza pura» antes de usarlo para criar.</p>`, video: { id: "U2F1NTV0jC4", titulo: "Cruzamiento prueba o retrocruzamiento", canal: "unProfesor", vistas: 103025 } },
    ],
    "Tercera ley: transmisión independiente": [
      { html: `<h3>Herencia intermedia y codominancia</h3><p>No siempre un alelo domina por completo sobre otro. En la <b>herencia intermedia</b>, el heterocigoto tiene un fenotipo <mark>a medio camino</mark> entre los dos homocigotos: al cruzar dondiegos de noche rojos (RR) con blancos (BB), la F1 sale rosa (RB). En la F2 las proporciones cambian: 1 roja : 2 rosas : 1 blanca, porque ahora cada genotipo tiene su propio fenotipo. En la <b>codominancia</b>, el heterocigoto muestra <b>los dos caracteres a la vez</b>, sin mezclarse: en algunas vacas, el cruce de pelo rojo y blanco da animales con pelos rojos y blancos (ruano). Los grupos sanguíneos humanos son otro ejemplo: una persona con alelos A y B es del grupo AB.</p>`, video: { id: "-G_tkEmWnBg", titulo: "Problemas de codominancia y herencia intermedia", canal: "unProfesor", vistas: 252613 } },
      { html: `<h3>Cómo resolver un problema de genética</h3><p>Casi todos los problemas se resuelven con los mismos pasos: 1) <b>elige las letras</b> y anota qué alelo es dominante (A: amarillo, a: verde); 2) escribe el <b>genotipo de los padres</b> deduciéndolo del enunciado (un recesivo siempre es aa; si un dominante tiene algún hijo recesivo, tiene que ser Aa); 3) escribe los <b>gametos</b> que puede dar cada uno; 4) haz el <b>cuadro de Punnett</b> combinando los gametos; 5) cuenta las <mark>proporciones de genotipos y de fenotipos</mark> y responde exactamente a lo que te preguntan, en fracción o en porcentaje. Recuerda que las proporciones son probabilidades: un 1/4 no significa que de cuatro hijos uno sea recesivo seguro.</p>` },
      { html: `<h3>La teoría cromosómica de la herencia</h3><p>Mendel hablaba de «factores» sin saber qué eran. A principios del siglo XX, Walter Sutton y Theodor Boveri se dieron cuenta de que los cromosomas se comportan durante la meiosis igual que los factores de Mendel: van en parejas y se separan al formar los gametos. Thomas Morgan, trabajando con la mosca de la fruta, demostró que <mark>los genes están en los cromosomas</mark>, colocados uno detrás de otro. Así se explica también una excepción a la tercera ley: los genes que están <b>muy juntos en el mismo cromosoma</b> (genes ligados) tienden a heredarse juntos, y no se cumple la proporción 9 : 3 : 3 : 1.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "En el guisante, liso (L) domina sobre rugoso (l). Se cruzan dos plantas lisas heterocigotas. ¿Qué proporciones de genotipos y fenotipos se esperan?", pasos: ["Padres: Ll × Ll. Gametos de cada uno: L y l.", "Cuadro de Punnett: LL, Ll, Ll, ll.", "Genotipos: 1 LL : 2 Ll : 1 ll.", "Fenotipos: LL y Ll son lisos; ll, rugoso."], resultado: "1 LL : 2 Ll : 1 ll; 3 lisas : 1 rugosa (75 % y 25 %)." },
    { enunciado: "Un perro de pelo negro (N, dominante sobre marrón n) se cruza con una perra marrón y tienen 3 cachorros negros y 3 marrones. ¿Cuál es el genotipo del padre?", pasos: ["La madre es marrón: tiene que ser nn y solo da gametos n.", "Han salido cachorros marrones (nn): cada uno recibió una n del padre.", "El padre es negro, así que tiene una N: su genotipo es Nn.", "Comprobación: Nn × nn da 1/2 Nn (negros) y 1/2 nn (marrones)."], resultado: "El padre es Nn (heterocigoto). Es un cruzamiento prueba." },
    { enunciado: "En el dondiego de noche (herencia intermedia), se cruzan dos plantas rosas (RB). ¿Qué flores saldrán?", pasos: ["Gametos de cada planta: R y B.", "Punnett: RR, RB, RB, BB.", "Cada genotipo tiene su fenotipo: RR rojo, RB rosa, BB blanco."], resultado: "1 roja : 2 rosas : 1 blanca (25 %, 50 %, 25 %)." },
  ],
  errores: [
    "Escribir los gametos con dos letras del mismo gen (Aa): cada gameto lleva un solo alelo de cada gen.",
    "Deducir que un individuo dominante es AA sin comprobarlo: puede ser Aa.",
    "Confundir proporción de genotipos (1 : 2 : 1) con proporción de fenotipos (3 : 1).",
    "Pensar que si salen 3 hijos dominantes, el cuarto será recesivo seguro: las proporciones son probabilidades.",
    "Aplicar 3 : 1 a la herencia intermedia: en ella la F2 es 1 : 2 : 1 también en los fenotipos.",
  ],
  ejercicios: [
    { q: "Define: gen, alelo, homocigoto y heterocigoto.", sol: "Gen: fragmento de ADN con la información de un carácter. Alelo: cada versión de un gen. Homocigoto: tiene dos alelos iguales (AA o aa). Heterocigoto: tiene dos alelos distintos (Aa)." },
    { q: "¿Qué gametos produce un individuo AA? ¿Y uno Aa? ¿Y uno AaBb?", sol: "AA: solo A. Aa: A y a (50 % cada uno). AaBb: AB, Ab, aB y ab (25 % cada uno)." },
    { q: "Cruza AA × aa e indica la F1. Después cruza dos individuos de la F1 e indica la F2.", sol: "F1: todos Aa (fenotipo dominante). F2: 1 AA : 2 Aa : 1 aa; 3 dominantes : 1 recesivo." },
    { q: "En los humanos, el lóbulo de la oreja suelto (S) domina sobre el pegado (s). Una pareja Ss × Ss, ¿qué probabilidad tiene de tener un hijo con el lóbulo pegado?", sol: "1/4 (25 %)." },
    { q: "Una planta alta (A) tiene la mitad de sus hijos bajos al cruzarla con una planta baja. ¿Cuál es su genotipo?", sol: "Aa. Si fuera AA, todos los hijos serían altos." },
    { q: "Dos ratones negros tienen una cría blanca. Si el negro domina, ¿qué genotipo tienen los padres? ¿Qué probabilidad hay de que la siguiente cría sea negra?", sol: "Los dos son Nn (cada uno aportó una n a la cría blanca). Probabilidad de cría negra: 3/4." },
    { q: "En una flor con herencia intermedia, ¿qué sale al cruzar una roja (RR) con una rosa (RB)?", sol: "1/2 RR (rojas) y 1/2 RB (rosas)." },
    { q: "¿Qué proporción fenotípica sale en AaBb × AaBb si los genes se transmiten de forma independiente?", sol: "9 : 3 : 3 : 1 (9 con los dos dominantes, 3 con el primero dominante y el segundo recesivo, 3 al revés y 1 con los dos recesivos)." },
    { q: "¿Qué probabilidad hay de obtener aabb en el cruce AaBb × AaBb?", sol: "Probabilidad de aa = 1/4 y de bb = 1/4; como son independientes, 1/4 · 1/4 = 1/16." },
    { q: "¿Por qué Mendel eligió el guisante? Indica tres razones.", sol: "Es fácil de cultivar, tiene muchas generaciones en poco tiempo y muchas semillas, se puede autopolinizar o cruzar a voluntad y tiene caracteres con dos formas muy claras." },
  ],
  quiz: [
    { q: "El cruzamiento prueba se hace con un individuo…", o: ["homocigoto dominante", "homocigoto recesivo", "heterocigoto"], a: 1, e: "Solo aporta alelos recesivos." },
    { q: "En la herencia intermedia, el heterocigoto…", o: ["se parece a uno de los padres", "tiene un fenotipo intermedio", "muestra los dos fenotipos a la vez"], a: 1, e: "Rojo × blanco → rosa." },
    { q: "El grupo sanguíneo AB es un ejemplo de…", o: ["codominancia", "herencia ligada al sexo", "mutación"], a: 0, e: "Se expresan los dos alelos." },
    { q: "Un individuo AaBb produce … tipos de gametos.", o: ["2", "4", "8"], a: 1, e: "AB, Ab, aB, ab." },
    { q: "Los genes están situados en…", o: ["los ribosomas", "los cromosomas", "la membrana"], a: 1, e: "Teoría cromosómica de la herencia." },
  ],
  tarjetas: [
    ["Herencia intermedia", "El heterocigoto tiene un fenotipo intermedio (rojo × blanco → rosa)."],
    ["Codominancia", "El heterocigoto muestra los dos fenotipos a la vez (grupo AB)."],
    ["Genes ligados", "Genes muy próximos en el mismo cromosoma que tienden a heredarse juntos."],
  ],
});
