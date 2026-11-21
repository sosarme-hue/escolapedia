// Lenguaje y Práctica Musical, 1º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-lp");

module.exports = B.tema({
  titulo: "Ritmo y lectura",
  minutos: 60,
  objetivos: [
    "Leer notas en clave de sol y en clave de fa con soltura",
    "Leer y reproducir ritmos con figuras, silencios, puntillos, ligaduras y tresillos",
    "Interpretar los signos de tempo, dinámica, articulación y repetición",
    "Aplicar un método ordenado para leer una partitura nueva",
  ],
  claves: ["pentagrama", "clave", "figuras", "silencios", "compás", "puntillo", "tresillo", "repetición"],
  pregunta: {
    texto: "¿Se puede aprender a leer música igual que se aprende a leer un texto?",
    respuesta: "Sí. Una partitura es un texto con dos informaciones a la vez: la <mark>altura</mark> (qué nota suena, según su lugar en el pentagrama) y la <b>duración</b> (cuánto dura, según la figura). Al principio se lee letra a letra; con práctica diaria se lee «por palabras», reconociendo grupos de notas y ritmos de un vistazo.",
  },
  lectura: {
    titulo: "Un monje y cuatro líneas",
    html: `<p>Hacia el año 1025, el monje italiano <b>Guido d'Arezzo</b> estaba cansado de que sus cantores tardaran años en aprender el repertorio de memoria. Propuso escribir las notas sobre líneas horizontales, de modo que su posición indicara la altura, y dio nombre a las notas con las primeras sílabas de un himno a San Juan: <i>Ut, Re, Mi, Fa, Sol, La</i>.</p>
    <p>Con su sistema, decía, un cantor aprendía en unos meses lo que antes costaba diez años. De sus cuatro líneas nació el <b>pentagrama</b> de cinco, y el <i>Ut</i> se cambió por <i>Do</i>. Hoy seguimos leyendo música con esa idea genial: ver el sonido antes de oírlo.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "El pentagrama y las claves",
      html: `<p>El <b>pentagrama</b> tiene cinco líneas y cuatro espacios, que se cuentan de abajo arriba. Cuanto más arriba está una nota, más aguda suena. Para notas que se salen se usan <b>líneas adicionales</b>.</p>
      <p>La <b>clave</b> da nombre a una línea y, a partir de ella, a todas las demás. La <b>clave de sol</b> (en 2.ª línea) sirve para sonidos agudos: voz de soprano, flauta, violín o la mano derecha del piano. La <b>clave de fa</b> (en 4.ª línea) sirve para los graves: voz de bajo, violonchelo o la mano izquierda del piano.</p>
      <p>El <b>Do central</b> del piano se escribe con una línea adicional por debajo en clave de sol y por encima en clave de fa: es el puente entre las dos.</p>`,
      svg: B.melodia("Escala de Do en clave de sol, del Do central al Do agudo", [-2, -1, 0, 1, 2, 3, 4, 5], { nombres: ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si", "Do"], perfil: false }),
      video: { id: "m9BO6JlCJBU", titulo: "Cómo ubicar las notas en el pentagrama", canal: "PROFE CESAR ANAYA", vistas: 335182 },
    },
    {
      h: "Leer notas con rapidez",
      html: `<p>Leer nota a nota contando desde el Do es lento. Funciona mejor memorizar <b>notas guía</b>: en clave de sol, las líneas son <mark>Mi-Sol-Si-Re-Fa</mark> y los espacios <mark>Fa-La-Do-Mi</mark>. En clave de fa, las líneas son Sol-Si-Re-Fa-La y los espacios La-Do-Mi-Sol.</p>
      <p>El segundo truco es leer por <b>distancias</b>: de una línea a la línea siguiente hay un salto de tercera; de línea a espacio contiguo, una segunda. Así no se nombra cada nota, sino que se sigue el dibujo de la melodía: sube un paso, salta, baja…</p>
      <p>Diez minutos diarios de lectura en voz alta con un tarjetero o una aplicación bastan para ganar velocidad en pocas semanas.</p>`,
      svg: B.cajas("Notas guía en clave de sol y de fa", [["Sol · líneas", "Mi Sol Si Re Fa"], ["Sol · espacios", "Fa La Do Mi"], ["Fa · líneas", "Sol Si Re Fa La"], ["Fa · espacios", "La Do Mi Sol"]]),
    },
    {
      h: "Figuras y silencios",
      html: `<p>La <b>figura</b> indica cuánto dura un sonido. Tomando la negra como pulso, la <b>redonda</b> vale 4, la <b>blanca</b> 2, la <b>negra</b> 1, la <b>corchea</b> ½ y la <b>semicorchea</b> ¼. Cada figura tiene su <b>silencio</b>, que dura lo mismo pero sin sonar.</p>
      <p>Las corcheas y semicorcheas que caen en el mismo pulso se unen con <b>barras</b>, para que el ojo vea los pulsos de un vistazo. Leer bien el ritmo es, sobre todo, saber <mark>dónde empieza cada pulso</mark>.</p>
      <p>Los silencios no son «huecos» sin importancia: un silencio mal contado desplaza todo lo que viene después.</p>`,
      svg: B.figuras("Figuras musicales y su duración en pulsos, con la negra como unidad"),
    },
    {
      h: "Contar y leer el ritmo",
      html: `<p>El <b>compás</b> agrupa los pulsos: 2/4, 3/4 y 4/4 son los más comunes. Para leer un ritmo se marca el pulso con la mano o el pie y se <b>cuenta en voz alta</b>: «1-y-2-y-3-y-4-y». Cada «y» es la segunda mitad del pulso, donde caen las corcheas a contratiempo.</p>
      <p>Muchas escuelas usan <b>sílabas rítmicas</b>: <i>ta</i> para la negra, <i>ti-ti</i> para dos corcheas, <i>ta-a</i> para la blanca. Primero se recita el ritmo con sílabas; después, con el nombre de las notas (<b>solfeo hablado</b>); por último, cantando o tocando.</p>
      <p>La regla de oro: <mark>el pulso no se para</mark>, aunque te equivoques.</p>`,
      svg: B.compases("Compases de 2, 3 y 4 pulsos con el primer pulso fuerte", [["2/4", 2, "marcha"], ["3/4", 3, "vals"], ["4/4", 4, "pop"]]),
      video: { id: "kZl-JorQmcU", titulo: "10 ejercicios de oro para aprender a leer ritmos", canal: "Oido Musical", vistas: 499291 },
    },
    {
      h: "Puntillo, ligadura, tresillo y síncopa",
      html: `<p>El <b>puntillo</b> alarga una figura la mitad de su valor: una negra con puntillo vale 1½ y suele ir seguida de una corchea («ta-a-i, ti»). La <b>ligadura</b> une dos notas iguales y se toca solo la primera, sumando sus duraciones; permite que un sonido cruce la línea divisoria.</p>
      <p>El <b>tresillo</b> mete tres figuras en el tiempo de dos: tres corcheas en un pulso, con un 3 encima. Se cuenta «tri-o-la» de forma muy pareja.</p>
      <p>La <b>síncopa</b> es una nota que empieza en parte débil y se prolonga sobre la fuerte. Para leerla bien, cuenta siempre las subdivisiones en voz baja.</p>`,
      svg: B.cajas("Cuatro recursos de lectura rítmica", [["Puntillo", "+ la mitad|♩. = 1½"], ["Ligadura", "suma valores|cruza la barra"], ["Tresillo", "3 en lugar de 2|«tri-o-la»"], ["Síncopa", "débil → fuerte|cuenta la «y»"]]),
    },
    {
      h: "Tempo, dinámica y articulación",
      html: `<p>La partitura también indica <b>cómo</b> tocar. El <b>tempo</b> se escribe en italiano: <i>Largo</i> y <i>Adagio</i> (lentos), <i>Andante</i> (al paso), <i>Moderato</i>, <i>Allegro</i> y <i>Presto</i> (rápidos), o con un número de metrónomo (♩ = 90).</p>
      <p>La <b>dinámica</b> indica la intensidad: <i>pp</i>, <i>p</i>, <i>mp</i>, <i>mf</i>, <i>f</i>, <i>ff</i>, y los reguladores de <i>crescendo</i> y <i>diminuendo</i>.</p>
      <p>La <b>articulación</b> dice cómo se ataca y une cada nota: <b>legato</b> (ligado, con una curva sobre varias notas), <b>staccato</b> (picado, con un punto encima), <b>acento</b> (&gt;) y <b>calderón</b>, que alarga la nota a gusto del intérprete.</p>`,
      svg: B.rejilla("Signos de interpretación más frecuentes", ["Tipo", "Signo", "Significado"], [["Tempo", "Allegro", "rápido"], ["Tempo", "Andante", "al paso"], ["Dinámica", "p / f", "suave / fuerte"], ["Dinámica", "cresc.", "cada vez más fuerte"], ["Articulación", "staccato", "picado y corto"], ["Articulación", "legato", "ligado"]]),
    },
    {
      h: "Signos de repetición",
      html: `<p>Para no escribir dos veces lo mismo, la partitura usa <b>signos de repetición</b>. La <b>barra de repetición</b> (dos puntos junto a una doble barra) manda volver al principio o a la barra de inicio. Las <b>casillas de 1.ª y 2.ª vez</b> indican qué final se toca en cada pasada.</p>
      <p><b>D.C.</b> (<i>Da Capo</i>) significa volver al principio; <b>D.S.</b> (<i>Dal Segno</i>), volver al signo <i>segno</i>. <b>Fine</b> marca dónde se acaba y el signo de <b>coda</b> (un círculo cruzado) manda saltar a la sección final.</p>
      <p>Antes de tocar, sigue con el dedo el «mapa» de la pieza: así no te perderás en las vueltas.</p>`,
      svg: B.formas("Recorrido de una partitura con repetición, D.C. y coda", [["Escrito", "A B C Coda"], ["Se toca", "A A B C A B Coda"]]),
    },
    {
      h: "Método para leer una partitura nueva",
      html: `<p>Antes de tocar la primera nota, haz un <b>análisis previo</b> de un minuto: mira la <b>clave</b>, la <b>armadura</b> (sostenidos o bemoles fijos), el <b>compás</b>, el <b>tempo</b> y los signos de repetición. Localiza los pasajes difíciles.</p>
      <p>Después, lee <b>solo el ritmo</b> con palmas o sílabas, marcando el pulso. Luego recita las <b>notas en ritmo</b> (solfeo hablado). Por último, canta o toca <b>despacio</b>, sin detenerte, y sube el tempo poco a poco.</p>
      <p>Esta lectura sin preparación se llama <b>lectura a primera vista</b> o repentización, y mejora con práctica breve y constante.</p>`,
      svg: B.flujo("Cuatro pasos para leer una partitura nueva", ["Mirar clave, armadura, compás y tempo", "Leer solo el ritmo con palmas", "Decir las notas en ritmo", "Cantar o tocar despacio sin parar"]),
    },
  ],
  figura: {
    titulo: "Claves de la lectura musical",
    items: [["Altura", "𝄞 𝄢", "pentagrama", "y claves"], ["Duración", "♩ ♪ ♫", "figuras", "y silencios"], ["Pulso", "1-y-2-y", "contar", "en voz alta"], ["Expresión", "p · f · >", "tempo, dinámica", "articulación"]],
  },
  video: { id: "CkT_5AuaZTA", titulo: "Te enseño a leer esto en 14 minutos (aunque no seas músico)", canal: "Pierre St. John", vistas: 5058401 },
  quiz: [
    ["La clave de sol se coloca en…", ["la 1.ª línea", "la 2.ª línea", "la 3.ª línea", "la 4.ª línea"], 1, "Da nombre de Sol a la segunda línea."],
    ["La clave de fa se usa sobre todo para…", ["sonidos agudos", "sonidos graves", "la percusión", "los silencios"], 1, "Bajo, violonchelo, mano izquierda del piano."],
    ["Las líneas del pentagrama en clave de sol son…", ["Do Mi Sol Si Re", "Mi Sol Si Re Fa", "Fa La Do Mi Sol", "Sol Si Re Fa La"], 1, "De abajo arriba: Mi, Sol, Si, Re, Fa."],
    ["Con la negra como pulso, una blanca vale…", ["1", "2", "4", "½"], 1, "Dos negras."],
    ["Una negra con puntillo vale…", ["1", "1½", "2", "3"], 1, "1 + la mitad (½)."],
    ["El tresillo de corcheas mete…", ["dos notas en un pulso", "tres notas en el tiempo de dos", "cuatro notas en un pulso", "una nota en dos pulsos"], 1, "Se cuenta «tri-o-la»."],
    ["La ligadura entre dos notas iguales…", ["repite la nota", "suma sus duraciones", "la hace más fuerte", "la pica"], 1, "Solo se ataca la primera."],
    ["«Allegro» indica…", ["tempo lento", "tempo rápido", "intensidad fuerte", "notas picadas"], 1, "Es una indicación de tempo."],
    ["D.C. significa…", ["volver al principio", "saltar a la coda", "repetir el compás", "terminar"], 0, "Da Capo: desde la cabeza."],
    ["Un punto encima de una nota indica…", ["legato", "staccato", "calderón", "acento"], 1, "Picado y corto."],
  ],
  examen: [
    ["En 3/4, ¿qué completa el compás tras una blanca?", ["una blanca", "una negra", "una redonda", "dos negras"], 1, "2 + 1 = 3 pulsos."],
    ["El Do central en clave de sol se escribe…", ["en el 3.er espacio", "con una línea adicional por debajo", "en la 5.ª línea", "en el 1.er espacio"], 1, "Justo debajo del pentagrama."],
    ["¿Qué orden es el más eficaz para leer una partitura nueva?", ["tocar rápido desde el principio", "análisis previo, ritmo, notas en ritmo, tocar despacio", "leer solo las notas", "escuchar una grabación y copiarla"], 1, "De lo general a lo concreto, sin parar el pulso."],
    ["Una pieza A B con barra de repetición al final de B, que manda volver al principio, se toca…", ["A B", "A B A B", "A A B B", "B A B"], 1, "Al llegar a la barra se vuelve al inicio y se toca todo otra vez."],
    ["La negra con puntillo suele ir seguida de…", ["una blanca", "una corchea", "un tresillo", "una redonda"], 1, "1½ + ½ completa dos pulsos."],
  ],
  feynman: ["Para qué sirven las claves", "Cómo contar en voz alta un ritmo con corcheas", "Qué hacen el puntillo y la ligadura", "Cómo preparar la lectura de una partitura nueva"],
  mapa: ["RITMO Y LECTURA", [["Altura", "pentagrama · claves · notas guía"], ["Duración", "figuras · silencios · puntillo"], ["Expresión", "tempo · dinámica · articulación"], ["Lectura", "contar · solfeo · primera vista"]]],
  tarjetas: [
    ["Pentagrama", "Cinco líneas y cuatro espacios donde se escriben las notas."],
    ["Clave de sol", "Clave en 2.ª línea para sonidos agudos."],
    ["Clave de fa", "Clave en 4.ª línea para sonidos graves."],
    ["Silencio", "Signo que indica una duración sin sonido."],
    ["Puntillo", "Añade a la figura la mitad de su valor."],
    ["Tresillo", "Tres figuras en el tiempo de dos."],
    ["Staccato", "Articulación picada, notas cortas y separadas."],
    ["Da Capo", "Indicación de volver al principio."],
  ],
  ejemplos: [
    ["Lee las notas en clave de sol: 2.ª línea, 3.er espacio, 5.ª línea.", ["La 2.ª línea es la de la clave: Sol.", "Espacios: Fa-La-Do-Mi; el 3.º es Do.", "Líneas: Mi-Sol-Si-Re-Fa; la 5.ª es Fa."], "Sol, Do, Fa."],
    ["Comprueba si este compás de 4/4 está completo: negra con puntillo, corchea, blanca.", ["Negra con puntillo = 1½.", "Corchea = ½.", "Blanca = 2."], "1½ + ½ + 2 = 4 pulsos: está completo."],
    ["Escribe cómo contarías en voz alta: negra, dos corcheas, negra, negra (4/4).", ["Negra en el 1: «1».", "Dos corcheas en el 2: «2-y».", "Negras en el 3 y el 4: «3», «4»."], "«1 — 2-y — 3 — 4», con el pulso constante."],
  ],
  errores: [
    "Leer las notas contando siempre desde el Do en vez de usar notas guía.",
    "Parar el pulso al encontrar una nota difícil.",
    "Olvidar contar los silencios, sobre todo al final del compás.",
    "Tocar la segunda nota de una ligadura como si fuera nueva.",
  ],
  ejercicios: {
    b: [
      ["Escribe los nombres de las líneas y los espacios en clave de sol.", "Líneas: Mi, Sol, Si, Re, Fa. Espacios: Fa, La, Do, Mi."],
      ["¿Cuántas corcheas caben en una blanca con puntillo?", "Una blanca con puntillo vale 3 pulsos; cada pulso tiene 2 corcheas: 6 corcheas."],
      ["Ordena de más lento a más rápido: Allegro, Adagio, Presto, Andante.", "Adagio, Andante, Allegro, Presto."],
      ["¿Qué diferencia hay entre staccato y legato?", "Staccato: notas cortas y separadas. Legato: notas unidas sin corte entre ellas."],
    ],
    m: [
      ["Completa con una sola figura: compás de 3/4 con negra y corchea.", "Faltan 1½ pulsos: una negra con puntillo."],
      ["Explica por qué el Do central se escribe distinto en clave de sol y en clave de fa.", "Porque cada clave nombra una línea distinta: el Do central queda una línea adicional por debajo en clave de sol y una por encima en clave de fa."],
      ["Una pieza tiene A con barras de repetición, B con casillas de 1.ª y 2.ª vez. Escribe el orden real.", "A A B(1.ª casilla) B(2.ª casilla)."],
      ["¿Cómo contarías un tresillo de corcheas seguido de dos corcheas normales?", "«1-tri-o-la» de forma pareja en el primer pulso y «2-y» en el segundo, notando el cambio de subdivisión."],
    ],
    a: [
      ["Elige una partitura sencilla de una canción que conozcas y aplica el método de cuatro pasos. Anota qué te costó más.", "Respuesta abierta: debe describir clave, armadura, compás y tempo; el ritmo leído con palmas; las notas en ritmo y la interpretación lenta, señalando el pasaje difícil."],
      ["Escribe un ritmo de 4 compases en 4/4 que incluya puntillo, ligadura, tresillo y un silencio. Recítalo con sílabas rítmicas.", "Respuesta abierta: cada compás debe sumar 4 pulsos y los cuatro recursos deben aparecer bien escritos."],
    ],
  },
  glosario: [
    ["Línea adicional", "Línea corta para escribir notas fuera del pentagrama."],
    ["Armadura", "Alteraciones fijas escritas tras la clave."],
    ["Barra", "Trazo que une corcheas o semicorcheas de un mismo pulso."],
    ["Solfeo hablado", "Recitar el nombre de las notas en su ritmo."],
    ["Metrónomo", "Aparato que marca el pulso a una velocidad exacta."],
    ["Dinámica", "Grado de intensidad con que suena la música."],
    ["Calderón", "Signo que prolonga una nota a voluntad."],
    ["Casilla", "Final distinto para cada vez que se repite un fragmento."],
    ["Coda", "Sección final a la que se salta con su signo."],
    ["Primera vista", "Lectura de una partitura sin haberla preparado."],
  ],
  situacion: {
    titulo: "Reto de lectura a primera vista",
    reto: "Preparar en parejas la lectura de una partitura breve desconocida y tocarla o cantarla sin parar.",
    pasos: [
      "Cada pareja recibe 8 compases de una melodía sencilla.",
      "Hacen el análisis previo y marcan los pasajes difíciles.",
      "Leen el ritmo con palmas y las notas en ritmo.",
      "La interpretan a tempo lento y la graban.",
    ],
    producto: "Una grabación de la lectura y la partitura con las anotaciones de preparación.",
    evaluacion: [
      "Mantiene el pulso sin detenerse.",
      "Lee correctamente notas y figuras.",
      "Respeta tempo, dinámica y repeticiones.",
      "Explica qué estrategia usó en los pasajes difíciles.",
    ],
  },
  familias: [
    "Pedidle que os enseñe a leer las notas de una canción sencilla.",
    "Jugad a repetir ritmos con palmas y a inventar otros.",
    "Usad un metrónomo gratuito en el móvil para marcar el pulso juntos.",
    "Animadle a dedicar diez minutos diarios a la lectura.",
  ],
  saberes: "Lenguaje y Práctica Musical: grafía musical; claves de sol y fa; figuras, silencios y compases; puntillo, ligadura, tresillo y síncopa; indicaciones de tempo, dinámica y articulación; signos de repetición; lectura a primera vista (RD 243/2022).",
  ideas: [
    "Lectura diaria de cinco minutos con tarjetas de notas y apps.",
    "Dictados rítmicos breves con percusión corporal.",
    "Competiciones de lectura de notas por equipos.",
    "Leer partituras de canciones que el alumnado elija.",
  ],
  fuentes: [
    { t: "Guido de Arezzo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Guido_de_Arezzo" },
    { t: "Clave (música), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Clave_(m%C3%BAsica)" },
  ],
});
