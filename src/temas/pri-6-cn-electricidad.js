// Ciencias de la Naturaleza 6º de Primaria: la electricidad y el magnetismo. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF } = require("./_pri6b");

// Bombilla, pila e interruptor para circuitos.
const bombilla = (x, y, on = true) => `<circle cx="${x}" cy="${y}" r="12" fill="${on ? "#fde047" : "var(--card)"}" stroke="var(--ink)" stroke-width="2"/><path d="M${x - 6} ${y - 6} l12 12 M${x + 6} ${y - 6} l-12 12" stroke="var(--ink)" stroke-width="1.5"/>`;
const pila = (x, y) => `<path d="M${x - 4} ${y - 14} v28 M${x + 4} ${y - 8} v16" stroke="var(--ink)" stroke-width="3"/>`;
const imanBarra = (x, y, w = 90) => `<rect x="${x}" y="${y}" width="${w / 2}" height="24" fill="var(--red)"/><rect x="${x + w / 2}" y="${y}" width="${w / 2}" height="24" fill="var(--pen)"/><text x="${x + w / 4}" y="${y + 17}" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">N</text><text x="${x + (3 * w) / 4}" y="${y + 17}" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">S</text>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La electricidad y el magnetismo",
  minutos: 50,
  objetivos: ["Explicar qué son las cargas eléctricas y la electricidad estática", "Conocer la corriente eléctrica, los materiales conductores y aislantes", "Montar y representar circuitos en serie y en paralelo", "Describir los imanes, la brújula y la relación entre electricidad y magnetismo", "Usar la electricidad con seguridad"],
  claves: ["carga eléctrica", "electricidad estática", "corriente eléctrica", "conductor", "aislante", "circuito", "generador", "interruptor", "serie", "paralelo", "imán", "polo", "brújula", "electroimán"],
  pregunta: {
    texto: "Frotas un globo en tu pelo y lo acercas a la pared: ¡se queda pegado! Y si lo acercas a tu cabeza, los pelos se levantan. ¿Qué está pasando?",
    respuesta: "Al frotar, el globo arranca unas partículas diminutas con <mark>carga eléctrica</mark> negativa (electrones) de tu pelo. El globo queda cargado negativamente y tu pelo, positivamente. Como las <b>cargas distintas se atraen</b>, el globo atrae al pelo y se pega a la pared. Es la <b>electricidad estática</b>.",
  },
  bloques: [
    {
      html: `<h3>Las cargas eléctricas</h3><p>Toda la materia está formada por átomos, y dentro de los átomos hay partículas todavía más pequeñas con <mark>carga eléctrica</mark>: los <b>protones</b>, con carga positiva (+), y los <b>electrones</b>, con carga negativa (−). Normalmente, un cuerpo tiene tantas cargas positivas como negativas, y decimos que es <b>neutro</b>.</p><p>Las cargas eléctricas siguen una regla muy sencilla:</p><p>• Las cargas del <b>mismo signo se repelen</b> (se alejan): + con + o − con −.<br>• Las cargas de <b>distinto signo se atraen</b>: + con −.</p><p>Los electrones pueden pasar de un cuerpo a otro. Cuando un cuerpo gana electrones, queda cargado negativamente; si los pierde, queda cargado positivamente. Esto es lo que hace funcionar toda la electricidad, desde un rayo hasta tu ordenador.</p>`,
      svg: svg("Cargas iguales se repelen y cargas distintas se atraen", `${tit("Atraer o repeler")}${[[50, "+", "+", COL.rojo, COL.rojo, "se repelen", 1], [50, "−", "−", COL.azul, COL.azul, "se repelen", 1], [50, "+", "−", COL.rojo, COL.azul, "se atraen", 0]].map(([_, a, b, ca, cb, s, rep], i) => { const y = 54 + i * 42; return `<circle cx="${rep ? 50 : 60}" cy="${y}" r="13" fill="${ca}" fill-opacity=".85"/>${t(rep ? 50 : 60, y + 5, a, { size: 16, color: "#fff" })}<circle cx="${rep ? 150 : 140}" cy="${y}" r="13" fill="${cb}" fill-opacity=".85"/>${t(rep ? 150 : 140, y + 5, b, { size: 16, color: "#fff" })}${rep ? fl(36, y, 22, y, "var(--muted)", 2) + fl(164, y, 178, y, "var(--muted)", 2) : fl(76, y, 94, y, "var(--muted)", 2) + fl(124, y, 106, y, "var(--muted)", 2)}${et(220, y + 4, s, 70, { size: 11, color: rep ? COL.rojo : COL.verde })}`; }).join("")}`),
    },
    {
      html: `<h3>La electricidad estática</h3><p>Cuando frotamos dos materiales, algunos electrones pasan de uno a otro. Los cuerpos quedan cargados y la carga se queda quieta en ellos: es la <mark>electricidad estática</mark>.</p><p>La vemos en muchas situaciones: un globo frotado que atrae trocitos de papel; el pelo que se pega al peine; el chasquido y la chispita al quitarte un jersey de lana a oscuras; o el pequeño calambrazo al tocar la puerta de un coche o a otra persona tras caminar sobre una moqueta.</p><p>El ejemplo más espectacular es el <mark>rayo</mark>. Dentro de las nubes de tormenta, el roce entre gotas de agua y cristales de hielo separa cargas enormes. Cuando la diferencia es muy grande, salta una descarga gigantesca entre la nube y el suelo o entre nubes. El rayo calienta tanto el aire que este se expande de golpe y produce el <b>trueno</b>.</p><p>Por eso en una tormenta no hay que refugiarse bajo un árbol aislado. Los edificios llevan <b>pararrayos</b>, una barra de metal en lo alto unida al suelo por un cable, que conduce el rayo a la tierra sin peligro.</p>`,
      svg: svg("Globo cargado negativamente atrae trocitos de papel; nube de tormenta y pararrayos", `${tit("Electricidad estática")}<ellipse cx="66" cy="74" rx="30" ry="36" fill="var(--red)" fill-opacity=".8"/><path d="M66 110 q-4 10 4 20" stroke="var(--muted)" fill="none"/>${[[54, 64], [72, 58], [62, 84], [80, 80]].map(([x, y]) => t(x, y, "−", { size: 14, color: "#fff" })).join("")}${[[40, 152], [60, 158], [80, 150], [96, 156]].map(([x, y]) => `<rect x="${x}" y="${y}" width="8" height="5" fill="var(--muted)" transform="rotate(${x} ${x} ${y})"/>`).join("")}${et(66, 176, "globo y papelitos", 110, { size: 10, weight: 400 })}<g transform="translate(0 12)"><path d="M150 56 q-10 -24 18 -26 q10 -16 30 -6 q24 -8 30 14 q14 8 0 18z" fill="#94a3b8"/><path d="M190 58 l-12 26 h12 l-14 30" stroke="var(--sun)" stroke-width="3" fill="none"/></g><path d="M226 150 V92 M220 98 l6 -8 l6 8" stroke="var(--ink)" stroke-width="2.5" fill="none"/><rect x="206" y="120" width="40" height="34" fill="var(--card)" stroke="var(--ink)"/>${et(196, 176, "rayo y pararrayos", 110, { size: 10, weight: 400 })}`),
    },
    {
      html: `<h3>La corriente eléctrica</h3><p>Cuando las cargas eléctricas, en concreto los electrones, se <b>mueven de forma ordenada</b> a través de un material, se produce una <mark>corriente eléctrica</mark>. Es como el agua que corre por una tubería: para que fluya hace falta algo que la empuje, como una bomba.</p><p>Ese «empuje» lo da un <b>generador</b>: una pila, una batería, un enchufe conectado a una central o una placa solar. La fuerza con que empuja se llama <b>voltaje</b> o tensión, y se mide en <b>voltios (V)</b>. Una pila normal tiene 1,5 V; un enchufe de casa, 230 V.</p><p>La corriente eléctrica es la forma de energía más usada en casa porque se transporta fácilmente por cables y se transforma con facilidad en otras: en luz (bombillas), en movimiento (motores de una batidora o un tren), en calor (horno, radiador) o en sonido (altavoces).</p><p>Las <b>pilas usadas</b> contienen sustancias contaminantes: nunca se tiran a la basura normal, sino a los contenedores especiales de pilas.</p>`,
      svg: svg("Comparación: el agua fluye por una tubería empujada por una bomba y la corriente fluye por un cable empujada por una pila", `${tit("Como el agua por un tubo")}${cj2(14, 40, 100, 44, "bomba", "empuja el agua", COL.agua)}${cj2(146, 40, 100, 44, "pila", "empuja electrones", COL.sol)}${fl(120, 62, 140, 62)}<path d="M20 112 H240" stroke="var(--sun)" stroke-width="10" stroke-linecap="round"/>${[50, 90, 130, 170, 210].map((x) => `<circle cx="${x}" cy="112" r="3.5" fill="var(--pen)"/>${fl(x + 6, 112, x + 18, 112, "var(--pen)", 1.5)}`).join("")}${tx(130, 140, "los electrones se mueven por el cable", 230, { weight: 700 })}${tx(130, 160, "pila: 1,5 V · enchufe: 230 V", 200)}`),
    },
    {
      html: `<h3>Conductores y aislantes</h3><p>No todos los materiales dejan pasar la corriente eléctrica igual de bien.</p><p>Los <mark>conductores</mark> dejan pasar fácilmente la corriente. Son sobre todo los <b>metales</b>: cobre, aluminio, hierro, oro, plata. Por eso los cables tienen por dentro hilos de <b>cobre</b>. El agua con sales (como la del grifo o la del cuerpo humano) y el grafito de la mina del lápiz también conducen.</p><p>Los <mark>aislantes</mark> no dejan pasar la corriente, o la dejan pasar muy mal. Son el <b>plástico</b>, la <b>goma</b>, la madera seca, el vidrio, la cerámica o el aire seco. Por eso los cables están recubiertos de plástico, los enchufes y los mangos de las herramientas de los electricistas son de plástico o goma, y las torres de alta tensión tienen piezas de vidrio o cerámica que sujetan los cables.</p><p>Puedes comprobar si un material es conductor con un <b>circuito de prueba</b>: lo pones entre dos cables; si la bombilla se enciende, es conductor.</p>`,
      svg: svg("Cable eléctrico: hilos de cobre conductores por dentro y funda de plástico aislante por fuera", `${tit("Dentro de un cable")}<rect x="30" y="66" width="160" height="40" rx="20" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/><rect x="186" y="74" width="40" height="24" rx="6" fill="#d97706"/>${[0, 1, 2].map((i) => `<path d="M226 ${78 + i * 8} h16" stroke="#d97706" stroke-width="3"/>`).join("")}${et(110, 124, "funda: plástico", 120, { size: 11, color: COL.azul })}${tx(110, 138, "aislante", 100)}${et(214, 124, "cobre", 70, { size: 11, color: COL.naranja })}${tx(214, 138, "conductor", 70)}${tx(130, 168, "metales conducen · plástico y goma aíslan", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>El circuito eléctrico</h3><p>Un <mark>circuito eléctrico</mark> es un camino <b>cerrado</b> por el que circula la corriente. Sus elementos son:</p><p>• El <b>generador</b> (pila o batería), que da la energía.<br>• Los <b>conductores</b> (cables), por donde pasa la corriente.<br>• Los <b>receptores</b>, que transforman la energía eléctrica en otra útil: bombillas, motores, timbres, altavoces.<br>• Los <b>elementos de control</b>, como el <b>interruptor</b>, que abre o cierra el circuito.</p><p>Si el circuito está <b>cerrado</b>, la corriente circula y la bombilla se enciende. Si está <b>abierto</b> (el interruptor desconectado o un cable suelto), la corriente no pasa y la bombilla se apaga.</p><p>Para dibujar circuitos se usan <b>símbolos</b> que entiende todo el mundo: dos rayas de distinto tamaño para la pila, un círculo con un aspa para la bombilla y una línea inclinada para el interruptor abierto.</p>`,
      svg: svg("Esquema de un circuito cerrado con pila, interruptor y bombilla encendida", `${tit("Un circuito cerrado")}<path d="M50 60 H210 V140 H50 Z" fill="none" stroke="var(--ink)" stroke-width="2.5"/><rect x="40" y="88" width="20" height="26" fill="var(--paper)"/>${pila(50, 100)}<rect x="196" y="88" width="28" height="26" fill="var(--paper)"/>${bombilla(210, 100)}<rect x="110" y="132" width="40" height="16" fill="var(--paper)"/><circle cx="114" cy="140" r="3" fill="var(--ink)"/><circle cx="146" cy="140" r="3" fill="var(--ink)"/><path d="M114 140 L146 140" stroke="var(--ink)" stroke-width="2.5"/>${et(28, 76, "pila", 40, { size: 11, color: COL.sol })}${et(232, 76, "bombilla", 50, { size: 10, color: COL.naranja })}${et(130, 166, "interruptor cerrado", 120, { size: 11, color: COL.verde })}${fl(90, 60, 130, 60, "var(--red)", 2)}${et(130, 50, "corriente", 80, { size: 10, color: COL.rojo })}`),
      video: vid("r6SWnW0EUDI"),
    },
    {
      html: `<h3>Circuitos en serie y en paralelo</h3><p>Cuando un circuito tiene varios receptores, se pueden conectar de dos maneras:</p><p>En un <mark>circuito en serie</mark>, los receptores se colocan <b>uno detrás de otro</b>, en un único camino. La corriente pasa por todos. Si una bombilla se funde o se quita, el circuito se abre y <b>se apagan todas</b>. Además, cuantas más bombillas pongas, menos brilla cada una. Así eran antes algunas luces de Navidad.</p><p>En un <mark>circuito en paralelo</mark>, cada receptor está en un <b>camino distinto</b>, en ramas. Si una bombilla se funde, <b>las demás siguen encendidas</b>, y todas brillan con la misma intensidad. Así está hecha la instalación eléctrica de las casas: por eso puedes apagar la luz de la cocina sin que se apague la nevera.</p><p>En las casas también hay un <b>cuadro eléctrico</b> con interruptores automáticos, que cortan la corriente si hay un fallo para evitar accidentes e incendios.</p>`,
      svg: svg("Dos esquemas: en serie las bombillas en un solo camino; en paralelo cada bombilla en una rama", `${tit("Serie y paralelo")}<path d="M20 50 H110 V120 H20 Z" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="12" y="74" width="16" height="22" fill="var(--paper)"/>${pila(20, 85)}<rect x="44" y="40" width="50" height="20" fill="var(--paper)"/>${bombilla(54, 50)}${bombilla(84, 50)}${et(65, 142, "en serie", 90, { size: 12, color: COL.rojo })}${tx(65, 158, "una se funde:", 100)}${tx(65, 172, "se apagan todas", 100)}
        <path d="M150 50 H240 V120 H150 Z M195 50 V120" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="142" y="74" width="16" height="22" fill="var(--paper)"/>${pila(150, 85)}<rect x="183" y="72" width="24" height="26" fill="var(--paper)"/>${bombilla(195, 85)}<rect x="228" y="72" width="24" height="26" fill="var(--paper)"/>${bombilla(240, 85)}${et(195, 142, "en paralelo", 90, { size: 12, color: COL.verde })}${tx(195, 158, "una se funde:", 100)}${tx(195, 172, "las otras siguen", 100)}`),
    },
    {
      html: `<h3>Los imanes</h3><p>Los <mark>imanes</mark> son objetos que <b>atraen</b> a algunos metales, como el <b>hierro</b>, el níquel y el cobalto. No atraen al cobre, al aluminio, al oro, al plástico ni a la madera. Esta propiedad se llama <b>magnetismo</b>. Hay imanes naturales, como un mineral llamado <b>magnetita</b>, y artificiales, como los de la nevera.</p><p>Todo imán tiene dos <mark>polos</mark>: el <b>polo norte</b> y el <b>polo sur</b>. La fuerza magnética es mayor en los polos. Igual que con las cargas eléctricas:</p><p>• <b>Polos iguales se repelen</b>: norte con norte o sur con sur.<br>• <b>Polos distintos se atraen</b>: norte con sur.</p><p>Si partes un imán por la mitad, ¡no obtienes un polo norte y uno sur separados! Obtienes dos imanes más pequeños, cada uno con sus dos polos.</p><p>La fuerza del imán actúa a distancia y atraviesa algunos materiales, como el papel o el cristal. La zona alrededor de un imán donde se nota su fuerza se llama <b>campo magnético</b>; se puede ver espolvoreando limaduras de hierro sobre un papel encima del imán.</p>`,
      svg: svg("Imán de barra con polos norte y sur, limaduras formando líneas, y polos que se atraen y se repelen", `${tit("Polos de un imán")}<g transform="translate(0 14)">${imanBarra(85, 48)}${[0, 1, 2].map((i) => `<path d="M${88 - i * 4} ${48 - 2} C ${100} ${36 - i * 8}, ${160} ${36 - i * 8}, ${172 + i * 4} ${46}" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="3 3" fill="none"/><path d="M${88 - i * 4} ${74} C ${100} ${88 + i * 8}, ${160} ${88 + i * 8}, ${172 + i * 4} ${74}" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="3 3" fill="none"/>`).join("")}</g>${imanBarra(14, 130, 60)}${imanBarra(78, 130, 60)}${et(74, 170, "N-S: se atraen", 110, { size: 10, color: COL.verde })}<rect x="150" y="130" width="30" height="24" fill="var(--pen)"/>${t(165, 147, "S", { size: 14, color: "#fff" })}<rect x="186" y="130" width="30" height="24" fill="var(--pen)"/>${t(201, 147, "S", { size: 14, color: "#fff" })}${et(196, 170, "S-S: se repelen", 110, { size: 10, color: COL.rojo })}`),
      video: vid("7afwV_aJcjk"),
    },
    {
      html: `<h3>La Tierra es un gran imán: la brújula</h3><p>La <mark>Tierra</mark> se comporta como un <b>imán gigante</b>, por su núcleo de hierro y níquel en movimiento. Su campo magnético rodea todo el planeta y además nos protege de partículas peligrosas que llegan del Sol. Cuando esas partículas chocan con la atmósfera cerca de los polos, se forman las <b>auroras boreales</b>.</p><p>La <mark>brújula</mark> es un instrumento que aprovecha este magnetismo. Tiene una <b>aguja imantada</b> que puede girar libremente y que siempre se orienta en la dirección <b>norte-sur</b>. Su punta norte (normalmente pintada de rojo) señala hacia el <b>norte magnético</b> de la Tierra, que está cerca del Polo Norte geográfico.</p><p>La brújula fue inventada en China hace casi mil años y permitió a los navegantes orientarse en alta mar aunque no se viera el sol ni las estrellas. Gracias a ella fueron posibles los grandes viajes de exploración, como los de Colón y Magallanes. Hoy se sigue usando en montaña y en las carreras de orientación, y los móviles llevan una brújula electrónica.</p>`,
      svg: svg("Brújula con la aguja señalando el norte y la rosa de los vientos", `${tit("La brújula")}<circle cx="130" cy="100" r="62" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><circle cx="130" cy="100" r="54" fill="none" stroke="var(--line)"/>${[["N", 130, 54], ["S", 130, 154], ["E", 180, 105], ["O", 80, 105]].map(([l, x, y]) => t(x, y, l, { size: 14, color: l === "N" ? COL.rojo : "var(--ink)" })).join("")}<path d="M130 100 L122 100 L130 60 L138 100 Z" fill="var(--red)"/><path d="M130 100 L122 100 L130 140 L138 100 Z" fill="var(--muted)"/><circle cx="130" cy="100" r="4" fill="var(--ink)"/>${et(222, 60, "la aguja", 60, { size: 10, color: COL.rojo })}${tx(222, 74, "señala", 60)}${tx(222, 88, "el norte", 60)}`),
    },
    {
      html: `<h3>Electricidad y magnetismo, unidos</h3><p>En 1820, el científico danés <b>Hans Christian Ørsted</b> se dio cuenta de algo sorprendente: al pasar corriente por un cable, la aguja de una brújula cercana se movía. Descubrió así que <b>la corriente eléctrica produce magnetismo</b>. Es el <mark>electromagnetismo</mark>.</p><p>Si enrollamos un cable alrededor de un clavo de hierro y conectamos sus extremos a una pila, el clavo se convierte en un imán: es un <mark>electroimán</mark>. Su gran ventaja es que se puede <b>encender y apagar</b>: deja de atraer cuando cortamos la corriente. Las grúas de los desguaces usan electroimanes enormes para levantar coches y soltarlos donde quieren. También hay electroimanes en los timbres, los altavoces y los trenes de levitación magnética.</p><p>Y al revés: el inglés <b>Michael Faraday</b> descubrió que, al mover un imán cerca de un cable enrollado, se produce corriente eléctrica. En esta idea se basan los <b>generadores</b> de las centrales eléctricas, la dinamo de las bicicletas y los <b>motores eléctricos</b>, que transforman la electricidad en movimiento.</p>`,
      svg: svg("Electroimán: un clavo con un cable enrollado conectado a una pila atrae clips", `${tit("Un electroimán")}<rect x="70" y="80" width="110" height="14" rx="3" fill="#94a3b8"/><path d="M180 80 l14 7 l-14 7z" fill="#94a3b8"/>${[...Array(9)].map((_, i) => `<ellipse cx="${84 + i * 10}" cy="87" rx="4" ry="11" fill="none" stroke="#d97706" stroke-width="2.5"/>`).join("")}<path d="M84 98 Q60 140 80 150 M164 98 Q190 140 170 150" stroke="#d97706" stroke-width="2.5" fill="none"/><rect x="80" y="140" width="90" height="22" rx="4" fill="var(--sun)" stroke="var(--ink)"/>${t(125, 155, "pila", { size: 11 })}${[[206, 98], [214, 112], [204, 124]].map(([x, y]) => `<rect x="${x}" y="${y}" width="16" height="7" rx="3.5" fill="none" stroke="var(--muted)" stroke-width="2"/>`).join("")}${et(212, 146, "clips", 50, { size: 11, color: COL.gris })}${et(80, 60, "cable de cobre enrollado", 140, { size: 11, color: COL.naranja })}${et(214, 74, "clavo", 50, { size: 11, color: COL.gris })}`),
    },
    {
      html: `<h3>La electricidad, con seguridad</h3><p>La electricidad es muy útil, pero también <b>peligrosa</b>. El cuerpo humano conduce la corriente, y una descarga de un enchufe puede causar quemaduras graves o incluso la muerte. Por eso hay que seguir unas <mark>normas de seguridad</mark>:</p><p>• No meter nunca los dedos ni objetos de metal en los enchufes.<br>• No tocar aparatos eléctricos con las manos mojadas ni usarlos cerca del agua (bañera, lavabo).<br>• Desenchufar tirando de la clavija, nunca del cable.<br>• No usar cables pelados o aparatos rotos, y avisar a un adulto.<br>• No sobrecargar los enchufes con muchos ladrones.<br>• No acercarse a torres o cables de alta tensión ni subir a postes, ni volar cometas cerca de ellos.<br>• No tocar nunca a una persona que esté recibiendo una descarga: primero hay que cortar la corriente en el cuadro eléctrico.</p><p>Para experimentar en clase usamos siempre <b>pilas de poco voltaje</b>, que no son peligrosas, y nunca la corriente de los enchufes.</p>`,
      svg: svg("Normas de seguridad: no meter objetos en el enchufe, no tocar aparatos con las manos mojadas, desenchufar por la clavija, lejos de la alta tensión", `${tit("Normas de seguridad")}${filas([["Enchufes", "nada de dedos ni metales", COL.rojo], ["Agua", "nunca con manos mojadas", COL.agua], ["Clavija", "desenchufa sin tirar del cable", COL.naranja], ["Cables", "si están pelados, avisa", COL.morado], ["Alta tensión", "lejos de torres y postes", COL.gris]], 50, 25, { wa: 80, wb: 150 })}`),
    },
  ],
  figura: {
    titulo: "Electricidad y magnetismo en ocho ideas",
    svg: rejilla([
      ["Cargas", "iguales se repelen", COL.rojo],
      ["Estática", "globo, rayo", COL.morado],
      ["Corriente", "electrones en movimiento", COL.sol],
      ["Conductores", "metales; aislantes: plástico", COL.naranja],
      ["Circuito", "pila, cables, receptor…", COL.verde],
      ["Serie / paralelo", "un camino o ramas", COL.azul],
      ["Imán", "polos norte y sur", COL.rojo],
      ["Electroimán", "se enciende y se apaga", COL.gris],
    ], 4, 86, "Resumen de electricidad y magnetismo"),
  },
  video: vgen("dzcG5a5kd2M", "la electricidad para niños"),
  ejemplos: [
    { enunciado: "Montas un circuito con una pila, un interruptor y una bombilla, pero no se enciende. ¿Qué puede pasar?",
      pasos: ["Comprobar que el interruptor está cerrado.", "Comprobar que los cables están bien conectados y el circuito es cerrado.", "Comprobar que la bombilla no está fundida y que la pila tiene carga."],
      resultado: "El circuito debe estar cerrado y todos los elementos deben funcionar." },
    { enunciado: "En casa se funde la bombilla del salón, pero la tele y la nevera siguen funcionando. ¿Cómo está la instalación?",
      pasos: ["Si estuviera en serie, al fundirse una bombilla se apagaría todo.", "Como lo demás sigue funcionando, cada aparato tiene su propio camino."],
      resultado: "La instalación está en paralelo." },
    { enunciado: "Tienes clips, una moneda de cobre, un tornillo de hierro, un lápiz y papel de aluminio. ¿Cuáles atraerá un imán?",
      pasos: ["Los imanes atraen hierro, níquel y cobalto.", "Los clips y el tornillo son de hierro o acero.", "El cobre, el aluminio y la madera no son atraídos."],
      resultado: "Solo los clips y el tornillo." },
  ],
  errores: [
    "Pensar que los imanes atraen a todos los metales: no atraen al cobre ni al aluminio.",
    "Creer que un circuito abierto deja pasar la corriente: tiene que estar cerrado.",
    "Confundir conductor y aislante: los metales conducen y el plástico aísla.",
    "Pensar que al partir un imán se separan sus polos: salen dos imanes completos.",
    "Tirar las pilas usadas a la basura normal: van al contenedor de pilas.",
  ],
  ejercicios: [
    { q: "¿Qué pasa al acercar dos cargas positivas? ¿Y una positiva y una negativa?", sol: "Las dos positivas se repelen; la positiva y la negativa se atraen." },
    { q: "Explica por qué un globo frotado se pega a la pared.", sol: "Al frotarlo gana electrones y queda cargado; atrae las cargas de signo contrario de la pared." },
    { q: "¿Qué es un pararrayos y para qué sirve?", sol: "Una barra metálica en lo alto de un edificio unida al suelo; conduce el rayo a tierra sin peligro." },
    { q: "Clasifica en conductores o aislantes: cobre, goma, aluminio, madera seca, vidrio, hierro.", sol: "Conductores: cobre, aluminio, hierro. Aislantes: goma, madera seca, vidrio." },
    { q: "Escribe los cuatro tipos de elementos de un circuito y un ejemplo de cada uno.", sol: "Generador (pila), conductor (cable), receptor (bombilla) y control (interruptor)." },
    { q: "Dibuja con símbolos un circuito con una pila, un interruptor y dos bombillas en paralelo.", sol: "La pila y el interruptor en el camino principal; dos ramas, cada una con una bombilla." },
    { q: "¿Qué ventaja tiene el circuito en paralelo frente al de serie?", sol: "Si un receptor se estropea, los demás siguen funcionando, y todos brillan igual." },
    { q: "¿Qué pasa si acercas el polo norte de un imán al polo norte de otro?", sol: "Se repelen." },
    { q: "¿Por qué la aguja de la brújula señala el norte?", sol: "Porque está imantada y la Tierra se comporta como un gran imán." },
    { q: "¿Qué es un electroimán y qué ventaja tiene sobre un imán normal?", sol: "Un hierro con un cable enrollado por el que pasa corriente; se puede encender y apagar." },
  ],
  quiz: [
    { q: "Los electrones tienen carga…", o: ["negativa", "positiva", "ninguna"], a: 0, e: "Negativa." },
    { q: "Las cargas del mismo signo…", o: ["se atraen", "se suman", "se repelen"], a: 2, e: "Se repelen." },
    { q: "El rayo es un ejemplo de…", o: ["magnetismo", "electricidad estática", "luz solar"], a: 1, e: "Una gran descarga de electricidad estática." },
    { q: "El voltaje se mide en…", o: ["julios", "gramos", "voltios"], a: 2, e: "Voltios." },
    { q: "Un buen conductor es…", o: ["el cobre", "el plástico", "la madera"], a: 0, e: "El cobre." },
    { q: "La bombilla de un circuito es un…", o: ["aislante", "receptor", "generador"], a: 1, e: "Receptor." },
    { q: "En serie, si se funde una bombilla…", o: ["las otras brillan más", "no pasa nada", "se apagan todas"], a: 2, e: "Se abre el circuito." },
    { q: "Las casas tienen la instalación…", o: ["en serie", "sin cables", "en paralelo"], a: 2, e: "En paralelo." },
    { q: "Un imán atrae al…", o: ["plástico", "aluminio", "hierro"], a: 2, e: "Hierro." },
    { q: "Descubrió que la corriente mueve la brújula…", o: ["Newton", "Linneo", "Ørsted"], a: 2, e: "Ørsted, en 1820." },
  ],
  examen: [
    { q: "La brújula se inventó en…", o: ["Roma", "Egipto", "China"], a: 2, e: "En China." },
    { q: "El interruptor sirve para…", o: ["dar energía", "abrir y cerrar el circuito", "dar luz"], a: 1, e: "Abrir y cerrar el circuito." },
    { q: "El cable lleva por dentro…", o: ["madera", "plástico", "cobre"], a: 2, e: "Hilos de cobre." },
    { q: "Ante alguien que recibe una descarga, primero…", o: ["lo tocamos", "cortamos la corriente", "le echamos agua"], a: 1, e: "Cortar la corriente." },
  ],
  feynman: ["Qué es la corriente eléctrica y qué necesita un circuito", "En qué se diferencian un circuito en serie y uno en paralelo", "Qué tienen en común los imanes y la electricidad"],
  mapa: mapa("ELECTRICIDAD", "var(--pri)", [
    ["Cargas", "+ y − · estática · rayo", COL.rojo],
    ["Corriente", "conductores · aislantes", COL.sol],
    ["Circuitos", "serie · paralelo", COL.verde],
    ["Magnetismo", "imán · brújula · electroimán", COL.azul],
  ], 250),
  tarjetas: [
    ["Carga eléctrica", "Propiedad de protones (+) y electrones (−)."],
    ["Electricidad estática", "Cargas acumuladas y quietas en un cuerpo."],
    ["Corriente eléctrica", "Movimiento ordenado de electrones por un conductor."],
    ["Aislante", "Material que no deja pasar la corriente: plástico, goma."],
    ["Circuito en serie", "Receptores uno tras otro en un solo camino."],
    ["Circuito en paralelo", "Cada receptor en su propia rama."],
    ["Polos de un imán", "Norte y sur; iguales se repelen, distintos se atraen."],
    ["Electroimán", "Imán que funciona con corriente y se puede apagar."],
  ],
  familias: ["Haced el experimento del globo frotado con trocitos de papel.", "Buscad por casa qué objetos atrae un imán de nevera.", "Fabricad un electroimán con un clavo, cable fino y una pila de 4,5 V (siempre con un adulto).", "Repasad juntos las normas de seguridad con los enchufes de casa."],
  profesores: PROF("Ciencias de la Naturaleza: electricidad (cargas, electricidad estática, corriente, conductores y aislantes), circuitos eléctricos en serie y en paralelo, magnetismo (imanes, brújula, campo magnético terrestre), electromagnetismo y uso seguro de la electricidad", ["Montaje de circuitos en serie y en paralelo con pilas de petaca y portalámparas.", "Probador de conductividad con distintos materiales.", "Construcción de una brújula con una aguja imantada sobre un corcho en agua."]),
  fuentes: [RD, wiki("Electricidad", "Electricidad"), wiki("Magnetismo", "Magnetismo"), { t: "Museo Nacional de Ciencia y Tecnología (MUNCYT)", url: "https://www.muncyt.es/" }],
  revisado: REV,
};

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir voltaje, intensidad y resistencia con la analogía del agua", "Dibujar circuitos con símbolos eléctricos", "Construir un electroimán y explicar cómo funciona un motor", "Conocer la historia de la electricidad y el uso responsable de pilas y baterías"],
  lectura: { titulo: "Las ancas de rana", html: `<p>Hacia 1780, en la ciudad italiana de Bolonia, el médico <b>Luigi Galvani</b> estaba estudiando ranas en su laboratorio. Un día observó algo asombroso: al tocar los nervios de unas patas de rana con dos metales distintos, las patas se movían bruscamente, como si estuvieran vivas.</p><p>Galvani pensó que dentro de los animales había una «electricidad animal» que salía de los músculos.</p><p>Otro científico italiano, <b>Alessandro Volta</b>, no estaba de acuerdo. Pensaba que la electricidad no venía de la rana, sino de los <b>dos metales</b> diferentes unidos por una sustancia húmeda. La rana solo servía para notarla.</p><p>Para demostrarlo, Volta construyó en 1800 una torre con discos de cinc y de cobre, separados por trozos de cartón empapados en agua salada. Al unir con un cable la parte de arriba y la de abajo, ¡salía una corriente eléctrica continua! Sin ninguna rana. Había inventado la <b>pila eléctrica</b>.</p><p>Los dos tenían parte de razón: hoy sabemos que nuestros nervios funcionan con pequeñas señales eléctricas. En honor a Volta, la unidad del voltaje se llama <b>voltio</b>, y de Galvani viene la palabra «galvanizar».</p>` },
  tras: {
    "La corriente eléctrica": [
      ["Voltaje, intensidad y resistencia", `<p>Para entender la corriente eléctrica, compárala con el agua que circula por unas tuberías:</p><ul><li>El <b>voltaje</b> es como la <b>presión</b> que empuja el agua. Lo da la pila o el enchufe. Se mide en <b>voltios (V)</b>. Una pila normal tiene 1,5 V, una pila de petaca 4,5 V, y los enchufes de las casas en España, 230 V.</li><li>La <b>intensidad</b> es la <b>cantidad de agua</b> que pasa cada segundo. Es la cantidad de electricidad que circula. Se mide en <b>amperios (A)</b>.</li><li>La <b>resistencia</b> es lo <b>estrecha</b> que es la tubería: cuanto más estrecha, más le cuesta pasar al agua. Cada material y cada aparato tiene su resistencia. Se mide en <b>ohmios (Ω)</b>.</li></ul><p>Las tres magnitudes están relacionadas. Si aumentamos el voltaje, pasa más corriente: por eso una bombilla brilla más con dos pilas que con una. Si aumentamos la resistencia, pasa menos corriente.</p><p>Esta relación la descubrió el alemán Georg Ohm en el siglo XIX. Una advertencia muy importante: el voltaje de los enchufes es <b>peligroso</b>. Los experimentos se hacen siempre con pilas, nunca con la corriente de casa.</p>`,
        L6.filas("Como el agua", [["voltaje (V)", "presión que empuja", cRO], ["intensidad (A)", "cantidad que pasa", cAZ], ["resistencia (Ω)", "tubería estrecha", cNA], ["enchufe", "230 V: ¡peligro!", cMO]])],
    ],
    "Circuitos en serie y en paralelo": [
      ["Dibujar circuitos con símbolos", `<p>Los electricistas y los ingenieros no dibujan las bombillas y las pilas como son en realidad, porque tardarían mucho. Usan <b>símbolos</b> sencillos que todo el mundo entiende. Un dibujo de un circuito con símbolos se llama <b>esquema eléctrico</b>.</p><p>Los símbolos más usados son:</p><ul><li><b>Pila</b>: dos rayas paralelas, una larga (polo positivo) y otra corta (polo negativo).</li><li><b>Bombilla</b>: un círculo con una cruz dentro.</li><li><b>Interruptor</b>: una línea interrumpida con un trocito inclinado; si está abierto, la corriente no pasa.</li><li><b>Motor</b>: un círculo con una letra M.</li><li><b>Cables</b>: líneas rectas que unen los elementos, dibujadas con regla y con esquinas en ángulo recto.</li></ul><p>Con estos símbolos se puede dibujar cualquier circuito en pocos segundos y comprobar si funcionará: el camino de la corriente debe salir de un polo de la pila, pasar por los receptores y volver al otro polo, sin interrupciones.</p><p>Un consejo para dibujarlos: empieza siempre por la pila, sigue el camino de la corriente con el dedo y coloca los elementos por orden. Si es en paralelo, dibuja una rama para cada bombilla.</p>`,
        H6.flujo("Recorrido de la corriente", ["Pila|polo +", "Interruptor|cerrado", "Bombilla", "Pila|polo −"], cNA)],
    ],
    "Electricidad y magnetismo, unidos": [
      ["El electroimán y el motor eléctrico", `<p>Gracias al descubrimiento de Ørsted podemos fabricar un <b>electroimán</b>: un imán que funciona solo cuando pasa la corriente. Es muy fácil:</p><ol><li>Enrolla un cable fino con funda muchas veces alrededor de un clavo grande de hierro, formando una bobina.</li><li>Conecta los extremos del cable a una pila de 4,5 V, siempre con la ayuda de un adulto.</li><li>Acerca el clavo a unos clips: ¡los atrae! Al desconectar la pila, los clips caen.</li></ol><p>Cuantas más vueltas tenga el cable, más fuerte es el electroimán. Los electroimanes se usan en las <b>grúas</b> que levantan chatarra en los desguaces, en los <b>timbres</b>, en las cerraduras eléctricas y en los <b>altavoces</b>.</p><p>El <b>motor eléctrico</b> también funciona gracias al magnetismo. Dentro tiene imanes y una bobina que puede girar. Al pasar la corriente, la bobina se convierte en un electroimán que es atraído y empujado por los imanes, y empieza a girar sin parar. Así transforma la energía eléctrica en <b>movimiento</b>.</p><p>Hay motores eléctricos en los ventiladores, las lavadoras, los juguetes, los trenes y los coches eléctricos.</p>`,
        H6.dos("Magnetismo útil", ["Electroimán", ["cable + clavo", "solo con corriente", "grúas, timbres"], cAZ], ["Motor", ["bobina e imanes", "electricidad → giro", "trenes, lavadoras"], cVE]), ["0MlujhiwMEU", "Cómo hacer un electroimán casero (Experimentos Caseros)", "ExpCaseros", 1661521]],
    ],
  },
  final: [
    ["Una breve historia de la electricidad", `<p>La electricidad ha cambiado la forma de vivir en solo unos doscientos años:</p><ul><li>Hace unos 2 600 años, el griego <b>Tales de Mileto</b> observó que el ámbar frotado atraía plumas y pelusas. En griego, ámbar se dice <i>élektron</i>: de ahí viene la palabra electricidad.</li><li>En el siglo XVIII, el estadounidense <b>Benjamin Franklin</b> estudió los rayos y demostró que eran electricidad. Inventó el <b>pararrayos</b>, que protege los edificios.</li><li>En <b>1800</b>, Alessandro <b>Volta</b> inventó la pila: por primera vez se podía tener corriente continua.</li><li>En <b>1831</b>, el inglés <b>Michael Faraday</b> descubrió cómo producir electricidad moviendo un imán dentro de una bobina. Así funcionan hoy las dinamos y los generadores de todas las centrales.</li><li>En <b>1879</b>, <b>Thomas Edison</b> y su equipo fabricaron una bombilla práctica que duraba muchas horas, y después construyó centrales para llevar la luz a las casas.</li></ul><p>Desde entonces, la electricidad mueve trenes, ordenadores, hospitales y teléfonos. Es difícil imaginar un día sin ella.</p>`,
      L6.filas("Línea del tiempo", [["siglo VI a. C.", "Tales: el ámbar", cNA], ["1800", "pila de Volta", cAZ], ["1831", "Faraday: inducción", cVE], ["1879", "bombilla de Edison", cRO]]), ["QhK9x5HI-Os", "Alessandro Volta y la Batería", "GRIMTEC_Investigación", 35726]],
    ["Pilas, baterías y coches eléctricos", `<p>Una <b>pila</b> transforma energía química en energía eléctrica. Cuando las sustancias de su interior se gastan, la pila deja de funcionar. Las <b>baterías recargables</b>, en cambio, se pueden volver a cargar muchas veces conectándolas a la corriente: las llevan los móviles, las tabletas, los patinetes y los coches eléctricos.</p><p>Las baterías más usadas hoy son las de <b>ion-litio</b>, porque guardan mucha energía y pesan poco. Gracias a ellas existen los <b>coches eléctricos</b>, que no echan humo por el tubo de escape. Si además se cargan con electricidad renovable, contaminan mucho menos.</p><p>Pero las pilas y las baterías contienen metales que pueden contaminar el suelo y el agua si se tiran a la basura normal. Por eso:</p><ul><li>Las pilas gastadas se llevan a los <b>contenedores específicos de pilas</b> que hay en tiendas, supermercados y puntos limpios.</li><li>Conviene usar <b>pilas recargables</b>: una sola puede sustituir a cientos de pilas normales.</li><li>Las baterías de móviles y aparatos viejos se llevan al <b>punto limpio</b>.</li><li>Nunca hay que abrir, pinchar ni calentar una batería: puede arder.</li></ul><p>Reciclarlas permite recuperar metales valiosos como el litio, el níquel o el cobalto.</p>`,
      H6.dos("Pilas", ["Normal", ["se gasta", "un solo uso", "contenedor de pilas"], cRO], ["Recargable", ["se recarga", "cientos de usos", "móviles, coches"], cVE])],
  ],
  ejemplos: [
    ["Una linterna funciona con 3 pilas de 1,5 V en serie. ¿Qué voltaje recibe la bombilla?", ["En serie, los voltajes se suman.", "1,5 + 1,5 + 1,5."], "4,5 V."],
    ["Un electroimán con 20 vueltas de cable levanta 4 clips. ¿Qué harías para que levante más?", ["La fuerza aumenta con el número de vueltas.", "También con más voltaje (con cuidado)."], "Dar más vueltas al cable."],
  ],
  errores: ["Confundir voltaje con intensidad: el voltaje empuja y la intensidad es lo que pasa.", "Tirar las pilas gastadas a la basura normal."],
  ejercicios: [
    ["b", "¿En qué unidades se miden el voltaje, la intensidad y la resistencia?", "Voltios, amperios y ohmios."],
    ["b", "¿Qué voltaje tienen los enchufes de las casas en España?", "230 V."],
    ["b", "¿Qué inventó Volta en 1800?", "La pila eléctrica."],
    ["b", "Describe el símbolo de una bombilla en un esquema.", "Un círculo con una cruz dentro."],
    ["b", "¿Dónde se tiran las pilas gastadas?", "En contenedores específicos de pilas o en el punto limpio."],
    ["m", "Explica qué es el voltaje usando la comparación con el agua.", "Es como la presión que empuja el agua por la tubería."],
    ["m", "¿Qué materiales necesitas para construir un electroimán?", "Un clavo de hierro, cable con funda y una pila."],
    ["m", "¿Qué transformación de energía hace un motor eléctrico?", "De energía eléctrica a movimiento."],
    ["m", "¿De dónde viene la palabra electricidad?", "Del griego élektron, que significa ámbar."],
    ["m", "¿Por qué los coches eléctricos contaminan menos?", "No echan humo al circular; si se cargan con renovables, aún menos."],
    ["a", "Dibuja el esquema de un circuito con una pila, un interruptor y dos bombillas en paralelo.", "Respuesta abierta: una rama para cada bombilla."],
    ["a", "¿Qué discutían Galvani y Volta? ¿Quién tenía razón?", "El origen de la electricidad de las ranas; los dos en parte."],
    ["a", "¿Qué descubrió Faraday y para qué sirve hoy?", "Producir electricidad moviendo imanes y bobinas; generadores de las centrales."],
    ["a", "¿Por qué no se debe experimentar con los enchufes de casa?", "Porque 230 V es un voltaje peligroso que puede causar descargas graves."],
  ],
  quiz: [
    ["La intensidad se mide en…", ["amperios", "voltios", "ohmios"], "Magnitudes."],
    ["Una pila normal tiene…", ["1,5 V", "230 V", "15 V"], "Pilas."],
    ["Un electroimán funciona…", ["solo cuando pasa corriente", "siempre", "solo con agua"], "Electroimán."],
    ["El pararrayos lo inventó…", ["Benjamin Franklin", "Volta", "Edison"], "Historia."],
    ["Las baterías de los móviles suelen ser de…", ["ion-litio", "cartón", "cobre puro"], "Baterías."],
  ],
  examen: [
    ["En el símil del agua, la resistencia es como…", ["lo estrecha que es la tubería", "la presión", "el agua"], "Resistencia."],
    ["Faraday descubrió en 1831 cómo producir electricidad con…", ["imanes y bobinas", "ranas", "ámbar"], "Inducción."],
  ],
  tarjetas: [
    ["V, A y Ω", "Voltaje empuja (V), intensidad circula (A), resistencia frena (Ω)."],
    ["Esquemas", "Pila: dos rayas; bombilla: círculo con cruz; motor: círculo con M."],
    ["Electroimán y motor", "Cable enrollado en hierro + corriente = imán; el motor convierte electricidad en giro."],
    ["Historia", "Tales, Franklin, Volta 1800, Faraday 1831, Edison 1879."],
  ],
  glosario: [
    ["Voltaje", "Empuje que hace circular la corriente; se mide en voltios."],
    ["Intensidad", "Cantidad de corriente que circula; se mide en amperios."],
    ["Resistencia", "Dificultad que pone un material al paso de la corriente."],
    ["Ohmio", "Unidad de resistencia eléctrica (Ω)."],
    ["Esquema eléctrico", "Dibujo de un circuito con símbolos."],
    ["Bobina", "Cable enrollado en muchas vueltas."],
    ["Electroimán", "Imán que funciona cuando pasa corriente."],
    ["Motor eléctrico", "Máquina que transforma electricidad en movimiento."],
    ["Pararrayos", "Barra metálica que protege los edificios de los rayos."],
    ["Generador", "Máquina que produce electricidad a partir de movimiento."],
    ["Batería recargable", "Pila que se puede volver a cargar."],
    ["Punto limpio", "Lugar donde se depositan residuos especiales."],
  ],
  situacion: {
    titulo: "La feria de los circuitos",
    reto: "Por equipos, la clase diseña y construye un juego eléctrico (un laberinto con timbre, un tablero de preguntas con luces o una grúa con electroimán) para una feria de ciencias.",
    pasos: ["Elegid el juego y dibujad su esquema eléctrico con símbolos.", "Construid el circuito con pilas, cables, bombillas, zumbadores o un electroimán.", "Probadlo, encontrad los fallos y mejoradlo.", "Presentadlo en la feria explicando cómo funciona y qué magnitudes eléctricas intervienen."],
    producto: "Un juego eléctrico que funciona y su ficha técnica con el esquema.",
    evaluacion: ["Dibuja esquemas eléctricos correctos.", "Construye circuitos seguros que funcionan.", "Resuelve problemas técnicos.", "Explica el funcionamiento con vocabulario científico."],
  },
});
