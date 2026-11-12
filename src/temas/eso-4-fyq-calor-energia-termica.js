// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "El calor y la energía térmica",
  minutos: 40,
  objetivos: ["Diferenciar temperatura, energía térmica y calor", "Calcular el calor en cambios de temperatura y de estado", "Explicar la propagación del calor, la dilatación y las máquinas térmicas"],
  claves: ["temperatura", "calor", "calor específico", "calor latente", "equilibrio térmico", "conducción"],
  pregunta: {
    texto: "En verano, la arena de la playa quema y el agua del mar está fresquita, aunque las dos reciben el mismo sol. ¿Por qué?",
    respuesta: "Porque el agua tiene un <mark>calor específico</mark> muy alto: necesita unas <b>cinco veces más energía</b> que la arena para subir un grado. Con el mismo sol, la arena se calienta enseguida y el agua apenas cambia. Por eso el mar suaviza el clima de la costa.",
  },
  bloques: [
    {
      html: `<h3>Temperatura y calor no son lo mismo</h3><p>La <b>temperatura</b> mide la <mark>agitación media de las partículas</mark> de un cuerpo. Se mide en °C o en kelvin (K = °C + 273). El <b>calor</b> es la <mark>energía que pasa</mark> de un cuerpo caliente a otro frío por estar a distinta temperatura. Un cuerpo no «tiene» calor: tiene energía térmica, y la transfiere como calor. El paso se detiene en el <b>equilibrio térmico</b>, cuando las temperaturas se igualan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cuerpo caliente con partículas rápidas cede calor a uno frío hasta igualar temperaturas">
        <defs>${flecha("ca1", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="40" width="90" height="90" rx="10" fill="var(--red)" opacity=".2" stroke="var(--red)" stroke-width="2"/>
        <rect x="150" y="40" width="90" height="90" rx="10" fill="var(--water)" opacity=".2" stroke="var(--water)" stroke-width="2"/>
        ${[[40, 60], [80, 70], [55, 100], [90, 110], [40, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)"/><path d="M${x + 6} ${y - 4} l 10 -6" stroke="var(--red)" stroke-width="2"/>`).join("")}
        ${[[170, 60], [210, 70], [185, 100], [220, 112], [170, 118]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--water)"/>`).join("")}
        <path d="M114 85 H 144" stroke="var(--red)" stroke-width="4" marker-end="url(#ca1)"/><text x="130" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>calor</text>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="65" y="152" fill="var(--red)">80 °C</text><text x="195" y="152" fill="var(--water)">20 °C</text></g>
      </svg>`,
    },
    {
      html: `<h3>Calor y cambio de temperatura</h3><p>El calor necesario para cambiar la temperatura de un cuerpo depende de su masa, del salto de temperatura y del material:</p>
      <div class="formula"><span>Q = m · c · ΔT</span></div>
      <p><b>c</b> es el <b>calor específico</b>: la energía para subir 1 °C un kilo de sustancia. El agua tiene <mark>c = 4 180 J/(kg·°C)</mark>, de los más altos; el hierro, unos 450. Calentar 2 kg de agua de 20 a 70 °C cuesta 2 · 4 180 · 50 = <b>418 000 J</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Con la misma energía, el hierro sube mucha temperatura y el agua muy poca">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[60, "agua", 5, "var(--water)"], [190, "hierro", 50, "var(--muted)"]].map(([x, n, dt, c]) => `<rect x="${x - 30}" y="60" width="60" height="50" rx="8" fill="${c}" opacity=".6"/><text x="${x}" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>1 kg ${n}</text>
          <rect x="${x + 36}" y="40" width="10" height="80" rx="5" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><rect x="${x + 38}" y="${118 - dt * 1.4}" width="6" height="${dt * 1.4}" fill="var(--red)"/>
          <text x="${x}" y="140" text-anchor="middle" font-size="13" font-weight="700" fill="var(--red)" ${F}>+${dt} °C</text>`).join("")}
        <text x="130" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>misma energía: 22 500 J</text>
        <text x="130" y="166" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>el agua tiene un calor específico mucho mayor</text>
      </svg>`,
    },
    {
      html: `<h3>Cambios de estado</h3><p>Mientras una sustancia pura cambia de estado, <mark>la temperatura no cambia</mark>: toda la energía se usa en separar las partículas. El calor necesario se calcula con el <b>calor latente</b> L:</p>
      <div class="formula"><span>Q = m · L</span></div>
      <p>Fundir 1 kg de hielo necesita 334 000 J y vaporizar 1 kg de agua, ¡2 260 000 J! Por eso sudar refresca: al evaporarse, el sudor se lleva mucha energía de tu piel.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Curva de calentamiento del agua con dos tramos horizontales en la fusión y la ebullición">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 20 V 150 H 246" fill="none" stroke="var(--muted)" stroke-width="2"/>
        <path d="M30 140 L 50 110 H 90 L 130 60 H 200 L 240 26" fill="none" stroke="var(--red)" stroke-width="3.5"/>
        <path d="M30 110 H 50 M30 60 H 130" stroke="var(--line)" stroke-dasharray="3 3"/>
        <g ${F} font-size="11" font-weight="700"><text x="4" y="114" fill="var(--ink)">0 °C</text><text x="0" y="64" fill="var(--ink)">100 °C</text><text x="52" y="104" fill="var(--pen)">fusión</text><text x="140" y="54" fill="var(--pen)">ebullición</text><text x="190" y="168" fill="var(--muted)">calor (Q)</text></g>
      </svg>`,
    },
    {
      html: `<h3>Cómo se propaga el calor</h3><p>Hay tres mecanismos. <b>Conducción</b>: el calor pasa de partícula a partícula en los sólidos; los metales son <mark>buenos conductores</mark> y la madera, el corcho o el aire, <b>aislantes</b>. <b>Convección</b>: en líquidos y gases, el fluido caliente sube y el frío baja, formando corrientes. <b>Radiación</b>: el calor viaja como ondas electromagnéticas, incluso por el vacío, como el del Sol.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Olla al fuego: conducción por el mango, convección en el agua y radiación del fuego">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M60 70 V 130 Q 60 140 70 140 H 150 Q 160 140 160 130 V 70" fill="var(--water)" fill-opacity=".3" stroke="var(--ink)" stroke-width="3"/>
        <path d="M160 80 H 232" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>
        <path d="M90 128 C 70 110, 70 90, 90 84 M90 84 C 110 80, 110 110, 130 128 M130 128 C 150 110, 150 90, 130 84" fill="none" stroke="var(--red)" stroke-width="2"/>
        <path d="M80 160 Q 90 144 100 160 Q 110 144 120 160 Q 130 144 140 160" fill="var(--sun)"/>
        ${[30, 44].map((y) => `<path d="M30 ${y + 110} q 6 -6 12 0 t 12 0" fill="none" stroke="var(--sun)" stroke-width="2"/>`).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="170" y="70" fill="var(--ink)">conducción</text><text x="80" y="62" fill="var(--red)">convección</text><text x="8" y="132" fill="var(--sun)">radiación</text></g>
      </svg>`,
    },
    {
      html: `<h3>Dilatación y máquinas térmicas</h3><p>Al calentarse, casi todos los cuerpos se <b>dilatan</b>: sus partículas se agitan y se separan. Por eso las vías del tren y los puentes tienen <mark>juntas de dilatación</mark>. Una <b>máquina térmica</b> (motor de coche, central térmica) transforma calor en trabajo, pero nunca lo aprovecha todo: siempre pierde parte al foco frío. Su <b>rendimiento</b> suele estar entre el 25 % y el 45 %.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Máquina térmica: del foco caliente sale calor, una parte se convierte en trabajo y el resto va al foco frío">
        <defs>${flecha("ca2", "var(--red)")}${flecha("ca3", "var(--leaf)")}${flecha("ca4", "var(--water)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="70" y="14" width="120" height="30" rx="8" fill="var(--red)"/><text x="130" y="34" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>foco caliente</text>
        <circle cx="130" cy="90" r="24" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><text x="130" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>motor</text>
        <rect x="70" y="138" width="120" height="30" rx="8" fill="var(--water)"/><text x="130" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>foco frío</text>
        <path d="M130 46 V 62" stroke="var(--red)" stroke-width="5" marker-end="url(#ca2)"/><path d="M130 116 V 132" stroke="var(--water)" stroke-width="3.5" marker-end="url(#ca4)"/><path d="M156 90 H 220" stroke="var(--leaf)" stroke-width="3" marker-end="url(#ca3)"/>
        <text x="200" y="80" font-size="12" font-weight="700" fill="var(--leaf)" ${F}>trabajo</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Las tres formas de propagación del calor",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Conducción, convección y radiación con dónde ocurren y un ejemplo">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Conducción", "por contacto, en sólidos", "partícula a partícula", "la cuchara en la sopa", "var(--ink)"], ["Convección", "en líquidos y gases", "corrientes que suben y bajan", "el radiador calienta la sala", "var(--red)"], ["Radiación", "ondas, también en el vacío", "no necesita materia", "el calor del Sol", "var(--sun)"]]
        .map(([n, a, b, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="58" text-anchor="middle" font-size="21" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="100" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="122" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="172" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "St8tvRdvghk", titulo: "Calor y temperatura", canal: "Profesor Particular Puebla", vistas: 889283, megusta: 0, busqueda: "calor y temperatura calor específico" },
  quiz: [
    { q: "¿Qué mide la temperatura?", o: ["La cantidad de calor de un cuerpo", "La agitación media de las partículas", "La masa de un cuerpo"], a: 1, e: "Cuanto más rápido se mueven las partículas, mayor es la temperatura." },
    { q: "¿Cuántos kelvin son 27 °C?", o: ["246 K", "300 K", "27 K"], a: 1, e: "K = °C + 273 = 27 + 273 = 300 K." },
    { q: "¿Qué calor hace falta para calentar 1 kg de agua de 20 °C a 30 °C? (c = 4 180 J/kg·°C)", o: ["41 800 J", "4 180 J", "125 400 J"], a: 0, e: "Q = 1 · 4 180 · 10 = 41 800 J." },
    { q: "Mientras el agua hierve a 100 °C y le seguimos dando calor, su temperatura…", o: ["sube", "se mantiene en 100 °C", "baja"], a: 1, e: "Durante un cambio de estado la energía se usa para separar las partículas, no para subir la temperatura." },
    { q: "¿Cómo nos llega el calor del Sol?", o: ["Por conducción", "Por convección", "Por radiación"], a: 2, e: "Entre el Sol y la Tierra hay vacío; solo puede viajar como radiación." },
  ],
  examen: [
    { q: "¿Por qué las sartenes tienen el mango de plástico o madera?", o: ["Porque son conductores", "Porque son aislantes térmicos", "Porque pesan menos"], a: 1, e: "Conducen muy mal el calor y no te quemas al cogerlas." },
    { q: "¿Qué calor hace falta para fundir 2 kg de hielo a 0 °C? (L = 334 000 J/kg)", o: ["668 000 J", "167 000 J", "334 000 J"], a: 0, e: "Q = m · L = 2 · 334 000 = 668 000 J." },
    { q: "Las juntas de los puentes sirven para…", o: ["que pase el agua", "permitir la dilatación con el calor", "que sean más bonitos"], a: 1, e: "En verano el material se dilata; sin juntas se deformaría o se rompería." },
  ],
  feynman: ["La diferencia entre temperatura, energía térmica y calor", "Qué es el calor específico y por qué el mar modera el clima", "Por qué la temperatura no cambia al hervir el agua", "Las tres formas de propagación del calor", "Por qué ninguna máquina térmica aprovecha todo el calor"],
  mapa: mapa("CALOR", "var(--eso)", [
    ["Temperatura", "agitación de partículas · K = °C + 273", "var(--ink)"],
    ["Calor sensible", "Q = m·c·ΔT", "var(--red)"],
    ["Cambios de estado", "Q = m·L · T constante", "var(--pen)"],
    ["Propagación", "conducción · convección · radiación", "var(--sun)"],
  ], 270),
  tarjetas: [
    ["¿Qué es el calor?", "La energía que se transfiere de un cuerpo a otro debido a su diferencia de temperatura."],
    ["Fórmula del calor para cambiar la temperatura", "Q = m · c · ΔT."],
    ["Fórmula del calor en un cambio de estado", "Q = m · L (calor latente)."],
    ["Calor específico del agua", "4 180 J/(kg·°C)."],
    ["¿Qué es el equilibrio térmico?", "El estado final en que dos cuerpos en contacto alcanzan la misma temperatura."],
  ],
  familias: ["Tocad a la vez una mesa de metal y una de madera que estén en la misma habitación: ¿por qué parece más fría la metálica?", "Mirad el termostato de la calefacción o el aire y hablad de cómo se propaga el calor por la casa.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La energía: calor y temperatura, calor específico y latente, mecanismos de propagación, dilatación y máquinas térmicas (RD 217/2022, Física y Química 4º).",
    ideas: ["Curva de calentamiento del hielo con termómetro digital cada 30 s.", "Calorímetro casero con vasos de poliestireno para medir el calor específico de un metal.", "Convección con tinta en agua caliente y fría."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Calor, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Calor" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Calcular la temperatura de equilibrio al mezclar dos cuerpos", "Calcular el calor necesario para calentar y cambiar de estado una sustancia"],
  tras: {
    "Temperatura y calor no son lo mismo": [
      { html: `<h3>Escalas de temperatura y energía interna</h3><p>La temperatura mide la <b>agitación media</b> de las partículas de un cuerpo. Se usan tres escalas: la <b>Celsius</b> (0 °C funde el hielo y 100 °C hierve el agua), la <b>Fahrenheit</b>, habitual en Estados Unidos, y la <b>Kelvin</b>, la del SI, que empieza en el <mark>cero absoluto</mark> (0 K = −273 °C), la temperatura más baja posible, en la que las partículas casi no se mueven. La conversión es T (K) = t (°C) + 273 y t (°F) = 1,8 · t (°C) + 32. La suma de las energías de todas las partículas de un cuerpo es su <b>energía interna</b>: una bañera de agua tibia tiene más energía interna que una taza de café hirviendo, aunque esté a menor temperatura, porque tiene muchísimas más partículas.</p>` },
    ],
    "Calor y cambio de temperatura": [
      { html: `<h3>Equilibrio térmico y calorímetros</h3><p>Cuando dos cuerpos a distinta temperatura se ponen en contacto, el calor pasa del caliente al frío hasta que los dos alcanzan la misma temperatura: el <b>equilibrio térmico</b>. Si no se pierde calor hacia fuera, <mark>el calor que cede el cuerpo caliente es igual al que absorbe el frío</mark>: Q cedido + Q absorbido = 0, o bien m₁·c₁·(Tₑ − T₁) + m₂·c₂·(Tₑ − T₂) = 0. Para medirlo se usa un <b>calorímetro</b>, un recipiente aislado (como un termo) con termómetro y agitador. Así se puede calcular la temperatura final de una mezcla o el calor específico de un material desconocido.</p>`, video: { id: "uZdE2TOvQUc", titulo: "Equilibrio térmico", canal: "El Profe Rafa", vistas: 276976 } },
    ],
    "Cambios de estado": [
      { html: `<h3>Calor latente y curva de calentamiento</h3><p>Mientras una sustancia cambia de estado, su temperatura <b>no cambia</b>: toda la energía que recibe se usa para separar las partículas. Esa energía por kilogramo es el <b>calor latente</b> L, y el calor necesario es <mark>Q = m · L</mark>. Para el agua, el calor latente de fusión es 334.000 J/kg y el de vaporización, 2.260.000 J/kg: cuesta casi siete veces más hervir un kilo de agua que fundir un kilo de hielo. En la <b>curva de calentamiento</b> (temperatura frente a tiempo) se ven tramos inclinados, donde sube la temperatura (Q = m·c·ΔT), y <b>tramos horizontales</b>, los cambios de estado (Q = m·L).</p>`, video: { id: "44aKjY5Apnw", titulo: "Gráficas de calentamiento: cambios de estado", canal: "Susi Profe", vistas: 227313 } },
    ],
    "Dilatación y máquinas térmicas": [
      { html: `<h3>El rendimiento de las máquinas térmicas</h3><p>Una <b>máquina térmica</b> (motor de coche, central térmica, máquina de vapor) transforma calor en trabajo. Toma calor de un foco caliente, convierte una parte en trabajo y cede el resto a un foco frío, normalmente el ambiente. Es imposible convertir todo el calor en trabajo: siempre se pierde una parte. El <b>rendimiento</b> es <mark>η = trabajo útil / calor absorbido · 100</mark>. Un motor de gasolina ronda el 25-30 % y uno diésel, el 35-40 %: la mayor parte de la energía del combustible acaba calentando el motor y el aire. Por eso mejorar la eficiencia de las máquinas ahorra combustible y emisiones de CO₂.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Se mezclan 200 g de agua a 80 °C con 300 g de agua a 20 °C. ¿Cuál es la temperatura final?", pasos: ["El calor cedido por el agua caliente es igual al absorbido por la fría (el c es el mismo y se simplifica).", "0,2 · (80 − Tₑ) = 0,3 · (Tₑ − 20).", "16 − 0,2Tₑ = 0,3Tₑ − 6 → 22 = 0,5Tₑ → Tₑ = 44 °C."], resultado: "Tₑ = 44 °C." },
    { enunciado: "¿Cuánto calor hace falta para convertir 0,5 kg de hielo a 0 °C en agua a 20 °C? (Lf = 334.000 J/kg; c agua = 4.180 J/(kg·°C).)", pasos: ["Fundir el hielo: Q₁ = m·Lf = 0,5 · 334.000 = 167.000 J.", "Calentar el agua de 0 a 20 °C: Q₂ = 0,5 · 4.180 · 20 = 41.800 J.", "Total: 167.000 + 41.800 = 208.800 J."], resultado: "Q ≈ 2,09 · 10⁵ J." },
    { enunciado: "Un motor absorbe 50.000 J de calor y realiza 15.000 J de trabajo. Calcula su rendimiento y el calor cedido al ambiente.", pasos: ["η = 15.000 / 50.000 · 100 = 30 %.", "El resto se cede al foco frío: 50.000 − 15.000 = 35.000 J."], resultado: "Rendimiento 30 %; cede 35.000 J." },
  ],
  errores: [
    "Confundir calor (energía que se transfiere) con temperatura (agitación media de las partículas).",
    "Decir que un abrigo «da calor»: solo aísla y evita que perdamos el nuestro.",
    "Pensar que durante la ebullición sube la temperatura del agua.",
    "Usar el calor específico cuando hay un cambio de estado: entonces se usa el calor latente.",
    "Olvidar pasar los gramos a kilogramos cuando c está en J/(kg·°C).",
    "Creer que el frío «entra»: es el calor el que sale del cuerpo caliente.",
  ],
  ejercicios: [
    { q: "Pasa 25 °C a kelvin y a grados Fahrenheit.", sol: "25 + 273 = 298 K. 1,8 · 25 + 32 = 77 °F." },
    { q: "¿Cuánto calor hace falta para calentar 2 kg de agua de 15 a 65 °C?", sol: "Q = 2 · 4.180 · 50 = 418.000 J." },
    { q: "Un bloque de 500 g de aluminio (c = 900 J/(kg·°C)) absorbe 9.000 J. ¿Cuánto sube su temperatura?", sol: "ΔT = Q / (m·c) = 9.000 / (0,5 · 900) = 20 °C." },
    { q: "Se mezclan 1 kg de agua a 60 °C y 1 kg de agua a 10 °C. ¿Temperatura final?", sol: "Masas iguales del mismo líquido: la media, (60 + 10) / 2 = 35 °C." },
    { q: "¿Cuánto calor se necesita para evaporar 0,2 kg de agua a 100 °C? (Lv = 2.260.000 J/kg.)", sol: "Q = 0,2 · 2.260.000 = 452.000 J." },
    { q: "Explica por qué el sudor nos refresca.", sol: "Para evaporarse, el sudor absorbe calor latente de la piel; así la piel pierde energía y baja su temperatura." },
    { q: "Indica cómo se propaga el calor: en una cuchara metida en la sopa, en el aire de una habitación con radiador y desde el Sol a la Tierra.", sol: "Cuchara: conducción. Habitación: convección. Sol: radiación." },
    { q: "Un trozo de metal de 0,2 kg a 100 °C se mete en 0,5 kg de agua a 20 °C y la mezcla queda a 24 °C. Calcula el calor específico del metal.", sol: "Calor absorbido por el agua: 0,5 · 4.180 · 4 = 8.360 J. Lo cede el metal: 0,2 · c · 76 = 8.360 → c = 550 J/(kg·°C)." },
    { q: "¿Por qué las vías del tren y los puentes tienen juntas de dilatación?", sol: "Porque con el calor los materiales se dilatan; las juntas dejan espacio para que el metal o el hormigón se alarguen sin deformarse ni romperse." },
    { q: "Un motor tiene un rendimiento del 35 % y absorbe 80.000 J. ¿Qué trabajo útil realiza?", sol: "W = 0,35 · 80.000 = 28.000 J." },
  ],
  quiz: [
    { q: "El cero absoluto es…", o: ["0 °C", "−273 °C", "−100 °C"], a: 1, e: "0 K, la temperatura más baja posible." },
    { q: "Durante un cambio de estado, la temperatura…", o: ["sube", "baja", "no cambia"], a: 2, e: "La energía se usa en separar partículas." },
    { q: "El calor necesario para fundir una masa m es…", o: ["m · c · ΔT", "m · L", "m · g · h"], a: 1, e: "L es el calor latente de fusión." },
    { q: "Al mezclar agua caliente y fría sin pérdidas…", o: ["el calor cedido es igual al absorbido", "se pierde todo el calor", "la temperatura final es siempre 50 °C"], a: 0, e: "Es el principio del calorímetro." },
    { q: "El rendimiento de un motor de gasolina es aproximadamente…", o: ["100 %", "25-30 %", "90 %"], a: 1, e: "La mayor parte se pierde como calor." },
  ],
  tarjetas: [
    ["Equilibrio térmico", "Estado final en que dos cuerpos en contacto tienen la misma temperatura."],
    ["Calor latente", "Energía por kilogramo para cambiar de estado: Q = m · L."],
    ["Rendimiento de una máquina térmica", "Trabajo útil / calor absorbido · 100; nunca llega al 100 %."],
  ],
});
