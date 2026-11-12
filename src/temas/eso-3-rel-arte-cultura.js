// Religión 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols, figLinea, ampliar, tabla, caja } = require("./_hum");

// Dibujo propio: arco de medio punto (románico) frente a arco apuntado (gótico).
const arcos = caja("Arco de medio punto del románico, grueso y bajo, frente al arco apuntado del gótico, alto y esbelto", `
  <g ${F} text-anchor="middle" font-weight="700" font-size="12">
    <path d="M24 150 V 96 A 46 46 0 0 1 116 96 V 150 H 100 V 96 A 30 30 0 0 0 40 96 V 150 Z" fill="var(--sun)" opacity=".6" stroke="var(--ink)" stroke-width="2"/>
    <path d="M148 150 V 84 Q 148 30 194 16 Q 240 30 240 84 V 150 H 228 V 84 Q 228 44 194 32 Q 160 44 160 84 V 150 Z" fill="var(--pen)" opacity=".45" stroke="var(--ink)" stroke-width="2"/>
    <text x="70" y="168" fill="var(--ink)">románico</text><text x="194" y="168" fill="var(--ink)">gótico</text>
    <text x="70" y="40" fill="var(--muted)" font-size="10.5">medio punto</text>
  </g>`);

module.exports = {
  materia: "Religión",
  curso: "3-eso",
  titulo: "El arte y la cultura cristiana",
  minutos: 35,
  objetivos: ["Reconocer los grandes estilos del arte cristiano", "Interpretar símbolos e iconografía cristiana", "Valorar la aportación del cristianismo a la cultura: música, literatura, educación y fiestas"],
  claves: ["arte paleocristiano", "románico", "gótico", "Barroco", "iconografía", "símbolo", "Camino de Santiago", "patrimonio"],
  pregunta: {
    texto: "En casi cualquier pueblo de España, el edificio más antiguo y alto es una iglesia. ¿Por qué el cristianismo ha dejado tanta huella en el arte y en el paisaje?",
    respuesta: "Durante siglos, la fe fue el centro de la vida de las personas, y el arte fue una forma de <mark>expresarla, enseñarla y celebrarla</mark>. Iglesias, catedrales, retablos, pinturas, música y fiestas forman hoy un patrimonio enorme: España tiene decenas de lugares religiosos declarados Patrimonio de la Humanidad.",
  },
  bloques: [
    {
      html: `<h3>El primer arte cristiano</h3><p>Durante las persecuciones, los cristianos se reunían en casas y enterraban a sus muertos en las <mark>catacumbas</mark>, galerías subterráneas de Roma. En sus paredes pintaron <b>símbolos</b> discretos que solo entendían los creyentes: el <b>pez</b> (Cristo), el <b>Buen Pastor</b> con una oveja al hombro, el <b>ancla</b> (la esperanza), la <b>paloma</b> (el Espíritu Santo o la paz) o el <b>crismón</b>, las letras griegas X y P, iniciales de Cristo. Cuando llegó la libertad religiosa (313), se construyeron las primeras grandes iglesias, las <b>basílicas</b>, con planta rectangular y mosaicos brillantes.</p>`,
      svg: filas("Símbolos de los primeros cristianos", [["Pez", "Jesús, Hijo de Dios", "var(--inf)"], ["Pastor", "Cristo cuida", "var(--leaf)"], ["Ancla", "esperanza", "var(--muted)"], ["Crismón", "XP: Cristo", "var(--sun)"], ["Paloma", "Espíritu, paz", "var(--pen)"]]),
    },
    {
      html: `<h3>El románico</h3><p>Entre los siglos XI y XIII se extendió por Europa el <mark>románico</mark>, el arte de los monasterios y del <b>Camino de Santiago</b>. Sus iglesias tienen <b>muros gruesos</b> con pocas y pequeñas ventanas, <b>arcos de medio punto</b> y bóvedas de cañón, por lo que el interior es oscuro y recogido, ideal para la oración. Las portadas y los capiteles se llenaban de <b>esculturas</b> que enseñaban la fe a quienes no sabían leer, como el Cristo en majestad rodeado del Tetramorfos. Ejemplos: San Martín de Frómista, San Isidoro de León o el Pórtico de la Gloria de Santiago.</p>`,
      svg: arcos,
    },
    {
      html: `<h3>El gótico</h3><p>Desde el siglo XIII, en las ciudades en crecimiento, surgió el <mark>gótico</mark>, el arte de las <b>catedrales</b>. Gracias al <b>arco apuntado</b>, la bóveda de crucería y los <b>arbotantes</b> exteriores, que llevan el peso hacia fuera, los muros pudieron hacerse más altos y abrirse con enormes <b>vidrieras</b> de colores. El interior se llena de luz, que simboliza a Dios: «Dios es luz» (1 Jn 1,5). Las catedrales eran el orgullo de cada ciudad y tardaban décadas o siglos en construirse. En España destacan las de <b>León</b>, famosa por sus vidrieras, <b>Burgos</b> y <b>Toledo</b>.</p>`,
      svg: dos("Románico y gótico", ["Románico", ["s. XI–XIII", "muros gruesos", "medio punto", "penumbra"], "var(--sun)"], ["Gótico", ["s. XIII–XV", "arbotantes", "arco apuntado", "luz y vidrieras"], "var(--pen)"]),
    },
    {
      html: `<h3>Renacimiento y Barroco</h3><p>En el <b>Renacimiento</b> (siglos XV–XVI), los artistas buscaron la belleza y la armonía inspirándose en lo clásico: Miguel Ángel pintó la <b>Capilla Sixtina</b> y Leonardo, <b>La última cena</b>. Tras el Concilio de Trento, el <mark>Barroco</mark> (siglo XVII) quiso conmover y emocionar a los fieles con un arte dramático y realista. En España es la gran época de la <b>imaginería</b>: tallas de madera policromada de Cristo y la Virgen que todavía salen en las procesiones de Semana Santa, obras de escultores como Gregorio Fernández, Martínez Montañés o Salzillo. También pintores como <b>Murillo</b>, <b>Zurbarán</b> y <b>Velázquez</b>.</p>`,
      svg: filas("Arte cristiano del Renacimiento y del Barroco", [["Miguel Ángel", "Capilla Sixtina", "var(--pen)"], ["Leonardo", "La última cena", "var(--leaf)"], ["G. Fernández", "pasos procesionales", "var(--red)"], ["Murillo", "Inmaculadas", "var(--sun)"]]),
    },
    {
      html: `<h3>Cultura cristiana más allá del arte</h3><p>El cristianismo ha marcado también la <b>cultura</b>. Los <mark>monasterios</mark> medievales copiaron y conservaron los libros antiguos; de las escuelas catedralicias nacieron las primeras <b>universidades</b>, como la de Salamanca (1218). En <b>música</b>, desde el canto gregoriano hasta Bach o Händel, gran parte del repertorio clásico es religioso. En <b>literatura</b> destacan santa Teresa de Jesús y san Juan de la Cruz. Y el calendario y las fiestas siguen el ritmo cristiano: Navidad, Semana Santa, los patrones de cada pueblo, el domingo como día de descanso o el <b>Camino de Santiago</b>, primer itinerario cultural europeo.</p>`,
      svg: rueda("Aportaciones del cristianismo a la cultura: universidades, música, literatura y fiestas", "CULTURA", [["universidad", "var(--pen)"], ["música", "var(--sun)"], ["literatura", "var(--leaf)"], ["fiestas", "var(--red)"]], "var(--bac)"),
    },
  ],
  figura: {
    titulo: "Veinte siglos de arte cristiano",
    svg: figLinea("Línea del tiempo de los estilos del arte cristiano", [[50, "s. II–IV", "catacumbas", 1], [140, "s. IV–VI", "basílicas", 0], [240, "s. XI–XIII", "románico", 1], [340, "s. XIII–XV", "gótico", 0], [440, "s. XV–XVI", "Renacimiento", 1], [540, "s. XVII", "Barroco", 0], [630, "hoy", "Sagrada Familia", 1]]),
  },
  video: { id: "MihQQTi8ZrE", titulo: "Románico y gótico: descubre sus 7 diferencias en 10 minutos", canal: "Experiencias con Arte", vistas: 256272, megusta: 0, busqueda: "arte cristiano románico gótico" },
  quiz: [
    { q: "¿Dónde pintaron sus primeros símbolos los cristianos?", o: ["En las catacumbas", "En las catedrales", "En los castillos"], a: 0, e: "Galerías subterráneas de Roma." },
    { q: "¿Qué arco es típico del románico?", o: ["De medio punto", "Apuntado", "De herradura"], a: 0, e: "Semicircular." },
    { q: "¿Qué permitió abrir grandes vidrieras en el gótico?", o: ["Los arbotantes y el arco apuntado", "Los muros gruesos", "Las columnas dóricas"], a: 0, e: "Llevan el peso hacia fuera." },
    { q: "¿Qué estilo quería conmover con un arte dramático?", o: ["El Barroco", "El románico", "El paleocristiano"], a: 0, e: "Tras el Concilio de Trento." },
    { q: "¿Qué simboliza el ancla en el arte cristiano?", o: ["La esperanza", "El mar", "La muerte"], a: 0, e: "Símbolo de las catacumbas." },
  ],
  examen: [
    { q: "La catedral de León es famosa por…", o: ["sus vidrieras", "sus mosaicos", "su cúpula"], a: 0, e: "Gótico español." },
    { q: "El crismón está formado por…", o: ["las letras X y P", "una cruz y un pez", "una paloma"], a: 0, e: "Iniciales de Cristo en griego." },
    { q: "Las tallas de las procesiones de Semana Santa son sobre todo del…", o: ["Barroco", "Románico", "Renacimiento"], a: 0, e: "Imaginería en madera policromada." },
  ],
  feynman: ["Cuáles fueron los primeros símbolos cristianos", "En qué se diferencian el románico y el gótico", "Qué buscaba el arte barroco", "Qué aportó el cristianismo a la cultura además del arte"],
  mapa: mapa("ARTE Y CULTURA", "var(--bac)", [
    ["Primeros siglos", "catacumbas · símbolos", "var(--muted)"],
    ["Edad Media", "románico · gótico", "var(--sun)"],
    ["Edad Moderna", "Renacimiento · Barroco", "var(--red)"],
    ["Cultura", "universidad · música", "var(--pen)"],
  ], 260),
  tarjetas: [
    ["Catacumbas", "Cementerios subterráneos de los primeros cristianos en Roma."],
    ["Románico", "Estilo de los siglos XI–XIII: muros gruesos y arco de medio punto."],
    ["Gótico", "Estilo de las catedrales: arco apuntado, arbotantes y vidrieras."],
    ["Imaginería", "Escultura religiosa en madera policromada, típica del Barroco."],
    ["Iconografía", "Estudio de los temas y símbolos de las imágenes."],
  ],
  familias: ["Visitad una iglesia de vuestra localidad y averiguad de qué estilo es.", "Escuchad juntos un fragmento de canto gregoriano o del Mesías de Händel.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El arte y la cultura cristiana: simbología e iconografía, estilos artísticos, aportaciones a la educación, la música, la literatura y las fiestas, y valoración del patrimonio (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Salida para analizar la iglesia del barrio con una ficha de estilos.", "Taller de vidrieras con papel de seda.", "Identificar atributos de santos en cuadros del Museo del Prado."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo del Prado: colección de pintura religiosa", url: "https://www.museodelprado.es/coleccion/obras-de-arte" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Reconocer a los santos por sus atributos", "Explicar las partes de una iglesia"],
  bloques: [
    { tras: "El primer arte cristiano", html: `<h3>Las partes de una iglesia</h3><p>Muchas iglesias tienen <mark>planta de cruz latina</mark>, que recuerda la cruz de Cristo, y se orientan hacia el este, por donde sale el sol, símbolo de la resurrección. Se entra por el <b>pórtico</b> o portada, al pie del templo. El espacio largo donde se sitúan los fieles es la <b>nave</b> (puede haber una central y otras laterales). La nave transversal que forma los brazos de la cruz es el <b>crucero</b>. Al fondo está el <b>presbiterio</b>, con el <b>altar</b>, y detrás el <b>ábside</b>, a menudo semicircular, donde suele colocarse el <b>retablo</b>. Junto a la entrada, la <b>pila bautismal</b>; y a un lado, el <b>campanario</b>. Saber nombrar estas partes ayuda a entender cualquier iglesia.</p>`, video: { id: "z_5AAk1jABI", titulo: "Catacumba de Priscila, Roma", canal: "Smarthistory", vistas: 313535, megusta: 0 } },
    { tras: "El gótico", html: `<h3>Iconografía: reconocer a los santos</h3><p>La <mark>iconografía</mark> estudia los temas y símbolos de las imágenes. Igual que los dioses griegos tenían atributos, los santos se reconocen por objetos relacionados con su vida:</p>${tabla(["Personaje", "Atributo"], [["San Pedro", "las llaves del Reino"], ["San Pablo", "la espada y un libro"], ["Santiago", "concha, bordón y sombrero de peregrino"], ["San Juan Bautista", "piel de camello y un cordero"], ["La Inmaculada", "manto azul, luna a los pies, corona de estrellas"], ["Santa Teresa", "hábito carmelita, pluma y libro"], ["Cristo Pantocrátor", "bendice con la mano y sostiene un libro"]])}<p>Los cuatro evangelistas se representan con el <b>Tetramorfos</b>: hombre, león, toro y águila.</p>` },
    { tras: "Renacimiento y Barroco", html: `<h3>Arte religioso contemporáneo</h3><p>El arte cristiano no terminó con el Barroco. En el siglo XIX se construyeron iglesias que imitaban estilos antiguos (neogótico, neorrománico). En el XX, <mark>Antoni Gaudí</mark> dedicó su vida a la basílica de la <b>Sagrada Familia</b> de Barcelona, todavía en obras, donde la naturaleza inspira columnas que parecen árboles y la luz de las vidrieras cambia de color a lo largo del día; la Iglesia declaró a Gaudí venerable en 2025. Artistas como Salvador Dalí (<i>Cristo de san Juan de la Cruz</i>) o Marc Chagall, con sus vidrieras, han seguido creando arte religioso. Hoy, muchas parroquias encargan obras a artistas actuales.</p>` },
    { tras: "Cultura cristiana más allá del arte", html: `<h3>El Camino de Santiago</h3><p>Desde el siglo IX, cuando se descubrió en Compostela el que se considera el sepulcro del apóstol <b>Santiago</b>, miles de peregrinos de toda Europa caminaron hasta allí. A lo largo del <mark>Camino de Santiago</mark> surgieron hospitales, puentes, monasterios e iglesias románicas, y se intercambiaron ideas, lenguas y estilos artísticos: por eso Goethe dijo que «Europa se hizo peregrinando a Compostela». En 1987 fue declarado el primer <b>Itinerario Cultural Europeo</b> y es Patrimonio de la Humanidad. Hoy lo recorren cada año cientos de miles de personas, por motivos religiosos, deportivos o culturales, con la concha de vieira como símbolo.</p>` },
  ],
  ejemplos: [
    { enunciado: "Una iglesia tiene muros gruesos, ventanas estrechas, arcos de medio punto y capiteles con escenas bíblicas. ¿De qué estilo es?", pasos: ["Muros gruesos y ventanas pequeñas: interior en penumbra.", "Arco de medio punto: semicircular.", "Escultura que enseña la fe en capiteles."], resultado: "Es románica (siglos XI–XIII)." },
    { enunciado: "En un cuadro aparece un hombre anciano con unas llaves. ¿Quién es?", pasos: ["Las llaves son el atributo de san Pedro.", "Jesús le dijo: «Te daré las llaves del Reino de los cielos» (Mt 16,19)."], resultado: "San Pedro." },
    { enunciado: "Explica por qué la luz es tan importante en el gótico.", pasos: ["Los arbotantes permiten muros más finos y con grandes vanos.", "Las vidrieras llenan el interior de luz de colores.", "Para la fe cristiana, la luz es símbolo de Dios («Dios es luz»)."], resultado: "Porque la luz expresa la presencia de Dios y la técnica gótica permitía llenar de ella las catedrales." },
  ],
  errores: [
    "Confundir el arco de medio punto (románico) con el apuntado (gótico).",
    "Pensar que el arte religioso es solo decoración: también enseñaba la fe a quienes no sabían leer.",
    "Creer que el arte cristiano terminó en la Edad Media.",
    "Confundir catacumbas (cementerios) con iglesias.",
    "Pensar que la cultura cristiana solo está en los templos: también en universidades, música, fiestas y calendario.",
  ],
  ejercicios: [
    { q: "Cita tres símbolos de los primeros cristianos y su significado.", sol: "Pez (Cristo), ancla (esperanza), paloma (Espíritu Santo o paz); también el Buen Pastor y el crismón." },
    { q: "¿Qué eran las catacumbas?", sol: "Cementerios subterráneos de Roma donde los primeros cristianos enterraban a sus muertos." },
    { q: "Escribe tres características del románico.", sol: "Muros gruesos, arco de medio punto y bóveda de cañón, pocas ventanas." },
    { q: "Escribe tres características del gótico.", sol: "Arco apuntado, bóveda de crucería, arbotantes y grandes vidrieras." },
    { q: "Nombra las partes de una iglesia de planta de cruz latina.", sol: "Pórtico, nave, crucero, presbiterio, altar, ábside y campanario." },
    { q: "¿Qué buscaba el arte barroco?", sol: "Conmover y emocionar a los fieles con un arte dramático y realista." },
    { q: "¿Cuál es el atributo de Santiago?", sol: "La concha, el bordón y el sombrero de peregrino." },
    { q: "Cita dos aportaciones del cristianismo a la cultura que no sean arquitectura.", sol: "Las universidades y la música (canto gregoriano, Bach), además de la literatura y las fiestas." },
    { q: "¿Por qué se dice que Europa se hizo peregrinando a Compostela?", sol: "Porque el Camino de Santiago unió a gentes de toda Europa e hizo circular ideas, lenguas y arte." },
    { q: "Pon un ejemplo de arte religioso contemporáneo.", sol: "La Sagrada Familia de Gaudí, en Barcelona." },
  ],
  quiz: [
    { q: "La nave transversal de la iglesia se llama…", o: ["crucero", "ábside", "pórtico"], a: 0, e: "Forma los brazos de la cruz." },
    { q: "El atributo de san Pedro son…", o: ["las llaves", "la espada", "el cordero"], a: 0, e: "Mt 16,19." },
    { q: "La Sagrada Familia es obra de…", o: ["Gaudí", "Miguel Ángel", "Herrera"], a: 0, e: "Barcelona." },
    { q: "La Universidad de Salamanca se fundó en…", o: ["1218", "1492", "1808"], a: 0, e: "Una de las más antiguas de Europa." },
    { q: "El símbolo del peregrino a Santiago es…", o: ["la concha de vieira", "el pez", "el ancla"], a: 0, e: "Aparece en todo el Camino." },
  ],
  tarjetas: [
    ["Planta de cruz latina", "Planta de iglesia con forma de cruz: nave, crucero y ábside."],
    ["Atributo de santo", "Objeto que identifica al santo: las llaves de Pedro."],
    ["Camino de Santiago", "Peregrinación a Compostela, primer Itinerario Cultural Europeo."],
  ],
});
