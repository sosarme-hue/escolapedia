// Francés 4º de Primaria: la ropa y el tiempo atmosférico. Explicaciones en español, ejemplos en francés. Dibujos propios en SVG.
const P = require("./_pri4a");
const { svg, t, persona, AZ, RO, VE, NA, SO, MO, AG } = P;

// Iconos del tiempo centrados en (x, y).
const sol = (x, y, r = 16) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${SO}" fill-opacity=".8"/>${[...Array(8)].map((_, i) => { const a = (i * Math.PI) / 4; return `<path d="M${(x + (r + 4) * Math.cos(a)).toFixed(1)} ${(y + (r + 4) * Math.sin(a)).toFixed(1)} L ${(x + (r + 11) * Math.cos(a)).toFixed(1)} ${(y + (r + 11) * Math.sin(a)).toFixed(1)}" stroke="${SO}" stroke-width="2.5"/>`; }).join("")}`;
const nube = (x, y, c = "var(--muted)") => `<path d="M${x - 24} ${y + 10} a 12 12 0 0 1 4 -22 a 16 16 0 0 1 30 -4 a 12 12 0 0 1 14 26 Z" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>`;
const lluvia = (x, y) => nube(x, y) + [-14, -2, 10].map((d) => `<path d="M${x + d} ${y + 16} l -4 12" stroke="${AG}" stroke-width="2.5" stroke-linecap="round"/>`).join("");
const nieve = (x, y) => nube(x, y) + [-14, -2, 10].map((d) => t(x + d, y + 30, "*", { s: 16, c: AG })).join("");
const viento = (x, y) => [0, 12, 24].map((d) => `<path d="M${x - 24} ${y - 12 + d} h 36 q 10 0 10 -6" fill="none" stroke="${AZ}" stroke-width="2.5" stroke-linecap="round"/>`).join("");

module.exports = P.tema({
  materia: "Francés",
  titulo: "Les vêtements et la météo",
  minutos: 45,
  objetivos: ["Nombrar las prendas de ropa más comunes en francés", "Decir qué llevas puesto con je porte", "Preguntar y decir qué tiempo hace con Il fait…, Il pleut, Il neige", "Relacionar la ropa con el tiempo y las estaciones del año"],
  claves: ["les vêtements", "le pantalon", "la jupe", "la robe", "le pull", "le tee-shirt", "le manteau", "les chaussures", "le chapeau", "je porte", "la météo", "Quel temps fait-il ?", "il fait beau", "il fait froid", "il pleut", "il neige", "les saisons"],
  pregunta: ["Si un amigo francés te dice «Il pleut, prends ton parapluie !», ¿qué te está aconsejando?", "Te dice que <mark>está lloviendo</mark> y que cojas el <b>paraguas</b>. <i>Il pleut</i> significa «llueve» y <i>le parapluie</i> es el paraguas (¡literalmente, «para la lluvia»!). Hoy aprenderás a hablar del tiempo y de la ropa que te pones."],
  bloques: [
    ["Les vêtements: la ropa", `<p>Estas son las prendas más habituales:</p>${P.tb(["français", "español", "français", "español"], [["le pantalon", "el pantalón", "le pull", "el jersey"], ["la jupe", "la falda", "le manteau", "el abrigo"], ["la robe", "el vestido", "la veste", "la chaqueta"], ["le tee-shirt", "la camiseta", "le short", "el pantalón corto"], ["la chemise", "la camisa", "le pyjama", "el pijama"]])}<p>¡Cuidado con los «falsos amigos»! <i>La robe</i> es un <b>vestido</b> (no una bata) y <i>le pull</i> es un <b>jersey</b>.</p><p>Para preguntar qué es: <i>Qu'est-ce que c'est ?</i> — <i>C'est un pull.</i></p>`,
      svg("Camiseta, pantalón y vestido con su nombre en francés", `<path d="M30 40 l 16 -10 h 20 l 16 10 l -8 14 l -8 -4 v 46 h -20 v -46 l -8 4 Z" fill="${RO}" fill-opacity=".35" stroke="${RO}" stroke-width="2"/>${t(56, 124, "le tee-shirt", { s: 11, c: RO })}<path d="M114 30 h 36 l 4 80 h -16 l -6 -56 l -6 56 h -16 Z" fill="${AZ}" fill-opacity=".35" stroke="${AZ}" stroke-width="2"/>${t(132, 124, "le pantalon", { s: 11, c: AZ })}<path d="M200 30 h 20 l 6 20 l 16 56 h -64 l 16 -56 Z" fill="${MO}" fill-opacity=".35" stroke="${MO}" stroke-width="2"/>${t(210, 124, "la robe", { s: 11, c: MO })}${t(130, 158, "les vêtements", { s: 13, c: "var(--muted)" })}`)],
    ["Calzado y complementos", `<p>Para completar la ropa:</p><ul><li><b>les chaussures</b>: los zapatos.</li><li><b>les baskets</b>: las zapatillas de deporte.</li><li><b>les bottes</b>: las botas.</li><li><b>les chaussettes</b>: los calcetines.</li><li><b>le chapeau</b>: el sombrero. <b>la casquette</b>: la gorra.</li><li><b>le bonnet</b>: el gorro de lana.</li><li><b>l'écharpe</b>: la bufanda.</li><li><b>les gants</b>: los guantes.</li><li><b>les lunettes de soleil</b>: las gafas de sol.</li><li><b>le parapluie</b>: el paraguas.</li></ul><p>Truco: <i>chaussure</i> y <i>chaussette</i> se parecen porque las dos van en los pies.</p>`,
      P.filas("Calzado y complementos en francés", [["les chaussures", "los zapatos", NA], ["le bonnet", "el gorro", RO], ["l'écharpe", "la bufanda", AZ], ["les gants", "los guantes", VE]])],
    ["¿Qué llevas puesto?", `<p>Para decir qué ropa llevas se usa el verbo <b>porter</b> (llevar):</p><ul><li><b>Je porte</b> un pantalon bleu. — Llevo un pantalón azul.</li><li><b>Tu portes</b> une robe rouge. — Llevas un vestido rojo.</li><li><b>Il / Elle porte</b> un pull vert. — Lleva un jersey verde.</li></ul><p>Recuerda que el color va <b>detrás</b> y concuerda: <i>une jupe <mark>noire</mark></i>, <i>des chaussures <mark>blanches</mark></i>.</p><p>Para preguntar: <i>Qu'est-ce que tu portes aujourd'hui ?</i> (¿Qué llevas hoy?)</p>`,
      svg("Una niña que lleva un jersey verde, una falda azul y zapatos rojos", `${persona(76, 36, VE, { brazos: [[-18, 16], [18, 16]] })}<rect x="64" y="46" width="24" height="24" rx="4" fill="${VE}" fill-opacity=".45"/><path d="M64 70 L 58 84 H 94 L 88 70 Z" fill="${AZ}" fill-opacity=".5" stroke="${AZ}" stroke-width="2"/><rect x="58" y="90" width="10" height="6" rx="2" fill="${RO}"/><rect x="84" y="90" width="10" height="6" rx="2" fill="${RO}"/>${t(176, 54, "un pull vert", { s: 12, c: VE })}${t(176, 80, "une jupe bleue", { s: 12, c: AZ })}${t(176, 106, "des chaussures rouges", { s: 11, c: RO })}${t(130, 152, "Elle porte…", { s: 15, d: true, c: MO })}`)],
    ["Quel temps fait-il ?", `<p>Para preguntar qué tiempo hace se dice: <b>Quel temps fait-il ?</b> (suena «kel tan fetíl»).</p><p>Muchas respuestas empiezan por <b>Il fait</b>:</p><ul><li><b>Il fait beau.</b> — Hace buen tiempo.</li><li><b>Il fait mauvais.</b> — Hace mal tiempo.</li><li><b>Il fait chaud.</b> — Hace calor.</li><li><b>Il fait froid.</b> — Hace frío.</li><li><b>Il fait du soleil.</b> — Hace sol.</li><li><b>Il fait du vent.</b> — Hace viento.</li></ul><p>Como en español usamos «hace», en francés usamos <mark>il fait</mark> (literalmente, «él hace»).</p>`,
      svg("Iconos del tiempo: il fait beau, il fait du vent y il fait froid", `${sol(48, 62)}${t(48, 120, "il fait beau", { s: 11, c: SO })}${viento(134, 62)}${t(130, 120, "il fait du vent", { s: 11, c: AZ })}${nube(214, 62, AG)}${t(214, 120, "il fait froid", { s: 11, c: AG })}${t(130, 156, "Quel temps fait-il ?", { s: 14, d: true })}`),
      P.V("vetB")],
    ["Llueve, nieva, está nublado", `<p>Otras expresiones del tiempo no usan <i>il fait</i>:</p><ul><li><b>Il pleut.</b> — Llueve. (de <i>la pluie</i>, la lluvia)</li><li><b>Il neige.</b> — Nieva. (de <i>la neige</i>, la nieve)</li><li><b>Il y a des nuages.</b> — Hay nubes. También: <i>Le ciel est nuageux</i> (el cielo está nublado).</li><li><b>Il y a de l'orage.</b> — Hay tormenta.</li><li><b>Il y a du brouillard.</b> — Hay niebla.</li></ul><p>Un consejo: haz tu propio «parte del tiempo» cada mañana mirando por la ventana: <i>Aujourd'hui, il pleut et il fait froid.</i> (Hoy llueve y hace frío.)</p>`,
      svg("Iconos del tiempo: il pleut, il neige e il y a des nuages", `${lluvia(52, 60)}${t(52, 120, "il pleut", { s: 12, c: AG })}${nieve(134, 60)}${t(130, 120, "il neige", { s: 12, c: AG })}${nube(204, 56)}${nube(222, 68)}${t(214, 120, "des nuages", { s: 12 })}`)],
    ["Les saisons: las estaciones", `<p>El año tiene cuatro <b>saisons</b> (estaciones):</p><ul><li><b>le printemps</b>: la primavera. <i>Au printemps, il fait doux.</i> (En primavera hace un tiempo suave.)</li><li><b>l'été</b>: el verano. <i>En été, il fait chaud.</i></li><li><b>l'automne</b>: el otoño. <i>En automne, il y a du vent.</i></li><li><b>l'hiver</b>: el invierno. <i>En hiver, il neige.</i></li></ul><p>Fíjate: se dice <mark>au printemps</mark>, pero <mark>en été, en automne, en hiver</mark>. En <i>automne</i> la <b>m</b> no suena: «otón».</p>`,
      P.filas("Las cuatro estaciones en francés", [["le printemps", "la primavera · il fait doux", VE], ["l'été", "el verano · il fait chaud", SO], ["l'automne", "el otoño · il y a du vent", NA], ["l'hiver", "el invierno · il neige", AG]])],
    ["La ropa según el tiempo", `<p>Ahora junta las dos cosas: ¿qué te pones según el tiempo?</p><ul><li><i>Quand il fait chaud, je porte un short et un tee-shirt.</i> — Cuando hace calor, llevo un pantalón corto y una camiseta.</li><li><i>Quand il fait froid, je porte un manteau, un bonnet et des gants.</i></li><li><i>Quand il pleut, je prends mon parapluie et mes bottes.</i> — Cuando llueve, cojo el paraguas y las botas.</li><li><i>Quand il fait du soleil, je mets mes lunettes de soleil.</i> — me pongo las gafas de sol.</li></ul><p><b>Quand</b> significa «cuando». <b>Je mets</b> significa «me pongo».</p>`,
      svg("Ropa según el tiempo: con sol, camiseta y gafas; con frío, abrigo, gorro y bufanda", `${sol(46, 44, 12)}${persona(46, 78, SO)}${t(46, 150, "short, tee-shirt", { s: 10, c: SO })}<path d="M130 20 V 160" stroke="var(--line)" stroke-width="2"/>${nieve(206, 40)}${persona(206, 78, AZ)}<rect x="196" y="62" width="20" height="7" rx="3" fill="${RO}"/><path d="M199 88 h 14" stroke="${RO}" stroke-width="4"/>${t(206, 150, "manteau, bonnet", { s: 10, c: AZ })}${t(206, 164, "écharpe, gants", { s: 10, c: AZ })}`)],
    ["El parte del tiempo", `<p>En la tele francesa, el hombre o la mujer del tiempo presenta <b>la météo</b>. Fíjate en este parte inventado:</p><p><i>Bonjour ! Voici la météo pour demain. Dans le nord, il pleut et il fait froid : 8 degrés. À Paris, il y a des nuages. Dans le sud, il fait beau et chaud : 22 degrés. Bonne journée !</i></p><p>Palabras útiles: <b>demain</b> (mañana), <b>aujourd'hui</b> (hoy), <b>le nord</b> (el norte), <b>le sud</b> (el sur), <b>les degrés</b> (los grados).</p><p>¡Intenta presentar tú el tiempo de tu ciudad con un mapa dibujado!</p>`,
      svg("Mapa del tiempo inventado: lluvia en el norte, nubes en el centro y sol en el sur", `<path d="M70 30 L 160 22 L 210 60 L 196 120 L 140 156 L 70 140 L 44 90 Z" fill="${VE}" fill-opacity=".14" stroke="${VE}" stroke-width="2"/>${lluvia(104, 54)}${t(150, 60, "8°", { s: 13, c: AG })}${nube(96, 112)}${sol(140, 128, 9)}${t(106, 146, "22°", { s: 13, c: RO })}${t(30, 24, "nord", { s: 10, c: "var(--muted)" })}${t(36, 166, "sud", { s: 10, c: "var(--muted)" })}`)],
    ["En la tienda de ropa", `<p>Si vas de compras a una tienda de ropa en Francia, estas frases te ayudarán:</p><ul><li><b>Je voudrais un pull, s'il vous plaît.</b> — Querría un jersey, por favor.</li><li><b>Quelle taille ?</b> — ¿Qué talla?</li><li><b>Il est trop grand / trop petit.</b> — Es demasiado grande / pequeño.</li><li><b>Je peux l'essayer ?</b> — ¿Puedo probármelo?</li><li><b>C'est combien ?</b> — ¿Cuánto cuesta?</li><li><b>C'est vingt euros.</b> — Son veinte euros.</li></ul><p>Recuerda usar <b>vous</b> con el dependiente y no olvides el <mark>merci, au revoir</mark> al salir.</p>`,
      P.dialogo("Diálogo en una tienda de ropa", [["Client", "Je voudrais un pull bleu.", AZ], ["Vendeuse", "Voilà ! Quelle taille ?", RO], ["Client", "C'est combien ?", AZ], ["Vendeuse", "Vingt euros.", RO]])],
  ],
  figura: ["Les vêtements et la météo", P.columnas("Resumen: ropa, llevar puesto, el tiempo y las estaciones", [["pantalon · robe", "VÊTEMENTS", ["pull · manteau", "chaussures"], AZ], ["Je porte…", "PORTER", ["un pull vert", "une jupe noire"], VE], ["Quel temps fait-il ?", "MÉTÉO", ["il fait beau", "il pleut · il neige"], SO], ["été · hiver", "SAISONS", ["printemps", "automne"], RO]])],
  video: P.V("vetV", true),
  ejemplos: [
    ["Di qué llevas: un jersey rojo y unas zapatillas blancas.", ["Je porte + prenda + color.", "Baskets es femenino plural: blanches."], "Je porte un pull rouge et des baskets blanches."],
    ["Mira por la ventana: hay nubes y hace frío. ¿Qué dices?", ["Nubes: il y a des nuages.", "Frío: il fait froid."], "Il y a des nuages et il fait froid."],
    ["¿Qué te pones cuando nieva?", ["Cuando = quand; nieva = il neige.", "Ropa de abrigo: manteau, bonnet, gants, bottes."], "Quand il neige, je porte un manteau, un bonnet, des gants et des bottes."],
  ],
  errores: [
    "Traducir la robe por «la bata»: es el vestido.",
    "Decir «Il est froid» para el tiempo: se dice Il fait froid.",
    "Decir «Il fait pluie»: llueve es Il pleut.",
    "Poner el color delante: es un pull vert, no un vert pull.",
    "Decir «en printemps»: es au printemps.",
  ],
  ejercicios: [
    ["¿Cómo se dice en francés: pantalón, falda y camiseta?", "Le pantalon, la jupe, le tee-shirt."],
    ["Traduce: le manteau, les chaussettes, l'écharpe.", "El abrigo, los calcetines, la bufanda."],
    ["Escribe qué llevas hoy empezando por «Aujourd'hui, je porte…».", "Respuesta libre, por ejemplo: Aujourd'hui, je porte un jean et un pull gris."],
    ["¿Cómo preguntas qué tiempo hace?", "Quel temps fait-il ?"],
    ["Traduce: Hace calor y hace sol.", "Il fait chaud et il fait du soleil."],
    ["¿Qué significa «Il neige» ?", "Nieva."],
    ["Escribe las cuatro estaciones en francés.", "Le printemps, l'été, l'automne, l'hiver."],
    ["Completa: ___ printemps, il fait doux. (en / au)", "Au printemps."],
    ["¿Qué coges cuando llueve? Responde en francés.", "Quand il pleut, je prends mon parapluie."],
    ["¿Cómo preguntas el precio en una tienda?", "C'est combien ?"],
  ],
  quiz: [
    ["La robe es…", ["el vestido", "la bata", "la ropa"], "Falso amigo."],
    ["Le pull es…", ["el jersey", "el pulpo", "la camisa"], "Para el frío."],
    ["Les chaussures son…", ["los zapatos", "los calcetines", "los pantalones"], "En los pies."],
    ["Je porte significa…", ["llevo puesto", "me pongo a llorar", "abro la puerta"], "Verbo porter."],
    ["Il fait chaud significa…", ["hace calor", "hace frío", "hace viento"], "Chaud = caliente."],
    ["«Llueve» se dice…", ["Il pleut", "Il fait pluie", "Il neige"], "Pleuvoir."],
    ["Le parapluie es…", ["el paraguas", "la lluvia", "el impermeable"], "«Para la lluvia»."],
    ["L'hiver es…", ["el invierno", "el verano", "la primavera"], "Il neige."],
    ["Quel temps fait-il ? significa…", ["¿qué tiempo hace?", "¿qué hora es?", "¿cuánto tiempo?"], "Pregunta de la météo."],
    ["En verano se dice…", ["en été", "au été", "à l'été"], "En été."],
  ],
  examen: [
    ["Le bonnet es…", ["el gorro", "el bolso", "la bufanda"], "De lana."],
    ["Il fait beau significa…", ["hace buen tiempo", "es bonito", "hace calor"], "Buen tiempo."],
    ["«Llevo una falda negra»:", ["Je porte une jupe noire.", "Je porte une noire jupe.", "Je porte un jupe noir."], "Color detrás y en femenino."],
    ["L'automne es…", ["el otoño", "el coche", "el invierno"], "Suena «otón»."],
  ],
  feynman: ["Cómo se dicen las prendas de ropa principales en francés", "Cómo dices lo que llevas puesto", "Qué expresiones usan il fait y cuáles no", "Cómo se dicen las estaciones y qué preposición llevan", "Qué te pones según el tiempo"],
  mapa: ["VÊTEMENTS ET MÉTÉO", [["Vêtements", "pantalon · robe · pull · manteau", AZ], ["Porter", "Je porte un pull vert", VE], ["Météo", "il fait beau · il pleut · il neige", SO], ["Saisons", "printemps · été · automne · hiver", RO]]],
  tarjetas: [
    ["le pantalon / la jupe", "el pantalón / la falda"],
    ["la robe / le pull", "el vestido / el jersey"],
    ["le manteau / les chaussures", "el abrigo / los zapatos"],
    ["Je porte…", "Llevo puesto…"],
    ["Quel temps fait-il ?", "¿Qué tiempo hace?"],
    ["Il fait beau / Il fait froid", "Hace buen tiempo / Hace frío"],
    ["Il pleut / Il neige", "Llueve / Nieva"],
    ["l'été / l'hiver", "el verano / el invierno"],
  ],
  familias: ["Cada mañana, decid juntos en francés qué tiempo hace y qué ropa conviene.", "Al ordenar el armario, nombrad las prendas en francés.", "Ved un parte meteorológico y repetid el tiempo en francés.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Comunicación y léxico: la ropa y los complementos; el verbo porter; el tiempo atmosférico con il fait, il pleut, il neige e il y a; las estaciones del año; situaciones de compra en una tienda",
  ideas: ["Desfile de moda en la clase describiendo la ropa en francés.", "Parte del tiempo diario por turnos con un mapa de la comunidad.", "Maleta de viaje: elegir ropa según el tiempo de una ciudad francesa."],
});

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Usar los verbos porter y mettre con la ropa", "Decir los meses del año y las fechas", "Hablar de la temperatura en grados", "Comparar el tiempo en distintos países francófonos y describir un look"],
  lectura: { titulo: "Une lettre du Québec", html: `<p>Mathis vive en Montreal, en Canadá, y escribe una carta a su amiga Lucía, que vive en Sevilla. Lee la carta. Las palabras difíciles llevan traducción.</p><p><i>Montréal, le 15 <b>janvier</b></i></p><p><i>Chère Lucía,</i></p><p><i>Comment ça va à Séville ? Ici, à Montréal, c'est l'<b>hiver</b>. Il fait très, très froid : aujourd'hui, il fait <b>moins vingt degrés</b> ! Il neige beaucoup et il y a de la neige partout (por todas partes).</i></p><p><i>Pour aller à l'école, <b>je mets</b> beaucoup de vêtements : un gros <b>manteau</b>, une <b>écharpe</b>, un <b>bonnet</b>, des <b>gants</b> et des <b>bottes</b> de neige. Ma mère dit que je ressemble à un bonhomme de neige (muñeco de nieve) !</i></p><p><i>Mais j'adore l'hiver. Le week-end, je fais du ski et du patin à glace (patinaje sobre hielo) avec mes amis.</i></p><p><i>Et toi ? Quel temps fait-il à Séville ? Ma prof dit qu'en Espagne, en janvier, il fait <b>quinze degrés</b>. C'est vrai ? Tu <b>portes</b> un tee-shirt en hiver ?</i></p><p><i>En <b>juillet</b>, je vais venir en Espagne avec mes parents. Il va faire très chaud, non ? Je vais <b>mettre</b> un short et des sandales tous les jours !</i></p><p><i>Écris-moi vite !</i></p><p><i>Gros bisous,</i></p><p><i>Mathis</i></p>` },
  tras: {
    "¿Qué llevas puesto?": [
      ["Porter y mettre", `<p>Para hablar de la ropa en francés hay dos verbos muy útiles que no significan lo mismo:</p><ul><li><mark>porter</mark> = <b>llevar puesto</b>. Describe la ropa que alguien lleva: <i>Aujourd'hui, <b>je porte</b> un jean et un pull bleu.</i> (Hoy llevo unos vaqueros y un jersey azul.)</li><li><mark>mettre</mark> = <b>ponerse</b>. Es la acción de vestirse: <i>Il fait froid, <b>je mets</b> mon manteau.</i> (Hace frío, me pongo el abrigo.)</li></ul><p>Así se conjugan en presente:</p><ul><li><b>porter</b>: je porte, tu portes, il / elle porte, nous portons, vous portez, ils / elles portent.</li><li><b>mettre</b>: je mets, tu mets, il / elle met, nous mettons, vous mettez, ils / elles mettent.</li></ul><p>Fíjate en que <i>porter</i> es un verbo regular en <b>-er</b>, como <i>parler</i> o <i>aimer</i>. En cambio, <i>mettre</i> es irregular: hay que aprenderlo de memoria.</p><p>Y el contrario de <i>mettre</i> es <b>enlever</b> (quitarse): <i>Il fait chaud, <b>j'enlève</b> mon pull.</i></p><p>Ejemplos útiles:</p><ul><li><i>Qu'est-ce que tu portes ?</i> — ¿Qué llevas puesto?</li><li><i>Mets ton bonnet !</i> — ¡Ponte el gorro! (Lo que dicen todas las madres francesas en invierno.)</li><li><i>Elle porte une robe rouge.</i> — Lleva un vestido rojo.</li></ul>`,
        H6.dos("Porter / mettre", ["PORTER", ["llevar puesto", "je porte un pull", "il porte"], cAZ], ["METTRE", ["ponerse", "je mets mon manteau", "il met"], cNA])],
    ],
    "Les saisons: las estaciones": [
      ["Los meses del año", `<p>Los <mark>meses</mark> (<i>les mois</i>) en francés se parecen mucho a los españoles y, como en español, se escriben con <b>minúscula</b>:</p><ul><li><b>janvier</b> (enero) · <b>février</b> (febrero) · <b>mars</b> (marzo)</li><li><b>avril</b> (abril) · <b>mai</b> (mayo) · <b>juin</b> (junio)</li><li><b>juillet</b> (julio) · <b>août</b> (agosto, se pronuncia «ut») · <b>septembre</b> (septiembre)</li><li><b>octobre</b> (octubre) · <b>novembre</b> (noviembre) · <b>décembre</b> (diciembre)</li></ul><p>¡Cuidado con <b>juin</b> y <b>juillet</b>! Se parecen mucho. Truco: <i>juillet</i> es más largo porque julio va después.</p><p>Para decir «en un mes» se usa <b>en</b>: <i><b>En</b> juillet, il fait chaud.</i> <i>Mon anniversaire est <b>en</b> mai.</i></p><p>Para decir la <b>fecha</b>, el orden es: <b>le</b> + número + mes.</p><ul><li><i>le 14 juillet</i> (el 14 de julio, la fiesta nacional de Francia)</li><li><i>le 25 décembre</i> (Navidad)</li><li>Para el día 1: <i>le <b>premier</b> janvier</i>.</li></ul><p>Preguntas útiles:</p><ul><li><i>Quelle est la date aujourd'hui ?</i> — ¿Qué fecha es hoy?</li><li><i>C'est quand, ton anniversaire ?</i> — ¿Cuándo es tu cumpleaños? → <i>C'est le 3 mars.</i></li></ul>`,
        L6.filas("Les mois", [["janvier", "enero", cAZ], ["avril", "abril", cVE], ["juillet", "julio", cNA], ["août", "agosto («ut»)", cMO], ["décembre", "diciembre", cRO]]), ["2odJakoOVVI", "Les mois de l'année", "Pierre Lozère", 10265405]],
    ],
    "La ropa según el tiempo": [
      ["La temperatura", `<p>Para hablar de la <mark>temperatura</mark> se usa la expresión <b>il fait</b> + número + <b>degrés</b>:</p><ul><li><i>Il fait <b>vingt-cinq degrés</b>.</i> — Hace 25 grados.</li><li><i>Il fait <b>zéro degré</b>.</i> — Hace 0 grados. (¡Atención: con 0 y 1, <i>degré</i> va en singular!)</li><li><i>Il fait <b>moins cinq</b>.</i> — Hace cinco bajo cero. (<i>moins</i> = menos)</li></ul><p>Para preguntar: <b>Quelle température fait-il ?</b> (¿Qué temperatura hace?) o, más fácil, <b>Il fait combien ?</b></p><p>Y para describir cómo es la temperatura:</p><ul><li><b>Il fait très chaud</b> (hace mucho calor): más de 30 °C.</li><li><b>Il fait chaud</b> (hace calor): de 25 a 30 °C.</li><li><b>Il fait bon</b> / <b>il fait doux</b> (se está bien / templado): de 15 a 25 °C.</li><li><b>Il fait frais</b> (hace fresco): de 5 a 15 °C.</li><li><b>Il fait froid</b> (hace frío): menos de 5 °C.</li><li><b>Il gèle</b> (hiela): bajo cero.</li></ul><p>En Francia, como en España, la temperatura se mide en <b>grados Celsius</b>. Pero si viajas a Estados Unidos, ¡allí usan los grados Fahrenheit, y 70 grados es una temperatura agradable!</p><p>¿Qué temperatura hace hoy en tu ciudad? ¿Qué ropa te pones? <i>Aujourd'hui, il fait… degrés. Je mets…</i></p>`,
        L6.filas("Il fait…", [["35 °C", "très chaud", cRO], ["20 °C", "bon / doux", cNA], ["10 °C", "frais", cVE], ["−5 °C", "froid, il gèle", cAZ]])],
    ],
  },
  final: [
    ["El tiempo en el mundo francófono", `<p>Como el francés se habla en muchos países, en el mismo día puede hacer un tiempo <mark>muy diferente</mark> en cada uno. Imagina un día de enero:</p><ul><li>En <b>Montréal</b> (Quebec, Canadá), los inviernos son muy duros: <i>il neige</i> y <i>il fait moins vingt degrés</i>. Hay nieve desde noviembre hasta abril. Los niños llevan monos de nieve (<i>des habits de neige</i>) para ir al colegio.</li><li>En <b>Bretagne</b> (Bretaña, en el oeste de Francia), <i>il pleut</i> a menudo y <i>il y a du vent</i>, porque está junto al océano Atlántico. Allí es típico llevar un chubasquero amarillo: <i>un ciré jaune</i>.</li><li>En <b>Nice</b> (Niza, en el sur de Francia), junto al Mediterráneo, <i>il fait doux</i> incluso en invierno, y casi siempre <i>il y a du soleil</i>.</li><li>En <b>Dakar</b> (Senegal), <i>il fait chaud</i> todo el año: unos 25 grados en enero.</li><li>En <b>Tahiti</b> (Polinesia Francesa), en el hemisferio sur, enero es pleno verano: <i>il fait très chaud</i> y llueve mucho.</li></ul><p>Y en la montaña, en los Alpes, hay mucha nieve: es el lugar perfecto para esquiar.</p><p>Fíjate: en el hemisferio sur, las estaciones van al revés. Cuando en Francia es invierno, en Tahití es verano.</p><p>¿En qué lugar te gustaría pasar las vacaciones de invierno? ¿Qué ropa meterías en tu maleta?</p>`,
      L6.filas("En janvier", [["Montréal", "−20 °C, il neige", cAZ], ["Bretagne", "il pleut, du vent", cVE], ["Nice", "il fait doux", cNA], ["Dakar", "25 °C, chaud", cRO]])],
    ["Décrire un look: describir un estilo", `<p><b>París</b> es conocida como una de las <mark>capitales de la moda</mark> del mundo. Allí se celebran grandes desfiles y tienen su sede muchas marcas famosas. Vamos a aprender a describir la ropa de alguien con todo detalle.</p><p>Para describir un <i>look</i>, di:</p><ol><li><b>La prenda</b>: <i>un pantalon, une jupe, une veste…</i></li><li><b>El color</b>, que va <b>detrás</b> y concuerda: <i>une jupe <b>verte</b>, des chaussures <b>noires</b></i>.</li><li><b>El estampado o el tejido</b> (opcional): <i>à rayures</i> (de rayas), <i>à pois</i> (de lunares), <i>à carreaux</i> (de cuadros), <i>en laine</i> (de lana), <i>en jean</i> (vaquero).</li></ol><p>Ejemplo:</p><p><i>Aujourd'hui, Léa porte une jupe <b>bleue à pois blancs</b>, un tee-shirt <b>jaune</b> et une veste <b>en jean</b>. Elle met des baskets <b>blanches</b> et une casquette <b>rouge</b>. Elle est très jolie !</i></p><p>Para dar tu opinión:</p><ul><li><i>C'est joli !</i> (¡Es bonito!) · <i>C'est cool !</i> · <i>C'est original !</i></li><li><i>J'aime bien ta veste.</i> (Me gusta tu chaqueta.)</li><li><i>Ça te va bien !</i> (¡Te queda bien!)</li></ul><p>Recuerda que algunos colores no cambian nunca: <i>orange</i> y <i>marron</i>. Por eso se dice <i>des chaussures <b>marron</b></i> y <i>une veste <b>orange</b></i>, sin añadir ninguna letra.</p><p>Juego: un alumno describe la ropa de un compañero de clase sin decir su nombre. ¿Quién es?</p>`,
      H6.flujo("Mon look", ["une jupe|la prenda", "bleue|el color", "à pois|estampado", "C'est joli !|opinión"], cRO), ["SFRhBEqDJ24", "Les vêtements: clothes in French", "Learn To French", 342867]],
  ],
  ejemplos: [
    ["Di que hace frío y que te pones el abrigo y los guantes.", ["Tiempo: Il fait froid.", "Acción de ponerse: mettre → je mets."], "Il fait froid, je mets mon manteau et mes gants."],
    ["Escribe la fecha: 14 de julio.", ["Orden: le + número + mes.", "Mes en minúscula."], "le 14 juillet"],
  ],
  errores: ["Confundir porter (llevar puesto) con mettre (ponerse).", "Escribir los meses con mayúscula: «Juillet»."],
  ejercicios: [
    ["b", "¿Cómo se dice «agosto» en francés?", "août"],
    ["b", "Completa: Il fait froid, je ___ mon bonnet.", "mets"],
    ["b", "¿Cómo se dice «Hace 20 grados»?", "Il fait vingt degrés."],
    ["b", "¿Qué tiempo hace en Montreal en enero?", "Hace mucho frío y nieva."],
    ["b", "¿Qué significa «à rayures»?", "de rayas"],
    ["m", "¿Cuándo es la fiesta nacional de Francia?", "Le 14 juillet."],
    ["m", "Di tu cumpleaños en francés.", "Mon anniversaire, c'est le…"],
    ["m", "Conjuga mettre con nous y vous.", "nous mettons, vous mettez"],
    ["m", "¿Cómo se dice «Hace cinco bajo cero»?", "Il fait moins cinq."],
    ["m", "Describe: falda verde de cuadros.", "une jupe verte à carreaux"],
    ["a", "Responde a la carta de Mathis contando el tiempo de tu ciudad.", "Respuesta abierta."],
    ["a", "Presenta el parte del tiempo de tres ciudades francófonas.", "Respuesta abierta."],
    ["a", "Describe el look de un compañero para que lo adivinen.", "Respuesta abierta."],
    ["a", "Haz un calendario con los meses en francés y las fiestas importantes.", "Respuesta abierta."],
  ],
  quiz: [
    ["«Je mets mon manteau» significa…", ["Me pongo el abrigo", "Llevo el abrigo", "Me quito el abrigo"], "Porter / mettre."],
    ["«Juillet» es…", ["julio", "junio", "enero"], "Meses."],
    ["«Il fait doux» quiere decir que…", ["hace buen tiempo templado", "hace mucho frío", "llueve"], "Temperatura."],
    ["En Tahití, en enero es…", ["verano", "invierno", "otoño"], "Mundo francófono."],
    ["«Une robe à pois» es un vestido…", ["de lunares", "de rayas", "de lana"], "Look."],
  ],
  examen: [
    ["En la lectura, ¿qué temperatura hace en Montreal?", ["veinte bajo cero", "quince grados", "cero grados"], "Lectura."],
    ["¿Qué deporte hace Mathis el fin de semana?", ["esquí y patinaje", "fútbol", "natación"], "Lectura."],
  ],
  tarjetas: [
    ["Porter / mettre", "Je porte (llevo) · je mets (me pongo) · j'enlève (me quito)."],
    ["Meses", "janvier… décembre; en juillet; le 14 juillet; le premier janvier."],
    ["Temperatura", "Il fait 25 degrés; il fait moins cinq; chaud, bon, frais, froid."],
    ["Mundo y moda", "Montréal −20 °C, Dakar 25 °C; une jupe bleue à pois."],
  ],
  glosario: [
    ["porter", "llevar puesto"],
    ["mettre", "ponerse"],
    ["enlever", "quitarse"],
    ["les mois", "los meses"],
    ["août", "agosto"],
    ["le degré", "el grado"],
    ["moins", "menos (bajo cero)"],
    ["il gèle", "hiela"],
    ["il fait frais", "hace fresco"],
    ["à rayures", "de rayas"],
    ["à pois", "de lunares"],
    ["Ça te va bien !", "¡Te queda bien!"],
  ],
  situacion: {
    titulo: "La valise parfaite",
    reto: "La clase prepara la maleta ideal para viajar a un país francófono en un mes concreto.",
    pasos: ["En grupos, elegid un destino (Montreal, Niza, Dakar, Tahití…) y un mes.", "Buscad qué tiempo hace allí y qué temperatura.", "Haced la lista de la ropa de la maleta en francés, con colores.", "Presentad vuestro destino como un parte del tiempo y explicad qué vais a mettre."],
    producto: "Una maleta dibujada con la lista de ropa y un parte del tiempo.",
    evaluacion: ["Usa los meses y las fechas.", "Habla de la temperatura en grados.", "Distingue porter y mettre.", "Describe la ropa con colores que concuerdan."],
  },
});
