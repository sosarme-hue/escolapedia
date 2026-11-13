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

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "La máquina que aprendió a ver un cáncer",
    html: `<p>En un hospital, una dermatóloga sube a un programa la foto de un lunar sospechoso. En dos segundos, el sistema marca la zona que le preocupa y estima la probabilidad de que sea un melanoma. Nadie le ha escrito reglas del tipo «si el borde es irregular y el color es oscuro…»: ha aprendido sola, a partir de cientos de miles de imágenes revisadas por especialistas. La decisión final es de la médica, pero la herramienta le ayuda a no pasar nada por alto.</p>
      <p>Esa misma tecnología escribe textos, traduce idiomas, recomienda canciones, conduce coches de prueba y crea imágenes que nunca existieron. También se equivoca, inventa datos con total seguridad, puede discriminar si aprende de datos sesgados y consume enormes cantidades de energía. En este tema verás qué es realmente la inteligencia artificial, cómo aprende a partir de datos, cómo funciona un modelo de lenguaje por dentro, qué dice la ley europea y cómo usarla de forma crítica, responsable y creativa. La pregunta no es si usarás la IA, sino cómo.</p>`,
  },
  svgs: {
    "Tipos de aprendizaje automático": L.cajas("Tres tipos de aprendizaje automático", [["Supervisado", "ejemplos|etiquetados"], ["No supervisado", "busca grupos|sin etiquetas"], ["Por refuerzo", "ensayo y error|con premios"], ["Ejemplo", "spam · clientes|· robot que anda"]], { t: "Cómo aprende" }),
    "Cómo dar buenas instrucciones": L.capas("Partes de un buen prompt: rol y contexto, tarea, formato y límites", [["Contexto", "soy alumno de 4º"], ["Tarea", "explica la ley de Ohm"], ["Formato", "5 puntos y un ejemplo"], ["Límites", "sin fórmulas difíciles"]], { t: "Un buen prompt" }),
    "La IA y el trabajo": L.comparar("Tareas que la IA automatiza y capacidades humanas más valiosas", ["IA automatiza", ["tareas repetitivas", "clasificar datos", "traducir borradores", "revisar imágenes"]], ["Humanos aportan", ["criterio y ética", "creatividad", "empatía", "trabajo en equipo"]]),
    "Cómo reconocer contenido generado por IA": L.cajas("Pistas para reconocer contenido generado por IA", [["Manos y texto", "dedos raros,|letras sin sentido"], ["Luz y sombras", "incoherentes"], ["Fuente", "¿quién lo|publica?"], ["Marca de agua", "etiqueta|«creado con IA»"]], { t: "¿Lo ha hecho una IA?" }),
  },
  tras: {
    "Qué es la inteligencia artificial": [
      {
        html: `<h3>Breve historia de la IA</h3><p>En <b>1950</b>, el matemático Alan Turing se preguntó si las máquinas podrían pensar y propuso una prueba: si una persona conversa por escrito con una máquina y no sabe distinguirla de un humano, la máquina «piensa». En <b>1956</b>, en un congreso en Dartmouth (EE. UU.), se usó por primera vez la expresión <b>inteligencia artificial</b>. Las primeras IA seguían <mark>reglas escritas a mano</mark>: jugaban a las damas o resolvían problemas lógicos, pero fallaban ante el mundo real. Tras grandes promesas incumplidas llegaron los «inviernos de la IA», épocas sin apenas financiación.</p>
          <p>En <b>1997</b>, el ordenador Deep Blue de IBM venció al campeón mundial de ajedrez Garri Kaspárov. El gran salto llegó hacia <b>2012</b> con el <b>aprendizaje profundo</b>: redes neuronales con muchas capas, entrenadas con enormes cantidades de datos y con los procesadores gráficos (GPU) de los videojuegos, empezaron a reconocer imágenes y voz mejor que nunca. En <b>2016</b>, AlphaGo ganó al go, un juego con más posiciones que átomos en el universo. En <b>2017</b> se inventó la arquitectura <b>transformer</b>, base de los modelos de lenguaje que desde <b>2022</b> usan cientos de millones de personas para escribir, programar o estudiar.</p>`,
        svg: L.rejilla("Hitos de la historia de la inteligencia artificial", ["Año", "Hito"], [["1950", "prueba de Turing"], ["1956", "nace el término IA"], ["1997", "Deep Blue gana al ajedrez"], ["2012", "aprendizaje profundo"], ["2022", "chatbots para todos"]], { t: "Línea del tiempo" }),
      },
    ],
    "Cómo aprende una máquina": [
      {
        html: `<h3>Los datos, el combustible de la IA</h3><p>Un modelo de aprendizaje automático es tan bueno como los datos con los que aprende. Hacen falta <b>muchos</b> datos, pero sobre todo datos de <b>calidad</b>: variados, correctos y representativos de la realidad en la que se va a usar el sistema. En el aprendizaje supervisado, además, alguien tiene que <b>etiquetarlos</b>: marcar miles de fotos como «gato» o «perro», o revisar textos uno a uno. Es un trabajo enorme, muchas veces hecho por personas mal pagadas en otros países.</p>
          <p>Los datos se dividen en tres grupos. Con el de <b>entrenamiento</b> el modelo ajusta sus parámetros; con el de <b>validación</b> se eligen los ajustes; y con el de <b>prueba</b>, que el modelo nunca ha visto, se mide si de verdad ha aprendido. Un problema típico es el <mark>sobreajuste</mark>: el modelo memoriza los ejemplos de entrenamiento, incluidos sus detalles casuales, y falla con datos nuevos, como un alumno que se aprende de memoria las soluciones del libro pero no sabe resolver un problema distinto. Para evaluar un modelo se usa la <b>precisión</b> (el porcentaje de aciertos), aunque no basta: un detector de una enfermedad rara que siempre dice «sano» acierta el 99 % y no sirve para nada.</p>`,
        svg: L.barras("Reparto típico de los datos en entrenamiento, validación y prueba", [["Entrenamiento", 70], ["Validación", 15], ["Prueba", 15]], { t: "Cómo se reparten los datos", unidad: " %" }),
      },
    ],
    "Tipos de aprendizaje automático": [
      {
        html: `<h3>Un clasificador por dentro</h3><p>Veamos un modelo sencillo: el <b>árbol de decisión</b>. Imagina que queremos que una IA decida si un día es bueno para ir en bici al instituto. Le damos una tabla de días anteriores con sus datos (¿llueve?, temperatura, viento) y la etiqueta (fuimos en bici o no). El algoritmo busca la pregunta que <mark>mejor separa</mark> los ejemplos: quizá «¿llueve?». Si llueve, casi nunca se fue en bici. Si no llueve, busca la siguiente mejor pregunta, por ejemplo «¿la temperatura es menor de 5 °C?», y así construye un árbol de preguntas de sí o no.</p>
          <p>Con un día nuevo, el modelo recorre el árbol desde arriba y llega a una hoja con la respuesta. Otro método muy intuitivo es el de los <b>k vecinos más próximos</b>: para clasificar un ejemplo nuevo, mira los <i>k</i> ejemplos conocidos más parecidos y elige lo que diga la mayoría. Plataformas educativas como Teachable Machine o Machine Learning for Kids permiten entrenar clasificadores de imágenes, sonidos o posturas en minutos y usarlos en Scratch. Al hacerlo se ve claro que el modelo no «entiende» nada: solo encuentra patrones en los números de los datos.</p>`,
        svg: L.flujo("Árbol de decisión para ir en bici: llueve, temperatura y viento", ["¿Llueve? sí → no ir en bici", "no → ¿menos de 5 °C?", "sí → no ir en bici", "no → ¿viento fuerte?", "no → ¡ir en bici!"], { t: "Árbol de decisión" }),
      },
    ],
    "Redes neuronales e IA generativa": [
      {
        html: `<h3>Cómo funciona un modelo de lenguaje</h3><p>Un <b>modelo de lenguaje</b> grande (los que usan los chatbots) es una red neuronal enorme entrenada con muchísimo texto. Primero, el texto se trocea en <b>tokens</b>: palabras o partes de palabras. Durante el entrenamiento, el modelo lee frases con el final tapado e intenta <mark>predecir el siguiente token</mark>; cada vez que se equivoca, ajusta ligeramente sus miles de millones de parámetros. Tras repetir esto billones de veces, aprende gramática, datos sobre el mundo y formas de razonar, todo ello como probabilidades.</p>
          <p>Después se <b>ajusta</b> con ejemplos de conversaciones y con valoraciones de personas para que sea útil, siga instrucciones y rechace peticiones dañinas. Cuando le escribes, genera la respuesta token a token, eligiendo en cada paso entre los más probables; un parámetro llamado <b>temperatura</b> controla cuánto se arriesga (más creatividad o más previsibilidad). Solo «recuerda» lo que cabe en su <b>ventana de contexto</b>, la conversación actual. Como no consulta una base de datos de hechos, sino que produce lo más probable, puede <b>alucinar</b>: inventar citas, fechas o fuentes con total seguridad. Por eso hay que contrastar siempre lo importante.</p>`,
        svg: L.flujo("Cómo genera texto un modelo de lenguaje: tokens y predicción", ["Texto: «El agua hierve a…»", "Se trocea en tokens", "La red calcula probabilidades", "Elige: «100» (alta), «frío» (baja)", "Añade el token y repite"], { t: "Predecir la siguiente palabra" }),
      },
    ],
    "La IA en tu día a día": [
      {
        html: `<h3>Visión artificial y reconocimiento de voz</h3><p>Para un ordenador, una foto es solo una tabla de números: el color de cada píxel. La <b>visión artificial</b> usa redes neuronales que aprenden a detectar, capa a capa, primero bordes y manchas, luego formas como ojos o ruedas y, al final, objetos completos. Así se puede <b>clasificar</b> una imagen («hay un gato»), <b>detectar</b> objetos y dónde están (los recuadros alrededor de peatones de un coche autónomo) o <b>segmentar</b>, es decir, saber a qué objeto pertenece cada píxel, algo útil en medicina para delimitar un tumor.</p>
          <p>El <b>reconocimiento de voz</b> convierte el sonido en texto: el micrófono digitaliza la onda, el sistema la transforma en un «mapa» de frecuencias y una red neuronal reconoce los sonidos y las palabras más probables. Lo usan los asistentes de voz, los subtítulos automáticos y los dictados del móvil. El proceso inverso, la <b>síntesis de voz</b>, ya imita voces humanas casi a la perfección, lo que ayuda a personas que han perdido el habla, pero también permite fraudes telefónicos que imitan la voz de un familiar. Estas tecnologías mejoran la accesibilidad, aunque el reconocimiento facial en espacios públicos plantea serios problemas de privacidad.</p>`,
        svg: L.capas("Capas de una red de visión artificial: píxeles, bordes, formas y objeto", [["Objeto", "«es un gato»"], ["Formas", "orejas, ojos"], ["Bordes", "líneas y manchas"], ["Píxeles", "números de color"]], { t: "Ver por capas" }),
      },
    ],
    "Riesgos y ética": [
      {
        html: `<h3>La ley: el Reglamento europeo de IA</h3><p>La Unión Europea aprobó en 2024 el <b>Reglamento de Inteligencia Artificial</b>, la primera ley general sobre IA del mundo. Clasifica los sistemas según su <mark>nivel de riesgo</mark>. Los de <b>riesgo inaceptable</b> están prohibidos: la puntuación social de los ciudadanos, la manipulación que explota la vulnerabilidad de menores o el reconocimiento de emociones en centros educativos y de trabajo. Los de <b>alto riesgo</b>, como los que deciden sobre contrataciones, notas de exámenes, créditos o atención sanitaria, deben cumplir requisitos estrictos: datos de calidad, documentación, supervisión humana y seguridad.</p>
          <p>Los de <b>riesgo limitado</b> tienen obligaciones de <b>transparencia</b>: un chatbot debe decir que es una máquina y los contenidos generados o manipulados con IA, como los deepfakes, deben estar etiquetados. Los de <b>riesgo mínimo</b>, como un filtro de spam o la IA de un videojuego, no tienen obligaciones especiales. Los grandes modelos de uso general también deben informar de cómo se entrenaron y respetar los derechos de autor. En España, la Agencia Española de Supervisión de la Inteligencia Artificial (AESIA), con sede en A Coruña, vigila que se cumpla.</p>`,
        svg: L.capas("Pirámide de riesgos del Reglamento europeo de IA", [["Inaceptable", "prohibido"], ["Alto", "requisitos estrictos"], ["Limitado", "transparencia"], ["Mínimo", "sin obligaciones"]], { t: "Niveles de riesgo" }),
      },
      {
        html: `<h3>La huella ambiental de la IA</h3><p>La IA no vive en una nube etérea: funciona en <b>centros de datos</b> llenos de servidores con miles de procesadores gráficos. Entrenar un gran modelo de lenguaje puede consumir tanta electricidad como miles de hogares en un año, y cada consulta gasta varias veces más energía que una búsqueda web tradicional. Los servidores se calientan y se refrigeran, a menudo con <mark>agua</mark>, lo que en zonas con sequía genera conflictos. Además, fabricar los chips exige minerales escasos y mucha energía.</p>
          <p>Las empresas trabajan en modelos más pequeños y eficientes, en chips especializados y en alimentar sus centros con energías renovables. Pero también importa cómo la usamos: no hace falta pedir a una IA generativa lo que se resuelve con una calculadora, un buscador o pensando un momento. Al mismo tiempo, la IA puede ayudar al medio ambiente: optimizar redes eléctricas con mucha energía renovable, predecir fenómenos meteorológicos extremos, detectar incendios o vigilar la deforestación con imágenes de satélite. Como toda tecnología, su balance depende de las decisiones que tomemos.</p>`,
        svg: L.comparar("Costes ambientales y aportaciones de la IA al medio ambiente", ["Costes", ["mucha electricidad", "agua para enfriar", "minerales escasos", "residuos de chips"]], ["Aportaciones", ["redes eléctricas", "predecir el clima", "detectar incendios", "vigilar bosques"]]),
      },
    ],
  },
  secciones: [6, 3, 7],
  niveles: "bmbbmbmbmm",
  ejercicios: [
    { nivel: "básico", q: "¿Qué proponía la prueba de Turing?", sol: "Que si una persona conversa por escrito con una máquina y no sabe distinguirla de un ser humano, se puede decir que la máquina muestra un comportamiento inteligente." },
    { nivel: "básico", q: "¿Para qué sirven los datos de prueba en el aprendizaje automático?", sol: "Para comprobar con ejemplos que el modelo nunca ha visto si ha aprendido de verdad o solo ha memorizado los de entrenamiento." },
    { nivel: "básico", q: "¿Qué es un token en un modelo de lenguaje?", sol: "Un trozo de texto (una palabra o parte de una palabra) en que se divide lo que se escribe; el modelo trabaja prediciendo el siguiente token." },
    { nivel: "básico", q: "Nombra los cuatro niveles de riesgo del Reglamento europeo de IA.", sol: "Inaceptable (prohibido), alto (requisitos estrictos), limitado (transparencia) y mínimo (sin obligaciones especiales)." },
    { nivel: "básico", q: "Di si es clasificar, detectar o segmentar: marcar con un recuadro cada peatón de una foto.", sol: "Detectar: se localiza cada objeto y su posición con un recuadro." },
    { nivel: "básico", q: "Indica dos costes ambientales de la IA y dos formas en que puede ayudar al medio ambiente.", sol: "Costes: mucho consumo eléctrico y agua para refrigerar los centros de datos. Ayudas: predecir fenómenos meteorológicos extremos y detectar incendios o deforestación con satélites." },
    { nivel: "básico", q: "¿Qué hito de la IA ocurrió en 1997?", sol: "El ordenador Deep Blue de IBM venció al campeón mundial de ajedrez Garri Kaspárov." },
    { nivel: "medio", q: "Explica el sobreajuste con un ejemplo de clase.", sol: "Es cuando el modelo memoriza los ejemplos de entrenamiento y falla con datos nuevos. Como un alumno que se aprende las soluciones exactas del libro y no sabe resolver un problema con números distintos en el examen." },
    { nivel: "medio", q: "Un detector de una enfermedad que afecta a 1 de cada 100 personas siempre responde «sano». ¿Qué precisión tiene? ¿Es útil?", sol: "Acierta 99 de cada 100: precisión del 99 %. Pero no sirve, porque no detecta a ningún enfermo. Hay que mirar también cuántos casos positivos encuentra." },
    { nivel: "medio", q: "Construye un árbol de decisión de tres preguntas para decidir si llevar paraguas.", sol: "¿Está lloviendo? Sí → paraguas. No → ¿La previsión da más del 50 % de lluvia? Sí → paraguas. No → ¿Vas a estar fuera más de 3 horas? Sí → paraguas plegable; No → sin paraguas." },
    { nivel: "medio", q: "Explica por qué un chatbot puede inventarse una cita bibliográfica que no existe.", sol: "Porque genera el texto más probable token a token, no consulta una base de datos de libros. Una cita con autor, título y año «suena» correcta aunque no exista: es una alucinación." },
    { nivel: "medio", q: "¿Qué controla la temperatura de un modelo de lenguaje? ¿Cuándo la subirías y cuándo la bajarías?", sol: "Cuánto se arriesga al elegir el siguiente token. Alta para tareas creativas (ideas, un poema); baja para respuestas precisas y repetibles (un resumen técnico, código)." },
    { nivel: "medio", q: "Clasifica según el Reglamento europeo: un filtro de spam, un sistema que puntúa currículos, un chatbot de una tienda y la puntuación social de ciudadanos.", sol: "Filtro de spam: riesgo mínimo. Currículos: alto riesgo. Chatbot: riesgo limitado (debe decir que es una máquina). Puntuación social: riesgo inaceptable, prohibido." },
    { nivel: "medio", q: "¿Por qué el etiquetado de datos es una parte importante y polémica de la IA?", sol: "Importante porque el aprendizaje supervisado necesita millones de ejemplos bien marcados. Polémica porque a menudo lo hacen personas con sueldos muy bajos y, en algunos casos, revisando contenido desagradable." },
    { nivel: "medio", q: "Explica cómo una red de visión reconoce un gato «por capas».", sol: "Las primeras capas detectan bordes y manchas de color; las intermedias combinan esos bordes en formas (orejas, ojos, bigotes); las últimas combinan las formas y deciden que el conjunto es un gato." },
    { nivel: "medio", q: "Explica el método de los k vecinos más próximos con un ejemplo.", sol: "Para clasificar un ejemplo nuevo se buscan los k ejemplos conocidos más parecidos y se elige la etiqueta mayoritaria. Ejemplo con k = 3: una fruta nueva se parece a dos naranjas y una mandarina conocidas → se clasifica como naranja." },
    { nivel: "avanzado", q: "Diseña un experimento con Teachable Machine para clasificar tres gestos de la mano. ¿Cómo comprobarías si funciona bien?", sol: "Crear tres clases (puño, mano abierta, pulgar arriba) y grabar unas 100 imágenes de cada una con distintas luces, fondos y personas. Entrenar. Probar con personas y fondos que no estaban en el entrenamiento, anotar aciertos y fallos en una tabla y añadir ejemplos donde falle." },
    { nivel: "avanzado", q: "Un sistema de reconocimiento facial falla más con mujeres de piel oscura. Explica la causa probable y cómo corregirla.", sol: "Sesgo en los datos: había muchas menos fotos de ese grupo en el entrenamiento. Se corrige con datos más variados y representativos, midiendo la precisión por grupos y no solo en total, y con supervisión humana en decisiones importantes." },
    { nivel: "avanzado", q: "¿Por qué el reconocimiento de emociones en centros educativos está prohibido en la UE? Da dos argumentos.", sol: "Porque la ciencia no garantiza que una cara refleje con fiabilidad las emociones, así que puede clasificar mal a alumnos; y porque supone una vigilancia muy invasiva sobre menores en una situación de dependencia, que afecta a su intimidad y libertad." },
    { nivel: "avanzado", q: "Redacta las normas para usar IA generativa en un trabajo de clase (cinco puntos).", sol: "1) Preguntar al profesorado si se permite y para qué. 2) Usarla para entender, generar ideas o revisar, no para copiar. 3) Contrastar todos los datos en fuentes fiables. 4) Indicar qué herramienta se usó y para qué. 5) No introducir datos personales propios ni de otros." },
    { nivel: "avanzado", q: "Si una consulta a un chatbot gasta 3 Wh y una búsqueda web 0,3 Wh, ¿cuánta energía gastan 20 consultas diarias de 30 alumnos durante un curso de 175 días con cada método?", sol: "Consultas totales: 20 · 30 · 175 = 105.000. Chatbot: 105.000 · 3 = 315.000 Wh = 315 kWh. Buscador: 31,5 kWh. El chatbot gasta 10 veces más en este ejemplo." },
    { nivel: "avanzado", q: "Compara la IA de reglas de los años 60 con el aprendizaje automático actual: cómo funcionan, ventajas e inconvenientes.", sol: "La de reglas sigue instrucciones escritas por expertos: es explicable y predecible, pero no se adapta a situaciones imprevistas. El aprendizaje automático aprende patrones de los datos: se adapta a problemas complejos (imágenes, voz), pero necesita muchos datos, puede tener sesgos y cuesta explicar por qué decide algo." },
    { nivel: "avanzado", q: "Explica por qué la síntesis de voz puede facilitar estafas y propón dos medidas de protección para tu familia.", sol: "Con unos segundos de audio se puede imitar la voz de alguien y llamar fingiendo una emergencia para pedir dinero. Medidas: acordar una palabra clave familiar para emergencias y colgar y llamar al número habitual de esa persona para comprobarlo." },
    { nivel: "avanzado", q: "¿Puede una IA ser autora de una obra? Argumenta desde los derechos de autor.", sol: "En la legislación europea y española, la autoría corresponde a personas físicas: una obra creada solo por una IA no tiene autor protegido. Si una persona aporta decisiones creativas relevantes al usarla, puede haber protección sobre esa parte. Además, se discute si entrenar modelos con obras protegidas respeta los derechos de sus autores." },
    { nivel: "avanzado", q: "Elige un problema de tu entorno que la IA podría ayudar a resolver. Describe los datos que harían falta, el tipo de aprendizaje y un riesgo ético.", sol: "Ejemplo: clasificar residuos en la papelera del instituto con una cámara. Datos: miles de fotos de envases, papel y orgánico etiquetadas. Aprendizaje supervisado. Riesgo: que la cámara grabe a las personas; habría que enfocarla solo a la boca de la papelera y no guardar imágenes." },
  ],
  ejemplos: [
    { enunciado: "Un modelo clasifica 200 correos de prueba: 90 spam bien detectados, 10 spam no detectados, 95 normales correctos y 5 normales marcados como spam. Calcula su precisión.", pasos: ["Aciertos: 90 + 95 = 185.", "Total: 200.", "Precisión: 185 / 200 = 0,925.", "Errores graves: 5 correos normales irían a spam (podrías perder uno importante)."], resultado: "92,5 % de aciertos." },
    { enunciado: "Entrena mentalmente un árbol de decisión con estos días: lluvia → no bici (4 veces); sin lluvia y frío → no bici (2); sin lluvia y templado → bici (6). Clasifica un día sin lluvia y a 15 °C.", pasos: ["Primera pregunta: ¿llueve? separa perfectamente los 4 días de lluvia.", "Para los que no llueve, la pregunta ¿hace frío? separa 2 y 6.", "Día nuevo: no llueve → bajamos por la rama del no.", "15 °C es templado → hoja «bici»."], resultado: "Ir en bici." },
    { enunciado: "Mejora este prompt: «Hazme un trabajo de la IA».", pasos: ["Contexto: «Soy alumno de 4º de ESO y preparo una exposición de 5 minutos».", "Tarea: «Propón un guion sobre ventajas y riesgos de la IA en medicina».", "Formato: «Cinco apartados con dos ideas cada uno y un ejemplo real».", "Límites: «Lenguaje sencillo e indica qué datos debo comprobar»."], resultado: "Un prompt que ayuda a preparar el trabajo propio, en lugar de pedir que la IA lo haga por ti." },
  ],
  errores: ["Creer que la IA «entiende» o «sabe» lo que dice: calcula probabilidades a partir de patrones en los datos."],
  cuarta: ["funciona sin electricidad", "Para que el modelo sea gratis", "traduciendo de otro idioma siempre", "un antivirus", "más color", "por refuerzo", "por imitación de humanos", "contraseñas", "un cable de red", "solo cree trabajos en informática"],
  quiz: [
    { q: "¿En qué año se acuñó el término «inteligencia artificial»?", o: ["1936", "1956", "1997", "2022"], a: 1, e: "En el congreso de Dartmouth." },
    { q: "Cuando un modelo memoriza los ejemplos y falla con datos nuevos, hay…", o: ["sobreajuste", "cifrado", "latencia", "compresión"], a: 0, e: "No ha aprendido a generalizar." },
    { q: "Un modelo de lenguaje genera texto…", o: ["consultando una enciclopedia", "prediciendo el siguiente token", "copiando una web al azar", "con reglas gramaticales escritas a mano"], a: 1, e: "Token a token, según probabilidades." },
    { q: "La ventana de contexto es…", o: ["la pantalla del ordenador", "lo que el modelo puede tener en cuenta de la conversación", "el tamaño de los datos de entrenamiento", "un filtro de privacidad"], a: 1, e: "Lo que queda fuera, no lo «recuerda»." },
    { q: "Un árbol de decisión clasifica…", o: ["con preguntas de sí o no", "sin datos", "cifrando la información", "al azar"], a: 0, e: "Recorre el árbol hasta una hoja." },
    { q: "Según el Reglamento europeo, un chatbot debe…", o: ["ser gratuito", "avisar de que es una máquina", "tener voz", "funcionar sin Internet"], a: 1, e: "Es una obligación de transparencia." },
    { q: "Saber a qué objeto pertenece cada píxel de una imagen es…", o: ["clasificar", "detectar", "segmentar", "comprimir"], a: 2, e: "Se usa, por ejemplo, para delimitar un tumor." },
    { q: "¿Qué recurso consumen mucho los centros de datos además de electricidad?", o: ["Agua para refrigerar", "Papel", "Gasolina", "Arena"], a: 0, e: "Los servidores generan mucho calor." },
    { q: "La IA que puntúa a los ciudadanos por su conducta está en el nivel de riesgo…", o: ["mínimo", "limitado", "alto", "inaceptable"], a: 3, e: "Está prohibida en la UE." },
    { q: "El aprendizaje profundo despegó hacia 2012 gracias a…", o: ["las GPU y los grandes conjuntos de datos", "las impresoras 3D", "el fax", "el Bluetooth"], a: 0, e: "Permitieron entrenar redes con muchas capas." },
  ],
  cuartaEx: ["Un tipo de cable de fibra", "pedir que te haga todo el trabajo", "Que la IA solo hable en inglés"],
  examen: [
    { q: "¿Qué hace el parámetro de temperatura?", o: ["Mide el calor del servidor", "Controla cuánto se arriesga el modelo al elegir palabras", "Cambia el idioma", "Borra la conversación"], a: 1, e: "Más alta, más creatividad y variación." },
    { q: "En España vigila el cumplimiento de la ley de IA…", o: ["la AESIA", "la DGT", "el INE", "la RAE"], a: 0, e: "Agencia Española de Supervisión de la IA, en A Coruña." },
    { q: "Teachable Machine permite…", o: ["entrenar clasificadores sencillos sin programar", "fabricar chips", "cifrar el disco", "crear un sistema operativo"], a: 0, e: "Con imágenes, sonidos o posturas." },
    { q: "Una consulta a un chatbot, frente a una búsqueda web tradicional, suele gastar…", o: ["menos energía", "la misma", "bastante más energía", "nada de energía"], a: 2, e: "Requiere mucho más cálculo." },
    { q: "Los datos de entrenamiento deben ser…", o: ["pocos y parecidos", "variados, correctos y representativos", "solo de un país", "secretos para todos"], a: 1, e: "Si no, el modelo tendrá sesgos o fallará." },
  ],
  tarjetas: [
    ["Sobreajuste", "El modelo memoriza el entrenamiento y falla con datos nuevos."],
    ["Token", "Trozo de texto con el que trabaja un modelo de lenguaje."],
    ["Niveles del Reglamento de IA", "Inaceptable, alto, limitado y mínimo."],
    ["Árbol de decisión", "Clasificador formado por preguntas de sí o no."],
  ],
  glosario: [
    ["Inteligencia artificial", "Sistemas capaces de hacer tareas que asociamos a la inteligencia humana."],
    ["Aprendizaje automático", "Técnica en la que el sistema aprende patrones a partir de datos."],
    ["Aprendizaje profundo", "Aprendizaje con redes neuronales de muchas capas."],
    ["Red neuronal artificial", "Capas de unidades conectadas que ajustan sus conexiones al aprender."],
    ["Datos de entrenamiento", "Ejemplos con los que el modelo ajusta sus parámetros."],
    ["Etiqueta", "Respuesta correcta asociada a un ejemplo en el aprendizaje supervisado."],
    ["Sobreajuste", "Memorizar los datos de entrenamiento sin generalizar."],
    ["Precisión", "Porcentaje de aciertos de un modelo."],
    ["Árbol de decisión", "Modelo que clasifica con una serie de preguntas encadenadas."],
    ["Modelo de lenguaje", "Red neuronal entrenada para predecir el siguiente fragmento de texto."],
    ["Token", "Unidad de texto (palabra o parte) que procesa un modelo de lenguaje."],
    ["Prompt", "Instrucción que se da a una IA generativa."],
    ["Alucinación", "Respuesta inventada que la IA presenta como cierta."],
    ["Sesgo algorítmico", "Error sistemático que perjudica a un grupo, a menudo por datos poco representativos."],
    ["Visión artificial", "IA que analiza imágenes y vídeos."],
    ["Deepfake", "Contenido falso realista generado con IA."],
    ["Reglamento de IA", "Ley europea que regula la IA según su nivel de riesgo."],
    ["Centro de datos", "Instalación con miles de servidores donde funcionan la nube y la IA."],
  ],
  situacion: {
    titulo: "Entrenamos nuestra propia IA (y la auditamos)",
    reto: "Por equipos, entrenad un clasificador sencillo con Teachable Machine o Machine Learning for Kids que resuelva una necesidad del centro (clasificar residuos, reconocer gestos para un juego accesible, distinguir sonidos) y después auditadlo para detectar sesgos y límites.",
    pasos: [
      "Definid el problema, las clases que distinguirá el modelo y el uso que se le dará.",
      "Recoged y etiquetad los datos de entrenamiento con variedad (luces, fondos, personas) y reservad un grupo de prueba.",
      "Entrenad el modelo, medid su precisión con los datos de prueba y anotad los errores en una tabla.",
      "Buscad sesgos: probad con personas, objetos o condiciones poco representados y mejorad los datos.",
      "Clasificad vuestro sistema según el Reglamento europeo de IA y redactad una ficha de uso responsable.",
    ],
    producto: "El modelo funcionando (o integrado en Scratch), la tabla de pruebas y una ficha de transparencia de una página.",
    evaluacion: ["Los datos son suficientes, variados y están bien etiquetados.", "La precisión se mide con datos de prueba y se analizan los errores.", "Se detectan y corrigen sesgos o límites del modelo.", "La ficha explica con claridad qué hace el sistema, sus riesgos y su nivel según la ley."],
  },
  objetivos: ["Explicar cómo se entrena y se evalúa un modelo y cómo genera texto un modelo de lenguaje", "Valorar la IA según el Reglamento europeo y su impacto ambiental"],
  fuentes: [{ t: "Reglamento (UE) 2024/1689 de Inteligencia Artificial (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R1689" }],
});
