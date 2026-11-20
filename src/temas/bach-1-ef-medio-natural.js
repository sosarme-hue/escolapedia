// Educación Física, 1º de Bachillerato. Tema 6, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1-ef");

// Curvas de nivel: un monte visto en perfil y en planta.
const curvas = B.lienzo("Curvas de nivel: un monte en perfil y su representación en el mapa; las curvas juntas indican pendiente fuerte", `
  <path d="M14 86 L 60 30 L 92 52 L 120 86 Z" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>
  ${[44, 58, 72].map((y) => `<path d="M14 ${y} H 120" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>`).join("")}
  ${B.tx(66, 104, "perfil", { fs: 10.5, maxW: 60, bold: true })}
  <ellipse cx="190" cy="76" rx="58" ry="46" fill="none" stroke="var(--sun)" stroke-width="2"/>
  <ellipse cx="180" cy="72" rx="38" ry="32" fill="none" stroke="var(--sun)" stroke-width="2"/>
  <ellipse cx="170" cy="68" rx="18" ry="16" fill="none" stroke="var(--sun)" stroke-width="2"/>
  <circle cx="166" cy="66" r="3" fill="var(--red)"/>
  ${B.tx(190, 136, "planta (mapa)", { fs: 10.5, maxW: 90, bold: true })}
  ${B.tx(130, 160, "curvas juntas = pendiente fuerte; separadas = suave", { fs: 10, maxW: 236, color: "var(--muted)" })}`, "");

// Señales de los senderos homologados.
const senales = B.lienzo("Señales de los senderos: GR con franjas blanca y roja, PR blanca y amarilla, SL blanca y verde", `
  ${[["GR", "var(--red)", "gran recorrido", "> 50 km"], ["PR", "var(--sun)", "pequeño recorrido", "10-50 km"], ["SL", "var(--leaf)", "sendero local", "< 10 km"]].map(([n, c, a, d], i) => {
    const x = 22 + i * 80;
    return `<rect x="${x}" y="30" width="56" height="12" fill="#fff" stroke="var(--line)"/><rect x="${x}" y="42" width="56" height="12" fill="${c}"/>${B.tx(x + 28, 80, n, { fs: 15, maxW: 50, bold: true, color: c })}${B.tx(x + 28, 100, a, { fs: 10, maxW: 74 })}${B.tx(x + 28, 116, d, { fs: 10, maxW: 74, color: "var(--muted)" })}`;
  }).join("")}
  ${B.tx(130, 150, "franjas paralelas: seguir · aspa: no es por aquí", { fs: 10, maxW: 230, color: "var(--muted)" })}`, "");

module.exports = B.tema({
  titulo: "Actividades en el medio natural",
  minutos: 100,
  objetivos: [
    "Conocer las actividades físicas en el medio natural, sus beneficios y la normativa básica",
    "Planificar una ruta de senderismo calculando distancia, desnivel, tiempo y dificultad",
    "Orientarse con mapa topográfico, brújula y otros recursos, de forma segura",
    "Practicar en la naturaleza con prevención de riesgos y mínimo impacto ambiental",
  ],
  claves: ["medio natural", "senderismo", "GR", "MIDE", "mapa topográfico", "curvas de nivel", "escala", "brújula", "rumbo", "escalada", "seguridad", "no dejar rastro"],
  pregunta: {
    texto: "Con el GPS del móvil, ¿sigue teniendo sentido aprender a leer un mapa y usar una brújula?",
    respuesta: "Sí, y mucho. En la montaña el móvil puede quedarse <mark>sin batería, sin cobertura o romperse</mark>, y el frío agota las baterías rápido. Además, quien sabe leer un mapa entiende el terreno: ve una pendiente fuerte antes de llegar, calcula cuánto le queda y elige alternativas. El GPS es una ayuda excelente, pero no sustituye a la capacidad de orientarse y a una buena planificación.",
  },
  lectura: {
    titulo: "Perdidos a dos kilómetros del refugio",
    html: `<p>Cada año, los equipos de rescate de montaña en España realizan miles de intervenciones. Muchas no se deben a accidentes graves, sino a personas que se desorientan, se quedan sin luz, subestiman el tiempo de la ruta o salen con ropa inadecuada. La Guardia Civil y los bomberos repiten el mismo consejo: la mayoría de rescates se evitarían con una buena planificación.</p>
    <p>Imagina a un grupo de amigos que sale tarde, sin mirar la previsión del tiempo, siguiendo una ruta que alguien vio en una red social. A media tarde baja la niebla, el sendero se pierde entre las piedras y los móviles empiezan a quedarse sin batería. Están a solo dos kilómetros del refugio, pero no saben en qué dirección.</p>
    <p>La naturaleza es un lugar extraordinario para moverse, desconectar y compartir. Pero exige respeto y preparación. En este tema aprenderás a planificar una salida, a orientarte con mapa y brújula, a prevenir riesgos y a disfrutar del medio natural <b>sin dejar huella</b>.</p>`,
  },
  secciones: [3, 5, 4],
  bloques: [
    {
      h: "Las actividades en el medio natural",
      html: `<p>Las <b>actividades físicas en el medio natural</b> son las que se realizan en espacios naturales, aprovechando sus características: el relieve, el agua, el aire o la nieve. Se suelen clasificar según el medio:</p>
      <ul><li><b>Terrestres</b>: senderismo, montañismo, carreras de orientación, escalada, bicicleta de montaña, acampada, barranquismo.</li>
      <li><b>Acuáticas</b>: piragüismo, vela, surf, remo, buceo, natación en aguas abiertas.</li>
      <li><b>Aéreas</b>: parapente, ala delta, paracaidismo.</li>
      <li><b>En la nieve</b>: esquí, raquetas, esquí de fondo.</li></ul>
      <p>Tienen en común un entorno <b>cambiante e incierto</b>: el terreno, el tiempo o el agua no se controlan como en un pabellón. Eso las hace emocionantes, pero también obliga a <mark>planificar y a decidir con prudencia</mark>, y a saber renunciar cuando las condiciones no son buenas.</p>
      <p>En Bachillerato el objetivo es que adquieras autonomía para organizar tus propias salidas de forma segura y sostenible, y que conozcas los recursos de tu entorno: senderos, vías verdes, espacios naturales protegidos, clubes y federaciones.</p>`,
      svg: B.cajas("Clasificación según el medio", [["Tierra", "senderismo,|escalada, BTT"], ["Agua", "piragüismo,|vela, surf"], ["Aire", "parapente,|ala delta"], ["Nieve", "esquí,|raquetas"]], { t: "Actividades en la naturaleza" }),
    },
    {
      h: "Beneficios y retos",
      html: `<p>Moverse en la naturaleza tiene beneficios añadidos a los de cualquier actividad física:</p>
      <ul><li><b>Físicos</b>: trabajo aeróbico de larga duración, fuerza de piernas en subidas y bajadas, equilibrio en terreno irregular.</li>
      <li><b>Psicológicos</b>: diversos estudios relacionan pasar tiempo en entornos verdes con menos estrés, mejor ánimo y más atención. En Japón se habla de «baños de bosque» (<i>shinrin-yoku</i>).</li>
      <li><b>Sociales</b>: cooperación, convivencia y apoyo mutuo en el grupo.</li>
      <li><b>Ambientales y culturales</b>: conocer el territorio, la flora, la fauna y el patrimonio, y desarrollar una actitud de cuidado.</li></ul>
      <p>También plantean <b>retos</b>: la exposición a riesgos (caídas, desorientación, meteorología), el impacto sobre el entorno (basura, erosión, molestias a la fauna) y la masificación de algunos lugares.</p>
      <p>Por eso hoy se habla de un modelo de práctica <b>sostenible</b>, en el que el disfrute personal va unido a la responsabilidad con el medio y con las comunidades locales.</p>`,
      svg: B.estrella("Beneficios de la actividad en el medio natural", "Naturaleza", ["Forma física", "Menos estrés", "Atención", "Cooperación", "Cultura", "Conciencia"]),
    },
    {
      h: "Normativa y espacios protegidos",
      html: `<p>La práctica en el medio natural está regulada para proteger el entorno y a las personas. Conviene conocer:</p>
      <ul><li><b>Espacios naturales protegidos</b>: parques nacionales (como Ordesa, Picos de Europa o Doñana), parques naturales, reservas y parajes. Cada uno tiene su normativa: zonas de acceso restringido, prohibición de acampar libremente, límites de visitantes, perros con correa.</li>
      <li><b>Fuego</b>: en la mayor parte del año está prohibido encender fuego en el monte, y en verano el riesgo de incendio es muy alto.</li>
      <li><b>Acampada</b>: la acampada libre está prohibida o limitada en muchas comunidades; existen campings y zonas de acampada autorizadas, y los refugios de montaña.</li>
      <li><b>Propiedad</b>: muchos caminos atraviesan fincas privadas; hay que cerrar las cancelas y respetar el ganado.</li>
      <li><b>Drones, recolección y fauna</b>: está restringido volar drones, coger plantas protegidas o molestar a los animales.</li></ul>
      <p>Antes de salir, consulta la web del espacio natural o la oficina de información. <mark>Lo que está permitido en un lugar puede estar prohibido en otro</mark>.</p>`,
      svg: B.rejilla("Normas habituales en espacios naturales", ["Aspecto", "Norma general"], [["Fuego", "prohibido casi siempre"], ["Acampada", "solo en zonas autorizadas"], ["Perros", "con correa"], ["Drones", "restringidos"], ["Flora y fauna", "no recoger ni molestar"]], { t: "Antes de salir, infórmate" }),
    },
    {
      h: "El senderismo y la señalización",
      html: `<p>El <b>senderismo</b> es la actividad más accesible del medio natural: caminar por senderos, normalmente señalizados, sin necesidad de técnicas especiales. En España hay una gran red de <b>senderos homologados</b> por la Federación Española de Deportes de Montaña y Escalada (FEDME), señalizados con marcas de pintura:</p>
      <ul><li><b>GR</b> (gran recorrido): más de 50 km, varias jornadas. Franjas <b>blanca y roja</b>. Por ejemplo, el GR-11 cruza los Pirineos.</li>
      <li><b>PR</b> (pequeño recorrido): entre 10 y 50 km, una o dos jornadas. Franjas <b>blanca y amarilla</b>.</li>
      <li><b>SL</b> (sendero local): menos de 10 km. Franjas <b>blanca y verde</b>.</li></ul>
      <p>Las marcas indican si se va bien (dos franjas paralelas), si hay que girar (franjas con un quiebro) o si es una dirección equivocada (un aspa). También existen <b>vías verdes</b> (antiguos trazados de tren acondicionados) y caminos históricos como el Camino de Santiago, señalizado con flechas amarillas.</p>
      <p>Aun así, la señalización puede estar borrada o tapada por la nieve o la vegetación, por lo que nunca sustituye al mapa.</p>`,
      svg: senales,
    },
    {
      h: "Planificar una ruta",
      html: `<p>Una ruta bien planificada responde a estas preguntas: ¿cuánta distancia?, ¿cuánto desnivel?, ¿cuánto tiempo?, ¿qué dificultad?, ¿qué tiempo hará?, ¿hay escapatorias?</p>
      <p>Para estimar el <b>tiempo</b> se usa una regla práctica (derivada de la de Naismith): caminando a paso normal, se recorren unos <b>4-5 km por hora en llano</b> y se suben unos <b>300-400 m de desnivel por hora</b>. Se suman ambos tiempos, más las paradas. Las bajadas fuertes también llevan tiempo.</p>
      <p>Para valorar la <b>dificultad</b> se usa en España el método <b>MIDE</b> (Método de Información de Excursiones), que puntúa de 1 a 5 cuatro aspectos:</p>
      <ul><li><b>Medio</b>: severidad del entorno (riesgos naturales).</li>
      <li><b>Itinerario</b>: dificultad para orientarse.</li>
      <li><b>Desplazamiento</b>: tipo de terreno (camino, sendero, sin senda, trepada).</li>
      <li><b>Esfuerzo</b>: tiempo de marcha según los cálculos anteriores.</li></ul>
      <p>Hay que ajustar la ruta al <b>miembro más lento</b> del grupo, elegir una hora de salida que deje margen de luz, conocer la previsión meteorológica y <mark>comunicar a alguien el itinerario</mark> y la hora prevista de vuelta.</p>`,
      svg: B.cajas("Método MIDE de valoración de rutas", [["M · Medio", "riesgos del entorno"], ["I · Itinerario", "orientación"], ["D · Desplazamiento", "tipo de terreno"], ["E · Esfuerzo", "horas de marcha"]], { t: "MIDE (1 a 5)" }),
      video: { id: "CHKcVcYbGH0", titulo: "Senderismo para principiantes: guía completa", canal: "Seb moving", vistas: 62184 },
    },
    {
      h: "Equipamiento y mochila",
      html: `<p>El equipo debe adaptarse a la actividad, la duración y la meteorología, pero hay elementos básicos para cualquier salida:</p>
      <ul><li><b>Calzado</b>: botas o zapatillas de montaña con buena suela, ya usadas antes (nunca estrenar en una ruta larga). Calcetines técnicos para evitar ampollas.</li>
      <li><b>Ropa por capas</b>: una primera capa transpirable (no algodón, que retiene el sudor), una capa térmica (forro polar) y una capa exterior impermeable y cortavientos. Así se añaden o se quitan según el esfuerzo y el tiempo.</li>
      <li><b>Protección</b>: gorra, gafas de sol y crema solar (en altura la radiación es mayor), y gorro y guantes si hace frío.</li>
      <li><b>Agua y comida</b>: al menos 1,5-2 litros de agua y alimentos energéticos (frutos secos, fruta, bocadillo).</li>
      <li><b>Seguridad</b>: mapa, brújula, móvil cargado y batería externa, linterna frontal, botiquín, manta térmica y silbato.</li></ul>
      <p>La <b>mochila</b> no debe superar el 10-15 % del peso corporal en salidas de un día. Lo pesado va pegado a la espalda y a media altura, y lo que se usa a menudo, accesible. Las correas de cadera transfieren el peso a las piernas y alivian los hombros.</p>`,
      svg: B.capas("El sistema de tres capas", [["Capa exterior", "impermeable y cortavientos"], ["Capa intermedia", "térmica: forro polar"], ["Primera capa", "transpirable, sin algodón"]], { t: "Vestirse por capas" }),
    },
    {
      h: "El mapa topográfico",
      html: `<p>El <b>mapa topográfico</b> representa el terreno con su relieve. En España los publica el Instituto Geográfico Nacional (IGN), y se pueden consultar gratis en su visor y en aplicaciones. Para leerlo hay que entender:</p>
      <ul><li><b>Escala</b>: relación entre la distancia en el mapa y la real. En una escala 1:25.000, 1 cm del mapa son 25.000 cm, es decir, <b>250 m</b> reales. Cuanto mayor el denominador, menos detalle.</li>
      <li><b>Curvas de nivel</b>: líneas que unen puntos de la misma altitud. La <b>equidistancia</b> es la diferencia de altura entre dos curvas seguidas (por ejemplo, 10 m). Si las curvas están <mark>muy juntas, la pendiente es fuerte</mark>; si están separadas, es suave.</li>
      <li><b>Leyenda</b>: símbolos de caminos, ríos, fuentes, edificios, vegetación o límites.</li>
      <li><b>Norte</b>: los mapas se orientan con el norte hacia arriba; la cuadrícula ayuda a situarse con coordenadas.</li></ul>
      <p>Saber interpretar las formas del relieve es muy útil: una <b>vaguada</b> (las curvas apuntan hacia arriba de la ladera, por donde baja el agua), una <b>divisoria</b> o cresta (las curvas apuntan hacia abajo), un collado o una cima.</p>`,
      svg: curvas,
    },
    {
      h: "Orientarse con brújula y sin ella",
      html: `<p>La <b>brújula</b> tiene una aguja imantada que señala el norte magnético. Una brújula de orientación (de placa) sirve para:</p>
      <ul><li><b>Orientar el mapa</b>: girar el mapa hasta que su norte coincida con el que marca la aguja. Así lo que hay a tu derecha en el terreno está a tu derecha en el mapa.</li>
      <li><b>Tomar un rumbo</b>: colocar el borde de la brújula uniendo el punto donde estás y el destino, girar la rueda hasta alinear sus líneas con los meridianos del mapa y, con la brújula en la mano, girar tú hasta que la aguja coincida con la flecha de la rueda. La flecha de dirección indica hacia dónde caminar.</li></ul>
      <p>Si no hay brújula, hay recursos aproximados: el <b>sol</b> sale por el este y se pone por el oeste, y a mediodía (hacia las 14:00 en horario de verano en España) está al sur; por la noche, la <b>estrella Polar</b> marca el norte. El musgo o la forma de los árboles son indicios poco fiables.</p>
      <p>El <b>GPS</b> y las aplicaciones de mapas son muy útiles para saber la posición exacta y seguir un track, pero hay que llevar batería de reserva, descargar los mapas sin conexión y saber lo básico sin ellos.</p>`,
      svg: B.flujo("Tomar un rumbo con brújula de placa", ["Unir posición y destino con el borde", "Girar la rueda: líneas con meridianos", "Quitar la brújula del mapa", "Girar tú hasta que aguja = flecha", "Caminar hacia la flecha de dirección"], { t: "Rumbo en cinco pasos" }),
      video: { id: "Osgz4YFd7Ps", titulo: "Técnicas de orientación con brújula", canal: "ABS naturaleza", vistas: 258615 },
    },
    {
      h: "Escalada y otras actividades",
      html: `<p>La <b>escalada</b> consiste en progresar por paredes de roca o artificiales usando manos y pies. Hoy es deporte olímpico y se practica mucho en rocódromos. Sus modalidades principales son:</p>
      <ul><li><b>Búlder</b>: bloques de poca altura, sin cuerda, con colchonetas debajo.</li>
      <li><b>Escalada deportiva</b>: vías equipadas con anclajes fijos, con cuerda, arnés y un compañero que asegura.</li>
      <li><b>Velocidad</b>: una vía estándar de 15 m que se sube lo más rápido posible.</li></ul>
      <p>Principios técnicos básicos: mantener <b>tres puntos de apoyo</b> y mover solo uno, empujar con las piernas (más fuertes) en lugar de tirar solo con los brazos, llevar el peso sobre los pies y los brazos estirados para ahorrar fuerza.</p>
      <p>En la escuela se empieza con <b>travesías</b> horizontales a poca altura en el rocódromo o la espaldera, siempre con colchonetas y compañeros que observan. La escalada con cuerda requiere formación específica en nudos (ocho doble), aseguramiento y comprobaciones cruzadas entre compañeros.</p>
      <p>Otras actividades accesibles son la <b>bicicleta de montaña</b>, el <b>piragüismo</b> en aguas tranquilas y las <b>carreras de orientación</b>, que combinan carrera y navegación con mapa.</p>`,
      svg: B.comparar("Búlder frente a escalada deportiva", ["Búlder", ["poca altura", "sin cuerda", "colchonetas", "movimientos cortos"]], ["Deportiva", ["vías largas", "cuerda y arnés", "compañero asegura", "resistencia"]]),
      video: { id: "jMKWC70LRmI", titulo: "Técnicas de escalada para principiantes", canal: "Alex Pastor", vistas: 291876 },
    },
    {
      h: "Seguridad y prevención de riesgos",
      html: `<p>La mayoría de los accidentes en la naturaleza se pueden evitar. Las claves de seguridad son:</p>
      <ul><li><b>Meteorología</b>: consultar la previsión de la Agencia Estatal de Meteorología (AEMET) para montaña. Las tormentas de verano suelen formarse por la tarde: conviene empezar temprano. Ante una tormenta, alejarse de cimas, crestas, árboles aislados y objetos metálicos.</li>
      <li><b>Calor</b>: el golpe de calor se previene bebiendo, evitando las horas centrales y cubriendo la cabeza.</li>
      <li><b>Frío</b>: la <b>hipotermia</b> aparece con frío, viento y ropa mojada. Señales: temblores, torpeza, confusión. Hay que abrigar, secar, refugiarse y dar bebida caliente.</li>
      <li><b>Grupo</b>: nunca ir solo en zonas aisladas, ir al ritmo del más lento y no separarse.</li>
      <li><b>Saber renunciar</b>: darse la vuelta a tiempo es una decisión inteligente, no un fracaso. Se fija de antemano una <b>hora límite</b> para llegar a la cima o al punto más lejano.</li></ul>
      <p>En caso de emergencia, el número es el <b>112</b>, que funciona aunque no haya cobertura de tu compañía si hay de otra. Aplicaciones como My112 o Alpify envían la posición. Para dar la alarma: qué ha pasado, dónde (coordenadas), cuántas personas y su estado.</p>`,
      svg: B.rejilla("Riesgos frecuentes y prevención", ["Riesgo", "Prevención"], [["Desorientación", "mapa y planificación"], ["Tormenta", "salir temprano"], ["Golpe de calor", "agua y sombra"], ["Hipotermia", "capas y abrigo"], ["Caídas", "calzado y ritmo"]], { t: "Más vale prevenir" }),
    },
    {
      h: "No dejar rastro",
      html: `<p>El movimiento internacional <b>No Deje Rastro</b> (<i>Leave No Trace</i>) resume en siete principios cómo disfrutar de la naturaleza con el mínimo impacto:</p>
      <ol><li><b>Planificar</b> con antelación y prepararse.</li>
      <li><b>Caminar y acampar</b> en superficies resistentes: no salir de los senderos ni atajar en las curvas (provoca erosión).</li>
      <li><b>Gestionar los residuos</b>: lo que se lleva, se trae, incluidos restos orgánicos como cáscaras.</li>
      <li><b>Dejar lo que se encuentra</b>: no coger plantas, piedras ni restos arqueológicos.</li>
      <li><b>Minimizar el uso del fuego</b> (prohibido en muchos lugares).</li>
      <li><b>Respetar la vida salvaje</b>: observar desde lejos, no alimentar a los animales.</li>
      <li><b>Ser considerado</b> con otros visitantes: evitar ruidos y música alta.</li></ol>
      <p>A esto se suman la movilidad sostenible (compartir coche, usar transporte público para llegar al inicio de la ruta) y el apoyo a la economía local. Un objetivo práctico para cualquier salida: <mark>dejar el lugar mejor que como lo encontraste</mark>, por ejemplo recogiendo alguna basura ajena.</p>`,
      svg: B.estrella("Principios de No Deje Rastro", "Sin huella", ["Planificar", "Senderos", "Residuos", "Dejar todo", "Sin fuego", "Fauna"]),
    },
    {
      h: "Organizar una salida en grupo",
      html: `<p>Organizar una salida es un proyecto completo que pone en juego todo lo aprendido. Un posible guion:</p>
      <ol><li><b>Elegir el destino</b> según el nivel del grupo y valorar la ruta con el método MIDE.</li>
      <li><b>Repartir funciones</b>: responsable de la ruta y el mapa, de la meteorología, del botiquín, de la comida y el agua, de la comunicación con las familias, de la documentación sobre flora, fauna y patrimonio.</li>
      <li><b>Preparar la logística</b>: transporte, permisos, horarios, presupuesto, lista de material.</li>
      <li><b>Prevenir</b>: plan B por si hace mal tiempo, puntos de escape, teléfonos de emergencia, hora límite.</li>
      <li><b>Realizar la salida</b> con paradas programadas, control del grupo (nadie se queda atrás) y actividades de orientación o de observación.</li>
      <li><b>Evaluar</b>: qué salió bien, qué cambiaríais y qué habéis aprendido del entorno.</li></ol>
      <p>Las salidas de varios días, con acampada o en refugio, añaden aprendizajes de <b>convivencia</b>: compartir tareas, cuidar el material común, respetar el descanso. Muchos alumnos recuerdan estas experiencias como lo mejor de su etapa escolar.</p>`,
      svg: B.ciclo("Ciclo de una salida al medio natural", "Salida", ["Elegir", "Repartir", "Prevenir", "Realizar", "Evaluar"]),
    },
  ],
  figura: {
    titulo: "Actividades en el medio natural en cuatro ideas",
    items: [["Planificar", "MIDE", "distancia, desnivel", "y tiempo"], ["Orientarse", "1:25.000", "mapa, curvas", "y brújula"], ["Seguridad", "112", "meteo, capas", "y saber renunciar"], ["Sin huella", "7 principios", "lo que llevas,", "lo traes"]],
  },
  video: { id: "76Hzn_XSXrk", titulo: "Los 10 errores más comunes de senderismo y acampada", canal: "Pau Outdoors", vistas: 190290 },
  quiz: [
    ["El piragüismo es una actividad en el medio…", ["terrestre", "acuático", "aéreo", "nival"], 1, "Agua."],
    ["Una característica común de estas actividades es…", ["un entorno controlado", "un entorno cambiante e incierto", "que no tienen riesgos", "que son competitivas"], 1, "Por eso hay que planificar."],
    ["En la mayoría del monte, encender fuego está…", ["siempre permitido", "prohibido casi siempre", "recomendado", "obligatorio en invierno"], 1, "Riesgo de incendio."],
    ["Un sendero GR se señaliza con franjas…", ["blanca y amarilla", "blanca y roja", "blanca y verde", "azules"], 1, "Más de 50 km."],
    ["Un PR tiene una longitud de…", ["menos de 10 km", "entre 10 y 50 km", "más de 100 km", "1 km"], 1, "Blanca y amarilla."],
    ["Un aspa en las marcas de pintura significa…", ["sigue recto", "dirección equivocada", "fuente", "fin del camino"], 1, "No vayas por ahí."],
    ["Caminando, en llano se recorren aproximadamente…", ["1 km/h", "4-5 km/h", "12 km/h", "20 km/h"], 1, "Regla práctica."],
    ["En subida se ganan aproximadamente…", ["50 m de desnivel por hora", "300-400 m por hora", "1.500 m por hora", "nada"], 1, "Se suma al tiempo horizontal."],
    ["El método MIDE valora…", ["solo la distancia", "medio, itinerario, desplazamiento y esfuerzo", "el precio", "la velocidad"], 1, "De 1 a 5."],
    ["La primera capa de ropa debe ser…", ["de algodón", "transpirable y sin algodón", "impermeable", "de lana gruesa"], 1, "El algodón retiene el sudor."],
    ["La mochila de un día no debería superar…", ["el 50 % del peso", "el 10-15 % del peso corporal", "el 30 %", "el 1 %"], 1, "Lo pesado pegado a la espalda."],
    ["En escala 1:25.000, 1 cm equivale a…", ["25 m", "250 m", "2,5 km", "25 km"], 1, "25.000 cm = 250 m."],
    ["Las curvas de nivel muy juntas indican…", ["llano", "pendiente fuerte", "río", "camino"], 1, "Mucho desnivel en poca distancia."],
    ["La equidistancia es…", ["la escala", "la diferencia de altura entre dos curvas seguidas", "la distancia total", "el norte"], 1, "Por ejemplo, 10 m."],
    ["Orientar el mapa consiste en…", ["doblarlo", "hacer coincidir su norte con el que marca la brújula", "leer la leyenda", "medir distancias"], 1, "Así el mapa coincide con el terreno."],
    ["A mediodía solar, en España el sol está aproximadamente al…", ["norte", "sur", "este", "oeste"], 1, "Hemisferio norte."],
    ["En escalada, el principio de tres puntos de apoyo significa…", ["usar tres cuerdas", "mover solo una extremidad cada vez", "escalar en grupos de tres", "tres metros de altura"], 1, "Estabilidad."],
    ["Las tormentas de verano en montaña suelen formarse…", ["al amanecer", "por la tarde", "a medianoche", "nunca"], 1, "Conviene salir temprano."],
    ["Una señal de hipotermia es…", ["sudar mucho", "temblores, torpeza y confusión", "hambre", "sed"], 1, "Abrigar y refugiar."],
    ["Según No Deje Rastro, las cáscaras de fruta…", ["se pueden tirar", "se llevan de vuelta", "se entierran siempre", "se queman"], 1, "Lo que se lleva, se trae."],
  ],
  examen: [
    ["Una ruta tiene 12 km y 600 m de desnivel de subida. Su tiempo estimado sin paradas es de unas…", ["2 h", "4 h 30 min", "8 h", "1 h"], 1, "12/4 = 3 h + 600/400 = 1,5 h."],
    ["En un mapa 1:50.000 mides 6 cm entre dos puntos. La distancia real es…", ["300 m", "3 km", "30 km", "6 km"], 1, "6 × 50.000 = 300.000 cm = 3 km."],
    ["Ves en el mapa curvas de nivel en forma de V que apuntan hacia la cima. Es…", ["una cresta", "una vaguada", "una cima", "un llano"], 1, "Por donde baja el agua."],
    ["Son las 15:00, faltan 2 h para la cima y a las 18:30 anochece. ¿Qué haces?", ["seguir", "darse la vuelta: no hay margen para bajar con luz", "acampar libremente", "correr"], 1, "Hora límite y saber renunciar."],
    ["Durante una ruta empieza una tormenta eléctrica. Lo correcto es…", ["refugiarse bajo un árbol aislado", "alejarse de cimas y crestas y de objetos metálicos", "subir a la cima", "correr con los bastones en alto"], 1, "Minimizar la exposición."],
    ["Un compañero está mojado, tiembla y habla con torpeza. Lo primero es…", ["darle alcohol", "resguardarlo, quitarle la ropa mojada y abrigarlo", "hacerle correr", "darle agua fría"], 1, "Posible hipotermia."],
    ["Atajar en las curvas de un sendero en zigzag…", ["ahorra tiempo sin problemas", "provoca erosión", "es lo recomendado", "no influye"], 1, "Principio de no dejar rastro."],
    ["Al llamar al 112 en un accidente, ¿qué información es prioritaria?", ["el nombre de la ruta en redes", "qué ha pasado, dónde, cuántos heridos y su estado", "la marca de las botas", "la hora de salida"], 1, "Datos para el rescate."],
  ],
  feynman: ["Cómo se clasifican las actividades en el medio natural", "Qué significan las marcas GR, PR y SL", "Cómo se calcula el tiempo de una ruta y qué valora el MIDE", "Qué indican la escala y las curvas de nivel de un mapa", "Cómo se toma un rumbo con una brújula de placa", "Cuáles son los principios de No Deje Rastro"],
  mapa: ["MEDIO NATURAL", [["Actividades", "tierra · agua · aire · nieve"], ["Planificar", "senderos · MIDE · tiempo · equipo"], ["Orientarse", "escala · curvas · brújula · GPS"], ["Responsabilidad", "seguridad · 112 · no dejar rastro"]]],
  tarjetas: [
    ["GR", "Gran recorrido: > 50 km; blanco y rojo."],
    ["PR", "Pequeño recorrido: 10-50 km; blanco y amarillo."],
    ["SL", "Sendero local: < 10 km; blanco y verde."],
    ["Tiempo de ruta", "4-5 km/h en llano + 300-400 m de subida por hora."],
    ["MIDE", "Medio, itinerario, desplazamiento y esfuerzo (1-5)."],
    ["Tres capas", "Transpirable, térmica e impermeable."],
    ["Escala 1:25.000", "1 cm = 250 m."],
    ["Curvas de nivel", "Juntas: pendiente fuerte; separadas: suave."],
    ["Orientar el mapa", "Norte del mapa = norte de la brújula."],
    ["Tres puntos de apoyo", "En escalada, mover una sola extremidad."],
    ["Hora límite", "Momento fijado para darse la vuelta."],
    ["No Deje Rastro", "Siete principios de mínimo impacto."],
  ],
  ejemplos: [
    ["Calcula el tiempo de una ruta de 10 km con 500 m de subida.", ["Horizontal: 10 km / 4 km/h = 2,5 h.", "Vertical: 500 m / 400 m/h ≈ 1,25 h.", "Total ≈ 3 h 45 min, más paradas (unos 30-45 min)."], "Unas 4 h 15 min a 4 h 30 min con paradas."],
    ["En un mapa 1:25.000 una ruta mide 18 cm. ¿Cuál es la distancia real?", ["1 cm = 250 m.", "18 × 250 = 4.500 m.", "La distancia real es 4,5 km (en horizontal)."], "4,5 km."],
    ["Calcula el desnivel entre dos puntos separados por 8 curvas con equidistancia de 20 m.", ["Desnivel = número de intervalos × equidistancia.", "8 × 20 = 160 m.", "Si las curvas están muy juntas en poca distancia, la pendiente será fuerte."], "160 m de desnivel."],
    ["Prepara la mochila para una ruta de un día en otoño.", ["Ropa por capas: camiseta técnica, forro polar, chaqueta impermeable, gorro y guantes.", "2 L de agua, bocadillo, fruta y frutos secos.", "Mapa, brújula, móvil y batería, frontal, botiquín, manta térmica, silbato y crema solar."], "Mochila ligera (≤ 10-15 % del peso) y completa."],
    ["Fija la hora límite de una ascensión que empieza a las 8:00 con anochecer a las 19:00.", ["Bajada estimada: 3 h; margen de seguridad: 1 h.", "19:00 − 3 h − 1 h = 15:00.", "Si a las 15:00 no se ha llegado a la cima, se vuelve."], "Hora límite: 15:00."],
    ["Da la alarma al 112 tras una torcedura de tobillo en ruta.", ["Qué: una chica de 17 años con posible esguince, consciente, no puede andar.", "Dónde: coordenadas del móvil y referencia (a 2 km del collado X, sendero PR-...).", "Quiénes: grupo de 6, abrigados; mantener el teléfono libre y seguir las instrucciones."], "Mensaje claro con qué, dónde, cuántos y estado."],
  ],
  errores: [
    "Salir sin consultar la previsión meteorológica ni avisar a nadie del itinerario.",
    "Fiarse solo del móvil sin mapa, sin batería extra o sin mapas descargados.",
    "Calcular el tiempo solo por la distancia y olvidar el desnivel.",
    "Llevar ropa de algodón y no llevar capa impermeable.",
    "Seguir adelante aunque se haya pasado la hora límite o el tiempo empeore.",
    "Atajar senderos, dejar restos orgánicos o molestar a la fauna.",
  ],
  ejercicios: {
    b: [
      ["Clasifica: barranquismo, vela, parapente, esquí de fondo, BTT.", "Tierra: barranquismo, BTT. Agua: vela. Aire: parapente. Nieve: esquí de fondo."],
      ["Cita tres beneficios de la actividad en la naturaleza.", "Mejora aeróbica, reducción del estrés, cooperación, conocimiento del entorno."],
      ["¿Qué colores tiene la señal de un PR?", "Blanco y amarillo."],
      ["¿Qué significa un aspa en las marcas de un sendero?", "Dirección equivocada."],
      ["¿Qué valora el método MIDE?", "Medio, itinerario, desplazamiento y esfuerzo, de 1 a 5."],
      ["¿Por qué no se recomienda la ropa de algodón en montaña?", "Porque retiene el sudor y se enfría, aumentando el riesgo de hipotermia."],
      ["Enumera cinco elementos de seguridad de la mochila.", "Mapa, brújula, móvil cargado y batería, frontal, botiquín, manta térmica, silbato."],
      ["¿Qué es la escala de un mapa?", "La relación entre la distancia en el mapa y la real."],
      ["¿Qué son las curvas de nivel?", "Líneas que unen puntos de la misma altitud."],
      ["¿Para qué sirve orientar el mapa?", "Para que la dirección de lo que se ve en el terreno coincida con el mapa."],
      ["¿Cuál es el número de emergencias en Europa?", "El 112."],
      ["Enumera tres principios de No Deje Rastro.", "Planificar, ir por superficies resistentes, gestionar residuos, dejar lo que se encuentra, minimizar el fuego, respetar la fauna, ser considerado."],
    ],
    m: [
      ["Calcula el tiempo de una ruta de 15 km y 900 m de subida.", "15/4 = 3,75 h; 900/400 = 2,25 h; total 6 h sin paradas (unas 7 h con ellas)."],
      ["En escala 1:50.000, ¿cuántos cm del mapa son 7 km?", "7 km = 700.000 cm; 700.000 / 50.000 = 14 cm."],
      ["Explica cómo distinguir una vaguada de una divisoria en el mapa.", "En la vaguada las curvas forman V que apuntan hacia arriba de la ladera; en la divisoria, las V apuntan hacia abajo."],
      ["Describe los pasos para tomar un rumbo con brújula de placa.", "Unir con el borde posición y destino; girar la rueda para alinear sus líneas con los meridianos; levantar la brújula; girar uno mismo hasta que la aguja coincida con la flecha de la rueda; caminar hacia la flecha de dirección."],
      ["¿Cómo se coloca correctamente la carga en una mochila?", "Lo pesado pegado a la espalda y a media altura; lo ligero abajo y arriba; lo de uso frecuente en bolsillos; ajustar el cinturón de cadera."],
      ["Explica el sistema de tres capas.", "Primera capa transpirable para evacuar el sudor, segunda térmica para conservar el calor y tercera impermeable y cortavientos."],
      ["¿Qué hacer si te sorprende una tormenta eléctrica?", "Bajar de cimas y crestas, alejarse de árboles aislados, agua y objetos metálicos, no correr con bastones en alto y agacharse sobre la mochila si está muy cerca."],
      ["Explica por qué conviene fijar una hora límite.", "Para decidir objetivamente cuándo volver y evitar que la ilusión por llegar lleve a bajar de noche o con mal tiempo."],
      ["Cita tres principios técnicos de la escalada para principiantes.", "Tres puntos de apoyo, empujar con piernas, peso sobre los pies, brazos estirados para ahorrar fuerza."],
      ["Indica tres normas habituales en un espacio natural protegido.", "No hacer fuego, no acampar fuera de zonas autorizadas, perros con correa, no recoger flora ni molestar a la fauna, drones restringidos."],
      ["¿Cómo orientarse con el sol de forma aproximada?", "Sale por el este, se pone por el oeste y a mediodía solar está al sur en el hemisferio norte."],
    ],
    a: [
      ["Planifica completa una ruta de un día para tu clase (inventada o real) con distancia, desnivel, tiempo, MIDE, equipo y plan B.", "Ejemplo: SL de 9 km y 350 m de subida; 9/4 = 2,25 h + 350/400 ≈ 0,9 h → 3 h 10 min + paradas = 4 h; MIDE 1-2-2-2; equipo por capas, 2 L de agua; plan B: ruta circular más corta por el valle si hay tormenta; hora límite 13:30."],
      ["Compara orientarse con GPS y con mapa y brújula.", "GPS: posición exacta, rápido, tracks; depende de batería y cobertura de satélites, puede fallar con frío y no enseña el terreno. Mapa y brújula: no dependen de batería, permiten entender el relieve, requieren aprendizaje. Lo ideal es combinarlos."],
      ["Analiza el caso de la lectura: ¿qué errores cometió el grupo y cómo se habrían evitado?", "Salir tarde, no mirar la previsión, seguir una ruta de redes sin valorarla, no llevar mapa ni batería extra. Evitar: planificar con MIDE, previsión AEMET, hora límite, mapa y brújula, batería, avisar del itinerario."],
      ["Debate: ¿deberían limitarse los visitantes en los espacios naturales más masificados?", "A favor: protegen el ecosistema y la experiencia. En contra: restringen el acceso. Soluciones intermedias: cupos con reserva, transporte público, horarios, educación ambiental."],
      ["Diseña una carrera de orientación en el instituto.", "Mapa del centro a escala, 10 balizas con códigos, salida escalonada por parejas, tarjeta de control, tiempo límite; enseñar antes a orientar el mapa y leer la leyenda; seguridad: zonas delimitadas."],
      ["Explica la relación entre la práctica en la naturaleza y la sostenibilidad.", "La actividad genera impactos (erosión, residuos, transporte, masificación) pero también conciencia ambiental y economía local; un modelo sostenible minimiza impactos y favorece el cuidado del territorio."],
      ["Organiza el reparto de funciones de una salida de dos días con acampada.", "Responsables de ruta y mapa, meteorología, botiquín, comida y agua, material de acampada, comunicación con familias, documentación del entorno y convivencia; cada función con tareas y lista de control."],
      ["Una compañera quiere escalar con cuerda en un rocódromo sin formación. Aconséjale.", "Que haga un curso de iniciación: nudo de ocho, aseguramiento con dispositivo, comprobaciones cruzadas, comunicación; empezar con búlder y travesías; siempre con supervisión."],
    ],
  },
  glosario: [
    ["Medio natural", "Espacio natural donde se realizan actividades físicas."],
    ["Senderismo", "Caminar por senderos, normalmente señalizados."],
    ["GR, PR, SL", "Tipos de senderos homologados según su longitud."],
    ["MIDE", "Método de valoración de la dificultad de una excursión."],
    ["Desnivel", "Diferencia de altitud entre dos puntos."],
    ["Mapa topográfico", "Mapa que representa el relieve."],
    ["Escala", "Relación entre la distancia en el mapa y la real."],
    ["Curvas de nivel", "Líneas que unen puntos de igual altitud."],
    ["Equidistancia", "Diferencia de altura entre dos curvas consecutivas."],
    ["Vaguada", "Zona baja por donde discurre el agua."],
    ["Rumbo", "Dirección hacia la que se camina medida con brújula."],
    ["Norte magnético", "Dirección que señala la aguja de la brújula."],
    ["Búlder", "Escalada sin cuerda en bloques de poca altura."],
    ["Hipotermia", "Descenso peligroso de la temperatura corporal."],
    ["Hora límite", "Hora fijada para darse la vuelta pase lo que pase."],
    ["No Deje Rastro", "Principios de mínimo impacto en la naturaleza."],
  ],
  situacion: {
    titulo: "Diseñamos la salida de fin de trimestre",
    reto: "El grupo planificará, realizará y evaluará una salida de senderismo y orientación a un espacio natural cercano, con todos los cálculos, la prevención de riesgos y un compromiso de impacto cero.",
    pasos: [
      "Elegid el destino y la ruta, y calculad distancia, desnivel, tiempo y valoración MIDE.",
      "Repartid funciones y preparad la logística, el material y el plan B.",
      "Practicad en el centro la orientación del mapa y la toma de rumbos.",
      "Realizad la salida con controles de orientación y actividades de observación del entorno.",
      "Evaluad la salida, la seguridad y el impacto (incluida la basura recogida) y presentad las conclusiones.",
    ],
    producto: "Un dosier de la salida (ficha de ruta, MIDE, mapa anotado, lista de material, plan de seguridad) y un breve vídeo o presentación con la evaluación.",
    evaluacion: [
      "Los cálculos de la ruta y la valoración MIDE son correctos.",
      "El plan de seguridad es completo y realista.",
      "Se aplican técnicas de orientación con mapa y brújula.",
      "Se cumplen los principios de No Deje Rastro y la convivencia del grupo.",
    ],
  },
  familias: [
    "Planificad juntos una ruta sencilla de fin de semana usando el visor del IGN.",
    "Practicad con una brújula y un mapa en un parque o en el campo.",
    "Revisad el equipo de montaña y su estado antes de cada salida.",
    "Dad ejemplo: recoged la basura y respetad las normas de los espacios naturales.",
  ],
  saberes: B.SAB("Actividades en el medio natural: clasificación, beneficios y normativa, senderismo y señalización, planificación de rutas y método MIDE, equipamiento, mapa topográfico, orientación con brújula y GPS, iniciación a la escalada, prevención de riesgos y emergencias, y práctica sostenible con los principios de No Deje Rastro"),
  ideas: [
    "Hacer una carrera de orientación en el centro con un mapa propio a escala.",
    "Usar el visor del IGN para calcular distancias y desniveles de rutas cercanas.",
    "Coordinar con Biología y Geografía una salida con observación del paisaje.",
    "Organizar una jornada de limpieza de un espacio natural cercano.",
  ],
  fuentes: [
    { t: "Federación Española de Deportes de Montaña y Escalada (FEDME): senderos", url: "https://www.fedme.es/" },
    { t: "Instituto Geográfico Nacional: visor de mapas", url: "https://www.ign.es/iberpix/visor/" },
    { t: "Método MIDE", url: "https://www.montanasegura.com/mide/" },
  ],
});
