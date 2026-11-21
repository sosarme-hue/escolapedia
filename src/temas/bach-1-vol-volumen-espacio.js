// Volumen, 1º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-vol");

module.exports = B.tema({
  titulo: "El volumen y el espacio",
  minutos: 60,
  objetivos: [
    "Entender qué es el volumen y en qué se diferencia de la imagen plana",
    "Distinguir bulto redondo, relieve, lleno y vacío",
    "Reconocer la importancia del punto de vista, la escala y el lugar",
    "Situar los grandes momentos de la escultura en el tiempo",
  ],
  claves: ["volumen", "tres dimensiones", "bulto redondo", "relieve", "espacio", "vacío", "punto de vista", "escala"],
  pregunta: {
    texto: "Una foto de una escultura y la escultura de verdad, ¿son la misma experiencia?",
    respuesta: "No. La foto la reduce a <mark>un solo punto de vista</mark> plano. La escultura real ocupa espacio: puedes rodearla, ver cómo cambia con la luz, medirla con tu propio cuerpo y, a veces, tocarla. Eso es lo propio del volumen.",
  },
  lectura: {
    titulo: "Rodear una obra",
    html: `<p>Cuando Miguel Ángel terminó el <i>David</i> en 1504, la ciudad de Florencia discutió durante semanas dónde colocarlo. No era un detalle: una figura de más de cinco metros cambia por completo según se vea desde abajo, desde lejos o al pasar a su lado. Finalmente se puso ante el Palacio de la Señoría, donde todos lo rodeaban cada día.</p>
    <p>Esa es la gran diferencia entre el dibujo y el volumen. Un dibujo se mira; una obra tridimensional <mark>se recorre</mark>. En este tema aprenderás a pensar en tres dimensiones: alto, ancho y profundidad, lleno y vacío, cerca y lejos.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es el volumen",
      html: `<p>En arte, el <b>volumen</b> es el espacio que ocupa un cuerpo con sus <b>tres dimensiones</b>: alto, ancho y profundidad. Las obras en volumen son <b>reales</b>: tienen peso, se pueden tocar y cambian según la luz y la posición de quien mira. Por eso decimos que la escultura es un arte del espacio.</p>
      <p>En el dibujo y la pintura, en cambio, el volumen es una <b>ilusión</b>: el sombreado y la perspectiva hacen creer que hay profundidad sobre una superficie plana. La asignatura de Volumen trabaja con el volumen real, aunque el dibujo sigue siendo la herramienta para pensar y planificar.</p>`,
      svg: B.dimensiones("Un cubo con sus tres dimensiones: alto, ancho y profundidad"),
      video: { id: "27l6RulFhfY", titulo: "¿Qué son las esculturas y cómo se hacen?", canal: "La educadora propone", vistas: 232046 },
    },
    {
      h: "Bulto redondo y relieve",
      html: `<p>La obra de <b>bulto redondo</b> está exenta: se puede rodear por completo y tiene sentido desde todos los lados, como una estatua en una plaza. El <b>relieve</b>, en cambio, está unido a un fondo y se mira sobre todo de frente, como las escenas de las portadas de las iglesias o las monedas.</p>
      <p>Según cuánto sobresalen las figuras del fondo, hablamos de <b>bajorrelieve</b> (menos de la mitad de su grosor), <b>medio relieve</b> (aproximadamente la mitad) y <b>altorrelieve</b> (más de la mitad, casi despegadas). Existe también el <b>hueco relieve</b>, en el que la figura se hunde en la superficie, muy usado en Egipto.</p>`,
      svg: B.relieves("Bajorrelieve, medio relieve, altorrelieve y bulto redondo vistos de perfil"),
    },
    {
      h: "Lleno y vacío",
      html: `<p>Una obra tridimensional no está hecha solo de materia. El <b>lleno</b> o masa es la parte material; el <b>vacío</b> es el aire que la rodea o la atraviesa. Los escultores del siglo XX descubrieron que el vacío también es forma: <b>Henry Moore</b> perforó sus figuras para que el espacio pasara a través de ellas.</p>
      <p>En España, <b>Jorge Oteiza</b> habló de «desocupar» el espacio en sus cajas metálicas, y <b>Eduardo Chillida</b> decía que trabajaba el aire tanto como el hierro. Al mirar una escultura, fíjate en las formas que dibuja el vacío: son tan importantes como las del material.</p>`,
      svg: B.comparar("Lleno y vacío en la escultura", ["Lleno", ["masa, materia", "peso, densidad", "cerrado", "estatua clásica"]], ["Vacío", ["aire, hueco", "ligereza", "abierto, perforado", "Moore, Oteiza"]]),
      video: { id: "dXFUYyo3KRc", titulo: "Jorge Oteiza: el espacio y el tiempo en la escultura", canal: "Museo Oteiza Museoa", vistas: 42493 },
    },
    {
      h: "Puntos de vista y recorrido",
      html: `<p>Una escultura de bulto redondo tiene <b>infinitos puntos de vista</b>. Algunas, como muchas figuras clásicas, tienen un punto de vista principal, el frontal. Otras, como las del Manierismo y el Barroco, invitan a <b>girar</b> alrededor: cada paso descubre una forma distinta.</p>
      <p>Por eso, al proyectar una obra, hay que dibujarla desde varios lados (frente, perfil, espalda y planta) y comprobar que funciona desde todos. El tiempo que el espectador tarda en recorrerla forma parte de la experiencia.</p>`,
      svg: B.puntosVista("Vista desde arriba de una escultura rodeada por cuatro puntos de vista"),
    },
    {
      h: "Escala y relación con el cuerpo",
      html: `<p>La <b>escala</b> es el tamaño de la obra en relación con el cuerpo humano. Una figurilla que cabe en la mano invita a la intimidad; una obra a <b>tamaño natural</b> nos habla de tú a tú; una obra <b>monumental</b> impresiona y domina el espacio, como las grandes estatuas de los reyes o las piezas de acero de Richard Serra.</p>
      <p>Cambiar la escala cambia el significado: el escultor Ron Mueck hace personas hiperrealistas gigantes o diminutas, y eso las vuelve inquietantes. Para trabajar se usan <b>maquetas</b> a escala reducida antes de construir la obra final.</p>`,
      svg: B.capas("Escalas de una obra en volumen", [["Miniatura", "cabe en la mano"], ["Natural", "como nuestro cuerpo"], ["Grande", "más alta que nosotros"], ["Monumental", "domina el lugar"]]),
    },
    {
      h: "El lugar de la obra",
      html: `<p>Las obras en volumen siempre están en algún sitio: un museo, una iglesia, una plaza, un parque, un paisaje. El <b>emplazamiento</b> modifica su luz, su escala y su sentido. Durante siglos, el <b>pedestal</b> separaba la escultura del público y la elevaba; muchos artistas modernos lo eliminaron para compartir el suelo con el espectador.</p>
      <p>Hay obras pensadas para un lugar concreto, que no se entienden fuera de él: el <i>Peine del viento</i> de Chillida en San Sebastián (1977) dialoga con el mar, la roca y el viento.</p>`,
      svg: B.cajas("Lugares de la obra en volumen", [["Museo", "luz controlada|se contempla"], ["Templo", "función religiosa|retablos, imágenes"], ["Espacio público", "plazas, parques|la ve todo el mundo"], ["Paisaje", "naturaleza|obra y lugar unidos"]]),
    },
    {
      h: "Breve historia del volumen",
      html: `<p>La escultura es una de las artes más antiguas: la <b>Venus de Willendorf</b> tiene unos 30.000 años. Egipto creó figuras rígidas y frontales; <b>Grecia</b> buscó el cuerpo ideal y el movimiento; Roma destacó en el retrato. La Edad Media llenó de relieves las iglesias y el <b>Renacimiento</b> recuperó el desnudo clásico con Donatello y Miguel Ángel.</p>
      <p>El <b>Barroco</b> trajo el movimiento y la emoción (Bernini, la imaginería española). En el siglo XIX, <b>Rodin</b> abrió la puerta a la escultura moderna, y el siglo XX inventó nuevos materiales, la abstracción, el ensamblaje y la instalación.</p>`,
      svg: B.cronologia("Momentos clave de la escultura", [["–30.000", "Willendorf"], ["s. V a.C.", "Grecia clásica"], ["1504", "David"], ["1625", "Bernini"], ["1880", "Rodin"]]),
      video: { id: "F4JtAW_P4Wg", titulo: "¿Qué es la escultura? Tipos de escultura y materiales", canal: "Maxi Danza", vistas: 220774 },
    },
    {
      h: "El volumen a nuestro alrededor",
      html: `<p>El volumen no está solo en los museos. Todo objeto que usamos ha sido pensado en tres dimensiones: una silla, una botella, un móvil, una zapatilla. El <b>diseño industrial</b>, la <b>arquitectura</b>, la escenografía, la cerámica, la joyería, el modelado 3D de videojuegos y la animación con plastilina comparten el lenguaje de esta asignatura.</p>
      <p>Aprender a ver en volumen te ayuda a entender cómo se sostiene una forma, cómo se coge con la mano o cómo cambia con la luz. Es una forma de <mark>pensar con las manos</mark>.</p>`,
      svg: B.estrella("Dónde está el volumen", "Volumen", ["Escultura", "Arquitectura", "Diseño", "Cerámica", "Modelado 3D"]),
    },
  ],
  figura: {
    titulo: "El volumen y el espacio en cuatro claves",
    items: [["Volumen", "3D", "alto, ancho", "y profundidad"], ["Tipos", "◐", "bulto redondo", "y relieve"], ["Espacio", "○ ●", "lleno y vacío", "puntos de vista"], ["Escala", "↕", "del objeto", "al monumento"]],
  },
  video: { id: "Z4AEXRtDEEY", titulo: "El Pensador de Rodin: el gran arte explicado", canal: "Great Art Explained", vistas: 726341 },
  quiz: [
    ["Las tres dimensiones de un cuerpo son…", ["línea, plano y punto", "alto, ancho y profundidad", "luz, sombra y color", "forma, textura y color"], 1, "El volumen ocupa espacio real."],
    ["Una escultura que se puede rodear completamente es de…", ["relieve", "bajorrelieve", "bulto redondo", "hueco relieve"], 2, "Está exenta."],
    ["Si las figuras sobresalen más de la mitad de su grosor, es un…", ["altorrelieve", "bajorrelieve", "medio relieve", "grabado"], 0, "Casi se despegan del fondo."],
    ["En el dibujo, el volumen es…", ["real", "una ilusión creada con sombras y perspectiva", "imposible", "un material"], 1, "La superficie sigue siendo plana."],
    ["El aire que atraviesa o rodea una escultura se llama…", ["masa", "vacío", "pedestal", "pátina"], 1, "También es parte de la forma."],
    ["¿Qué escultor perforó sus figuras para que pasara el espacio?", ["Henry Moore", "Miguel Ángel", "Donatello", "Fidias"], 0, "Sus figuras reclinadas tienen huecos."],
    ["La escala de una obra es su tamaño en relación con…", ["el museo", "el cuerpo humano", "el precio", "la pintura"], 1, "Miniatura, natural, monumental."],
    ["El Peine del viento de Chillida está en…", ["Bilbao", "Madrid", "San Sebastián", "Gijón"], 2, "En la playa de Ondarreta, desde 1977."],
    ["La Venus de Willendorf tiene unos…", ["300 años", "3.000 años", "30.000 años", "300.000 años"], 2, "Es del Paleolítico."],
    ["El soporte que eleva una escultura es el…", ["boceto", "pedestal", "molde", "vaciado"], 1, "Muchos escultores modernos lo eliminaron."],
  ],
  examen: [
    ["Las monedas llevan normalmente…", ["bulto redondo", "bajorrelieve", "instalación", "móvil"], 1, "Las figuras sobresalen muy poco."],
    ["Un escultor dibuja su proyecto de frente, de perfil, de espaldas y en planta porque…", ["es obligatorio", "la obra debe funcionar desde varios puntos de vista", "así es más barata", "no sabe modelar"], 1, "La escultura se rodea."],
    ["Una figura humana hiperrealista de 5 metros produce extrañeza sobre todo por su…", ["color", "escala", "textura", "material"], 1, "Cambiar la escala cambia el significado."],
    ["Una obra pensada para un lugar concreto, que dialoga con él, se relaciona sobre todo con…", ["el emplazamiento", "el bajorrelieve", "la pátina", "el molde"], 0, "Como el Peine del viento."],
    ["¿Qué afirmación es correcta?", ["El vacío no forma parte de la obra", "El relieve se rodea por completo", "El volumen real cambia con la luz y la posición del espectador", "La escultura nació en el Renacimiento"], 2, "Por eso se recorre."],
  ],
  feynman: ["Diferencia entre volumen real y volumen ilusorio", "Bulto redondo y tipos de relieve", "Qué significa que el vacío también es forma", "Por qué importan la escala y el lugar"],
  mapa: ["EL VOLUMEN Y EL ESPACIO", [["Volumen", "alto · ancho · profundidad"], ["Tipos", "bulto redondo · relieves"], ["Espacio", "lleno · vacío · puntos de vista"], ["Contexto", "escala · lugar · historia"]]],
  tarjetas: [
    ["Volumen", "Espacio que ocupa un cuerpo con alto, ancho y profundidad."],
    ["Bulto redondo", "Escultura exenta que se puede rodear."],
    ["Relieve", "Figura unida a un fondo; bajo, medio o alto."],
    ["Vacío", "Espacio que rodea o atraviesa la obra; también es forma."],
    ["Punto de vista", "Posición desde la que se mira una obra."],
    ["Escala", "Tamaño de la obra respecto al cuerpo humano."],
    ["Pedestal", "Base que eleva y aísla la escultura."],
    ["Maqueta", "Versión reducida para probar la obra antes de hacerla."],
  ],
  ejemplos: [
    ["Clasifica: una moneda de euro, la Dama de Elche, un retablo con escenas y el David.", ["Moneda: bajorrelieve, muy plano.", "Dama de Elche: busto de bulto redondo.", "Retablo: relieves, algunos altorrelieves.", "David: bulto redondo monumental."], "Cada obra se clasifica según si tiene fondo y cuánto sobresale."],
    ["Explica por qué una figura perforada de Henry Moore parece más ligera que un bloque macizo del mismo tamaño.", ["Los huecos dejan pasar aire y luz.", "La masa visual disminuye.", "El ojo atraviesa la obra y ve el paisaje."], "El vacío reduce el peso visual y une obra y entorno."],
    ["Propón cómo cambiaría una escultura de 30 cm si se hiciera de 6 metros en una rotonda.", ["Pasa de íntima a monumental.", "Se verá desde lejos y en movimiento, desde el coche.", "Los detalles pequeños dejan de verse; importa la silueta."], "Al cambiar la escala hay que simplificar y pensar en la silueta."],
  ],
  errores: [
    "Mirar una escultura solo de frente, como si fuera una foto.",
    "Confundir el volumen real con el volumen dibujado.",
    "Olvidar que el vacío también forma parte de la obra.",
    "No tener en cuenta el lugar y la escala al proyectar.",
  ],
  ejercicios: {
    b: [
      ["Define volumen y nombra sus tres dimensiones.", "Espacio que ocupa un cuerpo; alto, ancho y profundidad."],
      ["Diferencia bulto redondo y relieve con un ejemplo de cada uno.", "Bulto redondo: se rodea (el David). Relieve: unido a un fondo (una moneda, una portada románica)."],
      ["Ordena de menos a más: altorrelieve, bajorrelieve, medio relieve.", "Bajorrelieve, medio relieve, altorrelieve."],
      ["¿Qué es una maqueta y para qué sirve?", "Una versión reducida de la obra para probar proporciones, equilibrio y puntos de vista."],
    ],
    m: [
      ["Explica la frase «el vacío también es forma» con un artista.", "Los huecos y el aire que atraviesan la obra crean formas y ligereza; Moore perforaba sus figuras y Oteiza vaciaba cubos."],
      ["¿Por qué el Barroco invita a girar alrededor de la escultura?", "Porque sus figuras están en movimiento y en espiral, y cada punto de vista muestra una parte distinta de la acción."],
      ["Busca una escultura pública de tu localidad y describe su escala y su lugar.", "Respuesta abierta: tamaño respecto al cuerpo, pedestal o no, relación con la plaza o el paisaje."],
      ["Ordena cronológicamente: Rodin, Venus de Willendorf, David, Grecia clásica, Bernini.", "Willendorf, Grecia clásica, David, Bernini, Rodin."],
    ],
    a: [
      ["Fotografía un objeto desde cuatro puntos de vista y explica qué cambia en cada uno.", "Respuesta abierta: silueta, proporción, luces y sombras, partes que aparecen u ocultan."],
      ["Diseña en un boceto una escultura para el patio del centro: escala, material, emplazamiento y puntos de vista.", "Respuesta abierta: dibujos de frente, perfil y planta, tamaño respecto a una persona y justificación del lugar."],
    ],
  },
  glosario: [
    ["Tridimensional", "Que tiene tres dimensiones."],
    ["Exento", "Que no está unido a ningún fondo."],
    ["Bajorrelieve", "Relieve que sobresale menos de la mitad de su grosor."],
    ["Altorrelieve", "Relieve que sobresale más de la mitad."],
    ["Hueco relieve", "Figura hundida en la superficie."],
    ["Masa", "Parte material y llena de una obra."],
    ["Emplazamiento", "Lugar donde se sitúa la obra."],
    ["Monumental", "De gran tamaño, que domina el espacio."],
  ],
  situacion: {
    titulo: "Una obra para nuestro patio",
    reto: "Proponer una escultura para un espacio concreto del centro escolar.",
    pasos: [
      "Elegid un lugar del centro y fotografiadlo desde varios puntos.",
      "Decidid la escala de la obra respecto a las personas que pasan.",
      "Dibujad la propuesta en planta, frente y perfil.",
      "Haced una maqueta pequeña con plastilina o cartón y fotografiadla en el lugar.",
    ],
    producto: "Bocetos, maqueta y fotomontaje de la obra en su emplazamiento.",
    evaluacion: [
      "La obra funciona desde varios puntos de vista.",
      "La escala está pensada en relación con el cuerpo y el lugar.",
      "Se tiene en cuenta el vacío y no solo la masa.",
      "La presentación justifica las decisiones.",
    ],
  },
  familias: [
    "Al pasear, rodead una escultura pública y comentad qué cambia desde cada lado.",
    "Buscad en casa objetos con relieve: monedas, medallas, galletas, botones.",
    "Mirad juntos una figura a tamaño natural y otra en miniatura y comparad qué sentís.",
    "Visitad un museo o una iglesia y fijaos en los retablos y sus relieves.",
  ],
  saberes: "El volumen como lenguaje: las tres dimensiones, volumen real e ilusorio, bulto redondo y tipos de relieve, lleno y vacío, puntos de vista, escala, emplazamiento y breve recorrido histórico de la escultura.",
  ideas: [
    "Dibujar un objeto del aula desde cuatro puntos de vista.",
    "Hacer un bajorrelieve sencillo en una placa de plastilina.",
    "Comparar fotos de una escultura con la visita a la obra real.",
    "Mapa colectivo de esculturas públicas de la localidad.",
  ],
  fuentes: [
    { t: "Museo Nacional de Escultura (Valladolid)", url: "https://www.culturaydeporte.gob.es/mnescultura/inicio.html" },
  ],
});
