// Artes Escénicas y Danza 4º ESO (optativa). Tema nivel libro. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, flujo, figCols, piramide, linea, figLinea } = require("./_hum");
const { B, QS, EJ, EX, poses, escenario, rejilla, curva, zonas, RD } = require("./_eso4L13");

module.exports = {
  materia: "Artes Escénicas y Danza",
  curso: "4-eso",
  titulo: "La danza: elementos y estilos",
  minutos: 110,
  objetivos: [
    "Definir la danza y sus funciones en distintas culturas",
    "Analizar un movimiento a partir de sus cuatro elementos: cuerpo, espacio, tiempo y energía",
    "Recorrer la historia de la danza escénica, del ballet de corte a la danza contemporánea",
    "Reconocer los rasgos de los grandes estilos: clásico, contemporáneo, flamenco, tradicional y urbano",
    "Crear y analizar una secuencia coreográfica breve con vocabulario específico",
  ],
  claves: ["danza", "cuerpo", "espacio", "tiempo", "energía", "ballet", "danza contemporánea", "flamenco", "danzas urbanas"],
  pregunta: {
    texto: "Un bailarín de breaking y una bailarina de ballet parecen hacer cosas opuestas: uno gira de cabeza en el suelo; la otra parece flotar de puntillas. ¿Tienen algo en común?",
    respuesta: "Mucho más de lo que parece. Los dos usan los mismos <mark>cuatro elementos de la danza</mark>: un cuerpo entrenado, un espacio (el ballet busca el aire; el breaking, el suelo), un tiempo marcado por la música y una energía controlada. Cambian el estilo y la cultura de origen, no el lenguaje básico del movimiento.",
  },
  lectura: {
    titulo: "Una sala, cinco danzas",
    html: `<p>En el festival de fin de curso de una escuela de danza de Valencia, el público vio en una sola tarde cinco mundos. Primero, ocho niñas con tutú hicieron una variación de <i>El lago de los cisnes</i>, todas a la vez, con los brazos como alas. Después, una pareja de contemporáneo rodó por el suelo, se dejó caer y se sostuvo con el peso del otro, sin una sola pose bonita y con una emoción que dejó la sala en silencio. Llegó entonces un grupo de jota valenciana con castañuelas, saltos y faldas de colores, y los abuelos del público empezaron a dar palmas. Le siguió una bailaora con bata de cola que zapateó una seguiriya mientras el cantaor parecía romperse la voz. Y para terminar, una crew de chicos y chicas de hip hop hizo un <i>battle</i> amistoso que acabó con todo el teatro de pie.</p><p>Cinco estilos con orígenes, músicas y vestuarios muy distintos. Sin embargo, todos partían de lo mismo: un cuerpo que se mueve en un espacio, con un ritmo y una intención. En este tema aprenderás a mirar la danza con ojos de experto y a reconocer sus elementos, su historia y sus estilos, para disfrutarla y también para crearla.</p>`,
  },
  bloques: [
    B("1.1 ¿Qué es la danza?", `<p>La <b>danza</b> es el arte de <mark>expresar mediante el movimiento del cuerpo</mark>, normalmente organizado en el tiempo según un ritmo y, casi siempre, acompañado de música. Es una de las manifestaciones humanas más antiguas: en pinturas rupestres como las de la Roca dels Moros, en Cogul (Lleida), aparecen figuras que parecen bailar en grupo hace miles de años. Antes que la palabra escrita, la danza ya servía para comunicar, celebrar y pertenecer a una comunidad.</p><p>A lo largo de la historia ha cumplido muchas <b>funciones</b>. Una función <b>ritual o religiosa</b>: danzas para pedir lluvia, honrar a los dioses o acompañar a los muertos. Una función <b>social</b>: bailes de cortejo, de boda, de fiesta, que unen a la comunidad. Una función <b>artística o escénica</b>, cuando se crea para ser contemplada por un público. Una función <b>educativa y terapéutica</b>, porque mejora la coordinación, la autoestima y la salud, y se usa en la danzaterapia. Y una función de <b>identidad</b>: las danzas tradicionales expresan quién es un pueblo. En este curso nos interesa sobre todo la danza escénica, pero conviene recordar que bailar es, ante todo, una necesidad humana universal.</p>`,
      rueda("Funciones de la danza", "DANZA", [["ritual", "var(--bac)"], ["social", "var(--leaf)"], ["artística", "var(--red)"], ["educativa", "var(--pen)"], ["terapéutica", "var(--sun)"], ["identidad", "var(--inf)"]], "var(--ink)")),
    B("1.2 Los cuatro elementos de la danza", `<p>Para analizar cualquier danza, del ballet al reguetón, usamos un mismo esquema basado en las ideas del coreógrafo y teórico húngaro <b>Rudolf Laban</b>. Todo movimiento bailado combina <mark>cuatro elementos</mark>: el <b>cuerpo</b> (¿qué se mueve?), el <b>espacio</b> (¿dónde se mueve?), el <b>tiempo</b> (¿cuándo y a qué ritmo?) y la <b>energía</b> (¿cómo se mueve?). A veces se añade un quinto: la <b>relación</b> (¿con quién o con qué?).</p><p>Este esquema es útil por tres razones. Primero, permite <b>describir</b> con precisión lo que vemos, en lugar de decir solo «es bonito». Segundo, sirve para <b>crear</b>: si quieres variar un paso, puedes cambiar uno de sus elementos (hacerlo más lento, más alto, con otra parte del cuerpo, con más fuerza) y obtendrás un movimiento nuevo. Y tercero, permite <b>comparar</b> estilos: el ballet trabaja mucho el espacio alto y la energía ligera; el flamenco, el tiempo y la energía fuerte de los pies; el contemporáneo, el nivel bajo y el peso. En los siguientes apartados veremos cada elemento con detalle y con ejemplos que podrás probar en el aula.</p>`,
      rejilla("Los cuatro elementos de la danza", [["Cuerpo", "¿qué se mueve?"], ["Espacio", "¿dónde?"], ["Tiempo", "¿cuándo, a qué ritmo?"], ["Energía", "¿cómo?"]]),
      { id: "Nv0ODJPROTI", titulo: "Elementos de la danza", canal: "Mr. Art Peru", vistas: 82193, megusta: 0 }),
    B("1.3 Elemento 1: el cuerpo", `<p>El <b>cuerpo</b> es el instrumento del bailarín. Al analizarlo nos preguntamos <b>qué partes</b> se mueven (cabeza, tronco, brazos, cadera, piernas, manos, pies) y <b>cómo</b>: aislando una parte (solo los hombros, como en el popping) o con todo el cuerpo a la vez. También importan las <b>formas</b> que crea: curvas, rectas, angulosas, torcidas, abiertas o cerradas, simétricas o asimétricas.</p><p>Las <mark>acciones básicas</mark> del cuerpo son: <b>desplazarse</b> (caminar, correr, deslizarse, rodar), <b>girar</b> (sobre un pie, en el suelo, en el aire), <b>saltar</b> (de dos pies a dos pies, de uno a otro…), <b>gestos</b> (movimientos de una parte que no implican desplazamiento), <b>equilibrios</b> o pausas en una posición, <b>transferencias de peso</b> y <b>caídas</b> controladas. Cualquier coreografía es una combinación de estas acciones. Además, el cuerpo puede moverse en <b>locomoción</b> (viajando por el espacio) o en el sitio (sin desplazarse). Un buen ejercicio para tomar conciencia es bailar una canción moviendo solo una parte del cuerpo cada vez: primero solo la cabeza, luego solo los brazos, luego solo las caderas, y al final todo junto.</p>`,
      poses("Acciones básicas del cuerpo", [["zancada", "desplazar", "var(--pen)"], ["giro", "girar", "var(--red)"], ["salto", "saltar", "var(--leaf)"], ["cruz", "equilibrio", "var(--bac)"]])),
    B("1.4 Elemento 2: el espacio", `<p>El bailarín se mueve en dos espacios. El <b>espacio personal</b> o <mark>kinesfera</mark> es la burbuja imaginaria que rodea el cuerpo y que alcanzamos estirando brazos y piernas sin desplazarnos. El <b>espacio general</b> es toda la sala o el escenario, por donde nos desplazamos.</p><p>Para organizar el movimiento en el espacio se usan varias categorías. Los <b>niveles</b>: bajo (suelo, tumbado, rodando), medio (de rodillas, flexionado) y alto (de pie, de puntillas, en el aire). Las <b>direcciones</b>: adelante, atrás, a los lados, arriba, abajo y diagonales. Las <b>trayectorias</b> o caminos que dibujamos en el suelo: rectas, curvas, círculos, espirales, zigzag. La <b>amplitud</b>: movimientos grandes que ocupan mucho espacio o pequeños y concentrados. Y el <b>foco</b> o dirección de la mirada. En grupo aparecen además las <b>formaciones</b>: línea, columna, círculo, diagonal, bloque, uve o grupos dispersos. Cambiar de formación crea interés visual y ayuda a destacar a un solista. Los coreógrafos dibujan en papel estas formaciones y trayectorias para planificar sus obras, igual que un entrenador dibuja jugadas.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Tres niveles de la danza, bajo, medio y alto, y cuatro trayectorias: recta, curva, zigzag y espiral">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="11" font-weight="700">
        <rect x="14" y="20" width="96" height="40" rx="6" fill="var(--sun)" fill-opacity=".3"/><text x="62" y="45" text-anchor="middle" fill="var(--ink)">alto</text>
        <rect x="14" y="66" width="96" height="40" rx="6" fill="var(--pen)" fill-opacity=".25"/><text x="62" y="91" text-anchor="middle" fill="var(--ink)">medio</text>
        <rect x="14" y="112" width="96" height="40" rx="6" fill="var(--bac)" fill-opacity=".25"/><text x="62" y="137" text-anchor="middle" fill="var(--ink)">bajo</text>
        <path d="M130 34 H 238" stroke="var(--red)" stroke-width="3"/><text x="184" y="26" text-anchor="middle" fill="var(--red)">recta</text>
        <path d="M130 70 Q 184 40 238 70" fill="none" stroke="var(--leaf)" stroke-width="3"/><text x="184" y="82" text-anchor="middle" fill="var(--leaf)">curva</text>
        <path d="M130 108 L 148 94 L 166 108 L 184 94 L 202 108 L 220 94 L 238 108" fill="none" stroke="var(--pen)" stroke-width="3"/><text x="184" y="124" text-anchor="middle" fill="var(--pen)">zigzag</text>
        <path d="M184 150 m -4 0 a 4 4 0 1 1 8 0 a 8 8 0 1 1 -16 0 a 12 12 0 1 1 24 0" fill="none" stroke="var(--inf)" stroke-width="2.5"/><text x="226" y="160" text-anchor="middle" fill="var(--inf)">espiral</text>
        </g>
      </svg>`),
    B("1.5 Elemento 3: el tiempo", `<p>La danza ocurre en el tiempo y casi siempre en relación con la música. El concepto básico es el <mark>pulso</mark>: la pulsación regular que sentimos en una canción y con la que damos palmas sin pensar. Los pulsos se agrupan en <b>compases</b>: de dos tiempos (marchas), de tres (vals), de cuatro (la mayoría de la música pop) o de amalgamas más complejas, como el compás de doce tiempos del flamenco. En danza solemos contar en <b>frases de ocho tiempos</b> («cinco, seis, siete, ocho…»), que facilitan que un grupo empiece y termine a la vez.</p><p>El <b>tempo</b> es la velocidad: lento, moderado, rápido. El <b>ritmo</b> es la combinación de duraciones largas y cortas; un mismo pulso puede llenarse con pasos lentos (uno cada dos tiempos), normales (uno por tiempo) o rápidos (dos por tiempo, en «y»). La <b>acentuación</b> marca los tiempos fuertes. También existen la <b>pausa</b> o quietud, que en danza es tan expresiva como el movimiento; el <b>contratiempo</b> o síncopa, que rompe lo esperado; y el <b>canon</b>, cuando varios bailarines hacen el mismo movimiento empezando en momentos distintos, como en una canción a varias voces. Algunos estilos, como el contemporáneo, bailan a veces sin música, siguiendo la respiración o el silencio.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Frase de ocho tiempos con pasos lentos, normales y rápidos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle">
        ${[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => `<text x="${36 + i * 27}" y="28" fill="var(--muted)">${n}</text>`).join("")}
        <text x="16" y="60" text-anchor="start" fill="var(--pen)" font-size="10">lento</text>${[0, 2, 4, 6].map((i) => `<rect x="${36 + i * 27 - 6}" y="66" width="${27 + 12}" height="12" rx="6" fill="var(--pen)"/>`).join("")}
        <text x="16" y="100" text-anchor="start" fill="var(--leaf)" font-size="10">normal</text>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<circle cx="${36 + i * 27}" cy="112" r="7" fill="var(--leaf)"/>`).join("")}
        <text x="16" y="138" text-anchor="start" fill="var(--red)" font-size="10">rápido</text>${[...Array(16).keys()].map((i) => `<circle cx="${36 + i * 13.5}" cy="150" r="4.5" fill="var(--red)"/>`).join("")}
        </g>
      </svg>`),
    B("1.6 Elemento 4: la energía", `<p>La <b>energía</b> o dinámica es la <mark>calidad del movimiento</mark>: no qué hacemos, sino cómo lo hacemos. Un mismo gesto de brazo puede parecer una caricia o un golpe según la energía. Laban la analizó con cuatro factores, cada uno con dos polos: el <b>peso</b> (ligero o fuerte), el <b>tiempo</b> (súbito o sostenido), el <b>espacio</b> (directo o indirecto) y el <b>flujo</b> (libre o contenido).</p><p>Combinando peso, tiempo y espacio, Laban describió ocho <b>acciones básicas de esfuerzo</b>, muy usadas en danza y teatro:</p>${tabla(["Acción", "Peso", "Tiempo", "Espacio"], [["Golpear", "fuerte", "súbito", "directo"], ["Latigar", "fuerte", "súbito", "indirecto"], ["Presionar", "fuerte", "sostenido", "directo"], ["Retorcer", "fuerte", "sostenido", "indirecto"], ["Toquetear", "ligero", "súbito", "directo"], ["Sacudir", "ligero", "súbito", "indirecto"], ["Deslizar", "ligero", "sostenido", "directo"], ["Flotar", "ligero", "sostenido", "indirecto"]])}<p>Otras calidades habituales son el movimiento <b>percutido</b> (cortante), <b>suspendido</b> (que parece detenerse en el aire), <b>balanceado</b> (como un péndulo), <b>vibratorio</b> (temblores rápidos) y <b>colapsado</b> (una caída de tensión). Variar la energía es la forma más sencilla de dar expresividad a una coreografía.</p>`,
      dos("Energía: dos polos", ["Fuerte, súbita", ["golpear", "latigar", "percutido", "explosivo", "enérgico"], "var(--red)"], ["Ligera, lenta", ["flotar", "deslizar", "suspendido", "fluido", "suave"], "var(--pen)"])),
    B("1.7 Del ballet de corte al ballet romántico", `<p>La danza escénica occidental nació en las cortes italianas y francesas del Renacimiento, donde los nobles bailaban en fiestas y espectáculos. El rey <b>Luis XIV</b> de Francia, apasionado bailarín que interpretó al Sol en un ballet (de ahí su apodo, el Rey Sol), fundó en 1661 la <mark>Real Academia de Danza</mark>. Su maestro Pierre Beauchamp fijó las <b>cinco posiciones de los pies</b> que todavía se enseñan, y por eso el vocabulario del ballet está en francés: <i>plié</i>, <i>relevé</i>, <i>pirouette</i>, <i>jeté</i>.</p><p>En el siglo XVIII, Jean-Georges <b>Noverre</b> defendió el <b>ballet de acción</b>, que contaba historias con el movimiento y no era solo una exhibición de pasos. En el siglo XIX llegó el <b>ballet romántico</b>, con temas sobrenaturales (espíritus, hadas, sílfides), largas faldas blancas de tul y una gran novedad: el baile sobre <b>las puntas</b> de los pies, que hacía parecer a las bailarinas seres sin peso. <i>La Sílfide</i> (1832) y <i>Giselle</i> (1841) son sus obras emblemáticas. A finales del siglo, en Rusia, Marius Petipa y el compositor Chaikovski crearon los grandes ballets clásicos: <i>El lago de los cisnes</i>, <i>La bella durmiente</i> y <i>El cascanueces</i>, con el tutú corto que deja ver el trabajo de las piernas.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Las cinco posiciones de los pies del ballet vistas desde arriba">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["1ª", 0], ["2ª", 1], ["3ª", 2], ["4ª", 3], ["5ª", 4]].map(([t, i]) => {
          const x = 30 + i * 50, y = 86;
          const pies = [
            [[x - 6, y, 180], [x + 6, y, 0]],
            [[x - 16, y, 180], [x + 16, y, 0]],
            [[x - 3, y - 3, 180], [x + 3, y + 3, 0]],
            [[x - 4, y - 14, 180], [x + 4, y + 14, 0]],
            [[x, y - 4, 180], [x, y + 4, 0]],
          ][i];
          return pies.map(([px, py, r]) => `<ellipse cx="${px + (r ? -8 : 8)}" cy="${py}" rx="10" ry="4.5" fill="var(--pen)" fill-opacity=".75"/>`).join("") + `<text x="${x}" y="140" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${D}>${t}</text>`;
        }).join("")}
        <text x="130" y="36" text-anchor="middle" font-size="11.5" fill="var(--muted)" ${F}>pies girados hacia fuera (en dehors)</text>
      </svg>`,
      { id: "gjtPnFQ1TPs", titulo: "Posiciones básicas en el ballet clásico", canal: "Ballet para Todos", vistas: 1824521, megusta: 0 }),
    B("1.8 La revolución moderna y contemporánea", `<p>A comienzos del siglo XX, algunas bailarinas sintieron que el ballet era una jaula. La estadounidense <b>Isadora Duncan</b> bailó descalza, con túnicas sueltas inspiradas en Grecia, buscando un movimiento natural que naciera del plexo solar. Así nació la <mark>danza moderna</mark>. <b>Martha Graham</b> creó una técnica basada en la <b>contracción y la relajación</b> del torso, ligada a la respiración y a la emoción; Doris Humphrey trabajó la <b>caída y la recuperación</b>. En Alemania, Rudolf Laban y Mary Wigman desarrollaron la danza expresionista.</p><p>A partir de los años cincuenta, <b>Merce Cunningham</b> separó la danza de la música y de la historia, y usó el azar (tirar dados) para decidir el orden de los movimientos. Después llegaron la danza posmoderna, que bailaba gestos cotidianos como caminar, y el <b>contact improvisation</b>, basado en compartir el peso con el compañero. La alemana <b>Pina Bausch</b> inventó la <b>danza-teatro</b> (<i>Tanztheater</i>), donde los bailarines hablan, repiten acciones de la vida diaria y expresan emociones profundas. La <b>danza contemporánea</b> actual es muy diversa: usa el suelo, la gravedad, la improvisación, la tecnología y mezcla técnicas de todo el mundo. En España destacan Nacho Duato, Sol Picó, Marcos Morau (La Veronal) o Israel Galván, que ha llevado el flamenco a lo contemporáneo.</p>`,
      figLinea("Historia de la danza escénica", [[50, "1661", "Real Academia de Danza", true], [150, "1832", "La Sílfide: puntas", false], [250, "1877", "El lago de los cisnes", true], [350, "1900", "Isadora Duncan", false], [440, "1930", "Martha Graham", true], [530, "1953", "Merce Cunningham", false], [620, "1973", "Pina Bausch", true]], [[30, 300, "ballet", "var(--pen)"], [300, 480, "danza moderna", "var(--red)"], [480, 660, "contemporánea", "var(--bac)"]]),
      { id: "mR8uo1-yDAc", titulo: "Historia de la danza: prehistoria, clásico y contemporáneo", canal: "Kevin G", vistas: 209414, megusta: 0 }),
    B("1.9 La danza española y el flamenco", `<p>España tiene una tradición de danza propia y riquísima, reconocida en todo el mundo. La llamada <b>danza española</b> agrupa cuatro grandes formas. La <b>escuela bolera</b>, del siglo XVIII, une la técnica del ballet con bailes populares y castañuelas. La <b>danza estilizada</b> crea coreografías escénicas sobre música de compositores como Falla, Albéniz o Granados. El <b>folclore</b> recoge las danzas tradicionales de cada región. Y el <mark>flamenco</mark>, nacido en Andalucía entre los siglos XVIII y XIX con aportaciones gitanas, andaluzas, árabes y judías, fue declarado <b>Patrimonio Cultural Inmaterial de la Humanidad</b> por la UNESCO en 2010.</p><p>El flamenco tiene tres elementos: el <b>cante</b>, el <b>toque</b> de guitarra y el <b>baile</b>, a los que se suman las palmas y el jaleo. Sus estilos se llaman <b>palos</b> y se distinguen por su compás y su carácter: alegres y festivos (alegrías, bulerías, tangos, sevillanas) o hondos y trágicos (soleá, seguiriya). El baile flamenco combina el <b>zapateado</b> (percusión con los pies), los <b>braceos</b> y las manos, los giros y los remates. Grandes figuras han sido Antonio Gades, Carmen Amaya, Cristina Hoyos, Joaquín Cortés, Sara Baras, Eva Yerbabuena o Rocío Molina. El Ballet Nacional de España conserva y renueva todo este patrimonio.</p>`,
      figCols("Las cuatro formas de la danza española", [["Bolera", ["s. XVIII", "ballet y castañuelas", "elegancia"], "var(--pen)"], ["Estilizada", ["Falla, Albéniz", "creación escénica", "zapatilla y castañuela"], "var(--bac)"], ["Folclore", ["jota, muiñeira", "sardana, fandango", "identidad"], "var(--leaf)"], ["Flamenco", ["cante, toque, baile", "palos y compás", "UNESCO 2010"], "var(--red)"]])),
    B("1.10 Las danzas tradicionales", `<p>Las <b>danzas tradicionales</b> o folclóricas son las que un pueblo transmite de generación en generación, normalmente de forma oral, en fiestas, romerías y celebraciones. No tienen un autor conocido y forman parte del <mark>patrimonio cultural inmaterial</mark>. Cada comunidad autónoma tiene las suyas, con trajes, instrumentos y pasos característicos.</p>${tabla(["Danza", "Comunidad", "Rasgos"], [["Jota", "Aragón, Navarra, Valencia, Castilla…", "saltos, castañuelas, compás de 3, muy enérgica"], ["Sardana", "Cataluña", "en corro, cogidos de las manos, pasos cortos y largos contados"], ["Muiñeira", "Galicia", "gaita, saltos ligeros, compás de 6/8"], ["Sevillanas", "Andalucía", "en pareja, cuatro coplas, castañuelas o palmas"], ["Aurresku", "País Vasco", "danza de honor, patadas altas, txistu"], ["Isa", "Canarias", "en grupo, alegre, con timple"]])}<p>Estas danzas tienen una fuerte función <b>social</b>: se bailan en grupo, a menudo en círculo, y crean comunidad. Muchas se han estilizado para la escena, y numerosos coreógrafos contemporáneos se inspiran en ellas para crear obras nuevas. Conservarlas no significa congelarlas: las tradiciones vivas se transforman con cada generación que las baila.</p>`,
      poses("Danzas tradicionales en grupo", [["brazos", "jota", "var(--red)"], ["de pie", "sardana", "var(--pen)"], ["salto", "muiñeira", "var(--leaf)"], ["giro", "sevillanas", "var(--inf)"]])),
    B("1.11 Las danzas urbanas", `<p>Las <mark>danzas urbanas</mark> nacieron en las calles, los barrios y las discotecas, sobre todo en Estados Unidos a partir de los años setenta, ligadas a la música negra y latina. La más conocida es el <b>breaking</b> (b-boying), surgido en el Bronx de Nueva York como parte de la cultura <b>hip hop</b>, junto al rap, el DJ y el grafiti. Combina pasos de pie (<i>toprock</i>), trabajo de suelo (<i>footwork</i>), acrobacias giratorias (<i>power moves</i>) y congelaciones (<i>freezes</i>). El breaking fue deporte olímpico en París 2024.</p><p>Otros estilos son el <b>popping</b> (contracciones musculares que parecen descargas), el <b>locking</b> (movimientos que se «bloquean» de golpe, muy cómicos), el <b>house</b> (pasos rápidos de pies sobre música electrónica), el <b>waacking</b> (brazos que giran rápido, nacido en clubes LGTBI), el <b>krump</b> (expresivo y agresivo), el <b>dancehall</b> jamaicano o el <b>reguetón</b>. Su forma de aprendizaje y exhibición es muy particular: se practican en grupos llamados <b>crews</b>, se aprende copiando y en la calle, y se compite en <b>batallas</b> (battles) en las que dos bailarines se alternan improvisando sobre la música que pone el DJ. La improvisación, el estilo personal y el respeto a los orígenes son valores centrales.</p>`,
      rejilla("Estilos de danza urbana", [["Breaking", "suelo y acrobacia"], ["Popping", "contracciones"], ["Locking", "pausas de golpe"], ["House", "pies rápidos"], ["Waacking", "brazos que giran"], ["Krump", "expresivo, intenso"]])),
    B("1.12 Componer y analizar una coreografía", `<p>Una <b>coreografía</b> es la composición organizada de movimientos para una danza. Quien la crea es el <b>coreógrafo</b> o coreógrafa. Para componer se parte de un <b>motivo</b>: un movimiento o frase breve que se repite y se transforma. Las principales <mark>técnicas de composición</mark> son: la <b>repetición</b> (hacer el mismo motivo varias veces), la <b>variación</b> (cambiar uno de sus elementos: más lento, en otro nivel, con otra parte del cuerpo), el <b>unísono</b> (todos a la vez), el <b>canon</b> (el mismo movimiento con retraso entre bailarines), la <b>pregunta-respuesta</b> (un grupo propone y otro contesta), el <b>contraste</b> (rápido frente a lento, solo frente a grupo) y la <b>acumulación</b> (cada vez se suman más bailarines o más pasos).</p><p>La estructura más sencilla es la forma <b>A-B-A</b>: una sección, otra contrastante y la vuelta a la primera. Para analizar una coreografía que veas, combina todo lo aprendido: ¿qué estilo es?, ¿qué partes del cuerpo y acciones predominan?, ¿qué niveles, trayectorias y formaciones usa?, ¿cómo se relaciona con la música?, ¿qué energía tiene?, ¿qué emoción o idea transmite? Con ese análisis no solo disfrutarás más; también podrás hablar de danza con argumentos.</p>`,
      flujo("Técnicas de composición", ["motivo", "repetir", "variar", "canon", "contraste", "A-B-A"], "var(--bac)")),
  ],
  figura: {
    titulo: "Elementos y grandes estilos de la danza",
    svg: figCols("Elementos y estilos de la danza", [["Clásica", ["ballet, puntas", "ligereza", "posiciones"], "var(--pen)"], ["Contemporánea", ["suelo y peso", "emoción", "libertad"], "var(--bac)"], ["Española", ["flamenco", "folclore, bolera", "zapateado"], "var(--red)"], ["Urbana", ["breaking, popping", "crews y battles", "improvisación"], "var(--leaf)"]]),
  },
  video: { id: "toGgmllHgkA", titulo: "Hagamos arte: elementos de la danza", canal: "elprofeleo", vistas: 100588, megusta: 0, busqueda: "elementos de la danza cuerpo espacio tiempo energía" },
  ejemplos: [
    EX("Analiza este movimiento con los cuatro elementos: «Una bailarina gira tres veces sobre un pie, muy rápido, con los brazos cerrados, y termina con un salto hacia la diagonal».", ["Cuerpo: giro sobre un pie y salto; brazos cerrados.", "Espacio: nivel alto, giro en el sitio y luego dirección diagonal.", "Tiempo: tempo rápido.", "Energía: súbita y directa en el final."], "Un movimiento técnico, veloz y enérgico, propio del ballet o el jazz."),
    EX("Crea dos variaciones del motivo «dar tres pasos adelante y levantar los brazos».", ["Variación de nivel: los tres pasos en cuclillas y los brazos al suelo.", "Variación de tiempo y energía: pasos muy lentos y brazos que se lanzan de golpe."], "Cambiando un solo elemento se obtiene un movimiento nuevo."),
    EX("Cuenta una frase de ocho tiempos para un grupo de cuatro en canon de un tiempo.", ["Bailarín 1 empieza en el tiempo 1.", "Bailarín 2 empieza en el tiempo 2.", "Bailarín 3 en el 3 y bailarín 4 en el 4.", "El último termina cuatro tiempos después del primero."], "Efecto de ola o eco visual."),
    EX("Identifica el estilo: descalzos, mucho trabajo de suelo, caídas y recuperaciones, música electrónica suave y sin historia concreta.", ["Descalzos y suelo: no es ballet ni flamenco.", "Caídas y recuperaciones: técnica moderna (Humphrey).", "Sin historia y abstracta: rasgo contemporáneo."], "Danza contemporánea."),
    EX("Distingue un palo alegre y uno hondo del flamenco con un ejemplo de cada uno.", ["Alegre: alegrías o bulerías, ritmo vivo, carácter festivo.", "Hondo: soleá o seguiriya, ritmo pausado y solemne, expresión trágica."], "El palo determina el compás y la emoción del baile."),
    EX("Describe con las acciones de Laban un movimiento de «empujar una puerta pesada» y otro de «apartar telarañas».", ["Empujar: fuerte, sostenido y directo = presionar.", "Apartar telarañas: ligero, súbito e indirecto = sacudir (o toquetear si es directo)."], "La energía define la acción."),
  ],
  errores: [
    "Describir una danza solo con adjetivos («bonita», «rara») sin usar sus elementos.",
    "Confundir pulso (latido regular) con ritmo (combinación de duraciones).",
    "Pensar que la danza contemporánea es «bailar sin técnica»: tiene técnicas exigentes.",
    "Creer que el flamenco es solo baile: incluye cante, toque y palmas.",
    "Llamar «hip hop» a cualquier baile urbano: hay estilos distintos (breaking, popping…).",
    "Componer sin repetir ni variar: el público necesita reconocer motivos.",
  ],
  ejercicios: EJ([
    ["Define danza.", "Arte de expresar mediante el movimiento del cuerpo, organizado en el tiempo y normalmente acompañado de música."],
    ["Escribe cuatro funciones de la danza.", "Ritual, social, artística, educativa (también terapéutica y de identidad)."],
    ["Nombra los cuatro elementos de la danza.", "Cuerpo, espacio, tiempo y energía."],
    ["Escribe cinco acciones básicas del cuerpo.", "Desplazarse, girar, saltar, gesticular, equilibrarse (también transferir peso y caer)."],
    ["¿Cuáles son los tres niveles del espacio?", "Bajo, medio y alto."],
    ["¿Qué es la kinesfera?", "El espacio personal que rodea el cuerpo y que se alcanza sin desplazarse."],
    ["¿Qué es el pulso?", "La pulsación regular de la música con la que damos palmas."],
    ["¿Quién fundó la Real Academia de Danza y en qué año?", "Luis XIV de Francia, en 1661."],
    ["Escribe tres ballets de Chaikovski.", "<i>El lago de los cisnes</i>, <i>La bella durmiente</i> y <i>El cascanueces</i>."],
    ["¿Qué tres elementos forman el flamenco?", "Cante, toque y baile."],
    ["Escribe tres danzas tradicionales españolas y su comunidad.", "Jota (Aragón y otras), sardana (Cataluña), muiñeira (Galicia) (también sevillanas, aurresku, isa)."],
    ["¿En qué ciudad nació el breaking?", "En Nueva York, en el barrio del Bronx."],
  ], [
    ["Explica por qué es útil analizar la danza con sus cuatro elementos.", "Permite describir con precisión, crear variaciones cambiando un elemento y comparar estilos distintos."],
    ["Explica la diferencia entre tempo, ritmo y compás.", "Tempo: velocidad. Ritmo: combinación de duraciones largas y cortas. Compás: agrupación de pulsos (de 2, 3, 4…)."],
    ["¿Por qué se cuenta en frases de ocho tiempos?", "Porque coinciden con la estructura de la mayoría de la música y facilitan que un grupo empiece y acabe a la vez."],
    ["Define canon y unísono.", "Unísono: todos hacen el mismo movimiento a la vez. Canon: el mismo movimiento empieza en momentos distintos en cada bailarín."],
    ["Explica los cuatro factores de la energía según Laban.", "Peso (ligero o fuerte), tiempo (súbito o sostenido), espacio (directo o indirecto) y flujo (libre o contenido)."],
    ["Describe «flotar» y «golpear» con los factores de Laban.", "Flotar: ligero, sostenido e indirecto. Golpear: fuerte, súbito y directo."],
    ["¿Por qué el vocabulario del ballet está en francés?", "Porque el ballet se codificó en la corte francesa de Luis XIV y su Real Academia de Danza."],
    ["¿Qué aportó el ballet romántico?", "Temas sobrenaturales, tutú largo de tul blanco y el baile sobre las puntas, que daba sensación de ingravidez."],
    ["Compara la técnica de Martha Graham con la de Doris Humphrey.", "Graham: contracción y relajación del torso ligada a la respiración. Humphrey: caída y recuperación del equilibrio."],
    ["¿Qué es la danza-teatro y quién la creó?", "Género que une danza, palabra y acciones cotidianas para expresar emociones; la creó Pina Bausch."],
    ["Explica las cuatro formas de la danza española.", "Escuela bolera (ballet y castañuelas, s. XVIII), danza estilizada (creación escénica sobre música culta), folclore (danzas regionales) y flamenco."],
    ["¿Qué son los palos del flamenco? Pon dos ejemplos de cada tipo.", "Los estilos del flamenco según compás y carácter. Alegres: alegrías, bulerías. Hondos: soleá, seguiriya."],
    ["Explica qué es una battle en las danzas urbanas.", "Competición en la que dos bailarines o crews se alternan improvisando sobre la música del DJ y se valora técnica, estilo y musicalidad."],
    ["Explica la estructura A-B-A en una coreografía.", "Una sección inicial, otra contrastante y la vuelta a la primera, a menudo con variaciones."],
  ], [
    ["Crea una frase de 16 tiempos que use los tres niveles, dos trayectorias distintas y dos calidades de energía. Escríbela tiempo a tiempo.", "Respuesta abierta. Debe indicar en cada tiempo la acción, el nivel, la trayectoria y la energía, y respetar el total de 16 tiempos."],
    ["Analiza un vídeo de danza (de cualquier estilo) aplicando los cuatro elementos, las técnicas de composición y la intención expresiva.", "Respuesta abierta. Debe usar vocabulario del tema y argumentar la interpretación de la emoción o idea."],
    ["Compara el ballet romántico y el breaking en cuanto a espacio, energía, vestuario y forma de aprendizaje.", "Ballet: nivel alto, energía ligera y sostenida, tutú y zapatillas de punta, aprendizaje académico. Breaking: nivel bajo, energía explosiva y súbita, ropa urbana, aprendizaje en la calle y en crews."],
    ["¿Por qué crees que Isadora Duncan bailaba descalza? Relaciónalo con su idea de la danza.", "Para liberarse de las reglas del ballet y buscar un movimiento natural y expresivo, en contacto con el suelo y con la emoción; el pie desnudo simbolizaba esa libertad."],
    ["Diseña la planta de una coreografía de 6 bailarines con tres formaciones distintas y explica el efecto de cada una.", "Respuesta abierta: por ejemplo, línea frontal (fuerza y unidad), diagonal (dinamismo y profundidad) y círculo (comunidad o encierro), con dibujos de las posiciones."],
    ["Argumenta si el breaking debe ser deporte olímpico o arte. ¿Puede ser las dos cosas?", "Respuesta razonada: tiene componentes deportivos (fuerza, acrobacia, competición) y artísticos (estilo, musicalidad, expresión); puede considerarse ambas, como la gimnasia rítmica o el patinaje."],
    ["Explica cómo se puede conservar una danza tradicional sin «congelarla».", "Documentándola (vídeo, partituras, testimonios), enseñándola a los jóvenes, bailándola en fiestas y permitiendo nuevas versiones escénicas que la mantengan viva."],
    ["Aplica la técnica del azar de Cunningham: crea una secuencia ordenando seis movimientos con un dado y reflexiona sobre el resultado.", "Respuesta abierta: describir los seis movimientos, el orden obtenido y valorar qué combinaciones inesperadas aparecieron."],
    ["Explica qué relación hay entre la danza y la identidad colectiva, con un ejemplo cercano.", "Las danzas tradicionales expresan la historia, el paisaje y los valores de una comunidad; bailarlas en fiestas refuerza el sentimiento de pertenencia (por ejemplo, la sardana en Cataluña o la jota en Aragón)."],
    ["Diseña un calentamiento de danza de 8 minutos que prepare para una coreografía contemporánea con trabajo de suelo.", "Respuesta abierta: movilidad articular, activación cardiovascular suave, trabajo de columna (contracciones y ondas), transiciones al suelo y rodadas controladas, y estiramientos dinámicos."],
  ]),
  quiz: QS([
    ["La danza es el arte de expresar mediante…", ["el movimiento del cuerpo", "la palabra escrita", "la pintura", "la luz"], "Organizado en el tiempo."],
    ["¿Cuál NO es un elemento de la danza?", ["vestuario", "cuerpo", "espacio", "energía"], "Son cuerpo, espacio, tiempo y energía."],
    ["La kinesfera es…", ["el espacio personal alrededor del cuerpo", "un paso de ballet", "un estilo urbano", "un instrumento"], "Laban."],
    ["Los niveles del espacio son…", ["bajo, medio y alto", "lento y rápido", "fuerte y ligero", "solo y grupo"], "Altura del cuerpo."],
    ["La velocidad de la música y del movimiento se llama…", ["tempo", "timbre", "nivel", "foco"], "Lento, moderado, rápido."],
    ["En danza solemos contar frases de…", ["ocho tiempos", "tres tiempos siempre", "cien tiempos", "un tiempo"], "«Cinco, seis, siete, ocho»."],
    ["El mismo movimiento con retraso entre bailarines es un…", ["canon", "unísono", "solo", "freeze"], "Como una canción a voces."],
    ["«Flotar» según Laban es…", ["ligero, sostenido e indirecto", "fuerte y súbito", "directo y rápido", "fuerte y sostenido"], "Acción de esfuerzo."],
    ["La Real Academia de Danza la fundó…", ["Luis XIV", "Napoleón", "Felipe II", "Chaikovski"], "1661, Francia."],
    ["El baile sobre las puntas se popularizó en el…", ["ballet romántico", "flamenco", "breaking", "folclore"], "<i>La Sílfide</i>, 1832."],
    ["<i>El lago de los cisnes</i> tiene música de…", ["Chaikovski", "Falla", "Mozart", "Beethoven"], "Ballet clásico ruso."],
    ["Bailó descalza y abrió la danza moderna…", ["Isadora Duncan", "Pina Bausch", "Sara Baras", "Carmen Amaya"], "Principios del siglo XX."],
    ["La contracción y relajación es la técnica de…", ["Martha Graham", "Merce Cunningham", "Luis XIV", "Noverre"], "Danza moderna."],
    ["La danza-teatro (<i>Tanztheater</i>) es de…", ["Pina Bausch", "Isadora Duncan", "Petipa", "Beauchamp"], "Alemania."],
    ["El flamenco es Patrimonio de la Humanidad desde…", ["2010", "1990", "2020", "1961"], "UNESCO."],
    ["Los estilos del flamenco se llaman…", ["palos", "pasos", "actos", "crews"], "Soleá, bulerías…"],
    ["La sardana es una danza de…", ["Cataluña", "Galicia", "Andalucía", "Canarias"], "En corro."],
    ["El breaking fue deporte olímpico en…", ["París 2024", "Barcelona 1992", "Tokio 1964", "Atenas 2004"], "Danza urbana."],
    ["Un grupo de bailarines urbanos se llama…", ["crew", "coro", "cuadro", "compañía real"], "Se aprende en grupo."],
    ["La forma A-B-A consiste en…", ["una sección, otra contrastante y la vuelta a la primera", "tres secciones iguales", "un solo", "un canon"], "Estructura coreográfica."],
  ]),
  examen: QS([
    ["Las cinco posiciones de los pies las fijó…", ["Pierre Beauchamp", "Martha Graham", "Pina Bausch", "Laban"], "Maestro de Luis XIV."],
    ["El ballet de acción, que cuenta historias, lo defendió…", ["Noverre", "Cunningham", "Duncan", "Petipa"], "Siglo XVIII."],
    ["Merce Cunningham usó para componer…", ["el azar", "solo el folclore", "textos de Lorca", "castañuelas"], "Tiraba dados."],
    ["El zapateado es propio del…", ["flamenco", "ballet", "contemporáneo", "contact"], "Percusión con los pies."],
    ["La muiñeira se acompaña con…", ["gaita", "timple", "txistu", "castañuelas de jota"], "Galicia."],
    ["El popping se basa en…", ["contracciones musculares rápidas", "girar de cabeza", "zapatear", "bailar en puntas"], "Danza urbana."],
    ["Un movimiento que parece detenerse en el aire es…", ["suspendido", "percutido", "colapsado", "vibratorio"], "Calidad de movimiento."],
    ["La pintura rupestre de Cogul muestra…", ["figuras que bailan", "un teatro griego", "un corral", "una bailarina en puntas"], "Lleida."],
  ]),
  feynman: ["Qué funciones ha tenido la danza en la historia", "Cómo se analiza un movimiento con cuerpo, espacio, tiempo y energía", "Cómo pasó la danza del ballet de corte a la danza contemporánea", "Qué rasgos tienen el flamenco, el folclore y las danzas urbanas", "Qué técnicas se usan para componer una coreografía"],
  mapa: mapa("DANZA", "var(--bac)", [
    ["Elementos", "cuerpo · espacio · tiempo · energía", "var(--red)"],
    ["Clásica y moderna", "ballet · Graham · Bausch", "var(--pen)"],
    ["España", "flamenco · folclore · bolera", "var(--leaf)"],
    ["Urbana", "breaking · popping · battles", "var(--sun)"],
  ], 270),
  tarjetas: [
    ["Elementos de la danza", "Cuerpo, espacio, tiempo y energía."],
    ["Kinesfera", "Espacio personal alrededor del cuerpo."],
    ["Niveles", "Bajo, medio y alto."],
    ["Pulso", "Latido regular de la música."],
    ["Canon", "Mismo movimiento con retraso entre bailarines."],
    ["Acciones de Laban", "Golpear, flotar, presionar, deslizar…"],
    ["Luis XIV", "Fundó la Real Academia de Danza (1661)."],
    ["Ballet romántico", "Puntas, tutú largo y temas sobrenaturales."],
    ["Martha Graham", "Contracción y relajación."],
    ["Pina Bausch", "Creadora de la danza-teatro."],
    ["Palos", "Estilos del flamenco según compás y carácter."],
    ["Battle", "Competición improvisada de danza urbana."],
  ],
  glosario: [
    ["Coreografía", "Composición organizada de movimientos para una danza."],
    ["Kinesfera", "Espacio personal que rodea el cuerpo."],
    ["Trayectoria", "Camino que dibuja el bailarín en el suelo."],
    ["Formación", "Disposición de un grupo de bailarines en el espacio."],
    ["Pulso", "Pulsación regular de la música."],
    ["Compás", "Agrupación regular de pulsos."],
    ["Síncopa", "Acento desplazado que rompe el ritmo esperado."],
    ["Canon", "Repetición de un movimiento con retraso entre bailarines."],
    ["Unísono", "Todos los bailarines hacen el mismo movimiento a la vez."],
    ["Calidad de movimiento", "Forma de ejecutar un movimiento según su energía."],
    ["En dehors", "Rotación de las piernas hacia fuera, base del ballet."],
    ["Puntas", "Técnica de baile sobre la punta de los pies con zapatillas especiales."],
    ["Contracción", "Movimiento del torso hacia dentro de la técnica Graham."],
    ["Palo", "Cada estilo del flamenco."],
    ["Zapateado", "Percusión rítmica con los pies en el flamenco."],
    ["Crew", "Grupo de bailarines de danza urbana."],
    ["Freeze", "Congelación en una postura difícil en el breaking."],
  ],
  situacion: {
    titulo: "Flashmob intercultural en el patio",
    reto: "Para la Semana de la Diversidad, vuestro grupo debe crear una coreografía de 2 minutos para un flashmob en el patio que mezcle, de forma respetuosa, movimientos de al menos dos estilos estudiados (por ejemplo, folclore y urbano) y que cualquier compañero pueda aprender en una sesión.",
    pasos: [
      "Elegid una canción y dos estilos; investigad su origen y tres movimientos característicos de cada uno.",
      "Cread un motivo de 8 tiempos para cada estilo y variadlos con los cuatro elementos.",
      "Organizad la coreografía en forma A-B-A con al menos un canon y un cambio de formación.",
      "Escribid la partitura de la coreografía tiempo a tiempo y dibujad la planta.",
      "Grabad un vídeo tutorial para que otros grupos la aprendan.",
      "Realizad el flashmob y recoged opiniones del público.",
    ],
    producto: "Coreografía de 2 minutos, partitura escrita, planta y vídeo tutorial.",
    evaluacion: [
      "Integra rasgos reconocibles de dos estilos con respeto a su origen.",
      "Usa con intención los cuatro elementos de la danza y al menos dos técnicas de composición.",
      "La partitura y el vídeo permiten aprender la coreografía.",
      "El grupo coopera y la ejecución es sincronizada.",
    ],
  },
  familias: ["Bailad en casa una canción variando el nivel, la velocidad y la energía.", "Preguntad a los abuelos qué bailes tradicionales conocen y pedidles que os enseñen un paso.", "Ved juntos un fragmento de ballet, otro de flamenco y otro de breaking y comparadlos.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Artes Escénicas y Danza 4º ESO (optativa autonómica en el marco del RD 217/2022): elementos del movimiento (cuerpo, espacio, tiempo, energía), historia de la danza escénica, danza española y flamenco, danzas tradicionales y urbanas, composición coreográfica y análisis.",
    ideas: ["Laboratorio de los cuatro elementos: un mismo motivo transformado por grupos.", "Visita de una escuela de danza o de un grupo folclórico local.", "Análisis comparado de vídeos de tres estilos con ficha común.", "Coordinación con Educación Física (expresión corporal) y Música (compás y pulso)."],
  },
  fuentes: [
    RD,
    { t: "Ballet Nacional de España (INAEM)", url: "https://balletnacional.mcu.es/" },
    { t: "UNESCO: el flamenco, Patrimonio Cultural Inmaterial", url: "https://ich.unesco.org/es/RL/el-flamenco-00363" },
    { t: "Rudolf Laban y el análisis del movimiento (Wikipedia)", url: "https://es.wikipedia.org/wiki/Rudolf_von_Laban" },
  ],
  revisado: "2026-11-13",
};
