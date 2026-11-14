// Matemáticas 1º ESO · Perímetros y áreas. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, formula, resumen, poli, linea, punto, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const cota = (x1, y1, x2, y2, t, c = "var(--red)", dx = 0, dy = 0) => `${linea(x1, y1, x2, y2, c, { w: 1.6 })}${tx((x1 + x2) / 2 + dx, (y1 + y2) / 2 + dy, t, { fs: 12, c, max: 70 })}`;

const perArea = comparar("Perímetro y área: el perímetro es la longitud del borde y el área la superficie de dentro", [
  ["Perímetro", ["longitud del borde", "se suma", "cm, m, km"], "var(--red)"],
  ["Área", ["superficie interior", "cuadraditos", "cm², m², km²"], "var(--pen)"],
], "No son lo mismo");

const mismoP = lienzo("Dos rectángulos con el mismo perímetro, 16, y distinta área: 4 por 4 da 16 y 7 por 1 da 7", `
  <rect x="20" y="30" width="80" height="80" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/>${tx(60, 76, "A = 16", { fs: 14, fam: D, c: "var(--leaf)" })}${tx(60, 128, "4 × 4", { fs: 12 })}
  <rect x="120" y="60" width="130" height="18" fill="var(--sun)" fill-opacity=".3" stroke="var(--sun)" stroke-width="2.5"/>${tx(185, 100, "A = 7", { fs: 14, fam: D, c: "var(--sun)" })}${tx(185, 128, "7 × 1", { fs: 12 })}
  ${tx(130, 158, "los dos tienen perímetro 16", { fs: 12.5, c: "var(--red)" })}`, 172);

const rect = lienzo("Rectángulo de base 6 y altura 4: área 24 cuadrados y perímetro 20", `
  <rect x="36" y="24" width="168" height="112" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2.5"/>
  ${[1, 2, 3, 4, 5].map((i) => `<path d="M${36 + i * 28} 24 V136" stroke="var(--pen)" stroke-opacity=".35"/>`).join("")}${[1, 2, 3].map((j) => `<path d="M36 ${24 + j * 28} H204" stroke="var(--pen)" stroke-opacity=".35"/>`).join("")}
  ${tx(120, 152, "b = 6", { fs: 12, c: "var(--red)" })}${tx(222, 84, "h = 4", { fs: 12, c: "var(--red)" })}${tx(120, 172, "A = 6 · 4 = 24 · P = 20", { fs: 12.5, fam: D })}`, 182);

const paralelo = lienzo("El paralelogramo se transforma en un rectángulo de la misma base y altura: A igual a b por h", `
  ${poli([[40, 130], [170, 130], [220, 50], [90, 50]], { c: "var(--leaf)" })}<path d="M90 50 V130" stroke="var(--red)" stroke-dasharray="4 3" stroke-width="2"/><path d="M90 122 h8 v8" fill="none" stroke="var(--red)"/>
  ${poli([[40, 130], [90, 130], [90, 50]], { c: "var(--sun)", op: 0.35 })}<path d="M64 98 C110 160 160 160 190 100" fill="none" stroke="var(--sun)" stroke-dasharray="3 3"/>
  ${tx(130, 148, "b", { fs: 13, c: "var(--leaf)" })}${tx(100, 92, "h", { fs: 13, c: "var(--red)", a: "start" })}${tx(130, 172, "A = b · h", { fs: 16, fam: D })}`, 180);

const triangulo = lienzo("Un triángulo es la mitad de un paralelogramo de la misma base y altura: A igual a b por h entre 2", `
  ${poli([[40, 130], [200, 130], [230, 40], [70, 40]], { c: "var(--muted)", op: 0.05, disc: true })}${poli([[40, 130], [200, 130], [70, 40]], { c: "var(--pen)", op: 0.25 })}
  <path d="M70 40 V130" stroke="var(--red)" stroke-dasharray="4 3" stroke-width="2"/><path d="M70 122 h8 v8" fill="none" stroke="var(--red)"/>
  ${tx(120, 148, "base b", { fs: 12, c: "var(--pen)" })}${tx(64, 90, "h", { fs: 13, c: "var(--red)", a: "end" })}${tx(130, 172, "A = b · h / 2", { fs: 16, fam: D })}`, 180);

const rombo = lienzo("Rombo con diagonales D y d: su área es la mitad del rectángulo que lo rodea, D por d entre 2", `
  <rect x="40" y="30" width="140" height="100" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/>${poli([[110, 30], [180, 80], [110, 130], [40, 80]], { c: "var(--sun)", op: 0.3 })}
  ${linea(40, 80, 180, 80, "var(--red)")}${linea(110, 30, 110, 130, "var(--pen)")}${tx(150, 74, "D", { fs: 13, c: "var(--red)" })}${tx(118, 56, "d", { fs: 13, c: "var(--pen)", a: "start" })}
  ${tx(218, 76, "A =", { fs: 14, fam: D, max: 70 })}${tx(218, 100, "D · d / 2", { fs: 14, fam: D, max: 70 })}${tx(130, 160, "la mitad del rectángulo", { fs: 12, c: "var(--muted)" })}`, 172);

const trapecio = lienzo("Trapecio: dos trapecios iguales forman un paralelogramo de base B más b; área igual a B más b por h entre 2", `
  ${poli([[30, 120], [130, 120], [110, 50], [60, 50]], { c: "var(--leaf)", op: 0.3 })}${poli([[130, 120], [180, 120], [210, 50], [110, 50]], { c: "var(--sun)", op: 0.2, disc: true })}
  ${tx(80, 138, "B", { fs: 13, c: "var(--leaf)" })}${tx(85, 42, "b", { fs: 13, c: "var(--leaf)" })}<path d="M60 50 V120" stroke="var(--red)" stroke-dasharray="4 3"/>${tx(54, 90, "h", { fs: 12, c: "var(--red)", a: "end" })}
  ${tx(130, 164, "A = (B + b) · h / 2", { fs: 15, fam: D })}`, 178);

const regular = lienzo("Polígono regular: se divide en triángulos iguales desde el centro; área igual a perímetro por apotema entre 2", `
  ${(() => { const pts = [...Array(6)].map((_, i) => [80 + 60 * Math.cos(((i + 0.5) * Math.PI) / 3), 90 + 60 * Math.sin(((i + 0.5) * Math.PI) / 3)].map((v) => +v.toFixed(1))); return poli(pts, { c: "var(--pen)", op: 0.1 }) + pts.map(([x, y]) => linea(80, 90, x, y, "var(--pen)", { w: 1 })).join(""); })()}
  ${linea(80, 90, 132, 90, "var(--red)", { w: 2.2 })}${tx(106, 84, "a", { fs: 13, c: "var(--red)" })}
  ${tx(196, 70, "A = P · a / 2", { fs: 14, fam: D, max: 116 })}${tx(196, 98, "6 triángulos", { fs: 11.5, c: "var(--muted)", max: 116 })}${tx(196, 116, "de base l y altura a", { fs: 11, c: "var(--muted)", max: 116 })}`);

const pi = lienzo("El número pi: la longitud de cualquier circunferencia dividida entre su diámetro es siempre 3,14…", `
  <circle cx="70" cy="80" r="50" fill="none" stroke="var(--pen)" stroke-width="2.5"/>${linea(20, 80, 120, 80, "var(--red)", { w: 2 })}${tx(70, 74, "d", { fs: 13, c: "var(--red)" })}
  ${linea(140, 130, 140 + 3.14159 * 30, 130, "var(--pen)", { w: 4 })}${[0, 1, 2, 3].map((i) => `<path d="M${140 + i * 30} 124 V136" stroke="var(--red)" stroke-width="2"/>`).join("")}
  ${tx(190, 60, "L : d = π", { fs: 16, fam: D, max: 120 })}${tx(190, 84, "π ≈ 3,14", { fs: 14, c: "var(--red)", fam: D, max: 120 })}${tx(188, 156, "algo más de 3 diámetros", { fs: 10.5, c: "var(--muted)", max: 120 })}`, 170);

const circulo = formula("Longitud de la circunferencia y área del círculo", "L = 2πr · A = πr²", ["r = 5 cm:", "L = 2 · 3,14 · 5 = 31,4 cm", "A = 3,14 · 25 = 78,5 cm²"], "var(--pen)");

const compuesta = lienzo("Figura compuesta: un rectángulo de 8 por 4 con un semicírculo de radio 2 encima; se suman las áreas", `
  <rect x="40" y="70" width="160" height="80" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/><path d="M80 70 A40 40 0 0 1 160 70 Z" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)" stroke-width="2.5"/>
  ${tx(120, 116, "8 × 4 = 32", { fs: 13, fam: D, c: "var(--leaf)" })}${tx(120, 58, "π · 2² / 2", { fs: 11, c: "var(--sun)" })}${tx(120, 168, "A ≈ 32 + 6,28 = 38,28", { fs: 13, fam: D })}`, 180);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Perímetros y áreas",
  minutos: 110,
  objetivos: [
    "Distinguir perímetro y área y usar sus unidades",
    "Deducir y aplicar las fórmulas del área de los polígonos más habituales",
    "Calcular el área de polígonos regulares con la apotema",
    "Conocer el número π y calcular la longitud de la circunferencia y el área del círculo",
    "Calcular perímetros y áreas de figuras compuestas descomponiéndolas",
    "Resolver problemas reales de medida de superficies",
  ],
  claves: ["perímetro", "área", "base", "altura", "apotema", "número π", "circunferencia", "círculo"],
  pregunta: {
    texto: "Queremos pintar una pared de 4 m de ancho y 2,5 m de alto que tiene una ventana de 1,5 m × 1 m. Un bote de pintura cubre 8 m². ¿Basta con uno?",
    respuesta: "Hay que calcular el <b>área</b> que se pinta: pared 4 · 2,5 = 10 m², menos ventana 1,5 · 1 = 1,5 m². Quedan <mark>8,5 m²</mark>: un bote de 8 m² no llega, hacen falta dos (o uno grande). Las áreas sirven para pintar, alicatar, sembrar o comprar moqueta.",
  },
  lectura: {
    titulo: "El agrimensor del Nilo",
    html: `<p>Cada verano, el río Nilo se desbordaba e inundaba los campos de Egipto. El agua dejaba un barro muy fértil, pero también borraba las lindes entre las fincas. Cuando el río volvía a su cauce, unos funcionarios llamados «tensadores de cuerdas» medían de nuevo los terrenos con cuerdas llenas de nudos, para devolver a cada campesino su parcela y calcular cuántos impuestos debía pagar según la superficie.</p><p>De esta necesidad práctica nació la <b>geometría</b>, palabra griega que significa precisamente «medida de la tierra». Los egipcios sabían calcular el área de rectángulos, triángulos y trapecios, y tenían una aproximación del área del círculo bastante buena. Siglos después, el griego Arquímedes encerró una circunferencia entre polígonos de 96 lados para estimar el número π con dos decimales exactos.</p><p>Hoy calculamos áreas para saber cuántas baldosas comprar, cuánta pintura gastar, cuánto césped sembrar o cuántas placas solares caben en un tejado. En este tema aprenderás de dónde salen las fórmulas de las áreas, cómo usarlas y cómo medir figuras curvas gracias al número π.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Perímetro y área: no son lo mismo</h3><p>El <b>perímetro</b> de una figura plana es la <b>longitud de su borde</b>: se calcula sumando las longitudes de todos sus lados. Se mide en unidades de longitud: cm, m, km… Es lo que mide una valla alrededor de un jardín o el marco de un cuadro.</p><p>El <b>área</b> es la medida de la <b>superficie</b> que ocupa la figura, es decir, de lo que hay dentro del borde. Se mide en unidades cuadradas: cm², m², km²… Un metro cuadrado (1 m²) es la superficie de un cuadrado de 1 m de lado. Es lo que mide el césped del jardín o la pintura del cuadro.</p><p>Es muy importante no confundirlos. Dos figuras pueden tener el <b>mismo perímetro y distinta área</b>: un cuadrado de 4 × 4 y un rectángulo de 7 × 1 tienen ambos perímetro 16, pero áreas 16 y 7. De todos los rectángulos con el mismo perímetro, el cuadrado es el que tiene mayor área.</p>`, svg: perArea },
    { html: `<h3>1.2 Medir superficies con cuadraditos</h3><p>Medir un área es contar <b>cuántas unidades cuadradas caben</b> en la figura. Si dibujas una figura sobre papel cuadriculado de 1 cm, cada cuadradito es 1 cm², y basta con contarlos (sumando las medias casillas en los bordes).</p><p>Este método sirve para cualquier figura, aunque sea irregular, como una mancha o la planta de una hoja: se cuentan las casillas completas, se estiman las incompletas y se obtiene una buena aproximación. Cuanto más pequeñas sean las casillas, más precisa será la medida.</p><p>Pero contar casillas es lento. Las <b>fórmulas</b> que vas a ver en este tema son atajos para contar sin dibujar. En el dibujo de la derecha, los dos rectángulos tienen el mismo perímetro y, sin embargo, en uno caben más del doble de cuadraditos que en el otro. Fíjate también en las unidades: si las medidas están en metros, el perímetro sale en m y el área en m².</p>`, svg: mismoP },
    { html: `<h3>1.3 Cuadrado y rectángulo</h3><p>En un <b>rectángulo</b> de base b y altura h caben b filas de h cuadraditos, así que su área es <mark>A = b · h</mark>. Su perímetro es la suma de los cuatro lados: P = 2b + 2h. Un rectángulo de 6 cm × 4 cm tiene A = 24 cm² y P = 20 cm.</p><p>El <b>cuadrado</b> es un rectángulo con los cuatro lados iguales (l), así que <mark>A = l²</mark> y P = 4l. Un cuadrado de 5 m de lado tiene 25 m² de área y 20 m de perímetro. Por eso decimos que 5² es «cinco al cuadrado».</p><p>Al revés, si conoces el área de un cuadrado, su lado es la raíz cuadrada: una habitación cuadrada de 16 m² mide √16 = 4 m de lado. Y si conoces el área y la base de un rectángulo, la altura es h = A : b. Antes de aplicar una fórmula, comprueba que todas las medidas están en la misma unidad.</p>`, svg: rect },
    { html: `<h3>1.4 El paralelogramo</h3><p>Un <b>paralelogramo</b> (romboide) tiene los lados opuestos paralelos. Su <b>altura</b> no es el lado inclinado, sino la distancia perpendicular entre las dos bases.</p><p>Para calcular su área hay un truco precioso: si cortas el triángulo de un extremo y lo pegas en el otro, el paralelogramo se convierte en un <b>rectángulo</b> con la misma base y la misma altura. Por tanto, su área es la misma fórmula: <mark>A = b · h</mark>.</p><p>Ejemplo: un paralelogramo de base 9 cm, lado inclinado 5 cm y altura 4 cm tiene A = 9 · 4 = 36 cm² y P = 2 · 9 + 2 · 5 = 28 cm. Fíjate en que para el área se usa la altura (4) y para el perímetro, el lado inclinado (5). Es un error muy frecuente usar el lado inclinado como altura.</p>`, svg: paralelo },
    { html: `<h3>1.5 El triángulo</h3><p>Todo triángulo es la <b>mitad de un paralelogramo</b> con la misma base y la misma altura: si haces una copia del triángulo, la giras y la pegas junto al original, obtienes un paralelogramo. Por eso:</p><p style="text-align:center"><mark>A = b · h / 2</mark></p><p>La <b>altura</b> es el segmento perpendicular desde un vértice al lado opuesto (o a su prolongación). Cualquier lado puede ser la base, siempre que uses la altura que le corresponde. En un triángulo obtusángulo, la altura puede caer <b>fuera</b> del triángulo.</p><p>En un triángulo rectángulo, los dos lados que forman el ángulo recto (los catetos) son base y altura, así que su área es cateto por cateto entre 2. Un triángulo rectángulo con catetos de 6 cm y 8 cm tiene un área de 6 · 8 : 2 = 24 cm². El perímetro, como siempre, es la suma de los tres lados.</p>`, svg: triangulo, video: vb("areB") },
    { html: `<h3>1.6 El rombo</h3><p>El <b>rombo</b> tiene cuatro lados iguales y sus diagonales son perpendiculares. Si lo rodeamos con un rectángulo cuyos lados midan lo mismo que las diagonales, vemos que el rombo ocupa exactamente <b>la mitad</b> del rectángulo (cada triángulo de fuera es igual a uno de dentro). Por tanto:</p><p style="text-align:center"><mark>A = D · d / 2</mark></p><p>donde D es la diagonal mayor y d la diagonal menor. Un rombo de diagonales 10 cm y 6 cm tiene un área de 10 · 6 : 2 = 30 cm². Su perímetro es 4 veces el lado: P = 4l.</p><p>Como el rombo también es un paralelogramo, su área se puede calcular con A = b · h si conocemos la altura. Y como el cuadrado es un rombo, su área también es diagonal al cuadrado entre 2: un cuadrado de diagonal 4 m tiene 4 · 4 : 2 = 8 m².</p>`, svg: rombo },
    { html: `<h3>1.7 El trapecio</h3><p>El <b>trapecio</b> tiene dos lados paralelos de distinta longitud: la <b>base mayor</b> (B) y la <b>base menor</b> (b). Si tomamos dos trapecios iguales y giramos uno, juntos forman un <b>paralelogramo</b> de base B + b y la misma altura h. Cada trapecio es la mitad:</p><p style="text-align:center"><mark>A = (B + b) · h / 2</mark></p><p>Ejemplo: un trapecio de bases 12 cm y 8 cm y altura 5 cm tiene A = (12 + 8) · 5 : 2 = 50 cm².</p><p>Una forma de recordarlo es pensar que el área del trapecio es la de un rectángulo cuya base es la <b>media</b> de las dos bases: (12 + 8) : 2 = 10, y 10 · 5 = 50. Los trapecios aparecen en muchos objetos reales: las caras de un cubo de basura, algunas parcelas de tierra, los laterales de un tejado o el escalón de una tribuna.</p>`, svg: trapecio },
    { html: `<h3>1.8 Polígonos regulares</h3><p>Un polígono regular de n lados se puede dividir, desde el centro, en <b>n triángulos iguales</b>. Cada uno tiene como base un lado (l) y como altura la <b>apotema</b> (a), la distancia del centro al punto medio de un lado. El área total es n veces el área de un triángulo:</p><p style="text-align:center">A = n · (l · a / 2) = <mark>P · a / 2</mark></p><p>porque n · l es el perímetro P. Ejemplo: un hexágono regular de lado 6 cm y apotema 5,2 cm tiene P = 36 cm y A = 36 · 5,2 : 2 = 93,6 cm².</p><p>Esta fórmula vale para cualquier polígono regular: pentágono, hexágono, octógono… Las señales de stop (octógonos), las baldosas hexagonales o los pétalos de muchos diseños son polígonos regulares. Si el polígono no es regular, se descompone en triángulos y se suman sus áreas, un método llamado <b>triangulación</b> que usan los topógrafos.</p>`, svg: regular },
    { html: `<h3>2.1 La circunferencia y el número π</h3><p>Si mides con una cuerda la longitud L del borde de cualquier objeto circular (un plato, una lata, una rueda) y la divides entre su diámetro d, siempre obtienes el mismo número, algo mayor que 3. Ese número tan especial se llama <b>π</b> («pi»):</p><p style="text-align:center"><mark>L : d = π ≈ 3,14</mark></p><p>π tiene infinitas cifras decimales que nunca se repiten: 3,14159265358979… Se conocen billones de ellas, pero para casi todo basta con 3,14. Arquímedes ya demostró que está entre 3 + 10/71 y 3 + 1/7.</p><p>De la definición sale la fórmula de la <b>longitud de la circunferencia</b>: L = π · d, o, como el diámetro es el doble del radio, <mark>L = 2πr</mark>. Una rueda de bicicleta de 70 cm de diámetro avanza en cada vuelta 3,14 · 70 ≈ 220 cm. Para recorrer 1 km necesita unas 1 000 : 2,2 ≈ 455 vueltas.</p>`, svg: pi },
    { html: `<h3>2.2 El área del círculo</h3><p>Imagina un círculo cortado en muchos sectores muy finos, como una pizza en 16 trozos. Si los colocas alternando uno hacia arriba y otro hacia abajo, forman una figura casi rectangular: su base es la mitad de la circunferencia (πr) y su altura, el radio (r). Cuantos más trozos, más se parece a un rectángulo. Por tanto, el área del círculo es:</p><p style="text-align:center"><mark>A = π · r²</mark></p><p>Un círculo de 5 cm de radio tiene un área de 3,14 · 25 = 78,5 cm². ¡Cuidado! El radio se eleva al cuadrado, no se multiplica por 2. Y si te dan el diámetro, divídelo primero entre 2.</p><p>Algunas partes del círculo: un <b>semicírculo</b> es la mitad (πr² : 2); un <b>sector circular</b> de n grados es la fracción n/360 del círculo; una <b>corona circular</b> (la forma de un CD) es la diferencia entre dos círculos: π(R² − r²).</p>`, svg: circulo, video: vb("areB2") },
    { html: `<h3>2.3 Figuras compuestas</h3><p>Muchas figuras reales no tienen una fórmula propia, pero se pueden <b>descomponer</b> en figuras conocidas. Hay dos estrategias:</p><ul><li><b>Sumar</b>: dividir la figura en partes y sumar sus áreas. Una ventana formada por un rectángulo de 8 × 4 con un semicírculo de radio 2 encima tiene A = 32 + 3,14 · 4 : 2 = 32 + 6,28 = <mark>38,28</mark> unidades².</li><li><b>Restar</b>: calcular el área de una figura grande y restar los «huecos». Un marco de fotos de 30 × 20 cm con un hueco de 24 × 14 cm tiene 600 − 336 = 264 cm² de madera.</li></ul><p>Para el <b>perímetro</b> de una figura compuesta, hay que sumar solo los tramos del <b>borde exterior</b>, no las líneas interiores que hemos dibujado para dividirla. En la ventana: 4 + 8 + 4 (lados del rectángulo) + la mitad de la circunferencia de radio 2 (6,28) = 22,28.</p>`, svg: compuesta },
    { html: `<h3>2.4 Problemas de áreas en la vida real</h3><p>Para resolver problemas de superficies conviene seguir estos pasos:</p><ol><li>Hacer un <b>dibujo</b> con todas las medidas.</li><li>Comprobar que todas las medidas están en la <b>misma unidad</b>.</li><li>Decidir si se pide un <b>perímetro</b> (vallas, rodapiés, cintas) o un <b>área</b> (pintura, baldosas, césped, tela).</li><li>Descomponer, aplicar fórmulas y operar.</li><li>Responder con la unidad correcta y pensar si el resultado es razonable.</li></ol><p>Ejemplo: «Queremos poner baldosas de 30 cm × 30 cm en una cocina de 3,6 m × 2,4 m. ¿Cuántas necesitamos?». Pasamos a cm: 360 × 240. Caben 360 : 30 = 12 baldosas a lo largo y 240 : 30 = 8 a lo ancho: <mark>96 baldosas</mark>. Comprobación con áreas: 86 400 cm² : 900 cm² = 96 ✓. En la práctica se compra un 10 % más por las roturas y los cortes.</p>`, video: vg("areV") },
  ],
  ejemplos: [
    { enunciado: "Calcula el perímetro y el área de un rectángulo de 12 m × 7,5 m.", pasos: ["P = 2 · 12 + 2 · 7,5 = 39 m.", "A = 12 · 7,5 = 90 m²."], resultado: "P = 39 m; A = 90 m²." },
    { enunciado: "Un triángulo tiene base 14 cm y altura 9 cm. Calcula su área.", pasos: ["A = b · h / 2.", "14 · 9 = 126; 126 : 2."], resultado: "63 cm²." },
    { enunciado: "Calcula el área de un trapecio de bases 15 y 9 m y altura 6 m.", pasos: ["(15 + 9) · 6 / 2.", "24 · 6 = 144; 144 : 2."], resultado: "72 m²." },
    { enunciado: "Un octógono regular tiene 4 cm de lado y 4,83 cm de apotema. Calcula su área.", pasos: ["P = 8 · 4 = 32 cm.", "A = 32 · 4,83 / 2."], resultado: "77,28 cm²." },
    { enunciado: "Calcula la longitud y el área de un círculo de 6 cm de diámetro.", pasos: ["r = 3 cm.", "L = 2 · 3,14 · 3 = 18,84 cm.", "A = 3,14 · 9 = 28,26 cm²."], resultado: "L = 18,84 cm; A = 28,26 cm²." },
    { enunciado: "Una piscina circular de 4 m de radio está rodeada por un paseo de 1 m de ancho. ¿Qué superficie tiene el paseo?", pasos: ["Corona: radio exterior 5 m, interior 4 m.", "π(5² − 4²) = 3,14 · 9."], resultado: "≈ 28,26 m²." },
  ],
  errores: [
    "Confundir perímetro y área, o dar el área en cm en lugar de cm².",
    "Usar el lado inclinado como altura en paralelogramos y trapecios.",
    "Olvidar dividir entre 2 en el triángulo, el rombo o el trapecio.",
    "Usar el diámetro en lugar del radio en A = πr².",
    "Calcular 2r en lugar de r² en el área del círculo.",
    "Mezclar unidades (metros y centímetros) en una misma fórmula.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Calcula el perímetro y el área de un cuadrado de 9 cm de lado.", sol: "P = 36 cm; A = 81 cm²." },
    { nivel: "básico", q: "Calcula el perímetro y el área de un rectángulo de 15 m × 4 m.", sol: "P = 38 m; A = 60 m²." },
    { nivel: "básico", q: "Un paralelogramo tiene base 10 cm y altura 6 cm. ¿Cuál es su área?", sol: "A = 60 cm²." },
    { nivel: "básico", q: "Calcula el área de un triángulo de base 8 m y altura 5 m.", sol: "8 · 5 : 2 = 20 m²." },
    { nivel: "básico", q: "Un triángulo rectángulo tiene catetos de 9 y 12 cm. Calcula su área.", sol: "9 · 12 : 2 = 54 cm²." },
    { nivel: "básico", q: "Calcula el área de un rombo de diagonales 16 y 10 cm.", sol: "16 · 10 : 2 = 80 cm²." },
    { nivel: "básico", q: "Calcula el área de un trapecio de bases 10 y 6 cm y altura 4 cm.", sol: "(10 + 6) · 4 : 2 = 32 cm²." },
    { nivel: "básico", q: "Calcula la longitud de una circunferencia de radio 10 cm.", sol: "2 · 3,14 · 10 = 62,8 cm." },
    { nivel: "básico", q: "Calcula el área de un círculo de radio 4 m.", sol: "3,14 · 16 = 50,24 m²." },
    { nivel: "básico", q: "Un pentágono regular tiene 6 cm de lado y 4,1 cm de apotema. Calcula su área.", sol: "P = 30; A = 30 · 4,1 : 2 = 61,5 cm²." },
    { nivel: "básico", q: "Dibuja dos rectángulos distintos de perímetro 20 cm y calcula sus áreas.", sol: "Por ejemplo 6 × 4 (24 cm²) y 9 × 1 (9 cm²)." },
    { nivel: "básico", q: "¿Cuántos cm² son 1 m²?", sol: "100 · 100 = 10 000 cm²." },
    { nivel: "medio", q: "Un cuadrado tiene 64 m² de área. ¿Cuánto mide su perímetro?", sol: "Lado √64 = 8 m; P = 32 m." },
    { nivel: "medio", q: "Un rectángulo tiene 54 cm² de área y 9 cm de base. Calcula su altura y su perímetro.", sol: "h = 54 : 9 = 6 cm; P = 30 cm." },
    { nivel: "medio", q: "Un triángulo tiene 45 cm² de área y 10 cm de base. ¿Cuánto mide su altura?", sol: "45 = 10 · h / 2 → h = 9 cm." },
    { nivel: "medio", q: "Calcula la longitud y el área de un círculo de 12 m de diámetro.", sol: "r = 6. L = 37,68 m; A = 113,04 m²." },
    { nivel: "medio", q: "Una rueda de 60 cm de diámetro da 500 vueltas. ¿Cuántos metros recorre?", sol: "Una vuelta: 3,14 · 60 = 188,4 cm. 500 vueltas: 94 200 cm = 942 m." },
    { nivel: "medio", q: "Calcula el área de un semicírculo de radio 6 cm y su perímetro.", sol: "A = 3,14 · 36 : 2 = 56,52 cm². P = 3,14 · 6 + 12 = 30,84 cm." },
    { nivel: "medio", q: "Un marco cuadrado de 40 cm de lado tiene un hueco cuadrado de 30 cm. ¿Qué superficie tiene el marco?", sol: "1 600 − 900 = 700 cm²." },
    { nivel: "medio", q: "Calcula el área de una figura en forma de L formada por un rectángulo de 8 × 2 y otro de 2 × 5 pegados (sin solaparse).", sol: "16 + 10 = 26 unidades²." },
    { nivel: "medio", q: "¿Cuántas baldosas de 20 cm × 20 cm hacen falta para un suelo de 4 m × 3 m?", sol: "400 : 20 = 20; 300 : 20 = 15; 20 · 15 = 300 baldosas." },
    { nivel: "medio", q: "Una pared de 5 m × 2,8 m tiene una puerta de 0,9 m × 2 m. ¿Qué superficie hay que pintar?", sol: "14 − 1,8 = 12,2 m²." },
    { nivel: "medio", q: "Calcula el área de la corona circular entre circunferencias de radios 7 y 3 cm.", sol: "3,14 · (49 − 9) = 125,6 cm²." },
    { nivel: "avanzado", q: "Si el lado de un cuadrado se duplica, ¿qué ocurre con su perímetro? ¿Y con su área?", sol: "El perímetro se duplica; el área se multiplica por 4." },
    { nivel: "avanzado", q: "Una pizza mediana de 30 cm de diámetro cuesta 9 € y una familiar de 40 cm, 14 €. ¿Cuál sale más barata por cm²?", sol: "Mediana: 706,5 cm² → 0,0127 €/cm². Familiar: 1 256 cm² → 0,0111 €/cm². La familiar." },
    { nivel: "avanzado", q: "Un jardín rectangular de 20 m × 12 m tiene un estanque circular de 3 m de radio. ¿Cuánto césped hay? Si cada m² de césped cuesta 4,50 €, ¿cuánto cuesta?", sol: "240 − 28,26 = 211,74 m². 211,74 · 4,50 ≈ 952,83 €." },
    { nivel: "avanzado", q: "Calcula el área de un sector circular de 90° y radio 8 cm.", sol: "90/360 = 1/4 del círculo: 3,14 · 64 : 4 = 50,24 cm²." },
    { nivel: "avanzado", q: "Una cuerda de 24 m se usa para cercar un terreno rectangular. ¿Qué medidas dan el área máxima?", sol: "Un cuadrado de 6 × 6 = 36 m² (los rectángulos de perímetro 24 tienen menos área)." },
    { nivel: "avanzado", q: "Un hexágono regular de 10 cm de lado tiene una apotema de 8,66 cm. Si lo dividimos en 6 triángulos equiláteros, ¿cuál es el área de cada uno? Comprueba con la fórmula general.", sol: "Cada triángulo: 10 · 8,66 : 2 = 43,3 cm². Total 259,8 cm² = 60 · 8,66 : 2 ✓." },
    { nivel: "avanzado", q: "Encuentra el error: «Área de un círculo de diámetro 10: 3,14 · 10² = 314».", sol: "Se debe usar el radio (5): 3,14 · 25 = 78,5. Con el diámetro se obtiene 4 veces más." },
  ],
  quiz: [
    { q: "El perímetro se mide en…", o: ["cm²", "cm", "cm³", "litros"], a: 1, e: "Es una longitud." },
    { q: "El área se mide en…", o: ["m", "m²", "kg", "m³"], a: 1, e: "Unidades cuadradas." },
    { q: "Área de un cuadrado de lado 7:", o: ["28", "49", "14", "21"], a: 1, e: "7²." },
    { q: "Perímetro de un rectángulo de 5 × 3:", o: ["15", "16", "8", "30"], a: 1, e: "2 · 5 + 2 · 3." },
    { q: "Área de un paralelogramo:", o: ["b · h / 2", "b · h", "2b + 2h", "D · d / 2"], a: 1, e: "Como el rectángulo." },
    { q: "Área de un triángulo de base 10 y altura 4:", o: ["40", "20", "14", "80"], a: 1, e: "10 · 4 : 2." },
    { q: "La altura de un triángulo es…", o: ["el lado mayor", "perpendicular a la base", "la mitad de la base", "un lado cualquiera"], a: 1, e: "Desde un vértice al lado opuesto." },
    { q: "Área de un rombo de diagonales 8 y 6:", o: ["48", "24", "14", "28"], a: 1, e: "8 · 6 : 2." },
    { q: "Área del trapecio:", o: ["B · b · h", "(B + b) · h / 2", "(B − b) · h", "B · h"], a: 1, e: "Mitad de un paralelogramo." },
    { q: "Área de un polígono regular:", o: ["P · a", "P · a / 2", "l²", "n · l"], a: 1, e: "Perímetro por apotema entre 2." },
    { q: "La apotema es la distancia del centro…", o: ["a un vértice", "al punto medio de un lado", "a otro polígono", "al perímetro total"], a: 1, e: "Perpendicular al lado." },
    { q: "π vale aproximadamente…", o: ["3", "3,14", "2,71", "22"], a: 1, e: "L : d." },
    { q: "Longitud de la circunferencia:", o: ["πr²", "2πr", "πr", "2r²"], a: 1, e: "L = π · d." },
    { q: "Área del círculo:", o: ["2πr", "πr²", "πd²", "π · 2r"], a: 1, e: "A = πr²." },
    { q: "Área de un círculo de radio 10:", o: ["62,8", "314", "31,4", "628"], a: 1, e: "3,14 · 100." },
    { q: "Si el diámetro es 8, el radio es…", o: ["16", "4", "8", "2"], a: 1, e: "d : 2." },
    { q: "Un cuadrado y un rectángulo con el mismo perímetro…", o: ["tienen igual área", "el cuadrado tiene más área", "el rectángulo tiene más área", "no se puede saber"], a: 1, e: "El cuadrado maximiza el área." },
    { q: "Para calcular un marco se…", o: ["suman las áreas", "resta el hueco", "multiplican los perímetros", "usa π"], a: 1, e: "Área grande − hueco." },
    { q: "Para comprar una valla necesitas el…", o: ["área", "perímetro", "volumen", "radio"], a: 1, e: "Longitud del borde." },
    { q: "1 m² son…", o: ["100 cm²", "1 000 cm²", "10 000 cm²", "10 cm²"], a: 2, e: "100 · 100." },
  ],
  examen: [
    { q: "Área de un rectángulo de 8 cm × 2,5 cm:", o: ["21 cm²", "20 cm²", "10,5 cm²", "16 cm²"], a: 1, e: "8 · 2,5." },
    { q: "Triángulo de base 12 y altura 7. Área:", o: ["84", "42", "19", "38"], a: 1, e: "84 : 2." },
    { q: "Trapecio de bases 9 y 5, altura 4. Área:", o: ["28", "56", "18", "180"], a: 0, e: "14 · 4 : 2." },
    { q: "Rombo de diagonales 12 y 7. Área:", o: ["84", "42", "38", "19"], a: 1, e: "84 : 2." },
    { q: "Circunferencia de radio 5. Longitud:", o: ["15,7", "31,4", "78,5", "10"], a: 1, e: "2 · 3,14 · 5." },
    { q: "Círculo de diámetro 20. Área:", o: ["1 256", "314", "62,8", "125,6"], a: 1, e: "r = 10: 3,14 · 100." },
    { q: "Cuadrado de área 49 m². Perímetro:", o: ["7 m", "28 m", "49 m", "14 m"], a: 1, e: "Lado 7." },
    { q: "Hexágono regular de lado 4 y apotema 3,46. Área:", o: ["41,52", "83,04", "24", "13,84"], a: 0, e: "24 · 3,46 : 2." },
  ],
  feynman: ["Qué diferencia hay entre perímetro y área y en qué unidades se miden", "Por qué el área del triángulo es la mitad de base por altura", "Qué es el número π y cómo se puede comprobar con una cuerda", "Cómo se calcula el área de una figura compuesta"],
  figura: {
    titulo: "Las fórmulas de áreas en un vistazo",
    svg: resumen("Resumen de las fórmulas de perímetros y áreas", [
      ["Rectángulo", "A = b · h · cuadrado l²", "var(--pen)"],
      ["Triángulo", "A = b · h / 2", "var(--leaf)"],
      ["Rombo", "D · d / 2 · trapecio (B + b) · h / 2", "var(--sun)"],
      ["Regular", "A = P · a / 2", "var(--inf)"],
      ["Círculo", "L = 2πr · A = πr²", "var(--red)"],
    ]),
  },
  video: vg("areV"),
  mapa: mapa("ÁREAS", "var(--leaf)", [
    ["Perímetro", "suma de lados · L = 2πr", "var(--red)"],
    ["Cuadriláteros", "b · h · D·d/2 · (B+b)h/2", "var(--pen)"],
    ["Triángulos y polígonos", "b·h/2 · P·a/2", "var(--leaf)"],
    ["Círculo", "π · r² · compuestas", "var(--sun)"],
  ], 250),
  glosario: [
    ["Perímetro", "Longitud del borde de una figura plana."],
    ["Área", "Medida de la superficie que ocupa una figura."],
    ["Metro cuadrado", "Área de un cuadrado de 1 m de lado."],
    ["Base", "Lado de referencia de una figura para calcular su área."],
    ["Altura", "Distancia perpendicular desde la base al vértice o lado opuesto."],
    ["Diagonal", "Segmento que une dos vértices no consecutivos."],
    ["Apotema", "Distancia del centro de un polígono regular al punto medio de un lado."],
    ["Número π", "Cociente entre la longitud de una circunferencia y su diámetro (≈ 3,14)."],
    ["Radio", "Distancia del centro a la circunferencia."],
    ["Diámetro", "Cuerda que pasa por el centro; vale 2r."],
    ["Sector circular", "Parte del círculo limitada por dos radios y un arco."],
    ["Corona circular", "Superficie entre dos circunferencias con el mismo centro."],
    ["Figura compuesta", "Figura formada por varias figuras sencillas."],
  ],
  situacion: {
    titulo: "Reformamos el aula",
    reto: "Vais a medir vuestra aula y preparar un presupuesto para renovarla: pintar las paredes, cambiar el suelo y poner un zócalo, comparando precios reales.",
    pasos: [
      "Medid con cinta métrica el largo, el ancho y la altura del aula, y las puertas y ventanas.",
      "Dibujad un plano a escala con todas las medidas.",
      "Calculad el área de las paredes que hay que pintar (restando huecos) y el área del suelo.",
      "Calculad el perímetro para el zócalo o rodapié (restando las puertas).",
      "Buscad precios reales de pintura, suelo y rodapié y calculad el presupuesto total, con un 10 % extra por si acaso.",
    ],
    producto: "Un plano con medidas y un presupuesto detallado de la reforma.",
    evaluacion: ["Mide con precisión y usa unidades coherentes.", "Distingue cuándo se necesita perímetro y cuándo área.", "Aplica correctamente las fórmulas y descompone figuras.", "Presenta el presupuesto con orden y justifica las decisiones."],
  },
  tarjetas: [
    ["Perímetro", "Suma de los lados (cm)"], ["Área", "Superficie (cm²)"], ["Rectángulo", "A = b · h"],
    ["Cuadrado", "A = l²"], ["Paralelogramo", "A = b · h"], ["Triángulo", "A = b · h / 2"],
    ["Rombo", "A = D · d / 2"], ["Trapecio", "A = (B + b) · h / 2"], ["Polígono regular", "A = P · a / 2"],
    ["π", "L : d ≈ 3,14"], ["Circunferencia", "L = 2πr"], ["Círculo", "A = πr²"],
  ],
  familias: ["Medid juntos una habitación y calculad cuántas baldosas o cuánta pintura harían falta.", "Comprobad π: medid con una cuerda el contorno de platos y latas y dividid entre el diámetro.", "Comparad el precio por cm² de dos tamaños de pizza.", "Buscad formas geométricas en folletos de pisos (planos) y calculad superficies."],
  profesores: {
    saberes: "Sentido de la medida y espacial: perímetro y área de polígonos, deducción de fórmulas por descomposición, polígonos regulares, longitud de la circunferencia y área del círculo, figuras compuestas y resolución de problemas (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Geoplano o papel cuadriculado para descubrir fórmulas.", "Medir objetos circulares y calcular π experimentalmente.", "Recortar sectores de un círculo y montar el «rectángulo» de área πr².", "Proyecto de reforma del aula con presupuesto real."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): áreas de figuras planas", url: "https://proyectodescartes.org/" }, { t: "Wikipedia: Número π", url: "https://es.wikipedia.org/wiki/Número_π" }],
  revisado: REV,
};
