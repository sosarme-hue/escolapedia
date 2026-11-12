// Ciencias Sociales 1º de Primaria. Formato ampliado de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, arbol, casa, coche, check, RD } = require("./_peques");

// Personas con un detalle de su oficio. (x, y) = pies.
const medica = (x, y, h = 100) => `${persona(x, y, h, "#fff", "#6b3f1f")}<path d="M${x - 6} ${y - h * 0.6} q 6 ${h * 0.14} 12 0" stroke="var(--muted)" stroke-width="2" fill="none"/><circle cx="${x + 6}" cy="${y - h * 0.46}" r="3" fill="var(--muted)"/>`;
const bombero = (x, y, h = 100) => `${persona(x, y, h, "var(--red)")}<path d="M${x - h * 0.17} ${y - h * 0.86} Q ${x} ${y - h * 1.08} ${x + h * 0.17} ${y - h * 0.86} Z" fill="var(--sun)"/>`;
const policia = (x, y, h = 100) => `${persona(x, y, h, "var(--pen)")}<rect x="${x - h * 0.16}" y="${y - h * 0.97}" width="${h * 0.32}" height="${h * 0.08}" rx="2" fill="var(--ink)"/>`;
const cocinero = (x, y, h = 100) => `${persona(x, y, h, "#fff")}<path d="M${x - h * 0.13} ${y - h * 0.88} h ${h * 0.26} v ${-h * 0.1} q ${-h * 0.13} ${-h * 0.16} ${-h * 0.26} 0 Z" fill="#fff" stroke="var(--line)" stroke-width="2"/>`;
const granjero = (x, y, h = 100) => `${persona(x, y, h, "var(--leaf)")}<ellipse cx="${x}" cy="${y - h * 0.9}" rx="${h * 0.22}" ry="${h * 0.04}" fill="#d9a066"/><rect x="${x - h * 0.1}" y="${y - h * 1.0}" width="${h * 0.2}" height="${h * 0.1}" rx="3" fill="#d9a066"/>`;
const obrero = (x, y, h = 100) => `${persona(x, y, h, "var(--inf)")}<path d="M${x - h * 0.16} ${y - h * 0.88} Q ${x} ${y - h * 1.06} ${x + h * 0.16} ${y - h * 0.88} Z" fill="var(--sun)"/>`;
const martillo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s}) rotate(-30)"><rect x="-3" y="-4" width="6" height="34" rx="2" fill="#a8702e"/><rect x="-12" y="-12" width="24" height="10" rx="2" fill="#6b7385"/></g>`;
const fonendo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M-10 -20 V -4 Q 0 12 10 -4 V -20"/><path d="M0 8 V 20"/><circle cy="24" r="5" fill="var(--muted)"/></g>`;
const carta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-18" y="-12" width="36" height="24" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-18 -12 L 0 2 L 18 -12" stroke="var(--ink)" stroke-width="2" fill="none"/></g>`;
const tractor = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="-30" width="34" height="18" fill="var(--red)"/><rect x="0" y="-48" width="20" height="36" fill="var(--red)"/><rect x="4" y="-44" width="12" height="12" fill="var(--water)"/><circle cx="12" cy="-10" r="12" fill="var(--ink)"/><circle cx="-18" cy="-6" r="7" fill="var(--ink)"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "Los oficios",
  minutos: 25,
  objetivos: ["Saber qué es un oficio o profesión", "Reconocer oficios del entorno, sus herramientas y su lugar de trabajo", "Valorar que todos los trabajos son importantes", "Saber que cualquier persona puede elegir cualquier oficio"],
  claves: ["oficio", "profesión", "trabajo", "herramienta", "uniforme"],
  pregunta: {
    texto: "Esta mañana has comido pan, has ido al cole y has visto pasar un autobús. ¿Cuántas personas han trabajado para ti?",
    respuesta: "¡Muchísimas! El <mark>panadero</mark> hizo el pan, la <mark>maestra</mark> te enseña y el <mark>conductor</mark> lleva el autobús. Cada uno tiene un <b>oficio</b> que ayuda a los demás.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un oficio?</h3><p>Un <mark>oficio</mark> es el trabajo que hace una persona. También se llama <b>profesión</b>.</p><p>Las personas mayores trabajan para ganar dinero. Con el dinero compran comida y pagan su casa.</p><p>Además, con su trabajo <b>ayudan</b> a los demás. Todos nos necesitamos. ¡Gracias a todos!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro trabajadores: médica, bombero, policía y cocinero">${BG}
        ${medica(40, 156, 96)}${bombero(100, 156, 96)}${policia(160, 156, 96)}${cocinero(220, 156, 96)}
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(130, 176, "Todos trabajamos para todos", { size: 12, color: "var(--pen)" })}</svg>`,
      video: { id: "ts05iL0-rj8", titulo: "Los oficios / Canción infantil", canal: "AglaE", vistas: 3561509, megusta: 0 },
    },
    {
      html: `<h3>Oficios que nos cuidan</h3><p>Algunas personas <mark>cuidan nuestra salud</mark> y nuestra seguridad.</p><p>Los <b>médicos</b> y los <b>enfermeros</b> nos curan. Trabajan en el hospital y en el centro de salud. Los <b>veterinarios</b> curan a los animales.</p><p>Los <b>bomberos</b> apagan fuegos. La <b>policía</b> vigila que se cumplan las normas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una médica con fonendoscopio, un bombero con manguera y un policía">${BG}
        ${medica(52, 156, 120)}${fonendo(90, 96, 0.9)}
        ${bombero(150, 156, 120)}<path d="M168 112 Q 196 100 214 112" stroke="var(--muted)" stroke-width="6" fill="none"/><g fill="var(--water)"><circle cx="222" cy="106" r="3"/><circle cx="230" cy="112" r="3"/><circle cx="226" cy="98" r="3"/></g>
        ${policia(226, 156, 80)}
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(52, 176, "médica", { size: 12 })}${txt(150, 176, "bombero", { size: 12 })}${txt(226, 176, "policía", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>Oficios que nos enseñan</h3><p>Los <mark>maestros</mark> nos enseñan a leer, a escribir y a contar. También nos enseñan a convivir.</p><p>Los <b>bibliotecarios</b> nos ayudan a encontrar libros.</p><p>Los <b>entrenadores</b> nos enseñan deportes. Los <b>monitores</b> nos cuidan en el comedor y en las excursiones. Aprender es divertido.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una maestra junto a la pizarra y un bibliotecario con libros">${BG}
        <rect x="20" y="26" width="104" height="60" rx="4" fill="var(--leaf)" stroke="#8a5a2b" stroke-width="4"/>${txt(72, 64, "1 + 1 = 2", { size: 15, color: "#fff", font: D, weight: 800 })}
        ${persona(150, 160, 120, "var(--red)", "#6b3f1f")}
        <g transform="translate(214 150)"><rect x="-26" y="-90" width="52" height="90" fill="#c98a4a"/><path d="M-26 -60 H 26 M-26 -30 H 26" stroke="#8a5a2b" stroke-width="2"/>${[[-22, -88], [-12, -88], [-2, -88], [-20, -58], [-8, -58], [6, -58], [-18, -28], [0, -28], [12, -28]].map(([a, b], i) => `<rect x="${a}" y="${b}" width="8" height="26" fill="${["var(--red)", "var(--pen)", "var(--leaf)", "var(--sun)"][i % 4]}"/>`).join("")}</g>
        <path d="M14 162 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(150, 176, "maestra", { size: 12 })}${txt(214, 176, "biblioteca", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>Oficios que nos dan alimentos</h3><p>Muchas personas trabajan para que tengamos <mark>comida</mark>.</p><p>Los <b>agricultores</b> cultivan frutas, verduras y cereales en el campo. Los <b>ganaderos</b> cuidan vacas, ovejas y gallinas. Los <b>pescadores</b> pescan en el mar.</p><p>El <b>panadero</b> hace el pan. El <b>cocinero</b> prepara la comida.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un agricultor con su tractor en el campo y un pescador con su barca">${BG}
        <rect x="14" y="116" width="128" height="50" fill="#c98a4a" fill-opacity=".4"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M${24 + i * 24} 128 l 0 -12 M${24 + i * 24} 122 l -6 -6 M${24 + i * 24} 122 l 6 -6" stroke="var(--leaf)" stroke-width="2.5"/>`).join("")}
        ${granjero(36, 116, 80)}${tractor(104, 116, 1)}
        <rect x="150" y="110" width="96" height="56" fill="var(--water)" fill-opacity=".35"/>
        <path d="M168 110 H 230 L 220 126 H 178 Z" fill="#a8702e"/>${persona(196, 110, 40, "var(--sun)")}<path d="M208 84 L 236 60 V 108" stroke="var(--ink)" stroke-width="2" fill="none"/>
        ${txt(70, 176, "agricultor", { size: 12 })}${txt(198, 176, "pescador", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>Oficios que construyen y arreglan</h3><p>Otras personas <mark>construyen</mark> y arreglan cosas.</p><p>Los <b>albañiles</b> construyen casas con ladrillos. Los <b>carpinteros</b> hacen muebles de madera.</p><p>Los <b>fontaneros</b> arreglan grifos y tuberías. Los <b>electricistas</b> arreglan la luz. Los <b>mecánicos</b> reparan coches.</p><p>Usan muchas herramientas: martillo, sierra, llave inglesa y destornillador.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un albañil con casco junto a una pared de ladrillos y una caja de herramientas">${BG}
        <g>${[...Array(5)].map((_, f) => [...Array(4)].map((_, c) => `<rect x="${24 + c * 26 + (f % 2) * 13}" y="${138 - f * 16}" width="24" height="14" fill="var(--red)" fill-opacity=".75" stroke="#fff" stroke-width="1.5"/>`).join("")).join("")}</g>
        ${obrero(160, 156, 110)}${martillo(212, 120, 1.1)}
        <rect x="196" y="140" width="46" height="18" rx="3" fill="var(--pen)"/><path d="M210 140 v -6 h 18 v 6" stroke="var(--pen)" stroke-width="3" fill="none"/>
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(76, 176, "ladrillos", { size: 12 })}${txt(170, 176, "albañil", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>Oficios que venden y transportan</h3><p>En las tiendas, los <mark>dependientes</mark> nos venden cosas. En el súper, el <b>cajero</b> nos cobra.</p><p>Los <b>conductores</b> llevan autobuses, taxis y camiones. Los <b>pilotos</b> llevan aviones.</p><p>El <b>cartero</b> reparte cartas y paquetes. Los <b>repartidores</b> traen lo que compramos a casa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una cartera con su bolsa y una carta, y un camión de reparto">${BG}
        ${persona(60, 156, 116, "var(--sun)", "#6b3f1f")}<rect x="72" y="104" width="26" height="22" rx="3" fill="var(--pen)"/>${carta(100, 70, 1)}
        <g transform="translate(184 156)"><rect x="-54" y="-58" width="70" height="48" rx="3" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M16 -40 H 42 L 54 -24 V -10 H 16 Z" fill="var(--inf)"/><rect x="24" y="-36" width="16" height="12" fill="var(--water)"/><circle cx="-34" cy="-6" r="8" fill="var(--ink)"/><circle cx="36" cy="-6" r="8" fill="var(--ink)"/></g>
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(60, 176, "cartera", { size: 12 })}${txt(170, 176, "repartidor", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>Herramientas y uniformes</h3><p>Cada oficio usa sus <mark>herramientas</mark>. La médica usa un fonendoscopio. El carpintero usa un martillo y una sierra. La peluquera usa tijeras y peine.</p><p>Algunos oficios llevan <b>uniforme</b>. Así los reconocemos fácilmente y van protegidos. El bombero lleva casco y traje especial.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Herramientas: fonendoscopio, martillo, tijeras y peine, y un casco de bombero">${BG}
        ${fonendo(40, 84, 1.3)}${martillo(100, 80, 1.3)}
        <g transform="translate(160 84)"><path d="M-2 -2 L 20 -16 M-2 2 L 20 16" stroke="#6b7385" stroke-width="4" stroke-linecap="round"/><circle cx="-10" cy="-8" r="7" fill="none" stroke="var(--red)" stroke-width="3.5"/><circle cx="-10" cy="8" r="7" fill="none" stroke="var(--red)" stroke-width="3.5"/></g>
        <g transform="translate(222 84)"><path d="M-26 6 Q -26 -26 0 -26 Q 26 -26 26 6 Z" fill="var(--sun)"/><rect x="-32" y="4" width="64" height="8" rx="4" fill="var(--sun)"/></g>
        ${txt(40, 140, "médica", { size: 12 })}${txt(100, 160, "carpintero", { size: 12 })}${txt(160, 140, "peluquera", { size: 12 })}${txt(222, 160, "bombero", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>Todos los oficios son importantes</h3><p>Todos los trabajos son <mark>necesarios</mark>. Sin barrenderos, las calles estarían sucias. Sin agricultores, no habría comida.</p><p>Además, <b>cualquier persona</b> puede elegir cualquier oficio. Hay bomberas y enfermeros. Hay pilotas y maestros.</p><p>Lo importante es hacer bien el trabajo y con ganas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una bombera y un enfermero sonríen juntos">${BG}
        ${bombero(84, 160, 130)}<rect x="66" y="30" width="36" height="8" rx="2" fill="#6b3f1f"/>
        ${persona(176, 160, 126, "var(--water)")}<rect x="168" y="94" width="16" height="6" fill="var(--red)"/><rect x="173" y="89" width="6" height="16" fill="var(--red)"/>
        <path d="M14 162 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(84, 176, "bombera", { size: 12 })}${txt(176, 176, "enfermero", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer los oficios te ayuda a saber <mark>a quién pedir ayuda</mark>. Si tu perro está malo, vas al veterinario. Si se rompe un grifo, llamas al fontanero.</p><p>Y te ayuda a pensar qué te gustaría ser de mayor. ¿Qué te gusta hacer? ¿Qué oficio elegirías tú?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una niña piensa en qué será de mayor: astronauta, veterinaria o cocinera">${BG}
        ${persona(60, 166, 120, "var(--red)", "#6b3f1f")}
        <g fill="var(--card)" stroke="var(--line)" stroke-width="2"><circle cx="92" cy="54" r="5"/><circle cx="104" cy="40" r="8"/></g>
        <rect x="116" y="16" width="130" height="80" rx="20" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <g transform="translate(150 70)"><circle r="14" fill="#fff" stroke="var(--ink)" stroke-width="2"/><rect x="-9" y="-6" width="18" height="10" rx="4" fill="var(--water)"/><rect x="-12" y="14" width="24" height="10" fill="#fff" stroke="var(--ink)" stroke-width="2"/></g>
        ${fonendo(214, 60, 0.9)}
        ${txt(181, 116, "¿Qué seré?", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Juego: adivina el oficio</h3><p>Escucha las pistas y di el <mark>oficio</mark>.</p><p>1. Llevo casco y apago fuegos.</p><p>2. Hago pan muy temprano.</p><p>3. Curo a perros y gatos.</p><p>4. Reparto cartas por las casas.</p><p>Soluciones: bombero, panadero, veterinaria y cartero. ¡Ahora imita tú un oficio sin hablar!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro tarjetas con pistas: casco, pan, huella de perro y carta">${BG}
        ${[0, 1, 2, 3].map((i) => `<rect x="${14 + i * 60}" y="40" width="54" height="80" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${txt(41 + i * 60, 144, String(i + 1), { size: 16, color: "var(--pen)", font: D, weight: 800 })}`).join("")}
        <g transform="translate(41 84)"><path d="M-18 6 Q -18 -18 0 -18 Q 18 -18 18 6 Z" fill="var(--sun)"/><rect x="-22" y="4" width="44" height="6" rx="3" fill="var(--sun)"/></g>
        <g transform="translate(101 84)"><path d="M-20 10 Q -22 -10 0 -12 Q 22 -10 20 10 Z" fill="#d9a066" stroke="#a8702e" stroke-width="2"/></g>
        <g transform="translate(161 84)" fill="#8a5a2b"><ellipse cy="6" rx="10" ry="8"/><circle cx="-11" cy="-8" r="4"/><circle cx="-4" cy="-14" r="4"/><circle cx="4" cy="-14" r="4"/><circle cx="11" cy="-8" r="4"/></g>
        ${carta(221, 84, 1)}
        ${txt(130, 28, "¿Quién soy?", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Los oficios",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cuatro grupos de oficios: nos cuidan, nos enseñan, nos dan alimentos y construyen">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["NOS CUIDAN", "médicos · bomberos", "var(--red)", medica(0, 50, 150)], ["NOS ENSEÑAN", "maestros", "var(--pen)", persona(0, 50, 150, "var(--red)", "#6b3f1f")], ["ALIMENTOS", "agricultores", "var(--leaf)", granjero(0, 50, 150)], ["CONSTRUYEN", "albañiles", "var(--inf)", obrero(0, 50, 150)]].map(([t, d, c, dib], i) => {
        const x = 90 + i * 153;
        return `<rect x="${x - 70}" y="24" width="140" height="250" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><g transform="translate(${x} 140)">${dib}</g>${txt(x, 222, t, { size: 15, color: c, font: D, weight: 800 })}${txt(x, 246, d, { size: 11 })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "qLAZIwlSmEc", titulo: "Las profesiones para niños - Vocabulario para niños - Los oficios y trabajos", canal: "Smile and Learn - Español", vistas: 5852106, megusta: 0, busqueda: "los oficios y profesiones para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Quién trabaja con harina, agua y un horno?",
      pasos: ["Con harina y agua se hace una masa.", "La masa se cuece en el horno.", "Así se hace el pan."],
      resultado: "el panadero o la panadera." },
    { enunciado: "¿Dónde trabaja una enfermera y qué herramientas usa?",
      pasos: ["La enfermera cuida a personas enfermas.", "Trabaja en el hospital o en el centro de salud.", "Usa termómetro, vendas y jeringuillas."],
      resultado: "trabaja en el hospital y usa termómetro y vendas." },
    { enunciado: "Se ha atascado el lavabo. ¿A quién llamamos?",
      pasos: ["El lavabo tiene grifo y tuberías.", "Quien arregla grifos y tuberías es el fontanero.", "Lo llamamos por teléfono."],
      resultado: "llamamos al fontanero." },
  ],
  errores: [
    "Pensar que hay oficios solo de chicos o solo de chicas: cualquiera puede hacer cualquier oficio.",
    "Creer que unos trabajos valen más que otros: todos son necesarios.",
    "Confundir el oficio con el lugar: la médica es la persona; el hospital es el lugar.",
    "Pensar que solo trabaja quien lleva uniforme: muchos oficios no lo llevan.",
  ],
  ejercicios: [
    { q: "Di en qué trabajan las personas de tu familia.", sol: "Respuesta libre." },
    { q: "¿Quién apaga los fuegos?", sol: "Los bomberos." },
    { q: "¿Quién cura a los animales?", sol: "El veterinario o la veterinaria." },
    { q: "¿Quién cultiva las verduras?", sol: "El agricultor o la agricultora." },
    { q: "Dibuja a una persona trabajando con su herramienta.", sol: "Respuesta libre." },
    { q: "¿Qué herramienta usa el carpintero?", sol: "El martillo (y la sierra)." },
    { q: "¿Dónde trabaja un maestro?", sol: "En el colegio." },
    { q: "Di un oficio que lleve uniforme.", sol: "Por ejemplo: bombero o policía." },
    { q: "¿Qué te gustaría ser de mayor? ¿Por qué?", sol: "Respuesta libre." },
    { q: "Imita un oficio sin hablar. Tu familia lo adivina.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "Un oficio es…", o: ["un trabajo", "un juguete", "un animal"], a: 0, e: "El trabajo que hace una persona." },
    { q: "¿Quién nos cura?", o: ["El médico", "El cartero", "El pintor"], a: 0, e: "Los médicos y enfermeros." },
    { q: "¿Quién hace el pan?", o: ["El panadero", "El pescador", "El piloto"], a: 0, e: "El panadero." },
    { q: "¿Quién reparte las cartas?", o: ["El cartero", "El cocinero", "El albañil"], a: 0, e: "El cartero." },
    { q: "¿Quién construye casas?", o: ["El albañil", "La maestra", "El veterinario"], a: 0, e: "Con ladrillos." },
    { q: "¿Quién pesca en el mar?", o: ["El pescador", "El ganadero", "El mecánico"], a: 0, e: "El pescador." },
    { q: "El martillo es la herramienta del…", o: ["carpintero", "médico", "cartero"], a: 0, e: "El carpintero." },
    { q: "¿Quién arregla los coches?", o: ["El mecánico", "El panadero", "El bibliotecario"], a: 0, e: "El mecánico." },
    { q: "Las chicas pueden ser…", o: ["solo maestras", "lo que quieran", "nada"], a: 1, e: "Cualquier oficio." },
    { q: "Los trabajos…", o: ["son todos importantes", "solo algunos importan", "no sirven"], a: 0, e: "Todos son necesarios." },
  ],
  examen: [
    { q: "¿Quién cuida vacas y ovejas?", o: ["El ganadero", "El piloto", "El cajero"], a: 0, e: "El ganadero." },
    { q: "¿Dónde trabaja un bibliotecario?", o: ["En la biblioteca", "En el mar", "En el campo"], a: 0, e: "En la biblioteca." },
    { q: "¿Quién arregla un grifo?", o: ["El fontanero", "El panadero", "El cartero"], a: 0, e: "El fontanero." },
    { q: "¿Para qué sirve un uniforme?", o: ["Para reconocerlos y protegerse", "Para jugar", "Para dormir"], a: 0, e: "Los reconocemos y van protegidos." },
  ],
  feynman: ["Qué es un oficio", "Oficios que nos cuidan, nos enseñan y nos alimentan", "Por qué todos los oficios son importantes"],
  mapa: mapa("LOS OFICIOS", "var(--pri)", [
    ["Nos cuidan", "médicos · bomberos · policía", "var(--red)"],
    ["Nos enseñan", "maestros · bibliotecarios", "var(--pen)"],
    ["Alimentos", "agricultores · panaderos", "var(--leaf)"],
    ["Construyen", "albañiles · carpinteros", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["¿Qué es un oficio?", "El trabajo que hace una persona"],
    ["¿Quién apaga fuegos?", "El bombero o la bombera"],
    ["¿Quién cura a los animales?", "El veterinario"],
    ["¿Quién cultiva el campo?", "El agricultor"],
    ["¿Quién construye casas?", "El albañil"],
    ["¿Qué usa el carpintero?", "Martillo y sierra"],
    ["¿Quién reparte las cartas?", "El cartero"],
    ["¿Hay oficios de chicos y de chicas?", "No, cualquiera puede hacer cualquiera"],
  ],
  familias: [
    "Contadle en qué consiste vuestro trabajo y, si se puede, enseñádselo.",
    "En un paseo, buscad personas trabajando y adivinad su oficio.",
    "Jugad a las mímicas de oficios.",
    "Leed un cuento en el que una mujer o un hombre tenga un oficio poco habitual.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: los trabajos y profesiones del entorno, su función social, herramientas y lugares de trabajo; igualdad de oportunidades (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Visita de familias que explican su oficio a la clase.", "Rincón de disfraces con herramientas de juguete.", "Mural de oficios del barrio con fotos tomadas en una salida."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
