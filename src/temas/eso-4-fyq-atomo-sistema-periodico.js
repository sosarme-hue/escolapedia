// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Átomo de Bohr: núcleo y capas con electrones.
function bohr(cx, cy, capas, nucleo) {
  return `<circle cx="${cx}" cy="${cy}" r="14" fill="var(--red)"/><text x="${cx}" y="${cy + 4}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>${nucleo}</text>
    ${capas.map((n, k) => { const r = 28 + k * 20; return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="2"/>` +
      Array.from({ length: n }, (_, j) => { const a = (2 * Math.PI * j) / n - Math.PI / 2; return `<circle cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(cy + r * Math.sin(a)).toFixed(1)}" r="4.5" fill="var(--pen)"/>`; }).join(""); }).join("")}`;
}

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "El átomo y el sistema periódico",
  minutos: 40,
  objetivos: ["Describir la evolución de los modelos atómicos", "Escribir la configuración electrónica de un elemento", "Relacionar la posición en la tabla periódica con las propiedades"],
  claves: ["protón", "neutrón", "electrón", "número atómico (Z)", "configuración electrónica", "electrones de valencia"],
  pregunta: {
    texto: "El sodio explota en el agua y el neón no reacciona con nada. Si los dos están hechos de protones, neutrones y electrones, ¿por qué son tan distintos?",
    respuesta: "Por cómo se colocan sus <mark>electrones más externos</mark>. El neón tiene su última capa llena y está «tranquilo». El sodio tiene un solo electrón suelto en la última capa y lo pierde con muchísima facilidad. La <b>tabla periódica</b> ordena los elementos justo por eso.",
  },
  bloques: [
    {
      html: `<h3>Los modelos atómicos</h3><p>La idea del átomo ha ido cambiando con los experimentos. <b>Dalton</b> (1808): esferas macizas indivisibles. <b>Thomson</b> (1897): descubre el electrón, «pudin de pasas». <b>Rutherford</b> (1911): casi todo es vacío, con un <mark>núcleo pequeño y positivo</mark>. <b>Bohr</b> (1913): los electrones giran en <mark>niveles de energía</mark> fijos. Hoy usamos el modelo <b>cuántico</b>: orbitales, zonas donde es probable encontrar al electrón.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro modelos atómicos: Dalton, Thomson, Rutherford y Bohr">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="40" cy="80" r="24" fill="var(--muted)"/>
        <circle cx="103" cy="80" r="24" fill="var(--sun)" opacity=".5"/>${[[-10, -8], [8, -12], [-4, 10], [12, 6], [0, -1]].map(([x, y]) => `<circle cx="${103 + x}" cy="${80 + y}" r="3.5" fill="var(--pen)"/>`).join("")}
        <circle cx="163" cy="80" r="24" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 3"/><circle cx="163" cy="80" r="4" fill="var(--red)"/><circle cx="181" cy="68" r="3" fill="var(--pen)"/><circle cx="150" cy="96" r="3" fill="var(--pen)"/>
        <circle cx="224" cy="80" r="4" fill="var(--red)"/><circle cx="224" cy="80" r="13" fill="none" stroke="var(--line)" stroke-width="1.5"/><circle cx="224" cy="80" r="24" fill="none" stroke="var(--line)" stroke-width="1.5"/><circle cx="237" cy="80" r="3" fill="var(--pen)"/><circle cx="224" cy="56" r="3" fill="var(--pen)"/>
        <g ${F} font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="40" y="130">Dalton</text><text x="103" y="130">Thomson</text><text x="163" y="130">Rutherford</text><text x="224" y="130">Bohr</text></g>
        <g ${F} font-size="11" fill="var(--muted)" text-anchor="middle"><text x="40" y="146">1808</text><text x="103" y="146">1897</text><text x="163" y="146">1911</text><text x="224" y="146">1913</text></g>
      </svg>`,
    },
    {
      html: `<h3>Partículas y números</h3><p>En el núcleo están los <b>protones</b> (carga +) y los <b>neutrones</b> (sin carga). Alrededor, los <b>electrones</b> (carga −), casi sin masa. El <mark>número atómico Z</mark> es el número de protones y define el elemento. El <mark>número másico A</mark> = protones + neutrones. Átomos del mismo elemento con distinto número de neutrones son <b>isótopos</b>: el carbono-12 y el carbono-14.</p>
      <div class="formula"><span>A = Z + N</span><span class="op">→</span><span>¹²₆C: 6 p⁺, 6 n, 6 e⁻</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Átomo de carbono 12 con seis protones y seis neutrones en el núcleo y electrones 2 y 4 en las capas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${bohr(90, 90, [2, 4], "6+")}
        <g ${F} font-size="13" font-weight="700"><text x="170" y="60" fill="var(--red)">Z = 6</text><text x="170" y="84" fill="var(--ink)">A = 12</text><text x="170" y="108" fill="var(--pen)">6 e⁻</text><text x="170" y="132" fill="var(--muted)">2 ) 4 )</text></g>
      </svg>`,
    },
    {
      html: `<h3>La configuración electrónica</h3><p>Los electrones ocupan <b>subniveles</b> (s, p, d, f) en orden de energía creciente, siguiendo el <mark>diagrama de Moeller</mark> (las diagonales). En cada s caben 2, en cada p 6, en cada d 10 y en cada f 14.</p>
      <div class="formula"><span>Na (Z = 11): 1s² 2s² 2p⁶ <b>3s¹</b></span></div><p>El último nivel ocupado (aquí, el 3) contiene los <b>electrones de valencia</b>, que deciden cómo reacciona el átomo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de Moeller con las diagonales para ordenar los subniveles">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="13" font-weight="700" fill="var(--ink)">
          ${[["1s"], ["2s", "2p"], ["3s", "3p", "3d"], ["4s", "4p", "4d", "4f"], ["5s", "5p", "5d", "5f"], ["6s", "6p", "6d"], ["7s", "7p"]]
            .map((fila, i) => fila.map((t, j) => `<text x="${24 + j * 40}" y="${24 + i * 22}">${t}</text>`).join("")).join("")}
        </g>
        <g stroke="var(--red)" stroke-width="2" opacity=".6">
          ${Array.from({ length: 8 }, (_, k) => { const jmax = Math.min(3, Math.floor(k / 2)), i0 = k - jmax; return `<path d="M${46 + jmax * 40} ${12 + i0 * 22} L ${16} ${30 + k * 22}"/>`; }).join("")}
        </g>
        <text x="200" y="40" font-size="12" font-weight="700" fill="var(--muted)" ${F}>s: 2</text><text x="200" y="58" font-size="12" font-weight="700" fill="var(--muted)" ${F}>p: 6</text><text x="200" y="76" font-size="12" font-weight="700" fill="var(--muted)" ${F}>d: 10</text><text x="200" y="94" font-size="12" font-weight="700" fill="var(--muted)" ${F}>f: 14</text>
      </svg>`,
    },
    {
      html: `<h3>La tabla periódica</h3><p>Mendeléiev (1869) ordenó los elementos y dejó huecos para los que faltaban. Hoy se ordenan por <b>Z creciente</b> en <mark>7 periodos</mark> (filas: número de capas) y <mark>18 grupos</mark> (columnas: mismos electrones de valencia y propiedades parecidas). A la izquierda, los <b>metales</b>; a la derecha, los <b>no metales</b>; en la última columna, los <b>gases nobles</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de la tabla periódica con metales, no metales y gases nobles">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${(() => { let o = ""; const w = 13, x0 = 13, y0 = 20; const cols = [[1, 18], [1, 2, 13, 14, 15, 16, 17, 18], [1, 2, 13, 14, 15, 16, 17, 18]]; for (let p = 1; p <= 7; p++) { const cs = p <= 3 ? cols[p - 1] : Array.from({ length: 18 }, (_, i) => i + 1); for (const g of cs) { const nm = (g >= 14 && g <= 17 && g - 13 >= p - 1) || (p === 1 && g === 1); const c = g === 18 ? "var(--inf)" : nm ? "var(--leaf)" : g <= 2 ? "var(--red)" : g <= 12 ? "var(--sun)" : "var(--pen)"; o += `<rect x="${x0 + (g - 1) * w}" y="${y0 + (p - 1) * w}" width="${w - 2}" height="${w - 2}" rx="2" fill="${c}" opacity=".85"/>`; } } return o; })()}
        <g ${F} font-size="11" font-weight="700"><rect x="14" y="128" width="10" height="10" fill="var(--red)"/><text x="28" y="137" fill="var(--ink)">alcalinos y alcalinotérreos</text><rect x="14" y="144" width="10" height="10" fill="var(--sun)"/><text x="28" y="153" fill="var(--ink)">metales de transición</text>
        <rect x="150" y="144" width="10" height="10" fill="var(--leaf)"/><text x="164" y="153" fill="var(--ink)">no metales</text><rect x="150" y="160" width="10" height="10" fill="var(--inf)"/><text x="164" y="169" fill="var(--ink)">gases nobles</text><rect x="14" y="160" width="10" height="10" fill="var(--pen)"/><text x="28" y="169" fill="var(--ink)">otros metales</text></g>
      </svg>`,
    },
    {
      html: `<h3>Propiedades periódicas</h3><p>Al recorrer la tabla, algunas propiedades cambian con regularidad. El <b>radio atómico</b> <mark>aumenta hacia abajo</mark> (más capas) y <mark>disminuye hacia la derecha</mark> (más protones atraen más). La <b>energía de ionización</b> y la <b>electronegatividad</b> hacen lo contrario: son máximas arriba a la derecha (flúor) y mínimas abajo a la izquierda (cesio, francio).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Flechas: el radio atómico crece hacia abajo y a la izquierda; la electronegatividad crece hacia arriba y a la derecha">
        <defs><marker id="at1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker><marker id="at2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--leaf)"/></marker></defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="30" width="180" height="110" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <path d="M200 50 L 60 120" stroke="var(--red)" stroke-width="4" marker-end="url(#at1)"/>
        <path d="M60 50 H 200" stroke="var(--leaf)" stroke-width="4" marker-end="url(#at2)"/>
        <g ${F} font-size="12" font-weight="700"><text x="130" y="160" text-anchor="middle" fill="var(--red)">radio atómico ↙</text><text x="130" y="24" text-anchor="middle" fill="var(--leaf)">electronegatividad →  ↑</text>
        <circle cx="70" cy="110" r="14" fill="var(--red)" opacity=".4"/><text x="70" y="114" text-anchor="middle" fill="var(--ink)">Cs</text><circle cx="200" cy="66" r="6" fill="var(--leaf)" opacity=".6"/><text x="200" y="90" text-anchor="middle" fill="var(--ink)">F</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "De la configuración a la tabla",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Tres ejemplos: sodio, cloro y neón, con su configuración, grupo y comportamiento">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Na · Z = 11", "1s² 2s² 2p⁶ 3s¹", "grupo 1 · periodo 3", "pierde 1 e⁻ → Na⁺", "var(--red)"], ["Cl · Z = 17", "1s² 2s² 2p⁶ 3s² 3p⁵", "grupo 17 · periodo 3", "gana 1 e⁻ → Cl⁻", "var(--leaf)"], ["Ne · Z = 10", "1s² 2s² 2p⁶", "grupo 18 · periodo 2", "capa llena: estable", "var(--inf)"]]
        .map(([n, c1, g, r, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="58" text-anchor="middle" font-size="22" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="98" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${c1}</text>
          <text x="${115 + i * 206}" y="130" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${g}</text>
          <text x="${115 + i * 206}" y="170" text-anchor="middle" font-size="14" fill="var(--muted)" ${F}>${r}</text>`).join("")}
    </svg>`,
  },
  video: { id: "4MMvumKmqs4", titulo: "Propiedades periódicas. Configuración electrónica", canal: "Amigos de la Química", vistas: 6058421, megusta: 0, busqueda: "configuración electrónica sistema periódico" },
  quiz: [
    { q: "¿Quién propuso que el átomo tiene un núcleo pequeño y positivo?", o: ["Dalton", "Rutherford", "Thomson"], a: 1, e: "Con su experimento de la lámina de oro, Rutherford vio que casi todo el átomo es vacío y la carga positiva está en el núcleo." },
    { q: "Un átomo tiene Z = 8 y A = 16. ¿Cuántos neutrones tiene?", o: ["8", "16", "24"], a: 0, e: "N = A − Z = 16 − 8 = 8 neutrones." },
    { q: "¿Cuál es la configuración electrónica del magnesio (Z = 12)?", o: ["1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁸", "1s² 2s² 2p⁶ 3p²"], a: 0, e: "Se llenan 1s, 2s, 2p (10 electrones) y los 2 que faltan van al 3s." },
    { q: "Los elementos de un mismo grupo…", o: ["tienen el mismo número de capas", "tienen los mismos electrones de valencia y propiedades parecidas", "tienen la misma masa"], a: 1, e: "Las columnas (grupos) reúnen elementos con la misma configuración externa." },
    { q: "¿Qué elemento tiene mayor radio atómico?", o: ["Flúor", "Potasio", "Neón"], a: 1, e: "El potasio está más abajo (periodo 4) y a la izquierda: más capas y menos atracción del núcleo." },
  ],
  examen: [
    { q: "Los isótopos de un elemento se diferencian en…", o: ["el número de protones", "el número de neutrones", "el número de electrones de valencia"], a: 1, e: "Mismo Z (mismo elemento), distinto número de neutrones y, por tanto, distinto A." },
    { q: "Un elemento con configuración 1s² 2s² 2p⁶ 3s² 3p⁴ está en…", o: ["periodo 3, grupo 16", "periodo 4, grupo 6", "periodo 3, grupo 4"], a: 0, e: "Última capa n = 3 (periodo 3) con 6 electrones de valencia s² p⁴: grupo 16 (el azufre)." },
    { q: "¿Por qué los gases nobles casi no reaccionan?", o: ["Porque son muy ligeros", "Porque tienen su última capa completa", "Porque no tienen electrones"], a: 1, e: "Con ocho electrones en la última capa (dos el helio) son muy estables y no necesitan ganar ni perder electrones." },
  ],
  feynman: ["Qué aportó cada modelo atómico y qué experimento lo cambió", "Qué son Z, A e isótopo", "Cómo se escribe una configuración electrónica con el diagrama de Moeller", "Qué indican el periodo y el grupo de un elemento", "Por qué el radio atómico crece hacia abajo"],
  mapa: mapa("EL ÁTOMO", "var(--eso)", [
    ["Modelos", "Dalton · Thomson · Rutherford · Bohr", "var(--ink)"],
    ["Partículas", "p⁺ y n en el núcleo · e⁻ fuera", "var(--red)"],
    ["Configuración", "1s 2s 2p 3s 3p 4s 3d…", "var(--pen)"],
    ["Tabla periódica", "7 periodos · 18 grupos", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["¿Qué indica el número atómico Z?", "El número de protones del núcleo. Define de qué elemento se trata."],
    ["¿Qué son los isótopos?", "Átomos del mismo elemento (mismo Z) con distinto número de neutrones."],
    ["Orden de llenado de los primeros subniveles", "1s 2s 2p 3s 3p 4s 3d 4p 5s…"],
    ["Electrones de valencia", "Los del último nivel ocupado. Determinan las propiedades químicas."],
    ["Tendencia del radio atómico", "Aumenta hacia abajo en un grupo y disminuye hacia la derecha en un periodo."],
  ],
  familias: ["Buscad en casa objetos hechos de un solo elemento (aluminio, cobre, carbono del lápiz) y localizadlos en la tabla.", "Pedidle que escriba la configuración electrónica del elemento de su número favorito.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La materia: modelos atómicos, configuración electrónica, sistema periódico y propiedades de los elementos (RD 217/2022, Física y Química 4º).",
    ideas: ["Simulación PhET «Construye un átomo» para practicar Z, A e isótopos.", "Jugar a «adivina el elemento» a partir de su configuración.", "Línea del tiempo de modelos atómicos en el aula con el experimento clave de cada uno."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Tabla periódica de los elementos, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Tabla_peri%C3%B3dica_de_los_elementos" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Calcular la masa atómica media a partir de los isótopos", "Predecir el ion que forma un elemento a partir de su configuración electrónica"],
  tras: {
    "Partículas y números": [
      { html: `<h3>Isótopos y masa atómica</h3><p>Los <b>isótopos</b> son átomos del mismo elemento (mismo número atómico Z, mismos protones) con <mark>distinto número de neutrones</mark>, y por tanto distinto número másico A. El carbono-12 tiene 6 neutrones y el carbono-14, 8. Se escriben con A arriba a la izquierda del símbolo: ¹²C, ¹⁴C. Todos se comportan igual químicamente, pero algunos son radiactivos y se usan en medicina o para datar fósiles. La <b>masa atómica</b> de la tabla periódica es la <b>media ponderada</b> de las masas de los isótopos según su abundancia en la naturaleza; por eso no es un número entero. Se mide en <b>unidades de masa atómica</b> (u), la doceava parte de la masa del carbono-12.</p>`, video: { id: "kvhqUBZjEnY", titulo: "Isótopos: qué son, tipos y ejemplos", canal: "Susi Profe", vistas: 816401 } },
      { html: `<h3>Los iones</h3><p>Un átomo es neutro porque tiene tantos electrones como protones. Si <b>gana o pierde electrones</b> se convierte en un <b>ion</b>: si pierde electrones queda con carga positiva y se llama <mark>catión</mark> (Na⁺, Ca²⁺); si gana electrones queda con carga negativa y se llama <mark>anión</mark> (Cl⁻, O²⁻). El número de protones nunca cambia en una reacción química: cambiar los protones sería cambiar de elemento. Para un ion: electrones = Z − carga. Por ejemplo, el Mg²⁺ (Z = 12) tiene 12 protones y 12 − 2 = 10 electrones.</p>`, video: { id: "dLq5HktWK5g", titulo: "Iones: aniones y cationes", canal: "Susi Profe", vistas: 1039910 } },
    ],
    "La configuración electrónica": [
      { html: `<h3>Electrones de valencia y estabilidad</h3><p>Los electrones del último nivel, los <b>electrones de valencia</b>, deciden cómo se comporta un elemento. Los <b>gases nobles</b> tienen su última capa completa (ns² np⁶, ocho electrones; el helio, dos) y casi no reaccionan. Los demás átomos tienden a ganar, perder o compartir electrones para <mark>parecerse al gas noble más cercano</mark>. El sodio (1s² 2s² 2p⁶ 3s¹) pierde su único electrón de valencia y queda como el neón: Na⁺. El cloro (…3s² 3p⁵) gana uno y queda como el argón: Cl⁻. Así, la configuración electrónica permite predecir el ion de cada elemento.</p>${AMP.tabla(["Grupo", "e⁻ de valencia", "Tendencia", "Ion típico"], [["1 (alcalinos)", "1", "pierde 1", "Na⁺, K⁺"], ["2 (alcalinotérreos)", "2", "pierde 2", "Mg²⁺, Ca²⁺"], ["16 (anfígenos)", "6", "gana 2", "O²⁻, S²⁻"], ["17 (halógenos)", "7", "gana 1", "F⁻, Cl⁻"], ["18 (gases nobles)", "8", "estable", "—"]])}` },
    ],
    "La tabla periódica": [
      { html: `<h3>Metales, no metales y semimetales</h3><p>La tabla se divide en tres grandes zonas. Los <b>metales</b>, a la izquierda y en el centro, son la mayoría: brillan, conducen el calor y la electricidad, son dúctiles y maleables y tienden a <mark>perder electrones</mark> y formar cationes. Los <b>no metales</b>, arriba a la derecha (C, N, O, F, P, S, Cl…), no conducen bien, muchos son gases a temperatura ambiente y tienden a <b>ganar electrones</b>. Entre ambos, en escalera, están los <b>semimetales</b> (B, Si, Ge, As…), con propiedades intermedias: el silicio es un semiconductor y es la base de los chips. El hidrógeno es un caso especial: está en el grupo 1 pero es un no metal.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Indica protones, neutrones y electrones del ⁵⁶Fe³⁺ (Z = 26).", pasos: ["Protones = Z = 26.", "Neutrones = A − Z = 56 − 26 = 30.", "Electrones: el ion tiene carga +3, ha perdido 3 electrones: 26 − 3 = 23."], resultado: "26 protones, 30 neutrones y 23 electrones." },
    { enunciado: "El cloro tiene dos isótopos: cloro-35 (75,8 %) y cloro-37 (24,2 %). Calcula su masa atómica media.", pasos: ["La media ponderada multiplica cada masa por su abundancia en tanto por uno.", "35 · 0,758 = 26,53 y 37 · 0,242 = 8,95.", "Se suman: 26,53 + 8,95 = 35,48."], resultado: "Masa atómica del cloro ≈ 35,5 u." },
    { enunciado: "Escribe la configuración electrónica del azufre (Z = 16), indica su grupo y periodo y el ion que forma.", pasos: ["Se llenan los niveles en el orden del diagrama de Moeller: 1s² 2s² 2p⁶ 3s² 3p⁴ (2 + 2 + 6 + 2 + 4 = 16).", "El último nivel es el 3: periodo 3. Tiene 6 electrones de valencia (3s² 3p⁴): grupo 16.", "Le faltan 2 electrones para tener 8: gana 2."], resultado: "1s² 2s² 2p⁶ 3s² 3p⁴; periodo 3, grupo 16; forma S²⁻." },
  ],
  errores: [
    "Pensar que un ion positivo ha ganado protones: lo que cambia son los electrones.",
    "Confundir número atómico (Z, protones) con número másico (A, protones + neutrones).",
    "Creer que los isótopos son elementos distintos: tienen el mismo Z y son el mismo elemento.",
    "Llenar los orbitales en orden 3d antes que 4s: el 4s se llena primero.",
    "Decir que la masa atómica de la tabla es el número másico de un átomo: es una media de isótopos.",
  ],
  ejercicios: [
    { q: "Completa: el ¹⁹F (Z = 9) tiene … protones, … neutrones y … electrones.", sol: "9 protones, 19 − 9 = 10 neutrones y 9 electrones (es neutro)." },
    { q: "¿Cuántos electrones tienen el O²⁻ (Z = 8) y el Al³⁺ (Z = 13)?", sol: "O²⁻: 8 + 2 = 10 electrones. Al³⁺: 13 − 3 = 10 electrones. Los dos tienen la configuración del neón." },
    { q: "¿Son isótopos ¹⁴C y ¹⁴N? ¿Por qué?", sol: "No. Tienen el mismo número másico (14) pero distinto Z (6 y 7): son elementos distintos." },
    { q: "El boro tiene un 20 % de boro-10 y un 80 % de boro-11. Calcula su masa atómica.", sol: "10 · 0,20 + 11 · 0,80 = 2 + 8,8 = 10,8 u." },
    { q: "Escribe la configuración electrónica del potasio (Z = 19).", sol: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. El 4s se llena antes que el 3d." },
    { q: "Un elemento tiene la configuración 1s² 2s² 2p⁶ 3s² 3p⁵. Indica Z, periodo, grupo y si es metal o no metal.", sol: "Z = 17 (cloro). Periodo 3, grupo 17 (halógenos). Es un no metal; tiende a ganar 1 electrón." },
    { q: "Ordena de menor a mayor radio atómico: Na, Cl, K.", sol: "Cl < Na < K. En un periodo el radio disminuye hacia la derecha (Cl < Na) y en un grupo aumenta hacia abajo (Na < K)." },
    { q: "¿Qué tienen en común el Li, el Na y el K? Explícalo con su configuración.", sol: "Están en el grupo 1: todos acaban en ns¹, con 1 electrón de valencia. Por eso reaccionan de forma parecida y forman iones +1." },
    { q: "¿Qué ventaja tuvo el modelo de Rutherford sobre el de Thomson? ¿Qué problema dejó sin resolver?", sol: "Explicó que la mayor parte del átomo está vacía y que la carga positiva está concentrada en un núcleo pequeño. No explicaba por qué los electrones no caen al núcleo; Bohr lo resolvió con órbitas de energía fija." },
    { q: "Clasifica como metal, no metal o semimetal: Fe, S, Si, Ca, Br.", sol: "Metales: Fe y Ca. No metales: S y Br. Semimetal: Si." },
  ],
  quiz: [
    { q: "Dos isótopos de un elemento se diferencian en el número de…", o: ["protones", "neutrones", "electrones de valencia"], a: 1, e: "Mismo Z, distinto A." },
    { q: "Un anión es un átomo que…", o: ["ha ganado electrones", "ha perdido electrones", "ha ganado protones"], a: 0, e: "Queda con carga negativa." },
    { q: "¿Cuántos electrones de valencia tienen los halógenos?", o: ["1", "7", "8"], a: 1, e: "Acaban en ns² np⁵." },
    { q: "¿Qué ion forma el calcio (grupo 2)?", o: ["Ca²⁺", "Ca²⁻", "Ca⁺"], a: 0, e: "Pierde sus 2 electrones de valencia." },
    { q: "El silicio es un…", o: ["metal", "no metal", "semimetal"], a: 2, e: "Semiconductor, base de los chips." },
  ],
  tarjetas: [
    ["¿Qué son los isótopos?", "Átomos del mismo elemento con distinto número de neutrones."],
    ["Catión y anión", "Catión: ion positivo (ha perdido e⁻). Anión: ion negativo (ha ganado e⁻)."],
    ["Electrones de valencia", "Los del último nivel; deciden cómo reacciona un elemento."],
  ],
});
