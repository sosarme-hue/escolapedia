// Ciencias de la Naturaleza 5º de Primaria: el aparato locomotor. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, nino, suelo } = require("./_pri5b");

// Esqueleto sencillo de frente centrado en x.
const esqueleto = (x = 70, c = "#e7e5e4", b = "#78716c") => `<g stroke="${b}" stroke-width="1.5" fill="${c}"><circle cx="${x}" cy="40" r="14"/><rect x="${x - 3}" y="54" width="6" height="56" rx="3"/>${[0, 1, 2, 3].map((i) => `<path d="M${x - 3} ${66 + i * 8} q-18 2 -20 10 M${x + 3} ${66 + i * 8} q18 2 20 10" fill="none" stroke-width="3"/>`).join("")}<path d="M${x - 26} 60 H${x + 26}" stroke-width="4"/><path d="M${x - 26} 60 L${x - 34} 104 L${x - 38} 140 M${x + 26} 60 L${x + 34} 104 L${x + 38} 140" fill="none" stroke-width="5"/><path d="M${x - 18} 112 q18 -10 36 0 l-6 10 h-24z"/><path d="M${x - 10} 120 L${x - 14} 150 L${x - 14} 176 M${x + 10} 120 L${x + 14} 150 L${x + 14} 176" fill="none" stroke-width="6"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "El aparato locomotor",
  minutos: 45,
  objetivos: ["Explicar qué es el aparato locomotor y qué partes tiene", "Nombrar los principales huesos y sus funciones", "Conocer los tipos de articulaciones", "Explicar cómo los músculos mueven los huesos", "Adoptar hábitos para cuidar huesos, músculos y articulaciones"],
  claves: ["aparato locomotor", "esqueleto", "hueso", "columna vertebral", "cráneo", "articulación", "ligamento", "cartílago", "músculo", "tendón", "contracción", "postura"],
  pregunta: {
    texto: "Un pulpo no tiene huesos y se mueve como si fuera de goma. ¿Qué pasaría si tú no tuvieras huesos?",
    respuesta: "Serías un saco blando incapaz de mantenerte de pie. Los <mark>huesos</mark> forman un armazón que sostiene el cuerpo, protege los órganos y, junto con los <mark>músculos</mark> y las <mark>articulaciones</mark>, nos permite movernos. Todo eso forma el <b>aparato locomotor</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el aparato locomotor?</h3><p>El <mark>aparato locomotor</mark> es el conjunto de órganos que nos permite <b>movernos</b>: andar, correr, saltar, escribir, sonreír o masticar. Forma parte de la <b>función de relación</b>, porque gracias a él respondemos a lo que pasa a nuestro alrededor.</p><p>Tiene dos partes que trabajan siempre juntas:</p><p>• El <b>sistema esquelético</b> u <b>óseo</b>: formado por los <b>huesos</b> y las <b>articulaciones</b>, que son las uniones entre huesos. Es la parte <b>pasiva</b>: los huesos no se mueven solos.</p><p>• El <b>sistema muscular</b>: formado por los <b>músculos</b> y los <b>tendones</b>. Es la parte <b>activa</b>: los músculos tiran de los huesos y los mueven.</p><p>Pero ninguno de los dos se movería sin las órdenes del <b>sistema nervioso</b>. El cerebro envía un mensaje por los nervios, el músculo se contrae, tira del hueso y la articulación se dobla. Así, por ejemplo, levantas la mano para contestar en clase.</p>`,
      svg: svg("El aparato locomotor tiene parte pasiva (huesos y articulaciones) y parte activa (músculos y tendones)", `${tit("Dos sistemas en equipo")}${cj2(14, 42, 110, 62, "Esquelético", "huesos y articulaciones", COL.marron)}${cj2(136, 42, 110, 62, "Muscular", "músculos y tendones", COL.rojo)}${tx(69, 120, "parte pasiva", 110, { weight: 700, color: COL.marron })}${tx(191, 120, "parte activa", 110, { weight: 700, color: COL.rojo })}${cj(50, 136, 160, 28, "órdenes del sistema nervioso", COL.morado)}`),
      video: vid("w8PnlLptHXE"),
    },
    {
      html: `<h3>Los huesos y sus funciones</h3><p>Los <mark>huesos</mark> son órganos duros y resistentes. Aunque parecen piedras, están <b>vivos</b>: tienen células, vasos sanguíneos y nervios, crecen mientras eres pequeño y se reparan solos si se rompen (por eso, cuando hay una fractura, se pone una escayola para que el hueso se suelde bien colocado).</p><p>Están formados sobre todo por <b>calcio</b> y otros minerales, que les dan dureza, y por una sustancia llamada colágeno, que les da algo de flexibilidad. En su interior, algunos huesos tienen <b>médula ósea</b> roja, donde se fabrican las células de la sangre.</p><p>Los huesos tienen tres funciones principales:</p><p>• <b>Sostén</b>: forman el armazón que da forma al cuerpo y lo mantiene erguido.<br>• <b>Protección</b>: protegen órganos delicados. El cráneo protege el cerebro y las costillas protegen el corazón y los pulmones.<br>• <b>Movimiento</b>: sirven de palanca a los músculos.</p><p>Por su forma se clasifican en <b>largos</b> (fémur, húmero), <b>cortos</b> (los de la muñeca, las vértebras) y <b>planos</b> (el omóplato, los del cráneo).</p>`,
      svg: svg("Tres funciones de los huesos y tres formas: largos, cortos y planos", `${tit("Funciones y formas")}${flujo([["sostén", COL.marron], ["protección", COL.azul], ["movimiento", COL.rojo]], 38, 30)}<rect x="30" y="98" width="12" height="54" rx="6" fill="#e7e5e4" stroke="#78716c" stroke-width="2"/><circle cx="36" cy="98" r="8" fill="#e7e5e4" stroke="#78716c" stroke-width="2"/><circle cx="36" cy="152" r="8" fill="#e7e5e4" stroke="#78716c" stroke-width="2"/>${et(80, 128, "largo", 50, { size: 11, color: COL.marron })}<rect x="112" y="112" width="24" height="22" rx="5" fill="#e7e5e4" stroke="#78716c" stroke-width="2"/>${et(124, 156, "corto", 50, { size: 11, color: COL.marron })}<path d="M170 106 q30 -10 58 6 l-10 40 q-24 4 -42 -8z" fill="#e7e5e4" stroke="#78716c" stroke-width="2"/>${et(202, 168, "plano", 50, { size: 11, color: COL.marron })}`),
    },
    {
      html: `<h3>El esqueleto humano</h3><p>El conjunto de todos los huesos forma el <mark>esqueleto</mark>. Un adulto tiene <b>206 huesos</b>; un bebé tiene más, unos 300, porque algunos se van uniendo al crecer. Se divide en tres partes:</p><p>• <b>Cabeza</b>: el <b>cráneo</b>, una caja de huesos planos que protege el cerebro, y los huesos de la <b>cara</b>. El único que se mueve es la <b>mandíbula</b>, gracias a la cual masticamos y hablamos.</p><p>• <b>Tronco</b>: la <b>columna vertebral</b>, formada por 33 vértebras apiladas que nos sostienen y protegen la médula espinal; las <b>costillas</b> (12 pares) y el <b>esternón</b>, que forman la caja torácica; y la <b>pelvis</b>, que sostiene los órganos de la barriga.</p><p>• <b>Extremidades</b>: en los brazos, la <b>clavícula</b>, el <b>omóplato</b>, el <b>húmero</b>, el <b>cúbito</b>, el <b>radio</b> y los huesos de la mano. En las piernas, el <b>fémur</b> (el hueso más largo del cuerpo), la <b>rótula</b>, la <b>tibia</b>, el <b>peroné</b> y los huesos del pie.</p><p>El hueso más pequeño es el <b>estribo</b>, dentro del oído: mide unos 3 milímetros.</p>`,
      svg: svg("Esqueleto humano con cráneo, columna, costillas, pelvis, húmero y fémur", `${tit("El esqueleto")}${esqueleto(70)}${[["cráneo", 44, COL.marron], ["costillas", 74, COL.marron], ["columna", 96, COL.azul], ["húmero", 118, COL.rojo], ["pelvis", 138, COL.verde], ["fémur", 160, COL.rojo]].map(([s, y, c]) => `<circle cx="138" cy="${y - 4}" r="4" fill="${c}"/>${et(190, y, s, 90, { size: 11, color: c })}`).join("")}`),
      video: vid("NknwJY-ywFw"),
    },
    {
      html: `<h3>Las articulaciones</h3><p>Una <mark>articulación</mark> es la zona donde se unen dos o más huesos. Según cuánto se mueven, hay tres tipos:</p><p>• <b>Fijas o inmóviles</b>: los huesos están encajados como piezas de un puzle y no se mueven nada. Por ejemplo, los huesos del cráneo.</p><p>• <b>Semimóviles</b>: se mueven un poco. Por ejemplo, las vértebras de la columna: cada una se mueve poquito, pero entre todas permiten doblar la espalda.</p><p>• <b>Móviles</b>: se mueven mucho. Por ejemplo, el hombro, el codo, la rodilla, la cadera o los dedos.</p><p>Las articulaciones móviles tienen piezas especiales para que el movimiento sea suave y seguro:</p><p>• El <b>cartílago</b>: una capa lisa y elástica que cubre los extremos de los huesos para que no se desgasten al rozar.<br>• Los <b>ligamentos</b>: cordones fuertes que unen un hueso con otro y evitan que se salgan de su sitio. Cuando se dañan por un mal giro hablamos de un <b>esguince</b>.<br>• El <b>líquido sinovial</b>: un líquido que lubrica la articulación, como el aceite de una bisagra.</p>`,
      svg: svg("Tres tipos de articulaciones: fijas, semimóviles y móviles con ejemplos", `${tit("Tipos de articulaciones")}${fichas([["Fijas", "cráneo: no se mueven", COL.gris], ["Semimóviles", "vértebras: poco", COL.sol], ["Móviles", "rodilla, codo: mucho", COL.verde], ["Ayudantes", "cartílago y ligamentos", COL.azul]])}`),
      video: vid("gwK5f2cyhgc"),
    },
    {
      html: `<h3>Los músculos</h3><p>Los <mark>músculos</mark> son órganos blandos y elásticos formados por tejido muscular. Tenemos más de <b>600 músculos</b> y suponen casi la mitad del peso de nuestro cuerpo. Su característica principal es que pueden <b>contraerse</b> (acortarse y ponerse duros) y <b>relajarse</b> (volver a su tamaño).</p><p>Hay dos grandes grupos:</p><p>• <b>Músculos voluntarios</b>: los movemos cuando queremos, como los de los brazos, las piernas o la cara. Están unidos a los huesos y se llaman <b>músculos esqueléticos</b>.</p><p>• <b>Músculos involuntarios</b>: funcionan solos, sin que lo decidamos. Por ejemplo, el <b>corazón</b>, que late día y noche, o los músculos del estómago y del intestino, que empujan la comida.</p><p>Algunos músculos importantes son: los de la <b>cara</b> (nos permiten sonreír, fruncir el ceño o guiñar un ojo), el <b>bíceps</b> y el <b>tríceps</b> en el brazo, los <b>pectorales</b> en el pecho, los <b>abdominales</b> en la barriga, el <b>glúteo</b> (el más grande del cuerpo) y los <b>gemelos</b> en la pantorrilla.</p>`,
      svg: svg("Músculos voluntarios como el bíceps y músculos involuntarios como el corazón", `${tit("Voluntarios e involuntarios")}${cj2(14, 40, 112, 60, "Voluntarios", "brazos, piernas, cara", COL.rojo)}${cj2(134, 40, 112, 60, "Involuntarios", "corazón, estómago", COL.morado)}${nino(70, 168, { pose: "brazos", c: COL.rojo, s: 0.9 })}<path d="M196 126 C182 112 180 102 190 100 C196 100 198 106 198 108 C198 106 200 100 206 100 C216 102 214 112 198 126z" fill="var(--red)"/>${tx(196, 150, "late solo", 90)}`),
      video: vid("KyNVl14_L5Q"),
    },
    {
      html: `<h3>Cómo mueven los músculos a los huesos</h3><p>Los músculos esqueléticos están unidos a los huesos mediante los <mark>tendones</mark>, unos cordones blancos muy resistentes. El más fuerte del cuerpo es el <b>tendón de Aquiles</b>, en el talón.</p><p>Un músculo solo puede <b>tirar</b>, nunca empujar. Por eso los músculos trabajan <b>por parejas</b>, cada uno a un lado del hueso, y hacen movimientos opuestos. Fíjate en el brazo:</p><p>• Para <b>doblar</b> el codo, el <b>bíceps</b> (en la parte de delante) se contrae y tira del antebrazo hacia arriba, mientras el <b>tríceps</b> (detrás) se relaja.</p><p>• Para <b>estirar</b> el brazo ocurre lo contrario: el <b>tríceps</b> se contrae y el <b>bíceps</b> se relaja.</p><p>Compruébalo: pon la mano izquierda sobre tu brazo derecho y dobla y estira el codo. Notarás cómo el bíceps se pone duro al doblarlo y cómo el tríceps se endurece al estirarlo.</p><p>Lo mismo pasa en la pierna: el cuádriceps estira la rodilla y los músculos de detrás del muslo la doblan.</p>`,
      svg: svg("Brazo doblado: el bíceps se contrae y el tríceps se relaja", `${tit("Bíceps y tríceps")}<g transform="translate(0 22)"><path d="M40 70 L120 70" stroke="#78716c" stroke-width="8" stroke-linecap="round"/><path d="M120 70 L170 30" stroke="#78716c" stroke-width="7" stroke-linecap="round"/><circle cx="120" cy="70" r="8" fill="#e7e5e4" stroke="#78716c" stroke-width="2"/><path d="M50 62 q34 -34 72 -2" fill="#f87171" stroke="var(--red)" stroke-width="2"/><path d="M48 78 q36 10 70 0" stroke="#fca5a5" stroke-width="7" fill="none" stroke-linecap="round"/></g>${et(70, 50, "bíceps: se contrae", 120, { size: 11, color: COL.rojo })}${et(84, 124, "tríceps: se relaja", 120, { size: 11, color: COL.naranja })}${et(206, 112, "codo", 60, { size: 11, color: COL.marron })}${tx(130, 150, "Los músculos solo tiran:", 230, { weight: 700 })}${tx(130, 168, "trabajan por parejas opuestas", 230)}`),
    },
    {
      html: `<h3>Lesiones del aparato locomotor</h3><p>Al hacer deporte, jugar o tener un accidente podemos sufrir lesiones. Las más frecuentes son:</p>${tabla(["Lesión", "Qué ocurre", "Qué notamos"], [["Fractura", "se rompe un hueso", "mucho dolor, hinchazón, no se puede mover"], ["Esguince", "se estiran o rompen ligamentos", "dolor en la articulación, hinchazón"], ["Luxación", "un hueso se sale de la articulación", "deformidad y dolor"], ["Rotura fibrilar o tirón", "se rompen fibras de un músculo", "pinchazo de dolor"], ["Contractura", "un músculo se queda contraído", "dureza y molestia"], ["Agujetas", "pequeñas lesiones por un esfuerzo nuevo", "molestias 1 o 2 días después"]])}<p>Ante un golpe fuerte: <b>no muevas</b> la zona lesionada, avisa a un adulto, aplica <b>frío</b> envuelto en un paño (nunca hielo directo en la piel) y mantén la zona en <b>reposo</b> y, si se puede, <b>elevada</b>. Será un médico quien decida si hace falta una radiografía, una escayola o un vendaje.</p>`,
      svg: svg("Qué hacer ante una lesión: no mover, avisar, frío, reposo y elevar", `${tit("Ante una lesión")}${columna([["no mover la zona", COL.rojo], ["avisar a un adulto", COL.naranja], ["frío envuelto en un paño", COL.agua], ["reposo y elevar", COL.verde]], 130, 200, 36, 24, 12)}`),
    },
    {
      html: `<h3>Cuidar el aparato locomotor</h3><p>Los huesos y los músculos que tengas de mayor dependen mucho de lo que hagas ahora, mientras creces. Estos hábitos te ayudarán:</p><p>• <b>Alimentación con calcio y proteínas</b>: leche, yogur, queso, legumbres, pescado, frutos secos y verduras de hoja verde fortalecen los huesos. Las proteínas construyen músculo.</p><p>• <b>Tomar el sol con prudencia</b>: un rato al aire libre ayuda a fabricar <b>vitamina D</b>, que sirve para que el calcio se fije en los huesos. Siempre con protección y evitando las horas centrales del verano.</p><p>• <b>Ejercicio físico diario</b>: correr, saltar, nadar o montar en bici hace que los huesos sean más densos y los músculos más fuertes. Calienta antes y estira después.</p><p>• <b>Buena postura</b>: siéntate con la espalda apoyada en el respaldo y los pies en el suelo. Coloca la pantalla a la altura de los ojos.</p><p>• <b>Mochila bien llevada</b>: con las dos asas, ajustada a la espalda y sin que pese más del 10 % de tu peso. Mejor si tiene ruedas.</p><p>• <b>Descansar</b>: durmiendo, los músculos se recuperan y el cuerpo crece.</p>`,
      svg: svg("Postura correcta sentado y mochila con dos asas", `${tit("Buenas posturas")}<rect x="30" y="136" width="50" height="6" fill="#a16207"/><path d="M32 142 V162 M78 142 V162 M32 136 V88" stroke="#a16207" stroke-width="4"/>${nino(52, 160, { pose: "sentado", c: COL.azul })}${et(56, 176, "espalda apoyada", 110, { size: 10.5, color: COL.verde })}${nino(180, 160, { c: COL.verde })}<rect x="164" y="104" width="16" height="30" rx="4" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>${et(190, 176, "mochila con dos asas", 110, { size: 10.5, color: COL.verde })}`),
    },
    {
      html: `<h3>Curiosidades y comparación con los animales</h3><p>Los vertebrados (mamíferos, aves, reptiles, anfibios y peces) tienen un <b>esqueleto interno</b> de huesos, como nosotros. Pero muchos animales se mueven sin huesos:</p><p>• Los <b>insectos</b>, las arañas y los cangrejos tienen un <b>esqueleto externo</b> o <b>exoesqueleto</b>: una cubierta dura por fuera del cuerpo. Como no crece, tienen que cambiarlo de vez en cuando (la <b>muda</b>).</p><p>• Las <b>lombrices</b> y los <b>pulpos</b> no tienen esqueleto duro: se mueven contrayendo músculos alrededor de líquido, como un globo de agua que aprietas.</p><p>Algunas curiosidades del cuerpo humano:</p><p>• Para dar un paso usas unos 200 músculos.<br>• Más de la mitad de tus huesos están en las manos y los pies.<br>• Los huesos son más ligeros de lo que parecen: el esqueleto pesa solo alrededor del 15 % del cuerpo.<br>• El músculo que más trabaja es el corazón: late más de 100.000 veces al día.<br>• Al nacer, el cráneo tiene zonas blandas, las <b>fontanelas</b>, que se cierran durante el primer año y medio.</p>`,
      svg: svg("Esqueleto interno en un pez, exoesqueleto en un escarabajo y sin esqueleto en una lombriz", `${tit("¿Y los animales?")}<path d="M24 80 q30 -26 60 0 q-30 26 -60 0z" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/><path d="M84 80 l14 -12 v24z" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/><path d="M30 80 H82 ${[40, 50, 60, 70].map((x) => `M${x} 70 V90`).join(" ")}" stroke="#78716c" stroke-width="2"/>${et(60, 120, "esqueleto interno", 100, { size: 10.5, color: COL.agua })}<ellipse cx="160" cy="82" rx="22" ry="28" fill="#86efac" stroke="#15803d" stroke-width="3"/><path d="M160 56 V108" stroke="#15803d" stroke-width="2"/>${[-1, 1].map((k) => `<path d="M${160 + k * 20} 70 l${k * 14} -8 M${160 + k * 22} 84 l${k * 16} 0 M${160 + k * 20} 98 l${k * 14} 8" stroke="#15803d" stroke-width="2"/>`).join("")}${et(160, 130, "exoesqueleto", 90, { size: 10.5, color: COL.verde })}<path d="M196 158 q10 -12 20 0 q10 12 20 0 q10 -12 18 -2" stroke="#f472b6" stroke-width="7" fill="none" stroke-linecap="round"/>${et(110, 160, "sin esqueleto duro: lombriz", 150, { size: 10.5, color: COL.rojo })}`),
    },
  ],
  figura: {
    titulo: "El aparato locomotor en ocho ideas",
    svg: rejilla([
      ["Locomotor", "huesos + músculos + articulaciones", COL.azul],
      ["Huesos", "sostén, protección, movimiento", COL.marron],
      ["Esqueleto", "206 huesos en el adulto", COL.gris],
      ["Articulación", "fija, semimóvil o móvil", COL.verde],
      ["Ligamentos", "unen hueso con hueso", COL.sol],
      ["Músculos", "se contraen y se relajan", COL.rojo],
      ["Tendones", "unen músculo y hueso", COL.naranja],
      ["Cuidados", "calcio, ejercicio y postura", COL.morado],
    ], 4, 86, "Resumen del aparato locomotor"),
  },
  video: vgen("w8PnlLptHXE", "huesos y músculos para niños primaria"),
  ejemplos: [
    { enunciado: "¿Qué tipo de articulación tiene la rodilla? Explica cómo lo sabes.",
      pasos: ["Piensa cuánto se mueve: la rodilla se dobla y se estira mucho.", "Las articulaciones que se mueven mucho son móviles.", "Además tiene cartílago, ligamentos y líquido sinovial."],
      resultado: "La rodilla es una articulación móvil." },
    { enunciado: "Al estirar el brazo para lanzar una pelota, ¿qué músculo se contrae y cuál se relaja?",
      pasos: ["Estirar el codo es el movimiento contrario a doblarlo.", "Para estirarlo tira el músculo de detrás del brazo: el tríceps.", "Mientras, el de delante, el bíceps, se relaja."],
      resultado: "Se contrae el tríceps y se relaja el bíceps." },
    { enunciado: "Un compañero se tuerce el tobillo en el patio y se le hincha. ¿Qué lesión puede ser y qué hacemos?",
      pasos: ["Un mal giro de una articulación que se hincha suele ser un esguince (ligamentos dañados).", "No hay que moverlo ni apoyar el pie.", "Avisamos a un adulto, ponemos frío envuelto en un paño y elevamos el pie."],
      resultado: "Posible esguince: reposo, frío, elevar y avisar a un adulto." },
  ],
  errores: [
    "Pensar que los huesos están muertos: están vivos, crecen y se reparan.",
    "Confundir tendones y ligamentos: los tendones unen músculo con hueso; los ligamentos, hueso con hueso.",
    "Creer que un músculo puede empujar: solo puede tirar; por eso trabajan por parejas.",
    "Decir que el corazón no es un músculo: es un músculo involuntario.",
    "Pensar que los insectos no tienen esqueleto: tienen un exoesqueleto por fuera.",
  ],
  ejercicios: [
    { q: "¿Qué partes forman el aparato locomotor y cuál es activa y cuál pasiva?", sol: "El sistema esquelético (huesos y articulaciones), parte pasiva, y el sistema muscular (músculos y tendones), parte activa." },
    { q: "Escribe las tres funciones de los huesos con un ejemplo de cada una.", sol: "Sostén (la columna nos mantiene erguidos), protección (el cráneo protege el cerebro) y movimiento (el fémur sirve de palanca para andar)." },
    { q: "¿Cuántos huesos tiene un adulto? ¿Por qué un bebé tiene más?", sol: "206. El bebé tiene unos 300 porque algunos huesos se van uniendo al crecer." },
    { q: "Nombra dos huesos de la cabeza, dos del tronco y dos de las extremidades.", sol: "Por ejemplo: cráneo y mandíbula; vértebras y costillas; húmero y fémur." },
    { q: "Clasifica las articulaciones: hombro, cráneo, vértebras, rodilla.", sol: "Móviles: hombro y rodilla. Fija: cráneo. Semimóviles: vértebras." },
    { q: "¿Para qué sirven el cartílago y el líquido sinovial?", sol: "El cartílago evita que los huesos se desgasten al rozar; el líquido sinovial lubrica la articulación para que se mueva con suavidad." },
    { q: "Pon dos ejemplos de músculos voluntarios y dos de involuntarios.", sol: "Voluntarios: bíceps y gemelos. Involuntarios: corazón y músculos del estómago." },
    { q: "Explica qué pasa con el bíceps y el tríceps al doblar el codo.", sol: "El bíceps se contrae y tira del antebrazo hacia arriba; el tríceps se relaja." },
    { q: "¿Qué diferencia hay entre una fractura y un esguince?", sol: "En una fractura se rompe un hueso; en un esguince se estiran o rompen los ligamentos de una articulación." },
    { q: "Escribe cuatro hábitos para cuidar el aparato locomotor.", sol: "Comer alimentos con calcio y proteínas, hacer ejercicio a diario, mantener buena postura y llevar bien la mochila (también descansar y tomar el sol con prudencia)." },
  ],
  quiz: [
    { q: "Los músculos se unen a los huesos mediante…", o: ["ligamentos", "tendones", "cartílagos"], a: 1, e: "Los tendones." },
    { q: "El hueso más largo del cuerpo es…", o: ["el fémur", "el húmero", "la tibia"], a: 0, e: "El fémur, en el muslo." },
    { q: "El cráneo protege…", o: ["el corazón", "los pulmones", "el cerebro"], a: 2, e: "El cerebro." },
    { q: "Las articulaciones del cráneo son…", o: ["móviles", "fijas", "semimóviles"], a: 1, e: "No se mueven." },
    { q: "El corazón es un músculo…", o: ["involuntario", "voluntario", "de la pierna"], a: 0, e: "Late sin que lo decidamos." },
    { q: "Para doblar el codo se contrae…", o: ["el tríceps", "el gemelo", "el bíceps"], a: 2, e: "El bíceps." },
    { q: "Los ligamentos unen…", o: ["músculo con hueso", "hueso con hueso", "nervio con músculo"], a: 1, e: "Hueso con hueso." },
    { q: "Un adulto tiene…", o: ["206 huesos", "100 huesos", "600 huesos"], a: 0, e: "206 huesos; los músculos son más de 600." },
    { q: "Para que el calcio se fije en los huesos es importante la vitamina…", o: ["C", "A", "D"], a: 2, e: "La vitamina D." },
    { q: "Los insectos tienen…", o: ["exoesqueleto", "huesos internos", "ningún sostén"], a: 0, e: "Un esqueleto externo." },
  ],
  examen: [
    { q: "La columna vertebral está formada por…", o: ["costillas", "vértebras", "falanges"], a: 1, e: "33 vértebras." },
    { q: "Si un hueso se sale de su articulación es una…", o: ["luxación", "contractura", "agujeta"], a: 0, e: "Luxación." },
    { q: "La mochila no debería pesar más del…", o: ["50 % de tu peso", "30 % de tu peso", "10 % de tu peso"], a: 2, e: "Alrededor del 10 %." },
    { q: "Los músculos trabajan por parejas porque…", o: ["solo pueden tirar", "son muy pequeños", "no tienen tendones"], a: 0, e: "Un músculo no puede empujar." },
  ],
  feynman: ["Qué partes forman el aparato locomotor y cómo colaboran con el sistema nervioso", "Qué tipos de articulaciones hay y qué piezas tiene una articulación móvil", "Cómo el bíceps y el tríceps doblan y estiran el brazo"],
  mapa: mapa("LOCOMOTOR", "var(--pri)", [
    ["Huesos", "sostén · protección · movimiento", COL.marron],
    ["Articulaciones", "fijas · semimóviles · móviles", COL.verde],
    ["Músculos", "voluntarios · involuntarios", COL.rojo],
    ["Cuidados", "calcio · ejercicio · postura", COL.azul],
  ], 250),
  tarjetas: [
    ["Esqueleto", "Conjunto de los 206 huesos del cuerpo adulto."],
    ["Columna vertebral", "Pila de 33 vértebras que sostiene el tronco y protege la médula."],
    ["Articulación", "Zona de unión entre dos o más huesos."],
    ["Cartílago", "Capa lisa que cubre los extremos de los huesos."],
    ["Ligamento", "Cordón que une un hueso con otro."],
    ["Tendón", "Cordón que une un músculo con un hueso."],
    ["Contracción", "Acortamiento de un músculo que tira del hueso."],
    ["Esguince", "Lesión de los ligamentos de una articulación."],
  ],
  familias: ["Tocad juntos huesos que se notan bajo la piel: clavícula, codo, rótula, tobillo.", "Comprobad cómo se endurecen el bíceps y el tríceps al doblar y estirar el brazo.", "Pesad la mochila y la persona: ¿pasa del 10 %? Revisad qué sobra.", "Preparad una merienda rica en calcio: yogur con frutos secos o un bocadillo de queso."],
  profesores: PROF("Ciencias de la Naturaleza: el aparato locomotor; huesos, articulaciones y músculos; funciones; lesiones frecuentes y hábitos saludables", ["Construcción de un modelo de brazo con cartón, encuadernadores y gomas para simular bíceps y tríceps.", "Observación de huesos de pollo limpios: partes, dureza y médula.", "Revisión de la postura en el aula y medición del peso de las mochilas con una báscula."]),
  fuentes: [RD, wiki("Aparato locomotor", "Aparato_locomotor"), wiki("Esqueleto humano", "Esqueleto_humano"), wiki("Músculo", "Músculo")],
  revisado: REV,
};
