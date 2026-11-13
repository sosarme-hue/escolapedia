// Tecnología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

// Cilindro de simple o doble efecto con vástago (salida 0..1).
function cilindro(x, y, sal, doble = false) {
  const p = x + 20 + sal * 60;
  return `<rect x="${x}" y="${y}" width="100" height="34" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
    <rect x="${x + 2}" y="${y + 2}" width="${p - x - 2}" height="30" fill="var(--pen)" opacity=".25"/>
    <rect x="${p}" y="${y + 2}" width="8" height="30" fill="var(--ink)"/><rect x="${p + 8}" y="${y + 13}" width="${x + 100 - p + 40}" height="8" fill="var(--ink)"/>
    ${doble ? "" : `<path d="M${p + 12} ${y + 6} ${Array.from({ length: 6 }, (_, i) => `L ${p + 16 + (i * (x + 96 - p - 16)) / 6} ${y + (i % 2 ? 6 : 28)}`).join(" ")}" fill="none" stroke="var(--muted)" stroke-width="1.5"/>`}`;
}

module.exports = {
  materia: "Tecnología",
  curso: "4-eso",
  titulo: "Neumática e hidráulica",
  minutos: 40,
  objetivos: ["Explicar los principios físicos de los circuitos neumáticos e hidráulicos", "Identificar los componentes y sus símbolos normalizados", "Interpretar circuitos sencillos con cilindros y válvulas"],
  claves: ["neumática", "hidráulica", "compresor", "cilindro", "válvula distribuidora", "presión"],
  pregunta: {
    texto: "La puerta de un autobús se abre con un «pssst» y una excavadora levanta toneladas con su brazo. ¿Qué tienen en común?",
    respuesta: "Las dos usan un <mark>fluido a presión</mark> para mover un cilindro. La puerta del autobús funciona con <b>aire comprimido</b> (neumática): rápida y limpia. La excavadora usa <b>aceite</b> (hidráulica): como los líquidos no se comprimen, puede hacer fuerzas enormes con precisión.",
  },
  bloques: [
    {
      html: `<h3>Fluidos que hacen fuerza</h3><p>La <b>neumática</b> usa <b>aire comprimido</b> y la <b>hidráulica</b> usa <b>líquidos</b>, normalmente aceite. En los dos casos la clave es la <mark>presión</mark>: p = F / S. Según el <b>principio de Pascal</b>, la presión se transmite por igual en todo el fluido, así que en un cilindro la fuerza obtenida es <mark>F = p · S</mark>. Un cilindro con un émbolo de 10 cm² y aire a 6 bar (unos 600 000 Pa) empuja con unos 600 N.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El aire a presión empuja el émbolo de un cilindro y hace salir el vástago con fuerza">
        <defs>${flecha("nh1", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${cilindro(30, 70, 0.8, true)}
        ${[[50, 80], [70, 92], [60, 100], [90, 82], [100, 96], [40, 94]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="var(--pen)"/>`).join("")}
        <path d="M180 60 H 230" stroke="var(--red)" stroke-width="3.5" marker-end="url(#nh1)"/>
        <g ${F} font-size="12" font-weight="700"><text x="40" y="60" fill="var(--pen)">aire a presión</text><text x="196" y="52" fill="var(--red)">F = p·S</text></g>
      </svg>`,
    },
    {
      html: `<h3>Neumática frente a hidráulica</h3><p>El aire es <b>gratis, limpio y rápido</b>, pero se comprime, así que los movimientos son menos precisos y las fuerzas moderadas: se usa en puertas de autobús, herramientas de taller, robots de empaquetado y frenos de camión. El aceite es <b>incompresible</b>: da <mark>grandes fuerzas</mark> y movimientos precisos y suaves, pero es más caro y puede gotear: se usa en excavadoras, grúas, prensas, elevadores y los frenos del coche.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación: el aire se comprime en una jeringa tapada, el agua no">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[30, "aire", 50, "var(--pen)", "se comprime"], [150, "aceite", 10, "var(--sun)", "no se comprime"]].map(([x, t, d, c, r]) => `<rect x="${x}" y="70" width="80" height="30" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="${x + 2}" y="72" width="${76 - d}" height="26" fill="${c}" opacity=".35"/><rect x="${x + 78 - d}" y="70" width="6" height="30" fill="var(--ink)"/><rect x="${x + 84 - d}" y="81" width="${d + 20}" height="8" fill="var(--ink)"/><rect x="${x - 6}" y="76" width="6" height="18" fill="var(--ink)"/>
          <text x="${x + 40}" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${t}</text><text x="${x + 40}" y="124" text-anchor="middle" font-size="11" fill="var(--ink)" ${F}>${r}</text>`).join("")}
        <text x="130" y="160" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>empujando con la misma fuerza y la salida tapada</text>
      </svg>`,
    },
    {
      html: `<h3>Componentes de un circuito</h3><p>Todo circuito tiene: un <b>generador de presión</b> (el <mark>compresor</mark> en neumática, que guarda el aire en un depósito; la <b>bomba</b> en hidráulica, que saca el aceite de un depósito), <b>conductos</b> (tubos), <b>elementos de tratamiento</b> (filtro, regulador de presión, manómetro), <b>elementos de control</b> (<mark>válvulas</mark>) y <b>actuadores</b> (<b>cilindros</b> que hacen movimiento lineal y <b>motores</b> que giran). En hidráulica, además, el aceite vuelve al depósito por un circuito de retorno.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena de un circuito neumático: compresor, unidad de mantenimiento, válvula y cilindro">
        <defs>${flecha("nh2", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["compresor", "var(--pen)"], ["filtro y regulador", "var(--leaf)"], ["válvula", "var(--sun)"], ["cilindro", "var(--red)"]].map(([t, c], i) => `<rect x="20" y="${18 + i * 40}" width="140" height="30" rx="8" fill="${c}"/><text x="90" y="${38 + i * 40}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>${t}</text>${i < 3 ? `<path d="M90 ${48 + i * 40} V ${56 + i * 40}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#nh2)"/>` : ""}`).join("")}
        <g ${F} font-size="10" fill="var(--muted)"><text x="168" y="38">genera presión</text><text x="168" y="78">limpia y ajusta</text><text x="168" y="118">dirige el aire</text><text x="168" y="158">hace el trabajo</text></g>
      </svg>`,
    },
    {
      html: `<h3>Cilindros y válvulas</h3><p>El <b>cilindro de simple efecto</b> sale con aire a presión y vuelve solo gracias a un <mark>muelle</mark>. El de <b>doble efecto</b> recibe aire por los dos lados: sale y entra a presión, con fuerza en los dos sentidos. Las <b>válvulas distribuidoras</b> se nombran por sus <mark>vías y posiciones</mark>: una <b>3/2</b> tiene 3 orificios y 2 posiciones y basta para un cilindro de simple efecto; una <b>5/2</b> gobierna uno de doble efecto. Se accionan con pulsador, palanca, pedal, rodillo, electroimán o aire.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cilindro de simple efecto con muelle y cilindro de doble efecto con dos entradas de aire">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${cilindro(24, 34, 0.2)}${cilindro(24, 112, 0.5, true)}
        <path d="M34 34 V 22" stroke="var(--pen)" stroke-width="3"/><path d="M34 112 V 100 M114 112 V 100" stroke="var(--pen)" stroke-width="3"/>
        <g ${F} font-size="11" font-weight="700"><text x="24" y="88" fill="var(--ink)">simple efecto (vuelve con muelle)</text><text x="24" y="166" fill="var(--ink)">doble efecto (aire por los dos lados)</text></g>
      </svg>`,
    },
    {
      html: `<h3>Símbolos y circuitos</h3><p>Los circuitos se dibujan con <b>símbolos normalizados</b>. Cada posición de una válvula es un <b>cuadrado</b> y las flechas dentro indican por dónde pasa el aire; una T significa vía cerrada. El compresor es un círculo con un triángulo <b>hueco</b> que apunta hacia fuera; en hidráulica, la bomba lleva el triángulo <b>relleno</b> de negro. Un circuito típico: <mark>al pulsar una válvula 3/2, el cilindro de simple efecto sale; al soltar, vuelve</mark>. Con dos válvulas en serie se consigue una función AND (seguridad: pulsar con las dos manos).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito neumático: compresor conectado a una válvula 3/2 con pulsador que alimenta un cilindro de simple efecto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="50" cy="140" r="16" fill="none" stroke="var(--ink)" stroke-width="2.5"/><path d="M50 126 L 44 136 H 56 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="100" y="86" width="34" height="34" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><rect x="134" y="86" width="34" height="34" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M117 116 V 92 M113 98 L 117 92 L 121 98" stroke="var(--ink)" stroke-width="2" fill="none"/><path d="M151 92 V 104 M145 104 H 157 M151 116 V 110" stroke="var(--ink)" stroke-width="2"/>
        <path d="M168 103 H 178 M174 96 V 110" stroke="var(--ink)" stroke-width="2"/><path d="M92 96 L 100 103 L 92 110" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M84 103 H 100" stroke="var(--ink)" stroke-width="2"/>
        <path d="M50 124 V 130 M50 124 H 117 V 120 M117 86 V 60" stroke="var(--pen)" stroke-width="2.5" fill="none"/>
        <rect x="80" y="24" width="90" height="28" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><rect x="100" y="26" width="6" height="24" fill="var(--ink)"/><rect x="106" y="35" width="80" height="6" fill="var(--ink)"/>
        <path d="M117 60 H 90 V 52" stroke="var(--pen)" stroke-width="2.5" fill="none"/>
        <g ${F} font-size="10" font-weight="700"><text x="20" y="172" fill="var(--ink)">compresor</text><text x="102" y="138" fill="var(--ink)">válvula 3/2 con pulsador</text><text x="176" y="30" fill="var(--ink)">cilindro</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Neumática o hidráulica: cuándo usar cada una",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación entre neumática e hidráulica: fluido, ventajas, inconvenientes y usos">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["NEUMÁTICA", "aire comprimido · compresor", "rápida, limpia, barata", "fuerzas moderadas, ruidosa", "puertas de bus, robots, taller", "var(--pen)"], ["HIDRÁULICA", "aceite · bomba y depósito", "fuerzas enormes, precisa", "cara, puede tener fugas", "excavadoras, grúas, frenos", "var(--sun)"]]
        .map(([n, a, v, d, u, c], i) => `<rect x="${20 + i * 310}" y="20" width="290" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${165 + i * 310}" y="58" text-anchor="middle" font-size="24" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${165 + i * 310}" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${165 + i * 310}" y="122" text-anchor="middle" font-size="14" fill="var(--leaf)" ${F}>+ ${v}</text>
          <text x="${165 + i * 310}" y="146" text-anchor="middle" font-size="14" fill="var(--red)" ${F}>− ${d}</text>
          <text x="${165 + i * 310}" y="186" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${u}</text>`).join("")}
    </svg>`,
  },
  video: { id: "gbQ3JBcjHFI", titulo: "Neumática básica: introducción y principios básicos", canal: "Neheyler Mecatrónico", vistas: 239405, megusta: 0, busqueda: "neumática e hidráulica" },
  quiz: [
    { q: "¿Qué fluido usa la neumática?", o: ["Aceite", "Aire comprimido", "Agua"], a: 1, e: "Neuma significa aire en griego." },
    { q: "¿Por qué la hidráulica consigue fuerzas mayores y más precisas?", o: ["Porque el aceite pesa más", "Porque los líquidos son prácticamente incompresibles", "Porque usa electricidad"], a: 1, e: "El aceite transmite la presión sin «encogerse», a diferencia del aire." },
    { q: "Un cilindro de simple efecto vuelve a su posición gracias a…", o: ["un muelle", "otra entrada de aire", "la gravedad siempre"], a: 0, e: "Solo recibe aire por un lado; el muelle lo devuelve." },
    { q: "Una válvula 5/2 tiene…", o: ["5 posiciones y 2 vías", "5 vías y 2 posiciones", "5 cilindros"], a: 1, e: "Primero se indican las vías (orificios) y después las posiciones." },
    { q: "Con aire a 500 000 Pa sobre un émbolo de 0,001 m², ¿qué fuerza hace el cilindro?", o: ["500 N", "5 N", "500 000 N"], a: 0, e: "F = p · S = 500 000 · 0,001 = 500 N." },
  ],
  examen: [
    { q: "¿Qué elemento genera el aire comprimido?", o: ["El cilindro", "El compresor", "La válvula"], a: 1, e: "El compresor aspira aire, lo comprime y lo guarda en un depósito." },
    { q: "Para mover un cilindro de doble efecto se usa normalmente una válvula…", o: ["3/2", "5/2", "2/2"], a: 1, e: "Necesita dirigir el aire a una cámara y vaciar la otra, y al revés." },
    { q: "Dos válvulas 3/2 en serie que hay que pulsar a la vez equivalen a una función…", o: ["OR", "AND", "NOT"], a: 1, e: "Solo pasa el aire si las dos están pulsadas: es un mando de seguridad a dos manos." },
  ],
  feynman: ["Por qué un fluido a presión puede hacer fuerza (F = p · S)", "Las ventajas e inconvenientes de la neumática y de la hidráulica", "Las partes de un circuito neumático", "La diferencia entre cilindro de simple y doble efecto", "Qué significa una válvula 3/2"],
  mapa: mapa("NEUMÁTICA E HIDRÁULICA", "var(--eso)", [
    ["Principio", "presión · Pascal · F = p·S", "var(--ink)"],
    ["Generadores", "compresor · bomba", "var(--pen)"],
    ["Válvulas", "3/2 · 5/2 · vías/posiciones", "var(--sun)"],
    ["Actuadores", "cilindros simple/doble efecto", "var(--red)"],
  ], 270),
  tarjetas: [
    ["Diferencia entre neumática e hidráulica", "La neumática usa aire comprimido; la hidráulica, líquidos (aceite)."],
    ["Fórmula de la fuerza de un cilindro", "F = p · S (presión por superficie del émbolo)."],
    ["Cilindro de doble efecto", "El que recibe aire por los dos lados y hace fuerza al salir y al entrar."],
    ["¿Qué significa válvula 3/2?", "Tiene 3 vías (orificios) y 2 posiciones."],
    ["Función del compresor", "Aspirar aire, comprimirlo y almacenarlo para el circuito."],
  ],
  familias: ["Con dos jeringas y un tubo, una con aire y otra con agua, comparad cómo transmiten el movimiento.", "Fijaos en máquinas de la calle (autobús, camión de basura, grúa) y adivinad si son neumáticas o hidráulicas.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sistemas neumáticos e hidráulicos: principios físicos, componentes, simbología normalizada y circuitos básicos (RD 217/2022, Tecnología 4º).",
    ideas: ["Brazo hidráulico de cartón con jeringas y agua.", "Simular circuitos con FluidSIM o simuladores online gratuitos.", "Kit neumático didáctico: mando a dos manos y control indirecto de un cilindro."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Neumática, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Neum%C3%A1tica" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Calcular fuerzas en cilindros y en la prensa hidráulica", "Diseñar circuitos neumáticos con control directo, indirecto y lógico"],
  tras: {
    "Fluidos que hacen fuerza": [
      { html: `<h3>Presión, fuerza y superficie en los cilindros</h3><p>La fuerza que hace un cilindro depende de la <b>presión</b> del fluido y de la <b>superficie del émbolo</b>: <mark>F = p · S</mark>. La presión se mide en pascales (Pa), pero en neumática se usa el <b>bar</b> (1 bar = 100.000 Pa, más o menos la presión atmosférica); las instalaciones industriales trabajan a unos 6 bar. La superficie de un émbolo circular es S = π · r². Así, un cilindro con un émbolo de 4 cm de diámetro (r = 0,02 m; S ≈ 0,00126 m²) alimentado a 6 bar empuja con unos 754 N. En un cilindro de doble efecto, la fuerza de retroceso es algo menor que la de avance porque el vástago ocupa parte de la superficie del émbolo por ese lado.</p>` },
    ],
    "Neumática frente a hidráulica": [
      { html: `<h3>La prensa hidráulica</h3><p>Los sistemas hidráulicos se basan en el <b>principio de Pascal</b>: la presión que se aplica a un líquido encerrado se transmite igual a todos sus puntos. En una prensa hidráulica, un émbolo pequeño empuja el aceite, y la misma presión actúa sobre un émbolo grande, que hace una fuerza mucho mayor: <mark>F₁ / S₁ = F₂ / S₂</mark>. Si el émbolo grande tiene 50 veces más superficie, la fuerza se multiplica por 50. A cambio, el émbolo pequeño debe recorrer 50 veces más distancia: como en las máquinas simples, se gana fuerza pero no energía. Con este principio funcionan los gatos hidráulicos, los frenos de los coches, las excavadoras y los elevadores de los talleres.</p>` },
    ],
    "Cilindros y válvulas": [
      { html: `<h3>Control directo e indirecto</h3><p>En un <b>control directo</b>, la válvula que acciona el operario (con un pulsador o una palanca) envía el aire directamente al cilindro. Es sencillo, pero solo sirve para cilindros pequeños: los grandes necesitan mucho caudal y el pulsador sería enorme. En un <b>control indirecto</b>, el pulsador gobierna una válvula pequeña que envía una señal de aire a una <b>válvula principal</b> más grande, accionada por aire (pilotada), y es esta la que mueve el cilindro. Así se maneja una gran fuerza con un esfuerzo mínimo, igual que un relé en electricidad. En la industria se usan <mark>electroválvulas</mark>, que cambian de posición con un electroimán y se pueden controlar desde un autómata o una placa programable.</p>`, video: { id: "Wee85cI6wwQ", titulo: "Neumática industrial: ¿cómo trabaja un sistema neumático?", canal: "Parker Hannifin", vistas: 1510445 } },
      { html: `<h3>Válvulas lógicas y reguladoras</h3><p>Algunas válvulas combinan señales como las puertas lógicas. La <b>válvula de simultaneidad</b> (función Y) solo deja salir aire si llega por sus dos entradas a la vez: se usa en las prensas con <mark>mando a dos manos</mark>, para que el operario no pueda tener una mano dentro de la máquina al accionarla. La <b>válvula selectora</b> (función O) deja salir aire si llega por cualquiera de sus entradas: permite accionar un cilindro desde dos puntos distintos. La <b>válvula reguladora de caudal</b> estrangula el paso del aire para controlar la velocidad del cilindro, y la <b>antirretorno</b> solo deja pasar el aire en un sentido.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Un cilindro tiene un émbolo de 5 cm de diámetro y trabaja a 6 bar. ¿Qué fuerza de avance hace?", pasos: ["Radio: 2,5 cm = 0,025 m. S = π · 0,025² ≈ 0,00196 m².", "Presión: 6 bar = 600.000 Pa.", "F = p · S = 600.000 · 0,00196 ≈ 1.178 N."], resultado: "Unos 1.180 N (como levantar unos 120 kg)." },
    { enunciado: "En un gato hidráulico, el émbolo pequeño tiene 2 cm² y el grande 100 cm². ¿Qué fuerza hay que hacer para levantar 10.000 N?", pasos: ["Pascal: F₁ / S₁ = F₂ / S₂.", "F₁ = F₂ · S₁ / S₂ = 10.000 · 2 / 100.", "F₁ = 200 N."], resultado: "200 N, cincuenta veces menos." },
    { enunciado: "Diseña el control de una prensa que solo baje si el operario pulsa dos botones a la vez.", pasos: ["Cada botón es una válvula 3/2 con pulsador.", "Las dos salidas van a una válvula de simultaneidad (Y).", "La salida de la válvula Y pilota la válvula principal 5/2, que hace avanzar el cilindro de doble efecto."], resultado: "Dos pulsadores → válvula Y → válvula 5/2 pilotada → cilindro: mando a dos manos." },
  ],
  errores: [
    "Olvidar pasar los bares a pascales o los cm² a m² en F = p · S.",
    "Usar el diámetro en lugar del radio para calcular la superficie del émbolo.",
    "Creer que la prensa hidráulica crea energía: gana fuerza a cambio de recorrido.",
    "Confundir una válvula 3/2 (3 vías, 2 posiciones) con una 5/2.",
    "Pensar que el aire comprimido no es peligroso: puede proyectar partículas y causar lesiones graves.",
  ],
  ejercicios: [
    { q: "Indica dos ventajas de la neumática y dos de la hidráulica.", sol: "Neumática: el aire es limpio, gratis y rápido. Hidráulica: hace fuerzas muy grandes y movimientos precisos, porque el aceite no se comprime." },
    { q: "Pasa 6 bar a pascales y 300.000 Pa a bar.", sol: "600.000 Pa y 3 bar." },
    { q: "Calcula la superficie de un émbolo de 10 cm de diámetro en m².", sol: "r = 0,05 m; S = π · 0,05² ≈ 0,00785 m²." },
    { q: "¿Qué fuerza hace ese émbolo a 5 bar?", sol: "F = 500.000 · 0,00785 ≈ 3.925 N." },
    { q: "En una prensa, S₁ = 5 cm² y S₂ = 500 cm². Si haces 100 N, ¿qué fuerza obtienes?", sol: "F₂ = 100 · 500 / 5 = 10.000 N." },
    { q: "Explica qué significa «válvula 5/2».", sol: "Que tiene 5 vías (orificios) y 2 posiciones; sirve para gobernar cilindros de doble efecto." },
    { q: "¿Qué diferencia hay entre un cilindro de simple efecto y uno de doble efecto?", sol: "El de simple efecto avanza con aire y vuelve por un muelle; el de doble efecto avanza y retrocede con aire." },
    { q: "¿Por qué se usa el control indirecto con cilindros grandes?", sol: "Porque necesitan mucho caudal de aire; el pulsador manda una pequeña señal a una válvula principal grande que mueve el cilindro." },
    { q: "¿Qué válvula usarías para que un cilindro se pueda accionar desde la puerta o desde el interior de un garaje?", sol: "Una válvula selectora (función O), que recibe las señales de los dos pulsadores." },
    { q: "Indica tres aplicaciones de la hidráulica.", sol: "Los frenos de los coches, las excavadoras y los elevadores de los talleres (también gatos y prensas)." },
  ],
  quiz: [
    { q: "1 bar equivale aproximadamente a…", o: ["100.000 Pa", "1 Pa", "1.000 Pa"], a: 0, e: "Como la presión atmosférica." },
    { q: "La fuerza de un cilindro es…", o: ["F = p · S", "F = p / S", "F = S / p"], a: 0, e: "Presión por superficie del émbolo." },
    { q: "La prensa hidráulica se basa en el principio de…", o: ["Arquímedes", "Pascal", "Newton"], a: 1, e: "La presión se transmite igual." },
    { q: "El mando a dos manos usa una válvula…", o: ["selectora (O)", "de simultaneidad (Y)", "antirretorno"], a: 1, e: "Exige las dos señales a la vez." },
    { q: "Para regular la velocidad de un cilindro se usa una válvula…", o: ["reguladora de caudal", "5/2", "de simultaneidad"], a: 0, e: "Estrangula el paso del aire." },
  ],
  tarjetas: [
    ["Fuerza de un cilindro", "F = p · S; S = π · r²."],
    ["Control indirecto", "El pulsador pilota una válvula principal que mueve el cilindro."],
    ["Válvula de simultaneidad", "Función Y: necesita aire en sus dos entradas."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "Levantar un coche con una mano",
    html: `<p>En un taller, un mecánico coloca un gato hidráulico bajo un coche de 1.200 kilos, mueve una palanca con una mano y el coche sube poco a poco. A unos metros, la puerta de un autobús se abre con un soplido, y en una fábrica cercana un brazo de aire comprimido coloca tapones en cientos de botellas por minuto. Más lejos, una excavadora clava su cuchara en la tierra con una fuerza equivalente al peso de varios elefantes.</p>
      <p>Ninguna de esas máquinas usa músculos ni engranajes enormes: aprovechan la <b>presión de un fluido</b> encerrado. Con aire comprimido se obtienen movimientos rápidos y limpios; con aceite, fuerzas gigantescas y movimientos precisos. En este tema aprenderás a calcular presiones, fuerzas, velocidades y caudales, conocerás cómo se prepara el aire, cómo funcionan cilindros y válvulas y cómo se accionan, y diseñarás circuitos neumáticos con funciones lógicas, secuencias automáticas y control eléctrico. Son los mismos principios que mueven la industria, la obra pública y hasta los frenos de tu bici de montaña.</p>`,
  },
  svgs: {
    "Presión, fuerza y superficie en los cilindros": L.rejilla("Equivalencias de unidades de presión", ["Unidad", "Equivale a"], [["1 bar", "100.000 Pa"], ["1 atm", "101.325 Pa ≈ 1 bar"], ["1 kp/cm²", "≈ 0,98 bar"], ["1 MPa", "10 bar"]], { t: "Unidades de presión" }),
    "La prensa hidráulica": L.flujo("Cálculo de una prensa hidráulica con el principio de Pascal", ["Fuerza pequeña F₁ en S₁ pequeña", "Presión p = F₁ / S₁", "La presión se transmite igual", "En S₂ grande: F₂ = p · S₂", "F₂ / F₁ = S₂ / S₁"], { t: "Principio de Pascal" }),
    "Control directo e indirecto": L.comparar("Control directo frente a indirecto", ["Directo", ["la válvula manual", "mueve el cilindro", "sencillo", "cilindros pequeños"]], ["Indirecto", ["válvula pequeña", "pilota otra grande", "más seguro", "cilindros grandes"]]),
    "Válvulas lógicas y reguladoras": L.cajas("Válvulas lógicas y reguladoras", [["Simultaneidad", "función Y|(dos manos)"], ["Selectora", "función O|(desde dos sitios)"], ["Antirretorno", "paso en un|solo sentido"], ["Reguladora", "controla|la velocidad"]], { t: "Válvulas especiales" }),
  },
  videos: { "Cilindros y válvulas": { id: "OHfBVztrUk0", titulo: "¿Cómo funciona el cilindro neumático?", canal: "Hidráulica y neumática", vistas: 93632 } },
  tras: {
    "Presión, fuerza y superficie en los cilindros": [
      {
        html: `<h3>Fuerza de retroceso, caudal y velocidad</h3><p>En un cilindro de doble efecto, la fuerza no es igual al salir que al entrar. Al avanzar, el aire empuja toda la superficie del émbolo, <mark>S = π · D² / 4</mark>. Al retroceder, el aire empuja por el otro lado, donde el vástago ocupa parte del espacio, así que la superficie útil es la del émbolo menos la del vástago: S' = π · (D² − d²) / 4. Por eso la <b>fuerza de retroceso</b> siempre es algo menor que la de avance. Además, en la práctica hay pérdidas por rozamiento, de modo que la fuerza real es un 10 % o un 15 % menor que la teórica.</p>
          <p>La <b>velocidad</b> del vástago depende del <b>caudal</b> de fluido que entra, es decir, del volumen que llega cada segundo: <b>Q = S · v</b>. Con más caudal, el cilindro se mueve más rápido; por eso se regula la velocidad con válvulas que estrangulan el paso del aire o del aceite. El <b>volumen de aire</b> que gasta un cilindro en cada movimiento es la superficie por la carrera (V = S · L), y como el aire está comprimido, en condiciones normales ocupa más: el volumen se multiplica aproximadamente por (presión en bar + 1). Estos cálculos sirven para elegir el tamaño del compresor de una instalación.</p>`,
        svg: L.comparar("Fuerza de avance frente a fuerza de retroceso de un cilindro", ["Avance", ["toda la superficie", "S = π·D²/4", "fuerza mayor", "F = p · S"]], ["Retroceso", ["resta el vástago", "S' = π·(D²−d²)/4", "fuerza menor", "F' = p · S'"]]),
      },
    ],
    "Componentes de un circuito": [
      {
        html: `<h3>Producción y tratamiento del aire</h3><p>El aire comprimido se produce con un <b>compresor</b>, movido por un motor eléctrico, que aspira aire de la atmósfera y lo comprime, normalmente entre 6 y 10 bar. Al comprimirlo se calienta, así que pasa por un <b>refrigerador</b> y se guarda en un <b>depósito</b> o calderín, que hace de reserva y evita que el compresor arranque continuamente; un <b>presostato</b> lo pone en marcha cuando la presión baja y lo para al llegar al máximo, y una <b>válvula de seguridad</b> libera aire si se supera la presión permitida.</p>
          <p>El aire de la atmósfera lleva polvo y humedad, que al enfriarse se condensa en agua y daña los componentes. Por eso, antes de cada máquina, se coloca una <mark>unidad de mantenimiento</mark> con tres elementos: un <b>filtro</b> que retiene la suciedad y el agua (con un purgador para vaciarla), un <b>regulador</b> de presión con manómetro que fija la presión de trabajo y, a veces, un <b>lubricador</b> que añade una niebla de aceite para los componentes que lo necesitan. El aire se distribuye por una red de tuberías con una ligera pendiente para que el agua se acumule en puntos de purga. Las fugas de aire son muy caras: un agujero de 3 mm puede desperdiciar cientos de euros de electricidad al año.</p>`,
        svg: L.flujo("Producción y tratamiento del aire comprimido", ["Compresor: aspira y comprime", "Refrigerador y depósito", "Filtro: polvo y agua", "Regulador con manómetro", "Lubricador y a la máquina"], { t: "Del compresor a la máquina" }),
      },
    ],
    "Cilindros y válvulas": [
      {
        html: `<h3>Cómo se accionan las válvulas</h3><p>Una válvula distribuidora cambia de posición mediante un <b>accionamiento</b>, que se dibuja a los lados de su símbolo. Puede ser <b>manual</b> (pulsador, palanca, pedal o seta de emergencia), <b>mecánico</b> (un rodillo o una leva que el propio cilindro pisa al llegar a una posición, como un final de carrera), <b>neumático</b> (una señal de aire que llega de otra válvula, como en el control indirecto) o <b>eléctrico</b> (un <b>electroimán</b> o solenoide, en las electroválvulas). En el otro lado suele haber un <b>muelle</b> que devuelve la válvula a su posición de reposo cuando desaparece la señal: son las válvulas <b>monoestables</b>.</p>
          <p>Las válvulas <b>biestables</b> tienen accionamiento en los dos lados (por ejemplo, señales de aire a izquierda y derecha) y se quedan en la última posición aunque la señal desaparezca: tienen <mark>memoria</mark>. Son muy útiles para que un cilindro siga avanzando aunque se suelte el pulsador. Las válvulas 3/2 de rodillo se usan como <b>sensores</b> de posición: cuando el vástago llega al final de su recorrido, pisa el rodillo y envía una señal que puede iniciar el siguiente movimiento. Leer bien los accionamientos de un esquema es la clave para entender qué hace un circuito.</p>`,
        svg: L.cajas("Tipos de accionamiento de las válvulas", [["Manual", "pulsador, palanca|pedal"], ["Mecánico", "rodillo,|final de carrera"], ["Neumático", "señal de aire|(pilotaje)"], ["Eléctrico", "electroimán|(solenoide)"]], { t: "Accionamientos" }),
      },
    ],
    "Símbolos y circuitos": [
      {
        html: `<h3>Secuencias automáticas</h3><p>En la industria, varios cilindros trabajan en un orden fijo: una <b>secuencia</b>. Para describirla se nombra cada cilindro con una letra y se indica su avance con «+» y su retroceso con «−». Por ejemplo, en una máquina que sujeta una pieza y la marca: A+ (el cilindro A sujeta), B+ (el B marca), B− (el B sube), A− (el A suelta). Cada movimiento empieza cuando termina el anterior, y eso se detecta con <b>finales de carrera</b>: válvulas de rodillo situadas en las posiciones extremas de cada vástago (a0, a1, b0, b1).</p>
          <p>La secuencia se representa con un <mark>diagrama espacio-fase</mark>: en horizontal, las fases o pasos; en vertical, la posición de cada cilindro (0 recogido, 1 extendido). Así se ve de un vistazo qué hace cada cilindro en cada momento. En las secuencias sencillas, el final de carrera de un movimiento acciona la válvula que provoca el siguiente: a1 da la orden B+, b1 da la orden B−… Cuando dos órdenes contrarias coinciden en el tiempo se produce un bloqueo y hay que usar métodos más avanzados (cascada, paso a paso) o, lo más habitual hoy, un <b>autómata programable</b> que gestiona la secuencia por programa.</p>`,
        svg: L.rejilla("Diagrama espacio-fase de la secuencia A+ B+ B− A−", ["Cilindro", "Fase 1", "Fase 2", "Fase 3", "Fase 4"], [["A", "sale (1)", "1", "1", "entra (0)"], ["B", "0", "sale (1)", "entra (0)", "0"], ["Orden", "A+", "B+", "B−", "A−"]], { t: "Secuencia A+ B+ B− A−" }),
      },
      {
        html: `<h3>Electroneumática y automatización</h3><p>La <b>electroneumática</b> combina la fuerza del aire con el control eléctrico. Las válvulas se accionan con <b>electroválvulas</b>, cuyo solenoide recibe la orden de un circuito eléctrico de 24 V; los finales de carrera mecánicos se sustituyen por <b>sensores</b> eléctricos (magnéticos, que detectan el émbolo a través del cilindro; inductivos, que detectan metal; o fotoeléctricos). La lógica, en lugar de hacerse con válvulas Y y O, se hace con relés o, sobre todo, con un <b>autómata programable</b> (<mark>PLC</mark>): un ordenador industrial resistente que lee los sensores y activa las electroválvulas según su programa.</p>
          <p>Con un PLC se pueden cambiar las secuencias sin tocar el cableado, contar piezas, temporizar, detectar fallos y comunicarse con otras máquinas y con el ordenador de la fábrica. Es la base de la <b>industria 4.0</b>. La neumática y la hidráulica están por todas partes: en las puertas de trenes y autobuses, los frenos de camiones, las sillas del dentista, los ascensores hidráulicos, las grúas, las excavadoras, el tren de aterrizaje y los alerones de los aviones, las prensas y las líneas de embotellado. En el taller escolar se puede experimentar con jeringuillas y tubos o con simuladores como FluidSIM.</p>`,
        svg: L.flujo("Cadena de control electroneumática", ["Sensor magnético detecta el émbolo", "El PLC lee la entrada", "El programa decide el paso", "Activa el solenoide de la electroválvula", "El cilindro se mueve"], { t: "Electroneumática" }),
      },
      {
        html: `<h3>Circuitos hidráulicos y seguridad</h3><p>Un circuito hidráulico se parece a uno neumático, pero con diferencias importantes. El aceite no se expulsa a la atmósfera: después de mover el cilindro <b>vuelve al depósito</b> por una tubería de retorno, así que el circuito es cerrado. La <b>bomba</b>, movida por un motor eléctrico o de combustión, impulsa el aceite; una <b>válvula limitadora de presión</b> lo devuelve al depósito si la presión sube demasiado, protegiendo la instalación. Las presiones son mucho mayores que en neumática, de 100 a 300 bar o más, y por eso se consiguen fuerzas enormes con cilindros pequeños.</p>
          <p>Trabajar con fluidos a presión exige precauciones. Nunca se desconecta un tubo con el circuito presurizado: el aire puede hacer que la manguera golpee como un látigo, y un chorro fino de aceite a alta presión puede atravesar la piel. Hay que usar <b>gafas</b>, revisar mangueras y racores, purgar la presión antes de cualquier manipulación y no dirigir nunca el aire comprimido hacia una persona. Los aceites usados son <mark>residuos peligrosos</mark>: se recogen y se llevan a un gestor autorizado. Las máquinas deben tener <b>paro de emergencia</b> y, en las prensas, mandos a dos manos o barreras de seguridad.</p>`,
        svg: L.ciclo("Circuito hidráulico cerrado: depósito, bomba, válvula, cilindro y retorno", "aceite", ["depósito", "bomba", "válvula", "cilindro", "retorno"]),
      },
    ],
  },
  secciones: [5, 4, 6],
  niveles: "bbmmmbbmmb",
  ejercicios: [
    { nivel: "básico", q: "¿Qué elementos forman la unidad de mantenimiento y qué hace cada uno?", sol: "Filtro (retiene polvo y agua), regulador con manómetro (fija la presión de trabajo) y lubricador (añade una niebla de aceite)." },
    { nivel: "básico", q: "¿Qué diferencia hay entre una válvula monoestable y una biestable?", sol: "La monoestable vuelve sola a su posición de reposo por un muelle al quitar la señal; la biestable se queda en la última posición (tiene memoria) hasta recibir la señal contraria." },
    { nivel: "básico", q: "Nombra los cuatro tipos de accionamiento de una válvula con un ejemplo de cada uno.", sol: "Manual (pulsador), mecánico (rodillo o final de carrera), neumático (señal de aire de otra válvula) y eléctrico (solenoide de una electroválvula)." },
    { nivel: "básico", q: "¿Qué significa la secuencia A+ B+ A− B−?", sol: "Sale el cilindro A, después sale el B, luego entra el A y por último entra el B." },
    { nivel: "básico", q: "¿Qué es un PLC?", sol: "Un autómata programable: un ordenador industrial que lee sensores y activa actuadores (como electroválvulas) según un programa." },
    { nivel: "básico", q: "¿Por qué en hidráulica hay una tubería de retorno y en neumática no?", sol: "El aceite se reutiliza y vuelve al depósito; el aire se expulsa a la atmósfera después de usarlo." },
    { nivel: "básico", q: "Indica tres normas de seguridad con aire comprimido.", sol: "No dirigir nunca el aire hacia personas, usar gafas, purgar la presión antes de desconectar tubos y revisar mangueras y racores." },
    { nivel: "medio", q: "Un cilindro tiene émbolo de 40 mm y vástago de 16 mm. Calcula las superficies de avance y retroceso en cm².", sol: "Avance: π · 4² / 4 = 12,57 cm². Vástago: π · 1,6² / 4 = 2,01 cm². Retroceso: 12,57 − 2,01 = 10,56 cm²." },
    { nivel: "medio", q: "Con el cilindro anterior a 6 bar, calcula las fuerzas teóricas de avance y retroceso.", sol: "6 bar = 600.000 Pa. Avance: 600.000 · 12,57 · 10⁻⁴ = 754 N. Retroceso: 600.000 · 10,56 · 10⁻⁴ = 634 N." },
    { nivel: "medio", q: "Si la fuerza real es un 10 % menor que la teórica, ¿qué fuerza real de avance tiene el cilindro anterior?", sol: "754 · 0,9 ≈ 679 N." },
    { nivel: "medio", q: "Un cilindro de 20 cm² de émbolo recibe un caudal de 100 cm³/s. ¿A qué velocidad sale el vástago?", sol: "v = Q / S = 100 / 20 = 5 cm/s." },
    { nivel: "medio", q: "Calcula el volumen de un cilindro de 12,57 cm² de émbolo y 10 cm de carrera en cada avance. ¿Cuánto aire libre gasta a 6 bar?", sol: "V = 12,57 · 10 = 125,7 cm³. A presión atmosférica ocupa unas (6 + 1) = 7 veces más: unos 880 cm³ por avance." },
    { nivel: "medio", q: "Dibuja (describe) el diagrama espacio-fase de la secuencia A+ A− B+ B−.", sol: "Fase 1: A pasa a 1 (B en 0). Fase 2: A vuelve a 0. Fase 3: B pasa a 1. Fase 4: B vuelve a 0. A y B nunca están extendidos a la vez." },
    { nivel: "medio", q: "¿Para qué sirve una válvula de rodillo situada al final del recorrido de un cilindro?", sol: "Es un final de carrera: cuando el vástago la pisa, envía una señal que indica que el cilindro ha llegado y puede iniciar el siguiente movimiento o el retroceso." },
    { nivel: "medio", q: "¿Por qué se pone una pendiente en las tuberías de aire comprimido?", sol: "Para que el agua que se condensa corra hacia los puntos de purga y no llegue a las máquinas." },
    { nivel: "medio", q: "Compara un final de carrera mecánico con un sensor magnético en un cilindro.", sol: "El mecánico necesita que el vástago lo toque y se desgasta; el magnético detecta el imán del émbolo a través de la camisa, sin contacto, ocupa menos y envía una señal eléctrica a un PLC." },
    { nivel: "avanzado", q: "Una prensa hidráulica trabaja a 200 bar con un cilindro de 10 cm de diámetro. ¿Qué fuerza hace? ¿Qué masa podría levantar?", sol: "S = π · 0,1² / 4 = 0,00785 m². p = 20.000.000 Pa. F = 20.000.000 · 0,00785 ≈ 157.000 N. Masa ≈ 157.000 / 9,8 ≈ 16.000 kg (16 toneladas)." },
    { nivel: "avanzado", q: "Diseña un circuito para que un cilindro de doble efecto avance al pulsar un botón y retroceda solo al llegar al final.", sol: "Válvula 5/2 biestable pilotada neumáticamente que alimenta el cilindro. Un pulsador 3/2 envía la señal de avance (pilotaje izquierdo). Un final de carrera 3/2 de rodillo (a1), pisado al final del recorrido, envía la señal de retroceso (pilotaje derecho)." },
    { nivel: "avanzado", q: "En la secuencia A+ B+ A− B−, ¿qué final de carrera da cada orden?", sol: "El pulsador de marcha (con a0) da A+; a1 da B+; b1 da A−; a0 da B−. (Al empezar, el pulsador y la posición inicial permiten arrancar el ciclo.)" },
    { nivel: "avanzado", q: "Un compresor debe alimentar 4 cilindros que gastan 0,9 litros de aire libre por ciclo cada uno y hacen 20 ciclos por minuto. ¿Qué caudal mínimo necesita?", sol: "4 · 0,9 · 20 = 72 litros de aire libre por minuto. Se elige un compresor con margen (por ejemplo, 100 L/min) para cubrir fugas y picos." },
    { nivel: "avanzado", q: "Una fuga de aire desperdicia 50 L/min las 24 horas. Si producir 1.000 L de aire comprimido cuesta 0,02 €, ¿cuánto cuesta al año?", sol: "50 · 60 · 24 · 365 = 26.280.000 L al año = 26.280 miles de litros. Coste: 26.280 · 0,02 ≈ 525 € al año." },
    { nivel: "avanzado", q: "¿Por qué es peligroso desconectar una manguera hidráulica con presión? Explica dos riesgos.", sol: "Un chorro fino de aceite a cientos de bar puede atravesar la piel e inyectar aceite en el cuerpo (lesión grave). Además, la manguera puede latiguear y golpear, y la carga sostenida por el cilindro puede caer de golpe." },
    { nivel: "avanzado", q: "Compara automatizar una máquina con lógica neumática (válvulas Y, O, finales de carrera) y con un PLC con electroválvulas.", sol: "Neumática pura: no necesita electricidad (útil en ambientes explosivos), sencilla y robusta, pero cambiar la secuencia exige recablear tubos. PLC: flexible (se reprograma), permite contar, temporizar, diagnosticar y comunicarse, aunque necesita electricidad y programación." },
    { nivel: "avanzado", q: "Construye un modelo de prensa hidráulica con dos jeringuillas de 5 mL (sección 1,2 cm²) y 20 mL (sección 3,1 cm²). ¿Cuánto se multiplica la fuerza? ¿Y el recorrido?", sol: "La fuerza se multiplica por 3,1 / 1,2 ≈ 2,6. El recorrido se divide por 2,6: si empujas 2,6 cm la pequeña, la grande sube 1 cm (el volumen desplazado es el mismo)." },
    { nivel: "avanzado", q: "Explica por qué la neumática se prefiere en la industria alimentaria y la hidráulica en las excavadoras.", sol: "En alimentación importan la limpieza y la rapidez: el aire no contamina si hay una fuga y los movimientos son veloces con fuerzas moderadas. En excavadoras se necesitan fuerzas enormes y control preciso de la posición, que solo da un líquido incompresible a alta presión." },
  ],
  ejemplos: [
    { enunciado: "Calcula la fuerza de retroceso de un cilindro con émbolo de 50 mm y vástago de 20 mm a 6 bar.", pasos: ["Superficie del émbolo: π · 5² / 4 = 19,63 cm².", "Superficie del vástago: π · 2² / 4 = 3,14 cm².", "Superficie útil: 19,63 − 3,14 = 16,49 cm² = 0,001649 m².", "F = 600.000 Pa · 0,001649 m² ≈ 989 N."], resultado: "Unos 989 N (frente a 1.178 N de avance)." },
    { enunciado: "¿A qué velocidad sale un cilindro de 19,63 cm² si recibe 0,5 litros por segundo?", pasos: ["Caudal: 0,5 L/s = 500 cm³/s.", "v = Q / S = 500 / 19,63.", "v ≈ 25,5 cm/s."], resultado: "Unos 25 cm/s." },
    { enunciado: "Describe la secuencia de una máquina que coge una caja (A+), la empuja a una cinta (B+), retira el empujador (B−) y suelta (A−).", pasos: ["Secuencia: A+ B+ B− A−.", "Finales de carrera: a0, a1, b0, b1.", "Órdenes: marcha y a0 → A+; a1 → B+; b1 → B−; b0 → A−.", "Diagrama espacio-fase: A en 1 durante las fases 1 a 3; B en 1 solo en la fase 2."], resultado: "Secuencia A+ B+ B− A− controlada por finales de carrera." },
  ],
  errores: ["Calcular la fuerza de retroceso con toda la superficie del émbolo: hay que restar la del vástago."],
  cuarta: ["Gas natural", "Porque se calienta", "un electroimán siempre", "2 vías y 5 posiciones", "50 N", "10 Pa", "F = p + S", "Bernoulli", "de escape rápido", "selectora"],
  quiz: [
    { q: "La fuerza de retroceso de un cilindro de doble efecto es…", o: ["mayor que la de avance", "menor que la de avance", "igual", "nula"], a: 1, e: "El vástago reduce la superficie útil." },
    { q: "La velocidad de un cilindro depende sobre todo…", o: ["del color del tubo", "del caudal de fluido", "de la temperatura exterior", "del número de vías"], a: 1, e: "Q = S · v." },
    { q: "El elemento que fija la presión de trabajo es…", o: ["el filtro", "el regulador", "el lubricador", "el cilindro"], a: 1, e: "Lleva un manómetro." },
    { q: "El presostato de un compresor…", o: ["filtra el aire", "arranca y para el compresor según la presión", "lubrica", "mueve el cilindro"], a: 1, e: "Mantiene la presión del depósito entre dos valores." },
    { q: "Una válvula biestable…", o: ["vuelve sola por un muelle", "mantiene su posición sin señal", "no tiene posiciones", "solo funciona con aceite"], a: 1, e: "Tiene memoria." },
    { q: "Un final de carrera de rodillo es un accionamiento…", o: ["manual", "mecánico", "eléctrico", "hidráulico"], a: 1, e: "El vástago lo pisa." },
    { q: "En el diagrama espacio-fase, el eje vertical indica…", o: ["la presión", "la posición de cada cilindro", "el caudal", "la temperatura"], a: 1, e: "0 recogido, 1 extendido." },
    { q: "Un autómata programable se conoce por las siglas…", o: ["PLC", "PIA", "ACS", "CAD"], a: 0, e: "Programmable Logic Controller." },
    { q: "La válvula limitadora de presión en hidráulica…", o: ["aumenta la presión", "devuelve el aceite al depósito si la presión es excesiva", "mueve el cilindro", "filtra el aire"], a: 1, e: "Protege la instalación." },
    { q: "Los aceites hidráulicos usados son…", o: ["basura normal", "residuos peligrosos", "reutilizables en la cocina", "inofensivos"], a: 1, e: "Se entregan a un gestor autorizado." },
  ],
  cuartaEx: ["El manómetro", "4/3", "NOR"],
  examen: [
    { q: "La superficie útil en el retroceso es…", o: ["π·D²/4", "π·(D² − d²)/4", "π·d²/4", "D · d"], a: 1, e: "Émbolo menos vástago." },
    { q: "La unidad de mantenimiento se coloca…", o: ["después del cilindro", "antes de cada máquina", "dentro del compresor", "en el escape"], a: 1, e: "Prepara el aire para los componentes." },
    { q: "Una electroválvula se acciona con…", o: ["un pedal", "un solenoide", "un rodillo", "un muelle"], a: 1, e: "Un electroimán mueve la corredera." },
    { q: "Las presiones típicas en hidráulica son…", o: ["1-2 bar", "6-10 bar", "100-300 bar o más", "0,1 bar"], a: 2, e: "Por eso dan fuerzas enormes." },
    { q: "Un sensor magnético en un cilindro detecta…", o: ["el color del vástago", "el imán del émbolo", "la temperatura del aire", "la humedad"], a: 1, e: "Sin contacto, a través de la camisa." },
  ],
  tarjetas: [
    ["Fuerza de retroceso", "F' = p · π · (D² − d²) / 4."],
    ["Caudal y velocidad", "Q = S · v."],
    ["Unidad de mantenimiento", "Filtro, regulador y lubricador."],
    ["Diagrama espacio-fase", "Muestra la posición de cada cilindro en cada fase de la secuencia."],
  ],
  glosario: [
    ["Presión", "Fuerza por unidad de superficie: p = F / S."],
    ["Pascal (Pa)", "Unidad de presión: 1 N/m²; 1 bar = 100.000 Pa."],
    ["Principio de Pascal", "La presión en un fluido encerrado se transmite igual a todos sus puntos."],
    ["Caudal", "Volumen de fluido que pasa por segundo."],
    ["Compresor", "Máquina que comprime el aire."],
    ["Unidad de mantenimiento", "Conjunto de filtro, regulador y lubricador."],
    ["Bomba hidráulica", "Máquina que impulsa el aceite en un circuito hidráulico."],
    ["Cilindro de doble efecto", "Cilindro que avanza y retrocede con fluido a presión."],
    ["Vástago", "Barra del cilindro que sale y entra."],
    ["Válvula distribuidora", "Válvula que dirige el fluido; se nombra por vías y posiciones."],
    ["Accionamiento", "Forma de cambiar de posición una válvula: manual, mecánico, neumático o eléctrico."],
    ["Válvula biestable", "Válvula que conserva su posición sin señal."],
    ["Final de carrera", "Detector de la posición extrema de un vástago."],
    ["Secuencia", "Orden de movimientos de varios cilindros (A+ B+ B− A−)."],
    ["Diagrama espacio-fase", "Gráfico de la posición de cada cilindro en cada fase."],
    ["Electroválvula", "Válvula accionada por un electroimán."],
    ["PLC", "Autómata programable que controla procesos industriales."],
  ],
  situacion: {
    titulo: "Diseñamos una máquina automática de embalaje",
    reto: "Una pequeña empresa de mermeladas necesita automatizar el cierre de sus cajas. Diseñad, simulad y, si es posible, construid con jeringuillas o un kit una máquina neumática que sujete la caja, la cierre y la libere en una secuencia segura.",
    pasos: [
      "Definid la secuencia de movimientos (por ejemplo A+ B+ B− A−) y dibujad su diagrama espacio-fase.",
      "Calculad la fuerza necesaria y elegid los diámetros de los cilindros, comprobando avance y retroceso a 6 bar.",
      "Diseñad el circuito con símbolos normalizados: válvulas, finales de carrera, mando a dos manos y regulación de velocidad.",
      "Simuladlo en FluidSIM u otro simulador y corregid los errores; construid un modelo con jeringuillas o un kit de neumática.",
      "Estimad el consumo de aire y redactad las normas de seguridad de la máquina.",
    ],
    producto: "El esquema del circuito, la simulación funcionando, el modelo y una ficha técnica con cálculos y normas de seguridad.",
    evaluacion: ["La secuencia y el diagrama espacio-fase son correctos y coherentes.", "Los cálculos de fuerza, superficie y consumo son correctos.", "El circuito usa bien los símbolos y las válvulas adecuadas (incluido el mando a dos manos).", "La ficha incluye medidas de seguridad realistas."],
  },
  objetivos: ["Calcular fuerzas de avance y retroceso, caudales y consumo de aire", "Diseñar secuencias neumáticas con finales de carrera y conocer la electroneumática"],
  fuentes: [{ t: "Principio de Pascal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Principio_de_Pascal" }],
});
