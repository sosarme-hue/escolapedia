// Tecnología y Digitalización 1º ESO: herramientas y seguridad en el taller. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Herramientas y seguridad en el taller",
  minutos: 50,
  objetivos: ["Conocer las normas de comportamiento y seguridad del aula-taller", "Identificar las herramientas básicas y la operación para la que sirve cada una", "Usar correctamente los equipos de protección individual", "Interpretar las señales de seguridad y saber actuar ante un accidente"],
  claves: ["aula-taller", "herramienta", "sierra de marquetería", "serrucho", "lima", "escofina", "tornillo de banco", "taladro", "alicates", "destornillador", "EPI", "gafas de protección", "señales de seguridad", "botiquín", "orden y limpieza"],
  pregunta: {
    texto: "En un taller bien organizado cada herramienta tiene un sitio dibujado en un panel de la pared. ¿Para qué sirve eso, además de que quede bonito?",
    respuesta: "Sirve para la <b>seguridad</b> y para el <b>trabajo en equipo</b>. Si cada herramienta vuelve a su silueta, nadie tropieza con ella ni se corta al buscarla entre trastos, y de un vistazo se ve si falta alguna (y quién debería devolverla). Además se ahorra tiempo: no hay que buscar. El <b>orden</b> es la primera norma de seguridad de cualquier taller.",
  },
  bloques: [
    {
      html: `<h3>El aula-taller</h3><p>El <mark>aula-taller</mark> de Tecnología es el lugar donde se construyen los proyectos. Suele tener <b>mesas de trabajo</b> robustas con <b>tornillos de banco</b>, un <b>panel o armario de herramientas</b>, estanterías para materiales, zona de ordenadores, una zona de máquinas (taladro de columna, sierra eléctrica de calar…), un <b>botiquín</b>, un <b>extintor</b> y una papelera o contenedores para separar residuos. En el taller se trabaja en <b>equipo</b>: cada grupo tiene unas tareas y unas responsabilidades, por ejemplo un encargado de material, uno de limpieza o un coordinador. Como en el taller se usan herramientas que cortan, pinchan o se calientan, el riesgo de accidente es mayor que en un aula normal. Por eso hay unas <mark>normas</mark> que todos deben conocer y cumplir desde el primer día. La mayoría de accidentes en un taller escolar son pequeños cortes, golpes, astillas o virutas en los ojos, y casi todos se pueden evitar con orden, atención y el uso correcto de las herramientas.</p>`,
    },
    {
      html: `<h3>Normas básicas de seguridad</h3><p>Estas son las normas más importantes del taller. 1) <b>Escuchar las instrucciones</b> del profesor y no usar ninguna herramienta o máquina sin saber manejarla ni sin permiso. 2) Mantener el puesto de trabajo <mark>ordenado y limpio</mark>: solo las herramientas necesarias sobre la mesa, y devolverlas a su sitio al terminar. 3) <b>No correr ni jugar</b> en el taller, y no distraer a quien está trabajando. 4) Usar los <mark>equipos de protección</mark> cuando sea necesario: gafas, guantes, mascarilla. 5) Llevar el <b>pelo recogido</b>, sin pulseras, colgantes ni ropa suelta que pueda engancharse. 6) <b>Sujetar bien las piezas</b> con el tornillo de banco o un sargento antes de cortar, limar o taladrar: nunca con la mano. 7) Usar cada herramienta <b>solo para lo que sirve</b> (un destornillador no es un cincel ni una palanca). 8) Revisar que las herramientas estén en <b>buen estado</b> y avisar si alguna está rota. 9) Desenchufar las máquinas al terminar y no tocar enchufes con las manos mojadas. 10) <b>Avisar inmediatamente</b> al profesor de cualquier accidente, por pequeño que sea.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco normas clave: orden, protección, sujetar la pieza, cada herramienta para su uso y avisar de accidentes">${BG}
        ${[["orden y limpieza", COL.azul], ["usa los EPI", COL.verde], ["sujeta la pieza", COL.naranja], ["cada útil, su uso", COL.morado], ["avisa siempre", COL.rojo]].map(([s, c], i) => `<circle cx="30" cy="${28 + i * 30}" r="10" fill="${c}"/>${t(30, 32 + i * 30, String(i + 1), { size: 11, color: "#fff" })}${et(48, 32 + i * 30, s, 190, { anchor: "start", size: 12 })}`).join("")}</svg>`,
    },
    {
      html: `<h3>Equipos de protección individual</h3><p>Los <mark>equipos de protección individual (EPI)</mark> son prendas y accesorios que protegen el cuerpo de los riesgos de cada tarea. Las <b>gafas de protección</b> evitan que entren en los ojos virutas, astillas, polvo o gotas de pegamento; se usan al serrar, limar, taladrar o lijar. Los <b>guantes</b> protegen de cortes, astillas y productos químicos, pero <b>nunca se usan con máquinas que giran</b>, como el taladro, porque se pueden enganchar y arrastrar la mano. La <b>mascarilla</b> evita respirar polvo (al lijar) o vapores (pinturas, barnices, colas). La <b>bata o el mono</b> protege la ropa y evita que haya partes sueltas. En talleres profesionales también se usan <b>protectores auditivos</b> contra el ruido, <b>calzado de seguridad</b> con puntera reforzada y <b>casco</b>. Llevar los EPI no es exagerar: un ojo dañado por una viruta no se puede cambiar por otro.</p>`,
      video: { id: "jyeIbAPw-Sk", titulo: "Señalización y normas de seguridad", canal: "Tecnología con CLASE", vistas: 46505 },
    },
    {
      html: `<h3>Herramientas para medir y marcar</h3><p>Antes de cortar hay que <b>medir y marcar</b> con precisión: «mide dos veces y corta una». Para <mark>medir</mark> se usan la <b>regla graduada</b> (piezas pequeñas), el <b>flexómetro</b> o metro de cinta (longitudes grandes), y el <b>calibre o pie de rey</b>, que mide con mucha precisión espesores, diámetros y profundidades (hasta décimas de milímetro). La <b>escuadra</b> sirve para trazar y comprobar ángulos rectos, y el <b>transportador</b> para otros ángulos. Para <mark>marcar</mark> se usan el <b>lápiz</b> (en madera), la <b>punta de trazar</b> (raya los metales y los plásticos), el <b>gramil</b> (traza líneas paralelas a un borde) y el <b>granete</b>, una punta de acero que se golpea con un martillo para hacer una pequeña marca donde luego se va a taladrar, para que la broca no resbale.</p>`,
    },
    {
      html: `<h3>Herramientas para cortar y desbastar</h3><p>Para <mark>cortar</mark> madera se usan el <b>serrucho</b> (cortes rectos en tablas grandes), la <b>sierra de costilla</b> (cortes rectos y precisos, con un refuerzo en el lomo) y la <b>sierra de marquetería</b> (con una hoja muy fina, permite cortes curvos en tableros finos y contrachapado). La <b>sierra de arco</b> corta metales y plásticos. Las <b>tijeras de chapa</b> cortan láminas metálicas finas, y el <b>cúter</b> corta cartón, papel o plásticos finos (siempre cortando hacia fuera del cuerpo y con la cuchilla recogida al guardarlo). Para <mark>desbastar</mark>, es decir, quitar material poco a poco y dejar las piezas a medida, se usan las <b>escofinas</b> (dientes gruesos, para madera), las <b>limas</b> (para metal y acabado fino; las hay planas, redondas, de media caña, triangulares…), el <b>cepillo de carpintero</b> y el <b>papel de lija</b>, que se usa al final para dejar la superficie suave. Al serrar, la pieza debe estar bien sujeta y el corte se empieza suave, guiando la hoja con el pulgar a cierta distancia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dibujo de una sierra de marquetería con su arco y su hoja fina, y de una lima">${BG}
        <path d="M30 40 H 150 V 120 H 30" fill="none" stroke="var(--pen)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30 40 V 120" stroke="#94a3b8" stroke-width="1.5"/><rect x="24" y="122" width="12" height="40" rx="5" fill="#a16207"/>
        ${t(90, 30, "arco", { size: 10.5 })}${t(46, 86, "hoja fina", { size: 10.5, anchor: "start" })}${t(44, 148, "mango", { size: 10.5, anchor: "start" })}
        <rect x="186" y="36" width="12" height="96" fill="#94a3b8" stroke="var(--ink)" stroke-width="1"/>${Array.from({ length: 12 }, (_, i) => `<path d="M186 ${40 + i * 7.6} l 12 4" stroke="var(--ink)" stroke-width=".6"/>`).join("")}<rect x="187" y="132" width="10" height="30" rx="4" fill="#a16207"/>
        ${t(192, 26, "lima", { size: 10.5 })}</svg>`,
    },
    {
      html: `<h3>Herramientas para sujetar, golpear y unir</h3><p>Para <mark>sujetar</mark> las piezas mientras se trabaja se usan el <b>tornillo de banco</b>, fijado a la mesa, con dos mordazas que se cierran girando una palanca, y los <b>sargentos</b> o gatos, que aprietan piezas entre sí (por ejemplo, mientras se seca la cola). Los <b>alicates</b> sujetan piezas pequeñas, doblan alambres y algunos también cortan cables (alicates de corte). Para <mark>golpear</mark> se usan el <b>martillo</b> (clavar clavos, golpear el granete) y el <b>mazo</b> de madera o goma (golpear sin dejar marca). Para <mark>unir y desunir</mark> están el <b>destornillador</b> (de punta plana o de estrella, que debe coincidir con la cabeza del tornillo), las <b>llaves fijas</b> e inglesas (tuercas), la <b>pistola de cola caliente</b> y el <b>soldador</b> de estaño para electrónica, que alcanza más de 300 °C y debe dejarse siempre en su soporte. Para <mark>taladrar</mark> se usa el <b>taladro</b> eléctrico, de mano o de columna, con brocas del tipo y diámetro adecuados al material (madera, metal o pared).</p>${tabla(["Operación", "Herramientas", "Precaución"], [["Medir y marcar", "regla, flexómetro, escuadra, granete", "medir dos veces"], ["Cortar", "serrucho, sierra de marquetería, sierra de arco, cúter", "pieza sujeta, cortar hacia fuera"], ["Desbastar", "escofina, lima, lija", "lima siempre con mango"], ["Sujetar", "tornillo de banco, sargento, alicates", "no sujetar con la mano"], ["Taladrar", "taladro y brocas", "gafas, sin guantes, pelo recogido"], ["Unir", "destornillador, martillo, pistola de cola, soldador", "soldador en su soporte"]])}`,
      video: { id: "erJm0UGzhp8", titulo: "Las herramientas más comunes en un taller de tecnología", canal: "Tecnología con CLASE", vistas: 193843 },
    },
    {
      html: `<h3>Las señales de seguridad</h3><p>En los talleres, fábricas y edificios hay <mark>señales de seguridad</mark> que avisan de riesgos y de cómo actuar. Su forma y color indican el tipo de mensaje. Las señales de <b>prohibición</b> son <b>redondas, con borde y banda rojos</b> sobre fondo blanco: «prohibido fumar», «no tocar». Las de <b>obligación</b> son <b>redondas y azules</b> con el dibujo en blanco: «uso obligatorio de gafas», «de guantes». Las de <b>advertencia</b> o peligro son <b>triangulares y amarillas</b> con borde negro: «riesgo eléctrico», «superficie caliente», «materiales inflamables». Las de <b>salvamento o socorro</b> son <b>rectangulares o cuadradas y verdes</b>: «salida de emergencia», «botiquín», «lavaojos». Y las de <b>lucha contra incendios</b> son <b>rectangulares y rojas</b>: «extintor», «manguera». Conocerlas permite entender un peligro de un vistazo, aunque no se sepa el idioma del lugar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Formas y colores de las señales: prohibición redonda roja, obligación redonda azul, advertencia triangular amarilla, salvamento verde y contra incendios roja">${BG}
        <circle cx="34" cy="62" r="20" fill="#fff" stroke="#dc2626" stroke-width="5"/><path d="M20 48 L48 76" stroke="#dc2626" stroke-width="5"/>
        <circle cx="84" cy="62" r="22" fill="#2563eb"/><circle cx="84" cy="62" r="6" fill="#fff"/>
        <path d="M134 40 L 158 82 H 110 Z" fill="#facc15" stroke="#111" stroke-width="3"/>${t(134, 76, "!", { size: 18, color: "#111" })}
        <rect x="170" y="44" width="34" height="36" fill="#16a34a"/>${t(187, 68, "+", { size: 22, color: "#fff" })}
        <rect x="214" y="44" width="34" height="36" fill="#dc2626"/>${t(231, 68, "🔥", { size: 15 })}
        ${et(34, 108, "prohibición", 48, { size: 10 })}${et(84, 108, "obligación", 48, { size: 10 })}${et(134, 108, "advertencia", 48, { size: 10 })}${et(187, 108, "socorro", 40, { size: 10 })}${et(231, 108, "incendios", 40, { size: 10 })}
        ${t(130, 148, "forma + color = tipo de mensaje", { size: 11, color: COL.azul })}</svg>`,
    },
    {
      html: `<h3>¿Qué hacer si hay un accidente?</h3><p>Aunque se cumplan las normas, puede ocurrir un accidente. Lo primero es <b>mantener la calma</b> y <mark>avisar al profesor</mark> enseguida. Si hay una máquina implicada, se <b>desconecta</b> (las máquinas tienen un botón rojo de <b>parada de emergencia</b>). En el <mark>botiquín</mark> hay material de primeros auxilios: gasas, vendas, tiritas, antiséptico, guantes desechables y tijeras. Ante un <b>pequeño corte</b>, se lava la herida con agua y jabón o suero, se desinfecta y se tapa. Si sangra mucho, se aprieta con una gasa limpia y se avisa a un adulto. Ante una <b>quemadura</b> leve (por ejemplo, con la pistola de cola o el soldador), se pone la zona bajo agua fría durante varios minutos; no se aplican pomadas caseras ni se revientan ampollas. Si entra algo en un <b>ojo</b>, no hay que frotarlo: se lava con abundante agua o suero. En caso de duda o de algo grave, se llama al <b>112</b>. Y después del accidente conviene pensar por qué ocurrió, para que no se repita.</p>`,
    },
  ],
  figura: {
    titulo: "El taller en ocho ideas",
    svg: rejilla([
      ["Orden", "cada útil a su sitio", COL.azul],
      ["EPI", "gafas, guantes, mascarilla", COL.verde],
      ["Medir", "regla, escuadra, calibre", COL.gris],
      ["Cortar", "serrucho, sierras, tijeras", COL.rojo],
      ["Desbastar", "escofina, lima, lija", COL.marron],
      ["Sujetar", "tornillo de banco, sargento", COL.naranja],
      ["Señales", "forma y color dicen qué", COL.sol],
      ["Accidente", "calma, avisa, botiquín", COL.morado],
    ], 4, 86, "Resumen: orden, protección, herramientas para medir, cortar, desbastar y sujetar, señales y accidentes"),
  },
  video: { id: "ED3ge9n-WPI", titulo: "Cómo usar una segueta. Cómo montar una sierra de marquetería", canal: "MYBA, manualidadesybellasartes es", vistas: 208988, megusta: 0, busqueda: "herramientas taller tecnologia seguridad" },
  ejemplos: [
    { enunciado: "Hay que hacer en una tabla de contrachapado de 4 mm la silueta curva de un pez. Elige las herramientas y el orden de trabajo.",
      pasos: ["Marcar: dibujar la silueta con lápiz (plantilla).", "Sujetar: tablero con un sargento a la mesa o con el tornillo de banco.", "Cortar: sierra de marquetería (permite curvas).", "Acabar: lima o escofina y papel de lija en los bordes.", "Protección: gafas al serrar y al lijar."],
      resultado: "Lápiz → sargento → sierra de marquetería → lima y lija, con gafas." },
    { enunciado: "Una compañera va a usar el taladro de columna con guantes y una pulsera. ¿Qué le dirías?",
      pasos: ["Con máquinas que giran no se usan guantes: se enganchan.", "La pulsera también puede engancharse.", "Debe llevar gafas, pelo recogido y la pieza bien sujeta."],
      resultado: "Fuera guantes y pulsera; gafas puestas y pieza sujeta." },
    { enunciado: "Ves una señal triangular amarilla con un rayo. ¿Qué significa y qué tipo de señal es?",
      pasos: ["Triangular y amarilla: advertencia de un peligro.", "El dibujo del rayo: electricidad."],
      resultado: "Advertencia: riesgo eléctrico." },
  ],
  errores: [
    "Sujetar la pieza con la mano mientras se sierra o se taladra.",
    "Usar guantes con el taladro u otras máquinas que giran.",
    "Usar una herramienta para otra cosa: el destornillador como palanca o cincel.",
    "Usar una lima sin mango: la espiga puede clavarse en la mano.",
    "No avisar de un pequeño corte o quemadura por vergüenza.",
    "Confundir las señales de obligación (azules) con las de prohibición (rojas).",
  ],
  ejercicios: [
    { q: "Escribe cinco normas de seguridad del aula-taller.", sol: "Seguir instrucciones, orden y limpieza, no correr, usar EPI, sujetar las piezas, avisar de cualquier accidente." },
    { q: "¿Qué son los EPI? Pon tres ejemplos.", sol: "Equipos de protección individual: gafas, guantes y mascarilla." },
    { q: "¿Para qué sirve el granete?", sol: "Para marcar con un golpe el punto donde se va a taladrar y que la broca no resbale." },
    { q: "¿Qué sierra usarías para un corte curvo en contrachapado fino?", sol: "La sierra de marquetería." },
    { q: "¿Qué sierra se usa para cortar un tubo de metal?", sol: "La sierra de arco." },
    { q: "Diferencia entre escofina y lima.", sol: "La escofina tiene dientes gruesos y se usa en madera; la lima es más fina y se usa en metal y acabados." },
    { q: "¿Para qué sirve el tornillo de banco?", sol: "Para sujetar firmemente la pieza mientras se trabaja." },
    { q: "Describe las señales de obligación y de advertencia.", sol: "Obligación: redondas, azules, dibujo blanco. Advertencia: triangulares, amarillas, borde negro." },
    { q: "¿Qué harías ante una quemadura leve con la pistola de cola?", sol: "Avisar y poner la zona bajo agua fría varios minutos, sin pomadas caseras." },
    { q: "¿Por qué el soldador debe dejarse en su soporte?", sol: "Porque está a más de 300 °C y puede quemar a alguien o algún material." },
  ],
  quiz: [
    { q: "Para cortes curvos en tablero fino se usa la…", o: ["sierra de marquetería", "sierra de arco", "serrucho"], a: 0, e: "Sierra de marquetería." },
    { q: "Las señales de prohibición son…", o: ["redondas y rojas", "redondas y azules", "triangulares y amarillas"], a: 0, e: "Redondas, borde rojo." },
    { q: "Las señales de salvamento son…", o: ["verdes", "rojas", "azules"], a: 0, e: "Verdes." },
    { q: "Con el taladro NO se deben usar…", o: ["guantes", "gafas", "el pelo recogido"], a: 0, e: "Guantes: se enganchan." },
    { q: "Para medir el diámetro de una varilla con precisión se usa…", o: ["el calibre", "el flexómetro", "la escuadra"], a: 0, e: "Calibre o pie de rey." },
    { q: "Para golpear sin dejar marca se usa…", o: ["el mazo", "el martillo", "el granete"], a: 0, e: "Mazo." },
    { q: "Si entra una viruta en un ojo…", o: ["se lava con agua sin frotar", "se frota fuerte", "se espera"], a: 0, e: "Lavar con agua o suero." },
    { q: "La herramienta que traza en metal es…", o: ["la punta de trazar", "el lápiz", "la lija"], a: 0, e: "Punta de trazar." },
    { q: "El teléfono de emergencias es el…", o: ["112", "010", "123"], a: 0, e: "112." },
    { q: "La primera norma de seguridad del taller es…", o: ["el orden", "la rapidez", "trabajar solo"], a: 0, e: "Orden y limpieza." },
  ],
  examen: [
    { q: "Los sargentos sirven para…", o: ["apretar piezas entre sí", "cortar metal", "medir ángulos"], a: 0, e: "Sujetar y apretar." },
    { q: "La señal triangular amarilla indica…", o: ["advertencia", "obligación", "salida"], a: 0, e: "Peligro." },
    { q: "Las ampollas de una quemadura…", o: ["no se revientan", "se revientan", "se cubren con pasta de dientes"], a: 0, e: "No se revientan." },
  ],
  feynman: ["Por qué el orden es una norma de seguridad", "Qué herramientas usarías para hacer una pieza de madera desde el marcado hasta el acabado", "Cómo se reconoce el tipo de señal por su forma y su color"],
  mapa: mapa("TALLER", "var(--eso)", [
    ["Normas", "orden · atención · EPI", COL.azul],
    ["Herramientas", "medir · cortar · desbastar · unir", COL.naranja],
    ["Señales", "prohibición · obligación · peligro", COL.sol],
    ["Accidentes", "avisar · botiquín · 112", COL.rojo],
  ], 300),
  tarjetas: [
    ["EPI", "Equipo de protección individual: gafas, guantes, mascarilla."],
    ["Granete", "Punta que marca el punto donde se taladrará."],
    ["Sierra de marquetería", "Sierra de hoja fina para cortes curvos."],
    ["Sierra de arco", "Sierra para cortar metal y plástico."],
    ["Escofina", "Herramienta de dientes gruesos para desbastar madera."],
    ["Tornillo de banco", "Útil fijo a la mesa que sujeta la pieza."],
    ["Señal azul redonda", "Obligación."],
    ["Señal verde", "Salvamento o socorro: salidas, botiquín."],
  ],
  familias: ["Revisad juntos la caja de herramientas de casa: ¿qué tiene y para qué sirve cada una?", "Buscad señales de seguridad en un supermercado o en el portal y clasificadlas.", "Comprobad que en casa haya un botiquín y qué contiene."],
  profesores: {
    saberes: "Aula-taller: normas de seguridad e higiene, equipos de protección individual, herramientas de medida, marcado, corte, desbaste, sujeción, unión y taladrado, señalización de seguridad y primeros auxilios básicos (RD 217/2022, Tecnología y Digitalización, bloque Proceso de resolución de problemas).",
    ideas: ["Panel de siluetas para el armario de herramientas hecho por el grupo.", "Gymkana de identificación de herramientas y señales.", "Carné del taller: prueba práctica antes de usar el taladro."],
  },
  fuentes: [RD, wiki("Señal de seguridad", "Señal_de_seguridad"), wiki("Herramienta", "Herramienta"), { t: "INSST: señalización de seguridad", url: "https://www.insst.es/" }],
  revisado: REV,
};

// Ampliación a nivel libro (README, «Tema nivel libro»), pensada para alumnos de 12 años:
// lectura, apartados nuevos, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso1L5").libro(module.exports, {
  lectura: ["Cinco minutos de prisa", `<p>Faltaban cinco minutos para que sonara el timbre y el grupo de Álex aún no había terminado de cortar las piezas de su lámpara. «Venga, que no llegamos», dijo Álex, y cogió la sierra de marquetería sin ponerse las gafas. Sujetó la tabla con una mano y empezó a serrar deprisa.</p><p>La hoja, muy fina, se partió de golpe. Un trocito salió disparado y rozó la mejilla de Álex, a dos centímetros del ojo. No pasó nada grave: solo un pequeño rasguño. Pero el susto fue enorme.</p><p>El profesor paró la clase. No riñó a nadie: simplemente preguntó qué había fallado. Entre todos lo descubrieron: no llevaba gafas, la pieza no estaba sujeta en el tornillo de banco, había serrado demasiado rápido y la hoja estaba mal tensada. «Cuatro errores en cinco minutos», dijo el profesor. «Casi todos los accidentes ocurren por prisa o por saltarse una norma "solo un momento"».</p><p>Ese día, el grupo de Álex no terminó la lámpara. Pero al día siguiente, con las gafas puestas, la pieza bien sujeta y la sierra a buen ritmo, la terminaron en diez minutos. En este tema conocerás el aula-taller, las herramientas y para qué sirve cada una, los equipos de protección, las señales de seguridad y qué hacer si ocurre un accidente.</p>`],
  mas: [
    ["<h3>Herramientas para medir y marcar</h3>", `<p>Para marcar sobre madera basta un lápiz; sobre metal o plástico se usa la <b>punta de trazar</b>, que raya la superficie. Antes de taladrar un metal, se da un pequeño golpe con el <b>granete</b> y el martillo en el punto exacto: la marca hace de guía para que la broca no resbale.</p>`],
    ["<h3>Las señales de seguridad</h3>", `<p>Las señales de <b>lucha contra incendios</b> son rojas y cuadradas o rectangulares, e indican dónde están los extintores, las mangueras o los pulsadores de alarma. Conviene fijarse en ellas el primer día que entramos en un edificio nuevo: en una emergencia no habrá tiempo de buscarlas.</p>`],
  ],
  svgs: [
    ["<h3>El aula-taller</h3>", "El aula-taller", [["mesas", "con tornillos de banco"], ["herramientas", "panel o armario"], ["máquinas", "taladro de columna, sierra"], ["seguridad", "botiquín y extintor"]], "un espacio para construir"],
    ["<h3>Equipos de protección individual</h3>", "EPI", [["gafas", "virutas, polvo, astillas"], ["guantes", "nunca con máquinas que giran"], ["bata", "protege la ropa"], ["mascarilla", "polvo al lijar"]], "equipos de protección"],
    ["<h3>Herramientas para medir y marcar</h3>", "Medir y marcar", [["regla y flexómetro", "longitudes"], ["calibre", "décimas de milímetro"], ["escuadra", "ángulos rectos"], ["granete", "marca para taladrar"]], "mide dos veces, corta una"],
    ["<h3>Herramientas para sujetar, golpear y unir</h3>", "Sujetar, golpear y unir", [["sujetar", "tornillo de banco, sargento"], ["golpear", "martillo, mazo"], ["unir", "destornillador, llaves"], ["pegar y soldar", "pistola de cola, soldador"]], "herramientas de montaje"],
    ["<h3>¿Qué hacer si hay un accidente?</h3>", "Ante un accidente", [["calma", "avisar al profesor"], ["máquina", "parada de emergencia"], ["corte o quemadura", "agua y botiquín"], ["grave", "llamar al 112"]], "primeros auxilios"],
  ],
  bloques: [
    { tras: "<h3>Normas básicas de seguridad</h3>", html: `<h3>Orden, limpieza y residuos</h3><p>Un taller desordenado es un taller peligroso. Una herramienta olvidada encima de la mesa se puede caer al suelo y herir a alguien; un trozo de madera en el suelo puede hacer tropezar; el serrín acumulado puede resbalar o arder. Por eso, al acabar cada sesión, se dedican unos minutos a recoger:</p><ul><li>Devolver cada herramienta a su lugar del panel (muchos paneles tienen la silueta dibujada para saber dónde va cada una y ver enseguida si falta alguna).</li><li>Barrer las virutas y el serrín y limpiar la mesa.</li><li>Guardar los materiales sobrantes que se puedan reaprovechar.</li><li>Separar los <b>residuos</b> en los contenedores adecuados: madera, papel y cartón, plásticos, metales, y los residuos especiales (pilas, restos de pintura o de barniz, aerosoles) en su contenedor específico para llevarlos al punto limpio.</li></ul><p>En el taller se reparten las tareas de limpieza por turnos. Cuidar el espacio común también es una forma de cuidar a los compañeros.</p>`, svg: ["Orden y limpieza", [["herramientas", "cada una en su silueta"], ["suelo", "sin virutas ni restos"], ["sobrantes", "guardarlos para reutilizar"], ["residuos", "separarlos por tipo"]], "un taller seguro"] },
    { tras: "<h3>Herramientas para sujetar, golpear y unir</h3>", html: `<h3>Taladrar paso a paso</h3><p>Taladrar es hacer agujeros redondos con una <b>broca</b> que gira. Se puede hacer con un berbiquí o un taladro manual, pero lo más habitual es el <b>taladro eléctrico</b> (portátil) o el <b>taladro de columna</b>, fijado a la mesa, más preciso y seguro. Hay brocas diferentes para <b>madera</b> (con una punta central que centra el agujero), para <b>metal</b> (de acero rápido, con punta cónica) y para <b>pared</b> (con punta de metal duro). Su diámetro está grabado en la base, en milímetros.</p><p>Los pasos son:</p><ol><li>Marcar el centro del agujero (con el granete, si es metal).</li><li>Sujetar la pieza con el tornillo de banco o un sargento, nunca con la mano.</li><li>Elegir la broca adecuada y fijarla bien en el portabrocas, con el aparato desenchufado.</li><li>Ponerse las gafas, recogerse el pelo y quitarse pulseras; <b>sin guantes</b>.</li><li>Taladrar perpendicular a la pieza, sin apretar demasiado, y apoyando debajo un trozo de madera para no agujerear la mesa.</li></ol>`, svg: ["Taladrar", [["brocas", "madera, metal, pared"], ["sujetar", "nunca con la mano"], ["protección", "gafas, pelo recogido"], ["sin guantes", "la broca los atrapa"]], "agujeros con seguridad"] },
    { tras: "<h3>Herramientas para sujetar, golpear y unir</h3>", html: `<h3>Las herramientas eléctricas</h3><p>Algunas herramientas funcionan con electricidad, con un motor o con una resistencia que se calienta. Hacen el trabajo más rápido, pero también son más peligrosas. Las más habituales en el taller escolar son:</p><ul><li>La <b>sierra de calar</b> eléctrica: corta tableros con una hoja que sube y baja. La usa normalmente el profesor o el alumnado mayor, con supervisión.</li><li>La <b>lijadora</b>: lija superficies grandes rápidamente; hay que usar mascarilla por el polvo.</li><li>La <b>pistola de cola caliente</b>: funde barras de pegamento a unos 150-200 °C. La boquilla y la cola queman: no se tocan.</li><li>El <b>soldador de estaño</b>: supera los 300 °C; siempre en su soporte.</li><li>El <b>cortador de poliestireno</b> (corcho blanco): un hilo caliente que corta la espuma.</li></ul><p>Normas comunes: revisar que el cable y el enchufe estén en buen estado, no tirar del cable para desenchufar, no tocarlas con las manos mojadas, desconectarlas antes de cambiar una pieza y desenchufarlas al terminar.</p>`, svg: ["Herramientas eléctricas", [["sierra de calar", "con supervisión"], ["lijadora", "con mascarilla"], ["pistola de cola", "150-200 °C"], ["soldador", "más de 300 °C"]], "más rápidas, más peligrosas"] },
    { html: `<h3>Pensar antes de actuar: evaluar los riesgos</h3><p>Los profesionales, antes de empezar un trabajo, hacen una <b>evaluación de riesgos</b>: piensan qué puede salir mal y cómo evitarlo. Tú puedes hacer lo mismo con tres preguntas antes de cada tarea:</p><ol><li><b>¿Qué peligro hay?</b> Un corte, una quemadura, un golpe, una astilla en el ojo, una descarga eléctrica, respirar polvo…</li><li><b>¿Qué puede pasar y cómo de grave sería?</b> No es lo mismo un pequeño arañazo que perder un dedo.</li><li><b>¿Qué medida lo evita?</b> Usar un EPI, sujetar la pieza, elegir la herramienta adecuada, trabajar más despacio, pedir ayuda.</li></ol><p>Por ejemplo, para cortar una chapa: peligro, cortes con los bordes; medidas, guantes de protección y limar los bordes después de cortar. Para usar la pistola de cola: peligro, quemaduras; medidas, apoyarla en su base y no tocar la boquilla ni la cola fundida.</p><p>Esta manera de pensar no solo sirve en el taller: también en la cocina, haciendo deporte o en bicicleta. La seguridad no es tener miedo, sino ser previsor.</p>`, svg: ["Evaluar riesgos", [["peligro", "¿qué puede pasar?"], ["gravedad", "¿cómo de grave?"], ["medida", "EPI, sujetar, despacio"], ["previsor", "no miedoso"]], "tres preguntas antes de empezar"] },
  ],
  grupos: [4, 4, 4],
  ejemplos: [
    ["Evalúa los riesgos de lijar una tabla de DM con la lijadora eléctrica.", ["Peligro: respirar el polvo fino del DM y que entre en los ojos.", "Peligro: que la lijadora atrape ropa o pelo.", "Medidas: mascarilla, gafas, pelo recogido, pieza sujeta, desenchufar al terminar."], "Mascarilla y gafas, pelo recogido, pieza sujeta y lijadora desenchufada al acabar."],
    ["Explica paso a paso cómo harías un agujero de 6 mm en una chapa de aluminio.", ["Marcar el punto con la punta de trazar y el granete.", "Sujetar la chapa en el tornillo de banco con una madera debajo.", "Poner una broca de metal de 6 mm con el taladro desenchufado.", "Gafas, pelo recogido, sin guantes; taladrar perpendicular y sin forzar.", "Limar las rebabas del agujero."], "Marcar con granete → sujetar → broca de metal de 6 mm → protegerse → taladrar → limar las rebabas."],
    ["Clasifica estos residuos del taller: virutas de madera, un bote vacío de barniz, recortes de chapa, papel de lija usado.", ["Virutas de madera: contenedor de madera o resto orgánico, según el centro.", "Bote de barniz: residuo especial, al punto limpio.", "Recortes de chapa: metales.", "Papel de lija: resto (no es reciclable como papel)."], "Madera → contenedor de madera; barniz → punto limpio; chapa → metales; lija → resto."],
  ],
  niveles: "bbbbbbmmmm",
  ejercicios: [
    ["b", "¿Por qué es importante recoger el taller al final de la sesión?", "Porque las herramientas y los restos fuera de su sitio pueden provocar <b>caídas, cortes o incendios</b>, y así sabemos si falta alguna herramienta."],
    ["b", "Nombra tres tipos de broca según el material.", "Para <b>madera</b>, para <b>metal</b> y para <b>pared</b>."],
    ["b", "¿Dónde va un bote vacío de barniz?", "Es un <b>residuo especial</b>: se lleva al punto limpio."],
    ["b", "¿Qué temperatura alcanza el soldador de estaño?", "Más de <b>300 °C</b>."],
    ["b", "¿Por qué no se usan guantes con el taladro?", "Porque la broca o el portabrocas pueden <b>atrapar el guante</b> y arrastrar la mano."],
    ["b", "Escribe las tres preguntas para evaluar un riesgo.", "¿Qué <b>peligro</b> hay? ¿Qué puede pasar y cómo de <b>grave</b> sería? ¿Qué <b>medida</b> lo evita?"],
    ["m", "¿Para qué sirve el granete antes de taladrar metal?", "Hace una pequeña marca que <b>guía la broca</b> para que no resbale."],
    ["m", "¿Qué normas hay que seguir con cualquier herramienta eléctrica?", "Revisar cable y enchufe, no tirar del cable, no usarla con las manos mojadas, desconectarla para cambiar piezas y desenchufarla al terminar."],
    ["m", "¿Por qué se pone una madera debajo de la pieza al taladrar?", "Para no agujerear la mesa y para que el agujero salga limpio por detrás, sin astillas."],
    ["m", "Evalúa los riesgos de usar el cúter para cortar cartón.", "Peligro: cortes en la mano. Medidas: cortar sobre una base, alejar la mano de la línea de corte, cortar hacia fuera y recoger la cuchilla al terminar."],
    ["m", "¿Qué ventaja tienen los paneles de herramientas con siluetas dibujadas?", "Se ve enseguida dónde va cada herramienta y si <b>falta alguna</b>."],
    ["m", "¿Qué EPI usarías al lijar con la lijadora eléctrica?", "<b>Gafas</b> y <b>mascarilla</b> (y pelo recogido)."],
    ["a", "Analiza la lectura inicial: escribe los cuatro errores de Álex y la norma que incumplió cada uno.", "1) Sin gafas: usar EPI. 2) Pieza sin sujetar: usar el tornillo de banco. 3) Serrar deprisa: trabajar con calma. 4) Hoja mal tensada: revisar la herramienta antes de usarla."],
    ["a", "Diseña un cartel de seguridad para el taladro de columna con tres normas y las señales adecuadas.", "Respuesta abierta. Debe incluir una señal azul de obligación (gafas), una roja de prohibición (guantes) y una norma de pelo recogido o pieza sujeta, con dibujos claros."],
    ["a", "Elabora una ficha de evaluación de riesgos para una tarea de tu proyecto.", "Respuesta abierta. Debe tener la tarea, los peligros, la gravedad y las medidas preventivas (EPI, sujeción, herramienta adecuada, supervisión)."],
    ["a", "Propón un sistema de turnos de limpieza para tu clase de Tecnología.", "Respuesta abierta. Ejemplo: cada semana un equipo diferente se encarga de barrer, otro del panel de herramientas y otro de los residuos, con una lista de comprobación."],
    ["a", "Compara la sierra de marquetería manual y la sierra de calar eléctrica: ventajas, inconvenientes y riesgos.", "Manual: barata, silenciosa, buena para curvas finas, pero lenta; riesgo de rotura de la hoja. Eléctrica: rápida, corta tableros más gruesos, pero ruidosa y más peligrosa; requiere supervisión."],
    ["a", "Explica por qué la seguridad «no es tener miedo, sino ser previsor», con un ejemplo fuera del taller.", "Respuesta abierta. Ejemplo: en bicicleta llevar casco y luces no es tener miedo, sino prever que podemos caer o no ser vistos de noche."],
    ["a", "Investiga qué significan los pictogramas de peligro de los productos químicos (inflamable, tóxico, corrosivo) y busca alguno en un bote del taller.", "Respuesta abierta. Son rombos con borde rojo y un símbolo negro: llama (inflamable), calavera (tóxico), mano y superficie corroídas (corrosivo), signo de exclamación (irritante)."],
    ["a", "Redacta el protocolo que seguirías si un compañero se quema con la pistola de cola.", "1) Mantener la calma y avisar al profesor. 2) Enfriar la zona con agua fría unos 10-15 minutos. 3) No reventar ampollas ni poner cremas caseras. 4) Cubrir con una gasa limpia. 5) Si es grande, ir al centro de salud."],
  ],
  cuartas: ["lija", "triangulares y verdes", "amarillas", "el pelo recogido", "el compás", "la lima", "se sopla", "el cúter", "091", "la música", "doblar alambre", "prohibición", "se pinchan"],
  quiz: [
    ["Al terminar la sesión en el taller hay que…", ["recoger y devolver las herramientas a su sitio", "dejarlo todo para el día siguiente", "tirar los sobrantes", "salir corriendo"], "El orden evita accidentes."],
    ["Un bote vacío de barniz es un residuo…", ["especial (punto limpio)", "orgánico", "de papel", "de vidrio"], "Contiene restos químicos."],
    ["La broca para madera tiene…", ["una punta central que la centra", "punta de metal duro", "punta plana", "dientes de sierra"], "Así no se desvía."],
    ["Al taladrar, la pieza se sujeta…", ["con el tornillo de banco o un sargento", "con la mano", "con el pie", "no hace falta"], "Nunca con la mano."],
    ["Antes de cambiar la broca hay que…", ["desenchufar el taladro", "mojarla", "ponerse guantes", "encender el taladro"], "Evita arranques accidentales."],
    ["Para lijar con la lijadora eléctrica se recomienda usar…", ["mascarilla y gafas", "guantes de lana", "auriculares", "nada"], "Por el polvo."],
    ["La pistola de cola caliente funde la cola a unos…", ["150-200 °C", "40 °C", "1.000 °C", "0 °C"], "Puede quemar."],
    ["La primera pregunta para evaluar un riesgo es…", ["¿qué peligro hay?", "¿cuánto cuesta?", "¿quién lo hará?", "¿qué color tiene?"], "Identificar el peligro."],
    ["Para desenchufar una herramienta eléctrica…", ["se tira del enchufe, no del cable", "se tira del cable", "se corta el cable", "se moja el enchufe"], "El cable se puede dañar."],
    ["Las señales de lucha contra incendios son…", ["rojas y cuadradas", "azules y redondas", "verdes", "amarillas y triangulares"], "Indican extintores y alarmas."],
  ],
  examen: [
    ["Las herramientas eléctricas no se deben usar…", ["con las manos mojadas", "con gafas", "con la pieza sujeta", "con supervisión"], "Riesgo de descarga."],
    ["El taladro de columna es más seguro que el portátil porque…", ["está fijado y es más preciso", "no tiene broca", "no gira", "no necesita electricidad"], "Se fija a la mesa."],
    ["Los recortes de chapa van al contenedor de…", ["metales", "papel", "orgánico", "vidrio"], "Son reciclables."],
    ["Evaluar riesgos significa…", ["pensar qué puede salir mal y cómo evitarlo", "trabajar más rápido", "no usar herramientas", "llamar siempre al 112"], "Ser previsor."],
    ["Ante una quemadura, primero se enfría la zona con…", ["agua fría unos minutos", "hielo directamente", "aceite", "pasta de dientes"], "10-15 minutos."],
  ],
  tarjetas: [["Residuo especial", "Pinturas, barnices, pilas: van al punto limpio."], ["Broca", "Herramienta que gira para hacer agujeros; hay para madera, metal y pared."], ["Evaluación de riesgos", "Peligro → gravedad → medida preventiva."], ["Herramienta eléctrica", "Revisar cable, manos secas, desenchufar al terminar."]],
  glosario: [
    ["aula-taller", "Espacio para construir los proyectos de Tecnología."],
    ["EPI", "Equipo de protección individual: gafas, guantes, mascarilla."],
    ["tornillo de banco", "Herramienta fijada a la mesa para sujetar piezas."],
    ["sargento", "Herramienta que aprieta piezas entre sí."],
    ["granete", "Punzón que marca el punto donde se taladrará."],
    ["calibre", "Instrumento que mide con precisión de décimas de milímetro."],
    ["sierra de marquetería", "Sierra de hoja fina para cortes curvos."],
    ["sierra de arco", "Sierra para cortar metal y plástico."],
    ["escofina", "Lima de dientes gruesos para madera."],
    ["broca", "Pieza que gira para hacer agujeros."],
    ["taladro de columna", "Taladro fijo a la mesa, preciso y seguro."],
    ["señal de obligación", "Señal redonda azul: indica lo que hay que hacer."],
    ["señal de prohibición", "Señal redonda roja: indica lo que no se puede hacer."],
    ["evaluación de riesgos", "Análisis de los peligros de una tarea y sus medidas."],
    ["punto limpio", "Lugar donde se depositan residuos especiales."],
  ],
  situacion: { titulo: "Guía de seguridad del taller", reto: "Crear la guía de seguridad del aula-taller para los alumnos que llegarán el próximo curso, con fichas de herramientas, señales y protocolos.", pasos: ["Hacer un plano del aula-taller y marcar las zonas, el botiquín, el extintor y las salidas.", "Preparar una ficha de cada herramienta: para qué sirve, cómo se usa y qué EPI necesita.", "Evaluar los riesgos de tres tareas habituales del proyecto.", "Diseñar señales y carteles para el taller.", "Grabar un vídeo corto mostrando cómo se usa una herramienta con seguridad.", "Presentar la guía al resto del curso."], producto: "Una guía de seguridad del taller (papel o digital) con plano, fichas, señales y un vídeo demostrativo.", evaluacion: ["Las fichas explican correctamente el uso y las precauciones.", "Las evaluaciones de riesgos identifican peligros y medidas reales.", "Las señales siguen los colores y formas normalizados.", "El vídeo muestra un uso seguro y correcto de la herramienta."] },
  saberes: "orden, limpieza y gestión de residuos en el taller; taladrado y tipos de brocas; herramientas eléctricas y sus riesgos; evaluación de riesgos y actitud preventiva.",
  familias: ["Revisad juntos la caja de herramientas de casa: qué hay, para qué sirve cada herramienta y qué precauciones exige."],
  minutos: 100,
});
