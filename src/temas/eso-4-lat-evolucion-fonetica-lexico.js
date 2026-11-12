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
