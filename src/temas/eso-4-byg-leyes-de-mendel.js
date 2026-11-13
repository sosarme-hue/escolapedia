// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");

// Guisante: color amarillo (A, dominante) o verde (a).
const pea = (x, y, r, amarillo) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${amarillo ? "#f2c200" : "#5aa832"}" stroke="var(--ink)" stroke-width="2"/>`;

// Cuadro de Punnett 2x2 para Aa x Aa.
function punnett(x, y, s) {
  const g = ["A", "a"];
  let out = "";
  g.forEach((c, i) => {
    out += `<text x="${x + s * (i + 1) + s / 2}" y="${y + s * 0.65}" text-anchor="middle" font-size="22" font-weight="700" fill="var(--pen)" ${D}>${c}</text>`;
    out += `<text x="${x + s / 2}" y="${y + s * (i + 1) + s * 0.62}" text-anchor="middle" font-size="22" font-weight="700" fill="var(--inf)" ${D}>${c}</text>`;
  });
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    const gen = [g[i], g[j]].sort().join("");
    const cx = x + s * (j + 1), cy = y + s * (i + 1);
    out += `<rect x="${cx}" y="${cy}" width="${s}" height="${s}" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`;
    out += pea(cx + s / 2, cy + s * 0.38, s * 0.2, gen !== "aa");
    out += `<text x="${cx + s / 2}" y="${cy + s * 0.86}" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${gen}</text>`;
  }
  return out;
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "La herencia: leyes de Mendel",
  minutos: 115,
  objetivos: [
    "Usar el vocabulario de la genética: gen, alelo, genotipo, fenotipo, homocigoto y heterocigoto",
    "Explicar el método de Mendel y enunciar sus tres leyes",
    "Resolver cruces de uno y dos caracteres con el cuadro de Punnett y con probabilidades",
    "Aplicar el cruzamiento prueba para averiguar genotipos",
    "Reconocer la herencia intermedia, la codominancia y los alelos múltiples (grupos sanguíneos)",
    "Relacionar las leyes de Mendel con la meiosis y la teoría cromosómica",
  ],
  claves: ["alelo", "dominante", "recesivo", "homocigoto", "heterocigoto", "genotipo", "fenotipo"],
  pregunta: {
    texto: "Tus padres tienen los ojos marrones y tú los tienes azules. ¿Cómo es posible si ninguno de los dos los tiene azules?",
    respuesta: "Porque cada uno de tus padres puede llevar <mark>escondido un alelo de ojos azules</mark>. El marrón domina sobre el azul, así que no se nota en ellos, pero si los dos te pasan su alelo azul, tú tienes dos copias y se manifiesta. Mendel descubrió esta lógica con guisantes en 1865. (En realidad el color de ojos depende de varios genes, pero el principio es el mismo.)",
  },
  lectura: {
    titulo: "El monje que contaba guisantes",
    html: `<p>En 1865, en una sala de la Sociedad de Ciencias Naturales de Brno, un monje de 42 años leyó durante dos tardes un trabajo sobre cruces de guisantes. Había cultivado unas 28.000 plantas, había contado una a una sus semillas y había descubierto que los caracteres se heredaban siguiendo proporciones matemáticas: 3 a 1, 9 a 3 a 3 a 1. El público escuchó con educación… y nadie entendió la importancia de lo que oía.</p>
<p>Gregor Mendel murió en 1884 convencido de que su trabajo tendría su momento, pero sin verlo. En 1900, tres botánicos de tres países distintos, De Vries, Correns y Tschermak, llegaron por su cuenta a los mismos resultados y, al buscar en la bibliografía, encontraron que un monje se les había adelantado 35 años.</p>
<p>Hoy las leyes de Mendel se usan para calcular el riesgo de una enfermedad hereditaria, para mejorar razas de ganado y variedades de cultivo o para entender por qué un niño tiene los ojos azules si sus padres los tienen marrones. En este tema vas a aprender a pensar como Mendel: con orden, con letras y con probabilidades.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Mendel y su método</h3><p>Antes de Mendel se pensaba que la herencia funcionaba como mezclar pinturas: los rasgos de los padres se fundían en los hijos. Pero entonces, ¿por qué a veces reaparece en un nieto un rasgo que no tenían los padres? <b>Gregor Mendel</b> (1822-1884), monje agustino del monasterio de Brno (hoy en la República Checa), resolvió el enigma gracias a un método muy cuidadoso.</p><p>1) <b>Eligió bien el organismo</b>: el guisante (<i>Pisum sativum</i>) es fácil de cultivar, produce muchas semillas, tiene varias generaciones en poco tiempo y se autofecunda, aunque también se puede polinizar a mano.<br>2) <b>Estudió caracteres sencillos</b>, con solo dos formas fáciles de distinguir: semilla amarilla o verde, lisa o rugosa, planta alta o baja… Eligió siete.<br>3) <b>Partió de líneas puras</b>: plantas que, autofecundadas durante generaciones, siempre daban descendientes iguales.<br>4) <b>Contó y usó las matemáticas</b>: no se fijó en individuos sueltos, sino en miles de descendientes, y analizó las proporciones.</p><p>Para cruzar dos plantas, cortaba los estambres de una flor antes de que madurasen (para evitar la autofecundación) y le ponía con un pincel el polen de otra planta. A la generación de partida la llamó <b>P</b> (parental); a sus hijos, <b>F1</b> (primera generación filial); y a los hijos de estos, <b>F2</b>.</p>`,
      svg: L6.flujo("Método de Mendel: elegir el guisante, estudiar caracteres sencillos, partir de líneas puras y contar", ["Organismo adecuado: el guisante", "Caracteres con dos formas claras", "Líneas puras y polinización a mano", "Contar miles de semillas y calcular"], "El método de Mendel"),
    },
    {
      html: `<h3>1.2 El vocabulario de la herencia</h3><p>Para trabajar en genética hay que manejar bien unas pocas palabras.</p><p>Un <b>carácter</b> es un rasgo observable: el color de la semilla, el grupo sanguíneo, la forma del lóbulo de la oreja. Un <mark>gen</mark> es el fragmento de ADN que lleva la información de un carácter, y ocupa un lugar fijo en un cromosoma, llamado <b>locus</b>. Cada gen puede tener versiones distintas, llamadas <mark>alelos</mark>: para el color del guisante hay un alelo «amarillo» y un alelo «verde».</p><p>Como las células del cuerpo son diploides y tienen los cromosomas por parejas (uno del padre y otro de la madre), <b>cada individuo tiene dos alelos de cada gen</b>, uno en cada cromosoma homólogo. Pueden ser iguales o distintos.</p><p>El <mark>genotipo</mark> es la pareja de alelos que tiene un individuo para un gen, y se escribe con letras: AA, Aa o aa. El <mark>fenotipo</mark> es lo que se manifiesta, lo que se observa: semilla amarilla o verde. El fenotipo depende del genotipo, pero también puede influir el ambiente: una planta con genes para ser alta será baja si crece en un suelo pobre, y dos gemelos idénticos pueden tener pesos muy distintos según su alimentación. Se resume así: <b>fenotipo = genotipo + ambiente</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pareja de cromosomas homólogos con un alelo A y un alelo a en el mismo lugar">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="70" y="20" width="26" height="140" rx="13" fill="var(--pen)" opacity=".85"/>
        <rect x="150" y="20" width="26" height="140" rx="13" fill="var(--inf)" opacity=".85"/>
        <rect x="66" y="74" width="34" height="18" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="146" y="74" width="34" height="18" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <text x="83" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>A</text>
        <text x="163" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>a</text>
        <text x="83" y="176" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>de la madre</text>
        <text x="163" y="176" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>del padre</text>
        <text x="218" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>gen</text>
        <path d="M200 83 H 184" stroke="var(--ink)" stroke-width="2"/>
      </svg>`,
    },
    {
      html: `<h3>1.3 Dominante y recesivo, homocigoto y heterocigoto</h3><p>Cuando un individuo tiene dos alelos distintos de un gen, a menudo uno de ellos «tapa» al otro. El alelo que se manifiesta siempre que está presente es el <mark>dominante</mark> y se escribe con letra <b>mayúscula</b> (A). El que solo se manifiesta cuando no hay un dominante, es decir, cuando está repetido, es el <mark>recesivo</mark>, y se escribe con la misma letra en <b>minúscula</b> (a).</p><p>Según sus alelos, un individuo puede ser:</p><p>• <b>Homocigoto dominante</b> (AA): dos alelos dominantes. Fenotipo dominante.<br>• <b>Heterocigoto</b> (Aa): dos alelos distintos. También llamado híbrido. Fenotipo dominante, pero lleva escondido el recesivo y puede pasarlo a sus hijos: se dice que es <b>portador</b>.<br>• <b>Homocigoto recesivo</b> (aa): dos alelos recesivos. Fenotipo recesivo.</p><p>Fíjate en una consecuencia importante: <mark>si ves un fenotipo recesivo, sabes seguro que el genotipo es aa</mark>; si ves un fenotipo dominante, puede ser AA o Aa y tendrás que averiguarlo. «Dominante» no significa «más frecuente» ni «mejor»: el alelo de la polidactilia (tener seis dedos) es dominante y es raro, y muchos alelos recesivos son muy comunes, como el de los ojos azules en el norte de Europa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres genotipos y su fenotipo: AA amarillo, Aa amarillo, aa verde">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${pea(50, 70, 26, true)}${pea(130, 70, 26, true)}${pea(210, 70, 26, false)}
        <g ${D} font-weight="700" font-size="22" fill="var(--ink)" text-anchor="middle"><text x="50" y="132">AA</text><text x="130" y="132">Aa</text><text x="210" y="132">aa</text></g>
        <g ${F} font-size="12" fill="var(--muted)" text-anchor="middle"><text x="50" y="154">homocigoto</text><text x="130" y="154">heterocigoto</text><text x="210" y="154">homocigoto</text><text x="50" y="168">dominante</text><text x="210" y="168">recesivo</text></g>
      </svg>`,
    },
    {
      html: `<h3>2.1 Primera ley: uniformidad de la F1</h3><p>Mendel cruzó plantas de líneas puras que se diferenciaban en un solo carácter: guisantes de semilla amarilla con guisantes de semilla verde. Hoy lo escribimos así:</p><p>P: <b>AA</b> (amarilla) × <b>aa</b> (verde)<br>Gametos: todos A × todos a<br>F1: todos <b>Aa</b>, amarillos</p><p>Todos los descendientes salieron iguales entre sí y amarillos, como uno de los padres. El color verde parecía haber desaparecido. Esta observación es la <mark>primera ley de Mendel o ley de la uniformidad</mark>: <b>al cruzar dos razas puras que difieren en un carácter, todos los individuos de la F1 son iguales</b>, tanto en genotipo (todos heterocigotos) como en fenotipo.</p><p>Mendel repitió el cruce al revés, poniendo el polen de la planta verde en la amarilla, y obtuvo lo mismo: daba igual cuál fuera el padre y cuál la madre. Eso indica que los dos progenitores aportan lo mismo a la herencia, algo que hoy explicamos porque cada gameto aporta un alelo.</p><p>Se le llama a veces ley de la dominancia, porque la F1 muestra el carácter dominante. Pero en la herencia intermedia (apartado 4.1) la F1 también es uniforme, aunque con un fenotipo intermedio: la uniformidad se cumple igual.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cruce AA por aa: todos los descendientes Aa amarillos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${pea(70, 40, 20, true)}${pea(190, 40, 20, false)}
        <text x="130" y="47" text-anchor="middle" font-size="22" font-weight="700" fill="var(--red)" ${D}>×</text>
        <g ${F} font-size="13" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="70" y="78">AA</text><text x="190" y="78">aa</text></g>
        <path d="M130 86 V 104" stroke="var(--ink)" stroke-width="2.5"/>
        ${[40, 100, 160, 220].map((x) => pea(x, 128, 16, true)).join("")}
        <text x="130" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>F1: 100 % Aa, amarillos</text>
      </svg>`,
    },
    {
      html: `<h3>2.2 Segunda ley: segregación de los alelos</h3><p>Después, Mendel dejó que las plantas de la F1 (Aa) se autofecundaran. En la F2 reapareció el color verde: de 8.023 semillas, <b>6.022 eran amarillas y 2.001 verdes</b>, casi exactamente <mark>3 : 1</mark>. El «factor verde» no se había mezclado ni perdido: había estado escondido.</p><p>Mendel lo explicó así: cada individuo tiene dos «factores» (alelos) para cada carácter, y al formar los gametos <mark>los dos alelos se separan</mark> y cada gameto recibe solo uno. Es la <b>segunda ley o ley de la segregación</b>.</p><p>Un heterocigoto Aa forma, por tanto, la mitad de gametos con A y la mitad con a. Al combinarse al azar, los resultados se ven con el <b>cuadro de Punnett</b>, una tabla con los gametos de un progenitor en la fila superior y los del otro en la columna izquierda:</p><p>Aa × Aa → <b>1 AA : 2 Aa : 1 aa</b> (proporción genotípica)<br>→ <b>3 amarillos : 1 verde</b> (proporción fenotípica)</p><p>Hoy sabemos que la segregación ocurre en la <b>anafase I de la meiosis</b>, cuando se separan los cromosomas homólogos que llevan los dos alelos. Recuerda que estas proporciones son probabilidades: se cumplen con muchos descendientes, pero en una familia de cuatro hijos pueden salir los cuatro con el carácter dominante.</p>`,
      svg: `<svg viewBox="0 0 260 200" role="img" aria-label="Cuadro de Punnett Aa por Aa: AA, Aa, Aa y aa; tres amarillos y un verde">
        <rect width="260" height="200" rx="14" fill="var(--paper)"/>
        ${punnett(36, 4, 58)}
      </svg>`,
    },
    {
      html: `<h3>2.3 La genética es probabilidad</h3><p>Los resultados de un cruce son <mark>probabilidades</mark>, como al lanzar una moneda. Que un heterocigoto pase el alelo A o el a a un hijo es como sacar cara o cruz: 1/2 cada uno. Por eso podemos calcular resultados sin dibujar el cuadro de Punnett, con dos reglas:</p><p>• <b>Regla del producto</b> («y»): la probabilidad de que ocurran a la vez dos sucesos independientes es el producto de sus probabilidades. Para que un hijo de Aa × Aa sea aa, debe recibir a del padre <b>y</b> a de la madre: 1/2 · 1/2 = <b>1/4</b>.<br>• <b>Regla de la suma</b> («o»): la probabilidad de que ocurra un suceso u otro, si se excluyen entre sí, es la suma. Para que sea heterocigoto, puede recibir A del padre y a de la madre <b>o</b> al revés: 1/4 + 1/4 = <b>1/2</b>.</p><p>Muy importante: <mark>cada hijo es un suceso independiente</mark>. Si una pareja Aa × Aa ya tiene tres hijos con el carácter dominante, la probabilidad de que el cuarto sea aa sigue siendo 1/4: la naturaleza «no lleva la cuenta». Del mismo modo, la probabilidad de tener dos hijos aa seguidos es 1/4 · 1/4 = 1/16.</p><p>Las proporciones se pueden expresar como fracciones (1/4), porcentajes (25 %) o razones (1 : 3). En los problemas conviene usar fracciones, que se multiplican fácilmente.</p>`,
      svg: L6.barras("Probabilidades en el cruce Aa por Aa: AA un cuarto, Aa la mitad, aa un cuarto", [["AA", 1, "1/4 = 25 %"], ["Aa", 2, "2/4 = 50 %"], ["aa", 1, "1/4 = 25 %"], ["fenotipo dom.", 3, "3/4 = 75 %"]], "Aa × Aa: probabilidades", 4),
    },
    {
      html: `<h3>2.4 El cruzamiento prueba</h3><p>Un guisante amarillo puede ser AA o Aa: tienen el mismo fenotipo. ¿Cómo averiguar su genotipo? Con el <mark>cruzamiento prueba</mark> o retrocruzamiento: se cruza el individuo problema con un <b>homocigoto recesivo (aa)</b>. Este solo produce gametos a, que no tapan nada, así que el fenotipo de los hijos revela directamente qué alelos aporta el otro progenitor.</p><p>• Si el individuo es <b>AA</b>: AA × aa → todos Aa, <b>todos con fenotipo dominante</b>.<br>• Si es <b>Aa</b>: Aa × aa → 1/2 Aa y 1/2 aa, <mark>la mitad con fenotipo recesivo</mark>.</p><p>Basta con que aparezca <b>un solo descendiente recesivo</b> para saber que el progenitor dominante era heterocigoto. En cambio, si todos salen dominantes, cuantos más descendientes haya, más seguros estaremos de que era AA: con 10 hijos dominantes, la probabilidad de que un Aa no haya dado ningún recesivo es (1/2)¹⁰, menos de una entre mil.</p><p>Los criadores de animales y los agricultores usan el cruzamiento prueba para saber si un ejemplar es de raza pura antes de usarlo como reproductor. Por ejemplo, un criador de labradores quiere saber si un macho negro es portador del alelo chocolate: lo cruza con una hembra chocolate (recesiva) y observa las camadas.</p>`,
      svg: L6.compara("Cruzamiento prueba: si es AA todos los hijos dominantes; si es Aa, la mitad recesivos", ["Si es AA", "var(--leaf)", ["AA × aa", "todos Aa", "100 % dominante", "raza pura"]], ["Si es Aa", "var(--sun)", ["Aa × aa", "1/2 Aa : 1/2 aa", "50 % recesivo", "portador"]]),
      video: { id: "U2F1NTV0jC4", titulo: "Cruzamiento prueba o retrocruzamiento", canal: "unProfesor", vistas: 103025 },
    },
    {
      html: `<h3>3.1 Tercera ley: transmisión independiente</h3><p>Mendel también siguió <b>dos caracteres a la vez</b>, por ejemplo el color (amarillo A, verde a) y la textura de la semilla (lisa B, rugosa b). Cruzó plantas puras amarillas y lisas (AABB) con verdes y rugosas (aabb). La F1 fue uniforme: todas AaBb, amarillas y lisas, como predecía la primera ley.</p><p>Al autofecundar la F1 (AaBb × AaBb) obtuvo en la F2 cuatro fenotipos, dos de ellos nuevos, combinaciones que no tenían los abuelos:</p><p><b>9 amarillas lisas : 3 amarillas rugosas : 3 verdes lisas : 1 verde rugosa</b></p><p>Mendel concluyó que <mark>los alelos de genes distintos se heredan de forma independiente</mark> unos de otros: que un gameto lleve A o a no influye en que lleve B o b. Es la <b>tercera ley o ley de la transmisión independiente</b>. Si miras cada carácter por separado, sigue saliendo 3 : 1 (12 amarillas : 4 verdes; 12 lisas : 4 rugosas), y la proporción 9 : 3 : 3 : 1 es justamente el producto (3 : 1) × (3 : 1).</p><p>Hoy sabemos que esto ocurre porque, en la metafase I de la meiosis, cada pareja de homólogos se orienta al azar e independientemente de las demás. Por eso la tercera ley <b>solo se cumple si los genes están en cromosomas distintos</b> (o muy alejados en el mismo cromosoma). Mendel tuvo suerte: sus siete caracteres se comportaban así.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barras de proporción 9, 3, 3 y 1 de 16">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[9, true, "liso"], [3, true, "rugoso"], [3, false, "liso"], [1, false, "rugoso"]].map(([n, am, t], i) => `
          <rect x="${30 + i * 56}" y="${150 - n * 13}" width="40" height="${n * 13}" rx="4" fill="${am ? "#f2c200" : "#5aa832"}" stroke="var(--ink)" stroke-width="2"/>
          <text x="${50 + i * 56}" y="${142 - n * 13}" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${D}>${n}</text>
          <text x="${50 + i * 56}" y="168" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>3.2 Cruces de dos caracteres paso a paso</h3><p>En un cruce dihíbrido, lo primero es escribir bien los <mark>gametos</mark>. Cada gameto lleva <b>un alelo de cada gen</b>: nunca dos letras del mismo gen. Un individuo AaBb forma cuatro tipos de gametos en igual proporción: <b>AB, Ab, aB y ab</b> (1/4 cada uno). Un truco es el método «FOIL» o de las flechas: combinar el primer alelo del primer gen con cada uno del segundo, y luego el segundo alelo. Un AABb solo forma dos tipos (AB y Ab), y un aabb, uno solo (ab). En general, el número de tipos de gametos es 2ⁿ, donde n es el número de genes en heterocigosis.</p><p>Con los cuatro gametos de cada padre se construye un <b>cuadro de Punnett de 4 × 4</b>, con 16 casillas. Contando los fenotipos se obtiene la proporción 9 : 3 : 3 : 1.</p><p>Pero hay un camino más rápido: <mark>tratar cada gen por separado y multiplicar</mark>. Por ejemplo, en AaBb × AaBb, ¿qué probabilidad hay de una planta amarilla y rugosa? Amarilla (A_) = 3/4; rugosa (bb) = 1/4; ambas a la vez = 3/4 · 1/4 = <b>3/16</b>. ¿Y de que sea AaBb? 1/2 · 1/2 = 1/4. Este método funciona incluso con tres o más genes, cuando el cuadro sería enorme (64 casillas para tres genes).</p>`,
      svg: L6.tabla("Gametos que forman distintos genotipos de dos genes", ["Genotipo", "Tipos", "Gametos"], [["AaBb", "4", "AB Ab aB ab"], ["AABb", "2", "AB Ab"], ["Aabb", "2", "Ab ab"], ["aaBB", "1", "aB"], ["AaBbCc", "8", "2³"]]),
    },
    {
      html: `<h3>4.1 Herencia intermedia y codominancia</h3><p>Mendel tuvo la suerte de estudiar caracteres con dominancia completa, pero no siempre un alelo tapa por completo al otro.</p><p>En la <mark>herencia intermedia</mark> (o dominancia incompleta), el heterocigoto tiene un <b>fenotipo intermedio</b> entre los dos homocigotos. El ejemplo clásico es el dondiego de noche (<i>Mirabilis jalapa</i>): al cruzar plantas de flores rojas (RR) con plantas de flores blancas (BB), toda la F1 sale <b>rosa</b> (RB). Como ningún alelo domina, se escriben con letras distintas, ambas mayúsculas. En la F2 (RB × RB) aparecen 1 roja : 2 rosas : 1 blanca: aquí <mark>la proporción de fenotipos coincide con la de genotipos (1 : 2 : 1)</mark>, porque cada genotipo tiene su propio aspecto. Algo parecido pasa con el color de algunas razas de pollos o de caballos.</p><p>En la <mark>codominancia</mark>, el heterocigoto <b>manifiesta los dos alelos a la vez</b>, sin mezclarlos. Por ejemplo, en algunas razas de vacas, al cruzar un animal de pelo rojo con uno blanco, los hijos tienen pelos rojos y pelos blancos entremezclados (pelaje «ruano»). En los humanos, el grupo sanguíneo <b>AB</b> es codominante: los glóbulos rojos llevan a la vez el antígeno A y el antígeno B.</p><p>Estas excepciones no contradicen a Mendel: los alelos siguen segregándose igual, solo cambia la relación entre ellos.</p>`,
      svg: L6.compara("Herencia intermedia: flor rosa; codominancia: pelaje con pelos rojos y blancos", ["Intermedia", "var(--red)", ["RR × BB → RB rosa", "fenotipo mezcla", "F2: 1 : 2 : 1", "dondiego de noche"]], ["Codominancia", "var(--pen)", ["se ven los dos alelos", "sin mezclarse", "grupo sanguíneo AB", "vacas ruanas"]]),
      video: { id: "-G_tkEmWnBg", titulo: "Problemas de codominancia y herencia intermedia", canal: "unProfesor", vistas: 252613 },
    },
    {
      html: `<h3>4.2 Alelos múltiples: los grupos sanguíneos</h3><p>Cada persona tiene solo dos alelos de cada gen, pero en una población puede haber <mark>más de dos alelos</mark> para un mismo gen. Es lo que se llama <b>alelismo múltiple</b>, y el ejemplo más conocido es el del <b>sistema ABO</b> de los grupos sanguíneos.</p><p>El gen tiene tres alelos: <b>I<sup>A</sup></b> (fabrica el antígeno A en los glóbulos rojos), <b>I<sup>B</sup></b> (fabrica el antígeno B) e <b>i</b> (no fabrica ninguno). Las relaciones entre ellos son: I<sup>A</sup> e I<sup>B</sup> son <b>codominantes</b> entre sí, y los dos son <b>dominantes sobre i</b>. Así resultan seis genotipos y cuatro fenotipos:</p><table class="tb"><thead><tr><th>Grupo</th><th>Genotipos posibles</th></tr></thead><tbody><tr><td>A</td><td>I<sup>A</sup>I<sup>A</sup> o I<sup>A</sup>i</td></tr><tr><td>B</td><td>I<sup>B</sup>I<sup>B</sup> o I<sup>B</sup>i</td></tr><tr><td>AB</td><td>I<sup>A</sup>I<sup>B</sup></td></tr><tr><td>0</td><td>ii</td></tr></tbody></table><p>Por ejemplo, dos padres de grupo A y B pueden tener un hijo de grupo 0 si ambos son heterocigotos (I<sup>A</sup>i × I<sup>B</sup>i): 1/4 de probabilidad. Estos grupos son vitales en las <b>transfusiones</b>, porque recibir sangre con un antígeno que no tienes provoca una reacción grave. Antes de las pruebas de ADN, los grupos sanguíneos se usaban para descartar paternidades.</p>`,
      svg: L6.tabla("Grupos sanguíneos ABO: genotipos y antígenos", ["Grupo", "Genotipo", "Antígeno"], [["A", "IᴬIᴬ o Iᴬi", "A"], ["B", "IᴮIᴮ o Iᴮi", "B"], ["AB", "IᴬIᴮ", "A y B"], ["0", "ii", "ninguno"]]),
    },
    {
      html: `<h3>4.3 Cómo resolver un problema de genética</h3><p>Casi todos los problemas de herencia se resuelven con los mismos pasos. Hacerlos siempre en orden evita la mayoría de errores.</p><p>1) <b>Lee y elige las letras</b>. Anota qué alelo es dominante y cuál recesivo, con la misma letra (A: amarillo, a: verde). Si no te lo dicen, dedúcelo: el carácter que aparece en la F1 de dos razas puras, o el que «salta» generaciones y reaparece, suele ser el recesivo.<br>2) <b>Escribe los genotipos de los padres</b>. Un fenotipo recesivo es siempre aa. Si un individuo dominante tiene algún hijo recesivo, o un padre recesivo, es Aa. Si no hay datos, escribe A_ (el hueco puede ser A o a).<br>3) <b>Escribe los gametos</b>: un alelo de cada gen por gameto.<br>4) <b>Haz el cuadro de Punnett</b> o aplica las probabilidades.<br>5) <b>Da el resultado</b> que piden: proporción de genotipos, de fenotipos o probabilidad de un caso concreto, en fracción o en porcentaje.<br>6) <b>Comprueba</b> que las proporciones suman 1 (o 100 %) y que la respuesta tiene sentido.</p><p>Un consejo: los problemas «hacia atrás», en los que te dan los hijos y te piden los padres, se resuelven fijándose en los descendientes recesivos, porque revelan qué alelos tenían que aportar ambos progenitores.</p>`,
      svg: L6.flujo("Seis pasos para resolver un problema de genética", ["1 Letras · 2 Genotipos de los padres", "3 Gametos (un alelo de cada gen)", "4 Cuadro de Punnett o probabilidades", "5 Resultado · 6 Comprobar que suma 1"], "Método para los problemas"),
    },
    {
      html: `<h3>4.4 La teoría cromosómica de la herencia</h3><p>Mendel hablaba de «factores» sin saber qué eran ni dónde estaban. En 1902-1903, <b>Walter Sutton</b> y <b>Theodor Boveri</b> se dieron cuenta de que los cromosomas se comportan en la meiosis exactamente como los factores de Mendel: van en parejas, se separan al formar los gametos y cada pareja se reparte con independencia de las demás. Propusieron que <mark>los genes están en los cromosomas</mark>.</p><p>Thomas H. <b>Morgan</b> lo demostró entre 1910 y 1915 con la <b>mosca del vinagre</b> (<i>Drosophila melanogaster</i>), un organismo ideal: se cría en botellas con plátano, tiene una generación cada dos semanas y solo cuatro parejas de cromosomas. Así nació la <b>teoría cromosómica de la herencia</b>: los genes están situados en los cromosomas, ordenados en fila, cada uno en su locus.</p><p>Morgan descubrió también que algunos genes no cumplen la tercera ley: tienden a heredarse juntos porque están en el <b>mismo cromosoma</b>. Se dice que son <mark>genes ligados</mark>. Solo se separan si hay sobrecruzamiento entre ellos en la meiosis, y cuanto más lejos están, más a menudo ocurre. Midiendo esas frecuencias, su alumno Sturtevant dibujó en 1913 el primer <b>mapa genético</b>. Morgan recibió el Premio Nobel en 1933.</p>`,
      svg: L6.linea("Línea del tiempo de la genética: Mendel, redescubrimiento, Sutton y Boveri, Morgan", [["1865", "Mendel publica"], ["1900", "Redescubrimiento"], ["1903", "Sutton y Boveri"], ["1910", "Morgan y la mosca"], ["1913", "Primer mapa genético"]], "De los guisantes a los cromosomas"),
    },
  ],
  figura: {
    titulo: "El experimento de Mendel en tres generaciones",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Generación parental AA por aa, F1 todos Aa amarillos, F2 tres amarillos y un verde">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="15" font-weight="700" fill="var(--muted)"><text x="24" y="56">P</text><text x="24" y="156">F1</text><text x="24" y="256">F2</text></g>
      ${pea(250, 50, 24, true)}${pea(390, 50, 24, false)}
      <text x="320" y="58" text-anchor="middle" font-size="26" font-weight="700" fill="var(--red)" ${D}>×</text>
      <g ${F} font-size="14" fill="var(--ink)" text-anchor="middle"><text x="250" y="92">AA</text><text x="390" y="92">aa</text></g>
      <path d="M320 98 V 122" stroke="var(--ink)" stroke-width="2.5"/>
      ${pea(250, 150, 24, true)}${pea(390, 150, 24, true)}
      <text x="320" y="158" text-anchor="middle" font-size="26" font-weight="700" fill="var(--red)" ${D}>×</text>
      <g ${F} font-size="14" fill="var(--ink)" text-anchor="middle"><text x="250" y="192">Aa</text><text x="390" y="192">Aa</text></g>
      <path d="M320 198 V 222" stroke="var(--ink)" stroke-width="2.5"/>
      ${[[200, true, "AA"], [280, true, "Aa"], [360, true, "Aa"], [440, false, "aa"]].map(([x, a, g]) => pea(x, 250, 20, a) + `<text x="${x}" y="288" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${g}</text>`).join("")}
      <text x="510" y="256" font-size="15" font-weight="700" fill="var(--ink)" ${F}>3 : 1</text>
      <text x="470" y="156" font-size="13" fill="var(--muted)" ${F}>todos amarillos</text>
    </svg>`,
  },
  video: { id: "LXXK2l1pdv8", titulo: "Las leyes de Mendel y el cuadro de Punnett paso a paso", canal: "A Cierta Ciencia", vistas: 3904729, megusta: 106434, busqueda: "leyes de Mendel" },
  ejemplos: [
    { enunciado: "En el guisante, liso (L) domina sobre rugoso (l). Se cruzan dos plantas lisas heterocigotas. ¿Qué proporciones de genotipos y fenotipos se esperan?", pasos: ["Padres: Ll × Ll. Gametos de cada uno: L y l.", "Cuadro de Punnett: LL, Ll, Ll, ll.", "Genotipos: 1 LL : 2 Ll : 1 ll.", "Fenotipos: LL y Ll son lisos; ll, rugoso."], resultado: "1 LL : 2 Ll : 1 ll; 3 lisas : 1 rugosa (75 % y 25 %)." },
    { enunciado: "Un perro de pelo negro (N, dominante sobre marrón n) se cruza con una perra marrón y tienen 3 cachorros negros y 3 marrones. ¿Cuál es el genotipo del padre?", pasos: ["La madre es marrón: tiene que ser nn y solo da gametos n.", "Han salido cachorros marrones (nn): cada uno recibió una n del padre.", "El padre es negro, así que tiene una N: su genotipo es Nn.", "Comprobación: Nn × nn da 1/2 Nn (negros) y 1/2 nn (marrones)."], resultado: "El padre es Nn (heterocigoto). Es un cruzamiento prueba." },
    { enunciado: "En el dondiego de noche (herencia intermedia), se cruzan dos plantas rosas (RB). ¿Qué flores saldrán?", pasos: ["Gametos de cada planta: R y B.", "Punnett: RR, RB, RB, BB.", "Cada genotipo tiene su fenotipo: RR rojo, RB rosa, BB blanco."], resultado: "1 roja : 2 rosas : 1 blanca (25 %, 50 %, 25 %)." },
    { enunciado: "En los humanos, el pelo rizado (R) domina sobre el liso (r). Una mujer de pelo rizado cuyo padre tenía el pelo liso tiene hijos con un hombre de pelo liso. ¿Qué probabilidad hay de que un hijo tenga el pelo liso?", pasos: ["El hombre de pelo liso es rr.", "La mujer es rizada pero su padre era rr, así que heredó r de él: es Rr.", "Cruce: Rr × rr → gametos R, r × r.", "Hijos: 1/2 Rr (rizado) y 1/2 rr (liso)."], resultado: "1/2, es decir, un 50 % de probabilidad de pelo liso." },
    { enunciado: "En AaBb × aabb (cruzamiento prueba dihíbrido), ¿qué proporción de fenotipos se espera si los genes son independientes?", pasos: ["AaBb forma cuatro gametos: AB, Ab, aB, ab (1/4 cada uno).", "aabb solo forma ab.", "Hijos: AaBb, Aabb, aaBb, aabb, 1/4 cada uno.", "Fenotipos: dominante-dominante, dominante-recesivo, recesivo-dominante y recesivo-recesivo."], resultado: "1 : 1 : 1 : 1, cuatro fenotipos en igual proporción." },
    { enunciado: "Una madre de grupo A tiene un hijo de grupo 0. El padre posible es de grupo B. ¿Puede ser el padre? ¿Qué genotipos tienen?", pasos: ["El hijo es 0: su genotipo es ii, así que recibió i de cada progenitor.", "La madre A debe ser Iᴬi.", "El padre debe tener un alelo i: si es de grupo B, sería Iᴮi.", "Iᴬi × Iᴮi puede dar ii con probabilidad 1/4."], resultado: "Sí puede ser el padre, siempre que sea Iᴮi. La madre es Iᴬi y el hijo ii." },
  ],
  errores: [
    "Escribir los gametos con dos letras del mismo gen (Aa): cada gameto lleva un solo alelo de cada gen.",
    "Deducir que un individuo dominante es AA sin comprobarlo: puede ser Aa.",
    "Confundir proporción de genotipos (1 : 2 : 1) con proporción de fenotipos (3 : 1).",
    "Pensar que si salen 3 hijos dominantes, el cuarto será recesivo seguro: las proporciones son probabilidades.",
    "Aplicar 3 : 1 a la herencia intermedia: en ella la F2 es 1 : 2 : 1 también en los fenotipos.",
    "Pensar que «dominante» significa más frecuente o mejor: dominante solo indica que se manifiesta en el heterocigoto.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Define: gen, alelo, homocigoto y heterocigoto.", sol: "Gen: fragmento de ADN con la información de un carácter. Alelo: cada versión de un gen. Homocigoto: tiene dos alelos iguales (AA o aa). Heterocigoto: tiene dos alelos distintos (Aa)." } },
    { nivel: "básico", ...{ q: "¿Qué gametos produce un individuo AA? ¿Y uno Aa? ¿Y uno AaBb?", sol: "AA: solo A. Aa: A y a (50 % cada uno). AaBb: AB, Ab, aB y ab (25 % cada uno)." } },
    { nivel: "básico", ...{ q: "Cruza AA × aa e indica la F1. Después cruza dos individuos de la F1 e indica la F2.", sol: "F1: todos Aa (fenotipo dominante). F2: 1 AA : 2 Aa : 1 aa; 3 dominantes : 1 recesivo." } },
    { nivel: "básico", ...{ q: "En los humanos, el lóbulo de la oreja suelto (S) domina sobre el pegado (s). Una pareja Ss × Ss, ¿qué probabilidad tiene de tener un hijo con el lóbulo pegado?", sol: "1/4 (25 %)." } },
    { nivel: "básico", ...{ q: "¿Por qué Mendel eligió el guisante? Indica tres razones.", sol: "Es fácil de cultivar, tiene muchas generaciones en poco tiempo y muchas semillas, se puede autopolinizar o cruzar a voluntad y tiene caracteres con dos formas muy claras." } },
    { nivel: "básico", q: "Diferencia entre genotipo y fenotipo con un ejemplo.", sol: "El genotipo es la pareja de alelos (por ejemplo, Aa) y el fenotipo, el rasgo que se observa (semilla amarilla). Dos individuos con distinto genotipo (AA y Aa) pueden tener el mismo fenotipo." },
    { nivel: "básico", q: "Enuncia la primera ley de Mendel.", sol: "Al cruzar dos razas puras que difieren en un carácter, todos los descendientes de la F1 son iguales entre sí en genotipo y fenotipo." },
    { nivel: "básico", q: "Enuncia la segunda ley de Mendel y di en qué momento de la meiosis ocurre.", sol: "Los dos alelos de un gen se separan al formar los gametos y cada gameto recibe solo uno. Ocurre en la anafase I, cuando se separan los cromosomas homólogos." },
    { nivel: "básico", q: "Un guisante de semilla verde (recesivo), ¿qué genotipo tiene? ¿Y uno amarillo?", sol: "El verde es aa seguro. El amarillo puede ser AA o Aa." },
    { nivel: "básico", q: "¿Qué proporción de genotipos y de fenotipos se obtiene en la F2 de un cruce con dominancia completa?", sol: "Genotipos 1 AA : 2 Aa : 1 aa. Fenotipos 3 dominantes : 1 recesivo." },
    { nivel: "básico", q: "Escribe los genotipos posibles de una persona de grupo sanguíneo A, B, AB y 0.", sol: "A: IᴬIᴬ o Iᴬi. B: IᴮIᴮ o Iᴮi. AB: IᴬIᴮ. 0: ii." },
    { nivel: "básico", q: "¿Por qué la mosca del vinagre fue tan útil para Morgan?", sol: "Se cría con facilidad y barato, tiene una generación cada dos semanas, muchos descendientes y solo cuatro parejas de cromosomas." },
    { nivel: "medio", ...{ q: "Una planta alta (A) tiene la mitad de sus hijos bajos al cruzarla con una planta baja. ¿Cuál es su genotipo?", sol: "Aa. Si fuera AA, todos los hijos serían altos." } },
    { nivel: "medio", ...{ q: "Dos ratones negros tienen una cría blanca. Si el negro domina, ¿qué genotipo tienen los padres? ¿Qué probabilidad hay de que la siguiente cría sea negra?", sol: "Los dos son Nn (cada uno aportó una n a la cría blanca). Probabilidad de cría negra: 3/4." } },
    { nivel: "medio", ...{ q: "En una flor con herencia intermedia, ¿qué sale al cruzar una roja (RR) con una rosa (RB)?", sol: "1/2 RR (rojas) y 1/2 RB (rosas)." } },
    { nivel: "medio", ...{ q: "¿Qué proporción fenotípica sale en AaBb × AaBb si los genes se transmiten de forma independiente?", sol: "9 : 3 : 3 : 1 (9 con los dos dominantes, 3 con el primero dominante y el segundo recesivo, 3 al revés y 1 con los dos recesivos)." } },
    { nivel: "medio", q: "En el tomate, el fruto rojo (R) domina sobre el amarillo (r). Se cruzan dos plantas rojas y salen 3 rojas por cada amarilla. ¿Qué genotipo tienen los padres? Haz el cuadro de Punnett.", sol: "Los dos son Rr. Cuadro: RR, Rr, Rr, rr → 3 rojas : 1 amarilla. Si alguno fuera RR no saldrían amarillas." },
    { nivel: "medio", q: "Una pareja tiene ya tres hijos con hoyuelos (dominante). Ambos son heterocigotos. ¿Qué probabilidad hay de que el cuarto no tenga hoyuelos?", sol: "1/4. Cada hijo es un suceso independiente; los hijos anteriores no cambian la probabilidad." },
    { nivel: "medio", q: "¿Qué probabilidad tiene una pareja Aa × Aa de tener dos hijos seguidos aa?", sol: "1/4 · 1/4 = 1/16 (regla del producto)." },
    { nivel: "medio", q: "En el dondiego de noche (rojo RR, blanco BB, rosa RB), ¿qué se obtiene al cruzar una flor rosa con una blanca?", sol: "RB × BB → 1/2 RB (rosas) y 1/2 BB (blancas)." },
    { nivel: "medio", q: "Una madre de grupo AB y un padre de grupo 0 tienen hijos. ¿Qué grupos pueden tener? ¿Puede un hijo ser AB o 0?", sol: "IᴬIᴮ × ii → 1/2 Iᴬi (grupo A) y 1/2 Iᴮi (grupo B). Ningún hijo puede ser AB ni 0." },
    { nivel: "medio", q: "En AaBb × AaBb, calcula la probabilidad de obtener un individuo de fenotipo dominante para los dos caracteres.", sol: "P(A_) = 3/4 y P(B_) = 3/4; ambos: 3/4 · 3/4 = 9/16." },
    { nivel: "avanzado", ...{ q: "¿Qué probabilidad hay de obtener aabb en el cruce AaBb × AaBb?", sol: "Probabilidad de aa = 1/4 y de bb = 1/4; como son independientes, 1/4 · 1/4 = 1/16." } },
    { nivel: "avanzado", q: "En los cobayas, el pelo negro (N) domina sobre el blanco (n) y el pelo corto (C) sobre el largo (c). Se cruza un macho negro de pelo corto con una hembra blanca de pelo largo y nacen crías negras cortas, negras largas, blancas cortas y blancas largas. ¿Qué genotipo tiene el macho?", sol: "La hembra es nncc. Como aparecen crías blancas (nn) y de pelo largo (cc), el macho tiene que aportar n y c: es NnCc. Es un cruzamiento prueba que da 1 : 1 : 1 : 1." },
    { nivel: "avanzado", q: "¿Cuántos tipos de gametos forma un individuo AaBBCcDd? ¿Qué probabilidad tiene un gameto de ser ABcd?", sol: "Hay 3 genes en heterocigosis (A, C, D): 2³ = 8 tipos. P(ABcd) = 1/2 (A) · 1 (B) · 1/2 (c) · 1/2 (d) = 1/8." },
    { nivel: "avanzado", q: "En AaBbCc × AaBbCc, ¿qué probabilidad hay de un descendiente aabbcc? ¿Y de AaBbCc?", sol: "aabbcc: 1/4 · 1/4 · 1/4 = 1/64. AaBbCc: 1/2 · 1/2 · 1/2 = 1/8." },
    { nivel: "avanzado", q: "Mendel obtuvo en la F2 dihíbrida 315 amarillas lisas, 101 amarillas rugosas, 108 verdes lisas y 32 verdes rugosas. Comprueba si se ajusta a 9 : 3 : 3 : 1.", sol: "Total: 556. Esperado: 556 · 9/16 ≈ 313, 556 · 3/16 ≈ 104 (dos veces) y 556 · 1/16 ≈ 35. Los valores observados (315, 101, 108, 32) están muy cerca: se ajusta a 9 : 3 : 3 : 1." },
    { nivel: "avanzado", q: "Dos genes están en el mismo cromosoma, muy próximos. Explica qué proporción esperarías en un cruzamiento prueba AaBb × aabb si el individuo recibió AB de un progenitor y ab del otro.", sol: "Como están ligados y casi nunca hay sobrecruzamiento entre ellos, el individuo forma casi solo gametos AB y ab. Los hijos serán casi todos AaBb y aabb (1 : 1), con muy pocos Aabb o aaBb (recombinantes), en lugar de 1 : 1 : 1 : 1." },
    { nivel: "avanzado", q: "Un criador quiere saber si un labrador negro (N, dominante) es portador del color chocolate (n). Diseña el cruce y explica cómo interpretarlo.", sol: "Cruzarlo con una hembra chocolate (nn). Si aparece algún cachorro chocolate, el macho es Nn. Si todos salen negros en varias camadas grandes, es muy probable que sea NN: con 8 cachorros negros, la probabilidad de que un Nn no dé ninguno chocolate es (1/2)⁸ ≈ 0,4 %." },
    { nivel: "avanzado", q: "¿Por qué la herencia por «mezcla» que se creía antes de Mendel no explica que un nieto tenga ojos azules si sus padres los tienen marrones?", sol: "Si los rasgos se mezclaran como pinturas, el azul se diluiría y no podría reaparecer puro. Mendel demostró que los alelos son partículas que se conservan intactas, se separan en los gametos y pueden volver a juntarse en homocigosis (aa) en una generación posterior." },
  ],
  quiz: [
    { q: "Cada una de las versiones de un gen se llama…", o: ["locus", "alelo", "fenotipo", "cromosoma"], a: 1, e: "Por ejemplo, alelo amarillo y alelo verde." },
    { q: "El fenotipo es…", o: ["la pareja de alelos", "el lugar del gen", "un gameto", "el rasgo que se observa"], a: 3, e: "Depende del genotipo y del ambiente." },
    { q: "Un individuo Bb es…", o: ["heterocigoto", "homocigoto dominante", "homocigoto recesivo", "haploide"], a: 0, e: "Tiene dos alelos distintos." },
    { q: "Si ves un fenotipo recesivo, el genotipo es…", o: ["AA", "Aa", "aa", "AA o Aa"], a: 2, e: "Solo se manifiesta en doble dosis." },
    { q: "¿Por qué eligió Mendel el guisante?", o: ["Porque es un animal", "Porque tiene un solo cromosoma", "Porque es fácil de cultivar y tiene muchas semillas", "Porque no se reproduce"], a: 2, e: "También se autofecunda y se poliniza a mano." },
    { q: "AA × aa da en la F1…", o: ["todos Aa", "todos AA", "1/2 AA y 1/2 aa", "3/4 Aa"], a: 0, e: "Primera ley: uniformidad." },
    { q: "En la F2 de Aa × Aa, la proporción de fenotipos es…", o: ["1 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "3 : 1"], a: 3, e: "Con dominancia completa." },
    { q: "La segregación de los alelos ocurre en…", o: ["la mitosis", "la anafase I de la meiosis", "la fecundación", "la traducción"], a: 1, e: "Se separan los homólogos." },
    { q: "La probabilidad de que dos hijos seguidos de Aa × Aa sean aa es…", o: ["1/16", "1/4", "1/2", "1/8"], a: 0, e: "1/4 · 1/4." },
    { q: "Para el cruzamiento prueba se usa un individuo…", o: ["AA", "Aa", "aa", "AaBb"], a: 2, e: "Homocigoto recesivo." },
    { q: "Si en un cruzamiento prueba sale un hijo recesivo, el progenitor dominante era…", o: ["AA", "Aa", "aa", "no se puede saber"], a: 1, e: "Tuvo que aportar un alelo a." },
    { q: "La proporción 9 : 3 : 3 : 1 aparece en…", o: ["Aa × aa", "AABB × aabb", "Aa × Aa", "AaBb × AaBb"], a: 3, e: "Cruce dihíbrido con transmisión independiente." },
    { q: "¿Cuántos tipos de gametos forma AaBb?", o: ["1", "2", "8", "4"], a: 3, e: "AB, Ab, aB y ab." },
    { q: "En AaBb × AaBb, la probabilidad de aabb es…", o: ["1/4", "1/16", "3/16", "9/16"], a: 1, e: "1/4 · 1/4." },
    { q: "La tercera ley se cumple si los genes…", o: ["están en el mismo cromosoma muy juntos", "son siempre recesivos", "están en cromosomas distintos", "están en las mitocondrias"], a: 2, e: "Si están ligados, tienden a heredarse juntos." },
    { q: "Flores rojas × blancas dan una F1 rosa. Es…", o: ["herencia intermedia", "dominancia completa", "codominancia", "una mutación"], a: 0, e: "El heterocigoto tiene un fenotipo intermedio." },
    { q: "El grupo sanguíneo AB es un ejemplo de…", o: ["herencia intermedia", "codominancia", "recesividad", "ligamiento"], a: 1, e: "Se manifiestan los dos antígenos." },
    { q: "Una persona de grupo 0 tiene genotipo…", o: ["ii", "IᴬIᴮ", "Iᴬi", "Iᴮi"], a: 0, e: "El alelo i es recesivo." },
    { q: "¿Quién demostró que los genes están en los cromosomas usando la mosca del vinagre?", o: ["Mendel", "Darwin", "Watson", "Morgan"], a: 3, e: "Teoría cromosómica de la herencia." },
    { q: "Los genes que tienden a heredarse juntos porque están en el mismo cromosoma son…", o: ["alelos", "codominantes", "genes ligados", "homólogos"], a: 2, e: "Se separan solo por sobrecruzamiento." },
  ],
  examen: [
    { q: "Un heterocigoto también se llama…", o: ["raza pura", "híbrido", "mutante", "haploide"], a: 1, e: "Tiene dos alelos distintos." },
    { q: "En Aa × aa, ¿qué proporción de hijos es aa?", o: ["1/2", "0", "1/4", "3/4"], a: 0, e: "Gametos A, a × a." },
    { q: "La ley de la uniformidad dice que…", o: ["los alelos se separan en los gametos", "los genes se heredan juntos", "la F1 de dos razas puras es toda igual", "la F2 es 9 : 3 : 3 : 1"], a: 2, e: "Primera ley." },
    { q: "Dos padres de ojos marrones (dominante) tienen un hijo de ojos azules. Los padres son…", o: ["AA y AA", "Aa y Aa", "aa y aa", "AA y aa"], a: 1, e: "Cada uno aportó un alelo a." },
    { q: "En la herencia intermedia, la F2 tiene una proporción de fenotipos…", o: ["3 : 1", "1 : 1", "9 : 3 : 3 : 1", "1 : 2 : 1"], a: 3, e: "Cada genotipo tiene su fenotipo." },
    { q: "Padres Iᴬi × Iᴮi pueden tener hijos de grupo…", o: ["solo A o B", "solo AB", "solo 0", "A, B, AB o 0"], a: 3, e: "1/4 de cada uno." },
    { q: "La probabilidad de A_bb en AaBb × AaBb es…", o: ["9/16", "3/16", "1/16", "1/4"], a: 1, e: "3/4 · 1/4." },
    { q: "La teoría cromosómica de la herencia afirma que…", o: ["los caracteres se mezclan", "no hay alelos", "los genes están en los cromosomas", "solo hay herencia materna"], a: 2, e: "Sutton, Boveri y Morgan." },
  ],
  feynman: ["Diferencia entre gen y alelo, y entre genotipo y fenotipo", "Qué significan dominante y recesivo", "Las tres leyes con sus proporciones (100 %, 3:1 y 9:3:3:1)", "Cómo se construye un cuadro de Punnett"],
  mapa: mapa("LEYES DE MENDEL", "var(--leaf)", [
    ["Vocabulario", "gen, alelo, genotipo, fenotipo", "var(--ink)"],
    ["1ª ley: uniformidad", "AA × aa → 100 % Aa", "var(--pen)"],
    ["2ª ley: segregación", "Aa × Aa → 3 : 1", "var(--inf)"],
    ["3ª ley: independencia", "AaBb × AaBb → 9 : 3 : 3 : 1", "var(--red)"],
  ], 240),
  tarjetas: [
    ["¿Qué es un alelo?", "Cada una de las versiones de un gen. Tenemos dos de cada gen, uno de cada progenitor."],
    ["Diferencia entre genotipo y fenotipo", "Genotipo: los alelos que tienes (Aa). Fenotipo: lo que se ve (amarillo)."],
    ["¿Qué es un heterocigoto?", "Un individuo con dos alelos distintos de un gen, por ejemplo Aa."],
    ["Proporción de la F2 en un cruce Aa × Aa", "3 dominantes : 1 recesivo (1 AA : 2 Aa : 1 aa)."],
    ["¿Qué es un cruce prueba?", "Cruzar con un homocigoto recesivo (aa) para saber si un dominante es AA o Aa."],
    ["Herencia intermedia", "El heterocigoto tiene un fenotipo intermedio (rojo × blanco → rosa)."],
    ["Codominancia", "El heterocigoto muestra los dos fenotipos a la vez (grupo AB)."],
    ["Genes ligados", "Genes muy próximos en el mismo cromosoma que tienden a heredarse juntos."],
    ["Regla del producto", "Probabilidad de dos sucesos independientes a la vez: se multiplican (1/2 · 1/2 = 1/4)."],
    ["Codominancia", "El heterocigoto muestra los dos alelos a la vez, como el grupo sanguíneo AB."],
    ["Alelos del sistema ABO", "Iᴬ e Iᴮ codominantes y ambos dominantes sobre i."],
    ["Genes ligados", "Genes del mismo cromosoma que tienden a heredarse juntos."],
  ],
  glosario: [
    ["Carácter", "Rasgo observable de un ser vivo."],
    ["Gen", "Fragmento de ADN con la información de un carácter."],
    ["Locus", "Lugar que ocupa un gen en un cromosoma."],
    ["Alelo", "Cada una de las versiones de un gen."],
    ["Genotipo", "Pareja de alelos de un individuo para un gen."],
    ["Fenotipo", "Rasgo que se manifiesta; depende del genotipo y del ambiente."],
    ["Dominante", "Alelo que se manifiesta aunque solo haya una copia."],
    ["Recesivo", "Alelo que solo se manifiesta en homocigosis (aa)."],
    ["Homocigoto", "Individuo con los dos alelos iguales (AA o aa)."],
    ["Heterocigoto", "Individuo con dos alelos distintos (Aa); también híbrido."],
    ["Línea pura", "Individuos homocigotos que dan siempre descendientes iguales."],
    ["F1 y F2", "Primera y segunda generación filial."],
    ["Cuadro de Punnett", "Tabla para combinar los gametos de dos progenitores."],
    ["Cruzamiento prueba", "Cruce con un homocigoto recesivo para conocer un genotipo."],
    ["Herencia intermedia", "El heterocigoto tiene un fenotipo intermedio."],
    ["Codominancia", "El heterocigoto manifiesta los dos alelos a la vez."],
    ["Alelismo múltiple", "Existencia de más de dos alelos para un gen en la población."],
    ["Genes ligados", "Genes situados en el mismo cromosoma que se heredan juntos."],
  ],
  situacion: {
    titulo: "Consultoría genética para una protectora de animales",
    reto: "Una protectora quiere organizar la reproducción responsable de una colonia de cobayas y os pide un informe. Debéis predecir con las leyes de Mendel los colores y tipos de pelo de las crías y comprobar con una simulación si las proporciones reales se parecen a las esperadas.",
    pasos: [
      "Elegid dos caracteres de las cobayas (pelo negro/blanco y corto/largo) y escribid los alelos dominantes y recesivos.",
      "Escribid los genotipos de cuatro parejas reproductoras y predecid las proporciones de sus crías con cuadros de Punnett o probabilidades.",
      "Simulad 64 cruces con bolsas de fichas de colores (cada bolsa es un progenitor, cada ficha un alelo) y anotad los resultados.",
      "Comparad lo observado con lo esperado en una tabla y un gráfico y explicad las diferencias (azar, tamaño de la muestra).",
      "Diseñad un cruzamiento prueba para saber si un macho negro es portador del blanco.",
    ],
    producto: "Informe de 2 páginas para la protectora con predicciones, resultados de la simulación y recomendaciones.",
    evaluacion: [
      "Planteamiento correcto de genotipos, gametos y proporciones.",
      "Recogida y tratamiento de datos de la simulación (tabla y gráfico).",
      "Interpretación del azar y del tamaño de muestra.",
      "Claridad del informe para un público no especialista.",
    ],
  },
  familias: [
    "Hablad de rasgos de la familia (hoyuelos, lóbulo de la oreja pegado o suelto) y quién los tiene.",
    "Pedidle que os resuelva un cuadro de Punnett con el color de ojos de abuelos y padres.",
    "Lanzad dos monedas 40 veces (cara = A, cruz = a) y contad cuántas veces sale AA, Aa y aa: deberíais acercaros a 1 : 2 : 1.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: "Saberes de «Genética y evolución» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): leyes de Mendel, resolución de problemas de herencia, herencia intermedia, codominancia y alelismo múltiple, teoría cromosómica. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Simular cruces con fichas o monedas y comparar lo observado con lo esperado.",
      "Encuesta de caracteres sencillos en el aula (lóbulo de la oreja, enrollar la lengua) con sus limitaciones.",
      "Banco de problemas graduados resueltos con el método de seis pasos.",
      "Situación de aprendizaje: informe genético para una protectora de animales.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Gregor Mendel, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Gregor_Mendel" },
    { t: "Gregor Mendel, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Gregor_Mendel" },
  ],
  revisado: "2026-11-13",
};
