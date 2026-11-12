// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Inteligencia artificial",
  minutos: 40,
  objetivos: ["Explicar qué es la inteligencia artificial y cómo aprende una máquina", "Reconocer aplicaciones de la IA en la vida diaria", "Usar la IA generativa con espíritu crítico y conocer sus riesgos éticos"],
  claves: ["inteligencia artificial", "aprendizaje automático", "datos de entrenamiento", "red neuronal", "IA generativa", "sesgo"],
  pregunta: {
    texto: "Un chatbot te responde con mucha seguridad que Cervantes escribió «La Celestina». ¿Cómo puede equivocarse algo que parece saberlo todo?",
    respuesta: "Porque un modelo de lenguaje no «sabe» como una persona: ha aprendido <mark>qué palabras suelen ir detrás de otras</mark> en millones de textos y genera la respuesta más probable. A veces lo probable no es lo cierto, y la IA <b>inventa</b> datos con total seguridad. Por eso hay que <b>contrastar</b> lo que dice con fuentes fiables.",
  },
  bloques: [
    {
      html: `<h3>Qué es la inteligencia artificial</h3><p>La <b>inteligencia artificial</b> (IA) es la rama de la informática que crea sistemas capaces de hacer tareas que asociamos a la inteligencia humana: reconocer imágenes y voz, traducir, recomendar, conducir o escribir textos. La IA que existe hoy es <mark>específica</mark>: cada sistema es bueno en tareas concretas. Antes, los programas seguían reglas escritas a mano («si pasa esto, haz aquello»); la mayoría de la IA actual, en cambio, <b>aprende de ejemplos</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Programa clásico con reglas frente a IA que aprende de ejemplos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="14" y="30" width="110" height="110" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><rect x="136" y="30" width="110" height="110" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="69" y="52" fill="var(--muted)">programa clásico</text><text x="191" y="52" fill="var(--pen)">IA que aprende</text></g>
        <g ${F} font-size="9" fill="var(--ink)" text-anchor="middle"><text x="69" y="76">reglas a mano</text><text x="69" y="92">+ datos</text><text x="69" y="108">↓</text><text x="69" y="124">respuestas</text>
        <text x="191" y="76">ejemplos</text><text x="191" y="92">+ respuestas</text><text x="191" y="108">↓</text><text x="191" y="124" font-weight="700" fill="var(--pen)">aprende las reglas</text></g>
        <text x="130" y="164" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>la IA saca el patrón de los datos</text>
      </svg>`,
    },
    {
      html: `<h3>Cómo aprende una máquina</h3><p>El <b>aprendizaje automático</b> (machine learning) funciona así: se reúnen muchos <b>datos de entrenamiento</b> (por ejemplo, miles de fotos de gatos y perros con su etiqueta), el sistema busca <b>patrones</b> que los distinguen y ajusta su modelo cada vez que falla. Después se <b>prueba</b> con datos nuevos que no ha visto. Si aprende bien, podrá clasificar fotos que nunca vio. La calidad depende de los datos: <mark>datos pobres o injustos dan resultados pobres o injustos</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de aprendizaje: datos etiquetados, entrenamiento, modelo y predicción con datos nuevos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${16 + (i % 3) * 22}" y="${34 + Math.floor(i / 3) * 24}" width="18" height="18" rx="3" fill="${i % 2 ? "var(--sun)" : "var(--inf)"}"/>`).join("")}
        <text x="48" y="96" text-anchor="middle" font-size="9" fill="var(--ink)" ${F}>fotos etiquetadas</text>
        <path d="M86 56 H 108" stroke="var(--ink)" stroke-width="2.5"/><path d="M104 51 L 110 56 L 104 61" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="112" y="34" width="62" height="44" rx="8" fill="var(--pen)"/><text x="143" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>entrenar</text>
        <path d="M178 56 H 196" stroke="var(--ink)" stroke-width="2.5"/><path d="M192 51 L 198 56 L 192 61" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="200" y="34" width="46" height="44" rx="8" fill="var(--leaf)"/><text x="223" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>modelo</text>
        <rect x="30" y="122" width="22" height="22" rx="3" fill="var(--muted)"/><text x="41" y="138" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>?</text>
        <path d="M58 133 H 196" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/><path d="M223 82 V 118" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="223" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)" ${F}>«gato»</text>
        <text x="120" y="160" text-anchor="middle" font-size="9" fill="var(--muted)" ${F}>prueba con una foto nueva</text>
      </svg>`,
    },
    {
      html: `<h3>Redes neuronales e IA generativa</h3><p>Muchos sistemas usan <b>redes neuronales artificiales</b>: capas de unidades conectadas, inspiradas de forma muy simplificada en las neuronas, que ajustan la fuerza de sus conexiones al entrenar. Con muchas capas se habla de <b>aprendizaje profundo</b>. La <mark>IA generativa</mark> crea contenido nuevo: los <b>modelos de lenguaje</b> (chatbots) generan texto prediciendo la palabra siguiente, y otros modelos generan imágenes, música o vídeo a partir de una descripción, llamada <b>prompt</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Red neuronal con capa de entrada, dos capas ocultas y capa de salida">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${(() => { const L = [[3, 40], [4, 100], [4, 160], [2, 220]]; const pts = L.map(([n, x]) => Array.from({ length: n }, (_, j) => [x, 90 + (j - (n - 1) / 2) * 32])); let s = ""; for (let k = 0; k < 3; k++) for (const a of pts[k]) for (const b of pts[k + 1]) s += `<path d="M${a[0]} ${a[1]} L ${b[0]} ${b[1]}" stroke="var(--line)" stroke-width="1.5"/>`; const cs = ["var(--inf)", "var(--pen)", "var(--pen)", "var(--leaf)"]; pts.forEach((col, k) => col.forEach(([x, y]) => { s += `<circle cx="${x}" cy="${y}" r="10" fill="${cs[k]}"/>`; })); return s; })()}
        <g ${F} font-size="10" font-weight="700" text-anchor="middle"><text x="40" y="164" fill="var(--inf)">entrada</text><text x="130" y="164" fill="var(--pen)">capas ocultas</text><text x="220" y="164" fill="var(--leaf)">salida</text></g>
      </svg>`,
    },
    {
      html: `<h3>La IA en tu día a día</h3><p>Usas IA más de lo que crees: las <b>recomendaciones</b> de vídeos, series y música; el <b>reconocimiento facial</b> que desbloquea el móvil; los <b>asistentes de voz</b>; los traductores automáticos; los filtros de las fotos; el filtro de correo basura; los mapas que calculan el tráfico. En medicina ayuda a detectar enfermedades en radiografías, y en ciencia a predecir la forma de las proteínas. Para estudiar puede explicarte un tema de otra forma, pero <mark>no debe hacer el trabajo por ti</mark>: si no lo piensas tú, no lo aprendes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Usos cotidianos de la IA: recomendaciones, reconocimiento facial, asistente de voz, traductor, mapas y medicina">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["recomendaciones", "var(--red)"], ["desbloqueo facial", "var(--pen)"], ["asistente de voz", "var(--sun)"], ["traductor", "var(--leaf)"], ["mapas y tráfico", "var(--inf)"], ["medicina", "var(--muted)"]]
          .map(([t, c], i) => `<rect x="${16 + (i % 2) * 120}" y="${22 + Math.floor(i / 2) * 50}" width="108" height="38" rx="10" fill="${c}"/><text x="${70 + (i % 2) * 120}" y="${45 + Math.floor(i / 2) * 50}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Riesgos y ética</h3><p>La IA plantea retos importantes. Puede tener <b>sesgos</b>: si aprende de datos donde un grupo está poco representado, funcionará peor con él o lo discriminará. Puede <b>inventar información</b> (lo que se llama «alucinar»). Permite crear <mark>deepfakes</mark>, vídeos o audios falsos muy realistas. Usa enormes cantidades de <b>datos personales</b> y de <b>energía</b>. Y cambia muchos empleos. Por eso la Unión Europea aprobó el <b>Reglamento de IA</b>, que prohíbe algunos usos y exige transparencia, por ejemplo avisar cuando un contenido está generado por IA.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Riesgos de la IA: sesgos, alucinaciones, deepfakes, privacidad y energía">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 24 L 236 156 H 24 Z" fill="var(--sun)"/><text x="130" y="132" text-anchor="middle" font-size="64" font-weight="700" fill="var(--ink)" ${D}>!</text>
        <g ${F} font-size="10" font-weight="700" fill="var(--ink)"><text x="16" y="34">sesgos</text><text x="186" y="34">deepfakes</text><text x="16" y="54">alucinaciones</text><text x="190" y="54">privacidad</text></g>
        <text x="130" y="172" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>energía · empleo · Reglamento europeo de IA</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Cómo usar un chatbot con cabeza",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cuatro pasos para usar un chatbot: pregunta clara, revisa, contrasta y di que lo usaste">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["1. Pregunta bien", "da contexto y", "pide lo concreto", "var(--pen)"], ["2. Revisa", "¿tiene sentido?", "¿lo entiendo?", "var(--sun)"], ["3. Contrasta", "con el libro o", "fuentes fiables", "var(--leaf)"], ["4. Sé honesto", "di que usaste IA", "y haz tu parte", "var(--red)"]]
        .map(([n, a, b, c], i) => `<rect x="${16 + i * 154}" y="30" width="146" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="74" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="120" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="140" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "_tA5cinv0U8", titulo: "¿Qué es y cómo funciona la inteligencia artificial?", canal: "Derivando", vistas: 2644742, megusta: 0, busqueda: "qué es la inteligencia artificial cómo funciona" },
  quiz: [
    { q: "La mayoría de la IA actual…", o: ["sigue solo reglas escritas a mano", "aprende patrones a partir de ejemplos", "piensa igual que una persona"], a: 1, e: "Es el aprendizaje automático." },
    { q: "¿Para qué se usan datos de prueba que el modelo no ha visto?", o: ["Para comprobar si ha aprendido de verdad", "Para que pese menos", "Para borrar los de entrenamiento"], a: 0, e: "Si solo acierta con lo que ya vio, no ha aprendido a generalizar." },
    { q: "Un chatbot genera texto…", o: ["copiando siempre una web", "prediciendo las palabras más probables", "buscando en una enciclopedia exacta"], a: 1, e: "Por eso puede sonar bien y estar mal." },
    { q: "Un vídeo falso muy realista de un famoso diciendo algo que no dijo es un…", o: ["deepfake", "prompt", "algoritmo"], a: 0, e: "Se crea con IA generativa." },
    { q: "Si un sistema aprende con fotos casi solo de un tipo de personas, puede tener…", o: ["más velocidad", "sesgos", "menos datos personales"], a: 1, e: "Funcionará peor con los grupos poco representados." }
  ],
  examen: [
    { q: "¿Qué es una red neuronal artificial?", o: ["Un cerebro humano conectado al ordenador", "Capas de unidades conectadas que ajustan sus conexiones al aprender", "Una red wifi rápida"], a: 1, e: "Se inspira, muy simplificadamente, en las neuronas." },
    { q: "Al usar IA para un trabajo de clase, lo correcto es…", o: ["copiar lo que diga sin leerlo", "contrastar, entenderlo y decir que la usaste", "no citar nunca nada"], a: 1, e: "La IA ayuda, pero el aprendizaje y la responsabilidad son tuyos." },
    { q: "¿Qué exige el Reglamento europeo de IA, entre otras cosas?", o: ["Que todos los móviles tengan IA", "Transparencia, como avisar de que un contenido es generado por IA", "Que la IA sea gratuita"], a: 1, e: "También prohíbe algunos usos de alto riesgo." },
  ],
  feynman: ["Qué diferencia hay entre un programa con reglas y una IA que aprende", "Los pasos del aprendizaje automático", "Qué es una red neuronal y qué hace la IA generativa", "Cinco usos de la IA en tu vida diaria", "Los riesgos éticos: sesgos, alucinaciones y deepfakes"],
  mapa: mapa("INTELIGENCIA ARTIFICIAL", "var(--eso)", [
    ["Aprender", "datos · patrones · modelo", "var(--pen)"],
    ["Técnicas", "redes neuronales · generativa", "var(--leaf)"],
    ["Usos", "recomendar · traducir · salud", "var(--sun)"],
    ["Ética", "sesgos · deepfakes · ley", "var(--red)"],
  ], 260),
  tarjetas: [
    ["¿Qué es el aprendizaje automático?", "Que el sistema aprenda patrones a partir de ejemplos en vez de reglas escritas."],
    ["¿Qué son los datos de entrenamiento?", "Los ejemplos con los que aprende el modelo."],
    ["¿Qué es un prompt?", "La instrucción o descripción que se le da a una IA generativa."],
    ["¿Qué es una «alucinación» de la IA?", "Una respuesta inventada que parece segura pero es falsa."],
    ["¿Qué es un sesgo?", "Un error sistemático que trata peor a un grupo, a menudo por datos desequilibrados."],
  ],
  familias: ["Pedid a un chatbot un dato que conozcáis bien y comprobad si acierta.", "Buscad en el móvil tres funciones que usen IA (fotos, teclado, recomendaciones).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Inteligencia artificial: fundamentos, aprendizaje automático, aplicaciones y uso crítico y ético de herramientas de IA (RD 217/2022, Digitalización 4º).",
    ideas: ["Entrenar un clasificador de imágenes con Teachable Machine y probar qué pasa con datos desequilibrados.", "Comparar respuestas de un chatbot con el libro de texto y buscar errores.", "Debate sobre deepfakes y el Reglamento europeo de IA."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Inteligencia artificial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Inteligencia_artificial" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Distinguir los tipos de aprendizaje automático", "Usar la IA generativa con buenas instrucciones y sentido crítico"],
  tras: {
    "Cómo aprende una máquina": [
      { html: `<h3>Tipos de aprendizaje automático</h3><p>En el <b>aprendizaje supervisado</b> la máquina aprende con ejemplos etiquetados: miles de fotos marcadas como «gato» o «perro», o correos marcados como «spam» o «no spam». Luego predice la etiqueta de datos nuevos. En el <b>no supervisado</b> recibe datos sin etiquetar y busca grupos o patrones por sí misma: por ejemplo, agrupar clientes con gustos parecidos. En el <b>aprendizaje por refuerzo</b> aprende por ensayo y error, recibiendo premios o castigos: así aprenden a jugar al ajedrez o a mover un robot. En todos los casos la clave son los <mark>datos</mark>: si son escasos o están sesgados, el modelo aprenderá mal.</p>${AMP.tabla(["Tipo", "Datos", "Ejemplo"], [["Supervisado", "Etiquetados", "Filtro de spam"], ["No supervisado", "Sin etiquetar", "Agrupar clientes"], ["Por refuerzo", "Premios y castigos", "Jugar al ajedrez"]])}`, video: { id: "oT3arRRB2Cw", titulo: "¿Qué es el aprendizaje supervisado y no supervisado?", canal: "Dot CSV", vistas: 302877 } },
    ],
    "Redes neuronales e IA generativa": [
      { html: `<h3>Cómo dar buenas instrucciones</h3><p>Una <b>instrucción</b> o <b>prompt</b> es lo que escribimos a una IA generativa. Cuanto más clara, mejor respuesta. Un buen prompt indica el <b>contexto</b> (soy alumno de 4.º de ESO), la <b>tarea</b> (explícame la fotosíntesis), el <b>formato</b> (en cinco puntos, con un ejemplo) y las <b>restricciones</b> (sin tecnicismos, en 150 palabras). Se puede pedir que haga preguntas, que corrija un texto o que proponga ejercicios. Pero hay que <mark>revisar siempre</mark> lo que responde, porque puede inventar datos con total seguridad (las «alucinaciones»), y no se deben introducir datos personales ni confidenciales.</p>`, video: { id: "UpDx8oNy3g4", titulo: "Domina la fórmula para crear prompts de experto en ChatGPT", canal: "Innovate AI", vistas: 470797 } },
    ],
    "La IA en tu día a día": [
      { html: `<h3>La IA y el trabajo</h3><p>La IA ya automatiza tareas repetitivas: clasificar documentos, atender consultas sencillas, traducir o revisar imágenes médicas. Algunos empleos cambiarán mucho y otros surgirán, como especialistas en datos, en ética de la IA o en entrenar y supervisar modelos. Lo más probable es que la IA <b>transforme tareas</b> más que eliminar profesiones completas, y que las personas que sepan <mark>trabajar con ella</mark> tengan ventaja. Por eso ganan valor las capacidades humanas que la máquina no tiene: el pensamiento crítico, la creatividad, la empatía, la comunicación y la capacidad de seguir aprendiendo.</p>` },
    ],
    "Riesgos y ética": [
      { html: `<h3>Cómo reconocer contenido generado por IA</h3><p>Las imágenes, voces y vídeos generados por IA son cada vez más realistas. Los <b>deepfakes</b> pueden poner en boca de alguien palabras que nunca dijo. Algunas pistas: manos con dedos de más, textos ilegibles en carteles, sombras o reflejos imposibles, piel demasiado perfecta, parpadeos raros o voz sin respiraciones. Pero la mejor herramienta es <mark>verificar la fuente</mark>: quién lo publica, si aparece en medios fiables y si hay una búsqueda inversa de la imagen. El <b>Reglamento europeo de IA</b> obliga a etiquetar los contenidos generados artificialmente y prohíbe usos de alto riesgo como la puntuación social de los ciudadanos.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Mejora este prompt: «Háblame de la Segunda Guerra Mundial».", pasos: ["Añade contexto: «Soy alumno de 4.º de ESO y tengo examen».", "Concreta la tarea y el formato: «Resume las causas en cinco puntos y haz una cronología con diez fechas clave».", "Añade restricciones y una petición final: «Lenguaje sencillo; al final, hazme tres preguntas para repasar»."], resultado: "Un prompt con contexto, tarea, formato y restricciones." },
    { enunciado: "Un banco entrena una IA para conceder préstamos con datos de los últimos 30 años, en los que se concedieron pocos préstamos a mujeres. ¿Qué problema puede haber?", pasos: ["Los datos reflejan una discriminación del pasado.", "La IA aprende ese patrón y lo repite: es un sesgo algorítmico.", "Solución: revisar los datos, auditar las decisiones y mantener la supervisión humana."], resultado: "La IA puede discriminar a las mujeres; hay que corregir el sesgo." },
    { enunciado: "Clasifica: un filtro de spam, una IA que agrupa canciones parecidas y un robot que aprende a andar cayéndose.", pasos: ["Filtro de spam: aprende de correos etiquetados, supervisado.", "Agrupar canciones sin etiquetas: no supervisado.", "Robot que mejora con premios por no caerse: por refuerzo."], resultado: "Supervisado, no supervisado y por refuerzo." },
  ],
  errores: [
    "Creer que la IA «entiende» o «piensa» como una persona.",
    "Copiar la respuesta de una IA sin comprobar los datos ni las fuentes.",
    "Introducir datos personales o de otras personas en un chatbot.",
    "Pensar que una IA es neutral: aprende los sesgos de sus datos.",
    "Fiarse de un vídeo o un audio por su realismo sin verificar la fuente.",
  ],
  ejercicios: [
    { q: "Define inteligencia artificial y aprendizaje automático.", sol: "La IA es la rama de la informática que crea sistemas capaces de hacer tareas propias de la inteligencia humana; el aprendizaje automático es la técnica por la que aprenden a partir de datos sin programar cada regla." },
    { q: "Explica la diferencia entre aprendizaje supervisado y no supervisado.", sol: "En el supervisado los datos están etiquetados con la respuesta correcta; en el no supervisado no, y la máquina busca patrones o grupos por sí misma." },
    { q: "Pon un ejemplo de aprendizaje por refuerzo.", sol: "Una IA que aprende a jugar a un videojuego recibiendo puntos cuando avanza y perdiéndolos cuando falla." },
    { q: "¿Qué es una alucinación de una IA generativa?", sol: "Una respuesta inventada o falsa que la IA presenta con total seguridad." },
    { q: "Escribe un buen prompt para que una IA te ayude a repasar las leyes de Newton.", sol: "Por ejemplo: «Soy alumno de 4.º de ESO. Explica las tres leyes de Newton con un ejemplo cotidiano cada una y luego hazme cinco preguntas tipo test»." },
    { q: "Indica cuatro usos de la IA en la vida diaria.", sol: "Recomendaciones de series, asistentes de voz, traductores automáticos y desbloqueo facial (también mapas o filtros de spam)." },
    { q: "¿Qué es un sesgo algorítmico? Pon un ejemplo.", sol: "Un trato injusto que la IA aprende de datos desequilibrados; por ejemplo, un reconocimiento facial que falla más con personas de piel oscura." },
    { q: "Indica tres pistas para detectar una imagen generada por IA.", sol: "Manos o dedos raros, textos ilegibles y sombras o reflejos incoherentes; además, verificar la fuente." },
    { q: "¿Qué capacidades humanas serán más valiosas con la IA?", sol: "Pensamiento crítico, creatividad, empatía, comunicación y aprender continuamente." },
    { q: "¿Qué establece el Reglamento europeo de IA sobre los contenidos generados?", sol: "Que deben etiquetarse como generados artificialmente; además, prohíbe algunos usos de riesgo inaceptable." },
  ],
  quiz: [
    { q: "Un filtro de spam entrenado con correos etiquetados usa aprendizaje…", o: ["supervisado", "no supervisado", "por refuerzo"], a: 0, e: "Datos con la respuesta correcta." },
    { q: "Aprender por ensayo y error con premios es aprendizaje…", o: ["supervisado", "por refuerzo", "no supervisado"], a: 1, e: "Como entrenar a un perro." },
    { q: "Un buen prompt incluye…", o: ["solo una palabra", "contexto, tarea y formato", "datos personales"], a: 1, e: "Cuanto más claro, mejor." },
    { q: "Un deepfake es…", o: ["un vídeo o audio falso hecho con IA", "un antivirus", "una red social"], a: 0, e: "Hay que verificar la fuente." },
    { q: "Lo más probable es que la IA…", o: ["elimine todos los trabajos", "transforme muchas tareas", "no afecte al empleo"], a: 1, e: "Cambian las tareas." },
  ],
  tarjetas: [
    ["Aprendizaje supervisado", "La máquina aprende con ejemplos etiquetados con la respuesta correcta."],
    ["Prompt", "Instrucción que se da a una IA generativa."],
    ["Deepfake", "Vídeo, imagen o audio falso hecho con IA que imita a una persona real."],
  ],
});
