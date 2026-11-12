// Educación Plástica 6º de Primaria: arte digital. Dibujos propios en SVG.
const { tema, L, svg, tx, pixeles, AZ, RO, VE, NA, AM, MO } = require("./_pri6d");

const M = "Educación Plástica";

// Corazón en píxeles y el mismo ampliado.
const corazon = [".rr.rr.", "rrrrrrr", "rrrwrrr", ".rrrrr.", "..rrr..", "...r..."];
const pal = { r: "#d7262b", w: "#ffb3b3" };

// Capas: tres hojas apiladas en perspectiva.
const capas = svg("Tres capas apiladas: fondo, personaje y texto", `
  ${[["fondo", "#bcd7f2", 0], ["personaje", "#f6c26b", 1], ["texto", "#d9f0dc", 2]].map(([n, c, i]) => `<path d="M${40 + i * 26} ${110 - i * 30} l 90 0 l 40 -30 l -90 0 z" fill="${c}" fill-opacity=".9" stroke="var(--ink)" stroke-width="1.5"/>${tx(190 + i * 18, 92 - i * 30, n, { s: 11, a: "start" })}`).join("")}
  <circle cx="${110 + 26}" cy="70" r="8" fill="${RO}"/>${tx(130, 160, "cada elemento en su capa", { s: 11, c: "var(--muted)" })}`);

// Vectores frente a píxeles: un círculo ampliado.
const vectorPixel = svg("Al ampliar, la imagen de píxeles se ve en escalones y la vectorial sigue lisa", `
  ${pixeles("", ["..aaa..", ".aaaaa.", "aaaaaaa", "aaaaaaa", "aaaaaaa", ".aaaaa.", "..aaa.."], { a: AZ }, { solo: true, x: 22, y: 34, k: 14 })}
  <circle cx="190" cy="83" r="48" fill="${AZ}"/>
  ${tx(71, 150, "píxeles (mapa de bits)", { s: 10.5 })}${tx(190, 150, "vectorial", { s: 10.5 })}${tx(130, 22, "Ampliamos un círculo…", { s: 11, c: "var(--muted)" })}`);

module.exports = tema({
  materia: M,
  titulo: "Arte digital",
  objetivos: ["Conocer qué es el arte digital y sus herramientas", "Entender qué es un píxel y la diferencia entre imagen de píxeles y vectorial", "Usar capas, pinceles y colores en una aplicación de dibujo", "Crear pixel art y animaciones sencillas con respeto a la autoría y la seguridad"],
  claves: ["arte digital", "píxel", "resolución", "RGB", "mapa de bits", "vectorial", "capas", "pixel art", "animación", "GIF", "derechos de autor", "licencia libre"],
  pregunta: [
    "Si haces zoom en una foto del móvil muchas veces, al final ves cuadraditos de colores. ¿Qué son?",
    "Son <mark>píxeles</mark>: los puntos de color más pequeños que forman una imagen digital. Una foto normal tiene millones. El ordenador guarda el color de cada píxel con números, mezclando luz <b>roja, verde y azul</b>. ¡Una imagen digital es, en el fondo, una gran tabla de números de colores!",
  ],
  bloques: [
    ["¿Qué es el arte digital?", `<p>El <mark>arte digital</mark> es el que se crea o se transforma con herramientas electrónicas: ordenadores, tabletas, móviles o consolas. Incluye la ilustración digital, la fotografía retocada, la animación, los videojuegos, el diseño de páginas web y hasta la música por ordenador.</p><p>Aunque cambien las herramientas, se usan los mismos conocimientos que en el papel: línea, forma, color, composición y perspectiva. La gran ventaja es que podemos <b>deshacer</b>, probar versiones, copiar y combinar imágenes, y compartir nuestras obras al instante.</p>`,
      L.filas("Tipos de arte digital", [["ilustración", "dibujo con tableta", AZ], ["fotografía", "retoque y collage", VE], ["animación", "dibujos que se mueven", NA], ["videojuegos", "personajes y escenarios", RO]])],
    ["Herramientas: hardware y software", `<p>El <b>hardware</b> son los aparatos: un ordenador o tableta, una <mark>tableta gráfica</mark> con lápiz (que detecta cuánto aprietas, como un lápiz de verdad), una cámara, un escáner o una impresora.</p><p>El <b>software</b> son los programas o aplicaciones. Hay programas gratuitos y libres para dibujar, pintar, hacer pixel art, animar o editar fotos. En clase usaremos las aplicaciones que el colegio tenga instaladas, con una cuenta escolar. Lo importante no es el programa, sino saber qué quieres crear.</p>`,
      svg("Una tableta gráfica con su lápiz y un ordenador", `<rect x="20" y="30" width="130" height="90" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="28" y="38" width="114" height="74" fill="#dbe9fb"/><path d="M50 98 q 20 -40 40 -10 t 40 -20" fill="none" stroke="${RO}" stroke-width="3"/><path d="M70 120 h 30 l 6 16 h -42 z" fill="var(--line)"/><rect x="160" y="96" width="84" height="54" rx="6" fill="var(--ink)" fill-opacity=".85"/><rect x="168" y="104" width="68" height="38" rx="3" fill="var(--muted)" fill-opacity=".5"/><path d="M212 60 L 236 116" stroke="${AZ}" stroke-width="6" stroke-linecap="round"/><path d="M236 116 l 2 8" stroke="var(--ink)" stroke-width="2"/>${tx(85, 156, "pantalla", { s: 11 })}${tx(202, 170, "tableta gráfica", { s: 11 })}`)],
    ["El píxel", `<p>Las imágenes de una pantalla están hechas de una cuadrícula de <mark>píxeles</mark> (de <i>picture element</i>, «elemento de imagen»). Cada píxel tiene un único color. Cuantos más píxeles tenga una imagen, más detalle muestra: es su <b>resolución</b>.</p><p>El color de cada píxel se forma mezclando <b>luz</b> roja, verde y azul (<b>RGB</b>), cada una con un valor de 0 a 255. Por ejemplo, rojo 255, verde 0, azul 0 es rojo puro; los tres a 255 dan blanco y los tres a 0, negro. ¡Puedes probarlo en el selector de color de cualquier programa!</p>`,
      pixeles("Corazón dibujado en una cuadrícula de píxeles", corazon, pal, { k: 20, x: 20, y: 30, extra: `${tx(196, 50, "1 cuadradito =", { s: 11 })}${tx(196, 66, "1 píxel", { s: 11, c: RO })}${tx(196, 104, "rojo puro:", { s: 11 })}${tx(196, 120, "R255 G0 B0", { s: 11, c: RO })}` })],
    ["Píxeles o vectores", `<p>Hay dos grandes tipos de imágenes digitales. Las de <mark>mapa de bits</mark> (fotos, pinturas digitales) están hechas de píxeles: son ideales para colores y texturas, pero si las amplías mucho se ven «pixeladas», con escalones.</p><p>Las <mark>vectoriales</mark> se guardan como fórmulas matemáticas: «un círculo de este radio, en este punto, de este color». Se pueden ampliar sin perder calidad, por eso se usan para logotipos, iconos, tipografías y mapas. ¡Los dibujos de esta web son vectoriales!</p>`,
      vectorPixel],
    ["Las capas", `<p>Una de las herramientas más útiles del dibujo digital son las <mark>capas</mark>. Funcionan como hojas transparentes apiladas: en una dibujas el fondo, en otra el personaje y en otra el texto. Así puedes cambiar una parte sin estropear las demás.</p><p>Las capas se pueden ocultar, mover, cambiar de orden o hacer más transparentes. Un consejo de los ilustradores: dibuja el <b>boceto</b> en una capa, crea otra encima para el <b>entintado</b> y otra debajo para el <b>color</b>. Al final, ocultas la del boceto y ¡listo!</p>`,
      capas],
    ["Pinceles, colores y herramientas básicas", `<p>Los programas de dibujo tienen herramientas parecidas: <b>lápiz</b> y <b>pincel</b> (con distinto tamaño, dureza y opacidad), <b>goma</b>, <b>bote de pintura</b> (rellena una zona cerrada), <b>cuentagotas</b> (copia un color de la imagen), <b>selección</b> (para mover o copiar una parte) y <b>deshacer</b>.</p><p>Elige una <mark>paleta</mark> de pocos colores que combinen bien, como aprendiste con el círculo cromático. Y guarda tu trabajo a menudo con un nombre claro: <i>dragon_v1</i>, <i>dragon_v2</i>…</p>`,
      L.filas("Herramientas básicas", [["pincel", "tamaño, dureza, opacidad", AZ], ["bote", "rellena zonas cerradas", VE], ["cuentagotas", "copia un color", NA], ["deshacer", "¡el mejor amigo!", RO]])],
    ["Pixel art", `<p>El <mark>pixel art</mark> es un estilo en el que se dibuja píxel a píxel, como si fuera un mosaico. Nació con los primeros videojuegos, cuando las pantallas tenían muy pocos píxeles, y hoy sigue siendo muy popular. Se puede hacer en el ordenador o en papel cuadriculado.</p><p>Consejos: empieza con una cuadrícula pequeña (16×16), usa pocos colores, dibuja primero el contorno y luego rellena. Para dar volumen, pon un tono más claro donde da la luz y uno más oscuro en la sombra.</p>`,
      pixeles("Seta en pixel art en una cuadrícula de 10 por 10", ["...rrrr...", "..rrwwrr..", ".rrwwrrrr.", "rrrrrrwwrr", "rwwrrrwwrr", "rrrrrrrrrr", "...cccc...", "...cbcc...", "...cccc...", "..cccccc.."], { r: "#d7262b", w: "#ffffff", c: "#f3e2c4", b: "#2a2a2a" }, { k: 15 }), "pl8b"],
    ["Animación digital", `<p>Para <mark>animar</mark> dibujamos varios <b>fotogramas</b> (frames) seguidos con pequeños cambios y los mostramos rápido. Muchas aplicaciones tienen <b>papel cebolla</b>: muestran el dibujo anterior transparente para que el siguiente encaje bien.</p><p>Una animación corta que se repite en bucle se puede guardar como <b>GIF</b>. Con 4 a 8 fotogramas ya puedes hacer una pelota que bota, una llama que se mueve o un personaje que parpadea. También puedes animar fotos de plastilina con <b>stop motion</b> en una tableta.</p>`,
      svg("Cuatro fotogramas de un personaje que parpadea, con papel cebolla", `${[0, 1, 2, 3].map((i) => { const x = 18 + i * 60; const ojo = i === 2 ? `<path d="M${x + 16} 80 h 8 M${x + 30} 80 h 8" stroke="var(--ink)" stroke-width="2.5"/>` : `<circle cx="${x + 20}" cy="80" r="4" fill="var(--ink)"/><circle cx="${x + 34}" cy="80" r="4" fill="var(--ink)"/>`; return `<rect x="${x}" y="40" width="54" height="80" rx="4" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><circle cx="${x + 27}" cy="84" r="20" fill="${AM}" fill-opacity="${i ? 1 : 1}"/>${ojo}<path d="M${x + 19} 94 q 8 6 16 0" fill="none" stroke="var(--ink)" stroke-width="2"/>${tx(x + 27, 136, String(i + 1), { s: 12, c: "var(--muted)" })}`; }).join("")}${tx(130, 28, "fotograma 3: ojos cerrados", { s: 11, c: "var(--muted)" })}${tx(130, 160, "en bucle = GIF", { s: 11, c: AZ })}`), "pl8c"],
    ["Autoría, licencias y seguridad", `<p>Todo lo que crea una persona tiene <mark>autor</mark>, también en internet. No podemos copiar imágenes, música o personajes de otros y decir que son nuestros. Si usamos algo ajeno, hay que buscar obras con <b>licencias libres</b> (como Creative Commons) y citar al autor.</p><p>Firma tus obras, guarda copias y comparte solo con permiso de tu familia o del profesorado. No subas fotos de otras personas sin su permiso. Y recuerda: en internet, cuida tus datos personales y desconfía de quien te pida información.</p>`,
      L.filas("Arte digital con responsabilidad", [["firma", "pon tu nombre a tu obra", AZ], ["cita", "di de quién es lo que usas", VE], ["licencia", "busca obras libres", NA], ["permiso", "antes de publicar o grabar", RO]])],
  ],
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    ["¿Qué tipo de imagen usarías para el logotipo de tu clase, que irá en una camiseta y en un cartel gigante?", ["Debe ampliarse sin perder calidad.", "Las imágenes vectoriales no se pixelan."], "Una imagen vectorial."],
    ["Estás coloreando y te sales del personaje. ¿Cómo lo evitas con capas?", ["Pon el contorno en una capa.", "Colorea en otra capa debajo: lo que sobra se borra sin tocar las líneas."], "Colorear en una capa debajo de la del contorno."],
    ["¿Cuántos fotogramas necesitas para un GIF de 2 segundos a 6 fotogramas por segundo?", ["Fotogramas = segundos × fotogramas por segundo.", "2 × 6 = 12."], "12 fotogramas."],
  ],
  errores: [
    "Hacer todo el dibujo en una sola capa: luego no se puede corregir una parte.",
    "Ampliar una imagen pequeña de píxeles y esperar que se vea nítida.",
    "Usar demasiados colores en pixel art: queda confuso.",
    "No guardar a menudo y perder el trabajo.",
    "Usar imágenes de internet sin citar al autor ni mirar la licencia.",
  ],
  ejercicios: [
    ["¿Qué es el arte digital?", "El que se crea o transforma con herramientas electrónicas como ordenadores o tabletas."],
    ["¿Qué es un píxel?", "El punto de color más pequeño de una imagen digital."],
    ["¿Qué significa RGB?", "Rojo, verde y azul (Red, Green, Blue): los colores de luz que forman cada píxel."],
    ["¿Qué color da R0 G0 B0? ¿Y R255 G255 B255?", "Negro; blanco."],
    ["Diferencia entre imagen de mapa de bits y vectorial.", "La de mapa de bits está hecha de píxeles y se pixela al ampliar; la vectorial usa fórmulas y no pierde calidad."],
    ["¿Para qué sirven las capas?", "Para separar partes del dibujo y cambiarlas sin estropear las demás."],
    ["¿Qué hace la herramienta cuentagotas?", "Copia un color de la imagen."],
    ["¿Qué es el papel cebolla?", "Ver el fotograma anterior en transparencia para animar."],
    ["Dibuja en papel cuadriculado un personaje en pixel art de 10×10.", "Respuesta gráfica abierta."],
    ["¿Qué debes hacer si usas una imagen de otra persona?", "Comprobar su licencia y citar al autor."],
  ],
  figura: ["Arte digital", L.columnas("El arte digital", [["la unidad", "PÍXEL", ["RGB", "resolución"], RO], ["ampliar", "VECTOR", ["no se pixela", "logos, iconos"], AZ], ["organizar", "CAPAS", ["boceto, tinta", "y color"], VE], ["moverse", "ANIMACIÓN", ["fotogramas", "GIF, stop motion"], AM]])],
  video: "pl8v",
  quiz: [
    ["El punto de color más pequeño de una pantalla es el…", ["píxel", "vector", "fotograma"], "Píxel."],
    ["RGB son los colores de…", ["la luz: rojo, verde y azul", "la pintura: rojo, amarillo y azul", "los lápices"], "Luz."],
    ["R255 G255 B255 es…", ["blanco", "negro", "rojo"], "Toda la luz."],
    ["Si amplías mucho una foto, se ve…", ["pixelada", "más nítida", "vectorial"], "Mapa de bits."],
    ["Para un logotipo que se amplía mucho conviene una imagen…", ["vectorial", "de pocos píxeles", "borrosa"], "No pierde calidad."],
    ["Las capas son como…", ["hojas transparentes apiladas", "pinceles", "colores"], "Capas."],
    ["El bote de pintura sirve para…", ["rellenar una zona cerrada", "borrar", "copiar un color"], "Relleno."],
    ["El pixel art nació con…", ["los primeros videojuegos", "el Renacimiento", "la fotografía"], "Pantallas con pocos píxeles."],
    ["Una animación corta en bucle se guarda como…", ["GIF", "PDF", "MP3"], "GIF."],
    ["Si usas una imagen de otra persona debes…", ["citar al autor y revisar la licencia", "decir que es tuya", "cambiarle el color"], "Autoría."],
  ],
  examen: [
    ["La cantidad de píxeles de una imagen es su…", ["resolución", "capa", "licencia"], "Resolución."],
    ["El cuentagotas…", ["copia un color", "borra", "dibuja líneas rectas"], "Cuentagotas."],
    ["Ver el dibujo anterior transparente al animar es el…", ["papel cebolla", "bote de pintura", "zoom"], "Papel cebolla."],
    ["La tableta gráfica es…", ["hardware", "software", "una licencia"], "Un aparato."],
  ],
  feynman: ["Qué es el arte digital y qué herramientas usa", "Qué es un píxel y cómo se forma su color", "Diferencia entre imagen de píxeles y vectorial", "Para qué sirven las capas y cómo se hace una animación"],
  mapa: ["ARTE DIGITAL", "var(--bac)", [["Píxel", "RGB · resolución", RO], ["Píxeles o vectores", "fotos · logotipos", AZ], ["Capas y pinceles", "boceto · tinta · color", VE], ["Animación", "fotogramas · GIF", AM]], 240],
  tarjetas: [
    ["Píxel", "Punto de color de una imagen digital."],
    ["RGB", "Rojo, verde y azul: colores de luz."],
    ["Resolución", "Cantidad de píxeles: más, más detalle."],
    ["Vectorial", "Imagen con fórmulas: se amplía sin perder calidad."],
    ["Capas", "Hojas transparentes apiladas."],
    ["Pixel art", "Dibujo píxel a píxel."],
    ["Papel cebolla", "Ver el fotograma anterior al animar."],
    ["Licencia libre", "Permite usar una obra citando al autor."],
  ],
  familias: ["Haced juntos un dibujo en pixel art en papel cuadriculado y luego pasadlo a una app gratuita.", "Hablad de la autoría: ¿de quién son las imágenes que vemos en internet?"],
  saberes: "Medios y tecnologías digitales en la creación visual: píxel, color RGB, imagen vectorial, capas, animación; autoría, licencias y uso seguro (Educación Plástica y Visual)",
  ideas: ["Pixel art en papel cuadriculado y después en una aplicación.", "Animación GIF de 6 fotogramas por parejas.", "Galería digital de clase con fichas de autoría."],
  fuentes: [["Creative Commons: licencias", "https://creativecommons.org/licenses/?lang=es"], ["INCIBE: Internet segura for Kids (IS4K)", "https://www.is4k.es/"]],
});
