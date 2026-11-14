// Ciencias Sociales 1º de Primaria. Nivel libro: lectura, apartados numerados, ejercicios por niveles, glosario y situación.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, nube, arbol, casa, coche, check, RD } = require("./_peques");
const L3 = require("./_pri1L3");

const monte = (x, y, w, h, c = "#8a9a6a", nieve = true) => `<path d="M${x - w / 2} ${y} L ${x} ${y - h} L ${x + w / 2} ${y} Z" fill="${c}"/>${nieve ? `<path d="M${x - w * 0.12} ${y - h * 0.76} L ${x} ${y - h} L ${x + w * 0.12} ${y - h * 0.76} L ${x + w * 0.04} ${y - h * 0.7} L ${x - w * 0.04} ${y - h * 0.78} Z" fill="#fff"/>` : ""}`;
const olas = (x1, x2, y, c = "var(--water)") => `<path d="M${x1} ${y} ${[...Array(Math.floor((x2 - x1) / 20))].map((_, i) => `q 5 -5 10 0 t 10 0`).join(" ")}" stroke="${c}" stroke-width="2.5" fill="none"/>`;
const gota = (x, y, s = 1, c = "var(--water)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -12 Q 10 2 0 8 Q -10 2 0 -12 Z" fill="${c}"/>`;
const molinillo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V 50" stroke="var(--ink)" stroke-width="3"/>${["var(--red)", "var(--pen)", "var(--sun)", "var(--leaf)"].map((c, i) => `<path d="M0 0 L 0 -24 L 14 -10 Z" fill="${c}" transform="rotate(${i * 90})"/>`).join("")}<circle r="3" fill="var(--ink)"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "El paisaje: el agua, el aire y el suelo",
  minutos: 50,
  objetivos: ["Saber qué es un paisaje y distinguir paisaje natural y transformado", "Reconocer paisajes de montaña, de llanura y de costa", "Conocer el agua, el aire y el suelo y por qué son importantes", "Cuidar el paisaje y no contaminar"],
  claves: ["paisaje", "montaña", "llanura", "costa", "agua", "aire", "suelo"],
  pregunta: {
    texto: "Mira por la ventana. ¿Qué ves: montañas, edificios, árboles, el mar?",
    respuesta: "Todo lo que ves al mirar a lo lejos es un <mark>paisaje</mark>. En él hay agua, aire, suelo, plantas, animales y, a veces, cosas hechas por las personas.",
  },
  lectura: L3.lect("La excursión al río", `<p>La clase de 1.º sale de excursión al río. Desde el autobús ven montañas, campos y un pueblo pequeño.</p><p>Al llegar, Alba mete la mano en el agua. «¡Está fría y muy limpia!»</p><p>Rubén mira el cielo. Las nubes se mueven deprisa. «Hace viento», dice, y su gorra sale volando.</p><p>Todos se ríen y corren a buscarla.</p><p>Junto a la orilla, Nerea encuentra una lata tirada. «¿Quién ha ensuciado el río?», pregunta triste.</p><p>La maestra le da una bolsa. Entre todos recogen la basura que encuentran.</p><p>¿Qué hay en un paisaje? ¿Cómo lo cuidamos? En este tema lo vas a aprender.</p>`),
  bloques: [
    {
      html: `<h3>1. ¿Qué es un paisaje?</h3><p>Mira un lugar a lo lejos. Todo lo que ves es un <mark>paisaje</mark>.</p><p>En un paisaje puede haber montañas, ríos, árboles y cielo. También puede haber casas, carreteras y puentes.</p><p>Todos los paisajes tienen <b>agua</b>, <b>aire</b> y <b>suelo</b>. ¿Cómo es el paisaje de tu localidad?</p><p>Un mismo paisaje cambia con las estaciones. En invierno puede estar blanco de nieve y en primavera, lleno de flores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un paisaje con montañas, un río, árboles, un pueblo y el sol">${BG}
        <rect x="14" y="14" width="232" height="100" rx="8" fill="var(--water)" fill-opacity=".14"/>
        ${sol(212, 40, 13)}${nube(70, 40, 0.8)}
        ${monte(70, 114, 120, 80)}${monte(150, 114, 110, 64, "#a3b07a")}
        <rect x="14" y="114" width="232" height="52" fill="var(--leaf)" fill-opacity=".4"/>
        <path d="M110 166 Q 120 140 150 130 T 246 120" stroke="var(--water)" stroke-width="10" fill="none"/>
        ${arbol(40, 150, 0.6)}${arbol(64, 156, 0.5)}${casa(206, 156, 0.6)}</svg>`,
    },
    {
      html: `<h3>2. Natural o transformado</h3><p>Algunos paisajes están casi como los hizo la naturaleza. Son <mark>paisajes naturales</mark>: un bosque, una playa sin casas, una montaña.</p><p>Otros paisajes los han cambiado las personas. Son <mark>paisajes transformados</mark>. Tienen casas, carreteras, campos de cultivo o fábricas. Las ciudades son paisajes transformados.</p><p>Las personas cambian el paisaje para vivir: hacen casas, caminos y huertos. Debemos hacerlo con cuidado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="A la izquierda un bosque natural; a la derecha una ciudad con carretera">${BG}
        <rect x="14" y="20" width="112" height="128" rx="10" fill="var(--leaf)" fill-opacity=".14"/><rect x="134" y="20" width="112" height="128" rx="10" fill="var(--muted)" fill-opacity=".14"/>
        ${monte(70, 110, 90, 60)}${arbol(34, 140, 0.6)}${arbol(60, 140, 0.7)}${arbol(92, 140, 0.6)}
        ${[[150, 60], [174, 80], [200, 50], [226, 70]].map(([x, h]) => `<rect x="${x - 10}" y="${120 - h}" width="20" height="${h}" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}
        <rect x="134" y="122" width="112" height="20" fill="#6b7385"/><path d="M140 132 H 240" stroke="#fff" stroke-width="2" stroke-dasharray="8 6"/>
        ${txt(70, 166, "natural", { size: 13, color: "var(--leaf)" })}${txt(190, 166, "transformado", { size: 13, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>3. Montaña, llanura y costa</h3><p>En la <mark>montaña</mark> el suelo sube y baja mucho. Hace frío y en invierno puede nevar.</p><p>En la <mark>llanura</mark> el suelo es casi plano. Hay muchos campos de cultivo.</p><p>En la <mark>costa</mark> la tierra se junta con el mar. Hay playas de arena y acantilados.</p><p>Hay paisajes muy secos, como el desierto, donde casi no llueve. ¡Allí viven pocas plantas y animales!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres dibujos: montaña con nieve, llanura con campos y costa con mar y playa">${BG}
        ${[0, 1, 2].map((i) => `<rect x="${14 + i * 80}" y="30" width="72" height="104" rx="8" fill="var(--water)" fill-opacity=".1" stroke="var(--line)" stroke-width="2"/>`).join("")}
        ${monte(50, 134, 64, 84)}
        <rect x="94" y="100" width="72" height="34" fill="var(--sun)" fill-opacity=".5"/><path d="M94 112 H 166 M94 124 H 166" stroke="#c99a10" stroke-width="2"/>${sol(150, 60, 9)}
        <rect x="174" y="104" width="72" height="30" fill="var(--water)" fill-opacity=".6"/><path d="M174 104 Q 200 96 214 104 L 246 134 H 214 Z" fill="#e3c37a"/>${olas(178, 218, 116, "#fff")}
        ${txt(50, 154, "montaña", { size: 12 })}${txt(130, 154, "llanura", { size: 12 })}${txt(210, 154, "costa", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>4. El agua</h3><p>En los paisajes hay mucha <mark>agua</mark>. Está en los ríos, los lagos, los mares y la lluvia.</p><p>El agua de los ríos y los lagos es <b>dulce</b>. El agua del mar es <b>salada</b>.</p><p>Todos los seres vivos necesitan agua. Sin agua no hay vida.</p><p>El agua que bebemos viene de ríos y embalses. Se limpia antes de llegar a nuestros grifos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un río que baja de la montaña hasta el mar">${BG}
        ${monte(50, 110, 80, 80)}
        <path d="M54 70 Q 60 100 90 110 T 160 140 L 246 150" stroke="var(--water)" stroke-width="9" fill="none" stroke-linecap="round"/>
        <rect x="190" y="130" width="56" height="36" fill="var(--water)" fill-opacity=".7"/>${olas(194, 244, 146, "#fff")}
        ${txt(104, 160, "río: dulce", { size: 12, color: "var(--pen)" })}${txt(218, 122, "mar: salada", { size: 12, color: "var(--pen)" })}
        ${gota(200, 46, 1.4)}${gota(222, 60, 1)}${nube(210, 30, 0.8)}</svg>`,
      video: { id: "QU4PFZ8J8mQ", titulo: "El Agua de la Tierra", canal: "Aula chachi", vistas: 354423, megusta: 0 },
    },
    {
      html: `<h3>5. El agua cambia</h3><p>El agua puede estar de <mark>tres formas</mark>.</p><p>Si hace mucho frío, se congela y es <b>hielo</b>, como la nieve. Normalmente es <b>líquida</b>, como la del grifo. Si se calienta mucho, es <b>vapor</b>, como el de la olla.</p><p>Con el sol, el agua sube y forma nubes. Después vuelve a caer como lluvia.</p><p>El agua siempre se mueve: del mar a las nubes, de las nubes a la lluvia y de la lluvia al río. Es el ciclo del agua.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cubito de hielo, un vaso de agua y una olla con vapor">${BG}
        <rect x="26" y="74" width="46" height="46" rx="6" fill="#d6ecff" stroke="var(--water)" stroke-width="2.5"/><path d="M34 84 L 44 82" stroke="#fff" stroke-width="3"/>
        <path d="M110 70 H 150 L 146 124 H 114 Z" fill="var(--water)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/><path d="M112 88 H 148" stroke="var(--water)" stroke-width="2"/>
        <g transform="translate(212 110)"><rect x="-28" y="-22" width="56" height="34" rx="5" fill="#6b7385"/><rect x="-34" y="-26" width="68" height="6" rx="3" fill="var(--ink)"/><path d="M-12 -32 q 6 -10 0 -20 q -6 -10 0 -20 M8 -32 q 6 -10 0 -20 q -6 -10 0 -20" stroke="var(--line)" stroke-width="3" fill="none"/></g>
        ${txt(49, 146, "hielo", { size: 13, color: "var(--water)" })}${txt(130, 146, "líquida", { size: 13, color: "var(--pen)" })}${txt(212, 146, "vapor", { size: 13, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>6. El aire</h3><p>El <mark>aire</mark> está en todas partes, pero no lo vemos. No tiene color ni olor.</p><p>Notamos el aire cuando hace <b>viento</b>. El viento mueve las hojas, las nubes y las cometas.</p><p>Los seres vivos necesitan aire para <b>respirar</b>. Por eso es importante que esté limpio.</p><p>Las plantas limpian el aire. Por eso los árboles de los parques son tan importantes para la ciudad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El viento mueve una cometa, las hojas de un árbol y la ropa tendida">${BG}
        <g stroke="var(--muted)" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M20 60 q 20 -10 40 0 t 40 0"/><path d="M30 90 q 16 -8 32 0 t 32 0"/></g>
        <path d="M190 30 L 214 54 L 190 78 L 166 54 Z" fill="var(--red)"/><path d="M190 78 Q 170 120 120 150" stroke="var(--ink)" stroke-width="1.5" fill="none"/><path d="M190 78 q -4 10 4 16 q -8 6 0 14" stroke="var(--sun)" stroke-width="3" fill="none"/>
        <g transform="translate(60 150)"><rect x="-4" y="-30" width="8" height="30" fill="#8a5a2b"/><ellipse cx="6" cy="-44" rx="26" ry="18" fill="var(--leaf)"/></g>
        <g fill="var(--leaf)"><ellipse cx="104" cy="120" rx="5" ry="3"/><ellipse cx="120" cy="108" rx="5" ry="3"/></g>
        ${txt(130, 172, "¡Sopla el viento!", { size: 13, color: "var(--pen)" })}</svg>`,
      video: { id: "m0ppScatiyA", titulo: "Necesitamos Aire Limpio | Contaminación Ambiental", canal: "JunyTony en Español", vistas: 473698, megusta: 1562 },
    },
    {
      html: `<h3>7. El suelo</h3><p>El <mark>suelo</mark> es la tierra que pisamos. Está formado por tierra, arena, piedras y rocas.</p><p>En el suelo crecen las <b>plantas</b>. Sus raíces toman el agua de la tierra.</p><p>Muchos animales viven bajo el suelo: lombrices, hormigas y topos. Hacen túneles y galerías. ¡Debemos cuidar el suelo!</p><p>Hay suelos de distintos colores: marrón, rojizo o casi negro. ¡Busca tierra en el parque y mírala con una lupa!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte del suelo con una planta arriba, raíces, una lombriz, hormigas y piedras">${BG}
        <rect x="14" y="60" width="232" height="106" rx="6" fill="#c98a4a" fill-opacity=".45"/><rect x="14" y="120" width="232" height="46" fill="#a8702e" fill-opacity=".45"/>
        <path d="M14 60 H 246" stroke="var(--leaf)" stroke-width="5"/>
        <g transform="translate(34 60)"><path d="M0 0 V -34" stroke="var(--leaf)" stroke-width="3"/><ellipse cx="-10" cy="-26" rx="10" ry="5" fill="var(--leaf)"/><ellipse cx="10" cy="-34" rx="10" ry="5" fill="var(--leaf)"/><path d="M0 0 V 28 M0 10 L -14 26 M0 10 L 14 28" stroke="#6b3f1f" stroke-width="2.5" fill="none"/></g>
        <path d="M140 100 q 10 -10 20 0 t 20 0" stroke="#e08a8a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <g fill="var(--ink)">${[[200, 140], [214, 146], [226, 138]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="4" ry="2.5"/>`).join("")}</g>
        <g fill="#9aa3b5">${[[40, 146, 8], [100, 150, 10], [160, 144, 7]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join("")}</g>
        ${txt(150, 36, "tierra · piedras · seres vivos", { size: 12, color: "#8a5a2b" })}</svg>`,
    },
    {
      html: `<h3>8. Cuidamos el paisaje</h3><p>A veces las personas <mark>ensuciamos</mark> el paisaje. Es la <b>contaminación</b>.</p><p>El humo de los coches y las fábricas ensucia el aire. La basura ensucia el suelo y el agua.</p><p>Podemos ayudar. Usamos menos el coche. No tiramos basura al campo ni al mar. Reciclamos.</p><p>En algunos lugares se protege la naturaleza. Son los parques naturales. Allí no se puede construir ni ensuciar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="A la izquierda un río sucio con basura y humo; a la derecha un río limpio con peces">${BG}
        <rect x="14" y="20" width="112" height="140" rx="10" fill="var(--muted)" fill-opacity=".18"/><rect x="134" y="20" width="112" height="140" rx="10" fill="var(--leaf)" fill-opacity=".12"/>
        <rect x="30" y="50" width="30" height="40" fill="#6b7385"/><g fill="var(--muted)"><circle cx="50" cy="40" r="9"/><circle cx="62" cy="30" r="11"/></g>
        <rect x="14" y="110" width="112" height="30" fill="#7a8a6a"/><rect x="40" y="114" width="12" height="16" fill="var(--red)" transform="rotate(20 46 122)"/><circle cx="90" cy="124" r="6" fill="var(--sun)"/>
        <rect x="134" y="110" width="112" height="30" fill="var(--water)" fill-opacity=".6"/><g transform="translate(190 126)"><ellipse rx="12" ry="6" fill="var(--inf)"/><path d="M10 0 L 18 -6 V 6 Z" fill="var(--inf)"/></g>${sol(220, 50, 11)}${arbol(162, 104, 0.5)}
        ${check(70, 152, false)}${check(190, 152)}</svg>`,
    },
    {
      html: `<h3>9. ¿Para qué sirve?</h3><p>Conocer el agua, el aire y el suelo nos ayuda a <mark>cuidarlos</mark>. Son de todos y los necesitamos para vivir.</p><p>En casa podemos ahorrar agua. Cerramos el grifo al lavarnos los dientes. Nos duchamos en vez de bañarnos.</p><p>Así ayudamos a nuestro planeta.</p><p>También podemos plantar árboles, ir en bici y apagar las luces que no usamos. ¡Cada gesto cuenta!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño cierra el grifo mientras se cepilla los dientes">${BG}
        ${persona(80, 166, 130, "var(--pen)")}<rect x="96" y="58" width="30" height="5" rx="2" fill="var(--red)"/>
        <rect x="140" y="110" width="100" height="16" rx="6" fill="var(--line)"/><path d="M190 110 V 86 H 172 V 94" stroke="var(--muted)" stroke-width="6" fill="none"/>
        <circle cx="198" cy="86" r="7" fill="var(--pen)"/>
        ${check(222, 60)}
        ${txt(190, 150, "¡Cierro el grifo!", { size: 13, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>10. Experimento: el aire existe</h3><p>No vemos el aire, pero podemos <mark>comprobar</mark> que está ahí.</p><p>1. Infla un globo. ¿Qué hay dentro? ¡Aire!</p><p>2. Sopla un molinillo de papel. El aire lo hace girar.</p><p>3. Mete un vaso boca abajo en agua. El agua no entra porque dentro hay aire.</p><p>Apunta lo que pasa en cada prueba con un dibujo. ¿Ya sabes explicar por qué?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un globo inflado, un molinillo girando y un vaso boca abajo en agua">${BG}
        <ellipse cx="50" cy="70" rx="26" ry="32" fill="var(--red)"/><path d="M50 102 l -4 6 h 8 Z M50 108 q -6 20 4 40" fill="var(--red)" stroke="var(--muted)" stroke-width="1.5"/>
        ${molinillo(130, 70, 1.2)}<g stroke="var(--muted)" stroke-width="2" fill="none"><path d="M90 60 q 8 -4 16 0 M90 72 q 8 -4 16 0"/></g>
        <rect x="180" y="90" width="66" height="60" rx="4" fill="var(--water)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/>
        <path d="M198 76 H 228 L 226 124 H 200 Z" fill="var(--card)" fill-opacity=".6" stroke="var(--ink)" stroke-width="2" transform="rotate(180 213 100)"/>
        ${txt(50, 168, "globo", { size: 12 })}${txt(130, 168, "molinillo", { size: 12 })}${txt(213, 168, "vaso", { size: 12 })}</svg>`,
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Un <mark>paisaje</mark> es todo lo que vemos en un lugar. Puede ser natural o transformado.</p><p>Hay paisajes de montaña, de llanura y de costa.</p><p>Todos los paisajes tienen <b>agua</b>, <b>aire</b> y <b>suelo</b>. El agua puede ser hielo, líquida o vapor.</p><p>Los necesitamos para vivir. Por eso no contaminamos y cuidamos la naturaleza.</p>`, "Un paisaje con montaña, río, árbol, sol y nubes", `<path d="M10 120 L70 50 L120 110 L170 60 L250 120 Z" fill="var(--leaf)" opacity=".7"/><path d="M60 62 L70 50 L80 62 Z" fill="var(--card)"/><path d="M10 150 q60 -20 120 0 t120 0 V170 H10 Z" fill="var(--water)" opacity=".8"/>${L3.sol(220, 34)}${L3.nube(110, 34, 0.8)}${L3.arbol(40, 140, 0.8)}${L3.t(130, 136, "agua · aire · suelo", "var(--pen)", 14)}`),
  ],
  figura: {
    titulo: "Agua, aire y suelo en el paisaje",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Paisaje con montaña, río y mar; el aire en el cielo, el agua en el río y el suelo con plantas">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <rect x="16" y="16" width="608" height="150" rx="12" fill="var(--water)" fill-opacity=".14"/>
      ${sol(560, 60, 22)}${nube(160, 60, 1.4)}${nube(380, 50, 1.1)}
      ${monte(170, 200, 260, 150)}${monte(330, 200, 200, 110, "#a3b07a")}
      <rect x="16" y="200" width="608" height="84" rx="0" fill="#c98a4a" fill-opacity=".45"/>
      <path d="M200 200 Q 260 230 360 236 T 624 240" stroke="var(--water)" stroke-width="16" fill="none"/>
      ${arbol(470, 216, 0.9)}${arbol(510, 220, 0.7)}
      ${[["AIRE", 300, 100, "var(--muted)"], ["AGUA", 420, 270, "var(--pen)"], ["SUELO", 100, 260, "#8a5a2b"]].map(([t, x, y, c]) => `<rect x="${x - 50}" y="${y - 22}" width="100" height="34" rx="10" fill="var(--card)" stroke="${c}" stroke-width="3"/>${txt(x, y + 2, t, { size: 16, color: c, font: D, weight: 800 })}`).join("")}
    </svg>`,
  },
  video: { id: "icttaUwZAcU", titulo: "Los paisajes de montaña y de llanura. El relieve", canal: "Happy Learning Español", vistas: 1388764, megusta: 0, busqueda: "el paisaje para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Un paisaje tiene una playa, un paseo con tiendas y un puerto. ¿Es natural o transformado?",
      pasos: ["La playa y el mar son naturales.", "El paseo, las tiendas y el puerto los han hecho las personas.", "Si las personas lo han cambiado, es transformado."],
      resultado: "es un paisaje de costa transformado." },
    { enunciado: "¿Qué le pasa al agua si la metemos en el congelador?",
      pasos: ["El congelador está muy frío.", "Con mucho frío, el agua se congela.", "El agua congelada es hielo."],
      resultado: "se convierte en hielo." },
    { enunciado: "¿Cómo sabemos que hay viento si el aire no se ve?",
      pasos: ["Miramos los árboles: sus hojas se mueven.", "Notamos el aire en la cara.", "Una cometa sube y vuela."],
      resultado: "lo notamos por lo que mueve y en nuestra piel." },
    { enunciado: "¿Por qué se seca un charco cuando sale el sol?", pasos: ["El sol calienta el agua del charco.", "El agua caliente se convierte en vapor.", "El vapor sube al cielo y ayuda a formar nubes."], resultado: "el charco se seca porque el agua se convierte en vapor." },
  ],
  errores: [
    "Pensar que el aire no existe porque no se ve: está en todas partes.",
    "Creer que toda el agua es igual: la del mar es salada y la de los ríos, dulce.",
    "Pensar que un paisaje es solo naturaleza: las ciudades también son paisajes.",
    "Tirar basura al campo o al mar: contamina el suelo y el agua.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Describe el paisaje que ves desde tu ventana.", sol: "Respuesta libre." },
    { nivel: "básico", q: "¿Tu localidad tiene montaña, llanura o costa?", sol: "Respuesta libre." },
    { nivel: "medio", q: "Di un paisaje natural y otro transformado.", sol: "Por ejemplo: un bosque y una ciudad." },
    { nivel: "básico", q: "¿El agua del mar es dulce o salada?", sol: "Salada." },
    { nivel: "básico", q: "Di las tres formas del agua.", sol: "Hielo, líquida y vapor." },
    { nivel: "básico", q: "¿Cómo notamos el aire?", sol: "Con el viento: mueve las hojas y lo notamos en la cara." },
    { nivel: "básico", q: "Di dos animales que viven bajo el suelo.", sol: "Por ejemplo: la lombriz y la hormiga." },
    { nivel: "medio", q: "Infla un globo y suelta el aire en tu mano. ¿Qué notas?", sol: "Notas el aire que sale." },
    { nivel: "básico", q: "Dibuja un paisaje de montaña.", sol: "Respuesta libre: montañas, quizá nieve, árboles y un río." },
    { nivel: "medio", q: "Di dos formas de cuidar el agua.", sol: "Cerrar el grifo y no tirar basura al río." },
    L3.b("Rodea lo que hay en un paisaje natural: bosque, fábrica, río, autopista.", "Bosque y río."),
    L3.b("¿El agua de la lluvia es dulce o salada?", "Dulce."),
    L3.m("Une: hielo, agua del grifo, vapor. Líquida, sólida, gas.", "Hielo-sólida; agua del grifo-líquida; vapor-gas."),
    L3.m("Di una diferencia entre la montaña y la costa.", "La montaña tiene el suelo alto; la costa está junto al mar."),
    L3.m("¿Qué hace el viento en una cometa?", "La mueve y la hace volar."),
    L3.m("Mete hielo en un vaso al sol. ¿Qué pasa?", "Se derrite y se convierte en agua líquida."),
    L3.a("Explica con dibujos el ciclo del agua.", "Mar, vapor que sube, nube, lluvia y río que vuelve al mar."),
    L3.a("¿Por qué los árboles son importantes en las ciudades?", "Porque limpian el aire, dan sombra y son casa de pájaros."),
    L3.a("Observa tierra con una lupa. Di qué encuentras.", "Por ejemplo: arena, piedrecitas, restos de hojas o un bichito."),
    L3.a("Di tres cosas que contaminan y cómo evitarlas.", "Humo de coches (ir andando), basura en el campo (recogerla), agua sucia (no tirar aceite)."),
    L3.a("Compara el paisaje de tu localidad con el de una playa.", "Respuesta personal: diferencias de suelo, agua y construcciones."),
    L3.a("Inventa un cartel para cuidar un río.", "Por ejemplo: «No tires basura. El río es de todos»."),
  ],
  quiz: [
    { q: "Un paisaje es…", o: ["lo que vemos al mirar un lugar", "una casa", "un animal"], a: 0, e: "Todo lo que vemos a lo lejos." },
    { q: "Un bosque sin casas es un paisaje…", o: ["natural", "transformado", "de ciudad"], a: 0, e: "Natural." },
    { q: "Una ciudad es un paisaje…", o: ["natural", "transformado", "de hielo"], a: 1, e: "Lo han cambiado las personas." },
    { q: "En la montaña el suelo…", o: ["sube y baja", "es plano", "es de agua"], a: 0, e: "Hay grandes subidas y bajadas." },
    { q: "En la costa hay…", o: ["mar y playa", "solo nieve", "desierto"], a: 0, e: "Mar y playa." },
    { q: "El agua del río es…", o: ["dulce", "salada", "de colores"], a: 0, e: "Dulce." },
    { q: "El agua congelada es…", o: ["vapor", "hielo", "aire"], a: 1, e: "Hielo." },
    { q: "El aire en movimiento es…", o: ["el viento", "la lluvia", "el suelo"], a: 0, e: "El viento." },
    { q: "Las lombrices viven…", o: ["en el aire", "bajo el suelo", "en el mar"], a: 1, e: "Bajo tierra." },
    { q: "El humo de los coches…", o: ["limpia el aire", "ensucia el aire", "riega las plantas"], a: 1, e: "Contamina el aire." },
    L3.Q("Un parque natural es un lugar…", ["donde se protege la naturaleza", "lleno de fábricas", "sin plantas"], 0, "Allí no se construye."),
    L3.Q("El ciclo del agua va…", ["del mar a las nubes y a la lluvia", "solo del grifo a la bañera", "de la nieve al fuego"], 0, "El agua siempre se mueve."),
  ],
  examen: [
    { q: "¿Qué tienen todos los paisajes?", o: ["Agua, aire y suelo", "Casas", "Fábricas"], a: 0, e: "Agua, aire y suelo." },
    { q: "La llanura es…", o: ["casi plana", "muy alta", "de agua"], a: 0, e: "Casi plana, con campos." },
    { q: "El agua caliente se convierte en…", o: ["vapor", "hielo", "piedra"], a: 0, e: "En vapor." },
    { q: "Para cuidar el agua…", o: ["cierro el grifo", "tiro basura al río", "dejo el grifo abierto"], a: 0, e: "Cerramos el grifo." },
    L3.Q("El agua del mar es…", ["salada", "dulce", "dulce y caliente"], 0, "Es salada."),
    L3.Q("El suelo está formado por…", ["tierra, arena y piedras", "nubes", "humo"], 0, "Es la tierra que pisamos."),
  ],
  feynman: ["Qué es un paisaje y sus tipos", "Las formas del agua", "Cómo cuidar el agua, el aire y el suelo"],
  mapa: mapa("EL PAISAJE", "var(--pri)", [
    ["Tipos", "natural · transformado", "var(--leaf)"],
    ["Relieve", "montaña · llanura · costa", "#8a5a2b"],
    ["Agua y aire", "dulce · salada · viento", "var(--water)"],
    ["Cuidarlo", "no contaminar · reciclar", "var(--red)"],
  ], 220),
  tarjetas: [
    ["¿Qué es un paisaje?", "Todo lo que vemos al mirar un lugar"],
    ["¿Qué es un paisaje transformado?", "Uno que han cambiado las personas"],
    ["¿Cómo es la llanura?", "Casi plana"],
    ["¿Dónde se juntan la tierra y el mar?", "En la costa"],
    ["¿El agua del mar es dulce?", "No, es salada"],
    ["¿Cuáles son las formas del agua?", "Hielo, líquida y vapor"],
    ["¿Qué es el viento?", "Aire que se mueve"],
    ["¿Qué es la contaminación?", "Ensuciar el agua, el aire o el suelo"],
    ["¿Qué es un parque natural?", "Un lugar donde se protege la naturaleza"],
    ["¿Qué es el ciclo del agua?", "El camino del agua: mar, nube, lluvia y río"],
  ],
  glosario: [
    ["Paisaje", "Todo lo que vemos en un lugar."],
    ["Paisaje natural", "Paisaje casi sin cambios de las personas."],
    ["Paisaje transformado", "Paisaje cambiado por las personas."],
    ["Montaña", "Lugar donde el suelo es muy alto."],
    ["Llanura", "Lugar donde el suelo es casi plano."],
    ["Costa", "Lugar donde la tierra se junta con el mar."],
    ["Vapor", "El agua cuando se calienta y sube como gas."],
    ["Viento", "El aire que se mueve."],
    ["Contaminación", "Suciedad que estropea el agua, el aire o el suelo."],
  ],
  situacion: L3.sit("Guardianes del paisaje", "Vamos a ser guardianes del paisaje del colegio y a hacer una campaña para cuidarlo.", ["Salimos al patio y miramos: ¿qué agua, aire y suelo hay?", "Buscamos cosas que ensucian el paisaje y las recogemos con guantes.", "Hacemos carteles con consejos para cuidar el agua, el aire y el suelo.", "Colgamos los carteles por el colegio y se los explicamos a otra clase."], "Una campaña con carteles para cuidar el paisaje.", ["Distingue agua, aire y suelo en el paisaje.", "Propone formas de no contaminar.", "Participa en la recogida con cuidado."]),
  familias: [
    "En una excursión, describid juntos el paisaje: ¿hay montaña, río, casas?",
    "Haced cubitos de hielo y dejadlos derretir para ver cómo cambia el agua.",
    "Fabricad un molinillo de papel y probadlo con el viento.",
    "Revisad juntos cómo ahorrar agua en casa.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: el paisaje natural y transformado; elementos del medio físico (agua, aire, suelo, relieve); cuidado del entorno y desarrollo sostenible (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Observación del paisaje desde la ventana del aula con una ficha de dibujo.", "Experimentos con el aire (globo, molinillo, vaso en agua) y los estados del agua.", "Maqueta de montaña, llanura y costa con plastilina."],
  },
  fuentes: [RD],
  revisado: "2026-11-14",
};
