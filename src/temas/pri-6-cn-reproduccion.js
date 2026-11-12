// Ciencias de la Naturaleza 6º de Primaria: la reproducción humana. Dibujos propios en SVG, sencillos y respetuosos.
const { C, REV, svg, tit, tx, t, fl, cj, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, linea, fichas, vid, vgen, RD, PROF } = require("./_pri6b");

const ovulo = (x, y, r = 22) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fde68a" stroke="#d97706" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${r * 0.32}" fill="#f59e0b"/>`;
const esperma = (x, y, a = 0, c = "var(--pen)") => `<g transform="translate(${x} ${y}) rotate(${a})"><ellipse rx="5" ry="3.5" fill="${c}"/><path d="M-5 0 q-6 -4 -12 0 q-6 4 -12 0" stroke="${c}" stroke-width="1.5" fill="none"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La reproducción humana",
  minutos: 45,
  objetivos: ["Explicar para qué sirve la función de reproducción", "Conocer las células reproductoras y los aparatos reproductores", "Describir los cambios de la pubertad", "Entender la fecundación, el embarazo y el parto"],
  claves: ["reproducción", "gameto", "óvulo", "espermatozoide", "ovarios", "testículos", "pubertad", "menstruación", "fecundación", "cigoto", "embrión", "feto", "placenta", "parto"],
  pregunta: {
    texto: "Todos empezamos siendo una sola célula más pequeña que el punto de una «i». ¿Cómo llegamos a ser un bebé de unos 3 kilos en solo nueve meses?",
    respuesta: "Esa primera célula, el <mark>cigoto</mark>, se forma cuando un <b>óvulo</b> y un <b>espermatozoide</b> se unen. Enseguida empieza a dividirse en 2, 4, 8, 16 células… Mientras se multiplican, las células se van especializando y forman los tejidos y órganos. Dentro del útero, protegido y alimentado a través de la <b>placenta</b>, el bebé crece durante unos nueve meses hasta el <b>parto</b>.",
  },
  bloques: [
    {
      html: `<h3>La función de reproducción</h3><p>La <mark>reproducción</mark> es la función vital que permite a los seres vivos <b>tener descendientes</b> parecidos a ellos. A diferencia de la nutrición y la relación, no es necesaria para que cada persona viva, pero sí para que la <b>especie</b> continúe.</p><p>Los seres humanos tenemos <b>reproducción sexual</b>: hacen falta dos personas, una mujer y un hombre, que aportan cada una una célula especial. Por eso los hijos se parecen en parte a su madre y en parte a su padre, pero no son iguales a ninguno de los dos.</p><p>Las células especiales para la reproducción se llaman <mark>gametos</mark> o células sexuales. Se fabrican en unos órganos llamados <b>gónadas</b>: los <b>ovarios</b> en la mujer y los <b>testículos</b> en el hombre. Cada gameto lleva la mitad de la información genética necesaria para formar una persona.</p>`,
      svg: svg("Un gameto femenino y uno masculino se unen y forman una célula nueva con información de los dos", `${tit("Dos mitades, una persona nueva")}${ovulo(46, 90, 26)}${esperma(134, 90, 0)}${tx(46, 134, "óvulo", 80, { weight: 700, color: COL.sol })}${tx(46, 148, "de la madre", 80)}${tx(124, 134, "espermatozoide", 84, { weight: 700, color: COL.azul })}${tx(124, 148, "del padre", 80)}${fl(160, 90, 182, 90)}<circle cx="212" cy="90" r="22" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><circle cx="212" cy="90" r="8" fill="#be185d"/>${tx(212, 134, "cigoto", 70, { weight: 700, color: "#be185d" })}${tx(130, 164, "Cada gameto lleva la mitad de la información", 230)}`),
    },
    {
      html: `<h3>Las células reproductoras</h3><p>Los gametos son muy distintos entre sí:</p>${tabla(["", "Óvulo", "Espermatozoide"], [["Quién lo produce", "la mujer, en los ovarios", "el hombre, en los testículos"], ["Tamaño", "es la célula más grande del cuerpo: apenas se ve a simple vista", "muy pequeño: solo se ve con microscopio"], ["Forma", "redondo", "cabeza y una cola larga (flagelo)"], ["Movimiento", "no se mueve solo", "nada gracias a su cola"], ["Cantidad", "normalmente uno al mes", "millones cada día"]])}<p>El óvulo tiene <b>reservas de alimento</b> para las primeras divisiones de la nueva célula. El espermatozoide es como un pequeño nadador: en su cabeza lleva la información genética y su cola lo impulsa.</p>`,
      svg: svg("Óvulo grande y redondo junto a varios espermatozoides pequeños con cola", `${tit("Óvulo y espermatozoides")}${ovulo(80, 96, 46)}${esperma(168, 70, 190)}${esperma(196, 98, 175)}${esperma(176, 124, 160)}${esperma(214, 140, 185)}${et(80, 160, "óvulo: grande, quieto", 140, { size: 11, color: COL.sol })}${et(196, 168, "espermatozoides", 110, { size: 11, color: COL.azul })}`),
    },
    {
      html: `<h3>El aparato reproductor femenino</h3><p>El <mark>aparato reproductor femenino</mark> está dentro del abdomen, en la parte baja. Sus órganos son:</p><p>• Dos <b>ovarios</b>, del tamaño de una almendra. Producen los óvulos y unas sustancias llamadas <b>hormonas</b>.<br>• Dos <b>trompas de Falopio</b>, unos tubos finos que recogen el óvulo y lo llevan hacia el útero. Normalmente es aquí donde se produce la fecundación.<br>• El <b>útero</b> o matriz, un órgano hueco y musculoso con forma de pera del revés. Si hay embarazo, el bebé se desarrolla aquí. Sus paredes se estiran muchísimo durante el embarazo.<br>• La <b>vagina</b>, un conducto que comunica el útero con el exterior. Por ella sale el bebé en el parto.<br>• La <b>vulva</b>, la parte externa, que protege la entrada de la vagina.</p>`,
      svg: svg("Esquema del aparato reproductor femenino: ovarios, trompas, útero y vagina", `${tit("Aparato femenino")}<path d="M106 60 q24 -10 48 0 q8 34 -14 56 h-20 q-22 -22 -14 -56z" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><path d="M120 116 h20 v40 h-20z" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/><path d="M106 64 q-26 -14 -46 4 M154 64 q26 -14 46 4" stroke="#be185d" stroke-width="4" fill="none"/><ellipse cx="54" cy="82" rx="12" ry="8" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/><ellipse cx="206" cy="82" rx="12" ry="8" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
        ${et(54, 104, "ovario", 60, { size: 11, color: COL.sol })}${et(206, 104, "ovario", 60, { size: 11, color: COL.sol })}${et(80, 46, "trompa", 60, { size: 11, color: "#be185d" })}${et(130, 88, "útero", 50, { size: 11, color: "#be185d" })}${et(196, 146, "vagina", 70, { size: 11, color: "#be185d" })}<path d="M142 140 L170 144" stroke="var(--muted)"/>`),
    },
    {
      html: `<h3>El aparato reproductor masculino</h3><p>El <mark>aparato reproductor masculino</mark> tiene una parte interna y otra externa. Sus órganos son:</p><p>• Dos <b>testículos</b>, que producen los espermatozoides y hormonas. Están fuera del abdomen, dentro de una bolsa de piel llamada <b>escroto</b>, porque los espermatozoides necesitan una temperatura un poco más baja que la del resto del cuerpo.<br>• Los <b>conductos deferentes</b>, unos tubos que llevan los espermatozoides desde los testículos.<br>• Unas <b>glándulas</b> (las vesículas seminales y la próstata) que fabrican un líquido que alimenta y protege a los espermatozoides. Juntos forman el <b>semen</b>.<br>• La <b>uretra</b>, el conducto por el que sale el semen. En el hombre, por la uretra también sale la orina, aunque nunca a la vez.<br>• El <b>pene</b>, el órgano externo por el que pasa la uretra.</p>`,
      svg: svg("Esquema del aparato reproductor masculino: testículos, conductos deferentes, glándulas, uretra y pene", `${tit("Aparato masculino")}<circle cx="110" cy="140" r="14" fill="#bfdbfe" stroke="var(--pen)" stroke-width="2"/><circle cx="150" cy="140" r="14" fill="#bfdbfe" stroke="var(--pen)" stroke-width="2"/><path d="M110 126 q-16 -50 18 -64 M150 126 q16 -50 -18 -64" stroke="var(--pen)" stroke-width="3" fill="none"/><ellipse cx="130" cy="70" rx="14" ry="10" fill="#c7d2fe" stroke="#4338ca" stroke-width="1.5"/><path d="M130 80 V112" stroke="var(--sun)" stroke-width="5"/><rect x="122" y="108" width="16" height="22" rx="7" fill="#c7d2fe" stroke="#4338ca" stroke-width="1.5"/>
        ${et(56, 150, "testículos", 80, { size: 11, color: COL.azul })}<path d="M86 146 L96 142" stroke="var(--muted)"/>${et(60, 72, "conducto deferente", 100, { size: 10, color: COL.azul })}${et(204, 66, "glándulas", 80, { size: 11, color: "#4338ca" })}<path d="M170 66 L146 70" stroke="var(--muted)"/>${et(204, 100, "uretra", 70, { size: 11, color: COL.sol })}<path d="M180 100 L134 96" stroke="var(--muted)"/>${et(204, 124, "pene", 60, { size: 11, color: "#4338ca" })}<path d="M188 122 L140 120" stroke="var(--muted)"/>`),
    },
    {
      html: `<h3>La pubertad: el cuerpo cambia</h3><p>Los aparatos reproductores no funcionan desde que nacemos. Empiezan a hacerlo en la <mark>pubertad</mark>, la etapa en la que el cuerpo de niño o niña se va convirtiendo en el de una persona adulta. Suele empezar entre los <b>9 y los 14 años</b>, antes en las chicas, y cada persona tiene su propio ritmo: <b>todos los ritmos son normales</b>.</p><p>Los cambios los ponen en marcha las <b>hormonas</b>. En chicas y chicos: se crece mucho en poco tiempo (el «estirón»), aparece vello en las axilas y el pubis, aumenta el sudor y puede salir acné. En las chicas se desarrollan los pechos, se ensanchan las caderas y llega la primera <b>menstruación</b>. En los chicos se ensanchan los hombros, cambia la voz, que se vuelve más grave, y aparece barba.</p><p>También hay cambios en la forma de sentir y pensar: más necesidad de intimidad, cambios de humor y más interés por los amigos. Es buena idea hablar de todo esto con la familia.</p>`,
      svg: svg("Cambios de la pubertad comunes, en chicas y en chicos", `${tit("Cambios de la pubertad")}${filas([["Chicas y chicos", "estirón, vello, más sudor y a veces acné", COL.verde], ["Chicas", "pecho, caderas más anchas y menstruación", "#be185d"], ["Chicos", "hombros más anchos, voz grave y barba", COL.azul], ["Todos", "cada persona a su ritmo: todos son normales", COL.sol]], 46, 34, { x: 18, wa: 200, wb: 220, dos: true })}`),
      video: vid("QXUudxm0glw"),
    },
    {
      html: `<h3>El ciclo menstrual</h3><p>Desde la pubertad, el cuerpo de la mujer sigue un <mark>ciclo menstrual</mark> que dura unos <b>28 días</b> (puede variar entre 21 y 35, y al principio suele ser irregular). En él pasa esto:</p><p>1. Hacia la mitad del ciclo, uno de los ovarios libera un óvulo maduro. Es la <b>ovulación</b>.</p><p>2. Mientras tanto, la pared interior del útero se hace más gruesa y se llena de vasos sanguíneos, preparándose por si llega un embrión.</p><p>3. Si el óvulo no se fecunda, esa capa ya no se necesita: se desprende y sale por la vagina con un poco de sangre durante 3 a 7 días. Es la <mark>menstruación</mark> o regla.</p><p>Después empieza un ciclo nuevo. La menstruación es algo <b>natural y saludable</b>, y para ella se usan productos de higiene como compresas, tampones o copas menstruales. Si hay embarazo, la menstruación se detiene hasta después del parto.</p>`,
      svg: svg("Ciclo menstrual de unos 28 días: menstruación, el útero se prepara, ovulación hacia el día 14", `${tit("Un ciclo de unos 28 días")}<circle cx="130" cy="100" r="58" fill="none" stroke="var(--line)" stroke-width="14"/><path d="M130 42 A58 58 0 0 1 177 66" fill="none" stroke="var(--red)" stroke-width="14"/><path d="M177 66 A58 58 0 0 1 130 158" fill="none" stroke="#f9a8d4" stroke-width="14"/><circle cx="130" cy="158" r="9" fill="var(--sun)"/>${t(130, 96, "28", { size: 22, color: "#be185d" })}${t(130, 112, "días", { size: 11 })}${et(214, 50, "días 1 a 5:", 80, { size: 10, color: COL.rojo })}${tx(214, 62, "menstruación", 80)}${et(220, 110, "el útero", 70, { size: 10, color: "#be185d" })}${tx(220, 122, "se prepara", 70)}${et(56, 162, "día 14:", 80, { size: 10, color: COL.sol })}${tx(56, 174, "ovulación", 80)}`),
    },
    {
      html: `<h3>La fecundación</h3><p>La <mark>fecundación</mark> es la unión de un óvulo y un espermatozoide. Para que ocurra, los espermatozoides tienen que llegar hasta el óvulo, que está en una trompa de Falopio. Esto sucede tras una <b>relación sexual</b>, cuando el semen llega a la vagina; hoy también puede hacerse con ayuda médica en una clínica.</p><p>Millones de espermatozoides inician el viaje, pero solo unos pocos cientos llegan hasta el óvulo, y <b>solo uno</b> consigue entrar. En ese momento la cubierta del óvulo cambia y ya no deja pasar a ninguno más.</p><p>Al unirse, el óvulo y el espermatozoide forman una sola célula: el <mark>cigoto</mark>, que ya tiene toda la información genética de la nueva persona, la mitad de la madre y la mitad del padre.</p><p>A veces el cigoto se divide en dos y nacen <b>gemelos idénticos</b>. Si se fecundan dos óvulos distintos, nacen <b>mellizos</b>, que se parecen como dos hermanos cualquiera.</p>`,
      svg: svg("Muchos espermatozoides rodean un óvulo y solo uno entra para formar el cigoto", `${tit("Solo uno entra")}${ovulo(130, 100, 38)}${[[70, 60, 30], [64, 104, 0], [76, 146, -30], [190, 60, 150], [196, 104, 180], [186, 146, 210], [100, 52, 60]].map(([x, y, a]) => esperma(x, y, a)).join("")}${esperma(130, 68, 90, "var(--red)")}${tx(130, 172, "Cuando entra uno, el óvulo se cierra", 230, { weight: 700, color: COL.rojo })}`),
    },
    {
      html: `<h3>El embarazo</h3><p>El cigoto viaja por la trompa hasta el útero mientras se divide en 2, 4, 8 células… Unos siete días después se <b>implanta</b> en la pared del útero: empieza el <mark>embarazo</mark> o gestación, que dura unas <b>40 semanas</b> (unos nueve meses).</p><p>Durante los <b>tres primeros meses</b> se le llama <mark>embrión</mark>. En este tiempo se forman todos los órganos: el corazón empieza a latir hacia la sexta semana. A partir del tercer mes, cuando ya tiene forma humana, se le llama <mark>feto</mark>, y lo que hace sobre todo es crecer y madurar.</p><p>El bebé no come ni respira por sí mismo. Recibe el alimento y el oxígeno de la sangre de la madre a través de la <b>placenta</b>, un órgano que se forma en el útero y se une al bebé por el <b>cordón umbilical</b>. El bebé flota dentro de una bolsa llena de <b>líquido amniótico</b>, que lo protege de los golpes. Por eso la madre debe cuidar su alimentación y no fumar ni beber alcohol.</p>`,
      svg: svg("Feto dentro del útero unido a la placenta por el cordón umbilical y rodeado de líquido amniótico", `${tit("Dentro del útero")}<ellipse cx="120" cy="100" rx="78" ry="64" fill="#fce7f3" stroke="#be185d" stroke-width="3"/><ellipse cx="120" cy="100" rx="64" ry="52" fill="#bae6fd" fill-opacity=".6"/><path d="M168 54 q24 18 22 48" stroke="#9d174d" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M182 76 Q150 90 128 108" stroke="var(--red)" stroke-width="3" fill="none"/><circle cx="96" cy="84" r="20" fill="#f3c9a1"/><path d="M104 102 q30 6 26 30 q-6 16 -30 10 q-20 -6 -16 -26" fill="#f3c9a1"/>
        ${et(226, 56, "placenta", 66, { size: 11, color: "#9d174d" })}${et(226, 108, "cordón", 60, { size: 11, color: COL.rojo })}<path d="M204 106 L160 96" stroke="var(--muted)"/>${et(60, 174, "líquido amniótico", 110, { size: 10, color: COL.agua })}<path d="M60 164 L84 132" stroke="var(--muted)"/>${et(90, 66, "feto", 50, { size: 11, color: COL.marron })}`),
      video: vid("RKGi8bdf2Zs"),
    },
    {
      html: `<h3>El parto y los primeros cuidados</h3><p>Hacia la semana 40 llega el <mark>parto</mark>, el nacimiento del bebé. Tiene tres fases:</p><p>1. <b>Dilatación</b>: el útero se contrae con fuerza y de forma regular (son las contracciones) y la salida del útero se abre poco a poco. Suele romperse la bolsa de líquido amniótico («romper aguas»). Es la fase más larga: puede durar horas.</p><p>2. <b>Expulsión</b>: el bebé sale por la vagina, normalmente de cabeza. Al nacer respira por primera vez y llora. Se corta el cordón umbilical (la cicatriz que queda es el <b>ombligo</b>).</p><p>3. <b>Alumbramiento</b>: unos minutos después sale la placenta.</p><p>Cuando el parto natural no es posible, se hace una <b>cesárea</b>: una pequeña operación para sacar al bebé a través del abdomen. El recién nacido necesita muchos cuidados: alimento (leche materna o de biberón), higiene, sueño, vacunas y, sobre todo, mucho cariño.</p>`,
      svg: svg("Las tres fases del parto: dilatación, expulsión y alumbramiento", `${tit("Las fases del parto")}${columna([["1. Dilatación: contracciones", "#be185d"], ["2. Expulsión: nace el bebé", COL.azul], ["3. Alumbramiento: sale la placenta", "#9d174d"]], 130, 220, 40, 30, 14)}${tx(130, 168, "Después: leche, sueño, higiene y mucho cariño", 230)}`),
    },
  ],
  figura: {
    titulo: "La reproducción en ocho ideas",
    svg: rejilla([
      ["Gametos", "óvulo y espermatozoide", COL.sol],
      ["Ovarios", "producen óvulos", "#be185d"],
      ["Testículos", "producen espermatozoides", COL.azul],
      ["Pubertad", "de 9 a 14 años", COL.verde],
      ["Menstruación", "ciclo de unos 28 días", COL.rojo],
      ["Fecundación", "óvulo + espermatozoide", COL.morado],
      ["Embarazo", "unas 40 semanas", COL.agua],
      ["Parto", "dilatación, expulsión…", COL.naranja],
    ], 4, 86, "Resumen de la reproducción humana"),
  },
  video: vgen("mFrsphXEQAc", "aparato reproductor humano primaria"),
  ejemplos: [
    { enunciado: "Ordena estos momentos: feto, cigoto, parto, embrión, fecundación, implantación.",
      pasos: ["Primero, la fecundación forma el cigoto.", "El cigoto se divide y se implanta en el útero.", "Hasta el tercer mes es un embrión; después, un feto.", "Al final llega el parto."],
      resultado: "fecundación → cigoto → implantación → embrión → feto → parto." },
    { enunciado: "Un ciclo menstrual empieza el 1 de marzo y dura 28 días. ¿Cuándo empezará aproximadamente la siguiente regla? ¿Y cuándo será la ovulación?",
      pasos: ["El ciclo empieza el día 1 con la menstruación.", "Si dura 28 días, el siguiente empieza el día 29: el 29 de marzo.", "La ovulación ocurre hacia la mitad: el día 14, es decir, el 14 de marzo."],
      resultado: "La siguiente regla, hacia el 29 de marzo; la ovulación, hacia el 14 de marzo." },
    { enunciado: "Dos hermanas nacen el mismo día, pero una tiene el pelo rizado y otra liso. ¿Son gemelas o mellizas?",
      pasos: ["Los gemelos vienen de un solo cigoto y tienen la misma información genética: son casi idénticos.", "Si son distintas, vienen de dos óvulos fecundados por dos espermatozoides."],
      resultado: "Son mellizas." },
  ],
  errores: [
    "Pensar que la fecundación ocurre en el útero: normalmente ocurre en la trompa de Falopio.",
    "Creer que entran varios espermatozoides en el óvulo: solo entra uno.",
    "Pensar que todos los chicos y chicas cambian a la vez: cada persona tiene su ritmo.",
    "Decir que el bebé respira dentro del útero: recibe el oxígeno por la placenta y el cordón.",
    "Confundir embrión y feto: es embrión los tres primeros meses y feto después.",
  ],
  ejercicios: [
    { q: "¿Por qué la reproducción no es necesaria para vivir, pero sí para la especie?", sol: "Una persona puede vivir sin reproducirse, pero sin reproducción no habría nuevos individuos y la especie desaparecería." },
    { q: "Escribe tres diferencias entre el óvulo y el espermatozoide.", sol: "El óvulo es grande, redondo e inmóvil; el espermatozoide es pequeño, tiene cola y se mueve. (También: uno al mes frente a millones.)" },
    { q: "¿Dónde se producen los óvulos? ¿Y los espermatozoides?", sol: "Los óvulos, en los ovarios; los espermatozoides, en los testículos." },
    { q: "¿Para qué sirve el útero?", sol: "Es donde se implanta el embrión y se desarrolla el bebé durante el embarazo." },
    { q: "¿Por qué los testículos están fuera del abdomen?", sol: "Porque los espermatozoides necesitan una temperatura algo más baja que la del cuerpo." },
    { q: "Escribe dos cambios de la pubertad comunes a chicas y chicos y uno propio de cada uno.", sol: "Comunes: estirón y vello. Chicas: menstruación o desarrollo del pecho. Chicos: voz más grave o barba." },
    { q: "¿Qué es la ovulación? ¿Cuándo ocurre?", sol: "La salida de un óvulo maduro del ovario; hacia la mitad del ciclo, sobre el día 14." },
    { q: "Explica qué es el cigoto.", sol: "La primera célula de un nuevo ser, formada al unirse el óvulo y el espermatozoide." },
    { q: "¿Qué funciones tienen la placenta y el líquido amniótico?", sol: "La placenta pasa alimento y oxígeno de la madre al bebé; el líquido amniótico lo protege de golpes." },
    { q: "Nombra las tres fases del parto.", sol: "Dilatación, expulsión y alumbramiento." },
  ],
  quiz: [
    { q: "Las células reproductoras se llaman…", o: ["neuronas", "gametos", "glóbulos"], a: 1, e: "Gametos." },
    { q: "El óvulo se produce en…", o: ["el útero", "la vagina", "los ovarios"], a: 2, e: "En los ovarios." },
    { q: "El espermatozoide se mueve gracias a…", o: ["sus patas", "su cola", "la sangre"], a: 1, e: "Su cola o flagelo." },
    { q: "La pubertad suele empezar…", o: ["a los 3 años", "entre los 9 y los 14 años", "a los 30 años"], a: 1, e: "Entre 9 y 14 años, según cada persona." },
    { q: "El ciclo menstrual dura unos…", o: ["7 días", "28 días", "90 días"], a: 1, e: "Unos 28 días." },
    { q: "La fecundación ocurre normalmente en…", o: ["el estómago", "la trompa de Falopio", "la vejiga"], a: 1, e: "En la trompa." },
    { q: "¿Cuántos espermatozoides entran en el óvulo?", o: ["uno", "millones", "cien"], a: 0, e: "Solo uno." },
    { q: "El bebé recibe alimento a través de…", o: ["la piel", "la placenta y el cordón", "la boca"], a: 1, e: "La placenta y el cordón umbilical." },
    { q: "El embarazo dura unas…", o: ["10 semanas", "40 semanas", "100 semanas"], a: 1, e: "Unas 40 semanas." },
    { q: "La salida de la placenta tras el parto se llama…", o: ["alumbramiento", "expulsión", "dilatación"], a: 0, e: "Alumbramiento." },
  ],
  examen: [
    { q: "Hasta el tercer mes, el bebé se llama…", o: ["cigoto", "embrión", "feto"], a: 1, e: "Embrión." },
    { q: "Si un cigoto se divide en dos, nacen…", o: ["trillizos", "mellizos", "gemelos"], a: 2, e: "Gemelos idénticos." },
    { q: "La cicatriz del cordón umbilical es…", o: ["la rodilla", "el ombligo", "la nuca"], a: 1, e: "El ombligo." },
    { q: "La voz se vuelve más grave en la pubertad en…", o: ["los bebés", "nadie", "los chicos"], a: 2, e: "En los chicos." },
  ],
  feynman: ["Qué son los gametos y dónde se fabrican", "Qué cambios trae la pubertad y por qué cada persona tiene su ritmo", "Cómo se pasa del cigoto al bebé recién nacido"],
  mapa: mapa("REPRODUCCIÓN", "var(--pri)", [
    ["Gametos", "óvulo · espermatozoide", COL.sol],
    ["Aparatos", "femenino · masculino", "#be185d"],
    ["Pubertad", "hormonas · cambios · regla", COL.verde],
    ["Nueva vida", "fecundación · embarazo · parto", COL.azul],
  ], 260),
  tarjetas: [
    ["Gameto", "Célula reproductora: óvulo o espermatozoide."],
    ["Ovarios", "Órganos femeninos que producen óvulos y hormonas."],
    ["Testículos", "Órganos masculinos que producen espermatozoides."],
    ["Pubertad", "Etapa en que el cuerpo infantil se convierte en adulto."],
    ["Menstruación", "Salida de la capa del útero con un poco de sangre, cada mes."],
    ["Cigoto", "Primera célula de un nuevo ser, tras la fecundación."],
    ["Placenta", "Órgano que pasa alimento y oxígeno de la madre al bebé."],
    ["Parto", "Nacimiento: dilatación, expulsión y alumbramiento."],
  ],
  familias: ["Mirad juntos fotos de cuando vuestro hijo o hija era bebé y contad cómo fue su nacimiento.", "Dejad un espacio tranquilo para preguntas sobre la pubertad, sin prisas y con naturalidad.", "Medid la altura cada pocos meses y apuntadla para ver el «estirón».", "Hablad de la higiene en la pubertad: ducha diaria, desodorante y productos menstruales."],
  profesores: PROF("Ciencias de la Naturaleza: la función de reproducción; aparatos reproductores; cambios físicos y emocionales de la pubertad; ciclo menstrual; fecundación, embarazo y parto; respeto a la diversidad de ritmos de desarrollo", ["Buzón anónimo de preguntas sobre la pubertad para resolver en clase.", "Línea del tiempo del embarazo con el tamaño del bebé comparado con frutas.", "Coordinar la sesión con el plan de educación afectivo-sexual del centro e informar a las familias."]),
  fuentes: [RD, wiki("Aparato reproductor", "Aparato_reproductor"), wiki("Pubertad", "Pubertad"), { t: "Asociación Española de Pediatría, En Familia", url: "https://enfamilia.aeped.es/" }],
  revisado: REV,
};
