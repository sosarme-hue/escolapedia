// Biología y Geología 1º ESO: la atmósfera. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "La atmósfera",
  minutos: 55,
  objetivos: ["Conocer la composición del aire y el origen de la atmósfera", "Describir las capas de la atmósfera y sus características", "Explicar las funciones protectoras de la atmósfera: capa de ozono y efecto invernadero", "Diferenciar tiempo y clima, e identificar las causas y soluciones de la contaminación del aire"],
  claves: ["atmósfera", "aire", "nitrógeno", "oxígeno", "troposfera", "estratosfera", "capa de ozono", "efecto invernadero", "presión atmosférica", "tiempo", "clima", "contaminación"],
  pregunta: {
    texto: "Si en el espacio hace un frío de −270 °C, ¿por qué la Tierra no está congelada como la Luna, que está a la misma distancia del Sol?",
    respuesta: "Por la <b>atmósfera</b>. Funciona como una manta: deja pasar la luz del Sol, pero <b>retiene parte del calor</b> que el suelo devuelve hacia el espacio. Es el <b>efecto invernadero natural</b>, y gracias a él la temperatura media de la Tierra es de unos 15 °C. Sin atmósfera, como le pasa a la Luna, la temperatura media sería de unos −18 °C, con días abrasadores y noches heladas.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la atmósfera?</h3><p>La <mark>atmósfera</mark> es la <b>capa de gases que rodea la Tierra</b> y que se mantiene unida al planeta gracias a la gravedad. La mezcla de gases que la forma se llama <b>aire</b>. Aunque no lo veamos, el aire tiene masa y ocupa espacio, y su peso sobre nosotros es la <mark>presión atmosférica</mark>. A medida que subimos, hay menos aire por encima y la presión disminuye: por eso en lo alto de una montaña se respira peor y el agua hierve a menos de 100 °C. La atmósfera actual no siempre fue así. La primera atmósfera se formó con los gases que expulsaban los volcanes, y no tenía apenas oxígeno. Fueron unos seres vivos microscópicos, las <b>cianobacterias</b>, los que empezaron a liberar oxígeno al hacer la fotosíntesis hace unos 2.500 millones de años, y poco a poco transformaron el aire hasta hacerlo respirable.</p>`,
    },
    {
      html: `<h3>La composición del aire</h3><p>El aire seco es una mezcla de gases. El más abundante es el <mark>nitrógeno</mark> (N₂), que forma el <b>78 %</b>; no lo usamos al respirar, pero es necesario para las plantas, que lo toman del suelo gracias a ciertas bacterias. Le sigue el <mark>oxígeno</mark> (O₂), con el <b>21 %</b>, imprescindible para la respiración de casi todos los seres vivos y para las combustiones. El 1 % restante incluye el <b>argón</b>, un gas noble, y pequeñas cantidades de <mark>dióxido de carbono</mark> (CO₂), que, aunque solo sea el 0,04 %, es fundamental: las plantas lo usan para la fotosíntesis y ayuda a retener el calor. Además, el aire contiene cantidades variables de <b>vapor de agua</b>, que forma las nubes y la lluvia, y de partículas sólidas como polvo, polen, cenizas o sal marina.</p>${tabla(["Gas", "Proporción", "Importancia"], [["Nitrógeno (N₂)", "78 %", "nutriente de las plantas a través del suelo"], ["Oxígeno (O₂)", "21 %", "respiración y combustión"], ["Argón (Ar)", "0,9 %", "gas inerte"], ["Dióxido de carbono (CO₂)", "0,04 %", "fotosíntesis y efecto invernadero"], ["Vapor de agua", "variable", "nubes y precipitaciones"]])}`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Composición del aire en una barra: 78 por ciento nitrógeno, 21 por ciento oxígeno y 1 por ciento otros gases">${BG}
        <rect x="20" y="60" width="171.6" height="46" fill="#2b8ad8" fill-opacity=".8"/><rect x="191.6" y="60" width="46.2" height="46" fill="var(--leaf)"/><rect x="237.8" y="60" width="4" height="46" fill="#e8892c"/>
        ${t(105, 89, "nitrógeno 78 %", { size: 12, color: "#fff" })}${t(214, 89, "O₂ 21 %", { size: 10, color: "#fff" })}
        ${fl(240, 130, 240, 110, "var(--ink)", 1.5)}${t(236, 144, "otros 1 %", { size: 10, anchor: "end" })}
        ${t(130, 40, "100 partes de aire", { size: 12, color: COL.azul })}</svg>`,
    },
    {
      html: `<h3>Las capas de la atmósfera</h3><p>La atmósfera tiene unos <b>10.000 km</b> de espesor, pero la mayor parte del aire está concentrado cerca del suelo. Se divide en capas según cómo cambia la temperatura con la altura. La <mark>troposfera</mark> es la capa más baja: llega hasta unos 12 km (unos 8 km en los polos y 18 km en el ecuador) y contiene el 80 % del aire y casi todo el vapor de agua; en ella se forman las nubes y ocurren los fenómenos del tiempo, y la temperatura <b>baja</b> al subir, hasta unos −55 °C. La <mark>estratosfera</mark> llega hasta unos 50 km; en ella se encuentra la <b>capa de ozono</b>, y la temperatura sube porque el ozono absorbe radiación del Sol; los aviones de largo recorrido vuelan en su parte baja, donde no hay turbulencias. La <b>mesosfera</b>, hasta unos 80 km, es la más fría, y en ella se queman los meteoritos (estrellas fugaces). La <b>termosfera</b> o ionosfera, hasta unos 600 km, tiene temperaturas altísimas y en ella se forman las <b>auroras polares</b>; por ella orbita la Estación Espacial Internacional. Por encima está la <b>exosfera</b>, que se va perdiendo en el espacio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Capas de la atmósfera desde el suelo: troposfera con nubes, estratosfera con la capa de ozono y un avión, mesosfera con estrellas fugaces y termosfera con auroras">${BG}
        <rect x="10" y="132" width="170" height="36" fill="#bfdbfe"/><rect x="10" y="92" width="170" height="40" fill="#93c5fd"/><rect x="10" y="52" width="170" height="40" fill="#60a5fa"/><rect x="10" y="12" width="170" height="40" fill="#1e3a8a"/>
        <rect x="10" y="100" width="170" height="8" fill="#a78bfa" fill-opacity=".7"/>
        <ellipse cx="50" cy="152" rx="16" ry="7" fill="#fff"/><ellipse cx="62" cy="148" rx="12" ry="7" fill="#fff"/>
        <path d="M120 118 l 14 -3 l 6 -6 l 3 1 l -3 7 l 10 -2 l 2 2 l -30 6 Z" fill="#334155"/>
        ${fl(70, 62, 58, 80, "#fde68a", 1.8)}
        <path d="M30 34 q 25 -18 50 0 q 25 18 50 0" fill="none" stroke="#4ade80" stroke-width="3" opacity=".9"/>
        ${t(218, 154, "troposfera", { size: 10 })}${t(218, 114, "estratosfera", { size: 10 })}${t(218, 76, "mesosfera", { size: 10 })}${t(218, 36, "termosfera", { size: 10 })}
        ${t(150, 106, "ozono", { size: 8.5, color: "#fff" })}</svg>`,
      video: { id: "l8rlX0cSUU8", titulo: "¿Cuáles son las capas de la atmósfera y sus funciones? | Animación", canal: "Hidden Nature", vistas: 488362 },
    },
    {
      html: `<h3>La atmósfera nos protege: la capa de ozono</h3><p>El Sol emite luz visible, pero también <b>radiación ultravioleta</b> (UV), que es muy dañina para los seres vivos: produce quemaduras, envejecimiento de la piel, cáncer de piel y problemas en los ojos, y destruye el material genético de las células. En la estratosfera, entre unos 15 y 35 km de altura, hay una zona con más cantidad de un gas llamado <mark>ozono</mark> (O₃), formado por tres átomos de oxígeno. Esta <mark>capa de ozono</mark> absorbe la mayor parte de los rayos UV y actúa como un <b>filtro solar</b> para todo el planeta. En los años ochenta se descubrió que ciertos gases fabricados por el ser humano, los <b>CFC</b> (usados en aerosoles y frigoríficos), estaban destruyendo el ozono y abriendo un «agujero» sobre la Antártida. En 1987 los países firmaron el <b>Protocolo de Montreal</b> para prohibirlos, y hoy la capa se está recuperando poco a poco: un ejemplo de que la cooperación internacional funciona.</p>`,
    },
    {
      html: `<h3>El efecto invernadero</h3><p>La luz del Sol atraviesa la atmósfera y calienta el suelo; el suelo, a su vez, emite calor (radiación infrarroja) hacia el espacio. Algunos gases de la atmósfera, como el <b>vapor de agua</b>, el <b>dióxido de carbono</b> y el <b>metano</b>, absorben parte de ese calor y lo devuelven hacia la superficie. Es el <mark>efecto invernadero</mark>, llamado así porque funciona como el plástico de un invernadero. Es un fenómeno <b>natural y necesario</b>: sin él, la temperatura media de la Tierra sería de unos −18 °C en lugar de 15 °C. El problema es que, desde hace unos 200 años, las actividades humanas, sobre todo la <b>quema de combustibles fósiles</b> (carbón, petróleo y gas) y la deforestación, han aumentado mucho la cantidad de estos gases. El resultado es un <mark>efecto invernadero reforzado</mark>, que retiene más calor del necesario y provoca el <b>calentamiento global</b> y el cambio climático.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Efecto invernadero: la luz del Sol llega al suelo, el suelo emite calor y los gases de la atmósfera devuelven parte de ese calor a la superficie">${BG}
        <circle cx="26" cy="26" r="16" fill="#f6b417"/>
        <path d="M10 70 Q 130 40 250 70" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"/>${t(210, 48, "gases", { size: 10, color: "var(--muted)" })}
        <rect x="10" y="140" width="240" height="30" fill="#86efac"/>
        ${fl(40, 40, 96, 136, COL.sol, 2.5)}${t(48, 100, "luz", { size: 10, color: COL.sol })}
        ${fl(120, 136, 150, 64, COL.rojo, 2.5)}${fl(160, 66, 186, 136, COL.rojo, 2.5)}${fl(200, 136, 228, 30, COL.rojo, 1.5)}
        ${t(148, 116, "calor", { size: 10, color: COL.rojo })}${et(196, 100, "vuelve", 50, { size: 10, color: COL.rojo })}${et(236, 22, "escapa", 40, { size: 9, color: COL.rojo })}
        ${t(130, 160, "suelo", { size: 10 })}</svg>`,
      video: { id: "YLFLxQ0t07A", titulo: "¿Qué es el efecto invernadero? | Sostenibilidad - ACCIONA", canal: "ACCIONA", vistas: 5823698 },
    },
    {
      html: `<h3>Tiempo y clima</h3><p>En la troposfera, el aire está en continuo movimiento: el Sol calienta de forma desigual la superficie, el aire caliente sube, el frío baja, y se forman vientos, nubes y precipitaciones. El estado de la atmósfera en un lugar y un momento concretos se llama <mark>tiempo atmosférico</mark>: «hoy hace sol y 25 °C» o «mañana lloverá». Se describe con varias variables que se miden en las <b>estaciones meteorológicas</b>: la <b>temperatura</b> (termómetro), la <b>presión atmosférica</b> (barómetro), la <b>humedad</b> (higrómetro), las <b>precipitaciones</b> (pluviómetro) y la velocidad y dirección del <b>viento</b> (anemómetro y veleta). El <mark>clima</mark>, en cambio, es el tiempo <b>habitual</b> de una zona, calculado a partir de los datos de al menos <b>30 años</b>: «en Sevilla los veranos son muy calurosos y secos». Una manera fácil de recordarlo: el tiempo es lo que te pones hoy; el clima, lo que tienes en el armario.</p>`,
    },
    {
      html: `<h3>La contaminación atmosférica</h3><p>La <mark>contaminación atmosférica</mark> es la presencia en el aire de sustancias o formas de energía en cantidades que resultan perjudiciales para la salud o el medio ambiente. Puede tener causas <b>naturales</b>, como las erupciones volcánicas o los incendios, pero la mayor parte procede de las <b>actividades humanas</b>: el tráfico, las calefacciones, las centrales térmicas, la industria y la agricultura. Los principales contaminantes son el <b>dióxido de carbono</b> y el <b>metano</b>, que refuerzan el efecto invernadero; los <b>óxidos de nitrógeno y de azufre</b>, que causan la <b>lluvia ácida</b> al mezclarse con el agua de las nubes y dañan bosques, lagos y monumentos; las <b>partículas</b> finas, que penetran en los pulmones; y el ozono a nivel del suelo, que se forma en las ciudades en días de mucho sol. La boina marrón que a veces se ve sobre las grandes ciudades se llama <b>esmog</b>. La contaminación del aire causa enfermedades respiratorias y cardíacas, y es uno de los mayores riesgos ambientales para la salud.</p>`,
      video: { id: "ZzxyIuzjbms", titulo: "CONTAMINACIÓN ATMOSFÉRICA - Contaminación ambiental", canal: "EcologíaVerde", vistas: 502432 },
    },
    {
      html: `<h3>Cuidar el aire que respiramos</h3><p>Reducir la contaminación del aire es tarea de todos. Los gobiernos aprueban leyes que limitan las emisiones de fábricas y coches, crean <b>zonas de bajas emisiones</b> en las ciudades y fomentan las <b>energías renovables</b> (solar, eólica, hidráulica), que no queman combustibles. Las empresas pueden instalar filtros y procesos más limpios. Y cada persona puede ayudar con gestos cotidianos: <b>caminar, ir en bici o en transporte público</b> en lugar de usar el coche para trayectos cortos; <b>ahorrar energía</b> apagando luces y aparatos que no se usan y sin abusar de la calefacción o el aire acondicionado; consumir productos <b>locales y de temporada</b>, que necesitan menos transporte; y <b>plantar y cuidar árboles</b>, que absorben CO₂ y filtran partículas. Además, las ciudades miden la calidad del aire en tiempo real, y se puede consultar su <b>índice de calidad del aire</b> para evitar hacer deporte al aire libre en los días de más contaminación.</p>`,
    },
  ],
  figura: {
    titulo: "La atmósfera en ocho ideas",
    svg: rejilla([
      ["Aire", "78 % N₂ · 21 % O₂ · 1 % otros", COL.azul],
      ["Troposfera", "nubes y fenómenos del tiempo", COL.agua],
      ["Estratosfera", "capa de ozono y aviones", COL.morado],
      ["Ozono", "filtra los rayos ultravioleta", COL.verde],
      ["Invernadero", "retiene calor: media de 15 °C", COL.rojo],
      ["Tiempo", "estado del aire hoy", COL.sol],
      ["Clima", "tiempo habitual en 30 años", COL.marron],
      ["Contaminación", "tráfico, industria, lluvia ácida", COL.gris],
    ], 4, 86, "Resumen: composición del aire, capas, ozono, efecto invernadero, tiempo, clima y contaminación"),
  },
  video: { id: "enbHn4vxY34", titulo: "La atmósfera | Videos Educativos para niños.", canal: "Happy Learning Español", vistas: 3661525, megusta: 0, busqueda: "la atmósfera capas y composición" },
  ejemplos: [
    { enunciado: "En una habitación hay unos 1.000 litros de aire. ¿Cuántos litros son de oxígeno y cuántos de nitrógeno, aproximadamente?",
      pasos: ["Oxígeno: 21 % de 1.000 = 0,21 · 1.000 = 210 litros.", "Nitrógeno: 78 % de 1.000 = 780 litros.", "El resto, unos 10 litros, son otros gases."],
      resultado: "Unos 210 L de oxígeno y 780 L de nitrógeno." },
    { enunciado: "Clasifica como tiempo o clima: a) «Hoy hay niebla en Burgos». b) «En Galicia llueve mucho en invierno». c) «Mañana soplará viento del norte».",
      pasos: ["a) Describe un momento concreto: tiempo.", "b) Describe lo habitual de una zona durante años: clima.", "c) Es una previsión para un día concreto: tiempo."],
      resultado: "a) tiempo; b) clima; c) tiempo." },
    { enunciado: "Un avión vuela a 11 km de altura y un globo meteorológico llega a 30 km. ¿En qué capa está cada uno?",
      pasos: ["La troposfera llega hasta unos 12 km en latitudes medias.", "El avión, a 11 km, está en la parte alta de la troposfera, cerca del límite.", "El globo, a 30 km, está en la estratosfera, en plena capa de ozono."],
      resultado: "Avión: troposfera (cerca de su límite). Globo: estratosfera." },
  ],
  errores: [
    "Pensar que el gas más abundante del aire es el oxígeno: es el nitrógeno.",
    "Decir que el efecto invernadero es malo en sí mismo: el natural es imprescindible; el problema es su refuerzo.",
    "Confundir el agujero de la capa de ozono con el cambio climático: son problemas distintos.",
    "Usar «clima» para hablar del tiempo de hoy.",
    "Creer que la temperatura siempre baja al subir: en la estratosfera sube.",
  ],
  ejercicios: [
    { q: "¿Qué es la atmósfera y qué la mantiene unida a la Tierra?", sol: "La capa de gases que rodea la Tierra; la mantiene la gravedad." },
    { q: "¿Qué seres vivos llenaron de oxígeno la atmósfera primitiva?", sol: "Las cianobacterias, al hacer la fotosíntesis." },
    { q: "Escribe los dos gases más abundantes del aire y su porcentaje.", sol: "Nitrógeno, 78 %, y oxígeno, 21 %." },
    { q: "¿En qué capa se forman las nubes? ¿Por qué?", sol: "En la troposfera, porque contiene casi todo el vapor de agua." },
    { q: "¿Por qué en lo alto de una montaña el agua hierve a menos de 100 °C?", sol: "Porque la presión atmosférica es menor." },
    { q: "¿Qué hace la capa de ozono y qué gases la dañaban?", sol: "Absorbe la radiación ultravioleta del Sol; la dañaban los CFC." },
    { q: "Explica con tus palabras el efecto invernadero natural.", sol: "La luz calienta el suelo, que emite calor; algunos gases retienen parte de ese calor y mantienen la Tierra templada." },
    { q: "¿Qué actividades humanas refuerzan el efecto invernadero?", sol: "La quema de combustibles fósiles, la deforestación y algunas actividades agrícolas y ganaderas." },
    { q: "¿Qué es la lluvia ácida y qué daños causa?", sol: "Lluvia con ácidos formados por óxidos de azufre y nitrógeno; daña bosques, lagos y monumentos." },
    { q: "Propón tres acciones personales para reducir la contaminación del aire.", sol: "Ir andando, en bici o en transporte público; ahorrar energía en casa; consumir productos locales y plantar árboles." },
  ],
  quiz: [
    { q: "El gas más abundante del aire es…", o: ["el oxígeno", "el nitrógeno", "el CO₂"], a: 1, e: "Nitrógeno, 78 %." },
    { q: "El oxígeno es aproximadamente el…", o: ["21 %", "50 %", "1 %"], a: 0, e: "21 %." },
    { q: "Los fenómenos del tiempo ocurren en la…", o: ["troposfera", "mesosfera", "exosfera"], a: 0, e: "Troposfera." },
    { q: "La capa de ozono está en la…", o: ["troposfera", "estratosfera", "termosfera"], a: 1, e: "Estratosfera." },
    { q: "La capa de ozono nos protege de…", o: ["la lluvia", "los rayos ultravioleta", "los meteoritos"], a: 1, e: "Rayos UV." },
    { q: "Las estrellas fugaces se queman en la…", o: ["mesosfera", "troposfera", "hidrosfera"], a: 0, e: "Mesosfera." },
    { q: "Sin efecto invernadero, la temperatura media sería…", o: ["15 °C", "−18 °C", "40 °C"], a: 1, e: "Unos −18 °C." },
    { q: "La presión atmosférica se mide con…", o: ["un barómetro", "un pluviómetro", "una veleta"], a: 0, e: "Barómetro." },
    { q: "El clima se calcula con datos de al menos…", o: ["1 año", "30 años", "1 semana"], a: 1, e: "30 años." },
    { q: "La lluvia ácida la causan sobre todo…", o: ["óxidos de azufre y nitrógeno", "el oxígeno", "el argón"], a: 0, e: "Óxidos de S y N." },
  ],
  examen: [
    { q: "El tratado que prohibió los CFC fue el…", o: ["Protocolo de Montreal", "Acuerdo de París", "Tratado de Roma"], a: 0, e: "Montreal, 1987." },
    { q: "La humedad del aire se mide con un…", o: ["higrómetro", "anemómetro", "termómetro"], a: 0, e: "Higrómetro." },
    { q: "Las auroras polares se forman en la…", o: ["termosfera", "troposfera", "estratosfera"], a: 0, e: "Termosfera o ionosfera." },
  ],
  feynman: ["De qué está hecho el aire y para qué sirve cada gas", "Cuáles son las capas de la atmósfera", "Por qué el efecto invernadero es necesario pero su aumento es un problema"],
  mapa: mapa("ATMÓSFERA", "var(--eso)", [
    ["Composición", "N₂ 78 % · O₂ 21 % · CO₂", COL.azul],
    ["Capas", "troposfera · estratosfera…", COL.morado],
    ["Protección", "ozono · efecto invernadero", COL.verde],
    ["Problemas", "contaminación · lluvia ácida", COL.rojo],
  ], 280),
  tarjetas: [
    ["Atmósfera", "Capa de gases que rodea la Tierra."],
    ["Aire", "Mezcla de gases: 78 % nitrógeno y 21 % oxígeno."],
    ["Troposfera", "Capa más baja: nubes, lluvia y viento."],
    ["Capa de ozono", "Zona de la estratosfera que filtra los rayos UV."],
    ["Efecto invernadero", "Retención de calor por algunos gases de la atmósfera."],
    ["Presión atmosférica", "Peso del aire; disminuye con la altura."],
    ["Tiempo y clima", "Tiempo: estado actual. Clima: tiempo habitual en 30 años."],
    ["Lluvia ácida", "Lluvia con ácidos por óxidos de azufre y nitrógeno."],
  ],
  familias: ["Consultad juntos el índice de calidad del aire de vuestra ciudad durante una semana.", "Haced un pluviómetro casero con una botella y anotad la lluvia de cada día.", "Planificad un trayecto habitual a pie o en bici en lugar de en coche."],
  profesores: {
    saberes: "La atmósfera: composición, origen, estructura en capas, funciones (protección UV, regulación térmica), tiempo y clima, contaminación atmosférica, efecto invernadero y cambio climático; hábitos sostenibles (RD 217/2022, Biología y Geología, bloques Geología y Ecología y sostenibilidad).",
    ideas: ["Estación meteorológica escolar con instrumentos caseros y registro en hoja de cálculo.", "Experimento de efecto invernadero con dos tarros, uno tapado con plástico, y dos termómetros al sol.", "Análisis de datos de calidad del aire de la red municipal."],
  },
  fuentes: [RD, wiki("Atmósfera terrestre", "Atmósfera_terrestre"), { t: "Agencia Estatal de Meteorología (AEMET)", url: "https://www.aemet.es/" }, { t: "Ministerio para la Transición Ecológica: calidad del aire", url: "https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/atmosfera-y-calidad-del-aire.html" }],
  revisado: REV,
};
