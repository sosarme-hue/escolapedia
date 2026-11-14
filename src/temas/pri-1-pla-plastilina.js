// Educación Plástica 1º de Primaria: modelar con plastilina. Tema a nivel libro. Dibujos propios en SVG.
const { tema, C, dibujos, lista, mural, vid, lienzo, texto } = require("./_pri1L2");
const { R, A, V, N, M, G, K } = C;

// Colores de plastilina (no dependen del tema: son materiales).
const P = { rojo: "#ef5350", amarillo: "#ffd54f", azul: "#42a5f5", verde: "#66bb6a", naranja: "#ffa726", morado: "#ab47bc", marron: "#a1887f", blanco: "#fafafa" };
const B = `stroke="var(--ink)" stroke-width="2"`;
const bola = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" ${B}/><circle cx="${x - r / 3}" cy="${y - r / 3}" r="${r / 4}" fill="#fff" opacity=".45"/>`;
const churro = (x, y, l, c, g = 12) => `<rect x="${x - l / 2}" y="${y - g / 2}" width="${l}" height="${g}" rx="${g / 2}" fill="${c}" ${B}/>`;
const tortita = (x, y, r, c) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.32}" fill="${c}" ${B}/>`;
// Paso a paso: tres dibujos con flechas y su nombre.
const pasos = (label, items, opts) => lienzo(label, items.map(([d, n], i) => `${d(48 + i * 82, 90)}${texto(48 + i * 82, 148, n, { size: 15, max: 78 })}${i < items.length - 1 ? `<text x="${89 + i * 82}" y="96" text-anchor="middle" font-size="20" font-weight="800" fill="var(--muted)">→</text>` : ""}`).join(""), opts);

const pollito = lienzo("Un pollito de plastilina hecho con dos bolas amarillas, un pico naranja y ojos", `${bola(120, 112, 36, P.amarillo)}${bola(150, 66, 24, P.amarillo)}<path d="M172 64 l16 5 l-16 6 z" fill="${P.naranja}" ${B}/><circle cx="156" cy="60" r="3.5" fill="var(--ink)"/>${churro(108, 152, 14, P.naranja, 6)}${churro(132, 152, 14, P.naranja, 6)}<path d="M92 104 q -18 4 -10 22" fill="none" stroke="var(--ink)" stroke-width="2"/>`, { titulo: "Unimos piezas", nota: "bola grande + bola pequeña + pico" });

const herramientas = lienzo("Herramientas para modelar: palillo, rodillo y molde", `<rect x="22" y="80" width="70" height="6" rx="3" fill="#d7ccc8" ${B}/>${texto(57, 120, "palillo", { size: 15, max: 80 })}
  <rect x="104" y="72" width="56" height="20" rx="10" fill="#bcaaa4" ${B}/><rect x="92" y="78" width="12" height="8" rx="3" fill="#8d6e63"/><rect x="160" y="78" width="12" height="8" rx="3" fill="#8d6e63"/>${texto(132, 120, "rodillo", { size: 15, max: 80 })}
  <path d="M212 62 l8 16 l18 2 l-13 12 l4 18 l-17 -9 l-17 9 l4 -18 l-13 -12 l18 -2 z" fill="none" stroke="var(--ink)" stroke-width="3"/>${texto(212, 132, "molde", { size: 15, max: 80 })}`, { titulo: "Ayudantes de modelar", nota: "¡con cuidado y sin meterlos en la boca!" });

const escultura = lienzo("Diferencia entre un dibujo plano y una figura con volumen", `<rect x="30" y="56" width="70" height="70" fill="#fff" ${B}/><circle cx="65" cy="91" r="22" fill="none" stroke="${P.rojo}" stroke-width="3"/>${texto(65, 152, "plano", { size: 15, max: 90 })}
  ${bola(190, 92, 34, P.rojo)}<ellipse cx="190" cy="132" rx="28" ry="5" fill="var(--muted)" opacity=".35"/>${texto(190, 152, "con volumen", { size: 15, max: 110 })}`, { titulo: "Plano o con volumen" });

module.exports = tema({
  materia: "Educación Plástica",
  titulo: "Modelar con plastilina",
  minutos: 55,
  objetivos: ["Conocer la plastilina y otras masas para modelar", "Hacer bolas, churros y tortitas", "Unir piezas para crear figuras", "Usar herramientas sencillas con cuidado", "Entender qué es una figura con volumen"],
  claves: ["modelar", "plastilina", "bola", "churro", "tortita", "volumen", "escultura"],
  pregunta: ["¿Qué puedes hacer con un trozo de plastilina y tus manos?", "¡Casi cualquier cosa! Si la <mark>amasas</mark>, la <mark>enrollas</mark> y la <mark>aplastas</mark>, puedes crear animales, frutas y personajes."],
  lectura: ["Lucas y la serpiente que no tenía amigos", `<p>Lucas tenía un trozo de plastilina verde en la mano.</p><p>Lo hizo rodar sobre la mesa, adelante y atrás. ¡Salió una serpiente larga!</p><p>—Hola —dijo la serpiente—. Estoy muy sola.</p><p>Lucas cogió plastilina amarilla. Hizo una bola grande y otra pequeña. Las juntó y le puso un pico. ¡Era un pollito!</p><p>Luego aplastó una bola roja como una tortita. Le añadió puntitos negros. ¡Una mariquita!</p><p>Al final, la serpiente tenía muchos amigos en la mesa.</p><p>—Gracias, Lucas —susurró—. Tus manos son mágicas.</p>`],
  bloques: [
    ["¿Qué es modelar?", `<p><mark>Modelar</mark> es dar forma a un material blando con las manos.</p><p>Podemos apretar, estirar, enrollar y aplastar hasta conseguir la forma que queremos.</p><p>Al modelar no dibujamos en un papel: creamos figuras que se pueden <b>coger</b> y mirar por todos los lados.</p><p>Modelar es muy divertido y, además, da fuerza a los dedos. ¡Eso te ayuda a escribir mejor!</p><p>En este tema aprenderás los trucos de los escultores.</p>`,
      dibujos("Manos que modelan plastilina", [["mano", "aprieto", A], ["mano", "estiro", R], ["mano", "aplasto", V]], { titulo: "Las manos modelan" })],
    ["La plastilina y otras masas", `<p>La <mark>plastilina</mark> es una masa blanda de muchos colores. No se seca, así que podemos usarla muchas veces.</p><p>Hay otras masas para modelar. El <b>barro</b> o arcilla viene de la tierra y se endurece al secarse.</p><p>La <b>pasta de sal</b> se hace en casa con harina, sal y agua.</p><p>Con el barro, los alfareros hacen platos y jarrones desde hace miles de años.</p><p>Cada masa es diferente al tocarla. ¿Cuál te gusta más?</p>`,
      lienzo("Tres masas para modelar: plastilina, barro y pasta de sal", `${bola(48, 86, 26, P.verde)}${texto(48, 140, "plastilina", { size: 14, max: 80 })}${bola(130, 86, 26, "#a1887f")}${texto(130, 140, "barro", { size: 14, max: 80 })}${bola(212, 86, 26, "#fff8e1")}${texto(212, 140, "pasta de sal", { size: 14, max: 80 })}`, { titulo: "Masas para modelar" })],
    ["Antes de empezar", `<p>Para modelar bien, primero preparamos el <mark>sitio de trabajo</mark>.</p><p>Ponemos un <b>tapete</b> o un plástico en la mesa para no mancharla.</p><p>Nos lavamos las manos antes y después.</p><p>Guardamos cada color en su caja para que no se mezclen todos.</p><p>Y una norma muy importante: <b>la plastilina no se come</b> ni se mete en la nariz o las orejas.</p><p>Al terminar, recogemos los trocitos del suelo.</p>`,
      lista("Normas para modelar", [["Pongo un tapete", A], ["Me lavo las manos", V], ["No me la meto en la boca", R], ["Recojo al terminar", N]], { titulo: "Las normas" })],
    ["La bola", `<p>La forma más fácil es la <mark>bola</mark>.</p><p>Primero <b>amasamos</b> la plastilina para que se ablande. El calor de las manos ayuda.</p><p>Después ponemos el trozo entre las palmas y las movemos <b>en círculos</b>, sin apretar mucho.</p><p>¡Poco a poco sale una bola redonda!</p><p>Con bolas hacemos cabezas, ojos, frutas y cuerpos. Una bola grande y una pequeña pueden ser un muñeco de nieve.</p>`,
      pasos("Hacer una bola: amasar, rodar entre las palmas, bola", [[(x, y) => `<path d="M${x - 22} ${y + 10} q 8 -30 26 -18 q 22 -2 14 20 q -8 12 -24 8 q -16 6 -16 -10 z" fill="${P.rojo}" ${B}/>`, "amaso"], [(x, y) => `${bola(x, y, 18, P.rojo)}<path d="M${x - 28} ${y - 22} a 30 30 0 0 1 56 0" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>`, "giro"], [(x, y) => bola(x, y, 24, P.rojo), "¡bola!"]], { titulo: "Hacemos una bola" })],
    ["El churro", `<p>Para hacer un <mark>churro</mark>, empezamos con una bola.</p><p>La ponemos en la mesa y la hacemos <b>rodar</b> con la palma de la mano, adelante y atrás.</p><p>Si movemos las manos hacia los lados, el churro se estira y se alarga.</p><p>Con churros hacemos serpientes, gusanos, patas y brazos.</p><p>Si enrollamos un churro largo, ¡sale un caracol! Y si unimos las puntas, un anillo.</p>`,
      pasos("Hacer un churro: bola, rodar sobre la mesa, churro largo", [[(x, y) => bola(x, y, 18, P.verde), "bola"], [(x, y) => `${churro(x, y, 44, P.verde, 18)}<path d="M${x - 22} ${y - 22} h44" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>`, "ruedo"], [(x, y) => churro(x, y, 58, P.verde, 10), "¡churro!"]], { titulo: "Hacemos un churro" }),
      vid("Haq-ivD2Zik", "Cómo hacer una serpiente de plastilina fácil, paso a paso", "Dibujos En Acción", 1034736)],
    ["La tortita", `<p>Para hacer una <mark>tortita</mark>, también empezamos con una bola.</p><p>La ponemos en la mesa y la <b>aplastamos</b> con la palma de la mano.</p><p>Si apretamos poco, queda gordita. Si apretamos mucho, queda fina.</p><p>Con tortitas hacemos galletas, alas, orejas y hojas.</p><p>También podemos usar un <b>rodillo</b> para dejarla muy plana, como hacen los cocineros con la masa.</p>`,
      pasos("Hacer una tortita: bola, aplastar con la palma, tortita", [[(x, y) => bola(x, y, 18, P.azul), "bola"], [(x, y) => `${tortita(x, y + 12, 26, P.azul)}<path d="M${x} ${y - 30} v22 m-7 -7 l7 7 l7 -7" fill="none" stroke="var(--muted)" stroke-width="2.5"/>`, "aplasto"], [(x, y) => tortita(x, y + 8, 30, P.azul), "¡tortita!"]], { titulo: "Hacemos una tortita" })],
    ["Herramientas para modelar", `<p>Además de las manos, podemos usar <mark>herramientas</mark>.</p><p>Con un <b>palillo</b> hacemos rayitas, agujeros y detalles, como los ojos o las escamas de un pez.</p><p>Con un <b>rodillo</b> aplastamos la plastilina.</p><p>Con los <b>moldes</b> cortamos formas de estrellas o corazones.</p><p>También sirven un tenedor de plástico para hacer texturas y una pajita para hacer círculos.</p><p>Usa las herramientas con cuidado.</p>`,
      herramientas],
    ["Unimos piezas", `<p>Para hacer figuras, <mark>unimos piezas</mark>: bolas, churros y tortitas.</p><p>Un <b>pollito</b> es una bola grande de cuerpo y una pequeña de cabeza, con un pico naranja.</p><p>Para que las piezas no se caigan, las <b>apretamos</b> un poco al juntarlas.</p><p>Si una pieza pesa mucho, podemos meter medio palillo dentro para sujetarla.</p><p>Empieza siempre por las piezas grandes y deja los detalles para el final.</p>`,
      pollito, vid("PPupVilvBRQ", "Frutas de Play-Doh de colores: manualidades para niños", "Asubio Kids", 9292800)],
    ["Figuras con volumen", `<p>Un dibujo es <b>plano</b>: solo lo vemos por delante.</p><p>Una figura de plastilina tiene <mark>volumen</mark>: podemos darle la vuelta y verla por todos los lados.</p><p>Las obras de arte con volumen se llaman <mark>esculturas</mark>.</p><p>Los escultores hacen esculturas de piedra, madera, metal o barro. Algunas están en los museos y otras en las plazas.</p><p>Mira tu figura por delante, por detrás y por los lados. ¿Está bien por todas partes?</p>`,
      escultura],
    ["¿Para qué sirve?", `<p>Modelar sirve para <mark>crear</mark> lo que imaginamos.</p><p>También pone fuertes los <b>músculos de los dedos</b>. Unos dedos fuertes cogen mejor el lápiz y las tijeras.</p><p>Los <b>alfareros</b> modelan barro para hacer platos y vasijas.</p><p>Los <b>pasteleros</b> modelan figuras de azúcar para las tartas.</p><p>Y los creadores de películas de animación modelan personajes y los mueven poquito a poco.</p>`,
      dibujos("Oficios que modelan: alfarero, pastelero y escultor", [["mano", "alfarero", G], ["corazon", "pastelero", R], ["estrella", "escultor", M]], { titulo: "Personas que modelan" })],
    ["Juego: ¿qué he modelado?", `<p>Vamos a jugar a <mark>¿qué he modelado?</mark></p><p>Cada niño o niña coge un trozo de plastilina y modela una cosa en secreto: una fruta, un animal o un juguete.</p><p>Tiene tres minutos. ¡Hay que darse prisa!</p><p>Después, los demás intentan adivinar qué es.</p><p>Si nadie lo adivina, el escultor da una pista: «Vive en el mar» o «Es amarilla».</p><p>Al final, hacemos una exposición con todas las figuras.</p>`,
      dibujos("Figuras de plastilina para adivinar: manzana, caracol y pez", [["manzana", "¿fruta?", R], ["caracol", "¿animal?", M], ["interrogacion", "¡adivina!", A]], { titulo: "¿Qué es?" })],
    ["Repaso: lo que ya sé", `<p><mark>Modelar</mark> es dar forma a una masa blanda con las manos.</p><p>Las formas básicas son la <b>bola</b>, el <b>churro</b> y la <b>tortita</b>.</p><p>Uniendo piezas creamos figuras. Con herramientas añadimos detalles.</p><p>Las figuras de plastilina tienen <b>volumen</b>, como las esculturas.</p><p>Y nunca olvidamos las normas: tapete, manos limpias y recoger al final.</p><p>¡Ya eres un pequeño escultor!</p>`,
      lista("Repaso de modelar", [["Bola: girar entre las palmas", R], ["Churro: rodar en la mesa", V], ["Tortita: aplastar", A], ["Unir piezas apretando", N]], { titulo: "Ya sé…" })],
  ],
  figura: ["Las tres formas básicas", pasos("Las tres formas básicas de plastilina: bola, churro y tortita", [[(x, y) => bola(x, y, 22, P.rojo), "bola"], [(x, y) => churro(x, y, 54, P.verde, 12), "churro"], [(x, y) => tortita(x, y + 6, 28, P.azul), "tortita"]], { titulo: "Bola, churro y tortita" })],
  video: { ...vid("eEai0r_kl6Q", "Cómo hacer un pollito de plastilina en 3 minutos", "Dibujos En Acción", 3252745), busqueda: "plastilina para niños fácil" },
  ejemplos: [
    ["Modela una serpiente.", ["Hago una bola verde.", "La ruedo en la mesa hasta hacer un churro largo.", "Le marco los ojos con el palillo."], "una serpiente de churro."],
    ["Modela una mariquita.", ["Hago una bola roja y la aplasto un poco.", "Hago bolitas negras muy pequeñas.", "Las pego encima como puntos."], "una mariquita roja con puntos."],
    ["Modela un caracol.", ["Hago un churro largo y lo enrollo: es la concha.", "Hago otro churro para el cuerpo.", "Pego la concha encima del cuerpo."], "un caracol de dos churros."],
    ["Modela una galleta.", ["Hago una bola marrón.", "La aplasto en tortita.", "Le hago agujeritos con el palillo."], "una galleta con textura."],
  ],
  errores: [
    "Apretar demasiado al hacer una bola: hay que girar suave.",
    "No apretar al unir piezas: se caen.",
    "Mezclar todos los colores en la caja: luego todo queda marrón.",
    "Meterse la plastilina en la boca: ¡no se come!",
  ],
  basico: [
    ["Haz una bola de plastilina.", "Girar entre las palmas."],
    ["Haz un churro.", "Rodar la bola sobre la mesa."],
    ["Haz una tortita.", "Aplastar una bola con la palma."],
    ["¿Qué ponemos en la mesa antes de modelar?", "Un tapete o un plástico."],
    ["¿La plastilina se puede comer?", "No."],
    ["Haz tres bolas: grande, mediana y pequeña.", "Tres bolas de distinto tamaño."],
    ["¿Qué haces al terminar de modelar?", "Recoger y lavarme las manos."],
    ["Modela una fruta.", "Respuesta libre, por ejemplo una manzana."],
  ],
  medio: [
    ["Modela una serpiente con ojos.", "Churro largo y ojos con palillo o bolitas."],
    ["Modela un muñeco de nieve.", "Dos bolas blancas unidas."],
    ["¿Para qué sirve el palillo?", "Para hacer rayas, agujeros y detalles."],
    ["¿Qué es una escultura?", "Una obra de arte con volumen."],
    ["¿En qué se parece la plastilina al barro? ¿En qué se diferencian?", "Los dos se modelan; el barro se seca y endurece."],
    ["Modela un caracol enrollando un churro.", "Churro enrollado como concha."],
    ["¿Cómo unimos dos piezas?", "Apretándolas un poco."],
    ["Haz una galleta con textura usando un tenedor.", "Tortita con rayas de tenedor."],
    ["¿Qué es tener volumen?", "Poder ver la figura por todos los lados."],
  ],
  avanzado: [
    ["Modela tu animal favorito con al menos 4 piezas.", "Figura libre con varias piezas unidas."],
    ["Modela un plato de comida con tres alimentos.", "Respuesta libre."],
    ["Explica a un compañero cómo hacer un pollito.", "Bola grande, bola pequeña, pico y ojos."],
    ["Mezcla plastilina amarilla y azul. ¿Qué color sale?", "Verde."],
    ["Inventa un personaje y cuéntale a la clase su historia.", "Respuesta libre."],
  ],
  quiz: [
    ["Modelar es…", ["dar forma con las manos", "pintar", "recortar"], 0, "Dar forma con las manos."],
    ["Para hacer una bola…", ["giro entre las palmas", "aplasto", "corto"], 0, "Giro entre las palmas."],
    ["Para hacer un churro…", ["ruedo en la mesa", "aplasto", "pellizco"], 0, "Ruedo en la mesa."],
    ["Para hacer una tortita…", ["aplasto", "ruedo", "estiro"], 0, "Aplasto."],
    ["La plastilina…", ["no se come", "se come", "se bebe"], 0, "No se come."],
    ["El barro al secarse…", ["se endurece", "se derrite", "desaparece"], 0, "Se endurece."],
    ["Con un palillo hago…", ["detalles", "bolas", "colores"], 0, "Detalles."],
    ["Una figura que se ve por todos los lados tiene…", ["volumen", "color", "sonido"], 0, "Volumen."],
    ["Una obra de arte con volumen es una…", ["escultura", "canción", "foto"], 0, "Escultura."],
    ["Para que dos piezas no se caigan…", ["las aprieto", "las mojo", "las separo"], 0, "Las aprieto."],
    ["Una serpiente se hace con un…", ["churro", "tortita", "cuadrado"], 0, "Churro."],
    ["Los alfareros modelan…", ["barro", "agua", "papel"], 0, "Barro."],
  ],
  examen: [
    ["¿Qué forma se hace girando entre las palmas?", ["bola", "tortita", "churro"], 0, "Bola."],
    ["¿Qué ponemos en la mesa?", ["un tapete", "agua", "arena"], 0, "Un tapete."],
    ["Un muñeco de nieve son dos…", ["bolas", "churros", "tortitas"], 0, "Bolas."],
    ["Una galleta es una…", ["tortita", "bola", "serpiente"], 0, "Tortita."],
    ["Modelar da fuerza a los…", ["dedos", "pies", "ojos"], 0, "Dedos."],
    ["Un dibujo en un papel es…", ["plano", "una escultura", "redondo"], 0, "Plano."],
  ],
  feynman: ["Cómo se hacen la bola, el churro y la tortita", "Cómo se unen piezas", "Qué es una figura con volumen"],
  mapa: ["MODELAR", [["Bola", "girar", R], ["Churro", "rodar", V], ["Tortita", "aplastar", A], ["Volumen", "escultura", N]], 230],
  tarjetas: [
    ["Modelar", "Dar forma con las manos"],
    ["Bola", "Girar entre las palmas"],
    ["Churro", "Rodar sobre la mesa"],
    ["Tortita", "Aplastar con la palma"],
    ["Palillo", "Para hacer detalles"],
    ["Rodillo", "Para aplastar"],
    ["Barro", "Masa de tierra que se endurece"],
    ["Escultura", "Obra de arte con volumen"],
    ["Unir piezas", "Apretar un poco"],
    ["Norma de oro", "La plastilina no se come"],
  ],
  glosario: [
    ["Modelar", "Dar forma a una masa blanda con las manos."],
    ["Plastilina", "Masa blanda de colores que no se seca."],
    ["Barro", "Masa de tierra mojada que se endurece al secarse."],
    ["Amasar", "Apretar y mover la masa para ablandarla."],
    ["Churro", "Forma alargada hecha rodando la masa."],
    ["Volumen", "Cuando una figura se ve por todos los lados."],
    ["Escultura", "Obra de arte con volumen."],
    ["Alfarero", "Persona que hace vasijas de barro."],
  ],
  situacion: ["Los amigos de la serpiente", "Como Lucas, vamos a hacer amigos de plastilina para la serpiente y montar una exposición.", ["Cada uno modela una serpiente con un churro.", "Después, modela un animal amigo uniendo bolas, churros y tortitas.", "Añadimos detalles con el palillo.", "Montamos la exposición y cada uno presenta su figura."], "una exposición de animales de plastilina.", ["Hace bien la bola, el churro y la tortita.", "Une piezas que no se caen.", "Cumple las normas de trabajo."]],
  familias: [
    "Haced pasta de sal en casa con harina, sal y agua.",
    "Modelad juntos frutas o animales y jugad a adivinar.",
    "Usad herramientas de cocina seguras: rodillo, moldes, tenedor de plástico.",
    "Recordadle las normas: tapete, manos limpias y recoger al final.",
  ],
  saberes: "Expresión tridimensional: modelado con plastilina, barro y pasta de sal. Técnicas básicas (bola, churro, tortita, unión de piezas), herramientas sencillas y concepto de volumen",
  ideas: ["Taller de pasta de sal en el aula.", "Exposición de figuras con cartelas hechas por el alumnado.", "Juego de modelar y adivinar con tiempo limitado.", "Visita virtual a un taller de alfarería."],
});
