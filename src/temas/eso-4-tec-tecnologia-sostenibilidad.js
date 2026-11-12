// Tecnología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Tecnología",
  curso: "4-eso",
  titulo: "Tecnología y sostenibilidad",
  minutos: 35,
  objetivos: ["Comparar fuentes de energía renovables y no renovables", "Analizar el ciclo de vida de un producto y la economía circular", "Valorar el impacto social y ambiental de la tecnología y proponer soluciones sostenibles"],
  claves: ["energía renovable", "eficiencia energética", "ciclo de vida", "economía circular", "obsolescencia programada", "residuos electrónicos"],
  pregunta: {
    texto: "Un móvil pesa unos 180 gramos, pero fabricarlo genera entre 50 y 80 kg de CO₂ y mueve muchos kilos de roca minera. ¿Dónde está esa huella escondida?",
    respuesta: "En todo su <mark>ciclo de vida</mark>: la extracción de metales como el litio o el cobalto, la fabricación de los chips, el transporte, la energía que gasta y lo que pasa cuando lo tiramos. La mayor parte del impacto ocurre <b>antes de que lo estrenes</b>. Por eso usarlo más años es una de las mejores decisiones sostenibles.",
  },
  bloques: [
    {
      html: `<h3>Fuentes de energía</h3><p>Las fuentes <b>no renovables</b> se agotan porque tardan millones de años en formarse: <b>petróleo</b>, <b>carbón</b>, <b>gas natural</b> (combustibles fósiles, que emiten CO₂) y <b>uranio</b> (nuclear, sin CO₂ pero con residuos radiactivos). Las <b>renovables</b> <mark>se regeneran de forma natural</mark>: <b>solar</b> (fotovoltaica y térmica), <b>eólica</b>, <b>hidráulica</b>, <b>biomasa</b>, <b>geotérmica</b> y <b>mareomotriz</b>. En España, las renovables ya generan más de la mitad de la electricidad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Iconos de energía solar, eólica e hidráulica frente a una central de carbón">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="40" cy="44" r="14" fill="var(--sun)"/><path d="M20 100 L 34 74 H 70 L 56 100 Z" fill="var(--pen)" stroke="var(--ink)" stroke-width="1.5"/><path d="M28 87 H 64 M45 74 L 39 100" stroke="#fff" stroke-width="1"/>
        <path d="M120 100 V 50" stroke="var(--ink)" stroke-width="3"/><path d="M120 50 L 120 22 M120 50 L 96 64 M120 50 L 144 64" stroke="var(--leaf)" stroke-width="5" stroke-linecap="round"/>
        <path d="M176 60 H 214 L 220 100 H 170 Z" fill="var(--muted)"/><path d="M182 60 V 40 M200 60 V 34" stroke="var(--muted)" stroke-width="6"/><path d="M200 30 Q 196 20 204 12" fill="none" stroke="var(--muted)" stroke-width="3" opacity=".6"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="80" y="128" fill="var(--leaf)">renovables</text><text x="80" y="144" font-size="10" fill="var(--muted)">no se agotan</text><text x="196" y="128" fill="var(--red)">fósiles</text><text x="196" y="144" font-size="10" fill="var(--muted)">CO₂ · se agotan</text></g>
      </svg>`,
    },
    {
      html: `<h3>Eficiencia y ahorro energético</h3><p>La energía más limpia es la que <mark>no se consume</mark>. La <b>eficiencia</b> compara la energía útil con la consumida: una bombilla LED convierte en luz mucha más energía que una incandescente, que la pierde casi toda en calor. Medidas de ahorro: aislar edificios, electrodomésticos de clase A, apagar el modo de espera (<i>stand-by</i>), el transporte público y los vehículos eléctricos cargados con renovables. Las <b>redes inteligentes</b> y el <b>autoconsumo</b> con placas solares ayudan a usar mejor la energía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de Sankey: la bombilla incandescente pierde 95 por ciento en calor y la LED mucho menos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[30, "incandescente", 5], [110, "LED", 40]].map(([y, t, u]) => `<rect x="20" y="${y}" width="80" height="40" fill="var(--sun)" opacity=".6"/><path d="M100 ${y} H 160 V ${y + u * 0.4} H 100 Z" fill="var(--leaf)"/><path d="M100 ${y + u * 0.4} Q 140 ${y + u * 0.4} 160 ${y + 52} V ${y + 52 + (40 - u * 0.4)} H 150 Q 130 ${y + 40} 100 ${y + 40} Z" fill="var(--red)" opacity=".6"/>
          <text x="60" y="${y + 24}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text><text x="166" y="${y + 10}" font-size="11" font-weight="700" fill="var(--leaf)" ${F}>luz ${u} %</text><text x="166" y="${y + 66}" font-size="11" font-weight="700" fill="var(--red)" ${F}>calor ${100 - u} %</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>El ciclo de vida de un producto</h3><p>El <b>análisis del ciclo de vida</b> estudia el impacto de un objeto <mark>«de la cuna a la tumba»</mark>: extracción de materias primas, fabricación, transporte, uso y fin de vida. Sirve para diseñar mejor: usar menos material, materiales reciclados o reciclables, piezas fáciles de desmontar y reparar, y menos consumo durante el uso. Es el <b>ecodiseño</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las cinco etapas del ciclo de vida: materias primas, fabricación, transporte, uso y fin de vida">
        <defs>${flecha("ts1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["materias primas", "var(--muted)"], ["fabricación", "var(--pen)"], ["transporte", "var(--sun)"], ["uso", "var(--leaf)"], ["fin de vida", "var(--red)"]].map(([t, c], i) => `<rect x="${24 + (i % 2) * 20}" y="${12 + i * 32}" width="130" height="24" rx="12" fill="${c}"/><text x="${89 + (i % 2) * 20}" y="${28 + i * 32}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${t}</text>${i < 4 ? `<path d="M${120 + (i % 2) * 20} ${36 + i * 32} V ${42 + i * 32}" stroke="var(--muted)" stroke-width="2" marker-end="url(#ts1)"/>` : ""}`).join("")}
        <text x="200" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>«de la cuna</text><text x="200" y="106" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>a la tumba»</text>
      </svg>`,
    },
    {
      html: `<h3>Economía circular</h3><p>La economía <b>lineal</b> sigue el esquema <i>extraer → fabricar → usar → tirar</i>. La <b>economía circular</b> intenta que los materiales <mark>vuelvan a usarse una y otra vez</mark>: reducir, reutilizar, reparar, remanufacturar y reciclar. Un ejemplo son los <b>residuos electrónicos</b> (RAEE): contienen oro, cobre o tierras raras que se pueden recuperar, pero también sustancias tóxicas. Por eso se llevan a un <b>punto limpio</b> y nunca a la basura normal.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Economía lineal en flecha recta hacia el vertedero y economía circular en un ciclo cerrado">
        <defs>${flecha("ts2", "var(--red)")}${flecha("ts3", "var(--leaf)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 36 H 236" stroke="var(--red)" stroke-width="3" marker-end="url(#ts2)"/><text x="130" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)" ${F}>lineal: extraer → usar → tirar</text>
        <circle cx="130" cy="112" r="46" fill="none" stroke="var(--leaf)" stroke-width="4" stroke-dasharray="60 12"/>
        <path d="M168 86 L 172 92" stroke="var(--leaf)" stroke-width="4" marker-end="url(#ts3)"/>
        <g ${F} font-size="10" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="130" y="60">fabricar</text><text x="194" y="116">usar</text><text x="130" y="172">reparar</text><text x="62" y="116">reciclar</text><text x="130" y="116" fill="var(--leaf)">circular</text></g>
      </svg>`,
    },
    {
      html: `<h3>Tecnología, sociedad y ética</h3><p>La tecnología mejora la vida, pero también genera problemas. La <b>obsolescencia programada</b> consiste en diseñar productos para que <mark>dejen de funcionar o se queden anticuados</mark> pronto, y obliga a comprar otros. La Unión Europea impulsa el <b>derecho a reparar</b> y un cargador común. Otros retos: la <b>brecha digital</b> entre quienes tienen acceso a la tecnología y quienes no, la minería de minerales en condiciones injustas y el consumo energético de los centros de datos. Un tecnólogo responsable piensa en las personas y en el planeta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza entre los beneficios de la tecnología y sus impactos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 30 V 150 M60 54 H 200 M100 156 H 160" stroke="var(--ink)" stroke-width="4"/>
        <path d="M30 54 Q 60 98 90 54 M170 54 Q 200 98 230 54" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="60" y="112" fill="var(--leaf)">salud, comunicación</text><text x="60" y="128" fill="var(--leaf)">comodidad</text><text x="200" y="112" fill="var(--red)">residuos, CO₂</text><text x="200" y="128" fill="var(--red)">brecha digital</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Las erres de la tecnología sostenible",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Reducir, reutilizar, reparar y reciclar aplicados a los aparatos tecnológicos">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Reducir", "compra solo lo", "que necesitas", "var(--leaf)"], ["Reutilizar", "segunda mano,", "dona lo que no uses", "var(--pen)"], ["Reparar", "cambia la batería", "o la pantalla", "var(--sun)"], ["Reciclar", "punto limpio", "para los RAEE", "var(--red)"]]
        .map(([n, a, b, c], i) => `<rect x="${16 + i * 154}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="76" text-anchor="middle" font-size="22" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="126" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="146" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "Og6C1HyeaBs", titulo: "Energías renovables y no renovables: tipos de energía", canal: "EcologíaVerde", vistas: 776017, megusta: 0, busqueda: "tecnología y sostenibilidad energías renovables" },
  quiz: [
    { q: "¿Cuál de estas fuentes es renovable?", o: ["Carbón", "Eólica", "Gas natural"], a: 1, e: "El viento no se agota; los combustibles fósiles sí." },
    { q: "¿Por qué una bombilla LED es más eficiente que una incandescente?", o: ["Porque da más calor", "Porque convierte en luz mucha más parte de la energía", "Porque es más grande"], a: 1, e: "La incandescente pierde la mayor parte en calor." },
    { q: "El análisis del ciclo de vida estudia el impacto de un producto…", o: ["solo mientras se usa", "desde la extracción de materias primas hasta que se desecha", "solo en la fábrica"], a: 1, e: "«De la cuna a la tumba»." },
    { q: "¿Qué es la obsolescencia programada?", o: ["Diseñar productos para que duren poco", "Programar un ordenador", "Reciclar aparatos"], a: 0, e: "Obliga a sustituir productos antes de lo necesario." },
    { q: "¿Dónde se deben llevar un móvil o un cargador viejos?", o: ["Al contenedor amarillo", "A un punto limpio o de recogida de RAEE", "A la basura normal"], a: 1, e: "Contienen materiales valiosos y sustancias tóxicas." },
  ],
  examen: [
    { q: "¿Qué propone la economía circular?", o: ["Extraer, usar y tirar", "Mantener los materiales en uso el mayor tiempo posible", "Fabricar más productos"], a: 1, e: "Reducir, reutilizar, reparar y reciclar para cerrar el ciclo." },
    { q: "La energía nuclear es…", o: ["renovable y sin residuos", "no renovable, sin CO₂ pero con residuos radiactivos", "un combustible fósil"], a: 1, e: "Usa uranio, que es limitado; no emite CO₂ al generar electricidad." },
    { q: "¿Qué es el ecodiseño?", o: ["Pintar los productos de verde", "Diseñar teniendo en cuenta el impacto ambiental de todo el ciclo de vida", "Hacer productos más caros"], a: 1, e: "Menos material, reparable, reciclable y eficiente." },
  ],
  feynman: ["La diferencia entre energías renovables y no renovables", "Qué es la eficiencia energética con el ejemplo de la bombilla", "Las etapas del ciclo de vida de un móvil", "Qué es la economía circular frente a la lineal", "Qué es la obsolescencia programada y qué se puede hacer"],
  mapa: mapa("TECNOLOGÍA SOSTENIBLE", "var(--eso)", [
    ["Energía", "renovables · eficiencia", "var(--leaf)"],
    ["Ciclo de vida", "cuna → tumba · ecodiseño", "var(--pen)"],
    ["Circularidad", "reparar · reciclar · RAEE", "var(--sun)"],
    ["Ética", "obsolescencia · brecha digital", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Ejemplos de energías renovables", "Solar, eólica, hidráulica, biomasa, geotérmica y mareomotriz."],
    ["¿Qué es la eficiencia energética?", "La relación entre la energía útil que se obtiene y la energía consumida."],
    ["¿Qué es la economía circular?", "Un modelo que mantiene los materiales en uso mediante reducción, reutilización, reparación y reciclaje."],
    ["¿Qué son los RAEE?", "Residuos de aparatos eléctricos y electrónicos."],
    ["¿Qué es el ciclo de vida de un producto?", "Todas sus etapas: materias primas, fabricación, transporte, uso y fin de vida."],
  ],
  familias: ["Contad cuántos aparatos hay en casa en modo de espera y calculad cuánto se ahorraría apagándolos.", "Buscad juntos el punto limpio más cercano y llevad algún aparato viejo.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Tecnología sostenible: fuentes de energía, eficiencia, ciclo de vida, economía circular e impacto social y ambiental de la tecnología (RD 217/2022, Tecnología 4º).",
    ideas: ["Medir con un vatímetro el consumo en espera de los aparatos del aula.", "Desmontar un aparato viejo y clasificar sus materiales para reciclar.", "Consultar en tiempo real el origen de la electricidad en la web de Red Eléctrica."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Economía circular, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Econom%C3%ADa_circular" },
  ],
  revisado: "2026-11-12",
};
