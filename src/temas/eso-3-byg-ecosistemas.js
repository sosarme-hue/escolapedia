// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "Los ecosistemas y su conservación",
  minutos: 105,
  objetivos: [
    "Identificar los componentes de un ecosistema y los factores abióticos y bióticos",
    "Clasificar las relaciones entre seres vivos",
    "Explicar las relaciones tróficas, las cadenas y las redes alimentarias",
    "Comprender el flujo de energía, el ciclo de la materia y el ciclo del carbono",
    "Describir la sucesión ecológica y los ecosistemas de España",
    "Analizar los impactos humanos, como la eutrofización, y las medidas para conservar la biodiversidad",
  ],
  claves: ["ecosistema", "biotopo", "biocenosis", "productor", "consumidor", "descomponedor", "red trófica", "ciclo del carbono", "sucesión ecológica", "biodiversidad"],
  pregunta: {
    texto: "En los años veinte se eliminaron los lobos del parque de Yellowstone. Cuando volvieron, en 1995, los ríos cambiaron de forma. ¿Cómo puede un depredador cambiar un río?",
    respuesta: "Sin lobos, los ciervos se comían los árboles jóvenes de las orillas y la tierra se desmoronaba. Con lobos, los ciervos evitaron esas zonas, crecieron sauces y álamos, volvieron los castores y las raíces sujetaron las orillas. En un <mark>ecosistema</mark> todo está conectado: cambiar una pieza mueve las demás.",
  },
  lectura: {
    titulo: "Una isla recién nacida",
    html: `<p>En noviembre de 1963, unos pescadores vieron salir humo del mar al sur de Islandia. Era una erupción volcánica submarina, y en pocos días asomó una isla nueva de roca negra y ceniza. La llamaron Surtsey. Los científicos se dieron cuenta enseguida de que tenían una oportunidad única: observar cómo llega la vida a un lugar donde no hay absolutamente nada.</p>
<p>Desde entonces, solo unos pocos investigadores pueden pisarla, y con mucho cuidado para no llevar semillas en las botas. Las primeras en llegar fueron bacterias y mohos traídos por el viento. En 1965 brotó la primera planta, una especie de costa cuya semilla había llegado flotando. Después aparecieron musgos y líquenes sobre la lava. Las gaviotas empezaron a anidar en los años ochenta, y sus excrementos abonaron el suelo: alrededor de las colonias crecieron praderas, llegaron insectos, arañas y caracoles.</p>
<p>Hoy Surtsey tiene decenas de especies de plantas y cientos de invertebrados, y es Patrimonio de la Humanidad. Es un laboratorio natural que muestra cómo se forma un ecosistema: un medio físico, unos seres vivos y una red de relaciones entre ellos. En este tema aprenderás cómo funcionan los ecosistemas y por qué es tan importante conservarlos.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué es un ecosistema</h3><p>Un <b>ecosistema</b> es el conjunto formado por los seres vivos de un lugar, el medio físico en el que viven y las relaciones que se establecen entre todos ellos. Tiene dos componentes. El <mark>biotopo</mark> es el medio físico: el suelo, el agua, el aire y sus condiciones, como la temperatura, la luz o la humedad. La <mark>biocenosis</mark> o comunidad es el conjunto de poblaciones de seres vivos que habitan ese biotopo. Una <b>población</b> es el grupo de individuos de la misma especie que vive en un lugar al mismo tiempo, como los conejos de un monte. Un ecosistema puede ser tan grande como un océano o tan pequeño como una charca.</p><p>Los ecosistemas no tienen fronteras cerradas: intercambian materia y seres vivos con los vecinos. Las aves migratorias, por ejemplo, unen humedales de Europa y África separados por miles de kilómetros.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ecosistema igual a biotopo, el medio físico, más biocenosis, los seres vivos, más sus relaciones">${BG}
        ${caja(14, 24, 232, 34, "ECOSISTEMA", "var(--leaf)", { size: 14 })}
        ${fl(80, 60, 70, 84)}${fl(180, 60, 190, 84)}
        ${caja(14, 88, 110, 44, "biotopo", "#b8860b", { size: 13 })}${caja(136, 88, 110, 44, "biocenosis", "var(--leaf)", { size: 13 })}
        ${t(69, 150, "suelo · agua · luz", { size: 10, weight: 400 })}${t(191, 150, "plantas · animales", { size: 10, weight: 400 })}${t(191, 164, "hongos · bacterias", { size: 10, weight: 400 })}
        ${t(69, 168, "+ relaciones", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>1.2 Los factores abióticos y bióticos</h3><p>Los <b>factores abióticos</b> son las características físicas y químicas del biotopo. La <b>luz</b> permite la fotosíntesis y por eso en el fondo del mar no hay plantas. La <b>temperatura</b> marca qué seres pueden vivir en un lugar. El <b>agua</b> y la <b>humedad</b> son imprescindibles. Otros son la salinidad, el tipo de suelo o el viento. Los <b>factores bióticos</b> son los seres vivos y las relaciones entre ellos. Cada especie solo vive dentro de unos <mark>límites de tolerancia</mark>: por ejemplo, la trucha necesita aguas frías y con mucho oxígeno, y desaparece si el río se calienta o se contamina. Los seres vivos presentan <b>adaptaciones</b> a su medio, como las hojas en forma de espina de los cactus.</p>`,
      svg: L.compara("Factores abióticos y bióticos", ["Abióticos", "var(--sun)", ["luz", "temperatura", "agua y humedad", "suelo y salinidad"]], ["Bióticos", "var(--leaf)", ["seres vivos", "alimentación", "competencia", "cooperación"]]),
      video: { id: "AzU6IY33WcU", titulo: "Ecosistema | Factores Bióticos y Abióticos [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 668104 },
    },
    {
      html: `<h3>1.3 Las relaciones entre seres vivos</h3><p>Las <b>relaciones intraespecíficas</b> se dan entre individuos de la misma especie. Pueden ser de cooperación, como las <b>familias</b> de aves, los <b>enjambres</b> de abejas con reparto de tareas o las <b>manadas</b> de lobos que cazan juntos, o de <b>competencia</b>, por el territorio, la comida o la pareja. Las <b>relaciones interespecíficas</b> se dan entre especies distintas. Destacan la <mark>depredación</mark>, en la que un depredador caza a su presa; el <mark>parasitismo</mark>, en el que el parásito vive a costa del huésped, como la garrapata en un perro; el <mark>mutualismo</mark>, en el que ambos ganan, como la abeja y la flor; el <b>comensalismo</b>, en el que uno gana y al otro le es indiferente; y la <b>competencia</b> entre especies por el mismo recurso.</p><p>Un ejemplo curioso de mutualismo son los <b>líquenes</b>: un hongo y un alga viven juntos, el alga fabrica alimento con la luz y el hongo le da agua y protección. Por eso pueden vivir sobre rocas desnudas donde ninguno sobreviviría solo.</p>`,
      svg: L.tabla("Relaciones entre especies", ["Relación", "Especie 1", "Especie 2"], [["Depredación", "gana", "pierde"], ["Parasitismo", "gana", "pierde"], ["Mutualismo", "gana", "gana"], ["Comensalismo", "gana", "indiferente"], ["Competencia", "pierde", "pierde"]]),
    },
    {
      html: `<h3>2.1 Productores, consumidores y descomponedores</h3><p>Según cómo obtienen su alimento, los seres vivos ocupan distintos <b>niveles tróficos</b>. Los <mark>productores</mark> son las plantas, las algas y algunas bacterias: fabrican su propia materia orgánica mediante la fotosíntesis, con la energía del Sol. Los <mark>consumidores</mark> se alimentan de otros seres vivos: los <b>primarios</b> son herbívoros, como el conejo; los <b>secundarios</b> comen herbívoros, como el zorro; los <b>terciarios</b> comen otros carnívoros, como el águila. Los <mark>descomponedores</mark>, sobre todo hongos y bacterias, se alimentan de restos y cadáveres y los transforman en sales minerales que vuelven al suelo y que las plantas reutilizan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Niveles tróficos: productores, consumidores primarios, secundarios y terciarios, y los descomponedores que reciben restos de todos">${BG}
        ${[["productor: hierba", "var(--leaf)"], ["c. primario: conejo", "#b8860b"], ["c. secundario: zorro", "var(--red)"], ["c. terciario: águila", "var(--pen)"]].map(([n, c], i) => caja(14, 146 - i * 40, 156, 28, n, c, { size: 11 })).join("")}
        ${[0, 1, 2].map(i => fl(92, 144 - i * 40, 92, 132 - i * 40, "var(--muted)", 2)).join("")}
        ${caja(184, 60, 66, 62, "", "#8a6a4a")}${t(217, 86, "descom-", { size: 11 })}${t(217, 100, "ponedor", { size: 11 })}
        ${t(217, 140, "hongos", { size: 10, weight: 400 })}${t(217, 154, "bacterias", { size: 10, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>2.2 Cadenas y redes tróficas</h3><p>Una <b>cadena trófica</b> es una secuencia lineal de seres vivos en la que cada uno se alimenta del anterior: <i>hierba → saltamontes → lagartija → culebra → águila</i>. Las flechas indican el sentido en el que pasa la materia y la energía, es decir, de quién es comido a quién se lo come. En la naturaleza, las cadenas no están aisladas: un ser vivo come varias cosas y lo comen varios depredadores. Por eso las cadenas se entrelazan en una <mark>red trófica</mark>. Cuanto más compleja es la red, más estable es el ecosistema: si una especie desaparece, sus depredadores pueden alimentarse de otras presas.</p><p>Algunas especies, llamadas <b>especies clave</b>, sostienen a muchas otras. En el monte mediterráneo, el conejo es la presa de más de treinta depredadores, como el lince, el águila imperial o el zorro: si sus poblaciones caen por una enfermedad, toda la red se tambalea.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Red trófica: hierba y bellotas comidas por conejo, saltamontes y ratón; estos comidos por zorro, lagartija y búho; y en lo alto el águila">${BG}
        ${[["hierba", 70, 160, "var(--leaf)"], ["bellotas", 190, 160, "var(--leaf)"], ["conejo", 40, 112, "#b8860b"], ["saltamontes", 130, 112, "#b8860b"], ["ratón", 220, 112, "#b8860b"], ["zorro", 50, 64, "var(--red)"], ["lagartija", 130, 64, "var(--red)"], ["búho", 210, 64, "var(--red)"], ["águila", 130, 20, "var(--pen)"]].map(([n, x, y, c]) => t(x, y, n, { size: 11, color: c })).join("")}
        ${[[70, 150, 44, 120], [70, 150, 126, 120], [190, 150, 214, 120], [190, 150, 140, 120], [40, 102, 48, 72], [130, 102, 130, 72], [220, 102, 212, 72], [40, 102, 196, 70], [220, 102, 60, 72], [50, 54, 120, 26], [130, 54, 130, 30], [210, 54, 140, 26]].map(([a, b, c, d]) => fl(a, b, c, d, "var(--muted)", 1.5)).join("")}</svg>`,
    },
    {
      html: `<h3>2.3 El flujo de energía</h3><p>La energía entra en el ecosistema como <b>luz solar</b> y los productores la transforman en energía química. Pero en cada paso de un nivel trófico al siguiente se pierde la mayor parte: los seres vivos la gastan en moverse, mantener la temperatura y vivir, y se libera como calor. Solo pasa, aproximadamente, un <mark>10 %</mark> al nivel siguiente. Por eso la energía tiene un <b>flujo abierto</b>, en un solo sentido, y hay que reponerla siempre desde el Sol. Por eso también las cadenas son cortas, con cuatro o cinco eslabones, y hay muchos menos depredadores que herbívoros. Se representa con una <b>pirámide de energía</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide de energía: 10.000 unidades en productores, 1.000 en herbívoros, 100 en carnívoros y 10 en superdepredadores; en cada paso se pierde un 90 por ciento como calor">${BG}
        ${[["10.000 · productores", 200, "var(--leaf)"], ["1.000 · herbívoros", 150, "#b8860b"], ["100 · carnívoros", 100, "var(--red)"], ["10", 50, "var(--pen)"]].map(([n, w, c], i) => `<rect x="${110 - w / 2}" y="${140 - i * 34}" width="${w}" height="28" rx="4" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2"/>${t(110, 159 - i * 34, n, { size: 10 })}`).join("")}
        ${fl(160, 104, 206, 86, "var(--red)", 2)}${t(250, 62, "calor", { size: 10, anchor: "end", color: "var(--red)" })}${t(250, 76, "se pierde", { size: 10, anchor: "end", color: "var(--red)" })}
        ${t(110, 20, "solo pasa ~10 %", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>2.4 El ciclo de la materia</h3><p>A diferencia de la energía, la materia no se pierde: <mark>se recicla</mark> en un <b>ciclo cerrado</b>. Los productores toman del medio dióxido de carbono, agua y sales minerales, y fabrican materia orgánica. Esa materia pasa a los consumidores al comerla. Cuando los seres vivos expulsan restos o mueren, los <b>descomponedores</b> los transforman de nuevo en sustancias inorgánicas, que vuelven al suelo, al agua y al aire. Así, los átomos de carbono de tu cuerpo han formado parte antes de plantas, animales y rocas. Sin descomponedores, la Tierra estaría cubierta de restos y las plantas se quedarían sin nutrientes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de la materia: productores, consumidores, descomponedores y materia inorgánica forman un círculo, mientras la energía del Sol entra y sale como calor">${BG}
        <circle cx="130" cy="96" r="58" fill="none" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="5 4"/>
        <rect x="84" y="26" width="92" height="26" rx="8" fill="var(--paper)"/><rect x="176" y="84" width="78" height="26" rx="8" fill="var(--paper)"/><rect x="78" y="142" width="104" height="26" rx="8" fill="var(--paper)"/><rect x="6" y="84" width="76" height="26" rx="8" fill="var(--paper)"/>${caja(84, 26, 92, 26, "productores", "var(--leaf)", { size: 11 })}${caja(176, 84, 78, 26, "consumidores", "#b8860b", { size: 10 })}${caja(78, 142, 104, 26, "descomponedores", "#8a6a4a", { size: 10 })}${caja(6, 84, 76, 26, "sales, CO₂", "var(--inf)", { size: 10 })}
        ${t(24, 30, "☀", { size: 22, color: "#e0a000" })}${fl(36, 34, 80, 38, "#e0a000", 2)}
        ${t(130, 100, "la materia", { size: 10, color: "var(--leaf)" })}${t(130, 114, "se recicla", { size: 10, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>2.5 El ciclo del carbono</h3><p>El carbono es el elemento básico de la materia orgánica, y su recorrido por el planeta es un buen ejemplo de ciclo de la materia. En la atmósfera está como <b>dióxido de carbono</b> (CO₂). Los productores lo captan en la <mark>fotosíntesis</mark> y lo convierten en azúcares y otras moléculas orgánicas. Al comer, el carbono pasa a los consumidores. Todos los seres vivos, en la <mark>respiración celular</mark>, devuelven parte de ese carbono a la atmósfera como CO₂, y los descomponedores liberan el resto al descomponer restos y cadáveres.</p><p>Parte del carbono queda guardado durante millones de años: en las conchas que forman rocas calizas y en los restos de seres vivos que se transformaron en <b>carbón, petróleo y gas natural</b>, los combustibles fósiles. Los océanos y los bosques son grandes <b>sumideros</b> que absorben CO₂.</p><p>Al quemar combustibles fósiles y talar bosques, el ser humano devuelve a la atmósfera en pocas décadas un carbono que tardó millones de años en guardarse. La concentración de CO₂ ha pasado de unas 280 partes por millón antes de la Revolución Industrial a más de 420 hoy, y eso intensifica el efecto invernadero y el cambio climático.</p>`,
      svg: L.ciclo("Ciclo del carbono", "CO₂ del aire", ["Fotosíntesis", "Consumidores", "Respiración", "Descomposición", "Combustión"], "var(--leaf)"),
    },
    {
      html: `<h3>2.6 La sucesión ecológica</h3><p>Los ecosistemas cambian con el tiempo. La <mark>sucesión ecológica</mark> es la serie de cambios por los que una comunidad se va sustituyendo por otra hasta llegar a una etapa estable, la <mark>comunidad clímax</mark>, que en gran parte de la península es el bosque de encinas o de robles.</p><p>La <b>sucesión primaria</b> empieza sobre un terreno sin vida ni suelo, como una colada de lava o una isla volcánica nueva. Las primeras en llegar son las <b>especies pioneras</b>, como los líquenes, que soportan condiciones duras y empiezan a formar suelo. Después llegan musgos, hierbas, arbustos y, por último, árboles. La <b>sucesión secundaria</b> ocurre donde ya había suelo, por ejemplo tras un incendio o en un campo abandonado, y es mucho más rápida.</p><p>A lo largo de la sucesión aumentan el número de especies, la cantidad de materia orgánica y la complejidad de la red trófica. Las perturbaciones, como un incendio, una riada o una tala, hacen retroceder la sucesión. Un bosque mediterráneo quemado puede tardar más de cincuenta años en recuperarse, si no vuelve a arder antes.</p>`,
      svg: L.flujo("Etapas de una sucesión ecológica", ["Roca desnuda: líquenes", "Musgos y hierbas", "Arbustos", "Bosque: comunidad clímax"], "De la roca al bosque"),
    },
    {
      html: `<h3>3.1 Los ecosistemas de la Tierra y de España</h3><p>Los grandes ecosistemas terrestres se llaman <b>biomas</b> y dependen sobre todo del clima: la selva tropical, la sabana, el desierto, el bosque mediterráneo, el bosque templado, la taiga y la tundra. Los <b>ecosistemas acuáticos</b> pueden ser marinos o de agua dulce, como ríos, lagos y humedales. España tiene una gran variedad: <mark>bosque mediterráneo</mark> de encinas y alcornoques, la dehesa, los hayedos y robledales del norte, la alta montaña, los humedales como Doñana o las Tablas de Daimiel, la laurisilva de Canarias y las praderas de <b>posidonia</b> del Mediterráneo, una planta marina que oxigena el agua y protege las playas.</p>`,
      svg: L.radial("Ecosistemas de España", "España", ["Encinar", "Dehesa", "Hayedo", "Humedal", "Laurisilva", "Posidonia"], "var(--leaf)"),
    },
    {
      html: `<h3>3.2 La biodiversidad y los servicios de los ecosistemas</h3><p>La <mark>biodiversidad</mark> es la variedad de seres vivos: de especies, de genes dentro de cada especie y de ecosistemas. Los ecosistemas nos dan gratis <b>servicios</b> imprescindibles: alimentos, agua limpia, madera y medicinas; los bosques producen oxígeno, absorben CO₂ y frenan la erosión; los insectos <b>polinizan</b> gran parte de los cultivos; los humedales depuran el agua y amortiguan las inundaciones. España es uno de los países europeos con más biodiversidad, con especies <b>endémicas</b>, que solo viven aquí, como el lince ibérico o el urogallo cantábrico.</p><p>La biodiversidad está desapareciendo a un ritmo muy superior al natural: según la ONU, alrededor de un millón de especies están amenazadas de extinción. Cada especie que se pierde es una pieza menos de la red, y con ella pueden desaparecer servicios que nos parecían gratuitos.</p>`,
      svg: L.radial("Servicios de los ecosistemas", "Servicios", ["Alimentos", "Agua limpia", "Oxígeno", "Polinización", "Suelo fértil", "Medicinas"], "var(--pen)"),
      video: { id: "IJZuRgvPRb0", titulo: "Qué es la BIODIVERSIDAD y su IMPORTANCIA", canal: "EcologíaVerde", vistas: 521037 },
    },
    {
      html: `<h3>3.3 Los impactos del ser humano</h3><p>Las actividades humanas alteran los ecosistemas. Las principales amenazas son: la <mark>destrucción de hábitats</mark> por la urbanización, la agricultura intensiva o los incendios; la <b>contaminación</b> del aire, el agua y el suelo, incluidos los plásticos en el mar; la <b>sobreexplotación</b>, como la pesca excesiva o la caza; las <mark>especies invasoras</mark>, introducidas por el ser humano, que desplazan a las autóctonas, como el mejillón cebra en el Ebro o el cangrejo americano; y el <b>cambio climático</b>, que desplaza las especies y aumenta las sequías. La contaminación del Mar Menor, en Murcia, muestra cómo un exceso de nutrientes agrícolas puede matar un ecosistema entero.</p><p>Estos impactos suelen sumarse: un río con menos caudal por la sequía concentra más la contaminación, y un bosque fragmentado por carreteras resiste peor los incendios y las plagas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco amenazas para la biodiversidad: destrucción de hábitats, contaminación, sobreexplotación, especies invasoras y cambio climático">${BG}
        ${[["destrucción de hábitats", "var(--red)"], ["contaminación", "#8a6a4a"], ["sobreexplotación", "#b8860b"], ["especies invasoras", "var(--pen)"], ["cambio climático", "var(--inf)"]].map(([n, c], i) => caja(30, 14 + i * 32, 200, 26, n, c, { size: 12 })).join("")}</svg>`,
    },
    {
      html: `<h3>3.4 Un caso cercano: el Mar Menor</h3><p>El Mar Menor, en Murcia, es la mayor laguna salada de Europa. Durante décadas, el agua de los regadíos intensivos del Campo de Cartagena le llevó grandes cantidades de <b>nitratos y fosfatos</b> de los fertilizantes. Esos nutrientes provocan la <mark>eutrofización</mark>, un proceso en cadena:</p><p>1. El exceso de nutrientes hace que las algas microscópicas se multipliquen sin control y el agua se vuelve verde y turbia, como una «sopa verde».<br>2. La luz no llega al fondo y mueren las praderas de plantas marinas.<br>3. Las bacterias descomponedoras consumen el oxígeno del agua al descomponer tanta materia orgánica muerta.<br>4. Sin oxígeno, mueren los peces y los crustáceos: es la <b>anoxia</b>.</p><p>En 2019 y 2021 miles de peces aparecieron muertos en las orillas. En 2022 el Mar Menor se convirtió en el primer ecosistema de Europa con <b>personalidad jurídica</b>: tiene derechos propios que pueden defenderse en los tribunales. Su recuperación exige reducir los nutrientes que llegan a la laguna, recuperar humedales que actúen como filtros y controlar los regadíos ilegales.</p>`,
      svg: L.flujo("Etapas de la eutrofización", ["Exceso de nitratos y fosfatos", "Las algas crecen: agua turbia", "Bacterias gastan el oxígeno", "Mueren peces: anoxia"], "Cómo se ahoga una laguna"),
      video: { id: "iBEl2StKF8Q", titulo: "¿Qué está pasando en el Mar Menor?", canal: "Academia Play", vistas: 526042 },
    },
    {
      html: `<h3>3.5 Cómo conservar los ecosistemas</h3><p>Para proteger la biodiversidad se crean <b>espacios naturales protegidos</b>: España tiene 16 <mark>parques nacionales</mark>, como Ordesa, Doñana, el Teide o Picos de Europa, y forma parte de la <b>Red Natura 2000</b> europea. Se aplican <b>planes de recuperación</b> de especies amenazadas: el lince ibérico pasó de menos de 100 ejemplares en 2002 a más de 2.000 hoy gracias a la cría en cautividad y a la recuperación del conejo. Además, se controlan las especies invasoras y se restauran ecosistemas dañados. Cada persona también puede ayudar: reducir residuos, consumir productos locales y de temporada, no soltar mascotas en la naturaleza y respetar las normas de los espacios protegidos.</p><p>El <b>desarrollo sostenible</b> consiste en satisfacer nuestras necesidades sin comprometer las de las generaciones futuras. Se apoya en una regla sencilla: no sacar de un ecosistema más de lo que puede renovar ni echarle más residuos de los que puede absorber.</p>`,
      svg: L.linea("Recuperación del lince ibérico (aproximado)", [["2002", "menos de 100"], ["2012", "unos 300"], ["2016", "unos 500"], ["2020", "más de 1.100"], ["2024", "más de 2.000"]], "Un éxito de conservación"),
    },
  ],
  figura: {
    titulo: "La energía fluye, la materia se recicla",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Esquema: la energía solar entra en los productores, pasa a los consumidores y se pierde como calor en cada paso; la materia vuelve de los descomponedores al suelo y de ahí a los productores">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${t(60, 60, "☀", { size: 44, color: "#e0a000" })}${t(60, 92, "luz solar", { size: 13, color: "#b8860b" })}
      ${fl(96, 56, 140, 56, "#e0a000", 3)}
      ${caja(146, 36, 130, 40, "productores", "var(--leaf)", { size: 15 })}${fl(278, 56, 326, 56, "var(--muted)", 3)}
      ${caja(332, 36, 130, 40, "consumidores", "#b8860b", { size: 15 })}
      ${fl(211, 34, 211, 10, "var(--red)", 2)}${fl(397, 34, 397, 10, "var(--red)", 2)}${t(520, 22, "calor (energía perdida)", { size: 13, color: "var(--red)" })}
      ${caja(332, 166, 130, 40, "descomponedores", "#8a6a4a", { size: 14 })}${caja(146, 166, 130, 40, "sales y CO₂", "var(--inf)", { size: 15 })}
      ${fl(397, 78, 397, 164, "#8a6a4a", 3)}${fl(330, 186, 280, 186, "#8a6a4a", 3)}${fl(211, 164, 211, 80, "var(--inf)", 3)}
      ${t(304, 128, "materia: ciclo cerrado", { size: 14, color: "var(--leaf)", font: D })}${t(560, 120, "energía:", { size: 14, color: "#b8860b", font: D })}${t(560, 140, "flujo abierto", { size: 14, color: "#b8860b", font: D })}
    </svg>`,
  },
  video: { id: "usDVb2JWhHo", titulo: "¿Qué son los ecosistemas? - Tipos de ecosistemas", canal: "Smile and Learn - Español", vistas: 2381565, megusta: 0, busqueda: "ecosistemas biótico abiótico" },
  ejemplos: [
    { enunciado: "En una cadena hierba → conejo → zorro, la hierba fija 20.000 kJ de energía. ¿Cuánta llega aproximadamente al zorro?",
      pasos: ["De cada nivel al siguiente pasa alrededor del 10 %.", "Al conejo llegan 20.000 × 0,1 = 2.000 kJ.", "Al zorro llegan 2.000 × 0,1 = 200 kJ."],
      resultado: "unos 200 kJ; el resto se ha perdido como calor." },
    { enunciado: "En una isla desaparecen los zorros. ¿Qué les pasará a los conejos y a la hierba?",
      pasos: ["Sin su depredador, los conejos se reproducen sin control.", "Con muchos más conejos, se comen casi toda la hierba.", "Sin hierba, muchos conejos mueren de hambre y el suelo se erosiona."],
      resultado: "los conejos aumentan primero y luego caen; la hierba disminuye mucho." },
    { enunciado: "Clasifica estas relaciones: garrapata y perro; abeja y flor; lince y conejo.",
      pasos: ["La garrapata se beneficia y perjudica al perro.", "La abeja obtiene néctar y la flor queda polinizada: ambos ganan.", "El lince caza y se come al conejo."],
      resultado: "parasitismo, mutualismo y depredación." },
    { enunciado: "Un campo de cereal se abandona. Describe qué irá apareciendo en las próximas décadas.",
      pasos: ["Ya hay suelo, así que es una sucesión secundaria.", "Primero crecen hierbas anuales y después perennes.", "Llegan arbustos como el romero, la jara o la retama.", "Con el tiempo crecen encinas o robles y se forma un bosque."],
      resultado: "hierbas, matorral y finalmente bosque, la comunidad clímax." },
    { enunciado: "En una charca, los vertidos de una granja aumentan los nitratos. Una semana después el agua está verde y aparecen peces muertos. Explica la secuencia.",
      pasos: ["Los nitratos son nutrientes y las algas se multiplican.", "Las algas mueren y se acumulan; las bacterias las descomponen.", "Las bacterias consumen el oxígeno disuelto.", "Los peces mueren por falta de oxígeno."],
      resultado: "es una eutrofización." },
    { enunciado: "Una hectárea de encinar absorbe unas 4 toneladas de CO₂ al año. Un coche emite unas 2 toneladas al año. ¿Cuántas hectáreas compensan las emisiones de 50 coches?",
      pasos: ["50 coches emiten 50 · 2 = 100 t de CO₂ al año.", "100 / 4 = 25 hectáreas."],
      resultado: "unas 25 hectáreas de encinar; lo más eficaz es reducir las emisiones." },
  ],
  errores: [...[
    "Confundir biotopo (medio físico) con biocenosis (seres vivos).",
    "Dibujar las flechas de la cadena al revés: van del que es comido al que come.",
    "Decir que la energía se recicla: la energía fluye y se pierde como calor; la que se recicla es la materia.",
    "Olvidar a los descomponedores, sin los cuales la materia no volvería al suelo.",
    "Pensar que toda especie introducida es inofensiva: las invasoras desplazan a las autóctonas.",
  ], "Pensar que tras un incendio el bosque se recupera en unos pocos años: la sucesión secundaria puede durar décadas."],
  ejercicios: [
    { nivel: "básico", ...{ q: "Define ecosistema, biotopo, biocenosis y población.", sol: "Ecosistema: seres vivos, medio físico y sus relaciones. Biotopo: el medio físico. Biocenosis: el conjunto de poblaciones. Población: individuos de la misma especie en un lugar y tiempo." } },
    { nivel: "básico", ...{ q: "Pon dos ejemplos de factores abióticos y explica cómo influyen.", sol: "La luz, que permite la fotosíntesis; la temperatura, que limita qué especies pueden vivir en un lugar. También el agua o la salinidad." } },
    { nivel: "básico", ...{ q: "¿Qué papel cumplen los descomponedores? Pon dos ejemplos.", sol: "Transforman restos y cadáveres en sales minerales que vuelven al suelo y que usan las plantas. Ejemplos: hongos y bacterias." } },
    { nivel: "básico", ...{ q: "Escribe una cadena trófica de cuatro eslabones e indica el nivel de cada uno.", sol: "Por ejemplo: hierba (productor) → saltamontes (c. primario) → lagartija (c. secundario) → águila (c. terciario)." } },
    { nivel: "básico", ...{ q: "Propón tres acciones personales para conservar los ecosistemas.", sol: "Reducir y separar residuos, no soltar mascotas en la naturaleza, consumir productos locales y respetar las normas de los espacios protegidos." } },
    { nivel: "básico", q: "Clasifica como abiótico o biótico: temperatura, conejo, salinidad, hongo, luz, competencia.", sol: "Abióticos: temperatura, salinidad, luz. Bióticos: conejo, hongo, competencia." },
    { nivel: "básico", q: "¿Qué es una especie pionera? Pon un ejemplo.", sol: "La primera en colonizar un terreno sin vida; soporta condiciones duras y empieza a formar suelo. Ejemplo: los líquenes." },
    { nivel: "básico", q: "¿Por qué procesos entra y sale el carbono de los seres vivos?", sol: "Entra por la fotosíntesis de los productores y sale por la respiración celular, la descomposición y la combustión." },
    { nivel: "básico", q: "Nombra cinco ecosistemas de España.", sol: "Encinar, dehesa, hayedo, humedal (Doñana), laurisilva canaria, alta montaña o praderas de posidonia." },
    { nivel: "básico", q: "Cita cuatro servicios que nos dan los ecosistemas.", sol: "Alimentos, agua limpia, oxígeno, polinización de cultivos, suelo fértil, madera o medicinas." },
    { nivel: "básico", q: "¿Qué es una especie endémica? Pon un ejemplo español.", sol: "La que solo vive en una zona concreta del mundo. Ejemplo: el lince ibérico." },
    { nivel: "básico", q: "¿Qué es la Red Natura 2000?", sol: "La red europea de espacios naturales protegidos para conservar especies y hábitats." },
    { nivel: "medio", ...{ q: "Diferencia mutualismo, comensalismo y parasitismo.", sol: "Mutualismo: ambos se benefician. Comensalismo: uno se beneficia y al otro le es indiferente. Parasitismo: uno se beneficia y perjudica al otro." } },
    { nivel: "medio", ...{ q: "¿Por qué una red trófica es más estable que una cadena?", sol: "Porque cada especie tiene varias presas y depredadores; si una desaparece, las demás pueden sustituirla como alimento." } },
    { nivel: "medio", ...{ q: "¿Por qué las cadenas tróficas raramente tienen más de cinco eslabones?", sol: "Porque en cada paso se pierde cerca del 90 % de la energía; tras pocos niveles no queda suficiente para mantener a otro." } },
    { nivel: "medio", ...{ q: "Explica la frase «la energía fluye y la materia se recicla».", sol: "La energía entra del Sol y sale como calor, en un solo sentido. La materia pasa de productores a consumidores y descomponedores y vuelve al medio para usarse de nuevo." } },
    { nivel: "medio", ...{ q: "Nombra cuatro amenazas para la biodiversidad con un ejemplo de cada una.", sol: "Destrucción de hábitats (urbanización), contaminación (plásticos en el mar), sobreexplotación (pesca excesiva), especies invasoras (mejillón cebra); también el cambio climático." } },
    { nivel: "medio", q: "Diferencia sucesión primaria y secundaria con un ejemplo de cada una.", sol: "Primaria: sobre terreno sin suelo ni vida, como una colada volcánica o Surtsey. Secundaria: donde ya había suelo, como tras un incendio o en un campo abandonado; es más rápida." },
    { nivel: "medio", q: "Explica las cuatro etapas de la eutrofización.", sol: "Exceso de nutrientes, proliferación de algas y agua turbia, consumo del oxígeno por las bacterias descomponedoras y muerte de peces por anoxia." },
    { nivel: "medio", q: "¿Por qué quemar combustibles fósiles altera el ciclo del carbono?", sol: "Devuelve a la atmósfera en pocas décadas carbono guardado durante millones de años; aumenta el CO₂ y el efecto invernadero." },
    { nivel: "medio", q: "¿Qué cambia a lo largo de una sucesión ecológica?", sol: "Aumentan el número de especies, la materia orgánica, el suelo y la complejidad de la red trófica, hasta llegar a la comunidad clímax." },
    { nivel: "medio", q: "Explica qué es el desarrollo sostenible y su regla básica.", sol: "Satisfacer nuestras necesidades sin comprometer las de las generaciones futuras: no extraer más de lo que se renueva ni producir más residuos de los que el medio absorbe." },
    { nivel: "medio", q: "¿Por qué fue clave recuperar al conejo para salvar al lince?", sol: "Porque el conejo es casi su única presa; sin conejos, el lince no podía alimentarse ni criar." },
    { nivel: "medio", q: "Explica por qué la posidonia es tan importante.", sol: "Oxigena el agua, es refugio y criadero de muchas especies, frena el oleaje y protege las playas de la erosión; además almacena carbono." },
    { nivel: "medio", q: "¿Por qué la competencia es perjudicial para las dos especies?", sol: "Porque ambas gastan energía y obtienen menos recursos de los que tendrían si estuvieran solas." },
    { nivel: "avanzado", q: "En los años veinte se eliminaron los lobos de Yellowstone y volvieron en 1995. Explica cómo pudieron cambiar los ríos.", sol: "Sin lobos, los ciervos se multiplicaron y se comieron la vegetación de las orillas, que se erosionaban. Con los lobos, los ciervos disminuyeron y evitaron esas zonas; volvieron los árboles, que sujetaron las orillas, y los ríos se estabilizaron." },
    { nivel: "avanzado", q: "Una pirámide de números de un roble con miles de orugas tiene forma invertida en la base. ¿Ocurre lo mismo con la pirámide de energía? Razónalo.", sol: "No. La de números puede invertirse porque un roble es un solo individuo grande. La de energía nunca se invierte: en cada nivel se pierde energía como calor y siempre hay menos en el nivel superior." },
    { nivel: "avanzado", q: "Si los productores fijan 100.000 kJ, ¿cuánta energía llega a un consumidor terciario? ¿Por qué es mejor para el planeta una dieta con más vegetales?", sol: "100.000 → 10.000 → 1.000 → 100 kJ. Comer más abajo en la cadena aprovecha mejor la energía: con la misma superficie de cultivo se alimenta a más personas." },
    { nivel: "avanzado", q: "Interpreta la gráfica del lince: ¿qué medidas explican su recuperación y qué riesgos tiene todavía?", sol: "La cría en cautividad, la reintroducción, la recuperación del conejo y la protección del hábitat. Riesgos: atropellos, enfermedades del conejo, falta de diversidad genética y fragmentación del hábitat." },
    { nivel: "avanzado", q: "Diseña un experimento para comprobar el efecto de los nitratos en el crecimiento de las algas.", sol: "Preparar varios frascos con agua de una charca y distintas cantidades de abono (0, poco, mucho), con la misma luz y temperatura. Observar durante dos semanas el color del agua y medir su turbidez. Se espera más algas con más abono." },
    { nivel: "avanzado", q: "¿Por qué darle personalidad jurídica al Mar Menor puede ayudar a protegerlo?", sol: "Porque el ecosistema tiene derechos propios: cualquier ciudadano puede defenderlo en los tribunales y las administraciones están obligadas a protegerlo y restaurarlo." },
    { nivel: "avanzado", q: "Explica por qué una especie invasora puede tener más éxito que en su lugar de origen.", sol: "Porque en el nuevo ecosistema no tiene sus depredadores, parásitos ni competidores naturales, y las especies autóctonas no están adaptadas a ella." },
    { nivel: "avanzado", q: "Relaciona los incendios forestales, la sucesión ecológica y el cambio climático.", sol: "El calor y las sequías aumentan los incendios; si arden con mucha frecuencia, la sucesión no llega a recuperar el bosque y quedan matorrales o suelo desnudo, que se erosiona. Además, el fuego libera CO₂ y agrava el cambio climático." },
    { nivel: "avanzado", q: "Propón un plan para recuperar un río contaminado de tu zona con medidas para el biotopo y la biocenosis.", sol: "Biotopo: depurar los vertidos, reducir los fertilizantes, recuperar la vegetación de ribera y el caudal. Biocenosis: retirar especies invasoras, reintroducir especies autóctonas como la trucha y vigilar la calidad del agua con bioindicadores." },
  ],
  quiz: [
    { q: "El medio físico de un ecosistema es el…", o: ["biocenosis", "biotopo", "población", "nicho"], a: 1, e: "Suelo, agua, aire y sus condiciones." },
    { q: "Un factor abiótico es…", o: ["un hongo", "la competencia", "la temperatura", "un depredador"], a: 2, e: "Físico o químico." },
    { q: "Los individuos de la misma especie en un lugar forman una…", o: ["población", "comunidad", "biocenosis", "red"], a: 0, e: "Como los conejos de un monte." },
    { q: "La abeja y la flor mantienen una relación de…", o: ["parasitismo", "competencia", "depredación", "mutualismo"], a: 3, e: "Ambos ganan." },
    { q: "Los productores obtienen la energía…", o: ["de otros seres vivos", "del Sol", "de restos", "del suelo"], a: 1, e: "Por la fotosíntesis." },
    { q: "Un zorro que come conejos es un consumidor…", o: ["primario", "productor", "secundario", "descomponedor"], a: 2, e: "Come herbívoros." },
    { q: "Las flechas de una cadena trófica van…", o: ["del que es comido al que come", "del que come al comido", "al azar", "hacia el Sol"], a: 0, e: "Sentido de la energía." },
    { q: "Al siguiente nivel trófico pasa aproximadamente un…", o: ["90 %", "50 %", "100 %", "10 %"], a: 3, e: "El resto se pierde como calor." },
    { q: "La materia en un ecosistema…", o: ["se pierde como calor", "se recicla", "entra del Sol", "no cambia"], a: 1, e: "Ciclo cerrado." },
    { q: "Los seres vivos devuelven CO₂ a la atmósfera con la…", o: ["fotosíntesis", "polinización", "respiración", "sedimentación"], a: 2, e: "Respiración celular." },
    { q: "Los combustibles fósiles son carbono…", o: ["guardado durante millones de años", "recién fijado", "del Sol", "de los volcanes"], a: 0, e: "Restos de seres vivos." },
    { q: "Las primeras especies en colonizar la roca desnuda son las…", o: ["clímax", "invasoras", "endémicas", "pioneras"], a: 3, e: "Como los líquenes." },
    { q: "La sucesión tras un incendio es…", o: ["primaria", "secundaria", "clímax", "imposible"], a: 1, e: "Ya hay suelo." },
    { q: "La planta marina que protege las playas del Mediterráneo es la…", o: ["laurisilva", "encina", "posidonia", "jara"], a: 2, e: "Oxigena el agua." },
    { q: "El exceso de nutrientes en el agua provoca…", o: ["eutrofización", "sucesión", "mutualismo", "erosión"], a: 0, e: "Como en el Mar Menor." },
    { q: "La falta de oxígeno en el agua que mata a los peces es la…", o: ["calima", "fotosíntesis", "deflación", "anoxia"], a: 3, e: "Última etapa de la eutrofización." },
    { q: "Una especie que solo vive en una zona del mundo es…", o: ["invasora", "endémica", "pionera", "clímax"], a: 1, e: "Como el lince ibérico." },
    { q: "El cangrejo americano en los ríos españoles es una especie…", o: ["endémica", "pionera", "invasora", "productora"], a: 2, e: "Desplaza a la autóctona." },
    { q: "El lince ibérico pasó de menos de 100 ejemplares a…", o: ["más de 2.000", "unos 150", "cero", "un millón"], a: 0, e: "Gracias a planes de recuperación." },
    { q: "Los hongos y bacterias que transforman restos en sales son…", o: ["productores", "consumidores primarios", "depredadores", "descomponedores"], a: 3, e: "Cierran el ciclo." },
  ],
  examen: [
    { q: "La biocenosis es el conjunto de…", o: ["factores físicos", "poblaciones de seres vivos", "rocas", "ecosistemas"], a: 1, e: "La comunidad." },
    { q: "La garrapata y el perro mantienen una relación de…", o: ["mutualismo", "comensalismo", "parasitismo", "competencia"], a: 2, e: "Uno gana y el otro pierde." },
    { q: "Una red trófica es más estable que una cadena porque…", o: ["cada especie tiene varias presas y depredadores", "tiene menos especies", "no hay energía", "no hay descomponedores"], a: 0, e: "Hay alternativas." },
    { q: "La energía en un ecosistema…", o: ["se recicla", "aumenta en cada nivel", "no se pierde", "fluye en un solo sentido"], a: 3, e: "Y se pierde como calor." },
    { q: "Los productores captan CO₂ mediante la…", o: ["respiración", "fotosíntesis", "combustión", "descomposición"], a: 1, e: "Fabrican materia orgánica." },
    { q: "La comunidad estable al final de una sucesión es la…", o: ["pionera", "invasora", "clímax", "secundaria"], a: 2, e: "Por ejemplo, un encinar." },
    { q: "La eutrofización la causan sobre todo…", o: ["los fertilizantes agrícolas", "los volcanes", "los terremotos", "las mareas"], a: 0, e: "Nitratos y fosfatos." },
    { q: "Una medida de conservación es…", o: ["soltar mascotas exóticas", "talar bosques", "pescar más", "crear espacios naturales protegidos"], a: 3, e: "Como los parques nacionales." },
  ],
  feynman: [...["Qué es un ecosistema y cuáles son sus componentes", "Por qué la energía fluye y la materia se recicla", "Qué amenaza a la biodiversidad y cómo protegerla"], "Cómo se recupera un ecosistema tras un incendio", "Por qué un exceso de abono puede matar a los peces de una laguna"],
  mapa: mapa("ECOSISTEMA", "var(--eso)", [
    ["Componentes", "biotopo · biocenosis", "var(--leaf)"],
    ["Relaciones", "depredación · mutualismo · parasitismo", "#b8860b"],
    ["Niveles", "productor · consumidor · descomponedor", "var(--red)"],
    ["Conservación", "parques · especies · hábitos", "var(--pen)"],
  ], 300),
  tarjetas: [
    ...[
    ["Ecosistema", "Seres vivos, medio físico y sus relaciones."],
    ["Biotopo", "Medio físico de un ecosistema."],
    ["Biocenosis", "Conjunto de poblaciones de un ecosistema."],
    ["Productor", "Fabrica materia orgánica por fotosíntesis."],
    ["Descomponedor", "Transforma restos en sales minerales."],
    ["Red trófica", "Conjunto de cadenas alimentarias entrelazadas."],
    ["Regla del 10 %", "Solo un 10 % de la energía pasa al siguiente nivel."],
    ["Especie invasora", "Introducida por el ser humano; desplaza a las autóctonas."],
  ],
    ["Ciclo del carbono", "El carbono pasa del aire a los seres vivos por la fotosíntesis y vuelve por la respiración."],
    ["Sucesión ecológica", "Cambios de una comunidad a lo largo del tiempo hasta la clímax."],
    ["Eutrofización", "Exceso de nutrientes que acaba dejando el agua sin oxígeno."],
    ["Desarrollo sostenible", "Cubrir nuestras necesidades sin comprometer las de las generaciones futuras."],
  ],
  glosario: [
    ["Ecosistema", "Seres vivos, medio físico y sus relaciones."],
    ["Biotopo", "Medio físico de un ecosistema."],
    ["Biocenosis", "Conjunto de poblaciones que viven en un biotopo."],
    ["Población", "Individuos de la misma especie en un lugar y un tiempo."],
    ["Factor abiótico", "Característica física o química del medio."],
    ["Límite de tolerancia", "Intervalo de condiciones en que puede vivir una especie."],
    ["Mutualismo", "Relación en que ambas especies se benefician."],
    ["Parasitismo", "Relación en que una especie vive a costa de otra."],
    ["Nivel trófico", "Posición de un ser vivo según cómo obtiene su alimento."],
    ["Red trófica", "Conjunto de cadenas alimentarias entrelazadas."],
    ["Pirámide de energía", "Representación de la energía de cada nivel trófico."],
    ["Fotosíntesis", "Proceso por el que los productores fabrican materia orgánica con luz."],
    ["Sumidero de carbono", "Lugar que absorbe y almacena CO₂, como un bosque o el océano."],
    ["Sucesión ecológica", "Sustitución progresiva de comunidades en un lugar."],
    ["Comunidad clímax", "Etapa final y estable de una sucesión."],
    ["Biodiversidad", "Variedad de genes, especies y ecosistemas."],
    ["Especie endémica", "La que solo vive en una zona concreta."],
    ["Especie invasora", "Especie introducida que desplaza a las autóctonas."],
    ["Eutrofización", "Exceso de nutrientes en el agua que agota el oxígeno."],
  ],
  situacion: {
    titulo: "Guardianes de un ecosistema cercano",
    reto: "Vuestro grupo estudiará un ecosistema cercano (un río, un parque, una charca o un pinar) para conocer cómo funciona, detectar sus problemas y proponer cómo protegerlo.",
    pasos: [
      "Visitad el ecosistema o usad fotografías y datos para describir su biotopo: luz, temperatura, agua, suelo.",
      "Haced un inventario de seres vivos con una aplicación de identificación y clasificadlos por niveles tróficos.",
      "Construid su red trófica y simulad qué pasaría si desapareciera una especie.",
      "Detectad los impactos humanos que lo amenazan, como basura, especies invasoras o vertidos.",
      "Proponed un plan de conservación con tres medidas realistas.",
    ],
    producto: "Informe del ecosistema con inventario, red trófica, análisis de impactos y plan de conservación presentado al centro o al ayuntamiento.",
    evaluacion: [
      "Descripción correcta del biotopo y la biocenosis.",
      "Red trófica completa y bien construida.",
      "Análisis riguroso de los impactos.",
      "Viabilidad y claridad del plan de conservación.",
    ],
  },
  familias: ["Visitad un parque o espacio natural cercano y anotad cinco seres vivos y su nivel trófico.", "Construid juntos una red trófica con fotos o dibujos de animales de vuestra zona.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Ecología y sostenibilidad: componentes del ecosistema, factores abióticos y bióticos, relaciones intra e interespecíficas, flujo de energía, ciclo de la materia y del carbono, sucesión ecológica, ecosistemas españoles, biodiversidad, impactos como la eutrofización y conservación (RD 217/2022, Biología y Geología 1º a 3º). En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Construir una red trófica con tarjetas y lana y ver qué pasa al quitar una especie.",
      "Montar un compostador en el centro y observar la acción de los descomponedores.",
      "Investigar una especie invasora o amenazada de la comunidad autónoma.",
      "Experimento de eutrofización con frascos de agua de charca y distintas cantidades de abono.",
      "Inventario de biodiversidad del patio con una aplicación de ciencia ciudadana.",
    ],
  },
  fuentes: [...[RD, wiki("Ecosistema", "Ecosistema"), wiki("Red trófica", "Red_tr%C3%B3fica")], { t: "Ministerio para la Transición Ecológica: Red de Parques Nacionales", url: "https://www.miteco.gob.es/" }],
  revisado: "2026-11-13",
};
