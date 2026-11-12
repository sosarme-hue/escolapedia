// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "Biotecnología e ingeniería genética",
  minutos: 40,
  objetivos: ["Definir la biotecnología y distinguir la tradicional de la moderna", "Explicar cómo se obtiene un organismo transgénico y qué es CRISPR", "Valorar aplicaciones y debates éticos de la biotecnología"],
  claves: ["biotecnología", "ADN recombinante", "transgénico", "clonación", "CRISPR", "bioética"],
  pregunta: {
    texto: "Hasta 1982 la insulina para los diabéticos se sacaba del páncreas de cerdos y vacas. Hoy la fabrican bacterias. ¿Cómo aprendió una bacteria a hacer una proteína humana?",
    respuesta: "Se le <mark>insertó el gen humano de la insulina</mark>. Como el código genético es universal, la bacteria lee ese gen igual que los suyos y fabrica insulina humana. Es <b>ingeniería genética</b>: cortar, pegar y trasladar genes de un ser vivo a otro.",
  },
  bloques: [
    {
      html: `<h3>Qué es la biotecnología</h3><p>La <b>biotecnología</b> usa seres vivos o sus moléculas para obtener productos útiles. La <b>tradicional</b> tiene miles de años: <mark>levaduras</mark> para hacer pan, vino o cerveza y <mark>bacterias</mark> para el yogur y el queso (fermentaciones). La <b>moderna</b> nace en los años 70, cuando se aprende a <b>modificar el ADN</b> directamente: la ingeniería genética.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Productos de la biotecnología tradicional: pan, yogur y queso, y de la moderna: insulina">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M24 90 Q 24 56 64 56 Q 104 56 104 90 Z" fill="var(--sun)"/><path d="M40 70 l 8 8 M60 64 l 8 8 M80 70 l 8 8" stroke="var(--ink)" stroke-width="2"/>
        <path d="M130 56 H 170 L 166 100 H 134 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="150" y="84" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>yogur</text>
        <rect x="196" y="40" width="20" height="54" rx="4" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="200" y="58" width="12" height="30" fill="var(--pen)" opacity=".4"/><path d="M206 40 V 28" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="100" y="130" fill="var(--sun)">tradicional</text><text x="206" y="130" fill="var(--pen)">moderna</text><text x="206" y="146" font-size="10" fill="var(--muted)">insulina</text><text x="100" y="146" font-size="10" fill="var(--muted)">fermentaciones</text></g>
      </svg>`,
    },
    {
      html: `<h3>Las herramientas: cortar y pegar ADN</h3><p>La ingeniería genética usa <b>enzimas de restricción</b>, unas «tijeras» que cortan el ADN en secuencias concretas, y la <b>ADN ligasa</b>, un «pegamento» que une fragmentos. Para llevar un gen a una bacteria se usa un <b>vector</b>, normalmente un <mark>plásmido</mark> (un pequeño anillo de ADN bacteriano). El resultado, ADN de dos orígenes, es <b>ADN recombinante</b>. La <b>PCR</b> permite hacer millones de copias de un fragmento en pocas horas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Se corta un plásmido, se inserta el gen humano y se pega formando ADN recombinante">
        <defs>${flecha("bt1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="52" cy="80" r="30" fill="none" stroke="var(--pen)" stroke-width="6" stroke-dasharray="170 18"/>
        <rect x="98" y="72" width="40" height="14" rx="4" fill="var(--red)"/>
        <path d="M144 80 H 166" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#bt1)"/>
        <circle cx="212" cy="80" r="30" fill="none" stroke="var(--pen)" stroke-width="6"/><path d="M236 62 A 30 30 0 0 1 238 96" fill="none" stroke="var(--red)" stroke-width="7"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="52" y="132" fill="var(--pen)">plásmido cortado</text><text x="118" y="62" fill="var(--red)">gen</text><text x="212" y="132" fill="var(--ink)">ADN recombinante</text></g>
      </svg>`,
    },
    {
      html: `<h3>Organismos transgénicos</h3><p>Un <b>organismo modificado genéticamente (OMG)</b> o <b>transgénico</b> lleva un gen de otra especie. Ejemplos: <mark>bacterias que fabrican insulina</mark> u hormona del crecimiento, maíz resistente a plagas, el <b>arroz dorado</b> con vitamina A o salmones que crecen más rápido. En Europa su cultivo y su etiquetado están muy regulados.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pasos: insertar el gen en la bacteria, que se multiplica y fabrica insulina">
        <defs>${flecha("bt2", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="64" width="64" height="34" rx="17" fill="var(--leaf)" opacity=".35" stroke="var(--leaf)" stroke-width="2"/><circle cx="48" cy="81" r="9" fill="none" stroke="var(--red)" stroke-width="3"/>
        <path d="M86 81 H 108" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#bt2)"/>
        ${[[130, 50], [170, 50], [130, 92], [170, 92], [150, 71]].map(([x, y]) => `<rect x="${x - 18}" y="${y - 10}" width="36" height="20" rx="10" fill="var(--leaf)" opacity=".35" stroke="var(--leaf)" stroke-width="1.5"/>`).join("")}
        <path d="M196 81 H 214" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#bt2)"/>
        ${[[232, 66], [240, 82], [228, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)"/>`).join("")}
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="48" y="122" fill="var(--ink)">bacteria + gen</text><text x="150" y="132" fill="var(--ink)">se multiplica</text><text x="226" y="122" fill="var(--red)">insulina</text></g>
      </svg>`,
    },
    {
      html: `<h3>Clonación y CRISPR</h3><p><b>Clonar</b> es obtener copias genéticamente idénticas. En 1996 nació la <b>oveja Dolly</b>, el primer mamífero clonado a partir de una célula adulta: se pasó el núcleo de una célula a un óvulo sin núcleo. En 2012, Charpentier y Doudna desarrollaron <mark>CRISPR-Cas9</mark>, unas «tijeras moleculares» que permiten <b>editar un gen</b> en un punto exacto. Ya se usa para tratar algunas enfermedades de la sangre.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="CRISPR: una guía localiza la secuencia y la enzima Cas9 corta el ADN en ese punto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 90 H 246 M14 104 H 246" stroke="var(--ink)" stroke-width="4"/>
        ${Array.from({ length: 16 }, (_, i) => `<path d="M${22 + i * 14} 92 V 102" stroke="${i >= 7 && i <= 9 ? "var(--red)" : "var(--muted)"}" stroke-width="3"/>`).join("")}
        <ellipse cx="134" cy="96" rx="44" ry="34" fill="var(--pen)" opacity=".25" stroke="var(--pen)" stroke-width="2"/>
        <path d="M120 70 L 148 122 M148 70 L 120 122" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="134" y="50" fill="var(--pen)">Cas9 + ARN guía</text><text x="134" y="152" fill="var(--red)">corta justo aquí</text></g>
      </svg>`,
    },
    {
      html: `<h3>Aplicaciones y bioética</h3><p>La biotecnología se aplica en <b>medicina</b> (vacunas, fármacos, terapia génica, pruebas de ADN), <b>agricultura</b> (plantas resistentes a sequías y plagas), <b>industria</b> (detergentes con enzimas, bioplásticos) y <b>medio ambiente</b> (bacterias que limpian vertidos de petróleo: <mark>biorremediación</mark>). También plantea preguntas: ¿se debe editar el ADN de embriones? ¿Quién es dueño de los datos genéticos? La <b>bioética</b> busca respuestas responsables.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro campos de aplicación: medicina, agricultura, industria y medio ambiente">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["medicina", "vacunas · insulina", "var(--red)"], ["agricultura", "plantas resistentes", "var(--leaf)"], ["industria", "enzimas · bioplásticos", "var(--sun)"], ["ambiente", "biorremediación", "var(--pen)"]].map(([t, d, c], i) => `<rect x="${14 + (i % 2) * 120}" y="${20 + Math.floor(i / 2) * 74}" width="112" height="64" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="${70 + (i % 2) * 120}" y="${48 + Math.floor(i / 2) * 74}" text-anchor="middle" font-size="14" font-weight="700" fill="${c}" ${F}>${t}</text><text x="${70 + (i % 2) * 120}" y="${68 + Math.floor(i / 2) * 74}" text-anchor="middle" font-size="10" fill="var(--ink)" ${F}>${d}</text>`).join("")}
      </svg>`,
    },
  ],
  figura: {
    titulo: "Cómo se fabrica insulina con bacterias",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cuatro pasos: aislar el gen, insertarlo en un plásmido, introducirlo en bacterias y cultivarlas para obtener insulina">
      <defs>${flecha("bt3", "var(--muted)")}</defs>
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["1", "Cortar", "el gen humano", "con enzimas de restricción", "var(--red)"], ["2", "Pegar", "en un plásmido", "con ADN ligasa", "var(--pen)"], ["3", "Introducir", "en bacterias", "que lo aceptan", "var(--leaf)"], ["4", "Cultivar", "y purificar", "la insulina", "var(--sun)"]]
        .map(([n, t, a, b, c], i) => `<rect x="${16 + i * 156}" y="30" width="138" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <circle cx="${85 + i * 156}" cy="62" r="18" fill="${c}"/><text x="${85 + i * 156}" y="69" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" ${D}>${n}</text>
          <text x="${85 + i * 156}" y="112" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${t}</text>
          <text x="${85 + i * 156}" y="140" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${85 + i * 156}" y="160" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${b}</text>
          ${i < 3 ? `<path d="M${156 + i * 156} 110 H ${170 + i * 156}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#bt3)"/>` : ""}`).join("")}
    </svg>`,
  },
  video: { id: "NMIc49qGt2g", titulo: "La ingeniería genética cambiará todo para siempre: CRISPR", canal: "En Pocas Palabras – Kurzgesagt", vistas: 3520168, megusta: 0, busqueda: "biotecnología ingeniería genética" },
  quiz: [
    { q: "¿Cuál es un ejemplo de biotecnología tradicional?", o: ["Hacer yogur con bacterias", "Editar genes con CRISPR", "Clonar una oveja"], a: 0, e: "Las fermentaciones con microorganismos se usan desde hace miles de años." },
    { q: "¿Qué hacen las enzimas de restricción?", o: ["Pegan ADN", "Cortan el ADN en secuencias concretas", "Copian el ADN"], a: 1, e: "Son las «tijeras» de la ingeniería genética." },
    { q: "¿Qué es un plásmido?", o: ["Un tipo de proteína", "Un pequeño anillo de ADN de las bacterias usado como vector", "Un virus"], a: 1, e: "Se usa para transportar genes al interior de las bacterias." },
    { q: "Un organismo transgénico es el que…", o: ["ha sido clonado", "lleva un gen de otra especie", "vive en dos ambientes"], a: 1, e: "Ha recibido ADN de otra especie mediante ingeniería genética." },
    { q: "¿Para qué sirve CRISPR-Cas9?", o: ["Para editar genes en un punto exacto", "Para hacer pan", "Para medir el ADN"], a: 0, e: "Localiza una secuencia concreta y la corta para modificarla." },
  ],
  examen: [
    { q: "La oveja Dolly fue importante porque…", o: ["fue el primer animal transgénico", "fue el primer mamífero clonado de una célula adulta", "producía insulina"], a: 1, e: "Nació en 1996 transfiriendo el núcleo de una célula adulta a un óvulo sin núcleo." },
    { q: "¿Qué técnica permite copiar millones de veces un fragmento de ADN?", o: ["PCR", "Fermentación", "Electroforesis"], a: 0, e: "La reacción en cadena de la polimerasa (PCR) amplifica el ADN en horas." },
    { q: "El uso de bacterias para limpiar un vertido de petróleo se llama…", o: ["clonación", "biorremediación", "terapia génica"], a: 1, e: "Los microorganismos degradan los contaminantes." },
  ],
  feynman: ["La diferencia entre biotecnología tradicional y moderna", "Cómo se cortan y pegan genes", "Cómo una bacteria llega a fabricar insulina humana", "Qué es CRISPR y para qué sirve", "Un debate ético de la biotecnología y tu opinión argumentada"],
  mapa: mapa("BIOTECNOLOGÍA", "var(--eso)", [
    ["Tradicional", "pan · yogur · vino", "var(--sun)"],
    ["Herramientas", "enzimas · plásmidos · PCR", "var(--pen)"],
    ["Técnicas", "transgénicos · clonación · CRISPR", "var(--red)"],
    ["Usos y ética", "salud · campo · ambiente", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["¿Qué es el ADN recombinante?", "ADN formado al unir fragmentos de orígenes distintos."],
    ["¿Qué es un vector en ingeniería genética?", "Un vehículo (plásmido o virus) que lleva un gen al interior de una célula."],
    ["¿Qué es un transgénico?", "Un organismo que lleva genes de otra especie."],
    ["¿Qué es la clonación?", "La obtención de individuos genéticamente idénticos a otro."],
    ["¿Qué es la biorremediación?", "El uso de seres vivos para eliminar contaminantes del medio."],
  ],
  familias: ["Mirad etiquetas de detergentes o alimentos y buscad la palabra «enzimas» o «fermentado».", "Debatid en la cena: ¿estaría bien editar genes para evitar una enfermedad? ¿Y para elegir el color de ojos?", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Genética y evolución: biotecnología, ingeniería genética, organismos modificados genéticamente y sus implicaciones éticas y sociales (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Hacer yogur casero y relacionarlo con la biotecnología tradicional.", "Simulación en papel de corte con enzimas de restricción y ligado en un plásmido.", "Debate estructurado sobre transgénicos o edición de embriones con roles."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ingeniería genética, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ingenier%C3%ADa_gen%C3%A9tica" },
  ],
  revisado: "2026-11-12",
};
