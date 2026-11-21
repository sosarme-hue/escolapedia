// Fundamentos Artísticos 2º Bachillerato · Tema 7. Realismo, hiperrealismo, surrealismo y abstracción. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Realismo, hiperrealismo, surrealismo y abstracción",
  saber: ["B"],
  objetivos: [
    "Distinguir los distintos sentidos de «realismo» en el arte",
    "Explicar el Realismo del siglo XIX y el hiperrealismo de los años setenta",
    "Caracterizar el surrealismo y sus técnicas, y su influencia en el cine y la publicidad",
    "Explicar los orígenes de la abstracción y sus dos grandes caminos",
    "Situar a artistas españoles en cada uno de estos lenguajes",
  ],
  claves: ["Realismo", "Courbet", "hiperrealismo", "fotorrealismo", "inconsciente", "automatismo", "método paranoico-crítico", "abstracción lírica", "abstracción geométrica", "expresionismo abstracto", "informalismo"],
  pregunta: {
    texto: "¿Puede un cuadro ser más «real» que una fotografía y, a la vez, uno sin figuras ser igual de verdadero?",
    respuesta: "Sí, porque «realidad» significa cosas distintas para cada artista. Los <b>realistas</b> del siglo XIX quisieron pintar la vida tal como era, incluida la pobreza. Los <b>hiperrealistas</b> pintaron con más detalle que una fotografía. Los <b>surrealistas</b> buscaron una realidad superior, la de los sueños y el inconsciente. Y los <b>abstractos</b> renunciaron a representar objetos para expresar emociones o un orden interior. Este tema recorre esas cuatro respuestas a la misma pregunta: ¿qué es lo real?",
  },
  lectura: {
    titulo: "El membrillero",
    html: `<p>Otoño de 1990. En el patio de su casa de Madrid, Antonio López pinta un membrillo. Ha colocado plomadas y marcas en las hojas para medir con exactitud cómo los frutos maduran y bajan por su peso cada día. El cineasta Víctor Erice lo filma durante semanas.</p><p>El cuadro nunca se termina: la luz de otoño cambia demasiado deprisa y los membrillos acaban cayendo al suelo. La película, <i>El sol del membrillo</i>, ganó un premio en Cannes. Antonio López, a quien muchos llaman hiperrealista, dice que no copia fotografías: pinta lo que ve, despacio, durante años. Su obra muestra que el realismo no es una técnica, sino una manera de mirar.</p>`,
  },
  bloques: [
    { h: "El Realismo del siglo XIX", p: [
      "Hacia 1850, en Francia, el <mark>Realismo</mark> reaccionó contra la pintura académica de dioses y héroes y contra la imaginación romántica. Su líder, <b>Gustave Courbet</b>, dijo que solo pintaría lo que pudiera ver: «muéstrenme un ángel y lo pintaré». En <i>Un entierro en Ornans</i> (1849-1850) dio a un funeral de pueblo el tamaño monumental de la pintura de historia, y en <i>Los picapedreros</i> retrató el trabajo más duro.",
      "<b>Jean-François Millet</b> pintó a los campesinos con dignidad en <i>Las espigadoras</i>, y <b>Honoré Daumier</b> denunció en caricaturas y cuadros la injusticia social. El Realismo tenía un fuerte compromiso <b>social</b>: mostrar la vida de las clases populares, sin idealizarla. En 1855, rechazado en la Exposición Universal, Courbet montó su propio «Pabellón del Realismo».",
    ], extra: CITA("La pintura es un arte esencialmente concreto y no puede consistir más que en la representación de las cosas reales y existentes.", "Gustave Courbet, 1861 (traducción propia)"), svg: cuadro("Pintores realistas", [["Pintor", "Obra", "Tema"], ["Courbet", "Un entierro en Ornans", "vida de pueblo"], ["Millet", "Las espigadoras", "campesinos"], ["Daumier", "El vagón de tercera", "pobreza urbana"]]) },
    { h: "Los muchos realismos", p: [
      "La palabra realismo tiene varios sentidos. Puede referirse a una <b>época</b> (el Realismo francés de 1850), pero también a una <b>actitud</b> que reaparece en muchos momentos: el naturalismo de Caravaggio, el realismo de Velázquez, el realismo social de los años treinta o la Nueva Objetividad alemana, que retrató con frialdad la Alemania de entreguerras.",
      "En el siglo XX, el realismo convivió con las vanguardias. En Estados Unidos, <b>Edward Hopper</b> pintó la soledad de las ciudades: gasolineras, cafeterías nocturnas, habitaciones de hotel. En la Unión Soviética se impuso el <mark>realismo socialista</mark>, un arte oficial de propaganda. En España, el grupo de los realistas madrileños, con Antonio López, Isabel Quintanilla o María Moreno, defendió la pintura lenta de lo cotidiano.",
    ], svg: rueda("REALISMOS", ["Realismo 1850", "Nueva Objetividad", "Hopper", "realismo socialista", "realistas madrileños", "hiperrealismo"]) },
    { h: "El hiperrealismo", p: [
      "A finales de los años sesenta, en Estados Unidos, surgió el <mark>hiperrealismo</mark> o fotorrealismo. Sus pintores partían de <b>fotografías</b>, que proyectaban o cuadriculaban sobre el lienzo, y las reproducían con un detalle extremo, a menudo a gran tamaño. Los temas eran urbanos y cotidianos: escaparates, coches cromados, cafeterías, motos, rostros gigantes.",
      "<b>Richard Estes</b> pintó los reflejos de los escaparates de Nueva York; <b>Chuck Close</b>, enormes retratos de rostros; <b>Ralph Goings</b>, camionetas y cafeterías. En escultura, <b>Duane Hanson</b> hizo figuras de turistas y limpiadoras de resina, con ropa real, que el público confunde con personas. El hiperrealismo dialoga con el pop art: la imagen fotográfica como paisaje de la sociedad de consumo.",
    ], svg: flujo("Método fotorrealista", ["Hacer o elegir una fotografía", "Cuadricular o proyectar sobre el lienzo", "Pintar con detalle extremo", "Ampliar a gran formato"]) },
    { h: "El surrealismo", p: [
      "El <mark>surrealismo</mark> nació en París en 1924, con el <i>Manifiesto</i> del poeta <b>André Breton</b>. Inspirado en las teorías de Sigmund Freud sobre el inconsciente, quería liberar la imaginación de la razón, la moral y las convenciones. Buscaba una «realidad superior» en los sueños, el deseo, el azar y la locura.",
      "Hubo dos grandes caminos. El <b>automatismo</b> dejaba fluir la mano sin control consciente: Joan Miró, André Masson o Max Ernst con sus frotados (frottage). El <b>surrealismo onírico</b> pintaba imágenes de sueño con técnica realista y precisa, para hacer creíble lo imposible: <b>Salvador Dalí</b>, René Magritte o Yves Tanguy. Dalí inventó el <b>método paranoico-crítico</b>, que provocaba asociaciones delirantes e imágenes dobles.",
    ], extra: OBRA("La persistencia de la memoria", "Salvador Dalí", "1931, óleo sobre lienzo, MoMA"), svg: versus("Dos caminos surrealistas", ["Automatismo", ["mano libre", "azar", "formas orgánicas", "Miró, Masson, Ernst"]], ["Onírico", ["imágenes de sueño", "técnica precisa", "lo imposible creíble", "Dalí, Magritte"]]) },
    { h: "Surrealismo en el cine y la publicidad", p: [
      "El surrealismo fue mucho más que pintura: poesía, fotografía, objetos y, sobre todo, <b>cine</b>. <b>Luis Buñuel</b> y Dalí rodaron <i>Un perro andaluz</i> (1929), con su famoso ojo cortado por una navaja, y Buñuel siguió toda su carrera con películas surrealistas. Dalí diseñó la secuencia de un sueño para <i>Recuerda</i> de Hitchcock (1945).",
      "Su <mark>influencia posterior</mark> es enorme. La <b>publicidad</b> aprendió del surrealismo a sorprender con imágenes imposibles: objetos que flotan, escalas absurdas, cuerpos fusionados. Magritte inspiró a fotógrafos y diseñadores; los videoclips, el cine de David Lynch o de Guillermo del Toro y muchas campañas actuales usan su lenguaje. Dalí diseñó el logotipo de Chupa Chups en 1969.",
    ], svg: cajas("Surrealismo fuera del cuadro", [["Cine", "Un perro andaluz, 1929"], ["Hitchcock", "sueño de Recuerda"], ["Publicidad", "imágenes imposibles"], ["Diseño", "logo de Chupa Chups"]]) },
    { h: "Los orígenes de la abstracción", p: [
      "La <mark>abstracción</mark> renuncia a representar objetos reconocibles: el cuadro es solo forma, color, línea y textura. Surgió hacia 1910-1915 de varios caminos a la vez. <b>Vasili Kandinsky</b>, en Múnich, pintó acuarelas y composiciones sin figuras y escribió <i>De lo espiritual en el arte</i> (1911): el color, decía, toca el alma como la música.",
      "Casi al mismo tiempo, <b>Kazimir Malévich</b>, en Rusia, presentó en 1915 su <i>Cuadrado negro</i> sobre fondo blanco, origen del suprematismo. En Holanda, <b>Piet Mondrian</b> fue simplificando un árbol hasta llegar a una retícula de líneas negras y rectángulos de colores primarios: el neoplasticismo. Como vimos, la sueca <b>Hilma af Klint</b> había pintado obras abstractas desde 1906.",
    ], svg: crono("Nace la abstracción", [["1906", "Hilma af Klint"], ["1911", "Kandinsky, De lo espiritual"], ["1915", "Cuadrado negro"], ["1917", "De Stijl"], ["1921", "Mondrian, retículas"], ["1947", "Pollock, dripping"]]) },
    { h: "Dos caminos: lírica y geométrica", p: [
      "Desde el principio, la abstracción siguió dos grandes caminos. La <mark>abstracción lírica</mark> o expresiva, cuyo origen está en Kandinsky, usa formas libres, manchas y gestos para expresar emociones. La <b>abstracción geométrica</b>, de Malévich y Mondrian, busca un orden universal con líneas rectas, planos y colores puros.",
      "Tras la Segunda Guerra Mundial, la abstracción lírica dominó con el <b>expresionismo abstracto</b> de Nueva York: Jackson Pollock dejaba gotear la pintura sobre lienzos en el suelo (<i>dripping</i>), y Mark Rothko pintaba grandes campos de color. En Europa se llamó <b>informalismo</b>. La geométrica continuó en el arte óptico (op art) de Vasarely y en el minimalismo.",
    ], v: ["rea-b", "Kandinsky, el mago de la pintura abstracta"], svg: versus("Dos abstracciones", ["Lírica", ["formas libres", "emoción, gesto", "Kandinsky", "Pollock, Rothko"]], ["Geométrica", ["líneas y planos", "orden universal", "Malévich, Mondrian", "op art, minimal"]]) },
    { h: "La abstracción en España", p: [
      "En España, la abstracción triunfó en los años cincuenta, a pesar de la dictadura. En 1957 nació en Madrid el grupo <mark>El Paso</mark>, con Antonio Saura, Manolo Millares, Rafael Canogar y Luis Feito: un <b>informalismo</b> dramático, de negros, blancos y rojos, con arpilleras rasgadas en el caso de Millares. En Barcelona, <b>Antoni Tàpies</b> creó una pintura matérica con arena, polvo de mármol y objetos.",
      "En Cuenca, Fernando Zóbel, Gustavo Torner y Gerardo Rueda fundaron en 1966 el <b>Museo de Arte Abstracto Español</b> en las Casas Colgadas. La abstracción geométrica tuvo representantes como el Equipo 57 o Pablo Palazuelo, y en escultura destacaron <b>Jorge Oteiza</b> y <b>Eduardo Chillida</b>, con sus vacíos y sus formas de hierro.",
    ], svg: cuadro("Abstracción española", [["Artista", "Rasgo"], ["Saura (El Paso)", "gesto y negro"], ["Millares (El Paso)", "arpilleras"], ["Tàpies", "pintura matérica"], ["Chillida", "hierro y vacío"]]) },
  ],
  figura: { titulo: "Realismo, surrealismo y abstracción de un vistazo", aria: "Resumen del realismo, el hiperrealismo, el surrealismo y la abstracción", cols: [
    ["Realismo", ["Courbet, Millet", "compromiso social", "Hopper", "Antonio López"]],
    ["Hiperrealismo", ["desde 1968", "parte de fotos", "Estes, Close", "Duane Hanson"]],
    ["Surrealismo", ["Breton, 1924", "automatismo", "Dalí, Magritte", "cine y publicidad"]],
    ["Abstracción", ["Kandinsky", "Malévich, Mondrian", "Pollock, Rothko", "El Paso, Tàpies"]],
  ] },
  video: ["rea-a", "Qué es el surrealismo"],
  ejemplos: [
    ["Comenta La persistencia de la memoria de Dalí.", ["Paisaje de la costa de Cadaqués.", "Relojes blandos que se derriten.", "Técnica minuciosa, casi fotográfica.", "Tema: el tiempo y el sueño."], "Surrealismo onírico."],
    ["Explica por qué Un entierro en Ornans escandalizó.", ["Tema de pueblo, sin héroes.", "Tamaño de pintura de historia.", "Figuras feas y reales.", "Rompe la jerarquía académica."], "Manifiesto del Realismo."],
    ["Compara un cuadro de Mondrian con uno de Pollock.", ["Mondrian: líneas rectas y colores primarios.", "Pollock: goteo, gesto, sin centro.", "Orden frente a energía.", "Geométrica frente a lírica."], "Dos caminos de la abstracción."],
  ],
  errores: [
    "Confundir el Realismo del siglo XIX con el hiperrealismo de los años setenta.",
    "Llamar surrealista a cualquier cosa rara: el surrealismo tiene teoría y métodos.",
    "Creer que la abstracción es arte sin reglas: tiene composición, color y ritmo.",
    "Pensar que Kandinsky fue el único inventor de la abstracción.",
  ],
  ejercicios: {
    b: [
      ["¿Qué pintaba el Realismo de Courbet?", "La realidad visible y contemporánea, especialmente la vida de campesinos y trabajadores, sin idealizarla: Un entierro en Ornans, Los picapedreros."],
      ["¿Qué es el hiperrealismo?", "Una corriente surgida en Estados Unidos a finales de los sesenta que pinta a partir de fotografías con detalle extremo, sobre temas urbanos y cotidianos."],
      ["¿Quién escribió el Manifiesto surrealista y en qué año?", "André Breton, en 1924."],
      ["Nombra tres pioneros de la abstracción.", "Kandinsky, Malévich y Mondrian (también Hilma af Klint)."],
    ],
    m: [
      ["Explica el automatismo surrealista.", "Técnica que deja actuar la mano sin control de la razón para que aflore el inconsciente: dibujo automático, frottage, decalcomanía. Miró, Masson, Ernst."],
      ["¿Cómo influyó el surrealismo en la publicidad?", "Le enseñó a sorprender con imágenes imposibles: escalas absurdas, objetos que flotan o cuerpos fusionados, para captar la atención y asociar el producto a lo deseable."],
      ["Diferencia abstracción lírica y geométrica.", "La lírica usa formas libres, manchas y gestos para expresar emociones (Kandinsky, Pollock); la geométrica usa líneas rectas, planos y colores puros buscando orden (Malévich, Mondrian)."],
      ["¿Qué fue El Paso?", "Grupo informalista madrileño fundado en 1957 (Saura, Millares, Canogar, Feito), con una pintura abstracta gestual y dramática."],
    ],
    a: [
      ["Crea una imagen surrealista con collage o fotografía y explica qué técnica has usado.", "Respuesta práctica. Debe nombrar la técnica (collage, montaje, cambio de escala, objeto fuera de contexto) y explicar la relación con el sueño o el inconsciente."],
      ["Argumenta si el hiperrealismo es «solo copiar fotos».", "Respuesta abierta. Puede señalar que la elección del motivo, el encuadre, la escala y la intensidad del color transforman la foto, y que reflexiona sobre la imagen en la sociedad de consumo; o defender lo contrario con argumentos."],
    ],
  },
  quiz: [
    ["«Muéstrenme un ángel y lo pintaré» es de…", ["Courbet", "Dalí", "Kandinsky", "Breton"], "Realismo."],
    ["Las espigadoras es de…", ["Millet", "Daumier", "Hopper", "Courbet"], "Campesinas."],
    ["Pintó la soledad urbana en cafeterías nocturnas…", ["Edward Hopper", "Pollock", "Magritte", "Malévich"], "Estados Unidos."],
    ["El hiperrealismo parte de…", ["fotografías", "sueños", "formas geométricas", "el automatismo"], "Fotorrealismo."],
    ["Duane Hanson hacía…", ["esculturas hiperrealistas", "cuadros abstractos", "películas", "carteles"], "Resina y ropa real."],
    ["El surrealismo se inspira en…", ["Freud y el inconsciente", "Courbet", "la geometría", "la fotografía"], "Breton, 1924."],
    ["Un perro andaluz es de…", ["Buñuel y Dalí", "Hitchcock", "Magritte", "Miró"], "1929."],
    ["El Cuadrado negro es de…", ["Malévich", "Mondrian", "Kandinsky", "Rothko"], "1915."],
    ["El dripping es la técnica de…", ["Pollock", "Mondrian", "Dalí", "Estes"], "Goteo."],
    ["Las arpilleras rasgadas son de…", ["Millares", "Tàpies", "Saura", "Chillida"], "El Paso."],
  ],
  examen: [
    ["De lo espiritual en el arte lo escribió…", ["Kandinsky", "Breton", "Courbet", "Mondrian"], "1911."],
    ["El método paranoico-crítico es de…", ["Dalí", "Miró", "Magritte", "Ernst"], "Imágenes dobles."],
    ["El Museo de Arte Abstracto Español está en…", ["Cuenca", "Bilbao", "Sevilla", "Valencia"], "Casas Colgadas."],
    ["El realismo socialista fue…", ["arte oficial soviético", "un grupo surrealista", "abstracción geométrica", "hiperrealismo"], "Propaganda."],
  ],
  feynman: ["Realismo de Courbet", "hiperrealismo y fotografía", "automatismo y surrealismo onírico", "abstracción lírica y geométrica"],
  mapa: ["¿QUÉ ES LO REAL?", [["Realismo", "Courbet, Hopper, López"], ["Hiperrealismo", "fotografía, detalle"], ["Surrealismo", "sueño, inconsciente"], ["Abstracción", "lírica y geométrica"]]],
  tarjetas: [
    ["Realismo", "Pintar la vida real, Courbet, 1850."],
    ["Hiperrealismo", "Detalle extremo a partir de fotos."],
    ["Surrealismo", "Sueño e inconsciente, Breton 1924."],
    ["Automatismo", "Mano libre sin control racional."],
    ["Dalí", "Surrealismo onírico, paranoico-crítico."],
    ["Abstracción lírica", "Formas libres y emoción."],
    ["Abstracción geométrica", "Líneas, planos, colores puros."],
    ["Informalismo", "Abstracción gestual y matérica europea."],
  ],
  glosario: [
    ["Nueva Objetividad", "Realismo frío alemán de entreguerras."],
    ["Fotorrealismo", "Otro nombre del hiperrealismo pictórico."],
    ["Inconsciente", "Parte de la mente que no controlamos, según Freud."],
    ["Frottage", "Frotado de lápiz sobre papel encima de una textura."],
    ["Suprematismo", "Abstracción geométrica de Malévich."],
    ["Neoplasticismo", "Abstracción de Mondrian con retícula y colores primarios."],
    ["Dripping", "Goteo de pintura sobre el lienzo."],
    ["Pintura matérica", "Pintura con arena, polvo o materiales que dan relieve."],
  ],
  situacion: SIT(
    "Cuatro miradas a un objeto",
    "Para el blog del departamento, cada grupo representará un mismo objeto cotidiano con cuatro lenguajes distintos.",
    ["Elegid un objeto sencillo (una silla, una fruta, una mochila)", "Representadlo de forma realista y en versión hiperrealista desde foto", "Cread una versión surrealista con cambio de contexto o escala", "Haced una versión abstracta a partir de su color y forma"],
    "Cuatro obras y un texto que explique cada lenguaje.",
    ["Coherencia de cada versión con su lenguaje", "Calidad técnica", "Explicación con el vocabulario del tema"],
  ),
  familias: [
    "Ved juntos El sol del membrillo o un fragmento sobre Antonio López.",
    "Buscad anuncios con imágenes surrealistas y comentadlos.",
    "Visitad el Museo Reina Sofía o su web: Dalí, Miró, Tàpies y El Paso.",
  ],
  saberes: "el Realismo: conceptos y enfoques; el Hiperrealismo; el Surrealismo y sus influencias posteriores en el arte, el cine y la publicidad; la abstracción: orígenes y evolución.",
  ideas: [
    "Hacer un ejercicio de dibujo automático de cinco minutos con música.",
    "Comparar en pantalla una foto y un cuadro hiperrealista sin decir cuál es cuál.",
    "Analizar tres anuncios actuales con recursos surrealistas.",
  ],
  fuentes: [WIKI("Surrealismo", "Surrealismo"), WIKI("Arte abstracto", "Arte_abstracto"), WIKI("Hiperrealismo", "Hiperrealismo")],
});
