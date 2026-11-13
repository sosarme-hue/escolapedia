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
        ${[["sueño", "var(--pen)"], ["deporte", "var(--leaf)"], ["amigos", "var(--sun)"]].map(([t, c], i) => `<rect x="${172 + (i % 2) * 6}" y="${50 + i * 20}" width="58" height="18" rx="5" fill="${c}"/><text x="${201 + (i % 2) * 6}" y="${63 + i * 20}" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Entender cómo los algoritmos y el diseño de las apps influyen en lo que vemos", "Reconocer los riesgos de las apuestas y actuar ante el ciberacoso"],
  tras: {
    "Pensar antes de publicar": [
      { html: `<h3>Reputación digital y futuro profesional</h3><p>La <b>reputación digital</b> es la opinión que otros se forman de ti a partir de lo que encuentran en Internet. Muchas empresas y universidades buscan el nombre de los candidatos antes de una entrevista. Un comentario ofensivo de hace años puede pesar, pero un perfil cuidado también puede <mark>jugar a tu favor</mark>: un blog con tus proyectos, un portafolio de dibujos, un canal de divulgación o tu participación en voluntariados. Conviene buscar tu nombre de vez en cuando, revisar la privacidad de tus perfiles y separar lo personal de lo público.</p>` },
    ],
    "Riesgos en las relaciones digitales": [
      { html: `<h3>Ciberacoso: el papel de los testigos</h3><p>En el <b>ciberacoso</b> no solo están la víctima y el agresor: hay muchos <b>testigos</b> que ven los mensajes, los comparten, ríen o callan. Los acosadores buscan público, así que los testigos tienen un poder enorme. Un testigo activo <b>no reenvía</b> ni da «me gusta», <b>apoya</b> a la víctima en privado, <b>reporta</b> el contenido a la plataforma y <mark>avisa a un adulto</mark> o al centro. Si eres la víctima: no respondas, guarda capturas, bloquea y cuéntalo. En España, la línea gratuita y confidencial de la Fundación ANAR (900 20 20 10) y el 017 del INCIBE ofrecen ayuda.</p>` },
    ],
    "Bienestar digital": [
      { html: `<h3>Algoritmos y diseño persuasivo</h3><p>Las redes sociales muestran a cada persona un contenido distinto elegido por un <b>algoritmo</b> de recomendación, que aprende de lo que miras, cuánto tiempo y a qué das «me gusta». Su objetivo es que pases <b>el máximo tiempo posible</b>, porque así ven más anuncios. Por eso usan técnicas de <b>diseño persuasivo</b>: el scroll infinito, la reproducción automática, las notificaciones, las rachas y las recompensas variables, como una tragaperras. El algoritmo también puede encerrarte en una <mark>burbuja de filtro</mark>, en la que solo ves opiniones que confirman las tuyas. Conocer estos trucos ayuda a decidir tú cuándo parar.</p>`, video: { id: "RSJrBEhdZxw", titulo: "Qué son los algoritmos y cómo aprenden de nosotros", canal: "BBC News Mundo", vistas: 609749 } },
      { html: `<h3>Apuestas en línea y videojuegos</h3><p>Las <b>apuestas deportivas</b> y los casinos en línea están prohibidos para menores, pero su publicidad llega a muchos adolescentes. Funcionan con <b>refuerzo intermitente</b>: ganar de vez en cuando engancha más que ganar siempre. A largo plazo <mark>la banca siempre gana</mark>, porque las cuotas están calculadas para ello. En los videojuegos aparecen mecánicas parecidas, como las <b>cajas de botín</b> (loot boxes) con premios al azar que se compran con dinero real. Señales de alerta: pensar a menudo en apostar, gastar más de lo previsto, mentir o intentar recuperar lo perdido. La ludopatía es una adicción y tiene tratamiento.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "En el grupo de clase circula un meme que se ríe de un compañero. ¿Qué puedes hacer como testigo?", pasos: ["No reenviarlo ni reaccionar con risas: el acoso se alimenta del público.", "Escribir en privado al compañero para apoyarle.", "Reportar la imagen y contárselo a un tutor o a un adulto de confianza."], resultado: "Ser un testigo activo: no difundir, apoyar y avisar." },
    { enunciado: "Una app de apuestas ofrece «10 € gratis al registrarte». Analiza la oferta.", pasos: ["Es ilegal para menores de 18 años.", "El regalo suele exigir apostar varias veces la cantidad antes de poder retirarla.", "Busca enganchar: las cuotas están diseñadas para que la casa gane a la larga."], resultado: "Es un gancho comercial, no un regalo." },
    { enunciado: "Pasas 4 h al día en redes y quieres bajar a 2 h. Diseña un plan.", pasos: ["Mide el tiempo real con el bienestar digital del móvil.", "Pon un límite diario a las apps y desactiva las notificaciones que no son de personas.", "Deja el móvil fuera de la habitación por la noche y sustituye ese tiempo por otra actividad."], resultado: "Medir, limitar, quitar estímulos y sustituir hábitos." },
  ],
  errores: [
    "Creer que todos ven lo mismo en las redes: cada perfil recibe un contenido elegido por el algoritmo.",
    "Pensar que reenviar un contenido ofensivo «para que lo vean» no es participar en el acoso.",
    "Creer que con un buen método se puede ganar a las apuestas a largo plazo.",
    "Pensar que las cajas de botín no tienen nada que ver con el juego de azar.",
    "Borrar los mensajes del acoso antes de guardar pruebas.",
  ],
  ejercicios: [
    { q: "Diferencia entre huella digital activa y pasiva, con un ejemplo de cada una.", sol: "Activa: lo que publicas tú, como una foto. Pasiva: lo que se registra sin que lo publiques, como tu ubicación o tu historial." },
    { q: "Indica cuatro preguntas que hacerte antes de publicar algo.", sol: "¿Me importaría que lo viera mi familia o un futuro jefe? ¿Hiere a alguien? ¿Aparecen otras personas sin permiso? ¿Revela datos personales?" },
    { q: "¿Qué es el grooming y qué señales lo delatan?", sol: "El acoso de un adulto que se gana la confianza de un menor con fines sexuales. Señales: halagos, regalos, petición de secreto, de fotos o de quedar." },
    { q: "Explica qué es una burbuja de filtro.", sol: "La situación en la que el algoritmo solo te muestra contenidos que confirman tus gustos y opiniones." },
    { q: "Nombra tres técnicas de diseño persuasivo de las apps.", sol: "Scroll infinito, reproducción automática y notificaciones (también rachas y recompensas variables)." },
    { q: "¿Qué puede hacer un testigo de ciberacoso?", sol: "No difundir, apoyar a la víctima, reportar el contenido y avisar a un adulto." },
    { q: "¿Por qué «la banca siempre gana» en las apuestas?", sol: "Porque las cuotas se calculan para que, sumando todas las apuestas, la casa obtenga beneficio." },
    { q: "Indica tres señales de una posible adicción a las apuestas o a las pantallas.", sol: "Pensar en ello constantemente, perder el control del tiempo o el dinero y mentir u ocultarlo (también dejar otras actividades)." },
    { q: "Indica tres hábitos saludables con el móvil.", sol: "No usarlo una hora antes de dormir, desactivar notificaciones innecesarias y dejarlo fuera durante el estudio y las comidas." },
    { q: "¿Cómo puedes mejorar tu reputación digital?", sol: "Revisando la privacidad, eliminando contenidos inadecuados y creando contenidos positivos como proyectos o un portafolio." },
  ],
  quiz: [
    { q: "El objetivo principal del algoritmo de una red social es…", o: ["informarte", "que pases el máximo tiempo", "ahorrarte datos"], a: 1, e: "Más tiempo, más anuncios." },
    { q: "El scroll infinito es un ejemplo de…", o: ["diseño persuasivo", "cifrado", "copia de seguridad"], a: 0, e: "Elimina el punto de parada." },
    { q: "Un testigo de ciberacoso debe…", o: ["reenviar para avisar", "callar", "apoyar a la víctima y avisar"], a: 2, e: "El acoso necesita público." },
    { q: "Las apuestas en línea para menores…", o: ["están permitidas con permiso", "están prohibidas", "son legales si son pequeñas"], a: 1, e: "Solo mayores de 18." },
    { q: "Las cajas de botín de los videojuegos se parecen a…", o: ["los juegos de azar", "las copias de seguridad", "los antivirus"], a: 0, e: "Premios al azar por dinero." },
  ],
  tarjetas: [
    ["Burbuja de filtro", "Situación en que el algoritmo solo te muestra lo que confirma tus gustos."],
    ["Diseño persuasivo", "Técnicas que buscan que pases más tiempo en una app."],
    ["Testigo activo", "Quien, ante un acoso, no difunde, apoya a la víctima y avisa."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 100,
  revisado: "2026-11-13",
  lectura: {
    titulo: "Lo que Google sabía de Daniel",
    html: `<p>Daniel tenía 22 años y había conseguido una entrevista para el trabajo de sus sueños. Antes de la cita, la responsable de selección escribió su nombre en un buscador. Encontró su currículum y un proyecto de robótica premiado en el instituto, pero también un vídeo de cuando tenía 15 años burlándose de un compañero y unos comentarios ofensivos en un foro de videojuegos que él ya ni recordaba. La entrevista fue mucho más incómoda de lo que esperaba.</p>
      <p>Lo que hacemos en Internet construye una imagen de nosotros que otros ven, a veces durante años. Pero la vida digital no es solo un riesgo para el futuro: también afecta a cómo nos sentimos hoy, a cómo dormimos, a cómo tratamos a los demás y a lo que creemos que es verdad. En este tema aprenderás a gestionar tu identidad y tu reputación, a reconocer y frenar el ciberacoso y los bulos, a entender cómo las aplicaciones capturan tu atención y a construir unos hábitos digitales que te hagan sentir bien.</p>`,
  },
  svgs: {
    "Reputación digital y futuro profesional": L.comparar("Lo que suma y lo que resta a la reputación digital", ["Suma", ["proyectos y premios", "voluntariado", "opiniones respetuosas", "perfil profesional"]], ["Resta", ["insultos y burlas", "fotos comprometidas", "bulos compartidos", "datos de otros"]]),
    "Ciberacoso: el papel de los testigos": L.flujo("Qué puede hacer un testigo de ciberacoso", ["No reír ni reenviar", "Apoyar a la víctima en privado", "Guardar pruebas", "Avisar a un adulto o al 017", "Reportar en la plataforma"], { t: "Testigo activo" }),
    "Algoritmos y diseño persuasivo": L.ciclo("Ciclo del algoritmo de recomendación: miras, el algoritmo aprende, te muestra más y pasas más tiempo", "algoritmo", ["miras un vídeo", "aprende tus gustos", "te muestra más", "pasas más tiempo"]),
    "Apuestas en línea y videojuegos": L.barras("Ejemplo: de cada 100 euros apostados, cuánto vuelve de media a los jugadores y cuánto se queda la casa", [["Vuelve al jugador", 93], ["Se queda la casa", 7]], { t: "De cada 100 € apostados", unidad: " €" }),
  },
  tras: {
    "Identidad y huella digital": [
      {
        html: `<h3>Controlar tu información: el derecho al olvido</h3><p>Una buena costumbre es hacer <b>egosurfing</b> de vez en cuando: buscar tu nombre y tus apodos en varios buscadores, también en imágenes, para saber qué ven los demás. Si encuentras algo que no te gusta, empieza por lo más sencillo: borrar la publicación si es tuya, pedir a quien la subió que la retire o usar la opción de denuncia de la red social. Cierra también las cuentas antiguas que ya no uses, porque siguen mostrando datos y pueden ser robadas.</p>
          <p>La ley te protege. El <b>Reglamento General de Protección de Datos</b> y la ley española reconocen el <mark>derecho de supresión</mark>, conocido como <b>derecho al olvido</b>: puedes pedir a un buscador que deje de mostrar enlaces con información tuya que sea inexacta, antigua o que ya no tenga interés público. En el caso de menores, las redes sociales deben borrar los datos que se publicaron cuando eran niños si así lo piden. Si una empresa no responde, se puede reclamar ante la <b>Agencia Española de Protección de Datos</b> (AEPD), que además tiene un <b>Canal Prioritario</b> para retirar con urgencia imágenes sexuales o violentas difundidas sin permiso. Aun así, lo más eficaz es no publicar aquello que no querrías ver dentro de diez años.</p>`,
        svg: L.flujo("Pasos para controlar tu información en Internet", ["Buscar tu nombre (egosurfing)", "Borrar o pedir que lo retiren", "Denunciar en la plataforma", "Ejercer el derecho al olvido", "Reclamar ante la AEPD"], { t: "Recuperar el control" }),
      },
    ],
    "Pensar antes de publicar": [
      {
        html: `<h3>Netiqueta y comunicación respetuosa</h3><p>La <b>netiqueta</b> es el conjunto de normas de buena educación en Internet. En la comunicación escrita faltan el tono de voz, los gestos y la mirada, así que es fácil malinterpretar un mensaje: una broma puede parecer un ataque y un «vale.» con punto puede sonar seco. Por eso conviene <mark>leer dos veces</mark> antes de enviar, usar emojis con sentido y no escribir en mayúsculas, que equivale a gritar. Si un mensaje te enfada, espera un rato antes de responder: lo que se escribe en caliente suele traer problemas.</p>
          <p>Cada espacio tiene sus normas. En un correo formal a un profesor o a una empresa se usa un asunto claro, un saludo, frases completas y una despedida. En el grupo de clase conviene no saturar con mensajes, respetar los horarios de descanso y no mencionar a nadie para ridiculizarle. En los foros y comentarios, se critican las ideas, no a las personas. Y en las videollamadas, cámara y micrófono se activan cuando corresponde. El anonimato aparente hace que algunas personas digan cosas que nunca dirían cara a cara: la regla de oro es tratar a los demás en la red como te gustaría que te trataran a ti.</p>`,
        svg: L.cajas("Normas de netiqueta", [["Relee", "antes de|enviar"], ["SIN GRITOS", "nada de|mayúsculas"], ["Espera", "si estás|enfadado"], ["Ideas", "critica ideas,|no personas"]], { t: "Netiqueta" }),
      },
    ],
    "Riesgos en las relaciones digitales": [
      {
        html: `<h3>Sexting, sextorsión y discurso de odio</h3><p>El <b>sexting</b> es enviar fotos o vídeos íntimos propios por el móvil. Aunque se haga con confianza, una vez enviada la imagen se pierde el control sobre ella: una ruptura, un móvil robado o una captura pueden hacer que se difunda. La <b>sextorsión</b> es el chantaje con esas imágenes: «Si no me mandas más o no me pagas, la publico». Ante una sextorsión, <mark>no hay que ceder</mark> al chantaje: se guardan las pruebas, se bloquea al agresor y se pide ayuda a un adulto, al 017 o a la policía. Difundir imágenes íntimas de otra persona sin su permiso es delito, aunque te las hayan enviado a ti, y si la persona es menor las penas son mucho mayores.</p>
          <p>El <b>discurso de odio</b> son los mensajes que insultan, humillan o incitan a la violencia contra personas por su origen, religión, orientación sexual, discapacidad o cualquier otra característica. En redes se propaga rápido porque genera reacciones. No es libertad de expresión: los casos graves son delito. Frente a él se puede <b>reportar</b> el contenido, no compartirlo ni para criticarlo (porque le da más alcance) y apoyar a las personas atacadas. Las plataformas están obligadas por la ley europea de servicios digitales a retirar con rapidez los contenidos ilegales que se les notifican.</p>`,
        svg: L.cajas("Qué hacer ante una sextorsión o un mensaje de odio", [["No ceder", "al chantaje"], ["Pruebas", "capturas|con fecha"], ["Bloquear", "y reportar"], ["Pedir ayuda", "adulto · 017|policía"]], { t: "Cómo responder" }),
      },
    ],
    "Ciberacoso: el papel de los testigos": [
      {
        html: `<h3>Desinformación y bulos</h3><p>Un <b>bulo</b> es una información falsa que se difunde como si fuera verdadera. La <b>desinformación</b> se crea a propósito para engañar, ganar dinero con los clics o influir en lo que piensa la gente; la información errónea, en cambio, se comparte sin mala intención. Los bulos funcionan porque apelan a las <mark>emociones</mark> (miedo, indignación, sorpresa) y porque confirman lo que ya pensamos. Hoy, además, la inteligencia artificial permite crear imágenes, audios y vídeos falsos muy realistas, los <b>deepfakes</b>.</p>
          <p>Antes de compartir algo, aplica un pequeño método de verificación. ¿Quién lo publica y es una fuente fiable? ¿Lo cuentan otros medios serios? ¿Tiene fecha o es una noticia antigua que vuelve a circular? ¿El titular coincide con el texto? Busca la imagen con la <b>búsqueda inversa</b> para ver dónde apareció por primera vez y consulta webs de <b>verificación</b> (<i>fact-checking</i>) como Maldita o Newtral. Desconfía de mensajes que piden «¡compártelo antes de que lo borren!». Si dudas, no lo compartas: frenar un bulo también es una forma de ciudadanía digital.</p>`,
        svg: L.flujo("Método para comprobar una información antes de compartirla", ["¿Quién lo publica?", "¿Lo cuentan otros medios?", "¿Es actual? Mira la fecha", "Búsqueda inversa de la imagen", "Si dudas, no lo compartas"], { t: "Antes de compartir" }),
      },
    ],
    "Bienestar digital": [
      {
        html: `<h3>Dependencia y nomofobia</h3><p>Usar mucho el móvil no significa tener una adicción, pero hay señales de que el uso se ha vuelto <b>problemático</b>: necesitar el móvil cada vez más tiempo para sentirse bien, ponerse nervioso o de mal humor cuando no se tiene, mentir sobre el tiempo de uso, dejar de lado amistades, deporte o estudios y no conseguir reducirlo aunque se intente. La <b>nomofobia</b> es el miedo irracional a quedarse sin móvil, sin batería o sin cobertura.</p>
          <p>Detrás está el sistema de <b>recompensa</b> del cerebro: cada «me gusta», mensaje o vídeo sorprendente libera <mark>dopamina</mark>, una sustancia que da placer y nos empuja a repetir. Como las recompensas llegan de forma imprevisible, revisamos el móvil una y otra vez «por si acaso», igual que en una máquina tragaperras. En la adolescencia el cerebro es especialmente sensible a esta recompensa y a la aprobación social. Otro efecto frecuente es la <b>comparación social</b>: vemos la vida editada de los demás y la comparamos con nuestra vida real, lo que puede afectar a la autoestima. Si sientes que el móvil te controla a ti, habla con alguien de confianza: es un problema frecuente y tiene solución.</p>`,
        svg: L.estrella("Señales de un uso problemático del móvil", "Señales", ["más tiempo", "mal humor sin él", "menos sueño", "deja amigos", "miente", "no puede parar"]),
        video: { id: "SQunsz5fkiw", titulo: "Nomofobia: el trastorno de ansiedad de la generación del celular", canal: "DW Español", vistas: 90774 },
      },
    ],
    "Apuestas en línea y videojuegos": [
      {
        html: `<h3>Salud física y pantallas</h3><p>Las pantallas también afectan al cuerpo. La <b>vista</b> se cansa porque, al mirar de cerca, parpadeamos menos y los ojos se secan; la regla <b>20-20-20</b> ayuda: cada 20 minutos, mirar 20 segundos algo a 6 metros (20 pies). La <b>postura</b> importa: inclinar la cabeza 60 grados para mirar el móvil equivale a cargar unos 27 kilos sobre el cuello, el llamado «cuello de texto». Conviene subir el móvil a la altura de los ojos y, con el ordenador, tener la pantalla a un brazo de distancia, con el borde superior a la altura de la vista y los pies apoyados.</p>
          <p>El <b>sueño</b> es lo que más sufre. La luz azul de las pantallas y, sobre todo, la actividad emocionante (chatear, jugar, ver vídeos) retrasan la hormona del sueño, la <mark>melatonina</mark>. Un adolescente necesita entre 8 y 10 horas; dormir menos afecta a la memoria, al humor y al rendimiento en clase y en el deporte. Otros riesgos son el <b>sedentarismo</b> (la OMS recomienda al menos 60 minutos diarios de actividad física a tu edad) y la pérdida de audición por el volumen alto de los auriculares: no superes el 60 % del volumen durante más de 60 minutos seguidos.</p>`,
        svg: L.cajas("Cuidados físicos con las pantallas", [["Vista", "regla|20-20-20"], ["Cuello", "pantalla a la|altura de los ojos"], ["Sueño", "8-10 h, sin|pantallas antes"], ["Oído", "regla|60-60"]], { t: "Cuerpo y pantallas" }),
      },
    ],
  },
  secciones: [5, 4, 6],
  niveles: "bbmmbbmmbm",
  ejercicios: [
    { nivel: "básico", q: "¿Qué es el egosurfing y para qué sirve?", sol: "Buscar tu propio nombre en Internet. Sirve para saber qué información tuya pueden encontrar otras personas y corregir o retirar lo que no te gusta." },
    { nivel: "básico", q: "Nombra tres normas de netiqueta para el grupo de WhatsApp de clase.", sol: "No saturar con mensajes ni stickers, respetar los horarios de descanso, no reenviar fotos de nadie sin permiso, no ridiculizar a nadie y no escribir en mayúsculas." },
    { nivel: "básico", q: "¿Qué es un bulo? ¿Y un deepfake?", sol: "Un bulo es una información falsa que se difunde como verdadera. Un deepfake es un vídeo, imagen o audio falso creado con inteligencia artificial que imita a una persona real." },
    { nivel: "básico", q: "Explica la regla 20-20-20.", sol: "Cada 20 minutos de pantalla, mirar durante 20 segundos algo que esté a unos 6 metros (20 pies) para relajar la vista." },
    { nivel: "básico", q: "¿Qué es la nomofobia?", sol: "El miedo irracional a quedarse sin móvil, sin batería o sin cobertura." },
    { nivel: "básico", q: "¿Qué organismo español protege los datos personales y ayuda a retirar imágenes difundidas sin permiso?", sol: "La Agencia Española de Protección de Datos (AEPD), con su Canal Prioritario." },
    { nivel: "básico", q: "¿Cuántas horas de sueño necesita un adolescente y por qué afectan las pantallas?", sol: "Entre 8 y 10 horas. Las pantallas, por la luz y sobre todo por la actividad emocionante, retrasan la melatonina y hacen que te duermas más tarde." },
    { nivel: "medio", q: "Explica qué es el derecho al olvido y en qué casos se puede pedir.", sol: "Es el derecho a pedir que un buscador deje de mostrar enlaces a información personal que es inexacta, antigua o sin interés público, y a que se borren datos tratados sin motivo. Para datos publicados siendo menor, las redes deben borrarlos si se pide." },
    { nivel: "medio", q: "Reescribe de forma respetuosa este comentario: «QUÉ TONTERÍA DE VÍDEO, NO TIENES NI IDEA».", sol: "Por ejemplo: «No estoy de acuerdo con lo que dices sobre X; yo creo que… porque…». Sin mayúsculas, criticando la idea y no a la persona, y con un argumento." },
    { nivel: "medio", q: "Aplica el método de verificación a una imagen viral de «tiburones en una autopista inundada».", sol: "Mirar quién la publica; buscar si la cuentan medios fiables; hacer una búsqueda inversa de la imagen (suele aparecer en inundaciones anteriores o ser un montaje); consultar una web de verificación. Si no se confirma, no compartirla." },
    { nivel: "medio", q: "¿Por qué compartir un mensaje de odio para criticarlo puede ser contraproducente?", sol: "Porque los algoritmos premian lo que genera reacciones: al compartirlo le das más alcance y llega a más personas. Es mejor reportarlo y apoyar a quien sufre el ataque." },
    { nivel: "medio", q: "Explica la relación entre la dopamina, las notificaciones y las tragaperras.", sol: "Las recompensas imprevisibles (un «me gusta», un mensaje) liberan dopamina y nos empujan a repetir. Como no sabemos cuándo llegará la próxima, revisamos una y otra vez, igual que al tirar de la palanca de una tragaperras." },
    { nivel: "medio", q: "Una amiga recibe un mensaje: «Tengo tus fotos; o me mandas 100 € o las publico». ¿Qué le aconsejas?", sol: "Que no pague ni envíe nada más, que guarde capturas del chantaje, bloquee y reporte al agresor, lo cuente a un adulto de confianza y llame al 017 o denuncie a la policía. La culpa es del chantajista, no suya." },
    { nivel: "medio", q: "¿Qué postura es correcta delante del ordenador? Enumera cuatro detalles.", sol: "Pantalla a un brazo de distancia; borde superior a la altura de los ojos; espalda apoyada en el respaldo; pies apoyados en el suelo; muñecas rectas y descansos cada cierto tiempo." },
    { nivel: "medio", q: "¿Qué es la comparación social en redes y cómo puede afectarte?", sol: "Comparar tu vida real con la vida editada y filtrada que otros muestran. Puede hacer que te sientas peor contigo, con tu cuerpo o con tus planes, aunque lo que ves no sea la realidad completa." },
    { nivel: "medio", q: "Calcula: si revisas el móvil 80 veces al día y cada vez pierdes 3 minutos de concentración, ¿cuánto tiempo pierdes al día y a la semana?", sol: "80 · 3 = 240 minutos = 4 horas al día. A la semana: 4 · 7 = 28 horas." },
    { nivel: "avanzado", q: "Redacta un correo formal a la AEPD o a una red social pidiendo que retiren una foto tuya publicada por otra persona sin permiso.", sol: "Debe incluir: asunto claro («Solicitud de retirada de imagen publicada sin consentimiento»), saludo, tus datos, el enlace exacto, explicación de que no diste permiso y de que eres menor (si es el caso), petición concreta de retirada, despedida y firma." },
    { nivel: "avanzado", q: "Diseña un perfil profesional (por ejemplo, para presentarte a unas prácticas): qué incluirías y qué evitarías.", sol: "Incluir: foto adecuada, formación, proyectos (un robot, una web, voluntariado), idiomas y un enlace a un portafolio. Evitar: datos personales innecesarios (dirección, teléfono abierto), fotos de fiestas, opiniones ofensivas y faltas de ortografía." },
    { nivel: "avanzado", q: "Analiza por qué los bulos se difunden más rápido que las noticias verdaderas.", sol: "Suelen ser más sorprendentes y emocionales (miedo, indignación), confirman lo que ya pensamos, son sencillos y fáciles de compartir, y los algoritmos premian lo que genera reacciones. La verificación, en cambio, tarda más en llegar." },
    { nivel: "avanzado", q: "Mide durante una semana tu tiempo de pantalla por app y propón un plan de reducción realista con tres medidas.", sol: "Respuesta personal. Ejemplo: si las redes suman 3 h diarias, poner límites por app de 1 h, quitar notificaciones no urgentes, dejar el móvil fuera del cuarto por la noche y sustituir media hora por una actividad física. Revisar el resultado la semana siguiente." },
    { nivel: "avanzado", q: "¿Dónde está el límite entre la libertad de expresión y el discurso de odio? Razónalo con un ejemplo.", sol: "La libertad de expresión protege opiniones, incluso críticas o molestas. Se convierte en discurso de odio cuando humilla o incita a la violencia o discriminación contra personas por lo que son. Criticar una ley de inmigración es una opinión; llamar a agredir a inmigrantes es discurso de odio." },
    { nivel: "avanzado", q: "Explica por qué un deepfake puede ser peligroso para la democracia y para una persona concreta.", sol: "Para la democracia: un vídeo falso de un político diciendo algo puede influir en unas elecciones antes de que se desmienta. Para una persona: pueden fabricar imágenes íntimas o comprometedoras suyas y dañar su reputación; además es delito." },
    { nivel: "avanzado", q: "Diseña tres normas de uso del móvil para tu familia que todos puedan cumplir, también los adultos.", sol: "Ejemplo: sin móviles en las comidas; móviles a cargar fuera de los dormitorios desde las 22:30; un rato de actividad sin pantallas el fin de semana. Deben ser concretas, iguales para todos y revisarse al cabo de un mes." },
    { nivel: "avanzado", q: "Las cajas de botín de los videojuegos, ¿son juegos de azar? Argumenta a favor y en contra.", sol: "A favor: se paga dinero real por un premio aleatorio, con la misma mecánica de recompensa imprevisible que una tragaperras. En contra: el premio no se puede cambiar por dinero en muchos juegos. Varios países las han regulado o prohibido para menores." },
    { nivel: "avanzado", q: "Prepara una mini campaña de tres mensajes para frenar el ciberacoso en tu centro, dirigida a los testigos.", sol: "Ejemplo: 1) «Si te ríes, participas: no reenvíes». 2) «Un mensaje privado de apoyo cambia mucho: escríbele». 3) «Avisar no es chivarse: cuéntalo a tu tutor o llama al 017». Con imagen sencilla y un código QR al protocolo del centro." },
  ],
  ejemplos: [
    { enunciado: "Te llega un audio «del Ministerio» que dice que mañana cortarán el agua de toda la ciudad y pide reenviarlo. Verifícalo.", pasos: ["Fuente: un audio anónimo reenviado muchas veces no es una fuente fiable.", "Contraste: buscar en la web del ayuntamiento o de la compañía de aguas.", "Señal de alarma: «reenvíalo a todos» y el tono alarmista.", "Resultado de la búsqueda: no aparece en ninguna fuente oficial ni en medios.", "Decisión: no reenviarlo y avisar a quien lo envió de que es falso."], resultado: "Es un bulo; no se comparte." },
    { enunciado: "Calcula cuánto pesa la cabeza sobre el cuello a 0°, 30° y 60° de inclinación (unos 5, 18 y 27 kg) y extrae una conclusión.", pasos: ["Cabeza recta: unos 5 kg.", "Inclinada 30°: unos 18 kg (más de tres veces).", "Inclinada 60°: unos 27 kg (más de cinco veces).", "La carga aumenta mucho al bajar la cabeza para mirar el móvil."], resultado: "Conviene subir el móvil a la altura de los ojos y hacer pausas." },
    { enunciado: "Un compañero escribe en un foro: «Los de 3º B sois todos idiotas». Propón una respuesta con netiqueta.", pasos: ["No responder con otro insulto: alimenta la discusión.", "Separar la idea de la persona: ¿qué critica en realidad?", "Responder con calma o no responder y reportar si es ofensivo.", "Ejemplo: «Entiendo que estés molesto por el partido; si quieres lo hablamos sin insultos»."], resultado: "Respuesta respetuosa o, si continúa, reportar el mensaje." },
  ],
  errores: ["Pensar que lo que se envía por privado o en una historia que desaparece no puede difundirse: basta una captura."],
  cuarta: ["permanente", "Sí, si la borras en 24 horas", "Hacer una captura para reírte después", "Un tipo de contraseña", "dormir menos", "venderte un móvil nuevo", "ciberseguridad", "comentar el meme", "están permitidas los fines de semana", "las actualizaciones"],
  quiz: [
    { q: "El derecho al olvido permite…", o: ["borrar Internet entero", "pedir que un buscador deje de mostrar información personal antigua o inexacta", "cambiar tu nombre", "no ir a clase"], a: 1, e: "Es parte del derecho de supresión del RGPD." },
    { q: "Escribir todo en mayúsculas en un chat equivale a…", o: ["susurrar", "gritar", "ser educado", "cifrar"], a: 1, e: "Es una norma básica de netiqueta." },
    { q: "Ante una sextorsión, lo primero es…", o: ["pagar para que pare", "no ceder, guardar pruebas y pedir ayuda", "enviar más fotos", "borrar todas las pruebas"], a: 1, e: "Ceder no detiene el chantaje." },
    { q: "La búsqueda inversa de una imagen sirve para…", o: ["mejorar su calidad", "saber dónde apareció antes", "cifrarla", "borrarla de Internet"], a: 1, e: "Ayuda a descubrir montajes y fotos antiguas." },
    { q: "Un deepfake es…", o: ["una red social", "un contenido falso creado con IA que imita a una persona", "un tipo de cookie", "una contraseña segura"], a: 1, e: "Pueden imitar caras y voces de forma muy realista." },
    { q: "La sustancia del cerebro asociada a la recompensa es…", o: ["la melatonina", "la dopamina", "la insulina", "la cafeína"], a: 1, e: "Se libera ante recompensas como un «me gusta»." },
    { q: "La melatonina es la hormona…", o: ["del hambre", "del sueño", "del crecimiento muscular", "de la vista"], a: 1, e: "Las pantallas antes de dormir la retrasan." },
    { q: "Inclinar la cabeza 60° para mirar el móvil carga el cuello con unos…", o: ["5 kg", "10 kg", "27 kg", "100 kg"], a: 2, e: "Por eso conviene subir el móvil." },
    { q: "El discurso de odio…", o: ["es siempre libertad de expresión", "puede ser delito en los casos graves", "solo existe fuera de Internet", "está permitido en foros"], a: 1, e: "Incitar a la violencia o la discriminación no está protegido." },
    { q: "La regla 60-60 de los auriculares significa…", o: ["60 canciones al día", "no más del 60 % de volumen más de 60 minutos seguidos", "60 decibelios siempre", "cambiar de auriculares cada 60 días"], a: 1, e: "Protege la audición." },
  ],
  cuartaEx: ["Solo tu número de teléfono", "Tener la batería baja", "es legal si la borras"],
  examen: [
    { q: "¿Qué web te ayuda a comprobar si un bulo es falso?", o: ["Una web de verificación como Maldita o Newtral", "Cualquier grupo de WhatsApp", "Un foro anónimo", "La web que lo publica"], a: 0, e: "Se dedican a contrastar informaciones." },
    { q: "La comparación social en redes puede…", o: ["mejorar siempre la autoestima", "afectar a la autoestima", "cargar el móvil", "proteger tus datos"], a: 1, e: "Comparamos nuestra vida real con vidas editadas." },
    { q: "¿Cuánta actividad física diaria recomienda la OMS a tu edad?", o: ["10 minutos", "30 minutos", "60 minutos", "4 horas"], a: 2, e: "Al menos una hora al día." },
    { q: "Una buena norma ante un mensaje que te enfada es…", o: ["responder al momento", "esperar antes de contestar", "contestar en mayúsculas", "reenviarlo"], a: 1, e: "Lo que se escribe en caliente suele traer problemas." },
    { q: "La AEPD es…", o: ["una red social", "la Agencia Española de Protección de Datos", "un antivirus", "un buscador"], a: 1, e: "Atiende reclamaciones sobre datos personales." },
  ],
  tarjetas: [
    ["Derecho al olvido", "Pedir que los buscadores dejen de mostrar información personal antigua o inexacta."],
    ["Netiqueta", "Normas de buena educación en Internet."],
    ["Verificar antes de compartir", "Fuente, otros medios, fecha, búsqueda inversa; si dudas, no compartas."],
    ["Nomofobia", "Miedo irracional a quedarse sin móvil."],
  ],
  glosario: [
    ["Identidad digital", "Imagen de una persona que se forma con lo que hay sobre ella en Internet."],
    ["Huella digital", "Rastro de datos que dejamos al usar Internet, de forma activa o pasiva."],
    ["Reputación digital", "Opinión que otros se forman de alguien por lo que encuentran en la red."],
    ["Egosurfing", "Buscar tu propio nombre en Internet."],
    ["Derecho al olvido", "Derecho a pedir que se retire o deje de mostrarse información personal."],
    ["Netiqueta", "Normas de comportamiento respetuoso en Internet."],
    ["Ciberacoso", "Acoso repetido a una persona por medios digitales."],
    ["Grooming", "Engaño de un adulto a un menor por Internet con fines sexuales."],
    ["Sextorsión", "Chantaje con imágenes íntimas."],
    ["Discurso de odio", "Mensajes que humillan o incitan a la violencia contra personas por lo que son."],
    ["Bulo", "Información falsa que se difunde como verdadera."],
    ["Deepfake", "Imagen, audio o vídeo falso creado con IA que imita a una persona."],
    ["Verificación", "Comprobación de una información con fuentes fiables."],
    ["Diseño persuasivo", "Técnicas de las apps para captar la atención y el tiempo."],
    ["Burbuja de filtro", "Situación en la que el algoritmo solo te muestra lo que confirma tus gustos."],
    ["Nomofobia", "Miedo irracional a quedarse sin móvil."],
    ["Dopamina", "Sustancia del cerebro relacionada con el placer y la recompensa."],
    ["Bienestar digital", "Uso de la tecnología que ayuda a sentirse bien y no perjudica la salud."],
  ],
  situacion: {
    titulo: "Semana del bienestar digital",
    reto: "Vuestro grupo organiza una «semana del bienestar digital» en el instituto. Debéis medir cómo usáis la tecnología, experimentar un cambio de hábitos durante siete días y contar los resultados al resto del centro.",
    pasos: [
      "Medid durante una semana vuestro tiempo de pantalla por aplicación y vuestras horas de sueño (con las herramientas del propio móvil).",
      "Analizad los datos en una hoja de cálculo: medias, máximo y relación entre pantallas por la noche y horas de sueño.",
      "Elegid tres hábitos que cambiar (notificaciones, móvil fuera del cuarto, límites por app) y aplicadlos otra semana.",
      "Comparad las dos semanas y anotad cómo os habéis sentido (descanso, concentración, ánimo).",
      "Preparad unos carteles o un vídeo corto con los resultados y consejos, aplicando la netiqueta y citando las fuentes.",
    ],
    producto: "Un informe con gráficos «antes y después» y una campaña de carteles o vídeo para el centro.",
    evaluacion: ["Los datos se recogen con rigor y se analizan correctamente.", "Las conclusiones se apoyan en los datos y no en opiniones.", "Los consejos son realistas, respetuosos y están bien fundamentados.", "La campaña es clara, atractiva y cuida la privacidad de los participantes."],
  },
  objetivos: ["Gestionar la identidad digital y ejercer el derecho al olvido", "Verificar informaciones y reconocer bulos y deepfakes"],
  fuentes: [{ t: "AEPD: Canal Prioritario", url: "https://www.aepd.es/canalprioritario" }, { t: "Maldita.es: verificación de bulos", url: "https://maldita.es/" }],
});
