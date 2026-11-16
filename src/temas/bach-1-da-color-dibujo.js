// Dibujo Artístico I, 1º de Bachillerato. Tema 6, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");
const { marco, t, ln, rc, ci, el, pa, trazo, gris } = B;

const COL12 = ["#e8d31c", "#f0b021", "#ee7d1f", "#e0402a", "#c2185b", "#8e3b9a", "#4d4aa6", "#2a6bb8", "#1ea0c8", "#1ea58a", "#4cae4f", "#a3c93a"];
// Mini círculo cromático con sectores resaltados (índices 0-11).
function rueda(aria, resaltar, etiqueta, cx = 74) {
  const R = 58, r = 22, cy = 90, o = [];
  COL12.forEach((c, i) => { const a0 = (i * 30 - 105) * Math.PI / 180, a1 = a0 + Math.PI / 6;
    const p = (rr, a) => `${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`;
    const on = resaltar.includes(i);
    o.push(pa(`M${p(r, a0)} L${p(R, a0)} A${R} ${R} 0 0 1 ${p(R, a1)} L${p(r, a1)} A${r} ${r} 0 0 0 ${p(r, a0)}Z`, `fill="${c}" fill-opacity="${on ? 1 : 0.22}" stroke="var(--paper)" stroke-width="1.5"`)); });
  return marco(aria, o.join("") + etiqueta);
}

// Dimensiones del color: tono, saturación y valor.
const dimensiones = (() => {
  const tonos = ["#e0402a", "#ee7d1f", "#e8d31c", "#4cae4f", "#2a6bb8", "#8e3b9a"];
  const sat = ["#2a6bb8", "#4a74a8", "#6e86a0", "#8d97a0", "#a3a8ab"];
  const val = ["#d8e6f7", "#9fc0e8", "#2a6bb8", "#1b4580", "#0d2347"];
  const fila = (y, n, cols) => `${t(46, y + 17, n, { bold: 1, maxW: 80, anchor: "start" })}${cols.map((c, i) => rc(100 + i * (150 / cols.length), y, 150 / cols.length, 26, `fill="${c}"`)).join("")}`;
  return marco("Las tres dimensiones del color: tono, saturación y valor", `${fila(30, "tono", tonos)}${fila(76, "saturación", sat)}${fila(122, "valor", val)}${t(130, 24, "tres formas de cambiar un color", { color: "var(--muted)", maxW: 220 })}`);
})();

// Síntesis aditiva y sustractiva.
const sintesis = marco("Síntesis aditiva (luz: rojo, verde y azul) y síntesis sustractiva (pigmento: cian, magenta y amarillo)",
  `${rc(14, 22, 114, 104, 'fill="#16181d" rx="10"')}<circle cx="56" cy="64" r="32" fill="#ff0000" style="mix-blend-mode:screen"/><circle cx="86" cy="64" r="32" fill="#00ff00" style="mix-blend-mode:screen"/><circle cx="71" cy="90" r="32" fill="#0000ff" style="mix-blend-mode:screen"/>
  <circle cx="176" cy="64" r="32" fill="#00bcd4" style="mix-blend-mode:multiply"/><circle cx="206" cy="64" r="32" fill="#e91e8c" style="mix-blend-mode:multiply"/><circle cx="191" cy="90" r="32" fill="#ffe600" style="mix-blend-mode:multiply"/>
  ${t(71, 140, "aditiva", { bold: 1 })}${t(71, 154, "se suma luz → blanco", { fs: 9.5, color: "var(--muted)", maxW: 110 })}${t(191, 140, "sustractiva", { bold: 1 })}${t(191, 154, "se suma pigmento → oscuro", { fs: 9.5, color: "var(--muted)", maxW: 110 })}`);

// Temperatura: cálidos y fríos.
const temperatura = marco("Colores cálidos y fríos con su efecto sobre la profundidad",
  `${["#e0402a", "#ee7d1f", "#f0b021", "#e8d31c"].map((c, i) => rc(14 + i * 28, 34, 28, 44, `fill="${c}"`)).join("")}${["#1ea58a", "#1ea0c8", "#2a6bb8", "#4d4aa6"].map((c, i) => rc(138 + i * 28, 34, 28, 44, `fill="${c}"`)).join("")}
  ${t(66, 98, "cálidos", { bold: 1, color: "var(--red)" })}${t(66, 113, "avanzan, activan", { fs: 9.5, color: "var(--muted)", maxW: 110 })}${t(190, 98, "fríos", { bold: 1, color: "var(--pen)" })}${t(190, 113, "retroceden, calman", { fs: 9.5, color: "var(--muted)", maxW: 110 })}${t(130, 24, "la temperatura es relativa: se compara", { color: "var(--muted)", maxW: 230 })}${t(130, 150, "un azul verdoso es cálido junto a un azul violeta", { color: "var(--muted)", maxW: 230 })}`);

// Regla 60-30-10.
const regla = marco("Reparto de color 60-30-10: dominante, secundario y acento",
  `${rc(20, 40, 130, 80, 'fill="#2a6bb8"')}${rc(150, 40, 65, 80, 'fill="#e8d31c"')}${rc(215, 40, 22, 80, 'fill="#e0402a"')}
  ${t(85, 84, "60 % dominante", { bold: 1, color: "#fff", maxW: 110 })}${t(182, 84, "30 %", { bold: 1, maxW: 40 })}${t(226, 84, "10", { bold: 1, color: "#fff", maxW: 18 })}${t(200, 140, "10 % acento", { bold: 1, color: "var(--red)", maxW: 70 })}${t(130, 24, "un color manda, otro acompaña y otro llama la atención", { color: "var(--muted)", maxW: 240 })}`);

module.exports = B.tema({
  titulo: "El color en el dibujo",
  minutos: 105,
  objetivos: [
    "Distinguir la síntesis aditiva y la sustractiva, el círculo cromático y las dimensiones del color",
    "Reconocer y construir armonías de color y contrastes cromáticos con intención expresiva",
    "Relacionar el color con la luz, la profundidad, la emoción y la composición",
    "Aplicar con lápices, pastel, acuarela o témpera un procedimiento de color en capas con paleta limitada",
  ],
  claves: ["color", "círculo cromático", "tono", "saturación", "colores cálidos y fríos", "armonía", "complementarios", "síntesis", "paleta", "dominante"],
  pregunta: {
    texto: "Si un dibujo está en blanco y negro lo entendemos por los valores. ¿Qué añade exactamente el color, y por qué puede arruinar un buen dibujo si se usa sin criterio?",
    respuesta: "El color añade tres cosas: <mark>información</mark> (esa manzana es roja), <b>emoción</b> (un cielo naranja inquieta o abriga) y <b>organización</b> (guía la mirada). Pero el valor sigue mandando: si los colores no tienen la diferencia de claridad adecuada, el dibujo pierde volumen. El color funciona cuando se <b>decide</b> en vez de dejarlo al azar.",
  },
  lectura: {
    titulo: "Los azules de Picasso",
    html: `<p>Entre 1901 y 1904, un joven Pablo Picasso, que acababa de perder a un amigo, pintó casi exclusivamente en tonos azules y verdes. Mendigos, madres con hijos, ciegos, borrachos... Todo en un azul frío y apagado que se hizo famoso como su <i>Periodo Azul</i>. No es casualidad: el azul transmite tristeza, distancia y silencio, y Picasso lo eligió <b>a propósito</b> para hablar de la soledad y la pobreza.</p>
    <p>Pocos años después, en su <i>Periodo Rosa</i>, cambió a ocres, rosados y naranjas cálidos para pintar acróbatas y arlequines y lo hizo con la misma intención: transformar el ambiente emocional del cuadro con el color.</p>
    <p>En este tema aprenderás que el color tiene reglas, como la música tiene escalas: hay colores que se atraen y otros que se oponen, mezclas que apagan y mezclas que encienden, paletas que dan unidad y paletas que producen caos. Estudiarás cómo funciona el círculo cromático, las armonías y los contrastes, cómo interviene la luz, y cómo usar el color en capas con materiales sencillos como lápices, pasteles, acuarelas o témperas.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Qué es el color: luz y pigmento",
      html: `<p>El color no está en los objetos: es una <b>sensación</b> que se produce cuando la luz que llega al ojo es interpretada por el cerebro. La luz blanca contiene todas las longitudes de onda del espectro visible, de unos 380 nm (violeta) a unos 700 nm (rojo). Una superficie <mark>absorbe</mark> unas longitudes de onda y <mark>refleja</mark> otras: la manzana roja absorbe casi todo menos el rojo.</p>
      <p>Existen dos maneras de mezclar colores. En la <b>síntesis aditiva</b> se suman luces: rojo, verde y azul sumados dan blanco (así funcionan las pantallas). En la <b>síntesis sustractiva</b> se mezclan pigmentos y cada uno absorbe parte de la luz: amarillo, cian y magenta mezclados dan un tono oscuro cercano al negro (así funcionan la imprenta y los lápices).</p>
      <p>En dibujo y pintura tradicional, los <b>primarios</b> de uso común son <b>amarillo, rojo y azul</b>, aunque con los pigmentos modernos se obtienen más colores con un <b>magenta, un cian y un amarillo</b>. Lo importante es saber que, con pigmentos, <b>mezclar siempre oscurece y apaga</b>: cuantos más pigmentos se mezclan, más sucio y gris resulta el color.</p>`,
      svg: sintesis,
      video: { id: "tSM9EXakkeE", titulo: "Los colores: el círculo cromático", canal: "LosProductoresTV", vistas: 763839 },
    },
    {
      h: "El círculo cromático",
      html: `<p>El <b>círculo cromático</b> ordena los colores de forma que se vean sus relaciones. El de doce tonos incluye:</p>
      <ul><li>Tres <b>primarios</b>: amarillo, rojo y azul. No se obtienen mezclando otros.</li>
      <li>Tres <b>secundarios</b>: naranja (amarillo + rojo), verde (amarillo + azul) y violeta (rojo + azul).</li>
      <li>Seis <b>terciarios</b>: la mezcla de un primario con su secundario vecino (amarillo anaranjado, rojo anaranjado, rojo violáceo, azul violáceo, azul verdoso y amarillo verdoso).</li></ul>
      <p>La posición en el círculo describe relaciones: los <b>vecinos</b> se parecen (colores análogos), los que están a un tercio de distancia forman <b>triadas</b> y los que están <b>enfrentados</b> son <b>complementarios</b>: amarillo-violeta, rojo-verde, azul-naranja. Los complementarios se oponen al máximo y, mezclados en proporciones parecidas, se <mark>neutralizan</mark> y dan grises o marrones.</p>
      <p>Una práctica clásica es construir el círculo con témperas o lápices: obliga a controlar las mezclas y a comprobar que, al mezclar bien, los colores se ordenan solos.</p>`,
      svg: B.circulo("Círculo cromático de 12 tonos con primarios, secundarios y terciarios"),
    },
    {
      h: "Tono, saturación y valor",
      html: `<p>Todo color se describe con tres dimensiones:</p>
      <ul><li>El <b>tono</b> (o matiz) es el color propiamente dicho: rojo, azul, verde… Es lo que distingue una posición del círculo de otra.</li>
      <li>La <b>saturación</b> (o croma, intensidad) es su pureza: un rojo puro y vivo está muy saturado; un rojo mezclado con gris o con su complementario está <i>desaturado</i> o «roto».</li>
      <li>El <b>valor</b> es su claridad: un azul se aclara con blanco (o con agua, en acuarela) y se oscurece con otro color o con negro.</li></ul>
      <p>Es esencial no confundir saturación y valor. Un amarillo puro es <b>muy claro</b> aunque esté saturado, y un violeta puro es <b>muy oscuro</b>, de modo que, en blanco y negro, un rojo saturado y un verde saturado pueden verse del mismo gris. Por eso, antes de usar el color, <mark>se resuelve el valor</mark>: la grisalla o el boceto en blanco y negro. Si el valor está bien, el color se perdona; si el valor está mal, ningún color lo salva.</p>
      <p>Para modificar un color hay seis operaciones: cambiar su tono (desplazar en el círculo), aumentar o reducir su saturación, y aclararlo u oscurecerlo.</p>`,
      svg: dimensiones,
    },
    {
      h: "Colores cálidos y fríos",
      html: `<p>Los colores se perciben como <b>cálidos</b> (amarillos, naranjas, rojos) o <b>fríos</b> (verdes azulados, azules, violetas). Por asociación con el fuego y el sol, los primeros transmiten energía, cercanía y calor; con el agua y el hielo, los segundos, calma, distancia y frescura.</p>
      <p>La temperatura es <mark>relativa</mark>: un verde puede ser cálido junto a un azul y frío junto a un amarillo. Para dibujar, lo importante es la <b>relación</b> entre colores vecinos, no su etiqueta.</p>
      <p>Hay dos aplicaciones esenciales:</p>
      <ul><li><b>Profundidad</b>: los cálidos tienden a «avanzar» y los fríos a «retroceder». Un fondo frío y un primer plano cálido aumentan la sensación de espacio.</li>
      <li><b>Luz y sombra</b>: si la luz es cálida (sol de la tarde), las sombras tienden a ser frías y viceversa. Una sombra enfriada con un toque de azul o violeta a una zona de luz amarillenta da <b>vida</b> a un volumen.</li></ul>
      <p>Esta alternancia de temperaturas, muy estudiada por los impresionistas, es una de las claves para que un dibujo de color no se vea plano.</p>`,
      svg: temperatura,
    },
    {
      h: "Las armonías de color",
      html: `<p>Una <b>armonía cromática</b> es un conjunto de colores que funcionan bien juntos. Las más usadas se basan en posiciones del círculo:</p>
      <ul><li><b>Monocromática</b>: un solo tono con variaciones de valor y saturación; unidad máxima, ambiente sereno.</li>
      <li><b>Análoga</b>: tonos vecinos (por ejemplo amarillo, amarillo-verde y verde); suave y natural.</li>
      <li><b>Complementaria</b>: dos tonos opuestos (azul y naranja); contraste fuerte y vibrante.</li>
      <li><b>Complementaria dividida</b>: un tono y los dos vecinos de su complementario; contraste vivo con menos tensión.</li>
      <li><b>Triada</b>: tres tonos a igual distancia (amarillo, rojo y azul); equilibrio vivo.</li>
      <li><b>Tetrada</b>: dos pares de complementarios; rica pero difícil de controlar.</li></ul>
      <p>Una armonía no es una ley, sino un <mark>punto de partida seguro</mark>. En la práctica, los dibujantes escogen una <b>paleta limitada</b> de tres a cinco colores y la repiten en todo el dibujo. Esa limitación, lejos de empobrecer, crea unidad.</p>`,
      svg: rueda("Armonía complementaria: azul y naranja enfrentados en el círculo", [2, 8], `${t(254, 40, "complementaria", { bold: 1, anchor: "end", maxW: 100 })}${t(254, 56, "azul ↔ naranja", { fs: 9.5, color: "var(--muted)", anchor: "end", maxW: 90 })}${t(254, 90, "análoga: vecinos", { anchor: "end", maxW: 100 })}${t(254, 106, "triada: ◭ a 120°", { anchor: "end", maxW: 100 })}`),
    },
    {
      h: "Los contrastes de color",
      html: `<p>El pintor y pedagogo suizo Johannes Itten, de la Bauhaus, catalogó siete <b>contrastes</b> que sirven para analizar y planificar el color:</p>
      <ol><li><b>De tono</b>: colores puros y distintos (rojo, amarillo, azul): intenso, infantil.</li>
      <li><b>Claro-oscuro</b>: diferencia de valor.</li>
      <li><b>Cálido-frío</b>: oposición de temperatura.</li>
      <li><b>De complementarios</b>: opuestos en el círculo, que se potencian al estar juntos.</li>
      <li><b>Simultáneo</b>: un color tiñe su entorno con su complementario (un gris sobre rojo parece verdoso).</li>
      <li><b>De saturación</b>: colores vivos junto a otros apagados.</li>
      <li><b>De cantidad</b>: grandes áreas de un color frente a pequeñas de otro.</li></ol>
      <p>El <b>contraste simultáneo</b> explica por qué un color cambia según su vecino: el mismo gris se ve más cálido junto a un azul y más frío junto a un naranja. Los pintores lo aprovechan: un toque pequeño de un color saturado rodeado de colores apagados destaca como una joya. En cambio, dos colores de igual valor y saturación enfrentados <i>vibran</i> de forma incómoda.</p>`,
      svg: B.rejilla("Los siete contrastes de Itten", ["Contraste", "Efecto"], [["De tono", "vivo, intenso"], ["Claro-oscuro", "volumen"], ["Cálido-frío", "profundidad"], ["Complementarios", "vibración"], ["Simultáneo", "el vecino tiñe"]], { t: "Itten (selección)" }),
      video: { id: "hAZBZ8AjC4I", titulo: "Aprendamos teoría del color", canal: "piyoasdf", vistas: 636913 },
    },
    {
      h: "Mezclas y neutros",
      html: `<p>Con pocos colores bien elegidos se pueden mezclar muchísimos tonos. Reglas esenciales:</p>
      <ul><li>Para <b>aclarar</b> un color con pintura opaca se añade blanco; en acuarela y lápiz se deja ver más papel, se diluye o se aplica menos presión. Conviene recordar que el blanco enfría y apaga.</li>
      <li>Para <b>oscurecer</b> se añade un color oscuro, mejor que negro puro: el azul ultramar o el violeta oscurecen de forma más viva que el negro.</li>
      <li>Para <b>apagar</b> (desaturar) se añade el <b>complementario</b>: un toque de verde al rojo, de violeta al amarillo.</li>
      <li>Para <b>crear grises coloreados</b>: mezclar complementarios casi a partes iguales, con una pequeña variación que decide si el gris es cálido o frío. Son mucho más ricos que un gris de tubo.</li></ul>
      <p>Con lápices de color no se mezcla en paleta, sino <b>sobre el papel</b>: se superponen capas finas y el ojo hace la mezcla <i>óptica</i>. Con acuarela se pueden mezclar en la paleta o superponiendo veladuras transparentes. En todos los casos, <mark>menos es más</mark>: limitar a dos o tres pigmentos por mezcla mantiene el color limpio.</p>`,
      svg: B.flujo("Cómo modificar un color", ["Aclarar: blanco, agua o menos presión", "Oscurecer: un color oscuro, no negro puro", "Apagar: su complementario", "Gris coloreado: complementarios casi a partes iguales"], { t: "Mezclas útiles" }),
    },
    {
      h: "Color local, color de luz y color reflejado",
      html: `<p>El color de un objeto no es uno solo. Hay tres componentes que se superponen:</p>
      <ul><li>El <b>color local</b> es el propio de la superficie con luz neutra: la manzana es roja; el cielo, azul.</li>
      <li>El <b>color de la luz</b> tiñe la superficie: luz cálida del ocaso añade naranja a todo; luz fría de una ventana al norte añade azul. La luz y las sombras tienen temperaturas opuestas.</li>
      <li>El <b>color reflejado</b> viene de objetos próximos: una pared roja arroja un rebote rojizo en la sombra de la mejilla; el verde de la hierba tiñe de verde la parte inferior de un cuerpo.</li></ul>
      <p>Por eso las sombras casi nunca son negras o grises. En la naturaleza, la sombra de una sábana blanca bajo el sol es azulada o violácea, <b>complementaria</b> a la luz amarillenta. Los impresionistas, como Monet, se dieron cuenta y eliminaron el negro de la paleta: pintaron las sombras con colores.</p>
      <p>Una pauta práctica para el dibujo: <mark>nunca uses negro para las sombras de color</mark>; usa un color oscuro de la zona de la paleta (azul, violeta o marrón) y añade un toque del color de rebote en el borde de sombra.</p>`,
      svg: B.cajas("Tres componentes del color de una superficie", [["Color local", "el propio del objeto"], ["Color de luz", "cálido o frío"], ["Reflejado", "rebote del entorno"], ["Sombra", "complementaria|a la luz"]], { t: "Más de un color" }),
    },
    {
      h: "Color y emoción",
      html: `<p>Los colores tienen asociaciones psicológicas y culturales que los artistas aprovechan, aunque no son universales ni absolutas:</p>
      <ul><li><b>Rojo</b>: pasión, energía, peligro, amor (en Occidente); suerte en China.</li>
      <li><b>Amarillo</b>: alegría, luz, atención; también cobardía o advertencia.</li>
      <li><b>Azul</b>: calma, confianza, tristeza, lejanía.</li>
      <li><b>Verde</b>: naturaleza, esperanza, salud; también envidia o veneno.</li>
      <li><b>Violeta</b>: misterio, espiritualidad, lujo, duelo (en algunas culturas).</li>
      <li><b>Naranja</b>: calidez, vitalidad, entusiasmo.</li>
      <li><b>Negro y blanco</b>: elegancia, luto y vacío o pureza y paz, según la cultura (el blanco es color de luto en partes de Asia).</li></ul>
      <p>La emoción no depende solo del tono, sino de la <b>saturación</b> y del <b>valor</b>: los colores muy saturados y claros resultan alegres y estimulantes; los apagados y oscuros, graves y melancólicos. Y también del <b>contexto</b>: un rojo sobre blanco es alegre (cartel de rebajas) y sobre negro, inquietante.</p>
      <p>Ante un dibujo, pregúntate: ¿qué emoción quiero producir? Elige entonces temperatura, saturación y dominante en consecuencia, y mantén la coherencia.</p>`,
      svg: B.rejilla("Colores y asociaciones habituales", ["Color", "Asocia"], [["Rojo", "energía, peligro"], ["Azul", "calma, lejanía"], ["Amarillo", "luz, alerta"], ["Verde", "naturaleza"], ["Violeta", "misterio"]], { t: "Asociaciones" }),
    },
    {
      h: "Color y composición: dominante y acento",
      html: `<p>El color se organiza dentro del dibujo como cualquier otro elemento. Los principios fundamentales son:</p>
      <ul><li><b>Dominante</b>: un color o una temperatura domina el conjunto y da unidad. Si todo es protagonista, nada lo es.</li>
      <li><b>Secundario</b>: un segundo color o temperatura acompaña y enriquece.</li>
      <li><b>Acento</b>: pequeñas notas de un color contrastado que llaman la atención sobre el centro de interés.</li></ul>
      <p>Una fórmula orientativa es la regla <b>60-30-10</b>: el 60 % de la superficie para el dominante, el 30 % para el secundario y el 10 % para el acento. Es común en interiorismo, diseño y pintura. Sobre un conjunto azul y verde (fríos), un toque de naranja en el centro de interés es muy eficaz.</p>
      <p>Otras reglas útiles: <mark>llevar el mayor contraste de color y valor al centro de interés</mark>, repetir algún color de la paleta en distintas zonas (<i>eco cromático</i>) y suavizar saturación y contraste hacia los bordes. Un truco clásico es entornar los ojos: si el dibujo se disuelve en una mancha confusa, hay demasiados focos.</p>`,
      svg: regla,
    },
    {
      h: "Técnicas de color con materiales sencillos",
      html: `<p>Un procedimiento seguro para trabajar el color a partir de un dibujo es el siguiente:</p>
      <ol><li><b>Dibujo y valores</b>: encaje y tonos en grafito o en grisalla, sin presionar mucho.</li>
      <li><b>Paleta limitada</b>: se eligen de tres a cinco colores más blanco, según la armonía decidida.</li>
      <li><b>Capa base</b> de color local con tonos claros y diluidos, de las zonas grandes a las pequeñas.</li>
      <li><b>Sombras y medios tonos</b>: capas más oscuras y frías, respetando los valores del paso 1.</li>
      <li><b>Luces y acentos</b>: se trabajan al final los colores cálidos de luz y los toques saturados.</li>
      <li><b>Unificar</b>: una veladura general o un bruñido suave para integrar el conjunto.</li></ol>
      <p>Según el material: con <b>lápices de color</b> se va de claro a oscuro por capas finas y se bruñe al final; con <b>acuarela</b>, de claro a oscuro y de grande a pequeño, reservando los blancos; con <b>témpera</b>, de oscuro a claro, ya que cubre; con <b>pastel</b>, de abajo a arriba, con fijado intermedio. En todos los casos se trabaja el color <b>por zonas relacionadas</b> y no por objetos aislados.</p>
      <p>Y siempre una prueba: antes de aplicar un color definitivo, se hace una <b>muestra</b> sobre una hoja aparte y se compara con el modelo.</p>`,
      svg: B.capas("Capas de color de abajo arriba", [["1 Valores", "grafito o grisalla"], ["2 Base", "color local claro"], ["3 Sombras", "oscuras y frías"], ["4 Luces", "cálidas y acentos"], ["5 Unificar", "veladura o bruñido"]], { t: "Orden del color" }),
      video: { id: "6ksDHK6eSFg", titulo: "Cómo pintar bonito con lápices de colores", canal: "piyoasdf", vistas: 517283 },
    },
    {
      h: "Color, profundidad y atmósfera",
      html: `<p>El color también construye el <b>espacio</b>. Con la distancia, el aire y el polvo interpuestos modifican lo que vemos y provocan la <b>perspectiva atmosférica</b> o <i>aérea</i>:</p>
      <ul><li>Los colores se vuelven <b>más claros</b>, menos saturados y <b>más azulados</b> con la distancia.</li>
      <li>El <b>contraste</b> y el detalle se reducen: las montañas lejanas son siluetas azuladas y suaves.</li>
      <li>Los colores <b>cálidos</b> y saturados quedan en primer plano; los fríos y suaves, al fondo.</li></ul>
      <p>Leonardo ya recomendaba pintar los fondos de azul y de verde claro para obtener lejanía. Aplicado a un paisaje, esto significa dividir el espacio en tres planos: <b>primer plano</b> (contraste fuerte, cálido, detalle), <b>plano medio</b> (valores y saturación medios) y <b>fondo</b> (claro, frío, difuso). A menudo basta con esa estructura para que un dibujo sencillo adquiera profundidad.</p>
      <p>Una práctica bonita: hacer un paisaje con solo <b>tres papeles o tres pasadas de acuarela</b> en tonos cada vez más oscuros y cálidos, de atrás hacia delante. Es un ejercicio rápido que demuestra que la atmósfera se hace con <mark>pocas decisiones bien tomadas</mark>.</p>`,
      svg: B.capas("Tres planos con color decreciente", [["Fondo", "claro, frío, difuso"], ["Plano medio", "tonos medios"], ["Primer plano", "cálido y contrastado"]], { t: "Perspectiva atmosférica" }),
    },
  ],
  figura: {
    titulo: "El color en el dibujo",
    items: [["Círculo", "12 tonos", "primarios, secundarios", "y terciarios"], ["Dimensiones", "T · S · V", "tono, saturación", "y valor"], ["Armonías", "análoga · compl.", "triada, tetrada", "paleta limitada"], ["Luz y espacio", "cálido / frío", "sombras de color", "atmósfera"]],
  },
  video: { id: "tSM9EXakkeE", titulo: "Los colores: el círculo cromático", canal: "LosProductoresTV", vistas: 763839 },
  quiz: [
    ["El color es…", ["una propiedad fija del objeto", "una sensación producida por la luz que llega al ojo", "un material", "una textura"], 1, "Depende de la luz y del cerebro."],
    ["En la síntesis aditiva los primarios son…", ["amarillo, rojo y azul", "rojo, verde y azul", "cian, magenta y amarillo", "blanco, negro y gris"], 1, "Al sumar luces se obtiene blanco."],
    ["Mezclar pigmentos suele…", ["aclarar y avivar", "oscurecer y apagar", "no cambiar", "dar siempre blanco"], 1, "Es síntesis sustractiva."],
    ["Los secundarios son…", ["amarillo, rojo, azul", "naranja, verde, violeta", "blanco, negro, gris", "rosa, marrón, celeste"], 1, "Mezclas de dos primarios."],
    ["Los complementarios…", ["son vecinos en el círculo", "están enfrentados en el círculo", "son de la misma temperatura", "no existen"], 1, "Amarillo-violeta, rojo-verde, azul-naranja."],
    ["Al mezclar dos complementarios en partes parecidas se obtiene…", ["un color más vivo", "un gris o marrón neutro", "blanco", "negro puro"], 1, "Se neutralizan."],
    ["La saturación de un color es…", ["su claridad", "su pureza o intensidad", "su temperatura", "su textura"], 1, "Un color apagado está desaturado."],
    ["El valor de un color es…", ["su tono", "su claridad u oscuridad", "su saturación", "su precio"], 1, "Se aclara con blanco o agua."],
    ["¿Qué color puro es muy claro aun saturado?", ["Violeta", "Amarillo", "Azul marino", "Marrón"], 1, "El amarillo puro tiene un valor muy alto."],
    ["Los colores cálidos tienden a…", ["retroceder", "avanzar visualmente", "no cambiar", "desaparecer"], 1, "Los fríos retroceden."],
    ["Si la luz es cálida, las sombras tienden a ser…", ["más cálidas", "más frías", "negras", "iguales"], 1, "Contraste de temperaturas entre luz y sombra."],
    ["Una armonía análoga usa…", ["colores opuestos", "colores vecinos en el círculo", "un solo color", "blanco y negro"], 1, "Tonos próximos entre sí."],
    ["La armonía monocromática se basa en…", ["tres tonos", "un solo tono con variaciones de valor y saturación", "colores opuestos", "colores cálidos"], 1, "Máxima unidad."],
    ["El contraste simultáneo consiste en que…", ["dos colores iguales se anulan", "un color tiñe a su vecino con su complementario", "todos los colores se ven iguales", "el negro desaparece"], 1, "Un gris sobre rojo parece verdoso."],
    ["Los impresionistas eliminaron de la paleta…", ["el azul", "el negro", "el amarillo", "el blanco"], 1, "Pintaron las sombras con colores."],
    ["¿Qué asociación habitual tiene el azul?", ["Calma o tristeza", "Peligro", "Calor", "Energía"], 0, "Transmite calma, distancia y frescura."],
    ["La regla 60-30-10 reparte…", ["valores", "dominante, secundario y acento", "tres lápices", "tres planos"], 1, "Una fórmula orientativa de proporciones de color."],
    ["Un acento de color sirve para…", ["rellenar", "llamar la atención sobre el centro de interés", "oscurecer", "ocultar"], 1, "Una nota pequeña de color contrastado."],
    ["La perspectiva atmosférica hace que lo lejano se vea…", ["más oscuro y cálido", "más claro, azulado y menos contrastado", "más saturado", "más grande"], 1, "El aire interpuesto suaviza y enfría."],
    ["Antes de colorear conviene resolver…", ["el color de los ojos", "el valor", "el fondo", "la firma"], 1, "Si el valor está bien, el color se perdona."],
  ],
  examen: [
    ["Un rojo y un verde de la misma claridad, en blanco y negro, se verán…", ["muy distintos", "casi iguales", "blanco y negro", "invisibles"], 1, "Tienen valores similares; por eso se resuelve primero el valor."],
    ["Para apagar un naranja sin ensuciarlo demasiado, añadirás…", ["negro", "un toque de azul (su complementario)", "blanco", "rojo"], 1, "El complementario neutraliza."],
    ["En un paisaje, los montes del fondo se pintan…", ["más oscuros y saturados", "más claros, fríos y con menos detalle", "iguales al primer plano", "negros"], 1, "Perspectiva atmosférica."],
    ["¿Qué paleta crea más unidad?", ["Diez colores saturados", "Una paleta limitada de tres a cinco colores", "Todos los colores del estuche", "Solo negro"], 1, "La limitación da cohesión."],
    ["Una sombra sobre una pared blanca iluminada por el sol suele tener un matiz…", ["azulado o violáceo", "naranja", "rojo", "negro"], 0, "Complementaria de la luz amarillenta."],
    ["Un cuadro con dominante azul y un pequeño toque de naranja usa…", ["armonía monocromática", "un acento complementario", "una triada", "una análoga"], 1, "El naranja es complementario del azul."],
    ["Con la témpera se suele pintar…", ["de claro a oscuro reservando el papel", "de oscuro a claro, porque cubre", "sin agua", "solo con negro"], 1, "Es opaca."],
    ["¿Qué hacer antes de aplicar un color definitivo?", ["Aplicarlo directamente", "Probarlo en una hoja aparte y compararlo", "Borrarlo", "Mezclar todos los colores"], 1, "Evita errores en el original."],
  ],
  feynman: ["La diferencia entre síntesis aditiva y sustractiva", "Cómo se organiza el círculo cromático y qué son los complementarios", "Qué son tono, saturación y valor y por qué se resuelve primero el valor", "Cómo se usa el color para crear profundidad y emoción"],
  mapa: ["EL COLOR EN EL DIBUJO", [["Fundamentos", "luz · síntesis · círculo"], ["Dimensiones", "tono · saturación · valor"], ["Relaciones", "armonías · contrastes · temperatura"], ["Aplicación", "paleta · capas · atmósfera"]]],
  tarjetas: [
    ["Síntesis aditiva", "Suma de luces: rojo, verde y azul dan blanco."],
    ["Síntesis sustractiva", "Mezcla de pigmentos: oscurece y apaga."],
    ["Primarios", "Amarillo, rojo y azul (en el círculo tradicional)."],
    ["Secundarios", "Naranja, verde y violeta."],
    ["Complementarios", "Colores opuestos en el círculo; al mezclarse se neutralizan."],
    ["Tono, saturación y valor", "Color, pureza y claridad."],
    ["Cálidos y fríos", "Los cálidos avanzan y los fríos retroceden."],
    ["Armonía análoga", "Colores vecinos del círculo."],
    ["Contraste simultáneo", "Un color tiñe a su vecino con su complementario."],
    ["Sombras de color", "Suelen ser complementarias a la luz; no son negras."],
    ["Regla 60-30-10", "Dominante, secundario y acento."],
    ["Perspectiva atmosférica", "Lo lejano se ve más claro, azulado y menos contrastado."],
  ],
  ejemplos: [
    ["Dado un color verde, ¿cómo lo apagas y cómo lo aclaras manteniendo su frescura?", ["Para apagarlo, añade un toque de rojo (su complementario).", "Para aclararlo en acuarela, añade agua; en lápiz, menos presión.", "Evita el blanco si quieres conservar la transparencia."], "Verde roto con rojo y aclarado con agua o presión suave."],
    ["Elige una armonía para un cartel de playa al atardecer y justifica.", ["Dominante: naranjas y rosados (análoga cálida).", "Secundario: violetas del mar.", "Acento: un toque pequeño de azul turquesa."], "Armonía cálida con acento complementario: transmite calidez y vida."],
    ["Un objeto rojo en sombra junto a una pared amarilla: ¿qué color tendrá su sombra?", ["Sombra de un rojo oscuro, más frío (con un toque de azul o violeta).", "El rebote de la pared amarilla tiñe el borde de naranja.", "Sin negro."], "Rojo oscuro violáceo con rebote anaranjado en el borde."],
    ["Planifica el color de un paisaje con tres planos.", ["Fondo: azul grisáceo claro y suave.", "Plano medio: verdes medios, menos contrastados.", "Primer plano: verdes cálidos y ocres saturados con mayor contraste."], "Gradación de claro-frío a oscuro-cálido: profundidad."],
    ["Si el 100 % de una lámina mide 40 × 30 cm, ¿qué superficie ocupará el dominante en un reparto 60-30-10?", ["Área total = 40 × 30 = 1200 cm².", "Dominante: 60 % → 720 cm².", "Secundario: 360 cm²; acento: 120 cm²."], "720 cm² de dominante, 360 de secundario y 120 de acento."],
    ["Describe cómo harías un gris cálido y uno frío con complementarios.", ["Mezcla naranja y azul casi a partes iguales.", "Con un poco más de naranja: gris cálido.", "Con un poco más de azul: gris frío."], "Grises coloreados más ricos que un gris de tubo."],
  ],
  errores: [
    "Colorear sin resolver antes el valor: el dibujo pierde volumen.",
    "Usar negro para oscurecer o para las sombras: apaga el color.",
    "Mezclar demasiados pigmentos y obtener colores sucios.",
    "Confundir saturación (pureza) con valor (claridad).",
    "Usar todos los colores del estuche sin una paleta ni dominante.",
    "Colorear cada objeto de forma aislada y olvidar el color de luz y los rebotes.",
  ],
  ejercicios: {
    b: [
      ["¿Qué diferencia hay entre síntesis aditiva y sustractiva?", "La aditiva suma luces (RGB) y da blanco; la sustractiva mezcla pigmentos, que restan luz, y da tonos oscuros."],
      ["Nombra los primarios y los secundarios del círculo tradicional.", "Primarios: amarillo, rojo y azul. Secundarios: naranja, verde y violeta."],
      ["Indica el complementario de cada primario.", "Amarillo: violeta; rojo: verde; azul: naranja."],
      ["¿Qué son tono, saturación y valor?", "Tono: el color en sí; saturación: su pureza o intensidad; valor: su claridad."],
      ["Di cuáles son colores cálidos y cuáles fríos.", "Cálidos: amarillos, naranjas, rojos. Fríos: verdes azulados, azules y violetas."],
      ["¿Qué es una armonía monocromática?", "Una paleta de un solo tono con variaciones de valor y saturación."],
      ["¿Qué es una armonía análoga? Ejemplo.", "Colores vecinos en el círculo, como amarillo, amarillo-verde y verde."],
      ["¿Qué ocurre al mezclar dos complementarios?", "Se neutralizan y dan grises o marrones."],
      ["¿Cómo se aclara un color en acuarela?", "Añadiendo agua (más papel visible), no blanco."],
      ["Menciona dos emociones que transmiten los colores fríos.", "Calma, tristeza, frescura, lejanía."],
      ["¿Qué es la regla 60-30-10?", "Reparto del color: 60 % dominante, 30 % secundario y 10 % acento."],
      ["Describe la perspectiva atmosférica en una frase.", "Con la distancia los colores se vuelven más claros, azulados y con menos contraste."],
    ],
    m: [
      ["Construye con tus palabras los seis terciarios del círculo.", "Amarillo anaranjado, rojo anaranjado, rojo violáceo, azul violáceo, azul verdoso y amarillo verdoso."],
      ["¿Por qué un rojo y un verde saturados pueden verse como el mismo gris en blanco y negro?", "Porque tienen un valor (claridad) similar; el color diferencia el tono, pero en blanco y negro solo queda el valor."],
      ["Describe cómo oscurecer un amarillo sin ensuciarlo.", "Añadir un toque de su complementario (violeta) o de un naranja-marrón; el negro lo vuelve verdoso y sucio."],
      ["Una taza naranja sobre una mesa azul. ¿Qué efecto de contraste se produce?", "Contraste de complementarios: ambos se potencian y vibran; la taza destaca como centro de interés."],
      ["Una luz cálida ilumina una pera. ¿De qué color pintarás su sombra y por qué?", "Un verde o violeta frío y oscuro, porque la sombra tiende a ser complementaria a la luz y se mantiene el contraste de temperaturas."],
      ["Enumera tres decisiones de color de un dibujo para transmitir calma.", "Tonos fríos (azules y verdes), saturación baja o media y poco contraste, con una dominante clara."],
      ["Explica por qué se limita la paleta a tres o cinco colores.", "Da unidad, evita mezclas sucias y facilita que el color sea coherente."],
      ["Un alumno colorea cada objeto con su color local sin variación. ¿Qué mejoras propones?", "Añadir color de luz y de sombra, reflejos de objetos vecinos y variaciones de temperatura entre luces y sombras."],
      ["Calcula el área del acento (10 %) en un cartel de 50 × 70 cm.", "Área = 3500 cm²; 10 % = 350 cm²."],
      ["Describe cómo harías un cielo de atardecer con lápices de color, por capas.", "Capa amarilla clara arriba del horizonte, capa naranja, otra rosada y violeta hacia arriba, bruñendo los pasos y reservando el sol."],
    ],
    a: [
      ["Analiza cómo cambian el ambiente y el mensaje de un mismo paisaje al pasar de una paleta análoga fría (azules y verdes) a una complementaria (azul-naranja).", "La fría: calma, silencio, melancolía, unidad. La complementaria: más tensión y vibración, con un acento cálido que atrae la mirada y da un tono más dramático o festivo según el reparto."],
      ["Diseña la paleta limitada (5 colores) de un bodegón de fruta y justifica la armonía.", "Amarillo cadmio, rojo carmín, azul ultramar, verde hoja y blanco; cubren cálidos y fríos, permiten mezclar grises coloreados y dominan los cálidos con un secundario frío y acento rojo."],
      ["Explica el contraste simultáneo con un ejemplo y cómo aprovecharlo al dibujar.", "Un gris sobre fondo rojo parece verdoso. Se aprovecha para dar vida a un gris colocando junto a él su complementario, o para hacer destacar una zona con el color opuesto alrededor."],
      ["Un dibujo de retrato con luz cálida de ventana: describe el tratamiento de color de luz, medios tonos, sombras y rebotes.", "Luz: ocres y rosados cálidos; medios tonos: rojizos y verdosos fríos suaves; sombras: violetas y verdes oscuros; rebotes: tono cálido de la ropa o la pared en el borde de sombra."],
      ["Aplica la regla 60-30-10 a una lámina de 21 × 29,7 cm y comenta cómo la adaptarías a un tema nocturno.", "Área ≈ 623,7 cm²: dominante 374 cm², secundario 187 cm², acento 62 cm². Nocturno: dominante azul oscuro, secundario violeta, acento amarillo cálido para la luz de una ventana."],
      ["Argumenta por qué los impresionistas usaron sombras de color y qué cambios supuso en la pintura.", "Observaron que las sombras reciben el color complementario de la luz y los reflejos del entorno; abandonaron el negro, aumentaron la luminosidad y vibración y sustituyeron el modelado con valores por contrastes de color."],
      ["Describe cómo harías una grisalla y su paso a color para un paisaje con acuarela.", "Primero pintar el paisaje en un solo tono (sepia o azul grisáceo) resolviendo valores; luego velar capas transparentes de color local de claro a oscuro, manteniendo los valores y añadiendo acentos cálidos y frías sombras."],
      ["Valora la afirmación: «con los 12 colores del estuche basta con usar todos para que sea bonito». Razona la respuesta.", "No es cierto: el uso de todos los colores sin jerarquía dispersa la atención y rompe la unidad. Es preferible elegir una armonía, una dominante y pocos acentos, y mezclar el resto."],
    ],
  },
  glosario: [
    ["Color", "Sensación producida por la luz que llega al ojo."],
    ["Síntesis aditiva", "Mezcla de luces; los primarios son rojo, verde y azul."],
    ["Síntesis sustractiva", "Mezcla de pigmentos que absorben luz."],
    ["Círculo cromático", "Ordenación circular de los colores."],
    ["Primario", "Color que no se obtiene mezclando otros."],
    ["Secundario", "Resultado de mezclar dos primarios."],
    ["Complementario", "Color opuesto a otro en el círculo."],
    ["Tono", "Matiz: lo que distingue un color de otro."],
    ["Saturación", "Pureza o intensidad de un color."],
    ["Valor", "Claridad u oscuridad de un color."],
    ["Armonía", "Combinación de colores que funcionan bien juntos."],
    ["Paleta", "Conjunto de colores elegido para una obra."],
    ["Contraste simultáneo", "Efecto por el que un color influye en el aspecto del vecino."],
    ["Color local", "Color propio de una superficie con luz neutra."],
    ["Veladura", "Capa transparente que modifica el color inferior."],
    ["Perspectiva atmosférica", "Cambio de color y contraste con la distancia."],
  ],
  situacion: {
    titulo: "El mismo paisaje, cuatro estados de ánimo",
    reto: "Elige un paisaje sencillo y pinta cuatro versiones pequeñas con paletas diferentes que transmitan emociones distintas, y justifica las decisiones de color.",
    pasos: [
      "Dibuja un paisaje con tres planos y resuelve los valores en una grisalla.",
      "Construye cuatro paletas: calma (fría y análoga), alegría (cálida y saturada), misterio (violeta y oscura) y tensión (complementaria).",
      "Pinta cada versión con acuarela, lápices o témpera, respetando los valores de la grisalla.",
      "Aplica dominante, secundario y acento (60-30-10) y la perspectiva atmosférica.",
      "Escribe una cartela por versión con la armonía, la temperatura y la emoción.",
    ],
    producto: "Una lámina con la grisalla y las cuatro versiones coloreadas, con sus paletas y cartelas.",
    evaluacion: [
      "Las cuatro paletas son coherentes con la emoción elegida y con una armonía clara.",
      "Se respetan los valores de la grisalla y se aprecia la perspectiva atmosférica.",
      "Hay dominante, secundario y acento, con el mayor contraste en el centro de interés.",
      "Las cartelas usan con propiedad el vocabulario del color.",
    ],
  },
  familias: [
    "Buscad en casa objetos de colores complementarios y observad cómo se potencian.",
    "Mirad un atardecer y comentad qué colores tiene la luz y cuáles las sombras.",
    "Dejadle experimentar mezclas con témperas y que anote cuáles le salen más vivas y cuáles más sucias.",
    "Visitad una exposición de Picasso, Monet o Sorolla y hablad de sus paletas.",
  ],
  saberes: "Color y dibujo: teoría del color, círculo cromático, dimensiones del color, colores cálidos y fríos, armonías y contrastes, mezclas, color y luz, color y emoción, color en la composición, técnicas de color y perspectiva atmosférica.",
  ideas: [
    "Construir un círculo cromático colectivo con témpera y comprobar las mezclas.",
    "Hacer fotocopias en blanco y negro de láminas en color y comparar el valor de cada tono.",
    "Analizar paletas de obras de artistas conocidos con una plantilla común.",
    "Proponer el reto «solo tres colores y blanco».",
  ],
  fuentes: [
    { t: "Color, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Color" },
    { t: "Johannes Itten, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Johannes_Itten" },
    { t: "Periodo azul de Picasso, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Per%C3%ADodo_azul" },
  ],
});
