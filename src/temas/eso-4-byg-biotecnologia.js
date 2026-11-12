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
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="52" y="132" fill="var(--pen)">plásmido cortado</text><text x="118" y="62" fill="var(--red)">gen</text><text x="198" y="132" font-size="10" fill="var(--ink)">ADN recombinante</text></g>
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
      ${[["1", "Cortar", "el gen humano", "con enzimas", "var(--red)"], ["2", "Pegar", "en un plásmido", "con ADN ligasa", "var(--pen)"], ["3", "Introducir", "en bacterias", "que lo aceptan", "var(--leaf)"], ["4", "Cultivar", "y purificar", "la insulina", "var(--sun)"]]
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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Explicar la PCR y sus usos en medicina y criminología", "Valorar las aplicaciones de la biotecnología en salud, agricultura y medio ambiente"],
  tras: {
    "Qué es la biotecnología": [
      { html: `<h3>Biotecnología tradicional y moderna</h3><p>Los seres humanos usamos seres vivos para obtener productos desde hace miles de años, aunque sin saberlo. Es la <b>biotecnología tradicional</b>: las <b>levaduras</b> fermentan los azúcares para hacer pan, vino y cerveza; ciertas <b>bacterias</b> convierten la leche en yogur y queso; y la selección artificial de plantas y animales dio el trigo o las razas de perro actuales. La <b>biotecnología moderna</b> nació en los años 70, cuando se aprendió a <mark>modificar directamente el ADN</mark>: cortar un gen de un organismo y meterlo en otro. Desde entonces se fabrican medicamentos, se mejoran cultivos y se diagnostican enfermedades con técnicas genéticas.</p>` },
    ],
    "Las herramientas: cortar y pegar ADN": [
      { html: `<h3>La PCR: fotocopiar el ADN</h3><p>La <b>reacción en cadena de la polimerasa</b> (PCR), inventada por Kary Mullis en 1983, permite obtener <mark>millones de copias</mark> de un fragmento de ADN a partir de una cantidad mínima, como la de un pelo o una gota de sangre. Se repite muchas veces un ciclo de tres pasos: se calienta la muestra para separar las dos hebras del ADN; se enfría para que se unan unos pequeños fragmentos que marcan el trozo que queremos copiar; y una enzima resistente al calor, la ADN polimerasa, fabrica las hebras nuevas. En cada ciclo se duplica la cantidad: tras 30 ciclos hay más de mil millones de copias. Se usa para diagnosticar infecciones (las famosas pruebas PCR de la COVID-19), en criminología y en pruebas de paternidad.</p>`, video: { id: "TalHTjA5gKU", titulo: "PCR: reacción en cadena de la polimerasa", canal: "CanalDivulgación", vistas: 1147974 } },
      { html: `<h3>La huella genética</h3><p>Salvo los gemelos idénticos, cada persona tiene un ADN único. Algunas zonas del ADN, que no contienen genes, tienen secuencias que se repiten un número de veces distinto en cada persona. Comparando esas zonas se obtiene la <b>huella genética</b>, un patrón de bandas característico. Se usa en <b>criminología</b> para comparar el ADN encontrado en el lugar de un delito con el de los sospechosos, en <b>pruebas de paternidad</b> (la mitad de las bandas de un hijo coinciden con las del padre y la otra mitad con las de la madre) y para <mark>identificar víctimas</mark> de catástrofes o personas desaparecidas.</p>` },
    ],
    "Aplicaciones y bioética": [
      { html: `<h3>Terapia génica y edición genética</h3><p>La <b>terapia génica</b> trata de curar enfermedades genéticas introduciendo en las células del paciente una <mark>copia correcta del gen</mark> que falla. Para meterla se usan virus modificados que han perdido su capacidad de causar enfermedades. Ya se han aprobado tratamientos para algunas formas de ceguera hereditaria, la atrofia muscular espinal y ciertos cánceres de la sangre. La herramienta <b>CRISPR-Cas9</b>, desarrollada por Emmanuelle Charpentier y Jennifer Doudna (Premio Nobel de Química en 2020) a partir de los trabajos del español Francis Mojica, funciona como unas «tijeras» que cortan el ADN en el punto exacto. Permite corregir genes de forma mucho más precisa, barata y rápida que antes.</p>`, video: { id: "ZoE-G7YPvZQ", titulo: "CRISPR: así se editan los genes", canal: "EL PAÍS", vistas: 153941 } },
    ],
  },
  ejemplos: [
    { enunciado: "Partes de 1 molécula de ADN y haces 10 ciclos de PCR. ¿Cuántas copias tendrás?", pasos: ["En cada ciclo se duplica la cantidad.", "Tras n ciclos hay 2ⁿ copias.", "2¹⁰ = 1.024."], resultado: "1.024 copias (tras 30 ciclos serían más de mil millones)." },
    { enunciado: "Explica los pasos para que una bacteria fabrique insulina humana.", pasos: ["Se corta el gen de la insulina del ADN humano con enzimas de restricción.", "Se corta un plásmido bacteriano con la misma enzima y se pega el gen con ADN ligasa: se obtiene ADN recombinante.", "Se introduce el plásmido en bacterias, que se multiplican y fabrican insulina.", "Se cultivan en grandes tanques y se purifica la insulina."], resultado: "Bacteria transgénica que produce insulina para personas con diabetes." },
    { enunciado: "En un caso de paternidad, el hijo tiene bandas 1, 2, 3 y 4. La madre tiene 1 y 3. El posible padre A tiene 2 y 4, y el B, 2 y 5. ¿Quién es el padre?", pasos: ["Las bandas que no vienen de la madre son la 2 y la 4: tienen que venir del padre.", "El candidato A tiene la 2 y la 4.", "El candidato B no tiene la 4."], resultado: "El padre es A." },
  ],
  errores: [
    "Pensar que la biotecnología es solo cosa de laboratorios modernos: el pan y el yogur son biotecnología tradicional.",
    "Confundir un organismo transgénico (lleva un gen de otra especie) con un clon (copia genética de otro individuo).",
    "Creer que la PCR crea ADN nuevo de la nada: copia un fragmento que ya existe.",
    "Pensar que la terapia génica modifica a los descendientes del paciente: la mayoría actúa en células del cuerpo, no en los gametos.",
    "Ver solo ventajas o solo riesgos: la bioética pide valorar los dos.",
  ],
  ejercicios: [
    { q: "Pon tres ejemplos de biotecnología tradicional.", sol: "La fabricación de pan y de vino con levaduras, el yogur y el queso con bacterias, y la selección de razas de animales y variedades de plantas." },
    { q: "¿Qué son las enzimas de restricción y para qué se usan?", sol: "Enzimas de bacterias que cortan el ADN en secuencias concretas. Se usan como «tijeras» para cortar genes y plásmidos." },
    { q: "¿Qué es un plásmido y por qué es útil en ingeniería genética?", sol: "Un pequeño ADN circular de las bacterias, aparte de su cromosoma. Sirve como vehículo para introducir genes en ellas." },
    { q: "¿Cuántas copias hay tras 20 ciclos de PCR partiendo de una molécula?", sol: "2²⁰ = 1.048.576, más de un millón." },
    { q: "Indica tres usos de la PCR.", sol: "Diagnóstico de infecciones (como la COVID-19), criminología (identificar a sospechosos) y pruebas de paternidad." },
    { q: "¿Qué es un organismo transgénico? Pon un ejemplo agrícola.", sol: "Un organismo al que se le ha introducido un gen de otra especie. Ejemplo: maíz Bt, resistente a una plaga de insectos." },
    { q: "¿Cómo se obtuvo la oveja Dolly?", sol: "Se tomó el núcleo de una célula de la mama de una oveja adulta y se introdujo en un óvulo de otra oveja al que se le había quitado el núcleo; el embrión se implantó en una tercera oveja." },
    { q: "Explica en qué consiste la terapia génica y una de sus dificultades.", sol: "Introducir una copia correcta de un gen en las células del paciente. Dificultad: llevar el gen a las células adecuadas de forma segura, sin causar reacciones." },
    { q: "Indica dos aplicaciones de la biotecnología en el medio ambiente.", sol: "Bacterias que descomponen el petróleo de las mareas negras (biorremediación) y la depuración biológica de aguas residuales." },
    { q: "Plantea un argumento a favor y otro en contra de los cultivos transgénicos.", sol: "A favor: pueden dar más cosecha, resistir plagas y reducir el uso de insecticidas. En contra: pueden afectar a otras especies, reducir la biodiversidad y concentrar las semillas en pocas empresas." },
  ],
  quiz: [
    { q: "El yogur se fabrica gracias a…", o: ["levaduras", "bacterias", "virus"], a: 1, e: "Bacterias lácticas." },
    { q: "La PCR sirve para…", o: ["cortar ADN", "obtener millones de copias de un fragmento de ADN", "clonar ovejas"], a: 1, e: "Se duplica en cada ciclo." },
    { q: "La huella genética se usa en…", o: ["pruebas de paternidad y criminología", "fabricar pan", "regar cultivos"], a: 0, e: "Cada persona tiene un patrón único." },
    { q: "CRISPR-Cas9 es una herramienta para…", o: ["editar genes", "ver células", "medir el pH"], a: 0, e: "Corta el ADN en un punto exacto." },
    { q: "La terapia génica intenta…", o: ["introducir un gen correcto en las células", "cambiar el grupo sanguíneo", "eliminar los cromosomas"], a: 0, e: "Para curar enfermedades genéticas." },
  ],
  tarjetas: [
    ["PCR", "Técnica que copia millones de veces un fragmento de ADN."],
    ["Huella genética", "Patrón de ADN único de cada persona; se usa en criminología y paternidad."],
    ["Terapia génica", "Introducir un gen correcto en las células de un paciente."],
  ],
});
