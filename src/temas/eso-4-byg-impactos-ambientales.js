// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "Impactos ambientales y sostenibilidad",
  minutos: 40,
  objetivos: ["Identificar los principales impactos humanos sobre el medio ambiente", "Explicar el cambio climático y la pérdida de biodiversidad", "Proponer medidas de desarrollo sostenible a escala personal y global"],
  claves: ["impacto ambiental", "efecto invernadero", "cambio climático", "biodiversidad", "desarrollo sostenible", "huella ecológica"],
  pregunta: {
    texto: "Si toda la humanidad viviera como la media de los españoles, necesitaríamos unas 2,5 Tierras. ¿Qué significa eso?",
    respuesta: "Que <mark>consumimos recursos más deprisa</mark> de lo que el planeta los regenera y producimos más residuos de los que puede absorber. Es la <b>huella ecológica</b>. El reto del <b>desarrollo sostenible</b> es cubrir nuestras necesidades sin dejar sin recursos a las generaciones futuras.",
  },
  bloques: [
    {
      html: `<h3>Qué es un impacto ambiental</h3><p>Un <b>impacto ambiental</b> es cualquier alteración del medio causada por la actividad humana. Puede afectar a la <b>atmósfera</b> (contaminación del aire, lluvia ácida), al <b>agua</b> (vertidos, sobreexplotación de acuíferos, plásticos en el mar), al <b>suelo</b> (erosión, desertificación) y a los <b>seres vivos</b>. Muchos impactos crecen con la población y con el <mark>consumo de recursos y energía</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Impactos en el aire, el agua y el suelo: chimenea, vertido y suelo erosionado">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="30" y="70" width="22" height="80" fill="var(--muted)"/><path d="M40 66 Q 30 40 50 30 Q 70 20 64 4" fill="none" stroke="var(--muted)" stroke-width="8" opacity=".5"/>
        <path d="M100 150 Q 130 140 160 150 V 166 H 100 Z" fill="var(--water)" opacity=".5"/><path d="M128 110 V 146" stroke="var(--ink)" stroke-width="5"/><path d="M128 146 Q 132 152 128 158" stroke="var(--sun)" stroke-width="4" fill="none"/>
        <path d="M180 150 L 196 128 L 212 146 L 226 120 L 246 150 Z" fill="var(--sun)" opacity=".6"/><path d="M196 140 l 6 6 M218 136 l 6 6" stroke="var(--ink)" stroke-width="1.5"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="42" y="168" fill="var(--ink)">aire</text><text x="130" y="100" fill="var(--ink)">agua</text><text x="214" y="168" fill="var(--ink)">suelo</text></g>
      </svg>`,
    },
    {
      html: `<h3>El cambio climático</h3><p>Algunos gases de la atmósfera, como el <b>CO₂</b> y el <b>metano</b>, retienen parte del calor que la Tierra emite: es el <mark>efecto invernadero</mark>, natural y necesario para la vida. El problema es que, desde la Revolución Industrial, quemar combustibles fósiles y talar bosques ha aumentado mucho esos gases. El resultado es el <b>calentamiento global</b>: la temperatura media ya ha subido unos 1,2 °C, con más olas de calor, sequías, deshielo y subida del nivel del mar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Efecto invernadero: la luz del Sol entra, la Tierra emite calor y los gases devuelven una parte">
        <defs>${flecha("ia1", "var(--sun)")}${flecha("ia2", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 150 Q 130 120 250 150 V 170 H 10 Z" fill="var(--leaf)" opacity=".5"/>
        <path d="M10 50 Q 130 30 250 50" fill="none" stroke="var(--muted)" stroke-width="10" opacity=".4"/>
        <circle cx="34" cy="22" r="14" fill="var(--sun)"/>
        <path d="M46 30 L 110 134" stroke="var(--sun)" stroke-width="3" marker-end="url(#ia1)"/>
        <path d="M130 134 L 160 54" stroke="var(--red)" stroke-width="3" stroke-dasharray="5 4" marker-end="url(#ia2)"/>
        <path d="M166 50 L 196 130" stroke="var(--red)" stroke-width="3" stroke-dasharray="5 4" marker-end="url(#ia2)"/>
        <g ${F} font-size="11" font-weight="700"><text x="170" y="30" fill="var(--muted)">CO₂, CH₄</text><text x="246" y="96" text-anchor="end" fill="var(--red)">calor devuelto</text></g>
      </svg>`,
    },
    {
      html: `<h3>La pérdida de biodiversidad</h3><p>La <b>biodiversidad</b> es la variedad de vida: genes, especies y ecosistemas. Hoy las especies se extinguen mucho más rápido de lo normal. Las causas principales: la <mark>destrucción de hábitats</mark> (deforestación, urbanización), la <b>sobreexplotación</b> (caza y pesca excesivas), la <b>contaminación</b>, las <mark>especies invasoras</mark> (como el mejillón cebra o el visón americano en España) y el cambio climático. Perder especies debilita los ecosistemas que nos dan alimento, agua limpia y medicinas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las cinco causas principales de pérdida de biodiversidad">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["destrucción de hábitats", "var(--red)", 220], ["sobreexplotación", "var(--sun)", 190], ["cambio climático", "var(--pen)", 170], ["contaminación", "var(--muted)", 150], ["especies invasoras", "var(--leaf)", 140]].map(([t, c, w], i) => `<rect x="14" y="${22 + i * 30}" width="${w}" height="22" rx="5" fill="${c}" opacity=".85"/><text x="20" y="${37 + i * 30}" font-size="11" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Residuos, agua y energía</h3><p>Generamos montañas de <b>residuos</b>: cada español produce unos 470 kg al año. La regla de las <mark>tres erres</mark> ordena qué hacer: <b>reducir</b> (lo mejor es no generar), <b>reutilizar</b> y <b>reciclar</b>. El <b>agua dulce</b> es escasa: se ahorra con riego eficiente y depurando las aguas residuales. En energía, la clave es pasar de los combustibles fósiles a las <mark>renovables</mark> (solar, eólica, hidráulica) y gastar menos con eficiencia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide invertida de residuos: reducir arriba, reutilizar, reciclar y vertedero abajo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["reducir", 220, "var(--leaf)"], ["reutilizar", 170, "var(--pen)"], ["reciclar", 120, "var(--sun)"], ["vertedero", 70, "var(--red)"]].map(([t, w, c], i) => `<rect x="${130 - w / 2}" y="${20 + i * 36}" width="${w}" height="30" rx="5" fill="${c}"/><text x="130" y="${40 + i * 36}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
        <text x="130" y="172" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>de mejor (arriba) a peor (abajo)</text>
      </svg>`,
    },
    {
      html: `<h3>El desarrollo sostenible</h3><p>El <b>desarrollo sostenible</b> busca satisfacer las necesidades actuales <mark>sin comprometer las de las generaciones futuras</mark>. Une tres dimensiones: <b>ambiental</b>, <b>social</b> y <b>económica</b>. La ONU lo concretó en los <b>17 Objetivos de Desarrollo Sostenible (ODS)</b> para 2030. Hay medidas globales (acuerdos como el de París, espacios naturales protegidos) y personales: moverse en transporte público o en bici, consumir producto local y de temporada, ahorrar agua y energía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres círculos que se cruzan: ambiental, social y económico; en el centro, sostenible">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="104" cy="70" r="46" fill="var(--leaf)" opacity=".35"/><circle cx="156" cy="70" r="46" fill="var(--pen)" opacity=".35"/><circle cx="130" cy="112" r="46" fill="var(--sun)" opacity=".35"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="84" y="56" fill="var(--ink)">ambiental</text><text x="178" y="56" fill="var(--ink)">social</text><text x="130" y="146" fill="var(--ink)">económico</text><text x="130" y="90" font-size="10" fill="var(--red)">sostenible</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Del problema a la solución",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Cuatro problemas ambientales con una medida para cada uno">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Cambio climático", "más CO₂", "renovables y", "menos coche", "var(--red)"], ["Biodiversidad", "hábitats perdidos", "espacios", "protegidos", "var(--leaf)"], ["Residuos", "plásticos, basura", "reducir, reutilizar", "y reciclar", "var(--sun)"], ["Agua", "escasez, vertidos", "ahorrar y", "depurar", "var(--water)"]]
        .map(([n, p, s1, s2, c], i) => `<rect x="${16 + i * 154}" y="20" width="146" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="56" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="92" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${p}</text>
          <text x="${89 + i * 154}" y="140" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${s1}</text>
          <text x="${89 + i * 154}" y="162" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${s2}</text>`).join("")}
    </svg>`,
  },
  video: { id: "MCKH5xk8X-g", titulo: "Los Objetivos de Desarrollo Sostenible: qué son y cómo alcanzarlos", canal: "UNESCO en español", vistas: 6359316, megusta: 0, busqueda: "impactos ambientales desarrollo sostenible" },
  quiz: [
    { q: "¿El efecto invernadero es siempre perjudicial?", o: ["Sí, siempre", "No: es natural y necesario, el problema es su aumento", "Solo existe en las ciudades"], a: 1, e: "Sin él la Tierra estaría a unos −18 °C. El problema es que lo hemos intensificado." },
    { q: "¿Cuál es la principal causa de pérdida de biodiversidad?", o: ["La destrucción de hábitats", "Los terremotos", "La lluvia"], a: 0, e: "Deforestación, urbanización y agricultura intensiva eliminan los lugares donde viven las especies." },
    { q: "En la regla de las tres erres, ¿qué es lo más importante?", o: ["Reciclar", "Reducir", "Reutilizar"], a: 1, e: "El mejor residuo es el que no se genera." },
    { q: "¿Qué es una especie invasora?", o: ["Una especie en peligro", "Una especie introducida que se extiende y daña el ecosistema", "Una especie autóctona"], a: 1, e: "Por ejemplo, el mejillón cebra en el Ebro o la cotorra argentina en las ciudades." },
    { q: "El desarrollo sostenible tiene en cuenta…", o: ["solo el medio ambiente", "el medio ambiente, la sociedad y la economía", "solo la economía"], a: 1, e: "Une las tres dimensiones para que el bienestar actual no comprometa el futuro." },
  ],
  examen: [
    { q: "¿Qué gases son los principales responsables del aumento del efecto invernadero?", o: ["Oxígeno y nitrógeno", "Dióxido de carbono y metano", "Helio y argón"], a: 1, e: "Proceden sobre todo de la quema de combustibles fósiles, la ganadería y la deforestación." },
    { q: "La huella ecológica mide…", o: ["el tamaño de un animal", "la superficie necesaria para producir lo que consumimos y absorber nuestros residuos", "las pisadas en un parque natural"], a: 1, e: "Se expresa en hectáreas o en «número de planetas»." },
    { q: "¿Cuántos Objetivos de Desarrollo Sostenible aprobó la ONU para 2030?", o: ["5", "17", "100"], a: 1, e: "Son 17, desde acabar con la pobreza hasta la acción por el clima." },
  ],
  feynman: ["Qué es un impacto ambiental, con un ejemplo de cada medio", "Cómo funciona el efecto invernadero y por qué se ha intensificado", "Las causas de la pérdida de biodiversidad", "La regla de las tres erres en orden", "Qué es el desarrollo sostenible y tres cosas que puedes hacer tú"],
  mapa: mapa("SOSTENIBILIDAD", "var(--eso)", [
    ["Impactos", "aire · agua · suelo", "var(--ink)"],
    ["Clima", "efecto invernadero · +1,2 °C", "var(--red)"],
    ["Biodiversidad", "hábitats · invasoras", "var(--leaf)"],
    ["Soluciones", "3 erres · renovables · ODS", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["¿Qué es el efecto invernadero?", "La retención de parte del calor emitido por la Tierra por gases como el CO₂ y el metano."],
    ["¿Qué es la biodiversidad?", "La variedad de seres vivos: genes, especies y ecosistemas."],
    ["Las tres erres", "Reducir, reutilizar y reciclar (en ese orden de importancia)."],
    ["Definición de desarrollo sostenible", "El que satisface las necesidades presentes sin comprometer las de las generaciones futuras."],
    ["¿Qué es la huella ecológica?", "La superficie productiva necesaria para mantener el consumo y absorber los residuos de una persona o país."],
  ],
  familias: ["Calculad juntos vuestra huella ecológica con una calculadora online y elegid una mejora para el mes.", "Durante una semana, separad y pesad la basura de casa: ¿qué se podría reducir?", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Ecología y sostenibilidad: impactos ambientales, cambio climático, pérdida de biodiversidad, gestión de recursos y residuos y desarrollo sostenible (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Auditoría ambiental del centro (energía, agua, residuos) con propuestas al claustro.", "Análisis de datos reales de temperatura de AEMET para la localidad.", "Proyecto de aprendizaje-servicio vinculado a un ODS."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Objetivos de Desarrollo Sostenible, Naciones Unidas", url: "https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/" },
  ],
  revisado: "2026-11-12",
};
