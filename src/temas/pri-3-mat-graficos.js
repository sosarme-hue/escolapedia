// Matemáticas 3º de Primaria: gráficos de barras. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, barras, AZ, RO, VE, NA, SO, MO } = P;

// Ejes de un gráfico con escala en y (de 0 a max, cada «paso»), base en y0 y alto h.
const ejesG = (x0, y0, w, h, max, paso, o = {}) => {
  let s = "";
  for (let v = 0; v <= max; v += paso) { const y = y0 - (v / max) * h; s += `<path d="M${x0} ${y} H ${x0 + w}" stroke="var(--line)" stroke-width="1"/>${t(x0 - 6, y + 4, String(v), { s: 9.5, a: "end", c: "var(--muted)" })}`; }
  s += `<path d="M${x0} ${y0 - h - 6} V ${y0} H ${x0 + w}" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
  if (o.titulo) s += t(x0 + w / 2, 16, o.titulo, { s: 12, c: AZ });
  return s;
};
// Barras sobre los ejes: datos [[etiqueta, valor, color]].
const barrasG = (x0, y0, w, h, max, datos, o = {}) => {
  const paso = w / datos.length;
  return datos.map(([e, v, c], i) => { const alto = (v / max) * h, x = x0 + i * paso + paso * 0.2; return `<rect x="${x.toFixed(1)}" y="${(y0 - alto).toFixed(1)}" width="${(paso * 0.6).toFixed(1)}" height="${alto.toFixed(1)}" rx="2" fill="${c}" fill-opacity=".6" stroke="${c}" stroke-width="1.5"/>${t(x + paso * 0.3, y0 + 13, e, { s: o.s || 9.5 })}${o.valores ? t(x + paso * 0.3, y0 - alto - 4, String(v), { s: 9.5, c }) : ""}`; }).join("");
};
const FRUTA = [["manzana", 6, RO], ["plátano", 9, SO], ["pera", 3, VE], ["uva", 5, MO]];

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Gráficos de barras",
  minutos: 45,
  objetivos: ["Recoger datos con una encuesta y anotarlos en una tabla de recuento", "Leer e interpretar gráficos de barras", "Construir un gráfico de barras a partir de una tabla", "Comparar datos y responder preguntas usando el gráfico"],
  claves: ["datos", "encuesta", "recuento", "tabla de frecuencias", "frecuencia", "gráfico de barras", "pictograma", "eje", "título", "escala", "el más frecuente", "comparar"],
  pregunta: ["Si preguntas a tus compañeros cuál es su fruta favorita, ¿cómo podrías enseñar las respuestas para que se entiendan de un vistazo?", "Lo mejor es hacer un <mark>gráfico de barras</mark>: cada fruta tiene una barra y, cuanto más alta es, más niños la han elegido. Así, con solo mirar, sabes cuál gusta más y cuál menos. ¡Los gráficos convierten los números en dibujos!"],
  bloques: [
    ["Recoger datos: la encuesta", `<p>Los <b>datos</b> son informaciones que recogemos para conocer algo: la fruta favorita de la clase, el tiempo que hace cada día, cuántos libros leemos al mes…</p><p>Una forma de recoger datos es hacer una <b>encuesta</b>: hacemos <mark>la misma pregunta</mark> a muchas personas y anotamos las respuestas.</p><p>Pasos para una buena encuesta:</p><ol><li>Pensar una pregunta clara: «¿Cuál es tu fruta favorita?»</li><li>Dar opciones si hace falta: manzana, plátano, pera, uva.</li><li>Preguntar a todos y anotar cada respuesta una sola vez.</li></ol>`,
      svg("Una niña pregunta a sus compañeros cuál es su fruta favorita", `${P.persona(40, 60, RO)}<rect x="62" y="22" width="128" height="34" rx="12" fill="var(--card)" stroke="${RO}" stroke-width="2"/>${t(126, 44, "¿fruta favorita?", { s: 12, c: RO })}${[0, 1, 2].map((i) => P.persona(150 + i * 36, 100, [AZ, VE, MO][i])).join("")}${t(130, 166, "encuesta: la misma pregunta a todos", { s: 11.5, c: AZ })}`)],
    ["La tabla de recuento", `<p>Mientras preguntamos, anotamos las respuestas con <b>palotes</b>: una rayita por cada respuesta. Para contar más fácil, cada <mark>quinto palote</mark> se dibuja cruzando los cuatro anteriores, formando grupos de 5.</p><p>Después contamos los palotes y escribimos el número. Ese número se llama <b>frecuencia</b>: cuántas veces se repite una respuesta.</p><p>La tabla con las respuestas y sus frecuencias es la <b>tabla de frecuencias</b>. ¡Comprueba que la suma de todas las frecuencias es igual al número de personas encuestadas!</p>`,
      svg("Tabla de recuento con palotes y frecuencias de las frutas favoritas", `${FRUTA.map(([f, n, c], i) => { const y = 30 + i * 32; let pal = ""; for (let k = 0; k < n; k++) { const g = Math.floor(k / 5), j = k % 5, x = 100 + g * 46 + j * 8; pal += j === 4 ? `<path d="M${x - 36} ${y + 4} L ${x + 2} ${y - 14}" stroke="${c}" stroke-width="2"/>` : `<path d="M${x} ${y - 14} V ${y + 4}" stroke="${c}" stroke-width="2"/>`; } return `${t(20, y, f, { s: 12, a: "start", c })}${pal}${t(228, y, String(n), { s: 15, d: true, c })}`; }).join("")}<path d="M206 14 V 150" stroke="var(--line)" stroke-width="1.5"/>${t(228, 164, "total 23", { s: 10.5, c: "var(--muted)" })}`)],
    ["El pictograma", `<p>Una forma sencilla de mostrar datos es el <b>pictograma</b>: usamos un <mark>dibujo</mark> para representar las cosas. Por ejemplo, un dibujo de una fruta por cada niño que la ha elegido.</p><p>A veces cada dibujo vale <b>más de uno</b>. Si cada dibujo vale 2 niños, para 6 niños dibujamos 3. Por eso un pictograma siempre lleva una <b>clave</b>: «● = 2 niños».</p><p>Los pictogramas son muy visuales, pero con muchos datos es más cómodo usar un gráfico de barras.</p>`,
      svg("Pictograma de frutas: cada círculo vale un niño", `${FRUTA.map(([f, n, c], i) => `${t(70, 34 + i * 30, f, { s: 11.5, a: "end", c })}${[...Array(n)].map((_, k) => `<circle cx="${86 + k * 17}" cy="${30 + i * 30}" r="6.5" fill="${c}" fill-opacity=".7"/>`).join("")}`).join("")}${t(130, 160, "clave: ● = 1 niño", { s: 12, c: "var(--muted)" })}`)],
    ["¿Qué es un gráfico de barras?", `<p>Un <b>gráfico de barras</b> muestra los datos con <mark>barras</mark> (rectángulos). Cuanto <b>más alta</b> es la barra, <b>más grande</b> es el dato.</p><p>Sus partes son:</p><ul><li>El <b>título</b>: dice de qué trata el gráfico.</li><li>El <b>eje horizontal</b>: abajo, con el nombre de cada barra (las frutas).</li><li>El <b>eje vertical</b>: a la izquierda, con los números (la <b>escala</b>).</li><li>Las <b>barras</b>: todas del mismo ancho y separadas por el mismo espacio.</li></ul>`,
      svg("Gráfico de barras de las frutas favoritas con título, ejes y escala", `${ejesG(40, 140, 200, 110, 10, 2, { titulo: "Frutas favoritas de 3.º A" })}${barrasG(40, 140, 200, 110, 10, FRUTA)}`),
      P.V("graB")],
    ["Leer un gráfico de barras", `<p>Para <b>leer</b> el valor de una barra, miramos hasta dónde llega su parte de arriba y seguimos con el dedo, en horizontal, hasta el <b>eje vertical</b>.</p><p>En el gráfico de las frutas:</p><ul><li>El <b>plátano</b> llega al 9: lo eligieron 9 niños. Es la fruta <mark>más elegida</mark>.</li><li>La <b>pera</b> llega al 3: es la <mark>menos elegida</mark>.</li><li>Si la barra queda entre dos rayas (por ejemplo, entre 4 y 6), el valor está en medio: 5.</li></ul>`,
      svg("Leer el gráfico: la barra del plátano llega a nueve", `${ejesG(40, 140, 200, 110, 10, 2)}${barrasG(40, 140, 200, 110, 10, FRUTA)}<path d="M40 41 H 115" stroke="${RO}" stroke-width="2" stroke-dasharray="4 3"/>${t(184, 30, "plátano: 9", { s: 12, c: RO })}`)],
    ["Comparar con el gráfico", `<p>Los gráficos son muy útiles para <b>comparar</b>:</p><ul><li>¿Cuántos niños más prefieren el plátano que la manzana? 9 − 6 = <mark>3</mark>.</li><li>¿Cuántos niños eligieron manzana o pera? 6 + 3 = <b>9</b>: ¡los mismos que el plátano!</li><li>¿Cuántos niños contestaron en total? 6 + 9 + 3 + 5 = <b>23</b>.</li><li>Ordena las frutas de más a menos votos: plátano, manzana, uva, pera.</li></ul><p>Fíjate en que para responder hay que combinar el gráfico con las <b>operaciones</b> que ya sabes.</p>`,
      svg("Comparar barras: el plátano tiene tres votos más que la manzana", `${ejesG(40, 140, 200, 110, 10, 2)}${barrasG(40, 140, 200, 110, 10, FRUTA, { valores: true })}<path d="M70 74 H 115" stroke="${AZ}" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M110 74 V 41" stroke="${AZ}" stroke-width="2.5"/>${t(196, 26, "9 − 6 = 3", { s: 12, c: AZ })}`)],
    ["Construir un gráfico de barras", `<p>Pasos para dibujar un gráfico de barras en papel cuadriculado:</p><ol><li>Dibuja los dos <b>ejes</b>: uno horizontal y otro vertical.</li><li>En el eje horizontal, escribe los <b>nombres</b> de cada barra, bien separados.</li><li>En el eje vertical, escribe la <b>escala</b> (0, 1, 2, 3… o de 2 en 2), siempre con los mismos saltos.</li><li>Dibuja cada <b>barra</b> hasta su número, todas del mismo ancho.</li><li>Pon un <b>título</b> y colorea.</li></ol><p>Si los números son grandes, elige una escala de <mark>5 en 5 o de 10 en 10</mark> para que el gráfico quepa en la hoja.</p>`,
      P.filas("Pasos para construir un gráfico de barras", [["1. Ejes", "horizontal y vertical", AZ], ["2. Nombres", "abajo, separados", VE], ["3. Escala", "0, 2, 4, 6… saltos iguales", SO], ["4. Barras y título", "mismo ancho, colores", RO]])],
    ["Gráficos de barras horizontales", `<p>Las barras también pueden ir <b>tumbadas</b>, en horizontal. Entonces los nombres van a la izquierda y la escala, abajo. Se leen igual: cuanto <mark>más larga</mark> es la barra, mayor es el dato.</p><p>Por ejemplo, este gráfico muestra cuántos libros ha leído cada niño en un mes. Roberto ha leído 8, Ana 5, Iker 2 y Sara 6.</p><p>Las barras horizontales son prácticas cuando los nombres son largos, porque caben mejor.</p>`,
      P.H.barras("Libros leídos en un mes por cada niño", [["Roberto", 8, AZ], ["Ana", 5, VE], ["Iker", 2, RO], ["Sara", 6, SO]], 10)],
    ["Los gráficos en la vida diaria", `<p>Los gráficos aparecen en muchos sitios:</p><ul><li>En las <b>noticias</b>: los votos de unas elecciones, la temperatura de cada mes.</li><li>En el <b>deporte</b>: los goles de cada jugador, los puntos de cada equipo.</li><li>En la <b>salud</b>: cuánto crece un bebé cada mes.</li><li>En el <b>cole</b>: los cumpleaños de cada mes o el tiempo que hace cada día.</li></ul><p>Saber leer un gráfico nos ayuda a <mark>entender la información</mark> y a no dejarnos engañar: mira siempre el título y la escala antes de sacar conclusiones.</p>`,
      svg("Gráfico de los cumpleaños de la clase por trimestre", `${ejesG(40, 140, 200, 110, 10, 2, { titulo: "Cumpleaños de la clase" })}${barrasG(40, 140, 200, 110, 10, [["ene-mar", 5, AZ], ["abr-jun", 7, VE], ["jul-sep", 4, SO], ["oct-dic", 8, RO]], { valores: true, s: 9 })}`)],
  ],
  figura: ["Gráficos de barras", P.pasos("De la encuesta al gráfico", [["ENCUESTA", ["misma pregunta", "a todos"], AZ], ["RECUENTO", ["palotes", "de 5 en 5"], VE], ["TABLA", ["frecuencias", "total"], SO], ["GRÁFICO", ["barras, ejes", "título y escala"], RO]])],
  video: P.V("graV", true),
  ejemplos: [
    ["En una tabla de recuento hay 2 grupos de 5 palotes y 3 palotes sueltos. ¿Cuál es la frecuencia?", ["Cada grupo vale 5: 5 × 2 = 10.", "Más los sueltos: 10 + 3 = 13."], "13"],
    ["En el gráfico de frutas, ¿cuántos niños más eligieron uva que pera?", ["Uva: 5. Pera: 3.", "5 − 3 = 2."], "2 niños más."],
    ["Quieres dibujar un gráfico con datos 20, 35, 15 y 40. ¿Qué escala usarías?", ["Los datos llegan a 40.", "De 1 en 1 serían 40 cuadritos: muy alto.", "De 5 en 5: 8 cuadritos. Cómodo."], "Una escala de 5 en 5."],
  ],
  errores: [
    "Contar mal los palotes por no agruparlos de 5 en 5.",
    "Hacer barras de distinto ancho o con huecos distintos.",
    "Usar una escala con saltos desiguales (0, 1, 2, 5, 10…).",
    "Olvidar el título o los nombres de los ejes.",
    "Leer el valor de una barra sin seguir la línea horizontal hasta la escala.",
  ],
  ejercicios: [
    ["¿Qué es una encuesta?", "Hacer la misma pregunta a muchas personas y anotar las respuestas."],
    ["Dibuja con palotes el número 12.", "Dos grupos de 5 (cuatro rayas y una cruzada) y dos palotes sueltos."],
    ["¿Qué es la frecuencia de un dato?", "El número de veces que se repite."],
    ["En un pictograma, ● = 2 niños. ¿Cuántos niños son ●●●●?", "8 niños."],
    ["¿Cuáles son las partes de un gráfico de barras?", "Título, eje horizontal con los nombres, eje vertical con la escala y barras."],
    ["En el gráfico de frutas, ¿qué fruta eligieron 6 niños?", "La manzana."],
    ["¿Cuántos niños eligieron plátano o uva?", "9 + 5 = 14 niños."],
    ["Ordena las frutas de menos a más votos.", "Pera (3), uva (5), manzana (6), plátano (9)."],
    ["Haz una tabla de frecuencias con estos colores favoritos: rojo, azul, azul, verde, rojo, azul.", "Rojo 2, azul 3, verde 1."],
    ["En el gráfico horizontal, ¿cuántos libros leyeron Ana y Sara entre las dos?", "5 + 6 = 11 libros."],
  ],
  quiz: [
    ["Hacer la misma pregunta a muchas personas es una…", ["encuesta", "suma", "escala"], "Para recoger datos."],
    ["En un recuento, el quinto palote…", ["cruza los otros cuatro", "se pone aparte", "no se dibuja"], "Grupos de 5."],
    ["La frecuencia es…", ["las veces que se repite un dato", "el título", "el eje"], "Cuántas veces."],
    ["En un gráfico de barras, la barra más alta indica…", ["el dato mayor", "el dato menor", "el título"], "Más alta, más grande."],
    ["Los números del eje vertical forman la…", ["escala", "clave", "barra"], "0, 2, 4…"],
    ["Un pictograma usa…", ["dibujos", "solo números", "líneas curvas"], "Con una clave."],
    ["En la escala, los saltos deben ser…", ["iguales", "distintos", "de 1 en 1 siempre"], "Por ejemplo, de 2 en 2."],
    ["Si manzana = 6 y pera = 3, la manzana tiene…", ["3 más", "3 menos", "9 más"], "6 − 3."],
    ["Todas las barras deben tener…", ["el mismo ancho", "el mismo alto", "el mismo color"], "Solo cambia el alto."],
    ["Antes de sacar conclusiones de un gráfico, mira…", ["el título y la escala", "solo los colores", "el tamaño de la hoja"], "Para no confundirte."],
  ],
  examen: [
    ["3 grupos de 5 palotes y 1 suelto son…", ["16", "13", "31"], "15 + 1."],
    ["Si cada ● vale 5, ●●● son…", ["15", "3", "8"], "5 × 3."],
    ["Fruta más elegida en el gráfico de 3.º A:", ["plátano", "pera", "uva"], "Llega al 9."],
    ["Total de niños que respondieron (6, 9, 3 y 5):", ["23", "20", "18"], "Suma de frecuencias."],
  ],
  feynman: ["Cómo se hace una encuesta", "Para qué sirven los palotes de 5 en 5", "Qué partes tiene un gráfico de barras", "Cómo se lee el valor de una barra", "Cómo elegir una buena escala"],
  mapa: ["GRÁFICOS DE BARRAS", [["Datos", "encuesta y recuento", AZ], ["Tabla", "frecuencias y total", VE], ["Gráfico", "título, ejes, escala, barras", SO], ["Leer", "comparar y calcular", RO]]],
  tarjetas: [
    ["Datos", "Informaciones que recogemos para conocer algo."],
    ["Encuesta", "La misma pregunta a muchas personas."],
    ["Recuento", "Anotar con palotes, en grupos de 5."],
    ["Frecuencia", "Las veces que se repite un dato."],
    ["Pictograma", "Gráfico con dibujos y una clave."],
    ["Gráfico de barras", "Cada dato es una barra: más alta, más grande."],
    ["Escala", "Los números del eje con saltos iguales."],
    ["Título", "Dice de qué trata el gráfico."],
  ],
  familias: ["Haced una encuesta familiar (comida favorita, deporte) y dibujad el gráfico.", "Buscad gráficos en periódicos o folletos y comentadlos juntos.", "Anotad durante una semana el tiempo que hace y haced un recuento.", "Contad coches de colores desde la ventana con palotes."],
  saberes: "Sentido estocástico: recogida de datos mediante encuestas y observación; recuento y tablas de frecuencias; pictogramas; gráficos de barras verticales y horizontales: elementos, lectura, construcción con escala adecuada e interpretación; comparación de datos",
  ideas: ["Encuesta de clase y gráfico gigante con cartulinas o bloques encajables.", "Gráfico del tiempo atmosférico del mes.", "Detectar errores en gráficos con escalas mal hechas."],
});
