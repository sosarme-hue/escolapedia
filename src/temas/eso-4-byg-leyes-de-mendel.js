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
