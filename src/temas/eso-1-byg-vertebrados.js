// Biología y Geología 1º ESO: los animales vertebrados. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "Los animales vertebrados",
  minutos: 60,
  objetivos: ["Describir las características comunes de los vertebrados", "Distinguir animales de temperatura constante y variable", "Reconocer las características de peces, anfibios, reptiles, aves y mamíferos", "Comparar los grupos de vertebrados y valorar su conservación"],
  claves: ["vertebrado", "columna vertebral", "endoesqueleto", "homeotermo", "poiquilotermo", "peces", "branquias", "anfibios", "metamorfosis", "reptiles", "aves", "mamíferos", "ovíparo", "vivíparo", "glándulas mamarias"],
  pregunta: {
    texto: "El murciélago vuela, la ballena nada y el pingüino no puede volar. ¿Cuál de ellos es un ave, cuál un pez y cuál un mamífero?",
    respuesta: "Ni volar ni nadar sirve para clasificar. El <b>murciélago</b> y la <b>ballena</b> son <b>mamíferos</b>: tienen pelo (la ballena, muy poco, al nacer), respiran por pulmones y las madres amamantan a sus crías con leche. El <b>pingüino</b> es un <b>ave</b>: tiene plumas, pico y pone huevos, aunque sus alas se han convertido en aletas para nadar. Para clasificar vertebrados nos fijamos en la piel, la respiración, la reproducción y la temperatura del cuerpo.",
  },
  bloques: [
    {
      html: `<h3>Características de los vertebrados</h3><p>Los <mark>vertebrados</mark> son animales con un <b>esqueleto interno</b> o <b>endoesqueleto</b>, formado por huesos o cartílagos, que sostiene el cuerpo, permite el movimiento junto con los músculos y protege los órganos. Su pieza principal es la <mark>columna vertebral</mark>, formada por pequeños huesos llamados <b>vértebras</b>, que recorre la espalda y protege la <b>médula espinal</b>. En su extremo delantero está el <b>cráneo</b>, que protege el <b>encéfalo</b>. Todos tienen <b>simetría bilateral</b> y el cuerpo dividido en <b>cabeza, tronco y extremidades</b> (y en muchos casos, cola). Las extremidades pueden ser aletas, patas o alas. Tienen un sistema nervioso muy desarrollado y órganos de los sentidos complejos, aparatos circulatorio, respiratorio, digestivo y excretor, y su reproducción es <b>sexual</b>, con sexos separados (machos y hembras). Aunque solo son alrededor del 5 % de las especies animales, entre ellos están los animales más grandes que han existido, como la ballena azul. Se dividen en cinco grupos: <b>peces, anfibios, reptiles, aves y mamíferos</b>.</p>`,
    },
    {
      html: `<h3>Temperatura constante y variable</h3><p>Una característica importante para clasificar a los vertebrados es cómo regulan la temperatura de su cuerpo. Los animales <mark>poiquilotermos</mark>, que a veces se llaman de «sangre fría», tienen una <b>temperatura variable</b> que depende de la del ambiente; no pueden producir mucho calor por sí mismos, así que, para calentarse, toman el sol, como hacen las lagartijas por la mañana, y en invierno, cuando hace mucho frío, suelen quedar inactivos o hibernar. Son poiquilotermos los <b>peces, los anfibios y los reptiles</b>. Los animales <mark>homeotermos</mark>, de «sangre caliente», mantienen una <b>temperatura constante</b> (unos 37 °C en las personas y unos 40 °C en las aves) gracias al calor que producen con su metabolismo, para lo que necesitan comer mucho más. Tienen la piel cubierta de <b>plumas o pelo</b>, que los aíslan del frío, y pueden estar activos en ambientes fríos. Son homeotermos las <b>aves y los mamíferos</b>.</p>`,
    },
    {
      html: `<h3>Los peces</h3><p>Los <mark>peces</mark> son vertebrados <b>acuáticos</b>, adaptados a vivir en el agua dulce o salada. Su cuerpo suele ser <b>hidrodinámico</b> (alargado y con forma de huso), lo que les permite deslizarse por el agua. Su piel está cubierta de <b>escamas</b> y de una capa de mucosidad. Sus extremidades son <b>aletas</b>, que usan para nadar, equilibrarse y girar, y se impulsan sobre todo con la aleta de la cola. Respiran por <mark>branquias</mark>, que toman el oxígeno disuelto en el agua; las branquias están protegidas por una tapa llamada opérculo. Tienen a los lados del cuerpo la <b>línea lateral</b>, un órgano de los sentidos que capta las vibraciones y los movimientos del agua. Son <b>poiquilotermos</b> y casi todos son <b>ovíparos</b> con fecundación externa: las hembras ponen miles de huevos en el agua y los machos los fecundan allí. Hay dos grupos principales: los <b>peces óseos</b>, con esqueleto de hueso y, en muchos casos, una vejiga natatoria llena de gas para flotar, como la sardina, la trucha o el atún; y los <b>peces cartilaginosos</b>, con esqueleto de cartílago y la boca en la parte de abajo, como los tiburones y las rayas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pez óseo con escamas, aletas, branquias protegidas por el opérculo y línea lateral">${BG}
        <path d="M40 90 Q 100 40 170 80 L 220 50 L 210 90 L 220 130 L 170 100 Q 100 140 40 90 Z" fill="#7dd3fc" stroke="#0369a1" stroke-width="2"/>
        <circle cx="64" cy="84" r="5" fill="#fff" stroke="var(--ink)"/><circle cx="65" cy="84" r="2" fill="var(--ink)"/>
        <path d="M84 70 Q 92 90 84 110" fill="none" stroke="#0369a1" stroke-width="2"/>
        <path d="M70 92 H 190" stroke="#0369a1" stroke-dasharray="3 3"/>
        <path d="M110 62 l 14 -20 l 18 22 Z M110 118 l 12 16 l 14 -16 Z" fill="#38bdf8" stroke="#0369a1"/>
        ${[0, 1, 2, 3].map((i) => `<path d="M${120 + i * 14} 76 q 6 4 0 8" fill="none" stroke="#0369a1" stroke-width="1"/>`).join("")}
        ${t(84, 140, "opérculo", { size: 10 })}${fl(84, 130, 85, 112, "var(--ink)", 1.2)}${t(150, 164, "línea lateral", { size: 10 })}${fl(150, 154, 150, 96, "var(--ink)", 1.2)}
        ${t(214, 148, "aleta caudal", { size: 9.5, color: "#0369a1" })}${t(132, 30, "aleta dorsal", { size: 10 })}${t(126, 112, "escamas", { size: 9, color: "#0c4a6e" })}</svg>`,
    },
    {
      html: `<h3>Los anfibios</h3><p>Los <mark>anfibios</mark> fueron los primeros vertebrados que salieron del agua, y su nombre significa «doble vida», porque la mayoría <b>viven en el agua cuando son jóvenes y en tierra de adultos</b>. Tienen la <b>piel desnuda</b>, sin escamas ni pelo, fina y siempre <b>húmeda</b> gracias a unas glándulas que fabrican mucosidad; por eso necesitan vivir cerca del agua o en lugares húmedos. De adultos tienen <b>cuatro patas</b> y respiran por <b>pulmones</b> y también a través de la piel. Son <b>poiquilotermos</b> y <b>ovíparos</b>; casi todos ponen sus huevos, sin cáscara y rodeados de una sustancia gelatinosa, en el agua. De los huevos salen <b>larvas</b>, los <b>renacuajos</b> en el caso de las ranas, que viven en el agua, tienen cola y respiran por branquias, como los peces. Poco a poco se transforman en adultos: les salen las patas, desaparecen las branquias y se forman los pulmones, y en las ranas desaparece la cola. Este cambio se llama <mark>metamorfosis</mark>. Hay dos grupos principales: los <b>anuros</b>, sin cola de adultos, como la rana y el sapo; y los <b>urodelos</b>, con cola, como la salamandra y el tritón.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Metamorfosis de la rana en ciclo: huevos en el agua, renacuajo con cola y branquias, renacuajo con patas y rana adulta">${BG}
        ${[[60, 46, "huevos"], [200, 46, "renacuajo"], [200, 130, "con patas"], [60, 130, "rana adulta"]].map(([x, y, n]) => t(x, y + 36, n, { size: 10 })).join("")}
        ${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${46 + (i % 3) * 14}" cy="${40 + Math.floor(i / 3) * 14}" r="6" fill="#e0f2fe" stroke="#0369a1"/><circle cx="${46 + (i % 3) * 14}" cy="${40 + Math.floor(i / 3) * 14}" r="2" fill="var(--ink)"/>`).join("")}
        <ellipse cx="190" cy="46" rx="10" ry="8" fill="#475569"/><path d="M200 46 q 14 -8 26 0 q -12 8 -26 0" fill="#64748b"/>
        <ellipse cx="190" cy="130" rx="11" ry="9" fill="#4d7c0f"/><path d="M201 130 q 12 -6 20 0 q -10 6 -20 0" fill="#65a30d"/><path d="M186 138 l -6 10 M194 138 l 4 10" stroke="#4d7c0f" stroke-width="3"/>
        <ellipse cx="60" cy="130" rx="20" ry="13" fill="#65a30d"/><circle cx="50" cy="118" r="5" fill="#65a30d"/><circle cx="70" cy="118" r="5" fill="#65a30d"/><circle cx="50" cy="117" r="2" fill="var(--ink)"/><circle cx="70" cy="117" r="2" fill="var(--ink)"/><path d="M42 140 l -12 8 M78 140 l 12 8" stroke="#4d7c0f" stroke-width="4"/>
        ${fl(100, 50, 160, 50, "var(--muted)", 2)}${fl(204, 90, 204, 112, "var(--muted)", 2)}${fl(160, 134, 100, 134, "var(--muted)", 2)}</svg>`,
      video: { id: "AwvuIfEI3SU", titulo: "Los Anfibios | Vídeos Educativos para Niños", canal: "Happy Learning Español", vistas: 942643 },
    },
    {
      html: `<h3>Los reptiles</h3><p>Los <mark>reptiles</mark> fueron los primeros vertebrados que se independizaron totalmente del agua, gracias a dos novedades: su piel y sus huevos. Su <b>piel es seca</b> y está cubierta de <b>escamas córneas</b> o de placas duras que impiden que pierdan agua; como su piel no crece, muchos la cambian de vez en cuando, como hacen las serpientes, que dejan su «camisa» entera. Respiran por <b>pulmones</b> y son <b>poiquilotermos</b>, por eso pasan tiempo tomando el sol. La mayoría son <b>ovíparos</b> con fecundación <b>interna</b> y ponen <b>huevos con una cáscara</b> dura o correosa que protege al embrión y evita que se seque, de modo que pueden poner los huevos en tierra; algunos, como la víbora, retienen los huevos hasta que nacen las crías. Su nombre viene de «reptar», porque muchos se arrastran: las serpientes no tienen patas, y los demás tienen cuatro patas cortas, a los lados del cuerpo. Los cuatro grupos actuales son los <b>lagartos</b> (lagartija, camaleón, iguana), las <b>serpientes</b> (culebra, víbora), las <b>tortugas</b>, protegidas por un caparazón, y los <b>cocodrilos</b> y caimanes. Los dinosaurios eran parientes de los reptiles actuales.</p>`,
    },
    {
      html: `<h3>Las aves</h3><p>Las <mark>aves</mark> son vertebrados con el cuerpo cubierto de <mark>plumas</mark>, que las protegen del frío y les permiten volar. No tienen dientes: su boca es un <b>pico</b> córneo, cuya forma depende de lo que comen (curvo y afilado en las rapaces, corto y fuerte en los pájaros que comen semillas, largo en las garzas que pescan). Tienen dos <b>patas</b> cubiertas de escamas y sus extremidades delanteras se han transformado en <b>alas</b>. La mayoría están adaptadas al <b>vuelo</b>: tienen el cuerpo con forma aerodinámica, <b>huesos huecos</b> y ligeros, unos <b>sacos aéreos</b> unidos a los pulmones que hacen la respiración muy eficaz y un hueso del pecho, la quilla, donde se insertan los fuertes músculos de las alas. Algunas no vuelan, como el avestruz, que corre muy deprisa, o el pingüino, que nada. Respiran por <b>pulmones</b>, son <b>homeotermas</b> y <b>ovíparas</b> con fecundación interna: ponen huevos con <b>cáscara caliza</b> que normalmente <b>incuban</b> en un nido dándoles calor con su cuerpo. Muchas cuidan de sus crías y algunas hacen largas <b>migraciones</b>, como las cigüeñas o las golondrinas.</p>`,
      video: { id: "bLCqRd_fLio", titulo: "Las Aves para niños - Animales vertebrados - Ciencias naturales para niños", canal: "Smile and Learn - Español", vistas: 3230965 },
    },
    {
      html: `<h3>Los mamíferos</h3><p>Los <mark>mamíferos</mark> reciben su nombre de las <mark>glándulas mamarias</mark>: las hembras producen <b>leche</b> para alimentar a sus crías. Además, su piel está cubierta de <b>pelo</b>, que los aísla del frío (en algunos, como las ballenas, casi ha desaparecido). Respiran por <b>pulmones</b>, incluso los que viven en el agua, como los delfines, que salen a la superficie para respirar; son <b>homeotermos</b>; y tienen <b>dientes</b> de distintos tipos según su alimentación (incisivos, caninos y muelas). La mayoría son <mark>vivíparos</mark>: el embrión se desarrolla dentro del cuerpo de la madre, en el útero, alimentado a través de la placenta, y nace ya formado. Hay excepciones: los <b>monotremas</b>, como el ornitorrinco, ponen huevos; y los <b>marsupiales</b>, como el canguro, tienen crías muy poco desarrolladas que terminan de crecer dentro de una bolsa del vientre de la madre. Los mamíferos tienen un encéfalo muy desarrollado y cuidan mucho de sus crías. Están adaptados a todos los medios: terrestres (el lobo, el caballo, las personas), acuáticos (el delfín, la ballena, la foca) y aéreos (el murciélago, el único que vuela de verdad).</p>`,
    },
    {
      html: `<h3>Comparar los cinco grupos</h3><p>Para clasificar un vertebrado basta con observar algunas características clave: qué cubre su piel, cómo respira, cómo se reproduce y si mantiene su temperatura constante. Fíjate en que hay una progresión: los peces dependen totalmente del agua; los anfibios necesitan el agua para reproducirse y mantener la piel húmeda; los reptiles ya viven en tierra gracias a su piel seca y a sus huevos con cáscara; y las aves y los mamíferos, además, mantienen su temperatura constante y pueden vivir en ambientes fríos. Esta tabla resume las diferencias. Muchas especies de vertebrados están hoy <b>amenazadas</b>: en España, por ejemplo, el lince ibérico, el oso pardo, el urogallo, el águila imperial ibérica o la tortuga mora. La destrucción de los hábitats, la contaminación, los atropellos, la caza ilegal y las especies invasoras son sus principales amenazas, y su conservación depende de proteger los espacios naturales donde viven.</p>${tabla(["Grupo", "Piel", "Respiración", "Reproducción", "Temperatura"], [["Peces", "escamas", "branquias", "ovíparos, en el agua", "variable"], ["Anfibios", "desnuda y húmeda", "branquias (larva); pulmones y piel", "ovíparos, metamorfosis", "variable"], ["Reptiles", "escamas córneas", "pulmones", "ovíparos, huevo con cáscara", "variable"], ["Aves", "plumas", "pulmones y sacos aéreos", "ovíparas, incuban", "constante"], ["Mamíferos", "pelo", "pulmones", "vivíparos (casi todos), leche", "constante"]])}`,
    },
  ],
  figura: {
    titulo: "Los cinco grupos de vertebrados",
    svg: rejilla([
      ["Peces", "escamas · branquias · aletas", COL.agua],
      ["Anfibios", "piel húmeda · metamorfosis", COL.verde],
      ["Reptiles", "escamas · huevo con cáscara", COL.marron],
      ["Aves", "plumas · pico · alas", COL.sol],
      ["Mamíferos", "pelo · leche · vivíparos", COL.rojo],
      ["Temperatura", "constante: aves y mamíferos", COL.morado],
    ], 3, 80, "Resumen: peces, anfibios, reptiles, aves, mamíferos y temperatura corporal"),
  },
  video: { id: "5Tg0J59MYII", titulo: "ANIMALES VERTEBRADOS para niños - Mamíferos, aves, reptiles, peces y anfibios", canal: "Smile and Learn - Español", vistas: 16718247, megusta: 0, busqueda: "animales vertebrados clasificación" },
  ejemplos: [
    { enunciado: "Un animal tiene piel seca con escamas, respira por pulmones, pone huevos con cáscara en tierra y toma el sol para calentarse. ¿A qué grupo pertenece?",
      pasos: ["Escamas y pulmones: descartamos peces y anfibios.", "No tiene plumas ni pelo y su temperatura es variable.", "Huevos con cáscara en tierra: reptil."],
      resultado: "Es un reptil." },
    { enunciado: "¿Por qué el delfín es un mamífero y no un pez?",
      pasos: ["Respira por pulmones y sale a la superficie a por aire.", "Es vivíparo y la madre amamanta a la cría.", "Es homeotermo y tiene algunos pelos al nacer."],
      resultado: "Tiene las características de los mamíferos, aunque viva en el agua y tenga forma de pez." },
    { enunciado: "Ordena las etapas de la vida de una rana y di cómo respira en cada una.",
      pasos: ["Huevo en el agua.", "Renacuajo: vive en el agua y respira por branquias.", "Metamorfosis: salen patas, se forman pulmones y desaparece la cola.", "Adulto: respira por pulmones y por la piel."],
      resultado: "Huevo → renacuajo (branquias) → metamorfosis → rana (pulmones y piel)." },
  ],
  errores: [
    "Clasificar a la ballena o al delfín como peces.",
    "Decir que el murciélago es un ave porque vuela.",
    "Pensar que todos los mamíferos son vivíparos: el ornitorrinco pone huevos.",
    "Confundir anfibios y reptiles: los anfibios tienen la piel desnuda y húmeda.",
    "Decir que los animales «de sangre fría» tienen siempre la sangre fría: su temperatura depende del ambiente.",
  ],
  ejercicios: [
    { q: "Escribe tres características comunes a todos los vertebrados.", sol: "Esqueleto interno con columna vertebral, cráneo que protege el encéfalo y cuerpo dividido en cabeza, tronco y extremidades." },
    { q: "Diferencia entre animales homeotermos y poiquilotermos. Pon ejemplos.", sol: "Homeotermos: temperatura constante (aves y mamíferos). Poiquilotermos: temperatura variable según el ambiente (peces, anfibios y reptiles)." },
    { q: "¿Qué es la línea lateral de los peces?", sol: "Un órgano de los sentidos que capta las vibraciones y movimientos del agua." },
    { q: "Diferencia entre peces óseos y cartilaginosos.", sol: "Los óseos tienen esqueleto de hueso (sardina); los cartilaginosos, de cartílago (tiburón)." },
    { q: "¿Por qué los anfibios necesitan vivir cerca del agua?", sol: "Porque su piel debe estar húmeda y sus huevos y larvas se desarrollan en el agua." },
    { q: "¿Qué dos características permitieron a los reptiles vivir lejos del agua?", sol: "La piel seca con escamas que evita la pérdida de agua y los huevos con cáscara." },
    { q: "Escribe tres adaptaciones de las aves al vuelo.", sol: "Plumas y alas, huesos huecos y ligeros, sacos aéreos (y cuerpo aerodinámico)." },
    { q: "¿Qué significa que un animal es vivíparo?", sol: "Que el embrión se desarrolla dentro de la madre y nace ya formado." },
    { q: "¿Qué diferencia hay entre un marsupial y un monotrema?", sol: "Los marsupiales terminan el desarrollo en una bolsa (canguro); los monotremas ponen huevos (ornitorrinco)." },
    { q: "Escribe tres vertebrados amenazados de España y dos causas de su amenaza.", sol: "Lince ibérico, oso pardo y águila imperial; destrucción del hábitat y atropellos o caza ilegal." },
  ],
  quiz: [
    { q: "La columna vertebral protege la…", o: ["médula espinal", "piel", "boca"], a: 0, e: "Médula espinal." },
    { q: "Los peces respiran por…", o: ["pulmones", "branquias", "la piel solo"], a: 1, e: "Branquias." },
    { q: "El tiburón es un pez…", o: ["óseo", "cartilaginoso", "anfibio"], a: 1, e: "Cartilaginoso." },
    { q: "Los renacuajos son larvas de…", o: ["anfibios", "peces", "reptiles"], a: 0, e: "Anfibios (ranas)." },
    { q: "La salamandra es un…", o: ["anfibio", "reptil", "mamífero"], a: 0, e: "Anfibio urodelo." },
    { q: "Los reptiles tienen la piel…", o: ["húmeda", "seca con escamas", "con plumas"], a: 1, e: "Seca con escamas." },
    { q: "Las aves tienen huesos…", o: ["macizos", "huecos", "de cartílago"], a: 1, e: "Huecos y ligeros." },
    { q: "Los vertebrados homeotermos son…", o: ["aves y mamíferos", "peces y reptiles", "anfibios"], a: 0, e: "Aves y mamíferos." },
    { q: "El ornitorrinco es un mamífero que…", o: ["pone huevos", "tiene plumas", "respira por branquias"], a: 0, e: "Monotrema." },
    { q: "El único mamífero que vuela de verdad es…", o: ["el murciélago", "la ardilla", "el pingüino"], a: 0, e: "El murciélago." },
  ],
  examen: [
    { q: "El cambio de renacuajo a rana se llama…", o: ["metamorfosis", "muda", "incubación"], a: 0, e: "Metamorfosis." },
    { q: "La víbora…", o: ["retiene los huevos hasta que nacen las crías", "tiene patas", "es un anfibio"], a: 0, e: "Es un reptil que pare crías." },
    { q: "Los sacos aéreos son propios de…", o: ["las aves", "los peces", "los anfibios"], a: 0, e: "Aves." },
  ],
  feynman: ["Qué tienen en común todos los vertebrados", "Cómo distinguir un anfibio de un reptil", "Por qué la ballena es un mamífero y no un pez"],
  mapa: mapa("VERTEBRADOS", "var(--eso)", [
    ["Comunes", "columna · cráneo · 4 extremidades", COL.azul],
    ["Agua y tierra", "peces · anfibios", COL.agua],
    ["Tierra", "reptiles · huevo con cáscara", COL.marron],
    ["Sangre caliente", "aves · mamíferos", COL.rojo],
  ], 290),
  tarjetas: [
    ["Vertebrado", "Animal con esqueleto interno y columna vertebral."],
    ["Homeotermo", "Mantiene su temperatura constante: aves y mamíferos."],
    ["Branquias", "Órganos que toman el oxígeno disuelto en el agua."],
    ["Anfibios", "Piel húmeda; larva acuática y metamorfosis."],
    ["Reptiles", "Piel seca con escamas y huevos con cáscara."],
    ["Aves", "Plumas, pico y alas; huesos huecos; incuban los huevos."],
    ["Mamíferos", "Pelo y glándulas mamarias; casi todos vivíparos."],
    ["Vivíparo", "El embrión se desarrolla dentro de la madre."],
  ],
  familias: ["Visitad un acuario, un zoo o un centro de recuperación de fauna y clasificad los animales que veáis.", "Observad las aves de vuestro barrio con unos prismáticos y anotad sus nombres.", "Buscad información sobre un animal amenazado de vuestra comunidad y cómo se le protege."],
  profesores: {
    saberes: "Animales vertebrados: características comunes, termorregulación, peces, anfibios, reptiles, aves y mamíferos, adaptaciones al medio, reproducción, especies amenazadas y conservación (RD 217/2022, Biología y Geología, bloque Seres vivos).",
    ideas: ["Tabla comparativa colaborativa a partir de fichas de animales del entorno.", "Disección guiada de un pez comprado en la pescadería (branquias, escamas, vejiga natatoria).", "Censo de aves del patio con la metodología de ciencia ciudadana de SEO/BirdLife."],
  },
  fuentes: [RD, wiki("Vertebrata", "Vertebrata"), wiki("Mammalia", "Mammalia"), { t: "SEO/BirdLife: guía de aves", url: "https://seo.org/listado-aves/" }],
  revisado: REV,
};
