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
      svg("Una niña que lleva un jersey verde, una falda azul y zapatos rojos", `${persona(76, 36, VE, { brazos: [[-18, 16], [18, 16]] })}<rect x="64" y="50" width="24" height="24" rx="4" fill="${VE}" fill-opacity=".45"/><path d="M64 74 L 58 92 H 94 L 88 74 Z" fill="${AZ}" fill-opacity=".5" stroke="${AZ}" stroke-width="2"/><rect x="62" y="104" width="10" height="6" rx="2" fill="${RO}"/><rect x="80" y="104" width="10" height="6" rx="2" fill="${RO}"/>${t(176, 54, "un pull vert", { s: 12, c: VE })}${t(176, 80, "une jupe bleue", { s: 12, c: AZ })}${t(176, 106, "des chaussures rouges", { s: 11, c: RO })}${t(130, 152, "Elle porte…", { s: 15, d: true, c: MO })}`)],
    ["Quel temps fait-il ?", `<p>Para preguntar qué tiempo hace se dice: <b>Quel temps fait-il ?</b> (suena «kel tan fetíl»).</p><p>Muchas respuestas empiezan por <b>Il fait</b>:</p><ul><li><b>Il fait beau.</b> — Hace buen tiempo.</li><li><b>Il fait mauvais.</b> — Hace mal tiempo.</li><li><b>Il fait chaud.</b> — Hace calor.</li><li><b>Il fait froid.</b> — Hace frío.</li><li><b>Il fait du soleil.</b> — Hace sol.</li><li><b>Il fait du vent.</b> — Hace viento.</li></ul><p>Como en español usamos «hace», en francés usamos <mark>il fait</mark> (literalmente, «él hace»).</p>`,
      svg("Iconos del tiempo: il fait beau, il fait du vent y il fait froid", `${sol(48, 62)}${t(48, 120, "il fait beau", { s: 11, c: SO })}${viento(134, 62)}${t(130, 120, "il fait du vent", { s: 11, c: AZ })}${nube(214, 62, AG)}${t(214, 120, "il fait froid", { s: 11, c: AG })}${t(130, 156, "Quel temps fait-il ?", { s: 14, d: true })}`),
      P.V("vetB")],
    ["Llueve, nieva, está nublado", `<p>Otras expresiones del tiempo no usan <i>il fait</i>:</p><ul><li><b>Il pleut.</b> — Llueve. (de <i>la pluie</i>, la lluvia)</li><li><b>Il neige.</b> — Nieva. (de <i>la neige</i>, la nieve)</li><li><b>Il y a des nuages.</b> — Hay nubes. También: <i>Le ciel est nuageux</i> (el cielo está nublado).</li><li><b>Il y a de l'orage.</b> — Hay tormenta.</li><li><b>Il y a du brouillard.</b> — Hay niebla.</li></ul><p>Un consejo: haz tu propio «parte del tiempo» cada mañana mirando por la ventana: <i>Aujourd'hui, il pleut et il fait froid.</i> (Hoy llueve y hace frío.)</p>`,
      svg("Iconos del tiempo: il pleut, il neige e il y a des nuages", `${lluvia(52, 60)}${t(52, 120, "il pleut", { s: 12, c: AG })}${nieve(134, 60)}${t(130, 120, "il neige", { s: 12, c: AG })}${nube(204, 56)}${nube(222, 68)}${t(214, 120, "des nuages", { s: 12 })}`)],
    ["Les saisons: las estaciones", `<p>El año tiene cuatro <b>saisons</b> (estaciones):</p><ul><li><b>le printemps</b>: la primavera. <i>Au printemps, il fait doux.</i> (En primavera hace un tiempo suave.)</li><li><b>l'été</b>: el verano. <i>En été, il fait chaud.</i></li><li><b>l'automne</b>: el otoño. <i>En automne, il y a du vent.</i></li><li><b>l'hiver</b>: el invierno. <i>En hiver, il neige.</i></li></ul><p>Fíjate: se dice <mark>au printemps</mark>, pero <mark>en été, en automne, en hiver</mark>. En <i>automne</i> la <b>m</b> no suena: «otón».</p>`,
      P.filas("Las cuatro estaciones en francés", [["le printemps", "la primavera · il fait doux", VE], ["l'été", "el verano · il fait chaud", SO], ["l'automne", "el otoño · il y a du vent", NA], ["l'hiver", "el invierno · il neige", AG]])],
    ["La ropa según el tiempo", `<p>Ahora junta las dos cosas: ¿qué te pones según el tiempo?</p><ul><li><i>Quand il fait chaud, je porte un short et un tee-shirt.</i> — Cuando hace calor, llevo un pantalón corto y una camiseta.</li><li><i>Quand il fait froid, je porte un manteau, un bonnet et des gants.</i></li><li><i>Quand il pleut, je prends mon parapluie et mes bottes.</i> — Cuando llueve, cojo el paraguas y las botas.</li><li><i>Quand il fait du soleil, je mets mes lunettes de soleil.</i> — me pongo las gafas de sol.</li></ul><p><b>Quand</b> significa «cuando». <b>Je mets</b> significa «me pongo».</p>`,
      svg("Ropa según el tiempo: con sol, camiseta y gafas; con frío, abrigo, gorro y bufanda", `${sol(46, 44, 12)}${persona(46, 92, SO)}${t(46, 150, "short, tee-shirt", { s: 10, c: SO })}<path d="M130 20 V 160" stroke="var(--line)" stroke-width="2"/>${nieve(206, 40)}${persona(206, 92, AZ)}<rect x="196" y="84" width="20" height="8" rx="3" fill="${RO}"/><path d="M199 104 h 14" stroke="${RO}" stroke-width="4"/>${t(206, 150, "manteau, bonnet", { s: 10, c: AZ })}${t(206, 164, "écharpe, gants", { s: 10, c: AZ })}`)],
    ["El parte del tiempo", `<p>En la tele francesa, el hombre o la mujer del tiempo presenta <b>la météo</b>. Fíjate en este parte inventado:</p><p><i>Bonjour ! Voici la météo pour demain. Dans le nord, il pleut et il fait froid : 8 degrés. À Paris, il y a des nuages. Dans le sud, il fait beau et chaud : 22 degrés. Bonne journée !</i></p><p>Palabras útiles: <b>demain</b> (mañana), <b>aujourd'hui</b> (hoy), <b>le nord</b> (el norte), <b>le sud</b> (el sur), <b>les degrés</b> (los grados).</p><p>¡Intenta presentar tú el tiempo de tu ciudad con un mapa dibujado!</p>`,
      svg("Mapa del tiempo inventado: lluvia en el norte, nubes en el centro y sol en el sur", `<path d="M70 30 L 160 22 L 210 60 L 196 120 L 140 156 L 70 140 L 44 90 Z" fill="${VE}" fill-opacity=".14" stroke="${VE}" stroke-width="2"/>${lluvia(120, 46)}${t(176, 46, "8°", { s: 13, c: AG })}${nube(110, 96)}${sol(148, 130, 11)}${t(186, 136, "22°", { s: 13, c: RO })}${t(30, 24, "nord", { s: 10, c: "var(--muted)" })}${t(36, 166, "sud", { s: 10, c: "var(--muted)" })}`)],
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
