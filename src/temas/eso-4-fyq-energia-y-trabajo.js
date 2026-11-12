// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "La energía y el trabajo",
  minutos: 40,
  objetivos: ["Calcular el trabajo realizado por una fuerza", "Calcular la energía cinética y la potencial gravitatoria", "Aplicar la conservación de la energía mecánica y el concepto de potencia"],
  claves: ["trabajo", "julio (J)", "energía cinética", "energía potencial", "energía mecánica", "potencia"],
  pregunta: {
    texto: "Sostienes una mochila pesada quieto durante diez minutos y acabas agotado. Sin embargo, un físico diría que no has hecho ningún trabajo. ¿Cómo es posible?",
    respuesta: "En física, el <mark>trabajo</mark> solo existe si la fuerza <b>desplaza</b> el objeto. Si la mochila no se mueve, W = F · d = F · 0 = 0. Tu cansancio es real: tus músculos gastan energía química contrayéndose, pero esa energía no se transfiere a la mochila como trabajo.",
  },
  bloques: [
    {
      html: `<h3>La energía</h3><p>La <b>energía</b> es la capacidad de un sistema para producir cambios. Se mide en <b>julios (J)</b> y tiene muchas formas: cinética, potencial, térmica, química, eléctrica, nuclear, radiante… Cumple dos reglas: <mark>se transforma</mark> de unas formas en otras y <mark>se conserva</mark> (la total no cambia). Pero en cada transformación una parte se <b>degrada</b> en calor que ya no se puede aprovechar bien.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena de transformaciones: química de la comida, cinética de la bici, eléctrica de la dinamo y luminosa de la bombilla">
        <defs>${flecha("ej1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle">
          ${[["química", "var(--leaf)", 36, 60], ["cinética", "var(--pen)", 130, 60], ["eléctrica", "var(--sun)", 224, 60], ["luz", "var(--red)", 224, 136], ["calor", "var(--muted)", 110, 136]].map(([t, c, x, y]) => `<circle cx="${x}" cy="${y}" r="28" fill="${c}" opacity=".85"/><text x="${x}" y="${y + 4}" fill="#fff">${t}</text>`).join("")}
        </g>
        <g stroke="var(--muted)" stroke-width="2.5" marker-end="url(#ej1)"><path d="M66 60 H 98"/><path d="M160 60 H 192"/><path d="M224 90 V 104"/><path d="M194 136 H 142"/></g>
      </svg>`,
    },
    {
      html: `<h3>El trabajo</h3><p>Una fuerza realiza <b>trabajo</b> cuando desplaza un cuerpo. Si la fuerza va en la dirección del movimiento:</p>
      <div class="formula"><span>W = F · d</span><span class="op">(</span><span>J = N · m</span><span class="op">)</span></div>
      <p>Si la fuerza forma un ángulo α con el desplazamiento, solo cuenta la parte que empuja en esa dirección: <mark>W = F · d · cos α</mark>. Una fuerza perpendicular al movimiento (como el peso de la mochila al andar en horizontal) no hace trabajo. El rozamiento hace un trabajo negativo: quita energía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Se arrastra una caja con una fuerza inclinada un ángulo alfa a lo largo de una distancia d">
        <defs>${flecha("ej2", "var(--red)")}${flecha("ej3", "var(--pen)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 120 H 246" stroke="var(--muted)" stroke-width="2"/>
        <rect x="40" y="80" width="50" height="40" rx="4" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M90 94 L 156 52" stroke="var(--red)" stroke-width="4" marker-end="url(#ej2)"/><path d="M90 94 H 160" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>
        <path d="M116 94 A 26 26 0 0 0 112 80" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <path d="M40 146 H 210" stroke="var(--pen)" stroke-width="3" marker-end="url(#ej3)"/>
        <g ${F} font-size="13" font-weight="700"><text x="160" y="46" fill="var(--red)">F</text><text x="122" y="88" fill="var(--ink)">α</text><text x="120" y="168" fill="var(--pen)">d</text></g>
      </svg>`,
    },
    {
      html: `<h3>Energía cinética y potencial</h3><p>La <b>energía cinética</b> es la que tiene un cuerpo <mark>por moverse</mark>: crece con la masa y, sobre todo, con la velocidad al cuadrado. A doble velocidad, cuatro veces más energía: por eso un choque a 100 km/h es mucho más grave que a 50.</p>
      <div class="formula"><span>Ec = ½ · m · v²</span></div>
      <p>La <b>energía potencial gravitatoria</b> es la que tiene <mark>por su altura</mark>:</p>
      <div class="formula"><span>Ep = m · g · h</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una maceta en un balcón tiene energía potencial y un coche en marcha tiene energía cinética">
        <defs>${flecha("ej4", "var(--leaf)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="30" width="60" height="130" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="80" y="44" width="20" height="5" fill="var(--ink)"/>
        <path d="M86 30 L 96 30 L 94 44 L 88 44 Z" fill="var(--red)"/><circle cx="91" cy="24" r="7" fill="var(--leaf)"/>
        <path d="M110 46 V 156" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/><text x="114" y="104" font-size="13" font-weight="700" fill="var(--pen)" ${F}>h</text>
        <rect x="150" y="128" width="56" height="20" rx="6" fill="var(--pen)"/><rect x="160" y="116" width="30" height="14" rx="4" fill="var(--pen)"/><circle cx="162" cy="150" r="7" fill="var(--ink)"/><circle cx="194" cy="150" r="7" fill="var(--ink)"/>
        <path d="M212 136 H 246" stroke="var(--leaf)" stroke-width="3" marker-end="url(#ej4)"/><text x="228" y="128" font-size="13" font-weight="700" fill="var(--leaf)" ${F}>v</text>
        <g ${F} font-size="12" font-weight="700"><text x="130" y="30" fill="var(--pen)">Ep = m·g·h</text><text x="150" y="98" fill="var(--leaf)">Ec = ½·m·v²</text></g>
      </svg>`,
    },
    {
      html: `<h3>Conservación de la energía mecánica</h3><p>La <b>energía mecánica</b> es la suma <mark>Em = Ec + Ep</mark>. Si no hay rozamiento, <b>se conserva</b>: lo que pierde una forma lo gana la otra. En una montaña rusa, arriba casi toda es potencial y abajo casi toda cinética. Así se calcula la velocidad al final de una caída desde h:</p>
      <div class="formula"><span>m · g · h = ½ · m · v²</span><span class="op">→</span><span>v = √(2 · g · h)</span></div>
      <p>Con rozamiento, parte de la energía mecánica se transforma en calor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Montaña rusa: arriba energía potencial máxima, abajo cinética máxima; la suma es constante">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 40 C 60 40, 70 150, 130 150 S 200 70, 246 80" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <circle cx="24" cy="34" r="7" fill="var(--red)"/><circle cx="130" cy="144" r="7" fill="var(--red)"/>
        ${[[30, 70, 0], [118, 0, 70], [216, 30, 40]].map(([x, ep, ec]) => `<rect x="${x}" y="${100 - ep * 0.6 + 0}" width="10" height="${ep * 0.6}" fill="var(--pen)" transform="translate(0 ${-30})"/><rect x="${x + 12}" y="${100 - ec * 0.6}" width="10" height="${ec * 0.6}" fill="var(--leaf)" transform="translate(0 ${-30})"/>`).join("")}
        <g ${F} font-size="11" font-weight="700"><rect x="150" y="160" width="9" height="9" fill="var(--pen)"/><text x="162" y="168" fill="var(--pen)">Ep</text><rect x="190" y="160" width="9" height="9" fill="var(--leaf)"/><text x="202" y="168" fill="var(--leaf)">Ec</text></g>
      </svg>`,
    },
    {
      html: `<h3>Potencia y rendimiento</h3><p>La <b>potencia</b> indica <mark>lo rápido que se realiza un trabajo</mark> o se transfiere energía:</p>
      <div class="formula"><span>P = W / t</span><span class="op">(</span><span>vatio: W = J/s</span><span class="op">)</span></div>
      <p>Un ascensor potente sube a las mismas personas en menos tiempo. También se usa el caballo de vapor (1 CV ≈ 735 W) y el kilovatio-hora (kWh) de la factura de la luz, que es una unidad de energía. El <b>rendimiento</b> compara la energía útil con la consumida: una bombilla LED aprovecha mucho más que una incandescente.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos personas suben la misma escalera: la que tarda menos desarrolla más potencia">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 160 H 60 V 130 H 100 V 100 H 140 V 70 H 180 V 40 H 240" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <circle cx="88" cy="86" r="8" fill="var(--red)"/><circle cx="168" cy="26" r="8" fill="var(--leaf)"/>
        <g ${F} font-size="12" font-weight="700"><text x="20" y="40" fill="var(--leaf)">10 s → más potencia</text><text x="20" y="60" fill="var(--red)">30 s → menos potencia</text><text x="130" y="150" fill="var(--muted)">mismo trabajo</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Fórmulas clave de la energía mecánica",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Fórmulas del trabajo, energía cinética, energía potencial y potencia">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Trabajo", "W = F·d·cos α", "julios (J)", "var(--red)"], ["Cinética", "Ec = ½·m·v²", "por moverse", "var(--leaf)"], ["Potencial", "Ep = m·g·h", "por la altura", "var(--pen)"], ["Potencia", "P = W / t", "vatios (W)", "var(--sun)"]]
        .map(([n, f, d, c], i) => `<rect x="${16 + i * 154}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="62" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="116" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink)" ${F}>${f}</text>
          <text x="${89 + i * 154}" y="164" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "fuluizJfsok", titulo: "Física: trabajo mecánico", canal: "YoEstudio", vistas: 753819, megusta: 0, busqueda: "trabajo y energía mecánica física" },
  quiz: [
    { q: "Empujas un carro con 50 N a lo largo de 10 m en la dirección del movimiento. ¿Qué trabajo haces?", o: ["5 J", "500 J", "60 J"], a: 1, e: "W = F · d = 50 · 10 = 500 J." },
    { q: "¿Qué energía cinética tiene una pelota de 0,5 kg a 4 m/s?", o: ["1 J", "4 J", "8 J"], a: 1, e: "Ec = ½ · 0,5 · 4² = 0,25 · 16 = 4 J." },
    { q: "Si la velocidad de un coche se duplica, su energía cinética…", o: ["se duplica", "se cuadruplica", "no cambia"], a: 1, e: "Ec depende de v²: 2² = 4." },
    { q: "Un libro de 2 kg en una estantería a 1,5 m. ¿Cuál es su energía potencial? (g = 9,8)", o: ["29,4 J", "3 J", "14,7 J"], a: 0, e: "Ep = 2 · 9,8 · 1,5 = 29,4 J." },
    { q: "Un motor hace 6 000 J de trabajo en 20 s. ¿Qué potencia desarrolla?", o: ["300 W", "120 000 W", "30 W"], a: 0, e: "P = W / t = 6 000 / 20 = 300 W." },
  ],
  examen: [
    { q: "Dejas caer una piedra desde 20 m sin rozamiento. ¿Con qué velocidad llega al suelo? (g = 10 m/s²)", o: ["20 m/s", "200 m/s", "10 m/s"], a: 0, e: "v = √(2 · 10 · 20) = √400 = 20 m/s." },
    { q: "Al andar en horizontal con una mochila, el peso de la mochila…", o: ["hace trabajo positivo", "no hace trabajo", "hace trabajo negativo"], a: 1, e: "El peso es vertical y el desplazamiento horizontal: cos 90° = 0." },
    { q: "¿Qué mide el kilovatio-hora (kWh)?", o: ["Potencia", "Energía", "Fuerza"], a: 1, e: "kW · h = energía. 1 kWh = 3 600 000 J." },
  ],
  feynman: ["Qué significa que la energía se transforma, se conserva y se degrada", "Cuándo una fuerza hace trabajo y cuándo no", "Por qué la velocidad influye tanto en la energía cinética", "Cómo se conserva la energía en una montaña rusa", "La diferencia entre potencia y energía"],
  mapa: mapa("ENERGÍA Y TRABAJO", "var(--eso)", [
    ["Energía", "se transforma · se conserva", "var(--ink)"],
    ["Trabajo", "W = F·d·cos α", "var(--red)"],
    ["Mecánica", "Ec + Ep = constante", "var(--leaf)"],
    ["Potencia", "P = W/t · vatios", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["Fórmula del trabajo", "W = F · d · cos α (en julios)."],
    ["Fórmula de la energía cinética", "Ec = ½ · m · v²."],
    ["Fórmula de la energía potencial gravitatoria", "Ep = m · g · h."],
    ["Principio de conservación de la energía mecánica", "Sin rozamiento, Ec + Ep se mantiene constante."],
    ["Definición de potencia", "Trabajo realizado por unidad de tiempo: P = W / t (vatios)."],
  ],
  familias: ["Mirad la etiqueta de potencia de varios electrodomésticos y comparad cuál gasta más energía en una hora.", "Subid las escaleras de casa andando y corriendo, cronometrad y calculad la potencia de cada uno.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La energía: trabajo, energía cinética y potencial, conservación de la energía mecánica, potencia y rendimiento (RD 217/2022, Física y Química 4º).",
    ideas: ["Simulación PhET «Parque de patinaje: energía» con y sin rozamiento.", "Medir la potencia de cada alumno subiendo escaleras con su masa y un cronómetro.", "Rampa con una canica para comparar la velocidad medida con √(2gh)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Energía mecánica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_mec%C3%A1nica" },
  ],
  revisado: "2026-11-12",
};
