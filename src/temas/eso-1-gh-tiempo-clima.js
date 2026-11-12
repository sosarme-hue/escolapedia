// Geografía e Historia 1º ESO. Dibujos propios en SVG.
const { tema, H, F, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Climograma sencillo (datos aproximados de Madrid).
const T = [6, 8, 11, 13, 17, 23, 26, 25, 21, 15, 10, 7];
const P = [33, 35, 26, 43, 44, 21, 11, 10, 27, 50, 53, 47];
const climograma = `<svg viewBox="0 0 260 180" role="img" aria-label="Climograma de Madrid: barras azules de precipitación y línea roja de temperatura, con verano caluroso y seco">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <g ${F} font-size="9.5">
    <path d="M34 20 V 150 H 226 V 20" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    ${P.map((p, i) => `<rect x="${38 + i * 15.5}" y="${150 - p * 2}" width="11" height="${p * 2}" fill="var(--pen)" opacity=".75"/>`).join("")}
    <polyline points="${T.map((t, i) => `${43.5 + i * 15.5},${150 - t * 4}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.5"/>
    ${"EFMAMJJASOND".split("").map((m, i) => `<text x="${43.5 + i * 15.5}" y="164" text-anchor="middle" fill="var(--muted)">${m}</text>`).join("")}
    <text x="30" y="24" text-anchor="end" fill="var(--red)">30 °C</text><text x="30" y="154" text-anchor="end" fill="var(--muted)">0</text>
    <text x="230" y="24" fill="var(--pen)">60</text><text x="230" y="34" fill="var(--pen)">mm</text>
    <text x="130" y="176" text-anchor="middle" font-weight="700" fill="var(--ink)">Madrid</text>
  </g>
</svg>`;

module.exports = tema({
  materia: "Geografía e Historia",
  titulo: "El tiempo y el clima",
  objetivos: ["Diferenciar tiempo atmosférico y clima", "Describir la atmósfera y sus capas", "Explicar los elementos del clima y los factores que los modifican", "Elaborar e interpretar un climograma"],
  claves: ["atmósfera", "troposfera", "tiempo atmosférico", "clima", "temperatura", "precipitación", "presión", "viento", "humedad", "latitud", "altitud", "climograma"],
  pregunta: [
    "Hoy llueve en Sevilla, pero todo el mundo dice que Sevilla tiene un clima seco y soleado. ¿Se equivocan?",
    "No. Que llueva hoy es el <mark>tiempo atmosférico</mark>: lo que pasa en la atmósfera en un lugar y un momento concretos. El <mark>clima</mark>, en cambio, es lo que ocurre <b>normalmente</b> en un lugar, calculado con los datos de al menos 30 años. Sevilla tiene días de lluvia, pero en conjunto llueve poco y hace mucho sol. El tiempo cambia cada día; el clima es la media.",
  ],
  bloques: [
    ["La atmósfera", `<p>La <mark>atmósfera</mark> es la capa de gases que rodea la Tierra. Está formada sobre todo por <b>nitrógeno</b> (78 %) y <b>oxígeno</b> (21 %), con pequeñas cantidades de otros gases, como el dióxido de carbono y el vapor de agua. Nos permite respirar, filtra los rayos ultravioleta del Sol y retiene el calor para que no se escape al espacio (el <b>efecto invernadero</b> natural).</p><p>Tiene varias capas. La más baja es la <b>troposfera</b>, de unos 12 km de altura: en ella vivimos y en ella se forman las nubes, la lluvia y el viento. Encima está la <b>estratosfera</b>, donde se encuentra la <b>capa de ozono</b>, que nos protege. Más arriba están la mesosfera, la termosfera y la exosfera, que se pierde en el espacio.</p>`,
      H.filas("Las capas de la atmósfera, de arriba abajo", [["Exosfera", "se pierde en el espacio", "var(--ink)"], ["Termosfera", "auroras polares", "var(--muted)"], ["Mesosfera", "se queman los meteoritos", "var(--sun)"], ["Estratosfera", "capa de ozono", "var(--bac)"], ["Troposfera", "nubes, lluvia y viento", "var(--pen)"]])],
    ["Tiempo y clima", `<p>El <mark>tiempo atmosférico</mark> es el estado de la atmósfera en un lugar y un momento determinados: si hace frío o calor, si llueve, si hay viento. Cambia de un día a otro e incluso de una hora a otra. De estudiarlo y predecirlo se encarga la <b>meteorología</b>; en España, la Agencia Estatal de Meteorología (<b>AEMET</b>).</p><p>El <mark>clima</mark> es la sucesión habitual de tipos de tiempo en un lugar a lo largo del año, calculada a partir de los datos de muchos años (al menos 30). Decimos, por ejemplo, que el clima de Galicia es húmedo y suave. La ciencia que estudia los climas es la <b>climatología</b>.</p>`,
      H.dos("Tiempo y clima", ["Tiempo", ["un momento", "cambia a diario", "«hoy llueve»", "meteorología"], "var(--pen)"], ["Clima", ["30 años o más", "es estable", "«suele llover»", "climatología"], "var(--leaf)"])],
    ["La temperatura", `<p>La <mark>temperatura</mark> es el grado de calor del aire. Se mide con el <b>termómetro</b> en grados centígrados (°C). Con las medidas se calculan la <b>temperatura media</b> de un día, un mes o un año, y la <b>amplitud térmica</b>, que es la diferencia entre la temperatura más alta y la más baja.</p><p>La temperatura depende sobre todo de cuánta energía solar llega a un lugar. Por eso es mayor cerca del ecuador y menor hacia los polos, más alta en verano que en invierno, y más alta de día que de noche. En los mapas, las líneas que unen lugares con la misma temperatura se llaman <b>isotermas</b>.</p>`,
      H.filas("Medir la temperatura", [["Termómetro", "mide el calor del aire en °C", "var(--red)"], ["Media", "suma ÷ número de datos", "var(--sun)"], ["Amplitud", "máxima − mínima", "var(--bac)"], ["Isoterma", "une igual temperatura", "var(--muted)"]])],
    ["Las precipitaciones y la humedad", `<p>La <mark>humedad</mark> es la cantidad de vapor de agua que contiene el aire; se mide con el <b>higrómetro</b>. Cuando el aire húmedo sube y se enfría, el vapor se condensa y forma nubes. Si las gotas crecen y pesan, caen: son las <mark>precipitaciones</mark>.</p><p>Las precipitaciones pueden ser de <b>lluvia</b>, <b>nieve</b> (si hace mucho frío) o <b>granizo</b> (bolas de hielo que se forman en nubes de tormenta). Se miden con el <b>pluviómetro</b>, en milímetros (mm): 1 mm equivale a 1 litro de agua por metro cuadrado. Las líneas que unen lugares con igual precipitación se llaman <b>isoyetas</b>.</p>`,
      H.rueda("Formas de precipitación", "NUBES", [["lluvia", "var(--pen)"], ["nieve", "var(--muted)"], ["granizo", "var(--bac)"], ["pluviómetro: mm", "var(--leaf)"]], "var(--pen)")],
    ["La presión y el viento", `<p>El aire pesa, y ese peso sobre la superficie se llama <mark>presión atmosférica</mark>. Se mide con el <b>barómetro</b> en milibares o hectopascales. Cuando la presión es alta hay un <b>anticiclón</b>, que suele traer tiempo seco y estable; cuando es baja hay una <b>borrasca</b> o depresión, que suele traer nubes y lluvia. En los mapas del tiempo, las líneas de igual presión se llaman <b>isobaras</b>.</p><p>El <b>viento</b> es aire en movimiento. Se produce porque el aire va de las zonas de alta presión a las de baja presión. Se mide su <b>velocidad</b> con el anemómetro y su <b>dirección</b> con la veleta. A los vientos se les nombra por el lugar del que vienen: el viento del norte, el levante (del este), el poniente (del oeste)…</p>`,
      H.dos("Presión atmosférica", ["Anticiclón", ["alta presión (A)", "aire que baja", "tiempo seco", "cielo despejado"], "var(--sun)"], ["Borrasca", ["baja presión (B)", "aire que sube", "nubes", "lluvia y viento"], "var(--bac)"])],
    ["Los factores del clima", `<p>¿Por qué cada lugar tiene un clima distinto? Por los <mark>factores del clima</mark>. El más importante es la <b>latitud</b>: cuanto más lejos del ecuador, menos calor llega. La <b>altitud</b> también influye: la temperatura baja unos 6 °C por cada 1000 m que subimos; por eso hay nieve en las cumbres.</p><p>La <b>distancia al mar</b> modera las temperaturas: el agua se calienta y se enfría despacio, así que en la costa los inviernos son suaves y los veranos menos calurosos que en el interior. El <b>relieve</b> también cuenta: las montañas frenan las nubes, de modo que la ladera que recibe el viento húmedo es lluviosa y la del otro lado, seca. Por último, las <b>corrientes marinas</b> calientan o enfrían las costas.</p>`,
      H.filas("Factores del clima", [["Latitud", "más lejos del ecuador: más frío", "var(--red)"], ["Altitud", "−6 °C cada 1000 m", "var(--muted)"], ["Mar", "suaviza las temperaturas", "var(--pen)"], ["Relieve", "frena nubes: lluvia o sequía", "var(--leaf)"], ["Corrientes", "calientan o enfrían costas", "var(--bac)"]])],
    ["El climograma", `<p>Un <mark>climograma</mark> es un gráfico que resume el clima de un lugar. En el eje horizontal se ponen los doce meses del año. Las <b>precipitaciones</b> de cada mes se representan con <b>barras azules</b>, y su escala va en el eje de la derecha (en mm). Las <b>temperaturas medias</b> se representan con una <b>línea roja</b>, con su escala a la izquierda (en °C).</p><p>Para interpretarlo hay que fijarse en: la temperatura media anual, el mes más cálido y el más frío, la amplitud térmica, el total de lluvia del año y en qué meses llueve más o menos. Si la línea roja queda por encima de las barras, ese mes es <b>seco</b>. En el climograma de Madrid se ve un verano caluroso y seco y un invierno fresco.</p>`,
      climograma, V.gh5b],
    ["El mapa del tiempo", `<p>Los mapas del tiempo que vemos en televisión resumen la situación de la atmósfera. Las <b>isobaras</b> rodean los anticiclones (marcados con una <b>A</b>) y las borrascas (con una <b>B</b>); cuanto más juntas están, más fuerte sopla el viento. Los <b>frentes</b> son las líneas donde chocan masas de aire frío y cálido, y suelen traer lluvia.</p><p>Además, se usan símbolos sencillos: sol, nubes, lluvia, nieve o tormenta. Para hacer las predicciones, los meteorólogos usan datos de miles de <b>estaciones meteorológicas</b>, globos sonda, radares y <b>satélites</b>, y los procesan con superordenadores. Aun así, la predicción solo es fiable para unos pocos días.</p>`,
      H.rueda("Herramientas de la meteorología", "AEMET", [["estaciones", "var(--leaf)"], ["satélites", "var(--bac)"], ["radares", "var(--pen)"], ["globos sonda", "var(--sun)"], ["ordenadores", "var(--muted)"]], "var(--ink)")],
  ],
  ejemplos: [
    ["En un pueblo, la máxima del día fue 24 °C y la mínima 10 °C. Calcula la amplitud térmica.", ["La amplitud es la máxima menos la mínima.", "24 − 10 = 14."], "14 °C."],
    ["Una ciudad está a nivel del mar con 20 °C. ¿Qué temperatura aproximada habrá en una cumbre cercana de 2000 m?", ["La temperatura baja unos 6 °C cada 1000 m.", "En 2000 m baja 6 × 2 = 12 °C.", "20 − 12 = 8."], "Unos 8 °C."],
    ["Las temperaturas medias de tres meses de verano son 24, 26 y 25 °C. ¿Cuál es la media de esos meses?", ["Suma: 24 + 26 + 25 = 75.", "Divide entre el número de datos: 75 ÷ 3 = 25."], "25 °C."],
  ],
  errores: [
    "Usar «clima» para hablar de hoy («hoy hace un clima malo»): lo correcto es «hoy hace mal tiempo».",
    "Pensar que un anticiclón trae lluvia: suele traer tiempo seco y estable.",
    "Confundir isotermas (temperatura), isoyetas (lluvia) e isobaras (presión).",
    "En el climograma, leer las barras con la escala de temperaturas: las barras van con la escala de precipitación.",
    "Creer que en la montaña hace más calor por estar más cerca del Sol: la temperatura baja con la altitud.",
  ],
  ejercicios: [
    ["¿De qué gases está formada principalmente la atmósfera?", "De nitrógeno (78 %) y oxígeno (21 %)."],
    ["¿En qué capa de la atmósfera se producen los fenómenos meteorológicos?", "En la troposfera."],
    ["¿Qué diferencia hay entre tiempo y clima?", "El tiempo es el estado de la atmósfera en un momento; el clima, lo habitual en un lugar durante al menos 30 años."],
    ["¿Con qué instrumentos se miden la temperatura, la lluvia y la presión?", "Termómetro, pluviómetro y barómetro."],
    ["¿Qué significa que han caído 15 mm de lluvia?", "Que han caído 15 litros de agua por metro cuadrado."],
    ["¿Qué tiempo suele traer una borrasca?", "Nubes, lluvia y viento."],
    ["¿Por qué en la costa los inviernos son más suaves que en el interior?", "Porque el mar se enfría despacio y suaviza las temperaturas."],
    ["Explica por qué una ladera de una montaña puede ser lluviosa y la otra seca.", "Las nubes chocan con la montaña y descargan en la ladera que recibe el viento; al otro lado llega aire seco."],
    ["En un climograma, ¿qué representan las barras y qué la línea?", "Las barras, las precipitaciones (mm); la línea, las temperaturas medias (°C)."],
    ["¿Qué es un frente en un mapa del tiempo?", "La zona donde chocan una masa de aire frío y otra cálida; suele traer lluvia."],
  ],
  figura: ["El tiempo y el clima", H.figCols("Elementos y factores del clima", [["Tiempo / clima", ["hoy / 30 años", "meteorología", "climatología", "AEMET"], "var(--pen)"], ["Elementos", ["temperatura", "precipitación", "presión", "viento"], "var(--red)"], ["Factores", ["latitud", "altitud", "distancia al mar", "relieve"], "var(--leaf)"], ["Climograma", ["12 meses", "barras: lluvia", "línea: temperatura", "meses secos"], "var(--sun)"]])],
  video: V.gh5v,
  quiz: [
    ["La capa de la atmósfera donde vivimos es la…", ["troposfera", "estratosfera", "exosfera"], "Unos 12 km."],
    ["La capa de ozono está en la…", ["estratosfera", "troposfera", "termosfera"], "Filtra los rayos ultravioleta."],
    ["El clima se calcula con datos de al menos…", ["30 años", "un año", "una semana"], "Es la media habitual."],
    ["La lluvia se mide con el…", ["pluviómetro", "barómetro", "termómetro"], "En milímetros."],
    ["Un anticiclón es una zona de…", ["alta presión", "baja presión", "mucha lluvia"], "Tiempo estable."],
    ["El viento va de las altas a las…", ["bajas presiones", "altas presiones", "montañas siempre"], "Por diferencia de presión."],
    ["Al subir 1000 m, la temperatura baja unos…", ["6 °C", "1 °C", "20 °C"], "Por eso nieva en las cumbres."],
    ["El mar hace que las temperaturas sean…", ["más suaves", "más extremas", "siempre altas"], "Se calienta y enfría despacio."],
    ["En un climograma, la línea roja indica…", ["temperatura", "precipitación", "presión"], "En °C."],
    ["Las líneas de igual presión son…", ["isobaras", "isotermas", "isoyetas"], "Aparecen en el mapa del tiempo."],
  ],
  examen: [
    ["La amplitud térmica es…", ["máxima menos mínima", "la media", "la suma de temperaturas"], "La diferencia."],
    ["El factor más importante del clima es…", ["la latitud", "el color del suelo", "la hora"], "La distancia al ecuador."],
    ["1 mm de lluvia equivale a…", ["1 litro por m²", "1 litro por km²", "10 litros por m²"], "Es la medida del pluviómetro."],
  ],
  feynman: ["Qué es la atmósfera y qué capas tiene", "Qué diferencia hay entre tiempo y clima", "Cuáles son los elementos y factores del clima", "Cómo se lee un climograma"],
  mapa: ["TIEMPO Y CLIMA", "var(--pen)", [["Atmósfera", "troposfera · ozono", "var(--bac)"], ["Elementos", "temperatura · lluvia · presión", "var(--red)"], ["Factores", "latitud · altitud · mar", "var(--leaf)"], ["Climograma", "barras · línea roja", "var(--sun)"]], 240],
  tarjetas: [
    ["Atmósfera", "Capa de gases que rodea la Tierra (nitrógeno y oxígeno)."],
    ["Tiempo atmosférico", "Estado de la atmósfera en un lugar y un momento."],
    ["Clima", "Tiempo habitual de un lugar calculado con 30 años de datos."],
    ["Amplitud térmica", "Diferencia entre la temperatura máxima y la mínima."],
    ["Precipitación", "Agua que cae de las nubes: lluvia, nieve o granizo (mm)."],
    ["Anticiclón / borrasca", "Alta presión, tiempo seco / baja presión, lluvia."],
    ["Altitud", "Cada 1000 m la temperatura baja unos 6 °C."],
    ["Climograma", "Gráfico con barras de lluvia y línea de temperaturas."],
  ],
  familias: ["Durante una semana, anotad cada mañana la temperatura y si llueve, y comparadlo con la predicción de la AEMET.", "Buscad el climograma de vuestra ciudad y el de otra muy distinta (por ejemplo, Santiago y Almería) y comparadlos."],
  saberes: "Tiempo atmosférico y clima: la atmósfera, elementos y factores del clima, y elaboración e interpretación de climogramas (Geografía e Historia, 1º ESO, RD 217/2022).",
  ideas: ["Construir un pluviómetro con una botella y registrar la lluvia del mes.", "Hacer un climograma de la localidad con datos de la AEMET.", "Presentar el mapa del tiempo en clase como en la tele."],
  fuentes: [["AEMET: valores climatológicos normales", "https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos"], ["AEMET: predicción y mapas del tiempo", "https://www.aemet.es/es/eltiempo/prediccion"]],
});
