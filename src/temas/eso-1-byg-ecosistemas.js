// Biología y Geología 1º ESO: los ecosistemas. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "Los ecosistemas",
  minutos: 55,
  objetivos: ["Definir ecosistema e identificar sus componentes: biotopo y biocenosis", "Reconocer los factores abióticos y las adaptaciones de los seres vivos", "Construir cadenas y redes tróficas con productores, consumidores y descomponedores", "Describir las relaciones entre seres vivos y los principales ecosistemas"],
  claves: ["ecosistema", "biotopo", "biocenosis", "hábitat", "factor abiótico", "adaptación", "población", "comunidad", "productor", "consumidor", "descomponedor", "cadena trófica", "red trófica", "depredación", "simbiosis", "parasitismo"],
  pregunta: {
    texto: "En un bosque desaparecen los lobos porque se les caza. Al principio parece una buena noticia para los ciervos, pero años después el bosque está en peor estado. ¿Por qué?",
    respuesta: "Porque en un ecosistema todo está conectado. Sin lobos, los <b>ciervos</b> aumentan mucho, comen demasiados brotes y arbolillos, y el bosque deja de renovarse. Con menos plantas hay más erosión, menos refugio para otros animales y, al final, menos comida para los propios ciervos. Un <b>depredador</b> ayuda a mantener el <b>equilibrio</b>. Algo así se observó en el parque de Yellowstone (EE. UU.), donde la vuelta de los lobos ayudó a recuperar la vegetación de los ríos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un ecosistema?</h3><p>Un <mark>ecosistema</mark> es el conjunto formado por los <b>seres vivos</b> que habitan en un lugar, el <b>medio físico</b> en el que viven y las <b>relaciones</b> que se establecen entre todos ellos. Tiene dos componentes. El <mark>biotopo</mark> es el lugar con sus características físicas y químicas: el tipo de suelo, el agua, la luz, la temperatura, la humedad… La <mark>biocenosis</mark> o <b>comunidad</b> es el conjunto de seres vivos de todas las especies que viven en ese biotopo. Dentro de la comunidad, el conjunto de individuos de una misma especie que viven en un lugar forma una <b>población</b>: la población de conejos de un monte, por ejemplo. El sitio concreto donde vive una especie dentro del ecosistema es su <b>hábitat</b>. Los ecosistemas pueden ser de tamaños muy distintos: un charco, un tronco caído, una charca, un bosque o un océano entero. El conjunto de todos los ecosistemas de la Tierra forma la biosfera. La ciencia que estudia los ecosistemas se llama <mark>ecología</mark>.</p>`,
    },
    {
      html: `<h3>Los factores abióticos y las adaptaciones</h3><p>Las características del biotopo se llaman <mark>factores abióticos</mark> (sin vida), y determinan qué seres vivos pueden vivir en cada lugar. Los más importantes son: la <b>luz</b>, que necesitan las plantas para la fotosíntesis y que en el mar solo llega a los primeros 200 metros; la <b>temperatura</b>; la <b>humedad</b> y la cantidad de <b>agua</b> disponible; el tipo de <b>suelo</b> y sus nutrientes; y, en el agua, la <b>salinidad</b>, la presión o el oxígeno disuelto. Los seres vivos tienen <mark>adaptaciones</mark>: características que les permiten sobrevivir en su medio. Por ejemplo, el <b>cactus</b> tiene hojas transformadas en espinas para perder menos agua y un tallo grueso que la almacena; el <b>oso polar</b> tiene una gruesa capa de grasa y pelo; el <b>dromedario</b> aguanta días sin beber; las <b>encinas</b> tienen hojas duras y pequeñas para soportar los veranos secos; y muchos árboles pierden las hojas en otoño. Los factores que dependen de otros seres vivos, como la comida o los depredadores, se llaman <b>factores bióticos</b>.</p>`,
    },
    {
      html: `<h3>Productores, consumidores y descomponedores</h3><p>En un ecosistema, cada ser vivo cumple un papel según cómo obtiene su alimento. Estos papeles se llaman <mark>niveles tróficos</mark>. Los <mark>productores</mark> son los seres <b>autótrofos</b> (plantas, algas y algunas bacterias): fabrican materia orgánica con la energía de la luz y son la base de todo el ecosistema. Los <mark>consumidores</mark> son <b>heterótrofos</b> y se alimentan de otros seres vivos. Los <b>consumidores primarios</b> son los <b>herbívoros</b>, que comen productores, como el conejo, el saltamontes o el ciervo. Los <b>consumidores secundarios</b> son <b>carnívoros</b> que comen herbívoros, como la comadreja o la araña. Los <b>consumidores terciarios</b> comen otros carnívoros, como el águila o el lobo. Los <b>omnívoros</b>, como el jabalí o las personas, comen tanto plantas como animales. Los <mark>descomponedores</mark>, sobre todo <b>bacterias y hongos</b>, se alimentan de los restos de todos los demás (hojas caídas, cadáveres, excrementos) y los transforman en <b>sales minerales</b> que vuelven al suelo y que usan de nuevo las plantas. Sin ellos, los restos se acumularían y los nutrientes se agotarían.</p>`,
    },
    {
      html: `<h3>Cadenas y redes tróficas</h3><p>Una <mark>cadena trófica</mark> o alimentaria es una representación de quién se come a quién en un ecosistema, de forma lineal. Se dibuja con <b>flechas que van desde el ser vivo que es comido hacia el que lo come</b>: la flecha indica hacia dónde va la materia y la energía. Por ejemplo: hierba → saltamontes → lagartija → culebra → águila. En la realidad, casi todos los seres vivos comen más de un tipo de alimento y son comidos por varios depredadores, así que las cadenas se entrecruzan y forman una <mark>red trófica</mark>, mucho más realista. En cada paso de la cadena se pierde mucha energía, porque cada ser vivo gasta la mayor parte de lo que come en vivir (moverse, respirar, mantener la temperatura) y solo una pequeña parte, alrededor del <b>10 %</b>, pasa al siguiente nivel. Por eso las cadenas tienen pocos eslabones (raramente más de cinco) y en un ecosistema hay muchos más kilos de plantas que de herbívoros, y muchos más de herbívoros que de carnívoros. La <b>materia</b>, en cambio, se recicla gracias a los descomponedores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena trófica: hierba, saltamontes, lagartija y águila, con flechas hacia quien come, y los descomponedores devolviendo sales al suelo">${BG}
        ${cj(6, 30, 52, 30, "hierba", COL.verde)}${cj(72, 30, 58, 30, "saltamontes", COL.sol)}${cj(144, 30, 52, 30, "lagartija", COL.naranja)}${cj(210, 30, 44, 30, "águila", COL.rojo)}
        ${fl(58, 45, 70, 45, "var(--ink)", 2)}${fl(130, 45, 142, 45, "var(--ink)", 2)}${fl(196, 45, 208, 45, "var(--ink)", 2)}
        ${et(32, 76, "productor", 56, { size: 9, weight: 400 })}${et(101, 76, "c. primario", 60, { size: 9, weight: 400 })}${et(170, 76, "c. secundario", 60, { size: 9, weight: 400 })}${et(232, 76, "c. terciario", 46, { size: 9, weight: 400 })}
        ${cj(80, 118, 110, 30, "descomponedores", COL.marron)}
        ${fl(170, 88, 160, 114, "var(--muted)", 1.5)}${fl(232, 88, 186, 116, "var(--muted)", 1.5)}${fl(100, 88, 116, 114, "var(--muted)", 1.5)}${fl(80, 128, 44, 86, COL.verde, 2)}
        ${et(34, 140, "sales minerales", 64, { size: 9, color: COL.verde })}${t(130, 168, "restos y cadáveres", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "gMFO3YuJriA", titulo: "CADENAS ALIMENTARIAS para niños - Niveles tróficos", canal: "Smile and Learn - Español", vistas: 963562 },
    },
    {
      html: `<h3>Relaciones entre seres vivos</h3><p>Los seres vivos de un ecosistema se relacionan entre sí de muchas maneras. Las <b>relaciones intraespecíficas</b> se dan entre individuos de la <b>misma especie</b>. Algunas son de colaboración, como las <b>familias</b> (padres que cuidan de sus crías), las <b>manadas</b> o bandadas (que se protegen y cazan en grupo), las <b>colonias</b> (individuos unidos físicamente, como los corales) o las <b>sociedades</b> (con reparto de tareas, como las abejas o las hormigas). También hay <b>competencia</b>, por ejemplo entre machos por la pareja o el territorio. Las <b>relaciones interespecíficas</b> se dan entre <b>especies distintas</b>. En la <mark>depredación</mark>, un animal (depredador) caza y se come a otro (presa), como el zorro al conejo. En el <mark>parasitismo</mark>, un ser vivo (parásito) vive a costa de otro (huésped) y lo perjudica sin matarlo enseguida, como la pulga o la garrapata. En el <mark>mutualismo</mark> o <b>simbiosis</b> las dos especies salen beneficiadas, como la abeja que se alimenta del néctar y poliniza la flor. En el <b>comensalismo</b> una especie se beneficia y a la otra le es indiferente, como el pez rémora que se pega al tiburón para aprovechar sus restos. Y en la <b>competencia</b>, dos especies se disputan el mismo recurso.</p>${tabla(["Relación", "Especie A", "Especie B", "Ejemplo"], [["Depredación", "gana", "pierde", "zorro y conejo"], ["Parasitismo", "gana", "pierde", "garrapata y perro"], ["Mutualismo", "gana", "gana", "abeja y flor"], ["Comensalismo", "gana", "ni gana ni pierde", "rémora y tiburón"], ["Competencia", "pierde", "pierde", "zorro y águila por los conejos"]])}`,
      video: { id: "1Pqr7RVMx4A", titulo: "RELACIONES INTERESPECÍFICAS para niños - Depredación, parasitismo, mutualismo y comensalismo", canal: "Smile and Learn - Español", vistas: 317195 },
    },
    {
      html: `<h3>Ecosistemas terrestres</h3><p>Los ecosistemas terrestres dependen sobre todo del <b>clima</b> (temperatura y lluvias), que determina el tipo de vegetación, y esta, a su vez, los animales. Los grandes ecosistemas terrestres se llaman <b>biomas</b>. La <b>selva tropical</b>, con calor y lluvia todo el año, es el bioma con más biodiversidad, con árboles altísimos y muchas capas de vegetación. El <b>desierto</b>, con muy poca lluvia, tiene plantas y animales adaptados a la falta de agua. La <b>sabana</b>, con una estación seca, tiene hierbas altas y árboles dispersos, y grandes manadas de herbívoros. Los <b>bosques templados</b> de hoja caduca, como los robledales y hayedos del norte de España, pierden las hojas en otoño. El <b>bosque mediterráneo</b>, típico de gran parte de España, tiene veranos secos y calurosos y árboles de hoja perenne, dura y pequeña, como la encina y el alcornoque, con animales como el conejo, el jabalí, el lince o el águila imperial. La <b>taiga</b> es un bosque de coníferas de zonas frías, y la <b>tundra</b>, cerca de los polos, solo tiene musgos, líquenes y pequeños arbustos.</p>`,
    },
    {
      html: `<h3>Ecosistemas acuáticos</h3><p>Los ecosistemas acuáticos dependen sobre todo de la <b>luz</b>, la <b>temperatura</b>, la <b>salinidad</b> y el <b>oxígeno</b> disuelto. Los <b>ecosistemas marinos</b> ocupan la mayor parte del planeta. En la zona superficial, donde llega la luz, vive el <b>plancton</b>: el fitoplancton (algas microscópicas, los productores) y el zooplancton (pequeños animales que se alimentan de él). Los seres que nadan libremente, como peces, calamares o delfines, forman el <b>necton</b>. Y los que viven en el fondo, fijos o desplazándose sobre él, como algas, esponjas, corales, estrellas o cangrejos, forman el <b>bentos</b>. En las zonas profundas, sin luz, la comida llega de arriba como una «nieve» de restos. Un ecosistema marino muy importante del Mediterráneo son las <b>praderas de posidonia</b>, una planta marina que oxigena el agua y sirve de refugio a muchas especies. Los <b>ecosistemas de agua dulce</b> pueden tener agua en movimiento, como los ríos y arroyos, o agua quieta, como los lagos, lagunas y charcas. Los <b>humedales</b> y las desembocaduras de los ríos son zonas de transición muy ricas en vida, por ejemplo para las aves migratorias.</p>`,
    },
    {
      html: `<h3>El equilibrio de los ecosistemas</h3><p>Los ecosistemas están en un <mark>equilibrio dinámico</mark>: el número de individuos de cada población sube y baja, pero se mantiene más o menos estable a lo largo del tiempo. Por ejemplo, si un año hay muchos conejos, los zorros tienen más comida y aumentan; al haber más zorros, cazan más conejos, que disminuyen; y entonces, con menos comida, los zorros también disminuyen. Este equilibrio se rompe cuando hay cambios bruscos, que pueden ser naturales, como un incendio, una inundación o una erupción, o provocados por las personas, como la destrucción de hábitats, la contaminación, la caza excesiva o la introducción de <b>especies invasoras</b>, que no tienen depredadores en su nuevo medio y desplazan a las especies autóctonas (por ejemplo, el cangrejo rojo americano, la cotorra argentina o el mejillón cebra en España). Tras una alteración, los ecosistemas pueden recuperarse poco a poco: después de un incendio, primero aparecen hierbas, después matorrales y, con los años, de nuevo el bosque. Este proceso se llama <b>sucesión ecológica</b>.</p>`,
    },
  ],
  figura: {
    titulo: "El ecosistema en ocho ideas",
    svg: rejilla([
      ["Biotopo", "medio físico: luz, agua, suelo", COL.marron],
      ["Biocenosis", "todos los seres vivos", COL.verde],
      ["Productores", "plantas y algas", COL.verde],
      ["Consumidores", "herbívoros y carnívoros", COL.rojo],
      ["Descomponedores", "bacterias y hongos", COL.gris],
      ["Red trófica", "cadenas que se cruzan", COL.azul],
      ["Relaciones", "depredación, mutualismo…", COL.morado],
      ["Equilibrio", "poblaciones estables", COL.agua],
    ], 4, 86, "Resumen: componentes del ecosistema, niveles tróficos, red trófica, relaciones y equilibrio"),
  },
  video: { id: "3LeeVif_qSQ", titulo: "Definición y TIPOS de ECOSISTEMAS", canal: "EcologíaVerde", vistas: 1476023, megusta: 0, busqueda: "qué es un ecosistema" },
  ejemplos: [
    { enunciado: "Construye una cadena trófica con: zorro, hierba, conejo. Indica el nivel trófico de cada uno.",
      pasos: ["El productor es la hierba.", "El conejo come hierba: consumidor primario (herbívoro).", "El zorro come conejos: consumidor secundario (carnívoro).", "Las flechas van hacia quien come."],
      resultado: "Hierba → conejo → zorro." },
    { enunciado: "Si las plantas de un prado tienen 10.000 unidades de energía, ¿cuánta llega aproximadamente a los herbívoros? ¿Y a los carnívoros que se los comen?",
      pasos: ["Solo pasa alrededor del 10 % a cada nivel.", "Herbívoros: 10 % de 10.000 = 1.000 unidades.", "Carnívoros: 10 % de 1.000 = 100 unidades."],
      resultado: "Unas 1.000 a los herbívoros y unas 100 a los carnívoros." },
    { enunciado: "Clasifica estas relaciones: a) el piojo en la cabeza de una persona; b) el pez payaso que vive entre los tentáculos de la anémona y la limpia; c) el búho que caza ratones.",
      pasos: ["a) El piojo se beneficia y la persona sale perjudicada: parasitismo.", "b) Los dos se benefician: mutualismo.", "c) Uno caza y se come al otro: depredación."],
      resultado: "a) parasitismo; b) mutualismo; c) depredación." },
  ],
  errores: [
    "Dibujar las flechas de la cadena trófica al revés (deben ir hacia quien come).",
    "Olvidar a los descomponedores en el ecosistema.",
    "Confundir población (una especie) con comunidad (todas las especies).",
    "Pensar que los depredadores son «malos» para el ecosistema: ayudan a mantener el equilibrio.",
    "Creer que la energía se recicla como la materia: la energía se pierde en cada nivel.",
  ],
  ejercicios: [
    { q: "Define ecosistema, biotopo y biocenosis.", sol: "Ecosistema: seres vivos, medio físico y sus relaciones. Biotopo: medio físico. Biocenosis: conjunto de seres vivos." },
    { q: "Diferencia entre población y comunidad.", sol: "Población: individuos de una misma especie en un lugar. Comunidad: todas las poblaciones de un lugar." },
    { q: "Nombra cuatro factores abióticos.", sol: "Luz, temperatura, humedad (agua) y tipo de suelo (también salinidad)." },
    { q: "Pon dos ejemplos de adaptaciones a la falta de agua.", sol: "Las espinas y el tallo grueso del cactus; el dromedario, que aguanta días sin beber." },
    { q: "¿Qué hacen los descomponedores y por qué son imprescindibles?", sol: "Transforman los restos en sales minerales que usan las plantas; sin ellos se agotarían los nutrientes." },
    { q: "¿Por qué las cadenas tróficas tienen pocos eslabones?", sol: "Porque en cada nivel se pierde la mayor parte de la energía y solo pasa un 10 %." },
    { q: "¿Qué diferencia hay entre una cadena y una red trófica?", sol: "La cadena es lineal; la red une muchas cadenas que se cruzan y es más realista." },
    { q: "Pon un ejemplo de relación intraespecífica de colaboración y otro de competencia.", sol: "Colaboración: una manada de lobos cazando. Competencia: dos ciervos machos luchando." },
    { q: "Describe el bosque mediterráneo.", sol: "Veranos secos y calurosos; árboles de hoja perenne, dura y pequeña (encina, alcornoque); animales como el conejo, el jabalí o el lince." },
    { q: "¿Qué es una especie invasora? Pon un ejemplo.", sol: "Una especie introducida que se extiende y desplaza a las autóctonas; el cangrejo rojo americano." },
  ],
  quiz: [
    { q: "El medio físico de un ecosistema es el…", o: ["biotopo", "biocenosis", "hábitat"], a: 0, e: "Biotopo." },
    { q: "La luz y la temperatura son factores…", o: ["abióticos", "bióticos", "tróficos"], a: 0, e: "Abióticos." },
    { q: "Las plantas son…", o: ["productores", "consumidores", "descomponedores"], a: 0, e: "Productores." },
    { q: "Un herbívoro es un consumidor…", o: ["primario", "secundario", "terciario"], a: 0, e: "Primario." },
    { q: "Los hongos y bacterias que reciclan restos son…", o: ["descomponedores", "productores", "depredadores"], a: 0, e: "Descomponedores." },
    { q: "Las flechas de una cadena trófica apuntan…", o: ["hacia quien come", "hacia quien es comido", "al Sol"], a: 0, e: "Hacia quien come." },
    { q: "A cada nivel trófico pasa aproximadamente el…", o: ["10 % de la energía", "50 %", "100 %"], a: 0, e: "Un 10 %." },
    { q: "La abeja y la flor mantienen una relación de…", o: ["mutualismo", "parasitismo", "competencia"], a: 0, e: "Mutualismo." },
    { q: "La garrapata en un perro es un ejemplo de…", o: ["parasitismo", "comensalismo", "sociedad"], a: 0, e: "Parasitismo." },
    { q: "La posidonia es…", o: ["una planta marina", "un pez", "un alga de río"], a: 0, e: "Planta marina del Mediterráneo." },
  ],
  examen: [
    { q: "Los seres que nadan libremente en el mar forman el…", o: ["necton", "plancton", "bentos"], a: 0, e: "Necton." },
    { q: "La recuperación de un bosque tras un incendio se llama…", o: ["sucesión ecológica", "metamorfosis", "red trófica"], a: 0, e: "Sucesión." },
    { q: "Las abejas forman…", o: ["sociedades", "colonias unidas físicamente", "parásitos"], a: 0, e: "Sociedades con reparto de tareas." },
  ],
  feynman: ["Qué componentes tiene un ecosistema", "Cómo se construye una cadena trófica y por qué se pierde energía", "Qué tipos de relaciones hay entre especies"],
  mapa: mapa("ECOSISTEMA", "var(--eso)", [
    ["Componentes", "biotopo · biocenosis", COL.marron],
    ["Niveles tróficos", "productores · consumidores", COL.verde],
    ["Relaciones", "depredación · mutualismo", COL.morado],
    ["Tipos", "terrestres · acuáticos", COL.azul],
  ], 280),
  tarjetas: [
    ["Ecosistema", "Seres vivos, medio físico y sus relaciones."],
    ["Biotopo", "Medio físico con sus factores abióticos."],
    ["Biocenosis", "Conjunto de seres vivos de un ecosistema."],
    ["Productor", "Ser autótrofo, base del ecosistema."],
    ["Descomponedor", "Transforma los restos en sales minerales."],
    ["Red trófica", "Conjunto de cadenas tróficas entrecruzadas."],
    ["Mutualismo", "Relación en la que ganan las dos especies."],
    ["Especie invasora", "Especie introducida que desplaza a las autóctonas."],
  ],
  familias: ["Observad un pequeño ecosistema (una maceta, un rincón del parque) y anotad seres vivos y factores abióticos.", "Construid juntos una red trófica con los alimentos de una comida familiar.", "Informaos sobre alguna especie invasora de vuestra zona y qué se hace para controlarla."],
  profesores: {
    saberes: "Los ecosistemas: componentes, factores abióticos y adaptaciones, niveles tróficos, cadenas y redes tróficas, flujo de energía y ciclo de la materia, relaciones intra e interespecíficas, ecosistemas terrestres y acuáticos, equilibrio y especies invasoras (RD 217/2022, Biología y Geología, bloque Ecología y sostenibilidad).",
    ideas: ["Ecosistema en una botella cerrada con plantas acuáticas y caracoles.", "Juego de rol de la red trófica con un ovillo de lana.", "Salida de campo para estudiar un ecosistema cercano con transectos sencillos."],
  },
  fuentes: [RD, wiki("Ecosistema", "Ecosistema"), wiki("Red trófica", "Red_trófica"), { t: "Red de Parques Nacionales (MITECO)", url: "https://www.miteco.gob.es/es/red-parques-nacionales.html" }],
  revisado: REV,
};
