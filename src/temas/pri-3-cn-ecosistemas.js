// Ciencias de la Naturaleza 3º de Primaria: los ecosistemas, el bosque y la charca. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, arbol, sol, nube, flor, pez, pajaro, hoja, suelo, insecto } = require("./_pri3b");

// Charca con agua, juncos y nenúfar.
const charca = (cx, cy, rx = 90, ry = 26) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="var(--water)" fill-opacity=".45" stroke="var(--pen)" stroke-width="1.5"/>${[-0.8, -0.65, 0.7, 0.85].map((k) => `<path d="M${cx + k * rx} ${cy - 4} q-2 -20 2 -36" stroke="#15803d" stroke-width="2.5" fill="none"/><ellipse cx="${cx + k * rx + 1}" cy="${cy - 34}" rx="2.5" ry="7" fill="${COL.marron}"/>`).join("")}<ellipse cx="${cx + 20}" cy="${cy - 4}" rx="12" ry="4" fill="var(--leaf)"/>`;
// Rana pequeña.
const rana = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="var(--leaf)"><ellipse rx="10" ry="7"/><circle cx="-5" cy="-6" r="3.4"/><circle cx="5" cy="-6" r="3.4"/><circle cx="-5" cy="-7" r="1.4" fill="var(--ink)"/><circle cx="5" cy="-7" r="1.4" fill="var(--ink)"/></g>`;
// Seta.
const seta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="-14" width="8" height="14" fill="#f5e6c8" stroke="var(--ink)" stroke-width="1"/><path d="M-14 -12 q14 -20 28 0z" fill="var(--red)"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los ecosistemas: el bosque y la charca",
  minutos: 45,
  objetivos: ["Saber qué es un ecosistema y cuáles son sus partes", "Conocer cómo es un bosque y qué seres vivos lo habitan", "Conocer cómo es una charca y qué seres vivos la habitan", "Entender las cadenas alimentarias: productores, consumidores y descomponedores", "Proponer acciones para cuidar los ecosistemas"],
  claves: ["ecosistema", "medio físico", "seres vivos", "hábitat", "bosque", "charca", "cadena alimentaria", "productor", "consumidor", "descomponedor", "contaminación", "espacio protegido"],
  pregunta: {
    texto: "En una charca vivían muchas ranas que comían mosquitos. Un verano alguien atrapó casi todas las ranas para llevárselas a casa. ¿Qué crees que pasó al verano siguiente cerca de la charca?",
    respuesta: "Que había <b>muchísimos más mosquitos</b>, porque ya no había ranas que se los comieran. Y las garzas y las culebras, que comen ranas, se quedaron sin comida y tuvieron que irse. En un <mark>ecosistema</mark> todos los seres vivos están <b>relacionados</b>: si cambia uno, cambian todos los demás.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un ecosistema?</h3><p>Un <mark>ecosistema</mark> es un lugar de la naturaleza formado por <b>dos partes</b> que están siempre relacionadas:</p><p>• El <mark>medio físico</mark>: es el lugar con todo lo que no tiene vida. El <b>suelo</b>, las <b>rocas</b>, el <b>agua</b>, el <b>aire</b>, la <b>luz</b> y la <b>temperatura</b>.<br>• Los <mark>seres vivos</mark>: las plantas, los animales, los hongos y los seres diminutos que viven en ese lugar.</p><p>Los seres vivos necesitan el medio físico: las plantas toman agua del suelo y luz del sol, y los animales respiran el aire y beben el agua. Y los seres vivos también <b>se relacionan entre sí</b>: unos se comen a otros, unos dan cobijo a otros y algunos se ayudan, como las abejas y las flores.</p><p>Hay ecosistemas <b>grandes</b>, como un bosque, un desierto o el océano, y <b>pequeños</b>, como una charca, un tronco caído o incluso una maceta.</p><p>Hay ecosistemas <b>terrestres</b>, como el bosque, el prado o la montaña, y <b>acuáticos</b>, como la charca, el río o el mar.</p>`,
      svg: svg("Ecosistema: medio físico (suelo, agua, luz, aire) y seres vivos", `${tit("Un ecosistema")}${fichas([["Medio físico", "suelo, agua, aire, luz", COL.azul], ["Seres vivos", "plantas, animales, hongos", COL.verde]], 2, 36, 64)}${sol(40, 140, 10)}${nube(84, 140, 0.7)}${arbol(160, 168, 0.8)}${pajaro(196, 132)}${rana(226, 160, 1)}${fl(116, 154, 146, 154, COL.gris, 2)}${fl(146, 146, 116, 146, COL.gris, 2)}`),
    },
    {
      html: `<h3>El hábitat y la adaptación</h3><p>El lugar concreto donde vive un ser vivo dentro del ecosistema se llama su <mark>hábitat</mark>. El hábitat de la ardilla son las ramas de los árboles; el de la lombriz, el suelo; y el del pez, el agua.</p><p>Cada ser vivo está <b>adaptado</b> a su hábitat. Esto quiere decir que tiene un cuerpo y unas costumbres que le ayudan a vivir allí:</p><p>• Los peces tienen aletas para nadar y branquias para respirar en el agua.<br>• El oso tiene un pelo muy grueso para soportar el frío del invierno, y duerme durante los meses más fríos.<br>• El camello guarda grasa en su joroba y aguanta muchos días sin beber en el desierto.<br>• La ardilla tiene uñas afiladas para trepar y una cola larga para equilibrarse.<br>• Los cactus tienen pinchos en lugar de hojas para no perder agua.</p><p>Si cambiamos a un animal de su hábitat, por ejemplo, un pez fuera del agua, no puede sobrevivir.</p>`,
      svg: svg("Cada animal adaptado a su hábitat: pez al agua, ardilla al árbol, lombriz al suelo", `${tit("Cada uno en su hábitat")}${suelo(118)}<rect x="10" y="118" width="240" height="50" fill="${COL.marron}" fill-opacity=".12"/>${arbol(70, 118, 1.3)}<circle cx="84" cy="74" r="6" fill="${COL.naranja}"/><path d="M88 76 q10 -4 6 -16" stroke="${COL.naranja}" stroke-width="5" fill="none"/><path d="M110 150 q8 -6 16 0 q8 6 16 0" stroke="#d4848a" stroke-width="4" fill="none"/><ellipse cx="206" cy="112" rx="40" ry="12" fill="var(--water)" fill-opacity=".5"/>${pez(206, 112)}${et(150, 70, "ardilla: árbol", 90, { size: 10.5 })}${et(126, 164, "lombriz: suelo", 90, { size: 10.5 })}${et(206, 90, "pez: agua", 80, { size: 10.5 })}`),
    },
    {
      html: `<h3>El bosque</h3><p>Un <mark>bosque</mark> es un ecosistema terrestre donde hay <b>muchos árboles</b> juntos. Los árboles dan <b>sombra</b>, por eso dentro del bosque hay poca luz, el suelo está húmedo y la temperatura es más fresca que fuera.</p><p>En el bosque hay varios <b>pisos</b>, como en un edificio:</p><p>• Arriba, las <b>copas de los árboles</b>: robles, hayas, pinos o encinas.<br>• En medio, los <b>arbustos</b>, como el acebo o el brezo.<br>• Abajo, las <b>hierbas</b>, los helechos y los musgos.<br>• Y en el <b>suelo</b>, una capa de hojas secas, ramas caídas y tierra húmeda donde viven las setas, las lombrices y los insectos.</p><p>En España hay bosques muy distintos: los <b>hayedos</b> y <b>robledales</b> del norte, donde llueve mucho; los <b>pinares</b> de las montañas; y los <b>encinares</b> y <b>alcornocales</b> del centro y del sur, donde hace más calor y llueve menos. En otoño, muchos árboles del bosque cambian de color y pierden sus hojas.</p>`,
      svg: svg("Pisos del bosque: copas de árboles, arbustos, hierbas y suelo con hojas y setas", `${tit("Los pisos del bosque")}${suelo(150)}${arbol(54, 150, 1.7)}${arbol(110, 150, 1.4)}<g transform="translate(160 150)"><circle cx="-8" cy="-14" r="10" fill="var(--leaf)"/><circle cx="8" cy="-16" r="11" fill="var(--leaf)"/></g>${flor(196, 150)}${seta(218, 150, 0.9)}<rect x="10" y="150" width="240" height="16" fill="${COL.marron}" fill-opacity=".25"/>${et(230, 56, "copas", 50, { size: 10.5, color: "#15803d" })}${et(230, 82, "arbustos", 50, { size: 10.5, color: COL.verde })}${et(230, 108, "hierbas", 50, { size: 10.5, color: COL.rojo })}${et(130, 162, "suelo: hojas, setas, lombrices", 200, { size: 10, color: COL.marron })}`),
      video: vid("c_WZ0c0f-dU"),
    },
    {
      html: `<h3>Los animales del bosque</h3><p>El bosque es el hogar de muchísimos animales. Cada uno vive en un «piso» diferente:</p><p>• En las <b>copas</b> de los árboles viven las <b>ardillas</b>, que comen piñas y bellotas; los <b>pájaros</b>, como el petirrojo o el pico picapinos, que hace agujeros en los troncos; y las <b>lechuzas</b> y los <b>búhos</b>, que cazan por la noche.<br>• En el <b>suelo</b> y entre los arbustos viven los <b>jabalíes</b>, los <b>ciervos</b>, los <b>zorros</b>, los <b>conejos</b>, los <b>erizos</b> y, en algunos bosques de montaña, el <b>lobo</b> y el <b>oso pardo</b>.<br>• Bajo las hojas secas y en la tierra viven las <b>lombrices</b>, los <b>escarabajos</b>, las <b>hormigas</b>, los <b>caracoles</b> y las <b>babosas</b>.</p><p>Muchos animales del bosque se esconden durante el día y salen de noche. Por eso, si paseas en silencio por un bosque, a veces solo encontrarás sus <b>huellas</b>, sus excrementos o restos de comida, como piñas mordisqueadas por las ardillas.</p>`,
      svg: svg("Animales del bosque por pisos: copas, suelo y bajo las hojas", `${tit("Animales del bosque")}${filas([["copas", "ardilla, pájaros, búho", "#15803d"], ["suelo", "jabalí, ciervo, zorro, erizo", COL.marron], ["bajo las hojas", "lombriz, escarabajo, hormiga", COL.naranja]], 56, 38, { x: 20, wa: 100, wb: 210, dos: true })}${insecto(220, 160, 0.8)}`),
    },
    {
      html: `<h3>La charca</h3><p>Una <mark>charca</mark> es un ecosistema acuático pequeño, con <b>agua dulce</b> y <b>poco profunda</b>, que casi no se mueve. Puede formarse con el agua de la lluvia o de un arroyo. Como es poco profunda, la luz del sol llega hasta el fondo y el agua se calienta.</p><p>En la charca hay muchos tipos de seres vivos:</p><p>• <b>Plantas</b>: en la orilla crecen los <b>juncos</b> y las <b>espadañas</b>. En la superficie flotan los <b>nenúfares</b> y las lentejas de agua. Y dentro del agua viven las <b>algas</b>.<br>• <b>Animales</b>: ranas, sapos, tritones, renacuajos, peces pequeños, caracoles de agua, larvas de mosquito, zapateros que caminan sobre el agua, libélulas y, a veces, culebras de agua. También se acercan garzas y patos a buscar comida.</p><p>El agua de la charca está llena de seres diminutos, que solo se ven con microscopio. Son el alimento de muchos animalitos.</p><p>En verano, si hace mucho calor, algunas charcas se secan. Por eso muchos de sus animales tienen trucos: los sapos se entierran en el barro hasta que vuelve a llover.</p>`,
      svg: svg("Charca con juncos, nenúfares, rana, pez y libélula", `${tit("La charca")}${charca(130, 128, 104, 30)}${rana(108, 124, 1.2)}${pez(160, 140, "var(--pen)")}<g transform="translate(192 70)"><path d="M-14 0 H14" stroke="${COL.azul}" stroke-width="3"/><ellipse cx="-4" cy="-4" rx="8" ry="3" fill="${COL.agua}" fill-opacity=".6"/><ellipse cx="4" cy="4" rx="8" ry="3" fill="${COL.agua}" fill-opacity=".6"/></g>${et(192, 54, "libélula", 70, { size: 10.5, color: COL.azul })}${et(40, 76, "juncos", 60, { size: 10.5, color: "#15803d" })}${et(130, 172, "agua dulce y poco profunda", 200, { size: 10.5 })}`),
      video: vid("v_HWhCi6_N8"),
    },
    {
      html: `<h3>Las cadenas alimentarias</h3><p>En un ecosistema, unos seres vivos sirven de alimento a otros. Si lo dibujamos con flechas, obtenemos una <mark>cadena alimentaria</mark>. Las flechas van desde el que <b>es comido</b> hasta el que <b>come</b>. En ella hay tres tipos de seres vivos:</p><p>• Los <mark>productores</mark>: son las <b>plantas</b> y las algas. Fabrican su propio alimento con la luz del sol. Siempre están al principio de la cadena.<br>• Los <mark>consumidores</mark>: son los <b>animales</b>. Se alimentan de otros seres vivos. Los <b>herbívoros</b> comen plantas, como el conejo; los <b>carnívoros</b> comen otros animales, como el zorro.<br>• Los <mark>descomponedores</mark>: son los <b>hongos</b>, las <b>bacterias</b> y algunos animales como las lombrices. Se alimentan de restos de seres vivos muertos, hojas caídas y excrementos, y los convierten en <b>abono</b> para el suelo. Así las plantas vuelven a tener alimento.</p><p>Una cadena del bosque: bellota → ratón → lechuza.<br>Una cadena de la charca: algas → renacuajo → garza.</p>`,
      svg: svg("Cadena alimentaria: hierba, conejo, zorro; descomponedores", `${tit("Cadena alimentaria")}${flujo([["hierba", COL.verde], ["conejo", COL.marron], ["zorro", COL.naranja]], 48, 34)}${et(42, 98, "productor", 76, { size: 10.5, color: COL.verde })}${et(130, 98, "consumidor", 76, { size: 10.5, color: COL.marron })}${et(218, 98, "consumidor", 76, { size: 10.5, color: COL.naranja })}${cj(50, 122, 160, 30, "descomponedores: hongos", COL.morado)}${fl(130, 158, 130, 170, COL.morado, 2)}${tx(130, 176, "abono para el suelo", 180)}`),
    },
    {
      html: `<h3>Todos dependemos de todos</h3><p>En un ecosistema, los seres vivos forman un <b>equilibrio</b>, como una balanza. Si desaparece uno de ellos, los demás lo notan.</p><p>Por ejemplo, en el bosque, si desaparecieran los zorros, habría tantísimos conejos que se comerían toda la hierba, y después ellos mismos se quedarían sin comida. Y si se secaran las plantas, ni los conejos ni los zorros tendrían qué comer.</p><p>Los seres vivos también se relacionan de otras maneras:</p><p>• Se <b>ayudan</b>: las abejas toman el néctar de las flores y, a cambio, las polinizan. Los pájaros comen frutos y siembran sus semillas lejos.<br>• Se dan <b>cobijo</b>: los árboles son el hogar de pájaros, ardillas e insectos.<br>• <b>Compiten</b>: los árboles compiten por la luz, y varios animales pueden competir por el mismo alimento o el mismo territorio.<br>• Viven <b>juntos</b> en grupo para protegerse, como las manadas de ciervos o las colonias de hormigas.</p><p>Por eso es tan importante no romper el equilibrio de los ecosistemas.</p>`,
      svg: svg("Relaciones entre seres vivos: ayuda, cobijo, competencia y vida en grupo", `${tit("Relaciones en el ecosistema")}${fichas([["Se ayudan", "abeja y flor", COL.sol], ["Cobijo", "árbol y pájaro", COL.verde], ["Compiten", "por luz o comida", COL.rojo], ["En grupo", "manada, hormiguero", COL.azul]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Peligros para los ecosistemas</h3><p>Las personas a veces dañamos los ecosistemas. Estos son los principales peligros:</p><p>• Los <b>incendios forestales</b>: queman en pocas horas bosques que han tardado cientos de años en crecer. Muchos los provocan descuidos, como una colilla, una barbacoa o una hoguera.<br>• La <b>contaminación</b>: la basura, los plásticos y los productos químicos que se tiran al agua o al suelo envenenan a los seres vivos. Una charca contaminada se queda sin ranas.<br>• La <b>tala</b> de árboles sin control y la construcción de carreteras y edificios, que destruyen el hábitat de muchos animales.<br>• Secar las charcas y los ríos para usar el agua.<br>• Soltar <b>especies invasoras</b>: animales o plantas que no son de allí, como las tortugas de Florida que algunas personas sueltan en los ríos. Se comen a los animales de aquí o les quitan el sitio.<br>• La caza y la pesca sin control.</p><p>Cuando un ecosistema se daña, pueden pasar muchos años hasta que se recupera.</p>`,
      svg: svg("Peligros: incendios, basura, tala y especies invasoras", `${tit("Peligros")}${fichas([["Incendios", "queman el bosque", COL.rojo], ["Basura", "contamina el agua", COL.gris], ["Tala", "destruye hábitats", COL.marron], ["Invasoras", "no sueltes mascotas", COL.morado]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Cuidamos los ecosistemas</h3><p>Todos podemos ayudar a cuidar los bosques, las charcas y los demás ecosistemas:</p><p>• Cuando vayas al campo, <b>llévate tu basura</b> de vuelta a casa.<br>• <b>Nunca hagas fuego</b> en el monte y avisa al 112 si ves humo.<br>• No arranques plantas ni flores y no rompas ramas.<br>• No molestes a los animales ni cojas huevos de los nidos o renacuajos de las charcas.<br>• <b>No sueltes mascotas</b> en la naturaleza.<br>• Camina por los senderos marcados.<br>• Ahorra agua y papel, y recicla.</p><p>Para proteger los ecosistemas más valiosos se crean <mark>espacios protegidos</mark>, como los <b>parques nacionales</b> y los <b>parques naturales</b>. En ellos hay normas especiales y guardas que vigilan. En España hay parques nacionales tan famosos como Doñana, Picos de Europa, el Teide u Ordesa.</p><p><b>Actividad:</b> visita un parque cercano o un jardín y dibuja un pequeño ecosistema. Escribe qué parte es el medio físico y qué seres vivos encuentras. ¿Puedes formar una cadena alimentaria?</p>`,
      svg: svg("Normas para cuidar los ecosistemas y parques nacionales", `${tit("¡Los cuidamos!")}${filas([["basura", "llévatela a casa", COL.gris], ["fuego", "nunca en el monte", COL.rojo], ["animales", "no los molestes", COL.marron], ["mascotas", "no las sueltes", COL.morado], ["parques", "Doñana, Teide, Ordesa", COL.verde]], 46, 26, { x: 20, wa: 70, wb: 150 })}`),
    },
  ],
  figura: {
    titulo: "Los ecosistemas en ocho ideas",
    svg: rejilla([
      ["Ecosistema", "medio + seres vivos", COL.azul],
      ["Hábitat", "donde vive cada uno", COL.marron],
      ["Bosque", "árboles en pisos", "#15803d"],
      ["Charca", "agua dulce y quieta", COL.agua],
      ["Productores", "plantas y algas", COL.verde],
      ["Consumidores", "animales", COL.naranja],
      ["Descomponedores", "hongos y bacterias", COL.morado],
      ["Cuidarlos", "sin fuego ni basura", COL.rojo],
    ], 4, 86, "Resumen de los ecosistemas"),
  },
  video: vgen("bgQQdeL22mI", "el ecosistema para niños"),
  ejemplos: [
    { enunciado: "En una charca hay: agua, ranas, piedras, juncos, luz y mosquitos. Separa el medio físico de los seres vivos.",
      pasos: ["El agua, las piedras y la luz no tienen vida: medio físico.", "Las ranas, los juncos y los mosquitos son seres vivos."],
      resultado: "Medio físico: agua, piedras y luz. Seres vivos: ranas, juncos y mosquitos." },
    { enunciado: "Ordena esta cadena alimentaria: lechuza, bellota, ratón.",
      pasos: ["El productor es la planta: la bellota (de la encina).", "El ratón come bellotas.", "La lechuza come ratones."],
      resultado: "Bellota → ratón → lechuza." },
    { enunciado: "¿Qué pasaría en el bosque si desaparecieran los hongos y las bacterias?",
      pasos: ["Son los descomponedores.", "Las hojas y los restos se acumularían sin deshacerse.", "El suelo no recibiría abono y las plantas crecerían peor."],
      resultado: "Se acumularían los restos y el suelo perdería abono." },
  ],
  errores: [
    "Pensar que un ecosistema son solo los animales: también el medio físico.",
    "Dibujar las flechas de la cadena al revés: van del que es comido al que come.",
    "Creer que las setas son productores: son descomponedores.",
    "Pensar que soltar una mascota en un río es bueno para ella y para el río.",
  ],
  ejercicios: [
    { q: "¿Qué es un ecosistema?", sol: "Un lugar de la naturaleza formado por el medio físico y los seres vivos que viven en él, relacionados entre sí." },
    { q: "Escribe tres elementos del medio físico.", sol: "Por ejemplo, el suelo, el agua y la luz (también el aire, las rocas, la temperatura)." },
    { q: "¿Qué es el hábitat? Pon un ejemplo.", sol: "El lugar donde vive un ser vivo. Por ejemplo, el hábitat de la ardilla son los árboles." },
    { q: "¿Por qué en el bosque hay poca luz y el suelo está húmedo?", sol: "Porque las copas de los árboles dan sombra." },
    { q: "Escribe tres animales del bosque y tres de la charca.", sol: "Bosque: ardilla, jabalí y zorro. Charca: rana, tritón y libélula." },
    { q: "¿Cómo es el agua de una charca?", sol: "Dulce, poco profunda y casi sin movimiento." },
    { q: "Forma una cadena alimentaria con: garza, algas, renacuajo.", sol: "Algas → renacuajo → garza." },
    { q: "¿Qué hacen los descomponedores?", sol: "Se alimentan de restos de seres vivos y los convierten en abono para el suelo." },
    { q: "Escribe dos peligros para los ecosistemas.", sol: "Por ejemplo, los incendios y la contaminación (también la tala y las especies invasoras)." },
    { q: "Escribe tres normas para cuidar el bosque.", sol: "No hacer fuego, llevarse la basura y no molestar a los animales (también no arrancar plantas)." },
  ],
  quiz: [
    { q: "Un ecosistema está formado por…", o: ["medio físico y seres vivos", "solo animales", "solo plantas"], a: 0, e: "Medio físico y seres vivos." },
    { q: "El agua y las rocas forman parte del…", o: ["medio físico", "grupo de los animales", "reino de los hongos"], a: 0, e: "Del medio físico." },
    { q: "El lugar donde vive un ser vivo es su…", o: ["hábitat", "cadena", "abono"], a: 0, e: "Su hábitat." },
    { q: "La charca es un ecosistema…", o: ["acuático", "de desierto", "de alta montaña siempre"], a: 0, e: "Acuático, de agua dulce." },
    { q: "Las plantas en la cadena alimentaria son…", o: ["productores", "consumidores", "descomponedores"], a: 0, e: "Productores." },
    { q: "Un conejo es un consumidor…", o: ["herbívoro", "carnívoro", "productor"], a: 0, e: "Herbívoro." },
    { q: "Las setas son…", o: ["descomponedores", "productores", "carnívoros"], a: 0, e: "Descomponedores." },
    { q: "En la cadena, la flecha va…", o: ["del que es comido al que come", "al revés", "hacia arriba siempre"], a: 0, e: "Del que es comido al que come." },
    { q: "Un animal típico de la charca es la…", o: ["rana", "jirafa", "ardilla"], a: 0, e: "La rana." },
    { q: "Si ves humo en el monte debes llamar al…", o: ["112", "000", "123"], a: 0, e: "Al 112." },
  ],
  examen: [
    { q: "El nenúfar es una planta que…", o: ["flota en el agua", "vive en el desierto", "trepa por los árboles"], a: 0, e: "Flota en la charca." },
    { q: "Los encinares están sobre todo en…", o: ["el centro y el sur de España", "el fondo del mar", "el Polo Norte"], a: 0, e: "En el centro y el sur." },
    { q: "Una especie invasora es…", o: ["un ser vivo traído de otro lugar que causa daños", "un animal protegido", "una planta del bosque"], a: 0, e: "Un ser vivo de fuera que causa daños." },
    { q: "Doñana y el Teide son…", o: ["parques nacionales", "ríos", "ciudades"], a: 0, e: "Parques nacionales." },
  ],
  feynman: ["Qué es un ecosistema y sus dos partes", "Cómo es el bosque y cómo es la charca", "Qué es una cadena alimentaria"],
  mapa: mapa("ECOSISTEMAS", "var(--pri)", [
    ["Partes", "medio físico · seres vivos", COL.azul],
    ["Bosque y charca", "árboles · agua dulce", "#15803d"],
    ["Cadenas", "productor → consumidor", COL.naranja],
    ["Cuidado", "sin fuego · sin basura", COL.rojo],
  ], 250),
  tarjetas: [
    ["Ecosistema", "Medio físico + seres vivos relacionados."],
    ["Medio físico", "Suelo, agua, aire, luz y temperatura."],
    ["Hábitat", "Lugar donde vive un ser vivo."],
    ["Bosque", "Ecosistema con muchos árboles."],
    ["Charca", "Agua dulce, poco profunda y quieta."],
    ["Productor", "Ser vivo que fabrica su alimento: plantas."],
    ["Consumidor", "Animal que se alimenta de otros seres vivos."],
    ["Descomponedor", "Hongos y bacterias que hacen abono."],
  ],
  familias: ["Visitad un bosque o un parque y buscad huellas, piñas mordidas o nidos.", "Observad un charco o un estanque y apuntad qué seres vivos veis.", "Inventad juntos cadenas alimentarias con animales de vuestra zona.", "Buscad en el mapa el parque natural más cercano a vuestra casa."],
  profesores: PROF("Ciencias de la Naturaleza: el ecosistema, medio físico y seres vivos; hábitat y adaptaciones; el bosque y la charca; cadenas alimentarias: productores, consumidores y descomponedores; relaciones entre seres vivos; impacto humano y protección", ["Construcción de un terrario o un acuario de charca en el aula.", "Juego de la red alimentaria con un ovillo de lana.", "Salida a un espacio natural cercano con cuaderno de campo."]),
  fuentes: [RD, wiki("Ecosistema", "Ecosistema"), wiki("Cadena trófica", "Cadena trófica"), wiki("Charca", "Charca")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Explicar el camuflaje como adaptación", "Conocer el ecosistema marino y la posidonia", "Comparar ecosistemas extremos del mundo", "Observar un ecosistema cercano"],
  lectura: { titulo: "Un metro cuadrado de selva", html: `<p>La maestra de Nora llegó a clase con un ovillo de cuerda y cuatro palitos.</p><p>—Hoy vamos a explorar una selva —anunció.</p><p>Todos se miraron extrañados. ¿Una selva en el colegio? Salieron al patio, a un rincón con hierba junto al muro, y la maestra clavó los palitos formando un cuadrado de un metro de lado, rodeado con la cuerda.</p><p>—Esta es vuestra selva. Mirad bien lo que vive dentro.</p><p>Al principio, Nora solo vio hierba. Pero se tumbó, acercó la lupa y empezó a descubrir cosas: una hormiga que arrastraba una miga, una mariquita roja subiendo por un tallo, un caracol pequeñito escondido bajo una hoja, un trébol con florecitas blancas…</p><p>—¡Aquí hay una araña tejiendo! —gritó Marcos.</p><p>Al final de la hora, el grupo había apuntado más de veinte seres vivos distintos en un solo metro cuadrado. Había plantas que fabricaban su alimento, hormigas que buscaban comida, una araña que cazaba moscas y hojas secas que se estaban pudriendo para devolver nutrientes a la tierra.</p><p>—Esto es un ecosistema —dijo la maestra—. Pequeño, pero completo.</p><p>Nora no volvió a mirar el rincón del patio de la misma manera.</p>` },
  tras: {
    "El hábitat y la adaptación": [
      ["El camuflaje", `<p>Una de las adaptaciones más asombrosas es el <mark>camuflaje</mark>: tener colores o formas que se confunden con el entorno para no ser vistos.</p><ul><li>El <b>insecto palo</b> parece una ramita y el <b>insecto hoja</b>, una hoja verde.</li><li>La <b>perdiz nival</b> es marrón en verano y se vuelve blanca en invierno, cuando cae la nieve.</li><li>El <b>camaleón</b> y el <b>pulpo</b> pueden cambiar de color en pocos segundos.</li><li>El <b>lenguado</b> se queda plano sobre la arena del fondo del mar y casi no se ve.</li></ul><p>El camuflaje sirve a los animales que se esconden de sus <b>depredadores</b>, pero también a los cazadores, como el tigre, cuyas rayas se confunden con las hierbas altas.</p><p>Otros animales hacen lo contrario: tienen colores muy llamativos para avisar de que son peligrosos o saben mal, como la <b>salamandra</b> negra y amarilla o la avispa.</p>`,
        H6.dos("Colores", ["ESCONDERSE", ["insecto palo", "perdiz nival", "lenguado"], cVE], ["AVISAR", ["salamandra", "avispa", "mariquita"], cRO]), ["F4kYKSo9fTU", "Encuentra a los Maestros del Camuflaje: ¡Desafío de 5 Animales Ocultos! 👀 | Earth Rangers", "Earth Rangers", 1762662]],
    ],
    "La charca": [
      ["El ecosistema marino", `<p>El <mark>mar</mark> es el ecosistema más grande del planeta. Cubre casi tres cuartas partes de la Tierra.</p><ul><li>Cerca de la superficie, donde llega la luz, viven las <b>algas</b> y el <b>plancton</b>, unos seres diminutos que son el alimento de muchos animales.</li><li>En las rocas de la costa viven mejillones, lapas, cangrejos y estrellas de mar.</li><li>En mar abierto nadan peces, delfines y tortugas.</li><li>En las profundidades, donde todo está oscuro, viven peces muy raros, algunos con luces propias.</li></ul><p>En el mar Mediterráneo hay unas praderas submarinas muy importantes: la <b>posidonia</b>. Es una planta con flores, no un alga, que da oxígeno, refugio a muchos peces y protege las playas de las olas.</p><p>En los mares cálidos se forman los <b>arrecifes de coral</b>, llenos de colores y de vida. Hoy están en peligro por el calentamiento del agua y la contaminación.</p>`,
        L6.filas("Mar", [["superficie", "algas, plancton", cAZ], ["costa", "mejillones", cNA], ["mar abierto", "peces, delfines", cVE], ["posidonia", "praderas", cMO]]), ["VJBdY0d1YRQ", "¿Qué son los ARRECIFES de CORAL? 🌿🐠 (Tipos, Cómo se forman e Importancia)", "EcologíaVerde", 176252]],
    ],
  },
  final: [
    ["Ecosistemas extremos: el polo y la selva", `<p>En el mundo hay ecosistemas muy diferentes al bosque y la charca.</p><p><b>Los polos</b> son lugares helados, con mucho frío casi todo el año:</p><ul><li>En el <b>Ártico</b>, al norte, vive el oso polar, con una gruesa capa de grasa y pelo.</li><li>En la <b>Antártida</b>, al sur, viven los pingüinos, que se juntan en grupo para darse calor.</li><li>Casi no hay plantas, y la mayor parte del alimento viene del mar.</li></ul><p><b>La selva tropical</b> es todo lo contrario: hace calor y llueve casi todos los días.</p><ul><li>Es el ecosistema con <b>más tipos de seres vivos</b> del planeta.</li><li>Los árboles son tan altos que forman un techo verde y abajo llega poca luz.</li><li>Viven monos, loros, ranas de colores, serpientes y millones de insectos.</li></ul><p>Las selvas, como la del <b>Amazonas</b>, están en peligro porque se talan para conseguir madera y campos de cultivo.</p>`,
      H6.dos("Extremos", ["POLO", ["mucho frío", "oso, pingüino", "pocas plantas"], cAZ], ["SELVA", ["calor y lluvia", "monos, loros", "muchas plantas"], cVE])],
    ["Observamos un ecosistema cercano", `<p>No hace falta viajar lejos para estudiar un <mark>ecosistema</mark>: el patio, un parque o un jardín también lo son.</p><p><b>Cómo hacer una observación</b>:</p><ul><li><b>1.</b> Marca un cuadrado de un metro de lado con cuerda y palitos.</li><li><b>2.</b> Con una lupa, busca seres vivos: plantas, insectos, arañas, caracoles, lombrices…</li><li><b>3.</b> Apunta en una tabla cada ser vivo, cuántos hay y qué está haciendo.</li><li><b>4.</b> Busca también los elementos no vivos: tierra, piedras, agua, luz o sombra.</li><li><b>5.</b> Intenta formar una cadena alimentaria con lo que has encontrado.</li></ul><p><b>Normas del buen explorador</b>: mira sin hacer daño, devuelve cada piedra a su sitio y no arranques plantas.</p><p>Si repites la observación en otra estación del año, verás cómo cambia el ecosistema: en primavera hay flores e insectos; en invierno, muchos animales se esconden.</p>`,
      H6.flujo("Observar", ["marca|1 metro", "busca|con lupa", "anota|tabla", "relaciona|cadena"], cVE)],
  ],
  ejemplos: [
    ["¿Por qué la perdiz nival cambia de color?", ["En invierno el suelo se cubre de nieve.", "Si es blanca, sus enemigos no la ven."], "Para camuflarse según la estación."],
    ["Forma una cadena con lo observado: hierba, saltamontes, araña.", ["La hierba fabrica su alimento.", "El saltamontes come hierba y la araña caza al saltamontes."], "Hierba → saltamontes → araña."],
  ],
  errores: ["Pensar que la posidonia es un alga: es una planta con flores.", "Creer que en el patio no hay ningún ecosistema."],
  ejercicios: [
    ["b", "¿Qué es el camuflaje?", "Confundirse con el entorno para no ser visto."],
    ["b", "Di un animal que cambie de color.", "Camaleón o pulpo."],
    ["b", "¿Qué planta forma praderas en el Mediterráneo?", "La posidonia."],
    ["b", "¿Qué animal vive en el Ártico?", "El oso polar."],
    ["b", "¿Qué necesitas para observar un ecosistema de cerca?", "Una lupa."],
    ["m", "¿Para qué tiene la salamandra colores llamativos?", "Para avisar de que es peligrosa."],
    ["m", "¿Qué es el plancton?", "Seres diminutos que alimentan a muchos animales marinos."],
    ["m", "Compara el clima del polo y de la selva.", "Polo: frío; selva: calor y lluvia."],
    ["m", "¿Por qué está en peligro la selva del Amazonas?", "Por la tala de árboles."],
    ["m", "Di dos normas del buen explorador.", "No hacer daño y devolver las piedras a su sitio."],
    ["a", "Haz la observación de un metro cuadrado y anota lo que encuentres.", "Respuesta abierta."],
    ["a", "Dibuja un animal camuflado en su hábitat.", "Respuesta abierta."],
    ["a", "Investiga un animal de las profundidades del mar.", "Respuesta abierta."],
    ["a", "En la lectura, ¿cuántos seres vivos encontró el grupo?", "Más de veinte."],
  ],
  quiz: [
    ["El insecto palo se parece a…", ["una ramita", "una piedra", "una flor"], "Camuflaje."],
    ["La posidonia es…", ["una planta con flores", "un alga", "un pez"], "Mar."],
    ["Los pingüinos viven en…", ["la Antártida", "el Ártico", "la selva"], "Polos."],
    ["El ecosistema con más tipos de seres vivos es…", ["la selva tropical", "el desierto", "el polo"], "Selva."],
    ["Para observar un ecosistema marcamos un cuadrado de…", ["un metro de lado", "un kilómetro", "un centímetro"], "Observar."],
  ],
  examen: [
    ["En la lectura, ¿qué tejía la araña?", ["su tela", "una hoja", "un nido"], "Lectura."],
    ["Los arrecifes de coral están en peligro por…", ["el calentamiento del agua", "el frío", "los delfines"], "Coral."],
  ],
  tarjetas: [
    ["Camuflaje", "Esconderse (insecto palo) o avisar (salamandra)."],
    ["Mar", "Plancton, costa, mar abierto, posidonia y corales."],
    ["Polo y selva", "Frío y pocas plantas; calor, lluvia y muchísima vida."],
    ["Observar", "Un metro cuadrado, lupa, tabla y cadena alimentaria."],
  ],
  glosario: [
    ["Camuflaje", "Colores o formas que confunden con el entorno."],
    ["Depredador", "Animal que caza a otros."],
    ["Presa", "Animal que es cazado."],
    ["Plancton", "Seres diminutos que flotan en el agua."],
    ["Posidonia", "Planta marina del Mediterráneo."],
    ["Arrecife de coral", "Estructura marina formada por corales."],
    ["Ártico", "Zona helada del norte."],
    ["Antártida", "Continente helado del sur."],
    ["Selva tropical", "Ecosistema cálido y lluvioso."],
    ["Tala", "Corte de árboles."],
    ["Lupa", "Lente que aumenta lo que miramos."],
    ["Observación", "Mirar con atención y anotar."],
  ],
  situacion: {
    titulo: "Exploradores de ecosistemas",
    reto: "La clase estudia el ecosistema del patio y lo compara con ecosistemas lejanos.",
    pasos: ["Observar un metro cuadrado del patio con lupa.", "Buscar ejemplos de camuflaje en fotos y en el patio.", "Investigar en grupos el mar, el polo o la selva.", "Presentar un mural comparativo de ecosistemas."],
    producto: "Un cuaderno de campo y un mural de ecosistemas.",
    evaluacion: ["Explica el camuflaje.", "Describe el ecosistema marino.", "Compara polo y selva.", "Observa con respeto un ecosistema cercano."],
  },
});
