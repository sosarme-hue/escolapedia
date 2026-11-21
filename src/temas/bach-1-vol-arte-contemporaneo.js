// Volumen, 1º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-vol");

module.exports = B.tema({
  titulo: "El volumen en el arte contemporáneo",
  minutos: 60,
  objetivos: [
    "Conocer las grandes rupturas de la escultura desde Rodin",
    "Reconocer la abstracción, el minimalismo, el pop y el land art",
    "Valorar la escultura española del siglo XX",
    "Comprender la instalación, el arte público y las nuevas tecnologías",
  ],
  claves: ["vanguardias", "abstracción", "minimalismo", "pop art", "land art", "instalación", "arte público", "site-specific"],
  pregunta: {
    texto: "¿Es escultura una espiral de rocas en un lago, un globo de acero gigante o una sala que puedes recorrer?",
    respuesta: "Para el arte contemporáneo, sí. En el último siglo la escultura salió del pedestal y del museo: se volvió <mark>abstracta, gigante, efímera o habitable</mark>. Hoy hablamos más de «obra en volumen» o de «obra tridimensional» que de estatua.",
  },
  lectura: {
    titulo: "Un globo que refleja la ciudad",
    html: `<p>En el Millennium Park de Chicago hay una enorme gota de acero inoxidable pulido que todo el mundo llama «la Judía». Es <i>Cloud Gate</i>, de Anish Kapoor (2006). No representa a nadie: refleja el cielo, los rascacielos y a la gente que se acerca, que se ríe al ver su imagen deformada.</p>
    <p>La obra no está completa sin el público. Esa idea resume buena parte del arte contemporáneo: el volumen ya no es solo una figura que se mira, sino una <b>experiencia</b> en un lugar. En este tema recorrerás el camino que va de Rodin a las obras de hoy.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Rodin y la ruptura",
      html: `<p>Auguste <b>Rodin</b> (1840-1917) es el puente entre la tradición y la modernidad. Sus figuras, como <i>El pensador</i> o <i>Los burgueses de Calais</i>, muestran superficies vibrantes, partes inacabadas y fragmentos, como torsos sin cabeza, que se presentan como obras completas.</p>
      <p>Además, bajó a los burgueses de Calais casi al nivel del espectador, sin un gran pedestal heroico. <b>Camille Claudel</b>, escultora de enorme talento, trabajó con él y desarrolló una obra propia llena de movimiento, como <i>La ola</i>. Tras ellos, la escultura ya no volvió a ser igual.</p>`,
      svg: B.cajas("Lo nuevo de Rodin", [["Superficie", "vibrante|huella del barro"], ["Fragmento", "torsos sin cabeza|como obra"], ["Non finito", "la forma|emerge"], ["Sin pedestal", "cerca del|espectador"]]),
    },
    {
      h: "Las vanguardias",
      html: `<p>A principios del siglo XX las vanguardias rompieron con la imitación. El <b>cubismo</b> descompuso la forma en planos: Picasso construyó una <i>Guitarra</i> de cartón y chapa (1912-1914). El <b>futurismo</b> buscó la velocidad: Umberto Boccioni creó <i>Formas únicas de continuidad en el espacio</i> (1913), una figura que parece cortar el viento.</p>
      <p>Constantin <b>Brancusi</b> simplificó las formas hasta su esencia: su <i>Pájaro en el espacio</i> es una línea pulida que sugiere el vuelo. El dadaísmo trajo el ready-made de Duchamp y el constructivismo, la construcción con materiales industriales.</p>`,
      svg: B.cronologia("Vanguardias y volumen", [["1912", "Guitarra, Picasso"], ["1913", "Boccioni"], ["1913", "Rueda, Duchamp"], ["1923", "Brancusi"]]),
      video: { id: "86LlDVrGK7s", titulo: "Las vanguardias en la escultura", canal: "ArteHistoria", vistas: 13175 },
    },
    {
      h: "Abstracción orgánica",
      html: `<p>Entre los años treinta y sesenta, muchos escultores buscaron formas abstractas inspiradas en la naturaleza. <b>Henry Moore</b> hizo figuras reclinadas perforadas que recuerdan colinas y huesos. <b>Barbara Hepworth</b> abrió huecos en piedra y madera y tensó cuerdas en su interior. Jean <b>Arp</b> creó formas suaves como cantos rodados.</p>
      <p>En este lenguaje el vacío, la textura del material y la relación con el paisaje son fundamentales. Muchas de sus obras se piensan para jardines y espacios abiertos, donde la luz y la vegetación cambian a lo largo del día.</p>`,
      svg: B.estrella("Abstracción orgánica", "Orgánica", ["Moore", "Hepworth", "Arp", "Vacío", "Paisaje"]),
    },
    {
      h: "La escultura española del siglo XX",
      html: `<p>España dio grandes escultores modernos. <b>Julio González</b> y <b>Pablo Gargallo</b> revolucionaron el hierro y la chapa. Tras ellos, <b>Jorge Oteiza</b> investigó la «desocupación» del espacio en cajas metafísicas, y <b>Eduardo Chillida</b> trabajó hierro, acero corten, alabastro y hormigón en obras como el <i>Peine del viento</i> (San Sebastián) o el <i>Elogio del horizonte</i> (Gijón).</p>
      <p>Otros nombres son Ángel Ferrant, Martín Chirino, Pablo Serrano, Susana Solano, <b>Cristina Iglesias</b>, con sus pasajes y celosías vegetales, y <b>Jaume Plensa</b>, con sus grandes cabezas de mujer hechas de letras o de malla.</p>`,
      svg: B.capas("Escultura española moderna", [["González", "hierro soldado"], ["Oteiza", "vacío y cajas"], ["Chillida", "acero, mar, horizonte"], ["Plensa", "cabezas de letras"]]),
    },
    {
      h: "Minimalismo y pop",
      html: `<p>En los años sesenta, el <b>minimalismo</b> redujo la obra a formas geométricas simples, repetidas y fabricadas industrialmente: cajas de Donald Judd, ladrillos de Carl Andre, enormes planchas de acero de Richard Serra que el espectador recorre. La obra no representa nada: es lo que es y cambia nuestra percepción del espacio.</p>
      <p>El <b>pop art</b> hizo lo contrario: llenó la escultura de objetos de consumo. Claes Oldenburg convirtió pinzas, helados o cucharas en monumentos gigantes, y Jeff Koons creó el perro de flores <i>Puppy</i> del Guggenheim de Bilbao. Escala y humor se unen para hablar de la sociedad de consumo.</p>`,
      svg: B.comparar("Minimalismo y pop", ["Minimalismo", ["geometría simple", "repetición", "material industrial", "Judd, Serra"]], ["Pop", ["objetos de consumo", "escala gigante", "color y humor", "Oldenburg, Koons"]]),
      video: { id: "eC5XLVS_rlo", titulo: "10 esculturas modernas más famosas que existen en el mundo", canal: "MUNDOTOPS", vistas: 45157 },
    },
    {
      h: "Land art: la naturaleza como taller",
      html: `<p>El <b>land art</b> o arte de la tierra (desde finales de los sesenta) sacó la obra al paisaje y usó materiales naturales. Robert Smithson construyó con rocas y tierra la <i>Spiral Jetty</i> (1970), una espiral en el Gran Lago Salado de Utah. Christo y Jeanne-Claude envolvieron edificios y costas con tela.</p>
      <p>Andy Goldsworthy crea obras <b>efímeras</b> con hojas, hielo, piedras o ramas que el tiempo destruye; la fotografía es lo que queda. El land art plantea preguntas sobre la naturaleza, el paso del tiempo y el respeto por el medio ambiente.</p>`,
      svg: B.cajas("Claves del land art", [["Paisaje", "la obra|está fuera"], ["Natural", "tierra, piedra|hojas, hielo"], ["Efímero", "el tiempo|la transforma"], ["Registro", "foto y vídeo|documentan"]]),
      video: { id: "W_nRhY6u9YI", titulo: "Land art: características, artistas y principales obras", canal: "Solarpedia", vistas: 52787 },
    },
    {
      h: "Instalación y obra habitable",
      html: `<p>La <b>instalación</b> es una obra que ocupa y transforma todo un espacio, en el que el espectador entra. Combina objetos, luz, sonido, vídeo o materiales diversos. Yayoi Kusama crea salas de espejos infinitos; Louise Bourgeois construyó celdas cargadas de recuerdos y la araña gigante <i>Mamá</i>, también en Bilbao.</p>
      <p>Muchas instalaciones son <b>site-specific</b>: se crean para un lugar concreto y cambian de sentido si se trasladan. Otras son interactivas y no existen sin la participación del público. El volumen se convierte así en una experiencia que se vive con todo el cuerpo.</p>`,
      svg: B.estrella("La instalación", "Instalación", ["Espacio", "Luz", "Sonido", "Público", "Lugar"]),
      video: { id: "J3vgdNJ9yS4", titulo: "¿Qué es la instalación artística?", canal: "Canal22", vistas: 420586 },
    },
    {
      h: "Arte público y nuevas tecnologías",
      html: `<p>Hoy el volumen está en las calles, en los parques y en los edificios. El <b>arte público</b>, como <i>Cloud Gate</i> de Anish Kapoor o las cabezas de Plensa, crea lugares de encuentro y de identidad. Su reto es dialogar con la ciudad y con quienes la habitan.</p>
      <p>Las <b>nuevas tecnologías</b> amplían las posibilidades: modelado e impresión 3D, fresado por control numérico, luz led, sensores, realidad aumentada y esculturas que solo existen en entornos digitales. Pero la pregunta de fondo sigue siendo la de siempre: cómo dar forma a una idea en el espacio y cómo nos relacionamos con ella.</p>`,
      svg: B.flujo("Del boceto a la obra digital", ["Boceto a mano", "Modelado 3D en ordenador", "Impresión 3D de la maqueta", "Fabricación final", "Instalación en el lugar"]),
    },
  ],
  figura: {
    titulo: "El volumen contemporáneo en cuatro claves",
    items: [["Ruptura", "Rodin", "fragmento", "sin pedestal"], ["Forma", "◆ ●", "abstracción", "y minimalismo"], ["Lugar", "⛰", "land art", "arte público"], ["Experiencia", "◎", "instalación", "y tecnología"]],
  },
  video: { id: "scZf0l4529M", titulo: "¿Qué es el arte contemporáneo? Todo lo que debes saber en 11 minutos", canal: "Artefact", vistas: 66669 },
  quiz: [
    ["¿Qué escultor es considerado el puente hacia la escultura moderna?", ["Bernini", "Rodin", "Fidias", "Donatello"], 1, "Fragmento, superficie vibrante, menos pedestal."],
    ["Formas únicas de continuidad en el espacio es una obra…", ["cubista", "futurista", "barroca", "minimalista"], 1, "Boccioni, 1913."],
    ["Brancusi es conocido por…", ["la imaginería", "simplificar la forma hasta su esencia", "los móviles", "el land art"], 1, "Pájaro en el espacio."],
    ["Las figuras reclinadas y perforadas son de…", ["Henry Moore", "Jeff Koons", "Donald Judd", "Christo"], 0, "Abstracción orgánica."],
    ["El Elogio del horizonte está en…", ["Bilbao", "Gijón", "Valencia", "Sevilla"], 1, "Obra de Chillida."],
    ["Las cajas geométricas repetidas de Donald Judd son…", ["pop art", "minimalismo", "barroco", "land art"], 1, "Formas simples e industriales."],
    ["Una pinza de la ropa gigante en una plaza recuerda al…", ["minimalismo", "pop art", "constructivismo", "Renacimiento"], 1, "Claes Oldenburg."],
    ["La Spiral Jetty de Smithson es un ejemplo de…", ["instalación en museo", "land art", "imaginería", "ready-made"], 1, "Rocas y tierra en un lago."],
    ["Una obra creada para un lugar concreto es…", ["site-specific", "ready-made", "non finito", "bizcocho"], 0, "Cambia de sentido si se traslada."],
    ["Cloud Gate, en Chicago, es de…", ["Jaume Plensa", "Anish Kapoor", "Richard Serra", "Jeff Koons"], 1, "Acero pulido que refleja la ciudad."],
  ],
  examen: [
    ["Una obra de hojas y hielo que se deshace y solo queda en fotos es…", ["minimalismo", "land art efímero", "pop art", "talla"], 1, "Como las de Goldsworthy."],
    ["Una sala de espejos y luces en la que entra el público es una…", ["instalación", "talla directa", "medalla", "colada"], 0, "Transforma todo el espacio."],
    ["Puppy y Mamá, en el Guggenheim de Bilbao, son de…", ["Koons y Bourgeois", "Rodin y Claudel", "Moore y Hepworth", "Oteiza y Chillida"], 0, "Pop y escultura de gran escala."],
    ["¿Qué artista español investigó la «desocupación» del espacio?", ["Gargallo", "Oteiza", "Plensa", "Gregorio Fernández"], 1, "Cajas metafísicas."],
    ["El minimalismo y el pop se diferencian en que el pop…", ["evita los objetos", "usa objetos de consumo y humor", "solo usa cubos", "no tiene color"], 1, "Escala gigante y cultura popular."],
  ],
  feynman: ["Qué cambió Rodin", "Tres vanguardias y sus escultores", "Diferencia entre minimalismo, pop y land art", "Qué es una instalación site-specific"],
  mapa: ["VOLUMEN CONTEMPORÁNEO", [["Ruptura", "Rodin · vanguardias · Brancusi"], ["Abstracción", "Moore · Oteiza · Chillida"], ["Años 60", "minimalismo · pop · land art"], ["Hoy", "instalación · arte público · 3D"]]],
  tarjetas: [
    ["Fragmento", "Parte de una figura presentada como obra completa."],
    ["Futurismo", "Vanguardia que exaltó la velocidad y el movimiento."],
    ["Abstracción orgánica", "Formas abstractas inspiradas en la naturaleza."],
    ["Minimalismo", "Formas geométricas simples, repetidas e industriales."],
    ["Pop art", "Arte que usa objetos e imágenes de consumo."],
    ["Land art", "Obras en el paisaje con materiales naturales."],
    ["Instalación", "Obra que ocupa y transforma un espacio."],
    ["Site-specific", "Obra creada para un lugar concreto."],
  ],
  ejemplos: [
    ["Compara El pensador de Rodin y el Pájaro en el espacio de Brancusi.", ["Rodin: figura humana, superficie vibrante, expresiva.", "Brancusi: forma abstracta, pulida, esencial.", "Ambos rompen con la escultura académica."], "De la figura expresiva a la forma pura."],
    ["Analiza el Peine del viento como obra site-specific.", ["Anclado en las rocas de San Sebastián.", "Acero corten que se oxida con el mar.", "El viento y el agua forman parte de la obra."], "No se entiende fuera de su lugar."],
    ["Clasifica: Spiral Jetty, Puppy, cajas de Judd, sala de espejos de Kusama.", ["Spiral Jetty: land art.", "Puppy: pop.", "Cajas de Judd: minimalismo.", "Kusama: instalación."], "Cuatro caminos del volumen contemporáneo."],
  ],
  errores: [
    "Pensar que solo es escultura lo que representa figuras.",
    "Juzgar una obra sin conocer su lugar ni su intención.",
    "Confundir minimalismo y pop.",
    "Olvidar el papel del público en la instalación.",
  ],
  ejercicios: {
    b: [
      ["Cita tres novedades de Rodin.", "Superficie vibrante, fragmento como obra, non finito y menos pedestal."],
      ["Relaciona: Boccioni, Brancusi, Moore.", "Boccioni: futurismo. Brancusi: simplificación esencial. Moore: abstracción orgánica."],
      ["Nombra tres escultores españoles del siglo XX.", "Julio González, Oteiza y Chillida (también Gargallo, Plensa, Cristina Iglesias)."],
      ["Define instalación.", "Obra que ocupa y transforma todo un espacio en el que entra el espectador."],
    ],
    m: [
      ["Compara minimalismo y pop art.", "Minimalismo: geometría simple, repetición, material industrial. Pop: objetos de consumo, escala gigante, color y humor."],
      ["¿Qué preguntas plantea el land art?", "Sobre la naturaleza, el paso del tiempo, lo efímero y el respeto al medio ambiente."],
      ["Explica qué significa site-specific con un ejemplo.", "Obra creada para un lugar concreto; el Peine del viento o una instalación en una iglesia."],
      ["¿Qué aportan las nuevas tecnologías al volumen?", "Modelado e impresión 3D, fresado, luz, sensores, interacción y obras digitales."],
    ],
    a: [
      ["Elige un artista contemporáneo y prepara una presentación con tres obras y su análisis.", "Respuesta abierta: identificación, lenguaje formal, lugar e intención."],
      ["Diseña una intervención de land art efímera en el entorno del centro y documéntala.", "Respuesta abierta: materiales naturales, respeto al entorno, bocetos y fotos del proceso y del resultado."],
    ],
  },
  glosario: [
    ["Vanguardia", "Movimiento artístico que rompe con la tradición."],
    ["Cubismo", "Vanguardia que descompone la forma en planos."],
    ["Efímero", "Que dura poco tiempo."],
    ["Arte público", "Obra situada en espacios de todos."],
    ["Interactivo", "Que responde a la acción del público."],
    ["Realidad aumentada", "Imágenes digitales superpuestas al mundo real."],
    ["Acero inoxidable", "Acero que no se oxida y puede pulirse."],
    ["Celosía", "Enrejado que deja pasar luz y aire."],
  ],
  situacion: {
    titulo: "Intervención en el centro",
    reto: "Proyectar e instalar una obra contemporánea efímera en un espacio del centro.",
    pasos: [
      "Elegid una corriente (land art, pop, minimalismo, instalación) y un lugar.",
      "Haced bocetos, maqueta y plan de materiales y seguridad.",
      "Instalad la obra durante una jornada y observad cómo reacciona el público.",
      "Documentadla con fotos y vídeo y redactad una cartela.",
    ],
    producto: "Una intervención efímera documentada y su cartela.",
    evaluacion: [
      "La obra aplica con coherencia la corriente elegida.",
      "Dialoga con el lugar y con el público.",
      "Se cuida la seguridad y se deja el espacio limpio.",
      "La documentación es clara y completa.",
    ],
  },
  familias: [
    "Visitad un museo de arte contemporáneo o una escultura pública moderna.",
    "Buscad juntos obras de Chillida, Oteiza o Plensa cerca de vosotros.",
    "Haced una pequeña obra de land art en una excursión, sin dañar el entorno.",
    "Comentad una instalación vista en redes: ¿qué os hace sentir?",
  ],
  saberes: "El volumen en el arte contemporáneo: Rodin y Claudel, vanguardias (cubismo, futurismo, Brancusi), abstracción orgánica, escultura española del siglo XX, minimalismo, pop art, land art, instalación y obra site-specific, arte público y nuevas tecnologías.",
  ideas: [
    "Línea del tiempo ilustrada de la escultura contemporánea.",
    "Mapa de arte público de la comunidad autónoma.",
    "Intervención efímera de land art en el patio.",
    "Exposición de maquetas de instalaciones.",
  ],
  fuentes: [
    { t: "Museo Guggenheim Bilbao", url: "https://www.guggenheim-bilbao.eus/" },
    { t: "Chillida Leku", url: "https://www.museochillidaleku.com/" },
  ],
});
