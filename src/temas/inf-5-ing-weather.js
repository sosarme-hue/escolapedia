// Infantil 5 años · Primeros pasos en inglés: The weather. Inglés oral con ayuda en español.
const { tema, mapa, svg, rot, big, ic, nino, vocab, charla, mural, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Primeros pasos en inglés",
  titulo: "The weather",
  objetivos: ["Preguntar How's the weather?", "Responder It's sunny, rainy, cloudy, windy o snowy", "Decir hot y cold y elegir la ropa adecuada"],
  claves: ["weather", "sunny", "rainy", "cloudy", "windy", "snowy", "hot", "cold"],
  pregunta: {
    texto: "Mira por la ventana. ¿Hace sol o llueve hoy?",
    respuesta: "El tiempo que hace se dice <mark>the weather</mark>. Si hace sol, decimos <b>It's sunny!</b> Si llueve, <b>It's rainy!</b>",
  },
  bloques: [
    {
      html: `<h3>How's the weather?</h3><p>Para preguntar qué tiempo hace decimos <mark>How's the weather?</mark></p><p>Miramos por la ventana y respondemos empezando con <b>It's…</b></p><p>Cada día puede hacer un tiempo distinto. ¿Qué tiempo hace hoy?</p>`,
      svg: charla("Diálogo: How's the weather? It's sunny!", [["nina", "How's the weather?", A], ["nino", "It's sunny!", M]]),
    },
    {
      html: `<h3>Sunny and cloudy</h3><p>Si brilla el sol: <mark>It's sunny</mark>.</p><p>Si hay muchas nubes: <mark>It's cloudy</mark>.</p><p>Sun es «sol» y cloud es «nube».</p><p>Cuando hace sol, salimos a jugar.</p>`,
      svg: vocab("Sunny y cloudy", [["sol", "sunny", "hace sol", M], ["nube", "cloudy", "nublado", A]]),
    },
    {
      html: `<h3>Rainy, windy, snowy</h3><p>Si llueve: <mark>It's rainy</mark>. Si sopla el viento: <mark>It's windy</mark>.</p><p>Si nieva: <mark>It's snowy</mark>.</p><p>¡Haz el gesto de cada uno!</p><p>Cada tiempo suena distinto.</p>`,
      svg: vocab("Rainy, windy y snowy", [["lluvia", "rainy", "llueve", W], ["viento", "windy", "hace viento", V], ["nieve", "snowy", "nieva", A]]),
    },
    {
      html: `<h3>Hot and cold</h3><p>En verano: <mark>It's hot!</mark>, hace calor.</p><p>En invierno: <mark>It's cold!</mark>, hace frío.</p><p>Si hace frío, nos ponemos el <b>coat</b>.</p><p>¿Y en primavera?</p>`,
      svg: svg("Un niño con calor al sol y otro con frío y abrigo en la nieve", `${ic("sol", 50, 44, 1.2)}${nino(70, 150, { c: R, pose: "brazos" })}${rot(70, 172, "hot", { color: R, size: 20 })}<path d="M130 20 V160" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5"/>${ic("nieve", 220, 44, 1)}${ic("abrigo", 190, 118, 1.4)}<circle cx="190" cy="82" r="10" fill="#f3c9a1"/>${ic("gorro", 190, 74, 0.6)}${rot(190, 172, "cold", { color: A, size: 20 })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber el tiempo sirve para <mark>elegir la ropa</mark> y lo que llevamos.</p><p>It's rainy: cogemos el <b>umbrella</b>, el paraguas. It's sunny: ¡<b>sunglasses</b>, gafas de sol, y agua!</p>`,
      svg: vocab("Rainy con paraguas y sunny con gafas de sol", [["paraguas", "umbrella", "paraguas", R], ["gafas", "sunglasses", "gafas de sol", M]], { titulo: "Rainy? Sunny?" }),
    },
    {
      html: `<h3>Juego: el hombre del tiempo</h3><p>Ponte delante de un mapa dibujado, como en la tele.</p><p>Señala y di: <mark>It's sunny here! It's rainy here!</mark></p><p>¡Los demás hacen el gesto!</p><p>Cambiad los papeles.</p>`,
      svg: svg("Mapa del tiempo con sol, nube y lluvia y un niño que presenta", `<path d="M90 40 Q140 20 200 40 Q240 60 220 110 Q210 150 160 150 Q110 160 96 120 Q70 80 90 40z" fill="${V}" opacity=".35" stroke="${V}" stroke-width="2"/>${ic("sol", 130, 64, 0.9)}${ic("nube", 190, 70, 0.9)}${ic("lluvia", 160, 120, 0.9)}${nino(44, 158, { c: A, pose: "brazos" })}`),
    },
  ],
  figura: {
    titulo: "How's the weather?",
    svg: mural("Sunny, cloudy, rainy, windy y snowy", [["sol", "sunny", "hace sol", M], ["nube", "cloudy", "nublado", A], ["lluvia", "rainy", "llueve", W], ["viento", "windy", "hace viento", V], ["nieve", "snowy", "nieva", N]], "It's…"),
  },
  video: { ...vid("tfAB4BXSHOA", "Weather Song for Kids: Sun, Rain, Wind and Snow", "The Singing Walrus", 13393684), busqueda: "weather song for kids how's the weather" },
  ejemplos: [
    { enunciado: "Miramos por la ventana y cae agua. How's the weather?", pasos: ["Cae lluvia: rain.", "Respondemos con It's…"], resultado: "It's rainy!" },
    { enunciado: "Hace mucho frío. ¿Qué decimos y qué nos ponemos?", pasos: ["Frío es cold: It's cold!", "Nos ponemos el abrigo: coat."], resultado: "It's cold! Put on your coat!" },
  ],
  errores: [
    "Confundir hot (calor) y cold (frío).",
    "Decir solo «sun» en vez de It's sunny.",
    "Pensar que cloudy es lluvia: cloudy es nublado, rainy es lluvia.",
  ],
  ejercicios: [
    { q: "Cada mañana mira por la ventana y di How's the weather?", sol: "Nota para la familia: responded juntos It's sunny, cloudy, rainy…" },
    { q: "Haz el gesto de rainy, windy y snowy.", sol: "Dedos que caen, brazos que se mueven, temblar de frío." },
    { q: "Dibuja el tiempo de hoy y escribe o di la palabra.", sol: "Respuesta según el día." },
    { q: "Elige la ropa: It's cold. ¿Abrigo o camiseta de tirantes?", sol: "El abrigo (coat)." },
    { q: "Juega al hombre o la mujer del tiempo.", sol: "Nota: dibujad un mapa con soles y nubes recortadas." },
    { q: "Canta la canción del tiempo con el vídeo.", sol: "Haced los gestos de cada tiempo." },
  ],
  quiz: [
    { q: "Sunny significa…", o: ["hace sol", "llueve", "nieva"], a: 0, e: "Sun = sol." },
    { q: "Rainy significa…", o: ["hace viento", "llueve", "hace calor"], a: 1, e: "Rain = lluvia." },
    { q: "Si nieva decimos…", o: ["It's snowy", "It's hot", "It's sunny"], a: 0, e: "Snow = nieve." },
    { q: "Cold significa…", o: ["calor", "frío", "viento"], a: 1, e: "It's cold = hace frío." },
    { q: "How's the weather? significa…", o: ["¿qué tiempo hace?", "¿cómo te llamas?", "¿cuántos años tienes?"], a: 0, e: "Weather = el tiempo." },
    { q: "Si llueve llevamos…", o: ["un umbrella", "unas gafas de sol", "un bañador"], a: 0, e: "Umbrella = paraguas." },
  ],
  examen: [
    { q: "Windy significa…", o: ["hace viento", "nublado", "nieva"], a: 0, e: "Wind = viento." },
    { q: "En verano decimos…", o: ["It's hot!", "It's snowy!", "It's cold!"], a: 0, e: "Hot = calor." },
    { q: "Cloudy es…", o: ["nublado", "soleado", "lluvioso"], a: 0, e: "Cloud = nube." },
  ],
  feynman: ["Cómo se pregunta el tiempo en inglés", "Cinco tiempos: sunny, cloudy, rainy, windy, snowy", "La diferencia entre hot y cold"],
  mapa: mapa("THE WEATHER", "var(--pri)", [
    ["Sun / clouds", "sunny · cloudy", M],
    ["Rain / wind / snow", "rainy · windy · snowy", A],
    ["Hot / cold", "calor / frío", R],
    ["Question", "How's the weather?", V],
  ], 230),
  tarjetas: [
    ["Hace sol", "It's sunny"],
    ["Llueve", "It's rainy"],
    ["Nublado", "It's cloudy"],
    ["Hace viento", "It's windy"],
    ["Nieva", "It's snowy"],
    ["Hace frío", "It's cold"],
  ],
  familias: [
    "Cada mañana, preguntad How's the weather? antes de salir.",
    "Haced un calendario del tiempo con pegatinas de sol, nube y lluvia.",
    "Elegid la ropa según el tiempo diciendo It's cold, put on your coat.",
    "Mirad juntos el pronóstico del tiempo y decid las palabras en inglés.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: vocabulario del tiempo atmosférico en la rutina diaria, relación con la ropa y las estaciones", ["Panel del tiempo en la asamblea con la pregunta How's the weather?", "Canción con gestos para cada tiempo.", "Juego del presentador del tiempo con un mapa de la clase."]),
});
