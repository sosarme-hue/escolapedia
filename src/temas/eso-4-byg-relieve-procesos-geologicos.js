// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "El relieve y los procesos geológicos",
  minutos: 40,
  objetivos: ["Distinguir los procesos geológicos internos y externos", "Explicar la meteorización, la erosión, el transporte y la sedimentación", "Reconocer las formas de relieve que crean los ríos, el hielo, el viento y el mar"],
  claves: ["proceso interno", "proceso externo", "meteorización", "erosión", "sedimentación", "modelado"],
  pregunta: {
    texto: "El Gran Cañón del Colorado tiene más de 1 500 metros de profundidad. ¿Quién lo excavó?",
    respuesta: "Un <mark>río</mark>, con mucha paciencia. El río Colorado ha ido <b>erosionando</b> la roca durante unos 5 o 6 millones de años, mientras la zona se elevaba. El relieve es la lucha entre las fuerzas internas, que <b>levantan</b>, y las externas, que <b>desgastan</b>.",
  },
  bloques: [
    {
      html: `<h3>Dos fuerzas en lucha</h3><p>El relieve cambia por dos tipos de procesos. Los <b>internos</b> se deben al <mark>calor del interior</mark> de la Tierra: el movimiento de las placas pliega y rompe las rocas (pliegues y fallas), forma cordilleras y produce volcanes y terremotos. Tienden a <b>crear relieve</b>. Los <b>externos</b> se deben a la <mark>energía del Sol y a la gravedad</mark>: el agua, el hielo y el viento <b>desgastan</b> el relieve y lo allanan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las fuerzas internas levantan una montaña y las externas la desgastan">
        <defs>${flecha("rl1", "var(--red)")}${flecha("rl2", "var(--pen)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 150 L 100 60 L 130 80 L 170 40 L 240 150 Z" fill="var(--sun)" opacity=".5" stroke="var(--ink)" stroke-width="2"/>
        <path d="M130 172 V 120" stroke="var(--red)" stroke-width="4" marker-end="url(#rl1)"/>
        <path d="M200 24 L 176 50" stroke="var(--pen)" stroke-width="3" marker-end="url(#rl2)"/><path d="M60 40 L 84 70" stroke="var(--pen)" stroke-width="3" marker-end="url(#rl2)"/>
        <g ${F} font-size="11" font-weight="700"><text x="138" y="168" fill="var(--red)">internos: levantan</text><text x="12" y="30" fill="var(--pen)">externos: desgastan</text></g>
      </svg>`,
    },
    {
      html: `<h3>Meteorización</h3><p>Es la alteración de las rocas <mark>en el mismo lugar</mark> donde están, sin transporte. Puede ser <b>física</b>, cuando la roca se rompe en trozos, como en la <b>gelifracción</b>: el agua se mete en las grietas, se congela, aumenta de volumen y las abre como una cuña. O <b>química</b>, cuando cambian los minerales: el agua con CO₂ disuelve la caliza y forma cuevas. Los seres vivos también contribuyen (raíces, líquenes).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gelifracción: el agua de una grieta se congela y la abre">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[60, 6, "agua"], [190, 18, "hielo"]].map(([x, w, t]) => `<path d="M${x - 50} 150 V 50 H ${x - w / 2} L ${x} 130 L ${x + w / 2} 50 H ${x + 50} V 150 Z" fill="var(--muted)" opacity=".6" stroke="var(--ink)" stroke-width="2"/><path d="M${x - w / 2} 50 L ${x} 130 L ${x + w / 2} 50 Z" fill="${t === "agua" ? "var(--water)" : "var(--inf)"}" opacity=".8"/><text x="${x}" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <text x="125" y="100" text-anchor="middle" font-size="22" fill="var(--muted)" ${F}>→</text>
        <text x="130" y="170" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>al congelarse, el agua aumenta un 9 % de volumen</text>
      </svg>`,
    },
    {
      html: `<h3>Erosión, transporte y sedimentación</h3><p>Los agentes geológicos externos (ríos, glaciares, viento, mar) trabajan en tres pasos: <b>erosionan</b> (arrancan materiales), los <b>transportan</b> y, cuando pierden energía, los <b>depositan</b>: es la <mark>sedimentación</mark>. Los sedimentos se acumulan en capas y, con el tiempo y la presión, se compactan y forman <b>rocas sedimentarias</b> (arenisca, conglomerado, caliza).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Perfil de un río: erosión en la montaña, transporte en el tramo medio y sedimentación en la desembocadura">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 40 Q 60 50 100 100 Q 160 140 250 146 V 170 H 10 Z" fill="var(--sun)" opacity=".35"/>
        <path d="M14 46 Q 60 56 100 104 Q 160 142 250 150" fill="none" stroke="var(--water)" stroke-width="5"/>
        ${[[30, 50], [60, 64], [140, 128], [200, 145], [220, 148], [236, 150]].map(([x, y], i) => `<circle cx="${x}" cy="${y + 8}" r="${i < 2 ? 4 : 2.5}" fill="var(--ink)"/>`).join("")}
        <g ${F} font-size="11" font-weight="700"><text x="20" y="30" fill="var(--red)">erosión</text><text x="110" y="86" fill="var(--pen)">transporte</text><text x="164" y="124" fill="var(--leaf)">sedimentación</text></g>
      </svg>`,
    },
    {
      html: `<h3>El modelado de ríos y glaciares</h3><p>Los <b>ríos</b> excavan <mark>valles en forma de V</mark>, cañones y cascadas en el curso alto; dibujan meandros en el curso medio y forman llanuras de inundación y <b>deltas</b> en la desembocadura. Los <b>glaciares</b>, ríos de hielo, arrastran rocas y labran <mark>valles en forma de U</mark>, circos y morrenas (montones de piedras que dejan al retirarse). En los Pirineos se ven muchas huellas de los glaciares de la última glaciación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Valle fluvial en forma de V y valle glaciar en forma de U">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 40 L 64 140 L 114 40" fill="none" stroke="var(--ink)" stroke-width="3"/><path d="M58 132 L 70 132" stroke="var(--water)" stroke-width="5"/>
        <path d="M146 40 Q 146 140 196 140 Q 246 140 246 40" fill="none" stroke="var(--ink)" stroke-width="3"/><path d="M152 70 Q 156 128 196 128 Q 236 128 240 70" fill="var(--inf)" opacity=".4"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="64" y="166" fill="var(--water)">río: valle en V</text><text x="196" y="166" fill="var(--inf)">glaciar: valle en U</text></g>
      </svg>`,
    },
    {
      html: `<h3>El modelado del viento y del mar</h3><p>El <b>viento</b> actúa sobre todo en los desiertos: arrastra arena que pule las rocas y forma <mark>dunas</mark>. El <b>mar</b> golpea la costa con las olas: en la costa rocosa forma <b>acantilados</b>, arcos y plataformas de abrasión; en la costa baja deposita arena en <mark>playas</mark>, barras e islas unidas por tómbolos. Las acciones humanas, como los embalses o la construcción en la costa, alteran estos procesos y pueden causar <b>riesgos</b> como inundaciones o desprendimientos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Duna de arena formada por el viento y acantilado con arco excavado por el mar">
        <defs>${flecha("rl3", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 140 Q 50 70 80 90 L 110 140 Z" fill="var(--sun)" opacity=".7"/><path d="M14 60 H 50" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#rl3)"/>
        <rect x="136" y="132" width="114" height="38" fill="var(--water)" opacity=".4"/>
        <path d="M160 140 V 50 H 250 V 140 Z M190 140 V 110 Q 200 92 214 110 V 140 Z" fill="var(--muted)" fill-rule="evenodd" opacity=".75"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="60" y="164" fill="var(--sun)">duna</text><text x="204" y="40" fill="var(--ink)">acantilado y arco</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Agentes externos y sus formas de relieve",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Ríos, glaciares, viento y mar con las formas que crean">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Ríos", "valles en V", "meandros · deltas", "var(--water)"], ["Glaciares", "valles en U", "circos · morrenas", "var(--inf)"], ["Viento", "dunas", "rocas pulidas", "var(--sun)"], ["Mar", "acantilados", "playas · arcos", "var(--pen)"]]
        .map(([n, a, b, c], i) => `<rect x="${16 + i * 154}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="66" text-anchor="middle" font-size="22" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="116" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="146" text-anchor="middle" font-size="14" fill="var(--muted)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "Ehsclk52JXw", titulo: "Dinámica externa de la Tierra: meteorización, erosión, transporte y sedimentación", canal: "larrambla", vistas: 139550, megusta: 0, busqueda: "agentes geológicos externos erosión" },
  quiz: [
    { q: "¿Cuál es la fuente de energía de los procesos geológicos externos?", o: ["El calor interno de la Tierra", "El Sol y la gravedad", "La Luna"], a: 1, e: "El Sol mueve el agua y el aire; la gravedad hace caer y fluir los materiales." },
    { q: "La gelifracción es un tipo de…", o: ["meteorización física", "sedimentación", "proceso interno"], a: 0, e: "El hielo rompe la roca en las grietas, sin cambiar sus minerales." },
    { q: "¿Qué ocurre cuando un río pierde velocidad?", o: ["Erosiona más", "Deposita sedimentos", "Se congela"], a: 1, e: "Sin energía para transportarlos, los materiales se sedimentan." },
    { q: "Un valle en forma de U es obra de…", o: ["un río", "un glaciar", "el viento"], a: 1, e: "El hielo excava el fondo y las paredes por igual, dejando forma de U." },
    { q: "Las dunas las forma…", o: ["el mar", "el viento", "los volcanes"], a: 1, e: "El viento acumula la arena en montículos que se desplazan." },
  ],
  examen: [
    { q: "¿Qué es la meteorización química?", o: ["La rotura de la roca en trozos", "El cambio de los minerales de la roca por reacciones químicas", "El transporte de la roca"], a: 1, e: "Por ejemplo, el agua con CO₂ disuelve la caliza." },
    { q: "Las cuevas con estalactitas se forman en rocas…", o: ["calizas", "graníticas", "volcánicas"], a: 0, e: "Es el modelado kárstico, por disolución de la caliza." },
    { q: "¿Qué forma deja un glaciar al retirarse?", o: ["Un delta", "Una morrena", "Una duna"], a: 1, e: "Las morrenas son acumulaciones de rocas arrastradas por el hielo." },
  ],
  feynman: ["La diferencia entre procesos internos y externos", "Qué es la meteorización y sus tipos", "Los tres pasos del trabajo de un agente externo", "Por qué un valle de río es en V y uno de glaciar en U", "Dos formas que crea el mar en la costa"],
  mapa: mapa("RELIEVE", "var(--eso)", [
    ["Procesos internos", "pliegues · fallas · volcanes", "var(--red)"],
    ["Meteorización", "física · química", "var(--muted)"],
    ["Agentes externos", "erosión → transporte → sedimento", "var(--pen)"],
    ["Formas", "valles · dunas · acantilados", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["¿Qué es la meteorización?", "La alteración y rotura de las rocas en el lugar donde están, sin transporte."],
    ["¿Qué es la sedimentación?", "El depósito de los materiales transportados cuando el agente pierde energía."],
    ["Forma de un valle fluvial", "En V."],
    ["Forma de un valle glaciar", "En U."],
    ["¿Qué es un delta?", "Una acumulación de sedimentos en la desembocadura de un río."],
  ],
  familias: ["En una excursión, buscad señales de erosión: raíces que rompen el asfalto, piedras redondeadas en un río.", "Mirad juntos imágenes de satélite del delta del Ebro y de un valle de los Pirineos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La Tierra y su dinámica: procesos geológicos internos y externos, meteorización, erosión, transporte, sedimentación y modelado del relieve (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Mesa de arena con agua para simular erosión y formación de deltas.", "Disolver caliza o tiza con vinagre para la meteorización química.", "Interpretar el relieve de la zona con el visor Iberpix del IGN."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Geomorfología, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Geomorfolog%C3%ADa" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Reconocer el modelado kárstico y el granítico", "Relacionar el relieve con el tipo de roca, el clima y los riesgos geológicos"],
  tras: {
    "Meteorización": [
      { html: `<h3>Meteorización física, química y biológica</h3><p>La <b>meteorización física</b> rompe la roca sin cambiar sus minerales. La más importante en climas fríos es la <b>gelifracción</b>: el agua se mete en las grietas, se congela, aumenta su volumen un 9 % y actúa como una cuña que parte la roca. En los desiertos, los cambios bruscos de temperatura entre el día y la noche agrietan la superficie (<b>termoclastia</b>). La <b>meteorización química</b> altera los minerales: el agua con CO₂ <mark>disuelve la caliza</mark>, el oxígeno oxida los minerales con hierro (de ahí el color rojizo de muchas tierras) y el agua transforma el feldespato del granito en arcilla. Es más intensa en climas cálidos y húmedos. En la <b>biológica</b>, las raíces abren grietas y los líquenes segregan ácidos.</p>`, video: { id: "Dmw-jiNyN2A", titulo: "Cómo funciona la meteorización", canal: "La Información", vistas: 108451 } },
    ],
    "El modelado de ríos y glaciares": [
      { html: `<h3>El modelado kárstico</h3><p>Las rocas calizas se disuelven lentamente con el agua de lluvia, que es ligeramente ácida porque lleva CO₂ disuelto. Así se forma el <b>relieve kárstico</b>. En la superficie aparecen <b>lapiaces</b> (surcos y crestas en la roca), <b>dolinas</b> (hoyos circulares) y <b>poljés</b> (grandes depresiones de fondo plano). Bajo tierra, el agua excava <b>simas</b>, <b>cuevas</b> y galerías por las que corren ríos subterráneos. Cuando el agua cargada de caliza gotea dentro de una cueva, pierde CO₂ y vuelve a precipitar la caliza: así crecen las <mark>estalactitas</mark> (desde el techo), las <b>estalagmitas</b> (desde el suelo) y las columnas, cuando se unen. En España son famosos la Ciudad Encantada de Cuenca y El Torcal de Antequera.</p>`, video: { id: "XEZriViVJe8", titulo: "El modelado kárstico (1ª parte)", canal: "CTMSJB", vistas: 48385 } },
      { html: `<h3>El relieve granítico</h3><p>El <b>granito</b> es una roca dura, pero tiene muchas grietas (diaclasas) que se cortan formando bloques. El agua penetra por ellas y altera el granito, que se va convirtiendo en arena (<b>lehm</b>). Cuando esa arena se lava, quedan al descubierto bloques redondeados: <mark>berrocales</mark> y <b>bolos</b>, a veces apilados en equilibrio, y grandes cúpulas lisas, los <b>domos</b>. También se forman <b>tors</b> (torres de bloques) y <b>pilas</b> o pilancones (huecos en la roca donde se acumula agua). Ejemplos en España: La Pedriza de Madrid, Los Barruecos de Cáceres o muchas zonas de Galicia.</p>` },
    ],
    "El modelado del viento y del mar": [
      { html: `<h3>Riesgos geológicos externos</h3><p>Los procesos externos pueden ser peligrosos para las personas. Las <b>inundaciones</b> son el riesgo natural que más daños causa en España, sobre todo las riadas del Mediterráneo en otoño (las DANA). Los <b>movimientos de ladera</b> (desprendimientos de rocas, deslizamientos de tierra) son frecuentes en pendientes fuertes, sobre todo tras lluvias intensas o al hacer carreteras. La <b>erosión del suelo</b> por deforestación o incendios lleva a la desertificación. Para reducir estos riesgos se usan <mark>mapas de riesgo</mark> que indican dónde no construir (cauces y llanuras de inundación), se reforestan las laderas, se construyen muros y redes de contención y se crean sistemas de alerta.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Explica por qué en las montañas abundan los canchales (acumulaciones de piedras angulosas) al pie de las paredes rocosas.", pasos: ["En la alta montaña la temperatura oscila alrededor de 0 °C muchos días.", "El agua de las grietas se congela, aumenta su volumen y abre la grieta (gelifracción).", "Los fragmentos sueltos caen y se acumulan al pie de la pared."], resultado: "Son producto de la meteorización física por gelifracción." },
    { enunciado: "¿Por qué se forma una estalactita?", pasos: ["El agua de lluvia, con CO₂, disuelve la caliza al atravesar el terreno.", "Al gotear en el techo de la cueva, el agua pierde CO₂.", "La caliza disuelta precipita y se deposita en capas alrededor de la gota."], resultado: "Por precipitación de caliza en el techo de una cueva kárstica." },
    { enunciado: "Un río forma en su curso alto un valle estrecho y en su curso bajo, meandros y una llanura. Explica la diferencia.", pasos: ["En el curso alto la pendiente es fuerte y el agua va rápida: predomina la erosión y excava un valle en V.", "En el curso bajo la pendiente es suave y el agua va lenta: predomina la sedimentación.", "El río se curva formando meandros y deposita sedimentos que forman una llanura aluvial."], resultado: "Arriba domina la erosión y abajo, la sedimentación." },
  ],
  errores: [
    "Confundir meteorización (alteración de la roca sin transporte) con erosión (arranque y transporte).",
    "Pensar que estalactitas y estalagmitas son lo mismo: las primeras cuelgan del techo y las segundas crecen del suelo.",
    "Creer que un valle en U lo excava un río: es la forma típica de un valle glaciar.",
    "Pensar que las rocas duras no se alteran: el granito se meteoriza químicamente con el agua.",
    "Creer que construir en el cauce seco de un río es seguro: las riadas lo vuelven a ocupar.",
  ],
  ejercicios: [
    { q: "Indica qué agente geológico forma: un valle en V, un valle en U, una duna y un acantilado.", sol: "Valle en V: río. Valle en U: glaciar. Duna: viento. Acantilado: mar (oleaje)." },
    { q: "¿Qué tipo de meteorización predomina en un clima cálido y húmedo? ¿Y en uno frío?", sol: "En el cálido y húmedo, la química. En el frío, la física por gelifracción." },
    { q: "¿Qué es una dolina y en qué rocas aparece?", sol: "Una depresión circular formada por disolución, propia de las rocas calizas (relieve kárstico)." },
    { q: "Explica la diferencia entre erosión, transporte y sedimentación.", sol: "Erosión: arranque de materiales. Transporte: desplazamiento por agua, hielo o viento. Sedimentación: depósito cuando el agente pierde energía." },
    { q: "Pon un ejemplo de meteorización biológica.", sol: "Las raíces de un árbol que crecen en una grieta y la abren, o los líquenes que segregan ácidos." },
    { q: "Nombra tres formas del relieve granítico.", sol: "Berrocales (bolos), domos y tors (también pilancones)." },
    { q: "¿Qué forma un delta y por qué no todos los ríos lo tienen?", sol: "Los sedimentos que deposita un río al llegar a un mar tranquilo. No se forma si las corrientes y las mareas se llevan los sedimentos." },
    { q: "¿Qué es un torrente y cuáles son sus partes?", sol: "Un curso de agua de montaña que solo lleva agua tras lluvias fuertes. Partes: cuenca de recepción, canal de desagüe y cono de deyección." },
    { q: "¿Qué riesgo geológico externo causa más daños en España y por qué?", sol: "Las inundaciones, por las lluvias torrenciales del otoño mediterráneo y por haber construido en zonas inundables." },
    { q: "Propón tres medidas para reducir el riesgo de deslizamientos en una ladera junto a una carretera.", sol: "Reforestar o cubrir la ladera con vegetación, construir muros de contención o redes y drenar el agua para que no empape el terreno." },
  ],
  quiz: [
    { q: "La gelifracción rompe la roca porque el agua al congelarse…", o: ["se encoge", "aumenta su volumen", "se evapora"], a: 1, e: "Un 9 % más de volumen." },
    { q: "Las estalactitas crecen…", o: ["desde el techo", "desde el suelo", "en la superficie"], a: 0, e: "Las estalagmitas, desde el suelo." },
    { q: "El relieve kárstico se forma en rocas…", o: ["graníticas", "calizas", "volcánicas"], a: 1, e: "La caliza se disuelve." },
    { q: "Los berrocales son típicos del relieve…", o: ["granítico", "kárstico", "glaciar"], a: 0, e: "Bolos redondeados." },
    { q: "El riesgo natural que más daños causa en España es…", o: ["los volcanes", "las inundaciones", "los tsunamis"], a: 1, e: "Sobre todo en el Mediterráneo." },
  ],
  tarjetas: [
    ["Gelifracción", "Rotura de la roca por el hielo que se forma en sus grietas."],
    ["Relieve kárstico", "Formas de disolución de la caliza: dolinas, lapiaces, cuevas, estalactitas."],
    ["Berrocal", "Acumulación de bolos de granito redondeados."],
  ],
});
