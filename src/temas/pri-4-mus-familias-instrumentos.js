// Música 4º de Primaria: familias de instrumentos. Dibujos propios en SVG.
const { tema, L, svg, tx, t, orquesta, AZ, RO, VE, NA, AM, MO } = require("./_pri4d");

const MAD = "#9a5b2c", MET = "#c9a24a";

// Dibujos sencillos de instrumentos.
const violin = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 -40 c 14 0 16 14 8 20 c 10 6 12 28 -8 30 c -20 -2 -18 -24 -8 -30 c -8 -6 -6 -20 8 -20 z" fill="${MAD}"/><rect x="-2" y="-62" width="4" height="24" fill="var(--ink)"/><path d="M-1 -60 V 6 M1 -60 V 6" stroke="var(--paper)" stroke-width=".6"/></g>`;
const trompeta = (x, y) => `<path d="M${x - 40} ${y} h 50 q 10 0 14 -10 l 16 -6 v 32 l -16 -6 q -4 -10 -14 -10" fill="${MET}" stroke="#8a6a24" stroke-width="2"/><rect x="${x - 20}" y="${y - 12}" width="16" height="10" rx="2" fill="${MET}" stroke="#8a6a24"/>`;
const tambor = (x, y) => `<ellipse cx="${x}" cy="${y - 16}" rx="28" ry="8" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><path d="M${x - 28} ${y - 16} v 30 q 28 14 56 0 v -30" fill="${RO}" fill-opacity=".6" stroke="var(--ink)" stroke-width="2"/><path d="M${x - 20} ${y - 30} l 26 -22 M${x + 20} ${y - 30} l -10 -26" stroke="${MAD}" stroke-width="3" stroke-linecap="round"/>`;

module.exports = tema({
  materia: "Música",
  titulo: "Familias de instrumentos",
  objetivos: ["Clasificar los instrumentos en familias según cómo producen el sonido", "Conocer instrumentos de cuerda, viento y percusión", "Distinguir percusión de altura determinada e indeterminada", "Conocer la orquesta y los instrumentos escolares"],
  claves: ["cuerda frotada", "cuerda pulsada", "cuerda percutida", "viento madera", "viento metal", "percusión", "láminas", "orquesta", "instrumentos electrónicos", "Orff"],
  pregunta: [
    "Un violín, una trompeta y un tambor suenan muy distinto. ¿Hay alguna forma de ordenar todos los instrumentos del mundo?",
    "Sí: se agrupan en <mark>familias</mark> según <b>cómo producen el sonido</b>. Si vibra una <b>cuerda</b>, es de cuerda (violín). Si vibra el <b>aire</b> al soplar, es de viento (trompeta). Si se <b>golpea</b> o se sacude, es de percusión (tambor). ¡Como los animales, que se clasifican en mamíferos, aves…!",
  ],
  bloques: [
    ["¿Cómo suena un instrumento?", `<p>Todos los instrumentos producen sonido haciendo que algo <b>vibre</b>. Lo que cambia es <b>qué</b> vibra y <b>cómo</b> lo hacemos vibrar. Según eso, los instrumentos se agrupan en <mark>familias</mark>: <b>cuerda</b> (vibran cuerdas), <b>viento</b> (vibra el aire dentro de un tubo) y <b>percusión</b> (vibra el instrumento al golpearlo, sacudirlo o rasparlo).</p><p>En los últimos cien años ha aparecido una cuarta familia: los instrumentos <b>electrónicos</b>, que producen el sonido con electricidad, como el teclado eléctrico o el sintetizador.</p>`,
      svg("Las tres familias: cuerda, viento y percusión", `${violin(48, 90, 1)}${trompeta(134, 80)}${tambor(214, 100)}${tx(48, 150, "cuerda", { s: 12, c: MAD })}${tx(134, 150, "viento", { s: 12, c: "#8a6a24" })}${tx(214, 150, "percusión", { s: 12, c: RO })}`)],
    ["Cuerda frotada", `<p>En los instrumentos de <mark>cuerda frotada</mark>, las cuerdas vibran al frotarlas con un <b>arco</b>: una vara con crines de caballo. Forman la familia del violín: el <b>violín</b> (el más pequeño y agudo), la <b>viola</b> (algo mayor), el <b>violonchelo</b> (que se toca sentado, apoyado en el suelo) y el <b>contrabajo</b> (el más grande y grave, ¡más alto que una persona!).</p><p>Los cuatro tienen forma parecida pero distinto tamaño. Recuerda: cuanto más grande es el instrumento, más <b>grave</b> suena. Las cuerdas también se pueden pellizcar con el dedo: se llama <i>pizzicato</i>.</p>`,
      svg("Familia del violín de menor a mayor", `${[[36, 0.7, "violín"], [90, 0.85, "viola"], [150, 1.15, "violonchelo"], [216, 1.5, "contrabajo"]].map(([x, k, n]) => `${violin(x, 120 - 30 * k, k)}${tx(x, 166, n, { s: 10.5, c: MAD })}`).join("")}`)],
    ["Cuerda pulsada y percutida", `<p>En la <mark>cuerda pulsada</mark>, las cuerdas se pellizcan con los dedos o con una púa. Aquí están la <b>guitarra</b> (muy importante en la música española y en el flamenco), el <b>arpa</b>, la <b>bandurria</b>, el <b>laúd</b> y el <b>ukelele</b>.</p><p>En la <mark>cuerda percutida</mark>, las cuerdas se golpean con unos macillos. El ejemplo más conocido es el <b>piano</b>: al pulsar una tecla, un macillo forrado de fieltro golpea la cuerda. Por eso el piano a veces se clasifica también entre la percusión. ¡Tiene más de 200 cuerdas por dentro!</p>`,
      svg("Guitarra y piano", `<path d="M60 70 c 22 0 26 18 14 26 c 18 8 20 40 -14 42 c -34 -2 -32 -34 -14 -42 c -12 -8 -8 -26 14 -26 z" fill="${MAD}" fill-opacity=".8"/><circle cx="60" cy="108" r="9" fill="var(--ink)"/><rect x="56" y="18" width="8" height="54" fill="var(--ink)"/><rect x="140" y="70" width="100" height="56" rx="4" fill="var(--ink)"/>${[...Array(10)].map((_, i) => `<rect x="${144 + i * 9.4}" y="100" width="8.4" height="24" fill="var(--paper)"/>`).join("")}${[0, 1, 3, 4, 5, 7, 8].map((i) => `<rect x="${150 + i * 9.4}" y="100" width="5" height="14" fill="var(--ink)"/>`).join("")}${tx(60, 162, "guitarra: pulsada", { s: 11, c: MAD })}${tx(190, 150, "piano: percutida", { s: 11 })}`)],
    ["Viento madera", `<p>En los instrumentos de <mark>viento</mark>, el sonido se produce al <b>soplar</b> y hacer vibrar el aire dentro de un tubo. Los de <b>viento madera</b> se llaman así porque se hacían (y muchos se hacen) de madera: la <b>flauta dulce</b>, la <b>flauta travesera</b> (que hoy es de metal, pero sigue en esta familia), el <b>clarinete</b>, el <b>oboe</b>, el <b>fagot</b> y el <b>saxofón</b>.</p><p>Muchos tienen una <b>lengüeta</b>, una laminita de caña que vibra al soplar. Para cambiar de nota se tapan agujeros o se pulsan llaves, como en tu flauta del cole.</p>`,
      L.filas("Instrumentos de viento madera", [["flauta travesera", "se sopla de lado", AZ], ["clarinete", "una lengüeta", VE], ["oboe", "doble lengüeta", NA], ["fagot", "el más grave", MAD]], "Viento madera")],
    ["Viento metal", `<p>Los de <mark>viento metal</mark> son de metal brillante y tienen una <b>boquilla</b> en forma de copa. El músico hace vibrar sus <b>labios</b> dentro de ella, como si hiciera una pedorreta. Su sonido es potente y brillante, ideal para fanfarrias y desfiles.</p><p>Los principales son la <b>trompeta</b> (la más aguda), la <b>trompa</b> (enrollada en círculo), el <b>trombón</b> (con una vara que se alarga y se acorta) y la <b>tuba</b> (la más grande y grave). Las trompetas y las trompas cambian de nota con unos <b>pistones</b> o válvulas.</p>`,
      svg("Trompeta y trombón con su vara", `${trompeta(80, 70)}<path d="M150 120 h 80 M150 132 h 80 M150 120 q -10 6 0 12 M230 120 q 10 6 0 12" fill="none" stroke="#8a6a24" stroke-width="4"/><path d="M210 112 l 24 -16 v 50 l -24 -16 z" fill="${MET}" stroke="#8a6a24" stroke-width="2"/>${tx(80, 110, "trompeta", { s: 11, c: "#8a6a24" })}${tx(190, 160, "trombón (vara)", { s: 11, c: "#8a6a24" })}`)],
    ["Percusión", `<p>Los instrumentos de <mark>percusión</mark> suenan al <b>golpearlos</b>, <b>sacudirlos</b> o <b>rasparlos</b>. Es la familia más antigua y numerosa. Se dividen en dos grupos. Los de <b>altura determinada</b> pueden dar notas distintas: el <b>xilófono</b> (láminas de madera), el <b>metalófono</b> (láminas de metal) y los <b>timbales</b>.</p><p>Los de <b>altura indeterminada</b> no dan notas, solo ritmo: el <b>tambor</b>, el <b>bombo</b>, los <b>platillos</b>, el <b>triángulo</b>, el <b>pandero</b>, las <b>maracas</b>, las <b>castañuelas</b> y la <b>caja china</b>.</p>`,
      L.filas("Los dos grupos de percusión", [["altura determinada", "xilófono, metalófono, timbales", AZ], ["altura indeterminada", "tambor, platillos, maracas", RO]], "Percusión"), "mu6b"],
    ["Los instrumentos del cole", `<p>En muchas aulas de música hay <mark>instrumentos Orff</mark>, llamados así por el compositor alemán <b>Carl Orff</b>, que los pensó para que los niños hicieran música desde el principio. Son el xilófono, el metalófono, el carillón (con láminas pequeñas y agudas), el pandero, las claves, el triángulo, la caja china y los cascabeles.</p><p>Las láminas se tocan con <b>baquetas</b>, golpeando en el centro y dejando que la baqueta «rebote». Se pueden quitar algunas láminas para tocar solo las notas que necesitas. ¡Junto con la flauta, forman una pequeña orquesta escolar!</p>`,
      svg("Xilófono con láminas de distintos tamaños y dos baquetas", `${[...Array(8)].map((_, i) => `<rect x="${30 + i * 26}" y="${50 + i * 4}" width="20" height="${90 - i * 8}" rx="3" fill="${[RO, NA, AM, VE, AZ, MO, RO, NA][i]}" fill-opacity=".75"/>${tx(40 + i * 26, 160 - i * 4, ["do", "re", "mi", "fa", "sol", "la", "si", "do"][i], { s: 9.5 })}`).join("")}<path d="M200 30 L 240 10 M210 40 L 248 26" stroke="${MAD}" stroke-width="3"/><circle cx="200" cy="30" r="5" fill="${RO}"/><circle cx="210" cy="40" r="5" fill="${RO}"/>${tx(80, 30, "láminas grandes: graves", { s: 10, c: "var(--muted)" })}`)],
    ["La orquesta", `<p>Una <mark>orquesta sinfónica</mark> reúne a unos 80 o 100 músicos de las tres familias. Se colocan en semicírculo mirando al <b>director</b>, que marca el pulso y las entradas con una batuta. <b>Delante</b> está la cuerda (que es el grupo más numeroso); detrás, el viento madera; después, el viento metal; y al <b>fondo</b>, la percusión.</p><p>Los instrumentos más fuertes se sitúan atrás para que no tapen a los más suaves. Hay orquestas más pequeñas, como la de cámara, y agrupaciones de otro tipo, como la <b>banda</b>, con mucho viento y percusión.</p>`,
      orquesta("Colocación de la orquesta: cuerda delante y percusión al fondo")],
    ["Juego: ¿quién suena?", `<p>Escuchad grabaciones de instrumentos y jugad a adivinarlos. Primero decid la <b>familia</b> (¿cuerda, viento o percusión?) y después el <b>instrumento</b>. Pistas: si el sonido es potente y brillante, puede ser viento metal; si es suave y cantarín, flauta o violín; si solo marca ritmo, percusión.</p><p>Después, fabricad instrumentos con material reciclado: unas maracas con una botella y arroz, un tambor con una lata y un globo, una guitarra con una caja y gomas elásticas. ¿A qué familia pertenece cada uno?</p>`,
      L.filas("Instrumentos con material reciclado", [["maracas", "botella + arroz → percusión", RO], ["tambor", "lata + globo → percusión", NA], ["guitarra", "caja + gomas → cuerda", MAD], ["flauta", "pajitas cortadas → viento", AZ]], "¡Fabrícalos!")],
  ],
  ejemplos: [
    ["¿A qué familia pertenece el violonchelo y por qué?", ["Tiene cuerdas que vibran.", "Se tocan con arco: se frotan."], "Cuerda frotada."],
    ["¿Es el triángulo de altura determinada o indeterminada?", ["El triángulo no da notas distintas.", "Solo marca ritmo y timbre."], "De altura indeterminada."],
    ["Ordena de agudo a grave: tuba, trompeta, trombón.", ["La trompeta es la más pequeña: aguda.", "La tuba es la más grande: grave."], "Trompeta, trombón, tuba."],
  ],
  errores: [
    "Pensar que la flauta travesera es de viento metal por ser de metal: pertenece al viento madera.",
    "Creer que la percusión no puede dar notas: el xilófono y los timbales sí dan.",
    "Pensar que el instrumento más grande es el más agudo: es al revés.",
    "Confundir cuerda pulsada (guitarra) con cuerda frotada (violín).",
    "Colocar la percusión delante en la orquesta: va al fondo.",
  ],
  ejercicios: [
    ["¿En qué se basa la clasificación en familias?", "En cómo produce el sonido cada instrumento."],
    ["Escribe los cuatro instrumentos de la familia del violín.", "Violín, viola, violonchelo y contrabajo."],
    ["Pon dos ejemplos de cuerda pulsada.", "Guitarra y arpa (también bandurria, laúd, ukelele)."],
    ["¿Por qué el piano es de cuerda percutida?", "Porque unos macillos golpean sus cuerdas."],
    ["¿Qué es una lengüeta?", "Una laminita de caña que vibra al soplar."],
    ["Escribe cuatro instrumentos de viento metal.", "Trompeta, trompa, trombón y tuba."],
    ["¿Qué diferencia hay entre percusión de altura determinada e indeterminada?", "La primera da notas; la segunda solo ritmo."],
    ["¿Qué son los instrumentos Orff?", "Instrumentos escolares (xilófono, metalófono, pandero…) pensados por Carl Orff."],
    ["¿Dónde se coloca la cuerda en la orquesta?", "Delante, cerca del director."],
    ["Inventa un instrumento reciclado y di su familia.", "Respuesta libre: un palo de lluvia con un tubo y legumbres (percusión)."],
  ],
  figura: ["Las familias de instrumentos", L.columnas("Familias de instrumentos", [["vibran cuerdas", "CUERDA", ["frotada: violín", "pulsada: guitarra"], MAD], ["soplo y madera", "VIENTO MADERA", ["flauta, clarinete", "oboe, fagot"], AZ], ["soplo y labios", "VIENTO METAL", ["trompeta, trompa", "trombón, tuba"], "#8a6a24"], ["golpear, sacudir", "PERCUSIÓN", ["xilófono", "tambor, platillos"], RO]])],
  video: "mu6v",
  quiz: [
    ["Los instrumentos se clasifican según…", ["cómo producen el sonido", "su color", "su precio"], "Familias."],
    ["El violín es de cuerda…", ["frotada", "pulsada", "percutida"], "Arco."],
    ["La guitarra es de cuerda…", ["pulsada", "frotada", "percutida"], "Pellizco."],
    ["El instrumento más grave de la familia del violín es el…", ["contrabajo", "violín", "viola"], "Grande."],
    ["El clarinete es de…", ["viento madera", "viento metal", "percusión"], "Lengüeta."],
    ["El trombón tiene una…", ["vara", "lengüeta", "cuerda"], "Vara."],
    ["Un instrumento de percusión de altura determinada es el…", ["xilófono", "triángulo", "bombo"], "Láminas."],
    ["Las castañuelas son de…", ["percusión", "cuerda", "viento"], "Golpe."],
    ["En la orquesta, la percusión se coloca…", ["al fondo", "delante", "fuera"], "Atrás."],
    ["El piano es de cuerda…", ["percutida", "frotada", "pulsada"], "Macillos."],
  ],
  examen: [
    ["La tuba es de…", ["viento metal", "viento madera", "cuerda"], "Metal."],
    ["La flauta travesera pertenece al viento…", ["madera", "metal", "electrónico"], "Madera."],
    ["Las láminas se golpean con…", ["baquetas", "arco", "púa"], "Baquetas."],
    ["El grupo más numeroso de la orquesta es la…", ["cuerda", "percusión", "viento metal"], "Cuerda."],
  ],
  feynman: ["Cómo se clasifican los instrumentos en familias", "Qué instrumentos son de cuerda frotada, pulsada y percutida", "Qué diferencia hay entre viento madera y viento metal", "Cómo se divide la percusión y cómo se coloca la orquesta"],
  mapa: ["FAMILIAS DE INSTRUMENTOS", MO, [["Cuerda", "frotada · pulsada · percutida", MAD], ["Viento madera", "flauta · clarinete · oboe", AZ], ["Viento metal", "trompeta · trombón · tuba", "#8a6a24"], ["Percusión", "determinada · indeterminada", RO]], 260],
  tarjetas: [
    ["Cuerda frotada", "Con arco: violín, viola, chelo, contrabajo."],
    ["Cuerda pulsada", "Se pellizca: guitarra, arpa."],
    ["Cuerda percutida", "Con macillos: piano."],
    ["Viento madera", "Flauta, clarinete, oboe, fagot."],
    ["Viento metal", "Trompeta, trompa, trombón, tuba."],
    ["Percusión determinada", "Da notas: xilófono, timbales."],
    ["Percusión indeterminada", "Solo ritmo: tambor, platillos."],
    ["Orquesta", "Cuerda delante, percusión al fondo."],
  ],
  familias: ["Fabricad juntos un instrumento reciclado y decid a qué familia pertenece.", "Escuchad un concierto de orquesta en vídeo y buscad cada familia en el escenario."],
  saberes: "Clasificación de los instrumentos por familias (cuerda, viento, percusión y electrónicos); instrumentos escolares Orff; la orquesta (Música y Danza)",
  ideas: ["Juego de audición «¿quién suena?» con grabaciones.", "Taller de instrumentos con material reciclado.", "Visita virtual a un concierto didáctico."],
  fuentes: [["Diccionario de la RAE: orquesta", "https://dle.rae.es/orquesta"], ["Orquesta y Coro Nacionales de España", "https://www.ocne.mcu.es/"]],
});
