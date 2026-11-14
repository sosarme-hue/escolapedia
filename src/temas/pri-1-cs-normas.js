// Ciencias Sociales 1º de Primaria. Nivel libro: lectura, apartados numerados, ejercicios por niveles, glosario y situación.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, arbol, casa, check, RD } = require("./_peques");
const L3 = require("./_pri1L3");

const corazon = (x, y, s = 1, c = "var(--red)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 10 C -24 -6 -14 -26 0 -14 C 14 -26 24 -6 0 10 Z" fill="${c}"/>`;
const bocadillo = (x, y, w, h, t, size = 13, c = "var(--ink)") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${txt(x + w / 2, y + h / 2 + 5, t, { size, color: c })}`;
const semaforo = (x, y, s = 1, on = 0) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-16" y="-46" width="32" height="92" rx="8" fill="var(--ink)"/>${["var(--red)", "var(--sun)", "var(--leaf)"].map((c, i) => `<circle cy="${-28 + i * 28}" r="10" fill="${c}" ${on === -1 || on === i ? "" : 'fill-opacity=".25"'}/>`).join("")}</g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "Las normas y la convivencia",
  minutos: 50,
  objetivos: ["Saber qué es una norma y para qué sirve", "Conocer normas de casa, del colegio y de la calle", "Usar las palabras mágicas y resolver los conflictos hablando", "Conocer algunos derechos y deberes de los niños"],
  claves: ["norma", "convivir", "respeto", "derecho", "deber", "conflicto"],
  pregunta: {
    texto: "Imagina un partido de fútbol sin reglas: todos cogen el balón con la mano y nadie sabe dónde está la portería. ¿Qué pasaría?",
    respuesta: "¡Sería un lío y todos se enfadarían! Las <mark>reglas</mark> o <b>normas</b> sirven para que todos sepamos qué hacer y podamos jugar y vivir juntos a gusto.",
  },
  lectura: L3.lect("El partido sin reglas", `<p>En el recreo, los niños de 1.º juegan al fútbol. Pero hoy nadie quiere seguir las reglas.</p><p>Unai coge el balón con las manos. Clara mete gol en su propia portería. Todos gritan a la vez.</p><p>Al final, Martín se enfada y se va. «¡Así no se puede jugar!»</p><p>La maestra se acerca. «¿Qué ha pasado?», pregunta.</p><p>«No hay reglas», dice Clara. «Cada uno hace lo que quiere.»</p><p>Juntos deciden tres normas: no se toca el balón con la mano, nadie empuja y todos juegan.</p><p>Ahora el partido es divertido. ¿Para qué sirven las normas? Vamos a descubrirlo.</p>`),
  bloques: [
    {
      html: `<h3>1. Vivimos juntos</h3><p>Vivimos con otras personas: la familia, los compañeros y los vecinos. Vivir juntos se llama <mark>convivir</mark>.</p><p>Para convivir bien, nos tratamos con <b>respeto</b>. Escuchamos a los demás y compartimos.</p><p>Nadie es más que nadie. Todos somos importantes.</p><p>Así todos estamos más contentos y tranquilos.</p><p>Convivir también es aceptar que somos distintos. Cada persona piensa y siente a su manera.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Niños distintos dados de la mano bajo un corazón">${BG}
        ${[["var(--red)", "#6b3f1f"], ["var(--pen)", "var(--ink)"], ["var(--leaf)", "#e3b04b"], ["var(--sun)", "#6b3f1f"], ["var(--inf)", "var(--ink)"]].map(([c, p], i) => persona(34 + i * 48, 160, 92, c, p)).join("")}
        <path d="M52 112 H 64 M100 112 H 112 M148 112 H 160 M196 112 H 208" stroke="#f2c9a0" stroke-width="6" stroke-linecap="round"/>
        ${corazon(130, 34, 1.2)}
        <path d="M14 162 H 246" stroke="var(--line)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>2. ¿Qué es una norma?</h3><p>Una <mark>norma</mark> nos dice cómo debemos comportarnos. También se llama <b>regla</b>.</p><p>Hay normas en los juegos y en casa. También en el cole y en la calle.</p><p>Las normas nos ayudan a estar <b>seguros</b> y a no pelearnos. También a cuidar las cosas. Si todos las cumplimos, se vive mejor.</p><p>Algunas normas son leyes. Las cumplen todas las personas de un país, también los mayores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cartel con las normas de clase y tres marcas de correcto">${BG}
        <rect x="50" y="24" width="160" height="136" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
        ${txt(130, 50, "NORMAS", { size: 17, color: "var(--pen)", font: D, weight: 800 })}
        ${["Escuchar", "Compartir", "Recoger"].map((t, i) => check(76, 78 + i * 28) + txt(94, 83 + i * 28, t, { size: 13, anchor: "start" })).join("")}</svg>`,
    },
    {
      html: `<h3>3. Normas en casa</h3><p>En casa también hay <mark>normas</mark>. Cada familia tiene las suyas.</p><p>Por ejemplo: lavarse las manos antes de comer. Recoger los juguetes. Ayudar a poner la mesa.</p><p>No gritar ni dar portazos. Respetar el descanso de los demás. Avisar si salimos a jugar.</p><p>Las normas de casa pueden cambiar cuando creces. Ahora quizá ya puedes ayudar más que cuando eras pequeño.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dentro de casa, un niño guarda los juguetes y otro se lava las manos">${BG}
        <path d="M20 56 L 130 14 L 240 56 Z" fill="var(--red)"/><rect x="28" y="56" width="204" height="110" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        ${persona(76, 160, 84, "var(--leaf)")}<rect x="96" y="134" width="30" height="26" fill="var(--sun)"/><circle cx="104" cy="132" r="5" fill="var(--pen)"/>
        ${persona(176, 160, 84, "var(--pen)", "#6b3f1f")}<rect x="192" y="118" width="32" height="10" rx="4" fill="var(--line)"/><path d="M208 108 V 116" stroke="var(--muted)" stroke-width="3"/><g fill="none" stroke="var(--water)" stroke-width="1.5"><circle cx="200" cy="112" r="3"/><circle cx="214" cy="106" r="3"/></g></svg>`,
    },
    {
      html: `<h3>4. Normas en el cole</h3><p>En el colegio somos <mark>muchos</mark>. Por eso las normas son muy importantes.</p><p>Levantamos la mano para hablar. Esperamos el turno. Cuidamos el material. Hacemos fila sin empujar.</p><p>En el patio jugamos sin hacer daño. Si hay un problema, avisamos a un maestro.</p><p>Las normas de clase se pueden poner en un cartel con dibujos. Así todos las recordamos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una fila ordenada de niños detrás de la maestra">${BG}
        ${persona(40, 160, 120, "var(--red)", "#6b3f1f")}${[0, 1, 2, 3].map((i) => persona(92 + i * 44, 160, 80, ["var(--pen)", "var(--leaf)", "var(--sun)", "var(--inf)"][i])).join("")}
        <path d="M14 162 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(170, 34, "en fila, sin empujar", { size: 13, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>5. Normas en la calle</h3><p>En la calle y en el parque compartimos el espacio con <mark>todos</mark>.</p><p>Cruzamos por el paso de peatones. Tiramos la basura a la papelera. Esperamos el turno en el columpio.</p><p>No pisamos el césped si hay un cartel. Recogemos lo que ensucia nuestro perro.</p><p>En la biblioteca, el autobús o el cine hablamos bajito. Así no molestamos a nadie.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un parque con un columpio, una niña esperando su turno y una papelera">${BG}
        <path d="M60 50 H 140 M68 50 L 56 150 M132 50 L 144 150" stroke="var(--pen)" stroke-width="5" fill="none"/>
        <path d="M100 50 V 110" stroke="var(--ink)" stroke-width="2"/><rect x="88" y="108" width="24" height="5" fill="var(--red)"/>${persona(100, 110, 46, "var(--leaf)")}
        ${persona(178, 156, 84, "var(--inf)", "#6b3f1f")}
        <path d="M214 156 L 210 126 H 236 L 232 156 Z" fill="var(--leaf)"/>${arbol(30, 156, 0.6)}
        <path d="M14 158 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(186, 40, "espero mi turno", { size: 12, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>6. Las palabras mágicas</h3><p>Hay palabras que hacen que todos nos sintamos bien. Son las <mark>palabras mágicas</mark>.</p><p>Decimos <b>«buenos días»</b> al llegar. Decimos <b>«por favor»</b> al pedir algo y <b>«gracias»</b> al recibirlo.</p><p>Si nos equivocamos o hacemos daño, decimos <b>«perdón»</b>.</p><p>Al irnos, decimos «adiós» o «hasta mañana».</p><p>Las palabras mágicas cuestan poco y alegran mucho. ¡Prueba a decirlas hoy a tu familia!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro bocadillos: buenos días, por favor, gracias y perdón">${BG}
        ${bocadillo(16, 20, 108, 34, "Buenos días", 13, "var(--sun)")}${bocadillo(136, 20, 108, 34, "Por favor", 13, "var(--pen)")}
        ${bocadillo(16, 70, 108, 34, "Gracias", 13, "var(--leaf)")}${bocadillo(136, 70, 108, 34, "Perdón", 13, "var(--red)")}
        <g transform="translate(130 146)"><path d="M-30 20 L 20 -20" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/><path d="M20 -20 l 4 -12 l 4 12 l 12 4 l -12 4 l -4 12 l -4 -12 l -12 -4 Z" fill="var(--sun)"/></g></svg>`,
      video: { id: "oTtHFLDwfag", titulo: "Las Palabras Mágicas | Gracias, Perdón y Por Favor", canal: "HiDino Canciones Para Niños", vistas: 269467, megusta: 1229 },
    },
    {
      html: `<h3>7. Derechos y deberes</h3><p>Todos los niños y niñas tienen <mark>derechos</mark>. Tienen derecho a tener una familia, una casa y comida. También a ir al colegio, a jugar y a que los cuiden.</p><p>También tenemos <b>deberes</b>: respetar a los demás, cuidar las cosas y cumplir las normas.</p><p>Los derechos de los niños están escritos en un documento que respetan casi todos los países del mundo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una balanza: a un lado los derechos (casa, cole, juego) y al otro los deberes (respetar, cuidar)">${BG}
        <path d="M130 40 V 150 M96 150 H 164" stroke="var(--ink)" stroke-width="4"/><path d="M50 60 H 210" stroke="var(--ink)" stroke-width="4"/>
        <path d="M50 60 L 30 100 H 70 Z M210 60 L 190 100 H 230 Z" fill="none" stroke="var(--muted)" stroke-width="2"/>
        <path d="M24 100 H 76 M184 100 H 236" stroke="var(--ink)" stroke-width="4"/>
        ${txt(50, 124, "derechos", { size: 13, color: "var(--pen)" })}${txt(210, 124, "deberes", { size: 13, color: "var(--leaf)" })}
        ${corazon(50, 86, 0.6)}${check(210, 86)}
        ${txt(130, 30, "Los dos van juntos", { size: 13, color: "var(--muted)" })}</svg>`,
      video: { id: "3X4qwBv53iQ", titulo: "Derechos y deberes de los niños y niñas", canal: "Smile and Learn - Español", vistas: 2099629, megusta: 0 },
    },
    {
      html: `<h3>8. Si hay un problema</h3><p>A veces nos <mark>enfadamos</mark>. Es normal. Lo importante es cómo lo arreglamos.</p><p>Usamos el <b>semáforo</b>. Rojo: paro y respiro hondo. Amarillo: pienso qué ha pasado y qué siento. Verde: hablo con calma y busco una solución.</p><p>Nunca pegamos ni insultamos. Si no podemos solos, pedimos ayuda.</p><p>Después de un enfado, podemos hacer las paces con un abrazo o un apretón de manos. ¡Qué bien sienta!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Semáforo de las emociones: rojo paro, amarillo pienso, verde hablo">${BG}
        ${semaforo(60, 94, 1.4, -1)}
        ${txt(110, 60, "Paro y respiro", { size: 14, color: "var(--red)", anchor: "start" })}${txt(110, 99, "Pienso", { size: 14, color: "#b8860b", anchor: "start" })}${txt(110, 138, "Hablo con calma", { size: 14, color: "var(--leaf)", anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>9. ¿Para qué sirve?</h3><p>Cumplir las normas hace que todos estemos <mark>a gusto y seguros</mark>.</p><p>Si respetamos el turno, todos jugamos. Si cuidamos las cosas, duran más. Si hablamos con calma, hacemos más amigos.</p><p>Cuando seas mayor, ayudarás a decidir las normas de tu localidad votando.</p><p>Si alguien no cumple una norma, se lo decimos con respeto. Si sigue, avisamos a un adulto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Niños jugando juntos y contentos en el recreo">${BG}
        ${sol(220, 36, 12)}${persona(50, 156, 92, "var(--red)", "#6b3f1f")}${persona(130, 156, 92, "var(--pen)")}${persona(200, 156, 92, "var(--leaf)", "#e3b04b")}
        <circle cx="92" cy="140" r="12" fill="var(--sun)"/><path d="M80 140 H 104" stroke="#fff" stroke-width="2"/>
        <path d="M14 158 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(110, 34, "¡Así da gusto!", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>10. Juego: ¿bien o mal?</h3><p>Escucha cada frase. Si está bien, pon <mark>cara contenta</mark>. Si está mal, pon cara triste.</p><p>1. Ana dice «gracias» al recibir un regalo.</p><p>2. Leo empuja para ser el primero de la fila.</p><p>3. Sara invita a jugar a un niño nuevo.</p><p>4. Tomás tira un papel al suelo.</p><p>Bien: 1 y 3. Mal: 2 y 4.</p><p>Inventa ahora otras frases para jugar con tu familia. ¿Quién acierta más veces?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una cara contenta para lo que está bien y una cara triste para lo que está mal">${BG}
        <g transform="translate(76 94)"><circle r="36" fill="var(--sun)"/><circle cx="-12" cy="-8" r="4" fill="var(--ink)"/><circle cx="12" cy="-8" r="4" fill="var(--ink)"/><path d="M-16 10 Q 0 26 16 10" stroke="var(--ink)" stroke-width="4" fill="none" stroke-linecap="round"/></g>
        <g transform="translate(184 94)"><circle r="36" fill="#9aa3b5"/><circle cx="-12" cy="-8" r="4" fill="var(--ink)"/><circle cx="12" cy="-8" r="4" fill="var(--ink)"/><path d="M-16 20 Q 0 6 16 20" stroke="var(--ink)" stroke-width="4" fill="none" stroke-linecap="round"/></g>
        ${check(76, 158)}${check(184, 158, false)}
        ${txt(76, 32, "bien", { size: 15, color: "var(--ok)", font: D, weight: 800 })}${txt(184, 32, "mal", { size: 15, color: "var(--red)", font: D, weight: 800 })}</svg>`,
    },
    L3.B("11. Repaso: lo que ya sabes", `<p><mark>Convivir</mark> es vivir con otras personas con respeto.</p><p>Las <b>normas</b> nos dicen cómo comportarnos en casa, en el cole y en la calle.</p><p>Usamos las palabras mágicas: hola, por favor, gracias, perdón y adiós.</p><p>Los niños tenemos derechos y deberes. Y cuando nos enfadamos, usamos el semáforo: paro, pienso y hablo.</p>`, "Un semáforo con las palabras paro, pienso y hablo", `<rect x="40" y="22" width="56" height="140" rx="14" fill="var(--ink)"/><circle cx="68" cy="52" r="17" fill="var(--red)"/><circle cx="68" cy="92" r="17" fill="var(--sun)"/><circle cx="68" cy="132" r="17" fill="var(--leaf)"/>${L3.t(170, 57, "Paro y respiro", "var(--red)")}${L3.t(170, 97, "Pienso", "#c48a00")}${L3.t(170, 137, "Hablo con calma", "var(--leaf)")}`),
  ],
  figura: {
    titulo: "Normas para convivir",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Normas en casa, en el cole y en la calle, con las palabras mágicas en el centro">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["EN CASA", "recoger · ayudar · no gritar", 110, "var(--red)"], ["EN EL COLE", "turno · escuchar · fila", 320, "var(--pen)"], ["EN LA CALLE", "paso de peatones · papelera", 530, "var(--leaf)"]].map(([t, d, x, c]) => `<rect x="${x - 95}" y="30" width="190" height="110" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${txt(x, 76, t, { size: 18, color: c, font: D, weight: 800 })}${txt(x, 104, d, { size: 12 })}`).join("")}
      <rect x="80" y="170" width="480" height="100" rx="20" fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="3"/>
      ${txt(320, 206, "PALABRAS MÁGICAS", { size: 18, color: "#b8860b", font: D, weight: 800 })}${txt(320, 240, "buenos días · por favor · gracias · perdón", { size: 16 })}
    </svg>`,
  },
  video: { id: "hH0J8cTaCLQ", titulo: "Historias que ayudan a crecer | Los niños que no respetan las reglas", canal: "Marie Leiner", vistas: 10873563, megusta: 0, busqueda: "normas de convivencia para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Quieres el lápiz rojo que está usando Marta. ¿Qué haces?",
      pasos: ["No se lo quito de la mano.", "Le digo: «Marta, ¿me dejas el rojo, por favor?».", "Espero a que termine y le doy las gracias."],
      resultado: "lo pido por favor, espero y doy las gracias." },
    { enunciado: "Sin querer, pisas a un compañero en la fila. ¿Qué dices?",
      pasos: ["Me doy cuenta de que le he hecho daño.", "Le miro y le pregunto si está bien.", "Le digo «perdón»."],
      resultado: "pido perdón." },
    { enunciado: "Pablo y tú queréis el mismo columpio. ¿Cómo lo resolvéis?",
      pasos: ["Rojo: paramos y no empujamos.", "Amarillo: pensamos que los dos queremos jugar.", "Verde: hablamos y contamos hasta 20 cada uno."],
      resultado: "nos turnamos para usar el columpio." },
    { enunciado: "Un compañero te quita la goma sin pedirla. ¿Qué haces?", pasos: ["Rojo: paras y respiras hondo, sin gritar.", "Amarillo: piensas que quizá la necesitaba.", "Verde: le dices con calma que te la pida «por favor» la próxima vez."], resultado: "lo arreglas hablando, sin pelear." },
  ],
  errores: [
    "Pensar que las normas solo sirven para regañar: sirven para que todos estemos bien.",
    "Cumplir las normas solo cuando nos ven: hay que cumplirlas siempre.",
    "Arreglar un enfado pegando o insultando: los problemas se resuelven hablando.",
    "Olvidar las palabras mágicas con la familia: también se usan en casa.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di una norma de tu casa.", sol: "Por ejemplo: recoger los juguetes." },
    { nivel: "básico", q: "Di dos normas de tu clase.", sol: "Por ejemplo: levantar la mano y esperar el turno." },
    { nivel: "básico", q: "Di una norma del parque.", sol: "Por ejemplo: esperar el turno en el tobogán." },
    { nivel: "básico", q: "Di las cuatro palabras mágicas.", sol: "Buenos días, por favor, gracias y perdón." },
    { nivel: "básico", q: "¿Qué dices cuando alguien te da un regalo?", sol: "Gracias." },
    { nivel: "básico", q: "Di un derecho de los niños.", sol: "Por ejemplo: ir al colegio o jugar." },
    { nivel: "básico", q: "Di un deber de los niños.", sol: "Por ejemplo: respetar a los demás." },
    { nivel: "medio", q: "Explica el semáforo para los enfados.", sol: "Rojo: paro. Amarillo: pienso. Verde: hablo." },
    { nivel: "básico", q: "Dibuja una norma de clase en un cartel.", sol: "Respuesta libre." },
    { nivel: "medio", q: "Inventa una norma nueva para tu casa.", sol: "Respuesta libre: que ayude a convivir mejor." },
    L3.b("¿Qué palabra mágica decimos al irnos?", "Adiós o hasta mañana."),
    L3.m("Une cada lugar con su norma: biblioteca, calle, clase. Hablar bajito, cruzar por el paso de peatones, levantar la mano.", "Biblioteca-hablar bajito; calle-paso de peatones; clase-levantar la mano."),
    L3.m("Rodea lo que está bien: empujar en la fila, decir gracias, compartir, gritar.", "Decir gracias y compartir."),
    L3.m("¿Qué es un derecho? Pon un ejemplo.", "Algo que todos los niños deben tener, como ir al colegio."),
    L3.m("Dibuja un cartel con una norma del patio.", "Por ejemplo: «Jugamos sin hacer daño»."),
    L3.a("Inventa tres normas para un juego nuevo.", "Normas claras: por turnos, sin empujar y todos juegan."),
    L3.a("¿Qué pasaría en la calle si nadie cumpliera las normas?", "Habría accidentes, basura y peleas."),
    L3.a("Cuenta una vez que arreglaste un enfado hablando.", "Respuesta personal usando los pasos del semáforo."),
    L3.a("Explica la diferencia entre derecho y deber.", "Un derecho es lo que debo recibir; un deber es lo que debo hacer."),
    L3.a("Di cómo harías sentir bien a un niño nuevo en clase.", "Saludarlo, presentarle a los demás e invitarlo a jugar."),
    L3.a("Propón una norma para ahorrar agua en casa.", "Por ejemplo: cerrar el grifo al enjabonarse."),
    L3.a("Haz las paces con alguien con quien te enfadaste y cuéntalo.", "Respuesta personal: pedir perdón o dar un abrazo."),
  ],
  quiz: [
    { q: "Una norma nos dice…", o: ["cómo comportarnos", "qué comer", "qué hora es"], a: 0, e: "Cómo debemos actuar." },
    { q: "Vivir juntos se llama…", o: ["convivir", "correr", "contar"], a: 0, e: "Convivir." },
    { q: "Para hablar en clase…", o: ["grito", "levanto la mano", "me voy"], a: 1, e: "Levanto la mano." },
    { q: "Al pedir algo decimos…", o: ["por favor", "adiós", "ya"], a: 0, e: "Por favor." },
    { q: "Si hago daño sin querer, digo…", o: ["perdón", "nada", "me da igual"], a: 0, e: "Perdón." },
    { q: "La basura va…", o: ["a la papelera", "al suelo", "al columpio"], a: 0, e: "A la papelera." },
    { q: "Ir al colegio es un…", o: ["derecho", "castigo", "juego de mesa"], a: 0, e: "Un derecho de los niños." },
    { q: "Respetar a los demás es un…", o: ["deber", "regalo", "juguete"], a: 0, e: "Un deber." },
    { q: "En el semáforo, rojo significa…", o: ["paro y respiro", "grito", "corro"], a: 0, e: "Paro y me calmo." },
    { q: "Si me enfado con un amigo…", o: ["le pego", "hablamos con calma", "le insulto"], a: 1, e: "Hablamos con calma." },
    L3.Q("En la biblioteca hablamos…", ["bajito", "gritando", "cantando"], 0, "Así no molestamos."),
    L3.Q("Después de un enfado podemos…", ["hacer las paces", "seguir peleando", "romper cosas"], 0, "Con un abrazo o un apretón de manos."),
  ],
  examen: [
    { q: "Las normas sirven para…", o: ["convivir mejor", "aburrirnos", "pelearnos"], a: 0, e: "Para vivir juntos a gusto." },
    { q: "¿Qué palabra mágica decimos al llegar?", o: ["Buenos días", "Gracias", "Perdón"], a: 0, e: "Buenos días." },
    { q: "En la fila…", o: ["empujamos", "esperamos sin empujar", "corremos"], a: 1, e: "Sin empujar." },
    { q: "Jugar es un…", o: ["derecho", "deber", "castigo"], a: 0, e: "Todos los niños tienen derecho a jugar." },
    L3.Q("¿Qué palabra decimos al recibir algo?", ["Gracias", "Adiós", "Perdón"], 0, "Gracias."),
    L3.Q("Si no podemos arreglar un problema solos…", ["pedimos ayuda a un adulto", "pegamos", "nos escondemos"], 0, "Un adulto nos ayuda."),
  ],
  feynman: ["Qué es una norma y para qué sirve", "Las palabras mágicas", "Cómo resolver un enfado"],
  mapa: mapa("CONVIVIR", "var(--pri)", [
    ["Normas", "casa · cole · calle", "var(--pen)"],
    ["Palabras mágicas", "por favor · gracias · perdón", "#b8860b"],
    ["Derechos y deberes", "jugar · aprender · respetar", "var(--leaf)"],
    ["Problemas", "parar · pensar · hablar", "var(--red)"],
  ], 230),
  tarjetas: [
    ["¿Qué es una norma?", "Una regla que dice cómo comportarnos"],
    ["¿Qué es convivir?", "Vivir juntos"],
    ["Di las palabras mágicas", "Buenos días, por favor, gracias y perdón"],
    ["¿Cómo pedimos hablar en clase?", "Levantando la mano"],
    ["Di un derecho de los niños", "Ir al colegio, jugar, tener familia"],
    ["Di un deber", "Respetar y cumplir las normas"],
    ["¿Qué hago si me enfado?", "Paro, pienso y hablo con calma"],
    ["¿Dónde tiramos la basura?", "En la papelera"],
    ["¿Qué es una ley?", "Una norma que cumplen todas las personas de un país"],
    ["¿Cómo hacemos las paces?", "Hablando, pidiendo perdón o con un abrazo"],
  ],
  glosario: [
    ["Convivir", "Vivir juntos con otras personas."],
    ["Norma", "Lo que nos dice cómo debemos comportarnos."],
    ["Regla", "Otra forma de decir norma, sobre todo en los juegos."],
    ["Respeto", "Tratar bien a los demás y a las cosas."],
    ["Turno", "El momento que le toca a cada uno."],
    ["Palabras mágicas", "Hola, por favor, gracias, perdón y adiós."],
    ["Derecho", "Lo que todos los niños deben tener."],
    ["Deber", "Lo que todos debemos hacer."],
    ["Ley", "Norma que cumplen todas las personas de un país."],
  ],
  situacion: L3.sit("Las normas de nuestra clase", "Vamos a decidir entre todos las normas de nuestra clase y a hacer un cartel para colgarlo.", ["En asamblea, decimos qué cosas nos molestan y qué nos hace sentir bien.", "Elegimos cinco normas votando con la mano levantada.", "Por parejas, dibujamos cada norma con una frase corta.", "Colgamos el cartel y cada viernes revisamos si las hemos cumplido."], "Un cartel con las cinco normas de la clase dibujadas.", ["Propone normas útiles para todos.", "Respeta el turno y el voto de los demás.", "Cumple las normas durante la semana."]),
  familias: [
    "Escribid juntos tres normas de casa y colgadlas en la nevera.",
    "Dad ejemplo usando las palabras mágicas con él o ella y con los demás.",
    "Cuando haya un conflicto, practicad el semáforo: parar, pensar y hablar.",
    "Felicitad cuando cumpla una norma sin que se lo pidáis.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: normas de convivencia en la familia, la escuela y el entorno; derechos de la infancia; resolución pacífica de conflictos (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Asamblea para acordar las normas de clase y firmarlas todos.", "Rincón de la calma con el semáforo de las emociones.", "Lectura de la Convención sobre los Derechos del Niño en versión adaptada (UNICEF)."],
  },
  fuentes: [RD],
  revisado: "2026-11-14",
};
