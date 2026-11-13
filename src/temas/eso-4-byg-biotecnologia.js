// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");



module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "Biotecnología e ingeniería genética",
  minutos: 110,
  objetivos: [
    "Definir la biotecnología y distinguir la tradicional de la moderna",
    "Describir las herramientas de la ingeniería genética: enzimas de restricción, ligasa y vectores",
    "Explicar la PCR, la electroforesis y la huella genética y sus usos",
    "Explicar cómo se obtienen organismos transgénicos y clones y qué es CRISPR",
    "Conocer la terapia génica y las aplicaciones en medicina, agricultura, industria y medio ambiente",
    "Argumentar sobre los aspectos éticos, sociales y ambientales de la biotecnología",
  ],
  claves: ["biotecnología", "ADN recombinante", "transgénico", "clonación", "CRISPR", "bioética"],
  pregunta: {
    texto: "Hasta 1982 la insulina para los diabéticos se sacaba del páncreas de cerdos y vacas. Hoy la fabrican bacterias. ¿Cómo aprendió una bacteria a hacer una proteína humana?",
    respuesta: "Se le <mark>insertó el gen humano de la insulina</mark>. Como el código genético es universal, la bacteria lee ese gen igual que los suyos y fabrica insulina humana. Es <b>ingeniería genética</b>: cortar, pegar y trasladar genes de un ser vivo a otro.",
  },
  lectura: {
    titulo: "La niña que venció a la leucemia con un virus",
    html: `<p>En 2012, Emily Whitehead tenía seis años y una leucemia que no respondía a ningún tratamiento. Los médicos del Hospital Infantil de Filadelfia le propusieron algo que nunca se había probado en un niño: extraer sus propios linfocitos T, las células del sistema inmunitario que destruyen invasores, y modificarlos genéticamente en el laboratorio con un virus inofensivo para que reconocieran y atacaran las células del cáncer.</p>
<p>Los linfocitos modificados, llamados CAR-T, se multiplicaron en su cuerpo y eliminaron la leucemia. Hubo días muy duros, con fiebre altísima, pero Emily se recuperó. Más de diez años después sigue sana y la terapia que la salvó se usa en hospitales de todo el mundo, también en España, donde algunos hospitales públicos fabrican sus propias células CAR-T.</p>
<p>Detrás de su historia hay décadas de biotecnología: aprender a cortar y pegar ADN, a copiarlo, a meterlo en células y a editarlo con precisión. Las mismas herramientas sirven para fabricar insulina, identificar a un criminal o crear cultivos resistentes a la sequía, y también plantean preguntas difíciles. En este tema conocerás cómo funcionan y aprenderás a debatir sobre ellas con argumentos.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué es la biotecnología</h3><p>La <mark>biotecnología</mark> es el uso de seres vivos, de sus células o de sus moléculas para obtener productos o servicios útiles para las personas. La palabra une <i>bio</i> (vida) y <i>tecnología</i>, y es un campo donde colaboran biólogos, químicos, médicos, ingenieros e informáticos.</p><p>Se distinguen dos grandes etapas. La <b>biotecnología tradicional</b> aprovecha los seres vivos tal como son, sin cambiar sus genes de forma dirigida: las levaduras que hacen pan y vino, las bacterias del yogur o la selección de razas y variedades de cultivo durante miles de años. La <b>biotecnología moderna</b> nace en los años setenta del siglo XX con la <mark>ingeniería genética</mark>, el conjunto de técnicas que permiten <b>aislar, copiar, modificar y transferir genes</b> de un organismo a otro.</p><p>Hoy se suele clasificar la biotecnología por colores según su campo: <b>roja</b> (salud y medicina), <b>verde</b> (agricultura), <b>blanca</b> (industria), <b>azul</b> (recursos del mar) y <b>gris</b> (medio ambiente). En España hay cientos de empresas y centros de investigación biotecnológicos, y es uno de los sectores que más empleo cualificado genera. Comprender sus bases te permitirá tomar decisiones informadas como ciudadano y como consumidor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Productos de la biotecnología tradicional: pan, yogur y queso, y de la moderna: insulina">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M24 90 Q 24 56 64 56 Q 104 56 104 90 Z" fill="var(--sun)"/><path d="M40 70 l 8 8 M60 64 l 8 8 M80 70 l 8 8" stroke="var(--ink)" stroke-width="2"/>
        <path d="M130 56 H 170 L 166 100 H 134 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="150" y="84" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>yogur</text>
        <rect x="196" y="40" width="20" height="54" rx="4" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="200" y="58" width="12" height="30" fill="var(--pen)" opacity=".4"/><path d="M206 40 V 28" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="100" y="130" fill="var(--sun)">tradicional</text><text x="206" y="130" fill="var(--pen)">moderna</text><text x="206" y="146" font-size="10" fill="var(--muted)">insulina</text><text x="100" y="146" font-size="10" fill="var(--muted)">fermentaciones</text></g>
      </svg>`,
    },
    {
      html: `<h3>1.2 La biotecnología tradicional: las fermentaciones</h3><p>Hace más de 7.000 años, en Mesopotamia y Egipto ya se hacía pan y cerveza, aunque nadie sabía que detrás había seres vivos microscópicos. En 1857 <b>Louis Pasteur</b> demostró que la <mark>fermentación</mark> la realizan microorganismos que obtienen energía de los azúcares sin usar oxígeno.</p><p>• En la <b>fermentación alcohólica</b>, las levaduras (hongos unicelulares como <i>Saccharomyces cerevisiae</i>) transforman la glucosa en <b>alcohol etílico y CO₂</b>. El CO₂ forma las burbujas que hacen subir la masa del pan (el alcohol se evapora al hornear) y el gas del cava; el alcohol se aprovecha en el vino y la cerveza.<br>• En la <b>fermentación láctica</b>, bacterias como los lactobacilos transforman la lactosa de la leche en <b>ácido láctico</b>, que espesa la leche y le da sabor ácido: así se hacen el yogur, el kéfir y muchos quesos. También se usa en encurtidos y en el chucrut.</p><p>Otro hito de la biotecnología tradicional fue la producción de <b>antibióticos</b>. En 1928 Alexander Fleming observó que el moho <i>Penicillium</i> impedía crecer a las bacterias, y en los años cuarenta se cultivó a gran escala en fermentadores para fabricar penicilina, que salvó millones de vidas. La <b>selección artificial</b> de animales y plantas, que transformó el lobo en perro o el teosinte en maíz, también es biotecnología tradicional.</p>`,
      svg: L6.compara("Fermentación alcohólica con levaduras y fermentación láctica con bacterias", ["Alcohólica", "var(--sun)", ["levaduras", "glucosa → alcohol + CO₂", "pan, vino, cerveza", "sin oxígeno"]], ["Láctica", "var(--pen)", ["bacterias", "lactosa → ácido láctico", "yogur, queso, kéfir", "sin oxígeno"]]),
    },
    {
      html: `<h3>1.3 El nacimiento de la ingeniería genética</h3><p>La biotecnología moderna se apoyó en varios descubrimientos encadenados. En 1953 se conoció la <b>estructura del ADN</b>; en los años sesenta se descifró el <b>código genético</b> y se vio que era universal; y a finales de esa década se descubrieron en las bacterias unas enzimas capaces de cortar el ADN en puntos concretos, las <b>enzimas de restricción</b>.</p><p>En 1973, <b>Stanley Cohen y Herbert Boyer</b> unieron un gen de una bacteria con un plásmido de otra y lo introdujeron en <i>E. coli</i>: había nacido el primer organismo con <mark>ADN recombinante</mark>, es decir, con ADN de dos orígenes distintos combinado en el laboratorio. Los propios científicos se preocuparon por los posibles riesgos y, en la conferencia de Asilomar (1975), acordaron normas de seguridad para estos experimentos.</p><p>Los avances se sucedieron rápidamente: en <b>1982</b> se aprobó la primera medicina fabricada por ingeniería genética, la <b>insulina humana</b> producida por bacterias; en 1983 Kary Mullis inventó la <b>PCR</b>; en 1990 se hizo el primer ensayo de <b>terapia génica</b>; en 1996 nació la oveja <b>Dolly</b>; en 2003 se completó el <b>genoma humano</b>; y en 2012 Emmanuelle Charpentier y Jennifer Doudna presentaron <b>CRISPR-Cas9</b>, por lo que recibieron el Nobel de Química en 2020. El microbiólogo alicantino Francis Mojica fue quien descubrió las secuencias CRISPR en bacterias.</p>`,
      svg: L6.linea("Hitos de la biotecnología: ADN recombinante 1973, insulina 1982, Dolly 1996, genoma 2003, CRISPR 2012", [["1973", "ADN recombinante"], ["1982", "Insulina de bacterias"], ["1996", "Oveja Dolly"], ["2003", "Genoma humano"], ["2012", "CRISPR-Cas9"]], "De Cohen y Boyer a CRISPR"),
    },
    {
      html: `<h3>2.1 Las herramientas: cortar y pegar ADN</h3><p>La ingeniería genética funciona como un editor de textos para el ADN, con tres herramientas básicas:</p><p>• Las <mark>enzimas de restricción</mark> son las <b>tijeras</b>. Las fabrican las bacterias para defenderse de los virus, cortando su ADN. Cada enzima reconoce una secuencia corta concreta, de 4 a 8 pares de bases, y corta ahí. Por ejemplo, la enzima EcoRI corta siempre en GAATTC. Muchas dejan extremos con unas pocas bases sueltas, llamados <b>extremos cohesivos</b>, que tienden a pegarse a otros extremos complementarios.<br>• La <mark>ADN ligasa</mark> es el <b>pegamento</b>: une fragmentos de ADN que se han emparejado.<br>• Los <mark>vectores</mark> son los <b>vehículos</b> que llevan el gen al interior de la célula receptora. Los más usados son los <b>plásmidos</b>, pequeños anillos de ADN que las bacterias tienen además de su cromosoma, y algunos <b>virus</b> modificados que han perdido la capacidad de causar enfermedad.</p><p>El procedimiento es: se cortan con la misma enzima el ADN que contiene el gen deseado y el plásmido, de modo que tengan extremos compatibles; se mezclan para que el gen se inserte en el plásmido; la ligasa los une, y se obtiene un <b>ADN recombinante</b>. Después se introduce en la célula, que al multiplicarse copia el gen (clonación de genes) y puede fabricar su proteína.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Se corta un plásmido, se inserta el gen humano y se pega formando ADN recombinante">
        <defs>${flecha("bt1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="52" cy="80" r="30" fill="none" stroke="var(--pen)" stroke-width="6" stroke-dasharray="170 18"/>
        <rect x="98" y="72" width="40" height="14" rx="4" fill="var(--red)"/>
        <path d="M144 80 H 166" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#bt1)"/>
        <circle cx="212" cy="80" r="30" fill="none" stroke="var(--pen)" stroke-width="6"/><path d="M236 62 A 30 30 0 0 1 238 96" fill="none" stroke="var(--red)" stroke-width="7"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="52" y="132" fill="var(--pen)">plásmido cortado</text><text x="118" y="62" fill="var(--red)">gen</text><text x="198" y="132" font-size="10" fill="var(--ink)">ADN recombinante</text></g>
      </svg>`,
    },
    {
      html: `<h3>2.2 Cómo se fabrica insulina con bacterias</h3><p>La <b>insulina</b> es la hormona que permite a las células captar la glucosa de la sangre. Las personas con diabetes tipo 1 no la producen y necesitan inyectársela. Hasta 1982 se extraía del páncreas de cerdos y vacas: hacían falta toneladas de páncreas, y a algunas personas les provocaba alergias. Hoy toda la insulina se fabrica con microorganismos modificados. Los pasos son:</p><p>1) <b>Aislar el gen</b> de la insulina humana (o fabricarlo a partir de su ARNm).<br>2) <b>Cortar</b> el gen y un plásmido bacteriano con la misma enzima de restricción.<br>3) <b>Unirlos</b> con la ligasa: se obtiene un plásmido recombinante.<br>4) <b>Introducirlo</b> en bacterias <i>E. coli</i> (o en levaduras), que se tratan para que su membrana deje pasar los plásmidos. Solo algunas lo incorporan: se <b>seleccionan</b>, por ejemplo porque el plásmido lleva también un gen de resistencia a un antibiótico y solo sobreviven las que lo tienen.<br>5) <b>Cultivar</b> las bacterias en grandes tanques, los <mark>biorreactores</mark>, donde se multiplican por millones y fabrican insulina humana.<br>6) <b>Extraer y purificar</b> la insulina.</p><p>Como el código genético es universal, la bacteria «lee» el gen humano igual que nuestras células. Así se fabrican también la hormona del crecimiento, factores de coagulación para la hemofilia, vacunas como la de la hepatitis B y anticuerpos contra el cáncer.</p>`,
      svg: L6.flujo("Pasos para fabricar insulina: aislar el gen, unirlo a un plásmido, introducirlo en bacterias y cultivarlas en biorreactores", ["Aislar el gen de la insulina humana", "Cortar y pegar en un plásmido (ADN recombinante)", "Introducirlo en bacterias y seleccionarlas", "Cultivo en biorreactores y purificación"], "Insulina de bacterias"),
    },
    {
      html: `<h3>2.3 La PCR: fotocopiar el ADN</h3><p>La <mark>reacción en cadena de la polimerasa</mark> (PCR), inventada por Kary Mullis en 1983 (Nobel en 1993), permite obtener <b>millones de copias de un fragmento concreto de ADN</b> a partir de una cantidad mínima: la de un pelo, una gota de sangre o una mancha de saliva. Se hace en una máquina llamada termociclador, que repite unos 30 ciclos de tres pasos:</p><p>1) <b>Desnaturalización</b> (unos 95 °C): el calor separa las dos hebras del ADN.<br>2) <b>Unión de los cebadores</b> (unos 55 °C): unos fragmentos cortos de ADN diseñados a propósito, los cebadores, se pegan a cada hebra justo al principio y al final de la zona que se quiere copiar.<br>3) <b>Extensión</b> (unos 72 °C): una <b>ADN polimerasa resistente al calor</b>, obtenida de una bacteria de aguas termales (<i>Thermus aquaticus</i>), copia cada hebra a partir del cebador.</p><p>En cada ciclo <mark>se duplica</mark> el número de copias: tras n ciclos, a partir de una molécula hay 2ⁿ. Con 30 ciclos, más de mil millones de copias en un par de horas.</p><p>La PCR se usa para <b>diagnosticar infecciones</b> (fue la prueba de referencia de la COVID-19), detectar enfermedades genéticas, identificar personas en criminología, estudiar ADN antiguo de fósiles o momias y comprobar la autenticidad de alimentos, por ejemplo si un jamón es realmente ibérico.</p>`,
      svg: L6.barras("Número de copias de ADN tras varios ciclos de PCR: se duplican en cada ciclo", [["0 ciclos", 1, "1"], ["1 ciclo", 2, "2"], ["3 ciclos", 3, "8"], ["10 ciclos", 4.2, "1.024"], ["30 ciclos", 6, "más de 10⁹"]], "Copias en la PCR (2ⁿ)", 7),
      video: { id: "TalHTjA5gKU", titulo: "PCR: reacción en cadena de la polimerasa", canal: "CanalDivulgación", vistas: 1147974 },
    },
    {
      html: `<h3>2.4 Electroforesis y huella genética</h3><p>Salvo los gemelos idénticos, cada persona tiene un ADN único. Las diferencias son mayores en ciertas zonas que no contienen genes, donde una secuencia corta se repite muchas veces seguidas; el <b>número de repeticiones</b> varía de una persona a otra. Analizando unas 15-20 de estas zonas se obtiene la <mark>huella genética</mark> o perfil de ADN, que permite identificar a una persona con una probabilidad de error de menos de una entre mil billones.</p><p>Para verla se usa la <mark>electroforesis</mark>: se amplifican esas zonas con PCR y los fragmentos se colocan en un gel al que se aplica corriente eléctrica. El ADN tiene carga negativa, así que avanza hacia el polo positivo, y los <b>fragmentos pequeños corren más</b> que los grandes. Al final, cada fragmento forma una <b>banda</b> en una posición según su tamaño. Hoy se hace con aparatos automáticos que dan los resultados como picos en una gráfica.</p><p>Aplicaciones: en <b>criminología</b>, comparar el ADN de una escena del crimen con el de sospechosos; en <b>pruebas de paternidad</b>, porque cada banda de un hijo tiene que venir de su madre o de su padre; en la <b>identificación de víctimas</b> de catástrofes o de personas desaparecidas; y en la <b>conservación</b> de especies, para controlar el comercio ilegal de marfil o de animales protegidos.</p>`,
      svg: L6.tabla("Prueba de paternidad: las bandas del hijo que no vienen de la madre deben estar en el padre", ["Banda", "Madre", "Hijo", "Padre?"], [["1", "■", "■", ""], ["2", "", "■", "■"], ["3", "■", "■", ""], ["4", "", "■", "■"]]),
    },
    {
      html: `<h3>3.1 Los organismos transgénicos</h3><p>Un <mark>organismo modificado genéticamente</mark> (OMG) es aquel cuyo ADN se ha alterado en el laboratorio. Cuando se le ha introducido un gen de <b>otra especie</b>, se llama <b>transgénico</b>, y ese gen, transgén.</p><p>• <b>Microorganismos</b>: bacterias y levaduras que fabrican insulina, vacunas, enzimas para detergentes o el cuajo para hacer queso.<br>• <b>Plantas</b>: el <b>maíz Bt</b> lleva un gen de la bacteria <i>Bacillus thuringiensis</i> que produce una proteína tóxica para la oruga del taladro, una plaga, pero inofensiva para las personas; es el único transgénico que se cultiva en España, sobre todo en Aragón y Cataluña. El <b>arroz dorado</b> produce betacaroteno (provitamina A) para combatir la ceguera infantil por falta de vitamina A. Hay también soja resistente a herbicidas y algodón resistente a insectos.<br>• <b>Animales</b>: cabras que producen en su leche proteínas para medicamentos, salmones que crecen más deprisa, ratones con genes humanos para investigar enfermedades.</p><p>Para meter genes en plantas se usa a menudo la bacteria <i>Agrobacterium</i>, que de forma natural introduce parte de su ADN en las células vegetales. En la Unión Europea, los transgénicos deben pasar estrictas evaluaciones de seguridad antes de autorizarse y los alimentos que los contienen deben indicarlo en la etiqueta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pasos: insertar el gen en la bacteria, que se multiplica y fabrica insulina">
        <defs>${flecha("bt2", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="64" width="64" height="34" rx="17" fill="var(--leaf)" opacity=".35" stroke="var(--leaf)" stroke-width="2"/><circle cx="48" cy="81" r="9" fill="none" stroke="var(--red)" stroke-width="3"/>
        <path d="M86 81 H 108" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#bt2)"/>
        ${[[130, 50], [170, 50], [130, 92], [170, 92], [150, 71]].map(([x, y]) => `<rect x="${x - 18}" y="${y - 10}" width="36" height="20" rx="10" fill="var(--leaf)" opacity=".35" stroke="var(--leaf)" stroke-width="1.5"/>`).join("")}
        <path d="M196 81 H 214" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#bt2)"/>
        ${[[232, 66], [240, 82], [228, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)"/>`).join("")}
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="48" y="122" fill="var(--ink)">bacteria + gen</text><text x="150" y="132" fill="var(--ink)">se multiplica</text><text x="226" y="122" fill="var(--red)">insulina</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.2 La clonación</h3><p><mark>Clonar</mark> es obtener copias genéticamente idénticas de una molécula, una célula o un organismo. La clonación de organismos es natural en muchas especies: las bacterias, los esquejes de una planta o los gemelos idénticos son clones.</p><p>La clonación artificial de mamíferos se hace por <b>transferencia nuclear</b>: 1) se extrae el núcleo de una célula del cuerpo del animal que se quiere clonar; 2) se toma un óvulo de otra hembra y se le quita su núcleo; 3) se introduce el núcleo en el óvulo vacío y se estimula con una pequeña descarga eléctrica para que empiece a dividirse; 4) el embrión se implanta en el útero de una tercera hembra, la madre de alquiler. El animal que nace es un clon del que donó el núcleo.</p><p>Así nació en 1996, en Escocia, la oveja <b>Dolly</b>, el primer mamífero clonado a partir de una célula adulta (de la glándula mamaria). Fueron necesarios 277 intentos. Desde entonces se han clonado vacas, caballos, perros, monos e incluso, en España en 2003, un bucardo, una cabra montés pirenaica ya extinguida, aunque el animal murió a los pocos minutos.</p><p>Se distingue la <b>clonación reproductiva</b>, para obtener individuos completos, de la <b>terapéutica</b>, que busca obtener células madre embrionarias para regenerar tejidos. La clonación reproductiva humana está prohibida en España y en casi todo el mundo.</p>`,
      svg: L6.flujo("Clonación por transferencia nuclear: núcleo de célula adulta en óvulo sin núcleo, embrión en madre de alquiler", ["Núcleo de una célula adulta del animal A", "Óvulo de la hembra B sin su núcleo", "Fusión y descarga: el embrión se divide", "Implante en la hembra C: nace un clon de A"], "Cómo se clonó a Dolly"),
    },
    {
      html: `<h3>3.3 CRISPR: editar genes con precisión</h3><p>Las técnicas anteriores añaden genes, pero no permiten cambiar con exactitud una letra concreta del genoma. Eso cambió en 2012 con <mark>CRISPR-Cas9</mark>, una herramienta que actúa como un <b>corrector de textos</b> del ADN.</p><p>Su origen está en un sistema de defensa de las bacterias contra los virus. Las bacterias guardan en su ADN fragmentos de virus que las atacaron antes (las secuencias CRISPR, descubiertas por <b>Francis Mojica</b> en las salinas de Santa Pola). Si el virus vuelve, fabrican un ARN con esa secuencia que guía a una enzima, <b>Cas9</b>, hasta el ADN del virus para cortarlo.</p><p>Charpentier y Doudna adaptaron este sistema para usarlo en cualquier célula. Funciona así: 1) se diseña un <b>ARN guía</b> con una secuencia de unas 20 bases complementaria al lugar del gen que se quiere modificar; 2) el ARN guía lleva a la enzima Cas9 hasta ese punto exacto; 3) <b>Cas9 corta</b> las dos hebras del ADN; 4) la célula repara el corte, y al hacerlo se puede <b>desactivar el gen</b> o, si se le da un fragmento de ADN como molde, <b>corregirlo</b> o insertar uno nuevo.</p><p>CRISPR es barata, rápida y precisa, y se usa en miles de laboratorios para investigar la función de los genes, obtener cultivos mejorados y tratar enfermedades: en 2023 se aprobó el primer tratamiento con CRISPR para la anemia falciforme.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="CRISPR: una guía localiza la secuencia y la enzima Cas9 corta el ADN en ese punto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 90 H 246 M14 104 H 246" stroke="var(--ink)" stroke-width="4"/>
        ${Array.from({ length: 16 }, (_, i) => `<path d="M${22 + i * 14} 92 V 102" stroke="${i >= 7 && i <= 9 ? "var(--red)" : "var(--muted)"}" stroke-width="3"/>`).join("")}
        <ellipse cx="134" cy="96" rx="44" ry="34" fill="var(--pen)" opacity=".25" stroke="var(--pen)" stroke-width="2"/>
        <path d="M120 70 L 148 122 M148 70 L 120 122" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="134" y="50" fill="var(--pen)">Cas9 + ARN guía</text><text x="134" y="152" fill="var(--red)">corta justo aquí</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.4 Terapia génica y medicina personalizada</h3><p>La <mark>terapia génica</mark> trata enfermedades introduciendo, corrigiendo o desactivando genes en las células del paciente. La idea es sencilla: si una enfermedad se debe a un gen que no funciona, se aporta una copia correcta.</p><p>Hay dos estrategias. En la <b>terapia <i>ex vivo</i></b> se extraen células del paciente (por ejemplo, de la médula ósea), se modifican en el laboratorio y se le devuelven. Así se trató en 1990 a la primera paciente, una niña con una inmunodeficiencia grave, y así funcionan las terapias <b>CAR-T</b> contra algunos cánceres de la sangre. En la <b>terapia <i>in vivo</i></b> el gen se introduce directamente en el cuerpo, normalmente dentro de un <b>virus modificado</b> que ya no causa enfermedad, como en algunos tratamientos para una ceguera hereditaria o para la atrofia muscular espinal.</p><p>Las dificultades son importantes: hacer llegar el gen a las células correctas, evitar reacciones del sistema inmunitario y el elevado precio de los tratamientos. La mayoría actúa sobre <b>células somáticas</b>, de modo que los cambios no pasan a los hijos. Modificar la <b>línea germinal</b> (gametos o embriones) está prohibido en Europa.</p><p>Relacionada con esto está la <b>medicina personalizada</b>: analizar los genes de un paciente o de su tumor para elegir el fármaco y la dosis más eficaces para esa persona en concreto.</p>`,
      svg: L6.compara("Terapia génica ex vivo e in vivo", ["Ex vivo", "var(--leaf)", ["se sacan células", "se modifican fuera", "se devuelven", "ej.: CAR-T"]], ["In vivo", "var(--pen)", ["el gen se inyecta", "dentro de un virus", "inofensivo", "ej.: ceguera"]]),
      video: { id: "ZoE-G7YPvZQ", titulo: "CRISPR: así se editan los genes", canal: "EL PAÍS", vistas: 153941 },
    },
    {
      html: `<h3>4.1 Aplicaciones de la biotecnología</h3><p>La biotecnología moderna está presente en muchos más ámbitos de lo que parece:</p><p>• <b>Medicina</b>: fármacos fabricados por microorganismos (insulina, hormona del crecimiento, interferón), <b>anticuerpos monoclonales</b> contra el cáncer o enfermedades autoinmunes, vacunas de proteínas recombinantes y de ARNm, diagnóstico por PCR, terapia génica y medicina regenerativa con células madre.<br>• <b>Agricultura y ganadería</b>: plantas resistentes a plagas, a la sequía o a la salinidad, con más nutrientes o que se conservan más tiempo; diagnóstico de enfermedades del ganado; selección de razas con marcadores genéticos.<br>• <b>Industria</b>: enzimas para detergentes que lavan a baja temperatura, para fabricar zumos o piensos; <b>bioplásticos</b> biodegradables; <b>biocombustibles</b> obtenidos de restos vegetales o algas.<br>• <b>Medio ambiente</b>: la <mark>biorremediación</mark>, que usa microorganismos para eliminar contaminantes, como las bacterias que degradan el petróleo de una marea negra o los metales pesados de un suelo; depuración de aguas residuales; biosensores que detectan contaminantes.<br>• <b>Ciencia forense y alimentaria</b>: huella genética, control de fraudes alimentarios y trazabilidad.</p><p>Muchas de estas aplicaciones contribuyen a los <b>Objetivos de Desarrollo Sostenible</b>, como acabar con el hambre o garantizar la salud.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro campos de aplicación: medicina, agricultura, industria y medio ambiente">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["medicina", "vacunas · insulina", "var(--red)"], ["agricultura", "plantas resistentes", "var(--leaf)"], ["industria", "enzimas · bioplásticos", "var(--sun)"], ["ambiente", "biorremediación", "var(--pen)"]].map(([t, d, c], i) => `<rect x="${14 + (i % 2) * 120}" y="${20 + Math.floor(i / 2) * 74}" width="112" height="64" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="${70 + (i % 2) * 120}" y="${48 + Math.floor(i / 2) * 74}" text-anchor="middle" font-size="14" font-weight="700" fill="${c}" ${F}>${t}</text><text x="${70 + (i % 2) * 120}" y="${68 + Math.floor(i / 2) * 74}" text-anchor="middle" font-size="10" fill="var(--ink)" ${F}>${d}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>4.2 Bioética: beneficios, riesgos y límites</h3><p>La <mark>bioética</mark> estudia los problemas morales que plantean la biología y la medicina. Ante cada aplicación biotecnológica conviene preguntarse: ¿qué beneficios aporta?, ¿qué riesgos tiene?, ¿quién gana y quién puede perder?, ¿hay alternativas?</p><p>Algunos debates actuales:</p><p>• <b>Transgénicos</b>. A favor: más producción, menos insecticidas, alimentos más nutritivos. Preocupaciones: que los genes pasen a especies silvestres, la aparición de plagas resistentes, la pérdida de biodiversidad agrícola y la dependencia de los agricultores respecto a las grandes empresas que patentan las semillas. Los organismos científicos internacionales coinciden en que los transgénicos autorizados son tan seguros para comer como los convencionales.<br>• <b>Edición de embriones humanos</b>. En 2018, un científico chino anunció el nacimiento de dos niñas con genes editados con CRISPR; fue condenado y la comunidad científica lo rechazó de forma unánime, porque los riesgos eran desconocidos y los cambios pasarían a sus descendientes.<br>• <b>Acceso y justicia</b>: algunas terapias génicas cuestan más de un millón de euros. ¿Cómo garantizar que lleguen a todos?<br>• <b>Privacidad</b> de los datos genéticos.</p><p>Las leyes, como el <b>Convenio de Oviedo</b> (1997) sobre derechos humanos y biomedicina, establecen límites. Un buen debate separa los datos científicos de las opiniones y valora tanto los beneficios como los riesgos.</p>`,
      svg: L6.compara("Debate bioético: beneficios y precauciones de la biotecnología", ["Beneficios", "var(--leaf)", ["curar enfermedades", "más alimentos", "menos contaminación", "nuevos materiales"]], ["Precauciones", "var(--red)", ["efectos desconocidos", "biodiversidad", "acceso desigual", "privacidad"]]),
    },
  ],
  figura: {
    titulo: "Cómo se fabrica insulina con bacterias",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cuatro pasos: aislar el gen, insertarlo en un plásmido, introducirlo en bacterias y cultivarlas para obtener insulina">
      <defs>${flecha("bt3", "var(--muted)")}</defs>
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["1", "Cortar", "el gen humano", "con enzimas", "var(--red)"], ["2", "Pegar", "en un plásmido", "con ADN ligasa", "var(--pen)"], ["3", "Introducir", "en bacterias", "que lo aceptan", "var(--leaf)"], ["4", "Cultivar", "y purificar", "la insulina", "var(--sun)"]]
        .map(([n, t, a, b, c], i) => `<rect x="${16 + i * 156}" y="30" width="138" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <circle cx="${85 + i * 156}" cy="62" r="18" fill="${c}"/><text x="${85 + i * 156}" y="69" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" ${D}>${n}</text>
          <text x="${85 + i * 156}" y="112" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${t}</text>
          <text x="${85 + i * 156}" y="140" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${85 + i * 156}" y="160" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${b}</text>
          ${i < 3 ? `<path d="M${156 + i * 156} 110 H ${170 + i * 156}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#bt3)"/>` : ""}`).join("")}
    </svg>`,
  },
  video: { id: "NMIc49qGt2g", titulo: "La ingeniería genética cambiará todo para siempre: CRISPR", canal: "En Pocas Palabras – Kurzgesagt", vistas: 3520168, megusta: 0, busqueda: "biotecnología ingeniería genética" },
  ejemplos: [
    { enunciado: "Partes de 1 molécula de ADN y haces 10 ciclos de PCR. ¿Cuántas copias tendrás?", pasos: ["En cada ciclo se duplica la cantidad.", "Tras n ciclos hay 2ⁿ copias.", "2¹⁰ = 1.024."], resultado: "1.024 copias (tras 30 ciclos serían más de mil millones)." },
    { enunciado: "Explica los pasos para que una bacteria fabrique insulina humana.", pasos: ["Se corta el gen de la insulina del ADN humano con enzimas de restricción.", "Se corta un plásmido bacteriano con la misma enzima y se pega el gen con ADN ligasa: se obtiene ADN recombinante.", "Se introduce el plásmido en bacterias, que se multiplican y fabrican insulina.", "Se cultivan en grandes tanques y se purifica la insulina."], resultado: "Bacteria transgénica que produce insulina para personas con diabetes." },
    { enunciado: "En un caso de paternidad, el hijo tiene bandas 1, 2, 3 y 4. La madre tiene 1 y 3. El posible padre A tiene 2 y 4, y el B, 2 y 5. ¿Quién es el padre?", pasos: ["Las bandas que no vienen de la madre son la 2 y la 4: tienen que venir del padre.", "El candidato A tiene la 2 y la 4.", "El candidato B no tiene la 4."], resultado: "El padre es A." },
    { enunciado: "La enzima EcoRI corta en la secuencia GAATTC. ¿Cuántos fragmentos se obtienen al cortar este ADN lineal: AAGAATTCCTTGCAGAATTCGG?", pasos: ["Se busca la secuencia GAATTC.", "Aparece dos veces: en las posiciones 3-8 y 15-20.", "En un ADN lineal, dos cortes dan tres fragmentos.", "Si fuera circular (un plásmido), dos cortes darían dos fragmentos."], resultado: "Tres fragmentos." },
    { enunciado: "En una escena del crimen se encuentra sangre con bandas de ADN 2, 5 y 7. El sospechoso X tiene 2, 4 y 7; el Y tiene 2, 5 y 7. ¿Qué se puede concluir?", pasos: ["Hay que comparar todas las bandas.", "X tiene la 4 y no la 5: no coincide.", "Y coincide en las tres bandas.", "En la realidad se analizan 15-20 zonas para que la coincidencia sea casi segura."], resultado: "La muestra es compatible con el sospechoso Y y descarta a X." },
    { enunciado: "Se quiere fabricar un maíz resistente a una oruga. Ordena los pasos y explica para qué sirve cada uno.", pasos: ["Identificar en una bacteria el gen de la proteína tóxica para la oruga.", "Insertarlo en un vector (por ejemplo, el plásmido de Agrobacterium).", "Infectar células de maíz para que incorporen el gen y seleccionar las que lo tienen.", "Regenerar plantas completas a partir de esas células y comprobar en el campo su resistencia y su seguridad."], resultado: "Se obtiene un maíz transgénico (tipo Bt) que se defiende de la plaga con menos insecticidas." },
  ],
  errores: [
    "Pensar que la biotecnología es solo cosa de laboratorios modernos: el pan y el yogur son biotecnología tradicional.",
    "Confundir un organismo transgénico (lleva un gen de otra especie) con un clon (copia genética de otro individuo).",
    "Creer que la PCR crea ADN nuevo de la nada: copia un fragmento que ya existe.",
    "Pensar que la terapia génica modifica a los descendientes del paciente: la mayoría actúa en células del cuerpo, no en los gametos.",
    "Ver solo ventajas o solo riesgos: la bioética pide valorar los dos.",
    "Pensar que comer un alimento transgénico cambia nuestro ADN: los genes de los alimentos se digieren como el resto de moléculas.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Pon tres ejemplos de biotecnología tradicional.", sol: "La fabricación de pan y de vino con levaduras, el yogur y el queso con bacterias, y la selección de razas de animales y variedades de plantas." } },
    { nivel: "básico", ...{ q: "¿Qué son las enzimas de restricción y para qué se usan?", sol: "Enzimas de bacterias que cortan el ADN en secuencias concretas. Se usan como «tijeras» para cortar genes y plásmidos." } },
    { nivel: "básico", ...{ q: "¿Qué es un plásmido y por qué es útil en ingeniería genética?", sol: "Un pequeño ADN circular de las bacterias, aparte de su cromosoma. Sirve como vehículo para introducir genes en ellas." } },
    { nivel: "básico", ...{ q: "Indica tres usos de la PCR.", sol: "Diagnóstico de infecciones (como la COVID-19), criminología (identificar a sospechosos) y pruebas de paternidad." } },
    { nivel: "básico", ...{ q: "¿Qué es un organismo transgénico? Pon un ejemplo agrícola.", sol: "Un organismo al que se le ha introducido un gen de otra especie. Ejemplo: maíz Bt, resistente a una plaga de insectos." } },
    { nivel: "básico", ...{ q: "Indica dos aplicaciones de la biotecnología en el medio ambiente.", sol: "Bacterias que descomponen el petróleo de las mareas negras (biorremediación) y la depuración biológica de aguas residuales." } },
    { nivel: "básico", q: "Define biotecnología e indica la diferencia entre la tradicional y la moderna.", sol: "Es el uso de seres vivos o de sus moléculas para obtener productos útiles. La tradicional usa los organismos tal como son (fermentaciones, selección); la moderna modifica sus genes con ingeniería genética." },
    { nivel: "básico", q: "¿Qué productos se obtienen con la fermentación alcohólica y con la láctica? ¿Qué organismos las hacen?", sol: "Alcohólica (levaduras): pan, vino, cerveza, cava. Láctica (bacterias): yogur, queso, kéfir, encurtidos." },
    { nivel: "básico", q: "¿Qué función tiene la ADN ligasa?", sol: "Une (pega) fragmentos de ADN, por ejemplo un gen dentro de un plásmido." },
    { nivel: "básico", q: "¿Qué es un biorreactor?", sol: "Un tanque donde se cultivan microorganismos o células en condiciones controladas para que fabriquen un producto, como la insulina." },
    { nivel: "básico", q: "¿Qué científicas recibieron el Nobel por CRISPR y qué aportó Francis Mojica?", sol: "Emmanuelle Charpentier y Jennifer Doudna (Nobel de Química 2020). Mojica descubrió las secuencias CRISPR en microorganismos de las salinas de Santa Pola." },
    { nivel: "básico", q: "¿Qué es la biorremediación? Pon un ejemplo.", sol: "El uso de microorganismos para eliminar contaminantes. Ejemplo: bacterias que degradan el petróleo de una marea negra." },
    { nivel: "medio", ...{ q: "¿Cuántas copias hay tras 20 ciclos de PCR partiendo de una molécula?", sol: "2²⁰ = 1.048.576, más de un millón." } },
    { nivel: "medio", ...{ q: "¿Cómo se obtuvo la oveja Dolly?", sol: "Se tomó el núcleo de una célula de la mama de una oveja adulta y se introdujo en un óvulo de otra oveja al que se le había quitado el núcleo; el embrión se implantó en una tercera oveja." } },
    { nivel: "medio", ...{ q: "Explica en qué consiste la terapia génica y una de sus dificultades.", sol: "Introducir una copia correcta de un gen en las células del paciente. Dificultad: llevar el gen a las células adecuadas de forma segura, sin causar reacciones." } },
    { nivel: "medio", q: "Explica los tres pasos de cada ciclo de la PCR y la temperatura aproximada de cada uno.", sol: "1) Desnaturalización a unos 95 °C: se separan las hebras. 2) Unión de cebadores a unos 55 °C. 3) Extensión a unos 72 °C: la polimerasa resistente al calor copia cada hebra." },
    { nivel: "medio", q: "¿Por qué la ADN polimerasa de la PCR se obtiene de una bacteria de aguas termales?", sol: "Porque la PCR calienta repetidamente a 95 °C, y las polimerasas normales se destruirían. La de Thermus aquaticus resiste esas temperaturas." },
    { nivel: "medio", q: "En una electroforesis, ¿hacia qué polo se mueve el ADN y qué fragmentos llegan más lejos?", sol: "Hacia el polo positivo, porque el ADN tiene carga negativa. Los fragmentos más pequeños avanzan más." },
    { nivel: "medio", q: "Explica la diferencia entre un organismo transgénico y un clon.", sol: "El transgénico lleva un gen de otra especie introducido en el laboratorio. El clon es una copia genéticamente idéntica de otro individuo, sin genes nuevos." },
    { nivel: "medio", q: "¿Por qué una bacteria puede fabricar una proteína humana?", sol: "Porque el código genético es universal: la bacteria transcribe y traduce el gen humano con los mismos codones y aminoácidos que nuestras células." },
    { nivel: "medio", q: "Diferencia entre clonación reproductiva y terapéutica.", sol: "La reproductiva busca obtener un individuo completo idéntico a otro (como Dolly); la terapéutica busca obtener células madre para regenerar tejidos, sin llegar a formar un individuo." },
    { nivel: "medio", q: "Explica cómo funciona CRISPR-Cas9 en cuatro pasos.", sol: "1) Se diseña un ARN guía complementario a la zona del gen. 2) El ARN guía lleva la enzima Cas9 hasta allí. 3) Cas9 corta las dos hebras. 4) La célula repara el corte, lo que permite desactivar, corregir o insertar un gen." },
    { nivel: "avanzado", ...{ q: "Plantea un argumento a favor y otro en contra de los cultivos transgénicos.", sol: "A favor: pueden dar más cosecha, resistir plagas y reducir el uso de insecticidas. En contra: pueden afectar a otras especies, reducir la biodiversidad y concentrar las semillas en pocas empresas." } },
    { nivel: "avanzado", q: "Si partes de 5 moléculas de ADN, ¿cuántas copias tendrás tras 15 ciclos de PCR? ¿Cuántos ciclos necesitas para superar el millón partiendo de una?", sol: "5 · 2¹⁵ = 5 · 32.768 = 163.840 copias. Para superar el millón desde una: 2²⁰ = 1.048.576, es decir, 20 ciclos." },
    { nivel: "avanzado", q: "En una prueba de paternidad, el hijo tiene las bandas 3, 5, 6 y 9 y la madre 3 y 6. El posible padre P1 tiene 5 y 8; el P2, 5 y 9. ¿Quién puede ser el padre?", sol: "Las bandas que no vienen de la madre son la 5 y la 9; deben venir del padre. P2 tiene las dos; P1 no tiene la 9. P2 es compatible y P1 queda descartado." },
    { nivel: "avanzado", q: "¿Por qué en la fabricación de insulina el plásmido lleva además un gen de resistencia a un antibiótico?", sol: "Para seleccionar las bacterias que han incorporado el plásmido: al cultivarlas con ese antibiótico, solo sobreviven las que lo tienen, y por tanto llevan también el gen de la insulina." },
    { nivel: "avanzado", q: "Evalúa el caso del arroz dorado: ¿qué problema pretende resolver y qué objeciones se le han planteado?", sol: "Pretende combatir la carencia de vitamina A, que causa ceguera y muertes infantiles en países donde el arroz es la base de la dieta. Objeciones: dudas sobre su eficacia real, la preferencia por soluciones como diversificar la dieta o dar suplementos, el control de las semillas por empresas y los recelos hacia los transgénicos." },
    { nivel: "avanzado", q: "¿Por qué la edición genética de embriones humanos está prohibida en Europa, mientras que la terapia génica somática está permitida?", sol: "Porque los cambios en embriones afectarían a todas sus células, incluidos los gametos, y pasarían a futuras generaciones sin su consentimiento, con riesgos desconocidos. La terapia somática solo afecta al paciente que la acepta y no se hereda." },
    { nivel: "avanzado", q: "Diseña un experimento sencillo para comprobar que las levaduras producen CO₂ al fermentar azúcar.", sol: "Preparar tres botellas con agua tibia: una con levadura y azúcar, otra solo con levadura y otra solo con azúcar (controles). Poner un globo en cada boca. Tras 30-60 minutos, solo se hincha el globo de la primera: las levaduras fermentan el azúcar y liberan CO₂." },
    { nivel: "avanzado", q: "Una empresa propone liberar mosquitos modificados para que sus crías no lleguen a adultas y así reducir el dengue. Escribe dos ventajas y dos riesgos que deberían evaluarse.", sol: "Ventajas: reduce la población de mosquitos transmisores y las enfermedades sin insecticidas; actúa solo sobre una especie. Riesgos: efectos sobre las cadenas tróficas (animales que comen mosquitos); que otra especie ocupe su lugar; que el control falle o tenga efectos imprevistos; aceptación de la población." },
  ],
  quiz: [
    { q: "¿Cuál es un ejemplo de biotecnología tradicional?", o: ["Editar genes con CRISPR", "Hacer yogur con bacterias", "Clonar una oveja", "Fabricar insulina en bacterias"], a: 1, e: "Es una fermentación láctica." },
    { q: "La biotecnología «verde» se aplica en…", o: ["la medicina", "el mar", "la industria", "la agricultura"], a: 3, e: "Roja: salud; azul: mar; blanca: industria." },
    { q: "La fermentación alcohólica de las levaduras produce…", o: ["alcohol y CO₂", "ácido láctico", "oxígeno", "insulina"], a: 0, e: "El CO₂ hace subir el pan." },
    { q: "¿Quién descubrió la penicilina?", o: ["Pasteur", "Mendel", "Fleming", "Mullis"], a: 2, e: "En 1928, a partir del moho Penicillium." },
    { q: "El primer organismo con ADN recombinante se obtuvo en…", o: ["1953", "1996", "1973", "2012"], a: 2, e: "Cohen y Boyer." },
    { q: "Las enzimas de restricción…", o: ["cortan el ADN en secuencias concretas", "pegan ADN", "copian el ADN", "traducen el ARN"], a: 0, e: "Son las «tijeras»." },
    { q: "Un plásmido es…", o: ["una proteína", "un virus", "un orgánulo vegetal", "un pequeño anillo de ADN bacteriano usado como vector"], a: 3, e: "Lleva genes al interior de las células." },
    { q: "Desde 1982, la insulina para diabéticos se obtiene…", o: ["del páncreas de cerdos", "de bacterias modificadas", "de plantas", "por síntesis química"], a: 1, e: "Con ADN recombinante." },
    { q: "Tras 10 ciclos de PCR a partir de una molécula hay…", o: ["1.024 copias", "10 copias", "20 copias", "100 copias"], a: 0, e: "2¹⁰." },
    { q: "En la electroforesis, los fragmentos que avanzan más son…", o: ["los más grandes", "los de ARN", "los más pequeños", "todos igual"], a: 2, e: "Se mueven con más facilidad por el gel." },
    { q: "La huella genética se usa en…", o: ["hacer pan", "pruebas de paternidad y criminología", "regar cultivos", "fabricar plásticos"], a: 1, e: "Cada persona tiene un perfil único." },
    { q: "El maíz Bt es resistente a…", o: ["la sequía", "los herbicidas", "el frío", "una oruga plaga"], a: 3, e: "Produce una proteína de Bacillus thuringiensis." },
    { q: "Un organismo transgénico es el que…", o: ["ha sido clonado", "vive en dos ambientes", "no tiene ADN", "lleva un gen de otra especie"], a: 3, e: "El gen introducido se llama transgén." },
    { q: "Dolly se clonó por…", o: ["PCR", "transferencia nuclear", "fermentación", "CRISPR"], a: 1, e: "Núcleo de célula adulta en óvulo sin núcleo." },
    { q: "En CRISPR-Cas9, la enzima Cas9…", o: ["copia el ADN", "une aminoácidos", "corta el ADN en el punto indicado por el ARN guía", "fabrica plásmidos"], a: 2, e: "El ARN guía la lleva al lugar exacto." },
    { q: "Las secuencias CRISPR son originalmente…", o: ["un sistema de defensa de las bacterias contra virus", "un tipo de vacuna", "genes humanos", "enzimas de levadura"], a: 0, e: "Guardan memoria de virus anteriores." },
    { q: "Las terapias CAR-T modifican…", o: ["los glóbulos rojos", "linfocitos T del paciente", "las neuronas", "los gametos"], a: 1, e: "Para que ataquen el cáncer." },
    { q: "La terapia génica somática…", o: ["afecta solo al paciente", "se transmite a los hijos", "está prohibida en Europa", "modifica embriones"], a: 0, e: "No toca las células germinales." },
    { q: "El uso de bacterias para limpiar un vertido de petróleo se llama…", o: ["clonación", "terapia génica", "fermentación", "biorremediación"], a: 3, e: "Biotecnología gris o ambiental." },
    { q: "El Convenio de Oviedo trata sobre…", o: ["el cambio climático", "la pesca", "los derechos humanos y la biomedicina", "el comercio de semillas"], a: 2, e: "Fija límites éticos (1997)." },
  ],
  examen: [
    { q: "La oveja Dolly fue importante porque…", o: ["fue el primer animal transgénico", "fue el primer mamífero clonado de una célula adulta", "producía insulina", "tenía genes editados con CRISPR"], a: 1, e: "1996, Escocia." },
    { q: "¿Qué técnica copia millones de veces un fragmento de ADN?", o: ["PCR", "Fermentación", "Electroforesis", "Clonación"], a: 0, e: "Reacción en cadena de la polimerasa." },
    { q: "Las herramientas básicas de la ingeniería genética son…", o: ["microscopio y bisturí", "levaduras y bacterias lácticas", "enzimas de restricción, ligasa y vectores", "rayos X y ultrasonidos"], a: 2, e: "Tijeras, pegamento y vehículo." },
    { q: "El ADN recombinante es…", o: ["ADN dañado", "ADN de dos orígenes unido en el laboratorio", "ADN de un clon", "ARN mensajero"], a: 1, e: "Por ejemplo, un gen humano en un plásmido." },
    { q: "La biotecnología que usa microorganismos para fabricar enzimas de detergentes es…", o: ["roja", "verde", "azul", "blanca"], a: 3, e: "Biotecnología industrial." },
    { q: "Una preocupación ambiental sobre los transgénicos es…", o: ["que tengan menos ADN", "que no se puedan comer", "que sean clones", "que sus genes pasen a especies silvestres"], a: 3, e: "También la aparición de plagas resistentes." },
    { q: "CRISPR permite…", o: ["clonar ovejas", "editar un gen en un punto exacto", "hacer yogur", "ver células al microscopio"], a: 1, e: "Es un «corrector de textos» del ADN." },
    { q: "La terapia génica in vivo introduce el gen…", o: ["en células sacadas del cuerpo", "en el óvulo", "directamente en el cuerpo, a menudo con un virus modificado", "en una bacteria"], a: 2, e: "La ex vivo modifica las células fuera." },
  ],
  feynman: ["La diferencia entre biotecnología tradicional y moderna", "Cómo se cortan y pegan genes", "Cómo una bacteria llega a fabricar insulina humana", "Qué es CRISPR y para qué sirve", "Un debate ético de la biotecnología y tu opinión argumentada"],
  mapa: mapa("BIOTECNOLOGÍA", "var(--eso)", [
    ["Tradicional", "pan · yogur · vino", "var(--sun)"],
    ["Herramientas", "enzimas · plásmidos · PCR", "var(--pen)"],
    ["Técnicas", "transgénicos · clonación · CRISPR", "var(--red)"],
    ["Usos y ética", "salud · campo · ambiente", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["¿Qué es el ADN recombinante?", "ADN formado al unir fragmentos de orígenes distintos."],
    ["¿Qué es un vector en ingeniería genética?", "Un vehículo (plásmido o virus) que lleva un gen al interior de una célula."],
    ["¿Qué es un transgénico?", "Un organismo que lleva genes de otra especie."],
    ["¿Qué es la clonación?", "La obtención de individuos genéticamente idénticos a otro."],
    ["¿Qué es la biorremediación?", "El uso de seres vivos para eliminar contaminantes del medio."],
    ["PCR", "Técnica que copia millones de veces un fragmento de ADN."],
    ["Huella genética", "Patrón de ADN único de cada persona; se usa en criminología y paternidad."],
    ["Terapia génica", "Introducir un gen correcto en las células de un paciente."],
    ["Fermentación", "Obtención de energía sin oxígeno por microorganismos: alcohólica (levaduras) y láctica (bacterias)."],
    ["Enzima de restricción", "«Tijera» que corta el ADN en una secuencia concreta."],
    ["Electroforesis", "Separación de fragmentos de ADN por tamaño en un gel con corriente eléctrica."],
    ["CRISPR-Cas9", "Herramienta de edición: un ARN guía lleva la enzima Cas9 a cortar un punto exacto del ADN."],
  ],
  glosario: [
    ["Biotecnología", "Uso de seres vivos o sus moléculas para obtener productos útiles."],
    ["Ingeniería genética", "Técnicas para aislar, modificar y transferir genes."],
    ["Fermentación", "Proceso sin oxígeno en el que microorganismos transforman azúcares."],
    ["Enzima de restricción", "Enzima que corta el ADN en una secuencia concreta."],
    ["ADN ligasa", "Enzima que une fragmentos de ADN."],
    ["Vector", "Plásmido o virus que transporta un gen a una célula."],
    ["Plásmido", "Pequeño ADN circular de las bacterias, independiente del cromosoma."],
    ["ADN recombinante", "ADN formado al unir en el laboratorio fragmentos de distinto origen."],
    ["Biorreactor", "Tanque donde se cultivan células para fabricar un producto."],
    ["PCR", "Técnica que obtiene millones de copias de un fragmento de ADN."],
    ["Electroforesis", "Técnica que separa fragmentos de ADN por tamaño."],
    ["Huella genética", "Perfil de ADN único de cada persona."],
    ["Transgénico", "Organismo que lleva un gen de otra especie."],
    ["Clon", "Individuo o célula genéticamente idéntico a otro."],
    ["CRISPR-Cas9", "Sistema para editar genes con precisión."],
    ["Terapia génica", "Tratamiento que introduce, corrige o desactiva genes en un paciente."],
    ["Biorremediación", "Uso de seres vivos para eliminar contaminantes."],
    ["Bioética", "Reflexión ética sobre la biología y la medicina."],
  ],
  situacion: {
    titulo: "Juicio simulado: ¿cultivamos transgénicos en nuestra comarca?",
    reto: "El ayuntamiento debe decidir si permite un campo de ensayo de un maíz transgénico resistente a la sequía. Vuestra clase organizará un juicio simulado con un jurado de otra clase: cada equipo representa a un grupo implicado y debe defender su postura con datos científicos verificados.",
    pasos: [
      "Repartid los papeles: empresa de semillas, agricultores convencionales, agricultores ecológicos, asociación ecologista, investigadores públicos y consumidores.",
      "Investigad cómo se obtiene un transgénico, qué dice la normativa europea y qué evidencias científicas hay sobre su seguridad y su impacto ambiental, citando fuentes fiables.",
      "Haced en el laboratorio una práctica de biotecnología tradicional (yogur o fermentación de levaduras) para entender cómo trabajan los microorganismos.",
      "Preparad un alegato de 3 minutos con al menos tres datos verificados y una réplica a los argumentos de los demás grupos.",
      "Celebrad el juicio; el jurado vota y explica qué argumentos le convencieron y por qué.",
    ],
    producto: "Dosier de cada grupo con fuentes, alegato oral y acta del jurado con la decisión razonada.",
    evaluacion: [
      "Rigor científico y uso correcto de los conceptos de ingeniería genética.",
      "Calidad y fiabilidad de las fuentes citadas.",
      "Capacidad de argumentar y de responder a otras posturas con respeto.",
      "Distinción entre hechos científicos y opiniones o valores.",
    ],
  },
  familias: ["Mirad etiquetas de detergentes o alimentos y buscad la palabra «enzimas» o «fermentado».", "Debatid en la cena: ¿estaría bien editar genes para evitar una enfermedad? ¿Y para elegir el color de ojos?", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de «Genética y evolución» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): biotecnología, ingeniería genética, PCR, organismos modificados genéticamente, clonación, edición genética y sus implicaciones éticas, sociales y ambientales. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Elaborar yogur casero o fermentar azúcar con levaduras y medir el CO₂ con un globo.",
      "Simular un corte con enzimas de restricción y una electroforesis con tiras de papel.",
      "Resolver casos de huella genética (paternidad y criminología).",
      "Situación de aprendizaje: juicio simulado sobre un cultivo transgénico.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ingeniería genética, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ingenier%C3%ADa_gen%C3%A9tica" },
    { t: "CRISPR, Wikipedia en español", url: "https://es.wikipedia.org/wiki/CRISPR" },
  ],
  revisado: "2026-11-13",
};
