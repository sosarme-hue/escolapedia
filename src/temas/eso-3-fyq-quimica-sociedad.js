// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "La química en la sociedad y el medio ambiente",
  minutos: 50,
  objetivos: ["Valorar la contribución de la química a la salud, la alimentación y los materiales", "Explicar el efecto invernadero, la lluvia ácida y la destrucción de la capa de ozono", "Relacionar los plásticos y los residuos con los problemas ambientales", "Conocer los principios de la química verde y las acciones para un consumo sostenible"],
  claves: ["industria química", "medicamento", "fertilizante", "efecto invernadero", "lluvia ácida", "capa de ozono", "microplásticos", "química verde"],
  pregunta: {
    texto: "En 1987, casi todos los países del mundo firmaron prohibir unos gases que se usaban en neveras y aerosoles. Hoy, el agujero de la capa de ozono se está cerrando. ¿Qué tenía de malo un gas de nevera?",
    respuesta: "Los <mark>CFC</mark> (clorofluorocarbonos) eran estables y no tóxicos, pero al subir a la estratosfera la luz ultravioleta los rompía y liberaban cloro, que destruía el <mark>ozono</mark> que nos protege del sol. El Protocolo de Montreal demostró que la química puede causar un problema mundial… y también ayudar a resolverlo.",
  },
  bloques: [
    {
      html: `<h3>La química está en todas partes</h3><p>Desde que te levantas, la química te acompaña: el jabón y la pasta de dientes, la ropa de algodón o de poliéster, el plástico del cepillo, el combustible del autobús, la pantalla del móvil, los medicamentos o los alimentos envasados. La <mark>industria química</mark> transforma materias primas naturales, como el petróleo, el aire, la sal o los minerales, en productos útiles. En España es uno de los sectores industriales más importantes, con grandes polos en Tarragona, Huelva y Cartagena. Hay que evitar la idea de que «químico» significa «malo»: todo lo que existe, incluido tu cuerpo y una manzana, está formado por sustancias químicas. Lo importante es conocerlas y usarlas con responsabilidad.</p>`,
    },
    {
      html: `<h3>La química y la salud</h3><p>Gracias a la química, la esperanza de vida en España ha pasado de unos 35 años en 1900 a más de 83 hoy. Los <mark>medicamentos</mark> se fabrican en laboratorios: el ácido acetilsalicílico (la aspirina), el paracetamol, los <b>antibióticos</b> como la penicilina, que descubrió Fleming en 1928, o las <b>vacunas</b>. Los <b>desinfectantes</b> como el alcohol, la lejía o el agua oxigenada evitan infecciones. La <b>potabilización</b> del agua con cloro ha salvado más vidas que casi cualquier otro avance. También la química permite fabricar prótesis, lentes de contacto, anestesia o los materiales para hacer análisis de sangre. Pero los medicamentos deben usarse con receta y según las indicaciones, porque el abuso de antibióticos crea bacterias resistentes.</p>`,
    },
    {
      html: `<h3>La química y la alimentación</h3><p>Para alimentar a 8.000 millones de personas, la agricultura necesita <mark>fertilizantes</mark>, que aportan al suelo nitrógeno, fósforo y potasio. En 1909, Fritz Haber logró fabricar amoniaco a partir del nitrógeno del aire, y hoy se calcula que la mitad de la población mundial come gracias a los fertilizantes que se fabrican con él. Los <b>pesticidas</b> protegen los cultivos de plagas. Los <b>conservantes</b> y otros <b>aditivos</b>, que aparecen en las etiquetas con una letra E y un número, evitan que los alimentos se estropeen. Sin embargo, el uso excesivo de fertilizantes contamina ríos y acuíferos con nitratos y provoca la <b>eutrofización</b>: el agua se llena de algas, se queda sin oxígeno y mueren los peces, como ha ocurrido en el Mar Menor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Eutrofización: el exceso de fertilizante llega al agua, crecen muchas algas, se agota el oxígeno y mueren los peces">${BG}
        ${caja(8, 20, 70, 40, "abono", "#b8860b", { size: 11 })}${fl(80, 40, 96, 40)}
        ${caja(98, 20, 70, 40, "nitratos", "var(--pen)", { size: 11 })}${fl(170, 40, 186, 40)}${caja(188, 20, 64, 40, "algas", "var(--leaf)", { size: 11 })}
        <rect x="20" y="86" width="220" height="70" rx="8" fill="var(--water)" fill-opacity=".35"/><rect x="20" y="86" width="220" height="12" fill="var(--leaf)" fill-opacity=".7"/>
        <path d="M80 130 q 14 -10 28 0 q -14 10 -28 0 Z M108 130 l 8 -6 v 12 Z" fill="var(--muted)" transform="rotate(180 98 130)"/>
        ${t(178, 126, "sin oxígeno", { size: 11, color: "var(--red)" })}${t(178, 142, "mueren los peces", { size: 10, weight: 400 })}${fl(220, 62, 220, 84, "var(--muted)", 2)}</svg>`,
    },
    {
      html: `<h3>Los nuevos materiales</h3><p>La química ha creado materiales que no existen en la naturaleza. Los <mark>plásticos</mark>, derivados del petróleo, son ligeros, baratos, aislantes y fáciles de moldear: se usan en envases, tuberías, juguetes, coches y equipos médicos. Las <b>fibras sintéticas</b>, como el nailon y el poliéster, se usan en la ropa. Los <b>materiales compuestos</b>, como la fibra de carbono, son a la vez ligeros y muy resistentes, y se usan en bicicletas, aviones y raquetas. Los <b>semiconductores</b> de silicio permiten fabricar los chips de ordenadores y móviles. Y la <b>nanotecnología</b> trabaja con materiales a escala de átomos, como el grafeno, una lámina de carbono de un átomo de grosor, más resistente que el acero y muy buen conductor.</p>`,
    },
    {
      html: `<h3>La contaminación del aire</h3><p>La quema de combustibles fósiles en coches, calefacciones, centrales térmicas e industrias libera <b>contaminantes</b> al aire. Los principales son el <b>monóxido de carbono</b> (CO), venenoso; los <b>óxidos de nitrógeno</b> (NOₓ), que irritan los pulmones; el <b>dióxido de azufre</b> (SO₂); y las <mark>partículas en suspensión</mark>, polvo muy fino que entra hasta los pulmones. En días sin viento, sobre las grandes ciudades se forma una capa marrón de contaminación, la <b>boina</b> o <b>esmog</b>. Por eso muchas ciudades españolas han creado <b>zonas de bajas emisiones</b>, donde no pueden entrar los vehículos más contaminantes. La Organización Mundial de la Salud calcula que la contaminación del aire causa millones de muertes prematuras al año en el mundo.</p>`,
    },
    {
      html: `<h3>El efecto invernadero y el cambio climático</h3><p>La atmósfera contiene <b>gases de efecto invernadero</b>, como el dióxido de carbono (CO₂), el metano (CH₄) y el vapor de agua, que dejan pasar la luz del Sol pero retienen parte del calor que la Tierra emite. Este <mark>efecto invernadero natural</mark> es beneficioso: sin él, la temperatura media sería de −18 °C en lugar de 15 °C. El problema es que, desde la Revolución Industrial, al quemar carbón, petróleo y gas, hemos aumentado la concentración de CO₂ en más de un 50 %. Así se refuerza el efecto invernadero y se produce el <b>calentamiento global</b>: suben las temperaturas, se funden los glaciares, sube el nivel del mar y aumentan las sequías y las olas de calor, que en España son cada vez más frecuentes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Efecto invernadero: la luz del Sol atraviesa la atmósfera, la Tierra emite calor y los gases de efecto invernadero devuelven parte de ese calor hacia la superficie">${BG}
        <circle cx="30" cy="30" r="16" fill="#ffd34d"/>
        <path d="M14 90 Q 130 50 246 90" fill="none" stroke="var(--inf)" stroke-width="3" stroke-dasharray="6 4"/>${t(16, 108, "CO₂, CH₄", { size: 10, anchor: "start", color: "var(--inf)" })}
        <path d="M0 160 Q 130 120 260 160 V 180 H 0 Z" fill="var(--leaf)" fill-opacity=".45"/>
        ${fl(44, 42, 108, 136, "#e0a000", 2.5)}
        <path d="M130 134 L 150 80" stroke="var(--red)" stroke-width="2.5"/>${fl(150, 80, 170, 130, "var(--red)", 2.5)}
        ${fl(196, 136, 236, 40, "var(--red)", 1.5)}
        ${t(64, 122, "luz", { size: 10, color: "#b8860b" })}${t(176, 112, "calor", { size: 10, color: "var(--red)" })}${t(130, 176, "Tierra", { size: 10 })}</svg>`,
      video: { id: "uO_6oS4PUkU", titulo: "¿Qué es el efecto invernadero?", canal: "Smile and Learn - Español", vistas: 631016 },
    },
    {
      html: `<h3>La lluvia ácida</h3><p>El <b>dióxido de azufre</b> y los <b>óxidos de nitrógeno</b> que se liberan al quemar combustibles reaccionan en la atmósfera con el agua y el oxígeno y forman <b>ácido sulfúrico</b> y <b>ácido nítrico</b>. Estos ácidos caen con la lluvia: es la <mark>lluvia ácida</mark>. Puede viajar cientos de kilómetros con el viento. Acidifica lagos y ríos, matando peces; daña las hojas de los árboles y empobrece los suelos; y corroe los edificios y monumentos de piedra caliza y mármol, como las catedrales. Se ha reducido mucho en Europa gracias a usar combustibles con menos azufre, filtros en las chimeneas de las fábricas y catalizadores en los coches.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Formación de la lluvia ácida: una fábrica y un coche emiten óxidos de azufre y nitrógeno, que en la nube forman ácidos que caen con la lluvia sobre bosques y lagos">${BG}
        <rect x="20" y="110" width="40" height="50" fill="var(--muted)"/><rect x="40" y="76" width="10" height="34" fill="var(--muted)"/>
        <circle cx="50" cy="66" r="8" fill="#999" fill-opacity=".6"/><circle cx="62" cy="54" r="10" fill="#999" fill-opacity=".5"/>
        ${fl(70, 50, 120, 40)}${t(96, 64, "SO₂ · NOₓ", { size: 10, color: "var(--muted)" })}
        <ellipse cx="170" cy="36" rx="54" ry="20" fill="#999" fill-opacity=".5"/>${t(170, 40, "+ agua → ácidos", { size: 10 })}
        ${[140, 158, 176, 194].map(x => `<line x1="${x}" y1="62" x2="${x - 6}" y2="${100}" stroke="var(--pen)" stroke-width="2"/>`).join("")}
        <path d="M150 160 l 10 -40 l 10 40 Z M178 160 l 10 -30 l 10 30 Z" fill="var(--leaf)" fill-opacity=".6"/><rect x="200" y="150" width="46" height="10" rx="4" fill="var(--water)"/>
        ${t(176, 176, "bosques y lagos dañados", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "myad29yNm44", titulo: "¿Qué es la LLUVIA ÁCIDA? EFECTOS de la Lluvia Ácida", canal: "EcologíaVerde", vistas: 604664 },
    },
    {
      html: `<h3>La capa de ozono</h3><p>En la <b>estratosfera</b>, entre 15 y 35 km de altura, hay una zona rica en <b>ozono</b> (O₃) que absorbe la mayor parte de la radiación <b>ultravioleta</b> del Sol, que produce quemaduras, cáncer de piel y cataratas. En los años ochenta se descubrió que se estaba formando un <mark>agujero en la capa de ozono</mark> sobre la Antártida. La causa eran los <b>CFC</b>, gases usados en neveras, aires acondicionados y aerosoles. En 1987, el <b>Protocolo de Montreal</b> los prohibió. Es el acuerdo ambiental de más éxito de la historia: la capa de ozono se está recuperando y se espera que vuelva a su estado de 1980 hacia mediados de este siglo. No hay que confundir este problema con el cambio climático, aunque a veces se mezclan.</p>`,
    },
    {
      html: `<h3>Los plásticos y los residuos</h3><p>Los plásticos tardan <b>cientos de años</b> en degradarse. Cada año llegan al mar millones de toneladas, que forman enormes islas de basura flotante y matan tortugas, aves y peces que los confunden con comida. Con el sol y las olas, los plásticos se rompen en trozos de menos de 5 mm, los <mark>microplásticos</mark>, que ya se han encontrado en el agua del grifo, en la sal, en el pescado y hasta en la sangre humana. La solución sigue la regla de las <b>tres erres</b>, por orden de importancia: <b>reducir</b> (evitar envases innecesarios), <b>reutilizar</b> (usar botellas y bolsas muchas veces) y <b>reciclar</b> (separar los residuos en los contenedores adecuados: amarillo para envases, azul para papel, verde para vidrio y marrón para restos orgánicos).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro contenedores de reciclaje: amarillo para envases, azul para papel y cartón, verde para vidrio y marrón para orgánico">${BG}
        ${[["#f2c200", "envases"], ["#2f6fd6", "papel"], ["#2e9b4a", "vidrio"], ["#8a5a2a", "orgánico"]].map(([c, n], i) => { const x = 20 + i * 58; return `<rect x="${x}" y="60" width="46" height="70" rx="5" fill="${c}"/><rect x="${x - 3}" y="52" width="52" height="10" rx="3" fill="${c}"/><circle cx="${x + 10}" cy="134" r="5" fill="var(--ink)"/><circle cx="${x + 36}" cy="134" r="5" fill="var(--ink)"/>${t(x + 23, 158, n, { size: 10 })}`; }).join("")}
        ${t(130, 30, "reducir · reutilizar · reciclar", { size: 12, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>La química verde y el desarrollo sostenible</h3><p>La <mark>química verde</mark> o sostenible busca diseñar productos y procesos que reduzcan o eliminen las sustancias peligrosas. Algunos de sus principios son: <b>evitar residuos</b> mejor que limpiarlos después; usar <b>materias primas renovables</b>, como plantas, en lugar de petróleo; ahorrar <b>energía</b>; usar <b>catalizadores</b>; y fabricar productos que se <b>degraden</b> sin dañar el medio ambiente, como los plásticos biodegradables. La química también desarrolla soluciones: <b>baterías</b> para coches eléctricos, <b>paneles solares</b> más eficientes, <b>hidrógeno verde</b> como combustible limpio o técnicas para capturar CO₂. Estos esfuerzos forman parte de los <b>Objetivos de Desarrollo Sostenible</b> de la ONU para 2030.</p>`,
    },
  ],
  figura: {
    titulo: "La química: beneficios y retos",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Balanza con beneficios de la química a la izquierda, como medicamentos, fertilizantes, materiales y agua potable, y retos a la derecha, como cambio climático, lluvia ácida, ozono y plásticos; en el centro, la química verde">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${caja(20, 20, 260, 44, "BENEFICIOS", "var(--leaf)", { size: 16 })}${caja(360, 20, 260, 44, "RETOS", "var(--red)", { size: 16 })}
      ${["medicamentos y vacunas", "fertilizantes", "nuevos materiales", "agua potable"].map((n, i) => t(150, 94 + i * 26, n, { size: 14, weight: 400 })).join("")}
      ${["cambio climático", "lluvia ácida", "capa de ozono", "plásticos y residuos"].map((n, i) => t(490, 94 + i * 26, n, { size: 14, weight: 400 })).join("")}
      ${caja(200, 192, 240, 36, "química verde y sostenible", "var(--pen)", { size: 14 })}
    </svg>`,
  },
  video: { id: "2mn1dnBbOuI", titulo: "Química verde: una ciencia sostenible ambiental y económicamente", canal: "FRANCE 24 Español", vistas: 27037, megusta: 0, busqueda: "química sostenible plásticos reciclaje" },
  ejemplos: [
    { enunciado: "Explica por qué la lluvia ácida daña una catedral de piedra caliza.",
      pasos: ["La caliza es carbonato de calcio.", "Los ácidos de la lluvia reaccionan con el carbonato de calcio.", "Se forman sustancias solubles y CO₂: la piedra se va disolviendo."],
      resultado: "los ácidos reaccionan con la caliza y la desgastan." },
    { enunciado: "Una familia gasta 300 bolsas de plástico al año. Si cada bolsa pesa 5 g, ¿cuánto plástico evitarían con bolsas reutilizables?",
      pasos: ["Masa total = 300 · 5 g.", "= 1500 g.", "= 1,5 kg al año."],
      resultado: "1,5 kg de plástico al año." },
    { enunciado: "¿Es lo mismo el agujero de la capa de ozono que el cambio climático?",
      pasos: ["El agujero lo causan los CFC, que destruyen el ozono y dejan pasar más rayos UV.", "El cambio climático lo causa el aumento de gases de efecto invernadero, sobre todo CO₂.", "Son problemas distintos, con causas y soluciones distintas."],
      resultado: "no; son dos problemas diferentes." },
  ],
  errores: [
    "Pensar que «químico» significa «tóxico»: todo está formado por sustancias químicas.",
    "Creer que el efecto invernadero es malo en sí: el natural permite la vida; el problema es su aumento.",
    "Confundir el agujero de la capa de ozono con el cambio climático.",
    "Pensar que reciclar es lo más importante: primero reducir y reutilizar.",
    "Usar antibióticos para un catarro: no sirven contra virus y crean resistencias.",
  ],
  ejercicios: [
    { q: "Cita cuatro productos químicos que uses en un día y para qué sirven.", sol: "Por ejemplo: jabón (higiene), pasta de dientes (proteger el esmalte), plástico del móvil (aislar y proteger), medicamento (curar), combustible del autobús (energía)." },
    { q: "¿Cómo ha contribuido la química a aumentar la esperanza de vida?", sol: "Con medicamentos, antibióticos, vacunas, desinfectantes y la potabilización del agua." },
    { q: "¿Qué son los fertilizantes y qué problema causa su abuso?", sol: "Sustancias que aportan nutrientes al suelo (N, P, K). Su exceso contamina el agua y causa eutrofización." },
    { q: "Nombra tres materiales creados por la química y una aplicación de cada uno.", sol: "Plástico (envases), fibra de carbono (bicicletas), silicio (chips), nailon (ropa)." },
    { q: "Explica la diferencia entre efecto invernadero natural y calentamiento global.", sol: "El natural mantiene la Tierra a unos 15 °C; el calentamiento global es su refuerzo por el aumento de CO₂ y otros gases de origen humano." },
    { q: "¿Cómo se forma la lluvia ácida y qué efectos tiene?", sol: "SO₂ y NOₓ reaccionan con agua y oxígeno en la atmósfera y forman ácidos que caen con la lluvia; dañan lagos, bosques y monumentos." },
    { q: "¿Por qué es importante la capa de ozono y qué la dañaba?", sol: "Absorbe la radiación ultravioleta; la dañaban los CFC, prohibidos por el Protocolo de Montreal." },
    { q: "¿Qué son los microplásticos y dónde se han encontrado?", sol: "Trozos de plástico de menos de 5 mm; se han encontrado en el mar, el agua del grifo, la sal, el pescado y la sangre humana." },
    { q: "Ordena y explica las tres erres.", sol: "Reducir (consumir menos), reutilizar (dar más usos) y reciclar (separar para fabricar nuevos productos)." },
    { q: "Explica dos principios de la química verde.", sol: "Evitar residuos en lugar de tratarlos; usar materias primas renovables; ahorrar energía; fabricar productos biodegradables." },
  ],
  quiz: [
    { q: "La penicilina la descubrió…", o: ["Fleming", "Lavoisier", "Haber"], a: 0, e: "Alexander Fleming, en 1928." },
    { q: "El principal gas de efecto invernadero de origen humano es…", o: ["el oxígeno", "el CO₂", "el nitrógeno"], a: 1, e: "El CO₂." },
    { q: "Sin efecto invernadero, la temperatura media sería…", o: ["−18 °C", "15 °C", "40 °C"], a: 0, e: "−18 °C." },
    { q: "La lluvia ácida la causan sobre todo…", o: ["SO₂ y NOₓ", "O₂ y N₂", "CFC"], a: 0, e: "Óxidos de azufre y nitrógeno." },
    { q: "La capa de ozono nos protege de…", o: ["la radiación ultravioleta", "el frío", "los meteoritos"], a: 0, e: "Los rayos UV." },
    { q: "Los CFC se prohibieron con el…", o: ["Protocolo de Kioto", "Protocolo de Montreal", "Acuerdo de París"], a: 1, e: "Montreal, 1987." },
    { q: "Un microplástico mide menos de…", o: ["5 mm", "5 cm", "5 m"], a: 0, e: "5 mm." },
    { q: "Los envases de plástico van al contenedor…", o: ["azul", "amarillo", "verde"], a: 1, e: "Amarillo." },
    { q: "La eutrofización la causa el exceso de…", o: ["nutrientes", "sal", "oxígeno"], a: 0, e: "Nutrientes como los nitratos." },
    { q: "La química verde busca…", o: ["más residuos", "evitar sustancias peligrosas", "usar solo petróleo"], a: 1, e: "Reducir sustancias peligrosas." },
  ],
  examen: [
    { q: "La primera de las tres erres es…", o: ["reciclar", "reducir", "reutilizar"], a: 1, e: "Reducir." },
    { q: "El grafeno es una lámina de…", o: ["silicio", "carbono", "hierro"], a: 1, e: "Carbono." },
    { q: "Las zonas de bajas emisiones buscan reducir…", o: ["la contaminación del aire", "el ruido de los aviones", "la lluvia"], a: 0, e: "La contaminación del aire." },
  ],
  feynman: ["Cómo ha mejorado la química nuestra salud y alimentación", "Qué diferencia hay entre efecto invernadero, lluvia ácida y agujero de ozono", "Qué puedo hacer yo para reducir los residuos"],
  mapa: mapa("QUÍMICA Y SOCIEDAD", "var(--eso)", [
    ["Beneficios", "salud · alimentos · materiales", "var(--leaf)"],
    ["Aire", "efecto invernadero · lluvia ácida", "var(--red)"],
    ["Ozono y residuos", "CFC · plásticos · microplásticos", "#b8860b"],
    ["Soluciones", "química verde · tres erres", "var(--pen)"],
  ], 300),
  tarjetas: [
    ["Fertilizante", "Aporta nitrógeno, fósforo y potasio al suelo."],
    ["Eutrofización", "Exceso de nutrientes en el agua: algas y falta de oxígeno."],
    ["Efecto invernadero", "Los gases retienen calor; su aumento calienta el planeta."],
    ["Lluvia ácida", "Lluvia con ácidos formados por SO₂ y NOₓ."],
    ["Capa de ozono", "Capa de O₃ que absorbe la radiación ultravioleta."],
    ["CFC", "Gases que destruían el ozono; prohibidos en 1987."],
    ["Microplásticos", "Fragmentos de plástico de menos de 5 mm."],
    ["Química verde", "Diseñar procesos que eviten sustancias peligrosas."],
  ],
  familias: ["Durante una semana, anotad cuántos envases de plástico de un solo uso entran en casa y buscad alternativas.", "Revisad las etiquetas de productos de limpieza y buscad los pictogramas de peligro.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "El cambio: la química en la sociedad, industria química, impacto ambiental de las reacciones, contaminación, residuos y química sostenible (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Medir el pH del agua de lluvia y de distintos líquidos con indicador de col lombarda.", "Auditoría de residuos del aula durante una semana.", "Debate por roles sobre una zona de bajas emisiones en la ciudad."],
  },
  fuentes: [RD, wiki("Lluvia ácida", "Lluvia_%C3%A1cida"), wiki("Química verde", "Qu%C3%ADmica_verde")],
  revisado: "2026-11-12",
};
