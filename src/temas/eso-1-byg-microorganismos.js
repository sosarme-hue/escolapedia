// Biología y Geología 1º ESO: los microorganismos. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "Los microorganismos",
  minutos: 55,
  objetivos: ["Definir qué son los microorganismos y reconocer sus grupos principales", "Describir las características de bacterias, protozoos, algas microscópicas y hongos microscópicos", "Explicar qué es un virus y por qué no se considera un ser vivo", "Valorar el papel beneficioso y perjudicial de los microorganismos y las medidas para prevenir infecciones"],
  claves: ["microorganismo", "microbio", "bacteria", "protozoo", "alga unicelular", "levadura", "moho", "virus", "fermentación", "descomponedor", "patógeno", "antibiótico", "vacuna"],
  pregunta: {
    texto: "El pan, el yogur, el queso y el chucrut tienen algo en común con algunas enfermedades como la gripe o una infección de garganta. ¿Qué es?",
    respuesta: "En todos ellos intervienen <b>microorganismos</b>, seres vivos (o, en el caso de los virus, partículas) tan pequeños que no se ven a simple vista. Las <b>levaduras</b> hacen que suba la masa del pan; ciertas <b>bacterias</b> convierten la leche en yogur o queso y la col en chucrut. Pero otros microorganismos son <b>patógenos</b>: causan enfermedades, como el virus de la gripe o algunas bacterias de la garganta. La mayoría, sin embargo, son inofensivos o beneficiosos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son los microorganismos?</h3><p>Los <mark>microorganismos</mark> o <b>microbios</b> son seres vivos <b>tan pequeños que solo se pueden ver con un microscopio</b>. La mayoría son unicelulares, aunque algunos forman grupos o filamentos. Se miden en <b>micrómetros</b> (µm), es decir, milésimas de milímetro: en la cabeza de un alfiler cabrían miles de bacterias. A pesar de su tamaño, son los seres vivos <b>más abundantes y extendidos</b> del planeta: están en el suelo (en una cucharadita de tierra fértil hay más bacterias que personas en la Tierra), en el agua dulce y salada, en el aire, en los polos y en las fuentes termales, y también <b>dentro y fuera de nuestro cuerpo</b>. Pertenecen a reinos distintos: las <b>bacterias</b> (Moneras), los <b>protozoos</b> y las <b>algas microscópicas</b> (Protoctistas) y los <b>hongos microscópicos</b>, como las levaduras y los mohos (Hongos). Los <b>virus</b> se estudian junto a ellos, aunque no son seres vivos. La ciencia que estudia los microorganismos es la <b>microbiología</b>.</p>`,
    },
    {
      html: `<h3>Las bacterias</h3><p>Las <mark>bacterias</mark> son los microorganismos más sencillos y abundantes. Son <b>unicelulares y procariotas</b>: no tienen núcleo, y su ADN está libre en el citoplasma. Tienen una <b>pared celular</b> rígida y muchas se desplazan con <b>flagelos</b>. Miden entre 1 y 10 µm. Se clasifican por su forma: los <b>cocos</b> son esféricos (y pueden ir en parejas, en cadenas o en racimos); los <b>bacilos</b> tienen forma de bastón; los <b>espirilos</b>, de espiral o sacacorchos; y los <b>vibrios</b>, de coma. Se reproducen de forma <b>asexual</b>, dividiéndose en dos (bipartición), y en buenas condiciones pueden hacerlo cada 20 minutos, por lo que una sola bacteria podría originar millones en pocas horas. Pueden tener nutrición autótrofa (como las <b>cianobacterias</b>, que hacen la fotosíntesis) o heterótrofa. Cuando las condiciones son malas, algunas forman <b>esporas</b> muy resistentes que pueden sobrevivir años.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Formas de las bacterias: cocos esféricos, bacilos en forma de bastón, espirilos en espiral y vibrios en forma de coma">${BG}
        <circle cx="36" cy="60" r="9" fill="#a78bfa"/><circle cx="54" cy="60" r="9" fill="#a78bfa"/><circle cx="45" cy="76" r="9" fill="#a78bfa"/>${t(45, 108, "cocos", { size: 11 })}
        <rect x="88" y="46" width="44" height="14" rx="7" fill="#34d399"/><rect x="94" y="68" width="44" height="14" rx="7" fill="#34d399"/>${t(113, 108, "bacilos", { size: 11 })}
        <path d="M160 64 q 8 -16 16 0 t 16 0 t 16 0" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>${t(184, 108, "espirilos", { size: 11 })}
        <path d="M228 56 q 18 8 4 26" fill="none" stroke="#fb7185" stroke-width="8" stroke-linecap="round"/>${t(232, 108, "vibrios", { size: 11 })}
        ${t(130, 150, "1 µm = 0,001 mm", { size: 11, color: COL.azul })}</svg>`,
    },
    {
      html: `<h3>Protozoos y algas microscópicas</h3><p>Los <mark>protozoos</mark> son seres <b>unicelulares eucariotas</b> (con núcleo) y <b>heterótrofos</b>: se alimentan de bacterias, de otros protozoos o de restos orgánicos. Viven en lugares húmedos, sobre todo en el agua, y la mayoría pueden desplazarse. Se clasifican según cómo se mueven: la <b>ameba</b> lo hace con <b>pseudópodos</b> («falsos pies»), prolongaciones de su cuerpo que también usa para rodear y atrapar el alimento; el <b>paramecio</b> está cubierto de <b>cilios</b>, pelillos que baten como remos; y otros, como el tripanosoma, se mueven con flagelos. Algunos son parásitos y causan enfermedades, como el <i>Plasmodium</i>, que transmiten ciertos mosquitos y provoca la malaria. Las <mark>algas unicelulares</mark> también son eucariotas, pero son <b>autótrofas</b>: tienen cloroplastos y hacen la fotosíntesis. Las <b>diatomeas</b>, con un caparazón de sílice, y otras algas microscópicas forman el <b>fitoplancton</b>, que flota en mares y lagos, es la base de las cadenas alimentarias acuáticas y produce una gran parte del oxígeno del planeta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una ameba con pseudópodos, un paramecio con cilios y una diatomea con caparazón">${BG}
        <path d="M30 70 q 10 -30 30 -14 q 24 -16 26 10 q 22 10 4 26 q 0 24 -24 16 q -20 16 -30 -4 q -24 -6 -6 -34 Z" fill="#93c5fd" fill-opacity=".7" stroke="#1d4ed8" stroke-width="1.5"/><circle cx="58" cy="84" r="8" fill="#6d28d9"/>${t(60, 140, "ameba", { size: 11 })}
        <ellipse cx="136" cy="84" rx="34" ry="16" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
        ${Array.from({ length: 18 }, (_, i) => { const a = (i / 18) * Math.PI * 2; const x = 136 + 34 * Math.cos(a), y = 84 + 16 * Math.sin(a); return `<path d="M${x.toFixed(1)} ${y.toFixed(1)} l ${(5 * Math.cos(a)).toFixed(1)} ${(5 * Math.sin(a)).toFixed(1)}" stroke="#15803d" stroke-width="1.2"/>`; }).join("")}
        <circle cx="136" cy="84" r="6" fill="#6d28d9"/>${t(136, 140, "paramecio", { size: 11 })}
        <ellipse cx="216" cy="84" rx="26" ry="12" fill="#fde68a" stroke="#a16207" stroke-width="2"/>${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M${198 + i * 6} 76 v 16" stroke="#a16207" stroke-width="1"/>`).join("")}${t(216, 140, "diatomea", { size: 11 })}
        ${t(98, 30, "protozoos", { size: 10.5, color: COL.azul })}${t(216, 30, "alga", { size: 10.5, color: COL.verde })}</svg>`,
    },
    {
      html: `<h3>Hongos microscópicos</h3><p>Muchos hongos son microscópicos. Las <mark>levaduras</mark> son hongos <b>unicelulares</b>, con forma ovalada, que se reproducen formando una pequeña yema que se separa (<b>gemación</b>). Se alimentan de azúcares y, al hacerlo sin oxígeno, producen <b>dióxido de carbono</b> y <b>alcohol</b>: es la <b>fermentación</b>. Por eso se usan para hacer pan (el CO₂ forma burbujas que hacen subir la masa, y el alcohol se evapora en el horno), vino, cerveza o sidra. Los <mark>mohos</mark> son hongos pluricelulares formados por filamentos muy finos llamados <b>hifas</b>, que forman una especie de pelusa o algodón sobre los alimentos que se estropean, como el pan o la fruta; se reproducen por <b>esporas</b>, que son las que les dan su color verde, negro o blanco y que viajan por el aire. Algunos mohos son muy útiles: el <i>Penicillium</i> da sabor a quesos como el cabrales o el roquefort, y de una especie de este mismo género se obtuvo la <b>penicilina</b>, el primer antibiótico.</p>`,
    },
    {
      html: `<h3>Los virus</h3><p>Los <mark>virus</mark> son partículas <b>mucho más pequeñas que las bacterias</b> (se miden en nanómetros, millonésimas de milímetro) y solo se pueden ver con un microscopio electrónico. Están formados por <b>material genético</b> (ADN o ARN) rodeado por una cubierta de proteínas llamada <b>cápsida</b>; algunos tienen además una envoltura externa. <b>No tienen células</b>, no se nutren, no se relacionan y no pueden reproducirse por sí mismos. Para multiplicarse tienen que <b>entrar en una célula</b> y usar su maquinaria para fabricar miles de copias de sí mismos, que luego salen y destruyen o dañan la célula. Por eso se dice que son <b>parásitos obligados</b> y la mayoría de los científicos <b>no los considera seres vivos</b>. Todos los virus conocidos causan infecciones en algún ser vivo: en personas (gripe, resfriado, sarampión, varicela, COVID-19), en animales, en plantas e incluso en bacterias. Los antibióticos <b>no sirven contra los virus</b>; se combaten con las defensas del cuerpo, con vacunas y, en algunos casos, con medicamentos antivirales.</p>${tabla(["", "Bacteria", "Virus"], [["¿Tiene células?", "sí, una (procariota)", "no"], ["Tamaño", "micrómetros", "nanómetros (mucho menor)"], ["¿Se reproduce sola?", "sí, por bipartición", "no, necesita una célula"], ["¿Ser vivo?", "sí", "se considera que no"], ["Tratamiento", "antibióticos", "defensas, vacunas, antivirales"]])}`,
      video: { id: "O2hSkXVHpuE", titulo: "Virus vs. bacterias - ¿Cuáles son sus diferencias?", canal: "Smile and Learn - Español", vistas: 1174155 },
    },
    {
      html: `<h3>Microorganismos beneficiosos</h3><p>La mayoría de los microorganismos son <b>inofensivos o beneficiosos</b>, y la vida en la Tierra sería imposible sin ellos. En la naturaleza, las bacterias y los hongos son <mark>descomponedores</mark>: transforman los restos de seres vivos (hojas caídas, cadáveres, excrementos) en sales minerales que las plantas vuelven a usar, cerrando así el ciclo de la materia. Algunas bacterias del suelo fijan el nitrógeno del aire y lo ponen a disposición de las plantas, y el fitoplancton produce oxígeno. En nuestro cuerpo vive la <mark>microbiota</mark>, billones de bacterias, sobre todo en el intestino, que nos ayudan a digerir, fabrican algunas vitaminas y nos protegen de microbios dañinos. En la <b>alimentación</b> se usan para hacer yogur, queso, kéfir, pan, vino, vinagre o encurtidos. En la <b>medicina</b> se obtienen de ellos antibióticos y se usan para fabricar vacunas e insulina. Y en el <b>medio ambiente</b> se emplean en las depuradoras para limpiar el agua, para hacer compost y para eliminar vertidos de petróleo.</p>`,
      video: { id: "bZ6sFXW5o0g", titulo: "¿Las bacterias son malas? ¡Sin bacterias no existirías!", canal: "CuriosaMente", vistas: 925378 },
    },
    {
      html: `<h3>Microorganismos perjudiciales</h3><p>Algunos microorganismos son <mark>patógenos</mark>, es decir, causan <b>enfermedades infecciosas</b> al entrar en el cuerpo y multiplicarse. Entre las enfermedades causadas por <b>bacterias</b> están la tuberculosis, el tétanos, la salmonelosis (por alimentos contaminados), la caries o algunas anginas. Entre las causadas por <b>virus</b>, la gripe, el resfriado, el sarampión, la varicela o la COVID-19. Algunos <b>protozoos</b> causan la malaria o la enfermedad del sueño, y algunos <b>hongos</b> causan el pie de atleta o las candidiasis. Las enfermedades infecciosas son <b>contagiosas</b>: se transmiten por el aire (al toser o estornudar), por contacto directo, por agua o alimentos contaminados, o a través de animales como los mosquitos. Además, los microorganismos también <b>estropean los alimentos</b>, como cuando la fruta se pudre o la leche se agria, y algunos producen sustancias tóxicas, por lo que es importante conservar bien la comida.</p>`,
    },
    {
      html: `<h3>Prevenir y curar las infecciones</h3><p>Muchas infecciones se pueden <b>prevenir</b> con medidas sencillas de <mark>higiene</mark>: lavarse las manos con agua y jabón, sobre todo antes de comer y después de ir al baño; taparse con el codo al toser o estornudar; no compartir vasos ni cepillos de dientes; cocinar bien la carne y el huevo, lavar frutas y verduras y guardar los alimentos en el frigorífico. Las <mark>vacunas</mark> son la forma más eficaz de prevenir muchas enfermedades: contienen microbios muertos o debilitados, o partes de ellos, que <b>enseñan al sistema inmunitario</b> a reconocerlos sin ponernos enfermos, de modo que, si más tarde llega el microbio de verdad, las defensas lo eliminan rápidamente. La primera vacuna, contra la viruela, la desarrolló Edward Jenner en 1796. Para <b>curar</b> las infecciones bacterianas se usan los <mark>antibióticos</mark>, descubiertos por Alexander Fleming en 1928. Pero hay que usarlos <b>solo cuando los receta un médico</b>, tomarlos todos los días indicados y <b>nunca para virus</b>, porque su mal uso hace que aparezcan bacterias resistentes a ellos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro formas de prevenir y curar: lavarse las manos, vacunas, conservar bien los alimentos y antibióticos solo con receta">${BG}
        ${cj(14, 20, 112, 60, "manos limpias", COL.agua)}${cj(134, 20, 112, 60, "vacunas", COL.verde)}${cj(14, 100, 112, 60, "comida segura", COL.sol)}${cj(134, 100, 112, 60, "antibiótico", COL.rojo)}
        ${et(70, 72, "agua y jabón", 100, { size: 9, weight: 400 })}${et(190, 72, "entrenan las defensas", 100, { size: 9, weight: 400 })}${et(70, 152, "frío y bien cocinada", 100, { size: 9, weight: 400 })}${et(190, 152, "solo con receta", 100, { size: 9, weight: 400 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Los microorganismos de un vistazo",
    svg: rejilla([
      ["Bacterias", "procariotas: cocos, bacilos…", COL.morado],
      ["Protozoos", "ameba, paramecio", COL.azul],
      ["Algas", "fitoplancton: dan oxígeno", COL.verde],
      ["Levaduras", "fermentación: pan, vino", COL.sol],
      ["Mohos", "hifas y esporas", COL.marron],
      ["Virus", "sin células: no son seres vivos", COL.rojo],
      ["Beneficiosos", "descomponedores y microbiota", COL.agua],
      ["Prevención", "higiene, vacunas, antibióticos", COL.naranja],
    ], 4, 86, "Resumen: bacterias, protozoos, algas, levaduras, mohos, virus, beneficios y prevención"),
  },
  video: { id: "sjXegsXg7V8", titulo: "¿Qué son los Microorganismos? - Las bacterias, los virus y los hongos para niños", canal: "Smile and Learn - Español", vistas: 2124026, megusta: 0, busqueda: "los microorganismos bacterias virus hongos" },
  ejemplos: [
    { enunciado: "Una bacteria se divide en dos cada 20 minutos. Si empezamos con una, ¿cuántas habrá al cabo de 2 horas?",
      pasos: ["En 2 horas hay 120 minutos, es decir, 6 periodos de 20 minutos.", "En cada periodo se duplican: 1 → 2 → 4 → 8 → 16 → 32 → 64.", "Es lo mismo que 2⁶ = 64."],
      resultado: "64 bacterias (y en 10 horas, más de mil millones)." },
    { enunciado: "Pedro tiene gripe y quiere tomar los antibióticos que sobraron de su hermano. ¿Es buena idea?",
      pasos: ["La gripe la causa un virus.", "Los antibióticos solo actúan contra bacterias.", "Además, solo se deben tomar con receta, y el mal uso crea bacterias resistentes."],
      resultado: "No: no le curarán y además es un mal uso de los antibióticos." },
    { enunciado: "Haces dos masas de pan iguales, pero solo a una le añades levadura. Al cabo de una hora, ¿qué ocurre y por qué?",
      pasos: ["La levadura es un hongo unicelular que se alimenta de los azúcares de la harina.", "Al fermentar libera dióxido de carbono, que forma burbujas en la masa.", "La masa sin levadura no tiene quien produzca gas."],
      resultado: "Solo sube la masa con levadura, por el CO₂ de la fermentación." },
  ],
  errores: [
    "Pensar que todos los microorganismos son malos: la mayoría son inofensivos o beneficiosos.",
    "Tomar antibióticos para la gripe o el resfriado, que los causan virus.",
    "Creer que los virus son bacterias pequeñas: no tienen células.",
    "Confundir protozoos (heterótrofos) con algas unicelulares (autótrofas).",
    "Dejar un tratamiento antibiótico a medias porque ya te encuentras bien.",
  ],
  ejercicios: [
    { q: "¿Qué es un microorganismo? ¿En qué unidad se miden?", sol: "Un ser vivo que solo se ve con microscopio; en micrómetros (milésimas de milímetro)." },
    { q: "Nombra los cuatro tipos de bacterias según su forma.", sol: "Cocos, bacilos, espirilos y vibrios." },
    { q: "¿Cómo se reproducen las bacterias?", sol: "De forma asexual, por bipartición: se dividen en dos." },
    { q: "¿En qué se diferencian un protozoo y un alga unicelular?", sol: "Los dos son eucariotas, pero el protozoo es heterótrofo y el alga es autótrofa." },
    { q: "¿Cómo se mueve una ameba? ¿Y un paramecio?", sol: "La ameba con pseudópodos y el paramecio con cilios." },
    { q: "¿Qué es la fermentación y para qué se aprovecha?", sol: "Proceso en el que las levaduras transforman azúcares en CO₂ y alcohol sin oxígeno; para hacer pan, vino o cerveza." },
    { q: "Explica por qué un virus no se considera un ser vivo.", sol: "No tiene células y solo puede reproducirse dentro de una célula ajena." },
    { q: "Escribe tres ejemplos de microorganismos beneficiosos y qué hacen.", sol: "Bacterias del yogur (fermentan la leche), descomponedores del suelo (reciclan la materia) y microbiota intestinal (ayuda a digerir y protege)." },
    { q: "¿Cómo funciona una vacuna?", sol: "Contiene microbios muertos, debilitados o partes de ellos que enseñan al sistema inmunitario a reconocerlos sin enfermar." },
    { q: "Escribe tres normas de higiene para evitar infecciones.", sol: "Lavarse las manos, taparse con el codo al toser y conservar y cocinar bien los alimentos." },
  ],
  quiz: [
    { q: "Las bacterias son células…", o: ["procariotas", "eucariotas", "vegetales"], a: 0, e: "Procariotas." },
    { q: "Una bacteria con forma de bastón es un…", o: ["coco", "bacilo", "vibrio"], a: 1, e: "Bacilo." },
    { q: "El paramecio se mueve con…", o: ["cilios", "pseudópodos", "patas"], a: 0, e: "Cilios." },
    { q: "El fitoplancton está formado sobre todo por…", o: ["algas microscópicas", "virus", "mohos"], a: 0, e: "Algas." },
    { q: "Las levaduras se usan para hacer…", o: ["pan", "plástico", "acero"], a: 0, e: "Pan, vino, cerveza." },
    { q: "Los mohos se reproducen por…", o: ["esporas", "semillas", "huevos"], a: 0, e: "Esporas." },
    { q: "Los virus…", o: ["tienen células", "necesitan otra célula para reproducirse", "son autótrofos"], a: 1, e: "Son parásitos obligados." },
    { q: "Los antibióticos sirven contra…", o: ["bacterias", "virus", "todo"], a: 0, e: "Solo bacterias." },
    { q: "La penicilina la descubrió…", o: ["Fleming", "Jenner", "Linneo"], a: 0, e: "Alexander Fleming, 1928." },
    { q: "Los microorganismos que causan enfermedades se llaman…", o: ["patógenos", "descomponedores", "productores"], a: 0, e: "Patógenos." },
  ],
  examen: [
    { q: "La malaria la causa un…", o: ["protozoo", "virus", "moho"], a: 0, e: "Un protozoo, Plasmodium." },
    { q: "La microbiota intestinal…", o: ["nos ayuda a digerir", "siempre causa enfermedades", "es un virus"], a: 0, e: "Es beneficiosa." },
    { q: "La primera vacuna fue contra la…", o: ["viruela", "gripe", "tuberculosis"], a: 0, e: "Viruela, Jenner, 1796." },
  ],
  feynman: ["Qué grupos de microorganismos existen y en qué se diferencian", "Por qué un virus no es un ser vivo y por qué los antibióticos no le afectan", "Para qué nos sirven los microorganismos"],
  mapa: mapa("MICROBIOS", "var(--eso)", [
    ["Tipos", "bacterias · protozoos · algas · hongos", COL.morado],
    ["Virus", "sin células · parásitos", COL.rojo],
    ["Beneficiosos", "alimentos · suelo · microbiota", COL.verde],
    ["Prevención", "higiene · vacunas · antibióticos", COL.azul],
  ], 300),
  tarjetas: [
    ["Microorganismo", "Ser vivo que solo se ve con microscopio."],
    ["Bacteria", "Procariota unicelular; se reproduce por bipartición."],
    ["Protozoo", "Eucariota unicelular heterótrofo: ameba, paramecio."],
    ["Levadura", "Hongo unicelular que hace la fermentación."],
    ["Virus", "Material genético con cápsida; necesita una célula para multiplicarse."],
    ["Descomponedor", "Microbio que transforma restos orgánicos en sales minerales."],
    ["Vacuna", "Enseña al sistema inmunitario a reconocer un microbio."],
    ["Antibiótico", "Medicamento contra bacterias; no sirve para virus."],
  ],
  familias: ["Haced pan o yogur casero y observad el trabajo de los microorganismos.", "Dejad un trozo de pan húmedo en una bolsa cerrada y observad (sin abrirla) cómo aparece el moho.", "Revisad juntos la cartilla de vacunación y comentad para qué es cada vacuna."],
  profesores: {
    saberes: "Los microorganismos: bacterias, protozoos, algas y hongos microscópicos, virus, su papel en los ecosistemas, la salud, la alimentación y la industria; enfermedades infecciosas, higiene, vacunas y uso responsable de antibióticos (RD 217/2022, Biología y Geología, bloques Seres vivos y Hábitos saludables).",
    ideas: ["Cultivo de microorganismos en placas de agar (con tapa sellada) tras tocarlas con manos sucias y limpias.", "Observación de levaduras al microscopio en agua con azúcar.", "Campaña escolar sobre el uso responsable de antibióticos."],
  },
  fuentes: [RD, wiki("Microorganismo", "Microorganismo"), wiki("Virus", "Virus"), { t: "Plan Nacional frente a la Resistencia a los Antibióticos (AEMPS)", url: "https://www.resistenciaantibioticos.es/" }],
  revisado: REV,
};
