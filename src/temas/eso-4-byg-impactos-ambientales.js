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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Explicar la contaminación atmosférica: lluvia ácida y capa de ozono", "Calcular y reducir la huella ecológica y aplicar la economía circular"],
  tras: {
    "El cambio climático": [
      { html: `<h3>Contaminación atmosférica: lluvia ácida y capa de ozono</h3><p>Además del CO₂, la actividad humana emite otros contaminantes. Los <b>óxidos de azufre y de nitrógeno</b> de las centrales térmicas, las industrias y los coches reaccionan con el agua de la atmósfera y forman ácidos que caen con la lluvia: es la <b>lluvia ácida</b>, que daña bosques, acidifica lagos y corroe monumentos. En las ciudades, estos gases y las partículas forman la <b>boina de contaminación</b>, que causa enfermedades respiratorias. Otro problema fue el <b>agujero de la capa de ozono</b>, causado por los CFC de aerosoles y frigoríficos: el ozono de la estratosfera nos protege de los rayos ultravioleta. Gracias al <mark>Protocolo de Montreal</mark> (1987), que prohibió los CFC, la capa se está recuperando: es el mejor ejemplo de que la cooperación internacional funciona.</p>` },
    ],
    "La pérdida de biodiversidad": [
      { html: `<h3>Espacios protegidos y especies invasoras</h3><p>Para conservar la biodiversidad se crean <b>espacios naturales protegidos</b>, con distintos niveles de protección: en España hay 16 <b>parques nacionales</b>, como Doñana, el Teide o Picos de Europa, además de parques naturales, reservas y la red europea <b>Natura 2000</b>. También se elaboran planes de recuperación de especies amenazadas, como el del lince ibérico, que ha pasado de menos de 100 ejemplares en 2002 a más de 2.000. Una amenaza creciente son las <b>especies invasoras</b>: animales o plantas que llegan de otros lugares, normalmente por culpa humana, y <mark>desplazan a las especies autóctonas</mark>. Ejemplos en España son el mejillón cebra, el cangrejo rojo americano, la cotorra argentina o el camalote.</p>` },
    ],
    "Residuos, agua y energía": [
      { html: `<h3>La huella ecológica</h3><p>La <b>huella ecológica</b> mide la superficie de tierra y mar productiva que hace falta para producir todo lo que consume una persona (alimentos, energía, materiales) y absorber sus residuos. Se expresa en <b>hectáreas globales</b> por persona. La Tierra tiene unas 1,6 hectáreas disponibles por habitante, pero la huella media mundial es de unas 2,6: estamos consumiendo como si tuviéramos <mark>más de un planeta y medio</mark>. Si todos viviéramos como un español medio necesitaríamos más de dos planetas. La huella se reduce consumiendo menos energía, usando transporte público o la bici, comiendo menos carne y más productos locales y de temporada, y evitando el desperdicio de comida.</p>`, video: { id: "TM2Be7MqykY", titulo: "¿Qué es la huella ecológica? Calcular huella ecológica", canal: "EcologíaVerde", vistas: 360483 } },
    ],
    "El desarrollo sostenible": [
      { html: `<h3>Economía circular</h3><p>La economía tradicional es <b>lineal</b>: extraer materias primas, fabricar, usar y tirar. La <b>economía circular</b> propone que los productos y materiales <mark>se mantengan en uso el mayor tiempo posible</mark> y que los residuos se conviertan en recursos. Se basa en las «erres»: <b>reducir</b> lo que consumimos, <b>reutilizar</b>, <b>reparar</b>, <b>reacondicionar</b> y, en último lugar, <b>reciclar</b>. También exige diseñar los productos desde el principio para que duren, se puedan arreglar y se desmonten fácilmente. Por ejemplo, alquilar en vez de comprar, comprar ropa de segunda mano, hacer compost con los restos orgánicos o devolver los envases. La Unión Europea ha aprobado leyes como el derecho a la reparación de los aparatos.</p>`, video: { id: "Lc4-2cVKxp0", titulo: "Economía circular: descubre lo que es", canal: "COTEC", vistas: 3154048 } },
    ],
  },
  ejemplos: [
    { enunciado: "Un país tiene una huella ecológica de 4 hectáreas globales por persona y la biocapacidad del planeta es de 1,6 por persona. ¿Cuántos planetas harían falta si todos vivieran así?", pasos: ["Se divide la huella entre la biocapacidad disponible por persona.", "4 / 1,6 = 2,5."], resultado: "Harían falta 2,5 planetas." },
    { enunciado: "Explica cómo se forma la lluvia ácida y propón dos soluciones.", pasos: ["Al quemar carbón y derivados del petróleo se emiten óxidos de azufre y de nitrógeno.", "En la atmósfera reaccionan con el agua y forman ácido sulfúrico y ácido nítrico.", "Caen con la lluvia y dañan bosques, lagos y edificios.", "Soluciones: filtros en las chimeneas y sustituir los combustibles fósiles por renovables."], resultado: "La causan los óxidos de S y N; se reduce con filtros y energías limpias." },
    { enunciado: "Clasifica estas acciones según las «erres»: arreglar una bici, llevar botellas al contenedor verde, comprar a granel, usar un tarro de mermelada para guardar botones.", pasos: ["Arreglar la bici: reparar.", "Contenedor verde: reciclar.", "Comprar a granel: reducir envases.", "Usar el tarro para otra cosa: reutilizar."], resultado: "Reparar, reciclar, reducir y reutilizar." },
  ],
  errores: [
    "Confundir el agujero de la capa de ozono con el cambio climático: son problemas distintos con causas distintas.",
    "Pensar que el efecto invernadero es malo en sí: sin él la Tierra estaría a −18 °C; el problema es su aumento.",
    "Creer que reciclar es lo más importante: reducir y reutilizar ahorran más recursos.",
    "Confundir tiempo meteorológico (lo que pasa hoy) con clima (la media de muchos años).",
    "Pensar que una especie invasora es cualquier especie exótica: es la que se expande y daña a las autóctonas.",
  ],
  ejercicios: [
    { q: "Indica tres gases de efecto invernadero y su origen.", sol: "CO₂ (combustibles fósiles y deforestación), metano (ganadería, arrozales, vertederos) y óxido nitroso (fertilizantes)." },
    { q: "Indica cuatro consecuencias del cambio climático.", sol: "Subida del nivel del mar, olas de calor y sequías más frecuentes, deshielo de glaciares y polos, y desplazamiento o extinción de especies." },
    { q: "¿Qué diferencia hay entre mitigar y adaptarse al cambio climático?", sol: "Mitigar es reducir sus causas (emitir menos gases); adaptarse es prepararse para sus efectos (proteger costas, ahorrar agua)." },
    { q: "Indica tres causas de pérdida de biodiversidad.", sol: "La destrucción de hábitats, la contaminación y las especies invasoras (también la sobreexplotación y el cambio climático)." },
    { q: "¿Por qué se considera un éxito el Protocolo de Montreal?", sol: "Porque casi todos los países prohibieron los CFC y la capa de ozono se está recuperando: demuestra que la cooperación internacional puede resolver un problema global." },
    { q: "Calcula cuántos planetas harían falta si la huella media fuera de 2,6 hectáreas globales y la biocapacidad de 1,6.", sol: "2,6 / 1,6 ≈ 1,6 planetas." },
    { q: "Propón cinco acciones para reducir tu huella ecológica.", sol: "Ir andando, en bici o en transporte público; ahorrar luz y calefacción; comer más vegetales y productos de temporada; no desperdiciar comida; comprar menos y reutilizar o reparar." },
    { q: "Explica la diferencia entre economía lineal y circular.", sol: "La lineal extrae, fabrica, usa y tira. La circular mantiene los materiales en uso el mayor tiempo posible y convierte los residuos en recursos." },
    { q: "¿Qué es una especie invasora? Pon dos ejemplos de España.", sol: "Una especie introducida que se expande y desplaza a las autóctonas. Ejemplos: el mejillón cebra y el cangrejo rojo americano (también la cotorra argentina)." },
    { q: "Explica qué son los Objetivos de Desarrollo Sostenible.", sol: "17 metas aprobadas por la ONU para 2030 que buscan acabar con la pobreza, proteger el planeta y asegurar la prosperidad de todos, como la acción por el clima o el agua limpia." },
  ],
  quiz: [
    { q: "La lluvia ácida la causan sobre todo…", o: ["los óxidos de azufre y nitrógeno", "el oxígeno", "el vapor de agua"], a: 0, e: "Forman ácidos con el agua." },
    { q: "Los CFC dañaban…", o: ["la capa de ozono", "los océanos", "el suelo"], a: 0, e: "Prohibidos por el Protocolo de Montreal." },
    { q: "La huella ecológica mide…", o: ["la superficie necesaria para mantener nuestro consumo", "el número de pasos al día", "la contaminación del agua"], a: 0, e: "En hectáreas globales." },
    { q: "La primera «erre» y la más eficaz es…", o: ["reciclar", "reducir", "reparar"], a: 1, e: "Lo que no se consume no hay que tratarlo." },
    { q: "El cangrejo rojo americano en España es…", o: ["una especie autóctona", "una especie invasora", "una especie extinguida"], a: 1, e: "Desplaza al cangrejo autóctono." },
  ],
  tarjetas: [
    ["Lluvia ácida", "Lluvia con ácidos formados a partir de óxidos de azufre y nitrógeno."],
    ["Huella ecológica", "Superficie productiva necesaria para mantener el consumo de una persona."],
    ["Economía circular", "Mantener productos y materiales en uso y convertir los residuos en recursos."],
  ],
});
