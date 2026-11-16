// Dibujo Artístico I, 1º de Bachillerato. Tema 7, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");
const { marco, t, ln, rc, ci, el, pa, trazo } = B;

// Maniquí de formas simples: cabeza, tórax, pelvis, brazos y piernas.
const maniqui = marco("Maniquí de formas simples: cabeza ovoide, tórax, pelvis, cilindros de miembros y articulaciones",
  `${el(70, 26, 12, 15, trazo("var(--ink)", 2))}${ln(70, 41, 70, 48, "var(--ink)", 2.5)}${pa("M48 50 H92 L86 92 H54Z", trazo("var(--pen)", 2.2))}${pa("M54 96 H86 L82 114 H58Z", trazo("var(--red)", 2.2))}
  ${ln(48, 52, 30, 84, "var(--leaf)", 4)}${ln(30, 84, 24, 116, "var(--leaf)", 4)}${ln(92, 52, 110, 84, "var(--leaf)", 4)}${ln(110, 84, 116, 116, "var(--leaf)", 4)}${ln(62, 114, 58, 150, "var(--sun)", 5)}${ln(58, 150, 56, 178, "var(--sun)", 5)}${ln(78, 114, 82, 150, "var(--sun)", 5)}${ln(82, 150, 84, 178, "var(--sun)", 5)}
  ${[[48, 50], [92, 50], [30, 84], [110, 84], [58, 150], [82, 150], [70, 94], [62, 114], [78, 114]].map(([x, y]) => ci(x, y, 3.5, 'fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"')).join("")}
  ${t(190, 30, "cabeza: óvalo", { anchor: "middle", maxW: 110 })}${t(190, 52, "tórax: caja", { color: "var(--pen)", maxW: 110, bold: 1 })}${t(190, 74, "pelvis: caja", { color: "var(--red)", maxW: 110, bold: 1 })}${t(190, 96, "brazos: cilindros", { color: "var(--leaf)", maxW: 110, bold: 1 })}${t(190, 118, "piernas: cilindros", { color: "#c58f00", maxW: 110, bold: 1 })}${t(190, 150, "● articulaciones", { color: "var(--muted)", maxW: 110 })}`);

// Contrapposto: peso sobre una pierna, hombros y caderas en contrapeso.
const contrapposto = marco("Contrapposto: caderas y hombros inclinados en sentidos contrarios y línea de gravedad vertical",
  `${ln(70, 10, 70, 172, "var(--red)", 1.3, 'stroke-dasharray="5 3"')}${t(70, 8, "", {})}${ci(72, 24, 11, trazo("var(--ink)", 2))}${ln(72, 35, 70, 48, "var(--ink)", 2.5)}${ln(46, 54, 94, 46, "var(--pen)", 3.5)}${ln(70, 50, 70, 96, "var(--ink)", 2.5)}${ln(54, 100, 90, 108, "var(--red)", 3.5)}
  ${ln(58, 102, 64, 172, "var(--sun)", 4.5)}${ln(84, 108, 98, 168, "var(--sun)", 4.5)}${ln(46, 54, 40, 100, "var(--leaf)", 3.5)}${ln(94, 46, 106, 90, "var(--leaf)", 3.5)}
  ${t(190, 40, "hombros: suben", { color: "var(--pen)", bold: 1, maxW: 110 })}${t(190, 56, "a un lado", { color: "var(--pen)", maxW: 110 })}${t(190, 90, "caderas: bajan", { color: "var(--red)", bold: 1, maxW: 110 })}${t(190, 106, "al contrario", { color: "var(--red)", maxW: 110 })}${t(190, 140, "la línea de gravedad", { fs: 9.5, color: "var(--muted)", maxW: 110 })}${t(190, 154, "cae sobre el pie de apoyo", { fs: 9.5, color: "var(--muted)", maxW: 110 })}`);

// Mano en bloques: palma cuadrada y dedos cilíndricos.
const mano = marco("Mano simplificada: palma en bloque, dedos de tres falanges y pulgar aparte",
  `${pa("M70 150 L60 96 L108 92 L118 150Z", trazo("var(--pen)", 2.2))}${[[68, 96, 62, 38], [80, 94, 78, 28], [94, 92, 94, 32], [106, 92, 110, 42]].map(([x1, y1, x2, y2]) => `${ln(x1, y1, x2, y2, "var(--ink)", 7)}${ci(x1 + (x2 - x1) / 3, y1 + (y2 - y1) / 3, 2.5, 'fill="var(--paper)"')}${ci(x1 + 2 * (x2 - x1) / 3, y1 + 2 * (y2 - y1) / 3, 2.5, 'fill="var(--paper)"')}`).join("")}${ln(64, 120, 36, 96, "var(--red)", 8)}
  ${t(196, 40, "palma: bloque", { color: "var(--pen)", bold: 1, maxW: 110 })}${t(196, 64, "dedos: 3 falanges", { maxW: 110 })}${t(196, 88, "pulgar: dos falanges", { color: "var(--red)", maxW: 110 })}${t(196, 118, "el dedo medio es", { fs: 9.5, color: "var(--muted)", maxW: 110 })}${t(196, 132, "el más largo", { fs: 9.5, color: "var(--muted)", maxW: 110 })}`);

// Escorzo: el mismo cilindro visto de lado y de frente.
const escorzo = marco("Escorzo: el mismo antebrazo largo visto de lado y acortado al apuntar hacia el observador",
  `${rc(20, 50, 100, 24, 'fill="var(--card)" stroke="var(--pen)" stroke-width="2.2" rx="10"')}${t(70, 96, "de lado: largo", { bold: 1, maxW: 100 })}
  ${rc(150, 40, 56, 56, 'fill="var(--card)" stroke="var(--red)" stroke-width="2.2" rx="28"')}${ci(178, 68, 14, 'fill="none" stroke="var(--red)" stroke-width="1.4"')}${el(178, 68, 5, 5, 'fill="var(--red)" fill-opacity=".3"')}${t(178, 116, "de frente: acortado", { bold: 1, maxW: 110 })}${t(130, 156, "se dibuja lo que se ve, no lo que se sabe", { color: "var(--muted)", maxW: 230 })}`);

module.exports = B.tema({
  titulo: "La figura humana",
  minutos: 115,
  objetivos: [
    "Construir una figura con formas simples, ejes y articulaciones y captar su línea de acción",
    "Aplicar las proporciones de adulto, niño y rostro, y reconocer sus variaciones por edad y sexo",
    "Representar el equilibrio y el movimiento con contrapposto, peso y línea de gravedad",
    "Abordar el escorzo, las manos y los pies, la anatomía superficial y los pliegues de la ropa con método",
  ],
  claves: ["figura humana", "línea de acción", "maniquí", "canon", "articulación", "contrapposto", "línea de gravedad", "escorzo", "anatomía artística", "modelo vivo"],
  pregunta: {
    texto: "Casi todos hemos dibujado «muñecos de palo», y casi todos hemos desistido al intentar dibujar una persona de verdad. ¿Dónde está el salto entre el muñeco y la figura creíble?",
    respuesta: "En el <mark>método</mark>: la figura se construye con formas simples (óvalo, cajas, cilindros), sobre una línea de acción y unas proporciones, y se va afinando. El «muñeco de palo» es un buen punto de partida si se le da <b>volumen, peso y movimiento</b>. Dibujar la figura no es cuestión de talento sino de tener un procedimiento y repetirlo.",
  },
  lectura: {
    titulo: "Veinte minutos con un modelo",
    html: `<p>En la sala de dibujo de la facultad hace calor y huele a carboncillo. Sobre una tarima, una modelo ha adoptado una pose: el peso sobre la pierna derecha, un brazo apoyado en la cadera, la mirada perdida. Veinte estudiantes han colocado sus caballetes en semicírculo. El profesor da una instrucción sencilla: «Tenéis treinta segundos. No miréis el papel. Solo el gesto».</p>
    <p>Suena un cronómetro. Las manos se mueven rápidas, trazan una curva larga que va de la cabeza al pie de apoyo y otras dos que cruzan los hombros y la cadera. Treinta segundos después, la modelo cambia de pose y empieza otro dibujo. Así se entrenan los artistas desde el Renacimiento: no empiezan por los ojos ni por las manos, sino por la acción y la estructura.</p>
    <p>La figura humana es el tema más difícil del dibujo porque todos sabemos muy bien cómo es una persona y notamos al instante cuando algo falla. Pero también es el más gratificante: con unas pocas reglas de proporción, unas formas básicas y mucha observación, cualquiera puede aprender. En este tema recorrerás ese camino, desde el esquema más simple hasta el retrato vestido.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Por qué dibujar la figura humana",
      html: `<p>La <b>figura humana</b> ha sido el motivo central del arte durante milenios: del <i>kouros</i> griego a los retratos de Velázquez, de las esculturas de Miguel Ángel a los cómics. Hay varias razones. Es lo más <b>cercano</b> y reconocible para nosotros; es <b>expresiva</b>, porque comunica emociones con la postura y el gesto; y es <b>compleja</b>, porque reúne todos los problemas del dibujo: proporción, volumen, perspectiva, movimiento y detalle.</p>
      <p>Por eso las academias de arte la han puesto siempre en el centro del aprendizaje. El <b>modelo vivo</b> (una persona que posa) es el ejercicio fundamental desde el siglo XVI; antes de dibujar del natural, se copiaban yesos de esculturas clásicas y láminas anatómicas.</p>
      <p>Dibujar personas mejora todo lo demás: quien sabe dibujar una figura sabe dibujar casi cualquier cosa, porque ha aprendido a ver proporciones, ritmos, pesos y equilibrios. Además, es útil en muchos campos profesionales: ilustración, animación, moda, arquitectura (para dar escala) y diseño de personajes.</p>`,
      svg: B.cajas("Por qué dibujar la figura", [["Cercana", "todos la conocemos"], ["Expresiva", "postura y gesto"], ["Compleja", "reúne todos los retos"], ["Útil", "ilustración, moda, cine"]], { t: "Un tema esencial" }),
    },
    {
      h: "Línea de acción y esquema de formas simples",
      html: `<p>Antes de dibujar el contorno hay que establecer la <b>línea de acción</b>: la curva dominante que recorre toda la figura, de la cabeza al pie que soporta el peso, y que expresa la intención de la pose (un salto, un descanso, un esfuerzo). Se dibuja con una sola línea fluida, en trazos ligeros.</p>
      <p>Sobre ella se construye el <b>maniquí</b> o esquema con formas simples: un <b>óvalo</b> para la cabeza, una <b>caja</b> trapezoidal para el tórax, otra para la pelvis, <b>cilindros</b> alargados para brazos, antebrazos, muslos y piernas, y pequeños círculos para las <b>articulaciones</b> (hombros, codos, muñecas, caderas, rodillas, tobillos). El tórax y la pelvis pueden girar de forma independiente, unidos por la columna.</p>
      <p>Esta forma de construir permite resolver el <mark>volumen y la perspectiva antes que el detalle</mark>: el maniquí «se ve» en tres dimensiones y a partir de él se dibuja cualquier postura sin perder las proporciones. Los muñecos de madera articulados que usan los dibujantes sirven para estudiar poses.</p>`,
      svg: maniqui,
      video: { id: "CGokSBh67Rg", titulo: "Aprende a dibujar anatomía en un solo vídeo", canal: "Aleks Font", vistas: 1451745 },
    },
    {
      h: "Las proporciones del cuerpo",
      html: `<p>Como se vio en el tema de la proporción, el cuerpo adulto se mide en <b>cabezas</b>: unas 7,5 en la realidad y 8 en el canon idealizado. Recuerda las marcas clave: pezones en la segunda cabeza, ombligo en la tercera, entrepierna en la cuarta (mitad del cuerpo), rodillas en la sexta y pies en la octava. Los brazos extendidos miden de punta a punta lo mismo que la altura.</p>
      <p>Otras referencias útiles para un esquema:</p>
      <ul><li>Los <b>hombros</b> miden unas dos cabezas de ancho en el varón y un poco menos en la mujer; las <b>caderas</b>, similar en la mujer y menos que los hombros en el varón.</li>
      <li>El <b>codo</b> queda a la altura de la cintura y la <b>muñeca</b> a la de la entrepierna, con los brazos caídos.</li>
      <li>La <b>mano</b> es casi tan larga como el rostro (del mentón a la línea del pelo).</li>
      <li>El <b>pie</b> mide una cabeza y el <b>antebrazo</b>, algo más que el pie.</li>
      <li>La mitad del cuerpo está en la <b>entrepierna</b>, no en la cintura.</li></ul>
      <p>Hay que usar las proporciones como una <mark>guía de comprobación</mark>, no como una receta. Cada persona es distinta, y en cada pose la perspectiva acorta unas partes y alarga otras. Con el lápiz y el método de la medida visual, se compara con el modelo real.</p>`,
      svg: B.canon("Canon de ocho cabezas para el esquema de la figura"),
      video: { id: "qSmByFyKy0E", titulo: "Cómo dibujar la figura humana paso a paso", canal: "Estudio Santaella", vistas: 543126 },
    },
    {
      h: "Edad, sexo y complexión",
      html: `<p>Las proporciones cambian con la edad. Un <b>recién nacido</b> tiene unas 4 cabezas de altura y la cabeza ocupa un cuarto del cuerpo; un niño de <b>2 años</b>, unas 5; uno de <b>6 años</b>, unas 6; un <b>adolescente</b>, unas 7; y el adulto, 7,5. En el niño, la cabeza es proporcionalmente grande y los ojos quedan más bajos respecto a la cabeza (más cerca de la mitad), la cara es más pequeña respecto al cráneo y los miembros son más cortos y redondeados.</p>
      <p>Entre <b>hombres</b> y <b>mujeres</b> adultos hay diferencias medias: los hombros del hombre son más anchos que sus caderas, el tronco es más cuadrado y la musculatura más marcada; en la mujer, caderas y hombros se igualan, la cintura es más estrecha y los contornos, más suaves. Pero la variedad individual es enorme, y conviene <mark>observar siempre al modelo</mark> en lugar de dibujar estereotipos.</p>
      <p>Lo mismo ocurre con la <b>complexión</b>: tipos delgados, atléticos o robustos se distinguen por el volumen del tronco y de las extremidades, no por la altura. En personas mayores cambian la postura (la espalda se curva), la musculatura y la piel. Dibujar a personas diversas es una de las mejores formas de afinar la observación.</p>`,
      svg: B.rejilla("Cabezas de altura por edad", ["Edad", "Cabezas", "Rasgo"], [["Recién nacido", "4", "cabezón"], ["2 años", "5", "redondeado"], ["6 años", "6", "piernas cortas"], ["Adolescente", "7", "estirón"], ["Adulto", "7,5", "canon 8"]], { t: "Proporción y edad" }),
    },
    {
      h: "La cabeza: construcción y orientación",
      html: `<p>La cabeza se construye partiendo de una <b>esfera</b> a la que se recortan los laterales (el cráneo es más ancho que alto de perfil) y a la que se añade el <b>maxilar</b> en la parte inferior. Sobre la esfera se trazan una <b>línea vertical</b> central y una <b>línea horizontal de ojos</b>, que cambian de forma y de dirección según la orientación de la cabeza.</p>
      <p>Cuando la cabeza se gira, la línea vertical se curva como un meridiano de globo terráqueo y la horizontal se curva hacia arriba o hacia abajo según la cabeza se incline hacia el observador o se aleje. Las referencias de <b>tercios</b> (frente, nariz, boca y barbilla) se mantienen, pero se deforman con la perspectiva.</p>
      <p>En perfil, la cabeza es casi tan <b>profunda</b> como alta; el oído queda a medio camino entre la frente y la nuca, a la altura entre las cejas y la base de la nariz; y el cuello no es vertical, sino que sale algo hacia delante y se inserta bajo el cráneo. Errores típicos: cabezas planas como una máscara, ojos demasiado altos y cuello demasiado fino o recto.</p>`,
      svg: B.rostro("Rostro: óvalo, línea de ojos y tercios"),
    },
    {
      h: "El tronco: caja torácica, pelvis y columna",
      html: `<p>El <b>tronco</b> se compone de tres masas que se pueden esquematizar: la <b>caja torácica</b> (un huevo o caja trapezoidal de hombros anchos y base más estrecha), la <b>pelvis</b> (una caja en forma de cuenco o cubo inclinado) y entre ellas la <b>columna vertebral</b>, flexible, con forma de «S» suave. Tórax y pelvis son masas rígidas; la flexibilidad del tronco está entre ambas, en la cintura.</p>
      <p>Esta división explica las poses: cuando una masa se inclina o gira, la otra se contrapesa. Dibujar las dos cajas con su <b>inclinación relativa</b> es más útil que dibujar el contorno exacto del torso. La línea de los <b>hombros</b> y la de las <b>caderas</b> suelen inclinarse en sentidos opuestos cuando la persona apoya el peso en una pierna.</p>
      <p>Algunos puntos de referencia: la <b>clavícula</b> y el hueco entre ellas (la «fosa yugular»), el <b>esternón</b> en el centro del tórax, las <b>crestas ilíacas</b> (los huesos de la cadera) y la línea <b>central del cuerpo</b>, que marca la simetría y se curva con la postura. Aunque la superficie esté cubierta por ropa, conocer esta estructura evita que los cuerpos se vean como sacos.</p>`,
      svg: B.comparar("Tronco rígido frente a tronco articulado", ["Sin estructura", ["silueta de saco", "sin eje", "sin giro", "rígido"]], ["Con estructura", ["tórax y pelvis", "columna en S", "inclinan opuesto", "vivo"]]),
    },
    {
      h: "Brazos y piernas: cilindros y articulaciones",
      html: `<p>Las extremidades se esquematizan con <b>cilindros</b> o conos alargados, unidos por <b>articulaciones</b> que son los puntos de giro. Cada extremidad tiene tres segmentos: en el brazo, el <b>brazo</b>, el <b>antebrazo</b> y la <b>mano</b>; en la pierna, el <b>muslo</b>, la <b>pierna</b> y el <b>pie</b>. Los segmentos se afinan hacia la articulación y se ensanchan en los músculos.</p>
      <p>Observa los <b>ritmos</b>: los miembros no son rectos, tienen ligeras curvas que se oponen unas a otras (el muslo es convexo por delante; la pantorrilla, por detrás). El contorno externo de la pierna suele alternar curva y línea más recta y el interno, lo contrario. Estas ondulaciones suaves dan naturalidad.</p>
      <p>Cuando un miembro se flexiona, los cilindros se superponen y aparece el <b>escorzo</b>. La regla básica: se dibuja la forma como una masa cilíndrica en perspectiva con las elipses de sus extremos, y los detalles de músculos y huesos vienen después. Recuerda que el <b>codo</b> y la <b>rodilla</b> son articulaciones de bisagra (flexionan en un solo plano), y el <b>hombro</b> y la <b>cadera</b>, de rótula (giran en todas direcciones).</p>`,
      svg: B.flujo("Esquema de un miembro", ["Línea de acción del miembro", "Cilindros por segmento", "Articulaciones como círculos", "Ritmos de curvas opuestas", "Contorno y detalle"], { t: "De la línea al miembro" }),
    },
    {
      h: "Manos y pies",
      html: `<p>Las <b>manos</b> asustan a los principiantes por su aparente complejidad, pero se simplifican con facilidad: una <b>palma</b> como un bloque casi cuadrado (algo más larga que ancha), cuatro <b>dedos</b> de tres falanges cada uno, que salen en abanico con distinta longitud (el medio es el mayor), y un <b>pulgar</b> de dos falanges que sale aparte, desde la base de la palma. La mano cerrada es un bloque con los dedos curvados como cilindros; la mano abierta se parece a un guante.</p>
      <p>Proporciones útiles: la mano mide casi lo mismo que el rostro (del mentón a la raíz del pelo), la palma es la mitad de la mano, los dedos se alinean al flexionarlos en una curva que sigue el eje de los nudillos. En un dibujo, empieza por el <b>bloque</b> y los <b>ejes</b> de los dedos, después añade las falanges y por último las uñas y los pliegues.</p>
      <p>Los <b>pies</b> se simplifican con una cuña: el talón en el extremo y los dedos como un bloque pequeño en la punta; el empeine, arqueado; en perspectiva se acortan mucho. El pie mide una cabeza y se apoya en tres puntos (talón, base del dedo gordo y base del dedo pequeño). Dibujar bien los pies es la clave para que una figura <b>pise</b> el suelo y no parezca que flota.</p>`,
      svg: mano,
    },
    {
      h: "Anatomía artística básica",
      html: `<p>No hace falta saber medicina para dibujar, pero sí conocer los <b>puntos óseos</b> que se notan bajo la piel y los <b>grupos musculares superficiales</b> que cambian la forma del contorno.</p>
      <ul><li><b>Huesos visibles</b>: clavículas, escápulas, esternón, costillas inferiores, crestas ilíacas, codos, rodillas, muñecas, tobillos y cráneo. Son los puntos de referencia fijos, que no cambian de posición cuando el músculo se contrae.</li>
      <li><b>Músculos principales del torso</b>: pectorales, dorsales, deltoides (hombro), trapecio (cuello y espalda), abdominales y glúteos.</li>
      <li><b>En los miembros</b>: bíceps y tríceps en el brazo; en el antebrazo, grupos de flexores y extensores; en la pierna, cuádriceps, isquiotibiales y gemelos.</li></ul>
      <p>Estudiaron anatomía Leonardo da Vinci (que disecó cadáveres), Miguel Ángel y Durero, y de allí proceden las láminas clásicas. Hoy se estudia con <i>écorchés</i> (figuras sin piel de escayola), esquemas y aplicaciones de modelo 3D. Aplica lo aprendido con <mark>moderación</mark>: un dibujo que muestre todos los músculos de forma exagerada parece un desollado. Basta con sugerir los volúmenes principales con luces y sombras suaves.</p>`,
      svg: B.cajas("Anatomía que se nota bajo la piel", [["Huesos", "clavículas, codos,|rodillas, tobillos"], ["Torso", "pectorales,|dorsales, abdomen"], ["Brazo", "bíceps, tríceps|y antebrazo"], ["Pierna", "cuádriceps y|gemelos"]], { t: "Cuatro zonas" }),
    },
    {
      h: "Equilibrio, peso y contrapposto",
      html: `<p>Una figura <b>creíble</b> parece que tiene peso y que se mantiene en pie. La clave es el <b>equilibrio</b>: la <b>línea de gravedad</b>, una vertical imaginaria que baja desde la fosa entre las clavículas, debe caer sobre el <b>pie de apoyo</b> (si el peso descansa en una pierna) o entre ambos pies (si descansa en las dos). Si la línea cae fuera, la figura se cae... o se mueve. Esa inestabilidad es justo lo que se usa para sugerir una carrera o un salto.</p>
      <p>Los escultores griegos descubrieron el <b>contrapposto</b> (palabra italiana que significa «contrapunto»): al apoyar el peso en una pierna, las <b>caderas</b> se inclinan hacia el lado de la pierna libre y los <b>hombros</b> hacia el contrario, y la columna se curva en una S suave. El resultado es una pose natural y viva, muy usada en estatuas como el <i>Doríforo</i> de Policleto o el <i>David</i> de Miguel Ángel.</p>
      <p>En el dibujo, para <mark>comprobar el equilibrio</mark>, se traza la línea de gravedad vertical y se verifica que las masas (cabeza, tórax, pelvis) se compensan a ambos lados. La pierna que soporta el peso es más recta y vertical; la libre, relajada y flexionada.</p>`,
      svg: contrapposto,
    },
    {
      h: "Escorzo y perspectiva de la figura",
      html: `<p>El <b>escorzo</b> es la representación de una forma que apunta hacia el observador o se aleja de él, por lo que se ve muy <b>acortada</b>. Una pierna extendida hacia nosotros se ve más corta de lo que es, y se solapa con otras partes del cuerpo. Es uno de los problemas más difíciles del dibujo, pero se resuelve con dos principios: dibujar <b>lo que se ve</b> (no lo que se sabe) y pensar con <b>cilindros en perspectiva</b>.</p>
      <p>Para resolverlo: usa el método de la medida visual con el lápiz; compara la anchura con la longitud aparente de cada segmento; dibuja las elipses de los extremos (más abiertas cuanto más se acerca el miembro) y respeta la superposición: lo que está más cerca <i>tapa</i> lo de detrás y es más grande y más contrastado.</p>
      <p>Cuando la figura se ve desde un punto de vista alto o bajo, todo el cuerpo se afecta: en una vista <b>desde arriba</b> la cabeza parece mayor y las piernas más cortas; en una vista <b>desde abajo</b>, los pies parecen grandes y la cabeza pequeña. Dibujar con la línea de horizonte marcada ayuda a que las líneas converjan de forma coherente.</p>`,
      svg: escorzo,
      video: { id: "M-koYx6mmO0", titulo: "Cómo dibujar la figura humana proporcionada", canal: "Eru Dibuja", vistas: 393486 },
    },
    {
      h: "La ropa, los pliegues y el retrato de cuerpo entero",
      html: `<p>La ropa se dibuja como una piel suelta sobre una estructura: lo importante es que se <b>vea el cuerpo debajo</b>. Los pliegues nacen en los puntos de tensión (hombros, codos, cintura, rodillas) y se dirigen hacia puntos de apoyo; en las zonas de contacto con el cuerpo, la tela se tensa; en las demás, cuelga por la gravedad. Los tipos principales: <b>pliegues de tensión</b> (rectos, en tela tirante), <b>de caída</b> (largos, verticales, en tela colgante), <b>de compresión</b> (cortos, en codos y rodillas) y <b>espirales</b> (en mangas y perneras retorcidas).</p>
      <p>Una norma práctica: <mark>dibuja el cuerpo primero y viste después</mark>. Si omites la estructura, la ropa parece un saco. Observa también el volumen de las telas, el peso (una cazadora pesada cae diferente de una camiseta) y cómo la luz crea en los pliegues una serie de valores que ayudan a sugerir el volumen.</p>
      <p>En un <b>retrato de cuerpo entero</b>, combina todo lo aprendido: línea de acción, proporciones, equilibrio, estructura, ropa, luz y fondo. Un buen método para sesiones con modelo vivo es la <b>progresión de tiempos</b>: gestos de 30 segundos, poses de 1 y 5 minutos para el esquema, y una pose larga de 20 minutos para el desarrollo. Cada duración entrena un aspecto distinto: acción, estructura y acabado.</p>`,
      svg: B.rejilla("Sesión de modelo vivo", ["Tiempo", "Objetivo"], [["30 s", "gesto y acción"], ["1 min", "línea y masas"], ["5 min", "esquema y proporción"], ["20 min", "volumen y detalle"]], { t: "Progresión de poses" }),
    },
  ],
  figura: {
    titulo: "Construir la figura humana",
    items: [["Acción", "S · C", "línea de acción", "dominante"], ["Esquema", "óvalo + cajas", "cilindros y", "articulaciones"], ["Proporción", "7,5 – 8 cabezas", "ojos a la mitad", "entrepierna: mitad"], ["Equilibrio", "gravedad", "contrapposto", "caderas ↔ hombros"]],
  },
  video: { id: "CGokSBh67Rg", titulo: "Aprende a dibujar anatomía en un solo vídeo", canal: "Aleks Font", vistas: 1451745 },
  quiz: [
    ["¿Qué es la línea de acción?", ["El contorno final", "La curva dominante que recorre la figura y expresa su pose", "La sombra", "La línea del suelo"], 1, "Se dibuja primero, con trazo fluido."],
    ["El esquema o maniquí usa…", ["fotografías", "formas simples: óvalo, cajas y cilindros", "solo líneas rectas", "solo círculos"], 1, "Permite resolver volumen y perspectiva antes del detalle."],
    ["El tórax y la pelvis son…", ["masas rígidas unidas por la columna flexible", "una sola masa", "formas blandas", "cilindros"], 0, "La flexibilidad está en la cintura."],
    ["En el cuerpo adulto, la mitad de la altura está en…", ["la cintura", "la entrepierna", "el ombligo", "las rodillas"], 1, "La cuarta cabeza del canon de ocho."],
    ["Un niño de 6 años tiene unas…", ["4 cabezas", "6 cabezas", "8 cabezas", "10 cabezas"], 1, "Las proporciones cambian con la edad."],
    ["Los hombros de un varón suelen ser…", ["más estrechos que las caderas", "más anchos que las caderas", "iguales siempre", "inexistentes"], 1, "En la mujer, ambos se igualan más."],
    ["Con los brazos caídos, la muñeca llega aproximadamente a…", ["la cintura", "la entrepierna", "las rodillas", "el pecho"], 1, "El codo, a la cintura."],
    ["La cabeza de perfil es…", ["muy plana", "casi tan profunda como alta", "mucho más ancha", "un cuadrado"], 1, "Se construye con una esfera y un maxilar."],
    ["El oído está…", ["a la altura de los ojos", "entre las cejas y la base de la nariz, a medio camino de frente y nuca", "en la boca", "en la barbilla"], 1, "Es una referencia de perfil."],
    ["La columna vertebral tiene forma de…", ["recta", "S suave", "círculo", "zigzag"], 1, "Da flexibilidad al tronco."],
    ["El codo y la rodilla son articulaciones…", ["de rótula", "de bisagra", "fijas", "de giro libre"], 1, "Flexionan en un solo plano."],
    ["El dedo más largo de la mano es…", ["el índice", "el medio", "el anular", "el meñique"], 1, "Los dedos salen en abanico."],
    ["El pulgar tiene…", ["tres falanges", "dos falanges", "una falange", "cuatro"], 1, "Sale aparte desde la base de la palma."],
    ["Los puntos óseos visibles son útiles porque…", ["cambian con el músculo", "son referencias fijas", "son decorativos", "son siempre sombras"], 1, "No cambian de posición con la contracción."],
    ["La línea de gravedad cae sobre…", ["la cabeza", "el pie de apoyo o entre los pies", "la mano", "el suelo lejano"], 1, "Si cae fuera, la figura se desequilibra."],
    ["En el contrapposto, si las caderas bajan a un lado…", ["los hombros bajan al mismo lado", "los hombros suben al lado contrario", "no se mueven", "se alinean"], 1, "Se contrapesan."],
    ["El Doríforo de Policleto es un ejemplo de…", ["escorzo", "contrapposto", "perspectiva", "claroscuro"], 1, "Apoyo en una pierna y giro de caderas y hombros."],
    ["Un escorzo es…", ["un miembro visto muy acortado por apuntar hacia el observador", "un tipo de ropa", "una sombra", "un dibujo en blanco"], 0, "Se dibuja lo que se ve, no lo que se sabe."],
    ["Los pliegues de tensión aparecen…", ["donde la tela cuelga", "en tela tirante entre puntos de apoyo", "solo en las mangas", "en los zapatos"], 1, "Son rectos y marcan dirección."],
    ["En una sesión de modelo vivo, los gestos de 30 s entrenan…", ["el detalle", "la acción y la síntesis", "las uñas", "el color"], 1, "Se trabaja con trazos amplios y rápidos."],
  ],
  examen: [
    ["Dibujas a una persona de pie con el peso sobre la pierna derecha. ¿Qué ocurre con la cadera derecha?", ["Baja más que la izquierda", "Sube respecto de la izquierda", "No cambia", "Gira 90°"], 1, "La cadera del lado de apoyo sube y la de la pierna libre baja; los hombros se inclinan al contrario."],
    ["Si el canon de ocho cabezas se aplica a una figura de 24 cm, la cabeza mide…", ["2 cm", "3 cm", "4 cm", "8 cm"], 1, "24/8 = 3 cm."],
    ["Una pierna que apunta hacia el observador se dibuja…", ["con la longitud real", "más corta y con elipses abiertas", "sin pie", "oscura"], 1, "Es un escorzo."],
    ["¿Qué orden es el más adecuado al dibujar una figura vestida?", ["Ropa, luego cuerpo", "Línea de acción, esquema, cuerpo y luego ropa", "Detalle y luego estructura", "Fondo primero"], 1, "El cuerpo se construye antes de vestirlo."],
    ["La palma de la mano se simplifica como…", ["un círculo", "un bloque casi cuadrado", "una línea", "un triángulo"], 1, "Los dedos salen en abanico."],
    ["En una vista desde abajo de una figura, los pies parecen…", ["más pequeños", "más grandes en relación a la cabeza", "iguales", "invisibles"], 1, "La perspectiva afecta a todo el cuerpo."],
    ["Un niño de 2 años se dibuja con unas…", ["5 cabezas", "8 cabezas", "10 cabezas", "3 cabezas"], 0, "Cabeza grande y miembros cortos."],
    ["¿Cuál de estos es un hueso visible útil como referencia?", ["El bíceps", "La clavícula", "El estómago", "La nuez"], 1, "Los puntos óseos son fijos."],
  ],
  feynman: ["Cómo se construye una figura con línea de acción, óvalo, cajas y cilindros", "Qué es el contrapposto y cómo se comprueba el equilibrio", "Cómo cambian las proporciones con la edad y la perspectiva", "Cómo se resuelven manos, pies, escorzos y pliegues"],
  mapa: ["LA FIGURA HUMANA", [["Estructura", "acción · maniquí · articulaciones"], ["Proporción", "cabezas · edad · sexo"], ["Equilibrio", "gravedad · contrapposto"], ["Detalle", "manos · escorzo · pliegues"]]],
  tarjetas: [
    ["Línea de acción", "Curva dominante que recorre la figura y expresa su pose."],
    ["Maniquí", "Esquema de óvalo, cajas, cilindros y articulaciones."],
    ["Canon de ocho cabezas", "Entrepierna en la cuarta cabeza; pies en la octava."],
    ["Recién nacido y niño de 6 años", "Unas 4 y 6 cabezas de altura."],
    ["Tórax y pelvis", "Dos masas rígidas unidas por la columna flexible."],
    ["Articulación de bisagra y de rótula", "Codo y rodilla; hombro y cadera."],
    ["Mano", "Palma en bloque, cuatro dedos de tres falanges y pulgar de dos."],
    ["Pie", "Cuña con tres puntos de apoyo; mide una cabeza."],
    ["Línea de gravedad", "Vertical desde la fosa yugular hasta el pie de apoyo."],
    ["Contrapposto", "Caderas y hombros inclinados en sentidos contrarios."],
    ["Escorzo", "Forma muy acortada por apuntar hacia el observador."],
    ["Pliegues de la ropa", "De tensión, de caída, de compresión y espirales."],
  ],
  ejemplos: [
    ["Dibuja una figura de pie de 24 cm de alto con el canon de ocho cabezas. Indica las alturas de las marcas clave.", ["Cabeza = 24/8 = 3 cm.", "Pezones a 6 cm, ombligo a 9, entrepierna a 12, rodillas a 18 y pies a 24 cm, medidos desde la coronilla.", "Hombros: unos 6 cm de ancho."], "Marcas a 3, 6, 9, 12, 18 y 24 cm desde la cabeza."],
    ["Una persona apoya el peso sobre la pierna izquierda. Describe su postura en el esquema.", ["Línea de gravedad vertical sobre el pie izquierdo.", "Cadera izquierda ligeramente más alta, derecha más baja.", "Hombro izquierdo más bajo y derecho más alto; pierna derecha flexionada."], "Contrapposto: caderas y hombros en inclinaciones contrarias."],
    ["Dibuja una mano en 3 pasos.", ["Bloque de la palma y línea de los nudillos.", "Cuatro cilindros de tres falanges en abanico, más el pulgar a un lado.", "Contorno, uñas y pliegues principales."], "Mano construida en bloque, dedos y detalle."],
    ["Plantea un gesto de 30 segundos de una figura que corre.", ["Una sola línea de acción inclinada hacia delante.", "Dos trazos para hombros y caderas con distinta inclinación.", "Trazos largos para piernas y brazos opuestos."], "Gesto con inclinación y opuestos: sensación de carrera."],
    ["Calcula las medidas de un niño de 6 años (6 cabezas) en un papel de 18 cm de alto.", ["Altura de cabeza = 18/6 = 3 cm.", "Entrepierna a la mitad del cuerpo (9 cm).", "Brazos: llegan a unos 9 cm."], "Cabeza de 3 cm y proporciones de niño."],
    ["Dibuja una manga arremangada con pliegues. ¿Qué tipos aparecen?", ["De compresión en el codo, cortos y apretados.", "De caída colgando hacia la muñeca.", "Espirales alrededor del antebrazo."], "Compresión, caída y espiral."],
  ],
  errores: [
    "Dibujar el contorno sin estructura: la figura parece un saco o un muñeco plano.",
    "Colocar la mitad del cuerpo en la cintura en vez de en la entrepierna.",
    "Dibujar a todos los personajes con las mismas proporciones, sin tener en cuenta la edad.",
    "Cabezas planas como máscaras, ojos demasiado altos y cuello recto y fino.",
    "Olvidar la línea de gravedad y dibujar figuras que se caen.",
    "Dibujar las manos y los pies al final sin construcción y con prisa.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es la línea de acción y cómo se dibuja?", "La curva dominante que recorre la figura y da su carácter; se dibuja primero, con un trazo fluido y ligero."],
      ["Nombra las formas simples del maniquí.", "Óvalo (cabeza), caja trapezoidal (tórax), caja (pelvis), cilindros (extremidades) y círculos (articulaciones)."],
      ["¿Cuántas cabezas tiene el canon del adulto y dónde queda la mitad?", "Ocho cabezas; la mitad en la entrepierna (cuarta cabeza)."],
      ["¿Cuántas cabezas tiene un recién nacido?", "Unas cuatro."],
      ["¿Dónde están los ojos en la cabeza?", "A la mitad de la altura de la cabeza."],
      ["¿Cuántos segmentos tiene el brazo y la pierna?", "Tres: brazo, antebrazo y mano; muslo, pierna y pie."],
      ["¿Qué tipo de articulación es el codo?", "De bisagra: flexiona en un solo plano."],
      ["¿Cuántas falanges tienen los dedos y el pulgar?", "Los dedos, tres; el pulgar, dos."],
      ["¿Qué es la línea de gravedad?", "Una vertical que baja desde la fosa entre las clavículas hasta el pie de apoyo."],
      ["Define contrapposto.", "Pose en la que el peso recae en una pierna y las caderas y los hombros se inclinan en sentidos opuestos."],
      ["¿Qué es un escorzo?", "Representación de una forma que apunta hacia el observador y se ve muy acortada."],
      ["Enumera tres huesos visibles bajo la piel.", "Clavículas, codos, rodillas, tobillos, crestas ilíacas, esternón (tres cualesquiera)."],
    ],
    m: [
      ["Una figura mide 28 cm en el canon de ocho cabezas. ¿Cuánto mide la cabeza y dónde queda la entrepierna?", "Cabeza = 28/8 = 3,5 cm; entrepierna a 14 cm desde la coronilla."],
      ["Un niño de 5 años mide 5 cabezas. Si la cabeza mide 3,2 cm, ¿cuánto mide el niño?", "5 × 3,2 = 16 cm."],
      ["Explica por qué se dibuja el cuerpo antes que la ropa.", "Porque la ropa se apoya en la estructura y los pliegues dependen de los puntos de tensión; sin cuerpo parece un saco."],
      ["¿Qué ocurre con la posición de los hombros y de las caderas en un contrapposto con el peso en la pierna derecha?", "La cadera derecha sube y la izquierda baja; el hombro derecho baja y el izquierdo sube."],
      ["Describe la construcción de una cabeza vista de tres cuartos.", "Esfera con laterales recortados y maxilar; meridiano vertical curvado hacia el lado del giro; horizontal de ojos curva; nariz y boca situadas respecto a estas líneas."],
      ["¿Qué diferencia hay entre pliegues de tensión y de caída?", "Los de tensión son rectos y aparecen en tela tirante entre puntos de apoyo; los de caída son verticales y largos en tela colgante."],
      ["Describe cómo harías el escorzo de un brazo que apunta hacia ti.", "Con cilindros en perspectiva: elipse grande para la mano, elipse más pequeña para el hombro, superponiendo y acortando el antebrazo y el brazo; contraste mayor en lo cercano."],
      ["Propón un calentamiento de 10 minutos con gestos de figura humana.", "10 gestos de 30 segundos y 4 de 1 minuto, con línea de acción y hombros-caderas, sin borrar ni detallar."],
      ["¿Por qué el pie se apoya en tres puntos y por qué importa al dibujar?", "Talón, base del dedo gordo y base del dedo pequeño; hace que la figura se asiente y que la línea de gravedad caiga dentro."],
      ["Describe las diferencias entre una figura masculina y una femenina en el esquema.", "Hombros más anchos que caderas en el hombre y tórax más cuadrado; en la mujer, caderas y hombros similares y cintura más marcada; siempre observando al modelo real."],
    ],
    a: [
      ["Analiza por qué las proporciones del canon de 8 cabezas no son las reales y cuándo conviene usarlas.", "La media real ronda 7,5 cabezas; el canon de 8 es idealizado. Conviene usarlo como guía para esquemas y figuras heroicas, y comprobar con el modelo para retratos."],
      ["Una figura de 30 cm de alto está en un papel A4 vertical. Calcula las alturas de cabeza para canon de 7,5 y de 8 y la diferencia.", "7,5: cabeza = 4 cm; 8: cabeza = 3,75 cm. Diferencia 0,25 cm por cabeza."],
      ["Diseña un programa de cuatro sesiones de modelo vivo y explica el objetivo de cada una.", "1) Gestos de 30 s y 1 min: acción. 2) Poses de 5 min: esquema y proporciones. 3) Pose de 20 min: volumen y luz. 4) Retrato vestido: ropa y fondo, con autoevaluación."],
      ["Explica cómo el punto de vista contrapicado altera las proporciones aparentes de la figura y cómo lo compensas.", "Los pies y piernas se ven mayores y la cabeza menor; se aplica la perspectiva con línea de horizonte baja y se dibujan los cilindros con elipses abiertas hacia abajo."],
      ["Una modelo posa con el brazo derecho levantado. ¿Qué cambia en el tórax y en el hombro?", "El hombro sube, la caja torácica se estira de ese lado y se comprimen los músculos del flanco contrario; la línea de los hombros se inclina."],
      ["Compara un dibujo de figura con y sin estructura (maniquí). ¿Qué ventajas tiene el primero?", "Con estructura se controlan volumen, perspectiva y proporciones, se pueden corregir poses y es más fácil dibujar desde la imaginación; sin ella el contorno puede ser plano y desproporcionado."],
      ["Diseña un ejercicio para mejorar el dibujo de manos y explica cómo evaluarías el progreso.", "Cada día dibujar 5 manos en poses diferentes con bloque, ejes y falanges; guardar una por día y comparar semanalmente según proporción, estructura y expresión."],
      ["Comenta la afirmación: «para dibujar bien la figura hay que saber de memoria todos los músculos». ¿Es necesario?", "No: basta con conocer los puntos óseos y los grupos musculares principales para saber qué volumen se esperan; el exceso de anatomía sin observación crea dibujos rígidos."],
    ],
  },
  glosario: [
    ["Figura humana", "Representación del cuerpo humano."],
    ["Línea de acción", "Curva dominante de una pose."],
    ["Maniquí", "Esquema de formas simples de la figura."],
    ["Canon", "Conjunto de proporciones ideales."],
    ["Articulación", "Punto de unión y giro entre segmentos."],
    ["Caja torácica", "Masa del tórax formada por costillas y esternón."],
    ["Pelvis", "Masa ósea de la cadera."],
    ["Falange", "Cada hueso de un dedo."],
    ["Línea de gravedad", "Vertical que pasa por el centro de masa."],
    ["Contrapposto", "Pose de contrapeso entre caderas y hombros."],
    ["Escorzo", "Acortamiento de una forma por la perspectiva."],
    ["Écorché", "Figura sin piel para estudiar la musculatura."],
    ["Modelo vivo", "Persona que posa para ser dibujada."],
    ["Pliegue de tensión", "Pliegue recto de una tela tirante."],
    ["Gesto", "Dibujo rápido de la acción de una pose."],
    ["Fosa yugular", "Hueco entre las clavículas, en la base del cuello."],
  ],
  situacion: {
    titulo: "Álbum de poses de la clase",
    reto: "Entre toda la clase se crea un álbum de poses: cada alumno posa para los demás y todos dibujan, con una progresión de tiempos y una coevaluación.",
    pasos: [
      "Por turnos, cada alumno posa durante 30 s, 1 min y 5 min, mientras los demás dibujan gestos y esquemas.",
      "Cada dibujante construye el maniquí con línea de acción, cajas, cilindros y articulaciones, y revisa proporciones con el lápiz.",
      "Se escoge una pose para desarrollar durante 20 minutos con volumen, ropa y luz.",
      "En parejas, se hace una coevaluación con una pauta: acción, proporción, equilibrio y volumen.",
      "Se monta el álbum con las mejores poses de cada alumno y una breve nota de aprendizaje.",
    ],
    producto: "Un álbum con gestos, esquemas y una figura desarrollada por alumno, con la pauta de coevaluación.",
    evaluacion: [
      "El gesto capta la acción y la línea de acción es clara.",
      "Las proporciones y las articulaciones están bien resueltas y comprobadas.",
      "La figura tiene equilibrio, volumen y coherencia entre cuerpo y ropa.",
      "La coevaluación es respetuosa, precisa y se acompaña de propuestas de mejora.",
    ],
  },
  familias: [
    "Dibujad juntos a un familiar que lee o descansa durante dos minutos, sin borrar.",
    "Observad cómo cambia la postura de una persona al apoyar el peso en una pierna.",
    "Pedidle que dibuje sus propias manos en distintas posiciones: es un modelo siempre disponible.",
    "Visitad un museo y comparad el contrapposto en estatuas clásicas y modernas.",
  ],
  saberes: "Dibujo de la figura humana: estructura y esquema, proporciones por edad y sexo, equilibrio y movimiento, construcción de la cabeza, manos y pies, anatomía artística básica, escorzo, tratamiento de la ropa y dibujo del modelo vivo.",
  ideas: [
    "Organizar sesiones de modelo vivo entre compañeros con progresión de tiempos.",
    "Usar un muñeco articulado para estudiar poses y escorzos.",
    "Comparar proporciones de esculturas clásicas con cómics modernos.",
    "Proponer un reto semanal de «mis manos» para mejorar el dibujo de manos.",
  ],
  fuentes: [
    { t: "Contrapposto, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Contrapposto" },
    { t: "Canon de Policleto (Doríforo), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dor%C3%ADforo" },
    { t: "Anatomía artística, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Anatom%C3%ADa_art%C3%ADstica" },
  ],
});
