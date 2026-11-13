// Latín 4º ESO · La vida cotidiana en Roma. Tema a nivel libro. Dibujos propios en SVG.
const L = require("./_eso4L9");
const t = L.tabla;

module.exports = L.libro({
  materia: "Latín",
  titulo: "La vida cotidiana en Roma",
  minutos: 100,
  objetivos: [
    "Describir la organización social romana: ciudadanos, libertos y esclavos",
    "Explicar la familia romana, el poder del pater familias y el papel de la mujer",
    "Conocer la vivienda (domus, insula, villa), la ropa, la comida y la educación",
    "Comparar el trabajo y el ocio romanos (termas, circo, anfiteatro, teatro) con los actuales",
    "Valorar críticamente aspectos de la sociedad romana como la esclavitud o la desigualdad",
  ],
  claves: ["pater familias", "domus", "insula", "ciudadanos", "esclavos", "termas"],
  pregunta: {
    texto: "Un niño romano de tu edad podía ir a la escuela por la mañana, a las termas por la tarde y al circo a ver carreras de carros el fin de semana. Si era esclavo, en cambio, trabajaba sin descanso. ¿Cómo era de verdad un día en Roma?",
    respuesta: "Dependía muchísimo de <mark>quién</mark> fueras. Un niño de familia rica vivía en una <b>domus</b> con patio, iba a la escuela y tenía esclavos a su servicio; uno pobre vivía en un piso de una <b>insula</b>, sin agua ni cocina, y trabajaba pronto; y un esclavo no tenía derechos. Lo común a todos era una vida muy pública: la calle, el foro, las termas y los espectáculos.",
  },
  lectura: {
    titulo: "Un día en la ciudad más grande del mundo",
    html: `<p>Roma en el siglo I tenía casi un millón de habitantes. Ninguna ciudad europea volvería a ser tan grande hasta Londres, en el siglo XIX. Imagina el ruido: carros que solo podían circular de noche y no dejaban dormir, vendedores que gritaban sus mercancías, herreros golpeando el metal, maestros que daban clase al aire libre y castigaban a gritos. El poeta Juvenal se quejaba de que en Roma era imposible descansar y de que, al pasear, podía caerte encima una maceta o el contenido de un orinal.</p><p>El día empezaba al amanecer. Los ricos recibían en su casa a sus «clientes», que venían a saludarles y pedirles favores. Los trabajadores abrían sus talleres y tabernas. A mediodía se comía algo ligero y, en los meses calurosos, se hacía la siesta (de <i>sexta hora</i>, la hora sexta). Por la tarde, casi todos iban a las termas, y por la noche se celebraba la cena, la comida principal.</p><p>En este tema vas a entrar en esas casas, sentarte en esas escuelas y ocupar un asiento en el Coliseo. Y también vas a mirar lo que no se veía desde la grada: la vida de los esclavos, que sostenía todo aquel mundo.</p>`,
  },
  bloques: [
    [
      "1.1 Una sociedad desigual",
      `<p>La sociedad romana era profundamente <mark>desigual</mark>. La gran división era entre <b>libres</b> y <b>esclavos</b>. Entre los libres, los <b>ciudadanos romanos</b> (<i>cives</i>) tenían todos los derechos: votar, ser elegidos, casarse legalmente, poseer bienes, servir en las legiones y ser juzgados según el derecho romano. Los <b>no ciudadanos</b> (peregrinos, habitantes de las provincias) eran libres pero con menos derechos. La ciudadanía se fue extendiendo: en el año 212 el emperador Caracalla la concedió a todos los hombres libres del Imperio.</p><p>Dentro de los ciudadanos había grandes diferencias de riqueza. En lo más alto estaban los <b>senadores</b> (orden senatorial), dueños de enormes tierras; después los <b>caballeros</b> (orden ecuestre), enriquecidos con el comercio, los negocios y la recaudación de impuestos; y por debajo, la gran masa de la <b>plebe</b>: artesanos, tenderos, trabajadores y desempleados que vivían de repartos gratuitos de trigo. Los <b>libertos</b> eran antiguos esclavos liberados: eran libres, pero no podían ocupar cargos, y algunos llegaron a ser muy ricos. Muchos pobres eran <b>clientes</b> de un rico (su patrono), que les protegía a cambio de apoyo político.</p>`,
      L.piramide("Pirámide social romana", [["senadores", "var(--sun)"], ["caballeros", "var(--red)"], ["plebe y libertos", "var(--pen)"], ["esclavos", "var(--muted)"]]),
    ],
    [
      "1.2 La esclavitud",
      `<p>Los <mark>esclavos</mark> (<i>servi</i>) eran considerados una propiedad, una «herramienta que habla» (<i>instrumentum vocale</i>), según el escritor Varrón. En la Italia del siglo I quizá eran entre un 15 y un 30 % de la población. Se llegaba a la esclavitud sobre todo por la <b>guerra</b> (prisioneros), pero también por nacer de madre esclava, por deudas en la época antigua o por ser abandonado de niño. Se compraban y vendían en mercados, con un cartel que indicaba su origen y sus habilidades.</p><p>Sus condiciones variaban enormemente. Los que trabajaban en las <b>minas</b> o en los grandes latifundios sufrían una vida durísima y corta. Los esclavos <b>domésticos</b> vivían en la casa de su amo como cocineros, porteros o niñeras, y algunos, cultos, eran secretarios, médicos o maestros (a menudo griegos). Un esclavo podía ahorrar dinero (<i>peculium</i>) y comprar su libertad, o el amo podía concederla mediante la <b>manumisión</b>; así se convertía en <b>liberto</b>. A veces los esclavos se rebelaron, como en la revuelta de Espartaco. Hoy la esclavitud está prohibida por la Declaración Universal de Derechos Humanos (art. 4), pero sigue existiendo de forma ilegal: según la ONU, decenas de millones de personas sufren formas de esclavitud moderna.</p>`,
      L.flujo("Del esclavo al liberto", ["guerra o|nacimiento", "mercado", "trabajo", "peculium", "manumisión", "liberto"], "var(--muted)"),
    ],
    [
      "1.3 La familia romana y el pater familias",
      `<p>La <mark>familia</mark> romana (<i>familia</i>) era más amplia que la actual: incluía al padre, la esposa, los hijos, las esposas de los hijos, los nietos y también los esclavos de la casa. Al frente estaba el <b>pater familias</b>, el varón de más edad, que tenía un poder enorme, la <i>patria potestas</i>, sobre todos los miembros mientras vivía: administraba todos los bienes (los hijos adultos no tenían propiedades propias), decidía los matrimonios y, en la época antigua, podía incluso vender a sus hijos o castigarlos con la muerte, aunque esto era excepcional y se limitó con el tiempo.</p><p>Al nacer un niño, se le colocaba ante los pies del padre: si lo levantaba (<i>tollere</i>), lo aceptaba como hijo. A los nueve días (ocho para las niñas) se le ponía nombre en una fiesta y se le colgaba la <i>bulla</i>, un amuleto protector. Los nombres de los varones tenían tres partes, los <b>tria nomina</b>: el <b>praenomen</b> (nombre personal: Marco, Cayo, Lucio), el <b>nomen</b> (la familia o gens: Tulio, Julio) y el <b>cognomen</b> (rama o apodo: Cicerón, «garbanzo», o César). Así, Marco Tulio Cicerón. Las mujeres llevaban el nombre de la gens en femenino: la hija de Cicerón se llamaba Tulia.</p>`,
      L.partes("Los tria nomina", [["Marcus", "praenomen", "var(--red)"], ["Tullius", "nomen", "var(--pen)"], ["Cicero", "cognomen", "var(--leaf)"]], "nombre · familia · apodo"),
    ],
    [
      "1.4 La mujer en Roma",
      `<p>La situación de la <mark>mujer</mark> en Roma era mejor que en la Grecia clásica, pero lejos de la igualdad. Las mujeres no podían votar ni ocupar cargos públicos, y legalmente estaban siempre bajo la autoridad de un varón: primero del padre, después del marido o de un tutor. Se casaban muy jóvenes, a menudo a los 12-15 años, en matrimonios concertados por las familias para establecer alianzas. Su función principal, según la sociedad de la época, era cuidar la casa (<i>domum servare</i>) y tener hijos.</p><p>Sin embargo, a diferencia de las griegas, las romanas no vivían encerradas: salían a la calle, iban a las termas (en horarios o salas separadas), asistían a banquetes y espectáculos y dirigían la casa con autoridad, como <i>matronae</i> (señoras). Con el tiempo, muchas mujeres de familias acomodadas administraron sus propios bienes, se divorciaron (el divorcio era fácil para ambos) y tuvieron gran influencia política a través de sus maridos e hijos, como Livia, esposa de Augusto, o Agripina. Algunas trabajaban como comerciantes, comadronas, artesanas o taberneras. Las <b>vestales</b>, sacerdotisas de la diosa Vesta, gozaban de privilegios excepcionales a cambio de mantener su voto de castidad durante treinta años.</p>`,
      L.dos("Derechos de la mujer romana", ["Podía", ["salir a la calle", "ir a las termas", "divorciarse", "tener bienes", "dirigir la casa"], "var(--leaf)"], ["No podía", ["votar", "ocupar cargos", "ser soldado", "librarse del tutor", "elegir marido"], "var(--red)"]),
    ],
    [
      "1.5 La educación",
      `<p>No había escuela pública obligatoria: la <mark>educación</mark> dependía del dinero de cada familia. Muchos niños pobres no estudiaban, o solo aprendían lo básico. Los de familias acomodadas seguían tres etapas. Hacia los 7 años iban a la escuela del <b>ludi magister</b> o <i>litterator</i>, que enseñaba a leer, escribir y contar. Se escribía en <b>tablillas de cera</b> con un punzón (<i>stilus</i>) y se contaba con un ábaco o con piedrecitas (<i>calculi</i>, de donde viene «cálculo»). Los maestros eran a menudo severos y usaban la vara.</p><p>Hacia los 12 años, los chicos (y algunas chicas) pasaban al <b>grammaticus</b>, que enseñaba gramática y literatura griega y latina: leían a Homero y Virgilio, y aprendían de memoria muchos versos. Por último, hacia los 15 años, los jóvenes que se preparaban para la política estudiaban con el <b>rhetor</b> el arte de hablar en público, la <b>retórica</b>, practicando discursos sobre casos inventados. Un esclavo de confianza, el <b>pedagogo</b> (<i>paedagogus</i>, «el que conduce al niño»), acompañaba al alumno a la escuela y vigilaba su conducta. Las clases se daban a menudo en un local abierto a la calle, separado solo por una cortina.</p>`,
      L.flujo("Tres etapas de la educación", ["7 años|litterator", "12 años|grammaticus", "15 años|rhetor"], "var(--pen)"),
    ],
    [
      "1.6 La vivienda: domus, insula y villa",
      `<p>Los romanos ricos vivían en una <mark>domus</mark>, una casa unifamiliar de una o dos plantas que miraba hacia dentro: tenía pocas ventanas a la calle. Se entraba por un pasillo (<i>fauces</i>) al <b>atrio</b> (<i>atrium</i>), un gran espacio con una abertura en el techo (<i>compluvium</i>) por la que entraba la luz y la lluvia, que caía en un estanque (<i>impluvium</i>). Alrededor estaban los dormitorios (<i>cubicula</i>) y, al fondo, el <b>tablinum</b>, el despacho del pater familias. Detrás había un jardín rodeado de columnas, el <b>peristilo</b>, y el comedor (<i>triclinium</i>). Las paredes se decoraban con pinturas y los suelos con mosaicos.</p><p>La mayoría de la población urbana vivía, en cambio, en <mark>insulae</mark>: bloques de pisos de alquiler de hasta cinco o seis plantas. En la planta baja había tiendas (<i>tabernae</i>); los pisos bajos eran los mejores y más caros, y los altos, pequeños, oscuros y peligrosos. No tenían agua corriente ni cocina ni retretes: había que ir a las fuentes públicas y a las letrinas. Estaban construidos con materiales pobres y a menudo se derrumbaban o ardían. En el campo, los ricos tenían una <b>villa</b>, una gran finca agrícola con una vivienda señorial y edificios para los trabajadores y los almacenes.</p>`,
      L.dos("Domus e insula", ["Domus", ["casa familiar", "atrio, peristilo", "mosaicos", "agua corriente", "para ricos"], "var(--sun)"], ["Insula", ["bloque de pisos", "tiendas abajo", "sin cocina", "riesgo de incendio", "para la plebe"], "var(--muted)"]),
      { id: "F1G4PV4KOcw", titulo: "La casa romana", canal: "ArteHistoria", vistas: 196225 },
    ],
    [
      "1.7 La ropa y el aspecto",
      `<p>La prenda básica, tanto para hombres como para mujeres, era la <mark>túnica</mark>, una especie de camisón de lana o lino ceñido con un cinturón, que llegaba a la rodilla en los hombres y a los pies en las mujeres. Los ciudadanos varones llevaban encima, en las ocasiones oficiales, la <b>toga</b>: una gran pieza de lana blanca semicircular, de unos seis metros, que se enrollaba alrededor del cuerpo con mucha habilidad. Era incómoda y pesada, pero era el símbolo de la ciudadanía: los esclavos y los extranjeros no podían llevarla.</p><p>Había togas especiales: la <b>toga praetexta</b>, con una franja púrpura, la usaban los magistrados y los niños hasta los 16 años; ese año, en una ceremonia, el joven se ponía la <b>toga viril</b>, toda blanca, que marcaba su paso a la edad adulta. Los candidatos llevaban la <b>toga candida</b>, blanqueada. Las mujeres casadas vestían la <b>estola</b>, una túnica larga, y al salir se cubrían con un manto, la <b>palla</b>. Los colores, como el púrpura, extraído de un molusco y carísimo, indicaban riqueza. Los hombres solían ir afeitados, y las mujeres ricas dedicaban mucho tiempo a sus peinados, maquillaje y joyas, con ayuda de esclavas peluqueras (<i>ornatrices</i>).</p>`,
      L.filas("Prendas romanas", [["túnica", "prenda básica de todos", "var(--pen)"], ["toga", "solo ciudadanos varones", "var(--red)"], ["praetexta", "franja púrpura: niños, cargos", "var(--sun)"], ["estola", "túnica de la mujer casada", "var(--leaf)"], ["palla", "manto femenino", "var(--muted)"]]),
    ],
    [
      "1.8 La comida",
      `<p>Los romanos hacían tres comidas. El <b>ientaculum</b>, al amanecer, era un desayuno ligero de pan, queso, fruta o restos de la cena. El <b>prandium</b>, a mediodía, era también sencillo y a menudo se tomaba de pie en una taberna. La comida principal era la <mark>cena</mark>, a media tarde, después de las termas. La base de la alimentación era la llamada <b>tríada mediterránea</b>: el <b>trigo</b> (pan o gachas, <i>puls</i>), el <b>aceite</b> de oliva y el <b>vino</b>, que se bebía mezclado con agua. Se comían legumbres, verduras, queso, huevos, frutas y, los que podían, carne y pescado.</p><p>Los pobres comían en las tabernas y en los <b>thermopolia</b>, puestos callejeros con un mostrador donde se servía comida caliente, una especie de comida rápida de la época (se han encontrado muchos en Pompeya). Los ricos celebraban banquetes en el <b>triclinium</b>, comiendo recostados en lechos alrededor de una mesa, con varios platos: entrantes (<i>gustatio</i>), platos principales y postres (<i>secundae mensae</i>). El condimento estrella era el <b>garum</b>, una salsa de pescado fermentado; las fábricas de garum de Hispania, como la de Baelo Claudia (Cádiz), eran famosas. No conocían el tomate, la patata, el maíz, el chocolate ni el azúcar: endulzaban con miel.</p>`,
      L.rueda("La tríada mediterránea y más", "CENA", [["trigo", "var(--sun)"], ["aceite", "var(--leaf)"], ["vino", "var(--red)"], ["garum", "var(--pen)"], ["legumbres", "var(--muted)"], ["miel", "var(--ink)"]], "var(--red)"),
    ],
    [
      "1.9 El trabajo y el tiempo",
      `<p>Los romanos más ricos despreciaban el <mark>trabajo</mark> manual y el comercio al por menor: lo consideraban propio de esclavos y libertos. Lo digno para un ciudadano de clase alta era la agricultura (como propietario), la política, el ejército y la abogacía. Su tiempo libre lo llamaban <i>otium</i>, y el trabajo era la negación del ocio, <i>neg-otium</i>, de donde viene «negocio». La economía, sin embargo, se sostenía gracias a miles de oficios: panaderos, herreros, alfareros, tintoreros, zapateros, constructores, marineros y vendedores, organizados a menudo en asociaciones (<i>collegia</i>).</p><p>El día se dividía en <b>doce horas de luz</b> y doce de noche, de modo que la duración de una hora cambiaba según la estación: en invierno las horas de día eran más cortas. Se medía con relojes de sol y de agua (clepsidras). No había semana como la nuestra: el mercado se celebraba cada nueve días (<i>nundinae</i>). El mes tenía tres días de referencia: las <b>calendas</b> (día 1, de donde viene «calendario»), las <b>nonas</b> (día 5 o 7) y los <b>idus</b> (día 13 o 15). Además, había muchísimos días festivos religiosos: en época imperial, más de cien al año.</p>`,
      L.dos("Otium y negotium", ["Otium", ["tiempo libre", "estudio, política", "digno para ricos", "termas, ocio"], "var(--leaf)"], ["Negotium", ["no-ocio", "trabajo, comercio", "esclavos, libertos", "→ «negocio»"], "var(--muted)"]),
    ],
    [
      "1.10 Las termas",
      `<p>Las <mark>termas</mark> eran baños públicos y mucho más: un lugar de encuentro social, como un gimnasio, un spa y un centro cultural a la vez. La entrada era muy barata o gratuita, así que acudían ricos y pobres. Había termas en todas las ciudades del Imperio; en Roma, las de Caracalla y las de Diocleciano podían acoger a miles de personas a la vez.</p><p>El recorrido seguía un orden. Primero se dejaba la ropa en el vestuario, el <b>apodyterium</b>. Se hacía ejercicio en la <b>palestra</b> (lucha, pelota, pesas). Después se pasaba por el <b>tepidarium</b>, una sala templada; el <b>caldarium</b>, una sala caliente con agua caliente y vapor, donde se sudaba y se limpiaba la piel con aceite y un raspador curvo, el <b>strigilis</b>; y por último el <b>frigidarium</b>, una piscina de agua fría para cerrar los poros. El agua y el suelo se calentaban con un ingenioso sistema, el <b>hipocausto</b>: el aire caliente de unos hornos circulaba por debajo del suelo, que se apoyaba sobre pilares de ladrillo, y por dentro de las paredes. Además había jardines, bibliotecas, tiendas y salas de masaje.</p>`,
      L.flujo("Recorrido por las termas", ["apody-|terium", "palestra", "tepida-|rium", "calda-|rium", "frigida-|rium"], "var(--pen)"),
    ],
    [
      "1.11 Los espectáculos: circo, anfiteatro y teatro",
      `<p>Los espectáculos públicos (<i>ludi</i>) eran gratuitos: los pagaban los magistrados y los emperadores para ganarse el favor del pueblo. El poeta Juvenal lo resumió con ironía: el pueblo solo desea <i>panem et circenses</i>, «pan y juegos de circo». Había tres grandes tipos. En el <mark>circo</mark>, una pista alargada con una barrera central (<i>spina</i>), se celebraban carreras de carros tirados por dos (bigas) o cuatro caballos (cuadrigas). El Circo Máximo de Roma tenía capacidad para unas 150.000 personas. Los aficionados se dividían en cuatro equipos por colores (blancos, rojos, verdes y azules) y los aurigas famosos eran auténticas estrellas, muy ricas.</p><p>En el <mark>anfiteatro</mark>, de forma ovalada, se celebraban luchas de <b>gladiadores</b> (normalmente esclavos o prisioneros entrenados en escuelas, aunque también había voluntarios) y cacerías de animales salvajes (<i>venationes</i>). El más famoso es el <b>Anfiteatro Flavio</b> o Coliseo (año 80), para unos 50.000 espectadores. En el <mark>teatro</mark>, semicircular, de influencia griega, se representaban comedias (como las de Plauto), tragedias y, cada vez más, mimos y pantomimas. Hoy se conservan teatros romanos en Mérida, Sagunto, Cartagena o Tarragona.</p>`,
      L.dos("Circo y anfiteatro", ["Circo", ["carreras de carros", "pista alargada", "spina central", "4 equipos", "Circo Máximo"], "var(--red)"], ["Anfiteatro", ["gladiadores", "forma ovalada", "fieras (venatio)", "arena", "Coliseo"], "var(--sun)"]),
      { id: "O4_2-qiWosE", titulo: "¿Cómo vivían los romanos adinerados?", canal: "Academia Play", vistas: 222821 },
    ],
    [
      "1.12 La ciudad: foro, calles y servicios",
      `<p>Las ciudades romanas se planificaban a menudo con un trazado en cuadrícula, a partir de dos calles principales que se cruzaban: el <b>cardo</b> (de norte a sur) y el <b>decumanus</b> (de este a oeste). En el cruce se situaba el <mark>foro</mark>, la plaza central: el corazón político, religioso, judicial y comercial de la ciudad. Alrededor del foro estaban los templos, la <b>basílica</b> (edificio para los juicios y los negocios, no una iglesia), la curia (donde se reunía el consejo de la ciudad) y las tiendas.</p><p>Las ciudades contaban con servicios notables para la época: <b>acueductos</b> que traían agua desde kilómetros de distancia a fuentes públicas, termas y casas ricas; <b>alcantarillado</b> (la <i>Cloaca Maxima</i> de Roma aún funciona en parte); calles <b>empedradas</b> con aceras y pasos de peatones elevados; letrinas públicas, donde se charlaba sentados unos junto a otros; y un servicio de vigilantes nocturnos y bomberos, los <i>vigiles</i>, creado por Augusto. Pero también había problemas que nos suenan: tráfico, ruido, suciedad, incendios y alquileres caros. Los muertos se enterraban siempre fuera de la ciudad, a lo largo de las calzadas.</p>`,
      L.rueda("Una ciudad romana", "FORO", [["templos", "var(--sun)"], ["basílica", "var(--pen)"], ["curia", "var(--red)"], ["termas", "var(--leaf)"], ["acueducto", "var(--muted)"], ["teatro", "var(--ink)"]], "var(--red)"),
    ],
  ],
  figura: {
    titulo: "La domus romana por dentro",
    svg: `<svg viewBox="0 0 680 230" role="img" aria-label="Plano simplificado de una domus romana: fauces, atrio con impluvio, tablinum, cubicula, peristilo y triclinio">
      <rect width="680" height="230" rx="16" fill="var(--paper)"/>
      <g ${L.F} font-size="13" text-anchor="middle" font-weight="700">
        <rect x="30" y="30" width="620" height="170" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>
        <rect x="30" y="95" width="70" height="40" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><text x="65" y="120" fill="var(--ink)">fauces</text>
        <rect x="100" y="30" width="80" height="65" fill="var(--paper)" stroke="var(--line)" stroke-width="2"/><text x="140" y="68" fill="var(--muted)" font-size="12">cubiculum</text>
        <rect x="100" y="135" width="80" height="65" fill="var(--paper)" stroke="var(--line)" stroke-width="2"/><text x="140" y="172" fill="var(--muted)" font-size="12">taberna</text>
        <rect x="180" y="30" width="170" height="170" fill="none" stroke="var(--red)" stroke-width="3"/><text x="265" y="58" fill="var(--red)">atrium</text>
        <rect x="235" y="95" width="60" height="40" fill="var(--pen)" opacity=".55"/><text x="265" y="153" fill="var(--pen)" font-size="12">impluvium</text>
        <rect x="350" y="70" width="80" height="90" fill="var(--paper)" stroke="var(--sun)" stroke-width="3"/><text x="390" y="120" fill="var(--sun)">tablinum</text>
        <rect x="430" y="30" width="220" height="170" fill="none" stroke="var(--leaf)" stroke-width="3"/><text x="540" y="58" fill="var(--leaf)">peristylium</text>
        ${[0, 1, 2, 3, 4].map((i) => `<circle cx="${460 + i * 40}" cy="80" r="5" fill="var(--leaf)"/><circle cx="${460 + i * 40}" cy="170" r="5" fill="var(--leaf)"/>`).join("")}
        <text x="540" y="130" fill="var(--ink)" font-size="12">jardín · triclinium</text>
      </g>
    </svg>`,
  },
  video: { id: "lENDXVKiB7M", titulo: "¿Cómo vivían los romanos? La vida en la Antigua Roma", canal: "Daniel Geohistoria", vistas: 66731, megusta: 1543, busqueda: "vida cotidiana en la antigua roma" },
  ejemplos: [
    ["Analiza el nombre <i>Gaius Iulius Caesar</i>.", ["<i>Gaius</i>: praenomen, nombre personal.", "<i>Iulius</i>: nomen, la gens Julia.", "<i>Caesar</i>: cognomen, rama de la familia."], "Cayo, de la familia Julia, rama de los César."],
    ["¿Cómo se llamaría la hija de Marco Tulio Cicerón? ¿Por qué?", ["Las mujeres recibían el nomen familiar en femenino.", "Nomen: <i>Tullius</i> → femenino <i>Tullia</i>."], "<b>Tulia</b> (<i>Tullia</i>)."],
    ["Ordena el recorrido de las termas.", ["Vestuario: apodyterium; ejercicio en la palestra.", "Sala templada (tepidarium) y caliente (caldarium).", "Baño frío final (frigidarium)."], "apodyterium → palestra → tepidarium → caldarium → frigidarium."],
    ["Explica el origen de «negocio».", ["<i>Otium</i>: tiempo libre.", "<i>Neg-otium</i>: la negación del ocio.", "Designaba las ocupaciones y el trabajo."], "«Negocio» significa literalmente «no-ocio»."],
    ["Un ciudadano pobre en Roma: ¿dónde viviría, comería y se lavaría?", ["Vivienda: un piso alto de una insula.", "Comida: thermopolia y repartos de trigo.", "Higiene: termas públicas y letrinas."], "Insula, thermopolium y termas públicas."],
    ["Compara la educación romana con la actual.", ["Roma: dependía del dinero; tres etapas (litterator, grammaticus, rhetor).", "Hoy: obligatoria y gratuita hasta los 16 años en España.", "Coincidencias: leer, escribir, literatura, hablar en público."], "La gran diferencia es que hoy la educación es un derecho para todos."],
  ],
  errores: [
    "Pensar que todos los romanos vivían en casas con atrio: la mayoría vivía en pisos de insulae.",
    "Creer que la basílica romana era una iglesia: era un edificio civil para juicios y negocios.",
    "Confundir circo (carreras de carros) con anfiteatro (gladiadores y fieras).",
    "Pensar que los gladiadores siempre luchaban a muerte: eran caros de entrenar y muchos combates terminaban sin muerte.",
    "Creer que las mujeres romanas vivían encerradas como en Grecia: salían, administraban la casa y algunas sus bienes, aunque sin derechos políticos.",
    "Imaginar comidas romanas con tomate, patata o chocolate: son productos americanos que llegaron en el siglo XVI.",
  ],
  ejercicios: {
    basico: [
      ["¿Qué diferencia había entre un ciudadano, un liberto y un esclavo?", "Ciudadano: libre con todos los derechos. Liberto: antiguo esclavo liberado, libre pero sin acceso a cargos. Esclavo: propiedad de otro, sin derechos."],
      ["¿Quién era el pater familias?", "El varón de más edad de la familia, con autoridad sobre todos sus miembros y sus bienes (patria potestas)."],
      ["Escribe las tres partes del nombre de un romano con un ejemplo.", "Praenomen, nomen y cognomen: Marco Tulio Cicerón."],
      ["Nombra tres partes de una domus.", "Atrio (con impluvio), tablinum, cubicula, peristilo, triclinio."],
      ["¿Qué era una insula?", "Un bloque de pisos de alquiler de varias plantas donde vivía la mayoría de la población urbana."],
      ["¿Qué prenda indicaba la ciudadanía romana?", "La toga."],
      ["¿Qué comidas hacían los romanos y cuál era la principal?", "Ientaculum (desayuno), prandium (mediodía) y cena (la principal)."],
      ["¿Qué era el garum?", "Una salsa de pescado fermentado, el condimento más apreciado; se fabricaba mucho en Hispania."],
      ["Nombra las salas de las termas.", "Apodyterium, palestra, tepidarium, caldarium y frigidarium."],
      ["¿Qué se veía en el circo y qué en el anfiteatro?", "Circo: carreras de carros. Anfiteatro: gladiadores y cacerías de fieras."],
      ["¿Qué significa <i>panem et circenses</i>?", "«Pan y juegos de circo»: lo único que, según Juvenal, deseaba el pueblo."],
      ["¿Qué era el foro?", "La plaza central de la ciudad, centro político, religioso, judicial y comercial."],
    ],
    medio: [
      ["Explica cómo se llegaba a ser esclavo y cómo se podía dejar de serlo.", "Por la guerra, por nacer de madre esclava, por deudas o por abandono. Se dejaba de serlo comprando la libertad con el peculio o por manumisión del amo."],
      ["Explica el rito del reconocimiento del recién nacido.", "Se colocaba al bebé a los pies del padre; si lo levantaba (<i>tollere</i>), lo reconocía como hijo. A los 8-9 días recibía su nombre y la bulla."],
      ["Describe las tres etapas de la educación romana.", "Litterator (7 años): leer, escribir, contar. Grammaticus (12): gramática y literatura. Rhetor (15): oratoria. El pedagogo, un esclavo, acompañaba al niño."],
      ["Compara la domus y la insula en cuatro aspectos.", "Domus: unifamiliar, con agua, patios y decoración, de ricos. Insula: bloque de pisos, sin agua ni cocina, riesgo de incendio y derrumbe, de la plebe."],
      ["Explica la diferencia entre toga praetexta, toga viril y toga candida.", "Praetexta: con franja púrpura, niños y magistrados. Viril: blanca, se ponía a los 16 años. Candida: blanqueada, de los candidatos."],
      ["¿Qué derechos tenía y no tenía la mujer romana?", "Podía salir, asistir a espectáculos, divorciarse, administrar bienes (con tutor). No podía votar, ocupar cargos ni ser soldado."],
      ["Explica cómo funcionaba el hipocausto.", "Unos hornos calentaban aire que circulaba bajo el suelo, apoyado sobre pilares de ladrillo, y por conductos en las paredes, calentando las salas y el agua."],
      ["Explica el origen de las palabras «calendario», «cálculo» y «pedagogo».", "Calendario: de las calendas (día 1 del mes). Cálculo: de <i>calculi</i>, piedrecitas para contar. Pedagogo: esclavo que acompañaba al niño a la escuela."],
      ["¿Por qué los magistrados pagaban espectáculos gratuitos?", "Para ganarse el favor y los votos del pueblo y mantenerlo tranquilo (pan y circo)."],
      ["Explica qué eran el cardo y el decumanus.", "Las dos calles principales de una ciudad romana planificada: el cardo de norte a sur y el decumanus de este a oeste; en su cruce estaba el foro."],
      ["¿Cómo dividían los romanos el día y el mes?", "Día: doce horas de luz y doce de noche, de duración variable. Mes: calendas (1), nonas (5 o 7) e idus (13 o 15)."],
      ["Describe un thermopolium y compáralo con un establecimiento actual.", "Puesto callejero con mostrador y vasijas empotradas para comida caliente. Se parece a un bar de comida rápida o a un puesto de comida para llevar."],
      ["¿Qué alimentos no conocían los romanos y por qué?", "Tomate, patata, maíz, chocolate, pimiento, azúcar: son de América (o de difusión posterior) y llegaron a Europa desde el siglo XVI."],
      ["¿Qué eran los collegia?", "Asociaciones de trabajadores de un mismo oficio que se ayudaban, celebraban fiestas y pagaban los entierros de sus miembros."],
    ],
    avanzado: [
      ["Redacta un día en la vida de un niño romano rico y otro de un niño esclavo (80 palabras cada uno).", "Respuesta abierta. Rico: despierta en la domus, va a la escuela con el pedagogo, termas, cena familiar. Esclavo: trabaja desde el amanecer, sin escuela, come restos, duerme donde puede, sin derechos ni descanso fijo."],
      ["Compara los espectáculos romanos con los actuales (fútbol, conciertos, cine): semejanzas y diferencias.", "Semejanzas: masas de público, ídolos, rivalidad de equipos (colores del circo), dinero y política. Diferencias: la violencia mortal de los gladiadores y la crueldad con los animales, hoy inaceptables; los espectáculos romanos eran gratuitos y pagados por políticos."],
      ["Explica por qué la frase «pan y circo» se usa hoy en política. Pon un ejemplo.", "Se usa para criticar a gobiernos que distraen a la población con entretenimiento y ayudas en lugar de resolver los problemas de fondo. Ejemplo: usar grandes eventos deportivos para tapar problemas sociales."],
      ["Valora críticamente la esclavitud romana y relaciónala con la esclavitud moderna.", "Era una institución legal y aceptada que trataba a las personas como cosas. Hoy está prohibida (art. 4 DUDH), pero persisten formas como el trabajo forzoso o la trata, que afectan a millones de personas."],
      ["Diseña el plano de una ciudad romana con sus edificios principales y explica la función de cada uno.", "Respuesta abierta. Debe incluir cardo y decumanus, foro con templo, basílica y curia, termas, teatro, anfiteatro, acueducto, murallas y necrópolis fuera de la ciudad."],
      ["Compara la situación de la mujer en Roma con la actual en España.", "Roma: sin voto ni cargos, bajo tutela masculina, matrimonios concertados. Hoy: igualdad legal, derecho al voto (desde 1931 en España), acceso a cualquier profesión, aunque persisten desigualdades como la brecha salarial."],
      ["Investiga un yacimiento romano de España (Mérida, Itálica, Tarraco, Baelo Claudia) y describe qué edificios de la vida cotidiana conserva.", "Respuesta abierta. Ejemplo: Baelo Claudia conserva foro, basílica, termas, teatro y fábricas de salazones y garum."],
      ["Explica qué problemas urbanos de Roma siguen existiendo en las ciudades actuales y cómo se intentan solucionar.", "Ruido, tráfico (Roma prohibía carros de día), incendios (vigiles), vivienda cara y de mala calidad (insulae), suciedad. Hoy: normativas de ruido, transporte público, bomberos, leyes de vivienda, recogida de residuos."],
    ],
  },
  quiz: [
    ["La mayoría de la plebe urbana vivía en…", ["domus", "insulae", "villae", "palacios"], 1, "Bloques de pisos."],
    ["El patio con estanque de la domus se llama…", ["peristilo", "atrio con impluvio", "tablinum", "triclinio"], 1, "El impluvio recogía el agua de lluvia."],
    ["El pater familias tenía…", ["solo autoridad sobre los esclavos", "la patria potestas sobre toda la familia", "un cargo político", "un año de mandato"], 1, "Poder sobre personas y bienes."],
    ["En «Marco Tulio Cicerón», «Tulio» es el…", ["praenomen", "nomen", "cognomen", "apodo"], 1, "La gens."],
    ["Un liberto era…", ["un ciudadano rico", "un antiguo esclavo liberado", "un extranjero", "un senador"], 1, "Por manumisión o compra."],
    ["La toga era propia de…", ["esclavos", "ciudadanos varones", "mujeres casadas", "extranjeros"], 1, "Símbolo de la ciudadanía."],
    ["La túnica de la mujer casada se llamaba…", ["toga", "estola", "bulla", "praetexta"], 1, "Y el manto, palla."],
    ["La comida principal era la…", ["ientaculum", "prandium", "cena", "gustatio"], 2, "A media tarde."],
    ["La tríada mediterránea es…", ["trigo, aceite y vino", "maíz, patata y tomate", "arroz, té y soja", "carne, leche y miel"], 0, "La base de la dieta."],
    ["El garum era…", ["un vino", "una salsa de pescado", "un pan", "un postre"], 1, "Muy apreciado."],
    ["El maestro de las primeras letras era el…", ["rhetor", "grammaticus", "litterator", "pedagogo"], 2, "Desde los 7 años."],
    ["El pedagogo era…", ["un profesor de retórica", "un esclavo que acompañaba al niño", "un senador", "un médico"], 1, "«El que conduce al niño»."],
    ["La sala caliente de las termas era el…", ["frigidarium", "tepidarium", "caldarium", "apodyterium"], 2, "Con agua caliente y vapor."],
    ["El sistema de calefacción por el suelo se llamaba…", ["hipocausto", "impluvio", "acueducto", "strigilis"], 0, "Aire caliente bajo el suelo."],
    ["En el circo se celebraban…", ["luchas de gladiadores", "carreras de carros", "obras de teatro", "juicios"], 1, "Bigas y cuadrigas."],
    ["El Coliseo es un…", ["circo", "teatro", "anfiteatro", "foro"], 2, "Anfiteatro Flavio."],
    ["La basílica romana servía para…", ["el culto cristiano", "juicios y negocios", "carreras", "baños"], 1, "Edificio civil del foro."],
    ["«Negocio» viene de <i>negotium</i>, que significa…", ["dinero", "no-ocio", "mercado", "trabajo esclavo"], 1, "Negación del ocio."],
    ["Las calendas eran…", ["el día 1 del mes", "el día 15", "un mercado", "una fiesta"], 0, "De ahí «calendario»."],
    ["Caracalla concedió en el 212…", ["la libertad a los esclavos", "la ciudadanía a todos los hombres libres", "el voto a las mujeres", "la escuela gratuita"], 1, "Constitutio Antoniniana."],
  ],
  examen: [
    ["Los libertos no podían…", ["trabajar", "ser ricos", "ocupar cargos públicos", "casarse"], 2, "Aunque eran libres."],
    ["¿Cuál NO era una prenda romana?", ["túnica", "toga", "estola", "kimono"], 3, "Es japonés."],
    ["El tablinum era…", ["el despacho del pater familias", "la cocina", "un jardín", "la tienda"], 0, "Al fondo del atrio."],
    ["Los thermopolia eran…", ["salas de las termas", "puestos callejeros de comida", "templos", "escuelas"], 1, "Comida caliente para llevar."],
    ["La educación en Roma…", ["era pública y obligatoria", "dependía del dinero familiar", "solo era para niñas", "no existía"], 1, "No había escuela pública."],
    ["Los idus caían en el día…", ["1", "5 o 7", "13 o 15", "30"], 2, "Idus de marzo: 15."],
    ["La crítica «panem et circenses» es de…", ["Cicerón", "Juvenal", "César", "Augusto"], 1, "Poeta satírico."],
    ["Los vigiles de Augusto eran…", ["gladiadores", "bomberos y vigilantes nocturnos", "senadores", "sacerdotes"], 1, "Contra incendios y delitos."],
  ],
  feynman: ["Cómo se organizaba la sociedad romana y qué derechos tenía cada grupo", "La familia romana, el pater familias y los tria nomina", "Las diferencias entre domus, insula y villa", "Cómo eran las termas y los espectáculos"],
  mapa: L.mapa("VIDA COTIDIANA", "var(--red)", [
    ["Sociedad", "ciudadanos · libertos · esclavos", "var(--muted)"],
    ["Familia", "pater familias · tria nomina", "var(--red)"],
    ["Casa y mesa", "domus · insula · cena · garum", "var(--sun)"],
    ["Ocio", "termas · circo · anfiteatro", "var(--pen)"],
  ], 270),
  tarjetas: [
    ["Pater familias", "Varón de más edad, con poder sobre la familia y sus bienes."],
    ["Tria nomina", "Praenomen, nomen y cognomen: Marco Tulio Cicerón."],
    ["Liberto", "Antiguo esclavo liberado."],
    ["Manumisión", "Acto por el que el amo libera a un esclavo."],
    ["Domus", "Casa unifamiliar de los ricos, con atrio y peristilo."],
    ["Insula", "Bloque de pisos de alquiler."],
    ["Toga", "Prenda de lana blanca, símbolo de la ciudadanía."],
    ["Tríada mediterránea", "Trigo, aceite y vino."],
    ["Etapas educativas", "Litterator, grammaticus y rhetor."],
    ["Termas", "Apodyterium, tepidarium, caldarium, frigidarium."],
    ["Circo y anfiteatro", "Carreras de carros / gladiadores y fieras."],
    ["Otium y negotium", "Tiempo libre / trabajo («negocio»)."],
  ],
  glosario: [
    ["Ciudadano", "Persona libre con plenos derechos en Roma."],
    ["Liberto", "Esclavo que ha obtenido la libertad."],
    ["Cliente", "Persona que dependía de un patrono rico a cambio de apoyo."],
    ["Peculio", "Dinero que un esclavo podía ahorrar."],
    ["Patria potestas", "Poder del pater familias sobre su familia."],
    ["Bulla", "Amuleto que llevaban los niños libres."],
    ["Matrona", "Mujer casada, señora de la casa."],
    ["Vestal", "Sacerdotisa de la diosa Vesta."],
    ["Atrio", "Sala central de la domus con una abertura en el techo."],
    ["Peristilo", "Jardín rodeado de columnas."],
    ["Triclinio", "Comedor con lechos para comer recostado."],
    ["Thermopolium", "Puesto callejero de comida caliente."],
    ["Hipocausto", "Calefacción por aire caliente bajo el suelo."],
    ["Strigilis", "Raspador curvo para limpiar la piel en las termas."],
    ["Auriga", "Conductor de carros en el circo."],
    ["Gladiador", "Luchador profesional del anfiteatro."],
    ["Foro", "Plaza central de la ciudad romana."],
    ["Basílica", "Edificio civil para juicios y negocios."],
  ],
  situacion: {
    titulo: "Guía turística de Roma en el año 100",
    reto: "Una agencia de «viajes en el tiempo» os encarga una guía para turistas del siglo XXI que visitan Roma en el año 100. Debe explicarles cómo vivir un día allí sin meter la pata.",
    pasos: [
      "Dividid la guía en apartados: alojamiento, ropa, comida, higiene, ocio, normas sociales y peligros.",
      "Investigad cada apartado con al menos dos fuentes y buscad imágenes de restos arqueológicos reales.",
      "Incluid un pequeño glosario latino de supervivencia (salve, vale, taberna, thermae…).",
      "Añadid una sección crítica: «Lo que no te contarán», sobre la esclavitud y las desigualdades.",
      "Maquetad la guía en formato folleto o digital y presentadla a la clase.",
    ],
    producto: "Una guía turística ilustrada de un día en la Roma del año 100.",
    evaluacion: ["La información es históricamente rigurosa y está bien documentada.", "Se usan correctamente los términos latinos de la vida cotidiana.", "La sección crítica reflexiona con argumentos sobre la esclavitud y la desigualdad.", "El diseño es atractivo, claro y está bien organizado."],
  },
  familias: ["Comparad en casa un día romano con un día actual: qué comíais, cómo os laváis, qué hacéis en el tiempo libre.", "Si visitáis un yacimiento romano, pedidle que os haga de guía.", "Repasad juntos las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Roma: historia, cultura y civilización. Organización social y familiar, vivienda, alimentación, educación, trabajo, ocio y espectáculos; reflexión crítica sobre la esclavitud y la desigualdad, y comparación con la sociedad actual (RD 217/2022, Latín 4º ESO; Decret 175/2022 de Catalunya).",
    ideas: ["Recrear una cena romana con recetas de Apicio adaptadas.", "Debate: ¿eran los gladiadores los futbolistas de Roma?", "Visita virtual a Pompeya o Herculano con fichas de observación."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Domus, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Domus" },
    { t: "Termas romanas, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Termas_romanas" },
    { t: "Esclavitud en la Antigua Roma, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Esclavitud_en_la_Antigua_Roma" },
  ],
});
