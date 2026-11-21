// Coro y Técnica Vocal II, 2º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ct");

module.exports = B.tema({
  titulo: "Los registros y la extensión de la voz",
  minutos: 60,
  objetivos: [
    "Distinguir extensión, tesitura y registro",
    "Reconocer la voz de pecho, la voz de cabeza, el falsete y la voz mixta",
    "Localizar el passaggio de la propia voz",
    "Practicar ejercicios para igualar la voz en toda su extensión",
  ],
  claves: ["registro", "extensión", "tesitura", "voz de pecho", "voz de cabeza", "falsete", "voz mixta", "passaggio"],
  pregunta: {
    texto: "¿Por qué a veces, al subir una escala, la voz «se rompe» de golpe y cambia de color?",
    respuesta: "Porque la laringe cambia de <mark>mecanismo</mark>: las cuerdas vocales pasan de vibrar gruesas y relajadas a vibrar finas y estiradas. Ese salto se nota en la <mark>zona de paso</mark>. Con entrenamiento se aprende a cruzarla sin cortes.",
  },
  lectura: {
    titulo: "El gallo que todos hemos oído",
    html: `<p>Un cantante famoso sube a la nota más alta de su canción y, de repente, sale un sonido roto, un «gallo». En redes se ríen durante días. Pero no es falta de talento: es la voz cambiando de registro sin estar preparada.</p>
    <p>Todos los cantantes, del coro del instituto a las estrellas de la ópera, trabajan esa transición. En 1º aprendiste cómo se produce la voz; este curso vas a conocer sus registros, a localizar tus zonas de paso y a practicar los ejercicios que usan los profesionales para que la voz suene igual de grave a agudo.</p>`,
  },
  secciones: [3, 2, 2],
  bloques: [
    {
      h: "Extensión, tesitura y registro",
      html: `<p>La <b>extensión</b> son todas las notas que una voz puede emitir, de la más grave a la más aguda, aunque algunas suenen forzadas. La <b>tesitura</b> es la zona, más estrecha, en la que la voz canta con comodidad y buen sonido durante mucho tiempo. En el coro se trabaja siempre dentro de la tesitura.</p>
      <p>Un <b>registro</b> es una serie de notas seguidas que tienen el mismo timbre porque se producen con el mismo ajuste de la laringe. Cada voz tiene varios registros, y saber dónde empieza y acaba cada uno es la base de la técnica vocal.</p>`,
      svg: B.tesituras("Extensión y tesitura de una voz de contralto", [["Extensión", 8, 24], ["Tesitura", 11, 20], ["Graves forzados", 8, 11], ["Agudos forzados", 20, 24]]),
    },
    {
      h: "Voz de pecho y voz de cabeza",
      html: `<p>La <b>voz de pecho</b> (mecanismo 1) se produce con las cuerdas vocales gruesas y cortas, que vibran en toda su masa. Es la voz con la que hablamos: llena, potente, con vibraciones que se notan en el pecho. Sirve sobre todo para la zona grave y media.</p>
      <p>La <b>voz de cabeza</b> (mecanismo 2) se produce con las cuerdas más finas y estiradas, que vibran solo en sus bordes. Suena más ligera y brillante y las sensaciones se notan en la cara y la cabeza. Permite llegar a los agudos sin gritar.</p>`,
      svg: B.comparar("Voz de pecho frente a voz de cabeza", ["Pecho (M1)", ["cuerdas gruesas", "vibra toda la masa", "graves y medios", "sonido lleno"]], ["Cabeza (M2)", ["cuerdas finas", "vibran los bordes", "agudos", "sonido ligero"]]),
      video: { id: "gGuYaRCISAo", titulo: "Voz de pecho, voz de cabeza, voz mezclada y falsete: diferencias", canal: "Clases de canto DREKXEL", vistas: 125361 },
    },
    {
      h: "El falsete y la voz mixta",
      html: `<p>El <b>falsete</b> es el mecanismo 2 en la voz masculina con un cierre incompleto de las cuerdas: suena aflautado y con algo de aire. Bien desarrollado, es la voz de los <b>contratenores</b>, que cantan en la tesitura de una contralto.</p>
      <p>La <b>voz mixta</b> no es un registro nuevo, sino una <b>coordinación</b>: el cantante mezcla rasgos de pecho y de cabeza para pasar de uno a otro sin cortes y mantener cuerpo en la zona media y aguda. Es la herramienta principal del canto coral y del canto moderno.</p>`,
      svg: B.capas("Del grave al agudo", [["Cabeza", "agudos ligeros y brillantes"], ["Mixta", "mezcla: zona media sin cortes"], ["Pecho", "graves y medios con cuerpo"]]),
      video: { id: "Y_9YYKA8SUg", titulo: "Cómo cantar en voz mixta: equilibrar la voz de cabeza y de pecho", canal: "Dra. Voz", vistas: 241959 },
    },
    {
      h: "El passaggio o zona de paso",
      html: `<p>El <b><i>passaggio</i></b> es la zona donde la voz cambia de mecanismo. Si se fuerza la voz de pecho por encima de ella, la voz se tensa, se desafina o se rompe (el «gallo»). Si se pasa demasiado pronto a cabeza, el sonido pierde cuerpo.</p>
      <p>Cada voz tiene sus zonas de paso. De forma aproximada, en las voces femeninas el primer paso aparece hacia el <b>mi4-fa4</b> (por encima del do central) y el segundo hacia el <b>fa5</b>; en los tenores, hacia el <b>mi4-sol4</b>, y en barítonos y bajos, algo más grave. Lo importante es localizar el tuyo cantando escalas lentas y fijándote en la nota exacta en la que cambia el color o aparece la tensión.</p>`,
      svg: B.tesituras("Registros aproximados de una voz de soprano", [["Pecho", 9, 16], ["Zona media", 16, 24], ["Cabeza", 24, 28], ["Pasos: mi4 y fa5", 16, 24]]),
    },
    {
      h: "Igualar la voz",
      html: `<p><b>Homogeneizar</b> la voz es conseguir que suene con el mismo color de grave a agudo, sin escalones. Se trabaja con <b>sirenas</b> (deslizar la voz arriba y abajo con «u» o «ng»), escalas <b>descendentes</b> que llevan la ligereza de la cabeza hacia la zona media y arpegios suaves.</p>
      <p>Otra herramienta es la <b>modificación de las vocales</b>: en los agudos, las vocales se redondean un poco («a» hacia «o», «e» hacia «i») para que la garganta no se cierre. Los cantantes líricos lo llaman «cubrir» la voz.</p>`,
      svg: B.flujo("Rutina para igualar la voz", ["Sirena con «u» o «ng»", "Escala descendente desde cabeza", "Arpegio en piano", "Misma escala con texto"]),
    },
    {
      h: "Los ejercicios de tracto semiocluido",
      html: `<p>Los ejercicios de <b>tracto vocal semiocluido</b> (SOVT, por sus siglas en inglés) consisten en cantar con la boca parcialmente cerrada: a través de una <b>pajita</b>, con los <b>labios vibrando</b> («brrr»), con «ng», «m» o «v». La resistencia a la salida del aire equilibra la presión sobre las cuerdas.</p>
      <p>Así las cuerdas vibran con menos esfuerzo y los cambios de registro se suavizan. Son ideales para calentar, para cruzar el passaggio y para recuperar la voz después de un ensayo largo. Los usan logopedas, cantantes de ópera y de pop, y bastan dos o tres minutos al día para notar el efecto.</p>`,
      svg: B.cajas("Ejercicios SOVT", [["Pajita", "sirenas y melodías|a través del tubo"], ["Labios", "vibración «brrr»|con escalas"], ["«Ng» y «m»", "zumbido nasal|y resonancia"], ["«V» y «z»", "consonantes|sonoras largas"]]),
    },
    {
      h: "Los registros en el coro",
      html: `<p>En el coro, cada cuerda tiene su reto: las <b>sopranos</b> cruzan el segundo paso en los agudos; las <b>contraltos</b> cantan muchas notas cerca del primer paso y tienden a forzar el pecho; los <b>tenores</b> pasan gran parte de la obra en la zona de paso y necesitan la voz mixta; los <b>bajos</b> deben aligerar al subir.</p>
      <p>El director ayuda eligiendo la <b>tonalidad</b>, repartiendo voces (<i>divisi</i>) y pidiendo un sonido ligero en los agudos. En algunos coros masculinos y en la tradición inglesa, los <b>altos masculinos</b> cantan en falsete la línea de contralto.</p>`,
      svg: B.rejilla("El reto de cada cuerda", ["Cuerda", "Reto", "Recurso"], [["Sopranos", "agudos", "cabeza ligera"], ["Contraltos", "primer paso", "no forzar pecho"], ["Tenores", "zona de paso", "voz mixta"], ["Bajos", "subir", "aligerar"]]),
    },
  ],
  figura: {
    titulo: "Una voz, varios registros",
    items: [["Extensión", "↕", "todas las notas", "posibles"], ["Tesitura", "✓", "zona cómoda", "para cantar"], ["Registros", "M1 · M2", "pecho, cabeza", "falsete, mixta"], ["Passaggio", "↗", "zona de paso", "sin cortes"]],
  },
  video: { id: "UWmOTY3Wi-Q", titulo: "Cómo cantar con voz de pecho y voz de cabeza", canal: "Natalia Bliss", vistas: 123424 },
  quiz: [
    ["La zona en la que una voz canta con comodidad es…", ["la extensión", "la tesitura", "el registro", "el timbre"], 1, "La extensión incluye también notas forzadas."],
    ["Un registro es…", ["el volumen de la voz", "una serie de notas con el mismo timbre y mecanismo", "un tipo de coro", "una vocal"], 1, "Por ejemplo, la voz de pecho."],
    ["La voz con la que hablamos normalmente es la voz de…", ["cabeza", "pecho", "falsete", "silbido"], 1, "Mecanismo 1."],
    ["En la voz de cabeza, las cuerdas vocales están…", ["gruesas y cortas", "finas y estiradas", "separadas del todo", "quietas"], 1, "Vibran sobre todo en sus bordes."],
    ["Un contratenor canta usando sobre todo…", ["el falsete", "la voz de pecho", "el vocal fry", "el susurro"], 0, "Canta en la tesitura de una contralto."],
    ["La voz mixta es…", ["un registro nuevo", "una coordinación entre pecho y cabeza", "cantar dos notas a la vez", "cantar sin aire"], 1, "Permite pasar sin cortes."],
    ["El passaggio es…", ["la zona donde cambia el mecanismo de la voz", "un tipo de partitura", "la respiración", "el final de la obra"], 0, "La zona de paso entre registros."],
    ["Cantar a través de una pajita es un ejercicio…", ["de dicción", "de tracto vocal semiocluido", "de ritmo", "de lectura"], 1, "Equilibra la presión del aire."],
    ["«Cubrir» la voz en los agudos consiste en…", ["cantar más fuerte", "redondear un poco las vocales", "taparse la boca", "cantar en falsete"], 1, "Evita que la garganta se cierre."],
    ["La cuerda que pasa más tiempo en la zona de paso suele ser la de…", ["bajos", "tenores", "contraltos graves", "voces blancas"], 1, "Necesitan dominar la voz mixta."],
  ],
  examen: [
    ["Forzar la voz de pecho por encima del passaggio provoca…", ["más afinación", "tensión y «gallos»", "más resonancia", "mejor empaste"], 1, "La voz se rompe o se desafina."],
    ["Una sirena con «ng» sirve para…", ["practicar el ritmo", "deslizar la voz por los registros sin cortes", "aprender la letra", "marcar el compás"], 1, "Une los registros."],
    ["La voz de cabeza (M2) es especialmente útil para…", ["los graves", "los agudos sin gritar", "hablar", "el beatbox"], 1, "Da agudos ligeros."],
    ["¿Qué diferencia hay entre extensión y tesitura?", ["Ninguna", "La extensión son todas las notas posibles y la tesitura, las cómodas", "La tesitura es mayor", "La extensión es el timbre"], 1, "La tesitura está dentro de la extensión."],
    ["Las contraltos suelen tender a…", ["cantar en falsete", "forzar la voz de pecho cerca del primer paso", "cantar siempre agudo", "no tener registros"], 1, "Deben aligerar en esa zona."],
  ],
  feynman: ["Qué diferencia hay entre extensión, tesitura y registro", "Cómo son la voz de pecho, de cabeza, el falsete y la mixta", "Qué es el passaggio y dónde está el tuyo", "Qué ejercicios ayudan a igualar la voz"],
  mapa: ["LOS REGISTROS DE LA VOZ", [["Conceptos", "extensión · tesitura · registro"], ["Registros", "pecho · cabeza · falsete · mixta"], ["Passaggio", "zona de paso · gallos"], ["Igualar", "sirenas · vocales · SOVT"]]],
  tarjetas: [
    ["Extensión", "Todas las notas que una voz puede emitir."],
    ["Tesitura", "Zona de notas cómodas de una voz."],
    ["Registro", "Notas seguidas con el mismo timbre y mecanismo."],
    ["Voz de pecho", "Mecanismo 1: cuerdas gruesas, sonido lleno."],
    ["Voz de cabeza", "Mecanismo 2: cuerdas finas, sonido ligero."],
    ["Voz mixta", "Coordinación que une pecho y cabeza sin cortes."],
    ["Passaggio", "Zona de paso entre registros."],
    ["SOVT", "Ejercicios con la boca semicerrada: pajita, «brrr», «ng»."],
  ],
  ejemplos: [
    ["Una alumna nota que su voz cambia de color al llegar al fa4. ¿Qué le pasa y qué puede hacer?", ["Ha llegado a su primera zona de paso.", "Cambia del mecanismo de pecho al de cabeza.", "Practicar sirenas con «u» y escalas descendentes que crucen esa nota.", "Redondear un poco la vocal al pasar."], "Es su passaggio; con sirenas y escalas descendentes lo igualará."],
    ["Diseña un calentamiento de 5 minutos para cruzar el passaggio.", ["1 minuto de labios vibrando en sirenas.", "1 minuto de pajita con glissandos.", "2 minutos de escalas descendentes de cinco notas con «u» y «o».", "1 minuto de arpegios suaves con «ma-me-mi»."], "Calentamiento SOVT + descendentes + arpegios."],
    ["Un tenor grita en las notas agudas de un himno. ¿Qué le aconsejas?", ["No llevar la voz de pecho tan arriba.", "Buscar la voz mixta, más ligera, desde antes del paso.", "Modificar la vocal hacia una más redonda.", "Pedir al director que revise la tonalidad si es muy alta para el grupo."], "Aligerar con voz mixta y vocales redondeadas."],
  ],
  errores: [
    "Confundir extensión (todas las notas) con tesitura (las cómodas).",
    "Creer que el falsete es «cantar mal»: es un mecanismo útil.",
    "Empujar la voz de pecho hacia arriba para sonar más fuerte.",
    "Pensar que todas las voces tienen el passaggio en la misma nota.",
  ],
  ejercicios: {
    b: [
      ["Define extensión y tesitura.", "Extensión: todas las notas que puede emitir una voz. Tesitura: la zona en la que canta cómodamente."],
      ["Nombra los cuatro registros o ajustes vistos en el tema.", "Voz de pecho, voz de cabeza, falsete y voz mixta."],
      ["¿Qué es el passaggio?", "La zona en la que la voz cambia de mecanismo, de pecho a cabeza."],
      ["Di dos ejercicios SOVT.", "Por ejemplo: cantar por una pajita y hacer vibrar los labios («brrr»)."],
    ],
    m: [
      ["Explica la diferencia física entre voz de pecho y voz de cabeza.", "En la de pecho las cuerdas son gruesas y vibran en toda su masa; en la de cabeza están finas y estiradas y vibran en los bordes."],
      ["¿Por qué la voz mixta es importante en el coro?", "Permite cantar la zona media y aguda sin cortes y sin gritar, con un sonido homogéneo que empasta mejor."],
      ["Explica por qué se redondean las vocales en los agudos.", "Para que la garganta no se cierre y el sonido no se vuelva estridente; ayuda a cruzar el paso sin tensión."],
      ["¿Por qué los ejercicios con pajita ayudan a la voz?", "La resistencia a la salida del aire equilibra la presión sobre las cuerdas, que vibran con menos esfuerzo."],
    ],
    a: [
      ["Graba una escala de tu nota más grave a la más aguda con «u». Escúchala y anota dónde cambia el color de tu voz. Propón dos ejercicios para igualarla.", "Respuesta abierta: localizar la zona de paso, indicar la nota aproximada y proponer sirenas, escalas descendentes o SOVT."],
      ["Escucha a un contratenor y a una contralto cantando la misma aria barroca. Compara su registro, su timbre y su forma de producir la voz.", "Respuesta abierta: ambos cantan en la misma tesitura; el contratenor usa falsete desarrollado y la contralto su voz de cabeza y mixta; el timbre del contratenor suele ser más aflautado."],
    ],
  },
  glosario: [
    ["Extensión", "Conjunto de todas las notas que una voz puede emitir."],
    ["Tesitura", "Zona de la extensión en la que la voz canta con comodidad."],
    ["Registro", "Serie de notas con el mismo timbre y el mismo ajuste laríngeo."],
    ["Mecanismo 1", "Voz de pecho: cuerdas gruesas que vibran en toda su masa."],
    ["Mecanismo 2", "Voz de cabeza o falsete: cuerdas finas que vibran en los bordes."],
    ["Falsete", "Mecanismo 2 masculino, de sonido aflautado."],
    ["Contratenor", "Cantante masculino que canta en tesitura de contralto usando el falsete."],
    ["Voz mixta", "Coordinación que mezcla pecho y cabeza."],
    ["Passaggio", "Zona de paso entre registros."],
    ["Homogeneizar", "Igualar el color de la voz en toda su extensión."],
  ],
  situacion: {
    titulo: "El mapa de mi voz",
    reto: "Elaborar el mapa personal de tu voz: extensión, tesitura, zonas de paso y un plan de ejercicios para igualarla.",
    pasos: [
      "Con ayuda del piano o de una aplicación afinador, busca tu nota más grave y más aguda.",
      "Marca la zona cómoda y las notas donde cambia el color.",
      "Elige tres ejercicios del tema y practícalos dos semanas.",
      "Graba la misma escala antes y después y compara.",
    ],
    producto: "Una ficha con el mapa de la voz y dos grabaciones comparadas.",
    evaluacion: [
      "Identifica bien extensión, tesitura y zonas de paso.",
      "Elige ejercicios adecuados y los justifica.",
      "La comparación de grabaciones es honesta y detallada.",
      "Usa el vocabulario técnico del tema.",
    ],
  },
  familias: [
    "Escuchad juntos a un contratenor y comentad qué os sorprende.",
    "Probad a hacer sirenas con «u» y a notar dónde cambia la voz.",
    "Recordad que los cambios de voz en la adolescencia son normales.",
    "Animad a practicar unos minutos de calentamiento antes de cantar.",
  ],
  saberes: "Coro y Técnica Vocal II: técnica vocal; registros de la voz (pecho, cabeza, falsete y voz mixta); extensión y tesitura; zonas de paso; homogeneización de la voz; ejercicios de tracto vocal semiocluido; cuidado de la voz.",
  ideas: [
    "Hacer un mapa de tesituras de toda la clase con el piano.",
    "Comparar grabaciones del mismo pasaje en pecho, cabeza y mixta.",
    "Practicar cada ensayo dos minutos de SOVT con pajitas.",
    "Escuchar contratenores y comentar el uso del falsete.",
  ],
  fuentes: [
    { t: "Registro vocal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Registro_vocal" },
    { t: "Passaggio, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Passaggio" },
  ],
});
