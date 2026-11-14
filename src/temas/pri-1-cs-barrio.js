// Ciencias Sociales 1º de Primaria. Nivel libro: lectura, apartados numerados, ejercicios por niveles, glosario y situación.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, arbol, casa, coche, check, RD } = require("./_peques");
const L3 = require("./_pri1L3");

// Tienda con toldo y letrero.
const tienda = (x, y, t, c = "var(--red)", w = 64) => `<g transform="translate(${x} ${y})"><rect x="${-w / 2}" y="-46" width="${w}" height="46" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[...Array(4)].map((_, i) => `<rect x="${-w / 2 + (i * w) / 4}" y="-58" width="${w / 4}" height="12" fill="${i % 2 ? "#fff" : c}"/>`).join("")}<rect x="-8" y="-24" width="16" height="24" fill="var(--pen)"/></g>${txt(x, y - 30, t, { size: 10, color: c })}`;
const farola = (x, y) => `<g transform="translate(${x} ${y})"><path d="M0 0 V -60 Q 0 -66 8 -66" stroke="var(--ink)" stroke-width="3" fill="none"/><path d="M4 -66 H 16 L 12 -58 H 8 Z" fill="var(--sun)"/></g>`;
const banco = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-20" y="-14" width="40" height="5" fill="#a8702e"/><rect x="-20" y="-24" width="40" height="5" fill="#a8702e"/><path d="M-16 -9 V 0 M16 -9 V 0" stroke="var(--ink)" stroke-width="3"/></g>`;
const papelera = (x, y) => `<path transform="translate(${x} ${y})" d="M-8 -22 H 8 L 6 0 H -6 Z" fill="var(--leaf)"/>`;
const bus = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-44" y="-36" width="88" height="30" rx="6" fill="var(--sun)"/>${[-34, -16, 2, 20].map((d) => `<rect x="${d}" y="-30" width="13" height="11" fill="var(--water)"/>`).join("")}<circle cx="-26" cy="-6" r="7" fill="var(--ink)"/><circle cx="26" cy="-6" r="7" fill="var(--ink)"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "Mi barrio y mi localidad",
  minutos: 50,
  objetivos: ["Conocer los lugares y servicios del barrio", "Distinguir un pueblo de una ciudad", "Saber qué hace el ayuntamiento", "Cuidar las calles y los espacios de todos"],
  claves: ["barrio", "localidad", "pueblo", "ciudad", "ayuntamiento", "servicios"],
  pregunta: {
    texto: "Si te duele la muela, ¿adónde vas? ¿Y si quieres comprar pan?",
    respuesta: "Al <mark>dentista</mark> o al centro de salud. El pan lo compras en la <mark>panadería</mark>. En el barrio hay muchos lugares y servicios que nos ayudan cada día.",
  },
  lectura: L3.lect("Un paseo con el abuelo", `<p>El sábado, Marta da un paseo por el barrio con su abuelo Luis.</p><p>Primero entran en la panadería. La panadera les da una barra de pan calentita.</p><p>Después pasan por la plaza. Hay niños jugando y un señor que lee el periódico en un banco.</p><p>«¡Hola, Luis!», saluda una vecina desde su balcón. El abuelo conoce a todo el mundo.</p><p>Junto al parque, ven el ayuntamiento con su bandera. «Aquí se cuida el pueblo», explica el abuelo.</p><p>Al volver, Marta tira el papel de su bollo en la papelera. «¡Así está limpio mi barrio!»</p><p>¿Qué hay en tu barrio? ¿Vives en un pueblo o en una ciudad? Vamos a verlo.</p>`),
  bloques: [
    {
      html: `<h3>1. Mi barrio</h3><p>El <mark>barrio</mark> es la zona donde está mi casa. Tiene calles, plazas, tiendas y parques.</p><p>Las personas que viven cerca son los <b>vecinos</b>. Nos saludamos y nos ayudamos.</p><p>Cada barrio tiene un nombre. Muchos barrios juntos forman una <b>localidad</b>. ¿Cómo se llama tu barrio?</p><p>En el barrio conocemos a mucha gente: el panadero, el quiosquero y los vecinos del portal. Los saludamos con amabilidad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una calle del barrio con casas, una tienda, un árbol y dos vecinos que se saludan">${BG}
        ${sol(226, 32, 12)}${casa(40, 128, 1.1, "var(--inf)")}${tienda(112, 128, "PAN", "var(--red)")}${arbol(170, 128, 0.8)}${casa(220, 128, 1.1)}
        <rect x="14" y="128" width="232" height="16" fill="var(--line)"/>
        ${persona(60, 174, 40, "var(--pen)")}${persona(196, 174, 40, "var(--leaf)", "#d9d9d9")}
        ${txt(128, 166, "¡Hola, vecina!", { size: 12, color: "var(--pen)" })}</svg>`,
      video: L3.V("eAi6JNYLloc", "Aquí vivo yo: canción de la ciudad", "PlayKids Español", 1014261),
    },
    {
      html: `<h3>2. Las tiendas</h3><p>En el barrio hay <mark>tiendas</mark>. Allí compramos lo que necesitamos.</p><p>En la <b>panadería</b> compramos pan. En la <b>frutería</b>, frutas y verduras. En la <b>farmacia</b>, medicinas. En el <b>supermercado</b> hay de todo.</p><p>En el <b>mercado</b> hay muchos puestos juntos. Los vendedores nos atienden con amabilidad.</p><p>Cuando compramos, pagamos con dinero. Pedimos las cosas «por favor» y decimos «gracias» al salir.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tiendas: panadería, frutería y farmacia">${BG}
        ${tienda(50, 140, "PAN", "#c98a4a", 70)}${tienda(130, 140, "FRUTA", "var(--leaf)", 70)}${tienda(210, 140, "FARMACIA", "var(--ok)", 72)}
        <g transform="translate(210 40)"><rect x="-12" y="-4" width="24" height="8" fill="var(--ok)"/><rect x="-4" y="-12" width="8" height="24" fill="var(--ok)"/></g>
        <path d="M14 142 H 246" stroke="var(--line)" stroke-width="3"/>
        ${txt(50, 162, "panadería", { size: 12 })}${txt(130, 162, "frutería", { size: 12 })}${txt(210, 162, "farmacia", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>3. Servicios para todos</h3><p>En la localidad hay <mark>servicios</mark> que nos cuidan a todos.</p><p>En el <b>centro de salud</b> y el hospital nos curan. Los <b>bomberos</b> apagan fuegos. La <b>policía</b> nos protege.</p><p>También hay colegios, bibliotecas, polideportivos y parques. Son de todos y los cuidamos entre todos.</p><p>Muchos servicios se pagan entre todos. Por eso los usamos bien y no rompemos nada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un hospital con una cruz, un camión de bomberos y un coche de policía">${BG}
        <g transform="translate(56 120)"><rect x="-38" y="-70" width="76" height="70" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="-10" y="-62" width="20" height="6" fill="var(--red)"/><rect x="-3" y="-69" width="6" height="20" fill="var(--red)"/>${[-26, -8, 10].map((d) => `<rect x="${d}" y="-40" width="14" height="12" fill="var(--water)"/>`).join("")}<rect x="-8" y="-20" width="16" height="20" fill="var(--pen)"/></g>
        <g transform="translate(160 126)"><rect x="-34" y="-30" width="68" height="24" rx="4" fill="var(--red)"/><rect x="18" y="-40" width="16" height="12" fill="var(--red)"/><path d="M-30 -36 L 14 -36" stroke="var(--muted)" stroke-width="3"/><circle cx="-20" cy="-6" r="7" fill="var(--ink)"/><circle cx="20" cy="-6" r="7" fill="var(--ink)"/></g>
        ${coche(224, 126, "var(--pen)", 0.8)}<rect x="218" y="92" width="10" height="5" fill="var(--water)"/>
        <path d="M14 128 H 246" stroke="var(--line)" stroke-width="3"/>
        ${txt(56, 150, "hospital", { size: 12 })}${txt(160, 150, "bomberos", { size: 12 })}${txt(226, 150, "policía", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>4. Pueblo o ciudad</h3><p>La <mark>localidad</mark> es el lugar donde vivimos. Puede ser un pueblo o una ciudad.</p><p>Un <b>pueblo</b> es pequeño. Tiene pocas casas y pocas personas. Suele estar rodeado de campo. Todos se conocen.</p><p>Una <b>ciudad</b> es grande. Tiene edificios altos, mucho tráfico y muchísimas personas.</p><p>En el pueblo hay más naturaleza. En la ciudad hay más tiendas y transportes. ¡Los dos tienen cosas buenas!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="A la izquierda, un pueblo con pocas casas y campo; a la derecha, una ciudad con edificios altos">${BG}
        <rect x="14" y="30" width="112" height="120" rx="10" fill="var(--leaf)" fill-opacity=".14"/><rect x="134" y="30" width="112" height="120" rx="10" fill="var(--muted)" fill-opacity=".14"/>
        ${casa(46, 130, 0.8, "var(--inf)")}${casa(96, 130, 0.8)}<g transform="translate(70 104)"><rect x="-6" y="-24" width="12" height="24" fill="var(--card)" stroke="var(--ink)"/><path d="M-8 -24 L 0 -36 L 8 -24 Z" fill="var(--red)"/></g>${arbol(26, 130, 0.5)}
        ${[[150, 70, 22], [176, 50, 24], [204, 80, 20], [228, 60, 18]].map(([x, h, w]) => `<rect x="${x - w / 2}" y="${130 - h}" width="${w}" height="${h}" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/>${[...Array(Math.floor(h / 16))].map((_, f) => `<rect x="${x - w / 2 + 4}" y="${136 - h + f * 16}" width="${w - 8}" height="6" fill="var(--water)"/>`).join("")}`).join("")}
        <path d="M14 130 H 246" stroke="var(--ink)" stroke-width="2"/>
        ${txt(70, 166, "pueblo", { size: 13, color: "var(--leaf)" })}${txt(190, 166, "ciudad", { size: 13, color: "var(--muted)" })}</svg>`,
      video: { id: "5qrSoengs44", titulo: "Localidad - Ciudad y Pueblo", canal: "Aula chachi", vistas: 341121, megusta: 0 },
    },
    {
      html: `<h3>5. Las calles</h3><p>Por las <mark>calles</mark> pasan las personas y los vehículos.</p><p>Las personas vamos por la <b>acera</b>. Los coches van por la <b>calzada</b>. Cruzamos por el <b>paso de peatones</b>.</p><p>En la calle hay farolas, bancos, papeleras y señales. Es el <b>mobiliario urbano</b>. Es de todos.</p><p>Las calles tienen nombre. Lo vemos en una placa en la pared de la esquina. ¿Cómo se llama tu calle?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una calle con acera, calzada, paso de peatones, farola, banco y papelera">${BG}
        <rect x="14" y="96" width="232" height="18" fill="var(--line)"/><rect x="14" y="114" width="232" height="44" fill="#6b7385"/>
        ${[0, 1, 2, 3, 4].map((i) => `<rect x="${150}" y="${117 + i * 8}" width="36" height="5" fill="#fff"/>`).join("")}
        ${farola(40, 98)}${banco(84, 98)}${papelera(120, 98)}${coche(70, 152, "var(--red)", 0.8)}
        ${persona(222, 100, 60, "var(--leaf)")}
        ${txt(140, 92, "acera", { size: 11, color: "var(--muted)", anchor: "start" })}${txt(230, 174, "calzada", { size: 11, color: "var(--muted)", anchor: "end" })}${txt(168, 174, "paso", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>6. El ayuntamiento</h3><p>Cada localidad tiene un <mark>ayuntamiento</mark>. Allí trabajan el <b>alcalde</b> o la alcaldesa y los concejales.</p><p>Las vecinas y los vecinos los eligen votando.</p><p>El ayuntamiento cuida la localidad. Limpia las calles y arregla los parques. Pone farolas y organiza las fiestas. Es la casa de todos.</p><p>En el ayuntamiento también se apuntan los niños que nacen. Allí está escrito tu nombre.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El edificio del ayuntamiento con una bandera y un reloj">${BG}
        <g transform="translate(130 150)"><rect x="-80" y="-70" width="160" height="70" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-90 -70 H 90 L 0 -100 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/><circle cy="-80" r="9" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>${[-60, -36, 36, 60].map((d) => `<rect x="${d - 4}" y="-62" width="8" height="62" fill="var(--line)"/>`).join("")}<rect x="-14" y="-34" width="28" height="34" fill="var(--pen)"/><path d="M0 -100 V -130" stroke="var(--ink)" stroke-width="2"/><rect x="0" y="-130" width="24" height="14" fill="var(--red)"/></g>
        ${txt(130, 172, "AYUNTAMIENTO", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>7. Moverse por la localidad</h3><p>Para ir de un sitio a otro usamos <mark>medios de transporte</mark>.</p><p>Podemos ir <b>andando</b> o en <b>bici</b>. También en coche, en autobús o, en las ciudades grandes, en metro.</p><p>El autobús y el metro son <b>transporte público</b>. Los usan muchas personas a la vez y contaminan menos.</p><p>Ir andando o en bici al cole es sano y no contamina. Siempre con un adulto y con cuidado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un autobús en la parada, una bici y una persona andando">${BG}
        <rect x="14" y="128" width="232" height="30" fill="#6b7385"/>
        ${bus(80, 156, 1.2)}
        <g transform="translate(140 104)"><rect x="-3" y="-60" width="6" height="84" fill="var(--ink)"/><rect x="-14" y="-74" width="28" height="18" rx="3" fill="var(--pen)"/></g>${txt(140, 20, "parada", { size: 11, color: "var(--pen)" })}
        <g transform="translate(200 124)"><circle cx="-14" r="10" fill="none" stroke="var(--ink)" stroke-width="3"/><circle cx="14" r="10" fill="none" stroke="var(--ink)" stroke-width="3"/><path d="M-14 0 L -4 -14 H 10 L 14 0 M-4 -14 L 0 0 L 10 -14" stroke="var(--red)" stroke-width="2.5" fill="none"/></g>
        ${persona(236, 126, 50, "var(--sun)")}</svg>`,
    },
    {
      html: `<h3>8. Cuidamos la localidad</h3><p>Las calles, las plazas y los parques son de <mark>todos</mark>. Por eso los cuidamos.</p><p>Tiramos los papeles a la <b>papelera</b>. Recogemos lo que ensucia nuestro perro. No pintamos las paredes ni rompemos los bancos.</p><p>Respetamos a los vecinos: no hacemos ruido por la noche.</p><p>Las fiestas del barrio nos unen. Hay música, juegos y comida para todos los vecinos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una niña tira un papel a la papelera en el parque">${BG}
        ${arbol(40, 148, 1.2)}${arbol(220, 148, 1)}
        ${persona(110, 150, 100, "var(--red)", "#6b3f1f")}
        <g transform="translate(160 150)"><path d="M-14 -40 H 14 L 10 0 H -10 Z" fill="var(--leaf)"/></g>
        <rect x="138" y="84" width="12" height="10" fill="var(--card)" stroke="var(--ink)" transform="rotate(20 144 89)"/>
        <path d="M130 96 Q 146 76 158 104" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="3 3" fill="none"/>
        <path d="M14 150 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${check(200, 40)}</svg>`,
    },
    {
      html: `<h3>9. ¿Para qué sirve?</h3><p>Conocer tu barrio te ayuda a <mark>moverte y pedir ayuda</mark>.</p><p>Sabrás dónde está la farmacia, el centro de salud o la comisaría. Sabrás qué autobús te lleva al cole.</p><p>Si hay una emergencia, sabrás que se llama al <b>112</b>. Allí te mandan a médicos, bomberos o policía.</p><p>Aprende los lugares cercanos a tu casa. Así, si te pierdes, puedes decir dónde vives.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un teléfono con el número 112 para emergencias">${BG}
        <g transform="translate(90 96)"><rect x="-32" y="-60" width="64" height="120" rx="12" fill="var(--ink)"/><rect x="-26" y="-48" width="52" height="88" rx="4" fill="var(--card)"/>${txt(0, 0, "112", { size: 26, color: "var(--red)", font: D, weight: 800 })}</g>
        ${txt(196, 70, "médicos", { size: 13, color: "var(--red)" })}${txt(196, 100, "bomberos", { size: 13, color: "var(--inf)" })}${txt(196, 130, "policía", { size: 13, color: "var(--pen)" })}
        <g stroke="var(--line)" stroke-width="2"><path d="M128 80 L 160 66 M128 96 L 158 96 M128 112 L 162 126"/></g></svg>`,
    },
    {
      html: `<h3>10. Juego: ¿adónde voy?</h3><p>Escucha y di a qué <mark>lugar</mark> de la localidad vas.</p><p>1. Quiero leer un libro y llevármelo a casa.</p><p>2. Necesito medicina para la tos.</p><p>3. Quiero jugar al tobogán.</p><p>4. Necesito comprar manzanas.</p><p>Soluciones: biblioteca, farmacia, parque y frutería.</p><p>Ahora inventa tú otra pista.</p><p>Puedes jugar también con un plano del barrio. Señala con el dedo adónde vas en cada pista.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un mapa sencillo del barrio con la biblioteca, la farmacia, el parque y la frutería">${BG}
        <path d="M14 90 H 246 M130 14 V 166" stroke="var(--line)" stroke-width="16"/>
        ${[["biblioteca", 64, 50, "var(--pen)"], ["farmacia", 196, 50, "var(--ok)"], ["parque", 64, 132, "var(--leaf)"], ["frutería", 196, 132, "var(--inf)"]].map(([t, x, y, c]) => `<rect x="${x - 46}" y="${y - 26}" width="92" height="52" rx="8" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2.5"/>${txt(x, y + 5, t, { size: 13, color: c })}`).join("")}
        <circle cx="130" cy="90" r="9" fill="var(--red)"/></svg>`,
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>El <mark>barrio</mark> es la zona donde vivimos. Muchos barrios forman una <b>localidad</b>: un pueblo o una ciudad.</p><p>Hay tiendas, servicios, calles y parques. Los vecinos se saludan y se ayudan.</p><p>El ayuntamiento cuida la localidad. Nos movemos andando, en bici o en transporte público.</p><p>Cuidamos las calles y, en una emergencia, llamamos al 112.</p>`, "Una calle con tiendas, una farola, un banco y el número 112", `${L3.casa(50, 120, "var(--red)")}${L3.casa(110, 120, "var(--pen)")}${L3.casa(170, 120, "var(--leaf)")}<path d="M10 122 H250" stroke="var(--line)" stroke-width="3"/><path d="M220 122 V70" stroke="var(--ink)" stroke-width="3"/><circle cx="220" cy="66" r="7" fill="var(--sun)"/>${L3.arbol(240, 122, 0.8)}<rect x="96" y="140" width="68" height="30" rx="8" fill="var(--red)"/>${L3.big(130, 162, "112", "var(--card)", 20)}`),
  ],
  figura: {
    titulo: "Mi localidad",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Plano de una localidad con casas, tiendas, servicios, el ayuntamiento y un parque, unidos por calles">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <path d="M20 150 H 620 M320 20 V 280" stroke="var(--line)" stroke-width="22"/>
      ${[["VIVIENDAS", "casas y pisos", 160, 80, "var(--inf)"], ["TIENDAS", "pan · fruta · farmacia", 480, 80, "var(--red)"], ["SERVICIOS", "salud · bomberos · policía", 160, 220, "var(--pen)"], ["PARQUES Y PLAZAS", "para todos", 480, 220, "var(--leaf)"]].map(([t, d, x, y, c]) => `<rect x="${x - 120}" y="${y - 44}" width="240" height="88" rx="14" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="3"/>${txt(x, y - 4, t, { size: 17, color: c, font: D, weight: 800 })}${txt(x, y + 20, d, { size: 13 })}`).join("")}
      <rect x="276" y="128" width="88" height="44" rx="8" fill="var(--sun)"/>${txt(320, 156, "Ayuntamiento", { size: 12, color: "var(--ink)" })}
    </svg>`,
  },
  video: { id: "iYvU0Hhnet8", titulo: "Los lugares de la ciudad: Episodio 1 - Vocabulario para niños", canal: "Smile and Learn - Español", vistas: 834534, megusta: 0, busqueda: "el barrio para niños la localidad" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Dónde compras un jarabe para la tos?",
      pasos: ["Un jarabe es una medicina.", "Las medicinas se venden en una tienda especial.", "Esa tienda tiene una cruz verde."],
      resultado: "en la farmacia." },
    { enunciado: "Villanueva tiene 300 habitantes, muchas casas bajas y campo alrededor. ¿Es pueblo o ciudad?",
      pasos: ["Tiene pocas personas.", "No tiene edificios altos.", "Está rodeada de campo."],
      resultado: "Villanueva es un pueblo." },
    { enunciado: "Las farolas de tu calle no se encienden. ¿Quién las arregla?",
      pasos: ["Las farolas son de todos los vecinos.", "Quien cuida las calles es el ayuntamiento.", "Los vecinos se lo pueden avisar."],
      resultado: "las arregla el ayuntamiento." },
    { enunciado: "Quieres ir al cole sin contaminar. ¿Cómo vas?", pasos: ["El coche contamina mucho si va una sola persona.", "Andando o en bici no se contamina nada.", "Si está lejos, el autobús lleva a muchas personas a la vez."], resultado: "vas andando, en bici o en autobús." },
  ],
  errores: [
    "Confundir barrio y localidad: muchos barrios juntos forman una localidad.",
    "Pensar que los parques y las calles no son de nadie: son de todos y todos los cuidamos.",
    "Ir por la calzada en vez de por la acera.",
    "Pensar que el 112 es para jugar: solo se llama en una emergencia de verdad.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di el nombre de tu barrio o de tu calle.", sol: "Respuesta libre." },
    { nivel: "básico", q: "Di el nombre de tu localidad.", sol: "Respuesta libre." },
    { nivel: "básico", q: "¿Vives en un pueblo o en una ciudad?", sol: "Respuesta libre." },
    { nivel: "básico", q: "Di tres tiendas de tu barrio.", sol: "Por ejemplo: la panadería, la frutería y la farmacia." },
    { nivel: "básico", q: "¿Quién apaga los fuegos?", sol: "Los bomberos." },
    { nivel: "básico", q: "¿Qué número llamamos en una emergencia?", sol: "El 112." },
    { nivel: "medio", q: "Dibuja tu calle con una farola, un banco y una papelera.", sol: "Respuesta libre." },
    { nivel: "medio", q: "¿Por dónde caminan las personas en la calle?", sol: "Por la acera." },
    { nivel: "básico", q: "¿Quién trabaja en el ayuntamiento?", sol: "El alcalde o la alcaldesa y los concejales." },
    { nivel: "medio", q: "Di dos cosas para cuidar tu localidad.", sol: "Tirar papeles a la papelera y no pintar las paredes." },
    L3.b("¿Dónde compramos frutas y verduras?", "En la frutería."),
    L3.m("Une: panadería, farmacia, biblioteca. Libros, pan, medicinas.", "Panadería-pan; farmacia-medicinas; biblioteca-libros."),
    L3.m("Di una diferencia entre un pueblo y una ciudad.", "El pueblo es pequeño y tiene pocas personas; la ciudad es grande y tiene muchas."),
    L3.m("Busca la placa con el nombre de tu calle.", "Respuesta personal: suele estar en la pared de la esquina."),
    L3.m("Di dos medios de transporte que no contaminan.", "Ir andando y en bici."),
    L3.m("¿Qué hacemos con la caca de nuestro perro en la calle?", "La recogemos con una bolsa y la tiramos a la papelera."),
    L3.a("Dibuja un plano sencillo del camino de tu casa al cole.", "Un dibujo con la casa, el cole y las calles entre ellos."),
    L3.a("Inventa una fiesta para tu barrio. ¿Qué habría?", "Por ejemplo: música en la plaza, juegos y una merienda para todos."),
    L3.a("Explica qué hace el ayuntamiento por tu localidad.", "Limpia las calles, arregla los parques, pone farolas y organiza fiestas."),
    L3.a("¿Cuándo hay que llamar al 112?", "En una emergencia: un fuego, un accidente o alguien muy enfermo."),
    L3.a("Haz una lista de los servicios que hay cerca de tu casa.", "Por ejemplo: colegio, centro de salud, farmacia y parque."),
    L3.a("Di tres normas para cuidar el parque de tu barrio.", "No tirar papeles, no romper los columpios y no pisar las flores."),
  ],
  quiz: [
    { q: "Las personas que viven cerca son…", o: ["los vecinos", "los primos", "los maestros"], a: 0, e: "Los vecinos." },
    { q: "¿Dónde compramos pan?", o: ["En la farmacia", "En la panadería", "En la frutería"], a: 1, e: "En la panadería." },
    { q: "¿Dónde nos curan?", o: ["En el centro de salud", "En el parque", "En la tienda"], a: 0, e: "En el centro de salud o el hospital." },
    { q: "Un pueblo es…", o: ["pequeño", "enorme", "un edificio"], a: 0, e: "Tiene pocas casas y personas." },
    { q: "Una ciudad tiene…", o: ["edificios altos", "solo campo", "una casa"], a: 0, e: "Edificios altos y mucho tráfico." },
    { q: "¿Quién dirige el ayuntamiento?", o: ["El alcalde", "El panadero", "El conductor"], a: 0, e: "El alcalde o la alcaldesa." },
    { q: "Los coches van por…", o: ["la acera", "la calzada", "el parque"], a: 1, e: "Por la calzada." },
    { q: "El autobús es transporte…", o: ["público", "secreto", "de juguete"], a: 0, e: "Lo usan muchas personas." },
    { q: "En una emergencia llamamos al…", o: ["123", "112", "100"], a: 1, e: "Al 112." },
    { q: "Los papeles se tiran…", o: ["al suelo", "a la papelera", "al río"], a: 1, e: "A la papelera." },
    L3.Q("El nombre de la calle está en…", ["una placa en la pared", "el suelo del parque", "un árbol"], 0, "Suele estar en la esquina."),
    L3.Q("Ir en bici al cole…", ["no contamina", "contamina mucho", "está prohibido siempre"], 0, "Es sano y limpio."),
  ],
  examen: [
    { q: "Muchos barrios juntos forman…", o: ["una localidad", "una casa", "un colegio"], a: 0, e: "Una localidad." },
    { q: "¿Quién nos protege en la calle?", o: ["La policía", "El frutero", "El cartero"], a: 0, e: "La policía." },
    { q: "Farolas, bancos y papeleras son…", o: ["mobiliario urbano", "tiendas", "vehículos"], a: 0, e: "Mobiliario urbano." },
    { q: "El ayuntamiento…", o: ["cuida la localidad", "vende pan", "apaga fuegos"], a: 0, e: "Limpia, arregla y organiza." },
    L3.Q("¿Dónde compramos medicinas?", ["En la farmacia", "En la panadería", "En la frutería"], 0, "En la farmacia."),
    L3.Q("Una localidad puede ser…", ["un pueblo o una ciudad", "una mesa", "una nube"], 0, "Es el lugar donde vivimos."),
  ],
  feynman: ["Qué hay en mi barrio", "Diferencias entre pueblo y ciudad", "Qué hace el ayuntamiento"],
  mapa: mapa("MI LOCALIDAD", "var(--pri)", [
    ["Barrio", "calles · tiendas · vecinos", "var(--inf)"],
    ["Servicios", "salud · bomberos · policía", "var(--pen)"],
    ["Pueblo o ciudad", "pequeño · grande", "var(--leaf)"],
    ["Ayuntamiento", "alcalde · cuida la localidad", "var(--red)"],
  ], 230),
  tarjetas: [
    ["¿Qué es el barrio?", "La zona donde está mi casa"],
    ["¿Quiénes son los vecinos?", "Las personas que viven cerca"],
    ["¿Qué es un pueblo?", "Una localidad pequeña"],
    ["¿Qué es una ciudad?", "Una localidad grande"],
    ["¿Dónde compramos medicinas?", "En la farmacia"],
    ["¿Quién dirige el ayuntamiento?", "El alcalde o la alcaldesa"],
    ["¿Por dónde caminamos?", "Por la acera"],
    ["¿A qué número llamamos en una emergencia?", "Al 112"],
    ["¿Dónde está el nombre de la calle?", "En una placa en la esquina"],
    ["¿Qué transporte no contamina?", "Ir andando o en bici"],
  ],
  glosario: [
    ["Barrio", "La zona de la localidad donde está tu casa."],
    ["Localidad", "El pueblo o la ciudad donde vivimos."],
    ["Vecino", "Persona que vive cerca de ti."],
    ["Pueblo", "Localidad pequeña con pocas personas."],
    ["Ciudad", "Localidad grande con muchas personas."],
    ["Acera", "La parte de la calle por donde andan las personas."],
    ["Ayuntamiento", "El lugar desde donde se cuida la localidad."],
    ["Alcalde", "La persona que dirige el ayuntamiento."],
    ["Transporte público", "Autobús o metro que usan muchas personas a la vez."],
  ],
  situacion: L3.sit("El mapa de nuestro barrio", "Vamos a hacer un mapa gigante del barrio del colegio con los lugares más importantes.", ["Damos un paseo con la maestra alrededor del colegio y miramos tiendas, servicios y parques.", "En clase, dibujamos cada lugar en una tarjeta.", "Pegamos las tarjetas en un papel grande con las calles dibujadas.", "Jugamos a dar pistas para encontrar cada lugar en el mapa."], "Un mapa mural del barrio con sus lugares importantes.", ["Reconoce tiendas y servicios del barrio.", "Sitúa los lugares en el mapa.", "Explica cómo cuidar el barrio."]),
  familias: [
    "Dad un paseo por el barrio y que os diga el nombre de cada tienda y servicio.",
    "Dibujad juntos un plano sencillo del camino de casa al cole.",
    "Enseñadle el 112 y practicad qué decir (nombre, dirección, qué pasa).",
    "Visitad la biblioteca municipal y haced el carné.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: el barrio y la localidad, servicios públicos, pueblo y ciudad, el ayuntamiento y el cuidado de los espacios comunes (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Salida por el entorno del colegio con una ficha de lugares para marcar.", "Maqueta del barrio con cajas y cartulinas.", "Carta al ayuntamiento con una propuesta de mejora del parque."],
  },
  fuentes: [RD],
  revisado: "2026-11-14",
};
