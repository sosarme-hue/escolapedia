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
