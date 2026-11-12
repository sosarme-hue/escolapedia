// Música 1º ESO: el sonido y el silencio. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, barras, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "El sonido y el silencio",
  minutos: 50,
  objetivos: ["Explicar cómo se produce y se propaga el sonido", "Describir cómo oímos y cómo cuidar el oído", "Distinguir sonido, ruido y silencio y valorar el silencio en la música", "Reconocer la contaminación acústica y escuchar el paisaje sonoro"],
  claves: ["vibración", "onda sonora", "medio elástico", "ruido", "silencio", "decibelio"],
  pregunta: {
    texto: "En las películas de naves espaciales se oyen explosiones enormes en el espacio. ¿Es eso posible?",
    respuesta: "No. El sonido es una <b>vibración</b> que necesita un <b>medio</b> (aire, agua, un sólido) para viajar. En el espacio hay <b>vacío</b>, así que <mark>una explosión allí sería completamente silenciosa</mark>. Los cineastas añaden el sonido porque la escena sin él nos parecería extraña.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el sonido?</h3><p>El <b>sonido</b> es una <b>vibración</b> que se transmite por un medio y que nuestro oído puede percibir. Para que haya sonido hacen falta tres cosas:</p><ol><li>Un <b>cuerpo que vibra</b> (cuerpo sonoro): una cuerda de guitarra, la piel de un tambor, nuestras cuerdas vocales.</li><li>Un <b>medio elástico</b> que transmita la vibración: el aire, el agua, la madera, el metal.</li><li>Un <b>receptor</b>: el oído (o un micrófono).</li></ol><p>Puedes comprobarlo: pon la mano en tu garganta mientras dices «aaaa» y notarás la vibración. O mira cómo se mueve la cuerda de una guitarra al pulsarla.</p>`,
      svg: svg("Un altavoz vibra y empuja el aire en ondas que llegan hasta una oreja", `<path d="M20 70 H 40 L 64 50 V 120 L 40 100 H 20 Z" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2.5"/>${[0, 1, 2, 3].map((i) => `<path d="M${80 + i * 30} ${60 - i * 6} Q ${92 + i * 30} 85 ${80 + i * 30} ${110 + i * 6}" fill="none" stroke="var(--pen)" stroke-width="2.5" opacity="${1 - i * 0.18}"/>`).join("")}<path d="M228 60 C 252 60 252 110 230 116 C 222 118 222 104 230 100 C 238 96 238 76 228 74" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)" stroke-width="2.5"/>${t(42, 142, "foco que vibra", { s: 10 })}${t(130, 142, "medio: aire", { s: 10, c: "var(--pen)" })}${t(230, 142, "oído", { s: 10, c: "var(--sun)" })}`),
    },
    {
      html: `<h3>Cómo viaja el sonido</h3><p>El cuerpo que vibra empuja las partículas del aire que tiene al lado, estas empujan a las siguientes, y así se forma una <b>onda sonora</b>, como las ondas que se forman al tirar una piedra a un estanque. Lo que viaja es la vibración, no el aire.</p>${tabla(["Medio", "Velocidad aproximada del sonido"], [["Aire", "340 m/s"], ["Agua", "1 500 m/s"], ["Acero", "5 000 m/s"], ["Vacío", "no se propaga"]])}<p>Por eso vemos el relámpago antes de oír el trueno: la luz es muchísimo más rápida. Si cuentas los segundos entre los dos y divides entre 3, sabrás a cuántos kilómetros está la tormenta.</p><p>Cuando la onda choca con una pared, rebota: es el <b>eco</b> (si oímos la repetición separada) o la <b>reverberación</b> (si se mezcla, como en una iglesia).</p>`,
    },
    {
      html: `<h3>Cómo oímos</h3><p>El <b>oído</b> tiene tres partes:</p><ul><li><b>Oído externo</b>: la oreja recoge el sonido y lo lleva por el conducto auditivo hasta el <b>tímpano</b>, una membrana que vibra.</li><li><b>Oído medio</b>: tres huesecillos diminutos (<b>martillo, yunque y estribo</b>) amplifican la vibración.</li><li><b>Oído interno</b>: la <b>cóclea</b> o caracol, llena de líquido y de células ciliadas, transforma la vibración en impulsos nerviosos que van al <b>cerebro</b>.</li></ul><p>Es el cerebro quien finalmente «oye» e interpreta: reconoce una voz, una canción o un peligro. Las células ciliadas no se regeneran: si se dañan por ruido fuerte, la pérdida de audición es <b>permanente</b>.</p>`,
      video: vb("sonB"),
    },
    {
      html: `<h3>Sonido musical y ruido</h3><ul><li>Un <b>sonido determinado</b> o musical tiene vibraciones <b>regulares</b>: podemos reconocer su altura y cantarlo. La nota de una flauta o de un piano.</li><li>Un <b>ruido</b> tiene vibraciones <b>irregulares</b>: no se distingue una altura clara. Un portazo, el tráfico, una tormenta.</li></ul><p>Pero la frontera no es tan clara: muchos instrumentos de percusión producen sonidos indeterminados (un plato, un bombo) y se usan en música. Y en el lenguaje cotidiano llamamos «ruido» a cualquier sonido <b>molesto o no deseado</b>, aunque sea música a todo volumen a las tres de la mañana.</p>`,
      svg: svg("Dos ondas: una regular y repetida (sonido musical) y otra irregular (ruido)", `<path d="M20 60 ${[...Array(12)].map((_, i) => `Q ${30 + i * 18} ${i % 2 ? 84 : 36} ${38 + i * 18} 60`).join(" ")}" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>${t(130, 22, "sonido musical: regular", { c: "var(--leaf)", s: 11 })}<path d="M20 130 L 34 112 L 44 146 L 58 118 L 66 140 L 80 104 L 92 150 L 104 124 L 116 132 L 126 108 L 140 146 L 154 120 L 164 136 L 176 106 L 190 144 L 204 116 L 218 140 L 236 126" fill="none" stroke="var(--red)" stroke-width="2.2"/>${t(130, 170, "ruido: irregular", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>El silencio</h3><p>El <b>silencio</b> es la <b>ausencia de sonido</b>. Aunque el silencio absoluto casi no existe en la vida real (siempre oímos algo: nuestra respiración, el latido del corazón), es una parte fundamental de la música.</p><ul><li>Separa las frases, como los signos de puntuación en un texto.</li><li>Crea <b>expectación</b> y tensión antes de un momento importante.</li><li>Permite «respirar» al oyente y al intérprete.</li></ul><p>En la partitura, los silencios se escriben con <b>signos</b> que indican cuánto duran, y se cuentan igual que las notas. El compositor <b>John Cage</b> llegó a crear en 1952 una obra en la que el intérprete no toca ninguna nota: la «música» son los sonidos del público y la sala. Quería demostrar que <mark>el silencio total no existe</mark>.</p>`,
    },
    {
      html: `<h3>La contaminación acústica</h3><p>La <b>intensidad</b> del sonido se mide en <b>decibelios (dB)</b>. A partir de unos <b>85 dB</b> mantenidos durante horas, el oído empieza a dañarse.</p>${tabla(["Sonido", "dB aproximados"], [["Respiración tranquila", "10"], ["Biblioteca", "30-40"], ["Conversación", "60"], ["Tráfico intenso", "80-85"], ["Auriculares al máximo", "100-110"], ["Concierto de rock / discoteca", "110"], ["Avión despegando cerca", "130 (umbral del dolor)"]])}<p>El exceso de ruido en ciudades, colegios y casas se llama <b>contaminación acústica</b>. Provoca estrés, dolor de cabeza, falta de concentración, problemas de sueño y pérdida de audición.</p>`,
      svg: svg("Diagrama de barras de decibelios: biblioteca 35, conversación 60, tráfico 85 y concierto 110; a partir de 85 hay riesgo", `${barras(24, 150, 216, 110, [["biblio.", 35, "var(--leaf)"], ["charla", 60, "var(--leaf)"], ["tráfico", 85, "var(--sun)"], ["concierto", 110, "var(--red)"]], 120)}<path d="M24 ${150 - (85 / 120) * 110} H 240" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="5 3"/>${t(28, 150 - (85 / 120) * 110 - 6, "85 dB: riesgo", { c: "var(--red)", s: 10, a: "start" })}${t(130, 20, "decibelios (dB)", { s: 11, c: "var(--muted)" })}`),
      video: vb("sonB2"),
    },
    {
      html: `<h3>Cuidar el oído</h3><p>Algunas normas sencillas protegen tu audición para toda la vida:</p><ul><li><b>Regla 60/60</b>: auriculares como máximo al <b>60 %</b> del volumen y no más de <b>60 minutos</b> seguidos.</li><li>Si alguien a tu lado oye la música de tus auriculares, está demasiado alta.</li><li>En conciertos, aléjate de los altavoces y usa <b>tapones</b> para músicos (reducen el volumen sin distorsionar).</li><li>Haz <b>descansos</b> de silencio después de exponerte a ruido fuerte.</li><li>Si notas pitidos o el oído «tapado» tras un concierto, es una señal de alarma.</li></ul><p>Y en el aula: hablar sin gritar y respetar los turnos también es cuidar el oído de todos.</p>`,
    },
    {
      html: `<h3>El paisaje sonoro</h3><p>El compositor canadiense <b>R. Murray Schafer</b> llamó <b>paisaje sonoro</b> al conjunto de sonidos de un lugar. Cada sitio tiene el suyo: el patio en el recreo, una playa, un mercado, un bosque de noche.</p><p>Actividad de escucha:</p><ol><li>Cierra los ojos durante <b>dos minutos</b> en silencio.</li><li>Anota todos los sonidos que oigas: cercanos y lejanos, naturales (pájaros, viento), humanos (voces, pasos) y mecánicos (motores, aparatos).</li><li>Clasifícalos: ¿cuáles te resultan agradables y cuáles molestos?</li></ol><p>Escuchar con atención es la base de toda la música: antes de tocar o cantar, hay que aprender a <b>oír</b>.</p>`,
    },
  ],
  figura: {
    titulo: "El sonido y el silencio en un vistazo",
    svg: filas("Resumen: el sonido es una vibración; necesita un medio; ondas sonoras a 340 metros por segundo en el aire; el oído; sonido musical regular y ruido irregular; el silencio; decibelios y cuidado del oído", [["Sonido", "vibración que se propaga", "var(--pen)"], ["Medio", "aire 340 m/s · no en el vacío", "var(--inf)"], ["Oído", "tímpano · huesecillos · cóclea", "var(--sun)"], ["Musical / ruido", "regular / irregular", "var(--leaf)"], ["Silencio", "también es música", "var(--ink)"], ["dB", "más de 85 dB: riesgo", "var(--red)"]], 200),
  },
  video: vg("sonV"),
  quiz: mezcla([
    { q: "El sonido es…", o: ["una vibración", "una luz", "un color"], a: 0, e: "Que se propaga." },
    { q: "¿Dónde NO se propaga el sonido?", o: ["en el vacío", "en el agua", "en el metal"], a: 0, e: "Necesita un medio." },
    { q: "En el aire, el sonido viaja a unos…", o: ["340 m/s", "3 m/s", "300 000 km/s"], a: 0, e: "Mucho más lento que la luz." },
    { q: "La membrana del oído que vibra es el…", o: ["tímpano", "estribo", "caracol"], a: 0, e: "Oído externo/medio." },
    { q: "La cóclea está en el oído…", o: ["interno", "externo", "medio"], a: 0, e: "Caracol." },
    { q: "Un sonido con vibraciones irregulares es un…", o: ["ruido", "sonido musical", "silencio"], a: 0, e: "Sin altura clara." },
    { q: "La intensidad se mide en…", o: ["decibelios", "hercios", "metros"], a: 0, e: "dB." },
    { q: "A partir de cuántos dB hay riesgo si la exposición es larga:", o: ["85", "30", "10"], a: 0, e: "Tráfico intenso." },
    { q: "La regla 60/60 sirve para…", o: ["usar bien los auriculares", "afinar", "contar compases"], a: 0, e: "60 % y 60 min." },
    { q: "El conjunto de sonidos de un lugar es el…", o: ["paisaje sonoro", "timbre", "eco"], a: 0, e: "Murray Schafer." },
  ]),
  examen: mezcla([
    { q: "Entre el relámpago y el trueno pasan 6 segundos. La tormenta está a unos…", o: ["2 km", "6 km", "18 km"], a: 0, e: "6 : 3." },
    { q: "La repetición separada de un sonido que rebota es el…", o: ["eco", "timbre", "pulso"], a: 0, e: "Rebote en una pared." },
    { q: "¿Por qué la pérdida de audición por ruido es permanente?", o: ["las células ciliadas no se regeneran", "el tímpano crece", "el sonido se queda dentro"], a: 0, e: "Oído interno." },
  ]),
  feynman: ["Qué hace falta para que exista el sonido", "Por qué en el espacio no se oye nada", "Cómo funciona el oído", "Diferencia entre sonido musical y ruido", "Por qué el silencio es importante en la música"],
  mapa: mapa("SONIDO Y SILENCIO", "var(--eso)", [
    ["Producción", "vibración · medio · oído", "var(--pen)"],
    ["Propagación", "ondas · 340 m/s · eco", "var(--inf)"],
    ["Sonido y ruido", "regular · irregular", "var(--leaf)"],
    ["Salud", "dB · contaminación acústica", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Sonido", "Vibración que se propaga por un medio."],
    ["Medio elástico", "Aire, agua o sólido que transmite el sonido."],
    ["Onda sonora", "Forma en que viaja la vibración."],
    ["Tímpano", "Membrana del oído que vibra con el sonido."],
    ["Ruido", "Sonido de vibraciones irregulares o molesto."],
    ["Silencio", "Ausencia de sonido; en música también se escribe."],
    ["Decibelio (dB)", "Unidad de intensidad del sonido."],
    ["Paisaje sonoro", "Conjunto de sonidos de un lugar."],
  ],
  familias: ["Haced juntos la escucha de dos minutos en casa o en un parque y comparad listas.", "Revisad el volumen de los auriculares con la regla 60/60.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "El sonido: producción, propagación y percepción; sonido, ruido y silencio; contaminación acústica y hábitos de cuidado auditivo; escucha activa del entorno (RD 217/2022, Música, escucha y percepción).",
    ideas: ["Teléfono de vasos y cuerda para ver que el sólido transmite el sonido.", "Mapa sonoro del centro con una app de sonómetro.", "Composición con sonidos del entorno grabados con el móvil."],
  },
  fuentes: [RD, { t: "Organización Mundial de la Salud: escucha segura", url: "https://www.who.int/es/news-room/fact-sheets/detail/deafness-and-hearing-loss" }],
  revisado: REV,
  ejemplosTitulo: "Lo comprobamos",
  ejemplos: [
    { enunciado: "Construye un teléfono de vasos y explica por qué funciona.", pasos: ["Une dos vasos de yogur con un hilo largo y tenso.", "Habla en un vaso mientras alguien escucha en el otro.", "La voz hace vibrar el fondo del vaso, la vibración viaja por el hilo (un sólido) y hace vibrar el otro vaso."], resultado: "El sonido viaja por sólidos, incluso mejor que por el aire." },
    { enunciado: "Calcula a qué distancia está una tormenta si el trueno llega 9 segundos después del relámpago.", pasos: ["El sonido recorre unos 340 m cada segundo.", "9 · 340 = 3 060 m.", "Atajo: 9 : 3 = 3 km."], resultado: "A unos 3 km." },
    { enunciado: "Clasifica: canto de un pájaro, taladro, nota de violín, aplauso.", pasos: ["Pájaro: sonido con altura reconocible (musical).", "Taladro y aplauso: vibraciones irregulares (ruido).", "Violín: sonido determinado (musical)."], resultado: "Musicales: pájaro y violín. Ruidos: taladro y aplauso." },
  ],
  errores: [
    "Pensar que el sonido viaja en el vacío como la luz.",
    "Creer que el aire «viaja» desde el foco hasta el oído (lo que viaja es la vibración).",
    "Pensar que el silencio no forma parte de la música.",
    "Creer que si el volumen alto no duele, no hace daño.",
  ],
  ejercicios: [
    { q: "Escribe los tres elementos necesarios para que haya sonido y un ejemplo de cada uno.", sol: "Cuerpo que vibra (cuerda), medio (aire), receptor (oído)." },
    { q: "¿Por qué los indios de las películas ponían la oreja en las vías del tren?", sol: "Porque el sonido viaja más rápido y lejos por el metal que por el aire." },
    { q: "Ordena de más rápido a más lento la propagación del sonido: agua, aire, acero.", sol: "Acero, agua, aire." },
    { q: "Nombra las partes del oído por las que pasa el sonido.", sol: "Oreja, conducto auditivo, tímpano, martillo, yunque, estribo, cóclea y nervio auditivo." },
    { q: "Escribe tres sonidos musicales y tres ruidos de tu entorno.", sol: "Respuesta abierta." },
    { q: "Explica para qué sirven los silencios en una canción.", sol: "Para separar frases, respirar y crear expectación." },
    { q: "¿Cuántos decibelios tiene aproximadamente una conversación? ¿Y un concierto?", sol: "Unos 60 dB; unos 110 dB." },
    { q: "Escribe cinco consecuencias de la contaminación acústica.", sol: "Estrés, dolor de cabeza, falta de concentración, insomnio, pérdida auditiva." },
    { q: "Propón tres medidas para reducir el ruido en el comedor del instituto.", sol: "Respuesta abierta: paneles que absorban el sonido, hablar en voz baja, almohadillas en las sillas." },
    { q: "Haz la escucha de dos minutos y clasifica los sonidos en naturales, humanos y mecánicos.", sol: "Respuesta práctica." },
  ],
};
