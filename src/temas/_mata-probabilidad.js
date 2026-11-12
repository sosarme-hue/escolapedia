// Matemáticas A 4º ESO · Probabilidad: ampliación a nivel de libro de texto.
const tabla = (cab, filas) => `<table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
const vid = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });

module.exports = (T) => {
  T.minutos = 55;
  T.objetivos.push("Distinguir tipos de sucesos y operar con ellos", "Calcular probabilidades con tablas de contingencia y con extracciones con o sin devolución", "Relacionar la frecuencia relativa con la probabilidad y valorar el azar en juegos y noticias");
  const tras = (t, ...nuevos) => { const i = T.bloques.findIndex((b) => b.html.includes(t)); if (i < 0) throw new Error(`mata: no encuentro «${t}»`); T.bloques.splice(i + 1, 0, ...nuevos); };
  // Copia el bloque antes de ponerle vídeo: los objetos de bloque se comparten con Matemáticas B.
  const conVideo = (t, v) => { const i = T.bloques.findIndex((b) => b.html.includes(t)); T.bloques[i] = { ...T.bloques[i], video: v }; };

  tras("Sucesos independientes",
    { html: `<h3>El azar en la vida real</h3><p>La probabilidad ayuda a tomar decisiones y a no dejarse engañar. En la <b>Lotería Primitiva</b> hay que acertar 6 números de 49: hay 13.983.816 combinaciones posibles, así que la probabilidad de ganar con una apuesta es de <mark>1 entre casi 14 millones</mark>, mucho menor que la de que te caiga un rayo a lo largo de la vida. Las <b>aseguradoras</b> calculan sus precios con probabilidades de accidentes, y los <b>servicios de meteorología</b> dicen «70 % de probabilidad de lluvia» cuando, en situaciones parecidas, llovió unas 7 de cada 10 veces. Un error muy extendido es la <b>falacia del jugador</b>: creer que, después de muchas veces rojo en la ruleta, ahora «toca» negro. Cada tirada es independiente y la ruleta no recuerda lo que ha salido antes.</p>` },
  );

  tras("Experimentos compuestos",
    { html: `<h3>Con devolución o sin devolución</h3><p>En una urna hay 3 bolas rojas y 2 azules y sacamos dos. El resultado cambia mucho según devolvamos o no la primera bola:</p>${tabla(["", "Con devolución", "Sin devolución"], [["1.ª roja", "3/5", "3/5"], ["2.ª roja", "3/5 (la urna está igual)", "2/4 (queda una roja menos)"], ["P(dos rojas)", "3/5 · 3/5 = <b>9/25</b> = 0,36", "3/5 · 2/4 = <b>3/10</b> = 0,30"], ["¿Independientes?", "sí", "no"]])}<p>Para calcular la probabilidad de sacar <b>exactamente una roja</b> sin devolución hay dos caminos en el árbol: roja-azul (3/5 · 2/4 = 6/20) y azul-roja (2/5 · 3/4 = 6/20). Se <mark>suman</mark>: 12/20 = 3/5 = 0,6. Comprueba que las probabilidades de todos los caminos del árbol suman 1: si no, hay un error.</p>` },
  );

  tras("Propiedades básicas",
    { html: `<h3>Tablas de contingencia</h3><p>Cuando los datos se clasifican según dos características, se organizan en una <b>tabla de contingencia</b>. En una encuesta a 100 alumnos sobre si practican deporte:</p>${tabla(["", "Hace deporte", "No hace deporte", "Total"], [["Chicas", "30", "22", "52"], ["Chicos", "32", "16", "48"], ["<b>Total</b>", "<b>62</b>", "<b>38</b>", "<b>100</b>"]])}<p>Si elegimos un alumno al azar: P(hace deporte) = 62/100 = 0,62; P(chica y hace deporte) = 30/100 = 0,30. Si sabemos que es chica, solo miramos su fila: P(deporte <b>sabiendo que</b> es chica) = 30/52 ≈ 0,58. Esto es una <mark>probabilidad condicionada</mark>: la información que tenemos reduce los casos posibles. Las tablas de contingencia se usan mucho en encuestas, en medicina y en estudios de mercado.</p>` },
  );

  tras("Experimentos aleatorios",
    { html: `<h3>Tipos de sucesos</h3><p>Un <b>suceso</b> es cualquier subconjunto del espacio muestral. Al lanzar un dado, E = {1, 2, 3, 4, 5, 6}:</p>${tabla(["Tipo", "Significado", "Ejemplo con un dado"], [["Elemental", "un solo resultado", "sacar un 4: {4}"], ["Compuesto", "varios resultados", "sacar par: {2, 4, 6}"], ["Seguro", "ocurre siempre (P = 1)", "sacar menos de 7"], ["Imposible", "no ocurre nunca (P = 0)", "sacar un 8"], ["Contrario de A", "ocurre cuando no ocurre A", "contrario de par: impar {1, 3, 5}"], ["Incompatibles", "no pueden ocurrir a la vez", "sacar 2 y sacar 5"]])}<p>La <b>unión</b> A ∪ B ocurre si ocurre A <mark>o</mark> B; la <b>intersección</b> A ∩ B, si ocurren A <mark>y</mark> B a la vez. Si A y B son incompatibles, A ∩ B es imposible y P(A ∪ B) = P(A) + P(B).</p>` },
    { html: `<h3>Probabilidad experimental y ley de los grandes números</h3><p>La regla de Laplace solo sirve si todos los resultados son <b>igual de probables</b>. ¿Qué pasa con una chincheta, que puede caer de punta o de lado? Entonces se repite el experimento muchas veces y se calcula la <b>frecuencia relativa</b>: número de veces que ocurre el suceso dividido entre el número de repeticiones. Si lanzas una moneda 10 veces, puede salir cara 7 veces (0,7); con 1.000 lanzamientos, la frecuencia se acerca mucho a 0,5. Es la <mark>ley de los grandes números</mark>: cuantas más repeticiones, más se parece la frecuencia relativa a la probabilidad. Por eso los estudios científicos y las encuestas fiables necesitan muestras grandes, y por eso un hecho raro en pocos casos no demuestra nada.</p>` },
  );

  conVideo("Experimentos compuestos", vid("AjDK3NQZdPc", "Diagrama de árbol súper fácil: árbol de probabilidad para principiantes", "Daniel Carreón", 1770078));
  conVideo("Tablas de contingencia", vid("swOYG7bg3Lk", "Probabilidad: tablas de contingencia, ejercicios resueltos", "profesor10demates", 257278));

  T.ejemplos = [
    { enunciado: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 7?", pasos: ["Casos posibles: 6 · 6 = 36 parejas igual de probables.", "Casos favorables: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 casos.", "Regla de Laplace: 6/36."], resultado: "P = 1/6 ≈ 0,17. Es la suma más probable." },
    { enunciado: "En una clase de 25 alumnos, 15 llevan gafas o lentillas, 10 tienen el pelo largo y 6 cumplen las dos cosas. ¿P(gafas o pelo largo)?", pasos: ["P(G) = 15/25, P(L) = 10/25, P(G ∩ L) = 6/25.", "P(G ∪ L) = P(G) + P(L) − P(G ∩ L).", "= 15/25 + 10/25 − 6/25 = 19/25."], resultado: "P = 19/25 = 0,76." },
    { enunciado: "Un examen tipo test tiene 3 preguntas con 4 opciones. Si respondes al azar, ¿qué probabilidad tienes de acertar las tres? ¿Y de no acertar ninguna?", pasos: ["Cada pregunta: P(acierto) = 1/4, P(fallo) = 3/4. Son independientes.", "P(tres aciertos) = (1/4)³ = 1/64 ≈ 0,016.", "P(ningún acierto) = (3/4)³ = 27/64 ≈ 0,42."], resultado: "Acertar las tres: 1/64. No acertar ninguna: 27/64." },
  ];
  T.errores = [
    "Aplicar la regla de Laplace cuando los resultados no son igual de probables (una chincheta, un dado trucado).",
    "Sumar P(A) + P(B) sin restar la intersección cuando los sucesos son compatibles.",
    "Usar las mismas probabilidades en la segunda extracción cuando no hay devolución.",
    "Creer que, tras varias caras, es más probable que salga cruz (falacia del jugador).",
    "Dar como resultado una probabilidad mayor que 1 o negativa sin darse cuenta del error.",
  ];
  T.ejercicios = [
    { q: "Al sacar una carta de una baraja española de 40, ¿P(oros)? ¿P(rey)?", sol: "10/40 = 1/4; 4/40 = 1/10." },
    { q: "En un dado, A = sacar par y B = sacar múltiplo de 3. Calcula P(A ∪ B).", sol: "A = {2, 4, 6}, B = {3, 6}, A ∩ B = {6}: 3/6 + 2/6 − 1/6 = 4/6 = 2/3." },
    { q: "Si P(llueva mañana) = 0,35, ¿P(no llueva)?", sol: "1 − 0,35 = 0,65." },
    { q: "Se lanzan tres monedas. ¿P(tres caras)?", sol: "(1/2)³ = 1/8." },
    { q: "Urna con 4 bolas blancas y 6 negras. Se sacan dos con devolución. ¿P(dos blancas)?", sol: "4/10 · 4/10 = 16/100 = 0,16." },
    { q: "La misma urna, sin devolución. ¿P(dos blancas)?", sol: "4/10 · 3/9 = 12/90 = 2/15 ≈ 0,13." },
    { q: "Con la tabla de contingencia del tema, ¿P(chico)? ¿P(no hace deporte sabiendo que es chico)?", sol: "48/100 = 0,48; 16/48 = 1/3 ≈ 0,33." },
    { q: "Se lanza una chincheta 200 veces y cae de punta 130. Estima P(punta).", sol: "Frecuencia relativa: 130/200 = 0,65." },
    { q: "¿Son incompatibles «sacar un 3» y «sacar impar» en un dado?", sol: "No: el 3 es impar, pueden ocurrir a la vez." },
    { q: "Al lanzar dos dados, ¿P(dos seises)?", sol: "1/6 · 1/6 = 1/36." },
  ];
  T.quiz.push(
    { q: "Sacar un 8 en un dado normal es un suceso…", o: ["imposible", "seguro", "elemental"], a: 0, e: "P = 0." },
    { q: "Al repetir muchas veces un experimento, la frecuencia relativa…", o: ["se acerca a la probabilidad", "se aleja", "vale siempre 0,5"], a: 0, e: "Ley de los grandes números." },
    { q: "Sin devolución, las extracciones son…", o: ["dependientes", "independientes", "imposibles"], a: 0, e: "La urna cambia." },
    { q: "P(suma 7 con dos dados) =", o: ["1/6", "1/12", "7/36"], a: 0, e: "6 casos de 36." },
    { q: "La falacia del jugador consiste en creer que…", o: ["el azar «compensa» los resultados anteriores", "las monedas tienen dos caras", "el 7 es la suma más probable"], a: 0, e: "Cada tirada es independiente." },
  );
  T.tarjetas.push(
    ["Unión con sucesos compatibles", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"],
    ["Sin devolución", "La segunda probabilidad cambia: los sucesos no son independientes."],
    ["Ley de los grandes números", "Con muchas repeticiones, la frecuencia relativa se acerca a la probabilidad."],
  );
};
