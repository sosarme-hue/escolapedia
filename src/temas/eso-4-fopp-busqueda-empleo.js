// Formación y Orientación Personal y Profesional 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, flujo, rueda } = require("./_hum");

module.exports = {
  materia: "Formación y Orientación Personal y Profesional",
  curso: "4-eso",
  titulo: "Búsqueda de empleo",
  minutos: 35,
  objetivos: ["Conocer las principales fuentes y canales para buscar empleo", "Elaborar un currículum y una carta de presentación eficaces", "Prepararse para una entrevista de trabajo y cuidar la identidad digital"],
  claves: ["currículum", "Europass", "carta de presentación", "entrevista", "red de contactos", "identidad digital"],
  pregunta: {
    texto: "Una persona de selección dedica de media unos pocos segundos a cada currículum en la primera lectura. Si tienes 16 años y casi ninguna experiencia, ¿cómo consigues que se fije en el tuyo?",
    respuesta: "Con un <mark>currículum</mark> claro, breve y adaptado a cada oferta, que destaque tu formación, tus idiomas, tus <b>competencias</b> y lo que has hecho fuera de clase (voluntariado, deporte, proyectos). Junto con una buena carta y una entrevista preparada, multiplica tus opciones.",
  },
  bloques: [
    {
      html: `<h3>Dónde buscar</h3><p>Hay muchos canales: los <b>portales de empleo</b> en internet, las webs de empresas, los <mark>servicios públicos de empleo</mark> (SEPE y los de cada comunidad), el programa de <b>Garantía Juvenil</b> para menores de 30 años, las bolsas de empleo de centros de FP y universidades, las empresas de trabajo temporal y las redes profesionales. Una de las vías más eficaces es la <b>red de contactos</b>: familia, profesores, antiguos compañeros.</p>`,
      svg: rueda("Canales de búsqueda de empleo", "BUSCAR|EMPLEO", [["portales web", "var(--pen)"], ["SEPE", "var(--red)"], ["Garantía Juv.", "var(--leaf)"], ["contactos", "var(--sun)"], ["bolsas FP/univ.", "var(--bac)"], ["candidatura", "var(--muted)"]], "var(--pri)"),
    },
    {
      html: `<h3>El currículum</h3><p>El <mark>currículum vítae</mark> (CV) resume quién eres profesionalmente. Debe ocupar <b>una página</b>, ser claro y sin faltas. Incluye: datos de contacto (sin datos innecesarios), un breve perfil, <b>formación</b>, <b>experiencia</b> (también prácticas o voluntariado), <b>idiomas</b>, competencias digitales y otras habilidades. El modelo <b>Europass</b> es común en toda la Unión Europea. Adáptalo a cada oferta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de un currículum de una página con sus apartados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="70" y="12" width="120" height="156" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="94" cy="36" r="12" fill="var(--line)"/><rect x="112" y="28" width="66" height="7" rx="3" fill="var(--ink)"/><rect x="112" y="40" width="50" height="5" rx="2" fill="var(--muted)"/>
        ${[["perfil", 60, "var(--pen)"], ["formación", 82, "var(--leaf)"], ["experiencia", 104, "var(--sun)"], ["idiomas", 126, "var(--bac)"], ["habilidades", 148, "var(--red)"]].map(([t, y, c]) => `<rect x="82" y="${y}" width="6" height="14" fill="${c}"/><rect x="94" y="${y + 2}" width="84" height="4" rx="2" fill="var(--line)"/><rect x="94" y="${y + 9}" width="64" height="4" rx="2" fill="var(--line)"/><text x="${y % 44 ? 62 : 198}" y="${y + 11}" text-anchor="${y % 44 ? "end" : "start"}" font-size="11" font-weight="700" fill="${c}" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>La carta de presentación</h3><p>La <mark>carta de presentación</mark> acompaña al CV y explica por qué te interesa ese puesto y qué puedes aportar. Debe ser breve (tres o cuatro párrafos), personalizada para cada empresa y con un tono educado. Estructura: saludo, motivo de la carta, qué te hace adecuado/a para el puesto, despedida y disponibilidad para una entrevista.</p>`,
      svg: filas("Estructura de una carta de presentación", [["1. Saludo", "a quién te diriges", "var(--pen)"], ["2. Motivo", "qué puesto y por qué", "var(--leaf)"], ["3. Aporto", "formación, cualidades", "var(--sun)"], ["4. Cierre", "disponible para entrevista", "var(--red)"]]),
    },
    {
      html: `<h3>La entrevista y tu huella digital</h3><p>Antes de la <mark>entrevista</mark>, infórmate sobre la empresa y prepara respuestas a preguntas típicas («háblame de ti», «¿por qué quieres este puesto?», «una fortaleza y una debilidad»). Sé puntual, cuida la imagen y la comunicación no verbal (mirada, postura) y lleva alguna pregunta preparada. Recuerda que muchas empresas miran las <b>redes sociales</b>: tu <b>identidad digital</b> también es tu carta de presentación.</p>`,
      svg: dos("Qué hacer y qué evitar en una entrevista", ["Sí", ["llegar puntual", "informarse antes", "mirar a los ojos", "ejemplos reales", "hacer preguntas"], "var(--leaf)"], ["No", ["llegar tarde", "mirar el móvil", "mentir", "hablar mal de", "otros empleos"], "var(--red)"]),
    },
  ],
  figura: {
    titulo: "El proceso de selección",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Seis fases del proceso de selección, de la oferta a la incorporación">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      <defs><marker id="ps-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
      <g ${F} text-anchor="middle">
      ${["oferta", "envías CV", "criba de CV", "pruebas", "entrevista", "contrato"].map((t, i) => { const x = 66 + i * 110; return `${i ? `<path d="M${x - 66} 90 H ${x - 46}" stroke="var(--ink)" stroke-width="2" marker-end="url(#ps-a)"/>` : ""}<circle cx="${x}" cy="90" r="42" fill="var(--card)" stroke="var(--pri)" stroke-width="3"/><text x="${x}" y="80" font-size="20" font-weight="700" fill="var(--pri)" ${D}>${i + 1}</text><text x="${x}" y="104" font-size="12.5" font-weight="700" fill="var(--ink)">${t}</text>`; }).join("")}
      </g>
      <text x="340" y="172" text-anchor="middle" font-size="12.5" fill="var(--muted)" ${F}>en cada fase se descartan candidaturas: cuida cada paso</text>
    </svg>`,
  },
  video: { id: "lDhOVbR_4Kg", titulo: "Cómo hacer un currículum si no tienes ninguna experiencia", canal: "Business Insider España", vistas: 582096, megusta: 0, busqueda: "cómo hacer un currículum" },
  quiz: [
    { q: "¿Cuánto debe ocupar un currículum para un primer empleo?", o: ["Una página", "Cinco páginas", "No importa"], a: 0, e: "Breve y claro, para que se lea en pocos segundos." },
    { q: "Europass es…", o: ["un modelo de CV común en la Unión Europea", "un billete de tren", "una red social"], a: 0, e: "Facilita que tu CV se entienda en cualquier país de la UE." },
    { q: "¿Qué programa público ayuda a menores de 30 años a encontrar empleo?", o: ["Erasmus", "Garantía Juvenil", "Plan Marshall"], a: 1, e: "Ofrece formación, prácticas y ofertas de empleo." },
    { q: "La carta de presentación sirve para…", o: ["repetir el CV", "explicar por qué te interesa el puesto y qué aportas", "pedir un sueldo alto"], a: 1, e: "Debe personalizarse para cada empresa." },
    { q: "En una entrevista conviene…", o: ["informarse antes sobre la empresa", "mirar el móvil", "llegar justo a la hora o un poco tarde"], a: 0, e: "Demuestra interés y te ayuda a responder mejor." },
  ],
  examen: [
    { q: "Sin experiencia laboral, en el CV puedes destacar…", o: ["nada", "voluntariado, proyectos, deporte e idiomas", "datos personales como la religión"], a: 1, e: "Muestran competencias como constancia, trabajo en equipo o liderazgo." },
    { q: "La identidad digital es…", o: ["el DNI electrónico", "la imagen que das de ti en internet", "una contraseña"], a: 1, e: "Muchas empresas revisan las redes de los candidatos." },
    { q: "La red de contactos es eficaz porque…", o: ["muchas ofertas se cubren por recomendación", "es obligatoria", "sustituye al CV"], a: 0, e: "Contar a tu entorno qué buscas abre puertas." },
  ],
  feynman: ["Cinco canales para buscar empleo", "Qué apartados lleva un buen currículum", "La estructura de una carta de presentación", "Cómo preparar una entrevista y cuidar tu identidad digital"],
  mapa: mapa("BUSCAR EMPLEO", "var(--pri)", [
    ["Canales", "portales · SEPE · contactos", "var(--pen)"],
    ["CV", "1 página · Europass · adaptado", "var(--leaf)"],
    ["Carta", "motivo · qué aporto", "var(--sun)"],
    ["Entrevista", "preparar · puntual · redes", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Europass", "Modelo europeo de currículum."],
    ["Garantía Juvenil", "Programa público de empleo para menores de 30 años."],
    ["Carta de presentación", "Texto breve que explica por qué te interesa el puesto y qué aportas."],
    ["Pregunta típica de entrevista", "«Háblame de ti», «¿por qué este puesto?», «una fortaleza y una debilidad»."],
    ["Identidad digital", "La imagen que proyectas en internet y redes sociales."],
  ],
  familias: ["Ayudadle a escribir su primer CV con el modelo Europass, aunque sea solo de práctica.", "Haced un ensayo de entrevista en casa con las preguntas típicas.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Búsqueda activa de empleo: canales, currículum, carta de presentación, entrevista y marca personal (RD 217/2022, Formación y Orientación Personal y Profesional 4º).",
    ideas: ["Elaborar el CV Europass de cada estudiante.", "Simulación de entrevistas grabadas con rúbrica de autoevaluación.", "Revisión de la propia identidad digital (búsqueda del nombre en internet)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Europass, Comisión Europea", url: "https://europass.europa.eu/es" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Redactar un perfil profesional y adaptar el currículum a una oferta", "Preparar respuestas a preguntas de entrevista con el método STAR"],
  bloques: [
    { tras: "Dónde buscar", html: `<h3>Cómo leer una oferta de empleo</h3><p>Una oferta suele indicar el <b>puesto</b>, las <b>funciones</b>, los <b>requisitos</b> (formación, experiencia, idiomas, carné de conducir), lo que se <b>valora</b> (no imprescindible), las <b>condiciones</b> (tipo de contrato, jornada, salario) y cómo inscribirse. Léela con calma y subraya las <mark>palabras clave</mark>: te dicen qué destacar en tu CV y en la carta. Desconfía de ofertas que piden dinero por adelantado, prometen sueldos muy altos por poco trabajo o no identifican a la empresa: pueden ser <b>fraudes</b>.</p>` },
    { tras: "El currículum", html: `<h3>Tipos de currículum y perfil profesional</h3>${tabla(["Tipo", "Cómo se ordena", "Cuándo conviene"], [["Cronológico inverso", "lo más reciente primero", "el más habitual"], ["Funcional", "por competencias, no por fechas", "si tienes poca experiencia o huecos"], ["Creativo", "diseño visual, vídeo o web", "diseño, comunicación, publicidad"]])}<p>El <mark>perfil profesional</mark> es un párrafo de 2-3 líneas al principio del CV que resume quién eres y qué aportas. Ejemplo: «Estudiante de 4.º de ESO, responsable y con buen trato con niños. Monitora voluntaria de campamentos (2 veranos). Busco trabajo de verano como auxiliar de ocio infantil». Los sistemas automáticos de selección filtran CV por palabras clave, así que conviene usar las de la oferta.</p>` },
    { tras: "La entrevista y tu huella", html: `<h3>El método STAR para responder</h3><p>Muchas entrevistas incluyen preguntas sobre situaciones pasadas: «cuéntame una vez que resolviste un problema». El <mark>método STAR</mark> ayuda a responder con orden: <b>S</b>ituación (contexto), <b>T</b>area (qué tenías que hacer), <b>A</b>cción (qué hiciste tú) y <b>R</b>esultado (qué pasó y qué aprendiste). Ejemplo: «En un trabajo de grupo (S) teníamos que presentar en una semana (T). Un compañero se puso enfermo, así que repartí sus partes y organicé un calendario (A). Lo entregamos a tiempo y sacamos un 9 (R)».</p>`, video: { id: "tYwtvtaxtmM", titulo: "Cómo responder a la pregunta «Háblame de ti»", canal: "Virna Vitteri - Coach de Carrera", vistas: 2717028, megusta: 0 } },
    { tras: "La entrevista y tu huella", html: `<h3>Tipos de entrevista y tu primer empleo</h3><p>Las entrevistas pueden ser <b>individuales</b>, <b>de grupo</b> (varias personas resuelven un caso mientras observan cómo colaboran), <b>por teléfono o videollamada</b> (cuida la luz, el fondo y la conexión) o con <b>pruebas</b> técnicas o psicotécnicas. Tras la entrevista, un breve correo de agradecimiento causa buena impresión. Para un primer empleo con 16 o 17 años, las opciones más habituales son <mark>trabajos de temporada</mark> (hostelería, ocio infantil, campañas de comercio), dar clases particulares o colaborar en el negocio familiar, siempre con contrato y respetando los límites para menores.</p>` },
  ],
  ejemplos: [
    { enunciado: "Oferta: «Auxiliar de tienda. Valoramos inglés, atención al cliente y disponibilidad en julio». Adapta el perfil de Hugo, que juega al baloncesto, tiene un B1 de inglés y ayuda en la tienda de sus tíos.", pasos: ["Palabras clave: inglés, atención al cliente, julio.", "Relacionar la experiencia: ayuda en la tienda familiar.", "Escribir un perfil breve con esas palabras."], resultado: "«Estudiante con nivel B1 de inglés y experiencia en atención al cliente en un comercio familiar. Trabajo en equipo (baloncesto federado). Disponible todo julio»." },
    { enunciado: "Responde con STAR: «Dime una vez que te equivocaste».", pasos: ["S: en el instituto organizaba la venta de camisetas del viaje.", "T: había que encargar las tallas correctas.", "A: me equivoqué al pedir; avisé enseguida, pedí perdón y negocié el cambio con la tienda.", "R: llegaron a tiempo y desde entonces reviso dos veces los pedidos."], resultado: "Una respuesta honesta que muestra responsabilidad y aprendizaje." },
    { enunciado: "Detecta las señales de fraude: «Gana 3.000 € al mes desde casa. Solo tienes que pagar 50 € de inscripción».", pasos: ["Sueldo muy alto para un trabajo sin requisitos.", "Piden dinero por adelantado.", "No dice qué empresa es ni qué trabajo hay que hacer."], resultado: "Es casi seguro un fraude: no hay que pagar ni dar datos bancarios." },
  ],
  errores: [
    "Enviar el mismo CV a todas las ofertas sin adaptarlo.",
    "Usar un correo poco profesional (por ejemplo, «princesita2009@…»).",
    "Inventar datos en el CV: se descubren en la entrevista o al comprobar referencias.",
    "Responder en la entrevista con un «sí» o «no» sin dar ejemplos.",
    "Pagar por conseguir un empleo: las empresas serias no cobran a los candidatos.",
  ],
  ejercicios: [
    { q: "¿Qué partes tiene una oferta de empleo?", sol: "Puesto, funciones, requisitos, lo que se valora, condiciones y forma de inscribirse." },
    { q: "Cita tres señales de una oferta fraudulenta.", sol: "Piden dinero por adelantado, prometen sueldos muy altos sin requisitos y no identifican a la empresa." },
    { q: "¿Cuándo conviene un CV funcional?", sol: "Cuando se tiene poca experiencia o huecos, porque organiza por competencias." },
    { q: "Escribe tu perfil profesional en tres líneas.", sol: "Respuesta personal: quién eres, qué sabes hacer y qué buscas." },
    { q: "¿Qué significa STAR?", sol: "Situación, Tarea, Acción y Resultado." },
    { q: "Responde con STAR a «cuéntame un logro del que estés orgulloso».", sol: "Respuesta personal con situación, tarea, acción y resultado concretos." },
    { q: "Da tres consejos para una entrevista por videollamada.", sol: "Buena luz de frente, fondo ordenado y probar antes la conexión y el micrófono." },
    { q: "¿Qué es una entrevista de grupo?", sol: "Varios candidatos resuelven juntos un caso mientras los seleccionadores observan cómo se comunican y colaboran." },
    { q: "Cita dos empleos habituales para jóvenes de 16-17 años.", sol: "Trabajos de verano en hostelería y monitor de ocio infantil." },
    { q: "¿Por qué enviar un correo de agradecimiento tras la entrevista?", sol: "Porque muestra interés y educación y te recuerda ante la empresa." },
  ],
  quiz: [
    { q: "El CV más habitual es el…", o: ["cronológico inverso", "funcional", "creativo"], a: 0, e: "Lo más reciente primero." },
    { q: "El perfil profesional ocupa…", o: ["2-3 líneas", "dos páginas", "una palabra"], a: 0, e: "Resume quién eres y qué aportas." },
    { q: "En STAR, la «A» significa…", o: ["Acción", "Actitud", "Ayuda"], a: 0, e: "Qué hiciste tú." },
    { q: "Si una oferta pide dinero para inscribirse…", o: ["desconfía", "paga enseguida", "es normal"], a: 0, e: "Es una señal de fraude." },
    { q: "Las palabras clave de la oferta sirven para…", o: ["adaptar el CV", "nada", "rellenar el DNI"], a: 0, e: "Muchos filtros son automáticos." },
  ],
  tarjetas: [
    ["Perfil profesional", "Resumen de 2-3 líneas al principio del CV."],
    ["Método STAR", "Situación, Tarea, Acción y Resultado."],
    ["CV funcional", "Organizado por competencias en vez de por fechas."],
  ],
});
