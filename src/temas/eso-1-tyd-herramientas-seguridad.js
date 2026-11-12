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
