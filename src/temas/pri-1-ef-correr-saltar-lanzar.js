// Educación Física 1º de Primaria: correr, saltar y lanzar.
const { mapa } = require("./_util");
const { svg, rot, big, nino, pelota, suelo, flechaR, bocadillo, PROF, FUENTES } = require("./_pri1-dib");

const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const velocidad = (x, y) => `<path d="M${x} ${y} h-24 M${x + 4} ${y + 10} h-30 M${x} ${y + 20} h-22" stroke="var(--muted)" stroke-width="2.5" stroke-linecap="round"/>`;
const cono = (x, y, c = "var(--inf)") => `<path d="M${x - 9} ${y} L${x} ${y - 24} L${x + 9} ${y}z" fill="${c}"/><rect x="${x - 12}" y="${y - 2}" width="24" height="4" rx="2" fill="${c}"/>`;
const aro = (x, y, c = "var(--red)") => `<ellipse cx="${x}" cy="${y}" rx="18" ry="6" fill="none" stroke="${c}" stroke-width="4"/>`;
const caja = (x, y) => `<path d="M${x - 18} ${y - 26} h36 l-4 26 h-28z" fill="#c99a5b" stroke="var(--ink)" stroke-width="1.5"/>`;
const diana = (x, y) => `<circle cx="${x}" cy="${y}" r="20" fill="var(--red)"/><circle cx="${x}" cy="${y}" r="13" fill="var(--card)"/><circle cx="${x}" cy="${y}" r="6" fill="var(--red)"/>`;

module.exports = {
  materia: "Educación Física",
  curso: "1-primaria",
  titulo: "Correr, saltar y lanzar",
  minutos: 20,
  objetivos: ["Correr, saltar y lanzar de forma coordinada", "Conocer distintas formas de desplazarse y de saltar", "Lanzar y atrapar una pelota con las dos manos"],
  claves: ["correr", "saltar", "lanzar", "atrapar", "desplazarse", "coordinación"],
  pregunta: {
    texto: "En el recreo, ¿qué haces más: correr, saltar o lanzar una pelota?",
    respuesta: "¡Seguro que las tres! Son las <mark>habilidades básicas</mark>: los movimientos que usamos en casi todos los juegos.",
  },
  bloques: [
    {
      html: `<h3>Las habilidades básicas</h3><p>Hay movimientos que usamos <mark>en todos los juegos</mark>.</p><p>Nos <b>desplazamos</b>: andamos y corremos. <b>Saltamos</b>. <b>Lanzamos</b> y <b>atrapamos</b> cosas. Y también <b>giramos</b>.</p><p>Se llaman habilidades básicas. Cuanto más las practicamos, mejor nos salen. ¡Y más nos divertimos jugando!</p><p>En Educación Física vamos a practicarlas mucho, con juegos y circuitos.</p>`,
      svg: svg("Cuatro niños: uno corre, otro salta, otro lanza una pelota y otra gira", `${nino(36, 140, { c: "var(--pen)", pose: "corre", s: 0.85 })}${nino(98, 140, { c: "var(--inf)", nina: true, pose: "salta", s: 0.85 })}${nino(162, 140, { c: "var(--leaf)", pose: "lanza", s: 0.85 })}${pelota(146, 76, 6)}${nino(224, 140, { c: "var(--red)", nina: true, pose: "brazos", s: 0.85 })}<ellipse cx="224" cy="104" rx="28" ry="7" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${suelo(140)}${etq(36, 162, "correr")}${etq(98, 162, "saltar")}${etq(162, 162, "lanzar")}${etq(224, 162, "girar")}`),
    },
    {
      html: `<h3>Correr bien</h3><p>Para correr, miramos <mark>hacia delante</mark>.</p><p>Movemos los <b>brazos</b> doblados, adelante y atrás, al lado del cuerpo.</p><p>Pisamos con la parte delantera del pie. Así vamos más rápido y más ligeros. Si hay más niños, miramos bien para <b>no chocar</b>.</p><p>Al terminar, andamos un poco para recuperar el aire. ¡Correr es muy sano!</p>`,
      svg: svg("Un niño corriendo con los brazos doblados y líneas de velocidad detrás", `${nino(150, 150, { c: "var(--pen)", pose: "corre", s: 1.5 })}${velocidad(100, 70)}${velocidad(96, 110)}${etq(210, 50, "mira delante", "var(--red)", 13)}${flechaR(192, 56, 168, 68, "var(--red)")}${etq(56, 40, "brazos doblados", "var(--leaf)", 12)}${flechaR(66, 48, 122, 92, "var(--leaf)")}${suelo(150)}${rot(130, 172, "¡A correr!", { color: "var(--pen)" })}`),
      video: { id: "7W1tqdkfElU", titulo: "Juegos fáciles de atletismo para niños en educación física", canal: "Movimiento Lúdico", vistas: 125829 },
    },
    {
      html: `<h3>Muchas formas de moverse</h3><p>No solo andamos y corremos. Podemos ir <mark>a la pata coja</mark>, con un solo pie.</p><p>Podemos <b>galopar</b> como un caballo. O ir <b>a cuatro patas</b> como un gato.</p><p>También podemos <b>reptar</b> como una serpiente o andar hacia atrás. Cada forma usa el cuerpo de una manera distinta.</p><p>¡Prueba todas en el patio!</p>`,
      svg: svg("Un niño a la pata coja, una niña a cuatro patas y un niño reptando por el suelo", `${nino(40, 146, { c: "var(--pen)", pose: "equilibrio", s: 0.95 })}<g transform="translate(120 146)"><path d="M-22 -22 L22 -22 M-22 -22 L-26 0 M-16 -22 L-12 0 M22 -22 L18 0 M16 -22 L26 0" stroke="var(--inf)" stroke-width="4.5" stroke-linecap="round" fill="none"/><circle cx="32" cy="-30" r="9" fill="#f3c9a1"/><path d="M24 -32 q6 -10 16 -2z" fill="#8a5a2b"/></g><g transform="translate(205 146)"><path d="M-30 -6 L16 -6 M-30 -6 L-40 -2 M-30 -6 L-40 -10 M10 -6 L22 -14" stroke="var(--leaf)" stroke-width="4.5" stroke-linecap="round" fill="none"/><circle cx="26" cy="-12" r="8" fill="#f3c9a1"/></g>${suelo(146)}${etq(40, 166, "pata coja")}${etq(120, 166, "cuatro patas")}${etq(205, 166, "reptar")}`),
    },
    {
      html: `<h3>Saltar bien</h3><p>Un salto tiene <mark>tres partes</mark>.</p><p>1. <b>Preparo</b>: doblo las rodillas y llevo los brazos atrás.</p><p>2. <b>Salto</b>: empujo fuerte el suelo y lanzo los brazos hacia arriba.</p><p>3. <b>Caigo</b>: aterrizo con los pies y doblo las rodillas. Así caigo suave, como un gato, y no me hago daño.</p>`,
      svg: svg("Tres dibujos de un salto: agachado, en el aire con los brazos arriba y cayendo con las rodillas dobladas", `${nino(50, 150, { c: "var(--pen)", pose: "agacha" })}${nino(130, 132, { c: "var(--pen)", pose: "salta" })}${nino(210, 150, { c: "var(--pen)", pose: "agacha" })}<path d="M60 100 Q130 30 200 100" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="5 4"/>${suelo(150)}${big(50, 172, "1", "var(--leaf)", 18)}${big(130, 172, "2", "var(--inf)", 18)}${big(210, 172, "3", "var(--red)", 18)}`),
    },
    {
      html: `<h3>Saltos divertidos</h3><p>Podemos saltar con los <mark>pies juntos</mark>, como un canguro.</p><p>Podemos saltar a la <b>pata coja</b> o de un pie al otro.</p><p>También saltamos a la <b>comba</b> o dentro de aros. Al jugar a la <b>rayuela</b> saltamos de casilla en casilla. ¿Cuál te gusta más?</p><p>Recuerda caer siempre con las rodillas dobladas.</p>`,
      svg: svg("Una niña salta a la comba y al lado hay una rayuela pintada en el suelo", `${nino(70, 136, { c: "var(--inf)", nina: true, pose: "salta", s: 1 })}<path d="M56 74 Q20 120 70 158 Q120 120 84 74" stroke="var(--red)" stroke-width="2.5" fill="none"/>${[[0, 0], [0, 1], [-0.5, 2], [0.5, 2], [0, 3]].map(([c, r], i) => `<rect x="${178 + c * 26 - 13}" y="${130 - r * 26}" width="26" height="26" fill="none" stroke="var(--pen)" stroke-width="2"/>${big(178 + c * 26, 149 - r * 26, i + 1, "var(--pen)", 14)}`).join("")}${suelo(158)}${etq(70, 176, "comba")}${etq(178, 176, "rayuela")}`),
    },
    {
      html: `<h3>Lanzar</h3><p>Antes de lanzar, <mark>miro el objetivo</mark>.</p><p>Llevo el brazo <b>hacia atrás</b>. Pongo delante el pie contrario al brazo que lanza.</p><p>Después muevo el brazo con fuerza hacia delante y suelto la pelota. Puedo lanzar <b>lejos</b>, <b>alto</b> o <b>a un sitio</b>, como una diana.</p><p>Cuanto más practiques, más puntería tendrás.</p>`,
      svg: svg("Un niño lanza una pelota que vuela en curva hasta una diana", `${nino(56, 150, { c: "var(--leaf)", pose: "lanza", s: 1.1 })}${pelota(40, 74, 7)}<path d="M50 72 Q130 10 206 70" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="5 4"/>${diana(214, 86)}${suelo(150)}${rot(130, 172, "Miro, brazo atrás… ¡lanzo!", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Atrapar</h3><p>Para atrapar una pelota, la <mark>miro todo el rato</mark>.</p><p>Pongo las <b>manos preparadas</b>, abiertas y delante del cuerpo.</p><p>Cuando la pelota llega, la agarro y la llevo hacia el pecho. Así no se escapa. Al principio es mejor con una pelota <b>blanda</b> y grande. Poco a poco lo haremos mejor.</p><p>Si se cae, no pasa nada: ¡otra vez!</p>`,
      svg: svg("Dos niños se pasan una pelota grande con las manos preparadas", `${nino(56, 150, { c: "var(--pen)", pose: "palmas", s: 1.1 })}${nino(204, 150, { c: "var(--inf)", nina: true, pose: "palmas", s: 1.1 })}${pelota(130, 70, 12, "var(--sun)")}${flechaR(76, 90, 116, 74)}${flechaR(144, 74, 184, 90)}${suelo(150)}${rot(130, 172, "Manos preparadas", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Jugar y moverme</h3><p>Sirven para <mark>jugar</mark> al pilla pilla, al balón o a la comba.</p><p>También sirven cada día. <b>Corremos</b> para no perder el autobús. <b>Saltamos</b> un charco.</p><p>Y <b>lanzamos</b> una bola de papel a la papelera. Cuanto mejor nos movemos, más ágiles y seguros estamos.</p><p>¡Moverse es divertido!</p>`,
      svg: svg("Un niño salta un charco y otra niña lanza una bola de papel a la papelera", `${nino(70, 132, { c: "var(--pen)", pose: "salta" })}<ellipse cx="70" cy="152" rx="34" ry="7" fill="var(--water)" opacity=".7"/>${nino(170, 150, { c: "var(--inf)", nina: true, pose: "lanza", s: 0.95 })}<circle cx="162" cy="80" r="5" fill="var(--card)" stroke="var(--ink)"/><path d="M168 76 Q200 50 220 112" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${caja(222, 150)}${suelo(152)}${rot(130, 172, "Lo usamos cada día", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Juego: el circuito</h3><p>Vamos a hacer un <mark>circuito</mark> con tres pruebas.</p><p>1. <b>Corre</b> en zigzag entre los conos.</p><p>2. <b>Salta</b> con los pies juntos dentro de los aros.</p><p>3. <b>Lanza</b> una pelota dentro de una caja.</p><p>Cuando termines, vuelve a la fila y anima a tus compañeros. ¡No es una carrera, es para hacerlo bien!</p>`,
      svg: svg("Circuito con conos en zigzag, tres aros en el suelo y una caja al final", `${cono(30, 120)}${cono(60, 100)}${cono(90, 120)}<path d="M20 132 Q45 90 60 112 Q75 134 100 96" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${aro(130, 116)}${aro(160, 116)}${aro(190, 116)}${caja(232, 128)}${pelota(232, 92, 6)}${big(60, 160, "1", "var(--inf)", 16)}${big(160, 160, "2", "var(--red)", 16)}${big(232, 160, "3", "#8a5a2b", 16)}${rot(130, 40, "¡Corre, salta y lanza!", { color: "var(--pen)", size: 15 })}`),
      video: { id: "nDzPGkJSYxA", titulo: "Circuito de habilidades motrices en la escuela", canal: "Educación Física Para Todos", vistas: 102149 },
    },
  ],
  figura: {
    titulo: "Correr, saltar, lanzar y atrapar",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cuatro viñetas: correr mirando delante, saltar con las rodillas dobladas, lanzar con el brazo atrás y atrapar con las manos preparadas">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["Correr", "mira delante · brazos doblados", "corre", "var(--pen)"], ["Saltar", "dobla · empuja · cae suave", "salta", "var(--inf)"], ["Lanzar", "brazo atrás · pie contrario", "lanza", "var(--leaf)"], ["Atrapar", "mira la pelota · manos listas", "palmas", "var(--red)"]].map(([t, d, pose, c], i) => {
        const x = 80 + i * 160;
        return `<rect x="${x - 70}" y="20" width="140" height="260" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${nino(x, 190, { c, pose, s: 1.6 })}${pose === "lanza" ? pelota(x - 26, 76, 8) : pose === "palmas" ? pelota(x, 118, 10, "var(--sun)") : ""}<path d="M${x - 56} 190 H${x + 56}" stroke="var(--line)" stroke-width="3"/>${big(x, 226, t, c, 22)}${rot(x, 250, d.split(" · ")[0], { size: 13 })}${rot(x, 268, d.split(" · ")[1], { size: 13 })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "l3UR2vWgFKc", titulo: "Habilidades motrices básicas", canal: "El Tío Kevin Mora", vistas: 588940, megusta: 8502, busqueda: "habilidades motrices básicas correr saltar lanzar niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo saltamos sin hacernos daño?",
      pasos: ["Doblamos las rodillas y llevamos los brazos atrás.", "Empujamos el suelo y subimos los brazos.", "Caemos con los pies y doblamos las rodillas."],
      resultado: "caemos suave doblando las rodillas." },
    { enunciado: "Lanzo con la mano derecha. ¿Qué pie pongo delante?",
      pasos: ["Recordamos: el pie contrario al brazo que lanza.", "El contrario de la derecha es la izquierda.", "Pongo delante el pie izquierdo."],
      resultado: "el pie izquierdo." },
    { enunciado: "¿Qué hacemos para atrapar una pelota?",
      pasos: ["Miramos la pelota todo el rato.", "Preparamos las manos abiertas delante.", "La agarramos y la llevamos al pecho."],
      resultado: "mirar, manos preparadas y llevarla al pecho." },
  ],
  errores: [
    "Correr mirando al suelo: hay que mirar delante para no chocar.",
    "Caer de un salto con las piernas rectas: doblamos las rodillas para caer suave.",
    "Lanzar sin mirar el objetivo: primero miro dónde quiero que vaya.",
    "Cerrar los ojos cuando viene la pelota: la miramos hasta que llega a las manos.",
  ],
  ejercicios: [
    { q: "Corre hasta una pared y vuelve, mirando delante.", sol: "Debe correr con los brazos doblados y sin mirar al suelo." },
    { q: "Ve a la pata coja cinco saltos con cada pie.", sol: "Cinco con un pie y cinco con el otro." },
    { q: "Salta con los pies juntos lo más lejos que puedas.", sol: "Comprobad que dobla las rodillas al salir y al caer." },
    { q: "Di las tres partes de un salto.", sol: "Preparo, salto y caigo." },
    { q: "Lanza una pelota blanda dentro de un cubo.", sol: "Debe mirar el cubo y llevar el brazo atrás antes de lanzar." },
    { q: "Pásate una pelota con un adulto 10 veces sin que caiga.", sol: "Si cae, se vuelve a empezar a contar." },
    { q: "Muévete como un gato a cuatro patas.", sol: "Manos y pies en el suelo, avanzando despacio." },
    { q: "Salta 10 veces a la comba.", sol: "Si aún no sabe, puede saltar una cuerda quieta en el suelo." },
    { q: "Si lanzas con la mano izquierda, ¿qué pie va delante?", sol: "El pie derecho." },
    { q: "Di un momento del día en que corres, saltas o lanzas.", sol: "Por ejemplo: corro al autobús, salto un charco, lanzo un papel a la papelera." },
  ],
  quiz: [
    { q: "Al correr, miramos…", o: ["hacia delante", "al suelo", "hacia atrás"], a: 0, e: "Así no chocamos." },
    { q: "Los brazos al correr van…", o: ["doblados", "quietos arriba", "en los bolsillos"], a: 0, e: "Doblados y moviéndose." },
    { q: "Ir con un solo pie es ir…", o: ["a la pata coja", "a cuatro patas", "reptando"], a: 0, e: "A la pata coja." },
    { q: "Antes de saltar…", o: ["doblo las rodillas", "me tumbo", "cierro los ojos"], a: 0, e: "Doblar las rodillas da impulso." },
    { q: "Para caer suave…", o: ["doblo las rodillas", "caigo con las piernas rectas", "caigo de culo"], a: 0, e: "Como un gato." },
    { q: "Antes de lanzar, miro…", o: ["el objetivo", "mis zapatos", "el cielo"], a: 0, e: "Miro dónde quiero lanzar." },
    { q: "Al lanzar, el brazo va primero…", o: ["hacia atrás", "hacia abajo", "quieto"], a: 0, e: "Atrás y luego adelante con fuerza." },
    { q: "Para atrapar, las manos están…", o: ["preparadas delante", "en la espalda", "en la cabeza"], a: 0, e: "Abiertas y delante." },
    { q: "Reptar es moverse como…", o: ["una serpiente", "un pájaro", "un canguro"], a: 0, e: "Arrastrándose por el suelo." },
    { q: "Saltar con los pies juntos es saltar como…", o: ["un canguro", "un pez", "un caracol"], a: 0, e: "Como un canguro." },
  ],
  examen: [
    { q: "Correr, saltar y lanzar son…", o: ["habilidades básicas", "comidas", "colores"], a: 0, e: "Movimientos que usamos en todos los juegos." },
    { q: "¿Cuál es la tercera parte de un salto?", o: ["Caer", "Preparar", "Correr"], a: 0, e: "Preparo, salto y caigo." },
    { q: "Si lanzo con la derecha, adelanto el pie…", o: ["izquierdo", "derecho", "ninguno"], a: 0, e: "El pie contrario." },
    { q: "Al atrapar, llevo la pelota…", o: ["al pecho", "al suelo", "a la cabeza"], a: 0, e: "Así no se escapa." },
  ],
  feynman: ["Cómo se corre bien", "Cuáles son las partes de un salto", "Cómo se lanza y se atrapa una pelota"],
  mapa: mapa("CORRER, SALTAR Y LANZAR", "var(--pri)", [
    ["Correr", "mira delante · brazos doblados", "var(--pen)"],
    ["Saltar", "preparo · salto · caigo", "var(--inf)"],
    ["Lanzar", "miro · brazo atrás · suelto", "var(--leaf)"],
    ["Atrapar", "miro · manos listas · al pecho", "var(--red)"],
  ], 240),
  tarjetas: [
    ["¿Qué son las habilidades básicas?", "Correr, saltar, lanzar, atrapar y girar."],
    ["¿Hacia dónde miro al correr?", "Hacia delante."],
    ["¿Cuáles son las partes de un salto?", "Preparo, salto y caigo."],
    ["¿Cómo caigo de un salto?", "Doblando las rodillas."],
    ["¿Qué miro antes de lanzar?", "El objetivo."],
    ["¿Qué pie adelanto al lanzar?", "El contrario al brazo que lanza."],
    ["¿Cómo atrapo una pelota?", "La miro y pongo las manos preparadas."],
    ["¿Qué es reptar?", "Moverse por el suelo como una serpiente."],
  ],
  familias: [
    "En el parque, jugad a imitar animales: canguro, gato, serpiente, caballo.",
    "Pintad una rayuela con tiza y jugad juntos.",
    "Pasaos una pelota blanda contando cuántas veces seguidas la atrapáis.",
    "Haced un circuito en casa o en el parque con cojines para saltar y un cubo para lanzar.",
  ],
  profesores: PROF("Educación Física: habilidades motrices básicas (desplazamientos, saltos, lanzamientos y recepciones, giros) y coordinación dinámica general en situaciones de juego", ["Circuito por estaciones: zigzag entre conos, saltos en aros y lanzamiento a cajas.", "Juego de los animales para variar los desplazamientos.", "Pases por parejas con pelotas blandas de distintos tamaños."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
