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
