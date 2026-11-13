// Nivel libro: El dibujo y el boceto (Expresión Artística 4º ESO).
const { filas, cadena, vs, rejilla, escala, barras, marco } = require("./_eso4L12");

module.exports = {
  minutos: 110,
  revisado: "2026-11-13",
  objetivos: ["Usar la línea de forma expresiva y dibujar la figura en movimiento", "Aplicar el canon humano y los indicadores de profundidad"],
  claves: ["canon", "línea de horizonte", "valor", "gesto"],
  lectura: {
    titulo: "Los cuadernos de Leonardo",
    html: `<p>Leonardo da Vinci dejó más de 7.000 páginas de cuadernos. En ellas hay de todo: bocetos de máquinas voladoras, estudios de caballos, manos dibujadas desde diez ángulos distintos, remolinos de agua, cráneos, caras de gente que veía por la calle y listas de la compra. Muchas de esas páginas no eran «obras de arte» para enseñar, sino su <b>forma de pensar</b>. Dibujaba para entender cómo funcionaba el mundo.</p><p>Cinco siglos después, arquitectos, diseñadores de videojuegos, ingenieras, animadores y cirujanos siguen haciendo lo mismo: antes de construir algo, lo dibujan. Un boceto rápido en una servilleta puede convertirse en un edificio, en un personaje famoso o en el logotipo de una marca. Dibujar no es un don con el que se nace: es una <mark>habilidad que se entrena</mark>, como nadar o tocar la guitarra. Se basa en aprender a mirar (medir, comparar, ver la luz) y en repetir mucho. En este tema aprenderás las herramientas básicas del dibujo: la línea, el encaje, la proporción, el claroscuro y la perspectiva. Y empezarás tu propio cuaderno, que dentro de un año te sorprenderá.</p>`,
  },
  partes: ["Encajar y medir proporciones", "Luz, sombra y volumen", "La perspectiva", "El cuaderno de bocetos"],
  mas: {
    "Del apunte al dibujo final": `<p>Este proceso se parece al de escribir un texto: primero apuntas ideas sueltas, luego haces un borrador y al final pasas a limpio. En el <b>apunte</b> la mano va rápida y se usan pocas líneas; en el <b>boceto</b> se prueban varias opciones en pequeño (las llamadas <i>miniaturas</i> o <i>thumbnails</i>, de unos pocos centímetros) para elegir la mejor composición; en el <b>dibujo final</b> se cuida el acabado. Saltarse los pasos previos suele llevar a obras con problemas de composición que ya es tarde para corregir.</p>`,
    "Encajar y medir proporciones": `<p>Al encajar conviene trazar primero los <b>ejes</b> (de simetría, de inclinación) y una caja que contenga todo el objeto. Dentro de la caja se colocan las formas grandes y, solo cuando las proporciones son correctas, se añaden las medianas y finalmente los detalles. Las líneas de encaje se hacen <mark>muy suaves</mark>, con un lápiz duro o apretando poco, para poder corregirlas o borrarlas después sin dejar marca.</p>`,
    "Luz, sombra y volumen": `<p>La dirección de la luz decide dónde caen las sombras: si la luz viene de la izquierda, la sombra propia estará a la derecha y la proyectada se alargará hacia la derecha. Una <b>luz dura</b> (el sol a mediodía, un flexo) produce sombras con bordes nítidos y mucho contraste; una <b>luz suave</b> (día nublado, luz de ventana) crea transiciones graduales. Los pintores barrocos como Caravaggio usaron un contraste extremo, el <b>tenebrismo</b>, para dar dramatismo a sus escenas.</p><p>Para practicar, coloca un objeto blanco (un huevo, una taza) sobre un papel blanco y una lámpara a un lado. Al no haber colores que distraigan, se ven con claridad todas las zonas de luz y sombra. Dibuja primero las grandes masas oscuras con suavidad y ve aumentando la presión poco a poco: es más fácil oscurecer que aclarar.</p>`,
    "La perspectiva": `<p>La perspectiva no es solo una técnica de arquitectos: sirve para dibujar una habitación, una calle, una mesa o el escenario de un cómic. Antes de trazar líneas, decide <b>dónde está tu horizonte</b>: si lo pones bajo, verás los objetos desde abajo y parecerán grandes e imponentes; si lo pones alto, los verás desde arriba, como un pájaro. Esa elección cambia por completo la sensación de la imagen.</p>`,
    "El cuaderno de bocetos": `<p>El cuaderno no tiene que ser caro: basta con un bloc de papel de unos 120 g/m² que puedas llevar en la mochila. Escribe la fecha en cada página, mezcla dibujos con notas, pega entradas o billetes y prueba técnicas distintas. Un <b>reto</b> clásico es dibujar lo mismo durante una semana desde puntos de vista diferentes, o hacer un dibujo de cada comida. Lo importante es no arrancar páginas: los «errores» también enseñan y muestran tu evolución.</p>`,
  },
  svgs: {
    "Tipos de dibujo según su finalidad": rejilla("Cinco tipos de dibujo según su finalidad", [["Apunte", "captar algo rápido", "var(--pen)"], ["Boceto", "pensar una obra", "var(--leaf)"], ["Estudio", "analizar un detalle", "var(--hl-ink)"], ["Técnico", "fabricar con normas", "var(--ink)"], ["Ilustración", "acompañar un texto", "var(--red)"], ["Final", "obra acabada", "var(--sun)"]]),
    "Cómo medir con el lápiz": marco("Medir con el lápiz con el brazo estirado: la cabeza es la unidad", `
        <circle cx="34" cy="96" r="12" fill="none" stroke="var(--ink)" stroke-width="2.5"/><path d="M42 102 L 150 96" stroke="var(--hl-ink)" stroke-width="5" stroke-linecap="round"/>
        <rect x="148" y="56" width="6" height="80" rx="2" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M151 56 l -3 -8 h 6 z" fill="var(--ink)"/>
        <circle cx="210" cy="44" r="13" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M210 57 V 112 M210 70 L 190 92 M210 70 L 230 92 M210 112 L 196 150 M210 112 L 224 150" stroke="var(--pen)" stroke-width="2.5" fill="none"/>
        <path d="M244 31 V 57" stroke="var(--red)" stroke-width="3"/><text x="238" y="22" text-anchor="end" font-size="11" font-weight="700" fill="var(--red)">1 unidad</text>
        <text x="34" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)">un ojo</text>
        <text x="100" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">brazo siempre estirado</text>`),
    "La escala de valores": escala("Escala de valores de cinco pasos del blanco al negro", [["luz", "#f4f4f4"], ["claro", "#cfcfcf"], ["medio", "#9a9a9a"], ["sombra", "#5e5e5e"], ["negro", "#1e1e1e"]], "blanco del papel", "máxima presión"),
    "Perspectiva cónica con uno y dos puntos de fuga": marco("Cubo en perspectiva con dos puntos de fuga sobre la línea de horizonte", `
        <path d="M10 70 H 250" stroke="var(--red)" stroke-width="2"/><circle cx="16" cy="70" r="5" fill="var(--red)"/><circle cx="244" cy="70" r="5" fill="var(--red)"/>
        <g stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 3"><path d="M16 70 L 120 60 M16 70 L 120 140 M244 70 L 120 60 M244 70 L 120 140 M16 70 L 186 64 M16 70 L 186 124 M244 70 L 70 63 M244 70 L 70 122"/></g>
        <path d="M120 60 V 140 M70 63 V 122 M186 64 V 124 M70 63 L 120 60 L 186 64 M70 122 L 120 140 L 186 124" stroke="var(--ink)" stroke-width="2.5" fill="none"/>
        <g font-size="11" font-weight="700"><text x="14" y="90" fill="var(--red)">PF1</text><text x="246" y="90" text-anchor="end" fill="var(--red)">PF2</text><text x="130" y="30" text-anchor="middle" fill="var(--red)">línea de horizonte</text></g>
        <text x="130" y="168" text-anchor="middle" font-size="11.5" fill="var(--muted)">las verticales siguen verticales</text>`),
    "Hábitos para dibujar mejor": barras("Horas de dibujo acumuladas dibujando 10 minutos al día", [["1 semana", 1.2, "var(--muted)"], ["1 mes", 5, "var(--pen)"], ["1 curso", 30, "var(--leaf)"], ["1 año", 61, "var(--red)"]], " h", "10 minutos al día suman…"),
  },
  nuevos: [
    {
      tras: "Tipos de dibujo según su finalidad",
      html: `<h3>La línea y sus cualidades expresivas</h3><p>La <b>línea</b> es el elemento básico del dibujo. No hay una sola forma de trazarla: puede ser <b>fina o gruesa</b>, <b>continua o entrecortada</b>, <b>recta, curva o quebrada</b>, firme o temblorosa. Cada tipo transmite algo distinto. Las líneas horizontales sugieren calma y reposo (el horizonte, una persona tumbada); las verticales, estabilidad y elevación (un árbol, una torre); las diagonales, movimiento y tensión; las curvas suaves, delicadeza; y las quebradas, nerviosismo o agresividad.</p><p>Un buen recurso es la <mark>línea modulada</mark>: variar el grosor del mismo trazo. Se engrosa en las zonas de sombra o en los contornos que están más cerca, y se adelgaza en las zonas iluminadas o lejanas. Así, con un solo lápiz o una plumilla, el dibujo gana volumen sin necesidad de sombrear. También existe el <b>dibujo de contorno ciego</b>: dibujar mirando solo el modelo, sin mirar el papel. El resultado es raro, pero entrena muchísimo la coordinación entre ojo y mano.</p>`,
      svg: marco("Cuatro tipos de línea y lo que expresan: horizontal, vertical, diagonal y quebrada", `
        <path d="M20 34 H 110" stroke="var(--pen)" stroke-width="3"/><path d="M160 18 V 58 M176 18 V 58 M192 18 V 58" stroke="var(--leaf)" stroke-width="3"/>
        <path d="M20 120 L 70 84 M40 128 L 90 92 M60 136 L 110 100" stroke="var(--red)" stroke-width="3"/>
        <path d="M150 120 l 12 -24 l 12 24 l 12 -24 l 12 24 l 12 -24 l 12 24" stroke="var(--hl-ink)" stroke-width="3" fill="none"/>
        <g font-size="11.5" font-weight="700" text-anchor="middle"><text x="65" y="64" fill="var(--pen)">horizontal: calma</text><text x="190" y="78" fill="var(--leaf)">vertical: estabilidad</text>
        <text x="66" y="160" fill="var(--red)">diagonal: movimiento</text><text x="192" y="152" fill="var(--hl-ink)">quebrada: tensión</text></g>`),
    },
    {
      tras: "Cómo medir con el lápiz",
      html: `<h3>El canon y las proporciones de la figura humana</h3><p>Un <b>canon</b> es una regla de proporciones que toma una parte del cuerpo como unidad. En la antigua Grecia, el escultor Policleto propuso un cuerpo de <b>7 cabezas</b>; Lisipo, más estilizado, de 8. Hoy, para dibujar a una persona adulta realista se suele usar un canon de <b>7,5 a 8 cabezas</b>. Algunas referencias útiles: la mitad del cuerpo está a la altura de la cadera; los codos quedan a la altura de la cintura; con los brazos caídos, las puntas de los dedos llegan a la mitad del muslo; y la anchura de los hombros mide unas dos cabezas.</p><p>Las proporciones cambian con la edad: un bebé mide unas 4 cabezas, un niño de seis años unas 6 y un adolescente unas 7. Por eso, en el cómic y la animación, los personajes «adorables» tienen la cabeza grande y los heroicos tienen 9 o más. En la cara también hay referencias: los ojos están aproximadamente a la <mark>mitad de la cabeza</mark> (no arriba, como solemos dibujarlos), y entre ellos cabe otro ojo. Conocer el canon no significa copiarlo siempre: los artistas lo rompen a propósito para expresar algo, como hizo El Greco con sus figuras alargadas.</p>`,
      svg: barras("Altura de una persona medida en cabezas según la edad", [["Bebé", 4, "var(--sun)"], ["6 años", 6, "var(--leaf)"], ["Adolescente", 7, "var(--pen)"], ["Adulto", 7.5, "var(--hl-ink)"], ["Héroe cómic", 9, "var(--red)"]], " cab.", "Altura en cabezas"),
    },
    {
      tras: "Perspectiva cónica con uno y dos puntos de fuga",
      html: `<h3>Otros recursos de profundidad</h3><p>Además de las líneas de fuga, hay otros indicadores que el cerebro usa para entender la distancia, y que un dibujante puede aprovechar aunque no trace ninguna perspectiva geométrica:</p><ul><li><b>Superposición</b>: lo que tapa algo está delante.</li><li><b>Tamaño relativo</b>: entre objetos parecidos, el más pequeño parece más lejano.</li><li><b>Posición en el plano</b>: lo que está más cerca del horizonte se ve más lejos.</li><li><b>Detalle y textura</b>: de cerca se ven muchos detalles; de lejos, solo masas.</li><li><b>Perspectiva atmosférica</b>: el aire hace que lo lejano se vea más claro, menos contrastado y más azulado. Leonardo la llamó <i>sfumato</i> cuando la usaba en los fondos de sus cuadros.</li></ul><p>Combinando varios de estos recursos se consigue una sensación de profundidad muy convincente. Un paisaje con montañas en tres planos, cada uno más claro y menos detallado que el anterior, es un ejercicio clásico para practicarlo con lápiz o acuarela.</p>`,
      svg: marco("Perspectiva atmosférica: tres planos de montañas cada vez más claros", `
        <path d="M14 120 L 60 60 L 100 100 L 150 50 L 200 95 L 246 70 V 166 H 14 Z" fill="var(--pen)" fill-opacity=".25"/>
        <path d="M14 140 L 70 90 L 120 130 L 170 85 L 246 125 V 166 H 14 Z" fill="var(--pen)" fill-opacity=".55"/>
        <path d="M14 166 L 14 150 L 80 120 L 140 155 L 200 130 L 246 150 V 166 Z" fill="var(--ink)" fill-opacity=".85"/>
        <g font-size="11" font-weight="700" fill="var(--muted)"><text x="150" y="40">lejos: claro y azulado</text><text x="20" y="28">cerca: oscuro y detallado ↓</text></g>`),
    },
    {
      tras: "Hábitos para dibujar mejor",
      html: `<h3>Dibujar el movimiento: el gesto</h3><p>Para dibujar personas que se mueven (deportistas, bailarines, gente andando) no hay tiempo de medir. Se usa el <b>dibujo de gesto</b>: en 30 segundos o un minuto se traza la <b>línea de acción</b>, una curva que recorre el cuerpo desde la cabeza hasta el pie de apoyo y resume la postura. Después se añaden las masas principales (cabeza, tórax, pelvis) como óvalos y las extremidades como líneas. El resultado no es detallado, pero tiene vida.</p><p>Otro recurso es el <b>maniquí</b> o figura de alambre: se dibuja el cuerpo con palitos y articulaciones redondas, como un muñeco articulado, para estudiar posturas y equilibrio. Fíjate en el <b>centro de gravedad</b>: si una persona está de pie, una vertical desde el cuello cae sobre el pie de apoyo; si no, parecerá que se cae. Los animadores y dibujantes de cómic practican miles de gestos para que sus personajes resulten creíbles. Puedes entrenar dibujando a tu familia mientras ve la tele o a la gente en un parque.</p>`,
      svg: marco("Figura de gesto: línea de acción curva y maniquí en movimiento", `
        <path d="M70 28 Q 50 90 96 158" stroke="var(--red)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="72" cy="30" r="11" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <ellipse cx="66" cy="70" rx="13" ry="20" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <ellipse cx="76" cy="104" rx="12" ry="9" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M60 56 L 34 80 L 26 104 M74 56 L 104 66 L 124 50 M70 112 L 96 158 M82 112 L 112 132 L 130 156" stroke="var(--ink)" stroke-width="2.5" fill="none"/>
        <g font-size="12" font-weight="700"><text x="146" y="60" fill="var(--red)">línea de acción</text><text x="146" y="90" fill="var(--ink)">masas: óvalos</text><text x="146" y="120" fill="var(--muted)">30 s a 1 min</text></g>`),
    },
  ],
  ejemplos: [
    ["Vas a dibujar una botella. ¿Cómo empiezas el encaje?", ["Traza un eje vertical de simetría.", "Mide la altura total y la anchura con el lápiz y compáralas.", "Encaja la forma con figuras simples: un rectángulo para el cuerpo y otro estrecho para el cuello."], "Eje, medidas relativas y formas geométricas simples antes de cualquier detalle."],
    ["Una esfera está iluminada desde la izquierda. ¿Dónde van las sombras?", ["La luz y el brillo, en la parte superior izquierda.", "La sombra propia, en la parte derecha de la esfera, con una luz reflejada junto al borde.", "La sombra proyectada, en el suelo, hacia la derecha."], "Sombra propia a la derecha y sombra proyectada en el suelo hacia la derecha."],
    ["Quieres dibujar la esquina de un edificio. ¿Qué perspectiva usas?", ["Ves dos fachadas que se alejan hacia los lados.", "Cada fachada tiene su propio punto de fuga.", "Los dos puntos van sobre la línea de horizonte, a la altura de tus ojos."], "Perspectiva cónica oblicua, con dos puntos de fuga."],
    ["Dibujas a una persona adulta de pie en una hoja de 24 cm de alto, dejando 2 cm de margen arriba y abajo. ¿Cuánto mide la cabeza si usas un canon de 8 cabezas?", ["Altura disponible: 24 − 4 = 20 cm.", "Divide entre 8 cabezas: 20 / 8 = 2,5 cm.", "La mitad del cuerpo (cadera) queda a 10 cm de los pies."], "La cabeza mide 2,5 cm y la cadera queda a 10 cm del suelo."],
    ["Quieres que un paisaje con tres filas de árboles tenga profundidad sin usar puntos de fuga. ¿Qué haces?", ["Superpón las filas: la cercana tapa parte de la siguiente.", "Haz los árboles lejanos más pequeños y más cerca del horizonte.", "Dibuja con detalle y contraste los cercanos y con tonos claros y pocos detalles los lejanos (perspectiva atmosférica)."], "Combinando superposición, tamaño, posición y perspectiva atmosférica."],
    ["En un apunte de un futbolista chutando, el dibujo queda rígido. ¿Cómo lo mejoras?", ["Empieza por la línea de acción, una curva que recorra el cuerpo.", "Coloca cabeza, tórax y pelvis como óvalos siguiendo esa curva.", "Comprueba el equilibrio: el centro de gravedad sobre el pie de apoyo.", "Añade los brazos en contrapeso de la pierna que chuta."], "Dibujando primero el gesto (línea de acción y masas) y cuidando el equilibrio."],
  ],
  errores: [
    "Empezar por los detalles (ojos, botones) antes de encajar la forma general.",
    "Medir con el brazo doblado: las medidas cambian cada vez.",
    "Confundir sombra propia y sombra proyectada.",
    "Situar los puntos de fuga fuera de la línea de horizonte.",
    "Apretar mucho el lápiz desde el principio, lo que impide corregir.",
    "Dibujar los ojos en la parte alta de la cabeza: están más o menos a la mitad.",
  ],
  ejercicios: [
    ["b", "Explica la diferencia entre apunte, boceto y dibujo final.", "El apunte es rápido y capta una idea o un momento; el boceto prueba composiciones o soluciones para una obra; el dibujo final es la versión acabada y cuidada."],
    ["b", "¿Qué significa encajar un dibujo?", "Reducir lo que ves a formas geométricas simples y colocar sus proporciones antes de dibujar los detalles."],
    ["b", "¿Qué expresan las líneas horizontales, verticales y diagonales?", "Horizontales: calma y reposo. Verticales: estabilidad y elevación. Diagonales: movimiento y tensión."],
    ["b", "¿Cuántas cabezas mide aproximadamente una persona adulta?", "Entre 7,5 y 8 cabezas."],
    ["b", "Nombra las zonas de luz y sombra de una esfera iluminada.", "Brillo, luz, penumbra (tono medio), sombra propia, luz reflejada y sombra proyectada."],
    ["b", "¿Qué es la línea de horizonte?", "Una línea imaginaria a la altura de los ojos del observador, donde se sitúan los puntos de fuga."],
    ["b", "¿Cuántos puntos de fuga tiene la perspectiva frontal? ¿Y la oblicua?", "Frontal: uno. Oblicua: dos."],
    ["b", "¿Qué es un valor en dibujo?", "El grado de claridad u oscuridad de una zona."],
    ["b", "¿Por qué hay que medir con el brazo estirado?", "Para que la distancia entre el ojo y el lápiz sea siempre la misma y las medidas sean comparables."],
    ["b", "Cita tres hábitos para mejorar en el dibujo.", "Dibujar un poco cada día, dibujar del natural y hacer apuntes rápidos de gesto (también: mirar más el modelo que el papel, no borrar demasiado)."],
    ["b", "¿Qué es la línea de acción en un dibujo de gesto?", "Una curva que recorre el cuerpo y resume la postura y el movimiento."],
    ["b", "¿Qué es la perspectiva atmosférica?", "El efecto por el que lo lejano se ve más claro, menos contrastado y más azulado por el aire."],
    ["m", "Explica qué es la línea modulada y para qué sirve.", "Es variar el grosor de un mismo trazo: más grueso en sombras o en lo cercano, más fino en luces o en lo lejano. Da volumen y profundidad sin sombrear."],
    ["m", "Una figura de 21 cm de alto se dibuja con canon de 7 cabezas. ¿Cuánto mide la cabeza?", "21 / 7 = 3 cm."],
    ["m", "Describe cómo usarías el lápiz para comprobar la inclinación de un tejado.", "Con el brazo estirado y un ojo cerrado, coloco el lápiz paralelo a la línea del tejado sin girar la muñeca y llevo esa misma inclinación al papel."],
    ["m", "¿En qué se diferencian la sombra propia y la proyectada?", "La propia es la parte del objeto que no recibe luz; la proyectada es la sombra que el objeto lanza sobre otra superficie."],
    ["m", "¿Qué efecto produce colocar la línea de horizonte muy baja en un dibujo de edificios?", "Se ven desde abajo (contrapicado): parecen más altos, grandes e imponentes."],
    ["m", "Explica qué es la luz reflejada y dónde aparece.", "Una zona algo más clara dentro de la sombra propia, junto al borde, producida por la luz que rebota en el suelo o en superficies cercanas."],
    ["m", "Diferencia entre luz dura y luz suave, con un ejemplo de cada una.", "Dura: sombras nítidas y mucho contraste (sol de mediodía, flexo). Suave: transiciones graduales (día nublado, luz de ventana)."],
    ["m", "¿Qué indicadores de profundidad hay en una foto de una calle con coches aparcados?", "Superposición (un coche tapa a otro), tamaño relativo (los lejanos son más pequeños), posición (más cerca del horizonte) y líneas de fuga de las aceras y fachadas."],
    ["m", "¿Por qué los personajes de dibujos animados infantiles tienen la cabeza tan grande?", "Porque el canon de pocas cabezas recuerda a los bebés y niños y transmite ternura y simpatía."],
    ["m", "Ordena el proceso de un dibujo del natural: detalles, ejes y caja, formas grandes, sombras, formas medianas.", "Ejes y caja, formas grandes, formas medianas, sombras y detalles."],
    ["m", "¿Por qué las líneas de encaje deben ser suaves?", "Para poder corregirlas y borrarlas sin dejar marcas; con el lápiz apretado se marca el papel."],
    ["m", "¿Qué es el tenebrismo y quién lo usó?", "Un claroscuro con contraste extremo entre zonas muy iluminadas y fondos casi negros; lo usaron Caravaggio y, en España, Ribera o Zurbarán."],
    ["a", "Dibuja (o describe) un cubo en perspectiva oblicua: indica los pasos y qué líneas convergen en cada punto de fuga.", "Línea de horizonte con PF1 y PF2; arista vertical más cercana; desde sus extremos, líneas a ambos puntos; dos verticales laterales; desde sus extremos, líneas al punto de fuga contrario. Las aristas verticales siguen verticales y las horizontales van a PF1 o PF2."],
    ["a", "Una persona de 1,80 m se dibuja con canon de 8 cabezas. ¿Cuánto mide su cabeza en la realidad? ¿Y la distancia entre los hombros?", "1,80 / 8 = 0,225 m (22,5 cm). Los hombros, unas dos cabezas: unos 45 cm."],
    ["a", "Analiza por qué El Greco alargaba sus figuras. ¿Es un error de proporción?", "No es un error: rompe el canon a propósito para dar espiritualidad y elevación a las figuras, acorde con el sentido religioso de sus obras."],
    ["a", "Diseña un plan de cuaderno de bocetos de dos semanas con un tema y una técnica por día.", "Respuesta abierta: por ejemplo, días 1-3 manos con grafito; 4-5 objetos de la cocina con tinta; 6-7 gente en el parque (gesto); 8-10 perspectiva de la calle; 11-14 autorretratos con distintas luces."],
    ["a", "Explica cómo combinarías perspectiva lineal y atmosférica para dibujar una carretera que se pierde entre montañas.", "La carretera converge en un punto de fuga en el horizonte; las montañas se escalonan en planos cada vez más claros, azulados y con menos detalle; el primer plano tiene más contraste y textura."],
    ["a", "Un compañero dibuja una cara y los ojos le quedan muy arriba. ¿Qué medidas comprobarías para corregirlo?", "Que los ojos estén a la mitad de la altura total de la cabeza, que entre ellos quepa otro ojo, que la base de la nariz esté a la mitad entre ojos y barbilla y la boca a un tercio por debajo."],
    ["a", "Compara el dibujo técnico con el dibujo artístico: finalidad, herramientas y normas.", "El técnico sirve para fabricar o construir; usa regla, escuadra, compás o CAD y normas (escalas, vistas, cotas). El artístico busca expresar; usa herramientas libres y no tiene normas obligatorias."],
    ["a", "Haz una escala de valores de 9 pasos con un solo lápiz 2B y explica qué has controlado.", "Respuesta práctica: se controla la presión y la superposición de capas; el paso 1 es el papel en blanco y el 9 el negro máximo, con saltos de tono parecidos entre pasos."],
    ["a", "Analiza un fotograma de cómic o anime con mucho movimiento: ¿qué recursos de línea y gesto usa?", "Respuesta abierta: líneas de acción curvas, diagonales, líneas cinéticas, poses exageradas con el centro de gravedad desplazado y escorzos."],
    ["a", "¿Cómo dibujarías una habitación vista desde la puerta, en perspectiva frontal? Describe los pasos.", "Horizonte a la altura de los ojos y un punto de fuga en el centro; rectángulo de la pared del fondo; líneas desde sus esquinas hacia fuera, hacia el punto de fuga, para paredes, suelo y techo; muebles con aristas que convergen en el mismo punto."],
  ],
  quiz: [
    ["Un dibujo rápido para captar un gesto o una escena es…", ["un boceto", "un apunte", "un dibujo técnico", "una ilustración"], 1, "El apunte es inmediato y expresivo."],
    ["Probar composiciones antes de la obra final es la función del…", ["boceto", "estudio", "plano", "grabado"], 0, "El boceto sirve para pensar la obra."],
    ["Encajar es…", ["sombrear", "reducir lo que ves a formas simples", "pasar a tinta", "borrar"], 1, "Se hace antes de los detalles."],
    ["Las líneas diagonales suelen transmitir…", ["calma", "movimiento y tensión", "estabilidad", "tristeza"], 1, "Rompen el equilibrio horizontal y vertical."],
    ["Una persona adulta mide unas…", ["4 cabezas", "5 cabezas", "7,5 a 8 cabezas", "12 cabezas"], 2, "Es el canon realista habitual."],
    ["Para medir del natural, el brazo debe estar…", ["doblado", "siempre estirado", "apoyado en la mesa", "en movimiento"], 1, "Así las medidas son comparables."],
    ["En la cara, los ojos están…", ["en la frente", "a la mitad de la cabeza", "junto a la boca", "a un cuarto de la barbilla"], 1, "Solemos dibujarlos demasiado arriba."],
    ["La sombra que un objeto lanza sobre el suelo es la…", ["sombra propia", "sombra proyectada", "penumbra", "luz reflejada"], 1, "Se proyecta en otra superficie."],
    ["Un valor en dibujo es…", ["el precio", "el grado de claridad u oscuridad", "el tamaño", "el color"], 1, "Se trabaja en escalas de grises."],
    ["Una luz dura produce…", ["sombras nítidas y mucho contraste", "sin sombras", "sombras muy difusas", "colores fríos"], 0, "Como el sol de mediodía."],
    ["El tenebrismo de Caravaggio se basa en…", ["colores pastel", "contrastes extremos de luz y oscuridad", "líneas de fuga", "el collage"], 1, "Da dramatismo a la escena."],
    ["La línea de horizonte está…", ["siempre en el centro", "a la altura de los ojos", "en el suelo", "fuera del papel"], 1, "Depende del punto de vista."],
    ["La perspectiva frontal tiene…", ["ningún punto de fuga", "un punto de fuga", "dos puntos de fuga", "tres puntos de fuga"], 1, "Las líneas que se alejan van a un punto."],
    ["Para dibujar la esquina de un edificio se usa la perspectiva…", ["frontal", "oblicua (dos puntos)", "caballera", "aérea"], 1, "Cada fachada tiene su punto de fuga."],
    ["Si un objeto tapa a otro, decimos que está…", ["detrás", "delante (superposición)", "a la misma distancia", "más lejos"], 1, "La superposición indica profundidad."],
    ["En la perspectiva atmosférica, lo lejano se ve…", ["más oscuro y nítido", "más claro y azulado", "más rojo", "más grande"], 1, "El aire difumina los contrastes."],
    ["La línea modulada es…", ["una línea de puntos", "un trazo que varía de grosor", "una línea recta con regla", "una línea de fuga"], 1, "Da volumen sin sombrear."],
    ["El dibujo de gesto se hace en…", ["horas", "30 segundos a 1 minuto", "una semana", "dos días"], 1, "Capta el movimiento esencial."],
    ["Con 10 minutos de dibujo al día durante un curso se acumulan…", ["unas 3 horas", "unas 30 horas", "unas 300 horas", "1 hora"], 1, "Unas 180 sesiones de 10 minutos."],
    ["El Greco alargaba las figuras…", ["por error", "a propósito, para expresar espiritualidad", "porque no sabía medir", "por la perspectiva"], 1, "Rompe el canon con intención."],
  ],
  examen: [
    ["El dibujo técnico se caracteriza por…", ["usar normas precisas para fabricar", "ser rápido", "no tener medidas", "ser siempre en color"], 0, "Escalas, vistas y cotas."],
    ["La luz reflejada aparece…", ["dentro de la sombra propia, junto al borde", "en el brillo", "en el cielo", "en la sombra proyectada lejos"], 0, "Es luz que rebota del suelo."],
    ["Si pones el horizonte muy alto, ves los objetos…", ["desde arriba", "desde abajo", "de frente", "invertidos"], 0, "Como a vista de pájaro."],
    ["En la perspectiva oblicua, las aristas verticales…", ["siguen siendo verticales", "van a un punto de fuga", "desaparecen", "se curvan"], 0, "Solo las horizontales convergen."],
    ["Un bebé mide aproximadamente…", ["4 cabezas", "7 cabezas", "8 cabezas", "10 cabezas"], 0, "La cabeza es grande respecto al cuerpo."],
    ["Entornar los ojos al dibujar sirve para…", ["ver mejor las masas de luz y sombra", "ver más detalles", "descansar", "medir la altura"], 0, "Los detalles se pierden y quedan los valores."],
    ["Las líneas de encaje deben hacerse…", ["muy suaves", "con rotulador", "muy apretadas", "con regla siempre"], 0, "Para poder corregir."],
    ["El canon de Policleto medía…", ["7 cabezas", "4 cabezas", "10 cabezas", "12 cabezas"], 0, "Lisipo lo alargó a 8."],
  ],
  tarjetas: [
    ["Canon", "Regla de proporciones que toma una parte del cuerpo (la cabeza) como unidad."],
    ["Línea modulada", "Trazo que varía de grosor para sugerir volumen y distancia."],
    ["Perspectiva atmosférica", "Lo lejano se ve más claro, azulado y con menos detalle."],
    ["Línea de acción", "Curva que resume la postura en un dibujo de gesto."],
  ],
  glosario: [
    ["Apunte", "Dibujo rápido que capta una idea o un momento."],
    ["Boceto", "Dibujo previo para probar composiciones y soluciones."],
    ["Canon", "Sistema de proporciones del cuerpo humano basado en una unidad."],
    ["Claroscuro", "Contraste de luces y sombras para dar volumen."],
    ["Encaje", "Primera estructura del dibujo con formas geométricas simples."],
    ["Escorzo", "Figura vista en perspectiva, acortada en profundidad."],
    ["Gesto", "Dibujo rápido que capta la postura y el movimiento."],
    ["Línea de horizonte", "Línea a la altura de los ojos del observador."],
    ["Luz reflejada", "Luz que rebota en otras superficies e ilumina la sombra propia."],
    ["Penumbra", "Zona de transición entre la luz y la sombra."],
    ["Punto de fuga", "Punto del horizonte donde convergen las paralelas que se alejan."],
    ["Sombra propia", "Parte del objeto que no recibe luz directa."],
    ["Sombra proyectada", "Sombra que el objeto lanza sobre otra superficie."],
    ["Tenebrismo", "Claroscuro de contraste extremo, típico del Barroco."],
    ["Thumbnail", "Boceto en miniatura para comparar composiciones."],
    ["Valor", "Grado de claridad u oscuridad de una zona."],
  ],
  situacion: {
    titulo: "Guía ilustrada de nuestro instituto",
    reto: "El centro quiere una guía de bienvenida para el alumnado nuevo con dibujos de sus espacios y de la gente que los usa. Vuestra tarea es dibujar los lugares clave del instituto en perspectiva y llenarlos de vida con apuntes de gesto.",
    pasos: ["Elegid en grupo 4 espacios (entrada, pasillo, biblioteca, patio) y haced miniaturas de varios encuadres de cada uno.", "Escoged el mejor encuadre y dibujad el espacio en perspectiva frontal u oblicua, marcando horizonte y puntos de fuga.", "Durante un recreo, haced apuntes de gesto de compañeros (con su permiso) y añadidlos al espacio con el canon adecuado.", "Aplicad claroscuro y perspectiva atmosférica para dar volumen y profundidad.", "Montad la guía con un texto breve por espacio y presentadla al equipo directivo."],
    producto: "Guía ilustrada de 4 páginas con dibujos en perspectiva y figuras en movimiento.",
    evaluacion: ["Correcta construcción de la perspectiva (horizonte y puntos de fuga).", "Proporción y expresividad de las figuras de gesto.", "Uso del claroscuro y de los recursos de profundidad.", "Proceso documentado en el cuaderno de bocetos (miniaturas y pruebas)."],
  },
  familias: ["Regalad o conseguid un cuaderno de bocetos y proponed un dibujo al día durante una semana.", "Posad 1 minuto para que dibuje vuestro gesto mientras cocináis o leéis.", "Visitad juntos un museo o su web y buscad bocetos de grandes artistas (Leonardo, Goya, Picasso).", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: { saberes: "Lenguaje y técnicas del dibujo: línea, boceto, encaje, proporción y canon, claroscuro, perspectiva cónica y atmosférica, dibujo de gesto (RD 217/2022, Expresión Artística 4º ESO; Decret 175/2022 en Cataluña).", ideas: ["Reto de 30 bocetos en 30 días con exposición final.", "Bodegón con foco lateral para el claroscuro y escala de valores de 9 pasos.", "Fotografiar el pasillo del centro y trazar sus líneas de fuga sobre la foto impresa.", "Sesiones de gesto de 30 s con modelos voluntarios y cronómetro."] },
  fuentes: [{ t: "Biblioteca Nacional de España: dibujos de Goya y otros artistas", url: "https://www.bne.es/es/colecciones/dibujos-grabados" }],
};
