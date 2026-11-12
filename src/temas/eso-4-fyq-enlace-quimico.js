// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

// Átomo con símbolo y electrones de valencia en puntos (estructura de Lewis).
function lewis(x, y, sim, n, color, extra = "") {
  const pos = [[0, -22], [22, 0], [0, 22], [-22, 0]];
  let dots = "";
  for (let k = 0; k < n; k++) { const [dx, dy] = pos[k % 4]; const off = k >= 4 ? 6 : -6 * (n > 4 ? 1 : 0); const o = dx === 0 ? [off, 0] : [0, off]; dots += `<circle cx="${x + dx + o[0]}" cy="${y + dy + o[1]}" r="3.2" fill="${color}"/>`; }
  return `<text x="${x}" y="${y + 7}" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)" ${D}>${sim}</text>${dots}${extra}`;
}

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "El enlace químico",
  minutos: 40,
  objetivos: ["Explicar por qué se unen los átomos con la regla del octeto", "Distinguir el enlace iónico, el covalente y el metálico", "Relacionar el tipo de enlace con las propiedades de las sustancias"],
  claves: ["regla del octeto", "ion", "enlace iónico", "enlace covalente", "enlace metálico", "fuerzas intermoleculares"],
  pregunta: {
    texto: "La sal se disuelve en agua y conduce la electricidad disuelta; el azúcar también se disuelve, pero no conduce. ¿Qué las hace distintas?",
    respuesta: "El <mark>tipo de enlace</mark>. La sal es un compuesto <b>iónico</b>: al disolverse libera iones con carga que transportan la corriente. El azúcar es <b>covalente</b>: se separa en moléculas neutras, sin carga, que no conducen.",
  },
  bloques: [
    {
      html: `<h3>Por qué se unen los átomos</h3><p>Los átomos se unen para ser <mark>más estables</mark>, con menos energía. Los gases nobles ya lo son porque tienen 8 electrones en la última capa. La <b>regla del octeto</b> dice que los demás átomos tienden a <b>ganar, perder o compartir electrones</b> hasta quedarse con 8 en la capa externa (2 en el caso del hidrógeno). Los electrones externos se dibujan como puntos: es la <b>estructura de Lewis</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Estructuras de Lewis del sodio con un electrón, del cloro con siete y del neón con ocho">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${lewis(46, 80, "Na", 1, "var(--red)")}${lewis(130, 80, "Cl", 7, "var(--leaf)")}${lewis(214, 80, "Ne", 8, "var(--inf)")}
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="46" y="140" fill="var(--red)">1 e⁻ de valencia</text><text x="130" y="140" fill="var(--leaf)">7 e⁻</text><text x="214" y="140" fill="var(--inf)">8 e⁻: estable</text></g>
      </svg>`,
    },
    {
      html: `<h3>Enlace iónico</h3><p>Se da entre un <b>metal</b> y un <b>no metal</b>. El metal <mark>cede electrones</mark> y queda como ion positivo (<b>catión</b>); el no metal los <mark>capta</mark> y queda como ion negativo (<b>anión</b>). Los iones de signo contrario se atraen y forman una <b>red cristalina</b> enorme. Ejemplo: Na → Na⁺ + e⁻ y Cl + e⁻ → Cl⁻, que se unen en NaCl, la sal común.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Red cristalina de cloruro de sodio con iones positivos y negativos alternados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g stroke="var(--line)" stroke-width="2">${[0, 1, 2, 3].map((i) => `<path d="M60 ${40 + i * 34} H 200"/><path d="M${60 + i * 46.6} 40 V 142"/>`).join("")}</g>
        ${[0, 1, 2, 3].map((i) => [0, 1, 2, 3].map((j) => { const na = (i + j) % 2 === 0; return `<circle cx="${60 + j * 46.6}" cy="${40 + i * 34}" r="${na ? 9 : 14}" fill="${na ? "var(--red)" : "var(--leaf)"}"/><text x="${60 + j * 46.6}" y="${44 + i * 34}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${na ? "+" : "−"}</text>`; }).join("")).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="50" y="168" fill="var(--red)">Na⁺ catión</text><text x="150" y="168" fill="var(--leaf)">Cl⁻ anión</text></g>
      </svg>`,
    },
    {
      html: `<h3>Enlace covalente</h3><p>Se da entre <b>no metales</b>. Ninguno quiere soltar electrones, así que los <mark>comparten</mark> por parejas. Cada par compartido es un enlace: simple (H–H), doble (O=O) o triple (N≡N). Se forman <b>moléculas</b> (agua, CO₂, oxígeno) o, a veces, <b>redes covalentes</b> gigantes muy duras como el diamante.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Molécula de agua: el oxígeno comparte un par de electrones con cada hidrógeno">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="78" r="38" fill="var(--red)" opacity=".18"/><circle cx="74" cy="120" r="26" fill="var(--pen)" opacity=".18"/><circle cx="186" cy="120" r="26" fill="var(--pen)" opacity=".18"/>
        <text x="130" y="86" text-anchor="middle" font-size="24" font-weight="700" fill="var(--ink)" ${D}>O</text>
        <text x="74" y="128" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink)" ${D}>H</text><text x="186" y="128" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink)" ${D}>H</text>
        <circle cx="98" cy="100" r="3.5" fill="var(--leaf)"/><circle cx="106" cy="106" r="3.5" fill="var(--leaf)"/><circle cx="162" cy="100" r="3.5" fill="var(--leaf)"/><circle cx="154" cy="106" r="3.5" fill="var(--leaf)"/>
        <circle cx="114" cy="50" r="3.5" fill="var(--red)"/><circle cx="124" cy="45" r="3.5" fill="var(--red)"/><circle cx="136" cy="45" r="3.5" fill="var(--red)"/><circle cx="146" cy="50" r="3.5" fill="var(--red)"/>
        <text x="130" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--leaf)" ${F}>pares compartidos (verde)</text>
      </svg>`,
    },
    {
      html: `<h3>Enlace metálico</h3><p>Se da entre átomos de un <b>metal</b>. Cada átomo suelta sus electrones de valencia, que forman una <mark>«nube» o mar de electrones</mark> que se mueve libremente entre los iones positivos. Por eso los metales <b>conducen</b> la electricidad y el calor, tienen brillo y se pueden doblar y estirar en hilos o láminas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Iones metálicos positivos ordenados rodeados de un mar de electrones">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="30" y="26" width="200" height="120" rx="14" fill="var(--sun)" opacity=".25"/>
        ${[0, 1, 2].map((i) => [0, 1, 2, 3].map((j) => `<circle cx="${60 + j * 46}" cy="${50 + i * 36}" r="13" fill="var(--pen)"/><text x="${60 + j * 46}" y="${55 + i * 36}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>+</text>`).join("")).join("")}
        ${[[82, 40], [130, 70], [176, 44], [104, 92], [152, 102], [40, 92], [208, 82], [84, 130], [196, 128], [124, 34]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--red)"/>`).join("")}
        <text x="130" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>electrones libres: conducen</text>
      </svg>`,
    },
    {
      html: `<h3>Fuerzas entre moléculas</h3><p>Las moléculas covalentes se atraen entre sí con <b>fuerzas intermoleculares</b>, mucho más débiles que un enlace. Por eso muchas sustancias covalentes son gases o líquidos a temperatura ambiente. La más fuerte es el <mark>puente de hidrógeno</mark>: explica que el agua sea líquida a 20 °C y que el hielo flote.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres moléculas de agua unidas por puentes de hidrógeno discontinuos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[70, 70, 0], [180, 60, 40], [130, 130, -30]].map(([x, y, r]) => `<g transform="rotate(${r} ${x} ${y})"><circle cx="${x}" cy="${y}" r="16" fill="var(--red)"/><circle cx="${x - 16}" cy="${y + 14}" r="9" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="${x + 16}" cy="${y + 14}" r="9" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/></g>`).join("")}
        <path d="M90 86 L 118 118" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="4 4"/><path d="M164 70 L 88 66" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="4 4"/>
        <text x="130" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="var(--pen)" ${F}>- - - puente de hidrógeno</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Tres enlaces, tres comportamientos",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Tabla comparativa del enlace iónico, covalente y metálico con ejemplo y propiedades">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["IÓNICO", "metal + no metal", "ceden y captan e⁻", "sólidos duros, frágiles", "conducen disueltos", "NaCl", "var(--red)"], ["COVALENTE", "no metal + no metal", "comparten e⁻", "moléculas: puntos de", "fusión bajos, no conducen", "H₂O, CO₂", "var(--leaf)"], ["METÁLICO", "metal + metal", "mar de electrones", "brillantes, dúctiles", "conducen siempre", "Cu, Fe", "var(--pen)"]]
        .map(([n, a, b, c1, c2, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="54" text-anchor="middle" font-size="22" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="106" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="138" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${c1}</text>
          <text x="${115 + i * 206}" y="156" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${c2}</text>
          <text x="${115 + i * 206}" y="192" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "WnVFcnGvJ-Y", titulo: "Tipos de enlaces químicos: iónico, covalente y metálico", canal: "Amigos de la Química", vistas: 5417094, megusta: 0, busqueda: "enlace químico iónico covalente metálico" },
  quiz: [
    { q: "¿Qué dice la regla del octeto?", o: ["Que los átomos tienen 8 protones", "Que los átomos tienden a tener 8 electrones en la última capa", "Que solo hay 8 tipos de enlace"], a: 1, e: "Ganando, perdiendo o compartiendo electrones, los átomos buscan la configuración estable de un gas noble." },
    { q: "¿Qué enlace tiene el cloruro de potasio (KCl)?", o: ["Iónico", "Covalente", "Metálico"], a: 0, e: "El potasio es un metal y el cloro un no metal: el K cede un electrón al Cl." },
    { q: "En la molécula de oxígeno O₂, los átomos…", o: ["se ceden electrones", "comparten dos pares de electrones (enlace doble)", "forman un mar de electrones"], a: 1, e: "Son dos no metales iguales: comparten electrones. A cada O le faltan 2, así que comparten dos pares." },
    { q: "¿Por qué un cable de cobre conduce la electricidad?", o: ["Porque tiene iones negativos", "Porque sus electrones se mueven libremente", "Porque es una molécula"], a: 1, e: "En el enlace metálico los electrones de valencia forman una nube móvil." },
    { q: "¿Cuál de estas sustancias se espera que tenga un punto de fusión más alto?", o: ["Cloruro de sodio", "Agua", "Dióxido de carbono"], a: 0, e: "La sal forma una red iónica con atracciones muy fuertes. El agua y el CO₂ son moléculas unidas por fuerzas débiles." },
  ],
  examen: [
    { q: "Un catión es…", o: ["un ion positivo que ha perdido electrones", "un ion negativo que ha ganado electrones", "un átomo neutro"], a: 0, e: "Al perder electrones queda más carga positiva (protones) que negativa." },
    { q: "El diamante es durísimo porque es…", o: ["un compuesto iónico", "una red covalente", "un metal"], a: 1, e: "Cada carbono está unido por enlaces covalentes a otros cuatro en una red gigante." },
    { q: "¿Qué explica que el hielo flote en el agua?", o: ["El enlace metálico", "Los puentes de hidrógeno", "El enlace iónico"], a: 1, e: "En el hielo, los puentes de hidrógeno ordenan las moléculas dejando huecos: es menos denso que el agua líquida." },
  ],
  feynman: ["Qué es la regla del octeto y por qué se unen los átomos", "Cómo se forman los iones en el enlace iónico", "Qué significa compartir electrones en el enlace covalente", "Por qué los metales conducen la electricidad", "Qué son los puentes de hidrógeno"],
  mapa: mapa("ENLACE QUÍMICO", "var(--eso)", [
    ["Octeto", "8 e⁻ en la última capa", "var(--ink)"],
    ["Iónico", "metal + no metal · iones", "var(--red)"],
    ["Covalente", "no metales · comparten e⁻", "var(--leaf)"],
    ["Metálico", "mar de electrones", "var(--pen)"],
  ], 240),
  tarjetas: [
    ["¿Qué es un anión?", "Un ion negativo: un átomo que ha ganado electrones (Cl⁻, O²⁻)."],
    ["¿Entre qué elementos se forma el enlace iónico?", "Entre un metal (cede electrones) y un no metal (los capta)."],
    ["¿Qué es un enlace covalente doble?", "Dos pares de electrones compartidos entre dos átomos, como en O=O."],
    ["Propiedades de los compuestos iónicos", "Sólidos, duros y frágiles, alto punto de fusión, conducen fundidos o disueltos."],
    ["¿Qué es un puente de hidrógeno?", "Una fuerza intermolecular fuerte entre un H unido a F, O o N y otro átomo de F, O o N cercano."],
  ],
  familias: ["Probad a disolver sal y azúcar en agua y comentad qué tipo de enlace tiene cada una.", "Buscad en casa objetos metálicos y otros que no lo sean, y pensad cuáles conducirían la electricidad.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La materia: enlace químico iónico, covalente y metálico, fuerzas intermoleculares y propiedades de las sustancias (RD 217/2022, Física y Química 4º).",
    ideas: ["Medir la conductividad de disoluciones de sal, azúcar y agua destilada con un circuito con LED.", "Construir modelos moleculares con plastilina y palillos.", "Clasificar sustancias desconocidas por sus propiedades (dureza, solubilidad, conductividad)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Enlace químico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Enlace_qu%C3%ADmico" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Dibujar estructuras de Lewis de moléculas sencillas", "Relacionar el tipo de enlace con las propiedades de las sustancias"],
  tras: {
    "Por qué se unen los átomos": [
      { html: `<h3>La regla del octeto y los diagramas de Lewis</h3><p>Los átomos se unen para conseguir una configuración más estable, normalmente con <b>ocho electrones</b> en la última capa, como los gases nobles: es la <mark>regla del octeto</mark> (el hidrógeno se conforma con dos). En los <b>diagramas de Lewis</b> se escribe el símbolo del elemento rodeado de puntos que representan sus electrones de valencia: el cloro lleva 7 y el oxígeno 6. En una molécula, cada par de electrones compartido se dibuja como una raya, y los pares que no se comparten se llaman <b>pares solitarios</b>. Si los átomos comparten dos pares hay un <b>enlace doble</b> (O=O) y si comparten tres, un <b>enlace triple</b> (N≡N).</p>`, video: { id: "dWh4wf5VgMs", titulo: "Estructuras de Lewis (teoría + ejercicios)", canal: "Amigos de la Química", vistas: 5388650 } },
    ],
    "Enlace iónico": [
      { html: `<h3>Cómo se forma un compuesto iónico</h3><p>El enlace iónico une un <b>metal</b> que pierde electrones con un <b>no metal</b> que los gana. Los iones de carga contraria se atraen y se colocan ordenadamente formando una <b>red cristalina</b>: no hay moléculas sueltas. Por eso la fórmula del cloruro de sodio, NaCl, solo indica la <mark>proporción</mark> de iones (uno a uno). La carga total debe ser cero: el magnesio da 2 electrones (Mg²⁺) y cada cloro acepta uno (Cl⁻), así que hacen falta dos cloros: <b>MgCl₂</b>. Con el oxígeno (O²⁻) basta uno: MgO.</p>` },
    ],
    "Enlace covalente": [
      { html: `<h3>Moléculas y cristales covalentes. Polaridad</h3><p>Las sustancias covalentes pueden ser de dos tipos. Las <b>moleculares</b> (H₂O, CO₂, O₂, CH₄) están formadas por moléculas independientes; tienen puntos de fusión bajos y muchas son gases o líquidos. Los <b>cristales covalentes</b> (diamante, cuarzo SiO₂) son redes gigantes de átomos unidos por enlaces covalentes: son durísimos y funden a temperaturas altísimas. Además, si los dos átomos tienen distinta <b>electronegatividad</b> (tendencia a atraer los electrones), el par compartido se desplaza hacia uno de ellos y el enlace es <mark>polar</mark>: en el agua, el oxígeno queda algo negativo y los hidrógenos algo positivos.</p>` },
    ],
    "Fuerzas entre moléculas": [
      { html: `<h3>Propiedades según el tipo de enlace</h3><p>El tipo de enlace explica las propiedades de cada sustancia, y al revés: midiendo propiedades podemos saber qué enlace tiene. La tabla resume las diferencias. Fíjate en la conductividad: los compuestos iónicos <mark>solo conducen fundidos o disueltos</mark>, cuando sus iones pueden moverse; los metales conducen siempre gracias a sus electrones libres.</p>${AMP.tabla(["Propiedad", "Iónico (NaCl)", "Covalente molecular (H₂O)", "Cristal covalente (diamante)", "Metálico (Cu)"], [["Estado a 25 °C", "sólido", "gas o líquido, a veces sólido", "sólido", "sólido (salvo Hg)"], ["Punto de fusión", "alto", "bajo", "muy alto", "variable, a menudo alto"], ["Conduce", "fundido o disuelto", "no", "no (salvo grafito)", "sí, siempre"], ["Se disuelve en agua", "muchos sí", "algunos", "no", "no"], ["Otras", "duro y frágil", "blando", "durísimo", "dúctil y maleable"]])}` },
    ],
  },
  ejemplos: [
    { enunciado: "Dibuja el diagrama de Lewis del agua, H₂O.", pasos: ["Electrones de valencia: O tiene 6 y cada H tiene 1: 6 + 2 = 8 electrones.", "El oxígeno va en el centro y se une a cada H con un enlace sencillo (2 rayas = 4 electrones).", "Los 4 electrones restantes quedan como 2 pares solitarios sobre el oxígeno, que así completa su octeto."], resultado: "H–O–H con dos pares solitarios en el oxígeno." },
    { enunciado: "Escribe la fórmula del compuesto iónico formado por aluminio (Al³⁺) y oxígeno (O²⁻).", pasos: ["La carga total debe ser cero.", "El mínimo común múltiplo de 3 y 2 es 6: hacen falta 2 Al³⁺ (+6) y 3 O²⁻ (−6).", "Se escribe primero el metal."], resultado: "Al₂O₃ (óxido de aluminio)." },
    { enunciado: "Una sustancia funde a 801 °C, es frágil, no conduce en estado sólido pero sí disuelta en agua. ¿Qué tipo de enlace tiene?", pasos: ["Punto de fusión alto: no es molecular.", "No conduce sólida pero sí disuelta: tiene iones que solo se mueven al disolverse.", "Frágil: típico de los cristales iónicos."], resultado: "Es un compuesto iónico (de hecho, son los datos del NaCl)." },
  ],
  errores: [
    "Hablar de «moléculas de NaCl»: los compuestos iónicos forman redes, no moléculas.",
    "Decir que la sal sólida conduce la electricidad: solo conduce fundida o disuelta.",
    "Olvidar los pares solitarios en los diagramas de Lewis.",
    "Confundir enlaces covalentes (dentro de la molécula) con fuerzas intermoleculares (entre moléculas): al hervir el agua se rompen las segundas, no las primeras.",
    "Pensar que todas las sustancias covalentes funden a baja temperatura: el diamante funde a más de 3.500 °C.",
  ],
  ejercicios: [
    { q: "Indica qué tipo de enlace hay en: KBr, Cl₂, Fe, CO₂, CaO.", sol: "KBr: iónico (metal + no metal). Cl₂: covalente. Fe: metálico. CO₂: covalente. CaO: iónico." },
    { q: "Dibuja el diagrama de Lewis del metano, CH₄.", sol: "El C (4 e⁻) va en el centro y comparte un par con cada H: cuatro enlaces sencillos C–H. El carbono completa 8 electrones y cada H, 2. No hay pares solitarios." },
    { q: "¿Por qué la molécula de N₂ tiene un enlace triple?", sol: "Cada N tiene 5 electrones de valencia y le faltan 3 para el octeto. Al compartir 3 pares (N≡N), cada uno queda con 8 contando un par solitario." },
    { q: "Escribe la fórmula del compuesto formado por calcio (Ca²⁺) y cloro (Cl⁻) y por sodio (Na⁺) y azufre (S²⁻).", sol: "CaCl₂ y Na₂S." },
    { q: "¿Por qué los metales conducen la electricidad?", sol: "Porque sus electrones de valencia forman una «nube» de electrones libres que se mueven por toda la red." },
    { q: "Explica por qué el agua hierve a 100 °C y el metano a −162 °C si los dos son moléculas pequeñas.", sol: "Entre moléculas de agua hay puentes de hidrógeno, fuerzas intermoleculares fuertes; entre moléculas de metano solo hay fuerzas muy débiles. Separar las de agua cuesta más energía." },
    { q: "¿Es polar el enlace H–Cl? ¿Hacia dónde se desplazan los electrones?", sol: "Sí, porque el cloro es mucho más electronegativo que el hidrógeno. Los electrones se desplazan hacia el cloro, que queda con carga parcial negativa." },
    { q: "Un sólido es muy duro, no conduce y funde a más de 1.600 °C. No se disuelve en agua. ¿Qué tipo de sustancia es?", sol: "Un cristal covalente, como el cuarzo (SiO₂)." },
    { q: "¿Por qué se puede hacer un hilo de cobre pero no uno de sal?", sol: "En el metal, las capas de átomos pueden deslizarse sin romperse gracias a la nube de electrones (dúctil). En la sal, al desplazar una capa se enfrentan iones del mismo signo, se repelen y el cristal se rompe (frágil)." },
    { q: "Dibuja el diagrama de Lewis del CO₂.", sol: "O=C=O: el carbono comparte dos pares con cada oxígeno (dos enlaces dobles). Cada oxígeno conserva dos pares solitarios. Todos completan el octeto." },
  ],
  quiz: [
    { q: "Según la regla del octeto, los átomos tienden a tener en su última capa…", o: ["2 electrones", "8 electrones", "18 electrones"], a: 1, e: "Como los gases nobles (el H, 2)." },
    { q: "La fórmula del cloruro de magnesio es…", o: ["MgCl", "MgCl₂", "Mg₂Cl"], a: 1, e: "Mg²⁺ necesita dos Cl⁻." },
    { q: "Un cristal covalente como el diamante es…", o: ["blando y conductor", "durísimo y de punto de fusión muy alto", "un gas"], a: 1, e: "Es una red gigante de enlaces covalentes." },
    { q: "En el agua, el oxígeno queda con carga parcial…", o: ["positiva", "negativa", "nula"], a: 1, e: "Es más electronegativo que el hidrógeno." },
    { q: "Un compuesto iónico conduce la corriente…", o: ["siempre", "fundido o disuelto", "nunca"], a: 1, e: "Necesita que los iones puedan moverse." },
  ],
  tarjetas: [
    ["Regla del octeto", "Los átomos tienden a tener 8 electrones en su última capa."],
    ["Par solitario", "Par de electrones de valencia que no forma enlace."],
    ["Enlace polar", "Covalente entre átomos de distinta electronegatividad: los electrones se acercan a uno."],
  ],
});
