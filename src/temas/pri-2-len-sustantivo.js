// Lengua Castellana 2º de Primaria: el sustantivo, nombres comunes y propios. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas, cuantos } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "El sustantivo: nombres comunes y propios",
  minutos: 25,
  objetivos: ["Saber que los sustantivos nombran personas, animales, cosas y lugares", "Distinguir nombres comunes y nombres propios", "Escribir los nombres propios con mayúscula"],
  claves: ["sustantivo", "nombre común", "nombre propio", "mayúscula", "nombre colectivo"],
  pregunta: {
    texto: "Tu perro se llama Toby. ¿«Perro» y «Toby» son lo mismo?",
    respuesta: "Las dos palabras son <mark>sustantivos</mark>, pero no son iguales. <b>perro</b> sirve para todos los perros: es un nombre <b>común</b>. <b>Toby</b> es el nombre de uno solo: es un nombre <b>propio</b>.",
  },
  bloques: [
    {
      html: `<h3>Palabras que nombran</h3><p>Todo lo que nos rodea tiene un <mark>nombre</mark>. Esas palabras se llaman <b>sustantivos</b>.</p><p>Nombran <b>personas</b> (niña, abuelo), <b>animales</b> (gato, pez), <b>cosas</b> (mesa, libro) y <b>lugares</b> (casa, escuela).</p><p>Si puedes señalarlo o imaginarlo, ¡seguro que tiene un sustantivo!</p><p>Tu nombre, tu calle y tu juguete favorito también son sustantivos.</p>`,
      svg: dibujos("Una niña, un gato, un libro y una escuela: persona, animal, cosa y lugar", [["nina", "niña", R], ["gato", "gato", A], ["libro", "libro", Ve], ["escuela", "escuela", N]], { titulo: "Persona · animal · cosa · lugar", nota: "Todos son sustantivos" }),
      video: V("susV", "el sustantivo para niños"),
    },
    {
      html: `<h3>Un truco para encontrarlos</h3><p>Delante de un sustantivo podemos poner <mark>el, la, un o una</mark>.</p><p><i>el</i> sol, <i>la</i> luna, <i>un</i> árbol, <i>una</i> flor. ¡Funciona!</p><p>Con otras palabras no funciona: «el corre» o «la bonito» suenan mal. Así sabemos que <i>corre</i> y <i>bonito</i> no son sustantivos.</p><p>Prueba tú con <i>lápiz</i>, <i>salta</i> y <i>nube</i>. ¿Cuáles encajan?</p>`,
      svg: frase("El sol, la luna, un árbol, una flor", [["el", "var(--muted)"], ["sol", R], ["la", "var(--muted)"], ["luna", R], ["/"], ["un", "var(--muted)"], ["árbol", R], ["una", "var(--muted)"], ["flor", R]], { titulo: "el, la, un, una + sustantivo", nota: "Si encaja, es un sustantivo", fs: 22 }),
    },
    {
      html: `<h3>Nombres comunes</h3><p>Los <mark>nombres comunes</mark> sirven para nombrar a <b>todos</b> los de una clase.</p><p><i>Perro</i> vale para cualquier perro: grande, pequeño, blanco o negro. <i>Ciudad</i> vale para cualquier ciudad. <i>Niño</i>, para cualquier niño.</p><p>Se escriben con <b>minúscula</b>, salvo al empezar una frase.</p><p>Más nombres comunes: <i>mesa</i>, <i>montaña</i>, <i>pájaro</i>, <i>amiga</i>, <i>calle</i>.</p>`,
      svg: dibujos("Perro, ciudad y niño: nombres comunes para todos los de su clase", [["perro", "perro", A], ["casa", "ciudad", A], ["nino", "niño", A]], { titulo: "Nombres comunes", nota: "Para todos · con minúscula" }),
    },
    {
      html: `<h3>Nombres propios</h3><p>Los <mark>nombres propios</mark> nombran a <b>uno solo</b> y lo distinguen de los demás.</p><p>Son nombres de personas (<i>Lucía</i>), mascotas (<i>Toby</i>), ciudades (<i>Sevilla</i>), países (<i>España</i>), ríos (<i>Ebro</i>) y montañas (<i>Teide</i>).</p><p>Siempre se escriben con <b>mayúscula</b> inicial. ¡Aunque estén en medio de la frase!</p>`,
      svg: parejas("Perro común y Toby propio; niña común y Lucía propio; ciudad común y Sevilla propio", [["perro", "perro", "perro", "Toby"], ["nina", "niña", "nina", "Lucía"], ["casa", "ciudad", "casa", "Sevilla"]], { izq: "común", der: "propio", color: A, color2: R, flecha: "→" }),
      video: V("susB"),
    },
    {
      html: `<h3>¿Común o propio?</h3><p>Hazte una pregunta: <mark>¿nombra a todos o a uno solo?</mark></p><p><i>Río</i> nombra a todos los ríos: es común. <i>Tajo</i> nombra a un río concreto: es propio.</p><p>Otra pista: si lleva mayúscula en medio de una frase, seguramente es propio. «Mi gata <b>Nube</b> duerme en el sofá.»</p>`,
      svg: lista("Río nombra a todos, es común; Tajo nombra a uno, es propio con mayúscula", [["río → a todos: común", A], ["Tajo → a uno: propio", R], ["gata → común", A], ["Nube → propio, con mayúscula", R]], { titulo: "¿A todos o a uno solo?", marca: "?" }),
    },
    {
      html: `<h3>Nombres individuales y colectivos</h3><p>Algunos sustantivos nombran a <b>uno</b>: <i>oveja</i>, <i>árbol</i>, <i>pez</i>. Son <mark>individuales</mark>.</p><p>Otros nombran a un <b>grupo</b> aunque estén en singular: <i>rebaño</i> (de ovejas), <i>bosque</i> (de árboles), <i>banco</i> (de peces). Son <mark>colectivos</mark>.</p><p>Un <i>enjambre</i> es un grupo de abejas. ¡Y una <i>orquesta</i>, de músicos!</p>`,
      svg: cuantos("Un árbol y un bosque; un pez y un banco de peces", [["arbol", "árbol", "bosque", 3], ["pez", "pez", "banco", 3]], { izq: "individual", der: "colectivo", color: A, color2: Ve }),
      video: V("susB2"),
    },
    {
      html: `<h3>Sustantivos en las frases</h3><p>En casi todas las frases hay <mark>sustantivos</mark>. Nos dicen <b>de quién</b> o <b>de qué</b> hablamos.</p><p>«<b>Marta</b> come una <b>manzana</b> en el <b>parque</b>.» Aquí hay tres sustantivos: Marta (propio), manzana y parque (comunes).</p><p>Pinta de colores los sustantivos de un cuento. ¡Verás cuántos hay!</p>`,
      svg: frase("Marta come una manzana en el parque: Marta, manzana y parque son sustantivos", [["Marta", R], ["come", K], ["una", K], ["manzana", A], ["/"], ["en", K], ["el", K], ["parque", A]], { titulo: "Busca los sustantivos", nota: "Rojo: propio · azul: comunes", fs: 22 }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Sin sustantivos <mark>no sabríamos de qué hablamos</mark>. «Come una en el» no se entiende.</p><p>Los nombres propios nos ayudan a no confundirnos: hay muchos perros, pero solo un <i>Toby</i>.</p><p>Al escribir una carta, un cuento o una dirección, la mayúscula de los nombres propios es muy importante.</p>`,
      svg: charla("Un niño dice he visto un perro y la niña pregunta cuál; responde Toby, el de mi vecina", [["nino", "He visto un perro.", A], ["nina", "¿Cuál? Hay muchos.", R], ["nino", "¡Toby, el de Ana!", A], ["nina", "¡Ahora lo sé!", R]]),
    },
    {
      html: `<h3>Juego: nombre, ciudad, animal</h3><p>Elegid una <b>letra</b>, por ejemplo la <b>m</b>.</p><p>Cada jugador escribe: un <mark>nombre de persona</mark> (Marta), una <mark>ciudad</mark> (Madrid), un <mark>animal</mark> (mono) y una <mark>cosa</mark> (mesa).</p><p>¡Ojo! Los nombres propios llevan mayúscula. Ganáis un punto por cada palabra bien escrita.</p>`,
      svg: lista("Juego con la m: Marta, Madrid, mono, mesa", [["Persona: Marta", R], ["Ciudad: Madrid", R], ["Animal: mono", A], ["Cosa: mesa", A]], { titulo: "Con la letra m", marca: "✓" }),
    },
  ],
  figura: {
    titulo: "El sustantivo",
    svg: mural("Sustantivos que nombran; comunes como perro; propios como Toby con mayúscula; colectivos como bosque", [["libro", "sustantivo", "palabra que nombra", A], ["perro", "perro", "común: a todos", Ve], ["gato", "Toby", "propio: mayúscula", R], ["arbol", "bosque", "colectivo: un grupo", N]], "Delante del sustantivo podemos poner el, la, un, una"),
  },
  video: V("susV", "el sustantivo para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Busca los sustantivos: «Mi abuela vive en Toledo».",
      pasos: ["Pon el o la delante de cada palabra: la abuela, el Toledo…", "abuela nombra a una persona.", "Toledo nombra una ciudad."],
      resultado: "abuela (común) y Toledo (propio)." },
    { enunciado: "¿«Gata» es común o propio?",
      pasos: ["¿Nombra a todas las gatas o a una sola?", "Sirve para todas.", "Va con minúscula."],
      resultado: "es un nombre común." },
    { enunciado: "Escribe bien: «mi amigo pablo vive en cádiz».",
      pasos: ["La frase empieza con mayúscula: Mi.", "Pablo es nombre propio: mayúscula.", "Cádiz es una ciudad: mayúscula."],
      resultado: "Mi amigo Pablo vive en Cádiz." },
  ],
  errores: [
    "Escribir los nombres propios con minúscula: es Lucía, no lucía.",
    "Poner mayúscula a nombres comunes en medio de la frase: «el Perro» está mal.",
    "Pensar que solo las personas tienen nombre propio: también ciudades, ríos y mascotas.",
    "Creer que un colectivo es plural: «rebaño» es singular aunque nombre a muchas ovejas.",
  ],
  ejercicios: [
    { q: "Di tres sustantivos de cosas de tu clase.", sol: "Por ejemplo: mesa, silla, pizarra, lápiz." },
    { q: "¿«Mesa» es sustantivo? Prueba con «la».", sol: "Sí: la mesa." },
    { q: "Escribe el nombre propio de tu ciudad o pueblo.", sol: "Respuesta libre, con mayúscula." },
    { q: "¿Común o propio? «río».", sol: "Común." },
    { q: "¿Común o propio? «Ebro».", sol: "Propio." },
    { q: "Escribe bien: «ana tiene un gato llamado coco».", sol: "Ana tiene un gato llamado Coco." },
    { q: "Grupo de ovejas: …", sol: "Rebaño." },
    { q: "Grupo de árboles: …", sol: "Bosque." },
    { q: "Busca los sustantivos: «El niño juega con la pelota».", sol: "niño y pelota." },
    { q: "Escribe un nombre propio de animal y uno común.", sol: "Por ejemplo: Toby (propio) y perro (común)." },
  ],
  quiz: [
    { q: "Los sustantivos sirven para…", o: ["nombrar", "hacer acciones", "contar"], a: 0, e: "Nombran." },
    { q: "¿Cuál es un sustantivo?", o: ["corre", "mesa", "bonito"], a: 1, e: "la mesa." },
    { q: "«Perro» es un nombre…", o: ["común", "propio", "colectivo"], a: 0, e: "Vale para todos los perros." },
    { q: "«Madrid» es un nombre…", o: ["común", "propio", "verbo"], a: 1, e: "Una ciudad concreta." },
    { q: "Los nombres propios llevan…", o: ["mayúscula", "minúscula", "número"], a: 0, e: "Mayúscula inicial." },
    { q: "¿Cuál es propio?", o: ["ciudad", "río", "Lucía"], a: 2, e: "Lucía." },
    { q: "Un grupo de abejas es un…", o: ["rebaño", "enjambre", "bosque"], a: 1, e: "Enjambre." },
    { q: "«Bosque» es un nombre…", o: ["individual", "colectivo", "propio"], a: 1, e: "Muchos árboles." },
    { q: "¿Qué palabra puede ir delante de un sustantivo?", o: ["la", "corre", "muy"], a: 0, e: "la casa." },
    { q: "¿Qué está bien escrito?", o: ["mi perro toby", "Mi perro Toby", "mi Perro toby"], a: 1, e: "Mayúscula al empezar y en Toby." },
  ],
  examen: [
    { q: "¿Qué nombra «escuela»?", o: ["un lugar", "una persona", "una acción"], a: 0, e: "Un lugar." },
    { q: "¿Cuál es común?", o: ["Teide", "montaña", "Pirineos"], a: 1, e: "montaña." },
    { q: "Grupo de músicos:", o: ["orquesta", "rebaño", "banco"], a: 0, e: "Orquesta." },
    { q: "Sustantivos en «Leo come pan»:", o: ["Leo y pan", "come", "Leo y come"], a: 0, e: "Leo (propio) y pan (común)." },
  ],
  feynman: ["Qué es un sustantivo y cómo se encuentra", "Diferencia entre nombre común y propio", "Qué es un nombre colectivo"],
  mapa: mapa("EL SUSTANTIVO", "var(--pri)", [
    ["Nombra", "personas, animales, cosas, lugares", A],
    ["Común", "a todos: perro, ciudad", Ve],
    ["Propio", "a uno: Toby, Sevilla", R],
    ["Colectivo", "un grupo: bosque, rebaño", N],
  ], 240),
  tarjetas: [
    ["¿Qué es un sustantivo?", "Una palabra que nombra"],
    ["Truco para encontrarlo", "Poner el, la, un, una delante"],
    ["Nombre común", "Nombra a todos: perro"],
    ["Nombre propio", "Nombra a uno: Toby"],
    ["¿Cómo se escribe el propio?", "Con mayúscula"],
    ["Grupo de ovejas", "Rebaño"],
    ["Grupo de peces", "Banco"],
    ["¿«Sevilla» es común o propio?", "Propio"],
  ],
  familias: [
    "Jugad a «nombre, ciudad, animal, cosa» con una letra.",
    "Al ir por la calle, nombrad cosas (comunes) y leed carteles con nombres propios.",
    "Revisad juntos que el nombre de su ciudad y de la familia lleva mayúscula.",
    "Buscad nombres colectivos: rebaño, enjambre, bosque, orquesta.",
  ],
  profesores: PROF("Reflexión sobre la lengua: el sustantivo, nombres comunes y propios, nombres individuales y colectivos, y uso de la mayúscula en nombres propios", ["Clasificar tarjetas en dos cajas: común y propio.", "Mapa de la localidad con nombres propios de calles y plazas.", "Juego de «nombre, ciudad, animal, cosa» por equipos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
