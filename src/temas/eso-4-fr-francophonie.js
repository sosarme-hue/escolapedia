// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "La francophonie",
  minutos: 35,
  objetivos: ["Saber dónde se habla francés en el mundo y por qué", "Conocer la Organisation internationale de la Francophonie", "Descubrir variedades del francés y figuras culturales francófonas"],
  claves: ["francophonie", "OIF", "francophone", "Québec", "Afrique", "Belgique", "Suisse", "20 mars"],
  pregunta: {
    texto: "¿En qué continente crees que vive hoy la mayoría de las personas que hablan francés: en Europa o en África?",
    respuesta: "<mark>En África</mark>. Más de la mitad de los francófonos vive allí, en países como la República Democrática del Congo, Costa de Marfil, Senegal o Camerún. El francés es mucho más que Francia: es una lengua de cinco continentes.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la francofonía?</h3><p>La palabra <b>francophonie</b> designa al conjunto de <mark>personas y países que hablan francés</mark>. Son unos <b>320 millones</b> de hablantes según la OIF, lo que la convierte en una de las lenguas más habladas del mundo y lengua oficial de una treintena de países.</p>`,
      svg: L.filas("Datos de la francofonía", [
        ["≈ 320 M", "hablantes de francés", "var(--pen)"], ["5", "continentes", "var(--leaf)"],
        ["≈ 30", "países con el francés oficial", "var(--red)"], ["20 mars", "Journée de la francophonie", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>¿Por qué se habla en tantos sitios?</h3><p>Por la <b>historia</b>: Francia y Bélgica tuvieron <mark>colonias</mark> en África, América, Asia y Oceanía. Tras la independencia, muchos países mantuvieron el francés como lengua oficial, de enseñanza o de comunicación entre pueblos que hablan lenguas distintas (wolof, lingala, árabe, criollo…).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de continentes francófonos con ejemplos de países">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <circle cx="130" cy="90" r="30" fill="var(--pen)"/><text x="130" y="95" font-size="14" fill="#fff">français</text>
          <g font-size="12">
            <rect x="12" y="16" width="86" height="36" rx="10" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="55" y="31" fill="var(--inf)">Europe</text><text x="55" y="45" font-size="10" fill="var(--ink)">Belgique, Suisse</text>
            <rect x="162" y="16" width="86" height="36" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="205" y="31" fill="var(--red)">Amérique</text><text x="205" y="45" font-size="10" fill="var(--ink)">Québec, Haïti</text>
            <rect x="12" y="128" width="86" height="36" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="55" y="143" fill="var(--leaf)">Afrique</text><text x="55" y="157" font-size="10" fill="var(--ink)">Sénégal, Congo</text>
            <rect x="162" y="128" width="86" height="36" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><text x="205" y="143" fill="var(--muted)">Océanie · Asie</text><text x="205" y="157" font-size="10" fill="var(--ink)">Polynésie</text>
          </g>
          <path d="M100 66 L 98 52 M160 66 L 162 52 M100 114 L 98 128 M160 114 L 162 128" stroke="var(--line)" stroke-width="3"/>
        </g></svg>`,
    },
    {
      html: `<h3>La OIF</h3><p>La <b>Organisation internationale de la Francophonie</b> (OIF) reúne a <mark>más de 80 Estados y gobiernos</mark> que comparten el francés y unos valores: democracia, derechos humanos, diversidad cultural y educación. El <b>20 de marzo</b> es la Journée internationale de la Francophonie.</p>`,
      svg: L.filas("La Organisation internationale de la Francophonie", [
        ["Qui ?", "plus de 80 États et gouvernements", "var(--pen)"],
        ["Quoi ?", "langue, éducation, démocratie", "var(--leaf)"],
        ["Quand ?", "fête le 20 mars", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Muchas formas de hablar francés</h3><p>Como el español, el francés tiene variedades. En <b>Bélgica y Suiza</b> se dice <i>septante</i> (70) y <i>nonante</i> (90) en lugar de <i>soixante-dix</i> y <i>quatre-vingt-dix</i>. En <b>Quebec</b>: <i>magasiner</i> (ir de compras), <i>un char</i> (un coche), <i>la fin de semaine</i> (el fin de semana).</p>`,
      svg: L.tabla("Palabras del francés de Francia, Bélgica y Quebec", ["France", "Belgique / Québec"], [
        ["soixante-dix", "septante (BE)"], ["quatre-vingt-dix", "nonante (BE)"], ["faire du shopping", "magasiner (QC)"], ["le week-end", "fin de semaine"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Cultura francófona</h3><p>Autores como el senegalés <b>Léopold Sédar Senghor</b> (poeta y presidente, impulsor de la <i>négritude</i>), el belga <b>Hergé</b> (Tintín), la quebequesa <b>Céline Dion</b>, el belga <b>Stromae</b> o la franco-maliense <b>Aya Nakamura</b>. La francofonía es también música, cómic, cine y gastronomía (poutine, moules-frites, thiéboudienne).</p>`,
      svg: L.filas("Figuras de la cultura francófona", [
        ["Senghor", "poésie · Sénégal", "var(--leaf)"], ["Hergé", "BD Tintin · Belgique", "var(--pen)"],
        ["Céline Dion", "chanson · Québec", "var(--red)"], ["Stromae", "musique · Belgique", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "El francés en cinco continentes",
    svg: L.columnas("Ejemplos de países francófonos por continente", [
      ["origen de la lengua", "EUROPE", ["France · Belgique", "Suisse · Luxembourg"], "var(--inf)"],
      ["la mayoría de hablantes", "AFRIQUE", ["Sénégal · Congo", "Côte d'Ivoire"], "var(--leaf)"],
      ["el francés de América", "AMÉRIQUE", ["Québec · Haïti", "Guyane"], "var(--red)"],
      ["islas del Pacífico", "OCÉANIE", ["Polynésie", "Vanuatu"], "var(--muted)"],
    ]),
  },
  video: { id: "mQvn8Vw-vAE", titulo: "Le français dans le monde (Karambolage)", canal: "ARTE", vistas: 389615, megusta: 7213, busqueda: "la francophonie" },
  quiz: [
    { q: "¿En qué continente vive la mayoría de francófonos?", o: ["Europa", "África", "América"], a: 1, e: "Más de la mitad vive en África." },
    { q: "¿Qué día se celebra la francofonía?", o: ["14 de julio", "20 de marzo", "1 de mayo"], a: 1, e: "Journée internationale de la Francophonie: 20 de marzo." },
    { q: "En Bélgica, 90 se dice…", o: ["quatre-vingt-dix", "nonante", "neuftante"], a: 1, e: "Nonante en Bélgica y Suiza." },
    { q: "¿Qué significa OIF?", o: ["Organisation internationale de la Francophonie", "Office international du français", "Olympiades internationales françaises"], a: 0, e: "Reúne a más de 80 Estados y gobiernos." },
    { q: "Hergé, creador de Tintín, era…", o: ["francés", "belga", "suizo"], a: 1, e: "Georges Remi, «Hergé», era belga." },
  ],
  examen: [
    { q: "¿Por qué se habla francés en Senegal?", o: ["Por la colonización francesa", "Por la cercanía a Francia", "Por casualidad"], a: 0, e: "Fue colonia francesa y mantuvo el francés como lengua oficial." },
    { q: "En Quebec, «magasiner» significa…", o: ["ir de compras", "trabajar", "almacenar"], a: 0, e: "Equivale a «faire du shopping»." },
    { q: "¿Qué país NO es francófono?", o: ["Suiza", "Haití", "Brasil"], a: 2, e: "En Brasil se habla portugués." },
  ],
  feynman: ["Qué es la francofonía y cuántos hablantes tiene", "Por qué se habla francés en África y América", "Qué hace la OIF", "Dos diferencias entre el francés de Francia y el de otros países"],
  mapa: mapa("FRANCOPHONIE", "var(--eso)", [
    ["Chiffres", "≈ 320 millions · 5 continents", "var(--pen)"],
    ["Histoire", "colonisation · indépendances", "var(--leaf)"],
    ["OIF", "plus de 80 membres · 20 mars", "var(--red)"],
    ["Variétés", "septante · magasiner", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Francophonie", "Conjunto de personas y países que hablan francés (unos 320 millones)."],
    ["OIF", "Organisation internationale de la Francophonie: más de 80 Estados y gobiernos."],
    ["20 de marzo", "Journée internationale de la Francophonie."],
    ["Septante y nonante", "70 y 90 en Bélgica y Suiza."],
    ["Léopold Sédar Senghor", "Poeta senegalés y presidente; impulsor de la négritude."],
  ],
  familias: ["Escuchad juntos una canción de Stromae o de un artista africano francófono.", "Buscad en el mapa tres países francófonos de África y apuntad su capital.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Interculturalidad: la francofonía, diversidad lingüística y cultural de los países de habla francesa (RD 217/2022, Segunda Lengua Extranjera 4º).",
    ideas: ["Exposición por grupos: cada uno presenta un país francófono.", "Escucha comparada de acentos (Quebec, Bélgica, Senegal).", "Celebrar el 20 de marzo con un mural de la clase."],
  },
  fuentes: [
    L.BOE,
    { t: "Organisation internationale de la Francophonie (OIF)", url: "https://www.francophonie.org/" },
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
  ],
  revisado: "2026-11-12",
};
