// Biología, Geología y Ciencias Ambientales 1º Bachillerato · La historia de la Tierra (nivel libro).
// Dibujos propios en SVG con las ayudas de _bach1-byg.js.
const { tema, L5, L6, cadena, estratos, marco, T, uid } = require("./_bach1-byg");

// Corte geológico con capas inclinadas, un dique y una discordancia.
function corte() {
  const id = uid("cl");
  let franjas = "";
  for (let a = -90, i = 0; a < 250; a += 30, i++) franjas += `<path d="M${a} 170 L ${a + 60} 85 H ${a + 90} L ${a + 30} 170 Z" fill="${i % 2 ? "var(--pen)" : "var(--inf)"}" fill-opacity=".45"/>`;
  return marco("Corte geológico con capas inclinadas, un dique y una discordancia", `<defs><clipPath id="${id}"><path d="M20 90 Q 60 84 100 90 T 180 90 T 240 90 V 160 H 20 Z"/></clipPath></defs>
  <g clip-path="url(#${id})">${franjas}</g>
  <rect x="20" y="36" width="220" height="27" fill="var(--leaf)" fill-opacity=".45"/><path d="M20 63 H 240 V 90 Q 220 94 180 90 T 100 90 T 20 90 Z" fill="var(--sun)" fill-opacity=".5"/>
  <rect x="170" y="92" width="11" height="68" fill="var(--red)" fill-opacity=".75"/>
  <path d="M20 90 Q 60 84 100 90 T 180 90 T 240 90" fill="none" stroke="var(--red)" stroke-width="2.2"/>
  ${T(130, 24, "Corte geológico", { fs: 12, b: true })}${T(46, 130, "A", { fs: 14, b: true })}${T(196, 130, "D", { fs: 14, b: true, c: "var(--red)" })}${T(130, 81, "B", { fs: 13, b: true })}${T(130, 54, "C", { fs: 13, b: true })}
  ${T(130, 174, "A, D, erosión (discordancia), B y C", { fs: 10.5 })}`);
}

module.exports = tema({
  titulo: "La historia de la Tierra",
  minutos: 115,
  secciones: [4, 3, 5],
  objetivos: [
    "Comprender la magnitud del tiempo geológico y los principios del actualismo y el uniformismo",
    "Aplicar los principios de la estratigrafía para ordenar acontecimientos en un corte geológico",
    "Explicar la formación de los fósiles y su utilidad para la datación relativa y la reconstrucción del pasado",
    "Aplicar el fundamento de la datación radiométrica para calcular edades absolutas",
    "Describir las grandes divisiones de la escala del tiempo geológico y sus acontecimientos principales",
    "Relacionar las extinciones masivas con sus causas y valorar la historia geológica de la Península Ibérica",
  ],
  claves: ["tiempo geológico", "actualismo", "uniformismo", "catastrofismo", "estrato", "principio de superposición", "discordancia", "fósil", "fósil guía", "datación relativa", "datación absoluta", "isótopo radiactivo", "semivida", "eón", "era", "extinción masiva", "Precámbrico", "Paleozoico", "Mesozoico", "Cenozoico"],
  pregunta: {
    texto: "Si comprimimos toda la historia de la Tierra en un solo año, ¿en qué momento aparecería el ser humano?",
    respuesta: "En ese «calendario cósmico», la Tierra se forma el 1 de enero y hoy es la medianoche del 31 de diciembre. Las primeras bacterias aparecen en marzo, los animales grandes a mediados de noviembre, los dinosaurios desaparecen el 26 de diciembre y nuestra especie, <i>Homo sapiens</i>, aparece el 31 de diciembre a las <mark>23:37</mark>. Toda la historia escrita ocupa los últimos 40 segundos del año. La Tierra tiene unos 4.567 millones de años: es el <b>tiempo profundo</b>.",
  },
  lectura: {
    titulo: "El reloj escondido en los átomos",
    html: `<p>Durante siglos, nadie supo cuántos años tenía la Tierra. En el siglo XVII, el arzobispo James Ussher sumó las generaciones de la Biblia y concluyó que el mundo se había creado en el año 4004 antes de Cristo. En el siglo XIX, los geólogos observaron que los ríos depositan apenas unos milímetros de sedimento al año y que había capas de roca de kilómetros de espesor: la Tierra debía de tener cientos de millones de años. El físico Lord Kelvin calculó cuánto tardaría el planeta en enfriarse desde un estado fundido y obtuvo entre 20 y 400 millones de años, una cifra que preocupó a Darwin, que necesitaba mucho más tiempo para la evolución.</p><p>El problema se resolvió con un descubrimiento inesperado: la radiactividad. A principios del siglo XX se comprendió que el calor de la desintegración radiactiva mantenía caliente el interior de la Tierra, lo que invalidaba el cálculo de Kelvin, y que los átomos radiactivos se desintegran a un ritmo constante, como un reloj. En 1956, Clair Patterson midió el plomo de los meteoritos y calculó una edad para la Tierra de 4.550 millones de años, muy cercana a la aceptada hoy. En este tema aprenderás a leer el tiempo en las rocas y a recorrer la historia del planeta.</p>`,
  },
  bloques: [
    { h: "El tiempo geológico: catastrofismo y uniformismo", p: [
      "El <mark>tiempo geológico</mark> abarca desde la formación de la Tierra, hace unos 4.567 millones de años (Ma), hasta la actualidad. Su enormidad es difícil de imaginar: si cada año fuera un milímetro, la historia de la Tierra mediría más de 4.500 kilómetros, y toda la historia escrita de la humanidad ocuparía apenas cinco metros. Comprender este <b>tiempo profundo</b> fue uno de los grandes logros de la geología, porque permite explicar que procesos muy lentos, como la erosión de una montaña o la evolución de las especies, produzcan cambios enormes.",
      "En el siglo XVIII y principios del XIX predominaba el <mark>catastrofismo</mark>, defendido por Georges Cuvier, según el cual la historia de la Tierra había estado marcada por catástrofes súbitas y globales, como grandes inundaciones, que explicaban la desaparición de las faunas fósiles. Frente a él, James Hutton y después Charles Lyell defendieron el <mark>uniformismo</mark>: los procesos geológicos del pasado fueron los mismos que actúan hoy y con una intensidad similar. De ahí el principio del <b>actualismo</b>, resumido en la frase «el presente es la clave del pasado»: para interpretar una roca antigua, comparamos con los procesos actuales. Hoy se acepta un <b>uniformismo moderado</b>: los procesos son los mismos, pero su intensidad ha variado, y ha habido episodios catastróficos excepcionales, como impactos de meteoritos o grandes erupciones, responsables de extinciones masivas.",
    ], svg: L6.compara("Catastrofismo y uniformismo", ["Catastrofismo", "var(--red)", ["Cuvier", "cambios súbitos", "catástrofes globales", "Tierra joven"]], ["Uniformismo", "var(--leaf)", ["Hutton y Lyell", "procesos lentos", "presente = clave", "tiempo profundo"]]) },
    { h: "Los principios de la estratigrafía", p: [
      "La <b>estratigrafía</b> estudia los estratos, las capas de rocas sedimentarias, para reconstruir la historia de una región. Se basa en varios principios, muchos de ellos enunciados por Nicolás Steno en el siglo XVII. El <mark>principio de superposición</mark> establece que, en una serie de estratos no alterada, cada estrato es más moderno que el que tiene debajo y más antiguo que el que tiene encima. El <b>principio de horizontalidad original</b> dice que los sedimentos se depositan en capas horizontales; si los encontramos inclinados o plegados, es que se deformaron después. El <b>principio de continuidad lateral</b> afirma que un estrato tiene la misma edad en toda su extensión, aunque esté interrumpido por la erosión, lo que permite relacionar estratos de lugares distintos.",
      "Otros principios permiten ordenar procesos no sedimentarios. El <mark>principio de las relaciones de corte</mark> o de intersección dice que cualquier estructura que corta a otra, como una falla, un dique o una intrusión, es posterior a ella. El <b>principio de inclusión</b> establece que los fragmentos de roca incluidos en otra son más antiguos que ella. Y el <b>principio de sucesión faunística</b>, formulado por William Smith a comienzos del siglo XIX, establece que los fósiles se suceden en un orden determinado y que los estratos con los mismos fósiles tienen la misma edad. Smith lo aplicó para dibujar el primer mapa geológico de Inglaterra.",
    ], svg: estratos("Serie de estratos ordenados por el principio de superposición", [["Arenisca: el más moderno", "var(--sun)"], ["Caliza con fósiles", "var(--pen)"], ["Lutita", "var(--inf)"], ["Conglomerado: el más antiguo", "var(--red)"]]), v: ["hisT-b", "El principio de superposición"] },
    { h: "Discordancias y cortes geológicos", p: [
      "Una serie de estratos depositados sin interrupción es una serie <b>concordante</b>. Pero a menudo la sedimentación se interrumpe y falta parte del registro: se forma una <mark>discordancia</mark>, una superficie de erosión o de no sedimentación que separa dos conjuntos de estratos de edades diferentes. En una <b>discordancia angular</b>, los estratos inferiores están inclinados o plegados y los superiores son horizontales: indica que hubo sedimentación, deformación, elevación, erosión y, de nuevo, hundimiento y sedimentación, como en el famoso afloramiento de Siccar Point que estudió Hutton. En una <b>disconformidad</b>, los estratos son paralelos, pero hay una superficie de erosión entre ellos.",
      "Con estos principios se pueden interpretar los <mark>cortes geológicos</mark>, dibujos que representan las rocas y estructuras en un plano vertical. El procedimiento es: identificar los estratos y ordenarlos por superposición, de abajo arriba; localizar las deformaciones (pliegues, fallas) y situarlas después de las capas a las que afectan; aplicar las relaciones de corte a diques e intrusiones; reconocer las discordancias como períodos de erosión; y escribir la secuencia completa de acontecimientos. En el corte del dibujo, primero se depositaron las capas A, después se inclinaron, el dique D las atravesó, la erosión las arrasó y finalmente se depositaron B y C. El dique no corta B, así que es anterior a ella.",
    ], svg: corte() },
    { h: "Los fósiles y la fosilización", p: [
      "Los <mark>fósiles</mark> son restos de seres vivos o señales de su actividad conservados en las rocas. Pueden ser <b>restos</b> del organismo (conchas, huesos, dientes, troncos), <b>moldes</b> o impresiones que reproducen su forma, e <b>icnofósiles</b>, huellas de su actividad, como pisadas, galerías, huevos o excrementos. En España son famosos los icnitas de dinosaurio de La Rioja y Soria. La <b>fosilización</b> es un proceso excepcional: la mayoría de los organismos se descomponen o son devorados tras morir. Para que un organismo fosilice, debe tener partes duras y quedar <b>enterrado rápidamente</b> por sedimentos finos, en un ambiente con poco oxígeno que frene la descomposición.",
      "Una vez enterrado, el resto sufre cambios químicos. En la <b>mineralización</b>, la materia original es sustituida o rellenada por minerales, como sílice, calcita o pirita, que reproducen su estructura con gran detalle, como en la madera petrificada. Otras veces, la materia orgánica se reduce a una película de carbono (<b>carbonificación</b>), como en las hojas fósiles. Excepcionalmente se conservan las partes blandas, por ejemplo en el ámbar, en el hielo o en el asfalto. Los yacimientos de conservación excepcional, como el de Burgess Shale (Canadá) o el de Las Hoyas (Cuenca), son ventanas únicas al pasado. El estudio de los fósiles, la <b>paleontología</b>, permite conocer la evolución de la vida, los ambientes y climas del pasado y la edad de las rocas.",
    ], svg: cadena("Etapas de la fosilización", [["El organismo muere", "var(--muted)"], ["Queda enterrado", "var(--sun)"], ["Se mineraliza", "var(--pen)"]], ["", ""], "Cómo se forma un fósil"), v: ["hisT-c", "¿Qué es un fósil?"] },
    { h: "La datación relativa y los fósiles guía", p: [
      "La <mark>datación relativa</mark> ordena los acontecimientos geológicos en el tiempo, indicando qué ocurrió antes y qué después, sin dar una edad en años. Utiliza los principios de la estratigrafía y los fósiles. Los <mark>fósiles guía</mark> o característicos permiten identificar con precisión la edad de los estratos y correlacionar rocas de lugares muy alejados. Para ser buenos fósiles guía deben cumplir tres condiciones: haber vivido durante un intervalo de tiempo <b>corto</b>, haber tenido una <b>amplia distribución geográfica</b>, y ser <b>abundantes</b> y fáciles de reconocer. Ejemplos clásicos son los trilobites y los graptolites para el Paleozoico, los ammonites para el Mesozoico y los nummulites, foraminíferos de forma de moneda, para el Paleógeno.",
      "Otros fósiles, llamados <b>fósiles de facies</b>, no sirven para datar, pero indican el ambiente en que se formó la roca. Por ejemplo, los corales que forman arrecifes viven en mares cálidos, someros y de aguas claras; las plantas terrestres indican sedimentación continental, y ciertos foraminíferos indican la profundidad del agua. Combinando los fósiles con el tipo de roca se pueden reconstruir paisajes del pasado: es la <b>paleogeografía</b>. Además, la composición isotópica del oxígeno de los caparazones fósiles permite estimar la temperatura del agua en que vivieron, una herramienta clave para estudiar los climas del pasado o <b>paleoclimas</b>.",
    ], svg: L6.tabla("Fósiles guía y la era que caracterizan", ["Fósil", "Era", "Grupo"], [["Trilobites", "Paleozoico", "artrópodo"], ["Graptolites", "Paleozoico", "colonial"], ["Ammonites", "Mesozoico", "cefalópodo"], ["Nummulites", "Cenozoico", "foraminífero"]]) },
    { h: "La datación absoluta", p: [
      "La <mark>datación absoluta</mark> o numérica asigna una edad en años a una roca o un acontecimiento. El método más importante es la <b>datación radiométrica</b>, basada en la desintegración de los <b>isótopos radiactivos</b>. Un isótopo radiactivo, llamado padre, se transforma espontáneamente en otro, llamado hijo, a un ritmo constante que no depende de la temperatura ni de la presión. Ese ritmo se expresa mediante el <mark>período de semidesintegración</mark> o <b>semivida</b>: el tiempo necesario para que se desintegre la mitad de los átomos padre presentes. Tras una semivida queda el 50 % del isótopo padre; tras dos, el 25 %; tras tres, el 12,5 %, y así sucesivamente.",
      "Midiendo la proporción entre isótopos padre e hijo en un mineral se calcula el tiempo transcurrido desde que se formó. Cada par de isótopos se usa para un intervalo de edades: el <b>carbono-14</b>, con una semivida de 5.730 años, sirve para restos orgánicos de menos de unos 50.000 años, como huesos, madera o restos arqueológicos; el <b>potasio-40</b>, que se transforma en argón-40 con una semivida de 1.250 Ma, y el <b>uranio-238</b>, que se transforma en plomo-206 con una semivida de 4.470 Ma, sirven para rocas antiguas. Las mejores rocas para datar son las magmáticas, porque su reloj se pone a cero cuando cristalizan. Existen otros métodos, como contar anillos de los árboles (dendrocronología) o capas anuales de sedimentos lacustres (varvas).",
    ], svg: L5.graf("Desintegración radiactiva: el isótopo padre se reduce a la mitad en cada semivida", "semividas (0 a 4)", "% de isótopos", [
      { p: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1].map((x) => [x, Math.pow(2, -4 * x)]), c: "var(--pen)", t: "padre" },
      { p: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1].map((x) => [x, 1 - Math.pow(2, -4 * x)]), c: "var(--red)", t: "hijo" },
    ], `<path d="M90 145 V 87.5 M140 145 V 116" stroke="var(--muted)" stroke-dasharray="3 3"/>${T(94, 138, "50 %", { fs: 9.5, c: "var(--muted)", a: "start" })}${T(144, 138, "25 %", { fs: 9.5, c: "var(--muted)", a: "start" })}`) },
    { h: "La escala del tiempo geológico", p: [
      "Combinando la datación relativa y la absoluta, los geólogos han construido la <mark>escala del tiempo geológico</mark>, que divide la historia de la Tierra en unidades jerárquicas: <b>eones</b>, <b>eras</b>, <b>períodos</b> y épocas. Los límites entre unidades se sitúan en cambios importantes del registro fósil, a menudo extinciones masivas, y su edad se establece mediante datación radiométrica. La Comisión Internacional de Estratigrafía revisa y publica periódicamente la tabla oficial.",
      "Se distinguen cuatro eones. El <b>Hádico</b> (4.567-4.000 Ma) apenas ha dejado rocas. El <b>Arcaico</b> (4.000-2.500 Ma) y el <b>Proterozoico</b> (2.500-541 Ma) forman, junto con el Hádico, el antiguo <mark>Precámbrico</mark>, que abarca casi el 90 % de la historia del planeta. El <b>Fanerozoico</b> («vida visible»), desde hace 541 Ma, se divide en tres eras: el <b>Paleozoico</b> (541-252 Ma), con seis períodos: Cámbrico, Ordovícico, Silúrico, Devónico, Carbonífero y Pérmico; el <b>Mesozoico</b> (252-66 Ma), con el Triásico, el Jurásico y el Cretácico; y el <b>Cenozoico</b> (66 Ma-actualidad), con el Paleógeno, el Neógeno y el Cuaternario. Algunos científicos proponen reconocer una nueva época, el <b>Antropoceno</b>, marcada por la influencia humana, aunque en 2024 la propuesta no fue aprobada oficialmente.",
    ], svg: L6.linea("Grandes divisiones del tiempo geológico", [["4.567 Ma", "Origen"], ["4.000 Ma", "Arcaico"], ["541 Ma", "Paleozoico"], ["252 Ma", "Mesozoico"], ["66 Ma", "Cenozoico"]]) },
    { h: "El Precámbrico", p: [
      "Durante el <mark>Precámbrico</mark> se formaron la Tierra y la Luna, la corteza, los océanos y la atmósfera, y apareció la vida. La Tierra primitiva era un planeta muy caliente, sometido a un intenso bombardeo de meteoritos, con una atmósfera sin oxígeno, formada por vapor de agua, CO₂ y nitrógeno. Hace unos 4.500 Ma, el impacto de un cuerpo del tamaño de Marte arrancó material que formó la Luna. Los minerales más antiguos conocidos, unos cristales de circón de Australia, tienen 4.400 Ma, y las rocas más antiguas, unos 4.000 Ma.",
      "Las primeras pruebas de vida son estructuras de hace unos 3.500 Ma llamadas <mark>estromatolitos</mark>, formadas por capas de cianobacterias que atrapaban sedimentos; aún hoy se forman en algunas lagunas de Australia. Las cianobacterias realizaban la fotosíntesis y liberaban oxígeno, que primero se combinó con el hierro disuelto en los océanos y formó las <b>formaciones de hierro bandeado</b>, principal mena de hierro del mundo. Hace unos 2.400 Ma se produjo la <b>Gran Oxidación</b>: el oxígeno empezó a acumularse en la atmósfera, lo que permitió la formación de la capa de ozono. Hace unos 2.000 Ma surgieron las primeras células eucariotas y, hacia el final del eón, se produjeron glaciaciones globales, llamadas «Tierra bola de nieve». Tras ellas apareció la <b>fauna de Ediacara</b>, hace unos 575 Ma, los primeros animales pluricelulares conocidos, de cuerpo blando.",
    ], svg: L6.linea("Hitos del Precámbrico", [["4.500 Ma", "Formación de la Luna"], ["3.500 Ma", "Estromatolitos"], ["2.400 Ma", "Gran Oxidación"], ["2.000 Ma", "Eucariotas"], ["575 Ma", "Ediacara"]]) },
    { h: "El Paleozoico", p: [
      "El <mark>Paleozoico</mark> comenzó hace 541 Ma con la <b>explosión cámbrica</b>: en pocos millones de años aparecieron casi todos los grandes grupos de animales actuales, muchos de ellos con esqueletos y caparazones, lo que facilitó su fosilización. Los mares se llenaron de <b>trilobites</b>, braquiópodos y equinodermos. En el Ordovícico aparecieron los primeros vertebrados, peces sin mandíbula, y en el Silúrico las primeras plantas terrestres, gracias a la protección de la capa de ozono. En el Devónico, llamado la «edad de los peces», aparecieron los peces con mandíbula y, al final, los primeros anfibios, que conquistaron la tierra firme.",
      "El <b>Carbonífero</b> fue un período de clima cálido y húmedo, con extensos bosques pantanosos de helechos arborescentes, colas de caballo y licopodios gigantes. Sus restos, enterrados, formaron los grandes yacimientos de <b>carbón</b>, como los de Asturias y León. Aparecieron los reptiles, con el huevo amniota, que permitió independizarse del agua, y hubo insectos gigantes, como libélulas de 70 cm, favorecidos por el alto nivel de oxígeno. En el Pérmico, los continentes se unieron formando <b>Pangea</b> durante la orogenia varisca, el clima se volvió más árido y se formaron grandes desiertos. El Paleozoico terminó hace 252 Ma con la mayor extinción de la historia.",
    ], svg: L5.ficha("Acontecimientos del Paleozoico", "Paleozoico (541-252 Ma)", ["Explosión cámbrica", "Plantas y animales en tierra", "Bosques del Carbonífero", "Pangea y orogenia varisca"], "var(--pen)") },
    { h: "El Mesozoico", p: [
      "El <mark>Mesozoico</mark> (252-66 Ma), la «era de los reptiles», comenzó con la recuperación de la vida tras la gran extinción del Pérmico. Durante el <b>Triásico</b> aparecieron los primeros <b>dinosaurios</b> y los primeros <b>mamíferos</b>, de pequeño tamaño. El clima era cálido, sin casquetes polares. Durante el <b>Jurásico</b>, Pangea empezó a fragmentarse y se abrió el Atlántico central; los dinosaurios dominaron los ecosistemas terrestres, con gigantes herbívoros como los saurópodos, y aparecieron las primeras <b>aves</b>, como <i>Archaeopteryx</i>, prueba de su origen a partir de dinosaurios. En los mares abundaban los <b>ammonites</b> y los grandes reptiles marinos, como los ictiosaurios y plesiosaurios.",
      "Durante el <b>Cretácico</b> continuó la separación de los continentes, el nivel del mar alcanzó sus valores más altos y se depositaron grandes cantidades de creta, una caliza formada por caparazones microscópicos. Aparecieron las <b>plantas con flores</b> (angiospermas), que se diversificaron junto con los insectos polinizadores. España es muy rica en yacimientos del Mesozoico: icnitas de dinosaurios en La Rioja, Soria y Asturias, el yacimiento de Las Hoyas en Cuenca con aves primitivas, o los restos de dinosaurios de Morella y del Pirineo. El Mesozoico terminó hace 66 Ma con la extinción de los dinosaurios no avianos, los ammonites y muchos otros grupos.",
    ], svg: L5.ficha("Acontecimientos del Mesozoico", "Mesozoico (252-66 Ma)", ["Dinosaurios y mamíferos", "Fragmentación de Pangea", "Aves y ammonites", "Plantas con flores"], "var(--leaf)") },
    { h: "El Cenozoico", p: [
      "El <mark>Cenozoico</mark> (66 Ma-actualidad) es la «era de los mamíferos». Tras la desaparición de los dinosaurios, los mamíferos ocuparon los nichos ecológicos que habían quedado libres y se diversificaron rápidamente: aparecieron los primates, los cetáceos, los caballos o los grandes carnívoros. Durante el <b>Paleógeno</b> el clima fue muy cálido, pero se fue enfriando a partir de hace unos 34 Ma, cuando se formó el casquete de hielo de la Antártida. La convergencia de África y la India con Eurasia produjo la <b>orogenia alpina</b>, que levantó los Alpes, el Himalaya, los Pirineos y las Béticas. Hace unos 6 Ma, el Mediterráneo quedó aislado del Atlántico y casi se secó, depositando grandes capas de sal.",
      "En el <b>Neógeno</b>, hace unos 7-6 Ma, en África, el linaje humano se separó del de los chimpancés. Aparecieron los australopitecos, bípedos, y hace unos 2,5 Ma el género <i>Homo</i>. El <b>Cuaternario</b>, desde hace 2,58 Ma, se caracteriza por la alternancia de <b>glaciaciones</b> y períodos interglaciares, en los que los glaciares avanzaban y retrocedían. Nuestra especie, <i>Homo sapiens</i>, apareció en África hace unos 300.000 años y se extendió por todo el planeta. El yacimiento de <b>Atapuerca</b> (Burgos) ha proporcionado restos humanos de más de 1,2 Ma, los más antiguos de Europa occidental, y la especie <i>Homo antecessor</i>. Hace unos 11.700 años comenzó el Holoceno, el período cálido actual en el que surgió la agricultura.",
    ], svg: L6.linea("Hitos del Cenozoico", [["66 Ma", "Mamíferos"], ["34 Ma", "Hielo antártico"], ["6 Ma", "Linaje humano"], ["2,6 Ma", "Glaciaciones"], ["0,3 Ma", "Homo sapiens"]]) },
    { h: "Las extinciones masivas", p: [
      "Una <mark>extinción masiva</mark> es la desaparición de una gran proporción de las especies en un intervalo de tiempo geológicamente corto. En el Fanerozoico se reconocen cinco grandes extinciones: a finales del Ordovícico, del Devónico, del Pérmico, del Triásico y del Cretácico. La mayor fue la del <b>Pérmico-Triásico</b>, hace 252 Ma, en la que desapareció en torno al 90 % de las especies marinas, incluidos los últimos trilobites. Se atribuye a las enormes erupciones volcánicas de los Traps Siberianos, que liberaron gases que provocaron un fuerte calentamiento global, la acidificación de los océanos y la falta de oxígeno en el agua.",
      "La extinción del <b>Cretácico-Paleógeno</b> (K-Pg), hace 66 Ma, acabó con los dinosaurios no avianos. En 1980, Luis y Walter Álvarez descubrieron que en el límite entre ambos períodos hay una fina capa de arcilla con mucho iridio, un elemento raro en la corteza pero abundante en los meteoritos. Propusieron que un asteroide de unos 10 km de diámetro chocó contra la Tierra; el cráter de Chicxulub, en México, lo confirmó. El impacto lanzó polvo que bloqueó la luz solar y paró la fotosíntesis. Uno de los mejores afloramientos del límite K-Pg está en Zumaia (Gipuzkoa). Las extinciones abren nuevas oportunidades evolutivas para los supervivientes. Hoy, muchos científicos hablan de una <b>sexta extinción</b>, causada por la actividad humana.",
    ], svg: L5.barras("Porcentaje aproximado de especies marinas extinguidas en las cinco grandes extinciones", "Especies marinas extinguidas", [["Ordovícico", 85, "var(--pen)", "≈ 85 %"], ["Devónico", 75, "var(--leaf)", "≈ 75 %"], ["Pérmico", 90, "var(--red)", "≈ 90 %"], ["Triásico", 75, "var(--sun)", "≈ 75 %"], ["Cretácico", 75, "var(--inf)", "≈ 75 %"]]) },
  ],
  figura: { titulo: "La historia de la Tierra en cuatro ideas", items: [["Principios", "superposición", "relaciones de corte", "discordancias"], ["Fósiles", "fosilización", "fósiles guía", "paleoambientes"], ["Datación", "relativa", "radiométrica", "semivida"], ["Escala", "eones y eras", "extinciones", "4.567 Ma"]] },
  video: ["hisT-a", "Las eras geológicas"],
  ejemplos: [
    ["Un isótopo tiene una semivida de 1.000 años. ¿Qué porcentaje queda tras 3.000 años?", ["3.000 / 1.000 = 3 semividas.", "100 % → 50 % → 25 % → 12,5 %."], "Queda el 12,5 % del isótopo padre."],
    ["Un hueso conserva el 25 % de su C-14 original. ¿Qué edad tiene? (semivida 5.730 años)", ["25 % = (1/2)² → han pasado 2 semividas.", "2 · 5.730 = 11.460 años."], "Unos 11.460 años."],
    ["Un circón contiene igual número de átomos de U-238 que de Pb-206 procedente de su desintegración. Calcula su edad (semivida 4.470 Ma).", ["Si padre = hijo, queda el 50 % del U-238 original.", "Ha pasado 1 semivida: 4.470 Ma."], "Unos 4.470 Ma: uno de los minerales más antiguos de la Tierra."],
    ["En un corte, unas capas plegadas están cortadas por una falla, y sobre ambas hay capas horizontales sin fallar. Ordena los hechos.", ["Depósito de las capas inferiores.", "Plegamiento (horizontalidad original).", "Falla (relaciones de corte).", "Erosión: discordancia angular.", "Depósito de las capas horizontales."], "Depósito, pliegue, falla, erosión y nuevo depósito."],
    ["En la escala de un año para la historia de la Tierra (4.567 Ma), ¿qué día se extinguen los dinosaurios?", ["1 día = 4.567 / 365 ≈ 12,5 Ma.", "66 / 12,5 ≈ 5,3 días antes del final.", "31 dic − 5,3 días ≈ 26 de diciembre."], "Hacia el 26 de diciembre."],
    ["Un estrato contiene ammonites y otro, trilobites. Si no hay deformación, ¿cuál está debajo?", ["Trilobites: Paleozoico. Ammonites: Mesozoico.", "Por sucesión faunística y superposición, el más antiguo está debajo."], "El de trilobites está debajo."],
  ],
  errores: [
    "Creer que los humanos convivieron con los dinosaurios: los separan más de 60 millones de años.",
    "Pensar que el carbono-14 sirve para datar rocas de millones de años: solo sirve hasta unos 50.000 años.",
    "Creer que tras dos semividas no queda isótopo: queda el 25 %.",
    "Pensar que todos los organismos fosilizan: la fosilización es excepcional.",
    "Confundir datación relativa (orden) y absoluta (edad en años).",
    "Creer que el principio de superposición se cumple siempre: las capas pueden estar invertidas por pliegues.",
  ],
  ejercicios: {
    b: [
      ["¿Qué edad tiene la Tierra?", "Unos 4.567 millones de años."],
      ["Enuncia el principio del actualismo.", "Los procesos que actúan hoy actuaron también en el pasado: el presente es la clave del pasado."],
      ["Enuncia el principio de superposición.", "En una serie no alterada, cada estrato es más moderno que el inferior y más antiguo que el superior."],
      ["¿Qué es una discordancia?", "Superficie de erosión o no sedimentación que separa estratos de edades diferentes."],
      ["Cita tres tipos de fósiles.", "Restos (conchas, huesos), moldes e icnofósiles (huellas, galerías)."],
      ["¿Qué condiciones debe cumplir un fósil guía?", "Vida corta, amplia distribución geográfica y abundancia."],
      ["Define semivida.", "Tiempo que tarda en desintegrarse la mitad de los átomos de un isótopo radiactivo."],
      ["Cita las tres eras del Fanerozoico.", "Paleozoico, Mesozoico y Cenozoico."],
      ["¿Qué son los estromatolitos?", "Estructuras formadas por capas de cianobacterias; primeras pruebas de vida (3.500 Ma)."],
      ["¿Qué causó la extinción del Cretácico?", "El impacto de un asteroide (cráter de Chicxulub)."],
    ],
    m: [
      ["Compara catastrofismo y uniformismo y explica la visión actual.", "Catastrofismo: cambios por catástrofes súbitas. Uniformismo: procesos lentos y constantes. Hoy: procesos iguales, intensidad variable y algunos episodios catastróficos."],
      ["Explica el principio de las relaciones de corte con un ejemplo.", "Lo que corta es posterior a lo cortado: un dique que atraviesa estratos es más moderno que ellos."],
      ["¿Qué información aporta una discordancia angular?", "Sedimentación, deformación, elevación, erosión y nueva sedimentación: un largo intervalo de historia."],
      ["¿Por qué la fosilización es excepcional?", "Requiere partes duras, enterramiento rápido y pocas condiciones de descomposición; la mayoría de los organismos se descomponen."],
      ["Diferencia fósil guía y fósil de facies.", "El guía data los estratos; el de facies indica el ambiente de formación."],
      ["¿Por qué las rocas magmáticas son las mejores para la datación radiométrica?", "Su reloj se pone a cero al cristalizar; los sedimentarios contienen granos de edades distintas."],
      ["Elige un método para datar: un tronco de 3.000 años, un basalto de 50 Ma, un granito de 2.000 Ma.", "C-14; K-Ar; U-Pb."],
      ["¿Qué supuso la Gran Oxidación?", "La acumulación de oxígeno en la atmósfera hace 2.400 Ma: formación del ozono, oxidación del hierro y posibilidad de respiración aerobia."],
      ["Explica la importancia de la explosión cámbrica.", "Aparecieron casi todos los grandes grupos animales con partes duras, lo que hizo el registro fósil mucho más abundante."],
      ["¿Por qué en el Carbonífero se formó tanto carbón?", "Grandes bosques pantanosos cuyos restos se enterraron sin descomponerse en ambientes pobres en oxígeno."],
      ["Describe las pruebas de la hipótesis del impacto en el K-Pg.", "Capa de arcilla rica en iridio, cuarzo de impacto, esférulas y el cráter de Chicxulub de la misma edad."],
      ["¿Qué importancia tiene Atapuerca?", "Restos humanos de más de 1,2 Ma, los más antiguos de Europa occidental, y la especie Homo antecessor."],
    ],
    a: [
      ["Un granito contiene el 75 % de K-40 original. ¿Qué edad tiene? (semivida 1.250 Ma)", "N/N₀ = 0,75 = (1/2)^n → n = log 0,75 / log 0,5 ≈ 0,415 semividas; edad ≈ 0,415 · 1.250 ≈ 519 Ma."],
      ["Una capa de ceniza volcánica datada en 120 Ma está entre dos estratos con fósiles. ¿Qué puedes decir de la edad de cada estrato?", "El inferior es más antiguo de 120 Ma y el superior más moderno: la ceniza permite acotar edades de rocas sedimentarias."],
      ["Argumenta por qué Kelvin se equivocó al calcular la edad de la Tierra.", "No conocía la radiactividad, que genera calor en el interior y ralentiza el enfriamiento; sus supuestos eran incompletos."],
      ["Compara las causas de las extinciones del Pérmico y del Cretácico con la crisis de biodiversidad actual.", "Pérmico: vulcanismo, calentamiento, acidificación y anoxia. Cretácico: impacto y oscuridad. Hoy: destrucción de hábitats, cambio climático y acidificación, a ritmo muy rápido; algunos mecanismos se parecen al Pérmico."],
      ["Diseña una escala del tiempo geológico en el pasillo del instituto (50 m).", "1 m ≈ 91 Ma. Precámbrico: 44 m. Paleozoico: 3,2 m. Mesozoico: 2 m. Cenozoico: 0,72 m. Homo sapiens: 0,16 mm."],
      ["Interpreta: en un corte, un dique corta los estratos A y B pero no el C; una falla corta A, B, C y el dique.", "A, B, dique, C (el dique es anterior a C), y por último la falla, que corta todo."],
      ["¿Por qué la hipótesis del Antropoceno es objeto de debate?", "Hay huellas humanas globales (plásticos, radionúclidos, CO₂), pero discutir su inicio y si cambia la escala es difícil; en 2024 no se aprobó como época formal."],
      ["Explica cómo se reconstruyen los climas del pasado.", "Con fósiles de facies, tipos de rocas (evaporitas, tillitas, carbón), isótopos de oxígeno en caparazones y burbujas de aire en el hielo."],
    ],
  },
  quiz: [
    ["La Tierra tiene unos…", ["4.567 años", "4,5 millones de años", "4.567 millones de años", "13.800 millones de años"], 2, "Datación de meteoritos."],
    ["«El presente es la clave del pasado» es el principio de…", ["superposición", "actualismo", "inclusión", "catastrofismo"], 1, "Hutton y Lyell."],
    ["Cuvier defendía el…", ["uniformismo", "catastrofismo", "actualismo", "evolucionismo"], 1, "Catástrofes súbitas."],
    ["En una serie no alterada, el estrato más antiguo está…", ["arriba", "abajo", "en medio", "a la derecha"], 1, "Superposición."],
    ["Un dique que corta estratos es…", ["anterior", "posterior a ellos", "de la misma edad", "imposible de ordenar"], 1, "Relaciones de corte."],
    ["Una discordancia angular indica…", ["sedimentación continua", "deformación y erosión entre dos series", "metamorfismo", "un fósil"], 1, "Interrupción."],
    ["Las huellas de dinosaurio son…", ["moldes internos", "icnofósiles", "fósiles guía", "estromatolitos"], 1, "Señales de actividad."],
    ["Un buen fósil guía vivió…", ["mucho tiempo en un lugar", "poco tiempo y en muchos lugares", "solo en el Precámbrico", "en tierra"], 1, "Condiciones."],
    ["Los ammonites caracterizan el…", ["Paleozoico", "Mesozoico", "Cenozoico", "Precámbrico"], 1, "Fósil guía."],
    ["Tras tres semividas queda…", ["el 33 %", "el 12,5 %", "el 25 %", "nada"], 1, "1/8."],
    ["El C-14 sirve para datar…", ["granitos", "restos orgánicos recientes", "meteoritos", "basaltos de 50 Ma"], 1, "Hasta unos 50.000 años."],
    ["El Precámbrico ocupa de la historia de la Tierra…", ["un 10 %", "casi el 90 %", "la mitad", "un 1 %"], 1, "Hasta hace 541 Ma."],
    ["Las primeras pruebas de vida son…", ["trilobites", "estromatolitos", "dinosaurios", "helechos"], 1, "Unos 3.500 Ma."],
    ["La Gran Oxidación se debió a…", ["volcanes", "cianobacterias", "plantas con flores", "meteoritos"], 1, "Fotosíntesis."],
    ["La explosión cámbrica ocurrió al comienzo del…", ["Mesozoico", "Paleozoico", "Cenozoico", "Arcaico"], 1, "541 Ma."],
    ["El carbón de Asturias se formó en el…", ["Carbonífero", "Jurásico", "Cuaternario", "Cámbrico"], 0, "Bosques pantanosos."],
    ["Los primeros dinosaurios aparecieron en el…", ["Pérmico", "Triásico", "Cretácico", "Paleógeno"], 1, "Inicio del Mesozoico."],
    ["La mayor extinción fue la del…", ["Cretácico", "Pérmico", "Ordovícico", "Cuaternario"], 1, "≈ 90 % especies marinas."],
    ["La capa de iridio del límite K-Pg se asocia a…", ["un volcán", "un impacto de asteroide", "una glaciación", "un tsunami"], 1, "Álvarez, 1980."],
    ["Homo sapiens apareció hace unos…", ["3 Ma", "300.000 años", "10.000 años", "66 Ma"], 1, "En África."],
  ],
  examen: [
    ["(PAU) El principio de sucesión faunística lo formuló…", ["Steno", "William Smith", "Hutton", "Darwin"], 1, "Principios del siglo XIX."],
    ["(PAU) Un fragmento de granito incluido en un basalto indica que…", ["el basalto es más antiguo", "el granito es más antiguo", "son de la misma edad", "no se puede saber"], 1, "Principio de inclusión."],
    ["(PAU) Una muestra conserva el 6,25 % del isótopo padre. Han pasado…", ["2 semividas", "4 semividas", "6 semividas", "16 semividas"], 1, "(1/2)⁴ = 1/16."],
    ["(PAU) Para datar una colada basáltica de 30 Ma se usa…", ["C-14", "K-Ar", "dendrocronología", "varvas"], 1, "Semivida adecuada."],
    ["(PAU) El límite Paleozoico-Mesozoico se sitúa en…", ["541 Ma", "252 Ma", "66 Ma", "2,58 Ma"], 1, "Extinción del Pérmico."],
    ["(PAU) Las formaciones de hierro bandeado indican…", ["el inicio de la oxigenación", "una glaciación", "un impacto", "la aparición de mamíferos"], 0, "Oxígeno y hierro disuelto."],
    ["(PAU) La orogenia alpina se produjo en el…", ["Paleozoico", "Mesozoico inicial", "Cenozoico", "Precámbrico"], 2, "Convergencia África-Eurasia."],
    ["(PAU) El yacimiento de Zumaia es importante por…", ["sus dinosaurios", "el límite K-Pg", "restos humanos", "estromatolitos"], 1, "Afloramiento del límite."],
  ],
  feynman: ["Cómo de larga es la historia de la Tierra", "Cómo se ordena una pila de estratos", "Cómo se convierte un hueso en fósil", "Cómo funciona el reloj radiactivo", "Qué pasó con los dinosaurios", "Por qué hay carbón en Asturias"],
  mapa: ["HISTORIA DE LA TIERRA", [["Principios", "actualismo, superposición"], ["Fósiles", "guía y de facies"], ["Datación", "relativa y absoluta"], ["Escala", "eones, eras, extinciones"]], 260],
  tarjetas: [
    ["Tiempo profundo", "La Tierra tiene unos 4.567 millones de años."],
    ["Actualismo", "El presente es la clave del pasado."],
    ["Superposición", "Lo de abajo es más antiguo que lo de arriba."],
    ["Relaciones de corte", "Lo que corta es posterior a lo cortado."],
    ["Discordancia", "Superficie de erosión entre dos series de edades distintas."],
    ["Fosilización", "Enterramiento rápido y mineralización de partes duras."],
    ["Fósil guía", "Vida corta, amplia distribución, abundante."],
    ["Semivida", "Tiempo en que se desintegra la mitad de un isótopo."],
    ["Escala del tiempo", "Eones, eras, períodos y épocas."],
    ["Precámbrico", "Origen de la vida y Gran Oxidación; casi el 90 % del tiempo."],
    ["Fanerozoico", "Paleozoico, Mesozoico y Cenozoico."],
    ["Extinciones masivas", "Cinco grandes; la mayor, la del Pérmico."],
  ],
  glosario: [
    ["Estratigrafía", "Ciencia que estudia los estratos y su sucesión."],
    ["Estrato", "Capa de roca sedimentaria."],
    ["Serie concordante", "Estratos depositados sin interrupción."],
    ["Corte geológico", "Representación de rocas y estructuras en un plano vertical."],
    ["Icnofósil", "Huella fósil de la actividad de un organismo."],
    ["Mineralización", "Sustitución de la materia original por minerales."],
    ["Paleontología", "Ciencia que estudia los fósiles."],
    ["Isótopo radiactivo", "Átomo inestable que se desintegra emitiendo radiación."],
    ["Dendrocronología", "Datación por los anillos de los árboles."],
    ["Eón", "Mayor división de la escala del tiempo geológico."],
    ["Estromatolito", "Estructura laminada formada por cianobacterias."],
    ["Explosión cámbrica", "Rápida diversificación animal al inicio del Paleozoico."],
    ["Huevo amniota", "Huevo con membranas que permite el desarrollo fuera del agua."],
    ["Paleoclima", "Clima de una época pasada."],
    ["Límite K-Pg", "Frontera entre Cretácico y Paleógeno, hace 66 Ma."],
    ["Antropoceno", "Época propuesta marcada por la influencia humana."],
  ],
  situacion: {
    titulo: "Una escala del tiempo geológico a tamaño real",
    reto: "El centro quiere que todo el alumnado comprenda la duración del tiempo geológico. Vuestro equipo construirá una escala del tiempo en el pasillo o el patio.",
    pasos: [
      "Elegid la longitud disponible y calculad la escala (millones de años por metro).",
      "Situad los límites de eones y eras y quince acontecimientos clave de la historia de la Tierra.",
      "Preparad fichas con dibujos de fósiles y organismos característicos de cada momento.",
      "Añadid acontecimientos de la geología de vuestra comunidad y de la Península.",
      "Organizad una visita guiada para otro grupo y recoged sus impresiones.",
    ],
    producto: "Una escala del tiempo geológico a escala, con fichas ilustradas y una guía de visita.",
    evaluacion: ["Los cálculos de escala son correctos.", "Los acontecimientos y fechas son rigurosos.", "Las fichas son claras y atractivas.", "La visita transmite la idea del tiempo profundo."],
  },
  familias: [
    "Visitad un museo con fósiles o un yacimiento, como Atapuerca o las icnitas de La Rioja.",
    "Buscad fósiles en las piedras de edificios: muchas calizas tienen conchas.",
    "Ved juntos un documental sobre dinosaurios y comprobad qué fechas aparecen.",
    "Calculad la edad de la Tierra en «vidas humanas» de 80 años.",
  ],
  saberes: "bloque «Historia de la Tierra y de la vida»: tiempo geológico, actualismo y uniformismo, principios de la estratigrafía, cortes geológicos sencillos, fósiles y fosilización, datación relativa y absoluta, escala del tiempo geológico, grandes acontecimientos geológicos y biológicos, extinciones masivas y patrimonio geológico y paleontológico de la Península Ibérica y Catalunya.",
  ideas: [
    "Interpretación de cortes geológicos con plantillas y secuencias de acontecimientos.",
    "Simulación de la desintegración radiactiva con monedas o dados.",
    "Modelado de fósiles con escayola y conchas.",
    "Escala del tiempo en una cinta o en papel continuo.",
  ],
  fuentes: [
    { t: "Comisión Internacional de Estratigrafía: tabla cronoestratigráfica", url: "https://stratigraphy.org/chart" },
    { t: "Escala temporal geológica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Escala_temporal_geol%C3%B3gica" },
    { t: "Fundación Atapuerca", url: "https://www.atapuerca.org/" },
  ],
});
