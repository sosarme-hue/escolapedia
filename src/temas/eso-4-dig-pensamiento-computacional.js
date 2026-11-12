// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Programación y pensamiento computacional",
  minutos: 45,
  objetivos: ["Aplicar los cuatro pilares del pensamiento computacional a un problema", "Escribir algoritmos con secuencias, condiciones y bucles", "Crear y depurar programas sencillos por bloques o en texto"],
  claves: ["descomposición", "patrón", "abstracción", "algoritmo", "bucle", "depuración"],
  pregunta: {
    texto: "¿Cómo le explicarías a un robot que no sabe nada cómo preparar un bocadillo, si solo entiende órdenes muy simples?",
    respuesta: "Tendrías que <b>descomponer</b> la tarea en pasos diminutos y ordenados: coger el pan, abrirlo, coger el cuchillo… y prever casos: «<mark>si</mark> no hay queso, usa jamón», «<mark>repite</mark> hasta cubrir el pan». Eso es un <b>algoritmo</b>, y pensar así es pensamiento computacional. Sirve para programar y para resolver cualquier problema.",
  },
  bloques: [
    {
      html: `<h3>Los cuatro pilares</h3><p>El <b>pensamiento computacional</b> es una forma de resolver problemas que se puede aplicar con o sin ordenador. Tiene cuatro pilares: <b>descomposición</b> (dividir un problema grande en partes pequeñas), <b>reconocimiento de patrones</b> (ver qué se repite o se parece a algo ya resuelto), <b>abstracción</b> (quedarse con lo importante e ignorar los detalles) y <mark>algoritmo</mark> (escribir los pasos ordenados para resolverlo).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro pilares del pensamiento computacional: descomposición, patrones, abstracción y algoritmo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="20" width="220" height="22" rx="6" fill="var(--ink)"/><text x="130" y="35" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>problema</text>
        ${[["descom-", "posición", "var(--pen)"], ["patrones", "", "var(--sun)"], ["abstrac-", "ción", "var(--leaf)"], ["algoritmo", "", "var(--red)"]]
          .map(([a, b, c], i) => `<rect x="${26 + i * 54}" y="48" width="44" height="88" rx="4" fill="${c}"/><text x="${48 + i * 54}" y="${b ? 88 : 96}" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" ${F}>${a}</text>${b ? `<text x="${48 + i * 54}" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" ${F}>${b}</text>` : ""}`).join("")}
        <rect x="16" y="140" width="228" height="22" rx="6" fill="var(--muted)"/><text x="130" y="155" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>solución</text>
      </svg>`,
    },
    {
      html: `<h3>Algoritmos y diagramas de flujo</h3><p>Un <b>algoritmo</b> es una secuencia finita y ordenada de instrucciones que resuelve un problema. Se puede escribir en lenguaje natural, en <b>pseudocódigo</b> o con un <mark>diagrama de flujo</mark>, donde los óvalos marcan el inicio y el fin, los rectángulos las acciones, los rombos las decisiones (sí/no) y los paralelogramos la entrada y salida de datos. Un buen algoritmo es <b>preciso</b> (sin ambigüedades), <b>finito</b> (termina) y da siempre el mismo resultado con los mismos datos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolos del diagrama de flujo: óvalo de inicio, rectángulo de acción, rombo de decisión y paralelogramo de datos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="24" y="24" width="80" height="30" rx="15" fill="var(--leaf)"/><text x="64" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>inicio / fin</text>
        <rect x="150" y="24" width="86" height="30" fill="var(--pen)"/><text x="193" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>acción</text>
        <path d="M64 86 L 104 108 L 64 130 L 24 108 Z" fill="var(--sun)"/><text x="64" y="112" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>¿decisión?</text>
        <path d="M162 92 H 240 L 226 124 H 148 Z" fill="var(--inf)"/><text x="194" y="112" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>datos</text>
        <g ${F} font-size="9" fill="var(--muted)" text-anchor="middle"><text x="64" y="70">empieza y acaba</text><text x="193" y="70">hace algo</text><text x="64" y="150">sí / no</text><text x="194" y="142">entrada / salida</text></g>
      </svg>`,
    },
    {
      html: `<h3>Las estructuras básicas</h3><p>Cualquier programa se construye combinando tres estructuras. La <b>secuencia</b>: instrucciones una detrás de otra. La <b>selección</b> o <b>condicional</b>: <mark>si</mark> se cumple algo, haz esto; <mark>si no</mark>, lo otro. Y la <b>repetición</b> o <b>bucle</b>: repetir unas instrucciones un número de veces o mientras se cumpla una condición. Además se usan <b>variables</b>, cajas con nombre que guardan datos (puntos, vidas, nombre del jugador), y <b>operadores</b> para comparar y calcular.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bloques de programación: secuencia, si-si no y repetir">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[0, 1, 2].map((i) => `<rect x="16" y="${30 + i * 26}" width="66" height="22" rx="4" fill="var(--pen)"/><text x="49" y="${45 + i * 26}" text-anchor="middle" font-size="9" fill="#fff" ${F}>paso ${i + 1}</text>`).join("")}
        <path d="M96 30 h 74 v 22 h -60 v 18 h 60 v 14 h -60 v 18 h 60 v 14 h -74 z" fill="var(--sun)"/>
        <g ${F} font-size="9" font-weight="700" fill="var(--ink)"><text x="102" y="45">si … entonces</text><text x="102" y="80">si no</text></g>
        <path d="M184 30 h 62 v 22 h -48 v 34 h 48 v 14 h -62 z" fill="var(--leaf)"/>
        <text x="190" y="45" font-size="9" font-weight="700" fill="#fff" ${F}>repetir 10</text>
        <g ${F} font-size="10" font-weight="700" text-anchor="middle"><text x="49" y="150" fill="var(--pen)">secuencia</text><text x="133" y="150" fill="var(--sun)">selección</text><text x="215" y="150" fill="var(--leaf)">bucle</text></g>
      </svg>`,
    },
    {
      html: `<h3>De los bloques al código</h3><p>Para empezar se usan lenguajes <b>por bloques</b>, como Scratch o MakeCode, donde las instrucciones encajan como piezas de puzle y no hay errores de escritura. Después se pasa a lenguajes <b>de texto</b>, como Python o JavaScript, más potentes. La lógica es la misma: el bloque «repetir 10 veces» se escribe en Python <mark>for i in range(10):</mark>. Los programas pueden responder a <b>eventos</b> (al pulsar una tecla, al tocar un objeto), lo que permite crear juegos, animaciones y aplicaciones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El mismo programa en bloques y en Python">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 40 h 104 v 20 h -90 v 26 h 90 v 14 h -104 z" fill="var(--leaf)"/><rect x="28" y="62" width="84" height="22" rx="3" fill="var(--pen)"/>
        <g ${F} font-size="9" font-weight="700" fill="#fff"><text x="20" y="54">repetir 10 veces</text><text x="34" y="77">decir «hola»</text></g>
        <path d="M122 70 h 14" stroke="var(--ink)" stroke-width="3"/><path d="M132 64 l 6 6 l -6 6" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <rect x="142" y="40" width="106" height="60" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <g font-family="ui-monospace, Menlo, monospace" font-size="9"><text x="146" y="62" font-size="8.5" fill="var(--pen)">for i in range(10):</text><text x="160" y="80" fill="var(--ink)">print("hola")</text></g>
        <g ${F} font-size="10" font-weight="700" text-anchor="middle"><text x="66" y="124" fill="var(--leaf)">bloques</text><text x="195" y="124" fill="var(--pen)">Python</text></g>
        <text x="130" y="156" text-anchor="middle" font-size="9" fill="var(--muted)" ${F}>misma lógica, distinta escritura</text>
      </svg>`,
    },
    {
      html: `<h3>Probar y depurar</h3><p>Casi ningún programa funciona a la primera. Los fallos se llaman <b>bugs</b>, y buscarlos y corregirlos es <b>depurar</b>. Hay errores de <b>sintaxis</b> (algo mal escrito, que impide ejecutar) y errores de <b>lógica</b> (el programa funciona pero hace otra cosa). Para depurar: lee el mensaje de error, prueba con <mark>datos sencillos</mark> cuyo resultado conoces, muestra el valor de las variables paso a paso y cambia una sola cosa cada vez. Explicar el código en voz alta (a un compañero o a un patito de goma) ayuda mucho.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de depuración: probar, encontrar el error, corregir y volver a probar">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="90" r="56" fill="none" stroke="var(--line)" stroke-width="10"/>
        ${[["probar", 130, 30, "var(--pen)"], ["¿falla?", 200, 94, "var(--red)"], ["corregir", 130, 160, "var(--leaf)"], ["entender", 58, 94, "var(--sun)"]].map(([t, x, y, c]) => `<rect x="${x - 30}" y="${y - 12}" width="60" height="22" rx="11" fill="${c}"/><text x="${x}" y="${y + 3}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
        <ellipse cx="130" cy="94" rx="14" ry="10" fill="var(--ink)"/><path d="M118 88 l -8 -6 M118 100 l -8 6 M142 88 l 8 -6 M142 100 l 8 6 M130 84 v -8" stroke="var(--ink)" stroke-width="2"/>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Pensamiento computacional en un problema real: organizar una excursión",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Los cuatro pilares aplicados a organizar una excursión">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Descomponer", "transporte, comida,", "permisos, horario", "var(--pen)"], ["Patrones", "la excursión del año", "pasado sirve de base", "var(--sun)"], ["Abstraer", "importa nº de alumnos,", "no su color favorito", "var(--leaf)"], ["Algoritmo", "lista de pasos", "con fechas y avisos", "var(--red)"]]
        .map(([n, a, b, c], i) => `<rect x="${16 + i * 154}" y="30" width="146" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="74" text-anchor="middle" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="120" text-anchor="middle" font-size="12" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="140" text-anchor="middle" font-size="12" fill="var(--ink)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "ti315UlVtS4", titulo: "¿Qué es el pensamiento computacional?", canal: "Educar Portal", vistas: 269532, megusta: 0, busqueda: "qué es el pensamiento computacional" },
  quiz: [
    { q: "Dividir un problema grande en partes pequeñas es…", o: ["abstracción", "descomposición", "depuración"], a: 1, e: "Cada parte es más fácil de resolver." },
    { q: "En un diagrama de flujo, una decisión se dibuja con…", o: ["un óvalo", "un rombo", "un rectángulo"], a: 1, e: "El rombo tiene dos salidas: sí y no." },
    { q: "¿Qué estructura repite instrucciones?", o: ["El bucle", "La secuencia", "La variable"], a: 0, e: "Por ejemplo, «repetir 10 veces» o «mientras…»." },
    { q: "¿Qué es una variable?", o: ["Un error del programa", "Un espacio con nombre que guarda un dato", "Un tipo de bucle"], a: 1, e: "Su valor puede cambiar durante el programa." },
    { q: "Un programa se ejecuta pero suma en vez de restar. Es un error de…", o: ["sintaxis", "lógica", "hardware"], a: 1, e: "Está bien escrito, pero hace otra cosa." }
  ],
  examen: [
    { q: "Quedarse con los datos importantes e ignorar los detalles es…", o: ["abstracción", "reconocer patrones", "descomposición"], a: 0, e: "Así el problema se simplifica." },
    { q: "¿Qué hace en Python «for i in range(3): print(i)»?", o: ["Muestra 1, 2, 3", "Muestra 0, 1, 2", "Muestra 3"], a: 1, e: "range(3) da 0, 1 y 2." },
    { q: "¿Cuál es una buena estrategia para depurar?", o: ["Cambiar muchas cosas a la vez", "Probar con datos sencillos y cambiar una cosa cada vez", "Borrar el programa"], a: 1, e: "Así sabes qué cambio arregló (o estropeó) algo." },
  ],
  feynman: ["Los cuatro pilares del pensamiento computacional con un ejemplo", "Qué es un algoritmo y cómo se dibuja un diagrama de flujo", "Secuencia, selección y bucle", "Cómo pasar de un programa por bloques a Python", "Errores de sintaxis y de lógica, y cómo depurarlos"],
  mapa: mapa("PENSAR Y PROGRAMAR", "var(--eso)", [
    ["Pilares", "descomponer · patrones · abstraer", "var(--pen)"],
    ["Algoritmo", "pseudocódigo · diagrama", "var(--sun)"],
    ["Estructuras", "secuencia · si · bucle", "var(--leaf)"],
    ["Depurar", "sintaxis · lógica", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Los cuatro pilares", "Descomposición, patrones, abstracción y algoritmo."],
    ["¿Qué es un algoritmo?", "Una secuencia finita y ordenada de instrucciones que resuelve un problema."],
    ["Las tres estructuras básicas", "Secuencia, selección (condicional) y repetición (bucle)."],
    ["¿Qué es depurar?", "Buscar y corregir los errores (bugs) de un programa."],
    ["Error de sintaxis", "Algo mal escrito que impide que el programa se ejecute."],
  ],
  familias: ["Escribid juntos el algoritmo de una tarea de casa (poner la lavadora) y comprobad si alguien puede seguirlo al pie de la letra.", "Probad un reto de programación por bloques en code.org o Scratch.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Pensamiento computacional y programación: algoritmos, diagramas de flujo, estructuras de control, variables, lenguajes por bloques y textuales, y depuración (RD 217/2022, Digitalización 4º).",
    ideas: ["Actividad desenchufada: un alumno «programa» a otro para que dibuje una figura con órdenes simples.", "Crear un juego en Scratch y traducir una parte a Python.", "Concurso de depuración: programas con un error escondido para encontrarlo en parejas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Pensamiento computacional, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pensamiento_computacional" },
  ],
  revisado: "2026-11-12",
};
