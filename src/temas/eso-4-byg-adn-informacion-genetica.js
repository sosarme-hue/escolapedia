// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");

const BASE = { A: "var(--leaf)", T: "var(--red)", G: "var(--sun)", C: "var(--pen)", U: "var(--inf)" };
const comp = { A: "T", T: "A", G: "C", C: "G" };

// Doble hélice en escalera: secuencia de una hebra.
function escalera(x, y, seq, dx = 26) {
  return seq.split("").map((b, i) => `<rect x="${x + i * dx}" y="${y}" width="${dx - 4}" height="22" rx="4" fill="${BASE[b]}"/><text x="${x + i * dx + (dx - 4) / 2}" y="${y + 16}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>${b}</text>
    <rect x="${x + i * dx}" y="${y + 26}" width="${dx - 4}" height="22" rx="4" fill="${BASE[comp[b]]}"/><text x="${x + i * dx + (dx - 4) / 2}" y="${y + 42}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>${comp[b]}</text>`).join("") +
    `<path d="M${x - 4} ${y - 4} H ${x + seq.length * dx} M${x - 4} ${y + 52} H ${x + seq.length * dx}" stroke="var(--ink)" stroke-width="3"/>`;
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "El ADN y la información genética",
  minutos: 115,
  objetivos: [
    "Describir los nucleótidos y la estructura en doble hélice del ADN",
    "Aplicar la complementariedad de bases para deducir secuencias",
    "Comparar ADN y ARN y conocer los tipos de ARN",
    "Explicar la replicación del ADN",
    "Explicar la síntesis de proteínas (transcripción y traducción) y usar el código genético",
    "Clasificar las mutaciones y relacionarlas con sus causas y consecuencias",
  ],
  claves: ["nucleótido", "doble hélice", "gen", "replicación", "ARN mensajero", "código genético"],
  pregunta: {
    texto: "Si estiraras todo el ADN de una sola de tus células medirías unos 2 metros. ¿Cómo cabe en un núcleo de una centésima de milímetro y qué pone en él?",
    respuesta: "Cabe porque está <mark>superenrollado</mark> alrededor de proteínas, como un hilo en muchos carretes. Y lo que «pone» es un texto escrito con solo <b>cuatro letras (A, T, G, C)</b>: las instrucciones para fabricar todas tus proteínas. Cada fragmento con una instrucción es un <b>gen</b>.",
  },
  lectura: {
    titulo: "La fotografía 51",
    html: `<p>En mayo de 1952, en un laboratorio del King's College de Londres, la química <b>Rosalind Franklin</b> y su estudiante Raymond Gosling obtuvieron una imagen borrosa con forma de «X»: era el patrón que dejaban los rayos X al atravesar fibras de ADN. La llamaron «fotografía 51». Para un ojo experto, aquella cruz gritaba una palabra: <i>hélice</i>.</p>
<p>Meses después, sin que Franklin lo supiera, su compañero Maurice Wilkins enseñó la imagen a James Watson. Con ella y con otros datos, Watson y Francis Crick construyeron con alambres y cartón el famoso modelo de la doble hélice, publicado en 1953. En 1962 Watson, Crick y Wilkins recibieron el Premio Nobel; Franklin había muerto cuatro años antes y el Nobel no se concede a título póstumo. Hoy su papel se reconoce como imprescindible.</p>
<p>Aquel modelo explicaba de golpe dos misterios: cómo se guarda la información de la vida y cómo se copia. Setenta años después leemos genomas completos en horas, editamos genes y fabricamos vacunas de ARN. Todo empieza por entender una escalera retorcida de cuatro letras.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Los ácidos nucleicos y los nucleótidos</h3><p>Los <b>ácidos nucleicos</b> son las biomoléculas que guardan, transmiten y expresan la información genética. Son polímeros: cadenas larguísimas formadas por la repetición de unidades más sencillas llamadas <mark>nucleótidos</mark>, igual que un collar está formado por cuentas.</p><p>Cada nucleótido tiene tres partes: 1) un <b>azúcar</b> de cinco carbonos (desoxirribosa en el ADN, ribosa en el ARN); 2) un <b>grupo fosfato</b>, con fósforo, que une un nucleótido con el siguiente; y 3) una <b>base nitrogenada</b>, que es la parte que varía y lleva la información. Las bases son cinco: <b>adenina (A)</b>, <b>guanina (G)</b>, <b>citosina (C)</b>, <b>timina (T)</b>, solo en el ADN, y <b>uracilo (U)</b>, solo en el ARN.</p><p>Los nucleótidos se unen entre sí por enlaces entre el azúcar de uno y el fosfato del siguiente, formando un «esqueleto» de azúcar-fosfato del que sobresalen las bases. El orden de las bases a lo largo de la cadena, la <mark>secuencia</mark>, es la información, como el orden de las letras en un texto. Con solo cuatro letras se pueden escribir mensajes muy distintos: un fragmento de solo 10 bases puede tener 4¹⁰, más de un millón, de secuencias posibles.</p>`,
      svg: L6.flujo("Un nucleótido está formado por un fosfato, un azúcar y una base nitrogenada", ["Grupo fosfato (une los nucleótidos)", "Azúcar: desoxirribosa (ADN) o ribosa (ARN)", "Base: A, G, C y T (ADN) o U (ARN)"], "Las tres piezas de un nucleótido"),
      video: { id: "DSUguxKON3U", titulo: "Ácidos nucleicos ADN y ARN", canal: "Es Ciencia", vistas: 1071793 },
    },
    {
      html: `<h3>1.2 La estructura del ADN: la doble hélice</h3><p>El <b>ADN</b> (ácido desoxirribonucleico) está formado por <mark>dos cadenas de nucleótidos enrolladas una sobre otra</mark> formando una <b>doble hélice</b>, como una escalera de caracol. Los pasamanos de la escalera son los esqueletos de azúcar-fosfato, y los peldaños son las bases de una cadena unidas a las bases de la otra mediante <b>puentes de hidrógeno</b>, unos enlaces débiles que se pueden abrir y cerrar con facilidad.</p><p>El modelo lo propusieron <b>James Watson y Francis Crick</b> en 1953, gracias a las imágenes de difracción de rayos X de <b>Rosalind Franklin</b> y Maurice Wilkins y a los datos de Erwin Chargaff. Las dos cadenas son <b>antiparalelas</b>: van en sentidos opuestos, como dos carriles de una autovía. Por convenio, cada cadena tiene un extremo llamado 5' y otro 3', y se escriben de 5' a 3'.</p><p>La molécula es muy larga y muy fina: unos 2 nanómetros de diámetro. Si se estirara todo el ADN de una sola célula humana mediría unos <mark>2 metros</mark>; el de todas las células de tu cuerpo daría varias veces la ida y vuelta al Sol. Este diseño tiene dos grandes ventajas: guarda la información protegida dentro de la hélice y permite copiarla con exactitud, porque cada cadena determina cómo debe ser la otra.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Doble hélice del ADN con peldaños de bases">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${Array.from({ length: 13 }, (_, i) => { const x = 20 + i * 18; const y1 = 90 - 50 * Math.sin(i * 0.6), y2 = 90 + 50 * Math.sin(i * 0.6); const b = "AGCTTAGCAGTCA"[i]; return `<path d="M${x} ${y1.toFixed(1)} V ${((y1 + y2) / 2).toFixed(1)}" stroke="${BASE[b]}" stroke-width="5"/><path d="M${x} ${((y1 + y2) / 2).toFixed(1)} V ${y2.toFixed(1)}" stroke="${BASE[comp[b]]}" stroke-width="5"/>`; }).join("")}
        <path d="M20 90 ${Array.from({ length: 121 }, (_, i) => `L ${20 + i * 1.8} ${(90 - 50 * Math.sin(i * 0.06)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--ink)" stroke-width="3.5"/>
        <path d="M20 90 ${Array.from({ length: 121 }, (_, i) => `L ${20 + i * 1.8} ${(90 + 50 * Math.sin(i * 0.06)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--muted)" stroke-width="3.5"/>
      </svg>`,
    },
    {
      html: `<h3>1.3 La complementariedad de bases</h3><p>Las bases de las dos cadenas no se emparejan de cualquier forma: la <mark>adenina siempre con la timina (A–T)</mark> y la <mark>guanina siempre con la citosina (G–C)</mark>. La razón es de forma y tamaño: A y G son bases grandes (púricas) y T y C pequeñas (pirimidínicas), así que cada peldaño tiene siempre una grande y una pequeña y la escalera mantiene el mismo ancho. Además, A y T se unen por dos puentes de hidrógeno, y G y C por tres, por lo que las zonas ricas en G–C son más resistentes al calor.</p><p>A esta regla se la llama <b>complementariedad de bases</b>. Tiene una consecuencia muy útil: <b>si conoces una cadena, puedes deducir la otra</b>. Si una hebra dice 5'-ATGCCA-3', la complementaria es 3'-TACGGT-5'.</p><p>También explica la <b>regla de Chargaff</b>, que este bioquímico descubrió antes de conocerse la doble hélice: en cualquier ADN de doble cadena, la cantidad de A es igual a la de T, y la de G igual a la de C. Así, si un ADN tiene un 20 % de A, tendrá un 20 % de T, y el 60 % restante se reparte a partes iguales: 30 % de G y 30 % de C. Lo que cambia de una especie a otra es la proporción entre los pares A–T y G–C, y sobre todo el orden de las bases.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fragmento de ADN: cada A frente a una T y cada G frente a una C">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${escalera(36, 46, "ATGCCAGT")}
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="130" y="134" fill="var(--leaf)">A — T</text><text x="130" y="154" fill="var(--sun)">G — C</text></g>
      </svg>`,
    },
    {
      html: `<h3>1.4 ADN y ARN: parecidos y diferencias</h3><p>El <b>ARN</b> (ácido ribonucleico) es el otro ácido nucleico. Se parece al ADN, pero tiene tres diferencias importantes: su azúcar es la <b>ribosa</b>; en lugar de timina tiene <mark>uracilo (U)</mark>, que se empareja con la A; y normalmente es <b>una sola cadena</b>, más corta y menos estable. El ADN está sobre todo en el núcleo y es el archivo permanente; el ARN se fabrica en el núcleo, sale al citoplasma y es una copia de trabajo de usar y tirar.</p><p>Hay tres tipos principales de ARN, cada uno con una función en la fabricación de proteínas:</p><p>• El <b>ARN mensajero (ARNm)</b> es una copia de un gen que lleva la información desde el núcleo hasta los ribosomas.<br>• El <b>ARN de transferencia (ARNt)</b> es una molécula pequeña con forma de trébol que transporta cada aminoácido hasta el ribosoma y reconoce su lugar en el ARNm.<br>• El <b>ARN ribosómico (ARNr)</b> forma, junto con proteínas, los ribosomas.</p><p>Hay virus cuyo material genético es ARN, como el de la gripe o el SARS-CoV-2. Las <b>vacunas de ARNm</b> aprovechan este sistema: introducen en nuestras células un ARNm con las instrucciones para fabricar una proteína del virus, que entrena al sistema inmunitario; ese ARNm se degrada en pocos días.</p>`,
      svg: L6.compara("Diferencias entre ADN y ARN", ["ADN", "var(--pen)", ["desoxirribosa", "bases A, T, G, C", "doble cadena", "archivo en el núcleo"]], ["ARN", "var(--red)", ["ribosa", "bases A, U, G, C", "una cadena", "copia de trabajo"]]),
    },
    {
      html: `<h3>2.1 Del ADN al cromosoma: genes y genoma</h3><p>¿Cómo caben 2 metros de ADN en un núcleo de unos 6 micrómetros? Gracias a un empaquetamiento por niveles. El ADN se enrolla alrededor de unas proteínas llamadas <b>histonas</b>, formando unas «cuentas» llamadas <b>nucleosomas</b>; el collar de nucleosomas se pliega en una fibra, la <b>cromatina</b>, que a su vez forma bucles; y cuando la célula se divide, todo se compacta al máximo y forma los <mark>cromosomas</mark>.</p><p>Un <mark>gen</mark> es un fragmento de ADN que contiene la información para fabricar una proteína (o una molécula de ARN funcional). Cada cromosoma contiene cientos o miles de genes, y cada gen ocupa un lugar fijo, su <b>locus</b>. El conjunto de todo el ADN de un organismo es su <b>genoma</b>.</p><p>El <b>Proyecto Genoma Humano</b> (1990-2003) leyó por primera vez nuestra secuencia completa: unos <b>3.000 millones de pares de bases</b> y unos <b>20.000 genes</b>. Sorprendió que tuviéramos tan pocos genes, casi los mismos que un ratón. Y aún más que los genes ocupen solo un 2 % del genoma: el resto incluye secuencias que regulan cuándo se activa cada gen, restos de virus antiguos y zonas cuya función todavía se investiga. Dos personas cualesquiera comparten alrededor del 99,9 % de su secuencia.</p>`,
      svg: L6.capas("Niveles de empaquetamiento: ADN, nucleosomas, cromatina y cromosoma", [["ADN: doble hélice de 2 nm", "var(--pen)"], ["Nucleosomas: ADN enrollado en histonas", "var(--leaf)"], ["Cromatina: fibra plegada en bucles", "var(--sun)"], ["Cromosoma: máxima compactación", "var(--red)"]], "Cómo caben 2 m de ADN en el núcleo"),
    },
    {
      html: `<h3>2.2 La replicación: copiar el ADN</h3><p>Antes de cada división, en la fase S, la célula copia todo su ADN. Este proceso, la <mark>replicación</mark>, sigue unos pasos muy ordenados:</p><p>1) Unas enzimas llamadas <b>helicasas</b> rompen los puentes de hidrógeno y abren la doble hélice como una cremallera, formando una <b>horquilla de replicación</b>.<br>2) Cada hebra antigua sirve de <b>molde</b>. La enzima <b>ADN polimerasa</b> va colocando enfrente nucleótidos libres según la regla A–T y G–C, y los une entre sí.<br>3) Al final hay dos moléculas de ADN idénticas a la original, y cada una tiene <mark>una hebra antigua y una nueva</mark>: la replicación es <b>semiconservativa</b>.</p><p>En los cromosomas eucariotas, que son muy largos, la replicación empieza a la vez en miles de puntos, llamados orígenes de replicación; así, todo el genoma humano se copia en unas pocas horas. La ADN polimerasa además <b>corrige</b> sus propios errores, y otras enzimas revisan la molécula después: solo se escapa aproximadamente un error por cada 10⁹ bases.</p><p>La técnica de la <b>PCR</b>, usada en los test de diagnóstico y en la investigación criminal, imita este proceso en un tubo: con calor se separan las hebras y una polimerasa resistente al calor las copia una y otra vez, hasta obtener millones de copias de un fragmento en un par de horas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La doble hélice se abre en horquilla y cada hebra se copia">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 82 H 100 M14 98 H 100" stroke="var(--ink)" stroke-width="4"/>
        ${[22, 40, 58, 76, 94].map((x) => `<path d="M${x} 84 V 96" stroke="var(--muted)" stroke-width="3"/>`).join("")}
        <path d="M100 82 L 240 30 M100 98 L 240 150" stroke="var(--ink)" stroke-width="4"/>
        <path d="M150 74 L 240 42 M150 106 L 240 138" stroke="var(--red)" stroke-width="4" stroke-dasharray="7 4"/>
        <circle cx="104" cy="90" r="10" fill="var(--sun)"/>
        <g ${F} font-size="11" font-weight="700"><text x="168" y="96" fill="var(--red)">hebras nuevas</text><text x="150" y="20" fill="var(--ink)">hebra molde</text><text x="66" y="128" fill="var(--sun)">enzimas</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.1 Del gen a la proteína</h3><p>Las proteínas hacen casi todo el trabajo en las células: enzimas, hormonas como la insulina, anticuerpos, la hemoglobina que transporta oxígeno, la queratina del pelo, la actina y la miosina del músculo. Cada proteína es una cadena de <b>aminoácidos</b> (hay 20 tipos) colocados en un orden concreto, y ese orden determina cómo se pliega la proteína y qué función tiene.</p><p>La información para ese orden está escrita en los genes. Pero el ADN está en el núcleo y las proteínas se fabrican en los ribosomas del citoplasma. ¿Cómo viaja la información? En dos pasos, que forman el llamado <mark>dogma central de la biología molecular</mark>, propuesto por Crick:</p><p><b>ADN → (transcripción) → ARNm → (traducción) → proteína</b></p><p>1) La <mark>transcripción</mark>, en el núcleo: el gen se copia en una molécula de ARN mensajero.<br>2) La <mark>traducción</mark>, en los ribosomas: el ARNm se lee de tres en tres bases y se construye la proteína.</p><p>Se le llama así porque primero se «transcribe» el mensaje en el mismo idioma (ácido nucleico a ácido nucleico) y después se «traduce» a otro idioma distinto (de bases a aminoácidos). Las características de un ser vivo, como el color de los ojos, dependen de qué proteínas fabrica cada célula.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del núcleo sale el ARN mensajero hacia un ribosoma que une aminoácidos">
        <defs>${flecha("ad1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="62" cy="80" r="48" fill="var(--inf)" opacity=".15" stroke="var(--inf)" stroke-width="2"/>
        <path d="M30 70 q 10 -10 20 0 t 20 0 t 20 0" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <path d="M110 80 H 150" stroke="var(--inf)" stroke-width="3" marker-end="url(#ad1)"/>
        <ellipse cx="196" cy="70" rx="30" ry="18" fill="var(--sun)" opacity=".7"/><ellipse cx="196" cy="96" rx="40" ry="16" fill="var(--sun)"/>
        <path d="M150 96 H 246" stroke="var(--inf)" stroke-width="3"/>
        ${[0, 1, 2, 3].map((i) => `<circle cx="${196 - i * 16}" cy="${44 - i * 4}" r="7" fill="${["var(--red)", "var(--leaf)", "var(--pen)", "var(--red)"][i]}"/>`).join("")}
        <g ${F} font-size="11" font-weight="700"><text x="38" y="104" fill="var(--inf)">núcleo</text><text x="112" y="72" fill="var(--inf)">ARNm</text><text x="176" y="140" fill="var(--sun)">ribosoma</text><text x="142" y="22" fill="var(--red)">proteína</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.2 La transcripción</h3><p>La <mark>transcripción</mark> es la síntesis de una molécula de ARN a partir de un fragmento de ADN. Ocurre en el núcleo de las células eucariotas y sigue estos pasos:</p><p>1) <b>Inicio</b>. La enzima <b>ARN polimerasa</b> reconoce una secuencia al comienzo del gen, llamada promotor, y separa las dos hebras del ADN solo en esa zona.<br>2) <b>Alargamiento</b>. La enzima recorre una de las hebras, la <b>hebra molde</b>, y va colocando nucleótidos de ARN complementarios: frente a A pone <mark>U</mark>, frente a T pone A, frente a G pone C y frente a C pone G.<br>3) <b>Terminación</b>. Al llegar al final del gen, el ARN se suelta y el ADN vuelve a cerrarse intacto.</p><p>Por ejemplo, si la hebra molde es 3'-TACGGATTC-5', el ARNm será 5'-AUGCCUAAG-3'. Fíjate en que el ARNm tiene la misma secuencia que la otra hebra del ADN, la que no se ha usado de molde, pero con U en lugar de T.</p><p>En los eucariotas, el ARNm recién fabricado se «edita» antes de salir: se le quitan trozos que no codifican proteína (intrones) y se empalman los que sí (exones). Después sale por los poros nucleares hacia el citoplasma. Un mismo gen puede transcribirse muchas veces seguidas para fabricar gran cantidad de proteína.</p>`,
      svg: L6.flujo("Transcripción: la ARN polimerasa abre el ADN, copia la hebra molde en ARNm y el ARNm sale del núcleo", ["La ARN polimerasa abre el ADN en el gen", "Copia la hebra molde: A→U, T→A, G→C, C→G", "Se eliminan intrones y se unen exones", "El ARNm sale por los poros nucleares"], "Transcripción (en el núcleo)"),
      video: { id: "uiCrjZ-0eQk", titulo: "Transcripción de ADN y traducción de ARN: síntesis de proteínas", canal: "RaCology", vistas: 2554015 },
    },
    {
      html: `<h3>3.3 La traducción</h3><p>La <mark>traducción</mark> es la síntesis de una proteína siguiendo la información del ARNm. Ocurre en los <b>ribosomas</b>, libres en el citoplasma o pegados al retículo endoplasmático rugoso.</p><p>1) <b>Inicio</b>. El ribosoma se une al ARNm y lo recorre hasta encontrar el <b>codón de inicio AUG</b>.<br>2) <b>Alargamiento</b>. Cada codón (grupo de tres bases) es reconocido por un <b>ARN de transferencia</b> que tiene las tres bases complementarias, el <b>anticodón</b>, y que lleva enganchado el aminoácido correspondiente. El ribosoma une ese aminoácido al anterior mediante un <b>enlace peptídico</b> y avanza tres bases.<br>3) <b>Terminación</b>. Cuando el ribosoma llega a un <b>codón de parada</b> (UAA, UAG o UGA), la cadena de aminoácidos se suelta.</p><p>La cadena recién hecha se pliega en una forma tridimensional concreta, a veces con ayuda de otras proteínas, y en muchos casos pasa por el aparato de Golgi para ser modificada y enviada a su destino.</p><p>El proceso es rapidísimo: un ribosoma añade unos 15-20 aminoácidos por segundo, y varios ribosomas pueden leer a la vez el mismo ARNm, formando un <b>polirribosoma</b>, como varios lectores siguiendo la misma partitura. Algunos antibióticos, como la estreptomicina, bloquean los ribosomas bacterianos y así detienen la fabricación de proteínas de las bacterias.</p>`,
      svg: L6.flujo("Traducción: el ribosoma lee el ARNm desde AUG, los ARNt traen aminoácidos y al llegar a un codón de parada se suelta la proteína", ["El ribosoma se une al ARNm y busca AUG", "Cada ARNt reconoce un codón con su anticodón", "Se unen los aminoácidos (enlace peptídico)", "Codón de parada: la proteína se suelta y se pliega"], "Traducción (en el ribosoma)"),
    },
    {
      html: `<h3>3.4 El código genético</h3><p>El <mark>código genético</mark> es la correspondencia entre los <b>codones</b> del ARNm (tripletes de bases) y los aminoácidos. Como hay 4 bases y cada codón tiene 3, existen 4³ = <b>64 codones</b> posibles para solo 20 aminoácidos. Se descifró entre 1961 y 1966; uno de sus protagonistas fue el español Severo Ochoa, Nobel en 1959 por sintetizar ARN en el laboratorio.</p><p>Tiene cuatro características:</p><p>• Es <b>universal</b>: casi todos los seres vivos, de las bacterias a los humanos, usan los mismos codones para los mismos aminoácidos. Es una prueba de que todos venimos de un antepasado común. Por eso una bacteria puede fabricar insulina humana si se le introduce el gen.<br>• Es <b>redundante</b> (degenerado): varios codones pueden significar el mismo aminoácido. Por ejemplo, la glicina la codifican GGU, GGC, GGA y GGG. Esto amortigua el efecto de algunas mutaciones.<br>• No es ambiguo: cada codón significa un solo aminoácido.<br>• Se lee <b>sin comas y sin solapamientos</b>, de tres en tres a partir del AUG.</p><p>Hay señales especiales: <mark>AUG</mark> codifica el aminoácido metionina y marca el <b>inicio</b>; <mark>UAA, UAG y UGA</mark> son de <b>parada</b> y no codifican ningún aminoácido.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="ARN mensajero dividido en codones de tres bases, cada uno con su aminoácido">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${"AUGUUUGGCUAA".split("").map((b, i) => `<rect x="${16 + i * 19}" y="50" width="17" height="24" rx="3" fill="${BASE[b]}"/><text x="${24.5 + i * 19}" y="67" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>${b}</text>`).join("")}
        ${[["Met", "inicio", "var(--leaf)"], ["Phe", "", "var(--pen)"], ["Gly", "", "var(--sun)"], ["STOP", "parada", "var(--red)"]].map(([a, d, c], i) => `<path d="M${16 + i * 57} 80 H ${70 + i * 57}" stroke="var(--ink)" stroke-width="2"/><text x="${43 + i * 57}" y="102" text-anchor="middle" font-size="13" font-weight="700" fill="${c}" ${F}>${a}</text><text x="${43 + i * 57}" y="120" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>${d}</text>`).join("")}
        <text x="130" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>codón = 3 bases = 1 aminoácido</text>
      </svg>`,
    },
    {
      html: `<h3>3.5 No todos los genes trabajan a la vez</h3><p>Todas las células de tu cuerpo tienen el mismo ADN, salvo los gametos y los glóbulos rojos maduros. Sin embargo, una neurona fabrica neurotransmisores, una célula del páncreas insulina y un glóbulo blanco anticuerpos. ¿Cómo es posible? Porque cada tipo de célula <mark>expresa solo una parte de sus genes</mark>: unos están activos y otros, silenciados. Este control se llama <b>regulación de la expresión génica</b>.</p><p>Hay genes que se expresan en todas las células porque hacen tareas básicas (por ejemplo, los de las enzimas de la respiración celular). Otros solo se activan en un tipo de célula, en un momento del desarrollo o como respuesta a una señal. Por ejemplo, cuando comes, la subida de glucosa activa en el páncreas la producción de insulina; y en el embrión, unos genes llamados <b>homeóticos</b> indican dónde se forman la cabeza, las patas o las alas.</p><p>La regulación se hace de varias formas: proteínas que se pegan al ADN y encienden o apagan genes, cambios químicos en el ADN o en las histonas que lo compactan (lo que estudia la <b>epigenética</b>), o controles sobre el ARNm. La alimentación, el estrés o el tabaco pueden modificar algunas de estas marcas. Por eso dos gemelos idénticos, con el mismo ADN, pueden ir diferenciándose con los años.</p>`,
      svg: L6.radial("La misma información genética se expresa de forma distinta en cada tipo de célula", "Mismo ADN", ["Neurona: neurotransmisores", "Páncreas: insulina", "Glóbulo blanco: anticuerpos", "Músculo: actina y miosina"], "var(--pen)"),
    },
    {
      html: `<h3>4.1 Las mutaciones y sus tipos</h3><p>Una <mark>mutación</mark> es un cambio en la secuencia del ADN. Se clasifican según la cantidad de material genético afectado:</p><p>• <b>Mutaciones génicas</b> o puntuales: afectan a la secuencia de un gen. Puede haber una <b>sustitución</b> (una base cambia por otra), una <b>inserción</b> (se añade una base) o una <b>deleción</b> (se pierde una base). Las sustituciones a veces no cambian nada, porque el código es redundante, y otras cambian un aminoácido: en la anemia falciforme, un solo cambio de A por T cambia un aminoácido de la hemoglobina y deforma los glóbulos rojos. Las inserciones y deleciones suelen ser más graves, porque <b>desplazan el marco de lectura</b> y cambian todos los codones siguientes.<br>• <b>Mutaciones cromosómicas</b>: cambian la estructura de un cromosoma; se pierde, se duplica, se invierte o se traslada un fragmento.<br>• <b>Mutaciones genómicas</b>: cambian el número de cromosomas, como la trisomía 21 o la poliploidía de muchas plantas cultivadas (el trigo tiene seis juegos de cromosomas).</p><p>Importa también dónde ocurren. Si ocurren en una <b>célula somática</b> solo afectan a la persona y no se heredan (por ejemplo, un cáncer de piel). Si ocurren en una <b>célula germinal</b>, que forma gametos, <mark>pueden pasar a los hijos</mark>.</p>`,
      svg: L6.tabla("Tipos de mutaciones génicas con un ejemplo de secuencia", ["Tipo", "Original", "Mutada"], [["Sustitución", "GAG CTT", "GTG CTT"], ["Inserción", "GAG CTT", "GAA GCT T"], ["Deleción", "GAG CTT", "GGC TT"], ["Cromosómica", "ABCDEF", "ABEF"], ["Genómica", "2n = 46", "47"]]),
    },
    {
      html: `<h3>4.2 Causas y consecuencias de las mutaciones</h3><p>Algunas mutaciones son <b>espontáneas</b>: se deben a errores al copiar el ADN que se escapan a los sistemas de reparación. Otras son <b>inducidas</b> por <mark>agentes mutágenos</mark>:</p><p>• <b>Físicos</b>: radiación ultravioleta del sol (daña el ADN de la piel), rayos X y radiaciones radiactivas.<br>• <b>Químicos</b>: sustancias del humo del tabaco, del alcohol o algunos contaminantes industriales.<br>• <b>Biológicos</b>: ciertos virus que insertan su material genético en el de la célula, como el del papiloma humano.</p><p>Las células tienen sistemas de <b>reparación del ADN</b> muy eficaces, pero no perfectos. Cuando se acumulan daños, aumenta el riesgo de cáncer. Por eso conviene usar protector solar, no fumar y limitar las radiografías a las necesarias.</p><p>En cuanto a sus efectos, muchas mutaciones son <b>neutras</b> (no cambian la proteína o la cambian sin consecuencias), otras son <b>perjudiciales</b> (causan enfermedades genéticas como la fibrosis quística) y unas pocas son <b>beneficiosas</b> en un ambiente concreto: por ejemplo, la mutación que permite a muchos adultos europeos digerir la lactosa de la leche. Las mutaciones son la fuente original de toda la <mark>variabilidad genética</mark>, y sobre ella actúa la selección natural: sin mutaciones, no habría evolución.</p>`,
      svg: L6.radial("Agentes mutágenos físicos, químicos y biológicos, y efectos de las mutaciones", "Mutación", ["Físicos: UV, rayos X", "Químicos: tabaco", "Biológicos: virus", "Efecto: neutro, malo o bueno"], "var(--red)"),
    },
  ],
  figura: {
    titulo: "ADN y ARN: parecidos y diferencias",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación de ADN y ARN: hebras, azúcar, bases y función">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["ADN", "doble hebra (doble hélice)", "azúcar: desoxirribosa", "bases A, T, G, C", "guarda la información, en el núcleo", "var(--pen)"], ["ARN", "una sola hebra", "azúcar: ribosa", "bases A, U, G, C", "lleva la información al ribosoma", "var(--inf)"]]
        .map(([n, a, b, c1, f, c], i) => `<rect x="${20 + i * 310}" y="20" width="290" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${165 + i * 310}" y="60" text-anchor="middle" font-size="28" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${165 + i * 310}" y="98" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${a}</text>
          <text x="${165 + i * 310}" y="122" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${b}</text>
          <text x="${165 + i * 310}" y="146" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${c1}</text>
          <text x="${165 + i * 310}" y="186" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "uEwyWgSvLc0", titulo: "Replicación del ADN", canal: "Bioquímica de Pastor", vistas: 2707951, megusta: 0, busqueda: "ADN replicación transcripción traducción" },
  ejemplos: [
    { enunciado: "Escribe la hebra complementaria del fragmento de ADN 5'-ATGCCGTA-3'.", pasos: ["Aplica la complementariedad: A con T y C con G.", "A→T, T→A, G→C, C→G, C→G, G→C, T→A, A→T.", "La hebra complementaria va en sentido opuesto."], resultado: "3'-TACGGCAT-5'." },
    { enunciado: "Transcribe a ARNm la hebra molde de ADN TACAAAGCT y tradúcela (AUG = Met, UUU = Phe, CGA = Arg).", pasos: ["Transcripción: frente a T pon A, frente a A pon U, frente a C pon G y frente a G pon C.", "TAC AAA GCT → AUG UUU CGA.", "Traducción por codones: AUG = metionina, UUU = fenilalanina, CGA = arginina."], resultado: "ARNm AUG-UUU-CGA; péptido Met-Phe-Arg." },
    { enunciado: "Un fragmento de ADN tiene un 30 % de adenina. ¿Qué porcentaje tiene de cada una de las otras bases?", pasos: ["A se empareja con T: T = 30 %.", "A + T = 60 %, así que C + G = 40 %.", "C y G están en la misma proporción: 20 % cada una."], resultado: "A 30 %, T 30 %, C 20 %, G 20 %." },
    { enunciado: "Un ARNm es 5'-AUG GCU UGG AAA UAG-3'. ¿Cuántos aminoácidos tendrá la proteína? (AUG = Met, GCU = Ala, UGG = Trp, AAA = Lys, UAG = parada)", pasos: ["Se lee de tres en tres desde AUG.", "AUG → Met; GCU → Ala; UGG → Trp; AAA → Lys.", "UAG es un codón de parada: no añade aminoácido.", "Péptido: Met-Ala-Trp-Lys."], resultado: "4 aminoácidos: Met-Ala-Trp-Lys." },
    { enunciado: "La hebra molde de un gen es 3'-TAC CTT AAA ATT-5'. Se produce una deleción de la primera C. ¿Cómo cambia el ARNm?", pasos: ["ARNm normal: AUG GAA UUU UAA (Met-Glu-Phe-parada).", "Molde tras la deleción: TAC TTA AAA TT…", "ARNm mutado: AUG AAU UUU AA…", "Desde el segundo codón cambian todos: se ha desplazado el marco de lectura."], resultado: "El ARNm pasa a AUG AAU UUU AA…: cambian todos los codones a partir de la deleción y la proteína resulta muy distinta." },
    { enunciado: "¿Cuántas bases de ARNm (y de ADN) hacen falta como mínimo para codificar una proteína de 150 aminoácidos?", pasos: ["Cada aminoácido necesita un codón de 3 bases: 150 · 3 = 450 bases.", "Hay que añadir el codón de parada: 450 + 3 = 453 bases de ARNm.", "En el ADN, el gen tiene al menos 453 pares de bases (sin contar intrones ni regiones reguladoras)."], resultado: "Al menos 453 bases de ARNm y 453 pares de bases en el gen." },
  ],
  errores: [
    "Poner timina (T) en el ARN: en el ARN va uracilo (U).",
    "Pensar que cada gen es un cromosoma: un cromosoma contiene cientos o miles de genes.",
    "Confundir replicación (copiar el ADN entero antes de dividirse) con transcripción (copiar un gen a ARNm).",
    "Creer que la traducción ocurre en el núcleo: ocurre en los ribosomas del citoplasma.",
    "Pensar que todas las mutaciones son malas: muchas son neutras y algunas, beneficiosas.",
    "Leer el ARNm desde cualquier punto: la traducción empieza siempre en el codón AUG y sigue de tres en tres.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Nombra las tres partes de un nucleótido.", sol: "Un azúcar (desoxirribosa o ribosa), un grupo fosfato y una base nitrogenada." } },
    { nivel: "básico", ...{ q: "Escribe la hebra complementaria de ADN de GGATCCTA.", sol: "CCTAGGAT." } },
    { nivel: "básico", ...{ q: "Transcribe a ARNm la hebra molde de ADN TTAGCC.", sol: "AAUCGG." } },
    { nivel: "básico", ...{ q: "¿Qué función tiene cada tipo de ARN?", sol: "ARNm: lleva la información del gen al ribosoma. ARNt: transporta los aminoácidos. ARNr: forma parte de los ribosomas." } },
    { nivel: "básico", ...{ q: "Indica tres agentes mutágenos.", sol: "Los rayos ultravioleta, los rayos X y sustancias del humo del tabaco (también algunos virus)." } },
    { nivel: "básico", ...{ q: "¿Dónde se encuentra el ADN en una célula eucariota y en una procariota?", sol: "En la eucariota, en el núcleo (y algo en mitocondrias y cloroplastos). En la procariota, libre en el citoplasma, en una región llamada nucleoide, y en plásmidos." } },
    { nivel: "básico", q: "Indica tres diferencias entre el ADN y el ARN.", sol: "Azúcar: desoxirribosa en el ADN y ribosa en el ARN. Bases: el ADN tiene T y el ARN U. Estructura: el ADN es de doble cadena y el ARN de una sola (además, el ADN es más largo y estable)." },
    { nivel: "básico", q: "¿Qué científicos propusieron el modelo de la doble hélice y qué aportó Rosalind Franklin?", sol: "Watson y Crick, en 1953. Franklin obtuvo las imágenes de difracción de rayos X (la «fotografía 51») que mostraban que el ADN tiene forma de hélice." },
    { nivel: "básico", q: "¿Qué es un codón? ¿Y un anticodón?", sol: "Un codón es un grupo de tres bases del ARNm que corresponde a un aminoácido o a una señal de parada. El anticodón son las tres bases complementarias del ARNt que reconocen al codón." },
    { nivel: "básico", q: "Escribe los codones de inicio y de parada.", sol: "Inicio: AUG (metionina). Parada: UAA, UAG y UGA." },
    { nivel: "básico", q: "Define gen y genoma. ¿Cuántos genes tiene aproximadamente el ser humano?", sol: "Gen: fragmento de ADN con la información para una proteína o un ARN. Genoma: todo el ADN de un organismo. El humano tiene unos 20.000 genes." },
    { nivel: "básico", q: "¿Dónde ocurren la replicación, la transcripción y la traducción en una célula eucariota?", sol: "Replicación y transcripción, en el núcleo. Traducción, en los ribosomas del citoplasma (libres o en el retículo rugoso)." },
    { nivel: "medio", ...{ q: "¿Cuántos aminoácidos codifica un ARNm de 300 bases (sin contar el codón de parada)?", sol: "300 / 3 = 100 codones; si uno es de parada, 99 aminoácidos." } },
    { nivel: "medio", ...{ q: "¿Por qué se dice que la replicación del ADN es semiconservativa?", sol: "Porque cada nueva molécula de ADN conserva una hebra de la original y tiene otra recién fabricada." } },
    { nivel: "medio", ...{ q: "¿Qué significa que el código genético es universal?", sol: "Que casi todos los seres vivos usan los mismos codones para los mismos aminoácidos; por eso una bacteria puede fabricar insulina humana." } },
    { nivel: "medio", ...{ q: "Explica por qué perder una sola base en un gen puede cambiar toda la proteína.", sol: "Porque el ARNm se lee de tres en tres: al perder una base, todos los codones siguientes se desplazan y cambian los aminoácidos." } },
    { nivel: "medio", q: "Un ADN tiene un 18 % de citosina. Calcula el porcentaje de las otras bases.", sol: "C = G = 18 %. A + T = 100 − 36 = 64 %, y como A = T, cada una es 32 %. Resultado: A 32 %, T 32 %, G 18 %, C 18 %." },
    { nivel: "medio", q: "La hebra molde de un gen es 3'-TACAAACCGATT-5'. Escribe el ARNm y la proteína (AUG = Met, UUU = Phe, GGC = Gly, UAA = parada).", sol: "ARNm: 5'-AUG UUU GGC UAA-3'. Proteína: Met-Phe-Gly (UAA es parada)." },
    { nivel: "medio", q: "Explica por qué el ADN de doble hélice permite copiar la información con exactitud.", sol: "Porque las bases se emparejan siempre A–T y G–C: al separar las hebras, cada una sirve de molde y solo puede formarse una hebra complementaria, idéntica a la que se separó." },
    { nivel: "medio", q: "¿Por qué es posible que una bacteria fabrique insulina humana? Relaciónalo con una característica del código genético.", sol: "Porque el código genético es universal: la bacteria lee los codones del gen humano igual que nosotros y une los mismos aminoácidos en el mismo orden." },
    { nivel: "medio", q: "Si todas tus células tienen el mismo ADN, ¿por qué una neurona fabrica proteínas distintas de las de una célula muscular?", sol: "Porque la expresión génica está regulada: cada tipo celular activa solo los genes que necesita para su función y mantiene silenciados los demás." },
    { nivel: "medio", q: "Una sustitución de una base no cambia la proteína. Explica cómo es posible.", sol: "El código es redundante: el nuevo codón puede codificar el mismo aminoácido (por ejemplo, GGU y GGC son glicina). Es una mutación silenciosa." },
    { nivel: "medio", q: "Diferencia entre mutación somática y germinal y di cuál se hereda.", sol: "La somática ocurre en células del cuerpo y solo afecta al individuo; la germinal ocurre en células que forman gametos y puede transmitirse a la descendencia." },
    { nivel: "avanzado", q: "Calcula cuántas secuencias distintas puede tener un fragmento de ADN de 5 pares de bases. ¿Qué te dice esto sobre la capacidad de almacenar información?", sol: "4⁵ = 1.024 secuencias. Con solo cuatro bases, el número de combinaciones crece de forma exponencial con la longitud; con miles de millones de bases, la capacidad de guardar información es enorme." },
    { nivel: "avanzado", q: "¿Por qué el código usa tripletes y no dobletes de bases? Razónalo con números.", sol: "Con dobletes habría 4² = 16 combinaciones, menos que los 20 aminoácidos. Con tripletes hay 4³ = 64, suficientes para todos los aminoácidos, las señales de parada y la redundancia." },
    { nivel: "avanzado", q: "Explica por qué una inserción de una base al principio de un gen suele ser más grave que una sustitución.", sol: "La inserción desplaza el marco de lectura: todos los codones a partir de ese punto cambian, la proteína resulta muy diferente y a menudo aparece pronto un codón de parada. La sustitución solo afecta a un codón y, como mucho, a un aminoácido." },
    { nivel: "avanzado", q: "Explica cómo funciona una vacuna de ARNm usando los conceptos de traducción e inmunidad.", sol: "La vacuna introduce un ARNm con la información de una proteína del virus. Los ribosomas de nuestras células lo traducen y fabrican esa proteína, que el sistema inmunitario reconoce como extraña y contra la que genera anticuerpos y memoria. El ARNm no entra en el núcleo ni cambia nuestro ADN y se degrada en pocos días." },
    { nivel: "avanzado", q: "El ADN de una bacteria que vive en fuentes termales a 90 °C tiene un 70 % de G + C. Propón una explicación.", sol: "G y C se unen por tres puentes de hidrógeno y A y T por dos. Un ADN rico en G–C es más estable y resiste mejor el calor sin separar sus hebras, lo que es ventajoso a altas temperaturas." },
    { nivel: "avanzado", q: "Diseña un pequeño protocolo para extraer ADN de fresas y explica la función de cada ingrediente.", sol: "Triturar fresas (rompe tejidos); añadir agua con lavavajillas (disuelve las membranas de lípidos) y sal (ayuda a que el ADN se agrupe); filtrar; verter con cuidado alcohol muy frío por encima: el ADN no se disuelve en alcohol y precipita como hilos blancos en la interfase." },
    { nivel: "avanzado", q: "La técnica PCR copia ADN en un tubo. Relaciona sus pasos con la replicación celular y explica para qué se usa.", sol: "Con calor (unos 95 °C) se separan las hebras, como hace la helicasa; al enfriar, se unen pequeños cebadores; una ADN polimerasa resistente al calor añade nucleótidos complementarios. Se repite el ciclo unas 30 veces y se obtienen millones de copias. Sirve para diagnosticar infecciones, en medicina forense y en investigación." },
  ],
  quiz: [
    { q: "¿Qué tres partes forman un nucleótido?", o: ["Aminoácido, azúcar y lípido", "Azúcar, fosfato y base nitrogenada", "Base, proteína y fosfato", "Glucosa, oxígeno y agua"], a: 1, e: "La base es la parte que varía." },
    { q: "¿Qué base tiene el ADN y no el ARN?", o: ["Adenina", "Guanina", "Citosina", "Timina"], a: 3, e: "El ARN tiene uracilo." },
    { q: "Los peldaños de la doble hélice son…", o: ["pares de bases unidos por puentes de hidrógeno", "fosfatos", "aminoácidos", "histonas"], a: 0, e: "A–T y G–C." },
    { q: "Si un ADN tiene un 30 % de G, tendrá…", o: ["30 % de A", "70 % de T", "30 % de C", "20 % de C"], a: 2, e: "G = C por complementariedad (regla de Chargaff)." },
    { q: "La hebra complementaria de 5'-GATTC-3' es…", o: ["3'-GATTC-5'", "3'-CUAAG-5'", "3'-CTAAG-5'", "3'-TCGGA-5'"], a: 2, e: "G–C, A–T, T–A, T–A, C–G." },
    { q: "¿Quién obtuvo la «fotografía 51» del ADN?", o: ["Rosalind Franklin", "Gregor Mendel", "Severo Ochoa", "Charles Darwin"], a: 0, e: "Con difracción de rayos X." },
    { q: "Las proteínas alrededor de las cuales se enrolla el ADN son las…", o: ["enzimas", "polimerasas", "hemoglobinas", "histonas"], a: 3, e: "Forman los nucleosomas." },
    { q: "El genoma humano tiene unos…", o: ["3 millones de pares de bases", "3.000 millones de pares de bases", "20 pares de bases", "46 pares de bases"], a: 1, e: "Y unos 20.000 genes." },
    { q: "La enzima que copia el ADN en la replicación es la…", o: ["ADN polimerasa", "ARN polimerasa", "helicasa", "amilasa"], a: 0, e: "La helicasa solo abre la doble hélice." },
    { q: "El dogma central de la biología molecular es…", o: ["proteína → ARN → ADN", "ARN → ADN → lípidos", "ADN → ARNm → proteína", "ADN → glucosa → ATP"], a: 2, e: "Transcripción y después traducción." },
    { q: "Si la hebra molde es TAC, el ARNm será…", o: ["ATG", "AUG", "UAC", "TAC"], a: 1, e: "Frente a T se pone A, frente a A se pone U, frente a C se pone G." },
    { q: "En la traducción, ¿qué molécula lleva los aminoácidos al ribosoma?", o: ["ARNm", "ARNr", "ADN", "ARNt"], a: 3, e: "Reconoce el codón con su anticodón." },
    { q: "¿Cuántos codones distintos existen?", o: ["20", "3", "46", "64"], a: 3, e: "4³ = 64." },
    { q: "Que varios codones codifiquen el mismo aminoácido significa que el código es…", o: ["universal", "redundante", "ambiguo", "solapado"], a: 1, e: "También se dice degenerado." },
    { q: "¿Qué codón marca el inicio de la traducción?", o: ["UAA", "UGA", "AUG", "GGG"], a: 2, e: "Codifica metionina." },
    { q: "Los fragmentos que se eliminan del ARNm antes de salir del núcleo son los…", o: ["intrones", "exones", "codones", "nucleosomas"], a: 0, e: "Los exones se empalman." },
    { q: "La pérdida de una base en un gen se llama…", o: ["inserción", "deleción", "sustitución", "duplicación"], a: 1, e: "Desplaza el marco de lectura." },
    { q: "La trisomía 21 es una mutación…", o: ["genómica", "génica", "cromosómica estructural", "silenciosa"], a: 0, e: "Cambia el número de cromosomas." },
    { q: "¿Cuál es un agente mutágeno químico?", o: ["La radiación ultravioleta", "Los rayos X", "El virus del papiloma", "Sustancias del humo del tabaco"], a: 3, e: "UV y rayos X son físicos; los virus, biológicos." },
    { q: "Una mutación en una célula de la piel…", o: ["se hereda siempre", "cambia todos los genes", "no se transmite a los hijos", "solo ocurre en gametos"], a: 2, e: "Es somática." },
  ],
  examen: [
    { q: "La regla de complementariedad del ADN es…", o: ["A–G y T–C", "A–T y G–C", "A–U y G–C", "A–C y G–T"], a: 1, e: "En el ARN, la A se empareja con U." },
    { q: "Transcribe la hebra molde de ADN 3'-TTGCA-5'.", o: ["5'-AACGU-3'", "5'-AACGT-3'", "5'-UUGCA-3'", "5'-TTGCA-3'"], a: 0, e: "T→A, T→A, G→C, C→G, A→U." },
    { q: "La replicación del ADN ocurre en…", o: ["la metafase", "la traducción", "la fase S", "el ribosoma"], a: 2, e: "Antes de la división." },
    { q: "Un ARNm de 90 bases, sin contar la parada, codifica…", o: ["90 aminoácidos", "30 aminoácidos", "45 aminoácidos", "270 aminoácidos"], a: 1, e: "90 / 3 = 30 codones." },
    { q: "El ARN ribosómico…", o: ["lleva la información del gen", "transporta aminoácidos", "forma el núcleo", "forma los ribosomas"], a: 3, e: "Junto con proteínas." },
    { q: "Que el código genético sea universal es una prueba de…", o: ["que no hay mutaciones", "que el ARN no existe", "que las proteínas tienen ADN", "el origen común de los seres vivos"], a: 3, e: "Todos usan el mismo «diccionario»." },
    { q: "¿Qué mutación suele ser más grave?", o: ["Una sustitución silenciosa", "Una deleción de una base al principio del gen", "Un cambio fuera de los genes", "Ninguna"], a: 1, e: "Cambia el marco de lectura." },
    { q: "La epigenética estudia…", o: ["cambios en la secuencia del ADN", "las proteínas del músculo", "marcas que encienden o apagan genes sin cambiar la secuencia", "los fósiles"], a: 2, e: "Por ejemplo, cambios en las histonas." },
  ],
  feynman: ["Cómo es la estructura del ADN", "La regla de emparejamiento de las bases", "Cómo se copia el ADN antes de la división", "Los dos pasos para pasar de un gen a una proteína", "Qué es un codón y por qué el código es universal"],
  mapa: mapa("ADN", "var(--eso)", [
    ["Estructura", "doble hélice · A-T, G-C", "var(--pen)"],
    ["Replicación", "copia semiconservativa", "var(--red)"],
    ["Expresión", "transcripción → traducción", "var(--leaf)"],
    ["Código genético", "codón = 3 bases · universal", "var(--sun)"],
  ], 250),
  tarjetas: [
    ["Bases nitrogenadas del ADN", "Adenina, timina, guanina y citosina (A, T, G, C)."],
    ["Regla de complementariedad", "A con T (U en el ARN) y G con C."],
    ["¿Qué es la transcripción?", "La copia de un gen de ADN en una molécula de ARN mensajero, en el núcleo."],
    ["¿Qué es la traducción?", "La lectura del ARNm en los ribosomas para unir aminoácidos y formar una proteína."],
    ["¿Qué es un codón?", "Un grupo de tres bases del ARNm que corresponde a un aminoácido o a una señal de inicio o parada."],
    ["Diferencias ADN-ARN", "ADN: desoxirribosa, T, doble hélice. ARN: ribosa, U, una cadena."],
    ["Codón", "Grupo de tres bases del ARNm que corresponde a un aminoácido."],
    ["Agente mutágeno", "Factor que provoca mutaciones: radiaciones, ciertas sustancias químicas o virus."],
    ["Replicación semiconservativa", "Cada ADN nuevo tiene una hebra antigua y una nueva."],
    ["Tipos de ARN", "Mensajero (lleva la información), de transferencia (trae aminoácidos) y ribosómico (forma ribosomas)."],
    ["Codones especiales", "AUG = inicio (metionina); UAA, UAG, UGA = parada."],
    ["Tipos de mutaciones", "Génicas (una base), cromosómicas (un fragmento) y genómicas (número de cromosomas)."],
  ],
  glosario: [
    ["Ácido nucleico", "Polímero de nucleótidos que guarda o expresa la información genética (ADN y ARN)."],
    ["Nucleótido", "Unidad formada por un azúcar, un fosfato y una base nitrogenada."],
    ["Doble hélice", "Estructura del ADN: dos cadenas antiparalelas enrolladas y unidas por sus bases."],
    ["Complementariedad", "Emparejamiento fijo de bases: A con T (o U) y G con C."],
    ["Histonas", "Proteínas alrededor de las cuales se enrolla el ADN."],
    ["Gen", "Fragmento de ADN con la información para una proteína o un ARN."],
    ["Genoma", "Conjunto de todo el ADN de un organismo."],
    ["Replicación", "Copia del ADN, semiconservativa, antes de la división celular."],
    ["Transcripción", "Síntesis de ARN a partir de un gen, en el núcleo."],
    ["Traducción", "Síntesis de una proteína en el ribosoma a partir del ARNm."],
    ["Codón", "Triplete de bases del ARNm que corresponde a un aminoácido o a una parada."],
    ["Anticodón", "Triplete del ARNt complementario de un codón."],
    ["Código genético", "Correspondencia entre codones y aminoácidos; universal y redundante."],
    ["Intrón y exón", "Partes del gen que se eliminan (intrones) o se conservan (exones) en el ARNm."],
    ["Expresión génica", "Uso de la información de un gen para fabricar su producto."],
    ["Mutación", "Cambio en la secuencia del ADN."],
    ["Agente mutágeno", "Factor físico, químico o biológico que aumenta las mutaciones."],
    ["PCR", "Técnica que copia millones de veces un fragmento de ADN en el laboratorio."],
  ],
  situacion: {
    titulo: "Mensajes secretos en ADN",
    reto: "Una empresa de biotecnología investiga cómo guardar archivos digitales en moléculas de ADN y organiza un concurso para institutos. Vuestro equipo debe inventar un sistema para codificar un mensaje corto en una secuencia de ADN, intercambiarlo con otro equipo y descifrar el suyo pasando por transcripción y traducción.",
    pasos: [
      "Extraed ADN de fresas o kiwi en el laboratorio y observad los hilos que se forman: es la molécula con la que vais a trabajar.",
      "Inventad una tabla que asigne a cada letra del alfabeto un codón (como el código genético) e incluid un codón de inicio y uno de parada.",
      "Escribid vuestro mensaje como ARNm y después como hebra molde de ADN; construid un tramo con una maqueta de colores.",
      "Intercambiad la hebra molde con otro equipo, que debe transcribirla, traducirla y descifrar el mensaje.",
      "Introducid una mutación (sustitución, inserción o deleción) y comprobad cómo cambia el mensaje descifrado.",
    ],
    producto: "Tabla de código, maqueta del fragmento de ADN, mensaje descifrado y un informe breve sobre el efecto de cada tipo de mutación.",
    evaluacion: [
      "Aplicación correcta de la complementariedad, la transcripción y la traducción.",
      "Diseño coherente del código (inicio, parada, lectura de tres en tres).",
      "Explicación razonada del efecto de las mutaciones.",
      "Colaboración y comunicación entre equipos.",
    ],
  },
  familias: ["Extraed ADN de un plátano o de fresas con sal, lavavajillas y alcohol frío: se ve como hilos blancos.", "Escribid un mensaje en «código genético» de tres letras y que lo descifre con una tabla.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de «Genética y evolución» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): estructura del ADN y del ARN, replicación, expresión génica (transcripción y traducción), código genético y mutaciones. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Extracción de ADN de fresas o kiwi en el laboratorio.",
      "Maqueta de doble hélice con gominolas y palillos con un código de colores por base.",
      "Simulación de transcripción y traducción con tarjetas de codones y aminoácidos.",
      "Situación de aprendizaje: mensajes secretos codificados en ADN y efecto de las mutaciones.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ácido desoxirribonucleico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/%C3%81cido_desoxirribonucleico" },
    { t: "Código genético, Wikipedia en español", url: "https://es.wikipedia.org/wiki/C%C3%B3digo_gen%C3%A9tico" },
  ],
  revisado: "2026-11-13",
};
