// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "Los ecosistemas",
  minutos: 40,
  objetivos: ["Identificar los componentes de un ecosistema y los factores ambientales", "Construir cadenas y redes tróficas y pirámides ecológicas", "Explicar el flujo de energía, los ciclos de la materia y la sucesión ecológica"],
  claves: ["biotopo", "biocenosis", "nivel trófico", "red trófica", "ciclo de la materia", "sucesión ecológica"],
  pregunta: {
    texto: "Cuando en Yellowstone (EE. UU.) se reintrodujeron los lobos en 1995, los ríos cambiaron de forma. ¿Qué tienen que ver unos lobos con un río?",
    respuesta: "Todo está conectado en un <mark>ecosistema</mark>. Los lobos cazaron ciervos, que dejaron de comerse los árboles de las orillas. Los árboles crecieron, <b>sujetaron el suelo</b> y los ríos dejaron de erosionar tanto. Una especie puede cambiar un paisaje entero: es una <b>especie clave</b>.",
  },
  bloques: [
    {
      html: `<h3>Qué es un ecosistema</h3><p>Un <b>ecosistema</b> es el conjunto formado por el <mark>biotopo</mark> (el medio físico: agua, suelo, luz, temperatura) y la <mark>biocenosis</mark> (todos los seres vivos que lo habitan), junto con las relaciones entre ellos. Los <b>factores abióticos</b> (temperatura, luz, humedad…) limitan qué especies pueden vivir allí. Cada especie ocupa un <b>hábitat</b> y tiene un papel o <b>nicho ecológico</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una charca con el biotopo (agua, sol, suelo) y la biocenosis (plantas, rana, peces, garza)">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="220" cy="34" r="16" fill="var(--sun)"/>
        <path d="M20 120 Q 130 90 240 120 V 160 H 20 Z" fill="var(--water)" opacity=".4"/><rect x="20" y="150" width="220" height="12" fill="var(--sun)" opacity=".4"/>
        <path d="M50 120 V 70 M60 120 V 80 M200 116 V 64" stroke="var(--leaf)" stroke-width="4"/>
        <ellipse cx="120" cy="134" rx="12" ry="5" fill="var(--pen)"/><ellipse cx="150" cy="142" rx="10" ry="4" fill="var(--pen)"/>
        <ellipse cx="90" cy="108" rx="9" ry="6" fill="var(--leaf)"/>
        <g ${F} font-size="11" font-weight="700"><text x="14" y="30" fill="var(--red)">biocenosis: seres vivos</text><text x="14" y="48" fill="var(--pen)">biotopo: agua, luz, suelo</text></g>
      </svg>`,
    },
    {
      html: `<h3>Cadenas y redes tróficas</h3><p>En un ecosistema, la materia y la energía pasan de unos seres a otros al alimentarse. Los <b>productores</b> (plantas, algas) hacen la fotosíntesis. Los <b>consumidores primarios</b> (herbívoros) se los comen, y los <b>secundarios y terciarios</b> (carnívoros) se comen a otros animales. Los <b>descomponedores</b> (hongos, bacterias) reciclan los restos. Una secuencia lineal es una <mark>cadena trófica</mark>; como cada ser come y es comido por varios, en realidad forman una <mark>red trófica</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena trófica: hierba, grillo, rana y serpiente">
        <defs>${flecha("ec1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["hierba", "productor", "var(--leaf)"], ["grillo", "c. primario", "var(--sun)"], ["rana", "c. secundario", "var(--pen)"], ["serpiente", "c. terciario", "var(--red)"]].map(([t, n, c], i) => `<rect x="${12 + i * 62}" y="56" width="54" height="40" rx="10" fill="${c}"/><text x="${39 + i * 62}" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>${t}</text><text x="${39 + i * 62}" y="116" text-anchor="middle" font-size="9" fill="var(--ink)" ${F}>${n}</text>${i < 3 ? `<path d="M${67 + i * 62} 76 H ${73 + i * 62}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#ec1)"/>` : ""}`).join("")}
        <text x="130" y="150" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>la flecha va de quien es comido a quien come</text>
      </svg>`,
    },
    {
      html: `<h3>El flujo de energía y las pirámides</h3><p>La energía entra como <b>luz solar</b> y fluye en un solo sentido: en cada nivel trófico <mark>solo pasa un 10 % aproximadamente</mark> al siguiente, porque el resto se gasta en vivir y se pierde como calor. Por eso las cadenas tienen pocos eslabones y hay muchas menos águilas que conejos. Se representa con <b>pirámides ecológicas</b> de energía, de biomasa o de número de individuos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide de energía: 10 000, 1 000, 100 y 10 unidades de energía">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["productores", 10000, 220, "var(--leaf)"], ["herbívoros", 1000, 170, "var(--sun)"], ["carnívoros 1", 100, 124, "var(--pen)"], ["carnívoros 2", 10, 56, "var(--red)"]].map(([t, e, w, c], i) => `<rect x="${130 - w / 2}" y="${136 - i * 34}" width="${w}" height="30" rx="4" fill="${c}"/><text x="130" y="${156 - i * 34}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${i < 3 ? t + " · " : ""}${e.toLocaleString("es-ES")}</text>`).join("")}
        <text x="130" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>en cada paso se pierde ≈ 90 %</text>
      </svg>`,
    },
    {
      html: `<h3>Los ciclos de la materia</h3><p>A diferencia de la energía, la <b>materia se recicla</b>: los átomos pasan del medio a los seres vivos y vuelven al medio en <mark>ciclos biogeoquímicos</mark>. En el <b>ciclo del carbono</b>, las plantas toman CO₂ del aire con la fotosíntesis; los seres vivos lo devuelven al respirar y los descomponedores, al degradar los restos. Quemar combustibles fósiles libera carbono que estuvo enterrado millones de años y desequilibra el ciclo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del carbono: fotosíntesis, respiración, descomposición y combustión">
        <defs>${flecha("ec2", "var(--leaf)")}${flecha("ec3", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="90" y="14" width="80" height="28" rx="14" fill="var(--muted)"/><text x="130" y="33" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>CO₂ aire</text>
        <path d="M50 150 V 100" stroke="var(--leaf)" stroke-width="5"/><circle cx="50" cy="90" r="22" fill="var(--leaf)"/>
        <ellipse cx="150" cy="140" rx="20" ry="12" fill="var(--sun)"/><rect x="200" y="120" width="34" height="40" fill="var(--ink)" opacity=".7"/><path d="M210 120 V 104 M224 120 V 98" stroke="var(--muted)" stroke-width="5"/>
        <path d="M100 36 Q 60 40 54 64" fill="none" stroke="var(--leaf)" stroke-width="2.5" marker-end="url(#ec2)"/>
        <path d="M150 124 Q 150 70 140 46" fill="none" stroke="var(--red)" stroke-width="2.5" marker-end="url(#ec3)"/>
        <path d="M218 96 Q 210 50 172 34" fill="none" stroke="var(--red)" stroke-width="2.5" marker-end="url(#ec3)"/>
        <g ${F} font-size="10" font-weight="700"><text x="14" y="58" fill="var(--leaf)">fotosíntesis</text><text x="108" y="96" fill="var(--red)">respiración</text><text x="246" y="80" text-anchor="end" fill="var(--red)">combustión</text></g>
      </svg>`,
    },
    {
      html: `<h3>Relaciones y sucesión ecológica</h3><p>Entre especies hay relaciones de <b>depredación</b>, <b>competencia</b>, <b>parasitismo</b> (uno gana y otro pierde), <b>mutualismo</b> (ganan los dos, como abejas y flores) o <b>comensalismo</b>. Los ecosistemas cambian con el tiempo: tras un incendio o en una roca desnuda, llegan primero líquenes y hierbas, luego arbustos y por fin un bosque estable, la <mark>comunidad clímax</mark>. Este proceso es la <b>sucesión ecológica</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sucesión ecológica: roca desnuda, hierbas, arbustos y bosque">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 130 H 250" stroke="var(--ink)" stroke-width="2"/>
        <path d="M18 130 Q 36 112 54 130 Z" fill="var(--muted)"/>
        ${[78, 88, 98].map((x) => `<path d="M${x} 130 V 116" stroke="var(--leaf)" stroke-width="3"/>`).join("")}
        <circle cx="140" cy="112" r="14" fill="var(--leaf)" opacity=".8"/><circle cx="156" cy="118" r="10" fill="var(--leaf)" opacity=".8"/>
        <path d="M216 130 V 90" stroke="var(--ink)" stroke-width="5"/><circle cx="216" cy="70" r="28" fill="var(--leaf)"/>
        <g ${F} font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)"><text x="36" y="150">roca</text><text x="88" y="150">hierbas</text><text x="148" y="150">arbustos</text><text x="216" y="150">bosque (clímax)</text></g>
        <text x="130" y="28" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>decenas o cientos de años →</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Los papeles en un ecosistema",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Productores, consumidores y descomponedores: qué hacen y ejemplos">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Productores", "fabrican materia orgánica", "con la luz (fotosíntesis)", "plantas, algas", "var(--leaf)"], ["Consumidores", "se alimentan de", "otros seres vivos", "herbívoros, carnívoros", "var(--red)"], ["Descomponedores", "transforman restos", "en sales minerales", "hongos, bacterias", "var(--sun)"]]
        .map(([n, a, b, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="58" text-anchor="middle" font-size="19" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="102" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="124" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="172" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "FBQNRqQNvAc", titulo: "¿Qué son las cadenas alimenticias?", canal: "A Cierta Ciencia", vistas: 1291452, megusta: 0, busqueda: "ecosistemas cadenas tróficas" },
  quiz: [
    { q: "¿Qué es la biocenosis?", o: ["El medio físico", "El conjunto de seres vivos de un ecosistema", "Un tipo de roca"], a: 1, e: "Biocenosis = comunidad de seres vivos; biotopo = medio físico." },
    { q: "En la cadena hierba → conejo → zorro, el conejo es…", o: ["productor", "consumidor primario", "descomponedor"], a: 1, e: "Es herbívoro: se alimenta del productor." },
    { q: "¿Qué porcentaje de energía pasa aproximadamente de un nivel trófico al siguiente?", o: ["10 %", "50 %", "100 %"], a: 0, e: "La mayor parte se gasta en las funciones vitales y se pierde como calor." },
    { q: "La relación entre las abejas y las flores es de…", o: ["parasitismo", "mutualismo", "competencia"], a: 1, e: "Las abejas obtienen néctar y las flores se polinizan: ganan las dos." },
    { q: "¿Cómo vuelve el carbono a la atmósfera?", o: ["Con la fotosíntesis", "Con la respiración, la descomposición y la combustión", "No vuelve nunca"], a: 1, e: "La fotosíntesis lo retira del aire; los otros procesos lo devuelven." },
  ],
  examen: [
    { q: "¿Por qué las cadenas tróficas no suelen tener más de 4 o 5 eslabones?", o: ["Porque no hay suficientes especies", "Porque la energía disponible se reduce mucho en cada nivel", "Porque los carnívoros no se comen entre sí"], a: 1, e: "Con solo un 10 % por paso, enseguida no queda energía suficiente." },
    { q: "¿Qué es la comunidad clímax?", o: ["La primera que coloniza un lugar", "La etapa final y estable de una sucesión", "Una especie invasora"], a: 1, e: "Es la comunidad madura, en equilibrio con las condiciones del lugar." },
    { q: "Los descomponedores son importantes porque…", o: ["producen oxígeno", "devuelven la materia al suelo como sales minerales", "son la base de la pirámide de energía"], a: 1, e: "Cierran el ciclo de la materia para que los productores la reutilicen." },
  ],
  feynman: ["Qué es un ecosistema y sus componentes", "La diferencia entre cadena y red trófica", "Por qué la energía fluye y la materia se recicla", "El ciclo del carbono en pocas frases", "Qué es la sucesión ecológica, con un ejemplo"],
  mapa: mapa("ECOSISTEMAS", "var(--eso)", [
    ["Componentes", "biotopo + biocenosis", "var(--ink)"],
    ["Relaciones tróficas", "productores → consumidores", "var(--leaf)"],
    ["Energía y materia", "10 % por nivel · ciclos", "var(--sun)"],
    ["Cambio", "relaciones · sucesión · clímax", "var(--red)"],
  ], 250),
  tarjetas: [
    ["¿Qué es un ecosistema?", "El conjunto del biotopo, la biocenosis y las relaciones entre ellos."],
    ["¿Qué son los productores?", "Seres autótrofos que fabrican materia orgánica con la fotosíntesis."],
    ["Regla del 10 %", "Solo alrededor del 10 % de la energía de un nivel trófico pasa al siguiente."],
    ["¿Qué es el mutualismo?", "Una relación entre dos especies en la que ambas salen beneficiadas."],
    ["¿Qué es la sucesión ecológica?", "El cambio gradual de un ecosistema hasta alcanzar una comunidad estable (clímax)."],
  ],
  familias: ["En un parque, haced una lista de seres vivos y montad una red trófica con flechas.", "Pensad qué pasaría en un bosque si desaparecieran los hongos y las bacterias.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Ecología y sostenibilidad: componentes del ecosistema, relaciones tróficas, flujo de energía, ciclos de la materia y dinámica de los ecosistemas (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Red trófica con ovillo de lana en círculo: quitar una especie y ver qué hilos caen.", "Ecosistema en una botella cerrada y diario de observaciones.", "Salida de campo para medir factores abióticos (luz, temperatura, humedad)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ecosistema, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ecosistema" },
  ],
  revisado: "2026-11-12",
};
