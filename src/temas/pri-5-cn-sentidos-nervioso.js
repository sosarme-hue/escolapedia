// Ciencias de la Naturaleza 5º de Primaria: los sentidos y el sistema nervioso. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, nino } = require("./_pri5b");

// Ojo de perfil: córnea, iris, cristalino y retina.
const ojo = (x, y) => `<circle cx="${x}" cy="${y}" r="44" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M${x - 44} ${y} a44 44 0 0 1 0 0" /><path d="M${x + 20} ${y - 39} A44 44 0 0 1 ${x + 20} ${y + 39}" stroke="#dc2626" stroke-width="5" fill="none"/><path d="M${x - 42} ${y - 14} q-10 14 0 28" stroke="#0369a1" stroke-width="3" fill="none"/><path d="M${x - 40} ${y - 18} V${y - 8} M${x - 40} ${y + 8} V${y + 18}" stroke="#16a34a" stroke-width="5"/><ellipse cx="${x - 30}" cy="${y}" rx="6" ry="13" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5"/><path d="M${x + 44} ${y} h30" stroke="#c98a00" stroke-width="4"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los sentidos y el sistema nervioso",
  minutos: 50,
  objetivos: ["Explicar en qué consiste la función de relación", "Conocer los cinco sentidos, sus órganos y sus receptores", "Describir las partes del ojo y del oído", "Nombrar las partes del sistema nervioso y su función", "Distinguir los actos voluntarios de los actos reflejos", "Adoptar hábitos para cuidar los sentidos y el sistema nervioso"],
  claves: ["función de relación", "estímulo", "receptor", "respuesta", "vista", "oído", "olfato", "gusto", "tacto", "neurona", "encéfalo", "médula espinal", "nervios", "acto reflejo"],
  pregunta: {
    texto: "Estás en el sofá y hueles a bizcocho recién hecho. Sin pensarlo mucho te levantas y vas a la cocina. ¿Qué partes de tu cuerpo han trabajado para que eso pase?",
    respuesta: "Primero la <b>nariz</b> captó el olor (un <mark>estímulo</mark>). El mensaje viajó por los <b>nervios</b> hasta el <b>cerebro</b>, que lo reconoció y decidió ir a la cocina. Después el cerebro mandó órdenes a los <b>músculos</b> de las piernas. Sentidos, sistema nervioso y aparato locomotor han trabajado juntos: es la <mark>función de relación</mark>.",
  },
  bloques: [
    {
      html: `<h3>La función de relación</h3><p>Los seres vivos necesitan saber qué pasa a su alrededor y dentro de su cuerpo para poder reaccionar: huir de un peligro, buscar comida, abrigarse si hace frío. Eso es la <mark>función de relación</mark>.</p><p>En ella hay tres pasos:</p><p>1. Un <mark>estímulo</mark>: cualquier cambio que podamos notar, como una luz, un sonido, un olor, el frío o un pinchazo.</p><p>2. Los <b>receptores</b>, que captan el estímulo. Están en los <b>órganos de los sentidos</b>: ojos, oídos, nariz, lengua y piel. Envían la información al <b>sistema nervioso</b>, que la interpreta y decide qué hacer.</p><p>3. La <mark>respuesta</mark>, que la realizan los <b>efectores</b>: normalmente los <b>músculos</b> (nos movemos) y a veces las <b>glándulas</b> (por ejemplo, se nos hace la boca agua).</p><p>Ejemplo: suena el timbre del recreo (estímulo) → el oído lo capta (receptor) → el cerebro lo reconoce → los músculos te llevan al patio (respuesta).</p>`,
      svg: svg("Estímulo, receptor, sistema nervioso y respuesta en cadena", `${tit("La función de relación")}${flujo([["estímulo", COL.sol], ["receptor", COL.verde], ["cerebro", COL.morado], ["respuesta", COL.rojo]], 48, 44)}${tx(130, 120, "timbre → oído → cerebro → músculos", 236, { weight: 700, color: COL.azul })}${tx(130, 146, "Sentidos, nervios y músculos trabajan juntos", 236)}`),
    },
    {
      html: `<h3>La vista</h3><p>El sentido de la <mark>vista</mark> nos permite ver la forma, el color, el tamaño y el movimiento de las cosas. Su órgano es el <b>ojo</b>, una esfera del tamaño de una canica grande. Sus partes principales son:</p><p>• La <b>córnea</b>: la parte transparente de delante, por donde entra la luz.<br>• El <b>iris</b>: la parte de color (marrón, verde, azul…). En su centro hay un agujero negro, la <b>pupila</b>, que se hace pequeña con mucha luz y grande con poca.<br>• El <b>cristalino</b>: una lente detrás de la pupila que enfoca las imágenes.<br>• La <b>retina</b>: una capa al fondo del ojo con millones de células sensibles a la luz. Allí se forma la imagen, ¡al revés!<br>• El <b>nervio óptico</b>: lleva la información al cerebro, que pone la imagen derecha.</p><p>Los ojos están protegidos por las <b>cejas</b> (desvían el sudor), las <b>pestañas</b> (frenan el polvo), los <b>párpados</b> y las <b>lágrimas</b>, que los limpian.</p><p>Cuando el cristalino no enfoca bien aparecen la <b>miopía</b> (se ve mal de lejos) o la <b>hipermetropía</b> (se ve mal de cerca). Se corrigen con gafas o lentillas.</p>`,
      svg: svg("Ojo de perfil con córnea, iris, cristalino, retina y nervio óptico", `${tit("El ojo por dentro")}${ojo(96, 100)}${[["córnea", 52, COL.azul], ["iris", 76, COL.verde], ["cristalino", 100, COL.agua], ["retina", 124, COL.rojo], ["nervio óptico", 148, COL.sol]].map(([s, y, c]) => `<circle cx="184" cy="${y - 4}" r="4" fill="${c}"/>${et(222, y, s, 70, { size: 11, color: c })}`).join("")}`),
    },
    {
      html: `<h3>El oído</h3><p>El <mark>oído</mark> nos permite percibir los sonidos y, además, nos ayuda a mantener el <b>equilibrio</b>. Tiene tres partes:</p><p>• <b>Oído externo</b>: la <b>oreja</b>, que recoge el sonido como un embudo, y el <b>conducto auditivo</b>, que tiene pelillos y cera para proteger el interior. Al final está el <b>tímpano</b>, una membrana fina como la piel de un tambor que vibra con el sonido.</p><p>• <b>Oído medio</b>: tres huesecillos diminutos, el <b>martillo</b>, el <b>yunque</b> y el <b>estribo</b>, que transmiten y aumentan las vibraciones del tímpano.</p><p>• <b>Oído interno</b>: el <b>caracol</b> o cóclea, lleno de líquido y de células que convierten las vibraciones en mensajes que viajan por el <b>nervio auditivo</b> al cerebro. Aquí están también los <b>canales semicirculares</b>, que informan de la posición de la cabeza y nos ayudan a no caernos. Por eso, si das muchas vueltas, te mareas.</p><p>Para cuidar el oído: no metas bastoncillos dentro, no escuches música muy alta con auriculares y protégete de los ruidos fuertes.</p>`,
      svg: svg("Oído externo, medio e interno con tímpano, huesecillos y caracol", `${tit("Las tres partes del oído")}<path d="M30 60 q-14 30 6 60 q14 10 18 -6 q-10 -20 4 -36 q-4 -20 -28 -18z" fill="#f3c9a1" stroke="#b45309" stroke-width="2"/><rect x="54" y="88" width="48" height="14" fill="#fde68a" stroke="#b45309"/><path d="M102 82 V108" stroke="var(--red)" stroke-width="4"/><path d="M106 90 l10 -4 l8 6 l10 0" stroke="#78716c" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M150 96 m-14 0 a14 14 0 1 0 14 -14 a10 10 0 1 0 -6 10 a5 5 0 1 0 4 -4" stroke="#8b5cf6" stroke-width="4" fill="none"/><path d="M140 70 a10 10 0 1 1 16 6" stroke="#0369a1" stroke-width="3" fill="none"/><path d="M164 96 H200" stroke="#c98a00" stroke-width="4"/>${et(56, 140, "externo", 70, { size: 11, color: COL.marron })}${et(118, 140, "medio", 60, { size: 11, color: COL.gris })}${et(170, 140, "interno", 60, { size: 11, color: COL.morado })}${tx(130, 162, "oreja · tímpano · huesecillos · caracol", 236)}${et(226, 92, "nervio", 50, { size: 10, color: COL.sol })}`),
      video: vid("RGypVuzAqkc"),
    },
    {
      html: `<h3>El olfato y el gusto</h3><p>El <mark>olfato</mark> nos permite percibir los <b>olores</b>. Su órgano es la <b>nariz</b>. En la parte de arriba de las fosas nasales hay una zona llamada <b>pituitaria amarilla</b>, con células que detectan las sustancias que flotan en el aire. Podemos distinguir miles de olores distintos. El olfato nos avisa de peligros, como el humo o un alimento estropeado.</p><p>El <mark>gusto</mark> nos permite percibir los <b>sabores</b>. Su órgano es la <b>lengua</b>, que está cubierta de pequeños bultitos, las <b>papilas gustativas</b>. Dentro de ellas hay unos receptores, las <b>yemas gustativas</b>, que detectan cinco sabores básicos: <b>dulce</b>, <b>salado</b>, <b>ácido</b>, <b>amargo</b> y <b>umami</b> (el sabor «sabroso» del queso curado, del tomate maduro o del caldo). Hoy sabemos que todas las zonas de la lengua notan todos los sabores, aunque algunas son un poco más sensibles a unos que a otros.</p><p>Olfato y gusto trabajan juntos. Cuando estás resfriado y tienes la nariz tapada, la comida «no sabe a nada»: en realidad, lo que no notas es su olor. Haz la prueba: tápate la nariz y come un trocito de manzana y otro de pera. ¿Las distingues?</p>`,
      svg: svg("Nariz con pituitaria y lengua con papilas que notan cinco sabores", `${tit("Olfato y gusto")}<path d="M58 46 Q46 96 34 110 Q58 126 82 110 Q70 96 58 46z" fill="#f3c9a1" stroke="#b45309" stroke-width="2"/><ellipse cx="50" cy="112" rx="5" ry="3" fill="#78350f"/><ellipse cx="66" cy="112" rx="5" ry="3" fill="#78350f"/><path d="M58 56 V76" stroke="var(--sun)" stroke-width="5"/>${et(58, 140, "nariz: olores", 100, { size: 11, color: COL.sol })}<path d="M140 70 q40 -20 80 0 q6 50 -40 70 q-46 -20 -40 -70z" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/>${[[160, 80], [180, 76], [200, 80], [168, 98], [192, 98], [180, 116]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#be185d"/>`).join("")}${et(180, 158, "lengua: sabores", 110, { size: 11, color: COL.rojo })}${tx(130, 174, "dulce · salado · ácido · amargo · umami", 236)}`),
    },
    {
      html: `<h3>El tacto</h3><p>El <mark>tacto</mark> nos informa de la <b>forma</b>, la <b>textura</b> (liso, rugoso), la <b>temperatura</b> (frío, calor), la <b>presión</b> y el <b>dolor</b>. Su órgano es la <b>piel</b>, que cubre todo el cuerpo.</p><p>La piel tiene dos capas principales:</p><p>• La <b>epidermis</b>, la capa de fuera, que se renueva constantemente. Las células muertas se caen en forma de polvillo.<br>• La <b>dermis</b>, debajo, donde están los <b>receptores del tacto</b>, las glándulas del sudor, las raíces de los pelos y los vasos sanguíneos.</p><p>Los receptores no están repartidos por igual. Hay muchísimos en las <b>yemas de los dedos</b>, los <b>labios</b> y la <b>lengua</b>, y pocos en la espalda. Por eso las personas ciegas leen con las yemas de los dedos usando el sistema <b>braille</b>, que son puntos en relieve.</p><p>El dolor, aunque sea desagradable, es muy útil: nos avisa de que algo nos está haciendo daño para que nos apartemos. Para cuidar la piel: lávala a diario, usa crema solar y no te expongas al sol en las horas de más calor.</p>`,
      svg: svg("La piel nota forma, textura, temperatura, presión y dolor; las yemas de los dedos tienen más receptores", `${tit("El tacto: la piel")}${filas([["forma", "redonda, cuadrada", COL.azul], ["textura", "liso o rugoso", COL.verde], ["temperatura", "frío o calor", COL.rojo], ["presión", "suave o fuerte", COL.morado], ["dolor", "¡aviso!", COL.naranja]], 46, 24, { x: 22, wa: 86, wb: 124 })}${tx(130, 170, "Muchos receptores en las yemas de los dedos", 236, { weight: 700, color: COL.azul })}`),
      video: vid("PTCt0Jtkje0"),
    },
    {
      html: `<h3>Las neuronas</h3><p>El <mark>sistema nervioso</mark> recibe la información de los sentidos, la interpreta, decide qué hacer y envía órdenes a los músculos. También controla, sin que nos demos cuenta, el latido del corazón o la respiración. Es como el centro de mando del cuerpo.</p><p>Está formado por un tipo especial de células: las <mark>neuronas</mark>. Cada neurona tiene tres partes:</p><p>• El <b>cuerpo celular</b>, con el núcleo.<br>• Las <b>dendritas</b>, muchas ramitas cortas que reciben los mensajes.<br>• El <b>axón</b>, una prolongación larga, como un cable, que envía los mensajes a otra neurona o a un músculo. Algunos axones miden casi un metro.</p><p>Los mensajes viajan por las neuronas en forma de pequeñas <b>señales eléctricas</b>, a gran velocidad: ¡pueden recorrer más de 100 metros en un segundo! Las neuronas no se tocan; entre una y otra hay un pequeño espacio por el que el mensaje pasa con ayuda de unas sustancias químicas. Tenemos unos 86.000 millones de neuronas solo en el encéfalo.</p>`,
      svg: svg("Neurona con dendritas, cuerpo celular y axón; el mensaje va de las dendritas al axón", `${tit("La neurona")}<g transform="translate(56 98)"><circle r="18" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/><circle r="6" fill="#6d28d9"/>${[200, 150, 110, 250, 300].map((a) => { const r = (a * Math.PI) / 180; return `<path d="M${(18 * Math.cos(r)).toFixed(1)} ${(18 * Math.sin(r)).toFixed(1)} L${(40 * Math.cos(r)).toFixed(1)} ${(40 * Math.sin(r)).toFixed(1)} l${(6 * Math.cos(r + 0.6)).toFixed(1)} ${(6 * Math.sin(r + 0.6)).toFixed(1)}" stroke="#6d28d9" stroke-width="2.5" fill="none"/>`; }).join("")}<path d="M18 0 H160" stroke="#6d28d9" stroke-width="4"/><path d="M160 0 l14 -10 M160 0 l14 10 M160 0 h16" stroke="#6d28d9" stroke-width="2.5"/></g>${et(34, 46, "dendritas", 80, { size: 11, color: COL.morado })}${et(100, 132, "cuerpo", 70, { size: 11, color: COL.morado })}${et(150, 84, "axón", 60, { size: 11, color: COL.morado })}${fl(90, 160, 210, 160, COL.sol, 2.5)}${tx(150, 176, "sentido del mensaje", 120)}`),
    },
    {
      html: `<h3>Las partes del sistema nervioso</h3><p>El sistema nervioso tiene dos grandes partes:</p><p>1. El <mark>sistema nervioso central</mark>, protegido por huesos:</p><p>• El <b>encéfalo</b>, dentro del cráneo. Incluye el <b>cerebro</b>, la parte más grande, que se encarga de pensar, recordar, aprender, sentir emociones y mover los músculos voluntarios (el lado izquierdo controla la parte derecha del cuerpo y al revés); el <b>cerebelo</b>, detrás y abajo, que coordina los movimientos y mantiene el equilibrio; y el <b>bulbo raquídeo</b>, que controla funciones automáticas como el latido del corazón y la respiración.</p><p>• La <b>médula espinal</b>: un cordón que baja por dentro de la columna vertebral. Lleva mensajes entre el encéfalo y el resto del cuerpo y controla los actos reflejos.</p><p>2. El <mark>sistema nervioso periférico</mark>: los <b>nervios</b>, que son como cables que recorren todo el cuerpo. Los <b>nervios sensitivos</b> llevan la información de los sentidos al sistema nervioso central; los <b>nervios motores</b> llevan las órdenes a los músculos.</p>`,
      svg: svg("Sistema nervioso central (encéfalo y médula) y periférico (nervios)", `${tit("Partes del sistema nervioso")}<circle cx="64" cy="58" r="22" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/><path d="M64 80 V156" stroke="#8b5cf6" stroke-width="6"/>${[96, 112, 128, 144].map((y) => `<path d="M64 ${y} q-22 6 -36 18 M64 ${y} q22 6 36 18" stroke="#c98a00" stroke-width="2" fill="none"/>`).join("")}${filas([["encéfalo", "cerebro, cerebelo, bulbo", COL.rojo], ["médula", "dentro de la columna", COL.morado], ["nervios", "sensitivos y motores", COL.sol]], 64, 40, { x: 124, wa: 80, wb: 110, dos: true })}`),
      video: vid("krqempHBRAc"),
    },
    {
      html: `<h3>Actos voluntarios y actos reflejos</h3><p>Nuestras respuestas pueden ser de dos tipos:</p><p>• <mark>Actos voluntarios</mark>: los decidimos. La información llega al <b>cerebro</b>, que piensa y elige qué hacer. Son más lentos, pero los controlamos. Por ejemplo: leer, escribir, chutar un balón o levantar la mano para hablar.</p><p>• <mark>Actos reflejos</mark>: son respuestas <b>automáticas y muy rápidas</b>, que hacemos sin pensar. La información llega a la <b>médula espinal</b>, que da la orden directamente al músculo sin esperar al cerebro. Sirven para protegernos. Por ejemplo: retirar la mano al tocar algo que quema, cerrar los ojos cuando algo se acerca de golpe, estornudar o el «salto» de la pierna cuando el médico te da un golpecito debajo de la rodilla.</p><p>En un reflejo, el cerebro se entera después: primero apartas la mano y luego notas el dolor.</p><p>Algunas acciones empiezan siendo voluntarias y, de tanto practicarlas, se vuelven casi automáticas, como montar en bici, atarse los cordones o escribir en un teclado. Son los <b>hábitos</b> o actos aprendidos.</p>`,
      svg: svg("Acto voluntario pasa por el cerebro; acto reflejo pasa solo por la médula", `${tit("Voluntario o reflejo")}${cj2(14, 42, 112, 58, "Voluntario", "lo decide el cerebro", COL.azul)}${cj2(134, 42, 112, 58, "Reflejo", "responde la médula", COL.rojo)}${tx(70, 120, "chutar, escribir", 110)}${tx(190, 120, "apartar la mano", 110)}${tx(70, 140, "más lento", 110, { weight: 700, color: COL.azul })}${tx(190, 140, "muy rápido", 110, { weight: 700, color: COL.rojo })}${tx(130, 166, "Los reflejos nos protegen", 236)}`),
    },
    {
      html: `<h3>Cuidar los sentidos y el sistema nervioso</h3><p>Como el sistema nervioso es tan importante, está muy protegido: el encéfalo por el <b>cráneo</b> y la médula por la <b>columna vertebral</b>, además de unas membranas y un líquido que amortiguan los golpes. Aun así, necesita que lo cuides:</p><p>• <b>Duerme</b> entre 9 y 11 horas. Mientras duermes, el cerebro ordena lo que has aprendido durante el día.<br>• Usa <b>casco</b> al montar en bici, en patines o en patinete.<br>• Ponte siempre el <b>cinturón</b> o usa el elevador en el coche.<br>• Haz <b>ejercicio</b>: mejora la memoria y el estado de ánimo.<br>• Lee, juega a juegos de ingenio y aprende cosas nuevas: el cerebro también se entrena.<br>• Limita el tiempo de <b>pantallas</b>, sobre todo antes de dormir.<br>• Evita el alcohol, el tabaco y otras drogas, que dañan las neuronas.</p><p>Y para los sentidos: lee con buena luz y a una distancia adecuada, usa gafas de sol, no escuches música muy alta, suénate la nariz con suavidad, lávate los dientes y la lengua, y protege tu piel del sol.</p>`,
      svg: svg("Hábitos para cuidar el sistema nervioso: dormir, casco, ejercicio y leer", `${tit("Hábitos saludables")}${fichas([["Dormir", "9 a 11 horas", COL.morado], ["Casco", "bici y patines", COL.rojo], ["Ejercicio", "mejor memoria", COL.verde], ["Leer y jugar", "entrena el cerebro", COL.azul]])}`),
    },
  ],
  figura: {
    titulo: "Los sentidos y el sistema nervioso en ocho ideas",
    svg: rejilla([
      ["Relación", "estímulo → respuesta", COL.verde],
      ["Vista", "ojo: retina y nervio óptico", COL.azul],
      ["Oído", "sonidos y equilibrio", COL.morado],
      ["Olfato y gusto", "nariz y lengua", COL.sol],
      ["Tacto", "receptores de la piel", COL.naranja],
      ["Neurona", "dendritas, cuerpo y axón", COL.rojo],
      ["Central", "encéfalo y médula", COL.marron],
      ["Reflejo", "rápido, sin pensar", COL.agua],
    ], 4, 86, "Resumen: función de relación, sentidos, neuronas y sistema nervioso"),
  },
  video: vgen("krqempHBRAc", "sistema nervioso para niños"),
  ejemplos: [
    { enunciado: "Vas en bici y ves que un perro cruza la calle. Frenas. Señala el estímulo, el receptor y la respuesta.",
      pasos: ["El estímulo es lo que cambia: el perro que aparece.", "El receptor que lo capta es el ojo (la retina).", "El cerebro decide frenar y envía la orden por los nervios motores.", "La respuesta es el movimiento de las manos que aprietan los frenos."],
      resultado: "Estímulo: el perro. Receptor: el ojo. Respuesta: frenar con los músculos de las manos." },
    { enunciado: "¿Es voluntario o reflejo? a) Estornudar. b) Contestar una pregunta. c) Cerrar los ojos ante un balonazo.",
      pasos: ["Los reflejos son rápidos, automáticos y no los decidimos.", "Estornudar y cerrar los ojos ocurren sin pensar.", "Contestar exige pensar qué decir."],
      resultado: "a) Reflejo. b) Voluntario. c) Reflejo." },
    { enunciado: "Pablo tiene la nariz tapada por un catarro y dice que la sopa no sabe a nada. ¿Por qué?",
      pasos: ["El gusto solo distingue cinco sabores básicos.", "Gran parte de lo que llamamos «sabor» es en realidad el olor de la comida.", "Con la nariz tapada, el olfato no funciona."],
      resultado: "Porque el olfato y el gusto trabajan juntos y, sin olfato, la comida parece no tener sabor." },
  ],
  errores: [
    "Pensar que los nervios piensan: solo transmiten mensajes; quien interpreta y decide es el sistema nervioso central.",
    "Confundir cerebro y encéfalo: el cerebro es una parte del encéfalo.",
    "Creer que cada zona de la lengua nota un solo sabor: toda la lengua nota todos los sabores.",
    "Decir que en los actos reflejos manda el cerebro: los controla la médula espinal.",
    "Olvidar que el oído también sirve para el equilibrio.",
  ],
  ejercicios: [
    { q: "¿Qué es un estímulo? Pon tres ejemplos.", sol: "Un cambio que podemos notar. Ejemplos: una luz, un ruido, un olor (también el frío o un pinchazo)." },
    { q: "Relaciona cada sentido con su órgano: vista, oído, olfato, gusto, tacto.", sol: "Vista: ojo. Oído: oído. Olfato: nariz. Gusto: lengua. Tacto: piel." },
    { q: "¿Qué hace la pupila cuando hay mucha luz? ¿Y con poca luz?", sol: "Con mucha luz se hace pequeña; con poca luz se hace grande para que entre más luz." },
    { q: "Ordena el recorrido del sonido: caracol, tímpano, oreja, huesecillos, nervio auditivo.", sol: "Oreja → tímpano → huesecillos → caracol → nervio auditivo." },
    { q: "Escribe los cinco sabores básicos.", sol: "Dulce, salado, ácido, amargo y umami." },
    { q: "¿Por qué las yemas de los dedos son tan sensibles?", sol: "Porque tienen muchísimos receptores del tacto." },
    { q: "Dibuja una neurona y señala sus tres partes.", sol: "Dendritas (ramitas que reciben), cuerpo celular (con el núcleo) y axón (prolongación larga que envía el mensaje)." },
    { q: "¿Qué partes forman el sistema nervioso central y qué hueso protege cada una?", sol: "El encéfalo, protegido por el cráneo, y la médula espinal, protegida por la columna vertebral." },
    { q: "¿Qué diferencia hay entre nervios sensitivos y motores?", sol: "Los sensitivos llevan información de los sentidos al sistema nervioso central; los motores llevan las órdenes a los músculos." },
    { q: "Escribe cuatro hábitos para cuidar el sistema nervioso.", sol: "Dormir lo suficiente, usar casco, hacer ejercicio y limitar las pantallas (también leer y evitar drogas)." },
  ],
  quiz: [
    { q: "Los receptores de los sentidos captan…", o: ["órdenes", "estímulos", "músculos"], a: 1, e: "Captan estímulos." },
    { q: "La parte de color del ojo es…", o: ["el iris", "la retina", "la córnea"], a: 0, e: "El iris." },
    { q: "La imagen se forma en…", o: ["el cristalino", "la pupila", "la retina"], a: 2, e: "En la retina." },
    { q: "Los huesecillos están en el oído…", o: ["externo", "medio", "interno"], a: 1, e: "En el oído medio." },
    { q: "El equilibrio depende de…", o: ["los canales semicirculares", "el tímpano", "la oreja"], a: 0, e: "Están en el oído interno." },
    { q: "El sabor «sabroso» del queso curado se llama…", o: ["amargo", "ácido", "umami"], a: 2, e: "Umami." },
    { q: "La prolongación larga de la neurona es…", o: ["la dendrita", "el axón", "el núcleo"], a: 1, e: "El axón envía el mensaje." },
    { q: "Coordina los movimientos y el equilibrio…", o: ["el cerebelo", "el bulbo raquídeo", "la médula"], a: 0, e: "El cerebelo." },
    { q: "Retirar la mano de algo que quema es un acto…", o: ["voluntario", "aprendido", "reflejo"], a: 2, e: "Es reflejo, lo controla la médula." },
    { q: "La médula espinal está dentro de…", o: ["el cráneo", "la columna vertebral", "las costillas"], a: 1, e: "De la columna." },
  ],
  examen: [
    { q: "El sistema nervioso periférico está formado por…", o: ["los nervios", "el cerebro", "la médula"], a: 0, e: "Por los nervios." },
    { q: "La miopía hace que veas mal…", o: ["de cerca", "de lejos", "los colores"], a: 1, e: "De lejos." },
    { q: "Las personas ciegas leen braille con…", o: ["la vista", "el oído", "el tacto"], a: 2, e: "Con las yemas de los dedos." },
    { q: "El latido del corazón lo controla…", o: ["el bulbo raquídeo", "el cerebelo", "la piel"], a: 0, e: "Funciones automáticas." },
  ],
  feynman: ["Qué es la función de relación, con un ejemplo de estímulo, receptor y respuesta", "Cómo funcionan el ojo y el oído", "Qué diferencia hay entre un acto voluntario y un acto reflejo"],
  mapa: mapa("RELACIÓN", "var(--pri)", [
    ["Sentidos", "vista · oído · olfato · gusto · tacto", COL.verde],
    ["Neurona", "dendritas · cuerpo · axón", COL.morado],
    ["Central", "encéfalo · médula", COL.rojo],
    ["Respuestas", "voluntarias · reflejas", COL.azul],
  ], 250),
  tarjetas: [
    ["Estímulo", "Cambio que podemos percibir, como una luz o un sonido."],
    ["Receptor", "Célula o estructura que capta un estímulo."],
    ["Retina", "Capa del fondo del ojo donde se forma la imagen."],
    ["Tímpano", "Membrana del oído que vibra con el sonido."],
    ["Papilas gustativas", "Bultitos de la lengua que detectan los sabores."],
    ["Neurona", "Célula del sistema nervioso que transmite mensajes."],
    ["Encéfalo", "Cerebro, cerebelo y bulbo raquídeo, dentro del cráneo."],
    ["Acto reflejo", "Respuesta rápida y automática controlada por la médula."],
  ],
  familias: ["Jugad a adivinar objetos con los ojos vendados solo con el tacto.", "Probad alimentos con la nariz tapada y después destapada: ¿cambia el sabor?", "Medid el tiempo de reacción: sujetad una regla y que la atrape al soltarla.", "Revisad juntos el casco de la bici y las horas de sueño de la semana."],
  profesores: PROF("Ciencias de la Naturaleza: la función de relación; órganos de los sentidos; sistema nervioso central y periférico; neurona; actos voluntarios y reflejos; hábitos de cuidado", ["Circuito sensorial por estaciones: cajas de texturas, frascos de olores, sabores y sonidos.", "Prueba de tiempo de reacción con una regla y registro de datos en tabla.", "Mapa de sensibilidad de la piel con dos puntas separadas a distintas distancias."]),
  fuentes: [RD, wiki("Sistema nervioso", "Sistema_nervioso"), wiki("Sentido (fisiología)", "Sentido_(fisiología)"), wiki("Neurona", "Neurona")],
  revisado: REV,
};
