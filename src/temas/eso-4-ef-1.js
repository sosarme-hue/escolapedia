// Educación Física 4º ESO (1 de 2). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

const M = "Educación Física";
const C = "4-eso";
const BG = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
// Figura de filas: [nombre, texto, color]
const filas = (aria, rows) => `<svg viewBox="0 0 640 ${rows.length * 50 + 20}" role="img" aria-label="${aria}">
  <rect width="640" height="${rows.length * 50 + 20}" rx="16" fill="var(--paper)"/>
  ${rows.map(([n, d, c], i) => `<rect x="20" y="${12 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${39 + i * 50}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="250" y="${39 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
</svg>`;

module.exports = [
  {
    materia: M, curso: C, titulo: "Condición física y salud", minutos: 35,
    objetivos: ["Conocer las capacidades físicas básicas y cómo se miden", "Relacionar la actividad física con la salud física, mental y social", "Calcular la frecuencia cardiaca y las zonas de trabajo"],
    claves: ["resistencia", "fuerza", "velocidad", "flexibilidad", "frecuencia cardiaca", "sedentarismo"],
    pregunta: {
      texto: "La OMS recomienda a los adolescentes 60 minutos al día de actividad física. ¿Cuántos de tus compañeros crees que lo cumplen?",
      respuesta: "Según la OMS, <mark>más del 80 %</mark> de los adolescentes del mundo no llega a ese mínimo. Moverse cada día mejora el corazón, los huesos, el sueño, el ánimo y hasta la concentración en clase.",
    },
    bloques: [
      {
        html: `<h3>Las capacidades físicas básicas</h3><p>Son cuatro: <b>resistencia</b> (aguantar un esfuerzo mucho tiempo), <b>fuerza</b> (vencer una resistencia), <b>velocidad</b> (hacer algo en el menor tiempo) y <b>flexibilidad</b> (amplitud de movimiento). Juntas forman tu <mark>condición física</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las cuatro capacidades físicas básicas: resistencia, fuerza, velocidad y flexibilidad">${BG}
          ${[["Resistencia", "var(--red)", 16, 18], ["Fuerza", "var(--pen)", 136, 18], ["Velocidad", "var(--leaf)", 16, 98], ["Flexibilidad", "var(--inf)", 136, 98]].map(([n, c, x, y]) => `<rect x="${x}" y="${y}" width="108" height="64" rx="12" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2.5"/><text x="${x + 54}" y="${y + 38}" text-anchor="middle" font-size="14" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>Resistencia aeróbica y anaeróbica</h3><p>En la <b>aeróbica</b> el músculo recibe oxígeno suficiente: correr suave 30 minutos, nadar, ir en bici. En la <b>anaeróbica</b> el esfuerzo es tan intenso que falta oxígeno y solo dura segundos: un sprint de 100 m. Para la salud, la base es la <mark>resistencia aeróbica</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Intensidad frente a duración: la aeróbica es de intensidad media y larga; la anaeróbica, de intensidad muy alta y muy corta">${BG}
          <path d="M30 150 H 246 M30 150 V 20" stroke="var(--muted)" stroke-width="2"/>
          <rect x="36" y="30" width="30" height="120" rx="4" fill="var(--red)"/><rect x="80" y="86" width="160" height="64" rx="4" fill="var(--leaf)"/>
          <g ${F} font-size="12" font-weight="700"><text x="36" y="24" fill="var(--red)">anaeróbica</text><text x="160" y="122" text-anchor="middle" fill="var(--card)">aeróbica</text><text x="246" y="168" text-anchor="end" fill="var(--muted)">duración →</text><text x="22" y="100" fill="var(--muted)" transform="rotate(-90 22 100)" text-anchor="middle">intensidad</text></g></svg>`,
      },
      {
        html: `<h3>La frecuencia cardiaca</h3><p>Son las pulsaciones por minuto. Se toma en la muñeca o el cuello durante 15 s y se multiplica por 4. Tu <b>frecuencia máxima</b> aproximada es <mark>220 − edad</mark>: a los 16 años, 204 ppm. Para mejorar la resistencia aeróbica conviene trabajar entre el <b>60 % y el 80 %</b> de ella.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Zonas de frecuencia cardiaca para 16 años: reposo, zona aeróbica entre 122 y 163, y zona anaeróbica hasta 204">${BG}
          <rect x="30" y="30" width="200" height="30" rx="6" fill="var(--muted)" fill-opacity=".25"/><rect x="30" y="70" width="200" height="30" rx="6" fill="var(--leaf)"/><rect x="30" y="110" width="200" height="30" rx="6" fill="var(--red)"/>
          <g ${F} font-size="12" font-weight="700"><text x="40" y="50" fill="var(--ink)">reposo: 60–80 ppm</text><text x="40" y="90" fill="var(--card)">aeróbica: 122–163 ppm</text><text x="40" y="130" fill="var(--card)">anaeróbica: 163–204 ppm</text><text x="130" y="164" text-anchor="middle" fill="var(--muted)">FC máx = 220 − 16 = 204</text></g></svg>`,
      },
      {
        html: `<h3>Cómo se mide la condición física</h3><p>Con <b>pruebas</b> sencillas y repetibles: Course Navette (resistencia), salto horizontal (fuerza de piernas), 4 × 10 m (velocidad y agilidad) y flexión de tronco sentado (flexibilidad). Lo importante es <mark>compararte contigo mismo</mark> a lo largo del curso.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos resultados del mismo alumno en septiembre y en mayo: la marca mejora">${BG}
          <path d="M30 150 H 240" stroke="var(--muted)" stroke-width="2"/>
          ${[["Navette", 5, 7.5], ["Salto", 6, 7], ["4×10", 5.5, 6.5], ["Flexión", 4, 6]].map(([n, a, b], i) => `<rect x="${36 + i * 52}" y="${150 - a * 14}" width="18" height="${a * 14}" fill="var(--muted)" fill-opacity=".5"/><rect x="${56 + i * 52}" y="${150 - b * 14}" width="18" height="${b * 14}" fill="var(--leaf)"/><text x="${56 + i * 52}" y="166" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
          <g ${F} font-size="11" font-weight="700"><text x="36" y="22" fill="var(--muted)">■ septiembre</text><text x="140" y="22" fill="var(--leaf)">■ mayo</text></g></svg>`,
      },
      {
        html: `<h3>Actividad física y salud</h3><p>El <b>sedentarismo</b> (pasar muchas horas sentado) se relaciona con obesidad, diabetes y problemas de espalda. Moverse cada día mejora el corazón y los huesos, reduce el estrés y la ansiedad y <mark>mejora el sueño y la memoria</mark>. Cuenta todo: ir andando al instituto, subir escaleras o bailar.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Beneficios de la actividad física: corazón, huesos y músculos, ánimo y sueño">${BG}
          ${[["corazón", 40, 40], ["huesos", 220, 40], ["ánimo", 40, 146], ["sueño", 220, 146]].map(([n, x, y]) => `<path d="M130 90 L ${x} ${y}" stroke="var(--leaf)" stroke-width="2"/><rect x="${x - 34}" y="${y - 14}" width="68" height="28" rx="14" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
          <circle cx="130" cy="90" r="32" fill="var(--leaf)"/><text x="130" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="var(--card)" ${F}>moverse</text>
        </svg>`,
      },
    ],
    figura: { titulo: "Las capacidades físicas y cómo mejorarlas", svg: filas("Resistencia: carrera continua; fuerza: autocargas; velocidad: sprints cortos; flexibilidad: estiramientos", [["Resistencia", "carrera continua, bici, natación, 20–40 min", "var(--red)"], ["Fuerza", "autocargas: sentadillas, flexiones, plancha", "var(--pen)"], ["Velocidad", "sprints de 10–30 m con descanso completo", "var(--leaf)"], ["Flexibilidad", "estiramientos suaves de 20–30 s, sin rebotes", "var(--inf)"]]) },
    video: { id: "JwFqEWCK7nw", titulo: "Las capacidades físicas básicas", canal: "Educación Física y más", vistas: 464413, megusta: 6327, busqueda: "capacidades físicas básicas" },
    quiz: [
      { q: "¿Cuál NO es una capacidad física básica?", o: ["Resistencia", "Coordinación", "Flexibilidad"], a: 1, e: "La coordinación es una capacidad coordinativa." },
      { q: "La frecuencia cardiaca máxima aproximada a los 15 años es…", o: ["205 ppm", "180 ppm", "235 ppm"], a: 0, e: "220 − 15 = 205." },
      { q: "Correr 30 minutos a ritmo suave trabaja sobre todo la resistencia…", o: ["anaeróbica", "aeróbica", "de velocidad"], a: 1, e: "Hay oxígeno suficiente." },
      { q: "Si cuentas 20 pulsaciones en 15 s, tu frecuencia es…", o: ["80 ppm", "20 ppm", "60 ppm"], a: 0, e: "20 × 4 = 80." },
      { q: "¿Cuánta actividad física diaria recomienda la OMS a los adolescentes?", o: ["15 minutos", "60 minutos", "3 horas"], a: 1, e: "Al menos 60 minutos de moderada a vigorosa." },
    ],
    examen: [
      { q: "Un sprint de 100 m es un esfuerzo…", o: ["aeróbico", "anaeróbico", "de flexibilidad"], a: 1, e: "Muy intenso y corto." },
      { q: "La prueba Course Navette mide…", o: ["la resistencia", "la flexibilidad", "la fuerza de brazos"], a: 0, e: "Ida y vuelta de 20 m cada vez más rápido." },
      { q: "Para mejorar la resistencia aeróbica conviene trabajar entre…", o: ["el 60 y el 80 % de la FC máx", "el 95 y el 100 %", "el 20 y el 40 %"], a: 0, e: "Es la zona aeróbica." },
    ],
    feynman: ["Cuáles son las cuatro capacidades físicas básicas", "Qué diferencia hay entre esfuerzo aeróbico y anaeróbico", "Cómo calcular tu frecuencia cardiaca máxima y tu zona de trabajo", "Por qué el sedentarismo es un problema de salud"],
    mapa: mapa("CONDICIÓN FÍSICA", "var(--bac)", [["Capacidades", "resistencia · fuerza · velocidad · flexibilidad", "var(--red)"], ["Frecuencia cardiaca", "220 − edad · zonas", "var(--pen)"], ["Pruebas", "Navette · salto · 4×10", "var(--leaf)"], ["Salud", "60 min al día · sueño · ánimo", "var(--inf)"]], 270),
    tarjetas: [["Capacidades físicas básicas", "Resistencia, fuerza, velocidad y flexibilidad."], ["FC máxima aproximada", "220 − edad."], ["Zona aeróbica", "Entre el 60 % y el 80 % de la FC máxima."], ["Recomendación OMS (12–17 años)", "60 minutos diarios de actividad moderada o vigorosa."], ["Sedentarismo", "Pasar mucho tiempo sentado o sin moverse."]],
    familias: ["Haced juntos un paseo rápido de 30 minutos y tomaos el pulso antes y después.", "Proponed una «hora sin pantallas» activa a la semana.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Vida activa y saludable: capacidades físicas, frecuencia cardiaca, evaluación de la condición física y beneficios de la actividad física (RD 217/2022, Educación Física 4º).", ideas: ["Batería de pruebas al inicio y al final con autoevaluación.", "Registro semanal de actividad física con una app o una tabla.", "Debate sobre sedentarismo y uso de pantallas."] },
    fuentes: [RD, { t: "OMS, recomendaciones sobre actividad física", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Planificación del entrenamiento", minutos: 35,
    objetivos: ["Aplicar los principios del entrenamiento", "Estructurar una sesión con calentamiento, parte principal y vuelta a la calma", "Diseñar un plan personal sencillo con objetivos y registro"],
    claves: ["sobrecarga", "progresión", "continuidad", "volumen", "intensidad", "calentamiento"],
    pregunta: {
      texto: "Si entrenas muy fuerte un día y luego te pasas dos semanas sin hacer nada, ¿mejoras?",
      respuesta: "Casi nada. El cuerpo mejora por <mark>adaptación</mark>: necesita un estímulo suficiente, descanso y <b>continuidad</b>. Lo que se gana en semanas se pierde en pocas semanas si se deja.",
    },
    bloques: [
      {
        html: `<h3>Cómo se adapta el cuerpo</h3><p>Tras un esfuerzo hay <b>fatiga</b>; con descanso, el cuerpo se recupera y queda un poco <mark>por encima</mark> de como estaba (supercompensación). Si el siguiente entreno llega en ese momento, vas mejorando. Por eso el <b>descanso</b> forma parte del entrenamiento.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Curva de supercompensación: tras el esfuerzo baja el nivel, con el descanso se recupera y supera el nivel inicial">${BG}
          <path d="M20 90 H 246" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"/>
          <path d="M20 90 L 60 90 C 80 90 80 140 100 140 C 130 140 140 60 170 60 C 200 60 210 84 246 86" fill="none" stroke="var(--pen)" stroke-width="3"/>
          <g ${F} font-size="11" font-weight="700"><text x="64" y="150" fill="var(--red)">fatiga</text><text x="124" y="160" fill="var(--leaf)">descanso</text><text x="150" y="50" fill="var(--pen)">¡mejora!</text><text x="22" y="82" fill="var(--muted)">nivel inicial</text></g></svg>`,
      },
      {
        html: `<h3>Principios del entrenamiento</h3><ul><li><b>Sobrecarga</b>: el esfuerzo debe superar lo habitual.</li><li><b>Progresión</b>: aumentar poco a poco.</li><li><b>Continuidad</b>: entrenar con regularidad.</li><li><b>Individualidad</b>: cada persona necesita su plan.</li><li><b>Alternancia</b>: no trabajar lo mismo cada día.</li></ul>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escalera de progresión: la carga sube poco a poco semana a semana">${BG}
          ${[0, 1, 2, 3, 4].map((i) => `<rect x="${24 + i * 44}" y="${140 - i * 22}" width="40" height="${20 + i * 22}" rx="4" fill="var(--pen)" fill-opacity="${0.3 + i * 0.15}"/><text x="${44 + i * 44}" y="${134 - i * 22}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>sem ${i + 1}</text>`).join("")}
          <text x="24" y="24" font-size="13" font-weight="700" fill="var(--pen)" ${F}>progresión: +5–10 % por semana</text></svg>`,
      },
      {
        html: `<h3>Volumen e intensidad</h3><p>El <b>volumen</b> es la cantidad (minutos, kilómetros, repeticiones); la <b>intensidad</b>, lo duro que es (velocidad, peso, pulsaciones). Cuando sube mucho una, debe bajar la otra. Un error típico es <mark>subir las dos a la vez</mark>, que lleva a lesiones.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza entre volumen e intensidad: si sube una, baja la otra">${BG}
          <path d="M130 150 L 130 60" stroke="var(--ink)" stroke-width="3"/><path d="M110 150 H 150" stroke="var(--ink)" stroke-width="4"/><path d="M50 50 L 210 80" stroke="var(--ink)" stroke-width="3"/>
          <rect x="14" y="22" width="76" height="30" rx="6" fill="var(--leaf)"/><rect x="170" y="74" width="80" height="30" rx="6" fill="var(--red)"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="52" y="42" fill="var(--card)">volumen</text><text x="210" y="94" fill="var(--card)">intensidad</text><text x="130" y="172" fill="var(--muted)">si sube una, baja la otra</text></g></svg>`,
      },
      {
        html: `<h3>Las partes de una sesión</h3><p>Toda sesión tiene tres partes: <b>calentamiento</b> (10–15 min: movilidad, carrera suave, ejercicios específicos), <b>parte principal</b> (el objetivo del día) y <b>vuelta a la calma</b> (5–10 min: bajar pulsaciones y estirar). Calentar <mark>reduce el riesgo de lesión</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pulsaciones durante una sesión: suben en el calentamiento, se mantienen altas en la parte principal y bajan en la vuelta a la calma">${BG}
          <path d="M20 150 H 246" stroke="var(--muted)" stroke-width="2"/>
          <rect x="20" y="30" width="60" height="120" fill="var(--hl)" fill-opacity=".5"/><rect x="80" y="30" width="110" height="120" fill="var(--red)" fill-opacity=".12"/><rect x="190" y="30" width="56" height="120" fill="var(--inf)" fill-opacity=".2"/>
          <path d="M20 130 C 50 128 60 70 80 60 L 100 54 L 120 44 L 140 58 L 160 46 L 190 56 C 210 80 220 116 246 122" fill="none" stroke="var(--red)" stroke-width="3"/>
          <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="50" y="168" fill="var(--hl-ink)">calentar</text><text x="135" y="168" fill="var(--red)">principal</text><text x="218" y="168" fill="var(--inf)">calma</text></g></svg>`,
      },
      {
        html: `<h3>Tu plan personal</h3><p>Un buen plan sigue cuatro pasos: <b>evaluar</b> tu punto de partida, fijar un <mark>objetivo concreto</mark> (correr 30 min seguidos en 8 semanas), <b>planificar</b> las sesiones por semanas y <b>registrar</b> lo que haces para ajustar. Si algo duele de verdad, para y consulta.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del plan personal: evaluar, objetivo, planificar, registrar y vuelta a evaluar">${BG}
          ${[["evaluar", 130, 34], ["objetivo", 214, 90], ["planificar", 130, 146], ["registrar", 46, 90]].map(([n, x, y], i) => `<rect x="${x - 40}" y="${y - 15}" width="80" height="30" rx="15" fill="var(--card)" stroke="${["var(--pen)", "var(--red)", "var(--leaf)", "var(--inf)"][i]}" stroke-width="2.5"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
          <path d="M170 40 Q 210 50 214 72 M214 108 Q 210 136 172 144 M90 144 Q 50 136 46 108 M46 72 Q 50 44 90 38" fill="none" stroke="var(--muted)" stroke-width="2"/></svg>`,
      },
    ],
    figura: { titulo: "Principios del entrenamiento", svg: filas("Sobrecarga, progresión, continuidad, individualidad y alternancia", [["Sobrecarga", "el estímulo debe superar lo habitual", "var(--red)"], ["Progresión", "subir la carga poco a poco", "var(--pen)"], ["Continuidad", "entrenar con regularidad, sin parones largos", "var(--leaf)"], ["Individualidad", "un plan adaptado a cada persona", "var(--inf)"]]) },
    video: { id: "vBjZk8ZhsdQ", titulo: "Planificación del entrenamiento: principios para progresar", canal: "Powerexplosive", vistas: 235759, megusta: 5700, busqueda: "principios del entrenamiento" },
    quiz: [
      { q: "Aumentar la carga poco a poco es el principio de…", o: ["progresión", "alternancia", "individualidad"], a: 0, e: "Subir gradualmente." },
      { q: "¿Qué parte de la sesión baja las pulsaciones y estira?", o: ["Calentamiento", "Parte principal", "Vuelta a la calma"], a: 2, e: "Es el final de la sesión." },
      { q: "Los kilómetros que corres en una semana son…", o: ["volumen", "intensidad", "frecuencia"], a: 0, e: "Es la cantidad de trabajo." },
      { q: "La mejora del cuerpo después del descanso se llama…", o: ["sobreentrenamiento", "supercompensación", "fatiga"], a: 1, e: "Queda por encima del nivel inicial." },
      { q: "¿Cuánto debe durar aproximadamente un calentamiento?", o: ["1–2 minutos", "10–15 minutos", "45 minutos"], a: 1, e: "Lo suficiente para preparar el cuerpo." },
    ],
    examen: [
      { q: "Entrenar mucho sin descansar puede llevar a…", o: ["supercompensación", "sobreentrenamiento", "más flexibilidad"], a: 1, e: "Fatiga acumulada y lesiones." },
      { q: "«Correr 30 minutos seguidos en 8 semanas» es un ejemplo de…", o: ["objetivo concreto", "calentamiento", "volumen"], a: 0, e: "Es medible y tiene plazo." },
      { q: "Si subes mucho la intensidad, conviene…", o: ["subir también el volumen", "bajar el volumen", "no descansar"], a: 1, e: "Para evitar lesiones." },
    ],
    feynman: ["Qué es la supercompensación y por qué importa el descanso", "Cuáles son los principios del entrenamiento", "Qué diferencia hay entre volumen e intensidad", "Cómo se estructura una sesión de entrenamiento"],
    mapa: mapa("PLANIFICAR EL ENTRENAMIENTO", "var(--bac)", [["Adaptación", "esfuerzo + descanso", "var(--pen)"], ["Principios", "sobrecarga · progresión · continuidad", "var(--red)"], ["Carga", "volumen · intensidad", "var(--leaf)"], ["Sesión", "calentar · principal · calma", "var(--inf)"]], 260),
    tarjetas: [["Supercompensación", "Tras el esfuerzo y el descanso, el cuerpo queda por encima de su nivel inicial."], ["Principio de progresión", "Aumentar la carga poco a poco."], ["Volumen", "La cantidad de trabajo (tiempo, distancia, repeticiones)."], ["Intensidad", "Lo duro que es el trabajo."], ["Partes de una sesión", "Calentamiento, parte principal y vuelta a la calma."]],
    familias: ["Ayudad a diseñar un plan de 8 semanas y colgadlo en la nevera para marcar cada sesión.", "Entrenad juntos una vez por semana siguiendo las tres partes de la sesión.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Vida activa y saludable: principios del entrenamiento, planificación y autogestión de la actividad física (RD 217/2022, Educación Física 4º).", ideas: ["Cada alumno diseña y aplica un plan de 6–8 semanas con diario.", "Calentamientos dirigidos por el alumnado por turnos.", "Comparar pulsaciones en las tres partes de la sesión."] },
    fuentes: [RD, { t: "Entrenamiento deportivo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Entrenamiento_deportivo" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Primeros auxilios", minutos: 40,
    objetivos: ["Aplicar la conducta PAS ante un accidente", "Hacer la valoración primaria y colocar en posición lateral de seguridad", "Conocer la RCP básica, el uso del desfibrilador y la maniobra de Heimlich"],
    claves: ["PAS", "112", "consciencia", "RCP", "DEA", "posición lateral de seguridad"],
    pregunta: {
      texto: "Si alguien se desploma en la calle y no respira, ¿cuánto tiempo hay para empezar a ayudarle?",
      respuesta: "Muy poco: por cada minuto sin <b>RCP</b> las posibilidades de sobrevivir bajan alrededor de un <mark>10 %</mark>. Llamar al 112 y empezar a comprimir el pecho enseguida puede duplicar o triplicar la supervivencia.",
    },
    bloques: [
      {
        html: `<h3>La conducta PAS</h3><p>Ante cualquier accidente, tres pasos en orden:</p><ul><li><b>Proteger</b>: que la zona sea segura para ti y para la víctima.</li><li><b>Avisar</b>: llamar al <mark>112</mark> y decir qué pasa y dónde.</li><li><b>Socorrer</b>: ayudar con lo que sabes, sin hacer más daño.</li></ul>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Conducta PAS: proteger, avisar al 112 y socorrer">${BG}
          ${[["P", "Proteger", "var(--hl-ink)"], ["A", "Avisar 112", "var(--red)"], ["S", "Socorrer", "var(--leaf)"]].map(([l, n, c], i) => `<circle cx="${50 + i * 80}" cy="76" r="32" fill="${c}"/><text x="${50 + i * 80}" y="88" text-anchor="middle" font-size="32" font-weight="700" fill="var(--card)" ${D}>${l}</text><text x="${50 + i * 80}" y="136" text-anchor="middle" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}
          <path d="M84 76 H 96 M164 76 H 176" stroke="var(--muted)" stroke-width="2.5"/></svg>`,
      },
      {
        html: `<h3>Valoración primaria</h3><p>Comprueba primero si está <b>consciente</b>: háblale y tócale los hombros. Si no responde, pide ayuda, abre la vía aérea con la maniobra <b>frente-mentón</b> y comprueba si <mark>respira</mark> (ver, oír y sentir durante 10 s).</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de decisión: ¿responde? Si no, abrir vía aérea; ¿respira? Sí, posición lateral de seguridad; no, RCP">${BG}
          <rect x="80" y="12" width="100" height="30" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="80" y="70" width="100" height="30" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
          <rect x="14" y="134" width="110" height="32" rx="8" fill="var(--leaf)"/><rect x="136" y="134" width="110" height="32" rx="8" fill="var(--red)"/>
          <path d="M130 42 V 70 M110 100 L 70 134 M150 100 L 190 134" stroke="var(--muted)" stroke-width="2"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="130" y="32" fill="var(--ink)">¿Responde?</text><text x="138" y="60" fill="var(--muted)" text-anchor="start">no</text><text x="130" y="90" fill="var(--ink)">¿Respira?</text><text x="76" y="120" fill="var(--leaf)">sí</text><text x="184" y="120" fill="var(--red)">no</text><text x="69" y="155" fill="var(--card)">PLS</text><text x="191" y="155" fill="var(--card)">112 + RCP</text></g></svg>`,
      },
      {
        html: `<h3>Posición lateral de seguridad</h3><p>Si está inconsciente pero <b>respira</b>, colócale de lado con la pierna de arriba flexionada y la cabeza ligeramente hacia atrás. Así, si vomita, <mark>no se ahoga</mark>. Vigila que siga respirando hasta que llegue la ayuda. No se usa si sospechas una lesión de columna.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Persona tumbada de lado en posición lateral de seguridad con la pierna de arriba doblada">${BG}
          <path d="M20 140 H 240" stroke="var(--muted)" stroke-width="2"/>
          <circle cx="56" cy="112" r="16" fill="var(--inf)"/>
          <path d="M72 116 L 160 118" stroke="var(--inf)" stroke-width="18" stroke-linecap="round"/>
          <path d="M160 118 L 210 128" stroke="var(--inf)" stroke-width="12" stroke-linecap="round"/><path d="M160 116 L 180 92 L 200 116" fill="none" stroke="var(--inf)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M80 112 L 66 134" stroke="var(--inf)" stroke-width="10" stroke-linecap="round"/>
          <g ${F} font-size="12" font-weight="700"><text x="20" y="40" fill="var(--ink)">de lado, cabeza hacia atrás</text><text x="150" y="80" fill="var(--leaf)">pierna doblada</text><text x="20" y="162" fill="var(--muted)">vigilar que respire</text></g></svg>`,
      },
      {
        html: `<h3>RCP y desfibrilador</h3><p>Si <b>no respira</b>: llama al 112 y empieza la RCP. Talón de la mano en el <b>centro del pecho</b>, brazos rectos, compresiones de 5–6 cm a <mark>100–120 por minuto</mark> (el ritmo de «Stayin' Alive»). Si sabes, alterna 30 compresiones y 2 insuflaciones. Si hay un <b>DEA</b> cerca, úsalo: te va diciendo qué hacer.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Manos entrelazadas sobre el centro del pecho con los brazos rectos; ritmo de 100 a 120 compresiones por minuto">${BG}
          <ellipse cx="90" cy="130" rx="64" ry="24" fill="var(--inf)" fill-opacity=".3" stroke="var(--inf)" stroke-width="2"/>
          <path d="M62 40 L 88 114 M118 40 L 92 114" stroke="var(--ink)" stroke-width="9" stroke-linecap="round"/><circle cx="90" cy="116" r="11" fill="var(--red)"/>
          <path d="M140 60 V 96" stroke="var(--red)" stroke-width="3"/><path d="M133 88 L 140 100 L 147 88" fill="none" stroke="var(--red)" stroke-width="3"/>
          <rect x="170" y="40" width="70" height="80" rx="10" fill="var(--leaf)"/><path d="M196 62 L 210 62 L 200 82 L 214 82 L 194 104 L 202 86 L 190 86 Z" fill="var(--card)"/>
          <g ${F} font-size="12" font-weight="700"><text x="120" y="30" fill="var(--red)">100–120 / min</text><text x="205" y="138" text-anchor="middle" fill="var(--leaf)">DEA</text><text x="90" y="170" text-anchor="middle" fill="var(--muted)">centro del pecho, 5–6 cm</text></g></svg>`,
      },
      {
        html: `<h3>Atragantamiento y lesiones comunes</h3><p>Si alguien se atraganta y <b>no puede toser ni hablar</b>: 5 golpes en la espalda y, si no sale, la <mark>maniobra de Heimlich</mark> (compresiones bajo el esternón hacia dentro y arriba). Ante un esguince o golpe: reposo, <b>hielo</b> envuelto en un paño, compresión y elevación. Una hemorragia: presión directa con una gasa.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pautas rápidas: atragantamiento, golpes en la espalda y Heimlich; esguince, hielo y elevación; hemorragia, presión directa">${BG}
          ${[["Atragantamiento", "5 golpes + Heimlich", "var(--red)"], ["Esguince", "reposo, hielo, elevar", "var(--inf)"], ["Hemorragia", "presión directa", "var(--pen)"]].map(([n, d, c], i) => `<rect x="14" y="${16 + i * 52}" width="232" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="26" y="${36 + i * 52}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="26" y="${52 + i * 52}" font-size="12" fill="var(--ink)" ${F}>${d}</text>`).join("")}
        </svg>`,
      },
    ],
    figura: { titulo: "Cadena de supervivencia", svg: filas("Cadena de supervivencia: reconocer y llamar al 112, RCP precoz, desfibrilación precoz y atención sanitaria", [["1. Reconocer y llamar", "¿responde? ¿respira? → 112", "var(--red)"], ["2. RCP precoz", "compresiones en el centro del pecho, 100–120/min", "var(--pen)"], ["3. Desfibrilación", "usar el DEA en cuanto llegue", "var(--leaf)"], ["4. Atención sanitaria", "la ambulancia toma el relevo", "var(--inf)"]]) },
    video: { id: "FEayzgNGGBQ", titulo: "Primeros auxilios: RCP en adultos", canal: "Cruz Roja en Euskadi", vistas: 1489460, megusta: 17071, busqueda: "RCP primeros auxilios" },
    quiz: [
      { q: "¿Qué significa PAS?", o: ["Parar, Ayudar, Salir", "Proteger, Avisar, Socorrer", "Pulso, Aire, Sangre"], a: 1, e: "La conducta básica ante un accidente." },
      { q: "¿A qué número se llama ante una emergencia en Europa?", o: ["091", "112", "061"], a: 1, e: "Es el número único europeo." },
      { q: "Si está inconsciente pero respira, se le coloca en…", o: ["posición lateral de seguridad", "sentado", "boca arriba con las piernas dobladas"], a: 0, e: "Evita que se ahogue." },
      { q: "¿A qué ritmo se hacen las compresiones de la RCP?", o: ["30–40 por minuto", "100–120 por minuto", "200 por minuto"], a: 1, e: "Como la canción «Stayin' Alive»." },
      { q: "Ante un esguince de tobillo aplicamos…", o: ["calor", "hielo envuelto y elevación", "masaje fuerte"], a: 1, e: "Reduce la inflamación." },
    ],
    examen: [
      { q: "Si alguien se atraganta pero tose con fuerza, debes…", o: ["animarle a toser", "hacer Heimlich enseguida", "darle agua"], a: 0, e: "La tos es lo más eficaz mientras pueda." },
      { q: "¿Dónde se colocan las manos en la RCP?", o: ["en el estómago", "en el centro del pecho", "en el cuello"], a: 1, e: "Sobre la mitad inferior del esternón." },
      { q: "Un DEA sirve para…", o: ["dar oxígeno", "dar una descarga que puede restablecer el ritmo del corazón", "medir la fiebre"], a: 1, e: "Desfibrilador externo automático." },
    ],
    feynman: ["Qué es la conducta PAS", "Cómo se hace la valoración primaria", "Cuándo y cómo se hace la RCP", "Qué hacer ante un atragantamiento"],
    mapa: mapa("PRIMEROS AUXILIOS", "var(--bac)", [["PAS", "proteger · avisar 112 · socorrer", "var(--red)"], ["Valoración", "¿responde? · ¿respira?", "var(--pen)"], ["RCP y DEA", "100–120/min · 30:2", "var(--leaf)"], ["Otras", "Heimlich · hielo · presión", "var(--inf)"]], 260),
    tarjetas: [["PAS", "Proteger, Avisar (112) y Socorrer."], ["¿Inconsciente pero respira?", "Posición lateral de seguridad."], ["¿No respira?", "112 y RCP: compresiones en el centro del pecho a 100–120/min."], ["DEA", "Desfibrilador externo automático: da instrucciones por voz."], ["Atragantamiento sin tos", "5 golpes en la espalda y maniobra de Heimlich."]],
    familias: ["Localizad juntos dónde está el desfibrilador más cercano a casa y al instituto.", "Practicad la llamada al 112: qué decir y cómo describir el lugar.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Vida activa y saludable: protocolos de actuación ante accidentes, conducta PAS, RCP básica y uso del DEA (RD 217/2022, Educación Física 4º).", ideas: ["Prácticas de RCP con maniquí y metrónomo a 110 ppm.", "Simulacros de llamada al 112 por parejas.", "Charla de Cruz Roja o del servicio de emergencias local."] },
    fuentes: [RD, { t: "Cruz Roja Española, primeros auxilios", url: "https://www2.cruzroja.es/primeros-auxilios" }, { t: "Consejo Español de RCP", url: "https://www.cercp.org/" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Deportes colectivos", minutos: 35,
    objetivos: ["Identificar los elementos comunes de los deportes colectivos", "Aplicar principios tácticos de ataque y defensa", "Valorar la cooperación, el juego limpio y los distintos roles del equipo"],
    claves: ["táctica", "ataque", "defensa", "espacio libre", "desmarque", "juego limpio"],
    pregunta: {
      texto: "Fútbol, baloncesto, balonmano y voleibol parecen muy distintos. ¿Tienen algo en común?",
      respuesta: "Mucho: todos tienen un <b>balón</b>, un <b>espacio</b>, <b>compañeros</b>, <b>adversarios</b>, una <b>meta</b> y unas <b>reglas</b>. Y en todos se pasa de <mark>atacar a defender</mark> constantemente. Lo que aprendes en uno sirve en los demás.",
    },
    bloques: [
      {
        html: `<h3>Elementos comunes</h3><p>Todos los deportes colectivos comparten: <b>balón o móvil</b>, <b>espacio</b> de juego, <b>compañeros</b>, <b>adversarios</b>, una <b>meta</b> (portería, canasta, campo contrario) y un <b>reglamento</b>. Se distinguen en si el espacio es <mark>compartido</mark> (fútbol, baloncesto) o <mark>separado</mark> por una red (voleibol).</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Campo compartido con dos equipos mezclados y campo separado por una red">${BG}
          <rect x="14" y="30" width="110" height="110" rx="6" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><path d="M69 30 V 140" stroke="var(--leaf)" stroke-width="1.5"/>
          ${[[40, 60], [90, 80], [60, 110], [100, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--pen)"/>`).join("")}${[[50, 85], [80, 55], [36, 124], [108, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--red)"/>`).join("")}
          <rect x="136" y="30" width="110" height="110" rx="6" fill="var(--inf)" fill-opacity=".2" stroke="var(--inf)" stroke-width="2"/><path d="M191 26 V 144" stroke="var(--ink)" stroke-width="4"/>
          ${[[156, 60], [170, 110], [160, 86]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--pen)"/>`).join("")}${[[222, 60], [212, 110], [226, 86]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--red)"/>`).join("")}
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="69" y="162" fill="var(--leaf)">espacio compartido</text><text x="191" y="162" fill="var(--inf)">separado por red</text></g></svg>`,
      },
      {
        html: `<h3>Principios del ataque</h3><p>Cuando tu equipo tiene el balón: <b>conservarlo</b>, <b>avanzar</b> hacia la meta y <b>conseguir el tanto</b>. Para ello hay que <mark>ocupar espacios libres</mark>, desmarcarse (alejarse del defensor para recibir) y dar apoyos al compañero con balón. Abrir el campo crea huecos.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Jugador con balón y compañero que se desmarca hacia un espacio libre para recibir el pase">${BG}
          <rect x="14" y="16" width="232" height="148" rx="8" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2"/>
          <circle cx="60" cy="120" r="9" fill="var(--pen)"/><circle cx="60" cy="120" r="4" fill="var(--hl)"/>
          <circle cx="150" cy="92" r="9" fill="var(--pen)" fill-opacity=".4"/><path d="M157 84 L 180 60" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#fl-dm)"/><circle cx="188" cy="50" r="9" fill="var(--pen)"/>
          <circle cx="140" cy="108" r="9" fill="var(--red)"/>
          <path d="M68 114 L 178 56" stroke="var(--hl-ink)" stroke-width="2.5"/>
          <defs><marker id="fl-dm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L 10 5 L 0 10 Z" fill="var(--pen)"/></marker></defs>
          <g ${F} font-size="11" font-weight="700"><text x="150" y="36" fill="var(--pen)">desmarque</text><text x="70" y="146" fill="var(--hl-ink)">pase al espacio libre</text></g></svg>`,
      },
      {
        html: `<h3>Principios de la defensa</h3><p>Cuando el rival tiene el balón: <b>recuperarlo</b>, <b>impedir que avance</b> y <b>proteger la meta</b>. Hay dos sistemas básicos: defensa <mark>individual</mark> (cada uno marca a un rival) y defensa <mark>en zona</mark> (cada uno cubre un espacio). Colocarse entre el rival y la meta es la regla de oro.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Defensa individual, cada defensor junto a un atacante; defensa en zona, cada defensor cubre un área">${BG}
          <rect x="14" y="24" width="110" height="120" rx="6" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><rect x="136" y="24" width="110" height="120" rx="6" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
          ${[[40, 60], [90, 70], [60, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--pen)"/><circle cx="${x + 8}" cy="${y + 14}" r="7" fill="var(--red)"/>`).join("")}
          ${[[164, 60], [218, 60], [191, 108]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="24" fill="var(--red)" fill-opacity=".15"/><circle cx="${x}" cy="${y}" r="7" fill="var(--red)"/>`).join("")}
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="69" y="162" fill="var(--ink)">individual</text><text x="191" y="162" fill="var(--ink)">en zona</text></g></svg>`,
      },
      {
        html: `<h3>Roles y comunicación</h3><p>En cada momento cada jugador tiene un <b>rol</b>: atacante con balón, atacante sin balón, defensor del jugador con balón o defensor sin balón. Los equipos que <mark>se hablan</mark> («¡solo!», «¡cambio!», «¡mía!») y se ayudan rinden más que la suma de sus individualidades.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los cuatro roles: atacante con balón, atacante sin balón, defensor del jugador con balón y defensor sin balón">${BG}
          ${[["atacante con balón", "var(--pen)", 1], ["atacante sin balón", "var(--pen)", 0.4], ["defensor del que tiene balón", "var(--red)", 1], ["defensor sin balón", "var(--red)", 0.4]].map(([n, c, o], i) => `<circle cx="34" cy="${34 + i * 38}" r="11" fill="${c}" fill-opacity="${o}"/>${i === 0 ? `<circle cx="34" cy="34" r="5" fill="var(--hl)"/>` : ""}<text x="56" y="${39 + i * 38}" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>Juego limpio y deportividad</h3><p>Respetar las <b>reglas</b>, al <b>árbitro</b>, a los <b>rivales</b> y a los compañeros es parte del deporte. Ganar no lo justifica todo: el <mark>juego limpio</mark> incluye ayudar a un rival lesionado, reconocer una falta propia y saludar al terminar. También es aceptar a todos en el equipo, sin importar su nivel.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos manos que se saludan al final del partido, símbolo del juego limpio">${BG}
          <circle cx="130" cy="64" r="34" fill="var(--leaf)"/><path d="M114 64 L 126 76 L 148 52" fill="none" stroke="var(--card)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          ${["respeto", "reglas", "equipo"].map((n, i) => `<rect x="${18 + i * 78}" y="122" width="68" height="30" rx="15" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="${52 + i * 78}" y="142" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
          <text x="130" y="172" text-anchor="middle" font-size="12" font-weight="700" fill="var(--leaf)" ${F}>juego limpio</text></svg>`,
      },
    ],
    figura: { titulo: "Ataque y defensa", svg: filas("Principios de ataque: conservar, avanzar, marcar; principios de defensa: recuperar, impedir avance, proteger la meta", [["Ataque", "conservar el balón · avanzar · marcar", "var(--pen)"], ["Cómo", "desmarque · apoyos · ocupar espacios libres", "var(--pen)"], ["Defensa", "recuperar · impedir el avance · proteger la meta", "var(--red)"], ["Cómo", "individual o en zona · entre rival y meta", "var(--red)"]]) },
    video: { id: "T08dXv9vZqI", titulo: "Las zonas, las posiciones y los roles de los jugadores (voleibol)", canal: "SIKANA Español", vistas: 3551121, megusta: 59097, busqueda: "roles y posiciones deportes de equipo" },
    quiz: [
      { q: "¿Qué deporte colectivo tiene el espacio separado por una red?", o: ["Baloncesto", "Voleibol", "Balonmano"], a: 1, e: "Cada equipo en su campo." },
      { q: "Alejarse del defensor para poder recibir el balón es…", o: ["un desmarque", "un marcaje", "una falta"], a: 0, e: "Es un principio de ataque." },
      { q: "En la defensa en zona cada jugador…", o: ["persigue a un rival", "cubre un espacio", "se queda en la portería"], a: 1, e: "Defiende un área." },
      { q: "¿Cuál es un principio de la defensa?", o: ["Conservar el balón", "Proteger la meta", "Ocupar espacios libres en ataque"], a: 1, e: "Evitar el tanto rival." },
      { q: "Reconocer una falta propia es un ejemplo de…", o: ["táctica", "juego limpio", "defensa individual"], a: 1, e: "Deportividad." },
    ],
    examen: [
      { q: "La regla de oro defensiva es colocarse…", o: ["entre el rival y la meta", "detrás del rival", "lejos del balón"], a: 0, e: "Así proteges tu meta." },
      { q: "¿Cuántos roles básicos hay en el juego?", o: ["2", "4", "6"], a: 1, e: "Atacante con y sin balón, defensor del jugador con balón y sin balón." },
      { q: "Abrir el campo en ataque sirve para…", o: ["crear espacios libres", "perder tiempo", "defender mejor"], a: 0, e: "Separa a los defensores." },
    ],
    feynman: ["Qué elementos comparten todos los deportes colectivos", "Cuáles son los principios del ataque", "Qué diferencia hay entre defensa individual y en zona", "Qué es el juego limpio con ejemplos"],
    mapa: mapa("DEPORTES COLECTIVOS", "var(--bac)", [["Elementos", "balón · espacio · equipo · meta", "var(--ink)"], ["Ataque", "conservar · avanzar · marcar", "var(--pen)"], ["Defensa", "recuperar · individual · zona", "var(--red)"], ["Valores", "comunicación · juego limpio", "var(--leaf)"]], 250),
    tarjetas: [["Desmarque", "Moverse para librarse del defensor y recibir."], ["Principios del ataque", "Conservar el balón, avanzar y conseguir el tanto."], ["Principios de la defensa", "Recuperar el balón, impedir el avance y proteger la meta."], ["Defensa en zona", "Cada jugador cubre un espacio."], ["Juego limpio", "Respetar reglas, árbitro, rivales y compañeros."]],
    familias: ["Ved juntos un partido y fijaos en cuándo un equipo pasa de atacar a defender.", "Comentad una jugada de juego limpio que hayáis visto.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Resolución de problemas en situaciones motrices: principios tácticos de ataque y defensa en deportes colectivos de invasión y de red, roles y juego limpio (RD 217/2022, Educación Física 4º).", ideas: ["Juegos modificados con superioridad numérica para trabajar el desmarque.", "El alumnado arbitra y analiza partidos con una ficha de observación.", "Torneo con puntos extra por juego limpio."] },
    fuentes: [RD, { t: "Juego limpio, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Juego_limpio" }],
    revisado: "2026-11-12",
  },
];
