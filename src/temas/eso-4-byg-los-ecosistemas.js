// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");



module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "Los ecosistemas",
  minutos: 105,
  objetivos: [
    "Identificar los componentes de un ecosistema, los factores ambientales y las adaptaciones",
    "Describir las poblaciones, las comunidades y las relaciones entre especies",
    "Construir cadenas y redes tróficas y pirámides ecológicas",
    "Explicar el flujo de energía y calcular la eficiencia ecológica",
    "Explicar los ciclos del carbono, el nitrógeno y el fósforo",
    "Describir la sucesión ecológica, los biomas y los ecosistemas de España",
  ],
  claves: ["biotopo", "biocenosis", "nivel trófico", "red trófica", "ciclo de la materia", "sucesión ecológica"],
  pregunta: {
    texto: "Cuando en Yellowstone (EE. UU.) se reintrodujeron los lobos en 1995, los ríos cambiaron de forma. ¿Qué tienen que ver unos lobos con un río?",
    respuesta: "Todo está conectado en un <mark>ecosistema</mark>. Los lobos cazaron ciervos, que dejaron de comerse los árboles de las orillas. Los árboles crecieron, <b>sujetaron el suelo</b> y los ríos dejaron de erosionar tanto. Una especie puede cambiar un paisaje entero: es una <b>especie clave</b>.",
  },
  lectura: {
    titulo: "Los lobos que cambiaron los ríos",
    html: `<p>En los años veinte del siglo pasado, los guardas del parque nacional de Yellowstone, en Estados Unidos, mataron a los últimos lobos. Parecía una buena idea: así los ciervos estarían a salvo. Durante setenta años, los ciervos wapití se multiplicaron sin control. Pastaban tranquilos junto a los ríos y se comían los brotes de sauces y álamos. Las orillas se quedaron desnudas, la tierra se erosionaba y los castores, sin madera para sus presas, casi desaparecieron.</p>
<p>En 1995 se reintrodujeron catorce lobos. Los ciervos empezaron a evitar los valles abiertos, donde eran presa fácil. En las orillas volvieron a crecer los árboles; con ellos regresaron los pájaros cantores, los castores construyeron presas que crearon charcas para nutrias, peces y anfibios, y las raíces sujetaron las orillas. Los científicos todavía discuten cuánto de ese cambio se debe a los lobos y cuánto a otras causas, como los osos o el clima.</p>
<p>Pero la historia ilustra una idea clave de la ecología: en un ecosistema todo está conectado. Quitar o añadir una sola especie puede provocar una cascada de efectos que llega hasta el paisaje. En este tema aprenderás a ver esas conexiones.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué es un ecosistema</h3><p>Un <mark>ecosistema</mark> es un sistema natural formado por un conjunto de seres vivos, el medio físico en el que viven y las <b>relaciones</b> que se establecen entre ellos. Tiene dos componentes:</p><p>• El <mark>biotopo</mark> es el medio físico: el agua, el suelo, el aire, la luz y la temperatura de un lugar.<br>• La <mark>biocenosis</mark> o comunidad es el conjunto de poblaciones de seres vivos que habitan en ese lugar: plantas, animales, hongos y microorganismos.</p><p>Un ecosistema puede ser tan grande como un océano o tan pequeño como una charca o un tronco caído, y sus límites no siempre son claros: entre un bosque y un prado hay una zona de transición, el <b>ecotono</b>, donde se mezclan especies de los dos. El conjunto de todos los ecosistemas de la Tierra forma la <b>biosfera</b>.</p><p>Cada especie vive en un lugar concreto, su <b>hábitat</b>, y desempeña en él una función, su <b>nicho ecológico</b>: qué come, quién se la come, cuándo está activa, qué recursos usa. Dos especies pueden compartir hábitat, pero si tienen exactamente el mismo nicho compiten y, a la larga, una desplaza a la otra.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una charca con el biotopo (agua, sol, suelo) y la biocenosis (plantas, rana, peces, garza)">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="220" cy="34" r="16" fill="var(--sun)"/>
        <path d="M20 120 Q 130 90 240 120 V 160 H 20 Z" fill="var(--water)" opacity=".4"/><rect x="20" y="150" width="220" height="12" fill="var(--sun)" opacity=".4"/>
        <path d="M50 120 V 70 M60 120 V 80 M200 116 V 64" stroke="var(--leaf)" stroke-width="4"/>
        <ellipse cx="120" cy="134" rx="12" ry="5" fill="var(--pen)"/><ellipse cx="150" cy="142" rx="10" ry="4" fill="var(--pen)"/>
        <ellipse cx="90" cy="108" rx="9" ry="6" fill="var(--leaf)"/>
        <g ${F} font-size="11" font-weight="700"><text x="14" y="30" fill="var(--red)">biocenosis: seres vivos</text><text x="14" y="48" fill="var(--pen)">biotopo: agua, luz, suelo</text></g>
      </svg>`,
    },
    {
      html: `<h3>1.2 Factores abióticos y adaptaciones</h3><p>Los <mark>factores abióticos</mark> son las condiciones físicas y químicas del medio: temperatura, luz, agua, humedad, tipo de suelo, salinidad, oxígeno o presión. Los <b>factores bióticos</b> son los que se deben a otros seres vivos: depredadores, competidores, parásitos o alimento.</p><p>Cada especie solo puede vivir entre unos valores mínimos y máximos de cada factor: es su <b>rango de tolerancia</b>. Las especies con un rango amplio, como la rata o la gaviota, viven en muchos ambientes; las de rango estrecho, como el coral, son muy sensibles a los cambios. El factor que se acerca más a esos límites es el <mark>factor limitante</mark>: en un desierto, el agua; en el fondo del mar, la luz; en la alta montaña, la temperatura.</p><p>Los seres vivos tienen <mark>adaptaciones</mark>, características que les permiten sobrevivir y reproducirse en su medio. Pueden ser <b>anatómicas</b>, <b>fisiológicas</b> o de <b>comportamiento</b>. A la falta de agua: el cactus la almacena en el tallo y tiene espinas en vez de hojas; el dromedario tolera perder mucha agua; muchos animales del desierto son nocturnos. Al frío: el zorro ártico tiene orejas pequeñas y pelo espeso para perder menos calor, mientras que el zorro del desierto (fénec) tiene orejas enormes para disiparlo; el oso hiberna; muchas aves migran. A la oscuridad: los peces abisales producen su propia luz.</p>`,
      svg: L6.compara("Adaptaciones al frío y al calor: zorro ártico y fénec", ["Zorro ártico", "var(--pen)", ["orejas pequeñas", "pelo espeso y blanco", "pierde poco calor", "medio muy frío"]], ["Fénec", "var(--sun)", ["orejas enormes", "pelo corto y claro", "disipa calor", "desierto, nocturno"]]),
    },
    {
      html: `<h3>1.3 Poblaciones y comunidades</h3><p>Una <mark>población</mark> es el conjunto de individuos de la misma especie que viven en un lugar al mismo tiempo y pueden reproducirse entre sí, como los conejos de un monte. Sus características principales son:</p><p>• La <b>densidad</b>: número de individuos por unidad de superficie o de volumen (por ejemplo, 20 conejos por hectárea).<br>• La <b>natalidad</b> y la <b>mortalidad</b>: nacimientos y muertes en un periodo de tiempo. A ellas se suman la <b>inmigración</b> y la <b>emigración</b>.<br>• La <b>distribución</b>: agrupada, uniforme o al azar.</p><p>Si los recursos fueran ilimitados, una población crecería cada vez más rápido: es el <b>crecimiento exponencial</b>, que se observa al principio cuando una especie coloniza un lugar nuevo, como las bacterias en un medio de cultivo o el conejo en Australia. Pero los recursos siempre se acaban: el alimento, el espacio y los depredadores frenan el crecimiento, y la población se estabiliza alrededor de un valor máximo, la <mark>capacidad de carga</mark> del medio. La gráfica tiene entonces forma de S (<b>crecimiento logístico</b>).</p><p>En la naturaleza, muchas poblaciones oscilan: en los bosques del norte de Canadá, las poblaciones de liebres y de linces suben y bajan en ciclos de unos diez años, porque cuando abundan las liebres aumentan los linces, que luego las reducen, y entonces los linces pasan hambre. La <b>comunidad</b> es el conjunto de todas las poblaciones de un ecosistema.</p>`,
      svg: L6.barras("Crecimiento logístico de una población que se estabiliza en la capacidad de carga", [["Año 1", 10, "10"], ["Año 2", 30, "30"], ["Año 3", 70, "70"], ["Año 4", 90, "90"], ["Año 5", 95, "95"]], "Población hasta la capacidad de carga", 100),
    },
    {
      html: `<h3>1.4 Las relaciones entre especies</h3><p>Los seres vivos de un ecosistema se relacionan entre sí. Las <b>relaciones intraespecíficas</b> se dan entre individuos de la misma especie: las <b>familias</b> (los lobos, los ciervos con sus crías), los <b>gregarismos</b> (bancos de peces, bandadas de aves, que protegen frente a los depredadores), las <b>colonias</b> (corales) y las <b>sociedades</b> con reparto de tareas (abejas, hormigas). También hay <b>competencia</b> por el alimento, el territorio o la pareja.</p><p>Las <mark>relaciones interespecíficas</mark>, entre especies distintas, son:</p><p>• <b>Depredación</b> (+/−): el depredador caza y se come a la presa, como el lince al conejo.<br>• <b>Competencia</b> (−/−): dos especies usan el mismo recurso limitado, como el zorro y el águila que cazan conejos.<br>• <b>Parasitismo</b> (+/−): el parásito vive a costa del huésped sin matarlo, al menos rápidamente: piojos, garrapatas, tenias o el muérdago sobre los árboles.<br>• <b>Mutualismo</b> (+/+): ambas especies se benefician, como las abejas y las flores, las bacterias de nuestro intestino o los líquenes (alga y hongo). Cuando la asociación es tan estrecha que no pueden vivir separadas, se llama <b>simbiosis</b>.<br>• <b>Comensalismo</b> (+/0): una especie se beneficia y la otra ni gana ni pierde, como los buitres que aprovechan los restos de las presas de otros.</p><p>Estas relaciones regulan el tamaño de las poblaciones y mantienen el equilibrio del ecosistema.</p>`,
      svg: L6.tabla("Relaciones interespecíficas y su efecto en cada especie", ["Relación", "Efecto", "Ejemplo"], [["Depredación", "+ / −", "lince y conejo"], ["Competencia", "− / −", "zorro y águila"], ["Parasitismo", "+ / −", "garrapata y perro"], ["Mutualismo", "+ / +", "abeja y flor"], ["Comensalismo", "+ / 0", "buitre y restos"]]),
    },
    {
      html: `<h3>2.1 Cadenas y redes tróficas</h3><p>En un ecosistema, la materia y la energía pasan de unos seres a otros cuando se alimentan. Cada grupo de organismos que obtiene el alimento de la misma forma ocupa un <mark>nivel trófico</mark>:</p><p>• Los <b>productores</b> son los organismos autótrofos: plantas, algas y algunas bacterias. Fabrican materia orgánica a partir de materia inorgánica mediante la fotosíntesis, con la energía de la luz. Algunas bacterias de las fuentes hidrotermales lo hacen con la energía de reacciones químicas (quimiosíntesis).<br>• Los <b>consumidores primarios</b> o herbívoros se alimentan de productores: el conejo, el saltamontes, el zooplancton.<br>• Los <b>consumidores secundarios</b> son carnívoros que se alimentan de herbívoros, y los <b>terciarios</b>, de otros carnívoros. Los <b>omnívoros</b>, como el jabalí o el ser humano, ocupan varios niveles.<br>• Los <b>descomponedores</b>, hongos y bacterias, transforman los restos de todos los niveles (cadáveres, hojas caídas, excrementos) en sustancias minerales que vuelven al suelo y al agua.</p><p>Una <mark>cadena trófica</mark> es una secuencia lineal de quién se come a quién. Las flechas indican el paso de la materia y la energía: van del que es comido al que come. En la realidad, cada especie come varias cosas y es comida por varias, así que las cadenas se entrelazan en una <mark>red trófica</mark>. Cuanto más compleja es la red, más estable es el ecosistema ante la pérdida de una especie.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena trófica: hierba, grillo, rana y serpiente">
        <defs>${flecha("ec1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["hierba", "productor", "var(--leaf)"], ["grillo", "c. primario", "var(--sun)"], ["rana", "c. secundario", "var(--pen)"], ["serpiente", "c. terciario", "var(--red)"]].map(([t, n, c], i) => `<rect x="${12 + i * 62}" y="56" width="54" height="40" rx="10" fill="${c}"/><text x="${39 + i * 62}" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>${t}</text><text x="${39 + i * 62}" y="116" text-anchor="middle" font-size="9" fill="var(--ink)" ${F}>${n}</text>${i < 3 ? `<path d="M${67 + i * 62} 76 H ${73 + i * 62}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#ec1)"/>` : ""}`).join("")}
        <text x="130" y="150" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>la flecha va de quien es comido a quien come</text>
      </svg>`,
    },
    {
      html: `<h3>2.2 El flujo de energía y las pirámides</h3><p>La energía entra en casi todos los ecosistemas como <b>luz solar</b>, que los productores captan en la fotosíntesis y almacenan como energía química en la materia orgánica. Esa energía pasa a los herbívoros cuando comen plantas, a los carnívoros cuando comen herbívoros y a los descomponedores con los restos. En cada paso, una gran parte se gasta en las funciones vitales y acaba liberándose como <b>calor</b>, que ya no pueden aprovechar otros seres vivos. Por eso decimos que la energía <mark>fluye en un solo sentido</mark>: no se recicla. Un ecosistema necesita un aporte constante de energía del Sol.</p><p>Las relaciones entre los niveles tróficos se representan con <mark>pirámides ecológicas</mark>, formadas por rectángulos superpuestos cuyo tamaño es proporcional a una magnitud de cada nivel:</p><p>• Las <b>pirámides de energía</b> muestran la energía que contiene cada nivel por unidad de superficie y de tiempo. <b>Siempre</b> se estrechan hacia arriba, porque cada nivel tiene menos energía que el anterior.<br>• Las <b>pirámides de biomasa</b> muestran la masa de materia orgánica de cada nivel. Suelen estrecharse hacia arriba, aunque en el mar pueden estar invertidas: el fitoplancton tiene poca biomasa en un momento dado, pero se reproduce tan deprisa que alimenta a una biomasa mayor de zooplancton.<br>• Las <b>pirámides de números</b> muestran el número de individuos. Pueden estar invertidas: un solo árbol alimenta a miles de insectos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide de energía: 10 000, 1 000, 100 y 10 unidades de energía">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["productores", 10000, 220, "var(--leaf)"], ["herbívoros", 1000, 170, "var(--sun)"], ["carnívoros 1", 100, 124, "var(--pen)"], ["carnívoros 2", 10, 56, "var(--red)"]].map(([t, e, w, c], i) => `<rect x="${130 - w / 2}" y="${136 - i * 34}" width="${w}" height="30" rx="4" fill="${c}"/><text x="130" y="${156 - i * 34}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${i < 3 ? t + " · " : ""}${e.toLocaleString("es-ES")}</text>`).join("")}
        <text x="130" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>en cada paso se pierde ≈ 90 %</text>
      </svg>`,
    },
    {
      html: `<h3>2.3 La regla del 10 % y la productividad</h3><p>De la energía que un nivel trófico obtiene de su alimento, la mayor parte se gasta en respirar, moverse y mantener el calor del cuerpo, o se pierde en las partes que no se comen o no se digieren (huesos, pelo, excrementos). Solo pasa al siguiente nivel, como término medio, alrededor del <mark>10 %</mark>: es la <b>eficiencia ecológica</b>. Si las plantas de un prado fijan 10.000 kJ, a los herbívoros llegan unos 1.000 kJ, a los carnívoros 100 kJ y a los supercarnívoros solo 10 kJ.</p><p>Esta regla tiene consecuencias importantes:</p><p>• Las cadenas tróficas raramente tienen más de <b>cuatro o cinco eslabones</b>: la energía se agota.<br>• Los <b>grandes depredadores</b>, como el lince, el águila o el lobo, son escasos y necesitan territorios enormes, por lo que son los más vulnerables a la extinción.<br>• Para alimentar a la humanidad, es más eficiente comer de los niveles bajos: con la misma superficie de cultivo se alimenta a muchas más personas con cereales y legumbres que con carne de animales alimentados con esos cereales.</p><p>La <mark>producción</mark> es la cantidad de materia orgánica que fabrica un nivel trófico en un tiempo determinado, y la <b>productividad</b> es la producción por unidad de biomasa o de superficie. Los ecosistemas más productivos son los arrecifes de coral, las selvas tropicales y los estuarios; los menos, los desiertos y el océano abierto, pobre en nutrientes.</p>`,
      svg: L6.barras("Regla del 10 %: energía en cada nivel trófico", [["Productores", 100, "10.000"], ["Herbívoros", 40, "1.000"], ["Carnívoros", 16, "100"], ["Supercarnív.", 6, "10"]], "Energía (kJ), escala no lineal", 100),
    },
    {
      html: `<h3>3.1 Los ciclos de la materia</h3><p>A diferencia de la energía, la <mark>materia se recicla</mark>. Los elementos químicos que forman los seres vivos (carbono, hidrógeno, oxígeno, nitrógeno, fósforo, azufre) pasan del medio físico a los seres vivos y vuelven al medio una y otra vez, siguiendo unas rutas llamadas <mark>ciclos biogeoquímicos</mark>. El nombre indica que participan los seres vivos (<i>bio</i>), las rocas y el suelo (<i>geo</i>) y las reacciones químicas.</p><p>En cada ciclo hay:</p><p>• <b>Reservorios</b> o almacenes, donde el elemento permanece mucho tiempo: la atmósfera, los océanos, las rocas o los combustibles fósiles.<br>• <b>Procesos</b> que lo mueven de un lugar a otro: la fotosíntesis, la respiración, la descomposición, la combustión, la erosión o la sedimentación.</p><p>En todos los ciclos tienen un papel esencial los <b>productores</b>, que incorporan los elementos inorgánicos a la materia orgánica, y los <b>descomponedores</b>, que la devuelven al medio en forma mineral. Sin descomponedores, los restos se acumularían y los nutrientes quedarían atrapados en ellos, de modo que las plantas no podrían crecer.</p><p>Las actividades humanas alteran estos ciclos: la quema de combustibles fósiles aumenta el carbono de la atmósfera, y el abuso de abonos aporta nitrógeno y fósforo en exceso a ríos y lagos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del carbono: fotosíntesis, respiración, descomposición y combustión">
        <defs>${flecha("ec2", "var(--leaf)")}${flecha("ec3", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="90" y="14" width="80" height="28" rx="14" fill="var(--muted)"/><text x="130" y="33" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>CO₂ aire</text>
        <path d="M50 150 V 100" stroke="var(--leaf)" stroke-width="5"/><circle cx="50" cy="90" r="22" fill="var(--leaf)"/>
        <ellipse cx="150" cy="140" rx="20" ry="12" fill="var(--sun)"/><rect x="200" y="120" width="34" height="40" fill="var(--ink)" opacity=".7"/><path d="M210 120 V 104 M224 120 V 98" stroke="var(--muted)" stroke-width="5"/>
        <path d="M100 36 Q 60 40 54 64" fill="none" stroke="var(--leaf)" stroke-width="2.5" marker-end="url(#ec2)"/>
        <path d="M150 124 Q 150 70 140 46" fill="none" stroke="var(--red)" stroke-width="2.5" marker-end="url(#ec3)"/>
        <path d="M218 96 Q 210 50 172 34" fill="none" stroke="var(--red)" stroke-width="2.5" marker-end="url(#ec3)"/>
        <g ${F} font-size="10" font-weight="700"><text x="14" y="58" fill="var(--leaf)">fotosíntesis</text><text x="108" y="96" fill="var(--red)">respiración</text><text x="246" y="80" text-anchor="end" fill="var(--red)">combustión</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.2 El ciclo del carbono</h3><p>El carbono es el elemento básico de la materia orgánica. Pasa continuamente entre la atmósfera, los seres vivos, los océanos y las rocas.</p><p>Las plantas, las algas y las cianobacterias toman el carbono de la atmósfera o del agua en forma de <b>CO₂</b> mediante la <mark>fotosíntesis</mark> y lo convierten en materia orgánica (glucosa). Esa materia pasa a los consumidores al comer. Todos los seres vivos devuelven CO₂ a la atmósfera con la <mark>respiración celular</mark>, y los descomponedores, al degradar los restos.</p><p>Una parte del carbono queda guardada durante millones de años:</p><p>• En las <b>rocas calizas</b>, formadas por la acumulación de conchas y esqueletos de carbonato de calcio de organismos marinos.<br>• En los <b>combustibles fósiles</b>: el carbón procede de bosques enterrados hace más de 300 millones de años, y el petróleo y el gas, de plancton marino acumulado en el fondo.<br>• En los <b>océanos</b>, que disuelven enormes cantidades de CO₂.</p><p>Al quemar combustibles fósiles, los humanos devolvemos a la atmósfera en pocos años el carbono acumulado durante millones. La concentración de CO₂ ha pasado de unas 280 partes por millón antes de la Revolución Industrial a más de 420 en la actualidad, lo que intensifica el <b>efecto invernadero</b> y el calentamiento global. Los bosques y los océanos son los grandes <b>sumideros</b> que absorben parte de ese exceso.</p>`,
      svg: L6.flujo("Ciclo del carbono: fotosíntesis, cadenas tróficas, respiración y depósito en rocas y combustibles", ["Fotosíntesis: el CO₂ del aire pasa a materia orgánica", "Pasa a los consumidores al comer", "Respiración y descomposición devuelven CO₂", "Parte queda en calizas y combustibles fósiles"], "El carbono va y vuelve"),
      video: { id: "u6dhBw_f7Oc", titulo: "Ciclo del carbono", canal: "TriviasGo", vistas: 1288924 },
    },
    {
      html: `<h3>3.3 Los ciclos del nitrógeno y del fósforo</h3><p>El <mark>nitrógeno</mark> es imprescindible para fabricar proteínas y ADN. Forma el 78 % del aire, pero en forma de gas (N₂) que ni las plantas ni los animales pueden usar. Solo algunas bacterias son capaces de captarlo: es la <b>fijación del nitrógeno</b>. Muchas viven libres en el suelo y otras en los nódulos de las raíces de las <b>leguminosas</b> (judías, garbanzos, alfalfa, tréboles), con las que mantienen una relación de mutualismo. Por eso los agricultores alternan cereales con leguminosas, que enriquecen el suelo.</p><p>Las plantas absorben el nitrógeno del suelo en forma de <b>nitratos</b> y lo pasan a los animales al ser comidas. Los descomponedores transforman los restos en amonio, y otras bacterias, los <b>nitrificantes</b>, lo convierten de nuevo en nitratos. Por último, las <b>bacterias desnitrificantes</b> devuelven el N₂ a la atmósfera.</p><p>El <mark>fósforo</mark> forma parte del ADN y del ATP, la molécula que almacena energía en las células. Su ciclo no tiene fase atmosférica: el fósforo está en las rocas, se libera lentamente por la meteorización, las plantas lo absorben del suelo y pasa a los animales. Acaba en el mar, donde se deposita en los sedimentos. Por eso es escaso y suele ser un factor limitante.</p><p>El exceso de abonos con nitrógeno y fósforo llega a ríos y lagos y provoca la <b>eutrofización</b>: crecen en exceso las algas, al morir consumen el oxígeno del agua y mueren los peces, como ha ocurrido en el Mar Menor.</p>`,
      svg: L6.ciclo("Ciclo del nitrógeno: fijación, nitratos, plantas y animales, descomposición y desnitrificación", "N", ["N₂ del aire", "Fijación (bacterias)", "Nitratos del suelo", "Plantas y animales", "Restos: amonio"], "var(--leaf)"),
    },
    {
      html: `<h3>4.1 Relaciones y sucesión ecológica</h3><p>Los ecosistemas no son estáticos: cambian con el tiempo. La <mark>sucesión ecológica</mark> es la sustitución progresiva de unas comunidades por otras en un lugar hasta llegar a una comunidad estable.</p><p>La <b>sucesión primaria</b> se produce en un lugar donde nunca ha habido vida ni suelo: una colada de lava recién solidificada, una roca desnuda que deja un glaciar al retirarse o una isla volcánica nueva. Los primeros colonizadores, las <b>especies pioneras</b>, son líquenes y musgos, capaces de vivir sobre la roca. Al meteorizarla y morir, forman poco a poco un suelo delgado, en el que crecen hierbas; luego, arbustos; y, al cabo de cientos de años, árboles. La etapa final y estable, en equilibrio con el clima, es la <mark>comunidad clímax</mark>: en gran parte de España, el encinar.</p><p>La <b>sucesión secundaria</b> se produce en un lugar donde ya había un ecosistema que fue destruido parcialmente, pero que conserva el suelo: tras un incendio, una tala o el abandono de un campo de cultivo. Es mucho más rápida, porque el suelo tiene semillas y nutrientes. Un campo abandonado se cubre de hierbas en un año, de matorral en unos años y puede volver a ser bosque en unas décadas.</p><p>A lo largo de la sucesión aumentan la biodiversidad, la biomasa, el espesor del suelo y la complejidad de las redes tróficas, y el ecosistema se vuelve más estable. Las actividades humanas, como los incendios repetidos, provocan una <b>regresión</b>: el ecosistema retrocede a etapas anteriores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sucesión ecológica: roca desnuda, hierbas, arbustos y bosque">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 130 H 250" stroke="var(--ink)" stroke-width="2"/>
        <path d="M18 130 Q 36 112 54 130 Z" fill="var(--muted)"/>
        ${[78, 88, 98].map((x) => `<path d="M${x} 130 V 116" stroke="var(--leaf)" stroke-width="3"/>`).join("")}
        <circle cx="140" cy="112" r="14" fill="var(--leaf)" opacity=".8"/><circle cx="156" cy="118" r="10" fill="var(--leaf)" opacity=".8"/>
        <path d="M216 130 V 90" stroke="var(--ink)" stroke-width="5"/><circle cx="216" cy="70" r="28" fill="var(--leaf)"/>
        <g ${F} font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)"><text x="36" y="150">roca</text><text x="88" y="150">hierbas</text><text x="148" y="150">arbustos</text><text x="216" y="150">bosque (clímax)</text></g>
        <text x="130" y="28" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>decenas o cientos de años →</text>
      </svg>`,
    },
    {
      html: `<h3>4.2 Los biomas</h3><p>Un <mark>bioma</mark> es un gran conjunto de ecosistemas terrestres que comparten un mismo tipo de clima y de vegetación. La <b>temperatura</b> y las <b>precipitaciones</b> son los factores que más los determinan, por eso se distribuyen en franjas según la latitud y la altitud.</p><p>• La <b>selva tropical</b>, cálida y lluviosa todo el año, tiene la mayor biodiversidad del planeta: en una hectárea puede haber más especies de árboles que en toda Europa.<br>• La <b>sabana</b> tiene hierbas altas y árboles dispersos, como las acacias, y una larga estación seca. En ella viven grandes herbívoros y sus depredadores.<br>• El <b>desierto</b> recibe menos de 250 mm de lluvia al año. Sus seres vivos están adaptados a la escasez de agua.<br>• El <b>bosque mediterráneo</b>, de encinas, alcornoques y pinos, con hojas duras y pequeñas adaptadas a veranos secos y calurosos, ocupa gran parte de España.<br>• El <b>bosque caducifolio</b> templado, de robles, hayas y castaños que pierden la hoja en otoño, se da en climas húmedos como el norte de España.<br>• La <b>taiga</b>, de coníferas como abetos y pinos, ocupa las zonas frías del norte de Europa, Asia y América.<br>• La <b>tundra</b>, cerca del polo, tiene musgos, líquenes y pequeños arbustos sobre un suelo helado, el permafrost.</p><p>En la montaña, al subir, la vegetación cambia como si viajáramos hacia el polo: son los <b>pisos de vegetación</b>.</p>`,
      svg: L6.tabla("Principales biomas terrestres según el clima y la vegetación", ["Bioma", "Clima", "Vegetación"], [["Selva", "cálido y lluvioso", "árboles altos"], ["Sabana", "estación seca", "hierba y acacias"], ["Mediterráneo", "verano seco", "encinas"], ["Taiga", "frío", "coníferas"], ["Tundra", "muy frío", "musgos"]]),
      video: { id: "JGRECgg02Qs", titulo: "Biomas: clasificación y principales características", canal: "Temas de GEO", vistas: 178266 },
    },
    {
      html: `<h3>4.3 Los ecosistemas acuáticos y los de España</h3><p>Los <mark>ecosistemas acuáticos</mark> cubren más del 70 % de la superficie terrestre. En ellos los factores limitantes son la <b>luz</b>, que solo penetra en los primeros 200 metros, la <b>salinidad</b>, la temperatura y los nutrientes.</p><p>• En los <b>ecosistemas marinos</b>, el plancton (fitoplancton y zooplancton) es la base de las redes tróficas. Los más productivos son las zonas costeras y los afloramientos, donde suben aguas ricas en nutrientes, como frente a Canarias. Las <b>praderas de posidonia</b> del Mediterráneo, una planta marina, producen oxígeno, protegen las playas de la erosión y sirven de refugio a cientos de especies.<br>• En los <b>ecosistemas de agua dulce</b> se distinguen los de aguas corrientes (ríos y arroyos), con seres adaptados a la corriente, y los de aguas quietas (lagos, lagunas, charcas). Los <b>humedales</b>, como Doñana, las Tablas de Daimiel o el delta del Ebro, son lugares clave para las aves migratorias.</p><p>España es uno de los países con mayor biodiversidad de Europa, por su variedad de climas y de relieves y por su posición entre Europa y África. Tiene <b>bosques atlánticos</b> de robles y hayas en el norte, <b>bosques mediterráneos</b> en la mayor parte del territorio, ecosistemas de <b>alta montaña</b> en los Pirineos y Sierra Nevada, zonas <b>semiáridas</b> en el sureste y la <b>laurisilva</b> de Canarias, un bosque húmedo relicto. Muchos están protegidos en 16 parques nacionales, como Doñana, Ordesa o Garajonay.</p>`,
      svg: L6.compara("Ecosistemas acuáticos: marinos y de agua dulce", ["Marinos", "var(--pen)", ["base: plancton", "luz hasta 200 m", "posidonia", "afloramientos"]], ["Agua dulce", "var(--leaf)", ["ríos y lagos", "humedales", "Doñana, Daimiel", "aves migratorias"]]),
    },
  ],
  figura: {
    titulo: "Los papeles en un ecosistema",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Productores, consumidores y descomponedores: qué hacen y ejemplos">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Productores", "fabrican materia orgánica", "con la luz (fotosíntesis)", "plantas, algas", "var(--leaf)"], ["Consumidores", "se alimentan de", "otros seres vivos", "herbívoros, carnívoros", "var(--red)"], ["Descomponedores", "transforman restos", "en sales minerales", "hongos, bacterias", "var(--sun)"]]
        .map(([n, a, b, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="58" text-anchor="middle" font-size="19" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="102" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="124" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="172" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "FBQNRqQNvAc", titulo: "¿Qué son las cadenas alimenticias?", canal: "A Cierta Ciencia", vistas: 1291452, megusta: 0, busqueda: "ecosistemas cadenas tróficas" },
  ejemplos: [
    { enunciado: "Los productores de un ecosistema fijan 100.000 kJ de energía. Con la regla del 10 %, ¿cuánta llega a los consumidores terciarios?", pasos: ["Consumidores primarios: 10 % de 100.000 = 10.000 kJ.", "Secundarios: 10 % de 10.000 = 1.000 kJ.", "Terciarios: 10 % de 1.000 = 100 kJ."], resultado: "100 kJ, solo el 0,1 % de la energía inicial." },
    { enunciado: "En una cadena trigo → ratón → serpiente → águila, desaparecen las serpientes. ¿Qué puede pasar?", pasos: ["Los ratones pierden a su depredador y su población aumenta.", "Al haber más ratones, se come más trigo y este disminuye.", "Las águilas pierden alimento y su población baja, salvo que coman otras presas."], resultado: "Aumentan los ratones, disminuyen el trigo y las águilas: todo el ecosistema se desequilibra." },
    { enunciado: "Clasifica estas relaciones: el pez payaso y la anémona; el piojo y la persona; dos ciervos machos por una hembra; el lobo y el conejo.", pasos: ["Pez payaso y anémona: los dos se benefician → mutualismo.", "Piojo y persona: uno se beneficia y perjudica al otro → parasitismo.", "Dos ciervos de la misma especie compitiendo → competencia intraespecífica.", "Lobo y conejo → depredación."], resultado: "Mutualismo, parasitismo, competencia intraespecífica y depredación." },
    { enunciado: "En una parcela de 50 m² se cuentan 30 caracoles. ¿Cuál es la densidad de población? ¿Cuántos caracoles habrá en un prado de 2 hectáreas con la misma densidad?", pasos: ["Densidad = 30 / 50 m² = 0,6 caracoles/m².", "2 ha = 20.000 m².", "20.000 · 0,6 = 12.000."], resultado: "Densidad de 0,6 caracoles/m²; en el prado habrá unos 12.000." },
    { enunciado: "Una hectárea de cereal produce 4.000 kg de grano. Para producir 1 kg de carne de ternera hacen falta unos 10 kg de grano. ¿Cuánta carne se obtiene? ¿Qué es más eficiente para alimentar a la población?", pasos: ["Carne = 4.000 / 10 = 400 kg.", "Con grano directamente se aprovechan 4.000 kg de alimento.", "Comer del nivel de los productores aprovecha unas 10 veces más energía."], resultado: "Se obtendrían 400 kg de carne frente a 4.000 kg de grano: alimentarse de los niveles bajos es más eficiente." },
    { enunciado: "Una población de 100 bacterias se duplica cada 20 minutos con recursos ilimitados. ¿Cuántas habrá en 2 horas? ¿Por qué no sigue así indefinidamente?", pasos: ["2 horas = 120 min = 6 duplicaciones.", "100 · 2⁶ = 100 · 64 = 6.400.", "Al agotarse el alimento y acumularse residuos, el crecimiento se frena."], resultado: "6.400 bacterias. El crecimiento exponencial se frena al alcanzar la capacidad de carga del medio." },
  ],
  errores: [
    "Pensar que la energía se recicla en el ecosistema como la materia: la energía fluye y se pierde como calor; la materia sí se recicla.",
    "Olvidar a los descomponedores en las cadenas y ciclos.",
    "Dibujar las flechas de una cadena al revés: van del que es comido al que come (sentido de la energía).",
    "Confundir hábitat (lugar donde vive) con nicho ecológico (papel que desempeña).",
    "Pensar que las pirámides de energía pueden estar invertidas: siempre se estrechan hacia arriba.",
    "Creer que las pirámides de números y de biomasa siempre se estrechan hacia arriba: pueden estar invertidas; solo la de energía no puede.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Distingue entre biotopo y biocenosis con un ejemplo.", sol: "Biotopo: el medio físico (el agua, las piedras y la temperatura de un río). Biocenosis: los seres vivos que viven en él (truchas, algas, insectos)." } },
    { nivel: "básico", ...{ q: "Escribe una cadena alimentaria de cuatro eslabones de un bosque mediterráneo e indica el nivel trófico de cada uno.", sol: "Bellota (productor) → ratón de campo (consumidor primario) → culebra (secundario) → águila culebrera (terciario)." } },
    { nivel: "básico", ...{ q: "Si los productores de un lago fijan 50.000 kJ, ¿cuánta energía llega a los consumidores secundarios?", sol: "Primarios: 5.000 kJ. Secundarios: 500 kJ." } },
    { nivel: "básico", ...{ q: "Explica el papel de los descomponedores.", sol: "Transforman los restos orgánicos en sustancias minerales que vuelven al suelo y pueden usar de nuevo los productores. Cierran el ciclo de la materia." } },
    { nivel: "básico", ...{ q: "¿Qué es una sucesión ecológica? Pon un ejemplo.", sol: "El cambio gradual de las comunidades de un lugar a lo largo del tiempo. Ejemplo: tras un incendio, aparecen hierbas, después matorrales y, con los años, de nuevo el bosque (comunidad clímax)." } },
    { nivel: "básico", ...{ q: "Indica dos adaptaciones de los seres vivos a la falta de agua.", sol: "Los cactus acumulan agua en el tallo y tienen espinas en lugar de hojas; muchos animales del desierto son nocturnos y producen orina muy concentrada." } },
    { nivel: "básico", ...{ q: "Asocia cada bioma con su vegetación: taiga, sabana, bosque mediterráneo, tundra.", sol: "Taiga: coníferas. Sabana: hierbas y árboles dispersos (acacias). Bosque mediterráneo: encinas y alcornoques. Tundra: musgos y líquenes." } },
    { nivel: "básico", q: "Diferencia hábitat y nicho ecológico con un ejemplo.", sol: "Hábitat: el lugar donde vive una especie (el pájaro carpintero, en los troncos del bosque). Nicho: su función (se alimenta de larvas de insectos de la madera y hace agujeros que usan otras aves)." },
    { nivel: "básico", q: "Define población y comunidad.", sol: "Población: individuos de la misma especie en un lugar y momento. Comunidad: conjunto de todas las poblaciones de un ecosistema." },
    { nivel: "básico", q: "Indica el tipo de relación: piojo y persona; dos plantas que compiten por la luz; abeja y flor; buitre que come restos de la presa de un lobo.", sol: "Parasitismo; competencia; mutualismo; comensalismo." },
    { nivel: "básico", q: "¿Por qué decimos que la energía fluye y la materia se recicla?", sol: "La energía entra como luz y sale como calor, que no se puede reutilizar. La materia pasa del medio a los seres vivos y vuelve al medio en ciclos." },
    { nivel: "básico", q: "Nombra cinco biomas terrestres.", sol: "Selva tropical, sabana, desierto, bosque mediterráneo, bosque caducifolio, taiga y tundra." },
    { nivel: "medio", ...{ q: "¿Por qué no hay cadenas tróficas de 10 eslabones?", sol: "Porque en cada paso solo pasa un 10 % de la energía; tras pocos niveles no queda energía suficiente para mantener otro nivel." } },
    { nivel: "medio", ...{ q: "Indica dos procesos que devuelven CO₂ a la atmósfera y dos que lo retiran.", sol: "Lo devuelven: la respiración y la quema de combustibles fósiles. Lo retiran: la fotosíntesis y su disolución en los océanos." } },
    { nivel: "medio", ...{ q: "¿Qué es un factor limitante? Da un ejemplo en el mar y otro en el desierto.", sol: "El factor que más restringe la vida de una especie. En el fondo del mar, la luz; en el desierto, el agua." } },
    { nivel: "medio", q: "¿Qué es la capacidad de carga de un medio? Dibuja cómo es la curva de crecimiento de una población que la alcanza.", sol: "El número máximo de individuos que el medio puede mantener con sus recursos. La curva tiene forma de S: crece rápido al principio y luego se estabiliza." },
    { nivel: "medio", q: "Explica por qué una pirámide de números puede estar invertida con el ejemplo de un árbol.", sol: "Un solo árbol (productor) alimenta a miles de insectos herbívoros, que son más numerosos que los productores; la base es estrecha y el segundo nivel, ancho." },
    { nivel: "medio", q: "Diferencia la sucesión primaria de la secundaria con un ejemplo de cada una.", sol: "Primaria: en un lugar sin suelo ni vida previa (colada de lava). Secundaria: donde había un ecosistema destruido que conserva el suelo (bosque quemado o campo abandonado); es más rápida." },
    { nivel: "medio", q: "¿Qué papel tienen las leguminosas en el ciclo del nitrógeno y por qué interesan a los agricultores?", sol: "En sus raíces viven bacterias que fijan el nitrógeno del aire y lo convierten en compuestos que la planta usa; al quedar en el suelo, lo enriquecen y se reduce la necesidad de abonos." },
    { nivel: "medio", q: "¿Por qué el fósforo suele ser un factor limitante?", sol: "Porque su ciclo no tiene fase atmosférica: se libera muy lentamente de las rocas y acaba en los sedimentos marinos, de modo que hay poco disponible para los seres vivos." },
    { nivel: "medio", q: "Explica qué son los pisos de vegetación.", sol: "Franjas de vegetación diferente según la altitud en una montaña: al subir baja la temperatura y la vegetación cambia como si se avanzara hacia el polo (encinar, robledal, pinar, pastos alpinos)." },
    { nivel: "medio", q: "¿Qué importancia tienen las praderas de posidonia?", sol: "Producen oxígeno, almacenan carbono, protegen las playas de la erosión, dan refugio y zonas de cría a muchas especies y son indicadoras de aguas limpias." },
    { nivel: "medio", q: "Explica cómo oscilan las poblaciones de liebres y linces de Canadá.", sol: "Cuando abundan las liebres, los linces tienen alimento y aumentan; al aumentar los linces, cazan más liebres y estas disminuyen; sin alimento, los linces disminuyen y las liebres se recuperan. El ciclo dura unos diez años." },
    { nivel: "medio", q: "¿Por qué los grandes depredadores son los más vulnerables a la extinción?", sol: "Porque reciben poca energía (están en lo alto de la pirámide), son escasos, necesitan territorios enormes y se reproducen lentamente; cualquier pérdida de hábitat o de presas les afecta mucho." },
    { nivel: "medio", q: "Diferencia relaciones intraespecíficas e interespecíficas y pon dos ejemplos de cada una.", sol: "Intraespecíficas, entre individuos de la misma especie: manada de lobos, colmena de abejas. Interespecíficas, entre especies distintas: depredación (lince y conejo), mutualismo (abeja y flor)." },
    { nivel: "avanzado", q: "Explica, con lo que sabes de redes tróficas, el efecto de la reintroducción del lobo en Yellowstone.", sol: "Los lobos redujeron el número de ciervos y cambiaron su comportamiento; las plantas de las orillas se recuperaron; volvieron los castores y otras especies; las raíces sujetaron las orillas. Es una cascada trófica: un depredador afecta a varios niveles inferiores y al paisaje." },
    { nivel: "avanzado", q: "Si los productores de un ecosistema fijan 200.000 kJ y la eficiencia es del 10 %, ¿cuánta energía hay en el cuarto nivel trófico? ¿Podría haber un sexto nivel?", sol: "200.000 → 20.000 → 2.000 → 200 kJ en el cuarto nivel. El sexto tendría 2 kJ, insuficientes para mantener una población, por eso no existe." },
    { nivel: "avanzado", q: "Explica la eutrofización del Mar Menor paso a paso.", sol: "Los nitratos y fosfatos de los abonos agrícolas llegan a la laguna; proliferan las algas (sopa verde); al morir, las bacterias las descomponen consumiendo el oxígeno; el agua se queda sin oxígeno y mueren peces y otros organismos." },
    { nivel: "avanzado", q: "La concentración de CO₂ pasó de unas 280 a 420 ppm. Calcula el aumento en porcentaje y explica dos consecuencias.", sol: "(420 − 280) / 280 · 100 = 50 %. Consecuencias: intensifica el efecto invernadero y el calentamiento global; acidifica el océano, lo que daña a corales y animales con concha." },
    { nivel: "avanzado", q: "¿Por qué una red trófica compleja es más estable que una cadena simple?", sol: "Si desaparece una especie, sus depredadores pueden alimentarse de otras presas y sus presas tienen otros depredadores que las controlan; en una cadena simple, la pérdida de un eslabón rompe toda la cadena." },
    { nivel: "avanzado", q: "Diseña un experimento con dos frascos cerrados (con planta acuática y caracol) para estudiar el ciclo del carbono y el oxígeno.", sol: "Frasco A con planta y caracol a la luz; frasco B igual en la oscuridad. Medir con indicador de CO₂ (azul de bromotimol) o la supervivencia del caracol. A la luz la planta hace fotosíntesis y repone el oxígeno; en la oscuridad solo hay respiración, aumenta el CO₂ y el caracol puede morir. Mantener iguales temperatura, volumen y organismos." },
    { nivel: "avanzado", q: "Tras un incendio en un pinar, ¿qué etapas esperas ver en los años siguientes? ¿Qué podría impedir que se recuperara?", sol: "Hierbas y plantas que rebrotan el primer año, matorral (jaras, coscojas) en pocos años y, con el tiempo, árboles. Lo impedirían los incendios repetidos, la erosión del suelo tras lluvias fuertes, el pastoreo excesivo o la falta de semillas." },
    { nivel: "avanzado", q: "En una isla se introducen cabras, que no tienen depredadores. Predice qué pasará con la población de cabras y con la vegetación a largo plazo.", sol: "Las cabras crecerán de forma casi exponencial; al superar la capacidad de carga, destruirán la vegetación, el suelo se erosionará y la población de cabras se desplomará por falta de alimento. Muchas especies endémicas de plantas pueden extinguirse, como ha ocurrido en varias islas." },
  ],
  quiz: [
    { q: "La biocenosis es…", o: ["el medio físico", "el conjunto de seres vivos de un ecosistema", "un tipo de roca", "el clima"], a: 1, e: "El biotopo es el medio físico." },
    { q: "El nicho ecológico es…", o: ["el lugar donde vive una especie", "su nido", "su población", "la función que desempeña en el ecosistema"], a: 3, e: "El lugar es el hábitat." },
    { q: "El factor limitante en el fondo del mar suele ser…", o: ["la luz", "el agua", "la sal", "el viento"], a: 0, e: "La luz no pasa de unos 200 m." },
    { q: "Las orejas grandes del fénec son una adaptación para…", o: ["oír a sus crías", "conservar calor", "disipar calor", "nadar"], a: 2, e: "Vive en el desierto." },
    { q: "La capacidad de carga es…", o: ["la natalidad", "el peso de un animal", "el número máximo de individuos que mantiene el medio", "la biomasa de las plantas"], a: 2, e: "La población se estabiliza en torno a ella." },
    { q: "La relación entre las abejas y las flores es…", o: ["mutualismo", "parasitismo", "competencia", "comensalismo"], a: 0, e: "Ambas se benefician." },
    { q: "La garrapata y el perro tienen una relación de…", o: ["mutualismo", "comensalismo", "competencia", "parasitismo"], a: 3, e: "+/−." },
    { q: "Un liquen es una asociación de…", o: ["musgo y bacteria", "alga y hongo", "dos plantas", "insecto y hongo"], a: 1, e: "Simbiosis." },
    { q: "En la cadena hierba → conejo → zorro, el conejo es…", o: ["consumidor primario", "productor", "consumidor secundario", "descomponedor"], a: 0, e: "Herbívoro." },
    { q: "Las flechas de una cadena trófica indican…", o: ["el tamaño", "la edad", "quién come a quién, del comido al que come", "el orden alfabético"], a: 2, e: "El sentido de la energía." },
    { q: "Los descomponedores son…", o: ["plantas", "hongos y bacterias", "carnívoros", "herbívoros"], a: 1, e: "Devuelven la materia al medio." },
    { q: "Aproximadamente, a cada nivel trófico pasa…", o: ["el 50 %", "toda la energía", "el 1 %", "el 10 % de la energía"], a: 3, e: "Eficiencia ecológica." },
    { q: "La pirámide que nunca puede estar invertida es la de…", o: ["números", "biomasa", "edades", "energía"], a: 3, e: "Cada nivel tiene menos energía." },
    { q: "La energía de un ecosistema…", o: ["se recicla", "fluye y se pierde como calor", "aumenta en cada nivel", "no cambia"], a: 1, e: "Por eso necesita el Sol." },
    { q: "¿Qué proceso retira CO₂ de la atmósfera?", o: ["La respiración", "La combustión", "La fotosíntesis", "La descomposición"], a: 2, e: "Lo convierte en materia orgánica." },
    { q: "Las bacterias de las raíces de las leguminosas…", o: ["fijan el nitrógeno del aire", "producen fósforo", "hacen la fotosíntesis", "son parásitas"], a: 0, e: "Enriquecen el suelo." },
    { q: "La eutrofización se debe a un exceso de…", o: ["oxígeno", "nitratos y fosfatos", "sal", "luz"], a: 1, e: "Proliferan las algas." },
    { q: "La comunidad clímax es…", o: ["la etapa final estable de una sucesión", "la primera en colonizar", "una especie invasora", "un bioma"], a: 0, e: "En gran parte de España, el encinar." },
    { q: "Tras un incendio que conserva el suelo se produce una sucesión…", o: ["primaria", "clímax", "regresiva", "secundaria"], a: 3, e: "Más rápida que la primaria." },
    { q: "La taiga es un bioma de…", o: ["encinas", "hierba y acacias", "coníferas en zonas frías", "musgos sobre hielo"], a: 2, e: "Abetos y pinos." },
  ],
  examen: [
    { q: "¿Por qué las cadenas tróficas no suelen tener más de 4 o 5 eslabones?", o: ["Porque no hay especies", "Porque la energía se reduce mucho en cada nivel", "Porque los carnívoros no se comen entre sí", "Porque las plantas no crecen"], a: 1, e: "Regla del 10 %." },
    { q: "Los descomponedores son importantes porque…", o: ["devuelven la materia al suelo como sales minerales", "producen oxígeno", "son la base de la pirámide", "cazan herbívoros"], a: 0, e: "Cierran los ciclos." },
    { q: "La competencia entre dos especies es una relación…", o: ["+/+", "+/0", "−/−", "+/−"], a: 2, e: "Ambas salen perjudicadas." },
    { q: "Las especies pioneras de una sucesión primaria suelen ser…", o: ["árboles", "líquenes y musgos", "grandes herbívoros", "carnívoros"], a: 1, e: "Viven sobre la roca desnuda." },
    { q: "El carbono queda almacenado millones de años en…", o: ["las hojas", "las nubes", "los animales", "las calizas y los combustibles fósiles"], a: 3, e: "Reservorios a largo plazo." },
    { q: "El bosque mediterráneo se caracteriza por…", o: ["árboles que pierden la hoja", "coníferas", "lluvias todo el año", "hojas duras adaptadas a veranos secos"], a: 3, e: "Encinas y alcornoques." },
    { q: "La densidad de población es…", o: ["la natalidad", "el número de individuos por unidad de superficie", "el peso medio", "el número de especies"], a: 1, e: "Por ejemplo, individuos/ha." },
    { q: "Doñana y las Tablas de Daimiel son…", o: ["desiertos", "bosques de coníferas", "humedales", "arrecifes"], a: 2, e: "Clave para las aves migratorias." },
  ],
  feynman: ["Qué es un ecosistema y sus componentes", "La diferencia entre cadena y red trófica", "Por qué la energía fluye y la materia se recicla", "El ciclo del carbono en pocas frases", "Qué es la sucesión ecológica, con un ejemplo"],
  mapa: mapa("ECOSISTEMAS", "var(--eso)", [
    ["Componentes", "biotopo + biocenosis", "var(--ink)"],
    ["Relaciones tróficas", "productores → consumidores", "var(--leaf)"],
    ["Energía y materia", "10 % por nivel · ciclos", "var(--sun)"],
    ["Cambio", "relaciones · sucesión · clímax", "var(--red)"],
  ], 250),
  tarjetas: [
    ["¿Qué es un ecosistema?", "El conjunto del biotopo, la biocenosis y las relaciones entre ellos."],
    ["¿Qué son los productores?", "Seres autótrofos que fabrican materia orgánica con la fotosíntesis."],
    ["Regla del 10 %", "Solo alrededor del 10 % de la energía de un nivel trófico pasa al siguiente."],
    ["¿Qué es el mutualismo?", "Una relación entre dos especies en la que ambas salen beneficiadas."],
    ["¿Qué es la sucesión ecológica?", "El cambio gradual de un ecosistema hasta alcanzar una comunidad estable (clímax)."],
    ["Factor limitante", "El factor ambiental que más restringe el desarrollo de una especie."],
    ["Bioma", "Gran ecosistema terrestre definido por su clima y su vegetación."],
    ["Nicho ecológico", "Papel de una especie en el ecosistema; el hábitat es el lugar donde vive."],
    ["Capacidad de carga", "Máximo de individuos que puede mantener un medio."],
    ["Pirámide de energía", "Siempre se estrecha hacia arriba; las de números y biomasa pueden invertirse."],
    ["Fijación del nitrógeno", "Bacterias (algunas en las leguminosas) convierten el N₂ del aire en compuestos útiles."],
    ["Eutrofización", "Exceso de nutrientes que provoca proliferación de algas y falta de oxígeno."],
  ],
  glosario: [
    ["Ecosistema", "Conjunto de seres vivos, medio físico y sus relaciones."],
    ["Biotopo", "Medio físico de un ecosistema."],
    ["Biocenosis", "Conjunto de seres vivos de un ecosistema."],
    ["Hábitat", "Lugar donde vive una especie."],
    ["Nicho ecológico", "Función de una especie en el ecosistema."],
    ["Factor limitante", "Factor ambiental que más restringe la vida de una especie."],
    ["Adaptación", "Característica que permite sobrevivir y reproducirse en un medio."],
    ["Población", "Individuos de la misma especie en un lugar y momento."],
    ["Capacidad de carga", "Número máximo de individuos que mantiene un medio."],
    ["Mutualismo", "Relación en la que ganan las dos especies."],
    ["Nivel trófico", "Posición de un organismo en la cadena alimentaria."],
    ["Red trófica", "Conjunto de cadenas tróficas entrelazadas."],
    ["Eficiencia ecológica", "Porcentaje de energía que pasa al nivel siguiente (≈10 %)."],
    ["Ciclo biogeoquímico", "Recorrido de un elemento entre el medio y los seres vivos."],
    ["Eutrofización", "Exceso de nutrientes en el agua que agota el oxígeno."],
    ["Sucesión ecológica", "Sustitución progresiva de comunidades hasta el clímax."],
    ["Comunidad clímax", "Etapa final y estable de una sucesión."],
    ["Bioma", "Gran conjunto de ecosistemas con el mismo clima y vegetación."],
  ],
  situacion: {
    titulo: "Un ecosistema junto al instituto",
    reto: "El ayuntamiento quiere saber cómo está la biodiversidad de un parque, un río o un solar cercano al instituto. Vuestra clase hará un estudio ecológico real y propondrá medidas para mejorarlo.",
    pasos: [
      "Elegid la zona de estudio y medid factores abióticos: temperatura, luz, humedad, pH del suelo o del agua.",
      "Haced un inventario de seres vivos con fotos y apps de identificación (por ejemplo, para subir observaciones a plataformas de ciencia ciudadana).",
      "Estimad la densidad de una población (plantas o caracoles) con cuadrados de muestreo.",
      "Construid la red trófica del ecosistema y una pirámide aproximada.",
      "Identificad problemas (especies invasoras, basura, pisoteo) y proponed tres medidas de mejora al ayuntamiento.",
    ],
    producto: "Informe ecológico con datos, red trófica, pirámide y propuestas, presentado al ayuntamiento o a la comunidad educativa.",
    evaluacion: [
      "Rigor en la toma y el análisis de datos.",
      "Corrección de la red trófica y uso de los conceptos del tema.",
      "Viabilidad de las propuestas de mejora.",
      "Comunicación clara del informe.",
    ],
  },
  familias: ["En un parque, haced una lista de seres vivos y montad una red trófica con flechas.", "Pensad qué pasaría en un bosque si desaparecieran los hongos y las bacterias.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de «Ecología y sostenibilidad» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): componentes y dinámica de los ecosistemas, relaciones tróficas, flujo de energía, ciclos biogeoquímicos, sucesión y biomas. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Red trófica con ovillo de lana: quitar una especie y ver qué hilos se aflojan.",
      "Muestreo con cuadrados en el patio para estimar densidades.",
      "Ecosistema cerrado en un frasco con planta acuática y caracol.",
      "Situación de aprendizaje: estudio ecológico de una zona cercana al centro.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ecosistema, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ecosistema" },
    { t: "Ciclo del nitrógeno, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ciclo_del_nitr%C3%B3geno" },
  ],
  revisado: "2026-11-13",
};
