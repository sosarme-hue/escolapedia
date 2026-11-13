// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");



module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "El origen de la vida y la evolución",
  minutos: 115,
  objetivos: [
    "Explicar las principales hipótesis sobre el origen de la vida",
    "Comparar el fijismo, el lamarckismo y el darwinismo",
    "Explicar la selección natural y aplicarla a casos actuales",
    "Describir y valorar las pruebas de la evolución",
    "Explicar la teoría sintética, la especiación y otros mecanismos evolutivos",
    "Describir las etapas principales de la evolución humana y el valor de Atapuerca",
  ],
  claves: ["evolución", "selección natural", "adaptación", "variabilidad", "especie", "fósil"],
  pregunta: {
    texto: "Las bacterias que causan algunas infecciones se están volviendo resistentes a los antibióticos. ¿Es que «aprenden» a defenderse?",
    respuesta: "No aprenden: <mark>evolucionan por selección natural</mark>. Entre millones de bacterias, unas pocas ya tenían por azar una mutación que las protegía. El antibiótico mata a las demás y <b>las resistentes sobreviven y se multiplican</b>. Por eso hay que tomar los antibióticos solo cuando los receta el médico y hasta el final.",
  },
  lectura: {
    titulo: "Los pinzones que cambiaron en una sequía",
    html: `<p>En 1977, una sequía terrible golpeó Daphne Mayor, una isla diminuta de las Galápagos. Casi no llovió en todo el año, las plantas apenas dieron semillas pequeñas y blandas, y solo quedaron semillas grandes y duras, difíciles de abrir. Los biólogos Peter y Rosemary Grant, que llevaban años midiendo uno a uno los picos de los pinzones de la isla, vieron morir a más del 80 % de los pájaros.</p>
<p>Los supervivientes no eran unos cualquiera: tenían, de media, el pico un poco más grande y fuerte, capaz de partir las semillas duras. Al año siguiente, sus crías heredaron esos picos y la media de toda la población había aumentado medio milímetro. Medio milímetro puede parecer nada, pero era la primera vez que alguien medía la evolución por selección natural en directo, en pocos años y en la naturaleza.</p>
<p>Charles Darwin había pasado por esas mismas islas en 1835 y había intuido que los pinzones guardaban un secreto. En este tema descubrirás cuál era, cómo pudo empezar la vida en la Tierra y cómo, generación tras generación, ha producido la enorme diversidad de seres vivos, incluidos nosotros.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Las hipótesis sobre el origen de la vida</h3><p>Durante siglos se creyó en la <b>generación espontánea</b>: que los gusanos nacían de la carne podrida o los ratones de la ropa sucia. Francesco Redi (1668) demostró que si se tapaba la carne no aparecían larvas, y <b>Louis Pasteur</b> (1862), con sus matraces de cuello de cisne, demostró que tampoco surgen microbios en un caldo hervido protegido del polvo del aire: <mark>todo ser vivo procede de otro ser vivo</mark>. Pero entonces, ¿cómo apareció el primero?</p><p>La Tierra se formó hace unos <b>4.600 millones de años</b>, y los primeros indicios de vida tienen unos <b>3.800 millones</b>. En los años veinte, <b>Oparin y Haldane</b> propusieron la hipótesis de la <mark>evolución química</mark>: en la Tierra primitiva, con una atmósfera sin oxígeno, la energía de los rayos, los volcanes y la radiación ultravioleta hizo reaccionar gases sencillos (metano, amoniaco, hidrógeno, vapor de agua) y se formaron moléculas orgánicas que se acumularon en los mares, formando una «sopa primitiva». En 1953, <b>Miller y Urey</b> lo comprobaron en el laboratorio: con esos gases y descargas eléctricas obtuvieron aminoácidos en una semana.</p><p>Hoy se investigan otros escenarios: las <b>fuentes hidrotermales</b> del fondo marino, ricas en energía química, o la <b>panspermia</b>, según la cual algunas moléculas orgánicas, o incluso microbios, llegaron en meteoritos (se han encontrado aminoácidos en algunos).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Experimento de Miller: matraz con agua caliente, gases y descargas eléctricas que producen aminoácidos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="70" cy="120" r="30" fill="var(--water)" opacity=".5" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="180" cy="60" r="34" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M70 90 V 50 H 146 M214 60 H 236 V 150 H 100" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M172 44 L 182 58 L 174 60 L 186 78" fill="none" stroke="var(--sun)" stroke-width="3"/>
        <path d="M56 160 Q 62 150 68 160 Q 74 150 80 160" fill="var(--red)"/>
        <g ${F} font-size="11" font-weight="700"><text x="150" y="112" fill="var(--ink)">CH₄ NH₃ H₂ H₂O</text><text x="20" y="80" fill="var(--pen)">océano</text><text x="150" y="128" fill="var(--leaf)">→ aminoácidos</text></g>
      </svg>`,
    },
    {
      html: `<h3>1.2 De las moléculas a las primeras células</h3><p>Tener moléculas orgánicas no basta para tener vida. Hacen falta tres cosas: una molécula capaz de <b>copiarse</b> a sí misma, una <b>membrana</b> que la separe del exterior y un <b>metabolismo</b> que obtenga energía. Una hipótesis muy aceptada es el <mark>mundo de ARN</mark>: el ARN puede guardar información, como el ADN, y también acelerar reacciones, como las enzimas, así que pudo ser la primera molécula autorreplicante. Los lípidos forman espontáneamente en agua pequeñas burbujas, y algunas pudieron encerrar ARN: serían las <b>protocélulas</b>.</p><p>De aquellas protocélulas surgió <b>LUCA</b> (siglas en inglés de «último antepasado común universal»), una célula procariota de la que descendemos todos los seres vivos actuales. Lo sabemos porque todos compartimos el mismo código genético, el ADN, el ATP y los ribosomas.</p><p>Los fósiles más antiguos son los <b>estromatolitos</b>, rocas formadas por capas de cianobacterias, de unos 3.500 millones de años. Esas cianobacterias inventaron la <b>fotosíntesis</b> que libera oxígeno, y hace unos 2.400 millones de años el oxígeno empezó a acumularse en la atmósfera. Después llegaron las células eucariotas (hace unos 2.000 millones de años, por endosimbiosis), los seres pluricelulares y, hace unos 540 millones de años, la <b>explosión cámbrica</b>, cuando aparecieron casi todos los grupos de animales.</p>`,
      svg: L6.linea("Línea del tiempo de la vida: primeras células, oxígeno, eucariotas, explosión cámbrica y humanos", [["3.800 Ma", "primeras células"], ["2.400 Ma", "oxígeno en el aire"], ["2.000 Ma", "eucariotas"], ["540 Ma", "explosión cámbrica"], ["0,3 Ma", "Homo sapiens"]], "Ma = millones de años"),
    },
    {
      html: `<h3>2.1 Fijismo, catastrofismo y lamarckismo</h3><p>Hasta el siglo XVIII predominaba el <mark>fijismo</mark>: las especies habían sido creadas tal como son y no cambiaban. Lo defendía, por ejemplo, Linneo, el naturalista que creó el sistema de clasificación de los seres vivos. Pero los fósiles mostraban animales que ya no existían. Para explicarlo, <b>Georges Cuvier</b>, padre de la paleontología, propuso el <b>catastrofismo</b>: grandes catástrofes, como diluvios, habrían eliminado especies que luego serían sustituidas por otras.</p><p>En 1809, <b>Jean-Baptiste Lamarck</b> propuso la primera teoría completa de la evolución, el <mark>lamarckismo</mark>. Se basaba en dos ideas: 1) <b>el uso y desuso</b>: los órganos que más se usan se desarrollan y los que no se usan se atrofian; y 2) <b>la herencia de los caracteres adquiridos</b>: lo que un individuo consigue en su vida pasa a sus hijos. Según Lamarck, las jirafas antiguas estiraban el cuello para comer las hojas altas, lo alargaban un poco y sus crías nacían con el cuello algo más largo.</p><p>Lamarck acertó en lo esencial: <b>las especies cambian a lo largo del tiempo</b>. Pero su mecanismo era erróneo: los cambios que logramos durante la vida, como los músculos de un deportista o un tatuaje, no modifican el ADN de los gametos y no se heredan. August Weismann lo comprobó cortando la cola a ratones durante 20 generaciones: sus crías siempre nacían con cola.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Según Lamarck, una jirafa estira el cuello y su cría nace con el cuello más largo">
        <defs>${flecha("ev1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[60, 50], [190, 80]].map(([x, h]) => `<ellipse cx="${x}" cy="130" rx="28" ry="14" fill="var(--sun)"/><path d="M${x + 18} 124 L ${x + 30} ${120 - h}" stroke="var(--sun)" stroke-width="10" stroke-linecap="round"/><circle cx="${x + 34}" cy="${116 - h}" r="8" fill="var(--sun)"/><path d="M${x - 16} 140 V 164 M${x + 16} 140 V 164" stroke="var(--sun)" stroke-width="5"/>`).join("")}
        <path d="M110 120 H 150" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#ev1)"/>
        <text x="130" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>«lo adquirido se hereda» ✗</text>
      </svg>`,
    },
    {
      html: `<h3>2.2 El viaje del Beagle</h3><p><b>Charles Darwin</b> (1809-1882) estudió medicina y teología, pero lo que le apasionaba era la naturaleza. Con 22 años se embarcó como naturalista en el <b>HMS Beagle</b>, que durante cinco años (1831-1836) cartografió las costas de Sudamérica y dio la vuelta al mundo. Recogió miles de fósiles, plantas y animales y tomó notas minuciosas.</p><p>Varias observaciones le hicieron pensar. En Argentina encontró fósiles de <b>armadillos gigantes</b> (gliptodontes) muy parecidos a los armadillos vivos de la misma zona: ¿por qué iban a parecerse si no estaban emparentados? En las <b>islas Galápagos</b>, a unos 1.000 km de Ecuador, vio que cada isla tenía sus propias tortugas gigantes y sus propios pinzones, con <mark>picos de formas distintas según el alimento</mark> de cada isla: gruesos para romper semillas, finos para atrapar insectos, alargados para las flores de los cactus. Se parecían a los del continente, pero eran especies distintas.</p><p>De vuelta a Inglaterra, Darwin concluyó que todos esos pinzones descendían de unos pocos antepasados llegados del continente, que se habían ido diversificando en cada isla. Pasó más de 20 años reuniendo pruebas, criando palomas y estudiando la selección que hacen los ganaderos, antes de publicar su teoría. La lectura del economista <b>Malthus</b>, que explicaba que la población crece más deprisa que los alimentos, le dio la pieza que le faltaba.</p>`,
      svg: L6.radial("Observaciones de Darwin en el viaje del Beagle", "Beagle 1831-1836", ["Armadillos fósiles gigantes", "Tortugas distintas en cada isla", "Picos de pinzones según alimento", "Malthus: más hijos que alimento"], "var(--water)"),
    },
    {
      html: `<h3>2.3 Darwin, Wallace y la selección natural</h3><p>En 1858, Darwin recibió una carta del naturalista <b>Alfred Russel Wallace</b>, que trabajaba en Indonesia y había llegado por su cuenta a la misma idea. Ambos presentaron juntos sus trabajos, y en 1859 Darwin publicó <i>El origen de las especies</i>. Su teoría, la <mark>selección natural</mark>, se resume en cinco pasos:</p><p>1) <b>Variabilidad</b>: los individuos de una población son distintos entre sí, y muchas de esas diferencias se heredan.<br>2) <b>Superproducción</b>: nacen más individuos de los que el ambiente puede mantener.<br>3) <b>Lucha por la existencia</b>: compiten por el alimento, el espacio o la pareja, y se enfrentan a depredadores y enfermedades; muchos mueren sin reproducirse.<br>4) <b>Supervivencia diferencial</b>: los que tienen variaciones más ventajosas en ese ambiente, los <mark>mejor adaptados</mark>, sobreviven y se reproducen más.<br>5) <b>Herencia y acumulación</b>: transmiten esas variaciones a sus hijos y, a lo largo de muchas generaciones, la población cambia.</p><p>Con la jirafa: entre las jirafas antiguas había algunas con el cuello algo más largo por nacimiento; en épocas de escasez alcanzaban más hojas, sobrevivían más y tenían más crías, que heredaban el cuello largo. Ojo: la selección natural no tiene un objetivo ni busca «mejorar»; solo favorece lo que funciona en un ambiente concreto. Si el ambiente cambia, lo ventajoso también cambia. Por eso «el más apto» no es el más fuerte, sino el que deja más descendientes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Polillas claras y oscuras sobre troncos oscuros: los pájaros cazan las claras y aumentan las oscuras">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[60, [1, 0, 1, 0, 1, 0]], [190, [0, 0, 1, 0, 0, 0]]].map(([x, ps]) => `<rect x="${x - 30}" y="20" width="60" height="130" rx="6" fill="var(--ink)" opacity=".75"/>${ps.map((c, i) => `<ellipse cx="${x - 12 + (i % 2) * 24}" cy="${40 + Math.floor(i / 2) * 40}" rx="9" ry="6" fill="${c ? "var(--card)" : "#333"}" stroke="${c ? "var(--muted)" : "#555"}"/>`).join("")}`).join("")}
        <text x="125" y="90" text-anchor="middle" font-size="22" fill="var(--muted)" ${F}>→</text>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="60" y="168" fill="var(--ink)">generación 1</text><text x="190" y="168" fill="var(--ink)">generación 20</text></g>
      </svg>`,
    },
    {
      html: `<h3>2.4 La selección natural hoy</h3><p>La selección natural no es cosa del pasado: ocurre ahora mismo, a veces muy deprisa.</p><p>• <b>Resistencia a los antibióticos</b>. En una población de millones de bacterias, por azar, alguna tiene una mutación que la hace resistente. Al usar un antibiótico, mueren las sensibles y sobreviven las resistentes, que se multiplican sin competencia. Si el tratamiento se deja a medias o se usa sin necesidad, se favorece este proceso. La OMS considera la <mark>resistencia antimicrobiana</mark> una de las grandes amenazas para la salud mundial.<br>• <b>Insectos y plaguicidas</b>: los mosquitos o las plagas agrícolas se hacen resistentes a los insecticidas del mismo modo.<br>• <b>La polilla del abedul</b> (<i>Biston betularia</i>): en la Inglaterra industrial del siglo XIX, el hollín ennegreció los troncos; las polillas claras se veían más y las comían los pájaros, y las oscuras pasaron de ser raras a ser mayoría. Cuando se redujo la contaminación, volvieron a predominar las claras.<br>• <b>Los pinzones de Darwin</b>, como se midió tras la sequía de 1977.<br>• <b>Los elefantes sin colmillos</b>: en zonas con mucha caza furtiva ha aumentado la proporción de hembras que nacen sin colmillos.</p><p>En todos los casos, el ambiente <b>no crea</b> la variación: la <mark>selecciona</mark> entre la que ya existía.</p>`,
      svg: L6.flujo("Selección de bacterias resistentes a un antibiótico", ["Población de bacterias: unas pocas resistentes por azar", "El antibiótico mata a las sensibles", "Las resistentes sobreviven y se multiplican", "Nueva población casi toda resistente"], "Resistencia a antibióticos"),
      video: { id: "6oG92Fl4AhI", titulo: "¡Súper bacterias! ¿Cómo evolucionaron?", canal: "CuriosaMente", vistas: 484611, megusta: 0 },
    },
    {
      html: `<h3>3.1 Las pruebas de la evolución: fósiles y anatomía</h3><p>La evolución es uno de los hechos mejor demostrados de la ciencia, apoyado por pruebas de campos muy distintos que encajan entre sí.</p><p><b>Pruebas paleontológicas</b>. Los <mark>fósiles</mark> muestran que en el pasado vivieron seres distintos de los actuales y que, en general, cuanto más antiguos son los estratos, más se diferencian sus fósiles de las especies de hoy. Hay <b>formas de transición</b> que combinan rasgos de dos grupos: <i>Archaeopteryx</i>, con plumas y alas de ave pero dientes, garras y cola larga de reptil; <i>Tiktaalik</i>, un pez con aletas casi como patas; o las ballenas primitivas con patas traseras. La serie fósil del caballo muestra cómo pasó de tener cuatro dedos y el tamaño de un perro a tener un solo dedo (el casco).</p><p><b>Pruebas anatómicas</b>. Los <mark>órganos homólogos</mark> tienen el mismo origen y la misma estructura interna, aunque hoy sirvan para cosas distintas: el brazo humano, el ala del murciélago, la aleta de la ballena y la pata del caballo tienen los mismos huesos, porque los heredaron de un antepasado común. Los <b>órganos análogos</b> hacen la misma función pero tienen origen distinto, como el ala de un insecto y la de un ave: indican adaptación a un mismo ambiente, no parentesco. Los <b>órganos vestigiales</b>, como el coxis humano o los huesos de pelvis de las ballenas, son restos sin función de órganos útiles en los antepasados.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Órganos homólogos: brazo humano, ala de murciélago y aleta de ballena con los mismos huesos coloreados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[44, "humano", 0], [130, "murciélago", 1], [216, "ballena", 2]].map(([x, t, k]) => `<rect x="${x - 5}" y="24" width="10" height="${k === 2 ? 26 : 44}" rx="5" fill="var(--red)"/><rect x="${x - 8}" y="${k === 2 ? 52 : 70}" width="6" height="${k === 2 ? 20 : 34}" rx="3" fill="var(--pen)"/><rect x="${x + 2}" y="${k === 2 ? 52 : 70}" width="6" height="${k === 2 ? 20 : 34}" rx="3" fill="var(--pen)"/>
          ${[-12, -6, 0, 6, 12].map((d) => `<path d="M${x + d * 0.5} ${k === 2 ? 74 : 106} L ${x + d * (k === 1 ? 3.4 : k === 2 ? 1.3 : 0.9)} ${k === 1 ? 150 : k === 2 ? 122 : 132}" stroke="var(--leaf)" stroke-width="3.5" stroke-linecap="round"/>`).join("")}
          <text x="${x}" y="168" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>3.2 Más pruebas: embriones, moléculas y geografía</h3><p><b>Pruebas embriológicas</b>. Los embriones de los vertebrados (pez, ave, ratón, ser humano) se parecen mucho en sus primeras etapas: todos tienen una cola y unas hendiduras en el cuello parecidas a las de las branquias de los peces. Estas semejanzas indican un antepasado común.</p><p><b>Pruebas bioquímicas y moleculares</b>. Todos los seres vivos usan el ADN, el mismo código genético y los mismos 20 aminoácidos, lo que apunta a un origen común. Además, comparando secuencias de ADN o de proteínas se mide el parentesco: <mark>cuanto más parecidas son las secuencias, más cercano es el antepasado común</mark>. Compartimos alrededor del 98-99 % de nuestro ADN con el chimpancé, menos con el ratón y menos aún con la levadura. Estos datos moleculares, obtenidos de forma independiente, confirman los árboles de parentesco que se habían deducido con fósiles y anatomía.</p><p><b>Pruebas biogeográficas</b>. La distribución de los seres vivos se explica por su historia. Las islas alejadas, como las Galápagos o las Canarias, tienen especies <b>endémicas</b> que se parecen a las del continente más cercano. Australia, aislada durante millones de años, tiene marsupiales (canguros, koalas) que han ocupado los papeles que en otros continentes tienen los mamíferos placentarios.</p><p>Las cuatro líneas de pruebas, independientes entre sí, cuentan la misma historia.</p>`,
      svg: L6.barras("ADN compartido con los seres humanos: chimpancé, ratón, pollo y plátano (aproximado)", [["chimpancé", 98.8, "≈ 99 %"], ["ratón", 85, "≈ 85 %"], ["pollo", 65, "≈ 65 %"], ["mosca", 60, "≈ 60 %"]], "Parecido genético con humanos (aprox.)", 100),
    },
    {
      html: `<h3>4.1 La teoría sintética de la evolución</h3><p>Darwin tenía un problema: no sabía <b>de dónde salía la variabilidad</b> ni cómo se heredaba. En su época se creía en la herencia por mezcla, y Darwin nunca conoció el trabajo de Mendel. Entre 1930 y 1950, genetistas, paleontólogos y naturalistas como Dobzhansky, Mayr, Fisher y Simpson unieron las ideas de Darwin con la genética. Así nació la <mark>teoría sintética</mark> de la evolución o <b>neodarwinismo</b>, la base de la biología actual. Sus ideas principales son:</p><p>1) La variabilidad se origina por <b>mutaciones</b>, que aparecen al azar, y se multiplica por la <b>recombinación genética</b> en la reproducción sexual (sobrecruzamiento, reparto de cromosomas y fecundación).<br>2) La <b>selección natural</b> actúa sobre esa variabilidad: favorece los alelos que dan ventaja en un ambiente.<br>3) <mark>La unidad que evoluciona es la población</mark>, no el individuo: lo que cambia a lo largo de las generaciones es la frecuencia de los alelos en el conjunto de la población.<br>4) La acumulación de pequeños cambios lleva a la formación de nuevas especies, de forma gradual.</p><p>Fíjate en que un individuo no evoluciona durante su vida: nace con sus genes y muere con ellos. Lo que evoluciona es la población, generación tras generación. Por eso la definición moderna de evolución es: <b>el cambio en las frecuencias de los alelos de una población a lo largo del tiempo</b>.</p>`,
      svg: L6.flujo("Teoría sintética: mutación y recombinación crean variabilidad, la selección la filtra y cambia la población", ["Mutaciones al azar (nuevos alelos)", "Recombinación en la reproducción sexual", "Selección natural en un ambiente", "Cambian las frecuencias de alelos de la población"], "Teoría sintética (neodarwinismo)"),
    },
    {
      html: `<h3>4.2 Especie y especiación</h3><p>Una <mark>especie</mark> es un grupo de individuos que pueden reproducirse entre sí y tener <b>descendencia fértil</b>, y que están aislados reproductivamente de otros grupos. El caballo y el burro pueden cruzarse y tener mulas, pero las mulas son estériles: son especies distintas. El perro y el lobo, en cambio, tienen crías fértiles: el perro se considera una subespecie del lobo.</p><p>La <mark>especiación</mark> es la formación de especies nuevas. El caso más común es la <b>especiación alopátrica</b> («en otra patria»):</p><p>1) Una <b>barrera geográfica</b> divide una población: un río que cambia de curso, una cordillera, un brazo de mar, o unos pocos individuos que llegan a una isla.<br>2) Los dos grupos quedan <b>aislados</b> y dejan de intercambiar genes.<br>3) Cada grupo acumula <b>mutaciones distintas</b> y la selección natural los adapta a su ambiente.<br>4) Tras muchas generaciones son tan diferentes que, aunque se junten, ya no pueden tener descendencia fértil: son <b>dos especies</b>.</p><p>Así se explica la variedad de pinzones de las Galápagos o los lagartos gigantes de cada isla canaria. Las barreras que impiden la reproducción pueden ser de muchos tipos: épocas de celo distintas, cantos o cortejos que la otra población no reconoce, órganos reproductores incompatibles o híbridos estériles. Las plantas pueden formar especies nuevas de golpe, en una generación, por <b>poliploidía</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una población separada por una barrera forma dos especies distintas con el tiempo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${Array.from({ length: 8 }, (_, i) => `<circle cx="${40 + (i % 4) * 26}" cy="${40 + Math.floor(i / 4) * 24}" r="7" fill="var(--pen)"/><circle cx="${150 + (i % 4) * 26}" cy="${40 + Math.floor(i / 4) * 24}" r="7" fill="var(--pen)"/>`).join("")}
        <path d="M130 20 L 120 100 L 140 100 Z" fill="var(--muted)"/>
        ${Array.from({ length: 6 }, (_, i) => `<rect x="${34 + (i % 3) * 30}" y="${116 + Math.floor(i / 3) * 24}" width="14" height="14" fill="var(--leaf)"/><path d="M${170 + (i % 3) * 30} ${116 + Math.floor(i / 3) * 24} l 8 14 h -16 z" fill="var(--red)"/>`).join("")}
        <path d="M130 108 V 170" stroke="var(--muted)" stroke-width="5"/>
        <g ${F} font-size="11" font-weight="700"><text x="146" y="104" fill="var(--muted)">barrera</text></g>
      </svg>`,
    },
    {
      html: `<h3>4.3 Otros mecanismos de la evolución</h3><p>La selección natural es el motor principal, pero no el único.</p><p>• <b>Deriva genética</b>. En las poblaciones pequeñas, el <mark>azar</mark> puede cambiar mucho las frecuencias de los alelos, sin relación con la ventaja que den. Si un pequeño grupo funda una población nueva (<b>efecto fundador</b>), sus alelos, frecuentes o raros por casualidad, pasan a toda la población; por eso algunas comunidades aisladas tienen enfermedades hereditarias poco comunes. Si una catástrofe deja pocos supervivientes (<b>efecto cuello de botella</b>), se pierde gran parte de la variabilidad, como les ocurrió a los guepardos.<br>• <b>Selección sexual</b>. Algunos rasgos no ayudan a sobrevivir, pero sí a conseguir pareja: la cola del pavo real, la cornamenta de los ciervos o los cantos de las aves. Darwin la describió en 1871.<br>• <b>Coevolución</b>. Dos especies que se relacionan estrechamente evolucionan juntas: las flores y sus polinizadores, o los depredadores y sus presas, en una especie de «carrera armamentística».<br>• <b>Ritmo de la evolución</b>. Darwin pensaba que era siempre lento y gradual (<b>gradualismo</b>). Gould y Eldredge propusieron en 1972 el <b>equilibrio puntuado</b>: largos periodos de estabilidad interrumpidos por cambios rápidos. Hoy se acepta que ambos ritmos se dan.</p><p>Las grandes <b>extinciones masivas</b>, como la de los dinosaurios hace 66 millones de años, también han cambiado el rumbo de la evolución.</p>`,
      svg: L6.radial("Otros mecanismos de evolución: deriva genética, selección sexual, coevolución y extinciones", "Evolución", ["Deriva genética (azar)", "Selección sexual", "Coevolución", "Extinciones masivas"], "var(--leaf)"),
    },
    {
      html: `<h3>4.4 La evolución humana</h3><p>Los seres humanos somos <b>primates</b>, y nuestros parientes vivos más cercanos son los chimpancés y los bonobos. <mark>No descendemos del chimpancé</mark>: compartimos con él un <b>antepasado común</b> que vivió en África hace unos 6-7 millones de años. Desde entonces, la rama de los <b>homininos</b> fue adquiriendo rasgos clave.</p><p>• El <b>bipedismo</b>, caminar sobre dos patas, fue lo primero. Los <b>australopitecos</b> (4-2 millones de años), como la famosa <b>Lucy</b>, ya caminaban erguidos, aunque su cerebro era como el de un chimpancé.<br>• <i>Homo habilis</i> (unos 2,4 millones de años) fabricó las primeras herramientas de piedra.<br>• <i>Homo erectus</i> (hace unos 1,9 millones de años) dominó el fuego y fue el primero en salir de África y extenderse por Asia.<br>• En Europa vivieron <i>Homo antecessor</i> y, después, los <b>neandertales</b>, que enterraban a sus muertos, hacían adornos y se adaptaron al frío de las glaciaciones.<br>• <i>Homo sapiens</i> surgió en <mark>África hace unos 300.000 años</mark> y desde allí se extendió por todo el planeta.</p><p>Durante la evolución humana el cerebro aumentó de tamaño (de unos 400 a unos 1.350 cm³), se acortaron la cara y los dientes y se desarrollaron el lenguaje, la cultura y la tecnología. Los análisis de ADN han revelado que los europeos y asiáticos actuales tenemos alrededor de un 2 % de ADN neandertal: nuestras especies llegaron a tener hijos juntos.</p>`,
      svg: L6.linea("Evolución humana: australopitecos, Homo habilis, Homo erectus, neandertales y Homo sapiens", [["4 Ma", "australopitecos (Lucy)"], ["2,4 Ma", "H. habilis"], ["1,9 Ma", "H. erectus"], ["0,4 Ma", "Neandertales"], ["0,3 Ma", "H. sapiens"]], "El linaje humano"),
      video: { id: "Ot4ihHDvLCc", titulo: "La evolución del ser humano en 15 minutos", canal: "Qué pasaría si", vistas: 3081550 },
    },
    {
      html: `<h3>4.5 Atapuerca: una ventana a nuestro pasado</h3><p>La <mark>sierra de Atapuerca</mark>, cerca de Burgos, es uno de los yacimientos más importantes del mundo para estudiar la evolución humana. Fue declarada Patrimonio de la Humanidad en 1999, y sus investigadores, Juan Luis Arsuaga, José María Bermúdez de Castro y Eudald Carbonell, recibieron el Premio Príncipe de Asturias en 1997. Las excavaciones se hacen cada verano en distintas cuevas y simas formadas en la roca caliza.</p><p>• En la <b>Sima del Elefante</b> se halló en 2007 una mandíbula de hace unos 1,2 millones de años, el fósil humano más antiguo de Europa occidental; en 2025 se presentó parte de una cara de antigüedad parecida o algo mayor.<br>• En la <b>Gran Dolina</b> aparecieron restos de hace unos 850.000 años de una especie nueva, <i>Homo antecessor</i>, con marcas de corte que indican canibalismo.<br>• En la <b>Sima de los Huesos</b>, un pozo de 13 metros, se han recuperado más de 7.000 fósiles de al menos 28 individuos de hace unos 430.000 años, antepasados de los neandertales. Junto a ellos apareció un hacha de cuarcita de color rojizo, «Excalibur», que algunos interpretan como una ofrenda funeraria.</p><p>Atapuerca demuestra que la Península Ibérica estuvo poblada por humanos muy antiguos y permite estudiar su anatomía, su dieta, sus enfermedades y su comportamiento. Su museo, en Burgos, es el Museo de la Evolución Humana.</p>`,
      svg: L6.tabla("Yacimientos de Atapuerca y sus hallazgos principales", ["Yacimiento", "Edad", "Hallazgo"], [["Sima del Elefante", "1,2 Ma", "mandíbula"], ["Gran Dolina", "0,85 Ma", "H. antecessor"], ["Sima de los Huesos", "0,43 Ma", "28 individuos"]]),
    },
  ],
  figura: {
    titulo: "Tres ideas sobre las especies",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Fijismo, lamarckismo y darwinismo: idea principal y explicación del cuello de la jirafa">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Fijismo", "las especies no cambian", "la jirafa siempre", "tuvo el cuello largo", "var(--muted)"], ["Lamarck", "uso y desuso · se hereda", "lo adquirido: estiró el cuello", "y se lo pasó a sus crías", "var(--sun)"], ["Darwin", "variabilidad + selección", "las de cuello más largo", "comían más y tuvieron más crías", "var(--leaf)"]]
        .map(([n, a, b, c1, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="60" text-anchor="middle" font-size="24" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="100" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="150" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="168" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${c1}</text>`).join("")}
    </svg>`,
  },
  video: { id: "3gT1qH9b1cg", titulo: "Teoría de la evolución: 5 preguntas frecuentes", canal: "CuriosaMente", vistas: 1894481, megusta: 0, busqueda: "teoría de la evolución Darwin" },
  ejemplos: [
    { enunciado: "Explica la evolución del cuello de la jirafa según Lamarck y según Darwin.", pasos: ["Lamarck: las jirafas estiraban el cuello para llegar a las hojas altas; el cuello se alargaba por el uso y ese cambio se heredaba.", "Darwin: en la población había jirafas con cuellos de distintas longitudes por variación natural.", "Las de cuello más largo comían mejor, sobrevivían más y tenían más crías, que heredaban el cuello largo.", "Generación tras generación, el cuello largo se hizo más frecuente."], resultado: "Lamarck: herencia de caracteres adquiridos (incorrecta). Darwin: variación + selección natural (aceptada)." },
    { enunciado: "Antes de la Revolución Industrial, casi todas las polillas del abedul de Inglaterra eran claras. Con el hollín de las fábricas, se volvieron mayoritarias las oscuras. Explícalo.", pasos: ["Había polillas claras y oscuras por variación genética.", "Sobre los troncos ennegrecidos por el hollín, las claras se veían más y los pájaros se las comían.", "Las oscuras sobrevivían y se reproducían más.", "Al limpiarse el aire, volvieron a predominar las claras."], resultado: "Es un ejemplo de selección natural: el ambiente favorece a los individuos mejor camuflados." },
    { enunciado: "El ala de un murciélago, la aleta de un delfín y tu brazo tienen los mismos huesos, aunque sirven para cosas distintas. ¿Qué indica?", pasos: ["Son órganos homólogos: misma estructura interna y distinta función.", "La explicación más sencilla es que proceden de un antepasado común.", "Cada linaje modificó la extremidad para su forma de vida."], resultado: "Es una prueba anatómica de la evolución: mamíferos con un antepasado común." },
    { enunciado: "En un estudio, de 1.000 bacterias, 2 son resistentes a un antibiótico. Tras el tratamiento sobreviven solo esas 2, que se dividen cada hora. ¿Cuántas habrá a las 10 horas y qué proporción será resistente?", pasos: ["Las 998 sensibles mueren con el antibiótico.", "Las 2 resistentes se duplican cada hora: 2 · 2¹⁰ = 2.048.", "Todas descienden de bacterias resistentes.", "La población ha pasado de un 0,2 % a un 100 % de resistentes."], resultado: "Unas 2.048 bacterias, el 100 % resistentes: la selección ha cambiado la población en horas." },
    { enunciado: "La proteína citocromo c de un ser humano difiere en 0 aminoácidos de la del chimpancé, en 12 de la del caballo y en 44 de la de una levadura. ¿Qué conclusión sacas?", pasos: ["Cuantas menos diferencias, más parecidas son las secuencias.", "El chimpancé es idéntico: antepasado común muy reciente.", "El caballo, mamífero, tiene pocas diferencias: antepasado común relativamente reciente.", "La levadura, un hongo, tiene muchas: antepasado común muy antiguo."], resultado: "El parentesco con los humanos es: chimpancé > caballo > levadura, como predice la evolución." },
    { enunciado: "Unos pocos lagartos llegan a una isla sin depredadores y con muchas semillas duras. Predice qué ocurrirá en miles de generaciones, según la teoría sintética.", pasos: ["La población inicial es pequeña: por efecto fundador tendrá solo parte de la variabilidad original.", "Aparecen mutaciones; las que dan cabezas y mandíbulas más fuertes ayudan a comer semillas.", "La selección natural aumenta esos alelos; sin depredadores, pueden crecer más.", "Aislados del continente, acumulan diferencias hasta formar una especie nueva."], resultado: "Es probable que surja una especie endémica, más grande y con mandíbulas más fuertes, como los lagartos gigantes de Canarias." },
  ],
  errores: [
    "Decir que «el hombre viene del mono»: humanos y chimpancés tienen un antepasado común.",
    "Pensar que los individuos evolucionan durante su vida: evolucionan las poblaciones a lo largo de generaciones.",
    "Creer que los organismos cambian «porque lo necesitan»: las variaciones aparecen al azar y la selección las filtra.",
    "Pensar que el antibiótico crea las bacterias resistentes: solo selecciona las que ya lo eran.",
    "Confundir órganos homólogos (mismo origen) con análogos (misma función, distinto origen).",
    "Pensar que la evolución busca un objetivo o va hacia la perfección: la selección natural solo favorece lo que funciona en un ambiente concreto.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Resume la hipótesis de Oparin sobre el origen de la vida.", sol: "En la Tierra primitiva, sin oxígeno, la energía de rayos y radiación hizo que gases simples formaran moléculas orgánicas, que se acumularon en los océanos (la «sopa primitiva») y se fueron organizando hasta formar las primeras células." } },
    { nivel: "básico", ...{ q: "¿Qué demostró el experimento de Miller y Urey?", sol: "Que a partir de gases como metano, amoniaco, hidrógeno y agua, con descargas eléctricas, se forman aminoácidos, moléculas de los seres vivos." } },
    { nivel: "básico", ...{ q: "Explica las diferencias entre fijismo y evolucionismo.", sol: "El fijismo dice que las especies no cambian desde su creación. El evolucionismo dice que cambian con el tiempo y que unas proceden de otras." } },
    { nivel: "básico", ...{ q: "Enumera los pasos de la selección natural.", sol: "Hay variación entre los individuos; nacen más de los que pueden sobrevivir; los mejor adaptados sobreviven y se reproducen más; transmiten sus caracteres, que se van haciendo más frecuentes." } },
    { nivel: "básico", ...{ q: "Indica cuatro tipos de pruebas de la evolución.", sol: "Fósiles (paleontológicas), anatómicas (órganos homólogos y vestigiales), embriológicas (embriones parecidos) y moleculares (semejanza del ADN)." } },
    { nivel: "básico", ...{ q: "Ordena: Homo erectus, australopitecos, Homo sapiens, Homo habilis.", sol: "Australopitecos, Homo habilis, Homo erectus y Homo sapiens." } },
    { nivel: "básico", q: "¿Qué demostró Pasteur con sus matraces de cuello de cisne?", sol: "Que en un caldo hervido protegido del polvo del aire no aparecen microbios: la vida no surge por generación espontánea, todo ser vivo procede de otro." },
    { nivel: "básico", q: "¿Qué observó Darwin en los pinzones de las Galápagos?", sol: "Que cada isla tenía especies de pinzones distintas, con picos de formas diferentes adaptados al alimento disponible, pero parecidas a las del continente." },
    { nivel: "básico", q: "Define órgano homólogo, análogo y vestigial con un ejemplo de cada uno.", sol: "Homólogo: mismo origen y estructura, distinta función (brazo humano y ala de murciélago). Análogo: misma función, distinto origen (ala de insecto y de ave). Vestigial: resto sin función (coxis humano)." },
    { nivel: "básico", q: "¿Qué son los estromatolitos y por qué son importantes?", sol: "Rocas formadas por capas de cianobacterias; son los fósiles más antiguos (unos 3.500 millones de años) y muestran que ya había fotosíntesis." },
    { nivel: "básico", q: "¿Dónde y cuándo surgió Homo sapiens?", sol: "En África, hace unos 300.000 años." },
    { nivel: "básico", q: "Define especie.", sol: "Grupo de individuos que pueden reproducirse entre sí y tener descendencia fértil, y que están aislados reproductivamente de otros grupos." },
    { nivel: "medio", ...{ q: "¿Qué aportó la teoría sintética a las ideas de Darwin?", sol: "Explicó el origen de la variación (mutaciones y recombinación en la reproducción sexual) y cómo se heredan los caracteres (genética de Mendel)." } },
    { nivel: "medio", ...{ q: "¿Por qué no hay que tomar antibióticos para un resfriado?", sol: "Porque los resfriados los causan virus y los antibióticos no les afectan; además, su mal uso selecciona bacterias resistentes." } },
    { nivel: "medio", ...{ q: "Una población de ratones queda dividida por un río durante miles de años. ¿Qué puede ocurrir?", sol: "Cada grupo acumula mutaciones distintas y se adapta a su orilla; con el tiempo pueden dejar de poder reproducirse entre sí y formar dos especies (especiación por aislamiento geográfico)." } },
    { nivel: "medio", ...{ q: "¿Por qué son importantes los yacimientos de Atapuerca?", sol: "Porque contienen fósiles humanos muy antiguos (de hasta casi un millón de años), entre los más antiguos de Europa, y han permitido describir especies como Homo antecessor." } },
    { nivel: "medio", q: "Explica con la teoría de Lamarck y con la de Darwin por qué los topos tienen los ojos muy pequeños.", sol: "Lamarck: los topos, al vivir bajo tierra, no usaban los ojos, que se atrofiaron, y heredaron ese cambio. Darwin: entre los topos había variación en el tamaño de los ojos; bajo tierra, unos ojos grandes no daban ventaja y eran vulnerables a infecciones y heridas, así que los individuos con ojos pequeños sobrevivían y se reproducían igual o mejor, y ese rasgo se fue extendiendo." },
    { nivel: "medio", q: "¿Por qué el experimento de Weismann con la cola de los ratones contradice el lamarckismo?", sol: "Porque cortó la cola a los ratones durante muchas generaciones y las crías siempre nacían con cola: los caracteres adquiridos en vida no se heredan." },
    { nivel: "medio", q: "¿Qué es LUCA y qué pruebas indican que existió?", sol: "El último antepasado común universal, una célula procariota de la que descienden todos los seres vivos. Lo indican el código genético universal y que todos usamos ADN, ATP, ribosomas y los mismos aminoácidos." },
    { nivel: "medio", q: "Explica el caso de la polilla del abedul y por qué es un ejemplo de selección natural.", sol: "Con el hollín, los troncos se oscurecieron; las polillas claras eran más visibles y los pájaros las comían más, mientras que las oscuras sobrevivían y se reproducían. La frecuencia de la forma oscura aumentó. El ambiente no creó las oscuras: ya existían y fueron seleccionadas." },
    { nivel: "medio", q: "¿Por qué Australia tiene tantos marsupiales?", sol: "Porque se separó de los demás continentes hace millones de años; los marsupiales que vivían allí evolucionaron aislados, sin competir con mamíferos placentarios, y se diversificaron ocupando muchos modos de vida." },
    { nivel: "medio", q: "¿Qué rasgos adquirió primero el linaje humano: el cerebro grande o el bipedismo? ¿Qué fósil lo demuestra?", sol: "El bipedismo. Los australopitecos, como Lucy, caminaban erguidos pero tenían un cerebro pequeño, parecido al de un chimpancé." },
    { nivel: "avanzado", q: "Explica la diferencia entre deriva genética y selección natural con un ejemplo de cada una.", sol: "La selección natural cambia las frecuencias de los alelos según la ventaja que dan (resistencia a antibióticos). La deriva las cambia por azar, sobre todo en poblaciones pequeñas, sin relación con la ventaja (una enfermedad rara frecuente en una comunidad aislada por efecto fundador)." },
    { nivel: "avanzado", q: "Diseña una simulación de selección natural en clase con papeles de colores y explica qué resultados esperas.", sol: "Repartir sobre una tela estampada «presas» de papel de varios colores; los alumnos-depredadores recogen durante 15 segundos; los supervivientes se «reproducen» (se duplica cada color superviviente) y se repite varias generaciones. Se espera que aumenten los colores que se camuflan con la tela." },
    { nivel: "avanzado", q: "¿Por qué decimos que la unidad de evolución es la población y no el individuo?", sol: "Porque un individuo no cambia sus genes durante su vida. Lo que cambia, generación tras generación, es la proporción de los distintos alelos en el conjunto de la población, por selección, deriva y mutación." },
    { nivel: "avanzado", q: "El caballo y el burro tienen 64 y 62 cromosomas. La mula tiene 63. Explica por qué es estéril.", sol: "Recibe 32 cromosomas del caballo y 31 del burro, que no forman parejas homólogas completas. En la meiosis no pueden emparejarse y separarse bien, así que no forma gametos viables. Por eso caballo y burro son especies distintas." },
    { nivel: "avanzado", q: "Argumenta por qué la frase «el hombre desciende del mono» es incorrecta y escribe una versión correcta.", sol: "Ninguna especie actual es antepasada de otra actual: humanos y chimpancés son ramas hermanas que evolucionaron a la vez. Versión correcta: «Los humanos y los chimpancés compartimos un antepasado común que vivió en África hace unos 6-7 millones de años»." },
    { nivel: "avanzado", q: "Explica, con la teoría sintética, por qué no se debe abandonar un tratamiento antibiótico cuando uno empieza a encontrarse mejor.", sol: "Al principio mueren las bacterias más sensibles; las que quedan son las más resistentes de la población. Si se abandona el tratamiento, esas sobreviven, se multiplican y transmiten su resistencia, y la infección vuelve más difícil de tratar." },
    { nivel: "avanzado", q: "Las especies de pinzones de las Galápagos tienen picos distintos. Explica, paso a paso, cómo pudieron originarse a partir de una especie del continente.", sol: "Unos pocos pinzones llegaron del continente a una isla (efecto fundador). Se dispersaron a otras islas con alimentos distintos; en cada una, la selección natural favoreció los picos adecuados (gruesos para semillas, finos para insectos). Aislados por el mar, cada grupo acumuló mutaciones y diferencias hasta no poder reproducirse con los demás: especiación alopátrica repetida (radiación adaptativa)." },
    { nivel: "avanzado", q: "Explica qué es el equilibrio puntuado y en qué se diferencia del gradualismo de Darwin.", sol: "El gradualismo propone cambios lentos y continuos. El equilibrio puntuado (Gould y Eldredge) propone largos periodos sin apenas cambios interrumpidos por episodios cortos de cambio rápido y especiación, lo que explicaría que en el registro fósil falten muchas formas intermedias." },
  ],
  quiz: [
    { q: "¿Hace cuánto aparecieron los primeros seres vivos?", o: ["Unos 65 millones de años", "Unos 3.800 millones de años", "Unos 10.000 años", "Unos 4.600 millones de años"], a: 1, e: "La Tierra tiene unos 4.600 millones." },
    { q: "Pasteur refutó…", o: ["la evolución", "la teoría celular", "la selección natural", "la generación espontánea"], a: 3, e: "Con los matraces de cuello de cisne." },
    { q: "El experimento de Miller y Urey obtuvo…", o: ["aminoácidos a partir de gases simples", "células", "ADN completo", "bacterias"], a: 0, e: "Apoyó la hipótesis de Oparin." },
    { q: "La hipótesis del «mundo de ARN» propone que…", o: ["la vida llegó del espacio", "el ARN no existe", "el ARN fue la primera molécula que se copiaba a sí misma", "las proteínas aparecieron antes que todo"], a: 2, e: "Guarda información y cataliza reacciones." },
    { q: "Los fósiles más antiguos son…", o: ["los dinosaurios", "los trilobites", "los estromatolitos", "los mamuts"], a: 2, e: "Capas de cianobacterias." },
    { q: "Cuvier explicó la desaparición de especies con…", o: ["el catastrofismo", "la selección natural", "el uso y desuso", "la deriva"], a: 0, e: "Grandes catástrofes." },
    { q: "¿Qué idea de Lamarck es falsa?", o: ["Que las especies cambian", "Que hay fósiles", "Que los seres vivos se adaptan", "Que se heredan los caracteres adquiridos"], a: 3, e: "Lo adquirido en vida no cambia el ADN de los gametos." },
    { q: "¿Quién llegó a la idea de la selección natural a la vez que Darwin?", o: ["Mendel", "Wallace", "Lamarck", "Pasteur"], a: 1, e: "En 1858." },
    { q: "Según Darwin, dejan más descendencia…", o: ["los mejor adaptados a su ambiente", "los más grandes", "los más viejos", "los que más se esfuerzan"], a: 0, e: "Supervivencia diferencial." },
    { q: "La resistencia a antibióticos aparece porque el antibiótico…", o: ["crea mutaciones", "enseña a las bacterias", "selecciona bacterias que ya eran resistentes", "hace a las bacterias más grandes"], a: 2, e: "La variación ya existía." },
    { q: "El brazo humano y la aleta de la ballena son órganos…", o: ["análogos", "homólogos", "vestigiales", "embrionarios"], a: 1, e: "Mismos huesos, mismo origen." },
    { q: "Archaeopteryx es una forma de transición entre…", o: ["peces y anfibios", "aves y mamíferos", "anfibios y reptiles", "reptiles y aves"], a: 3, e: "Plumas y dientes." },
    { q: "Cuanto más parecido es el ADN de dos especies…", o: ["más lejano su antepasado común", "más grandes son", "no indica nada", "más cercano su antepasado común"], a: 3, e: "Prueba molecular." },
    { q: "La teoría sintética explica el origen de la variabilidad por…", o: ["el uso de los órganos", "mutaciones y recombinación", "el clima", "la voluntad"], a: 1, e: "Une Darwin y genética." },
    { q: "La unidad que evoluciona es…", o: ["el individuo", "el órgano", "la población", "la célula"], a: 2, e: "Cambian las frecuencias de alelos." },
    { q: "Dos animales son de la misma especie si…", o: ["tienen descendencia fértil", "se parecen mucho", "viven juntos", "comen lo mismo"], a: 0, e: "La mula es estéril." },
    { q: "La especiación alopátrica empieza con…", o: ["un aumento de temperatura", "una barrera geográfica", "la herencia de lo adquirido", "una vacuna"], a: 1, e: "Separa poblaciones." },
    { q: "La cola del pavo real se explica sobre todo por…", o: ["selección sexual", "deriva genética", "coevolución", "uso y desuso"], a: 0, e: "Ayuda a conseguir pareja." },
    { q: "El primer homínido que salió de África fue…", o: ["Australopithecus", "Homo sapiens", "Homo habilis", "Homo erectus"], a: 3, e: "Hace unos 1,9 millones de años." },
    { q: "En la Gran Dolina de Atapuerca se describió…", o: ["Lucy", "el primer dinosaurio", "Homo antecessor", "Homo floresiensis"], a: 2, e: "Hace unos 850.000 años." },
  ],
  examen: [
    { q: "¿Qué demostró el experimento de Miller y Urey?", o: ["Que la vida vino del espacio", "Que se forman moléculas orgánicas a partir de gases simples", "Que las bacterias evolucionan", "Que existe la generación espontánea"], a: 1, e: "Aminoácidos con descargas eléctricas." },
    { q: "Las bacterias resistentes a antibióticos son un ejemplo de…", o: ["selección natural", "lamarckismo", "fijismo", "catastrofismo"], a: 0, e: "Sobreviven las que ya eran resistentes." },
    { q: "Para que aparezca una especie nueva suele hacer falta…", o: ["que los individuos se esfuercen", "que no haya mutaciones", "aislamiento entre poblaciones", "un antibiótico"], a: 2, e: "Especiación alopátrica." },
    { q: "Los órganos vestigiales son…", o: ["órganos con la misma función", "restos sin función de órganos útiles en antepasados", "órganos de embriones", "órganos de plantas"], a: 1, e: "Como el coxis." },
    { q: "La deriva genética tiene más efecto en…", o: ["poblaciones grandes", "plantas", "bacterias", "poblaciones pequeñas"], a: 3, e: "El azar pesa más con pocos individuos." },
    { q: "El fijismo afirmaba que…", o: ["los caracteres adquiridos se heredan", "hay selección natural", "existió LUCA", "las especies no cambian"], a: 3, e: "Lo defendía Linneo." },
    { q: "Humanos y chimpancés…", o: ["somos la misma especie", "compartimos un antepasado común", "descendemos los humanos del chimpancé", "no estamos emparentados"], a: 1, e: "Hace unos 6-7 millones de años." },
    { q: "La teoría sintética se llama también…", o: ["lamarckismo", "fijismo", "neodarwinismo", "creacionismo"], a: 2, e: "Darwin + genética." },
  ],
  feynman: ["Cómo pudo originarse la vida según Oparin y Miller", "La diferencia entre Lamarck y Darwin con el ejemplo de la jirafa", "Los cuatro pasos de la selección natural", "Tres pruebas de la evolución", "Cómo se forma una especie nueva"],
  mapa: mapa("EVOLUCIÓN", "var(--eso)", [
    ["Origen de la vida", "sopa primitiva · Miller", "var(--ink)"],
    ["Teorías", "fijismo · Lamarck · Darwin", "var(--sun)"],
    ["Selección natural", "variabilidad · supervivencia", "var(--leaf)"],
    ["Pruebas y especiación", "fósiles · homólogos · ADN", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["¿Qué es la selección natural?", "La supervivencia y mayor reproducción de los individuos con variaciones más ventajosas en su ambiente."],
    ["¿Qué son los órganos homólogos?", "Órganos con el mismo origen evolutivo y estructura, aunque tengan funciones distintas."],
    ["¿Qué es una especie?", "Un grupo de individuos que pueden cruzarse entre sí y tener descendencia fértil."],
    ["Idea principal del lamarckismo", "Uso y desuso de los órganos y herencia de los caracteres adquiridos."],
    ["¿Qué añade la teoría sintética a Darwin?", "Explica la variabilidad con la genética: mutaciones y recombinación."],
    ["Especie", "Individuos que pueden reproducirse entre sí y tener descendencia fértil."],
    ["Especiación", "Formación de una especie nueva, a menudo por aislamiento de una población."],
    ["Bipedismo", "Andar sobre dos pies; uno de los primeros rasgos de los homínidos."],
    ["Hipótesis de Oparin-Haldane", "Evolución química: gases simples + energía → moléculas orgánicas en una «sopa primitiva»."],
    ["LUCA", "Último antepasado común universal de todos los seres vivos."],
    ["Deriva genética", "Cambio al azar de las frecuencias de alelos, importante en poblaciones pequeñas."],
    ["Atapuerca", "Yacimiento de Burgos con fósiles humanos de hasta 1,2 millones de años y Homo antecessor."],
  ],
  glosario: [
    ["Generación espontánea", "Idea, refutada por Pasteur, de que la vida surge de la materia inerte."],
    ["Evolución química", "Formación de moléculas orgánicas a partir de gases simples en la Tierra primitiva."],
    ["LUCA", "Último antepasado común universal."],
    ["Estromatolito", "Roca formada por capas de cianobacterias; fósil muy antiguo."],
    ["Fijismo", "Idea de que las especies no cambian."],
    ["Lamarckismo", "Teoría del uso y desuso y la herencia de caracteres adquiridos."],
    ["Selección natural", "Supervivencia y reproducción diferencial de los mejor adaptados."],
    ["Adaptación", "Rasgo heredado que aumenta la supervivencia o la reproducción en un ambiente."],
    ["Variabilidad", "Diferencias heredables entre los individuos de una población."],
    ["Fósil", "Resto o huella de un ser vivo conservado en las rocas."],
    ["Órganos homólogos", "Órganos con el mismo origen y distinta función."],
    ["Órganos análogos", "Órganos con la misma función y distinto origen."],
    ["Teoría sintética", "Unión de la selección natural con la genética (neodarwinismo)."],
    ["Especie", "Grupo que se reproduce entre sí con descendencia fértil."],
    ["Especiación", "Formación de especies nuevas, a menudo por aislamiento geográfico."],
    ["Deriva genética", "Cambio de frecuencias de alelos por azar."],
    ["Bipedismo", "Caminar sobre dos patas; primer rasgo del linaje humano."],
    ["Endemismo", "Especie que solo vive en un lugar concreto."],
  ],
  situacion: {
    titulo: "El museo de la evolución en el pasillo",
    reto: "El instituto quiere convertir un pasillo en una pequeña exposición sobre la evolución. Cada equipo diseña un panel interactivo sobre una prueba de la evolución o un caso de selección natural actual, con un experimento o una simulación que los visitantes puedan hacer en dos minutos.",
    pasos: [
      "Elegid un tema: fósiles, órganos homólogos, pruebas moleculares, biogeografía, resistencia a antibióticos o evolución humana.",
      "Haced en clase la simulación de selección natural con «presas» de papel de colores y registrad los datos de cinco generaciones en una tabla y un gráfico.",
      "Diseñad el panel: un título-pregunta, un texto de 120 palabras, una imagen o maqueta y la actividad para el visitante.",
      "Incluid un error frecuente sobre la evolución y su corrección (por ejemplo, «venimos del mono»).",
      "Montad la exposición, recoged opiniones de los visitantes con un breve cuestionario y mejorad los paneles.",
    ],
    producto: "Panel expositivo con actividad interactiva y gráfico de la simulación de selección natural.",
    evaluacion: [
      "Exactitud científica y uso correcto de los conceptos de la teoría sintética.",
      "Calidad de la simulación: datos, gráfico e interpretación.",
      "Claridad y atractivo del panel para público de todas las edades.",
      "Análisis de las respuestas de los visitantes y mejoras introducidas.",
    ],
  },
  familias: ["Visitad un museo de ciencias naturales y buscad fósiles de formas intermedias.", "Hablad de por qué hay que terminar los antibióticos aunque ya os encontréis bien.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de «Genética y evolución» y de «La Tierra y la vida» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): origen de la vida, teorías evolutivas, selección natural, pruebas de la evolución, teoría sintética, especiación y evolución humana. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Simulación de selección natural con «presas» de papel de colores sobre telas estampadas.",
      "Comparar huesos de extremidades de vertebrados (fotos o modelos) para identificar homologías.",
      "Analizar secuencias cortas de proteínas de varias especies y construir un árbol de parentesco.",
      "Visita virtual al Museo de la Evolución Humana y situación de aprendizaje del museo en el pasillo.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Evolución biológica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Evoluci%C3%B3n_biol%C3%B3gica" },
    { t: "Yacimientos de la sierra de Atapuerca, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Yacimientos_de_la_sierra_de_Atapuerca" },
  ],
  revisado: "2026-11-13",
};
