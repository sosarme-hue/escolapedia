// Matemáticas 2º ESO: cuerpos geométricos, áreas y volúmenes. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Cuerpos geométricos: áreas y volúmenes",
  minutos: 65,
  objetivos: ["Clasificar los cuerpos geométricos en poliedros y cuerpos de redondeo", "Reconocer prismas, pirámides y poliedros regulares y comprobar la fórmula de Euler", "Calcular áreas de prismas, pirámides, cilindros, conos y esferas a partir de su desarrollo", "Calcular volúmenes y relacionar unidades de volumen y capacidad"],
  claves: ["poliedro", "prisma", "pirámide", "cilindro", "desarrollo plano", "volumen"],
  pregunta: {
    texto: "¿Por qué las latas de refresco son cilindros y no cubos?",
    respuesta: "Por varias razones: el cilindro resiste mejor la presión del gas, se agarra con comodidad y se fabrica enrollando una chapa. Además, para una misma cantidad de líquido, un cilindro bien proporcionado necesita <mark>menos metal</mark> (menos área) que muchas otras formas. Calcular áreas y volúmenes sirve para diseñar envases, depósitos o habitaciones.",
  },
  bloques: [
    {
      html: `<h3>Poliedros y cuerpos de redondeo</h3><p>Los <b>cuerpos geométricos</b> ocupan un lugar en el espacio y tienen tres dimensiones. Se clasifican en:</p><ul><li><b>Poliedros</b>: todas sus caras son <b>polígonos</b> (cubo, prisma, pirámide). Sus elementos son las <b>caras</b>, las <b>aristas</b> (donde se cortan dos caras) y los <b>vértices</b> (donde se juntan varias aristas).</li><li><b>Cuerpos de redondeo</b> o de revolución: tienen alguna superficie curva y se obtienen al <b>girar</b> una figura plana alrededor de un eje: el <b>cilindro</b> (gira un rectángulo), el <b>cono</b> (un triángulo rectángulo) y la <b>esfera</b> (un semicírculo).</li></ul>`,
      svg: svg("Un cubo, un cilindro, un cono y una esfera dibujados en perspectiva", `<path d="M20 120 h 44 v -44 h -44 z M20 76 l 16 -14 h 44 l -16 14 M64 120 l 16 -14 v -44" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2"/>
        <ellipse cx="120" cy="60" rx="22" ry="7" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><path d="M98 60 V 116 M142 60 V 116" stroke="var(--leaf)" stroke-width="2"/><path d="M98 116 A 22 7 0 0 0 142 116" fill="none" stroke="var(--leaf)" stroke-width="2"/>
        <path d="M168 116 L 190 52 L 212 116" fill="var(--sun)" fill-opacity=".15" stroke="var(--sun)" stroke-width="2"/><ellipse cx="190" cy="116" rx="22" ry="7" fill="none" stroke="var(--sun)" stroke-width="2"/>
        <circle cx="236" cy="96" r="18" fill="var(--red)" fill-opacity=".15" stroke="var(--red)" stroke-width="2"/><ellipse cx="236" cy="96" rx="18" ry="5" fill="none" stroke="var(--red)" stroke-width="1.2" stroke-dasharray="3 2"/>
        ${t(42, 146, "poliedro", { c: "var(--pen)", s: 11 })}${t(176, 150, "cuerpos de redondeo", { c: "var(--leaf)", s: 11 })}`),
      video: { id: "kD5gz2k5IZQ", titulo: "Cuerpos de revolución", canal: "Daniel Carreón", vistas: 834517 },
    },
    {
      html: `<h3>Prismas, pirámides y poliedros regulares</h3><ul><li>Un <b>prisma</b> tiene dos bases iguales y paralelas, y caras laterales que son paralelogramos (rectángulos si es <b>recto</b>). Se nombra por su base: prisma triangular, pentagonal… El <b>ortoedro</b> es un prisma con todas las caras rectangulares, como una caja de zapatos.</li><li>Una <b>pirámide</b> tiene una base poligonal y caras laterales triangulares que se juntan en un vértice, la <b>cúspide</b>. Su altura es la distancia de la cúspide a la base; la altura de cada cara lateral se llama <b>apotema</b> de la pirámide.</li></ul><p>Los <b>poliedros regulares</b> tienen todas las caras iguales y regulares y en cada vértice concurren las mismas caras. Solo hay cinco: <b>tetraedro</b> (4 triángulos), <b>cubo</b> (6 cuadrados), <b>octaedro</b> (8 triángulos), <b>dodecaedro</b> (12 pentágonos) e <b>icosaedro</b> (20 triángulos).</p>`,
    },
    {
      html: `<h3>La fórmula de Euler</h3><p>En todos los poliedros convexos (sin entrantes) se cumple una relación entre caras (C), vértices (V) y aristas (A):</p><p style="text-align:center"><mark>C + V = A + 2</mark></p>${tabla(["Poliedro", "C", "V", "A", "C + V = A + 2"], [["Cubo", "6", "8", "12", "14 = 14"], ["Tetraedro", "4", "4", "6", "8 = 8"], ["Pirámide cuadrangular", "5", "5", "8", "10 = 10"], ["Prisma hexagonal", "8", "12", "18", "20 = 20"], ["Icosaedro", "20", "12", "30", "32 = 32"]])}<p>La descubrió el matemático suizo Leonhard Euler en el siglo XVIII. Sirve para comprobar si un recuento está bien o para calcular un dato que falta.</p>`,
    },
    {
      html: `<h3>Área de prismas y pirámides</h3><p>El <b>área</b> de un cuerpo es la superficie de todas sus caras. Se entiende con su <b>desarrollo plano</b> (el cuerpo «desplegado»).</p><ul><li><b>Prisma recto</b>: A<sub>lateral</sub> = perímetro de la base · altura; <mark>A<sub>total</sub> = A<sub>lateral</sub> + 2 · A<sub>base</sub></mark>. Ortoedro de 5 × 3 × 4: A = 2(15 + 20 + 12) = 94 cm².</li><li><b>Pirámide regular</b>: A<sub>lateral</sub> = perímetro de la base · apotema de la pirámide : 2; <mark>A<sub>total</sub> = A<sub>lateral</sub> + A<sub>base</sub></mark>.</li></ul><p>Si no conoces la apotema de la pirámide, la calculas con <b>Pitágoras</b> a partir de la altura y la apotema de la base.</p>`,
      svg: svg("Desarrollo plano de un cubo en forma de cruz: seis cuadrados", `${[[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]].map(([c, r], i) => `<rect x="${50 + c * 40}" y="${20 + r * 40}" width="40" height="40" fill="${i === 2 ? "var(--pen)" : "var(--card)"}" fill-opacity="${i === 2 ? 0.3 : 1}" stroke="var(--pen)" stroke-width="2"/>`).join("")}${t(130, 160, "desarrollo del cubo: 6 caras", { s: 12 })}${t(130, 176, "A = 6 · l²", { c: "var(--pen)", s: 12 })}`),
    },
    {
      html: `<h3>Área del cilindro, el cono y la esfera</h3><ul><li><b>Cilindro</b> de radio r y altura h: su desarrollo son dos círculos y un rectángulo cuyo largo es la longitud de la circunferencia (2πr). <mark>A = 2πrh + 2πr²</mark>.</li><li><b>Cono</b> de radio r y generatriz g (la distancia del vértice al borde de la base): A<sub>lateral</sub> = πrg; <mark>A = πrg + πr²</mark>. Se cumple g² = h² + r².</li><li><b>Esfera</b> de radio r: <mark>A = 4πr²</mark>, el área de cuatro círculos máximos.</li></ul><p>Ejemplo: una lata de r = 3 cm y h = 11 cm tiene A = 2π · 3 · 11 + 2π · 9 = 66π + 18π = 84π ≈ <b>264 cm²</b> de chapa.</p>`,
      svg: svg("Desarrollo plano de un cilindro: un rectángulo de base 2πr y altura h y dos círculos", `<rect x="60" y="54" width="150" height="70" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><circle cx="100" cy="32" r="22" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><circle cx="100" cy="146" r="22" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>
        ${t(150, 94, "2πr · h", { c: "var(--leaf)", s: 13 })}${t(222, 94, "h", { c: "var(--muted)", s: 12, a: "start" })}${t(100, 36, "πr²", { c: "var(--pen)", s: 11 })}${t(100, 150, "πr²", { c: "var(--pen)", s: 11 })}${t(178, 140, "base = 2πr", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>El volumen y sus unidades</h3><p>El <b>volumen</b> es el espacio que ocupa un cuerpo. Se mide en unidades cúbicas: el <b>metro cúbico (m³)</b> es un cubo de 1 m de arista. Cada unidad es <mark>1.000 veces</mark> la siguiente: 1 m³ = 1.000 dm³; 1 dm³ = 1.000 cm³.</p><p>La <b>capacidad</b> (lo que cabe dentro) se mide en litros, y se relaciona así:</p>${tabla(["Volumen", "Capacidad"], [["1 m³", "1.000 L (1 kL)"], ["1 dm³", "1 L"], ["1 cm³", "1 mL"]])}<p>Un brik de 1 L ocupa 1 dm³; una piscina de 50 m³ contiene 50.000 L.</p>`,
    },
    {
      html: `<h3>Volumen de prismas, cilindros, pirámides, conos y esferas</h3>${tabla(["Cuerpo", "Volumen"], [["Prisma y cilindro", "V = A<sub>base</sub> · h (cilindro: πr²h)"], ["Ortoedro / cubo", "V = a · b · c / V = l³"], ["Pirámide y cono", "V = A<sub>base</sub> · h : 3 (cono: πr²h/3)"], ["Esfera", "V = 4/3 · πr³"]])}<p>Una pirámide ocupa exactamente <b>un tercio</b> del prisma con la misma base y altura; y un cono, un tercio del cilindro. Se puede comprobar llenando de arena un cono y vaciándolo tres veces en el cilindro.</p><p>Ejemplo: un cucurucho cónico de r = 3 cm y h = 10 cm: V = π · 9 · 10 : 3 = 30π ≈ <b>94 cm³</b>.</p>`,
      video: { id: "MdU1V7GiOlg", titulo: "Volumen de un cilindro", canal: "Daniel Carreón", vistas: 4397169 },
    },
    {
      html: `<h3>Problemas de áreas y volúmenes</h3><ul><li><b>Pintar una habitación</b> de 4 × 3 m y 2,5 m de alto (paredes y techo, sin suelo ni puertas): 2(4 + 3) · 2,5 + 12 = 47 m².</li><li><b>Llenar un depósito</b> cilíndrico de r = 1 m y h = 2 m: V = π · 1 · 2 ≈ 6,28 m³ = 6.280 L.</li><li><b>Comparar envases</b>: una caja de 10 × 6 × 16 cm contiene 960 cm³ (casi 1 L).</li><li><b>Balón</b> de r = 11 cm: A ≈ 1.520 cm² de cuero y V ≈ 5.575 cm³ de aire.</li></ul><p>Fíjate en qué pide el problema: <b>área</b> si se trata de cubrir, pintar o envolver; <b>volumen</b> si se trata de llenar o de cuánto cabe.</p>`,
    },
  ],
  figura: {
    titulo: "Cuerpos geométricos en un vistazo",
    svg: filas("Resumen: Euler, área del prisma, de la pirámide, del cilindro, del cono y de la esfera, y volúmenes", [["Euler", "C + V = A + 2", "var(--ink)"], ["Prisma", "A = A_lat + 2A_base · V = A_base · h", "var(--pen)"], ["Pirámide", "V = A_base · h : 3", "var(--sun)"], ["Cilindro", "A = 2πrh + 2πr² · V = πr²h", "var(--leaf)"], ["Cono", "A = πrg + πr² · V = πr²h/3", "var(--red)"], ["Esfera", "A = 4πr² · V = 4/3 πr³", "var(--inf)"]], 160),
  },
  video: { id: "n0j1XwaroHs", titulo: "Volumen de prismas", canal: "Daniel Carreón", vistas: 7735623, megusta: 0, busqueda: "áreas y volúmenes de cuerpos geométricos" },
  quiz: mezcla([
    { q: "¿Cuál es un cuerpo de redondeo?", o: ["el cono", "el prisma", "el tetraedro"], a: 0, e: "Tiene superficie curva." },
    { q: "¿Cuántos poliedros regulares hay?", o: ["5", "6", "infinitos"], a: 0, e: "Sólidos platónicos." },
    { q: "Un octaedro tiene caras…", o: ["triangulares", "cuadradas", "pentagonales"], a: 0, e: "8 triángulos." },
    { q: "Un prisma pentagonal tiene… caras", o: ["7", "5", "10"], a: 0, e: "5 laterales + 2 bases." },
    { q: "Si un poliedro tiene 6 caras y 8 vértices, tiene… aristas", o: ["12", "14", "10"], a: 0, e: "6 + 8 = A + 2." },
    { q: "El área de un cubo de arista 3 cm es…", o: ["54 cm²", "27 cm²", "9 cm²"], a: 0, e: "6 · 9." },
    { q: "El volumen de un cubo de arista 3 cm es…", o: ["27 cm³", "54 cm³", "9 cm³"], a: 0, e: "3³." },
    { q: "1 dm³ equivale a…", o: ["1 L", "1 mL", "1.000 L"], a: 0, e: "Un brik." },
    { q: "La pirámide ocupa … del prisma de igual base y altura.", o: ["un tercio", "la mitad", "el doble"], a: 0, e: "V = A·h/3." },
    { q: "El área de la esfera es…", o: ["4πr²", "πr²", "4/3 πr³"], a: 0, e: "Cuatro círculos máximos." },
  ]),
  examen: mezcla([
    { q: "Volumen de un cilindro de r = 2 cm y h = 5 cm:", o: ["20π cm³", "10π cm³", "40π cm³"], a: 0, e: "π · 4 · 5." },
    { q: "Una piscina de 10 × 5 × 2 m contiene…", o: ["100.000 L", "100 L", "10.000 L"], a: 0, e: "100 m³." },
    { q: "Un cono de r = 6 y h = 8 tiene generatriz…", o: ["10", "14", "√28"], a: 0, e: "√(36 + 64)." },
  ]),
  feynman: ["Diferencia entre poliedros y cuerpos de redondeo", "Qué dice la fórmula de Euler", "Cómo ayuda el desarrollo plano a calcular áreas", "Por qué la pirámide es un tercio del prisma", "Relación entre dm³ y litros"],
  mapa: mapa("CUERPOS GEOMÉTRICOS", "var(--eso)", [
    ["Poliedros", "prismas · pirámides · regulares", "var(--pen)"],
    ["Redondeo", "cilindro · cono · esfera", "var(--leaf)"],
    ["Áreas", "desarrollo plano", "var(--sun)"],
    ["Volúmenes", "A_base · h · ÷ 3", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Poliedro", "Cuerpo con todas las caras planas (polígonos)."],
    ["Fórmula de Euler", "C + V = A + 2."],
    ["Poliedros regulares", "Tetraedro, cubo, octaedro, dodecaedro e icosaedro."],
    ["Área del prisma", "Perímetro base · h + 2 · A base."],
    ["Área del cilindro", "2πrh + 2πr²."],
    ["Volumen prisma y cilindro", "A base · h."],
    ["Volumen pirámide y cono", "A base · h : 3."],
    ["Esfera", "A = 4πr²; V = 4/3 πr³."],
  ],
  familias: ["Desmontad una caja de cereales y medid su desarrollo plano para calcular el cartón.", "Calculad cuántos litros caben en un cubo, una maceta o una pecera.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Poliedros y cuerpos de revolución; fórmula de Euler; desarrollos planos; áreas y volúmenes de prismas, pirámides, cilindros, conos y esferas; unidades de volumen y capacidad (RD 217/2022, Matemáticas, sentido de la medida y espacial).",
    ideas: ["Construir los cinco poliedros regulares con cartulina.", "Experimento de arena para comprobar V cono = V cilindro / 3.", "Proyecto de diseño de un envase con la mínima cantidad de material."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): cuerpos geométricos", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula el área total y el volumen de una pirámide cuadrangular regular de base 6 cm y altura 4 cm.", pasos: ["Apotema de la pirámide (Pitágoras): √(4² + 3²) = 5 cm.", "A lateral = 4 · 6 · 5 : 2 = 60 cm²; A base = 36 cm²; A total = 96 cm².", "V = 36 · 4 : 3 = 48 cm³."], resultado: "A = 96 cm²; V = 48 cm³." },
    { enunciado: "Un depósito cilíndrico tiene 1,2 m de diámetro y 1,5 m de altura. ¿Cuántos litros caben?", pasos: ["r = 0,6 m.", "V = π · 0,36 · 1,5 ≈ 1,696 m³.", "1,696 m³ = 1.696 L."], resultado: "Unos 1.696 litros." },
    { enunciado: "Comprueba la fórmula de Euler en un prisma triangular.", pasos: ["Caras: 3 laterales + 2 bases = 5.", "Vértices: 3 + 3 = 6. Aristas: 3 + 3 + 3 = 9.", "5 + 6 = 11 = 9 + 2."], resultado: "Se cumple: 11 = 11." },
  ],
  errores: [
    "Confundir la altura de la pirámide con su apotema.",
    "Olvidar las dos bases en el área total del prisma o del cilindro.",
    "No dividir entre 3 en el volumen de la pirámide o del cono.",
    "Usar el diámetro en lugar del radio en las fórmulas.",
    "Convertir unidades de volumen como si fueran de longitud (× 10 en lugar de × 1.000).",
    "Calcular el área cuando el problema pregunta cuánto cabe.",
  ],
  ejercicios: [
    { q: "Clasifica: lata, dado, balón, tienda de campaña canadiense, cucurucho.", sol: "Cilindro, cubo (poliedro), esfera, prisma triangular, cono." },
    { q: "Un poliedro tiene 12 vértices y 30 aristas. ¿Cuántas caras tiene? ¿Cuál puede ser?", sol: "C = 30 + 2 − 12 = 20: el icosaedro." },
    { q: "Calcula el área total de un ortoedro de 8 × 5 × 3 cm.", sol: "2(40 + 24 + 15) = 158 cm²." },
    { q: "Calcula el área total de un cilindro de r = 4 cm y h = 10 cm.", sol: "80π + 32π = 112π ≈ 351,9 cm²." },
    { q: "Calcula el área total de un cono de r = 5 cm y g = 13 cm, y su altura.", sol: "65π + 25π = 90π ≈ 282,7 cm²; h = 12 cm." },
    { q: "Calcula el área y el volumen de una esfera de r = 3 cm.", sol: "A = 36π ≈ 113,1 cm²; V = 36π ≈ 113,1 cm³." },
    { q: "Calcula el volumen de un prisma hexagonal regular con área de la base 41,6 cm² y altura 10 cm.", sol: "416 cm³." },
    { q: "Calcula el volumen de un cono de r = 3 cm y h = 7 cm.", sol: "21π ≈ 66 cm³." },
    { q: "Expresa en litros: 2,5 m³; 750 cm³; 3 dm³.", sol: "2.500 L; 0,75 L; 3 L." },
    { q: "Un acuario de 60 × 30 × 40 cm se llena hasta 5 cm del borde. ¿Cuántos litros contiene?", sol: "60 · 30 · 35 = 63.000 cm³ = 63 L." },
  ],
};
