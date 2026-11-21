// Diseño, 2º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "La tipografía",
  minutos: 60,
  objetivos: [
    "Conocer la anatomía de la letra y el vocabulario básico de la tipografía",
    "Clasificar las familias tipográficas y relacionarlas con su época y su carácter",
    "Aplicar criterios de legibilidad: cuerpo, interlineado, interletrado, longitud de línea y alineación",
    "Combinar tipografías con intención y respetar las licencias de uso",
  ],
  claves: ["tipografía", "fuente", "familia", "serifa", "palo seco", "cuerpo", "interlineado", "legibilidad"],
  pregunta: {
    texto: "¿Por qué el mismo texto parece serio en una letra y divertido en otra?",
    respuesta: "Porque las letras tienen <mark>carácter</mark>: su forma, su peso y su historia comunican antes de que leamos las palabras. Elegir tipografía es elegir una voz.",
  },
  lectura: {
    titulo: "La letra de las señales",
    html: `<p>En los años cincuenta, el Reino Unido construía sus primeras autopistas y necesitaba señales que se leyeran a gran velocidad. Los diseñadores Jock Kinneir y Margaret Calvert probaron letras en carteles al borde de una carretera y midieron a qué distancia se reconocían.</p>
    <p>El resultado fue una tipografía de palo seco, con letras abiertas y minúsculas, porque las palabras en minúscula tienen una silueta más reconocible que en mayúsculas. Aquella decisión, tomada tras muchas pruebas, influyó en la señalización de medio mundo, también en España. La tipografía no es un adorno: puede ayudar a que alguien llegue a su destino o a que no se equivoque en una salida.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "Tipografía, familia y fuente",
      html: `<p>La <b>tipografía</b> es el arte y la técnica de diseñar letras y de componer textos con ellas. Nació con la imprenta de tipos móviles de <b>Gutenberg</b> (hacia 1450): cada letra era una pieza de metal, el <i>tipo</i>, que se combinaba para formar páginas.</p>
      <p>Una <b>familia tipográfica</b> es un conjunto de letras con el mismo diseño básico (por ejemplo, Helvetica). Dentro de ella hay <b>variantes</b> o estilos: fina, regular, negrita, cursiva, estrecha. Una <b>fuente</b> es, en sentido estricto, una variante concreta en un archivo digital. El <b>carácter</b> o glifo es cada signo: letras, números, signos de puntuación.</p>`,
      svg: B.capas("De lo general a lo concreto", [["Tipografía", "arte de la letra"], ["Familia", "Helvetica"], ["Variante", "negrita, cursiva…"], ["Glifo", "cada signo: a, 7, ¿"]]),
    },
    {
      h: "Anatomía de la letra",
      html: `<p>Para hablar de letras con precisión se usan unas líneas de referencia. La <b>línea base</b> es donde se apoyan las letras. La <b>altura de x</b> es la altura de las minúsculas sin trazos salientes; cuanto mayor es, más legible parece la letra en tamaños pequeños. Los <b>ascendentes</b> suben por encima (b, d, h) y los <b>descendentes</b> bajan por debajo (p, g, q).</p>
      <p>Otros términos útiles: <b>asta</b> (trazo principal), <b>serifa</b> o remate (pequeño trazo al final del asta), <b>contraforma</b> u ojo (espacio interior, como el de la o) y <b>modulación</b> (diferencia entre trazos gruesos y finos).</p>`,
      svg: B.anatomia("Anatomía de la letra: ascendente, altura de x, línea base, descendente y serifa"),
    },
    {
      h: "Clasificación de las familias",
      html: `<p>Hay muchas clasificaciones; una sencilla distingue cinco grupos. Las <b>romanas o con serifa</b> (Garamond, Times) tienen remates y modulación; se asocian a tradición y a la lectura larga. Las <b>de palo seco o sin serifa</b> (Helvetica, Futura) no tienen remates; transmiten modernidad y funcionan bien en pantalla.</p>
      <p>Las <b>egipcias o de serifa cuadrada</b> (Rockwell) tienen remates gruesos y rectangulares, muy visibles en carteles. Las <b>caligráficas o manuscritas</b> imitan la escritura a mano. Las <b>decorativas o de fantasía</b> tienen formas expresivas y solo sirven para titulares cortos.</p>`,
      svg: B.rejilla("Familias tipográficas", ["Grupo", "Ejemplo", "Carácter"], [["Romana", "Garamond", "clásica, lectura"], ["Palo seco", "Helvetica", "moderna, clara"], ["Egipcia", "Rockwell", "robusta"], ["Manuscrita", "Pacifico", "personal"], ["Decorativa", "Fantasía", "expresiva"]]),
      video: { id: "EbV3-AJQElQ", titulo: "Qué tipos de tipografía existen y cómo usarlas", canal: "LearnFree en Español", vistas: 385144 },
    },
    {
      h: "Medidas: cuerpo e interlineado",
      html: `<p>El tamaño de la letra se llama <b>cuerpo</b> y se mide en <b>puntos</b> (un punto mide unos 0,35 mm). En papel, un texto de lectura suele ir entre 9 y 12 puntos; en pantalla se mide en píxeles, y 16 px es un buen mínimo.</p>
      <p>El <b>interlineado</b> es la distancia entre líneas; un valor cómodo es entre 1,2 y 1,5 veces el cuerpo. El <b>interletrado</b> (tracking) ajusta el espacio entre todas las letras y el <b>kerning</b>, el de parejas concretas como AV o To. Los titulares en mayúsculas mejoran con un poco más de interletrado.</p>`,
      svg: B.cajas("Ajustes del texto", [["Cuerpo", "tamaño|en puntos"], ["Interlineado", "1,2-1,5|veces el cuerpo"], ["Tracking", "espacio entre|todas las letras"], ["Kerning", "espacio entre|parejas: AV, To"]]),
    },
    {
      h: "Legibilidad y composición del texto",
      html: `<p>La <b>legibilidad</b> es la facilidad con que se lee un texto. Depende de la letra, pero también de la composición. La línea ideal tiene entre <b>45 y 75 caracteres</b>; más larga cansa y más corta corta el ritmo. El contraste entre texto y fondo debe ser alto.</p>
      <p>La <b>alineación</b> puede ser a la izquierda (la más legible), justificada (bloques rectos, pero puede crear «ríos» blancos), centrada (para textos breves) o a la derecha (solo en casos especiales). Conviene evitar las <b>viudas y huérfanas</b>, líneas sueltas al principio o al final de una columna, y no abusar de las mayúsculas ni de los subrayados.</p>`,
      svg: B.comparar("Texto cómodo o incómodo", ["Cómodo", ["45-75 caracteres", "interlineado amplio", "alto contraste", "alineado a la izquierda"]], ["Incómodo", ["líneas muy largas", "líneas apretadas", "gris sobre gris", "todo en mayúsculas"]]),
    },
    {
      h: "Combinar tipografías",
      html: `<p>Una regla útil es usar <b>dos familias como máximo</b> en un mismo diseño: una para titulares y otra para el texto. Funcionan bien las combinaciones con <b>contraste claro</b>, como un titular de palo seco con un texto romano, o al revés. Dos letras muy parecidas pero distintas dan sensación de error.</p>
      <p>Dentro de una sola familia se puede crear jerarquía con el <b>peso</b> (negrita), el <b>tamaño</b>, el color o la cursiva. La tipografía debe adecuarse al mensaje: una letra infantil en un aviso de seguridad o una letra gótica en una marca tecnológica envían mensajes confusos.</p>`,
      svg: B.cajas("Crear jerarquía", [["Tamaño", "titular grande"], ["Peso", "negrita para|destacar"], ["Familia", "máximo dos,|con contraste"], ["Color", "acento|con mesura"]]),
    },
    {
      h: "Tipografía digital y licencias",
      html: `<p>Hoy las letras son archivos (<b>OTF, TTF, WOFF</b>). Las <b>fuentes variables</b> guardan en un solo archivo muchos pesos y anchuras, y las webs las cargan desde servicios como Google Fonts.</p>
      <p>Las fuentes tienen <b>licencia</b>, igual que una canción o una foto: algunas son libres para cualquier uso (licencia OFL), otras solo para uso personal y otras se compran. Antes de usar una letra en un logotipo o una web hay que comprobarlo. En España destacan tipógrafos como Andreu Balius o el estudio Type-Ø-Tones, y la letra de los rótulos de muchas ciudades es un patrimonio que se estudia y se recupera.</p>`,
      svg: B.cajas("Antes de usar una fuente", [["Formato", "OTF, TTF|WOFF (web)"], ["Variable", "muchos pesos|en un archivo"], ["Licencia", "libre, personal|o comercial"], ["Prueba", "en pantalla|y en papel"]]),
    },
  ],
  figura: {
    titulo: "La letra en cuatro claves",
    items: [["Anatomía", "Hx", "base, x,", "asta y serifa"], ["Familias", "Aa", "romana, palo", "seco, egipcia…"], ["Medidas", "pt", "cuerpo e", "interlineado"], ["Uso", "¶", "legibilidad y", "combinación"]],
  },
  video: { id: "Z37lEQMfPtg", titulo: "La guía definitiva de tipografía para principiantes", canal: "Hey Jaime", vistas: 184382 },
  quiz: [
    ["La imprenta de tipos móviles de Gutenberg es de hacia…", ["1250", "1450", "1650", "1850"], 1, "Mediados del siglo XV."],
    ["La altura de x es…", ["la altura de las mayúsculas", "la altura de las minúsculas sin trazos salientes", "el ancho de la x", "el tamaño de la página"], 1, "Influye en la legibilidad."],
    ["Una serifa es…", ["un tipo de papel", "un pequeño remate al final del trazo", "el espacio entre letras", "un color"], 1, "También llamada remate."],
    ["Helvetica es una tipografía…", ["romana", "de palo seco", "manuscrita", "gótica"], 1, "Sin serifa."],
    ["El cuerpo de la letra se mide en…", ["metros", "puntos", "gramos", "píxeles siempre"], 1, "En papel, puntos tipográficos."],
    ["Un interlineado cómodo para lectura es…", ["0,8 veces el cuerpo", "1,2-1,5 veces el cuerpo", "3 veces el cuerpo", "da igual"], 1, "Deja respirar las líneas."],
    ["El kerning ajusta el espacio…", ["entre líneas", "entre parejas concretas de letras", "entre párrafos", "de los márgenes"], 1, "AV, To, Ty…"],
    ["La longitud de línea más cómoda tiene…", ["10-20 caracteres", "45-75 caracteres", "120-150 caracteres", "sin límite"], 1, "Ritmo de lectura."],
    ["¿Cuántas familias conviene combinar como máximo?", ["Una", "Dos", "Cinco", "Todas las posibles"], 1, "Con contraste claro."],
    ["Antes de usar una fuente en un logotipo hay que…", ["cambiarle el nombre", "comprobar su licencia", "imprimirla", "nada"], 1, "Las fuentes tienen derechos."],
  ],
  examen: [
    ["Un folleto de un banco usa una letra decorativa con burbujas en todo el texto. ¿Qué falla?", ["Nada", "La tipografía no se adecua al mensaje ni es legible en texto largo", "El color", "El tamaño del papel"], 1, "Las decorativas solo para titulares, y con sentido."],
    ["Un texto en pantalla con líneas de 140 caracteres resulta cansado. ¿Qué haces?", ["Aumentar el interlineado a 3", "Reducir el ancho de la columna", "Ponerlo en mayúsculas", "Justificarlo"], 1, "Volver a 45-75 caracteres."],
    ["Quieres una letra para la portada de una novela histórica. ¿Qué grupo encaja mejor?", ["Romana", "Decorativa de neón", "Pixelada", "Egipcia de cartel"], 0, "Tradición y elegancia."],
    ["En un titular «AVENIDA» se ve un hueco grande entre A y V. ¿Qué ajustas?", ["El interlineado", "El kerning", "El cuerpo", "El color"], 1, "Pareja AV."],
    ["Un texto justificado presenta grandes huecos blancos verticales. ¿Cómo se llaman?", ["Viudas", "Ríos", "Huérfanas", "Serifas"], 1, "Mejor alinear a la izquierda o dividir palabras."],
  ],
  feynman: ["Qué es la altura de x y por qué importa", "Diferencia entre romana y palo seco con ejemplos", "Cómo se consigue un texto cómodo de leer", "Cómo combinar dos tipografías"],
  mapa: ["LA TIPOGRAFÍA", [["Anatomía", "base · altura x · asta · serifa"], ["Familias", "romana · palo seco · egipcia"], ["Medidas", "cuerpo · interlineado · kerning"], ["Uso", "legibilidad · combinación · licencia"]]],
  tarjetas: [
    ["Familia tipográfica", "Conjunto de letras con el mismo diseño y sus variantes."],
    ["Serifa", "Remate al final de los trazos de una letra."],
    ["Palo seco", "Letra sin serifas, como Helvetica o Futura."],
    ["Altura de x", "Altura de las minúsculas sin ascendentes ni descendentes."],
    ["Cuerpo", "Tamaño de la letra, medido en puntos."],
    ["Interlineado", "Distancia entre líneas de texto."],
    ["Kerning", "Ajuste del espacio entre dos letras concretas."],
    ["Legibilidad", "Facilidad con que se lee un texto."],
  ],
  ejemplos: [
    ["Elige la tipografía para la web de una clínica dental.", ["Mensaje: confianza, limpieza y modernidad.", "Titulares: palo seco redondeada, amable.", "Texto: palo seco muy legible en pantalla, 16-18 px, interlineado 1,5."], "Una familia de palo seco con dos pesos basta."],
    ["Mejora un párrafo en mayúsculas, centrado y con interlineado 1.", ["Pasar a minúsculas con mayúscula inicial.", "Alinear a la izquierda.", "Subir el interlineado a 1,4."], "El texto gana legibilidad y ritmo."],
    ["Combina tipografías para el cartel de un festival de cine clásico.", ["Titular: romana de alto contraste, grande.", "Datos: palo seco en negrita y regular.", "Máximo dos familias, jerarquía por tamaño y peso."], "Contraste claro entre una letra clásica y una funcional."],
  ],
  errores: [
    "Usar demasiadas tipografías en el mismo diseño.",
    "Escribir textos largos en mayúsculas o con letra decorativa.",
    "Dejar líneas larguísimas o un interlineado apretado.",
    "Descargar fuentes sin mirar su licencia.",
  ],
  ejercicios: {
    b: [
      ["Diferencia familia, variante y fuente.", "Familia: diseño común (Helvetica). Variante: estilo (negrita). Fuente: variante concreta en un archivo."],
      ["Dibuja una palabra y señala línea base, altura de x, ascendente y descendente.", "Respuesta gráfica: por ejemplo «hoja» con la h como ascendente y la j como descendente."],
      ["Cita los cinco grupos tipográficos y un ejemplo de dos de ellos.", "Romana (Garamond), palo seco (Helvetica), egipcia (Rockwell), manuscrita y decorativa."],
      ["¿Qué es el interlineado y qué valor es cómodo?", "La distancia entre líneas; entre 1,2 y 1,5 veces el cuerpo."],
    ],
    m: [
      ["Explica por qué las señales de carretera usan minúsculas.", "Las palabras en minúscula tienen una silueta más variada y reconocible, y se identifican antes a distancia."],
      ["Compara alineación justificada y a la izquierda: ventajas e inconvenientes.", "Justificada: bloque limpio, pero puede crear ríos. Izquierda: espaciado regular y más legible, con borde derecho irregular."],
      ["Propón dos combinaciones de tipografías para una revista juvenil.", "Respuesta abierta: palo seco geométrica para titulares y romana legible para textos, o al revés, con justificación."],
      ["¿Qué diferencia hay entre tracking y kerning?", "El tracking cambia el espacio de todas las letras de un texto; el kerning, el de una pareja concreta."],
    ],
    a: [
      ["Diseña una hoja de estilo tipográfico para el blog del instituto: familias, cuerpos, interlineado, colores y jerarquía.", "Respuesta abierta: documento con niveles H1, H2, texto y notas, justificando legibilidad y carácter."],
      ["Crea un abecedario de cinco letras inspirado en la rotulación tradicional de tu localidad.", "Respuesta abierta: se valora la coherencia del diseño y la observación previa."],
    ],
  },
  glosario: [
    ["Tipo móvil", "Pieza de metal con una letra para imprimir."],
    ["Glifo", "Cada signo de una fuente."],
    ["Asta", "Trazo principal de una letra."],
    ["Contraforma", "Espacio interior de una letra, como el de la o."],
    ["Modulación", "Diferencia de grosor entre los trazos."],
    ["Tracking", "Espacio general entre las letras de un texto."],
    ["Viuda", "Línea suelta de un párrafo al principio de una columna."],
    ["Fuente variable", "Archivo que contiene muchos pesos y anchuras."],
  ],
  situacion: {
    titulo: "La letra de mi pueblo",
    reto: "Documentar los rótulos de la localidad y diseñar una tipografía inspirada en ellos.",
    pasos: [
      "Fotografiad rótulos antiguos y actuales de comercios y calles.",
      "Clasificadlos por grupos tipográficos y analizad su anatomía.",
      "Elegid uno y dibujad un alfabeto básico inspirado en él.",
      "Aplicadlo a un cartel y presentadlo con las fotos de origen.",
    ],
    producto: "Archivo fotográfico clasificado, alfabeto dibujado y cartel de aplicación.",
    evaluacion: [
      "La clasificación usa bien el vocabulario.",
      "El alfabeto es coherente en proporción y estilo.",
      "El cartel es legible y tiene jerarquía.",
    ],
  },
  familias: [
    "Buscad juntos rótulos antiguos en vuestro barrio.",
    "Comparad la letra de un periódico y la de una revista juvenil.",
    "Jugad a adivinar qué transmite cada letra de los envases de la cocina.",
    "Mirad juntos un libro antiguo y uno actual: ¿cómo ha cambiado la letra?",
  ],
  saberes: "La tipografía: origen e historia; anatomía de la letra; clasificación de familias; medidas tipográficas (cuerpo, interlineado, tracking, kerning); legibilidad y composición del texto; combinación de tipografías; tipografía digital y licencias de uso",
  ideas: [
    "Taller de caligrafía o rotulación a mano.",
    "Juego de identificación de tipografías en marcas.",
    "Visita a una imprenta o a un taller de tipos móviles.",
    "Pruebas de legibilidad a distancia en el pasillo.",
  ],
  fuentes: [
    { t: "Tipografía, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Tipograf%C3%ADa" },
    { t: "Google Fonts: fuentes con licencia libre", url: "https://fonts.google.com/" },
  ],
});
