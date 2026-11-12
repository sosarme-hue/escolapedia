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
