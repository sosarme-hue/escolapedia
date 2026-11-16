// Dibujo Artístico I, 1º de Bachillerato. Tema 3, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");
const { marco, t, ln, rc, ci, el, pa, trazo } = B;

// Las formas básicas: cubo, esfera, cilindro y cono con sus ejes.
const formas = marco("Las cuatro formas básicas de construcción: cubo, esfera, cilindro y cono",
  `${pa("M24 58 L64 58 L64 98 L24 98Z M64 58 L82 44 L82 84 L64 98 M24 58 L42 44 L82 44", trazo("var(--pen)", 2.2))}${t(52, 118, "cubo", { bold: 1, color: "var(--pen)" })}
  ${ci(150, 70, 30, trazo("var(--red)", 2.2))}${el(150, 70, 30, 9, trazo("var(--red)", 1.2) + ' stroke-dasharray="4 3"')}${t(150, 118, "esfera", { bold: 1, color: "var(--red)" })}
  ${pa("M30 168 V138 M70 168 V138", trazo("var(--leaf)", 2.2))}${el(50, 138, 20, 6, trazo("var(--leaf)", 2.2))}${pa("M30 168 A20 6 0 0 0 70 168", trazo("var(--leaf)", 2.2))}
  ${pa("M180 168 L210 128 L240 168", trazo("var(--sun)", 2.4))}${pa("M180 168 A30 8 0 0 0 240 168", trazo("var(--sun)", 2.4))}${t(124, 168, "cilindro", { bold: 1, color: "var(--leaf)" })}${t(210, 120, "cono", { bold: 1, color: "var(--sun)" })}`);

// Medir con el lápiz a brazo extendido.
const medir = marco("Medir con el lápiz a brazo extendido: tomar una medida del modelo y compararla",
  `${rc(150, 40, 70, 110, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2" rx="4"')}${ln(150, 40, 220, 40, "var(--red)", 2)}${ln(150, 150, 220, 150, "var(--red)", 2)}${ln(158, 40, 158, 150, "var(--red)", 1.5, 'stroke-dasharray="4 3"')}
  ${ci(34, 100, 6, 'fill="var(--ink)"')}${ln(34, 106, 34, 150, "var(--ink)", 2.5)}${ln(34, 112, 96, 98, "var(--ink)", 3)}${rc(92, 56, 6, 74, 'fill="var(--sun)" stroke="var(--ink)" transform="rotate(8 95 93)"')}${ln(40, 98, 150, 70, "var(--pen)", 1.2, 'stroke-dasharray="5 3"')}${ln(40, 98, 150, 120, "var(--pen)", 1.2, 'stroke-dasharray="5 3"')}
  ${t(70, 28, "brazo recto, un ojo", { bold: 1, maxW: 120 })}${t(70, 170, "la medida del lápiz = 1 unidad", { color: "var(--muted)", maxW: 140 })}${t(206, 168, "altura = 1,5 u", { color: "var(--red)", maxW: 80 })}`);

// Alineaciones y puntos de paso.
const alinea = marco("Líneas de alineación y puntos de paso para situar los elementos de un dibujo",
  `${rc(30, 30, 200, 120, 'fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="5 4"')}${ln(70, 20, 70, 160, "var(--red)", 1.4, 'stroke-dasharray="4 3"')}${ln(180, 20, 180, 160, "var(--red)", 1.4, 'stroke-dasharray="4 3"')}${ln(20, 80, 240, 80, "var(--pen)", 1.4, 'stroke-dasharray="4 3"')}
  ${ci(70, 54, 5, 'fill="var(--ink)"')}${ci(180, 80, 5, 'fill="var(--ink)"')}${ci(70, 128, 5, 'fill="var(--ink)"')}${ci(180, 136, 5, 'fill="var(--ink)"')}
  ${pa("M70 54 L180 80 L180 136 L70 128Z", trazo("var(--leaf)", 2.4))}${t(130, 168, "el borde A cae justo sobre el borde B", { color: "var(--muted)", maxW: 220 })}`);

// Encaje de un bodegón con caja general y cajas parciales.
const bodegon = marco("Encaje de un bodegón: caja general, cajas parciales y formas simples",
  `${rc(18, 24, 224, 132, 'fill="none" stroke="var(--pen)" stroke-width="1.6" stroke-dasharray="6 4"')}${rc(40, 48, 50, 100, 'fill="none" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="3 3"')}${rc(98, 90, 60, 58, 'fill="none" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="3 3"')}${rc(166, 64, 60, 84, 'fill="none" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="3 3"')}
  ${pa("M46 148 Q40 100 62 82 L62 62 H74 V82 Q96 100 88 148Z", trazo("var(--ink)", 2.2))}${el(128, 120, 28, 26, trazo("var(--red)", 2.2))}${pa("M170 148 V76 Q196 66 222 76 V148Z", trazo("var(--leaf)", 2.2))}${t(130, 14, "1 caja general · 2 cajas parciales · 3 formas", { maxW: 240, fs: 9.5, color: "var(--muted)" })}${t(130, 172, "botella · manzana · caja", { color: "var(--muted)" })}`);

module.exports = B.tema({
  titulo: "La línea y el encaje",
  minutos: 105,
  objetivos: [
    "Dominar la calidad, la presión y el control de la línea en los trazos de contorno, de gesto y de construcción",
    "Reducir los objetos a formas básicas (cubo, esfera, cilindro y cono) y a una estructura con ejes",
    "Encajar un objeto o un conjunto con método: caja general, ejes, formas, puntos de paso y contorno",
    "Medir y comparar con el lápiz, revisar y corregir un encaje antes de pasar al detalle",
  ],
  claves: ["línea de contorno", "gesto", "modulación", "encaje", "formas básicas", "estructura", "eje", "punto de paso", "medida visual", "línea de construcción"],
  pregunta: {
    texto: "Dos alumnos dibujan la misma botella. Uno empieza por el cuello y llega al fondo con la botella torcida y fuera del papel. El otro tarda lo mismo pero queda perfecta. ¿Qué hizo diferente?",
    respuesta: "El segundo <mark>encajó</mark> antes de dibujar: dibujó una caja general, trazó el eje, comprobó las proporciones con el lápiz y solo después perfiló el contorno. El encaje es el <b>andamio</b> invisible de todo buen dibujo: cuesta un par de minutos y ahorra el dibujo entero.",
  },
  lectura: {
    titulo: "El plano que no se ve",
    html: `<p>Un albañil no empieza una pared poniendo ladrillos al azar: primero marca el suelo, tira cuerdas y comprueba la plomada. Cuando por fin la pared está terminada, nadie ve las marcas, pero sin ellas habría quedado torcida. Con el dibujo ocurre exactamente lo mismo.</p>
    <p>Los dibujantes experimentados dedican la primera parte del trabajo a algo que casi nadie verá: líneas muy suaves que tantean el tamaño, el eje, la inclinación, los puntos clave. A ese conjunto de decisiones se le llama <b>encaje</b>. Cuando está bien hecho, el resto del dibujo fluye casi solo; cuando está mal, ningún detalle lo salva.</p>
    <p>En este tema trabajarás las dos mitades del oficio: por un lado, la <b>línea</b> como instrumento (cómo se sostiene el lápiz, cómo se varía la presión, qué dice un trazo seguro frente a uno tembloroso) y, por otro, el <b>encaje</b> como método para organizar cualquier objeto o conjunto de objetos. Te llevarás un procedimiento que podrás aplicar a todo lo que dibujes a partir de ahora.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "La línea como herramienta",
      html: `<p>En dibujo, la línea cumple tres papeles distintos, y conviene no confundirlos. Es <b>contorno</b> cuando recorre el borde de una forma y la separa del fondo. Es <b>estructura</b> cuando describe lo que hay dentro o por detrás del objeto (ejes, volúmenes, líneas de construcción). Y es <b>gesto</b> cuando sigue el movimiento de la forma, su energía, de manera rápida y suelta.</p>
      <p>Un mismo objeto puede describirse con las tres. Una pierna de modelo, por ejemplo, empieza con una línea de gesto que capta la curva de conjunto, se estructura con cilindros y ejes y termina con un contorno cuidado que enfatiza el borde de la rodilla y suaviza el de la pantorrilla.</p>
      <p>Para trazar bien conviene saber <b>cómo se sujeta el lápiz</b>. Hay dos agarres básicos: el <i>de escritura</i> (cerca de la punta, para detalle y precisión) y el <i>de dibujo</i> o «de pincel» (sujeto desde más atrás, con el lápiz casi horizontal, para líneas largas, sombreado y gesto). Dibujar con el brazo y el hombro, y no solo con la muñeca, da trazos más largos, firmes y seguros.</p>`,
      svg: B.cajas("Los tres papeles de la línea", [["Contorno", "separa figura|y fondo"], ["Estructura", "ejes y volúmenes|de construcción"], ["Gesto", "movimiento|y energía"], ["Agarre", "escritura o|dibujo (pincel)"]], { t: "Qué hace la línea" }),
    },
    {
      h: "Calidad de la línea: presión, grosor y velocidad",
      html: `<p>Una línea tiene tres variables que se controlan con la mano: la <b>presión</b> (cuánto se aprieta el lápiz), la <b>velocidad</b> (cuán deprisa se traza) y la <b>dirección de ataque</b> (cómo se apoya la punta). Variar estas variables crea una línea con <mark>personalidad</mark>.</p>
      <ul><li>Una línea <b>rápida y segura</b> es larga, limpia y continua: se hace con el brazo y sin dudar. Es mejor una línea firme y levemente imprecisa que una línea temblorosa a base de pequeños retoques.</li>
      <li>Una línea <b>lenta y cuidada</b> da precisión, pero tiende a ser rígida y temblorosa.</li>
      <li>La línea <b>modulada</b> es más gruesa y oscura en las zonas de sombra, de peso o de cercanía, y más fina y suave en las de luz, de lejanía o de borde difuso. Es una de las claves del dibujo expresivo.</li></ul>
      <p>El ejercicio más eficaz para mejorar la línea es el más aburrido: trazar <b>líneas rectas, curvas y círculos</b> en hojas enteras, de una sola vez, sin levantar el lápiz. A los pocos días notarás la diferencia.</p>`,
      svg: B.comparar("Línea insegura frente a línea segura", ["Insegura", ["trazos cortos", "retoques", "tiembla", "con la muñeca"]], ["Segura", ["trazo largo", "una vez", "continua", "con el brazo"]]),
      video: { id: "lSLWhzLhvCc", titulo: "Volviendo a los básicos: las líneas", canal: "DonPingüe", vistas: 379855 },
    },
    {
      h: "La línea de contorno y el contorno ciego",
      html: `<p>La <b>línea de contorno</b> sigue el borde exterior de la forma y, con frecuencia, algunos bordes interiores importantes. Dibujar solo contornos parece fácil, pero es un ejercicio de observación muy exigente: hay que decidir en cada punto si el borde sube, baja, gira o se cierra.</p>
      <p>El <b>contorno ciego</b> o <i>blind contour</i> es el ejercicio clásico que propuso el maestro Kimon Nicolaïdes: se mira <mark>solo el modelo</mark>, nunca el papel, y se recorre con los ojos el borde mientras la mano lo dibuja al mismo ritmo. El resultado es deformado, a veces cómico, pero entrena la conexión ojo-mano y obliga a ver bordes reales en lugar de símbolos.</p>
      <p>Después se pasa al <b>contorno semiciego</b> (se mira al papel solo para reubicarse) y finalmente al contorno normal, que ya gana en fidelidad. Dedica cinco minutos al comienzo de cada sesión a este calentamiento: pronto se convierte en la mejor manera de «afinar» el ojo.</p>`,
      svg: B.flujo("Progresión de los ejercicios de contorno", ["Contorno ciego: solo mirar el modelo", "Semiciego: mirar el papel lo mínimo", "Contorno normal con encaje previo", "Contorno modulado: grosor expresivo"], { t: "De ciego a modulado" }),
    },
    {
      h: "La línea de gesto",
      html: `<p>El <b>dibujo gestual</b> es el que busca captar la acción, el ritmo y la actitud del modelo en pocos segundos. Se traza con el brazo, con trazos grandes y continuos, sin detalle: una sola línea que va del cuello a los pies, otra que cruza los hombros, otra más para los brazos. Es el método clásico de los <b>dibujos de modelo vivo</b> de 30 segundos, 1 minuto y 5 minutos.</p>
      <p>La clave es la <b>línea de acción</b>: la curva dominante que recorre una figura (o un árbol, o un animal) y le da su carácter. Una figura con línea de acción en <i>C</i> o en <i>S</i> resulta natural y viva; una figura vertical y rígida parece de cartón.</p>
      <p>Ventajas del gesto: da movimiento, rompe el miedo a la hoja en blanco, se hace rápido y es el mejor ejercicio de <b>síntesis</b>. Se recomienda como calentamiento diario en el cuaderno: 10 gestos de 30 segundos, sin levantar casi el lápiz y sin borrar nunca.</p>`,
      svg: marco("Línea de acción en C y en S de una figura frente a una figura rígida",
        `${pa("M60 30 Q40 80 62 150", trazo("var(--red)", 3.5))}${ci(62, 26, 8, trazo("var(--red)", 2))}${t(60, 172, "C", { bold: 1, color: "var(--red)" })}${pa("M130 30 Q160 60 130 90 Q100 120 130 150", trazo("var(--pen)", 3.5))}${ci(130, 26, 8, trazo("var(--pen)", 2))}${t(130, 172, "S", { bold: 1, color: "var(--pen)" })}${ln(200, 36, 200, 150, "var(--muted)", 3.5)}${ci(200, 26, 8, trazo("var(--muted)", 2))}${t(200, 172, "rígida", { color: "var(--muted)" })}`),
    },
    {
      h: "Del objeto a las formas básicas",
      html: `<p>Cualquier objeto, por complicado que parezca, se puede reducir a una o varias <b>formas básicas</b>: el <b>cubo</b> (y el prisma), la <b>esfera</b>, el <b>cilindro</b> y el <b>cono</b>. Una naranja es una esfera; una lata, un cilindro; un helado, un cono y una esfera; una casa, un cubo con un prisma encima; una cabeza humana, una esfera con un plano y un maxilar; un tronco, un cilindro.</p>
      <p>Pensar de esta manera simplifica la observación: ya no «dibujas una botella», dibujas un cilindro con un cuello más estrecho, también cilíndrico, y una pequeña esfera redondeando el hombro. El volumen se establece primero con <mark>formas transparentes</mark>, como si estuvieran hechas de alambre, de manera que se pueden ver las partes de atrás y se corrigen más fácilmente la perspectiva y el eje.</p>
      <p>Esta forma de ver viene de Paul Cézanne, que afirmaba que en la naturaleza todo se modela según el cilindro, la esfera y el cono, y se ha convertido en el método base de la enseñanza del dibujo.</p>`,
      svg: formas,
    },
    {
      h: "Estructura, ejes y líneas de construcción",
      html: `<p>Las formas básicas se organizan con ayuda de una <b>estructura</b>. Los <b>ejes</b> son líneas imaginarias que pasan por el centro de un objeto: marcan su simetría, su inclinación y el punto donde se cruzan las partes. En un objeto de revolución, como una botella o un jarrón, el <b>eje vertical</b> es esencial: si lo trazas torcido, todo el objeto queda torcido; si lo trazas bien, puedes dibujar la mitad izquierda y reflejarla en la derecha.</p>
      <p>Las <b>líneas de construcción</b> son trazos suaves que no forman parte del resultado: ejes, cajas, diagonales, elipses de las bases y líneas de horizonte. Se dibujan <mark>ligeras, largas y sin borrar</mark>, y a medida que el dibujo avanza se refuerzan las que sirven y se dejan apagadas las demás. Muchas obras maestras del dibujo conservan visibles estas líneas, que dan una gran sensación de frescura.</p>
      <p>Un truco muy útil: las <b>elipses</b>. Un círculo visto en perspectiva se convierte en elipse, y cuanto más lejos está del nivel de los ojos, más abierta es; a la altura de los ojos se reduce a una línea. El eje mayor de la elipse siempre es perpendicular al eje del objeto.</p>`,
      svg: B.encaje("Esquema de encaje con ejes y formas básicas"),
    },
    {
      h: "El método del encaje paso a paso",
      html: `<p>El encaje se puede reducir a un procedimiento de cinco pasos que sirve para casi todo:</p>
      <ol><li><b>Observar y decidir</b>: ¿cuál es la forma general? ¿Es más alta o más ancha? ¿Dónde estará el objeto en el papel?</li>
      <li><b>Caja general</b>: un rectángulo (o paralelogramo) que contenga el objeto entero, con márgenes iguales a los lados. Establece el tamaño y la colocación.</li>
      <li><b>Ejes y mitades</b>: líneas verticales y horizontales por el centro de la caja, para repartir el peso.</li>
      <li><b>Formas básicas y cajas parciales</b>: dentro de la caja se bocetan los volúmenes principales con línea suave, comparando siempre unas medidas con otras.</li>
      <li><b>Puntos de paso y contorno</b>: se marcan los puntos donde el contorno cruza las líneas de referencia y se unen con el perfil final.</li></ol>
      <p>Se trabaja siempre de <b>lo general a lo particular</b>: primero lo grande, luego lo mediano, al final lo pequeño. El error más común es hacer el contrario, empezar por un detalle (el ojo, el asa) y construir el objeto a partir de él, con lo que el tamaño y la colocación se pierden. Y la regla de oro: <mark>no pasar al paso siguiente sin comprobar el anterior</mark>.</p>`,
      svg: B.flujo("Pasos del encaje", ["Observar la forma general", "Caja general con márgenes", "Ejes y mitades", "Formas básicas y cajas parciales", "Puntos de paso y contorno"], { t: "Encajar en cinco pasos" }),
      video: { id: "yNSna7YcMyU", titulo: "Encaje, encajado o proporción en el dibujo", canal: "Rincón del Artista", vistas: 30808 },
    },
    {
      h: "Medir con el lápiz",
      html: `<p>El método más conocido para comprobar proporciones es la <b>medida visual con el lápiz</b>, usada desde el Renacimiento. Se hace así: se extiende el brazo <b>completamente recto</b> (siempre a la misma distancia del ojo), se cierra un ojo y se alinea la punta del lápiz con un extremo del objeto; con el pulgar se marca el otro extremo. Esa distancia es tu <b>unidad de medida</b>. Después se compara con otras medidas del modelo («el ancho es 2/3 de la altura») y se traslada al papel.</p>
      <p>Hay que cuidar tres cosas: el brazo siempre extendido (si lo doblas, la medida cambia), el modelo siempre a la misma distancia y la cabeza siempre en la misma posición. La medida no se traslada en tamaño real, sino <mark>en proporción</mark>: si en la medida visual el objeto mide 3 unidades de alto y 2 de ancho, en el papel mide, por ejemplo, 15 cm × 10 cm (cada unidad = 5 cm).</p>
      <p>El lápiz sirve también como <b>plomada</b> (vertical), como <b>nivel</b> (horizontal) y como <b>goniómetro</b> improvisado para comparar ángulos: se alinea con una inclinación del modelo y se traslada, con la misma inclinación, al papel. Es una herramienta tan sencilla como potente.</p>`,
      svg: medir,
    },
    {
      h: "Ángulos y líneas de dirección",
      html: `<p>Cada borde de un objeto tiene una <b>dirección</b>: vertical, horizontal o inclinada. Las direcciones inclinadas son las más difíciles de acertar porque la mente tiende a «enderezarlas»: las pendientes parecen más verticales de lo que son. Para evitar este error se compara cada inclinación con la <b>vertical</b> o la <b>horizontal</b> que pasa por su punto de partida.</p>
      <p>Un truco consiste en imaginar la <b>esfera de reloj</b>: «este borde va de las 12 a las 2». Otro, usar el lápiz como referencia sosteniéndolo a brazo extendido sobre la inclinación, y otro más, trazar primero una <b>línea de dirección</b> ligera y larga que cruza todo el dibujo y se ajusta después.</p>
      <p>Los ángulos se comparan y se reparten: si un tejado cae a unos 30° respecto a la horizontal, el ángulo del alero con el muro debe ser coherente con eso. Las desviaciones pequeñas (de unos pocos grados) pasan desapercibidas al principio, pero se acumulan: una línea de dirección mal inclinada en una caja general arrastra a todas las demás.</p>`,
      svg: B.rejilla("Direcciones y su efecto", ["Dirección", "Referencia", "Error típico"], [["Vertical", "plomada", "se inclina"], ["Horizontal", "nivel", "se curva"], ["Oblicua", "reloj / lápiz", "se endereza"]], { t: "Controlar inclinaciones" }),
    },
    {
      h: "Alineaciones y puntos de paso",
      html: `<p>Los <b>puntos de paso</b> son los puntos del contorno que se localizan comprobando por dónde pasa una línea de referencia. Los más útiles son las <b>alineaciones</b>: imaginar una línea vertical que atraviesa el objeto y observar qué puntos quedan sobre ella («el borde de la oreja queda justo sobre el centro del ojo», «el pie de la botella está bajo la comisura de la manzana»).</p>
      <p>Se trazan dos líneas, una vertical y una horizontal, y se sitúan sobre ellas los puntos más destacados: <mark>cada punto se coloca en relación con dos referencias</mark> (a qué altura está y a qué distancia del eje). Así se evita el efecto de «bola de nieve», en el que cada nuevo punto se apoya en el anterior y los errores se acumulan.</p>
      <p>Una variante son los <b>triángulos de referencia</b>: unir tres puntos clave del modelo con líneas rectas. Si el triángulo es correcto, todo lo que cuelga de él también lo será. Es muy habitual en retrato (ojos-boca) y en bodegón (bases de tres objetos).</p>`,
      svg: alinea,
    },
    {
      h: "Encajar un bodegón y un conjunto de objetos",
      html: `<p>Cuando hay varios objetos, el encaje sigue el mismo método pero con un nivel más: primero la <b>caja general del conjunto</b> (el rectángulo que los envuelve a todos), luego las <b>cajas parciales</b> de cada objeto, y por último las <b>formas básicas</b> dentro de cada una.</p>
      <p>Hay que establecer enseguida las <b>relaciones entre objetos</b>: qué altura tiene la botella respecto a la manzana, a qué distancia está la caja del borde izquierdo, qué objeto queda más alto y qué objeto queda más bajo. Se trabajan los <i>espacios negativos</i> entre ellos: la forma del hueco que queda entre la botella y la caja es una forma más a dibujar y es muy útil para comprobar.</p>
      <p>También hay que prestar atención al <b>plano de apoyo</b>. Los objetos se asientan sobre una superficie: la base de cada uno es una elipse (o un rectángulo en perspectiva), y las bases más lejanas se ven más arriba en el papel y más aplastadas. Si se olvida el plano, los objetos parecen flotar. Y no hay que olvidar la <b>sombra proyectada</b>, que ayuda a anclarlos.</p>`,
      svg: bodegon,
      video: { id: "1Y-zsdkFUCY", titulo: "Cómo encajar tus dibujos y que queden proporcionados", canal: "Sir Pino", vistas: 30786 },
    },
    {
      h: "Revisar y corregir el encaje",
      html: `<p>Un encaje no está terminado hasta que se ha <b>revisado</b>. Cuando llevas un rato mirando tu dibujo dejas de ver sus errores, de modo que conviene ayudarse de recursos externos:</p>
      <ul><li><b>El espejo</b>: mirar el dibujo reflejado en un espejo (o con la cámara del móvil invertida) revela de golpe las torceduras y las asimetrías.</li>
      <li><b>Distancia</b>: alejarse dos o tres metros y mirarlo con los ojos entornados.</li>
      <li><b>Girar</b> el dibujo 180° o verlo en la pantalla del móvil en blanco y negro.</li>
      <li><b>Cuadrícula o acetato</b>: comparar con una referencia superpuesta.</li>
      <li><b>Pausa</b>: dejar el dibujo una hora o hasta el día siguiente y volver con ojos nuevos.</li></ul>
      <p>Los fallos más habituales son: <b>objeto demasiado pequeño</b> en la hoja (con márgenes enormes), <b>demasiado grande</b> y cortado, <b>inclinaciones exageradas</b>, <b>simetría falsa</b> (se igualan las dos mitades de algo que en realidad no es simétrico) y <b>proporciones cambiadas por el interés</b> (se agranda lo que más gusta). Para corregir, se dibuja <mark>encima</mark> con una línea más firme, sin borrar, y se deja la mejor.</p>`,
      svg: B.ciclo("Ciclo de revisión del encaje", "Revisar", ["Mirar en espejo", "Alejarse", "Girar 180°", "Comparar con medidas", "Corregir encima"]),
    },
  ],
  figura: {
    titulo: "El encaje de un vistazo",
    items: [["Caja general", "▭", "tamaño y colocación", "con márgenes"], ["Ejes", "＋", "simetría", "e inclinación"], ["Formas básicas", "◯ ▭ △", "cubo, esfera", "cilindro, cono"], ["Revisar", "↔", "medir y comparar", "espejo y giro"]],
  },
  video: { id: "yNSna7YcMyU", titulo: "Encaje, encajado o proporción en el dibujo", canal: "Rincón del Artista", vistas: 30808 },
  quiz: [
    ["¿Qué papel cumple la línea de contorno?", ["Describe el movimiento", "Separa la figura del fondo recorriendo su borde", "Sombrea el interior", "Marca los ejes"], 1, "El contorno delimita; el gesto sigue el movimiento; la estructura organiza."],
    ["La línea de gesto sirve para…", ["perfilar el detalle", "captar el movimiento y la actitud en pocos segundos", "dar color", "medir proporciones"], 1, "Es un trazo rápido, grande y sintético."],
    ["El agarre «de dibujo» se usa para…", ["detalles muy pequeños", "líneas largas, sombreado y gesto", "firmar", "usar regla"], 1, "Permite trazar con el brazo y con soltura."],
    ["Una línea modulada…", ["siempre tiene el mismo grosor", "varía de grosor y presión según la zona", "es la que se hace con regla", "no se puede borrar"], 1, "Más gruesa en sombra o cercanía y más fina en luz o lejanía."],
    ["El contorno ciego consiste en…", ["dibujar con los ojos cerrados", "mirar solo el modelo y no el papel", "dibujar sin lápiz", "calcar"], 1, "Entrena la conexión ojo-mano."],
    ["¿Quién popularizó el contorno ciego?", ["Kimon Nicolaïdes", "Vitruvio", "Seurat", "Goya"], 0, "Lo propuso en su libro de método para el dibujo."],
    ["Las cuatro formas básicas de construcción son…", ["punto, línea, plano, forma", "cubo, esfera, cilindro y cono", "triángulo, cuadrado, círculo y rombo", "elipse, parábola, hipérbola y recta"], 1, "Todo objeto puede reducirse a ellas."],
    ["Un jarrón es, básicamente…", ["un cubo", "un cuerpo de revolución con eje vertical", "un prisma", "una pirámide"], 1, "El eje vertical es esencial."],
    ["Las líneas de construcción son…", ["las que forman el resultado final", "trazos suaves de apoyo que se dejan ligeros", "líneas gruesas", "las que se borran siempre"], 1, "Se dibujan ligeras y no hace falta borrarlas."],
    ["Un círculo visto en perspectiva se convierte en…", ["cuadrado", "elipse", "recta siempre", "triángulo"], 1, "Se aplana según la altura del punto de vista."],
    ["El eje mayor de la elipse de una base cilíndrica es…", ["paralelo al eje del objeto", "perpendicular al eje del objeto", "oblicuo", "vertical siempre"], 1, "Siempre perpendicular al eje."],
    ["En el encaje se trabaja…", ["de lo particular a lo general", "de lo general a lo particular", "solo el detalle", "solo el contorno"], 1, "Primero lo grande, luego lo mediano y al final lo pequeño."],
    ["¿Cuál es el primer paso de un encaje?", ["Dibujar el ojo", "Observar la forma general y decidir la colocación", "Sombrear", "Borrar"], 1, "Antes de trazar hay que decidir."],
    ["Al medir con el lápiz, el brazo debe estar…", ["doblado", "completamente recto", "apoyado", "en movimiento"], 1, "Así la distancia ojo-lápiz es constante."],
    ["La medida visual se traslada al papel…", ["en tamaño real", "en proporción", "al revés", "sin comparar"], 1, "La unidad se escala: unidad × factor."],
    ["Las inclinaciones tienden a percibirse…", ["más tumbadas", "más verticales de lo que son", "exactas", "invertidas"], 1, "Se «enderezan» mentalmente."],
    ["Un punto de paso se define con…", ["una sola referencia", "una vertical y una horizontal de referencia", "una goma", "una sombra"], 1, "Se evita acumular errores."],
    ["En un bodegón, un objeto que parece flotar suele indicar que falta…", ["el plano de apoyo y la sombra proyectada", "más color", "otro objeto", "un marco"], 0, "Las bases y las sombras anclan los objetos."],
    ["Mirar el dibujo en un espejo sirve para…", ["borrarlo", "descubrir torceduras y asimetrías", "colorearlo", "calcarlo"], 1, "Invierte la imagen y revela errores."],
    ["¿Qué hacer con un error de encaje?", ["Borrar toda la hoja", "Dibujar encima con una línea más firme y conservar la mejor", "Tirar el dibujo", "Seguir sin corregir"], 1, "Se corrige sin borrar compulsivamente."],
  ],
  examen: [
    ["Dibujas una manzana y una botella. Antes de nada, ¿qué dibujas?", ["El tallo", "La caja general del conjunto", "Las sombras", "El fondo"], 1, "El conjunto se encaja primero con una caja que lo envuelve."],
    ["Una línea larga, continua y segura se consigue…", ["con la muñeca y pequeñas correcciones", "con el brazo y sin dudar", "con regla", "con goma"], 1, "El brazo da más control en trazos largos."],
    ["La esfera de la naranja y el cilindro de la lata son ejemplos de…", ["formas básicas", "texturas", "valores", "sombras"], 0, "Son los volúmenes elementales."],
    ["Si en el visor la altura de un objeto mide 3 unidades y el ancho 2, y en el papel quieres 15 cm de alto, el ancho será…", ["5 cm", "7,5 cm", "10 cm", "12 cm"], 2, "Cada unidad vale 5 cm: ancho = 2 × 5 = 10 cm."],
    ["¿Qué recurso sirve como plomada?", ["La goma", "El lápiz a brazo extendido en vertical", "La regla de plástico", "El sacapuntas"], 1, "El lápiz sirve para vertical, horizontal y ángulos."],
    ["El error de «bola de nieve» en el encaje es…", ["colocar cada punto respecto a dos referencias", "apoyar cada punto en el anterior y acumular errores", "usar el espejo", "medir con el lápiz"], 1, "Por eso se usan referencias fijas."],
    ["Para revisar un dibujo con ojos nuevos se puede…", ["borrar", "dejarlo una hora y volver", "pintar encima", "ampliarlo"], 1, "La pausa ayuda a ver los errores."],
    ["Una figura con línea de acción en S transmite…", ["rigidez", "naturalidad y movimiento", "frío", "ausencia de gesto"], 1, "Las curvas en C y S dan vida."],
  ],
  feynman: ["Los tres papeles de la línea: contorno, estructura y gesto", "Los cinco pasos del encaje y por qué se va de lo general a lo particular", "Cómo se mide con el lápiz y cómo se traslada la medida al papel", "Cómo revisar y corregir un encaje"],
  mapa: ["LA LÍNEA Y EL ENCAJE", [["Línea", "contorno · gesto · modulación"], ["Formas básicas", "cubo · esfera · cilindro · cono"], ["Encaje", "caja · ejes · formas · puntos"], ["Revisión", "medir · espejo · corregir"]]],
  tarjetas: [
    ["Línea de contorno", "La que recorre el borde de una forma y la separa del fondo."],
    ["Línea de gesto", "Trazo rápido que capta el movimiento y la actitud."],
    ["Línea modulada", "Línea cuyo grosor y presión varían de forma expresiva."],
    ["Contorno ciego", "Dibujar el borde mirando solo al modelo y no al papel."],
    ["Formas básicas", "Cubo, esfera, cilindro y cono: la base de todo volumen."],
    ["Eje", "Línea imaginaria central que marca simetría e inclinación."],
    ["Líneas de construcción", "Trazos ligeros de apoyo que organizan el dibujo."],
    ["Caja general", "Rectángulo que contiene el objeto entero y fija tamaño y posición."],
    ["Lo general a lo particular", "Primero lo grande, luego lo mediano y al final el detalle."],
    ["Medida visual", "Brazo recto, un ojo cerrado: la longitud del lápiz es la unidad."],
    ["Punto de paso", "Punto del contorno situado con una vertical y una horizontal."],
    ["Revisión", "Espejo, distancia, giro y pausa para descubrir errores."],
  ],
  ejemplos: [
    ["Encaja una botella de 28 cm de alto y 8 cm de ancho en un folio horizontal con márgenes iguales.", ["Folio A4 horizontal: 29,7 × 21 cm; la botella es vertical y alta.", "Caja general de proporción 28:8 = 3,5:1; con 15 cm de alto, ancho de unos 4,3 cm.", "Centra la caja dejando márgenes: 3 cm arriba y abajo y unos 12,7 cm laterales."], "Caja de 4,3 × 15 cm centrada, con eje vertical al medio."],
    ["Dibuja una lata (cilindro) con el método de las elipses.", ["Eje vertical largo con ligera línea.", "Elipse superior abierta; elipse inferior algo más abierta que la superior (está más lejos del nivel de los ojos si se mira desde arriba).", "Une los laterales con dos verticales tangentes a las elipses."], "Cilindro con ejes y elipses coherentes: la lata se ve volumétrica."],
    ["Con el lápiz a brazo extendido, la altura de una puerta mide 7 cm y su anchura 3 cm. Quieres que en el papel mida 14 cm de alto. ¿Y de ancho?", ["Factor de escala = 14 / 7 = 2.", "Ancho = 3 × 2 = 6 cm."], "6 cm de ancho: la proporción 7:3 se conserva."],
    ["Una manzana y una pera quedan a 12 cm y 20 cm del borde izquierdo del papel. Si la pera es 1,5 veces más alta que la manzana (que mide 6 cm), ¿cuánto mide la pera?", ["Altura de la pera = 6 × 1,5 = 9 cm.", "Se bosqueja cada caja parcial con esa altura.", "Se comprueba el espacio negativo entre ambas."], "La pera mide 9 cm de alto."],
    ["Un dibujo de silla tiene las patas inclinadas hacia fuera de más. Describe cómo corregirlo.", ["Trazar una vertical por el punto de apoyo de la pata.", "Medir con el lápiz el ángulo real respecto a la vertical.", "Redibujar encima con la inclinación comprobada."], "La pata queda más cerca de la vertical, como en el modelo."],
    ["Planifica un calentamiento de 10 minutos antes de un dibujo.", ["3 min: líneas rectas y círculos de una vez.", "3 min: 6 gestos de 30 segundos.", "4 min: contorno ciego del objeto a dibujar."], "Rutina de 10 minutos para soltar la mano y afinar el ojo."],
  ],
  errores: [
    "Empezar por un detalle (el ojo, el asa) y construir lo demás a partir de él.",
    "Dibujar el objeto demasiado pequeño en una esquina o tan grande que se corta.",
    "Hacer trazos cortos y temblorosos en lugar de líneas largas con el brazo.",
    "Enderezar las inclinaciones y no compararlas con la vertical o la horizontal.",
    "Usar el lápiz con el brazo doblado: las medidas dejan de ser comparables.",
    "Borrar sin parar los trazos de encaje en lugar de reforzar la línea buena.",
  ],
  ejercicios: {
    b: [
      ["Nombra los tres papeles de la línea.", "Contorno, estructura y gesto."],
      ["Describe los dos agarres básicos del lápiz y para qué sirve cada uno.", "De escritura (cerca de la punta, detalle) y de dibujo o pincel (desde atrás, líneas largas, sombreado y gesto)."],
      ["¿Qué es una línea modulada?", "Una línea que varía de grosor y presión: más gruesa en la sombra o la cercanía, más fina en la luz o la lejanía."],
      ["¿Qué es el contorno ciego y para qué sirve?", "Dibujar el borde mirando solo el modelo. Entrena la conexión ojo-mano y la observación de bordes reales."],
      ["Cita las cuatro formas básicas de construcción.", "Cubo, esfera, cilindro y cono."],
      ["Reduce a formas básicas: una naranja, una lata, un helado de cucurucho.", "Naranja: esfera. Lata: cilindro. Helado: esfera sobre un cono."],
      ["¿Qué son las líneas de construcción?", "Trazos ligeros de apoyo (ejes, cajas, horizonte) que organizan el dibujo y no hace falta borrar."],
      ["¿Qué es la caja general?", "El rectángulo que envuelve todo el objeto o conjunto y establece su tamaño y colocación en el formato."],
      ["¿Por qué se empieza «por lo general»?", "Para decidir primero el tamaño, la colocación y las proporciones; los detalles se apoyan después en una base correcta."],
      ["Explica cómo se mide con el lápiz.", "Brazo recto, un ojo cerrado; se alinea la punta con un extremo y el pulgar con el otro; esa longitud es la unidad y se compara con otras medidas."],
      ["¿Para qué sirve el lápiz como plomada?", "Para comprobar la vertical de un borde y la verticalidad de un eje."],
      ["Enumera tres recursos para revisar un dibujo.", "Espejo, alejarse, girar 180°, comparar con una cuadrícula o dejarlo reposar."],
    ],
    m: [
      ["Un objeto mide, en la medida visual, 4 unidades de alto y 3 de ancho. Si dibujas la altura con 20 cm, ¿cuánto mide el ancho?", "Factor = 20/4 = 5 cm por unidad; ancho = 3 × 5 = 15 cm."],
      ["Una caja general tiene 18 cm de ancho. El objeto debe ocupar los 2/3 del ancho. ¿Qué ancho tiene?", "18 × 2/3 = 12 cm, con 3 cm de margen a cada lado."],
      ["Explica por qué una elipse es más abierta cuanto más lejos está del nivel de los ojos.", "Porque al separarse de la altura de los ojos el plano circular se ve más de frente: se aproxima a un círculo; a la altura de los ojos se reduce a una línea."],
      ["Un compañero dibuja las patas de una mesa verticales y paralelas al borde, y se ve rara. ¿Qué le falta?", "Perspectiva: las líneas que se alejan convergen, y las patas más lejanas se ven más cortas; hay que revisar horizonte y elipses."],
      ["Un dibujante empieza por el asa de una taza y la taza queda enorme. Explica el fallo y la solución.", "Empieza por un detalle sin caja general; se pierden tamaño y proporción. Debe encajar la caja general y el cilindro antes del asa."],
      ["¿Cómo usarías una vertical para comprobar un punto en un retrato?", "Trazar una vertical por el centro del ojo y ver qué puntos caen en ella (comisura, ala de la nariz); si no coinciden con el modelo, corregir."],
      ["Describe qué verías al mirar al espejo un dibujo con eje torcido.", "El eje desviado se hace evidente: una caída o inclinación visible que antes pasaba desapercibida, ya que el ojo ve el dibujo como nuevo."],
      ["Un dibujo de bodegón tiene la manzana más alta que la botella. En el modelo ocurre al revés. ¿Qué paso del encaje fallaría?", "Las relaciones entre cajas parciales: no se compararon las alturas entre sí."],
      ["¿Qué ventajas tiene dibujar con líneas de construcción visibles?", "Frescura, información sobre el proceso, facilidad de corrección y sensación de volumen."],
      ["Propón un ejercicio de 5 minutos para entrenar la línea segura.", "Hoja llena de rectas de borde a borde, círculos y elipses sin levantar el lápiz, con el brazo y a ritmo constante."],
    ],
    a: [
      ["Un jarrón de 30 cm de alto y 12 cm de ancho máximo debe encajarse en una hoja A4 vertical con un margen mínimo de 3 cm. ¿Qué tamaño máximo puede tener en el papel y qué escala se aplica?", "Zona útil: 29,7 − 6 = 23,7 cm de alto y 21 − 6 = 15 cm de ancho. Por altura: escala 23,7/30 ≈ 0,79; por ancho: 15/12 = 1,25. Se toma la menor: 0,79; jarrón de ≈23,7 × 9,5 cm."],
      ["Dos objetos tienen la misma altura real pero uno está al doble de distancia del observador. ¿Qué altura relativa tendrán en el papel?", "En perspectiva simple, el doble de distancia reduce el tamaño aparente a la mitad: el lejano mide la mitad de alto."],
      ["Describe un encaje de un conjunto de tres objetos con la secuencia completa de decisiones y comprobaciones.", "Caja general con márgenes; ejes; cajas parciales con alturas relativas medidas con el lápiz; formas básicas; comprobar espacios negativos y alineaciones; contorno final y revisión en el espejo."],
      ["Analiza por qué un dibujo muy detallado puede resultar mal si el encaje es defectuoso.", "El detalle no corrige la estructura: aunque cada parte esté bien dibujada, las proporciones y relaciones erróneas se ven a primera vista y rompen la credibilidad del conjunto."],
      ["Propón y justifica una rutina semanal de entrenamiento de línea y encaje (cinco días).", "L: líneas y elipses; M: contorno ciego; X: gestos de 30 s; J: encaje de 3 objetos con revisión en espejo; V: dibujo completo de 30 min con autoevaluación. Cubre línea, observación, síntesis y método."],
      ["Un cilindro mide 20 cm de alto con base de 8 cm de diámetro. Dibujado a escala 1:2 con la elipse superior abierta 1/4 de su ancho, ¿qué dimensiones tiene la elipse?", "Escala 1:2: alto 10 cm y diámetro 4 cm. Apertura de 1/4 del eje mayor: 4 × 1/4 = 1 cm de eje menor."],
      ["Diseña un ejercicio de dibujo que combine gesto, estructura y contorno en 15 minutos y explica el objetivo de cada fase.", "5 min: gestos de una figura o planta para captar movimiento; 5 min: estructura con formas básicas y ejes; 5 min: contorno modulado. Objetivo: pasar de lo general a lo particular conservando la vida del gesto."],
      ["Un estudiante afirma que dibujar con regla mejora el encaje. Discute la afirmación.", "La regla puede servir para comprobar ángulos o alturas, pero dibujar con ella elimina la práctica de la mano libre y la observación. Para entrenar el ojo es mejor medir con el lápiz y trazar a mano alzada."],
    ],
  },
  glosario: [
    ["Encaje", "Proceso de situar y dimensionar un dibujo con formas simples antes del detalle."],
    ["Contorno", "Línea que recorre el borde de una forma."],
    ["Contorno ciego", "Contorno dibujado mirando solo el modelo."],
    ["Gesto", "Trazo rápido que capta el movimiento de una forma."],
    ["Línea de acción", "Curva dominante que recorre una figura."],
    ["Modulación", "Variación del grosor y la presión de la línea."],
    ["Formas básicas", "Cubo, esfera, cilindro y cono como bases del volumen."],
    ["Eje", "Línea imaginaria que pasa por el centro de un objeto."],
    ["Línea de construcción", "Trazo ligero auxiliar para organizar el dibujo."],
    ["Caja general", "Rectángulo que contiene el objeto o conjunto."],
    ["Elipse", "Círculo visto en perspectiva."],
    ["Medida visual", "Comparación de proporciones con el lápiz a brazo extendido."],
    ["Punto de paso", "Punto de contorno situado con líneas de referencia."],
    ["Alineación", "Línea imaginaria que une puntos de un modelo."],
    ["Espacio negativo", "Forma del hueco entre los objetos."],
    ["Plano de apoyo", "Superficie sobre la que se asienta el objeto."],
  ],
  situacion: {
    titulo: "Retrato de un objeto con historia",
    reto: "Cada alumno trae un objeto personal con historia (una llave, un zapato, una taza) y lo dibuja en tres fases: gesto, encaje y contorno modulado, con una breve memoria del proceso.",
    pasos: [
      "Observa el objeto 5 minutos desde tres puntos de vista y elige el más interesante.",
      "Haz tres gestos rápidos de 30 segundos para captar su carácter.",
      "Encaja el objeto con caja general, ejes, formas básicas y puntos de paso, y comprueba con el lápiz.",
      "Haz el contorno modulado, grueso en el borde de sombra y fino en el de luz.",
      "Revisa con el espejo, corrige encima y anota qué errores encontraste.",
    ],
    producto: "Una lámina con los gestos, el encaje con líneas de construcción visibles y el contorno final, más una ficha de revisión con tres correcciones.",
    evaluacion: [
      "El encaje es proporcionado y bien colocado en el formato, con márgenes equilibrados.",
      "La línea es segura, modulada y expresiva.",
      "Las líneas de construcción son ligeras y organizadas, y se aprecia el método.",
      "La revisión identifica errores reales y propone correcciones adecuadas.",
    ],
  },
  familias: [
    "Proponedle un reto de «cinco minutos de líneas» al día, en el mismo cuaderno.",
    "Jugad a dibujar el mismo objeto sin mirar el papel y comparad los resultados.",
    "Pedidle que os enseñe cómo mide con el lápiz y probadlo juntos con un mueble.",
    "Alentad que deje visibles las líneas de construcción: son la prueba de que piensa antes de trazar.",
  ],
  saberes: "Estructura y proporción en el dibujo: la línea como elemento expresivo y de contorno, formas básicas y estructura, procedimientos de encaje y medición visual, revisión y corrección de proporciones.",
  ideas: [
    "Empezar cada clase con diez minutos de calentamiento de líneas, gestos y contorno ciego.",
    "Montar un banco de objetos con formas básicas para practicar el encaje.",
    "Hacer una sesión de corrección por parejas con espejo y acetato superpuesto.",
    "Proponer una «caza de formas»: encontrar y dibujar cubos, esferas, cilindros y conos en el patio.",
  ],
  fuentes: [
    { t: "Kimon Nicolaïdes, método natural de dibujo (contorno ciego), referencia histórica", url: "https://es.wikipedia.org/wiki/Kimon_Nicola%C3%AFdes" },
    { t: "Dibujo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dibujo" },
    { t: "Paul Cézanne, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Paul_C%C3%A9zanne" },
  ],
});
