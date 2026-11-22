// Ciencias Sociales 3º de Primaria: monumentos y patrimonio. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, vid, vgen, RD, PROF, castillo, arbol, monte, suelo, nino, sol } = require("./_pri3b");

// Monumentos sencillos dibujados a mano.
const acueducto = (x, y, n = 5, a = 22) => `<rect x="${x}" y="${y - 70}" width="${n * a}" height="10" fill="#d6b88a" stroke="var(--ink)" stroke-width="1"/>${[...Array(n)].map((_, i) => `<path d="M${x + i * a} ${y} V${y - 60} H${x + (i + 1) * a} V${y} H${x + (i + 1) * a - 4} V${y - 40} a${a / 2 - 4} ${a / 2 - 4} 0 0 0 -${a - 8} 0 V${y}z" fill="#e7c49b" stroke="var(--ink)" stroke-width="1"/>`).join("")}`;
const iglesia = (x, y) => `<rect x="${x - 26}" y="${y - 40}" width="52" height="40" fill="#e7e5e4" stroke="var(--ink)" stroke-width="1.5"/><path d="M${x - 30} ${y - 40} L${x} ${y - 60} L${x + 30} ${y - 40}z" fill="#a8a29e" stroke="var(--ink)" stroke-width="1.5"/><rect x="${x + 14}" y="${y - 86}" width="16" height="46" fill="#d6d3d1" stroke="var(--ink)" stroke-width="1.5"/><path d="M${x + 12} ${y - 86} L${x + 22} ${y - 100} L${x + 32} ${y - 86}z" fill="#78716c"/><path d="M${x - 8} ${y} v-16 a8 8 0 0 1 16 0 v16z" fill="#92400e"/><circle cx="${x}" cy="${y - 28}" r="5" fill="#93c5fd" stroke="var(--ink)"/>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "Monumentos y patrimonio",
  minutos: 45,
  objetivos: ["Saber qué es el patrimonio y por qué es de todos", "Distinguir patrimonio natural y patrimonio cultural, material e inmaterial", "Conocer algunos monumentos y lugares Patrimonio de la Humanidad en España", "Saber qué es un museo y cómo comportarse en él", "Proponer acciones para cuidar y proteger el patrimonio"],
  claves: ["patrimonio", "herencia", "patrimonio natural", "patrimonio cultural", "monumento", "patrimonio inmaterial", "tradición", "museo", "UNESCO", "Patrimonio de la Humanidad", "conservar", "restaurar"],
  pregunta: {
    texto: "Los romanos construyeron el acueducto de Segovia hace casi 2.000 años y todavía sigue en pie. Las abuelas enseñan a sus nietos las mismas canciones que ellas aprendieron. ¿Qué tienen en común un monumento antiguo y una canción popular?",
    respuesta: "Los dos son <mark>patrimonio</mark>: una <b>herencia</b> que hemos recibido de las personas que vivieron antes que nosotros. Unas cosas se pueden tocar, como los monumentos; otras no, como las canciones y las fiestas. Es un tesoro de <b>todos</b>, y tenemos que cuidarlo para entregarlo a quienes vengan después.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el patrimonio?</h3><p>El <mark>patrimonio</mark> es el conjunto de <b>bienes</b> que hemos heredado de nuestros antepasados y que tienen un gran valor para todos. La palabra viene de «padre»: es lo que pasa de padres a hijos.</p><p>Igual que una familia guarda con cariño las fotos de los bisabuelos, el anillo de la abuela o una receta especial, un pueblo, un país o toda la humanidad guardan sus tesoros: edificios, obras de arte, paisajes, fiestas, tradiciones, lenguas…</p><p>El patrimonio es importante porque:</p><p>• Nos cuenta nuestra <b>historia</b>: es una fuente para conocer el pasado.<br>• Forma parte de nuestra <b>identidad</b>: nos hace sentir parte de un lugar.<br>• Es <b>bello</b> y nos hace disfrutar.<br>• Atrae a <b>turistas</b> y da trabajo a muchas personas.</p><p>El patrimonio es <b>de todos</b>, aunque algunos edificios tengan dueño. Por eso todos tenemos la responsabilidad de cuidarlo, para que las personas del futuro también puedan disfrutarlo.</p><p>Hay dos grandes tipos de patrimonio: el <b>natural</b> y el <b>cultural</b>.</p>`,
      svg: svg("Dos tipos de patrimonio: natural y cultural", `${tit("El patrimonio")}${monte(64, 120, 70, 60)}${arbol(30, 120, 0.6)}${arbol(98, 120, 0.6)}${castillo(196, 120, 0.8)}${suelo(120)}${et(64, 140, "natural", 70, { size: 11.5, color: COL.verde })}${et(196, 140, "cultural", 70, { size: 11.5, color: COL.morado })}${tx(130, 166, "una herencia que es de todos", 220)}`),
    },
    {
      html: `<h3>El patrimonio natural</h3><p>El <mark>patrimonio natural</mark> está formado por los <b>espacios naturales</b> de gran valor por su belleza, su paisaje, sus plantas, sus animales o sus rocas. No los ha hecho el ser humano, pero sí debe protegerlos.</p><p>Para cuidarlos, muchos de estos lugares se declaran <b>espacios protegidos</b>. El tipo de protección más importante es el de <mark>parque nacional</mark>. En España hay dieciséis, por ejemplo:</p><p>• <b>Doñana</b>, en Andalucía: marismas donde viven miles de aves y el lince ibérico.<br>• El <b>Teide</b>, en Tenerife: el volcán más alto de España.<br>• <b>Picos de Europa</b>, en Asturias, Cantabria y Castilla y León: el primer parque nacional de España, de 1918.<br>• <b>Ordesa y Monte Perdido</b>, en los Pirineos de Aragón.<br>• <b>Garajonay</b>, en La Gomera: un bosque de laurisilva.</p><p>En los espacios protegidos hay normas: no se puede arrancar plantas, molestar a los animales, hacer fuego, salirse de los caminos ni dejar basura. ¡Lo que llevas, te lo traes de vuelta!</p>`,
      svg: svg("Un parque nacional con montaña, bosque, río y animales", `${tit("Patrimonio natural")}${monte(80, 120, 90, 80)}${monte(150, 120, 70, 56)}${arbol(196, 120, 0.7)}${arbol(226, 120, 0.6)}<path d="M10 140 q60 -14 120 0 t120 0" stroke="var(--water)" stroke-width="5" fill="none"/>${suelo(120)}${tx(130, 166, "parques nacionales: Doñana, Teide…", 230)}`),
    },
    {
      html: `<h3>El patrimonio cultural material</h3><p>El <mark>patrimonio cultural</mark> es todo lo que han <b>creado las personas</b> a lo largo de la historia y que tiene un gran valor. Una parte se puede <b>tocar</b>: es el patrimonio <b>material</b>.</p><p>• Los <mark>monumentos</mark>: construcciones importantes por su antigüedad, su belleza o su historia. Por ejemplo, castillos, murallas, catedrales, iglesias, mezquitas, sinagogas, palacios, puentes, acueductos, teatros romanos, ayuntamientos antiguos…<br>• Los <b>conjuntos históricos</b>: barrios o pueblos enteros con calles y casas antiguas bien conservadas.<br>• Los <b>yacimientos arqueológicos</b>: lugares donde se encuentran restos del pasado, como la cueva de <b>Altamira</b>, con pinturas de hace miles de años, o <b>Atapuerca</b>, en Burgos.<br>• Las <b>obras de arte</b> y objetos: cuadros, esculturas, libros antiguos, joyas, herramientas, trajes típicos… Muchos se guardan en los museos.</p><p>Cada monumento nos cuenta algo de las personas que lo construyeron: cómo vivían, en qué creían, cómo se defendían o qué técnicas conocían.</p>`,
      svg: svg("Monumentos: un acueducto romano, un castillo y una iglesia", `${tit("Monumentos")}${acueducto(14, 140, 4, 22)}${castillo(140, 140, 0.7)}${iglesia(214, 140)}${suelo(140)}${et(58, 160, "acueducto", 70, { size: 10, color: COL.marron })}${et(140, 160, "castillo", 60, { size: 10, color: COL.gris })}${et(214, 160, "iglesia", 60, { size: 10, color: COL.morado })}`),
    },
    {
      html: `<h3>El patrimonio cultural inmaterial</h3><p>Hay otra parte del patrimonio cultural que <b>no se puede tocar</b>: es el <mark>patrimonio inmaterial</mark>. Está formado por las <b>tradiciones</b> y los conocimientos que pasan de unas generaciones a otras, muchas veces de forma oral. Por ejemplo:</p><p>• Las <b>fiestas populares</b>: las Fallas de Valencia, los Sanfermines de Pamplona, la Semana Santa, los carnavales, las fiestas del patrón de cada pueblo, los castells (torres humanas) de Cataluña.<br>• La <b>música</b> y los <b>bailes</b> tradicionales: el flamenco, la jota, la muñeira, la sardana.<br>• Las <b>lenguas</b> y sus palabras, los refranes, las leyendas, los cuentos y las canciones infantiles.<br>• La <b>gastronomía</b>: recetas tradicionales como la paella, el gazpacho, la tortilla o el cocido. La dieta mediterránea es patrimonio de la humanidad.<br>• Los <b>oficios tradicionales</b> y la artesanía: cómo se hace la cerámica, el encaje o los cestos.<br>• Los <b>juegos populares</b>: la rayuela, la comba, las canicas.</p><p>Para que este patrimonio no se pierda, hay que <b>practicarlo</b>, enseñarlo a los más jóvenes y participar en él.</p>`,
      svg: svg("Patrimonio inmaterial: fiestas, bailes, recetas, lenguas y juegos", `${tit("Patrimonio inmaterial")}${fichas([["Fiestas", "Fallas, Sanfermines", COL.rojo], ["Bailes", "flamenco, jota", COL.morado], ["Recetas", "paella, gazpacho", COL.naranja], ["Lenguas", "cuentos y refranes", COL.azul], ["Juegos", "rayuela, comba", COL.verde], ["Oficios", "cerámica, cestos", COL.marron]], 2, 34, 0)}`),
    },
    {
      html: `<h3>Patrimonio de la Humanidad</h3><p>Algunos lugares son tan valiosos que no pertenecen solo a un país, sino a <b>toda la humanidad</b>. La <mark>UNESCO</mark>, una organización de las Naciones Unidas que se ocupa de la educación y la cultura, elabora una lista de lugares declarados <mark>Patrimonio de la Humanidad</mark> o Patrimonio Mundial, para protegerlos.</p><p><b>España</b> es uno de los países del mundo con más lugares en esta lista: ¡unos cincuenta! Algunos de ellos son:</p><p>• La <b>Alhambra</b> de Granada, un palacio construido por los musulmanes.<br>• El <b>acueducto</b> y la ciudad vieja de <b>Segovia</b>, de época romana.<br>• La <b>catedral</b> y el camino de <b>Santiago de Compostela</b>.<br>• La <b>Sagrada Familia</b> y otras obras de Gaudí en Barcelona.<br>• La <b>mezquita-catedral</b> de Córdoba.<br>• La <b>cueva de Altamira</b>, en Cantabria.<br>• Las ciudades de <b>Toledo</b>, <b>Salamanca</b>, <b>Cáceres</b> o <b>Ávila</b>, con su muralla.<br>• Espacios naturales como <b>Doñana</b> y el <b>Teide</b>.</p><p>¿Hay algún lugar Patrimonio de la Humanidad cerca de donde vives?</p>`,
      svg: svg("Mapa de España con algunos lugares Patrimonio de la Humanidad", `${tit("Patrimonio de la Humanidad")}<path d="M40 56 L190 50 L222 82 L202 112 L208 136 L156 162 L96 158 L52 140 L36 96z" fill="var(--leaf)" fill-opacity=".3" stroke="#15803d" stroke-width="1.5"/>${[[50, 72, "Santiago", "start", 0, 14], [104, 60, "Altamira", "start", 6, 4], [104, 92, "Segovia", "start", 6, 4], [200, 76, "Barcelona", "end", -6, 4], [100, 112, "Toledo", "start", 6, 4], [96, 136, "Córdoba", "start", 6, 4], [140, 146, "Alhambra", "start", 6, 4]].map(([x, y, s, an, dx, dy]) => `<circle cx="${x}" cy="${y}" r="4" fill="${COL.rojo}"/>${et(x + dx, y + dy, s, 70, { size: 9.5, anchor: an })}`).join("")}${tx(130, 174, "España: unos 50 lugares", 200)}`),
      video: vid("qrxOa3HS24o"),
    },
    {
      html: `<h3>Los museos</h3><p>Un <mark>museo</mark> es un lugar donde se <b>guardan</b>, se <b>cuidan</b>, se <b>estudian</b> y se <b>exponen</b> objetos de gran valor para que todo el mundo pueda verlos y aprender con ellos.</p><p>Hay museos de muchos tipos: de <b>arte</b> (pinturas y esculturas), como el <b>Museo del Prado</b> de Madrid, uno de los más famosos del mundo; de <b>ciencias naturales</b>, con fósiles, minerales y animales; de <b>historia</b> y arqueología; de la <b>ciencia</b> y la tecnología, donde se puede experimentar; del <b>ferrocarril</b>, del <b>juguete</b>, etnográficos (sobre la vida en el campo)…</p><p>En los museos trabajan muchas personas: los <b>conservadores</b> estudian y cuidan las piezas; los <b>restauradores</b> las reparan con mucho cuidado; los <b>guías</b> las explican a los visitantes, y los <b>vigilantes</b> las protegen.</p><p>Normas para visitar un museo:</p><p>• No tocar las obras, salvo que se indique que se puede.<br>• Hablar en voz baja y caminar sin correr.<br>• No comer ni beber en las salas.<br>• No usar el flash al hacer fotos, porque estropea los colores.<br>• Escuchar al guía y preguntar las dudas.</p>`,
      svg: svg("Normas del museo: no tocar, hablar bajo, no correr y sin flash", `${tit("En el museo")}${columna([["no toques las obras", COL.rojo], ["habla en voz baja", COL.azul], ["camina sin correr", COL.verde], ["sin flash en las fotos", COL.morado]], 130, 210, 36, 24, 10)}`),
      video: vid("x6jiM2wqsDI"),
    },
    {
      html: `<h3>Cuidamos el patrimonio</h3><p>El patrimonio puede estropearse por muchas causas:</p><p>• Por el <b>paso del tiempo</b>, la lluvia, el viento, la humedad y los cambios de temperatura.<br>• Por la <b>contaminación</b> del aire, que ennegrece y desgasta las piedras.<br>• Por el <b>abandono</b>: cuando nadie usa ni cuida un edificio, se derrumba.<br>• Por el <b>vandalismo</b>: pintadas, golpes, robos o basura.<br>• Por el exceso de <b>turismo</b> mal organizado.<br>• Por los incendios en los espacios naturales.</p><p>Para protegerlo, las <b>administraciones</b> (ayuntamientos, comunidades autónomas y Estado) aprueban leyes, vigilan y pagan la <mark>restauración</mark>: arreglar los monumentos y las obras de arte con mucho cuidado para que vuelvan a estar como eran, sin cambiarlos.</p><p>Y tú también puedes ayudar a <mark>conservar</mark> el patrimonio:</p><p>• No hagas pintadas ni rayes paredes, árboles o monumentos.<br>• No tires basura ni arranques plantas.<br>• Respeta las normas cuando visites un monumento, un museo o un espacio natural.<br>• Participa en las fiestas y tradiciones de tu localidad.<br>• Aprende y cuenta a otros lo que sabes de tu patrimonio.</p>`,
      svg: svg("Peligros para el patrimonio y cómo cuidarlo", `${tit("Cuidamos lo de todos")}${filas([["peligros", "pintadas, basura, abandono", COL.rojo], ["administraciones", "leyes y restauración", COL.azul], ["tú", "respetar y participar", COL.verde]], 60, 38, { x: 24, wa: 120, wb: 200, dos: true })}`),
    },
    {
      html: `<h3>El patrimonio de mi localidad</h3><p>Todas las localidades tienen patrimonio, aunque sean pequeñas. Puede ser una iglesia o una ermita, una fuente antigua, un puente, un molino, una plaza mayor, unas casas típicas, un lavadero, un árbol centenario, una cueva, una fiesta popular, una receta o un baile.</p><p>Vamos a ser <b>guías turísticos</b> de nuestra localidad:</p><p>1. Entre toda la clase, haced una <b>lista</b> del patrimonio natural y cultural de vuestro pueblo, barrio o ciudad. Preguntad a vuestras familias y buscad en la web del ayuntamiento o en la oficina de turismo.<br>2. Repartid los lugares por grupos. Cada grupo investiga: ¿qué es?, ¿cuándo se hizo o desde cuándo existe?, ¿quién lo hizo?, ¿por qué es importante?, ¿cómo podemos cuidarlo?<br>3. Haced una <b>ficha</b> con un dibujo o una foto y los datos más importantes.<br>4. Con todas las fichas, preparad un <b>folleto turístico</b> o un mapa de la localidad con los lugares señalados.<br>5. Si podéis, haced una <b>ruta</b> por la localidad en la que cada grupo explique su lugar a los demás.</p>`,
      svg: svg("Ficha de un monumento de la localidad con dibujo y datos", `${tit("Ficha del monumento")}<rect x="20" y="34" width="220" height="136" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${iglesia(70, 130)}${["¿Qué es?", "¿Cuándo?", "¿Por qué importa?", "¿Cómo cuidarlo?"].map((s, i) => `${et(116, 58 + i * 26, s, 110, { size: 10, anchor: "start", color: COL.azul })}<path d="M116 ${66 + i * 26} H228" stroke="var(--line)" stroke-dasharray="3 3"/>`).join("")}`),
    },
    {
      html: `<h3>Un museo en la clase</h3><p>Para terminar, vamos a montar nuestro propio <b>museo</b> en el aula. ¡Seremos conservadores, guías y visitantes!</p><p>1. Cada alumno trae de casa, con permiso de la familia, un <b>objeto antiguo</b> o con historia: una foto de los abuelos, una moneda antigua, un juguete viejo, una postal, una herramienta, una prenda tradicional, una receta escrita a mano…<br>2. Escribe una <b>cartela</b>: una tarjeta pequeña con el nombre del objeto, de qué época es, a quién perteneció y para qué servía.<br>3. Colocad los objetos en mesas, agrupados en <b>salas</b>: juguetes, fotos, objetos de la casa, documentos…<br>4. Por turnos, unos alumnos hacen de <b>guías</b> y explican las piezas, y otros, de <b>visitantes</b> que cumplen las normas del museo.<br>5. Invitad a otra clase o a las familias a visitar el museo.</p><p>Así comprobaréis que cada objeto guarda una historia y que todos tenemos un pequeño patrimonio familiar que merece la pena cuidar.</p><p><b>Repaso:</b> una fiesta popular, ¿es patrimonio material o inmaterial? → Inmaterial, porque no se puede tocar.</p>`,
      svg: svg("Mesas de un museo en clase con objetos y cartelas", `${tit("Museo de la clase")}${suelo(150)}<rect x="20" y="110" width="100" height="10" fill="#a16207"/><rect x="140" y="110" width="100" height="10" fill="#a16207"/><rect x="34" y="84" width="24" height="26" fill="#fff" stroke="var(--ink)"/><circle cx="90" cy="100" r="9" fill="#facc15" stroke="var(--ink)"/><path d="M156 110 l10 -26 l10 26z" fill="${COL.rojo}"/><rect x="196" y="90" width="30" height="20" fill="#bfdbfe" stroke="var(--ink)"/>${nino(130, 150, { pose: "brazos", s: 0.55, nina: true })}${tx(130, 172, "cada objeto guarda una historia", 220)}`),
    },
  ],
  figura: {
    titulo: "El patrimonio en ocho ideas",
    svg: rejilla([
      ["Patrimonio", "herencia de todos", COL.morado],
      ["Natural", "paisajes y espacios", COL.verde],
      ["Cultural", "creado por personas", COL.marron],
      ["Monumento", "castillo, iglesia…", COL.gris],
      ["Inmaterial", "fiestas y tradiciones", COL.rojo],
      ["UNESCO", "Patrimonio de la Humanidad", COL.azul],
      ["Museo", "guarda y expone", COL.naranja],
      ["Conservar", "cuidar y restaurar", COL.verde],
    ], 4, 86, "Resumen de monumentos y patrimonio"),
  },
  video: vgen("5OHRVnOeSR0", "patrimonio natural y cultural para niños"),
  ejemplos: [
    { enunciado: "Clasifica: el Teide, la Alhambra y las Fallas.",
      pasos: ["El Teide es un volcán, no lo hizo el ser humano: patrimonio natural.", "La Alhambra es un edificio: patrimonio cultural material.", "Las Fallas son una fiesta, no se pueden tocar: patrimonio cultural inmaterial."],
      resultado: "Natural, cultural material y cultural inmaterial." },
    { enunciado: "El acueducto de Segovia se construyó hacia el año 100. ¿Cuántos años tiene en 2026?",
      pasos: ["Restamos: 2026 − 100.", "2026 − 100 = 1.926."],
      resultado: "Unos 1.926 años: ¡casi dos mil años!" },
    { enunciado: "Ves a alguien haciendo una pintada en la muralla de tu ciudad. ¿Por qué está mal?",
      pasos: ["La muralla es patrimonio cultural, de todos.", "La pintada la estropea y limpiarla cuesta dinero de todos.", "Podría dañar la piedra para siempre."],
      resultado: "Está mal porque daña algo que es de todos y que debemos dejar a los que vengan después." },
  ],
  errores: [
    "Pensar que el patrimonio solo son edificios: también hay paisajes, fiestas, lenguas y recetas.",
    "Creer que el patrimonio inmaterial no se puede perder: si no se practica, desaparece.",
    "Pensar que como un monumento es antiguo da igual estropearlo.",
    "Confundir restaurar (arreglar sin cambiar) con reformar o cambiar el monumento.",
  ],
  ejercicios: [
    { q: "¿Qué es el patrimonio?", sol: "El conjunto de bienes heredados de nuestros antepasados que tienen gran valor para todos." },
    { q: "¿Qué diferencia hay entre patrimonio natural y cultural?", sol: "El natural son espacios de la naturaleza; el cultural es lo creado por las personas." },
    { q: "Escribe el nombre de dos parques nacionales de España.", sol: "Por ejemplo: Doñana, el Teide, Picos de Europa u Ordesa y Monte Perdido." },
    { q: "¿Qué es un monumento? Pon dos ejemplos.", sol: "Una construcción importante por su historia o belleza. Ejemplos: un castillo y una catedral." },
    { q: "¿Qué es el patrimonio inmaterial? Pon dos ejemplos.", sol: "Las tradiciones que no se pueden tocar. Ejemplos: el flamenco y las Fallas." },
    { q: "¿Qué es la UNESCO?", sol: "Una organización de las Naciones Unidas que se ocupa de la educación y la cultura y protege el Patrimonio de la Humanidad." },
    { q: "Escribe tres lugares de España que sean Patrimonio de la Humanidad.", sol: "Por ejemplo: la Alhambra, el acueducto de Segovia y la cueva de Altamira." },
    { q: "¿Para qué sirve un museo?", sol: "Para guardar, cuidar, estudiar y exponer objetos de gran valor." },
    { q: "Escribe tres normas para visitar un museo.", sol: "No tocar las obras, hablar en voz baja y no usar flash." },
    { q: "Escribe tres cosas que puedes hacer para cuidar el patrimonio.", sol: "No hacer pintadas, no tirar basura y respetar las normas en monumentos y espacios naturales." },
  ],
  quiz: [
    { q: "El patrimonio es una…", o: ["herencia de todos", "tienda", "moda nueva"], a: 0, e: "Una herencia de todos." },
    { q: "Un parque nacional es patrimonio…", o: ["natural", "inmaterial", "industrial"], a: 0, e: "Natural." },
    { q: "Un castillo es patrimonio…", o: ["cultural material", "natural", "inmaterial"], a: 0, e: "Cultural material." },
    { q: "Una fiesta popular es patrimonio…", o: ["inmaterial", "natural", "mineral"], a: 0, e: "Inmaterial." },
    { q: "La organización que elige el Patrimonio de la Humanidad es la…", o: ["UNESCO", "AEMET", "DGT"], a: 0, e: "La UNESCO." },
    { q: "La Alhambra está en…", o: ["Granada", "Segovia", "Bilbao"], a: 0, e: "En Granada." },
    { q: "Los romanos construyeron el acueducto de…", o: ["Segovia", "Granada", "Santiago"], a: 0, e: "De Segovia." },
    { q: "Un museo de arte muy famoso de Madrid es el…", o: ["Prado", "Teide", "Doñana"], a: 0, e: "El Museo del Prado." },
    { q: "En un museo no se debe…", o: ["tocar las obras", "escuchar al guía", "caminar despacio"], a: 0, e: "No se deben tocar las obras." },
    { q: "Arreglar un monumento con cuidado sin cambiarlo es…", o: ["restaurar", "derribar", "pintar"], a: 0, e: "Restaurar." },
  ],
  examen: [
    { q: "Las pinturas de hace miles de años están en la cueva de…", o: ["Altamira", "Prado", "Toledo"], a: 0, e: "Altamira, en Cantabria." },
    { q: "El primer parque nacional de España fue…", o: ["Picos de Europa", "Doñana", "Garajonay"], a: 0, e: "Picos de Europa, en 1918." },
    { q: "La persona que repara obras de arte es el…", o: ["restaurador", "vigilante", "visitante"], a: 0, e: "El restaurador." },
    { q: "Para que el patrimonio inmaterial no se pierda hay que…", o: ["practicarlo y enseñarlo", "olvidarlo", "guardarlo en un cajón"], a: 0, e: "Practicarlo y enseñarlo." },
  ],
  feynman: ["Qué es el patrimonio y por qué es de todos", "Los tipos de patrimonio con ejemplos", "Cómo podemos cuidar el patrimonio"],
  mapa: mapa("EL PATRIMONIO", "var(--pri)", [
    ["Natural", "parques nacionales", COL.verde],
    ["Cultural", "monumentos · arte", COL.marron],
    ["Inmaterial", "fiestas · bailes", COL.rojo],
    ["Cuidarlo", "museos · restaurar", COL.azul],
  ], 250),
  tarjetas: [
    ["Patrimonio", "Herencia de gran valor que es de todos."],
    ["Patrimonio natural", "Espacios naturales valiosos."],
    ["Monumento", "Construcción importante por su historia o belleza."],
    ["Patrimonio inmaterial", "Tradiciones que no se pueden tocar."],
    ["UNESCO", "Protege el Patrimonio de la Humanidad."],
    ["Museo", "Guarda y expone objetos valiosos."],
    ["Restaurar", "Arreglar con cuidado sin cambiar."],
    ["Conservar", "Cuidar para que dure."],
  ],
  familias: ["Visitad juntos un monumento o un museo de vuestra zona.", "Enseñad a vuestro hijo o hija una receta, una canción o un juego tradicional de la familia.", "Buscad qué lugares Patrimonio de la Humanidad hay en vuestra comunidad.", "Elegid un objeto antiguo de la familia para el museo de la clase y contad su historia."],
  profesores: PROF("Ciencias Sociales: el patrimonio como herencia colectiva; patrimonio natural y espacios protegidos; patrimonio cultural material e inmaterial; la UNESCO y el Patrimonio de la Humanidad en España; los museos; conservación, restauración y responsabilidad ciudadana", ["Museo de la clase con objetos familiares.", "Folleto turístico del patrimonio de la localidad.", "Ruta guiada por el barrio explicada por los alumnos."]),
  fuentes: [RD, wiki("Patrimonio cultural", "Patrimonio cultural"), wiki("Patrimonio de la Humanidad en España", "Anexo:Patrimonio de la Humanidad en España"), wiki("Parques nacionales de España", "Parques nacionales de España")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir iglesias románicas y góticas", "Conocer maravillas del patrimonio mundial", "Descubrir el Camino de Santiago", "Comprender por qué el patrimonio puede estar en peligro"],
  lectura: { titulo: "La catedral que arde", html: `<p>Un día de abril de 2019, la madre de Lucas lo llamó desde el salón.</p><p>—Ven, mira las noticias.</p><p>En la pantalla se veía una enorme iglesia de piedra con el tejado envuelto en llamas. Una columna de humo naranja subía hacia el cielo de París.</p><p>—Es Notre-Dame —dijo su madre—. Una catedral gótica de hace más de ochocientos años.</p><p>Miles de personas miraban desde las calles. Muchas lloraban. Los bomberos trabajaron toda la noche para salvar las torres y las vidrieras de colores. Al final, la aguja del tejado se derrumbó, pero la estructura principal resistió.</p><p>—¿Por qué está tan triste la gente si no es su casa? —preguntó Lucas.</p><p>—Porque es un tesoro de todos —explicó su madre—. Lo construyeron personas de hace muchos siglos y lo han cuidado generación tras generación.</p><p>Durante cinco años, cientos de artesanos trabajaron para restaurarla: carpinteros, canteros, vidrieros, pintores… Usaron técnicas antiguas, como las de la Edad Media.</p><p>En diciembre de 2024, Notre-Dame volvió a abrir sus puertas. Lucas lo vio en la tele y sonrió. Ahora entendía que el patrimonio es como una herencia que hay que cuidar entre todos.</p>` },
  tras: {
    "El patrimonio cultural material": [
      ["Iglesias románicas y góticas", `<p>En la Edad Media se construyeron en España muchas iglesias y catedrales en dos estilos muy diferentes:</p><p><b>El románico</b>:</p><ul><li>Muros <b>gruesos</b> de piedra y ventanas <b>pequeñas</b>, por eso el interior es oscuro.</li><li>Arcos <b>redondos</b>, de medio punto.</li><li>Edificios bajos y sólidos, como fortalezas.</li><li>Ejemplos: las iglesias del valle de Boí, en Lleida, o San Martín de Frómista, en Palencia.</li></ul><p><b>El gótico</b>, que llegó después:</p><ul><li>Edificios muy <b>altos</b>, que parecen subir hacia el cielo.</li><li>Arcos <b>apuntados</b>, terminados en punta.</li><li>Grandes <b>vidrieras</b> de colores que llenan el interior de luz.</li><li>Ejemplos: las catedrales de León, Burgos y Toledo.</li></ul><p>Para reconocerlos, fíjate en los arcos y en las ventanas: redondos y pequeñas, románico; en punta y enormes, gótico.</p>`,
        H6.dos("Estilos", ["ROMÁNICO", ["arcos redondos", "muros gruesos", "poca luz"], cNA], ["GÓTICO", ["arcos en punta", "muy altos", "vidrieras"], cAZ]), ["Pd_AVElSRG0", "ARTE GÓTICO para niños 🏰 Arquitectura, vidrieras y esculturas de la Edad Media 🎨", "Smile and Learn - Español", 186361]],
    ],
    "Patrimonio de la Humanidad": [
      ["Maravillas del mundo", `<p>Hay monumentos tan impresionantes que se conocen en todo el planeta. Algunos de los más famosos son:</p><ul><li>Las <b>pirámides de Egipto</b>, construidas hace más de 4.500 años como tumbas de los faraones. La Gran Pirámide es la única de las siete maravillas antiguas que sigue en pie.</li><li>La <b>Gran Muralla China</b>, una muralla de miles de kilómetros que protegía el imperio chino.</li><li><b>Machu Picchu</b>, una ciudad de los incas en lo alto de las montañas de Perú.</li><li>El <b>Taj Mahal</b>, en la India, un palacio funerario de mármol blanco que un emperador construyó en memoria de su esposa.</li><li>El <b>Coliseo</b> de Roma, donde se celebraban espectáculos en la época de los romanos.</li><li><b>Chichén Itzá</b>, en México, con su pirámide escalonada de los mayas.</li></ul><p>Todos ellos son Patrimonio de la Humanidad y reciben millones de visitantes cada año.</p>`,
        L6.filas("Maravillas", [["pirámides", "Egipto", cNA], ["Gran Muralla", "China", cRO], ["Machu Picchu", "Perú", cVE], ["Taj Mahal", "India", cAZ]]), ["Fi0pcVQJx5Y", "LAS 7 MARAVILLAS DEL MUNDO MODERNO | Draw My Life", "TikTak Draw", 1057590]],
    ],
  },
  final: [
    ["El Camino de Santiago", `<p>El <mark>Camino de Santiago</mark> es una ruta que recorren a pie, en bicicleta o a caballo miles de personas cada año para llegar a la catedral de <b>Santiago de Compostela</b>, en Galicia.</p><ul><li>Se hace desde la Edad Media, hace más de mil años. Las personas que lo recorren se llaman <b>peregrinos</b>.</li><li>Hay muchos caminos: el Camino Francés, que entra por los Pirineos, el del Norte, junto a la costa, o el Portugués.</li><li>El símbolo del Camino es la <b>concha de vieira</b>. Unas flechas amarillas pintadas en paredes y piedras indican la ruta.</li><li>Los peregrinos llevan una credencial que sellan en los albergues, iglesias y bares por los que pasan.</li></ul><p>A lo largo del Camino nacieron pueblos, puentes, hospitales e iglesias románicas y góticas. Por eso es Patrimonio de la Humanidad.</p><p>Hoy lo recorren personas de todo el mundo, por fe, por deporte o por conocer paisajes y gente.</p>`,
      H6.rueda("Camino", "SANTIAGO", [["peregrinos", cAZ], ["concha", cNA], ["flechas", cRO], ["credencial", cVE]]), ["_5wBpqi3rYg", "Todo sobre el CAMINO DE SANTIAGO 🚶‍♀️🚶‍♂️ | En 8 minutos ⏰", "ProfeDeELE.es", 241109]],
    ["Patrimonio en peligro", `<p>El patrimonio puede <mark>dañarse</mark> o incluso desaparecer por muchas causas:</p><ul><li><b>Incendios</b>, como el de la catedral de Notre-Dame de París en 2019.</li><li><b>Terremotos</b> e <b>inundaciones</b>.</li><li>El <b>paso del tiempo</b>: la lluvia, la humedad y el viento desgastan la piedra.</li><li>La <b>contaminación</b> del aire ennegrece y estropea las fachadas.</li><li>Las <b>guerras</b>, que han destruido ciudades y monumentos enteros.</li><li>El <b>vandalismo</b>: pintadas, golpes o robos.</li><li>El <b>exceso de visitantes</b>, que puede desgastar suelos y pinturas.</li></ul><p>Para protegerlo, la Unesco tiene una lista de patrimonio en peligro y ayuda a los países a salvarlo. Los gobiernos pagan restauraciones y ponen normas, como limitar las visitas o prohibir hacer fotos con flash.</p><p>Y tú también puedes ayudar: respetando las normas en los monumentos, sin tocar ni pintar, y contando a los demás por qué es importante cuidarlos.</p>`,
      H6.flujo("Proteger", ["peligro|fuego", "Unesco|lista", "restaurar|artesanos", "respetar|todos"], cRO)],
  ],
  ejemplos: [
    ["Una iglesia tiene arcos redondos y ventanas pequeñas. ¿Qué estilo es?", ["Los arcos redondos son de medio punto.", "Muros gruesos y poca luz son del románico."], "Románico."],
    ["¿Qué indica una flecha amarilla en un camino de Galicia?", ["Es la señal del Camino de Santiago.", "Muestra la ruta a los peregrinos."], "La ruta del Camino."],
  ],
  errores: ["Confundir románico y gótico: fíjate en los arcos.", "Pensar que el patrimonio dura para siempre sin cuidados."],
  ejercicios: [
    ["b", "¿Cómo son los arcos góticos?", "Apuntados, en punta."],
    ["b", "¿Dónde están las pirámides más famosas?", "En Egipto."],
    ["b", "¿Cuál es el símbolo del Camino de Santiago?", "La concha de vieira."],
    ["b", "¿Cómo se llaman quienes recorren el Camino?", "Peregrinos."],
    ["b", "Di un peligro para el patrimonio.", "Incendios, guerras, contaminación…"],
    ["m", "¿Por qué las iglesias románicas son oscuras?", "Tienen ventanas pequeñas."],
    ["m", "Di una catedral gótica de España.", "León, Burgos o Toledo."],
    ["m", "¿Quiénes construyeron Machu Picchu?", "Los incas."],
    ["m", "¿Por qué no se pueden hacer fotos con flash en algunos museos?", "La luz puede estropear las obras."],
    ["m", "¿Qué se sella en la credencial del peregrino?", "Los lugares por los que pasa."],
    ["a", "Dibuja un arco románico y uno gótico.", "Respuesta abierta."],
    ["a", "Investiga una maravilla del mundo y haz una ficha.", "Respuesta abierta."],
    ["a", "Escribe normas para visitar un monumento.", "Respuesta abierta."],
    ["a", "En la lectura, ¿cuándo volvió a abrir Notre-Dame?", "En diciembre de 2024."],
  ],
  quiz: [
    ["Las grandes vidrieras son típicas del…", ["gótico", "románico", "arte romano"], "Estilos."],
    ["El Taj Mahal está en…", ["la India", "China", "Egipto"], "Maravillas."],
    ["El Camino de Santiago termina en…", ["Galicia", "Andalucía", "Cataluña"], "Camino."],
    ["La única maravilla antigua que sigue en pie es…", ["la Gran Pirámide", "el Coliseo", "Machu Picchu"], "Maravillas."],
    ["La contaminación del aire…", ["ennegrece las fachadas", "limpia la piedra", "no afecta"], "Peligro."],
  ],
  examen: [
    ["En la lectura, ¿en qué ciudad está Notre-Dame?", ["París", "Roma", "Londres"], "Lectura."],
    ["San Martín de Frómista es una iglesia…", ["románica", "gótica", "moderna"], "Estilos."],
  ],
  tarjetas: [
    ["Románico y gótico", "Arcos redondos y oscuridad; arcos en punta y vidrieras."],
    ["Maravillas", "Pirámides, Gran Muralla, Machu Picchu, Taj Mahal, Coliseo."],
    ["Camino de Santiago", "Peregrinos, concha, flechas amarillas y credencial."],
    ["Patrimonio en peligro", "Fuego, tiempo, guerras, vandalismo; Unesco y restauración."],
  ],
  glosario: [
    ["Románico", "Estilo de muros gruesos y arcos redondos."],
    ["Gótico", "Estilo de edificios altos y arcos apuntados."],
    ["Vidriera", "Ventana de cristales de colores."],
    ["Catedral", "Iglesia principal de una ciudad."],
    ["Pirámide", "Construcción con base cuadrada y caras triangulares."],
    ["Faraón", "Rey del antiguo Egipto."],
    ["Peregrino", "Persona que viaja a un lugar sagrado."],
    ["Credencial", "Documento que sellan los peregrinos."],
    ["Albergue", "Lugar donde duermen los peregrinos."],
    ["Vandalismo", "Destrozos hechos a propósito."],
    ["Restaurar", "Reparar algo antiguo con cuidado."],
    ["Unesco", "Organización que protege el patrimonio mundial."],
  ],
  situacion: {
    titulo: "Guardianes del patrimonio",
    reto: "La clase prepara una guía de monumentos y una campaña para protegerlos.",
    pasos: ["Buscar iglesias románicas o góticas cercanas y clasificarlas.", "Preparar fichas de maravillas del mundo.", "Dibujar en un mapa los caminos de Santiago.", "Crear carteles con normas para cuidar el patrimonio."],
    producto: "Una guía ilustrada y carteles de campaña.",
    evaluacion: ["Distingue románico y gótico.", "Conoce maravillas del mundo.", "Explica el Camino de Santiago.", "Propone cómo proteger el patrimonio."],
  },
});
