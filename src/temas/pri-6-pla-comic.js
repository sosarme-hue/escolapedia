// Educación Plástica 6º de Primaria: el cómic y la ilustración. Dibujos propios en SVG.
const { tema, L, svg, tx, comic, planos, persona, AZ, RO, VE, NA, AM } = require("./_pri6d");

const M = "Educación Plástica";

// Tipos de bocadillo.
const bocadillos = svg("Tipos de bocadillo: diálogo, pensamiento, grito y susurro", `
  <rect x="14" y="20" width="106" height="50" rx="20" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M46 70 l 4 14 l 10 -14" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M47 69 h 12" stroke="var(--card)" stroke-width="3"/>${tx(67, 50, "hablar", { s: 12 })}
  <ellipse cx="192" cy="44" rx="54" ry="26" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="170" cy="80" r="5" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="162" cy="92" r="3" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${tx(192, 49, "pensar", { s: 12 })}
  <path d="M20 112 l 14 8 l 6 -14 l 10 12 l 14 -10 l 6 14 l 16 -6 l -4 16 l 16 6 l -14 10 l 8 14 l -16 -2 l -4 14 l -12 -10 l -14 10 l -4 -14 l -16 4 l 6 -14 l -14 -8 l 14 -8 z" fill="var(--card)" stroke="${RO}" stroke-width="2"/>${tx(64, 140, "¡gritar!", { s: 12, c: RO })}
  <rect x="140" y="112" width="106" height="46" rx="18" fill="var(--card)" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>${tx(193, 140, "susurrar", { s: 12, c: "var(--muted)" })}`);

// Caras con emociones.
const caras = svg("Cuatro caras: alegría, tristeza, enfado y sorpresa", [["alegría", "M-10 6 q 10 10 20 0", "M-10 -10 l 6 2 M10 -10 l -6 2", AM], ["tristeza", "M-10 10 q 10 -8 20 0", "M-11 -8 l 6 -3 M11 -8 l -6 -3", AZ], ["enfado", "M-9 9 h 18", "M-11 -12 l 8 4 M11 -12 l -8 4", RO], ["sorpresa", "M0 8 m -5 0 a 5 6 0 1 0 10 0 a 5 6 0 1 0 -10 0", "M-11 -14 q 5 -4 9 0 M11 -14 q -5 -4 -9 0", VE]].map(([n, boca, cejas, c], i) => {
  const x = 38 + i * 62;
  return `<g transform="translate(${x} 78)"><circle r="24" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2.5"/><circle cx="-8" cy="-3" r="2.6" fill="var(--ink)"/><circle cx="8" cy="-3" r="2.6" fill="var(--ink)"/><path d="${boca}" fill="none" stroke="var(--ink)" stroke-width="2.2"/><path d="${cejas}" stroke="var(--ink)" stroke-width="2.2"/></g>${tx(x, 124, n, { s: 10.5, c })}`;
}).join("") + tx(130, 30, "Ojos, cejas y boca cuentan la emoción", { s: 11, c: "var(--muted)" }));

module.exports = tema({
  materia: M,
  titulo: "El cómic y la ilustración",
  objetivos: ["Conocer los elementos del cómic: viñeta, bocadillo, cartela, onomatopeya y signos de movimiento", "Usar los planos y los ángulos para contar una historia", "Expresar emociones con gestos y recursos gráficos", "Crear un cómic propio y apreciar el trabajo de los ilustradores"],
  claves: ["cómic", "viñeta", "bocadillo", "cartela", "onomatopeya", "líneas cinéticas", "metáforas visuales", "plano", "guion", "ilustración"],
  pregunta: [
    "En un cómic no hay sonido ni movimiento, y aun así «oímos» un ¡BOOM! y vemos correr a los personajes. ¿Cómo lo consigue el dibujante?",
    "Con <mark>recursos gráficos</mark>: las <b>onomatopeyas</b> escritas con letras grandes imitan los sonidos, las <b>líneas cinéticas</b> (rayitas detrás de un personaje) indican movimiento y los <b>bocadillos</b> nos dicen quién habla y cómo. Además, la secuencia de <b>viñetas</b> hace que el tiempo avance.",
  ],
  bloques: [
    ["¿Qué es un cómic?", `<p>Un <mark>cómic</mark> (también llamado historieta o tebeo) es una historia contada con una <b>secuencia de dibujos</b> y textos. Cada dibujo va dentro de un recuadro llamado <b>viñeta</b>, y las viñetas se leen en orden, normalmente de izquierda a derecha y de arriba abajo.</p><p>El cómic mezcla el lenguaje de la imagen y el de la palabra. En España ha habido tebeos muy queridos desde hace un siglo, y hoy conviven cómics de aventuras, humor, ciencia, novela gráfica o manga japonés (que, por cierto, se lee de derecha a izquierda).</p>`,
      comic("Tira de tres viñetas: un saludo, un choque con onomatopeya y una reacción", [["¡Hola!|¿Jugamos?", AZ], ["", RO, "¡CRASH!"], ["¡Uy, la|pelota!", VE]]), "pl4b"],
    ["La viñeta", `<p>La <mark>viñeta</mark> es cada recuadro del cómic: muestra un momento de la historia. Su <b>tamaño</b> y su <b>forma</b> también comunican. Una viñeta grande destaca un momento importante; una estrecha y alargada puede mostrar algo alto, como un rascacielos.</p><p>El espacio entre viñetas se llama <b>calle</b>, y ahí ocurre algo mágico: nuestra imaginación rellena lo que pasa entre un dibujo y el siguiente. Si en una viñeta alguien lanza una piedra y en la siguiente se ve un cristal roto, entendemos lo que ha pasado sin verlo.</p>`,
      svg("Página de cómic con viñetas de distintos tamaños", `<rect x="60" y="10" width="140" height="160" rx="4" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><rect x="68" y="18" width="60" height="44" fill="${AZ}" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.6"/><rect x="134" y="18" width="58" height="44" fill="${AZ}" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.6"/><rect x="68" y="68" width="124" height="54" fill="${RO}" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.6"/><rect x="68" y="128" width="36" height="34" fill="${VE}" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.6"/><rect x="110" y="128" width="82" height="34" fill="${VE}" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.6"/>${tx(130, 100, "viñeta grande", { s: 10.5, c: RO })}${tx(38, 74, "calle", { s: 10, c: "var(--muted)" })}<path d="M50 70 L 130 65" stroke="var(--muted)" stroke-width="1"/>`)],
    ["Bocadillos y cartelas", `<p>Los <mark>bocadillos</mark> (o globos) contienen lo que dicen o piensan los personajes. El rabito señala quién habla. Su forma cambia el significado: borde normal para hablar, en forma de nube con burbujas para <b>pensar</b>, con picos para <b>gritar</b> y con línea discontinua para <b>susurrar</b>.</p><p>La <mark>cartela</mark> es un recuadro, normalmente arriba de la viñeta, donde habla el <b>narrador</b>: «Mientras tanto, en el castillo…», «Al día siguiente…». Sirve para indicar el lugar, el tiempo o explicar algo.</p>`,
      bocadillos],
    ["Onomatopeyas y signos de movimiento", `<p>Las <mark>onomatopeyas</mark> son palabras que imitan sonidos: ¡BOOM!, ¡CRASH!, ¡RING!, ¡ZZZ!, ¡SPLASH! Se dibujan con letras grandes, de colores y formas que «suenan». Muchas vienen del inglés porque los primeros cómics populares llegaron de Estados Unidos.</p><p>Las <mark>líneas cinéticas</mark> son rayitas que indican movimiento y su dirección. Y las <b>metáforas visuales</b> expresan ideas con dibujos: una bombilla sobre la cabeza es una idea; estrellitas, un golpe; corazones, amor; una nubecita negra, mal humor; gotas, nervios o calor.</p>`,
      svg("Onomatopeya BOOM, líneas cinéticas detrás de una pelota y una bombilla de idea", `${tx(64, 54, "¡BOOM!", { s: 28, c: RO, d: true })}<circle cx="190" cy="50" r="16" fill="${NA}"/><path d="M130 40 h 36 M124 50 h 40 M130 60 h 36" stroke="var(--muted)" stroke-width="2.4" stroke-linecap="round"/><path d="M70 120 a 16 16 0 1 1 20 0 v 10 h -20 z" fill="${AM}" stroke="var(--ink)" stroke-width="1.6"/><path d="M72 136 h 16" stroke="var(--ink)" stroke-width="3"/><path d="M58 100 l -8 -4 M102 100 l 8 -4 M80 86 v -8" stroke="${AM}" stroke-width="2.4"/>${tx(80, 160, "idea", { s: 11 })}${tx(190, 90, "movimiento", { s: 11, c: "var(--muted)" })}<path d="M170 120 l 6 14 l 14 2 l -10 10 l 2 14 l -12 -7 l -12 7 l 2 -14 l -10 -10 l 14 -2 z" fill="${AM}"/>${tx(208, 160, "golpe", { s: 11, a: "start" })}`)],
    ["Los personajes y las emociones", `<p>Para que un personaje sea reconocible, el dibujante le da rasgos que se repiten: un peinado, una ropa o un objeto característico. Muchos personajes de cómic se dibujan con formas sencillas, como círculos y óvalos, para poder repetirlos muchas veces iguales.</p><p>Las <mark>emociones</mark> se muestran con los <b>ojos</b>, las <b>cejas</b> y la <b>boca</b>: cejas inclinadas hacia el centro para el enfado, boca hacia abajo para la tristeza, ojos muy abiertos para la sorpresa. También ayuda la postura del cuerpo: hombros caídos, brazos en alto…</p>`,
      caras],
    ["Planos y ángulos", `<p>Como en el cine, el dibujante elige el <mark>plano</mark>, es decir, lo cerca o lejos que vemos al personaje. El <b>plano general</b> muestra el lugar; el <b>plano entero</b>, el personaje de pies a cabeza; el <b>plano medio</b>, de cintura para arriba (ideal para diálogos), y el <b>primer plano</b>, la cara, para ver bien la emoción.</p><p>El <mark>ángulo</mark> también cuenta: visto desde abajo (<b>contrapicado</b>) el personaje parece poderoso; visto desde arriba (<b>picado</b>), pequeño o indefenso.</p>`,
      planos("Planos: general, entero, medio y primer plano", [["general", 0.55, 14], ["entero", 1, 4], ["medio", 1.9, 26], ["primer plano", 3.4, 74]])],
    ["La ilustración", `<p>La <mark>ilustración</mark> es un dibujo que acompaña a un texto: un cuento, un libro de texto, un cartel o la portada de un disco. A diferencia del cómic, suele ser una sola imagen que resume una escena o una idea.</p><p>Los ilustradores usan muchas técnicas: lápices de colores, acuarela, collage o dibujo digital. En los álbumes ilustrados, la imagen cuenta a veces cosas que el texto no dice. España tiene grandes ilustradores e ilustradoras premiados en todo el mundo. Fíjate en el nombre del ilustrador en la portada de tus libros favoritos.</p>`,
      L.filas("Dónde encontramos ilustraciones", [["libros", "cuentos y álbumes ilustrados", AZ], ["carteles", "anuncios y conciertos", RO], ["ciencia", "dibujos de plantas y animales", VE], ["portadas", "libros, discos y juegos", NA]])],
    ["Del guion a la página", `<p>Un cómic se hace en varias fases. <b>1) Guion</b>: escribir la historia, dividida en viñetas, con lo que se ve y lo que se dice. <b>2) Boceto</b> o storyboard: dibujar a lápiz, rápido, la composición de cada viñeta. <b>3) Lápiz</b> definitivo con los detalles.</p><p><b>4) Entintado</b>: repasar con tinta o rotulador. <b>5) Color</b>. <b>6) Rotulado</b>: escribir los textos y dibujar los bocadillos. En un cómic profesional, cada fase puede hacerla una persona distinta: guionista, dibujante, entintador, colorista y rotulista.</p>`,
      L.filas("Fases para hacer un cómic", [["1 guion", "historia y diálogos", AZ], ["2 boceto", "lápiz rápido", VE], ["3 tinta y color", "repasar y colorear", NA], ["4 rotulado", "bocadillos y textos", RO]])],
    ["Taller: mi cómic de seis viñetas", `<p>Inventa una historia corta con <b>inicio, problema y final</b>. Escribe el guion en seis viñetas. Dibuja los bocetos a lápiz, cuidando de usar al menos un primer plano, una onomatopeya, un bocadillo de pensamiento y una cartela.</p><p>Deja espacio para los bocadillos <b>antes</b> de dibujar los fondos. Repasa con rotulador fino, colorea y, al final, escribe los textos con letra clara en mayúsculas. <b>Consejo:</b> los textos de los bocadillos deben ser cortos; si el personaje habla mucho, divide en dos viñetas.</p>`,
      L.filas("Lista del cómic", [["6 viñetas", "inicio, problema y final", AZ], ["1 primer plano", "para una emoción", RO], ["1 onomatopeya", "¡PLAF! ¡RING!", NA], ["1 cartela", "Al día siguiente…", VE]], "Checklist")],
  ],
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    ["Un personaje piensa en una pizza. ¿Qué bocadillo usas?", ["Pensar, no hablar.", "Bocadillo en forma de nube con burbujitas hacia la cabeza."], "Bocadillo de pensamiento con un dibujo de pizza."],
    ["Quieres que el lector vea lo asustado que está un personaje. ¿Qué plano eliges?", ["La emoción se ve en la cara.", "El plano que muestra la cara de cerca."], "Primer plano."],
    ["Escribe una cartela para cambiar de escena.", ["La cartela es la voz del narrador.", "Indica tiempo o lugar."], "«Mientras tanto, en el bosque…»."],
  ],
  errores: [
    "Dibujar primero los fondos y no dejar sitio para los bocadillos.",
    "Escribir demasiado texto en un bocadillo.",
    "Poner el rabito del bocadillo hacia el personaje equivocado.",
    "Usar siempre el mismo plano: la historia se vuelve aburrida.",
    "Saltarse pasos importantes de la historia entre viñetas: el lector se pierde.",
  ],
  ejercicios: [
    ["¿Qué es una viñeta?", "Cada recuadro del cómic, que muestra un momento de la historia."],
    ["¿Para qué sirve una cartela?", "Para la voz del narrador: indicar lugar, tiempo o explicar algo."],
    ["Dibuja un bocadillo de grito y otro de susurro.", "Grito: borde con picos. Susurro: borde discontinuo."],
    ["Escribe cinco onomatopeyas y su significado.", "Respuesta modelo: ¡RING! (timbre), ¡ZZZ! (dormir), ¡SPLASH! (agua), ¡BOOM! (explosión), ¡TOC, TOC! (llamar)."],
    ["¿Qué son las líneas cinéticas?", "Rayitas que indican movimiento y su dirección."],
    ["¿Qué significa una bombilla sobre la cabeza?", "Que el personaje ha tenido una idea (metáfora visual)."],
    ["¿Qué plano usarías para mostrar dónde ocurre la historia?", "Plano general."],
    ["¿Cómo se ve un personaje dibujado en contrapicado?", "Desde abajo: parece grande y poderoso."],
    ["Ordena las fases: entintado, guion, color, boceto.", "Guion, boceto, entintado, color."],
    ["Dibuja una tira de tres viñetas con una onomatopeya.", "Respuesta gráfica abierta."],
  ],
  figura: ["Los elementos del cómic", L.columnas("Los elementos del cómic", [["recuadro", "VIÑETA", ["un momento", "de la historia"], AZ], ["texto", "BOCADILLO", ["hablar, pensar,", "gritar, susurrar"], VE], ["sonido", "¡BOOM!", ["onomatopeyas", "y cartelas"], RO], ["movimiento", "LÍNEAS", ["cinéticas y", "metáforas"], AM]])],
  video: "pl4v",
  quiz: [
    ["Cada recuadro de un cómic se llama…", ["viñeta", "cartela", "bocadillo"], "Viñeta."],
    ["El globo con burbujitas indica que el personaje…", ["piensa", "grita", "susurra"], "Pensamiento."],
    ["La voz del narrador va en la…", ["cartela", "onomatopeya", "calle"], "Cartela."],
    ["¡SPLASH! es una…", ["onomatopeya", "cartela", "viñeta"], "Imita un sonido."],
    ["Las rayitas detrás de un coche indican…", ["movimiento", "sonido", "frío"], "Líneas cinéticas."],
    ["Para ver bien una emoción usamos el…", ["primer plano", "plano general", "plano entero"], "La cara de cerca."],
    ["Visto desde abajo, el personaje parece…", ["poderoso", "pequeño", "lejano"], "Contrapicado."],
    ["La primera fase de un cómic es el…", ["guion", "entintado", "color"], "Escribir la historia."],
    ["El manga japonés se lee…", ["de derecha a izquierda", "de abajo arriba", "en círculo"], "Al revés que el nuestro."],
    ["Una ilustración es…", ["una imagen que acompaña a un texto", "una onomatopeya", "un tipo de bocadillo"], "Libros, carteles…"],
  ],
  examen: [
    ["El espacio entre viñetas se llama…", ["calle", "cartela", "margen"], "Calle."],
    ["Un bocadillo con borde de picos indica…", ["grito", "pensamiento", "susurro"], "Grito."],
    ["El plano de cintura para arriba es el…", ["plano medio", "primer plano", "plano general"], "Ideal para diálogos."],
    ["Corazones sobre un personaje son una…", ["metáfora visual", "cartela", "viñeta"], "Expresan amor."],
  ],
  feynman: ["Qué es un cómic y cómo se lee", "Elementos: viñeta, bocadillo, cartela y onomatopeya", "Cómo se expresan el movimiento y las emociones", "Fases para crear un cómic"],
  mapa: ["EL CÓMIC", "var(--bac)", [["Viñeta", "un momento · se lee en orden", AZ], ["Texto", "bocadillo · cartela", VE], ["Recursos", "¡BOOM! · líneas · bombilla", RO], ["Planos", "general · medio · primer plano", AM]], 240],
  tarjetas: [
    ["Viñeta", "Recuadro con un momento de la historia."],
    ["Bocadillo", "Globo con lo que dice o piensa un personaje."],
    ["Cartela", "Recuadro con la voz del narrador."],
    ["Onomatopeya", "Palabra que imita un sonido."],
    ["Líneas cinéticas", "Indican movimiento."],
    ["Metáfora visual", "Dibujo que expresa una idea: bombilla, estrellas."],
    ["Primer plano", "La cara, para ver la emoción."],
    ["Guion", "La historia escrita, viñeta a viñeta."],
  ],
  familias: ["Leed juntos un cómic y buscad onomatopeyas, cartelas y metáforas visuales.", "Inventad entre todos una tira de cuatro viñetas sobre algo divertido que os haya pasado."],
  saberes: "El cómic y la ilustración: elementos, recursos expresivos, planos y proceso de creación de una narración gráfica (Educación Plástica y Visual)",
  ideas: ["Cómic de seis viñetas por parejas (guionista y dibujante).", "Quitar los textos a una página de cómic y reescribir los bocadillos.", "Biblioteca de aula con cómics y álbumes ilustrados."],
  fuentes: [["Biblioteca Nacional de España: el cómic", "https://www.bne.es/es/colecciones/comic"], ["Real Academia Española: cómic", "https://dle.rae.es/c%C3%B3mic"]],
});
