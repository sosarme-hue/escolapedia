// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Riñón visto de frente (forma de alubia) con corteza, médula y pelvis.
const rinon = (x, y, s = 1, flip = false) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})">
  <path d="M0 -40 Q 34 -42 34 0 Q 34 42 0 40 Q -10 38 -10 22 Q -2 12 -2 0 Q -2 -12 -10 -22 Q -10 -38 0 -40 Z" fill="#a0442b" fill-opacity=".85" stroke="var(--ink)" stroke-width="2"/>
  <path d="M4 -30 Q 24 -30 24 0 Q 24 30 4 30 Q 4 18 8 0 Q 4 -18 4 -30 Z" fill="#d8885a"/>
  <path d="M-4 -10 Q 6 0 -4 10 Z" fill="var(--sun)"/>
</g>`;
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El aparato excretor",
  minutos: 95,
  objetivos: [
    "Explicar qué es la excreción, qué desechos se eliminan y qué órganos participan",
    "Describir el aparato urinario y la estructura del riñón y de la nefrona",
    "Explicar cómo se forma la orina: filtración, reabsorción y secreción",
    "Relacionar el riñón con el equilibrio del agua y otras funciones del cuerpo",
    "Interpretar un análisis de orina sencillo",
    "Conocer las enfermedades más frecuentes, la diálisis, el trasplante y los hábitos saludables",
  ],
  claves: ["excreción", "urea", "riñón", "nefrona", "filtración", "reabsorción", "orina", "sudor", "diálisis"],
  pregunta: {
    texto: "Tus riñones filtran unos 180 litros de sangre al día, pero solo orinas litro y medio. ¿Dónde está el resto?",
    respuesta: "Vuelve a la sangre. El riñón primero <b>filtra</b> casi todo el plasma y después <mark>recupera</mark> el agua, la glucosa y las sales útiles. Solo deja salir lo que sobra y los desechos, como la <b>urea</b>. Es un filtro muy selectivo, no un colador.",
  },
  lectura: {
    titulo: "Una máquina hecha con salchichas",
    html: `<p>En 1943, en plena Segunda Guerra Mundial, un joven médico holandés, Willem Kolff, veía morir a sus pacientes porque sus riñones habían dejado de funcionar. Los desechos se acumulaban en la sangre y los envenenaban poco a poco. Kolff pensó que, si los riñones no podían limpiar la sangre, quizá lo hiciera una máquina.</p>
<p>Con los pocos materiales que encontró en un país ocupado, construyó un aparato asombroso: enrolló metros de tripa de celofán, la que se usaba para fabricar salchichas, alrededor de un tambor de madera que giraba dentro de una bañera con agua y sales. La sangre del paciente pasaba por el celofán y los desechos, que son moléculas pequeñas, lo atravesaban hacia el agua, mientras que las células y las proteínas se quedaban dentro. Tras muchos intentos fallidos, en 1945 salvó la vida a una mujer de 67 años.</p>
<p>Aquel invento fue el primer riñón artificial y el origen de la diálisis, que hoy mantiene con vida a millones de personas. Funciona igual que tus riñones: filtrando. En este tema descubrirás cómo tu cuerpo limpia la sangre sin descanso, casi doscientos litros al día, y qué puedes hacer para cuidarlo.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 ¿Qué es la excreción?</h3><p>Las células, al trabajar, fabrican sustancias de desecho que serían tóxicas si se acumularan. La <b>excreción</b> es la función que las <mark>elimina de la sangre</mark> y las expulsa al exterior. No hay que confundirla con la defecación: las heces son restos de alimento que nunca entraron en las células. Varios órganos colaboran en la excreción:</p>${tabla(["Órgano", "Qué elimina"], [["Pulmones", "dióxido de carbono y vapor de agua"], ["Riñones", "urea, sales y agua sobrante (orina)"], ["Glándulas sudoríparas", "agua, sales y algo de urea (sudor)"], ["Hígado", "transforma tóxicos y los vierte en la bilis; fabrica urea"]])}`,
      svg: L.radial("Los órganos que participan en la excreción", "Excreción", ["Riñones: orina", "Pulmones: CO₂", "Piel: sudor", "Hígado: bilis"], "var(--leaf)"),
    },
    {
      html: `<h3>1.2 Los productos de desecho</h3><p>¿De dónde salen los desechos? Las células obtienen energía en la <b>respiración celular</b>, que produce <mark>dióxido de carbono</mark> y agua. Además, cuando descomponen proteínas y otras moléculas con nitrógeno, generan <mark>desechos nitrogenados</mark>.</p><p>El principal es el <b>amoniaco</b>, muy tóxico. El hígado lo transforma rápidamente en <b>urea</b>, mucho menos peligrosa, que viaja por la sangre hasta los riñones. Otros desechos son el <b>ácido úrico</b>, que procede de la descomposición del ADN y de algunos alimentos como el marisco o la carne roja, y la <b>creatinina</b>, que procede del músculo. La <b>bilirrubina</b>, que da color amarillo a la orina y a las heces, se forma al destruir los glóbulos rojos viejos.</p><p>También hay que eliminar el exceso de agua, de sales y de sustancias extrañas como restos de medicamentos o el alcohol. Si todos estos desechos se acumularan, alterarían la homeostasis y dañarían las células.</p>`,
      svg: L.tabla("Desechos que elimina el cuerpo, de dónde vienen y por dónde salen", ["Desecho", "Origen", "Se elimina por"], [["CO₂", "respiración celular", "pulmones"], ["Urea", "proteínas (hígado)", "orina, sudor"], ["Ácido úrico", "ADN, alimentos", "orina"], ["Creatinina", "músculo", "orina"], ["Bilirrubina", "glóbulos viejos", "bilis, heces"]]),
    },
    {
      html: `<h3>1.3 El aparato urinario</h3><p>Es el principal aparato excretor. Lo forman dos <mark>riñones</mark>, con forma de alubia y del tamaño de un puño, situados a ambos lados de la columna, a la altura de la cintura. Cada riñón recibe sangre por la <b>arteria renal</b> y la devuelve limpia por la <b>vena renal</b>. La orina que fabrica baja por un tubo, el <mark>uréter</mark>, hasta la <mark>vejiga urinaria</mark>, una bolsa muscular que la almacena. Desde allí sale al exterior por la <mark>uretra</mark>, que en los hombres es más larga y también comparte el conducto con el aparato reproductor.</p><p>Los riñones reciben cerca de una cuarta parte de toda la sangre que bombea el corazón: más de un litro por minuto. Por eso, aunque pesan solo unos 150 gramos cada uno, filtran toda la sangre del cuerpo decenas de veces al día. Encima de cada riñón hay una glándula suprarrenal, que no forma parte del aparato urinario sino del sistema endocrino.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Aparato urinario: dos riñones, dos uréteres, la vejiga y la uretra, con la aorta y la vena cava">${BG}
        <path d="M122 10 V 170" stroke="var(--red)" stroke-width="7"/><path d="M138 10 V 170" stroke="var(--pen)" stroke-width="7"/>
        <path d="M122 60 H 88 M138 60 H 172" stroke="var(--red)" stroke-width="3"/><path d="M122 70 H 90 M138 70 H 170" stroke="var(--pen)" stroke-width="3"/>
        ${rinon(72, 64, 1, true)}${rinon(188, 64, 1)}
        <path d="M84 80 Q 100 110 118 136 M176 80 Q 160 110 142 136" stroke="var(--sun)" stroke-width="4" fill="none"/>
        <path d="M112 130 Q 130 118 148 130 Q 156 152 130 158 Q 104 152 112 130 Z" fill="var(--sun)" fill-opacity=".5" stroke="#b8860b" stroke-width="2"/><path d="M130 158 V 176" stroke="var(--sun)" stroke-width="4"/>
        ${t(24, 24, "riñón", { size: 11, anchor: "start" })}${t(34, 120, "uréter", { size: 11, anchor: "start", color: "#b8860b" })}${t(176, 156, "vejiga", { size: 11, anchor: "start", color: "#b8860b" })}${t(86, 174, "uretra", { size: 10, anchor: "start", color: "#b8860b" })}
        ${t(250, 124, "arteria y vena", { size: 9, anchor: "end", color: "var(--muted)" })}</svg>`,
      video: { id: "oxJ6DsTwA5E", titulo: "SISTEMA EXCRETOR: el aparato urinario y las glándulas sudoríparas", canal: "Smile and Learn - Español", vistas: 1457808 },
    },
    {
      html: `<h3>1.4 El riñón por dentro</h3><p>Si cortamos un riñón a lo largo, vemos tres zonas. La <b>corteza renal</b> es la capa externa, de color rojizo, donde se filtra la sangre. La <b>médula renal</b>, más interna, está formada por unas estructuras con forma de cono, las pirámides renales, llenas de tubitos que recogen la orina. En el centro está la <b>pelvis renal</b>, una cavidad con forma de embudo donde se reúne la orina antes de salir por el uréter. En todo el riñón hay alrededor de <mark>un millón de nefronas</mark>, las unidades que fabrican la orina.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de riñón con la corteza, la médula, la pelvis renal y el uréter">${BG}
        ${rinon(110, 90, 1.9)}<path d="M92 90 Q 70 110 76 172" stroke="var(--sun)" stroke-width="6" fill="none"/>
        ${t(244, 36, "corteza", { size: 11, anchor: "end", color: "#a0442b" })}<path d="M196 34 L 168 50" stroke="var(--muted)" stroke-width="1"/>
        ${t(244, 96, "médula", { size: 11, anchor: "end", color: "#c0652a" })}<path d="M200 93 H 150" stroke="var(--muted)" stroke-width="1"/>
        ${t(24, 60, "pelvis", { size: 11, anchor: "start", color: "#b8860b" })}<path d="M50 64 L 100 86" stroke="var(--muted)" stroke-width="1"/>
        ${t(24, 150, "uréter", { size: 11, anchor: "start", color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>2.1 La nefrona</h3><p>La <b>nefrona</b> es microscópica, pero tiene varias partes. Empieza en la <mark>cápsula de Bowman</mark>, una copa que envuelve un ovillo de capilares llamado <b>glomérulo</b>. De la cápsula sale un largo <b>túbulo renal</b> que hace una curva en forma de U, el <b>asa de Henle</b>, y desemboca en un <b>tubo colector</b> compartido con otras nefronas. Alrededor del túbulo hay más capilares, que permiten devolver a la sangre lo que todavía sirve. Si pusiéramos en fila todos los túbulos de un riñón medirían más de 50 kilómetros.</p><p>Cada nefrona funciona como una pequeña planta depuradora independiente. No todas trabajan a la vez: el riñón tiene tanta reserva que una persona puede vivir con normalidad con solo uno, e incluso con menos de la mitad de uno. Con la edad se pierden nefronas poco a poco y no se regeneran.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Nefrona: glomérulo dentro de la cápsula de Bowman, túbulo, asa de Henle y tubo colector">${BG}
        <circle cx="54" cy="46" r="24" fill="none" stroke="var(--sun)" stroke-width="4"/><path d="M40 46 q 6 -12 12 0 t 12 0 M42 54 q 6 -10 12 0 t 10 0" stroke="var(--red)" stroke-width="3" fill="none"/>
        <path d="M14 34 H 36 M14 58 H 36" stroke="var(--red)" stroke-width="3"/>
        <path d="M76 52 Q 100 52 100 74 Q 100 90 118 90 Q 134 90 134 104 V 156 Q 134 166 146 166 Q 158 166 158 156 V 90 Q 158 74 178 74 H 210" stroke="var(--sun)" stroke-width="5" fill="none"/>
        <path d="M216 20 V 170" stroke="#b8860b" stroke-width="7"/>
        ${t(54, 92, "glomérulo y", { size: 10, color: "var(--red)" })}${t(54, 104, "cápsula de Bowman", { size: 10, color: "#b8860b" })}
        ${t(146, 32, "túbulo", { size: 11, color: "#b8860b" })}${t(104, 140, "asa de", { size: 10, anchor: "end" })}${t(104, 152, "Henle", { size: 10, anchor: "end" })}
        ${t(206, 136, "tubo", { size: 10, anchor: "end" })}${t(206, 148, "colector", { size: 10, anchor: "end" })}</svg>`,
    },
    {
      html: `<h3>2.2 Cómo se forma la orina</h3><p>La orina se forma en tres pasos. <b>1. Filtración</b>: en el glomérulo, la presión de la sangre empuja el agua y las moléculas pequeñas (glucosa, sales, urea) hacia la cápsula de Bowman. Las células y las proteínas, demasiado grandes, se quedan en la sangre. <b>2. Reabsorción</b>: a lo largo del túbulo, el agua, la glucosa y muchas sales <mark>vuelven a la sangre</mark>. <b>3. Secreción</b>: el túbulo añade al líquido algunas sustancias que sobran, como restos de medicamentos. Lo que llega al tubo colector ya es orina.</p><p>Las cifras son impresionantes: los glomérulos de los dos riñones filtran unos <mark>180 litros de plasma al día</mark>, pero se producen solo entre 1 y 2 litros de orina. Eso significa que más del 99 % de lo filtrado se reabsorbe. Podría parecer un derroche filtrar tanto para devolver casi todo, pero así el riñón revisa una y otra vez toda la sangre y elimina con precisión lo que sobra.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres pasos: filtración en el glomérulo, reabsorción en el túbulo hacia la sangre y secreción desde la sangre al túbulo">${BG}
        ${caja(14, 20, 72, 40, "1 filtración", "var(--red)", { size: 11 })}${caja(94, 20, 72, 40, "2 reabsorción", "var(--leaf)", { size: 10.5 })}${caja(174, 20, 72, 40, "3 secreción", "var(--pen)", { size: 11 })}
        <path d="M20 120 H 240" stroke="var(--sun)" stroke-width="12" stroke-opacity=".5"/><path d="M20 160 H 240" stroke="var(--red)" stroke-width="8" stroke-opacity=".5"/>
        ${fl(50, 160, 50, 128, "var(--red)")}${fl(130, 126, 130, 154, "var(--leaf)")}${fl(210, 154, 210, 126, "var(--pen)")}
        ${t(130, 104, "túbulo", { size: 10, color: "#b8860b" })}${t(130, 176, "sangre (capilares)", { size: 10, color: "var(--red)" })}
        ${t(50, 80, "sangre → túbulo", { size: 9, weight: 400 })}${t(130, 80, "túbulo → sangre", { size: 9, weight: 400 })}${t(210, 80, "sangre → túbulo", { size: 9, weight: 400 })}</svg>`,
      video: { id: "dfKQ7A-9yZ0", titulo: "Video 3D: filtrado glomerular y formación de la orina", canal: "Rolando Palacios", vistas: 358820 },
    },
    {
      html: `<h3>2.3 La orina y el equilibrio del agua</h3><p>La orina es un <b>95 % agua</b>. El resto son sobre todo <mark>urea</mark>, un desecho que fabrica el hígado al descomponer las proteínas, y sales como el cloruro de sodio. En una persona sana no hay glucosa, proteínas ni sangre: si aparecen en un análisis, indican un problema. Los riñones también regulan cuánta agua tenemos. Si bebemos poco o sudamos mucho, el cerebro libera la <b>hormona antidiurética</b>, que hace que el riñón reabsorba más agua: la orina sale escasa y oscura. Si bebemos mucho, sale abundante y clara.</p><p>El agua que ganamos y la que perdemos deben estar en equilibrio. Ganamos unos 2,5 litros al día: alrededor de 1,5 bebiendo, 0,7 con el agua de los alimentos y 0,3 que fabrican las propias células en la respiración. Perdemos la misma cantidad: alrededor de 1,5 litros con la orina, 0,5 con el sudor, 0,4 al respirar (el vaho del aliento) y 0,1 con las heces.</p>`,
      svg: L.compara("Agua que ganamos y agua que perdemos cada día", ["Ganamos", "var(--water)", ["bebida: 1,5 L", "alimentos: 0,7 L", "células: 0,3 L", "total: 2,5 L"]], ["Perdemos", "var(--sun)", ["orina: 1,5 L", "sudor: 0,5 L", "aliento: 0,4 L", "heces: 0,1 L"]]),
    },
    {
      html: `<h3>2.4 Otras funciones del riñón</h3><p>El riñón hace mucho más que fabricar orina. Es un órgano clave para la <mark>homeostasis</mark>:</p><p>• Regula la cantidad de <b>sales</b> de la sangre, como el sodio y el potasio, imprescindibles para que funcionen los nervios y los músculos.<br>• Controla la <b>acidez</b> de la sangre, eliminando más o menos ácido en la orina.<br>• Ayuda a regular la <b>tensión arterial</b>: si baja, libera una sustancia que la hace subir, y al eliminar más o menos agua cambia el volumen de sangre.<br>• Fabrica la hormona <b>eritropoyetina</b>, que ordena a la médula ósea producir glóbulos rojos. Por eso las personas con insuficiencia renal suelen tener anemia.<br>• Activa la <b>vitamina D</b>, necesaria para absorber el calcio y tener huesos fuertes.</p><p>Por todo esto, cuando los riñones fallan no solo se acumulan desechos: también suben la tensión y el potasio, se debilitan los huesos y aparece la anemia.</p>`,
      svg: L.radial("Funciones del riñón además de fabricar orina", "Riñón", ["Regula sales", "Controla la acidez", "Regula la tensión", "Hormona de glóbulos", "Activa vitamina D", "Equilibra el agua"], "var(--red)"),
    },
    {
      html: `<h3>2.5 La micción</h3><p>La vejiga puede almacenar entre 300 y 500 mililitros de orina. Cuando se va llenando, sus paredes se estiran y unos receptores envían una señal a la médula espinal y al cerebro: sentimos <mark>ganas de orinar</mark>. La salida está cerrada por dos <b>esfínteres</b>, unos anillos de músculo. El interno se abre de forma automática, pero el externo lo controlamos a voluntad. Los bebés todavía no saben controlarlo; aprenden hacia los dos o tres años. Orinar se llama <b>micción</b>, y un adulto lo hace entre cuatro y siete veces al día.</p>`,
      svg: L.flujo("Cómo se produce la micción", ["La vejiga se llena y se estira", "Los receptores avisan a la médula y al encéfalo", "Sentimos ganas de orinar", "Abrimos el esfínter externo a voluntad"], "Las ganas de orinar"),
    },
    {
      html: `<h3>3.1 Los pulmones y el hígado, órganos excretores</h3><p>Los <mark>pulmones</mark> eliminan el desecho que más producimos: el <b>dióxido de carbono</b> de la respiración celular, unos 900 gramos al día. Además expulsan vapor de agua y algunas sustancias volátiles; por eso el alcohol se puede detectar en el aliento con un alcoholímetro.</p><p>El <mark>hígado</mark> es la gran fábrica química del cuerpo. Transforma el amoniaco en urea, que luego eliminan los riñones, y destruye o modifica muchas sustancias tóxicas: alcohol, restos de medicamentos o drogas. Algunos de esos desechos, junto con la bilirrubina de los glóbulos rojos viejos, salen con la <b>bilis</b> al intestino y se eliminan con las heces. En este caso, las heces sí llevan productos de excreción.</p><p>Así, la excreción es un trabajo en equipo de varios aparatos, conectados por la sangre: el circulatorio recoge los desechos de todas las células y los lleva hasta los órganos que los expulsan.</p>`,
      svg: L.compara("Pulmones e hígado como órganos excretores", ["Pulmones", "var(--pen)", ["expulsan CO₂", "vapor de agua", "sustancias volátiles", "alcohol en el aliento"]], ["Hígado", "var(--red)", ["fabrica urea", "destruye tóxicos", "bilirrubina", "sale con la bilis"]]),
    },
    {
      html: `<h3>3.2 Las glándulas sudoríparas</h3><p>En la piel tenemos entre dos y cuatro millones de <b>glándulas sudoríparas</b>. Son tubos enrollados en la dermis que fabrican <mark>sudor</mark> a partir de la sangre y lo vierten a la superficie por los poros. El sudor tiene agua, sales y un poco de urea, así que también es excreción. Pero su función principal es <b>refrigerar</b>: al evaporarse, el sudor se lleva calor del cuerpo. Por eso sudamos al hacer deporte o cuando hace calor, y necesitamos beber para reponer el agua y las sales que perdemos.</p><p>En un día normal se pierde medio litro de sudor sin notarlo, pero con calor y ejercicio intenso se pueden perder más de dos litros por hora. Si no se repone, aparece la <b>deshidratación</b> y el riesgo de un golpe de calor. El sudor no huele: el olor lo producen las bacterias de la piel al descomponerlo, sobre todo en las axilas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de la piel con una glándula sudorípara enrollada en la dermis y un poro en la superficie por donde sale el sudor">${BG}
        <rect x="14" y="40" width="232" height="26" fill="#f4c7a1"/><rect x="14" y="66" width="232" height="84" fill="#f0a98a" fill-opacity=".5"/>
        <path d="M130 40 V 120" stroke="var(--water)" stroke-width="4"/><path d="M130 120 q -16 4 -10 14 q 10 10 20 0 q 6 -12 -10 -14" stroke="var(--water)" stroke-width="4" fill="var(--water)" fill-opacity=".3"/>
        ${[[124, 30], [136, 22], [130, 12]].map(([x, y]) => `<path d="M${x} ${y} q 4 6 0 9 q -4 -3 0 -9 Z" fill="var(--water)"/>`).join("")}
        ${t(240, 58, "epidermis", { size: 10, anchor: "end" })}${t(240, 100, "dermis", { size: 10, anchor: "end" })}
        ${t(30, 140, "glándula", { size: 10, anchor: "start", color: "var(--inf)" })}<path d="M82 136 L 114 130" stroke="var(--muted)" stroke-width="1"/>
        ${t(30, 26, "sudor", { size: 11, anchor: "start", color: "var(--inf)" })}${t(130, 170, "al evaporarse, enfría", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>3.3 El análisis de orina</h3><p>La orina es una ventana al interior del cuerpo. Un <mark>análisis de orina</mark> se hace con una muestra de la primera orina de la mañana y aporta mucha información con una prueba sencilla e indolora. Primero se observa el <b>aspecto</b>: debe ser amarilla, transparente y sin espuma abundante. Después, unas <b>tiras reactivas</b> cambian de color según las sustancias presentes, y al microscopio se buscan células o cristales.</p><p>En una persona sana la orina <b>no</b> contiene glucosa, proteínas, sangre, bacterias ni glóbulos blancos. La <b>glucosa</b> en la orina sugiere diabetes; las <b>proteínas</b>, que el filtro del glomérulo está dañado; la <b>sangre</b>, una infección, un cálculo u otra lesión; y los <b>glóbulos blancos y bacterias</b>, una infección de orina. El análisis de orina también se usa para detectar el embarazo, porque la orina de una embarazada contiene una hormona que fabrica la placenta, o para controles de dopaje en el deporte.</p>`,
      svg: L.tabla("Qué indica encontrar cada sustancia en la orina", ["En la orina", "Normal", "Puede indicar"], [["Glucosa", "no", "diabetes"], ["Proteínas", "no", "glomérulo dañado"], ["Sangre", "no", "infección, cálculo"], ["Bacterias", "no", "cistitis"]]),
    },
    {
      html: `<h3>3.4 Cuando los riñones fallan</h3><p>La <b>insuficiencia renal</b> ocurre cuando los riñones dejan de filtrar bien; sus causas más frecuentes son la diabetes y la hipertensión mal controladas. Los desechos se acumulan en la sangre y pueden poner en peligro la vida. La solución es la <mark>diálisis</mark>: una máquina hace pasar la sangre por un filtro artificial que la limpia, en sesiones de unas cuatro horas, tres veces por semana. Es un tratamiento que salva vidas pero obliga a una vida muy pendiente de la máquina. La alternativa definitiva es el <b>trasplante de riñón</b>, el más frecuente en España. Podemos vivir con uno solo, por eso hay donantes vivos.</p><p>Existe también la <b>diálisis peritoneal</b>, que se hace en casa: se introduce un líquido en el abdomen a través de un tubo y el peritoneo, la membrana que recubre los órganos, actúa como filtro. Los desechos pasan al líquido, que se retira unas horas después.</p>`,
      svg: L.flujo("Cómo funciona la hemodiálisis", ["Se saca sangre por una vena del brazo", "Pasa por un filtro artificial (dializador)", "Los desechos y el agua sobrante salen al líquido", "La sangre limpia vuelve al cuerpo"], "La hemodiálisis"),
      video: { id: "xUyEkXXcig8", titulo: "Diálisis", canal: "Nucleus Medical Media", vistas: 2520650 },
    },
    {
      html: `<h3>3.5 Cuidar el aparato excretor</h3><p>Las <b>infecciones de orina</b> (cistitis) son frecuentes, sobre todo en las mujeres, porque su uretra es más corta y las bacterias suben con facilidad; producen escozor y ganas continuas de orinar. Los <b>cálculos renales</b> o piedras son cristales de sales que se forman en el riñón y causan un dolor muy intenso, el cólico nefrítico. Para prevenirlos conviene <mark>beber suficiente agua</mark>, unos 1,5 a 2 litros al día, no aguantar las ganas de orinar demasiado tiempo, tomar poca sal y mantener una buena higiene. El control de la tensión y del azúcar protege los riñones a largo plazo.</p><p>Un indicador muy práctico es el <b>color de la orina</b>: si es amarillo pálido, estamos bien hidratados; si es oscura, hay que beber más. También hay que tener cuidado con algunos medicamentos, como los antiinflamatorios tomados sin control durante mucho tiempo, porque pueden dañar el riñón.</p>`,
      svg: L.radial("Hábitos para cuidar el aparato excretor", "Riñones sanos", ["Beber agua", "Poca sal", "No aguantar la orina", "Higiene", "Tensión controlada", "Sin automedicarse"], "var(--leaf)"),
    },
  ],
  figura: {
    titulo: "Quién excreta qué",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Cuatro órganos excretores: pulmones eliminan CO2, riñones orina, piel sudor e hígado transforma tóxicos y fabrica urea">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${[["Pulmones", "CO₂ y vapor de agua", "var(--inf)"], ["Riñones", "orina: agua, urea, sales", "#b8860b"], ["Piel", "sudor: agua, sales, urea", "var(--water)"], ["Hígado", "fabrica urea: y transforma tóxicos", "#a0442b"]].map(([n, d, c], i) => { const x = 20 + i * 152; return `<rect x="${x}" y="40" width="140" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${t(x + 70, 110, n, { size: 20, color: c, font: D })}${t(x + 70, 140, d.split(": ")[0] + (d.includes(": ") ? ":" : ""), { size: 12, weight: 400 })}${d.includes(": ") ? t(x + 70, 158, d.split(": ")[1], { size: 12, weight: 400 }) : ""}`; }).join("")}
      ${t(320, 224, "la excreción elimina desechos de la sangre; las heces no son excreción", { size: 13, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "IjevalGe0Z4", titulo: "Cómo funcionan los riñones", canal: "DW Pía Castro", vistas: 885569, megusta: 0, busqueda: "aparato excretor riñones" },
  ejemplos: [
    { enunciado: "Los riñones filtran 180 L de plasma al día y se producen 1,5 L de orina. ¿Qué porcentaje del filtrado se reabsorbe?",
      pasos: ["Se reabsorbe: 180 − 1,5 = 178,5 L.", "Porcentaje: 178,5 / 180 · 100 ≈ 99,2 %."],
      resultado: "se reabsorbe más del 99 % del filtrado." },
    { enunciado: "Un análisis de orina muestra glucosa. ¿Qué paso de la formación de la orina falla y qué enfermedad puede ser?",
      pasos: ["La glucosa se filtra en el glomérulo, pero normalmente se reabsorbe toda en el túbulo.", "Si hay demasiada glucosa en la sangre, el túbulo no puede reabsorberla toda y pasa a la orina.", "Eso ocurre en la diabetes."],
      resultado: "la reabsorción se ve superada; es un signo típico de diabetes." },
    { enunciado: "Tras un partido de fútbol en verano, tu orina sale muy oscura y escasa. Explica por qué.",
      pasos: ["Has perdido mucha agua con el sudor.", "El cerebro libera más hormona antidiurética.", "Los riñones reabsorben más agua, y la poca orina que sale está muy concentrada."],
      resultado: "el cuerpo ahorra agua; hay que beber para reponerla." },
    { enunciado: "Un día ganas 2,6 L de agua y pierdes 0,6 L con el sudor, 0,4 L al respirar y 0,1 L con las heces. ¿Cuánta orina debes producir para mantener el equilibrio?",
      pasos: ["Pérdidas sin contar la orina: 0,6 + 0,4 + 0,1 = 1,1 L.", "Para equilibrar: orina = ganancias − otras pérdidas.", "2,6 − 1,1 = 1,5 L."],
      resultado: "1,5 litros de orina." },
    { enunciado: "Un análisis de orina tiene glóbulos blancos y bacterias, y la persona siente escozor al orinar. ¿Qué le ocurre y por qué es más frecuente en las mujeres?",
      pasos: ["Glóbulos blancos y bacterias en la orina indican una infección.", "El escozor y las ganas continuas de orinar son típicos de la cistitis.", "La uretra femenina es más corta, así que las bacterias llegan antes a la vejiga."],
      resultado: "una infección de orina (cistitis), más frecuente en mujeres por su uretra corta." },
    { enunciado: "Una persona con insuficiencia renal está cansada y pálida. ¿Qué relación tiene con el riñón?",
      pasos: ["El riñón fabrica la hormona eritropoyetina.", "Esa hormona ordena a la médula ósea fabricar glóbulos rojos.", "Si el riñón falla, hay menos glóbulos rojos y llega menos oxígeno a los tejidos: anemia."],
      resultado: "tiene anemia porque su riñón fabrica poca eritropoyetina." },
  ],
  errores: [...[
    "Confundir excreción y defecación: las heces no son excreción porque sus restos no han pasado por las células.",
    "Pensar que la orina se fabrica en la vejiga: la vejiga solo la almacena.",
    "Confundir uréter y uretra: el uréter une riñón y vejiga; la uretra lleva la orina al exterior.",
    "Creer que la urea la fabrica el riñón: la fabrica el hígado y el riñón la elimina.",
    "Decir que sudar sirve sobre todo para eliminar desechos: su función principal es refrigerar.",
  ], "Pensar que la excreción es solo cosa del riñón: también excretan los pulmones, la piel y el hígado."],
  ejercicios: [
    { nivel: "básico", ...{ q: "Define excreción y nombra los cuatro órganos que participan en ella.", sol: "Es la eliminación de los desechos de la sangre producidos por las células. Participan los pulmones, los riñones, las glándulas sudoríparas y el hígado." } },
    { nivel: "básico", ...{ q: "Ordena el recorrido de la orina desde que se forma hasta que sale.", sol: "Nefrona → tubo colector → pelvis renal → uréter → vejiga → uretra → exterior." } },
    { nivel: "básico", ...{ q: "¿Qué es la urea y de dónde procede?", sol: "Es un desecho nitrogenado que fabrica el hígado al descomponer los aminoácidos de las proteínas. Se elimina con la orina." } },
    { nivel: "básico", ...{ q: "¿Por qué el sudor nos refresca?", sol: "Porque para evaporarse necesita calor, y lo toma de la piel; así baja la temperatura del cuerpo." } },
    { nivel: "básico", ...{ q: "¿En qué consiste la diálisis?", sol: "Una máquina saca la sangre, la pasa por un filtro artificial que elimina los desechos y el agua sobrante, y la devuelve al cuerpo." } },
    { nivel: "básico", ...{ q: "Escribe tres hábitos para prevenir las infecciones de orina y los cálculos.", sol: "Beber 1,5-2 L de agua al día, no aguantar mucho las ganas de orinar y tomar poca sal; además, buena higiene." } },
    { nivel: "básico", q: "Nombra las tres zonas que se ven al cortar un riñón.", sol: "Corteza renal, médula renal (con las pirámides) y pelvis renal." },
    { nivel: "básico", q: "Escribe los tres pasos de la formación de la orina.", sol: "Filtración, reabsorción y secreción." },
    { nivel: "básico", q: "¿Qué desecho eliminan los pulmones y de qué proceso viene?", sol: "El dióxido de carbono, que procede de la respiración celular." },
    { nivel: "básico", q: "¿Qué sustancias no deben aparecer en la orina de una persona sana?", sol: "Glucosa, proteínas, sangre, bacterias y glóbulos blancos." },
    { nivel: "básico", q: "¿Qué cantidad de orina puede almacenar la vejiga?", sol: "Entre 300 y 500 mililitros." },
    { nivel: "básico", q: "Distingue uréter y uretra.", sol: "El uréter lleva la orina del riñón a la vejiga (hay dos). La uretra la lleva de la vejiga al exterior (hay una)." },
    { nivel: "medio", ...{ q: "¿Por qué en la orina normal no hay proteínas ni glóbulos rojos?", sol: "Porque son demasiado grandes para atravesar el filtro del glomérulo y se quedan en la sangre." } },
    { nivel: "medio", ...{ q: "Explica la diferencia entre filtración y reabsorción.", sol: "En la filtración pasan sustancias de la sangre al interior de la nefrona. En la reabsorción, las sustancias útiles vuelven del túbulo a la sangre." } },
    { nivel: "medio", ...{ q: "¿Qué hace la hormona antidiurética?", sol: "Aumenta la reabsorción de agua en el riñón, de modo que se produce menos orina y más concentrada." } },
    { nivel: "medio", q: "¿Por qué el hígado transforma el amoniaco en urea?", sol: "Porque el amoniaco es muy tóxico y la urea mucho menos; así se puede transportar por la sangre hasta el riñón sin dañar las células." },
    { nivel: "medio", q: "Explica dos funciones del riñón distintas de fabricar orina.", sol: "Fabrica eritropoyetina, que estimula la producción de glóbulos rojos, y activa la vitamina D, necesaria para absorber calcio. También regula la tensión, las sales y la acidez de la sangre." },
    { nivel: "medio", q: "¿Por qué los glomérulos filtran 180 L al día si solo se forman 1,5 L de orina?", sol: "Porque más del 99 % de lo filtrado (agua, glucosa, sales útiles) se reabsorbe en el túbulo. Filtrar mucho permite revisar toda la sangre muchas veces y eliminar con precisión lo que sobra." },
    { nivel: "medio", q: "Explica cómo controlamos la micción.", sol: "Al llenarse la vejiga, sus receptores avisan a la médula y al encéfalo y sentimos ganas. El esfínter interno se abre de forma automática, pero el externo lo controlamos a voluntad hasta encontrar el momento adecuado." },
    { nivel: "medio", q: "¿Por qué en un control de alcoholemia se puede usar el aliento?", sol: "Porque el alcohol de la sangre pasa al aire de los alvéolos y se expulsa al respirar; los pulmones también excretan sustancias volátiles." },
    { nivel: "medio", q: "Compara la hemodiálisis y la diálisis peritoneal.", sol: "En la hemodiálisis la sangre sale del cuerpo y pasa por un filtro artificial en el hospital, unas 4 horas tres veces por semana. En la peritoneal se introduce un líquido en el abdomen y el peritoneo hace de filtro; se puede hacer en casa." },
    { nivel: "medio", q: "Una persona tiene la orina muy oscura y apenas orina. ¿Qué le recomendarías y por qué?", sol: "Beber agua, porque probablemente está deshidratada: su hormona antidiurética hace que el riñón reabsorba mucha agua y la orina sale escasa y concentrada." },
    { nivel: "medio", q: "¿Por qué las heces sí llevan algunos productos de excreción, aunque la defecación no sea excreción?", sol: "Porque el hígado vierte a la bilis desechos como la bilirrubina de los glóbulos rojos viejos y restos de sustancias tóxicas, que salen al intestino y se eliminan con las heces." },
    { nivel: "medio", q: "Explica por qué el sudor sirve para regular la temperatura y qué riesgo hay si no bebemos.", sol: "Al evaporarse toma calor de la piel y enfría el cuerpo. Si no reponemos el agua y las sales perdidas, aparece la deshidratación y puede producirse un golpe de calor." },
    { nivel: "avanzado", ...{ q: "Dibuja una nefrona y señala el glomérulo, la cápsula de Bowman, el túbulo y el asa de Henle.", sol: "Ver el dibujo del bloque de la nefrona: ovillo de capilares dentro de una copa, del que sale un tubo largo con una curva en U que llega al tubo colector." } },
    { nivel: "avanzado", q: "Explica por qué la diabetes y la hipertensión mal controladas son las principales causas de insuficiencia renal.", sol: "El exceso de glucosa y la presión alta dañan con los años los capilares finísimos de los glomérulos; se pierden nefronas, que no se regeneran, y el riñón filtra cada vez peor." },
    { nivel: "avanzado", q: "Diseña una simulación de la filtración del glomérulo con materiales del laboratorio.", sol: "Mezclar agua con sal, glucosa o azúcar, almidón (molécula grande) y colorante. Filtrar con papel de filtro. Comprobar con lugol que el almidón no pasa (se queda como las proteínas) y que el agua con sal y azúcar sí atraviesa el filtro (como en el glomérulo)." },
    { nivel: "avanzado", q: "Si una persona dona un riñón, ¿por qué puede seguir con una vida normal?", sol: "Porque cada riñón tiene alrededor de un millón de nefronas y una gran reserva; el riñón que queda aumenta de tamaño y trabajo y es suficiente para filtrar la sangre." },
    { nivel: "avanzado", q: "Explica, paso a paso, qué le pasa a una molécula de urea desde que se fabrica hasta que sale del cuerpo.", sol: "Se fabrica en el hígado a partir del amoniaco → pasa a la sangre → llega al riñón por la arteria renal → se filtra en el glomérulo hacia la cápsula de Bowman → recorre el túbulo (casi no se reabsorbe) → tubo colector → pelvis renal → uréter → vejiga → uretra → exterior." },
    { nivel: "avanzado", q: "¿Por qué una persona en diálisis debe controlar mucho lo que bebe y la sal y el potasio que come?", sol: "Porque sus riñones casi no eliminan agua, sal ni potasio; entre sesiones se acumulan. El exceso de agua y sal sube la tensión y sobrecarga el corazón, y el potasio alto puede provocar arritmias graves." },
    { nivel: "avanzado", q: "Argumenta por qué el trasplante de riñón es mejor solución que la diálisis para muchos pacientes.", sol: "Un riñón trasplantado hace todas las funciones del riñón (también las hormonales) de forma continua, permite una vida mucho más libre y una mayor supervivencia, y a largo plazo es más barato. Su inconveniente es el riesgo de rechazo y la necesidad de inmunosupresores." },
    { nivel: "avanzado", q: "Interpreta este análisis: glucosa positiva, proteínas negativas, sangre negativa. ¿Qué paso de la formación de la orina está superado y qué prueba pedirías?", sol: "La reabsorción de glucosa del túbulo está superada porque hay demasiada glucosa en la sangre. Pediría un análisis de glucosa en sangre para confirmar si hay diabetes." },
  ],
  quiz: [
    { q: "La excreción elimina…", o: ["los restos no digeridos", "los desechos de la sangre producidos por las células", "el alimento", "el oxígeno"], a: 1, e: "Las heces no son excreción." },
    { q: "La urea la fabrica…", o: ["el riñón", "la vejiga", "el hígado", "el pulmón"], a: 2, e: "A partir del amoniaco." },
    { q: "La unidad del riñón que fabrica la orina es…", o: ["la nefrona", "la neurona", "el alvéolo", "la vellosidad"], a: 0, e: "Un millón por riñón." },
    { q: "La orina baja del riñón a la vejiga por…", o: ["la uretra", "la arteria renal", "la vena renal", "el uréter"], a: 3, e: "Hay dos uréteres." },
    { q: "La sangre se filtra en…", o: ["la pelvis renal", "el glomérulo", "la vejiga", "el asa de Henle"], a: 1, e: "Ovillo de capilares." },
    { q: "En la reabsorción…", o: ["la sangre se filtra", "se expulsa la orina", "lo útil vuelve a la sangre", "se forma urea"], a: 2, e: "Agua, glucosa y sales." },
    { q: "La orina es sobre todo…", o: ["agua", "urea", "sal", "glucosa"], a: 0, e: "Un 95 %." },
    { q: "La hormona antidiurética hace que…", o: ["orinemos más", "suba la glucosa", "sudemos", "se reabsorba más agua"], a: 3, e: "Orina escasa y concentrada." },
    { q: "La función principal del sudor es…", o: ["eliminar urea", "refrigerar el cuerpo", "hidratar la piel", "oler"], a: 1, e: "Al evaporarse se lleva calor." },
    { q: "Los pulmones excretan sobre todo…", o: ["urea", "ácido úrico", "dióxido de carbono", "bilirrubina"], a: 2, e: "De la respiración celular." },
    { q: "La sangre en diálisis pasa por…", o: ["un filtro artificial", "el hígado", "la vejiga", "un pulmón artificial"], a: 0, e: "Que elimina los desechos." },
    { q: "La glucosa en la orina puede indicar…", o: ["cistitis", "un cálculo", "deshidratación", "diabetes"], a: 3, e: "Se supera la reabsorción." },
    { q: "La micción la controlamos con el esfínter…", o: ["interno", "externo", "del píloro", "cardias"], a: 1, e: "Es voluntario." },
    { q: "La hormona del riñón que estimula la fabricación de glóbulos rojos es la…", o: ["insulina", "adrenalina", "eritropoyetina", "antidiurética"], a: 2, e: "Su falta causa anemia." },
    { q: "Los riñones filtran al día unos…", o: ["180 L", "1,5 L", "18 L", "1.800 L"], a: 0, e: "Y se reabsorbe más del 99 %." },
    { q: "La bilirrubina procede de…", o: ["las proteínas", "el músculo", "el ADN", "los glóbulos rojos viejos"], a: 3, e: "Colorea la orina y las heces." },
    { q: "Las piedras del riñón se llaman…", o: ["glomérulos", "cálculos renales", "nefronas", "pirámides"], a: 1, e: "Causan el cólico nefrítico." },
    { q: "La infección de la vejiga se llama…", o: ["hepatitis", "nefritis", "cistitis", "gastritis"], a: 2, e: "Más frecuente en mujeres." },
    { q: "Un indicador fácil de buena hidratación es…", o: ["orina amarillo pálido", "orina oscura", "no orinar", "sudar poco"], a: 0, e: "Si es oscura, hay que beber." },
    { q: "Para vivir basta con…", o: ["ningún riñón", "tres riñones", "los dos riñones siempre", "un solo riñón"], a: 3, e: "Por eso hay donantes vivos." },
  ],
  examen: [
    { q: "La orina se almacena en…", o: ["el riñón", "la vejiga urinaria", "el uréter", "la pelvis renal"], a: 1, e: "Entre 300 y 500 mL." },
    { q: "Las proteínas no aparecen en la orina porque…", o: ["se reabsorben", "se digieren", "no atraviesan el filtro del glomérulo", "las destruye el hígado"], a: 2, e: "Son demasiado grandes." },
    { q: "El amoniaco se transforma en urea porque es…", o: ["muy tóxico", "muy útil", "un nutriente", "un gas noble"], a: 0, e: "La urea es menos peligrosa." },
    { q: "La secreción en la nefrona consiste en…", o: ["filtrar la sangre", "almacenar orina", "reabsorber agua", "añadir sustancias sobrantes al túbulo"], a: 3, e: "Como restos de medicamentos." },
    { q: "Al beber mucha agua, la orina sale…", o: ["escasa y oscura", "abundante y clara", "con glucosa", "con proteínas"], a: 1, e: "Se reabsorbe menos agua." },
    { q: "La principal causa de insuficiencia renal es…", o: ["beber agua", "hacer deporte", "la diabetes y la hipertensión mal controladas", "comer fruta"], a: 2, e: "Dañan los glomérulos." },
    { q: "El órgano que convierte el amoniaco en urea es el…", o: ["hígado", "páncreas", "riñón", "bazo"], a: 0, e: "La gran fábrica química." },
    { q: "El trasplante más frecuente en España es el de…", o: ["corazón", "pulmón", "córnea", "riñón"], a: 3, e: "Hay donantes vivos." },
  ],
  feynman: [...["Qué es la excreción y en qué se diferencia de expulsar las heces", "Cómo es el riñón y qué partes tiene la nefrona", "Los tres pasos de la formación de la orina"], "Qué desechos producimos y por dónde sale cada uno", "Qué se puede saber de una persona con un análisis de orina"],
  mapa: mapa("EXCRECIÓN", "var(--eso)", [
    ["Órganos", "pulmones · riñones · piel · hígado", "var(--inf)"],
    ["Aparato urinario", "riñón · uréter · vejiga · uretra", "#b8860b"],
    ["Nefrona", "glomérulo · cápsula · túbulo", "#a0442b"],
    ["Orina", "filtración · reabsorción · secreción", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ...[
    ["Excreción", "Eliminación de los desechos de la sangre producidos por las células."],
    ["Urea", "Desecho nitrogenado que fabrica el hígado y se elimina con la orina."],
    ["Nefrona", "Unidad del riñón que fabrica la orina; hay un millón en cada riñón."],
    ["Glomérulo", "Ovillo de capilares donde se filtra la sangre."],
    ["Reabsorción", "Vuelta a la sangre del agua, la glucosa y las sales útiles."],
    ["Uréter y uretra", "Uréter: riñón → vejiga. Uretra: vejiga → exterior."],
    ["Hormona antidiurética", "Hace que el riñón reabsorba más agua."],
    ["Diálisis", "Filtrado artificial de la sangre cuando los riñones fallan."],
  ],
    ["Desechos nitrogenados", "Urea, ácido úrico y creatinina."],
    ["Eritropoyetina", "Hormona del riñón que estimula la fabricación de glóbulos rojos."],
    ["Balance de agua", "Ganamos y perdemos unos 2,5 L al día."],
    ["Órganos excretores", "Riñones, pulmones, glándulas sudoríparas e hígado."],
  ],
  glosario: [
    ["Excreción", "Eliminación de los desechos producidos por las células."],
    ["Urea", "Desecho nitrogenado que fabrica el hígado."],
    ["Ácido úrico", "Desecho que procede de la descomposición del ADN."],
    ["Riñón", "Órgano que filtra la sangre y fabrica la orina."],
    ["Nefrona", "Unidad microscópica del riñón que forma la orina."],
    ["Glomérulo", "Ovillo de capilares donde se filtra la sangre."],
    ["Cápsula de Bowman", "Copa de la nefrona que recoge el filtrado."],
    ["Túbulo renal", "Tubo de la nefrona donde se reabsorben las sustancias útiles."],
    ["Filtración", "Paso de agua y moléculas pequeñas de la sangre a la nefrona."],
    ["Reabsorción", "Vuelta a la sangre de las sustancias útiles."],
    ["Uréter", "Conducto que lleva la orina del riñón a la vejiga."],
    ["Uretra", "Conducto que lleva la orina al exterior."],
    ["Micción", "Expulsión de la orina."],
    ["Hormona antidiurética", "Hormona que aumenta la reabsorción de agua."],
    ["Glándula sudorípara", "Glándula de la piel que fabrica el sudor."],
    ["Diálisis", "Limpieza artificial de la sangre."],
    ["Cálculo renal", "Piedra formada por cristales de sales en el riñón."],
  ],
  situacion: {
    titulo: "Campaña «Bebe agua, cuida tus riñones»",
    reto: "La enfermera escolar ha observado que muchos alumnos beben poco agua y muchos refrescos. Vuestro grupo investigará la hidratación en el instituto y preparará una campaña para mejorarla.",
    pasos: [
      "Haced una encuesta anónima sobre cuánta agua y cuántos refrescos se beben al día.",
      "Realizad la simulación de la filtración del glomérulo con papel de filtro y explicad qué representa cada sustancia.",
      "Elaborad una escala de colores de la orina para valorar la hidratación.",
      "Calculad el balance de agua de un día de deporte en verano y proponed cuánto hay que beber.",
      "Diseñad la campaña: carteles, vídeo corto o charla para otros cursos.",
    ],
    producto: "Campaña de hidratación con datos de la encuesta, una escala de color y consejos para cuidar el aparato excretor.",
    evaluacion: [
      "Corrección científica de las explicaciones sobre el riñón y la orina.",
      "Tratamiento correcto y gráfico de los datos de la encuesta.",
      "Rigor de la práctica de filtración.",
      "Creatividad y claridad de la campaña.",
    ],
  },
  familias: ["Observad el color de la orina un día que bebáis poco y otro que bebáis mucho, y relacionadlo con la hormona antidiurética.", "Calculad cuánta agua bebe cada uno al día y comparadla con lo recomendado.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Cuerpo humano» y «Hábitos saludables» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): la excreción y sus órganos, anatomía y fisiología del aparato urinario, la nefrona y la formación de la orina, el equilibrio hídrico y la prevención de enfermedades renales. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Disección de riñón de cordero para identificar corteza, médula y pelvis.",
      "Simulación de filtración con papel de filtro, agua con sal, almidón y colorante.",
      "Lectura guiada de un análisis de orina real anonimizado.",
      "Cálculo del balance de agua diario de cada alumno.",
    ],
  },
  fuentes: [...[RD, wiki("Aparato urinario", "Aparato_urinario"), wiki("Nefrona", "Nefrona")], wiki("Diálisis", "Di%C3%A1lisis")],
  revisado: "2026-11-13",
};
