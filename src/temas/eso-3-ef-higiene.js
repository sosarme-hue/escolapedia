// Educación Física 3º ESO: higiene postural, alimentación y descanso. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Educación Física";
const palo = (segs, c) => segs.map((s) => `<path d="${s}" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`).join("");

module.exports = {
  materia: M,
  curso: C,
  titulo: "Higiene postural, alimentación y descanso",
  minutos: 50,
  objetivos: ["Aplicar normas de higiene postural al sentarse, levantar pesos y llevar la mochila", "Relacionar la alimentación equilibrada y la hidratación con la actividad física", "Valorar el descanso y el sueño como parte de la salud", "Adoptar hábitos de higiene personal y rechazar conductas de riesgo"],
  claves: ["higiene postural", "columna vertebral", "dieta equilibrada", "hidratación", "sueño", "hábitos saludables"],
  pregunta: {
    texto: "¿Por qué cada vez más adolescentes tienen dolor de espalda, si a su edad la columna debería estar perfecta?",
    respuesta: "Por los <mark>hábitos</mark>: muchas horas sentados en mala postura, la cabeza inclinada sobre el móvil, mochilas pesadas mal llevadas y poca actividad física. La <b>higiene postural</b>, una buena alimentación y dormir lo suficiente previenen la mayoría de estos problemas.",
  },
  bloques: [
    {
      html: `<h3>La columna vertebral</h3><p>La <b>columna vertebral</b> es el eje del cuerpo: sostiene el tronco, protege la médula espinal y permite el movimiento. Está formada por <b>33 vértebras</b> separadas por <b>discos intervertebrales</b>, que funcionan como amortiguadores.</p><p>Vista de lado no es recta: tiene <mark>cuatro curvas naturales</mark> (cervical, dorsal, lumbar y sacra) que reparten el peso como un muelle. Los problemas aparecen cuando estas curvas se exageran o se pierden:</p><ul><li><b>Hipercifosis</b>: espalda «cargada», curva dorsal exagerada.</li><li><b>Hiperlordosis</b>: curva lumbar muy marcada.</li><li><b>Escoliosis</b>: desviación lateral de la columna.</li></ul>`,
    },
    {
      html: `<h3>La higiene postural</h3><p>La <b>higiene postural</b> es el conjunto de normas para <mark>mantener posturas correctas</mark> en reposo y en movimiento, de modo que la columna sufra la menor carga posible.</p><p><b>Sentado</b> (en clase o estudiando):</p><ul><li>Espalda apoyada en el respaldo y glúteos al fondo de la silla.</li><li>Pies apoyados en el suelo, rodillas a 90°.</li><li>Pantalla a la altura de los ojos y a un brazo de distancia.</li><li>Antebrazos apoyados en la mesa.</li><li>Levantarse y moverse cada <b>45-60 minutos</b>.</li></ul><p><b>Con el móvil</b>: subirlo a la altura de los ojos. Inclinar la cabeza 60° multiplica por cinco el peso que soporta el cuello.</p>`,
      svg: svg("Postura sentada: incorrecta con la espalda curvada y la cabeza adelantada; correcta con la espalda apoyada y los pies en el suelo", `<path d="M20 150 H 240" stroke="var(--muted)" stroke-width="2"/>
        <path d="M30 150 V 110 H 70 M30 110 V 70" stroke="var(--muted)" stroke-width="3" fill="none"/>${palo(["M44 108 Q 34 84 56 62", "M44 108 H 80 V 148", "M54 74 L 82 92"], "var(--red)")}<circle cx="66" cy="54" r="8" fill="var(--red)"/>
        <path d="M150 150 V 110 H 190 M150 110 V 66" stroke="var(--muted)" stroke-width="3" fill="none"/>${palo(["M158 108 V 66", "M158 108 H 196 V 148", "M158 78 L 186 94"], "var(--leaf)")}<circle cx="158" cy="54" r="8" fill="var(--leaf)"/>
        ${t(60, 172, "incorrecta", { c: "var(--red)", s: 11 })}${t(176, 172, "correcta", { c: "var(--leaf)", s: 11 })}${t(222, 72, "espalda", { c: "var(--leaf)", s: 10 })}${t(222, 86, "apoyada", { c: "var(--leaf)", s: 10 })}`),
      video: { id: "e9_9lNfA7mo", titulo: "Cómo sentarse correctamente", canal: "Marcos Sacristán | Fisioterapia a tu alcance", vistas: 433376, megusta: 0 },
    },
    {
      html: `<h3>Levantar pesos y llevar la mochila</h3><p><b>Para levantar un objeto del suelo</b>:</p><ol><li>Acércate al objeto y separa los pies a la anchura de la cadera.</li><li><mark>Flexiona las rodillas</mark>, no la espalda.</li><li>Agarra el objeto pegado al cuerpo.</li><li>Levántate estirando las piernas, con la espalda recta y sin girar el tronco.</li></ol><p><b>La mochila</b>:</p><ul><li>Su peso no debe superar el <b>10 %</b> del peso corporal (5 kg si pesas 50 kg).</li><li>Llévala con <b>las dos asas</b>, ajustada y a la altura de la zona lumbar.</li><li>Coloca lo más pesado <b>pegado a la espalda</b>.</li><li>Si es posible, usa la taquilla o una mochila con ruedas (empujándola, no tirando de lado).</li></ul>`,
    },
    {
      html: `<h3>Ejercicio para una espalda sana</h3><p>La mejor protección de la columna es una <b>musculatura fuerte y flexible</b>:</p><ul><li><b>Fortalecer el core</b>: abdominales, lumbares y glúteos (planchas, puente de glúteo, «superman»). Actúan como un corsé natural.</li><li><b>Estirar</b> isquiotibiales, flexores de cadera y pectoral, que se acortan al estar sentado.</li><li>Practicar actividades completas como la <b>natación</b>, el yoga o el pilates.</li></ul><p>Si aparece un dolor de espalda que no mejora en unos días, que despierta por la noche o que baja por la pierna, hay que consultar al médico o al fisioterapeuta.</p>`,
    },
    {
      html: `<h3>Alimentación equilibrada</h3><p>Una <b>dieta equilibrada</b> aporta la energía y los nutrientes necesarios en la cantidad adecuada. Un modelo práctico es el <b>plato saludable</b>:</p>${tabla(["Parte del plato", "Alimentos", "Aporta"], [["<b>La mitad</b>", "verduras, hortalizas y fruta", "vitaminas, minerales y fibra"], ["<b>Un cuarto</b>", "cereales integrales: pan, arroz, pasta, patata", "hidratos de carbono: energía"], ["<b>Un cuarto</b>", "legumbres, pescado, huevos, carne blanca, frutos secos", "proteínas: construyen y reparan músculos"], ["<b>Con moderación</b>", "aceite de oliva", "grasas saludables"], ["<b>Para beber</b>", "agua", "hidratación"]])}<p>La <b>dieta mediterránea</b> sigue este modelo y es una de las más saludables del mundo. Conviene reducir la bollería, los refrescos azucarados y los ultraprocesados.</p>`,
      svg: svg("Plato saludable: la mitad verduras y fruta, un cuarto cereales integrales, un cuarto proteínas, con agua para beber", `<circle cx="110" cy="92" r="70" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M110 22 A 70 70 0 0 0 110 162 Z" fill="var(--leaf)" fill-opacity=".45"/><path d="M110 22 A 70 70 0 0 1 180 92 H 110 Z" fill="var(--sun)" fill-opacity=".5"/><path d="M180 92 A 70 70 0 0 1 110 162 V 92 Z" fill="var(--red)" fill-opacity=".35"/>
        ${t(76, 88, "verduras", { s: 11 })}${t(76, 102, "y fruta", { s: 11 })}${t(144, 66, "cereales", { s: 10 })}${t(144, 124, "proteínas", { s: 10 })}
        <rect x="200" y="60" width="34" height="64" rx="6" fill="var(--water)" fill-opacity=".45" stroke="var(--pen)" stroke-width="2"/>${t(217, 142, "agua", { c: "var(--pen)", s: 11 })}`),
    },
    {
      html: `<h3>Comer e hidratarse para hacer deporte</h3><ul><li><b>Desayuno</b> completo: lácteo, cereal (pan integral, avena) y fruta. Ir a clase de Educación Física sin desayunar puede provocar mareos.</li><li><b>Antes del ejercicio</b>: comer algo ligero y rico en hidratos 1-2 horas antes (fruta, un bocadillo pequeño). Evitar comidas copiosas y grasas.</li><li><b>Después</b>: reponer con fruta, lácteos o un bocadillo con proteína.</li><li><b>Agua</b>: beber antes, durante (pequeños sorbos cada 15-20 minutos si hace calor) y después. La sed ya es una señal de deshidratación.</li></ul><p>Las <b>bebidas energéticas</b> no son adecuadas para adolescentes: tienen mucha cafeína y azúcar. Para la actividad escolar, el agua es suficiente.</p>`,
      video: { id: "gpFqVxLDEJ0", titulo: "¿Cuánta proteína necesito para hacer deporte?", canal: "DW Español", vistas: 1659609, megusta: 0 },
    },
    {
      html: `<h3>El descanso y el sueño</h3><p>El cuerpo mejora <b>mientras descansa</b>: durante el sueño se reparan los músculos, se libera la hormona del crecimiento y el cerebro consolida lo aprendido.</p><ul><li>Los adolescentes necesitan entre <mark>8 y 10 horas</mark> de sueño cada noche.</li><li>Mantener <b>horarios regulares</b>, también el fin de semana.</li><li>Apagar las <b>pantallas</b> al menos una hora antes de dormir: su luz azul retrasa la hormona del sueño (melatonina).</li><li>Evitar cenas copiosas y bebidas con cafeína por la tarde.</li><li>Hacer ejercicio durante el día ayuda a dormir mejor, pero no justo antes de acostarse.</li></ul><p>Dormir poco reduce la atención, el rendimiento académico y deportivo, y aumenta el riesgo de lesiones.</p>`,
    },
    {
      html: `<h3>Higiene personal y deporte</h3><ul><li><b>Ducharse</b> después de la actividad física y cambiarse de ropa.</li><li><b>Ropa</b> transpirable y cómoda, adecuada al clima; calcetines de algodón o técnicos.</li><li><b>Calzado</b> deportivo adecuado a la actividad, que sujete bien el pie.</li><li>Secar bien los pies y usar chanclas en duchas comunes para evitar hongos.</li><li>Recogerse el pelo largo y quitarse anillos, pendientes y relojes antes de jugar.</li><li>Protegerse del <b>sol</b>: gorra, crema y evitar las horas centrales en verano.</li></ul><p>Estas normas evitan infecciones, rozaduras y lesiones, y ayudan a sentirse bien.</p>`,
    },
    {
      html: `<h3>Hábitos saludables y conductas de riesgo</h3><p>La salud es el resultado de muchos hábitos que se suman: actividad física, alimentación, sueño, higiene, relaciones sanas y gestión del estrés.</p><p>Hay conductas que la perjudican gravemente: el <b>tabaco</b> y el vapeo (dañan pulmones y corazón y reducen la resistencia), el <b>alcohol</b> (especialmente dañino para un cerebro en desarrollo), las <b>drogas</b> y el uso excesivo de <b>pantallas</b>. En el deporte, el <b>dopaje</b> es trampa y pone en peligro la salud.</p><p>Tener un estilo de vida activo y sano no es una obligación de un día: se construye con pequeñas decisiones diarias.</p>`,
    },
  ],
  figura: {
    titulo: "Hábitos para una vida sana",
    svg: filas("Postura: espalda apoyada y moverse cada hora; mochila: 10 por ciento del peso y dos asas; plato saludable; agua antes, durante y después; dormir 8 a 10 horas", [["Postura", "espalda apoyada · pies en el suelo · moverse cada hora", "var(--pen)"], ["Cargas", "rodillas flexionadas · mochila ≤ 10 % · dos asas", "var(--inf)"], ["Plato", "½ verdura y fruta · ¼ cereales · ¼ proteína", "var(--leaf)"], ["Hidratación", "agua antes, durante y después", "var(--red)"], ["Descanso", "8-10 h · horarios fijos · sin pantallas", "var(--ink)"]], 190),
  },
  video: { id: "G-_xykMIim4", titulo: "Los beneficios de una buena postura", canal: "Sé Curioso — TED-Ed", vistas: 429991, megusta: 0, busqueda: "postura correcta" },
  quiz: mezcla([
    { q: "La columna vertebral tiene vista de lado…", o: ["cuatro curvas naturales", "ninguna curva", "una sola curva"], a: 0, e: "Cervical, dorsal, lumbar y sacra." },
    { q: "La desviación lateral de la columna se llama…", o: ["escoliosis", "hipercifosis", "hiperlordosis"], a: 0, e: "Vista de frente." },
    { q: "Para levantar un peso del suelo hay que flexionar…", o: ["las rodillas", "la espalda", "el cuello"], a: 0, e: "Espalda recta." },
    { q: "La mochila no debería superar el…", o: ["10 % del peso corporal", "50 % del peso", "1 % del peso"], a: 0, e: "5 kg si pesas 50." },
    { q: "Al estudiar sentado conviene levantarse cada…", o: ["45-60 minutos", "5 horas", "nunca"], a: 0, e: "Moverse." },
    { q: "En el plato saludable, la mitad debe ser…", o: ["verduras y fruta", "carne", "pasta"], a: 0, e: "Vitaminas y fibra." },
    { q: "La mejor bebida para la actividad física escolar es…", o: ["el agua", "una bebida energética", "un refresco"], a: 0, e: "Suficiente." },
    { q: "Un adolescente necesita dormir…", o: ["8-10 horas", "5 horas", "12-14 horas"], a: 0, e: "Cada noche." },
    { q: "Usar pantallas antes de dormir…", o: ["retrasa el sueño", "ayuda a dormir", "no influye"], a: 0, e: "Luz azul y melatonina." },
    { q: "Tras la clase de Educación Física conviene…", o: ["ducharse y cambiarse", "seguir con la misma ropa", "beber un refresco"], a: 0, e: "Higiene." },
  ]),
  examen: mezcla([
    { q: "Si pesas 60 kg, tu mochila no debería pesar más de…", o: ["6 kg", "12 kg", "3 kg"], a: 0, e: "10 %." },
    { q: "Las proteínas sirven sobre todo para…", o: ["construir y reparar músculos", "dar energía rápida", "hidratar"], a: 0, e: "Legumbres, pescado, huevos." },
    { q: "Inclinar la cabeza sobre el móvil…", o: ["multiplica la carga del cuello", "relaja la espalda", "no tiene efecto"], a: 0, e: "Hasta cinco veces a 60°." },
  ]),
  feynman: ["Las curvas de la columna y sus alteraciones", "Cómo sentarse, levantar pesos y llevar la mochila", "Cómo es un plato saludable", "Por qué el sueño mejora el rendimiento"],
  mapa: mapa("HÁBITOS", "var(--eso)", [
    ["Postura", "columna · mochila", "var(--pen)"],
    ["Alimentación", "plato · desayuno", "var(--leaf)"],
    ["Agua", "antes · durante · después", "var(--red)"],
    ["Descanso", "8-10 h", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Higiene postural", "Normas para que la columna soporte la menor carga posible."],
    ["Escoliosis", "Desviación lateral de la columna."],
    ["Levantar pesos", "Rodillas flexionadas, espalda recta, objeto pegado al cuerpo."],
    ["Mochila", "Máximo 10 % del peso, con las dos asas."],
    ["Plato saludable", "½ verdura y fruta, ¼ cereal integral, ¼ proteína."],
    ["Hidratación", "Agua antes, durante y después del ejercicio."],
    ["Sueño adolescente", "Entre 8 y 10 horas cada noche."],
    ["Core", "Músculos de la zona media que protegen la columna."],
  ],
  familias: ["Pesad la mochila de vuestro hijo o hija y comprobad que no supera el 10 % de su peso.", "Preparad juntos una cena siguiendo el plato saludable.", "Pactad una hora de apagar pantallas antes de dormir."],
  profesores: {
    saberes: "Higiene postural: columna vertebral, posturas sentado, manejo de cargas y mochila, ejercicio preventivo; alimentación equilibrada e hidratación ligadas a la actividad física; descanso y sueño; higiene personal; conductas de riesgo (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Pesaje de mochilas y cálculo del porcentaje del peso corporal.", "Diario de alimentación, hidratación y sueño durante una semana con reflexión.", "Circuito de ejercicios de espalda sana para hacer en casa."],
  },
  fuentes: [RD, { t: "AESAN: recomendaciones dietéticas saludables y sostenibles", url: "https://www.aesan.gob.es/" }, { t: "Ministerio de Sanidad: estilos de vida saludable", url: "https://estilosdevidasaludable.sanidad.gob.es/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Casos prácticos",
  ejemplos: [
    { enunciado: "Sara pesa 48 kg y su mochila 7 kg. ¿Es adecuada? ¿Qué puede hacer?",
      pasos: ["Máximo recomendado: 48 · 0,10 = 4,8 kg.", "7 kg supera el límite en 2,2 kg.", "Soluciones: llevar solo lo del día, usar la taquilla, colocar lo pesado pegado a la espalda y usar las dos asas."],
      resultado: "La mochila es demasiado pesada; debe aligerarla." },
    { enunciado: "Planifica la alimentación de un día con clase de Educación Física a las 12:00.",
      pasos: ["Desayuno 7:30: leche, tostadas integrales con aceite y una fruta.", "Recreo 10:30: bocadillo pequeño y agua.", "Durante la clase: sorbos de agua.", "Comida 14:30: ensalada, lentejas con arroz y fruta."],
      resultado: "Energía suficiente sin comidas pesadas antes del ejercicio." },
    { enunciado: "Pablo se acuesta a la 1:00 con el móvil y se levanta a las 7:15. Analiza su descanso.",
      pasos: ["Duerme 6 h 15 min, por debajo de las 8-10 recomendadas.", "La pantalla retrasa el sueño.", "Propuesta: apagar el móvil a las 22:00 y acostarse a las 22:45 para dormir unas 8 h 30 min."],
      resultado: "Más descanso, mejor atención y rendimiento." },
  ],
  errores: [
    "Agacharse doblando la espalda en lugar de las rodillas.",
    "Llevar la mochila colgada de un solo hombro.",
    "Estudiar horas seguidas sin levantarse.",
    "Hacer ejercicio sin haber desayunado.",
    "Esperar a tener sed para beber agua.",
    "Usar el móvil en la cama antes de dormir.",
  ],
  ejercicios: [
    { q: "Nombra las cuatro curvas de la columna vertebral.", sol: "Cervical, dorsal, lumbar y sacra." },
    { q: "Explica la diferencia entre hipercifosis, hiperlordosis y escoliosis.", sol: "Hipercifosis: curva dorsal exagerada. Hiperlordosis: curva lumbar exagerada. Escoliosis: desviación lateral." },
    { q: "Escribe cinco normas para sentarse bien a estudiar.", sol: "Espalda apoyada, glúteos al fondo, pies en el suelo, pantalla a la altura de los ojos, levantarse cada 45-60 min." },
    { q: "Describe los pasos para levantar una caja del suelo.", sol: "Acercarse, separar los pies, flexionar las rodillas, agarrar la caja pegada al cuerpo y levantarse con la espalda recta sin girar." },
    { q: "Calcula el peso máximo de la mochila para una persona de 55 kg.", sol: "5,5 kg." },
    { q: "Dibuja un plato saludable y escribe un menú que lo cumpla.", sol: "Por ejemplo: ½ ensalada y verduras, ¼ arroz integral, ¼ pescado; agua y fruta." },
    { q: "¿Por qué las bebidas energéticas no son adecuadas para adolescentes?", sol: "Por su alto contenido en cafeína y azúcar, que alteran el sueño, el corazón y el peso." },
    { q: "Explica tres cosas que ocurren en el cuerpo mientras dormimos.", sol: "Se reparan los músculos, se libera la hormona del crecimiento y el cerebro consolida lo aprendido." },
    { q: "Nombra cinco normas de higiene personal relacionadas con el deporte.", sol: "Ducharse, cambiarse de ropa, calzado adecuado, secar bien los pies, protegerse del sol (también quitarse joyas)." },
    { q: "Registra durante una semana tus horas de sueño, agua y actividad física y propón dos mejoras.", sol: "Respuesta abierta; las mejoras deben ser concretas y realistas." },
  ],
};
