// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Mini tabla periódica: celdas coloreadas por bloques.
const celda = (x, y, s, c) => `<rect x="${x}" y="${y}" width="13" height="13" rx="2" fill="${c}" fill-opacity=".55"/>${s ? `<text x="${x + 6.5}" y="${y + 10}" text-anchor="middle" font-size="7" font-weight="700" fill="var(--ink)" ${F}>${s}</text>` : ""}`;

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "Elementos y compuestos: la tabla periódica",
  minutos: 55,
  objetivos: ["Distinguir elementos y compuestos, átomos, moléculas y cristales", "Conocer la organización de la tabla periódica en grupos y periodos", "Diferenciar metales, no metales y gases nobles por su posición y propiedades", "Relacionar la regla del octeto con la formación de enlaces"],
  claves: ["elemento", "compuesto", "molécula", "cristal", "tabla periódica", "grupo", "periodo", "enlace químico"],
  pregunta: {
    texto: "Con solo 118 elementos distintos se forman millones de sustancias: el agua, el ADN, el plástico, el acero o el chocolate. ¿Cómo es posible, y cómo se organizan esos 118 ladrillos?",
    respuesta: "Los elementos se combinan entre sí como las letras forman palabras: con 27 letras hay millones de palabras. Para ordenarlos, en 1869 <mark>Mendeléiev</mark> creó la <mark>tabla periódica</mark>, que agrupa los elementos con propiedades parecidas y que incluso le permitió predecir elementos que aún no se habían descubierto.",
  },
  bloques: [
    {
      html: `<h3>Elementos y compuestos</h3><p>Un <mark>elemento químico</mark> es una sustancia pura formada por átomos con el <b>mismo número atómico</b>. No se puede descomponer en otras sustancias más sencillas por métodos químicos. Hoy se conocen <b>118 elementos</b>; unos 90 existen en la naturaleza y el resto se han fabricado en laboratorios. Un <mark>compuesto</mark> es una sustancia pura formada por átomos de <b>dos o más elementos</b> unidos en una proporción fija. Se puede descomponer en sus elementos por métodos químicos, como la electrólisis del agua, que la separa en hidrógeno y oxígeno. Las propiedades de un compuesto son muy distintas de las de sus elementos: el sodio es un metal que explota en agua, el cloro es un gas venenoso, y juntos forman la sal de mesa.</p>`,
    },
    {
      html: `<h3>Los símbolos químicos</h3><p>Cada elemento se representa con un <b>símbolo</b>, propuesto por el químico sueco <b>Berzelius</b> en 1814. El símbolo es la <mark>primera letra en mayúscula</mark> del nombre del elemento, normalmente en latín, y, si hace falta distinguirlo de otro, una segunda letra en <b>minúscula</b>. Así, C es el carbono, Ca el calcio, Cl el cloro y Co el cobalto. Algunos símbolos vienen del nombre latino y no se parecen al español: Na (sodio, de <i>natrium</i>), K (potasio, de <i>kalium</i>), Fe (hierro, de <i>ferrum</i>), Cu (cobre, de <i>cuprum</i>), Ag (plata, de <i>argentum</i>), Au (oro, de <i>aurum</i>), Pb (plomo, de <i>plumbum</i>) y Hg (mercurio, de <i>hydrargyrum</i>). Escribir «CO» en lugar de «Co» cambia totalmente el significado.</p>${tabla(["Símbolo", "Elemento", "Símbolo", "Elemento"], [["H", "hidrógeno", "Na", "sodio"], ["C", "carbono", "Mg", "magnesio"], ["N", "nitrógeno", "Fe", "hierro"], ["O", "oxígeno", "Cu", "cobre"], ["Cl", "cloro", "Au", "oro"]])}`,
    },
    {
      html: `<h3>La historia de la tabla periódica</h3><p>En el siglo XIX se conocían unos 60 elementos y los químicos buscaban una forma de ordenarlos. En 1869, el ruso <b>Dmitri Mendeléiev</b> los ordenó por su <b>masa atómica</b> en filas y columnas, de modo que los elementos con propiedades parecidas quedaran en la misma columna. Su genialidad fue dejar <mark>huecos</mark> para elementos que aún no se conocían y predecir sus propiedades. Años después se descubrieron el galio y el germanio, y sus propiedades coincidían con las predichas. En 1913, Henry Moseley demostró que el orden correcto es por <b>número atómico</b>, y así se ordena la tabla actual. En España se descubrieron dos elementos: el <b>platino</b>, estudiado por Antonio de Ulloa, y el <b>wolframio</b>, aislado por los hermanos Elhuyar en 1783.</p>`,
    },
    {
      html: `<h3>Grupos y periodos</h3><p>La tabla periódica actual ordena los elementos por su <mark>número atómico</mark> creciente. Las filas horizontales son los <mark>periodos</mark>: hay 7, y el número del periodo indica cuántas capas de electrones tiene el átomo. Las columnas verticales son los <mark>grupos</mark>: hay 18, y los elementos de un mismo grupo tienen el mismo número de electrones en la última capa y por eso <b>propiedades químicas parecidas</b>. Algunos grupos tienen nombre propio: el 1, <b>alcalinos</b> (Li, Na, K); el 2, <b>alcalinotérreos</b> (Be, Mg, Ca); el 17, <b>halógenos</b> (F, Cl, Br, I); y el 18, <b>gases nobles</b> (He, Ne, Ar). Los grupos del 3 al 12 son los <b>metales de transición</b>, como el hierro, el cobre o el oro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de la tabla periódica con los grupos 1 y 2 a la izquierda, metales de transición en el centro, el bloque de la derecha con los halógenos y los gases nobles al final">${BG}
        ${(() => { let s = ""; for (let p = 0; p < 7; p++) for (let g = 0; g < 18; g++) { if (p === 0 && g > 0 && g < 17) continue; if (p < 3 && g > 1 && g < 12) continue; const c = g === 0 ? "var(--red)" : g === 1 ? "#e0a000" : g < 12 ? "var(--pen)" : g === 16 ? "var(--leaf)" : g === 17 ? "var(--inf)" : "var(--muted)"; s += celda(10 + g * 13.4, 30 + p * 15, "", c); } return s; })()}
        ${t(16, 22, "1", { size: 9 })}${t(30, 22, "2", { size: 9 })}${t(238, 22, "18", { size: 9 })}${t(224, 22, "17", { size: 9 })}
        ${t(10, 150, "alcalinos", { size: 9, anchor: "start", color: "var(--red)" })}${t(90, 150, "transición", { size: 9, color: "var(--pen)" })}${t(212, 150, "halógenos", { size: 9, anchor: "end", color: "var(--leaf)" })}
        ${t(250, 166, "gases nobles", { size: 9, anchor: "end", color: "var(--inf)" })}${t(10, 166, "alcalinotérreos", { size: 9, anchor: "start", color: "#b8860b" })}</svg>`,
      video: { id: "FqZ3BSeu1d0", titulo: "Entendiendo la tabla periódica", canal: "UBUinvestiga y El electrón perdido", vistas: 2428572 },
    },
    {
      html: `<h3>Metales, no metales y semimetales</h3><p>Una línea en escalera divide la tabla en dos zonas. A la izquierda y en el centro están los <mark>metales</mark>, que son la mayoría (unos 90). Tienen brillo metálico, conducen bien el calor y la electricidad, son dúctiles y maleables, y a temperatura ambiente son sólidos, salvo el mercurio, que es líquido. Tienden a <b>perder electrones</b> y formar cationes. A la derecha están los <mark>no metales</mark>, como el carbono, el nitrógeno, el oxígeno, el azufre o el cloro: no tienen brillo, conducen mal y pueden ser sólidos, líquidos (el bromo) o gases. Tienden a <b>ganar electrones</b>. Junto a la escalera están los <b>semimetales</b>, como el silicio, con propiedades intermedias; el silicio es la base de los chips de los ordenadores. El hidrógeno, aunque está arriba a la izquierda, es un no metal.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla periódica dividida por una escalera: metales a la izquierda y en el centro, semimetales junto a la escalera y no metales a la derecha">${BG}
        ${(() => { let s = ""; for (let p = 0; p < 7; p++) for (let g = 0; g < 18; g++) { if (p === 0 && g > 0 && g < 17) continue; if (p < 3 && g > 1 && g < 12) continue; const stair = g - 12; const nm = (p === 0 && g === 0) || g === 17 || (g >= 12 && stair > p) ; const semi = g >= 12 && g < 17 && stair === p; const c = nm ? "var(--leaf)" : semi ? "#e0a000" : "var(--pen)"; s += celda(10 + g * 13.4, 22 + p * 15, "", c); } return s; })()}
        ${caja(10, 136, 76, 26, "metales", "var(--pen)", { size: 11 })}${caja(92, 136, 80, 26, "semimetales", "#e0a000", { size: 10 })}${caja(178, 136, 74, 26, "no metales", "var(--leaf)", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Los gases nobles y la regla del octeto</h3><p>Los <b>gases nobles</b> (helio, neón, argón, kriptón, xenón y radón) casi nunca reaccionan con otras sustancias: son muy <b>estables</b>. Se debe a que tienen su última capa de electrones completa, con <mark>8 electrones</mark> (el helio, con 2). Los demás átomos tienden a ganar, perder o compartir electrones para conseguir esa misma configuración estable: es la <mark>regla del octeto</mark>. Así, el sodio, con 1 electrón en su última capa, tiende a perderlo, y el cloro, con 7, tiende a ganar uno. Por esta estabilidad, el helio se usa en globos sin riesgo de que arda, el argón dentro de las bombillas y el neón en los letreros luminosos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El sodio pierde su único electrón externo y el cloro, con siete, lo gana; ambos quedan con ocho electrones en la última capa">${BG}
        ${[[60, 1, "Na", "pierde 1 e⁻"], [190, 7, "Cl", "gana 1 e⁻"]].map(([x, n, s, d]) => `<circle cx="${x}" cy="84" r="16" fill="var(--red)" fill-opacity=".25"/>${t(x, 89, s, { size: 13 })}<circle cx="${x}" cy="84" r="42" fill="none" stroke="var(--muted)" stroke-width="1.5"/>${Array.from({ length: n }, (_, i) => { const a = (i / 8) * 2 * Math.PI - Math.PI / 2; return `<circle cx="${(x + 42 * Math.cos(a)).toFixed(1)}" cy="${(84 + 42 * Math.sin(a)).toFixed(1)}" r="5" fill="var(--pen)"/>`; }).join("")}${t(x, 148, d, { size: 11, color: "var(--pen)" })}`).join("")}
        ${fl(110, 64, 140, 64, "var(--pen)", 2)}${t(130, 22, "objetivo: 8 e⁻ en la última capa", { size: 11, color: "var(--leaf)" })}${t(130, 170, "como un gas noble", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Átomos, moléculas y cristales</h3><p>Los átomos casi nunca están solos; se unen formando estructuras mayores. Una <mark>molécula</mark> es un grupo de átomos unidos de forma independiente, con un número fijo de átomos. Puede ser de un elemento, como el oxígeno que respiramos (O₂) o el ozono (O₃), o de un compuesto, como el agua (H₂O) o el dióxido de carbono (CO₂). Un <mark>cristal</mark> es una red ordenada de miles de millones de átomos o iones que se repite en las tres direcciones del espacio, como la sal (NaCl), el diamante (C) o los metales. Solo los gases nobles existen como <b>átomos aislados</b>. La <b>fórmula química</b> indica qué elementos forman la sustancia y en qué proporción: en H₂O hay 2 átomos de hidrógeno por cada uno de oxígeno.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres formas: un átomo aislado de helio, una molécula de agua con un oxígeno y dos hidrógenos, y un cristal de sal con iones de sodio y cloro alternados">${BG}
        <circle cx="40" cy="80" r="14" fill="var(--inf)"/>${t(40, 85, "He", { size: 10, color: "#fff" })}${t(40, 136, "átomo", { size: 11 })}${t(40, 150, "aislado", { size: 10, weight: 400 })}
        <circle cx="120" cy="80" r="18" fill="var(--red)"/><circle cx="98" cy="98" r="11" fill="#ccc" stroke="var(--muted)"/><circle cx="142" cy="98" r="11" fill="#ccc" stroke="var(--muted)"/>${t(120, 85, "O", { size: 12, color: "#fff" })}${t(98, 102, "H", { size: 10 })}${t(142, 102, "H", { size: 10 })}${t(120, 136, "molécula", { size: 11 })}${t(120, 150, "H₂O", { size: 10, weight: 400 })}
        ${Array.from({ length: 16 }, (_, i) => { const x = 180 + (i % 4) * 18, y = 54 + Math.floor(i / 4) * 18; const na = (i % 4 + Math.floor(i / 4)) % 2 === 0; return `<circle cx="${x}" cy="${y}" r="${na ? 6 : 8}" fill="${na ? "var(--pen)" : "var(--leaf)"}"/>`; }).join("")}${t(207, 136, "cristal", { size: 11 })}${t(207, 150, "NaCl", { size: 10, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>El enlace químico</h3><p>La fuerza que mantiene unidos los átomos se llama <mark>enlace químico</mark>. Hay tres tipos principales. El <b>enlace iónico</b> se forma entre un metal y un no metal: el metal cede electrones al no metal, se forman un catión y un anión que se atraen, y se crea un <b>cristal iónico</b>, como la sal; estas sustancias son duras, tienen temperaturas de fusión altas y, disueltas en agua, conducen la electricidad. El <b>enlace covalente</b> se forma entre no metales que <b>comparten</b> electrones, y da lugar a moléculas, como el agua o el CO₂, o a cristales covalentes muy duros, como el diamante. El <b>enlace metálico</b> une átomos de metales que dejan sus electrones externos libres formando una «nube», lo que explica que conduzcan tan bien la electricidad.</p>${tabla(["Enlace", "Entre", "Ejemplo"], [["Iónico", "metal + no metal", "NaCl, sal"], ["Covalente", "no metal + no metal", "H₂O, CO₂, diamante"], ["Metálico", "metal + metal", "cobre, hierro"]])}`,
    },
    {
      html: `<h3>Los elementos de la vida y del planeta</h3><p>Aunque hay 118 elementos, unos pocos son los protagonistas. Los seres vivos estamos formados sobre todo por <mark>C, H, O y N</mark>, junto con fósforo y azufre: son los <b>bioelementos</b> principales. El oxígeno es el elemento más abundante en nuestro cuerpo (un 65 % de la masa), sobre todo en forma de agua. Necesitamos también calcio para los huesos, hierro para la hemoglobina de la sangre, yodo para la tiroides o sodio y potasio para los nervios. En la <b>corteza terrestre</b> abundan el oxígeno y el silicio, que forman las rocas, seguidos del aluminio y el hierro. En el <b>universo</b>, el elemento más abundante es el hidrógeno, seguido del helio: forman las estrellas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Elementos más abundantes en el cuerpo humano en masa: oxígeno 65 por ciento, carbono 18, hidrógeno 10, nitrógeno 3 y otros 4">${BG}
        ${[["O", 65, "var(--red)"], ["C", 18, "var(--ink)"], ["H", 10, "var(--muted)"], ["N", 3, "var(--pen)"], ["otros", 4, "#b8860b"]].map(([s, v, c], i) => `${t(44, 46 + i * 26, s, { size: 12, anchor: "end", color: c })}<rect x="50" y="${34 + i * 26}" width="${v * 2.4}" height="16" rx="3" fill="${c}" fill-opacity=".6"/>${t(56 + v * 2.4, 47 + i * 26, v + " %", { size: 11, anchor: "start" })}`).join("")}
        ${t(130, 20, "el cuerpo humano, en masa", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Masa molecular y uso de la tabla</h3><p>La tabla periódica da para cada elemento su símbolo, su número atómico y su <b>masa atómica</b>, medida en <b>unidades de masa atómica (u)</b>. A partir de ella se calcula la <mark>masa molecular</mark> de un compuesto sumando las masas de todos los átomos de su fórmula. Por ejemplo, para el agua, H₂O: 2 · 1 u + 16 u = <b>18 u</b>. Para el dióxido de carbono, CO₂: 12 u + 2 · 16 u = <b>44 u</b>. Saber leer la tabla periódica permite prever cómo se comportará un elemento: si está en el grupo 1, será un metal muy reactivo que formará iones +1; si está en el 17, un no metal que formará iones −1; si está en el 18, apenas reaccionará.</p>`,
    },
  ],
  figura: {
    titulo: "Leer la tabla periódica",
    svg: `<svg viewBox="0 0 640 250" role="img" aria-label="Tabla periódica esquemática con flechas: los periodos son filas e indican el número de capas; los grupos son columnas con propiedades parecidas; metales a la izquierda y no metales a la derecha">
      <rect width="640" height="250" rx="16" fill="var(--paper)"/>
      ${(() => { let s = ""; for (let p = 0; p < 7; p++) for (let g = 0; g < 18; g++) { if (p === 0 && g > 0 && g < 17) continue; if (p < 3 && g > 1 && g < 12) continue; const stair = g - 12; const nm = (p === 0 && g === 0) || g === 17 || (g >= 12 && stair > p); const c = g === 17 ? "var(--inf)" : nm ? "var(--leaf)" : "var(--pen)"; s += `<rect x="${40 + g * 24}" y="${30 + p * 26}" width="22" height="24" rx="3" fill="${c}" fill-opacity=".45"/>`; } return s; })()}
      ${fl(40, 222, 470, 222, "var(--red)", 3)}${t(255, 244, "periodo: fila (capas de electrones)", { size: 13, color: "var(--red)" })}
      ${fl(500, 30, 500, 210, "var(--leaf)", 3)}${t(512, 110, "grupo: columna", { size: 13, anchor: "start", color: "var(--leaf)" })}${t(512, 128, "(propiedades", { size: 13, anchor: "start", color: "var(--leaf)" })}${t(512, 146, "parecidas)", { size: 13, anchor: "start", color: "var(--leaf)" })}
      ${t(140, 22, "metales", { size: 14, color: "var(--pen)", font: D })}${t(400, 22, "no metales", { size: 14, color: "var(--leaf)", font: D })}
    </svg>`,
  },
  video: { id: "-2ymBr8LYSs", titulo: "Aprende la TABLA PERIÓDICA en 7 minutos", canal: "Amigos de la Química", vistas: 7378544, megusta: 0, busqueda: "tabla periódica explicación" },
  ejemplos: [
    { enunciado: "Calcula la masa molecular del ácido sulfúrico, H₂SO₄ (H = 1 u, S = 32 u, O = 16 u).",
      pasos: ["Hidrógeno: 2 · 1 = 2 u.", "Azufre: 1 · 32 = 32 u; oxígeno: 4 · 16 = 64 u.", "Sumamos: 2 + 32 + 64 = 98 u."],
      resultado: "98 u." },
    { enunciado: "El potasio está en el grupo 1 y el periodo 4. ¿Qué puedes deducir?",
      pasos: ["Periodo 4: sus electrones ocupan 4 capas.", "Grupo 1: tiene 1 electrón en la última capa; es un metal alcalino.", "Tenderá a perder ese electrón para cumplir el octeto."],
      resultado: "es un metal muy reactivo que forma el ion K⁺." },
    { enunciado: "Indica el tipo de enlace en: KCl, CH₄ y Al.",
      pasos: ["KCl: potasio (metal) y cloro (no metal).", "CH₄: carbono e hidrógeno, dos no metales.", "Al: solo átomos de un metal."],
      resultado: "iónico, covalente y metálico." },
  ],
  errores: [
    "Escribir los símbolos con dos mayúsculas: Co (cobalto) no es CO (monóxido de carbono).",
    "Confundir grupos (columnas) con periodos (filas).",
    "Creer que la tabla se ordena por masa atómica: se ordena por número atómico.",
    "Pensar que todas las sustancias de un elemento son átomos sueltos: el oxígeno forma moléculas O₂.",
    "Situar el hidrógeno entre los metales porque está en el grupo 1.",
  ],
  ejercicios: [
    { q: "Diferencia elemento y compuesto. Pon dos ejemplos de cada uno.", sol: "Elemento: átomos de un solo tipo, no se descompone (hierro, oxígeno). Compuesto: dos o más elementos en proporción fija (agua, sal)." },
    { q: "Escribe el símbolo: sodio, potasio, hierro, plata, oro, plomo.", sol: "Na, K, Fe, Ag, Au, Pb." },
    { q: "¿Por qué fue tan importante que Mendeléiev dejara huecos en su tabla?", sol: "Porque predijo elementos aún no descubiertos y sus propiedades; cuando se descubrieron, coincidían, lo que demostró que la tabla era correcta." },
    { q: "¿Qué tienen en común los elementos de un mismo grupo? ¿Y los de un mismo periodo?", sol: "Grupo: el mismo número de electrones en la última capa y propiedades parecidas. Periodo: el mismo número de capas." },
    { q: "Nombra el grupo: Li, Na, K; F, Cl, Br; He, Ne, Ar.", sol: "Alcalinos (1), halógenos (17) y gases nobles (18)." },
    { q: "Compara tres propiedades de metales y no metales.", sol: "Metales: brillo, buenos conductores, dúctiles. No metales: sin brillo, malos conductores, frágiles si son sólidos." },
    { q: "Explica la regla del octeto con el ejemplo del magnesio (2 electrones en la última capa).", sol: "Los átomos tienden a tener 8 electrones en la última capa; el magnesio pierde 2 y forma Mg²⁺." },
    { q: "Clasifica en átomos aislados, moléculas o cristales: Ne, O₂, NaCl, H₂O, Fe.", sol: "Átomo aislado: Ne. Moléculas: O₂, H₂O. Cristales: NaCl (iónico) y Fe (metálico)." },
    { q: "Calcula la masa molecular de NH₃ y de CaCO₃ (N = 14, H = 1, Ca = 40, C = 12, O = 16).", sol: "NH₃: 14 + 3 = 17 u. CaCO₃: 40 + 12 + 48 = 100 u." },
    { q: "¿Qué tipo de enlace tiene el agua y cómo se forma?", sol: "Covalente: el oxígeno comparte un par de electrones con cada hidrógeno." },
  ],
  quiz: [
    { q: "El símbolo del hierro es…", o: ["Hi", "Fe", "Ir"], a: 1, e: "Fe, de ferrum." },
    { q: "La tabla actual se ordena por…", o: ["masa atómica", "número atómico", "orden alfabético"], a: 1, e: "Número atómico." },
    { q: "Las columnas de la tabla son…", o: ["periodos", "grupos", "bloques de masa"], a: 1, e: "Grupos." },
    { q: "Los halógenos están en el grupo…", o: ["1", "17", "18"], a: 1, e: "17." },
    { q: "El único metal líquido a temperatura ambiente es…", o: ["el mercurio", "el sodio", "el bromo"], a: 0, e: "El mercurio." },
    { q: "Los gases nobles son estables porque…", o: ["son ligeros", "tienen la última capa completa", "no tienen electrones"], a: 1, e: "Octeto completo." },
    { q: "La molécula de oxígeno que respiramos es…", o: ["O", "O₂", "O₃"], a: 1, e: "O₂." },
    { q: "La sal común tiene enlace…", o: ["iónico", "covalente", "metálico"], a: 0, e: "Iónico." },
    { q: "La masa molecular del CO₂ es…", o: ["28 u", "44 u", "32 u"], a: 1, e: "12 + 32 = 44 u." },
    { q: "El elemento más abundante del universo es…", o: ["el oxígeno", "el hidrógeno", "el carbono"], a: 1, e: "El hidrógeno." },
  ],
  examen: [
    { q: "El wolframio lo aislaron por primera vez…", o: ["los hermanos Elhuyar", "Mendeléiev", "Marie Curie"], a: 0, e: "Los hermanos Elhuyar, en 1783." },
    { q: "Un elemento del periodo 3 tiene…", o: ["3 electrones", "3 capas de electrones", "3 protones"], a: 1, e: "3 capas." },
    { q: "El silicio es un…", o: ["metal", "semimetal", "gas noble"], a: 1, e: "Semimetal." },
  ],
  feynman: ["Qué diferencia hay entre un elemento, un compuesto, una molécula y un cristal", "Cómo se organiza la tabla periódica en grupos y periodos", "Por qué los átomos se unen: la regla del octeto"],
  mapa: mapa("TABLA PERIÓDICA", "var(--eso)", [
    ["Sustancias", "elementos · compuestos", "var(--pen)"],
    ["Orden", "número atómico · grupos · periodos", "var(--red)"],
    ["Zonas", "metales · no metales · gases nobles", "var(--leaf)"],
    ["Enlace", "iónico · covalente · metálico", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Elemento", "Sustancia formada por átomos con el mismo Z."],
    ["Compuesto", "Sustancia de dos o más elementos en proporción fija."],
    ["Grupo", "Columna de la tabla; propiedades parecidas."],
    ["Periodo", "Fila de la tabla; número de capas."],
    ["Metales", "Brillo, conducen, dúctiles; pierden electrones."],
    ["Regla del octeto", "Los átomos tienden a tener 8 electrones en la última capa."],
    ["Molécula", "Grupo independiente de átomos unidos: H₂O, O₂."],
    ["Masa molecular", "Suma de las masas atómicas de la fórmula."],
  ],
  familias: ["Buscad en casa objetos hechos de elementos (papel de aluminio, cable de cobre, mina de grafito) y localizadlos en la tabla.", "Jugad a las adivinanzas de símbolos químicos con nombres latinos.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La materia: elementos y compuestos, sistema periódico, sustancias atómicas, moleculares y cristalinas, enlace químico y masa molecular (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Construir una tabla periódica mural en la que cada estudiante investigue un elemento.", "Juego de cartas de Mendeléiev: ordenar elementos por propiedades y descubrir huecos.", "Modelos de moléculas con plastilina y palillos."],
  },
  fuentes: [RD, wiki("Tabla periódica de los elementos", "Tabla_peri%C3%B3dica_de_los_elementos"), wiki("Elemento químico", "Elemento_qu%C3%ADmico")],
  revisado: "2026-11-12",
};
