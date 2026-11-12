// Ciencias Sociales 6º de Primaria: los climas de España y de Europa. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, vid, vgen, RD, PROF, sol, nube } = require("./_pri6b");

// Climograma sencillo: barras de lluvia (mm) y línea de temperatura (°C) para 12 meses.
function climograma(T, P, { x0 = 34, y0 = 150, w = 200, h = 100, tmax = 30, pmax = 150 } = {}) {
  const paso = w / 12, M = "EFMAMJJASOND";
  const barrasP = P.map((p, i) => `<rect x="${(x0 + i * paso + 2).toFixed(1)}" y="${(y0 - (p / pmax) * h).toFixed(1)}" width="${(paso - 4).toFixed(1)}" height="${((p / pmax) * h).toFixed(1)}" fill="var(--water)" fill-opacity=".75"/>`).join("");
  const linea = T.map((v, i) => `${i ? "L" : "M"}${(x0 + i * paso + paso / 2).toFixed(1)} ${(y0 - (v / tmax) * h).toFixed(1)}`).join(" ");
  const meses = [...M].map((m, i) => t(x0 + i * paso + paso / 2, y0 + 12, m, { size: 9, weight: 400 })).join("");
  return `<path d="M${x0} ${y0} H${x0 + w} M${x0} ${y0} V${y0 - h}" stroke="var(--line)" stroke-width="1.5"/>${barrasP}<path d="${linea}" stroke="var(--red)" stroke-width="2.5" fill="none"/>${meses}`;
}

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "Los climas de España y de Europa",
  minutos: 50,
  objetivos: ["Distinguir tiempo atmosférico y clima", "Explicar los elementos y factores del clima", "Leer un climograma", "Describir los climas de España y de Europa con su vegetación", "Conocer el cambio climático y cómo frenarlo"],
  claves: ["tiempo atmosférico", "clima", "temperatura", "precipitación", "latitud", "altitud", "climograma", "oceánico", "mediterráneo", "continental", "subtropical", "cambio climático"],
  pregunta: {
    texto: "En enero, en Santander suele llover y hace 10 °C; en Burgos hiela por la noche; y en Las Palmas de Gran Canaria la gente pasea en manga corta. ¿Cómo puede haber climas tan distintos en un mismo país?",
    respuesta: "Porque el clima depende de varios <mark>factores</mark>: la <b>cercanía al mar</b> suaviza las temperaturas (Santander); la <b>altitud</b> y estar en el interior hacen los inviernos fríos (Burgos, en la Meseta, a 860 m); y la <b>latitud</b>, es decir, la distancia al ecuador, hace que Canarias, mucho más al sur, tenga temperaturas suaves todo el año.",
  },
  bloques: [
    {
      html: `<h3>Tiempo y clima no son lo mismo</h3><p>El <mark>tiempo atmosférico</mark> es el estado de la atmósfera en un lugar y en un <b>momento concreto</b>: hoy llueve, mañana hará sol, esta tarde sopla viento. Cambia de un día a otro, e incluso de una hora a otra. Lo estudian los <b>meteorólogos</b> y lo vemos en el parte del tiempo. En España lo elabora la AEMET (Agencia Estatal de Meteorología).</p><p>El <mark>clima</mark> es el tiempo que suele hacer en un lugar a lo largo del año, calculado con datos de <b>muchos años</b> (al menos 30). Por ejemplo: «En Sevilla, los veranos son muy calurosos y secos». Un día de lluvia en Sevilla en julio no cambia su clima.</p><p>Una forma fácil de recordarlo: el tiempo es lo que te pones hoy; el clima es lo que tienes en el armario.</p><p>Para medir el tiempo se usan aparatos que hay en las <b>estaciones meteorológicas</b>: el <b>termómetro</b> (temperatura), el <b>pluviómetro</b> (lluvia), el <b>barómetro</b> (presión), el <b>anemómetro</b> (velocidad del viento), la <b>veleta</b> (dirección del viento) y el <b>higrómetro</b> (humedad).</p>`,
      svg: svg("Tiempo: lo de hoy; clima: lo habitual durante muchos años, con aparatos de medida", `${tit("Tiempo o clima")}${cj2(10, 34, 115, 52, "TIEMPO", "hoy, ahora", COL.azul)}${cj2(135, 34, 115, 52, "CLIMA", "muchos años", COL.verde)}${filas([["termómetro", "temperatura", COL.rojo], ["pluviómetro", "lluvia", COL.agua], ["anemómetro", "fuerza del viento", COL.gris], ["veleta", "dirección del viento", COL.marron]], 108, 18, { wa: 90, wb: 120 })}`),
    },
    {
      html: `<h3>Los elementos del clima</h3><p>Los <mark>elementos del clima</mark> son las características de la atmósfera que medimos para conocer el clima de un lugar. Los más importantes son:</p><p>• La <b>temperatura</b>: lo caliente o frío que está el aire. Se mide en grados Celsius (°C). Con ella se calcula la <b>temperatura media</b> de cada mes y del año, y la <b>amplitud térmica</b>, que es la diferencia entre el mes más cálido y el más frío.</p><p>• Las <b>precipitaciones</b>: el agua que cae de las nubes en forma de lluvia, nieve o granizo. Se miden en <b>milímetros (mm)</b> o litros por metro cuadrado (1 mm = 1 L/m²).</p><p>• El <b>viento</b>: el aire en movimiento. Se produce porque el aire va de las zonas de alta presión a las de baja presión.</p><p>• La <b>presión atmosférica</b>: el peso del aire. Las altas presiones (anticiclones) suelen traer buen tiempo; las bajas presiones (borrascas), nubes y lluvia.</p><p>• La <b>humedad</b>: la cantidad de vapor de agua que hay en el aire.</p>`,
      svg: svg("Cinco elementos del clima: temperatura, precipitación, viento, presión y humedad", `${tit("Elementos del clima")}${fichas([["Temperatura", "°C · media y amplitud", COL.rojo], ["Precipitación", "mm = litros por m²", COL.agua], ["Viento", "de alta a baja presión", COL.gris], ["Presión", "anticiclón o borrasca", COL.morado], ["Humedad", "vapor de agua", COL.azul], ["Se miden", "durante 30 años", COL.verde]], 2, 34)}`),
    },
    {
      html: `<h3>Los factores del clima</h3><p>¿Por qué hay climas distintos? Porque hay <mark>factores</mark> que hacen que los elementos del clima cambien de un lugar a otro:</p><p>• La <b>latitud</b>, o distancia al ecuador. Cuanto más cerca del ecuador, más directos llegan los rayos del Sol y más calor hace. Cuanto más cerca de los polos, más frío.</p><p>• La <b>altitud</b>, o altura sobre el nivel del mar. Cuanto más alto, más frío: la temperatura baja unos <b>6 °C por cada 1.000 metros</b> que subimos. Por eso hay nieve en las cumbres en primavera.</p><p>• La <b>distancia al mar</b>. El mar se calienta y se enfría despacio, y suaviza las temperaturas de la costa: inviernos templados y veranos no tan calurosos. En el interior, lejos del mar, los inviernos son más fríos y los veranos más calurosos.</p><p>• El <b>relieve</b>. Las montañas frenan las nubes que vienen del mar: llueve mucho en la ladera que da al mar y poco en la otra. Por eso el norte de España es tan verde y el interior, más seco.</p>`,
      svg: svg("Factores del clima: con la altitud baja la temperatura unos 6 grados cada 1.000 metros", `${tit("Cuanto más alto, más frío")}<path d="M60 160 L130 50 L200 160 Z" fill="#a16207" fill-opacity=".3" stroke="#a16207" stroke-width="2"/><path d="M120 66 L130 50 L140 66 Z" fill="#fff"/>${[[0, "18 °C", 160], [1000, "12 °C", 124], [2000, "6 °C", 88], [3000, "0 °C", 56]].map(([m, c, y]) => `<path d="M14 ${y} H${m === 3000 ? 120 : 204}" stroke="var(--muted)" stroke-dasharray="3 3"/>${et(30, y - 4, `${m} m`, 46, { size: 9.5, weight: 400 })}${et(226, y - 4, c, 40, { size: 11, color: COL.rojo })}`).join("")}`),
    },
    {
      html: `<h3>El climograma</h3><p>Para representar el clima de un lugar se usa un gráfico llamado <mark>climograma</mark>. Muestra los doce meses del año y combina dos datos:</p><p>• Las <b>precipitaciones</b> de cada mes, en <b>barras azules</b>, que se leen en el eje de la derecha o de la izquierda en milímetros.<br>• La <b>temperatura media</b> de cada mes, con una <b>línea roja</b>, en grados.</p><p>Para leer un climograma nos preguntamos: ¿qué meses son los más calurosos y los más fríos? ¿Cuánta es la amplitud térmica? ¿Llueve mucho o poco? ¿Las lluvias están repartidas o hay una época seca? Si en verano la línea roja está alta y las barras son muy bajas, hay <b>sequía estival</b>: es típico del clima mediterráneo.</p><p>Fíjate en el climograma de Madrid (datos aproximados): en julio y agosto la temperatura media pasa de 25 °C y casi no llueve; en enero apenas llega a 6 °C. La amplitud térmica es de unos 20 °C, muy alta: es un clima <b>mediterráneo continentalizado</b>.</p>`,
      svg: svg("Climograma aproximado de Madrid con barras de lluvia y línea de temperatura", `${tit("Climograma de Madrid (aprox.)")}${climograma([6, 8, 11, 13, 17, 23, 26, 26, 21, 15, 10, 7], [35, 35, 25, 45, 45, 20, 12, 10, 25, 60, 55, 45], { x0: 34, y0: 150, w: 200, h: 100, tmax: 30, pmax: 100 })}${et(30, 40, "°C", 30, { size: 10, color: COL.rojo })}${et(236, 40, "mm", 30, { size: 10, color: COL.agua })}`),
      video: vid("z_dZQuZQTQs"),
    },
    {
      html: `<h3>Los climas de España (I)</h3><p>En España hay varios climas. Los más extensos son:</p><p>El <mark>clima oceánico</mark> o atlántico, en el norte peninsular (Galicia, Asturias, Cantabria, País Vasco y norte de Navarra). Las <b>lluvias son abundantes</b> (más de 900 mm al año) y repartidas por todos los meses. Las temperaturas son <b>suaves</b>: inviernos templados y veranos frescos, por la influencia del mar. Su vegetación es el <b>bosque atlántico</b> de robles, hayas y castaños, y grandes prados verdes.</p><p>El <mark>clima mediterráneo</mark> es el más extendido de España. Su rasgo principal son los <b>veranos calurosos y secos</b>. Las lluvias son escasas e irregulares, sobre todo en otoño y primavera. Tiene variedades:</p><p>• <b>Mediterráneo típico</b>, en la costa mediterránea, Baleares y el valle del Guadalquivir: inviernos suaves.<br>• <b>Mediterráneo continentalizado</b> o de interior, en la Meseta y el valle del Ebro: inviernos fríos con heladas y veranos muy calurosos.<br>• <b>Mediterráneo seco</b>, en el sureste (Murcia, Almería): muy pocas lluvias, menos de 300 mm al año.</p>`,
      svg: svg("Comparación de lluvias anuales aproximadas: Santander, Madrid, Sevilla y Almería", `${tit("Lluvia al año (mm, aprox.)")}${barras([["Santander", 1200, COL.verde], ["Madrid", 420, COL.naranja], ["Sevilla", 530, COL.sol], ["Almería", 200, COL.rojo]], { max: 1300, y0: 150, alto: 100 })}${tx(130, 176, "oceánico · continentalizado · típico · seco", 236)}`),
    },
    {
      html: `<h3>Los climas de España (II)</h3><p>Además, en España hay otros dos climas:</p><p>El <mark>clima de montaña</mark>, en las zonas altas, por encima de unos 1.200 metros: Pirineos, Cordillera Cantábrica, Sistema Central, Sistema Ibérico y Sierra Nevada. Los inviernos son <b>muy fríos</b>, con nieve, y los veranos frescos. Llueve bastante. La vegetación cambia con la altura: bosques de pinos y abetos, y arriba, prados de alta montaña.</p><p>El <mark>clima subtropical</mark> o canario, en las islas Canarias. Las temperaturas son <b>cálidas y suaves todo el año</b> (entre 18 y 25 °C de media), con muy poca amplitud térmica: por eso se dice que tienen una «eterna primavera». Llueve poco, aunque en las zonas altas del norte de las islas los vientos alisios forman un «mar de nubes». Allí crece la <b>laurisilva</b>, un bosque muy húmedo y antiguo. En las zonas bajas y secas hay plantas que guardan agua, como el cardón o el drago.</p>${tabla(["Clima", "Temperaturas", "Lluvias", "Vegetación"], [["Oceánico", "suaves", "abundantes y regulares", "robles, hayas, prados"], ["Mediterráneo", "veranos calurosos", "escasas, verano seco", "encinas, alcornoques, matorral"], ["De montaña", "inviernos muy fríos", "abundantes, nieve", "pinos, abetos, prados alpinos"], ["Subtropical", "cálidas todo el año", "escasas", "laurisilva, drago, cardón"]])}`,
      svg: svg("Cuatro climas de España con su paisaje vegetal", `${tit("Climas y paisajes")}${fichas([["Oceánico", "robles y prados", COL.verde], ["Mediterráneo", "encinas y matorral", COL.naranja], ["De montaña", "pinos, abetos, nieve", COL.azul], ["Subtropical", "laurisilva, drago", COL.rojo]])}`),
    },
    {
      html: `<h3>Los climas de Europa</h3><p>Europa está casi toda en la <b>zona templada</b> de la Tierra, entre el trópico y el círculo polar. Por eso la mayoría de sus climas son templados, aunque muy variados:</p><p>• <b>Clima oceánico</b>, en la costa atlántica y el oeste: Reino Unido, Irlanda, Francia, Bélgica, Países Bajos. Lluvias abundantes todo el año y temperaturas suaves, gracias al océano y a una corriente marina cálida, la <b>corriente del Golfo</b>.</p><p>• <b>Clima continental</b>, en el centro y el este: Polonia, Hungría, Ucrania, Rusia. Inviernos <b>muy fríos</b> y largos, con nieve, y veranos calurosos. Gran amplitud térmica. Lluvias en verano.</p><p>• <b>Clima mediterráneo</b>, en el sur: España, Italia, Grecia. Veranos secos y calurosos e inviernos suaves.</p><p>• <b>Clima polar</b>, en el extremo norte (norte de Escandinavia, Islandia, norte de Rusia). Inviernos larguísimos y helados; veranos cortos y frescos.</p><p>• <b>Clima de montaña</b>, en los Alpes, los Pirineos, los Cárpatos o el Cáucaso.</p>`,
      svg: svg("Climas de Europa de norte a sur y de oeste a este: polar, oceánico, continental, mediterráneo y de montaña", `${tit("Climas de Europa")}${filas([["Polar", "extremo norte, muy frío", COL.azul], ["Oceánico", "oeste, lluvioso y suave", COL.verde], ["Continental", "centro y este, inviernos helados", COL.morado], ["Mediterráneo", "sur, veranos secos", COL.naranja], ["De montaña", "Alpes, Pirineos, Cárpatos", COL.gris]], 48, 25, { wa: 86, wb: 140 })}`),
      video: vid("W_fh64igVEM"),
    },
    {
      html: `<h3>El paisaje vegetal de Europa</h3><p>Cada clima tiene su <mark>vegetación</mark> propia, que forma el paisaje:</p><p>• En el clima <b>polar</b> está la <b>tundra</b>: el suelo está helado casi todo el año y solo crecen musgos, líquenes y pequeñas plantas. Allí viven renos y zorros árticos.</p><p>• Un poco más al sur, en las zonas frías del norte y el este, está la <b>taiga</b>, un enorme bosque de coníferas (pinos, abetos) que cubre Escandinavia y Rusia.</p><p>• En el clima <b>oceánico</b> crece el <b>bosque caducifolio</b>: robles, hayas, castaños, que pierden la hoja en otoño. Hay muchos prados para el ganado.</p><p>• En el clima <b>continental</b> se mezclan bosques y grandes praderas o <b>estepas</b>, en Ucrania y el sur de Rusia, muy usadas para cultivar cereales.</p><p>• En el clima <b>mediterráneo</b> está el <b>bosque mediterráneo</b>, de árboles de hoja perenne y dura que soportan la sequía, como la encina, el alcornoque y el olivo, y matorrales aromáticos como el romero, el tomillo y la jara.</p>`,
      svg: svg("Paisajes vegetales de Europa de norte a sur: tundra, taiga, bosque caducifolio, estepa y bosque mediterráneo", `${tit("De norte a sur")}${columna([["tundra: musgos y líquenes", COL.azul], ["taiga: pinos y abetos", "#15803d"], ["bosque caducifolio: robles", COL.verde], ["estepa: praderas", COL.sol], ["bosque mediterráneo: encinas", COL.naranja]], 130, 220, 32, 20, 9)}`),
    },
    {
      html: `<h3>El cambio climático</h3><p>El clima de la Tierra siempre ha cambiado, pero en los últimos 150 años se está calentando <b>muy deprisa</b>. Es el <mark>cambio climático</mark>, y la mayoría de los científicos coinciden en que lo causamos los seres humanos.</p><p>La causa principal es el aumento del <b>efecto invernadero</b>. Algunos gases de la atmósfera, como el <b>dióxido de carbono</b>, retienen parte del calor del Sol, como el plástico de un invernadero. Es algo natural y necesario para la vida. Pero al quemar carbón, petróleo y gas, y al talar bosques, hemos añadido muchísimo dióxido de carbono, y la Tierra retiene demasiado calor.</p><p>Sus consecuencias ya se notan: olas de calor más frecuentes, sequías, lluvias torrenciales, deshielo de glaciares (los de los Pirineos están desapareciendo), subida del nivel del mar y cambios en los seres vivos.</p><p>Para frenarlo hay que <b>reducir las emisiones</b>: usar energías renovables, ahorrar energía, moverse en transporte público o en bici, reciclar, consumir productos de cercanía y proteger y plantar bosques.</p>`,
      svg: svg("Efecto invernadero: el Sol calienta la Tierra y los gases de la atmósfera retienen parte del calor", `${tit("El efecto invernadero")}${sol(36, 46, 12)}<path d="M10 70 Q130 40 250 70" stroke="#94a3b8" stroke-width="10" fill="none" opacity=".6"/><path d="M10 160 H250" stroke="#15803d" stroke-width="6"/>${fl(50, 58, 110, 156, "var(--sun)", 2.5)}<path d="M120 156 L170 76" stroke="var(--red)" stroke-width="2.5" fill="none"/>${fl(170, 76, 200, 150, "var(--red)", 2.5)}${et(200, 40, "gases (CO₂)", 90, { size: 11, color: COL.gris })}${tx(130, 176, "más CO₂ = más calor atrapado", 200, { weight: 700, color: COL.rojo })}`),
    },
  ],
  figura: {
    titulo: "Los climas en ocho ideas",
    svg: rejilla([
      ["Tiempo", "hoy, ahora", COL.azul],
      ["Clima", "muchos años", COL.verde],
      ["Factores", "latitud, altitud, mar…", COL.marron],
      ["Climograma", "barras + línea", COL.agua],
      ["Oceánico", "lluvioso, suave", "#15803d"],
      ["Mediterráneo", "verano seco", COL.naranja],
      ["Continental", "inviernos helados", COL.morado],
      ["Cambio climático", "más CO₂, más calor", COL.rojo],
    ], 4, 86, "Resumen de los climas de España y de Europa"),
  },
  video: vgen("udCro_59Ddc", "los climas de España para niños"),
  ejemplos: [
    { enunciado: "Un lugar tiene veranos de 26 °C sin apenas lluvia e inviernos de 5 °C. Llueven unos 400 mm al año. ¿Qué clima tiene?",
      pasos: ["Verano caluroso y seco: mediterráneo.", "Invierno frío (5 °C) y gran amplitud térmica (21 °C): interior, lejos del mar.", "Lluvias escasas."],
      resultado: "Mediterráneo continentalizado, como el de la Meseta." },
    { enunciado: "A nivel del mar hay 20 °C. ¿Qué temperatura aproximada habrá en una cumbre de 2.000 m?",
      pasos: ["Baja unos 6 °C por cada 1.000 m.", "2.000 m son 2 × 6 = 12 °C menos.", "20 − 12 = 8 °C."],
      resultado: "Unos 8 °C." },
    { enunciado: "Calcula la amplitud térmica de un lugar cuyo mes más cálido tiene 24 °C y el más frío, 12 °C. ¿Está en la costa o en el interior?",
      pasos: ["Amplitud = 24 − 12 = 12 °C.", "Una amplitud pequeña indica la influencia suavizadora del mar."],
      resultado: "12 °C: probablemente en la costa." },
  ],
  errores: [
    "Confundir tiempo y clima: un día de lluvia no cambia el clima de un lugar.",
    "Pensar que al subir una montaña hace más calor por estar «más cerca del Sol»: hace más frío.",
    "Creer que en el clima mediterráneo llueve más en verano: el verano es la estación seca.",
    "Decir que Canarias tiene clima mediterráneo: tiene clima subtropical.",
    "Pensar que el efecto invernadero es malo en sí: es natural; el problema es que lo hemos aumentado.",
  ],
  ejercicios: [
    { q: "Explica con un ejemplo la diferencia entre tiempo y clima.", sol: "Tiempo: hoy llueve en Sevilla. Clima: en Sevilla los veranos son calurosos y secos." },
    { q: "¿Qué mide el pluviómetro? ¿Y el anemómetro?", sol: "El pluviómetro, la lluvia; el anemómetro, la velocidad del viento." },
    { q: "Escribe los cuatro factores del clima.", sol: "Latitud, altitud, distancia al mar y relieve." },
    { q: "¿Por qué en la costa los inviernos son más suaves que en el interior?", sol: "Porque el mar se enfría despacio y suaviza las temperaturas." },
    { q: "¿Qué representan las barras y la línea de un climograma?", sol: "Las barras, las precipitaciones mensuales; la línea, la temperatura media mensual." },
    { q: "Describe el clima oceánico y su vegetación.", sol: "Lluvias abundantes y regulares, temperaturas suaves; bosque de robles y hayas y prados." },
    { q: "Escribe las tres variedades del clima mediterráneo en España y dónde están.", sol: "Típico (costa mediterránea, Baleares, Guadalquivir), continentalizado (Meseta, Ebro) y seco (sureste)." },
    { q: "¿Por qué se dice que Canarias tiene una «eterna primavera»?", sol: "Porque tiene temperaturas suaves todo el año, con muy poca amplitud térmica." },
    { q: "¿Qué clima hay en Polonia y en el norte de Noruega?", sol: "Polonia: continental. Norte de Noruega: polar." },
    { q: "Escribe tres consecuencias del cambio climático y tres acciones para frenarlo.", sol: "Olas de calor, sequías, deshielo. Usar renovables, ir en bici o transporte público, ahorrar energía." },
  ],
  quiz: [
    { q: "El tiempo que hace hoy es…", o: ["el clima", "el tiempo atmosférico", "la latitud"], a: 1, e: "El tiempo atmosférico." },
    { q: "La lluvia se mide en…", o: ["grados", "milímetros", "kilos"], a: 1, e: "En mm o litros por m²." },
    { q: "Al subir 1.000 m, la temperatura baja unos…", o: ["1 °C", "6 °C", "20 °C"], a: 1, e: "Unos 6 °C." },
    { q: "La distancia al ecuador se llama…", o: ["altitud", "latitud", "amplitud"], a: 1, e: "Latitud." },
    { q: "En un climograma, la temperatura es…", o: ["la línea roja", "las barras azules", "el título"], a: 0, e: "La línea." },
    { q: "El clima del norte de España es…", o: ["mediterráneo", "oceánico", "subtropical"], a: 1, e: "Oceánico." },
    { q: "El rasgo del clima mediterráneo es…", o: ["el verano seco", "la lluvia constante", "la nieve todo el año"], a: 0, e: "Veranos calurosos y secos." },
    { q: "La laurisilva crece en…", o: ["Canarias", "Pirineos", "la Meseta"], a: 0, e: "En Canarias." },
    { q: "El bosque de coníferas del norte de Europa es la…", o: ["tundra", "taiga", "estepa"], a: 1, e: "Taiga." },
    { q: "El gas que más aumenta el efecto invernadero es el…", o: ["oxígeno", "dióxido de carbono", "nitrógeno"], a: 1, e: "Dióxido de carbono." },
  ],
  examen: [
    { q: "El clima continental tiene…", o: ["inviernos muy fríos", "inviernos cálidos", "lluvias todo el año siempre"], a: 0, e: "Inviernos muy fríos." },
    { q: "La agencia del tiempo en España es la…", o: ["AEMET", "DGT", "ONCE"], a: 0, e: "AEMET." },
    { q: "La tundra está en el clima…", o: ["polar", "mediterráneo", "oceánico"], a: 0, e: "Polar." },
    { q: "El sureste de España tiene clima mediterráneo…", o: ["seco", "húmedo", "polar"], a: 0, e: "Seco." },
  ],
  feynman: ["Qué diferencia hay entre tiempo y clima", "Qué factores explican que haya climas distintos en España", "Qué es el cambio climático y qué podemos hacer"],
  mapa: mapa("CLIMA", "var(--pri)", [
    ["Elementos", "temperatura · lluvia · viento", COL.rojo],
    ["Factores", "latitud · altitud · mar · relieve", COL.marron],
    ["España", "oceánico · mediterráneo · canario", COL.naranja],
    ["Europa", "polar · continental · oceánico", COL.azul],
  ], 260),
  tarjetas: [
    ["Tiempo atmosférico", "Estado de la atmósfera en un momento y lugar."],
    ["Clima", "Tiempo habitual de un lugar durante muchos años."],
    ["Amplitud térmica", "Diferencia de temperatura entre el mes más cálido y el más frío."],
    ["Climograma", "Gráfico con lluvias (barras) y temperaturas (línea)."],
    ["Clima oceánico", "Lluvioso y suave: norte de España y oeste de Europa."],
    ["Clima mediterráneo", "Veranos calurosos y secos, inviernos suaves."],
    ["Clima continental", "Inviernos muy fríos y veranos calurosos."],
    ["Efecto invernadero", "Gases que retienen el calor de la Tierra."],
  ],
  familias: ["Haced un pluviómetro con una botella y apuntad la lluvia de cada semana.", "Comparad el parte del tiempo de vuestra ciudad con el de otra de clima distinto.", "Buscad en la web de la AEMET los datos de vuestra localidad y dibujad un climograma.", "Pensad juntos tres cambios en casa para reducir emisiones."],
  profesores: PROF("Ciencias Sociales: tiempo atmosférico y clima; elementos y factores del clima; elaboración e interpretación de climogramas; climas y paisajes vegetales de España y de Europa; el cambio climático y sus consecuencias", ["Estación meteorológica escolar con registro diario durante un mes.", "Elaborar climogramas con datos de la AEMET de varias ciudades y compararlos.", "Debate sobre medidas del centro educativo para reducir emisiones."]),
  fuentes: [RD, { t: "AEMET: Agencia Estatal de Meteorología", url: "https://www.aemet.es/" }, wiki("Clima de España", "Clima_de_España"), wiki("Clima de Europa", "Clima_de_Europa")],
  revisado: REV,
};
