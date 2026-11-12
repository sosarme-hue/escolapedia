// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "First and second conditionals",
  minutos: 35,
  objetivos: ["Formar el zero, first y second conditional", "Distinguir situaciones reales o probables de situaciones imaginarias", "Usar unless, when y la coma correctamente en las condicionales"],
  claves: ["if", "zero conditional", "first conditional", "second conditional", "unless", "If I were you"],
  pregunta: {
    texto: "«If I win the match, I'll be happy» y «If I won the lottery, I'd buy a house». Las dos empiezan por «if». ¿Qué diferencia hay entre ganar un partido y ganar la lotería?",
    respuesta: "Ganar el partido es algo <mark>real y posible</mark>: usamos el <b>first conditional</b> (presente + will). Ganar la lotería es <mark>improbable o imaginario</mark>: usamos el <b>second conditional</b> (pasado + would). El tiempo verbal muestra cómo de real vemos la situación.",
  },
  bloques: [
    {
      html: `<h3>Cómo es una oración condicional</h3><p>Tiene dos partes: la <b>condición</b>, que empieza por <mark>if</mark>, y el <b>resultado</b>. El orden puede cambiar: «If it rains, we'll stay at home» = «We'll stay at home if it rains». Cuando la parte con <i>if</i> va <b>primero</b>, ponemos una <mark>coma</mark>; cuando va segunda, no. Hay varios tipos según lo probable que sea la condición.</p>`,
      svg: L.frase("Partes de una condicional: If it rains, we will stay at home", [
        ["If it rains,", "condición", "var(--pen)"], ["we'll stay", "resultado", "var(--red)"], ["at home.", "", "var(--line)"],
      ], "coma si if va primero"),
    },
    {
      html: `<h3>Zero conditional</h3><p>Para <b>verdades generales</b>, hechos científicos y cosas que siempre pasan: <mark>if + present simple, present simple</mark>. «If you heat ice, it melts», «If I drink coffee at night, I can't sleep». Aquí <i>if</i> significa casi lo mismo que <b>when</b> («siempre que»): «When you mix blue and yellow, you get green».</p>`,
      svg: L.filas("Zero conditional: verdades generales", [
        ["Ciencia", "If you heat ice, it melts.", "var(--inf)"], ["Hábito", "If I'm tired, I sleep.", "var(--pen)"], ["Color", "If you mix them, you get…", "var(--leaf)"],
      ], "if + present, present"),
    },
    {
      html: `<h3>First conditional</h3><p>Para situaciones <b>reales o probables</b> en el futuro y sus consecuencias: <mark>if + present simple, will + forma base</mark>. «If you study, you'<b>ll pass</b> the exam», «If it doesn't rain, we'<b>ll go</b> to the beach». Ojo: después de <i>if</i> va el <b>presente</b>, nunca will: «If I <b>see</b> him» (no «if I will see»). En el resultado también pueden ir <i>can, may, might</i> o un imperativo: «If you're cold, <b>close</b> the window».</p>`,
      svg: L.tabla("First conditional: if + presente, will + forma base", ["If…", "Result"], [
        ["you hurry,", "you'll catch it."], ["it's sunny,", "we'll go out."], ["I'm late,", "she'll be angry."],
      ], "var(--red)"),
    },
    {
      html: `<h3>Second conditional</h3><p>Para situaciones <b>imaginarias, improbables o imposibles</b> en el presente o el futuro: <mark>if + past simple, would + forma base</mark>. «If I <b>had</b> wings, I <b>would fly</b> to Japan», «If I <b>knew</b> the answer, I'<b>d tell</b> you» (pero no la sé). El pasado no indica tiempo pasado, sino <b>irrealidad</b>. Con el verbo be se usa <b>were</b> para todas las personas: «If she <b>were</b> here…».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una nube de pensamiento con alas: si tuviera alas volaría, una situación imaginaria">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="130" cy="70" rx="100" ry="46" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
        <circle cx="70" cy="132" r="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><circle cx="56" cy="152" r="5" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="62" font-size="14" fill="var(--pen)">If I had wings,</text><text x="130" y="84" font-size="14" fill="var(--red)">I would fly.</text><text x="170" y="150" font-size="12" fill="var(--muted)">imaginario: no tengo alas</text></g></svg>`,
    },
    {
      html: `<h3>If I were you: dar consejos</h3><p>El second conditional se usa mucho para <b>dar consejos</b> poniéndose en el lugar del otro: <mark>If I were you, I would…</mark> «If I were you, I'<b>d talk</b> to the teacher», «If I were you, I <b>wouldn't buy</b> that phone». Es más suave que <i>You should</i>. También para <b>imaginar</b> y hacer preguntas hipotéticas: «What <b>would</b> you do if you <b>found</b> a wallet in the street?».</p>`,
      svg: L.dialogo("Pedir y dar consejo con If I were you", [
        ["Leo", "I've lost my phone. What should I do?", "var(--pen)"], ["Ana", "If I were you, I'd call it.", "var(--leaf)"], ["Ana", "I wouldn't panic!", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Los tres condicionales",
    svg: L.columnas("Zero, first y second conditional con su forma y su uso", [
      ["siempre · ciencia", "ZERO", ["if + present,", "present"], "var(--inf)"],
      ["real · probable", "FIRST", ["if + present,", "will + verb"], "var(--red)"],
      ["imaginario", "SECOND", ["if + past,", "would + verb"], "var(--pen)"],
    ]),
  },
  video: { id: "Nql1Y_TuIEM", titulo: "Condicionales en inglés: explicación con ejemplos fácil", canal: "Inglés Para Perezosos", vistas: 2853949, megusta: 0, busqueda: "first conditional second conditional" },
  quiz: [
    { q: "«If you heat water to 100 °C, it ___.»", o: ["boils", "will boil", "would boil"], a: 0, e: "Verdad general: zero conditional." },
    { q: "«If it ___ tomorrow, we'll stay home.»", o: ["will rain", "rains", "rained"], a: 1, e: "Tras if, present simple." },
    { q: "«If I ___ rich, I would travel the world.»", o: ["am", "were", "will be"], a: 1, e: "Second conditional: were." },
    { q: "«If you don't hurry, you ___ the bus.»", o: ["miss", "'ll miss", "'d miss"], a: 1, e: "First conditional: will." },
    { q: "«If I were you, I ___ apologise.»", o: ["will", "would", "am"], a: 1, e: "Consejo: If I were you, I'd…" },
  ],
  examen: [
    { q: "¿Qué condicional usamos para algo imaginario?", o: ["Zero", "First", "Second"], a: 2, e: "If + past, would." },
    { q: "«We'll go out ___ it stops raining.»", o: ["if", "unless", "would"], a: 0, e: "Condición: if." },
    { q: "«What ___ you do if you saw a ghost?»", o: ["will", "would", "do"], a: 1, e: "Pregunta hipotética: would." },
  ],
  feynman: ["Qué partes tiene una oración condicional", "Para qué sirve cada tipo de condicional", "Por qué después de if no va will", "Cómo se da un consejo con If I were you"],
  mapa: mapa("CONDITIONALS", "var(--eso)", [
    ["Zero", "always true", "var(--inf)"],
    ["First", "real · possible", "var(--red)"],
    ["Second", "imaginary · unlikely", "var(--pen)"],
    ["Advice", "If I were you…", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Zero conditional", "if + present, present: If you heat ice, it melts."],
    ["First conditional", "if + present, will: If it rains, I'll stay home."],
    ["Second conditional", "if + past, would: If I had money, I'd buy it."],
    ["If I were you", "Para dar consejos: If I were you, I'd…"],
    ["La coma", "Si if va primero, coma entre las dos partes."],
  ],
  familias: ["Jugad a «What would you do if…?» durante la cena con situaciones divertidas.", "Pedidle que haga cinco promesas con first conditional («If you…, I'll…»).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: oraciones condicionales de tipo 0, 1 y 2 para expresar hechos, hipótesis y consejos (RD 217/2022, Lengua Extranjera 3º; nivel B1 del MCER).",
    ideas: ["Cadena de condicionales: «If I go out, I'll…; if I…, I'll…».", "Encuesta «What would you do if…?» y presentación de resultados.", "Consultorio de problemas con If I were you."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: first and second conditionals", url: "https://learnenglishteens.britishcouncil.org/grammar/b1-grammar/first-conditional-and-second-conditional" },
    { t: "Cambridge Dictionary: conditionals", url: "https://dictionary.cambridge.org/grammar/british-grammar/conditionals-and-wishes" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Usar unless, when y as long as", "Elegir entre first y second conditional según el punto de vista"],
  bloques: [
    { tras: "Zero conditional", html: `<h3>If o when</h3><p>En el zero conditional, <i>if</i> y <i>when</i> son casi iguales. Pero con el futuro su significado cambia. <mark>If</mark> indica que algo <b>puede o no pasar</b>: «<b>If</b> I see Tom, I'll give him your message» (quizá no lo vea). <mark>When</mark> indica que algo <b>pasará seguro</b>: «<b>When</b> I see Tom, I'll give him your message» (lo voy a ver). Por eso decimos «<b>When</b> I finish school, I'll go to university» (acabaré seguro) y no «If I finish school». Las dos van seguidas de presente, nunca de will.</p>` },
    { tras: "First conditional", html: `<h3>Unless y as long as</h3><p><mark>Unless</mark> significa «a menos que» o «si no»: equivale a <b>if… not</b>. «You'll fail <b>unless</b> you study» = «You'll fail <b>if</b> you <b>don't</b> study». Como unless ya es negativo, el verbo que lo sigue va en <b>afirmativa</b>: «unless it rains» (no «unless it doesn't rain»). <mark>As long as</mark> y <b>provided that</b> significan «siempre que, con tal de que»: «You can borrow my bike <b>as long as</b> you're careful». Son muy útiles en negociaciones y normas: «You can go out <b>as long as</b> you're back by ten».</p>`, video: L.vid("PDtUTAwMGDQ", "Condicional cero en inglés: explicación fácil y ejemplos", "Francisco Ochoa Inglés Fácil", 2195034) },
    { tras: "Second conditional", html: `<h3>¿First o second?</h3><p>A veces la misma situación admite los dos condicionales; la elección depende de cómo de <b>probable</b> la ve el hablante:</p>${L.tb(["First (probable)", "Second (improbable)"], [["If I <b>get</b> a good mark, I'<b>ll</b> celebrate. (suelo sacar buenas notas)", "If I <b>got</b> a 10 in Physics, I'<b>d</b> be amazed. (es muy difícil)"], ["If it <b>snows</b> tomorrow, we'<b>ll</b> build a snowman. (lo dice el pronóstico)", "If it <b>snowed</b> in Seville, everybody <b>would</b> go out. (casi nunca nieva)"], ["If they <b>invite</b> me, I'<b>ll</b> go. (es posible)", "If they <b>invited</b> me to the Oscars, I'<b>d</b> go. (imposible)"]])}` },
    { tras: "If I were you: dar consejos", html: `<h3>Condicionales en un texto</h3><p>Las condicionales son perfectas para argumentar y escribir sobre <b>problemas y soluciones</b>. Por ejemplo, en un texto sobre el medio ambiente: «<b>If</b> we <b>don't</b> reduce plastic, the oceans <b>will</b> become even more polluted. <b>Unless</b> governments <b>act</b> now, many species <b>will</b> disappear. <b>If</b> everybody <b>used</b> public transport, cities <b>would</b> be much cleaner. <b>If</b> I <b>were</b> the mayor, I <b>would</b> create more bike lanes». Observa cómo el escritor usa el <mark>first conditional</mark> para consecuencias reales y probables, y el <mark>second</mark> para imaginar situaciones ideales.</p>` },
    { tras: "Cómo es una oración condicional", html: `<h3>Otros elementos del resultado</h3><p>En la parte del resultado no siempre va <i>will</i> o <i>would</i>. En el <b>first conditional</b> pueden aparecer otros modales: <mark>can, may, might, must, should</mark>: «If you finish early, you <b>can</b> go home», «If it's foggy, the plane <b>might</b> be late», «If you feel ill, you <b>should</b> see a doctor». También un <b>imperativo</b>: «If you see Ana, <b>tell</b> her to call me». En el <b>second conditional</b> puede ir <b>could</b> o <b>might</b> en lugar de would: «If I had more time, I <b>could</b> learn the guitar» (podría), «If you asked her, she <b>might</b> say yes» (quizá diría). Así se matiza la seguridad del resultado.</p>` },
  ],
  ejemplos: [
    ["Completa con el condicional adecuado: «If you (not / water) ___ plants, they (die) ___.»", ["Es una verdad general que siempre ocurre.", "Zero conditional: present + present."], "If you don't water plants, they die."],
    ["Completa: «If I (find) ___ a wallet in the street, I (take) ___ it to the police.» (situación imaginaria)", ["Es una situación hipotética: second conditional.", "Condición en past simple: found.", "Resultado con would: would take."], "If I found a wallet in the street, I would take it to the police."],
    ["Reescribe con unless: «If you don't hurry, you'll be late.»", ["Unless = if… not.", "El verbo tras unless va en afirmativa: hurry.", "El resultado no cambia."], "Unless you hurry, you'll be late."],
  ],
  errores: [
    "Poner will después de if: *If it will rain → If it rains.",
    "Poner would en las dos partes: *If I would have money, I would… → If I had money, I would…",
    "Olvidar la coma cuando if va al principio.",
    "Usar negativa después de unless: *unless you don't study → unless you study.",
    "Usar was en vez de were en If I were you (en registro cuidado).",
  ],
  ejercicios: [
    ["Completa (zero): «If you (press) ___ this button, the machine (stop) ___.»", "press, stops."],
    ["Completa (first): «If we (leave) ___ now, we (arrive) ___ on time.»", "leave, will arrive."],
    ["Completa (first): «If she (not / call) ___ me, I (call) ___ her.»", "doesn't call, will call."],
    ["Completa (second): «If I (be) ___ taller, I (play) ___ basketball.»", "were, would play."],
    ["Completa (second): «What (you / do) ___ if you (meet) ___ a famous singer?»", "would you do, met."],
    ["Corrige: «If I will see her, I will tell her.»", "If I see her, I will tell her."],
    ["Reescribe con unless: «If you don't wear a coat, you'll get cold.»", "Unless you wear a coat, you'll get cold."],
    ["Elige if o when: «___ I'm eighteen, I'll learn to drive.»", "When. Cumplir dieciocho es seguro."],
    ["Da un consejo con If I were you a alguien que quiere aprobar inglés.", "If I were you, I'd watch series in English with subtitles."],
    ["Escribe dos frases sobre el medio ambiente: una con first conditional y otra con second.", "Por ejemplo: «If we recycle more, we'll reduce waste.» / «If all cars were electric, the air would be cleaner.»"],
  ],
  quiz: [
    ["«You can't go ___ you finish your homework.»", ["unless", "if", "when"], 0, "Unless = si no."],
    ["«___ I finish school, I'll travel.» (es seguro)", ["When", "If", "Unless"], 0, "Algo seguro: when."],
    ["«If I had more time, I ___ read more.»", ["would", "will", "am"], 0, "Second conditional."],
    ["«You can stay ___ you're quiet.»", ["as long as", "unless", "would"], 0, "Con tal de que."],
    ["«If you see Ana, ___ her I'm here.»", ["tell", "you would tell", "told"], 0, "Imperativo en el resultado."],
  ],
  tarjetas: [
    ["Unless", "A menos que = if… not: unless you hurry."],
    ["When / if + futuro", "When = seguro; if = posible. Las dos van con presente."],
    ["As long as", "Siempre que, con tal de que."],
  ],
});
