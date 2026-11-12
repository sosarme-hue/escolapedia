// Ciencias Sociales 6º de Primaria: el siglo XIX en España. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, linea, vid, vgen, RD, PROF } = require("./_pri6b");

// Locomotora de vapor sencilla.
function tren(x, y) {
  return `<g transform="translate(${x} ${y})"><rect x="-40" y="-26" width="50" height="22" rx="3" fill="var(--pen)"/><rect x="10" y="-40" width="26" height="36" rx="3" fill="var(--red)"/><rect x="16" y="-34" width="14" height="10" fill="#fff"/><rect x="-32" y="-40" width="10" height="14" fill="var(--ink)"/><circle cx="-26" cy="-50" r="6" fill="#cbd5e1"/><circle cx="-18" cy="-60" r="8" fill="#e2e8f0"/><circle cx="-28" cy="0" r="8" fill="var(--ink)"/><circle cx="-4" cy="0" r="8" fill="var(--ink)"/><circle cx="24" cy="0" r="8" fill="var(--ink)"/><path d="M-50 8 H50" stroke="var(--muted)" stroke-width="3"/></g>`;
}

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "El siglo XIX en España",
  minutos: 55,
  objetivos: ["Situar el inicio de la Edad Contemporánea", "Explicar la guerra de la Independencia y la Constitución de 1812", "Distinguir absolutismo y liberalismo en los reinados de Fernando VII e Isabel II", "Conocer el Sexenio Democrático, la Primera República y la Restauración", "Describir los cambios económicos y sociales: industrialización, ferrocarril y movimiento obrero"],
  claves: ["Edad Contemporánea", "guerra de la Independencia", "Constitución de 1812", "Fernando VII", "absolutismo", "liberalismo", "Isabel II", "carlismo", "Primera República", "Restauración", "industrialización", "ferrocarril", "burguesía", "movimiento obrero"],
  pregunta: {
    texto: "El 2 de mayo es fiesta en la Comunidad de Madrid y en muchas ciudades hay calles con el nombre «Dos de Mayo». ¿Qué pasó ese día?",
    respuesta: "El <b>2 de mayo de 1808</b> el pueblo de Madrid se levantó contra las tropas francesas de Napoleón, que habían entrado en España. La revuelta fue reprimida con dureza, pero fue el comienzo de la <mark>guerra de la Independencia</mark>, que duró hasta 1814. El pintor <b>Goya</b> la recordó en sus cuadros <i>El dos de mayo</i> y <i>Los fusilamientos del tres de mayo</i>.",
  },
  bloques: [
    {
      html: `<h3>Empieza la Edad Contemporánea</h3><p>La <mark>Edad Contemporánea</mark> es la etapa de la historia en la que vivimos. Empieza en <b>1789</b> con la <b>Revolución francesa</b>, cuando el pueblo de Francia se levantó contra la monarquía absoluta y la sociedad de privilegios. Los revolucionarios defendían tres ideas: <b>libertad, igualdad y fraternidad</b>.</p><p>De la Revolución francesa surgió una nueva forma de pensar la política, el <mark>liberalismo</mark>, que defendía que:</p><p>• La <b>soberanía</b> reside en la nación, no en el rey.<br>• Debe haber una <b>Constitución</b> que limite el poder del rey.<br>• Los poderes deben estar <b>divididos</b>.<br>• Todos los ciudadanos son <b>iguales ante la ley</b>.</p><p>Frente a ellos estaban los <b>absolutistas</b>, que querían que el rey siguiera teniendo todo el poder y que se mantuvieran los privilegios de la nobleza y el clero.</p><p>En España, el siglo XIX fue una época muy agitada: hubo una guerra contra Francia, varias guerras civiles, muchos cambios de gobierno y de Constitución, y la pérdida de casi todas las colonias de América. También fue el siglo en que comenzaron la industria, el ferrocarril y las ciudades modernas.</p>`,
      svg: svg("Absolutismo frente a liberalismo en el siglo diecinueve", `${tit("Dos formas de pensar")}${cj(10, 34, 115, 28, "ABSOLUTISMO", COL.gris)}${cj(135, 34, 115, 28, "LIBERALISMO", COL.azul)}${["el rey manda en todo", "privilegios", "sin Constitución"].map((w, i) => tx(67, 84 + i * 18, w, 112)).join("")}${["Constitución", "igualdad ante la ley", "soberanía nacional"].map((w, i) => tx(192, 84 + i * 18, w, 112)).join("")}<path d="M130 70 V140" stroke="var(--line)" stroke-width="1.5"/>${tx(130, 162, "1789: libertad, igualdad, fraternidad", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>La guerra de la Independencia (1808-1814)</h3><p>A comienzos del siglo XIX, <b>Napoleón Bonaparte</b>, emperador de Francia, dominaba casi toda Europa. En 1807 consiguió permiso del rey Carlos IV para que sus tropas cruzaran España para invadir Portugal. Pero sus soldados se quedaron en las ciudades españolas.</p><p>En 1808, Napoleón obligó a Carlos IV y a su hijo <b>Fernando VII</b> a renunciar al trono en la ciudad francesa de Bayona, y nombró rey de España a su hermano, <b>José Bonaparte</b> (José I).</p><p>El <b>2 de mayo de 1808</b>, el pueblo de Madrid se sublevó contra los franceses. Así empezó la <mark>guerra de la Independencia</mark>. Por todo el país se formaron <b>juntas</b> para organizar la resistencia. Los españoles, ayudados por Inglaterra y Portugal, lucharon con el ejército y también con <b>guerrillas</b>: pequeños grupos que atacaban por sorpresa y se escondían en las montañas.</p><p>Hubo batallas famosas, como la de <b>Bailén</b> (1808), primera gran derrota de un ejército de Napoleón, y la resistencia de ciudades sitiadas como <b>Zaragoza</b> y <b>Gerona</b>. En 1814 los franceses se retiraron y Fernando VII volvió a España.</p>`,
      svg: svg("Etapas de la guerra de la Independencia: invasión, levantamiento del 2 de mayo, resistencia y retirada francesa", `${tit("Guerra de la Independencia")}${linea([["1808", "2 de mayo", COL.rojo], ["1808", "Bailén", COL.verde], ["1812", "Constitución", COL.azul], ["1814", "vuelve Fernando VII", COL.morado]], { y: 100 })}`),
      video: vid("Cc8Kp2OyUBU"),
    },
    {
      html: `<h3>Las Cortes de Cádiz y la Constitución de 1812</h3><p>Mientras se luchaba contra los franceses, los españoles que se oponían a Napoleón se reunieron en <b>Cádiz</b>, una de las pocas ciudades que los franceses no conquistaron. Allí se formaron unas <b>Cortes</b> con diputados de España y de América.</p><p>Las <mark>Cortes de Cádiz</mark> aprobaron el <b>19 de marzo de 1812</b> la primera Constitución de la historia de España. Como ese día es San José, el pueblo la llamó cariñosamente <b>«la Pepa»</b>.</p><p>Era una Constitución <b>liberal</b> que establecía:</p><p>• La <b>soberanía nacional</b>: el poder reside en la nación, no en el rey.<br>• La <b>división de poderes</b>: las Cortes hacen las leyes, el rey gobierna y los tribunales juzgan.<br>• La <b>igualdad</b> de todos ante la ley.<br>• El <b>sufragio</b> (voto) para los hombres, de forma indirecta.<br>• Libertad de imprenta.</p><p>Las Cortes de Cádiz también suprimieron la Inquisición. Aunque estuvo poco tiempo en vigor, la Constitución de 1812 fue un modelo para muchos países de Europa y de América.</p>`,
      svg: svg("La Constitución de 1812, la Pepa, aprobada en Cádiz", `${tit("«La Pepa» (Cádiz, 1812)")}<rect x="20" y="36" width="90" height="110" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2.5"/>${t(65, 70, "1812", { size: 20, color: COL.rojo })}${t(65, 98, "la Pepa", { size: 13, color: COL.marron })}${filas([["soberanía", "nacional", COL.azul], ["poderes", "divididos", COL.verde], ["igualdad", "ante la ley", COL.morado], ["imprenta", "libre", COL.naranja]], 52, 28, { x: 126, wa: 66, wb: 56 })}`),
    },
    {
      html: `<h3>Fernando VII y la independencia de América</h3><p>Cuando <mark>Fernando VII</mark> volvió a España en 1814, el pueblo lo recibió con entusiasmo y lo llamó «el Deseado». Pero el rey <b>anuló la Constitución de 1812</b>, persiguió a los liberales y restableció la monarquía absoluta.</p><p>Su reinado (1814-1833) tuvo tres etapas:</p><p>• <b>Sexenio absolutista</b> (1814-1820): gobierno absoluto.<br>• <b>Trienio liberal</b> (1820-1823): tras un levantamiento militar del general Riego, el rey tuvo que aceptar la Constitución.<br>• <b>Década absolutista</b> (1823-1833): con ayuda de un ejército francés, el rey volvió a gobernar como absoluto.</p><p>Durante su reinado, la mayor parte de las <b>colonias de América</b> se independizaron: entre 1810 y 1825, territorios como México, Venezuela, Colombia, Argentina, Chile o Perú se convirtieron en países independientes. Líderes como <b>Simón Bolívar</b> y <b>José de San Martín</b> dirigieron la lucha. A España solo le quedaron <b>Cuba</b>, <b>Puerto Rico</b> y <b>Filipinas</b>.</p><p>Antes de morir, Fernando VII aprobó la <b>Pragmática Sanción</b>, que permitía reinar a las mujeres, para que su hija Isabel pudiera heredar el trono.</p>`,
      svg: svg("Las tres etapas del reinado de Fernando VII", `${tit("Fernando VII (1814-1833)")}${columna([["1814-1820: absolutismo", COL.gris], ["1820-1823: trienio liberal", COL.azul], ["1823-1833: absolutismo", COL.gris]], 130, 220, 36, 28, 12)}${tx(130, 166, "se independiza casi toda América", 230, { weight: 700, color: COL.rojo })}`),
    },
    {
      html: `<h3>Isabel II y las guerras carlistas</h3><p>Cuando murió Fernando VII, en 1833, su hija <mark>Isabel II</mark> tenía solo tres años. Gobernó en su nombre su madre, María Cristina, como <b>regente</b>.</p><p>Pero el hermano de Fernando VII, <b>Carlos María Isidro</b>, no aceptó que reinara una mujer y reclamó el trono. Sus partidarios, los <b>carlistas</b>, eran absolutistas y defendían las tradiciones y los fueros (leyes propias) de algunos territorios. Tenían mucho apoyo en el País Vasco, Navarra, Cataluña y el Maestrazgo. Comenzaron así las <b>guerras carlistas</b>, tres guerras civiles a lo largo del siglo XIX. La primera duró de 1833 a 1840 y terminó con el <b>Abrazo de Vergara</b>.</p><p>Para defender el trono de Isabel II, su madre se apoyó en los <b>liberales</b>. Durante su reinado (1833-1868) se consolidó en España el <b>Estado liberal</b>: se aprobaron constituciones, se crearon las <b>provincias</b> (1833), la <b>Guardia Civil</b> (1844) y la <b>peseta</b> como moneda (1868), y se hizo la <b>desamortización</b>: el Estado vendió tierras de la Iglesia y de los ayuntamientos.</p><p>Los liberales se dividieron en <b>moderados</b> y <b>progresistas</b>, y los generales intervenían a menudo en la política con levantamientos llamados <b>pronunciamientos</b>.</p>`,
      svg: svg("Isabel II frente a los carlistas y las novedades de su reinado", `${tit("Isabel II (1833-1868)")}${cj2(10, 34, 115, 52, "isabelinos", "liberales", COL.azul)}${cj2(135, 34, 115, 52, "carlistas", "absolutistas", COL.rojo)}${filas([["1833", "provincias", COL.verde], ["1844", "Guardia Civil", COL.verde], ["1868", "la peseta", COL.sol]], 108, 22, { wa: 40, wb: 150 })}`),
      video: vid("BUyFeLVQH8Q"),
    },
    {
      html: `<h3>El Sexenio Democrático y la Primera República</h3><p>En 1868, una revolución llamada <b>la Gloriosa</b> expulsó del trono a Isabel II, que tuvo que exiliarse en Francia. Empezó el <mark>Sexenio Democrático</mark> (1868-1874), seis años en los que se intentaron nuevas formas de gobierno:</p><p>• Se aprobó la <b>Constitución de 1869</b>, la más democrática hasta entonces: establecía el <b>sufragio universal masculino</b> (votaban todos los hombres mayores de 25 años) y muchas libertades.</p><p>• Las Cortes eligieron un nuevo rey de otra familia: <b>Amadeo I de Saboya</b>, un príncipe italiano. Reinó de 1871 a 1873, pero tuvo tantos problemas (la oposición de muchos grupos, una nueva guerra carlista y una guerra en Cuba) que renunció al trono.</p><p>• En 1873 se proclamó la <b>Primera República</b>. Por primera vez, España no tenía rey. Pero fue un periodo muy inestable: tuvo cuatro presidentes en menos de un año, una guerra carlista, la guerra de Cuba y las revueltas <b>cantonales</b>, en las que algunas ciudades, como Cartagena, se declararon independientes.</p><p>A principios de 1874, un golpe del general Pavía disolvió las Cortes, y a finales de ese año otro pronunciamiento devolvió el trono a los Borbones.</p>`,
      svg: svg("El Sexenio Democrático: la Gloriosa, Amadeo I y la Primera República", `${tit("Sexenio Democrático")}${columna([["1868: la Gloriosa", COL.naranja], ["1871: Amadeo I", COL.morado], ["1873: I República", COL.rojo]], 130, 180, 32, 24, 10)}${tx(130, 140, "1869: votan todos los hombres", 220, { weight: 700, color: COL.azul })}${tx(130, 160, "4 presidentes en menos de un año", 220)}`),
    },
    {
      html: `<h3>La Restauración</h3><p>En diciembre de 1874, el general Martínez Campos proclamó rey a <b>Alfonso XII</b>, hijo de Isabel II. Volvía la dinastía de los Borbones: es la <mark>Restauración</mark> (1874-1923).</p><p>El político <b>Antonio Cánovas del Castillo</b> diseñó un nuevo sistema político, recogido en la <b>Constitución de 1876</b>, que duró casi cincuenta años. Se basaba en el <b>turnismo</b>: dos grandes partidos, el <b>Conservador</b> de Cánovas y el <b>Liberal</b> de Práxedes Mateo Sagasta, se turnaban pacíficamente en el gobierno.</p><p>El sistema trajo estabilidad y acabó con la tercera guerra carlista, pero no era una verdadera democracia: las elecciones se amañaban. En los pueblos, unos personajes poderosos llamados <b>caciques</b> controlaban los votos con favores y amenazas. Es lo que se llama <b>caciquismo</b>.</p><p>Alfonso XII murió joven en 1885 y su esposa, María Cristina de Habsburgo, fue regente hasta que su hijo Alfonso XIII fue mayor de edad.</p><p>En <b>1898</b>, España perdió en una guerra contra Estados Unidos sus últimas colonias: <b>Cuba</b>, <b>Puerto Rico</b> y <b>Filipinas</b>. Fue el «<b>Desastre del 98</b>», que causó una gran crisis de ánimo en el país.</p>`,
      svg: svg("La Restauración: turnismo de conservadores y liberales y el Desastre del 98", `${tit("La Restauración")}${cj(10, 36, 110, 34, "Conservador", COL.azul)}${cj(140, 36, 110, 34, "Liberal", COL.rojo)}${fl(122, 48, 138, 48, "var(--muted)", 2)}${fl(138, 60, 122, 60, "var(--muted)", 2)}${tx(65, 88, "Cánovas", 110)}${tx(195, 88, "Sagasta", 110)}${tx(130, 112, "se turnan en el gobierno (turnismo)", 236, { weight: 700 })}${cj(40, 124, 180, 26, "1898: Desastre del 98", COL.gris)}${tx(130, 166, "se pierden Cuba, Puerto Rico y Filipinas", 236)}`),
    },
    {
      html: `<h3>Cambios económicos: industria y ferrocarril</h3><p>En el siglo XIX llegó a España la <mark>Revolución Industrial</mark>, que había empezado en Inglaterra en el siglo XVIII. Las máquinas, movidas al principio por la <b>máquina de vapor</b> que funcionaba con carbón, sustituyeron al trabajo hecho a mano, y aparecieron las <b>fábricas</b>.</p><p>En España, la industrialización llegó más tarde y fue más débil que en otros países europeos. Se concentró en pocos lugares:</p><p>• La <b>industria textil</b> (tejidos de algodón) en <b>Cataluña</b>.<br>• La <b>siderurgia</b> (hierro y acero) en el <b>País Vasco</b>, sobre todo en Vizcaya, y antes en Asturias y Málaga.<br>• La <b>minería</b> de carbón en Asturias y de otros minerales en Andalucía y Murcia.</p><p>Un gran avance fue el <b>ferrocarril</b>. La primera línea de la península se inauguró en <b>1848</b> entre <b>Barcelona y Mataró</b>; en 1851 se abrió la de Madrid a Aranjuez. A finales de siglo, una red de vías unía las principales ciudades. El tren permitía transportar personas y mercancías de forma más rápida y barata. También se extendieron el telégrafo y, al final del siglo, el teléfono y la electricidad.</p>`,
      svg: svg("El ferrocarril: la primera línea de la península fue Barcelona-Mataró en 1848", `${tit("Llega el tren")}${tren(100, 120)}${et(196, 60, "1848", 80, { size: 18, color: COL.rojo })}${et(196, 84, "Barcelona-Mataró", 110, { size: 10.5, color: COL.azul })}${tx(130, 158, "textil: Cataluña · siderurgia: País Vasco", 236)}`),
    },
    {
      html: `<h3>Cambios sociales: burguesía y movimiento obrero</h3><p>Con el liberalismo desapareció la sociedad estamental y nació la <mark>sociedad de clases</mark>. Ahora todos eran iguales ante la ley, y lo que diferenciaba a las personas era sobre todo su <b>riqueza</b>:</p><p>• La <b>alta burguesía</b> y la nobleza: dueños de fábricas, bancos, minas y grandes tierras.<br>• Las <b>clases medias</b>: comerciantes, funcionarios, profesionales como médicos o abogados.<br>• Las <b>clases populares</b>: los <b>obreros</b> de las fábricas y los <b>campesinos</b>, que eran la mayoría de la población.</p><p>Los obreros vivían en condiciones muy duras: trabajaban hasta 12 o 14 horas al día, con sueldos muy bajos, sin vacaciones, sin seguro si enfermaban o se accidentaban, y en viviendas pequeñas y sin higiene. También trabajaban muchos <b>niños</b>.</p><p>Para defender sus derechos, los trabajadores se unieron en el <mark>movimiento obrero</mark>. Crearon <b>sindicatos</b> y partidos: en 1879 se fundó el Partido Socialista Obrero Español (PSOE) y en 1888, el sindicato UGT. También tuvo mucha fuerza el <b>anarquismo</b>. Usaron la <b>huelga</b> para reclamar jornadas más cortas, mejores sueldos y prohibir el trabajo infantil.</p><p>En el siglo XIX, más de la mitad de la población española no sabía leer ni escribir.</p>`,
      svg: svg("La sociedad de clases del siglo diecinueve: alta burguesía, clases medias y clases populares", `${tit("Sociedad de clases")}${columna([["alta burguesía: fábricas, bancos", COL.morado], ["clases medias: comercio, oficios", COL.azul], ["obreros y campesinos (mayoría)", COL.naranja]], 130, 224, 36, 28, 12)}${tx(130, 166, "sindicatos y huelgas por sus derechos", 236, { weight: 700, color: COL.rojo })}`),
    },
  ],
  figura: {
    titulo: "El siglo XIX en ocho ideas",
    svg: rejilla([
      ["1808", "2 de mayo", COL.rojo],
      ["1812", "la Pepa", COL.sol],
      ["Fernando VII", "absolutismo", COL.gris],
      ["Isabel II", "y los carlistas", COL.morado],
      ["1873", "I República", "#0e7490"],
      ["Restauración", "Alfonso XII, turnismo", COL.azul],
      ["1848", "primer tren", COL.verde],
      ["Obreros", "sindicatos y huelgas", COL.naranja],
    ], 4, 86, "Resumen del siglo XIX en España"),
  },
  video: vgen("rsIo6xyblt0", "España en el siglo XIX para niños de primaria"),
  ejemplos: [
    { enunciado: "Ordena: Primera República, Constitución de 1812, Desastre del 98, guerra de la Independencia, reinado de Isabel II.",
      pasos: ["Guerra de la Independencia (1808-1814) y, durante ella, la Constitución de 1812.", "Isabel II (1833-1868).", "Primera República (1873).", "Desastre del 98 (1898)."],
      resultado: "Independencia → 1812 → Isabel II → I República → 1898." },
    { enunciado: "¿Absolutista o liberal? a) «El rey tiene todo el poder». b) «Debe haber una Constitución». c) «Todos iguales ante la ley».",
      pasos: ["a) defiende el poder absoluto del rey.", "b) y c) son ideas del liberalismo."],
      resultado: "a) absolutista; b) y c) liberal." },
    { enunciado: "¿Cuántos años pasaron desde la primera línea de tren (1848) hasta hoy (2026)?",
      pasos: ["2026 − 1848 = 178."],
      resultado: "178 años." },
  ],
  errores: [
    "Pensar que la Constitución de 1812 se hizo en Madrid: se aprobó en Cádiz.",
    "Confundir a los carlistas con los liberales: los carlistas eran absolutistas.",
    "Creer que la Primera República duró mucho: no llegó a dos años.",
    "Pensar que en la Restauración había democracia plena: las elecciones se amañaban (caciquismo).",
    "Creer que España perdió sus colonias en 1898 de golpe: la mayoría de América se independizó entre 1810 y 1825.",
  ],
  ejercicios: [
    { q: "¿Qué acontecimiento marca el inicio de la Edad Contemporánea?", sol: "La Revolución francesa de 1789." },
    { q: "¿Por qué empezó la guerra de la Independencia?", sol: "Porque Napoleón invadió España y puso de rey a su hermano José; el pueblo se levantó el 2 de mayo de 1808." },
    { q: "Escribe tres principios de la Constitución de 1812.", sol: "Soberanía nacional, división de poderes, igualdad ante la ley." },
    { q: "¿Por qué Fernando VII fue llamado «el Deseado» y qué hizo al volver?", sol: "Porque el pueblo esperaba su regreso; al volver anuló la Constitución y gobernó como absoluto." },
    { q: "¿Qué colonias le quedaban a España después de la independencia de América?", sol: "Cuba, Puerto Rico y Filipinas." },
    { q: "¿Quiénes eran los carlistas y qué querían?", sol: "Partidarios de Carlos María Isidro, absolutistas, que no aceptaban a Isabel II como reina." },
    { q: "¿Qué fue la Primera República y por qué fracasó?", sol: "El gobierno sin rey de 1873-1874; fracasó por la inestabilidad, las guerras y las revueltas cantonales." },
    { q: "Explica qué era el turnismo y el caciquismo.", sol: "Turnismo: conservadores y liberales se alternaban en el gobierno. Caciquismo: los caciques controlaban los votos." },
    { q: "¿Dónde se concentró la industria en España en el siglo XIX?", sol: "Textil en Cataluña, siderurgia en el País Vasco, minería en Asturias y Andalucía." },
    { q: "¿Cómo vivían los obreros y qué hicieron para mejorar?", sol: "Jornadas muy largas y sueldos bajos; se organizaron en sindicatos y partidos e hicieron huelgas." },
  ],
  quiz: [
    { q: "La Edad Contemporánea empieza en…", o: ["1492", "1789", "1898"], a: 1, e: "1789." },
    { q: "El 2 de mayo de 1808 Madrid se levantó contra…", o: ["los ingleses", "los franceses", "los carlistas"], a: 1, e: "Los franceses." },
    { q: "La primera gran derrota de Napoleón en España fue en…", o: ["Bailén", "Lepanto", "Vergara"], a: 0, e: "Bailén, 1808." },
    { q: "«La Pepa» es la Constitución de…", o: ["1812", "1876", "1978"], a: 0, e: "1812." },
    { q: "Fernando VII anuló la Constitución porque era…", o: ["liberal", "absolutista", "republicano"], a: 1, e: "Absolutista." },
    { q: "La hija de Fernando VII que reinó fue…", o: ["Isabel I", "Isabel II", "María Cristina"], a: 1, e: "Isabel II." },
    { q: "La Primera República se proclamó en…", o: ["1868", "1873", "1931"], a: 1, e: "1873." },
    { q: "Cánovas y Sagasta se turnaban en el…", o: ["gobierno", "ejército", "trono"], a: 0, e: "En el gobierno." },
    { q: "La primera línea de tren de la península fue…", o: ["Madrid-Aranjuez", "Barcelona-Mataró", "Sevilla-Cádiz"], a: 1, e: "Barcelona-Mataró, 1848." },
    { q: "En 1898 España perdió…", o: ["Cuba, Puerto Rico y Filipinas", "México y Perú", "Canarias"], a: 0, e: "Sus últimas colonias." },
  ],
  examen: [
    { q: "El rey impuesto por Napoleón fue…", o: ["José Bonaparte", "Amadeo I", "Alfonso XII"], a: 0, e: "José I Bonaparte." },
    { q: "Pintó Los fusilamientos del tres de mayo…", o: ["Goya", "Velázquez", "Picasso"], a: 0, e: "Goya." },
    { q: "La siderurgia se desarrolló sobre todo en…", o: ["el País Vasco", "Extremadura", "Canarias"], a: 0, e: "El País Vasco." },
    { q: "Los trabajadores se organizaron en…", o: ["sindicatos", "virreinatos", "juntas carlistas"], a: 0, e: "Sindicatos." },
  ],
  feynman: ["Qué pasó en la guerra de la Independencia y en las Cortes de Cádiz", "En qué se diferenciaban absolutistas y liberales", "Cómo cambiaron la economía y la sociedad con la industria y el tren"],
  mapa: mapa("SIGLO XIX", "var(--pri)", [
    ["1808-1833", "Independencia · 1812 · Fernando VII", COL.rojo],
    ["1833-1874", "Isabel II · carlistas · República", COL.morado],
    ["1874-1898", "Restauración · turnismo · 98", COL.azul],
    ["Economía", "industria · tren · obreros", COL.verde],
  ], 260),
  tarjetas: [
    ["Liberalismo", "Ideas de Constitución, soberanía nacional e igualdad."],
    ["Guerra de la Independencia", "Lucha contra Napoleón (1808-1814)."],
    ["La Pepa", "Constitución de Cádiz de 1812."],
    ["Fernando VII", "«El Deseado»; rey absolutista."],
    ["Guerras carlistas", "Guerras civiles entre carlistas e isabelinos."],
    ["Primera República", "1873-1874: España sin rey."],
    ["Restauración", "Vuelta de los Borbones con Alfonso XII (1874)."],
    ["Movimiento obrero", "Lucha de los trabajadores por sus derechos."],
  ],
  familias: ["Buscad en internet el cuadro de Goya El dos de mayo y comentadlo juntos.", "Averiguad cuándo llegó el tren a vuestra ciudad o pueblo.", "Buscad calles de vuestra localidad con nombres del siglo XIX (Cádiz, Riego, Cánovas…).", "Comparad el horario de un niño obrero del siglo XIX con el vuestro."],
  profesores: PROF("Ciencias Sociales: la Edad Contemporánea en España, siglo XIX; guerra de la Independencia y Cortes de Cádiz; absolutismo y liberalismo; reinado de Isabel II y carlismo; Sexenio Democrático; Restauración; industrialización, ferrocarril y cambios sociales", ["Comentario guiado de un cuadro de Goya sobre la guerra.", "Línea del tiempo de las constituciones españolas hasta 1978.", "Debate dramatizado entre un absolutista y un liberal."]),
  fuentes: [RD, wiki("Historia de España (siglo XIX)", "Historia_de_España#Edad_Contemporánea"), wiki("Constitución española de 1812", "Constitución_española_de_1812"), { t: "Museo Nacional del Prado: Goya", url: "https://www.museodelprado.es/" }],
  revisado: REV,
};
