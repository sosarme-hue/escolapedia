// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Persona en un árbol genealógico: cuadrado (hombre) o círculo (mujer); afectado relleno, portadora con punto.
function ind(x, y, sexo, estado) {
  const fill = estado === "a" ? "var(--red)" : "var(--card)";
  const forma = sexo === "h" ? `<rect x="${x - 11}" y="${y - 11}" width="22" height="22" fill="${fill}" stroke="var(--ink)" stroke-width="2"/>` : `<circle cx="${x}" cy="${y}" r="11" fill="${fill}" stroke="var(--ink)" stroke-width="2"/>`;
  return forma + (estado === "p" ? `<circle cx="${x}" cy="${y}" r="4" fill="var(--red)"/>` : "");
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "Genética humana",
  minutos: 40,
  objetivos: ["Interpretar el cariotipo humano y la determinación del sexo", "Resolver problemas de herencia ligada al sexo y de grupos sanguíneos", "Conocer enfermedades genéticas, mutaciones y árboles genealógicos"],
  claves: ["cariotipo", "cromosomas sexuales", "herencia ligada al sexo", "codominancia", "mutación", "árbol genealógico"],
  pregunta: {
    texto: "El daltonismo afecta a 1 de cada 12 hombres, pero solo a 1 de cada 200 mujeres. Si es un gen, ¿por qué no le toca a todos por igual?",
    respuesta: "Porque el gen está en el <mark>cromosoma X</mark>. Los hombres (XY) tienen un solo X: si ese X lleva el gen, son daltónicos. Las mujeres (XX) tienen dos: necesitan <b>el gen en los dos X</b> para serlo. Con uno solo son <b>portadoras</b>, ven bien pero pueden transmitirlo.",
  },
  bloques: [
    {
      html: `<h3>El cariotipo humano</h3><p>El <b>cariotipo</b> es el conjunto de cromosomas de una persona ordenados por parejas y tamaños. Tenemos <b>23 parejas</b>: 22 de <b>autosomas</b> y 1 de <mark>cromosomas sexuales</mark>. Las mujeres tienen <b>XX</b> y los hombres <b>XY</b>. El sexo lo decide el espermatozoide: si aporta un X, nace una niña; si aporta un Y, un niño. Siempre hay un 50 % de probabilidad de cada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuadro de cruce: madre XX y padre XY dan 50 por ciento de hijas XX y 50 por ciento de hijos XY">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="150" y="30" font-size="13" fill="var(--pen)">padre</text><text x="40" y="104" font-size="13" fill="var(--red)">madre</text>
          <text x="124" y="54" font-size="16" fill="var(--pen)">X</text><text x="190" y="54" font-size="16" fill="var(--pen)">Y</text>
          <text x="76" y="94" font-size="16" fill="var(--red)">X</text><text x="76" y="144" font-size="16" fill="var(--red)">X</text>
          ${[0, 1].map((i) => [0, 1].map((j) => `<rect x="${92 + j * 66}" y="${66 + i * 50}" width="62" height="46" rx="6" fill="${j ? "var(--pen)" : "var(--red)"}" opacity=".18"/><text x="${123 + j * 66}" y="${96 + i * 50}" font-size="16" fill="var(--ink)">X${j ? "Y" : "X"}</text>`).join("")).join("")}
        </g>
      </svg>`,
    },
    {
      html: `<h3>Herencia ligada al sexo</h3><p>Algunos genes están en el cromosoma X y no tienen pareja en el Y. Las enfermedades recesivas en el X, como el <b>daltonismo</b> y la <b>hemofilia</b> (la sangre no coagula bien), son <mark>mucho más frecuentes en hombres</mark>. Se escribe Xᵈ para el alelo del daltonismo. Una madre portadora (X Xᵈ) y un padre sano (X Y) tienen un <b>50 % de probabilidad</b> de que cada hijo varón sea daltónico.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cruce de madre portadora y padre sano: hija sana, hija portadora, hijo sano e hijo daltónico">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${ind(90, 34, "m", "p")}${ind(170, 34, "h", "s")}<path d="M101 34 H 159 M130 34 V 70 M50 70 H 210" stroke="var(--ink)" stroke-width="2" fill="none"/>
        ${[[50, "m", "s", "X X"], [103, "m", "p", "X Xᵈ"], [157, "h", "s", "X Y"], [210, "h", "a", "Xᵈ Y"]].map(([x, s, e, g]) => `<path d="M${x} 70 V 92" stroke="var(--ink)" stroke-width="2"/>${ind(x, 104, s, e)}<text x="${x}" y="138" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${g}</text>`).join("")}
        <g ${F} font-size="10" text-anchor="middle" fill="var(--muted)"><text x="50" y="154">sana</text><text x="103" y="154">portadora</text><text x="157" y="154">sano</text><text x="210" y="154" fill="var(--red)">daltónico</text></g>
      </svg>`,
    },
    {
      html: `<h3>Los grupos sanguíneos</h3><p>El grupo sanguíneo ABO depende de un gen con <b>tres alelos</b>: Iᴬ, Iᴮ e i. Los alelos Iᴬ e Iᴮ son <mark>codominantes</mark> (si están juntos, se expresan los dos: grupo AB) y los dos dominan sobre i. Así, una persona del grupo A puede ser IᴬIᴬ o Iᴬi, y una del grupo O solo puede ser ii. Por eso dos padres A y B pueden tener hijos de cualquier grupo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla de genotipos para cada grupo sanguíneo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["A", "IᴬIᴬ · Iᴬi", "var(--red)"], ["B", "IᴮIᴮ · Iᴮi", "var(--pen)"], ["AB", "IᴬIᴮ", "var(--inf)"], ["O", "ii", "var(--leaf)"]].map(([g, t, c], i) => `<circle cx="44" cy="${30 + i * 38}" r="15" fill="${c}"/><text x="44" y="${35 + i * 38}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>${g}</text><text x="76" y="${36 + i * 38}" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Mutaciones y enfermedades genéticas</h3><p>Una <b>mutación</b> es un cambio en el ADN. Puede ser <b>génica</b> (cambia una o pocas bases de un gen, como en la fibrosis quística o la anemia falciforme) o <b>cromosómica</b> (cambia el número o la forma de los cromosomas). El <mark>síndrome de Down</mark> se debe a un cromosoma 21 de más: es una <b>trisomía</b>. Las mutaciones pueden ser perjudiciales, neutras o, a veces, beneficiosas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pareja de cromosomas normal y trisomía con tres cromosomas 21">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[50, 2, "normal"], [170, 3, "trisomía 21"]].map(([x, n, t]) => Array.from({ length: n }, (_, i) => `<rect x="${x + i * 22}" y="50" width="14" height="60" rx="7" fill="${i === 2 ? "var(--red)" : "var(--pen)"}"/><circle cx="${x + 7 + i * 22}" cy="70" r="4" fill="var(--paper)"/>`).join("") + `<text x="${x + (n * 22 - 8) / 2}" y="138" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Árboles genealógicos</h3><p>Un <b>árbol genealógico</b> muestra cómo se transmite un carácter en una familia. Los <b>cuadrados</b> son hombres y los <b>círculos</b>, mujeres; los rellenos están afectados. Pistas: si dos padres sanos tienen un hijo afectado, el carácter es <mark>recesivo</mark> (los dos eran portadores). Si afecta casi solo a varones y pasa por madres sanas, sospecha de <mark>herencia ligada al X</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol genealógico de tres generaciones con un carácter recesivo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g stroke="var(--ink)" stroke-width="2" fill="none"><path d="M101 30 H 159 M130 30 V 60 M80 60 H 180 M80 60 V 78 M180 60 V 78 M191 90 H 219 M205 90 V 120 M180 120 H 230 M180 120 V 136 M230 120 V 136"/></g>
        ${ind(90, 30, "h", "s")}${ind(170, 30, "m", "s")}${ind(80, 90, "m", "s")}${ind(180, 90, "h", "s")}${ind(230, 90, "m", "s")}${ind(180, 148, "h", "a")}${ind(230, 148, "m", "s")}
        <g ${F} font-size="11" font-weight="700" fill="var(--muted)"><text x="10" y="34">I</text><text x="10" y="94">II</text><text x="10" y="152">III</text></g>
        <text x="110" y="152" font-size="11" font-weight="700" fill="var(--red)" ${F}>afectado →</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Tipos de herencia en humanos",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Herencia autosómica dominante, autosómica recesiva y ligada al X con un ejemplo">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Autosómica dominante", "basta un alelo", "aparece en cada generación", "ej.: acondroplasia", "var(--red)"], ["Autosómica recesiva", "hacen falta dos alelos", "puede saltar generaciones", "ej.: fibrosis quística", "var(--pen)"], ["Ligada al X", "gen en el cromosoma X", "más frecuente en hombres", "ej.: daltonismo, hemofilia", "var(--leaf)"]]
        .map(([n, a, b, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="58" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="104" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="128" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="180" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "OJVHD1AruwU", titulo: "Ejercicios de genética de hemofilia y daltonismo", canal: "unProfesor", vistas: 261431, megusta: 0, busqueda: "herencia ligada al sexo genética humana" },
  quiz: [
    { q: "¿Cuántas parejas de autosomas tiene el ser humano?", o: ["22", "23", "46"], a: 0, e: "23 parejas en total: 22 de autosomas y 1 de cromosomas sexuales." },
    { q: "¿Quién determina el sexo del bebé?", o: ["El óvulo", "El espermatozoide", "Los dos por igual"], a: 1, e: "El óvulo siempre aporta X; el espermatozoide puede aportar X o Y." },
    { q: "¿Por qué el daltonismo es más frecuente en hombres?", o: ["Porque tienen un solo cromosoma X", "Porque tienen más genes", "Porque es dominante"], a: 0, e: "Con un solo X, un alelo recesivo ya se manifiesta." },
    { q: "Una persona del grupo O tiene genotipo…", o: ["IᴬIᴮ", "Iᴬi", "ii"], a: 2, e: "El alelo i es recesivo: solo da grupo O si está en doble dosis." },
    { q: "El síndrome de Down se debe a…", o: ["una mutación en el cromosoma X", "un cromosoma 21 de más", "un virus"], a: 1, e: "Es una trisomía del par 21: tres copias en lugar de dos." },
  ],
  examen: [
    { q: "Madre portadora de hemofilia (X Xʰ) y padre sano (X Y). ¿Probabilidad de que una hija sea hemofílica?", o: ["0 %", "25 %", "50 %"], a: 0, e: "Todas las hijas reciben el X sano del padre: pueden ser portadoras, pero no hemofílicas." },
    { q: "Padre AB y madre O. ¿Qué grupos pueden tener sus hijos?", o: ["A o B", "AB u O", "Solo O"], a: 0, e: "IᴬIᴮ × ii → Iᴬi (grupo A) o Iᴮi (grupo B)." },
    { q: "Dos padres sanos tienen un hijo con una enfermedad. Lo más probable es que sea…", o: ["dominante", "recesiva", "imposible"], a: 1, e: "Los padres eran portadores sanos de un alelo recesivo." },
  ],
  feynman: ["Qué es un cariotipo y cómo se determina el sexo", "Por qué el daltonismo afecta más a los hombres", "Cómo funcionan los alelos de los grupos sanguíneos", "La diferencia entre mutación génica y cromosómica", "Cómo se lee un árbol genealógico"],
  mapa: mapa("GENÉTICA HUMANA", "var(--eso)", [
    ["Cariotipo", "22 pares + XX / XY", "var(--ink)"],
    ["Ligada al sexo", "daltonismo · hemofilia", "var(--leaf)"],
    ["Grupos ABO", "Iᴬ = Iᴮ > i", "var(--red)"],
    ["Mutaciones", "génicas · cromosómicas", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["¿Qué son los autosomas?", "Los 22 pares de cromosomas que no determinan el sexo."],
    ["Genotipos posibles del grupo A", "IᴬIᴬ e Iᴬi."],
    ["¿Qué es una mujer portadora?", "Una mujer sana que tiene un alelo recesivo en uno de sus X y puede transmitirlo."],
    ["¿Qué es la codominancia?", "Cuando dos alelos distintos se expresan a la vez, como Iᴬ e Iᴮ en el grupo AB."],
    ["¿Qué es una trisomía?", "Tener tres copias de un cromosoma en lugar de dos (ej.: trisomía 21)."],
  ],
  familias: ["Dibujad juntos el árbol genealógico de la familia con un rasgo sencillo (hoyuelos, lóbulo de la oreja suelto).", "Si sabéis vuestros grupos sanguíneos, comprobad qué grupos podrían tener los hijos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Genética y evolución: herencia en la especie humana, herencia ligada al sexo, grupos sanguíneos, mutaciones y enfermedades genéticas (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Test de Ishihara para hablar del daltonismo (sin señalar a nadie).", "Cariotipo recortable para ordenar por parejas y detectar anomalías.", "Problemas de árboles genealógicos por equipos con tarjetas de pistas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Herencia ligada al sexo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Herencia_ligada_al_sexo" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Resolver problemas de grupos sanguíneos y de herencia ligada al sexo", "Explicar las alteraciones cromosómicas y el valor del diagnóstico genético"],
  tras: {
    "El cariotipo humano": [
      { html: `<h3>Caracteres humanos y herencia</h3><p>Algunos caracteres humanos dependen de un solo gen y siguen las leyes de Mendel: la capacidad de enrollar la lengua, el lóbulo de la oreja suelto o pegado, los hoyuelos o la sensibilidad a ciertos sabores amargos. Pero la mayoría de rasgos, como la <b>altura</b>, el <b>color de la piel</b> o el de los ojos, dependen de <mark>muchos genes a la vez</mark> (herencia poligénica) y además del <b>ambiente</b>: la alimentación influye en la altura y el sol en el color de la piel. Por eso no hay solo «altos» y «bajos», sino una gama continua. El fenotipo es siempre el resultado del genotipo y del ambiente.</p>` },
    ],
    "Herencia ligada al sexo": [
      { html: `<h3>Daltonismo y hemofilia</h3><p>El <b>daltonismo</b> (dificultad para distinguir el rojo del verde) y la <b>hemofilia</b> (la sangre no coagula bien) se deben a alelos recesivos situados en el cromosoma X. Se escriben así: Xᴰ (visión normal) y Xᵈ (daltonismo). Una mujer necesita <b>dos alelos</b> recesivos para padecerlo (XᵈXᵈ); si tiene uno (XᴰXᵈ), ve bien pero es <mark>portadora</mark> y puede transmitirlo. Un hombre solo tiene un X, así que con un alelo recesivo (XᵈY) ya lo padece. Por eso estas enfermedades son mucho más frecuentes en los hombres. Además, un padre nunca transmite su X a sus hijos varones (les da el Y): los hijos varones heredan el X de la madre.</p>` },
    ],
    "Los grupos sanguíneos": [
      { html: `<h3>Problemas de grupos sanguíneos</h3><p>El sistema ABO depende de un gen con <b>tres alelos</b>: Iᴬ, Iᴮ e i. Iᴬ e Iᴮ son <b>codominantes</b> entre sí y los dos dominan sobre i. Así, el grupo A puede ser IᴬIᴬ o Iᴬi; el B, IᴮIᴮ o Iᴮi; el AB es IᴬIᴮ; y el O solo puede ser <mark>ii</mark>. Aparte está el <b>factor Rh</b>: Rh+ es dominante sobre Rh−. Para resolver un problema, deduce primero los genotipos: si unos padres A y B tienen un hijo O, los dos deben llevar el alelo i (Iᴬi × Iᴮi). En las transfusiones importa la compatibilidad: el grupo O− es donante universal y el AB+ es receptor universal.</p>`, video: { id: "HqwsNO2dwak", titulo: "Cómo se heredan los grupos sanguíneos. Factor Rh", canal: "Arriba la Ciencia", vistas: 654699 } },
    ],
    "Mutaciones y enfermedades genéticas": [
      { html: `<h3>Alteraciones en el número de cromosomas</h3><p>A veces, durante la meiosis, una pareja de cromosomas no se separa bien y se forma un gameto con un cromosoma de más o de menos. El embrión resultante tendrá 47 o 45 cromosomas. La más conocida es el <b>síndrome de Down</b> o <mark>trisomía 21</mark>: hay tres copias del cromosoma 21. Produce discapacidad intelectual variable, rasgos físicos característicos y a veces problemas de corazón; con apoyo, muchas personas con síndrome de Down estudian, trabajan y viven con autonomía. Su probabilidad aumenta con la edad de la madre. Otras alteraciones afectan a los cromosomas sexuales: el <b>síndrome de Turner</b> (mujeres X0) y el de <b>Klinefelter</b> (hombres XXY).</p>`, video: { id: "TEXcnUF3qZY", titulo: "¿Qué es el síndrome de Down?", canal: "TEDI1419", vistas: 1058155 } },
      { html: `<h3>Diagnóstico y consejo genético</h3><p>Hoy se pueden detectar muchas enfermedades genéticas. Durante el embarazo, el <b>diagnóstico prenatal</b> usa análisis de sangre de la madre, ecografías y, si hace falta, el estudio del líquido amniótico o de la placenta para ver el cariotipo del feto. A los recién nacidos se les hace la <b>prueba del talón</b>, que detecta enfermedades metabólicas tratables. El <b>consejo genético</b> lo ofrecen especialistas a familias con antecedentes de una enfermedad: estudian su árbol genealógico, calculan la probabilidad de transmitirla y explican las opciones. Estas técnicas plantean cuestiones éticas, como la <mark>privacidad de los datos genéticos</mark>, que la ley protege.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Un hombre de grupo A cuyo padre era O tiene hijos con una mujer de grupo B cuya madre era O. ¿Qué grupos pueden tener sus hijos?", pasos: ["El hombre es A y recibió i de su padre O: es Iᴬi. La mujer es B y recibió i de su madre: es Iᴮi.", "Gametos: él da Iᴬ o i; ella, Iᴮ o i.", "Punnett: IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B), ii (O)."], resultado: "Los cuatro grupos, A, B, AB y O, con un 25 % de probabilidad cada uno." },
    { enunciado: "Una mujer portadora de daltonismo (XᴰXᵈ) tiene hijos con un hombre de visión normal (XᴰY). ¿Qué probabilidades hay?", pasos: ["Gametos de la madre: Xᴰ y Xᵈ. Del padre: Xᴰ e Y.", "Hijas: XᴰXᴰ (normal) y XᴰXᵈ (portadora). Ninguna daltónica.", "Hijos: XᴰY (normal) y XᵈY (daltónico)."], resultado: "Las hijas, 50 % normales y 50 % portadoras; los hijos, 50 % normales y 50 % daltónicos." },
    { enunciado: "Un cariotipo muestra 47 cromosomas con tres cromosomas 21 y cromosomas sexuales XY. Interprétalo.", pasos: ["Hay un cromosoma de más (47 en vez de 46).", "Está en la pareja 21: es una trisomía 21.", "Los cromosomas sexuales son XY: es un varón."], resultado: "Varón con síndrome de Down (47, XY, +21)." },
  ],
  errores: [
    "Pensar que una persona de grupo A siempre es IᴬIᴬ: también puede ser Iᴬi.",
    "Creer que el padre transmite el cromosoma X a sus hijos varones: les transmite el Y.",
    "Decir que las mujeres no pueden ser daltónicas: pueden, si son XᵈXᵈ, aunque es raro.",
    "Pensar que todos los caracteres dependen de un solo gen: la mayoría son poligénicos y dependen del ambiente.",
    "Creer que el síndrome de Down se hereda siempre de los padres: casi siempre es un error al formarse el gameto.",
  ],
  ejercicios: [
    { q: "¿Cuántos autosomas y cuántos cromosomas sexuales tiene una célula humana?", sol: "44 autosomas (22 parejas) y 2 cromosomas sexuales (XX o XY)." },
    { q: "¿Qué genotipos puede tener una persona del grupo B? ¿Y una del grupo O?", sol: "B: IᴮIᴮ o Iᴮi. O: solo ii." },
    { q: "Una madre AB y un padre O, ¿qué grupos pueden tener sus hijos?", sol: "IᴬIᴮ × ii → Iᴬi (A) o Iᴮi (B). Nunca AB ni O." },
    { q: "Unos padres A y B tienen un hijo O. ¿Es posible? Explícalo.", sol: "Sí, si los dos son heterocigotos (Iᴬi × Iᴮi): cada uno aporta un alelo i." },
    { q: "Un hombre hemofílico (XʰY) tiene hijos con una mujer sana no portadora (XᴴXᴴ). ¿Cómo serán?", sol: "Todas las hijas portadoras (XᴴXʰ) y todos los hijos sanos (XᴴY)." },
    { q: "¿Puede un hombre daltónico tener un hijo varón daltónico con una mujer no portadora?", sol: "No: el hijo varón recibe el X de la madre, que solo tiene alelos normales." },
    { q: "¿Por qué el daltonismo es más frecuente en hombres?", sol: "Porque tienen un solo cromosoma X: basta un alelo recesivo para padecerlo, mientras que las mujeres necesitan dos." },
    { q: "¿Qué es una trisomía? Pon un ejemplo.", sol: "Tener tres copias de un cromosoma en lugar de dos. Ejemplo: la trisomía 21 o síndrome de Down." },
    { q: "¿Qué grupo sanguíneo es donante universal y cuál receptor universal?", sol: "Donante universal: O−. Receptor universal: AB+." },
    { q: "Explica por qué la altura no sigue una herencia mendeliana sencilla.", sol: "Porque depende de muchos genes a la vez y de factores ambientales como la alimentación, el sueño o el deporte; por eso varía de forma continua." },
  ],
  quiz: [
    { q: "El grupo O tiene genotipo…", o: ["IᴬIᴮ", "ii", "Iᴬi"], a: 1, e: "Es recesivo para los dos alelos." },
    { q: "Una mujer XᴰXᵈ es…", o: ["daltónica", "portadora", "hemofílica"], a: 1, e: "Ve bien pero puede transmitirlo." },
    { q: "El síndrome de Down se debe a…", o: ["una trisomía del cromosoma 21", "una mutación en el cromosoma X", "falta de un cromosoma Y"], a: 0, e: "47 cromosomas." },
    { q: "Un hijo varón recibe el cromosoma X de…", o: ["su padre", "su madre", "cualquiera de los dos"], a: 1, e: "Del padre recibe el Y." },
    { q: "La altura es un carácter…", o: ["de un solo gen", "poligénico e influido por el ambiente", "ligado al sexo"], a: 1, e: "Varía de forma continua." },
  ],
  tarjetas: [
    ["Mujer portadora", "Tiene un alelo recesivo ligado al X; no padece la enfermedad pero puede transmitirla."],
    ["Alelos del sistema ABO", "Iᴬ e Iᴮ codominantes; los dos dominan sobre i."],
    ["Trisomía 21", "Tres copias del cromosoma 21: síndrome de Down."],
  ],
});
