// Música 2º de Primaria: el pulso y el ritmo. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, corazon, suelo, negra, corcheas, silencio, palma, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const pulsos = (x, y, n, sep, c = P.rojo, r = 7) => [...Array(n)].map((_, i) => corazon(x + i * sep, y, r / 7, c)).join("");
const reloj = (x, y, r = 24) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M0 0 V${-r * 0.7} M0 0 L${r * 0.5} ${r * 0.2}" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round"/><path d="M${-r * 0.5} ${-r - 4} h${r}" stroke="var(--ink)" stroke-width="3"/></g>`;

module.exports = {
  materia: "Música",
  curso: "2-primaria",
  titulo: "El pulso y el ritmo",
  minutos: 20,
  objetivos: ["Sentir y marcar el pulso de una canción con el cuerpo", "Distinguir pulso (regular) y ritmo (sonidos largos y cortos)", "Leer y tocar ritmos sencillos con negras, corcheas y silencios"],
  claves: ["pulso", "ritmo", "negra", "corcheas", "silencio", "compás", "acento", "tempo"],
  pregunta: {
    texto: "Pon la mano en tu pecho. ¿Notas algo que se repite siempre igual?",
    respuesta: "Es tu corazón: late con un <mark>pulso</mark> regular, «pum, pum, pum». La música también tiene un pulso que nunca se para, y encima de él va el <mark>ritmo</mark>.",
  },
  bloques: [
    {
      html: `<h3>El pulso, el corazón de la música</h3><p>Toda canción tiene un <mark>pulso</mark>: un latido que se repite siempre igual, sin pararse.</p><p>Es como el tic-tac de un reloj o los pasos cuando caminamos tranquilos.</p><p>Cuando bailas, das palmas o mueves el pie sin pensar al escuchar música, estás siguiendo el pulso. ¡Tu cuerpo lo siente solo!</p>`,
      svg: svg("El pulso como latidos iguales: una fila de corazones y un reloj que hace tic-tac", `${pulsos(40, 60, 6, 36, P.rojo, 9)}${etq(130, 100, "pum · pum · pum · pum", P.rojo, 14)}${reloj(70, 136, 18)}${etq(160, 142, "tic · tac · tic · tac", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Marcar el pulso</h3><p>Podemos marcar el pulso con <mark>el cuerpo</mark>: palmas, pasos, golpes en las rodillas o en la mesa.</p><p>Lo importante es que todos los golpes estén <b>a la misma distancia</b>, ni antes ni después.</p><p>Empieza escuchando unos segundos y luego únete. Si toda la clase marca bien el pulso, sonaréis como un solo reloj. ¡Es mágico!</p>`,
      svg: svg("Formas de marcar el pulso: palmas, pasos y golpes en las rodillas", `${palma(42, 76, P.azul, 1.2)}${palma(76, 76, P.azul, 1.2)}${etq(60, 120, "palmas")}${nino(130, 130, { c: P.verde, pose: "corre", s: 1.1 })}${etq(130, 150, "pasos")}${nino(210, 130, { c: P.rojo, pose: "sentado", s: 1.1 })}${etq(210, 150, "rodillas")}${suelo(132)}`),
    },
    {
      html: `<h3>Rápido o lento</h3><p>El pulso puede ir <mark>más deprisa o más despacio</mark>. A esa velocidad la llamamos tempo.</p><p>Una nana tiene un pulso lento, como un corazón dormido. Una canción para saltar tiene un pulso rápido, como un corazón que corre.</p><p>Aunque el pulso sea rápido o lento, siempre es regular. Camina por la clase siguiendo el tambor: ¡a veces tortuga, a veces liebre!</p>`,
      svg: svg("Pulso lento con pocos corazones separados y pulso rápido con muchos corazones juntos", `${pulsos(40, 54, 4, 60, P.azul, 11)}${etq(130, 88, "lento: como una nana", P.azul, 13)}${pulsos(28, 124, 10, 23, P.rojo, 6)}${etq(130, 158, "rápido: para saltar", P.rojo, 13)}`),
    },
    {
      html: `<h3>El ritmo</h3><p>El <mark>ritmo</mark> es la forma en que se ordenan los sonidos largos y cortos de una canción.</p><p>Mientras el pulso es siempre igual, el ritmo cambia: a veces hay un sonido por pulso, a veces dos rapiditos y a veces un silencio.</p><p>Di tu nombre dando palmas a cada sílaba: «Ma-rí-a», «Juan». ¡Cada nombre tiene su propio ritmo!</p>`,
      svg: svg("Pulso y ritmo: arriba corazones iguales y abajo palmas de distinta duración con el nombre Ma-rí-a y la palabra cho-co-la-te", `${pulsos(46, 40, 4, 50, P.rojo, 8)}${etq(226, 44, "pulso", P.rojo, 11)}${["cho", "co", "la", "te"].map((t, i) => `<rect x="${24 + i * 54}" y="70" width="44" height="30" rx="8" fill="var(--card)" stroke="${P.azul}" stroke-width="2.5"/>${etq(46 + i * 54, 91, t, P.azul, 15)}`).join("")}${etq(130, 124, "cho-co-la-te: 4 sonidos iguales", "var(--muted)", 11)}${["Ma", "rí", "a"].map((t, i) => `<rect x="${24 + i * 60}" y="134" width="${i === 2 ? 92 : 54}" height="28" rx="8" fill="var(--card)" stroke="${P.verde}" stroke-width="2.5"/>${etq(24 + i * 60 + (i === 2 ? 46 : 27), 154, t, P.verde, 15)}`).join("")}`),
      video: V("mu3b"),
    },
    {
      html: `<h3>Negras y corcheas</h3><p>Los músicos escriben el ritmo con <mark>figuras</mark>.</p><p>La <b>negra</b> dura un pulso. Decimos «ta». Las <b>corcheas</b> van de dos en dos, unidas por una barra: son dos sonidos rápidos en un pulso. Decimos «ti-ti».</p><p>Así, «ta, ta, ti-ti, ta» se lee con palmas: una, una, dos rapiditas, una. ¡Prueba a leerlo!</p>`,
      svg: svg("Negra que se dice ta y dos corcheas unidas que se dicen ti-ti, y el ritmo ta ta ti-ti ta", `${negra(50, 70, P.azul)}${etq(56, 98, "negra: ta", P.azul, 13)}${corcheas(150, 70, P.rojo)}${etq(170, 98, "corcheas: ti-ti", P.rojo, 13)}${negra(30, 148, "var(--ink)")}${negra(70, 148, "var(--ink)")}${corcheas(110, 148, "var(--ink)", 22)}${negra(180, 148, "var(--ink)")}${etq(130, 172, "ta · ta · ti-ti · ta", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>El silencio también cuenta</h3><p>En el ritmo también hay <mark>silencios</mark>: momentos en que no suena nada, pero el pulso sigue.</p><p>El silencio de negra dura un pulso, igual que la negra. Cuando aparece, no damos palmada: abrimos las manos o decimos «shh» muy bajito.</p><p>Sin silencios, la música no respiraría. ¡Son como los espacios entre las palabras!</p>`,
      svg: svg("Ritmo con silencio: ta, ta, silencio, ta, con las manos abiertas en el silencio", `${negra(40, 80, P.azul)}${negra(96, 80, P.azul)}${silencio(156, 76, P.rojo)}${negra(206, 80, P.azul)}${etq(46, 112, "ta")}${etq(102, 112, "ta")}${etq(156, 112, "shh", P.rojo)}${etq(212, 112, "ta")}${etq(130, 156, "El pulso sigue aunque no suene", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Fuerte y débil: el compás</h3><p>Si escuchas bien, verás que unos pulsos suenan <mark>más fuertes</mark> que otros. Ese pulso fuerte es el acento.</p><p>En una marcha decimos «UN, dos, UN, dos»: el primero es fuerte. En un vals decimos «UN, dos, tres».</p><p>Cuando los pulsos se agrupan así, forman el <b>compás</b>. Marca el fuerte con palmas y los débiles con chasquidos.</p>`,
      svg: svg("Compás de marcha: un pulso fuerte grande y uno débil pequeño, UN dos UN dos", `${[0, 1, 2, 3].map((i) => corazon(44 + i * 58, 70, i % 2 ? 1 : 2, i % 2 ? P.rosa : P.rojo)).join("")}${["UN", "dos", "UN", "dos"].map((t, i) => etq(44 + i * 58, 118, t, i % 2 ? "var(--muted)" : P.rojo, i % 2 ? 13 : 18)).join("")}${etq(130, 156, "fuerte · débil: marcha", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>El pulso permite que muchas personas <mark>toquen y bailen juntas</mark> sin perderse.</p><p>Una orquesta, una banda en un desfile o un grupo de baile siguen el mismo pulso. También los remeros de una barca reman a la vez gracias a un ritmo.</p><p>Y fuera de la música: al saltar a la comba o al andar, ¡también usamos el ritmo!</p>`,
      svg: svg("Dos niñas dan a la comba y otra salta siguiendo el ritmo", `${nino(40, 150, { c: P.azul, pose: "brazos", s: 1.2, nina: true })}${nino(220, 150, { c: P.verde, pose: "brazos", s: 1.2, nina: true })}<path d="M64 95 q66 80 132 0" stroke="${P.naranja}" stroke-width="3" fill="none"/>${nino(130, 138, { c: P.rojo, pose: "salta", s: 1.2 })}${suelo(152)}${etq(130, 30, "¡Al ritmo de la comba!", "var(--pen)", 14)}`),
    },
    {
      html: `<h3>Jugamos al eco de ritmos</h3><p>La profe hace un <mark>ritmo corto</mark> con palmas, por ejemplo «ta, ta, ti-ti, ta».</p><p>Toda la clase lo repite igual, como un eco. Después lo hace con los pies o en las rodillas.</p><p>Cuando lo dominamos, cada niño inventa su propio ritmo de cuatro pulsos y los demás lo copian. ¡Atención al pulso, que no se para!</p>`,
      svg: svg("Juego del eco: la profesora da palmas y los niños repiten el ritmo", `${nino(50, 150, { c: P.morado, pose: "palmas", s: 1.4 })}${negra(100, 50, P.morado)}${negra(124, 50, P.morado)}${corcheas(148, 50, P.morado, 18)}${negra(198, 50, P.morado)}${nino(150, 156, { c: P.azul, pose: "palmas", s: 0.9 })}${nino(190, 156, { c: P.rojo, pose: "palmas", s: 0.9, nina: true })}${nino(230, 156, { c: P.verde, pose: "palmas", s: 0.9 })}${etq(190, 84, "¡eco!", "var(--pen)", 14)}`),
    },
  ],
  figura: {
    titulo: "El pulso y el ritmo",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="El pulso como latidos iguales y el ritmo con negras, corcheas y silencio"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(90, 74, "PULSO", { size: 20, color: P.rojo, w: 800 })}${pulsos(200, 66, 4, 110, P.rojo, 16)}${rot(400, 116, "siempre igual, como el corazón", { size: 15, color: "var(--muted)" })}${rot(90, 200, "RITMO", { size: 20, color: P.azul, w: 800 })}${negra(200, 210, P.azul)}${negra(310, 210, P.azul)}${corcheas(400, 210, P.azul, 40)}${silencio(540, 206, P.azul)}${["ta", "ta", "ti-ti", "shh"].map((t, i) => rot([206, 316, 426, 540][i], 250, t, { size: 16 })).join("")}${rot(320, 285, "El ritmo va encima del pulso", { size: 15, color: "var(--pen)" })}</svg>`,
  },
  video: V("mu3v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di con palmas el ritmo de la palabra «mariposa».",
      pasos: ["Separa en sílabas: ma-ri-po-sa.", "Da una palmada por sílaba.", "Hazlo encima del pulso, sin parar."],
      resultado: "Cuatro palmadas: ma · ri · po · sa." },
    { enunciado: "Lee el ritmo: negra, negra, corcheas, negra.",
      pasos: ["La negra se dice ta.", "Las corcheas se dicen ti-ti.", "Junta todo sin perder el pulso."],
      resultado: "«ta · ta · ti-ti · ta»" },
    { enunciado: "Marca el compás de una marcha.",
      pasos: ["La marcha agrupa los pulsos de dos en dos.", "El primero es fuerte, el segundo débil.", "Palmada fuerte en UN y suave en dos."],
      resultado: "«UN, dos, UN, dos»" },
  ],
  errores: [
    "Confundir pulso y ritmo: el pulso es siempre igual; el ritmo cambia.",
    "Acelerar sin querer al dar palmas: el pulso debe mantenerse regular.",
    "Parar el pulso en los silencios: el pulso sigue aunque no suene nada.",
    "Dar una sola palmada en las corcheas: son dos sonidos rápidos, ti-ti.",
  ],
  ejercicios: [
    { q: "¿Qué es el pulso?", sol: "Un latido regular que se repite siempre igual en la música." },
    { q: "¿Qué es el ritmo?", sol: "La combinación de sonidos largos, cortos y silencios de una canción." },
    { q: "¿Cuánto dura una negra?", sol: "Un pulso. Se dice «ta»." },
    { q: "¿Cómo se dicen las corcheas?", sol: "«Ti-ti»: dos sonidos rápidos en un pulso." },
    { q: "¿Qué hacemos en un silencio?", sol: "No sonar, pero seguir sintiendo el pulso." },
    { q: "¿Cómo se llama la velocidad del pulso?", sol: "Tempo." },
    { q: "¿Qué es el acento?", sol: "El pulso que suena más fuerte." },
    { q: "Da palmas con el ritmo de tu nombre.", sol: "Respuesta libre: una palmada por sílaba." },
    { q: "Marca el pulso de tu canción favorita con el pie.", sol: "Respuesta libre: golpes regulares." },
    { q: "Inventa un ritmo de cuatro pulsos con negras, corcheas y un silencio.", sol: "Por ejemplo: ta · ti-ti · shh · ta." },
  ],
  quiz: [
    { q: "El pulso es…", o: ["siempre igual", "cada vez distinto", "un silencio"], a: 0, e: "Regular como el corazón." },
    { q: "El ritmo combina…", o: ["sonidos largos, cortos y silencios", "solo colores", "solo pulsos fuertes"], a: 0, e: "Ritmo." },
    { q: "La negra se dice…", o: ["ta", "ti-ti", "shh"], a: 0, e: "Ta." },
    { q: "Las corcheas se dicen…", o: ["ta", "ti-ti", "tooo"], a: 1, e: "Ti-ti." },
    { q: "Una negra dura…", o: ["un pulso", "dos pulsos", "nada"], a: 0, e: "Un pulso." },
    { q: "En un silencio el pulso…", o: ["sigue", "se para", "se acelera"], a: 0, e: "Sigue." },
    { q: "Una nana tiene un pulso…", o: ["lento", "rápido", "sin pulso"], a: 0, e: "Lento." },
    { q: "La velocidad de la música se llama…", o: ["tempo", "timbre", "altura"], a: 0, e: "Tempo." },
    { q: "En una marcha decimos…", o: ["UN, dos", "UN, dos, tres", "dos, UN"], a: 0, e: "Fuerte, débil." },
    { q: "El pulso que suena más fuerte es el…", o: ["acento", "silencio", "eco"], a: 0, e: "Acento." },
  ],
  examen: [
    { q: "«ta · ti-ti · ta» tiene…", o: ["4 sonidos", "3 sonidos", "2 sonidos"], a: 0, e: "ta (1) + ti-ti (2) + ta (1)." },
    { q: "Al bailar seguimos el…", o: ["pulso", "silencio", "pentagrama"], a: 0, e: "El pulso." },
    { q: "Un vals se cuenta…", o: ["UN, dos, tres", "UN, dos", "UN"], a: 0, e: "De tres en tres." },
    { q: "Si el pulso es rápido, la canción es…", o: ["rápida", "lenta", "aguda"], a: 0, e: "Tempo rápido." },
  ],
  feynman: ["Qué diferencia hay entre pulso y ritmo", "Cómo se leen negras, corcheas y silencios", "Qué es el acento y el compás"],
  mapa: mapa("PULSO Y RITMO", "var(--pri)", [
    ["Pulso", "latido regular", "#e53935"],
    ["Ritmo", "largos, cortos, silencios", "#1e88e5"],
    ["Figuras", "ta, ti-ti, shh", "#43a047"],
    ["Compás", "fuerte y débil", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Pulso", "Latido regular de la música"],
    ["Ritmo", "Sonidos largos, cortos y silencios"],
    ["Tempo", "Velocidad del pulso: lento o rápido"],
    ["Negra", "Un pulso: «ta»"],
    ["Corcheas", "Dos sonidos en un pulso: «ti-ti»"],
    ["Silencio de negra", "Un pulso sin sonar: «shh»"],
    ["Acento", "El pulso más fuerte"],
    ["Compás", "Grupo de pulsos: UN, dos / UN, dos, tres"],
  ],
  familias: [
    "Marcad el pulso de las canciones del coche con las manos en las rodillas.",
    "Jugad al eco de ritmos: uno da palmas y el otro repite.",
    "Decid nombres de la familia con palmas, una por sílaba.",
    "Caminad deprisa y despacio siguiendo un pulso dado con un tambor o una cacerola.",
  ],
  profesores: PROF("Música: pulso, tempo y acento; ritmo; figuras negra, corcheas y silencio de negra con fonemas rítmicos (ta, ti-ti); compases binario y ternario; percusión corporal", ["Eco rítmico con percusión corporal.", "Lectura de tarjetas rítmicas de cuatro pulsos.", "Desplazamientos según el tempo del pandero."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
