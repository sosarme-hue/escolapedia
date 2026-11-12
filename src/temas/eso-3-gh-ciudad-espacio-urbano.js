// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, piramide, barras, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "La ciudad y el espacio urbano",
  minutos: 35,
  objetivos: ["Distinguir el espacio urbano del rural y explicar el proceso de urbanización", "Reconocer los tipos de plano y las partes de una ciudad", "Analizar la jerarquía urbana y los problemas de las ciudades actuales"],
  claves: ["urbanización", "plano urbano", "casco antiguo", "ensanche", "periferia", "megalópolis"],
  pregunta: {
    texto: "En 1950, solo 3 de cada 10 personas del mundo vivían en ciudades. Hoy son más de 5 de cada 10, y en España, 8 de cada 10. ¿Por qué nos vamos todos a la ciudad?",
    respuesta: "Porque en las ciudades se concentran el <b>trabajo</b> de la industria y los servicios, los <b>hospitales</b>, las <b>universidades</b> y el ocio. La mecanización del campo necesitó menos agricultores y muchos emigraron. A este crecimiento de la población urbana se le llama <mark>urbanización</mark>.",
  },
  bloques: [
    {
      html: `<h3>Espacio urbano y espacio rural</h3><p>El <b>espacio rural</b> tiene poca población, casas dispersas o en pueblos pequeños y predominan las actividades agrarias. El <b>espacio urbano</b> tiene mucha población concentrada, edificios altos, gran densidad y predominan la industria y los <mark>servicios</mark>. En España se suele considerar ciudad un núcleo de más de <b>10.000 habitantes</b>, aunque también cuentan sus funciones y su forma de vida.</p>`,
      svg: dos("Diferencias entre el espacio rural y el urbano", ["Rural", ["poca población", "casas bajas", "agricultura", "ganadería", "naturaleza"], "var(--leaf)"], ["Urbano", ["mucha población", "edificios altos", "industria", "y servicios", "mucho tráfico"], "var(--pen)"]),
    },
    {
      html: `<h3>Un mundo cada vez más urbano</h3><p>Las primeras ciudades nacieron hace unos 5.000 años en Mesopotamia. Pero la gran <mark>urbanización</mark> empezó con la Revolución Industrial en el siglo XIX, cuando millones de campesinos fueron a trabajar a las fábricas. Hoy más del 55 % de la humanidad vive en ciudades. Los países desarrollados están muy urbanizados (más del 75 %); en Asia y África las ciudades crecen ahora muy deprisa.</p>`,
      svg: barras("Porcentaje de población urbana en el mundo", [["1800", 7, "var(--muted)", "7 %"], ["1900", 16, "var(--line)", "16 %"], ["1950", 30, "var(--pen)", "30 %"], ["2020", 56, "var(--red)", "56 %"], ["2050", 68, "var(--sun)", "68 % (prev.)"]], 100),
    },
    {
      html: `<h3>El plano de la ciudad</h3><p>El <b>plano</b> es el dibujo de las calles, plazas y edificios. Hay tres tipos básicos. El <mark>irregular</mark> tiene calles estrechas y tortuosas, típico de los cascos medievales y musulmanes. El <mark>ortogonal</mark> o en cuadrícula tiene calles rectas que se cruzan en ángulo recto, como el Ensanche de Barcelona. El <mark>radiocéntrico</mark> tiene calles que salen de un centro como radios y otras en círculo, como Moscú o el centro de Vitoria.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tipos de plano urbano: irregular, ortogonal y radiocéntrico">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g fill="none" stroke-width="2.5" stroke-linecap="round">
          <path d="M16 40 Q 40 50 34 80 T 56 130 M20 100 Q 40 90 70 104 M40 30 Q 60 60 74 50 M18 130 Q 50 120 72 136" stroke="var(--red)"/>
          <path d="M100 34 V 136 M126 34 V 136 M152 34 V 136 M90 50 H 162 M90 84 H 162 M90 118 H 162" stroke="var(--pen)"/>
          <circle cx="216" cy="86" r="16" stroke="var(--leaf)"/><circle cx="216" cy="86" r="34" stroke="var(--leaf)"/>
          <path d="M216 86 L 216 40 M216 86 L 256 86 M216 86 L 216 132 M216 86 L 176 86 M216 86 L 244 58 M216 86 L 188 114" stroke="var(--leaf)"/>
        </g>
        <g ${F} font-size="11.5" font-weight="700" text-anchor="middle"><text x="44" y="160" fill="var(--red)">irregular</text><text x="126" y="160" fill="var(--pen)">ortogonal</text><text x="216" y="160" fill="var(--leaf)">radiocéntrico</text></g></svg>`,
    },
    {
      html: `<h3>Las partes de una ciudad</h3><p>Muchas ciudades españolas tienen tres partes. El <mark>casco antiguo</mark>, el núcleo más viejo, con monumentos y calles estrechas, a veces rodeado de murallas. El <mark>ensanche</mark>, construido en el siglo XIX y principios del XX para la burguesía, con plano ortogonal y calles anchas. Y la <mark>periferia</mark>, con barrios de bloques, urbanizaciones de chalés, polígonos industriales y centros comerciales.</p>`,
      svg: filas("Las tres partes de una ciudad española", [["Casco antiguo", "monumentos · calles estrechas", "var(--red)"], ["Ensanche", "siglo XIX · cuadrícula", "var(--pen)"], ["Periferia", "barrios · polígonos · chalés", "var(--leaf)"]]),
    },
    {
      html: `<h3>La jerarquía urbana</h3><p>Las ciudades se ordenan según su tamaño y su influencia. Arriba están las <mark>ciudades globales</mark> (Nueva York, Londres, Tokio), que dirigen la economía mundial. Siguen las metrópolis nacionales (Madrid), las regionales (Sevilla, Valencia), las ciudades medias y las pequeñas. Cuando una ciudad absorbe los municipios de alrededor forma un <b>área metropolitana</b>; si varias áreas se unen, surge una <b>megalópolis</b>.</p>`,
      svg: piramide("Jerarquía urbana de mayor a menor influencia", [["global", "var(--red)"], ["metrópoli nacional", "var(--sun)"], ["metrópolis regionales", "var(--leaf)"], ["ciudades medias y pequeñas", "var(--pen)"]]),
    },
  ],
  figura: {
    titulo: "Funciones y problemas de la ciudad",
    svg: figCols("Funciones de la ciudad, problemas y soluciones", [
      ["Funciones", ["administrativa", "comercial", "industrial", "cultural y turística"], "var(--pen)"],
      ["Problemas", ["tráfico y ruido", "contaminación", "vivienda cara", "barrios marginales"], "var(--red)"],
      ["Soluciones", ["transporte público", "zonas verdes", "vivienda social", "ciudad de 15 minutos"], "var(--leaf)"],
    ]),
  },
  video: { id: "fKnAJCSGSdk", titulo: "La urbanización y el futuro de las ciudades", canal: "TED-Ed", vistas: 3050901, megusta: 0, busqueda: "urbanización ciudades" },
  quiz: [
    { q: "En España se suele considerar ciudad un núcleo de más de…", o: ["1.000 habitantes", "10.000 habitantes", "1 millón"], a: 1, e: "Aunque también cuentan sus funciones." },
    { q: "La gran urbanización empezó con…", o: ["el Imperio romano", "la Revolución Industrial", "internet"], a: 1, e: "Los campesinos fueron a trabajar a las fábricas." },
    { q: "Un plano en cuadrícula se llama…", o: ["irregular", "ortogonal", "radiocéntrico"], a: 1, e: "Calles rectas que se cortan en ángulo recto." },
    { q: "El ensanche se construyó sobre todo en…", o: ["la Edad Media", "el siglo XIX", "el siglo XXI"], a: 1, e: "Para la burguesía, fuera de las murallas." },
    { q: "Varias áreas metropolitanas unidas forman…", o: ["una megalópolis", "un casco antiguo", "un pueblo"], a: 0, e: "Como la de Boston a Washington." },
  ],
  examen: [
    { q: "Los cascos antiguos de origen medieval suelen tener plano…", o: ["irregular", "ortogonal", "radiocéntrico"], a: 0, e: "Calles estrechas y tortuosas." },
    { q: "¿Qué es una ciudad global?", o: ["Una ciudad muy grande", "Una ciudad que dirige la economía mundial", "Una capital de país"], a: 1, e: "Concentra sedes de empresas, bolsas y comunicaciones." },
    { q: "Los polígonos industriales están en…", o: ["el casco antiguo", "el ensanche", "la periferia"], a: 2, e: "Necesitan suelo barato y buenas carreteras." },
  ],
  feynman: ["Qué diferencia hay entre espacio rural y urbano", "Por qué se urbanizó el mundo", "Cómo son los tres tipos de plano", "Qué problemas tienen las grandes ciudades"],
  mapa: mapa("LA CIUDAD", "var(--pen)", [
    ["Urbanización", "del campo a la ciudad", "var(--ink)"],
    ["Plano", "irregular · ortogonal · radial", "var(--red)"],
    ["Partes", "casco · ensanche · periferia", "var(--leaf)"],
    ["Jerarquía", "global · metrópolis · medias", "var(--sun)"],
  ], 270),
  tarjetas: [
    ["Urbanización", "Aumento de la población que vive en ciudades."],
    ["Plano ortogonal", "Calles rectas que se cruzan en ángulo recto."],
    ["Casco antiguo", "Núcleo más viejo de la ciudad, con monumentos y calles estrechas."],
    ["Área metropolitana", "Una gran ciudad y los municipios unidos a ella."],
    ["Ciudad global", "Ciudad que dirige la economía mundial, como Londres o Nueva York."],
  ],
  familias: ["Mirad juntos el plano de vuestra localidad y buscad el casco antiguo, el ensanche y la periferia.", "Contad durante un trayecto cuántos medios de transporte distintos veis.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: el proceso de urbanización, la morfología urbana, la jerarquía de ciudades y la sostenibilidad urbana (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Analizar el plano de la propia localidad en un visor de mapas.", "Comparar fotos antiguas y actuales del mismo lugar del municipio.", "Proyecto: diseñar una mejora sostenible para el barrio del centro."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Naciones Unidas: Perspectivas de la urbanización mundial", url: "https://www.un.org/es/desa/68-world-population-projected-live-urban-areas-2050-says-un" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Comparar las ciudades de países ricos y pobres", "Proponer medidas para una ciudad sostenible"],
  bloques: [
    { tras: "Un mundo cada vez más urbano", html: `<h3>Las funciones urbanas</h3><p>Cada ciudad tiene una o varias <b>funciones</b>, es decir, actividades principales que la caracterizan y que dan trabajo a sus habitantes. La función <mark>político-administrativa</mark> aparece en las capitales, donde están los gobiernos y los ministerios. La <b>comercial</b> y la <b>financiera</b>, en ciudades con grandes mercados, bancos y puertos. La <b>industrial</b>, en ciudades con fábricas, como Bilbao en el siglo XX. La <b>cultural</b> y <b>religiosa</b>, en ciudades universitarias (Salamanca) o de peregrinación (Santiago de Compostela). La <b>turística</b>, en ciudades de costa o con un gran patrimonio. Las grandes ciudades suelen ser <b>multifuncionales</b>: reúnen casi todas.</p>` },
    { tras: "El plano de la ciudad", html: `<h3>Los usos del suelo y el paisaje urbano</h3><p>Además del plano, el paisaje de una ciudad depende de la <b>edificación</b> y de los <b>usos del suelo</b>. La edificación puede ser <b>cerrada</b> (edificios pegados formando manzanas, como en el centro) o <b>abierta</b> (bloques separados por espacios libres o chalés con jardín, como en la periferia). Los usos del suelo son <mark>residencial</mark> (viviendas), <b>comercial</b> y de oficinas, <b>industrial</b>, de <b>equipamientos</b> (colegios, hospitales, polideportivos) y de <b>zonas verdes</b> y transporte. Los ayuntamientos los ordenan con el <b>plan general de ordenación urbana</b>, que decide qué se puede construir en cada lugar.</p>`, video: { id: "QEaGGamRiJY", titulo: "¿Cómo han evolucionado históricamente las ciudades y sus planos urbanos?", canal: "La cuna de Halicarnaso", vistas: 76207, megusta: 0 } },
    { tras: "La jerarquía urbana", html: `<h3>Las mayores aglomeraciones del mundo</h3>${tabla(["Aglomeración", "País", "Habitantes (aprox.)"], [["Tokio", "Japón", "37 millones"], ["Delhi", "India", "34 millones"], ["Shanghái", "China", "30 millones"], ["Daca", "Bangladés", "24 millones"], ["São Paulo", "Brasil", "22 millones"], ["Ciudad de México", "México", "22 millones"], ["Madrid", "España", "6,9 millones (área)"]])}<p>Las ciudades de más de 10 millones de habitantes se llaman <mark>megaciudades</mark>. Hay ya más de 30, y la mayoría están en Asia, África y América Latina.</p>` },
    { tras: "La jerarquía urbana", html: `<h3>Ciudades de países ricos y pobres</h3><p>En los <b>países desarrollados</b>, las ciudades crecen despacio, tienen buenos servicios y transporte, y muchas familias se van a vivir a urbanizaciones de las afueras (<b>ciudad difusa</b>), lo que obliga a usar mucho el coche. En los <b>países en desarrollo</b>, las ciudades crecen muy deprisa por la llegada de campesinos pobres. No hay viviendas ni servicios para todos y surgen <mark>barrios de chabolas</mark> sin agua corriente ni alcantarillado: las <i>favelas</i> de Brasil, las <i>villas miseria</i> de Argentina o los <i>slums</i> de la India. Unos 1.000 millones de personas viven hoy en asentamientos así.</p>` },
    { tras: "La jerarquía urbana", html: `<h3>Hacia una ciudad sostenible</h3><p>Las ciudades ocupan solo el 3 % de la superficie terrestre, pero consumen gran parte de la energía y producen más del 70 % de las emisiones de CO₂. Una <mark>ciudad sostenible</mark> reduce ese impacto: potencia el <b>transporte público</b>, la bicicleta y los desplazamientos a pie; crea <b>zonas de bajas emisiones</b>; amplía los parques y los árboles para bajar la temperatura en verano; rehabilita edificios para que gasten menos energía; recicla los residuos y ahorra agua. La idea de la <b>ciudad de 15 minutos</b> busca que cada vecino tenga a esa distancia a pie el colegio, el centro de salud, las tiendas y el parque. Es el objetivo 11 de los ODS de la ONU.</p>` },
  ],
  ejemplos: [
    { enunciado: "Observa un plano: en el centro hay calles estrechas que se cruzan sin orden; alrededor, manzanas cuadradas con chaflanes; y en las afueras, bloques separados y naves industriales. Identifica las partes.", pasos: ["Calles estrechas e irregulares: casco antiguo.", "Manzanas regulares con chaflanes: ensanche del siglo XIX, plano ortogonal.", "Bloques abiertos y naves: periferia residencial e industrial."], resultado: "Casco antiguo, ensanche y periferia, como en Barcelona." },
    { enunciado: "Un país tenía 40 millones de habitantes, de los que 28 millones vivían en ciudades. Calcula su tasa de urbanización.", pasos: ["Tasa de urbanización = población urbana / población total × 100.", "28 / 40 = 0,7.", "0,7 × 100 = 70 %."], resultado: "70 %: un país muy urbanizado." },
    { enunciado: "Propón tres medidas para reducir la contaminación del centro de una ciudad.", pasos: ["Transporte: más autobuses eléctricos, carriles bici y peatonalizar calles.", "Normas: zona de bajas emisiones que limite los coches más contaminantes.", "Naturaleza: plantar árboles y crear zonas verdes."], resultado: "Transporte público, zona de bajas emisiones y más verde urbano." },
  ],
  errores: [
    "Pensar que una ciudad se define solo por el número de habitantes, sin tener en cuenta sus funciones.",
    "Confundir el plano ortogonal (cuadrícula) con el radiocéntrico (círculos y radios).",
    "Creer que el ensanche es la parte más antigua de la ciudad.",
    "Confundir área metropolitana (una ciudad y su entorno) con megalópolis (varias áreas unidas).",
    "Pensar que todas las grandes ciudades del mundo están en países ricos.",
  ],
  ejercicios: [
    { q: "Escribe tres diferencias entre el espacio rural y el urbano.", sol: "Por ejemplo: el urbano tiene más población y densidad, edificios más altos y predominan la industria y los servicios; el rural tiene poca población y predominan la agricultura y la ganadería." },
    { q: "¿Por qué la Revolución Industrial aceleró la urbanización?", sol: "Porque las fábricas se instalaron en las ciudades y necesitaban mucha mano de obra; a la vez, la mecanización del campo dejó sin trabajo a muchos campesinos." },
    { q: "Describe el plano irregular y di dónde aparece.", sol: "Calles estrechas, tortuosas y sin orden, con plazas pequeñas. Aparece en los cascos antiguos de origen medieval o musulmán, como el Albaicín de Granada." },
    { q: "¿Qué se construyó en los ensanches y para quién?", sol: "Barrios nuevos de calles anchas y plano ortogonal, en el siglo XIX y principios del XX, para la burguesía que buscaba viviendas más amplias e higiénicas." },
    { q: "Nombra tres elementos típicos de la periferia.", sol: "Barrios de bloques, urbanizaciones de chalés, polígonos industriales, centros comerciales y grandes infraestructuras." },
    { q: "Ordena de mayor a menor en la jerarquía urbana: Valencia, Nueva York, Teruel, Madrid.", sol: "Nueva York (global), Madrid (metrópoli nacional), Valencia (metrópoli regional), Teruel (ciudad pequeña)." },
    { q: "¿Qué es la ciudad difusa y qué problema causa?", sol: "Es la ciudad que se extiende con urbanizaciones de baja densidad por las afueras. Obliga a usar mucho el coche, lo que aumenta el tráfico y la contaminación." },
    { q: "¿Por qué aparecen chabolas en las ciudades de países en desarrollo?", sol: "Porque llegan muchísimos campesinos pobres en poco tiempo y no hay viviendas ni servicios suficientes para todos." },
    { q: "Calcula la tasa de urbanización de un país con 12 millones de habitantes, de los que 3 viven en ciudades.", sol: "3 / 12 × 100 = 25 %: un país poco urbanizado." },
    { q: "Explica qué es la ciudad de 15 minutos.", sol: "Un modelo de ciudad en el que cada vecino tiene a 15 minutos a pie o en bici los servicios básicos: trabajo, colegio, salud, compras y ocio." },
  ],
  quiz: [
    { q: "Santiago de Compostela destaca por su función…", o: ["industrial", "religiosa y cultural", "financiera"], a: 1, e: "Es meta del Camino de Santiago y ciudad universitaria." },
    { q: "Una megaciudad tiene más de…", o: ["1 millón de habitantes", "10 millones de habitantes", "100 millones"], a: 1, e: "La mayor es Tokio, con unos 37 millones." },
    { q: "Las favelas son…", o: ["barrios de chabolas de Brasil", "barrios ricos", "centros históricos"], a: 0, e: "Asentamientos sin servicios básicos." },
    { q: "El documento que decide qué se construye en cada zona es…", o: ["el plan general de ordenación urbana", "el padrón", "el catastro"], a: 0, e: "Lo aprueba cada ayuntamiento." },
    { q: "La edificación con bloques separados por zonas libres es…", o: ["cerrada", "abierta", "irregular"], a: 1, e: "Típica de la periferia." },
  ],
  tarjetas: [
    ["Megaciudad", "Ciudad o aglomeración de más de 10 millones de habitantes."],
    ["Función urbana", "Actividad principal de una ciudad: administrativa, comercial, industrial, cultural…"],
    ["Ciudad sostenible", "Ciudad que reduce su consumo de energía, sus residuos y su contaminación."],
  ],
});
