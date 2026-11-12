// Educación Física 4º ESO (2 de 2). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

const M = "Educación Física";
const C = "4-eso";
const BG = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const filas = (aria, rows) => `<svg viewBox="0 0 640 ${rows.length * 50 + 20}" role="img" aria-label="${aria}">
  <rect width="640" height="${rows.length * 50 + 20}" rx="16" fill="var(--paper)"/>
  ${rows.map(([n, d, c], i) => `<rect x="20" y="${12 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${39 + i * 50}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="250" y="${39 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
</svg>`;
const chips = (rows) => rows.map(([n, d, c], i) => `<rect x="14" y="${16 + i * 52}" width="232" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="26" y="${36 + i * 52}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="26" y="${52 + i * 52}" font-size="12" fill="var(--ink)" ${F}>${d}</text>`).join("");

module.exports = [
  {
    materia: M, curso: C, titulo: "Deportes de raqueta", minutos: 35,
    objetivos: ["Conocer el reglamento básico del bádminton, el tenis de mesa y el pádel", "Ejecutar los golpes básicos con una técnica correcta", "Aplicar la táctica de mover al rival y ocupar el centro"],
    claves: ["bádminton", "volante", "saque", "derecha", "revés", "táctica"],
    pregunta: {
      texto: "¿Qué objeto deportivo crees que alcanza más velocidad: una pelota de tenis o un volante de bádminton?",
      respuesta: "El <mark>volante de bádminton</mark>: en un remate profesional ha superado los <b>490 km/h</b>, más que cualquier pelota de tenis. Pero sus plumas lo frenan muy rápido, por eso cae casi en vertical.",
    },
    bloques: [
      {
        html: `<h3>Qué tienen en común</h3><p>Bádminton, tenis de mesa, tenis y pádel son <b>deportes de red</b> con espacio separado: no hay contacto con el rival. El objetivo es que el móvil <mark>bote o caiga en el campo contrario</mark> sin que el rival pueda devolverlo, y evitar que caiga en el tuyo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pista de bádminton vista desde arriba con la red en el centro y un jugador a cada lado">${BG}
          <rect x="30" y="30" width="200" height="110" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/><path d="M130 22 V 148" stroke="var(--ink)" stroke-width="4"/>
          <path d="M100 30 V 140 M160 30 V 140 M30 85 H 100 M160 85 H 230" stroke="var(--leaf)" stroke-width="1.5"/>
          <circle cx="66" cy="85" r="9" fill="var(--pen)"/><circle cx="196" cy="85" r="9" fill="var(--red)"/>
          <path d="M74 80 Q 130 20 180 60" fill="none" stroke="var(--hl-ink)" stroke-width="2" stroke-dasharray="4 4"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="130" y="166" fill="var(--ink)">red</text><text x="80" y="50" fill="var(--hl-ink)">volante</text></g></svg>`,
      },
      {
        html: `<h3>Reglamento básico del bádminton</h3><p>Partidos al mejor de <b>3 juegos de 21 puntos</b>; cada intercambio da un punto, sea quien sea el que saca. El <mark>saque</mark> se hace por debajo de la cintura y en diagonal. El volante es bueno si cae sobre la línea. En individuales la pista es estrecha y larga; en dobles, más ancha.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Saque en diagonal desde el cuadro derecho al cuadro derecho del rival">${BG}
          <rect x="30" y="30" width="200" height="110" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><path d="M130 24 V 146" stroke="var(--ink)" stroke-width="4"/>
          <path d="M100 30 V 140 M160 30 V 140 M30 85 H 100 M160 85 H 230" stroke="var(--muted)" stroke-width="1.5"/>
          <rect x="30" y="85" width="70" height="55" fill="var(--pen)" fill-opacity=".2"/><rect x="160" y="30" width="70" height="55" fill="var(--red)" fill-opacity=".2"/>
          <path d="M66 112 L 192 58" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="6 4"/>
          <g ${F} font-size="12" font-weight="700"><text x="34" y="164" fill="var(--pen)">saque en diagonal</text><text x="232" y="164" text-anchor="end" fill="var(--muted)">21 puntos</text></g></svg>`,
      },
      {
        html: `<h3>Los golpes básicos</h3><p>Se agarra la raqueta como si dieras la mano. Golpes principales: <b>clear</b> (alto y al fondo, para ganar tiempo), <b>dejada</b> (suave, cerca de la red), <b>drive</b> (rápido y plano) y <mark>remate</mark> (de arriba abajo, para ganar el punto). Tras cada golpe, vuelve al centro.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Trayectorias de los golpes: clear alto y al fondo, dejada cerca de la red, drive plano y remate hacia abajo">${BG}
          <path d="M20 150 H 246" stroke="var(--muted)" stroke-width="2"/><path d="M130 150 V 104" stroke="var(--ink)" stroke-width="4"/>
          <path d="M30 110 Q 130 -20 236 146" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
          <path d="M30 120 Q 120 30 150 146" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
          <path d="M30 100 L 236 112" fill="none" stroke="var(--inf)" stroke-width="2.5"/>
          <path d="M40 40 L 200 146" fill="none" stroke="var(--red)" stroke-width="2.5"/>
          <g ${F} font-size="11" font-weight="700"><text x="146" y="28" fill="var(--pen)">clear</text><text x="40" y="146" fill="var(--leaf)">dejada</text><text x="200" y="128" fill="var(--inf)">drive</text><text x="40" y="32" fill="var(--red)">remate</text></g></svg>`,
      },
      {
        html: `<h3>Táctica: mover al rival</h3><p>La idea clave es <mark>enviar el volante lejos del rival</mark> y hacerle correr: alternar golpes al fondo y cerca de la red, y a un lado y al otro. Tú, mientras, vuelve siempre a la <b>posición base</b> en el centro de tu campo para llegar a todo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El rival tiene que correr a las cuatro esquinas mientras tú vuelves al centro">${BG}
          <rect x="140" y="20" width="106" height="140" fill="var(--red)" fill-opacity=".1" stroke="var(--red)" stroke-width="2"/><rect x="14" y="20" width="106" height="140" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2"/><path d="M130 14 V 166" stroke="var(--ink)" stroke-width="4"/>
          <circle cx="67" cy="90" r="10" fill="var(--pen)"/><text x="67" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)" ${F}>base</text>
          ${[[156, 34], [230, 34], [156, 146], [230, 146]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--hl-ink)"/><path d="M193 90 L ${x} ${y}" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="3 3"/>`).join("")}
          <circle cx="193" cy="90" r="10" fill="var(--red)"/></svg>`,
      },
      {
        html: `<h3>Otros deportes de raqueta</h3><p>El <b>tenis de mesa</b> se juega a 11 puntos y la pelota debe botar una vez en cada campo; el <b>pádel</b>, por parejas, usa las paredes y cuenta como el tenis (15, 30, 40, juego). En todos se respeta al rival: se saluda al acabar y se <mark>canta con honestidad</mark> si una bola fue dentro o fuera.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación: bádminton a 21 puntos, tenis de mesa a 11 y pádel por juegos y sets">${BG}${chips([["Bádminton", "volante · 21 puntos · sin bote", "var(--leaf)"], ["Tenis de mesa", "pelota · 11 puntos · un bote por campo", "var(--pen)"], ["Pádel", "parejas · paredes · 15-30-40-juego", "var(--inf)"]])}</svg>`,
      },
    ],
    figura: { titulo: "Golpes del bádminton y para qué sirven", svg: filas("Clear, dejada, drive y remate y su uso", [["Clear", "alto y al fondo: ganar tiempo y alejar al rival", "var(--pen)"], ["Dejada", "suave, junto a la red: obligar a subir", "var(--leaf)"], ["Drive", "rápido y plano: no dar tiempo", "var(--inf)"], ["Remate", "fuerte y hacia abajo: ganar el punto", "var(--red)"]]) },
    video: { id: "SF8G--iZN4U", titulo: "Bádminton para principiantes: introducción a los golpes básicos", canal: "KC Badminton", vistas: 3016771, megusta: 25230, busqueda: "bádminton golpes básicos" },
    quiz: [
      { q: "¿A cuántos puntos es un juego de bádminton?", o: ["11", "21", "15"], a: 1, e: "Al mejor de 3 juegos de 21." },
      { q: "En bádminton, el saque se hace…", o: ["por encima de la cabeza", "por debajo de la cintura y en diagonal", "desde la red"], a: 1, e: "Es la regla del servicio." },
      { q: "El golpe alto y al fondo para ganar tiempo es el…", o: ["remate", "clear", "drive"], a: 1, e: "Aleja al rival y te da tiempo." },
      { q: "Tras cada golpe conviene…", o: ["volver a la posición base", "quedarse en la red", "salir de la pista"], a: 0, e: "Así llegas a todo." },
      { q: "En tenis de mesa, el juego se gana a…", o: ["11 puntos", "21 puntos", "40 puntos"], a: 0, e: "Con 2 de diferencia." },
    ],
    examen: [
      { q: "Si el volante cae sobre la línea, es…", o: ["bueno", "fuera", "se repite"], a: 0, e: "La línea forma parte del campo." },
      { q: "¿Qué golpe obliga al rival a subir a la red?", o: ["Clear", "Dejada", "Drive"], a: 1, e: "Cae muy cerca de la red." },
      { q: "En pádel, después de 30 viene…", o: ["40", "45", "35"], a: 0, e: "15, 30, 40 y juego." },
    ],
    feynman: ["Qué tienen en común los deportes de raqueta", "Cómo se saca y se puntúa en bádminton", "Para qué sirve cada golpe básico", "Por qué hay que volver al centro tras golpear"],
    mapa: mapa("DEPORTES DE RAQUETA", "var(--bac)", [["Reglas", "21 puntos · saque en diagonal", "var(--leaf)"], ["Golpes", "clear · dejada · drive · remate", "var(--pen)"], ["Táctica", "mover al rival · posición base", "var(--red)"], ["Otros", "tenis de mesa · pádel", "var(--inf)"]], 250),
    tarjetas: [["Puntuación en bádminton", "3 juegos de 21 puntos; cada intercambio da punto."], ["Clear", "Golpe alto y al fondo para ganar tiempo."], ["Dejada", "Golpe suave que cae junto a la red."], ["Remate", "Golpe fuerte de arriba abajo para ganar el punto."], ["Posición base", "El centro de tu campo, adonde vuelves tras cada golpe."]],
    familias: ["Jugad un partido de bádminton o pádel en un parque o polideportivo.", "Ved un punto de bádminton profesional a cámara lenta y nombrad los golpes.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Resolución de problemas en situaciones motrices: deportes de red y muro, reglamento, técnica de golpeo y principios tácticos (RD 217/2022, Educación Física 4º).", ideas: ["Liguilla de bádminton con autoarbitraje.", "Juegos de precisión a zonas marcadas con conos.", "Análisis en vídeo del propio golpeo con el móvil."] },
    fuentes: [RD, { t: "Federación Española de Bádminton", url: "https://www.badminton.es/" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Actividades en el medio natural", minutos: 35,
    objetivos: ["Orientarse con mapa, brújula y referencias naturales", "Planificar una salida al medio natural con seguridad", "Respetar el entorno y aplicar la norma de no dejar rastro"],
    claves: ["orientación", "mapa", "brújula", "curvas de nivel", "senderismo", "sostenibilidad"],
    pregunta: {
      texto: "Te pierdes en el monte sin cobertura. ¿Sabrías encontrar el norte sin móvil?",
      respuesta: "Sí, con trucos sencillos: el <b>sol</b> sale por el este y a mediodía está al sur; de noche, la <mark>estrella Polar</mark> marca el norte. Y lo más fiable: un <b>mapa y una brújula</b>, que no necesitan batería.",
    },
    bloques: [
      {
        html: `<h3>El mapa de orientación</h3><p>Un mapa tiene <b>escala</b> (1:10.000 significa que 1 cm son 100 m), <b>leyenda</b> con los símbolos y <b>norte</b> marcado. Las <mark>curvas de nivel</mark> unen puntos a la misma altura: si están juntas, la pendiente es fuerte; si están separadas, el terreno es suave.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Curvas de nivel de una montaña: juntas en la ladera empinada y separadas en la suave">${BG}
          ${[64, 50, 37, 25, 14].map((r, i) => `<ellipse cx="${120 + i * 4}" cy="90" rx="${r * 1.6}" ry="${r}" fill="var(--leaf)" fill-opacity="${0.12 + i * 0.08}" stroke="var(--leaf)" stroke-width="1.5"/>`).join("")}
          <path d="M226 20 V 50" stroke="var(--red)" stroke-width="2.5"/><path d="M220 30 L 226 20 L 232 30" fill="none" stroke="var(--red)" stroke-width="2.5"/>
          <g ${F} font-size="11" font-weight="700"><text x="226" y="64" text-anchor="middle" fill="var(--red)">N</text><text x="20" y="168" fill="var(--muted)">1 cm = 100 m</text><text x="200" y="168" fill="var(--leaf)">cima</text></g></svg>`,
      },
      {
        html: `<h3>La brújula</h3><p>Su aguja roja apunta siempre al <b>norte magnético</b>. Para seguir un rumbo: coloca la brújula sobre el mapa uniendo dónde estás y adónde vas, gira el limbo hasta que sus líneas apunten al norte del mapa y, en el terreno, gira tú hasta que <mark>la aguja coincida con la flecha</mark> del limbo. Camina hacia donde indica la flecha de dirección.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Brújula de placa con la aguja roja apuntando al norte y la flecha de dirección">${BG}
          <rect x="70" y="20" width="120" height="150" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
          <path d="M130 24 L 122 44 H 138 Z" fill="var(--pen)"/><circle cx="130" cy="110" r="44" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
          <path d="M130 70 L 138 110 L 122 110 Z" fill="var(--red)"/><path d="M130 150 L 138 110 L 122 110 Z" fill="var(--muted)"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="130" y="82" fill="var(--red)">N</text><text x="200" y="36" text-anchor="start" fill="var(--pen)">dirección</text><text x="218" y="114" fill="var(--red)">aguja</text></g></svg>`,
      },
      {
        html: `<h3>Orientarse sin brújula</h3><p>El <b>sol</b> sale aproximadamente por el <b>este</b>, se pone por el <b>oeste</b> y en España, a mediodía (hora solar), está hacia el <b>sur</b>. De noche, la <mark>estrella Polar</mark> indica el norte: se encuentra prolongando cinco veces la distancia entre las dos últimas estrellas del «carro» de la Osa Mayor.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Recorrido del sol de este a oeste pasando por el sur a mediodía">${BG}
          <path d="M20 140 H 240" stroke="var(--muted)" stroke-width="2"/><path d="M30 140 Q 130 10 230 140" fill="none" stroke="var(--hl-ink)" stroke-width="2" stroke-dasharray="5 4"/>
          <circle cx="130" cy="76" r="14" fill="var(--hl)"/><circle cx="40" cy="128" r="9" fill="var(--hl)" fill-opacity=".6"/><circle cx="220" cy="128" r="9" fill="var(--hl)" fill-opacity=".6"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="40" y="160" fill="var(--ink)">Este</text><text x="130" y="160" fill="var(--ink)">Sur (mediodía)</text><text x="220" y="160" fill="var(--ink)">Oeste</text></g></svg>`,
      },
      {
        html: `<h3>Planificar una salida segura</h3><p>Antes de salir: consulta la <b>previsión del tiempo</b>, elige una ruta adecuada a tu nivel, <mark>avisa a alguien</mark> de tu itinerario y hora de vuelta, y lleva agua, comida, ropa por capas, protección solar, botiquín y el móvil cargado. Ante una emergencia, llama al 112.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lista de la mochila: agua, comida, ropa por capas, protector solar, botiquín y móvil">${BG}
          <rect x="20" y="40" width="80" height="110" rx="20" fill="var(--inf)"/><rect x="36" y="20" width="48" height="30" rx="12" fill="none" stroke="var(--inf)" stroke-width="6"/><rect x="34" y="80" width="52" height="40" rx="8" fill="var(--card)" fill-opacity=".4"/>
          ${["agua", "comida", "ropa por capas", "protector solar", "botiquín", "móvil cargado"].map((n, i) => `<text x="120" y="${38 + i * 22}" font-size="13" font-weight="700" fill="var(--ink)" ${F}>✓ ${n}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>No dejar rastro</h3><p>El medio natural es de todos. Sigue los <b>senderos marcados</b>, llévate <mark>toda tu basura</mark> (también la orgánica), no hagas fuego fuera de las zonas permitidas, no arranques plantas ni molestes a los animales y respeta el silencio. Las señales de los senderos: <b>blanco y rojo</b> (GR, gran recorrido), <b>blanco y amarillo</b> (PR, pequeño recorrido) y <b>blanco y verde</b> (SL, sendero local).</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Marcas de senderos: GR blanco y rojo, PR blanco y amarillo, SL blanco y verde">${BG}
          ${[["GR", "var(--red)", "gran recorrido (+50 km)"], ["PR", "var(--hl)", "pequeño recorrido (10–50 km)"], ["SL", "var(--leaf)", "sendero local (–10 km)"]].map(([n, c, d], i) => `<rect x="24" y="${24 + i * 48}" width="50" height="12" fill="#fff" stroke="var(--muted)"/><rect x="24" y="${36 + i * 48}" width="50" height="12" fill="${c}"/><text x="88" y="${36 + i * 48}" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${n}</text><text x="88" y="${52 + i * 48}" font-size="12" fill="var(--muted)" ${F}>${d}</text>`).join("")}
        </svg>`,
      },
    ],
    figura: { titulo: "Antes, durante y después de una salida", svg: filas("Antes: planificar y avisar; durante: orientarse y hidratarse; después: no dejar rastro", [["Antes", "tiempo · ruta según nivel · avisar · mochila", "var(--pen)"], ["Durante", "mapa y brújula · beber · ritmo del grupo", "var(--leaf)"], ["Emergencia", "mantener la calma · 112 · quedarse en el sendero", "var(--red)"], ["Siempre", "basura a casa · senderos marcados · respeto", "var(--inf)"]]) },
    video: { id: "FCkgs7YxHXs", titulo: "Aprende a orientarte: cómo usar una brújula", canal: "SIKANA Español", vistas: 543014, megusta: 0, busqueda: "cómo usar una brújula" },
    quiz: [
      { q: "En un mapa a escala 1:10.000, 1 cm equivale a…", o: ["10 m", "100 m", "1 km"], a: 1, e: "10.000 cm = 100 m." },
      { q: "Curvas de nivel muy juntas indican…", o: ["terreno llano", "pendiente fuerte", "un río"], a: 1, e: "Se sube mucho en poca distancia." },
      { q: "La aguja roja de la brújula apunta al…", o: ["sur", "norte magnético", "este"], a: 1, e: "Es el norte magnético." },
      { q: "Un sendero marcado en blanco y amarillo es un…", o: ["GR", "PR", "SL"], a: 1, e: "Pequeño recorrido." },
      { q: "Antes de una salida es imprescindible…", o: ["avisar a alguien del itinerario", "llevar mucho peso", "salir de noche"], a: 0, e: "Así sabrán dónde buscarte." },
    ],
    examen: [
      { q: "A mediodía en España, el sol está hacia el…", o: ["norte", "sur", "oeste"], a: 1, e: "Estamos en el hemisferio norte." },
      { q: "La estrella Polar señala el…", o: ["norte", "sur", "este"], a: 0, e: "Se busca con la Osa Mayor." },
      { q: "Los restos de fruta en el monte…", o: ["se dejan, son naturales", "se llevan a casa", "se entierran siempre"], a: 1, e: "Alteran la fauna y tardan en degradarse." },
    ],
    feynman: ["Qué información da un mapa y qué son las curvas de nivel", "Cómo se sigue un rumbo con la brújula", "Cómo orientarse con el sol y las estrellas", "Qué hay que hacer antes de una salida para que sea segura"],
    mapa: mapa("MEDIO NATURAL", "var(--bac)", [["Mapa", "escala · leyenda · curvas de nivel", "var(--leaf)"], ["Brújula", "norte · rumbo", "var(--red)"], ["Seguridad", "planificar · avisar · 112", "var(--pen)"], ["Respeto", "no dejar rastro · GR · PR · SL", "var(--inf)"]], 250),
    tarjetas: [["Escala 1:25.000", "1 cm del mapa = 250 m reales."], ["Curvas de nivel juntas", "Pendiente fuerte."], ["Marca GR", "Blanco y rojo: gran recorrido."], ["Marca PR", "Blanco y amarillo: pequeño recorrido."], ["Antes de salir", "Mirar el tiempo, avisar del itinerario y preparar la mochila."]],
    familias: ["Planificad juntos una ruta corta (PR o SL) cerca de casa con un mapa en papel.", "Practicad a buscar la estrella Polar una noche despejada.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Interacción eficiente y sostenible con el entorno: orientación, planificación de actividades en el medio natural, seguridad y conservación (RD 217/2022, Educación Física 4º).", ideas: ["Carrera de orientación en el centro o en un parque cercano.", "Planificación por grupos de una salida real con presupuesto y mochila.", "Recogida de residuos en un espacio natural."] },
    fuentes: [RD, { t: "Federación Española de Deportes de Montaña y Escalada, senderos", url: "https://fedme.es/senderos" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Expresión corporal y danza", minutos: 30,
    objetivos: ["Usar el cuerpo, el espacio y el tiempo para expresar ideas y emociones", "Crear y representar una coreografía en grupo", "Valorar las danzas del mundo y la desinhibición respetuosa"],
    claves: ["lenguaje corporal", "espacio", "ritmo", "coreografía", "mimo", "danzas del mundo"],
    pregunta: {
      texto: "Cuando hablamos con alguien, ¿cuánto de lo que transmitimos crees que llega por el cuerpo y no por las palabras?",
      respuesta: "Mucho: la <b>postura</b>, los <b>gestos</b>, la <b>mirada</b> y el tono de voz cambian por completo el mensaje. Una misma frase dicha con los brazos cruzados o abiertos <mark>significa cosas distintas</mark>. El cuerpo también habla.",
    },
    bloques: [
      {
        html: `<h3>El cuerpo comunica</h3><p>La <b>expresión corporal</b> usa el cuerpo para transmitir ideas, emociones y sensaciones. Sus recursos son el <b>gesto</b>, la <b>postura</b>, la <b>mirada</b> y el <b>movimiento</b>. Una postura abierta transmite <mark>seguridad y cercanía</mark>; una cerrada, defensa o inseguridad.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos siluetas: una con postura abierta y brazos extendidos, otra con postura cerrada y brazos cruzados">${BG}
          <circle cx="70" cy="44" r="14" fill="var(--leaf)"/><path d="M70 58 V 112 M70 112 L 54 152 M70 112 L 86 152 M70 72 L 34 52 M70 72 L 106 52" stroke="var(--leaf)" stroke-width="7" stroke-linecap="round"/>
          <circle cx="190" cy="44" r="14" fill="var(--red)"/><path d="M190 58 V 112 M190 112 L 180 152 M190 112 L 200 152 M176 78 L 204 86 M204 78 L 176 86" stroke="var(--red)" stroke-width="7" stroke-linecap="round"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="172" fill="var(--leaf)">abierta</text><text x="190" y="172" fill="var(--red)">cerrada</text></g></svg>`,
      },
      {
        html: `<h3>Espacio, tiempo e intensidad</h3><p>Todo movimiento se puede variar en tres componentes: el <b>espacio</b> (niveles alto, medio y bajo; direcciones; trayectorias), el <b>tiempo</b> (rápido o lento, con pausas) y la <b>intensidad</b> (fuerte o suave). Combinándolos, un mismo gesto <mark>expresa cosas muy distintas</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres niveles del espacio: alto, medio y bajo">${BG}
          <path d="M20 40 H 240 M20 90 H 240 M20 140 H 240" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
          <circle cx="160" cy="24" r="9" fill="var(--pen)"/><path d="M160 33 V 62 M160 40 L 146 22 M160 40 L 174 22 M160 62 L 152 86 M160 62 L 168 86" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/>
          <circle cx="200" cy="96" r="8" fill="var(--leaf)"/><path d="M200 104 V 124 M200 124 L 188 138 M200 124 L 214 138 M200 110 L 186 116 M200 110 L 214 116" stroke="var(--leaf)" stroke-width="5" stroke-linecap="round"/>
          <path d="M120 148 Q 140 142 160 148" stroke="var(--red)" stroke-width="8" stroke-linecap="round" fill="none"/><circle cx="114" cy="146" r="7" fill="var(--red)"/>
          <g ${F} font-size="13" font-weight="700"><text x="24" y="32" fill="var(--pen)">alto</text><text x="24" y="82" fill="var(--leaf)">medio</text><text x="24" y="132" fill="var(--red)">bajo</text></g></svg>`,
      },
      {
        html: `<h3>Mimo e improvisación</h3><p>El <b>mimo</b> cuenta historias solo con gestos, sin palabras, exagerando los movimientos para que se entiendan. En la <b>improvisación</b> se crea en el momento a partir de una consigna («eres una hoja que cae»). Lo importante es <mark>escuchar al grupo</mark> y no tener miedo al ridículo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cara de mimo con expresiones de alegría y tristeza">${BG}
          <circle cx="76" cy="90" r="46" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="60" cy="78" r="5" fill="var(--ink)"/><circle cx="92" cy="78" r="5" fill="var(--ink)"/><path d="M54 104 Q 76 124 98 104" fill="none" stroke="var(--red)" stroke-width="4" stroke-linecap="round"/>
          <circle cx="184" cy="90" r="46" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="168" cy="78" r="5" fill="var(--ink)"/><circle cx="200" cy="78" r="5" fill="var(--ink)"/><path d="M162 116 Q 184 98 206 116" fill="none" stroke="var(--pen)" stroke-width="4" stroke-linecap="round"/><path d="M200 86 V 98" stroke="var(--pen)" stroke-width="3" stroke-linecap="round"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="76" y="160" fill="var(--red)">alegría</text><text x="184" y="160" fill="var(--pen)">tristeza</text></g></svg>`,
      },
      {
        html: `<h3>Crear una coreografía</h3><p>Pasos: elegir la <b>música</b> y contar sus tiempos (en bloques de <mark>8 tiempos</mark>), crear pasos por bloques, decidir las <b>formaciones</b> en el espacio (línea, círculo, V…), ensayar por partes y unirlas. Una buena coreografía tiene inicio, desarrollo y un final claro.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Formaciones de una coreografía: en línea, en círculo y en V; la música se cuenta en bloques de 8 tiempos">${BG}
          ${[0, 1, 2, 3, 4].map((i) => `<circle cx="${24 + i * 14}" cy="50" r="5" fill="var(--pen)"/>`).join("")}
          ${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${130 + 20 * Math.cos(i * 1.047)}" cy="${50 + 20 * Math.sin(i * 1.047)}" r="5" fill="var(--leaf)"/>`).join("")}
          ${[[196, 34], [206, 46], [216, 58], [226, 46], [236, 34]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)"/>`).join("")}
          ${[1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<rect x="${14 + (n - 1) * 29}" y="116" width="25" height="30" rx="6" fill="${n === 1 ? "var(--hl)" : "var(--card)"}" stroke="var(--ink)" stroke-width="1.5"/><text x="${26.5 + (n - 1) * 29}" y="136" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
          <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="52" y="86" fill="var(--pen)">línea</text><text x="130" y="86" fill="var(--leaf)">círculo</text><text x="216" y="86" fill="var(--red)">V</text><text x="130" y="166" fill="var(--muted)">un bloque de 8 tiempos</text></g></svg>`,
      },
      {
        html: `<h3>Danzas del mundo</h3><p>Cada cultura tiene sus danzas: la <b>sardana</b> catalana en círculo, la <b>jota</b> aragonesa, el <b>flamenco</b> (Patrimonio de la Humanidad), el <b>sirtaki</b> griego o el <b>hip hop</b> nacido en Nueva York. Bailarlas es una forma de <mark>conocer y respetar</mark> otras culturas.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Danzas del mundo: sardana, jota, flamenco, sirtaki y hip hop">${BG}
          ${[["sardana", "Cataluña", "var(--pen)"], ["jota", "Aragón y otras", "var(--red)"], ["flamenco", "Andalucía", "var(--hl-ink)"], ["sirtaki", "Grecia", "var(--inf)"], ["hip hop", "EE. UU.", "var(--leaf)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 32}" width="220" height="26" rx="13" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="34" y="${30 + i * 32}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="226" y="${30 + i * 32}" text-anchor="end" font-size="12" fill="var(--muted)" ${F}>${d}</text>`).join("")}
        </svg>`,
      },
    ],
    figura: { titulo: "Componentes del movimiento expresivo", svg: filas("Cuerpo, espacio, tiempo e intensidad", [["Cuerpo", "gesto · postura · mirada", "var(--pen)"], ["Espacio", "niveles · direcciones · formaciones", "var(--leaf)"], ["Tiempo", "rápido · lento · pausas · 8 tiempos", "var(--hl-ink)"], ["Intensidad", "fuerte · suave · fluido · cortado", "var(--red)"]]) },
    video: { id: "b-y_9GscbTg", titulo: "Expresión corporal: conceptos básicos", canal: "Rocío Núñez", vistas: 227974, megusta: 2708, busqueda: "expresión corporal conceptos" },
    quiz: [
      { q: "¿Qué transmite una postura abierta?", o: ["Inseguridad", "Seguridad y cercanía", "Enfado"], a: 1, e: "Brazos y cuerpo abiertos." },
      { q: "En la mayoría de las músicas de baile se cuenta en bloques de…", o: ["3 tiempos", "8 tiempos", "12 tiempos"], a: 1, e: "Facilita coordinar al grupo." },
      { q: "El mimo cuenta historias…", o: ["con palabras", "solo con gestos", "solo con música"], a: 1, e: "Sin hablar." },
      { q: "La sardana es una danza tradicional de…", o: ["Grecia", "Cataluña", "Andalucía"], a: 1, e: "Se baila en círculo." },
      { q: "Los niveles del espacio son…", o: ["alto, medio y bajo", "rápido y lento", "fuerte y suave"], a: 0, e: "La altura del movimiento." },
    ],
    examen: [
      { q: "Rápido o lento, con pausas, es el componente de…", o: ["espacio", "tiempo", "intensidad"], a: 1, e: "Velocidad y ritmo." },
      { q: "¿Qué danza es Patrimonio Cultural Inmaterial de la Humanidad?", o: ["Flamenco", "Hip hop", "Zumba"], a: 0, e: "Desde 2010." },
      { q: "Para crear una coreografía conviene…", o: ["ensayar por partes y luego unirlas", "improvisar el día de la actuación", "no contar la música"], a: 0, e: "Por bloques." },
    ],
    feynman: ["Qué recursos usa la expresión corporal", "Cuáles son los componentes espacio, tiempo e intensidad", "Cómo se crea una coreografía paso a paso", "Por qué es valioso conocer danzas de otras culturas"],
    mapa: mapa("EXPRESIÓN CORPORAL", "var(--bac)", [["Cuerpo", "gesto · postura · mirada", "var(--pen)"], ["Componentes", "espacio · tiempo · intensidad", "var(--leaf)"], ["Técnicas", "mimo · improvisación", "var(--red)"], ["Danza", "coreografía · danzas del mundo", "var(--inf)"]], 250),
    tarjetas: [["Expresión corporal", "Usar el cuerpo para comunicar ideas y emociones."], ["Niveles del espacio", "Alto, medio y bajo."], ["Bloque musical", "8 tiempos."], ["Mimo", "Contar historias solo con gestos."], ["Formaciones", "Línea, círculo, V, filas…"]],
    familias: ["Jugad en casa a adivinar películas solo con gestos.", "Pedid que os enseñe la coreografía que prepara en clase.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Autorregulación emocional e interacción social: expresión corporal, técnicas expresivas, creación coreográfica y danzas del mundo (RD 217/2022, Educación Física 4º).", ideas: ["Coreografía grupal de 32 tiempos presentada al final de la unidad.", "Juegos de mimo y estatuas por emociones.", "Investigación y baile de una danza tradicional de la región."] },
    fuentes: [RD, { t: "UNESCO, el flamenco en la lista del patrimonio inmaterial", url: "https://ich.unesco.org/es/RL/el-flamenco-00363" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Alimentación y hábitos saludables", minutos: 35,
    objetivos: ["Conocer los nutrientes y el plato saludable", "Relacionar alimentación, hidratación, descanso y actividad física", "Detectar hábitos perjudiciales y mitos sobre dietas"],
    claves: ["nutrientes", "plato saludable", "hidratación", "descanso", "ultraprocesados", "postura"],
    pregunta: {
      texto: "Una lata de refresco de cola tiene unos 35 gramos de azúcar. ¿Cuántos terrones son?",
      respuesta: "Unos <mark>7 terrones</mark>. La OMS recomienda no pasar de 25 g de azúcar libre al día, así que una sola lata ya supera el límite. El <b>agua</b> es la mejor bebida, también cuando haces deporte.",
    },
    bloques: [
      {
        html: `<h3>Los nutrientes</h3><p>Los alimentos aportan: <b>hidratos de carbono</b> (energía: pan, pasta, arroz, fruta), <b>proteínas</b> (construir y reparar: legumbres, huevos, pescado, carne), <b>grasas</b> (energía de reserva: aceite de oliva, frutos secos), y <b>vitaminas y minerales</b> (regulan el cuerpo: frutas y verduras). Y <mark>agua</mark>, imprescindible.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los nutrientes y su función: hidratos energía, proteínas construir, grasas reserva, vitaminas regular">${BG}${chips([["Hidratos", "energía rápida · pan, arroz, fruta", "var(--hl-ink)"], ["Proteínas", "construir músculo · legumbres, huevo", "var(--red)"], ["Grasas y vitaminas", "reserva y regulación · aceite, verdura", "var(--leaf)"]])}</svg>`,
      },
      {
        html: `<h3>El plato saludable</h3><p>Una forma sencilla de comer bien: llena <mark>la mitad del plato</mark> con verduras y frutas, <b>un cuarto</b> con cereales integrales y <b>un cuarto</b> con proteína saludable (legumbres, pescado, huevo, carne blanca). Aceite de oliva para cocinar y <b>agua</b> para beber.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Plato saludable: mitad verduras y frutas, un cuarto cereales integrales, un cuarto proteínas, y un vaso de agua">${BG}
          <circle cx="110" cy="90" r="70" fill="var(--card)" stroke="var(--muted)" stroke-width="3"/>
          <path d="M110 90 L 110 20 A 70 70 0 0 0 110 160 Z" fill="var(--leaf)"/><path d="M110 90 L 110 20 A 70 70 0 0 1 180 90 Z" fill="var(--hl)"/><path d="M110 90 L 180 90 A 70 70 0 0 1 110 160 Z" fill="var(--red)" fill-opacity=".8"/>
          <rect x="204" y="60" width="34" height="60" rx="4" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="76" y="94" fill="var(--card)">verdura</text><text x="76" y="108" fill="var(--card)">y fruta</text><text x="140" y="66" fill="var(--hl-ink)">cereales</text><text x="142" y="122" fill="var(--card)">proteína</text><text x="221" y="138" fill="var(--pen)">agua</text></g></svg>`,
      },
      {
        html: `<h3>Hidratación y deporte</h3><p>Al hacer ejercicio se pierde agua con el sudor. Bebe <b>antes, durante y después</b> en pequeños sorbos, sin esperar a tener sed. Para actividades de menos de una hora basta con <mark>agua</mark>; las bebidas isotónicas solo tienen sentido en esfuerzos largos. Las bebidas energéticas no son para adolescentes.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Beber antes, durante y después del ejercicio">${BG}
          ${[["antes", 50], ["durante", 130], ["después", 210]].map(([n, x]) => `<path d="M${x - 16} 50 L ${x - 12} 130 H ${x + 12} L ${x + 16} 50 Z" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2.5"/><path d="M${x - 14} 80 L ${x - 12} 130 H ${x + 12} L ${x + 14} 80 Z" fill="var(--pen)"/><text x="${x}" y="152" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
          <text x="130" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="var(--pen)" ${F}>pequeños sorbos, sin esperar a la sed</text></svg>`,
      },
      {
        html: `<h3>Descanso y postura</h3><p>Los adolescentes necesitan dormir <mark>8–10 horas</mark>: durante el sueño el cuerpo se recupera y se fija lo aprendido. Las pantallas antes de dormir lo dificultan. En clase y con el móvil, cuida la <b>postura</b>: espalda apoyada, pantalla a la altura de los ojos y mochila en los dos hombros.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Postura correcta frente a la pantalla: espalda recta y pantalla a la altura de los ojos; postura incorrecta con el cuello inclinado">${BG}
          <circle cx="62" cy="44" r="12" fill="var(--leaf)"/><path d="M62 56 V 110 L 92 110 V 150" fill="none" stroke="var(--leaf)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M62 74 L 92 84" stroke="var(--leaf)" stroke-width="5" stroke-linecap="round"/><rect x="96" y="34" width="8" height="34" rx="2" fill="var(--ink)"/>
          <circle cx="178" cy="62" r="12" fill="var(--red)"/><path d="M168 72 Q 162 90 166 110 L 196 110 V 150" fill="none" stroke="var(--red)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M168 84 L 200 104" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/><rect x="198" y="100" width="20" height="8" rx="2" fill="var(--ink)" transform="rotate(30 208 104)"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="72" y="170" fill="var(--leaf)">✓ bien</text><text x="186" y="170" fill="var(--red)">✗ cuello doblado</text></g></svg>`,
      },
      {
        html: `<h3>Ultraprocesados, mitos y hábitos de riesgo</h3><p>Bollería, refrescos, snacks y comida rápida tienen mucho <b>azúcar, sal y grasas</b> de baja calidad: mejor ocasionalmente. Desconfía de las <mark>dietas milagro</mark> y de los suplementos que prometen resultados rápidos. Tabaco, alcohol y vapeadores dañan los pulmones y el rendimiento: el mejor hábito es no empezar.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Semáforo de alimentos: verde a diario, amarillo con moderación y rojo de forma ocasional">${BG}
          <rect x="20" y="16" width="56" height="148" rx="16" fill="var(--ink)"/><circle cx="48" cy="44" r="18" fill="var(--leaf)"/><circle cx="48" cy="90" r="18" fill="var(--hl)"/><circle cx="48" cy="136" r="18" fill="var(--red)"/>
          <g ${F} font-size="13" font-weight="700"><text x="90" y="40" fill="var(--leaf)">a diario</text><text x="90" y="56" font-size="11" fill="var(--muted)">fruta, verdura, legumbre, agua</text><text x="90" y="86" fill="var(--hl-ink)">con moderación</text><text x="90" y="102" font-size="11" fill="var(--muted)">carne roja, queso, pan blanco</text><text x="90" y="132" fill="var(--red)">ocasional</text><text x="90" y="148" font-size="11" fill="var(--muted)">bollería, refrescos, snacks</text></g></svg>`,
      },
    ],
    figura: { titulo: "Los cuatro pilares de la salud", svg: filas("Alimentación, hidratación, actividad física y descanso", [["Alimentación", "plato saludable · poco ultraprocesado", "var(--leaf)"], ["Hidratación", "agua antes, durante y después", "var(--pen)"], ["Actividad física", "60 minutos al día", "var(--red)"], ["Descanso", "8–10 horas · sin pantallas antes de dormir", "var(--inf)"]]) },
    video: { id: "eX5AJX0tv2k", titulo: "¿Qué es el plato saludable o plato Harvard?", canal: "EITB", vistas: 55211, megusta: 0, busqueda: "plato saludable Harvard" },
    quiz: [
      { q: "¿Qué parte del plato saludable deben ocupar verduras y frutas?", o: ["Un cuarto", "La mitad", "Nada"], a: 1, e: "Es la base del plato." },
      { q: "¿Qué nutriente sirve sobre todo para construir y reparar músculo?", o: ["Hidratos", "Proteínas", "Agua"], a: 1, e: "Legumbres, huevo, pescado…" },
      { q: "Para una clase de Educación Física de una hora lo mejor es beber…", o: ["bebida energética", "agua", "refresco"], a: 1, e: "Basta con agua." },
      { q: "¿Cuántas horas deberían dormir los adolescentes?", o: ["5–6", "8–10", "12–14"], a: 1, e: "Para recuperarse y aprender." },
      { q: "La bollería y los refrescos deben tomarse…", o: ["a diario", "de forma ocasional", "en cada comida"], a: 1, e: "Mucho azúcar, sal y grasas." },
    ],
    examen: [
      { q: "La OMS recomienda no superar al día unos… de azúcar libre.", o: ["25 g", "100 g", "250 g"], a: 0, e: "Una lata de refresco ya los supera." },
      { q: "La mochila se lleva mejor…", o: ["en un hombro", "en los dos hombros", "en la mano"], a: 1, e: "Reparte el peso." },
      { q: "¿Cuál es la grasa más recomendable para cocinar?", o: ["Mantequilla", "Aceite de oliva", "Margarina"], a: 1, e: "Grasa saludable." },
    ],
    feynman: ["Qué función tiene cada nutriente", "Cómo es el plato saludable", "Cómo hidratarse cuando haces deporte", "Por qué el descanso y la postura son parte de la salud"],
    mapa: mapa("HÁBITOS SALUDABLES", "var(--bac)", [["Nutrientes", "hidratos · proteínas · grasas · vitaminas", "var(--hl-ink)"], ["Plato", "½ verdura · ¼ cereal · ¼ proteína", "var(--leaf)"], ["Agua y descanso", "hidratarse · 8–10 h", "var(--pen)"], ["Riesgos", "ultraprocesados · dietas milagro", "var(--red)"]], 260),
    tarjetas: [["Plato saludable", "½ verduras y frutas, ¼ cereales integrales, ¼ proteína, agua."], ["Proteínas", "Construyen y reparan tejidos."], ["Hidratos de carbono", "La principal fuente de energía."], ["Horas de sueño en la adolescencia", "Entre 8 y 10."], ["Ultraprocesados", "Mucho azúcar, sal y grasas: solo de vez en cuando."]],
    familias: ["Preparad juntos una cena siguiendo el plato saludable.", "Revisad las etiquetas de tres productos de la despensa y comparad el azúcar.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Vida activa y saludable: alimentación, hidratación, descanso, ergonomía y prevención de hábitos nocivos (RD 217/2022, Educación Física 4º).", ideas: ["Análisis de etiquetas nutricionales de productos que traen los alumnos.", "Diario de sueño y pantallas de una semana.", "Debate sobre bebidas energéticas y publicidad dirigida a adolescentes."] },
    fuentes: [RD, { t: "OMS, alimentación sana", url: "https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet" }, { t: "Harvard T.H. Chan School of Public Health, el plato para comer saludable", url: "https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/translations/spanish/" }],
    revisado: "2026-11-12",
  },
];
