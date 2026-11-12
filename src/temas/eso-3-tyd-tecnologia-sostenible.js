// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Tecnología sostenible",
  minutos: 55,
  objetivos: ["Analizar el impacto ambiental y social de los productos tecnológicos a lo largo de su ciclo de vida", "Comparar el modelo de economía lineal con la economía circular", "Valorar la obsolescencia programada y el consumo responsable de la tecnología", "Proponer soluciones tecnológicas sostenibles relacionadas con la energía, los residuos y los Objetivos de Desarrollo Sostenible"],
  claves: ["desarrollo sostenible", "ciclo de vida", "huella de carbono", "economía circular", "ecodiseño", "obsolescencia programada", "residuos electrónicos", "ODS"],
  pregunta: {
    texto: "Fabricar un móvil que pesa 200 gramos genera unos 50 kilos de residuos y emite más CO₂ que usarlo durante tres años. ¿Cómo puede ser?",
    respuesta: "Porque el mayor impacto de un aparato no está en su uso, sino en su <mark>fabricación</mark>: extraer los minerales, refinarlos, producir los chips y transportar las piezas por todo el mundo consume enormes cantidades de energía, agua y materiales. Por eso la medida más sostenible es <b>alargar la vida</b> de los aparatos: usarlos más años, repararlos y reutilizarlos.",
  },
  bloques: [
    {
      html: `<h3>Tecnología y desarrollo sostenible</h3><p>La tecnología ha mejorado enormemente nuestra calidad de vida: medicina, alimentos, comunicaciones, transporte. Pero también ha generado problemas: <b>cambio climático</b>, contaminación del aire y del agua, agotamiento de recursos, montañas de residuos y pérdida de biodiversidad. El <mark>desarrollo sostenible</mark> es el que <b>satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras</b> para satisfacer las suyas. Se apoya en tres pilares que deben equilibrarse: el <b>ambiental</b> (cuidar el planeta), el <b>social</b> (que beneficie a todas las personas) y el <b>económico</b> (que sea viable). La tecnología puede ser parte del problema, pero también de la solución.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres círculos que se cruzan: ambiental, social y económico; en el centro, sostenible">${BG}
        <circle cx="100" cy="72" r="46" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><circle cx="160" cy="72" r="46" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><circle cx="130" cy="118" r="46" fill="#b8860b" fill-opacity=".2" stroke="#b8860b" stroke-width="2"/>
        ${t(88, 60, "ambiental", { size: 10, color: "var(--leaf)" })}${t(184, 58, "social", { size: 10, color: "var(--pen)" })}${t(130, 148, "económico", { size: 10, color: "#b8860b" })}${t(130, 97, "sostenible", { size: 9 })}</svg>`,
    },
    {
      html: `<h3>El ciclo de vida de un producto</h3><p>Para conocer el impacto real de un objeto hay que estudiar todo su <mark>ciclo de vida</mark>, «de la cuna a la tumba»: <b>extracción</b> de las materias primas; <b>fabricación</b> de los materiales y montaje; <b>distribución</b> y transporte hasta la tienda; <b>uso</b> por parte del consumidor, que consume energía y agua; y <b>fin de vida</b>, cuando se tira, se recicla o se reutiliza. En cada fase se consumen recursos y se generan residuos y emisiones. El <b>análisis del ciclo de vida</b> permite descubrir en qué fase está el mayor impacto y mejorar el diseño. En un móvil, cerca del <b>80 %</b> de las emisiones se producen antes de que llegue a nuestras manos.</p>`,
    },
    {
      html: `<h3>La huella ecológica y la huella de carbono</h3><p>La <b>huella ecológica</b> mide la superficie de tierra y mar necesaria para producir lo que consume una persona o un país y absorber sus residuos. Si toda la humanidad viviera como la media de los españoles, harían falta más de <b>dos planetas Tierra</b>. La <mark>huella de carbono</mark> mide la cantidad de <b>gases de efecto invernadero</b>, sobre todo CO₂, que se emiten para fabricar un producto, prestar un servicio o en las actividades de una persona. Se expresa en kilogramos o toneladas de CO₂ equivalente. Lo digital también tiene huella: los <b>centros de datos</b> que alojan la nube, el <i>streaming</i> o la inteligencia artificial consumen grandes cantidades de electricidad y agua para refrigerarse.</p>`,
    },
    {
      html: `<h3>Economía lineal y economía circular</h3><p>El modelo tradicional es la <b>economía lineal</b>: <b>extraer → fabricar → usar → tirar</b>. Consume recursos sin parar y genera enormes cantidades de residuos. La <mark>economía circular</mark> propone cerrar el círculo: que los productos, sus componentes y sus materiales mantengan su valor el mayor tiempo posible. Para ello se diseñan productos duraderos y reparables, se alarga su uso, se reparan, se reutilizan, se reacondicionan y, al final, se reciclan sus materiales para fabricar productos nuevos, de modo que los residuos de unos se convierten en recursos de otros. Así se reduce la extracción de materias primas, la energía consumida y los residuos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Arriba, economía lineal en línea recta de extraer a tirar; abajo, economía circular en círculo: fabricar, usar, reparar, reciclar">${BG}
        ${t(130, 22, "LINEAL", { size: 11, color: "var(--red)" })}
        ${[["extraer", 30], ["fabricar", 90], ["usar", 150], ["tirar", 210]].map(([n, x]) => t(x, 46, n, { size: 9 })).join("")}${fl(52, 42, 66, 42, "var(--red)", 2)}${fl(114, 42, 132, 42, "var(--red)", 2)}${fl(170, 42, 192, 42, "var(--red)", 2)}
        <circle cx="130" cy="118" r="40" fill="none" stroke="var(--leaf)" stroke-width="3"/>
        ${fl(160, 92, 166, 100, "var(--leaf)", 3)}${fl(156, 146, 148, 152, "var(--leaf)", 3)}${fl(100, 144, 94, 136, "var(--leaf)", 3)}${fl(104, 90, 112, 84, "var(--leaf)", 3)}
        ${t(130, 72, "fabricar", { size: 9, color: "var(--leaf)" })}${t(186, 122, "usar", { size: 9, color: "var(--leaf)", anchor: "start" })}${t(130, 172, "reparar", { size: 9, color: "var(--leaf)" })}${t(74, 122, "reciclar", { size: 9, color: "var(--leaf)", anchor: "end" })}${t(130, 122, "CIRCULAR", { size: 10, color: "var(--leaf)" })}</svg>`,
      video: { id: "ZEgLWrMJd2M", titulo: "La economía circular en 4 minutos", canal: "Pixtin Design", vistas: 506200 },
    },
    {
      html: `<h3>Ecodiseño</h3><p>El <mark>ecodiseño</mark> consiste en tener en cuenta el <b>medio ambiente</b> desde el principio, en la fase de diseño del proceso tecnológico, porque ahí se decide la mayor parte del impacto de un producto. Sus estrategias son: usar <b>menos material</b> y materiales <b>reciclados</b> o reciclables; evitar sustancias tóxicas; diseñar productos <b>duraderos</b>, fáciles de <b>reparar</b> (con tornillos en vez de pegamento y piezas de recambio) y de <b>desmontar</b> para separar los materiales; reducir el <b>consumo de energía</b> durante el uso; usar <b>embalajes</b> mínimos y reciclables; y fabricar cerca para acortar el transporte. Un ejemplo son los móviles modulares en los que el usuario puede cambiar la batería o la pantalla.</p>`,
    },
    {
      html: `<h3>La obsolescencia programada</h3><p>La <mark>obsolescencia programada</mark> es la práctica de diseñar productos para que tengan una vida útil más corta de la necesaria, de modo que haya que sustituirlos antes. El caso más famoso es el del <b>cártel Febo</b>: en 1924, los fabricantes de bombillas acordaron limitar su duración a 1 000 horas. Hoy se habla de baterías que no se pueden cambiar, piezas pegadas, falta de recambios o actualizaciones que ralentizan aparatos antiguos. También existe la <b>obsolescencia percibida</b>: cambiar un producto que funciona solo porque ha salido un modelo nuevo o porque «pasa de moda». La Unión Europea ha aprobado el <b>derecho a reparar</b>, que obliga a ofrecer recambios y reparaciones durante varios años.</p>`,
      video: { id: "aBDykqMv0xc", titulo: "Obsolescencia Programada: Tecnología con fecha de caducidad", canal: "Tecnonauta", vistas: 405434 },
    },
    {
      html: `<h3>Residuos electrónicos y reciclaje</h3><p>Los <mark>residuos de aparatos eléctricos y electrónicos (RAEE)</mark> son el tipo de residuo que más crece en el mundo: más de 60 millones de toneladas al año, y solo se recicla alrededor de un <b>20 %</b>. Contienen <b>metales valiosos</b> (oro, plata, cobre, cobalto, litio, tierras raras), por lo que una tonelada de móviles tiene más oro que una tonelada de mineral, y también <b>sustancias tóxicas</b> (plomo, mercurio, cadmio). Muchos acaban en vertederos de países pobres, donde se queman al aire libre con graves daños para la salud. Deben llevarse a un <b>punto limpio</b> o devolverse en la tienda al comprar uno nuevo; las pilas y baterías, a sus contenedores específicos. Los aparatos que aún funcionan se pueden <b>donar</b> o vender de segunda mano.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un móvil desmontado en sus materiales: metales valiosos que se recuperan y sustancias tóxicas que hay que tratar">${BG}
        <rect x="104" y="30" width="52" height="92" rx="8" fill="var(--paper)" stroke="var(--ink)" stroke-width="2.5"/><rect x="110" y="40" width="40" height="66" fill="var(--pen)" fill-opacity=".2"/>
        ${fl(102, 56, 64, 46, "#b8860b", 2)}${t(56, 44, "oro, plata", { size: 10, color: "#b8860b", anchor: "end" })}
        ${fl(102, 86, 64, 86, "#b8860b", 2)}${t(56, 90, "cobre, litio", { size: 10, color: "#b8860b", anchor: "end" })}
        ${fl(158, 56, 196, 46, "var(--red)", 2)}${t(202, 44, "plomo", { size: 10, color: "var(--red)", anchor: "start" })}
        ${fl(158, 86, 196, 86, "var(--red)", 2)}${t(202, 90, "mercurio", { size: 10, color: "var(--red)", anchor: "start" })}
        ${t(130, 150, "al punto limpio, nunca a la basura", { size: 11, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>Energía y tecnología sostenible</h3><p>La mayor parte de las emisiones de CO₂ proceden de la producción de <b>energía</b> con combustibles fósiles. La tecnología sostenible apuesta por las <mark>energías renovables</mark> (solar, eólica, hidráulica, biomasa, geotérmica), por la <b>eficiencia energética</b> y por el <b>ahorro</b>. Ejemplos: <b>placas solares</b> en tejados para el autoconsumo; <b>bombillas LED</b>, que gastan un 80 % menos que las incandescentes; electrodomésticos de <b>clase A</b>; <b>aislamiento</b> de los edificios; <b>vehículos eléctricos</b> y transporte público; y <b>redes inteligentes</b> que ajustan la producción al consumo. La domótica también ahorra: apaga luces y regula la calefacción automáticamente. La energía más limpia es la que no se consume.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barras de potencia para dar la misma luz: incandescente 60 vatios, halógena 42, bajo consumo 14 y LED 8">${BG}
        ${[["incandescente", 60, "var(--red)"], ["halógena", 42, "#b8860b"], ["bajo consumo", 14, "var(--pen)"], ["LED", 8, "var(--leaf)"]].map(([n, w, c], i) => t(96, 44 + i * 30, n, { size: 10, anchor: "end" }) + `<rect x="104" y="${32 + i * 30}" width="${w * 2}" height="16" rx="3" fill="${c}"/>` + t(110 + w * 2, 44 + i * 30, w + " W", { size: 10, color: c, anchor: "start" })).join("")}
        ${t(130, 166, "misma luz, mucha menos energía", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Consumo responsable de tecnología</h3><p>Como consumidores también podemos actuar, siguiendo la regla de las <b>erres</b>. <b>Repensar</b>: ¿necesito de verdad un móvil nuevo? <b>Reducir</b>: comprar menos y elegir productos eficientes y duraderos. <b>Reutilizar</b>: dar segunda vida a los aparatos, comprar <b>reacondicionados</b>. <b>Reparar</b>: arreglar antes que tirar, en servicios técnicos o en «cafés de reparación». <b>Reciclar</b>: llevar los residuos al punto limpio. Otros hábitos: cuidar los aparatos (fundas, protectores), cargar bien las baterías, desactivar la reproducción automática de vídeos, descargar en lugar de ver varias veces en <i>streaming</i>, borrar archivos y correos innecesarios de la nube y apagar los aparatos en lugar de dejarlos en espera.</p>`,
    },
    {
      html: `<h3>Tecnología para los Objetivos de Desarrollo Sostenible</h3><p>En 2015, la ONU aprobó la <b>Agenda 2030</b> con 17 <mark>Objetivos de Desarrollo Sostenible (ODS)</mark>, como acabar con la pobreza y el hambre, garantizar el agua limpia, la energía asequible y no contaminante, ciudades sostenibles, producción y consumo responsables y acción por el clima. La tecnología es clave para alcanzarlos: depuradoras y potabilizadoras de bajo coste, sensores que ahorran agua de riego, drones que vigilan los bosques, aplicaciones que reducen el desperdicio de alimentos, energía solar en zonas sin red eléctrica o materiales biodegradables que sustituyen a los plásticos. Pero la tecnología debe ser también <b>accesible</b> para todas las personas, sin dejar a nadie atrás: es la idea de <b>brecha digital</b>.</p>${tabla(["ODS", "Ejemplo tecnológico"], [["6. Agua limpia", "riego por goteo con sensores"], ["7. Energía asequible y limpia", "placas solares y LED"], ["11. Ciudades sostenibles", "transporte eléctrico y carril bici"], ["12. Consumo responsable", "economía circular y reparación"], ["13. Acción por el clima", "renovables y eficiencia"]])}`,
      video: { id: "Lc4-2cVKxp0", titulo: "Economía Circular: descubre lo que es antes de que reviente el Planeta", canal: "COTEC", vistas: 3154107 },
    },
  ],
  figura: {
    titulo: "Ciclo de vida de un móvil y dónde actuar",
    svg: `<svg viewBox="0 0 640 250" role="img" aria-label="Fases del ciclo de vida de un móvil: extracción, fabricación, transporte, uso y fin de vida, con la acción sostenible para cada una">
      <rect width="640" height="250" rx="16" fill="var(--paper)"/>
      ${[["extracción", "minerales", "var(--red)"], ["fabricación", "chips, montaje", "var(--red)"], ["transporte", "barco, avión", "#b8860b"], ["uso", "carga, datos", "var(--pen)"], ["fin de vida", "residuo", "var(--muted)"]].map(([n, d, c], i) => caja(20 + i * 124, 60, 106, 46, n, c, { size: 13 }) + t(73 + i * 124, 126, d, { size: 12, color: "var(--muted)" }) + (i < 4 ? fl(128 + i * 124, 83, 142 + i * 124, 83, "var(--ink)", 2) : "")).join("")}
      ${t(320, 36, "≈ 80 % de las emisiones antes de usarlo", { size: 14, color: "var(--red)", font: D })}
      ${t(73, 170, "reciclar metales", { size: 12, color: "var(--leaf)" })}${t(197, 170, "ecodiseño", { size: 12, color: "var(--leaf)" })}${t(321, 170, "fabricar cerca", { size: 12, color: "var(--leaf)" })}${t(445, 170, "usarlo más años", { size: 12, color: "var(--leaf)" })}${t(569, 170, "reparar, reutilizar", { size: 12, color: "var(--leaf)" })}
      <path d="M569 186 V 210 H 73 V 186" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>${fl(73, 200, 73, 184, "var(--leaf)", 2.5)}${t(321, 230, "economía circular: el final vuelve al principio", { size: 13, color: "var(--leaf)", font: D })}
    </svg>`,
  },
  video: { id: "fIl_Lr5Rf5A", titulo: "Sociedad de consumo y obsolescencia programada", canal: "Mundo Equilibrio", vistas: 1566387, megusta: 0, busqueda: "tecnología sostenible economía circular obsolescencia programada" },
  ejemplos: [
    { enunciado: "Un móvil emite 60 kg de CO₂ al fabricarse y 5 kg al año por su uso. Compara la huella anual si se usa 2 años o 4 años.",
      pasos: ["2 años: (60 + 2 · 5) / 2 = 70 / 2 = 35 kg al año.", "4 años: (60 + 4 · 5) / 4 = 80 / 4 = 20 kg al año.", "Usarlo el doble de tiempo casi divide entre dos su huella anual."],
      resultado: "35 kg/año frente a 20 kg/año: conviene alargar su vida." },
    { enunciado: "Una bombilla incandescente de 60 W se cambia por un LED de 8 W. Si se usa 4 h al día, ¿cuánta energía se ahorra al año?",
      pasos: ["Ahorro de potencia: 60 − 8 = 52 W = 0,052 kW.", "Horas al año: 4 · 365 = 1 460 h.", "Energía: 0,052 · 1 460 ≈ 76 kWh."],
      resultado: "Unos 76 kWh al año por bombilla." },
    { enunciado: "Aplica la economía circular a un ordenador viejo del instituto.",
      pasos: ["Repensar: ¿se puede mejorar con más memoria o un disco SSD?", "Reparar o reacondicionar e instalar un sistema ligero, como Linux.", "Si no tiene arreglo, llevarlo al punto limpio para recuperar sus materiales."],
      resultado: "Actualizar y reutilizar antes que reciclar." },
  ],
  errores: [
    "Pensar que lo digital no contamina: los centros de datos consumen mucha energía y agua.",
    "Creer que reciclar es la primera opción: antes van reducir, reutilizar y reparar.",
    "Pensar que el mayor impacto de un móvil es la electricidad que gasta al cargarlo.",
    "Confundir obsolescencia programada con el desgaste normal de un aparato.",
    "Tirar pilas y aparatos electrónicos a la basura normal.",
  ],
  ejercicios: [
    { q: "Define desarrollo sostenible y nombra sus tres pilares.", sol: "Satisfacer las necesidades actuales sin comprometer las futuras; ambiental, social y económico." },
    { q: "Ordena las fases del ciclo de vida de un producto.", sol: "Extracción, fabricación, distribución, uso y fin de vida." },
    { q: "¿Qué es la huella de carbono? ¿En qué se mide?", sol: "Los gases de efecto invernadero emitidos; en kg o t de CO₂ equivalente." },
    { q: "Compara la economía lineal y la circular.", sol: "Lineal: extraer, fabricar, usar y tirar. Circular: mantener el valor reparando, reutilizando y reciclando." },
    { q: "Escribe cuatro estrategias de ecodiseño.", sol: "Menos material, materiales reciclables, fácil de reparar y desmontar, bajo consumo de energía." },
    { q: "¿Qué es la obsolescencia programada? Pon un ejemplo histórico.", sol: "Diseñar productos para que duren menos; el cártel Febo de las bombillas en 1924." },
    { q: "¿Por qué hay que reciclar los residuos electrónicos?", sol: "Contienen metales valiosos que se recuperan y sustancias tóxicas que contaminan." },
    { q: "Nombra cuatro tecnologías que ayudan a ahorrar energía.", sol: "LED, electrodomésticos de clase A, aislamiento, domótica (o placas solares)." },
    { q: "Explica tres acciones de consumo responsable de tecnología.", sol: "Alargar la vida de los aparatos, comprar reacondicionados, reparar antes que tirar." },
    { q: "Elige un ODS y propón una solución tecnológica.", sol: "Por ejemplo, ODS 6: riego por goteo con sensores de humedad para ahorrar agua." },
  ],
  quiz: [
    { q: "El desarrollo sostenible tiene en cuenta a…", o: ["las generaciones futuras", "solo la economía", "solo el presente"], a: 0, e: "Las generaciones futuras." },
    { q: "El análisis «de la cuna a la tumba» estudia el…", o: ["ciclo de vida", "precio", "diseño gráfico"], a: 0, e: "Ciclo de vida." },
    { q: "La huella de carbono mide…", o: ["gases de efecto invernadero", "agua", "superficie"], a: 0, e: "Gases de efecto invernadero." },
    { q: "Extraer, fabricar, usar y tirar es la economía…", o: ["lineal", "circular", "verde"], a: 0, e: "Lineal." },
    { q: "Diseñar pensando en el medio ambiente es…", o: ["ecodiseño", "marketing", "obsolescencia"], a: 0, e: "Ecodiseño." },
    { q: "El cártel Febo limitó la duración de las…", o: ["bombillas", "pilas", "radios"], a: 0, e: "Bombillas." },
    { q: "Los residuos electrónicos se llevan al…", o: ["punto limpio", "contenedor amarillo", "contenedor verde"], a: 0, e: "Punto limpio." },
    { q: "La mayor parte del impacto de un móvil está en su…", o: ["fabricación", "carga", "funda"], a: 0, e: "Fabricación." },
    { q: "Un aparato reacondicionado es…", o: ["usado y revisado para venderse de nuevo", "nuevo", "roto"], a: 0, e: "Usado y revisado." },
    { q: "La Agenda 2030 tiene…", o: ["17 ODS", "10 ODS", "30 ODS"], a: 0, e: "17 objetivos." },
  ],
  examen: [
    { q: "El derecho a reparar obliga a…", o: ["ofrecer recambios y reparación", "regalar móviles", "prohibir los LED"], a: 0, e: "Recambios y reparación." },
    { q: "La primera opción de las erres es…", o: ["reducir o repensar", "reciclar", "tirar"], a: 0, e: "Reducir (o repensar)." },
    { q: "Cambiar un móvil que funciona solo por moda es obsolescencia…", o: ["percibida", "programada", "técnica"], a: 0, e: "Percibida." },
  ],
  feynman: ["Por qué alargar la vida de un móvil es lo más sostenible", "La diferencia entre economía lineal y circular", "Qué es la obsolescencia programada y cómo combatirla"],
  mapa: mapa("TECNOLOGÍA SOSTENIBLE", "var(--eso)", [
    ["Impacto", "ciclo de vida · huella", "var(--red)"],
    ["Modelo", "economía circular · ecodiseño", "var(--leaf)"],
    ["Problemas", "obsolescencia · RAEE", "#b8860b"],
    ["Soluciones", "renovables · ODS · 5 erres", "var(--pen)"],
  ], 300),
  tarjetas: [
    ["Desarrollo sostenible", "Cubrir necesidades sin perjudicar a las generaciones futuras."],
    ["Ciclo de vida", "Extracción, fabricación, distribución, uso y fin."],
    ["Huella de carbono", "CO₂ equivalente emitido."],
    ["Economía circular", "Mantener el valor de productos y materiales."],
    ["Ecodiseño", "Diseñar pensando en el medio ambiente."],
    ["Obsolescencia programada", "Diseñar para que dure menos."],
    ["RAEE", "Residuos de aparatos eléctricos y electrónicos."],
    ["ODS", "17 objetivos de la Agenda 2030."],
  ],
  familias: ["Buscad en casa aparatos electrónicos que ya no se usan y decidid si se pueden reparar, donar o llevar al punto limpio.", "Calculad juntos cuántos años habéis tenido cada móvil de la familia.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Tecnología sostenible: impacto ambiental y social, ciclo de vida, economía circular, ecodiseño, obsolescencia, residuos, eficiencia energética y Objetivos de Desarrollo Sostenible (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Desmontar un aparato viejo y clasificar sus materiales para reciclar.", "Análisis del ciclo de vida de un objeto cotidiano en pequeños grupos.", "Taller de reparación en el aula o visita a un punto limpio."],
  },
  fuentes: [RD, wiki("Economía circular", "Econom%C3%ADa_circular"), wiki("Obsolescencia programada", "Obsolescencia_programada")],
  revisado: "2026-11-12",
};
