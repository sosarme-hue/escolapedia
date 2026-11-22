// Ciencias Sociales 4º de Primaria: la Prehistoria. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, linea, vid, vgen, RD, PROF, sol, suelo, arbol, monte } = require("./_pri4b");

// Figura humana sencilla de estilo rupestre.
const cazador = (x, y, c = "#9a3412") => `<g stroke="${c}" stroke-width="3" stroke-linecap="round" fill="none"><circle cx="${x}" cy="${y - 34}" r="4" fill="${c}"/><path d="M${x} ${y - 30} V${y - 14} M${x} ${y - 14} L${x - 7} ${y} M${x} ${y - 14} L${x + 7} ${y} M${x} ${y - 26} L${x + 10} ${y - 20} M${x} ${y - 26} L${x - 8} ${y - 32}"/><path d="M${x - 14} ${y - 38} L${x + 16} ${y - 14}" stroke-width="2"/></g>`;
// Animal rupestre (bisonte esquemático).
const bisonte = (x, y, c = "#b45309") => `<g fill="${c}"><ellipse cx="${x}" cy="${y - 14}" rx="22" ry="11"/><circle cx="${x + 20}" cy="${y - 18}" r="7"/><path d="M${x - 14} ${y - 6} V${y + 2} M${x - 6} ${y - 6} V${y + 2} M${x + 6} ${y - 6} V${y + 2} M${x + 14} ${y - 6} V${y + 2}" stroke="${c}" stroke-width="3"/><path d="M${x + 22} ${y - 25} q4 -4 2 -8" stroke="${c}" stroke-width="2" fill="none"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "La Prehistoria",
  minutos: 45,
  objetivos: ["Entender qué es la historia, cómo se mide el tiempo y cuáles son sus etapas", "Saber qué es la Prehistoria y cómo la conocemos", "Describir la vida en el Paleolítico, el Neolítico y la Edad de los Metales", "Conocer restos prehistóricos de la península ibérica", "Valorar el patrimonio prehistórico"],
  claves: ["historia", "Prehistoria", "fuentes históricas", "arqueología", "Paleolítico", "nómada", "Neolítico", "sedentario", "agricultura", "ganadería", "Edad de los Metales", "pintura rupestre", "megalito"],
  pregunta: {
    texto: "Hace miles de años nadie sabía escribir. Entonces, ¿cómo sabemos cómo vivían, qué comían o cómo cazaban las personas de la Prehistoria?",
    respuesta: "Gracias a los <mark>restos</mark> que dejaron: huesos, herramientas de piedra, cerámica, pinturas en las cuevas, restos de hogueras y de casas. Los <b>arqueólogos</b> los buscan excavando con mucho cuidado y los estudian como si fueran detectives. Cada objeto es una pista sobre cómo vivían.",
  },
  bloques: [
    {
      html: `<h3>La historia y el tiempo</h3><p>La <mark>historia</mark> estudia cómo han vivido las personas desde que aparecieron en la Tierra hasta hoy: cómo eran sus casas, qué comían, en qué trabajaban, cómo se organizaban y qué les pasó.</p><p>Para medir el tiempo histórico usamos estas unidades:</p><p>• Un <b>año</b> son 365 días.<br>• Una <b>década</b> son 10 años.<br>• Un <mark>siglo</mark> son 100 años. Los siglos se escriben con números romanos: estamos en el siglo XXI.<br>• Un <b>milenio</b> son 1.000 años.</p><p>En nuestra cultura, los años se cuentan a partir del nacimiento de Cristo, que es el año 1. Los años anteriores se escriben con <b>a. C.</b> (antes de Cristo) y los posteriores con <b>d. C.</b> (después de Cristo), aunque estos últimos casi nunca se escriben. Cuidado: en los años antes de Cristo, cuanto mayor es el número, más antiguo es. El año 3000 a. C. es más antiguo que el 500 a. C.</p><p>Para ordenar los hechos se usa la <mark>línea del tiempo</mark>, en la que se colocan los acontecimientos de izquierda a derecha, del más antiguo al más reciente.</p><p>Truco para saber el siglo: quita las dos últimas cifras del año y súmale 1. El año 1492 está en el siglo XV (14 + 1).</p>`,
      svg: svg("Línea del tiempo con años antes y después de Cristo", `${tit("La línea del tiempo")}${linea([["3000 a. C.", "más antiguo", COL.marron], ["500 a. C.", "", COL.naranja], ["año 1", "nace Cristo", COL.rojo], ["1492", "siglo XV", COL.azul], ["hoy", "siglo XXI", COL.verde]], { y: 96 })}`),
    },
    {
      html: `<h3>Las etapas de la historia</h3><p>Para estudiarla mejor, la historia se divide en grandes <b>etapas</b> o edades. Cada una empieza y termina con un acontecimiento muy importante:</p><p>• La <mark>Prehistoria</mark>: desde la aparición del ser humano hasta la invención de la <b>escritura</b>, hace unos 5.000 años (hacia el 3000 a. C.). Es la etapa más larga con muchísima diferencia.<br>• La <b>Edad Antigua</b>: desde la invención de la escritura hasta la caída del Imperio romano de Occidente, en el año 476.<br>• La <b>Edad Media</b>: desde el año 476 hasta el descubrimiento de América, en 1492.<br>• La <b>Edad Moderna</b>: desde 1492 hasta la Revolución francesa, en 1789.<br>• La <b>Edad Contemporánea</b>: desde 1789 hasta hoy.</p><p>¿Por qué la escritura marca el final de la Prehistoria? Porque, desde que existe, tenemos <b>documentos escritos</b> que nos cuentan lo que pasó. Antes, solo tenemos objetos y restos.</p><p>Para que te hagas una idea: si toda la historia humana durase un día entero, la Prehistoria ocuparía casi las 24 horas, y todas las demás edades juntas solo los últimos minutos antes de medianoche.</p>`,
      svg: svg("Las cinco edades de la historia", `${tit("Edades de la historia")}${columna([["Prehistoria: hasta la escritura", COL.marron], ["Edad Antigua: hasta el 476", COL.naranja], ["Edad Media: hasta 1492", COL.rojo], ["Edad Moderna: hasta 1789", COL.morado], ["Edad Contemporánea: hasta hoy", COL.azul]], 130, 220, 32, 22, 6)}`),
    },
    {
      html: `<h3>¿Cómo conocemos la Prehistoria?</h3><p>Lo que sabemos del pasado lo conocemos gracias a las <mark>fuentes históricas</mark>: todo aquello que nos da información sobre cómo vivían las personas. Pueden ser:</p><p>• <b>Fuentes escritas</b>: libros, cartas, leyes, inscripciones… No existen en la Prehistoria.<br>• <b>Fuentes materiales</b>: objetos y restos, como herramientas, huesos, cerámica, armas, joyas, construcciones o pinturas.<br>• <b>Fuentes orales</b>: lo que las personas cuentan de palabra.<br>• <b>Fuentes gráficas</b>: dibujos, mapas, fotografías…</p><p>Para estudiar la Prehistoria se usan sobre todo las fuentes materiales. Los científicos que las buscan y estudian son los <mark>arqueólogos</mark>. Trabajan en los <b>yacimientos</b>, lugares donde hay restos enterrados. Excavan muy despacio, con pinceles y pequeñas paletas, y anotan dónde aparece cada objeto. Después, en el laboratorio, averiguan su edad y para qué servía.</p><p>También ayudan los <b>paleontólogos</b>, que estudian los fósiles de seres vivos, y los <b>antropólogos</b>, que estudian cómo eran los cuerpos de aquellas personas.</p><p>Los objetos más valiosos se guardan en los <b>museos</b>, como el Museo Arqueológico Nacional, en Madrid.</p>`,
      svg: svg("Un arqueólogo excava un yacimiento con cuidado", `${tit("El yacimiento")}<rect x="20" y="96" width="220" height="70" fill="${COL.marron}" fill-opacity=".25"/><path d="M20 96 H240" stroke="${COL.marron}" stroke-width="2"/><path d="M20 120 H240 M20 144 H240" stroke="${COL.marron}" stroke-opacity=".4" stroke-dasharray="6 4"/><path d="M60 132 l12 -4 l-2 10z" fill="${COL.gris}"/><ellipse cx="150" cy="150" rx="16" ry="5" fill="#f5f5f4" stroke="${COL.gris}"/><path d="M196 128 a8 6 0 1 0 16 0z" fill="${COL.naranja}"/><rect x="100" y="56" width="8" height="40" fill="${COL.marron}"/><path d="M96 92 h16 l-8 8z" fill="${COL.gris}"/>${et(66, 116, "herramienta", 70, { size: 9.5, weight: 400 })}${et(150, 140, "hueso", 50, { size: 9.5, weight: 400 })}${et(204, 116, "cerámica", 60, { size: 9.5, weight: 400 })}${tx(170, 70, "excavar despacio", 100, { weight: 700 })}`),
    },
    {
      html: `<h3>El Paleolítico</h3><p>El <mark>Paleolítico</mark> es la primera y la más larga etapa de la Prehistoria. Su nombre significa «piedra antigua», porque las herramientas se hacían golpeando unas piedras con otras para sacarles filo. Duró desde la aparición de los primeros seres humanos, hace más de dos millones de años, hasta hace unos 10.000 años.</p><p>Así vivían las personas del Paleolítico:</p><p>• Eran <mark>nómadas</mark>: no vivían siempre en el mismo sitio, sino que se desplazaban siguiendo a los animales y buscando alimento.<br>• Conseguían la comida <b>cazando</b> animales, <b>pescando</b> y <b>recolectando</b> frutos, raíces y semillas silvestres.<br>• Vivían en <b>cuevas</b>, bajo rocas o en <b>cabañas</b> que se podían montar y desmontar, hechas con ramas y pieles.<br>• Formaban pequeños grupos llamados <b>clanes</b>, de familias emparentadas.<br>• Fabricaban herramientas de piedra, hueso y madera: hachas de mano, puntas de lanza, raspadores, agujas.<br>• Se vestían con <b>pieles</b> de animales.</p><p>Un gran descubrimiento fue el del <mark>fuego</mark>: les daba calor, luz, protección frente a los animales y les permitía cocinar los alimentos.</p><p>En aquella época hubo largos periodos muy fríos, las glaciaciones, en los que vivían mamuts, rinocerontes lanudos y osos de las cavernas.</p>`,
      svg: svg("Un cazador del Paleolítico persigue a un bisonte", `${tit("Paleolítico")}${suelo(150)}${cazador(60, 150)}${bisonte(170, 150)}<path d="M216 150 l6 -14 l6 14z" fill="${COL.naranja}"/><path d="M219 142 l3 -8 l3 8z" fill="${COL.sol}"/>${et(60, 168, "cazador nómada", 100, { size: 10 })}${et(170, 168, "bisonte", 60, { size: 10 })}${et(222, 130, "fuego", 40, { size: 9.5, color: COL.naranja })}`),
      video: vid("HGoK_cWIMH4"),
    },
    {
      html: `<h3>El arte del Paleolítico</h3><p>Las personas del Paleolítico fueron los primeros artistas. Su arte más famoso son las <mark>pinturas rupestres</mark>, que pintaban en las paredes y techos de las cuevas.</p><p>• Pintaban sobre todo <b>animales</b>: bisontes, caballos, ciervos, toros, cabras. También signos y manos, apoyando la mano en la pared y soplando pintura alrededor.<br>• Usaban pocos colores: rojo, negro, amarillo y marrón. Los conseguían mezclando <b>minerales</b> molidos, carbón o tierra con grasa animal.<br>• Pintaban con los dedos, con plumas, con pelos o soplando a través de huesos huecos.<br>• Aprovechaban los <b>bultos de la roca</b> para dar volumen a los animales.</p><p>Nadie sabe con seguridad por qué pintaban. Quizá era un ritual para tener suerte en la caza, o una forma de contar historias.</p><p>En España tenemos una de las cuevas más famosas del mundo: la <mark>cueva de Altamira</mark>, en Cantabria. Su techo, lleno de bisontes pintados en rojo y negro, es tan impresionante que la llaman «la Capilla Sixtina del arte rupestre». Hay otras en Cantabria, Asturias o el País Vasco, como Tito Bustillo o Ekain.</p><p>También tallaban pequeñas <b>figuras</b> de piedra, hueso o marfil.</p>`,
      svg: svg("Pintura rupestre de animales en la pared de una cueva", `${tit("Pintura rupestre")}<path d="M10 36 Q130 20 250 36 V172 H10z" fill="#d6b88c" fill-opacity=".45"/>${bisonte(70, 100, "#b91c1c")}${bisonte(170, 140, "#292524")}<g fill="#b91c1c" fill-opacity=".7"><path d="M200 60 h6 v-10 h3 v10 h3 v-12 h3 v12 h3 v-9 h3 v14 q-2 10 -12 10 q-9 0 -9 -10z"/></g>${et(130, 168, "Altamira (Cantabria)", 140, { size: 10.5 })}`),
    },
    {
      html: `<h3>El Neolítico</h3><p>Hace unos 10.000 años, el clima se volvió más templado y las personas hicieron dos descubrimientos que cambiaron su vida para siempre: la <mark>agricultura</mark> y la <mark>ganadería</mark>. Empezaba el <b>Neolítico</b>, que significa «piedra nueva», porque ahora las herramientas de piedra se <b>pulían</b> hasta dejarlas lisas y muy afiladas.</p><p>Los grandes cambios del Neolítico fueron:</p><p>• Aprendieron a <b>cultivar</b> plantas como el trigo, la cebada o las lentejas, y a <b>domesticar</b> animales como ovejas, cabras, cerdos y vacas. Ya no dependían solo de la caza.<br>• Se volvieron <mark>sedentarios</mark>: como tenían que cuidar los campos, se quedaban a vivir siempre en el mismo sitio.<br>• Construyeron los primeros <b>poblados</b>, con casas de barro, piedra y madera, junto a los ríos y las tierras fértiles.<br>• Inventaron la <b>cerámica</b>, recipientes de barro cocido para guardar y cocinar los alimentos.<br>• Aprendieron a <b>tejer</b> lana y lino para hacer telas.<br>• Empezó el <b>comercio</b>: cambiaban lo que les sobraba por otros productos. Es el trueque.</p><p>Como había más comida, la población creció. Y aparecieron oficios: agricultores, pastores, alfareros, tejedores.</p>`,
      svg: svg("Poblado del Neolítico con casas, campo de trigo y animales", `${tit("Neolítico")}${suelo(150)}${[50, 100].map((x) => `<rect x="${x - 18}" y="116" width="36" height="34" fill="${COL.marron}" fill-opacity=".45"/><path d="M${x - 24} 118 L${x} 92 L${x + 24} 118z" fill="${COL.sol}" fill-opacity=".8"/>`).join("")}${[150, 160, 170, 180, 190].map((x) => `<path d="M${x} 150 V128" stroke="${COL.sol}" stroke-width="2"/><ellipse cx="${x}" cy="126" rx="2.5" ry="5" fill="${COL.sol}"/>`).join("")}<ellipse cx="226" cy="138" rx="12" ry="8" fill="#e7e5e4" stroke="${COL.gris}"/><circle cx="238" cy="134" r="4" fill="#e7e5e4" stroke="${COL.gris}"/>${et(75, 168, "poblado", 70, { size: 10 })}${et(170, 168, "agricultura", 70, { size: 10, color: COL.naranja })}${et(228, 120, "oveja", 40, { size: 9.5 })}`),
      video: vid("OR1p2xgNptM"),
    },
    {
      html: `<h3>La Edad de los Metales</h3><p>La última etapa de la Prehistoria es la <mark>Edad de los Metales</mark>. Empezó hace unos 6.000 años, cuando las personas aprendieron a <b>fundir</b> los metales: los calentaban en hornos hasta que se volvían líquidos y los echaban en moldes para darles forma.</p><p>Se divide en tres etapas, según el metal que se usaba más:</p><p>• La <b>Edad del Cobre</b>: el primer metal que se trabajó. Es blando, así que servía para adornos y algunas herramientas.<br>• La <b>Edad del Bronce</b>: el bronce es una mezcla de cobre y estaño, mucho más duro. Se hacían armas, herramientas y joyas.<br>• La <b>Edad del Hierro</b>: el hierro es el metal más duro y resistente, y abundaba más. Se hicieron arados, hachas, espadas…</p><p>Con los metales llegaron muchos cambios:</p><p>• Aparecieron nuevos <b>oficios</b>, como el de herrero, y el <b>comercio</b> creció mucho, porque no todos los lugares tenían metales.<br>• Se inventaron la <b>rueda</b>, el <b>arado</b> tirado por animales y la <b>vela</b> para los barcos.<br>• Los poblados crecieron y se rodearon de <b>murallas</b> para defenderse.<br>• Aparecieron grupos <b>con más poder</b> y riqueza, como los jefes y los guerreros.</p><p>Cuando se inventó la escritura, terminó la Prehistoria.</p>`,
      svg: svg("Los metales de la Edad de los Metales: cobre, bronce y hierro", `${tit("Edad de los Metales")}${flujo([["Cobre", COL.naranja], ["Bronce", COL.sol], ["Hierro", COL.gris]], 56, 40, 14, 232)}${tx(130, 120, "bronce = cobre + estaño", 220, { weight: 700 })}${tx(130, 144, "rueda · arado · murallas · comercio", 230)}`),
    },
    {
      html: `<h3>Monumentos megalíticos</h3><p>Al final del Neolítico y durante la Edad de los Metales, las personas construyeron monumentos con <b>piedras enormes</b>, que pesaban muchas toneladas. Se llaman <mark>megalitos</mark>, que significa «piedras grandes».</p><p>Hay tres tipos principales:</p><p>• El <b>menhir</b>: una gran piedra alargada clavada de pie en el suelo.<br>• El <b>dolmen</b>: varias piedras verticales cubiertas por una gran losa horizontal, como una mesa gigante. Eran <b>tumbas</b> colectivas, donde se enterraba a varias personas con sus objetos.<br>• El <b>crómlech</b>: un conjunto de menhires colocados en círculo.</p><p>¿Cómo movían esas piedras sin máquinas? Probablemente usando troncos como rodillos, cuerdas, rampas de tierra y la fuerza de muchas personas trabajando juntas. Esto demuestra que estaban bien organizados.</p><p>En España hay megalitos muy importantes. Los <b>dólmenes de Antequera</b>, en Málaga, son Patrimonio de la Humanidad; el de Menga es uno de los más grandes de Europa. También hay muchos en Galicia, el País Vasco, Extremadura y Cataluña.</p><p>En Baleares se conservan construcciones de piedra de la Edad del Bronce: los <b>talayots</b>, unas torres, y las <b>taulas</b>, enormes piedras en forma de letra T.</p>`,
      svg: svg("Tipos de megalitos: menhir, dolmen y crómlech", `${tit("Megalitos")}${suelo(146)}<rect x="30" y="76" width="22" height="70" rx="8" fill="${COL.gris}"/><rect x="100" y="98" width="14" height="48" fill="${COL.gris}"/><rect x="140" y="98" width="14" height="48" fill="${COL.gris}"/><rect x="92" y="84" width="70" height="16" rx="4" fill="${COL.gris}"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="${190 + i * 12}" y="${114 + (i % 2) * 4}" width="9" height="${32 - (i % 2) * 4}" rx="3" fill="${COL.gris}"/>`).join("")}${et(41, 162, "menhir", 60, { size: 10.5 })}${et(127, 162, "dolmen", 60, { size: 10.5 })}${et(214, 162, "crómlech", 60, { size: 10.5 })}`),
    },
    {
      html: `<h3>La Prehistoria en la península ibérica</h3><p>En la península ibérica vivieron seres humanos desde hace muchísimo tiempo. Tenemos algunos de los yacimientos más importantes del mundo:</p><p>• <mark>Atapuerca</mark>, en Burgos. En sus cuevas se han encontrado restos de algunos de los primeros europeos, de hace más de un millón de años. Es Patrimonio de la Humanidad y se sigue excavando cada verano.<br>• La <b>cueva de Altamira</b>, en Cantabria, con sus famosas pinturas del Paleolítico.<br>• El <b>arte levantino</b>, en abrigos rocosos de la costa mediterránea, como Cogul (Lleida) o Valltorta (Castellón). A diferencia de Altamira, pinta escenas con muchas personas pequeñas cazando, recolectando miel o bailando.<br>• Los <b>dólmenes de Antequera</b>, en Málaga.<br>• <b>Los Millares</b>, en Almería, un gran poblado de la Edad del Cobre rodeado de murallas.<br>• <b>El Argar</b>, en Almería, una cultura de la Edad del Bronce.</p><p>Estos lugares forman parte de nuestro <mark>patrimonio</mark>: son una herencia de todos que debemos <b>conservar</b>. Por eso no se pueden tocar las pinturas, ni llevarse piedras de un yacimiento. Muchas cuevas, como Altamira, tienen una <b>réplica</b> exacta para que los visitantes puedan verlas sin estropear la original.</p>`,
      svg: svg("Yacimientos prehistóricos de la península en el mapa", `${tit("Yacimientos en España")}<path d="M38 52 L72 40 L120 44 L168 50 L204 56 L222 70 L206 92 L196 118 L176 140 L146 156 L110 162 L84 150 L60 156 L40 140 L46 116 L34 96 L30 72z" fill="${COL.verde}" fill-opacity=".15" stroke="${COL.verde}" stroke-width="2"/>${[[104, 50, "Altamira", COL.rojo], [126, 74, "Atapuerca", COL.marron], [110, 150, "Antequera", COL.gris], [170, 140, "Los Millares", COL.naranja], [196, 80, "Cogul", COL.morado]].map(([x, y, n, c]) => `<circle cx="${x}" cy="${y}" r="4.5" fill="${c}"/>${et(x, y - 8, n, 70, { size: 9.5, color: c })}`).join("")}`),
    },
  ],
  figura: {
    titulo: "La Prehistoria en ocho ideas",
    svg: rejilla([
      ["Prehistoria", "hasta la escritura", COL.marron],
      ["Fuentes", "restos materiales", COL.gris],
      ["Paleolítico", "nómadas, cazan", COL.naranja],
      ["Fuego", "calor, luz, cocinar", COL.rojo],
      ["Arte rupestre", "Altamira", COL.morado],
      ["Neolítico", "agricultura, sedentarios", COL.verde],
      ["Metales", "cobre, bronce, hierro", COL.sol],
      ["Megalitos", "menhir, dolmen", COL.azul],
    ], 4, 86, "Resumen de la Prehistoria"),
  },
  video: vgen("XQrZ7giSLxI", "la Prehistoria para niños"),
  ejemplos: [
    { enunciado: "¿En qué siglo está el año 1789?",
      pasos: ["Quitamos las dos últimas cifras: 17.", "Sumamos 1: 17 + 1 = 18."],
      resultado: "Siglo XVIII." },
    { enunciado: "¿Qué es más antiguo, el año 4000 a. C. o el 2500 a. C.?",
      pasos: ["Antes de Cristo, cuanto mayor es el número, más lejos está.", "4.000 es mayor que 2.500."],
      resultado: "El 4000 a. C." },
    { enunciado: "Un grupo cultiva trigo, tiene ovejas y vasijas de barro. ¿En qué etapa vive?",
      pasos: ["Agricultura y ganadería empiezan en el Neolítico.", "La cerámica también es del Neolítico."],
      resultado: "En el Neolítico." },
  ],
  errores: [
    "Pensar que las personas convivieron con los dinosaurios: los dinosaurios desaparecieron millones de años antes.",
    "Confundir nómada (se desplaza) con sedentario (vive siempre en el mismo lugar).",
    "Creer que en el Paleolítico ya había agricultura: empezó en el Neolítico.",
    "Pensar que el bronce es un metal puro: es una mezcla de cobre y estaño.",
    "Equivocarse con los años antes de Cristo: el 3000 a. C. es más antiguo que el 1000 a. C.",
  ],
  ejercicios: [
    { q: "¿Cuántos años hay en un siglo? ¿Y en un milenio?", sol: "100 años; 1.000 años." },
    { q: "Escribe en orden las cinco edades de la historia.", sol: "Prehistoria, Edad Antigua, Edad Media, Edad Moderna y Edad Contemporánea." },
    { q: "¿Qué hecho marca el final de la Prehistoria?", sol: "La invención de la escritura." },
    { q: "¿Qué hace un arqueólogo?", sol: "Busca, excava y estudia los restos materiales del pasado en los yacimientos." },
    { q: "Escribe tres características de la vida en el Paleolítico.", sol: "Eran nómadas, cazaban y recolectaban, vivían en cuevas, usaban piedra tallada, descubrieron el fuego." },
    { q: "¿Qué pintaban en las cuevas y con qué?", sol: "Sobre todo animales y manos, con pigmentos minerales, carbón y grasa." },
    { q: "¿Por qué las personas se hicieron sedentarias en el Neolítico?", sol: "Porque al cultivar tenían que quedarse cerca de sus campos." },
    { q: "Ordena los metales por su aparición: hierro, cobre, bronce.", sol: "Cobre, bronce, hierro." },
    { q: "Explica qué es un dolmen y para qué servía.", sol: "Piedras verticales cubiertas por una losa; eran tumbas colectivas." },
    { q: "¿Por qué es importante Atapuerca?", sol: "Allí se han encontrado restos de algunos de los primeros europeos, de hace más de un millón de años." },
  ],
  quiz: [
    { q: "Un siglo son…", o: ["10 años", "100 años", "1.000 años"], a: 1, e: "100 años." },
    { q: "La Prehistoria termina con…", o: ["la escritura", "el fuego", "la rueda"], a: 0, e: "La escritura." },
    { q: "En el Paleolítico las personas eran…", o: ["nómadas", "sedentarias", "agricultoras"], a: 0, e: "Nómadas." },
    { q: "«Paleolítico» significa…", o: ["piedra nueva", "piedra antigua", "metal antiguo"], a: 1, e: "Piedra antigua." },
    { q: "La cueva de Altamira está en…", o: ["Burgos", "Cantabria", "Málaga"], a: 1, e: "Cantabria." },
    { q: "La agricultura comenzó en el…", o: ["Paleolítico", "Neolítico", "siglo XV"], a: 1, e: "Neolítico." },
    { q: "La cerámica se inventó en el…", o: ["Neolítico", "Paleolítico", "Edad Media"], a: 0, e: "Neolítico." },
    { q: "El bronce es una mezcla de cobre y…", o: ["hierro", "estaño", "oro"], a: 1, e: "Estaño." },
    { q: "Una piedra grande clavada de pie es un…", o: ["dolmen", "menhir", "talayot"], a: 1, e: "Menhir." },
    { q: "El yacimiento de Atapuerca está en…", o: ["Burgos", "Almería", "Asturias"], a: 0, e: "Burgos." },
  ],
  examen: [
    { q: "El año 1492 está en el siglo…", o: ["XIV", "XV", "XVI"], a: 1, e: "Siglo XV." },
    { q: "Las escenas con muchas personas pequeñas cazando son del arte…", o: ["levantino", "románico", "de Altamira"], a: 0, e: "Arte levantino." },
    { q: "Las taulas y talayots están en…", o: ["Baleares", "Canarias", "Galicia"], a: 0, e: "Baleares." },
    { q: "La rueda y el arado aparecen en la…", o: ["Edad de los Metales", "Paleolítico", "Edad Contemporánea"], a: 0, e: "Edad de los Metales." },
  ],
  feynman: ["Cómo se mide el tiempo y en qué edades se divide la historia", "Cómo vivían las personas en el Paleolítico y qué cambió en el Neolítico", "Qué novedades trajeron los metales y qué restos prehistóricos hay en España"],
  mapa: mapa("LA PREHISTORIA", "var(--pri)", [
    ["Paleolítico", "nómadas · caza · fuego", COL.naranja],
    ["Neolítico", "agricultura · poblados", COL.verde],
    ["Metales", "cobre · bronce · hierro", COL.sol],
    ["En España", "Atapuerca · Altamira", COL.marron],
  ], 250),
  tarjetas: [
    ["Siglo", "Periodo de 100 años."],
    ["Prehistoria", "Etapa desde los primeros humanos hasta la escritura."],
    ["Arqueólogo", "Científico que estudia los restos del pasado."],
    ["Nómada", "Que no vive siempre en el mismo lugar."],
    ["Sedentario", "Que vive siempre en el mismo lugar."],
    ["Pintura rupestre", "Pintura en las paredes de las cuevas."],
    ["Bronce", "Mezcla de cobre y estaño."],
    ["Dolmen", "Tumba de grandes piedras con una losa encima."],
  ],
  familias: ["Visitad un museo arqueológico o la réplica de una cueva.", "Haced juntos una línea del tiempo de la familia con los años de nacimiento.", "Probad a pintar un animal como en Altamira con tierra, agua y los dedos.", "Buscad si hay algún yacimiento o dolmen cerca de vuestra localidad."],
  profesores: PROF("Ciencias Sociales: el tiempo histórico y su medida; las edades de la historia; fuentes históricas; la Prehistoria: Paleolítico, Neolítico y Edad de los Metales; restos prehistóricos de la península ibérica", ["Línea del tiempo gigante en el pasillo con las edades.", "Simulación de excavación arqueológica en un cajón de arena.", "Taller de pintura rupestre con pigmentos naturales."]),
  fuentes: [RD, { t: "Museo Nacional y Centro de Investigación de Altamira", url: "https://www.culturaydeporte.gob.es/mnaltamira/" }, wiki("Prehistoria", "Prehistoria"), wiki("Prehistoria en la península ibérica", "Prehistoria_en_la_península_ibérica")],
  revisado: REV,
};

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Valorar la importancia del dominio del fuego", "Conocer Altamira y Atapuerca como patrimonio de la humanidad", "Descubrir cómo vivía Ötzi en la Edad del Cobre", "Comprender cómo trabajan los arqueólogos"],
  lectura: { titulo: "¡Papá, mira, toros!", html: `<p>Era el verano de 1879. Marcelino Sanz de Sautuola, un señor aficionado a la historia, excavaba el suelo de una cueva cerca de Santillana del Mar, en Cantabria. Buscaba huesos y herramientas de piedra.</p><p>Con él había ido su hija <b>María</b>, que tenía ocho años. Mientras su padre trabajaba agachado, María se aburría y se adentró con una vela en una sala baja de la cueva. Levantó la vista hacia el techo y se quedó con la boca abierta.</p><p>—¡Papá, mira, toros pintados! —gritó.</p><p>Marcelino corrió hacia ella. En el techo había decenas de bisontes rojos y negros, tan bien pintados que parecían moverse con la luz temblorosa de la vela.</p><p>Era la cueva de <b>Altamira</b>. Marcelino estaba seguro de que aquellas pinturas eran de la Prehistoria, pero muchos expertos no le creyeron. Decían que eran demasiado bonitas para haberlas hecho «hombres primitivos» y le acusaron de falsificarlas.</p><p>Marcelino murió sin que le dieran la razón. Años después se descubrieron otras cuevas pintadas en Francia, y los expertos tuvieron que reconocer su error.</p><p>Hoy Altamira es Patrimonio de la Humanidad, y todo empezó con la mirada curiosa de una niña.</p>` },
  tras: {
    "El Paleolítico": [
      ["El dominio del fuego", `<p>Uno de los mayores descubrimientos de la humanidad fue aprender a <mark>controlar el fuego</mark>. Al principio, las personas aprovechaban el fuego que producían los rayos o los incendios y lo mantenían encendido con mucho cuidado. Más tarde aprendieron a <b>encenderlo</b> ellas mismas:</p><ul><li><b>Por frotamiento</b>: haciendo girar muy deprisa un palo sobre una madera seca hasta que salía humo y una brasa.</li><li><b>Por percusión</b>: golpeando dos piedras, como el sílex y la pirita, para sacar chispas sobre hierba seca.</li></ul><p>El fuego cambió la vida de los grupos humanos:</p><ul><li>Daba <b>calor</b> en los inviernos fríos de las glaciaciones.</li><li>Daba <b>luz</b> en las cuevas y por la noche.</li><li>Servía para <b>cocinar</b> los alimentos, que así eran más fáciles de masticar y digerir.</li><li><b>Protegía</b> de los animales salvajes.</li><li>Servía para endurecer la punta de las lanzas de madera.</li></ul><p>Además, alrededor de la hoguera la gente se reunía, compartía comida y seguramente se contaba historias. El fuego ayudó a que los grupos estuvieran más unidos.</p>`,
        H6.rueda("El fuego", "FUEGO", [["calor", cRO], ["luz", cNA], ["cocinar", cMO], ["protección", cAZ]])],
    ],
    "El arte del Paleolítico": [
      ["Altamira, la «Capilla Sixtina» del arte rupestre", `<p>La cueva de <mark>Altamira</mark>, en Santillana del Mar (Cantabria), es una de las cuevas con pinturas prehistóricas más famosas del mundo. Por su belleza la llaman «la Capilla Sixtina del arte rupestre».</p><p>Sus pinturas tienen entre <b>36 000 y 13 000 años</b>. La sala más famosa es el <b>techo de los polícromos</b>, con una manada de bisontes pintados en rojo, negro y ocre. Los artistas:</p><ul><li>Aprovechaban los <b>bultos de la roca</b> para dar volumen a los animales.</li><li>Usaban colores de <b>minerales</b> (óxido de hierro, carbón) mezclados con grasa animal.</li><li>Pintaban con los dedos, con pinceles de pelo o soplando el color.</li><li>Se iluminaban con <b>lámparas de piedra</b> que quemaban grasa.</li></ul><p>Altamira fue declarada <b>Patrimonio de la Humanidad</b> en 1985, junto con otras cuevas del norte de España, como El Castillo o Tito Bustillo.</p><p>Para protegerla, la cueva original apenas se puede visitar: el calor y la respiración de los visitantes estropeaban las pinturas. Por eso se construyó al lado una <b>réplica exacta</b>, la Neocueva, en el Museo de Altamira, donde cualquiera puede ver cómo era.</p>`,
        L6.filas("Altamira", [["dónde", "Cantabria", cVE], ["antigüedad", "hasta 36 000 años", cNA], ["animal estrella", "el bisonte", cRO], ["Patrimonio", "desde 1985", cAZ]]), ["OaG7dM-9tSA", "Altamira, la cueva animada", "Museo de Altamira", 209842]],
    ],
    "La Edad de los Metales": [
      ["Ötzi, el hombre del hielo", `<p>En 1991, dos excursionistas que caminaban por los <b>Alpes</b>, en la frontera entre Italia y Austria, encontraron un cuerpo atrapado en el hielo. Pensaron que era un montañero perdido, pero resultó ser algo asombroso: una persona que había muerto hace unos <mark>5300 años</mark>, en la <b>Edad del Cobre</b>. Lo llamaron <b>Ötzi</b>.</p><p>El hielo lo había conservado tan bien que los científicos pudieron estudiar cómo vivía:</p><ul><li>Llevaba un <b>hacha de cobre</b> con mango de madera, un cuchillo de sílex, un arco y flechas.</li><li>Vestía ropa de <b>cuero y pieles</b> de distintos animales, un gorro de piel de oso y zapatos rellenos de hierba para no pasar frío.</li><li>Tenía <b>tatuajes</b>: más de sesenta pequeñas rayas en la piel.</li><li>Su última comida fue carne de cabra montés y cereales.</li><li>Llevaba un pequeño botiquín con un hongo medicinal.</li></ul><p>Los científicos descubrieron también una punta de flecha clavada en su hombro: probablemente murió por un ataque.</p><p>Hoy Ötzi se conserva en un museo de Bolzano, en Italia, en una cámara fría que imita las condiciones del glaciar.</p>`,
        L6.filas("Ötzi", [["hallazgo", "1991, Alpes", cAZ], ["antigüedad", "unos 5300 años", cNA], ["época", "Edad del Cobre", cMO], ["llevaba", "hacha de cobre", cRO]])],
    ],
  },
  final: [
    ["Atapuerca, una ventana al pasado", `<p>En la <b>sierra de Atapuerca</b>, cerca de Burgos, hay uno de los yacimientos prehistóricos más importantes del mundo. Sus cuevas guardan restos de seres humanos de distintas épocas, desde hace más de <mark>un millón de años</mark>.</p><p>Algunos hallazgos famosos:</p><ul><li>En la <b>Sima del Elefante</b> se encontró un trozo de mandíbula de hace 1,2 millones de años, uno de los restos humanos más antiguos de Europa.</li><li>En la <b>Gran Dolina</b> apareció una especie humana nueva, el <b>Homo antecessor</b>, que significa «el que fue antes».</li><li>En la <b>Sima de los Huesos</b> se han encontrado miles de huesos de unas treinta personas de hace unos 430 000 años, antepasados de los neandertales.</li></ul><p>Atapuerca es <b>Patrimonio de la Humanidad</b> desde el año 2000. Cada verano llegan decenas de científicos que excavan con muchísima paciencia, centímetro a centímetro.</p><p>En Burgos se puede visitar el <b>Museo de la Evolución Humana</b>, y en el propio yacimiento hay talleres donde se aprende a hacer fuego, tallar piedra o lanzar con propulsor como en la Prehistoria.</p>`,
      L6.filas("Atapuerca", [["Sima del Elefante", "1,2 millones años", cRO], ["Gran Dolina", "Homo antecessor", cNA], ["Sima de los Huesos", "430 000 años", cMO], ["Patrimonio", "desde 2000", cAZ]]), ["BmFqB5nFaXk", "Descubre con Tadeo: Atapuerca", "TadeoJonesOficial", 179497]],
    ["Cómo trabaja un arqueólogo", `<p>Los <mark>arqueólogos</mark> son los científicos que estudian el pasado a partir de los restos materiales. Su trabajo es parecido al de un detective.</p><p>Las fases de una excavación son:</p><ol><li><b>Prospección</b>: buscan un lugar donde puede haber restos, observando el terreno, fotos aéreas o noticias de hallazgos.</li><li><b>Excavación</b>: dividen el terreno en cuadrículas con cuerdas y retiran la tierra capa a capa con paletas, pinceles e incluso cepillos de dientes.</li><li><b>Registro</b>: antes de sacar cada objeto, lo fotografían, lo dibujan y anotan exactamente dónde estaba.</li><li><b>Laboratorio</b>: limpian, estudian y datan los restos.</li></ol><p>Las capas de tierra se llaman <b>estratos</b>. Normalmente, las capas de abajo son más antiguas y las de arriba más recientes, como las hojas de un periódico que se van apilando día a día.</p><p>Muchas veces lo más valioso no es un objeto bonito, sino pequeños detalles: semillas quemadas que dicen qué comían, huesos con marcas de corte o polen que dice cómo era el paisaje.</p><p>Si alguna vez encuentras algo que parece antiguo, no lo muevas: avisa al ayuntamiento. Es patrimonio de todos.</p>`,
      H6.flujo("Excavación", ["buscar|el lugar", "excavar|por capas", "registrar|cada resto", "analizar|los restos"], cNA)],
  ],
  ejemplos: [
    ["En una excavación aparece una punta de flecha en el estrato 1 (arriba) y una de sílex tallado en el estrato 4 (abajo). ¿Cuál es más antigua?", ["Las capas de abajo son más antiguas.", "El estrato 4 está debajo."], "La del estrato 4."],
    ["Ötzi murió hace unos 5300 años. Si estamos en 2026, ¿en qué siglo aproximado vivió?", ["5300 − 2026 = 3274 años antes de Cristo.", "Del 3300 al 3201 a. C. es el siglo XXXIII a. C."], "Hacia el siglo XXXIII antes de Cristo."],
  ],
  errores: ["Pensar que las personas del Paleolítico eran incapaces de hacer arte bello.", "Creer que los arqueólogos buscan tesoros para quedárselos."],
  ejercicios: [
    ["b", "Escribe dos formas de encender fuego en la Prehistoria.", "Frotamiento y percusión."],
    ["b", "¿En qué comunidad autónoma está Altamira?", "En Cantabria."],
    ["b", "¿Qué animal es el más famoso de Altamira?", "El bisonte."],
    ["b", "¿Dónde se encontró a Ötzi?", "En los Alpes, entre Italia y Austria."],
    ["b", "¿Cerca de qué ciudad está Atapuerca?", "Burgos."],
    ["m", "Escribe cuatro ventajas del fuego.", "Calor, luz, cocinar, protección."],
    ["m", "¿Por qué se construyó una réplica de Altamira?", "Para proteger las pinturas originales."],
    ["m", "¿Qué metal era su hacha? ¿En qué etapa vivió?", "Cobre; Edad del Cobre."],
    ["m", "¿Qué significa Homo antecessor?", "El que fue antes."],
    ["m", "¿Qué es un estrato?", "Una capa de tierra."],
    ["a", "Imagina que eres María en Altamira y escribe tu diario de ese día.", "Respuesta abierta."],
    ["a", "Haz una ficha de Ötzi con dibujos de su equipo.", "Respuesta abierta."],
    ["a", "Simula una excavación en una caja con arena y objetos.", "Respuesta abierta."],
    ["a", "Busca un yacimiento prehistórico de tu comunidad.", "Respuesta abierta."],
  ],
  quiz: [
    ["El fuego por percusión se hacía…", ["golpeando piedras", "frotando hojas", "con agua"], "Fuego."],
    ["Altamira es Patrimonio de la Humanidad desde…", ["1985", "1879", "2010"], "Altamira."],
    ["Ötzi vivió en la…", ["Edad del Cobre", "Edad Media", "Edad Moderna"], "Ötzi."],
    ["En Atapuerca se descubrió el…", ["Homo antecessor", "Homo romanus", "Homo modernus"], "Atapuerca."],
    ["Las capas de abajo de una excavación son…", ["más antiguas", "más modernas", "iguales"], "Arqueología."],
  ],
  examen: [
    ["En la lectura, ¿quién descubrió las pinturas de Altamira?", ["una niña llamada María", "un pastor", "un rey"], "Lectura."],
    ["Los arqueólogos registran cada resto…", ["antes de sacarlo", "después de venderlo", "nunca"], "Arqueología."],
  ],
  tarjetas: [
    ["Fuego", "Frotamiento y percusión; calor, luz, cocina y protección."],
    ["Altamira", "Cantabria; bisontes polícromos; Patrimonio desde 1985."],
    ["Ötzi", "Hombre de hielo de los Alpes, 5300 años, Edad del Cobre."],
    ["Atapuerca", "Burgos; Homo antecessor; restos de más de un millón de años."],
  ],
  glosario: [
    ["Yacimiento", "Lugar donde hay restos del pasado."],
    ["Arqueólogo", "Científico que estudia el pasado por sus restos."],
    ["Estrato", "Capa de tierra de una excavación."],
    ["Sílex", "Piedra dura que se tallaba para hacer herramientas."],
    ["Pintura rupestre", "Pintura hecha en paredes de cuevas o rocas."],
    ["Polícromo", "De varios colores."],
    ["Réplica", "Copia exacta de algo."],
    ["Glaciación", "Época de mucho frío en la Tierra."],
    ["Homo antecessor", "Especie humana descubierta en Atapuerca."],
    ["Momia", "Cuerpo que se ha conservado sin descomponerse."],
    ["Patrimonio de la Humanidad", "Lugar de valor protegido por la UNESCO."],
    ["Propulsor", "Herramienta para lanzar lanzas más lejos."],
  ],
  situacion: {
    titulo: "Museo de la Prehistoria",
    reto: "La clase monta un museo de la Prehistoria con réplicas hechas por los alumnos.",
    pasos: ["Repartid salas: Paleolítico, Neolítico, Metales, Altamira, Atapuerca.", "Fabricad réplicas: pinturas rupestres, herramientas, vasijas.", "Escribid cartelas explicativas para cada objeto.", "Haced de guías para las familias u otros cursos."],
    producto: "Un museo de aula con réplicas y cartelas.",
    evaluacion: ["Sitúa cada objeto en su etapa.", "Elabora réplicas cuidadas.", "Redacta cartelas con información correcta.", "Explica oralmente el contenido."],
  },
});
