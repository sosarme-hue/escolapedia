// Ciencias Sociales 1º de Primaria. Nivel libro: lectura, apartados numerados, ejercicios por niveles, glosario y situación.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, arbol, casa, check, RD } = require("./_peques");
const L3 = require("./_pri1L3");

// Bloque de pisos.
const pisos = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-30" y="-110" width="60" height="110" fill="#c9a36a" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3].map((f) => [-16, 4].map((c) => `<rect x="${c}" y="${-100 + f * 24}" width="12" height="14" fill="var(--water)"/>`).join("")).join("")}<rect x="-8" y="-18" width="16" height="18" fill="var(--pen)"/></g>`;
const cama = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-30" y="-10" width="60" height="18" rx="3" fill="var(--pen)"/><rect x="-34" y="-24" width="8" height="34" fill="#8a5a2b"/><rect x="-24" y="-16" width="16" height="8" rx="3" fill="#fff"/></g>`;
const sofa = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-30" y="-20" width="60" height="16" rx="5" fill="var(--red)"/><rect x="-34" y="-10" width="68" height="16" rx="5" fill="var(--red)"/><path d="M-28 6 V 12 M28 6 V 12" stroke="var(--ink)" stroke-width="3"/></g>`;
const cocina = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-26" y="-30" width="52" height="40" rx="3" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="-12" cy="-36" r="5" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="12" cy="-36" r="5" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="-18" y="-20" width="36" height="22" rx="2" fill="var(--inf)" fill-opacity=".3" stroke="var(--ink)" stroke-width="1.5"/></g>`;
const banera = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-34 -12 H 34 V 0 Q 34 12 22 12 H -22 Q -34 12 -34 0 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M26 -12 V -30 H 18" stroke="var(--muted)" stroke-width="3" fill="none"/><g fill="none" stroke="var(--water)" stroke-width="1.5"><circle cx="-10" cy="-18" r="4"/><circle cx="0" cy="-22" r="3"/></g></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "Mi casa",
  minutos: 50,
  objetivos: ["Saber que la casa es el lugar donde vivimos y nos protege", "Distinguir tipos de vivienda: piso, casa, chalé", "Nombrar las habitaciones de la casa y lo que hacemos en cada una", "Conocer su dirección y las normas de seguridad en casa"],
  claves: ["vivienda", "piso", "habitación", "dirección", "agua", "electricidad"],
  pregunta: {
    texto: "¿Por qué necesitamos una casa?",
    respuesta: "La casa nos <mark>protege</mark> del frío, del calor y de la lluvia. En ella dormimos, comemos, descansamos y vivimos con nuestra familia.",
  },
  lectura: L3.lect("La casa de Tomás", `<p>Tomás invita a su amiga Inés a merendar. Vive en un piso, en la tercera planta.</p><p>Suben en ascensor y llaman al timbre. Les abre la madre de Tomás.</p><p>«Ven, te enseño mi casa», dice Tomás. Primero van a la cocina, donde huele a magdalenas.</p><p>Después ven el salón, con un sofá grande y muchas plantas. Al final del pasillo está el dormitorio de Tomás.</p><p>Inés mira por la ventana. «¡Desde aquí se ve el parque!»</p><p>«Mi casa es diferente», dice Inés. «Vivo en una casa con jardín, en el pueblo.»</p><p>¿Cómo es tu casa? ¿Qué hay en cada habitación? En este tema lo vamos a ver.</p>`),
  bloques: [
    {
      html: `<h3>1. Mi casa</h3><p>La <mark>casa</mark> es el lugar donde vivimos con nuestra familia. También se llama <b>vivienda</b>.</p><p>La casa nos protege del frío y del calor. También del viento y de la lluvia.</p><p>En casa comemos, dormimos, jugamos y descansamos. Es un sitio tranquilo y seguro. ¡Qué bien se está en casa!</p><p>Cada familia decora su casa a su gusto. Con fotos, dibujos, plantas o juguetes. Así se siente un hogar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una casa bajo la lluvia; dentro, una familia seca y contenta">${BG}
        <g stroke="var(--water)" stroke-width="2.5">${[[24, 30], [48, 50], [214, 36], [236, 60], [30, 76], [224, 90]].map(([x, y]) => `<path d="M${x} ${y} l -4 10"/>`).join("")}</g>
        ${casa(130, 156, 2)}
        ${persona(116, 152, 30, "var(--red)")}${persona(144, 152, 26, "var(--leaf)")}
        <path d="M14 158 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(130, 174, "nos protege", { size: 12, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>2. Hay muchas viviendas</h3><p>No todas las casas son iguales.</p><p>En las ciudades hay muchos <mark>pisos</mark>. Están en un edificio alto con muchas viviendas. Los vecinos comparten el portal y el ascensor.</p><p>En los pueblos hay muchas <mark>casas</mark> de una o dos plantas. Algunas tienen jardín o huerto. También hay chalés y caravanas.</p><p>En el mundo hay casas muy curiosas: iglús de hielo, casas sobre el agua y tiendas en el desierto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un edificio de pisos, una casa con jardín y una caravana">${BG}
        ${pisos(56, 156, 1.1)}${casa(150, 156, 1.1, "var(--inf)")}${arbol(190, 156, 0.6)}
        <g transform="translate(222 156)"><rect x="-24" y="-30" width="44" height="24" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="-16" y="-24" width="10" height="8" fill="var(--water)"/><circle cx="-8" cy="-4" r="5" fill="var(--ink)"/><path d="M20 -10 H 30" stroke="var(--ink)" stroke-width="2"/></g>
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(56, 174, "pisos", { size: 12 })}${txt(150, 174, "casa", { size: 12 })}${txt(222, 174, "caravana", { size: 12 })}</svg>`,
      video: { id: "5ohPSXkS41A", titulo: "Las viviendas", canal: "DETODOCURIOSO", vistas: 497202, megusta: 0 },
    },
    {
      html: `<h3>3. Por fuera</h3><p>Mira una casa <mark>por fuera</mark>.</p><p>Arriba tiene el <b>tejado</b>. Nos protege de la lluvia. Las <b>paredes</b> sujetan la casa.</p><p>Por la <b>puerta</b> entramos y salimos. Por las <b>ventanas</b> entra la luz y el aire. Algunas casas tienen balcón o chimenea. Otras tienen terraza o jardín.</p><p>Las casas se construyen con ladrillos, piedra, madera o cemento. Los albañiles las levantan poco a poco.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una casa grande con el tejado, la pared, la puerta, la ventana y la chimenea señalados">${BG}
        ${casa(110, 160, 2.3, "var(--red)")}<rect x="142" y="34" width="14" height="24" fill="#8a5a2b"/>
        <g font-size="12" font-weight="700" ${F}>
          <path d="M166 62 L 196 54" stroke="var(--red)" stroke-width="2"/><text x="198" y="58" fill="var(--red)">tejado</text>
          <path d="M156 38 L 172 26" stroke="#8a5a2b" stroke-width="2" fill="none"/><text x="176" y="28" fill="#8a5a2b">chimenea</text>
          <path d="M150 95 L 186 90" stroke="var(--water)" stroke-width="2"/><text x="190" y="94" fill="var(--water)">ventana</text>
          <path d="M118 140 L 186 130" stroke="var(--pen)" stroke-width="2"/><text x="190" y="134" fill="var(--pen)">puerta</text>
          <path d="M60 120 L 30 140" stroke="var(--muted)" stroke-width="2"/><text x="16" y="156" fill="var(--muted)">pared</text></g></svg>`,
    },
    {
      html: `<h3>4. Las habitaciones</h3><p>Por dentro, la casa tiene <mark>habitaciones</mark>. Cada una sirve para algo.</p><p>En la <b>cocina</b> preparamos la comida. En el <b>salón</b> descansamos y vemos la tele. En el <b>dormitorio</b> dormimos. En el <b>baño</b> nos lavamos.</p><p>El <b>pasillo</b> une las habitaciones. Algunas casas también tienen terraza o garaje.</p><p>Cada habitación tiene su momento del día. Por la mañana, el baño. A mediodía, la cocina. Por la noche, el dormitorio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Plano de una casa con cocina, salón, dormitorio y baño">${BG}
        ${[["cocina", 14, 14, 112, 72, "var(--inf)"], ["salón", 134, 14, 112, 72, "var(--red)"], ["dormitorio", 14, 94, 112, 72, "var(--pen)"], ["baño", 134, 94, 112, 72, "var(--water)"]].map(([t, x, y, w, h, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.5"/>${txt(x + 10, y + 20, t, { size: 12, color: c, anchor: "start" })}`).join("")}
        ${cocina(80, 72)}${sofa(200, 72)}${cama(76, 150)}${banera(196, 150)}</svg>`,
    },
    {
      html: `<h3>5. Muebles y objetos</h3><p>En cada habitación hay <mark>muebles</mark> y objetos.</p><p>En la cocina hay nevera, horno y fregadero. En el salón hay sofá, mesa y sillas. En el dormitorio hay cama, armario y mesilla. En el baño hay lavabo, ducha o bañera y váter.</p><p>¿Qué hay en tu habitación?</p><p>Los muebles los ordenamos para que haya sitio para moverse. ¡Y para jugar en el suelo!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un dormitorio con cama, armario, mesilla con lámpara y juguetes">${BG}
        <rect x="14" y="14" width="232" height="116" rx="8" fill="var(--sun)" fill-opacity=".12"/>
        <rect x="24" y="40" width="54" height="90" rx="4" fill="#c98a4a" stroke="#8a5a2b" stroke-width="2"/><path d="M51 40 V 130" stroke="#8a5a2b" stroke-width="2"/><circle cx="46" cy="86" r="2.5" fill="var(--ink)"/><circle cx="56" cy="86" r="2.5" fill="var(--ink)"/>
        <g transform="translate(150 130)"><rect x="-44" y="-16" width="88" height="22" rx="4" fill="var(--pen)"/><rect x="-50" y="-36" width="10" height="44" fill="#8a5a2b"/><rect x="-38" y="-24" width="22" height="10" rx="4" fill="#fff"/></g>
        <rect x="206" y="104" width="30" height="26" fill="#c98a4a"/><path d="M221 104 V 88" stroke="var(--ink)" stroke-width="2"/><path d="M211 88 H 231 L 226 74 H 216 Z" fill="var(--sun)"/>
        <path d="M14 130 H 246" stroke="#8a5a2b" stroke-width="2"/>
        ${txt(51, 150, "armario", { size: 12 })}${txt(150, 150, "cama", { size: 12 })}${txt(221, 150, "mesilla", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>6. Mi dirección</h3><p>Cada casa tiene una <mark>dirección</mark>. Sirve para encontrarla.</p><p>La dirección tiene el nombre de la <b>calle</b> y un <b>número</b>. Si vives en un piso, también tiene la planta y la letra. Por ejemplo: calle del Sol, 5, segundo B.</p><p>El cartero usa la dirección para traer las cartas.</p><p>También existe el código postal: un número que ayuda a que las cartas lleguen a la ciudad correcta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un sobre con la dirección calle del Sol 5, 2º B y una placa de calle">${BG}
        <rect x="20" y="24" width="120" height="34" rx="4" fill="var(--pen)" stroke="#fff" stroke-width="3"/>${txt(80, 46, "Calle del Sol", { size: 13, color: "#fff" })}
        <rect x="150" y="24" width="40" height="34" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${txt(170, 48, "5", { size: 18, color: "var(--ink)", font: D, weight: 800 })}
        <g transform="translate(130 120)"><rect x="-80" y="-36" width="160" height="80" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-80 -36 L 0 10 L 80 -36" stroke="var(--line)" stroke-width="2" fill="none"/><rect x="50" y="-30" width="22" height="18" fill="var(--red)"/></g>
        ${txt(120, 134, "C/ del Sol, 5, 2º B", { size: 13, color: "var(--ink)" })}</svg>`,
    },
    {
      html: `<h3>7. Agua, luz y calor</h3><p>Las casas tienen <mark>servicios</mark> que nos hacen la vida fácil.</p><p>Por los grifos sale <b>agua</b> limpia. Llega por tuberías debajo de la calle.</p><p>Por los cables llega la <b>electricidad</b>: da luz y hace funcionar los aparatos. La calefacción nos da <b>calor</b> en invierno.</p><p>No hay que malgastarlos.</p><p>Cerramos el grifo al lavarnos los dientes. Apagamos la luz al salir de una habitación. ¡Así ahorramos!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un grifo con agua, una bombilla encendida y un radiador">${BG}
        <g transform="translate(50 96)"><path d="M-20 -20 H 10 Q 20 -20 20 -10 V 0" stroke="var(--muted)" stroke-width="8" fill="none"/><rect x="-26" y="-28" width="12" height="16" fill="var(--muted)"/><path d="M20 6 q 4 10 0 16 q -4 -6 0 -16" fill="var(--water)"/><path d="M20 26 q 4 10 0 16 q -4 -6 0 -16" fill="var(--water)"/></g>
        <g transform="translate(130 86)"><path d="M0 -26 Q 20 -26 20 -6 Q 20 6 8 14 V 22 H -8 V 14 Q -20 6 -20 -6 Q -20 -26 0 -26 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/><rect x="-8" y="22" width="16" height="8" fill="var(--muted)"/>${[0, 45, 135, 180].map((a) => { const c = Math.cos((a * Math.PI) / 180), s = Math.sin((a * Math.PI) / 180); return `<path d="M${(c * 28).toFixed(1)} ${(-6 - s * 28).toFixed(1)} L ${(c * 36).toFixed(1)} ${(-6 - s * 36).toFixed(1)}" stroke="var(--sun)" stroke-width="3"/>`; }).join("")}</g>
        <g transform="translate(210 96)">${[0, 1, 2, 3, 4].map((i) => `<rect x="${-28 + i * 12}" y="-24" width="9" height="44" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}<path d="M-12 -34 q 4 -6 0 -12 M4 -34 q 4 -6 0 -12" stroke="var(--red)" stroke-width="2" fill="none"/></g>
        ${txt(56, 150, "agua", { size: 13, color: "var(--water)" })}${txt(130, 150, "luz", { size: 13, color: "#b8860b" })}${txt(210, 150, "calor", { size: 13, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>8. Seguros en casa</h3><p>En casa también hay <mark>peligros</mark>. Por eso tenemos cuidado.</p><p>No tocamos el horno, la vitrocerámica ni la plancha. No jugamos con enchufes ni cables. No nos subimos a las ventanas ni a los balcones.</p><p>Las medicinas y los productos de limpieza solo los usan los mayores.</p><p>Si hueles a humo o a gas, avisa enseguida a un adulto. Y nunca abras la puerta a desconocidos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres peligros tachados: una sartén caliente, un enchufe y una botella de lejía">${BG}
        <g transform="translate(50 96)"><ellipse rx="26" ry="8" fill="#6b7385"/><rect x="24" y="-3" width="26" height="6" rx="3" fill="var(--ink)"/><path d="M-10 -12 q 4 -8 0 -16 M4 -12 q 4 -8 0 -16" stroke="var(--red)" stroke-width="2.5" fill="none"/></g>
        <g transform="translate(140 90)"><rect x="-18" y="-18" width="36" height="36" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="-7" r="3.5" fill="var(--ink)"/><circle cx="7" r="3.5" fill="var(--ink)"/></g>
        <g transform="translate(214 92)"><path d="M-12 -20 H 12 V 24 H -12 Z" fill="var(--water)"/><rect x="-6" y="-30" width="12" height="10" fill="var(--red)"/><path d="M-6 0 L 6 10 M6 0 L -6 10" stroke="#fff" stroke-width="2.5"/></g>
        ${check(50, 148, false)}${check(140, 148, false)}${check(214, 148, false)}
        ${txt(130, 32, "¡No se toca!", { size: 16, color: "var(--red)", font: D, weight: 800 })}</svg>`,
      video: { id: "596cs8BydzU", titulo: "¡Ten Cuidado, Está Caliente! | Seguridad y Buenos Hábitos", canal: "JunyTony en Español", vistas: 29425076, megusta: 46686 },
    },
    {
      html: `<h3>9. ¿Para qué sirve?</h3><p>Saber tu <mark>dirección</mark> es muy útil. Si te pierdes, puedes decírsela a un policía. Así te llevarán a casa.</p><p>Conocer bien tu casa también te ayuda a <b>colaborar</b>. Sabes dónde se guarda cada cosa. Puedes ordenar tu cuarto y ayudar en la cocina.</p><p>Pide a tu familia que te enseñe tu dirección escrita. Repítela hasta que la sepas de memoria.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño perdido le dice su dirección a una policía">${BG}
        ${persona(70, 162, 90, "var(--leaf)")}${persona(180, 162, 130, "var(--pen)", "var(--ink)")}
        <rect x="160" y="38" width="40" height="10" rx="3" fill="var(--ink)"/>
        <rect x="16" y="20" width="132" height="44" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M60 64 L 66 76 L 76 64" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        ${txt(82, 38, "Vivo en calle", { size: 12 })}${txt(82, 54, "del Sol, 5", { size: 12, color: "var(--pen)" })}
        <path d="M14 164 H 246" stroke="var(--line)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>10. Juego: ¿en qué habitación?</h3><p>Escucha y di en qué <mark>habitación</mark> está cada cosa.</p><p>1. La almohada. 2. La nevera. 3. El cepillo de dientes. 4. El sofá.</p><p>Soluciones: el dormitorio, la cocina, el baño y el salón.</p><p>Ahora inventa tú una pista para tu familia.</p><p>Puedes jugar también con objetos raros: una sartén, una toalla o una lámpara. ¿Dónde está cada una?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro objetos con flechas a su habitación: almohada, nevera, cepillo y sofá">${BG}
        ${[0, 1, 2, 3].map((i) => `<rect x="${14 + i * 60}" y="36" width="54" height="76" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${txt(41 + i * 60, 30, String(i + 1), { size: 15, color: "var(--pen)", font: D, weight: 800 })}`).join("")}
        <rect x="25" y="66" width="32" height="18" rx="7" fill="#fff" stroke="var(--line)" stroke-width="2"/>
        <rect x="86" y="50" width="30" height="52" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M86 70 H 116 M110 56 V 64 M110 76 V 88" stroke="var(--ink)" stroke-width="2"/>
        <rect x="150" y="72" width="34" height="7" rx="3" fill="var(--pen)"/><rect x="176" y="66" width="10" height="7" fill="#fff" stroke="var(--line)"/>
        <g transform="translate(221 82) scale(.68) translate(-221 -82)">${sofa(221, 82)}</g>
        ${txt(130, 148, "¿Dónde va?", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>La <mark>casa</mark> es el lugar donde vivimos con nuestra familia. Nos protege y nos da descanso.</p><p>Hay pisos, casas de pueblo y chalés. Por fuera tienen tejado, paredes, puertas y ventanas.</p><p>Por dentro tienen cocina, salón, dormitorio y baño, cada uno con sus muebles.</p><p>Cada casa tiene una dirección. Y en casa tenemos cuidado y ahorramos agua y luz.</p>`, "Una casa por dentro con cocina, salón, dormitorio y baño", `<path d="M30 70 L130 20 L230 70 Z" fill="var(--red)"/><rect x="40" y="70" width="180" height="96" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M130 70 V166 M40 118 H220" stroke="var(--ink)" stroke-width="2"/>${L3.t(85, 99, "cocina", "var(--red)", 13)}${L3.t(175, 99, "dormitorio", "var(--pen)", 13)}${L3.t(85, 147, "salón", "var(--leaf)", 13)}${L3.t(175, 147, "baño", "var(--water)", 13)}`),
  ],
  figura: {
    titulo: "Las habitaciones de mi casa",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Casa abierta con cuatro habitaciones: dormitorio y baño arriba, cocina y salón abajo">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <path d="M140 110 L 320 20 L 500 110 Z" fill="var(--red)"/>
      <rect x="150" y="110" width="340" height="170" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><path d="M320 110 V 280 M150 195 H 490" stroke="var(--ink)" stroke-width="3"/>
      ${cama(235, 176)}${banera(405, 176)}${cocina(235, 262)}${sofa(405, 262)}
      ${txt(235, 132, "dormitorio", { size: 15, color: "var(--pen)" })}${txt(405, 132, "baño", { size: 15, color: "var(--water)" })}${txt(235, 216, "cocina", { size: 15, color: "var(--inf)" })}${txt(405, 216, "salón", { size: 15, color: "var(--red)" })}
      ${txt(80, 160, "dormir", { size: 14 })}${txt(80, 240, "cocinar", { size: 14 })}${txt(560, 160, "lavarse", { size: 14 })}${txt(560, 240, "descansar", { size: 14 })}
    </svg>`,
  },
  video: { id: "wBZXyMjdjf8", titulo: "Aprende las habitaciones de la casa | Vocabulario para niños", canal: "Smile and Learn - Español", vistas: 2156202, megusta: 0, busqueda: "la casa para niños partes de la casa" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Dónde guardamos la leche para que no se estropee?",
      pasos: ["La leche necesita estar fría.", "En casa, lo que enfría la comida es la nevera.", "La nevera está en la cocina."],
      resultado: "la guardamos en la nevera, en la cocina." },
    { enunciado: "Lucía vive en un edificio alto con ascensor. ¿Qué tipo de vivienda es?",
      pasos: ["El edificio tiene muchas viviendas.", "Cada vivienda está en una planta.", "Esas viviendas se llaman pisos."],
      resultado: "Lucía vive en un piso." },
    { enunciado: "Di tu dirección completa.",
      pasos: ["Primero, el nombre de la calle.", "Después, el número del portal.", "Si es un piso, la planta y la letra."],
      resultado: "por ejemplo: calle del Sol, 5, segundo B." },
    { enunciado: "¿En qué habitación lavamos los platos?", pasos: ["Los platos se ensucian al comer.", "Para lavarlos hace falta agua y un fregadero.", "El fregadero está en la cocina."], resultado: "los platos se lavan en la cocina." },
  ],
  errores: [
    "Pensar que todas las personas viven en casas iguales: hay pisos, casas, chalés y más.",
    "Confundir la cocina con el comedor: en la cocina se prepara la comida.",
    "No saberse la dirección: es importante aprenderla de memoria.",
    "Tocar enchufes, el horno o los productos de limpieza: son peligrosos.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Vives en un piso o en una casa?", sol: "Respuesta libre." },
    { nivel: "básico", q: "Di las habitaciones de tu casa.", sol: "Por ejemplo: cocina, salón, dormitorio y baño." },
    { nivel: "básico", q: "¿Qué hacemos en el baño?", sol: "Nos lavamos, nos duchamos y vamos al váter." },
    { nivel: "básico", q: "Dibuja tu habitación con sus muebles.", sol: "Respuesta libre." },
    { nivel: "básico", q: "¿En qué habitación está el horno?", sol: "En la cocina." },
    { nivel: "básico", q: "Di tu dirección.", sol: "Respuesta libre: calle, número, planta y letra." },
    { nivel: "básico", q: "¿Por dónde entra la luz en casa?", sol: "Por las ventanas." },
    { nivel: "medio", q: "¿Por qué no tocamos los enchufes?", sol: "Porque la electricidad es peligrosa." },
    { nivel: "medio", q: "Di una forma de ahorrar agua en casa.", sol: "Cerrar el grifo al lavarse los dientes." },
    { nivel: "medio", q: "Ordena tu cuarto y di dónde guardas cada cosa.", sol: "Respuesta libre." },
    L3.b("¿Dónde está la nevera?", "En la cocina."),
    L3.m("Une cada mueble con su habitación: cama, sofá, ducha. Dormitorio, salón, baño.", "Cama-dormitorio; sofá-salón; ducha-baño."),
    L3.m("Di tres partes de una casa por fuera.", "Por ejemplo: tejado, paredes y ventanas."),
    L3.m("Rodea lo peligroso: enchufe, almohada, plancha caliente, cojín.", "El enchufe y la plancha caliente."),
    L3.m("Di dos formas de ahorrar luz en casa.", "Apagar la luz al salir y apagar la tele si nadie la ve."),
    L3.m("¿Qué haces si hueles a humo en casa?", "Avisar enseguida a un adulto."),
    L3.a("Dibuja el plano de tu casa visto desde arriba.", "Un dibujo con las habitaciones y el pasillo."),
    L3.a("Compara un piso y una casa de pueblo: di una diferencia.", "El piso está en un edificio con vecinos; la casa del pueblo suele tener una o dos plantas."),
    L3.a("Escribe tu dirección completa con ayuda.", "Calle, número, planta y letra si es un piso, y la localidad."),
    L3.a("Di cómo puedes ayudar en cada habitación de casa.", "Por ejemplo: poner la mesa en la cocina y hacer la cama en el dormitorio."),
    L3.a("Busca información de una casa curiosa del mundo.", "Por ejemplo: el iglú, hecho de bloques de hielo."),
    L3.a("Explica por qué nunca abrimos la puerta a desconocidos.", "Porque puede ser peligroso; siempre abre un adulto."),
  ],
  quiz: [
    { q: "La casa nos protege del…", o: ["frío y la lluvia", "cole", "parque"], a: 0, e: "Nos protege del tiempo." },
    { q: "¿Dónde dormimos?", o: ["En la cocina", "En el dormitorio", "En el baño"], a: 1, e: "En el dormitorio." },
    { q: "¿Dónde preparamos la comida?", o: ["En la cocina", "En el salón", "En el pasillo"], a: 0, e: "En la cocina." },
    { q: "Un edificio alto tiene muchos…", o: ["pisos", "tejados", "jardines"], a: 0, e: "Pisos." },
    { q: "¿Qué hay en el baño?", o: ["La nevera", "El lavabo", "La cama"], a: 1, e: "El lavabo." },
    { q: "Por las ventanas entra…", o: ["la luz", "el sofá", "el agua del grifo"], a: 0, e: "Luz y aire." },
    { q: "El tejado sirve para…", o: ["protegernos de la lluvia", "entrar", "cocinar"], a: 0, e: "Está arriba y nos protege." },
    { q: "La dirección tiene…", o: ["la calle y el número", "el nombre del perro", "la edad"], a: 0, e: "Calle y número." },
    { q: "¿Qué llega por los cables?", o: ["El agua", "La electricidad", "El gas"], a: 1, e: "La electricidad." },
    { q: "Los productos de limpieza…", o: ["los usan los mayores", "son para jugar", "se beben"], a: 0, e: "Son peligrosos." },
    L3.Q("Un iglú está hecho de…", ["hielo", "ladrillo", "papel"], 0, "Bloques de hielo."),
    L3.Q("Al lavarte los dientes…", ["cierras el grifo", "dejas el agua corriendo", "usas el horno"], 0, "Así ahorramos agua."),
  ],
  examen: [
    { q: "¿Qué une las habitaciones?", o: ["El pasillo", "El tejado", "La ventana"], a: 0, e: "El pasillo." },
    { q: "¿Dónde vemos la tele y descansamos?", o: ["En el salón", "En el baño", "En la cocina"], a: 0, e: "En el salón." },
    { q: "Por los grifos sale…", o: ["agua", "luz", "calor"], a: 0, e: "Agua limpia." },
    { q: "Si me pierdo, digo…", o: ["mi dirección", "mi color favorito", "nada"], a: 0, e: "Así me pueden llevar a casa." },
    L3.Q("¿Dónde nos lavamos?", ["En el baño", "En el salón", "En el garaje"], 0, "En el baño."),
    L3.Q("¿Quién construye las casas?", ["Los albañiles", "Los carteros", "Los pilotos"], 0, "Los albañiles."),
  ],
  feynman: ["Para qué sirve la casa", "Las habitaciones y lo que hacemos en cada una", "Cómo estar seguros en casa"],
  mapa: mapa("MI CASA", "var(--pri)", [
    ["Viviendas", "piso · casa · chalé", "var(--pen)"],
    ["Habitaciones", "cocina · salón · dormitorio · baño", "var(--inf)"],
    ["Servicios", "agua · luz · calefacción", "var(--water)"],
    ["Seguridad", "enchufes · horno · productos", "var(--red)"],
  ], 240),
  tarjetas: [
    ["¿Para qué sirve la casa?", "Para vivir y protegernos"],
    ["¿Qué es un piso?", "Una vivienda en un edificio"],
    ["¿Dónde dormimos?", "En el dormitorio"],
    ["¿Dónde cocinamos?", "En la cocina"],
    ["¿Qué hay en el baño?", "Lavabo, ducha y váter"],
    ["¿Qué tiene una dirección?", "Calle, número, planta y letra"],
    ["¿Qué llega por los cables?", "La electricidad"],
    ["¿Qué no tocamos en casa?", "Enchufes, horno y productos de limpieza"],
    ["¿Qué es un iglú?", "Una casa de hielo"],
    ["¿Cómo ahorro agua?", "Cerrando el grifo al lavarme los dientes"],
  ],
  glosario: [
    ["Vivienda", "El lugar donde vive una familia."],
    ["Piso", "Vivienda dentro de un edificio con otras viviendas."],
    ["Tejado", "La parte de arriba de la casa que la protege de la lluvia."],
    ["Habitación", "Cada parte de la casa, como la cocina."],
    ["Dormitorio", "La habitación donde dormimos."],
    ["Mueble", "Objeto grande de la casa, como la cama o la mesa."],
    ["Dirección", "La calle y el número donde está una casa."],
    ["Vecino", "Persona que vive cerca de nosotros."],
    ["Ahorrar", "Gastar solo lo necesario."],
  ],
  situacion: L3.sit("La casa de cartón", "Vamos a construir entre todos una casa con cajas de cartón, con sus habitaciones y muebles.", ["Por grupos, cada uno se encarga de una habitación: cocina, salón, dormitorio o baño.", "Hacemos los muebles con cajitas, tapones y papel.", "Juntamos las habitaciones y ponemos el tejado, la puerta y las ventanas.", "Escribimos la dirección inventada en la puerta y presentamos la casa."], "Una maqueta de casa con cuatro habitaciones amuebladas.", ["Nombra las habitaciones y sus muebles.", "Explica para qué sirve cada habitación.", "Trabaja en equipo y comparte el material."]),
  familias: [
    "Haced juntos un plano sencillo de vuestra casa con las habitaciones.",
    "Practicad la dirección completa como si fuera una canción.",
    "Repasad juntos los peligros de la cocina y del baño.",
    "Dadle una tarea de orden fija en su cuarto.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: la vivienda, tipos, dependencias y funciones; la dirección postal; los servicios básicos y la seguridad en el hogar (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Maqueta de una casa con cajas de zapatos, una por habitación.", "Clasificación de recortes de muebles por habitaciones.", "Escribir y enviar una carta a casa con la dirección completa."],
  },
  fuentes: [RD],
  revisado: "2026-11-14",
};
