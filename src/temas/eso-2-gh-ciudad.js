// Geografía e Historia 2º ESO. Dibujos propios en SVG.
const { tema, H, tabla, F } = require("./_eso2d");
const V = require("./_eso2d-videos");

// Dibujo propio: los tres tipos de plano urbano.
const planos = `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tipos de plano urbano: irregular con calles torcidas, ortogonal en cuadrícula y radiocéntrico con anillos y radios">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <g fill="none" stroke-width="3" stroke-linecap="round">
    <path d="M14 40 C 30 52, 34 70, 26 90 M18 70 C 40 66, 56 76, 70 64 M40 30 C 46 60, 60 80, 56 120 M20 112 C 40 104, 56 110, 74 100" stroke="var(--red)"/>
    <path d="M98 34 V 120 M120 34 V 120 M142 34 V 120 M164 34 V 120 M98 34 H 164 M98 56 H 164 M98 78 H 164 M98 100 H 164 M98 120 H 164" stroke="var(--pen)"/>
    <circle cx="216" cy="77" r="16" stroke="var(--leaf)"/><circle cx="216" cy="77" r="36" stroke="var(--leaf)"/>
    <path d="M216 37 V 117 M176 77 H 256 M188 49 L 244 105 M244 49 L 188 105" stroke="var(--leaf)" stroke-width="2"/>
  </g>
  <g ${F} font-size="12" font-weight="700" text-anchor="middle" fill="var(--ink)"><text x="44" y="150">irregular</text><text x="131" y="150">ortogonal</text><text x="216" y="150">radiocéntrico</text></g>
</svg>`;

module.exports = tema({
  materia: "Geografía e Historia",
  titulo: "La ciudad",
  objetivos: ["Distinguir el espacio urbano del rural con varios criterios", "Explicar las funciones de las ciudades y la jerarquía urbana", "Reconocer los tipos de plano y las partes de una ciudad", "Analizar los problemas urbanos y las propuestas de ciudad sostenible"],
  claves: ["ciudad", "urbanización", "funciones urbanas", "plano", "casco antiguo", "ensanche", "periferia", "área metropolitana", "megalópolis"],
  pregunta: [
    "En 1950, menos de un tercio de la humanidad vivía en ciudades. Hoy lo hace más de la mitad, y en 2050 serán casi siete de cada diez personas. ¿Por qué tanta gente deja el campo para vivir en la ciudad, y qué problemas trae eso?",
    "Porque en la ciudad se concentran el <mark>empleo</mark> en la industria y los servicios, los hospitales, las universidades, el ocio y las comunicaciones. Pero el crecimiento rápido genera <b>problemas</b>: atascos, contaminación, vivienda cara y, en los países pobres, enormes barrios de chabolas sin agua ni alcantarillado. El reto es lograr ciudades más <b>sostenibles</b>.",
  ],
  bloques: [
    ["¿Qué es una ciudad?", `<p>No es fácil definir una ciudad. Se usan varios <b>criterios</b>. El <b>número de habitantes</b>: en España se considera urbano un municipio de más de 10 000 habitantes, pero en Dinamarca basta con 200 y en Japón hacen falta 50 000. La <b>densidad</b>: en la ciudad viven muchas personas en poco espacio y los edificios son altos.</p><p>Las <b>actividades económicas</b>: en la ciudad la mayoría trabaja en la industria y sobre todo en los <b>servicios</b>, mientras que en el campo predominan la agricultura y la ganadería. Y el <b>modo de vida</b>: en la ciudad hay más anonimato, más ritmo y más oferta de cultura y ocio. Todo esto forma el <mark>espacio urbano</mark>, frente al <b>espacio rural</b>.</p>`,
      H.dos("Espacio urbano y espacio rural", ["Urbano", ["muchos habitantes", "alta densidad", "industria", "y servicios", "edificios altos"], "var(--pen)"], ["Rural", ["pocos habitantes", "baja densidad", "agricultura", "y ganadería", "casas bajas"], "var(--leaf)"])],
    ["El proceso de urbanización", `<p>La <mark>urbanización</mark> es el aumento de la proporción de población que vive en ciudades. Las primeras ciudades nacieron hace unos 5500 años en Mesopotamia, pero durante milenios la mayoría vivió en el campo. Con la <b>Revolución Industrial</b> (siglo XIX), las fábricas atrajeron a millones de campesinos y las ciudades europeas crecieron muy deprisa.</p><p>Hoy la tasa de urbanización supera el <b>80 %</b> en Europa occidental y América, y en España ronda el 81 %. En África y Asia todavía es menor, pero allí las ciudades crecen a un ritmo enorme. Muchas de las mayores ciudades del mundo están ya en países en desarrollo: Delhi, Shanghái, Daca, El Cairo, Lagos o Ciudad de México.</p>`,
      H.barras("Población urbana por continentes (%)", [["América N.", 83, "var(--pen)", "83 %"], ["Europa", 75, "var(--leaf)", "75 %"], ["Asia", 53, "var(--sun)", "53 %"], ["África", 45, "var(--red)", "45 %"]], 100), V.gh11b],
    ["Las funciones de la ciudad", `<p>Las ciudades cumplen distintas <mark>funciones</mark>, es decir, actividades que realizan para sus habitantes y para su entorno. La función <b>comercial</b> y de <b>servicios</b> es la más extendida: tiendas, bancos, hospitales, escuelas. La función <b>industrial</b> fue clave en ciudades como Bilbao o Manchester. La <b>político-administrativa</b> la tienen las capitales, como Madrid o Bruselas.</p><p>Otras funciones son la <b>turística</b> (Benidorm, Venecia), la <b>cultural</b> y universitaria (Salamanca, Oxford), la <b>religiosa</b> (Santiago de Compostela, La Meca), la <b>portuaria</b> y de transporte (Algeciras, Róterdam) o la <b>financiera</b> (Londres, Nueva York). Las grandes ciudades suelen tener muchas funciones a la vez.</p>`,
      H.rueda("Funciones urbanas", "FUNCIONES", [["comercial", "var(--sun)"], ["industrial", "var(--muted)"], ["política", "var(--red)"], ["turística", "var(--leaf)"], ["cultural", "var(--pen)"], ["portuaria", "var(--inf)"]], "var(--ink)")],
    ["El plano de la ciudad", `<p>El <mark>plano</mark> es la forma en que se organizan las calles y los espacios de una ciudad. Hay tres tipos principales. El plano <b>irregular</b> tiene calles estrechas y tortuosas, sin orden aparente; es típico de los cascos antiguos medievales y de origen musulmán, como Toledo o el Albaicín de Granada.</p><p>El plano <b>ortogonal</b> o en cuadrícula tiene calles rectas que se cortan en ángulo recto; lo usaron los romanos y es típico de los ensanches del siglo XIX y de las ciudades americanas, como el Eixample de Barcelona o Nueva York. El plano <b>radiocéntrico</b> tiene un centro del que salen calles en forma de radios, cortadas por rondas circulares, como Moscú o el centro de Vitoria.</p>`,
      planos],
    ["Las partes de una ciudad", `<p>Una ciudad europea suele tener tres grandes zonas. El <mark>casco antiguo</mark> o centro histórico es el núcleo más antiguo, a veces amurallado, con plano irregular, monumentos, catedral y ayuntamiento. Hoy concentra comercio, turismo y oficinas, y en muchos casos ha perdido habitantes.</p><p>El <b>ensanche</b> se construyó en los siglos XIX y XX al derribar las murallas, con plano ortogonal, calles anchas y edificios para la burguesía. La <b>periferia</b> rodea a los anteriores: allí están los barrios de viviendas en bloques, las urbanizaciones de chalés, los polígonos industriales, los centros comerciales y las grandes infraestructuras (aeropuertos, depuradoras). Más allá, la ciudad se mezcla con el campo: es el espacio <b>periurbano</b>.</p>`,
      H.filas("Partes de una ciudad europea", [["Centro", "casco antiguo, monumentos", "var(--red)"], ["Ensanche", "siglo XIX, cuadrícula", "var(--pen)"], ["Periferia", "bloques, polígonos", "var(--sun)"], ["Periurbano", "mezcla con el campo", "var(--leaf)"]])],
    ["Los usos del suelo urbano", `<p>El suelo de la ciudad se dedica a distintos <b>usos</b>. El uso <b>residencial</b> (viviendas) ocupa la mayor parte. El <b>comercial y de servicios</b> se concentra en el centro y en las grandes avenidas, y hoy también en centros comerciales de la periferia. El <b>industrial</b> se ha trasladado a polígonos en las afueras.</p><p>Además están los <b>equipamientos</b> (escuelas, hospitales, polideportivos), las <b>zonas verdes</b> (parques y jardines) y las <b>infraestructuras</b> de transporte (calles, estaciones, aeropuertos). Los ayuntamientos regulan estos usos mediante el <mark>plan general de ordenación urbana</mark>, que decide dónde se puede construir y qué.</p>`,
      H.filas("Usos del suelo urbano", [["Vivienda", "uso residencial", "var(--pen)"], ["Comercio", "centro y periferia", "var(--sun)"], ["Industria", "polígonos", "var(--muted)"], ["Equipam.", "escuelas, hospitales", "var(--leaf)"], ["Verde", "parques y jardines", "var(--ok)"]])],
    ["Jerarquía urbana y grandes aglomeraciones", `<p>Las ciudades no tienen la misma importancia: forman una <mark>jerarquía urbana</mark> según su población y la influencia que ejercen sobre otros territorios. En España, Madrid y Barcelona están en la cima; después vienen ciudades regionales como Valencia, Sevilla, Zaragoza o Bilbao, y luego ciudades medias y pequeñas.</p><p>Cuando una gran ciudad crece y absorbe a los municipios cercanos se forma un <b>área metropolitana</b>, como la de Madrid, con más de seis millones de habitantes. Si varias áreas metropolitanas se unen formando una franja urbana continua se habla de <b>megalópolis</b>, como la que va de Boston a Washington. Una <b>megaciudad</b> es la que supera los diez millones de habitantes, como Tokio, Delhi o São Paulo.</p>`,
      H.filas("Jerarquía urbana en España", [["Metrópolis", "Madrid, Barcelona", "var(--red)"], ["Regionales", "Valencia, Sevilla, Bilbao", "var(--sun)"], ["Medias", "capitales de provincia", "var(--pen)"], ["Pequeñas", "cabeceras de comarca", "var(--leaf)"]])],
    ["Los problemas de las ciudades", `<p>Las ciudades de los países desarrollados sufren <b>contaminación</b> del aire y acústica, <b>atascos</b>, falta de aparcamiento, precio muy alto de la <b>vivienda</b> y del alquiler, y desigualdad entre barrios ricos y pobres. En los centros históricos, el turismo masivo ha expulsado a muchos vecinos (<b>gentrificación</b>).</p><p>En los países en desarrollo, las ciudades crecen tan deprisa que no pueden dar servicios a todos. Más de mil millones de personas viven en <mark>barrios de chabolas</mark> (favelas en Brasil, villas miseria en Argentina, slums en la India) sin agua potable, alcantarillado ni electricidad seguros. A esto se suman la inseguridad y la falta de empleo formal.</p>`,
      H.dos("Problemas urbanos", ["Países ricos", ["contaminación", "atascos", "vivienda cara", "turismo masivo", "desigualdad"], "var(--pen)"], ["Países pobres", ["chabolismo", "sin agua ni", "alcantarillado", "trabajo informal", "inseguridad"], "var(--red)"])],
    ["Hacia una ciudad sostenible", `<p>Una <mark>ciudad sostenible</mark> intenta mejorar la vida de sus habitantes sin dañar el medio ambiente ni el futuro. Para ello promueve el <b>transporte público</b>, la bicicleta y los desplazamientos a pie; crea zonas de bajas emisiones y calles peatonales; aumenta los <b>parques</b> y el arbolado, que refrescan y limpian el aire; y fomenta el ahorro de agua y energía y el reciclaje.</p><p>También busca ciudades más compactas, donde los servicios básicos estén cerca de casa (la llamada «ciudad de los 15 minutos»), y vivienda asequible para todos. El Objetivo de Desarrollo Sostenible número 11 de la ONU propone lograr «ciudades y comunidades sostenibles» para 2030.</p>`,
      H.rueda("Medidas para una ciudad sostenible", "CIUDAD|SOSTENIBLE", [["bus y metro", "var(--pen)"], ["bicicleta", "var(--leaf)"], ["parques", "var(--ok)"], ["reciclaje", "var(--sun)"], ["peatones", "var(--red)"], ["energía limpia", "var(--muted)"]], "var(--leaf)")],
  ],
  ejemplos: [
    ["Observa un plano: el centro tiene calles estrechas y torcidas; alrededor, calles rectas en cuadrícula; en las afueras, bloques de pisos y naves industriales. Identifica cada zona.", ["Calles estrechas y torcidas: plano irregular del casco antiguo.", "Cuadrícula alrededor: ensanche del siglo XIX.", "Bloques y naves en las afueras: periferia residencial e industrial."], "Casco antiguo, ensanche y periferia."],
    ["Un municipio tiene 12 000 habitantes, la mayoría trabaja en la agricultura y las casas son bajas. ¿Es urbano o rural?", ["Por número de habitantes (más de 10 000), en España sería urbano.", "Pero por actividad (agricultura) y paisaje (casas bajas), tiene rasgos rurales.", "Hay que combinar criterios."], "Es un caso intermedio: una agrociudad, frecuente en Andalucía o La Mancha."],
    ["Propón tres medidas para reducir la contaminación del aire en tu ciudad.", ["Atacar la causa principal: el tráfico de coches.", "Ofrecer alternativas: transporte público y carriles bici.", "Mejorar el aire: más árboles y zonas verdes."], "Por ejemplo: zona de bajas emisiones, más autobuses y carriles bici, y plantar árboles."],
  ],
  errores: [
    "Pensar que hay un número de habitantes universal para ser ciudad: cada país usa un criterio distinto.",
    "Confundir área metropolitana (una gran ciudad y sus municipios cercanos) con megalópolis (varias áreas metropolitanas unidas).",
    "Creer que el plano ortogonal es moderno: ya lo usaban griegos y romanos.",
    "Llamar ensanche a cualquier barrio nuevo: es el crecimiento planificado de los siglos XIX y XX tras derribar las murallas.",
    "Pensar que las grandes ciudades están sobre todo en Europa: hoy la mayoría están en Asia, África y América Latina.",
  ],
  ejercicios: [
    ["Cita cuatro criterios para distinguir una ciudad de un pueblo.", "Número de habitantes, densidad, actividades económicas (industria y servicios) y modo de vida."],
    ["¿Qué es la urbanización y cuándo se aceleró?", "El aumento de la proporción de población que vive en ciudades. Se aceleró con la Revolución Industrial, en el siglo XIX."],
    ["Pon un ejemplo de ciudad con cada función: turística, religiosa, político-administrativa.", "Turística: Benidorm. Religiosa: Santiago de Compostela. Político-administrativa: Madrid o Bruselas."],
    ["Describe los tres tipos de plano y pon un ejemplo de cada uno.", "Irregular (calles tortuosas): Toledo. Ortogonal (cuadrícula): Eixample de Barcelona. Radiocéntrico (radios y anillos): Moscú."],
    ["¿Qué es el ensanche y cuándo se construyó?", "La ampliación planificada de las ciudades en los siglos XIX y XX tras derribar las murallas, con plano ortogonal y calles anchas."],
    ["¿Qué elementos se encuentran en la periferia?", "Barrios de bloques, urbanizaciones, polígonos industriales, centros comerciales y grandes infraestructuras."],
    ["Diferencia entre área metropolitana y megalópolis.", "Área metropolitana: una gran ciudad y los municipios que dependen de ella. Megalópolis: varias áreas metropolitanas unidas en una franja continua."],
    ["¿Qué es la gentrificación?", "La expulsión de los vecinos de un barrio, normalmente céntrico, por la subida de precios causada por el turismo o la llegada de población con más dinero."],
    ["¿Qué problemas tienen las ciudades de los países en desarrollo?", "Crecimiento muy rápido, barrios de chabolas sin servicios básicos, trabajo informal e inseguridad."],
    ["Cita cuatro medidas de una ciudad sostenible.", "Transporte público, bicicleta, zonas peatonales, más parques, reciclaje, ahorro de agua y energía, vivienda asequible."],
  ],
  figura: ["La ciudad de un vistazo", H.figCols("Esquema de la ciudad", [["Definición", ["habitantes", "densidad", "servicios", "modo de vida"], "var(--pen)"], ["Plano", ["irregular", "ortogonal", "radiocéntrico", ""], "var(--red)"], ["Partes", ["casco antiguo", "ensanche", "periferia", "periurbano"], "var(--sun)"], ["Retos", ["contaminación", "vivienda", "chabolismo", "sostenibilidad"], "var(--leaf)"]])],
  video: V.gh11v,
  quiz: [
    ["En España se considera urbano un municipio de más de…", ["10 000 habitantes", "1000 habitantes", "100 000 habitantes"], "Otros países usan otros criterios."],
    ["La urbanización se aceleró con…", ["la Revolución Industrial", "el Imperio romano", "la Edad Media"], "Las fábricas atrajeron campesinos."],
    ["Benidorm tiene sobre todo función…", ["turística", "religiosa", "industrial"], "Por sus playas y hoteles."],
    ["El plano de calles torcidas y estrechas es…", ["irregular", "ortogonal", "radiocéntrico"], "Típico de los cascos antiguos."],
    ["El Eixample de Barcelona tiene plano…", ["ortogonal", "irregular", "radiocéntrico"], "Lo diseñó Ildefons Cerdà."],
    ["Los ensanches se construyeron en los siglos…", ["XIX y XX", "X y XI", "XV y XVI"], "Tras derribar las murallas."],
    ["Los polígonos industriales suelen estar en…", ["la periferia", "el casco antiguo", "el ensanche"], "Por el precio del suelo y el transporte."],
    ["Una ciudad de más de diez millones de habitantes es una…", ["megaciudad", "agrociudad", "aldea"], "Como Tokio o Delhi."],
    ["Las favelas son…", ["barrios de chabolas en Brasil", "plazas mayores", "polígonos industriales"], "Sin servicios básicos seguros."],
    ["El ODS número 11 de la ONU trata de…", ["ciudades sostenibles", "el agua", "la educación"], "Para 2030."],
  ],
  examen: [
    ["La expulsión de vecinos de un barrio por la subida de precios se llama…", ["gentrificación", "urbanización", "éxodo rural"], "Frecuente en los centros turísticos."],
    ["El documento que regula los usos del suelo de un municipio es el…", ["plan general de ordenación urbana", "padrón", "censo"], "Lo aprueba el ayuntamiento."],
    ["La franja urbana de Boston a Washington es una…", ["megalópolis", "área metropolitana", "agrociudad"], "Varias áreas metropolitanas unidas."],
  ],
  feynman: ["Qué diferencia una ciudad de un pueblo", "Qué funciones tienen las ciudades y cómo se ordenan en una jerarquía", "Qué tipos de plano hay y cuáles son las partes de una ciudad", "Qué problemas tienen las ciudades y cómo hacerlas sostenibles"],
  mapa: ["LA CIUDAD", "var(--pen)", [["Urbanización", "más del 55 % urbano", "var(--sun)"], ["Funciones", "comercio · turismo · capital", "var(--red)"], ["Morfología", "plano · centro · periferia", "var(--pen)"], ["Retos", "contaminación · sostenible", "var(--leaf)"]], 240],
  tarjetas: [
    ["Urbanización", "Aumento de la población que vive en ciudades."],
    ["Funciones urbanas", "Actividades de una ciudad: comercial, industrial, turística, política…"],
    ["Plano irregular", "Calles estrechas y tortuosas, típico de cascos antiguos."],
    ["Plano ortogonal", "Calles rectas en cuadrícula."],
    ["Ensanche", "Ampliación planificada de los siglos XIX y XX tras derribar las murallas."],
    ["Área metropolitana", "Gran ciudad y municipios cercanos que dependen de ella."],
    ["Megalópolis", "Varias áreas metropolitanas unidas en una franja urbana."],
    ["Ciudad sostenible", "Ciudad que mejora la vida sin dañar el medio ambiente."],
  ],
  familias: ["Mirad juntos el plano de vuestra ciudad o pueblo en un mapa digital y buscad el casco antiguo, el ensanche y la periferia.", "Haced una lista de lo que mejoraríais en vuestro barrio para que fuera más sostenible."],
  saberes: "Sociedades y territorios: el espacio urbano, la urbanización, las funciones, la morfología y la jerarquía urbanas, los problemas y la sostenibilidad de las ciudades (RD 217/2022, Geografía e Historia, primer ciclo).",
  ideas: ["Itinerario por el propio municipio identificando plano, partes y usos del suelo.", "Comparar fotografías aéreas de la ciudad hoy y hace 50 años.", "Proyecto: rediseñar una calle del barrio con criterios sostenibles."],
  fuentes: [["ONU-Hábitat", "https://unhabitat.org/es"], ["Objetivo de Desarrollo Sostenible 11", "https://www.un.org/sustainabledevelopment/es/cities/"]],
});
