// Formación y Orientación Personal y Profesional 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, flujo, rueda, figCols } = require("./_hum");

module.exports = {
  materia: "Formación y Orientación Personal y Profesional",
  curso: "4-eso",
  titulo: "Bachillerato y universidad",
  minutos: 35,
  objetivos: ["Conocer las modalidades del Bachillerato según la LOMLOE", "Explicar cómo funciona la prueba de acceso a la universidad y la nota de admisión", "Describir la estructura de los estudios universitarios: grado, máster y doctorado"],
  claves: ["modalidad", "PAU", "nota de acceso", "nota de admisión", "grado universitario", "créditos ECTS"],
  pregunta: {
    texto: "Quieres estudiar Medicina, pero te dicen que «piden un 13». Si las notas del instituto van de 0 a 10, ¿cómo se puede sacar un 13?",
    respuesta: "Por cómo se calcula la <mark>nota de admisión</mark> a la universidad: a la nota de acceso (sobre 10) se suman hasta 4 puntos de las materias de la fase específica de la <b>PAU</b> que pondera cada grado. Por eso elegir bien la <b>modalidad de Bachillerato</b> y las materias importa.",
  },
  bloques: [
    {
      html: `<h3>Las modalidades de Bachillerato</h3><p>El Bachillerato dura <b>dos cursos</b> y la LOMLOE establece cuatro <mark>modalidades</mark>: <b>Ciencias y Tecnología</b> (Matemáticas, Física, Química, Biología, Dibujo Técnico…), <b>Humanidades y Ciencias Sociales</b> (Latín, Griego, Economía, Matemáticas Aplicadas a las CC. SS.…), <b>Artes</b> (con dos vías: Artes Plásticas, Imagen y Diseño; y Música y Artes Escénicas) y <b>General</b> (más variada). Hay materias comunes, de modalidad y optativas.</p>`,
      svg: rueda("Modalidades de Bachillerato", "BACHI-|LLERATO", [["Ciencias y Tec.", "var(--pen)"], ["Humanidades", "var(--red)"], ["CC. Sociales", "var(--sun)"], ["Artes plásticas", "var(--bac)"], ["Música y escena", "var(--inf)"], ["General", "var(--leaf)"]], "var(--pri)"),
    },
    {
      html: `<h3>La prueba de acceso (PAU)</h3><p>Al terminar Bachillerato, para entrar en la universidad se hace la <mark>Prueba de Acceso a la Universidad</mark> (PAU, antes EBAU o EvAU). La <b>fase de acceso</b> incluye materias comunes y una de modalidad. La <b>nota de acceso</b> = 60 % media de Bachillerato + 40 % fase de acceso, y hay que llegar a un 5. La <b>fase de admisión</b>, voluntaria, permite subir nota con otras materias.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Nota de acceso: 60 por ciento media de Bachillerato más 40 por ciento PAU; admisión hasta 14 puntos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="40" width="132" height="40" rx="8" fill="var(--pen)"/><rect x="152" y="40" width="88" height="40" rx="8" fill="var(--sun)"/>
        <text x="86" y="65" text-anchor="middle" font-size="12.5" font-weight="700" fill="#fff" ${F}>60 % Bachillerato</text>
        <text x="196" y="65" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)" ${F}>40 % PAU</text>
        <text x="130" y="28" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>nota de acceso (sobre 10)</text>
        <rect x="20" y="110" width="220" height="34" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>
        <text x="130" y="132" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--leaf)" ${F}>+ hasta 4 puntos de admisión</text>
        <text x="130" y="166" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>nota máxima: 14</text>
      </svg>`,
    },
    {
      html: `<h3>La nota de admisión</h3><p>Cada grado universitario tiene plazas limitadas. Las materias de la fase de admisión <b>ponderan</b> 0,1 o 0,2 según su relación con el grado. La <mark>nota de admisión</mark> = nota de acceso + las dos mejores ponderaciones, hasta un máximo de 14. La <b>nota de corte</b> es la del último admitido el año anterior: orienta, pero cambia cada año.</p>`,
      svg: flujo("Del Bachillerato a la plaza universitaria", ["media|Bach.", "PAU|acceso", "PAU|admisión", "nota|admisión", "preins-|cripción"], "var(--pri)"),
    },
    {
      html: `<h3>Los estudios universitarios</h3><p>La universidad sigue el modelo europeo (plan Bolonia). El <mark>grado</mark> dura normalmente <b>4 años</b> (240 créditos ECTS; Medicina, 6 años). Después se puede cursar un <b>máster</b> (1 o 2 años), obligatorio para algunas profesiones (profesorado, abogacía), y el <b>doctorado</b>, dedicado a la investigación. Hay universidades públicas y privadas, presenciales y a distancia, y becas del Ministerio y las comunidades.</p>`,
      svg: filas("Niveles universitarios", [["Grado", "4 años, 240 ECTS", "var(--pen)"], ["Máster", "1-2 años, 60-120 ECTS", "var(--bac)"], ["Doctorado", "investigación y tesis", "var(--red)"]]),
    },
  ],
  figura: {
    titulo: "Ejemplo de cálculo de la nota de admisión",
    svg: figCols("Cálculo paso a paso de una nota de admisión", [
      ["Nota de acceso", ["media Bach.: 8", "fase acceso: 7", "0,6·8 + 0,4·7", "= 4,8 + 2,8", "= 7,6"], "var(--pen)"],
      ["Fase de admisión", ["Biología: 9 × 0,2", "= 1,8", "Química: 8 × 0,2", "= 1,6", "suma = 3,4"], "var(--leaf)"],
      ["Nota de admisión", ["7,6 + 3,4", "= 11,0", "(máximo 14)", "se compara con", "la nota de corte"], "var(--sun)"],
    ]),
  },
  video: { id: "QvdEulHTKr8", titulo: "¿Cómo elegir una carrera que te apasione? + Test vocacional", canal: "CuriosaMente", vistas: 1980175, megusta: 100445, busqueda: "qué bachillerato elegir modalidades" },
  quiz: [
    { q: "¿Cuántas modalidades de Bachillerato establece la LOMLOE?", o: ["Dos", "Cuatro", "Seis"], a: 1, e: "Ciencias y Tecnología, Humanidades y Ciencias Sociales, Artes y General." },
    { q: "La nota de acceso a la universidad se calcula con…", o: ["solo la PAU", "60 % media de Bachillerato + 40 % fase de acceso", "50 % y 50 %"], a: 1, e: "Hay que obtener al menos un 5." },
    { q: "¿Cuál es la nota máxima de admisión?", o: ["10", "12", "14"], a: 2, e: "10 de acceso + hasta 4 puntos de la fase de admisión." },
    { q: "¿Cuántos años dura normalmente un grado universitario?", o: ["2", "4", "8"], a: 1, e: "240 créditos ECTS; algunos, como Medicina, duran más." },
    { q: "La nota de corte es…", o: ["la nota mínima para aprobar la PAU", "la nota del último admitido en un grado el año anterior", "la media de Bachillerato"], a: 1, e: "Varía cada año según la demanda." },
  ],
  examen: [
    { q: "Una materia de admisión con 8 que pondera 0,2 suma…", o: ["0,8", "1,6", "2"], a: 1, e: "8 × 0,2 = 1,6 puntos." },
    { q: "¿Qué estudio es obligatorio para ejercer como profesor de secundaria?", o: ["Un doctorado", "Un máster de formación del profesorado", "Ninguno"], a: 1, e: "Además del grado correspondiente." },
    { q: "¿En qué modalidad está el Latín?", o: ["Ciencias y Tecnología", "Humanidades y Ciencias Sociales", "Artes"], a: 1, e: "En la vía de Humanidades." },
  ],
  feynman: ["Las modalidades del Bachillerato y alguna materia de cada una", "Cómo se calcula la nota de acceso", "Cómo funcionan las ponderaciones y la nota de admisión", "Diferencia entre grado, máster y doctorado"],
  mapa: mapa("BACH. Y UNIVERSIDAD", "var(--pri)", [
    ["Modalidades", "Ciencias · Humanidades · Artes", "var(--pen)"],
    ["PAU", "acceso: 60 % + 40 %", "var(--sun)"],
    ["Admisión", "ponderaciones · máx. 14", "var(--leaf)"],
    ["Universidad", "grado · máster · doctorado", "var(--bac)"],
  ], 270),
  tarjetas: [
    ["Modalidades de Bachillerato (LOMLOE)", "Ciencias y Tecnología, Humanidades y CC. SS., Artes y General."],
    ["Nota de acceso", "0,6 × media de Bachillerato + 0,4 × fase de acceso (mínimo 5)."],
    ["Nota de admisión", "Acceso + dos mejores ponderaciones (máximo 14)."],
    ["Grado universitario", "Normalmente 4 años y 240 créditos ECTS."],
    ["Nota de corte", "Nota del último admitido en un grado el año anterior."],
  ],
  familias: ["Buscad juntos las notas de corte y las ponderaciones de un grado que le interese en la web de una universidad.", "Mirad las becas del Ministerio de Educación y sus requisitos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Itinerarios académicos: Bachillerato, acceso a la universidad y estudios universitarios (RD 217/2022, Formación y Orientación Personal y Profesional 4º; RD 243/2022 de Bachillerato).",
    ideas: ["Calculadora de nota de admisión con casos reales.", "Investigar el plan de estudios de un grado de interés.", "Visita virtual a una universidad y a sus jornadas de puertas abiertas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Real Decreto 243/2022, enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Calcular la nota de acceso y la de admisión a la universidad", "Conocer la organización de los estudios universitarios y las becas"],
  bloques: [
    { tras: "Las modalidades de Bachillerato", html: `<h3>Cómo es el Bachillerato</h3><p>El Bachillerato dura <b>dos cursos</b> y tiene <b>materias comunes</b> (Lengua y Literatura, Inglés, Filosofía, Educación Física en 1.º, Historia de España en 2.º…), <b>materias específicas de modalidad</b> (por ejemplo, Matemáticas, Física o Biología en Ciencias) y <b>optativas</b>. Se puede permanecer un máximo de <mark>cuatro años</mark>. Para obtener el título hay que aprobar todas las materias; excepcionalmente, el equipo docente puede conceder el título con una materia suspensa si se cumplen ciertas condiciones. Exige más estudio autónomo que la ESO: conviene organizarse desde el principio.</p>` },
    { tras: "La nota de admisión", html: `<h3>Calcular la nota paso a paso</h3><p>La <b>nota de acceso</b> (sobre 10) = 0,6 × nota media de Bachillerato + 0,4 × nota de la fase obligatoria de la PAU. Hay que sacar al menos un <b>4</b> en la PAU y un <b>5</b> en la nota de acceso. La <mark>nota de admisión</mark> (sobre 14) suma hasta dos materias de la fase voluntaria, multiplicadas por su ponderación (0,1 o 0,2) si están relacionadas con el grado.</p>${tabla(["Dato", "Valor"], [["Media de Bachillerato", "8"], ["PAU obligatoria", "7"], ["Nota de acceso", "0,6 · 8 + 0,4 · 7 = 7,6"], ["Biología (0,2)", "9 → 1,8"], ["Química (0,2)", "8 → 1,6"], ["<b>Nota de admisión</b>", "<b>7,6 + 1,8 + 1,6 = 11,0</b>"]])}`, video: { id: "dOotwiujhyI", titulo: "EBAU: ¿cómo se calcula la nota de selectividad?", canal: "EL PAÍS", vistas: 54759, megusta: 0 } },
    { tras: "Los estudios universitarios", html: `<h3>Grado, máster y doctorado</h3>${tabla(["Nivel", "Duración", "Créditos ECTS"], [["Grado", "4 años (5-6 en Medicina, Arquitectura…)", "240 (hasta 360)"], ["Máster", "1-2 años", "60-120"], ["Doctorado", "3-4 años", "tesis doctoral"]])}<p>Un crédito <mark>ECTS</mark> equivale a unas 25-30 horas de trabajo del estudiante (clases, prácticas y estudio). Gracias al Espacio Europeo de Educación Superior, los créditos se reconocen en toda Europa, lo que facilita el <b>Erasmus+</b>. Algunas profesiones, como la abogacía o la profesión de profesor de secundaria, exigen un máster habilitante.</p>` },
    { tras: "Los estudios universitarios", html: `<h3>Becas y otras vías de acceso</h3><p>Las <mark>becas del Ministerio de Educación</mark> ayudan a pagar la matrícula, el transporte o la residencia, según la renta familiar y las notas; también hay becas de comunidades autónomas, universidades y fundaciones. Las matrículas en universidades públicas cuestan mucho menos que en las privadas. Además del Bachillerato, se puede entrar en la universidad con un título de <b>Técnico Superior</b> de FP (y presentarse a la fase voluntaria para subir nota), con la <b>prueba para mayores de 25 años</b> o por <b>experiencia profesional</b> para mayores de 40.</p>` },
  ],
  ejemplos: [
    { enunciado: "Calcula la nota de acceso de Iván: media de Bachillerato 6,5 y PAU 6.", pasos: ["0,6 · 6,5 = 3,9.", "0,4 · 6 = 2,4.", "3,9 + 2,4 = 6,3.", "Tiene más de 4 en la PAU y más de 5 en total."], resultado: "Nota de acceso 6,3: accede a la universidad." },
    { enunciado: "Para Fisioterapia la nota de corte es 11,5. Iván saca en la fase voluntaria Biología 8 (ponderación 0,2) y Física 7 (0,2). ¿Llega?", pasos: ["Biología: 8 · 0,2 = 1,6.", "Física: 7 · 0,2 = 1,4.", "Nota de admisión = 6,3 + 1,6 + 1,4 = 9,3."], resultado: "9,3 < 11,5: no llega; debe buscar otra universidad, otro grado o un plan B como un ciclo de grado superior." },
    { enunciado: "Lucía tiene un título de Técnico Superior en Laboratorio Clínico con media 8,4. ¿Cómo accede a Biología?", pasos: ["Su nota de acceso es la media del ciclo: 8,4.", "Puede presentarse a la fase voluntaria de la PAU para sumar hasta 4 puntos.", "Con la nota de admisión pide plaza como cualquier otro estudiante."], resultado: "Accede con la media del ciclo y puede subir nota en la fase voluntaria." },
  ],
  errores: [
    "Confundir nota de acceso (sobre 10) con nota de admisión (sobre 14).",
    "Pensar que la nota de corte es un requisito fijo: depende de la demanda de cada año.",
    "Creer que solo se puede entrar en la universidad con Bachillerato.",
    "Presentarse a materias de la fase voluntaria que no ponderan para el grado elegido.",
    "Pensar que las becas son solo para quien saca sobresaliente: dependen sobre todo de la renta.",
  ],
  ejercicios: [
    { q: "¿Cuántos cursos tiene el Bachillerato y cuántos años se puede estar como máximo?", sol: "Dos cursos; un máximo de cuatro años." },
    { q: "Cita dos materias comunes del Bachillerato.", sol: "Lengua Castellana y Literatura e Inglés (también Filosofía o Historia de España)." },
    { q: "Escribe la fórmula de la nota de acceso.", sol: "0,6 · media de Bachillerato + 0,4 · nota de la PAU obligatoria." },
    { q: "Calcula la nota de acceso con media 9 y PAU 8.", sol: "0,6 · 9 + 0,4 · 8 = 5,4 + 3,2 = 8,6." },
    { q: "¿Cuál es la nota máxima de admisión?", sol: "14." },
    { q: "¿Qué es una ponderación?", sol: "El valor (0,1 o 0,2) por el que se multiplica la nota de una materia de la fase voluntaria según el grado." },
    { q: "¿Qué es la nota de corte?", sol: "La nota del último estudiante admitido en un grado y universidad el año anterior." },
    { q: "¿Cuántos créditos tiene un grado de cuatro años?", sol: "240 créditos ECTS." },
    { q: "¿Qué es un máster habilitante? Pon un ejemplo.", sol: "Un máster obligatorio para ejercer una profesión, como el de profesorado de secundaria o el de abogacía." },
    { q: "Cita dos vías de acceso a la universidad distintas del Bachillerato.", sol: "El título de Técnico Superior de FP y la prueba para mayores de 25 años." },
  ],
  quiz: [
    { q: "La nota de admisión es sobre…", o: ["14", "10", "20"], a: 0, e: "Suma la fase voluntaria." },
    { q: "En la PAU obligatoria hay que sacar al menos…", o: ["un 4", "un 5", "un 7"], a: 0, e: "Y un 5 en la nota de acceso." },
    { q: "Un crédito ECTS equivale a unas…", o: ["25-30 horas de trabajo", "2 horas", "100 horas"], a: 0, e: "Incluye estudio personal." },
    { q: "La nota de corte…", o: ["cambia cada año", "es siempre 5", "la fija el alumno"], a: 0, e: "Depende de la demanda." },
    { q: "Las becas del Ministerio dependen sobre todo de…", o: ["la renta familiar y las notas", "el apellido", "la altura"], a: 0, e: "Hay umbrales de renta." },
  ],
  tarjetas: [
    ["Nota de acceso", "60 % Bachillerato + 40 % PAU (sobre 10)."],
    ["Crédito ECTS", "Unas 25-30 horas de trabajo del estudiante."],
    ["Nota de corte", "Nota del último admitido en un grado."],
  ],
});
