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

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Un libro de piedra", `<p>En la Edad Media, la mayoría de la gente no sabía leer. Sin embargo, cuando un campesino entraba en la iglesia de su pueblo o se detenía ante la portada de una catedral, podía «leer» toda la historia de la salvación: la creación de Adán y Eva, el arca de Noé, el nacimiento de Jesús en Belén, su muerte en la cruz, la resurrección y el Juicio Final. Pinturas, relieves, vidrieras y esculturas contaban la Biblia con imágenes. Por eso se ha dicho que las iglesias eran la «Biblia de los pobres» y que las catedrales son libros de piedra.</p><p>Hoy, creyentes y no creyentes visitan esos mismos edificios para admirar su belleza. El arte cristiano llena nuestros pueblos y ciudades: iglesias románicas en lo alto de una colina, catedrales góticas llenas de luz, retablos dorados, tallas que recorren las calles en Semana Santa, música que suena en conciertos de todo el mundo. En este tema aprenderás a reconocer los grandes estilos del arte cristiano, a descifrar sus símbolos y a descubrir cómo la fe ha inspirado durante dos mil años obras que hoy forman parte del patrimonio de toda la humanidad.</p>`],
  mas: [
    ["<h3>El primer arte cristiano</h3>", `<p>Tras el Edicto de Milán (313), los cristianos pudieron construir templos públicos. Tomaron como modelo la <b>basílica</b> romana, un edificio civil alargado que servía de tribunal y mercado, porque permitía reunir a mucha gente. De ahí que hoy todavía llamemos basílicas a algunas iglesias importantes.</p>`],
    ["<h3>El gótico</h3>", `<p>Para los constructores góticos, la <b>luz</b> era un símbolo de Dios. Las vidrieras convertían la luz del sol en colores y contaban historias bíblicas, de modo que el interior de la catedral quería parecer un anticipo del cielo. Entre las grandes catedrales góticas españolas están las de <b>Burgos</b>, <b>León</b> y <b>Toledo</b>.</p>`],
    ["<h3>Arte religioso contemporáneo</h3>", `<p>Los artistas contemporáneos han buscado nuevas formas de expresar la fe: espacios sencillos y luminosos, vidrieras abstractas o esculturas de líneas simples. En la catedral de la Almudena de Madrid, por ejemplo, el artista Marko Rupnik hizo mosaicos de estilo moderno inspirados en los antiguos iconos.</p>`],
    ["<h3>El románico</h3>", `<p>En el románico, la escultura se concentraba en las <b>portadas</b> y los <b>capiteles</b>. En el tímpano, sobre la puerta, solía aparecer Cristo en majestad o el Juicio Final, para recordar a quien entraba el sentido de su vida. Los capiteles mostraban escenas bíblicas, vicios y virtudes, y también animales fantásticos que representaban el mal vencido por Cristo.</p>`],
  ],
  svgs: [
    ["<h3>Las partes de una iglesia</h3>", "Partes de una iglesia", [["Nave", "donde se reúnen los fieles"], ["Crucero", "nave transversal"], ["Ábside", "cabecera con el altar"]], "planta de cruz latina"],
    ["<h3>Iconografía: reconocer a los santos</h3>", "Atributos de algunos santos", [["San Pedro", "las llaves"], ["Santiago", "concha y bordón"], ["San Pablo", "la espada"]], "iconografía"],
    ["<h3>Arte religioso contemporáneo</h3>", "Arte religioso contemporáneo", [["Gaudí", "la Sagrada Familia"], ["Formas", "sencillas y luminosas"], ["Mosaicos", "de estilo moderno"]], "siglos XIX a XXI"],
    ["<h3>El Camino de Santiago</h3>", "El Camino de Santiago", [["Origen", "siglo IX, sepulcro del apóstol"], ["Símbolo", "la concha de vieira"], ["Hoy", "Patrimonio de la Humanidad"]], "Europa se hizo peregrinando"],
  ],
  bloques: [
    { tras: "<h3>El primer arte cristiano</h3>", html: `<h3>El arte bizantino y los iconos</h3><p>Cuando el Imperio romano se dividió, en Oriente surgió el <mark>Imperio bizantino</mark>, con capital en Constantinopla. Allí el arte cristiano alcanzó un gran esplendor. Su obra más famosa es la basílica de <b>Santa Sofía</b> (siglo VI), mandada construir por el emperador Justiniano, con una enorme cúpula que parece flotar sobre una corona de ventanas. Los interiores bizantinos se cubrían de <b>mosaicos</b> con fondos dorados, que simbolizaban la luz de Dios y daban a las figuras un aspecto solemne y eterno.</p><p>El arte bizantino creó los <mark>iconos</mark>, imágenes pintadas sobre tabla de Cristo, la Virgen o los santos, que los cristianos orientales veneran como «ventanas» hacia lo sagrado. Siguen reglas muy precisas: figuras frontales, ojos grandes, fondo dorado y colores simbólicos. Uno de los temas principales es el <b>Pantocrátor</b> («todopoderoso»): Cristo de frente, bendiciendo con una mano y sosteniendo el libro de los Evangelios con la otra. En el siglo VIII hubo una fuerte polémica, la <b>iconoclasia</b>, en la que algunos querían destruir las imágenes; finalmente, la Iglesia defendió su uso.</p>`, svg: ["Arte bizantino", [["Santa Sofía", "gran cúpula, siglo VI"], ["Mosaicos", "fondos dorados"], ["Iconos", "Pantocrátor y la Virgen"]], "Constantinopla"] },
    { tras: "<h3>El románico</h3>", html: `<h3>El románico en España</h3><p>España conserva uno de los conjuntos románicos más ricos de Europa, en gran parte gracias al <b>Camino de Santiago</b>, por el que llegaron ideas y artistas. A lo largo de la ruta se levantaron iglesias como la catedral de <b>Jaca</b> (Huesca) o San Martín de <b>Frómista</b> (Palencia), considerada un modelo de románico puro por la armonía de sus volúmenes y sus capiteles esculpidos.</p><p>En el Panteón de los Reyes de <b>San Isidoro de León</b> se conservan unas pinturas murales tan extraordinarias que se le llama «la Capilla Sixtina del románico». El ábside de <b>Sant Climent de Taüll</b>, en el valle de Boí (Lleida), tenía un impresionante Pantocrátor que hoy se guarda en el Museo Nacional de Arte de Cataluña. Y en la catedral de <b>Santiago de Compostela</b>, el <mark>Pórtico de la Gloria</mark> del maestro Mateo (finales del siglo XII) muestra más de doscientas figuras que recibían a los peregrinos al final de su viaje, con una expresividad que anuncia ya el gótico.</p>`, svg: ["El románico en España", [["Frómista", "románico puro"], ["San Isidoro", "Capilla Sixtina románica"], ["Santiago", "Pórtico de la Gloria"]], "a lo largo del Camino"] },
    { tras: "<h3>Renacimiento y Barroco</h3>", html: `<h3>La imaginería y la Semana Santa</h3><p>En la España del siglo XVII se desarrolló una gran escuela de <mark>imaginería</mark>: esculturas religiosas de madera policromada (pintada) que buscaban emocionar y acercar los misterios de la fe al pueblo. Los escultores daban a sus figuras un realismo impresionante, con ojos de cristal, lágrimas de resina, pelo natural o heridas muy detalladas. Destacaron <b>Gregorio Fernández</b> en Valladolid, <b>Juan Martínez Montañés</b> y Juan de Mesa en Sevilla, y, ya en el siglo XVIII, <b>Francisco Salzillo</b> en Murcia.</p><p>Muchas de esas imágenes salen cada año a la calle en las procesiones de <mark>Semana Santa</mark>, sobre <b>pasos</b> llevados a hombros por costaleros o portadores. Las organizan las <b>cofradías</b> y hermandades, asociaciones de fieles que mantienen viva esta tradición. Las procesiones combinan fe, arte, música (marchas procesionales, saetas) y tradición popular, y varias de ellas han sido declaradas de interés turístico internacional. Para los creyentes son una forma de meditar sobre la pasión, muerte y resurrección de Jesús.</p>`, svg: ["Imaginería barroca española", [["Valladolid", "Gregorio Fernández"], ["Sevilla", "Martínez Montañés"], ["Murcia", "Salzillo"]], "madera policromada"] },
    { tras: "<h3>Cultura cristiana más allá del arte</h3>", html: `<h3>La música cristiana</h3><p>La música ha acompañado siempre a la oración cristiana. En la Edad Media se desarrolló el <mark>canto gregoriano</mark>, llamado así en honor del papa Gregorio Magno: un canto a una sola voz, sin instrumentos, en latín, que buscaba ayudar a rezar. Los monjes inventaron también un sistema para escribir la música; el monje <b>Guido de Arezzo</b> dio nombre a las notas (ut, re, mi, fa, sol, la) a partir de las primeras sílabas de un himno a san Juan.</p><p>Después llegó la <b>polifonía</b>, con varias voces que se entrelazan. En el Renacimiento destacó el abulense <b>Tomás Luis de Victoria</b>, uno de los grandes compositores de música sacra de la historia. En el Barroco, <b>Johann Sebastian Bach</b> escribió cantatas y pasiones, y <b>Händel</b>, el oratorio <i>El Mesías</i>, cuyo «Aleluya» es conocido en todo el mundo. Más tarde, Mozart y Verdi compusieron misas de réquiem, y en el siglo XX surgieron el <b>góspel</b> afroamericano y los cantos de Taizé, que se cantan en muchos encuentros de jóvenes.</p>`, svg: ["Música cristiana", [["Gregoriano", "una voz, en latín"], ["Polifonía", "Tomás Luis de Victoria"], ["Barroco", "Bach y Händel"]], "cantar la fe"] },
    { html: `<h3>El arte, lenguaje de la fe y patrimonio de todos</h3><p>El arte cristiano nació con una <b>función</b> clara: ayudar a rezar, enseñar la fe a quienes no sabían leer y expresar la gloria de Dios con la belleza. Las imágenes de un retablo, por ejemplo, se ordenaban para contar la vida de Jesús o de la Virgen como un cómic gigante. Por eso, para comprender bien una obra religiosa, conviene preguntarse no solo cómo está hecha, sino qué quería decir y para qué se usaba.</p><p>Hoy esas obras son además <mark>patrimonio cultural</mark> de toda la sociedad. Muchas catedrales, monasterios y caminos han sido declarados Patrimonio de la Humanidad por la UNESCO, y su conservación es una responsabilidad compartida entre la Iglesia y las administraciones. Al visitar un templo hay que recordar que sigue siendo un <b>lugar de culto</b>: se entra con ropa adecuada, en silencio, sin molestar a quienes rezan y respetando los horarios de las celebraciones. Conocer y cuidar este patrimonio ayuda a entender nuestra historia, sea cual sea nuestra creencia.</p>`, svg: ["Arte cristiano hoy", [["Función", "rezar, enseñar, celebrar"], ["Patrimonio", "de toda la sociedad"], ["Visitar", "con respeto, es lugar de culto"]]] },
  ],
  videos: [["<h3>El gótico</h3>", "gotico"], ["<h3>El Camino de Santiago</h3>", "camino"]],
  ejemplos: [
    ["En una pintura aparece Cristo de frente, sentado, bendiciendo con la mano derecha y con un libro en la izquierda, rodeado de los símbolos de los evangelistas. ¿Qué tema es?", ["Cristo de frente y en majestad, bendiciendo, es el tema del Pantocrátor.", "El libro son los Evangelios.", "Los cuatro símbolos (hombre, león, toro y águila) forman el Tetramorfos."], "Un Pantocrátor con el Tetramorfos, muy frecuente en ábsides románicos como el de Taüll."],
    ["Una escultura de madera pintada muestra a Cristo muerto con heridas realistas, ojos de cristal y lágrimas. ¿De qué estilo y época es probablemente?", ["El material es madera policromada.", "El realismo extremo busca conmover al espectador.", "Es típico de la imaginería española del siglo XVII."], "Imaginería barroca española, quizá de Gregorio Fernández o de la escuela sevillana."],
    ["¿Cómo distinguirías una iglesia románica de una gótica?", ["Arco: de medio punto en el románico, apuntado en el gótico.", "Muros: gruesos y con pocas ventanas, frente a muros finos con grandes vidrieras.", "Sensación: recogimiento y penumbra, frente a altura y luz."], "Por el arco, el grosor de los muros, la cantidad de luz y la altura."],
  ],
  errores: ["Mirar el arte religioso solo como decoración, sin preguntarse qué quería decir y para qué se usaba."],
  niveles: "bbbbbmbmmm",
  ejercicios: [
    ["b", "¿Qué es un icono en el arte bizantino?", "Una imagen pintada sobre tabla de Cristo, la Virgen o los santos, con figuras frontales y fondo dorado, que se venera como ventana hacia lo sagrado."],
    ["b", "¿Qué significa Pantocrátor?", "«Todopoderoso»: Cristo en majestad, de frente, bendiciendo y con el libro de los Evangelios."],
    ["b", "Cita tres imagineros barrocos españoles.", "Gregorio Fernández, Juan Martínez Montañés y Francisco Salzillo (también Juan de Mesa)."],
    ["b", "¿Qué es el canto gregoriano?", "Un canto litúrgico medieval a una sola voz, sin instrumentos y en latín."],
    ["b", "¿Quién hizo el Pórtico de la Gloria?", "El maestro Mateo, a finales del siglo XII, en la catedral de Santiago de Compostela."],
    ["b", "¿Qué es una cofradía?", "Una asociación de fieles que organiza, entre otras cosas, las procesiones de Semana Santa."],
    ["m", "¿Por qué se llamaba a las iglesias la «Biblia de los pobres»?", "Porque, cuando la mayoría no sabía leer, las imágenes de pinturas, relieves y vidrieras contaban la historia de la salvación."],
    ["m", "¿Por qué los mosaicos bizantinos tienen fondos dorados?", "Porque el oro simboliza la luz de Dios y lo eterno, y da a las figuras un aspecto solemne fuera del tiempo."],
    ["m", "¿Qué fue la iconoclasia?", "Una polémica del siglo VIII en el Imperio bizantino entre quienes querían destruir las imágenes religiosas y quienes las defendían; la Iglesia acabó defendiendo su uso."],
    ["m", "Explica el origen del nombre de las notas musicales.", "El monje Guido de Arezzo tomó las primeras sílabas de los versos de un himno a san Juan (ut, re, mi, fa, sol, la); ut se cambió después por do."],
    ["m", "¿Por qué hay tanto románico en el norte de España?", "Porque el Camino de Santiago atrajo peregrinos, ideas y artistas, y a lo largo de la ruta se construyeron iglesias, monasterios y hospitales."],
    ["m", "¿Qué buscaba la imaginería barroca con su realismo?", "Conmover al fiel y acercarle los misterios de la fe, sobre todo la pasión de Cristo, para mover a la devoción."],
    ["m", "¿Qué normas de respeto hay que seguir al visitar una iglesia?", "Ropa adecuada, silencio, no molestar a quienes rezan, respetar los horarios de culto y las indicaciones sobre fotos."],
    ["a", "Compara una iglesia románica, una catedral gótica y una iglesia barroca en cuatro aspectos.", "Arco (medio punto / apuntado / variado y curvo), luz (penumbra / mucha luz por vidrieras / efectos teatrales), decoración (sobria / vidrieras y esculturas / exuberante, dorada) y sensación (recogimiento / elevación / emoción y movimiento)."],
    ["a", "Elige una obra de arte cristiano de tu comunidad autónoma y haz un breve comentario (identificación, descripción, función y significado).", "Respuesta abierta. Debe incluir los datos básicos de la obra, describir sus elementos, explicar su función religiosa y su valor como patrimonio."],
    ["a", "¿Por qué crees que la música ha sido tan importante en la oración cristiana?", "Porque ayuda a expresar sentimientos que las palabras solas no alcanzan, une a la comunidad al cantar juntos, facilita memorizar los textos y crea un clima de recogimiento y fiesta."],
    ["a", "Valora la Semana Santa desde tres perspectivas: religiosa, artística y social.", "Religiosa: meditación sobre la pasión y resurrección de Jesús. Artística: imaginería, música y orfebrería de gran valor. Social: tradición que une a cofradías y barrios, atrae turismo y genera identidad local."],
    ["a", "¿Quién debe encargarse de conservar el patrimonio religioso y por qué?", "Es una responsabilidad compartida: la Iglesia, como propietaria y usuaria, y las administraciones públicas, porque es patrimonio cultural de toda la sociedad; los ciudadanos también deben respetarlo."],
    ["a", "Escucha un fragmento de canto gregoriano y otro del «Aleluya» de Händel y compáralos.", "El gregoriano: una sola voz, sin instrumentos, ritmo libre y tranquilo, en latín. El Aleluya: coro a varias voces con orquesta, ritmo marcado y carácter festivo. Ambos expresan la fe, uno con recogimiento y otro con alegría."],
    ["a", "Explica por qué un ateo o una persona de otra religión puede apreciar el arte cristiano.", "Porque es una expresión de la creatividad humana, parte de la historia y la cultura común, y su belleza y técnica pueden admirarse aunque no se comparta la fe que lo inspiró."],
    ["a", "Diseña una ruta de un día por el arte cristiano de tu ciudad o comarca con tres paradas de estilos distintos.", "Respuesta abierta. Debe incluir tres obras o edificios de distintos estilos, con su ubicación, estilo, rasgos principales y una norma de respeto para la visita."],
  ],
  cuartas: ["En los acueductos", "Lobulado", "Las cúpulas de madera", "El gótico", "la pobreza", "campanario", "la concha", "Velázquez", "1900", "la paloma", "sus murallas", "las letras A y Z", "Gótico"],
  quiz: [
    ["La basílica de Santa Sofía está en…", ["Constantinopla (Estambul)", "Roma", "Toledo", "Jerusalén"], 0, "Siglo VI, Justiniano."],
    ["Los iconos tienen típicamente un fondo…", ["dorado", "azul", "negro", "verde"], 0, "Símbolo de la luz de Dios."],
    ["«Pantocrátor» significa…", ["todopoderoso", "buen pastor", "crucificado", "niño"], 0, "Cristo en majestad."],
    ["La «Capilla Sixtina del románico» está en…", ["San Isidoro de León", "Taüll", "Jaca", "Burgos"], 0, "Panteón de los Reyes."],
    ["El Pórtico de la Gloria es obra del…", ["maestro Mateo", "Gaudí", "Salzillo", "Bach"], 0, "Santiago de Compostela."],
    ["Gregorio Fernández trabajó sobre todo en…", ["Valladolid", "Sevilla", "Murcia", "Barcelona"], 0, "Imaginería barroca."],
    ["El canto gregoriano es…", ["a una sola voz y sin instrumentos", "con orquesta", "en castellano", "a varias voces"], 0, "En latín."],
    ["El compositor abulense de polifonía sacra es…", ["Tomás Luis de Victoria", "Händel", "Mozart", "Guido de Arezzo"], 0, "Renacimiento."],
    ["El Mesías, con su famoso «Aleluya», es de…", ["Händel", "Bach", "Verdi", "Victoria"], 0, "Barroco."],
    ["Al visitar una iglesia hay que recordar que es…", ["un lugar de culto", "solo un museo", "un espacio de juego", "un mercado"], 0, "Silencio y respeto."],
  ],
  examen: [
    ["La iconoclasia fue una polémica sobre…", ["las imágenes religiosas", "los sacramentos", "la Biblia", "el papa"], 0, "Siglo VIII."],
    ["Los pasos de Semana Santa los organizan…", ["las cofradías", "los ayuntamientos", "los museos", "los obispos solos"], 0, "Asociaciones de fieles."],
    ["El nombre de las notas lo dio…", ["Guido de Arezzo", "Bach", "Gregorio Magno", "Gaudí"], 0, "A partir de un himno."],
    ["La imaginería barroca usa sobre todo…", ["madera policromada", "mármol blanco", "bronce", "vidrio"], 0, "Madera pintada."],
    ["El románico se extendió en España gracias sobre todo al…", ["Camino de Santiago", "Imperio romano", "Renacimiento", "siglo XX"], 0, "Ruta de peregrinación."],
  ],
  tarjetas: [["Icono", "Imagen sagrada bizantina sobre tabla con fondo dorado."], ["Pantocrátor", "Cristo en majestad, de frente y bendiciendo."], ["Imaginería", "Escultura religiosa de madera policromada."], ["Canto gregoriano", "Canto litúrgico medieval a una voz y en latín."]],
  glosario: [["Catacumbas", "Cementerios subterráneos de los primeros cristianos."], ["Basílica", "Edificio alargado de origen romano usado como iglesia."], ["Icono", "Imagen sagrada bizantina pintada sobre tabla."], ["Pantocrátor", "Representación de Cristo todopoderoso."], ["Tetramorfos", "Símbolos de los cuatro evangelistas."], ["Románico", "Estilo de los siglos XI-XIII, sobrio y con arco de medio punto."], ["Gótico", "Estilo de las catedrales, con arco apuntado y vidrieras."], ["Arbotante", "Arco exterior que sostiene el empuje de las bóvedas."], ["Retablo", "Estructura con imágenes detrás del altar."], ["Imaginería", "Escultura religiosa policromada."], ["Cofradía", "Asociación de fieles que organiza actos religiosos."], ["Canto gregoriano", "Canto litúrgico a una sola voz."], ["Polifonía", "Música a varias voces simultáneas."], ["Iconografía", "Estudio de los temas y símbolos de las imágenes."]],
  situacion: { titulo: "Guía del patrimonio cristiano de mi entorno", reto: "Elaborar una guía para que cualquier persona, creyente o no, comprenda y respete el patrimonio religioso cercano.", pasos: ["Elegir tres obras o edificios religiosos de la localidad o la comarca.", "Investigar su historia, estilo, autor y función original.", "Identificar símbolos e iconografía y explicar su significado.", "Redactar normas de visita respetuosa y un apartado de música o tradición asociada.", "Presentar la guía en formato folleto o vídeo y compartirla con otra clase."], producto: "Guía ilustrada de tres obras del patrimonio religioso con normas de visita.", evaluacion: ["Identifica estilos y elementos con precisión.", "Explica el significado religioso y el valor cultural.", "Incluye normas de respeto adecuadas.", "La guía es clara, atractiva y útil para cualquier visitante."] },
  familias: ["Visitad juntos una iglesia, ermita o museo de arte sacro cercano y buscad tres símbolos o santos por su atributo."],
  saberes: "el arte y la cultura cristiana como expresión de la fe: estilos, iconografía, imaginería, música sacra y patrimonio.",
  minutos: 100,
});
