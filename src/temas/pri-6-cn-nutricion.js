// Ciencias de la Naturaleza 6º de Primaria: la función de nutrición. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF } = require("./_pri6b");

// Silueta sencilla de persona (cabeza y tronco) para situar órganos.
const silueta = (cx = 80) => `<circle cx="${cx}" cy="40" r="16" fill="#f3c9a1" opacity=".55"/><path d="M${cx - 34} 172 V84 q0 -26 34 -28 q34 2 34 28 V172 Z" fill="#f3c9a1" opacity=".35"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La función de nutrición",
  minutos: 50,
  objetivos: ["Explicar qué es la nutrición y qué aparatos intervienen", "Conocer las partes y el funcionamiento de los aparatos digestivo, respiratorio, circulatorio y excretor", "Entender cómo colaboran para llevar nutrientes y oxígeno a las células", "Relacionar la nutrición con hábitos saludables"],
  claves: ["nutrición", "digestión", "nutrientes", "intestino delgado", "pulmones", "alvéolos", "corazón", "arterias", "venas", "capilares", "riñones", "orina"],
  pregunta: {
    texto: "Esta mañana has desayunado unas tostadas. ¿Cómo es posible que una parte de ese pan acabe dando energía a una célula de tu dedo gordo del pie?",
    respuesta: "Gracias a la <mark>nutrición</mark>. El aparato digestivo convierte el pan en <b>nutrientes</b> diminutos que pasan a la sangre. El aparato respiratorio aporta el <b>oxígeno</b>. El aparato circulatorio lleva las dos cosas hasta cada célula, también las del pie. Allí la célula «quema» el nutriente con el oxígeno y obtiene energía. Los desechos los retira el aparato excretor.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la nutrición?</h3><p>La <mark>nutrición</mark> es una de las tres funciones vitales, junto con la relación y la reproducción. Consiste en <b>conseguir y usar</b> los materiales y la energía que el cuerpo necesita para vivir, crecer y reparar lo que se estropea.</p><p>No es lo mismo que la <b>alimentación</b>. Alimentarse es elegir y comer alimentos: es algo voluntario. La nutrición es todo lo que el cuerpo hace después, sin que nos demos cuenta: digerir, respirar, transportar y eliminar desechos.</p><p>En la nutrición humana trabajan en equipo <b>cuatro aparatos</b>:</p><p>• El <b>digestivo</b> transforma los alimentos en nutrientes.<br>• El <b>respiratorio</b> toma oxígeno y expulsa dióxido de carbono.<br>• El <b>circulatorio</b> reparte nutrientes y oxígeno por todo el cuerpo.<br>• El <b>excretor</b> limpia la sangre de desechos.</p>`,
      svg: svg("Los cuatro aparatos de la nutrición alrededor de la célula", `${tit("Cuatro aparatos en equipo")}${fichas([["Digestivo", "alimento → nutrientes", COL.naranja], ["Respiratorio", "entra O₂, sale CO₂", COL.agua], ["Circulatorio", "reparte por el cuerpo", COL.rojo], ["Excretor", "elimina desechos", COL.sol]])}`),
    },
    {
      html: `<h3>El aparato digestivo</h3><p>El <mark>aparato digestivo</mark> es un tubo de unos 9 metros que empieza en la boca y termina en el ano, con algunas glándulas que lo ayudan. Sus partes, por orden, son:</p><p>• La <b>boca</b>: los dientes trituran y la saliva ablanda. Con la lengua se forma el <b>bolo alimenticio</b>.<br>• La <b>faringe</b> y el <b>esófago</b>: tubos por los que baja el bolo.<br>• El <b>estómago</b>: una bolsa con jugos ácidos que mezcla el alimento hasta formar una papilla, el <b>quimo</b>.<br>• El <b>intestino delgado</b>: un tubo enrollado de unos 7 metros. Aquí terminan de digerirse los alimentos con la ayuda de la <b>bilis</b> (del <b>hígado</b>) y del jugo del <b>páncreas</b>.<br>• El <b>intestino grueso</b>: recoge lo que no sirve, absorbe agua y forma las heces, que salen por el <b>ano</b>.</p>`,
      svg: svg("Aparato digestivo: boca, esófago, estómago, hígado, intestino delgado e intestino grueso", `${tit("El aparato digestivo")}${silueta()}<path d="M80 50 V92" stroke="#e07a5f" stroke-width="5"/><path d="M80 90 q24 -4 26 14 q0 18 -24 16 q-8 -2 -8 -10" fill="#f4a261" stroke="#c2410c" stroke-width="2"/><path d="M52 94 q14 -10 26 0 q-4 14 -26 6z" fill="#8d5524"/><rect x="54" y="128" width="54" height="40" rx="8" fill="none" stroke="#2a9d8f" stroke-width="5"/><path d="M62 136 q10 8 20 0 q10 -8 18 0 M62 148 q10 8 20 0 q10 -8 18 0 M62 160 q10 6 38 0" stroke="#e9c46a" stroke-width="4" fill="none"/>
        ${[["boca", 46], ["esófago", 72], ["estómago", 102], ["hígado", 118], ["i. delgado", 148], ["i. grueso", 166]].map(([s, y], i) => `<path d="M${[82, 82, 104, 60, 96, 108][i]} ${[46, 72, 102, 98, 146, 136][i]} L148 ${y - 4}" stroke="var(--muted)"/>${et(196, y, s, 96, { size: 11, color: COL.naranja })}`).join("")}`),
      video: vid("CIhwGRIBEQ8"),
    },
    {
      html: `<h3>Cómo se digieren los alimentos</h3><p>La <mark>digestión</mark> es el proceso que convierte los alimentos en <b>nutrientes</b> tan pequeños que pueden pasar a la sangre. Tiene dos partes:</p><p>La <b>digestión mecánica</b>: romper el alimento en trozos cada vez más pequeños. La hacen los dientes al masticar y el estómago al moverse.</p><p>La <b>digestión química</b>: los <b>jugos digestivos</b> (saliva, jugo gástrico, bilis, jugo pancreático y jugo intestinal) descomponen las sustancias grandes en otras diminutas.</p><p>La pared del intestino delgado está llena de pliegues con millones de salientes llamados <mark>vellosidades intestinales</mark>. Por ellas los nutrientes pasan a la sangre: es la <b>absorción</b>. Si se pudieran estirar, ¡ocuparían la superficie de media pista de tenis!</p><p>Lo que no se puede aprovechar, como la fibra, llega al intestino grueso. Allí se recupera el agua y se forman las <b>heces</b>, que se expulsan: es la <b>egestión</b>.</p>`,
      svg: svg("Etapas de la digestión: ingestión, digestión, absorción y egestión", `${tit("Del bocadillo a la sangre")}${columna([["Ingestión: comer y masticar", COL.naranja], ["Digestión: romper en nutrientes", COL.sol], ["Absorción: los nutrientes pasan a la sangre", COL.rojo], ["Egestión: expulsar las heces", COL.marron]], 130, 220, 36, 26, 12)}`),
    },
    {
      html: `<h3>El aparato respiratorio</h3><p>Las células necesitan <b>oxígeno</b> para obtener energía de los nutrientes. El <mark>aparato respiratorio</mark> se encarga de tomarlo del aire y de expulsar el <b>dióxido de carbono</b>, un gas de desecho.</p><p>Tiene dos partes. Las <b>vías respiratorias</b> son los conductos por los que pasa el aire: <b>fosas nasales</b> (calientan, humedecen y filtran el aire con pelitos y mocos), <b>faringe</b>, <b>laringe</b> (donde están las cuerdas vocales), <b>tráquea</b> y <b>bronquios</b>, que se dividen en tubos cada vez más finos, los <b>bronquiolos</b>.</p><p>Los <mark>pulmones</mark> son dos órganos esponjosos protegidos por las costillas. Al final de los bronquiolos hay millones de saquitos llamados <mark>alvéolos</mark>, rodeados de vasos sanguíneos finísimos. En los alvéolos se produce el <b>intercambio de gases</b>: el oxígeno pasa del aire a la sangre y el dióxido de carbono pasa de la sangre al aire.</p>`,
      svg: svg("Aparato respiratorio: fosas nasales, tráquea, bronquios, pulmones y un alvéolo ampliado", `${tit("El aparato respiratorio")}<path d="M80 34 V76" stroke="#94a3b8" stroke-width="8"/><path d="M80 76 L60 92 M80 76 L100 92" stroke="#94a3b8" stroke-width="5"/><path d="M58 84 q-30 4 -30 46 q0 30 26 30 q14 0 14 -18 V92z" fill="#f9a8b8" stroke="#be185d" stroke-width="2"/><path d="M102 84 q30 4 30 46 q0 30 -26 30 q-14 0 -14 -18 V92z" fill="#f9a8b8" stroke="#be185d" stroke-width="2"/>
        <circle cx="206" cy="98" r="28" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><path d="M178 98 q28 -40 56 0" stroke="var(--red)" stroke-width="3" fill="none"/><path d="M178 104 q28 40 56 0" stroke="var(--pen)" stroke-width="3" fill="none"/>${fl(132, 112, 176, 102, "var(--muted)", 1.5)}
        ${et(206, 60, "alvéolo", 80, { size: 11, color: "#be185d" })}${tx(206, 142, "entra O₂, sale CO₂", 100)}${et(118, 40, "tráquea", 60, { size: 11, color: COL.gris, anchor: "start" })}${et(80, 174, "pulmones", 100, { size: 11, color: "#be185d" })}`),
      video: vid("Wq_bPoRTn7I"),
    },
    {
      html: `<h3>Inspirar y espirar</h3><p>Respiramos unas 15 veces por minuto sin pensar en ello. Cada respiración tiene dos movimientos:</p><p>En la <mark>inspiración</mark> entra el aire. El <b>diafragma</b>, un músculo con forma de cúpula que está debajo de los pulmones, se contrae y baja; las costillas se levantan. El pecho se hace más grande, los pulmones se hinchan y el aire entra.</p><p>En la <mark>espiración</mark> sale el aire. El diafragma se relaja y sube; las costillas bajan. El pecho se hace más pequeño y el aire sale de los pulmones.</p><p>Cuando haces deporte, tus células gastan más energía y necesitan más oxígeno. Por eso respiras más deprisa y más hondo. El aire que expulsamos tiene <b>menos oxígeno</b> y <b>más dióxido de carbono</b> y vapor de agua que el que tomamos: por eso un cristal se empaña cuando echas el aliento.</p>`,
      svg: svg("Inspiración con el diafragma bajado y espiración con el diafragma subido", `${tit("Inspiración y espiración")}${[[70, "inspiración", 132, COL.verde, "entra aire"], [190, "espiración", 112, COL.rojo, "sale aire"]].map(([x, s, yd, c, f]) => `<path d="M${x - 40} ${yd} q40 ${yd > 120 ? 10 : -14} 80 0" stroke="var(--red)" stroke-width="4" fill="none"/><ellipse cx="${x - 18}" cy="${yd - 30}" rx="${yd > 120 ? 18 : 13}" ry="${yd > 120 ? 30 : 22}" fill="#f9a8b8"/><ellipse cx="${x + 18}" cy="${yd - 30}" rx="${yd > 120 ? 18 : 13}" ry="${yd > 120 ? 30 : 22}" fill="#f9a8b8"/>${yd > 120 ? fl(x, 34, x, 56, c, 2.5) : fl(x, 56, x, 34, c, 2.5)}${et(x, 156, s, 110, { size: 12, color: c })}${tx(x, 170, f, 110)}`).join("")}${tx(130, 126, "diafragma", 60, { color: COL.rojo })}`),
    },
    {
      html: `<h3>El aparato circulatorio</h3><p>El <mark>aparato circulatorio</mark> es el sistema de transporte del cuerpo. Lleva los nutrientes y el oxígeno a todas las células y recoge sus desechos. Tiene tres componentes:</p><p>La <b>sangre</b>, un líquido rojo formado por el <b>plasma</b> (agua con sustancias disueltas) y unas células: los <b>glóbulos rojos</b>, que llevan el oxígeno; los <b>glóbulos blancos</b>, que nos defienden de los microbios; y las <b>plaquetas</b>, que tapan las heridas formando costras.</p><p>Los <b>vasos sanguíneos</b>, los tubos por los que circula la sangre. Las <b>arterias</b> salen del corazón; las <b>venas</b> llegan al corazón; y los <b>capilares</b>, finísimos como pelos, unen arterias y venas y llegan a todas las células.</p><p>El <mark>corazón</mark>, un músculo del tamaño de un puño que funciona como una bomba. Tiene cuatro cavidades: dos <b>aurículas</b> arriba y dos <b>ventrículos</b> abajo. Late unas 70 u 80 veces por minuto en reposo, toda la vida.</p>`,
      svg: svg("Corazón con aurículas y ventrículos, y los tres tipos de vasos: arterias, venas y capilares", `${tit("Corazón y vasos")}<path d="M70 150 C20 110 20 60 50 56 C62 54 70 64 70 72 C70 64 78 54 90 56 C120 60 120 110 70 150Z" fill="var(--red)" fill-opacity=".8"/><path d="M70 72 V140 M36 92 H104" stroke="#fff" stroke-width="2"/>${t(52, 84, "AD", { size: 10, color: "#fff" })}${t(88, 84, "AI", { size: 10, color: "#fff" })}${t(52, 112, "VD", { size: 10, color: "#fff" })}${t(88, 112, "VI", { size: 10, color: "#fff" })}${tx(70, 172, "A: aurícula · V: ventrículo", 130)}
        ${filas([["arteria", "sale del corazón", "var(--red)"], ["vena", "llega al corazón", "var(--pen)"], ["capilar", "llega a las células", "#8b5cf6"]], 66, 36, { x: 146, wa: 100, wb: 100, dos: true })}`),
      video: vid("nsSg4Eq3LEo"),
    },
    {
      html: `<h3>La doble circulación</h3><p>La sangre hace dos recorridos, por eso decimos que nuestra circulación es <mark>doble</mark>:</p><p>En la <b>circulación pulmonar</b> (circuito corto), la sangre sale del ventrículo derecho hacia los pulmones. Allí deja el dióxido de carbono y se carga de oxígeno. Después vuelve a la aurícula izquierda.</p><p>En la <b>circulación general</b> (circuito largo), la sangre rica en oxígeno sale del ventrículo izquierdo por la <b>arteria aorta</b>, la más grande del cuerpo, y se reparte por todos los órganos. Allí deja oxígeno y nutrientes y recoge desechos. Luego vuelve por las venas a la aurícula derecha.</p><p>La sangre de los dos lados del corazón <b>nunca se mezcla</b>, porque una pared los separa. Puedes notar el ritmo del corazón tomándote el <b>pulso</b> en la muñeca o en el cuello: cada latido empuja la sangre por las arterias.</p>`,
      svg: svg("Esquema de la doble circulación: pulmones arriba, corazón en el centro y el resto del cuerpo abajo", `${tit("Dos circuitos")}${cj(80, 32, 100, 24, "pulmones", "#be185d")}${cj(95, 82, 70, 26, "corazón", "var(--red)")}${cj(70, 140, 120, 24, "resto del cuerpo", COL.naranja)}
        ${fl(110, 82, 110, 58, "var(--pen)")}${fl(150, 58, 150, 82, "var(--red)")}${fl(150, 108, 150, 138, "var(--red)")}${fl(110, 138, 110, 110, "var(--pen)")}
        ${et(214, 70, "pulmonar", 80, { size: 11, color: "#be185d" })}${tx(214, 84, "circuito corto", 80)}${et(214, 124, "general", 80, { size: 11, color: COL.naranja })}${tx(214, 138, "circuito largo", 80)}${tx(46, 96, "sangre con O₂", 80, { color: "var(--red)" })}${tx(46, 120, "sangre con CO₂", 80, { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>El aparato excretor</h3><p>Al trabajar, las células producen <b>desechos</b> que pasan a la sangre. Si se acumularan, serían venenosos. La <mark>excreción</mark> consiste en eliminarlos.</p><p>El órgano principal es el <mark>aparato urinario</mark>:</p><p>• Los dos <b>riñones</b>, con forma de judía, están en la parte baja de la espalda. Filtran la sangre como un colador y fabrican la <b>orina</b>, que es agua con desechos disueltos.<br>• Los <b>uréteres</b> son dos tubos que llevan la orina hasta la vejiga.<br>• La <b>vejiga</b> es una bolsa que la almacena.<br>• La <b>uretra</b> es el conducto por el que sale al exterior.</p><p>También excretan otros órganos. Las <b>glándulas sudoríparas</b> de la piel fabrican el <b>sudor</b>, que elimina agua y sales y además refresca el cuerpo. Y los <b>pulmones</b> expulsan el dióxido de carbono. Por eso es tan importante <b>beber agua</b>: ayuda a los riñones a limpiar la sangre.</p>`,
      svg: svg("Aparato urinario: dos riñones, uréteres, vejiga y uretra", `${tit("El aparato urinario")}<path d="M62 50 q-22 0 -22 26 q0 26 22 26 q8 0 8 -10 q-6 -16 0 -32 q0 -10 -8 -10z" fill="#9b2226" fill-opacity=".85"/><path d="M198 50 q22 0 22 26 q0 26 -22 26 q-8 0 -8 -10 q6 -16 0 -32 q0 -10 8 -10z" fill="#9b2226" fill-opacity=".85"/><path d="M70 82 Q100 100 116 128 M190 82 Q160 100 144 128" stroke="var(--sun)" stroke-width="4" fill="none"/><path d="M110 126 q20 -8 40 0 q8 22 -20 28 q-28 -6 -20 -28z" fill="#fde68a" stroke="#b45309" stroke-width="2"/><path d="M130 154 V172" stroke="#b45309" stroke-width="4"/>
        ${et(54, 118, "riñón", 60, { size: 11, color: "#9b2226" })}${et(206, 118, "riñón", 60, { size: 11, color: "#9b2226" })}${et(130, 96, "uréteres", 70, { size: 11, color: "#b45309" })}${et(196, 146, "vejiga", 60, { size: 11, color: "#b45309" })}${et(170, 172, "uretra", 60, { size: 11, color: "#b45309" })}`),
      video: vid("f6rJ83TRm_g"),
    },
    {
      html: `<h3>Todo el equipo trabajando a la vez</h3><p>Ningún aparato de la nutrición podría funcionar solo. Sigamos el viaje completo:</p><p>1. El <b>aparato digestivo</b> convierte los alimentos en nutrientes, que pasan a la sangre en el intestino delgado.</p><p>2. El <b>aparato respiratorio</b> hace que el oxígeno pase a la sangre en los alvéolos.</p><p>3. El <b>aparato circulatorio</b> lleva nutrientes y oxígeno hasta cada una de las células.</p><p>4. En las células, las <b>mitocondrias</b> usan el oxígeno para «quemar» los nutrientes y obtener <mark>energía</mark>. Es la <b>respiración celular</b>. Así se producen desechos y dióxido de carbono.</p><p>5. La sangre recoge esos desechos: el dióxido de carbono se expulsa por los pulmones y el resto, por los riñones y la piel.</p><p>Para que este equipo funcione bien hay que comer variado, beber agua, no fumar, hacer ejercicio y respirar aire limpio.</p>`,
      svg: svg("Ciclo de la nutrición: digestivo y respiratorio llevan a la sangre, la sangre a la célula y la célula a los excretores", `${tit("El viaje completo")}${cj(6, 36, 118, 30, "digestivo: nutrientes", COL.naranja)}${cj(136, 36, 118, 30, "respiratorio: O₂", COL.agua)}${cj(80, 86, 100, 30, "circulatorio", "var(--red)")}${cj(6, 138, 118, 30, "célula: energía", COL.verde)}${cj(136, 138, 118, 30, "excretor: desechos", COL.sol)}${fl(66, 66, 100, 86)}${fl(194, 66, 160, 86)}${fl(100, 116, 70, 138)}${fl(124, 153, 136, 153)}${fl(186, 138, 162, 116)}`),
    },
  ],
  figura: {
    titulo: "La nutrición en ocho ideas",
    svg: rejilla([
      ["Nutrición", "obtener materia y energía", COL.verde],
      ["Digestión", "alimentos → nutrientes", COL.naranja],
      ["Absorción", "en el intestino delgado", COL.sol],
      ["Alvéolos", "intercambio de gases", COL.agua],
      ["Corazón", "bomba de 4 cavidades", COL.rojo],
      ["Vasos", "arterias, venas, capilares", COL.morado],
      ["Riñones", "filtran y hacen orina", COL.marron],
      ["Célula", "usa O₂ y nutrientes", COL.azul],
    ], 4, 86, "Resumen de la función de nutrición"),
  },
  video: vgen("S3jJj68dBxw", "aparato respiratorio y circulatorio para niños"),
  ejemplos: [
    { enunciado: "Sigue el camino de una galleta desde que la muerdes hasta que sus nutrientes llegan a la sangre.",
      pasos: ["Boca: los dientes la trituran y la saliva la ablanda (bolo).", "Faringe y esófago: el bolo baja al estómago.", "Estómago: los jugos gástricos la convierten en quimo.", "Intestino delgado: con la bilis y el jugo pancreático termina la digestión.", "Las vellosidades absorben los nutrientes y pasan a la sangre."],
      resultado: "boca → esófago → estómago → intestino delgado → sangre." },
    { enunciado: "Después de correr, tu corazón late a 140 pulsaciones por minuto. ¿Por qué tan deprisa?",
      pasos: ["Los músculos trabajan más y gastan más energía.", "Para obtenerla necesitan más oxígeno y nutrientes.", "El corazón late más rápido para llevar más sangre, y respiramos más deprisa para tomar más oxígeno."],
      resultado: "Porque los músculos necesitan más oxígeno y nutrientes." },
    { enunciado: "Una persona bebe poca agua y su orina es muy oscura. ¿Qué está pasando?",
      pasos: ["Los riñones fabrican orina con agua y desechos.", "Si hay poca agua, la orina tiene los desechos más concentrados.", "Por eso es más oscura."],
      resultado: "Le falta agua: debe beber más para ayudar a los riñones." },
  ],
  errores: [
    "Confundir alimentación y nutrición: comer es solo el principio de la nutrición.",
    "Pensar que los nutrientes pasan a la sangre en el estómago: casi todos se absorben en el intestino delgado.",
    "Creer que las arterias siempre llevan sangre con oxígeno: la arteria pulmonar lleva sangre con dióxido de carbono a los pulmones.",
    "Decir que solo respiran los pulmones: la respiración de verdad ocurre en cada célula.",
    "Olvidar la piel y los pulmones al hablar de excreción.",
  ],
  ejercicios: [
    { q: "¿Qué cuatro aparatos intervienen en la nutrición? Di qué hace cada uno.", sol: "Digestivo (transforma los alimentos en nutrientes), respiratorio (toma O₂ y expulsa CO₂), circulatorio (reparte) y excretor (elimina desechos)." },
    { q: "Ordena: intestino delgado, boca, estómago, esófago, intestino grueso, faringe.", sol: "Boca, faringe, esófago, estómago, intestino delgado, intestino grueso." },
    { q: "Explica la diferencia entre digestión mecánica y química.", sol: "La mecánica rompe el alimento en trozos (dientes, estómago); la química lo descompone con jugos digestivos." },
    { q: "¿Qué son las vellosidades intestinales y para qué sirven?", sol: "Salientes de la pared del intestino delgado que aumentan su superficie para absorber los nutrientes." },
    { q: "¿Qué ocurre en los alvéolos?", sol: "El intercambio de gases: el oxígeno pasa a la sangre y el dióxido de carbono pasa al aire." },
    { q: "Describe qué hacen el diafragma y las costillas al inspirar.", sol: "El diafragma se contrae y baja y las costillas suben: el pecho se agranda y entra el aire." },
    { q: "Escribe la función de los glóbulos rojos, los glóbulos blancos y las plaquetas.", sol: "Rojos: llevan oxígeno. Blancos: defienden de microbios. Plaquetas: cierran heridas." },
    { q: "¿Qué diferencia hay entre arterias y venas?", sol: "Las arterias llevan la sangre desde el corazón; las venas la traen al corazón." },
    { q: "Explica el recorrido de la circulación pulmonar.", sol: "Ventrículo derecho → pulmones (deja CO₂ y toma O₂) → aurícula izquierda." },
    { q: "¿Por qué es importante beber agua para el aparato excretor?", sol: "Porque los riñones necesitan agua para disolver los desechos y formar la orina." },
  ],
  quiz: [
    { q: "La nutrición sirve para obtener…", o: ["materia y energía", "solo agua", "solo diversión"], a: 0, e: "Materia y energía para vivir." },
    { q: "Los nutrientes pasan a la sangre en…", o: ["la boca", "el intestino delgado", "el esófago"], a: 1, e: "Por las vellosidades del intestino delgado." },
    { q: "La bilis la fabrica…", o: ["el hígado", "el estómago", "el riñón"], a: 0, e: "El hígado." },
    { q: "El intercambio de gases ocurre en…", o: ["la tráquea", "los alvéolos", "el diafragma"], a: 1, e: "En los alvéolos pulmonares." },
    { q: "Al inspirar, el diafragma…", o: ["sube", "baja", "no se mueve"], a: 1, e: "Se contrae y baja." },
    { q: "Los glóbulos blancos…", o: ["llevan oxígeno", "nos defienden", "cierran heridas"], a: 1, e: "Defienden contra microbios." },
    { q: "Los vasos que salen del corazón son…", o: ["las venas", "las arterias", "los uréteres"], a: 1, e: "Arterias." },
    { q: "El corazón tiene…", o: ["2 cavidades", "4 cavidades", "6 cavidades"], a: 1, e: "Dos aurículas y dos ventrículos." },
    { q: "La orina se fabrica en…", o: ["la vejiga", "los riñones", "la uretra"], a: 1, e: "En los riñones." },
    { q: "El sudor lo producen…", o: ["las glándulas sudoríparas", "los pulmones", "los riñones"], a: 0, e: "Glándulas de la piel." },
  ],
  examen: [
    { q: "El quimo se forma en…", o: ["el estómago", "la boca", "el intestino grueso"], a: 0, e: "En el estómago." },
    { q: "La arteria más grande es…", o: ["la aorta", "la pulmonar", "la cava"], a: 0, e: "La aorta." },
    { q: "La orina se almacena en…", o: ["la vejiga", "el riñón", "el uréter"], a: 0, e: "La vejiga." },
    { q: "La energía se obtiene en…", o: ["las células", "el estómago", "la piel"], a: 0, e: "En las mitocondrias de las células." },
  ],
  feynman: ["Qué diferencia hay entre alimentación y nutrición", "Qué recorrido hace un alimento por el aparato digestivo", "Cómo colaboran los cuatro aparatos para que una célula tenga energía"],
  mapa: mapa("NUTRICIÓN", "var(--pri)", [
    ["Digestivo", "boca · estómago · intestinos", COL.naranja],
    ["Respiratorio", "tráquea · pulmones · alvéolos", COL.agua],
    ["Circulatorio", "sangre · vasos · corazón", COL.rojo],
    ["Excretor", "riñones · vejiga · piel", COL.sol],
  ], 250),
  tarjetas: [
    ["Nutrición", "Función vital para obtener materia y energía."],
    ["Bolo alimenticio", "Alimento masticado y mezclado con saliva."],
    ["Vellosidades", "Salientes del intestino delgado que absorben nutrientes."],
    ["Alvéolos", "Saquitos de los pulmones donde se intercambian los gases."],
    ["Diafragma", "Músculo que baja al inspirar y sube al espirar."],
    ["Arteria", "Vaso que lleva la sangre desde el corazón."],
    ["Vena", "Vaso que trae la sangre al corazón."],
    ["Riñones", "Filtran la sangre y fabrican la orina."],
  ],
  familias: ["Tomaos el pulso en reposo y después de saltar un minuto: comparad los números.", "Al preparar la comida, comentad por qué partes del aparato digestivo pasará cada alimento.", "Haced una maqueta de pulmón con una botella, dos globos y un guante como diafragma.", "Llevad una botella de agua y apuntad cuánta bebéis al día."],
  profesores: PROF("Ciencias de la Naturaleza: la función de nutrición; aparatos digestivo, respiratorio, circulatorio y excretor; anatomía y fisiología básicas; hábitos saludables relacionados", ["Medir el pulso y la frecuencia respiratoria en reposo y tras ejercicio y hacer una gráfica.", "Modelo de pulmón con botella y globos.", "Cuerda de 9 metros en el patio para visualizar la longitud del tubo digestivo."]),
  fuentes: [RD, wiki("Aparato digestivo", "Aparato_digestivo"), wiki("Aparato circulatorio", "Aparato_circulatorio"), { t: "Fundación Española del Corazón", url: "https://fundaciondelcorazon.com/" }],
  revisado: REV,
};
