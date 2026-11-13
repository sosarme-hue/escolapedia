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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Comparar las centrales eléctricas y sus impactos", "Analizar el ciclo de vida de un aparato y la gestión de los residuos electrónicos"],
  tras: {
    "Fuentes de energía": [
      { html: `<h3>Cómo se genera la electricidad</h3><p>Casi todas las centrales eléctricas funcionan igual: algo hace girar una <b>turbina</b>, que mueve un <b>alternador</b> donde, al girar imanes junto a bobinas, se produce corriente eléctrica. Lo que cambia es qué mueve la turbina. En las <b>térmicas</b> y las <b>nucleares</b>, vapor de agua calentado quemando combustible o con la fisión del uranio. En las <b>hidroeléctricas</b>, el agua que cae de un embalse. En los <b>aerogeneradores</b>, el viento. La excepción son las <b>placas fotovoltaicas</b>, que convierten directamente la luz en electricidad sin piezas móviles. Desde la central, la electricidad se eleva a alta tensión en <mark>transformadores</mark> para transportarla con menos pérdidas, y se baja a 230 V cerca de las casas.</p>${AMP.tabla(["Central", "Ventaja", "Inconveniente"], [["Térmica (carbón, gas)", "produce cuando se necesita", "emite CO₂ y contaminantes"], ["Nuclear", "mucha energía sin CO₂", "residuos radiactivos, riesgo de accidente"], ["Hidroeléctrica", "renovable y regulable", "embalses que inundan valles"], ["Eólica", "renovable, sin emisiones", "depende del viento, impacto visual y en aves"], ["Solar fotovoltaica", "renovable, en tejados", "solo de día, ocupa terreno"]])}` },
    ],
    "Eficiencia y ahorro energético": [
      { html: `<h3>Almacenar la energía</h3><p>El sol y el viento no producen cuando queremos, sino cuando hay sol y viento. Para aprovechar mejor las renovables hace falta <b>almacenar la energía</b>. Las <b>baterías</b> de litio guardan la energía de las placas solares de una casa o estabilizan la red; son las mismas que llevan los coches eléctricos. Las <b>centrales hidroeléctricas de bombeo</b> suben agua a un embalse superior cuando sobra electricidad y la dejan caer cuando falta: funcionan como una gran pila. También se investiga el <mark>hidrógeno verde</mark>, que se obtiene separando el agua con electricidad renovable y se puede quemar o usar en pilas de combustible sin emitir CO₂. Una red eléctrica inteligente combina todas estas fuentes y ajusta el consumo a la producción.</p>` },
    ],
    "El ciclo de vida de un producto": [
      { html: `<h3>Análisis del ciclo de vida</h3><p>Para saber de verdad cuánto impacto ambiental tiene un producto hay que estudiar todas sus etapas, «de la cuna a la tumba»: <b>extracción</b> de materias primas, <b>fabricación</b>, <b>transporte</b>, <b>uso</b> y <b>fin de vida</b>. En cada etapa se mide la energía, el agua, los materiales y las emisiones. Los resultados a veces sorprenden: en un móvil, cerca del <mark>80 % de su huella de carbono</mark> se produce al fabricarlo, no al cargarlo; por eso alargar su vida útil es lo que más reduce su impacto. En cambio, en una nevera o un coche de gasolina, la mayor parte del impacto está en la etapa de uso, y lo que más ayuda es que sean eficientes.</p>`, video: { id: "MyDHWRwvSzo", titulo: "Análisis de ciclo de vida", canal: "Biblioteca del Plástico", vistas: 73406 } },
    ],
    "Economía circular": [
      { html: `<h3>Residuos electrónicos y obsolescencia</h3><p>Cada año se generan en el mundo más de <b>60 millones de toneladas</b> de residuos electrónicos, y menos de una cuarta parte se recicla correctamente. Contienen metales valiosos (oro, cobre, cobalto, tierras raras) y sustancias tóxicas (plomo, mercurio, retardantes de llama). Muchos acaban en vertederos de países pobres, donde se queman al aire libre para sacar el metal, con graves daños para la salud. Por eso los aparatos viejos deben llevarse a un <b>punto limpio</b> o devolverse en la tienda. La <b>obsolescencia programada</b> consiste en diseñar productos para que duren poco o no se puedan reparar; la <mark>obsolescencia percibida</mark> nos empuja a cambiarlos por moda. La UE impulsa el derecho a reparar y el cargador universal USB-C.</p>`, video: { id: "_Ai78EvNQII", titulo: "Cómo extraer oro de desechos electrónicos", canal: "Insider Español", vistas: 635884 } },
    ],
  },
  ejemplos: [
    { enunciado: "Una placa solar de 400 W produce, de media, durante 5 horas de sol al día. ¿Cuánta energía da al año? Si una casa consume 3.500 kWh al año, ¿cuántas placas necesita?", pasos: ["Al día: 0,4 kW · 5 h = 2 kWh.", "Al año: 2 · 365 = 730 kWh por placa.", "3.500 / 730 ≈ 4,8 → 5 placas."], resultado: "730 kWh por placa al año; hacen falta unas 5 placas." },
    { enunciado: "Un frigorífico de clase A consume 150 kWh al año y uno de clase E, 400 kWh. A 0,15 €/kWh, ¿cuánto se ahorra en 10 años con el de clase A?", pasos: ["Diferencia anual: 400 − 150 = 250 kWh.", "En 10 años: 2.500 kWh.", "Ahorro: 2.500 · 0,15 = 375 €."], resultado: "Unos 375 € (y menos emisiones de CO₂)." },
    { enunciado: "Si el 80 % de la huella de un móvil está en su fabricación, ¿cuánto se reduce su impacto anual si lo usas 4 años en vez de 2?", pasos: ["El impacto de fabricación se reparte entre los años de uso.", "En 2 años: 80 % / 2 = 40 % por año. En 4 años: 80 % / 4 = 20 % por año.", "El impacto de fabricación por año se reduce a la mitad."], resultado: "El impacto de fabricación por año baja a la mitad." },
  ],
  errores: [
    "Pensar que las energías renovables no tienen ningún impacto: también ocupan terreno, usan materiales y afectan al paisaje.",
    "Creer que el coche eléctrico no contamina nada: depende de cómo se genera la electricidad y de la fabricación de su batería.",
    "Confundir eficiencia (hacer lo mismo gastando menos) con ahorro (consumir menos).",
    "Tirar aparatos o pilas a la basura normal en lugar de llevarlos al punto limpio.",
    "Pensar que reciclar compensa cualquier consumo: reducir y reutilizar tienen más efecto.",
  ],
  ejercicios: [
    { q: "Explica cómo funciona una central térmica.", sol: "Se quema un combustible para calentar agua; el vapor mueve una turbina, que hace girar un alternador que produce electricidad. El vapor se enfría y vuelve a empezar." },
    { q: "¿Qué tienen en común casi todas las centrales y cuál es la excepción?", sol: "Una turbina mueve un alternador. La excepción es la solar fotovoltaica, que transforma directamente la luz en electricidad." },
    { q: "¿Por qué la electricidad se transporta a alta tensión?", sol: "Porque así circula menos corriente para la misma potencia y se pierde menos energía en forma de calor en los cables." },
    { q: "Indica dos formas de almacenar energía eléctrica a gran escala.", sol: "Centrales hidroeléctricas de bombeo y grandes baterías (también hidrógeno verde)." },
    { q: "Ordena las etapas del ciclo de vida de una camiseta.", sol: "Cultivo del algodón (extracción), fabricación del tejido y confección, transporte, uso (lavados) y fin de vida (reutilización, reciclaje o vertedero)." },
    { q: "¿Qué es la obsolescencia programada? Pon un ejemplo.", sol: "Diseñar un producto para que deje de funcionar o quede anticuado pronto. Ejemplo: una batería pegada que no se puede cambiar o un aparato sin piezas de repuesto." },
    { q: "Indica tres metales valiosos y dos sustancias tóxicas de los residuos electrónicos.", sol: "Valiosos: oro, cobre y cobalto. Tóxicas: plomo y mercurio." },
    { q: "Calcula la energía anual de un aerogenerador de 2 MW que funciona al máximo un 30 % del tiempo.", sol: "Horas equivalentes: 0,30 · 8.760 = 2.628 h. Energía: 2 MW · 2.628 h = 5.256 MWh al año." },
    { q: "Propón cuatro acciones para alargar la vida de tu móvil.", sol: "Usar funda y protector, no dejar la batería al 0 % ni al calor, actualizar el sistema y repararlo en vez de cambiarlo (o venderlo o donarlo cuando ya no lo uses)." },
    { q: "Indica dos impactos positivos y dos negativos de la tecnología en la sociedad.", sol: "Positivos: avances en medicina y facilidad para comunicarse y aprender. Negativos: residuos y consumo de recursos, y brecha digital o pérdida de privacidad." },
  ],
  quiz: [
    { q: "En casi todas las centrales eléctricas, la electricidad se produce en…", o: ["el alternador", "el embalse", "el transformador"], a: 0, e: "Movido por una turbina." },
    { q: "La central que convierte la luz directamente en electricidad es la…", o: ["térmica", "fotovoltaica", "nuclear"], a: 1, e: "Sin turbina ni piezas móviles." },
    { q: "Una central de bombeo sirve para…", o: ["almacenar energía", "producir petróleo", "potabilizar agua"], a: 0, e: "Sube agua cuando sobra electricidad." },
    { q: "En un móvil, la mayor parte de su huella de carbono está en…", o: ["la carga", "la fabricación", "el transporte"], a: 1, e: "Por eso conviene alargar su vida." },
    { q: "Los aparatos electrónicos viejos se deben llevar a…", o: ["la basura orgánica", "un punto limpio", "el contenedor amarillo"], a: 1, e: "Para reciclarlos sin contaminar." },
  ],
  tarjetas: [
    ["Turbina y alternador", "La turbina gira; el alternador transforma ese giro en electricidad."],
    ["Análisis del ciclo de vida", "Estudio del impacto de un producto desde la extracción hasta su fin de vida."],
    ["Obsolescencia programada", "Diseñar productos para que duren poco o no se puedan reparar."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "El viaje de un móvil",
    html: `<p>Antes de llegar a tu bolsillo, tu móvil ya había dado varias vueltas al mundo. El cobalto de su batería pudo salir de una mina del Congo; el litio, de un salar de Chile; las tierras raras de sus altavoces, de China. Se fabricó en Asia con enormes cantidades de agua y energía, viajó en barco y en camión y, tras dos o tres años de uso, quizá acabe en un cajón o en un vertedero de Ghana donde se queman cables para sacar el cobre. Alrededor del 80 % de su huella de carbono se produjo antes de que lo encendieras por primera vez.</p>
      <p>La tecnología es parte del problema ambiental, pero también de la solución: los paneles solares, los aerogeneradores, los coches eléctricos, las redes inteligentes o el reciclaje de metales son tecnología. En este tema estudiarás de dónde viene la energía y cómo llega a casa, qué es la huella de carbono, cómo almacenar la energía de las renovables, cómo diseñar productos que duren y se puedan reparar, y cómo la tecnología puede ayudar a cumplir los Objetivos de Desarrollo Sostenible. Sabrás tomar decisiones de ingeniero y de consumidor responsable.</p>`,
  },
  svgs: {
    "Cómo se genera la electricidad": L.flujo("Cómo se genera la electricidad en una central", ["Fuente: vapor, agua o viento", "Mueve una turbina", "La turbina gira el alternador", "Imanes y bobinas: corriente", "Transformador eleva la tensión"], { t: "De la turbina al cable" }),
    "Almacenar la energía": L.cajas("Formas de almacenar energía", [["Baterías", "litio: horas,|coches y casas"], ["Bombeo", "subir agua|a un embalse"], ["Hidrógeno", "electrólisis|y pila"], ["Térmico", "sales fundidas|en solar"]], { t: "Guardar la energía" }),
    "Análisis del ciclo de vida": L.barras("Reparto aproximado de la huella de carbono de un móvil por etapas", [["Fabricación", 80], ["Uso (carga)", 12], ["Transporte", 6], ["Fin de vida", 2]], { t: "Huella de un móvil", unidad: " %" }),
    "Residuos electrónicos y obsolescencia": L.comparar("Contenido valioso y tóxico de los residuos electrónicos", ["Valioso", ["oro y plata", "cobre", "cobalto y litio", "tierras raras"]], ["Tóxico", ["plomo", "mercurio", "cadmio", "retardantes"]]),
  },
  tras: {
    "Fuentes de energía": [
      {
        html: `<h3>Cambio climático y huella de carbono</h3><p>Al quemar combustibles fósiles se libera <b>dióxido de carbono</b> (CO₂), que junto con el metano y otros gases retiene el calor en la atmósfera: es el <b>efecto invernadero</b>. Es un fenómeno natural que hace la Tierra habitable, pero las emisiones humanas desde la Revolución Industrial lo han intensificado y la temperatura media del planeta ha subido ya más de 1,1 °C. Las consecuencias son olas de calor más intensas, sequías, lluvias torrenciales, subida del nivel del mar y pérdida de biodiversidad.</p>
          <p>La <b>huella de carbono</b> mide las emisiones de gases de efecto invernadero que causa una persona, un producto o una actividad, expresadas en kilogramos o toneladas de <mark>CO₂ equivalente</mark>. Un español emite de media unas 5 toneladas al año; el transporte, la calefacción, la alimentación y lo que compramos son las partidas principales. El <b>Acuerdo de París</b> (2015) busca limitar el calentamiento a 1,5-2 °C, y la Unión Europea se ha comprometido a la <b>neutralidad climática</b> en 2050: emitir solo lo que se pueda absorber. Para lograrlo hay que cambiar la forma de producir y usar la energía, y aquí la tecnología es protagonista.</p>`,
        svg: L.barras("Emisiones aproximadas de CO₂ por kWh según la fuente", [["Carbón", 900], ["Gas natural", 450], ["Solar FV", 40], ["Eólica", 12], ["Nuclear", 12]], { t: "g CO₂ por kWh (ciclo de vida)" }),
      },
    ],
    "Cómo se genera la electricidad": [
      {
        html: `<h3>La red eléctrica</h3><p>La electricidad no se puede guardar fácilmente en grandes cantidades, así que en cada instante la producción debe igualar al consumo. En España, <b>Red Eléctrica</b> vigila ese equilibrio desde un centro de control y ordena a las centrales subir o bajar su producción. La energía sale de las centrales a unos 20 kV, los <b>transformadores</b> elevan la tensión hasta 220 o 400 kV para el transporte a larga distancia (a mayor tensión, menos corriente y menos pérdidas por calor en los cables) y, cerca de las ciudades, las <b>subestaciones</b> la reducen poco a poco hasta los 230 V de los enchufes.</p>
          <p>El <b>mix eléctrico</b> es la combinación de fuentes con que se produce la electricidad de un país. En España, las renovables (eólica, solar, hidráulica) generan ya más de la mitad en un año normal. Como producen según el tiempo, la red necesita <b>flexibilidad</b>: almacenamiento, centrales que arranquen rápido, interconexiones con otros países y una <mark>red inteligente</mark> (<i>smart grid</i>) que, con contadores digitales, ajuste el consumo a la producción. Por eso la electricidad es más barata en las horas de mucho sol o viento, y conviene desplazar el consumo a esas horas.</p>`,
        svg: L.flujo("Camino de la electricidad desde la central hasta casa", ["Central: unos 20 kV", "Transformador elevador", "Transporte a 220-400 kV", "Subestaciones reducen la tensión", "Casa: 230 V"], { t: "La red eléctrica" }),
      },
    ],
    "Almacenar la energía": [
      {
        html: `<h3>Hidrógeno verde y movilidad eléctrica</h3><p>El transporte produce alrededor de una cuarta parte de las emisiones en Europa. El <b>coche eléctrico</b> sustituye el motor de combustión, que aprovecha solo un 25-30 % de la energía del combustible, por un motor eléctrico que aprovecha un 85-90 %. No emite gases por el tubo de escape, aunque su beneficio real depende de cómo se genera la electricidad con la que se carga y del impacto de fabricar su batería. Además, al frenar recupera energía (<b>frenada regenerativa</b>). La movilidad sostenible también incluye ir a pie, en bici, en transporte público y compartir vehículo.</p>
          <p>Para lo que es difícil electrificar (camiones de larga distancia, barcos, aviones, la industria del acero) se investiga el <b>hidrógeno verde</b>. Se obtiene por <mark>electrólisis</mark>: la electricidad renovable separa el agua en hidrógeno y oxígeno. Después, en una <b>pila de combustible</b>, el hidrógeno se combina con el oxígeno del aire y produce electricidad, calor y solo agua. Su inconveniente es la eficiencia: en todo el proceso se pierde más de la mitad de la energía, y almacenarlo y transportarlo es complicado. El hidrógeno «gris», el más usado hoy, se produce a partir de gas natural y sí emite CO₂.</p>`,
        svg: L.flujo("Ciclo del hidrógeno verde", ["Electricidad renovable", "Electrólisis: agua → H₂ + O₂", "Almacenar el hidrógeno", "Pila de combustible", "Electricidad y solo agua"], { t: "Hidrógeno verde" }),
      },
    ],
    "Análisis del ciclo de vida": [
      {
        html: `<h3>Ecodiseño y materiales sostenibles</h3><p>Se calcula que alrededor del 80 % del impacto ambiental de un producto se decide en su fase de diseño. El <b>ecodiseño</b> tiene en cuenta el medio ambiente desde el principio, siguiendo varias estrategias: usar <b>menos material</b> (piezas más finas, sin envoltorios innecesarios), elegir materiales <b>reciclados, renovables o reciclables</b> y evitar sustancias tóxicas; reducir la energía de fabricación y de uso; diseñar para que el producto <mark>dure</mark>, se pueda <b>reparar</b> (tornillos en lugar de pegamento, piezas estándar, manuales) y <b>actualizar</b>; y facilitar el <b>desmontaje</b> y la separación de materiales al final de su vida.</p>
          <p>También importa la elección de materiales: los <b>bioplásticos</b> como el PLA proceden de plantas, aunque no todos se degradan en la naturaleza; la madera certificada (FSC) garantiza una gestión forestal sostenible; el aluminio y el acero se reciclan indefinidamente con mucha menos energía que la necesaria para producirlos de nuevo. Las <b>etiquetas ecológicas</b>, como la Etiqueta Ecológica Europea, ayudan a reconocer productos con menor impacto. La nueva normativa europea de ecodiseño exigirá información sobre durabilidad, reparabilidad y contenido reciclado en muchos productos mediante un <b>pasaporte digital</b>.</p>`,
        svg: L.estrella("Estrategias de ecodiseño", "Ecodiseño", ["menos material", "reciclado", "duradero", "reparable", "desmontable", "eficiente"]),
      },
    ],
    "Tecnología, sociedad y ética": [
      {
        html: `<h3>Objetivos de Desarrollo Sostenible y tecnología apropiada</h3><p>En 2015, la ONU aprobó la <b>Agenda 2030</b> con 17 <b>Objetivos de Desarrollo Sostenible</b> (ODS): acabar con la pobreza y el hambre, garantizar la salud, la educación y la igualdad, el agua limpia, la energía asequible y no contaminante, ciudades sostenibles, producción y consumo responsables, acción por el clima, entre otros. La tecnología es clave en casi todos: depuradoras y potabilizadoras para el ODS 6, renovables para el 7, telemedicina para el 3, conectividad para el 4 y el 9.</p>
          <p>Pero no siempre la tecnología más avanzada es la mejor. La <mark>tecnología apropiada</mark> es la que se adapta a las necesidades, los recursos y la cultura de cada lugar: debe ser barata, fácil de mantener y reparar con materiales locales. Ejemplos: las cocinas solares, los filtros de agua de cerámica, las bombas de pedal para regar o las neveras de barro que enfrían por evaporación. Muchas de estas soluciones nacen del trabajo conjunto de ingenieros y comunidades. Al diseñar un proyecto conviene preguntarse a qué ODS contribuye, a quién beneficia y a quién puede perjudicar.</p>`,
        svg: L.rejilla("Ejemplos de tecnología relacionada con algunos ODS", ["ODS", "Tema", "Tecnología"], [["6", "agua limpia", "filtros, depuradoras"], ["7", "energía", "solar, eólica"], ["11", "ciudades", "transporte público"], ["12", "consumo", "ecodiseño, reciclaje"], ["13", "clima", "renovables, eficiencia"]], { t: "Tecnología y ODS" }),
      },
      {
        html: `<h3>Derecho a reparar y consumo responsable</h3><p>Muchos aparatos se tiran cuando un arreglo sencillo los devolvería a la vida: una batería gastada, una pantalla rota, un botón que falla. El movimiento por el <b>derecho a reparar</b> reclama que los fabricantes ofrezcan piezas de recambio a precios razonables, manuales y herramientas para cualquier taller, y que no bloqueen las reparaciones por software. La Unión Europea ha aprobado normas en este sentido: los fabricantes deben ofrecer reparación durante años tras la venta, y móviles y tabletas deben indicar su <mark>índice de reparabilidad</mark> y tener baterías sustituibles.</p>
          <p>Como consumidores también podemos actuar siguiendo la jerarquía de las erres: primero <b>reducir</b> (¿lo necesito de verdad?), después <b>reutilizar</b> y <b>reparar</b>, comprar de segunda mano o reacondicionado, y solo al final <b>reciclar</b>. Los <b>cafés de reparación</b> (<i>repair cafés</i>), donde voluntarios enseñan a arreglar objetos, se extienden por muchas ciudades. Alargar un año la vida de un móvil reduce su impacto anual de forma notable, porque la mayor parte de su huella está en la fabricación. Un consumo responsable no es renunciar a la tecnología, sino usarla mejor y durante más tiempo.</p>`,
        svg: L.capas("Jerarquía de las erres, de más a menos prioritaria", [["Reducir", "¿lo necesito?"], ["Reutilizar", "segunda mano"], ["Reparar", "alargar la vida"], ["Reciclar", "último recurso"]], { t: "Primero reducir" }),
      },
    ],
  },
  secciones: [7, 5, 3],
  niveles: "bmmbbbbmbm",
  ejercicios: [
    { nivel: "básico", q: "¿Qué es la huella de carbono y en qué unidad se mide?", sol: "La cantidad de gases de efecto invernadero que emite una persona, producto o actividad; se mide en kg o toneladas de CO₂ equivalente." },
    { nivel: "básico", q: "¿Qué es el mix eléctrico?", sol: "La combinación de fuentes de energía (eólica, solar, hidráulica, nuclear, gas…) con que se produce la electricidad de un país." },
    { nivel: "básico", q: "¿Cómo se obtiene el hidrógeno verde?", sol: "Por electrólisis del agua usando electricidad de fuentes renovables, que separa el agua en hidrógeno y oxígeno." },
    { nivel: "básico", q: "Nombra cuatro estrategias de ecodiseño.", sol: "Usar menos material, materiales reciclados o reciclables, diseñar para que dure y se pueda reparar, facilitar el desmontaje y reducir la energía de uso." },
    { nivel: "básico", q: "¿Qué es la tecnología apropiada? Pon un ejemplo.", sol: "La adaptada a las necesidades, recursos y cultura del lugar: barata, sencilla y reparable con medios locales. Ejemplo: una cocina solar o una nevera de barro." },
    { nivel: "básico", q: "Ordena las erres de más a menos prioritaria: reciclar, reducir, reparar, reutilizar.", sol: "Reducir, reutilizar, reparar y, por último, reciclar." },
    { nivel: "medio", q: "Explica por qué la electricidad se transporta a 400 kV y no a 230 V.", sol: "Para la misma potencia (P = V · I), a mayor tensión circula menos corriente; las pérdidas por calor en los cables dependen de I², así que se reducen muchísimo." },
    { nivel: "medio", q: "Un coche de gasolina emite 120 g de CO₂/km. ¿Cuánto emite al año si recorre 12.000 km?", sol: "120 · 12.000 = 1.440.000 g = 1.440 kg ≈ 1,44 toneladas de CO₂." },
    { nivel: "medio", q: "Un coche eléctrico gasta 15 kWh/100 km. Si la electricidad emite 150 g CO₂/kWh, ¿cuánto emite por km? Compara con el de gasolina.", sol: "0,15 kWh/km · 150 g = 22,5 g CO₂/km, unas cinco veces menos que 120 g/km (sin contar la fabricación de la batería)." },
    { nivel: "medio", q: "¿Por qué la electricidad suele ser más barata en las horas centrales de días soleados?", sol: "Porque hay mucha producción solar, una energía con coste de funcionamiento casi nulo, y la oferta supera a la demanda; el precio baja." },
    { nivel: "medio", q: "Compara la eficiencia de un motor de combustión (25 %) y uno eléctrico (90 %): de 100 kWh de energía, ¿cuánta se convierte en movimiento en cada uno?", sol: "Combustión: 25 kWh. Eléctrico: 90 kWh. El resto se pierde principalmente como calor." },
    { nivel: "medio", q: "¿Qué ventajas y qué inconvenientes tiene el hidrógeno verde?", sol: "Ventajas: no emite CO₂ al usarse (solo agua), almacena energía renovable y sirve para transporte pesado e industria. Inconvenientes: baja eficiencia del proceso, difícil de almacenar y transportar, y caro." },
    { nivel: "medio", q: "Elige tres ODS y explica qué tecnología contribuye a cada uno.", sol: "Ejemplo: ODS 6 (agua) → potabilizadoras y filtros; ODS 7 (energía) → paneles solares y aerogeneradores; ODS 13 (clima) → eficiencia energética y transporte eléctrico." },
    { nivel: "medio", q: "Analiza el ecodiseño de un móvil: ¿qué mejoras propondrías?", sol: "Batería sustituible sin herramientas especiales, tornillos en vez de pegamento, piezas de recambio disponibles, más años de actualizaciones, carcasa de plástico o aluminio reciclado, cargador USB-C estándar y embalaje de cartón mínimo." },
    { nivel: "medio", q: "¿Qué es el índice de reparabilidad y para qué sirve?", sol: "Una nota que indica lo fácil que es reparar un aparato (piezas, manuales, desmontaje, precio de recambios). Ayuda al consumidor a elegir productos que duren más." },
    { nivel: "medio", q: "¿Qué es la neutralidad climática y cuándo quiere alcanzarla la UE?", sol: "Emitir solo los gases de efecto invernadero que se puedan absorber (por bosques o tecnología), con un balance neto cero. La UE la quiere alcanzar en 2050." },
    { nivel: "avanzado", q: "Calcula tu huella de carbono aproximada del transporte de una semana: 50 km en coche (120 g/km), 30 km en autobús (40 g/km por persona) y 20 km en bici.", sol: "Coche: 50 · 120 = 6.000 g. Autobús: 30 · 40 = 1.200 g. Bici: 0. Total: 7.200 g = 7,2 kg de CO₂ a la semana; unos 375 kg al año." },
    { nivel: "avanzado", q: "Un móvil tiene una huella de 70 kg de CO₂, de los que el 80 % es la fabricación. Compara la huella anual si lo usas 2 años o 4 años.", sol: "Fabricación: 56 kg; uso y resto: 14 kg en total (unos 7 kg/año en 2 años; si se usa 4, unos 3,5 kg/año más de carga). 2 años: (56 + 14) / 2 = 35 kg/año. 4 años: (56 + 28) / 4 = 21 kg/año. Alargarlo reduce el impacto anual cerca de un 40 %." },
    { nivel: "avanzado", q: "Una central de bombeo sube 1.000.000 m³ de agua 300 m. ¿Cuánta energía potencial almacena en MWh? (E = m · g · h)", sol: "m = 10⁹ kg. E = 10⁹ · 9,8 · 300 = 2,94 · 10¹² J. En MWh: 2,94 · 10¹² / 3,6 · 10⁹ ≈ 817 MWh." },
    { nivel: "avanzado", q: "Del hidrógeno verde se recupera como electricidad alrededor del 35 % de la energía inicial; de una batería, el 90 %. Si tienes 100 kWh solares, ¿cuánta energía recuperas en cada caso? ¿Cuándo compensa el hidrógeno?", sol: "Hidrógeno: 35 kWh; batería: 90 kWh. El hidrógeno solo compensa cuando las baterías no son viables: almacenar energía durante meses, transporte pesado o procesos industriales que necesitan hidrógeno como materia prima." },
    { nivel: "avanzado", q: "Diseña una tecnología apropiada para conservar alimentos sin electricidad en una zona cálida y seca.", sol: "Una nevera de barro (zeer pot): una vasija dentro de otra con arena húmeda entre ambas y un paño mojado encima. El agua se evapora y enfría el interior varios grados. Es barata, se hace con materiales locales y se repara fácilmente." },
    { nivel: "avanzado", q: "Debate: ¿es el coche eléctrico la solución a la movilidad sostenible? Da argumentos a favor y en contra.", sol: "A favor: más eficiente, sin emisiones locales, menos CO₂ si la electricidad es renovable. En contra: la batería tiene un gran impacto de fabricación y minería, sigue ocupando espacio y causando atascos; la solución más sostenible combina ciudad compacta, transporte público, bici y menos coches." },
    { nivel: "avanzado", q: "Explica cómo una red inteligente ayuda a integrar más energías renovables.", sol: "Con contadores digitales y comunicación en tiempo real, la red puede activar consumos (cargar coches, calentar agua, bombear) cuando sobra energía solar o eólica, avisar con precios horarios y coordinar baterías y autoconsumo, equilibrando producción y demanda." },
    { nivel: "avanzado", q: "Analiza la «obsolescencia percibida»: qué es y cómo se diferencia de la programada.", sol: "La percibida es cuando un producto que funciona bien se sustituye porque parece anticuado por la moda o la publicidad (un móvil nuevo cada año). La programada es un defecto o limitación introducido para que deje de funcionar antes. En la percibida la decisión es del consumidor." },
    { nivel: "avanzado", q: "Propón un plan para que tu instituto reduzca su huella de carbono un 20 % en tres años, con cinco medidas medibles.", sol: "Ejemplo: 1) LED y sensores de presencia en todas las aulas. 2) Apagado programado de ordenadores. 3) Placas solares de autoconsumo en la cubierta. 4) Camino escolar seguro y aparcabicis para aumentar los desplazamientos a pie o en bici. 5) Punto de recogida de RAEE y reparación de equipos. Medir el consumo eléctrico y la movilidad cada trimestre." },
  ],
  ejemplos: [
    { enunciado: "Calcula las emisiones anuales de una vivienda que consume 3.000 kWh si la electricidad emite 150 g CO₂/kWh y compáralas con un mix de carbón (900 g/kWh).", pasos: ["Mix actual: 3.000 · 150 = 450.000 g = 450 kg de CO₂.", "Carbón: 3.000 · 900 = 2.700.000 g = 2.700 kg.", "Diferencia: 2.250 kg, seis veces menos con el mix actual."], resultado: "450 kg frente a 2.700 kg de CO₂ al año." },
    { enunciado: "Un transformador eleva la tensión de 20 kV a 400 kV para transportar 100 MW. ¿Cuánta corriente circula antes y después?", pasos: ["I = P / V.", "A 20 kV: 100.000.000 / 20.000 = 5.000 A.", "A 400 kV: 100.000.000 / 400.000 = 250 A.", "Las pérdidas dependen de I²: se reducen 400 veces."], resultado: "5.000 A frente a 250 A." },
    { enunciado: "Decide qué hacer con una tableta de 5 años que va lenta y cuya batería dura 2 horas.", pasos: ["Reducir: ¿necesito una nueva o basta con mejorar esta?", "Reparar: cambiar la batería en un servicio técnico.", "Reutilizar: restablecerla, borrar apps y usarla para leer o como pantalla de cocina, o donarla.", "Reciclar: solo si no tiene arreglo, en un punto limpio (RAEE)."], resultado: "Cambiar la batería y restablecerla antes de comprar otra." },
  ],
  errores: ["Pensar que un coche eléctrico no tiene ningún impacto: la fabricación de la batería y la electricidad que usa también emiten."],
  cuarta: ["Petróleo", "Porque es más barata", "solo en la tienda", "Arreglar aparatos rotos", "Al contenedor de vidrio", "el contador", "hidráulica", "producir carbón", "la caja", "el contenedor de papel"],
  quiz: [
    { q: "El gas que más contribuye al efecto invernadero por las actividades humanas es…", o: ["el oxígeno", "el CO₂", "el nitrógeno", "el helio"], a: 1, e: "Procede sobre todo de quemar combustibles fósiles." },
    { q: "La electricidad se transporta a alta tensión para…", o: ["que llegue más rápido", "reducir las pérdidas en los cables", "que sea más barata de producir", "cambiar su color"], a: 1, e: "Menos corriente, menos calor." },
    { q: "La entidad que equilibra producción y consumo eléctrico en España es…", o: ["Red Eléctrica", "la DGT", "el IDAE", "la CNMV"], a: 0, e: "Opera el sistema eléctrico." },
    { q: "La electrólisis del agua produce…", o: ["petróleo", "hidrógeno y oxígeno", "CO₂", "sal"], a: 1, e: "Es la base del hidrógeno verde." },
    { q: "Una pila de combustible de hidrógeno emite…", o: ["CO₂", "agua", "humo negro", "metano"], a: 1, e: "Combina hidrógeno y oxígeno." },
    { q: "Un motor eléctrico aprovecha aproximadamente…", o: ["el 25 %", "el 50 %", "el 90 %", "el 100 %"], a: 2, e: "Mucho más que uno de combustión." },
    { q: "La mayor parte del impacto de un producto se decide en…", o: ["el diseño", "la venta", "la publicidad", "el reciclaje"], a: 0, e: "Por eso es clave el ecodiseño." },
    { q: "Los ODS de la Agenda 2030 son…", o: ["5", "10", "17", "100"], a: 2, e: "Aprobados por la ONU en 2015." },
    { q: "En la jerarquía de las erres, lo primero es…", o: ["reciclar", "reducir", "reparar", "tirar"], a: 1, e: "El mejor residuo es el que no se genera." },
    { q: "El índice de reparabilidad indica…", o: ["lo rápido que carga", "lo fácil que es reparar un aparato", "su precio", "su consumo"], a: 1, e: "Ayuda a elegir productos duraderos." },
  ],
  cuartaEx: ["Comprar siempre lo más nuevo", "renovable y con CO₂", "Fabricar con plástico"],
  examen: [
    { q: "El Acuerdo de París busca limitar el calentamiento a…", o: ["0,5 °C", "1,5-2 °C", "5 °C", "10 °C"], a: 1, e: "Respecto a la época preindustrial." },
    { q: "La red inteligente (smart grid)…", o: ["ajusta consumo y producción con datos en tiempo real", "solo funciona con carbón", "elimina los transformadores", "no usa contadores"], a: 0, e: "Facilita integrar renovables." },
    { q: "El hidrógeno gris se produce…", o: ["con renovables", "a partir de gas natural, con emisiones", "del aire", "con energía nuclear siempre"], a: 1, e: "Es el más usado hoy." },
    { q: "Una nevera de barro es un ejemplo de…", o: ["obsolescencia programada", "tecnología apropiada", "energía nuclear", "domótica"], a: 1, e: "Barata, local y sencilla." },
    { q: "El derecho a reparar reclama…", o: ["piezas, manuales y herramientas accesibles", "aparatos más caros", "prohibir el reciclaje", "garantías de un mes"], a: 0, e: "Para alargar la vida de los productos." },
  ],
  tarjetas: [
    ["Huella de carbono", "Emisiones de gases de efecto invernadero en CO₂ equivalente."],
    ["Transporte en alta tensión", "Menos corriente y menos pérdidas en los cables."],
    ["Hidrógeno verde", "Electrólisis con renovables; pila de combustible que solo emite agua."],
    ["Jerarquía de las erres", "Reducir, reutilizar, reparar y reciclar."],
  ],
  glosario: [
    ["Energía renovable", "Fuente que se regenera de forma natural: solar, eólica, hidráulica, biomasa…"],
    ["Efecto invernadero", "Retención del calor en la atmósfera por ciertos gases."],
    ["Huella de carbono", "Emisiones de gases de efecto invernadero asociadas a algo o alguien."],
    ["Alternador", "Máquina que transforma el giro en electricidad."],
    ["Transformador", "Aparato que eleva o reduce la tensión de la corriente alterna."],
    ["Mix eléctrico", "Combinación de fuentes con que se produce la electricidad."],
    ["Red inteligente", "Red eléctrica con comunicación digital para equilibrar producción y consumo."],
    ["Eficiencia energética", "Relación entre la energía útil y la consumida."],
    ["Central de bombeo", "Central hidráulica que almacena energía subiendo agua a un embalse."],
    ["Hidrógeno verde", "Hidrógeno obtenido por electrólisis con electricidad renovable."],
    ["Pila de combustible", "Dispositivo que produce electricidad combinando hidrógeno y oxígeno."],
    ["Análisis del ciclo de vida", "Estudio del impacto de un producto desde la extracción hasta el residuo."],
    ["Ecodiseño", "Diseño que reduce el impacto ambiental en todo el ciclo de vida."],
    ["Economía circular", "Modelo que mantiene los materiales en uso el mayor tiempo posible."],
    ["RAEE", "Residuos de aparatos eléctricos y electrónicos."],
    ["Obsolescencia programada", "Diseño de productos para que dejen de funcionar antes de tiempo."],
    ["ODS", "Objetivos de Desarrollo Sostenible de la Agenda 2030."],
    ["Tecnología apropiada", "Tecnología adaptada a los recursos y necesidades de cada lugar."],
  ],
  situacion: {
    titulo: "Instituto neutro en carbono",
    reto: "Vuestro instituto quiere reducir su impacto ambiental. Cada equipo calculará la huella de carbono de una parte del centro (electricidad, calefacción, transporte, residuos electrónicos) y propondrá un plan con medidas tecnológicas y de hábitos para reducirla.",
    pasos: [
      "Recoged datos reales: facturas de luz y calefacción, encuesta de movilidad al alumnado, inventario de aparatos.",
      "Calculad la huella de carbono de vuestra parte con factores de emisión (kg CO₂ por kWh, por km…) en una hoja de cálculo.",
      "Investigad soluciones: autoconsumo solar, eficiencia, movilidad sostenible, reparación y reciclaje de RAEE.",
      "Calculad el coste, el ahorro energético, la reducción de CO₂ y la amortización de cada medida, y relacionadlas con los ODS.",
      "Presentad el plan a la dirección o al consejo escolar con un póster o una presentación.",
    ],
    producto: "Un informe con la huella de carbono calculada, un plan de reducción priorizado y un póster para el centro.",
    evaluacion: ["Los datos se recogen con rigor y los cálculos de energía y emisiones son correctos.", "Las medidas son técnicamente viables y se justifican con coste y ahorro.", "Se relacionan las propuestas con los ODS y se valoran sus impactos sociales.", "La presentación es clara y convincente."],
  },
  objetivos: ["Calcular la huella de carbono y explicar el funcionamiento de la red eléctrica", "Aplicar el ecodiseño, el derecho a reparar y los ODS a decisiones tecnológicas"],
  fuentes: [{ t: "Naciones Unidas: Objetivos de Desarrollo Sostenible", url: "https://www.un.org/sustainabledevelopment/es/" }],
});
