// Filosofía 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, flujo } = require("./_hum");

module.exports = {
  materia: "Filosofía",
  curso: "4-eso",
  titulo: "La ética: el bien y la libertad",
  minutos: 60,
  objetivos: ["Distinguir ética y moral, y normas morales de otros tipos de normas", "Explicar por qué la libertad es la condición de la ética", "Comparar las grandes teorías éticas: virtud, utilitarismo y deber", "Analizar dilemas morales con argumentos"],
  claves: ["ética", "moral", "libertad", "responsabilidad", "virtud", "deber"],
  pregunta: {
    texto: "Encuentras una cartera con 300 € y el DNI de su dueño. Nadie te ha visto. ¿Qué haces? Y, sobre todo, ¿por qué?",
    respuesta: "Lo que hagas es una decisión <b>moral</b>; las razones que des para justificarla son <mark>ética</mark>. Unos dirán que devolverla hace a una persona honrada (virtud); otros, que produce más felicidad (utilitarismo); otros, que es nuestro deber, aunque nadie nos vea (Kant).",
  },
  bloques: [
    {
      html: `<h3>Ética y moral</h3><p>En el lenguaje diario se usan casi como sinónimos, pero en filosofía se distinguen. La <b>moral</b> es el conjunto de normas, valores y costumbres que una persona o una sociedad sigue para saber cómo actuar bien («no hay que mentir»). La <b>ética</b> es la <mark>reflexión filosófica sobre la moral</mark>: se pregunta por qué algo está bien o mal y si las normas que seguimos están justificadas. La moral responde a «¿qué hago?»; la ética, a «¿por qué debería hacerlo?».</p>`,
      svg: dos("Diferencia entre moral y ética", ["Moral", ["normas y valores", "práctica", "cada sociedad", "«no mientas»", "¿qué hago?"], "var(--sun)"], ["Ética", ["reflexión", "teórica", "busca lo universal", "«¿por qué no?»", "¿por qué?"], "var(--pen)"]),
    },
    {
      html: `<h3>Las normas morales</h3><p>Seguimos muchos tipos de normas. Las <b>jurídicas</b> (leyes) las impone el Estado y su incumplimiento tiene sanción. Las <b>sociales</b> o de cortesía (saludar, no hablar con la boca llena) las marca la costumbre y su castigo es el rechazo del grupo. Las <b>morales</b> nacen de la propia <mark>conciencia</mark>: las cumplimos porque creemos que es lo correcto, y su «sanción» es el remordimiento. A veces chocan: algo puede ser legal y parecernos inmoral, o al revés.</p>`,
      svg: filas("Tipos de normas", [["Jurídicas", "Estado · multa o cárcel", "var(--red)"], ["Sociales", "costumbre · rechazo", "var(--sun)"], ["Morales", "conciencia · remordimiento", "var(--pen)"], ["Religiosas", "creencia · pecado", "var(--bac)"]]),
    },
    {
      html: `<h3>La libertad, condición de la ética</h3><p>Solo podemos juzgar moralmente a quien actúa con <b>libertad</b>. Si alguien te empuja y rompes un jarrón, no eres culpable. Un acto libre exige <mark>conocimiento</mark> (saber lo que hago) y <mark>voluntad</mark> (quererlo). Distinguimos la <b>libertad negativa</b> (no estar obligado ni impedido por otros) y la <b>libertad positiva</b> (ser capaz de decidir por uno mismo según la propia razón). Libertad y <b>responsabilidad</b> van unidas: quien elige libremente debe responder de las consecuencias.</p>`,
      svg: flujo("De la libertad a la responsabilidad", ["conocer", "querer", "decidir", "actuar", "responder"], "var(--red)"),
    },
    {
      html: `<h3>¿Somos realmente libres?</h3><p>El <b>determinismo</b> sostiene que todo lo que hacemos está causado por factores que no elegimos: los genes, la educación, el cerebro, la sociedad. Si fuera totalmente cierto, nadie sería responsable de nada. Otros filósofos, como <b>Sartre</b>, defienden que estamos «condenados a ser libres»: siempre podemos elegir, al menos cómo responder a lo que nos pasa. La postura más habitual hoy es intermedia: estamos <mark>condicionados, pero no determinados</mark>.</p>`,
      video: { id: "htRChYdMCYk", titulo: "¿Existe la libertad? Lo que dice la filosofía", canal: "Adictos a la Filosofía", vistas: 127792, megusta: 0 },
    },
    {
      html: `<h3>Aristóteles: la ética de la virtud</h3><p>Para Aristóteles, todos buscamos la <b>felicidad</b> (<i>eudaimonía</i>), que no es placer pasajero sino una vida plena y realizada. Se alcanza practicando las <mark>virtudes</mark>: hábitos buenos que se adquieren con la repetición, igual que se aprende a tocar un instrumento. La virtud es el <b>término medio</b> entre dos extremos: la valentía está entre la cobardía y la temeridad; la generosidad, entre la tacañería y el derroche. Y la <b>prudencia</b> es la virtud que permite encontrar ese punto justo en cada caso.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La virtud como término medio: la valentía está entre la cobardía (defecto) y la temeridad (exceso); la generosidad, entre la tacañería y el derroche">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["cobardía", "valentía", "temeridad", 46], ["tacañería", "generosidad", "derroche", 116]].map(([a, m, b, y]) => `<path d="M24 ${y} H 236" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/><circle cx="24" cy="${y}" r="7" fill="var(--red)"/><circle cx="236" cy="${y}" r="7" fill="var(--red)"/><circle cx="130" cy="${y}" r="11" fill="var(--leaf)"/><g ${F} font-size="11.5" font-weight="700" text-anchor="middle"><text x="40" y="${y + 26}" fill="var(--red)">${a}</text><text x="130" y="${y - 18}" fill="var(--leaf)">${m}</text><text x="218" y="${y + 26}" fill="var(--red)">${b}</text></g>`).join("")}
        <g ${F} font-size="10.5" fill="var(--muted)" text-anchor="middle"><text x="40" y="172">defecto</text><text x="130" y="172">virtud</text><text x="218" y="172">exceso</text></g></svg>`,
    },
    {
      html: `<h3>El utilitarismo: la mayor felicidad</h3><p><b>Jeremy Bentham</b> y <b>John Stuart Mill</b>, en el siglo XIX, propusieron juzgar las acciones por sus <mark>consecuencias</mark>. Una acción es buena si produce <b>la mayor felicidad para el mayor número</b> de personas (y el menor sufrimiento). Es una ética muy práctica, que se usa en salud pública o economía. Su problema: podría justificar perjudicar gravemente a una minoría si con ello gana la mayoría.</p>`,
    },
    {
      html: `<h3>Kant: la ética del deber</h3><p>Para <b>Kant</b>, lo que hace buena una acción no son sus consecuencias, sino la <mark>intención</mark>: actuar por deber. El deber se expresa en el <b>imperativo categórico</b>, una orden que vale siempre y para todos. Tiene dos formulaciones famosas: «Obra solo según la máxima que puedas querer que se convierta en <b>ley universal</b>» (¿y si todos mintieran?) y «Trata a la humanidad, en ti y en los demás, siempre como un <b>fin</b> y nunca solo como un medio».</p>`,
      video: { id: "Lq0ZGcqn-Zg", titulo: "La ética en Kant", canal: "Unboxing Philosophy", vistas: 1624390, megusta: 0 },
    },
    {
      html: `<h3>Comparar teorías y resolver dilemas</h3><p>Un <b>dilema moral</b> es una situación en la que hay que elegir entre dos opciones y ambas tienen razones a favor y en contra. Las teorías nos ayudan a pensarlos:</p>${tabla(["Teoría", "Lo que importa", "Pregunta clave"], [["Virtud (Aristóteles)", "el carácter", "¿Qué haría una persona buena y prudente?"], ["Utilitarismo (Mill)", "las consecuencias", "¿Qué produce más bienestar para todos?"], ["Deber (Kant)", "la intención y la norma", "¿Podría ser ley para todos? ¿Uso a alguien como medio?"]])}<p>Ninguna lo resuelve todo, pero juntas nos obligan a dar <b>razones</b> y no solo a seguir la corriente.</p>`,
    },
  ],
  figura: {
    titulo: "Tres grandes éticas",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Ética de la virtud de Aristóteles, utilitarismo de Mill y ética del deber de Kant">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["Virtud", "Aristóteles", "felicidad · término medio", "var(--leaf)"], ["Utilitarismo", "Bentham y Mill", "mayor felicidad, mayor número", "var(--sun)"], ["Deber", "Kant", "imperativo categórico", "var(--pen)"]].map(([t, a, d, c], i) => `<rect x="${20 + i * 218}" y="20" width="204" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><rect x="${20 + i * 218}" y="20" width="204" height="40" rx="14" fill="${c}"/><text x="${122 + i * 218}" y="47" text-anchor="middle" font-size="17" font-weight="700" fill="#fff" ${D}>${t}</text><text x="${122 + i * 218}" y="96" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${a}</text><text x="${122 + i * 218}" y="132" text-anchor="middle" font-size="12.5" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "d7efqKaG6Kk", titulo: "Ética vs. moral: ¡entiende la diferencia!", canal: "TeoCom", vistas: 669851, megusta: 0, busqueda: "ética filosofía introducción" },
  ejemplos: [
    { enunciado: "Analiza el caso de la cartera con 300 € desde las tres teorías.", pasos: ["Virtud: una persona honrada devuelve lo que no es suyo; quedárselo crea un mal hábito.", "Utilitarismo: devolverla evita un gran perjuicio al dueño (DNI, dinero) y el beneficio de quedársela es menor.", "Kant: si todos se quedaran las carteras ajenas, la propiedad no tendría sentido; no puede ser ley universal."], resultado: "Las tres teorías llevan a devolverla, aunque por razones distintas." },
    { enunciado: "Un amigo te pide que le digas si su redacción está bien. Es mala. ¿Qué dirían Kant y un utilitarista sobre mentirle?", pasos: ["Kant: mentir no puede ser ley universal; además lo usarías como medio para quedar bien. Hay que decir la verdad (con tacto).", "Utilitarista: depende de las consecuencias. Si la verdad le ayuda a mejorar y aprobar, es mejor decirla.", "Aristóteles: la virtud está en decir la verdad con amabilidad, sin crueldad ni adulación."], resultado: "Lo más defendible es decir la verdad de forma constructiva." },
    { enunciado: "Busca el término medio de: a) la confianza en uno mismo; b) el humor.", pasos: ["a) Defecto: inseguridad. Exceso: arrogancia. Término medio: autoestima o seguridad sana.", "b) Defecto: ser siempre serio y aburrido. Exceso: burlarse de todo, ser payaso. Término medio: tener ingenio o buen humor."], resultado: "a) Autoestima sana; b) buen humor (ingenio)." },
  ],
  errores: [
    "Pensar que ética y moral son exactamente lo mismo en filosofía: la ética reflexiona sobre la moral.",
    "Creer que todo lo legal es moral y todo lo ilegal es inmoral.",
    "Confundir la felicidad de Aristóteles con el placer o la diversión.",
    "Pensar que el término medio es una media matemática: depende de cada persona y situación.",
    "Decir que para Kant importa el resultado: lo que importa es actuar por deber.",
    "Usar «soy libre» para justificar cualquier cosa olvidando la responsabilidad.",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre ética y moral con un ejemplo.", sol: "La moral son normas que seguimos (no copiar en un examen); la ética reflexiona sobre ellas (¿por qué está mal copiar? porque es injusto con los demás y te engañas a ti mismo)." },
    { q: "Compara normas jurídicas, sociales y morales.", sol: "Jurídicas: las impone el Estado y tienen sanción legal. Sociales: las marca la costumbre, sanción de rechazo. Morales: nacen de la conciencia, sanción de remordimiento." },
    { q: "Pon un ejemplo de algo legal que te parezca inmoral.", sol: "Respuesta abierta. Ejemplo: no ayudar a un compañero que pasa por un mal momento, o mentir a un amigo." },
    { q: "¿Qué dos condiciones necesita un acto para ser libre?", sol: "Conocimiento (saber lo que se hace) y voluntad (quererlo)." },
    { q: "Explica la diferencia entre estar condicionado y estar determinado.", sol: "Condicionado: hay factores que influyen pero aún se puede elegir. Determinado: no hay opción posible." },
    { q: "¿Qué es la eudaimonía y cómo se alcanza según Aristóteles?", sol: "La felicidad como vida plena; se alcanza practicando las virtudes hasta convertirlas en hábito." },
    { q: "Escribe el término medio entre tacañería y derroche.", sol: "La generosidad." },
    { q: "Enuncia el principio del utilitarismo y una crítica.", sol: "Es buena la acción que produce la mayor felicidad para el mayor número. Crítica: podría justificar sacrificar a una minoría." },
    { q: "Explica las dos formulaciones del imperativo categórico.", sol: "1) Actúa de forma que tu norma pueda ser ley universal. 2) Trata a las personas siempre como fines y nunca solo como medios." },
    { q: "Plantea un dilema moral de tu vida diaria y resuélvelo con una de las teorías.", sol: "Respuesta abierta. Debe identificar las dos opciones, aplicar la teoría elegida y justificar la decisión." },
  ],
  quiz: [
    { q: "La ética es…", o: ["la reflexión filosófica sobre la moral", "el conjunto de leyes", "la costumbre"], a: 0, e: "Se pregunta por qué algo está bien." },
    { q: "La sanción de una norma moral es…", o: ["la multa", "el remordimiento", "la cárcel"], a: 1, e: "Nace de la conciencia." },
    { q: "Un acto libre requiere conocimiento y…", o: ["voluntad", "dinero", "permiso"], a: 0, e: "Saber y querer." },
    { q: "El determinismo afirma que…", o: ["todo está causado y no elegimos", "somos totalmente libres", "no hay normas"], a: 0, e: "Genes, ambiente, cerebro…" },
    { q: "La valentía es el término medio entre…", o: ["cobardía y temeridad", "miedo y alegría", "fuerza y debilidad"], a: 0, e: "Ni huir de todo ni lanzarse sin pensar." },
    { q: "«La mayor felicidad para el mayor número» es…", o: ["utilitarismo", "ética de Kant", "estoicismo"], a: 0, e: "Bentham y Mill." },
    { q: "Para Kant, lo que hace buena una acción es…", o: ["el resultado", "actuar por deber", "el placer"], a: 1, e: "La buena voluntad." },
    { q: "«Condenados a ser libres» es de…", o: ["Sartre", "Mill", "Aristóteles"], a: 0, e: "Existencialismo francés." },
    { q: "La prudencia sirve para…", o: ["encontrar el término medio", "ganar dinero", "obedecer"], a: 0, e: "Es la virtud de decidir bien." },
    { q: "Un dilema moral es…", o: ["elegir entre opciones con razones a favor y en contra", "una ley", "un error"], a: 0, e: "No hay solución sin coste." },
  ],
  examen: [
    { q: "Tratar a alguien solo como un medio va contra…", o: ["el imperativo categórico", "el utilitarismo", "la ley"], a: 0, e: "Segunda formulación de Kant." },
    { q: "Las virtudes, según Aristóteles, se adquieren…", o: ["con la práctica y el hábito", "al nacer", "leyendo"], a: 0, e: "Como tocar un instrumento." },
    { q: "La libertad negativa es…", o: ["no estar impedido por otros", "decidir según la razón", "no tener normas"], a: 0, e: "Ausencia de obstáculos externos." },
  ],
  feynman: ["La diferencia entre ética y moral y los tipos de normas", "Por qué sin libertad no hay responsabilidad", "La ética de Aristóteles, el utilitarismo y Kant", "Cómo analizar un dilema moral"],
  mapa: mapa("ÉTICA", "var(--red)", [
    ["Moral y ética", "normas · reflexión", "var(--sun)"],
    ["Libertad", "conocer · querer · responder", "var(--red)"],
    ["Teorías", "virtud · utilidad · deber", "var(--pen)"],
    ["Dilemas", "razones a favor y en contra", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Moral", "Normas y valores que guían la conducta de una persona o sociedad."],
    ["Ética", "Reflexión filosófica sobre la moral."],
    ["Responsabilidad", "Responder de las consecuencias de lo que hacemos libremente."],
    ["Determinismo", "Postura según la cual todo lo que hacemos está causado."],
    ["Eudaimonía", "Felicidad como vida plena, según Aristóteles."],
    ["Término medio", "La virtud está entre dos extremos: defecto y exceso."],
    ["Utilitarismo", "Es buena la acción que da la mayor felicidad al mayor número."],
    ["Imperativo categórico", "Norma de Kant: actúa como si tu máxima fuera ley universal."],
  ],
  familias: ["Comentad una noticia en la que alguien tome una decisión difícil y qué habría dicho cada teoría.", "Cada miembro de la familia elige una virtud que quiere practicar esta semana.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Filosofía 4º ESO (optativa autonómica): ética y moral, libertad y responsabilidad, teorías éticas (virtud, utilitarismo, deber) y dilemas morales (marco del RD 217/2022).",
    ideas: ["Discusión de dilemas de Kohlberg en pequeños grupos.", "Juicio simulado: ¿quién es responsable?", "Diario de virtudes durante una semana."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ética, Wikipedia en español", url: "https://es.wikipedia.org/wiki/%C3%89tica" },
  ],
  revisado: "2026-11-12",
};
