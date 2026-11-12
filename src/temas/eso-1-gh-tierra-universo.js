// Geografía e Historia 1º ESO. Dibujos propios en SVG.
const { tema, H, F, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Órbita de la Tierra con las cuatro estaciones (hemisferio norte).
const orbita = `<svg viewBox="0 0 260 180" role="img" aria-label="La Tierra gira alrededor del Sol con el eje inclinado: según la posición, es verano o invierno en el hemisferio norte">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <ellipse cx="130" cy="92" rx="100" ry="52" fill="none" stroke="var(--line)" stroke-width="2.5" stroke-dasharray="6 5"/>
  <circle cx="130" cy="92" r="20" fill="var(--sun)"/>
  <g ${F} font-size="11" font-weight="700" text-anchor="middle">
    <text x="130" y="96" fill="#fff">Sol</text>
    ${[[30, 92], [230, 92], [130, 40], [130, 144]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="var(--pen)"/><path d="M${x - 5} ${y - 12} L ${x + 5} ${y + 12}" stroke="var(--ink)" stroke-width="2"/>`).join("")}
    <text x="40" y="128" fill="var(--ink)">verano</text><text x="40" y="141" fill="var(--muted)" font-weight="400" font-size="10">21 junio</text>
    <text x="220" y="128" fill="var(--ink)">invierno</text><text x="220" y="141" fill="var(--muted)" font-weight="400" font-size="10">21 diciembre</text>
    <text x="196" y="30" fill="var(--ink)">otoño</text><text x="196" y="43" fill="var(--muted)" font-weight="400" font-size="10">23 septiembre</text>
    <text x="64" y="160" fill="var(--ink)">primavera</text><text x="64" y="173" fill="var(--muted)" font-weight="400" font-size="10">21 marzo</text>
    <text x="40" y="22" fill="var(--muted)" font-weight="400" font-size="10">hemisferio norte</text>
  </g>
</svg>`;

module.exports = tema({
  materia: "Geografía e Historia",
  titulo: "La Tierra en el universo",
  objetivos: ["Situar la Tierra en el universo: galaxia, sistema solar y planeta", "Describir los componentes del sistema solar", "Explicar los movimientos de rotación y traslación y sus consecuencias", "Relacionar la inclinación del eje con las estaciones y las zonas de la Tierra"],
  claves: ["universo", "galaxia", "Vía Láctea", "sistema solar", "planeta", "satélite", "rotación", "traslación", "eje terrestre", "solsticio", "equinoccio"],
  pregunta: [
    "Mientras lees esto parece que estás quieto. Sin embargo, ahora mismo viajas a más de 100 000 km/h. ¿Cómo es posible que no lo notes?",
    "Porque la Tierra entera se mueve contigo: gira sobre sí misma y, a la vez, <mark>da vueltas alrededor del Sol</mark> a unos 107 000 km/h. Como todo lo que te rodea (el aire, tu casa, tu silla) viaja a la misma velocidad y el movimiento es muy uniforme, no sientes nada, igual que en un avión que vuela sin turbulencias. Lo que sí notamos son sus efectos: el día y la noche, y las estaciones del año.",
  ],
  bloques: [
    ["El universo y las galaxias", `<p>El <mark>universo</mark> es todo lo que existe: la materia, la energía, el espacio y el tiempo. Los científicos calculan que se formó hace unos <b>13 800 millones de años</b> a partir de una gran expansión llamada <b>Big Bang</b>, y que desde entonces no ha dejado de crecer.</p><p>La materia del universo se agrupa en <b>galaxias</b>: enormes conjuntos de estrellas, gas y polvo que giran juntos. Hay miles de millones de galaxias. La nuestra se llama <b>Vía Láctea</b>; tiene forma de espiral y contiene más de 100 000 millones de estrellas. Una de ellas, situada en uno de sus brazos, es el <b>Sol</b>. Las distancias son tan grandes que se miden en <b>años luz</b>: la distancia que recorre la luz en un año, unos 9,5 billones de kilómetros.</p>`,
      H.filas("De lo más grande a lo más pequeño", [["Universo", "miles de millones de galaxias", "var(--pen)"], ["Galaxia", "Vía Láctea, en espiral", "var(--inf)"], ["Sistema solar", "el Sol y ocho planetas", "var(--sun)"], ["Planeta", "la Tierra, el tercero", "var(--leaf)"]])],
    ["El sistema solar", `<p>El <mark>sistema solar</mark> está formado por el <b>Sol</b> y todos los cuerpos que giran a su alrededor atraídos por su gravedad. El Sol es una estrella: una enorme bola de gas que produce luz y calor. Concentra el 99 % de la masa del sistema.</p><p>A su alrededor giran <b>ocho planetas</b>. Los cuatro más cercanos (Mercurio, Venus, la Tierra y Marte) son <b>rocosos</b> y pequeños. Los cuatro más lejanos (Júpiter, Saturno, Urano y Neptuno) son <b>gigantes gaseosos</b>. Además hay <b>planetas enanos</b> como Plutón, <b>satélites</b> que giran alrededor de los planetas (la Luna es el de la Tierra), <b>asteroides</b>, que se concentran sobre todo entre Marte y Júpiter, y <b>cometas</b>, bolas de hielo y polvo que forman una cola al acercarse al Sol.</p>`,
      H.figCols("Los ocho planetas", [["Rocosos", ["Mercurio", "Venus", "Tierra", "Marte"], "var(--red)"], ["Gaseosos", ["Júpiter", "Saturno", "Urano", "Neptuno"], "var(--inf)"], ["Otros cuerpos", ["planetas enanos", "satélites", "asteroides", "cometas"], "var(--muted)"]])],
    ["La Tierra, un planeta especial", `<p>La <mark>Tierra</mark> es el tercer planeta desde el Sol, a unos <b>150 millones de kilómetros</b>. Esa distancia es clave: no estamos tan cerca como para que el agua hierva ni tan lejos como para que todo se congele. Gracias a ello existe <b>agua líquida</b>, imprescindible para la vida.</p><p>Además, la Tierra tiene una <b>atmósfera</b> que nos protege de los rayos más peligrosos del Sol y mantiene una temperatura media de unos 15 °C. Es el único planeta conocido donde hay vida. Su forma no es una esfera perfecta, sino ligeramente achatada por los polos: se llama <b>geoide</b>. Tiene unos 40 000 km de circunferencia en el ecuador y está formada por capas: la parte sólida (<b>geosfera</b>), el agua (<b>hidrosfera</b>), el aire (<b>atmósfera</b>) y los seres vivos (<b>biosfera</b>).</p>`,
      H.rueda("Las capas de la Tierra", "TIERRA", [["geosfera", "var(--red)"], ["hidrosfera", "var(--inf)"], ["atmósfera", "var(--muted)"], ["biosfera", "var(--leaf)"]], "var(--pen)")],
    ["La rotación: el día y la noche", `<p>La Tierra gira sobre sí misma alrededor de una línea imaginaria, el <mark>eje terrestre</mark>, que va del polo norte al polo sur. Este movimiento se llama <b>rotación</b>; gira de oeste a este y tarda unas <b>24 horas</b> en dar una vuelta completa, es decir, un día.</p><p>Como la Tierra es redonda, el Sol solo ilumina la mitad a la vez: en esa mitad es de <b>día</b> y en la otra es de <b>noche</b>. Al girar, cada lugar pasa de la luz a la sombra. Por eso el Sol parece salir por el <b>este</b> y ponerse por el <b>oeste</b>, aunque en realidad somos nosotros los que nos movemos. La rotación también explica que la hora sea distinta en cada lugar del mundo: cuando en España es mediodía, en Japón ya es de noche.</p>`,
      H.dos("Rotación de la Tierra", ["Cara iluminada", ["mira al Sol", "es de día", "amanece por", "el este"], "var(--sun)"], ["Cara oscura", ["no le llega luz", "es de noche", "anochece por", "el oeste"], "var(--ink)"]), V.gh1b],
    ["La traslación: el año", `<p>Además de girar sobre sí misma, la Tierra da vueltas alrededor del Sol siguiendo un camino casi circular llamado <b>órbita</b>. Este movimiento se llama <mark>traslación</mark> y dura <b>365 días y unas 6 horas</b>: un año.</p><p>Esas 6 horas sobrantes se acumulan. Cada cuatro años suman un día entero, que se añade al calendario como <b>29 de febrero</b>; ese año se llama <b>bisiesto</b> y tiene 366 días. Fue Julio César quien introdujo esta regla en el calendario romano, y en 1582 el papa Gregorio XIII la ajustó; por eso nuestro calendario se llama <b>gregoriano</b>.</p>`,
      H.filas("Los movimientos de la Tierra", [["Rotación", "sobre sí misma: 24 horas", "var(--pen)"], ["Efecto", "el día y la noche", "var(--inf)"], ["Traslación", "alrededor del Sol: 365 días", "var(--sun)"], ["Efecto", "el año y las estaciones", "var(--leaf)"]])],
    ["Las estaciones del año", `<p>El eje de la Tierra no está derecho, sino <mark>inclinado</mark> unos 23,5°, y siempre apunta en la misma dirección. Por eso, durante la traslación, cada hemisferio recibe los rayos del Sol de forma distinta. Cuando el hemisferio norte se inclina hacia el Sol, los rayos llegan más rectos, los días son más largos y hace calor: es <b>verano</b>. Seis meses después ocurre lo contrario y es <b>invierno</b>.</p><p>Hay cuatro fechas clave. En los <b>solsticios</b> (21 de junio y 21 de diciembre) se dan el día más largo y el más corto del año. En los <b>equinoccios</b> (hacia el 21 de marzo y el 23 de septiembre) el día y la noche duran lo mismo en todo el planeta. Las estaciones están invertidas en los dos hemisferios: cuando en España es verano, en Argentina es invierno.</p>`,
      orbita],
    ["Las zonas de la Tierra", `<p>Por la forma redonda del planeta, los rayos del Sol no calientan igual en todas partes. Cerca del <b>ecuador</b> llegan casi verticales y concentran mucho calor; hacia los <b>polos</b> llegan muy inclinados y calientan poco. Así se distinguen tres grandes <mark>zonas térmicas</mark>.</p><p>La <b>zona cálida</b> está entre los trópicos de Cáncer y de Capricornio, a ambos lados del ecuador: hace calor todo el año. Las dos <b>zonas templadas</b> están entre los trópicos y los círculos polares: tienen cuatro estaciones bien marcadas (España está en la templada del norte). Las dos <b>zonas frías</b>, alrededor de los polos, tienen temperaturas muy bajas y meses enteros de día o de noche.</p>`,
      tabla(["Zona", "Dónde está", "Cómo es"], [["Cálida", "entre los dos trópicos", "calor todo el año"], ["Templadas", "entre trópicos y círculos polares", "cuatro estaciones"], ["Frías", "dentro de los círculos polares", "frío intenso, días o noches de meses"]])],
    ["La Luna, nuestro satélite", `<p>La <mark>Luna</mark> es el único satélite natural de la Tierra. Está a unos 384 000 km y no tiene luz propia: refleja la del Sol. Tarda unos <b>28 días</b> en dar una vuelta a la Tierra, y en ese tiempo vemos cómo cambia la parte iluminada. Son las <b>fases lunares</b>: luna nueva, cuarto creciente, luna llena y cuarto menguante.</p><p>La Luna también influye en nuestro planeta: su gravedad atrae el agua de los océanos y provoca las <b>mareas</b>, la subida y bajada del nivel del mar dos veces al día. Cuando el Sol, la Tierra y la Luna se alinean se producen los <b>eclipses</b>: de Sol, si la Luna tapa al Sol, y de Luna, si la sombra de la Tierra cubre la Luna.</p>`,
      H.flujo("Las fases de la Luna", ["luna|nueva", "cuarto|creciente", "luna|llena", "cuarto|menguante"], "var(--muted)")],
  ],
  ejemplos: [
    ["Cuando en Madrid son las 12 del mediodía, ¿por qué en Nueva York (al oeste) aún es de madrugada?", ["La Tierra gira de oeste a este.", "Los lugares situados al este reciben antes la luz del Sol.", "Nueva York está muy al oeste de Madrid, así que el Sol aún no ha llegado a su cielo."], "Por la rotación: en Nueva York son unas 6 horas menos (las 6 de la mañana)."],
    ["¿Fue 2028 un año bisiesto? ¿Cuántos días tendrá febrero?", ["Los años bisiestos son, en general, los divisibles entre 4.", "2028 ÷ 4 = 507, división exacta."], "Sí: 2028 es bisiesto y febrero tendrá 29 días."],
    ["Un amigo de Chile te dice que en Navidad va a la playa. ¿Por qué?", ["Chile está en el hemisferio sur.", "En diciembre, el hemisferio sur está inclinado hacia el Sol.", "Allí empieza el verano con el solsticio del 21 de diciembre."], "Porque las estaciones están invertidas: en diciembre allí es verano."],
  ],
  errores: [
    "Pensar que el verano llega porque la Tierra está más cerca del Sol: la causa es la inclinación del eje (de hecho, en enero estamos algo más cerca).",
    "Confundir rotación (sobre sí misma, 24 horas) con traslación (alrededor del Sol, un año).",
    "Creer que el Sol se mueve alrededor de la Tierra: es la Tierra la que gira.",
    "Llamar estrella a un planeta: los planetas no tienen luz propia, la reflejan.",
    "Pensar que la Luna produce luz: refleja la del Sol, y por eso tiene fases.",
  ],
  ejercicios: [
    ["Ordena de mayor a menor: sistema solar, universo, Tierra, Vía Láctea.", "Universo, Vía Láctea, sistema solar, Tierra."],
    ["¿Qué es una galaxia? ¿Cómo se llama la nuestra?", "Un enorme conjunto de estrellas, gas y polvo que giran juntos. La nuestra es la Vía Láctea, de forma espiral."],
    ["Nombra los planetas rocosos y los gaseosos.", "Rocosos: Mercurio, Venus, Tierra y Marte. Gaseosos: Júpiter, Saturno, Urano y Neptuno."],
    ["Explica dos razones por las que hay vida en la Tierra.", "Su distancia al Sol permite que haya agua líquida, y la atmósfera la protege y mantiene una temperatura suave."],
    ["¿Cuánto dura la rotación y qué consecuencia tiene?", "Unas 24 horas; provoca la sucesión del día y la noche y las diferencias horarias."],
    ["¿Por qué cada cuatro años hay un 29 de febrero?", "Porque la traslación dura 365 días y unas 6 horas; esas horas suman un día cada cuatro años."],
    ["¿Qué diferencia hay entre un solsticio y un equinoccio?", "En los solsticios se da el día más largo o el más corto del año; en los equinoccios, el día y la noche duran lo mismo."],
    ["¿En qué zona térmica está España? ¿Cómo es su clima por ello?", "En la zona templada del norte; tiene cuatro estaciones bien diferenciadas."],
    ["¿Por qué vemos fases en la Luna?", "Porque la Luna refleja la luz del Sol y, según su posición al girar alrededor de la Tierra, vemos iluminada una parte mayor o menor."],
    ["¿Qué es un eclipse de Sol?", "Cuando la Luna se coloca entre el Sol y la Tierra y tapa la luz del Sol."],
  ],
  figura: ["La Tierra en el universo", H.figCols("La Tierra en el universo", [["Dónde estamos", ["universo", "Vía Láctea", "sistema solar", "3.er planeta"], "var(--pen)"], ["Rotación", ["sobre su eje", "24 horas", "día y noche", "oeste → este"], "var(--inf)"], ["Traslación", ["alrededor del Sol", "365 días y 6 h", "eje inclinado", "estaciones"], "var(--sun)"], ["Luna", ["satélite", "28 días", "fases", "mareas, eclipses"], "var(--muted)"]])],
  video: V.gh1v,
  quiz: [
    ["Nuestra galaxia se llama…", ["Vía Láctea", "Andrómeda", "sistema solar"], "Tiene forma espiral."],
    ["El Sol es…", ["una estrella", "un planeta", "un satélite"], "Produce luz y calor propios."],
    ["El planeta más cercano al Sol es…", ["Mercurio", "Venus", "Marte"], "Es pequeño y rocoso."],
    ["La rotación dura…", ["unas 24 horas", "365 días", "28 días"], "Una vuelta sobre sí misma."],
    ["La traslación provoca, junto con la inclinación del eje…", ["las estaciones", "el día y la noche", "las mareas"], "Cada hemisferio recibe el Sol de forma distinta."],
    ["Un año bisiesto tiene…", ["366 días", "365 días", "364 días"], "Se añade el 29 de febrero."],
    ["El día más largo del año en el hemisferio norte es…", ["el solsticio de junio", "el equinoccio de marzo", "el solsticio de diciembre"], "Hacia el 21 de junio."],
    ["La zona cálida está…", ["entre los trópicos", "junto a los polos", "en Europa"], "A ambos lados del ecuador."],
    ["Las mareas se deben sobre todo a…", ["la gravedad de la Luna", "el viento", "la rotación del Sol"], "La Luna atrae el agua de los océanos."],
    ["La forma real de la Tierra se llama…", ["geoide", "esfera perfecta", "elipse"], "Achatada por los polos."],
  ],
  examen: [
    ["El Sol parece salir por…", ["el este", "el oeste", "el norte"], "La Tierra gira de oeste a este."],
    ["Cuando en España es verano, en Argentina es…", ["invierno", "verano", "primavera"], "Las estaciones están invertidas."],
    ["En un eclipse de Luna…", ["la sombra de la Tierra cubre la Luna", "la Luna tapa el Sol", "la Luna se apaga"], "El Sol, la Tierra y la Luna se alinean."],
  ],
  feynman: ["Dónde está la Tierra dentro del universo", "Qué cuerpos forman el sistema solar", "Por qué hay día y noche y por qué hay estaciones", "Cómo influye la Luna en la Tierra"],
  mapa: ["LA TIERRA EN EL UNIVERSO", "var(--pen)", [["Universo", "galaxias · Vía Láctea", "var(--pen)"], ["Sistema solar", "Sol · 8 planetas · satélites", "var(--sun)"], ["Movimientos", "rotación · traslación", "var(--inf)"], ["Consecuencias", "día y noche · estaciones", "var(--leaf)"]], 240],
  tarjetas: [
    ["Galaxia", "Conjunto enorme de estrellas, gas y polvo. La nuestra es la Vía Láctea."],
    ["Sistema solar", "El Sol y los cuerpos que giran a su alrededor."],
    ["Planeta", "Cuerpo que gira alrededor de una estrella y no tiene luz propia."],
    ["Satélite", "Cuerpo que gira alrededor de un planeta (la Luna)."],
    ["Rotación", "Giro de la Tierra sobre su eje: 24 h. Día y noche."],
    ["Traslación", "Vuelta de la Tierra alrededor del Sol: 365 días y 6 h."],
    ["Solsticio", "Día más largo o más corto del año (21 de junio, 21 de diciembre)."],
    ["Equinoccio", "Día y noche duran lo mismo (21 de marzo, 23 de septiembre)."],
  ],
  familias: ["Con una linterna y una naranja atravesada por un lápiz, representad en una habitación a oscuras el día, la noche y las estaciones.", "Mirad juntos la Luna durante dos semanas y dibujad cómo cambia su forma cada noche."],
  saberes: "La Tierra en el sistema solar: movimientos de rotación y traslación y sus consecuencias; las zonas térmicas (Geografía e Historia, 1º ESO, bloque «Retos del mundo actual» y localización espacial, RD 217/2022).",
  ideas: ["Maqueta del sistema solar a escala de distancias en el patio.", "Simular con una lámpara y una bola inclinada las estaciones.", "Registrar durante un mes la hora de salida y puesta del Sol con datos de la AEMET."],
  fuentes: [["Instituto Geográfico Nacional: astronomía y calendario", "https://www.ign.es/web/ign/portal/astronomia"], ["NASA Ciencia: el sistema solar (en español)", "https://ciencia.nasa.gov/sistema-solar/"]],
});
