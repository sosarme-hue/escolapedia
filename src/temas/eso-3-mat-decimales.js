// Matemáticas 3º ESO · Números decimales y aproximaciones. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, recta, comparar, resumen, rot, C, RD, DECRET } = require("./_eso3L1");

const ordenes = lienzo("Órdenes de unidades de un número decimal: unidades, décimas, centésimas y milésimas", `
  ${tx(130, 34, "3 , 7 2 5", { fs: 24, c: "var(--pen)", fam: D })}
  ${[["U", 3, 62, "var(--pen)"], ["d", 7, 112, "var(--leaf)"], ["c", 2, 150, "var(--red)"], ["m", 5, 188, "var(--inf)"]].map(([n, v, x, c]) => `<rect x="${x - 17}" y="46" width="34" height="30" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tx(x, 66, n, { fs: 13, c })}`).join("")}
  ${tx(130, 106, "3 + 7/10 + 2/100 + 5/1000", { fs: 14, c: "var(--ink)", fam: D })}
  ${tx(130, 134, "= 3.725/1.000", { fs: 14, c: "var(--leaf)", fam: D })}${tx(130, 162, "cada posición vale 10 veces menos", { fs: 11.5, w: 400 })}`);

const tipos = comparar("Tipos de números decimales: exactos, periódicos puros y periódicos mixtos", [
  ["Exacto", ["0,375", "cifras finitas", "3/8"], "var(--leaf)"],
  ["Puro", ["0,454545…", "periodo 45", "5/11"], "var(--pen)"],
  ["Mixto", ["0,1666…", "anteperiodo 1", "1/6"], "var(--red)"],
], "Decimales racionales");

const predecir = pasos("Saber el tipo de decimal de una fracción sin dividir, mirando los factores del denominador", ["Simplificar la fracción", "Descomponer el denominador", "Solo 2 y/o 5 → exacto", "Ningún 2 ni 5 → periódico puro", "2 o 5 y otros → periódico mixto"], "Predecir el decimal");

const exacto = formula("Fracción generatriz de un decimal exacto", "2,35 = 235/100 = 47/20", ["Sin coma en el numerador", "Un 1 con tantos ceros como decimales", "y simplificar"], "var(--leaf)");

const puro = lienzo("Generatriz de un periódico puro: se multiplica por diez elevado a la longitud del periodo y se resta", `
  ${tx(130, 24, "N = 2,454545…", { fs: 16, c: "var(--pen)", fam: D })}
  ${tx(130, 52, "100N = 245,4545…", { fs: 16, fam: D })}
  ${tx(130, 80, "N = 2,4545…", { fs: 16, fam: D })}
  <path d="M40 90 H220" stroke="var(--ink)" stroke-width="2"/>${tx(28, 80, "−", { fs: 18, c: "var(--muted)" })}
  ${tx(130, 114, "99N = 243", { fs: 17, c: "var(--leaf)", fam: D })}
  ${tx(130, 146, "N = 243/99 = 27/11", { fs: 17, c: "var(--red)", fam: D })}${tx(130, 170, "el periodo desaparece al restar", { fs: 11, w: 400 })}`, 180);

const mixto = pasos("Generatriz de un periódico mixto con la regla práctica", ["N = 1,2353535…", "Número sin coma: 12353", "Restar lo que no es periodo: 123", "Denominador: un 9 por cifra del periodo,", "un 0 por cifra del anteperiodo: 9900", "N = 12230/9900 = 1223/990"], "Regla práctica");

const ordenar = recta("Ordenar decimales periódicos: cero coma tres, cero coma treinta y tres y cero coma tres periódico", { r: [0.3, 0.34], marcas: [[0.3, "0,30"], [0.32, "0,32"], [0.34, "0,34"]], puntos: [{ x: 0.3, t: "0,3", c: "var(--red)" }, { x: 0.33, t: "0,33", c: "var(--leaf)" }, { x: 1 / 3, t: "0,3̂", c: "var(--pen)", abajo: true }], pie: "0,3 < 0,33 < 0,333…" });

const truncar = lienzo("Truncar y redondear a las centésimas el número 4,276", `
  ${tx(130, 28, "4,276 a las centésimas", { fs: 14, c: "var(--muted)" })}
  <rect x="16" y="44" width="110" height="88" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><rect x="134" y="44" width="110" height="88" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
  ${tx(71, 66, "Truncar", { fs: 13, c: "var(--red)" })}${tx(71, 96, "4,27", { fs: 20, fam: D })}${tx(71, 120, "cortar", { fs: 11, w: 400 })}
  ${tx(189, 66, "Redondear", { fs: 13, c: "var(--leaf)" })}${tx(189, 96, "4,28", { fs: 20, fam: D })}${tx(189, 120, "6 ≥ 5: sube", { fs: 11, w: 400 })}
  ${tx(130, 160, "el redondeo comete menos error", { fs: 12, c: "var(--muted)" })}`);

const redondeo = recta("El redondeo a las décimas de 2,46 es 2,5 porque está más cerca de 2,5 que de 2,4", { r: [2.4, 2.5], marcas: [[2.4, "2,4"], [2.45, "2,45"], [2.5, "2,5"]], tramos: [{ de: 2.4, a: 2.45, c: "var(--red)", t: "→ 2,4", ca: false }, { de: 2.45, a: 2.5, c: "var(--leaf)", t: "→ 2,5" }], puntos: [{ x: 2.46, t: "2,46", c: "var(--pen)", abajo: true }], y: 110, h: 170 });

const cifras = cajas("Cifras significativas: cuáles cuentan y cuáles no", [
  ["Cuentan", ["las no nulas:", "3,47 → 3"]], ["Cuentan", ["ceros entre cifras:", "2,05 → 3"]],
  ["No cuentan", ["ceros a la izquierda:", "0,004 → 1"]], ["Sí cuentan", ["ceros finales tras coma:", "1,20 → 3"]],
], "¿Cuántas cifras significativas?");

const errores = formula("Error absoluto y error relativo", "Eₐ = |V − A|   Eᵣ = Eₐ / |V|", ["V valor real, A aproximación", "π ≈ 3,14: Eₐ ≈ 0,0016", "Eᵣ ≈ 0,0005 = 0,05 %"], "var(--red)");

const relativo = comparar("El error relativo dice qué medida es más precisa aunque los errores absolutos sean iguales", [
  ["Mesa", ["V = 2 m", "Eₐ = 1 cm", "Eᵣ = 0,5 %"], "var(--red)"],
  ["Carretera", ["V = 2 km", "Eₐ = 1 cm", "Eᵣ = 0,0005 %"], "var(--leaf)"],
], "Mismo error, distinta precisión");

const cota = lienzo("Cota de error: al redondear a las centésimas el error es como mucho media centésima", `
  <path d="M20 90 H240" stroke="var(--ink)" stroke-width="2"/>
  ${[[40, "4,27"], [130, "4,275"], [220, "4,28"]].map(([x, s]) => `<path d="M${x} 82 V98" stroke="var(--ink)" stroke-width="2"/>${tx(x, 116, s, { fs: 12, w: 400 })}`).join("")}
  <path d="M130 70 H220" stroke="var(--leaf)" stroke-width="6" stroke-linecap="round" opacity=".8"/>${tx(175, 60, "redondean a 4,28", { fs: 11, c: "var(--leaf)" })}
  ${tx(130, 30, "cota de error = 0,005", { fs: 15, c: "var(--red)", fam: D })}${tx(130, 150, "media unidad del último orden", { fs: 12, c: "var(--muted)" })}`);

const operar = pasos("Operar con decimales periódicos pasándolos a fracción", ["0,3̂ + 0,1̂6 = ?", "0,3̂ = 3/9 = 1/3", "0,16̂ = 15/90 = 1/6", "1/3 + 1/6 = 3/6 = 1/2", "Resultado exacto: 0,5"], "Mejor con fracciones");

const vida = cajas("Decimales en la vida real: precios, medidas, calculadora y deporte", [
  ["Precios", ["1,995 €/L", "se paga en céntimos"]], ["Medidas", ["1,75 m", "± 0,5 cm"]],
  ["Calculadora", ["2/3 = 0,6666667", "redondea al final"]], ["Deporte", ["9,58 s", "centésimas"]],
], "¿Dónde aparecen?");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números decimales y aproximaciones",
  minutos: 110,
  objetivos: [
    "Clasificar los números decimales en exactos, periódicos puros y periódicos mixtos",
    "Predecir el tipo de decimal de una fracción sin hacer la división",
    "Calcular la fracción generatriz de cualquier decimal exacto o periódico",
    "Aproximar por truncamiento y por redondeo y contar cifras significativas",
    "Calcular el error absoluto, el error relativo y la cota de error",
    "Operar con decimales periódicos de forma exacta",
  ],
  claves: ["decimal exacto", "periódico puro", "periódico mixto", "generatriz", "redondeo", "truncamiento", "cifras significativas", "error relativo"],
  pregunta: {
    texto: "Si divides 1 entre 3 en la calculadora sale 0,3333333. ¿Se acaban alguna vez los treses?",
    respuesta: "No: 1/3 = <mark>0,333…</mark> es un decimal <b>periódico</b> con infinitas cifras. La calculadora solo enseña unas pocas y redondea la última. Saber aproximar y medir el error que cometes es clave en ciencia, en economía y en ingeniería.",
  },
  lectura: {
    titulo: "El misil que falló por una décima",
    html: `<p>En febrero de 1991, durante la guerra del Golfo, una batería de misiles Patriot estadounidense en Arabia Saudí no consiguió interceptar un misil que se dirigía a un cuartel. El fallo tenía un origen matemático sorprendente: el reloj interno del sistema contaba el tiempo en décimas de segundo, y el número 0,1 no se puede escribir de forma exacta en el sistema binario que usan los ordenadores. Es un decimal periódico, como lo es 1/3 en nuestro sistema.</p><p>El ordenador truncaba 0,1 a 24 cifras binarias y cometía un error minúsculo, de unas 0,0000001 unidades en cada décima. Pero la batería llevaba 100 horas encendida: el error se acumuló hasta unas 0,34 segundos. Un misil viaja a más de 1.600 m/s, así que el radar buscó el objetivo a más de medio kilómetro de donde estaba realmente.</p><p>Esta historia muestra que aproximar no es un detalle sin importancia. En este tema aprenderás a distinguir los decimales exactos de los periódicos, a encontrar la fracción exacta que se esconde detrás de cada periódico y a medir cuánto te equivocas cuando redondeas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Los números decimales y sus órdenes de unidades</h3><p>Un <b>número decimal</b> tiene una parte entera y una parte decimal separadas por una coma. Cada cifra a la derecha de la coma ocupa un <b>orden de unidades</b> que vale diez veces menos que el anterior: <b>décimas</b> (1/10), <b>centésimas</b> (1/100), <b>milésimas</b> (1/1.000), diezmilésimas, etc.</p><p>Por eso un decimal es una forma abreviada de escribir una suma de fracciones con denominador potencia de 10: 3,725 = 3 + 7/10 + 2/100 + 5/1.000 = 3.725/1.000. Esta descomposición es la base para entender por qué los decimales son números racionales y cómo se convierten en fracciones.</p><p>Los decimales se usan en todas las medidas del sistema métrico, que es decimal: 1,75 m son 1 metro, 7 decímetros y 5 centímetros. Cuando cambias de unidad, solo mueves la coma: 1,75 m = 175 cm = 0,00175 km.</p>`, svg: ordenes },
    { html: `<h3>1.2 Tipos de decimales</h3><p>Al dividir el numerador de una fracción entre su denominador pueden ocurrir dos cosas. Si la división acaba (resto 0), el decimal es <b>exacto</b>: 3/8 = 0,375. Si no acaba, los restos empiezan a repetirse y, con ellos, las cifras del cociente: el decimal es <b>periódico</b>. El grupo de cifras que se repite se llama <mark>periodo</mark> y se marca con un arco o una tilde encima.</p><p>Un periódico es <b>puro</b> si el periodo empieza justo después de la coma: 5/11 = 0,454545… = 0,4̂5̂. Es <b>mixto</b> si entre la coma y el periodo hay cifras que no se repiten, llamadas <b>anteperiodo</b>: 1/6 = 0,1666… (anteperiodo 1, periodo 6).</p><p>¿Por qué los restos tienen que repetirse? Al dividir entre 11, los restos posibles son 1, 2, …, 10. Como solo hay diez posibilidades, tarde o temprano uno se repite y desde ahí todo vuelve a empezar. Por eso el periodo de una fracción con denominador n tiene, como mucho, n − 1 cifras.</p>`, svg: tipos },
    { html: `<h3>1.3 Predecir el tipo de decimal sin dividir</h3><p>Se puede saber qué decimal dará una fracción mirando solo su denominador, siempre que la fracción sea <b>irreducible</b>. Se descompone el denominador en factores primos:</p><ul><li>Si solo tiene los factores <b>2 y/o 5</b>, el decimal es <b>exacto</b>: 7/40 (40 = 2³ · 5) = 0,175.</li><li>Si no tiene ni 2 ni 5, es <b>periódico puro</b>: 4/7 = 0,571428571428…</li><li>Si tiene 2 o 5 y además otros primos, es <b>periódico mixto</b>: 7/12 (12 = 2² · 3) = 0,58333…</li></ul><p>La razón es que nuestro sistema es de base 10 = 2 · 5. Una fracción da decimal exacto cuando se puede escribir con denominador 10, 100, 1.000…, y eso solo es posible si el denominador divide a alguna potencia de 10. Cuidado con no simplificar antes: 6/15 parece periódico, pero es 2/5 = 0,4, exacto.</p>`, svg: predecir },
    { html: `<h3>1.4 Fracción generatriz de un decimal exacto</h3><p>Todo decimal exacto o periódico se puede escribir como fracción. La fracción irreducible que lo produce se llama <mark>fracción generatriz</mark>. Encontrarla permite operar de forma exacta y demuestra que esos decimales son racionales.</p><p>Para un decimal <b>exacto</b> es muy sencillo: en el numerador se escribe el número sin la coma y en el denominador un 1 seguido de tantos ceros como cifras decimales tenga. Después se simplifica. Ejemplos: 2,35 = 235/100 = 47/20; 0,125 = 125/1.000 = 1/8; 4,6 = 46/10 = 23/5.</p><p>Comprobar es fácil: se divide el numerador entre el denominador con la calculadora y debe salir el decimal de partida. Este proceso es justamente el inverso del de la descomposición en órdenes de unidades del primer apartado.</p>`, svg: exacto, video: { id: "IfcrV5LSwUg", titulo: "Fracción generatriz de un decimal periódico puro", canal: "El Profesor Lunar", vistas: 235524, megusta: 0 } },
    { html: `<h3>1.5 Fracción generatriz de un periódico puro</h3><p>El truco para los periódicos es <b>hacer desaparecer el periodo restando</b>. Llamamos N al número, por ejemplo N = 2,454545… Como el periodo tiene 2 cifras, multiplicamos por 10² = 100: 100N = 245,4545… Al restar, las colas infinitas son idénticas y se anulan:</p>${tabla(["", "Valor"], [["100N", "245,4545…"], ["− N", "2,4545…"], ["99N", "243"]])}<p>Por tanto N = 243/99 = 27/11. De aquí sale una <b>regla práctica</b>: en el numerador, el número sin coma menos la parte entera (245 − 2 = 243); en el denominador, tantos <b>nueves</b> como cifras tiene el periodo. Así, 0,7̂ = 7/9 y 1,3̂6̂ = (136 − 1)/99 = 135/99 = 15/11.</p><p>Un resultado curioso: 0,999… = 9/9 = 1. No es «casi 1»: es exactamente 1, otra forma de escribir el mismo número.</p>`, svg: puro },
    { html: `<h3>1.6 Fracción generatriz de un periódico mixto</h3><p>Con anteperiodo hay que multiplicar dos veces: una para llevar la coma justo detrás del anteperiodo y otra para llevarla detrás del primer periodo. Si N = 1,2353535…, entonces 10N = 12,353535… y 1.000N = 1.235,3535… Restando: 990N = 1.223 y N = 1.223/990.</p><p>La <b>regla práctica</b> es: en el numerador, el número sin coma (hasta el primer periodo) menos el número formado por las cifras que no se repiten (12.353 − 123 = 12.230); en el denominador, tantos <b>nueves</b> como cifras del periodo seguidos de tantos <b>ceros</b> como cifras del anteperiodo (9.900). Queda 12.230/9.900 = 1.223/990.</p><p>Otro ejemplo: 0,1666… = (16 − 1)/90 = 15/90 = 1/6. Comprueba siempre el resultado dividiendo: es muy fácil equivocarse al contar nueves y ceros.</p>`, svg: mixto, video: { id: "xLJbRsfQE20", titulo: "Fracción generatriz de un decimal periódico mixto", canal: "El Profesor Lunar", vistas: 293808, megusta: 0 } },
    { html: `<h3>1.7 Comparar y ordenar decimales</h3><p>Para comparar decimales se igualan las cifras decimales y se compara cifra a cifra de izquierda a derecha: 2,307 &lt; 2,31 porque, en las centésimas, 0 &lt; 1. Añadir ceros a la derecha no cambia un decimal: 2,31 = 2,310.</p><p>Con periódicos hay que escribir suficientes cifras. ¿Qué es mayor, 0,33 o 0,3̂? Escribiendo 0,330 y 0,333…, se ve que <mark>0,3̂ &gt; 0,33</mark>. Y 0,3̂ &gt; 0,3, porque 0,333… supera a 0,300. Del mismo modo, 1,2̂ = 1,222… es mayor que 1,22.</p><p>Otra forma segura es pasar todos a fracción y reducir a común denominador. Además, entre dos decimales distintos siempre hay otro: entre 0,33 y 0,3̂ están 0,331, 0,332, 0,3333, etc.</p>`, svg: ordenar },
    { html: `<h3>2.1 Aproximar: truncamiento</h3><p>Muchas veces no necesitamos, o no podemos usar, todas las cifras de un número: un periódico tiene infinitas, y una medida real nunca es exacta. Entonces <b>aproximamos</b>: sustituimos el número por otro cercano y más sencillo. Hay que decidir el orden al que se aproxima (unidades, décimas, centésimas…).</p><p><b>Truncar</b> es cortar el número en el orden elegido y eliminar las cifras siguientes, sin mirarlas. 4,276 truncado a las centésimas es 4,27; π = 3,14159… truncado a las milésimas es 3,141. El truncamiento siempre da una aproximación <b>por defecto</b> (menor que el valor real) para los números positivos.</p><p>Es el método que usan algunas máquinas y relojes: un reloj que marca 10:59 no «redondea» a las 11:00 aunque falten 2 segundos.</p>`, svg: truncar },
    { html: `<h3>2.2 Aproximar: redondeo</h3><p><b>Redondear</b> es elegir, entre las dos aproximaciones posibles en el orden fijado, la más cercana al número. La regla: se mira la primera cifra que se elimina; si es <b>menor que 5</b>, la cifra anterior se queda igual; si es <b>5 o mayor</b>, se le suma 1.</p><p>Ejemplos: 4,276 redondeado a las centésimas es 4,28 (el 6 hace subir); 2,4349 a las décimas es 2,4 (el 3 no sube); 7,96 a las décimas es 8,0 (al sumar 1 al 9 se «arrastra»). Y 2,46 a las décimas es 2,5, como muestra la recta: 2,46 está más cerca de 2,5 que de 2,4.</p><p>El redondeo puede ser por defecto o por exceso, pero siempre comete un error igual o menor que el truncamiento. Por eso es el método habitual en los resultados de los problemas, en los precios y en las calculadoras.</p>`, svg: redondeo },
    { html: `<h3>2.3 Cifras significativas</h3><p>En ciencia, la precisión de un número se expresa con sus <b>cifras significativas</b>: las que aportan información real sobre la medida. Son significativas todas las cifras distintas de cero, los ceros situados entre ellas y los ceros finales de la parte decimal. No lo son los ceros de la izquierda, que solo sitúan la coma.</p><p>Así, 3,47 tiene 3 cifras significativas; 2,05 tiene 3; 0,004 tiene solo 1; 1,20 tiene 3 (ese 0 final indica que se ha medido hasta las centésimas). Escribir 1,2 o 1,20 no es lo mismo para un científico.</p><p>Aproximar a n cifras significativas es redondear dejando n cifras con información: 0,0047386 con 2 cifras significativas es 0,0047; 128.460 con 3 cifras es 128.000. En notación científica se ve más claro: 1,28 · 10⁵.</p>`, svg: cifras },
    { html: `<h3>2.4 Error absoluto y error relativo</h3><p>Al aproximar se comete un error. El <b>error absoluto</b> es la diferencia, en valor absoluto, entre el valor real V y la aproximación A: <mark>Eₐ = |V − A|</mark>. Se expresa en las mismas unidades que la medida. Si π ≈ 3,14, Eₐ = |3,14159… − 3,14| ≈ 0,0016.</p><p>El error absoluto no basta para saber si una aproximación es buena: equivocarse en 1 cm al medir una mesa de 2 m no es lo mismo que al medir una carretera de 2 km. Para comparar se usa el <b>error relativo</b>, el cociente entre el error absoluto y el valor real: <mark>Eᵣ = Eₐ / |V|</mark>. No tiene unidades y suele darse en tanto por ciento.</p><p>Para π ≈ 3,14: Eᵣ ≈ 0,0016/3,1416 ≈ 0,0005, es decir, un 0,05 %. Cuanto <b>menor</b> es el error relativo, más precisa es la aproximación o la medida.</p>`, svg: errores, video: { id: "vsJrLhQuF4c", titulo: "Cómo calcular el error absoluto y el error relativo", canal: "Miguemáticas", vistas: 617155, megusta: 0 } },
    { html: `<h3>2.5 Comparar precisiones con el error relativo</h3><p>Supongamos que medimos una mesa de 2 m y una carretera de 2 km con un error de 1 cm en los dos casos. Los errores absolutos son iguales, pero los relativos son muy distintos: 0,01/2 = 0,005 = 0,5 % para la mesa, y 0,01/2.000 = 0,000005 = 0,0005 % para la carretera. La segunda medida es mil veces más precisa.</p><p>Este razonamiento se usa a diario. Una báscula de cocina que se equivoca en 5 g es precisa para pesar 1 kg de harina (0,5 %), pero muy imprecisa para pesar 10 g de levadura (50 %). Por eso los laboratorios tienen balanzas distintas según lo que se pesa.</p><p>Cuando el valor real es desconocido (lo habitual en una medida), se calcula el error relativo dividiendo entre la propia aproximación, con un resultado muy parecido.</p>`, svg: relativo },
    { html: `<h3>2.6 Cota de error</h3><p>Si no conocemos el valor exacto, no podemos calcular el error, pero sí acotarlo: decir cuánto puede valer <b>como máximo</b>. Esa cantidad es la <b>cota de error</b>.</p><p>Al <b>redondear</b>, el error es como mucho <mark>media unidad del último orden</mark> que se conserva. Si un número redondeado a las centésimas es 4,28, el valor real está entre 4,275 y 4,285, y el error es menor o igual que 0,005. Al <b>truncar</b>, la cota es una unidad completa del último orden: si 4,27 es un truncamiento, el valor real está entre 4,27 y 4,28.</p><p>Por eso un aparato de medida indica su precisión: una regla graduada en milímetros mide con una cota de error de medio milímetro. Expresar una medida como 1,75 m ± 0,005 m es la forma científica de decir cuánto nos podemos fiar de ella.</p>`, svg: cota },
    { html: `<h3>3.1 Operar con decimales periódicos</h3><p>No se puede sumar 0,333… + 0,1666… cifra a cifra, porque no hay «última cifra» por la que empezar. La forma correcta de operar con periódicos es <b>pasarlos a fracción</b>, operar con fracciones y, si se quiere, volver a decimal al final.</p><p>Ejemplo: 0,3̂ + 0,16̂ = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 = <mark>0,5</mark>. ¡La suma de dos periódicos puede ser un decimal exacto! Otro: 0,6̂ · 1,5 = 2/3 · 3/2 = 1.</p><p>Si se usa la calculadora con los decimales redondeados, el resultado tendrá un pequeño error: 0,33 + 0,17 = 0,50 parece correcto, pero 0,6667 · 1,5 = 1,00005. Por eso, en los cálculos encadenados, se trabaja con fracciones o con muchas cifras y solo se <b>redondea al final</b>, nunca en los pasos intermedios.</p>`, svg: operar },
    { html: `<h3>3.2 Los decimales en la vida real</h3><p>Los decimales y las aproximaciones están por todas partes. En las gasolineras, el precio por litro tiene tres decimales (1,559 €/L), pero lo que pagas se redondea a céntimos. Los bancos redondean los intereses según normas legales. En el deporte, una carrera de 100 m se cronometra en centésimas, y en natación dos nadadores pueden empatar en la centésima.</p><p>En las ciencias, las medidas se dan con las cifras significativas que permite el aparato: no tiene sentido decir que una persona mide 1,7534 m con una cinta métrica de centímetros. Y en informática, como viste en la lectura, los ordenadores trabajan con un número limitado de cifras, lo que obliga a vigilar los errores de redondeo.</p><p>Por último, cuando hagas un problema, piensa siempre con qué precisión tiene sentido dar el resultado: 3,333333 personas no existen; el resultado razonable es 3 o, según el contexto, 4.</p>`, svg: vida },
  ],
  ejemplos: [
    { enunciado: "Sin dividir, clasifica el decimal de 21/60.", pasos: ["Simplificamos: 21/60 = 7/20.", "20 = 2² · 5: solo 2 y 5."], resultado: "Decimal exacto: 7/20 = 0,35." },
    { enunciado: "Halla la generatriz de 3,1̂8̂ (periodo 18).", pasos: ["Número sin coma: 318; parte entera: 3.", "Periodo de 2 cifras: denominador 99.", "(318 − 3)/99 = 315/99 = 35/11."], resultado: "3,181818… = 35/11." },
    { enunciado: "Halla la generatriz de 0,58333…", pasos: ["Anteperiodo 58 (2 cifras), periodo 3 (1 cifra).", "Numerador: 583 − 58 = 525.", "Denominador: 900. 525/900 = 7/12."], resultado: "0,583̂ = 7/12." },
    { enunciado: "Redondea y trunca 12,3849 a las décimas y a las milésimas.", pasos: ["Décimas: truncar 12,3; redondear: la cifra siguiente es 8 → 12,4.", "Milésimas: truncar 12,384; redondear: la siguiente es 9 → 12,385."], resultado: "Truncamientos 12,3 y 12,384; redondeos 12,4 y 12,385." },
    { enunciado: "Se aproxima 2/3 por 0,67. Calcula los errores absoluto y relativo.", pasos: ["Eₐ = |2/3 − 0,67| = |0,6666… − 0,67| = 0,00333…", "Eᵣ = 0,00333… / 0,6666… = 0,005."], resultado: "Eₐ ≈ 0,0033; Eᵣ = 0,5 %." },
    { enunciado: "Calcula de forma exacta: 1,2̂ − 0,4̂.", pasos: ["1,2̂ = (12 − 1)/9 = 11/9.", "0,4̂ = 4/9.", "11/9 − 4/9 = 7/9."], resultado: "7/9 = 0,777…" },
  ],
  errores: [
    "Clasificar el decimal sin simplificar antes la fracción (6/15 da exacto, no periódico).",
    "Poner ceros en vez de nueves en el denominador de la generatriz de un periódico.",
    "En los periódicos mixtos, olvidar restar el anteperiodo en el numerador.",
    "Redondear mirando todas las cifras en cadena (2,4449 a las décimas es 2,4, no 2,5).",
    "Redondear en los pasos intermedios y acumular errores.",
    "Pensar que el error absoluto basta para comparar la precisión de dos medidas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Descompón en órdenes de unidades y escribe como fracción decimal: 5,207.", sol: "5 + 2/10 + 0/100 + 7/1000 = 5207/1000." },
    { nivel: "básico", q: "Clasifica: 0,252525…, 1,375, 2,0666…, 7,1̂.", sol: "Periódico puro (25); exacto; periódico mixto (anteperiodo 0, periodo 6); periódico puro (1)." },
    { nivel: "básico", q: "Sin dividir, di el tipo de decimal: 3/16, 5/9, 11/30, 9/25.", sol: "16 = 2⁴ exacto; 9 = 3² puro; 30 = 2·3·5 mixto; 25 = 5² exacto." },
    { nivel: "básico", q: "Halla la generatriz: 0,45 y 3,08.", sol: "45/100 = 9/20; 308/100 = 77/25." },
    { nivel: "básico", q: "Halla la generatriz: 0,6̂ y 0,2̂7̂.", sol: "6/9 = 2/3; 27/99 = 3/11." },
    { nivel: "básico", q: "Halla la generatriz de 0,13̂ (periodo 3).", sol: "(13 − 1)/90 = 12/90 = 2/15." },
    { nivel: "básico", q: "Ordena de menor a mayor: 0,45; 0,4̂5̂; 0,45̂; 0,4.", sol: "0,4 < 0,45 < 0,4545… < 0,4555…" },
    { nivel: "básico", q: "Trunca y redondea 7,3851 a las décimas y a las centésimas.", sol: "Décimas: 7,3 y 7,4. Centésimas: 7,38 y 7,39." },
    { nivel: "básico", q: "Redondea 9,96 a las décimas y 0,0349 a las centésimas.", sol: "10,0; 0,03." },
    { nivel: "básico", q: "¿Cuántas cifras significativas tienen 4,02; 0,0081; 12,50; 300,0?", sol: "3; 2; 4; 4." },
    { nivel: "básico", q: "Se aproxima 5,267 por 5,3. Calcula el error absoluto.", sol: "|5,267 − 5,3| = 0,033." },
    { nivel: "básico", q: "Calcula la generatriz de 0,999… y explica el resultado.", sol: "9/9 = 1. 0,999… y 1 son el mismo número: no hay ningún número entre ellos." },
    { nivel: "medio", q: "Halla la generatriz: 2,15̂ y 0,02̂7̂.", sol: "(215 − 21)/90 = 194/90 = 97/45. (27 − 0)/990 = 27/990 = 3/110." },
    { nivel: "medio", q: "Halla la generatriz de 12,345̂ (periodo 5).", sol: "(12345 − 1234)/900 = 11111/900." },
    { nivel: "medio", q: "Calcula de forma exacta: 0,3̂ + 0,2̂ · 1,5.", sol: "1/3 + 2/9 · 3/2 = 1/3 + 1/3 = 2/3 = 0,6̂." },
    { nivel: "medio", q: "Calcula: (1,6̂ − 0,5) : 0,83̂ (0,8333…).", sol: "1,6̂ = 15/9 = 5/3; 5/3 − 1/2 = 7/6; 0,83̂ = 75/90 = 5/6; 7/6 : 5/6 = 7/5." },
    { nivel: "medio", q: "Redondea 0,004573 a 2 cifras significativas y 58.649 a 3 cifras significativas.", sol: "0,0046; 58.600." },
    { nivel: "medio", q: "Aproxima √2 = 1,41421… por 1,41 y por 1,414. Calcula los errores relativos y di cuál es mejor.", sol: "Eₐ ≈ 0,0042 y 0,00021; Eᵣ ≈ 0,30 % y 0,015 %. Es mejor 1,414." },
    { nivel: "medio", q: "Al medir un folio de 29,7 cm se obtienen 29,5 cm, y al medir un aula de 8 m se obtienen 7,95 m. ¿Qué medida es más precisa?", sol: "Folio: Eₐ = 0,2 cm, Eᵣ ≈ 0,67 %. Aula: Eₐ = 5 cm, Eᵣ = 0,625 %. Algo más precisa la del aula." },
    { nivel: "medio", q: "Una distancia redondeada a las centésimas es 3,47 km. ¿Entre qué valores está la real? ¿Cuál es la cota de error?", sol: "Entre 3,465 y 3,475 km. Cota: 0,005 km = 5 m." },
    { nivel: "medio", q: "Encuentra un decimal entre 0,7̂ y 0,78.", sol: "0,777… < 0,78; por ejemplo 0,779 o 0,7785." },
    { nivel: "medio", q: "¿Qué fracción irreducible genera 0,1̂4̂2̂8̂5̂7̂ (periodo 142857)? Comprueba con la calculadora.", sol: "142857/999999 = 1/7." },
    { nivel: "medio", q: "Un litro de gasolina cuesta 1,559 €. ¿Cuánto se paga por 37,4 L? Redondea con sentido.", sol: "1,559 · 37,4 = 58,3066 € → se pagan 58,31 €." },
    { nivel: "medio", q: "Explica por qué 1/3 + 1/3 + 1/3 = 1, pero 0,33 + 0,33 + 0,33 = 0,99.", sol: "0,33 es una aproximación de 1/3 con error 0,00333…; al sumar tres veces se acumula un error de 0,01." },
    { nivel: "avanzado", q: "Demuestra con el método de restar que 0,4̂5̂ = 5/11.", sol: "N = 0,4545…; 100N = 45,4545…; 99N = 45 → N = 45/99 = 5/11." },
    { nivel: "avanzado", q: "Halla x: x + 0,1̂ = 0,5.", sol: "x = 1/2 − 1/9 = 9/18 − 2/18 = 7/18 = 0,38̂." },
    { nivel: "avanzado", q: "¿Cuántas cifras puede tener como máximo el periodo de una fracción con denominador 13? Calcula 1/13.", sol: "Como máximo 12. 1/13 = 0,076923076923…: periodo de 6 cifras (076923)." },
    { nivel: "avanzado", q: "Un error relativo del 2 % al medir una longitud de 250 m, ¿qué error absoluto supone? ¿Entre qué valores está la medida real?", sol: "Eₐ = 0,02 · 250 = 5 m. Entre 245 y 255 m (aproximadamente)." },
    { nivel: "avanzado", q: "El reloj de la lectura cometía un error de 0,000000095 s en cada décima. ¿Qué error acumula en 100 horas?", sol: "100 h = 360.000 s = 3.600.000 décimas. Error: 3.600.000 · 0,000000095 ≈ 0,34 s." },
    { nivel: "avanzado", q: "Calcula de forma exacta y da el resultado como decimal: (0,1̂ + 0,0̂1̂) · 99.", sol: "1/9 + 1/99 = 11/99 + 1/99 = 12/99; · 99 = 12." },
    { nivel: "avanzado", q: "Un número aproximado por 2,4 tiene un error relativo menor que el 1 %. ¿Entre qué valores puede estar?", sol: "Eₐ < 0,01 · V ≈ 0,024 → aproximadamente entre 2,376 y 2,424." },
    { nivel: "avanzado", q: "Sin calculadora, di si 0,1̂2̂ es mayor o menor que 0,1̂ y explica por qué.", sol: "0,121212… frente a 0,111…: en las centésimas, 2 > 1. Es mayor. Con fracciones: 12/99 = 4/33 y 1/9 = 11/99 < 12/99." },
    { nivel: "avanzado", q: "Redondea π a 1, 2, 3 y 4 decimales y calcula en cada caso el error relativo. ¿Qué observas?", sol: "3,1 (1,3 %); 3,14 (0,051 %); 3,142 (0,013 %); 3,1416 (0,0002 %). Cada decimal más reduce mucho el error relativo." },
    { nivel: "avanzado", q: "¿Puede una suma de dos decimales periódicos ser entera? Pon un ejemplo y justifícalo.", sol: "Sí: 0,3̂ + 0,6̂ = 1/3 + 2/3 = 1. Al pasar a fracción, los denominadores pueden simplificarse." },
    { nivel: "avanzado", q: "Una balanza aprecia décimas de gramo. ¿Cuál es la cota del error relativo al pesar 2 g? ¿Y al pesar 500 g?", sol: "Cota absoluta 0,05 g. 0,05/2 = 2,5 %; 0,05/500 = 0,01 %." },
    { nivel: "avanzado", q: "Explica por qué todo decimal periódico es un número racional.", sol: "Con el método de multiplicar por potencias de 10 y restar se elimina la parte infinita y queda una igualdad entre enteros: N = entero/entero. Por tanto, es una fracción." },
  ],
  quiz: [
    { q: "0,375 es un decimal…", o: ["exacto", "periódico puro", "periódico mixto", "irracional"], a: 0, e: "Tiene un número finito de cifras." },
    { q: "En 2,0333… el anteperiodo es…", o: ["2", "0", "3", "033"], a: 1, e: "El 0 va entre la coma y el periodo." },
    { q: "Sin dividir, 7/12 da un decimal…", o: ["exacto", "puro", "mixto", "entero"], a: 2, e: "12 = 2² · 3." },
    { q: "¿Qué fracción da un periódico puro?", o: ["3/20", "4/15", "5/11", "7/8"], a: 2, e: "11 no tiene ni 2 ni 5." },
    { q: "Generatriz de 0,25:", o: ["1/4", "25/99", "25/90", "2/5"], a: 0, e: "25/100 = 1/4." },
    { q: "Generatriz de 0,5̂:", o: ["1/2", "5/9", "5/90", "5/99"], a: 1, e: "Un nueve por cada cifra del periodo." },
    { q: "Generatriz de 0,16̂:", o: ["16/99", "15/90", "16/90", "1/16"], a: 1, e: "(16 − 1)/90 = 1/6." },
    { q: "0,999… es igual a…", o: ["casi 1", "1", "0,9", "no existe"], a: 1, e: "9/9 = 1." },
    { q: "¿Cuál es mayor?", o: ["0,3", "0,33", "0,3̂", "0,303"], a: 2, e: "0,333… supera a los demás." },
    { q: "8,4672 truncado a las centésimas:", o: ["8,47", "8,46", "8,4", "8,5"], a: 1, e: "Se corta sin mirar." },
    { q: "8,4672 redondeado a las centésimas:", o: ["8,47", "8,46", "8,467", "8,5"], a: 0, e: "El 7 hace subir el 6." },
    { q: "5,97 redondeado a las décimas:", o: ["5,9", "5,10", "6,0", "5,0"], a: 2, e: "Al subir el 9 se arrastra." },
    { q: "Cifras significativas de 0,0560:", o: ["2", "3", "4", "5"], a: 1, e: "5, 6 y el 0 final." },
    { q: "El error absoluto es…", o: ["V/A", "|V − A|", "|V − A|/V", "A − 1"], a: 1, e: "Diferencia entre valor real y aproximado." },
    { q: "El error relativo se usa para…", o: ["sumar errores", "comparar precisiones", "redondear", "truncar"], a: 1, e: "No depende del tamaño de la medida." },
    { q: "Si 3,5 es un redondeo a las décimas, la cota de error es…", o: ["0,5", "0,1", "0,05", "0,01"], a: 2, e: "Media décima." },
    { q: "0,3̂ + 0,6̂ =", o: ["0,9", "0,99", "1", "0,9̂9̂"], a: 2, e: "1/3 + 2/3." },
    { q: "¿Por qué hay que redondear solo al final?", o: ["Es más rápido", "Para no acumular errores", "Por costumbre", "Da igual"], a: 1, e: "Los errores intermedios se suman." },
    { q: "Medir 100 m con error de 1 m da un error relativo de…", o: ["1 %", "10 %", "0,1 %", "100 %"], a: 0, e: "1/100." },
    { q: "Los números racionales tienen expresión decimal…", o: ["siempre exacta", "exacta o periódica", "sin periodo", "infinita sin periodo"], a: 1, e: "Los irracionales son los infinitos no periódicos." },
  ],
  examen: [
    { q: "Generatriz de 1,3̂:", o: ["13/9", "4/3", "12/90", "13/10"], a: 1, e: "(13 − 1)/9 = 12/9." },
    { q: "Generatriz de 0,07̂:", o: ["7/90", "7/99", "7/100", "1/14"], a: 0, e: "(7 − 0)/90." },
    { q: "9/40 da un decimal…", o: ["exacto", "puro", "mixto", "irracional"], a: 0, e: "40 = 2³ · 5." },
    { q: "12,6849 redondeado a las milésimas:", o: ["12,684", "12,685", "12,68", "12,7"], a: 1, e: "El 9 hace subir." },
    { q: "Se aproxima 8,46 por 8,5. Eₐ =", o: ["0,4", "0,04", "0,004", "0,46"], a: 1, e: "|8,46 − 8,5|." },
    { q: "Medida más precisa:", o: ["error 1 cm en 10 cm", "error 1 cm en 1 m", "error 1 cm en 10 m", "todas igual"], a: 2, e: "Menor error relativo: 0,1 %." },
    { q: "0,4̂ · 9 =", o: ["3,6", "4", "3,96", "0,36"], a: 1, e: "4/9 · 9 = 4." },
    { q: "Cifras significativas de 2,300:", o: ["2", "3", "4", "1"], a: 2, e: "Los ceros finales tras la coma cuentan." },
  ],
  feynman: ["Por qué una fracción da un decimal exacto o periódico", "Cómo se elimina el periodo para encontrar la generatriz", "En qué se diferencian truncar y redondear", "Para qué sirve el error relativo"],
  figura: {
    titulo: "Del decimal a la fracción y del número exacto a la aproximación",
    svg: resumen("Resumen de decimales y aproximaciones", [
      ["Exacto", "sin coma / 1 con tantos ceros como decimales", "var(--leaf)"],
      ["Periódico puro", "(sin coma − entera) / tantos 9 como periodo", "var(--pen)"],
      ["Periódico mixto", "(sin coma − no periódica) / 9 periodo + 0 anteperiodo", "var(--red)"],
      ["Aproximar", "truncar o redondear · Eₐ = |V − A| · Eᵣ = Eₐ/V", "var(--inf)"],
    ]),
  },
  video: { id: "qxsn00s5zf0", titulo: "Aproximaciones y errores: truncado y redondeo, error absoluto y relativo", canal: "Las Mates son Chulas", vistas: 129213, megusta: 0 },
  mapa: mapa("DECIMALES", "var(--leaf)", [
    ["Tipos", "exacto · puro · mixto", "var(--pen)"],
    ["Generatriz", "nueves y ceros", "var(--leaf)"],
    ["Aproximar", "truncar · redondear", "var(--red)"],
    ["Errores", "absoluto · relativo · cota", "var(--inf)"],
  ], 250),
  glosario: [
    ["Orden de unidades", "Posición de una cifra: décimas, centésimas, milésimas…"],
    ["Decimal exacto", "Decimal con un número finito de cifras."],
    ["Decimal periódico", "Decimal con un grupo de cifras que se repite sin fin."],
    ["Periodo", "Grupo de cifras que se repite en un decimal periódico."],
    ["Anteperiodo", "Cifras decimales que no se repiten, entre la coma y el periodo."],
    ["Periódico puro", "El periodo empieza justo después de la coma."],
    ["Periódico mixto", "Tiene anteperiodo antes del periodo."],
    ["Fracción generatriz", "Fracción irreducible que da un decimal exacto o periódico."],
    ["Truncar", "Cortar un número en un orden, eliminando las cifras siguientes."],
    ["Redondear", "Elegir la aproximación más cercana en un orden dado."],
    ["Cifras significativas", "Cifras de una medida que aportan información real."],
    ["Error absoluto", "|V − A|: diferencia entre valor real y aproximado."],
    ["Error relativo", "Error absoluto dividido entre el valor real."],
    ["Cota de error", "Valor máximo que puede tener el error."],
  ],
  situacion: {
    titulo: "¿Cuánto nos podemos fiar de una medida?",
    reto: "Vais a medir objetos de la clase y del patio con distintos instrumentos (regla, cinta métrica, pasos, aplicación del móvil) y a decidir, con el error relativo, qué instrumento es más fiable en cada caso.",
    pasos: [
      "Elegid cinco objetos de tamaños muy distintos: una goma, un libro, una mesa, el aula y el patio.",
      "Medid cada uno con dos o tres instrumentos y anotad la precisión de cada aparato.",
      "Tomad como valor real la medida del instrumento más preciso y calculad los errores absolutos y relativos.",
      "Expresad cada medida con sus cifras significativas y su cota de error.",
      "Elaborad una tabla y un cartel con recomendaciones: qué instrumento usar para cada tamaño.",
    ],
    producto: "Un cartel con la tabla de medidas, errores y recomendaciones, y una breve explicación del error relativo.",
    evaluacion: ["Mide con cuidado y anota la precisión del instrumento.", "Calcula correctamente los errores absoluto y relativo.", "Usa las cifras significativas adecuadas.", "Extrae conclusiones razonadas."],
  },
  tarjetas: [
    ["Decimal exacto", "Denominador irreducible con solo 2 y 5."],
    ["Periódico puro", "El periodo empieza tras la coma."],
    ["Periódico mixto", "Hay anteperiodo."],
    ["Generatriz exacto", "Sin coma / 10ⁿ."],
    ["Generatriz puro", "(sin coma − entera) / 99…"],
    ["Generatriz mixto", "(sin coma − no periódica) / 99…00"],
    ["0,999…", "Es exactamente 1."],
    ["Truncar", "Cortar sin mirar."],
    ["Redondear", "≥ 5 sube; < 5 se queda."],
    ["Error absoluto", "|V − A|, con unidades."],
    ["Error relativo", "Eₐ/V, sin unidades (%)."],
    ["Cota al redondear", "Media unidad del último orden."],
  ],
  familias: ["Mirad tiques y facturas: ¿cómo redondean los precios?", "Medid algo en casa con la cinta y con pasos y comparad.", "Jugad a adivinar si una fracción da decimal exacto o periódico y comprobadlo con la calculadora.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido numérico y de la medida: expresión decimal de los racionales, fracción generatriz, aproximaciones, cifras significativas y errores absoluto y relativo (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Investigar la longitud del periodo de 1/7, 1/13, 1/17 con hoja de cálculo.", "Práctica de medida con distintos instrumentos (situación de aprendizaje).", "Analizar el caso real del Patriot como ejemplo de error acumulado.", "Debate: ¿es 0,999… igual a 1?"],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: números decimales y aproximaciones (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
