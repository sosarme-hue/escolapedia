// Programación y robótica 3º ESO: proyecto de robótica. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Proyecto de robótica",
  minutos: 50,
  objetivos: ["Aplicar las fases del proyecto tecnológico a un robot", "Planificar el trabajo en equipo con roles, tareas y calendario", "Construir y programar un robot móvil que responda a sensores", "Probar, documentar y presentar el proyecto"],
  claves: ["proyecto", "requisitos", "prototipo", "iteración", "trabajo en equipo", "documentación"],
  pregunta: {
    texto: "¿Por qué los ingenieros construyen muchos prototipos que fallan antes del robot definitivo?",
    respuesta: "Porque cada fallo enseña algo. En un proyecto real se diseña, se construye un <mark>prototipo</mark>, se prueba, se descubre qué falla y se mejora. Este ciclo, la <b>iteración</b>, es más rápido y barato que intentar acertar a la primera. Los robots de exploración espacial pasan por cientos de pruebas antes de despegar.",
  },
  bloques: [
    {
      html: `<h3>Qué es un proyecto de robótica</h3><p>Un <b>proyecto</b> reúne todo lo aprendido para resolver un problema real con un robot. No se trata solo de programar: hay que <b>diseñar</b>, <b>construir</b>, <b>probar</b>, <b>organizarse</b> y <b>comunicar</b>.</p><p>Ejemplos de retos adecuados para 3º de ESO:</p><ul><li>Un <b>robot siguelíneas</b> que recorra un circuito lo más rápido posible.</li><li>Un <b>robot que esquiva obstáculos</b> y explora una habitación.</li><li>Una <b>barrera de aparcamiento</b> automática con contador de plazas.</li><li>Un <b>invernadero inteligente</b> que riega y ventila solo.</li><li>Un <b>brazo robótico</b> con servos controlado desde una app o una micro:bit.</li></ul>`,
      video: { id: "Z1iHtfAF6dE", titulo: "3 ideas de proyectos de robótica fáciles", canal: "ValPat STEAM", vistas: 74278, megusta: 0 },
    },
    {
      html: `<h3>Las fases del proyecto</h3><ol><li><b>Identificar el problema</b> y fijar los <b>requisitos</b>: qué debe hacer el robot, con qué limitaciones (tamaño, presupuesto, tiempo).</li><li><b>Buscar información</b> e ideas: soluciones existentes, sensores posibles.</li><li><b>Diseñar</b>: bocetos, lista de materiales, esquema eléctrico y algoritmo.</li><li><b>Planificar</b>: tareas, responsables y calendario.</li><li><b>Construir</b> el prototipo y <b>programarlo</b> por partes.</li><li><b>Probar y mejorar</b> (iterar).</li><li><b>Evaluar, documentar y presentar</b>.</li></ol><p>No es un camino recto: las pruebas suelen obligar a volver al diseño.</p>`,
      svg: svg("Fases del proyecto con la vuelta de iteración: problema, diseño, construcción, pruebas y presentación", `${[["problema", "var(--inf)"], ["diseño", "var(--leaf)"], ["construir", "var(--pen)"], ["probar", "var(--red)"], ["presentar", "var(--ink)"]].map(([n, c], i) => `<rect x="${8 + i * 50}" y="70" width="46" height="30" rx="8" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2"/>${t(31 + i * 50, 89, n, { c, s: 9 })}`).join("")}
        <path d="M181 102 C 170 150 90 150 81 104" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#fpr)"/><defs><marker id="fpr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L 10 5 L 0 10 Z" fill="var(--red)"/></marker></defs>
        ${t(130, 156, "iterar: probar → rediseñar", { c: "var(--red)", s: 11 })}${t(130, 48, "fases del proyecto", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Requisitos claros y medibles</h3><p>Un buen requisito se puede <b>comprobar</b>. «Que el robot sea rápido» es ambiguo; «que recorra el circuito de 5 m en menos de 40 s» es medible.</p>${tabla(["Requisito", "Cómo se comprueba"], [["sigue una línea negra de 2 cm de ancho", "completa 3 vueltas sin salirse"], ["se detiene a menos de 10 cm de un obstáculo", "prueba con una caja, medir con regla"], ["cabe en una caja de 20 × 20 cm", "medir"], ["funciona 15 minutos con una batería", "cronometrar"], ["presupuesto inferior a 40 €", "lista de materiales con precios"]])}<p>Los requisitos se escriben <mark>antes de construir</mark> y sirven al final para evaluar el proyecto.</p>`,
    },
    {
      html: `<h3>Trabajo en equipo</h3><p>Los proyectos se hacen en grupos de 3 o 4 personas con <b>roles</b> que rotan:</p><ul><li><b>Coordinación</b>: organiza las tareas y vigila el calendario.</li><li><b>Diseño y montaje</b>: estructura, ruedas, cableado.</li><li><b>Programación</b>: algoritmo y código.</li><li><b>Documentación</b>: diario del proyecto, fotos, memoria.</li></ul><p>Todos aprenden de todo: los roles indican quién es responsable, no quién trabaja. Herramientas útiles: un <b>tablero de tareas</b> (por hacer, en curso, hecho), un calendario con hitos y un <b>diario</b> donde anotar decisiones, problemas y soluciones cada sesión. Los desacuerdos se resuelven con datos: probar las dos ideas y quedarse con la que funcione mejor.</p>`,
    },
    {
      html: `<h3>Ejemplo: robot siguelíneas</h3><p>Un <b>robot siguelíneas</b> lleva dos sensores de <b>infrarrojos</b> mirando al suelo, a ambos lados de la línea negra. El blanco refleja la luz infrarroja y el negro la absorbe.</p>${tabla(["Sensor izquierdo", "Sensor derecho", "Acción"], [["blanco", "blanco", "avanzar recto"], ["negro", "blanco", "girar a la izquierda"], ["blanco", "negro", "girar a la derecha"], ["negro", "negro", "parar (cruce o meta)"]])}<p>Para girar, se para o se frena la rueda del lado hacia el que se gira. Es un sistema de <b>lazo cerrado</b>: mide, corrige y vuelve a medir muchas veces por segundo.</p>`,
      svg: svg("Robot siguelíneas visto desde arriba con dos sensores a ambos lados de una línea negra curva", `<path d="M130 180 V 90 C 130 50 170 40 210 12" fill="none" stroke="var(--ink)" stroke-width="14"/>
        <rect x="100" y="100" width="60" height="62" rx="10" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2.5"/><rect x="88" y="120" width="10" height="28" rx="3" fill="var(--ink)"/><rect x="162" y="120" width="10" height="28" rx="3" fill="var(--ink)"/>
        <circle cx="113" cy="96" r="6" fill="var(--red)"/><circle cx="147" cy="96" r="6" fill="var(--red)"/><path d="M155 96 H 186" stroke="var(--red)" stroke-width="1.5"/>
        ${t(218, 92, "sensores IR", { c: "var(--red)", s: 11 })}${t(218, 108, "a cada lado", { c: "var(--red)", s: 11 })}${t(70, 40, "línea negra", { c: "var(--ink)", s: 11 })}`),
      video: { id: "W9Uy-wgD5Vc", titulo: "Robot seguidor de línea negra: cómo se hace", canal: "El profe García", vistas: 1636400, megusta: 0 },
    },
    {
      html: `<h3>Construir y programar por partes</h3><p>El error más común es montarlo todo, escribir todo el programa y probarlo al final: si no funciona, no sabes dónde está el fallo. Es mejor avanzar en <b>pasos pequeños</b> comprobando cada uno:</p><ol><li>Probar que <b>cada motor</b> gira en el sentido correcto.</li><li>Leer <b>cada sensor</b> y mostrar sus valores (calibrar negro y blanco).</li><li>Programar <b>avanzar</b>, <b>girar</b> y <b>parar</b> como funciones separadas.</li><li>Unirlo todo en el bucle principal.</li><li>Ajustar velocidades y umbrales en el circuito real.</li></ol><p>Guarda <b>versiones</b> del programa (v1, v2…) para poder volver atrás si un cambio empeora el resultado.</p>`,
    },
    {
      html: `<h3>Pruebas y mejora</h3><p>Las pruebas deben ser <b>sistemáticas</b>: mismas condiciones, varias repeticiones y anotar los resultados en una tabla.</p>${tabla(["Versión", "Cambio", "Tiempo (s)", "Salidas de pista"], [["v1", "velocidad 50 %", "52", "0"], ["v2", "velocidad 80 %", "35", "3"], ["v3", "80 % en recta, 50 % en curva", "38", "0"]])}<p>La tabla muestra una situación típica: ir más rápido provoca errores, y la solución es un compromiso. Cambia <mark>una sola variable</mark> cada vez para saber qué produce cada efecto. Si un problema se repite, anótalo en el diario con su causa y su solución.</p>`,
    },
    {
      html: `<h3>Documentar y presentar</h3><p>Un proyecto no termina hasta que se <b>comunica</b>. La <b>memoria</b> del proyecto incluye:</p><ul><li>Problema y requisitos.</li><li>Diseño: bocetos, esquema eléctrico, lista de materiales y presupuesto.</li><li>Algoritmo (diagrama de flujo) y código comentado.</li><li>Pruebas realizadas y mejoras.</li><li>Conclusiones: qué se cumplió, qué no y qué se haría distinto.</li></ul><p>En la <b>presentación</b> (unos 5 minutos) se hace una demostración en vivo, se explican las decisiones y se responde a preguntas. Un vídeo corto del robot funcionando es un buen complemento por si algo falla ese día.</p>`,
    },
    {
      html: `<h3>Robótica, sociedad y sostenibilidad</h3><p>Los robots ya trabajan en fábricas, almacenes, hospitales, el campo o el espacio. Plantean preguntas que también forman parte del proyecto:</p><ul><li>¿Qué <b>trabajos</b> cambian o desaparecen y cuáles nuevos aparecen?</li><li>¿Quién es <b>responsable</b> si un robot autónomo se equivoca?</li><li>¿Cómo se <b>reciclan</b> los componentes y las baterías?</li></ul><p>En tu proyecto puedes aplicar criterios <b>sostenibles</b>: reutilizar materiales (cartón, tapones, motores de juguetes viejos), usar baterías recargables y desmontar al final para que los componentes sirvan a otros grupos.</p>`,
    },
  ],
  figura: {
    titulo: "Del reto al robot",
    svg: filas("Requisitos medibles; diseño con bocetos, materiales y algoritmo; equipo con roles; construir y probar por partes; documentar y presentar", [["Requisitos", "qué debe hacer, medible y comprobable", "var(--inf)"], ["Diseño", "bocetos · materiales · esquema · algoritmo", "var(--leaf)"], ["Equipo", "roles · tablero de tareas · diario", "var(--pen)"], ["Construir y probar", "por partes · una variable cada vez · versiones", "var(--red)"], ["Comunicar", "memoria · demostración · conclusiones", "var(--ink)"]], 250),
  },
  video: { id: "NZt_MXZc_aQ", titulo: "Cómo hacer un robot seguidor de líneas: tutorial fácil", canal: "vadechips", vistas: 331385, megusta: 0, busqueda: "robot seguidor de línea" },
  quiz: mezcla([
    { q: "Repetir el ciclo diseñar, probar y mejorar se llama…", o: ["iterar", "compilar", "calibrar"], a: 0, e: "Iteración." },
    { q: "Un requisito bien escrito debe ser…", o: ["medible", "ambiguo", "secreto"], a: 0, e: "Se puede comprobar." },
    { q: "La primera versión funcional de un robot para probar ideas es un…", o: ["prototipo", "manual", "presupuesto"], a: 0, e: "Se mejora tras las pruebas." },
    { q: "Un robot siguelíneas usa sensores de…", o: ["infrarrojos", "temperatura", "sonido"], a: 0, e: "El negro absorbe la luz IR." },
    { q: "Si el sensor izquierdo ve negro y el derecho blanco, el robot debe…", o: ["girar a la izquierda", "girar a la derecha", "parar"], a: 0, e: "Volver sobre la línea." },
    { q: "Al probar, conviene cambiar…", o: ["una sola variable cada vez", "todo a la vez", "nada nunca"], a: 0, e: "Para saber qué causa cada efecto." },
    { q: "La persona que organiza tareas y calendario tiene el rol de…", o: ["coordinación", "programación", "montaje"], a: 0, e: "Los roles rotan." },
    { q: "El documento final que recoge todo el proyecto es la…", o: ["memoria", "protoboard", "traza"], a: 0, e: "Problema, diseño, pruebas, conclusiones." },
    { q: "Guardar v1, v2, v3 del programa sirve para…", o: ["poder volver atrás", "ocupar memoria", "nada"], a: 0, e: "Control de versiones." },
    { q: "Un criterio sostenible en un proyecto es…", o: ["reutilizar materiales", "usar pilas desechables", "tirar los componentes"], a: 0, e: "Y baterías recargables." },
  ]),
  examen: mezcla([
    { q: "«Que el robot sea bonito» es un requisito…", o: ["no medible", "medible", "eléctrico"], a: 0, e: "Hay que concretarlo." },
    { q: "Si los dos sensores del siguelíneas ven negro, lo habitual es…", o: ["parar (cruce o meta)", "girar a la izquierda", "acelerar"], a: 0, e: "Según el reto." },
    { q: "Probar cada motor por separado antes de unirlo todo es construir…", o: ["por partes", "al revés", "sin plan"], a: 0, e: "Facilita encontrar fallos." },
  ]),
  feynman: ["Las fases de un proyecto de robótica", "Cómo escribir un requisito medible", "Cómo decide un robot siguelíneas hacia dónde girar", "Por qué conviene construir y probar por partes"],
  mapa: mapa("PROYECTO", "var(--eso)", [
    ["Requisitos", "medibles", "var(--inf)"],
    ["Diseño", "bocetos · algoritmo", "var(--leaf)"],
    ["Prototipo", "construir · probar", "var(--red)"],
    ["Comunicar", "memoria · demo", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Requisito", "Lo que debe cumplir el robot, de forma medible."],
    ["Prototipo", "Primera versión funcional para probar ideas."],
    ["Iterar", "Repetir diseñar → probar → mejorar."],
    ["Roles", "Responsabilidades en el equipo: coordinación, montaje, programación, documentación."],
    ["Diario del proyecto", "Registro de decisiones, problemas y soluciones."],
    ["Siguelíneas", "Robot que sigue una línea con sensores infrarrojos."],
    ["Prueba sistemática", "Mismas condiciones, varias repeticiones, una variable cada vez."],
    ["Memoria", "Documento final con todo el proyecto."],
  ],
  familias: ["Pedid que os expliquen el robot del proyecto y qué problemas han tenido que resolver.", "Buscad juntos robots en la vida diaria: aspiradora, cortacésped, almacenes.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Proyecto tecnológico aplicado a la robótica: requisitos, diseño, planificación, construcción por partes, pruebas sistemáticas, iteración, documentación, presentación e impacto social (RD 217/2022, programación, robótica y trabajo cooperativo).",
    ideas: ["Liga de siguelíneas con circuito común y tabla de tiempos.", "Rúbrica compartida con el alumnado basada en sus propios requisitos.", "Feria de robots abierta a las familias con demostraciones."],
  },
  fuentes: [RD, { t: "INTEF: recursos de programación y robótica educativa", url: "https://code.intef.es/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Proyectos resueltos",
  ejemplos: [
    { enunciado: "Convierte el reto «un robot que no choque» en requisitos medibles.",
      pasos: ["Se detiene o gira a menos de 15 cm de cualquier obstáculo.", "Explora una zona de 2 × 2 m durante 3 minutos sin tocar ninguna pared.", "Cabe en 20 × 20 cm y cuesta menos de 40 €."],
      resultado: "Tres requisitos que se pueden comprobar con regla, cronómetro y presupuesto." },
    { enunciado: "Escribe el algoritmo de un siguelíneas con dos sensores.",
      pasos: ["por siempre: leer izq y der.", "si izq = blanco y der = blanco → avanzar.", "si izq = negro y der = blanco → girar izquierda.", "si izq = blanco y der = negro → girar derecha.", "si ambos negro → parar."],
      resultado: "Cuatro casos cubiertos con condicionales." },
    { enunciado: "El robot se sale en las curvas a velocidad 80 %. ¿Cómo lo mejorarías?",
      pasos: ["Hipótesis: va demasiado rápido para corregir a tiempo.", "Prueba 1: bajar a 60 % en todo el circuito; anotar tiempo y salidas.", "Prueba 2: 80 % en recta y 50 % cuando un sensor ve negro.", "Comparar resultados en una tabla."],
      resultado: "Mejora basada en pruebas cambiando una variable cada vez." },
  ],
  errores: [
    "Empezar a construir sin requisitos ni diseño.",
    "Montar todo y probar solo al final.",
    "Escribir requisitos vagos que no se pueden comprobar.",
    "No calibrar los sensores en el circuito real.",
    "Que una sola persona haga todo el trabajo del grupo.",
    "No documentar: al final nadie recuerda por qué se tomó cada decisión.",
  ],
  ejercicios: [
    { q: "Ordena las fases: probar, requisitos, construir, presentar, diseñar.", sol: "Requisitos, diseñar, construir, probar, presentar (con iteraciones)." },
    { q: "Reescribe como requisito medible: «el robot debe ser ligero».", sol: "Por ejemplo: «el robot debe pesar menos de 500 g»." },
    { q: "¿Qué cuatro roles puede tener un equipo de proyecto?", sol: "Coordinación, diseño y montaje, programación y documentación." },
    { q: "Explica por qué el negro y el blanco se distinguen con un sensor de infrarrojos.", sol: "El blanco refleja la luz infrarroja y el negro la absorbe, así que el sensor recibe más o menos luz." },
    { q: "Si el sensor derecho ve negro y el izquierdo blanco, ¿hacia dónde gira el robot?", sol: "Hacia la derecha." },
    { q: "Haz la lista de materiales de un robot que esquiva obstáculos.", sol: "Placa (Arduino o micro:bit), 2 motores con ruedas, rueda loca, controlador de motores, sensor de ultrasonidos, batería, chasis y cables." },
    { q: "¿Por qué es útil guardar versiones del programa?", sol: "Para volver a una versión que funcionaba si un cambio empeora el robot." },
    { q: "Diseña una tabla para registrar las pruebas de tu robot.", sol: "Columnas: versión, cambio realizado, resultado medido (tiempo, errores), observaciones." },
    { q: "Nombra dos medidas para que tu proyecto sea más sostenible.", sol: "Reutilizar materiales y usar baterías recargables (también desmontar y reutilizar componentes)." },
    { q: "Planifica un proyecto de barrera de aparcamiento: requisitos, componentes, algoritmo y calendario de 4 semanas.", sol: "Respuesta abierta; debe incluir sensor de presencia, servo para la barrera, contador de plazas y fases repartidas en semanas." },
  ],
};
