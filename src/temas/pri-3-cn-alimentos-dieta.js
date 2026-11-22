// Ciencias de la Naturaleza 3º de Primaria: los alimentos y la dieta. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, filas, fichas, barras, vid, vgen, RD, PROF, pez, tick, equis } = require("./_pri3b");

// Pirámide de alimentos en franjas: items de abajo arriba [[texto, color], ...].
function piramide(items, cx = 130, base = 164, alto = 128, ancho = 220) {
  const n = items.length, h = alto / n;
  return items.map(([s, c], i) => {
    const y1 = base - i * h, y0 = y1 - h;
    const w1 = ancho * (1 - i / n), w0 = ancho * (1 - (i + 1) / n);
    return `<path d="M${(cx - w1 / 2).toFixed(1)} ${y1.toFixed(1)} L${(cx + w1 / 2).toFixed(1)} ${y1.toFixed(1)} L${(cx + w0 / 2).toFixed(1)} ${y0.toFixed(1)} L${(cx - w0 / 2).toFixed(1)} ${y0.toFixed(1)}z" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="1.5"/>${s ? et(cx, y1 - h / 2 + 4, s, Math.max(30, (w1 + w0) / 2 - 16), { size: 10.5 }) : ""}`;
  }).join("");
}
// Manzana.
const manzana = (x, y, s = 1, c = "var(--red)") => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -10 q-14 -8 -16 6 q0 16 16 16 q16 0 16 -16 q-2 -14 -16 -6z" fill="${c}"/><path d="M0 -10 q1 -6 4 -9" stroke="${COL.marron}" stroke-width="2" fill="none"/><path d="M3 -15 q8 -4 10 2 q-6 2 -10 -2z" fill="var(--leaf)"/></g>`;
// Botella de agua.
const botella = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-8" y="-40" width="16" height="40" rx="5" fill="var(--water)" fill-opacity=".35" stroke="var(--pen)" stroke-width="1.5"/><rect x="-4" y="-48" width="8" height="8" fill="var(--pen)"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los alimentos y la dieta",
  minutos: 45,
  objetivos: ["Saber de dónde vienen los alimentos", "Conocer los grupos de alimentos y para qué sirve cada uno", "Entender qué es una dieta equilibrada y la pirámide de los alimentos", "Repartir bien las comidas del día", "Adquirir hábitos de higiene y de consumo responsable con los alimentos"],
  claves: ["alimento", "nutriente", "dieta", "dieta equilibrada", "pirámide de los alimentos", "proteínas", "hidratos de carbono", "grasas", "vitaminas", "agua", "desayuno", "etiqueta"],
  pregunta: {
    texto: "Si un día solo comieras patatas fritas y chucherías, tendrías la tripa llena. ¿Por qué entonces tus padres y tus profesores te dicen que eso no es comer bien?",
    respuesta: "Porque llenar la tripa no es lo mismo que <b>alimentarse bien</b>. Cada alimento aporta unas sustancias, los <mark>nutrientes</mark>, y el cuerpo necesita de todos los tipos: unos dan energía, otros sirven para crecer y otros nos protegen de enfermedades. Las chucherías aportan mucho azúcar y casi nada más. Para estar sano hay que comer <b>variado</b>: es la <mark>dieta equilibrada</mark>.",
  },
  bloques: [
    {
      html: `<h3>¿Por qué necesitamos comer?</h3><p>Nuestro cuerpo es como una máquina que nunca se apaga. Para funcionar necesita <b>energía</b> y <b>materiales</b>, y los consigue de los <mark>alimentos</mark>.</p><p>Los alimentos nos sirven para tres cosas:</p><p>• Darnos <b>energía</b> para movernos, jugar, pensar, estudiar y mantener el cuerpo caliente.<br>• Darnos <b>materiales</b> para <b>crecer</b> y para reparar lo que se estropea, por ejemplo, cuando nos hacemos una herida.<br>• Ayudarnos a estar <b>sanos</b> y a defendernos de las enfermedades.</p><p>Dentro de los alimentos hay unas sustancias que el cuerpo aprovecha. Se llaman <mark>nutrientes</mark>. Cada alimento tiene unos nutrientes diferentes. Por ejemplo, la leche tiene mucho calcio para los huesos y el pan tiene mucha energía.</p><p>Comer no es lo mismo que <b>alimentarse bien</b>. Podemos comer mucho y estar mal alimentados si siempre tomamos lo mismo. Por eso es tan importante la variedad.</p>`,
      svg: svg("Los alimentos sirven para dar energía, crecer y estar sanos", `${tit("Comemos para…")}${fichas([["energía", "para moverse", COL.naranja], ["crecer", "y curarse", COL.rojo], ["salud", "defenderse", COL.verde]], 3, 70, 80)}`),
    },
    {
      html: `<h3>¿De dónde vienen los alimentos?</h3><p>Los alimentos que comemos tienen diferentes <b>orígenes</b>:</p><p>• De origen <mark>vegetal</mark>: vienen de las plantas. Las frutas, las verduras, las legumbres como las lentejas, los cereales como el trigo o el arroz, los frutos secos y el aceite de oliva.<br>• De origen <mark>animal</mark>: vienen de los animales. La carne, el pescado, los huevos, la leche y la miel.<br>• De origen <mark>mineral</mark>: vienen de la tierra o del mar. El agua y la sal.</p><p>Muchos alimentos no se comen tal y como salen del campo o del mar, sino que se <b>elaboran</b> o transforman. Por ejemplo:</p><p>• Con el trigo se hace la harina, y con la harina, el pan y la pasta.<br>• Con la leche se hacen el queso, el yogur y la mantequilla.<br>• Con las aceitunas se hace el aceite.<br>• Con la uva se hace el zumo de uva.</p><p>Piensa en tu desayuno de hoy: ¿de dónde venía cada alimento?</p>`,
      svg: svg("Origen de los alimentos: vegetal, animal y mineral", `${tit("¿De dónde vienen?")}${manzana(46, 92, 1.4)}<g transform="translate(130 90)"><ellipse rx="20" ry="15" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="0" cy="2" rx="9" ry="7" fill="var(--sun)"/></g>${botella(214, 108, 1.3)}${et(46, 134, "vegetal", 70, { size: 12, color: COL.verde })}${et(130, 134, "animal", 70, { size: 12, color: COL.rojo })}${et(214, 134, "mineral", 70, { size: 12, color: COL.azul })}${tx(46, 152, "fruta, pan, aceite", 80)}${tx(130, 152, "huevo, leche, carne", 80)}${tx(214, 152, "agua, sal", 80)}`),
    },
    {
      html: `<h3>Los grupos de alimentos</h3><p>Según los nutrientes que tienen, los alimentos se agrupan así:</p><p>• Alimentos <mark>energéticos</mark>: nos dan energía. Tienen sobre todo <b>hidratos de carbono</b>, como el pan, la pasta, el arroz, las patatas y los cereales, y <b>grasas</b>, como el aceite, la mantequilla o los frutos secos.</p><p>• Alimentos <mark>constructores</mark>: nos ayudan a crecer y a formar músculos y huesos. Tienen muchas <b>proteínas</b>, como la carne, el pescado, los huevos, las legumbres y la leche. La leche y el queso tienen además <b>calcio</b> para los huesos y los dientes.</p><p>• Alimentos <mark>reguladores</mark>: hacen que el cuerpo funcione bien y nos protegen de las enfermedades. Tienen <b>vitaminas</b>, <b>minerales</b> y <b>fibra</b>, como las frutas y las verduras.</p><p>Y no hay que olvidar el <b>agua</b>: más de la mitad de nuestro cuerpo es agua, y la perdemos al sudar, al hacer pis y al respirar. Hay que beber agua a lo largo del día, mejor que zumos o refrescos.</p>`,
      svg: svg("Grupos de alimentos: energéticos, constructores y reguladores", `${tit("Tres grupos de alimentos")}${filas([["energéticos", "pan, pasta, arroz, aceite", COL.naranja], ["constructores", "carne, pescado, huevos, leche", COL.rojo], ["reguladores", "frutas y verduras", COL.verde], ["agua", "la bebida más sana", COL.agua]], 50, 32, { x: 18, wa: 90, wb: 220, dos: true })}`),
      video: vid("04OcYjc2kh0"),
    },
    {
      html: `<h3>La dieta equilibrada</h3><p>La <mark>dieta</mark> es el conjunto de alimentos que comemos cada día. No significa «comer poco para adelgazar»: todos tenemos una dieta.</p><p>Una <mark>dieta equilibrada</mark> es la que tiene <b>alimentos de todos los grupos</b>, en la <b>cantidad adecuada</b>. Así el cuerpo recibe todos los nutrientes que necesita. Sus normas principales son:</p><p>• Comer <b>variado</b>: no repetir siempre lo mismo.<br>• Tomar <b>fruta y verdura</b> todos los días, al menos cinco raciones entre las dos.<br>• Tomar <b>legumbres</b> varias veces por semana y <b>pescado</b> también.<br>• Usar <b>aceite de oliva</b>.<br>• Tomar <b>poca</b> bollería, chucherías, refrescos, fritos y comida rápida.<br>• Beber <b>agua</b>.</p><p>En España tenemos la <b>dieta mediterránea</b>, una de las más sanas del mundo: mucha fruta, verdura, legumbres, pescado, pan y aceite de oliva. Un buen plato tiene la <b>mitad</b> de verduras, un <b>cuarto</b> de cereales o patata y otro <b>cuarto</b> de proteínas.</p>`,
      svg: svg("Plato equilibrado: mitad verduras, un cuarto cereales y un cuarto proteínas", `${tit("El plato equilibrado")}<g transform="translate(96 104)"><circle r="58" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M0 0 L0 -50 A50 50 0 0 0 0 50z" fill="${COL.verde}" fill-opacity=".5"/><path d="M0 0 L0 -50 A50 50 0 0 1 50 0z" fill="${COL.naranja}" fill-opacity=".5"/><path d="M0 0 L50 0 A50 50 0 0 1 0 50z" fill="${COL.rojo}" fill-opacity=".45"/></g>${et(70, 108, "verdura", 46, { size: 10 })}${et(120, 84, "cereal", 40, { size: 9.5 })}${et(120, 128, "proteína", 40, { size: 9.5 })}${filas([["½", "verduras", COL.verde], ["¼", "pan, pasta, arroz", COL.naranja], ["¼", "carne o pescado", COL.rojo]], 60, 34, { x: 170, wa: 20, wb: 80, dos: true })}`),
    },
    {
      html: `<h3>La pirámide de los alimentos</h3><p>Para recordar cuánto debemos comer de cada alimento, se usa un dibujo con forma de <mark>pirámide</mark>. Los alimentos de abajo se comen <b>más a menudo</b> y los de arriba, <b>muy poco</b>.</p><p>• En la <b>base</b> está el <b>agua</b> y la <b>actividad física</b>: son lo más importante cada día.<br>• Después vienen los <b>cereales</b>, el pan, la pasta, el arroz y las patatas: varias veces al día.<br>• Luego las <b>frutas, las verduras y el aceite de oliva</b>: todos los días, en cada comida.<br>• Más arriba, la <b>leche</b> y sus derivados, y después el <b>pescado, la carne, los huevos y las legumbres</b>: cada día o varias veces por semana, en cantidades moderadas.<br>• En la <b>punta</b>, los dulces, los refrescos, los embutidos y la bollería: solo <b>de vez en cuando</b>.</p><p>La pirámide no prohíbe nada: un trozo de tarta en un cumpleaños está bien. Lo importante es lo que comemos <b>casi todos los días</b>.</p>`,
      svg: svg("Pirámide de los alimentos: abajo agua y cereales, arriba dulces", `${tit("La pirámide de los alimentos")}${piramide([["agua y ejercicio", COL.agua], ["pan, pasta, arroz", COL.naranja], ["fruta y verdura", COL.verde], ["leche y carne", COL.rojo], ["", COL.morado]], 130, 166, 132, 236)}${fl(184, 54, 148, 54, COL.morado, 1.5)}${et(222, 56, "dulces: poco", 70, { size: 10.5, color: COL.morado })}`),
      video: vid("GTqnk_kqmwU"),
    },
    {
      html: `<h3>Las comidas del día</h3><p>Es mejor repartir los alimentos en <b>cinco comidas</b> a lo largo del día, que comer mucho de una vez:</p><p>• El <mark>desayuno</mark>: es muy importante, porque llevamos muchas horas sin comer. Un buen desayuno tiene un <b>lácteo</b> (leche o yogur), un <b>cereal</b> (pan o cereales sin mucho azúcar) y una <b>fruta</b>.<br>• El <b>almuerzo</b> de media mañana: algo ligero, como una fruta o un bocadillo pequeño.<br>• La <b>comida</b>: la más completa, con un primer plato, un segundo plato y fruta de postre.<br>• La <b>merienda</b>: un bocadillo, fruta o un yogur.<br>• La <b>cena</b>: más ligera que la comida, y un rato antes de irse a dormir.</p><p>Comer a horas regulares, sentados a la mesa y sin pantallas, ayuda a que el cuerpo digiera bien. Además, comer en familia es un buen momento para charlar y contar cómo ha ido el día.</p>`,
      svg: svg("Las cinco comidas del día en barras: más fuerte la comida y el desayuno", `${tit("Cinco comidas al día")}${barras([["desayuno", 25, COL.sol], ["almuerzo", 10, COL.verde], ["comida", 35, COL.naranja], ["merienda", 10, COL.verde], ["cena", 20, COL.azul]], { unidad: "%", y0: 146, alto: 92 })}${tx(130, 172, "parte de la energía del día en cada comida", 236)}`),
    },
    {
      html: `<h3>Higiene y conservación de los alimentos</h3><p>Los alimentos también pueden estropearse o ensuciarse. Si comemos alimentos en mal estado, podemos ponernos enfermos. Por eso hay que seguir unas normas de <b>higiene</b>:</p><p>• <b>Lavarse las manos</b> con agua y jabón antes de comer y de cocinar.<br>• <b>Lavar bien</b> las frutas y las verduras antes de comerlas.<br>• No comer alimentos que huelan mal o tengan moho.<br>• Guardar en la <b>nevera</b> la leche, la carne o el pescado.</p><p>Para que los alimentos duren más se <b>conservan</b> de diferentes formas: en <b>frío</b> (nevera y congelador), en <b>latas</b> o botes cerrados (conservas), <b>secándolos</b> (legumbres, frutos secos) o con <b>sal</b> (jamón, bacalao).</p><p>En los envases hay una <mark>etiqueta</mark> que nos informa de los ingredientes y de la <b>fecha de caducidad</b>: después de esa fecha no hay que comer el alimento. ¡Aprende a mirarla cuando vayas al supermercado!</p>`,
      svg: svg("Normas de higiene: lavarse las manos, lavar la fruta, nevera y fecha de caducidad", `${tit("Higiene con los alimentos")}${fichas([["Manos limpias", "agua y jabón", COL.azul], ["Fruta lavada", "antes de comer", COL.verde], ["Nevera", "leche, carne, pescado", COL.agua], ["Caducidad", "mira la etiqueta", COL.rojo]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Consumo responsable</h3><p>Comer bien también es cuidar el planeta y no malgastar la comida. Algunas ideas para ser consumidores <b>responsables</b>:</p><p>• <b>No tirar comida</b>: servirnos solo lo que vamos a comer y aprovechar las sobras para otra comida.<br>• Comprar <b>alimentos de temporada</b>, que son los que da el campo en cada estación: en verano, sandía y melocotón; en invierno, naranjas y mandarinas.<br>• Elegir <b>productos de cerca</b>, que no tengan que viajar miles de kilómetros en camión o en avión.<br>• Usar <b>bolsas de tela</b> y evitar los envases de plástico innecesarios.<br>• Separar los restos para <b>reciclar</b>: orgánico, envases, papel y vidrio.</p><p>Hay muchas personas en el mundo que no tienen suficiente comida. Por eso, cuando vemos tirar alimentos en buen estado, desperdiciamos algo muy valioso.</p><p><b>Reto:</b> durante una semana, apunta qué fruta comes cada día. ¿Has llegado a una o dos piezas diarias?</p>`,
      svg: svg("Consumo responsable: no tirar comida, alimentos de temporada y de cerca, reciclar", `${tit("Comemos con responsabilidad")}${filas([["no tirar", "sírvete lo que vas a comer", COL.verde], ["temporada", "fruta de cada estación", COL.naranja], ["de cerca", "menos viajes y menos humo", COL.azul], ["reciclar", "separa los restos", COL.morado]], 52, 30, { x: 20, wa: 76, wb: 150 })}`),
    },
    {
      html: `<h3>¡Diseña tu menú!</h3><p>Ya sabes mucho sobre alimentación. Ahora vamos a <b>practicar</b> creando un menú equilibrado para un día.</p><p><b>Desayuno:</b> un vaso de leche, una tostada con aceite y tomate, y una mandarina.<br><b>Almuerzo:</b> un plátano.<br><b>Comida:</b> lentejas con verduras, filete de pollo con ensalada y una pera.<br><b>Merienda:</b> un bocadillo pequeño de queso.<br><b>Cena:</b> crema de calabacín, pescado a la plancha y un yogur.</p><p>Fíjate: hay alimentos de los <b>tres grupos</b> en el día, mucha fruta y verdura, legumbres, poca grasa y ningún refresco. Para beber, agua.</p><p>Ahora te toca a ti. Piensa en tus comidas favoritas y comprueba si tu menú tiene:</p><p>✔ Un lácteo, un cereal y una fruta en el desayuno.<br>✔ Verdura en la comida y en la cena.<br>✔ Al menos dos frutas en el día.<br>✔ Agua como bebida.<br>✔ Dulces solo de vez en cuando.</p>`,
      svg: svg("Comprobación de un menú equilibrado con marcas", `${tit("Mi menú equilibrado")}${filas([["desayuno", "lácteo + cereal + fruta", COL.sol], ["comida", "legumbre + pollo + pera", COL.naranja], ["merienda", "bocadillo de queso", COL.verde], ["cena", "verdura + pescado + yogur", COL.azul]], 52, 30, { x: 20, wa: 70, wb: 122 })}${tick(236, 60)}${tick(236, 90)}${tick(236, 120)}${tick(236, 150)}`),
    },
  ],
  figura: {
    titulo: "Los alimentos en ocho ideas",
    svg: rejilla([
      ["Nutrientes", "lo que aprovechamos", COL.azul],
      ["Origen", "vegetal, animal, mineral", COL.marron],
      ["Energéticos", "pan, pasta, aceite", COL.naranja],
      ["Constructores", "carne, huevo, leche", COL.rojo],
      ["Reguladores", "fruta y verdura", COL.verde],
      ["Agua", "la mejor bebida", COL.agua],
      ["Pirámide", "abajo más, arriba poco", COL.morado],
      ["Cinco comidas", "buen desayuno", COL.sol],
    ], 4, 86, "Resumen de los alimentos y la dieta"),
  },
  video: vgen("UOQ3h2z1JsY", "la pirámide de los alimentos para niños"),
  ejemplos: [
    { enunciado: "Clasifica según su origen: miel, lentejas, sal, queso, naranja.",
      pasos: ["Las lentejas y la naranja vienen de plantas: vegetal.", "La miel (abejas) y el queso (leche): animal.", "La sal: mineral."],
      resultado: "Vegetal: lentejas y naranja. Animal: miel y queso. Mineral: sal." },
    { enunciado: "Pablo desayuna un refresco y un bollo. ¿Cómo mejorarías su desayuno?",
      pasos: ["Le falta un lácteo: un vaso de leche o un yogur.", "El bollo se cambia por pan o cereales con poco azúcar.", "Le falta una fruta.", "El refresco tiene mucho azúcar: mejor agua o leche."],
      resultado: "Leche, una tostada y una fruta." },
    { enunciado: "Si comes 2 piezas de fruta y 3 raciones de verdura al día, ¿cuántas raciones de fruta y verdura tomas en una semana?",
      pasos: ["Cada día: 2 + 3 = 5 raciones.", "En 7 días: 5 × 7 = 35."],
      resultado: "35 raciones a la semana." },
  ],
  errores: [
    "Pensar que «dieta» significa comer poco: es todo lo que comemos.",
    "Creer que los zumos y los refrescos sustituyen al agua.",
    "Saltarse el desayuno: es una de las comidas más importantes.",
    "Pensar que la pirámide prohíbe los dulces: solo dice que se tomen de vez en cuando.",
  ],
  ejercicios: [
    { q: "¿Para qué sirven los alimentos? Escribe tres cosas.", sol: "Para tener energía, para crecer y reparar el cuerpo, y para estar sanos." },
    { q: "Escribe dos alimentos de origen vegetal, dos de origen animal y uno mineral.", sol: "Por ejemplo: vegetal, manzana y arroz; animal, huevo y leche; mineral, sal o agua." },
    { q: "¿Qué alimento se elabora con la leche? ¿Y con las aceitunas?", sol: "Con la leche, el queso o el yogur. Con las aceitunas, el aceite." },
    { q: "Clasifica en energéticos, constructores o reguladores: arroz, pescado, lechuga, aceite, huevo, naranja.", sol: "Energéticos: arroz y aceite. Constructores: pescado y huevo. Reguladores: lechuga y naranja." },
    { q: "¿Qué es una dieta equilibrada?", sol: "La que tiene alimentos de todos los grupos en la cantidad adecuada." },
    { q: "¿Qué alimentos están en la punta de la pirámide? ¿Por qué?", sol: "Los dulces, refrescos y bollería, porque solo hay que tomarlos de vez en cuando." },
    { q: "¿Qué debe tener un buen desayuno?", sol: "Un lácteo, un cereal y una fruta." },
    { q: "Escribe tres normas de higiene con los alimentos.", sol: "Lavarse las manos antes de comer, lavar la fruta y la verdura y guardar en la nevera los alimentos que se estropean." },
    { q: "¿Qué es la fecha de caducidad?", sol: "La fecha que aparece en la etiqueta a partir de la cual no hay que comer el alimento." },
    { q: "Escribe dos ideas para no desperdiciar comida.", sol: "Servirse solo lo que vas a comer y aprovechar las sobras (también comprar lo necesario)." },
  ],
  quiz: [
    { q: "Las sustancias de los alimentos que aprovecha el cuerpo son los…", o: ["nutrientes", "envases", "platos"], a: 0, e: "Los nutrientes." },
    { q: "La leche es de origen…", o: ["vegetal", "animal", "mineral"], a: 1, e: "Animal." },
    { q: "La sal es de origen…", o: ["mineral", "animal", "vegetal"], a: 0, e: "Mineral." },
    { q: "El pan y la pasta son alimentos…", o: ["energéticos", "reguladores", "minerales"], a: 0, e: "Dan energía." },
    { q: "Los alimentos que nos ayudan a crecer son los…", o: ["constructores", "dulces", "refrescos"], a: 0, e: "Constructores: carne, pescado, huevos, legumbres." },
    { q: "Las frutas y las verduras tienen muchas…", o: ["vitaminas", "grasas", "chucherías"], a: 0, e: "Vitaminas, minerales y fibra." },
    { q: "La mejor bebida es…", o: ["el refresco", "el agua", "el batido"], a: 1, e: "El agua." },
    { q: "En la punta de la pirámide están…", o: ["las verduras", "los dulces", "el agua"], a: 1, e: "Los dulces: de vez en cuando." },
    { q: "¿Cuántas comidas al día se recomiendan?", o: ["dos", "cinco", "ocho"], a: 1, e: "Cinco." },
    { q: "Antes de comer hay que…", o: ["lavarse las manos", "correr", "ver la tele"], a: 0, e: "Lavarse las manos." },
  ],
  examen: [
    { q: "La dieta mediterránea usa sobre todo aceite de…", o: ["oliva", "palma", "coco"], a: 0, e: "Aceite de oliva." },
    { q: "En un plato equilibrado, la mitad debe ser…", o: ["verdura", "carne", "patatas fritas"], a: 0, e: "Verdura." },
    { q: "El calcio de la leche es bueno para…", o: ["los huesos", "el pelo solo", "la vista"], a: 0, e: "Para huesos y dientes." },
    { q: "Comprar fruta de temporada significa…", o: ["la que da el campo en esa estación", "la más cara", "la de otro país"], a: 0, e: "La de cada estación." },
  ],
  feynman: ["Los tres grupos de alimentos y para qué sirven", "Cómo es una dieta equilibrada", "Qué debe tener un buen desayuno"],
  mapa: mapa("ALIMENTOS", "var(--pri)", [
    ["Origen", "vegetal · animal · mineral", COL.marron],
    ["Grupos", "energéticos · constructores · reguladores", COL.naranja],
    ["Dieta", "variada · pirámide · 5 comidas", COL.verde],
    ["Higiene", "manos · nevera · caducidad", COL.azul],
  ], 250),
  tarjetas: [
    ["Nutriente", "Sustancia de los alimentos que aprovecha el cuerpo."],
    ["Energéticos", "Dan energía: pan, pasta, arroz, aceite."],
    ["Constructores", "Ayudan a crecer: carne, pescado, huevo."],
    ["Reguladores", "Nos protegen: frutas y verduras."],
    ["Dieta equilibrada", "Alimentos de todos los grupos en su justa cantidad."],
    ["Pirámide", "Abajo lo que más se come; arriba, lo de vez en cuando."],
    ["Buen desayuno", "Lácteo + cereal + fruta."],
    ["Caducidad", "Fecha a partir de la cual no hay que comerlo."],
  ],
  familias: ["Preparad juntos el menú de un día con alimentos de todos los grupos.", "En el supermercado, buscad la fecha de caducidad y los ingredientes en tres etiquetas.", "Haced una tabla en la nevera para apuntar las frutas que come cada uno.", "Cocinad juntos una receta sencilla con legumbres o verduras."],
  profesores: PROF("Ciencias de la Naturaleza: alimentos y nutrientes; origen de los alimentos; grupos de alimentos; dieta equilibrada y mediterránea; pirámide de la alimentación; higiene, conservación y consumo responsable", ["Análisis de los desayunos de la clase con tabla de grupos.", "Lectura de etiquetas de envases reales (ingredientes y caducidad).", "Elaboración de un menú semanal equilibrado por equipos."]),
  fuentes: [RD, wiki("Dieta equilibrada", "Dieta equilibrada"), wiki("Dieta mediterránea", "Dieta mediterránea"), wiki("Pirámide alimenticia", "Pirámide alimenticia")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer para qué sirven algunas vitaminas y minerales", "Usar el plato saludable para preparar comidas", "Valorar el agua como la mejor bebida", "Descubrir comidas del mundo y el azúcar escondido"],
  lectura: { titulo: "La merienda misteriosa", html: `<p>Un lunes, la maestra de Hugo propuso un juego: cada niño traería una merienda misteriosa dentro de una bolsa de papel, y los demás tendrían que adivinar a qué grupo de alimentos pertenecía tocándola con los ojos cerrados.</p><p>Hugo metió la mano en la primera bolsa.</p><p>—Es redonda, suave y huele a… ¡mandarina! Es una fruta.</p><p>En la segunda bolsa había algo crujiente y alargado.</p><p>—¡Un palito de pan! Es un cereal, da energía.</p><p>La bolsa de Marta tenía un frasquito frío.</p><p>—Un yogur —adivinó Hugo—. Es un lácteo, tiene calcio para los huesos.</p><p>Entonces llegó la bolsa de Iván. Dentro había un paquete brillante y arrugado.</p><p>—Son… ¡galletas de chocolate con crema!</p><p>Todos se rieron, pero la maestra aprovechó para hacer una pregunta:</p><p>—¿Cuántos terrones de azúcar creéis que llevan estas galletas?</p><p>Leyeron juntos la etiqueta y lo calcularon. ¡Casi cinco terrones en un solo paquete!</p><p>Iván se quedó pensativo.</p><p>—Mañana traeré un bocadillo de queso —dijo—. Las galletas, mejor para un día de fiesta.</p><p>Y desde ese día, la clase de Hugo empezó a mirar las etiquetas antes de elegir merienda.</p>` },
  tras: {
    "Los grupos de alimentos": [
      ["Vitaminas y minerales", `<p>Además de energía, los alimentos nos dan unas sustancias que el cuerpo necesita en pequeñas cantidades: las <mark>vitaminas</mark> y los <mark>minerales</mark>.</p><ul><li>La <b>vitamina C</b> nos ayuda a defendernos de las enfermedades. La tienen las naranjas, los kiwis, las fresas y los pimientos.</li><li>La <b>vitamina A</b> cuida la vista y la piel. La tienen la zanahoria, la calabaza y el melón.</li><li>El <b>calcio</b> es un mineral que fortalece los huesos y los dientes. Lo tienen la leche, el yogur y el queso.</li><li>El <b>hierro</b> es un mineral que ayuda a la sangre a llevar el oxígeno. Lo tienen las lentejas, la carne y las espinacas.</li></ul><p>Ningún alimento tiene todas las vitaminas y minerales. Por eso es tan importante comer de todo y de muchos colores: cada color de fruta o verdura aporta cosas distintas.</p><p>Hace siglos, los marineros que pasaban meses en el mar sin comer fruta fresca se ponían muy enfermos. Descubrieron que llevar limones y naranjas en los barcos los curaba: ¡les faltaba vitamina C!</p>`,
        L6.filas("Vitaminas", [["vitamina C", "naranja, kiwi", cNA], ["vitamina A", "zanahoria", cRO], ["calcio", "leche, queso", cAZ], ["hierro", "lentejas", cMO]]), ["5DRr2otjce4", "¿Qué son las vitaminas y la sales minerales? - Alimentación saludable para niños", "Smile and Learn - Español", 622804]],
    ],
    "La dieta equilibrada": [
      ["El plato saludable", `<p>Una forma fácil de preparar una comida equilibrada es imaginar un <mark>plato saludable</mark> dividido en partes:</p><ul><li><b>La mitad del plato</b>: verduras, hortalizas y un poco de fruta. Cuantos más colores, mejor.</li><li><b>Un cuarto del plato</b>: cereales, mejor integrales, como arroz, pasta, pan o patata.</li><li><b>El otro cuarto</b>: proteínas, como legumbres, pescado, huevo, pollo o frutos secos.</li><li>Para beber, <b>agua</b>.</li><li>Para cocinar y aliñar, un poco de <b>aceite de oliva</b>.</li></ul><p>Por ejemplo, un plato con ensalada de tomate y lechuga, arroz y un filete de pescado sigue el modelo. En cambio, un plato de macarrones solos tiene demasiados cereales y le faltan verduras y proteínas.</p><p>No hace falta que todas las comidas sean perfectas. Lo importante es que, a lo largo del día y de la semana, haya equilibrio.</p>`,
        H6.rueda("Plato", "EQUILIBRIO", [["½ verdura", cVE], ["¼ cereales", cNA], ["¼ proteína", cRO], ["agua", cAZ]]), ["NDELJHAU2n8", "Alimentacion Saludable Para Niños con Tito Time | ¿Que es Mi Plato?", "Tito Time en Español", 168636]],
    ],
    "Las comidas del día": [
      ["El agua, la mejor bebida", `<p>Más de la mitad de nuestro cuerpo es <mark>agua</mark>. La perdemos al sudar, al respirar y al ir al baño, así que necesitamos beber todos los días.</p><ul><li>Un niño de tu edad necesita unos <b>5 o 6 vasos</b> de agua al día, además del agua que llevan la fruta, la sopa o la leche.</li><li>Hay que beber más cuando hace calor o cuando hacemos deporte.</li><li>La sed es un aviso del cuerpo: no esperes a tener mucha sed para beber.</li></ul><p>Los <b>refrescos</b> y muchos zumos envasados tienen mucho azúcar. Una lata de refresco puede llevar unos siete terrones. Por eso son bebidas para tomar solo de vez en cuando.</p><p>Una buena costumbre es llevar siempre una botella de agua reutilizable a clase y a las actividades deportivas. Así cuidas tu cuerpo y también reduces los envases de plástico.</p>`,
        H6.dos("Bebidas", ["CADA DÍA", ["agua", "leche", "fruta"], cAZ], ["A VECES", ["refrescos", "zumos envasados", "batidos"], cRO])],
    ],
  },
  final: [
    ["Comidas del mundo", `<p>En cada lugar del mundo se come de forma diferente, según los alimentos que da la tierra y las costumbres de la gente:</p><ul><li>En <b>Japón</b> se come mucho arroz y pescado, y se usan palillos.</li><li>En <b>México</b>, el maíz es muy importante: con él se hacen las tortillas.</li><li>En <b>Italia</b> son famosas la pasta y la pizza.</li><li>En <b>la India</b> se usan muchas especias, como la cúrcuma, y se comen muchas legumbres.</li><li>En <b>Marruecos</b> se prepara el cuscús, con sémola, verduras y garbanzos.</li></ul><p>Muchos alimentos que hoy comemos en España vinieron de lejos. El tomate, la patata, el maíz y el cacao llegaron de América hace unos 500 años. ¡Antes no había tortilla de patatas!</p><p>Conocer las comidas de otros países es una forma de aprender sobre otras culturas. Si en tu clase hay compañeros de otros lugares, podéis compartir recetas de vuestras familias.</p>`,
      L6.filas("Mundo", [["Japón", "arroz, pescado", cRO], ["México", "maíz", cNA], ["India", "especias", cVE], ["América", "tomate, patata", cAZ]])],
    ["El azúcar escondido", `<p>A veces comemos mucho más <mark>azúcar</mark> del que creemos, porque está <b>escondido</b> en alimentos que no parecen dulces o que parecen sanos.</p><ul><li>Un vaso de zumo envasado puede llevar unos 5 terrones.</li><li>Muchos cereales de desayuno, batidos y yogures de sabores llevan bastante azúcar añadido.</li><li>Incluso el kétchup y algunas salsas tienen azúcar.</li></ul><p><b>Cómo descubrirlo</b>: mira la etiqueta y busca la palabra «azúcares». Cada 4 gramos de azúcar equivalen más o menos a un terrón. Si la etiqueta dice 20 gramos, son unos 5 terrones.</p><p>El azúcar de más puede producir caries y, si se toma mucho durante años, problemas de salud. Los médicos recomiendan tomarlo poco.</p><p>El azúcar que lleva la fruta entera es diferente, porque va acompañado de fibra, agua y vitaminas. Por eso es mejor comerse una naranja que beberse un zumo de bote.</p>`,
      H6.flujo("Etiqueta", ["mira|etiqueta", "busca|azúcares", "4 g|1 terrón", "decide|bien"], cRO), ["v_cGnCNfrE8", "El azúcar: oculta a simple vista - Robert Lustig", "Sé Curioso — TED-Ed", 92702]],
  ],
  ejemplos: [
    ["Un batido tiene 24 g de azúcar. ¿Cuántos terrones son?", ["Cada 4 g es un terrón.", "24 : 4 = 6."], "Unos 6 terrones."],
    ["¿Qué falta en un plato de macarrones con tomate?", ["Tiene cereales y un poco de verdura.", "Faltan proteínas y más verduras."], "Proteínas (huevo, pescado…) y verduras."],
  ],
  errores: ["Pensar que todos los zumos son tan sanos como la fruta entera.", "Creer que solo hay que beber agua cuando se tiene mucha sed."],
  ejercicios: [
    ["b", "Di un alimento con vitamina C.", "Naranja, kiwi, fresa o pimiento."],
    ["b", "¿Qué mineral fortalece los huesos?", "El calcio."],
    ["b", "¿Qué parte del plato saludable ocupan las verduras?", "La mitad."],
    ["b", "¿Cuál es la mejor bebida?", "El agua."],
    ["b", "¿De qué continente llegó la patata?", "De América."],
    ["m", "¿Por qué enfermaban los marineros antiguos?", "Les faltaba vitamina C por no comer fruta fresca."],
    ["m", "¿Cuándo hay que beber más agua?", "Con calor o al hacer deporte."],
    ["m", "Una etiqueta dice 12 g de azúcar. ¿Cuántos terrones?", "Unos 3."],
    ["m", "Di un plato típico de México y de Marruecos.", "Tortillas de maíz; cuscús."],
    ["m", "¿Por qué es mejor una naranja que un zumo de bote?", "Tiene fibra, vitaminas y nada de azúcar añadido."],
    ["a", "Dibuja un plato saludable para tu cena.", "Respuesta abierta."],
    ["a", "Compara las etiquetas de dos cereales de desayuno.", "Respuesta abierta."],
    ["a", "Investiga una receta de otro país y explica sus ingredientes.", "Respuesta abierta."],
    ["a", "En la lectura, ¿qué decidió traer Iván al día siguiente?", "Un bocadillo de queso."],
  ],
  quiz: [
    ["El hierro lo tienen sobre todo…", ["las lentejas", "los caramelos", "el agua"], "Minerales."],
    ["En el plato saludable, un cuarto son…", ["proteínas", "dulces", "refrescos"], "Plato."],
    ["Un niño necesita al día unos…", ["5 o 6 vasos de agua", "2 vasos de agua", "15 vasos de agua"], "Agua."],
    ["El tomate llegó a Europa desde…", ["América", "Japón", "la India"], "Mundo."],
    ["Cada terrón de azúcar son unos…", ["4 gramos", "40 gramos", "1 kilo"], "Etiqueta."],
  ],
  examen: [
    ["En la lectura, ¿cuántos terrones llevaban las galletas?", ["casi cinco", "uno", "veinte"], "Lectura."],
    ["La vitamina A cuida sobre todo…", ["la vista y la piel", "las uñas", "el pelo"], "Vitaminas."],
  ],
  tarjetas: [
    ["Vitaminas y minerales", "Vitamina C, vitamina A, calcio y hierro: comer de colores."],
    ["Plato saludable", "Mitad verdura, un cuarto cereales, un cuarto proteína y agua."],
    ["El agua", "5 o 6 vasos al día; más con calor o deporte."],
    ["Azúcar escondido", "Mira «azúcares» en la etiqueta: 4 g son un terrón."],
  ],
  glosario: [
    ["Vitamina", "Sustancia que el cuerpo necesita en poca cantidad."],
    ["Mineral", "Sustancia como el calcio o el hierro."],
    ["Calcio", "Mineral de los huesos y los dientes."],
    ["Hierro", "Mineral que ayuda a la sangre."],
    ["Plato saludable", "Modelo para preparar comidas equilibradas."],
    ["Proteína", "Nutriente de la carne, el pescado, el huevo y las legumbres."],
    ["Integral", "Cereal que conserva su cáscara y tiene más fibra."],
    ["Hidratación", "Mantener el cuerpo con el agua que necesita."],
    ["Refresco", "Bebida con gas y normalmente mucho azúcar."],
    ["Azúcar añadido", "Azúcar que se pone al fabricar un alimento."],
    ["Terrón", "Cubito de azúcar de unos 4 gramos."],
    ["Especia", "Planta seca que da sabor, como la cúrcuma."],
  ],
  situacion: {
    titulo: "Detectives de la alimentación",
    reto: "La clase investiga sus meriendas y prepara una guía de comidas sanas para el colegio.",
    pasos: ["Clasificar las meriendas de una semana por grupos de alimentos.", "Leer las etiquetas y calcular los terrones de azúcar.", "Dibujar platos saludables para cada día.", "Compartir una receta de otro país o de la familia."],
    producto: "Una guía ilustrada de meriendas y platos saludables.",
    evaluacion: ["Reconoce vitaminas y minerales.", "Usa el plato saludable.", "Valora el agua.", "Descubre el azúcar escondido."],
  },
});
