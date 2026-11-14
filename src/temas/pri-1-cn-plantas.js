// Ciencias de la Naturaleza 1º de Primaria. Nivel libro: lectura, apartados numerados, ejercicios por niveles, glosario y situación.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, nube, arbol, flor, check, RD } = require("./_peques");
const L3 = require("./_pri1L3");

// Planta grande con raíz, tallo, hojas y flor. (x, y) = nivel del suelo; s = escala.
const planta = (x, y, s = 1, conFlor = true) => `<g transform="translate(${x} ${y}) scale(${s})">
  <g stroke="#8a5a2b" stroke-width="3" fill="none" stroke-linecap="round"><path d="M0 0 V 30 M0 10 L -16 28 M0 10 L 16 28 M0 20 L -8 34 M0 20 L 10 36"/></g>
  <path d="M0 0 V -70" stroke="var(--leaf)" stroke-width="5"/>
  <path d="M0 -26 Q -30 -40 -34 -22 Q -14 -14 0 -26 Z" fill="var(--leaf)"/><path d="M0 -44 Q 30 -58 34 -40 Q 14 -32 0 -44 Z" fill="var(--leaf)"/>
  ${conFlor ? `${[0, 72, 144, 216, 288].map((a) => `<circle cx="${(Math.cos((a * Math.PI) / 180) * 11).toFixed(1)}" cy="${(-80 + Math.sin((a * Math.PI) / 180) * 11).toFixed(1)}" r="9" fill="var(--red)"/>`).join("")}<circle cy="-80" r="7" fill="var(--sun)"/>` : ""}</g>`;
const suelo = (y) => `<rect x="14" y="${y}" width="232" height="${166 - y}" rx="6" fill="#c98a4a" opacity=".35"/>`;
const semilla = (x, y, s = 1) => `<ellipse cx="${x}" cy="${y}" rx="${7 * s}" ry="${4.5 * s}" fill="#8a5a2b"/>`;
const gota = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -10 Q 8 2 0 6 Q -8 2 0 -10 Z" fill="var(--water)"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: "1-primaria",
  titulo: "Las plantas",
  minutos: 50,
  objetivos: ["Nombrar las partes de una planta: raíz, tallo, hojas, flor y fruto", "Saber que las plantas nacen de semillas y necesitan agua, luz y aire", "Distinguir árboles, arbustos y hierbas", "Valorar lo que nos dan las plantas y cuidarlas"],
  claves: ["raíz", "tallo", "hoja", "flor", "fruto", "semilla"],
  pregunta: {
    texto: "Las plantas no tienen boca. ¿Cómo beben agua?",
    respuesta: "Por la <mark>raíz</mark>. La raíz está bajo tierra y chupa el agua, como una pajita. Después el agua sube por el <b>tallo</b> hasta las hojas.",
  },
  lectura: L3.lect("La semilla de Ana", `<p>Ana encuentra una semilla de girasol en el parque. Es pequeña, negra y con rayas.</p><p>«¿Qué puedo hacer con ella?», pregunta a su padre.</p><p>«Vamos a plantarla», dice él. Llenan una maceta con tierra y meten la semilla dentro.</p><p>Ana la riega cada día y pone la maceta junto a la ventana.</p><p>Una mañana ve algo verde que asoma. ¡Es un tallo con dos hojitas!</p><p>Pasan las semanas. La planta crece y crece. Al final sale una flor amarilla, grande como un plato.</p><p>«¡Mira, papá! Tiene muchas semillas nuevas.» ¿Cómo viven y crecen las plantas? Lo vas a descubrir.</p>`),
  bloques: [
    {
      html: `<h3>1. Las plantas están vivas</h3><p>Las plantas son <mark>seres vivos</mark>. Nacen, crecen, se alimentan y mueren.</p><p>No pueden andar como los animales. Viven siempre en el mismo sitio, sujetas al suelo.</p><p>Hay plantas en el campo, en los parques y en el agua. También en las macetas de casa.</p><p>Las plantas son muy importantes para la vida. Sin plantas, los animales y las personas no tendríamos comida.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un árbol, una flor y una maceta con una planta">${BG}
        ${sol(220, 36, 14)}${arbol(50, 150, 1.3)}${flor(130, 150, "var(--inf)")}${flor(150, 150, "var(--red)")}
        <g transform="translate(210 150)"><path d="M-18 -26 H 18 L 14 0 H -14 Z" fill="#c9653a"/><path d="M0 -26 V -50" stroke="var(--leaf)" stroke-width="3"/><ellipse cx="-9" cy="-42" rx="10" ry="5" fill="var(--leaf)"/><ellipse cx="9" cy="-50" rx="10" ry="5" fill="var(--leaf)"/></g>
        <path d="M14 152 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(110, 30, "¡Tienen vida!", { size: 16, color: "var(--leaf)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>2. Raíz, tallo y hojas</h3><p>La <mark>raíz</mark> está bajo tierra. Sujeta la planta y toma el agua del suelo.</p><p>El <mark>tallo</mark> sostiene la planta. Por dentro sube el agua hasta las hojas.</p><p>Las <mark>hojas</mark> suelen ser verdes. Toman la luz del sol y el aire. Con ellos la planta fabrica su comida.</p><p>Algunas raíces se comen, como la zanahoria. Algunas hojas también, como la lechuga. ¡Probamos plantas casi todos los días!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Planta con la raíz bajo tierra, el tallo y las hojas señalados">${BG}
        ${suelo(130)}${planta(100, 130, 1.25, false)}
        <g font-size="14" font-weight="700" ${F}>
          <path d="M120 80 L 160 70" stroke="var(--leaf)" stroke-width="2"/><text x="164" y="75" fill="var(--leaf)">hojas</text>
          <path d="M102 112 L 160 108" stroke="var(--leaf)" stroke-width="2"/><text x="164" y="113" fill="var(--leaf)">tallo</text>
          <path d="M112 156 L 160 150" stroke="#8a5a2b" stroke-width="2"/><text x="164" y="155" fill="#8a5a2b">raíz</text></g></svg>`,
      video: { id: "wBjaQuyMr18", titulo: "La planta y sus partes para niños - Ciencias naturales para niños", canal: "Smile and Learn - Español", vistas: 3875176, megusta: 0 },
    },
    {
      html: `<h3>3. La flor y el fruto</h3><p>Muchas plantas tienen <mark>flores</mark> de colores. Las abejas y las mariposas visitan las flores.</p><p>Con el tiempo, la flor se convierte en un <mark>fruto</mark>. Dentro del fruto están las <b>semillas</b>.</p><p>Una manzana es un fruto. Si la abres, verás sus semillas, las pepitas.</p><p>Las abejas llevan polen de flor en flor. Así ayudan a que salgan los frutos. Por eso las abejas son tan importantes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una flor se convierte en una manzana; la manzana abierta tiene semillas">${BG}
        ${flor(50, 140, "var(--red)")}
        <path d="M80 100 H 110 M104 94 L 112 100 L 104 106" stroke="var(--muted)" stroke-width="2.5" fill="none"/>
        <g transform="translate(140 104)"><circle r="20" fill="var(--red)"/><path d="M0 -19 q 2 -8 6 -10" stroke="var(--ink)" stroke-width="2" fill="none"/><ellipse cx="7" cy="-26" rx="6" ry="3" fill="var(--leaf)"/></g>
        <path d="M168 100 H 190 M184 94 L 192 100 L 184 106" stroke="var(--muted)" stroke-width="2.5" fill="none"/>
        <g transform="translate(220 104)"><circle r="22" fill="#fbe9c8" stroke="var(--red)" stroke-width="4"/>${semilla(-5, -2, 0.9)}${semilla(6, 4, 0.9)}${semilla(-2, 9, 0.9)}</g>
        ${txt(50, 162, "flor", { size: 13 })}${txt(140, 162, "fruto", { size: 13 })}${txt(220, 162, "semillas", { size: 13 })}</svg>`,
    },
    {
      html: `<h3>4. ¿Qué necesitan?</h3><p>Para vivir, las plantas necesitan <mark>cuatro cosas</mark>.</p><p><b>Agua</b>: sin agua se secan. <b>Luz</b>: sin sol se ponen pálidas y débiles. <b>Aire</b>: lo toman por las hojas. <b>Tierra</b>: allí crecen sus raíces.</p><p>Por eso las macetas se ponen cerca de la ventana. Allí reciben más luz.</p><p>Algunas plantas necesitan poca agua, como el cactus. Viven en el desierto y guardan agua dentro de su tallo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una planta recibe sol, agua, aire y tierra">${BG}
        ${suelo(138)}${planta(130, 138, 1.05)}
        ${sol(40, 40, 14)}${gota(214, 40, 1.4)}${gota(230, 58, 1)}
        <g stroke="var(--muted)" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M24 100 q 16 -8 32 0 t 32 0"/><path d="M30 112 q 14 -6 28 0"/></g>
        ${txt(40, 76, "luz", { size: 13, color: "#b8860b" })}${txt(222, 84, "agua", { size: 13, color: "var(--water)" })}${txt(46, 132, "aire", { size: 13, color: "var(--muted)" })}${txt(212, 160, "tierra", { size: 13, color: "#8a5a2b" })}</svg>`,
    },
    {
      html: `<h3>5. Nacen de una semilla</h3><p>Casi todas las plantas nacen de una <mark>semilla</mark>.</p><p>Ponemos la semilla en la tierra y la regamos. Primero sale una raíz pequeña. Luego sale un tallo con dos hojitas.</p><p>Poco a poco, la planta <b>crece</b>. Algún día tendrá flores y frutos con semillas nuevas.</p><p>Hay semillas que viajan con el viento, como las del diente de león. ¡Sopla y verás cómo vuelan!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro pasos: semilla, semilla con raíz, brote con dos hojas y planta con flor">${BG}
        ${suelo(120)}
        ${semilla(40, 134, 1.2)}
        ${semilla(95, 134, 1.2)}<path d="M95 138 q -2 10 2 18" stroke="#8a5a2b" stroke-width="2" fill="none"/>
        <g transform="translate(150 120)">${semilla(0, 14, 1)}<path d="M0 10 V -24" stroke="var(--leaf)" stroke-width="3"/><ellipse cx="-8" cy="-24" rx="8" ry="4" fill="var(--leaf)"/><ellipse cx="8" cy="-24" rx="8" ry="4" fill="var(--leaf)"/></g>
        ${planta(212, 120, 0.8)}
        ${["1", "2", "3", "4"].map((n, i) => txt([40, 95, 150, 212][i], 30, n, { size: 18, color: "var(--pen)", font: D, weight: 800 })).join("")}</svg>`,
    },
    {
      html: `<h3>6. Árboles, arbustos y hierbas</h3><p>Hay plantas de muchos tamaños.</p><p>Los <mark>árboles</mark> son altos. Tienen un tallo grueso y duro: el <b>tronco</b>.</p><p>Los <mark>arbustos</mark> son más bajos. Tienen muchos tallos duros desde el suelo, como el rosal.</p><p>Las <mark>hierbas</mark> son pequeñas. Tienen el tallo blando y verde, como el césped.</p><p>Algunos árboles viven cientos de años. Son más viejos que nuestros abuelos y que los abuelos de nuestros abuelos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un árbol alto, un arbusto mediano y hierbas pequeñas">${BG}
        ${arbol(52, 146, 1.7)}
        <g transform="translate(140 146)"><g stroke="#8a5a2b" stroke-width="3"><path d="M-10 0 L -14 -20 M0 0 V -24 M10 0 L 14 -20"/></g><circle cx="-14" cy="-30" r="15" fill="var(--leaf)"/><circle cx="14" cy="-30" r="15" fill="var(--leaf)"/><circle cy="-40" r="15" fill="var(--leaf)"/><circle cx="-6" cy="-34" r="3" fill="var(--red)"/><circle cx="10" cy="-42" r="3" fill="var(--red)"/></g>
        <g stroke="var(--leaf)" stroke-width="3" stroke-linecap="round">${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${200 + i * 8} 146 l ${i % 2 ? 3 : -3} -14"/>`).join("")}</g>
        <path d="M14 148 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(52, 168, "árbol", { size: 13 })}${txt(140, 168, "arbusto", { size: 13 })}${txt(220, 168, "hierba", { size: 13 })}</svg>`,
      video: { id: "ThbSPNlRz0o", titulo: "El reino de las plantas. Sus características y clasificación", canal: "Happy Learning Español", vistas: 2684954, megusta: 0 },
    },
    {
      html: `<h3>7. Las plantas cambian</h3><p>Las plantas cambian con las <mark>estaciones</mark> del año.</p><p>En <b>primavera</b> salen hojas nuevas y flores. En <b>verano</b> hay muchos frutos.</p><p>En <b>otoño</b>, muchos árboles pierden las hojas. Se ponen amarillas y marrones y caen.</p><p>En <b>invierno</b> esos árboles descansan sin hojas. Otros, como el pino, siempre están verdes.</p><p>Las hojas caídas no se pierden. Se mezclan con la tierra y la hacen más rica para otras plantas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El mismo árbol en primavera con flores, en verano con frutos, en otoño con hojas marrones y en invierno sin hojas">${BG}
        ${[["var(--leaf)", "var(--red)", "primavera"], ["var(--leaf)", "var(--inf)", "verano"], ["#d18b2a", null, "otoño"], [null, null, "invierno"]].map(([copa, punto, t], i) => {
          const x = 38 + i * 61;
          return `<g transform="translate(${x} 136)"><rect x="-4" y="-34" width="8" height="34" fill="#8a5a2b"/>${copa ? `<circle cy="-48" r="22" fill="${copa}"/>` : `<path d="M0 -34 L -14 -60 M0 -40 L 14 -62 M0 -48 V -66" stroke="#8a5a2b" stroke-width="3"/>`}${punto ? [[-8, -54], [8, -44], [0, -60], [-10, -40]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="3.5" fill="${punto}"/>`).join("") : ""}${i === 2 ? `<ellipse cx="14" cy="-4" rx="4" ry="2.5" fill="#d18b2a"/><ellipse cx="-14" cy="-2" rx="4" ry="2.5" fill="#a8702e"/>` : ""}</g>${txt(x, 160, t, { size: 11 })}`;
        }).join("")}
        <path d="M14 138 H 246" stroke="var(--line)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>8. ¿Para qué sirve?</h3><p>Las plantas nos dan <mark>muchas cosas</mark>.</p><p>Nos dan <b>alimentos</b>: frutas, verduras, pan y legumbres. Nos dan <b>madera</b> para hacer mesas y papel. Con el algodón hacemos ropa.</p><p>Además, limpian el aire y nos dan <b>oxígeno</b> para respirar. Los árboles dan sombra en verano.</p><p>Muchas medicinas también vienen de las plantas. Y las flores alegran los parques y las casas con sus colores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="De las plantas sacamos frutas, madera, papel y aire limpio">${BG}
        ${arbol(130, 120, 1.3)}
        <g transform="translate(40 80)"><circle r="14" fill="var(--red)"/><ellipse cx="5" cy="-17" rx="5" ry="3" fill="var(--leaf)"/></g>${txt(40, 112, "comida", { size: 12 })}
        <g transform="translate(40 146)"><rect x="-20" y="-10" width="40" height="8" fill="#c98a4a"/><rect x="-16" y="-2" width="5" height="14" fill="#c98a4a"/><rect x="11" y="-2" width="5" height="14" fill="#c98a4a"/></g>${txt(40, 172, "madera", { size: 12 })}
        <g transform="translate(220 80)"><rect x="-14" y="-18" width="28" height="36" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-8 -8 h 16 M-8 0 h 16 M-8 8 h 10" stroke="var(--line)" stroke-width="2"/></g>${txt(220, 112, "papel", { size: 12 })}
        <g stroke="var(--water)" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M200 146 q 10 -8 20 0 t 20 0"/></g>${txt(220, 172, "aire limpio", { size: 12 })}
        <path d="M100 122 H 160" stroke="var(--leaf)" stroke-width="3"/></svg>`,
    },
    {
      html: `<h3>9. Cuidamos las plantas</h3><p>Las plantas están vivas. Por eso las <mark>cuidamos</mark>.</p><p>Regamos las macetas cuando la tierra está seca. No las regamos demasiado.</p><p>En el parque no arrancamos flores ni pisamos el césped. No rompemos las ramas de los árboles.</p><p>También podemos plantar árboles nuevos.</p><p>Algunas plantas pinchan o son venenosas. No las tocamos ni las comemos sin preguntar a un adulto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño riega una planta en una maceta; al lado, una flor arrancada tachada">${BG}
        ${persona(60, 156, 110, "var(--pen)")}
        <g transform="translate(96 94)"><path d="M0 0 h 26 v 20 h -26 Z" fill="var(--leaf)"/><path d="M26 4 L 46 -6" stroke="var(--leaf)" stroke-width="5" stroke-linecap="round"/></g>
        ${gota(150, 100, 0.7)}${gota(156, 112, 0.7)}
        <g transform="translate(160 156)"><path d="M-18 -26 H 18 L 14 0 H -14 Z" fill="#c9653a"/></g>${flor(160, 130, "var(--inf)")}
        ${flor(222, 120, "var(--red)")}${check(222, 140, false)}
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>10. Experimento: plantamos una lenteja</h3><p>Vamos a ver cómo nace una <mark>planta</mark>.</p><p>Pon algodón mojado en un vaso de yogur. Coloca encima tres lentejas. Deja el vaso cerca de la ventana.</p><p>Mójalo un poco cada día. En pocos días saldrá la raíz y luego el tallo.</p><p>Dibuja cada día lo que ves.</p><p>Después, prueba a dejar otro vaso a oscuras. Compara los dos vasos. ¿Cuál crece mejor? ¿Por qué?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres vasos: lentejas sobre algodón, lenteja con raíz y lenteja con tallo y hojas">${BG}
        ${[0, 1, 2].map((i) => {
          const x = 50 + i * 80;
          return `<path d="M${x - 26} 100 L ${x + 26} 100 L ${x + 20} 150 H ${x - 20} Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><ellipse cx="${x}" cy="104" rx="24" ry="7" fill="#fff" stroke="var(--line)"/>${semilla(x - 6, 100, 0.9)}${i > 0 ? `<path d="M${x - 6} 104 q -2 12 3 22" stroke="#8a5a2b" stroke-width="2" fill="none"/>` : ""}${i > 1 ? `<path d="M${x - 6} 98 V 62" stroke="var(--leaf)" stroke-width="3"/><ellipse cx="${x - 14}" cy="62" rx="8" ry="4" fill="var(--leaf)"/><ellipse cx="${x + 2}" cy="62" rx="8" ry="4" fill="var(--leaf)"/>` : ""}${txt(x, 170, ["día 1", "día 3", "día 7"][i], { size: 12 })}`;
        }).join("")}
        ${txt(130, 30, "¡Mira cómo crece!", { size: 15, color: "var(--leaf)", font: D, weight: 800 })}</svg>`,
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Las plantas son <mark>seres vivos</mark>. Nacen de una semilla, crecen y mueren.</p><p>Tienen <b>raíz</b>, <b>tallo</b> y <b>hojas</b>. Muchas tienen <b>flores</b> y <b>frutos</b> con semillas.</p><p>Necesitan agua, luz, aire y tierra. Hay árboles, arbustos y hierbas.</p><p>Nos dan alimentos, madera y aire limpio. Por eso las cuidamos y las respetamos.</p>`, "Una planta con flor y las palabras raíz, tallo, hojas y flor", `<path d="M20 130 H240" stroke="#8a5a2b" stroke-width="4"/><path d="M90 130 q-10 14 -22 22 M90 130 q2 16 -4 26 M90 130 q12 12 22 20" stroke="#8a5a2b" stroke-width="3" fill="none"/><path d="M90 130 V54" stroke="var(--leaf)" stroke-width="6"/><ellipse cx="70" cy="96" rx="18" ry="8" fill="var(--leaf)" transform="rotate(-25 70 96)"/><ellipse cx="110" cy="84" rx="18" ry="8" fill="var(--leaf)" transform="rotate(25 110 84)"/>${L3.flor(90, 58, "var(--red)")}${L3.t(185, 42, "flor", "var(--red)")}${L3.t(185, 90, "hojas", "var(--leaf)")}${L3.t(185, 118, "tallo", "var(--leaf)")}${L3.t(185, 160, "raíz", "#8a5a2b")}`),
  ],
  figura: {
    titulo: "Las partes de la planta",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Planta grande con raíz, tallo, hojas, flor y fruto señalados">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <rect x="16" y="210" width="608" height="74" rx="10" fill="#c98a4a" opacity=".35"/>
      ${planta(320, 210, 2.2)}
      ${semilla(510, 156, 2)}
      ${[["FLOR", "atrae a las abejas", 70, "var(--red)", "M300 34 L 230 70"], ["HOJAS", "toman luz y aire", 140, "var(--leaf)", "M250 150 L 230 140"], ["RAÍZ", "toma agua y sujeta", 250, "#8a5a2b", "M300 260 L 230 250"]].map(([t, d, y, c, p]) => `<path d="${p}" stroke="${c}" stroke-width="2"/>${txt(140, y, t, { size: 18, color: c, font: D, weight: 800 })}${txt(140, y + 22, d, { size: 13 })}`).join("")}
      ${[["TALLO", "sostiene y lleva el agua", 110, "var(--leaf)", "M326 120 L 410 110"], ["SEMILLA", "de ella nace la planta", 180, "#8a5a2b", "M410 180 L 410 180"]].map(([t, d, y, c, p]) => `<path d="${p}" stroke="${c}" stroke-width="2"/>${txt(510, y, t, { size: 18, color: c, font: D, weight: 800 })}${txt(510, y + 22, d, { size: 13 })}`).join("")}
    </svg>`,
  },
  video: { id: "zIDVm8_aLDI", titulo: "Partes de una planta | Camaleón", canal: "CNTV Infantil", vistas: 8799804, megusta: 0, busqueda: "las plantas para niños partes de la planta" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué parte de la planta es la zanahoria que comemos?",
      pasos: ["La zanahoria crece bajo tierra.", "La parte de la planta que está bajo tierra es la raíz.", "Las hojas verdes de arriba se ven fuera de la tierra."],
      resultado: "la zanahoria es una raíz." },
    { enunciado: "Una planta lleva días en un armario oscuro. Está pálida. ¿Qué le pasa?",
      pasos: ["Piensa qué necesitan las plantas: agua, luz, aire y tierra.", "En el armario no hay luz.", "Sin luz, la planta no puede fabricar su comida."],
      resultado: "le falta luz: hay que ponerla cerca de la ventana." },
    { enunciado: "¿Un rosal es un árbol, un arbusto o una hierba?",
      pasos: ["El rosal no es tan alto como un árbol.", "Tiene varios tallos duros que salen del suelo.", "No tiene un tronco grueso."],
      resultado: "el rosal es un arbusto." },
    { enunciado: "¿Qué parte de la planta es la lechuga que comemos?", pasos: ["La lechuga es verde y crece sobre la tierra.", "Comemos sus partes grandes y planas.", "Esas partes toman la luz del sol."], resultado: "de la lechuga comemos las hojas." },
  ],
  errores: [
    "Pensar que las plantas no están vivas porque no se mueven: nacen, crecen y se alimentan.",
    "Creer que las plantas comen tierra: toman agua y fabrican su comida con la luz.",
    "Regar demasiado: el exceso de agua también estropea las raíces.",
    "Pensar que todas las plantas tienen flores de colores: algunas, como los helechos, no tienen flores.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di las partes de una planta.", sol: "Raíz, tallo, hojas, flor y fruto." },
    { nivel: "básico", q: "¿Qué parte de la planta está bajo tierra?", sol: "La raíz." },
    { nivel: "básico", q: "Dibuja una planta y colorea cada parte de un color.", sol: "Deben verse raíz, tallo, hojas y flor." },
    { nivel: "básico", q: "Di las cuatro cosas que necesita una planta.", sol: "Agua, luz, aire y tierra." },
    { nivel: "básico", q: "¿De dónde nace una planta?", sol: "De una semilla." },
    { nivel: "medio", q: "Abre una mandarina o una naranja. ¿Tiene semillas?", sol: "A veces tiene pepitas: son sus semillas." },
    { nivel: "medio", q: "Di un árbol, un arbusto y una hierba.", sol: "Por ejemplo: el pino, el rosal y el césped." },
    { nivel: "básico", q: "¿Qué pasa con muchos árboles en otoño?", sol: "Se les caen las hojas." },
    { nivel: "básico", q: "Di tres cosas que nos dan las plantas.", sol: "Por ejemplo: fruta, madera y papel." },
    { nivel: "medio", q: "Planta una lenteja en algodón y cuenta cuántos días tarda en salir la raíz.", sol: "Suele tardar entre 2 y 4 días." },
    L3.b("Rodea las plantas: rosal, perro, pino, piedra.", "Rosal y pino."),
    L3.m("Ordena cómo crece una planta: flor, semilla, tallo con hojitas, raíz.", "Semilla, raíz, tallo con hojitas y flor."),
    L3.m("¿Qué parte de la planta comemos en la zanahoria? ¿Y en la manzana?", "Zanahoria: la raíz. Manzana: el fruto."),
    L3.m("¿Por qué ponemos las macetas cerca de la ventana?", "Porque allí reciben más luz."),
    L3.m("Di dos cosas que hacen las abejas en las flores.", "Toman su néctar y llevan el polen de flor en flor."),
    L3.m("Dibuja un árbol en otoño y otro en primavera.", "En otoño, con hojas marrones cayendo; en primavera, con hojas verdes y flores."),
    L3.a("Clasifica: pino, rosal, césped, encina, tomillo. ¿Árbol, arbusto o hierba?", "Árboles: pino y encina. Arbusto: rosal. Hierbas: césped y tomillo."),
    L3.a("¿Qué le pasa a una planta si la riegas demasiado?", "Sus raíces se pudren y la planta se pone enferma."),
    L3.a("Explica por qué sin plantas no podríamos vivir.", "Nos dan alimento, oxígeno para respirar y muchas cosas más."),
    L3.a("Busca en casa tres cosas que vengan de las plantas.", "Por ejemplo: una mesa de madera, una camiseta de algodón y el pan."),
    L3.a("Compara una lenteja con luz y otra a oscuras. ¿Qué pasa?", "La de luz crece verde y fuerte; la de la oscuridad, pálida y débil."),
    L3.a("Di cómo puedes cuidar los árboles de tu barrio.", "No romper ramas, no pisar el césped y ayudar a plantar árboles."),
  ],
  quiz: [
    { q: "Las plantas son…", o: ["seres vivos", "seres inertes", "animales"], a: 0, e: "Nacen, crecen y mueren." },
    { q: "¿Qué parte toma el agua del suelo?", o: ["La flor", "La raíz", "La hoja"], a: 1, e: "La raíz chupa el agua." },
    { q: "¿Qué parte sostiene la planta?", o: ["El tallo", "El fruto", "La semilla"], a: 0, e: "El tallo la mantiene derecha." },
    { q: "Las hojas toman…", o: ["la luz del sol", "la tierra", "las piedras"], a: 0, e: "Toman luz y aire." },
    { q: "Dentro del fruto están…", o: ["las raíces", "las semillas", "las hojas"], a: 1, e: "Las semillas están en el fruto." },
    { q: "Una planta nace de…", o: ["un huevo", "una semilla", "una piedra"], a: 1, e: "De una semilla." },
    { q: "El tronco es el tallo del…", o: ["árbol", "césped", "rosal"], a: 0, e: "Es grueso y duro." },
    { q: "Sin luz, una planta…", o: ["crece mejor", "se pone débil", "da más flores"], a: 1, e: "Necesita luz para fabricar su comida." },
    { q: "¿Qué nos dan los árboles?", o: ["Madera", "Leche", "Lana"], a: 0, e: "La madera viene de los árboles." },
    { q: "En otoño, muchos árboles…", o: ["pierden las hojas", "dan flores", "se mueven"], a: 0, e: "Las hojas se ponen marrones y caen." },
    L3.Q("¿Qué animales ayudan a que salgan los frutos?", ["Las abejas", "Los peces", "Los gatos"], 0, "Llevan el polen de flor en flor."),
    L3.Q("El cactus vive en…", ["el desierto", "el mar", "la nieve"], 0, "Necesita poca agua."),
  ],
  examen: [
    { q: "¿Qué parte de la planta suele tener colores y atrae a las abejas?", o: ["La raíz", "La flor", "El tallo"], a: 1, e: "La flor." },
    { q: "¿Qué necesita una planta para vivir?", o: ["Agua y luz", "Chocolate", "Ruido"], a: 0, e: "Agua, luz, aire y tierra." },
    { q: "El césped es…", o: ["un árbol", "un arbusto", "una hierba"], a: 2, e: "Tiene el tallo blando y verde." },
    { q: "Las plantas limpian…", o: ["el aire", "los zapatos", "las mesas"], a: 0, e: "Nos dan oxígeno." },
    L3.Q("¿Qué parte de la planta sujeta la planta al suelo?", ["La raíz", "La flor", "El fruto"], 0, "Y toma el agua."),
    L3.Q("El pino en invierno…", ["sigue verde", "pierde todas las hojas", "da flores"], 0, "Siempre está verde."),
  ],
  feynman: ["Las partes de la planta y para qué sirven", "Qué necesita una planta para vivir", "Cómo nace una planta de una semilla"],
  mapa: mapa("LAS PLANTAS", "var(--pri)", [
    ["Partes", "raíz · tallo · hojas · flor · fruto", "var(--leaf)"],
    ["Necesitan", "agua · luz · aire · tierra", "var(--water)"],
    ["Tipos", "árbol · arbusto · hierba", "#8a5a2b"],
    ["Nos dan", "comida · madera · oxígeno", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["¿Qué parte de la planta está bajo tierra?", "La raíz"],
    ["¿Qué hace el tallo?", "Sostiene la planta y lleva el agua"],
    ["¿Qué toman las hojas?", "Luz y aire"],
    ["¿Dónde están las semillas?", "Dentro del fruto"],
    ["¿Qué necesitan las plantas?", "Agua, luz, aire y tierra"],
    ["¿Cómo se llama el tallo del árbol?", "Tronco"],
    ["¿Qué es un arbusto?", "Una planta baja con muchos tallos duros"],
    ["¿Qué nos dan las plantas?", "Alimentos, madera, papel y oxígeno"],
    ["¿Qué hacen las abejas en las flores?", "Llevan el polen de flor en flor"],
    ["¿Qué planta vive en el desierto?", "El cactus"],
  ],
  glosario: [
    ["Raíz", "La parte de la planta que está bajo tierra y toma el agua."],
    ["Tallo", "La parte que sostiene la planta; en los árboles se llama tronco."],
    ["Hoja", "La parte verde que toma la luz del sol."],
    ["Flor", "La parte de colores que se convierte en fruto."],
    ["Fruto", "La parte que guarda las semillas, como la manzana."],
    ["Semilla", "La parte pequeña de la que nace una planta nueva."],
    ["Árbol", "Planta alta con un tronco grueso y duro."],
    ["Arbusto", "Planta más baja con muchos tallos duros."],
    ["Hierba", "Planta pequeña con el tallo blando y verde."],
  ],
  situacion: L3.sit("El huerto de la ventana", "Vamos a plantar un pequeño huerto en la ventana de clase y a cuidarlo entre todos.", ["Llenamos vasos de yogur con tierra y plantamos lentejas, judías o semillas de girasol.", "Hacemos turnos para regar y mirar las plantas cada día.", "Dibujamos en un diario cómo crecen: raíz, tallo, hojas.", "Al final, contamos a otra clase lo que necesita una planta para vivir."], "Un huerto de clase y un diario con dibujos del crecimiento.", ["Nombra las partes de la planta.", "Cumple su turno de riego.", "Explica qué necesitan las plantas."]),
  familias: [
    "Plantad juntos una lenteja o una judía en algodón y llevad un diario de dibujos.",
    "En la cocina, buscad partes de plantas: raíz (zanahoria), hoja (lechuga), fruto (tomate), semilla (garbanzo).",
    "Encargadle regar una planta de casa y mirar si la tierra está seca.",
    "En otoño, recoged hojas de distintos árboles y comparad formas y colores.",
  ],
  profesores: {
    saberes: "Ciencias, Geografía e Historia: las plantas, sus partes, necesidades y ciclo de vida; relación con las personas y cuidado del entorno (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Semillero de aula con lentejas, judías y alpiste y registro diario.", "Experimento del apio en agua con colorante para ver subir el agua por el tallo.", "Herbario de hojas de otoño del patio."],
  },
  fuentes: [RD],
  revisado: "2026-11-14",
};
