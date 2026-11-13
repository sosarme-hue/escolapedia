// Ciencias Sociales 3º de Primaria: el tiempo atmosférico y el clima. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, barras, vid, vgen, RD, PROF, sol, nube, gota, termo, casa, arbol } = require("./_pri3b");

// Símbolos del tiempo para un mapa: sol, nube, lluvia, nieve.
const lluvia = (x, y, s = 1) => `${nube(x, y, s)}${[-10, 0, 10].map((d) => `<path d="M${x + d * s} ${y + 14 * s} l-3 8" stroke="var(--water)" stroke-width="2.4" stroke-linecap="round"/>`).join("")}`;
const nieve = (x, y, s = 1) => `${nube(x, y, s)}${[-10, 0, 10].map((d) => `<text x="${x + d * s}" y="${y + 24 * s}" font-size="${10 * s}" text-anchor="middle" fill="#60a5fa">✱</text>`).join("")}`;
const veleta = (x, y) => `<path d="M${x} ${y + 40} V${y}" stroke="var(--ink)" stroke-width="2.5"/><path d="M${x - 22} ${y} H${x + 18}" stroke="var(--ink)" stroke-width="2.5"/><path d="M${x + 18} ${y - 6} l10 6 l-10 6z" fill="${COL.rojo}"/><path d="M${x - 22} ${y - 8} l-8 8 l8 8 h6 v-16z" fill="${COL.azul}"/>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "El tiempo y el clima",
  minutos: 45,
  objetivos: ["Saber qué es la atmósfera y qué es el tiempo atmosférico", "Conocer los elementos del tiempo: temperatura, precipitaciones, viento, nubosidad y humedad", "Usar instrumentos meteorológicos: termómetro, pluviómetro, veleta y anemómetro", "Distinguir el tiempo atmosférico del clima", "Leer un mapa del tiempo sencillo y registrar el tiempo en un diario"],
  claves: ["atmósfera", "tiempo atmosférico", "clima", "temperatura", "precipitación", "viento", "nubosidad", "termómetro", "pluviómetro", "veleta", "anemómetro", "meteorólogo"],
  pregunta: {
    texto: "Hoy en tu ciudad llueve y hace frío, pero mañana puede salir el sol. En cambio, todo el mundo sabe que en Canarias casi nunca hace mucho frío. ¿Es lo mismo el «tiempo» que el «clima»?",
    respuesta: "No. El <mark>tiempo atmosférico</mark> es cómo está la atmósfera <b>en un lugar y en un momento concreto</b>: hoy, ahora. Cambia de un día a otro, incluso de una hora a otra. El <mark>clima</mark>, en cambio, es el tiempo que <b>suele hacer</b> en un lugar a lo largo de muchos años. El tiempo cambia mucho; el clima casi no cambia.",
  },
  bloques: [
    {
      html: `<h3>La atmósfera</h3><p>La Tierra está rodeada por una capa de aire llamada <mark>atmósfera</mark>. Es como una manta invisible que envuelve todo el planeta.</p><p>La atmósfera es muy importante para la vida:</p><p>• Contiene el <b>aire</b> que respiramos, con el <b>oxígeno</b> que necesitan las personas, los animales y las plantas.<br>• Nos <b>protege</b> de los rayos del Sol que son peligrosos y de muchos meteoritos, que se queman al atravesarla.<br>• Mantiene la <b>temperatura</b> de la Tierra: por el día impide que se caliente demasiado y por la noche que se enfríe demasiado.</p><p>En la parte más baja de la atmósfera, la que está pegada a la superficie, se forman las <b>nubes</b>, la <b>lluvia</b>, la <b>nieve</b> y el <b>viento</b>. Es decir, allí se produce el <b>tiempo atmosférico</b>.</p><p>Cuanto más subimos, el aire es más escaso y hace más frío. Por eso los alpinistas que suben a montañas muy altas llevan botellas de oxígeno.</p>`,
      svg: svg("La Tierra rodeada por la atmósfera, una capa de aire con nubes", `${tit("La atmósfera")}<circle cx="130" cy="190" r="120" fill="#bfdbfe" fill-opacity=".5"/><circle cx="130" cy="190" r="92" fill="#2b88d8"/><path d="M80 120 q20 -14 40 0 q-10 20 -40 0z" fill="#4caf50"/>${nube(86, 84, 0.6)}${nube(178, 86, 0.6)}${et(130, 60, "atmósfera: aire", 110, { size: 11, color: COL.azul })}${et(130, 150, "Tierra", 60, { size: 11, color: "#fff" })}${tx(130, 174, "oxígeno · protección · temperatura", 200)}`),
    },
    {
      html: `<h3>El tiempo atmosférico</h3><p>El <mark>tiempo atmosférico</mark> es el estado de la atmósfera en un lugar y en un momento determinados. Cuando decimos «hoy hace sol y calor» o «está nublado y hace viento», estamos hablando del tiempo.</p><p>El tiempo cambia mucho: puede hacer sol por la mañana y llover por la tarde. Por eso, antes de una excursión, conviene consultar la <b>previsión del tiempo</b>.</p><p>Para describir el tiempo nos fijamos en sus <b>elementos</b>:</p><p>• La <mark>temperatura</mark>: lo caliente o lo frío que está el aire.<br>• Las <mark>precipitaciones</mark>: el agua que cae de las nubes, como lluvia, nieve o granizo.<br>• El <mark>viento</mark>: el aire en movimiento.<br>• La <mark>nubosidad</mark>: la cantidad de nubes que hay en el cielo. El cielo puede estar despejado, poco nuboso, nuboso o cubierto.<br>• La <b>humedad</b>: el vapor de agua que hay en el aire. Cuando hay mucha, se forma niebla o rocío.</p><p>Las personas que estudian el tiempo se llaman <mark>meteorólogos</mark>. En España, la <b>AEMET</b> (Agencia Estatal de Meteorología) recoge datos y hace las predicciones.</p>`,
      svg: svg("Elementos del tiempo: temperatura, precipitaciones, viento, nubosidad y humedad", `${tit("Elementos del tiempo")}${filas([["temperatura", "frío o calor", COL.rojo], ["precipitaciones", "lluvia, nieve, granizo", COL.azul], ["viento", "aire en movimiento", COL.gris], ["nubosidad", "nubes en el cielo", COL.morado], ["humedad", "vapor en el aire", COL.agua]], 50, 25, { x: 22, wa: 92, wb: 120 })}`),
    },
    {
      html: `<h3>La temperatura</h3><p>La <mark>temperatura</mark> nos dice cuánto calor o frío hace. Se mide con el <mark>termómetro</mark>, en <b>grados centígrados</b> o Celsius (°C).</p><p>El termómetro tiene un tubito de cristal con un líquido. Cuando hace calor, el líquido se dilata y <b>sube</b>; cuando hace frío, se contrae y <b>baja</b>. Hoy también hay termómetros digitales que muestran el número en una pantalla.</p><p>• Si el termómetro marca <b>0 °C</b>, el agua se congela: hace mucho frío y puede helar.<br>• Por debajo de cero, decimos que hace «bajo cero», por ejemplo −3 °C.<br>• Entre 15 y 25 °C la temperatura es agradable.<br>• Por encima de 30 °C hace mucho calor.</p><p>La temperatura cambia a lo largo del día: suele ser más baja al amanecer y más alta a primera hora de la tarde. También cambia con las estaciones y con la altitud: en las montañas hace más frío que en los valles.</p><p>Para medir bien la temperatura del aire, el termómetro se coloca a la <b>sombra</b>, lejos del sol directo.</p>`,
      svg: svg("Dos termómetros: uno marca frío y otro calor", `${tit("El termómetro")}${termo(80, 150, 0.25, COL.azul)}${termo(180, 150, 0.85, COL.rojo)}${et(80, 168, "frío: 0 °C", 80, { size: 11, color: COL.azul })}${et(180, 168, "calor: 32 °C", 80, { size: 11, color: COL.rojo })}`),
    },
    {
      html: `<h3>Las precipitaciones</h3><p>Las <mark>precipitaciones</mark> son el agua que cae de las nubes a la superficie de la Tierra. Pueden ser de varios tipos:</p><p>• <b>Lluvia</b>: gotas de agua líquida. Si es suave y fina, se llama llovizna; si es muy fuerte, aguacero o chaparrón.<br>• <b>Nieve</b>: copos de agua helada que caen cuando hace mucho frío.<br>• <b>Granizo</b>: bolitas de hielo que caen en las tormentas. A veces son tan grandes que estropean los cultivos y los coches.</p><p>La cantidad de lluvia se mide con el <mark>pluviómetro</mark>, un recipiente con marcas que recoge el agua que cae. Se mide en <b>litros por metro cuadrado</b>: si caen 10 litros por metro cuadrado, es como si en cada cuadrado de un metro de lado hubiera caído un cubo de agua.</p><p>Las <b>tormentas</b> son lluvias fuertes con <b>rayos</b> (la luz) y <b>truenos</b> (el ruido). Como la luz viaja más rápido que el sonido, primero vemos el rayo y luego oímos el trueno. En una tormenta no hay que refugiarse debajo de un árbol.</p>`,
      svg: svg("Lluvia, nieve y granizo, y un pluviómetro que mide la lluvia", `${tit("Precipitaciones")}${lluvia(46, 64, 0.9)}${nieve(130, 64, 0.9)}${nube(214, 64, 0.9)}${[-10, 0, 10].map((d) => `<circle cx="${214 + d}" cy="${86 + (d === 0 ? 4 : 0)}" r="3.5" fill="#e0f2fe" stroke="#60a5fa"/>`).join("")}${et(46, 112, "lluvia", 50, { size: 10 })}${et(130, 112, "nieve", 50, { size: 10 })}${et(214, 112, "granizo", 50, { size: 10 })}<path d="M110 126 h40 l-6 46 h-28z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><rect x="118" y="152" width="24" height="18" fill="var(--water)" fill-opacity=".6"/>${tx(200, 156, "pluviómetro", 90)}`),
    },
    {
      html: `<h3>El viento</h3><p>El <mark>viento</mark> es el <b>aire en movimiento</b>. No lo vemos, pero lo notamos en la cara y vemos sus efectos: mueve las hojas de los árboles, las banderas, las nubes y las cometas.</p><p>Del viento nos interesan dos cosas:</p><p>• La <b>dirección</b>: de dónde viene. Se mide con la <mark>veleta</mark>, una flecha que gira en lo alto de los tejados. La flecha apunta hacia el lugar del que viene el viento. Los vientos tienen nombres según su dirección: el <b>cierzo</b>, que viene del noroeste, es frío; el <b>levante</b> viene del este, y el <b>poniente</b>, del oeste.</p><p>• La <b>velocidad</b> o fuerza: lo rápido que sopla. Se mide con el <mark>anemómetro</mark>, que tiene unas cazoletas que giran más deprisa cuanto más fuerte es el viento.</p><p>Según su fuerza, hablamos de <b>brisa</b> (suave), <b>viento fuerte</b>, <b>temporal</b> y, cuando es muy violento, <b>huracán</b>.</p><p>El viento es útil: mueve los molinos y los aerogeneradores, que producen electricidad, impulsa los barcos de vela y seca la ropa tendida.</p>`,
      svg: svg("Una veleta con flecha y un anemómetro con cazoletas", `${tit("Veleta y anemómetro")}${veleta(70, 70)}${et(70, 136, "veleta: dirección", 110, { size: 10, color: COL.rojo })}<path d="M190 70 V126" stroke="var(--ink)" stroke-width="2.5"/><path d="M164 70 H216 M190 50 V90" stroke="var(--ink)" stroke-width="2"/>${[[164, 70], [216, 70], [190, 50], [190, 90]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="${COL.azul}"/>`).join("")}${et(190, 146, "anemómetro: fuerza", 120, { size: 10, color: COL.azul })}${tx(130, 172, "el viento es aire en movimiento", 220)}`),
      video: vid("C21VJ75bvUY"),
    },
    {
      html: `<h3>El mapa del tiempo</h3><p>En la televisión, en los periódicos y en internet podemos ver el <mark>mapa del tiempo</mark>. Es un mapa con <b>símbolos</b> que nos dicen el tiempo que va a hacer en cada zona.</p><p>Estos son los símbolos más usados:</p><p>• Un <b>sol</b>: cielo despejado.<br>• Un sol con una nube: poco nuboso, intervalos de sol y nubes.<br>• Una <b>nube</b>: nublado o cubierto.<br>• Una nube con <b>gotas</b>: lluvia.<br>• Una nube con un <b>rayo</b>: tormenta.<br>• Una nube con <b>copos</b> o estrellitas: nieve.<br>• Unas <b>líneas onduladas</b>: niebla.<br>• Una <b>flecha</b>: la dirección del viento.</p><p>Además, el mapa suele indicar con <b>números</b> las temperaturas máximas y mínimas de cada ciudad.</p><p>Para prever el tiempo, los meteorólogos usan datos de miles de estaciones meteorológicas, fotografías de <b>satélites</b> que dan vueltas a la Tierra y potentes ordenadores. Aun así, a veces se equivocan, porque el tiempo es difícil de predecir.</p>`,
      svg: svg("Mapa del tiempo de España con sol en el sur, lluvia en el norte y nieve en la montaña", `${tit("Mapa del tiempo")}<path d="M40 56 L190 50 L222 82 L202 112 L208 136 L156 162 L96 158 L52 140 L36 96z" fill="var(--leaf)" fill-opacity=".3" stroke="#15803d" stroke-width="1.5"/>${lluvia(80, 70, 0.6)}${nieve(170, 70, 0.6)}${sol(130, 140, 9)}${nube(110, 104, 0.55)}${sol(98, 98, 6)}${et(40, 166, "12°", 30, { size: 11, color: COL.azul })}${et(220, 164, "24°", 30, { size: 11, color: COL.rojo })}`),
      video: vid("8gII_aUzwn8"),
    },
    {
      html: `<h3>¿Qué es el clima?</h3><p>El <mark>clima</mark> es el tiempo atmosférico que <b>suele hacer</b> en un lugar a lo largo de muchos años. Para conocerlo, los meteorólogos apuntan las temperaturas y las lluvias durante al menos <b>30 años</b> y calculan cómo son normalmente.</p><p>Para entender la diferencia: «Hoy llueve en Sevilla» habla del <b>tiempo</b>. «En Sevilla los veranos son muy calurosos y secos» habla del <b>clima</b>.</p><p>El clima de un lugar depende de varias cosas:</p><p>• De lo <b>cerca o lejos del mar</b> que esté: el mar suaviza las temperaturas. En la costa los inviernos son más templados y los veranos menos calurosos que en el interior.<br>• De la <b>altitud</b>: en las montañas hace más frío y nieva más.<br>• De la <b>distancia al ecuador</b>: cerca del ecuador hace calor todo el año y cerca de los polos, frío todo el año.</p><p>El clima influye en las plantas y los animales de cada lugar, en los cultivos, en cómo construimos las casas y en la ropa que usamos.</p>`,
      svg: svg("Diferencia entre tiempo, que cambia cada día, y clima, que es lo habitual durante años", `${tit("Tiempo y clima")}${fichas([["Tiempo", "hoy, ahora: cambia mucho", COL.azul], ["Clima", "lo normal durante 30 años", COL.verde]], 2, 40, 64)}${tx(130, 140, "«Hoy llueve» → tiempo", 220)}${tx(130, 162, "«Aquí los veranos son secos» → clima", 236)}`),
    },
    {
      html: `<h3>Los climas de España</h3><p>España tiene <b>varios climas</b>, porque es un país grande, con mucho relieve y rodeado de mares:</p><p>• <mark>Clima oceánico</mark>, en el norte (Galicia, Asturias, Cantabria y el País Vasco). Llueve mucho durante todo el año y las temperaturas son suaves: ni mucho frío en invierno ni mucho calor en verano. Por eso el paisaje es muy <b>verde</b>.</p><p>• <mark>Clima mediterráneo</mark>, en la mayor parte del país. Los veranos son <b>calurosos y secos</b> y los inviernos, suaves en la costa y fríos en el interior. Llueve poco, sobre todo en otoño y primavera. En el interior, lejos del mar, los inviernos son muy fríos y los veranos muy calurosos.</p><p>• <mark>Clima de montaña</mark>, en las zonas altas como los Pirineos o Sierra Nevada. Los inviernos son muy fríos, con mucha <b>nieve</b>, y los veranos frescos.</p><p>• <mark>Clima subtropical</mark>, en las islas Canarias. Hace una temperatura agradable todo el año, porque están cerca de África, y llueve poco.</p>`,
      svg: svg("Climas de España: oceánico, mediterráneo, de montaña y subtropical", `${tit("Climas de España")}${fichas([["Oceánico", "norte: llueve mucho", COL.verde], ["Mediterráneo", "verano seco y caluroso", COL.sol], ["De montaña", "frío y nieve", COL.morado], ["Subtropical", "Canarias: suave siempre", COL.naranja]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Nuestro diario del tiempo</h3><p>Vamos a ser meteorólogos durante una semana o un mes. Cada día, a la misma hora, apuntamos el tiempo en una tabla en el aula:</p><p>• El <b>día</b> de la semana y la fecha.<br>• El <b>estado del cielo</b>, con un símbolo: sol, nubes, lluvia, niebla o nieve.<br>• La <b>temperatura</b>, mirando un termómetro colocado a la sombra en el patio o en la ventana.<br>• El <b>viento</b>: si no hace, si es suave o si es fuerte. Podéis fabricar una veleta con un lápiz, un alfiler, una pajita y una cartulina.<br>• La <b>lluvia</b>: con un pluviómetro casero, hecho con una botella de plástico cortada y una regla.</p><p>Al final, contad cuántos días ha hecho sol, cuántos ha llovido, y haced un <b>gráfico de barras</b>. Calculad qué día hizo más calor y cuál más frío.</p><p><b>Repaso:</b> ¿qué instrumento usarías para saber de dónde viene el viento? → La veleta. ¿Y para saber cuánto ha llovido? → El pluviómetro.</p>`,
      svg: svg("Gráfico de barras del diario del tiempo: días de sol, nubes y lluvia en un mes", `${tit("Nuestro mes")}${barras([["sol", 14, COL.sol], ["nubes", 9, COL.gris], ["lluvia", 6, COL.azul], ["niebla", 1, COL.morado]], { unidad: "", y0: 150, alto: 96, x0: 24, ancho: 212 })}${tx(130, 172, "días de cada tipo en un mes", 200)}`),
    },
  ],
  figura: {
    titulo: "El tiempo y el clima en ocho ideas",
    svg: rejilla([
      ["Atmósfera", "capa de aire", COL.azul],
      ["Tiempo", "hoy, ahora", COL.agua],
      ["Clima", "lo normal en años", COL.verde],
      ["Termómetro", "temperatura en °C", COL.rojo],
      ["Pluviómetro", "cuánto llueve", COL.azul],
      ["Veleta", "dirección del viento", COL.naranja],
      ["Anemómetro", "fuerza del viento", COL.gris],
      ["Mapa del tiempo", "símbolos", COL.morado],
    ], 4, 86, "Resumen del tiempo y el clima"),
  },
  video: vgen("65mS782mCLQ", "el tiempo atmosférico y el clima para niños"),
  ejemplos: [
    { enunciado: "¿Hablan del tiempo o del clima? a) «Mañana nevará en Burgos». b) «En Canarias las temperaturas son suaves todo el año».",
      pasos: ["a) Habla de un día concreto: tiempo.", "b) Habla de lo que suele pasar siempre: clima."],
      resultado: "a) tiempo; b) clima." },
    { enunciado: "Por la mañana el termómetro marca 8 °C y a las 4 de la tarde marca 19 °C. ¿Cuántos grados ha subido la temperatura?",
      pasos: ["Restamos: 19 − 8.", "19 − 8 = 11."],
      resultado: "Ha subido 11 grados." },
    { enunciado: "Quieres saber de dónde sopla el viento y con qué fuerza. ¿Qué instrumentos necesitas?",
      pasos: ["La dirección se mide con la veleta.", "La fuerza o velocidad se mide con el anemómetro."],
      resultado: "Una veleta y un anemómetro." },
  ],
  errores: [
    "Confundir el tiempo (hoy) con el clima (lo habitual durante muchos años).",
    "Pensar que la veleta mide la fuerza del viento: mide su dirección.",
    "Colocar el termómetro al sol: la temperatura del aire se mide a la sombra.",
    "Creer que en toda España hace el mismo clima: hay varios climas.",
  ],
  ejercicios: [
    { q: "¿Qué es la atmósfera?", sol: "La capa de aire que rodea la Tierra." },
    { q: "Escribe tres cosas que hace la atmósfera por nosotros.", sol: "Nos da el aire para respirar, nos protege de los rayos peligrosos del Sol y mantiene la temperatura." },
    { q: "¿Qué es el tiempo atmosférico?", sol: "El estado de la atmósfera en un lugar y en un momento concretos." },
    { q: "Escribe los elementos del tiempo.", sol: "Temperatura, precipitaciones, viento, nubosidad y humedad." },
    { q: "¿Con qué se mide la temperatura? ¿En qué unidad?", sol: "Con el termómetro, en grados centígrados (°C)." },
    { q: "Escribe tres tipos de precipitaciones.", sol: "Lluvia, nieve y granizo." },
    { q: "¿Para qué sirve el pluviómetro?", sol: "Para medir la cantidad de lluvia que cae." },
    { q: "¿Qué diferencia hay entre la veleta y el anemómetro?", sol: "La veleta indica la dirección del viento y el anemómetro, su fuerza o velocidad." },
    { q: "¿Qué es el clima?", sol: "El tiempo que suele hacer en un lugar a lo largo de muchos años." },
    { q: "¿Cómo es el clima oceánico?", sol: "Llueve mucho todo el año y las temperaturas son suaves." },
  ],
  quiz: [
    { q: "La capa de aire que rodea la Tierra es la…", o: ["atmósfera", "corteza", "hidrosfera"], a: 0, e: "La atmósfera." },
    { q: "«Hoy hace sol» habla del…", o: ["tiempo", "clima", "relieve"], a: 0, e: "Del tiempo atmosférico." },
    { q: "La temperatura se mide con el…", o: ["termómetro", "pluviómetro", "anemómetro"], a: 0, e: "El termómetro." },
    { q: "A 0 °C el agua…", o: ["se congela", "hierve", "se evapora"], a: 0, e: "Se congela." },
    { q: "Las bolitas de hielo de una tormenta son…", o: ["granizo", "niebla", "rocío"], a: 0, e: "Granizo." },
    { q: "La lluvia se mide con el…", o: ["pluviómetro", "termómetro", "barómetro"], a: 0, e: "El pluviómetro." },
    { q: "La dirección del viento la indica la…", o: ["veleta", "regla", "brújula del aula"], a: 0, e: "La veleta." },
    { q: "En el mapa del tiempo, una nube con gotas significa…", o: ["lluvia", "sol", "viento"], a: 0, e: "Lluvia." },
    { q: "El clima del norte de España es…", o: ["oceánico", "subtropical", "polar"], a: 0, e: "Oceánico." },
    { q: "En una tormenta, primero…", o: ["vemos el rayo", "oímos el trueno", "nieva"], a: 0, e: "La luz llega antes que el sonido." },
  ],
  examen: [
    { q: "Para conocer el clima se estudian datos de al menos…", o: ["30 años", "una semana", "un día"], a: 0, e: "Unos 30 años." },
    { q: "El mar hace que las temperaturas sean…", o: ["más suaves", "más extremas", "siempre bajo cero"], a: 0, e: "Más suaves." },
    { q: "El clima de las islas Canarias es…", o: ["subtropical", "de montaña", "oceánico"], a: 0, e: "Subtropical." },
    { q: "Las personas que estudian el tiempo son los…", o: ["meteorólogos", "geólogos", "astronautas"], a: 0, e: "Los meteorólogos." },
  ],
  feynman: ["Qué es la atmósfera y por qué es importante", "La diferencia entre tiempo y clima", "Los instrumentos que miden el tiempo"],
  mapa: mapa("TIEMPO Y CLIMA", "var(--pri)", [
    ["Atmósfera", "capa de aire", COL.azul],
    ["Elementos", "temperatura · lluvia · viento", COL.rojo],
    ["Instrumentos", "termómetro · veleta", COL.naranja],
    ["Clima", "oceánico · mediterráneo", COL.verde],
  ], 250),
  tarjetas: [
    ["Atmósfera", "Capa de aire que rodea la Tierra."],
    ["Tiempo atmosférico", "Estado de la atmósfera hoy, en un lugar."],
    ["Clima", "Tiempo habitual de un lugar durante muchos años."],
    ["Termómetro", "Mide la temperatura."],
    ["Pluviómetro", "Mide la lluvia."],
    ["Veleta", "Indica la dirección del viento."],
    ["Anemómetro", "Mide la fuerza del viento."],
    ["Nubosidad", "Cantidad de nubes en el cielo."],
  ],
  familias: ["Mirad juntos el mapa del tiempo en la televisión o en internet y explicad los símbolos.", "Fabricad un pluviómetro con una botella de plástico y una regla.", "Apuntad durante una semana la temperatura de la mañana y de la tarde.", "Hablad del clima de un lugar que hayáis visitado."],
  profesores: PROF("Ciencias Sociales: la atmósfera; el tiempo atmosférico y sus elementos; instrumentos meteorológicos; el mapa del tiempo; diferencia entre tiempo y clima; factores del clima; los climas de España", ["Diario del tiempo del aula durante un mes.", "Construcción de veleta y pluviómetro caseros.", "Simular un parte meteorológico por grupos."]),
  fuentes: [RD, wiki("Tiempo atmosférico", "Tiempo atmosférico"), wiki("Clima", "Clima"), wiki("Clima de España", "Clima de España")],
  revisado: REV,
};
