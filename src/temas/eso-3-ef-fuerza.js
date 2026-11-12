// Educación Física 3º ESO: fuerza y flexibilidad. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Educación Física";
// Figura humana de palitos: cabeza (hx, hy) y puntos del cuerpo como lista de segmentos.
const palo = (hx, hy, segs, c = "var(--pen)") => `<circle cx="${hx}" cy="${hy}" r="7" fill="${c}"/>${segs.map((s) => `<path d="${s}" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`).join("")}`;

module.exports = {
  materia: M,
  curso: C,
  titulo: "Fuerza y flexibilidad",
  minutos: 50,
  objetivos: ["Definir la fuerza y la flexibilidad y conocer sus tipos", "Realizar ejercicios de fuerza con autocarga con una técnica segura", "Aplicar métodos de estiramiento correctos", "Conocer los factores que influyen en ambas capacidades y su relación con la salud"],
  claves: ["fuerza", "autocarga", "repeticiones", "flexibilidad", "estiramiento estático", "higiene de la espalda"],
  pregunta: {
    texto: "¿Hay que levantar pesas en un gimnasio para ser fuerte?",
    respuesta: "No. En la adolescencia la mejor forma de ganar fuerza es con el <mark>propio peso corporal</mark> (autocarga): sentadillas, flexiones, planchas, saltos. Con buena técnica y progresión, fortalecen músculos y huesos sin riesgos. Y la fuerza debe ir acompañada de <b>flexibilidad</b>, para que los músculos sean fuertes y a la vez elásticos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la fuerza?</h3><p>La <b>fuerza</b> es la capacidad de los músculos para <mark>vencer, soportar o frenar una resistencia</mark>: el propio peso, un objeto, un compañero o la gravedad. La producen los músculos al contraerse, gracias a las órdenes del sistema nervioso.</p><p>Es importante para la salud porque:</p><ul><li>Protege las <b>articulaciones</b> y la <b>espalda</b>: los músculos actúan como un corsé natural.</li><li>Fortalece los <b>huesos</b>: en la adolescencia se forma la mayor parte de la masa ósea de toda la vida.</li><li>Mejora la <b>postura</b> y previene lesiones en otros deportes.</li><li>Facilita las tareas diarias: llevar la mochila, subir escaleras, cargar la compra.</li></ul>`,
    },
    {
      html: `<h3>Tipos de fuerza</h3>${tabla(["Tipo", "Qué es", "Ejemplo"], [["<b>Fuerza máxima</b>", "la mayor fuerza posible en una contracción", "levantar el máximo peso una vez"], ["<b>Fuerza explosiva</b> (fuerza-velocidad)", "mucha fuerza en muy poco tiempo", "saltar, lanzar, salir de tacos"], ["<b>Fuerza resistencia</b>", "repetir un esfuerzo muchas veces sin fatigarse", "remar, escalar, nadar"]])}<p>Según cómo trabaja el músculo, la contracción puede ser <b>dinámica</b> (hay movimiento: una sentadilla) o <b>isométrica</b> o estática (sin movimiento: aguantar una plancha). En la ESO se trabajan sobre todo la <mark>fuerza resistencia</mark> y la <mark>fuerza explosiva</mark> con cargas ligeras.</p>`,
    },
    {
      html: `<h3>Entrenar la fuerza con autocarga</h3><p>La <b>autocarga</b> usa el propio peso del cuerpo. También se usan cargas ligeras: balones medicinales, gomas elásticas o un compañero (ejercicios por parejas). Ejercicios básicos:</p><ul><li><b>Tren inferior</b>: sentadillas, zancadas, saltos, subir a un banco.</li><li><b>Tren superior</b>: flexiones de brazos (apoyando las rodillas para empezar), fondos en banco, lanzamientos.</li><li><b>Zona media (core)</b>: plancha frontal y lateral, puente de glúteo, abdominales sin tirar del cuello.</li></ul><p>Se organiza en <b>series</b> y <b>repeticiones</b>: por ejemplo, 3 series de 12 repeticiones con 1 minuto de descanso entre series.</p>`,
      svg: svg("Ejercicios de autocarga: sentadilla con espalda recta y plancha frontal con el cuerpo alineado", `${palo(76, 46, ["M73 53 L 48 94", "M48 94 L 84 96 L 76 132", "M68 62 L 104 66"])}<path d="M30 134 H 100" stroke="var(--muted)" stroke-width="2"/>
        ${palo(146, 100, ["M152 104 L 232 118", "M232 118 L 240 132", "M156 106 L 156 132"], "var(--leaf)")}<path d="M130 134 H 250" stroke="var(--muted)" stroke-width="2"/><path d="M150 92 L 236 108" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="5 4"/>
        ${t(64, 160, "sentadilla", { c: "var(--pen)", s: 11 })}${t(192, 160, "plancha", { c: "var(--leaf)", s: 11 })}${t(192, 82, "cuerpo alineado", { c: "var(--red)", s: 10 })}`),
      video: { id: "RTooq4ZWJiw", titulo: "12 ejercicios de fuerza por parejas para Educación Física", canal: "EJERCICIO FÍSICO Y SALUD", vistas: 191231, megusta: 0 },
    },
    {
      html: `<h3>Técnica y seguridad en la fuerza</h3><ul><li><b>Calentar</b> siempre antes.</li><li><b>Espalda recta</b> y abdomen activado; en las sentadillas, las rodillas siguen la dirección de los pies y no se meten hacia dentro.</li><li><b>Respirar</b>: soltar el aire en el esfuerzo y cogerlo al volver. No bloquear la respiración.</li><li>Movimientos <b>controlados</b>, sin tirones ni rebotes.</li><li>Primero la <b>técnica</b>, después la cantidad.</li><li><b>Equilibrar</b>: trabajar músculos opuestos (abdomen y espalda, cuádriceps e isquiotibiales).</li><li>Descansar al menos <b>48 horas</b> antes de volver a trabajar intensamente el mismo grupo muscular.</li></ul><p>Las cargas máximas no son adecuadas en la adolescencia; con autocarga bien hecha no hay riesgo para el crecimiento.</p>`,
    },
    {
      html: `<h3>¿Qué es la flexibilidad?</h3><p>La <b>flexibilidad</b> es la capacidad de <mark>realizar movimientos con la máxima amplitud</mark> en una articulación. Depende de dos componentes:</p><ul><li><b>Movilidad articular</b>: lo que permite la forma de la articulación (huesos, ligamentos).</li><li><b>Elasticidad muscular</b>: la capacidad del músculo de estirarse y volver a su longitud.</li></ul><p>A diferencia de las demás capacidades, la flexibilidad <b>disminuye desde la infancia</b> si no se trabaja: por eso es tan importante mantenerla. Las chicas suelen ser algo más flexibles que los chicos, y todos somos más flexibles por la tarde que por la mañana, y con los músculos calientes.</p>`,
    },
    {
      html: `<h3>Métodos de estiramiento</h3>${tabla(["Método", "Cómo se hace", "Cuándo"], [["<b>Dinámico</b>", "balanceos y movimientos amplios y controlados", "en el calentamiento"], ["<b>Estático pasivo</b>", "llevar el músculo a una posición de estiramiento y mantener 15-30 s", "vuelta a la calma, sesiones de flexibilidad"], ["<b>Estático activo</b>", "mantener la posición con la fuerza de los músculos opuestos", "yoga, gimnasia"], ["<b>Con compañero</b>", "otra persona ayuda a aumentar la amplitud, con mucho cuidado", "siempre con comunicación y sin dolor"]])}<p>Nunca hay que dar <b>rebotes</b>: activan un reflejo que contrae el músculo y puede provocar roturas.</p>`,
      video: { id: "Lx4YFmORsWc", titulo: "Ejercicios de estiramiento para antes y después del ejercicio", canal: "gymvirtual", vistas: 17940805, megusta: 0 },
    },
    {
      html: `<h3>Normas para estirar bien</h3><ul><li>Estira con los músculos <b>calientes</b>, nunca en frío.</li><li>Busca una sensación de <b>tensión suave</b>, nunca dolor.</li><li>Mantén la posición de <b>15 a 30 segundos</b> respirando con calma; al soltar el aire, el músculo se relaja y puedes avanzar un poco.</li><li>Estira los <b>dos lados</b> por igual.</li><li>Cuida la <b>espalda</b>: al estirar las piernas, inclínate desde la cadera con la espalda recta.</li><li>Sé <b>constante</b>: varias veces por semana es más eficaz que una sesión larga.</li></ul><p>Los grupos más acortados en adolescentes que pasan muchas horas sentados son los <b>isquiotibiales</b> (parte posterior del muslo), los <b>flexores de la cadera</b> y el <b>pectoral</b>.</p>`,
    },
    {
      html: `<h3>Fuerza y flexibilidad, un equipo</h3><p>Fuerza y flexibilidad no se oponen: se complementan. Un músculo fuerte pero acortado limita el movimiento y tira de las articulaciones; un músculo muy flexible pero débil no protege bien la articulación.</p><p>Un buen ejemplo es la <b>espalda</b>: el dolor de espalda en jóvenes suele deberse a un abdomen y unos músculos de la espalda débiles junto con isquiotibiales acortados. Un programa sencillo de fortalecimiento del core y estiramientos de piernas lo previene.</p><p>Disciplinas como el <b>yoga</b>, el <b>pilates</b>, la escalada o la gimnasia trabajan ambas capacidades a la vez.</p>`,
    },
    {
      html: `<h3>Valorar fuerza y flexibilidad</h3>${tabla(["Prueba", "Qué mide"], [["Salto horizontal a pies juntos", "fuerza explosiva de piernas"], ["Lanzamiento de balón medicinal (2-3 kg)", "fuerza explosiva de brazos y tronco"], ["Abdominales en 30 s", "fuerza resistencia del abdomen"], ["Plancha mantenida", "fuerza isométrica del core"], ["Flexión de tronco sentado (sit and reach)", "flexibilidad de isquiotibiales y espalda"], ["Rascarse la espalda (back scratch)", "flexibilidad de hombros"]])}<p>Anota tus resultados al inicio del curso y repítelos tras un programa de 6-8 semanas: comprobarás tu progreso.</p>`,
    },
  ],
  figura: {
    titulo: "Fuerza y flexibilidad",
    svg: filas("Fuerza: máxima, explosiva y resistencia; autocarga con series y repeticiones; técnica segura; flexibilidad: movilidad y elasticidad; estiramientos 15 a 30 segundos sin rebotes", [["Fuerza", "máxima · explosiva · resistencia", "var(--red)"], ["Autocarga", "sentadilla · flexión · plancha · series × reps", "var(--pen)"], ["Seguridad", "espalda recta · respirar · técnica antes que cantidad", "var(--ink)"], ["Flexibilidad", "movilidad articular + elasticidad muscular", "var(--leaf)"], ["Estirar", "en caliente · 15-30 s · sin dolor ni rebotes", "var(--inf)"]], 200),
  },
  video: { id: "xVXqLEDudDg", titulo: "La fuerza", canal: "Educación Física y más", vistas: 111938, megusta: 0, busqueda: "fuerza educación física" },
  quiz: mezcla([
    { q: "Trabajar con el propio peso del cuerpo se llama…", o: ["autocarga", "fuerza máxima", "estiramiento"], a: 0, e: "Sentadillas, flexiones." },
    { q: "Saltar o lanzar requiere sobre todo fuerza…", o: ["explosiva", "máxima", "isométrica"], a: 0, e: "Mucha fuerza en poco tiempo." },
    { q: "Aguantar una plancha sin moverse es una contracción…", o: ["isométrica", "dinámica", "explosiva"], a: 0, e: "Estática." },
    { q: "En el esfuerzo de un ejercicio de fuerza conviene…", o: ["soltar el aire", "bloquear la respiración", "coger aire"], a: 0, e: "Exhalar al empujar." },
    { q: "La flexibilidad depende de la movilidad articular y de la…", o: ["elasticidad muscular", "velocidad", "estatura"], a: 0, e: "Dos componentes." },
    { q: "Con la edad, si no se trabaja, la flexibilidad…", o: ["disminuye", "aumenta", "no cambia"], a: 0, e: "Desde la infancia." },
    { q: "Un estiramiento estático se mantiene…", o: ["15-30 s", "2 s", "3 min con rebotes"], a: 0, e: "Respirando." },
    { q: "Los rebotes al estirar…", o: ["deben evitarse", "mejoran el estiramiento", "son obligatorios"], a: 0, e: "Reflejo de contracción." },
    { q: "La prueba sit and reach mide la flexibilidad de…", o: ["isquiotibiales y espalda", "hombros", "tobillos"], a: 0, e: "Flexión de tronco sentado." },
    { q: "Entre dos sesiones intensas del mismo grupo muscular se recomienda descansar…", o: ["48 horas", "5 minutos", "una semana obligatoria"], a: 0, e: "Recuperación." },
  ]),
  examen: mezcla([
    { q: "3 series de 12 repeticiones suponen…", o: ["36 repeticiones", "15 repeticiones", "12 repeticiones"], a: 0, e: "3 · 12." },
    { q: "Un adolescente que pasa muchas horas sentado suele tener acortados los…", o: ["isquiotibiales", "gemelos únicamente", "músculos de la mano"], a: 0, e: "Parte posterior del muslo." },
    { q: "Escalar o remar mucho tiempo exige fuerza…", o: ["resistencia", "máxima", "explosiva"], a: 0, e: "Repetir sin fatigarse." },
  ]),
  feynman: ["Los tres tipos de fuerza con un ejemplo", "Cómo se hace una sentadilla segura", "De qué depende la flexibilidad y por qué disminuye", "Normas para estirar bien"],
  mapa: mapa("FUERZA Y FLEX.", "var(--eso)", [
    ["Fuerza", "máx · explosiva · resist.", "var(--red)"],
    ["Autocarga", "series · repeticiones", "var(--pen)"],
    ["Flexibilidad", "movilidad · elasticidad", "var(--leaf)"],
    ["Estirar", "15-30 s · sin rebotes", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Fuerza", "Capacidad de vencer, soportar o frenar una resistencia."],
    ["Fuerza explosiva", "Mucha fuerza en muy poco tiempo."],
    ["Fuerza resistencia", "Repetir un esfuerzo muchas veces."],
    ["Autocarga", "Ejercicios con el propio peso corporal."],
    ["Isométrica", "Contracción sin movimiento, como la plancha."],
    ["Flexibilidad", "Amplitud de movimiento de una articulación."],
    ["Estiramiento estático", "Mantener 15-30 s una posición sin rebotes."],
    ["Core", "Musculatura de la zona media: abdomen, espalda, glúteos."],
  ],
  familias: ["Haced juntos un mini-circuito de 10 minutos: sentadillas, plancha y puente de glúteo.", "Estirad 5 minutos por la noche, con calma, viendo una serie.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Fuerza: tipos, contracciones, entrenamiento con autocarga y cargas ligeras, técnica segura; flexibilidad: componentes, factores, métodos de estiramiento; valoración (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Circuito de autocarga por estaciones con fichas de técnica.", "Programa de flexibilidad de 6 semanas con medición de sit and reach.", "Ejercicios de fuerza por parejas con roles de ayudante."],
  },
  fuentes: [RD, { t: "Ministerio de Sanidad: actividad física para la salud", url: "https://www.sanidad.gob.es/areas/promocionPrevencion/actividadFisica/home.htm" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Casos prácticos",
  ejemplos: [
    { enunciado: "Diseña una sesión de fuerza con autocarga de 20 minutos para el tren inferior y el core.",
      pasos: ["Calentamiento: 5 min.", "Circuito × 3 vueltas: 12 sentadillas, 10 zancadas por pierna, 30 s plancha, 12 puentes de glúteo.", "1 min de descanso entre vueltas.", "Vuelta a la calma con estiramientos."],
      resultado: "Sesión equilibrada y segura." },
    { enunciado: "Andrés hace sentadillas con la espalda curvada y las rodillas hacia dentro. Corrige su técnica.",
      pasos: ["Pies a la anchura de la cadera, puntas ligeramente hacia fuera.", "Bajar llevando la cadera atrás, como para sentarse.", "Espalda recta y pecho alto.", "Rodillas en la dirección de los pies."],
      resultado: "Técnica correcta que protege rodillas y espalda." },
    { enunciado: "Laura llega a −5 cm en el sit and reach. Propón un plan para mejorar.",
      pasos: ["Estirar isquiotibiales, gemelos y zona lumbar 4 días por semana.", "3 repeticiones de 30 s por músculo, tras calentar.", "Fortalecer el abdomen para proteger la espalda.", "Repetir la prueba a las 6 semanas."],
      resultado: "Mejora progresiva y medible." },
  ],
  errores: [
    "Curvar la espalda al hacer sentadillas o al levantar peso.",
    "Bloquear la respiración durante el esfuerzo.",
    "Priorizar el número de repeticiones sobre la técnica.",
    "Estirar en frío o con rebotes.",
    "Buscar el dolor al estirar.",
    "Trabajar solo el abdomen y olvidar la espalda.",
  ],
  ejercicios: [
    { q: "Define fuerza y nombra sus tres tipos.", sol: "Capacidad de vencer, soportar o frenar una resistencia. Máxima, explosiva y resistencia." },
    { q: "Indica el tipo de fuerza principal en: salto de longitud, remo, halterofilia.", sol: "Explosiva, resistencia, máxima." },
    { q: "Diferencia una contracción dinámica de una isométrica con un ejemplo.", sol: "Dinámica: con movimiento (flexión). Isométrica: sin movimiento (plancha)." },
    { q: "Escribe cuatro normas de seguridad en el trabajo de fuerza.", sol: "Calentar, espalda recta, respirar sin bloquear, técnica antes que cantidad (también descansar 48 h)." },
    { q: "Propón un ejercicio de autocarga para cada zona: piernas, brazos, core.", sol: "Sentadilla, flexión de brazos, plancha." },
    { q: "¿Qué dos componentes determinan la flexibilidad?", sol: "Movilidad articular y elasticidad muscular." },
    { q: "¿Por qué no se debe estirar con rebotes?", sol: "Porque provocan un reflejo de contracción del músculo y aumentan el riesgo de rotura." },
    { q: "¿Qué músculos suelen estar acortados en quienes pasan mucho tiempo sentados?", sol: "Isquiotibiales, flexores de la cadera y pectoral." },
    { q: "Explica por qué fuerza y flexibilidad se complementan con el ejemplo de la espalda.", sol: "Un core fuerte protege la columna y unos isquiotibiales flexibles evitan tirones en la zona lumbar; juntos previenen el dolor de espalda." },
    { q: "Diseña un programa de 6 semanas de fuerza y flexibilidad con dos pruebas de valoración.", sol: "Respuesta abierta; debe incluir progresión, frecuencia semanal, ejercicios seguros y pruebas al inicio y al final." },
  ],
};
