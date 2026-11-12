// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

const bola = (x, y, r, c, t = "") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>${t ? `<text x="${x}" y="${y + 4}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${t}</text>` : ""}`;

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "Las reacciones químicas",
  minutos: 40,
  objetivos: ["Explicar una reacción con la teoría de colisiones", "Ajustar ecuaciones químicas aplicando la ley de Lavoisier", "Reconocer los factores que cambian la velocidad de reacción y los tipos de reacciones"],
  claves: ["reactivo", "producto", "ley de conservación de la masa", "ajuste", "velocidad de reacción", "reacción exotérmica"],
  pregunta: {
    texto: "Una manzana cortada se pone marrón en pocos minutos, pero en la nevera tarda horas. ¿Por qué el frío la protege?",
    respuesta: "Porque oscurecerse es una <mark>reacción química</mark> (oxidación) y las reacciones dependen de que las partículas <b>choquen con suficiente energía</b>. Con frío se mueven más despacio, chocan menos y la reacción se vuelve <b>más lenta</b>.",
  },
  bloques: [
    {
      html: `<h3>Qué es una reacción química</h3><p>En una reacción química unas sustancias, los <b>reactivos</b>, se transforman en otras nuevas, los <b>productos</b>. Los átomos no aparecen ni desaparecen: <mark>se rompen unos enlaces y se forman otros</mark>. Según la <b>teoría de colisiones</b>, para que reaccionen, las partículas tienen que chocar con la orientación adecuada y la energía suficiente (energía de activación).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Hidrógeno y oxígeno chocan y se reorganizan en moléculas de agua">
        <defs>${flecha("rq1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${bola(30, 60, 10, "var(--pen)")}${bola(48, 60, 10, "var(--pen)")}${bola(30, 110, 10, "var(--pen)")}${bola(48, 110, 10, "var(--pen)")}${bola(84, 84, 13, "var(--red)")}${bola(108, 84, 13, "var(--red)")}
        <path d="M128 86 H 156" stroke="var(--muted)" stroke-width="3" marker-end="url(#rq1)"/>
        ${[60, 112].map((y) => `${bola(200, y, 14, "var(--red)")}${bola(182, y + 12, 9, "var(--pen)")}${bola(218, y + 12, 9, "var(--pen)")}`).join("")}
        <g ${F} font-size="13" font-weight="700" text-anchor="middle"><text x="68" y="160" fill="var(--ink)">2 H₂ + O₂</text><text x="200" y="160" fill="var(--ink)">2 H₂O</text></g>
      </svg>`,
    },
    {
      html: `<h3>Ley de conservación de la masa</h3><p>Lavoisier demostró en 1789 que, en un recipiente cerrado, <mark>la masa de los reactivos es igual a la masa de los productos</mark>. «Nada se crea ni se destruye, todo se transforma». Si quemas un papel parece que pierde masa, pero es porque los gases (CO₂ y vapor) escapan al aire.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza equilibrada: la masa antes y después de la reacción es la misma">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 40 V 140 M60 60 H 200 M100 150 H 160" stroke="var(--ink)" stroke-width="4"/>
        <path d="M40 60 L 60 60 L 80 60 M40 60 Q 60 96 80 60 M180 60 Q 200 96 220 60" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="60" y="110" font-size="13" fill="var(--pen)">reactivos</text><text x="60" y="128" font-size="15" fill="var(--ink)">50 g</text><text x="200" y="110" font-size="13" fill="var(--leaf)">productos</text><text x="200" y="128" font-size="15" fill="var(--ink)">50 g</text></g>
      </svg>`,
    },
    {
      html: `<h3>Ajustar una ecuación</h3><p>Como los átomos se conservan, la ecuación química debe tener <mark>el mismo número de átomos de cada elemento a cada lado</mark>. Se ajusta poniendo <b>coeficientes</b> delante de las fórmulas (nunca cambiando los subíndices). Método por tanteo: ajusta primero los metales, luego los no metales, después el hidrógeno y por último el oxígeno.</p>
      <div class="formula"><span>CH₄ + <b>2</b> O₂</span><span class="op">→</span><span>CO₂ + <b>2</b> H₂O</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Recuento de átomos a cada lado de la combustión del metano ajustada">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="14" text-anchor="middle">
          <text x="70" y="30" font-weight="700" fill="var(--pen)">reactivos</text><text x="190" y="30" font-weight="700" fill="var(--leaf)">productos</text>
          <path d="M130 14 V 160" stroke="var(--line)" stroke-width="2"/>
          ${[["C", 1, 1], ["H", 4, 4], ["O", 4, 4]].map(([e, a, b], i) => `<text x="70" y="${70 + i * 34}" fill="var(--ink)"><tspan font-weight="700">${e}</tspan>: ${a}</text><text x="190" y="${70 + i * 34}" fill="var(--ink)"><tspan font-weight="700">${e}</tspan>: ${b}</text><text x="130" y="${70 + i * 34}" fill="var(--leaf)" font-weight="700">✓</text>`).join("")}
        </g>
      </svg>`,
    },
    {
      html: `<h3>Velocidad de reacción</h3><p>Una reacción va más rápida si hay <b>más choques eficaces</b>. Eso ocurre al <mark>subir la temperatura</mark>, <mark>aumentar la concentración</mark> de los reactivos, <mark>trocear</mark> los sólidos (más superficie de contacto) o añadir un <b>catalizador</b>, una sustancia que acelera la reacción sin gastarse. Las enzimas de tu cuerpo son catalizadores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un terrón entero reacciona despacio; el mismo terrón en polvo reacciona rápido">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="56" width="50" height="50" rx="4" fill="var(--sun)"/>
        ${Array.from({ length: 24 }, (_, i) => `<rect x="${150 + (i % 6) * 14}" y="${50 + Math.floor(i / 6) * 16}" width="9" height="9" rx="2" fill="var(--sun)"/>`).join("")}
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="65" y="136" fill="var(--ink)">entero</text><text x="65" y="154" fill="var(--red)">lenta</text><text x="188" y="136" fill="var(--ink)">en polvo</text><text x="188" y="154" fill="var(--leaf)">rápida</text></g>
      </svg>`,
    },
    {
      html: `<h3>Energía y tipos de reacciones</h3><p>Las reacciones <b>exotérmicas</b> <mark>desprenden energía</mark> (una combustión, una bolsa de calor). Las <b>endotérmicas</b> <mark>la absorben</mark> (la fotosíntesis, una bolsa de frío instantáneo). Reacciones importantes: <b>combustión</b> (combustible + O₂ → CO₂ + H₂O), <b>ácido-base</b> o neutralización (ácido + base → sal + agua) y <b>síntesis</b> (A + B → AB).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagramas de energía de una reacción exotérmica y una endotérmica">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[14, "exotérmica", "var(--red)", 60, 120], [138, "endotérmica", "var(--pen)", 120, 60]].map(([x, t, c, y1, y2]) => `<path d="M${x + 6} 20 V 146 H ${x + 112}" fill="none" stroke="var(--line)" stroke-width="2"/>
          <path d="M${x + 10} ${y1} H ${x + 34} C ${x + 50} ${y1}, ${x + 50} 30, ${x + 60} 30 C ${x + 70} 30, ${x + 70} ${y2}, ${x + 86} ${y2} H ${x + 108}" fill="none" stroke="${c}" stroke-width="3"/>
          <text x="${x + 60}" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${t}</text>`).join("")}
        <g ${F} font-size="10" fill="var(--muted)"><text x="20" y="54">R</text><text x="104" y="114">P</text><text x="144" y="114">R</text><text x="228" y="54">P</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Qué acelera una reacción",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cuatro factores que aumentan la velocidad de reacción con un ejemplo cotidiano">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Temperatura", "más calor →", "más choques", "cocinar en olla exprés", "var(--red)"], ["Concentración", "más partículas →", "más choques", "lejía más concentrada", "var(--pen)"], ["Superficie", "trocear →", "más contacto", "astillas arden antes", "var(--sun)"], ["Catalizador", "baja la energía", "de activación", "enzimas, tubo de escape", "var(--leaf)"]]
        .map(([n, a, b, ej, c], i) => `<rect x="${16 + i * 154}" y="20" width="146" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="56" text-anchor="middle" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="96" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="114" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>
          <text x="${89 + i * 154}" y="168" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "wl_HCBxpBs0", titulo: "Balanceo de ecuaciones por tanteo", canal: "A Cierta Ciencia", vistas: 6619897, megusta: 0, busqueda: "reacciones químicas ajuste" },
  quiz: [
    { q: "En una reacción química, los átomos…", o: ["desaparecen y aparecen otros", "se reorganizan formando sustancias nuevas", "cambian de elemento"], a: 1, e: "Se rompen y forman enlaces, pero los átomos son los mismos antes y después." },
    { q: "Si 12 g de carbono reaccionan con 32 g de oxígeno, ¿cuántos gramos de CO₂ se forman?", o: ["20 g", "44 g", "32 g"], a: 1, e: "Ley de Lavoisier: 12 + 32 = 44 g." },
    { q: "¿Cuál es el coeficiente del O₂ en: 2 H₂ + __ O₂ → 2 H₂O?", o: ["1", "2", "4"], a: 0, e: "A la derecha hay 2 átomos de O; basta con 1 molécula de O₂." },
    { q: "¿Qué hace un catalizador?", o: ["Se gasta en la reacción", "Acelera la reacción sin consumirse", "Cambia los productos"], a: 1, e: "Disminuye la energía de activación y se recupera al final." },
    { q: "Una reacción que desprende calor es…", o: ["endotérmica", "exotérmica", "de síntesis siempre"], a: 1, e: "Exo- significa «hacia fuera»: la energía sale al entorno." },
  ],
  examen: [
    { q: "Ajusta: __ Fe + __ O₂ → __ Fe₂O₃", o: ["2, 3, 1", "4, 3, 2", "1, 1, 1"], a: 1, e: "4 Fe + 3 O₂ → 2 Fe₂O₃: 4 átomos de Fe y 6 de O a cada lado." },
    { q: "¿Qué productos da la combustión completa del butano?", o: ["CO₂ y H₂O", "CO y H₂", "C y H₂O"], a: 0, e: "Todo hidrocarburo que arde con oxígeno suficiente da dióxido de carbono y agua." },
    { q: "La reacción de un ácido con una base se llama…", o: ["combustión", "neutralización", "oxidación"], a: 1, e: "Ácido + base → sal + agua: el pH se acerca a 7." },
  ],
  feynman: ["Qué pasa con los átomos y los enlaces en una reacción", "La teoría de colisiones con un ejemplo", "Cómo se ajusta una ecuación química paso a paso", "Cuatro maneras de acelerar una reacción", "La diferencia entre reacción exotérmica y endotérmica"],
  mapa: mapa("REACCIONES QUÍMICAS", "var(--eso)", [
    ["Reactivos → productos", "se rompen y forman enlaces", "var(--ink)"],
    ["Lavoisier", "masa reactivos = masa productos", "var(--pen)"],
    ["Velocidad", "T · concentración · superficie · catalizador", "var(--red)"],
    ["Energía", "exotérmica · endotérmica", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Enuncia la ley de Lavoisier", "En una reacción química en sistema cerrado, la masa total de los reactivos es igual a la de los productos."],
    ["¿Qué se cambia para ajustar una ecuación?", "Los coeficientes delante de las fórmulas, nunca los subíndices."],
    ["¿Qué es la energía de activación?", "La energía mínima que necesitan los choques para que la reacción ocurra."],
    ["Ejemplo de reacción endotérmica", "La fotosíntesis, o una bolsa de frío instantáneo."],
    ["Productos de una neutralización", "Una sal y agua."],
  ],
  familias: ["Cortad dos trozos de manzana y guardad uno en la nevera: comparad cuál se oscurece antes y por qué.", "Disolved una pastilla efervescente entera y otra machacada en agua: ¿cuál termina antes?", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El cambio: reacciones químicas, ley de conservación de la masa, ajuste, velocidad de reacción y aspectos energéticos (RD 217/2022, Física y Química 4º).",
    ideas: ["Comprobar la ley de Lavoisier con vinagre y bicarbonato en un globo cerrado sobre una balanza.", "Pastillas efervescentes con agua fría y caliente, enteras y en polvo, cronometrando.", "Descomponer agua oxigenada con y sin catalizador (levadura o patata)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Reacción química, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Reacci%C3%B3n_qu%C3%ADmica" },
  ],
  revisado: "2026-11-12",
};
