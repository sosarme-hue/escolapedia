// Educación Física, 1º de Bachillerato. Tema 1, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1-ef");

// Curva de supercompensación con tres cargas bien colocadas: el nivel sube en escalera.
const escalera = B.lienzo("Tres cargas encadenadas en la fase de supercompensación: el nivel de forma sube en escalera", `
  <path d="M22 156 H 246 M22 156 V 30" stroke="var(--ink)" stroke-width="2"/>
  <path d="M24 128 C 40 128, 44 148, 60 146 C 76 144, 80 112, 96 110 C 108 108, 112 132, 126 130 C 140 128, 146 92, 162 90 C 174 88, 178 112, 192 110 C 206 108, 212 70, 236 66" fill="none" stroke="var(--pen)" stroke-width="3.5"/>
  <path d="M24 128 H 236" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="5 4"/>
  ${[44, 110, 176].map((x, i) => `<path d="M${x} 50 V 66" stroke="var(--red)" stroke-width="3" marker-end=""/>${B.tx(x, 44, `carga ${i + 1}`, { fs: 10, maxW: 50, bold: true, color: "var(--red)" })}`).join("")}
  ${B.tx(214, 58, "mejora", { fs: 10.5, maxW: 60, bold: true, color: "var(--leaf)" })}
  ${B.tx(70, 172, "nivel inicial - - -", { fs: 9.5, maxW: 100, color: "var(--muted)" })}
  ${B.tx(200, 172, "semanas →", { fs: 10, maxW: 70, color: "var(--muted)" })}`, "");

// Zonas de intensidad por frecuencia cardiaca.
const zonas = B.lienzo("Zonas de entrenamiento según el porcentaje de la frecuencia cardiaca máxima", `
  ${[["Z1", "50-60 %", "recuperación", "var(--leaf)"], ["Z2", "60-70 %", "base aeróbica", "var(--pen)"], ["Z3", "70-80 %", "aeróbico medio", "var(--sun)"], ["Z4", "80-90 %", "umbral", "var(--red)"], ["Z5", "90-100 %", "máximo", "var(--eso)"]].map(([z, p, n, c], i) => {
    const y = 140 - i * 26, w = 150 + i * 20;
    return `<rect x="20" y="${y}" width="${w}" height="20" rx="5" fill="${c}"/>${B.tx(28, y + 14, `${z} · ${p} · ${n}`, { fs: 10.5, maxW: w - 14, bold: true, color: "#fff", anchor: "start" })}`;
  }).join("")}
  ${B.tx(130, 22, "FC máx ≈ 220 − edad (orientativo)", { fs: 11, maxW: 230, bold: true })}`, "");

module.exports = B.tema({
  titulo: "Planificación del entrenamiento personal",
  minutos: 110,
  objetivos: [
    "Comprender cómo el organismo se adapta al ejercicio y qué es la supercompensación",
    "Aplicar los principios del entrenamiento y las variables de la carga (FITT) a un caso propio",
    "Controlar la intensidad con la frecuencia cardiaca, la percepción del esfuerzo y el test del habla",
    "Diseñar, aplicar y evaluar un plan de entrenamiento personal de varias semanas, seguro y realista",
  ],
  claves: ["entrenamiento", "carga", "adaptación", "supercompensación", "principios del entrenamiento", "FITT", "frecuencia cardiaca", "RPE", "sesión", "microciclo", "objetivo SMART", "evaluación"],
  pregunta: {
    texto: "Dos amigas empiezan a correr el mismo día. Una sale todos los días a tope; la otra corre tres días a ritmo cómodo y sube un poco cada semana. ¿Quién estará más en forma dentro de dos meses?",
    respuesta: "Casi seguro, la segunda. El cuerpo no mejora <i>durante</i> el esfuerzo, sino <mark>durante la recuperación</mark> que viene después. Quien entrena a tope cada día acumula fatiga, se estanca y tiene más riesgo de lesionarse o abandonar. Quien alterna carga y descanso y <b>progresa poco a poco</b> aprovecha la supercompensación. Planificar es justo eso: decidir cuánto, cuándo y cómo para que cada sesión sume.",
  },
  lectura: {
    titulo: "El plan de una corredora popular",
    html: `<p>Lucía tiene diecisiete años y quiere correr la carrera popular de su ciudad, diez kilómetros, en primavera. En septiembre apenas aguanta veinte minutos seguidos trotando. Su primer impulso es salir cada tarde y correr hasta reventar, como ve en algunos vídeos. A la segunda semana le duelen las rodillas, duerme mal y está a punto de dejarlo.</p>
    <p>Su profesor de Educación Física le propone otra cosa: medir primero su punto de partida, fijar un objetivo concreto y repartir el trabajo en semanas. Tres días de carrera suave, uno de fuerza y un día más largo los domingos; cada semana, un poco más, y una semana de descarga cada mes. Lucía anota en una libreta el tiempo, las pulsaciones y cómo se siente.</p>
    <p>En marzo corre la carrera completa sin pararse y, sobre todo, ha descubierto que disfruta. No tenía un talento especial: tenía un <b>plan</b>. En este tema aprenderás a hacer el tuyo, sea cual sea tu objetivo: correr, ganar fuerza, mejorar en tu deporte o simplemente sentirte mejor.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Qué es entrenar",
      html: `<p><b>Entrenar</b> es aplicar estímulos de ejercicio de forma <b>planificada, sistemática y progresiva</b> para provocar adaptaciones en el organismo y mejorar la condición física, la salud o el rendimiento. La diferencia con «hacer deporte» está en la intención y en el orden: el entrenamiento tiene un objetivo, una secuencia y un control.</p>
      <p>Conviene distinguir tres conceptos que se usan mucho:</p>
      <ul><li><b>Actividad física</b>: cualquier movimiento que gasta energía (subir escaleras, ir en bici al instituto).</li>
      <li><b>Ejercicio físico</b>: actividad física planificada y repetida para mejorar la forma.</li>
      <li><b>Deporte</b>: actividad física reglada, con normas, que suele incluir competición.</li></ul>
      <p>En 1º de Bachillerato el reto es dar un paso más que en la ESO: pasar de seguir las sesiones del profesor a <mark>diseñar y gestionar tu propio entrenamiento</mark>, con autonomía y criterio. Esa competencia te servirá toda la vida, cuando ya no tengas una clase de Educación Física que te organice el movimiento.</p>`,
      svg: B.capas("De la actividad física al entrenamiento", [["Actividad física", "todo movimiento con gasto"], ["Ejercicio", "planificado y repetido"], ["Entrenamiento", "objetivo, plan y control"], ["Deporte", "reglas y competición"]], { t: "Cuatro conceptos" }),
    },
    {
      h: "La carga y la adaptación",
      html: `<p>La <b>carga de entrenamiento</b> es el conjunto de estímulos que recibe el organismo en una sesión o en un periodo. Tiene dos caras: la <b>carga externa</b>, lo que se hace (kilómetros, kilos, repeticiones, minutos), y la <b>carga interna</b>, lo que le cuesta a cada persona (pulsaciones, fatiga, sensación de esfuerzo). La misma carrera de 5 km es una carga interna muy distinta para una atleta entrenada que para alguien que empieza.</p>
      <p>Ante una carga suficiente, el cuerpo rompe su equilibrio (la <b>homeostasis</b>) y responde: aumenta el pulso, la respiración y la temperatura y gasta sus reservas. Si el estímulo se repite, el organismo produce <b>adaptaciones</b> duraderas: el corazón bombea más sangre en cada latido, los músculos tienen más mitocondrias y capilares, los tendones se refuerzan y el sistema nervioso coordina mejor.</p>
      <p>La regla del <b>umbral</b> resume la idea: una carga demasiado débil no produce mejora; una carga adecuada genera adaptación; una carga excesiva o sin descanso lleva a la fatiga crónica o a la lesión. Entrenar bien es encontrar la zona útil para cada persona.</p>`,
      svg: B.rejilla("Efecto de la carga según su intensidad", ["Carga", "Efecto", "Resultado"], [["Muy débil", "no altera", "sin mejora"], ["Adecuada", "fatiga útil", "adaptación"], ["Excesiva", "agota", "estancamiento"], ["Sin descanso", "acumula", "lesión"]], { t: "La regla del umbral" }),
    },
    {
      h: "La supercompensación",
      html: `<p>La <b>supercompensación</b> es el modelo que explica cómo mejora la condición física. Tiene cuatro fases:</p>
      <ol><li><b>Carga</b>: el entrenamiento gasta energía y produce pequeñas alteraciones en los tejidos.</li>
      <li><b>Fatiga</b>: justo después, el rendimiento baja por debajo del nivel inicial.</li>
      <li><b>Recuperación</b>: con descanso, sueño y alimentación, el organismo repara y repone.</li>
      <li><b>Supercompensación</b>: durante un tiempo, el nivel sube <mark>por encima del inicial</mark>, como si el cuerpo se preparase para un esfuerzo mayor.</li></ol>
      <p>Si la siguiente carga llega en ese momento de supercompensación, la mejora se acumula y el nivel sube en escalera. Si llega demasiado pronto, cuando todavía hay fatiga, el nivel baja poco a poco (es el camino al <b>sobreentrenamiento</b>). Si llega demasiado tarde, la mejora se ha perdido y se vuelve al punto de partida.</p>
      <p>El tiempo de recuperación varía: entre 24 y 72 horas según la intensidad, la capacidad trabajada y la persona. Por eso los planes alternan días duros y suaves y no repiten el mismo esfuerzo intenso a diario.</p>`,
      svg: escalera,
      video: { id: "xmZVHbJQb78", titulo: "¿Qué es la SUPERCOMPENSACIÓN? Principio deportivo del entrenamiento", canal: "APTA Vital Sport", vistas: 43931 },
    },
    {
      h: "Los principios del entrenamiento",
      html: `<p>Los <b>principios del entrenamiento</b> son reglas que se derivan de la supercompensación y que guían cualquier plan:</p>
      <ul><li><b>Individualización</b>: cada persona responde distinto según edad, nivel, genética e historial.</li>
      <li><b>Continuidad</b>: los estímulos deben repetirse con regularidad; entrenar a rachas no funciona.</li>
      <li><b>Progresión</b>: las cargas aumentan poco a poco. Una referencia prudente es no subir más del 10 % semanal el volumen.</li>
      <li><b>Sobrecarga</b>: para mejorar hay que superar el umbral habitual.</li>
      <li><b>Especificidad</b>: se mejora sobre todo lo que se entrena (correr mejora la carrera; nadar, la natación).</li>
      <li><b>Alternancia y recuperación</b>: se combinan capacidades y se respetan los descansos.</li>
      <li><b>Reversibilidad</b>: las mejoras se pierden si se deja de entrenar; en unas semanas de inactividad la resistencia baja de forma notable.</li>
      <li><b>Variedad</b>: cambiar ejercicios y entornos mantiene la motivación y reparte el esfuerzo.</li></ul>
      <p>Ningún principio funciona solo: un plan correcto equilibra la sobrecarga con la recuperación y la progresión con la individualización.</p>`,
      svg: B.estrella("Principios del entrenamiento", "Principios", ["Individual", "Continuidad", "Progresión", "Especificidad", "Recuperación", "Reversible"]),
    },
    {
      h: "Las variables de la carga: FITT",
      html: `<p>Para describir y ajustar la carga se usan las variables <b>FITT</b>:</p>
      <ul><li><b>Frecuencia</b>: cuántas sesiones por semana (por ejemplo, 3 días de resistencia y 2 de fuerza).</li>
      <li><b>Intensidad</b>: lo duro que es el esfuerzo (pulsaciones, ritmo, kilos, escala de esfuerzo).</li>
      <li><b>Tiempo</b> o volumen: la duración o la cantidad (minutos, kilómetros, series × repeticiones).</li>
      <li><b>Tipo</b>: la actividad concreta (carrera continua, circuito, bici, natación, pesas).</li></ul>
      <p>A veces se añaden la <b>densidad</b> (relación entre trabajo y pausa) y la <b>progresión</b>. La clave es que <mark>volumen e intensidad se compensan</mark>: si un día sube mucho la intensidad, conviene bajar el volumen, y al revés. Lo más prudente es progresar primero en frecuencia y volumen y después en intensidad.</p>
      <p>Un ejemplo: «correr 3 días por semana, 30 minutos, a intensidad moderada (zona 2), en carrera continua» es una prescripción FITT completa. Si al cabo de tres semanas resulta fácil, se puede pasar a 35 minutos o añadir un cuarto día.</p>`,
      svg: B.cajas("Variables FITT de la carga", [["Frecuencia", "sesiones|por semana"], ["Intensidad", "pulsaciones,|ritmo, kilos"], ["Tiempo", "minutos, series|o kilómetros"], ["Tipo", "actividad|concreta"]], { t: "FITT" }),
    },
    {
      h: "Controlar la intensidad",
      html: `<p>La intensidad se puede controlar con varios indicadores, y lo ideal es combinarlos:</p>
      <ul><li><b>Frecuencia cardiaca (FC)</b>: se toma en la muñeca (arteria radial) o en el cuello (carótida) contando 15 segundos y multiplicando por 4, o con un pulsómetro. La <b>FC máxima</b> se estima de forma orientativa con 220 − edad; a los 17 años, unas 203 pulsaciones por minuto.</li>
      <li><b>Zonas</b>: la salud cardiovascular mejora sobre todo entre el 60 y el 80 % de la FC máxima. Por encima del 85 % se trabaja la intensidad alta, útil pero más agotadora.</li>
      <li><b>Percepción del esfuerzo (RPE)</b>: la escala de Borg modificada va de 0 (reposo) a 10 (máximo). Un 3-4 es moderado; un 7-8, vigoroso.</li>
      <li><b>Test del habla</b>: si puedes hablar pero no cantar, la intensidad es moderada; si solo puedes decir frases cortas, es vigorosa.</li></ul>
      <p>La fórmula de Karvonen afina el cálculo usando la FC de reposo: FC objetivo = FC reposo + % × (FC máx − FC reposo). Así, dos personas de la misma edad pueden tener zonas distintas según su forma física.</p>`,
      svg: zonas,
      video: { id: "Kvw3WssgXBU", titulo: "Descubre cómo calcular tus zonas de entrenamiento", canal: "Carlos Rojo Running", vistas: 205614 },
    },
    {
      h: "La estructura de la sesión",
      html: `<p>Cada sesión de entrenamiento tiene tres partes:</p>
      <ul><li><b>Calentamiento</b> (10-15 min): prepara el cuerpo y la mente. Empieza con movilidad articular y actividad suave, sigue con ejercicios dinámicos y termina con algún gesto específico de la parte principal. Sube la temperatura muscular, el pulso y la atención, y reduce el riesgo de lesión.</li>
      <li><b>Parte principal</b> (20-45 min): el trabajo que persigue el objetivo del día (resistencia, fuerza, técnica, juego).</li>
      <li><b>Vuelta a la calma</b> (5-10 min): actividad suave para bajar las pulsaciones, estiramientos estáticos y, si se quiere, respiración o relajación.</li></ul>
      <p>En la parte principal se ordenan las tareas de lo más exigente para el sistema nervioso a lo menos: primero técnica y velocidad, después fuerza y por último resistencia. Si se hace al revés, la fatiga empeora la técnica y aumenta el riesgo.</p>
      <p>El calentamiento debe ser <b>progresivo</b> y adaptado: más largo si hace frío, si es temprano o si la parte principal es muy intensa. Los estiramientos estáticos largos antes de un esfuerzo explosivo pueden restar fuerza durante unos minutos; por eso en el calentamiento se prefieren los movimientos dinámicos y se reservan los estáticos para la vuelta a la calma.</p>
      <p>Conviene tener por escrito cada sesión con sus ejercicios, cargas y pausas, y anotar al terminar cómo ha ido.</p>`,
      svg: B.flujo("Partes de una sesión de entrenamiento", ["Calentamiento general: 5-8 min", "Calentamiento específico: 5 min", "Parte principal: 20-45 min", "Vuelta a la calma: 5-10 min", "Registro: cómo me he sentido"], { t: "La sesión" }),
    },
    {
      h: "Microciclo, mesociclo y macrociclo",
      html: `<p>Los entrenadores organizan el tiempo en <b>ciclos</b> encajados unos dentro de otros. A esta organización se le llama <b>periodización</b>:</p>
      <ul><li><b>Sesión</b>: un entrenamiento concreto.</li>
      <li><b>Microciclo</b>: normalmente una semana, con su reparto de días duros, suaves y de descanso.</li>
      <li><b>Mesociclo</b>: de 3 a 6 semanas con un objetivo común. Un patrón muy usado es tres semanas de carga creciente y una de <b>descarga</b>, con menos volumen, para asimilar.</li>
      <li><b>Macrociclo</b>: la temporada o el curso entero, orientado a una meta (una carrera, un torneo, una prueba física).</li></ul>
      <p>En un plan escolar no hace falta tanta complejidad, pero sí la idea básica: <mark>alternar periodos de carga y de asimilación</mark>. Un plan de 8 semanas puede dividirse en dos mesociclos de 4 semanas, cada uno con tres semanas de progresión y una de descarga, y terminar con una semana de evaluación.</p>`,
      svg: B.capas("Niveles de la periodización", [["Macrociclo", "curso o temporada"], ["Mesociclo", "3 a 6 semanas"], ["Microciclo", "una semana"], ["Sesión", "un entrenamiento"]], { t: "Periodización" }),
      video: { id: "digMIUf3lNc", titulo: "PLANIFICACIÓN DEPORTIVA y del ENTRENAMIENTO | PERIODIZACIÓN", canal: "APTA Vital Sport", vistas: 51484 },
    },
    {
      h: "Diagnóstico inicial y objetivos",
      html: `<p>Todo plan empieza por saber <b>de dónde partes</b>. El diagnóstico incluye:</p>
      <ul><li>Tu <b>historial</b>: deporte que practicas, lesiones previas, horario disponible, gustos.</li>
      <li><b>Pruebas de condición física</b>: por ejemplo, el Course Navette o el test de Cooper (resistencia), el salto horizontal (fuerza explosiva), las flexiones o la plancha (fuerza resistencia) y el test de sentarse y alcanzar (flexibilidad).</li>
      <li>Tu <b>FC de reposo</b>, tomada al despertar varios días seguidos.</li></ul>
      <p>Con esos datos se fijan objetivos <b>SMART</b>: específicos (qué), medibles (cuánto), alcanzables (realistas para ti), relevantes (que te importen) y con tiempo definido (cuándo). «Ponerme en forma» no es un objetivo SMART; «correr 30 minutos seguidos en zona 2 dentro de 8 semanas» sí lo es.</p>
      <p>Conviene combinar un objetivo de <b>resultado</b> (lo que quieres conseguir) con objetivos de <b>proceso</b> (lo que harás cada semana, por ejemplo «entrenar 3 días»), porque los de proceso dependen solo de ti.</p>`,
      svg: B.cajas("Objetivo SMART", [["S · Específico", "qué exactamente"], ["M · Medible", "cuánto"], ["A · Alcanzable", "realista para ti"], ["R · Relevante", "te importa"], ["T · Temporal", "fecha límite"], ["Ejemplo", "30 min seguidos|en 8 semanas"]], { t: "Objetivos que funcionan", cols: 3 }),
    },
    {
      h: "Diseñar el plan paso a paso",
      html: `<p>Con el diagnóstico y los objetivos, el plan se construye en orden:</p>
      <ol><li><b>Elegir las capacidades</b> que vas a trabajar y su peso (por ejemplo, 60 % resistencia y 40 % fuerza).</li>
      <li><b>Repartir la semana</b>: qué día toca cada cosa, respetando al menos un día de descanso y sin dos días intensos seguidos de la misma capacidad.</li>
      <li><b>Prescribir cada sesión con FITT</b>: actividad, duración, intensidad y pausas.</li>
      <li><b>Prever la progresión</b>: cuánto subirá cada semana y cuándo habrá descarga.</li>
      <li><b>Definir el control</b>: qué registrarás y cuándo repetirás las pruebas.</li></ol>
      <p>Un plan realista encaja en tu vida: tiene en cuenta los exámenes, el transporte, el entrenamiento de tu equipo y el sueño. Es mejor un plan de tres días que cumples que uno de seis que abandonas en la segunda semana. Integra también la actividad cotidiana: ir andando o en bici al instituto suma minutos de movimiento sin ocupar tiempo extra.</p>`,
      svg: B.rejilla("Ejemplo de microciclo de iniciación", ["Día", "Sesión", "Intensidad"], [["Lunes", "carrera 25 min", "zona 2"], ["Martes", "fuerza circuito", "RPE 6"], ["Miércoles", "descanso activo", "paseo"], ["Jueves", "carrera 25 min", "zona 2"], ["Sábado", "deporte o ruta", "variable"]], { t: "Una semana tipo" }),
    },
    {
      h: "Registro y seguimiento",
      html: `<p>Sin registro no hay planificación, solo intenciones. Un <b>diario de entrenamiento</b> (en papel, en una hoja de cálculo o en una aplicación) recoge en cada sesión:</p>
      <ul><li>Fecha, actividad y carga externa (minutos, distancia, series, kilos).</li>
      <li>Carga interna: FC media o máxima y RPE de 0 a 10. Multiplicar el RPE por los minutos da una «carga de sesión» sencilla para comparar semanas.</li>
      <li>Sensaciones: sueño de la noche anterior, energía, molestias.</li></ul>
      <p>Algunas señales de alarma indican que hay que bajar la carga: FC de reposo más alta de lo normal varios días, cansancio que no se va, peor sueño, irritabilidad o dolor que aumenta con el ejercicio. El dolor articular o localizado no se «aguanta»: se para y se consulta.</p>
      <p>Las aplicaciones y relojes deportivos ayudan, pero <mark>los datos no sustituyen a escuchar al cuerpo</mark>. Úsalos con espíritu crítico y cuida la privacidad: muchas aplicaciones comparten tu ubicación y tus datos de salud.</p>`,
      svg: B.comparar("Señales de buena adaptación frente a señales de alarma", ["Va bien", ["FC reposo estable", "duermes bien", "ganas de entrenar", "mejoras marcas"]], ["Alarma", ["FC reposo alta", "sueño peor", "irritabilidad", "dolor que sube"]]),
    },
    {
      h: "Evaluar y ajustar el plan",
      html: `<p>Al final de cada mesociclo se <b>evalúa</b>: se repiten las pruebas iniciales en las mismas condiciones (hora, lugar, calentamiento) y se comparan los resultados con los objetivos. La evaluación responde a tres preguntas: ¿he cumplido las sesiones previstas?, ¿he mejorado en las pruebas?, ¿cómo me he sentido?</p>
      <p>Con las respuestas se <b>ajusta</b> el plan:</p>
      <ul><li>Si has mejorado y te ha resultado cómodo, aumenta la carga en el siguiente ciclo.</li>
      <li>Si no has mejorado pero cumpliste el plan, revisa la intensidad, la variedad o el descanso.</li>
      <li>Si no cumpliste el plan, busca la causa (horario, motivación, lesión) y hazlo más realista.</li></ul>
      <p>La planificación es un ciclo continuo: diagnosticar, planificar, aplicar, registrar y evaluar. Aprender a hacerlo con autonomía es una de las metas de la Educación Física de Bachillerato, porque te permite mantener una <b>vida activa</b> cuando termines tus estudios y nadie te organice la actividad.</p>`,
      svg: B.ciclo("Ciclo de la planificación", "Plan", ["Diagnosticar", "Planificar", "Aplicar", "Registrar", "Evaluar"]),
    },
  ],
  figura: {
    titulo: "Planificar el entrenamiento en cuatro ideas",
    items: [["Adaptarse", "carga + descanso", "supercompensación", "en escalera"], ["Principios", "+10 %", "progresión y", "continuidad"], ["Dosificar", "FITT", "frecuencia, intensidad,", "tiempo y tipo"], ["Controlar", "FC · RPE", "registrar, evaluar", "y ajustar"]],
  },
  video: { id: "hHlsA0pkGko", titulo: "PRINCIPIOS BÁSICOS del ENTRENAMIENTO que todo INICIANTE debe CONOCER", canal: "Orígenes Entrenamientos", vistas: 51712 },
  quiz: [
    ["Entrenar se diferencia de hacer actividad física en que es…", ["más intenso", "planificado, sistemático y progresivo", "siempre competitivo", "obligatorio"], 1, "Tiene objetivo, secuencia y control."],
    ["La carga interna es…", ["los kilos levantados", "lo que le cuesta el esfuerzo a cada persona", "la distancia recorrida", "el número de sesiones"], 1, "Pulsaciones, fatiga, sensación de esfuerzo."],
    ["Una carga demasiado débil…", ["produce mucha mejora", "no produce adaptación", "provoca lesión", "aumenta la fatiga crónica"], 1, "No supera el umbral."],
    ["Justo después de entrenar, el rendimiento…", ["sube", "baja por la fatiga", "no cambia", "es máximo"], 1, "Es la fase de fatiga."],
    ["La siguiente carga debe llegar idealmente en la fase de…", ["fatiga", "supercompensación", "pérdida de la mejora", "calentamiento"], 1, "Así el nivel sube en escalera."],
    ["Encadenar cargas intensas sin recuperar conduce a…", ["la supercompensación", "el sobreentrenamiento", "la especificidad", "la descarga"], 1, "El nivel baja poco a poco."],
    ["El principio de especificidad dice que…", ["todo mejora igual", "se mejora sobre todo lo que se entrena", "hay que cambiar siempre", "las mejoras se pierden"], 1, "Correr mejora la carrera."],
    ["Una progresión prudente del volumen semanal es de…", ["un 50 %", "como mucho un 10 %", "el doble", "un 30 %"], 1, "Referencia habitual."],
    ["Las siglas FITT corresponden a…", ["fuerza, intensidad, técnica, tiempo", "frecuencia, intensidad, tiempo y tipo", "fatiga, impulso, tono, tensión", "fase, inicio, tramo y término"], 1, "Variables de la carga."],
    ["Si sube mucho la intensidad, el volumen…", ["debe subir también", "conviene que baje", "no importa", "se duplica"], 1, "Volumen e intensidad se compensan."],
    ["La FC máxima de una persona de 17 años se estima en unas…", ["150 ppm", "203 ppm", "237 ppm", "180 ppm"], 1, "220 − 17 = 203."],
    ["La zona más útil para la salud cardiovascular está entre…", ["30-40 % de la FC máx", "60-80 % de la FC máx", "95-100 %", "40-50 %"], 1, "Intensidad moderada a vigorosa."],
    ["En el test del habla, la intensidad moderada permite…", ["cantar", "hablar pero no cantar", "no decir nada", "gritar"], 1, "Vigorosa: solo frases cortas."],
    ["En la escala RPE de 0 a 10, un esfuerzo vigoroso es aproximadamente…", ["1-2", "3-4", "7-8", "0"], 2, "Moderado es 3-4."],
    ["En la parte principal se trabaja primero…", ["la resistencia", "la técnica y la velocidad", "los estiramientos", "la vuelta a la calma"], 1, "Lo más exigente para el sistema nervioso."],
    ["Un microciclo suele durar…", ["un día", "una semana", "tres meses", "un año"], 1, "Reparto semanal de cargas."],
    ["Una semana de descarga sirve para…", ["entrenar más", "asimilar la carga acumulada", "competir", "empezar de cero"], 1, "Menos volumen tras semanas de progresión."],
    ["¿Cuál es un objetivo SMART?", ["Ponerme en forma", "Correr 30 min seguidos en 8 semanas", "Estar fuerte", "Mejorar"], 1, "Específico, medible y con plazo."],
    ["Una señal de alarma de exceso de carga es…", ["dormir mejor", "una FC de reposo más alta varios días", "más ganas de entrenar", "mejorar marcas"], 1, "Indica fatiga acumulada."],
    ["Al evaluar un plan, las pruebas se repiten…", ["en condiciones distintas", "en las mismas condiciones que al inicio", "sin calentar", "solo si apetece"], 1, "Para comparar con rigor."],
  ],
  examen: [
    ["Marta corre todos los días al máximo y cada semana va peor. ¿Qué principio incumple sobre todo?", ["especificidad", "recuperación y alternancia", "variedad", "individualización"], 1, "No deja llegar la supercompensación."],
    ["Un estudiante de 18 años con FC de reposo de 62 ppm quiere entrenar al 70 % con Karvonen. Su FC objetivo es aproximadamente…", ["142 ppm", "160 ppm", "131 ppm", "175 ppm"], 1, "FC máx = 202; reserva = 140; 62 + 0,7 × 140 = 160 ppm."],
    ["Si esta semana corre 20 km, la semana próxima lo prudente es hasta…", ["40 km", "22 km", "30 km", "35 km"], 1, "+10 %."],
    ["Tras dos meses lesionado, un jugador ha perdido resistencia. Es el principio de…", ["sobrecarga", "reversibilidad", "especificidad", "variedad"], 1, "Las mejoras se pierden sin estímulo."],
    ["¿Qué orden de tareas es correcto en la parte principal?", ["resistencia, fuerza, técnica", "técnica, fuerza, resistencia", "fuerza, resistencia, técnica", "da igual"], 1, "De lo neural a lo metabólico."],
    ["Una sesión de 40 minutos con RPE 6 tiene una carga de sesión de…", ["46", "240", "400", "24"], 1, "6 × 40 = 240 unidades."],
    ["En un mesociclo «3 + 1», la cuarta semana es de…", ["máxima carga", "descarga", "competición", "pruebas iniciales"], 1, "Se asimila la carga."],
    ["¿Qué objetivo es de proceso?", ["Bajar 30 s en 2 km", "Entrenar 3 días cada semana", "Ganar el torneo", "Saltar 2 m"], 1, "Depende solo de la propia conducta."],
  ],
  feynman: ["Qué diferencia hay entre carga externa y carga interna", "Cómo funciona la supercompensación y qué pasa si la siguiente carga llega pronto o tarde", "Qué dicen los principios de progresión, especificidad y reversibilidad", "Cómo se prescribe una sesión con FITT", "Cómo se calcula y se usa la FC para controlar la intensidad", "Qué pasos sigue la planificación de un entrenamiento personal"],
  mapa: ["PLANIFICACIÓN DEL ENTRENAMIENTO", [["Adaptación", "carga · fatiga · supercompensación"], ["Principios", "progresión · especificidad · recuperación"], ["Dosificar", "FITT · FC · RPE · test del habla"], ["Plan", "diagnóstico · SMART · ciclos · evaluación"]]],
  tarjetas: [
    ["Entrenamiento", "Ejercicio planificado, sistemático y progresivo con un objetivo."],
    ["Carga externa", "Lo que se hace: minutos, kilos, kilómetros."],
    ["Carga interna", "Lo que le cuesta a cada persona: FC, RPE, fatiga."],
    ["Supercompensación", "Tras carga y recuperación, el nivel sube por encima del inicial."],
    ["Sobreentrenamiento", "Fatiga acumulada por cargas sin recuperación suficiente."],
    ["Progresión", "Subir poco a poco: hasta un 10 % semanal de volumen."],
    ["Especificidad", "Se mejora sobre todo lo que se entrena."],
    ["FITT", "Frecuencia, intensidad, tiempo y tipo."],
    ["FC máxima", "≈ 220 − edad (orientativo)."],
    ["RPE", "Escala de esfuerzo 0-10: 3-4 moderado, 7-8 vigoroso."],
    ["Microciclo", "Semana de entrenamiento; el mesociclo dura 3-6 semanas."],
    ["Objetivo SMART", "Específico, medible, alcanzable, relevante y con plazo."],
  ],
  ejemplos: [
    ["Calcula las zonas de entrenamiento (60-80 %) de una alumna de 16 años.", ["FC máx = 220 − 16 = 204 ppm.", "60 % = 0,6 × 204 ≈ 122 ppm; 80 % = 0,8 × 204 ≈ 163 ppm.", "Para mejorar la resistencia aeróbica entrenará entre 122 y 163 ppm."], "Zona saludable: 122-163 ppm."],
    ["Un alumno de 17 años tiene una FC de reposo de 65 ppm. Calcula con Karvonen su FC al 70 %.", ["FC máx = 220 − 17 = 203; reserva = 203 − 65 = 138.", "70 % de la reserva = 0,7 × 138 ≈ 97.", "FC objetivo = 65 + 97 = 162 ppm."], "FC objetivo ≈ 162 ppm."],
    ["Convierte «ponerme en forma» en un objetivo SMART.", ["Específico: mejorar la resistencia aeróbica.", "Medible y alcanzable: pasar de 18 a 30 minutos de carrera continua en zona 2.", "Temporal: en 8 semanas, entrenando 3 días."], "Correr 30 min seguidos en zona 2 en 8 semanas (3 días/semana)."],
    ["Prescribe con FITT una sesión de fuerza resistencia para principiantes.", ["F: 2 días por semana, no consecutivos.", "I: RPE 6, 12-15 repeticiones sin llegar al fallo; T: 3 vueltas a un circuito de 6 ejercicios, 30 s de pausa.", "T (tipo): circuito con autocargas: sentadillas, flexiones apoyadas, plancha, zancadas, remo con goma y puente de glúteo."], "Circuito de 6 ejercicios × 3 vueltas, 2 días/semana, RPE 6."],
    ["Diseña la progresión de volumen de un mesociclo «3 + 1» que empieza con 60 minutos de carrera semanales.", ["Semana 1: 60 min; semana 2: 66 min (+10 %).", "Semana 3: 72 min (+10 %).", "Semana 4 (descarga): unos 45 min, suaves."], "60 → 66 → 72 → 45 minutos."],
    ["Tras 4 semanas, una alumna ha cumplido todas las sesiones pero no mejora en el Course Navette. ¿Qué revisas?", ["Comprobar en el diario si la intensidad estuvo en la zona prevista o siempre por debajo.", "Revisar el descanso y el sueño, y si hubo variedad o siempre el mismo estímulo.", "Ajustar: añadir una sesión de intervalos suaves y mantener la progresión de volumen."], "Probable estímulo insuficiente: subir intensidad de forma controlada."],
  ],
  errores: [
    "Pensar que se mejora durante el ejercicio y olvidar que la mejora llega con la recuperación.",
    "Entrenar siempre a tope o siempre igual, sin alternar días duros y suaves.",
    "Aumentar la carga de golpe (más del 10 % semanal) por impaciencia.",
    "Fijar objetivos vagos como «ponerme en forma», imposibles de medir.",
    "No registrar las sesiones y no repetir las pruebas para comparar.",
    "Ignorar el dolor articular o las señales de fatiga crónica y seguir entrenando.",
  ],
  ejercicios: {
    b: [
      ["Define entrenamiento.", "Aplicación planificada, sistemática y progresiva de estímulos de ejercicio para provocar adaptaciones y mejorar la condición física, la salud o el rendimiento."],
      ["Diferencia carga externa y carga interna con un ejemplo.", "Externa: lo que se hace (correr 5 km). Interna: lo que le cuesta a cada persona (llegar a 180 ppm y RPE 8, o a 140 ppm y RPE 4)."],
      ["Enumera las cuatro fases de la supercompensación.", "Carga, fatiga, recuperación y supercompensación."],
      ["¿Qué pasa si la siguiente carga llega demasiado tarde?", "La mejora se ha perdido y el nivel vuelve al inicial: no hay progreso."],
      ["Explica el principio de continuidad.", "Los estímulos deben repetirse con regularidad; entrenar a rachas no produce adaptaciones duraderas."],
      ["¿Qué significan las siglas FITT?", "Frecuencia, intensidad, tiempo (o volumen) y tipo de actividad."],
      ["Calcula la FC máxima estimada de una persona de 15 años.", "220 − 15 = 205 ppm (valor orientativo)."],
      ["¿Cómo se toma el pulso en la muñeca?", "Con los dedos índice y corazón sobre la arteria radial, contando 15 segundos y multiplicando por 4 (o 60 segundos completos)."],
      ["¿Qué es el test del habla?", "Un método sencillo de controlar la intensidad: si puedes hablar pero no cantar, es moderada; si solo dices frases cortas, es vigorosa."],
      ["Nombra las tres partes de una sesión y su duración aproximada.", "Calentamiento (10-15 min), parte principal (20-45 min) y vuelta a la calma (5-10 min)."],
      ["¿Qué es un microciclo?", "Una unidad de planificación de, normalmente, una semana con el reparto de sesiones y descansos."],
      ["Escribe qué significa cada letra de SMART.", "Específico, medible, alcanzable, relevante y con tiempo definido."],
    ],
    m: [
      ["Explica por qué una carga excesiva sin descanso empeora el rendimiento.", "Porque cada nueva carga llega en plena fatiga, antes de la recuperación; el organismo no repara ni repone y el nivel baja progresivamente hacia el sobreentrenamiento."],
      ["Calcula con Karvonen la FC al 65 % de una alumna de 16 años con 70 ppm en reposo.", "FC máx = 204; reserva = 204 − 70 = 134; 0,65 × 134 ≈ 87; FC objetivo = 70 + 87 = 157 ppm."],
      ["Una persona corre 25 km a la semana. Escribe una progresión de 3 semanas y una descarga.", "Semana 1: 25 km; semana 2: 27,5 km; semana 3: 30 km; semana 4 (descarga): unos 19-20 km suaves."],
      ["¿Por qué la técnica y la velocidad se trabajan antes que la resistencia en la sesión?", "Porque requieren un sistema nervioso fresco; con fatiga, la técnica empeora, se aprende peor y aumenta el riesgo de lesión."],
      ["Transforma en SMART: «quiero ser más fuerte».", "Por ejemplo: «hacer 15 flexiones completas seguidas dentro de 8 semanas, entrenando fuerza 2 días por semana»."],
      ["Diseña un microciclo de 4 sesiones para mejorar la resistencia y la fuerza de un principiante.", "Lunes: carrera continua 25 min zona 2; martes: circuito de fuerza; jueves: carrera 25 min; sábado: actividad recreativa (ruta, deporte). Miércoles, viernes y domingo: descanso o actividad suave."],
      ["Calcula la carga de sesión semanal: lunes 30 min RPE 4, miércoles 40 min RPE 6, viernes 25 min RPE 8.", "120 + 240 + 200 = 560 unidades arbitrarias."],
      ["Explica la diferencia entre objetivo de resultado y de proceso y por qué conviene combinarlos.", "Resultado: lo que se quiere conseguir (bajar un minuto en 3 km). Proceso: las conductas para lograrlo (entrenar 3 días). Los de proceso dependen solo de uno y mantienen la motivación aunque el resultado tarde."],
      ["Enumera cuatro señales de alarma que obligan a bajar la carga.", "FC de reposo elevada varios días, cansancio persistente, peor sueño, irritabilidad o desánimo, dolor que aumenta con el ejercicio."],
      ["¿Por qué es útil la FC de reposo en el diagnóstico inicial?", "Indica el nivel de forma aeróbica (suele bajar al mejorar) y permite calcular zonas individualizadas con Karvonen y detectar fatiga si sube."],
      ["Explica cómo se compensan volumen e intensidad con un ejemplo.", "Un día de series rápidas (alta intensidad) dura menos (20 min de trabajo); un día de carrera suave (baja intensidad) puede durar 45 min."],
    ],
    a: [
      ["Diseña un plan de 8 semanas para pasar de 15 a 30 minutos de carrera continua.", "Dos mesociclos 3 + 1. Semanas 1-3: 3 días con intervalos de carrera y caminar (p. ej., 4 × 5 min corriendo / 1 min andando) subiendo 2-3 min por semana; semana 4: descarga; semanas 5-7: carrera continua 20 → 25 → 28 min; semana 8: test de 30 min en zona 2. Registro de FC, RPE y sensaciones; pruebas al inicio y al final."],
      ["Una jugadora de baloncesto tiene partido el sábado y entrena con su equipo martes y jueves. ¿Cómo integrarías un plan personal de fuerza?", "Fuerza el lunes y el miércoles (lejos del partido), con cargas moderadas; viernes suave o descanso; domingo recuperación activa. Evitar fuerza intensa 48 h antes del partido y respetar el principio de alternancia."],
      ["Analiza este plan y corrígelo: «correr 1 h al 90 % de la FC máx los 7 días de la semana».", "Incumple la recuperación, la progresión y la individualización; la intensidad es muy alta para tanto volumen. Corrección: 3-4 días, 30-45 min en zona 2, un día de intervalos, al menos 2 días de descanso o actividad suave, y progresión ≤ 10 %."],
      ["Compara el control de la intensidad con FC y con RPE: ventajas e inconvenientes.", "FC: objetiva, cuantificable, pero afectada por el calor, el estrés, la cafeína o el sueño y con retardo en esfuerzos cortos. RPE: inmediata, gratuita e integra la fatiga global, pero es subjetiva y requiere aprendizaje. Lo mejor es combinarlas."],
      ["Explica, con el modelo de supercompensación, por qué conviene una semana de descarga cada 3-4 semanas.", "La fatiga se acumula a lo largo de varias semanas aunque cada sesión se recupere; la descarga permite que el organismo complete las adaptaciones y el nivel suba por encima del previo, evitando el estancamiento y el sobreentrenamiento."],
      ["Tras 4 semanas, un alumno ha cumplido solo el 40 % de las sesiones. Propón un ajuste razonado.", "Analizar las causas (horario, motivación, cansancio); reducir a 2-3 sesiones realistas, más cortas, fijar días y horas, buscar compañía o actividades que le gusten e incluir objetivos de proceso semanales."],
      ["¿Qué riesgos tiene usar aplicaciones de entrenamiento y cómo se minimizan?", "Compartir ubicación y datos de salud, compararse de forma poco sana, depender del dato. Minimizar: revisar los permisos, perfiles privados, no publicar rutas en tiempo real y priorizar las sensaciones."],
      ["Justifica por qué un plan personal debe considerar el sueño y los exámenes.", "El sueño es la principal fase de recuperación; sin él no hay supercompensación. En época de exámenes aumentan el estrés y la falta de tiempo: conviene bajar la carga y mantener sesiones cortas, que además ayudan a rendir mejor."],
    ],
  },
  glosario: [
    ["Entrenamiento", "Proceso planificado de estímulos para provocar adaptaciones."],
    ["Carga de entrenamiento", "Conjunto de estímulos aplicados en una sesión o periodo."],
    ["Carga externa", "Trabajo realizado, medible en minutos, kilos o kilómetros."],
    ["Carga interna", "Respuesta individual al esfuerzo: FC, RPE, fatiga."],
    ["Homeostasis", "Equilibrio interno del organismo."],
    ["Adaptación", "Cambio duradero del organismo tras estímulos repetidos."],
    ["Supercompensación", "Aumento del nivel por encima del inicial tras la recuperación."],
    ["Sobreentrenamiento", "Estado de fatiga crónica por exceso de carga y falta de descanso."],
    ["Progresión", "Aumento gradual de la carga."],
    ["Reversibilidad", "Pérdida de las mejoras al dejar de entrenar."],
    ["FITT", "Frecuencia, intensidad, tiempo y tipo."],
    ["FC máxima", "Pulsaciones máximas por minuto; ≈ 220 − edad."],
    ["Karvonen", "Fórmula de FC objetivo que usa la FC de reposo."],
    ["RPE", "Percepción subjetiva del esfuerzo en escala 0-10."],
    ["Microciclo", "Unidad de planificación de una semana."],
    ["Mesociclo", "Bloque de 3 a 6 semanas con un objetivo común."],
    ["Descarga", "Periodo de menor carga para asimilar."],
    ["Objetivo SMART", "Específico, medible, alcanzable, relevante y temporal."],
  ],
  situacion: {
    titulo: "Mi plan de 8 semanas",
    reto: "Cada estudiante diseñará, aplicará y evaluará un plan de entrenamiento personal de 8 semanas orientado a un objetivo de salud o de rendimiento elegido por él, y presentará sus resultados a la clase.",
    pasos: [
      "Haz el diagnóstico: historial, FC de reposo y una batería de cuatro pruebas de condición física.",
      "Fija un objetivo de resultado SMART y dos objetivos de proceso.",
      "Diseña dos mesociclos 3 + 1 con sesiones prescritas con FITT y zonas de FC.",
      "Aplica el plan registrando cada sesión (carga externa, FC, RPE, sensaciones).",
      "Repite las pruebas, analiza los datos con gráficas y ajusta el plan para el siguiente trimestre.",
    ],
    producto: "Un cuaderno o documento digital con el diagnóstico, el plan, el diario de 8 semanas, las gráficas de evolución y una reflexión final.",
    evaluacion: [
      "El diagnóstico y los objetivos son concretos, medibles y realistas.",
      "El plan aplica correctamente los principios del entrenamiento y las variables FITT.",
      "El registro es completo y se analiza con rigor.",
      "La reflexión identifica aciertos, errores y ajustes razonados.",
    ],
  },
  familias: [
    "Pedidle que os explique su plan de entrenamiento y ayudadle a encajarlo en el horario familiar.",
    "Proponed una actividad física semanal juntos (ruta, bici, piscina) que cuente en su plan.",
    "Valorad el descanso: dormir 8-10 horas es parte del entrenamiento.",
    "Animadle a escuchar las señales de fatiga o dolor y a no compararse con otros.",
  ],
  saberes: B.SAB("Planificación del entrenamiento personal: carga y adaptación, supercompensación, principios del entrenamiento, variables FITT, control de la intensidad con FC y RPE, estructura de la sesión, periodización básica, diagnóstico, objetivos SMART, registro y evaluación del plan, y uso crítico de aplicaciones"),
  ideas: [
    "Hacer en clase la batería de pruebas inicial y que cada alumno calcule sus zonas de FC.",
    "Usar una hoja de cálculo compartida como diario de entrenamiento con gráficas automáticas.",
    "Analizar en grupos planes de entrenamiento sacados de redes sociales y detectar errores.",
    "Dedicar una sesión al mes a la evaluación y el ajuste de los planes personales.",
  ],
  fuentes: [
    B.FUENTES.OMS,
    B.FUENTES.WIKI("Supercompensación", "Supercompensación"),
    B.FUENTES.WIKI("Frecuencia_cardíaca", "Frecuencia cardíaca"),
  ],
});
