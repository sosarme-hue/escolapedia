// Educación Física 1º de Primaria: correr, saltar y lanzar.
const { mapa } = require("./_util");
const { svg, rot, big, nino, pelota, suelo, flechaR, bocadillo, PROF, FUENTES } = require("./_pri1-dib");
const L3 = require("./_pri1L3");

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
  minutos: 50,
  objetivos: ["Correr, saltar y lanzar de forma coordinada", "Conocer distintas formas de desplazarse y de saltar", "Lanzar y atrapar una pelota con las dos manos"],
  claves: ["correr", "saltar", "lanzar", "atrapar", "desplazarse", "coordinación"],
  pregunta: {
    texto: "En el recreo, ¿qué haces más: correr, saltar o lanzar una pelota?",
    respuesta: "¡Seguro que las tres! Son las <mark>habilidades básicas</mark>: los movimientos que usamos en casi todos los juegos.",
  },
  lectura: L3.lect("Las olimpiadas del cole", `<p>Hoy es un día especial: ¡son las olimpiadas del cole! El patio está lleno de conos, aros y pelotas.</p><p>Primero, la carrera. Noa corre mirando hacia delante y moviendo los brazos.</p><p>Después, el salto. Bruno dobla las rodillas, empuja fuerte y ¡aterriza como un gato!</p><p>Al final, el lanzamiento. Hay que meter saquitos en una caja. Aitana falla el primero, pero no se rinde.</p><p>Al tercer intento, ¡dentro! Todos aplauden.</p><p>No hay ganadores ni perdedores. Todos reciben una medalla de cartón por esforzarse.</p><p>¿Cómo se corre, se salta y se lanza bien? Lo vas a aprender en este tema.</p>`),
  bloques: [
    {
      html: `<h3>1. Las habilidades básicas</h3><p>Hay movimientos que usamos <mark>en todos los juegos</mark>.</p><p>Nos <b>desplazamos</b>: andamos y corremos. <b>Saltamos</b>. <b>Lanzamos</b> y <b>atrapamos</b> cosas. Y también <b>giramos</b>.</p><p>Se llaman habilidades básicas. Cuanto más las practicamos, mejor nos salen. ¡Y más nos divertimos jugando!</p><p>En Educación Física vamos a practicarlas mucho, con juegos y circuitos.</p><p>Antes de empezar, calentamos siempre. Así el cuerpo está listo para moverse.</p>`,
      svg: svg("Cuatro niños: uno corre, otro salta, otro lanza una pelota y otra gira", `${nino(36, 140, { c: "var(--pen)", pose: "corre", s: 0.85 })}${nino(98, 140, { c: "var(--inf)", nina: true, pose: "salta", s: 0.85 })}${nino(162, 140, { c: "var(--leaf)", pose: "lanza", s: 0.85 })}${pelota(146, 76, 6)}${nino(224, 140, { c: "var(--red)", nina: true, pose: "brazos", s: 0.85 })}<ellipse cx="224" cy="104" rx="28" ry="7" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${suelo(140)}${etq(36, 162, "correr")}${etq(98, 162, "saltar")}${etq(162, 162, "lanzar")}${etq(224, 162, "girar")}`),
    },
    {
      html: `<h3>2. Correr bien</h3><p>Para correr, miramos <mark>hacia delante</mark>.</p><p>Movemos los <b>brazos</b> doblados, adelante y atrás, al lado del cuerpo.</p><p>Pisamos con la parte delantera del pie. Así vamos más rápido y más ligeros. Si hay más niños, miramos bien para <b>no chocar</b>.</p><p>Al terminar, andamos un poco para recuperar el aire. ¡Correr es muy sano!</p><p>Si corres mucho rato, ve más despacio. Así aguantas más sin cansarte.</p>`,
      svg: svg("Un niño corriendo con los brazos doblados y líneas de velocidad detrás", `${nino(150, 150, { c: "var(--pen)", pose: "corre", s: 1.5 })}${velocidad(100, 70)}${velocidad(96, 110)}${etq(210, 50, "mira delante", "var(--red)", 13)}${flechaR(192, 56, 168, 68, "var(--red)")}${etq(56, 40, "brazos doblados", "var(--leaf)", 12)}${flechaR(66, 48, 122, 92, "var(--leaf)")}${suelo(150)}${rot(130, 172, "¡A correr!", { color: "var(--pen)" })}`),
      video: { id: "7W1tqdkfElU", titulo: "Juegos fáciles de atletismo para niños en educación física", canal: "Movimiento Lúdico", vistas: 125829 },
    },
    {
      html: `<h3>3. Muchas formas de moverse</h3><p>No solo andamos y corremos. Podemos ir <mark>a la pata coja</mark>, con un solo pie.</p><p>Podemos <b>galopar</b> como un caballo. O ir <b>a cuatro patas</b> como un gato.</p><p>También podemos <b>reptar</b> como una serpiente o andar hacia atrás. Cada forma usa el cuerpo de una manera distinta.</p><p>¡Prueba todas en el patio!</p><p>Inventa tu propia forma de moverte y enséñasela a un amigo.</p>`,
      svg: svg("Un niño a la pata coja, una niña a cuatro patas y un niño reptando por el suelo", `${nino(40, 146, { c: "var(--pen)", pose: "equilibrio", s: 0.95 })}<g transform="translate(120 146)"><path d="M-22 -22 L22 -22 M-22 -22 L-26 0 M-16 -22 L-12 0 M22 -22 L18 0 M16 -22 L26 0" stroke="var(--inf)" stroke-width="4.5" stroke-linecap="round" fill="none"/><circle cx="32" cy="-30" r="9" fill="#f3c9a1"/><path d="M24 -32 q6 -10 16 -2z" fill="#8a5a2b"/></g><g transform="translate(205 146)"><path d="M-30 -6 L16 -6 M-30 -6 L-40 -2 M-30 -6 L-40 -10 M10 -6 L22 -14" stroke="var(--leaf)" stroke-width="4.5" stroke-linecap="round" fill="none"/><circle cx="26" cy="-12" r="8" fill="#f3c9a1"/></g>${suelo(146)}${etq(40, 166, "pata coja")}${etq(120, 166, "cuatro patas")}${etq(205, 166, "reptar")}`),
    },
    {
      html: `<h3>4. Saltar bien</h3><p>Un salto tiene <mark>tres partes</mark>.</p><p>1. <b>Preparo</b>: doblo las rodillas y llevo los brazos atrás.</p><p>2. <b>Salto</b>: empujo fuerte el suelo y lanzo los brazos hacia arriba.</p><p>3. <b>Caigo</b>: aterrizo con los pies y doblo las rodillas. Así caigo suave, como un gato, y no me hago daño.</p><p>Prueba a saltar sin brazos y luego con brazos. ¿Cuándo llegas más lejos?</p>`,
      svg: svg("Tres dibujos de un salto: agachado, en el aire con los brazos arriba y cayendo con las rodillas dobladas", `${nino(50, 150, { c: "var(--pen)", pose: "agacha" })}${nino(130, 132, { c: "var(--pen)", pose: "salta" })}${nino(210, 150, { c: "var(--pen)", pose: "agacha" })}<path d="M60 100 Q130 30 200 100" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="5 4"/>${suelo(150)}${big(50, 172, "1", "var(--leaf)", 18)}${big(130, 172, "2", "var(--inf)", 18)}${big(210, 172, "3", "var(--red)", 18)}`),
    },
    {
      html: `<h3>5. Saltos divertidos</h3><p>Podemos saltar con los <mark>pies juntos</mark>, como un canguro.</p><p>Podemos saltar a la <b>pata coja</b> o de un pie al otro.</p><p>También saltamos a la <b>comba</b> o dentro de aros. Al jugar a la <b>rayuela</b> saltamos de casilla en casilla. ¿Cuál te gusta más?</p><p>Recuerda caer siempre con las rodillas dobladas.</p><p>Salta siempre en un suelo blando, como el césped o una colchoneta.</p>`,
      svg: svg("Una niña salta a la comba y al lado hay una rayuela pintada en el suelo", `${nino(70, 136, { c: "var(--inf)", nina: true, pose: "salta", s: 1 })}<path d="M56 74 Q20 120 70 158 Q120 120 84 74" stroke="var(--red)" stroke-width="2.5" fill="none"/>${[[0, 0], [0, 1], [-0.5, 2], [0.5, 2], [0, 3]].map(([c, r], i) => `<rect x="${178 + c * 26 - 13}" y="${130 - r * 26}" width="26" height="26" fill="none" stroke="var(--pen)" stroke-width="2"/>${big(178 + c * 26, 149 - r * 26, i + 1, "var(--pen)", 14)}`).join("")}${suelo(158)}${etq(70, 176, "comba")}${etq(178, 176, "rayuela")}`),
    },
    {
      html: `<h3>6. Lanzar</h3><p>Antes de lanzar, <mark>miro el objetivo</mark>.</p><p>Llevo el brazo <b>hacia atrás</b>. Pongo delante el pie contrario al brazo que lanza.</p><p>Después muevo el brazo con fuerza hacia delante y suelto la pelota. Puedo lanzar <b>lejos</b>, <b>alto</b> o <b>a un sitio</b>, como una diana.</p><p>Cuanto más practiques, más puntería tendrás.</p><p>Antes de lanzar, mira que no haya nadie delante. ¡La seguridad es lo primero!</p>`,
      svg: svg("Un niño lanza una pelota que vuela en curva hasta una diana", `${nino(56, 150, { c: "var(--leaf)", pose: "lanza", s: 1.1 })}${pelota(40, 74, 7)}<path d="M50 72 Q130 10 206 70" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="5 4"/>${diana(214, 86)}${suelo(150)}${rot(130, 172, "Miro, brazo atrás… ¡lanzo!", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>7. Atrapar</h3><p>Para atrapar una pelota, la <mark>miro todo el rato</mark>.</p><p>Pongo las <b>manos preparadas</b>, abiertas y delante del cuerpo.</p><p>Cuando la pelota llega, la agarro y la llevo hacia el pecho. Así no se escapa. Al principio es mejor con una pelota <b>blanda</b> y grande. Poco a poco lo haremos mejor.</p><p>Si se cae, no pasa nada: ¡otra vez!</p><p>Empieza atrapando cerca. Cuando lo consigas, da un paso atrás.</p>`,
      svg: svg("Dos niños se pasan una pelota grande con las manos preparadas", `${nino(56, 150, { c: "var(--pen)", pose: "palmas", s: 1.1 })}${nino(204, 150, { c: "var(--inf)", nina: true, pose: "palmas", s: 1.1 })}${pelota(130, 70, 12, "var(--sun)")}${flechaR(76, 90, 116, 74)}${flechaR(144, 74, 184, 90)}${suelo(150)}${rot(130, 172, "Manos preparadas", { color: "var(--pen)" })}`),
    },
    L3.B("8. Girar y rodar", `<p>Otra habilidad básica es <mark>girar</mark>. Giramos al dar una vuelta sobre nosotros mismos, como una peonza.</p><p>También podemos <b>rodar</b> por una colchoneta, tumbados, como un tronco.</p><p>Al girar, a veces nos mareamos. Paramos, miramos un punto fijo y esperamos un poco.</p><p>Gira siempre despacio y en un espacio sin obstáculos.</p>`, "Un niño gira como una peonza y otro rueda tumbado sobre una colchoneta", `${L3.nino(70, 130, { c: "var(--pen)", pose: "brazos", s: 1.1 })}<path d="M40 60 a34 12 0 1 0 60 0" stroke="var(--red)" stroke-width="3" fill="none"/><path d="M96 54 l6 6 l-8 3" stroke="var(--red)" stroke-width="3" fill="none"/><rect x="140" y="128" width="110" height="18" rx="6" fill="var(--sun)"/><rect x="160" y="108" width="70" height="18" rx="9" fill="var(--leaf)"/><circle cx="240" cy="117" r="9" fill="#f3c9a1"/><path d="M170 100 a20 10 0 0 1 40 0" stroke="var(--muted)" stroke-width="2" fill="none"/>${L3.t(70, 166, "girar", "var(--red)")}${L3.t(195, 166, "rodar", "var(--leaf)")}`),
    {
      html: `<h3>9. ¿Para qué sirve? Jugar y moverme</h3><p>Sirven para <mark>jugar</mark> al pilla pilla, al balón o a la comba.</p><p>También sirven cada día. <b>Corremos</b> para no perder el autobús. <b>Saltamos</b> un charco.</p><p>Y <b>lanzamos</b> una bola de papel a la papelera. Cuanto mejor nos movemos, más ágiles y seguros estamos.</p><p>¡Moverse es divertido!</p><p>Cuando juegas en el parque, también practicas: subes, saltas y corres sin darte cuenta.</p>`,
      svg: svg("Un niño salta un charco y otra niña lanza una bola de papel a la papelera", `${nino(70, 132, { c: "var(--pen)", pose: "salta" })}<ellipse cx="70" cy="152" rx="34" ry="7" fill="var(--water)" opacity=".7"/>${nino(170, 150, { c: "var(--inf)", nina: true, pose: "lanza", s: 0.95 })}<circle cx="162" cy="80" r="5" fill="var(--card)" stroke="var(--ink)"/><path d="M168 76 Q200 50 220 112" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${caja(222, 150)}${suelo(152)}${rot(130, 172, "Lo usamos cada día", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>10. Juego: el circuito</h3><p>Vamos a hacer un <mark>circuito</mark> con tres pruebas.</p><p>1. <b>Corre</b> en zigzag entre los conos.</p><p>2. <b>Salta</b> con los pies juntos dentro de los aros.</p><p>3. <b>Lanza</b> una pelota dentro de una caja.</p><p>Cuando termines, vuelve a la fila y anima a tus compañeros. ¡No es una carrera, es para hacerlo bien!</p><p>Después, cambiad las pruebas. ¿Se os ocurre una prueba nueva para el circuito?</p>`,
      svg: svg("Circuito con conos en zigzag, tres aros en el suelo y una caja al final", `${cono(30, 120)}${cono(60, 100)}${cono(90, 120)}<path d="M20 132 Q45 90 60 112 Q75 134 100 96" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${aro(130, 116)}${aro(160, 116)}${aro(190, 116)}${caja(232, 128)}${pelota(232, 92, 6)}${big(60, 160, "1", "var(--inf)", 16)}${big(160, 160, "2", "var(--red)", 16)}${big(232, 160, "3", "#8a5a2b", 16)}${rot(130, 40, "¡Corre, salta y lanza!", { color: "var(--pen)", size: 15 })}`),
      video: { id: "nDzPGkJSYxA", titulo: "Circuito de habilidades motrices en la escuela", canal: "Educación Física Para Todos", vistas: 102149 },
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Las <mark>habilidades básicas</mark> son desplazarse, saltar, lanzar, atrapar y girar.</p><p>Al <b>correr</b>, miramos delante y movemos los brazos.</p><p>Un <b>salto</b> tiene tres partes: preparo, salto y caigo con las rodillas dobladas.</p><p>Al <b>lanzar</b>, miro el objetivo. Al <b>atrapar</b>, miro la pelota y llevo las manos al pecho.</p>`, "Tres niños: uno corre, otro salta y otro lanza una pelota", `${L3.nino(50, 150, { c: "var(--pen)", pose: "corre", s: 1.1 })}${L3.nino(130, 150, { c: "var(--leaf)", pose: "salta", s: 1.1, nina: true })}${L3.nino(210, 150, { c: "var(--red)", pose: "lanza", s: 1.1 })}${L3.pelota(232, 60, 8)}${L3.suelo(152)}${L3.t(50, 172, "correr", "var(--pen)", 12)}${L3.t(130, 172, "saltar", "var(--leaf)", 12)}${L3.t(210, 172, "lanzar", "var(--red)", 12)}`),
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
    { enunciado: "¿Cómo paso a un compañero una pelota para que la atrape?", pasos: ["Miro a mi compañero y digo su nombre.", "Lanzo suave, por abajo, hacia su pecho.", "Él tiene las manos preparadas y la lleva al pecho."], resultado: "lanzo suave y a su pecho, y él la atrapa." },
  ],
  errores: [
    "Correr mirando al suelo: hay que mirar delante para no chocar.",
    "Caer de un salto con las piernas rectas: doblamos las rodillas para caer suave.",
    "Lanzar sin mirar el objetivo: primero miro dónde quiero que vaya.",
    "Cerrar los ojos cuando viene la pelota: la miramos hasta que llega a las manos.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Corre hasta una pared y vuelve, mirando delante.", sol: "Debe correr con los brazos doblados y sin mirar al suelo." },
    { nivel: "básico", q: "Ve a la pata coja cinco saltos con cada pie.", sol: "Cinco con un pie y cinco con el otro." },
    { nivel: "básico", q: "Salta con los pies juntos lo más lejos que puedas.", sol: "Comprobad que dobla las rodillas al salir y al caer." },
    { nivel: "básico", q: "Di las tres partes de un salto.", sol: "Preparo, salto y caigo." },
    { nivel: "básico", q: "Lanza una pelota blanda dentro de un cubo.", sol: "Debe mirar el cubo y llevar el brazo atrás antes de lanzar." },
    { nivel: "básico", q: "Pásate una pelota con un adulto 10 veces sin que caiga.", sol: "Si cae, se vuelve a empezar a contar." },
    { nivel: "básico", q: "Muévete como un gato a cuatro patas.", sol: "Manos y pies en el suelo, avanzando despacio." },
    { nivel: "medio", q: "Salta 10 veces a la comba.", sol: "Si aún no sabe, puede saltar una cuerda quieta en el suelo." },
    { nivel: "básico", q: "Si lanzas con la mano izquierda, ¿qué pie va delante?", sol: "El pie derecho." },
    { nivel: "medio", q: "Di un momento del día en que corres, saltas o lanzas.", sol: "Por ejemplo: corro al autobús, salto un charco, lanzo un papel a la papelera." },
    L3.b("Da una vuelta sobre ti mismo despacio.", "Un giro completo sin caerse."),
    L3.m("Rueda como un tronco por una alfombra o colchoneta.", "Tumbado, con los brazos estirados, rodando de lado."),
    L3.m("Corre despacio dos minutos sin parar.", "Debe mantener el ritmo sin pararse."),
    L3.m("Galopa como un caballo hasta la puerta.", "Un pie siempre delante del otro, con saltitos."),
    L3.m("Lanza una pelota lejos y otra alto.", "Lejos: hacia delante; alto: hacia el cielo."),
    L3.m("Atrapa una pelota que bota una vez en el suelo.", "Mirando la pelota y con las manos preparadas."),
    L3.a("Monta un circuito en casa con cojines para saltar y una caja para lanzar.", "Circuito seguro con dos o tres pruebas."),
    L3.a("Explica a tu familia las tres partes de un salto.", "Preparo, salto y caigo con las rodillas dobladas."),
    L3.a("Lanza a una diana cinco veces y cuenta los aciertos.", "Respuesta personal: anota cuántos aciertos."),
    L3.a("¿Qué haces si te mareas al girar?", "Paro, miro un punto fijo y espero un poco."),
    L3.a("Salta a la comba con los pies juntos y luego a la pata coja.", "Practicar los dos saltos."),
    L3.a("Inventa una prueba nueva para el circuito.", "Por ejemplo: reptar bajo una cuerda."),
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
    L3.Q("Girar es…", ["dar una vuelta sobre uno mismo", "lanzar una pelota", "dormir"], 0, "Como una peonza."),
    L3.Q("Antes de lanzar comprobamos…", ["que no haya nadie delante", "que llueva", "que suene música"], 0, "La seguridad es lo primero."),
  ],
  examen: [
    { q: "Correr, saltar y lanzar son…", o: ["habilidades básicas", "comidas", "colores"], a: 0, e: "Movimientos que usamos en todos los juegos." },
    { q: "¿Cuál es la tercera parte de un salto?", o: ["Caer", "Preparar", "Correr"], a: 0, e: "Preparo, salto y caigo." },
    { q: "Si lanzo con la derecha, adelanto el pie…", o: ["izquierdo", "derecho", "ninguno"], a: 0, e: "El pie contrario." },
    { q: "Al atrapar, llevo la pelota…", o: ["al pecho", "al suelo", "a la cabeza"], a: 0, e: "Así no se escapa." },
    L3.Q("Para atrapar, miro…", ["la pelota", "el cielo", "mis zapatos"], 0, "Todo el rato."),
    L3.Q("Rodar es…", ["dar vueltas tumbado", "saltar alto", "correr deprisa"], 0, "Como un tronco."),
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
    ["¿Qué es girar?", "Dar una vuelta sobre uno mismo"],
    ["¿Qué hago si me mareo?", "Paro y miro un punto fijo"],
  ],
  glosario: [
    ["Habilidad básica", "Movimiento que usamos en todos los juegos."],
    ["Desplazarse", "Ir de un sitio a otro: andar, correr, reptar."],
    ["Pata coja", "Saltar con un solo pie."],
    ["Galopar", "Moverse como un caballo."],
    ["Reptar", "Moverse arrastrándose como una serpiente."],
    ["Lanzar", "Tirar un objeto con fuerza."],
    ["Atrapar", "Coger un objeto que viene hacia nosotros."],
    ["Girar", "Dar una vuelta sobre uno mismo."],
    ["Circuito", "Varias pruebas seguidas en un recorrido."],
  ],
  situacion: L3.sit("Nuestras olimpiadas", "Vamos a organizar unas olimpiadas en el patio con pruebas de correr, saltar, lanzar y girar.", ["Por grupos, preparamos una prueba con conos, aros, pelotas o colchonetas.", "Explicamos la prueba a los demás con un dibujo y un ejemplo.", "Hacemos las olimpiadas por turnos, animando a los compañeros.", "Al final, cada niño dice qué prueba ha mejorado y recibe una medalla de cartón."], "Unas olimpiadas de clase con cuatro pruebas.", ["Corre, salta y lanza con buena técnica.", "Respeta los turnos y anima a los demás.", "Dice qué ha mejorado con la práctica."]),
  familias: [
    "En el parque, jugad a imitar animales: canguro, gato, serpiente, caballo.",
    "Pintad una rayuela con tiza y jugad juntos.",
    "Pasaos una pelota blanda contando cuántas veces seguidas la atrapáis.",
    "Haced un circuito en casa o en el parque con cojines para saltar y un cubo para lanzar.",
  ],
  profesores: PROF("Educación Física: habilidades motrices básicas (desplazamientos, saltos, lanzamientos y recepciones, giros) y coordinación dinámica general en situaciones de juego", ["Circuito por estaciones: zigzag entre conos, saltos en aros y lanzamiento a cajas.", "Juego de los animales para variar los desplazamientos.", "Pases por parejas con pelotas blandas de distintos tamaños."]),
  fuentes: FUENTES,
  revisado: "2026-11-14",
};
