// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

// Ejes de una gráfica pequeña.
const ejes = (x, y, w, h, ex, ey) => `<path d="M${x} ${y - h} V ${y} H ${x + w}" fill="none" stroke="var(--muted)" stroke-width="2"/>
  <text x="${x + w}" y="${y + 16}" text-anchor="end" font-size="12" fill="var(--muted)" ${F}>${ex}</text><text x="${x - 6}" y="${y - h + 4}" text-anchor="end" font-size="12" fill="var(--muted)" ${F}>${ey}</text>`;

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "El movimiento",
  minutos: 45,
  objetivos: ["Describir un movimiento con posición, desplazamiento, velocidad y aceleración", "Resolver problemas de MRU, MRUA y caída libre", "Interpretar gráficas posición-tiempo y velocidad-tiempo"],
  claves: ["sistema de referencia", "velocidad", "aceleración", "MRU", "MRUA", "caída libre"],
  pregunta: {
    texto: "Vas en el tren leyendo y tu amigo, en el andén, dice que te mueves a 100 km/h. Tú dices que estás quieto. ¿Quién tiene razón?",
    respuesta: "¡Los dos! El movimiento es <mark>relativo</mark>: depende del <b>sistema de referencia</b>. Respecto al tren estás en reposo; respecto al andén vas a 100 km/h. Por eso, para describir un movimiento, lo primero es decir desde dónde lo miras.",
  },
  bloques: [
    {
      html: `<h3>Posición, trayectoria y desplazamiento</h3><p>La <b>posición</b> es dónde está el cuerpo respecto a un <b>sistema de referencia</b>. La <b>trayectoria</b> es el camino que recorre (recta o curva). La <b>distancia recorrida</b> se mide sobre la trayectoria; el <mark>desplazamiento</mark> es la línea recta entre el punto inicial y el final. Si das una vuelta completa a la pista, recorres 400 m, pero tu desplazamiento es cero.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Trayectoria curva de A a B y desplazamiento en línea recta">
        <defs>${flecha("mv1", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M40 130 C 60 30, 140 20, 150 90 S 210 150, 220 60" fill="none" stroke="var(--pen)" stroke-width="3" stroke-dasharray="7 5"/>
        <path d="M40 130 L 214 66" stroke="var(--red)" stroke-width="3.5" marker-end="url(#mv1)"/>
        <circle cx="40" cy="130" r="6" fill="var(--ink)"/><circle cx="220" cy="60" r="6" fill="var(--ink)"/>
        <g ${F} font-size="13" font-weight="700"><text x="26" y="152" fill="var(--ink)">A</text><text x="228" y="56" fill="var(--ink)">B</text><text x="70" y="40" fill="var(--pen)">trayectoria</text><text x="120" y="122" fill="var(--red)">desplazamiento</text></g>
      </svg>`,
    },
    {
      html: `<h3>Velocidad y aceleración</h3><p>La <b>velocidad</b> indica lo rápido que cambia la posición: <mark>v = Δx / Δt</mark>, en m/s. La <b>velocidad media</b> usa todo el trayecto; la <b>instantánea</b> es la del velocímetro en cada momento. La <b>aceleración</b> indica lo rápido que cambia la velocidad: <mark>a = Δv / Δt</mark>, en m/s². Si es negativa respecto al sentido del movimiento, el cuerpo frena.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Coche que pasa de 0 a 20 metros por segundo en 5 segundos: aceleración de 4 metros por segundo al cuadrado">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 120 H 246" stroke="var(--muted)" stroke-width="2"/>
        ${[[30, "0 m/s", "t = 0 s"], [170, "20 m/s", "t = 5 s"]].map(([x, v, t]) => `<rect x="${x}" y="92" width="56" height="20" rx="6" fill="var(--red)"/><rect x="${x + 10}" y="80" width="30" height="14" rx="4" fill="var(--red)"/><circle cx="${x + 12}" cy="114" r="7" fill="var(--ink)"/><circle cx="${x + 44}" cy="114" r="7" fill="var(--ink)"/>
          <text x="${x + 28}" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="var(--pen)" ${F}>${v}</text><text x="${x + 28}" y="146" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${t}</text>`).join("")}
        <text x="130" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="var(--leaf)" ${F}>a = (20 − 0) / 5 = 4 m/s²</text>
      </svg>`,
    },
    {
      html: `<h3>Movimiento rectilíneo uniforme (MRU)</h3><p>Trayectoria recta y <mark>velocidad constante</mark> (a = 0). Recorre distancias iguales en tiempos iguales. Su ecuación:</p>
      <div class="formula"><span>x = x₀ + v · t</span></div>
      <p>En la gráfica posición-tiempo es una <b>recta inclinada</b> (la pendiente es la velocidad) y en la velocidad-tiempo, una <b>recta horizontal</b>. Ejemplo: un ciclista a 5 m/s recorre 300 m en un minuto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráficas del MRU: posición recta inclinada y velocidad horizontal">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${ejes(34, 140, 90, 110, "t", "x")}<path d="M34 130 L 118 44" stroke="var(--pen)" stroke-width="3.5"/>
        ${ejes(160, 140, 90, 110, "t", "v")}<path d="M160 80 H 246" stroke="var(--leaf)" stroke-width="3.5"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="80" y="170" fill="var(--pen)">x-t: recta</text><text x="205" y="170" fill="var(--leaf)">v-t: horizontal</text></g>
      </svg>`,
    },
    {
      html: `<h3>Movimiento rectilíneo uniformemente acelerado (MRUA)</h3><p>Trayectoria recta y <mark>aceleración constante</mark>: la velocidad aumenta (o disminuye) lo mismo cada segundo.</p>
      <div class="formula"><span>v = v₀ + a · t</span></div>
      <div class="formula"><span>x = x₀ + v₀ · t + ½ · a · t²</span></div>
      <p>En la gráfica posición-tiempo es una <b>parábola</b> y en la velocidad-tiempo, una <b>recta inclinada</b> (su pendiente es la aceleración). El área bajo la gráfica v-t es la distancia recorrida.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráficas del MRUA: posición en parábola y velocidad recta inclinada">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${ejes(34, 140, 90, 110, "t", "x")}<path d="M34 138 Q 90 136 118 40" fill="none" stroke="var(--pen)" stroke-width="3.5"/>
        ${ejes(160, 140, 90, 110, "t", "v")}<path d="M160 140 L 246 52 V 140 Z" fill="var(--leaf)" opacity=".2"/><path d="M160 140 L 246 52" stroke="var(--leaf)" stroke-width="3.5"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="80" y="170" fill="var(--pen)">x-t: parábola</text><text x="205" y="170" fill="var(--leaf)">área = distancia</text></g>
      </svg>`,
    },
    {
      html: `<h3>Caída libre</h3><p>Si dejamos caer un objeto y despreciamos el rozamiento con el aire, cae con un MRUA de aceleración <mark>g = 9,8 m/s²</mark>, sea cual sea su masa. Galileo lo comprobó: una bola pesada y una ligera llegan a la vez. Una piedra que cae desde el reposo lleva, tras 2 s, v = 9,8 · 2 ≈ <b>19,6 m/s</b> y ha caído ½ · 9,8 · 2² ≈ <b>19,6 m</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bola en caída libre fotografiada cada segundo: las distancias recorridas aumentan">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M100 14 V 172" stroke="var(--line)" stroke-width="2"/>
        ${[[0, "0 s"], [1, "1 s"], [2, "2 s"], [3, "3 s"]].map(([t, l]) => { const y = 20 + 16 * t * t; return `<circle cx="100" cy="${y}" r="8" fill="var(--red)" opacity="${0.4 + t * 0.2}"/><text x="118" y="${y + 4}" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${l} · ${(4.9 * t * t).toFixed(1).replace(".", ",")} m</text>`; }).join("")}
        <text x="20" y="100" font-size="13" font-weight="700" fill="var(--leaf)" ${F}>g</text><path d="M26 60 V 140" stroke="var(--leaf)" stroke-width="3"/><path d="M20 132 L 26 144 L 32 132" fill="none" stroke="var(--leaf)" stroke-width="3"/>
      </svg>`,
    },
  ],
  figura: {
    titulo: "MRU frente a MRUA",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación de MRU y MRUA: aceleración, ecuaciones y forma de las gráficas">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["MRU", "a = 0 · v constante", "x = x₀ + v·t", "x-t: recta · v-t: horizontal", "var(--pen)"], ["MRUA", "a constante", "v = v₀ + a·t  ·  x = x₀ + v₀·t + ½·a·t²", "x-t: parábola · v-t: recta", "var(--leaf)"]]
        .map(([n, a, e, g, c], i) => `<rect x="${20 + i * 310}" y="20" width="290" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${165 + i * 310}" y="62" text-anchor="middle" font-size="28" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${165 + i * 310}" y="100" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${165 + i * 310}" y="138" text-anchor="middle" font-size="${i ? 13 : 17}" fill="var(--ink)" ${F}>${e}</text>
          <text x="${165 + i * 310}" y="182" text-anchor="middle" font-size="14" fill="var(--muted)" ${F}>${g}</text>`).join("")}
    </svg>`,
  },
  video: { id: "XE9UXxtep6M", titulo: "MRU: explicación, fórmulas y ejercicios", canal: "Susi Profe", vistas: 2375463, megusta: 0, busqueda: "MRU MRUA movimiento física" },
  quiz: [
    { q: "Das una vuelta completa a una pista de 400 m. ¿Cuál es tu desplazamiento?", o: ["400 m", "0 m", "200 m"], a: 1, e: "Acabas en el mismo punto donde empezaste: el desplazamiento es cero, aunque la distancia recorrida sea 400 m." },
    { q: "Un coche va a 72 km/h constantes. ¿Qué distancia recorre en 10 s?", o: ["720 m", "200 m", "72 m"], a: 1, e: "72 km/h = 20 m/s; x = 20 · 10 = 200 m." },
    { q: "Una moto pasa de 10 m/s a 30 m/s en 4 s. ¿Cuál es su aceleración?", o: ["5 m/s²", "10 m/s²", "7,5 m/s²"], a: 0, e: "a = (30 − 10) / 4 = 5 m/s²." },
    { q: "En una gráfica velocidad-tiempo, un MRUA aparece como…", o: ["una recta horizontal", "una recta inclinada", "una parábola"], a: 1, e: "La velocidad cambia lo mismo cada segundo: recta con pendiente igual a la aceleración." },
    { q: "Sin aire, una bola de hierro y una de madera soltadas a la vez…", o: ["llega antes la de hierro", "llegan a la vez", "llega antes la de madera"], a: 1, e: "En caída libre todos los cuerpos caen con la misma aceleración g." },
  ],
  examen: [
    { q: "Un coche a 20 m/s frena con a = −4 m/s². ¿Cuánto tarda en pararse?", o: ["5 s", "80 s", "4 s"], a: 0, e: "0 = 20 − 4 · t → t = 5 s." },
    { q: "¿Qué distancia recorre ese coche mientras frena?", o: ["100 m", "50 m", "20 m"], a: 1, e: "x = 20 · 5 + ½ · (−4) · 5² = 100 − 50 = 50 m." },
    { q: "La pendiente de una gráfica posición-tiempo representa…", o: ["la aceleración", "la velocidad", "la distancia"], a: 1, e: "Δx / Δt es la velocidad." },
  ],
  feynman: ["Por qué el movimiento es relativo", "La diferencia entre distancia recorrida y desplazamiento", "Qué significa una aceleración de 3 m/s²", "Cómo son las gráficas del MRU y del MRUA", "Por qué todos los cuerpos caen igual sin aire"],
  mapa: mapa("EL MOVIMIENTO", "var(--eso)", [
    ["Conceptos", "referencia · trayectoria · desplazamiento", "var(--ink)"],
    ["Magnitudes", "v = Δx/Δt · a = Δv/Δt", "var(--red)"],
    ["MRU", "x = x₀ + v·t", "var(--pen)"],
    ["MRUA y caída", "v = v₀ + a·t · g = 9,8", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Ecuación de posición del MRU", "x = x₀ + v · t."],
    ["Ecuaciones del MRUA", "v = v₀ + a · t ; x = x₀ + v₀ · t + ½ · a · t²."],
    ["¿Cómo se pasa de km/h a m/s?", "Dividiendo entre 3,6."],
    ["Valor de g en la Tierra", "9,8 m/s²."],
    ["¿Qué representa el área bajo la gráfica v-t?", "La distancia recorrida."],
  ],
  familias: ["En un viaje en coche, calculad la velocidad media con la distancia y el tiempo del navegador.", "Dejad caer a la vez una hoja de papel plana y otra arrugada en bola: comentad el papel del aire.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La interacción: descripción del movimiento, MRU, MRUA y caída libre, con interpretación de gráficas (RD 217/2022, Física y Química 4º).",
    ideas: ["Grabar con el móvil una bola rodando y analizar el vídeo con Tracker.", "Medir la velocidad media de los alumnos en 20 m con cronómetros por parejas.", "Construir gráficas x-t y v-t con sensores de movimiento o apps como phyphox."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Movimiento rectilíneo uniformemente acelerado, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Movimiento_rectil%C3%ADneo_uniformemente_acelerado" },
  ],
  revisado: "2026-11-12",
};
