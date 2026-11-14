// Ciencias Sociales 1º de Primaria. Nivel libro: lectura, apartados numerados, ejercicios por niveles, glosario y situación.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, casa, RD } = require("./_peques");
const L3 = require("./_pri1L3");

const corazon = (x, y, s = 1, c = "var(--red)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 10 C -24 -6 -14 -26 0 -14 C 14 -26 24 -6 0 10 Z" fill="${c}"/>`;
// Marco de foto.
const marco = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="var(--card)" stroke="#a8702e" stroke-width="4"/>`;
const tarta = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-26" y="-18" width="52" height="24" rx="4" fill="#f5b5c8"/><rect x="-26" y="-22" width="52" height="8" rx="4" fill="#fff"/>${[-12, 0, 12].map((d) => `<rect x="${d - 2}" y="-38" width="4" height="16" fill="var(--pen)"/><path d="M${d} -46 q 4 4 0 8 q -4 -4 0 -8" fill="var(--sun)"/>`).join("")}</g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "Mi familia",
  minutos: 50,
  objetivos: ["Saber quiénes forman una familia y nombrar a sus miembros", "Respetar que hay muchos tipos de familia", "Ayudar en casa con tareas sencillas", "Expresar el cariño y resolver los enfados hablando"],
  claves: ["familia", "padres", "hermanos", "abuelos", "primos", "tareas"],
  pregunta: {
    texto: "¿Quiénes viven contigo en casa? ¿Y quiénes son de tu familia aunque vivan en otra casa?",
    respuesta: "La familia son las personas que nos <mark>quieren y nos cuidan</mark>. Unas viven con nosotros. Otras, como los abuelos, los tíos o los primos, pueden vivir en otra casa y también son nuestra familia.",
  },
  lectura: L3.lect("La foto de la abuela", `<p>Es el cumpleaños de la abuela Carmen. Toda la familia está en su casa.</p><p>Están los padres de Nora, su hermano Leo y los tíos Pedro y Ana. También están los primos, Julia y Marcos.</p><p>La abuela sopla las velas. Todos cantan y aplauden.</p><p>«¡Vamos a hacer una foto!», dice el tío Pedro. Pero no caben todos.</p><p>Nora se sienta en las rodillas del abuelo. Leo se pone de puntillas detrás.</p><p>¡Clic! En la foto salen once personas sonriendo.</p><p>«Somos una familia muy grande», dice Nora. ¿Cómo es tu familia? En este tema lo vamos a ver.</p>`),
  bloques: [
    {
      html: `<h3>1. ¿Qué es una familia?</h3><p>Una <mark>familia</mark> son personas que se quieren y se cuidan.</p><p>En la familia nos dan comida, ropa y una casa. También nos dan abrazos, nos escuchan y nos enseñan.</p><p>Cuando estamos enfermos o tristes, la familia nos ayuda.</p><p>Tú eres parte de tu familia.</p><p>Cada familia es un pequeño equipo. Todos sus miembros son importantes, también los más pequeños, como tú.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una familia de cuatro personas junta, con un corazón encima">${BG}
        ${persona(60, 160, 120, "var(--pen)")}${persona(105, 160, 82, "var(--sun)", "#6b3f1f")}${persona(150, 160, 70, "var(--leaf)")}${persona(198, 160, 116, "var(--red)", "#6b3f1f")}
        ${corazon(130, 40, 1.4)}
        <path d="M14 162 H 246" stroke="var(--line)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>2. Los miembros de la familia</h3><p>Cada persona de la familia es un <mark>miembro</mark>.</p><p>Los <b>padres</b> son el padre y la madre. Los <b>hijos</b> son los niños y las niñas. Entre ellos son <b>hermanos</b>.</p><p>Los padres de tus padres son tus <b>abuelos</b>. Tú eres su nieto o su nieta.</p><p>Los hermanos juegan juntos y a veces discuten. Pero también se ayudan y se cuidan mucho.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Abuelos, padres e hijos en tres filas">${BG}
        ${persona(100, 54, 46, "var(--muted)", "#d9d9d9")}${persona(160, 54, 44, "var(--inf)", "#d9d9d9")}
        ${persona(100, 112, 50, "var(--pen)")}${persona(160, 112, 48, "var(--red)", "#6b3f1f")}
        ${persona(110, 166, 38, "var(--leaf)")}${persona(150, 166, 36, "var(--sun)", "#6b3f1f")}
        <g font-size="12" font-weight="700" ${F}><text x="198" y="44" fill="var(--muted)">abuelos</text><text x="198" y="100" fill="var(--pen)">padres</text><text x="198" y="156" fill="var(--leaf)">hijos</text></g></svg>`,
    },
    {
      html: `<h3>3. Más familia</h3><p>La familia es más grande de lo que parece.</p><p>Los hermanos de tus padres son tus <mark>tíos</mark>. Los hijos de tus tíos son tus <mark>primos</mark>.</p><p>A veces nos juntamos todos en un cumpleaños o en Navidad. ¡Somos muchísimos!</p><p>Algunas familias viven lejos. Hablamos con ellas por teléfono o por videollamada.</p><p>Los tíos y los primos también forman parte de tu familia. Aunque no vivan contigo, os queréis igual.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una niña habla por videollamada con su tía y su primo">${BG}
        ${persona(60, 160, 116, "var(--sun)", "#6b3f1f")}
        <g transform="translate(176 92)"><rect x="-58" y="-50" width="116" height="84" rx="8" fill="var(--ink)"/><rect x="-52" y="-44" width="104" height="72" fill="var(--water)" fill-opacity=".35"/></g>
        <svg x="124" y="48" width="104" height="72" viewBox="0 0 104 72">${persona(36, 90, 80, "var(--red)", "#6b3f1f")}${persona(76, 90, 60, "var(--leaf)")}</svg>
        ${txt(176, 152, "tía y primo", { size: 12, color: "var(--muted)" })}${txt(60, 30, "¡Hola!", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>4. Hay muchas familias</h3><p>No hay dos familias iguales. Todas son <mark>diferentes</mark>.</p><p>Hay familias grandes y pequeñas. Algunas tienen papá y mamá. Otras tienen solo mamá o solo papá. Otras tienen dos papás o dos mamás.</p><p>Algunos niños viven con sus abuelos. Lo importante es el <b>cariño</b>.</p><p>Algunas familias tienen niños adoptados. Han llegado a la familia de otra forma y se les quiere igual.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres familias distintas: una mamá con su hija, dos papás con un hijo y una abuela con su nieto">${BG}
        ${[0, 1, 2].map((i) => `<rect x="${14 + i * 80}" y="30" width="72" height="130" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>`).join("")}
        ${persona(40, 146, 84, "var(--red)", "#6b3f1f")}${persona(70, 146, 52, "var(--sun)")}
        ${persona(116, 146, 82, "var(--pen)")}${persona(148, 146, 82, "var(--leaf)", "#6b3f1f")}${persona(132, 146, 46, "var(--inf)")}
        ${persona(204, 146, 80, "var(--muted)", "#d9d9d9")}${persona(232, 146, 50, "var(--water)")}
        ${corazon(50, 50, 0.6)}${corazon(130, 50, 0.6)}${corazon(210, 50, 0.6)}</svg>`,
      video: { id: "flmQuRgTPOs", titulo: "Tipos de familias", canal: "Escuela de Aprendices", vistas: 1660457, megusta: 0 },
    },
    {
      html: `<h3>5. Crecemos en familia</h3><p>Cuando naciste eras un <mark>bebé</mark>. Tu familia te daba de comer y te cambiaba los pañales.</p><p>Luego aprendiste a andar y a hablar. Ahora vas al cole y aprendes a leer.</p><p>Mira fotos de cuando eras pequeño. ¡Cuánto has crecido! La familia te acompaña siempre.</p><p>Tus abuelos también fueron niños. Pregúntales a qué jugaban. ¡Te contarán historias muy divertidas!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres fotos: un bebé, un niño pequeño y un niño de seis años">${BG}
        ${marco(16, 50, 70, 86)}${marco(96, 50, 70, 86)}${marco(176, 50, 70, 86)}
        <g transform="translate(51 104)"><ellipse cy="6" rx="18" ry="12" fill="var(--water)"/><circle cy="-14" r="11" fill="#f2c9a0"/>${"<circle cx=\"-4\" cy=\"-14\" r=\"1.5\" fill=\"#1b2235\"/><circle cx=\"4\" cy=\"-14\" r=\"1.5\" fill=\"#1b2235\"/>"}</g>
        ${persona(131, 130, 52, "var(--sun)")}${persona(211, 130, 72, "var(--pen)")}
        ${txt(51, 156, "bebé", { size: 12 })}${txt(131, 156, "2 años", { size: 12 })}${txt(211, 156, "6 años", { size: 12 })}
        ${txt(130, 32, "¡He crecido!", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>6. Ayudamos en casa</h3><p>En una familia, <mark>todos ayudan</mark>. Así nadie se cansa demasiado.</p><p>Tú también puedes ayudar. Puedes poner la mesa y recoger tus juguetes. También puedes hacer tu cama y llevar la ropa sucia al cesto.</p><p>Si cada uno hace un poco, la casa está ordenada. Y hay más tiempo para jugar juntos.</p><p>Haz un cartel de tareas con tu familia. Pon una pegatina cada vez que ayudes. ¡Verás cuánto haces!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño pone la mesa y una niña guarda juguetes en una caja">${BG}
        ${persona(54, 156, 104, "var(--leaf)")}
        <rect x="80" y="104" width="70" height="8" rx="3" fill="#a8702e"/><path d="M88 112 V 156 M142 112 V 156" stroke="#a8702e" stroke-width="5"/>
        <ellipse cx="100" cy="100" rx="10" ry="3" fill="#fff" stroke="var(--line)"/><ellipse cx="128" cy="100" rx="10" ry="3" fill="#fff" stroke="var(--line)"/>
        ${persona(196, 156, 98, "var(--red)", "#6b3f1f")}
        <rect x="216" y="128" width="32" height="28" rx="3" fill="var(--sun)"/><circle cx="226" cy="126" r="6" fill="var(--pen)"/><rect x="232" y="118" width="10" height="10" fill="var(--red)"/>
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(130, 30, "Todos ayudamos", { size: 15, color: "var(--leaf)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>7. Celebramos juntos</h3><p>Las familias se juntan para <mark>celebrar</mark> momentos especiales.</p><p>Celebramos los cumpleaños con una tarta y velas. Celebramos fiestas como la Navidad o el fin de curso.</p><p>Cada familia tiene sus costumbres: comidas, canciones o juegos que repite cada año.</p><p>¿Cuál es la fiesta favorita de tu familia?</p><p>Algunas familias vienen de otros países. Celebran sus propias fiestas y comparten comidas muy ricas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una tarta de cumpleaños con tres velas y globos">${BG}
        ${tarta(130, 130)}
        <rect x="80" y="130" width="100" height="6" rx="3" fill="#a8702e"/>
        ${[["var(--red)", 36, 76], ["var(--pen)", 62, 64], ["var(--sun)", 200, 70], ["var(--leaf)", 226, 84]].map(([c, x, y]) => `<ellipse cx="${x}" cy="${y}" rx="14" ry="17" fill="${c}"/><path d="M${x} ${y + 17} q -4 16 2 30" stroke="var(--muted)" stroke-width="1.5" fill="none"/>`).join("")}
        ${txt(130, 30, "¡Feliz cumpleaños!", { size: 15, color: "var(--red)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>8. Nos queremos y nos respetamos</h3><p>En la familia nos decimos <mark>«te quiero»</mark> y nos damos abrazos.</p><p>A veces nos enfadamos. Es normal. Lo arreglamos <b>hablando</b>, sin gritar ni pegar.</p><p>Pedimos las cosas «por favor» y damos las «gracias». Escuchamos a los demás y pedimos perdón cuando nos equivocamos.</p><p>Si algo te preocupa, cuéntaselo a tu familia. Hablar de lo que sentimos nos ayuda a estar mejor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos hermanos hacen las paces y se dan la mano">${BG}
        ${persona(90, 160, 104, "var(--pen)")}${persona(170, 160, 104, "var(--sun)", "#6b3f1f")}
        <path d="M110 120 Q 130 112 150 120" stroke="#f2c9a0" stroke-width="7" stroke-linecap="round" fill="none"/>
        <rect x="56" y="20" width="148" height="30" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        ${txt(130, 40, "Lo siento. ¿Amigos?", { size: 13 })}
        ${corazon(222, 70, 0.7)}</svg>`,
    },
    {
      html: `<h3>9. ¿Para qué sirve?</h3><p>Es importante saber <mark>cómo se llaman</mark> las personas de tu familia.</p><p>Aprende tu nombre y tus apellidos. Aprende el nombre de tus padres y dónde vives.</p><p>Si un día te pierdes, puedes decírselo a un policía. También es útil saber un número de teléfono de casa.</p><p>Practica con tu familia: di tu nombre completo, tu calle y el número de teléfono. Repítelo varias veces.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una niña se presenta: me llamo Lucía García y mi madre se llama Ana">${BG}
        ${persona(52, 162, 120, "var(--red)", "#6b3f1f")}
        <rect x="96" y="40" width="152" height="84" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M100 104 L 84 116 L 106 112" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        ${txt(172, 66, "Me llamo", { size: 13 })}${txt(172, 86, "Lucía García.", { size: 13, color: "var(--pen)" })}${txt(172, 108, "Mi madre es Ana.", { size: 13 })}</svg>`,
    },
    {
      html: `<h3>10. Juego: el árbol de mi familia</h3><p>Vamos a hacer un <mark>árbol familiar</mark>.</p><p>Dibuja un árbol grande. Arriba, en las ramas, pon a tus abuelos. En medio, a tus padres o a quien te cuida. Abajo, a ti y a tus hermanos.</p><p>Escribe o di el nombre de cada uno. ¡Puedes pegar fotos!</p><p>Después enseña tu árbol a la clase. ¿Hay árboles muy grandes? ¿Y pequeños? ¡Todos son bonitos!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un árbol con caras en las ramas: abuelos arriba, padres en medio y niños abajo">${BG}
        <rect x="122" y="110" width="16" height="56" fill="#8a5a2b"/><ellipse cx="130" cy="78" rx="110" ry="62" fill="var(--leaf)" fill-opacity=".35"/>
        ${[[70, 40], [110, 40], [150, 40], [190, 40], [100, 80], [160, 80], [115, 120], [145, 120]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="13" fill="#f2c9a0" stroke="${["var(--muted)", "var(--muted)", "var(--muted)", "var(--muted)", "var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"][i]}" stroke-width="3"/><circle cx="${x - 4}" cy="${y - 1}" r="1.5" fill="#1b2235"/><circle cx="${x + 4}" cy="${y - 1}" r="1.5" fill="#1b2235"/>`).join("")}
        ${txt(208, 44, "abuelos", { size: 11, color: "var(--muted)", anchor: "start" })}</svg>`,
      video: L3.V("CtiGOIQYwhs", "La familia: el árbol genealógico para niños", "Smile and Learn - Español", 2276987),
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Una <mark>familia</mark> son personas que se quieren y se cuidan.</p><p>Los miembros son los padres, los hijos, los hermanos y los abuelos. También los tíos y los primos.</p><p>Hay muchos tipos de familias. Todas son distintas, pero lo importante es el cariño.</p><p>En familia ayudamos, celebramos y arreglamos los enfados hablando.</p>`, "Tres generaciones de una familia: abuelos, padres y niños", `${L3.nino(40, 150, { c: "var(--muted)", s: 1.1 })}${L3.nino(80, 150, { c: "var(--muted)", s: 1.1, nina: true, pelo: "#bbb" })}${L3.nino(130, 150, { c: "var(--pen)", s: 1.15 })}${L3.nino(168, 150, { c: "var(--red)", s: 1.15, nina: true })}${L3.nino(205, 150, { c: "var(--leaf)", s: 0.75 })}${L3.nino(232, 150, { c: "var(--inf)", s: 0.75, nina: true })}${L3.corazon(130, 30, 1.6)}${L3.suelo(152)}${L3.t(130, 172, "abuelos · padres · hijos", "var(--pen)", 13)}`),
  ],
  figura: {
    titulo: "Mi familia",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Esquema de la familia: abuelos arriba, padres y tíos en medio, hijos y primos abajo">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["ABUELOS", 60, "var(--muted)", [310, 450]], ["PADRES Y TÍOS", 145, "var(--pen)", [240, 340, 420, 520]], ["HIJOS Y PRIMOS", 230, "var(--leaf)", [210, 290, 380, 470, 550]]].map(([t, y, c, xs]) => `${xs.map((x) => `<circle cx="${x}" cy="${y}" r="22" fill="#f2c9a0" stroke="${c}" stroke-width="4"/><circle cx="${x - 7}" cy="${y - 3}" r="2.5" fill="#1b2235"/><circle cx="${x + 7}" cy="${y - 3}" r="2.5" fill="#1b2235"/><path d="M${x - 7} ${y + 7} q 7 6 14 0" stroke="#1b2235" stroke-width="2" fill="none"/>`).join("")}${txt(70, y + 5, t, { size: 13, color: c, font: D, weight: 800, anchor: "start" })}`).join("")}
      <g stroke="var(--line)" stroke-width="2" fill="none"><path d="M380 60 V 110 M340 123 V 110 H 420 V 123"/><path d="M340 167 V 190 M290 208 V 190 H 380 V 208"/><path d="M520 167 V 190 M470 208 V 190 H 550 V 208"/></g>
    </svg>`,
  },
  video: { id: "oAwHQX55FB8", titulo: "La familia para niños - Ana y su familia - Aprende los miembros de la familia", canal: "Smile and Learn - Español", vistas: 2558940, megusta: 0, busqueda: "la familia para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Quién es la madre de tu padre?",
      pasos: ["Piensa en tu padre.", "Su madre es una persona mayor de tu familia.", "Los padres de tus padres son tus abuelos."],
      resultado: "la madre de tu padre es tu abuela." },
    { enunciado: "Tu tía Marta tiene un hijo, Pablo. ¿Qué es Pablo para ti?",
      pasos: ["Marta es hermana de tu madre o de tu padre.", "Los hijos de los tíos son primos.", "Pablo es hijo de tu tía."],
      resultado: "Pablo es tu primo." },
    { enunciado: "Tu hermano y tú queréis el mismo cuento. ¿Qué hacéis?",
      pasos: ["No gritamos ni tiramos del cuento.", "Hablamos: «¿Lo leemos juntos?».", "Si no, uno lo lee primero y luego el otro."],
      resultado: "lo resolvemos hablando y compartiendo." },
    { enunciado: "¿Qué eres tú para tu abuela?", pasos: ["Tu abuela es la madre de tu padre o de tu madre.", "Tú eres el hijo o la hija de su hijo.", "Para los abuelos, los hijos de sus hijos son sus nietos."], resultado: "eres su nieto o su nieta." },
  ],
  errores: [
    "Pensar que todas las familias son iguales: hay muchos tipos y todas valen lo mismo.",
    "Creer que los abuelos o los primos no son familia porque viven en otra casa.",
    "Pensar que las tareas de casa son solo cosa de los mayores: todos podemos ayudar.",
    "Arreglar un enfado gritando o pegando: los problemas se arreglan hablando.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di el nombre de las personas que viven contigo.", sol: "Respuesta libre." },
    { nivel: "básico", q: "Di tu nombre y tus dos apellidos.", sol: "Respuesta libre: comprueba que los dice bien." },
    { nivel: "básico", q: "¿Cómo se llaman los padres de tus padres?", sol: "Abuelos." },
    { nivel: "medio", q: "¿Qué son para ti los hijos de tus tíos?", sol: "Tus primos." },
    { nivel: "básico", q: "Dibuja a tu familia haciendo algo juntos.", sol: "Respuesta libre." },
    { nivel: "básico", q: "Di dos tareas de casa en las que puedes ayudar.", sol: "Por ejemplo: poner la mesa y recoger los juguetes." },
    { nivel: "básico", q: "¿Cómo celebráis los cumpleaños en tu familia?", sol: "Respuesta libre: por ejemplo, con tarta y velas." },
    { nivel: "medio", q: "Di tres palabras mágicas para convivir bien.", sol: "Por favor, gracias y perdón." },
    { nivel: "básico", q: "Pega o dibuja una foto tuya de bebé y otra de ahora.", sol: "Comparad juntos qué ha cambiado." },
    { nivel: "medio", q: "Haz el árbol de tu familia con tres pisos.", sol: "Abuelos arriba, padres en medio y niños abajo." },
    L3.b("¿Cómo se llaman los hermanos de tus padres?", "Son tus tíos."),
    L3.m("Completa: el padre de mi madre es mi…", "Abuelo."),
    L3.m("Une: hijos de tus tíos, padres de tus padres. Abuelos, primos.", "Hijos de tus tíos: primos. Padres de tus padres: abuelos."),
    L3.m("Di tu calle y el número de tu casa.", "Respuesta personal: debe saberla de memoria."),
    L3.m("Pregunta a un abuelo a qué jugaba de pequeño.", "Por ejemplo: a la comba, a las canicas o a la peonza."),
    L3.m("¿Qué haces si te enfadas con tu hermano?", "Hablarlo sin gritar ni pegar y pedir perdón si me he equivocado."),
    L3.a("Haz un cartel con las tareas de casa de cada miembro de tu familia.", "Un cartel con nombres y tareas, por ejemplo: poner la mesa."),
    L3.a("¿Por qué son distintas las familias? Pon dos ejemplos.", "Porque hay familias grandes y pequeñas, con un papá, dos mamás, con abuelos…"),
    L3.a("Cuenta cómo celebra tu familia una fiesta especial.", "Respuesta personal: comida, canciones o juegos de esa fiesta."),
    L3.a("Explica qué es un nieto.", "El hijo o la hija de tu hijo o de tu hija."),
    L3.a("Dibuja tu árbol familiar con abuelos, padres y hermanos.", "Árbol con tres pisos y los nombres de cada uno."),
    L3.a("Di una cosa que tu familia te ha enseñado.", "Por ejemplo: a montar en bici o a atarme los zapatos."),
  ],
  quiz: [
    { q: "Una familia es un grupo de personas que…", o: ["se quieren y se cuidan", "van al mismo cole", "juegan al fútbol"], a: 0, e: "Se quieren y se cuidan." },
    { q: "Los padres de tus padres son tus…", o: ["tíos", "abuelos", "primos"], a: 1, e: "Abuelos." },
    { q: "Los hijos de tus tíos son tus…", o: ["primos", "hermanos", "abuelos"], a: 0, e: "Primos." },
    { q: "Los hermanos de tu madre son tus…", o: ["primos", "tíos", "nietos"], a: 1, e: "Tíos." },
    { q: "¿Todas las familias son iguales?", o: ["Sí", "No", "Solo las grandes"], a: 1, e: "Cada familia es diferente." },
    { q: "En casa, las tareas…", o: ["las hace una persona", "las hacemos entre todos", "no se hacen"], a: 1, e: "Todos ayudamos." },
    { q: "Si me enfado con mi hermano…", o: ["le grito", "hablamos", "le pego"], a: 1, e: "Los enfados se arreglan hablando." },
    { q: "Tú eres para tus abuelos su…", o: ["nieto o nieta", "tío o tía", "primo o prima"], a: 0, e: "Nieto o nieta." },
    { q: "¿Qué puedo hacer para ayudar en casa?", o: ["Poner la mesa", "Ensuciar", "Esconder la ropa"], a: 0, e: "Poner la mesa es una buena ayuda." },
    { q: "Si me pierdo, es útil saber…", o: ["mi nombre y mis apellidos", "un chiste", "el nombre de un perro"], a: 0, e: "Así me pueden ayudar." },
    L3.Q("Un árbol familiar sirve para…", ["ver quién es quién en la familia", "dar fruta", "jugar al fútbol"], 0, "Muestra a los miembros de la familia."),
    L3.Q("Si algo te preocupa…", ["lo cuentas a tu familia", "te lo callas siempre", "gritas"], 0, "Hablar ayuda."),
  ],
  examen: [
    { q: "¿Quiénes son los miembros de la familia?", o: ["Las personas de la familia", "Los vecinos", "Los profes"], a: 0, e: "Cada persona de la familia." },
    { q: "La hija de tu madre, si no eres tú, es tu…", o: ["prima", "hermana", "tía"], a: 1, e: "Es tu hermana." },
    { q: "¿Qué palabra usamos al pedir algo?", o: ["Por favor", "Adiós", "Nunca"], a: 0, e: "Por favor." },
    { q: "En una familia lo más importante es…", o: ["el cariño", "tener muchos juguetes", "ser muchos"], a: 0, e: "Quererse y cuidarse." },
    L3.Q("Los hijos de tus tíos son tus…", ["primos", "abuelos", "hermanos"], 0, "Son tus primos."),
    L3.Q("Para ayudar en casa puedo…", ["poner la mesa", "dejar todo tirado", "esconder la ropa sucia"], 0, "Todos ayudan."),
  ],
  feynman: ["Quiénes forman mi familia", "Por qué hay muchos tipos de familia", "Cómo ayudo y convivo en casa"],
  mapa: mapa("MI FAMILIA", "var(--pri)", [
    ["Miembros", "padres · hijos · hermanos", "var(--pen)"],
    ["Más familia", "abuelos · tíos · primos", "var(--muted)"],
    ["Diferentes", "grandes · pequeñas · todas valen", "var(--red)"],
    ["Convivir", "ayudar · celebrar · hablar", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["¿Qué es una familia?", "Personas que se quieren y se cuidan"],
    ["¿Quiénes son los abuelos?", "Los padres de tus padres"],
    ["¿Quiénes son los tíos?", "Los hermanos de tus padres"],
    ["¿Quiénes son los primos?", "Los hijos de tus tíos"],
    ["¿Hay un solo tipo de familia?", "No, hay muchos y todos valen"],
    ["¿Cómo ayudo en casa?", "Poniendo la mesa y recogiendo"],
    ["¿Cómo arreglamos un enfado?", "Hablando"],
    ["¿Qué debo saber de memoria?", "Mi nombre, mis apellidos y dónde vivo"],
    ["¿Qué es un nieto?", "El hijo de tu hijo o de tu hija"],
    ["¿Qué es un árbol familiar?", "Un dibujo con todos los miembros de la familia"],
  ],
  glosario: [
    ["Familia", "Personas que se quieren y se cuidan."],
    ["Miembro", "Cada persona que forma parte de la familia."],
    ["Padres", "El padre y la madre."],
    ["Hermanos", "Los hijos de los mismos padres."],
    ["Abuelos", "Los padres de tus padres."],
    ["Nieto", "El hijo de un hijo o de una hija."],
    ["Tíos", "Los hermanos de tus padres."],
    ["Primos", "Los hijos de tus tíos."],
    ["Apellido", "El nombre de familia que va después de tu nombre."],
  ],
  situacion: L3.sit("El mural de las familias", "Vamos a hacer un mural con todas las familias de la clase para ver que cada una es distinta y especial.", ["En casa, hacemos un dibujo o traemos una foto de la familia.", "Escribimos o decimos quién es cada miembro.", "Pegamos todas las familias en un mural grande del pasillo.", "Cada niño presenta su familia y cuenta una costumbre."], "Un mural con todas las familias de la clase.", ["Nombra bien a los miembros de su familia.", "Respeta y escucha las familias de los demás.", "Cuenta una costumbre de su familia."]),
  familias: [
    "Mirad juntos fotos antiguas y contadle anécdotas de cuando era bebé.",
    "Haced un árbol familiar con fotos o dibujos y los nombres.",
    "Dadle una tarea fija y sencilla en casa, como poner los vasos en la mesa.",
    "Practicad que diga su nombre completo, el vuestro y la calle donde vive.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: la familia, sus miembros y relaciones de parentesco; diversidad familiar, corresponsabilidad en las tareas y convivencia (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Mural «Nuestras familias» con una foto de cada familia del aula.", "Cuadro de tareas de casa con autoevaluación semanal.", "Entrevista a un abuelo o abuela que visita la clase."],
  },
  fuentes: [RD],
  revisado: "2026-11-14",
};
