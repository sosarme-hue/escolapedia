// Matemáticas A 4º ESO · Semejanza y teorema de Tales: ampliación a nivel de libro de texto.
const tabla = (cab, filas) => `<table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
const vid = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });

module.exports = (T) => {
  T.minutos = 55;
  T.objetivos.push("Calcular alturas y distancias inaccesibles con sombras y espejos", "Relacionar la razón de semejanza con áreas y volúmenes", "Resolver problemas de mapas, planos, fotocopias y maquetas");
  const tras = (t, ...nuevos) => { const i = T.bloques.findIndex((b) => b.html.includes(t)); if (i < 0) throw new Error(`mata: no encuentro «${t}»`); T.bloques.splice(i + 1, 0, ...nuevos); };
  // Copia el bloque antes de ponerle vídeo: los objetos de bloque se comparten con Matemáticas B.
  const conVideo = (t, v) => { const i = T.bloques.findIndex((b) => b.html.includes(t)); T.bloques[i] = { ...T.bloques[i], video: v }; };

  tras("Escalas: mapas y planos",
    { html: `<h3>Trabajar con escalas</h3><p>Hay tres tipos de problemas con escalas, y todos se resuelven con una regla de tres o multiplicando por el denominador:</p>${tabla(["Pregunta", "Ejemplo", "Cálculo"], [["Del mapa a la realidad", "3,4 cm en un mapa 1 : 50.000", "3,4 · 50.000 = 170.000 cm = <b>1,7 km</b>"], ["De la realidad al mapa", "un camino de 6 km en un mapa 1 : 200.000", "600.000 / 200.000 = <b>3 cm</b>"], ["Hallar la escala", "2 km reales miden 4 cm en el mapa", "4 cm : 200.000 cm → <b>1 : 50.000</b>"]])}<p>El truco es poner las dos medidas en la <mark>misma unidad</mark> (normalmente centímetros) antes de dividir. Recuerda: 1 km = 1.000 m = 100.000 cm. Además de la escala numérica, muchos mapas llevan una <b>escala gráfica</b>, una barra que indica cuánto representa cada segmento; tiene la ventaja de que sigue siendo válida aunque amplíes o reduzcas el mapa al imprimirlo.</p>` },
    { html: `<h3>Ampliar y reducir: fotocopias, pantallas y maquetas</h3><p>Una fotocopia al <b>150 %</b> es una ampliación de razón k = 1,5; al <b>50 %</b>, una reducción de razón k = 0,5. Una foto de 10 × 15 cm ampliada al 150 % mide 15 × 22,5 cm. Las <b>maquetas</b> también usan escalas: los trenes de modelismo más habituales son 1 : 87, así que un vagón real de 20 m mide en la maqueta 2.000 / 87 ≈ 23 cm. Los mapas de las aplicaciones del móvil cambian de escala cada vez que haces zoom, y por eso muestran una escala gráfica que se actualiza. Fíjate en que al ampliar <mark>todas las longitudes</mark> se multiplican por el mismo número: si solo estiras el ancho de una foto, la imagen se deforma y ya no es semejante a la original.</p>` },
  );

  tras("Teorema de Tales",
    { html: `<h3>Medir alturas con sombras</h3><p>Cuenta la leyenda que Tales de Mileto midió la altura de la Gran Pirámide de Egipto usando su sombra. La idea es que, a la misma hora, los rayos del Sol llegan <b>paralelos</b>, así que un objeto y su sombra forman un triángulo rectángulo semejante al que forma un palo (o una persona) y su sombra. Por ejemplo, un árbol da una sombra de 12 m y, a la vez, una persona de 1,60 m da una sombra de 2 m. Planteamos la proporción:</p><p style="text-align:center"><mark>h / 12 = 1,60 / 2</mark> → h = 12 · 1,60 / 2 = <b>9,6 m</b></p><p>Para no equivocarte, escribe siempre en el mismo orden las dos alturas arriba y las dos sombras abajo. Este método solo funciona si las sombras se miden a la vez y sobre un suelo horizontal.</p>` },
    { html: `<h3>El método del espejo</h3><p>Si no hay sol, se puede usar un espejo en el suelo. Pon el espejo entre tú y el edificio y aléjate hasta que veas en él la parte más alta. Por la ley de la reflexión, el rayo de luz forma el mismo ángulo al llegar al espejo que al salir, así que aparecen <b>dos triángulos semejantes</b>: el que forman tus ojos, tus pies y el espejo, y el que forman la punta del edificio, su base y el espejo. Si tus ojos están a 1,5 m del suelo, tú estás a 2 m del espejo y el edificio a 8 m, entonces h / 8 = 1,5 / 2 y la altura es <mark>h = 6 m</mark>. Con métodos parecidos, los topógrafos y los ingenieros miden distancias que no se pueden recorrer, como la anchura de un río.</p>` },
  );

  tras("Figuras semejantes",
    { html: `<h3>Perímetros, áreas y volúmenes</h3><p>Si dos figuras son semejantes con razón k, no todo aumenta igual:</p>${tabla(["Magnitud", "Se multiplica por", "Ejemplo con k = 3"], [["Longitudes y perímetros", "k", "el perímetro es 3 veces mayor"], ["Áreas", "k²", "el área es 9 veces mayor"], ["Volúmenes", "k³", "el volumen es 27 veces mayor"]])}<p>Por eso, en un plano a escala 1 : 100, una habitación de 4 cm × 5 cm (20 cm²) mide en la realidad 4 m × 5 m = 20 m², y 20 m² son <mark>200.000 cm²</mark>, es decir, 10.000 veces más (100²). Esto explica cosas curiosas: una pizza de 40 cm de diámetro tiene <b>cuatro veces</b> más superficie que una de 20 cm, no el doble, y por eso a veces compensa comprar la grande.</p>` },
  );

  conVideo("Teorema de Tales", vid("eoSvj4BbC7U", "Teorema de Tales: semejanza de triángulos", "Susi Profe", 1785331));
  conVideo("Escalas: mapas y planos", vid("4wFaT3TBEo4", "Escalas, mapas y planos: semejanza", "Susi Profe", 798144));

  T.ejemplos = [
    { enunciado: "Un edificio da una sombra de 15 m. A la misma hora, un palo de 2 m da una sombra de 2,5 m. ¿Cuánto mide el edificio?", pasos: ["Los rayos son paralelos: los triángulos son semejantes.", "h / 15 = 2 / 2,5.", "h = 15 · 2 / 2,5 = 12."], resultado: "El edificio mide 12 m." },
    { enunciado: "En un mapa 1 : 25.000, dos pueblos están a 8 cm. ¿Qué distancia real los separa?", pasos: ["Multiplica por el denominador: 8 · 25.000 = 200.000 cm.", "Pasa a metros: 200.000 / 100 = 2.000 m.", "Pasa a km: 2.000 / 1.000 = 2 km."], resultado: "2 km." },
    { enunciado: "Un cuadro de 30 × 40 cm se amplía con razón 2. ¿Cuánto cuesta enmarcarlo si el marco vale 5 € por metro, y cuánto pintarlo si la pintura cuesta 1 € por dm²?", pasos: ["Nuevas medidas: 60 × 80 cm. Perímetro: 2 · (60 + 80) = 280 cm = 2,8 m → 2,8 · 5 = 14 €.", "Área: 60 · 80 = 4.800 cm² = 48 dm² → 48 €.", "El perímetro se ha multiplicado por 2 y el área por 4."], resultado: "Marco: 14 €. Pintura: 48 €." },
  ];
  T.errores = [
    "Mezclar unidades en la proporción: sombras en metros y alturas en centímetros.",
    "Colocar la proporción en distinto orden a cada lado (altura / sombra = sombra / altura).",
    "Pensar que si las longitudes se duplican, el área también se duplica: se multiplica por 4.",
    "Olvidar pasar de centímetros a kilómetros al usar la escala de un mapa.",
    "Creer que dos rectángulos cualesquiera son semejantes: sus lados deben ser proporcionales.",
  ];
  T.ejercicios = [
    { q: "¿Son semejantes dos rectángulos de 4 × 6 cm y 6 × 9 cm? ¿Cuál es la razón?", sol: "Sí: 6 / 4 = 9 / 6 = 1,5. k = 1,5." },
    { q: "Un triángulo tiene lados 5, 7 y 9 cm. Otro semejante tiene el lado menor de 15 cm. Halla los otros lados.", sol: "k = 3: 21 cm y 27 cm." },
    { q: "Una farola da una sombra de 4,5 m y una persona de 1,80 m da 1,5 m. ¿Altura de la farola?", sol: "h = 4,5 · 1,8 / 1,5 = 5,4 m." },
    { q: "Con el método del espejo: tus ojos a 1,6 m, tú a 2 m del espejo y el árbol a 10 m. ¿Altura del árbol?", sol: "h = 10 · 1,6 / 2 = 8 m." },
    { q: "En un mapa 1 : 50.000, ¿cuántos km son 7 cm?", sol: "350.000 cm = 3,5 km." },
    { q: "Un río de 12 km, ¿cuánto mide en un mapa 1 : 200.000?", sol: "1.200.000 / 200.000 = 6 cm." },
    { q: "Si 3 cm de un plano son 6 m reales, ¿cuál es la escala?", sol: "3 cm : 600 cm → 1 : 200." },
    { q: "Una foto de 9 × 13 cm se fotocopia al 200 %. ¿Medidas y cuántas veces mayor es su área?", sol: "18 × 26 cm; el área es 4 veces mayor." },
    { q: "Una maqueta 1 : 50 de una casa mide 24 cm de alto. ¿Cuánto mide la casa?", sol: "24 · 50 = 1.200 cm = 12 m." },
    { q: "Un cubo de 2 cm de arista y otro de 6 cm son semejantes. ¿Cuántas veces mayor es el volumen del grande?", sol: "k = 3; k³ = 27 veces." },
  ];
  T.quiz.push(
    { q: "Si la razón de semejanza es 2, el área se multiplica por…", o: ["4", "2", "8"], a: 0, e: "k² = 4." },
    { q: "Una fotocopia al 50 % tiene razón…", o: ["0,5", "50", "2"], a: 0, e: "Es una reducción." },
    { q: "1 km son…", o: ["100.000 cm", "1.000 cm", "10.000 cm"], a: 0, e: "1 km = 1.000 m = 100.000 cm." },
    { q: "Medir alturas con sombras funciona porque los rayos del Sol son…", o: ["paralelos", "perpendiculares", "curvos"], a: 0, e: "Triángulos en posición de Tales." },
    { q: "Si las longitudes se multiplican por 3, el volumen se multiplica por…", o: ["27", "9", "3"], a: 0, e: "k³." },
  );
};
