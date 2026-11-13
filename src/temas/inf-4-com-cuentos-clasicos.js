// Comunicación y representación, Infantil 4 años: cuentos clásicos.
const { mapa } = require("./_util");
const { svg, rot, nino, casa, arbol, suelo, libro, secuencia, dibujos, charla, mural, ic, vid, MARRON, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "4-anos",
  titulo: "Cuentos clásicos",
  minutos: 15,
  objetivos: ["Escuchar y disfrutar cuentos clásicos", "Reconocer a los personajes de un cuento", "Recordar qué pasa al principio, en medio y al final"],
  claves: ["cuento", "personaje", "Érase una vez", "colorín colorado", "lobo"],
  pregunta: {
    texto: "¿Te sabes algún cuento? ¿Quién sale en él?",
    respuesta: "Seguro que conoces a <mark>Caperucita Roja</mark>, a <b>los tres cerditos</b> o a <b>Ricitos de Oro</b>. Son <mark>cuentos clásicos</mark>: muy antiguos y muy queridos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un cuento clásico?</h3><p>Es un cuento <mark>muy antiguo</mark>.</p><p>Lo contaban los abuelos de los abuelos de tus abuelos. ¡Ha pasado de familia en familia!</p><p>Por eso lo conocen niños de todo el mundo.</p>`,
      svg: svg("Una abuela lee un libro de cuentos a un niño y una niña", `${nino(60, 150, { c: N, pelo: G, s: 1.2 })}${libro(130, 70, 1.1, R)}${nino(185, 150, { c: A, s: 0.95 })}${nino(222, 150, { c: R, nina: true, s: 0.95 })}${suelo(150)}${rot(130, 172, "Cuentos de toda la vida", { color: R })}`),
    },
    {
      html: `<h3>Érase una vez…</h3><p>Muchos cuentos empiezan igual: <mark>«Érase una vez…»</mark>.</p><p>Y terminan con <b>«…y colorín colorado, este cuento se ha acabado»</b>.</p><p>Cuando oímos esas palabras, sabemos que empieza o termina la historia.</p>`,
      svg: svg("Un libro abierto con la frase Érase una vez y el final colorín colorado", `${libro(130, 82, 1.9, A)}${rot(88, 64, "Érase", { size: 15, color: R })}${rot(88, 82, "una vez…", { size: 15, color: R })}${rot(172, 64, "colorín", { size: 15, color: V })}${rot(172, 82, "colorado", { size: 15, color: V })}${rot(130, 160, "empieza · termina", { color: G })}`),
    },
    {
      html: `<h3>Los personajes</h3><p>Los que salen en el cuento son los <mark>personajes</mark>.</p><p>En Caperucita Roja están Caperucita, su mamá, la abuelita, el lobo y el cazador.</p><p>Algunos son buenos y otros hacen travesuras, como el <b>lobo</b>.</p>`,
      svg: svg("Caperucita con su capa roja, el lobo y la casa de la abuelita en el bosque", `${arbol(30, 150, 0.9)}${arbol(232, 150, 0.8)}<path d="M62 150 L78 104 L94 150z" fill="var(--red)"/>${nino(78, 150, { c: R, nina: true })}${ic("lobo", 145, 125, 1.4)}${casa(200, 150, R)}${suelo(150)}${rot(78, 172, "Caperucita", { color: R })}${rot(145, 172, "el lobo", { color: G })}${rot(205, 172, "abuelita", { color: A })}`),
    },
    {
      html: `<h3>Principio, medio y final</h3><p>En los tres cerditos, <b>primero</b> cada cerdito hace su casa.</p><p><b>Después</b> el lobo sopla y tira las de paja y madera.</p><p><b>Al final</b>, la casa de <mark>ladrillo</mark> aguanta. ¡Los cerditos se salvan!</p>`,
      svg: secuencia("Los tres cerditos: casa de paja, casa de madera y casa de ladrillo", [["", "paja", M, `<path d="M-22 18 L-22 -4 L0 -22 L22 -4 L22 18z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-16 -2 V18 M-8 -8 V18 M0 -14 V18 M8 -8 V18 M16 -2 V18" stroke="#c99a2e" stroke-width="2"/>`], ["", "madera", MARRON, `<path d="M-22 18 L-22 -4 L0 -22 L22 -4 L22 18z" fill="#c08a52" stroke="var(--ink)" stroke-width="1.5"/><path d="M-22 4 H22 M-22 11 H22 M-18 -2 H18" stroke="${MARRON}" stroke-width="2"/>`], ["", "ladrillo", R, `<path d="M-22 18 L-22 -4 L0 -22 L22 -4 L22 18z" fill="var(--red)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-22 4 H22 M-22 11 H22 M-10 -4 V4 M8 -4 V4 M0 4 V11 M-14 11 V18 M12 11 V18" stroke="#fff" stroke-width="1.5"/>`]], { titulo: "Los tres cerditos" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los cuentos nos hacen <mark>imaginar</mark> y aprender palabras nuevas.</p><p>También nos enseñan cosas: no hablar con desconocidos, trabajar bien, compartir.</p><p>Y nos dan un rato bonito con quien nos los lee.</p>`,
      svg: dibujos("Un libro para imaginar, un corazón para compartir y una estrella para aprender", [["libro", "imaginar", A], ["corazon", "compartir", R], ["estrella", "aprender", V]], { titulo: "Los cuentos nos ayudan a…" }),
    },
    {
      html: `<h3>Juego: ¿de qué cuento soy?</h3><p>Un adulto dice una pista. Tú <mark>adivinas</mark> el cuento.</p><p>«Soplaré y soplaré y tu casa derribaré». ¿Quién lo dice? ¡El lobo de los tres cerditos!</p><p>Ahora inventa tú una pista.</p>`,
      svg: charla("Un adulto da una pista y un niño adivina el cuento", [["mama", "¡Soplaré y soplaré!", A], ["nino", "¡Los tres cerditos!", R], ["mama", "¡Muy bien! Otra…", A]]),
    },
  ],
  figura: {
    titulo: "Tres cuentos clásicos",
    svg: mural("Tres cuentos: Caperucita Roja con el lobo, los tres cerditos y Ricitos de Oro con los tres osos", [["lobo", "Caperucita", "y el lobo", R], ["cerdo", "Tres cerditos", "y sus casas", N], ["oso", "Ricitos de Oro", "y los tres osos", M]], "Érase una vez…"),
  },
  video: { ...vid("ZKWX9qAS-Bg", "Caperucita Roja | Cuentos y canciones infantiles", "Toy Cantando", 141146951), busqueda: "cuentos clásicos infantiles" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Quiénes son los personajes de Ricitos de Oro?", pasos: ["Recordamos el cuento juntos.", "Sale una niña con el pelo rubio: Ricitos de Oro.", "Y una familia de osos: papá, mamá y el osito."], resultado: "Ricitos de Oro y los tres osos." },
    { enunciado: "¿Cómo termina el cuento de los tres cerditos?", pasos: ["El lobo sopla la casa de paja y la de madera.", "No puede con la casa de ladrillo.", "Los cerditos están a salvo."], resultado: "la casa de ladrillo aguanta y los cerditos se salvan." },
  ],
  errores: [
    "Mezclar cuentos: el lobo que sopla es el de los tres cerditos; el de la abuelita es el de Caperucita.",
    "Pensar que todo es de verdad: los cuentos son inventados y los animales no hablan.",
    "Contar solo el final: mejor recordar también el principio y el medio.",
  ],
  ejercicios: [
    { q: "Escucha un cuento clásico y di quién sale.", sol: "Para la familia: leed despacio y señalad a cada personaje en el libro." },
    { q: "Dibuja tu personaje favorito.", sol: "Para la familia: preguntadle por qué le gusta ese personaje." },
    { q: "Pon voz de lobo y voz de cerdito.", sol: "Para la familia: jugad a cambiar la voz; ayuda a distinguir personajes." },
    { q: "Termina la frase: «Y colorín colorado…».", sol: "«…este cuento se ha acabado»." },
    { q: "Ordena las casas de los cerditos de la más débil a la más fuerte.", sol: "Paja, madera y ladrillo." },
    { q: "Inventa otro final para Caperucita.", sol: "Respuesta libre: cualquier final con sentido vale." },
  ],
  quiz: [
    { q: "¿Cómo empiezan muchos cuentos?", o: ["Érase una vez", "Buenas noches", "Hasta luego"], a: 0, e: "«Érase una vez…»." },
    { q: "¿De qué color es la capa de Caperucita?", o: ["Azul", "Roja", "Verde"], a: 1, e: "Por eso se llama Caperucita Roja." },
    { q: "¿Qué casa no tira el lobo?", o: ["La de paja", "La de madera", "La de ladrillo"], a: 2, e: "La de ladrillo es la más fuerte." },
    { q: "¿Con quién se encuentra Ricitos de Oro?", o: ["Tres osos", "Tres gatos", "Tres patos"], a: 0, e: "Entra en la casa de los tres osos." },
    { q: "Los que salen en un cuento son…", o: ["Los personajes", "Las páginas", "Los colores"], a: 0, e: "Se llaman personajes." },
    { q: "«Colorín colorado» se dice…", o: ["Al principio", "Al final", "En medio"], a: 1, e: "Es el final del cuento." },
  ],
  examen: [
    { q: "¿Quién visita a la abuelita?", o: ["Caperucita", "Un cerdito", "Ricitos de Oro"], a: 0, e: "Caperucita lleva la cesta a su abuelita." },
    { q: "¿Cuántos cerditos hay?", o: ["Dos", "Tres", "Cinco"], a: 1, e: "Son los tres cerditos." },
    { q: "Un cuento clásico es…", o: ["Muy antiguo", "De ayer", "Un anuncio"], a: 0, e: "Se cuenta desde hace muchísimos años." },
  ],
  feynman: ["Cuenta a alguien tu cuento clásico favorito", "Di quién es el personaje bueno y quién hace travesuras"],
  mapa: mapa("CUENTOS CLÁSICOS", "var(--inf)", [
    ["Empieza", "Érase una vez…", R],
    ["Personajes", "los que salen", A],
    ["Pasa algo", "un problema", V],
    ["Termina", "colorín colorado", N],
  ], 220),
  tarjetas: [
    ["¿Cómo empieza un cuento?", "Érase una vez…"],
    ["¿Cómo termina?", "Y colorín colorado, este cuento se ha acabado"],
    ["¿Qué casa aguanta al lobo?", "La de ladrillo"],
    ["¿A quién visita Caperucita?", "A su abuelita"],
    ["¿Cuántos osos hay en Ricitos de Oro?", "Tres"],
    ["¿Cómo se llaman los que salen en el cuento?", "Personajes"],
  ],
  familias: [
    "Leed un cuento clásico cada noche durante una semana y dejad que elija el de mañana.",
    "Contadle el cuento sin libro, con gestos y voces: así lo recordará mejor.",
    "Preguntad al acabar: «¿Qué ha pasado al principio? ¿Y al final?».",
    "Visitad la biblioteca y buscad versiones distintas del mismo cuento.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: aproximación a la literatura infantil, textos de tradición oral, comprensión de la estructura del relato y disfrute de la escucha", ["Hora del cuento con un objeto mágico que lo abre y lo cierra.", "Bolsa de los cuentos: objetos que representan a los personajes.", "Dramatizar los tres cerditos con casas de cartón."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
