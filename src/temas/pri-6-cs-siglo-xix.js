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
    { q: "La Edad Contemporánea empieza en…", o: ["1789", "1898", "1492"], a: 0, e: "1789." },
    { q: "El 2 de mayo de 1808 Madrid se levantó contra…", o: ["los carlistas", "los franceses", "los ingleses"], a: 1, e: "Los franceses." },
    { q: "La primera gran derrota de Napoleón en España fue en…", o: ["Lepanto", "Bailén", "Vergara"], a: 1, e: "Bailén, 1808." },
    { q: "«La Pepa» es la Constitución de…", o: ["1812", "1978", "1876"], a: 0, e: "1812." },
    { q: "Fernando VII anuló la Constitución porque era…", o: ["liberal", "republicano", "absolutista"], a: 2, e: "Absolutista." },
    { q: "La hija de Fernando VII que reinó fue…", o: ["Isabel I", "Isabel II", "María Cristina"], a: 1, e: "Isabel II." },
    { q: "La Primera República se proclamó en…", o: ["1931", "1873", "1868"], a: 1, e: "1873." },
    { q: "Cánovas y Sagasta se turnaban en el…", o: ["gobierno", "ejército", "trono"], a: 0, e: "En el gobierno." },
    { q: "La primera línea de tren de la península fue…", o: ["Sevilla-Cádiz", "Madrid-Aranjuez", "Barcelona-Mataró"], a: 2, e: "Barcelona-Mataró, 1848." },
    { q: "En 1898 España perdió…", o: ["México y Perú", "Cuba, Puerto Rico y Filipinas", "Canarias"], a: 1, e: "Sus últimas colonias." },
  ],
  examen: [
    { q: "El rey impuesto por Napoleón fue…", o: ["José Bonaparte", "Alfonso XII", "Amadeo I"], a: 0, e: "José I Bonaparte." },
    { q: "Pintó Los fusilamientos del tres de mayo…", o: ["Velázquez", "Picasso", "Goya"], a: 2, e: "Goya." },
    { q: "La siderurgia se desarrolló sobre todo en…", o: ["Canarias", "el País Vasco", "Extremadura"], a: 1, e: "El País Vasco." },
    { q: "Los trabajadores se organizaron en…", o: ["virreinatos", "juntas carlistas", "sindicatos"], a: 2, e: "Sindicatos." },
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

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer el papel de la población, y en especial de las mujeres, en la guerra de la Independencia", "Reconocer a los escritores del Romanticismo", "Valorar los inventos e inventores españoles del siglo XIX", "Explicar cómo era la escuela y la lucha por los derechos de las mujeres"],
  lectura: { titulo: "El submarino de Isaac Peral", html: `<p><b>Isaac Peral</b> nació en Cartagena en 1851. Era marino, pero también un gran estudioso de las matemáticas, la física y la electricidad, una ciencia nueva y apasionante en aquel tiempo.</p><p>Peral tuvo una idea muy audaz: construir un barco que pudiera navegar <b>bajo el agua</b>, moviéndose con motores eléctricos alimentados por baterías, y que pudiera lanzar torpedos sin ser visto. Muchos pensaban que era imposible.</p><p>Tras años de cálculos y de trabajo, el 8 de septiembre de 1888 su submarino fue botado en el arsenal de La Carraca, en Cádiz. Medía unos 22 metros, tenía forma de puro y podía sumergirse y volver a la superficie de forma controlada. En las pruebas navegó sumergido y lanzó torpedos con éxito.</p><p>Fue uno de los primeros submarinos eléctricos capaces de lanzar torpedos. Pero, a pesar de los buenos resultados, el Gobierno decidió no seguir adelante con el proyecto. Peral se sintió muy decepcionado y dejó la Marina.</p><p>Hoy su submarino se conserva en el Museo Naval de Cartagena, su ciudad natal, como recuerdo de un inventor que se adelantó a su tiempo.</p>` },
  tras: {
    "La guerra de la Independencia (1808-1814)": [
      ["Las mujeres en la guerra", `<p>En la guerra contra los ejércitos de Napoleón no solo lucharon los soldados. Toda la población participó, y muchas mujeres se hicieron famosas por su valor:</p><ul><li>El <b>2 de mayo de 1808</b>, en Madrid, mujeres como <b>Manuela Malasaña</b>, una joven costurera, o <b>Clara del Rey</b>, que murió junto a sus hijos defendiendo el cuartel de Monteleón, participaron en el levantamiento contra las tropas francesas.</li><li>En los <b>sitios de Zaragoza</b>, la ciudad resistió durante meses el asedio francés. <b>Agustina de Aragón</b> se hizo famosa cuando, en uno de los ataques de 1808, disparó un cañón cuyos artilleros habían caído y ayudó a frenar el asalto. Más tarde fue nombrada subteniente.</li><li>En <b>Gerona</b>, durante otro largo asedio, se organizó una compañía de mujeres, la de <b>Santa Bárbara</b>, que llevaba munición y agua a los defensores y atendía a los heridos.</li></ul><p>Muchas otras mujeres, cuyos nombres no conocemos, curaron a los heridos, escondieron a perseguidos, llevaron mensajes y mantuvieron a sus familias en medio de la guerra. El pintor <b>Francisco de Goya</b> retrató en sus grabados <i>Los desastres de la guerra</i> el sufrimiento de toda la población.</p>`,
        L6.filas("Mujeres de 1808", [["Manuela Malasaña", "Madrid, 2 de mayo", cRO], ["Clara del Rey", "cuartel de Monteleón", cNA], ["Agustina", "sitios de Zaragoza", cAZ], ["Santa Bárbara", "asedio de Gerona", cVE]])],
    ],
    "Isabel II y las guerras carlistas": [
      ["El Romanticismo: sentimiento y libertad", `<p>En la primera mitad del siglo XIX se extendió por Europa un movimiento cultural llamado <b>Romanticismo</b>. Los románticos daban más importancia a los <b>sentimientos</b> que a la razón, amaban la <b>libertad</b>, la naturaleza salvaje, las leyendas y el pasado medieval, y a menudo se sentían rebeldes e incomprendidos.</p><p>En España destacaron grandes escritores románticos:</p><ul><li><b>José de Espronceda</b> escribió la <i>Canción del pirata</i>, que celebra la libertad: «Que es mi barco mi tesoro, que es mi dios la libertad…».</li><li><b>Mariano José de Larra</b> escribió artículos en los periódicos criticando con ironía los defectos de la sociedad.</li><li><b>José Zorrilla</b> estrenó en 1844 <i>Don Juan Tenorio</i>, una obra de teatro que todavía se representa en muchos lugares cada año por el Día de Todos los Santos.</li><li><b>Gustavo Adolfo Bécquer</b> escribió las <i>Rimas</i>, poemas breves sobre el amor, y las <i>Leyendas</i>, historias misteriosas ambientadas en lugares como Soria o Toledo.</li><li><b>Rosalía de Castro</b> publicó en 1863 <i>Cantares gallegos</i>, el libro que impulsó el renacimiento de la literatura en gallego. El 17 de mayo, aniversario de su publicación, se celebra el Día de las Letras Gallegas.</li></ul>`,
        L6.filas("Escritores románticos", [["Espronceda", "Canción del pirata", cAZ], ["Zorrilla", "Don Juan Tenorio", cRO], ["Bécquer", "Rimas y Leyendas", cMO], ["Rosalía", "Cantares gallegos", cVE]]), ["Uib7oh1Sdog", "ROSALÍA DE CASTRO | Draw My Life", "TikTak Draw", 292554]],
    ],
    "Cambios económicos: industria y ferrocarril": [
      ["Inventos que cambiaron la vida", `<p>El siglo XIX fue un siglo de inventos que transformaron la vida cotidiana:</p><ul><li>El <b>telégrafo</b> permitió enviar mensajes a gran distancia en minutos, mediante señales eléctricas por cables. En España se construyó primero una red de telégrafo óptico, con torres que se comunicaban con señales visibles, y después el telégrafo eléctrico.</li><li>La <b>fotografía</b> se presentó en 1839. Por primera vez se podían conservar imágenes reales de personas y lugares.</li><li>El <b>teléfono</b>, patentado en 1876, permitió hablar a distancia.</li><li>A finales de siglo llegaron la <b>luz eléctrica</b> a las calles de algunas ciudades, los primeros automóviles y el cine.</li></ul><p>También hubo inventores españoles importantes:</p><ul><li><b>Narcís Monturiol</b> construyó en Barcelona el <b>Ictíneo</b>, uno de los primeros submarinos, que navegó en 1859.</li><li><b>Isaac Peral</b> construyó en 1888 un submarino eléctrico capaz de lanzar torpedos.</li></ul><p>Sin embargo, España tenía poco dinero para investigar, y muchos de estos inventos no se desarrollaron aquí, sino en otros países más industrializados.</p>`,
        L6.filas("Inventos del siglo XIX", [["1839", "fotografía", cNA], ["1859", "Ictíneo de Monturiol", cAZ], ["1876", "teléfono", cVE], ["1888", "submarino de Peral", cMO]])],
    ],
  },
  final: [
    ["La escuela en el siglo XIX", `<p>A comienzos del siglo XIX, la mayoría de los españoles no sabía leer ni escribir. Hacia 1860, alrededor de <b>tres de cada cuatro</b> personas eran analfabetas, y entre las mujeres la proporción era todavía mayor.</p><p>En <b>1857</b> se aprobó la <b>Ley Moyano</b>, una de las leyes de educación más importantes de la historia de España. Establecía que la enseñanza primaria era <b>obligatoria</b> para los niños y niñas de 6 a 9 años, y gratuita para las familias que no podían pagarla. Cada pueblo debía tener una escuela.</p><p>Pero la realidad era muy distinta de la ley:</p><ul><li>Muchos pueblos no tenían dinero para construir escuelas ni para pagar a los maestros, que cobraban muy poco. De ahí viene el dicho «pasar más hambre que un maestro de escuela».</li><li>Muchos niños faltaban a clase porque tenían que trabajar en el campo o en las fábricas.</li><li>Niños y niñas estudiaban separados y aprendían cosas distintas: a las niñas se les enseñaban sobre todo labores de costura.</li><li>Las clases eran de memoria, con muchos alumnos y castigos muy duros.</li></ul><p>A finales de siglo, la <b>Institución Libre de Enseñanza</b>, fundada en 1876, propuso una escuela más moderna, con excursiones, juego y respeto al alumno.</p>`,
      H6.dos("La escuela", ["La ley (1857)", ["obligatoria (6-9)", "gratis si no hay dinero", "escuela en pueblos"], cAZ], ["La realidad", ["pocas escuelas", "niños trabajando", "maestros mal pagados"], cRO])],
    ["Mujeres que abrieron camino", `<p>En el siglo XIX, las mujeres no podían votar, casi no podían estudiar en la universidad y, al casarse, necesitaban el permiso del marido para muchas cosas. Algunas mujeres valientes lucharon para cambiarlo:</p><ul><li><b>Concepción Arenal</b> (1820-1893), nacida en Ferrol, quería estudiar Derecho, pero las mujeres no podían. Según se cuenta, asistió a las clases de la universidad <b>vestida de hombre</b>. Después dedicó su vida a mejorar las cárceles y a ayudar a los pobres. Fue visitadora de prisiones y escribió: «Odia el delito y compadece al delincuente».</li><li><b>Emilia Pardo Bazán</b> (1851-1921), escritora gallega, fue una de las novelistas más importantes de su tiempo. Defendió que las mujeres recibieran la misma educación que los hombres. En 1916 fue la primera mujer en conseguir una cátedra en una universidad española.</li><li>A finales del siglo, las primeras mujeres consiguieron matricularse en la universidad, aunque necesitaban un permiso especial. Una de ellas, <b>María Elena Maseras</b>, estudió Medicina en Barcelona en la década de 1870.</li></ul><p>Gracias a ellas y a muchas otras, en el siglo XX las mujeres conquistaron el derecho a estudiar, a trabajar y a votar.</p>`,
      L6.filas("Pioneras", [["Concepción Arenal", "Derecho y cárceles", cMO], ["Pardo Bazán", "cátedra en 1916", cAZ], ["Maseras", "Medicina, años 1870", cVE], ["lucha", "estudiar y votar", cRO]]), ["rMRyRik98FY", "LUNNIS DE LEYENDA ESPECIAL 'DÍA DE LA MUJER' - CONCEPCIÓN ARENAL", "Clan", 245598]],
  ],
  ejemplos: [
    ["¿Cuántos años pasaron entre el Ictíneo de Monturiol (1859) y el submarino de Peral (1888)?", ["1888 − 1859."], "29 años."],
    ["Si en 1860 tres de cada cuatro personas no sabían leer, ¿qué porcentaje era?", ["3/4 = 75/100."], "El 75 %."],
  ],
  errores: ["Pensar que solo los soldados participaron en la guerra de la Independencia.", "Creer que con la Ley Moyano todos los niños empezaron a ir a la escuela: faltaban escuelas y muchos trabajaban."],
  ejercicios: [
    ["b", "¿Qué hizo Agustina de Aragón?", "Disparó un cañón en la defensa de Zaragoza en 1808."],
    ["b", "¿Qué obra escribió Zorrilla en 1844?", "Don Juan Tenorio."],
    ["b", "¿Qué inventó Isaac Peral?", "Un submarino eléctrico capaz de lanzar torpedos."],
    ["b", "¿Qué estableció la Ley Moyano de 1857?", "La enseñanza primaria obligatoria de 6 a 9 años."],
    ["b", "¿Qué se celebra el 17 de mayo?", "El Día de las Letras Gallegas, en honor a Rosalía de Castro."],
    ["m", "¿Qué características tenía el Romanticismo?", "Importancia de los sentimientos, la libertad, la naturaleza y las leyendas."],
    ["m", "¿Por qué Concepción Arenal fue a clase vestida de hombre?", "Porque las mujeres no podían estudiar en la universidad."],
    ["m", "Ordena: teléfono, fotografía, Ictíneo, submarino de Peral.", "Fotografía (1839), Ictíneo (1859), teléfono (1876), submarino (1888)."],
    ["m", "¿Por qué muchos niños no iban a la escuela a pesar de la ley?", "Porque faltaban escuelas y tenían que trabajar."],
    ["m", "¿Qué retrató Goya en Los desastres de la guerra?", "El sufrimiento de la población durante la guerra."],
    ["a", "¿Por qué muchos inventos españoles no se desarrollaron en España?", "Porque había poco dinero para investigar y poca industria."],
    ["a", "Compara la escuela del siglo XIX con la de hoy en tres aspectos.", "Respuesta abierta: separación por sexos, castigos, memoria, obligatoriedad…"],
    ["a", "¿Qué logró Emilia Pardo Bazán en 1916?", "Fue la primera mujer catedrática de una universidad española."],
    ["a", "Explica la frase «Odia el delito y compadece al delincuente».", "Hay que rechazar el delito pero tratar con humanidad a quien lo comete."],
  ],
  quiz: [
    ["Manuela Malasaña participó en el levantamiento del…", ["2 de mayo de 1808 en Madrid", "sitio de Gerona", "1898"], "Guerra."],
    ["Las Rimas y Leyendas las escribió…", ["Bécquer", "Espronceda", "Larra"], "Romanticismo."],
    ["El Ictíneo navegó en…", ["1859", "1808", "1931"], "Inventos."],
    ["La Institución Libre de Enseñanza se fundó en…", ["1876", "1812", "1978"], "Escuela."],
    ["La primera mujer catedrática de universidad en España fue…", ["Emilia Pardo Bazán", "Rosalía de Castro", "Agustina de Aragón"], "Pioneras."],
  ],
  examen: [
    ["El submarino de Peral se botó en…", ["1888 en Cádiz", "1859 en Barcelona", "1808 en Madrid"], "Lectura."],
    ["Hacia 1860, las personas analfabetas en España eran…", ["tres de cada cuatro", "una de cada diez", "ninguna"], "Escuela."],
  ],
  tarjetas: [
    ["Mujeres de 1808", "Manuela Malasaña, Clara del Rey, Agustina de Aragón, compañía de Santa Bárbara."],
    ["Romanticismo", "Espronceda, Larra, Zorrilla, Bécquer, Rosalía de Castro."],
    ["Inventos", "Fotografía 1839, Ictíneo 1859, teléfono 1876, submarino de Peral 1888."],
    ["Escuela y derechos", "Ley Moyano 1857; Concepción Arenal; Pardo Bazán, catedrática en 1916."],
  ],
  glosario: [
    ["Asedio", "Cerco de una ciudad por un ejército."],
    ["Levantamiento", "Rebelión de la población contra un poder."],
    ["Romanticismo", "Movimiento cultural que exalta los sentimientos y la libertad."],
    ["Rima", "Poema breve; nombre de los poemas de Bécquer."],
    ["Telégrafo", "Sistema para enviar mensajes a distancia por señales."],
    ["Submarino", "Barco que navega bajo el agua."],
    ["Torpedo", "Proyectil que se desplaza bajo el agua."],
    ["Analfabeto", "Persona que no sabe leer ni escribir."],
    ["Ley Moyano", "Ley de educación de 1857 que hizo obligatoria la primaria."],
    ["Cátedra", "Puesto de profesor del nivel más alto en la universidad."],
    ["Visitadora de prisiones", "Cargo para vigilar las condiciones de las cárceles."],
    ["Patente", "Documento que reconoce un invento a su autor."],
  ],
  situacion: {
    titulo: "El museo del siglo XIX",
    reto: "La clase monta un museo con fichas, objetos y representaciones sobre personajes e inventos del siglo XIX.",
    pasos: ["Repartid salas: la guerra de la Independencia, el Romanticismo, los inventos, la escuela y las mujeres pioneras.", "Investigad cada tema y preparad fichas, maquetas (por ejemplo, del submarino) y recitados de poemas.", "Elaborad una línea del tiempo gigante del siglo XIX que recorra todo el museo.", "Haced de guías para otros cursos y para las familias."],
    producto: "Un museo del siglo XIX con salas temáticas y visitas guiadas.",
    evaluacion: ["Sitúa hechos en el tiempo.", "Investiga personajes y acontecimientos.", "Elabora materiales originales.", "Explica con claridad a un público."],
  },
});
