// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { dos, linea, filas, figLinea } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Guerra Fría y la descolonización",
  minutos: 40,
  objetivos: ["Explicar la formación de dos bloques enfrentados tras 1945", "Describir los principales conflictos de la Guerra Fría y su final", "Analizar las causas y etapas de la descolonización"],
  claves: ["Guerra Fría", "telón de acero", "OTAN", "Pacto de Varsovia", "muro de Berlín", "descolonización"],
  pregunta: {
    texto: "Durante más de 40 años, Estados Unidos y la Unión Soviética tuvieron miles de bombas atómicas apuntándose mutuamente, pero nunca se atacaron directamente. ¿Por qué se llama a eso una guerra?",
    respuesta: "Porque fue un enfrentamiento total, aunque «frío»: ideológico, económico, militar y propagandístico. Las dos <mark>superpotencias</mark> competían por el mundo, se armaban sin parar y luchaban en guerras de otros países. A la vez, los pueblos de Asia y África conseguían su independencia: la <b>descolonización</b>.",
  },
  bloques: [
    {
      html: `<h3>Un mundo bipolar</h3><p>Tras 1945 el mundo se dividió en dos bloques. El <b>bloque occidental</b>, liderado por <mark>Estados Unidos</mark>: capitalismo y democracia liberal, con la alianza militar de la <b>OTAN</b> (1949). El <b>bloque oriental</b>, liderado por la <mark>URSS</mark>: comunismo, economía planificada y partido único, con el <b>Pacto de Varsovia</b> (1955). Churchill dijo que un «<b>telón de acero</b>» había caído sobre Europa.</p>`,
      svg: dos("Los dos bloques de la Guerra Fría", ["EE. UU.", ["capitalismo", "democracia", "liberal", "OTAN 1949", "Plan Marshall"], "var(--pen)"], ["URSS", ["comunismo", "partido único", "planificación", "Varsovia 1955", "COMECON"], "var(--red)"]),
    },
    {
      html: `<h3>Las crisis más peligrosas</h3><p>El <b>bloqueo de Berlín</b> (1948-1949) y la construcción del <mark>muro de Berlín</mark> (1961) partieron en dos la ciudad. En la <b>guerra de Corea</b> (1950-1953) y la <b>guerra de Vietnam</b> (1955-1975) las superpotencias apoyaron a bandos distintos. La <b>crisis de los misiles de Cuba</b> (1962), cuando la URSS instaló misiles nucleares a 150 km de Florida, llevó al mundo al borde de la guerra nuclear durante 13 días.</p>`,
      svg: linea("Grandes crisis de la Guerra Fría", [["1948", "bloqueo|de Berlín"], ["1950", "guerra|de Corea"], ["1961", "muro de|Berlín"], ["1962", "misiles|de Cuba"]]),
    },
    {
      html: `<h3>Carrera de armamentos y carrera espacial</h3><p>Las dos superpotencias acumularon miles de armas nucleares: si una atacaba, ambas serían destruidas («destrucción mutua asegurada»). También compitieron en el espacio: la URSS lanzó el primer satélite (<b>Sputnik</b>, 1957) y el primer astronauta (<b>Gagarin</b>, 1961); Estados Unidos llevó al primer ser humano a la Luna (<mark>Apolo 11</mark>, 1969).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cohete despegando hacia la Luna con los hitos Sputnik 1957 y Apolo 11 1969">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="210" cy="44" r="26" fill="var(--line)"/><circle cx="202" cy="38" r="5" fill="var(--muted)" opacity=".5"/><circle cx="218" cy="52" r="4" fill="var(--muted)" opacity=".5"/>
        <path d="M80 140 L 80 80 Q 90 50 100 80 L 100 140 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M80 120 L 68 140 H 80 Z M100 120 L 112 140 H 100 Z" fill="var(--red)"/>
        <path d="M84 142 Q 90 166 96 142 Z" fill="var(--sun)"/>
        <circle cx="90" cy="96" r="5" fill="var(--pen)"/>
        <text x="190" y="104" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>Sputnik 1957</text>
        <text x="190" y="124" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>Gagarin 1961</text>
        <text x="190" y="144" text-anchor="middle" font-size="12" font-weight="700" fill="var(--pen)" ${F}>Apolo 11 1969</text>
      </svg>`,
    },
    {
      html: `<h3>El final de la Guerra Fría</h3><p>En los años 80 la economía soviética estaba estancada. <b>Gorbachov</b> (1985) intentó reformarla con la <i>perestroika</i> (reestructuración) y la <i>glasnost</i> (transparencia). En 1989 los países de Europa del Este abandonaron el comunismo y el 9 de noviembre cayó el <mark>muro de Berlín</mark>. Alemania se reunificó en 1990 y en diciembre de 1991 la URSS se disolvió en 15 repúblicas.</p>`,
      svg: linea("Final de la Guerra Fría", [["1985", "Gorbachov"], ["1989", "cae el muro|de Berlín"], ["1990", "Alemania|reunificada"], ["1991", "fin de|la URSS"]], "var(--pen)"),
    },
    {
      html: `<h3>La descolonización</h3><p>Entre 1945 y 1975 casi todas las colonias de Asia y África se independizaron. Las causas: el debilitamiento de Europa tras la guerra, el nacionalismo de los pueblos colonizados, el apoyo de la ONU y de las superpotencias. Algunas independencias fueron pacíficas, como la de la <mark>India</mark> (1947), con la resistencia no violenta de <b>Gandhi</b>; otras fueron muy violentas, como la de <b>Argelia</b> frente a Francia (1954-1962). Muchos nuevos países formaron el <b>Tercer Mundo</b> y el movimiento de los no alineados.</p>`,
      svg: filas("Etapas de la descolonización", [["1945-55", "Asia: India, Indonesia", "var(--sun)"], ["1956-65", "África: Ghana, Argelia…", "var(--leaf)"], ["1966-75", "colonias portuguesas", "var(--pen)"], ["1955", "Bandung: no alineados", "var(--muted)"]]),
    },
  ],
  figura: {
    titulo: "Cronología de la Guerra Fría",
    svg: figLinea("Línea del tiempo de 1947 a 1991", [[40, "1947", "India independiente", 1], [100, "1949", "OTAN", 0], [190, "1955", "Pacto de Varsovia", 1], [260, "1961", "muro de Berlín", 0], [330, "1962", "misiles de Cuba", 1], [420, "1969", "llegada a la Luna", 0], [560, "1989", "cae el muro", 1], [630, "1991", "fin de la URSS", 0]], [[40, 630, "", "var(--muted)"]]),
  },
  video: { id: "EXijvhBQ-u8", titulo: "La Guerra Fría en 7 minutos", canal: "Academia Play", vistas: 12587533, megusta: 297612, busqueda: "guerra fría resumen" },
  quiz: [
    { q: "¿Por qué se llamó «fría» a esta guerra?", o: ["Porque se luchó en el Ártico", "Porque las superpotencias nunca se enfrentaron directamente", "Porque duró solo un invierno"], a: 1, e: "La rivalidad fue ideológica, económica y militar, pero sin combates directos entre EE. UU. y la URSS." },
    { q: "¿Qué alianza militar lideraba Estados Unidos?", o: ["El Pacto de Varsovia", "La OTAN", "El COMECON"], a: 1, e: "La OTAN se fundó en 1949; el Pacto de Varsovia fue la respuesta soviética de 1955." },
    { q: "¿Cuándo cayó el muro de Berlín?", o: ["1961", "1989", "1991"], a: 1, e: "El 9 de noviembre de 1989; se había levantado en 1961." },
    { q: "La crisis de los misiles (1962) tuvo lugar en…", o: ["Cuba", "Corea", "Vietnam"], a: 0, e: "La URSS instaló misiles nucleares en Cuba y EE. UU. impuso un bloqueo naval." },
    { q: "¿Quién lideró la independencia no violenta de la India?", o: ["Nelson Mandela", "Mahatma Gandhi", "Gorbachov"], a: 1, e: "Gandhi impulsó la desobediencia civil pacífica; la India se independizó en 1947." },
  ],
  examen: [
    { q: "¿Qué fue el Plan Marshall?", o: ["Un plan de ayuda de EE. UU. para reconstruir Europa occidental", "Un ataque soviético", "Un tratado de desarme"], a: 0, e: "Entre 1948 y 1952 EE. UU. prestó y donó miles de millones para la reconstrucción y frenar el comunismo." },
    { q: "Perestroika significa…", o: ["revolución", "reestructuración", "muro"], a: 1, e: "Fue la reforma económica de Gorbachov; glasnost era la transparencia informativa." },
    { q: "¿Qué causa favoreció la descolonización?", o: ["El fortalecimiento de Europa tras 1945", "El debilitamiento de las metrópolis europeas y el nacionalismo de los colonizados", "La creación del muro de Berlín"], a: 1, e: "Europa salió arruinada de la guerra y los pueblos colonizados exigían su independencia." },
  ],
  feynman: ["Qué diferenciaba a los dos bloques", "Por qué la crisis de Cuba fue tan peligrosa", "Cómo y por qué terminó la Guerra Fría", "Causas y ejemplos de la descolonización"],
  mapa: mapa("GUERRA FRÍA", "var(--soc, #c2410c)", [
    ["Bloques", "EE. UU./OTAN vs. URSS/Varsovia", "var(--pen)"],
    ["Crisis", "Berlín · Corea · Cuba · Vietnam", "var(--red)"],
    ["Final", "Gorbachov · 1989 · 1991", "var(--leaf)"],
    ["Descolonización", "India 1947 · África 1960", "var(--sun)"],
  ], 280),
  tarjetas: [
    ["¿Qué era el «telón de acero»?", "La frontera que separaba la Europa occidental de la oriental comunista."],
    ["OTAN", "Alianza militar occidental fundada en 1949."],
    ["Muro de Berlín", "Levantado en 1961, derribado el 9 de noviembre de 1989."],
    ["Fin de la URSS", "Diciembre de 1991."],
    ["Independencia de la India", "1947, con la resistencia no violenta de Gandhi."],
  ],
  familias: ["Preguntad a quien lo viviera qué recuerda de la caída del muro de Berlín en 1989.", "Buscad en un mapa países que se independizaron en 1960, «el año de África».", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la Guerra Fría, la descolonización y la configuración del mundo actual (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Mapa mudo de los bloques en 1955 con OTAN, Varsovia y no alineados.", "Análisis de propaganda de ambos bloques (carrera espacial).", "Discurso de Kennedy en Berlín (1963) y de Gandhi sobre la no violencia."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Guerra Fría, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Guerra_Fr%C3%ADa" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Comparar el modelo capitalista y el comunista", "Explicar las vías y las consecuencias de la descolonización"],
  bloques: [
    { tras: "Un mundo bipolar", html: `<h3>Dos modelos enfrentados</h3>${tabla(["", "Bloque occidental", "Bloque comunista"], [["Líder", "Estados Unidos", "URSS"], ["Economía", "capitalismo: propiedad privada y mercado", "planificación estatal, sin propiedad privada de empresas"], ["Política", "democracias liberales con varios partidos", "partido comunista único"], ["Alianza militar", "OTAN (1949)", "Pacto de Varsovia (1955)"], ["Ayuda económica", "Plan Marshall (1947)", "COMECON (1949)"]])}<p>Europa quedó dividida por el <mark>telón de acero</mark>, como dijo Churchill en 1946.</p>` },
    { tras: "Las crisis más peligrosas", html: `<h3>Alemania y el muro de Berlín</h3><p>En 1949 Alemania se dividió en dos Estados: la <b>República Federal</b> (RFA, occidental) y la <b>República Democrática</b> (RDA, comunista). Berlín, dentro de la RDA, también estaba partido. En 1948-1949 los soviéticos bloquearon los accesos a Berlín Oeste y los aliados lo abastecieron con un <b>puente aéreo</b>. Como miles de alemanes huían al oeste, en <mark>1961</mark> la RDA levantó el <b>muro de Berlín</b>, que se convirtió en el símbolo de la Guerra Fría. Murieron más de 100 personas intentando cruzarlo.</p>` },
    { tras: "Las crisis más peligrosas", html: `<h3>Las guerras calientes: Corea y Vietnam</h3><p>Las superpotencias nunca se enfrentaron directamente, pero apoyaron a bandos opuestos en otros países. En la <b>guerra de Corea</b> (1950-1953) el norte comunista invadió el sur; tras tres años de lucha la frontera quedó casi igual, y Corea sigue dividida. En la <mark>guerra de Vietnam</mark> (1955-1975) EE. UU. llegó a enviar más de medio millón de soldados para frenar a los comunistas; las imágenes de la guerra provocaron grandes protestas, y en 1975 Vietnam se unificó bajo un gobierno comunista.</p>` },
    { tras: "La descolonización", html: `<h3>Causas y vías de la descolonización</h3><p>Tras 1945 las metrópolis europeas estaban debilitadas, crecían los <b>movimientos nacionalistas</b> en las colonias, y tanto la ONU como EE. UU. y la URSS apoyaban la independencia. Hubo dos vías: la <b>pacífica</b>, negociada, como la de la <b>India</b> (1947), con <mark>Gandhi</mark> y su resistencia no violenta, y la <b>violenta</b>, con guerras largas, como la de Argelia contra Francia (1954-1962). África se independizó sobre todo en los años 60: en <b>1960</b>, el «año de África», nacieron 17 Estados. España concedió la independencia a Guinea Ecuatorial en 1968.</p>`, video: { id: "E8lN3zR1wm0", titulo: "La descolonización de África y Asia: resumen", canal: "Cuaderno de Historia", vistas: 390450, megusta: 0 } },
    { tras: "La descolonización", html: `<h3>El Tercer Mundo y los No Alineados</h3><p>Muchos países nuevos heredaron fronteras artificiales, economías basadas en exportar materias primas y una gran deuda: es el <mark>neocolonialismo</mark>, la dependencia económica de las antiguas metrópolis. En la <b>Conferencia de Bandung</b> (1955) los países de Asia y África condenaron el colonialismo y nació el <b>Movimiento de Países No Alineados</b>, que no quería depender de ninguno de los dos bloques. La expresión <b>Tercer Mundo</b> designó a esos países pobres, distintos del primero (capitalista) y del segundo (comunista).</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica por qué la Guerra Fría se llama «fría».", pasos: ["EE. UU. y la URSS nunca lucharon directamente entre sí.", "Su enfrentamiento fue político, económico, ideológico y tecnológico.", "Las armas nucleares hacían que una guerra directa fuera suicida.", "Sí hubo guerras «calientes» en otros países, como Corea o Vietnam."], resultado: "Porque fue una tensión permanente sin guerra directa entre las superpotencias." },
    { enunciado: "Compara la independencia de la India y la de Argelia.", pasos: ["India: negociación con Reino Unido y resistencia no violenta de Gandhi; independencia en 1947.", "Argelia: guerra de 1954 a 1962 contra Francia, con cientos de miles de muertos."], resultado: "India siguió la vía pacífica y Argelia, la violenta." },
    { enunciado: "Lee esta frase de Kennedy en 1963: «Ich bin ein Berliner» («Soy berlinés»). ¿Qué quería decir?", pasos: ["La pronunció en Berlín Oeste, rodeado por el muro.", "Mostraba el apoyo de EE. UU. a los berlineses occidentales.", "Era un mensaje a la URSS: EE. UU. no abandonaría la ciudad."], resultado: "Era un gesto de solidaridad con Berlín Oeste frente al bloque soviético." },
  ],
  errores: [
    "Pensar que EE. UU. y la URSS se enfrentaron en una guerra directa.",
    "Confundir la OTAN con el Pacto de Varsovia.",
    "Creer que el muro de Berlín se levantó en 1945: se construyó en 1961.",
    "Pensar que toda descolonización fue pacífica.",
    "Decir que la independencia acabó con la dependencia económica: surgió el neocolonialismo.",
  ],
  ejercicios: [
    { q: "¿Qué era el telón de acero?", sol: "La frontera que separaba la Europa occidental de los países comunistas del este." },
    { q: "¿Para qué sirvió el Plan Marshall?", sol: "Ayuda económica de EE. UU. para reconstruir Europa occidental y frenar el comunismo." },
    { q: "¿Qué fue el puente aéreo de Berlín?", sol: "El abastecimiento por avión de Berlín Oeste durante el bloqueo soviético de 1948-1949." },
    { q: "¿Por qué se construyó el muro de Berlín?", sol: "Para impedir que los alemanes del este huyeran al oeste." },
    { q: "¿Cómo terminó la guerra de Corea?", sol: "Con un armisticio en 1953 que dejó la península dividida casi por la misma frontera." },
    { q: "¿Qué fue la crisis de los misiles de 1962?", sol: "El enfrentamiento por los misiles soviéticos en Cuba, que puso al mundo al borde de una guerra nuclear." },
    { q: "Cita tres causas de la descolonización.", sol: "Debilidad de las metrópolis tras la guerra, nacionalismo en las colonias y apoyo de la ONU y de las superpotencias." },
    { q: "¿Qué es el neocolonialismo?", sol: "La dependencia económica que mantienen muchos países independizados respecto de sus antiguas metrópolis o de grandes empresas." },
    { q: "¿Qué se decidió en Bandung?", sol: "Condenar el colonialismo y apostar por la no alineación con ningún bloque (1955)." },
    { q: "¿Por qué cayó el muro de Berlín en 1989?", sol: "Por las reformas de Gorbachov, la crisis de los regímenes comunistas y las protestas masivas en la RDA." },
  ],
  quiz: [
    { q: "La OTAN se fundó en…", o: ["1949", "1955", "1961"], a: 0, e: "El Pacto de Varsovia, en 1955." },
    { q: "El muro de Berlín se construyó en…", o: ["1945", "1961", "1989"], a: 1, e: "Cayó en 1989." },
    { q: "La India se independizó en…", o: ["1947", "1960", "1975"], a: 0, e: "De Reino Unido." },
    { q: "El «año de África» fue…", o: ["1955", "1960", "1968"], a: 1, e: "Se independizaron 17 países." },
    { q: "Vietnam se unificó en…", o: ["1953", "1975", "1991"], a: 1, e: "Con un gobierno comunista." },
  ],
  tarjetas: [
    ["Plan Marshall", "Ayuda de EE. UU. para reconstruir Europa (1947)."],
    ["Muro de Berlín", "Levantado en 1961, cayó en 1989."],
    ["Neocolonialismo", "Dependencia económica tras la independencia política."],
  ],
});
