// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, filas, flujo, dos, figCols } = require("./_hum");

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "La economía y las decisiones",
  minutos: 35,
  objetivos: ["Entender la economía como la ciencia que estudia cómo gestionar recursos escasos", "Aplicar el concepto de coste de oportunidad a decisiones cotidianas", "Identificar los agentes económicos y el flujo circular de la renta"],
  claves: ["escasez", "coste de oportunidad", "necesidades", "bienes y servicios", "agentes económicos", "flujo circular"],
  pregunta: {
    texto: "Tienes 20 euros y una tarde libre. Puedes ir al cine con tus amigos o comprarte el videojuego que quieres desde hace semanas. No te llega para las dos cosas. ¿Cómo decides?",
    respuesta: "Acabas de enfrentarte al problema básico de la <mark>economía</mark>: los recursos (dinero, tiempo) son <b>escasos</b> y las necesidades y deseos, casi ilimitados. Elegir una cosa supone renunciar a otra, y eso a lo que renuncias es el <b>coste de oportunidad</b>.",
  },
  bloques: [
    {
      html: `<h3>La escasez, el problema económico</h3><p>Las personas tenemos <b>necesidades</b> (comer, vestir, aprender, divertirnos) que satisfacemos con <b>bienes</b> (objetos) y <b>servicios</b> (actividades, como una clase o un corte de pelo). Pero los recursos para producirlos son limitados: esa es la <mark>escasez</mark>. La economía estudia cómo las personas y las sociedades <b>eligen</b> qué producir, cómo y para quién con esos recursos escasos.</p>`,
      svg: dos("Necesidades ilimitadas frente a recursos escasos", ["Necesidades", ["alimento", "vivienda", "educación", "ocio", "¡casi infinitas!"], "var(--red)"], ["Recursos", ["tierra", "trabajo", "capital", "tiempo", "¡limitados!"], "var(--leaf)"]),
    },
    {
      html: `<h3>El coste de oportunidad</h3><p>Cada decisión tiene un precio oculto: el <mark>coste de oportunidad</mark>, que es el valor de la <b>mejor alternativa a la que renuncias</b>. Si eliges el videojuego, tu coste de oportunidad es la tarde de cine con tus amigos. Si dedicas el sábado a trabajar, renuncias a descansar. Pensar en el coste de oportunidad ayuda a tomar mejores decisiones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza con 20 euros: cine frente a videojuego; lo que dejas es el coste de oportunidad">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 40 V 140 M 90 150 H 170" stroke="var(--ink)" stroke-width="3"/>
        <path d="M50 64 L 210 56" stroke="var(--ink)" stroke-width="3"/>
        <circle cx="130" cy="40" r="14" fill="var(--sun)"/><text x="130" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>20 €</text>
        <path d="M30 64 H 70 L 62 92 H 38 Z" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M190 56 H 230 L 222 84 H 198 Z" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
        <text x="50" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="var(--pen)" ${F}>cine</text>
        <text x="210" y="104" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>videojuego</text>
        <text x="130" y="172" text-anchor="middle" font-size="11.5" fill="var(--muted)" ${F}>lo que dejas = coste de oportunidad</text>
      </svg>`,
    },
    {
      html: `<h3>Los factores de producción</h3><p>Para producir bienes y servicios se combinan los <mark>factores productivos</mark>: la <b>tierra</b> (recursos naturales), el <b>trabajo</b> (esfuerzo físico y mental de las personas), el <b>capital</b> (máquinas, herramientas, edificios) y la <b>iniciativa empresarial</b> (quien organiza los demás y asume el riesgo). Cada uno recibe una recompensa: renta, salario, interés y beneficio.</p>`,
      svg: filas("Factores de producción y su recompensa", [["Tierra", "recursos naturales → renta", "var(--leaf)"], ["Trabajo", "personas → salario", "var(--pen)"], ["Capital", "máquinas → interés", "var(--muted)"], ["Empresa", "iniciativa → beneficio", "var(--red)"]]),
    },
    {
      html: `<h3>Los agentes económicos y el flujo circular</h3><p>En la economía participan tres <mark>agentes</mark>: las <b>familias</b> (consumen y ofrecen su trabajo), las <b>empresas</b> (producen bienes y servicios y contratan trabajo) y el <b>sector público</b> (cobra impuestos y ofrece servicios como sanidad o educación). El dinero circula entre ellos: las familias trabajan en las empresas, cobran un salario y lo gastan comprando lo que las empresas producen. Es el <b>flujo circular de la renta</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Flujo circular: familias y empresas intercambian trabajo y salarios, bienes y pagos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <defs><marker id="eco1a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
        <rect x="14" y="66" width="76" height="40" rx="10" fill="var(--pen)"/><text x="52" y="91" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>familias</text>
        <rect x="170" y="66" width="76" height="40" rx="10" fill="var(--leaf)"/><text x="208" y="91" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>empresas</text>
        <path d="M60 62 C 90 18, 170 18, 200 62" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#eco1a)"/>
        <path d="M200 110 C 170 156, 90 156, 60 110" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#eco1a)"/>
        <text x="130" y="28" text-anchor="middle" font-size="11.5" fill="var(--ink)" ${F}>trabajo y gasto en compras</text>
        <text x="130" y="166" text-anchor="middle" font-size="11.5" fill="var(--ink)" ${F}>salarios y bienes</text>
        <text x="130" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)" ${F}>sector público</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Las tres preguntas de toda economía",
    svg: figCols("Qué producir, cómo producir y para quién producir, con ejemplos", [
      ["¿Qué producir?", ["¿coches o bicis?", "¿hospitales o", "carreteras?", "depende de las", "necesidades"], "var(--pen)"],
      ["¿Cómo producir?", ["¿con más máquinas", "o más personas?", "¿energía solar", "o petróleo?", "eficiencia"], "var(--leaf)"],
      ["¿Para quién?", ["¿cómo se reparte", "lo producido?", "salarios, precios", "impuestos y", "ayudas"], "var(--red)"],
    ]),
  },
  video: { id: "pplbyImPNJw", titulo: "Coste de oportunidad explicado en 2 minutos", canal: "GAYTÁN", vistas: 531663, megusta: 0, busqueda: "qué es la economía escasez coste de oportunidad" },
  quiz: [
    { q: "¿Qué estudia la economía?", o: ["Solo el dinero de los bancos", "Cómo gestionar recursos escasos para satisfacer necesidades", "Los precios de la Bolsa"], a: 1, e: "La economía estudia las decisiones sobre qué, cómo y para quién producir con recursos limitados." },
    { q: "Si eliges estudiar en vez de ir al cine, el coste de oportunidad es…", o: ["el precio de la entrada", "la tarde de cine a la que renuncias", "nada"], a: 1, e: "Es el valor de la mejor alternativa a la que renuncias." },
    { q: "¿Cuál de estos es un servicio?", o: ["Una camiseta", "Una clase de guitarra", "Un balón"], a: 1, e: "Los servicios son actividades que no se pueden almacenar." },
    { q: "La recompensa del factor trabajo es…", o: ["el salario", "el interés", "la renta"], a: 0, e: "El trabajo se paga con salarios; el capital, con intereses; la tierra, con rentas." },
    { q: "¿Qué agente económico cobra impuestos?", o: ["Las familias", "Las empresas", "El sector público"], a: 2, e: "El sector público financia con impuestos servicios como sanidad o educación." },
  ],
  examen: [
    { q: "¿Por qué existe la escasez?", o: ["Porque las necesidades son ilimitadas y los recursos limitados", "Porque la gente no trabaja", "Porque hay mucho dinero"], a: 0, e: "Incluso los países ricos tienen que elegir en qué usar sus recursos." },
    { q: "Una fábrica de bicicletas es un ejemplo de…", o: ["factor tierra", "factor capital", "factor trabajo"], a: 1, e: "Las máquinas y edificios que sirven para producir son capital." },
    { q: "En el flujo circular, las familias entregan a las empresas…", o: ["bienes y servicios", "trabajo y pagos por compras", "impuestos"], a: 1, e: "Ofrecen su trabajo y gastan sus ingresos comprando lo que las empresas producen." },
  ],
  feynman: ["Qué es la escasez y por qué obliga a elegir", "El coste de oportunidad con un ejemplo de tu vida", "Los cuatro factores de producción y su recompensa", "Cómo circula el dinero entre familias y empresas"],
  mapa: mapa("ECONOMÍA", "var(--leaf)", [
    ["Escasez", "recursos limitados", "var(--red)"],
    ["Decisiones", "coste de oportunidad", "var(--pen)"],
    ["Factores", "tierra · trabajo · capital", "var(--muted)"],
    ["Agentes", "familias · empresas · Estado", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Escasez", "Recursos limitados frente a necesidades ilimitadas."],
    ["Coste de oportunidad", "El valor de la mejor alternativa a la que renuncias al elegir."],
    ["Bien frente a servicio", "Un bien es un objeto; un servicio, una actividad."],
    ["Factores de producción", "Tierra, trabajo, capital e iniciativa empresarial."],
    ["Agentes económicos", "Familias, empresas y sector público."],
  ],
  familias: ["Al hacer la compra, pensad juntos en el coste de oportunidad de un capricho.", "Preguntadle qué haría con 50 euros y qué dejaría de hacer al elegir.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Conceptos económicos básicos: escasez, coste de oportunidad, factores productivos y agentes económicos (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Dilema con presupuesto: la clase reparte 1 000 € entre cinco necesidades del centro.", "Dibujar el flujo circular con ejemplos reales de la familia.", "Registro semanal de decisiones y sus costes de oportunidad."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Coste de oportunidad, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Coste_de_oportunidad" },
  ],
  revisado: "2026-11-12",
};
