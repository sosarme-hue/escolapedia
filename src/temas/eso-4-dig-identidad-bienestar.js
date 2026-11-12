// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Identidad y bienestar digital",
  minutos: 40,
  objetivos: ["Entender qué son la identidad y la huella digital y cómo se construyen", "Reconocer riesgos como el ciberacoso, el sexting o la suplantación", "Usar la tecnología de forma equilibrada y saludable"],
  claves: ["identidad digital", "huella digital", "reputación", "ciberacoso", "desconexión", "uso saludable"],
  pregunta: {
    texto: "Una empresa va a contratar a alguien de 25 años y busca su nombre en Internet. ¿Qué podría encontrar de lo que esa persona publicó a tu edad?",
    respuesta: "Casi todo. Fotos, comentarios, «me gusta» y vídeos dejan una <mark>huella digital</mark> que dura años, aunque borres la publicación: otros pueden haberla guardado o compartido. Por eso conviene pensar antes de publicar: «¿me importaría que esto lo viera mi familia, un profesor o mi futuro jefe?».",
  },
  bloques: [
    {
      html: `<h3>Identidad y huella digital</h3><p>La <b>identidad digital</b> es la imagen que los demás tienen de ti en Internet: tus perfiles, lo que publicas y lo que otros publican sobre ti. La <b>huella digital</b> es el rastro que dejas, a veces sin darte cuenta: la huella <b>activa</b> (lo que publicas, comentas o compartes) y la <b>pasiva</b> (búsquedas, ubicación, cookies). Juntas forman tu <mark>reputación online</mark>. Busca tu nombre de vez en cuando y cuida lo que aparece.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Huella de un pie formada por iconos de publicaciones, búsquedas y ubicación">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="100" cy="110" rx="34" ry="52" fill="var(--pen)"/>${[[72, 46, 10], [92, 38, 9], [110, 38, 8], [126, 44, 7], [138, 54, 6]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="var(--pen)"/>`).join("")}
        <g ${F} font-size="9" font-weight="700" fill="#fff" text-anchor="middle"><text x="100" y="92">fotos</text><text x="100" y="112">likes</text><text x="100" y="132">ubicación</text></g>
        <rect x="160" y="54" width="86" height="26" rx="6" fill="var(--leaf)"/><text x="203" y="71" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>activa</text>
        <rect x="160" y="108" width="86" height="26" rx="6" fill="var(--muted)"/><text x="203" y="125" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>pasiva</text>
        <g ${F} font-size="9" fill="var(--ink)" text-anchor="middle"><text x="203" y="94">lo que publicas</text><text x="203" y="148">lo que se registra</text></g>
      </svg>`,
    },
    {
      html: `<h3>Pensar antes de publicar</h3><p>Antes de subir algo, pregúntate: ¿es <b>verdad</b>?, ¿puede <b>hacer daño</b> a alguien?, ¿tengo <b>permiso</b> de quienes salen en la foto?, ¿da datos como mi colegio, mi casa o dónde estoy ahora? Lo que se publica escapa a tu control: se puede capturar, reenviar y sacar de contexto. Usa <b>perfiles privados</b>, acepta solo a gente que conoces y recuerda que detrás de una cuenta puede haber alguien que <mark>no es quien dice ser</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Semáforo de preguntas antes de publicar">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="24" y="20" width="56" height="140" rx="14" fill="var(--ink)"/>
        ${[["var(--red)", "¿hace daño a alguien?"], ["var(--sun)", "¿tengo permiso?"], ["var(--leaf)", "¿es verdad y es mío?"]].map(([c, t], i) => `<circle cx="52" cy="${48 + i * 42}" r="16" fill="${c}"/><text x="94" y="${52 + i * 42}" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <text x="94" y="168" font-size="9" fill="var(--muted)" ${F}>si dudas, no lo publiques</text>
      </svg>`,
    },
    {
      html: `<h3>Riesgos en las relaciones digitales</h3><p>El <b>ciberacoso</b> es acosar, humillar o excluir a alguien de forma repetida por medios digitales; no hay que reenviar, sino <b>apoyar a la víctima</b> y avisar a un adulto. El <b>sexting</b> (enviar imágenes íntimas) es muy arriesgado: la imagen puede difundirse, y difundir la de otra persona es delito. El <b>grooming</b> es cuando un adulto se gana la confianza de un menor con fines sexuales. Ante cualquiera de ellos: <mark>no respondas, guarda pruebas, bloquea y pide ayuda</mark>. En España, el teléfono gratuito <b>017</b> de INCIBE atiende dudas de ciberseguridad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro pasos ante un acoso en línea: no responder, guardar pruebas, bloquear y pedir ayuda">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["no respondas", "var(--red)"], ["guarda pruebas", "var(--sun)"], ["bloquea y denuncia", "var(--pen)"], ["pide ayuda", "var(--leaf)"]].map(([t, c], i) => `<rect x="30" y="${18 + i * 36}" width="200" height="28" rx="14" fill="${c}"/><text x="48" y="${37 + i * 36}" font-size="12" font-weight="700" fill="#fff" ${F}>${i + 1}. ${t}</text>`).join("")}
        <text x="130" y="168" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>ayuda: adulto de confianza · 017</text>
      </svg>`,
    },
    {
      html: `<h3>Bienestar digital</h3><p>Las aplicaciones están diseñadas para que pases el máximo tiempo en ellas: notificaciones, vídeos que se reproducen solos, «scroll infinito» y recompensas en forma de «me gusta». Un uso excesivo puede quitar <b>horas de sueño</b>, concentración y tiempo con amigos y deporte. Algunas pistas de <mark>uso problemático</mark>: no poder dejar el móvil, mal humor sin él, mentir sobre el tiempo de uso o bajar el rendimiento. También afecta al cuerpo: vista cansada, mala postura y dolor de cuello.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza entre tiempo de pantalla y sueño, deporte, amigos y estudio">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 40 V 150 M96 150 H 164" stroke="var(--ink)" stroke-width="4"/><path d="M40 60 L 220 40" stroke="var(--ink)" stroke-width="4"/>
        <rect x="30" y="64" width="40" height="64" rx="6" fill="var(--ink)"/><rect x="35" y="72" width="30" height="46" rx="2" fill="var(--inf)"/>
        ${[["sueño", "var(--pen)"], ["deporte", "var(--leaf)"], ["amigos", "var(--sun)"]].map(([t, c], i) => `<rect x="${172 + (i % 2) * 6}" y="${46 + i * 20}" width="58" height="18" rx="5" fill="${c}"/><text x="${201 + (i % 2) * 6}" y="${59 + i * 20}" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
        <text x="50" y="146" text-anchor="middle" font-size="10" font-weight="700" fill="var(--inf)" ${F}>pantalla</text>
        <text x="130" y="172" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>buscar el equilibrio</text>
      </svg>`,
    },
    {
      html: `<h3>Hábitos para un uso saludable</h3><p>Algunas ideas que funcionan: <b>desactivar notificaciones</b> que no son importantes; dejar el móvil <b>fuera del dormitorio</b> por la noche y apagar pantallas una hora antes de dormir; usar las herramientas de <b>tiempo de pantalla</b> para ver cuánto lo usas de verdad; aplicar la regla <mark>20-20-20</mark> (cada 20 minutos, mirar algo a 20 pies, unos 6 metros, durante 20 segundos); y reservar momentos sin pantallas, como las comidas. El <b>derecho a la desconexión</b> también existe en el trabajo de los adultos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Regla 20-20-20: cada 20 minutos, mirar a 6 metros durante 20 segundos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["20", "minutos", "var(--pen)"], ["6 m", "de distancia", "var(--leaf)"], ["20", "segundos", "var(--sun)"]].map(([n, t, c], i) => `<circle cx="${50 + i * 80}" cy="66" r="30" fill="${c}"/><text x="${50 + i * 80}" y="76" text-anchor="middle" font-size="${n.length > 2 ? 20 : 26}" font-weight="700" fill="#fff" ${D}>${n}</text><text x="${50 + i * 80}" y="114" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <g ${F} font-size="10" fill="var(--ink)" text-anchor="middle"><text x="130" y="144">sin notificaciones inútiles</text><text x="130" y="162">móvil fuera del dormitorio</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Lo que dice de ti tu huella digital",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Comparación entre huella digital positiva y negativa">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Huella que suma", "var(--leaf)", ["proyectos y aficiones", "comentarios respetuosos", "voluntariado, deporte", "perfil privado y cuidado"]], ["Huella que resta", "var(--red)", ["insultos y burlas", "fotos de otros sin permiso", "datos de casa y colegio", "bulos compartidos"]]]
        .map(([n, c, l], i) => `<rect x="${20 + i * 310}" y="20" width="290" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${165 + i * 310}" y="56" text-anchor="middle" font-size="20" font-weight="700" fill="${c}" ${D}>${n}</text>
          ${l.map((t, j) => `<text x="${50 + i * 310}" y="${92 + j * 26}" font-size="14" fill="var(--ink)" ${F}>${i ? "✗" : "✓"} ${t}</text>`).join("")}`).join("")}
    </svg>`,
  },
  video: { id: "xMaajB6WXrA", titulo: "Huella Digital y Privacidad", canal: "Fundación Movistar Argentina", vistas: 745502, megusta: 0, busqueda: "huella digital adolescentes privacidad" },
  quiz: [
    { q: "Tus búsquedas y tu ubicación registradas sin que publiques nada forman tu huella…", o: ["activa", "pasiva", "temporal"], a: 1, e: "Se genera sin que tú la compartas a propósito." },
    { q: "Si borras una foto que publicaste, ¿desaparece seguro de Internet?", o: ["Sí, siempre", "No, alguien pudo guardarla o compartirla", "Solo si era en blanco y negro"], a: 1, e: "Por eso hay que pensar antes de publicar." },
    { q: "Ves que en un grupo se burlan una y otra vez de un compañero. ¿Qué haces?", o: ["Reenviar el meme", "Apoyarle, no participar y avisar a un adulto", "Salir del grupo sin decir nada nunca"], a: 1, e: "El silencio y el reenvío alimentan el ciberacoso." },
    { q: "¿Qué es el grooming?", o: ["Un adulto que engaña a un menor para obtener contenido sexual", "Un filtro de fotos", "Una red social"], a: 0, e: "Es un delito: hay que pedir ayuda y denunciar." },
    { q: "La regla 20-20-20 sirve para…", o: ["descansar la vista", "subir más fotos", "cargar el móvil"], a: 0, e: "Mirar lejos relaja los músculos del ojo." }
  ],
  examen: [
    { q: "¿Qué forma tu identidad digital?", o: ["Solo tu DNI", "Lo que publicas tú y lo que otros publican sobre ti", "Solo tu contraseña"], a: 1, e: "Es la imagen que los demás tienen de ti en la red." },
    { q: "¿Cuál es una pista de uso problemático del móvil?", o: ["Usarlo para hacer deberes", "Ponerse de mal humor sin él y perder horas de sueño", "Tener pocas apps"], a: 1, e: "Afecta a otras áreas de la vida." },
    { q: "Difundir una imagen íntima de otra persona sin permiso…", o: ["es legal si te la mandó", "es delito", "solo está mal si es mayor de edad"], a: 1, e: "Atenta contra su intimidad, y en menores es especialmente grave." },
  ],
  feynman: ["Qué es la identidad digital y la diferencia entre huella activa y pasiva", "Qué preguntas hacerse antes de publicar", "Qué hacer ante el ciberacoso, el sexting o el grooming", "Cómo diseñan las apps para engancharnos", "Tres hábitos de uso saludable"],
  mapa: mapa("IDENTIDAD Y BIENESTAR", "var(--eso)", [
    ["Identidad", "perfil · reputación", "var(--pen)"],
    ["Huella", "activa · pasiva", "var(--sun)"],
    ["Riesgos", "ciberacoso · grooming", "var(--red)"],
    ["Bienestar", "sueño · desconexión", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["¿Qué es la huella digital?", "El rastro que dejamos en Internet, a propósito o sin darnos cuenta."],
    ["Huella activa", "Lo que publicamos, comentamos o compartimos."],
    ["Cuatro pasos ante el acoso", "No responder, guardar pruebas, bloquear y pedir ayuda."],
    ["¿Qué es el 017?", "La línea gratuita de ayuda en ciberseguridad de INCIBE."],
    ["Regla 20-20-20", "Cada 20 minutos, mirar a unos 6 metros durante 20 segundos."],
  ],
  familias: ["Buscad juntos vuestros nombres en Internet y comentad qué aparece.", "Acordad un lugar fuera de los dormitorios donde cargar los móviles por la noche.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Bienestar digital: identidad, reputación y huella digital; riesgos en las relaciones digitales; uso saludable y equilibrado de la tecnología (RD 217/2022, Digitalización 4º).",
    ideas: ["Que cada alumno analice su tiempo de pantalla durante una semana y lo grafique.", "Simular la búsqueda de un candidato a un trabajo a partir de perfiles ficticios.", "Debate: ¿deberían las apps limitar el scroll infinito a menores?"],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "INCIBE, Línea de Ayuda en Ciberseguridad 017", url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad" },
  ],
  revisado: "2026-11-12",
};
