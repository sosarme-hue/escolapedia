// Física y Química 2º ESO: las fuerzas y sus efectos. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "Las fuerzas y sus efectos",
  minutos: 55,
  objetivos: ["Definir fuerza, reconocer sus efectos y distinguir fuerzas de contacto y a distancia", "Representar fuerzas con vectores y sumar fuerzas de la misma dirección", "Medir fuerzas con el dinamómetro y aplicar la ley de Hooke", "Diferenciar masa y peso y explicar el rozamiento y las fuerzas eléctricas y magnéticas"],
  claves: ["fuerza", "newton", "efecto deformador", "efecto dinámico", "vector", "resultante", "ley de Hooke", "peso", "rozamiento", "magnetismo"],
  pregunta: {
    texto: "En la Luna, un astronauta salta seis veces más alto que en la Tierra. ¿Tiene allí menos masa? ¿Pesa menos?",
    respuesta: "Su <mark>masa</mark> es la misma: la cantidad de materia de su cuerpo no cambia por viajar. Lo que cambia es su <mark>peso</mark>, que es la fuerza con la que lo atrae el astro. La Luna atrae unas seis veces menos que la Tierra, así que allí pesa seis veces menos y, con el mismo impulso de sus piernas, salta mucho más.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una fuerza?</h3><p>Empujar una puerta, chutar un balón, estirar una goma o levantar la mochila son ejemplos de fuerzas. Una <mark>fuerza</mark> es toda acción capaz de <b>deformar</b> un cuerpo o de <b>cambiar su movimiento</b>. Las fuerzas siempre aparecen cuando dos cuerpos <b>interaccionan</b>: hace falta uno que la ejerce y otro que la recibe. No se ven, pero sí vemos sus efectos. En el Sistema Internacional, las fuerzas se miden en <mark>newtons (N)</mark>, en honor a Isaac Newton. Para hacerte una idea, 1 N es más o menos la fuerza que hace falta para sostener en la mano una manzana pequeña de 100 g, y para levantar una mochila de 5 kg hacen falta unos 50 N.</p>`,
    },
    {
      html: `<h3>Los efectos de las fuerzas</h3><p>Las fuerzas producen dos tipos de efectos. Los <mark>efectos deformadores</mark> cambian la forma de los cuerpos. Según cómo reaccionan, los materiales pueden ser <b>elásticos</b>, si recuperan la forma al dejar de actuar la fuerza (un muelle, una goma, una pelota de tenis); <b>plásticos</b>, si quedan deformados (la plastilina, el barro o una lata aplastada); o <b>frágiles</b>, si se rompen (el cristal, una galleta, la tiza). Los <mark>efectos dinámicos</mark> cambian el estado de movimiento: ponen en marcha un cuerpo parado, lo <b>aceleran</b>, lo <b>frenan</b> o le <b>cambian la dirección</b>. Cuando un portero detiene un penalti, su fuerza frena el balón; cuando un tenista golpea la pelota, la deforma un instante y le cambia la dirección y la velocidad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Efectos de las fuerzas: una goma se estira y vuelve, elástica; una plastilina queda aplastada, plástica; un vaso se rompe, frágil; un balón cambia de dirección, efecto dinámico">${BG}
        <path d="M14 40 h 16 l 6 -8 l 10 16 l 10 -16 l 10 16 l 6 -8 h 12" stroke="var(--pen)" stroke-width="2.5" fill="none"/>${fl(84, 40, 104, 40, "var(--red)", 2.5)}${t(56, 66, "elástico", { size: 10, color: "var(--pen)" })}
        <ellipse cx="174" cy="44" rx="36" ry="10" fill="#e08a5a"/>${fl(174, 12, 174, 30, "var(--red)", 2.5)}${t(174, 70, "plástico", { size: 10, color: "#b5653a" })}
        <path d="M30 96 h 34 l -4 44 h -26 Z" fill="#cfe8ff" stroke="var(--ink)" stroke-width="1.5"/><path d="M38 104 l 10 14 l -6 8 l 12 10" stroke="var(--ink)" fill="none"/>${t(47, 160, "frágil", { size: 10 })}
        <circle cx="118" cy="128" r="12" fill="#fff" stroke="var(--ink)" stroke-width="2"/><path d="M134 128 Q 180 128 200 100 T 240 96" stroke="var(--muted)" stroke-dasharray="4 3" fill="none"/>${fl(150, 140, 180, 122, "var(--red)", 2.5)}${t(184, 160, "dinámico", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "vg6GEGcvAMM", titulo: "Las fuerzas. Tipos y efectos", canal: "Tu profe en casa", vistas: 596734 },
    },
    {
      html: `<h3>Fuerzas de contacto y a distancia</h3><p>Según cómo actúan, las fuerzas pueden ser de dos tipos. Las <mark>fuerzas de contacto</mark> necesitan que los cuerpos se toquen: empujar un carro, tirar de una cuerda (tensión), el apoyo de un libro sobre la mesa (fuerza normal), el rozamiento o el empuje del agua sobre un barco. Las <mark>fuerzas a distancia</mark> actúan sin que los cuerpos se toquen, a través del espacio. Son tres: la <b>gravitatoria</b>, que atrae a todos los cuerpos con masa (la Tierra atrae la manzana y mantiene a la Luna en órbita); la <b>eléctrica</b>, entre cuerpos con carga (un globo frotado atrae trocitos de papel); y la <b>magnética</b>, la de los imanes, que atraen el hierro, el níquel y el cobalto. Todas las fuerzas de contacto son, en el fondo, fuerzas eléctricas entre los átomos de las superficies.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fuerzas de contacto: una persona empuja una caja. Fuerzas a distancia: la Tierra atrae una manzana y un imán atrae un clip sin tocarlo">${BG}
        <line x1="104" y1="14" x2="104" y2="166" stroke="var(--line)" stroke-width="2"/>${t(54, 28, "de contacto", { size: 11, color: "var(--pen)" })}${t(182, 28, "a distancia", { size: 11, color: "var(--red)" })}
        <circle cx="26" cy="66" r="8" fill="var(--ink)"/><path d="M26 74 v 34 M26 84 l 28 6 M26 108 l -8 30 M26 108 l 12 30" stroke="var(--ink)" stroke-width="4"/>
        <rect x="56" y="88" width="36" height="50" rx="3" fill="#c9a37a" stroke="#8a6a4a" stroke-width="2"/>${fl(44, 112, 70, 112, "var(--red)", 2.5)}<line x1="10" y1="140" x2="100" y2="140" stroke="var(--muted)" stroke-width="2"/>
        <circle cx="140" cy="60" r="9" fill="var(--red)"/><path d="M140 51 q 2 -6 6 -8" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>${fl(140, 74, 140, 112, "var(--pen)", 2.5)}<path d="M114 160 q 26 -28 52 0" fill="var(--leaf)" fill-opacity=".5"/>${t(140, 176, "gravedad", { size: 10 })}
        <path d="M190 70 v 40 h 14 v -26 h 14 v 26 h 14 v -40 Z" fill="var(--red)"/><rect x="190" y="104" width="14" height="10" fill="#aaa"/><rect x="218" y="104" width="14" height="10" fill="#aaa"/>
        <path d="M206 150 h 14 a 4 4 0 0 0 0 -8 h -12 a 3 3 0 0 0 0 6 h 10" stroke="var(--ink)" stroke-width="2" fill="none"/>${fl(212, 140, 212, 120, "var(--pen)", 2)}${t(212, 176, "imán", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Las fuerzas se representan con flechas</h3><p>Para describir una fuerza no basta con decir su valor. No es lo mismo empujar un carrito hacia delante que hacia atrás. Por eso las fuerzas son <mark>magnitudes vectoriales</mark> y se dibujan con una flecha, llamada <b>vector</b>, que tiene cuatro elementos: el <b>punto de aplicación</b>, donde actúa la fuerza (el origen de la flecha); la <b>intensidad</b> o módulo, su valor en newtons (la longitud de la flecha); la <b>dirección</b>, la recta sobre la que actúa (horizontal, vertical, inclinada); y el <b>sentido</b>, hacia dónde apunta (la punta de la flecha). Si en un dibujo cada centímetro representa 10 N, una fuerza de 30 N se dibujará con una flecha de 3 cm. Las magnitudes que quedan bien descritas solo con un número y su unidad, como la masa o el tiempo, son <b>escalares</b>.</p>`,
    },
    {
      html: `<h3>Sumar fuerzas: la resultante</h3><p>Muchas veces sobre un cuerpo actúan varias fuerzas a la vez. Su efecto conjunto equivale al de una sola fuerza, la <mark>fuerza resultante</mark>. Si las fuerzas tienen la <b>misma dirección y el mismo sentido</b>, la resultante es la <b>suma</b> de sus intensidades y tiene ese sentido: si dos amigos empujan un coche con 200 N y 150 N, la resultante es de 350 N. Si tienen la <b>misma dirección y sentidos contrarios</b>, la resultante es la <b>resta</b> y tiene el sentido de la fuerza mayor: en el juego de la soga, si un equipo tira con 600 N y el otro con 450 N, la resultante es de 150 N hacia el primero. Si las dos fuerzas son iguales y opuestas, la resultante es <b>cero</b>: el cuerpo está en <mark>equilibrio</mark> y no cambia su movimiento.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Resultante de fuerzas: en el mismo sentido 200 más 150 da 350 newtons; en sentido contrario 600 menos 450 da 150 newtons hacia el lado de la fuerza mayor">${BG}
        <rect x="110" y="30" width="30" height="30" rx="3" fill="var(--muted)"/>${fl(140, 40, 190, 40, "var(--pen)", 3)}${fl(140, 52, 178, 52, "var(--leaf)", 3)}${t(200, 44, "200 N", { size: 10, anchor: "start", color: "var(--pen)" })}${t(186, 62, "150 N", { size: 10, anchor: "start", color: "var(--leaf)" })}
        ${t(60, 50, "R = 350 N →", { size: 11, color: "var(--red)" })}
        <rect x="110" y="104" width="30" height="30" rx="3" fill="var(--muted)"/>${fl(140, 119, 230, 119, "var(--pen)", 3)}${fl(110, 119, 42, 119, "var(--leaf)", 3)}${t(186, 110, "600 N", { size: 10, color: "var(--pen)" })}${t(76, 110, "450 N", { size: 10, color: "var(--leaf)" })}
        ${t(130, 160, "R = 600 − 450 = 150 N →", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Medir fuerzas: la ley de Hooke</h3><p>En 1678 el científico inglés <b>Robert Hooke</b> estudió los muelles y descubrió que el <b>alargamiento</b> de un muelle es <mark>directamente proporcional</mark> a la fuerza que lo estira: si la fuerza se duplica, el alargamiento también. Es la <mark>ley de Hooke</mark>: <b>F = k · Δl</b>, donde F es la fuerza (N), Δl el alargamiento (m), que es la longitud final menos la inicial, y k la <b>constante elástica</b> del muelle (N/m), que indica lo duro que es. La ley se cumple hasta el <b>límite de elasticidad</b>: si se estira demasiado, el muelle queda deformado. Gracias a esta ley funciona el <mark>dinamómetro</mark>, el instrumento para medir fuerzas: un muelle dentro de un tubo con una escala en newtons. Al colgarle un objeto, el muelle se estira y la escala marca su peso.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dinamómetro: un tubo con un muelle y una escala en newtons; al colgarle una pesa el muelle se estira y la aguja marca 3 newtons">${BG}
        <rect x="70" y="14" width="40" height="120" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        ${[0, 1, 2, 3, 4, 5].map((i) => `<line x1="98" y1="${34 + i * 18}" x2="108" y2="${34 + i * 18}" stroke="var(--ink)"/>${t(116, 38 + i * 18, String(i), { size: 10, anchor: "start" })}`).join("")}
        ${(() => { let d = "M84 20 v 6"; for (let i = 0; i < 10; i++) d += ` l ${i % 2 ? -8 : 8} 3.6 l ${i % 2 ? 8 : -8} 3.6`; return `<path d="${d}" stroke="var(--pen)" stroke-width="2" fill="none"/>`; })()}
        <line x1="78" y1="88" x2="100" y2="88" stroke="var(--red)" stroke-width="3"/><path d="M84 88 v 54" stroke="var(--ink)" stroke-width="2"/><rect x="70" y="142" width="28" height="24" rx="3" fill="#b8860b"/>
        ${t(196, 70, "marca 3 N", { size: 12, color: "var(--red)" })}${t(196, 100, "F = k · Δl", { size: 13, color: "var(--leaf)" })}</svg>`,
      video: { id: "YectKJB2zxM", titulo: "Ley de Hooke: ejercicios y explicación", canal: "Profesor Particular Puebla", vistas: 1032337 },
    },
    {
      html: `<h3>Masa y peso no son lo mismo</h3><p>En el lenguaje de la calle decimos «peso 50 kilos», pero en física hay que distinguir. La <mark>masa</mark> es la <b>cantidad de materia</b> de un cuerpo, se mide en <b>kilogramos</b> con la balanza y es la misma en cualquier lugar del universo. El <mark>peso</mark> es la <b>fuerza con la que un planeta atrae a un cuerpo</b>, se mide en <b>newtons</b> con el dinamómetro y depende del lugar. Se calcula con la fórmula <b>P = m · g</b>, donde g es la aceleración de la gravedad: en la Tierra vale 9,8 N/kg (unos 10), en la Luna 1,6 N/kg y en Júpiter 24,8 N/kg. Una persona de 50 kg pesa 490 N en la Tierra, solo 80 N en la Luna y 1240 N en Júpiter. Su masa sigue siendo 50 kg en los tres sitios.</p>${tabla(["", "Masa", "Peso"], [["Qué es", "cantidad de materia", "fuerza de atracción del planeta"], ["Unidad", "kilogramo (kg)", "newton (N)"], ["Se mide con", "balanza", "dinamómetro"], ["¿Cambia de un planeta a otro?", "no", "sí"]])}`,
      video: { id: "U9vRxIGKB2k", titulo: "Diferencias entre masa y peso [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 227722 },
    },
    {
      html: `<h3>El rozamiento</h3><p>Si lanzas una pelota por el suelo, al final se para. La frena la <mark>fuerza de rozamiento</mark>, que aparece cuando un cuerpo se desliza, o intenta deslizarse, sobre otro, y siempre <b>se opone al movimiento</b>. Se debe a que las superficies, incluso las que parecen lisas, tienen irregularidades microscópicas que se enganchan entre sí. El rozamiento es mayor cuanto más <b>rugosas</b> son las superficies y cuanto más <b>peso</b> soportan. También el aire y el agua producen rozamiento: los coches, los aviones y los peces tienen formas <b>aerodinámicas</b> para reducirlo. El rozamiento es <b>útil</b>, porque sin él no podríamos caminar, escribir con un lápiz ni frenar la bici; y a la vez es <b>perjudicial</b>, porque desgasta piezas y zapatos y convierte energía en calor. Para reducirlo se usan lubricantes, ruedas y rodamientos.</p>`,
    },
    {
      html: `<h3>Fuerzas eléctricas y magnéticas</h3><p>Si frotas un globo contra tu pelo, el globo se <b>electriza</b>: gana electrones y queda con carga negativa, y entonces atrae trocitos de papel o te levanta el pelo. Las <mark>fuerzas eléctricas</mark> actúan entre cuerpos con carga: las cargas del <b>mismo signo se repelen</b> y las de <b>signo contrario se atraen</b>. Los rayos son grandes descargas eléctricas entre las nubes y el suelo. Las <mark>fuerzas magnéticas</mark> son las de los <b>imanes</b>, que atraen el hierro y algunos otros metales. Todo imán tiene dos <b>polos</b>, norte y sur: los polos iguales se repelen y los distintos se atraen. Si partes un imán, cada trozo tiene otra vez sus dos polos. La Tierra se comporta como un gran imán, y por eso la aguja de una <b>brújula</b>, que es un pequeño imán, apunta siempre hacia el norte.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Imanes: polos iguales norte y norte se repelen; polos distintos norte y sur se atraen; brújula señalando al norte">${BG}
        ${[[30, ["N", "S"], ["S", "N"], "se repelen", 60], [100, ["N", "S"], ["N", "S"], "se atraen", 100]].map(([y, a, b, s]) => `<rect x="14" y="${y}" width="40" height="22" fill="var(--red)"/><rect x="54" y="${y}" width="40" height="22" fill="var(--pen)"/>${t(34, y + 16, a[0], { size: 12, color: "#fff" })}${t(74, y + 16, a[1], { size: 12, color: "#fff" })}
          <rect x="${s === "se repelen" ? 128 : 104}" y="${y}" width="40" height="22" fill="${b[0] === "S" ? "var(--pen)" : "var(--red)"}"/><rect x="${s === "se repelen" ? 168 : 144}" y="${y}" width="40" height="22" fill="${b[1] === "S" ? "var(--pen)" : "var(--red)"}"/>${t(s === "se repelen" ? 148 : 124, y + 16, b[0], { size: 12, color: "#fff" })}${t(s === "se repelen" ? 188 : 164, y + 16, b[1], { size: 12, color: "#fff" })}
          ${t(150, y + 40, s, { size: 10, color: "var(--muted)" })}`).join("")}
        <circle cx="230" cy="130" r="22" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M230 112 l 5 18 l -5 18 l -5 -18 Z" fill="var(--red)"/><path d="M230 130 l 5 0 l -5 18 l -5 -18 Z" fill="var(--muted)"/>${t(230, 104, "N", { size: 10 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Fuerzas: qué son y cómo actúan",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Resumen: una fuerza deforma o cambia el movimiento, se mide en newtons con el dinamómetro y puede ser de contacto o a distancia: gravitatoria, eléctrica o magnética">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${caja(230, 18, 180, 44, "FUERZA (N)", "var(--eso)", { size: 18, op: 1, color: "#fff" })}
      ${[["Efectos", "deforma o cambia", "el movimiento", "var(--pen)"], ["Medida", "dinamómetro", "F = k · Δl", "#b8860b"], ["Contacto", "empuje · tensión", "rozamiento", "var(--red)"], ["A distancia", "gravitatoria", "eléctrica · magnética", "var(--leaf)"]].map(([a, b, c, col], i) => { const x = 20 + i * 152; return `<rect x="${x}" y="92" width="140" height="120" rx="14" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(x + 70, 124, a, { size: 15, color: col, font: D })}${t(x + 70, 158, b, { size: 12, weight: 400 })}${t(x + 70, 182, c, { size: 12, weight: 400 })}${fl(320, 62, x + 70, 90, "var(--muted)", 1.5)}`; }).join("")}
    </svg>`,
  },
  video: { id: "IJI-T9MiKIY", titulo: "Tipos de fuerzas", canal: "EnFoco", vistas: 527887, megusta: 8466, busqueda: "qué es una fuerza efectos de las fuerzas" },
  ejemplos: [
    { enunciado: "Un muelle de 10 cm se alarga hasta 14 cm al colgarle 2 N. ¿Cuánto vale su constante? ¿Cuánto medirá con 5 N?",
      pasos: ["Δl = 14 − 10 = 4 cm = 0,04 m; k = F / Δl = 2 / 0,04 = 50 N/m.", "Con 5 N: Δl = F / k = 5 / 50 = 0,1 m = 10 cm.", "Longitud final: 10 + 10 = 20 cm."],
      resultado: "k = 50 N/m; medirá 20 cm." },
    { enunciado: "¿Cuánto pesa en la Tierra y en la Luna una mochila de 6 kg? (g Tierra = 9,8 N/kg; g Luna = 1,6 N/kg)",
      pasos: ["P = m · g.", "Tierra: 6 · 9,8 = 58,8 N.", "Luna: 6 · 1,6 = 9,6 N. La masa sigue siendo 6 kg."],
      resultado: "58,8 N en la Tierra y 9,6 N en la Luna." },
    { enunciado: "Sobre una caja actúan 80 N hacia la derecha y 30 N hacia la izquierda, y otra persona empuja con 20 N hacia la derecha. ¿Cuál es la resultante?",
      pasos: ["Hacia la derecha: 80 + 20 = 100 N.", "Hacia la izquierda: 30 N.", "R = 100 − 30 = 70 N hacia la derecha."],
      resultado: "70 N hacia la derecha." },
  ],
  errores: [
    "Decir «peso 50 kilos»: la masa se mide en kg y el peso en newtons.",
    "Pensar que la masa cambia en la Luna: cambia el peso, no la masa.",
    "Sumar siempre las fuerzas: si tienen sentidos contrarios se restan.",
    "Usar la longitud total del muelle en vez del alargamiento en la ley de Hooke.",
    "Creer que el rozamiento siempre es malo: sin él no podríamos andar ni frenar.",
  ],
  ejercicios: [
    { q: "Indica el efecto (deformador o dinámico) de: aplastar una lata, frenar la bici, estirar un muelle, chutar un balón parado.", sol: "Deformadores: aplastar la lata, estirar el muelle. Dinámicos: frenar la bici, chutar el balón (que también se deforma un instante)." },
    { q: "Clasifica en elástico, plástico o frágil: una cama elástica, un vaso de cristal, la cera caliente, un tirachinas.", sol: "Elásticos: cama elástica y tirachinas. Plástico: cera caliente. Frágil: vaso de cristal." },
    { q: "Clasifica en fuerzas de contacto o a distancia: la de un imán sobre un clip, la de la mano al empujar, el peso, el rozamiento.", sol: "A distancia: imán y peso. De contacto: empujar y rozamiento." },
    { q: "Nombra los cuatro elementos de un vector fuerza.", sol: "Punto de aplicación, intensidad o módulo, dirección y sentido." },
    { q: "Calcula la resultante de 45 N y 15 N de la misma dirección: a) mismo sentido; b) sentidos contrarios.", sol: "a) 60 N; b) 30 N en el sentido de la de 45 N." },
    { q: "Un muelle de k = 200 N/m se estira 3 cm. ¿Qué fuerza actúa?", sol: "F = 200 · 0,03 = 6 N." },
    { q: "¿Cuál es la masa de un objeto que pesa 98 N en la Tierra?", sol: "m = P / g = 98 / 9,8 = 10 kg." },
    { q: "¿Por qué en invierno se echa sal o arena en las carreteras heladas?", sol: "Para aumentar el rozamiento entre las ruedas y el suelo (la sal además funde el hielo) y que los coches no patinen." },
    { q: "Frotas dos globos con tu jersey y los acercas. ¿Qué ocurre y por qué?", sol: "Se repelen, porque los dos tienen carga del mismo signo." },
    { q: "Si partes un imán por la mitad, ¿obtienes un polo norte y un polo sur separados?", sol: "No: cada trozo es un imán nuevo con su polo norte y su polo sur." },
  ],
  quiz: [
    { q: "La unidad de fuerza en el SI es el…", o: ["kilogramo", "newton", "metro"], a: 1, e: "El newton (N)." },
    { q: "Un material que queda deformado es…", o: ["elástico", "plástico", "frágil"], a: 1, e: "Plástico." },
    { q: "¿Cuál es una fuerza a distancia?", o: ["El rozamiento", "La magnética", "Un empujón"], a: 1, e: "La magnética." },
    { q: "La longitud de la flecha de un vector indica…", o: ["la dirección", "la intensidad", "el sentido"], a: 1, e: "La intensidad." },
    { q: "Si la resultante es cero, el cuerpo está en…", o: ["equilibrio", "aceleración", "caída"], a: 0, e: "Equilibrio." },
    { q: "Las fuerzas se miden con el…", o: ["dinamómetro", "barómetro", "cronómetro"], a: 0, e: "Dinamómetro." },
    { q: "En la ley de Hooke, Δl es…", o: ["la longitud total", "el alargamiento", "la constante"], a: 1, e: "El alargamiento." },
    { q: "El peso se calcula con…", o: ["P = m · g", "P = m / g", "P = k · Δl"], a: 0, e: "P = m · g." },
    { q: "El rozamiento siempre…", o: ["ayuda al movimiento", "se opone al movimiento", "es cero"], a: 1, e: "Se opone." },
    { q: "Dos polos norte de dos imanes…", o: ["se atraen", "se repelen", "no interaccionan"], a: 1, e: "Se repelen." },
  ],
  examen: [
    { q: "En la Luna, tu masa…", o: ["es menor", "es la misma", "es mayor"], a: 1, e: "La masa no cambia." },
    { q: "Si colgamos el doble de peso de un muelle, se alarga…", o: ["el doble", "la mitad", "igual"], a: 0, e: "Proporcional a la fuerza." },
    { q: "Un globo frotado atrae papelitos por una fuerza…", o: ["magnética", "eléctrica", "gravitatoria"], a: 1, e: "Eléctrica." },
  ],
  feynman: ["Qué efectos producen las fuerzas y qué tipos hay", "Cómo funciona un dinamómetro", "Por qué no es lo mismo masa que peso"],
  mapa: mapa("FUERZAS", "var(--eso)", [
    ["Efectos", "deformadores · dinámicos", "var(--pen)"],
    ["Tipos", "contacto · a distancia", "var(--red)"],
    ["Medida", "vector · resultante · Hooke", "#b8860b"],
    ["Ejemplos", "peso · rozamiento · imanes", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Fuerza", "Acción que deforma un cuerpo o cambia su movimiento; se mide en N."],
    ["Efecto dinámico", "Poner en marcha, acelerar, frenar o cambiar la dirección."],
    ["Fuerza a distancia", "Actúa sin contacto: gravitatoria, eléctrica o magnética."],
    ["Resultante", "Fuerza única que equivale a todas las que actúan."],
    ["Ley de Hooke", "F = k · Δl: el alargamiento es proporcional a la fuerza."],
    ["Peso", "Fuerza con la que un planeta atrae un cuerpo: P = m · g."],
    ["Rozamiento", "Fuerza que se opone al deslizamiento entre superficies."],
    ["Polos de un imán", "Norte y sur: iguales se repelen, distintos se atraen."],
  ],
  familias: ["Fabricad un dinamómetro con una goma, un clip y un vaso de yogur, y graduadlo con monedas.", "Frotad un globo en el pelo y probad qué cosas atrae.", "Haced rodar una canica sobre alfombra, madera y baldosa y comparad cuánto llega."],
  profesores: {
    saberes: "La interacción: fuerzas y sus efectos, fuerzas de contacto y a distancia, representación vectorial, ley de Hooke, peso, rozamiento, fenómenos eléctricos y magnéticos (RD 217/2022, Física y Química, bloque «La interacción»).",
    ideas: ["Práctica de la ley de Hooke con muelles y pesas y gráfica F–Δl.", "Medir el rozamiento arrastrando un bloque con un dinamómetro sobre distintas superficies.", "Construir una brújula con una aguja imantada sobre un corcho en agua."],
  },
  fuentes: [RD, wiki("Fuerza", "Fuerza"), wiki("Ley de elasticidad de Hooke", "Ley_de_elasticidad_de_Hooke")],
  revisado: REV,
};
