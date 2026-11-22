// Ciencias Sociales 6º de Primaria: la población de España y de Europa. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, vid, vgen, RD, PROF, nino, casa } = require("./_pri6b");

// Pirámide de población: pares [hombres, mujeres] en % por grupos de edad, de abajo arriba.
function piramide(gr, { cx = 130, y0 = 160, h = 14, esc = 9 } = {}) {
  return gr.map(([hm, mj, et_], i) => {
    const y = y0 - (i + 1) * h;
    return `<rect x="${(cx - hm * esc).toFixed(1)}" y="${y}" width="${(hm * esc).toFixed(1)}" height="${h - 2}" fill="var(--pen)" fill-opacity=".75"/><rect x="${cx}" y="${y}" width="${(mj * esc).toFixed(1)}" height="${h - 2}" fill="var(--red)" fill-opacity=".7"/>${t(26, y + 9.5, et_, { size: 8.5, weight: 700 })}`;
  }).join("") + `<path d="M${cx} ${y0 - gr.length * h - 2} V${y0}" stroke="var(--ink)"/>`;
}

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "La población de España y de Europa",
  minutos: 50,
  objetivos: ["Saber qué es la población y cómo se cuenta", "Calcular e interpretar la densidad de población", "Explicar natalidad, mortalidad y crecimiento natural", "Leer una pirámide de población", "Describir las migraciones y la población de España y de Europa"],
  claves: ["población", "censo", "padrón", "densidad", "natalidad", "mortalidad", "crecimiento natural", "pirámide de población", "esperanza de vida", "envejecimiento", "emigración", "inmigración"],
  pregunta: {
    texto: "Madrid tiene más de 3 millones de habitantes y algunos pueblos de Soria tienen menos de 20. ¿Por qué la gente se reparte de una forma tan desigual?",
    respuesta: "Porque las personas tienden a vivir donde hay <mark>trabajo, servicios y buenas comunicaciones</mark>: las grandes ciudades y las costas. Muchas zonas rurales del interior han perdido habitantes durante décadas porque los jóvenes se marcharon a estudiar y trabajar a las ciudades. Es lo que se llama la <b>España vaciada</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la población y cómo se cuenta?</h3><p>La <mark>población</mark> es el conjunto de personas que viven en un lugar: un pueblo, una ciudad, una comunidad autónoma, un país o un continente. La ciencia que estudia la población se llama <b>demografía</b>.</p><p>Para saber cuántas personas hay y cómo son, se hacen recuentos:</p><p>• El <b>censo</b> es un recuento general de toda la población que se hace cada diez años. Recoge datos como la edad, el sexo, el lugar de nacimiento, los estudios o el trabajo.</p><p>• El <b>padrón municipal</b> es la lista de los vecinos de cada municipio. La lleva el ayuntamiento y se actualiza continuamente: cuando alguien nace, muere o se cambia de casa.</p><p>En España, los datos de población los recoge y publica el <b>INE</b> (Instituto Nacional de Estadística). Según el INE, España tiene unos <b>49 millones de habitantes</b>. La Unión Europea tiene unos 450 millones, y toda Europa, unos 740 millones.</p><p>Con estos datos, los gobiernos deciden dónde hacen falta colegios, hospitales, residencias de mayores o transporte público.</p>`,
      svg: svg("Cómo se cuenta la población: censo cada diez años y padrón municipal", `${tit("Contar la población")}${cj2(10, 36, 115, 60, "CENSO", "cada 10 años", COL.azul)}${cj2(135, 36, 115, 60, "PADRÓN", "ayuntamiento, siempre", COL.verde)}${barras([["España", 49, COL.rojo], ["UE", 450, COL.azul], ["Europa", 740, COL.morado]], { max: 760, y0: 162, alto: 50, x0: 40, ancho: 180, unidad: " M" })}`),
    },
    {
      html: `<h3>La densidad de población</h3><p>Para comparar si un lugar está muy poblado o poco poblado no basta con saber cuántos habitantes tiene: también importa su tamaño. Para eso se usa la <mark>densidad de población</mark>, que es el número de habitantes que hay de media en cada kilómetro cuadrado.</p><p>Se calcula así:</p><p style="text-align:center"><b>densidad = número de habitantes ÷ superficie en km²</b></p><p>El resultado se expresa en <b>habitantes por kilómetro cuadrado (hab./km²)</b>.</p><p>Por ejemplo, España tiene unos 49 millones de habitantes y una superficie de unos 506.000 km². Su densidad es de unos <b>97 hab./km²</b>. Los Países Bajos tienen unos 520 hab./km², mucho más; Finlandia, unos 18.</p><p>Dentro de España hay grandes diferencias. La Comunidad de Madrid tiene más de 850 hab./km²; Soria, menos de 9, una de las densidades más bajas de Europa. Las zonas <b>densamente pobladas</b> son la capital, las costas y los archipiélagos. Las zonas <b>poco pobladas</b> son el interior, sobre todo Castilla y León, Castilla-La Mancha, Aragón y Extremadura.</p>`,
      svg: svg("Densidad de población aproximada: Comunidad de Madrid, Países Bajos, España, Finlandia y Soria", `${tit("Habitantes por km² (aprox.)")}${barras([["C. Madrid", 850, COL.rojo], ["P. Bajos", 520, COL.naranja], ["España", 97, COL.sol], ["Finlandia", 18, COL.verde], ["Soria", 9, COL.azul]], { max: 900, y0: 142, alto: 96 })}${tx(130, 174, "densidad = habitantes ÷ km²", 220, { weight: 700 })}`),
    },
    {
      html: `<h3>Natalidad, mortalidad y crecimiento natural</h3><p>La población de un lugar cambia por dos motivos: porque nacen y mueren personas, y porque llegan o se van personas.</p><p>• La <mark>natalidad</mark> es el número de nacimientos que hay en un lugar durante un año.<br>• La <mark>mortalidad</mark> es el número de fallecimientos que hay en un lugar durante un año.</p><p>La diferencia entre los dos es el <b>crecimiento natural</b> o vegetativo:</p><p style="text-align:center"><b>crecimiento natural = nacimientos − defunciones</b></p><p>Si nacen más personas de las que mueren, el crecimiento es <b>positivo</b> y la población aumenta. Si mueren más de las que nacen, el crecimiento es <b>negativo</b> y la población disminuye.</p><p>Por ejemplo, en España en 2023 nacieron unas 322.000 personas y murieron unas 436.000. El crecimiento natural fue negativo: unas 114.000 personas menos. Sin embargo, la población total de España creció. ¿Cómo es posible? Porque llegaron muchas personas de otros países: la <b>inmigración</b>.</p><p>El <b>crecimiento real</b> de la población es el crecimiento natural más el saldo migratorio (los que llegan menos los que se van).</p>`,
      svg: svg("Crecimiento natural de España en 2023: más defunciones que nacimientos, pero la inmigración hace crecer la población", `${tit("España, 2023 (aprox.)")}${barras([["nacimientos", 322, COL.verde], ["defunciones", 436, COL.gris]], { max: 460, y0: 116, alto: 72, x0: 30, ancho: 200, unidad: " mil" })}${cj(20, 136, 220, 30, "natural: −114 mil · con inmigración: crece", COL.morado)}`),
    },
    {
      html: `<h3>La esperanza de vida</h3><p>La <mark>esperanza de vida</mark> es el número medio de años que se calcula que vivirá una persona que nace en un lugar. Es uno de los mejores indicadores de cómo se vive en un país.</p><p>España tiene una de las esperanzas de vida más altas del mundo: unos <b>84 años</b>. Las mujeres viven de media algo más que los hombres (unos 86 frente a 81). Hace cien años, en 1920, la esperanza de vida en España era de solo unos 41 años.</p><p>¿Por qué vivimos tanto más? Gracias a:</p><p>• Los avances de la <b>medicina</b>: vacunas, antibióticos, operaciones.<br>• La <b>sanidad pública</b>, que llega a todo el mundo.<br>• Una <b>alimentación</b> mejor y variada, como la dieta mediterránea.<br>• El <b>agua potable</b> y la higiene.<br>• Mejores condiciones de trabajo y de vivienda.</p><p>Al vivir más años y nacer pocos niños, la población se hace cada vez más mayor. Es el <mark>envejecimiento de la población</mark>. En España, aproximadamente una de cada cinco personas tiene más de 65 años.</p>`,
      svg: svg("Esperanza de vida en España: unos 41 años en 1920 y unos 84 años hoy", `${tit("Esperanza de vida en España")}${barras([["1920", 41, COL.gris], ["1960", 70, COL.naranja], ["2000", 79, COL.sol], ["hoy", 84, COL.verde]], { max: 90, y0: 146, alto: 100, unidad: " años" })}${tx(130, 172, "medicina · sanidad · alimentación · agua", 236)}`),
    },
    {
      html: `<h3>La pirámide de población</h3><p>Para ver cómo es la población de un lugar según su edad y su sexo se usa un gráfico llamado <mark>pirámide de población</mark>.</p><p>• Tiene dos lados: a la <b>izquierda</b>, los <b>hombres</b>; a la <b>derecha</b>, las <b>mujeres</b>.<br>• Está dividida en barras horizontales, cada una de un grupo de edad: abajo los más pequeños y arriba los más mayores.<br>• Cuanto más larga es una barra, más personas hay de esa edad.</p><p>Según su forma, hay tres tipos:</p><p>• <b>Pirámide joven</b> (forma de pirámide): base ancha y cima estrecha. Nacen muchos niños. Es típica de países con mucha natalidad, como muchos de África.</p><p>• <b>Pirámide adulta</b> (forma de campana): los grupos de edad son parecidos.</p><p>• <b>Pirámide envejecida</b> (forma de bulbo o de jarrón): base estrecha y mucha población adulta y mayor. Nacen pocos niños y se vive mucho. Es la pirámide de España y de casi toda Europa.</p>`,
      svg: svg("Pirámide de población envejecida, de base estrecha, como la de España", `${tit("Pirámide envejecida")}${piramide([[2.2, 2.1, "0-9"], [2.6, 2.5, "10-19"], [2.9, 2.8, "20-29"], [3.4, 3.4, "30-39"], [4.2, 4.1, "40-49"], [4.0, 4.1, "50-59"], [3.0, 3.3, "60-69"], [2.1, 2.6, "70-79"], [1.0, 1.7, "80+"]], { y0: 162, h: 14, esc: 18 })}${et(78, 44, "hombres", 60, { size: 11, color: COL.azul })}${et(222, 46, "mujeres", 60, { size: 11, color: COL.rojo })}${tx(130, 176, "pocos niños, muchos adultos", 200)}`),
    },
    {
      html: `<h3>Las migraciones</h3><p>Las <mark>migraciones</mark> son los desplazamientos de personas de un lugar a otro para vivir en él durante un tiempo largo o para siempre.</p><p>• La <b>emigración</b> es la salida de personas de su lugar de origen. Quien se va es un <b>emigrante</b>.<br>• La <b>inmigración</b> es la llegada de personas a un lugar. Quien llega es un <b>inmigrante</b>.</p><p>La misma persona es emigrante en el país del que sale e inmigrante en el país al que llega.</p><p>Las migraciones pueden ser <b>interiores</b>, dentro del mismo país (por ejemplo, del campo a la ciudad), o <b>exteriores</b>, de un país a otro.</p><p>¿Por qué emigra la gente? Por <b>motivos económicos</b> (buscar trabajo o un sueldo mejor), por <b>guerras o persecuciones</b> (las personas <b>refugiadas</b>), por desastres naturales o por estudios.</p><p>España ha sido país de emigración: entre 1950 y 1975, más de dos millones de españoles se fueron a trabajar a Francia, Alemania o Suiza, y antes muchos marcharon a América. Desde finales del siglo XX, España es sobre todo un país de <b>inmigración</b>: hoy, más del 13 % de sus habitantes ha nacido en otro país, sobre todo en Marruecos, Colombia, Venezuela y Rumanía.</p>`,
      svg: svg("Emigrar es salir de un lugar e inmigrar es llegar a otro", `${tit("Emigrar e inmigrar")}${casa(46, 140, "#e8892c")}${casa(214, 140, "var(--leaf)")}${et(46, 156, "origen", 70, { size: 11, color: COL.naranja })}${et(214, 156, "destino", 70, { size: 11, color: COL.verde })}${nino(130, 140, { s: 1 })}${fl(76, 110, 108, 110, COL.naranja, 3)}${fl(152, 110, 184, 110, COL.verde, 3)}${et(80, 50, "emigra (sale)", 100, { size: 11, color: COL.naranja })}${et(184, 50, "inmigra (llega)", 100, { size: 11, color: COL.verde })}${tx(130, 176, "trabajo · guerras · estudios", 220)}`),
      video: vid("gJFiG19-j8o"),
    },
    {
      html: `<h3>Dónde vive la población: el campo y la ciudad</h3><p>La población puede vivir en dos tipos de lugares:</p><p>• La <mark>población rural</mark> vive en pueblos pequeños y se ha dedicado tradicionalmente a la agricultura y la ganadería.<br>• La <mark>población urbana</mark> vive en ciudades y trabaja sobre todo en la industria y los servicios.</p><p>Durante el siglo XX, millones de personas dejaron el campo para irse a las ciudades buscando trabajo: es el <b>éxodo rural</b>. Hoy, unas ocho de cada diez personas en España viven en ciudades.</p><p>Por eso, en el interior de España muchos pueblos se han quedado casi vacíos, con pocos niños y mucha gente mayor. Se habla de la <b>España vaciada</b>. Para frenar la despoblación se proponen medidas: buena conexión a internet para teletrabajar, transporte, centros de salud y colegios rurales, y ayudas a quien se instale allí.</p><p>Las ciudades más pobladas de España son <b>Madrid</b> (unos 3,4 millones de habitantes) y <b>Barcelona</b> (unos 1,7 millones), seguidas de Valencia, Sevilla y Zaragoza. Alrededor de las grandes ciudades se forman <b>áreas metropolitanas</b>: una ciudad central rodeada de otras unidas a ella por el trabajo y el transporte.</p>`,
      svg: svg("Ciudades más pobladas de España en millones de habitantes, aproximado", `${tit("Ciudades más pobladas (millones)")}${barras([["Madrid", 3.4, COL.rojo], ["Barcelona", 1.7, COL.azul], ["Valencia", 0.8, COL.naranja], ["Sevilla", 0.7, COL.verde], ["Zaragoza", 0.7, COL.morado]], { max: 3.6, y0: 146, alto: 96 })}${tx(130, 172, "8 de cada 10 personas viven en ciudades", 236)}`),
    },
    {
      html: `<h3>La población de Europa</h3><p>Europa tiene unos <b>740 millones de habitantes</b>, aproximadamente uno de cada diez habitantes del mundo. Es un continente <b>densamente poblado</b>, pero la población no se reparte por igual:</p><p>• Hay mucha población en el centro y el oeste: el sur de Inglaterra, Bélgica, los Países Bajos, el oeste de Alemania y el norte de Italia. También en las grandes capitales.<br>• Hay poca población en el norte (Escandinavia, Islandia, norte de Rusia), por el frío, y en las zonas de alta montaña.</p><p>Los países más poblados de Europa son <b>Rusia</b> (la parte europea), <b>Alemania</b> (unos 84 millones), <b>Reino Unido</b>, <b>Francia</b> e <b>Italia</b>. España es el quinto país más poblado de la Unión Europea.</p><p>La población europea tiene rasgos comunes:</p><p>• <b>Baja natalidad</b>: se tienen pocos hijos, de media menos de dos por mujer.<br>• <b>Alta esperanza de vida</b>, de las mayores del mundo.<br>• <b>Envejecimiento</b> de la población.<br>• Llegada de muchos <b>inmigrantes</b>, que ayudan a que la población no disminuya.<br>• Mayoría de población <b>urbana</b>. Las ciudades más pobladas son Moscú, Estambul (con una parte en Europa), Londres, París y Madrid.</p>`,
      svg: svg("Rasgos de la población europea", `${tit("Población de Europa")}${fichas([["740 millones", "1 de cada 10 del mundo", COL.azul], ["Baja natalidad", "menos de 2 hijos", COL.naranja], ["Vida larga", "alta esperanza de vida", COL.verde], ["Envejecida", "muchos mayores", COL.gris], ["Inmigración", "llegan muchas personas", COL.morado], ["Urbana", "Londres, París, Madrid", COL.rojo]], 2, 34)}`),
      video: vid("4-PRHsozwrU"),
    },
    {
      html: `<h3>Retos de la población</h3><p>La población de España y de Europa se enfrenta a varios <mark>retos</mark> o desafíos:</p><p>• El <b>envejecimiento</b>: cada vez hay más personas mayores y menos jóvenes. Hacen falta más servicios de salud y de cuidado, y hay que asegurar las <b>pensiones</b>, que se pagan con el trabajo de la población activa.</p><p>• La <b>baja natalidad</b>: muchas familias tienen menos hijos de los que desearían por motivos como la dificultad para encontrar vivienda o un trabajo estable, o para conciliar el trabajo con el cuidado de los hijos.</p><p>• La <b>despoblación rural</b>: muchos pueblos pierden habitantes y servicios.</p><p>• La <b>integración</b> de las personas inmigrantes: que tengan los mismos derechos y oportunidades, aprendan el idioma y participen en la vida de la comunidad. La diversidad de orígenes enriquece la sociedad con nuevas costumbres, comidas, músicas e ideas.</p><p>Para conocer estos retos, los demógrafos dividen la población en grupos según su edad: <b>jóvenes</b> (0 a 14 años), <b>adultos</b> (15 a 64) y <b>mayores</b> (65 o más). La <b>población activa</b> son las personas que trabajan o buscan trabajo.</p>`,
      svg: svg("Cuatro retos de la población: envejecimiento, baja natalidad, despoblación rural e integración", `${tit("Retos de la población")}${filas([["Envejecimiento", "más mayores, pensiones", COL.gris], ["Baja natalidad", "pocos hijos por familia", COL.naranja], ["Despoblación", "pueblos que se vacían", COL.marron], ["Integración", "mismos derechos para todos", COL.verde]], 52, 30, { wa: 96, wb: 130 })}`),
    },
  ],
  figura: {
    titulo: "La población en ocho ideas",
    svg: rejilla([
      ["Censo", "cada 10 años", COL.azul],
      ["Densidad", "hab. ÷ km²", COL.rojo],
      ["Natalidad", "nacimientos", COL.verde],
      ["Mortalidad", "defunciones", COL.gris],
      ["Pirámide", "edad y sexo", COL.morado],
      ["Migraciones", "emigrar, inmigrar", COL.naranja],
      ["Éxodo rural", "del campo a la ciudad", COL.marron],
      ["Envejecida", "España y Europa", "#0e7490"],
    ], 4, 86, "Resumen de la población de España y de Europa"),
  },
  video: vgen("WlVDqAB19o4", "la población de España para niños de primaria"),
  ejemplos: [
    { enunciado: "Un municipio tiene 12.000 habitantes y una superficie de 60 km². ¿Cuál es su densidad?",
      pasos: ["Densidad = habitantes ÷ superficie.", "12.000 ÷ 60 = 200."],
      resultado: "200 hab./km²." },
    { enunciado: "En un pueblo nacieron 15 niños y murieron 40 personas en un año. ¿Cuál fue su crecimiento natural?",
      pasos: ["Crecimiento natural = nacimientos − defunciones.", "15 − 40 = −25."],
      resultado: "−25: crecimiento negativo, la población disminuye (si no llega nadie)." },
    { enunciado: "Una pirámide tiene la base muy estrecha y las barras de 40 a 60 años muy anchas. ¿Qué tipo es?",
      pasos: ["Base estrecha: pocos nacimientos.", "Muchos adultos y mayores."],
      resultado: "Pirámide envejecida, como la de España." },
  ],
  errores: [
    "Pensar que el lugar con más habitantes es siempre el más densamente poblado: depende también de la superficie.",
    "Confundir emigrante e inmigrante: se emigra «desde» y se inmigra «hacia».",
    "Leer la pirámide al revés: abajo están los más jóvenes y arriba los mayores.",
    "Creer que si el crecimiento natural es negativo la población siempre baja: la inmigración puede compensarlo.",
    "Confundir esperanza de vida con la edad máxima que se puede vivir: es una media.",
  ],
  ejercicios: [
    { q: "¿Qué diferencia hay entre el censo y el padrón?", sol: "El censo se hace cada diez años en todo el país; el padrón es la lista de vecinos de cada ayuntamiento y se actualiza siempre." },
    { q: "Calcula la densidad de un territorio de 2.000 km² con 50.000 habitantes.", sol: "50.000 ÷ 2.000 = 25 hab./km²." },
    { q: "Escribe tres zonas de España muy pobladas y tres poco pobladas.", sol: "Muy pobladas: Madrid, costa mediterránea, Canarias. Poco pobladas: Soria, Teruel, Cuenca." },
    { q: "Define natalidad, mortalidad y crecimiento natural.", sol: "Nacimientos en un año; defunciones en un año; nacimientos menos defunciones." },
    { q: "Escribe tres causas del aumento de la esperanza de vida.", sol: "Avances médicos, sanidad pública, mejor alimentación (también agua potable e higiene)." },
    { q: "Dibuja cómo es una pirámide joven y una envejecida.", sol: "Joven: base ancha y cima estrecha. Envejecida: base estrecha y parte media ancha." },
    { q: "Escribe dos causas por las que la gente emigra.", sol: "Buscar trabajo, huir de guerras o persecuciones (también estudios o desastres)." },
    { q: "¿Qué es el éxodo rural? ¿Qué consecuencia tuvo?", sol: "La marcha de la población del campo a la ciudad; dejó muchos pueblos casi vacíos." },
    { q: "Escribe tres rasgos de la población europea.", sol: "Baja natalidad, alta esperanza de vida, envejecimiento (también inmigración y mayoría urbana)." },
    { q: "Propón dos medidas para frenar la despoblación rural.", sol: "Internet rápido para teletrabajar y servicios como colegios y centros de salud." },
  ],
  quiz: [
    { q: "La ciencia que estudia la población es la…", o: ["geología", "astronomía", "demografía"], a: 2, e: "Demografía." },
    { q: "España tiene unos…", o: ["49 millones de habitantes", "490 millones", "4 millones"], a: 0, e: "Unos 49 millones." },
    { q: "La densidad se mide en…", o: ["hab./km²", "años", "km"], a: 0, e: "Habitantes por km²." },
    { q: "Crecimiento natural =", o: ["habitantes ÷ km²", "inmigrantes − emigrantes", "nacimientos − defunciones"], a: 2, e: "Nacimientos menos defunciones." },
    { q: "La esperanza de vida en España es de unos…", o: ["84 años", "100 años", "60 años"], a: 0, e: "Unos 84 años." },
    { q: "En la pirámide, los hombres están…", o: ["a la derecha", "arriba", "a la izquierda"], a: 2, e: "A la izquierda." },
    { q: "La pirámide de España es…", o: ["envejecida", "joven", "plana"], a: 0, e: "Envejecida." },
    { q: "Quien llega a vivir a un país es…", o: ["inmigrante", "emigrante", "turista"], a: 0, e: "Inmigrante." },
    { q: "El paso del campo a la ciudad es el…", o: ["padrón", "censo", "éxodo rural"], a: 2, e: "Éxodo rural." },
    { q: "Los datos de población de España los publica el…", o: ["BOE", "INE", "AEMET"], a: 1, e: "El INE." },
  ],
  examen: [
    { q: "Una provincia con muy poca densidad es…", o: ["Soria", "Barcelona", "Madrid"], a: 0, e: "Soria." },
    { q: "Una pirámide de base ancha indica…", o: ["mucha natalidad", "mucho envejecimiento", "poca población"], a: 0, e: "Mucha natalidad." },
    { q: "Una persona que huye de una guerra es…", o: ["turista", "refugiada", "jubilada"], a: 1, e: "Refugiada." },
    { q: "Un rasgo de la población europea es…", o: ["la mayoría rural", "la baja natalidad", "la baja esperanza de vida"], a: 1, e: "Baja natalidad." },
  ],
  feynman: ["Qué es la densidad de población y cómo se calcula", "Cómo se lee una pirámide de población", "Por qué la población de España crece aunque mueran más personas de las que nacen"],
  mapa: mapa("POBLACIÓN", "var(--pri)", [
    ["Medir", "censo · padrón · densidad", COL.azul],
    ["Cambios", "natalidad · mortalidad · migraciones", COL.verde],
    ["Estructura", "pirámide · envejecimiento", COL.morado],
    ["Reparto", "ciudad · campo · España vaciada", COL.naranja],
  ], 260),
  tarjetas: [
    ["Censo", "Recuento de toda la población cada diez años."],
    ["Densidad de población", "Habitantes por kilómetro cuadrado."],
    ["Natalidad", "Número de nacimientos en un año."],
    ["Mortalidad", "Número de defunciones en un año."],
    ["Crecimiento natural", "Nacimientos menos defunciones."],
    ["Esperanza de vida", "Años que se espera que viva de media una persona."],
    ["Pirámide de población", "Gráfico de la población por edad y sexo."],
    ["Inmigración", "Llegada de personas a un lugar para vivir en él."],
  ],
  familias: ["Haced el árbol de la familia y apuntad dónde nació cada persona: ¿hay migraciones?", "Buscad en el INE cuántos habitantes tiene vuestro municipio.", "Calculad juntos la densidad de vuestra comunidad autónoma.", "Preguntad a los abuelos cómo era su pueblo o barrio de pequeños."],
  profesores: PROF("Ciencias Sociales: la población, conceptos demográficos básicos (densidad, natalidad, mortalidad, crecimiento natural, esperanza de vida); pirámides de población; movimientos migratorios; población de España y de Europa; despoblación rural", ["Calcular densidades con datos reales del INE de varias provincias.", "Construir la pirámide de población de la clase y sus familias.", "Entrevista a una persona que haya emigrado o inmigrado."]),
  fuentes: [RD, { t: "INE: Instituto Nacional de Estadística", url: "https://www.ine.es/" }, wiki("Demografía de España", "Demografía_de_España"), wiki("Demografía de Europa", "Demografía_de_Europa")],
  revisado: REV,
};

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Calcular densidades y tasas de natalidad y mortalidad", "Explicar por qué ha aumentado tanto la esperanza de vida", "Conocer la historia de la emigración y la inmigración en España", "Describir el crecimiento de la población mundial"],
  lectura: { titulo: "El ministro que quiso contarnos a todos", html: `<p>En el año 1787, el rey Carlos III quería saber algo que nadie sabía con exactitud: ¿cuántas personas vivían en España? Sin ese dato era muy difícil gobernar, cobrar impuestos o saber cuántos soldados se podían reunir.</p><p>Su ministro, el <b>conde de Floridablanca</b>, organizó un gran recuento. Envió a todos los pueblos y ciudades unos formularios iguales. Los párrocos y las autoridades de cada lugar tenían que anotar cuántos habitantes había, separados por sexo y por edades, si estaban casados o solteros, y a qué se dedicaban: labradores, artesanos, comerciantes, religiosos…</p><p>Reunir y sumar toda aquella información, escrita a mano en miles de papeles, llevó muchísimo trabajo. El resultado fue que en España vivían unos <b>10,4 millones de personas</b>.</p><p>Aquel recuento, conocido como el <b>censo de Floridablanca</b>, está considerado uno de los primeros censos modernos de España, porque contó a las personas una por una y con el mismo método en todo el territorio.</p><p>Hoy, el Instituto Nacional de Estadística sigue contando a la población, pero con ordenadores y registros. Y el resultado es muy diferente: en España vivimos casi cinco veces más personas que en tiempos de Floridablanca.</p>` },
  tras: {
    "La densidad de población": [
      ["Calcular la densidad", `<p>La densidad de población se calcula <b>dividiendo el número de habitantes entre la superficie</b> en kilómetros cuadrados:</p><p style="text-align:center"><b>densidad = habitantes : km²</b></p><p>El resultado se expresa en <b>habitantes por kilómetro cuadrado</b> (hab/km²) e indica cuántas personas vivirían en cada kilómetro cuadrado si estuvieran repartidas por igual.</p><ul><li><b>España</b> tiene unos 49 millones de habitantes y unos 506 000 km². Su densidad es 49 000 000 : 506 000 ≈ <b>97 hab/km²</b>.</li><li>La <b>Comunidad de Madrid</b> tiene unos 7 millones de habitantes en unos 8 000 km²: alrededor de <b>870 hab/km²</b>, una de las densidades más altas del país.</li><li>La provincia de <b>Soria</b> tiene unos 90 000 habitantes en más de 10 000 km²: menos de <b>10 hab/km²</b>, una de las más bajas de Europa.</li></ul><p>La densidad es una media: no dice cómo se reparte la población dentro de cada territorio. En una provincia puede haber una ciudad muy poblada y comarcas casi vacías.</p><p>En el mundo hay contrastes enormes: Mónaco, un pequeño país junto a Francia, supera los 15 000 hab/km², mientras que Mongolia no llega a 3.</p>`,
        H6.barras("Densidad (hab/km²)", [["Soria", 9, cRO, "< 10"], ["España", 97, cNA, "97"], ["Madrid", 870, cAZ, "870"]], 870)],
    ],
    "La esperanza de vida": [
      ["¿Por qué vivimos más años?", `<p>A principios del siglo XX, la esperanza de vida al nacer en España era de unos <b>35 años</b>. Eso no significa que la gente muriera a los 35: muchos llegaban a viejos, pero morían muchísimos bebés y niños pequeños, y eso bajaba mucho la media. Hoy la esperanza de vida en España es de unos <b>84 años</b>, una de las más altas del mundo. ¿Qué ha cambiado?</p><ul><li><b>Agua potable y alcantarillado</b>: el agua sucia transmitía enfermedades muy graves, como el cólera o el tifus.</li><li><b>Vacunas</b>: han hecho desaparecer o casi desaparecer enfermedades como la viruela, la polio o la difteria.</li><li><b>Antibióticos</b>: desde mediados del siglo XX curan infecciones que antes eran mortales.</li><li><b>Mejor alimentación</b>: ya no hay hambrunas y la dieta es más variada.</li><li><b>Sanidad pública</b>: hospitales, centros de salud y cuidados durante el embarazo y el parto, al alcance de toda la población.</li></ul><p>Las mujeres viven de media algunos años más que los hombres. Los científicos creen que influyen causas biológicas y también hábitos, como el tabaco o los accidentes, que han afectado más a los hombres.</p>`,
        L6.filas("Esperanza de vida en España", [["hacia 1900", "unos 35 años", cRO], ["hacia 1950", "unos 62 años", cNA], ["hoy", "unos 84 años", cVE], ["clave", "agua, vacunas, sanidad", cAZ]])],
    ],
    "Las migraciones": [
      ["Historias de ida y vuelta", `<p>España ha sido, a lo largo de su historia, tierra de <b>emigrantes</b> y tierra de <b>inmigrantes</b>.</p><ul><li>Entre finales del siglo XIX y comienzos del XX, <b>millones</b> de españoles, sobre todo gallegos, asturianos, cántabros y canarios, emigraron a <b>América</b>: Argentina, Cuba, Uruguay, México, Venezuela… Algunos volvieron ricos y construyeron en sus pueblos grandes casas de colores con jardines y palmeras: las <b>casas de indianos</b>, que todavía se pueden ver.</li><li>Tras la Guerra Civil, muchas personas tuvieron que exiliarse por motivos políticos.</li><li>En los años sesenta y setenta, cientos de miles de españoles emigraron a <b>Europa</b>, a Alemania, Francia o Suiza, para trabajar en fábricas, y enviaban dinero a sus familias.</li><li>Al mismo tiempo, millones de personas se trasladaron del campo a las ciudades: el <b>éxodo rural</b>.</li><li>Desde finales del siglo XX, España se ha convertido en un país que recibe <b>inmigrantes</b> de América Latina, África, Europa y Asia. Hoy, una parte importante de la población ha nacido en otro país.</li></ul><p>Conocer estas historias ayuda a comprender a quienes hoy llegan buscando una vida mejor, como lo hicieron antes nuestros abuelos y bisabuelos.</p>`,
        L6.filas("España en movimiento", [["1880-1930", "a América", cNA], ["1960-1975", "a Europa", cAZ], ["siglo XX", "del campo a la ciudad", cVE], ["hoy", "llegan inmigrantes", cMO]])],
    ],
  },
  final: [
    ["Las tasas: medir nacimientos y muertes", `<p>Para comparar países o épocas no basta con saber cuántos niños nacen: un país grande tendrá siempre más nacimientos que uno pequeño. Por eso se usan las <b>tasas</b>, que indican cuántos casos hay por cada <b>1 000 habitantes</b>. Se expresan con el símbolo <b>‰</b> (por mil).</p><ul><li><b>Tasa de natalidad</b> = nacimientos : población × 1 000.</li><li><b>Tasa de mortalidad</b> = defunciones : población × 1 000.</li><li><b>Crecimiento natural</b> = tasa de natalidad − tasa de mortalidad.</li></ul><p>Veamos un ejemplo sencillo: en una ciudad de 50 000 habitantes nacen en un año 400 niños y mueren 450 personas.</p><ul><li>Natalidad: 400 : 50 000 × 1 000 = <b>8 ‰</b>.</li><li>Mortalidad: 450 : 50 000 × 1 000 = <b>9 ‰</b>.</li><li>Crecimiento natural: 8 − 9 = <b>−1 ‰</b>. Es negativo: la población disminuye, salvo que lleguen personas de fuera.</li></ul><p>En España, desde hace unos años mueren más personas de las que nacen: en 2023 hubo unos 320 000 nacimientos y más de 430 000 defunciones. Si la población sigue creciendo es gracias a la <b>inmigración</b>.</p>`,
      H6.flujo("Crecimiento natural", ["Natalidad|8 ‰", "− Mortalidad|9 ‰", "= −1 ‰"], cNA)],
    ["La población del mundo", `<p>La población mundial ha crecido de forma espectacular en los últimos dos siglos:</p><ul><li>Hacia el año <b>1800</b> había en el mundo unos <b>1 000 millones</b> de personas.</li><li>Hacia <b>1960</b>, unos 3 000 millones.</li><li>El 15 de noviembre de <b>2022</b>, según Naciones Unidas, la humanidad alcanzó los <b>8 000 millones</b>.</li></ul><p>Este crecimiento se debe sobre todo a que la mortalidad bajó mucho gracias a los avances en medicina, higiene y alimentación, mientras que en muchos países seguían naciendo muchos niños.</p><p>La población no se reparte por igual. <b>Asia</b> concentra más de la mitad de los habitantes del planeta. Desde 2023, el país más poblado del mundo es <b>India</b>, que ha superado a <b>China</b>; los dos tienen más de 1 400 millones de habitantes. <b>África</b> es el continente que más rápido crece, con una población muy joven. <b>Europa</b>, en cambio, tiene una población envejecida y casi no crece.</p><p>Los expertos calculan que la población mundial seguirá aumentando durante unas décadas más y que después se estabilizará. El gran reto es que haya alimentos, agua, educación y trabajo para todos sin agotar los recursos del planeta.</p>`,
      H6.barras("Población mundial (millones)", [["1800", 1000, cNA, "1 000"], ["1960", 3000, cAZ, "3 000"], ["2022", 8000, cRO, "8 000"]], 8000), ["IAIe3nOSj3Y", "Especial 8000 millones de habitantes", "Un Mundo Inmenso", 530172]],
  ],
  ejemplos: [
    ["Una comarca tiene 12 000 habitantes y 600 km². ¿Cuál es su densidad?", ["12 000 : 600."], "20 hab/km²."],
    ["En un pueblo de 2 000 habitantes nacen 16 niños en un año. ¿Cuál es la tasa de natalidad?", ["16 : 2 000 × 1 000."], "8 ‰."],
  ],
  errores: ["Pensar que una esperanza de vida de 35 años significaba que todos morían a esa edad.", "Comparar el número de nacimientos de países de distinto tamaño en lugar de sus tasas."],
  ejercicios: [
    ["b", "¿Cómo se calcula la densidad de población?", "Habitantes : superficie en km²."],
    ["b", "¿Cuántos habitantes tenía España según el censo de Floridablanca?", "Unos 10,4 millones."],
    ["b", "¿Cuál es la esperanza de vida en España hoy, aproximadamente?", "Unos 84 años."],
    ["b", "¿Qué son las casas de indianos?", "Casas construidas por emigrantes que volvieron ricos de América."],
    ["b", "¿Cuándo alcanzó la humanidad los 8 000 millones de personas?", "En noviembre de 2022."],
    ["m", "Calcula la densidad de una provincia con 300 000 habitantes y 10 000 km².", "30 hab/km²."],
    ["m", "Di tres causas del aumento de la esperanza de vida.", "Agua potable, vacunas y antibióticos (también alimentación y sanidad)."],
    ["m", "¿A qué países emigraron muchos españoles en los años sesenta?", "A Alemania, Francia y Suiza."],
    ["m", "¿Qué país es el más poblado del mundo desde 2023?", "India."],
    ["m", "¿Qué continente concentra más de la mitad de la población mundial?", "Asia."],
    ["a", "En una ciudad de 50 000 habitantes nacen 400 personas y mueren 450 en un año. Calcula el crecimiento natural.", "8 ‰ − 9 ‰ = −1 ‰."],
    ["a", "Si en España mueren más personas de las que nacen, ¿por qué sigue creciendo la población?", "Por la llegada de inmigrantes."],
    ["a", "¿Por qué la densidad media puede engañar?", "Porque es una media y no muestra cómo se reparte la población."],
    ["a", "¿Por qué crece tan rápido la población de África?", "Porque la natalidad sigue siendo alta y la población es muy joven."],
  ],
  quiz: [
    ["La densidad de España es de unos…", ["97 hab/km²", "9 hab/km²", "970 hab/km²"], "Densidad."],
    ["Las tasas se expresan por cada…", ["1 000 habitantes", "10 habitantes", "millón de km²"], "‰."],
    ["Hacia 1900, la esperanza de vida en España era de unos…", ["35 años", "65 años", "84 años"], "Esperanza de vida."],
    ["Muchos gallegos y asturianos emigraron a finales del siglo XIX a…", ["América", "Asia", "Oceanía"], "Migraciones."],
    ["Hacia 1800 el mundo tenía unos…", ["1 000 millones de habitantes", "8 000 millones", "100 millones"], "Población mundial."],
  ],
  examen: [
    ["El censo de 1787 lo organizó…", ["el conde de Floridablanca", "Felipe II", "Isabel II"], "Lectura."],
    ["Si la natalidad es 7 ‰ y la mortalidad 9 ‰, el crecimiento natural es…", ["−2 ‰", "16 ‰", "2 ‰"], "Resta."],
  ],
  tarjetas: [
    ["Densidad", "Habitantes : km². España ≈ 97; Madrid ≈ 870; Soria < 10 hab/km²."],
    ["Esperanza de vida", "De unos 35 años hacia 1900 a unos 84 hoy: agua, vacunas, sanidad."],
    ["Migraciones", "Emigración a América y Europa; hoy llegan inmigrantes."],
    ["Población mundial", "1 000 millones en 1800; 8 000 millones en 2022; India la más poblada."],
  ],
  glosario: [
    ["Censo", "Recuento oficial de la población."],
    ["Densidad de población", "Habitantes por kilómetro cuadrado."],
    ["Tasa", "Número de casos por cada 1 000 habitantes."],
    ["Tasa de natalidad", "Nacimientos por cada 1 000 habitantes en un año."],
    ["Tasa de mortalidad", "Defunciones por cada 1 000 habitantes en un año."],
    ["Crecimiento natural", "Diferencia entre natalidad y mortalidad."],
    ["Esperanza de vida", "Años que se espera que viva de media una persona al nacer."],
    ["Emigrante", "Persona que se va de su país o región."],
    ["Inmigrante", "Persona que llega a un país o región para vivir."],
    ["Indiano", "Emigrante que volvió de América con fortuna."],
    ["Éxodo rural", "Traslado masivo de población del campo a la ciudad."],
    ["Exilio", "Salida obligada del propio país, a menudo por motivos políticos."],
  ],
  situacion: {
    titulo: "El censo de la clase",
    reto: "La clase hace un pequeño censo de sus familias para descubrir cómo ha cambiado la población en tres generaciones.",
    pasos: ["Diseñad una encuesta anónima: dónde nacieron los alumnos, sus padres y sus abuelos, cuántos hermanos tenían…", "Recoged las respuestas y organizadlas en tablas.", "Calculad medias y porcentajes y haced gráficos y un mapa de lugares de nacimiento.", "Sacad conclusiones sobre migraciones, tamaño de las familias y esperanza de vida, y presentadlas."],
    producto: "Un informe del censo de la clase con tablas, gráficos y un mapa.",
    evaluacion: ["Diseña una encuesta respetuosa y anónima.", "Organiza y representa datos.", "Calcula medias y porcentajes.", "Relaciona los resultados con los cambios de la población española."],
  },
});
