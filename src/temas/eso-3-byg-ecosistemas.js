// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "Los ecosistemas y su conservación",
  minutos: 55,
  objetivos: ["Identificar los componentes de un ecosistema: biotopo y biocenosis", "Explicar las relaciones tróficas, las cadenas y las redes alimentarias", "Comprender el flujo de energía y el ciclo de la materia", "Analizar los impactos humanos y las medidas para conservar la biodiversidad"],
  claves: ["ecosistema", "biotopo", "biocenosis", "productor", "consumidor", "descomponedor", "red trófica", "biodiversidad"],
  pregunta: {
    texto: "En los años veinte se eliminaron los lobos del parque de Yellowstone. Cuando volvieron, en 1995, los ríos cambiaron de forma. ¿Cómo puede un depredador cambiar un río?",
    respuesta: "Sin lobos, los ciervos se comían los árboles jóvenes de las orillas y la tierra se desmoronaba. Con lobos, los ciervos evitaron esas zonas, crecieron sauces y álamos, volvieron los castores y las raíces sujetaron las orillas. En un <mark>ecosistema</mark> todo está conectado: cambiar una pieza mueve las demás.",
  },
  bloques: [
    {
      html: `<h3>Qué es un ecosistema</h3><p>Un <b>ecosistema</b> es el conjunto formado por los seres vivos de un lugar, el medio físico en el que viven y las relaciones que se establecen entre todos ellos. Tiene dos componentes. El <mark>biotopo</mark> es el medio físico: el suelo, el agua, el aire y sus condiciones, como la temperatura, la luz o la humedad. La <mark>biocenosis</mark> o comunidad es el conjunto de poblaciones de seres vivos que habitan ese biotopo. Una <b>población</b> es el grupo de individuos de la misma especie que vive en un lugar al mismo tiempo, como los conejos de un monte. Un ecosistema puede ser tan grande como un océano o tan pequeño como una charca.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ecosistema igual a biotopo, el medio físico, más biocenosis, los seres vivos, más sus relaciones">${BG}
        ${caja(14, 24, 232, 34, "ECOSISTEMA", "var(--leaf)", { size: 14 })}
        ${fl(80, 60, 70, 84)}${fl(180, 60, 190, 84)}
        ${caja(14, 88, 110, 44, "biotopo", "#b8860b", { size: 13 })}${caja(136, 88, 110, 44, "biocenosis", "var(--leaf)", { size: 13 })}
        ${t(69, 150, "suelo · agua · luz", { size: 10, weight: 400 })}${t(191, 150, "plantas · animales", { size: 10, weight: 400 })}${t(191, 164, "hongos · bacterias", { size: 10, weight: 400 })}
        ${t(69, 168, "+ relaciones", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Los factores abióticos y bióticos</h3><p>Los <b>factores abióticos</b> son las características físicas y químicas del biotopo. La <b>luz</b> permite la fotosíntesis y por eso en el fondo del mar no hay plantas. La <b>temperatura</b> marca qué seres pueden vivir en un lugar. El <b>agua</b> y la <b>humedad</b> son imprescindibles. Otros son la salinidad, el tipo de suelo o el viento. Los <b>factores bióticos</b> son los seres vivos y las relaciones entre ellos. Cada especie solo vive dentro de unos <mark>límites de tolerancia</mark>: por ejemplo, la trucha necesita aguas frías y con mucho oxígeno, y desaparece si el río se calienta o se contamina. Los seres vivos presentan <b>adaptaciones</b> a su medio, como las hojas en forma de espina de los cactus.</p>`,
      video: { id: "AzU6IY33WcU", titulo: "Ecosistema | Factores Bióticos y Abióticos [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 668104 },
    },
    {
      html: `<h3>Las relaciones entre seres vivos</h3><p>Las <b>relaciones intraespecíficas</b> se dan entre individuos de la misma especie. Pueden ser de cooperación, como las <b>familias</b> de aves, los <b>enjambres</b> de abejas con reparto de tareas o las <b>manadas</b> de lobos que cazan juntos, o de <b>competencia</b>, por el territorio, la comida o la pareja. Las <b>relaciones interespecíficas</b> se dan entre especies distintas. Destacan la <mark>depredación</mark>, en la que un depredador caza a su presa; el <mark>parasitismo</mark>, en el que el parásito vive a costa del huésped, como la garrapata en un perro; el <mark>mutualismo</mark>, en el que ambos ganan, como la abeja y la flor; el <b>comensalismo</b>, en el que uno gana y al otro le es indiferente; y la <b>competencia</b> entre especies por el mismo recurso.</p>`,
    },
    {
      html: `<h3>Productores, consumidores y descomponedores</h3><p>Según cómo obtienen su alimento, los seres vivos ocupan distintos <b>niveles tróficos</b>. Los <mark>productores</mark> son las plantas, las algas y algunas bacterias: fabrican su propia materia orgánica mediante la fotosíntesis, con la energía del Sol. Los <mark>consumidores</mark> se alimentan de otros seres vivos: los <b>primarios</b> son herbívoros, como el conejo; los <b>secundarios</b> comen herbívoros, como el zorro; los <b>terciarios</b> comen otros carnívoros, como el águila. Los <mark>descomponedores</mark>, sobre todo hongos y bacterias, se alimentan de restos y cadáveres y los transforman en sales minerales que vuelven al suelo y que las plantas reutilizan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Niveles tróficos: productores, consumidores primarios, secundarios y terciarios, y los descomponedores que reciben restos de todos">${BG}
        ${[["productor: hierba", "var(--leaf)"], ["c. primario: conejo", "#b8860b"], ["c. secundario: zorro", "var(--red)"], ["c. terciario: águila", "var(--pen)"]].map(([n, c], i) => caja(14, 146 - i * 40, 156, 28, n, c, { size: 11 })).join("")}
        ${[0, 1, 2].map(i => fl(92, 144 - i * 40, 92, 132 - i * 40, "var(--muted)", 2)).join("")}
        ${caja(184, 60, 66, 62, "", "#8a6a4a")}${t(217, 86, "descom-", { size: 11 })}${t(217, 100, "ponedor", { size: 11 })}
        ${t(217, 140, "hongos", { size: 10, weight: 400 })}${t(217, 154, "bacterias", { size: 10, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>Cadenas y redes tróficas</h3><p>Una <b>cadena trófica</b> es una secuencia lineal de seres vivos en la que cada uno se alimenta del anterior: <i>hierba → saltamontes → lagartija → culebra → águila</i>. Las flechas indican el sentido en el que pasa la materia y la energía, es decir, de quién es comido a quién se lo come. En la naturaleza, las cadenas no están aisladas: un ser vivo come varias cosas y lo comen varios depredadores. Por eso las cadenas se entrelazan en una <mark>red trófica</mark>. Cuanto más compleja es la red, más estable es el ecosistema: si una especie desaparece, sus depredadores pueden alimentarse de otras presas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Red trófica: hierba y bellotas comidas por conejo, saltamontes y ratón; estos comidos por zorro, lagartija y búho; y en lo alto el águila">${BG}
        ${[["hierba", 70, 160, "var(--leaf)"], ["bellotas", 190, 160, "var(--leaf)"], ["conejo", 40, 112, "#b8860b"], ["saltamontes", 130, 112, "#b8860b"], ["ratón", 220, 112, "#b8860b"], ["zorro", 50, 64, "var(--red)"], ["lagartija", 130, 64, "var(--red)"], ["búho", 210, 64, "var(--red)"], ["águila", 130, 20, "var(--pen)"]].map(([n, x, y, c]) => t(x, y, n, { size: 11, color: c })).join("")}
        ${[[70, 150, 44, 120], [70, 150, 126, 120], [190, 150, 214, 120], [190, 150, 140, 120], [40, 102, 48, 72], [130, 102, 130, 72], [220, 102, 212, 72], [40, 102, 196, 70], [220, 102, 60, 72], [50, 54, 120, 26], [130, 54, 130, 30], [210, 54, 140, 26]].map(([a, b, c, d]) => fl(a, b, c, d, "var(--muted)", 1.5)).join("")}</svg>`,
    },
    {
      html: `<h3>El flujo de energía</h3><p>La energía entra en el ecosistema como <b>luz solar</b> y los productores la transforman en energía química. Pero en cada paso de un nivel trófico al siguiente se pierde la mayor parte: los seres vivos la gastan en moverse, mantener la temperatura y vivir, y se libera como calor. Solo pasa, aproximadamente, un <mark>10 %</mark> al nivel siguiente. Por eso la energía tiene un <b>flujo abierto</b>, en un solo sentido, y hay que reponerla siempre desde el Sol. Por eso también las cadenas son cortas, con cuatro o cinco eslabones, y hay muchos menos depredadores que herbívoros. Se representa con una <b>pirámide de energía</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide de energía: 10.000 unidades en productores, 1.000 en herbívoros, 100 en carnívoros y 10 en superdepredadores; en cada paso se pierde un 90 por ciento como calor">${BG}
        ${[["10.000 · productores", 200, "var(--leaf)"], ["1.000 · herbívoros", 150, "#b8860b"], ["100 · carnívoros", 100, "var(--red)"], ["10", 50, "var(--pen)"]].map(([n, w, c], i) => `<rect x="${110 - w / 2}" y="${140 - i * 34}" width="${w}" height="28" rx="4" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2"/>${t(110, 159 - i * 34, n, { size: 10 })}`).join("")}
        ${fl(160, 104, 206, 86, "var(--red)", 2)}${t(250, 62, "calor", { size: 10, anchor: "end", color: "var(--red)" })}${t(250, 76, "se pierde", { size: 10, anchor: "end", color: "var(--red)" })}
        ${t(110, 20, "solo pasa ~10 %", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El ciclo de la materia</h3><p>A diferencia de la energía, la materia no se pierde: <mark>se recicla</mark> en un <b>ciclo cerrado</b>. Los productores toman del medio dióxido de carbono, agua y sales minerales, y fabrican materia orgánica. Esa materia pasa a los consumidores al comerla. Cuando los seres vivos expulsan restos o mueren, los <b>descomponedores</b> los transforman de nuevo en sustancias inorgánicas, que vuelven al suelo, al agua y al aire. Así, los átomos de carbono de tu cuerpo han formado parte antes de plantas, animales y rocas. Sin descomponedores, la Tierra estaría cubierta de restos y las plantas se quedarían sin nutrientes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de la materia: productores, consumidores, descomponedores y materia inorgánica forman un círculo, mientras la energía del Sol entra y sale como calor">${BG}
        <circle cx="130" cy="96" r="58" fill="none" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="5 4"/>
        <rect x="84" y="26" width="92" height="26" rx="8" fill="var(--paper)"/><rect x="176" y="84" width="78" height="26" rx="8" fill="var(--paper)"/><rect x="78" y="142" width="104" height="26" rx="8" fill="var(--paper)"/><rect x="6" y="84" width="76" height="26" rx="8" fill="var(--paper)"/>${caja(84, 26, 92, 26, "productores", "var(--leaf)", { size: 11 })}${caja(176, 84, 78, 26, "consumidores", "#b8860b", { size: 10 })}${caja(78, 142, 104, 26, "descomponedores", "#8a6a4a", { size: 10 })}${caja(6, 84, 76, 26, "sales, CO₂", "var(--inf)", { size: 10 })}
        ${t(24, 30, "☀", { size: 22, color: "#e0a000" })}${fl(36, 34, 80, 38, "#e0a000", 2)}
        ${t(130, 100, "la materia", { size: 10, color: "var(--leaf)" })}${t(130, 114, "se recicla", { size: 10, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>Los ecosistemas de la Tierra y de España</h3><p>Los grandes ecosistemas terrestres se llaman <b>biomas</b> y dependen sobre todo del clima: la selva tropical, la sabana, el desierto, el bosque mediterráneo, el bosque templado, la taiga y la tundra. Los <b>ecosistemas acuáticos</b> pueden ser marinos o de agua dulce, como ríos, lagos y humedales. España tiene una gran variedad: <mark>bosque mediterráneo</mark> de encinas y alcornoques, la dehesa, los hayedos y robledales del norte, la alta montaña, los humedales como Doñana o las Tablas de Daimiel, la laurisilva de Canarias y las praderas de <b>posidonia</b> del Mediterráneo, una planta marina que oxigena el agua y protege las playas.</p>`,
    },
    {
      html: `<h3>La biodiversidad y los servicios de los ecosistemas</h3><p>La <mark>biodiversidad</mark> es la variedad de seres vivos: de especies, de genes dentro de cada especie y de ecosistemas. Los ecosistemas nos dan gratis <b>servicios</b> imprescindibles: alimentos, agua limpia, madera y medicinas; los bosques producen oxígeno, absorben CO₂ y frenan la erosión; los insectos <b>polinizan</b> gran parte de los cultivos; los humedales depuran el agua y amortiguan las inundaciones. España es uno de los países europeos con más biodiversidad, con especies <b>endémicas</b>, que solo viven aquí, como el lince ibérico o el urogallo cantábrico.</p>`,
      video: { id: "IJZuRgvPRb0", titulo: "Qué es la BIODIVERSIDAD y su IMPORTANCIA", canal: "EcologíaVerde", vistas: 521037 },
    },
    {
      html: `<h3>Los impactos del ser humano</h3><p>Las actividades humanas alteran los ecosistemas. Las principales amenazas son: la <mark>destrucción de hábitats</mark> por la urbanización, la agricultura intensiva o los incendios; la <b>contaminación</b> del aire, el agua y el suelo, incluidos los plásticos en el mar; la <b>sobreexplotación</b>, como la pesca excesiva o la caza; las <mark>especies invasoras</mark>, introducidas por el ser humano, que desplazan a las autóctonas, como el mejillón cebra en el Ebro o el cangrejo americano; y el <b>cambio climático</b>, que desplaza las especies y aumenta las sequías. La contaminación del Mar Menor, en Murcia, muestra cómo un exceso de nutrientes agrícolas puede matar un ecosistema entero.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco amenazas para la biodiversidad: destrucción de hábitats, contaminación, sobreexplotación, especies invasoras y cambio climático">${BG}
        ${[["destrucción de hábitats", "var(--red)"], ["contaminación", "#8a6a4a"], ["sobreexplotación", "#b8860b"], ["especies invasoras", "var(--pen)"], ["cambio climático", "var(--inf)"]].map(([n, c], i) => caja(30, 14 + i * 32, 200, 26, n, c, { size: 12 })).join("")}</svg>`,
    },
    {
      html: `<h3>Cómo conservar los ecosistemas</h3><p>Para proteger la biodiversidad se crean <b>espacios naturales protegidos</b>: España tiene 16 <mark>parques nacionales</mark>, como Ordesa, Doñana, el Teide o Picos de Europa, y forma parte de la <b>Red Natura 2000</b> europea. Se aplican <b>planes de recuperación</b> de especies amenazadas: el lince ibérico pasó de menos de 100 ejemplares en 2002 a más de 2.000 hoy gracias a la cría en cautividad y a la recuperación del conejo. Además, se controlan las especies invasoras y se restauran ecosistemas dañados. Cada persona también puede ayudar: reducir residuos, consumir productos locales y de temporada, no soltar mascotas en la naturaleza y respetar las normas de los espacios protegidos.</p>`,
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
  ],
  errores: [
    "Confundir biotopo (medio físico) con biocenosis (seres vivos).",
    "Dibujar las flechas de la cadena al revés: van del que es comido al que come.",
    "Decir que la energía se recicla: la energía fluye y se pierde como calor; la que se recicla es la materia.",
    "Olvidar a los descomponedores, sin los cuales la materia no volvería al suelo.",
    "Pensar que toda especie introducida es inofensiva: las invasoras desplazan a las autóctonas.",
  ],
  ejercicios: [
    { q: "Define ecosistema, biotopo, biocenosis y población.", sol: "Ecosistema: seres vivos, medio físico y sus relaciones. Biotopo: el medio físico. Biocenosis: el conjunto de poblaciones. Población: individuos de la misma especie en un lugar y tiempo." },
    { q: "Pon dos ejemplos de factores abióticos y explica cómo influyen.", sol: "La luz, que permite la fotosíntesis; la temperatura, que limita qué especies pueden vivir en un lugar. También el agua o la salinidad." },
    { q: "Diferencia mutualismo, comensalismo y parasitismo.", sol: "Mutualismo: ambos se benefician. Comensalismo: uno se beneficia y al otro le es indiferente. Parasitismo: uno se beneficia y perjudica al otro." },
    { q: "¿Qué papel cumplen los descomponedores? Pon dos ejemplos.", sol: "Transforman restos y cadáveres en sales minerales que vuelven al suelo y que usan las plantas. Ejemplos: hongos y bacterias." },
    { q: "Escribe una cadena trófica de cuatro eslabones e indica el nivel de cada uno.", sol: "Por ejemplo: hierba (productor) → saltamontes (c. primario) → lagartija (c. secundario) → águila (c. terciario)." },
    { q: "¿Por qué una red trófica es más estable que una cadena?", sol: "Porque cada especie tiene varias presas y depredadores; si una desaparece, las demás pueden sustituirla como alimento." },
    { q: "¿Por qué las cadenas tróficas raramente tienen más de cinco eslabones?", sol: "Porque en cada paso se pierde cerca del 90 % de la energía; tras pocos niveles no queda suficiente para mantener a otro." },
    { q: "Explica la frase «la energía fluye y la materia se recicla».", sol: "La energía entra del Sol y sale como calor, en un solo sentido. La materia pasa de productores a consumidores y descomponedores y vuelve al medio para usarse de nuevo." },
    { q: "Nombra cuatro amenazas para la biodiversidad con un ejemplo de cada una.", sol: "Destrucción de hábitats (urbanización), contaminación (plásticos en el mar), sobreexplotación (pesca excesiva), especies invasoras (mejillón cebra); también el cambio climático." },
    { q: "Propón tres acciones personales para conservar los ecosistemas.", sol: "Reducir y separar residuos, no soltar mascotas en la naturaleza, consumir productos locales y respetar las normas de los espacios protegidos." },
  ],
  quiz: [
    { q: "El biotopo es…", o: ["el medio físico", "los seres vivos", "una especie"], a: 0, e: "El medio físico." },
    { q: "Los productores obtienen energía de…", o: ["otros seres", "la luz solar", "los restos"], a: 1, e: "Fotosíntesis con luz solar." },
    { q: "Un conejo es un consumidor…", o: ["primario", "secundario", "terciario"], a: 0, e: "Primario: herbívoro." },
    { q: "Abeja y flor es un caso de…", o: ["parasitismo", "mutualismo", "depredación"], a: 1, e: "Ambos ganan." },
    { q: "Al siguiente nivel trófico pasa aproximadamente…", o: ["el 10 % de la energía", "el 50 %", "toda la energía"], a: 0, e: "Alrededor del 10 %." },
    { q: "La materia en el ecosistema…", o: ["se pierde como calor", "se recicla", "viene del Sol"], a: 1, e: "Ciclo cerrado." },
    { q: "Los hongos que pudren la madera son…", o: ["productores", "descomponedores", "parásitos de animales"], a: 1, e: "Descomponedores." },
    { q: "La posidonia es…", o: ["un alga de río", "una planta marina", "un coral"], a: 1, e: "Planta marina del Mediterráneo." },
    { q: "Una especie invasora…", o: ["es siempre autóctona", "la introduce el ser humano", "está protegida"], a: 1, e: "Introducida por el ser humano." },
    { q: "Una especie endémica…", o: ["vive solo en un lugar", "vive en todo el mundo", "está extinguida"], a: 0, e: "Solo vive en una zona." },
  ],
  examen: [
    { q: "La biocenosis es…", o: ["el conjunto de poblaciones", "el suelo", "el clima"], a: 0, e: "Los seres vivos." },
    { q: "En una cadena, las flechas van…", o: ["del que come al comido", "del comido al que come", "hacia el Sol"], a: 1, e: "Del comido al que come." },
    { q: "Doñana es un ejemplo de…", o: ["humedal protegido", "desierto", "tundra"], a: 0, e: "Humedal y parque nacional." },
  ],
  feynman: ["Qué es un ecosistema y cuáles son sus componentes", "Por qué la energía fluye y la materia se recicla", "Qué amenaza a la biodiversidad y cómo protegerla"],
  mapa: mapa("ECOSISTEMA", "var(--eso)", [
    ["Componentes", "biotopo · biocenosis", "var(--leaf)"],
    ["Relaciones", "depredación · mutualismo · parasitismo", "#b8860b"],
    ["Niveles", "productor · consumidor · descomponedor", "var(--red)"],
    ["Conservación", "parques · especies · hábitos", "var(--pen)"],
  ], 300),
  tarjetas: [
    ["Ecosistema", "Seres vivos, medio físico y sus relaciones."],
    ["Biotopo", "Medio físico de un ecosistema."],
    ["Biocenosis", "Conjunto de poblaciones de un ecosistema."],
    ["Productor", "Fabrica materia orgánica por fotosíntesis."],
    ["Descomponedor", "Transforma restos en sales minerales."],
    ["Red trófica", "Conjunto de cadenas alimentarias entrelazadas."],
    ["Regla del 10 %", "Solo un 10 % de la energía pasa al siguiente nivel."],
    ["Especie invasora", "Introducida por el ser humano; desplaza a las autóctonas."],
  ],
  familias: ["Visitad un parque o espacio natural cercano y anotad cinco seres vivos y su nivel trófico.", "Construid juntos una red trófica con fotos o dibujos de animales de vuestra zona.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Ecología y sostenibilidad: componentes del ecosistema, relaciones intra e interespecíficas, flujo de energía y ciclo de la materia, biodiversidad, impactos y conservación (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Construir una red trófica con tarjetas y lana y ver qué pasa al quitar una especie.", "Montar un compostador en el centro y observar la acción de los descomponedores.", "Investigar una especie invasora o amenazada de la comunidad autónoma."],
  },
  fuentes: [RD, wiki("Ecosistema", "Ecosistema"), wiki("Red trófica", "Red_tr%C3%B3fica")],
  revisado: "2026-11-12",
};
