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
