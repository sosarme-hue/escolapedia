// Geografía e Historia 2º ESO. Dibujos propios en SVG.
const { tema, H, tabla, F, D } = require("./_eso2d");
const V = require("./_eso2d-videos");

// Dibujo propio: arco de medio punto (románico) y arco apuntado (gótico).
const arcos = `<svg viewBox="0 0 260 180" role="img" aria-label="Arco de medio punto románico, con muro grueso, frente a arco apuntado gótico, más alto y esbelto">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <g fill="none" stroke-width="5" stroke-linejoin="round">
    <path d="M24 160 V 92 A 42 42 0 0 1 108 92 V 160" stroke="var(--sun)"/>
    <path d="M150 160 V 90 Q 150 40 192 18 Q 234 40 234 90 V 160" stroke="var(--pen)"/>
  </g>
  <rect x="12" y="160" width="108" height="8" fill="var(--sun)"/><rect x="138" y="160" width="108" height="8" fill="var(--pen)"/>
  <g ${F} font-weight="700" text-anchor="middle" font-size="12"><text x="66" y="40" fill="var(--sun)">medio punto</text><text x="66" y="128" fill="var(--ink)">románico</text><text x="192" y="128" fill="var(--ink)">gótico</text><text x="192" y="62" fill="var(--pen)">apuntado</text></g>
</svg>`;

module.exports = tema({
  materia: "Geografía e Historia",
  titulo: "El arte románico y gótico",
  objetivos: ["Reconocer los rasgos de la arquitectura, la escultura y la pintura románicas", "Explicar las innovaciones técnicas de la arquitectura gótica", "Comparar el románico y el gótico y relacionarlos con su época", "Identificar obras importantes de ambos estilos en España y en Europa"],
  claves: ["románico", "gótico", "arco de medio punto", "bóveda de cañón", "arco apuntado", "bóveda de crucería", "contrafuerte", "vidriera"],
  pregunta: [
    "Entra en una iglesia románica: muros gruesos, ventanas pequeñas, penumbra. Ahora entra en una catedral gótica: paredes que parecen de cristal y luz de colores por todas partes. Las dos son de piedra y se hicieron con siglos de diferencia. ¿Qué cambió en la forma de construir?",
    "Cambió la manera de sostener el techo. En el románico, el peso de la <b>bóveda de cañón</b> caía sobre todo el muro, que tenía que ser grueso y casi sin huecos. En el gótico, la <mark>bóveda de crucería</mark> lleva el peso a unos pocos puntos, y los <b>arbotantes</b> y <b>contrafuertes</b> lo sacan hacia fuera. El muro ya no carga, así que se puede llenar de <b>vidrieras</b>.",
  ],
  bloques: [
    ["Dos estilos de la Europa cristiana", `<p>Entre los siglos XI y XV, Europa occidental desarrolló dos grandes estilos artísticos. El <mark>románico</mark> (siglos XI–XII) se extendió en una época todavía rural y feudal, de monasterios y peregrinaciones. El <mark>gótico</mark> (siglos XIII–XV) nació en Francia hacia 1140 y fue el arte de las <b>ciudades</b> y de la burguesía.</p><p>Los dos fueron sobre todo arte <b>religioso</b>: sus obras principales son iglesias, monasterios y catedrales, y su escultura y pintura servían para enseñar la fe a una población que en su mayoría no sabía leer. Por eso se dice que eran una «Biblia de piedra».</p>`,
      H.dos("Románico y gótico", ["Románico", ["siglos XI–XII", "mundo rural", "monasterios", "peregrinaciones", "penumbra"], "var(--sun)"], ["Gótico", ["siglos XIII–XV", "mundo urbano", "catedrales", "burguesía", "luz"], "var(--pen)"])],
    ["La arquitectura románica", `<p>La iglesia románica tiene planta de <b>cruz latina</b>: una nave larga (o tres) cruzada por el <b>transepto</b>, con la cabecera orientada al este, hacia donde sale el sol. La cabecera termina en <b>ábsides</b> semicirculares. Las naves se cubren con <mark>bóveda de cañón</mark> (un medio cilindro de piedra) y, en el crucero, a veces con una cúpula.</p><p>Usa el <b>arco de medio punto</b> (media circunferencia). Como las bóvedas pesan mucho, necesita <b>muros muy gruesos</b> reforzados por fuera con <b>contrafuertes</b>, y pocas ventanas, pequeñas y estrechas. El resultado son edificios macizos, sólidos y oscuros, que invitan al recogimiento.</p>`,
      H.filas("Elementos de la arquitectura románica", [["Planta", "cruz latina con ábsides", "var(--sun)"], ["Arco", "de medio punto", "var(--red)"], ["Bóveda", "de cañón y de arista", "var(--pen)"], ["Muros", "gruesos, pocas ventanas", "var(--leaf)"], ["Soportes", "pilares y columnas", "var(--ink)"]])],
    ["Grandes obras del románico", `<p>En España el románico entró por el <b>Camino de Santiago</b> y por los condados catalanes. Su obra cumbre es la <mark>catedral de Santiago de Compostela</mark>, una iglesia de peregrinación con girola (pasillo alrededor del altar) para que los peregrinos circularan; su <b>Pórtico de la Gloria</b> (1188), del maestro Mateo, es una joya de la escultura.</p><p>Otros ejemplos son <b>San Isidoro de León</b>, San Martín de Frómista (Palencia), la catedral de Jaca, el monasterio de Ripoll y las iglesias del <b>valle de Boí</b> (Lleida), como Sant Climent de Taüll. En Europa destacan la abadía de <b>Cluny</b> (Francia) y la catedral de Pisa (Italia).</p>`,
      tabla(["Obra", "Lugar", "Qué destaca"], [["Catedral de Santiago", "Galicia", "iglesia de peregrinación, Pórtico de la Gloria"], ["San Martín de Frómista", "Palencia", "románico puro del Camino"], ["San Isidoro", "León", "pinturas del Panteón de los Reyes"], ["Sant Climent de Taüll", "Lleida", "pinturas del ábside"]])],
    ["Escultura y pintura románicas", `<p>La <b>escultura</b> románica decoraba las portadas (sobre todo el <b>tímpano</b>, el espacio semicircular encima de la puerta) y los <b>capiteles</b>. Las figuras son rígidas, simétricas y poco realistas; su tamaño depende de su importancia (<b>perspectiva jerárquica</b>). El tema más frecuente es el <mark>Pantocrátor</mark>, Cristo como juez del mundo, sentado y rodeado por los símbolos de los cuatro evangelistas (el <b>Tetramorfos</b>).</p><p>La <b>pintura</b> se hacía al <b>fresco</b> sobre los muros y ábsides, o al temple sobre tabla en los frontales de altar. Usa colores planos y vivos, contornos negros gruesos y fondos sin paisaje. Las tallas de madera más comunes son la Virgen con el Niño sentada (<b>Maiestas Mariae</b>) y Cristo en la cruz vestido, vivo y sin sufrimiento.</p>`,
      H.filas("Rasgos de la escultura y pintura románicas", [["Figuras", "rígidas, simétricas", "var(--sun)"], ["Tamaño", "según importancia", "var(--red)"], ["Tema", "Pantocrátor y Tetramorfos", "var(--pen)"], ["Pintura", "fresco, colores planos", "var(--leaf)"], ["Fondo", "sin paisaje", "var(--muted)"]])],
    ["La arquitectura gótica: la técnica", `<p>El gótico resolvió el problema del peso con tres elementos. El <b>arco apuntado</b> u ojival, formado por dos arcos que se cruzan en punta, empuja menos hacia los lados y permite subir más. La <mark>bóveda de crucería</mark> se apoya sobre unos nervios de piedra que llevan el peso a cuatro esquinas. Y los <b>arbotantes</b>, arcos exteriores, conducen ese empuje hasta los <b>contrafuertes</b>, rematados por pináculos.</p><p>Como el muro ya no tiene que sostener la bóveda, se puede abrir con grandes ventanales cubiertos de <b>vidrieras</b> y <b>rosetones</b>. Los edificios se vuelven altísimos: la nave de la catedral de Beauvais (Francia) mide 48 metros, como un edificio de 16 pisos.</p>`,
      arcos],
    ["La catedral gótica", `<p>La gran obra del gótico es la <mark>catedral</mark>, la iglesia del obispo, construida en el centro de la ciudad. Era un símbolo del orgullo de los ciudadanos, que la pagaban con donativos, y tardaba décadas o siglos en terminarse. Su planta es de cruz latina con tres o cinco naves y una gran <b>girola</b>. La fachada tiene tres portadas, un rosetón y dos torres.</p><p>La luz que entra por las <b>vidrieras</b> de colores era un símbolo de Dios. En Francia destacan Chartres, Reims, Amiens y Notre-Dame de París. En España, las catedrales de <b>León</b>, famosa por sus vidrieras, <b>Burgos</b> y <b>Toledo</b> (siglo XIII), y en la Corona de Aragón las de Barcelona, Palma y la iglesia de <b>Santa María del Mar</b>.</p>`,
      H.filas("Grandes catedrales góticas en España", [["León", "las mejores vidrieras", "var(--pen)"], ["Burgos", "agujas caladas", "var(--sun)"], ["Toledo", "cinco naves", "var(--red)"], ["Palma", "rosetón gigante", "var(--leaf)"]]), V.gh7b],
    ["Escultura y pintura góticas", `<p>La escultura gótica se hace más <b>naturalista</b>: las figuras tienen expresiones humanas, sonríen o sufren, se mueven y se relacionan entre sí. Las estatuas de las portadas se separan del muro. La Virgen ya no está rígida, sino que juega con el Niño y lo mira con ternura, y Cristo aparece muerto en la cruz, con un solo clavo en los pies y gesto de dolor.</p><p>En pintura aparecen los grandes <b>retablos</b> de tabla detrás del altar, divididos en calles y pisos que cuentan historias, y las <b>miniaturas</b> de los libros. En Italia, <mark>Giotto</mark> (siglo XIV) dio volumen a las figuras y profundidad al espacio. En Flandes, <b>Jan van Eyck</b> usó el óleo con un detalle asombroso. En España destacaron los retablos de los <b>Serra</b> y de Jaume Huguet.</p>`,
      H.dos("Cambios en las imágenes", ["Románico", ["Cristo vivo", "y coronado", "Virgen rígida", "y frontal", "sin emociones"], "var(--sun)"], ["Gótico", ["Cristo muerto", "y sufriente", "Virgen tierna", "con el Niño", "emociones"], "var(--pen)"])],
    ["Arquitectura civil gótica", `<p>El gótico no fue solo religioso. Las ciudades ricas construyeron <b>edificios civiles</b> que mostraban su poder: <b>ayuntamientos</b>, como el de Barcelona o los de Flandes; <mark>lonjas</mark>, edificios donde los comerciantes cerraban sus tratos, como la Lonja de la Seda de <b>Valencia</b> o la de Palma; palacios, hospitales, puentes y murallas.</p><p>Estos edificios usan los mismos elementos que las catedrales (arcos apuntados, bóvedas de crucería, grandes ventanales) adaptados a otras funciones. Muestran que en la Baja Edad Media la ciudad y la burguesía se habían convertido en protagonistas del arte.</p>`,
      H.rueda("Edificios civiles góticos", "CIUDAD", [["ayuntamientos", "var(--pen)"], ["lonjas", "var(--sun)"], ["palacios", "var(--red)"], ["hospitales", "var(--leaf)"], ["puentes", "var(--muted)"], ["murallas", "var(--inf)"]], "var(--ink)")],
    ["Comparar románico y gótico", `<p>Para reconocer un edificio, fíjate primero en los <b>arcos</b>: medio punto (románico) o apuntado (gótico). Después, en el <b>techo</b>: bóveda de cañón lisa o bóveda con nervios cruzados. Mira los <b>muros</b>: macizos con ventanas pequeñas o abiertos con vidrieras. Y en el exterior, busca <b>arbotantes</b> y pináculos, que solo tiene el gótico.</p><p>Entre ambos estilos hubo una etapa de transición, el <b>protogótico</b> o cisterciense, ligado a los monjes del Císter, que usó ya el arco apuntado y la bóveda de crucería con edificios sobrios y sin decoración, como el monasterio de <b>Poblet</b> (Tarragona) o el de Santa María de Huerta (Soria).</p>`,
      tabla(["Rasgo", "Románico", "Gótico"], [["Arco", "medio punto", "apuntado u ojival"], ["Bóveda", "de cañón", "de crucería"], ["Muros", "gruesos y macizos", "finos, con vidrieras"], ["Altura", "baja, horizontal", "muy alta, vertical"], ["Luz", "penumbra", "mucha luz de colores"], ["Edificio típico", "monasterio, iglesia rural", "catedral, lonja"]])],
  ],
  ejemplos: [
    ["Observa una iglesia: arcos semicirculares, techo con forma de medio tubo, muros gruesos y ventanas estrechas. ¿De qué estilo es?", ["Arcos semicirculares: arco de medio punto.", "Techo en medio tubo: bóveda de cañón.", "Muros gruesos y ventanas pequeñas: el muro sostiene todo el peso."], "Es románica (siglos XI–XII)."],
    ["Explica por qué una catedral gótica puede tener vidrieras enormes y una románica no.", ["En el románico, la bóveda de cañón descarga su peso en todo el muro, que debe ser grueso y casi sin huecos.", "En el gótico, la bóveda de crucería lleva el peso a puntos concretos.", "Los arbotantes y contrafuertes recogen el empuje por fuera, así que el muro puede abrirse."], "Porque en el gótico el muro ya no sostiene la bóveda."],
    ["Una talla muestra a Cristo en la cruz, muerto, con la cabeza caída y los pies con un solo clavo. ¿Románica o gótica?", ["En el románico Cristo aparece vivo, sereno, con corona de rey y cuatro clavos.", "En el gótico se muestra su sufrimiento humano y se usan tres clavos."], "Es gótica."],
  ],
  errores: [
    "Confundir el contrafuerte (pegado al muro, en los dos estilos) con el arbotante (arco exterior, solo gótico).",
    "Pensar que todo arte medieval es gótico: el románico es anterior.",
    "Creer que el gótico solo hizo iglesias: también lonjas, ayuntamientos y palacios.",
    "Confundir el tímpano (semicírculo sobre la puerta) con el rosetón (ventana circular).",
    "Decir que el arco apuntado es más débil: empuja menos hacia los lados y permite subir más alto.",
  ],
  ejercicios: [
    ["¿En qué siglos se desarrollaron el románico y el gótico?", "Románico: siglos XI y XII. Gótico: siglos XIII al XV (nació en Francia hacia 1140)."],
    ["Describe la planta de una iglesia románica.", "Cruz latina, con una o tres naves, transepto y cabecera con ábsides semicirculares orientada al este."],
    ["¿Por qué las iglesias románicas tienen muros tan gruesos?", "Porque la bóveda de cañón es muy pesada y empuja hacia los lados sobre todo el muro."],
    ["¿Qué es un Pantocrátor?", "La imagen de Cristo en majestad, sentado como juez, rodeado por los símbolos de los evangelistas (Tetramorfos)."],
    ["Cita dos obras románicas españolas.", "Catedral de Santiago de Compostela (Pórtico de la Gloria), San Martín de Frómista, San Isidoro de León o Sant Climent de Taüll."],
    ["Explica qué son el arco apuntado, la bóveda de crucería y el arbotante.", "Arco apuntado: dos arcos que se cruzan en punta. Bóveda de crucería: bóveda sostenida por nervios cruzados. Arbotante: arco exterior que lleva el empuje de la bóveda al contrafuerte."],
    ["¿Qué simbolizaba la luz de las vidrieras?", "La presencia de Dios. La catedral era una imagen del cielo."],
    ["Cita tres catedrales góticas españolas.", "León, Burgos y Toledo (también Barcelona, Palma o Sevilla)."],
    ["¿En qué se diferencia la escultura gótica de la románica?", "Es más naturalista: figuras con emociones, movimiento y relación entre ellas; la Virgen es tierna y Cristo aparece sufriendo."],
    ["¿Qué era una lonja? Pon un ejemplo.", "Un edificio donde los comerciantes hacían sus negocios. Ejemplo: la Lonja de la Seda de Valencia."],
  ],
  figura: ["Románico y gótico de un vistazo", H.figCols("Comparación de los dos estilos", [["Románico", ["siglos XI–XII", "medio punto", "bóveda de cañón", "muros gruesos", "penumbra"], "var(--sun)"], ["Transición", ["Císter", "arco apuntado", "sin decoración", "Poblet", "Huerta"], "var(--muted)"], ["Gótico", ["siglos XIII–XV", "arco apuntado", "crucería", "arbotantes", "vidrieras"], "var(--pen)"]])],
  video: V.gh7v,
  quiz: [
    ["¿Qué arco es típico del románico?", ["de medio punto", "apuntado", "de herradura"], "Es media circunferencia."],
    ["La bóveda de cañón es propia del…", ["románico", "gótico", "arte islámico"], "Es un medio cilindro de piedra."],
    ["El Pórtico de la Gloria está en…", ["Santiago de Compostela", "León", "Burgos"], "Lo hizo el maestro Mateo."],
    ["Cristo como juez rodeado de los evangelistas se llama…", ["Pantocrátor", "Tetramorfos", "Maiestas Mariae"], "El Tetramorfos son los símbolos que lo rodean."],
    ["El gótico nació en…", ["Francia", "Italia", "España"], "Hacia 1140."],
    ["El arbotante sirve para…", ["llevar el empuje de la bóveda al contrafuerte", "decorar la fachada", "sostener las campanas"], "Es un arco exterior."],
    ["La catedral española famosa por sus vidrieras es…", ["León", "Santiago", "Jaca"], "Tiene unos 1800 m² de vidrieras."],
    ["La escultura gótica es más…", ["naturalista", "rígida", "geométrica"], "Muestra emociones."],
    ["Giotto fue un pintor…", ["gótico italiano", "románico catalán", "bizantino"], "Dio volumen y profundidad."],
    ["La Lonja de la Seda está en…", ["Valencia", "Burgos", "Toledo"], "Es gótico civil."],
  ],
  examen: [
    ["El espacio semicircular sobre la puerta románica es el…", ["tímpano", "rosetón", "ábside"], "Suele tener un Pantocrátor."],
    ["La girola es…", ["un pasillo alrededor del altar mayor", "una torre", "un tipo de arco"], "Para que circulen los peregrinos."],
    ["Los monjes del Císter hicieron un arte…", ["sobrio y sin decoración", "muy recargado", "de madera"], "Es la transición al gótico."],
  ],
  feynman: ["Cómo se construía una iglesia románica y por qué era oscura", "Qué inventos técnicos permitieron el gótico", "Cómo cambiaron la escultura y la pintura del románico al gótico", "Cómo distinguir un edificio románico de uno gótico"],
  mapa: ["ROMÁNICO Y GÓTICO", "var(--pen)", [["Románico", "medio punto · cañón · muros", "var(--sun)"], ["Obras", "Santiago · Frómista · Taüll", "var(--red)"], ["Gótico", "apuntado · crucería · arbotante", "var(--pen)"], ["Obras", "León · Burgos · lonjas", "var(--leaf)"]], 250],
  tarjetas: [
    ["Arco de medio punto", "Arco en forma de media circunferencia; típico del románico."],
    ["Bóveda de cañón", "Techo de piedra en forma de medio cilindro."],
    ["Pantocrátor", "Cristo en majestad, juez del mundo."],
    ["Tímpano", "Espacio semicircular sobre la puerta, decorado con relieves."],
    ["Arco apuntado", "Arco formado por dos arcos que se cruzan en punta; típico del gótico."],
    ["Bóveda de crucería", "Bóveda sostenida por nervios de piedra que se cruzan."],
    ["Arbotante", "Arco exterior que lleva el empuje de la bóveda al contrafuerte."],
    ["Vidriera", "Ventanal de vidrios de colores unidos con plomo."],
  ],
  familias: ["Visitad una iglesia o catedral cercana y decidid juntos si es románica o gótica mirando arcos, techo y ventanas.", "Buscad fotos de la catedral de León de día por dentro y fijaos en la luz de las vidrieras."],
  saberes: "Sociedades y territorios: el arte románico y el arte gótico, sus rasgos y sus obras principales en España y Europa (RD 217/2022, Geografía e Historia, primer ciclo).",
  ideas: ["Construir un arco de medio punto y uno apuntado con cartulina y comprobar cuál aguanta más altura.", "Diseñar una vidriera con papel celofán.", "Ficha de análisis de una obra: tipo, estilo, elementos, función."],
  fuentes: [["Museu Nacional d'Art de Catalunya: colección de románico", "https://www.museunacional.cat/es/coleccion/romanico"], ["Catedral de León: vidrieras", "https://www.catedraldeleon.org/"]],
});
