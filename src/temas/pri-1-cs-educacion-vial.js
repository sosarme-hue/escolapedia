// Ciencias Sociales 1º de Primaria. Nivel libro: lectura, apartados numerados, ejercicios por niveles, glosario y situación.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, arbol, casa, coche, check, RD } = require("./_peques");
const L3 = require("./_pri1L3");

const semaforo = (x, y, luz = "rojo", s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-3" y="0" width="6" height="40" fill="var(--muted)"/><rect x="-14" y="-62" width="28" height="62" rx="6" fill="var(--ink)"/><circle cy="-46" r="9" fill="var(--red)" fill-opacity="${luz === "rojo" ? 1 : 0.25}"/><circle cy="-18" r="9" fill="var(--leaf)" fill-opacity="${luz === "verde" ? 1 : 0.25}"/></g>`;
const semaforoCoches = (x, y, luz = "rojo") => `<g transform="translate(${x} ${y})"><rect x="-3" y="0" width="6" height="40" fill="var(--muted)"/><rect x="-13" y="-80" width="26" height="80" rx="6" fill="var(--ink)"/><circle cy="-66" r="8" fill="var(--red)" fill-opacity="${luz === "rojo" ? 1 : 0.25}"/><circle cy="-40" r="8" fill="var(--sun)" fill-opacity="${luz === "ambar" ? 1 : 0.25}"/><circle cy="-14" r="8" fill="var(--leaf)" fill-opacity="${luz === "verde" ? 1 : 0.25}"/></g>`;
const cebra = (x, y, w, h, n = 6) => [...Array(n)].map((_, i) => `<rect x="${x + i * (w / n) + 2}" y="${y}" width="${w / n - 6}" height="${h}" fill="#fff"/>`).join("");
const calle = (y = 100, h = 50) => `<rect x="0" y="${y}" width="260" height="${h}" fill="#5b6270"/><rect x="0" y="${y - 14}" width="260" height="14" fill="#cfd3da"/><rect x="0" y="${y + h}" width="260" height="${180 - y - h}" fill="#cfd3da"/>`;
const casco = (x, y, c = "var(--red)") => `<path d="M${x - 12} ${y} Q ${x - 12} ${y - 16} ${x} ${y - 16} Q ${x + 12} ${y - 16} ${x + 12} ${y} Z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "Educación vial",
  minutos: 50,
  objetivos: ["Distinguir la acera y la calzada", "Saber cruzar la calle por el paso de peatones y con el semáforo", "Reconocer algunas señales de tráfico", "Ir seguros en coche, en bici y en patinete"],
  claves: ["peatón", "acera", "calzada", "semáforo", "paso de peatones", "señal", "cinturón", "casco"],
  pregunta: {
    texto: "¿Cómo cruzas la calle para ir al cole?",
    respuesta: "Por el <mark>paso de peatones</mark>, de la mano de un adulto. Si hay semáforo, esperamos el <b>muñeco verde</b>. Y antes de cruzar, <b>miramos</b> a los dos lados.",
  },
  lectura: L3.lect("Camino del cole", `<p>Cada mañana, Álex va andando al cole con su madre. Hoy está lloviendo y llevan paraguas.</p><p>Llegan a un paso de peatones. Álex quiere cruzar corriendo para no mojarse.</p><p>«¡Espera!», dice su madre. «El muñeco está en rojo.»</p><p>Un coche pasa muy deprisa y salpica agua. Álex da un paso atrás. ¡Menos mal que se ha parado!</p><p>Por fin el muñeco se pone verde. Álex mira a la izquierda, a la derecha y otra vez a la izquierda.</p><p>Cruzan de la mano, sin correr. «Ahora sí», dice Álex.</p><p>¿Cómo se cruza la calle sin peligro? En este tema lo vamos a aprender.</p>`),
  bloques: [
    {
      html: `<h3>1. La calle</h3><p>La calle tiene dos partes.</p><p>La <mark>acera</mark> es para las personas que van andando. Son los <b>peatones</b>.</p><p>La <mark>calzada</mark> es para los coches, las motos y los autobuses.</p><p>Los peatones vamos siempre por la acera. Y por la parte de dentro, lejos del bordillo.</p><p>Entre la acera y la calzada está el bordillo. Es un escalón pequeño. Allí nos paramos siempre antes de cruzar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una calle con la acera para los peatones y la calzada para los coches">${BG}
        ${calle(90, 56)}<path d="M0 118 H 260" stroke="#fff" stroke-width="3" stroke-dasharray="16 12"/>
        ${coche(170, 128, "var(--red)", 0.8)}
        ${persona(60, 86, 52, "var(--pen)")}${persona(90, 86, 40, "var(--sun)")}
        ${txt(200, 72, "acera", { size: 13, color: "var(--pen)" })}${txt(60, 136, "calzada", { size: 13, color: "#fff" })}${txt(130, 170, "acera", { size: 13, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>2. Peatones y conductores</h3><p>Todos usamos la calle. Por eso todos tenemos <mark>normas</mark>.</p><p>El <b>peatón</b> va andando. Camina por la acera y cruza por el paso de peatones.</p><p>El <b>conductor</b> lleva el coche, la moto o el autobús. Respeta las señales y para en los pasos de peatones.</p><p>Si todos cumplimos las normas, nadie se hace daño.</p><p>Los ciclistas también son conductores. Llevan la bici por el carril bici y respetan las señales.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un peatón en la acera y un conductor dentro de su coche">${BG}
        <rect x="14" y="20" width="112" height="140" rx="10" fill="var(--pen)" fill-opacity=".1"/><rect x="134" y="20" width="112" height="140" rx="10" fill="var(--red)" fill-opacity=".1"/>
        ${persona(70, 140, 90, "var(--leaf)")}
        <g transform="translate(190 128)"><path d="M-46 0 V -22 Q -44 -30 -34 -32 L -22 -52 H 22 L 34 -32 Q 44 -30 46 -22 V 0 Z" fill="var(--red)"/><path d="M-18 -48 H 18 L 26 -32 H -26 Z" fill="var(--water)" fill-opacity=".5"/><circle cy="-38" r="7" fill="#f4c7a1"/><circle cx="-26" cy="2" r="10" fill="var(--ink)"/><circle cx="26" cy="2" r="10" fill="var(--ink)"/></g>
        ${txt(70, 40, "peatón", { size: 13, color: "var(--pen)" })}${txt(190, 40, "conductor", { size: 13, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>3. El paso de peatones</h3><p>El <mark>paso de peatones</mark> tiene rayas blancas en el suelo. Se parece a una cebra.</p><p>Es el sitio para <b>cruzar</b> la calle.</p><p>Nunca cruzamos entre coches aparcados. Tampoco por la mitad de la calle.</p><p>Los coches tienen que parar para dejarnos pasar. Pero nosotros esperamos a que paren del todo.</p><p>Los días de lluvia, los coches tardan más en frenar. Por eso tenemos todavía más cuidado al cruzar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un paso de peatones con rayas blancas; un niño espera en la acera">${BG}
        ${calle(60, 80)}${cebra(80, 62, 100, 76)}
        ${coche(36, 108, "var(--sun)", 0.7)}
        ${persona(130, 172, 38, "var(--pen)")}${check(210, 40)}
        ${txt(130, 36, "paso de peatones", { size: 13, color: "var(--pen)" })}</svg>`,
      video: { id: "M4LRrv53btU", titulo: "🚦 Canción para cruzar la calle 🚸⚠️ Soy Solcito - ¡Peatones con cuidado!", canal: "Soy Solcito", vistas: 877492, megusta: 0 },
    },
    {
      html: `<h3>4. El semáforo</h3><p>El <mark>semáforo</mark> nos dice cuándo pasar. Los peatones tenemos un semáforo con un muñeco.</p><p>Muñeco <b>rojo</b>: nos paramos y esperamos en la acera.</p><p>Muñeco <b>verde</b>: podemos cruzar, sin correr.</p><p>Si el muñeco verde parpadea, no empezamos a cruzar. Esperamos al siguiente verde. ¡Tenemos tiempo!</p><p>Los coches también tienen su semáforo, con tres luces: roja, amarilla y verde. ¡Fíjate cuando vayas por la calle!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos semáforos de peatones: uno en rojo con un muñeco quieto y otro en verde con un muñeco andando">${BG}
        ${[["rojo", "var(--red)", "¡quieto!"], ["verde", "var(--leaf)", "¡cruza!"]].map(([l, c, t], i) => {
          const x = 70 + i * 120;
          return `<rect x="${x - 26}" y="26" width="52" height="110" rx="10" fill="var(--ink)"/><rect x="${x - 18}" y="34" width="36" height="44" rx="6" fill="${i === 0 ? c : "#333"}" fill-opacity="${i === 0 ? 1 : 0.6}"/><rect x="${x - 18}" y="84" width="36" height="44" rx="6" fill="${i === 1 ? c : "#333"}" fill-opacity="${i === 1 ? 1 : 0.6}"/>
          ${i === 0 ? `<g transform="translate(${x} 56)" fill="#fff"><circle cy="-13" r="4"/><rect x="-4" y="-8" width="8" height="12" rx="2"/><rect x="-4" y="4" width="3" height="10"/><rect x="1" y="4" width="3" height="10"/></g>` : `<g transform="translate(${x} 106)" stroke="#fff" stroke-width="3.5" stroke-linecap="round" fill="#fff"><circle cy="-13" r="4" stroke="none"/><path d="M0 -8 V 3 M0 3 L -6 13 M0 3 L 6 12 M0 -6 L -6 0 M0 -6 L 6 -2" fill="none"/></g>`}
          ${txt(x, 160, t, { size: 14, color: c, font: D, weight: 800 })}`;
        }).join("")}</svg>`,
      video: { id: "_52-5xBl79I", titulo: "El semáforo para niños  Semáforo de vehículos y de peatones  Video de Peques Aprenden Jugando", canal: "Peques Aprenden Jugando", vistas: 275217, megusta: 0 },
    },
    {
      html: `<h3>5. Antes de cruzar</h3><p>Aunque el muñeco esté en verde, <mark>miramos</mark> siempre.</p><p>Nos paramos en el bordillo. Miramos a la <b>izquierda</b>. Miramos a la <b>derecha</b>. Y otra vez a la izquierda.</p><p>Si no viene ningún coche, cruzamos andando y en línea recta.</p><p>Los niños pequeños cruzamos siempre de la <b>mano</b> de un adulto.</p><p>Nunca cruzamos mirando el móvil o jugando con la pelota. Para cruzar, toda la atención está en la calle.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño de la mano de un adulto mira a un lado y a otro antes de cruzar">${BG}
        ${calle(120, 60)}${cebra(70, 122, 120, 58)}
        ${persona(110, 114, 90, "var(--leaf)")}${persona(146, 114, 56, "var(--pen)")}<path d="M120 80 Q 130 86 138 82" stroke="#f4c7a1" stroke-width="4" fill="none"/>
        ${[1, 2, 3].map((n, i) => { const izq = i !== 1; const x = izq ? 46 : 214; return `<circle cx="${x}" cy="${40 + i * 26}" r="12" fill="var(--sun)" fill-opacity=".3" stroke="var(--sun)" stroke-width="2"/>${txt(x, 45 + i * 26, String(n), { size: 13, color: "var(--ink)", font: D, weight: 800 })}<path d="M${izq ? x + 16 : x - 16} ${40 + i * 26} H ${izq ? x + 40 : x - 40}" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/>`; }).join("")}</svg>`,
    },
    {
      html: `<h3>6. Las señales de tráfico</h3><p>En la calle hay <mark>señales</mark>. Nos dan avisos con dibujos y colores.</p><p>La señal de <b>STOP</b> es roja con ocho lados. Dice que hay que pararse.</p><p>El triángulo con niños avisa de que hay un <b>colegio</b> cerca.</p><p>La señal azul con un muñeco indica un <b>paso de peatones</b>.</p><p>Las señales tienen formas distintas. Las redondas mandan, las triangulares avisan de un peligro y las cuadradas informan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres señales: stop, peligro niños y paso de peatones">${BG}
        <g transform="translate(46 80)"><path d="M-14 -34 H 14 L 34 -14 V 14 L 14 34 H -14 L -34 14 V -14 Z" fill="var(--red)" stroke="#fff" stroke-width="3"/>${txt(0, 6, "STOP", { size: 15, color: "#fff", font: D, weight: 800 })}</g>
        <g transform="translate(130 80)"><path d="M0 -36 L 36 30 H -36 Z" fill="#fff" stroke="var(--red)" stroke-width="6" stroke-linejoin="round"/><g fill="var(--ink)"><circle cx="-6" cy="-6" r="4"/><rect x="-9" y="-1" width="6" height="16"/><circle cx="8" cy="0" r="3.5"/><rect x="5" y="4" width="6" height="12"/></g></g>
        <g transform="translate(214 80)"><rect x="-34" y="-34" width="68" height="68" rx="4" fill="var(--pen)"/><path d="M0 -26 L 28 26 H -28 Z" fill="#fff"/><g fill="var(--ink)"><circle cy="-6" r="4"/><rect x="-3" y="-2" width="6" height="12"/><path d="M-12 22 H 12" stroke="var(--ink)" stroke-width="2"/></g></g>
        ${txt(46, 140, "stop", { size: 12 })}${txt(130, 140, "colegio", { size: 12 })}${txt(214, 140, "paso", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>7. En el coche</h3><p>En el coche, los niños vamos siempre <mark>detrás</mark>.</p><p>Vamos sentados en nuestra <b>sillita</b> o en el alzador. Y con el <b>cinturón</b> bien abrochado, aunque el viaje sea corto.</p><p>No sacamos la cabeza ni las manos por la ventanilla.</p><p>Bajamos del coche por la puerta de la acera.</p><p>En el autobús del cole también llevamos el cinturón. Y no nos levantamos hasta que se para del todo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño sentado en su sillita en el asiento de atrás con el cinturón puesto">${BG}
        <path d="M20 140 V 90 Q 24 70 50 66 L 84 30 H 196 L 232 66 Q 246 70 246 90 V 140 Z" fill="var(--water)" fill-opacity=".2" stroke="var(--ink)" stroke-width="3"/>
        <path d="M150 140 V 70 Q 150 54 166 54 H 178 Q 192 54 192 70 V 140" fill="var(--pen)" fill-opacity=".85"/>
        <circle cx="172" cy="78" r="13" fill="#f4c7a1"/><circle cx="167" cy="76" r="1.8" fill="var(--ink)"/><circle cx="177" cy="76" r="1.8" fill="var(--ink)"/><path d="M167 83 Q 172 87 177 83" stroke="var(--ink)" stroke-width="1.5" fill="none"/>
        <rect x="160" y="92" width="24" height="30" rx="6" fill="var(--sun)"/><path d="M186 92 L 158 124" stroke="var(--red)" stroke-width="5"/>
        <path d="M60 140 V 82 H 100 V 140" fill="var(--muted)" fill-opacity=".5"/>
        <circle cx="60" cy="144" r="14" fill="var(--ink)"/><circle cx="206" cy="144" r="14" fill="var(--ink)"/>
        ${txt(80, 172, "delante", { size: 12, color: "var(--muted)" })}${txt(172, 172, "detrás", { size: 12, color: "var(--pen)" })}${check(218, 24)}</svg>`,
    },
    {
      html: `<h3>8. En bici y en patinete</h3><p>Para ir en <mark>bici</mark> o en <mark>patinete</mark>, primero nos ponemos el <b>casco</b>. Protege la cabeza si nos caemos.</p><p>Vamos por el carril bici o por el parque. Nunca por la calzada sin un adulto.</p><p>Por la noche llevamos luces y ropa de colores claros. Así los coches nos ven.</p><p>Antes de salir, miramos que la bici tenga el timbre y los frenos bien. ¡Una bici sana es una bici segura!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño con casco montado en bici por el carril bici">${BG}
        <rect x="0" y="140" width="260" height="40" fill="var(--leaf)" fill-opacity=".35"/><path d="M0 160 H 260" stroke="#fff" stroke-width="3" stroke-dasharray="14 10"/>
        <g transform="translate(130 140)"><circle cx="-36" cy="-14" r="18" fill="none" stroke="var(--ink)" stroke-width="4"/><circle cx="36" cy="-14" r="18" fill="none" stroke="var(--ink)" stroke-width="4"/><path d="M-36 -14 L -10 -44 H 22 L 36 -14 M-10 -44 L 2 -14 L 22 -44 M22 -44 L 18 -58 H 30" stroke="var(--red)" stroke-width="4" fill="none" stroke-linejoin="round"/><path d="M-14 -46 H -4" stroke="var(--ink)" stroke-width="5"/>
        <circle cx="4" cy="-96" r="11" fill="#f4c7a1"/><circle cx="8" cy="-98" r="1.6" fill="var(--ink)"/><path d="M-4 -86 L 2 -60 M2 -60 L -8 -46 M-2 -76 L 26 -58" stroke="var(--pen)" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M-8 -46 L 2 -14" stroke="var(--pen)" stroke-width="4" stroke-linecap="round"/></g>
        ${casco(134, 40, "var(--sun)")}
        ${txt(196, 40, "¡casco!", { size: 14, color: "var(--red)", font: D, weight: 800 })}${txt(52, 174, "carril bici", { size: 11, color: "var(--ink)" })}</svg>`,
    },
    {
      html: `<h3>9. ¿Para qué sirve?</h3><p>La educación vial sirve para <mark>no tener accidentes</mark>.</p><p>Si cruzamos bien y llevamos el cinturón, vamos seguros.</p><p>También nos ayuda a ir al cole <b>andando</b> con la familia. Andar es sano y no contamina.</p><p>Y cuando seamos mayores, seremos buenos conductores. ¡Las normas son para todos!</p><p>Los policías y los agentes de tráfico nos ayudan. A veces dirigen el tráfico con un silbato y gestos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una familia va andando al colegio por la acera">${BG}
        ${calle(146, 20)}
        ${casa(214, 132, 1.1, "var(--red)")}${txt(214, 50, "cole", { size: 12, color: "var(--red)" })}
        ${persona(50, 130, 88, "var(--leaf)")}${persona(84, 130, 56, "var(--pen)")}${persona(116, 130, 50, "var(--sun)")}
        ${arbol(160, 130, 0.7)}${check(26, 30)}</svg>`,
    },
    {
      html: `<h3>10. Juego: ¡semáforo!</h3><p>Un niño hace de <mark>semáforo</mark> con dos cartulinas: una roja y una verde.</p><p>Con la <b>verde</b>, todos andan por la clase. Con la <b>roja</b>, todos se paran como estatuas.</p><p>¡Quien se mueva en rojo pierde una vida!</p><p>Después, cambiad. Al final, practicad juntos cómo se cruza: parar, mirar y cruzar.</p><p>Podéis añadir la luz amarilla: con ella, todos andan muy despacio, como a cámara lenta. ¡Es muy divertido!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño levanta una cartulina roja y los demás se quedan quietos como estatuas">${BG}
        ${persona(50, 160, 80, "var(--pen)")}<rect x="64" y="104" width="34" height="26" rx="3" fill="var(--red)" stroke="var(--ink)" stroke-width="1.5"/>
        ${persona(140, 160, 60, "var(--sun)")}${persona(180, 160, 60, "var(--leaf)")}${persona(220, 160, 60, "var(--inf)")}
        ${txt(180, 56, "¡quietos!", { size: 16, color: "var(--red)", font: D, weight: 800 })}</svg>`,
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Los <mark>peatones</mark> vamos por la acera y los coches por la calzada.</p><p>Cruzamos por el paso de peatones. Con el muñeco rojo nos paramos. Con el verde cruzamos sin correr.</p><p>Antes de cruzar, miramos a la izquierda, a la derecha y a la izquierda otra vez.</p><p>En el coche, cinturón y sillita. En la bici, casco. ¡Así vamos seguros!</p>`, "Un paso de peatones con un semáforo de muñeco verde", `<rect x="10" y="100" width="240" height="60" fill="var(--line)" opacity=".5"/>${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${30 + i * 36}" y="106" width="22" height="48" fill="var(--card)"/>`).join("")}<rect x="200" y="20" width="36" height="66" rx="8" fill="var(--ink)"/><circle cx="218" cy="38" r="10" fill="var(--red)" opacity=".3"/><circle cx="218" cy="66" r="10" fill="var(--leaf)"/>${L3.nino(110, 102, { c: "var(--pen)", pose: "corre", s: 0.85 })}${L3.t(90, 22, "¡Miro y cruzo!", "var(--pen)", 15)}`),
  ],
  figura: {
    titulo: "Cruzo seguro en tres pasos",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Tres pasos para cruzar: paro en el bordillo, miro a los dos lados y cruzo por el paso de peatones">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["1. PARO", "en el bordillo", "var(--red)"], ["2. MIRO", "izquierda y derecha", "var(--sun)"], ["3. CRUZO", "por el paso, andando", "var(--leaf)"]].map(([t, d, c], i) => {
        const x = 115 + i * 205;
        return `<rect x="${x - 95}" y="40" width="190" height="220" rx="16" fill="var(--card)" stroke="${c}" stroke-width="4"/>${txt(x, 210, t, { size: 26, color: c, font: D, weight: 800 })}${txt(x, 238, d, { size: 15 })}`;
      }).join("")}
      ${semaforo(115, 130, "rojo", 1.1)}
      <circle cx="320" cy="110" r="34" fill="none" stroke="var(--ink)" stroke-width="4"/><circle cx="308" cy="108" r="6" fill="var(--ink)"/><circle cx="332" cy="108" r="6" fill="var(--ink)"/><path d="M272 110 H 252 M368 110 H 388" stroke="var(--sun)" stroke-width="4"/><path d="M258 102 L 250 110 L 258 118 M382 102 L 390 110 L 382 118" stroke="var(--sun)" stroke-width="4" fill="none"/>
      <rect x="455" y="70" width="140" height="100" fill="#5b6270"/>${cebra(460, 72, 130, 96, 5)}
    </svg>`,
  },
  video: { id: "XyHdFT1OQr4", titulo: "LA SEGURIDAD VIAL | Vídeos Educativos para Niños", canal: "Happy Learning Español", vistas: 978679, megusta: 4715, busqueda: "educación vial para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Llegas al semáforo y el muñeco está en rojo. ¿Qué haces?",
      pasos: ["El rojo significa parar.", "Esperamos en la acera, sin bajar al bordillo.", "Cuando se pone verde, miramos y cruzamos."],
      resultado: "esperar en la acera hasta el verde." },
    { enunciado: "Quieres cruzar y no hay semáforo. ¿Cómo lo haces?",
      pasos: ["Buscamos un paso de peatones.", "Nos paramos y miramos a los dos lados.", "Cruzamos cuando los coches estén parados."],
      resultado: "por el paso de peatones, mirando antes." },
    { enunciado: "Vas a montar en bici al parque. ¿Qué te pones primero?",
      pasos: ["Pensamos qué parte del cuerpo hay que proteger.", "La cabeza es la más importante.", "La protege el casco."],
      resultado: "el casco." },
    { enunciado: "El muñeco verde empieza a parpadear cuando llegas. ¿Qué haces?", pasos: ["El verde que parpadea avisa de que se va a poner rojo.", "No da tiempo a cruzar tranquilo.", "Te quedas en la acera y esperas al siguiente verde."], resultado: "esperas al siguiente verde sin cruzar." },
  ],
  errores: [
    "Cruzar corriendo o detrás de una pelota sin mirar.",
    "Cruzar entre coches aparcados: los conductores no nos ven.",
    "Pensar que con el muñeco verde no hace falta mirar.",
    "Quitarse el cinturón porque el viaje es corto.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Por dónde van los peatones?", sol: "Por la acera." },
    { nivel: "básico", q: "¿Por dónde van los coches?", sol: "Por la calzada." },
    { nivel: "básico", q: "¿Por dónde cruzamos la calle?", sol: "Por el paso de peatones." },
    { nivel: "básico", q: "¿Qué significa el muñeco rojo?", sol: "Que hay que pararse y esperar." },
    { nivel: "básico", q: "¿Qué significa el muñeco verde?", sol: "Que podemos cruzar, andando y mirando." },
    { nivel: "básico", q: "Di los tres pasos para cruzar.", sol: "Paro, miro y cruzo." },
    { nivel: "básico", q: "¿De qué color es la señal de STOP?", sol: "Roja." },
    { nivel: "medio", q: "¿Qué llevamos siempre en el coche?", sol: "El cinturón abrochado, en la sillita o el alzador." },
    { nivel: "básico", q: "¿Qué nos ponemos para ir en bici?", sol: "El casco." },
    { nivel: "medio", q: "Dibuja tu camino al cole y marca dónde cruzas.", sol: "Respuesta libre." },
    L3.b("¿Qué es el bordillo?", "El escalón entre la acera y la calzada."),
    L3.m("Une: muñeco rojo, muñeco verde, verde parpadeando. Cruzo, me paro, espero al siguiente.", "Rojo-me paro; verde-cruzo; parpadeando-espero al siguiente."),
    L3.m("Rodea lo correcto en el coche: ir delante, cinturón, sacar la mano, sillita.", "Cinturón y sillita."),
    L3.m("¿Qué forma tienen las señales que avisan de un peligro?", "Forma de triángulo."),
    L3.m("Di qué revisas en la bici antes de salir.", "El timbre, los frenos y el casco."),
    L3.m("¿Por qué no se cruza mirando el móvil?", "Porque no vemos los coches y podemos tener un accidente."),
    L3.a("Dibuja la calle con acera, calzada, bordillo y paso de peatones.", "Dibujo con las cuatro partes bien colocadas."),
    L3.a("Explica a tu familia los tres pasos para cruzar.", "Parar en el bordillo, mirar izquierda-derecha-izquierda y cruzar andando."),
    L3.a("¿Por qué hay que tener más cuidado cuando llueve?", "Porque los coches tardan más en frenar y se ve peor."),
    L3.a("Haz una señal de tráfico con cartulina y di qué significa.", "Por ejemplo: un triángulo con niños, «cuidado, colegio cerca»."),
    L3.a("Busca en tu camino al cole tres señales de tráfico.", "Respuesta personal: por ejemplo, STOP, paso de peatones y colegio."),
    L3.a("Inventa una norma para ir seguro en patinete.", "Por ejemplo: llevar casco y no ir por la calzada."),
  ],
  quiz: [
    { q: "Los peatones van por…", o: ["la acera", "la calzada", "el carril bici"], a: 0, e: "Por la acera." },
    { q: "Cruzamos por…", o: ["el paso de peatones", "entre coches", "donde queramos"], a: 0, e: "Por el paso de peatones." },
    { q: "El muñeco rojo dice…", o: ["corre", "para", "salta"], a: 1, e: "Para." },
    { q: "El muñeco verde dice…", o: ["puedes cruzar", "vuelve a casa", "corre"], a: 0, e: "Puedes cruzar." },
    { q: "Antes de cruzar…", o: ["cerramos los ojos", "miramos a los lados", "corremos"], a: 1, e: "Miramos a los dos lados." },
    { q: "Los niños pequeños cruzan…", o: ["solos", "de la mano de un adulto", "con el balón"], a: 1, e: "De la mano de un adulto." },
    { q: "En el coche los niños van…", o: ["delante", "detrás con cinturón", "de pie"], a: 1, e: "Detrás y con cinturón." },
    { q: "En bici nos ponemos…", o: ["el casco", "un gorro de lana", "gafas de sol"], a: 0, e: "El casco." },
    { q: "La señal de STOP es…", o: ["azul", "roja", "verde"], a: 1, e: "Roja." },
    { q: "La calzada es para…", o: ["los coches", "jugar", "los peatones"], a: 0, e: "Para los coches." },
    L3.Q("Las señales triangulares…", ["avisan de un peligro", "son de chocolate", "no sirven"], 0, "Avisan de algo."),
    L3.Q("Para cruzar, la atención está…", ["en la calle", "en el móvil", "en la pelota"], 0, "Miramos bien los coches."),
  ],
  examen: [
    { q: "¿Qué es un peatón?", o: ["Una persona que va andando", "Un coche", "Una señal"], a: 0, e: "Una persona que va andando." },
    { q: "Si el muñeco verde parpadea…", o: ["empiezo a cruzar corriendo", "espero al siguiente verde", "me siento"], a: 1, e: "Espero al siguiente verde." },
    { q: "Del coche bajamos por…", o: ["la puerta de la acera", "la puerta de la calzada", "la ventanilla"], a: 0, e: "Por la puerta de la acera." },
    { q: "Los tres pasos para cruzar son…", o: ["paro, miro y cruzo", "corro, salto y grito", "miro, corro y paro"], a: 0, e: "Paro, miro y cruzo." },
    L3.Q("¿Dónde cruzamos la calle?", ["Por el paso de peatones", "Entre coches aparcados", "Por la mitad de la calle"], 0, "Es el sitio seguro."),
    L3.Q("En la bici nos ponemos…", ["el casco", "la bufanda", "las gafas de sol"], 0, "Protege la cabeza."),
  ],
  feynman: ["La acera y la calzada", "Cómo se cruza la calle", "Cómo vamos seguros en coche y en bici"],
  mapa: mapa("EDUCACIÓN VIAL", "var(--pri)", [
    ["La calle", "acera · calzada", "var(--muted)"],
    ["Cruzar", "paso de peatones · semáforo", "var(--leaf)"],
    ["Señales", "stop · colegio · paso", "var(--red)"],
    ["Ir seguros", "cinturón · sillita · casco", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["¿Qué es la acera?", "La parte de la calle para los peatones"],
    ["¿Qué es la calzada?", "La parte de la calle para los coches"],
    ["¿Dónde cruzamos?", "Por el paso de peatones"],
    ["¿Qué hacemos con el muñeco rojo?", "Pararnos y esperar"],
    ["¿Qué hacemos con el muñeco verde?", "Mirar y cruzar andando"],
    ["¿Cuáles son los tres pasos?", "Paro, miro y cruzo"],
    ["¿Qué llevamos en el coche?", "La sillita y el cinturón"],
    ["¿Qué llevamos en la bici?", "El casco"],
    ["¿Qué es el bordillo?", "El escalón entre la acera y la calzada"],
    ["¿Qué hacen las señales triangulares?", "Avisan de un peligro"],
  ],
  glosario: [
    ["Peatón", "Persona que va andando por la calle."],
    ["Conductor", "Persona que lleva un coche, una moto o un autobús."],
    ["Acera", "La parte de la calle para los peatones."],
    ["Calzada", "La parte de la calle para los vehículos."],
    ["Bordillo", "El escalón entre la acera y la calzada."],
    ["Paso de peatones", "Rayas blancas para cruzar la calle."],
    ["Semáforo", "Luces que dicen cuándo se puede pasar."],
    ["Señal de tráfico", "Dibujo que da un aviso en la calle."],
    ["Cinturón", "Correa del coche que nos sujeta al asiento."],
  ],
  situacion: L3.sit("La calle de la clase", "Vamos a montar una calle en el patio para practicar cómo cruzar con seguridad.", ["Pintamos con tiza una calle con acera, calzada y paso de peatones.", "Hacemos semáforos y señales con cartulinas.", "Unos niños son peatones y otros conducen coches de juguete o triciclos.", "Practicamos los tres pasos para cruzar y cambiamos de papel."], "Una calle en el patio con semáforos y señales para practicar.", ["Cruza por el paso de peatones siguiendo los tres pasos.", "Respeta el semáforo.", "Explica qué significa cada señal."]),
  familias: [
    "En el camino al cole, que os diga cuándo se puede cruzar y por qué.",
    "Dad ejemplo: cruzad siempre por el paso y con el muñeco verde.",
    "Comprobad juntos que lleva el cinturón antes de arrancar.",
    "Jugad a buscar señales de tráfico en un paseo y a decir qué significan.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: la seguridad vial, normas básicas como peatón y viajero, el semáforo, el paso de peatones y algunas señales; movilidad segura y sostenible (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Circuito de educación vial en el patio con pasos de cebra de tiza y semáforos de cartulina.", "Paseo por el entorno del colegio para localizar señales.", "Invitar a la policía local a una charla en el aula."],
  },
  fuentes: [RD],
  revisado: "2026-11-14",
};
