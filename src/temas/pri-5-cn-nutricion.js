// Ciencias de la Naturaleza 5º de Primaria: la función de nutrición en el ser humano. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF, corazon } = require("./_pri5b");

// Silueta de persona (cabeza y tronco) para situar órganos.
const tronco = (x = 70) => `<circle cx="${x}" cy="44" r="16" fill="#f3c9a1"/><path d="M${x - 34} 170 V92 q0 -30 34 -30 q34 0 34 30 V170" fill="#f3c9a1" fill-opacity=".45" stroke="var(--line)" stroke-width="2"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La función de nutrición en el ser humano",
  minutos: 50,
  objetivos: ["Explicar qué es la función de nutrición y para qué sirve", "Describir el recorrido de los alimentos por el aparato digestivo", "Explicar cómo respiramos y qué ocurre en los pulmones", "Conocer el corazón, los vasos sanguíneos y la sangre", "Saber cómo el aparato excretor elimina los desechos", "Relacionar los cuatro aparatos que participan en la nutrición"],
  claves: ["nutrición", "nutrientes", "digestión", "aparato digestivo", "intestino delgado", "respiración", "pulmones", "alvéolos", "corazón", "arterias", "venas", "sangre", "riñones", "orina", "sudor"],
  pregunta: {
    texto: "Esta mañana has desayunado un vaso de leche y una tostada con tomate. ¿Cómo llega esa tostada hasta la punta del dedo gordo de tu pie?",
    respuesta: "Primero el <b>aparato digestivo</b> la deshace en partículas diminutas llamadas <mark>nutrientes</mark>. Después los nutrientes pasan a la <b>sangre</b>, y el <b>aparato circulatorio</b> los lleva a todas las células, también a las del dedo del pie, junto con el oxígeno que han tomado los <b>pulmones</b>. Los desechos que se producen se eliminan con el <b>aparato excretor</b>. Todo ese trabajo en equipo es la <mark>función de nutrición</mark>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la función de nutrición?</h3><p>Todas las células de tu cuerpo necesitan dos cosas para vivir: <b>nutrientes</b>, que obtenemos de los alimentos, y <b>oxígeno</b>, que obtenemos del aire. Con ellos consiguen la <b>energía</b> para funcionar y los <b>materiales</b> para crecer y repararse cuando sufren una herida.</p><p>La <mark>función de nutrición</mark> es el conjunto de procesos que llevan los nutrientes y el oxígeno a todas las células y eliminan los desechos que estas producen. En ella trabajan en equipo <b>cuatro aparatos</b>:</p><p>• El <b>aparato digestivo</b> transforma los alimentos en nutrientes.<br>• El <b>aparato respiratorio</b> toma el oxígeno del aire y expulsa el dióxido de carbono.<br>• El <b>aparato circulatorio</b> reparte los nutrientes y el oxígeno por todo el cuerpo y recoge los desechos.<br>• El <b>aparato excretor</b> limpia la sangre y expulsa los desechos.</p><p>Si uno de ellos falla, los demás no pueden hacer bien su trabajo. Es como una cadena de montaje: cada eslabón es necesario.</p>`,
      svg: svg("Los cuatro aparatos de la nutrición y lo que hace cada uno", `${tit("Cuatro aparatos en equipo")}${fichas([["Digestivo", "alimentos → nutrientes", COL.naranja], ["Respiratorio", "toma oxígeno", COL.azul], ["Circulatorio", "reparte por el cuerpo", COL.rojo], ["Excretor", "expulsa desechos", COL.sol]])}`),
    },
    {
      html: `<h3>Nutrirse no es lo mismo que alimentarse</h3><p>A veces usamos las palabras <b>alimentación</b> y <b>nutrición</b> como si fueran iguales, pero no lo son.</p><p>La <mark>alimentación</mark> es elegir los alimentos, prepararlos y comérnoslos. Es algo <b>voluntario</b>: tú decides si comes una manzana o un bollo.</p><p>La <mark>nutrición</mark> es lo que hace el cuerpo con esos alimentos después de comerlos: digerirlos, absorber los nutrientes, llevarlos a las células y usarlos. Es <b>involuntaria</b>: ocurre sola, aunque estés dormido.</p><p>Los alimentos contienen distintos <b>nutrientes</b>:</p>${tabla(["Nutriente", "Para qué sirve", "Dónde está"], [["Hidratos de carbono", "dan energía rápida", "pan, pasta, arroz, patatas"], ["Grasas", "dan energía de reserva", "aceite, mantequilla, frutos secos"], ["Proteínas", "construyen y reparan el cuerpo", "carne, pescado, huevos, legumbres"], ["Vitaminas y minerales", "regulan el funcionamiento", "frutas, verduras, leche"], ["Agua", "transporta sustancias", "agua y casi todos los alimentos"]])}<p>Para estar sano hay que comer <b>variado</b>, así el cuerpo recibe de todo.</p>`,
      svg: svg("Diferencia entre alimentación, que es voluntaria, y nutrición, que es involuntaria", `${tit("Alimentarse y nutrirse")}${cj2(14, 44, 110, 64, "Alimentación", "elijo y como", COL.verde)}${cj2(136, 44, 110, 64, "Nutrición", "el cuerpo lo usa", COL.azul)}${fl(124, 76, 136, 76, "var(--muted)", 2)}${tx(69, 126, "voluntaria", 110, { weight: 700, color: COL.verde })}${tx(191, 126, "involuntaria", 110, { weight: 700, color: COL.azul })}${tx(130, 158, "Comer variado = recibir todos los nutrientes", 236)}`),
      video: vid("nj168qvxJzg"),
    },
    {
      html: `<h3>El aparato digestivo</h3><p>El <mark>aparato digestivo</mark> está formado por el <b>tubo digestivo</b>, un tubo de unos 8 metros de largo que va de la boca al ano, y por unas <b>glándulas</b> que fabrican jugos para deshacer la comida.</p><p>Las partes del tubo digestivo son: <b>boca</b>, <b>faringe</b>, <b>esófago</b>, <b>estómago</b>, <b>intestino delgado</b>, <b>intestino grueso</b> y <b>ano</b>.</p><p>Las glándulas son las <b>glándulas salivales</b> (fabrican la saliva), el <b>hígado</b> (fabrica la bilis, que ayuda a deshacer las grasas) y el <b>páncreas</b> (fabrica el jugo pancreático).</p><p>¿Cómo cabe un tubo de 8 metros dentro de tu barriga? Porque el intestino delgado está muy plegado, como una manguera enrollada. Solo él mide unos 6 o 7 metros en una persona adulta.</p>`,
      svg: svg("Aparato digestivo: boca, esófago, estómago, intestino delgado, intestino grueso, hígado", `${tit("Aparato digestivo")}${tronco(70)}<path d="M70 58 V96" stroke="#e8892c" stroke-width="5"/><path d="M66 96 q-4 18 18 20 q18 0 16 -16 q-4 -10 -16 -6" fill="#fdba74" stroke="#c2410c" stroke-width="2"/><path d="M52 92 q-14 4 -12 16 q10 6 22 -4z" fill="#a16207"/><rect x="44" y="124" width="52" height="40" rx="10" fill="none" stroke="#c2410c" stroke-width="5"/><path d="M54 134 q8 8 16 0 q8 -8 16 0 M54 150 q8 8 16 0 q8 -8 16 0" stroke="#fdba74" stroke-width="4" fill="none"/>
        ${[["boca", 46, COL.rojo], ["esófago", 74, COL.naranja], ["estómago", 102, COL.naranja], ["hígado", 120, COL.marron], ["int. delgado", 142, COL.sol], ["int. grueso", 164, COL.rojo]].map(([s, y, c]) => `<circle cx="134" cy="${y - 4}" r="4" fill="${c}"/>${et(196, y, s, 104, { size: 11, color: c })}`).join("")}`),
    },
    {
      html: `<h3>El viaje de los alimentos: la digestión</h3><p>La <mark>digestión</mark> es la transformación de los alimentos en nutrientes. Sigamos el viaje de un bocado:</p><p>1. <b>Boca</b>: los dientes lo trituran y la saliva lo humedece. La lengua lo mueve y forma una bola blanda, el <b>bolo alimenticio</b>, que tragamos.</p><p>2. <b>Esófago</b>: es un tubo con músculos que empuja el bolo hasta el estómago. Tarda unos segundos.</p><p>3. <b>Estómago</b>: es una bolsa muscular que se mueve y mezcla el bolo con los <b>jugos gástricos</b>. Al cabo de unas horas se convierte en una papilla llamada <b>quimo</b>.</p><p>4. <b>Intestino delgado</b>: la bilis y el jugo pancreático terminan de deshacer el quimo. Aquí ocurre lo más importante, la <mark>absorción</mark>: los nutrientes atraviesan la pared del intestino y pasan a la sangre. Su pared tiene millones de pliegues diminutos, las <b>vellosidades intestinales</b>, que aumentan muchísimo la superficie.</p><p>5. <b>Intestino grueso</b>: absorbe el agua de los restos que no se han podido aprovechar, que forman las <b>heces</b> y salen por el <b>ano</b>.</p>`,
      svg: svg("Etapas de la digestión: boca, esófago, estómago, intestino delgado e intestino grueso", `${tit("El viaje de un bocado")}${columna([["boca: masticar y saliva", COL.rojo], ["esófago: tragar", COL.naranja], ["estómago: quimo", COL.sol], ["int. delgado: absorción", COL.verde], ["int. grueso: heces", COL.marron]], 130, 210, 32, 20, 9)}`),
      video: vid("_jbw0FxnaQE"),
    },
    {
      html: `<h3>El aparato respiratorio</h3><p>El <mark>aparato respiratorio</mark> toma el oxígeno del aire y expulsa el dióxido de carbono que producen las células. Sus partes son:</p><p>• Las <b>fosas nasales</b>: el aire entra por la nariz, donde se calienta, se humedece y se limpia gracias a los pelillos y al moco. Por eso es mejor respirar por la nariz que por la boca.</p><p>• La <b>faringe</b> y la <b>laringe</b>: en la laringe están las <b>cuerdas vocales</b>, que vibran al hablar.</p><p>• La <b>tráquea</b>: un tubo con anillos de cartílago que no se aplasta.</p><p>• Los <b>bronquios</b>: la tráquea se divide en dos bronquios, uno para cada pulmón, que se ramifican en tubos cada vez más finos, los <b>bronquiolos</b>.</p><p>• Los <b>pulmones</b>: dos órganos esponjosos protegidos por las costillas. Al final de cada bronquiolo hay unos saquitos llamados <mark>alvéolos pulmonares</mark>, rodeados de vasos sanguíneos muy finos.</p><p>Debajo de los pulmones está el <b>diafragma</b>, un músculo en forma de cúpula que ayuda a respirar.</p>`,
      svg: svg("Aparato respiratorio: nariz, tráquea, bronquios, pulmones y diafragma", `${tit("Aparato respiratorio")}${tronco(70)}<path d="M70 54 V94" stroke="#0369a1" stroke-width="5"/><path d="M70 94 L56 104 M70 94 L84 104" stroke="#0369a1" stroke-width="4"/><path d="M60 92 q-26 4 -24 44 q2 14 22 10 q8 -20 2 -54z" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/><path d="M80 92 q26 4 24 44 q-2 14 -22 10 q-8 -20 -2 -54z" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/><path d="M36 154 q34 -16 68 0" stroke="var(--red)" stroke-width="3" fill="none"/>
        ${[["fosas nasales", 46, COL.azul], ["tráquea", 78, COL.azul], ["bronquios", 102, COL.azul], ["pulmones", 128, COL.rojo], ["diafragma", 156, COL.rojo]].map(([s, y, c]) => `<circle cx="134" cy="${y - 4}" r="4" fill="${c}"/>${et(196, y, s, 104, { size: 11, color: c })}`).join("")}`),
      video: vid("tMLFFKof29o"),
    },
    {
      html: `<h3>Cómo respiramos</h3><p>La respiración tiene dos movimientos que repetimos unas 15 o 20 veces por minuto sin darnos cuenta:</p><p>• <mark>Inspiración</mark>: el diafragma baja y las costillas se abren. Los pulmones se hinchan como un globo y el aire <b>entra</b>.</p><p>• <mark>Espiración</mark>: el diafragma sube y las costillas vuelven a su sitio. Los pulmones se encogen y el aire <b>sale</b>.</p><p>Lo más importante ocurre en los <b>alvéolos</b>. Allí se produce el <mark>intercambio de gases</mark>: el <b>oxígeno</b> del aire atraviesa la pared del alvéolo y pasa a la sangre, y el <b>dióxido de carbono</b> que trae la sangre pasa al alvéolo para salir al exterior al espirar.</p><p>Por eso el aire que expulsamos tiene menos oxígeno y más dióxido de carbono que el que tomamos. Si soplas con una pajita en un vaso de agua con un poco de col lombarda cocida, verás que el agua cambia de color: es el dióxido de carbono que sale de tus pulmones.</p><p>Para cuidar el aparato respiratorio: no fumes, ventila las habitaciones, haz ejercicio al aire libre y tápate la boca con el codo al toser.</p>`,
      svg: svg("Inspiración con diafragma abajo y espiración con diafragma arriba; en el alvéolo entra oxígeno a la sangre", `${tit("Inspiración y espiración")}<ellipse cx="60" cy="88" rx="36" ry="34" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/><path d="M22 132 q38 6 76 0" stroke="var(--red)" stroke-width="3" fill="none"/>${fl(60, 32, 60, 52, COL.azul, 2.5)}${et(60, 148, "inspiración", 100, { size: 11, color: COL.azul })}${tx(60, 162, "entra aire", 100)}<ellipse cx="190" cy="94" rx="28" ry="26" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/><path d="M156 114 q34 -16 68 0" stroke="var(--red)" stroke-width="3" fill="none"/>${fl(190, 66, 190, 48, COL.rojo, 2.5)}${et(190, 148, "espiración", 100, { size: 11, color: COL.rojo })}${tx(190, 162, "sale aire", 100)}`),
    },
    {
      html: `<h3>El aparato circulatorio</h3><p>El <mark>aparato circulatorio</mark> lleva los nutrientes y el oxígeno a todas las células y recoge sus desechos. Tiene tres partes:</p><p>• La <b>sangre</b>: un líquido rojo formado por el <b>plasma</b> (agua con sustancias disueltas), los <b>glóbulos rojos</b> (transportan el oxígeno), los <b>glóbulos blancos</b> (nos defienden de los microbios) y las <b>plaquetas</b> (taponan las heridas formando costras).</p><p>• Los <b>vasos sanguíneos</b>: tubos por los que circula la sangre. Las <mark>arterias</mark> llevan la sangre <b>desde el corazón</b> hacia el cuerpo; las <mark>venas</mark> la traen <b>de vuelta al corazón</b>; y los <b>capilares</b>, finísimos como un pelo, unen arterias y venas y llegan a todas las células.</p><p>• El <mark>corazón</mark>: un músculo del tamaño de tu puño que funciona como una bomba. Tiene cuatro cavidades: dos <b>aurículas</b> arriba y dos <b>ventrículos</b> abajo. Late unas 80 o 90 veces por minuto en un niño de tu edad, y más cuando corres.</p><p>Puedes notar los latidos tomándote el <b>pulso</b> en la muñeca o en el cuello con dos dedos.</p>`,
      svg: svg("Corazón con arterias que salen y venas que entran; tipos de células de la sangre", `${tit("Corazón, vasos y sangre")}${corazon(70, 92, 4)}${fl(84, 70, 120, 52, COL.rojo, 3)}${et(150, 52, "arterias", 70, { size: 11, color: COL.rojo, anchor: "start" })}${fl(120, 120, 84, 104, COL.azul, 3)}${et(150, 124, "venas", 70, { size: 11, color: COL.azul, anchor: "start" })}${tx(196, 70, "salen del corazón", 120)}${tx(196, 142, "vuelven al corazón", 120)}${tx(130, 170, "glóbulos rojos · blancos · plaquetas · plasma", 240)}`),
      video: vid("ZzATGDMNKYw"),
    },
    {
      html: `<h3>La circulación de la sangre y el aparato excretor</h3><p>La sangre hace dos recorridos, por eso decimos que la circulación es <b>doble</b>:</p><p>• En la <b>circulación pulmonar</b> (circuito corto), el corazón envía la sangre a los pulmones para que se cargue de oxígeno y vuelva al corazón.</p><p>• En la <b>circulación general</b> (circuito largo), el corazón envía la sangre con oxígeno a todo el cuerpo y esta vuelve cargada de dióxido de carbono y desechos.</p><p>Las células producen desechos que serían tóxicos si se acumularan. El <mark>aparato excretor</mark> se encarga de eliminarlos. Su parte principal es el <b>aparato urinario</b>:</p><p>• Los dos <b>riñones</b>, con forma de judía, filtran la sangre y fabrican la <b>orina</b> con los desechos y el agua sobrante.<br>• Los <b>uréteres</b> son dos tubos que llevan la orina a la vejiga.<br>• La <b>vejiga</b> es una bolsa que la almacena.<br>• La <b>uretra</b> la expulsa al exterior.</p><p>También excretan las <b>glándulas sudoríparas</b> de la piel, que fabrican el <b>sudor</b> (agua y sales), y los <b>pulmones</b>, que expulsan el dióxido de carbono.</p>`,
      svg: svg("Aparato urinario: riñones, uréteres, vejiga y uretra", `${tit("Aparato urinario")}<path d="M50 50 q-24 6 -18 40 q8 18 24 6 q-8 -18 6 -30 q2 -14 -12 -16z" fill="#b45309" fill-opacity=".7" stroke="#78350f" stroke-width="2"/><path d="M130 50 q24 6 18 40 q-8 18 -24 6 q8 -18 -6 -30 q-2 -14 12 -16z" fill="#b45309" fill-opacity=".7" stroke="#78350f" stroke-width="2"/><path d="M56 86 Q70 118 82 132 M124 86 Q110 118 98 132" stroke="#c98a00" stroke-width="3" fill="none"/><ellipse cx="90" cy="142" rx="18" ry="14" fill="#fde68a" stroke="#c98a00" stroke-width="2"/><path d="M90 156 V172" stroke="#c98a00" stroke-width="3"/>
        ${[["riñones", 60, COL.marron], ["uréteres", 100, COL.sol], ["vejiga", 140, COL.sol], ["uretra", 168, COL.sol]].map(([s, y, c]) => `${et(210, y, s, 90, { size: 11, color: c })}`).join("")}<path d="M146 66 L176 58 M108 112 H176 M110 140 H176 M96 168 H176" stroke="var(--line)"/>`),
      video: vid("IHsfVmGeet8"),
    },
    {
      html: `<h3>Los cuatro aparatos trabajan juntos</h3><p>Ahora podemos unir todas las piezas siguiendo un ejemplo: estás jugando al fútbol en el patio.</p><p>Tus músculos de las piernas trabajan mucho y sus células necesitan más energía. Para conseguirla necesitan <b>nutrientes</b> (que llegaron del desayuno gracias al <b>aparato digestivo</b>) y <b>oxígeno</b> (que toman tus pulmones; por eso respiras más deprisa). El <b>corazón</b> late más rápido para que la sangre llegue antes a los músculos. Al trabajar, tus células producen <b>dióxido de carbono</b>, que sale por los pulmones, y <b>calor</b>, que tu cuerpo elimina con el <b>sudor</b>.</p><p>Hábitos que ayudan a todos estos aparatos:</p><p>• Comer variado, masticar despacio y no saltarse el desayuno.<br>• Beber agua a lo largo del día.<br>• Hacer ejercicio físico todos los días.<br>• Lavarse los dientes después de cada comida.<br>• Respirar aire limpio y no fumar.<br>• No aguantarse las ganas de orinar.</p>`,
      svg: svg("Ciclo: digestivo da nutrientes, respiratorio da oxígeno, circulatorio reparte, excretor elimina", `${tit("Trabajo en equipo")}${ciclo([["digestivo", COL.naranja], ["respiratorio", COL.azul], ["circulatorio", COL.rojo], ["excretor", COL.sol]], 130, 100, 54, 92)}`),
    },
  ],
  figura: {
    titulo: "La nutrición en ocho ideas",
    svg: rejilla([
      ["Nutrición", "nutrientes y oxígeno a las células", COL.verde],
      ["Digestión", "alimentos → nutrientes", COL.naranja],
      ["Absorción", "en el intestino delgado", COL.sol],
      ["Pulmones", "alvéolos: intercambio de gases", COL.azul],
      ["Corazón", "bomba de cuatro cavidades", COL.rojo],
      ["Arterias y venas", "salen y vuelven al corazón", COL.morado],
      ["Riñones", "filtran la sangre: orina", COL.marron],
      ["Sudor", "agua y sales por la piel", COL.agua],
    ], 4, 86, "Resumen: nutrición, digestión, respiración, circulación y excreción"),
  },
  video: vgen("nj168qvxJzg", "la función de nutrición primaria"),
  ejemplos: [
    { enunciado: "Ordena el recorrido de un trozo de pan: estómago, boca, intestino delgado, esófago, intestino grueso.",
      pasos: ["Todo empieza en la boca, donde se mastica.", "Se traga y baja por el esófago.", "En el estómago se convierte en quimo.", "En el intestino delgado se absorben los nutrientes.", "Los restos pasan al intestino grueso."],
      resultado: "boca → esófago → estómago → intestino delgado → intestino grueso." },
    { enunciado: "¿Por qué al correr respiras más deprisa y el corazón late más rápido?",
      pasos: ["Los músculos trabajan más y necesitan más energía.", "Para obtenerla, sus células necesitan más oxígeno y nutrientes.", "Respirar más deprisa entra más oxígeno; el corazón más rápido lo reparte antes."],
      resultado: "Porque los músculos necesitan más oxígeno y nutrientes, y los aparatos respiratorio y circulatorio aceleran su trabajo." },
    { enunciado: "Di qué aparato elimina cada desecho: orina, dióxido de carbono, sudor.",
      pasos: ["La orina la fabrican los riñones (aparato urinario).", "El dióxido de carbono sale por los pulmones al espirar.", "El sudor lo producen las glándulas sudoríparas de la piel."],
      resultado: "Orina: aparato urinario. Dióxido de carbono: aparato respiratorio. Sudor: glándulas sudoríparas." },
  ],
  errores: [
    "Pensar que alimentación y nutrición son lo mismo: comer es voluntario; nutrirse lo hace el cuerpo solo.",
    "Creer que los nutrientes pasan a la sangre en el estómago: se absorben sobre todo en el intestino delgado.",
    "Decir que las venas llevan sangre al cuerpo: las arterias salen del corazón y las venas vuelven a él.",
    "Pensar que solo se respira por los pulmones y olvidar el intercambio de gases en los alvéolos.",
    "Creer que el ano forma parte del aparato excretor: las heces son restos de la digestión, no desechos de las células.",
  ],
  ejercicios: [
    { q: "¿Qué cuatro aparatos participan en la nutrición?", sol: "Digestivo, respiratorio, circulatorio y excretor." },
    { q: "Explica la diferencia entre alimentación y nutrición.", sol: "La alimentación es elegir y comer los alimentos (voluntaria). La nutrición es lo que hace el cuerpo con ellos para que lleguen a las células (involuntaria)." },
    { q: "Nombra las tres glándulas del aparato digestivo.", sol: "Glándulas salivales, hígado y páncreas." },
    { q: "¿Qué es la absorción y dónde se produce?", sol: "Es el paso de los nutrientes desde el tubo digestivo a la sangre. Se produce en el intestino delgado, gracias a las vellosidades intestinales." },
    { q: "¿Por qué es mejor respirar por la nariz que por la boca?", sol: "Porque en la nariz el aire se calienta, se humedece y se limpia antes de llegar a los pulmones." },
    { q: "Explica qué ocurre en los alvéolos pulmonares.", sol: "El intercambio de gases: el oxígeno pasa del aire a la sangre y el dióxido de carbono pasa de la sangre al aire, que se expulsa." },
    { q: "¿Qué hace el diafragma al inspirar?", sol: "Baja, la caja torácica se agranda y los pulmones se llenan de aire." },
    { q: "Relaciona: glóbulos rojos, glóbulos blancos, plaquetas.", sol: "Glóbulos rojos: transportan oxígeno. Glóbulos blancos: defienden de los microbios. Plaquetas: taponan las heridas." },
    { q: "¿En qué se diferencian las arterias de las venas?", sol: "Las arterias llevan la sangre desde el corazón al cuerpo; las venas la devuelven al corazón." },
    { q: "Ordena el recorrido de la orina: vejiga, riñón, uretra, uréter.", sol: "Riñón → uréter → vejiga → uretra." },
  ],
  quiz: [
    { q: "La transformación de los alimentos en nutrientes se llama…", o: ["respiración", "digestión", "excreción"], a: 1, e: "Es la digestión." },
    { q: "Los nutrientes pasan a la sangre sobre todo en…", o: ["el intestino delgado", "la boca", "el esófago"], a: 0, e: "En el intestino delgado." },
    { q: "La papilla que se forma en el estómago se llama…", o: ["bolo", "orina", "quimo"], a: 2, e: "Quimo." },
    { q: "La bilis la fabrica…", o: ["el páncreas", "el hígado", "el estómago"], a: 1, e: "El hígado." },
    { q: "El intercambio de gases ocurre en…", o: ["los alvéolos", "la tráquea", "la laringe"], a: 0, e: "En los alvéolos pulmonares." },
    { q: "Al inspirar, el diafragma…", o: ["sube", "no se mueve", "baja"], a: 2, e: "Baja y entra el aire." },
    { q: "Los vasos que llevan la sangre desde el corazón son…", o: ["las venas", "las arterias", "los uréteres"], a: 1, e: "Las arterias." },
    { q: "Las células que nos defienden de los microbios son…", o: ["los glóbulos blancos", "las plaquetas", "los glóbulos rojos"], a: 0, e: "Los glóbulos blancos." },
    { q: "La orina se fabrica en…", o: ["la vejiga", "la uretra", "los riñones"], a: 2, e: "Los riñones filtran la sangre." },
    { q: "El sudor lo producen…", o: ["los pulmones", "las glándulas sudoríparas", "los riñones"], a: 1, e: "Las glándulas de la piel." },
  ],
  examen: [
    { q: "El corazón tiene…", o: ["dos cavidades", "cuatro cavidades", "seis cavidades"], a: 1, e: "Dos aurículas y dos ventrículos." },
    { q: "La circulación es doble porque…", o: ["hay dos corazones", "tiene un circuito pulmonar y otro general", "la sangre va dos veces al estómago"], a: 1, e: "Circuito corto y circuito largo." },
    { q: "La tráquea tiene anillos de…", o: ["cartílago", "hueso", "músculo"], a: 0, e: "Para que no se aplaste." },
    { q: "Las vellosidades intestinales sirven para…", o: ["aumentar la superficie de absorción", "fabricar saliva", "mover el bolo"], a: 0, e: "Así se absorben más nutrientes." },
  ],
  feynman: ["Qué es la función de nutrición y qué aparatos participan", "El recorrido de un bocado desde la boca hasta el intestino grueso", "Qué pasa en los alvéolos y cómo lleva la sangre el oxígeno a las células"],
  mapa: mapa("NUTRICIÓN", "var(--pri)", [
    ["Digestivo", "digestión · absorción", COL.naranja],
    ["Respiratorio", "inspiración · alvéolos", COL.azul],
    ["Circulatorio", "corazón · vasos · sangre", COL.rojo],
    ["Excretor", "riñones · orina · sudor", COL.sol],
  ], 250),
  tarjetas: [
    ["Nutrientes", "Sustancias de los alimentos que usan las células."],
    ["Digestión", "Transformación de los alimentos en nutrientes."],
    ["Absorción", "Paso de los nutrientes a la sangre en el intestino delgado."],
    ["Alvéolos", "Saquitos de los pulmones donde el oxígeno pasa a la sangre."],
    ["Arteria", "Vaso que lleva la sangre desde el corazón."],
    ["Vena", "Vaso que devuelve la sangre al corazón."],
    ["Riñones", "Órganos que filtran la sangre y fabrican la orina."],
    ["Diafragma", "Músculo bajo los pulmones que ayuda a respirar."],
  ],
  familias: ["Tomad el pulso en reposo y después de saltar un minuto, y comparad los latidos.", "Mientras cocináis, comentad qué nutrientes tiene cada alimento.", "Medid cuántas veces respiráis en un minuto sentados y después de subir escaleras.", "Haced un «menú de la semana» variado entre todos."],
  profesores: PROF("Ciencias de la Naturaleza: la función de nutrición; aparatos digestivo, respiratorio, circulatorio y excretor; hábitos saludables relacionados", ["Maqueta de pulmón con una botella, globos y un guante como diafragma.", "Medida del pulso y de la frecuencia respiratoria antes y después del ejercicio, con tabla de datos.", "Mural colectivo del cuerpo humano a tamaño real con los cuatro aparatos de la nutrición."]),
  fuentes: [RD, wiki("Aparato digestivo", "Aparato_digestivo"), wiki("Aparato respiratorio", "Aparato_respiratorio"), wiki("Aparato circulatorio", "Aparato_circulatorio")],
  revisado: REV,
};
