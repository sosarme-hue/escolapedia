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
