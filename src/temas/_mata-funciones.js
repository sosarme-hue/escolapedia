// Ampliación de «Funciones» (Matemáticas A, 4º ESO): nivel de libro de texto, aplicado.
const { F } = require("./_util");
const { ampliar, tabla } = require("./_hum");

const px = (t) => 35 + t * 60, py = (d) => 145 - d * 27.5;
const paseo = `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica de una excursión: se aleja 4 km en una hora, descansa media hora y vuelve a casa a las 3 horas">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${[1, 2, 3].map((t) => `<path d="M${px(t)} 30 V 145" stroke="var(--line)" stroke-width="1"/>`).join("")}
  ${[1, 2, 3, 4].map((d) => `<path d="M35 ${py(d)} H 230" stroke="var(--line)" stroke-width="1"/>`).join("")}
  <path d="M35 145 H 235 M35 145 V 24" stroke="var(--muted)" stroke-width="2"/>
  <path d="M${px(0)} ${py(0)} L ${px(1)} ${py(4)} L ${px(1.5)} ${py(4)} L ${px(3)} ${py(0)}" fill="none" stroke="var(--red)" stroke-width="3.5" stroke-linejoin="round"/>
  <g ${F} font-size="10" font-weight="700" fill="var(--muted)">
    ${[1, 2, 3].map((t) => `<text x="${px(t)}" y="159" text-anchor="middle">${t} h</text>`).join("")}
    <text x="30" y="${py(2) + 4}" text-anchor="end">2</text><text x="30" y="${py(4) + 4}" text-anchor="end">4</text>
  </g>
  <text x="${px(1.25)}" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)" ${F}>descanso</text>
  <text x="135" y="174" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>distancia a casa (km) según el tiempo</text>
</svg>`;

module.exports = (T) => ampliar(T, {
  minutos: 60,
  objetivos: ["Pasar de un enunciado a una tabla, una fórmula y una gráfica", "Calcular e interpretar la tasa de variación media"],
  bloques: [
    { tras: "<h3>Qué es una función", html: `<h3>Cuatro formas de dar una función</h3><p>Un taxi cobra <b>3 € de bajada de bandera y 1,20 € por kilómetro</b>. Esa misma relación se puede expresar de cuatro maneras:</p>${tabla(["Forma", "Cómo queda"], [["Enunciado", "3 € fijos más 1,20 € por cada km"], ["Fórmula", "y = 3 + 1,2x (x en km, y en €)"], ["Tabla", "0 km → 3 €; 5 km → 9 €; 10 km → 15 €"], ["Gráfica", "una recta que empieza en (0, 3) y sube"]])}<p>La <mark>fórmula</mark> permite calcular cualquier valor; la <mark>gráfica</mark>, ver de un vistazo cómo cambia.</p>` },
    { tras: "<h3>Qué es una función", html: `<h3>Dominio y recorrido</h3><p>El <b>dominio</b> son los valores de x que tienen sentido o para los que existe la función; el <b>recorrido</b> (o imagen), los valores que toma y. En una gráfica, el dominio se lee en el eje horizontal y el recorrido en el vertical. En los problemas reales el dominio suele estar <mark>limitado por el contexto</mark>: el tiempo no es negativo, una persona no mide 5 metros y no se pueden comprar 2,5 entradas.</p>` },
    { tras: "<h3>Crecimiento, máximos y mínimos", html: `<h3>Cortes con los ejes y signo</h3><p>El corte con el eje <b>Y</b> se obtiene haciendo <mark>x = 0</mark>: es el valor inicial (en el taxi, 3 €). Los cortes con el eje <b>X</b> se obtienen haciendo <mark>y = 0</mark>: son los puntos donde la función cambia de signo. Una función es <b>positiva</b> donde su gráfica está por encima del eje X y <b>negativa</b> donde está por debajo; por ejemplo, la temperatura de una noche de invierno puede pasar de positiva a negativa.</p>` },
    { tras: "<h3>Crecimiento, máximos y mínimos", html: `<h3>La tasa de variación media</h3><p>Mide <b>cuánto cambia y por cada unidad de x</b> en un intervalo [a, b]: <mark>TVM = (f(b) − f(a)) / (b − a)</mark>. Si es positiva, la función crece en ese tramo; si es negativa, decrece; y cuanto mayor es, más deprisa cambia. Si x es el tiempo e y la distancia, la TVM es la <b>velocidad media</b>. Ejemplo: un coche está en el km 20 a las 10 h y en el km 200 a las 12 h: TVM = (200 − 20) / (12 − 10) = 90 km/h.</p>` },
    { tras: "<h3>Continuidad", html: `<h3>Leer una gráfica real paso a paso</h3><p>Ante una gráfica, responde por orden: ¿qué representa cada eje y en qué unidades?, ¿cuál es el dominio?, ¿dónde crece y dónde decrece?, ¿hay máximos o mínimos?, ¿tramos constantes o saltos? Y por último, <mark>¿qué significa cada cosa en la situación real?</mark></p>${paseo}<p class="caption">Una excursionista se aleja 4 km de casa en 1 h (crece), descansa media hora (constante: no se mueve) y vuelve en 1,5 h (decrece). El máximo, 4 km, es el punto más lejano.</p>`, video: { id: "IA5gG9ed6SI", titulo: "Dominio, imagen, conjunto positivo y negativo, crecimiento y decrecimiento", canal: "JULIAN CLASES - Matemática Paso a Paso", vistas: 764717, megusta: 0 } },
  ],
  ejemplos: [
    { enunciado: "Un depósito tiene 500 L y pierde 25 L por hora. Escribe la fórmula, el dominio y cuándo se vacía.", pasos: ["Fórmula: y = 500 − 25x (x en horas, y en litros).", "Se vacía cuando y = 0: 500 − 25x = 0 → x = 20 h.", "Dominio: de 0 a 20 horas; recorrido: de 0 a 500 L."], resultado: "y = 500 − 25x, definida en [0, 20]; se vacía a las 20 horas." },
    { enunciado: "La temperatura de un día es 6 °C a las 8 h y 18 °C a las 14 h. Calcula la TVM.", pasos: ["TVM = (18 − 6) / (14 − 8).", "= 12 / 6 = 2."], resultado: "Sube de media 2 °C por hora entre las 8 y las 14 h." },
    { enunciado: "En la gráfica de la excursión, ¿en qué tramo va más deprisa?", pasos: ["Ida: 4 km en 1 h → 4 km/h.", "Vuelta: 4 km en 1,5 h → unos 2,7 km/h.", "Descanso: 0 km/h."], resultado: "Va más deprisa a la ida (TVM de 4 km/h)." },
  ],
  errores: [
    "Cambiar los ejes: la variable independiente (normalmente el tiempo) va en el eje horizontal.",
    "Dar el crecimiento con valores de y en vez de con intervalos de x.",
    "Confundir el máximo (el valor de y) con dónde se alcanza (el valor de x).",
    "Pensar que una gráfica de distancia es el dibujo del camino recorrido.",
    "Olvidar que el contexto limita el dominio: no hay tiempos ni cantidades negativas.",
  ],
  ejercicios: [
    { q: "Si f(x) = 3x − 2, calcula f(0), f(2) y f(−1).", sol: "f(0) = −2; f(2) = 4; f(−1) = −5." },
    { q: "Una función asigna a cada alumno su altura. ¿Es una función? ¿Y asignar a cada altura los alumnos que la tienen?", sol: "La primera sí (cada alumno tiene una altura). La segunda no: a una altura le pueden corresponder varios alumnos." },
    { q: "Una academia cobra 40 € de matrícula y 25 € al mes. Escribe la fórmula y haz una tabla para 0, 3 y 6 meses.", sol: "y = 40 + 25x; 0 → 40 €, 3 → 115 €, 6 → 190 €." },
    { q: "¿Cuál es el dominio de la función del ejercicio anterior en un curso de 9 meses?", sol: "Los meses de 0 a 9 (números enteros)." },
    { q: "Halla los cortes con los ejes de y = 2x − 8.", sol: "Eje Y: x = 0 → (0, −8). Eje X: y = 0 → x = 4 → (4, 0)." },
    { q: "Calcula la TVM de f(x) = x² en [1, 3].", sol: "(9 − 1) / (3 − 1) = 4." },
    { q: "Un ciclista está en el km 12 a los 30 min y en el km 30 a los 90 min. ¿Qué velocidad media lleva?", sol: "TVM = (30 − 12) / (1,5 − 0,5) = 18 km/h." },
    { q: "En la gráfica de la excursión, ¿en qué intervalos crece, decrece y es constante?", sol: "Crece en (0; 1), es constante en (1; 1,5) y decrece en (1,5; 3)." },
    { q: "Un parking cobra 2 € la primera hora o fracción y 1,50 € cada hora más. ¿Es continua? ¿Por qué?", sol: "No: la gráfica da saltos al empezar cada hora (función a trozos escalonada)." },
    { q: "La temperatura de una ciudad es −2 °C a las 6 h, 0 °C a las 8 h y 9 °C a las 15 h. ¿Cuándo es negativa?", sol: "Antes de las 8 h (si sube de forma continua), entre las 6 y las 8 h." },
  ],
  quiz: [
    { q: "En el taxi y = 3 + 1,2x, un viaje de 10 km cuesta…", o: ["15 €", "12 €", "13,2 €"], a: 0, e: "3 + 12 = 15 €." },
    { q: "El corte con el eje Y se calcula haciendo…", o: ["x = 0", "y = 0", "x = y"], a: 0, e: "Es el valor inicial." },
    { q: "Si la TVM en un intervalo es negativa, la función…", o: ["decrece", "crece", "es constante"], a: 0, e: "y baja al aumentar x." },
    { q: "En una gráfica distancia-tiempo, un tramo horizontal significa…", o: ["que está parado", "que va muy rápido", "que vuelve"], a: 0, e: "La distancia no cambia." },
    { q: "El dominio de «precio según el número de entradas» son…", o: ["los números naturales", "todos los números reales", "los negativos"], a: 0, e: "No hay media entrada ni entradas negativas." },
  ],
  tarjetas: [
    ["Corte con el eje X", "Se calcula haciendo y = 0."],
    ["TVM y velocidad", "En distancia-tiempo, la TVM es la velocidad media."],
  ],
});
