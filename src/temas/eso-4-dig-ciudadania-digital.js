// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Derechos y ciudadanía digital",
  minutos: 40,
  objetivos: ["Conocer los derechos digitales que reconoce la ley en España y Europa", "Participar en la red con respeto y detectar bulos", "Valorar la brecha digital y el impacto social y ambiental de la tecnología"],
  claves: ["ciudadanía digital", "derechos digitales", "netiqueta", "desinformación", "brecha digital", "administración electrónica"],
  pregunta: {
    texto: "Un mensaje dice que el agua con limón cura una enfermedad grave y ya lo han reenviado miles de personas. ¿Que lo comparta tanta gente lo hace verdad?",
    respuesta: "No. Los <mark>bulos</mark> se difunden precisamente porque emocionan y se reenvían sin comprobar. Un ciudadano digital responsable <b>verifica antes de compartir</b>: quién lo dice, en qué fuente oficial aparece, si otros medios fiables lo confirman. Si no lo puedes comprobar, no lo reenvíes.",
  },
  bloques: [
    {
      html: `<h3>Qué es la ciudadanía digital</h3><p>Ser <b>ciudadano digital</b> es participar en la sociedad a través de la tecnología con <b>derechos</b> y también con <b>responsabilidades</b>. Incluye usar Internet para informarse, aprender, comunicarse, hacer trámites y opinar, pero también <mark>respetar a los demás</mark>, cuidar la privacidad propia y ajena, cumplir las leyes y contribuir a una red más justa y segura. Lo que es ilegal fuera de Internet (insultar, amenazar, robar) también lo es dentro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza entre derechos y responsabilidades del ciudadano digital">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 30 V 150 M96 150 H 164 M40 56 H 220" stroke="var(--ink)" stroke-width="4"/>
        <rect x="16" y="64" width="96" height="74" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="148" y="64" width="96" height="74" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
        <g ${F} text-anchor="middle"><text x="64" y="84" font-size="11" font-weight="700" fill="var(--pen)">derechos</text><text x="196" y="84" font-size="11" font-weight="700" fill="var(--leaf)">deberes</text>
        <g font-size="9" fill="var(--ink)"><text x="64" y="102">acceso</text><text x="64" y="116">privacidad</text><text x="64" y="130">expresión</text><text x="196" y="102">respeto</text><text x="196" y="116">verificar</text><text x="196" y="130">cumplir la ley</text></g></g>
      </svg>`,
    },
    {
      html: `<h3>Los derechos digitales</h3><p>En España, la <b>Ley Orgánica 3/2018</b> de protección de datos y garantía de los derechos digitales y la <b>Carta de Derechos Digitales</b> reconocen, entre otros: el <b>acceso universal</b> a Internet, la <b>neutralidad de la red</b> (que las compañías no discriminen contenidos), la <b>seguridad</b>, la <b>educación digital</b>, la protección de los menores, la <mark>rectificación</mark> de informaciones falsas, el <b>derecho al olvido</b> (pedir que se retiren datos antiguos o irrelevantes de los buscadores), la intimidad y la <b>desconexión</b> en el trabajo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Seis derechos digitales: acceso, neutralidad, olvido, rectificación, educación y desconexión">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["acceso", "var(--pen)"], ["neutralidad", "var(--inf)"], ["olvido", "var(--muted)"], ["rectificación", "var(--red)"], ["educación", "var(--leaf)"], ["desconexión", "var(--sun)"]]
          .map(([t, c], i) => `<rect x="${16 + (i % 2) * 120}" y="${22 + Math.floor(i / 2) * 46}" width="108" height="34" rx="17" fill="${c}"/><text x="${70 + (i % 2) * 120}" y="${43 + Math.floor(i / 2) * 46}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
        <text x="130" y="170" text-anchor="middle" font-size="9" fill="var(--muted)" ${F}>LO 3/2018 · Carta de Derechos Digitales</text>
      </svg>`,
    },
    {
      html: `<h3>Netiqueta y participación</h3><p>La <b>netiqueta</b> son las normas de buena educación en la red: tratar con respeto, no escribir todo en MAYÚSCULAS (equivale a gritar), no difundir datos ni imágenes de otros sin permiso, citar las fuentes y discutir ideas, no atacar a personas. Internet también permite <b>participar</b>: firmar iniciativas, colaborar en proyectos como Wikipedia, hacer voluntariado en línea o comunicarse con el ayuntamiento. La <mark>libertad de expresión</mark> tiene límites: no ampara el odio, las amenazas ni la difamación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos mensajes: uno en mayúsculas con insultos tachado y otro respetuoso aprobado">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="26" width="180" height="40" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="32" y="50" font-size="11" font-weight="700" fill="var(--ink)" ${F}>¡¡ERES UN INÚTIL!!</text>
        <path d="M212 34 l 22 22 M234 34 l -22 22" stroke="var(--red)" stroke-width="4"/>
        <rect x="20" y="90" width="180" height="52" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="32" y="112" font-size="10" fill="var(--ink)" ${F}>No estoy de acuerdo porque…</text><text x="32" y="130" font-size="10" fill="var(--ink)" ${F}>aquí tienes la fuente.</text>
        <path d="M212 116 l 8 8 l 16 -18" fill="none" stroke="var(--leaf)" stroke-width="4"/>
        <text x="130" y="166" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>critica ideas, no personas</text>
      </svg>`,
    },
    {
      html: `<h3>Desinformación y bulos</h3><p>Los <b>bulos</b> (noticias falsas) buscan engañar para ganar dinero con clics, influir en opiniones o simplemente hacer daño. Suelen tener titulares alarmistas, apelar a las emociones, no citar fuentes o citar fuentes inventadas, y pedir que «lo compartas antes de que lo borren». Para comprobarlos: <mark>lee más allá del titular</mark>, mira la fecha y el autor, busca si medios fiables lo publican, haz una búsqueda inversa de la imagen y consulta webs de verificación (fact-checking). Los <b>algoritmos</b> de las redes tienden a mostrarnos lo que ya pensamos: es la «burbuja de filtros».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lupa sobre un titular alarmista con pasos de verificación">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="22" width="130" height="80" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><text x="26" y="44" font-size="11" font-weight="700" fill="var(--red)" ${F}>¡INCREÍBLE!</text>
        ${[0, 1, 2].map((i) => `<path d="M26 ${60 + i * 12} h ${100 - i * 20}" stroke="var(--line)" stroke-width="5"/>`).join("")}
        <circle cx="132" cy="96" r="24" fill="none" stroke="var(--pen)" stroke-width="6"/><path d="M149 113 L 168 132" stroke="var(--pen)" stroke-width="8" stroke-linecap="round"/>
        <g ${F} font-size="10" fill="var(--ink)">${["¿quién lo dice?", "¿qué fecha?", "¿otros medios?", "¿imagen real?"].map((t, i) => `<text x="170" y="${36 + i * 20}">✓ ${t}</text>`).join("")}</g>
        <text x="20" y="160" font-size="10" font-weight="700" fill="var(--ink)" ${F}>si no se puede comprobar, no se comparte</text>
      </svg>`,
    },
    {
      html: `<h3>Brecha digital y sostenibilidad</h3><p>La <b>brecha digital</b> es la desigualdad entre quienes tienen acceso, dispositivos y habilidades digitales y quienes no: por renta, por edad, por vivir en zonas rurales o por discapacidad. Hoy muchos trámites son por la <b>administración electrónica</b> (sede electrónica, certificado digital, Cl@ve), así que quedarse fuera excluye. La tecnología también tiene <mark>impacto ambiental</mark>: los centros de datos consumen mucha energía y agua, y los aparatos acaban como residuos electrónicos. Alargar la vida de los dispositivos, repararlos y reciclarlos en puntos limpios ayuda.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Brecha digital entre personas conectadas y desconectadas, y ciclo de reutilizar y reciclar">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 70 H 104 L 116 90 L 104 110 H 20 Z" fill="var(--leaf)"/><path d="M240 70 H 156 L 144 90 L 156 110 H 240 Z" fill="var(--muted)"/>
        <path d="M118 60 L 124 76 L 116 90 L 126 104 L 120 120 M142 60 L 136 76 L 144 90 L 134 104 L 140 120" fill="none" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="10" font-weight="700" fill="#fff" text-anchor="middle"><text x="60" y="94">conectados</text><text x="200" y="94">sin acceso</text></g>
        <g ${F} font-size="9" fill="var(--ink)" text-anchor="middle"><text x="60" y="130">dispositivo · red</text><text x="60" y="144">habilidades</text><text x="200" y="130">renta · edad</text><text x="200" y="144">zona rural</text></g>
        <text x="130" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>brecha digital</text>
        <text x="130" y="168" text-anchor="middle" font-size="10" font-weight="700" fill="var(--leaf)" ${F}>reparar · reutilizar · reciclar</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Antes de compartir, pásalo por estos filtros",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cuatro filtros antes de compartir: fuente, fecha, contraste y emoción">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Fuente", "¿quién lo publica?", "¿es oficial?", "var(--pen)"], ["Fecha", "¿es actual o", "es antiguo?", "var(--sun)"], ["Contraste", "¿lo dicen otros", "medios fiables?", "var(--leaf)"], ["Emoción", "¿me enfada o asusta", "a propósito?", "var(--red)"]]
        .map(([n, a, b, c], i) => `<rect x="${16 + i * 154}" y="30" width="146" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="76" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="120" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="140" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "3QWFvu-qTZw", titulo: "Qué es ciudadanía digital", canal: "Centro de Innovación - Mineduc", vistas: 427137, megusta: 0, busqueda: "qué es ciudadanía digital" },
  quiz: [
    { q: "El derecho a pedir que los buscadores retiren datos antiguos o irrelevantes sobre ti es…", o: ["el derecho al olvido", "la neutralidad de la red", "la netiqueta"], a: 0, e: "Lo reconocen el RGPD y la LO 3/2018." },
    { q: "Escribir todo en MAYÚSCULAS en un chat equivale a…", o: ["ser más claro", "gritar", "citar una fuente"], a: 1, e: "Es una norma básica de netiqueta." },
    { q: "¿Cuál es una señal típica de un bulo?", o: ["Cita fuentes oficiales con enlace", "Titular alarmista que pide compartir ya", "Tiene fecha y autor"], a: 1, e: "Buscan que reenvíes sin pensar." },
    { q: "La desigualdad en el acceso y uso de la tecnología se llama…", o: ["brecha digital", "huella digital", "burbuja de filtros"], a: 0, e: "Depende de la renta, la edad, el lugar o la discapacidad." },
    { q: "¿Qué hacer con un móvil viejo que ya no funciona?", o: ["Tirarlo a la basura normal", "Llevarlo a un punto limpio o de recogida", "Quemarlo"], a: 1, e: "Tiene materiales valiosos y contaminantes." }
  ],
  examen: [
    { q: "La neutralidad de la red significa que…", o: ["las compañías no pueden discriminar contenidos ni ralentizar unos frente a otros", "Internet no tiene opinión política", "todo es gratis"], a: 0, e: "Todo el tráfico se trata por igual." },
    { q: "¿Ampara la libertad de expresión amenazar a alguien en redes?", o: ["Sí, es tu opinión", "No, las amenazas y el odio no están protegidos", "Solo si es anónimo"], a: 1, e: "Lo ilegal fuera de la red también lo es dentro." },
    { q: "La «burbuja de filtros» se produce porque…", o: ["los algoritmos nos muestran sobre todo lo que ya nos gusta o pensamos", "el wifi filtra páginas", "hay demasiados anuncios"], a: 0, e: "Por eso conviene buscar fuentes variadas." },
  ],
  feynman: ["Qué significa ser ciudadano digital: derechos y responsabilidades", "Cuatro derechos digitales que reconoce la ley", "Las normas básicas de netiqueta y los límites de la libertad de expresión", "Cómo verificar una noticia antes de compartirla", "Qué es la brecha digital y el impacto ambiental de la tecnología"],
  mapa: mapa("CIUDADANÍA DIGITAL", "var(--eso)", [
    ["Derechos", "acceso · olvido · neutralidad", "var(--pen)"],
    ["Netiqueta", "respeto · citar fuentes", "var(--leaf)"],
    ["Bulos", "verificar antes de compartir", "var(--red)"],
    ["Brecha", "acceso · e-administración", "var(--sun)"],
  ], 250),
  tarjetas: [
    ["¿Qué es la netiqueta?", "Las normas de buena educación en Internet."],
    ["¿Qué es el derecho al olvido?", "Pedir que se retiren de los buscadores datos personales antiguos o irrelevantes."],
    ["¿Qué ley española recoge los derechos digitales?", "La Ley Orgánica 3/2018 de protección de datos y garantía de los derechos digitales."],
    ["¿Qué es un bulo?", "Una información falsa difundida a propósito para engañar."],
    ["¿Qué es la brecha digital?", "La desigualdad en el acceso, uso y habilidades digitales."],
  ],
  familias: ["Elegid un mensaje reenviado en un grupo familiar y comprobad juntos si es verdad.", "Haced un trámite sencillo en una sede electrónica (por ejemplo, consultar una cita) para ver cómo funciona.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Ciudadanía digital crítica: derechos digitales, interactividad en la red, libertad de expresión, desinformación, administración electrónica, brecha digital y sostenibilidad (RD 217/2022, Digitalización 4º).",
    ideas: ["Taller de verificación: analizar tres noticias virales con herramientas de fact-checking.", "Mapear la brecha digital del barrio con una encuesta a familias.", "Redactar en clase una carta de netiqueta para el grupo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Hacer trámites y compras en línea con seguridad", "Conocer la accesibilidad digital y el trabajo colaborativo en red"],
  tras: {
    "Los derechos digitales": [
      { html: `<h3>La administración electrónica</h3><p>Hoy muchos trámites se hacen por Internet: pedir cita médica, consultar las notas, solicitar una beca, presentar la declaración de la renta o pedir un certificado. Para ello hay que <b>identificarse</b> de forma segura. En España existen el <b>certificado digital</b> (un archivo instalado en el ordenador), el <b>DNI electrónico</b> (con chip) y el sistema <b>Cl@ve</b>, que permite entrar con un código o una app en el móvil. Todos se apoyan en la <b>firma electrónica</b>, que tiene <mark>la misma validez que una firma a mano</mark>. Las sedes electrónicas oficiales acaban en «.gob.es» y siempre usan HTTPS.</p>`, video: { id: "lUlvRNRMWBk", titulo: "Qué es y cómo funciona Cl@ve", canal: "Agencia Tributaria", vistas: 89241 } },
      { html: `<h3>Comprar en línea con seguridad</h3><p>Antes de comprar en una tienda en línea conviene comprobar: que la web usa <b>HTTPS</b>; que tiene un <b>aviso legal</b> con nombre de la empresa, dirección y NIF; las <b>opiniones</b> en sitios independientes; y que los precios no son increíblemente bajos, señal típica de tienda falsa. Es mejor pagar con métodos que permiten reclamar, como tarjeta, tarjetas virtuales o plataformas de pago, y nunca por transferencia a un desconocido. En la Unión Europea hay un <b>derecho de desistimiento</b>: se puede devolver lo comprado a distancia en un plazo de <mark>14 días</mark> sin dar explicaciones. Los menores necesitan el permiso de sus padres para comprar.</p>`, video: { id: "zoKLrQYow3s", titulo: "Guía para comprar online como un experto", canal: "Trending Tony", vistas: 293361 } },
    ],
    "Netiqueta y participación": [
      { html: `<h3>Trabajo colaborativo en red</h3><p>Las herramientas digitales permiten trabajar en equipo sin estar en el mismo sitio: documentos compartidos, videollamadas, tableros de tareas (como Trello) y plataformas educativas como Classroom o Moodle. Para que funcione, el grupo debe <b>repartir tareas</b> con responsables y plazos, usar <b>un solo canal</b> de comunicación, respetar los horarios de los demás (el <b>derecho a la desconexión digital</b> también protege a los trabajadores) y dejar constancia de los acuerdos. En las videollamadas: micrófono silenciado si no hablas, cámara si es posible y <mark>turnos de palabra</mark>.</p>` },
    ],
    "Brecha digital y sostenibilidad": [
      { html: `<h3>Accesibilidad digital</h3><p>La <b>accesibilidad</b> busca que cualquier persona pueda usar la tecnología, tenga o no una discapacidad. Las personas ciegas usan <b>lectores de pantalla</b> que leen en voz alta el contenido; las sordas necesitan <b>subtítulos</b>; otras navegan solo con el teclado o con la voz. Para que una web sea accesible debe tener texto alternativo en las imágenes, buen contraste de colores, textos claros, vídeos subtitulados y poder manejarse sin ratón. En la Unión Europea, las webs de las administraciones <mark>están obligadas</mark> a ser accesibles. La accesibilidad beneficia a todos: los subtítulos ayudan también en un tren con ruido.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Una web vende zapatillas de marca a 19 € (en otras, 120 €). No tiene aviso legal y solo admite transferencia. ¿Comprarías?", pasos: ["Precio increíblemente bajo: señal de tienda falsa.", "Sin aviso legal ni datos de la empresa: no hay a quién reclamar.", "Pago solo por transferencia: no se puede recuperar el dinero."], resultado: "No: tiene tres señales claras de fraude." },
    { enunciado: "Compraste una sudadera en línea el día 3 y te llegó el día 6. ¿Hasta cuándo puedes devolverla sin dar explicaciones?", pasos: ["El derecho de desistimiento es de 14 días naturales.", "Se cuenta desde que recibes el producto: el día 6.", "6 + 14 = día 20."], resultado: "Hasta el día 20 de ese mes." },
    { enunciado: "Tu grupo debe hacer una presentación en dos semanas sin coincidir por las tardes. Organiza el trabajo.", pasos: ["Crea un documento compartido con el índice y asigna un apartado a cada persona con fecha.", "Usa un solo canal para comunicaros y una videollamada corta de seguimiento.", "Deja el último día para unir, revisar el estilo y ensayar."], resultado: "Tareas asignadas, un canal, un seguimiento y una revisión final." },
  ],
  errores: [
    "Confundir una sede electrónica oficial con una web que cobra por hacer trámites gratuitos.",
    "Comprar en tiendas sin aviso legal o pagar por transferencia a desconocidos.",
    "Pensar que la accesibilidad solo interesa a las personas con discapacidad.",
    "Escribir en el grupo de trabajo a cualquier hora esperando respuesta inmediata.",
    "Compartir un bulo sin comprobarlo porque lo envía alguien de confianza.",
  ],
  ejercicios: [
    { q: "¿Qué es la ciudadanía digital?", sol: "Participar en la sociedad a través de la tecnología de forma responsable, segura, crítica y respetuosa, conociendo los propios derechos y deberes." },
    { q: "Nombra cuatro derechos digitales reconocidos en España.", sol: "Derecho a la protección de datos, al olvido, a la desconexión digital y a la neutralidad de la red (también al acceso universal o a la educación digital)." },
    { q: "Indica tres formas de identificarse ante la administración por Internet.", sol: "Certificado digital, DNI electrónico y Cl@ve." },
    { q: "Indica cuatro comprobaciones antes de comprar en una tienda en línea.", sol: "HTTPS, aviso legal con datos de la empresa, opiniones independientes y precios razonables (además de un método de pago seguro)." },
    { q: "¿Qué es el derecho de desistimiento y cuál es su plazo?", sol: "El derecho a devolver una compra a distancia sin dar explicaciones; el plazo es de 14 días desde que se recibe." },
    { q: "Indica cinco pasos para comprobar si una noticia es un bulo.", sol: "Leer más allá del titular, mirar la fuente y la fecha, buscarla en otros medios, consultar verificadores (Maldita, Newtral) y hacer una búsqueda inversa de las imágenes." },
    { q: "Indica tres normas de netiqueta en una videollamada de clase.", sol: "Silenciar el micrófono si no se habla, pedir turno de palabra y mantener una actitud respetuosa (y la cámara si es posible)." },
    { q: "Indica cuatro requisitos de una web accesible.", sol: "Texto alternativo en imágenes, buen contraste, vídeos subtitulados y manejo con teclado." },
    { q: "¿Qué es la brecha digital? Indica dos causas.", sol: "La desigualdad en el acceso y el uso de la tecnología; causas: falta de recursos económicos, zona rural sin cobertura, edad o falta de formación." },
    { q: "Indica tres acciones para reducir el impacto ambiental de la tecnología.", sol: "Alargar la vida de los dispositivos, reciclarlos en puntos limpios y reducir el almacenamiento y el streaming innecesarios." },
  ],
  quiz: [
    { q: "Cl@ve sirve para…", o: ["identificarse ante la administración", "comprimir archivos", "jugar en línea"], a: 0, e: "Con un código o una app." },
    { q: "El derecho de desistimiento en compras en línea es de…", o: ["7 días", "14 días", "30 días"], a: 1, e: "Desde que recibes el producto." },
    { q: "Una señal de tienda falsa es…", o: ["tener aviso legal", "precios increíblemente bajos", "usar HTTPS"], a: 1, e: "Demasiado bueno para ser verdad." },
    { q: "Un lector de pantalla ayuda a…", o: ["personas ciegas", "comprimir vídeos", "mejorar el wifi"], a: 0, e: "Lee el contenido en voz alta." },
    { q: "Las sedes electrónicas oficiales españolas acaban en…", o: [".com", ".gob.es", ".net"], a: 1, e: "Y siempre usan HTTPS." },
  ],
  tarjetas: [
    ["Firma electrónica", "Identificación digital con la misma validez legal que una firma a mano."],
    ["Derecho de desistimiento", "Devolver una compra a distancia en 14 días sin explicaciones."],
    ["Accesibilidad digital", "Que cualquier persona, con o sin discapacidad, pueda usar la tecnología."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 100,
  revisado: "2026-11-13",
  lectura: {
    titulo: "Una beca, una firma y un clic",
    html: `<p>Ainhoa quiere pedir una beca para el Bachillerato. Su abuela recuerda que, hace años, aquello significaba ir a una oficina, rellenar formularios a mano y hacer cola varias mañanas. Ainhoa lo hace desde el móvil en veinte minutos: se identifica con su DNI electrónico, rellena el formulario en la sede electrónica, autoriza que la administración consulte los datos de renta de su familia y recibe un justificante con fecha y hora. Esa misma tarde firma una petición en línea para que pongan un carril bici junto al instituto y vota en los presupuestos participativos de su ayuntamiento.</p>
      <p>Internet se ha convertido en la plaza pública de nuestro tiempo: allí nos informamos, compramos, trabajamos, hacemos trámites y participamos en la vida política. Por eso necesitamos conocer nuestros <b>derechos digitales</b>, saber usar la <b>identidad electrónica</b> con seguridad, comprar y pagar sin caer en trampas y entender cómo funcionan las plataformas que median en casi todo. Ser ciudadano digital es tener herramientas para que la tecnología amplíe tus derechos, y no para que los recorte.</p>`,
  },
  svgs: {
    "La administración electrónica": L.cajas("Trámites que se hacen en la administración electrónica", [["Salud", "cita médica|receta"], ["Educación", "becas|matrícula"], ["Hacienda", "renta|certificados"], ["Tráfico", "permisos|multas"]], { t: "Trámites en línea" }),
    "Comprar en línea con seguridad": L.flujo("Comprobaciones antes de comprar en línea", ["HTTPS y dominio correcto", "Aviso legal con NIF y dirección", "Opiniones en otras webs", "Pago seguro, nunca transferencia", "Guardar factura y confirmación"], { t: "Antes de pagar" }),
    "Trabajo colaborativo en red": L.estrella("Herramientas de trabajo colaborativo", "Equipo", ["documentos", "videollamada", "tablero", "calendario", "chat", "nube"]),
    "Accesibilidad digital": L.cajas("Requisitos de una web accesible", [["Texto alternativo", "en imágenes"], ["Contraste", "suficiente"], ["Teclado", "todo funciona|sin ratón"], ["Subtítulos", "en vídeos"]], { t: "Web para todos" }),
  },
  tras: {
    "Los derechos digitales": [
      {
        html: `<h3>Derechos digitales en la escuela y el trabajo</h3><p>La Ley Orgánica 3/2018 recoge derechos que afectan a tu vida diaria. El <b>derecho a la educación digital</b> obliga al sistema educativo a enseñar un uso seguro, crítico y respetuoso de Internet, y los centros deben proteger los datos del alumnado: no pueden publicar fotos ni notas sin consentimiento. Los <b>menores</b> tienen una protección especial: en España, a partir de los <mark>14 años</mark> puedes dar tú mismo el consentimiento para que traten tus datos; antes, lo dan tus padres o tutores. Las fotos y datos de menores publicados en redes deben retirarse si así se pide.</p>
          <p>En el trabajo existe el <b>derecho a la desconexión digital</b>: fuera de su horario, una persona trabajadora no tiene que responder correos ni mensajes de la empresa. También el derecho a la <b>intimidad</b> frente al uso de dispositivos y a la <b>videovigilancia</b> o geolocalización en el trabajo, que solo se permiten con información previa y con límites. Por último, el <b>testamento digital</b> permite decidir qué pasará con tus cuentas y contenidos cuando faltes. Conocer estos derechos permite reclamarlos ante la Agencia Española de Protección de Datos cuando no se respetan.</p>`,
        svg: L.cajas("Derechos digitales en la escuela, el trabajo y la vida", [["Educación digital", "aprender a usar|Internet con criterio"], ["14 años", "consentimiento|propio"], ["Desconexión", "no responder fuera|del horario"], ["Testamento digital", "qué pasa con|tus cuentas"]], { t: "Derechos para tu vida" }),
      },
      {
        html: `<h3>Neutralidad de la red y gobierno de Internet</h3><p>Internet no tiene un dueño único. Su funcionamiento depende de acuerdos técnicos y de organismos internacionales: la <b>ICANN</b> coordina los nombres de dominio y las direcciones IP, y comunidades de ingenieros definen los protocolos de forma abierta. La <b>neutralidad de la red</b> es el principio de que las compañías que dan acceso a Internet deben tratar todo el tráfico <mark>por igual</mark>: no pueden bloquear, ralentizar o dar prioridad a unas webs o aplicaciones por motivos comerciales. En la Unión Europea está protegida por ley, aunque se permiten excepciones técnicas, por ejemplo para gestionar la red en caso de saturación.</p>
          <p>Sin neutralidad, una operadora podría hacer que la plataforma de vídeo con la que tiene un acuerdo vaya rápida y las demás lentas, o cobrar más por usar ciertos servicios. En algunos países, los gobiernos bloquean redes sociales, censuran webs o incluso <b>apagan Internet</b> durante protestas o elecciones, lo que la ONU considera una vulneración de derechos humanos. Por eso muchas organizaciones defienden que el acceso a Internet sea un derecho básico, como el acceso a la información o a la libertad de expresión, y que se gobierne de forma abierta y con participación de todos.</p>`,
        svg: L.comparar("Internet con neutralidad frente a Internet sin neutralidad", ["Con neutralidad", ["todo el tráfico igual", "sin carriles VIP", "competencia justa", "más libertad"]], ["Sin neutralidad", ["webs de pago rápidas", "otras ralentizadas", "pagas por servicio", "menos libertad"]]),
      },
    ],
    "La administración electrónica": [
      {
        html: `<h3>Identidad electrónica</h3><p>Para hacer trámites por Internet hay que demostrar quién eres. En España hay varias formas. El <b>certificado digital</b> es un archivo que instala en tu navegador una identidad emitida por una autoridad de confianza (por ejemplo, la Fábrica Nacional de Moneda y Timbre); permite identificarse y <b>firmar</b> documentos con validez legal. El <b>DNI electrónico</b> lleva un chip con ese certificado y, con un lector o con el NFC del móvil, sirve para lo mismo. El sistema <b>Cl@ve</b> permite identificarse con un PIN que llega al móvil o con una contraseña, sin instalar nada.</p>
          <p>Estos sistemas usan la criptografía de clave pública: la clave privada está protegida en el chip o en el dispositivo y nunca viaja por la red. La firma electrónica garantiza que el documento lo firmaste tú y que nadie lo ha cambiado después. La Unión Europea prepara una <mark>cartera de identidad digital europea</mark>, una aplicación para guardar en el móvil documentos como el DNI, el carné de conducir o los títulos y presentarlos en cualquier país de la Unión, compartiendo solo los datos necesarios (por ejemplo, demostrar que eres mayor de edad sin enseñar tu fecha de nacimiento). Nunca compartas tu certificado, tu PIN de Cl@ve ni el código de tu DNIe.</p>`,
        svg: L.rejilla("Sistemas de identidad electrónica en España", ["Sistema", "Cómo", "Firma"], [["Certificado", "archivo instalado", "sí"], ["DNIe", "chip + lector o NFC", "sí"], ["Cl@ve PIN", "código al móvil", "trámites"], ["Cartera UE", "app en el móvil", "en marcha"]], { t: "Identificarse en línea" }),
      },
    ],
    "Comprar en línea con seguridad": [
      {
        html: `<h3>Pagos digitales</h3><p>Las formas de pago en línea han cambiado mucho. Las <b>tarjetas</b> de débito o crédito son las más usadas; para más seguridad, muchos bancos ofrecen <b>tarjetas virtuales</b> de un solo uso o con un límite bajo, y la ley europea exige la <b>autenticación reforzada</b>: además de los datos de la tarjeta, hay que confirmar el pago en la app del banco o con un código. Las plataformas de pago como PayPal hacen de intermediario y no dan tus datos bancarios a la tienda. Los pagos entre particulares por el móvil, como <b>Bizum</b>, son instantáneos, por lo que <mark>no se pueden anular</mark>: un timo muy común es pedir que aceptes una «devolución» que en realidad es un pago.</p>
          <p>Cuidado con las <b>suscripciones</b>: muchas apps y servicios ofrecen una prueba gratis que se convierte en un cobro mensual si no se cancela a tiempo. Revisa los cargos del banco cada mes. Las <b>criptomonedas</b> son monedas digitales sin banco central; su valor sube y baja de forma brusca, se usan a menudo en estafas de inversión («gana un 30 % al mes») y en pagos de rescates, y un error al enviarlas no tiene vuelta atrás. Antes de los 18 años no puedes contratar productos financieros por tu cuenta, y las compras de un menor sin permiso pueden reclamarse.</p>`,
        svg: L.cajas("Formas de pago en línea y su seguridad", [["Tarjeta virtual", "límite bajo|o un solo uso"], ["Plataforma", "no da tus datos|a la tienda"], ["Bizum", "instantáneo, no|se puede anular"], ["Cripto", "volátil, sin|vuelta atrás"]], { t: "Pagar en línea" }),
      },
    ],
    "Netiqueta y participación": [
      {
        html: `<h3>Participación ciudadana digital</h3><p>La tecnología abre nuevas formas de participar en la vida pública. Muchos ayuntamientos y comunidades tienen portales de <b>participación</b> donde cualquier vecino puede proponer ideas, votar <b>presupuestos participativos</b> (decidir en qué se invierte una parte del dinero público) o responder consultas. Los portales de <b>transparencia</b> publican los sueldos de los cargos públicos, los contratos y las subvenciones, y los portales de <mark>datos abiertos</mark> ofrecen datos públicos (calidad del aire, accidentes, horarios de autobús) que cualquiera puede usar para crear aplicaciones o investigar. También se pueden presentar quejas y sugerencias o pedir información pública por la sede electrónica.</p>
          <p>Las <b>peticiones en línea</b> y las campañas en redes, el llamado <b>ciberactivismo</b>, han conseguido cambios reales cuando se acompañan de organización y propuestas concretas. Pero tienen límites: dar un «me gusta» o firmar sin informarse, el llamado <i>slacktivismo</i>, cuesta poco y cambia poco. Para participar bien hay que informarse en fuentes fiables, argumentar con respeto, respetar los resultados aunque no nos gusten y combinar lo digital con lo presencial. Desde los 16 años, además, puedes votar en algunas consultas municipales y participar en consejos de juventud.</p>`,
        svg: L.estrella("Formas de participación ciudadana digital", "Participar", ["presupuestos", "consultas", "datos abiertos", "transparencia", "peticiones", "quejas"]),
      },
    ],
    "Brecha digital y sostenibilidad": [
      {
        html: `<h3>Economía de plataformas</h3><p>Buena parte de lo que hacemos en Internet pasa por unas pocas <b>plataformas</b>: tiendas en línea, redes sociales, buscadores, apps de reparto o de alquiler de viviendas. Funcionan como intermediarias entre quien ofrece algo y quien lo busca, y ganan con comisiones, publicidad o datos. Se benefician del <b>efecto red</b>: cuantas más personas las usan, más útiles son, y por eso tienden a hacerse <mark>enormes</mark> y a dejar poco espacio a la competencia. Algunas deciden qué productos ves primero, qué noticias te llegan o qué precio pagas.</p>
          <p>Han creado servicios muy cómodos y nuevos trabajos, pero también debates. En la llamada <b>economía de los encargos</b> (<i>gig economy</i>), repartidores o conductores trabajan por tareas a través de una app; en España, la «ley rider» de 2021 reconoció que los repartidores de plataformas son asalariados y no autónomos. La Unión Europea ha aprobado la <b>Ley de Servicios Digitales</b>, que obliga a las grandes plataformas a retirar contenido ilegal, explicar sus algoritmos de recomendación y no mostrar publicidad basada en perfiles a menores, y la <b>Ley de Mercados Digitales</b>, que limita los abusos de las empresas dominantes. Como usuarios, podemos comparar, informarnos y apoyar alternativas.</p>`,
        svg: L.ciclo("Efecto red: más usuarios atraen a más vendedores y la plataforma crece", "efecto red", ["más usuarios", "más vendedores", "más útil", "más datos"]),
      },
    ],
  },
  secciones: [4, 7, 4],
  niveles: "bbbbbmbmbm",
  ejercicios: [
    { nivel: "básico", q: "¿A partir de qué edad puedes dar tú mismo en España el consentimiento para que una red social trate tus datos?", sol: "A partir de los 14 años. Por debajo, el consentimiento lo dan los padres, madres o tutores." },
    { nivel: "básico", q: "¿Qué es el derecho a la desconexión digital?", sol: "El derecho de las personas trabajadoras a no responder correos, mensajes ni llamadas de trabajo fuera de su horario, en vacaciones o en descansos." },
    { nivel: "básico", q: "Explica la neutralidad de la red con una comparación.", sol: "Es como una autopista en la que todos los coches circulan con las mismas normas, sin carriles rápidos solo para quien paga. Las operadoras tratan igual todo el tráfico." },
    { nivel: "básico", q: "¿Qué diferencia hay entre identificarse con Cl@ve PIN y firmar con certificado digital?", sol: "Cl@ve PIN solo sirve para identificarte con un código que llega al móvil. El certificado digital (o el DNIe) permite además firmar documentos con validez legal." },
    { nivel: "básico", q: "¿Qué son los presupuestos participativos?", sol: "Un sistema en el que los vecinos proponen y votan en qué se gasta una parte del dinero público de su municipio." },
    { nivel: "medio", q: "Te llega un Bizum de un comprador de tu bici de segunda mano que dice «acepta para recibir el dinero». Al abrirlo, es una solicitud de pago. ¿Qué ocurre y qué haces?", sol: "Es un timo: si aceptas, eres tú quien paga. Hay que rechazarlo, no aceptar nunca solicitudes que no esperas, bloquear al usuario y avisar en la plataforma de compraventa." },
    { nivel: "medio", q: "¿Por qué no hay que compartir nunca el PIN de Cl@ve ni el certificado digital?", sol: "Porque con ellos otra persona podría hacer trámites y firmar documentos en tu nombre (pedir préstamos, cambiar datos, presentar declaraciones), con la misma validez que si fueras tú." },
    { nivel: "medio", q: "¿Qué ventaja tiene la cartera de identidad digital europea para la privacidad? Pon un ejemplo.", sol: "Permite compartir solo el dato necesario. Ejemplo: para entrar a un concierto para mayores de 18 basta con demostrar que eres mayor de edad, sin mostrar nombre, dirección ni fecha exacta de nacimiento." },
    { nivel: "medio", q: "Una app ofrece 7 días de prueba gratis y luego 9,99 € al mes. ¿Qué harías antes de aceptarla?", sol: "Leer las condiciones, poner un recordatorio para cancelar antes de que termine la prueba, comprobar cómo se cancela y vigilar los cargos del banco; mejor usar una tarjeta virtual con límite." },
    { nivel: "medio", q: "¿Qué es el efecto red? Pon un ejemplo con una aplicación de mensajería.", sol: "El valor de una plataforma aumenta cuantas más personas la usan. Una app de mensajería es útil porque la usan tus amigos; si todos están en una, cuesta mucho cambiarse a otra aunque sea mejor." },
    { nivel: "medio", q: "Busca en el portal de datos abiertos de tu ayuntamiento o comunidad un conjunto de datos y explica para qué podría servir.", sol: "Respuesta abierta. Ejemplo: datos de calidad del aire por horas → crear un aviso para personas asmáticas o comparar barrios con y sin tráfico." },
    { nivel: "medio", q: "Diferencia ciberactivismo y slacktivismo con un ejemplo de cada uno.", sol: "Ciberactivismo: una campaña organizada en redes con propuestas concretas que recoge firmas, presenta la petición al ayuntamiento y consigue un cambio. Slacktivismo: dar «me gusta» o compartir una causa sin informarse ni hacer nada más." },
    { nivel: "medio", q: "¿Por qué la «ley rider» fue importante para los repartidores de plataformas?", sol: "Reconoció que son trabajadores asalariados de la plataforma, con derecho a contrato, cotización a la Seguridad Social, vacaciones y salario mínimo, y no autónomos sin protección." },
    { nivel: "medio", q: "Indica dos obligaciones que la Ley de Servicios Digitales impone a las grandes plataformas.", sol: "Retirar con rapidez los contenidos ilegales notificados; explicar cómo funcionan sus algoritmos de recomendación y ofrecer una opción no basada en perfiles; no mostrar publicidad basada en perfiles a menores; y publicar informes de transparencia." },
    { nivel: "medio", q: "¿Por qué en una compra en línea es más seguro pagar con tarjeta o plataforma que con transferencia?", sol: "Con tarjeta o plataforma de pago se puede reclamar y recuperar el dinero si la tienda no envía el producto o es un fraude. Una transferencia es muy difícil de recuperar." },
    { nivel: "medio", q: "Explica qué derechos de privacidad tiene el alumnado respecto a las fotos que publica el instituto.", sol: "El centro necesita el consentimiento (de las familias si el alumno tiene menos de 14 años) para publicar fotos; se puede retirar en cualquier momento y pedir que se borren las ya publicadas." },
    { nivel: "avanzado", q: "Argumenta a favor o en contra: «El acceso a Internet debería ser un derecho básico».", sol: "A favor: hoy es imprescindible para estudiar, trabajar, hacer trámites e informarse; sin acceso se agrava la desigualdad. En contra o con matices: el derecho básico sería la educación o la información, y garantizar acceso universal tiene costes; aun así, la mayoría de organismos internacionales lo considera esencial." },
    { nivel: "avanzado", q: "Analiza qué pasaría si una operadora ofreciera «redes sociales gratis sin gastar datos» pero cobrara aparte el resto de webs. ¿Afecta a la neutralidad?", sol: "Sí: favorece a unas aplicaciones frente a otras y empuja a los usuarios hacia ellas, perjudicando a la competencia y a servicios nuevos. Este tipo de ofertas (zero rating) ha sido limitado por los reguladores europeos." },
    { nivel: "avanzado", q: "Explica cómo funciona la firma electrónica usando las ideas de clave pública y privada.", sol: "El documento se resume en una «huella» y se cifra con la clave privada del firmante, guardada en el chip o el certificado. Cualquiera puede comprobarla con la clave pública: si coincide, sabe quién firmó y que el documento no se ha cambiado." },
    { nivel: "avanzado", q: "Una web promete ganar un 30 % al mes invirtiendo en una criptomoneda nueva. Enumera cuatro señales de estafa.", sol: "Promete rentabilidades altísimas y seguras; mete prisa («solo hoy»); usa testimonios de famosos falsos; pide que traigas a más gente; la empresa no está registrada en la CNMV; y es difícil retirar el dinero." },
    { nivel: "avanzado", q: "Diseña una propuesta para los presupuestos participativos de tu municipio: qué, por qué, coste aproximado y cómo la difundirías.", sol: "Ejemplo: una zona wifi y enchufes en la biblioteca para reducir la brecha digital; coste aproximado 8.000 €; justificación con datos de alumnos sin conexión en casa; difusión con carteles, redes del instituto y una presentación en el consejo de juventud." },
    { nivel: "avanzado", q: "Compara las ventajas y los riesgos de la economía de plataformas para consumidores, trabajadores y pequeños comercios.", sol: "Consumidores: comodidad y precios, pero dependencia y uso de sus datos. Trabajadores: trabajo flexible, pero a veces precario. Pequeños comercios: acceso a muchos clientes, pero comisiones altas y dependencia del algoritmo de la plataforma." },
    { nivel: "avanzado", q: "Un instituto quiere instalar cámaras en los pasillos. Según los derechos digitales, ¿qué debe cumplir?", sol: "Tener una finalidad legítima y proporcionada (seguridad), informar con carteles visibles, no grabar zonas íntimas (baños, vestuarios), limitar quién ve las imágenes, borrarlas en un plazo corto (normalmente un mes) y respetar el RGPD." },
    { nivel: "avanzado", q: "¿Qué es el testamento digital y qué decisiones tomarías tú sobre tus cuentas?", sol: "Es dejar indicado qué se hará con tus cuentas, archivos y perfiles cuando fallezcas y quién se encarga. Ejemplo: que se conserven las fotos para la familia, se cierren las redes sociales y se borren los correos." },
    { nivel: "avanzado", q: "Investiga si tu ayuntamiento tiene portal de transparencia y de participación y evalúa su accesibilidad y facilidad de uso con tres criterios.", sol: "Respuesta abierta. Criterios posibles: ¿se encuentra fácilmente desde la web principal?, ¿la información está actualizada y en formatos abiertos?, ¿es accesible (contraste, móvil, lector de pantalla) y se entiende sin conocimientos técnicos?" },
  ],
  ejemplos: [
    { enunciado: "Necesitas un certificado de empadronamiento para una beca. Planifica el trámite en línea.", pasos: ["Buscar la sede electrónica oficial del ayuntamiento (comprobar el dominio).", "Elegir el método de identificación: Cl@ve PIN o DNIe con el móvil.", "Rellenar la solicitud y descargar el certificado firmado electrónicamente.", "Guardar el PDF y el justificante; adjuntarlo a la solicitud de la beca."], resultado: "Trámite hecho en minutos y con validez legal." },
    { enunciado: "Un vendedor de una app de segunda mano te pide que pagues por Bizum «para reservar» una consola a mitad de precio. Analiza el riesgo.", pasos: ["Precio muy bajo: señal de alerta.", "Bizum es instantáneo y no se puede anular.", "Pide pagar antes de ver el producto o fuera de la plataforma.", "Mejor opción: pago protegido dentro de la plataforma o entrega en mano."], resultado: "Alto riesgo de estafa; no pagar por Bizum a desconocidos." },
    { enunciado: "Calcula cuánto pagas al año por cinco suscripciones de 4,99 €, 7,99 €, 9,99 €, 2,99 € y 12,99 € al mes.", pasos: ["Suma mensual: 4,99 + 7,99 + 9,99 + 2,99 + 12,99 = 38,95 €.", "Anual: 38,95 · 12 = 467,40 €.", "Revisar cuáles se usan de verdad y cancelar las demás."], resultado: "467,40 € al año." },
  ],
  errores: ["Aceptar una «solicitud de Bizum» pensando que es un cobro: en realidad es un pago y no se puede anular."],
  cuarta: ["el derecho de cita", "ser más formal", "Está escrito sin faltas", "burbuja de datos", "Guardarlo en un cajón para siempre", "descargar música", "60 días", "admitir varios métodos de pago", "personas daltónicas solamente", ".org"],
  quiz: [
    { q: "El derecho a no responder mensajes del trabajo fuera de horario es…", o: ["el derecho al olvido", "la desconexión digital", "la neutralidad", "el desistimiento"], a: 1, e: "Lo recoge la Ley Orgánica 3/2018." },
    { q: "¿Qué organismo coordina los nombres de dominio de Internet?", o: ["La ICANN", "La AEPD", "La DGT", "La OMS"], a: 0, e: "Gestiona dominios y direcciones IP a nivel mundial." },
    { q: "El DNI electrónico permite…", o: ["solo viajar", "identificarse y firmar en línea", "pagar con Bizum", "conectarse al wifi"], a: 1, e: "Lleva un chip con certificados." },
    { q: "Un pago por Bizum…", o: ["se puede anular en 14 días", "es instantáneo y no se puede anular", "solo sirve en tiendas", "necesita un cheque"], a: 1, e: "Por eso se usa en algunos timos." },
    { q: "La autenticación reforzada en pagos exige…", o: ["solo el número de tarjeta", "confirmar el pago con la app o un código", "pagar en efectivo", "un correo electrónico"], a: 1, e: "Es obligatoria en la UE." },
    { q: "Los portales de datos abiertos ofrecen…", o: ["datos personales de vecinos", "datos públicos reutilizables", "contraseñas", "juegos"], a: 1, e: "Calidad del aire, transporte, presupuestos…" },
    { q: "El efecto red hace que una plataforma…", o: ["sea más lenta", "sea más útil cuantos más usuarios tiene", "pierda usuarios", "sea gratuita"], a: 1, e: "Por eso tienden a concentrarse." },
    { q: "La ley española que reconoció como asalariados a los repartidores de plataformas es…", o: ["la ley rider", "la LOMLOE", "el RGPD", "la ley de cookies"], a: 0, e: "Se aprobó en 2021." },
    { q: "Firmar peticiones o dar «me gusta» sin informarse ni hacer nada más se llama…", o: ["ciberactivismo", "slacktivismo", "netiqueta", "transparencia"], a: 1, e: "Cuesta poco y suele cambiar poco." },
    { q: "La Ley de Servicios Digitales prohíbe a las grandes plataformas…", o: ["tener usuarios menores", "mostrar a menores publicidad basada en perfiles", "usar HTTPS", "publicar vídeos"], a: 1, e: "Además las obliga a explicar sus algoritmos." },
  ],
  cuartaEx: ["El wifi es gratis en las bibliotecas", "Sí, si lo borras después", "los móviles se calientan"],
  examen: [
    { q: "La cartera de identidad digital europea permitirá…", o: ["pagar sin dinero", "mostrar solo el dato necesario, como ser mayor de edad", "eliminar el DNI", "votar por Internet en todo"], a: 1, e: "Mejora la privacidad." },
    { q: "Apagar Internet durante protestas es considerado por la ONU…", o: ["una medida técnica normal", "una vulneración de derechos humanos", "una forma de ahorrar", "un derecho de los gobiernos"], a: 1, e: "Impide la información y la expresión." },
    { q: "Un portal de transparencia publica…", o: ["contratos y sueldos públicos", "las contraseñas de los vecinos", "las notas del alumnado", "los mensajes privados"], a: 0, e: "Permite controlar el uso del dinero público." },
    { q: "Las criptomonedas…", o: ["tienen un valor estable", "pueden subir y bajar bruscamente y se usan en estafas", "las garantiza el Banco de España", "se pueden anular siempre"], a: 1, e: "Hay que extremar la prudencia." },
    { q: "Con menos de 14 años, el consentimiento para tratar tus datos lo dan…", o: ["tus amigos", "tus padres o tutores", "el instituto", "nadie"], a: 1, e: "Desde los 14 puedes darlo tú." },
  ],
  tarjetas: [
    ["Desconexión digital", "Derecho a no responder al trabajo fuera de horario."],
    ["Neutralidad de la red", "Todo el tráfico de Internet se trata por igual."],
    ["Cl@ve, certificado y DNIe", "Formas de identificarse (y firmar) ante la administración."],
    ["Efecto red", "Una plataforma es más útil cuantos más usuarios tiene."],
  ],
  glosario: [
    ["Ciudadanía digital", "Participación en la sociedad a través de la tecnología con derechos y responsabilidades."],
    ["Derechos digitales", "Derechos de las personas en el entorno digital, recogidos en la LO 3/2018."],
    ["Desconexión digital", "Derecho a no atender el trabajo fuera del horario."],
    ["Neutralidad de la red", "Principio de tratar por igual todo el tráfico de Internet."],
    ["ICANN", "Organismo que coordina los nombres de dominio y las direcciones IP."],
    ["Sede electrónica", "Web oficial de una administración para hacer trámites."],
    ["Certificado digital", "Archivo que acredita tu identidad en Internet y permite firmar."],
    ["Cl@ve", "Sistema para identificarse ante la administración con un PIN o contraseña."],
    ["Firma electrónica", "Firma con validez legal hecha con un certificado o el DNIe."],
    ["Autenticación reforzada", "Confirmación de un pago con un segundo factor."],
    ["Derecho de desistimiento", "Derecho a devolver una compra a distancia en 14 días sin dar explicaciones."],
    ["Datos abiertos", "Datos públicos disponibles para que cualquiera los reutilice."],
    ["Presupuestos participativos", "Sistema para que los vecinos decidan parte del gasto público."],
    ["Efecto red", "Aumento del valor de un servicio cuantos más usuarios tiene."],
    ["Economía de plataformas", "Actividad económica organizada a través de aplicaciones intermediarias."],
    ["Brecha digital", "Desigualdad en el acceso y el uso de la tecnología."],
    ["Accesibilidad", "Posibilidad de que cualquier persona use la tecnología."],
  ],
  situacion: {
    titulo: "Guía de trámites digitales para tu barrio",
    reto: "Muchas personas de tu barrio (mayores, recién llegados, familias sin ordenador) tienen dificultades para hacer trámites en línea. Vuestro equipo debe crear una guía práctica y accesible de los cinco trámites más útiles y probarla con personas reales.",
    pasos: [
      "Entrevistad a cinco personas del entorno para saber qué trámites necesitan y qué dificultades encuentran.",
      "Elegid cinco trámites (cita médica, empadronamiento, beca, cita en tráfico, certificado) y averiguad el método de identificación de cada uno.",
      "Redactad cada trámite paso a paso con capturas, en lenguaje claro y aplicando criterios de accesibilidad.",
      "Añadid un apartado de seguridad: cómo reconocer webs oficiales, no compartir el PIN y evitar timos de pago.",
      "Probad la guía con dos personas que no la conozcan, observad dónde se atascan y mejoradla.",
    ],
    producto: "Una guía en PDF accesible (y una versión impresa) con los cinco trámites y una ficha de seguridad.",
    evaluacion: ["Los pasos son correctos, completos y están actualizados.", "El lenguaje es claro y el documento cumple criterios de accesibilidad.", "Se incluyen consejos de seguridad pertinentes.", "La guía se mejora a partir de la prueba con usuarios reales."],
  },
  objetivos: ["Conocer los derechos digitales en la escuela y el trabajo y la neutralidad de la red", "Usar la identidad electrónica y los pagos digitales con seguridad"],
  fuentes: [{ t: "Ley Orgánica 3/2018 de Protección de Datos y garantía de los derechos digitales (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673" }],
});
