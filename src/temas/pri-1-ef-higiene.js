// Educación Física 1º de Primaria: higiene y hábitos saludables.
const { mapa } = require("./_util");
const { svg, rot, big, nino, luna, estrella, corazon, suelo, tick, equis, PROF, FUENTES } = require("./_pri1-dib");
const L3 = require("./_pri1L3");

const PIEL = "#f3c9a1";
const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const botella = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-12" y="-50" width="24" height="50" rx="6" fill="var(--water)" opacity=".75"/><rect x="-7" y="-60" width="14" height="10" rx="2" fill="var(--pen)"/><rect x="-12" y="-34" width="24" height="12" fill="var(--card)" opacity=".6"/></g>`;
const gota = (x, y, c = "var(--water)") => `<path d="M${x} ${y - 10} q8 10 0 14 q-8 -4 0 -14z" fill="${c}"/>`;
const burbujas = (x, y) => [[0, 0, 6], [12, -10, 4], [-10, -14, 5], [6, -24, 3]].map(([dx, dy, r]) => `<circle cx="${x + dx}" cy="${y + dy}" r="${r}" fill="var(--card)" stroke="var(--water)" stroke-width="1.5"/>`).join("");
const manzana = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><circle r="11" fill="${c}"/><path d="M0 -10 q2 -7 6 -9" stroke="var(--ink)" stroke-width="2" fill="none"/><ellipse cx="6" cy="-15" rx="5" ry="3" fill="var(--leaf)"/></g>`;
const platano = (x, y) => `<path d="M${x - 18} ${y - 8} q18 22 38 -2 q-18 10 -38 2z" fill="var(--sun)" stroke="#c48a00" stroke-width="1.5"/>`;
const zanahoria = (x, y) => `<g transform="translate(${x} ${y}) rotate(30)"><path d="M-5 -16 L5 -16 L0 14z" fill="var(--inf)"/><path d="M0 -16 l-5 -8 M0 -16 l0 -9 M0 -16 l5 -8" stroke="var(--leaf)" stroke-width="2.5"/></g>`;
const zapatilla = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><path d="M-26 0 v-12 q0 -8 10 -10 l12 -4 q6 10 18 12 q12 2 12 14z" fill="${c}"/><rect x="-26" y="-3" width="52" height="5" rx="2" fill="var(--card)" stroke="var(--ink)" stroke-width="1"/><path d="M-12 -18 l8 6 M-6 -20 l8 6" stroke="var(--card)" stroke-width="2"/></g>`;
const camiseta = (x, y, c = "var(--pen)") => `<path d="M${x - 14} ${y - 40} l-16 10 l8 12 l8 -4 v26 h28 v-26 l8 4 l8 -12 l-16 -10 q-6 8 -14 8 q-8 0 -14 -8z" fill="${c}"/>`;
const cama = (x, y) => `<g><rect x="${x - 60}" y="${y - 24}" width="120" height="20" rx="4" fill="var(--water)" opacity=".5"/><rect x="${x - 64}" y="${y - 40}" width="8" height="40" fill="#8a5a2b"/><rect x="${x + 56}" y="${y - 30}" width="8" height="30" fill="#8a5a2b"/><rect x="${x - 54}" y="${y - 34}" width="24" height="12" rx="5" fill="var(--card)" stroke="var(--line)"/></g>`;

module.exports = {
  materia: "Educación Física",
  curso: "1-primaria",
  titulo: "Higiene y hábitos saludables",
  minutos: 50,
  objetivos: ["Adquirir hábitos de higiene antes y después de la actividad física", "Conocer la ropa y el calzado adecuados para moverse", "Relacionar beber agua, comer sano y dormir con estar sano"],
  claves: ["higiene", "lavarse las manos", "agua", "ropa deportiva", "comer sano", "dormir"],
  pregunta: {
    texto: "Después de jugar en el patio, ¿cómo tienes las manos? ¿Qué haces antes de comer?",
    respuesta: "¡Seguro que sucias! Antes de comer nos <mark>lavamos las manos</mark> con agua y jabón. Es un <mark>hábito saludable</mark>.",
  },
  lectura: L3.lect("La mochila de Carla", `<p>Mañana hay Educación Física y Carla prepara su bolsa de deporte con su padre.</p><p>«¿Qué necesito?», pregunta Carla.</p><p>Meten una toalla pequeña, una camiseta limpia y una botella de agua con su nombre.</p><p>Carla se pone las zapatillas deportivas. Intenta atarse los cordones sola: lazo, vuelta y... ¡lo consigue!</p><p>Al día siguiente, después de correr, Carla tiene mucho calor. Bebe agua, se lava la cara y se cambia de camiseta.</p><p>«¡Qué fresquita estoy!», dice sonriendo.</p><p>¿Qué hacemos cada día para estar sanos? Lo vas a aprender en este tema.</p>`),
  bloques: [
    {
      html: `<h3>1. Cuidar mi cuerpo</h3><p>Los <mark>hábitos saludables</mark> son cosas buenas que hacemos cada día. Nos ayudan a estar sanos.</p><p>Por ejemplo: <b>lavarnos</b>, <b>movernos</b>, <b>comer bien</b>, beber agua y <b>dormir</b>.</p><p>Si los repetimos cada día, se hacen fáciles. Al final los hacemos casi sin pensar. ¡Nuestro cuerpo nos lo agradece!</p><p>Vamos a conocerlos uno a uno.</p><p>Un buen hábito necesita constancia. Haz un cartel y marca cada día que lo cumplas.</p>`,
      svg: svg("Cuatro dibujos de hábitos saludables: jabón, una zapatilla, una manzana y una luna", `${[[burbujas(0, -6), "lavarme"], [zapatilla(0, -10, "var(--red)"), "moverme"], [manzana(0, -16), "comer"], [luna(-4, -32, 14), "dormir"]].map(([d, t], i) => `<rect x="${12 + i * 61}" y="40" width="54" height="86" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><g transform="translate(${39 + i * 61} 100)">${d}</g>${etq(39 + i * 61, 118, t, "var(--muted)", 10)}`).join("")}${rot(130, 158, "Hábitos saludables", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>2. Lavarse las manos</h3><p>Las manos tocan muchas cosas y se llenan de <mark>gérmenes</mark>. No se ven, pero pueden ponernos enfermos.</p><p>Nos lavamos las manos <b>antes de comer</b>. También después del baño y de jugar.</p><p>Usamos <b>agua y jabón</b>. Frotamos bien las palmas, los dedos y las uñas. ¡Mientras, cantamos una canción corta!</p><p>Al final, nos las secamos bien.</p><p>Si estornudas o toses, tápate con el codo. Así no pasas gérmenes a los demás.</p>`,
      svg: svg("Dos manos frotándose bajo un grifo con burbujas de jabón", `<path d="M90 30 h60 v14 h-14 v10 h-32 v-10 h-14z" fill="var(--muted)"/>${gota(120, 70)}${gota(112, 86)}${gota(128, 92)}<ellipse cx="108" cy="122" rx="24" ry="14" fill="${PIEL}" stroke="var(--ink)" stroke-width="1.5" transform="rotate(-20 108 122)"/><ellipse cx="134" cy="120" rx="24" ry="14" fill="${PIEL}" stroke="var(--ink)" stroke-width="1.5" transform="rotate(20 134 120)"/>${burbujas(80, 112)}${burbujas(170, 110)}<rect x="196" y="120" width="34" height="22" rx="6" fill="#f4a7c4"/>${etq(213, 160, "jabón", "var(--muted)")}${rot(110, 166, "Agua y jabón", { color: "var(--water)", size: 14 })}`),
      video: { id: "GRQnzN05a4E", titulo: "Cómo lavarse las manos y cepillarse los dientes", canal: "Hurra Canciones Infantiles", vistas: 14062432 },
    },
    {
      html: `<h3>3. Ropa para Educación Física</h3><p>Para movernos bien, llevamos <mark>ropa cómoda</mark>: chándal o pantalón corto y camiseta.</p><p>Las <b>zapatillas</b> deben ser deportivas y estar bien <b>atadas</b>. Si los cordones están sueltos, podemos tropezar.</p><p>Si hace sol, llevamos gorra. Y quitamos de la ropa collares o cosas que puedan engancharse.</p><p>¡Así estamos listos para jugar!</p><p>Aprende a atarte los cordones solo. ¡Practica en casa con un adulto!</p>`,
      svg: svg("Una camiseta, unas zapatillas atadas y una gorra", `${camiseta(60, 110, "var(--pen)")}${zapatilla(150, 120, "var(--red)")}<path d="M180 96 q20 -30 44 0z" fill="var(--leaf)"/><path d="M216 96 h16" stroke="var(--leaf)" stroke-width="5" stroke-linecap="round"/>${etq(60, 140, "camiseta")}${etq(150, 140, "zapatillas atadas")}${etq(204, 120, "gorra")}${rot(130, 168, "Ropa cómoda para moverse", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>4. Después de hacer ejercicio</h3><p>Cuando hacemos ejercicio, <mark>sudamos</mark>. El sudor ayuda a que el cuerpo no se caliente demasiado.</p><p>Al terminar, nos lavamos la <b>cara</b> y las <b>manos</b>. Si podemos, nos cambiamos de <b>camiseta</b>.</p><p>En la bolsa llevamos una toalla pequeña y una camiseta limpia. En casa, nos <b>duchamos</b>.</p><p>Así estamos limpios y frescos.</p><p>Cada uno usa su toalla y su botella. No las compartimos con los demás.</p>`,
      svg: svg("Una bolsa de deporte con una toalla y una camiseta limpia, y un niño secándose la cara", `${nino(70, 150, { c: "var(--pen)", pose: "palmas" })}<rect x="52" y="100" width="36" height="12" rx="4" fill="var(--sun)"/>${gota(42, 80)}${gota(98, 76)}<rect x="140" y="104" width="90" height="46" rx="12" fill="var(--leaf)"/><path d="M160 104 q25 -24 50 0" stroke="var(--ink)" stroke-width="3" fill="none"/><rect x="184" y="88" width="32" height="20" rx="3" fill="var(--inf)"/><rect x="150" y="90" width="26" height="18" rx="3" fill="var(--sun)"/>${suelo(150)}${rot(130, 172, "Toalla y camiseta limpia", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>5. Beber agua</h3><p>Cuando sudamos, el cuerpo pierde <mark>agua</mark>. Hay que recuperarla.</p><p>Por eso bebemos agua <b>antes, durante y después</b> de hacer ejercicio. Poco a poco, sin beber muy deprisa.</p><p>Cada uno lleva su <b>botella</b> con su nombre. El agua es la mejor bebida: mejor que los refrescos con azúcar.</p><p>Si tienes sed, pide permiso para beber.</p><p>En verano, cuando hace mucho calor, bebemos todavía más agua.</p>`,
      svg: svg("Una niña bebe agua de su botella y al lado hay una botella grande con su nombre", `${nino(80, 150, { c: "var(--inf)", nina: true, pose: "canta" })}${botella(98, 98, 0.5)}${botella(180, 150, 1.6)}${rot(180, 116, "LUCÍA", { color: "var(--pen)", size: 11 })}${gota(230, 60)}${gota(214, 44)}${suelo(150)}${rot(130, 172, "El agua es la mejor bebida", { color: "var(--water)", size: 13 })}`),
    },
    {
      html: `<h3>6. Comer sano</h3><p>Para tener <mark>energía</mark> y jugar, necesitamos comer bien.</p><p>Empezamos el día con un buen <b>desayuno</b>. Comemos <b>fruta</b> y <b>verdura</b> cada día.</p><p>En el recreo, mejor un bocadillo o una pieza de fruta. Los dulces y las chuches, solo de vez en cuando. ¡Comer de todo nos hace fuertes!</p><p>Y bebemos agua en cada comida.</p><p>Después de comer, esperamos un poco antes de hacer ejercicio fuerte.</p>`,
      svg: svg("Un plato con una manzana, un plátano y una zanahoria", `<ellipse cx="130" cy="112" rx="96" ry="40" fill="var(--card)" stroke="var(--line)" stroke-width="3"/>${manzana(84, 108)}${platano(132, 112)}${zanahoria(184, 108)}${manzana(108, 128, "var(--leaf)")}${rot(130, 168, "Fruta y verdura cada día", { color: "var(--leaf)", size: 14 })}`),
    },
    {
      html: `<h3>7. Dormir y descansar</h3><p>Mientras dormimos, el cuerpo <mark>descansa</mark> y crece.</p><p>Los niños de tu edad duermen unas <b>10 u 11 horas</b> cada noche.</p><p>Antes de dormir, mejor sin pantallas. Leemos un cuento o hablamos un rato. Si dormimos bien, al día siguiente tenemos energía. ¡Y aprendemos mejor!</p><p>¡Buenas noches!</p><p>Ir a la cama siempre a la misma hora ayuda a dormir mejor.</p>`,
      svg: svg("Un niño duerme en la cama de noche con la luna y estrellas en la ventana", `<rect x="160" y="24" width="76" height="64" rx="6" fill="#1c2550"/>${luna(190, 40, 14)}${estrella(222, 70, 6, "#ffe9a0")}${cama(100, 140)}<circle cx="60" cy="112" r="10" fill="${PIEL}"/><path d="M54 112 h4 M62 112 h4" stroke="var(--ink)" stroke-width="1.5"/><path d="M60 102 q-10 -2 -10 8" stroke="var(--ink)" stroke-width="4" fill="none"/><path d="M68 116 h88 v10 h-88z" fill="var(--pen)" opacity=".7"/>${rot(82, 66, "zzz", { color: "var(--muted)", size: 16 })}${suelo(150)}${rot(130, 172, "Dormir 10 u 11 horas", { color: "var(--pen)" })}`),
    },
    L3.B("8. La postura y la mochila", `<p>Cuidar la <mark>espalda</mark> también es un hábito sano.</p><p>Nos sentamos con la espalda apoyada y los pies en el suelo. No nos tumbamos sobre la mesa.</p><p>La <b>mochila</b> se lleva con las dos asas, bien pegada a la espalda. Y solo con lo necesario.</p><p>Si pesa mucho, mejor una mochila con ruedas. ¡Tu espalda te lo agradecerá!</p>`, "Un niño lleva la mochila con las dos asas y la espalda recta", `${L3.nino(90, 150, { c: "var(--pen)", s: 1.6 })}<rect x="60" y="66" width="22" height="34" rx="6" fill="var(--red)"/><path d="M76 66 L90 70 M76 92 L90 88" stroke="var(--red)" stroke-width="3"/>${L3.tick(180, 70)}${L3.t(190, 100, "dos asas", "var(--leaf)", 14)}${L3.t(190, 122, "espalda recta", "var(--leaf)", 14)}${L3.suelo(152)}`),
    {
      html: `<h3>9. ¿Para qué sirve? Estar sano y feliz</h3><p>Con estos hábitos nos ponemos <mark>menos enfermos</mark>.</p><p>Tenemos más <b>energía</b> para jugar, aprender y estar con los amigos.</p><p>Además, movernos cada día pone contento al corazón. Nos ayuda a estar de buen humor. Cuidar el cuerpo es <b>quererse</b> a uno mismo.</p><p>¿Qué hábito vas a mejorar esta semana?</p><p>Elige un hábito para mejorar esta semana y cuéntaselo a tu familia.</p>`,
      svg: svg("Un niño sonriente con los brazos arriba y un corazón grande", `${nino(90, 150, { c: "var(--leaf)", pose: "arriba", s: 1.3 })}${corazon(186, 90, 3.2)}${rot(186, 140, "¡Sano y feliz!", { color: "var(--red)", size: 14 })}${suelo(150)}${rot(130, 172, "Cuidarse es quererse", { color: "var(--pen)" })}`),
      video: { id: "xyPYJ0K9e2Y", titulo: "Ejercicio físico para niños: beneficios del deporte", canal: "Smile and Learn - Español", vistas: 1660176 },
    },
    {
      html: `<h3>10. Juego: ¿sano o no sano?</h3><p>Escucha y di <mark>sí</mark> o <mark>no</mark>.</p><p>«Me lavo las manos antes de comer». <b>Sí</b>.</p><p>«Juego con las zapatillas desatadas». <b>No</b>.</p><p>«Bebo agua después de correr». <b>Sí</b>.</p><p>«Me acuesto muy tarde con la tableta». <b>No</b>.</p><p>Ahora inventa tú más frases. ¿Quién acierta todas?</p><p>¡Muy bien!</p><p>Podéis jugar con tarjetas dibujadas: verde para sano y roja para no sano.</p>`,
      svg: svg("Dos tarjetas: sí con un visto verde y no con una equis roja", `<rect x="30" y="30" width="90" height="96" rx="12" fill="var(--card)" stroke="var(--ok)" stroke-width="3"/>${tick(75, 70)}${big(75, 112, "SANO", "var(--ok)", 18)}<rect x="140" y="30" width="90" height="96" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>${equis(185, 68)}${big(185, 112, "NO", "var(--red)", 18)}${rot(130, 158, "¿Es un hábito sano?", { color: "var(--pen)", size: 15 })}`),
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Los <mark>hábitos saludables</mark> nos ayudan a estar sanos.</p><p>Nos lavamos las manos con agua y jabón. En Educación Física llevamos ropa cómoda y zapatillas atadas.</p><p>Después del ejercicio, nos aseamos y nos cambiamos. Bebemos agua antes, durante y después.</p><p>Comemos sano, dormimos unas diez horas y cuidamos la espalda.</p>`, "Lista de repaso: manos limpias, zapatillas atadas, agua, comer sano y dormir", `${L3.lista(["Manos limpias", "Zapatillas atadas", "Beber agua", "Comer sano", "Dormir bien"], 50, 34, 28)}${L3.luna(222, 140, 14)}`),
  ],
  figura: {
    titulo: "Mis hábitos saludables",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Seis hábitos: lavarse las manos, ropa y zapatillas atadas, beber agua, comer fruta, moverse cada día y dormir bien">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["Lavarme las manos", burbujas(0, -10), "var(--water)"], ["Zapatillas atadas", zapatilla(0, -8, "var(--red)"), "var(--red)"], ["Beber agua", botella(0, 6, 0.9), "var(--water)"], ["Comer fruta", `${manzana(-14, -14)}${platano(14, -6)}`, "var(--leaf)"], ["Moverme cada día", nino(0, 18, { c: "var(--inf)", pose: "salta", s: 0.75 }), "var(--inf)"], ["Dormir bien", luna(-4, -36, 18), "var(--pen)"]].map(([t, dib, c], i) => {
        const x = 20 + (i % 3) * 205, y = i < 3 ? 16 : 156;
        return `<rect x="${x}" y="${y}" width="190" height="128" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/><g transform="translate(${x + 95} ${y + 76}) scale(1.6)">${dib}</g>${rot(x + 95, y + 112, t, { color: c, size: 15 })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "mHy3p3QakSQ", titulo: "Bebé Juan aprende hábitos de higiene: ¡adiós gérmenes!", canal: "Little Angel Español", vistas: 6663199, megusta: 4345, busqueda: "hábitos de higiene para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Vuelves del recreo y vas a comer. ¿Qué haces primero?",
      pasos: ["Pienso: he tocado la pelota, el suelo y el columpio.", "Mis manos tienen gérmenes aunque no los vea.", "Me lavo con agua y jabón, frotando bien."],
      resultado: "me lavo las manos antes de comer." },
    { enunciado: "Tienes Educación Física. ¿Qué te pones?",
      pasos: ["Elijo ropa cómoda: chándal y camiseta.", "Me pongo zapatillas deportivas.", "Me ato bien los cordones."],
      resultado: "ropa cómoda y zapatillas bien atadas." },
    { enunciado: "Has corrido mucho y tienes sed. ¿Qué bebes?",
      pasos: ["Al sudar, el cuerpo pierde agua.", "La mejor bebida es el agua.", "Bebo de mi botella, poco a poco."],
      resultado: "bebo agua de mi botella." },
    { enunciado: "Vas a estornudar en clase. ¿Qué haces?", pasos: ["Giro la cabeza para no estornudar sobre nadie.", "Me tapo la boca y la nariz con el codo.", "Después, si puedo, me lavo las manos."], resultado: "me tapo con el codo y me lavo las manos." },
  ],
  errores: [
    "Lavarse solo con agua y muy deprisa: hay que usar jabón y frotar bien.",
    "Jugar con los cordones desatados: podemos tropezar y caernos.",
    "Beber refrescos con azúcar en vez de agua: el agua es lo mejor.",
    "Acostarse tarde mirando pantallas: los niños necesitan dormir 10 u 11 horas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Lávate las manos cantando una canción corta.", sol: "Con agua y jabón, frotando palmas, dedos y uñas." },
    { nivel: "básico", q: "¿Cuándo hay que lavarse las manos? Di dos momentos.", sol: "Antes de comer y después de ir al baño (también después de jugar)." },
    { nivel: "básico", q: "Átate las zapatillas (o pide ayuda para aprender).", sol: "Los cordones deben quedar bien atados." },
    { nivel: "básico", q: "¿Qué llevas en la bolsa de Educación Física?", sol: "Una toalla pequeña, una camiseta limpia y la botella de agua." },
    { nivel: "básico", q: "¿Qué bebida es la mejor después de correr?", sol: "El agua." },
    { nivel: "básico", q: "Dibuja un plato sano con fruta y verdura.", sol: "Por ejemplo: manzana, plátano, zanahoria, tomate." },
    { nivel: "medio", q: "¿Cuántas horas tienen que dormir los niños?", sol: "Unas 10 u 11 horas." },
    { nivel: "medio", q: "¿Por qué sudamos?", sol: "Para que el cuerpo no se caliente demasiado." },
    { nivel: "básico", q: "Di un hábito sano que ya haces cada día.", sol: "Respuesta libre: lavarse los dientes, desayunar, moverse…" },
    { nivel: "medio", q: "¿Sano o no sano? «Como chuches todos los días».", sol: "No sano: las chuches, solo de vez en cuando." },
    L3.b("¿Con qué te tapas al toser?", "Con el codo."),
    L3.m("Ordena: secar, mojar, aclarar, frotar con jabón.", "Mojar, frotar con jabón, aclarar y secar."),
    L3.m("Prepara tu bolsa de Educación Física y di qué llevas.", "Toalla pequeña, camiseta limpia y botella de agua."),
    L3.m("Rodea lo sano: dormir 10 horas, comer chuches cada día, beber agua.", "Dormir 10 horas y beber agua."),
    L3.m("¿Cómo se lleva bien la mochila?", "Con las dos asas y pegada a la espalda."),
    L3.m("¿Por qué no compartimos la botella de agua?", "Para no pasarnos gérmenes."),
    L3.a("Haz un cartel de hábitos y marca los que cumples esta semana.", "Cartel con dibujos y una marca por día."),
    L3.a("Explica por qué bebemos más agua en verano.", "Porque sudamos más y el cuerpo pierde más agua."),
    L3.a("Inventa una canción corta para lavarte las manos.", "Una canción que dure unos 20 segundos."),
    L3.a("Di qué haces desde que llegas de Educación Física hasta que cenas.", "Por ejemplo: lavarme, cambiarme, merendar fruta y ducharme."),
    L3.a("Siéntate bien en la silla y explica cómo pones el cuerpo.", "Espalda apoyada, pies en el suelo y sin tumbarse en la mesa."),
    L3.a("Elige un hábito para mejorar y explica cómo lo harás.", "Respuesta personal, por ejemplo: acostarme antes sin pantallas."),
  ],
  quiz: [
    { q: "Antes de comer…", o: ["me lavo las manos", "juego con tierra", "me pongo el abrigo"], a: 0, e: "Con agua y jabón." },
    { q: "Para lavarme las manos uso…", o: ["agua y jabón", "solo aire", "arena"], a: 0, e: "El jabón quita los gérmenes." },
    { q: "Las zapatillas tienen que estar…", o: ["bien atadas", "desatadas", "mojadas"], a: 0, e: "Así no tropezamos." },
    { q: "En Educación Física llevo ropa…", o: ["cómoda", "de fiesta", "muy apretada"], a: 0, e: "Para moverme bien." },
    { q: "Al hacer ejercicio sudamos para…", o: ["no calentarnos demasiado", "oler bien", "dormir"], a: 0, e: "El sudor refresca el cuerpo." },
    { q: "La mejor bebida es…", o: ["el agua", "un refresco", "un batido de chocolate"], a: 0, e: "El agua." },
    { q: "Cada día comemos…", o: ["fruta y verdura", "solo chuches", "nada"], a: 0, e: "Fruta y verdura cada día." },
    { q: "Los niños duermen unas…", o: ["10 u 11 horas", "3 horas", "20 horas"], a: 0, e: "10 u 11 horas." },
    { q: "Antes de dormir, mejor…", o: ["leer un cuento", "jugar con la tableta", "comer chuches"], a: 0, e: "Sin pantallas se duerme mejor." },
    { q: "Los hábitos saludables nos ayudan a…", o: ["estar sanos", "enfermar", "cansarnos"], a: 0, e: "A estar sanos y con energía." },
    L3.Q("La mochila se lleva…", ["con las dos asas", "con una mano arrastrando", "en la cabeza"], 0, "Así cuidamos la espalda."),
    L3.Q("Al toser nos tapamos con…", ["el codo", "la mano del compañero", "nada"], 0, "Para no pasar gérmenes."),
  ],
  examen: [
    { q: "¿Qué es un hábito saludable?", o: ["Algo bueno que hacemos cada día", "Un juego", "Una comida"], a: 0, e: "Como lavarse o dormir bien." },
    { q: "¿Qué hago después de hacer ejercicio?", o: ["Me lavo y me cambio de camiseta", "Me voy sin lavarme", "Me como un pastel"], a: 0, e: "Higiene después del ejercicio." },
    { q: "¿Cuándo bebemos agua al hacer deporte?", o: ["Antes, durante y después", "Nunca", "Solo al día siguiente"], a: 0, e: "Antes, durante y después." },
    { q: "¿Qué desayuno es más sano?", o: ["Leche, pan y fruta", "Chuches", "Nada"], a: 0, e: "Un desayuno completo da energía." },
    L3.Q("¿Por qué nos lavamos las manos?", ["Para quitar los gérmenes", "Para que brillen", "Porque sí"], 0, "Los gérmenes pueden enfermarnos."),
    L3.Q("En la bolsa de Educación Física llevo…", ["toalla y camiseta limpia", "juguetes", "chuches"], 0, "Para asearme después."),
  ],
  feynman: ["Cómo y cuándo me lavo las manos", "Qué ropa llevo para hacer ejercicio", "Por qué es importante beber agua y dormir"],
  mapa: mapa("HÁBITOS SANOS", "var(--pri)", [
    ["Higiene", "manos · cara · ducha", "var(--water)"],
    ["Ropa", "cómoda · zapatillas atadas", "var(--red)"],
    ["Agua y comida", "agua · fruta · verdura", "var(--leaf)"],
    ["Descanso", "dormir 10 u 11 horas", "var(--pen)"],
  ], 240),
  tarjetas: [
    ["¿Qué es un hábito saludable?", "Algo bueno para la salud que hacemos cada día."],
    ["¿Con qué me lavo las manos?", "Con agua y jabón."],
    ["¿Cuándo me lavo las manos?", "Antes de comer, después del baño y de jugar."],
    ["¿Cómo llevo las zapatillas?", "Bien atadas."],
    ["¿Por qué sudamos?", "Para que el cuerpo no se caliente demasiado."],
    ["¿Qué es lo mejor para beber?", "El agua."],
    ["¿Qué como cada día?", "Fruta y verdura."],
    ["¿Cuánto duermo?", "Unas 10 u 11 horas."],
    ["¿Cómo llevo la mochila?", "Con las dos asas, pegada a la espalda"],
    ["¿Con qué me tapo al toser?", "Con el codo"],
  ],
  glosario: [
    ["Hábito", "Algo que hacemos todos los días."],
    ["Saludable", "Que es bueno para la salud."],
    ["Higiene", "Lo que hacemos para estar limpios."],
    ["Gérmenes", "Seres muy pequeños que pueden ponernos enfermos."],
    ["Sudor", "Agua que sale por la piel cuando tenemos calor."],
    ["Asearse", "Lavarse la cara, las manos y el cuerpo."],
    ["Postura", "La forma de poner el cuerpo al sentarse o estar de pie."],
    ["Descanso", "Dormir y estar tranquilo para recuperar fuerzas."],
    ["Hidratarse", "Beber agua para que al cuerpo no le falte."],
  ],
  situacion: L3.sit("La semana de los hábitos", "Vamos a hacer durante una semana un reto de hábitos saludables y a registrar nuestros avances.", ["Hacemos un cartel con cinco hábitos: manos, agua, fruta, dormir y mochila.", "Cada día marcamos con una pegatina los hábitos cumplidos.", "Traemos la bolsa de Educación Física completa los días que toca.", "El viernes contamos las pegatinas y decimos qué hábito queremos seguir."], "Un cartel de clase con los hábitos cumplidos durante la semana.", ["Cumple los hábitos de higiene.", "Trae su bolsa completa.", "Explica por qué cada hábito es sano."]),
  familias: [
    "Preparad juntos la bolsa de Educación Física: toalla, camiseta limpia y botella con nombre.",
    "Practicad a atar los cordones con un truco sencillo, como «las orejas de conejo».",
    "Dejad que elija la fruta del recreo de la semana.",
    "Mantened una hora fija para acostarse, sin pantallas antes de dormir.",
  ],
  profesores: PROF("Educación Física: hábitos de higiene corporal y postural asociados a la actividad física, indumentaria adecuada, hidratación, alimentación y descanso como base de la salud", ["Rutina de aseo al final de cada sesión (manos, cara y cambio de camiseta).", "Revisión de cordones antes de empezar: «¿zapatillas listas?».", "Mural de la semana saludable con pegatinas por hábitos cumplidos."]),
  fuentes: FUENTES,
  revisado: "2026-11-14",
};
