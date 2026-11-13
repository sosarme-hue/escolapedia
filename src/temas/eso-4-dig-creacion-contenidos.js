// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Creación de contenidos digitales",
  minutos: 40,
  objetivos: ["Elegir la herramienta y el formato adecuados para cada contenido digital", "Editar imagen, audio y vídeo con criterios básicos", "Respetar los derechos de autor y usar licencias Creative Commons"],
  claves: ["píxel", "vectorial", "resolución", "compresión", "derechos de autor", "Creative Commons"],
  pregunta: {
    texto: "Encuentras en Internet una canción perfecta para el vídeo de clase. ¿Puedes usarla sin más porque «está en Internet»?",
    respuesta: "No. Que algo se pueda descargar no significa que sea libre. Casi todo tiene <b>derechos de autor</b> desde que se crea. Puedes usarla si su autor lo permite con una <mark>licencia</mark> (por ejemplo, <b>Creative Commons</b>) y cumples sus condiciones, como citarle. Si no, busca música libre en bancos como los de Creative Commons o de la propia plataforma.",
  },
  bloques: [
    {
      html: `<h3>Planificar antes de crear</h3><p>Un buen contenido digital empieza antes de abrir el programa. Piensa en el <b>objetivo</b> (informar, enseñar, convencer), el <b>público</b> y el <b>formato</b>: documento, presentación, infografía, pódcast, vídeo, web. Después haz un <mark>guion o boceto</mark>, reúne los materiales con permiso para usarlos, crea, revisa y publica. Hay herramientas de escritorio y en línea, muchas de ellas libres, como LibreOffice, GIMP, Inkscape, Audacity o Kdenlive.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Proceso de creación: planificar, reunir materiales, crear, revisar y publicar">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["planificar", "var(--pen)"], ["reunir", "var(--inf)"], ["crear", "var(--leaf)"], ["revisar", "var(--sun)"], ["publicar", "var(--red)"]]
          .map(([t, c], i) => `<rect x="${20 + (i % 2) * 120}" y="${18 + i * 30}" width="100" height="24" rx="12" fill="${c}"/><text x="${70 + (i % 2) * 120}" y="${34 + i * 30}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${i + 1}. ${t}</text>${i < 4 ? `<path d="M${(i % 2) ? 140 : 120} ${36 + i * 30} L ${(i % 2) ? 120 : 140} ${48 + i * 30}" stroke="var(--ink)" stroke-width="2"/>` : ""}`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Imagen digital: píxeles y vectores</h3><p>Hay dos tipos de imágenes. Las de <b>mapa de bits</b> (fotos, .jpg, .png) están formadas por una cuadrícula de <b>píxeles</b>; si las amplías mucho, se ven los cuadraditos. Su calidad depende de la <b>resolución</b>, el número de píxeles. Las <b>vectoriales</b> (.svg, logotipos, iconos) se describen con fórmulas de líneas y curvas, y se pueden <mark>ampliar sin perder calidad</mark>. Al editar fotos se recorta, se ajusta brillo, contraste y color, y se trabaja por capas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un círculo ampliado: en mapa de bits se ven píxeles, en vectorial queda liso">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${(() => { let s = ""; for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) { const d = Math.hypot(i - 4, j - 4); if (d < 4.3) s += `<rect x="${22 + i * 10}" y="${34 + j * 10}" width="10" height="10" fill="var(--red)" opacity="${d < 3.4 ? 1 : 0.5}"/>`; } return s; })()}
        <circle cx="190" cy="79" r="45" fill="var(--pen)"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="67" y="146" fill="var(--red)">mapa de bits</text><text x="190" y="146" fill="var(--pen)">vectorial</text></g>
        <g ${F} font-size="9" text-anchor="middle" fill="var(--muted)"><text x="67" y="162">.jpg · .png · píxeles</text><text x="190" y="162">.svg · se amplía sin perder</text></g>
      </svg>`,
    },
    {
      html: `<h3>Audio y vídeo</h3><p>Para grabar audio busca un sitio sin eco y habla cerca del micrófono. En el editor puedes <b>cortar</b>, quitar ruido, igualar volúmenes y añadir música. El vídeo se monta en una <b>línea de tiempo</b> con pistas de imagen y de sonido: se cortan los clips, se ordenan, se añaden <b>transiciones</b>, títulos y subtítulos. Al exportar se <mark>comprime</mark> el archivo para que pese menos: el MP3 o el MP4 eliminan información que apenas se nota. Graba siempre en horizontal si el vídeo se verá en pantalla grande.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea de tiempo de un editor de vídeo con pistas de vídeo, música y voz">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="20" width="228" height="140" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <path d="M60 30 V 150" stroke="var(--red)" stroke-width="2"/><path d="M54 26 h 12 l -6 8 z" fill="var(--red)"/>
        ${[[40, 70, "var(--pen)"], [112, 60, "var(--pen)"], [176, 56, "var(--pen)"]].map(([x, w, c]) => `<rect x="${x}" y="46" width="${w - 4}" height="26" rx="4" fill="${c}"/>`).join("")}
        <rect x="40" y="84" width="192" height="22" rx="4" fill="var(--leaf)"/>
        <path d="M40 128 ${Array.from({ length: 24 }, (_, i) => `L ${44 + i * 8} ${128 + (i % 2 ? -8 : 8) * ((i % 5) / 4 + 0.3)}`).join(" ")}" fill="none" stroke="var(--sun)" stroke-width="2"/>
        <g ${F} font-size="9" font-weight="700" fill="var(--muted)"><text x="20" y="62">V</text><text x="20" y="99">♪</text><text x="20" y="132">voz</text></g>
      </svg>`,
    },
    {
      html: `<h3>Derechos de autor</h3><p>Quien crea una obra (texto, foto, música, vídeo, programa) tiene automáticamente sus <b>derechos de autor</b>: los <b>morales</b>, como que se reconozca que es suya, y los de <b>explotación</b>, como decidir quién la copia o la difunde. Usar una obra ajena sin permiso, aunque sea gratis y aunque cites la fuente, puede ser ilegal. Hay excepciones limitadas, como la <mark>cita</mark> de un fragmento para comentarlo o el uso educativo en clase. Las obras pasan a <b>dominio público</b> cuando han pasado muchos años desde la muerte del autor (en España, 70 años como norma general).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolo de copyright con derechos morales y de explotación">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="72" r="44" fill="none" stroke="var(--ink)" stroke-width="6"/><text x="130" y="92" text-anchor="middle" font-size="56" font-weight="700" fill="var(--ink)" ${D}>C</text>
        <rect x="14" y="128" width="110" height="38" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="136" y="128" width="110" height="38" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
        <g ${F} text-anchor="middle"><text x="69" y="144" font-size="11" font-weight="700" fill="var(--pen)">morales</text><text x="69" y="158" font-size="9" fill="var(--ink)">reconocer la autoría</text><text x="191" y="144" font-size="11" font-weight="700" fill="var(--red)">explotación</text><text x="191" y="158" font-size="9" fill="var(--ink)">copiar · difundir · cobrar</text></g>
      </svg>`,
    },
    {
      html: `<h3>Licencias Creative Commons</h3><p>Las licencias <b>Creative Commons</b> (CC) permiten al autor decir de antemano qué se puede hacer con su obra. Combinan cuatro condiciones: <b>BY</b> (reconocimiento: hay que citar al autor, está en todas), <b>NC</b> (no comercial), <b>ND</b> (sin obras derivadas: no se puede modificar) y <b>SA</b> (compartir igual: lo que hagas debe llevar la misma licencia). Por ejemplo, una foto <mark>CC BY-SA</mark> se puede usar y modificar citando al autor y compartiendo el resultado con esa licencia. Tú también puedes elegir una licencia CC para lo que crees.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las cuatro condiciones de Creative Commons: BY, NC, ND y SA">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["BY", "cita al autor", "var(--leaf)"], ["NC", "no comercial", "var(--sun)"], ["ND", "sin cambios", "var(--red)"], ["SA", "compartir igual", "var(--inf)"]]
          .map(([s, t, c], i) => `<circle cx="${40 + i * 60}" cy="74" r="24" fill="${c}"/><text x="${40 + i * 60}" y="80" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" ${D}>${s}</text><text x="${40 + i * 60}" y="118" text-anchor="middle" font-size="9" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <text x="130" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>Creative Commons</text>
        <text x="130" y="154" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>ejemplo: CC BY-NC = cita y sin vender</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Qué formato elegir",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Formatos recomendados: foto JPG, logotipo SVG o PNG, audio MP3, vídeo MP4 y documento PDF">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Foto", ".jpg", "pesa poco", "var(--red)"], ["Logotipo", ".svg / .png", "bordes nítidos", "var(--pen)"], ["Audio", ".mp3", "comprimido", "var(--sun)"], ["Vídeo", ".mp4", "lo abre todo", "var(--leaf)"], ["Documento", ".pdf", "se ve igual", "var(--inf)"]]
        .map(([n, e, d, c], i) => `<rect x="${14 + i * 124}" y="30" width="114" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${71 + i * 124}" y="70" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${71 + i * 124}" y="114" text-anchor="middle" font-size="17" font-weight="700" fill="var(--ink)" ${F}>${e}</text>
          <text x="${71 + i * 124}" y="152" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "dAfkDSRBfZU", titulo: "Cómo crear y usar las Licencias Creative Commons", canal: "Educatutos", vistas: 240853, megusta: 0, busqueda: "licencias creative commons explicación" },
  quiz: [
    { q: "¿Qué tipo de imagen se puede ampliar sin perder calidad?", o: ["La de mapa de bits", "La vectorial", "Ninguna"], a: 1, e: "Se describe con fórmulas, no con píxeles." },
    { q: "La resolución de una foto es…", o: ["su número de píxeles", "su peso en gramos", "su número de colores primarios"], a: 0, e: "Más píxeles, más detalle." },
    { q: "¿Qué hace la compresión de un MP3?", o: ["Elimina información que apenas se nota para que pese menos", "Mejora el sonido original", "Lo convierte en vídeo"], a: 0, e: "Es una compresión con pérdida." },
    { q: "En una licencia CC, «ND» significa…", o: ["no se puede descargar", "no se permiten obras derivadas", "nada de citar"], a: 1, e: "Se puede usar, pero sin modificarla." },
    { q: "Una foto que está en Internet, ¿se puede usar libremente?", o: ["Sí, siempre", "Solo si su licencia lo permite", "Sí, si la descargas en buena calidad"], a: 1, e: "Por defecto tiene derechos de autor." }
  ],
  examen: [
    { q: "Necesitas un logotipo que se vea bien en una camiseta y en un móvil. ¿Qué formato?", o: ["JPG muy pequeño", "SVG (vectorial)", "MP3"], a: 1, e: "El vectorial se escala sin pixelarse." },
    { q: "¿Qué permite una foto con licencia CC BY-SA?", o: ["Usarla y modificarla citando al autor y compartiendo con la misma licencia", "Usarla sin citar", "Solo verla"], a: 0, e: "BY: reconocimiento; SA: compartir igual." },
    { q: "¿Qué son los derechos morales de un autor?", o: ["Cobrar por cada copia", "Que se reconozca su autoría y se respete la obra", "Prohibir que se hable de su obra"], a: 1, e: "No se pueden vender ni renunciar a ellos." },
  ],
  feynman: ["Los pasos para crear un contenido digital", "La diferencia entre imagen de mapa de bits y vectorial", "Cómo se monta un vídeo en una línea de tiempo", "Qué protegen los derechos de autor", "Qué significan BY, NC, ND y SA"],
  mapa: mapa("CREAR CONTENIDOS", "var(--eso)", [
    ["Planificar", "objetivo · público · guion", "var(--pen)"],
    ["Imagen", "píxeles · vectores", "var(--red)"],
    ["Audio y vídeo", "línea de tiempo · compresión", "var(--sun)"],
    ["Licencias", "© · Creative Commons", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["¿Qué es un píxel?", "Cada uno de los puntos de color de una imagen de mapa de bits."],
    ["Formato vectorial típico", ".svg"],
    ["¿Qué es comprimir?", "Reducir lo que pesa un archivo, a veces quitando información poco visible."],
    ["Las cuatro condiciones CC", "BY, NC, ND y SA."],
    ["¿Cuándo pasa una obra a dominio público en España?", "Por norma general, 70 años después de la muerte del autor."],
  ],
  familias: ["Buscad juntos una foto con licencia Creative Commons y escribid cómo habría que citarla.", "Grabad un audio de un minuto y probad a recortarlo con un editor gratuito.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Creación y edición de contenidos digitales: imagen, audio y vídeo; formatos; licencias de uso, derechos de autor y Creative Commons (RD 217/2022, Digitalización 4º).",
    ideas: ["Producir un pódcast de 3 minutos con música de licencia libre citada.", "Comparar una misma imagen en JPG, PNG y SVG ampliada al 800 %.", "Que cada alumno elija una licencia CC para su trabajo y justifique por qué."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Licencias Creative Commons, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Licencias_Creative_Commons" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Diseñar presentaciones e infografías claras y eficaces", "Usar hojas de cálculo con fórmulas y gráficos para tratar datos"],
  tras: {
    "Imagen digital: píxeles y vectores": [
      { html: `<h3>Infografías y diseño visual</h3><p>Una <b>infografía</b> combina datos, iconos, gráficos y textos breves para explicar un tema de un vistazo. Para que funcione hay que aplicar unas reglas básicas de diseño. <b>Jerarquía</b>: lo más importante, más grande y arriba. <b>Contraste</b>: texto oscuro sobre fondo claro o al revés, nunca gris claro sobre blanco. <b>Paleta limitada</b>: dos o tres colores y una o dos tipografías. <b>Alineación</b> y <b>espacio en blanco</b>: los elementos ordenados y con aire respiran mejor. Y sobre todo, <mark>citar las fuentes</mark> de los datos. Herramientas como Canva, Genially o Inkscape facilitan el trabajo con plantillas.</p>` },
    ],
    "Audio y vídeo": [
      { html: `<h3>Presentaciones eficaces</h3><p>Una presentación apoya lo que dices, no lo sustituye. Las claves: <b>una idea por diapositiva</b>; <b>poco texto</b> (la regla 6×6: no más de seis líneas de seis palabras); imágenes de calidad y con licencia libre; letra grande y legible desde el fondo del aula; y un <b>diseño coherente</b> en todas las diapositivas. Al exponer, conviene ensayar en voz alta y cronometrarse, mirar al público y no leer la pantalla, y usar las <mark>notas del orador</mark> para recordar lo que quieres decir. Una buena estructura tiene inicio (lo que vas a contar), desarrollo y cierre (las ideas clave).</p>`, video: { id: "dhQHPjmk0-k", titulo: "10 consejos para mejorar tu oratoria al hablar en público", canal: "Fernando Miralles", vistas: 1194508 } },
      { html: `<h3>Hojas de cálculo</h3><p>Una <b>hoja de cálculo</b> (Excel, LibreOffice Calc, Google Sheets) es una cuadrícula de <b>celdas</b> identificadas por columna y fila: A1, B3… En ellas se escriben datos y <b>fórmulas</b>, que siempre empiezan por «=». Por ejemplo, <code>=B2*C2</code> multiplica dos celdas y <code>=SUMA(D2:D10)</code> suma un rango. Otras funciones útiles son PROMEDIO, MAX, MIN, CONTAR y SI (<code>=SI(E2&gt;=5;"Aprobado";"Suspenso")</code>). Lo mejor es que, si cambias un dato, <mark>todo se recalcula solo</mark>. Con los datos se crean <b>gráficos</b>: de barras para comparar, de sectores para proporciones y de líneas para la evolución en el tiempo.</p>`, video: { id: "vPq9p7nHhL0", titulo: "Domina Microsoft Excel: 17 fórmulas esenciales", canal: "Xataka", vistas: 683731 } },
    ],
    "Licencias Creative Commons": [
      { html: `<h3>Publicar en la web</h3><p>Hoy cualquiera puede publicar: un <b>blog</b>, una web hecha con un editor sencillo (Google Sites, WordPress), un canal de vídeo o un pódcast. Una web se escribe en <b>HTML</b>, que marca la estructura (títulos, párrafos, enlaces, imágenes), y <b>CSS</b>, que define el aspecto. Antes de publicar conviene revisar: la ortografía; que las imágenes tengan licencia y un <b>texto alternativo</b> que las describa para personas ciegas; que no aparezcan datos personales propios ni ajenos; y que la página se vea bien en el móvil. Y recuerda que lo que publicas <mark>queda asociado a tu nombre</mark> y puede copiarse.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "En una hoja de cálculo, B2 = 3 (unidades) y C2 = 4,50 € (precio). Escribe la fórmula del total en D2 y la suma de D2 a D6 en D7.", pasos: ["Total de una fila: =B2*C2, que da 13,50 €.", "Se copia la fórmula hacia abajo y se ajusta sola: =B3*C3, =B4*C4…", "Suma final en D7: =SUMA(D2:D6)."], resultado: "D2: =B2*C2. D7: =SUMA(D2:D6)." },
    { enunciado: "Quieres representar el porcentaje de alumnos que usa cada red social. ¿Qué gráfico eliges? ¿Y para la evolución de usuarios desde 2015?", pasos: ["Partes de un total que suma 100 %: gráfico de sectores.", "Evolución en el tiempo: gráfico de líneas.", "Para comparar valores sueltos entre categorías, barras."], resultado: "Sectores para el reparto; líneas para la evolución." },
    { enunciado: "Una diapositiva tiene 14 líneas de texto en letra pequeña. ¿Cómo la mejoras?", pasos: ["Deja una sola idea principal como título.", "Reduce el texto a 3-5 puntos clave de pocas palabras.", "Añade una imagen o un gráfico que la ilustre y lleva el resto a las notas del orador."], resultado: "Una idea, pocos puntos, una imagen y el detalle en las notas." },
  ],
  errores: [
    "Llenar las diapositivas de texto y leerlas en voz alta.",
    "Escribir una fórmula sin el signo «=» delante, con lo que la hoja la trata como texto.",
    "Usar un gráfico de sectores para datos que no son partes de un total.",
    "Poner texto de color claro sobre fondo claro, con poco contraste.",
    "Publicar imágenes sin comprobar su licencia ni añadir texto alternativo.",
  ],
  ejercicios: [
    { q: "¿Qué diferencia hay entre una imagen de mapa de bits y una vectorial? Pon un formato de cada una.", sol: "La de mapa de bits está formada por píxeles y se pixela al ampliarla (JPG, PNG); la vectorial usa fórmulas geométricas y se amplía sin perder calidad (SVG)." },
    { q: "Calcula cuántos píxeles tiene una imagen de 1.920 × 1.080.", sol: "2.073.600 píxeles, unos 2 megapíxeles." },
    { q: "Escribe la fórmula para calcular la media de las notas de C2 a C25.", sol: "=PROMEDIO(C2:C25)." },
    { q: "Escribe una fórmula que muestre «Aprobado» si la nota de B2 es mayor o igual que 5 y «Suspenso» si no.", sol: "=SI(B2>=5;\"Aprobado\";\"Suspenso\")." },
    { q: "¿Qué gráfico usarías para mostrar la temperatura de cada mes del año?", sol: "Un gráfico de líneas (evolución en el tiempo); también valdría uno de barras." },
    { q: "Indica cuatro consejos para una buena presentación.", sol: "Una idea por diapositiva, poco texto, letra grande e imágenes de calidad; además, ensayar y mirar al público." },
    { q: "¿Qué significa una licencia CC BY-NC-SA?", sol: "Se puede usar citando al autor (BY), sin fines comerciales (NC) y compartiendo las obras derivadas con la misma licencia (SA)." },
    { q: "Encuentras una foto en un buscador sin indicación de licencia. ¿Puedes usarla en tu blog?", sol: "No: por defecto tiene todos los derechos reservados. Hay que buscar imágenes con licencia libre o dominio público." },
    { q: "¿Para qué sirve el texto alternativo de una imagen en la web?", sol: "Describe la imagen para las personas que usan lectores de pantalla y aparece si la imagen no carga." },
    { q: "Indica tres reglas de diseño para una infografía.", sol: "Jerarquía visual, buen contraste y paleta limitada de colores (también alineación, espacio en blanco y citar las fuentes)." },
  ],
  quiz: [
    { q: "En una hoja de cálculo, una fórmula empieza por…", o: ["#", "=", "@"], a: 1, e: "Por ejemplo, =SUMA(A1:A5)." },
    { q: "Para mostrar partes de un total se usa un gráfico de…", o: ["líneas", "sectores", "dispersión"], a: 1, e: "El total suma el 100 %." },
    { q: "La regla 6×6 de las presentaciones limita…", o: ["las diapositivas", "el texto por diapositiva", "los colores"], a: 1, e: "Seis líneas de seis palabras como máximo." },
    { q: "HTML sirve para definir…", o: ["la estructura de una web", "los colores de una web", "la velocidad de una web"], a: 0, e: "El aspecto lo da CSS." },
    { q: "Una infografía debe usar…", o: ["muchos colores y tipografías", "pocos colores y jerarquía clara", "solo texto"], a: 1, e: "Menos es más." },
  ],
  tarjetas: [
    ["Fórmula", "Operación de una hoja de cálculo que empieza por «=» y se recalcula sola."],
    ["Infografía", "Combinación de datos, iconos y textos breves que explica un tema de un vistazo."],
    ["Texto alternativo", "Descripción de una imagen para lectores de pantalla."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 100,
  revisado: "2026-11-13",
  lectura: {
    titulo: "Un vídeo de un minuto, seis horas de trabajo",
    html: `<p>Irene publicó en la cuenta del instituto un vídeo de un minuto sobre el reciclaje de móviles. En una semana lo vieron más de 20.000 personas y el ayuntamiento lo usó en su campaña. Parece fácil, pero detrás hubo un guion de diez líneas, un <i>storyboard</i> dibujado a lápiz, tres tomas de cada plano, una tarde de montaje, música con licencia libre, subtítulos para quien lo ve sin sonido y una lista de los créditos de cada imagen que no era suya.</p>
      <p>Crear contenidos digitales de calidad no consiste en dominar un programa concreto: los programas cambian cada pocos años. Consiste en saber planificar, entender cómo funcionan la imagen, el sonido y los datos, elegir el formato adecuado para cada público y respetar el trabajo de los demás. En este tema aprenderás a diseñar con criterio, a editar imagen y vídeo, a sacar partido a la hoja de cálculo y a publicar respetando los derechos de autor y la accesibilidad.</p>`,
  },
  svgs: {
    "Infografías y diseño visual": L.cajas("Reglas de diseño de una infografía", [["Jerarquía", "título grande|datos destacados"], ["Pocos colores", "2-3 y|con contraste"], ["Iconos", "en lugar|de párrafos"], ["Fuente", "cita de|los datos"]], { t: "Una buena infografía" }),
    "Presentaciones eficaces": L.comparar("Diapositiva mala frente a diapositiva buena", ["Así no", ["14 líneas", "letra pequeña", "5 colores", "se lee en voz alta"]], ["Así sí", ["una idea", "imagen grande", "2-3 colores", "tú lo explicas"]]),
    "Hojas de cálculo": L.rejilla("Ejemplo de hoja de cálculo con fórmulas", ["", "A", "B", "C"], [["1", "Producto", "Uds.", "Total"], ["2", "Lápiz", "3", "=B2*0,5"], ["3", "Cuaderno", "2", "=B3*2"], ["4", "Suma", "", "=SUMA(C2:C3)"]], { t: "Celdas y fórmulas" }),
    "Publicar en la web": L.capas("Las tres capas de una página web: HTML, CSS y JavaScript", [["HTML", "estructura y contenido"], ["CSS", "diseño: colores y tamaños"], ["JavaScript", "interacción"]], { t: "Una web por dentro" }),
  },
  tras: {
    "Planificar antes de crear": [
      {
        html: `<h3>Guion y storyboard</h3><p>Antes de grabar un vídeo, un pódcast o una animación conviene escribir un <b>guion</b>. El guion <b>literario</b> cuenta lo que se dice y lo que pasa; el guion <b>técnico</b> añade, para cada escena, el tipo de plano, el sonido, la duración y los recursos necesarios. Un buen guion tiene una estructura clara: un <mark>gancho</mark> en los primeros segundos para captar la atención, un desarrollo con la información principal y un cierre con una idea para recordar o una llamada a la acción.</p>
          <p>El <b>storyboard</b> es el guion dibujado: una serie de viñetas, una por plano, con un boceto de la imagen y debajo el texto, la música o el efecto. No hace falta dibujar bien; sirve para ver el ritmo, detectar huecos y decidir los encuadres antes de gastar tiempo grabando. Los <b>tipos de plano</b> más usados son el plano general (muestra el lugar), el plano medio (de la cintura hacia arriba, ideal para hablar a cámara) y el primer plano (la cara, para transmitir emoción). Variar los planos y mantener cada uno entre 3 y 6 segundos hace que un vídeo corto resulte dinámico.</p>`,
        svg: L.flujo("Fases de producción de un vídeo", ["Idea y público", "Guion literario y técnico", "Storyboard por planos", "Grabación", "Montaje y publicación"], { t: "De la idea al vídeo" }),
      },
    ],
    "Imagen digital: píxeles y vectores": [
      {
        html: `<h3>Edición de imagen</h3><p>Los editores de imagen (GIMP, Photopea, Krita, Photoshop o los del propio móvil) comparten unas herramientas básicas. <b>Recortar</b> elimina lo que sobra y mejora el encuadre; la <mark>regla de los tercios</mark> aconseja situar lo importante en las líneas que dividen la imagen en tres partes. Los <b>ajustes</b> de brillo, contraste, saturación y balance de blancos corrigen fotos oscuras, apagadas o con colores raros.</p>
          <p>Las <b>capas</b> son como hojas transparentes apiladas: permiten trabajar en un elemento (un texto, un fondo, una persona) sin estropear el resto. Las <b>selecciones</b> y las <b>máscaras</b> sirven para aplicar un cambio solo a una zona. Para publicar en la web conviene <b>redimensionar</b> la imagen al tamaño real en que se verá (no subir una foto de 4.000 píxeles para mostrarla a 800) y elegir el formato: <b>JPEG</b> o <b>WebP</b> para fotos, <b>PNG</b> para capturas y gráficos con transparencia y <b>SVG</b> para logotipos e iconos. Editar es legítimo, pero manipular una imagen para engañar (cambiar lo que ocurrió en una foto de noticia) no lo es: si retocas mucho, dilo.</p>`,
        svg: L.capas("Capas de una imagen editada: texto, persona recortada, filtro y fondo", [["Texto", "título encima"], ["Recorte", "persona sin fondo"], ["Ajuste", "brillo y color"], ["Fondo", "foto original"]], { t: "Trabajar con capas" }),
      },
    ],
    "Infografías y diseño visual": [
      {
        html: `<h3>Color y tipografía</h3><p>El <b>color</b> transmite emociones y ordena la información. El <b>círculo cromático</b> ayuda a combinarlos: los colores <b>complementarios</b> (opuestos, como azul y naranja) crean contraste y destacan; los <b>análogos</b> (vecinos, como azul y verde) dan armonía. En pantalla los colores se forman con luz <mark>RGB</mark> y se escriben en hexadecimal (#1E66F5); en imprenta se usan tintas <mark>CMYK</mark>. Para que todo el mundo pueda leer, el texto y el fondo deben tener suficiente <b>contraste</b>, y nunca hay que transmitir información solo con el color, pensando en las personas daltónicas.</p>
          <p>La <b>tipografía</b> es el tipo de letra. Las fuentes <b>con serifa</b> (con remates, como Times) se asocian a lo tradicional y a los textos largos impresos; las <b>de palo seco</b> (sin remates, como Atkinson o Arial) se leen mejor en pantalla. Como norma, usa como mucho dos tipografías: una para los títulos y otra para el texto. La <b>jerarquía</b> se crea con el tamaño, el grosor y el espacio: el ojo debe saber qué leer primero. El <b>espacio en blanco</b> no es espacio perdido, sino aire que hace que el diseño respire.</p>`,
        svg: L.cajas("Colores complementarios, análogos y tipografías con y sin serifa", [["Complementarios", "azul + naranja|contraste"], ["Análogos", "azul + verde|armonía"], ["Con serifa", "textos largos|impresos"], ["Palo seco", "pantallas|y títulos"]], { t: "Color y letra" }),
      },
    ],
    "Audio y vídeo": [
      {
        html: `<h3>Formatos y exportación de vídeo</h3><p>Al exportar un vídeo hay que decidir varias cosas. La <b>resolución</b> es el número de píxeles de cada fotograma: HD (1.280 × 720), Full HD (1.920 × 1.080) o 4K (3.840 × 2.160). La <b>relación de aspecto</b> es la forma: <mark>16:9</mark> horizontal para YouTube y televisión, <mark>9:16</mark> vertical para historias y vídeos cortos del móvil, 1:1 cuadrado para algunas redes. La <b>tasa de fotogramas</b> indica cuántas imágenes por segundo se muestran: 24 da aspecto de cine, 30 es lo habitual y 60 da suavidad en deportes y videojuegos.</p>
          <p>El archivo final es un <b>contenedor</b> (MP4, MOV, WebM) que guarda el vídeo y el audio comprimidos con un <b>códec</b> (H.264, H.265, AV1). La <b>tasa de bits</b> fija cuántos datos se usan por segundo: más bits, más calidad y más peso. Un minuto en Full HD a 8 Mbps ocupa unos 60 MB. Los <b>subtítulos</b> se añaden en un archivo aparte (SRT) o «quemados» en la imagen; hacen el vídeo accesible para personas sordas y para quien lo ve sin sonido, que en redes es la mayoría.</p>`,
        svg: L.rejilla("Resolución, relación de aspecto y uso de los formatos de vídeo", ["Formato", "Píxeles", "Uso"], [["HD", "1280×720", "web ligera"], ["Full HD", "1920×1080", "YouTube"], ["4K", "3840×2160", "cine, TV"], ["Vertical 9:16", "1080×1920", "móvil"]], { t: "Formatos de vídeo" }),
      },
      {
        html: `<h3>El procesador de textos</h3><p>El procesador de textos (Writer, Word, Google Docs) parece sencillo, pero se usa a medias. La clave son los <b>estilos</b>: en lugar de poner a mano cada título en negrita y grande, se aplica el estilo «Título 1», «Título 2» o «Texto». Así todo el documento es coherente, se cambia el aspecto de golpe y se puede generar un <mark>índice automático</mark> que se actualiza solo. Otras herramientas útiles son los <b>encabezados y pies de página</b> con la numeración, las <b>notas al pie</b>, las <b>tablas</b> y la inserción de imágenes con su <b>pie de foto</b>.</p>
          <p>Para trabajar en equipo están el <b>control de cambios</b>, que muestra lo que añade o borra cada persona para aceptarlo o rechazarlo, y los <b>comentarios</b>. Un documento <b>accesible</b> usa estilos de título (los lectores de pantalla los usan para navegar), texto alternativo en las imágenes, buen contraste y enlaces con nombres claros («descarga la guía» mejor que «pincha aquí»). Para entregar un trabajo que debe verse igual en cualquier equipo se exporta a <b>PDF</b>; para que otros lo editen se comparte en un formato abierto como <b>ODT</b> o en la nube.</p>`,
        svg: L.capas("Estilos de un documento: título 1, título 2, texto e índice automático", [["Título 1", "capítulo"], ["Título 2", "apartado"], ["Texto", "párrafos"], ["Índice", "se genera solo"]], { t: "Usar estilos" }),
      },
    ],
    "Hojas de cálculo": [
      {
        html: `<h3>Funciones y referencias</h3><p>Las <b>funciones</b> son fórmulas ya preparadas. Las más usadas: <code>SUMA(A1:A10)</code> suma un rango; <code>PROMEDIO</code> calcula la media; <code>MAX</code> y <code>MIN</code> dan el mayor y el menor; <code>CONTAR</code> cuenta celdas con números y <code>CONTAR.SI(B2:B30;"&gt;=5")</code> cuenta las que cumplen una condición; <code>SI</code> elige entre dos resultados; y <code>BUSCARV</code> busca un dato en una tabla, como el precio de un producto a partir de su código.</p>
          <p>Al copiar una fórmula hacia abajo, sus referencias cambian solas: <code>=B2*C2</code> pasa a <code>=B3*C3</code>. Son <b>referencias relativas</b>. Si una celda debe quedar fija (por ejemplo, el IVA escrito en F1), se usa una <mark>referencia absoluta</mark> con el símbolo dólar: <code>=B2*$F$1</code>. El <b>formato condicional</b> colorea las celdas según su valor (suspensos en rojo, por ejemplo) y los <b>filtros</b> y la <b>ordenación</b> permiten analizar listas largas. Con todo ello, una hoja de cálculo se convierte en una herramienta para tomar decisiones: un presupuesto, el control de gastos de un viaje o el análisis de una encuesta.</p>`,
        svg: L.comparar("Referencia relativa frente a absoluta al copiar una fórmula", ["Relativa", ["=B2*C2", "↓ copiar", "=B3*C3", "cambia"]], ["Absoluta", ["=B2*$F$1", "↓ copiar", "=B3*$F$1", "F1 fija"]]),
      },
    ],
    "Licencias Creative Commons": [
      {
        html: `<h3>Citar y reutilizar recursos</h3><p>No hace falta crearlo todo desde cero. Existen <b>bancos de recursos</b> con licencias abiertas: imágenes en Wikimedia Commons, Pixabay o Unsplash; música en Free Music Archive o Jamendo; iconos en Openverse o The Noun Project; sonidos en Freesound. Las obras en <b>dominio público</b> (en España, 70 años después de la muerte del autor) se pueden usar libremente, y lo mismo ocurre con las que llevan la marca <b>CC0</b>.</p>
          <p>Cuando la licencia pide reconocimiento hay que <b>citar</b> bien. Una regla fácil de recordar es <mark>TALL</mark>: <b>T</b>ítulo de la obra, <b>A</b>utor, <b>L</b>ugar donde se encuentra (enlace) y <b>L</b>icencia. Por ejemplo: «Puesta de sol», de Ana Ruiz, en Wikimedia Commons, CC BY 4.0. En un trabajo escrito, las fuentes de información se recogen en una bibliografía o lista de referencias. La ley también permite el <b>derecho de cita</b>: incluir fragmentos breves de una obra ajena para comentarla o analizarla con fines educativos, siempre indicando de dónde vienen. Copiar un texto y presentarlo como propio es <b>plagio</b>, aunque sea gratis y esté en Internet.</p>`,
        svg: L.cajas("Regla TALL para citar: título, autor, lugar y licencia", [["Título", "«Puesta|de sol»"], ["Autor", "Ana Ruiz"], ["Lugar", "Wikimedia|Commons (enlace)"], ["Licencia", "CC BY 4.0"]], { t: "Citar con TALL" }),
      },
    ],
  },
  secciones: [6, 6, 4],
  niveles: "bbbmbbmmbb",
  ejercicios: [
    { nivel: "básico", q: "¿Qué tres partes debe tener la estructura de un vídeo corto?", sol: "Un gancho al principio para captar la atención, un desarrollo con la información principal y un cierre con una idea final o una llamada a la acción." },
    { nivel: "básico", q: "Di qué formato de imagen elegirías para: una foto de vacaciones, la captura de una web, el logotipo de un club.", sol: "Foto: JPEG o WebP. Captura: PNG (nítida y sin pérdida). Logotipo: SVG, porque es vectorial y se amplía sin perder calidad." },
    { nivel: "básico", q: "¿Para qué sirven las capas en un editor de imagen?", sol: "Para separar los elementos (fondo, texto, figura) y poder modificar uno sin estropear los demás." },
    { nivel: "básico", q: "Escribe la función para contar cuántas notas de B2 a B30 son mayores o iguales que 5.", sol: "=CONTAR.SI(B2:B30;\">=5\")" },
    { nivel: "básico", q: "Escribe la cita TALL de una canción llamada «Amanecer», de Lúa Música, descargada de Jamendo con licencia CC BY-SA.", sol: "«Amanecer», de Lúa Música, en Jamendo (enlace), licencia CC BY-SA." },
    { nivel: "medio", q: "Explica la diferencia entre guion literario, guion técnico y storyboard.", sol: "El literario cuenta qué se dice y qué ocurre. El técnico añade para cada escena el plano, el sonido, la duración y los recursos. El storyboard es el guion dibujado en viñetas, una por plano." },
    { nivel: "medio", q: "Copias la fórmula =B2*C2 de D2 a D5. ¿Qué fórmula aparece en D5? ¿Y si la fórmula era =B2*$C$1?", sol: "Con referencias relativas, D5 tendrá =B5*C5. Con la absoluta, D5 tendrá =B5*$C$1: la B cambia, pero C1 queda fija." },
    { nivel: "medio", q: "Vas a grabar un vídeo para historias de una red social. ¿Qué relación de aspecto y resolución eliges? ¿Por qué?", sol: "Vertical 9:16, 1.080 × 1.920 píxeles: es la forma de la pantalla del móvil sujeto en vertical y ocupa toda la pantalla sin franjas negras." },
    { nivel: "medio", q: "¿Cuánto ocupa aproximadamente un vídeo de 5 minutos en Full HD a 8 Mbps?", sol: "8 Mbps = 1 MB/s. 5 min = 300 s. 300 · 1 = 300 MB aproximadamente." },
    { nivel: "medio", q: "¿Qué ventajas tiene usar estilos de título en un documento largo?", sol: "Todo el documento es coherente, se cambia el aspecto de todos los títulos a la vez, se genera un índice automático y los lectores de pantalla pueden navegar por los apartados (accesibilidad)." },
    { nivel: "medio", q: "Propón una combinación de dos colores complementarios y explica dónde la usarías.", sol: "Azul y naranja: el azul como color principal del fondo o los títulos y el naranja solo en el botón o el dato que quieres destacar, porque el contraste lo hace saltar a la vista." },
    { nivel: "medio", q: "¿Por qué no hay que transmitir información solo con el color? Pon un ejemplo y una solución.", sol: "Porque hay personas daltónicas que no distinguen ciertos colores. Ejemplo: aprobados en verde y suspensos en rojo. Solución: añadir también un icono o la palabra «Aprobado/Suspenso»." },
    { nivel: "medio", q: "Explica qué es el derecho de cita y pon un ejemplo correcto en un trabajo de clase.", sol: "Es la posibilidad legal de incluir un fragmento breve de una obra ajena para analizarla o comentarla, indicando autor y fuente. Ejemplo: copiar dos versos de un poema entre comillas, con su autor, para comentarlos en un trabajo de Lengua." },
    { nivel: "medio", q: "Una foto de 4.000 × 3.000 píxeles se va a mostrar en una web a 800 píxeles de ancho. ¿Qué harías antes de subirla y por qué?", sol: "Redimensionarla a 800 × 600 y exportarla en JPEG o WebP con compresión. Ocupará 25 veces menos píxeles, la web cargará más rápido y gastará menos datos." },
    { nivel: "medio", q: "¿Qué hace la función BUSCARV? Pon un ejemplo de uso.", sol: "Busca un valor en la primera columna de una tabla y devuelve el dato de otra columna de la misma fila. Ejemplo: a partir del código de un producto, obtener su precio en una tabla de precios." },
    { nivel: "medio", q: "Cuatro diferencias entre tipografía con serifa y de palo seco.", sol: "La de serifa tiene remates y la de palo seco no; la de serifa se asocia a lo clásico y la de palo seco a lo moderno; la de serifa se usa en textos largos impresos y la de palo seco se lee mejor en pantalla y en títulos; en tamaños pequeños en pantalla, la de palo seco es más legible." },
    { nivel: "avanzado", q: "Escribe un guion técnico de 4 planos para un vídeo de 20 segundos sobre el ahorro de agua (plano, imagen, sonido y duración).", sol: "Ejemplo: 1) Primer plano de un grifo goteando; sonido del goteo; 4 s. 2) Plano medio de una persona cepillándose con el grifo abierto; voz: «¿Sabías que gastas 12 litros?»; 6 s. 3) La misma persona cierra el grifo; música alegre; 5 s. 4) Plano general con el texto «Cierra el grifo, ahorra agua»; 5 s." },
    { nivel: "avanzado", q: "Diseña una hoja para controlar el gasto de un viaje de clase: columnas, fórmulas y un formato condicional útil.", sol: "Columnas: Concepto, Precio unitario, Cantidad, Total (=B2*C2). Al final, =SUMA(D2:D20) y el presupuesto en una celda fija; Diferencia =Presupuesto−Total. Formato condicional: la diferencia en rojo si es negativa (nos pasamos)." },
    { nivel: "avanzado", q: "Un compañero entrega una infografía con 6 tipografías, 8 colores y párrafos largos. Redacta tres mejoras concretas.", sol: "Reducir a dos tipografías (una para títulos y otra para texto); limitar la paleta a 2-3 colores con contraste y uno de acento; cambiar los párrafos por cifras destacadas, iconos y frases cortas, y añadir la fuente de los datos." },
    { nivel: "avanzado", q: "¿Es ético retocar una foto? Distingue entre un retoque aceptable y una manipulación engañosa con dos ejemplos.", sol: "Aceptable: corregir el brillo o recortar el encuadre de una foto del viaje. Engañoso: añadir a una persona que no estaba en una foto de noticia o cambiar el tamaño de una manifestación. La diferencia es si cambia lo que realmente ocurrió y si se oculta al público." },
    { nivel: "avanzado", q: "Quieres usar en un vídeo de YouTube una canción famosa de la radio. ¿Qué problemas puede haber y qué alternativas tienes?", sol: "La canción tiene derechos de autor: YouTube puede silenciar el vídeo, quitarle los ingresos o bloquearlo. Alternativas: música de la biblioteca de audio de YouTube, de bancos con licencia CC (citando según la licencia) o componer una propia." },
    { nivel: "avanzado", q: "Explica por qué un vídeo de 1 minuto puede ocupar 20 MB o 400 MB según cómo se exporte.", sol: "Depende de la resolución (4K tiene 4 veces más píxeles que Full HD), de la tasa de fotogramas, del códec (H.265 o AV1 comprimen más que H.264) y sobre todo de la tasa de bits que se elija: a 2,5 Mbps ocupa unos 19 MB y a 50 Mbps unos 375 MB." },
    { nivel: "avanzado", q: "Convierte en accesible un documento que tiene títulos en negrita a mano, imágenes sin descripción y enlaces que dicen «aquí».", sol: "Aplicar estilos Título 1 y Título 2 a los títulos; añadir texto alternativo que describa cada imagen; cambiar «aquí» por textos que digan a dónde llevan («descarga el horario en PDF»); revisar el contraste y exportar a PDF etiquetado." },
    { nivel: "avanzado", q: "Una obra de un pintor que murió en 1950 y una foto de un fotógrafo vivo. ¿Cuál puedes usar libremente en España en 2026? Razona.", sol: "La del pintor muerto en 1950: sus derechos de explotación duraron 70 años tras su muerte (hasta 2020) y ya está en dominio público. La foto del fotógrafo vivo tiene derechos y solo puedes usarla si su licencia lo permite o con su permiso." },
    { nivel: "avanzado", q: "Calcula con la hoja: en C2:C31 están las notas de 30 alumnos. Escribe fórmulas para la media, la nota más alta, el número de aprobados y el porcentaje de aprobados.", sol: "Media: =PROMEDIO(C2:C31). Máxima: =MAX(C2:C31). Aprobados: =CONTAR.SI(C2:C31;\">=5\"). Porcentaje: =CONTAR.SI(C2:C31;\">=5\")/30 con formato de porcentaje (o dividir entre CONTAR(C2:C31))." },
  ],
  ejemplos: [
    { enunciado: "En una hoja, A2:A6 son productos, B2:B6 precios sin IVA y F1 contiene 21 %. Escribe la fórmula del precio con IVA en C2 para copiarla hacia abajo.", pasos: ["Precio con IVA = precio · (1 + IVA).", "El precio cambia en cada fila: referencia relativa B2.", "El IVA está siempre en F1: referencia absoluta $F$1.", "Fórmula: =B2*(1+$F$1). Al copiarla a C3 queda =B3*(1+$F$1)."], resultado: "=B2*(1+$F$1)" },
    { enunciado: "Prepara una foto de 4.000 × 3.000 píxeles para la web del instituto, donde se verá a 1.200 píxeles de ancho.", pasos: ["Recortar si hace falta, aplicando la regla de los tercios.", "Ajustar brillo y contraste si está oscura.", "Redimensionar a 1.200 × 900 píxeles (se mantiene la proporción 4:3).", "Exportar en JPEG o WebP con calidad del 75-80 %.", "Añadir texto alternativo al publicarla."], resultado: "Una foto de unos 200-300 KB en lugar de varios MB." },
    { enunciado: "Cita correctamente una foto de Wikimedia Commons titulada «Faro de Finisterre», de M. López, con licencia CC BY-SA 4.0.", pasos: ["Título: «Faro de Finisterre».", "Autor: M. López.", "Lugar: Wikimedia Commons, con el enlace a la página de la foto.", "Licencia: CC BY-SA 4.0 (y, si la modificas, compartir con la misma licencia)."], resultado: "«Faro de Finisterre», de M. López, Wikimedia Commons, CC BY-SA 4.0." },
  ],
  errores: ["Olvidar el símbolo $ al copiar una fórmula que debe usar siempre la misma celda: los resultados salen mal en todas las filas menos la primera."],
  cuarta: ["La comprimida en JPEG", "su tamaño en centímetros siempre", "Lo traduce a otro idioma", "no se pueden hacer copias de seguridad", "Sí, si cambias el nombre del archivo", "%", "barras apiladas en 3D", "los vídeos", "el precio de una web", "fotos sin texto"],
  quiz: [
    { q: "El storyboard es…", o: ["el guion dibujado en viñetas", "la música del vídeo", "el programa de montaje", "un formato de vídeo"], a: 0, e: "Una viñeta por plano, con boceto y notas." },
    { q: "La regla de los tercios ayuda a…", o: ["comprimir una foto", "encuadrar mejor", "elegir la licencia", "subir el volumen"], a: 1, e: "Se sitúa lo importante en las líneas que dividen la imagen en tercios." },
    { q: "¿Qué relación de aspecto tienen los vídeos verticales del móvil?", o: ["16:9", "4:3", "9:16", "1:1"], a: 2, e: "Más alto que ancho." },
    { q: "En =B2*$F$1, la parte $F$1 es una referencia…", o: ["relativa", "absoluta", "circular", "externa"], a: 1, e: "El dólar la fija al copiar la fórmula." },
    { q: "¿Qué función cuenta solo las celdas que cumplen una condición?", o: ["SUMA", "CONTAR.SI", "PROMEDIO", "MAX"], a: 1, e: "Por ejemplo, cuántos aprobados hay." },
    { q: "Los colores complementarios son…", o: ["vecinos en el círculo cromático", "opuestos en el círculo cromático", "siempre grises", "solo los de imprenta"], a: 1, e: "Como azul y naranja: crean contraste." },
    { q: "Para generar un índice automático en un documento hay que usar…", o: ["negritas a mano", "estilos de título", "tablas", "notas al pie"], a: 1, e: "El índice se construye a partir de los estilos." },
    { q: "MP4 es…", o: ["un códec de audio", "un contenedor de vídeo", "una licencia", "una resolución"], a: 1, e: "Guarda vídeo y audio codificados, por ejemplo, con H.264." },
    { q: "En España, una obra pasa al dominio público…", o: ["al publicarse", "10 años después de crearse", "70 años después de la muerte del autor", "nunca"], a: 2, e: "A partir de ahí se puede usar libremente." },
    { q: "Presentar como propio un texto copiado de Internet es…", o: ["derecho de cita", "plagio", "dominio público", "una licencia CC"], a: 1, e: "Aunque sea gratis, hay que citar siempre la fuente." },
  ],
  cuartaEx: ["GIF animado", "Venderla sin permiso", "Cambiar el título de la obra"],
  examen: [
    { q: "¿Qué tasa de fotogramas da aspecto de cine?", o: ["12", "24", "60", "120"], a: 1, e: "24 fotogramas por segundo es el estándar del cine." },
    { q: "¿Qué formato elegirías para una captura de pantalla nítida?", o: ["JPEG muy comprimido", "PNG", "MP3", "DOCX"], a: 1, e: "PNG comprime sin pérdida y mantiene el texto nítido." },
    { q: "La regla TALL para citar incluye…", o: ["Título, Autor, Lugar y Licencia", "Tamaño, Año, Lengua y Lugar", "Texto, Audio, Letra y Logo", "Tema, Alumno, Libro y Lápiz"], a: 0, e: "Así cualquiera puede encontrar y respetar la obra." },
    { q: "El control de cambios de un procesador de textos sirve para…", o: ["comprimir el documento", "ver y aceptar lo que cambia cada persona", "cambiar la tipografía", "crear el índice"], a: 1, e: "Es básico para corregir en equipo." },
    { q: "¿Por qué conviene subtitular los vídeos?", o: ["Para que pesen menos", "Para hacerlos accesibles y verlos sin sonido", "Para cambiar la resolución", "Porque lo exige el códec"], a: 1, e: "Ayudan a personas sordas y a quien ve vídeos en silencio." },
  ],
  tarjetas: [
    ["Storyboard", "Guion dibujado: una viñeta por plano con imagen, texto y sonido."],
    ["Referencia absoluta", "Celda fija con $: =B2*$F$1."],
    ["Resolución Full HD", "1.920 × 1.080 píxeles, relación 16:9."],
    ["Cita TALL", "Título, autor, lugar (enlace) y licencia."],
  ],
  glosario: [
    ["Guion técnico", "Guion que detalla por escenas el plano, el sonido y la duración."],
    ["Storyboard", "Secuencia de viñetas dibujadas que muestra cada plano de un vídeo."],
    ["Píxel", "Punto mínimo de color de una imagen de mapa de bits."],
    ["Imagen vectorial", "Imagen formada por formas matemáticas que se amplía sin perder calidad."],
    ["Capa", "Lámina transparente de un editor que permite trabajar un elemento por separado."],
    ["Relación de aspecto", "Proporción entre el ancho y el alto de una imagen o vídeo."],
    ["Códec", "Sistema que comprime y descomprime el audio o el vídeo."],
    ["Tasa de bits", "Cantidad de datos por segundo de un audio o vídeo."],
    ["Estilo", "Formato con nombre que se aplica a títulos y párrafos de un documento."],
    ["Función", "Fórmula preparada de una hoja de cálculo (SUMA, SI, CONTAR.SI…)."],
    ["Referencia absoluta", "Referencia a una celda que no cambia al copiar la fórmula ($F$1)."],
    ["Contraste", "Diferencia de luminosidad entre el texto y el fondo."],
    ["Derechos de autor", "Derechos que la ley da a quien crea una obra."],
    ["Creative Commons", "Licencias que indican de antemano qué usos permite el autor."],
    ["Dominio público", "Situación de una obra que se puede usar libremente."],
    ["Derecho de cita", "Permiso legal para incluir fragmentos breves de una obra ajena citándola."],
    ["Plagio", "Presentar como propio el trabajo de otra persona."],
    ["Texto alternativo", "Descripción de una imagen para quien no puede verla."],
  ],
  situacion: {
    titulo: "Campaña digital para el instituto",
    reto: "El instituto quiere una campaña para reducir los residuos en el patio. Vuestro equipo debe crear un pequeño kit de comunicación (vídeo vertical de 30-45 segundos, infografía y hoja de datos) usando solo recursos propios o con licencia libre.",
    pasos: [
      "Recoged datos reales: contad durante tres días los residuos del patio y anotadlos en una hoja de cálculo con totales, medias y un gráfico.",
      "Escribid el guion técnico y el storyboard del vídeo con un gancho en los tres primeros segundos.",
      "Grabad y montad el vídeo en 9:16 con subtítulos; exportadlo en Full HD con un peso razonable.",
      "Diseñad la infografía con los datos de la hoja, dos tipografías y una paleta de tres colores con buen contraste.",
      "Preparad la ficha de créditos con la cita TALL de cada recurso ajeno y elegid una licencia CC para vuestro trabajo.",
    ],
    producto: "Vídeo, infografía, hoja de cálculo con gráfico y ficha de créditos, presentados al resto del grupo.",
    evaluacion: ["El guion y el storyboard planifican bien el mensaje y el ritmo.", "La hoja de cálculo usa fórmulas y funciones correctas y el gráfico es adecuado.", "El diseño respeta la jerarquía, el contraste y la accesibilidad (subtítulos, texto alternativo).", "Todos los recursos ajenos están bien citados y la licencia elegida es coherente."],
  },
  objetivos: ["Planificar un vídeo con guion y storyboard y exportarlo en el formato adecuado", "Usar funciones y referencias absolutas en la hoja de cálculo"],
  fuentes: [{ t: "Creative Commons: sobre las licencias", url: "https://creativecommons.org/licenses/?lang=es" }],
});
