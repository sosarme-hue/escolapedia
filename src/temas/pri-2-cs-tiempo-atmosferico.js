// Ciencias Sociales 2º de Primaria: el tiempo atmosférico. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, tema, V, nino, sol, nube, lluvia, copo, viento, molino, termometro, paraguas, arbol, chip, tick, equis, cielo } = require("./_pri2b");

const nubeGris = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#9aa3b5" stroke="#7d869a" stroke-width="2"><path d="M-24 8 q-12 0 -10 -11 q2 -9 13 -7 q3 -12 16 -10 q11 2 11 12 q12 -2 13 8 q1 8 -9 8z"/></g>`;
const muneco = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cy="-18" r="18" fill="#fff" stroke="var(--water)" stroke-width="2"/><circle cy="-48" r="12" fill="#fff" stroke="var(--water)" stroke-width="2"/><circle cx="-4" cy="-51" r="1.8" fill="var(--ink)"/><circle cx="4" cy="-51" r="1.8" fill="var(--ink)"/><path d="M0 -47 l9 2 l-9 2z" fill="#e67e22"/><path d="M-12 -59 h24 M-8 -59 v-10 h16 v10" stroke="var(--ink)" stroke-width="2.5" fill="var(--ink)"/><path d="M-10 -36 h20" stroke="var(--red)" stroke-width="4"/></g>`;
const cometa = (x, y) => `<g transform="translate(${x} ${y})"><path d="M0 -18 L14 0 L0 22 L-14 0Z" fill="var(--red)" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -18 V22 M-14 0 H14" stroke="var(--ink)" stroke-width="1"/><path d="M0 22 q-8 10 0 18 q8 8 0 16" stroke="var(--ink)" stroke-width="1.5" fill="none"/></g>`;
const gorra = (x, y, c = "var(--pen)") => `<path d="M${x - 9} ${y} a9 8 0 0 1 18 0z M${x + 6} ${y} h10" fill="${c}" stroke="${c}" stroke-width="2.5"/>`;
const charco = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="30" ry="6" fill="var(--water)" opacity=".45"/>`;
const panel = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}" opacity=".12"/>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "El tiempo atmosférico",
  objetivos: ["Saber qué es el tiempo atmosférico", "Reconocer los tipos de tiempo y sus símbolos", "Usar el termómetro y vestirnos según el tiempo"],
  claves: ["tiempo atmosférico", "soleado", "nublado", "lluvia", "nieve", "viento", "temperatura", "termómetro"],
  pregunta: {
    texto: "Por la mañana sale el sol y por la tarde llueve. ¿Ha cambiado el clima o el tiempo?",
    respuesta: "Ha cambiado el <mark>tiempo atmosférico</mark>: cómo está el cielo y el aire en un momento. El tiempo cambia de un día a otro, ¡y hasta en el mismo día!",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el tiempo atmosférico?</h3><p>El <mark>tiempo atmosférico</mark> es cómo está el cielo y el aire en un lugar y en un momento.</p><p>Para saberlo miramos al cielo: ¿hace sol?, ¿hay nubes?, ¿llueve?, ¿sopla viento?, ¿hace frío o calor? El tiempo <b>cambia</b> mucho: de un día a otro y a veces en pocas horas.</p>`,
      svg: svg("Un niño mira al cielo, donde hay sol y una nube", `${cielo(120)}${sol(70, 46, 18)}${nube(170, 50, 1.2)}<rect x="10" y="150" width="240" height="20" fill="var(--leaf)" opacity=".35"/>${arbol(40, 160, 0.9)}${nino(150, 166, { c: "var(--red)" })}${txt(214, 128, "¿qué tiempo", "var(--pen)", 13)}${txt(214, 144, "hace?", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Día soleado</h3><p>Un día <mark>soleado</mark> el cielo está azul y sin nubes, y el Sol calienta.</p><p>Es un buen día para jugar al aire libre. Pero el Sol es fuerte: nos ponemos <b>gorra</b>, crema y bebemos agua. Nunca miramos el Sol directamente, porque daña los ojos.</p>`,
      svg: svg("Un día de sol: una niña con gorra juega con una pelota", `${cielo(130)}${sol(200, 44, 22)}<rect x="10" y="150" width="240" height="20" fill="var(--leaf)" opacity=".35"/>${nino(90, 166, { nina: true, c: "var(--sun)", pose: "salta" })}${gorra(90, 79, "var(--red)")}<circle cx="146" cy="150" r="12" fill="var(--pen)"/><path d="M134 150 h24" stroke="#fff" stroke-width="2"/>${txt(210, 160, "soleado", "#b8860b", 15)}`),
    },
    {
      html: `<h3>Día nublado</h3><p>Un día <mark>nublado</mark> el cielo está cubierto de <b>nubes</b> y no vemos el Sol.</p><p>Las nubes están hechas de gotitas de agua muy pequeñas. Si las nubes son blancas, no suele llover. Si son <b>grises y oscuras</b>, ¡cuidado!, puede que llueva pronto.</p>`,
      svg: svg("Un cielo cubierto: nubes blancas y nubes grises que tapan el sol", `${cielo(150)}${sol(130, 50, 16)}${nube(80, 56, 1.4)}${nube(186, 48, 1.3)}${nubeGris(130, 96, 1.5)}${nubeGris(60, 110, 1.1)}${nubeGris(210, 110, 1.1)}${txt(130, 160, "nublado", "var(--muted)", 15)}`),
    },
    {
      html: `<h3>Día de lluvia</h3><p>Cuando las gotitas de las nubes se juntan y pesan mucho, caen: es la <mark>lluvia</mark>.</p><p>Salimos con <b>paraguas</b>, chubasquero y botas de agua. La lluvia es muy necesaria: riega las plantas y llena los ríos. Si hay <b>tormenta</b>, con rayos y truenos, nos quedamos a cubierto.</p>`,
      svg: svg("Llueve de una nube gris y un niño se protege con un paraguas junto a un charco", `${nubeGris(80, 40, 1.4)}${nubeGris(190, 34, 1.2)}${lluvia(80, 66, 6)}${lluvia(80, 90, 6)}${lluvia(190, 56, 5)}${lluvia(190, 82, 5)}${charco(190, 162)}${nino(120, 166, { c: "var(--leaf)" })}${paraguas(120, 74, "var(--red)")}<path d="M214 90 l-10 18 h10 l-8 18" stroke="var(--sun)" stroke-width="3" fill="none" stroke-linejoin="round"/>`),
      video: V("65mS782mCLQ"),
    },
    {
      html: `<h3>Día de nieve</h3><p>Cuando hace mucho <b>frío</b>, el agua de las nubes se congela y cae en copos blancos: es la <mark>nieve</mark>.</p><p>Nieva sobre todo en invierno y en las montañas. Nos abrigamos con abrigo, gorro, bufanda y guantes. Con la nieve podemos hacer un muñeco, ¡pero con cuidado de no resbalar!</p>`,
      svg: svg("Caen copos de nieve sobre un muñeco de nieve y un niño muy abrigado", `${nubeGris(130, 30, 1.6)}${[30, 70, 110, 150, 190, 230].map((x, i) => copo(x, 64 + (i % 2) * 22, 6)).join("")}${copo(50, 116, 6)}${copo(220, 120, 6)}<path d="M10 150 Q130 136 250 150 V170 H10Z" fill="#fff" stroke="var(--line)"/>${muneco(90, 160)}${nino(170, 166, { c: "var(--pen)" })}<path d="M160 116 h20" stroke="var(--red)" stroke-width="5"/>`),
    },
    {
      html: `<h3>Día de viento</h3><p>El <mark>viento</mark> es aire que se mueve. No lo vemos, pero lo notamos: mueve las hojas, la ropa tendida y las nubes.</p><p>Con viento suave podemos volar una <b>cometa</b>. El viento también mueve los <b>molinos</b> que hacen electricidad. Si el viento es muy fuerte, puede romper ramas.</p>`,
      svg: svg("El viento mueve un árbol, una cometa y un molino de viento", `${cielo(150)}${viento(20, 60)}${viento(84, 92)}<rect x="10" y="150" width="240" height="20" fill="var(--leaf)" opacity=".35"/>${arbol(60, 160, 1)}<path d="M80 120 q8 -4 14 0 M86 132 q8 -4 14 0" stroke="var(--leaf)" stroke-width="3" fill="none"/>${cometa(170, 48)}<path d="M170 70 L140 140" stroke="var(--ink)" stroke-width="1" />${nino(136, 166, { c: "var(--red)", s: 0.8 })}${molino(226, 160, 1)}`),
    },
    {
      html: `<h3>Frío y calor: la temperatura</h3><p>La <mark>temperatura</mark> nos dice si hace frío o calor. La medimos con un <b>termómetro</b>.</p><p>Si el líquido rojo <b>sube</b>, hace calor. Si <b>baja</b>, hace frío. La temperatura se mide en <b>grados</b>: con 30 grados hace mucho calor y con 0 grados el agua se convierte en hielo.</p>`,
      svg: svg("Dos termómetros: uno alto con sol que marca calor y otro bajo con nieve que marca frío", `${termometro(80, 140, 0.85, "var(--red)")}${termometro(180, 140, 0.15, "var(--water)")}${sol(124, 50, 14)}${copo(222, 56, 10)}${txt(80, 172, "calor", "var(--red)", 15)}${txt(180, 172, "frío", "var(--water)", 15)}<path d="M104 70 v-20 l-6 8 M104 50 l6 8" stroke="var(--red)" stroke-width="2.5" fill="none"/><path d="M204 90 v20 l-6 -8 M204 110 l6 -8" stroke="var(--water)" stroke-width="2.5" fill="none"/>`),
    },
    {
      html: `<h3>Los símbolos del tiempo</h3><p>En la tele y en el periódico, el <b>parte del tiempo</b> usa <mark>símbolos</mark> para decirnos qué tiempo hará.</p><p>Un <b>sol</b> es soleado, una <b>nube</b> es nublado, una nube con gotas es lluvia, una con copos es nieve y unas líneas curvas son viento. En clase podemos hacer nuestro propio calendario del tiempo.</p>`,
      svg: svg("Cinco símbolos del tiempo: sol, nube, lluvia, nieve y viento", `${sol(42, 56, 14)}${nube(130, 56, 1)}${nubeGris(218, 50, 1)}${lluvia(218, 66, 4)}${nubeGris(70, 118, 1)}${copo(58, 144, 5)}${copo(80, 144, 5)}${viento(160, 112)}${txt(42, 96, "sol", "var(--ink)", 12)}${txt(130, 96, "nubes", "var(--ink)", 12)}${txt(218, 96, "lluvia", "var(--ink)", 12)}${txt(70, 168, "nieve", "var(--ink)", 12)}${txt(186, 168, "viento", "var(--ink)", 12)}`),
    },
    {
      html: `<h3>Nos vestimos según el tiempo</h3><p>Antes de salir de casa miramos el tiempo para elegir la <mark>ropa</mark>.</p><p>Con <b>sol y calor</b>: camiseta, pantalón corto y gorra. Con <b>lluvia</b>: chubasquero, botas y paraguas. Con <b>frío y nieve</b>: abrigo, gorro, bufanda y guantes. Así estamos cómodos y no nos ponemos enfermos.</p>`,
      svg: svg("Tres niños vestidos para el sol, para la lluvia y para el frío", `${sol(46, 34, 12)}${nubeGris(130, 30, 0.9)}${lluvia(130, 44, 4)}${copo(214, 26, 7)}${copo(234, 40, 5)}${nino(46, 160, { c: "var(--sun)", s: 0.9 })}${gorra(46, 100, "var(--red)")}${nino(130, 160, { nina: true, c: "#e0b000", s: 0.9 })}${paraguas(130, 90, "var(--pen)")}${nino(214, 160, { c: "var(--pen)", s: 0.9 })}<path d="M204 114 h20" stroke="var(--red)" stroke-width="5"/><path d="M205 98 a9 8 0 0 1 18 0z" fill="var(--red)"/>${txt(46, 176, "calor", "var(--red)", 12)}${txt(130, 176, "lluvia", "var(--water)", 12)}${txt(214, 176, "frío", "var(--pen)", 12)}`),
    },
  ],
  figura: {
    titulo: "Los tipos de tiempo",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Cuatro tipos de tiempo con su símbolo: soleado, nublado, lluvia y nieve, y el viento">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${panel(20, 20, 140, 200, "var(--sun)")}${panel(170, 20, 140, 200, "var(--muted)")}${panel(320, 20, 140, 200, "var(--water)")}${panel(470, 20, 150, 200, "var(--pen)")}
      ${sol(90, 100, 30)}${nube(240, 100, 1.6)}${nubeGris(390, 84, 1.6)}${lluvia(390, 112, 6)}${lluvia(390, 136, 6)}${nubeGris(545, 80, 1.6)}${[505, 530, 555, 580].map((x, i) => copo(x, 116 + (i % 2) * 22, 7)).join("")}
      ${rot(90, 196, "soleado", { size: 20, color: "#b8860b", w: 800 })}${rot(240, 196, "nublado", { size: 20, color: "var(--muted)", w: 800 })}${rot(390, 196, "lluvia", { size: 20, color: "var(--water)", w: 800 })}${rot(545, 196, "nieve", { size: 20, color: "var(--pen)", w: 800 })}
      ${viento(210, 232)}${rot(400, 248, "y el viento: aire que se mueve", { size: 15, color: "var(--ink)" })}
    </svg>`,
  },
  video: V("isZyxGl9SuM", "el tiempo atmosférico para niños"),
  ejemplos: [
    { enunciado: "Hay nubes grises y oscuras. ¿Qué cogemos para salir?", pasos: ["Las nubes grises y oscuras suelen traer lluvia.", "Para no mojarnos usamos paraguas o chubasquero.", "También van bien las botas de agua."], resultado: "el paraguas y el chubasquero." },
    { enunciado: "El termómetro marca 35 grados. ¿Hace frío o calor?", pasos: ["Con muchos grados el líquido sube mucho.", "Si sube, hace calor.", "35 grados es mucho calor."], resultado: "hace mucho calor: gorra, agua y sombra." },
    { enunciado: "Las hojas de los árboles se mueven y la cometa vuela. ¿Qué tiempo hace?", pasos: ["Algo mueve las hojas y la cometa.", "Es el aire que se mueve.", "El aire que se mueve es el viento."], resultado: "hace viento." },
  ],
  errores: [
    "Creer que el tiempo atmosférico es la hora del reloj: es cómo está el cielo y el aire.",
    "Pensar que el viento no existe porque no se ve: lo notamos y mueve las cosas.",
    "Mirar el Sol directamente para ver si hace sol: daña los ojos.",
    "Pensar que la lluvia es mala: es necesaria para las plantas, los ríos y las personas.",
  ],
  ejercicios: [
    { q: "¿Qué es el tiempo atmosférico?", sol: "Cómo está el cielo y el aire en un lugar y en un momento." },
    { q: "Escribe cuatro tipos de tiempo.", sol: "Soleado, nublado, lluvioso y nevado (y también ventoso)." },
    { q: "¿De qué están hechas las nubes?", sol: "De gotitas de agua muy pequeñas." },
    { q: "¿Qué es la nieve?", sol: "Agua de las nubes que se congela con el frío y cae en copos." },
    { q: "¿Qué es el viento?", sol: "Aire que se mueve." },
    { q: "¿Con qué medimos la temperatura?", sol: "Con el termómetro." },
    { q: "Si el líquido del termómetro baja mucho, ¿qué tiempo hace?", sol: "Hace frío." },
    { q: "Dibuja el símbolo de la lluvia.", sol: "Una nube con gotas que caen." },
    { q: "¿Qué ropa te pones un día de nieve?", sol: "Abrigo, gorro, bufanda, guantes y botas." },
    { q: "Mira por la ventana y escribe qué tiempo hace hoy.", sol: "Respuesta libre: por ejemplo, soleado y con algo de viento." },
  ],
  quiz: [
    { q: "El tiempo atmosférico es…", o: ["cómo está el cielo y el aire", "la hora que es", "los días de la semana"], a: 0, e: "Sol, nubes, lluvia…" },
    { q: "Un cielo azul sin nubes es un día…", o: ["soleado", "nublado", "de nieve"], a: 0, e: "Brilla el Sol." },
    { q: "Las nubes grises y oscuras anuncian…", o: ["lluvia", "calor", "arcoíris seguro"], a: 0, e: "Puede llover pronto." },
    { q: "La nieve cae cuando hace…", o: ["mucho frío", "mucho calor", "mucho viento"], a: 0, e: "El agua se congela." },
    { q: "El aire que se mueve es…", o: ["el viento", "la lluvia", "la nieve"], a: 0, e: "Mueve hojas y cometas." },
    { q: "La temperatura se mide con…", o: ["el termómetro", "el reloj", "la regla"], a: 0, e: "En grados." },
    { q: "Si el termómetro sube, hace…", o: ["calor", "frío", "viento"], a: 0, e: "El líquido sube con el calor." },
    { q: "Con tormenta, con rayos, lo mejor es…", o: ["quedarse a cubierto", "ponerse bajo un árbol", "bañarse en la piscina"], a: 0, e: "A cubierto estamos seguros." },
    { q: "Una nube con copos es el símbolo de…", o: ["la nieve", "el sol", "el viento"], a: 0, e: "Copos blancos." },
    { q: "Un día de sol fuerte nos ponemos…", o: ["gorra y crema", "bufanda y guantes", "botas de agua"], a: 0, e: "Para protegernos del Sol." },
  ],
  examen: [
    { q: "¿Qué hacen las gotitas de las nubes cuando pesan mucho?", o: ["Caen en forma de lluvia", "Suben al Sol", "Se convierten en viento"], a: 0, e: "Así llueve." },
    { q: "¿Para qué sirve la lluvia?", o: ["Para regar las plantas y llenar los ríos", "Para nada", "Para que haga calor"], a: 0, e: "Es muy necesaria." },
    { q: "¿Qué símbolo usa el parte del tiempo para el viento?", o: ["Líneas curvas", "Un sol", "Copos"], a: 0, e: "Como aire que se mueve." },
    { q: "Hoy hay 0 grados. ¿Qué ropa elegimos?", o: ["Abrigo, gorro y guantes", "Bañador", "Camiseta de tirantes"], a: 0, e: "Hace mucho frío." },
  ],
  feynman: ["Qué es el tiempo atmosférico", "Los tipos de tiempo y sus símbolos", "Cómo medimos la temperatura y cómo nos vestimos"],
  mapaT: ["EL TIEMPO ATMOSFÉRICO", [
    ["Soleado", "cielo azul · calor", "#b8860b"],
    ["Nublado y lluvia", "nubes · gotas", "var(--water)"],
    ["Nieve y viento", "frío · aire que se mueve", "var(--pen)"],
    ["Temperatura", "termómetro · grados", "var(--red)"],
  ]],
  tarjetas: [
    ["¿Qué es el tiempo atmosférico?", "Cómo está el cielo y el aire"],
    ["Cielo azul y sin nubes", "Día soleado"],
    ["Las nubes están hechas de…", "Gotitas de agua"],
    ["Agua que cae de las nubes", "La lluvia"],
    ["Agua congelada en copos", "La nieve"],
    ["Aire que se mueve", "El viento"],
    ["Aparato para medir la temperatura", "El termómetro"],
    ["Ropa para la lluvia", "Paraguas, chubasquero y botas"],
  ],
  familias: [
    "Mirad juntos el parte del tiempo en la tele y comentad los símbolos.",
    "Haced un calendario del tiempo de la semana con dibujos de sol, nubes o lluvia.",
    "Antes de salir, decidid juntos la ropa según el tiempo que hace.",
    "Si tenéis termómetro, mirad la temperatura por la mañana y por la tarde.",
  ],
  saberes: "Sociedades y territorios: el tiempo atmosférico y sus elementos (sol, nubes, lluvia, nieve, viento, temperatura); observación y registro con símbolos; adaptación de la ropa y las actividades al tiempo",
  ideas: ["Calendario del tiempo en clase con símbolos que se cambian cada día.", "Termómetro de la ventana: leerlo cada mañana y anotarlo.", "Fabricar una manga de viento o un molinillo de papel."],
});
