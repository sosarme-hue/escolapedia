// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Silueta con las glándulas endocrinas principales.
const GL = [["hipófisis", 60, 30, "var(--pen)"], ["tiroides", 60, 64, "var(--red)"], ["suprarrenales", 50, 120, "var(--sun)"], ["páncreas", 70, 132, "var(--leaf)"], ["ovarios", 48, 170, "#a05ad0"], ["testículos", 72, 196, "var(--inf)"]];
const silueta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M60 4 Q 84 4 84 30 Q 84 50 70 54 V 62 Q 104 66 108 92 L 112 160 Q 112 176 96 178 L 92 214 H 28 L 24 178 Q 8 176 8 160 L 12 92 Q 16 66 50 62 V 54 Q 36 50 36 30 Q 36 4 60 4 Z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
  ${GL.map(([, gx, gy, c]) => `<circle cx="${gx}" cy="${gy}" r="6" fill="${c}"/>`).join("")}
</g>`;
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El sistema endocrino",
  minutos: 100,
  objetivos: [
    "Explicar qué son las hormonas, cómo actúan sobre sus órganos diana y en qué se diferencian de la coordinación nerviosa",
    "Localizar las glándulas endocrinas principales y relacionarlas con sus hormonas",
    "Describir el eje hipotálamo-hipófisis y la regulación por retroalimentación negativa",
    "Explicar la regulación de la glucosa por la insulina y el glucagón",
    "Relacionar las hormonas sexuales con los cambios de la pubertad",
    "Conocer las enfermedades endocrinas más frecuentes, en especial la diabetes, y cómo prevenirlas",
  ],
  claves: ["hormona", "glándula endocrina", "órgano diana", "hipotálamo", "hipófisis", "insulina", "glucagón", "retroalimentación", "pubertad", "diabetes"],
  pregunta: {
    texto: "Un susto te acelera el corazón en un segundo y te deja temblando durante varios minutos. ¿Por qué dura tanto si el peligro ya pasó?",
    respuesta: "El aviso rápido lo da el <b>sistema nervioso</b>, pero también se libera <mark>adrenalina</mark>, una hormona que viaja por la sangre. Las hormonas tardan más en actuar y en desaparecer que los impulsos nerviosos: su efecto es <b>más lento pero más duradero</b>.",
  },
  lectura: {
    titulo: "Un perro, un páncreas y un premio Nobel",
    html: `<p>A principios del siglo XX, tener diabetes de tipo 1 era una sentencia de muerte. Los niños que la sufrían adelgazaban, tenían una sed insaciable y, aunque los médicos les imponían dietas casi de hambre, morían en pocos meses. Se sabía que el páncreas tenía algo que ver, porque los perros a los que se les extirpaba desarrollaban la enfermedad, pero nadie lograba encontrar la sustancia responsable.</p>
<p>En 1921, en Toronto (Canadá), un joven cirujano, Frederick Banting, y un estudiante, Charles Best, consiguieron extraer de páncreas de perro una sustancia que, inyectada a perros diabéticos, les bajaba el azúcar de la sangre. La llamaron <b>insulina</b>. En enero de 1922 la probaron en Leonard Thompson, un chico de 14 años que estaba a punto de morir. Tras purificar mejor el extracto, se recuperó de forma asombrosa. Banting recibió el Premio Nobel al año siguiente y vendió la patente por un dólar simbólico para que la insulina llegara a todo el mundo.</p>
<p>La insulina es una <b>hormona</b>, un mensajero químico que viaja por la sangre. En este tema conocerás las glándulas que fabrican las hormonas y cómo controlan, en silencio, tu crecimiento, tu energía, tu respuesta al miedo y los cambios de la adolescencia.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Una coordinación química</h3><p>El cuerpo tiene dos sistemas de coordinación que trabajan juntos. El <b>nervioso</b> usa impulsos eléctricos que viajan por los nervios. El <mark>sistema endocrino</mark> usa mensajeros químicos, las <b>hormonas</b>, que viajan por la sangre. Están conectados: el hipotálamo, una zona del encéfalo, controla buena parte de las glándulas endocrinas.</p>${tabla(["", "Sistema nervioso", "Sistema endocrino"], [["Mensajero", "impulso nervioso", "hormona"], ["Vía", "nervios", "sangre"], ["Velocidad", "muy rápida (milisegundos)", "lenta (minutos u horas)"], ["Duración", "breve", "prolongada"], ["Ejemplo", "apartar la mano del fuego", "crecer, madurar en la pubertad"]])}`,
      svg: L.compara("Coordinación nerviosa y hormonal", ["Nerviosa", "var(--pen)", ["impulsos eléctricos", "por los nervios", "muy rápida", "efecto breve"]], ["Hormonal", "var(--red)", ["hormonas", "por la sangre", "más lenta", "efecto duradero"]]),
    },
    {
      html: `<h3>1.2 ¿Qué son las hormonas?</h3><p>Las <b>hormonas</b> son sustancias químicas que fabrican las <b>glándulas endocrinas</b> y que vierten directamente a la sangre. Llegan a todo el cuerpo, pero solo actúan sobre los <mark>órganos diana</mark>, cuyas células tienen el <b>receptor</b> adecuado, como una llave que solo abre su cerradura. Se necesitan en cantidades minúsculas. Las glándulas endocrinas son distintas de las <b>exocrinas</b>, como las salivales o las sudoríparas, que vierten su producto por un conducto al exterior o a una cavidad del cuerpo.</p><p>Una misma hormona puede tener efectos distintos en órganos diferentes. La adrenalina, por ejemplo, acelera el corazón pero relaja los bronquios para que entre más aire. Las hormonas no duran para siempre: el hígado y los riñones las destruyen o las eliminan, por eso las glándulas deben fabricarlas continuamente según las necesidades.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una glándula vierte hormonas a la sangre; solo la célula diana con el receptor adecuado responde">${BG}
        <circle cx="40" cy="60" r="24" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>${t(40, 100, "glándula", { size: 11, color: "var(--pen)" })}
        <path d="M14 130 H 246" stroke="var(--red)" stroke-width="16" stroke-opacity=".25"/>${t(130, 158, "sangre", { size: 10, color: "var(--red)" })}
        ${fl(56, 78, 80, 124, "var(--pen)")}${[[100, 130], [130, 126], [160, 132]].map(([x, y]) => `<path d="M${x - 5} ${y + 4} L ${x} ${y - 5} L ${x + 5} ${y + 4} Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1"/>`).join("")}
        <rect x="150" y="30" width="44" height="40" rx="8" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><path d="M164 70 L 172 80 L 180 70" fill="var(--leaf)"/>
        <rect x="204" y="30" width="44" height="40" rx="8" fill="var(--muted)" fill-opacity=".15" stroke="var(--muted)" stroke-width="2"/><rect x="218" y="70" width="16" height="8" fill="var(--muted)"/>
        ${t(172, 22, "diana ✓", { size: 10, color: "var(--leaf)" })}${t(226, 22, "no diana", { size: 10, color: "var(--muted)" })}${fl(172, 116, 172, 88, "var(--leaf)")}</svg>`,
    },
    {
      html: `<h3>1.3 Cómo actúa una hormona paso a paso</h3><p>El funcionamiento de cualquier hormona sigue siempre una secuencia parecida:</p><p>• Un <b>estímulo</b> llega a la glándula: puede ser un cambio en la sangre (sube la glucosa), una señal nerviosa (un susto) u otra hormona.<br>• La <mark>glándula endocrina</mark> fabrica la hormona y la vierte a la sangre.<br>• La hormona viaja por todo el cuerpo con la <b>circulación</b>.<br>• Al llegar al <mark>órgano diana</mark>, se une a sus <b>receptores</b>, que están en la membrana o en el interior de las células.<br>• Las células diana <b>cambian su actividad</b>: fabrican otra sustancia, captan glucosa, crecen o se dividen.</p><p>Como las hormonas tardan en llegar y en ser eliminadas, sus efectos son más lentos que los del sistema nervioso, pero también más duraderos: el crecimiento o la pubertad duran años.</p>`,
      svg: L.flujo("Cómo actúa una hormona", ["Estímulo: cambio en la sangre o señal nerviosa", "La glándula vierte la hormona a la sangre", "Viaja por la circulación", "Se une al receptor del órgano diana y lo cambia"], "Del estímulo a la respuesta"),
    },
    {
      html: `<h3>1.4 Las glándulas endocrinas</h3><p>Las glándulas endocrinas están repartidas por todo el cuerpo. En la cabeza están el <b>hipotálamo</b> y la <b>hipófisis</b>; en el cuello, el <b>tiroides</b>; sobre los riñones, las <b>glándulas suprarrenales</b>; en el abdomen, el <b>páncreas</b>, que es a la vez exocrino (jugo pancreático) y endocrino (insulina y glucagón); y en el aparato reproductor, las <b>gónadas</b>: los <mark>ovarios</mark> en las mujeres y los <mark>testículos</mark> en los hombres. Algunos órganos que no son glándulas, como el estómago o el corazón, también fabrican hormonas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Silueta humana con la hipófisis, el tiroides, las suprarrenales, el páncreas, los ovarios y los testículos">${BG}
        ${silueta(20, 6, 0.74)}
        ${GL.map(([n, gx, gy, c], i) => { const x = 20 + gx * 0.74, y = 6 + gy * 0.74, ty = 22 + i * 28; return `<path d="M${x + 6} ${y} L 146 ${ty - 4}" stroke="var(--muted)" stroke-width="1"/>${t(150, ty, n, { size: 11, anchor: "start", color: c })}`; }).join("")}</svg>`,
      video: { id: "6a6VCBZKZyY", titulo: "SISTEMA ENDOCRINO en 12 Minutos. ¡Fácil y Sencillo!", canal: "Anatomía Fácil por Juan José Sánchez", vistas: 807277 },
    },
    {
      html: `<h3>2.1 El hipotálamo y la hipófisis</h3><p>El <b>hipotálamo</b> es una pequeña zona del encéfalo que hace de puente entre el sistema nervioso y el endocrino. Recibe información del cuerpo y envía órdenes a la <mark>hipófisis</mark>, una glándula del tamaño de un garbanzo colgada debajo del encéfalo. A la hipófisis se la llama la <b>glándula maestra</b>, porque sus hormonas controlan a otras glándulas: el tiroides, las suprarrenales y las gónadas. Además produce la <b>hormona del crecimiento</b>, que hace crecer los huesos y los músculos, sobre todo durante la infancia y la adolescencia, y la hormona antidiurética.</p><p>El control funciona en cascada, como una cadena de mando: el <b>hipotálamo</b> libera hormonas que ordenan a la <b>hipófisis</b> fabricar las suyas, y estas viajan hasta otra glándula, por ejemplo el tiroides, que entonces produce su propia hormona. Así, una señal pequeña en el encéfalo puede tener un gran efecto en todo el cuerpo. La hipófisis también fabrica la <b>prolactina</b>, que estimula la producción de leche tras el parto, y la <b>oxitocina</b>, que contrae el útero durante el parto.</p>`,
      svg: L.flujo("Eje hipotálamo, hipófisis y glándula", ["Hipotálamo: recibe información y ordena", "Hipófisis: glándula maestra", "Tiroides, suprarrenales o gónadas", "Órganos diana de todo el cuerpo"], "Cadena de mando hormonal"),
    },
    {
      html: `<h3>2.2 La hormona del crecimiento</h3><p>La <mark>hormona del crecimiento</mark> la fabrica la hipófisis, sobre todo durante el <b>sueño profundo</b>; por eso dormir bien es tan importante en la infancia y la adolescencia. Hace que los huesos se alarguen en sus extremos, en unas zonas de cartílago llamadas <b>cartílagos de crecimiento</b>, y que aumenten los músculos. Al terminar la adolescencia, esos cartílagos se convierten en hueso y ya no crecemos más en altura.</p><p>Cuando la hormona falla aparecen alteraciones:</p><p>• Si falta en la infancia, se produce <b>enanismo hipofisario</b>; hoy se trata con hormona fabricada por bacterias modificadas.<br>• Si sobra en la infancia, aparece el <b>gigantismo</b>, con estaturas que superan los dos metros y medio.<br>• Si sobra en la edad adulta, cuando los huesos ya no pueden alargarse, crecen las manos, los pies y la mandíbula: es la <b>acromegalia</b>.</p><p>La estatura final depende también de los genes, de la alimentación y del ejercicio.</p>`,
      svg: L.tabla("Alteraciones de la hormona del crecimiento", ["Alteración", "Hormona", "Cuándo"], [["Enanismo", "falta", "infancia"], ["Gigantismo", "exceso", "infancia"], ["Acromegalia", "exceso", "edad adulta"]]),
    },
    {
      html: `<h3>2.3 El tiroides y las suprarrenales</h3><p>El <b>tiroides</b>, con forma de mariposa delante de la tráquea, produce la <mark>tiroxina</mark>, que regula el metabolismo: la velocidad a la que las células gastan energía. Para fabricarla necesita <b>yodo</b>, que tomamos con el pescado y la sal yodada. Las <b>glándulas suprarrenales</b>, encima de cada riñón, producen el <mark>cortisol</mark>, relacionado con el estrés prolongado, y la <b>adrenalina</b>, la hormona de la «lucha o huida»: en una situación de peligro acelera el corazón y la respiración, dilata las pupilas y sube la glucosa en sangre para tener energía inmediata.</p><p>El <b>cortisol</b> ayuda a superar situaciones difíciles, pero si el estrés se mantiene semanas o meses, su exceso debilita las defensas, altera el sueño y favorece el aumento de peso. Junto al tiroides hay cuatro glándulas diminutas, las <b>paratiroides</b>, que regulan el calcio de la sangre y de los huesos.</p>`,
      svg: L.compara("Hormonas del tiroides y de las suprarrenales", ["Tiroides", "var(--pen)", ["tiroxina", "regula el metabolismo", "necesita yodo", "en el cuello"]], ["Suprarrenales", "var(--red)", ["adrenalina", "lucha o huida", "cortisol: estrés", "sobre los riñones"]]),
    },
    {
      html: `<h3>2.4 Otras glándulas y hormonas</h3><p>Además de las grandes glándulas, hay otros órganos que fabrican hormonas importantes:</p><p>• La <mark>glándula pineal</mark> o epífisis, en el centro del encéfalo, produce <b>melatonina</b> cuando oscurece. Esta hormona nos da sueño y regula el <b>ritmo circadiano</b>, el reloj interno de 24 horas. La luz de las pantallas por la noche frena su producción y por eso cuesta dormirse.<br>• El <b>timo</b>, detrás del esternón, es muy activo en la infancia y ayuda a madurar a algunos glóbulos blancos.<br>• El <b>estómago</b> y el <b>intestino</b> fabrican hormonas que regulan la digestión y el apetito, como la <b>grelina</b>, que da hambre.<br>• El <b>tejido adiposo</b> produce <b>leptina</b>, que avisa al hipotálamo de que hay reservas de grasa y reduce el apetito.<br>• El <b>riñón</b> fabrica la eritropoyetina, que estimula la formación de glóbulos rojos.<br>• La <b>placenta</b>, durante el embarazo, produce hormonas que mantienen la gestación; una de ellas se detecta en los test de embarazo.</p>`,
      svg: L.radial("Otras glándulas y órganos que fabrican hormonas", "Hormonas", ["Pineal: melatonina", "Paratiroides: calcio", "Timo", "Estómago: grelina", "Grasa: leptina", "Placenta"], "var(--sun)"),
    },
    {
      html: `<h3>3.1 El páncreas y el azúcar de la sangre</h3><p>La cantidad de glucosa en la sangre, la <b>glucemia</b>, debe mantenerse cerca de 1 gramo por litro. De eso se encarga el páncreas con dos hormonas opuestas. Después de comer, la glucosa sube y el páncreas libera <mark>insulina</mark>: las células captan glucosa y el hígado la guarda como glucógeno, así que la glucemia baja. Si llevamos horas sin comer, la glucosa baja y el páncreas libera <mark>glucagón</mark>: el hígado rompe el glucógeno y suelta glucosa a la sangre, que vuelve a subir. Es un equilibrio constante.</p><p>Las hormonas del páncreas las fabrican unos grupos de células repartidos por la glándula, los <b>islotes de Langerhans</b>: las células beta producen insulina y las alfa, glucagón. El cerebro depende casi por completo de la glucosa para obtener energía, por eso una bajada fuerte de azúcar, la <b>hipoglucemia</b>, provoca mareo, sudor frío, confusión e incluso pérdida de conciencia. Se corrige tomando enseguida algo azucarado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Regulación de la glucosa: si sube, el páncreas libera insulina y baja; si baja, libera glucagón y sube">${BG}
        <path d="M14 90 H 246" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="6 4"/>${t(246, 84, "normal", { size: 10, anchor: "end", color: "var(--leaf)" })}
        <path d="M20 90 Q 50 90 64 40 Q 76 20 100 60 Q 116 90 130 90 Q 150 90 164 140 Q 176 160 196 120 Q 210 90 240 90" stroke="var(--red)" stroke-width="3" fill="none"/>
        ${caja(52, 4, 70, 22, "comer ↑", "var(--red)", { size: 10 })}${caja(150, 154, 74, 22, "ayuno ↓", "var(--pen)", { size: 10 })}
        ${t(96, 46, "insulina", { size: 11, anchor: "start", color: "var(--leaf)" })}${fl(96, 52, 106, 72, "var(--leaf)")}
        ${t(200, 146, "glucagón", { size: 11, anchor: "start", color: "#b8860b" })}${fl(170, 150, 188, 128, "#b8860b")}
        ${t(20, 170, "glucemia", { size: 10, anchor: "start", color: "var(--muted)" })}</svg>`,
      video: { id: "Ibu55Y45iKU", titulo: "Insulina y Glucagón (Canción)", canal: "CasiCreativo", vistas: 2878881 },
    },
    {
      html: `<h3>3.2 La retroalimentación negativa</h3><p>¿Cómo sabe una glándula cuándo parar? Funciona como el <b>termostato</b> de una calefacción: si la temperatura baja, se enciende; cuando llega a la deseada, se apaga. En el cuerpo, cuando el nivel de una hormona sube lo suficiente, esa misma hormona <mark>frena</mark> a la glándula que la produce. Por ejemplo, si hay mucha tiroxina en la sangre, el hipotálamo y la hipófisis reducen sus órdenes al tiroides, y este fabrica menos. Este mecanismo se llama <b>retroalimentación negativa</b> y mantiene el equilibrio interno u <b>homeostasis</b>.</p><p>La regulación de la glucosa también es un ejemplo de retroalimentación negativa: la subida de glucosa provoca la liberación de insulina, cuyo efecto es justamente bajar la glucosa; cuando baja, se frena la insulina. Existen también unos pocos casos de <b>retroalimentación positiva</b>, en los que el efecto refuerza la causa, como durante el parto: las contracciones del útero provocan más oxitocina, que produce contracciones aún más fuertes hasta que nace el bebé.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de retroalimentación: hipófisis estimula al tiroides, el tiroides produce tiroxina y la tiroxina frena a la hipófisis">${BG}
        ${caja(80, 14, 100, 34, "hipófisis", "var(--pen)", { size: 12 })}${caja(80, 128, 100, 34, "tiroides", "var(--red)", { size: 12 })}
        ${fl(110, 50, 110, 124, "var(--leaf)")}${t(104, 92, "estimula", { size: 10, anchor: "end", color: "var(--leaf)" })}
        <path d="M184 145 Q 236 145 236 90 Q 236 31 186 31" stroke="var(--red)" stroke-width="2.5" fill="none"/><path d="M194 25 L 186 31 L 194 37" stroke="var(--red)" stroke-width="2.5" fill="none"/>
        ${t(232, 104, "tiroxina", { size: 10, anchor: "end", color: "var(--red)" })}
        <circle cx="236" cy="66" r="9" fill="var(--paper)" stroke="var(--red)" stroke-width="2.5"/><path d="M231 66 H 241" stroke="var(--red)" stroke-width="3"/>${t(214, 70, "frena", { size: 11, anchor: "end", color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>3.3 Las gónadas y la pubertad</h3><p>Hacia los 10 a 14 años, el hipotálamo y la hipófisis «despiertan» a las <b>gónadas</b>, que empiezan a producir <b>hormonas sexuales</b>: es la <mark>pubertad</mark>. Los <b>ovarios</b> fabrican <b>estrógenos</b> y <b>progesterona</b>, que desarrollan los pechos, ensanchan las caderas y regulan el ciclo menstrual. Los <b>testículos</b> producen <b>testosterona</b>, que agrava la voz, hace crecer el vello facial y la masa muscular. En ambos sexos aparece vello en las axilas y el pubis, se produce un estirón y la piel se vuelve más grasa, con acné. Cada persona tiene su propio ritmo, y es normal.</p><p>En las chicas, el primer signo suele ser el desarrollo de los pechos y, uno o dos años después, llega la primera regla, la <b>menarquia</b>. En los chicos aumenta primero el tamaño de los testículos y después llegan la voz más grave, el vello facial y la primera eyaculación. En ambos sexos, la pubertad termina cuando el cuerpo alcanza la madurez sexual y la estatura adulta.</p>`,
      svg: L.compara("Cambios de la pubertad en chicas y chicos", ["Chicas", "var(--red)", ["estrógenos", "desarrollo de pechos", "caderas anchas", "menarquia"]], ["Chicos", "var(--pen)", ["testosterona", "voz más grave", "vello facial", "más masa muscular"]]),
      video: { id: "QXUudxm0glw", titulo: "¿Qué es la pubertad?", canal: "A Cierta Ciencia", vistas: 763443 },
    },
    {
      html: `<h3>3.4 La adolescencia: cuerpo y emociones</h3><p>La <mark>adolescencia</mark> es más amplia que la pubertad: además de los cambios físicos, incluye cambios emocionales, sociales e intelectuales que se extienden hasta los 18 o 20 años. Las hormonas influyen en el estado de ánimo y, a la vez, el encéfalo está reorganizándose: las zonas relacionadas con las emociones y la búsqueda de recompensas maduran antes que la corteza del lóbulo frontal, que controla los impulsos y planifica. Por eso en estos años son frecuentes los cambios de humor, la búsqueda de experiencias nuevas y la importancia del grupo de amigos.</p><p>Es una etapa de grandes oportunidades: el cerebro aprende con enorme facilidad. Para vivirla con salud conviene <b>dormir</b> lo suficiente (el reloj interno se retrasa y da sueño más tarde), comer de forma equilibrada para acompañar el estirón, hacer ejercicio, cuidar la <b>higiene</b> por el aumento del sudor y la grasa de la piel, y hablar de las dudas con personas de confianza. Compararse con cuerpos que aparecen en redes sociales, a menudo retocados, puede dañar la autoestima: cada cuerpo tiene su ritmo.</p>`,
      svg: L.radial("Claves para una adolescencia saludable", "Adolescencia", ["Dormir bien", "Comer equilibrado", "Ejercicio", "Higiene", "Hablar de dudas", "Cada uno su ritmo"], "var(--leaf)"),
    },
    {
      html: `<h3>4.1 Enfermedades endocrinas</h3><p>La más frecuente es la <mark>diabetes</mark>. En la de <b>tipo 1</b>, que suele empezar en la infancia, el sistema inmunitario destruye las células del páncreas que fabrican insulina; se trata con inyecciones de insulina de por vida. En la de <b>tipo 2</b>, más común en adultos, las células dejan de responder bien a la insulina; está muy relacionada con la obesidad y el sedentarismo, y se previene con dieta y ejercicio. Otras alteraciones son el <b>hipotiroidismo</b>, que produce cansancio, y el <b>bocio</b>, un aumento del tiroides por falta de yodo. Tomar hormonas para mejorar el rendimiento deportivo es dopaje y daña la salud.</p><p>El <b>hipertiroidismo</b> es lo contrario del hipotiroidismo: el tiroides trabaja de más, el metabolismo se acelera y aparecen nerviosismo, pérdida de peso, sudor y taquicardia. En España se hace a todos los recién nacidos la <b>prueba del talón</b>, un análisis de unas gotas de sangre que detecta, entre otras, la falta de hormona tiroidea, para tratarla a tiempo.</p>`,
      svg: L.tabla("Enfermedades endocrinas: glándula y síntomas", ["Enfermedad", "Glándula", "Síntoma"], [["Diabetes", "páncreas", "glucosa alta"], ["Hipotiroidismo", "tiroides", "cansancio, frío"], ["Hipertiroidismo", "tiroides", "nervios, delgadez"], ["Bocio", "tiroides", "cuello abultado"], ["Acromegalia", "hipófisis", "manos grandes"]]),
    },
    {
      html: `<h3>4.2 Vivir con diabetes y prevenirla</h3><p>En España, alrededor de una de cada siete personas adultas tiene diabetes, y muchas no lo saben. Los síntomas de alarma son la <b>sed intensa</b>, <b>orinar mucho</b>, el cansancio y la pérdida de peso sin motivo. Un simple análisis de glucosa en sangre lo confirma.</p><p>Una persona con <mark>diabetes tipo 1</mark> puede llevar una vida completamente normal, practicar deporte de alto nivel y estudiar cualquier carrera. Para ello mide su glucosa varias veces al día con un <b>glucómetro</b> o un sensor en el brazo, se inyecta insulina o la recibe con una pequeña bomba, y ajusta las dosis a lo que come y al ejercicio que hace. En el instituto conviene que los compañeros sepan reconocer una hipoglucemia y ofrecer azúcar.</p><p>La <mark>diabetes tipo 2</mark> se puede prevenir en la mayoría de los casos: mantener un peso saludable, hacer al menos una hora diaria de actividad física en la adolescencia, reducir los azúcares libres y los ultraprocesados y aumentar la fibra. Si no se controla, con los años daña los vasos sanguíneos de los ojos, los riñones, los nervios de los pies y el corazón.</p>`,
      svg: L.flujo("Prevención de la diabetes tipo 2", ["Peso saludable", "Actividad física diaria", "Menos azúcares y ultraprocesados", "Más fibra, fruta y verdura"], "Hábitos que la previenen"),
    },
  ],
  figura: {
    titulo: "Glándulas y hormonas",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Tabla visual de glándulas, sus hormonas y su efecto principal">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${silueta(26, 30, 1.15)}
      ${[["Hipófisis", "crecimiento · controla otras glándulas", "var(--pen)"], ["Tiroides", "tiroxina: metabolismo", "var(--red)"], ["Suprarrenales", "adrenalina: lucha o huida", "var(--sun)"], ["Páncreas", "insulina ↓ y glucagón ↑ glucosa", "var(--leaf)"], ["Gónadas", "estrógenos · progesterona · testosterona", "#a05ad0"]].map(([n, d, c], i) => { const y = 26 + i * 52; return `<rect x="190" y="${y}" width="430" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(206, y + 28, n, { size: 16, anchor: "start", color: c, font: D })}${t(340, y + 28, d, { size: 13, anchor: "start", weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "2vHIMtKFuGk", titulo: "SISTEMA ENDOCRINO EXPLICADO FÁCIL: GLÁNDULAS Y HORMONAS", canal: "BIOTUBE Ciencia Animada", vistas: 1908416, megusta: 0, busqueda: "sistema endocrino hormonas" },
  ejemplos: [
    { enunciado: "Indica si cada situación la controla sobre todo el sistema nervioso o el endocrino: a) parpadear ante un golpe; b) crecer 10 cm en un año; c) bajar la glucosa tras comer.",
      pasos: ["a) Respuesta instantánea y breve: sistema nervioso (reflejo).", "b) Proceso lento y prolongado: hormona del crecimiento, sistema endocrino.", "c) Regulación química por la sangre: insulina, sistema endocrino."],
      resultado: "a) nervioso; b) endocrino; c) endocrino." },
    { enunciado: "Una persona con diabetes tipo 1 se olvida de inyectarse la insulina antes de comer. ¿Qué le pasará a su glucemia y por qué?",
      pasos: ["Al comer, entra mucha glucosa en la sangre.", "Su páncreas no fabrica insulina, y no se la ha inyectado.", "Las células no pueden captar la glucosa y el hígado no la guarda."],
      resultado: "la glucemia subirá mucho (hiperglucemia)." },
    { enunciado: "En una zona de interior con poca sal yodada, muchas personas tenían el cuello abultado. Explica la causa.",
      pasos: ["El tiroides necesita yodo para fabricar tiroxina.", "Sin yodo, hay poca tiroxina en la sangre y la retroalimentación no frena a la hipófisis.", "La hipófisis estimula cada vez más al tiroides, que crece intentando producir más."],
      resultado: "es bocio por falta de yodo; se previene con sal yodada y pescado." },
    { enunciado: "Pasas una noche entera jugando con el móvil en la cama. Explica, con dos hormonas, por qué al día siguiente estás cansado y por qué no es bueno para tu crecimiento.",
      pasos: ["La luz de la pantalla frena la producción de melatonina en la glándula pineal, así que tardas en dormirte.", "Duermes menos horas y menos sueño profundo.", "La hormona del crecimiento se libera sobre todo durante el sueño profundo, así que se fabrica menos."],
      resultado: "menos melatonina retrasa el sueño y dormir poco reduce la hormona del crecimiento." },
    { enunciado: "Un compañero con diabetes tipo 1 está pálido, sudoroso y confuso tras la clase de educación física. ¿Qué le ocurre y qué debes hacer?",
      pasos: ["El ejercicio hace que los músculos consuman mucha glucosa.", "Si no ha ajustado la insulina o la comida, la glucosa baja demasiado: hipoglucemia.", "El cerebro se queda sin energía: confusión, sudor y palidez.", "Hay que darle algo azucarado (zumo, azúcar) y avisar a un adulto."],
      resultado: "tiene una hipoglucemia; darle azúcar enseguida y avisar al profesor." },
    { enunciado: "La glucemia de una persona es de 0,9 g/L antes de comer, 1,5 g/L una hora después y 1,0 g/L a las tres horas. Explica qué hormonas actúan en cada momento.",
      pasos: ["Antes de comer está en valores normales.", "Tras comer sube a 1,5 g/L y el páncreas libera insulina.", "La insulina hace que las células capten glucosa y el hígado la guarde, así que baja.", "Si siguiera bajando, el páncreas liberaría glucagón."],
      resultado: "la insulina baja la glucosa tras la comida; el glucagón actuaría si bajara demasiado." },
  ],
  errores: [...[
    "Pensar que las hormonas actúan sobre todas las células: solo sobre las que tienen el receptor.",
    "Confundir glándulas endocrinas (a la sangre) con exocrinas (por un conducto).",
    "Creer que la insulina sube el azúcar: lo baja. El que lo sube es el glucagón.",
    "Decir que la diabetes tipo 2 se debe a que el páncreas no tiene insulina: el problema es que las células responden mal.",
    "Olvidar que el sistema nervioso y el endocrino están conectados por el hipotálamo.",
  ], "Confundir pubertad y adolescencia: la pubertad son los cambios físicos; la adolescencia incluye también los emocionales y sociales."],
  ejercicios: [
    { nivel: "básico", ...{ q: "Escribe tres diferencias entre la coordinación nerviosa y la hormonal.", sol: "Nerviosa: impulsos, por nervios, muy rápida y breve. Hormonal: hormonas, por la sangre, lenta y duradera." } },
    { nivel: "básico", ...{ q: "¿Qué es un órgano diana?", sol: "Un órgano cuyas células tienen receptores para una hormona concreta y por eso responden a ella." } },
    { nivel: "básico", ...{ q: "¿Por qué se llama a la hipófisis «glándula maestra»?", sol: "Porque sus hormonas controlan el funcionamiento de otras glándulas, como el tiroides, las suprarrenales y las gónadas." } },
    { nivel: "básico", ...{ q: "Describe tres efectos de la adrenalina.", sol: "Acelera el corazón y la respiración, dilata las pupilas y sube la glucosa en la sangre." } },
    { nivel: "básico", ...{ q: "¿Qué hormonas producen los ovarios y los testículos? Cita un efecto de cada una.", sol: "Ovarios: estrógenos (desarrollo de los pechos) y progesterona (ciclo menstrual). Testículos: testosterona (voz grave, vello facial)." } },
    { nivel: "básico", ...{ q: "¿Por qué se añade yodo a la sal?", sol: "Porque el tiroides lo necesita para fabricar tiroxina; su falta causa bocio e hipotiroidismo." } },
    { nivel: "básico", q: "Localiza en el cuerpo estas glándulas: hipófisis, tiroides, suprarrenales, páncreas, ovarios y testículos.", sol: "Hipófisis: bajo el encéfalo. Tiroides: en el cuello, delante de la tráquea. Suprarrenales: encima de los riñones. Páncreas: en el abdomen, detrás del estómago. Ovarios: en la pelvis. Testículos: en el escroto." },
    { nivel: "básico", q: "¿Qué hormona fabrica la glándula pineal y qué hace?", sol: "La melatonina; se produce cuando oscurece, da sueño y regula el reloj interno de 24 horas." },
    { nivel: "básico", q: "¿Cuándo se libera sobre todo la hormona del crecimiento?", sol: "Durante el sueño profundo." },
    { nivel: "básico", q: "Escribe tres síntomas que pueden indicar diabetes.", sol: "Sed intensa, orinar mucho y cansancio o pérdida de peso sin motivo." },
    { nivel: "básico", q: "¿Qué es la menarquia?", sol: "La primera menstruación, uno o dos años después del inicio del desarrollo de los pechos." },
    { nivel: "básico", q: "¿Qué células del páncreas fabrican la insulina y dónde están?", sol: "Las células beta de los islotes de Langerhans." },
    { nivel: "medio", ...{ q: "Explica por qué el páncreas es una glándula mixta.", sol: "Porque es exocrino (vierte jugo pancreático al intestino por un conducto) y endocrino (vierte insulina y glucagón a la sangre)." } },
    { nivel: "medio", ...{ q: "Completa: tras una comida, la glucemia ___ y el páncreas libera ___, que hace que la glucosa ___.", sol: "Sube; insulina; entre en las células y se guarde en el hígado, de modo que la glucemia baja." } },
    { nivel: "medio", ...{ q: "Explica la retroalimentación negativa con el ejemplo del termostato.", sol: "Cuando el nivel deseado se alcanza, el propio resultado apaga el sistema. Igual que el termostato apaga la calefacción, mucha tiroxina frena a la hipófisis." } },
    { nivel: "medio", ...{ q: "Diferencia la diabetes tipo 1 de la tipo 2.", sol: "Tipo 1: el páncreas deja de fabricar insulina; empieza joven; se trata con insulina. Tipo 2: las células responden mal a la insulina; se asocia a obesidad y sedentarismo; se previene con hábitos sanos." } },
    { nivel: "medio", q: "Explica los pasos por los que actúa una hormona, desde el estímulo hasta la respuesta.", sol: "Un estímulo llega a la glándula; esta vierte la hormona a la sangre; la hormona viaja por la circulación; se une a los receptores de las células del órgano diana; esas células cambian su actividad." },
    { nivel: "medio", q: "Diferencia gigantismo y acromegalia.", sol: "Los dos se deben a un exceso de hormona del crecimiento. En el gigantismo ocurre en la infancia y la persona crece mucho en altura. En la acromegalia ocurre en la edad adulta, cuando los huesos ya no se alargan, y crecen manos, pies y mandíbula." },
    { nivel: "medio", q: "¿Por qué las pantallas por la noche dificultan el sueño?", sol: "Su luz, sobre todo la azulada, frena la producción de melatonina en la glándula pineal; el cerebro cree que aún es de día y tardamos en dormirnos." },
    { nivel: "medio", q: "Compara la adrenalina y el cortisol: cuándo se liberan y qué efectos tienen.", sol: "La adrenalina se libera en segundos ante un peligro (acelera el corazón, dilata pupilas, sube la glucosa). El cortisol actúa en el estrés prolongado; en exceso debilita las defensas, altera el sueño y favorece el aumento de peso." },
    { nivel: "medio", q: "¿Qué es una hipoglucemia y cómo se corrige?", sol: "Una bajada fuerte de glucosa en sangre; produce mareo, sudor frío y confusión porque el cerebro se queda sin energía. Se corrige tomando enseguida algo azucarado." },
    { nivel: "medio", q: "Explica la diferencia entre retroalimentación negativa y positiva con un ejemplo de cada una.", sol: "Negativa: el efecto frena la causa (mucha tiroxina frena a la hipófisis). Positiva: el efecto refuerza la causa (las contracciones del parto liberan más oxitocina, que produce contracciones más fuertes)." },
    { nivel: "medio", q: "¿Por qué los cambios de humor son frecuentes en la adolescencia?", sol: "Porque las hormonas sexuales influyen en el ánimo y porque el encéfalo se está reorganizando: las zonas de las emociones maduran antes que el lóbulo frontal, que controla los impulsos." },
    { nivel: "medio", q: "¿Para qué sirve la prueba del talón?", sol: "Es un análisis de sangre que se hace a todos los recién nacidos para detectar a tiempo enfermedades como el hipotiroidismo congénito y tratarlas antes de que causen daños." },
    { nivel: "avanzado", q: "Explica el experimento de Banting y Best y por qué fue tan importante.", sol: "Extirparon el páncreas a perros, que desarrollaron diabetes; extrajeron de páncreas una sustancia que, inyectada, les bajaba la glucosa. Así descubrieron la insulina. Gracias a ella, la diabetes tipo 1 dejó de ser mortal; Banting recibió el Nobel y cedió la patente para que llegara a todos." },
    { nivel: "avanzado", q: "Una persona tiene una glucemia en ayunas de 1,4 g/L en dos análisis. ¿Qué puede tener y qué hábitos le recomendarías si es diabetes tipo 2?", sol: "Su glucosa está por encima de lo normal (en torno a 1 g/L): puede ser diabetes. Si es de tipo 2: perder peso si tiene sobrepeso, hacer ejercicio a diario, reducir azúcares y ultraprocesados, aumentar la fibra y seguir los controles médicos." },
    { nivel: "avanzado", q: "Explica, con la retroalimentación negativa, por qué tomar hormonas tiroideas sin control puede hacer que el tiroides deje de trabajar.", sol: "Si llega mucha tiroxina desde fuera, el hipotálamo y la hipófisis detectan niveles altos y dejan de estimular al tiroides. El tiroides, sin órdenes, reduce su actividad e incluso disminuye de tamaño." },
    { nivel: "avanzado", q: "¿Por qué el dopaje con hormonas, como la testosterona o la hormona del crecimiento, es peligroso para un adolescente?", sol: "Altera el equilibrio hormonal natural: la retroalimentación frena las propias glándulas, puede cerrar antes los cartílagos de crecimiento (menor estatura final), dañar el corazón, el hígado y la fertilidad, y causar acné y cambios de humor. Además, es ilegal en el deporte." },
    { nivel: "avanzado", q: "Diseña una gráfica de la glucemia durante un día con tres comidas y explica cuándo actúan la insulina y el glucagón.", sol: "Eje horizontal: horas; vertical: glucemia (g/L). Tras cada comida, un pico hacia 1,4-1,5 g/L que baja en dos o tres horas (actúa la insulina). Entre comidas y por la noche, la curva se mantiene cerca de 0,8-1 g/L gracias al glucagón, que libera glucosa del hígado." },
    { nivel: "avanzado", q: "Relaciona el sistema endocrino con el nervioso a través del hipotálamo usando el ejemplo de un susto.", sol: "Los sentidos detectan el peligro y el encéfalo lo procesa; el hipotálamo activa el sistema nervioso simpático, que estimula las glándulas suprarrenales; estas liberan adrenalina a la sangre, que acelera el corazón y sube la glucosa. Si el estrés continúa, el hipotálamo y la hipófisis aumentan el cortisol." },
    { nivel: "avanzado", q: "La insulina hoy la fabrican bacterias modificadas. ¿Qué ventajas tiene frente a la que se extraía del páncreas de animales?", sol: "Es idéntica a la humana, por lo que produce menos reacciones; se puede fabricar en grandes cantidades, con pureza controlada y a menor coste, sin depender de animales de matadero." },
  ],
  quiz: [
    { q: "Las hormonas viajan por…", o: ["los nervios", "la sangre", "la linfa solo", "los músculos"], a: 1, e: "Llegan a todo el cuerpo." },
    { q: "Un órgano diana es el que…", o: ["fabrica la hormona", "destruye la hormona", "tiene receptores para la hormona", "no responde"], a: 2, e: "Como llave y cerradura." },
    { q: "La glándula maestra es la…", o: ["hipófisis", "tiroides", "pineal", "suprarrenal"], a: 0, e: "Controla otras glándulas." },
    { q: "El puente entre el sistema nervioso y el endocrino es el…", o: ["cerebelo", "páncreas", "timo", "hipotálamo"], a: 3, e: "Una zona del encéfalo." },
    { q: "La tiroxina necesita…", o: ["hierro", "yodo", "calcio", "flúor"], a: 1, e: "Su falta causa bocio." },
    { q: "La hormona de la «lucha o huida» es la…", o: ["insulina", "melatonina", "adrenalina", "tiroxina"], a: 2, e: "De las suprarrenales." },
    { q: "La insulina…", o: ["baja la glucosa en sangre", "sube la glucosa", "da sueño", "produce leche"], a: 0, e: "Las células captan glucosa." },
    { q: "El glucagón…", o: ["baja la glucosa", "la guarda en el hígado", "regula el calcio", "sube la glucosa"], a: 3, e: "Rompe el glucógeno." },
    { q: "La melatonina la fabrica la glándula…", o: ["tiroides", "pineal", "hipófisis", "suprarrenal"], a: 1, e: "Cuando oscurece." },
    { q: "La hormona del crecimiento se libera sobre todo…", o: ["al comer", "con el estrés", "durante el sueño profundo", "al correr"], a: 2, e: "Dormir bien ayuda a crecer." },
    { q: "Un exceso de hormona del crecimiento en adultos causa…", o: ["acromegalia", "enanismo", "bocio", "diabetes"], a: 0, e: "Crecen manos, pies y mandíbula." },
    { q: "Los testículos producen…", o: ["estrógenos", "progesterona", "insulina", "testosterona"], a: 3, e: "Voz grave, vello facial." },
    { q: "La primera menstruación se llama…", o: ["ovulación", "menarquia", "pubertad", "menopausia"], a: 1, e: "Llega tras el desarrollo de los pechos." },
    { q: "Las paratiroides regulan…", o: ["la glucosa", "el sueño", "el calcio", "el crecimiento"], a: 2, e: "En sangre y huesos." },
    { q: "La retroalimentación negativa…", o: ["frena la glándula cuando hay suficiente hormona", "acelera siempre", "destruye la glándula", "no existe"], a: 0, e: "Como un termostato." },
    { q: "En la diabetes tipo 1…", o: ["las células responden mal a la insulina", "hay exceso de insulina", "falta yodo", "el páncreas no fabrica insulina"], a: 3, e: "Se trata con insulina." },
    { q: "La hipoglucemia es…", o: ["glucosa alta", "glucosa baja", "falta de yodo", "exceso de tiroxina"], a: 1, e: "Se corrige con azúcar." },
    { q: "La leptina, que reduce el apetito, la produce…", o: ["el estómago", "el tiroides", "el tejido adiposo", "el riñón"], a: 2, e: "Avisa al hipotálamo." },
    { q: "La glándula que es a la vez exocrina y endocrina es el…", o: ["páncreas", "tiroides", "hipófisis", "timo"], a: 0, e: "Jugo pancreático e insulina." },
    { q: "La prueba del talón se hace a…", o: ["los adolescentes", "las embarazadas", "los deportistas", "los recién nacidos"], a: 3, e: "Detecta el hipotiroidismo congénito." },
  ],
  examen: [
    { q: "Las glándulas endocrinas vierten sus productos…", o: ["por un conducto", "directamente a la sangre", "al intestino", "al exterior"], a: 1, e: "Las exocrinas usan conductos." },
    { q: "El bocio se debe a…", o: ["exceso de azúcar", "exceso de yodo", "falta de yodo", "falta de calcio"], a: 2, e: "El tiroides crece." },
    { q: "Comparada con la nerviosa, la coordinación hormonal es…", o: ["más lenta y duradera", "más rápida", "eléctrica", "instantánea"], a: 0, e: "Las hormonas viajan por la sangre." },
    { q: "Los estrógenos y la progesterona los fabrican…", o: ["los testículos", "las suprarrenales", "el tiroides", "los ovarios"], a: 3, e: "Regulan el ciclo menstrual." },
    { q: "La diabetes tipo 2 se previene sobre todo con…", o: ["insulina", "dieta y ejercicio", "yodo", "melatonina"], a: 1, e: "Se asocia a obesidad y sedentarismo." },
    { q: "El hipertiroidismo provoca…", o: ["cansancio y frío", "glucosa alta", "nerviosismo y pérdida de peso", "estatura baja"], a: 2, e: "El metabolismo se acelera." },
    { q: "Las hormonas del páncreas las fabrican los…", o: ["islotes de Langerhans", "alvéolos", "glomérulos", "folículos"], a: 0, e: "Células alfa y beta." },
    { q: "La oxitocina…", o: ["baja la glucosa", "regula el calcio", "da sueño", "contrae el útero en el parto"], a: 3, e: "Ejemplo de retroalimentación positiva." },
  ],
  feynman: [...["Qué son las hormonas y por qué solo actúan en algunos órganos", "Cómo regulan la insulina y el glucagón el azúcar de la sangre", "Qué es la retroalimentación negativa"], "Por qué dormir bien ayuda a crecer", "Qué diferencia hay entre pubertad y adolescencia"],
  mapa: mapa("SISTEMA ENDOCRINO", "var(--eso)", [
    ["Hormonas", "mensajeros por la sangre · órgano diana", "var(--pen)"],
    ["Hipotálamo e hipófisis", "glándula maestra · crecimiento", "var(--inf)"],
    ["Páncreas", "insulina · glucagón · glucemia", "var(--leaf)"],
    ["Otras glándulas", "tiroides · suprarrenales · gónadas", "var(--red)"],
  ], 290),
  tarjetas: [
    ...[
    ["Hormona", "Mensajero químico que viaja por la sangre hasta sus órganos diana."],
    ["Glándula endocrina", "Vierte sus hormonas directamente a la sangre."],
    ["Hipófisis", "Glándula maestra: controla otras glándulas y produce la hormona del crecimiento."],
    ["Tiroxina", "Hormona del tiroides que regula el metabolismo; necesita yodo."],
    ["Adrenalina", "Hormona suprarrenal de la «lucha o huida»."],
    ["Insulina y glucagón", "La insulina baja la glucosa; el glucagón la sube."],
    ["Retroalimentación negativa", "El producto de una glándula la frena cuando hay suficiente."],
    ["Diabetes", "Glucemia alta por falta de insulina (tipo 1) o mala respuesta a ella (tipo 2)."],
  ],
    ["Melatonina", "Hormona de la glándula pineal que da sueño cuando oscurece."],
    ["Hormona del crecimiento", "La fabrica la hipófisis durante el sueño profundo."],
    ["Hipoglucemia", "Bajada de glucosa: mareo y confusión; se corrige con azúcar."],
    ["Pubertad", "Cambios físicos por las hormonas sexuales, hacia los 10-14 años."],
  ],
  glosario: [
    ["Hormona", "Mensajero químico que viaja por la sangre."],
    ["Glándula endocrina", "Glándula que vierte sus hormonas a la sangre."],
    ["Glándula exocrina", "Glándula que vierte su producto por un conducto."],
    ["Órgano diana", "Órgano con receptores para una hormona."],
    ["Hipotálamo", "Zona del encéfalo que controla la hipófisis."],
    ["Hipófisis", "Glándula maestra bajo el encéfalo."],
    ["Tiroxina", "Hormona tiroidea que regula el metabolismo."],
    ["Adrenalina", "Hormona de la respuesta de alarma."],
    ["Cortisol", "Hormona suprarrenal del estrés prolongado."],
    ["Insulina", "Hormona que baja la glucosa en sangre."],
    ["Glucagón", "Hormona que sube la glucosa en sangre."],
    ["Glucemia", "Concentración de glucosa en la sangre."],
    ["Melatonina", "Hormona del sueño de la glándula pineal."],
    ["Retroalimentación negativa", "Regulación en la que el efecto frena la causa."],
    ["Pubertad", "Etapa de maduración sexual del cuerpo."],
    ["Diabetes", "Enfermedad con glucosa alta en sangre."],
    ["Bocio", "Aumento del tiroides por falta de yodo."],
  ],
  situacion: {
    titulo: "Dormir para crecer y aprender",
    reto: "Muchos alumnos llegan cansados a primera hora. Vuestro grupo investigará los hábitos de sueño de la clase y su relación con las hormonas, y elaborará una guía para dormir mejor.",
    pasos: [
      "Haced un registro anónimo de una semana con la hora de acostarse, de levantarse y el uso de pantallas antes de dormir.",
      "Calculad las horas medias de sueño y comparadlas con las recomendadas (8 a 10 horas).",
      "Investigad el papel de la melatonina, la hormona del crecimiento y el cortisol en el sueño y el descanso.",
      "Relacionad los datos con la sensación de cansancio y la concentración que cada uno valore del 1 al 5.",
      "Elaborad una guía con consejos basados en lo aprendido para alumnos y familias.",
    ],
    producto: "Informe con gráficas de los hábitos de sueño y una guía ilustrada de higiene del sueño basada en las hormonas.",
    evaluacion: [
      "Recogida y tratamiento correcto de los datos.",
      "Explicación científica del papel de las hormonas.",
      "Calidad y utilidad de los consejos de la guía.",
      "Respeto a la privacidad y trabajo en equipo.",
    ],
  },
  familias: ["Comprobad si la sal de casa es yodada y hablad de por qué se recomienda.", "Comentad juntos los cambios de la pubertad con naturalidad: cada persona tiene su ritmo.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Cuerpo humano» y «Hábitos saludables» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): coordinación hormonal, glándulas endocrinas y sus hormonas, regulación de la glucemia, pubertad y adolescencia, y prevención de enfermedades endocrinas. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Gráfica de glucemia tras una comida con datos reales de un glucómetro (anonimizados).",
      "Comparativa nervioso frente a endocrino con un juego de roles: cartero frente a teléfono.",
      "Registro de hábitos de sueño de la clase y su relación con la melatonina.",
      "Charla de una asociación de personas con diabetes.",
    ],
  },
  fuentes: [...[RD, wiki("Sistema endocrino", "Sistema_endocrino"), wiki("Insulina", "Insulina")], wiki("Insulina", "Insulina")],
  revisado: "2026-11-13",
};
