// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");

// Persona en un árbol genealógico: cuadrado (hombre) o círculo (mujer); afectado relleno, portadora con punto.
function ind(x, y, sexo, estado) {
  const fill = estado === "a" ? "var(--red)" : "var(--card)";
  const forma = sexo === "h" ? `<rect x="${x - 11}" y="${y - 11}" width="22" height="22" fill="${fill}" stroke="var(--ink)" stroke-width="2"/>` : `<circle cx="${x}" cy="${y}" r="11" fill="${fill}" stroke="var(--ink)" stroke-width="2"/>`;
  return forma + (estado === "p" ? `<circle cx="${x}" cy="${y}" r="4" fill="var(--red)"/>` : "");
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "Genética humana",
  minutos: 110,
  objetivos: [
    "Interpretar el cariotipo humano y explicar la determinación del sexo",
    "Distinguir caracteres mendelianos y poligénicos en la especie humana",
    "Resolver problemas de herencia ligada al sexo (daltonismo, hemofilia)",
    "Resolver problemas de grupos sanguíneos ABO y Rh y aplicarlos a las transfusiones",
    "Conocer enfermedades genéticas y alteraciones cromosómicas e interpretar árboles genealógicos",
    "Valorar el diagnóstico y el consejo genético y debatir sus implicaciones éticas",
  ],
  claves: ["cariotipo", "cromosomas sexuales", "herencia ligada al sexo", "codominancia", "mutación", "árbol genealógico"],
  pregunta: {
    texto: "El daltonismo afecta a 1 de cada 12 hombres, pero solo a 1 de cada 200 mujeres. Si es un gen, ¿por qué no le toca a todos por igual?",
    respuesta: "Porque el gen está en el <mark>cromosoma X</mark>. Los hombres (XY) tienen un solo X: si ese X lleva el gen, son daltónicos. Las mujeres (XX) tienen dos: necesitan <b>el gen en los dos X</b> para serlo. Con uno solo son <b>portadoras</b>, ven bien pero pueden transmitirlo.",
  },
  lectura: {
    titulo: "La enfermedad de los reyes",
    html: `<p>La reina Victoria de Inglaterra tuvo nueve hijos. Uno de ellos, el príncipe Leopoldo, sangraba durante horas por un simple golpe y murió a los 30 años tras una caída. Dos de sus hijas, Alicia y Beatriz, parecían perfectamente sanas, pero se casaron con príncipes europeos y, en pocas décadas, la misma enfermedad apareció en las familias reales de España, Alemania y Rusia. El hijo del último zar, Alexis, la padecía; y también dos hijos de Alfonso XIII de España.</p>
<p>La enfermedad era la <b>hemofilia</b>, y su recorrido por las cortes de Europa es uno de los árboles genealógicos más famosos de la historia. ¿Por qué la padecían casi solo varones? ¿Cómo la transmitían mujeres que no estaban enfermas?</p>
<p>La respuesta está en los cromosomas sexuales. En este tema aplicarás las leyes de Mendel a nuestra especie: entenderás por qué hay más hombres daltónicos, qué sangre puedes recibir en una transfusión, cómo se lee un árbol genealógico y qué puede hacer hoy la medicina para diagnosticar y prevenir enfermedades hereditarias.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 El cariotipo humano y la determinación del sexo</h3><p>El <mark>cariotipo</mark> es el conjunto de cromosomas de una persona, fotografiados durante la división celular y ordenados por parejas según su tamaño y la posición del centrómero. Las células humanas tienen <b>46 cromosomas</b> en <b>23 parejas</b>: 22 parejas de <b>autosomas</b>, numeradas del 1 (el más grande) al 22, y una pareja de <b>cromosomas sexuales</b>, que en las mujeres es <b>XX</b> y en los hombres <b>XY</b>. El cromosoma X es mediano y tiene más de 800 genes; el Y es pequeño y tiene unos 70.</p><p>Esto explica la <mark>determinación del sexo</mark>. En la meiosis, todos los óvulos reciben un cromosoma X. Los espermatozoides, en cambio, son de dos tipos en igual proporción: la mitad lleva X y la mitad lleva Y. Si el óvulo es fecundado por un espermatozoide X, el cigoto será XX (niña); si lo fecunda uno Y, será XY (niño). Por tanto, <b>el sexo lo determina el espermatozoide</b>, y la probabilidad es del 50 % en cada embarazo.</p><p>En el cromosoma Y hay un gen clave, el <b>SRY</b>, que hacia la séptima semana del embarazo activa la formación de los testículos. No todos los animales determinan el sexo así: en las aves las hembras son ZW y los machos ZZ, y en muchas tortugas lo decide la temperatura de incubación de los huevos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuadro de cruce: madre XX y padre XY dan 50 por ciento de hijas XX y 50 por ciento de hijos XY">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="150" y="30" font-size="13" fill="var(--pen)">padre</text><text x="40" y="104" font-size="13" fill="var(--red)">madre</text>
          <text x="124" y="54" font-size="16" fill="var(--pen)">X</text><text x="190" y="54" font-size="16" fill="var(--pen)">Y</text>
          <text x="76" y="94" font-size="16" fill="var(--red)">X</text><text x="76" y="144" font-size="16" fill="var(--red)">X</text>
          ${[0, 1].map((i) => [0, 1].map((j) => `<rect x="${92 + j * 66}" y="${66 + i * 50}" width="62" height="46" rx="6" fill="${j ? "var(--pen)" : "var(--red)"}" opacity=".18"/><text x="${123 + j * 66}" y="${96 + i * 50}" font-size="16" fill="var(--ink)">X${j ? "Y" : "X"}</text>`).join("")).join("")}
        </g>
      </svg>`,
    },
    {
      html: `<h3>1.2 Cómo se estudia la herencia humana</h3><p>Estudiar la genética de nuestra especie es más difícil que estudiar guisantes o moscas. No se pueden hacer cruces experimentales, cada pareja tiene pocos hijos y cada generación tarda unos 25-30 años. Por eso los genetistas usan otros métodos:</p><p>• Los <mark>árboles genealógicos</mark>: siguen un carácter a lo largo de varias generaciones de una familia para deducir cómo se hereda.<br>• Los <b>estudios de gemelos</b>: los gemelos idénticos (univitelinos) tienen el mismo ADN, y los mellizos (bivitelinos) comparten la mitad, como cualquier pareja de hermanos. Comparando lo que se parecen unos y otros se estima cuánto influyen los genes y cuánto el ambiente en un carácter.<br>• Los <b>estudios de poblaciones</b>: comparan la frecuencia de un rasgo o una enfermedad en distintos grupos humanos.<br>• El <b>análisis del ADN</b>: hoy se puede leer directamente el genoma de una persona y buscar las variantes de un gen.</p><p>Gracias a estos métodos se han identificado miles de genes relacionados con enfermedades. La base de datos internacional OMIM recoge más de 7.000 enfermedades de origen genético conocido, la mayoría poco frecuentes, que en conjunto afectan a alrededor de un 6 % de la población.</p>`,
      svg: L6.radial("Métodos para estudiar la herencia humana: árboles, gemelos, poblaciones y ADN", "Herencia humana", ["Árboles genealógicos", "Estudios de gemelos", "Estudios de poblaciones", "Análisis del ADN"], "var(--pen)"),
    },
    {
      html: `<h3>1.3 Caracteres mendelianos y poligénicos</h3><p>Algunos caracteres humanos dependen de <b>un solo gen</b> con dos alelos y siguen las leyes de Mendel: se llaman <mark>caracteres mendelianos</mark> o monogénicos. Se suelen poner como ejemplo el lóbulo de la oreja suelto (dominante) o pegado, los hoyuelos en las mejillas, la capacidad de notar el sabor amargo de la feniltiocarbamida o el tipo de cerumen. Muchas enfermedades hereditarias también son monogénicas.</p><p>Sin embargo, la mayoría de nuestros rasgos son <mark>poligénicos</mark>: dependen de <b>muchos genes</b> a la vez, cada uno con un pequeño efecto que se suma a los demás. La altura, el color de la piel, el color de los ojos o la forma de la cara son poligénicos. Por eso no tienen dos o tres formas, sino una <b>variación continua</b>: si representas la altura de los alumnos de un instituto, obtienes una curva en forma de campana, con muchos valores intermedios y pocos extremos.</p><p>Además, muchos caracteres son <b>multifactoriales</b>: el ambiente influye mucho. La altura depende de la alimentación y la salud en la infancia (la altura media en España ha subido más de 10 cm en un siglo, sin que cambien los genes), y el riesgo de diabetes tipo 2 o de enfermedades del corazón depende de los genes, pero también de la dieta, el ejercicio y el tabaco.</p>`,
      svg: L6.compara("Caracteres mendelianos frente a poligénicos", ["Mendeliano", "var(--leaf)", ["un solo gen", "2 o 3 fenotipos", "proporciones 3 : 1", "lóbulo, hoyuelos"]], ["Poligénico", "var(--sun)", ["muchos genes", "variación continua", "curva de campana", "altura, piel, ojos"]]),
    },
    {
      html: `<h3>2.1 La herencia ligada al sexo</h3><p>Los cromosomas X e Y son muy distintos: el X tiene cientos de genes que <mark>no tienen pareja en el Y</mark>. Los caracteres determinados por genes del cromosoma X siguen una <b>herencia ligada al sexo</b>, distinta en hombres y mujeres.</p><p>Para escribirlos se pone el cromosoma con el alelo como superíndice: X<sup>D</sup> (alelo normal, dominante) y X<sup>d</sup> (alelo recesivo). Una <b>mujer</b> tiene dos cromosomas X, así que puede ser X<sup>D</sup>X<sup>D</sup> (sana), X<sup>D</sup>X<sup>d</sup> (<mark>portadora</mark>: sana, pero puede transmitir el alelo) o X<sup>d</sup>X<sup>d</sup> (afectada). Un <b>hombre</b> tiene un solo X, de modo que <b>basta un alelo recesivo para que lo manifieste</b>: X<sup>D</sup>Y (sano) o X<sup>d</sup>Y (afectado). Se dice que el hombre es <b>hemicigoto</b> para esos genes.</p><p>Hay tres reglas útiles para resolver problemas:</p><p>1) Los <b>hijos varones reciben el X de su madre</b> y el Y de su padre; por eso un padre afectado nunca transmite la enfermedad a sus hijos varones.<br>2) Las <b>hijas reciben un X de cada progenitor</b>; todas las hijas de un padre afectado serán, como mínimo, portadoras.<br>3) Las enfermedades recesivas ligadas al X son <mark>mucho más frecuentes en hombres</mark>: una mujer necesita heredar dos alelos recesivos, uno de cada progenitor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cruce de madre portadora y padre sano: hija sana, hija portadora, hijo sano e hijo daltónico">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${ind(90, 34, "m", "p")}${ind(170, 34, "h", "s")}<path d="M101 34 H 159 M130 34 V 70 M50 70 H 210" stroke="var(--ink)" stroke-width="2" fill="none"/>
        ${[[50, "m", "s", "X X"], [103, "m", "p", "X Xᵈ"], [157, "h", "s", "X Y"], [210, "h", "a", "Xᵈ Y"]].map(([x, s, e, g]) => `<path d="M${x} 70 V 92" stroke="var(--ink)" stroke-width="2"/>${ind(x, 104, s, e)}<text x="${x}" y="138" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${g}</text>`).join("")}
        <g ${F} font-size="10" text-anchor="middle" fill="var(--muted)"><text x="50" y="154">sana</text><text x="103" y="154">portadora</text><text x="157" y="154">sano</text><text x="210" y="154" fill="var(--red)">daltónico</text></g>
      </svg>`,
    },
    {
      html: `<h3>2.2 Daltonismo y hemofilia</h3><p>El <mark>daltonismo</mark> es la dificultad para distinguir algunos colores, sobre todo el rojo y el verde. Se debe a alelos recesivos de genes del cromosoma X que codifican los pigmentos de los conos de la retina. Afecta a un 8 % de los hombres y a menos de un 0,5 % de las mujeres. Se diagnostica con las láminas de Ishihara, círculos de puntos de colores con un número escondido. Toma su nombre del químico John Dalton, que lo describió en sí mismo en 1794.</p><p>La <mark>hemofilia</mark> es una enfermedad en la que la sangre no coagula bien porque falta un factor de coagulación (el VIII en la hemofilia A, el IX en la B). Las personas afectadas sufren hemorragias prolongadas y sangrados internos en las articulaciones. Es también recesiva y ligada al X, y afecta a unos 1 de cada 5.000 varones. Hoy se trata con inyecciones del factor que falta, fabricado por biotecnología, y los pacientes llevan una vida casi normal.</p><p>El caso más famoso es el de la <b>reina Victoria</b>, portadora (X<sup>H</sup>X<sup>h</sup>). Su hijo Leopoldo fue hemofílico (X<sup>h</sup>Y), y dos hijas portadoras extendieron el alelo a las casas reales de Rusia y España. Un ejemplo de cruce: madre portadora × padre sano → <b>1/2 de las hijas portadoras y 1/2 de los hijos afectados</b>.</p>`,
      svg: L6.tabla("Cruce de madre portadora y padre sano en la herencia ligada al X", ["", "Xᴴ (madre)", "Xʰ (madre)"], [["Xᴴ (padre)", "XᴴXᴴ hija sana", "XᴴXʰ portadora"], ["Y (padre)", "XᴴY hijo sano", "XʰY hemofílico"]]),
    },
    {
      html: `<h3>2.3 Herencia ligada al Y e influida por el sexo</h3><p>El cromosoma Y tiene pocos genes, y los que tiene se transmiten <mark>solo de padres a hijos varones</mark>, generación tras generación, sin pasar nunca por las mujeres: es la <b>herencia holándrica</b>. Además del gen SRY, que determina el desarrollo masculino, hay genes relacionados con la formación de espermatozoides. Como el Y se hereda casi sin cambios por línea paterna, se usa para estudiar genealogías y migraciones humanas antiguas. Del mismo modo, el ADN de las <b>mitocondrias</b> se hereda solo de la madre, porque el espermatozoide no aporta mitocondrias al cigoto.</p><p>No hay que confundir la herencia ligada al sexo con la <mark>herencia influida por el sexo</mark>. En esta, el gen está en un <b>autosoma</b>, pero se expresa de forma distinta en hombres y mujeres por efecto de las hormonas. El ejemplo típico es la <b>calvicie común</b> (alopecia androgénica): el alelo de la calvicie se comporta como dominante en los hombres y como recesivo en las mujeres. Un hombre heterocigoto se quedará calvo, mientras que una mujer necesita dos copias, y aun así suele tener solo un aclarado del pelo.</p><p>También hay caracteres <b>limitados a un sexo</b>: los genes están en los dos sexos, pero solo se expresan en uno, como los relacionados con la producción de leche o con la barba.</p>`,
      svg: L6.compara("Herencia ligada al cromosoma Y frente a herencia influida por el sexo", ["Ligada al Y", "var(--pen)", ["gen en el cromosoma Y", "de padre a hijo varón", "nunca en mujeres", "ej.: gen SRY"]], ["Influida por sexo", "var(--sun)", ["gen en un autosoma", "hormonas cambian", "su expresión", "ej.: calvicie"]]),
    },
    {
      html: `<h3>3.1 Los grupos sanguíneos ABO</h3><p>Los glóbulos rojos llevan en su membrana unas moléculas, los <b>antígenos</b>, que determinan el grupo sanguíneo. En el <mark>sistema ABO</mark> hay dos antígenos posibles, A y B, controlados por un gen con <b>tres alelos</b> (alelismo múltiple): <b>I<sup>A</sup></b> (produce antígeno A), <b>I<sup>B</sup></b> (produce antígeno B) e <b>i</b> (no produce ninguno).</p><p>I<sup>A</sup> e I<sup>B</sup> son <mark>codominantes</mark>: si están juntos, se expresan los dos (grupo AB). Ambos son <b>dominantes sobre i</b>. Por eso el grupo A puede ser I<sup>A</sup>I<sup>A</sup> o I<sup>A</sup>i; el B, I<sup>B</sup>I<sup>B</sup> o I<sup>B</sup>i; el AB solo I<sup>A</sup>I<sup>B</sup>; y el 0 solo ii.</p><p>Además, en el plasma tenemos de forma natural <b>anticuerpos</b> contra los antígenos que no tenemos: una persona de grupo A tiene anticuerpos anti-B; una de grupo B, anti-A; una de grupo 0, los dos; y una AB, ninguno. Si se mezcla sangre incompatible, los anticuerpos se unen a los glóbulos rojos y los aglutinan (forman grumos), lo que puede ser mortal.</p><p>En España, el grupo más frecuente es el A (alrededor del 45 %), seguido del 0 (alrededor del 42 %), el B (alrededor del 9 %) y el AB (alrededor del 4 %). Los grupos fueron descubiertos en 1901 por Karl Landsteiner, Nobel de Medicina en 1930.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla de genotipos para cada grupo sanguíneo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["A", "IᴬIᴬ · Iᴬi", "var(--red)"], ["B", "IᴮIᴮ · Iᴮi", "var(--pen)"], ["AB", "IᴬIᴮ", "var(--inf)"], ["O", "ii", "var(--leaf)"]].map(([g, t, c], i) => `<circle cx="44" cy="${30 + i * 38}" r="15" fill="${c}"/><text x="44" y="${35 + i * 38}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>${g}</text><text x="76" y="${36 + i * 38}" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>3.2 El factor Rh y las transfusiones</h3><p>Además del sistema ABO hay otro muy importante, el <mark>factor Rh</mark>. Las personas que tienen el antígeno D en sus glóbulos rojos son <b>Rh+</b>, y las que no lo tienen, <b>Rh−</b>. Simplificando, depende de un gen con un alelo dominante (D, Rh+) y uno recesivo (d, Rh−). Así, una persona Rh− es dd, y una Rh+ puede ser DD o Dd. Alrededor del 85 % de los españoles son Rh+.</p><p>Al combinar los dos sistemas se obtienen los ocho grupos: A+, A−, B+, B−, AB+, AB−, 0+ y 0−. En las <mark>transfusiones</mark>, lo esencial es que el donante no aporte antígenos que el receptor no tenga. Por eso la sangre <b>0−</b>, sin antígenos A, B ni D, se considera <b>donante universal</b> (se usa en urgencias cuando no da tiempo a analizar), y el <b>AB+</b>, que tiene los tres antígenos y no fabrica anticuerpos contra ellos, es <b>receptor universal</b>.</p><p>El factor Rh es importante en el embarazo. Si una madre Rh− espera un bebé Rh+ (que heredó D del padre), en el parto puede pasar algo de sangre del bebé a la madre y ella fabrica anticuerpos anti-Rh. En un segundo embarazo de un bebé Rh+, esos anticuerpos atacarían sus glóbulos rojos (<b>enfermedad hemolítica del recién nacido</b>). Hoy se evita con una inyección de anticuerpos anti-D a la madre.</p>`,
      svg: L6.tabla("A quién puede donar sangre cada grupo del sistema ABO", ["Grupo", "Puede donar a", "Recibe de"], [["0", "0, A, B, AB", "0"], ["A", "A, AB", "A, 0"], ["B", "B, AB", "B, 0"], ["AB", "AB", "todos"]]),
      video: { id: "HqwsNO2dwak", titulo: "Cómo se heredan los grupos sanguíneos. Factor Rh", canal: "Arriba la Ciencia", vistas: 654699 },
    },
    {
      html: `<h3>4.1 Enfermedades por mutaciones de un gen</h3><p>Muchas enfermedades hereditarias se deben a una <b>mutación en un solo gen</b>. Según dónde esté el gen y cómo sea el alelo, se heredan de formas distintas:</p><p>• <b>Autosómicas recesivas</b>: solo se manifiestan en homocigotos (aa). Los padres suelen ser <mark>portadores sanos</mark> (Aa), y cada hijo tiene 1/4 de probabilidad de estar afectado. Son ejemplos la <b>fibrosis quística</b> (moco espeso en pulmones y páncreas; es la más frecuente en población europea, y 1 de cada 25 personas es portadora), la <b>anemia falciforme</b> (glóbulos rojos en forma de hoz) y la <b>fenilcetonuria</b> (no se puede degradar el aminoácido fenilalanina; se detecta con la prueba del talón al nacer y se trata con una dieta especial).<br>• <b>Autosómicas dominantes</b>: basta un alelo para padecerlas, y un progenitor afectado heterocigoto tiene 1/2 de probabilidad de transmitirla a cada hijo. Ejemplos: la <b>enfermedad de Huntington</b>, que causa un deterioro neurológico a partir de los 40 años, y la <b>acondroplasia</b>, la forma más común de enanismo.<br>• <b>Ligadas al X</b>: daltonismo, hemofilia o distrofia muscular de Duchenne.</p><p>Curiosamente, ser portador de la anemia falciforme protege en parte contra la malaria. Por eso este alelo es frecuente en zonas de África donde esa enfermedad es común.</p>`,
      svg: L6.tabla("Tipos de herencia de enfermedades genéticas con ejemplos", ["Herencia", "Ejemplo"], [["Autosómica recesiva", "fibrosis quística"], ["Autosómica dominante", "Huntington"], ["Ligada al X", "hemofilia, daltonismo"], ["Cromosómica", "síndrome de Down"]]),
    },
    {
      html: `<h3>4.2 Alteraciones en el número de cromosomas</h3><p>Otras enfermedades no se deben a un gen, sino a <b>cromosomas de más o de menos</b>. Casi siempre se originan por una <mark>no disyunción</mark> en la meiosis: una pareja de cromosomas (o dos cromátidas) no se separa, y se forma un gameto con 24 o con 22 cromosomas. Si participa en la fecundación, el embrión tendrá 47 o 45 cromosomas. Normalmente <b>no se heredan</b> de los padres, que tienen cariotipos normales: son un accidente al formarse el óvulo o el espermatozoide.</p><p>• <b>Síndrome de Down</b> (trisomía 21, 47 cromosomas): la más frecuente, alrededor de 1 de cada 700 nacimientos. Produce discapacidad intelectual de grado variable, rasgos faciales característicos y, a veces, problemas cardíacos. Con apoyo educativo y médico, muchas personas con síndrome de Down estudian, trabajan y viven de forma autónoma. Su probabilidad aumenta con la edad de la madre.<br>• <b>Síndrome de Edwards</b> (trisomía 18) y <b>de Patau</b> (trisomía 13): mucho más graves; pocos bebés sobreviven al primer año.<br>• <b>Síndrome de Turner</b> (45, X0): mujeres de baja estatura, generalmente estériles.<br>• <b>Síndrome de Klinefelter</b> (47, XXY): hombres altos, con fertilidad reducida.</p><p>También hay alteraciones de la <b>estructura</b> de los cromosomas: la pérdida de un trozo del cromosoma 5 causa el síndrome del maullido de gato.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pareja de cromosomas normal y trisomía con tres cromosomas 21">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[50, 2, "normal"], [170, 3, "trisomía 21"]].map(([x, n, t]) => Array.from({ length: n }, (_, i) => `<rect x="${x + i * 22}" y="50" width="14" height="60" rx="7" fill="${i === 2 ? "var(--red)" : "var(--pen)"}"/><circle cx="${x + 7 + i * 22}" cy="70" r="4" fill="var(--paper)"/>`).join("") + `<text x="${x + (n * 22 - 8) / 2}" y="138" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
      video: { id: "TEXcnUF3qZY", titulo: "¿Qué es el síndrome de Down?", canal: "TEDI1419", vistas: 1058155 },
    },
    {
      html: `<h3>4.3 Los árboles genealógicos</h3><p>Un <mark>árbol genealógico</mark> o pedigrí muestra cómo se transmite un carácter en una familia a lo largo de varias generaciones. Tiene unos símbolos fijos: los <b>cuadrados</b> son hombres y los <b>círculos</b>, mujeres; los símbolos <b>rellenos</b> indican personas afectadas; una línea horizontal une a la pareja, y de ella baja una línea vertical hacia los hijos, ordenados de mayor a menor. Las generaciones se numeran con números romanos (I, II, III) y los individuos de cada una con números árabes.</p><p>Para deducir el tipo de herencia, busca estas pistas:</p><p>• Si <b>dos padres sanos tienen un hijo afectado</b>, el carácter es <mark>recesivo</mark>: los dos padres eran portadores.<br>• Si <b>dos padres afectados tienen un hijo sano</b>, el carácter es <mark>dominante</mark>: los dos padres eran heterocigotos.<br>• En un carácter dominante, todo afectado tiene al menos un progenitor afectado: el carácter no se salta generaciones.<br>• Si casi todos los afectados son varones y lo heredan de madres sanas, sospecha herencia <b>ligada al X</b>.</p><p>Después se escriben los genotipos de cada persona: primero los seguros (los recesivos son aa) y luego los que se deducen a partir de padres e hijos. Los árboles son la herramienta básica del consejo genético.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol genealógico de tres generaciones con un carácter recesivo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g stroke="var(--ink)" stroke-width="2" fill="none"><path d="M101 30 H 159 M130 30 V 60 M80 60 H 180 M80 60 V 78 M180 60 V 78 M191 90 H 219 M205 90 V 120 M180 120 H 230 M180 120 V 136 M230 120 V 136"/></g>
        ${ind(90, 30, "h", "s")}${ind(170, 30, "m", "s")}${ind(80, 90, "m", "s")}${ind(180, 90, "h", "s")}${ind(230, 90, "m", "s")}${ind(180, 148, "h", "a")}${ind(230, 148, "m", "s")}
        <g ${F} font-size="11" font-weight="700" fill="var(--muted)"><text x="10" y="34">I</text><text x="10" y="94">II</text><text x="10" y="152">III</text></g>
        <text x="110" y="152" font-size="11" font-weight="700" fill="var(--red)" ${F}>afectado →</text>
      </svg>`,
    },
    {
      html: `<h3>4.4 Diagnóstico y consejo genético</h3><p>Hoy se pueden detectar muchas enfermedades genéticas en distintos momentos de la vida:</p><p>• <b>Antes del embarazo</b>: análisis de portadores en parejas con antecedentes familiares. Con la fecundación in vitro se puede hacer un <b>diagnóstico genético preimplantacional</b>, analizando una célula de los embriones antes de implantarlos.<br>• <b>Durante el embarazo</b> (<mark>diagnóstico prenatal</mark>): ecografías, un análisis de sangre de la madre que detecta fragmentos de ADN fetal y, si hace falta, la <b>amniocentesis</b> (se extrae líquido amniótico con células del feto) o la biopsia de corion (placenta) para estudiar el cariotipo y genes concretos.<br>• <b>Al nacer</b>: la <b>prueba del talón</b>, que en España detecta una docena de enfermedades tratables, como la fenilcetonuria o el hipotiroidismo congénito.<br>• <b>En adultos</b>: análisis de genes de riesgo, como los BRCA1 y BRCA2, relacionados con el cáncer de mama y de ovario.</p><p>El <mark>consejo genético</mark> lo dan profesionales sanitarios especializados. Estudian el árbol genealógico y los análisis de una familia, calculan las probabilidades de transmitir una enfermedad y explican las opciones de forma clara y respetuosa, para que las personas tomen sus propias decisiones con información.</p>`,
      svg: L6.linea("Momentos del diagnóstico genético: antes del embarazo, durante, al nacer y en la edad adulta", [["Antes", "portadores y embriones"], ["Embarazo", "ecografía y ADN fetal"], ["Al nacer", "prueba del talón"], ["Adulto", "genes de riesgo"]], "¿Cuándo se diagnostica?"),
    },
    {
      html: `<h3>4.5 Genética, ética y sociedad</h3><p>El conocimiento genético plantea preguntas que no son solo científicas, sino también éticas y legales.</p><p>• <b>Privacidad</b>: los datos genéticos son de los más personales que existen, y además revelan información de tus familiares. ¿Quién puede acceder a ellos? En la Unión Europea están especialmente protegidos, y en España la ley prohíbe discriminar por características genéticas.<br>• <b>Tests comerciales</b>: hay empresas que analizan tu ADN a partir de saliva para conocer tus antepasados o tus riesgos de salud. Sus resultados pueden ser poco fiables o difíciles de interpretar sin un profesional, y conviene leer bien qué hacen con los datos.<br>• <b>Derecho a no saber</b>: una persona puede preferir no conocer si tiene una enfermedad grave sin tratamiento, como la de Huntington.<br>• <b>Igualdad y diversidad</b>: a principios del siglo XX, la <mark>eugenesia</mark> pretendió «mejorar» la especie humana impidiendo tener hijos a ciertas personas; en varios países se esterilizó a miles de personas a la fuerza. Hoy se rechaza por completo, y se defiende la dignidad y los derechos de todas las personas, también de las que tienen una discapacidad.</p><p>Para debatir estos temas hay que separar los <b>hechos científicos</b> de las <b>opiniones y valores</b>, y escuchar a las personas afectadas.</p>`,
      svg: L6.radial("Debates éticos de la genética: privacidad, tests comerciales, derecho a no saber y no discriminación", "Bioética", ["Privacidad de los datos", "Tests comerciales", "Derecho a no saber", "No discriminación"], "var(--inf)"),
    },
  ],
  figura: {
    titulo: "Tipos de herencia en humanos",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Herencia autosómica dominante, autosómica recesiva y ligada al X con un ejemplo">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Autosómica dominante", "basta un alelo", "aparece en cada generación", "ej.: acondroplasia", "var(--red)"], ["Autosómica recesiva", "hacen falta dos alelos", "puede saltar generaciones", "ej.: fibrosis quística", "var(--pen)"], ["Ligada al X", "gen en el cromosoma X", "más frecuente en hombres", "ej.: daltonismo, hemofilia", "var(--leaf)"]]
        .map(([n, a, b, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="58" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="104" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="128" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="180" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "OJVHD1AruwU", titulo: "Ejercicios de genética de hemofilia y daltonismo", canal: "unProfesor", vistas: 261431, megusta: 0, busqueda: "herencia ligada al sexo genética humana" },
  ejemplos: [
    { enunciado: "Un hombre de grupo A cuyo padre era O tiene hijos con una mujer de grupo B cuya madre era O. ¿Qué grupos pueden tener sus hijos?", pasos: ["El hombre es A y recibió i de su padre O: es Iᴬi. La mujer es B y recibió i de su madre: es Iᴮi.", "Gametos: él da Iᴬ o i; ella, Iᴮ o i.", "Punnett: IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B), ii (O)."], resultado: "Los cuatro grupos, A, B, AB y O, con un 25 % de probabilidad cada uno." },
    { enunciado: "Una mujer portadora de daltonismo (XᴰXᵈ) tiene hijos con un hombre de visión normal (XᴰY). ¿Qué probabilidades hay?", pasos: ["Gametos de la madre: Xᴰ y Xᵈ. Del padre: Xᴰ e Y.", "Hijas: XᴰXᴰ (normal) y XᴰXᵈ (portadora). Ninguna daltónica.", "Hijos: XᴰY (normal) y XᵈY (daltónico)."], resultado: "Las hijas, 50 % normales y 50 % portadoras; los hijos, 50 % normales y 50 % daltónicos." },
    { enunciado: "Un cariotipo muestra 47 cromosomas con tres cromosomas 21 y cromosomas sexuales XY. Interprétalo.", pasos: ["Hay un cromosoma de más (47 en vez de 46).", "Está en la pareja 21: es una trisomía 21.", "Los cromosomas sexuales son XY: es un varón."], resultado: "Varón con síndrome de Down (47, XY, +21)." },
    { enunciado: "Una pareja sana tiene un hijo con fibrosis quística (autosómica recesiva). ¿Qué probabilidad hay de que el siguiente hijo también la tenga? ¿Y de que sea portador?", pasos: ["El hijo afectado es ff, así que cada progenitor le dio un alelo f.", "Los padres son sanos: los dos son Ff (portadores).", "Ff × Ff → 1/4 FF, 1/2 Ff, 1/4 ff.", "Cada hijo es independiente de los anteriores."], resultado: "1/4 (25 %) de estar afectado y 1/2 (50 %) de ser portador sano." },
    { enunciado: "Una mujer de visión normal cuyo padre era daltónico se casa con un hombre daltónico. ¿Qué probabilidad hay de que tengan una hija daltónica?", pasos: ["El padre de la mujer era XᵈY y le dio su X: la mujer es XᴰXᵈ (portadora).", "El hombre es XᵈY.", "Hijas: reciben Xᵈ del padre y Xᴰ o Xᵈ de la madre → 1/2 XᴰXᵈ, 1/2 XᵈXᵈ.", "Probabilidad de hija daltónica entre todos los hijos = 1/2 (hija) · 1/2 = 1/4."], resultado: "Entre las hijas, la mitad serán daltónicas; respecto al total de hijos, 1/4." },
    { enunciado: "Una madre 0 Rh− (ii dd) y un padre A Rh+ heterocigoto para ambos genes (Iᴬi Dd) tienen un hijo. ¿Qué probabilidad hay de que sea 0 Rh−?", pasos: ["Grupo: ii × Iᴬi → 1/2 Iᴬi (A) y 1/2 ii (0).", "Rh: dd × Dd → 1/2 Dd (Rh+) y 1/2 dd (Rh−).", "Los dos genes se heredan de forma independiente.", "P(0 y Rh−) = 1/2 · 1/2."], resultado: "1/4: un 25 % de probabilidad de que el hijo sea 0 Rh−." },
  ],
  errores: [
    "Pensar que una persona de grupo A siempre es IᴬIᴬ: también puede ser Iᴬi.",
    "Creer que el padre transmite el cromosoma X a sus hijos varones: les transmite el Y.",
    "Decir que las mujeres no pueden ser daltónicas: pueden, si son XᵈXᵈ, aunque es raro.",
    "Pensar que todos los caracteres dependen de un solo gen: la mayoría son poligénicos y dependen del ambiente.",
    "Creer que el síndrome de Down se hereda siempre de los padres: casi siempre es un error al formarse el gameto.",
    "Confundir herencia ligada al sexo (gen en el cromosoma X) con herencia influida por el sexo (gen en un autosoma, como la calvicie).",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "¿Cuántos autosomas y cuántos cromosomas sexuales tiene una célula humana?", sol: "44 autosomas (22 parejas) y 2 cromosomas sexuales (XX o XY)." } },
    { nivel: "básico", ...{ q: "¿Qué genotipos puede tener una persona del grupo B? ¿Y una del grupo O?", sol: "B: IᴮIᴮ o Iᴮi. O: solo ii." } },
    { nivel: "básico", ...{ q: "¿Por qué el daltonismo es más frecuente en hombres?", sol: "Porque tienen un solo cromosoma X: basta un alelo recesivo para padecerlo, mientras que las mujeres necesitan dos." } },
    { nivel: "básico", ...{ q: "¿Qué es una trisomía? Pon un ejemplo.", sol: "Tener tres copias de un cromosoma en lugar de dos. Ejemplo: la trisomía 21 o síndrome de Down." } },
    { nivel: "básico", ...{ q: "¿Qué grupo sanguíneo es donante universal y cuál receptor universal?", sol: "Donante universal: O−. Receptor universal: AB+." } },
    { nivel: "básico", ...{ q: "Explica por qué la altura no sigue una herencia mendeliana sencilla.", sol: "Porque depende de muchos genes a la vez y de factores ambientales como la alimentación, el sueño o el deporte; por eso varía de forma continua." } },
    { nivel: "básico", q: "Explica por qué el sexo del bebé lo determina el espermatozoide.", sol: "Todos los óvulos llevan un cromosoma X; los espermatozoides pueden llevar X o Y. Si fecunda uno X, el cigoto es XX (niña); si fecunda uno Y, es XY (niño)." },
    { nivel: "básico", q: "Escribe los genotipos posibles de una mujer y de un hombre para el daltonismo e indica su fenotipo.", sol: "Mujer: XᴰXᴰ (visión normal), XᴰXᵈ (portadora, visión normal), XᵈXᵈ (daltónica). Hombre: XᴰY (visión normal), XᵈY (daltónico)." },
    { nivel: "básico", q: "¿Qué diferencia hay entre gemelos idénticos y mellizos? ¿Para qué sirven en genética?", sol: "Los idénticos proceden de un mismo cigoto y tienen el mismo ADN; los mellizos proceden de dos óvulos fecundados por dos espermatozoides y comparten la mitad. Comparándolos se estima cuánto influyen los genes y cuánto el ambiente." },
    { nivel: "básico", q: "Nombra dos enfermedades autosómicas recesivas, una autosómica dominante y una ligada al X.", sol: "Recesivas: fibrosis quística y anemia falciforme (o fenilcetonuria). Dominante: enfermedad de Huntington (o acondroplasia). Ligada al X: hemofilia (o daltonismo)." },
    { nivel: "básico", q: "¿Qué es la amniocentesis y para qué sirve?", sol: "Es la extracción de una pequeña cantidad de líquido amniótico, que contiene células del feto, para estudiar su cariotipo o sus genes durante el embarazo." },
    { nivel: "básico", q: "Explica qué es un carácter poligénico y pon dos ejemplos.", sol: "Es el que depende de muchos genes que suman su efecto y presenta variación continua. Ejemplos: la altura y el color de la piel." },
    { nivel: "medio", ...{ q: "Una madre AB y un padre O, ¿qué grupos pueden tener sus hijos?", sol: "IᴬIᴮ × ii → Iᴬi (A) o Iᴮi (B). Nunca AB ni O." } },
    { nivel: "medio", ...{ q: "Unos padres A y B tienen un hijo O. ¿Es posible? Explícalo.", sol: "Sí, si los dos son heterocigotos (Iᴬi × Iᴮi): cada uno aporta un alelo i." } },
    { nivel: "medio", ...{ q: "Un hombre hemofílico (XʰY) tiene hijos con una mujer sana no portadora (XᴴXᴴ). ¿Cómo serán?", sol: "Todas las hijas portadoras (XᴴXʰ) y todos los hijos sanos (XᴴY)." } },
    { nivel: "medio", ...{ q: "¿Puede un hombre daltónico tener un hijo varón daltónico con una mujer no portadora?", sol: "No: el hijo varón recibe el X de la madre, que solo tiene alelos normales." } },
    { nivel: "medio", q: "Una mujer daltónica tiene hijos con un hombre de visión normal. ¿Cómo serán sus hijos e hijas?", sol: "XᵈXᵈ × XᴰY. Hijas: XᴰXᵈ, todas portadoras de visión normal. Hijos: XᵈY, todos daltónicos." },
    { nivel: "medio", q: "¿Puede una pareja de grupos A y B tener hijos de los cuatro grupos? Razónalo.", sol: "Sí, si los dos son heterocigotos: Iᴬi × Iᴮi → 1/4 IᴬIᴮ (AB), 1/4 Iᴬi (A), 1/4 Iᴮi (B) y 1/4 ii (0)." },
    { nivel: "medio", q: "Una persona de grupo A+ necesita una transfusión urgente. ¿De qué grupos puede recibir sangre?", sol: "De A+, A−, 0+ y 0− (sangre sin antígeno B). Puede recibir Rh− o Rh+ porque es Rh+." },
    { nivel: "medio", q: "Dos padres afectados por una enfermedad tienen un hijo sano. ¿La enfermedad es dominante o recesiva? ¿Qué genotipo tienen los padres?", sol: "Dominante. Los dos padres son heterocigotos (Aa) y el hijo sano es aa: recibió un alelo recesivo de cada uno." },
    { nivel: "medio", q: "¿Por qué un hombre hemofílico no puede transmitir la hemofilia a sus hijos varones?", sol: "Porque a sus hijos varones les transmite el cromosoma Y, no el X. El X de los hijos varones viene de la madre." },
    { nivel: "medio", q: "Una mujer de 40 años pregunta si el síndrome de Down se hereda. ¿Qué le explicarías?", sol: "Casi nunca se hereda: suele deberse a una no disyunción en la meiosis al formarse el óvulo o el espermatozoide. Su probabilidad aumenta con la edad de la madre, y hay pruebas prenatales para detectarlo." },
    { nivel: "medio", q: "La calvicie común es más frecuente en hombres, igual que el daltonismo. ¿Se heredan igual? Explica la diferencia.", sol: "No. El daltonismo está en el cromosoma X (herencia ligada al sexo). El gen de la calvicie está en un autosoma, pero se comporta como dominante en hombres y recesivo en mujeres por las hormonas (herencia influida por el sexo)." },
    { nivel: "avanzado", q: "Una mujer de visión normal, cuyo padre era daltónico, tiene hijos con un hombre de visión normal. Calcula la probabilidad de un hijo varón daltónico y de una hija daltónica.", sol: "Ella es XᴰXᵈ y él XᴰY. Hijos varones: 1/2 XᴰY y 1/2 XᵈY. Hijas: 1/2 XᴰXᴰ y 1/2 XᴰXᵈ, ninguna daltónica. P(hijo varón daltónico) = 1/2 entre los varones (1/4 del total); P(hija daltónica) = 0." },
    { nivel: "avanzado", q: "Una pareja de grupos A Rh+ y B Rh+ tiene un hijo 0 Rh−. ¿Qué genotipo tienen los padres? ¿Qué probabilidad tienen de tener otro hijo 0 Rh−?", sol: "El hijo es ii dd, así que los padres son Iᴬi Dd y Iᴮi Dd. P(ii) = 1/4 y P(dd) = 1/4; P(0 Rh−) = 1/4 · 1/4 = 1/16." },
    { nivel: "avanzado", q: "En un árbol genealógico, un carácter aparece en tres generaciones seguidas y todos los afectados tienen un progenitor afectado; hombres y mujeres se afectan por igual y un padre afectado tiene hijos varones afectados. ¿Qué tipo de herencia es más probable?", sol: "Autosómica dominante: no se salta generaciones, afecta por igual a ambos sexos y pasa de padre a hijo varón (lo que descarta la herencia ligada al X)." },
    { nivel: "avanzado", q: "La fibrosis quística afecta a 1 de cada 2.500 recién nacidos en Europa, y 1 de cada 25 personas es portadora. Si dos personas al azar tienen un hijo, comprueba esa frecuencia.", sol: "P(ambos portadores) = 1/25 · 1/25 = 1/625. P(hijo afectado si ambos son portadores) = 1/4. Total: 1/625 · 1/4 = 1/2.500. Coincide." },
    { nivel: "avanzado", q: "Explica, con un cruce, por qué una madre Rh− puede tener problemas en un segundo embarazo y cómo se previenen.", sol: "Madre dd y padre DD o Dd: el bebé puede ser Dd (Rh+). En el primer parto pasan glóbulos rojos Rh+ a la madre, que fabrica anticuerpos anti-D. En un segundo bebé Rh+, esos anticuerpos atraviesan la placenta y destruyen sus glóbulos rojos. Se previene inyectando a la madre anticuerpos anti-D tras el parto, que eliminan los glóbulos del bebé antes de que ella genere memoria." },
    { nivel: "avanzado", q: "Una persona tiene cariotipo 47, XXY. Explica dos maneras en que pudo originarse.", sol: "1) No disyunción en la madre: óvulo XX fecundado por espermatozoide Y. 2) No disyunción en la meiosis I del padre: espermatozoide XY que fecunda un óvulo X." },
    { nivel: "avanzado", q: "¿Por qué el alelo de la anemia falciforme, perjudicial en homocigosis, es frecuente en algunas zonas de África?", sol: "Porque los heterocigotos (portadores) están protegidos en parte contra la malaria, frecuente en esas zonas. La selección natural favorece a los portadores y mantiene el alelo en la población." },
    { nivel: "avanzado", q: "Redacta tres argumentos, uno a favor y dos de precaución, sobre los tests genéticos comerciales que se compran por internet.", sol: "A favor: pueden dar información sobre antepasados o riesgos y motivar hábitos saludables. Precaución: sus resultados pueden ser poco fiables o malinterpretarse sin consejo profesional; y los datos genéticos son sensibles, revelan información de familiares y podrían usarse sin control." },
  ],
  quiz: [
    { q: "¿Cuántos cromosomas tiene una célula humana del cuerpo?", o: ["23", "46", "44", "48"], a: 1, e: "22 parejas de autosomas y una de sexuales." },
    { q: "Los cromosomas sexuales de un hombre son…", o: ["XX", "YY", "X0", "XY"], a: 3, e: "Las mujeres son XX." },
    { q: "¿Qué gen del cromosoma Y activa la formación de los testículos?", o: ["SRY", "BRCA1", "p53", "ABO"], a: 0, e: "Actúa hacia la séptima semana." },
    { q: "La altura es un carácter…", o: ["de un solo gen", "ligado al Y", "poligénico y multifactorial", "codominante"], a: 2, e: "Muchos genes y ambiente." },
    { q: "Una mujer XᴰXᵈ es…", o: ["daltónica", "hemofílica", "portadora de visión normal", "imposible"], a: 2, e: "El alelo normal domina." },
    { q: "Un hombre daltónico tiene genotipo…", o: ["XᵈY", "XᴰY", "XᵈXᵈ", "XᴰXᵈ"], a: 0, e: "Basta un alelo recesivo." },
    { q: "Las hijas de un hombre hemofílico y una mujer no portadora serán…", o: ["hemofílicas", "sanas no portadoras", "la mitad hemofílicas", "todas portadoras"], a: 3, e: "Reciben el Xʰ del padre." },
    { q: "Un carácter que pasa solo de padres a hijos varones está ligado al…", o: ["cromosoma X", "cromosoma Y", "cromosoma 21", "ADN mitocondrial"], a: 1, e: "Herencia holándrica." },
    { q: "El ADN mitocondrial se hereda…", o: ["de la madre", "del padre", "de los dos por igual", "de los abuelos paternos"], a: 0, e: "El espermatozoide no aporta mitocondrias." },
    { q: "La calvicie común es un ejemplo de herencia…", o: ["ligada al X", "holándrica", "influida por el sexo", "mitocondrial"], a: 2, e: "Gen autosómico que se expresa distinto según las hormonas." },
    { q: "Una persona de grupo AB tiene genotipo…", o: ["Iᴬi", "IᴬIᴮ", "ii", "IᴬIᴬ"], a: 1, e: "Codominancia." },
    { q: "Una persona de grupo 0 tiene en el plasma anticuerpos…", o: ["anti-A", "anti-B", "ninguno", "anti-A y anti-B"], a: 3, e: "Porque no tiene antígenos A ni B." },
    { q: "El donante universal es…", o: ["AB+", "A+", "B−", "0−"], a: 3, e: "No tiene antígenos A, B ni D." },
    { q: "Una persona Rh− tiene genotipo…", o: ["DD", "dd", "Dd", "DD o Dd"], a: 1, e: "Rh− es recesivo." },
    { q: "Si dos padres sanos tienen un hijo afectado, el carácter es…", o: ["dominante", "codominante", "recesivo", "ligado al Y"], a: 2, e: "Los padres eran portadores." },
    { q: "En un árbol genealógico, un círculo relleno representa…", o: ["una mujer afectada", "un hombre afectado", "una mujer sana", "un portador"], a: 0, e: "Círculos = mujeres; rellenos = afectados." },
    { q: "La fibrosis quística es una enfermedad…", o: ["autosómica dominante", "autosómica recesiva", "ligada al X", "cromosómica"], a: 1, e: "Los padres suelen ser portadores sanos." },
    { q: "La enfermedad de Huntington es…", o: ["autosómica dominante", "recesiva ligada al X", "una trisomía", "mitocondrial"], a: 0, e: "Basta un alelo." },
    { q: "El síndrome de Turner tiene cariotipo…", o: ["47, XXY", "47, +21", "46, XY", "45, X0"], a: 3, e: "Le falta un cromosoma X." },
    { q: "La prueba del talón se hace…", o: ["antes del embarazo", "a los adolescentes", "al recién nacido", "a los abuelos"], a: 2, e: "Detecta enfermedades tratables como la fenilcetonuria." },
  ],
  examen: [
    { q: "Madre portadora de hemofilia (XᴴXʰ) y padre sano (XᴴY). ¿Probabilidad de que una hija sea hemofílica?", o: ["25 %", "0 %", "50 %", "100 %"], a: 1, e: "Las hijas reciben el Xᴴ del padre: pueden ser portadoras, pero no hemofílicas." },
    { q: "Padre AB y madre 0. ¿Qué grupos pueden tener sus hijos?", o: ["A o B", "AB u 0", "Solo 0", "Los cuatro"], a: 0, e: "IᴬIᴮ × ii → Iᴬi o Iᴮi." },
    { q: "Dos padres sanos tienen un hijo con una enfermedad hereditaria. Lo más probable es que sea…", o: ["dominante", "ligada al Y", "recesiva", "imposible"], a: 2, e: "Ambos padres serían portadores." },
    { q: "¿Por qué hay más hombres daltónicos que mujeres?", o: ["Porque el alelo es dominante", "Porque tienen un solo X", "Porque está en el Y", "Por el ambiente"], a: 1, e: "Basta un alelo recesivo." },
    { q: "Padres Iᴬi y Iᴮi. Probabilidad de hijo de grupo AB:", o: ["0", "1/2", "1", "1/4"], a: 3, e: "IᴬIᴮ en 1 de 4 casillas." },
    { q: "El receptor universal es…", o: ["0−", "A−", "B+", "AB+"], a: 3, e: "Tiene A, B y D y no fabrica anticuerpos contra ellos." },
    { q: "Un síndrome causado por un cromosoma 21 de más es…", o: ["Turner", "Down", "Klinefelter", "Huntington"], a: 1, e: "Trisomía 21." },
    { q: "El consejo genético consiste en…", o: ["elegir el sexo del bebé", "cambiar los genes de los padres", "informar a una familia de sus riesgos genéticos y opciones", "hacer transfusiones"], a: 2, e: "Para que decidan con información." },
  ],
  feynman: ["Qué es un cariotipo y cómo se determina el sexo", "Por qué el daltonismo afecta más a los hombres", "Cómo funcionan los alelos de los grupos sanguíneos", "La diferencia entre mutación génica y cromosómica", "Cómo se lee un árbol genealógico"],
  mapa: mapa("GENÉTICA HUMANA", "var(--eso)", [
    ["Cariotipo", "22 pares + XX / XY", "var(--ink)"],
    ["Ligada al sexo", "daltonismo · hemofilia", "var(--leaf)"],
    ["Grupos ABO", "Iᴬ = Iᴮ > i", "var(--red)"],
    ["Mutaciones", "génicas · cromosómicas", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["¿Qué son los autosomas?", "Los 22 pares de cromosomas que no determinan el sexo."],
    ["Genotipos posibles del grupo A", "IᴬIᴬ e Iᴬi."],
    ["¿Qué es una mujer portadora?", "Una mujer sana que tiene un alelo recesivo en uno de sus X y puede transmitirlo."],
    ["¿Qué es la codominancia?", "Cuando dos alelos distintos se expresan a la vez, como Iᴬ e Iᴮ en el grupo AB."],
    ["¿Qué es una trisomía?", "Tener tres copias de un cromosoma en lugar de dos (ej.: trisomía 21)."],
    ["Mujer portadora", "Tiene un alelo recesivo ligado al X; no padece la enfermedad pero puede transmitirla."],
    ["Alelos del sistema ABO", "Iᴬ e Iᴮ codominantes; los dos dominan sobre i."],
    ["Trisomía 21", "Tres copias del cromosoma 21: síndrome de Down."],
    ["Determinación del sexo", "Óvulo siempre X; espermatozoide X (niña) o Y (niño)."],
    ["Factor Rh", "Rh+ tiene el antígeno D (DD o Dd); Rh− no lo tiene (dd)."],
    ["Donante y receptor universal", "Donante: 0−. Receptor: AB+."],
    ["Pista de un árbol", "Padres sanos con hijo afectado: recesivo. Padres afectados con hijo sano: dominante."],
  ],
  glosario: [
    ["Cariotipo", "Conjunto de cromosomas de una persona ordenados por parejas."],
    ["Autosoma", "Cromosoma que no es sexual; los humanos tenemos 22 parejas."],
    ["Cromosomas sexuales", "Pareja que determina el sexo: XX en mujeres y XY en hombres."],
    ["Carácter poligénico", "Rasgo que depende de muchos genes y varía de forma continua."],
    ["Herencia ligada al sexo", "La de los genes del cromosoma X sin pareja en el Y."],
    ["Portadora", "Mujer heterocigota (XᴰXᵈ) que no manifiesta el carácter pero lo transmite."],
    ["Hemicigoto", "Individuo con una sola copia de un gen, como el hombre para los genes del X."],
    ["Herencia holándrica", "Transmisión de genes del cromosoma Y, de padre a hijo varón."],
    ["Herencia influida por el sexo", "Gen autosómico que se expresa de forma distinta en cada sexo."],
    ["Daltonismo", "Dificultad para distinguir colores; recesiva ligada al X."],
    ["Hemofilia", "Fallo de la coagulación por falta de un factor; recesiva ligada al X."],
    ["Antígeno", "Molécula de la membrana del glóbulo rojo que define el grupo sanguíneo."],
    ["Factor Rh", "Antígeno D; quien lo tiene es Rh+ y quien no, Rh−."],
    ["Árbol genealógico", "Esquema de una familia que muestra cómo se hereda un carácter."],
    ["No disyunción", "Fallo en la separación de cromosomas en la meiosis."],
    ["Diagnóstico prenatal", "Pruebas durante el embarazo para detectar alteraciones del feto."],
    ["Consejo genético", "Información profesional sobre riesgos hereditarios y opciones."],
    ["Eugenesia", "Movimiento que pretendía «mejorar» la especie humana; hoy rechazado."],
  ],
  situacion: {
    titulo: "Una campaña para la donación de sangre",
    reto: "El banco de sangre de vuestra comunidad necesita más donantes jóvenes. Vuestra clase va a organizar una campaña informativa para las familias del instituto que explique, con genética, qué es el grupo sanguíneo, por qué importa en las transfusiones y por qué se necesitan donantes de todos los grupos.",
    pasos: [
      "Investigad cómo se heredan los sistemas ABO y Rh y cuál es la frecuencia de cada grupo en vuestra comunidad (datos del banco de sangre).",
      "Preparad un simulador en papel o en hoja de cálculo que, a partir de los grupos de dos padres, calcule los grupos posibles de los hijos y sus probabilidades.",
      "Diseñad una infografía con la tabla de compatibilidades (quién dona a quién) y la explicación del donante y el receptor universal.",
      "Haced una encuesta anónima a familias voluntarias sobre lo que saben de la donación y desmontad tres mitos frecuentes.",
      "Presentad la campaña en una jornada del instituto, si es posible con la colaboración del banco de sangre.",
    ],
    producto: "Infografía, simulador de herencia de grupos sanguíneos y presentación de la campaña.",
    evaluacion: [
      "Corrección de la genética de los sistemas ABO y Rh.",
      "Uso de datos reales y de la encuesta.",
      "Claridad y rigor de la infografía para un público general.",
      "Respeto a la privacidad: no se piden ni publican datos personales.",
    ],
  },
  familias: ["Dibujad juntos el árbol genealógico de la familia con un rasgo sencillo (hoyuelos, lóbulo de la oreja suelto).", "Si sabéis vuestros grupos sanguíneos, comprobad qué grupos podrían tener los hijos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de «Genética y evolución» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): herencia en la especie humana, herencia ligada al sexo, grupos sanguíneos, enfermedades genéticas, mutaciones y alteraciones cromosómicas, y aspectos éticos de la genética. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Test de Ishihara para hablar del daltonismo, sin señalar a nadie.",
      "Construcción de árboles genealógicos ficticios y deducción del tipo de herencia.",
      "Simulación de compatibilidad de transfusiones con «sangre» de colores y reactivos.",
      "Debate guiado sobre tests genéticos, privacidad y eugenesia.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Herencia ligada al sexo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Herencia_ligada_al_sexo" },
    { t: "Grupo sanguíneo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Grupo_sangu%C3%ADneo" },
  ],
  revisado: "2026-11-13",
};
