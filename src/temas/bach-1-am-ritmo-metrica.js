// Análisis Musical I, 1º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-am");

module.exports = B.tema({
  titulo: "Ritmo y métrica",
  minutos: 60,
  objetivos: [
    "Distinguir pulso, acento, compás y ritmo",
    "Reconocer de oído compases binarios, ternarios y de subdivisión ternaria",
    "Identificar recursos rítmicos: síncopa, contratiempo, anacrusa y ostinato",
    "Describir el ritmo de una obra con vocabulario técnico",
  ],
  claves: ["pulso", "acento", "compás", "figuras", "síncopa", "contratiempo", "anacrusa", "ostinato"],
  pregunta: {
    texto: "¿Por qué tu pie empieza a moverse solo cuando suena una canción que te gusta?",
    respuesta: "Porque tu cerebro detecta el <mark>pulso</mark>, un latido regular, y se sincroniza con él. Además percibe que unos pulsos pesan más que otros: eso es el <b>compás</b>. Encima de ese latido, el <b>ritmo</b> juega con duraciones largas y cortas. Este tema te enseña a ponerle nombre a todo lo que tu pie ya sabe.",
  },
  lectura: {
    titulo: "El corazón del bolero",
    html: `<p>En 1928, Maurice Ravel escribió una obra con una idea extrañísima: un mismo ritmo de caja, repetido sin cambiar durante unos quince minutos, sobre el que dos melodías van pasando de instrumento en instrumento, cada vez más fuerte. Ravel decía que era «un experimento de orquestación sin música».</p>
    <p>El <i>Bolero</i> se convirtió en una de las piezas más interpretadas del mundo. Su secreto es el ritmo: un <b>ostinato</b> hipnótico que nunca se detiene y que hace que el oyente sienta la tensión crecer. Hoy entenderás cómo funciona el tiempo en la música.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Pulso, tempo y acento",
      html: `<p>El <b>pulso</b> es el latido regular de la música, la unidad que marcamos con el pie o con palmas. Su velocidad es el <b>tempo</b>: puede ser lento o rápido, pero el pulso se mantiene constante (salvo indicaciones como <i>accelerando</i> o <i>ritardando</i>).</p>
      <p>No todos los pulsos se perciben igual. Algunos tienen más peso: son los pulsos <b>acentuados</b> o fuertes. La repetición regular de un pulso fuerte seguido de uno o varios débiles crea una sensación de orden: la <b>métrica</b>.</p>
      <p>Cuando la música no tiene pulso regular (como el canto gregoriano o algunas introducciones), se dice que tiene <b>ritmo libre</b>.</p>`,
      svg: B.cajas("Pulso, tempo y acento", [["Pulso", "latido|regular"], ["Tempo", "velocidad|del pulso"], ["Acento", "pulso|con más peso"]], { cols: 3 }),
    },
    {
      h: "El compás",
      html: `<p>El <b>compás</b> agrupa los pulsos en unidades iguales que empiezan siempre por un pulso fuerte. En la partitura se separan con <b>líneas divisorias</b> y se indican al principio con dos números: el de arriba dice cuántos pulsos hay; el de abajo, qué figura vale un pulso.</p>
      <p>Según el número de pulsos, el compás es <b>binario</b> (2/4: fuerte-débil, como una marcha), <b>ternario</b> (3/4: fuerte-débil-débil, como un vals) o <b>cuaternario</b> (4/4: fuerte-débil-semifuerte-débil, el más usado en el pop y el rock).</p>`,
      svg: B.compases("Compases de 2, 3 y 4 pulsos con el pulso fuerte destacado", [["2/4", 2, "marcha"], ["3/4", 3, "vals"], ["4/4", 4, "pop, rock"]]),
      video: { id: "RT5as5hvf8c", titulo: "Qué es 4/4, 3/4, 6/8… Patrón de ritmo", canal: "ChachiGuitar", vistas: 1209823 },
    },
    {
      h: "Subdivisión binaria y ternaria",
      html: `<p>Cada pulso puede dividirse en partes más pequeñas. Si se divide en dos, la <b>subdivisión es binaria</b> («un-y, dos-y»): son los compases <b>simples</b> como 2/4, 3/4 y 4/4.</p>
      <p>Si cada pulso se divide en tres («un-dos-tres, un-dos-tres»), la subdivisión es <b>ternaria</b>: son los compases <b>compuestos</b> como 6/8, 9/8 y 12/8. Un 6/8 tiene dos pulsos, cada uno con tres corcheas; suena «saltarín», como una tarantela o muchas baladas de rock.</p>
      <p>Distinguir 3/4 de 6/8 de oído es un clásico: el 3/4 tiene <mark>tres pulsos</mark> de dos partes; el 6/8, <mark>dos pulsos</mark> de tres partes.</p>`,
      svg: B.compases("Compás de 3/4 frente a 6/8: misma cantidad de corcheas, distinta agrupación", [["3/4", 3, "3 pulsos × 2"], ["6/8", 2, "2 pulsos × 3"], ["12/8", 4, "4 pulsos × 3"]]),
      video: { id: "JiNTAe0a33U", titulo: "La diferencia entre el compás 3/4 y el 6/8", canal: "Pere Hernàndez Music", vistas: 207553 },
    },
    {
      h: "Figuras y ritmo",
      html: `<p>El <b>ritmo</b> es la combinación de duraciones largas y cortas que se colocan sobre el pulso. Las duraciones se escriben con <b>figuras</b>: redonda (4 pulsos en 4/4), blanca (2), negra (1), corchea (½) y semicorchea (¼). Cada figura tiene su <b>silencio</b> equivalente.</p>
      <p>El <b>puntillo</b> añade la mitad del valor (una blanca con puntillo vale 3) y la <b>ligadura</b> une dos figuras de la misma nota en una sola duración.</p>
      <p>Al analizar no hace falta transcribir cada figura: basta describir si el ritmo es <b>regular</b> o <b>variado</b>, <b>lento</b> o <b>ágil</b>, y si hay un <b>motivo rítmico</b> que se repite.</p>`,
      svg: B.figuras("Figuras musicales y su duración en pulsos, tomando la negra como unidad"),
    },
    {
      h: "Síncopa, contratiempo y anacrusa",
      html: `<p>La <b>síncopa</b> es un sonido que empieza en una parte débil y se prolonga sobre la fuerte, desplazando el acento. Es el alma del jazz, el funk, el reguetón o la salsa: da sensación de «balanceo».</p>
      <p>El <b>contratiempo</b> es un sonido que empieza en parte débil tras un silencio en la fuerte: el típico «chas» de la guitarra del reggae o del ska.</p>
      <p>La <b>anacrusa</b> son una o varias notas que se oyen antes del primer pulso fuerte, como un impulso. El «Cumpleaños feliz» empieza con anacrusa: «Cum-<b>ple</b>…».</p>`,
      svg: B.cajas("Recursos que juegan con el acento", [["Síncopa", "débil → fuerte|jazz, funk"], ["Contratiempo", "silencio + débil|reggae, ska"], ["Anacrusa", "antes del 1.º|Cumpleaños feliz"], ["Hemiolia", "3 de 2 en 2 de 3|barroco, flamenco"]]),
    },
    {
      h: "Ostinato y polirritmia",
      html: `<p>El <b>ostinato</b> es un motivo rítmico (o melódico) que se repite de forma obstinada durante un fragmento largo. Da unidad y energía: el ritmo de caja del <i>Bolero</i> o el bajo de muchas canciones electrónicas son ostinatos.</p>
      <p>La <b>polirritmia</b> es la superposición de ritmos diferentes a la vez, por ejemplo tres contra dos. Es esencial en la música africana y en el flamenco, donde el compás de doce tiempos de la bulería mezcla acentos binarios y ternarios.</p>`,
      svg: B.formas("Un ostinato se repite mientras la melodía cambia", [["Ostinato", "A A A A A A"], ["Melodía", "A B A' C B' D"]]),
    },
    {
      h: "El ritmo en distintos estilos",
      html: `<p>Cada estilo tiene un ritmo reconocible. La <b>marcha</b> es binaria y regular; el <b>vals</b>, ternario con el acento en el primer tiempo. El <b>rock</b> y el <b>pop</b> usan el 4/4 con la caja en los tiempos 2 y 4 (el <i>backbeat</i>).</p>
      <p>El <b>swing</b> del jazz convierte las corcheas iguales en largas-cortas. El <b>reguetón</b> se basa en el patrón del <i>dembow</i>, un 3+3+2 sincopado. El <b>flamenco</b> organiza sus palos en ciclos de 12 tiempos con acentos propios.</p>`,
      svg: B.rejilla("Ritmo característico de varios estilos", ["Estilo", "Compás", "Rasgo"], [["Marcha", "2/4", "regular"], ["Vals", "3/4", "1 fuerte"], ["Rock / pop", "4/4", "backbeat 2 y 4"], ["Jazz", "4/4", "swing"], ["Reguetón", "4/4", "3+3+2"], ["Bulería", "12", "acentos mixtos"]]),
    },
    {
      h: "Cómo analizar el ritmo",
      html: `<p>Al escuchar una obra, describe su ritmo en este orden: <b>1.</b> ¿Hay pulso regular o ritmo libre? <b>2.</b> ¿Qué tempo tiene y cambia? <b>3.</b> ¿Qué compás percibes (binario, ternario, cuaternario; simple o compuesto)? <b>4.</b> ¿Qué recursos destacan: síncopas, contratiempos, ostinatos, anacrusa?</p>
      <p>Marca el pulso con la mano y cuenta: el pulso que «pesa» más te dice dónde empieza cada compás.</p>`,
      svg: B.flujo("Cuatro preguntas para analizar el ritmo", ["¿Pulso regular o libre?", "¿Qué tempo?", "¿Qué compás?", "¿Qué recursos rítmicos?"]),
    },
  ],
  figura: {
    titulo: "Claves del ritmo",
    items: [["Pulso", "♩ ♩ ♩", "latido", "regular"], ["Compás", "2 · 3 · 4", "grupos de pulsos", "fuerte y débiles"], ["Subdivisión", "2 o 3", "simple", "compuesto"], ["Recursos", "♪♩♪", "síncopa, ostinato", "anacrusa"]],
  },
  video: { id: "0Zo6flU6uUQ", titulo: "¿Qué es el ritmo?", canal: "EnMus Enseñanza musical", vistas: 351474 },
  quiz: [
    ["El latido regular de la música es…", ["el compás", "el pulso", "el ritmo", "la síncopa"], 1, "Es la unidad que marcamos con el pie."],
    ["El tempo es…", ["la velocidad del pulso", "el número de pulsos", "la duración de una nota", "un tipo de compás"], 0, "Lento, moderado o rápido."],
    ["Un vals está en compás de…", ["2/4", "3/4", "4/4", "6/8"], 1, "Fuerte-débil-débil."],
    ["En un 4/4, el número de arriba indica…", ["que la negra vale un pulso", "que hay cuatro pulsos por compás", "el tempo", "la tonalidad"], 1, "Arriba: cuántos pulsos; abajo: qué figura es el pulso."],
    ["Un compás de 6/8 tiene…", ["seis pulsos binarios", "dos pulsos de subdivisión ternaria", "tres pulsos", "cuatro pulsos"], 1, "Es un compás compuesto binario."],
    ["¿Cuánto vale una blanca con puntillo en 3/4?", ["2 pulsos", "3 pulsos", "4 pulsos", "1 pulso"], 1, "2 + la mitad (1) = 3."],
    ["Una nota que empieza en parte débil y se prolonga sobre la fuerte es…", ["una anacrusa", "una síncopa", "un contratiempo", "un silencio"], 1, "Desplaza el acento."],
    ["El «Cumpleaños feliz» empieza con…", ["síncopa", "anacrusa", "ostinato", "polirritmia"], 1, "Las primeras notas van antes del primer pulso fuerte."],
    ["Un motivo que se repite sin parar durante un fragmento es…", ["un ostinato", "una cadencia", "un acorde", "una anacrusa"], 0, "Como el ritmo de caja del Bolero."],
    ["En el rock, la caja suena sobre todo en los tiempos…", ["1 y 3", "2 y 4", "solo en el 1", "en todos"], 1, "Es el backbeat."],
  ],
  examen: [
    ["Escuchas «UN-dos-tres, UN-dos-tres» a tempo de baile. ¿Qué compás es?", ["2/4", "3/4", "4/4", "12/8"], 1, "Tres pulsos con el primero fuerte: ternario."],
    ["¿Qué diferencia un 3/4 de un 6/8?", ["Nada", "3/4: tres pulsos binarios; 6/8: dos pulsos ternarios", "El 6/8 es más lento", "El 3/4 es compuesto"], 1, "Mismo número de corcheas, distinta agrupación."],
    ["El «chas» de la guitarra en el reggae en parte débil tras silencio es…", ["síncopa", "contratiempo", "anacrusa", "hemiolia"], 1, "Ataque en parte débil precedido de silencio."],
    ["El canto gregoriano, sin pulso regular, tiene…", ["ritmo libre", "compás de 4/4", "polirritmia", "ostinato"], 0, "Sigue el ritmo del texto."],
    ["El dembow del reguetón agrupa las corcheas en…", ["2+2+2+2", "3+3+2", "4+4", "6+2"], 1, "Un patrón sincopado 3+3+2."],
  ],
  feynman: ["La diferencia entre pulso, compás y ritmo", "Cómo distinguir 3/4 de 6/8", "Qué es una síncopa con un ejemplo", "Por qué el Bolero se basa en un ostinato"],
  mapa: ["RITMO Y MÉTRICA", [["Pulso", "tempo · acento · ritmo libre"], ["Compás", "binario · ternario · cuaternario"], ["Subdivisión", "simple · compuesta"], ["Recursos", "síncopa · contratiempo · ostinato"]]],
  tarjetas: [
    ["Pulso", "Latido regular de la música."],
    ["Compás", "Agrupación regular de pulsos que empieza por uno fuerte."],
    ["Compás simple", "Pulso dividido en dos (2/4, 3/4, 4/4)."],
    ["Compás compuesto", "Pulso dividido en tres (6/8, 9/8, 12/8)."],
    ["Síncopa", "Sonido en parte débil prolongado sobre la fuerte."],
    ["Contratiempo", "Sonido en parte débil precedido de silencio."],
    ["Anacrusa", "Notas que preceden al primer pulso fuerte."],
    ["Ostinato", "Motivo que se repite de forma obstinada."],
  ],
  ejemplos: [
    ["Determina el compás de una canción en la que cuentas «UNO-dos-TRES-cuatro» con batería en 2 y 4.", ["Hay cuatro pulsos por grupo.", "El primero es fuerte y el tercero semifuerte.", "La caja en 2 y 4 es el backbeat del rock y el pop.", "Cada pulso se divide en dos."], "Compás de 4/4 (cuaternario simple)."],
    ["Calcula cuántos pulsos ocupa este ritmo en 4/4: blanca, negra, dos corcheas.", ["Blanca = 2.", "Negra = 1.", "Dos corcheas = ½ + ½ = 1."], "2 + 1 + 1 = 4 pulsos: llena un compás de 4/4."],
    ["Describe el ritmo del Bolero de Ravel.", ["Pulso regular y tempo moderado constante.", "Compás ternario (3/4).", "Ostinato de caja que se repite todo el tiempo.", "La intensidad crece de pp a ff."], "Ritmo regular en 3/4 basado en un ostinato y un gran crescendo."],
  ],
  errores: [
    "Confundir ritmo y pulso: el pulso es constante; el ritmo, variado.",
    "Pensar que 6/8 tiene seis pulsos: tiene dos, divididos en tres.",
    "Contar el compás desde la anacrusa en lugar de desde el primer pulso fuerte.",
    "Llamar síncopa a cualquier ritmo rápido.",
  ],
  ejercicios: {
    b: [
      ["Define pulso, acento y compás.", "Pulso: latido regular. Acento: mayor peso de un pulso. Compás: agrupación regular de pulsos que empieza por uno acentuado."],
      ["¿Qué significan los dos números de un 3/4?", "Arriba, 3 pulsos por compás; abajo, 4, que la negra vale un pulso."],
      ["Completa: en 4/4 una redonda vale ___ pulsos, una blanca ___ y una corchea ___.", "4, 2 y ½."],
      ["Pon un ejemplo de estilo en 2/4, en 3/4 y en 4/4.", "2/4: marcha o pasodoble. 3/4: vals. 4/4: pop o rock."],
    ],
    m: [
      ["Explica la diferencia entre compás simple y compuesto con un ejemplo de cada uno.", "Simple: el pulso se divide en dos (2/4). Compuesto: el pulso se divide en tres (6/8)."],
      ["¿Qué recurso rítmico es el inicio de «Cumpleaños feliz» y por qué?", "Anacrusa: las sílabas «Cum-» se cantan antes del primer pulso fuerte, que cae en «-ple-»."],
      ["Diferencia síncopa y contratiempo.", "Ambas atacan en parte débil, pero la síncopa se prolonga sobre la fuerte y el contratiempo va precedido de silencio en la parte fuerte."],
      ["¿Por qué un ostinato da unidad a una obra?", "Porque su repetición constante crea un fondo reconocible sobre el que cambian los demás elementos, y el oyente percibe continuidad."],
    ],
    a: [
      ["Escucha una canción de reguetón y otra de rock. Compara su ritmo con la guía de cuatro preguntas.", "Respuesta abierta: ambas suelen ser 4/4 con pulso regular; el rock destaca por el backbeat en 2 y 4 y el reguetón por el dembow 3+3+2 sincopado; tempo y recursos varían."],
      ["Inventa un ostinato rítmico de un compás de 4/4 con palmas y escribe sus figuras.", "Respuesta abierta: debe sumar 4 pulsos (por ejemplo negra, dos corcheas, negra, silencio de negra) y poder repetirse."],
    ],
  },
  glosario: [
    ["Métrica", "Organización de los pulsos en fuertes y débiles."],
    ["Línea divisoria", "Barra vertical que separa los compases."],
    ["Figura", "Signo que indica la duración de un sonido."],
    ["Puntillo", "Punto que añade a una figura la mitad de su valor."],
    ["Ligadura", "Línea que une dos notas iguales en una sola duración."],
    ["Backbeat", "Acento en los tiempos 2 y 4 del 4/4."],
    ["Swing", "Interpretación de corcheas como largas-cortas en el jazz."],
    ["Polirritmia", "Superposición de ritmos diferentes a la vez."],
    ["Hemiolia", "Alternancia de agrupaciones de 2 y de 3 en el mismo espacio."],
    ["Ritmo libre", "Música sin pulso regular."],
  ],
  situacion: {
    titulo: "Percusión corporal de clase",
    reto: "Crear en grupo una pieza de percusión corporal de 16 compases con ostinato, síncopa y anacrusa.",
    pasos: [
      "Elegid un compás (2/4, 3/4 o 4/4) y un tempo.",
      "Cread un ostinato de palmas y pies que sirva de base.",
      "Añadid encima un ritmo con síncopas y una entrada en anacrusa.",
      "Ensayad, grabad la pieza y escribid su esquema rítmico.",
    ],
    producto: "Una grabación de la pieza y su partitura rítmica sencilla.",
    evaluacion: [
      "Mantiene el pulso y el compás elegidos.",
      "Incluye correctamente ostinato, síncopa y anacrusa.",
      "La escritura rítmica suma bien cada compás.",
      "Trabaja con coordinación en grupo.",
    ],
  },
  familias: [
    "Pedidle que marque el pulso de vuestra canción favorita y diga su compás.",
    "Bailad juntos un vals y una canción de pop: notad la diferencia de compás.",
    "Escuchad el Bolero de Ravel y comentad cómo crece.",
    "Jugad a repetir ritmos con palmas por turnos.",
  ],
  saberes: "Análisis Musical I: pulso, tempo y acento; compases simples y compuestos; figuras y valores; recursos rítmicos (síncopa, contratiempo, anacrusa, hemiolia, ostinato, polirritmia); el ritmo como rasgo de estilo.",
  ideas: [
    "Marcar pulso y acento con el cuerpo antes de usar la partitura.",
    "Dictados de compás con fragmentos de vals, marcha y pop.",
    "Comparar 3/4 y 6/8 con «América» de West Side Story.",
    "Crear ostinatos con apps de caja de ritmos.",
  ],
  fuentes: [
    { t: "Bolero (Ravel), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Bolero_(Ravel)" },
    { t: "Compás (música), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Comp%C3%A1s_(m%C3%BAsica)" },
  ],
});
