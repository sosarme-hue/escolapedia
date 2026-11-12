// Francés 3º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "3-eso",
  titulo: "La nourriture et les courses",
  minutos: 55,
  objetivos: ["Nombrar alimentos y comidas del día", "Usar los artículos partitivos du, de la, de l', des", "Hacer la compra: pedir, preguntar el precio y expresar cantidades"],
  claves: ["la nourriture", "le petit-déjeuner", "le déjeuner", "le dîner", "du / de la / de l'", "pas de", "un kilo de", "je voudrais", "c'est combien ?", "les courses"],
  pregunta: {
    texto: "En español decimos «Quiero pan» sin artículo. ¿Por qué en francés hay que decir «Je veux du pain»?",
    respuesta: "Porque el francés casi nunca deja un nombre sin determinante. Cuando hablamos de una <b>cantidad indeterminada</b> de algo que no se cuenta (pan, agua, queso), se usa el <mark>artículo partitivo</mark>: <i>du pain</i>, <i>de l'eau</i>, <i>du fromage</i>. Es como decir «un poco de pan».",
  },
  bloques: [
    {
      html: `<h3>Los alimentos</h3><p>Algunos alimentos básicos: <b>le pain</b> (pan), <b>le lait</b> (leche), <b>le fromage</b> (queso), <b>la viande</b> (carne), <b>le poisson</b> (pescado), <b>le poulet</b> (pollo), <b>les œufs</b> (huevos), <b>le riz</b> (arroz), <b>les pâtes</b> (pasta), <b>les légumes</b> (verduras) y <b>les fruits</b>. Frutas: <i>la pomme</i>, <i>la banane</i>, <i>l'orange</i>, <i>la fraise</i>. Verduras: <i>la tomate</i>, <i>la carotte</i>, <i>la salade</i> y <mark>la pomme de terre</mark> (patata, literalmente «manzana de tierra»).</p>`,
      svg: L.filas("Grupos de alimentos", [
        ["Lácteos", "le lait, le fromage, le yaourt", "var(--inf)"],
        ["Proteínas", "la viande, le poisson, les œufs", "var(--red)"],
        ["Frutas", "la pomme, la banane, la fraise", "var(--leaf)"],
        ["Verduras", "la tomate, la carotte", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Las comidas del día</h3><p>En Francia se hacen cuatro comidas: <b>le petit-déjeuner</b> (desayuno), a menudo con <i>tartines</i> (pan con mantequilla y mermelada) o cereales; <b>le déjeuner</b> (comida, hacia las 12-13 h); <b>le goûter</b> (merienda, hacia las 16 h, sobre todo para niños) y <b>le dîner</b> (cena, hacia las 19-20 h, antes que en España). Los verbos correspondientes son <mark>prendre le petit-déjeuner</mark>, <i>déjeuner</i>, <i>goûter</i> y <i>dîner</i>.</p>`,
      svg: L.linea("Las comidas en Francia", [
        ["7 h", "le petit-déjeuner", "var(--pen)"],
        ["12 h", "le déjeuner", "var(--leaf)"],
        ["16 h", "le goûter", "var(--red)"],
        ["19 h", "le dîner", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Los artículos partitivos</h3><p>Para una cantidad indeterminada se usa el <b>partitivo</b>: <mark>du</mark> (masculino: <i>du pain</i>), <mark>de la</mark> (femenino: <i>de la confiture</i>), <mark>de l'</mark> (delante de vocal: <i>de l'eau</i>) y <mark>des</mark> (plural: <i>des pâtes</i>). Para hablar de algo en general (con los verbos de gusto) se usa el artículo definido: <i>J'aime <b>le</b> chocolat</i>, pero <i>Je mange <b>du</b> chocolat</i>.</p>`,
      svg: L.filas("Artículos partitivos", [
        ["du", "du pain, du fromage", "var(--pen)"],
        ["de la", "de la viande, de la soupe", "var(--red)"],
        ["de l'", "de l'eau, de l'huile", "var(--leaf)"],
        ["des", "des pâtes, des fruits", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Partitivo en negativa y cantidades</h3><p>En la <b>negación</b>, todos los partitivos se convierten en <mark>de</mark> (o <i>d'</i> delante de vocal): <i>Je ne mange pas <b>de</b> viande</i>, <i>Il n'y a plus <b>d'</b>eau</i>. Lo mismo ocurre detrás de las <b>cantidades</b>: <i>un kilo <b>de</b> pommes</i>, <i>une bouteille <b>d'</b>eau</i>, <i>un paquet <b>de</b> riz</i>, <i>beaucoup <b>de</b> sucre</i>, <i>un peu <b>de</b> sel</i>.</p>`,
      svg: L.filas("Cuando todo se convierte en de", [
        ["Negación", "pas de viande", "var(--red)"],
        ["Cantidad", "un kilo de pommes", "var(--pen)"],
        ["Envase", "une bouteille d'eau", "var(--leaf)"],
        ["Adverbio", "beaucoup de sucre", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Hacer la compra</h3><p>En una tienda, el vendedor dice <i>Bonjour ! Vous désirez ?</i> y tú pides con educación: <mark>Je voudrais</mark> un kilo de tomates, s'il vous plaît. Para preguntar el precio: <i>C'est combien ?</i> o <i>Ça coûte combien ?</i> El vendedor responde <i>Ça fait cinq euros</i>. Si quiere saber si necesitas algo más, pregunta <i>Et avec ceci ?</i> y tú contestas <i>C'est tout, merci</i>.</p>`,
      svg: L.dialogo("En el mercado", [
        ["Vendeur", "Bonjour ! Vous désirez ?", "var(--pen)"],
        ["Cliente", "Je voudrais un kilo de pommes.", "var(--red)"],
        ["Vendeur", "Voilà. Ça fait deux euros.", "var(--pen)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Qué artículo uso?",
    svg: L.columnas("Artículos con los alimentos", [
      ["en general (gustos)", "LE / LA", ["J'aime le", "chocolat."], "var(--pen)"],
      ["una cantidad", "DU / DE LA", ["Je mange du", "chocolat."], "var(--red)"],
      ["negación o cantidad", "DE / D'", ["pas de chocolat,", "un peu de chocolat"], "var(--leaf)"],
    ]),
  },
  video: { id: "lodXbEIPM7A", titulo: "French lesson 28: food vocabulary (nourriture, aliments)", canal: "YouLearnFrench", vistas: 972013, megusta: 0, busqueda: "la nourriture en français" },
  quiz: [
    { q: "«La pomme de terre» es…", o: ["la patata", "la manzana", "el tomate"], a: 0, e: "Manzana de tierra." },
    { q: "«Bebo agua»:", o: ["Je bois de l'eau.", "Je bois l'eau.", "Je bois d'eau."], a: 0, e: "Partitivo delante de vocal." },
    { q: "«No como carne»:", o: ["Je ne mange pas de viande.", "Je ne mange pas de la viande.", "Je mange pas viande."], a: 0, e: "Negación: de." },
    { q: "«Un kilo de manzanas»:", o: ["un kilo de pommes", "un kilo des pommes", "un kilo pommes"], a: 0, e: "Cantidad + de." },
    { q: "Para pedir con educación:", o: ["Je voudrais…", "Je veux !", "Donne-moi…"], a: 0, e: "Condicional de cortesía." },
  ],
  examen: [
    { q: "La merienda en francés:", o: ["le goûter", "le dîner", "le déjeuner"], a: 0, e: "Hacia las 16 h." },
    { q: "«Me gusta el queso»:", o: ["J'aime le fromage.", "J'aime du fromage.", "J'aime de fromage."], a: 0, e: "Gustos: artículo definido." },
    { q: "«¿Cuánto es?»:", o: ["C'est combien ?", "C'est quand ?", "C'est comment ?"], a: 0, e: "Combien = cuánto." },
  ],
  feynman: ["Diez alimentos en francés", "Las cuatro comidas del día en Francia", "Cuándo usar du, de la, de l' y des", "Por qué decimos pas de y un kilo de"],
  mapa: mapa("NOURRITURE", "var(--eso)", [
    ["Alimentos", "pain · lait · fromage", "var(--leaf)"],
    ["Comidas", "petit-déj · déjeuner · dîner", "var(--pen)"],
    ["Partitivos", "du · de la · de l' · des", "var(--red)"],
    ["Compras", "je voudrais · c'est combien ?", "var(--inf)"],
  ]),
  tarjetas: [
    ["Partitivos", "du (masc.), de la (fem.), de l' (vocal), des (plural)."],
    ["Negación + partitivo", "Se convierte en de: je ne bois pas de lait."],
    ["Cantidades", "un kilo de, une bouteille de, beaucoup de, un peu de."],
    ["Je voudrais", "Forma educada de pedir: je voudrais un croissant, s'il vous plaît."],
    ["Le goûter", "La merienda, hacia las cuatro de la tarde."],
  ],
  familias: ["Haced juntos la lista de la compra de la semana en francés.", "En la cocina, jugad a nombrar en francés todo lo que hay en la nevera con du, de la o des.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: alimentación, hábitos y compras; artículos partitivos, expresiones de cantidad, condicional de cortesía (RD 217/2022, Segunda Lengua Extranjera 3º; nivel A1-A2 del MCER).",
    ideas: ["Mercado simulado en el aula con precios en euros.", "Comparar un día de comidas en Francia y en España.", "Escribir y presentar una receta sencilla en francés."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 70,
  objetivos: ["Conjugar manger, boire y prendre", "Entender una receta sencilla"],
  bloques: [
    { tras: "Las comidas del día", html: `<h3>Los verbos de la comida</h3><p>Para hablar de lo que comes y bebes necesitas tres verbos básicos:</p>${L.tb(["Persona", "manger", "boire", "prendre"], [["je", "mange", "bois", "prends"], ["tu", "manges", "bois", "prends"], ["il / elle / on", "mange", "boit", "prend"], ["nous", "mangeons", "buvons", "prenons"], ["vous", "mangez", "buvez", "prenez"], ["ils / elles", "mangent", "boivent", "prennent"]])}<p><i>Manger</i> es regular, pero conserva la <i>e</i> en <i>nous mangeons</i> para que la <i>g</i> suene suave. <i>Boire</i> y <i>prendre</i> son <mark>irregulares</mark>. <i>Prendre</i> se usa mucho con las comidas: <i>Je prends un croissant</i> (tomo un cruasán), <i>Qu'est-ce que tu prends ?</i></p>` },
    { tras: "Partitivo en negativa y cantidades", html: `<h3>Envases y medidas</h3><p>Al hacer la compra se usan muchas expresiones de cantidad, todas seguidas de <b>de</b>:</p>${L.tb(["Expresión", "Ejemplo"], [["un kilo de / un demi-kilo de", "un kilo d'oranges"], ["cent grammes de", "cent grammes de jambon"], ["un litre de", "un litre de lait"], ["une bouteille de", "une bouteille d'eau"], ["une boîte de", "une boîte de thon (lata de atún)"], ["un paquet de", "un paquet de biscuits"], ["une tranche de", "une tranche de jambon (loncha)"], ["une douzaine de", "une douzaine d'œufs"]])}<p>Y para cantidades sin número: <i>beaucoup de</i> (mucho), <i>un peu de</i> (un poco), <i>assez de</i> (bastante), <i>trop de</i> (demasiado). Por ejemplo: <i>Il y a trop de sucre dans ce gâteau !</i> Recuerda que delante de vocal, <i>de</i> se convierte en <mark>d'</mark>.</p>` },
    { tras: "Hacer la compra", html: `<h3>Los precios y el euro</h3><p>En Francia, como en España, se paga en <b>euros</b> y <b>céntimos</b> (<i>centimes</i>). Los precios se dicen así: <i>2,50 €</i> = <i>deux euros cinquante</i>; <i>0,80 €</i> = <i>quatre-vingts centimes</i>; <i>12,99 €</i> = <i>douze euros quatre-vingt-dix-neuf</i>. Fíjate en que en francés, igual que en español, los decimales se separan con <mark>coma</mark>.</p><p>Frases útiles al pagar: <i>Je peux payer par carte ?</i> (¿puedo pagar con tarjeta?), <i>Je paie en espèces</i> (pago en efectivo), <i>Voici votre monnaie</i> (aquí tiene el cambio), <i>C'est cher !</i> (¡es caro!), <i>C'est pas cher</i> (es barato, coloquial). Y los precios de los productos frescos suelen indicarse por kilo: <i>3 € le kilo</i>.</p>` },
    { tras: "Hacer la compra", html: `<h3>Una receta sencilla: la crêpe</h3><p>Las recetas usan el <b>imperativo</b> con <i>vous</i> o el <b>infinitivo</b>. Mira esta receta de crêpes:</p><p><b>Ingrédients</b> : 250 g de farine, 4 œufs, un demi-litre de lait, une pincée de sel, un peu de beurre.</p><ol><li><i>Mettez la farine dans un saladier.</i></li><li><i>Ajoutez les œufs et mélangez.</i></li><li><i>Versez le lait petit à petit.</i></li><li><i>Faites chauffer un peu de beurre dans une poêle.</i></li><li><i>Versez une louche de pâte et faites cuire une minute de chaque côté.</i></li></ol><p>Vocabulario: <i>la farine</i> (harina), <i>le beurre</i> (mantequilla), <i>le saladier</i> (bol), <i>la poêle</i> (sartén), <i>la louche</i> (cucharón). Las crêpes son típicas de <mark>Bretaña</mark> y se comen el 2 de febrero, el día de la <i>Chandeleur</i>.</p>` },
    { tras: "Los alimentos", html: `<h3>Comer sano y la cultura gastronómica</h3><p>Para hablar de hábitos saludables: <i>Il faut manger des fruits et des légumes</i> (hay que comer fruta y verdura), <i>Il ne faut pas manger trop de sucre</i>, <i>Je bois beaucoup d'eau</i>. Expresiones útiles: <i>avoir faim</i> (tener hambre), <i>avoir soif</i> (tener sed), <i>C'est bon !</i> / <i>C'est délicieux !</i> / <i>Beurk !</i> (¡puaj!).</p><p>La gastronomía es muy importante en la cultura francesa: la comida gastronómica de los franceses fue declarada <mark>Patrimonio Cultural Inmaterial</mark> por la UNESCO en 2010. Platos típicos: <i>la baguette</i>, <i>le croissant</i>, <i>la quiche lorraine</i>, <i>la ratatouille</i>, <i>le croque-monsieur</i> y cientos de quesos. En el comedor escolar (<i>la cantine</i>) suele haber entrante, plato principal, queso o yogur y postre.</p>` },
  ],
  videos: [
    ["Los artículos partitivos", L.vid("NlILOIhXB8w", "Du, de la, des: los artículos partitivos en francés (clase 21)", "Clases de Francés Fácil con Nelson", 297567)],
    ["Hacer la compra", L.vid("_I82BV17R4M", "Hacer la compra en el supermercado en Francia: el vocabulario esencial", "Guillaume Posé - Professeur de français", 169327)],
  ],
  ejemplos: [
    ["Completa: «Au petit-déjeuner, je mange ___ pain avec ___ confiture et je bois ___ lait.»", ["Pain es masculino → du.", "Confiture es femenino → de la.", "Lait es masculino → du."], "Je mange du pain avec de la confiture et je bois du lait."],
    ["Pon en negativa: «Je mange des pâtes et de la viande.»", ["En negativa, des → de.", "De la → de.", "Se repite «pas de» o se une con ni."], "Je ne mange pas de pâtes ni de viande."],
    ["Pide en una panadería dos baguettes y pregunta el precio.", ["Saludo: Bonjour !", "Pedir: Je voudrais deux baguettes, s'il vous plaît.", "Precio: C'est combien ?"], "Bonjour ! Je voudrais deux baguettes, s'il vous plaît. C'est combien ?"],
  ],
  errores: [
    "Omitir el partitivo: *je mange pain → je mange du pain.",
    "Mantener el partitivo en negativa: *je ne bois pas du lait → pas de lait.",
    "Usar el partitivo con los verbos de gusto: *j'aime du fromage → j'aime le fromage.",
    "Escribir *un kilo des pommes: tras una cantidad va de.",
    "Conjugar *nous mangons: la forma correcta es nous mangeons.",
  ],
  ejercicios: [
    ["Traduce: el pan, la leche, el queso, los huevos.", "le pain, le lait, le fromage, les œufs."],
    ["Escribe las cuatro comidas del día en francés.", "le petit-déjeuner, le déjeuner, le goûter, le dîner."],
    ["Completa con partitivos: ___ eau, ___ riz, ___ salade, ___ fruits.", "de l'eau, du riz, de la salade, des fruits."],
    ["Pon en negativa: «Il y a du sucre.»", "Il n'y a pas de sucre."],
    ["Completa: une bouteille ___ eau, un paquet ___ chips.", "une bouteille d'eau, un paquet de chips."],
    ["Conjuga boire con je, nous e ils.", "je bois, nous buvons, ils boivent."],
    ["Escribe en letras: 3,50 €.", "trois euros cinquante."],
    ["Pide medio kilo de fresas con educación.", "Je voudrais un demi-kilo de fraises, s'il vous plaît."],
    ["Traduce: «Tengo hambre y tengo sed».", "J'ai faim et j'ai soif."],
    ["Escribe tu desayuno ideal en dos frases.", "Respuesta abierta. Ejemplo: Je mange des tartines avec du beurre et de la confiture. Je bois un jus d'orange."],
  ],
  quiz: [
    ["«Nous ___ de l'eau.» (boire)", ["buvons", "boivons", "boirons"], 0, "Irregular."],
    ["«Une tranche de jambon» es…", ["una loncha de jamón", "una lata de jamón", "un kilo de jamón"], 0, "Tranche = loncha."],
    ["«Tengo sed»:", ["J'ai soif.", "Je suis soif.", "J'ai faim."], 0, "Avoir soif."],
    ["Las crêpes son típicas de…", ["Bretaña", "Alsacia", "Provenza"], 0, "La Chandeleur."],
    ["«Voici votre monnaie» significa…", ["aquí tiene el cambio", "su moneda es falsa", "pague, por favor"], 0, "Al pagar."],
  ],
  tarjetas: [
    ["Boire", "je bois, nous buvons, ils boivent."],
    ["Avoir faim / soif", "Tener hambre / tener sed."],
    ["Envases", "une bouteille de, une boîte de, un paquet de, une tranche de."],
  ],
});
