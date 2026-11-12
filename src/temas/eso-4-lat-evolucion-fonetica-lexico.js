// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, flujo, arbol } = require("./_hum");

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "Evolución fonética y léxico",
  minutos: 40,
  objetivos: ["Aplicar las principales reglas de evolución fonética del latín al castellano", "Reconocer étimos latinos en palabras actuales", "Formar y entender palabras con prefijos y raíces latinas"],
  claves: ["evolución fonética", "étimo", "diptongación", "sonorización", "prefijo", "derivado culto"],
  pregunta: {
    texto: "«Filium» acabó siendo «hijo»; «lactem», «leche»; «portam», «puerta». Parecen palabras irreconocibles, pero siguen reglas fijas. ¿Cuáles?",
    respuesta: "Las de la <mark>evolución fonética</mark>: durante siglos, los hablantes fueron cambiando los sonidos del latín de forma regular. La F inicial pasó a H, el grupo CT a CH, la O breve acentuada a UE… Conociendo unas pocas reglas se adivina el <b>étimo</b> (origen) de miles de palabras.",
  },
  bloques: [
    {
      html: `<h3>El punto de partida: el acusativo</h3><p>Casi todas las palabras castellanas proceden del <b>acusativo</b> latino, la forma más usada en el habla. Lo primero que se perdió fue la <mark>-m final</mark>: <i>rosam</i> → rosa, <i>lupum</i> → lobo. Las vocales finales -u y -i se abrieron en -o y -e: <i>lupu</i> → lobo, <i>lacte</i> → leche.</p>`,
      svg: flujo("Evolución de lupum a lobo", ["lupum", "lupu|(cae -m)", "lupo|(u → o)", "lobo|(p → b)"], "var(--red)"),
    },
    {
      html: `<h3>Cambios en las vocales</h3><p>La <mark>diptongación</mark> es uno de los cambios más típicos del castellano: la <b>e breve</b> acentuada se convierte en <b>ie</b> (<i>petram</i> → piedra, <i>terram</i> → tierra) y la <b>o breve</b> acentuada en <b>ue</b> (<i>portam</i> → puerta, <i>novum</i> → nuevo). Los diptongos latinos se simplificaron: <b>ae</b> → e (<i>caelum</i> → cielo, tras diptongar) y <b>au</b> → o (<i>aurum</i> → oro).</p>`,
      svg: arbol("Diptongación de e y o breves acentuadas", [["ĕ → ie", ["piedra", "tierra"], "var(--red)", ["de petram", "de terram"]], ["ŏ → ue", ["puerta", "nuevo"], "var(--pen)", ["de portam", "de novum"]]]),
    },
    {
      html: `<h3>Cambios en las consonantes</h3><p>Entre vocales, las consonantes sordas se hicieron sonoras (<mark>sonorización</mark>): <b>p → b</b> (<i>lupum</i> → lobo), <b>t → d</b> (<i>vitam</i> → vida), <b>c → g</b> (<i>acutum</i> → agudo). Otros cambios muy productivos: <b>f-</b> inicial → <b>h-</b> (<i>filium</i> → hijo, <i>facere</i> → hacer); <b>-ct-</b> → <b>ch</b> (<i>noctem</i> → noche); <b>cl-, fl-, pl-</b> → <b>ll</b> (<i>clavem</i> → llave, <i>pluviam</i> → lluvia); <b>-li-</b> → <b>j</b> (<i>folia</i> → hoja).</p>`,
      svg: filas("Reglas consonánticas frecuentes", [["p, t, c", "→ b, d, g: vitam → vida", "var(--pen)"], ["f-", "→ h-: filium → hijo", "var(--red)"], ["-ct-", "→ ch: noctem → noche", "var(--leaf)"], ["cl-, pl-", "→ ll: clavem → llave", "var(--sun)"], ["-li-", "→ j: folia → hoja", "var(--muted)"]]),
    },
    {
      html: `<h3>Prefijos y raíces latinas</h3><p>El latín sigue creando palabras nuevas, sobre todo cultas y científicas. Muchos <mark>prefijos</mark> son preposiciones latinas: <b>ad-</b> (hacia: adjuntar), <b>ex-</b> (fuera: exportar), <b>in-</b> (dentro o negación: importar, inútil), <b>sub-</b> (debajo: subterráneo), <b>inter-</b> (entre: internacional), <b>re-</b> (de nuevo: releer). Raíces como <i>aqua</i> (acuático, acueducto), <i>terra</i> (terrestre, territorio) o <i>scribere</i> (escribir, inscripción) forman familias enteras.</p>`,
      svg: dos("Prefijos latinos y ejemplos", ["Prefijo", ["ex- (fuera)", "sub- (debajo)", "inter- (entre)", "re- (de nuevo)", "pre- (antes)"], "var(--red)"], ["Ejemplo", ["exportar", "submarino", "intercambio", "reciclar", "prever"], "var(--pen)"]),
    },
  ],
  figura: {
    titulo: "Del latín al castellano: diez palabras",
    svg: `<svg viewBox="0 0 680 230" role="img" aria-label="Diez palabras latinas y su resultado castellano con la regla aplicada">
      <rect width="680" height="230" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="14">
      ${[["filium", "hijo", "f- → h-"], ["noctem", "noche", "-ct- → ch"], ["portam", "puerta", "ŏ → ue"], ["terram", "tierra", "ĕ → ie"], ["vitam", "vida", "t → d"], ["clavem", "llave", "cl- → ll"], ["aurum", "oro", "au → o"], ["folia", "hoja", "-li- → j"], ["lactem", "leche", "-ct- → ch"], ["pluviam", "lluvia", "pl- → ll"]].map(([l, e, r], i) => { const x = i < 5 ? 30 : 360, y = 40 + (i % 5) * 38; return `<text x="${x}" y="${y}" font-weight="700" fill="var(--red)">${l}</text><text x="${x + 90}" y="${y}" fill="var(--ink)">→</text><text x="${x + 116}" y="${y}" font-weight="700" fill="var(--pen)">${e}</text><text x="${x + 190}" y="${y}" font-size="12" fill="var(--muted)">${r}</text>`; }).join("")}
      </g>
    </svg>`,
  },
  video: { id: "jMX1o2rB-b0", titulo: "¿Cómo evolucionó el latín al español?", canal: "Manuel Bravo", vistas: 663032, megusta: 40695, busqueda: "evolución fonética latín castellano" },
  quiz: [
    { q: "¿De qué caso latino proceden casi todas las palabras castellanas?", o: ["Nominativo", "Acusativo", "Genitivo"], a: 1, e: "Era la forma más usada en el latín hablado." },
    { q: "«Filium» → «hijo» muestra el cambio…", o: ["f- → h-", "-ct- → ch", "p → b"], a: 0, e: "La F inicial latina pasó a H (hoy muda)." },
    { q: "«Noctem» da en castellano…", o: ["noce", "noche", "nocte"], a: 1, e: "El grupo -ct- evoluciona a ch." },
    { q: "La o breve acentuada de «portam» se convierte en…", o: ["u", "ue", "o"], a: 1, e: "Diptongación: portam → puerta." },
    { q: "El prefijo «sub-» significa…", o: ["sobre", "debajo", "fuera"], a: 1, e: "Submarino: que va debajo del mar." },
  ],
  examen: [
    { q: "«Vitam» → «vida» es un caso de…", o: ["diptongación", "sonorización", "palatalización"], a: 1, e: "La t sorda entre vocales se hace d sonora." },
    { q: "¿Cuál es el étimo de «llave»?", o: ["clavem", "flammam", "plenum"], a: 0, e: "cl- inicial → ll." },
    { q: "«Aurum» da «oro» porque…", o: ["au → o", "a → o", "u → o"], a: 0, e: "El diptongo latino au monoptongó en o." },
  ],
  feynman: ["Por qué se parte del acusativo y qué le pasó a la -m", "Las dos diptongaciones del castellano", "Cinco reglas consonánticas con un ejemplo cada una", "Cinco prefijos latinos y palabras que los usan"],
  mapa: mapa("EVOLUCIÓN FONÉTICA", "var(--red)", [
    ["Punto de partida", "acusativo · cae la -m", "var(--muted)"],
    ["Vocales", "ĕ → ie · ŏ → ue · au → o", "var(--pen)"],
    ["Consonantes", "f → h · ct → ch · cl → ll", "var(--leaf)"],
    ["Léxico", "prefijos · raíces · familias", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Diptongación de ĕ y ŏ tónicas", "ĕ → ie (terram → tierra); ŏ → ue (portam → puerta)."],
    ["Sonorización", "p, t, c entre vocales → b, d, g (vitam → vida)."],
    ["F inicial latina", "Pasa a h: filium → hijo, facere → hacer."],
    ["Grupo -ct-", "Pasa a ch: noctem → noche, lactem → leche."],
    ["Grupos cl-, fl-, pl- iniciales", "Pasan a ll: clavem → llave, pluviam → lluvia."],
  ],
  familias: ["Jugad a adivinar el étimo latino de palabras cotidianas (hierro ← ferrum, ojo ← oculum).", "Buscad palabras con los prefijos ex-, sub-, inter- en un periódico.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Léxico y evolución fonética del latín a las lenguas romances; formación de palabras (RD 217/2022, Latín 4º).",
    ideas: ["Mural de reglas con ejemplos aportados por el alumnado.", "Comparar resultados en castellano, catalán y gallego (noctem: noche, nit, noite).", "Concurso de familias léxicas a partir de una raíz latina."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Evolución del latín al castellano, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Historia_del_idioma_espa%C3%B1ol" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Aplicar reglas de evolución fonética a palabras latinas", "Distinguir palabras patrimoniales, cultismos y dobletes"],
  bloques: [
    { tras: "Cambios en las vocales", html: `<h3>Las vocales tónicas: diptongación</h3><p>En castellano, la <b>e</b> y la <b>o</b> breves tónicas latinas se convirtieron en diptongos: <mark>ĕ > ie</mark> y <mark>ŏ > ue</mark>. Así, <i>pĕtra</i> > piedra, <i>tĕrra</i> > tierra, <i>fĕsta</i> > fiesta; <i>pŏrta</i> > puerta, <i>fŏcum</i> > fuego, <i>nŏvem</i> > nueve. Si la vocal no es tónica, no diptonga: por eso decimos <b>puerta</b> pero <b>portero</b>, <b>tierra</b> pero <b>terreno</b>. Las vocales finales también cambian: <b>-um > -o</b> (<i>lupum</i> > lobo) y la <b>-e</b> final se pierde a veces tras ciertas consonantes (<i>panem</i> > pan, <i>solem</i> > sol).</p>` },
    { tras: "Cambios en las consonantes", html: `<h3>Las reglas más importantes</h3>${tabla(["Regla", "Ejemplos"], [["f- inicial > h- (hoy muda)", "facere > hacer, filium > hijo, ferrum > hierro"], ["sonorización: p, t, k entre vocales > b, d, g", "lupum > lobo, vitam > vida, focum > fuego"], ["pl-, cl-, fl- iniciales > ll-", "plorare > llorar, clamare > llamar, flammam > llama"], ["-ct- > -ch-", "noctem > noche, lactem > leche, octo > ocho"], ["-li-, -c'l- > j", "filium > hijo, oculum > ojo, speculum > espejo"], ["-nn- y -ni- > ñ", "annum > año, Hispaniam > España"], ["e- protética ante s + consonante", "scholam > escuela, stellam > estrella"]])}<p>Estas reglas explican por qué palabras muy distintas en apariencia tienen el mismo origen.</p>`, video: { id: "5AqETZHpITE", titulo: "Diferencia entre las palabras patrimoniales, los cultismos y semicultismos", canal: "unProfesor", vistas: 63156, megusta: 0 } },
    { tras: "Cambios en las consonantes", html: `<h3>Dobletes: dos palabras de una misma raíz</h3><p>Un <mark>doblete</mark> se forma cuando una palabra latina entra dos veces en español: una por vía popular (palabra <b>patrimonial</b>, que sufrió todos los cambios) y otra por vía culta (<b>cultismo</b>, tomado de los libros, casi sin cambios).</p>${tabla(["Latín", "Patrimonial", "Cultismo"], [["fabulam", "habla", "fábula"], ["oculum", "ojo", "óculo (oculista)"], ["clavem", "llave", "clave"], ["directum", "derecho", "directo"], ["integrum", "entero", "íntegro"], ["rapidum", "raudo", "rápido"]])}<p>Los <b>semicultismos</b> se quedan a medio camino: <i>saeculum</i> > siglo.</p>` },
    { tras: "Prefijos y raíces", html: `<h3>Familias de palabras latinas</h3><p>Conocer una raíz latina permite entender decenas de palabras españolas. De <i>aqua</i> (agua): acuático, acueducto, acuario. De <i>manus</i> (mano): manual, manuscrito, manicura, emancipar. De <i>portare</i> (llevar): transportar, importar, exportar, portátil. De <i>scribere</i> (escribir): describir, inscripción, manuscrito. De <i>videre</i> (ver): visión, evidente, previsto. Los <mark>sufijos</mark> latinos también son productivos: <b>-tor</b> indica quien hace algo (lector, conductor), <b>-bilis</b> > -ble indica posibilidad (amable, legible) y <b>-tio</b> > -ción indica acción o efecto (lección, canción).</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica la evolución de «lupum» a «lobo».", pasos: ["Partimos del acusativo lupum.", "-um final > -o: lupo.", "La -p- entre vocales sonoriza a -b-: lobo.", "La u breve tónica pasa a o."], resultado: "lupum > lupo > lobo." },
    { enunciado: "Explica la evolución de «noctem» a «noche».", pasos: ["Acusativo noctem.", "El grupo -ct- da -ch-: noche(m).", "Se pierde la -m final.", "La -e final se mantiene detrás de ch."], resultado: "noctem > noche." },
    { enunciado: "¿Por qué «fábula» y «habla» vienen de la misma palabra?", pasos: ["Ambas vienen de fabulam.", "Habla es patrimonial: f- > h-, -b'l- > -bl-, pierde la vocal átona.", "Fábula es un cultismo, tomado del latín escrito casi sin cambios."], resultado: "Forman un doblete." },
  ],
  errores: [
    "Partir del nominativo: las palabras españolas suelen venir del acusativo.",
    "Diptongar vocales átonas: solo diptongan la e y la o breves tónicas.",
    "Pensar que los cultismos son palabras «más antiguas»: entraron más tarde, por vía escrita.",
    "Confundir la h- que viene de f- con la h etimológica latina (hominem > hombre).",
    "Creer que todas las palabras de una familia se escriben igual: puerta y portero comparten raíz.",
  ],
  ejercicios: [
    { q: "Explica la evolución de «terram» a «tierra».", sol: "ĕ tónica > ie y pérdida de -m: terram > tierra." },
    { q: "Explica la evolución de «filium» a «hijo».", sol: "f- > h-; -li- > j; -um > -o: filium > hijo." },
    { q: "Explica la evolución de «vitam» a «vida».", sol: "-t- intervocálica sonoriza a -d- y se pierde la -m: vida." },
    { q: "¿Qué palabra española viene de «plorare»?", sol: "Llorar (pl- > ll-)." },
    { q: "¿Qué palabra española viene de «scholam»?", sol: "Escuela (e- protética y ŏ > ue)." },
    { q: "Escribe el doblete de «clavem».", sol: "Llave (patrimonial) y clave (cultismo)." },
    { q: "Distingue patrimonial y cultismo.", sol: "La patrimonial evolucionó por vía oral con todos los cambios; el cultismo se tomó del latín escrito con pocos cambios." },
    { q: "Escribe tres palabras de la familia de «portare».", sol: "Transportar, exportar, portátil." },
    { q: "¿Qué significa el sufijo -bilis? Pon dos ejemplos.", sol: "Que se puede hacer: legible, amable." },
    { q: "¿Por qué decimos «nuevo» y «novedad»?", sol: "Porque la o solo diptonga cuando es tónica: en «novedad» el acento cae en otra sílaba." },
  ],
  quiz: [
    { q: "«focum» da en español…", o: ["fuego", "foco", "fuga"], a: 0, e: "ŏ > ue y -c- > -g-." },
    { q: "«annum» da…", o: ["año", "ano", "anual"], a: 0, e: "-nn- > ñ." },
    { q: "«flammam» da…", o: ["llama", "flama", "fama"], a: 0, e: "fl- > ll-." },
    { q: "«oculum» da…", o: ["ojo", "óculo", "ocio"], a: 0, e: "-c'l- > j." },
    { q: "El cultismo de «derecho» es…", o: ["directo", "diestro", "derecha"], a: 0, e: "Ambos de directum." },
  ],
  tarjetas: [
    ["Diptongación", "ĕ > ie y ŏ > ue cuando son tónicas."],
    ["Sonorización", "p, t, k entre vocales > b, d, g."],
    ["Doblete", "Palabra patrimonial y cultismo de un mismo origen."],
  ],
});
