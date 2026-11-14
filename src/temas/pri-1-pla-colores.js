// Educación Plástica 1º de Primaria: los colores. Tema a nivel libro. Dibujos propios en SVG.
const { tema, C, dibujos, lista, mural, vid, manchas, mezcla, lienzo, texto } = require("./_pri1L2");
const { R, A, V, N, M, G, K } = C;

// Colores pintados (no dependen del tema claro/oscuro: son pinturas).
const P = { rojo: "#e53935", amarillo: "#fdd835", azul: "#1e88e5", verde: "#43a047", naranja: "#fb8c00", morado: "#8e24aa", blanco: "#ffffff", negro: "#212121", marron: "#795548", rosa: "#f48fb1", gris: "#9e9e9e", celeste: "#81d4fa", marino: "#0d47a1" };

// Escalera de un color de claro a oscuro.
const escalera = lienzo("Cinco cuadrados azules: de muy claro a muy oscuro", ["#e3f2fd", "#90caf9", P.azul, "#1565c0", P.marino].map((c, i) =>
  `<rect x="${18 + i * 46}" y="56" width="40" height="56" rx="8" fill="${c}" stroke="var(--line)" stroke-width="2"/>`).join("") +
  texto(40, 136, "+ blanco", { size: 14, color: "var(--muted)", max: 80 }) + texto(220, 136, "+ negro", { size: 14, color: "var(--muted)", max: 80 }) +
  "", { titulo: "Claro → oscuro", nota: "El mismo azul, más claro o más oscuro" });

// Semáforo.
const semaforo = lienzo("Un semáforo con luz roja, ámbar y verde", `<rect x="95" y="30" width="70" height="140" rx="14" fill="var(--ink)"/>` +
  [[P.rojo, "para"], [P.naranja, "cuidado"], [P.verde, "pasa"]].map(([c, t], i) =>
    `<circle cx="130" cy="${55 + i * 44}" r="17" fill="${c}"/>${texto(i === 1 ? 52 : 210, 61 + i * 44, t, { size: 15, max: 80, color: c })}`).join(""), { titulo: "Colores que avisan" });

module.exports = tema({
  materia: "Educación Plástica",
  titulo: "Los colores",
  minutos: 50,
  objetivos: ["Conocer los colores primarios: rojo, amarillo y azul", "Mezclar colores para conseguir otros nuevos", "Hacer un color más claro o más oscuro", "Distinguir colores cálidos y fríos", "Usar los colores para expresar emociones"],
  claves: ["primarios", "secundarios", "mezclar", "claro", "oscuro", "cálidos", "fríos"],
  pregunta: ["Si solo tienes pintura amarilla y azul, ¿cómo puedes pintar la hierba verde?", "<mark>Mezclando amarillo y azul</mark>. Al juntarlos sale el verde. ¡Con pocos colores se pueden hacer muchos!"],
  lectura: ["La pintora que solo tenía tres botes", `<p>Nora quería pintar un mural en la pared del cole.</p><p>Pero en el armario solo quedaban tres botes de pintura: rojo, amarillo y azul.</p><p>—¡Así no puedo pintar la hierba verde! —dijo, triste.</p><p>Su abuelo sonrió y le dio un plato viejo.</p><p>—Pon un poco de amarillo. Ahora, un poco de azul. Remueve con el pincel.</p><p>¡Apareció el verde! Luego Nora mezcló rojo y amarillo, y salió el naranja. Con rojo y azul hizo el morado.</p><p>Al final, el mural tenía un arcoíris entero.</p><p>—Tres botes eran muchos colores —rió Nora.</p>`],
  bloques: [
    ["Un mundo de colores", `<p>Mira a tu alrededor. El cielo es <b>azul</b>, la hierba es <b>verde</b> y las fresas son <b>rojas</b>.</p><p>Los <mark>colores</mark> nos ayudan a reconocer las cosas. Una manzana verde está aún sin madurar. Una roja ya se puede comer.</p><p>Los artistas usan los colores para que sus dibujos sean alegres, tranquilos o misteriosos.</p><p>¡Tú también eres artista! En este tema aprenderás a usar los colores como los pintores.</p>`,
      dibujos("Cosas de colores: sol amarillo, manzana roja, árbol verde y pez azul", [["sol", "amarillo", "#f9a825"], ["manzana", "rojo", P.rojo], ["arbol", "verde", P.verde], ["pez", "azul", P.azul]], { titulo: "¿De qué color es?" })],
    ["Los colores primarios", `<p>Hay tres colores muy importantes: el <mark>rojo</mark>, el <mark>amarillo</mark> y el <mark>azul</mark>.</p><p>Se llaman <b>colores primarios</b>. No se pueden conseguir mezclando otros colores.</p><p>En cambio, con ellos podemos hacer <b>casi todos los demás</b>.</p><p>Son como los ingredientes básicos de una receta. Con harina, huevos y leche puedes hacer muchos postres. Con rojo, amarillo y azul, ¡muchísimos colores!</p>`,
      manchas("Tres manchas de pintura: rojo, amarillo y azul", [[P.rojo, "rojo"], [P.amarillo, "amarillo"], [P.azul, "azul"]], { titulo: "Los tres primarios" })],
    ["Mezclamos: los secundarios", `<p>Si mezclamos <b>dos colores primarios</b>, sale un color nuevo. Se llama <mark>color secundario</mark>.</p><p><b>Amarillo + azul = verde.</b></p><p><b>Rojo + amarillo = naranja.</b></p><p><b>Rojo + azul = morado.</b></p><p>Para mezclar, pon un poco de cada color en un plato y remueve con el pincel.</p><p>Si pones más amarillo, el verde sale más clarito. Si pones más azul, sale más oscuro. ¡Prueba!</p>`,
      mezcla("Amarillo más azul es verde; rojo más amarillo es naranja; rojo más azul es morado", [[[P.amarillo, "amarillo"], [P.azul, "azul"], [P.verde, "verde"]], [[P.rojo, "rojo"], [P.amarillo, "amarillo"], [P.naranja, "naranja"]], [[P.rojo, "rojo"], [P.azul, "azul"], [P.morado, "morado"]]]),
      vid("lvCrwRFWpPw", "Los colores primarios, secundarios y terciarios", "Smile and Learn - Español", 3858629)],
    ["Más mezclas", `<p>Con otras mezclas conseguimos todavía más colores.</p><p><b>Rojo + blanco = rosa.</b> El blanco hace los colores más suaves.</p><p><b>Negro + blanco = gris</b>, como las nubes de tormenta.</p><p>Si mezclamos <b>los tres primarios</b>, sale el <b>marrón</b>, el color de la tierra y de los troncos.</p><p>Mezcla poco a poco. Si echas demasiado, ¡el color puede salir muy distinto! Lava el pincel antes de cambiar de color.</p>`,
      mezcla("Rojo más blanco es rosa; negro más blanco es gris", [[[P.rojo, "rojo"], [P.blanco, "blanco"], [P.rosa, "rosa"]], [[P.negro, "negro"], [P.blanco, "blanco"], [P.gris, "gris"]]], { titulo: "Más colores" })],
    ["Claro y oscuro", `<p>Un mismo color puede ser <mark>claro</mark> u <mark>oscuro</mark>.</p><p>Para hacerlo <b>más claro</b>, le añadimos un poco de <b>blanco</b>. El azul se vuelve azul cielo.</p><p>Para hacerlo <b>más oscuro</b>, le añadimos una gotita de <b>negro</b>. El azul se vuelve azul marino.</p><p>Con el negro hay que tener cuidado: ¡una gota es mucho!</p><p>Así podemos pintar el cielo de día, clarito, y el cielo de noche, oscuro.</p>`,
      escalera],
    ["Colores cálidos", `<p>El <b>rojo</b>, el <b>naranja</b> y el <b>amarillo</b> son <mark>colores cálidos</mark>.</p><p>Nos recuerdan el <b>sol</b>, el <b>fuego</b> y el verano. Dan sensación de calor.</p><p>También son colores con mucha energía y alegría.</p><p>Si pintas una fiesta, un día de playa o una hoguera, usa colores cálidos.</p><p>Las hojas de los árboles en otoño también tienen colores cálidos: amarillas, naranjas y rojizas.</p>`,
      manchas("Colores cálidos: rojo, naranja y amarillo", [[P.rojo, "rojo"], [P.naranja, "naranja"], [P.amarillo, "amarillo"]], { titulo: "Cálidos: como el fuego" })],
    ["Colores fríos", `<p>El <b>azul</b>, el <b>verde</b> y el <b>morado</b> son <mark>colores fríos</mark>.</p><p>Nos recuerdan el <b>agua</b>, el <b>hielo</b> y la noche. Dan sensación de frescor.</p><p>También transmiten calma y tranquilidad.</p><p>Si pintas el mar, la nieve o un bosque en silencio, usa colores fríos.</p><p>Compara un dibujo con colores cálidos y otro con fríos. ¿Cuál te parece más alegre? ¿Cuál más tranquilo?</p>`,
      manchas("Colores fríos: azul, verde y morado", [[P.azul, "azul"], [P.verde, "verde"], [P.morado, "morado"]], { titulo: "Fríos: como el agua" }),
      vid("nvOA3D184q0", "Fríos y cálidos: clases de artes para niños", "CNTV Infantil", 523955)],
    ["Colores y emociones", `<p>Los colores también pueden expresar <mark>emociones</mark>.</p><p>Muchas personas usan el <b>amarillo</b> para la alegría y el <b>azul</b> para la tristeza o la calma.</p><p>El <b>rojo</b> puede ser enfado, pero también amor.</p><p>No hay una única respuesta: cada persona siente los colores a su manera.</p><p>¿De qué color estás tú hoy? Pinta una cara con el color de tu emoción y explica por qué lo has elegido.</p>`,
      dibujos("Caras de emociones con colores: feliz en amarillo, triste en azul y amor en rojo", [["feliz", "alegre", "#f9a825"], ["triste", "triste", P.azul], ["corazon", "amor", P.rojo]], { titulo: "¿De qué color me siento?" })],
    ["Los colores de la naturaleza", `<p>La <mark>naturaleza</mark> está llena de colores.</p><p>Hay flores rojas, amarillas y moradas. Hay mariposas de muchos colores y peces naranjas.</p><p>Los colores ayudan a los animales. La rana verde se esconde entre las hojas. La mariquita roja avisa: ¡no me comas!</p><p>Los colores cambian con las estaciones: el campo es verde en primavera y dorado en verano.</p><p>Sal al patio y busca cinco colores distintos.</p>`,
      dibujos("Colores en la naturaleza: rana verde, flor roja, mariposa morada y pez naranja", [["rana", "verde", P.verde], ["flor", "roja", P.rojo], ["mariposa", "morada", P.morado], ["pez", "naranja", P.naranja]], { titulo: "Busca colores" })],
    ["¿Para qué sirven?", `<p>Los colores no solo sirven para pintar bonito. También nos <mark>dan información</mark>.</p><p>El <b>semáforo</b> usa colores: rojo para parar, ámbar para tener cuidado y verde para pasar.</p><p>Las papeleras de reciclar tienen colores: amarillo para envases, azul para papel y verde para vidrio.</p><p>Los colores también nos ayudan a ordenar. En clase, cada grupo puede tener su color.</p><p>¡Fíjate en los colores que te avisan por la calle!</p>`,
      semaforo],
    ["Juego: el veo veo de colores", `<p>Vamos a jugar al <mark>veo veo de colores</mark>.</p><p>Una persona dice: «Veo veo una cosa de color… ¡verde!».</p><p>Los demás miran a su alrededor y buscan cosas verdes: la pizarra, una hoja, una mochila.</p><p>Quien acierte, elige el siguiente color.</p><p>Para hacerlo más difícil, di también si es claro u oscuro, cálido o frío.</p><p>¡Con este juego entrenas los ojos de artista!</p>`,
      dibujos("Veo veo: cosas verdes", [["arbol", "árbol", P.verde], ["rana", "rana", P.verde], ["pera", "pera", P.verde]], { titulo: "Veo veo… ¡verde!" })],
    ["Repaso: lo que ya sé", `<p>Los <mark>primarios</mark> son rojo, amarillo y azul.</p><p>Mezclando dos primarios salen los <mark>secundarios</mark>: verde, naranja y morado.</p><p>Con <b>blanco</b> un color se aclara. Con <b>negro</b>, se oscurece.</p><p>Los colores <b>cálidos</b> recuerdan el fuego. Los <b>fríos</b> recuerdan el agua.</p><p>Y los colores sirven para expresar emociones y para dar avisos.</p><p>¡Ya puedes pintar como un artista de verdad!</p>`,
      lista("Repaso de los colores", [["Primarios: rojo, amarillo, azul", R], ["Secundarios: verde, naranja, morado", V], ["Claro con blanco, oscuro con negro", G], ["Cálidos y fríos", A]], { titulo: "Ya sé…" })],
  ],
  figura: ["El círculo de los colores", mural("Primarios, secundarios, cálidos y fríos", [["manzana", "Primarios", "rojo · amarillo · azul", R], ["arbol", "Secundarios", "verde · naranja · morado", V], ["sol", "Cálidos", "rojo · naranja · amarillo", M], ["pez", "Fríos", "azul · verde · morado", A]], "Los colores")],
  video: { ...vid("oVr7NhOJOn0", "Aprende los colores primarios con Mon el dragón", "Babyradio", 1013031), busqueda: "colores primarios para niños" },
  ejemplos: [
    ["¿Cómo conseguimos el color verde?", ["Busco dos primarios.", "Pongo amarillo en el plato.", "Añado azul y remuevo."], "amarillo + azul = verde."],
    ["Quiero pintar un cielo de noche. ¿Qué hago con el azul?", ["El cielo de noche es oscuro.", "Para oscurecer añado negro.", "Solo una gotita."], "azul + un poco de negro = azul oscuro."],
    ["¿El naranja es cálido o frío?", ["Pienso en qué me recuerda.", "Me recuerda al fuego y al sol.", "Esos colores dan calor."], "el naranja es un color cálido."],
    ["Pinta un mar tranquilo.", ["Elijo colores fríos.", "Uso azul y verde.", "Hago el agua de cerca más oscura."], "un mar con azules y verdes."],
  ],
  errores: [
    "Pensar que el verde es primario: se consigue con amarillo y azul.",
    "Echar mucho negro para oscurecer: basta una gotita.",
    "No lavar el pincel entre colores: los colores se ensucian.",
    "Creer que un color solo significa una emoción: cada persona lo siente a su manera.",
  ],
  basico: [
    ["Nombra los tres colores primarios.", "Rojo, amarillo y azul."],
    ["¿De qué color es el sol en tus dibujos?", "Amarillo (o naranja)."],
    ["Pinta una manzana roja y una hoja verde.", "Dibujo libre con esos colores."],
    ["Amarillo + azul = …", "Verde."],
    ["Rojo + amarillo = …", "Naranja."],
    ["Rojo + azul = …", "Morado."],
    ["¿Qué color usas para el cielo de día?", "Azul claro."],
    ["Busca tres cosas rojas en clase.", "Respuesta libre."],
  ],
  medio: [
    ["¿Qué añades para hacer un color más claro?", "Blanco."],
    ["¿Qué añades para hacer un color más oscuro?", "Un poco de negro."],
    ["Nombra tres colores cálidos.", "Rojo, naranja y amarillo."],
    ["Nombra tres colores fríos.", "Azul, verde y morado."],
    ["Rojo + blanco = …", "Rosa."],
    ["Negro + blanco = …", "Gris."],
    ["¿Qué significa la luz roja del semáforo?", "Parar."],
    ["Pinta una cara alegre con el color que elijas y explica por qué.", "Respuesta libre."],
    ["¿Por qué la rana es verde?", "Para esconderse entre las hojas."],
  ],
  avanzado: [
    ["Mezcla los tres primarios. ¿Qué color sale?", "Marrón."],
    ["Pinta un mismo árbol dos veces: con colores cálidos y con colores fríos.", "Dibujo libre; uno da calor y otro calma."],
    ["Haz una escalera de un color: de muy claro a muy oscuro.", "Cuadrados con más blanco a un lado y más negro al otro."],
    ["Inventa un semáforo de emociones con tres colores.", "Respuesta libre con colores y emociones."],
    ["Busca en una obra de arte colores cálidos y fríos.", "Respuesta libre señalando colores de la obra."],
  ],
  quiz: [
    ["¿Cuál es un color primario?", ["verde", "azul", "morado"], 1, "Azul es primario."],
    ["Amarillo + azul =", ["verde", "naranja", "rosa"], 0, "Verde."],
    ["Rojo + amarillo =", ["morado", "naranja", "gris"], 1, "Naranja."],
    ["Rojo + azul =", ["morado", "verde", "marrón"], 0, "Morado."],
    ["Para aclarar un color añado…", ["negro", "blanco", "rojo"], 1, "Blanco."],
    ["Para oscurecer un color añado…", ["negro", "amarillo", "blanco"], 0, "Negro."],
    ["¿Qué color es cálido?", ["azul", "naranja", "verde"], 1, "Naranja: recuerda al fuego."],
    ["¿Qué color es frío?", ["rojo", "amarillo", "azul"], 2, "Azul: recuerda al agua."],
    ["Negro + blanco =", ["gris", "rosa", "verde"], 0, "Gris."],
    ["En el semáforo, verde significa…", ["parar", "pasar", "correr"], 1, "Pasar."],
    ["¿Cuántos colores primarios hay?", ["tres", "dos", "diez"], 0, "Tres."],
    ["Rojo + blanco =", ["rosa", "morado", "naranja"], 0, "Rosa."],
  ],
  examen: [
    ["Los primarios son rojo, amarillo y…", ["azul", "verde", "negro"], 0, "Azul."],
    ["El verde se consigue con…", ["amarillo y azul", "rojo y azul", "blanco y negro"], 0, "Amarillo y azul."],
    ["Los colores fríos recuerdan…", ["el agua", "el fuego", "el sol"], 0, "El agua y el hielo."],
    ["El morado sale de…", ["rojo y azul", "rojo y amarillo", "azul y blanco"], 0, "Rojo y azul."],
    ["Un azul con blanco se vuelve…", ["más claro", "más oscuro", "rojo"], 0, "Más claro."],
    ["¿Qué color es cálido?", ["amarillo", "azul", "morado"], 0, "Amarillo."],
  ],
  feynman: ["Qué son los colores primarios", "Cómo se consigue el verde", "La diferencia entre colores cálidos y fríos"],
  mapa: ["LOS COLORES", [["Primarios", "rojo · amarillo · azul", R], ["Secundarios", "verde · naranja · morado", V], ["Claro / oscuro", "+ blanco · + negro", G], ["Cálidos / fríos", "fuego · agua", A]], 230],
  tarjetas: [
    ["Colores primarios", "Rojo, amarillo y azul"],
    ["Amarillo + azul", "Verde"],
    ["Rojo + amarillo", "Naranja"],
    ["Rojo + azul", "Morado"],
    ["Para aclarar", "Añado blanco"],
    ["Para oscurecer", "Añado un poco de negro"],
    ["Colores cálidos", "Rojo, naranja, amarillo"],
    ["Colores fríos", "Azul, verde, morado"],
    ["Negro + blanco", "Gris"],
    ["Los tres primarios juntos", "Marrón"],
  ],
  glosario: [
    ["Color primario", "Rojo, amarillo o azul: no se hacen mezclando."],
    ["Color secundario", "El que sale al mezclar dos primarios."],
    ["Mezclar", "Juntar dos pinturas y removerlas."],
    ["Paleta", "Plato o tabla donde se mezclan las pinturas."],
    ["Pincel", "Palo con pelos para pintar."],
    ["Cálido", "Color que recuerda al calor, como el rojo."],
    ["Frío", "Color que recuerda al frescor, como el azul."],
    ["Tono", "Si un color es más claro o más oscuro."],
  ],
  situacion: ["El mural de los tres botes", "Como Nora, vamos a pintar un mural de clase solo con rojo, amarillo, azul, blanco y negro.", ["Mezclamos en platos los colores secundarios.", "Preparamos tonos claros y oscuros.", "Pintamos por grupos: una parte cálida (el sol, el fuego) y otra fría (el mar, la noche).", "Contamos a otra clase qué mezclas hemos usado."], "un mural de clase pintado con mezclas propias.", ["Consigue verde, naranja y morado mezclando.", "Aclara y oscurece un color.", "Usa colores cálidos y fríos con intención."]],
  familias: [
    "Jugad al veo veo de colores en casa o por la calle.",
    "Mezclad pinturas en un plato: ¿qué sale con amarillo y azul?",
    "Al vestir, preguntadle si la ropa es de colores cálidos o fríos.",
    "Buscad juntos colores que avisan: semáforos, señales, papeleras.",
  ],
  saberes: "Elementos del lenguaje plástico: el color. Colores primarios y secundarios, mezclas, claro y oscuro, colores cálidos y fríos y el color para expresar emociones",
  ideas: ["Taller de mezclas con témperas en platos de plástico.", "Mural colectivo dividido en zona cálida y zona fría.", "Caja de emociones de colores para la asamblea.", "Paseo por el patio buscando colores de la naturaleza."],
});
