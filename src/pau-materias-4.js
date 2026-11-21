// PAU 2027 · Materias de la modalidad de Artes y de la modalidad General. Modelos de elaboración propia de Escolapedia.
const artes = (extra) => ["Comprueba en la web de tu comunidad si esta materia tiene examen y qué materiales se pueden llevar.", ...extra];
module.exports = [
  {
    nombre: "Dibujo Artístico II", sigla: "DA", fase: "acceso", quien: "Artes: Artes Plásticas, Imagen y Diseño",
    intro: "Materia de modalidad de la vía de Artes Plásticas, Imagen y Diseño: es tu examen de la fase de acceso. Dibujo del natural, análisis de la forma, color y expresión.",
    formato: ["90 minutos, con material de dibujo (lápices de grafito, carboncillo, lápices de color o técnicas secas según la comisión) y papel facilitado por el tribunal.", "Suele combinar un <b>ejercicio práctico</b> (dibujo de un modelo, un bodegón, una fotografía o una propuesta creativa) con <b>preguntas de análisis</b> sobre la forma, la luz, la composición o el lenguaje visual.", "Se valora el encaje y la proporción, el valor tonal (claroscuro), la composición, la expresividad y la limpieza."],
    claves: ["Encaje: proporción, encuadre, ejes y medidas relativas.", "Luz y sombra: valores tonales, sombra propia y arrojada.", "Perspectiva intuitiva en el dibujo del natural.", "Color: teoría, armonías y contrastes.", "Figura humana: canon, movimiento, apuntes rápidos.", "Composición: peso visual, ritmo, equilibrio."],
    consejos: artes(["Empieza siempre por un encaje ligero de todo el conjunto antes de detallar.", "Entorna los ojos para ver las masas de luz y sombra.", "Gestiona el tiempo: 10 minutos de encaje, 50 de desarrollo y 20 de ajustes y preguntas.", "Haz bocetos rápidos (5 minutos) cada día durante el curso."]),
    errores: ["Detallar una parte antes de tener el conjunto encajado.", "Dibujar contornos duros en lugar de pasar por planos de valor.", "Composición desequilibrada o demasiado pequeña en el papel."],
    modelo: {
      titulo: "bodegón y análisis",
      instrucciones: "Formato A3. Técnica: grafito o carboncillo. Duración: 90 minutos.",
      preguntas: [
        { q: "Dibuja del natural el bodegón propuesto (una botella, un paño con pliegues y dos frutas, iluminados desde un lado), con un encaje correcto y un estudio de luces y sombras.", puntos: 6, sol: "Criterios: encuadre y composición en el formato (1); encaje, proporciones y relaciones entre objetos (2); valoración tonal: claroscuro, sombras propias y arrojadas, volumen (2); calidad gráfica y expresividad (1)." },
        { q: "Explica qué es el claroscuro y cómo lo usaste para dar volumen a la botella y al paño.", puntos: 2, sol: "El <b>claroscuro</b> es el contraste entre zonas iluminadas y oscuras para crear la ilusión de volumen. En la botella: brillo (punto de máxima luz), luz, penumbra, sombra propia, luz reflejada y sombra arrojada. En el paño: cada pliegue tiene su lado iluminado y su lado en sombra; la gradación suave da sensación de tela." },
        { q: "Describe dos recursos para equilibrar una composición.", puntos: 2, sol: "Distribuir el <b>peso visual</b> (los objetos grandes u oscuros pesan más) en torno a un centro de interés, usar la <b>ley de los tercios</b>, crear <b>diagonales</b> que guíen la mirada, alternar llenos y vacíos (espacio negativo) y compensar masas de un lado con elementos de color o contraste en el otro." },
      ],
    },
  },
  {
    nombre: "Análisis Musical II", sigla: "AM", fase: "eleccion", quien: "Artes: Música y Artes Escénicas",
    intro: "Una de las dos materias que puedes elegir como modalidad en la vía de Música y Artes Escénicas. Audición y análisis de obras de distintos estilos.",
    formato: ["90 minutos. <b>Audición</b> de uno o varios fragmentos (que se escuchan varias veces) y/o <b>partitura</b>.", "Preguntas sobre forma, textura, melodía, armonía, timbre, ritmo, estilo y contexto, y un comentario completo de la obra.", "Se valora el vocabulario musical preciso y la relación entre lo que se oye y el estilo."],
    claves: ["Formas: binaria, ternaria, rondó, variaciones, forma sonata, fuga.", "Texturas: monodia, homofonía, polifonía, melodía acompañada.", "Estilos: medieval, renacentista, barroco, clásico, romántico, siglo XX, jazz, músicas populares.", "Cadencias, tonalidad y modulación.", "Agrupaciones e instrumentos."],
    consejos: artes(["Escucha activamente cada día obras de la lista de la comisión, con partitura si es posible.", "En la primera audición, céntrate en la forma y la plantilla; en la segunda, en la textura y la armonía.", "Usa un guion fijo de comentario."]),
    errores: ["Describir emociones sin elementos técnicos.", "Confundir textura polifónica y homofónica.", "Datar mal el estilo por no fijarse en la plantilla instrumental."],
    modelo: {
      titulo: "comentario de una audición",
      instrucciones: "Se escuchará tres veces el primer movimiento de la Sinfonía n.º 40 en sol menor, K. 550, de W. A. Mozart (exposición). Duración: 90 minutos.",
      preguntas: [
        { q: "Identifica la forma del fragmento y sus secciones.", puntos: 3, sol: "Se trata de la <b>exposición de una forma sonata</b>: primer tema en sol menor (motivo de tres notas en las cuerdas sobre acompañamiento de violas), puente modulante, segundo tema en el relativo mayor (si bemol mayor) con diálogo entre cuerdas y maderas, y coda o tema conclusivo. Después vendrían el desarrollo y la reexposición." },
        { q: "Describe la textura, la plantilla y los rasgos que lo sitúan en el Clasicismo.", puntos: 3, sol: "<b>Melodía acompañada</b> con pasajes de diálogo; orquesta clásica (cuerdas, flauta, oboes, clarinetes, fagotes y trompas, sin trompetas ni timbales). Rasgos clásicos: frases equilibradas (pregunta-respuesta), claridad formal, contraste temático y tonal, dinámicas graduales." },
        { q: "Contextualiza la obra y su autor.", puntos: 4, sol: "Mozart (1756-1791) la compuso en 1788 en Viena, junto con las sinfonías 39 y 41. Es una de sus dos únicas sinfonías en tonalidad menor, lo que le da un carácter dramático que anticipa el Romanticismo. Contexto: Clasicismo vienés (Haydn, Mozart, primer Beethoven), música para el público burgués y los conciertos públicos además de la corte." },
      ],
    },
  },
  {
    nombre: "Artes Escénicas II", sigla: "AE", fase: "eleccion", quien: "Artes: Música y Artes Escénicas",
    intro: "La otra materia que puedes elegir como modalidad en la vía de Música y Artes Escénicas. Teatro, danza y espectáculo: análisis, creación y contexto.",
    formato: ["90 minutos. Análisis de un <b>texto dramático</b>, una imagen o un fragmento de espectáculo, preguntas sobre teoría escénica y una propuesta de <b>puesta en escena</b>.", "Se valoran los conceptos (dramaturgia, espacio escénico, interpretación, dirección) y la creatividad argumentada."],
    claves: ["Elementos del hecho escénico: texto, actor, espacio, tiempo, público.", "Grandes teorías de la interpretación: Stanislavski, Brecht, Grotowski, Artaud.", "Historia del teatro y la danza: de Grecia a las propuestas contemporáneas.", "Oficios del espectáculo: dirección, escenografía, iluminación, vestuario, sonido.", "Diseño de una puesta en escena."],
    consejos: artes(["Ve teatro y danza (también grabaciones) y apunta qué decisiones de puesta en escena observas.", "Para la propuesta, justifica cada decisión (espacio, luz, vestuario) con el sentido de la obra."]),
    errores: ["Confundir texto dramático y texto espectacular.", "Propuestas de puesta en escena sin justificación."],
    modelo: {
      titulo: "fragmento de La casa de Bernarda Alba",
      instrucciones: "A partir del final del acto III de La casa de Bernarda Alba (García Lorca, 1936), responde. Duración: 90 minutos.",
      preguntas: [
        { q: "Analiza el conflicto dramático y los personajes del fragmento.", puntos: 3, sol: "Conflicto entre <b>autoridad y libertad</b>: Bernarda impone el luto, el silencio y las apariencias; Adela representa el deseo y la rebeldía. Tras la muerte de Adela, Bernarda ordena silencio («¡Silencio!»): triunfo trágico de la represión. Personajes: Bernarda (tirana), Adela (rebelde), Martirio (envidia), La Poncia (voz popular)." },
        { q: "Diseña una propuesta de espacio escénico e iluminación para este final.", puntos: 4, sol: "Ejemplo: espacio blanco y cerrado (muros altos, sin ventanas visibles) que subraye el encierro; luz cenital fría que se va cerrando sobre Bernarda; el negro del vestuario contrastando con el blanco; silencio total tras la última palabra antes del oscuro. Se valora la coherencia con el sentido de la obra." },
        { q: "Explica la diferencia entre el método de Stanislavski y el teatro épico de Brecht.", puntos: 3, sol: "<b>Stanislavski</b>: busca la verdad emocional; el actor se identifica con el personaje (memoria emocional, «sí mágico») y el público se emociona y se identifica. <b>Brecht</b>: teatro épico con <b>distanciamiento</b> (Verfremdung): el actor muestra al personaje sin fundirse con él, se rompe la ilusión (carteles, canciones, luz visible) para que el público reflexione críticamente sobre la sociedad." },
      ],
    },
  },
  {
    nombre: "Diseño", sigla: "DI", fase: "admision", quien: "Artes",
    intro: "Fundamentos, historia y metodología del diseño gráfico, de producto, de moda y de espacios. Pondera en Diseño, Bellas Artes y Arquitectura en muchas universidades.",
    formato: ["90 minutos. Preguntas teóricas (historia, conceptos, metodología) y un <b>ejercicio práctico</b> de diseño (un logotipo, un cartel, un objeto) con bocetos y memoria."],
    claves: ["Metodología proyectual: briefing, investigación, bocetos, prototipo, evaluación.", "Elementos y principios: forma, color, tipografía, retícula, jerarquía.", "Historia: Arts & Crafts, Art Nouveau, Bauhaus, diseño suizo, diseño actual.", "Diseño sostenible y accesible."],
    consejos: artes(["En el práctico, enseña el proceso: varios bocetos, el elegido y una breve memoria.", "Ten claras dos o tres obras de referencia de cada movimiento."]),
    errores: ["Presentar solo el resultado final sin proceso.", "Ignorar el briefing (público, función, soporte)."],
    modelo: {
      titulo: "Bauhaus y diseño de un logotipo",
      instrucciones: "Responde a las tres preguntas. Duración: 90 minutos.",
      preguntas: [
        { q: "Explica la importancia de la Bauhaus para el diseño moderno.", puntos: 3, sol: "Escuela alemana (1919-1933, Weimar, Dessau, Berlín) fundada por Walter Gropius. Une arte, artesanía e industria; «la forma sigue a la función»; formas geométricas, colores primarios, tipografía sin serifa, diseño para la producción en serie (silla Wassily de Breuer, lámpara de Wagenfeld). Profesores: Kandinsky, Klee, Moholy-Nagy, Mies van der Rohe. Su cierre por el nazismo dispersó sus ideas por el mundo." },
        { q: "Diseña un logotipo para una biblioteca juvenil: tres bocetos, versión final y memoria (público, concepto, color y tipografía).", puntos: 5, sol: "Criterios: proceso de bocetos (1), adecuación al briefing (1), originalidad y síntesis formal (1,5), legibilidad y versatilidad (tamaños, blanco y negro) (1), memoria justificada (0,5)." },
        { q: "¿Qué es el diseño universal o accesible? Pon un ejemplo.", puntos: 2, sol: "Diseñar productos, espacios y servicios que puedan usar todas las personas, sin necesidad de adaptaciones, con independencia de su edad o capacidad. Ejemplos: tiradores de palanca en lugar de pomos, rampas, señalética con pictogramas y braille, webs con buen contraste y texto alternativo." },
      ],
    },
  },
  {
    nombre: "Técnicas de Expresión Gráfico-Plástica", slug: "tecnicas-de-expresion-grafico-plastica", sigla: "TE", fase: "admision", quien: "Artes",
    intro: "Procedimientos y técnicas del dibujo, la pintura, el grabado y las técnicas mixtas y digitales. Pondera en Bellas Artes y Diseño.",
    formato: ["90 minutos. Preguntas teóricas sobre técnicas (materiales, soportes, procesos) y, en algunas comunidades, un ejercicio práctico."],
    claves: ["Técnicas secas (grafito, carboncillo, pastel) y húmedas (acuarela, gouache, acrílico, óleo, temple).", "Grabado: calcográfico (aguafuerte, punta seca), en relieve (xilografía, linograbado), serigrafía.", "Técnicas mixtas, collage y técnicas digitales.", "Soportes, aglutinantes y disolventes."],
    consejos: artes(["Haz una tabla con cada técnica: material, aglutinante, soporte, disolvente, características y un artista que la use."]),
    errores: ["Confundir grabado en hueco y en relieve.", "Confundir aglutinante y disolvente."],
    modelo: {
      titulo: "técnicas pictóricas y grabado",
      instrucciones: "Responde a las tres preguntas. Duración: 90 minutos.",
      preguntas: [
        { q: "Compara la acuarela y el óleo: composición, soporte, proceso y efectos.", puntos: 4, sol: "<b>Acuarela</b>: pigmento + goma arábiga, se diluye en agua; papel de algodón grueso; transparente, se trabaja de claro a oscuro y el blanco es el del papel; seca rápido; efectos de mancha y fusión. <b>Óleo</b>: pigmento + aceite de linaza, se diluye con aguarrás o trementina; lienzo o tabla imprimados; opaco o en veladuras, permite corregir y pintar de oscuro a claro; secado lento; empastes y gran riqueza de matices (Van Eyck, Tiziano, Velázquez)." },
        { q: "Explica el proceso del aguafuerte.", puntos: 4, sol: "Grabado calcográfico (en hueco): 1) se cubre una plancha de cobre o zinc con un barniz protector; 2) se dibuja con una punta que levanta el barniz; 3) se sumerge en ácido, que muerde el metal donde no hay barniz (más tiempo = línea más profunda y oscura); 4) se limpia, se entinta, se retira la tinta de la superficie y queda en los surcos; 5) se estampa sobre papel húmedo con el tórculo. Ejemplo: Goya, <i>Los Caprichos</i> (con aguatinta)." },
        { q: "¿Qué es el collage y qué aportó a las vanguardias?", puntos: 2, sol: "Técnica que consiste en pegar sobre un soporte materiales diversos (papel, tela, fotografías, objetos). Picasso y Braque la usaron en el cubismo sintético (1912) para introducir la realidad en el cuadro; después la adoptaron dadaístas (fotomontaje) y surrealistas. Rompió con la idea de que la obra debía estar solo pintada." },
      ],
    },
  },
  {
    nombre: "Fundamentos Artísticos", sigla: "FA", fase: "admision", quien: "Artes",
    intro: "Historia y teoría del arte desde la mirada de los procesos creativos. Pondera en Bellas Artes, Historia del Arte, Diseño y otras.",
    formato: ["90 minutos. Comentario de obras (imagen) y preguntas sobre conceptos estéticos, movimientos y artistas, de la Antigüedad al arte actual."],
    claves: ["Qué es el arte: funciones, belleza, estética.", "Grandes movimientos y sus rupturas.", "El papel del artista, el mecenazgo y el mercado.", "Arte y tecnología: fotografía, cine, arte digital.", "Mujeres artistas en la historia."],
    consejos: artes(["Relaciona cada obra con su contexto y con la idea de arte de su época.", "Incluye artistas mujeres: Artemisia Gentileschi, Sofonisba Anguissola, Frida Kahlo, Maruja Mallo."]),
    errores: ["Analizar solo la forma y olvidar la función y el significado.", "Juicios de gusto sin argumentos."],
    modelo: {
      titulo: "fotografía y arte; Artemisia Gentileschi",
      instrucciones: "Responde a las tres preguntas. Duración: 90 minutos.",
      preguntas: [
        { q: "¿Cómo cambió la invención de la fotografía (1839) la pintura del siglo XIX?", puntos: 4, sol: "La fotografía asumió la función de reproducir fielmente la realidad (retrato, documentación), lo que liberó a la pintura de esa tarea. Los pintores exploraron lo que la cámara no podía hacer: la luz y el instante percibido (Impresionismo), el color subjetivo y la expresión (Van Gogh, Gauguin), la estructura (Cézanne), y finalmente la abstracción. También influyó en encuadres descentrados y escenas cotidianas (Degas)." },
        { q: "Comenta la figura de Artemisia Gentileschi y su obra <i>Judit decapitando a Holofernes</i>.", puntos: 4, sol: "Pintora barroca italiana (1593-c. 1656), seguidora de Caravaggio, primera mujer admitida en la Academia de Florencia. La obra (c. 1620, Uffizi) muestra con tenebrismo y realismo violento a Judit y su criada matando al general asirio; composición en diagonales, luz dirigida, fuerza física de las mujeres. Se ha leído en relación con su biografía (fue víctima de una violación y del juicio posterior), aunque hoy se destaca sobre todo su maestría y su éxito profesional." },
        { q: "¿Es arte un urinario firmado? Argumenta tu respuesta a partir de <i>Fuente</i> de Duchamp.", puntos: 2, sol: "Se valora la argumentación: Duchamp (1917) desplaza el valor del arte del objeto y la habilidad manual a la idea y al contexto (el museo, la firma); abre el arte conceptual. Se puede defender o criticar, pero con argumentos." },
      ],
    },
  },
  {
    nombre: "Historia de la Música y de la Danza", sigla: "HM", fase: "admision", quien: "Artes",
    intro: "La evolución de la música y la danza en Occidente y su relación con la sociedad. Pondera en Musicología, Historia y Ciencias de la Música, Artes Escénicas y otras.",
    formato: ["90 minutos. Audiciones y/o textos e imágenes, con comentario, y preguntas de desarrollo sobre periodos, autores, géneros y danza."],
    claves: ["Edad Media: canto gregoriano, trovadores, Ars Nova.", "Renacimiento: polifonía (Palestrina, Victoria), madrigal.", "Barroco: ópera, bajo continuo, Bach, Händel, Vivaldi, ballet de corte.", "Clasicismo: Haydn, Mozart, Beethoven, ballet de acción.", "Romanticismo: lied, poema sinfónico, ópera, ballet romántico.", "Siglo XX: impresionismo, atonalismo, nacionalismo español (Falla), danza moderna, jazz y músicas urbanas."],
    consejos: artes(["Haz una línea del tiempo con un compositor y una obra por periodo, y un coreógrafo o ballet.", "Escucha cada obra de la lista de la comisión al menos tres veces."]),
    errores: ["Confundir estilos cercanos (Barroco tardío y Clasicismo).", "Olvidar la parte de danza."],
    modelo: {
      titulo: "Barroco y ballet romántico",
      instrucciones: "Responde a las tres preguntas. Duración: 90 minutos.",
      preguntas: [
        { q: "Características de la música barroca y dos compositores representativos.", puntos: 4, sol: "Periodo 1600-1750. Bajo continuo, contraste (solo-tutti, forte-piano), afectos, melodía acompañada y gran contrapunto, consolidación de la tonalidad. Géneros: ópera, oratorio, cantata, concierto (grosso y solista), suite, fuga. Compositores: <b>Monteverdi</b> (<i>L'Orfeo</i>), <b>Vivaldi</b> (<i>Las cuatro estaciones</i>), <b>J. S. Bach</b> (<i>Pasión según san Mateo</i>, <i>El clave bien temperado</i>), <b>Händel</b> (<i>El Mesías</i>)." },
        { q: "Explica qué es el ballet romántico y cita una obra.", puntos: 4, sol: "Ballet del siglo XIX (hacia 1830-1870) con temas fantásticos y sobrenaturales (sílfides, willis), protagonismo de la bailarina, uso de las <b>puntas</b>, tutú romántico largo y blanco («ballet blanco»). Obras: <i>La Sílfide</i> (1832) y <i>Giselle</i> (1841, música de Adam). Bailarinas: Marie Taglioni, Carlotta Grisi." },
        { q: "Explica la aportación de Manuel de Falla al nacionalismo musical español.", puntos: 2, sol: "Falla (1876-1946) incorporó la música popular española, sobre todo andaluza, con técnicas modernas aprendidas en París (Debussy, Ravel, Stravinski): <i>La vida breve</i>, <i>El amor brujo</i>, <i>El sombrero de tres picos</i> (con los Ballets Rusos y decorados de Picasso), <i>Noches en los jardines de España</i>; después, una etapa más neoclásica (<i>El retablo de maese Pedro</i>, Concierto para clave)." },
      ],
    },
  },
  {
    nombre: "Literatura Dramática", sigla: "LD", fase: "admision", quien: "Artes",
    intro: "El teatro como literatura y espectáculo, de la tragedia griega al teatro actual. Pondera en Artes Escénicas, Filologías y otras.",
    formato: ["90 minutos. Comentario de un fragmento dramático y preguntas sobre géneros, autores, épocas y elementos del texto teatral."],
    claves: ["Tragedia y comedia griegas (Sófocles, Aristófanes).", "Shakespeare y el teatro isabelino.", "Comedia nueva española (Lope de Vega, Calderón).", "Molière, el drama romántico, el realismo (Ibsen, Chéjov).", "Teatro del siglo XX: Valle-Inclán, Lorca, Brecht, teatro del absurdo (Beckett).", "Texto principal y secundario (acotaciones), estructura, personajes, conflicto."],
    consejos: artes(["Lee las obras completas de la lista oficial y prepara una ficha de cada una.", "En el comentario, analiza también las acotaciones: dicen mucho de la puesta en escena."]),
    errores: ["Comentar el fragmento como si fuera narrativa.", "Olvidar el contexto teatral (cómo se representaba)."],
    modelo: {
      titulo: "Edipo rey, Lope y el esperpento",
      instrucciones: "Responde a las tres preguntas. Duración: 90 minutos.",
      preguntas: [
        { q: "Explica los elementos de la tragedia griega a partir de <i>Edipo rey</i> de Sófocles.", puntos: 4, sol: "Héroe de alto rango que cae por su <b>hamartía</b> (error) y su <b>hybris</b> (desmesura); destino inevitable; <b>anagnórisis</b> (Edipo descubre que ha matado a su padre y se ha casado con su madre) y <b>peripecia</b> (cambio de fortuna); coro que comenta la acción; unidad de acción; finalidad de <b>catarsis</b> (purificación del público por la compasión y el temor, según Aristóteles)." },
        { q: "Rasgos de la comedia nueva de Lope de Vega.", puntos: 4, sol: "Expuesta en el <i>Arte nuevo de hacer comedias</i> (1609): tres actos, mezcla de lo trágico y lo cómico, ruptura de las unidades de tiempo y lugar (se mantiene la de acción), polimetría (cada estrofa según la situación), personajes tipo (galán, dama, gracioso, rey, padre), temas del honor, el amor y la religión; teatro para un público amplio en los corrales de comedias. Obras: <i>Fuenteovejuna</i>, <i>El caballero de Olmedo</i>, <i>Peribáñez</i>." },
        { q: "¿Qué es el esperpento de Valle-Inclán?", puntos: 2, sol: "Estética que deforma sistemáticamente la realidad para mostrar el absurdo y la miseria de la España de su tiempo: los personajes se animalizan o se convierten en muñecos, el lenguaje mezcla lo culto y lo vulgar. Definido en <i>Luces de bohemia</i> (1920/1924) con la imagen de los espejos cóncavos del callejón del Gato." },
      ],
    },
  },
  {
    nombre: "Movimientos Culturales y Artísticos", sigla: "MC", fase: "admision", quien: "Modalidad General",
    intro: "Materia de la modalidad General que recorre los grandes movimientos culturales y artísticos de los siglos XIX a XXI y su relación con la sociedad.",
    formato: ["90 minutos. Preguntas a partir de imágenes, textos o fragmentos audiovisuales sobre movimientos, obras y contextos, con comentario y desarrollo."],
    claves: ["Romanticismo, realismo e impresionismo.", "Modernismo y vanguardias (cubismo, futurismo, dadaísmo, surrealismo).", "Cultura de masas: cine, cómic, publicidad, música popular.", "Arte y cultura desde 1945: pop art, contracultura, posmodernidad.", "Cultura digital, redes sociales y nuevas formas de creación."],
    consejos: artes(["Conecta siempre cada movimiento con su contexto histórico y tecnológico.", "Usa ejemplos variados: pintura, arquitectura, música, cine, literatura."]),
    errores: ["Listar movimientos sin explicar qué los caracteriza.", "Confundir modernismo (arte) con modernidad."],
    modelo: {
      titulo: "vanguardias y cultura de masas",
      instrucciones: "Responde a las tres preguntas. Duración: 90 minutos.",
      preguntas: [
        { q: "Explica qué tienen en común las vanguardias de principios del siglo XX y cita tres con un ejemplo de cada una.", puntos: 4, sol: "Rechazo de la tradición y del arte académico, experimentación, manifiestos, búsqueda de lo nuevo, reacción ante la modernidad técnica y la Primera Guerra Mundial. <b>Cubismo</b> (Picasso, <i>Las señoritas de Avignon</i>), <b>futurismo</b> (Boccioni, <i>Formas únicas de continuidad en el espacio</i>), <b>dadaísmo</b> (Duchamp, <i>Fuente</i>), <b>surrealismo</b> (Dalí, <i>La persistencia de la memoria</i>)." },
        { q: "¿Qué fue el pop art y qué relación tiene con la sociedad de consumo?", puntos: 4, sol: "Movimiento de los años 50 y 60 (Reino Unido y Estados Unidos) que toma imágenes de la cultura de masas: publicidad, cómic, productos, estrellas de cine (Warhol, <i>Latas de sopa Campbell</i>, <i>Marilyn</i>; Lichtenstein). Técnicas de reproducción mecánica (serigrafía), colores planos; celebra y a la vez ironiza sobre el consumo y la fama." },
        { q: "Argumenta si las redes sociales han cambiado la forma de crear y consumir cultura.", puntos: 2, sol: "Se valora la argumentación propia: democratización de la creación y la difusión, nuevos formatos (vídeo corto, memes), papel de los algoritmos, inmediatez, economía de la atención, derechos de autor." },
      ],
    },
  },
  {
    nombre: "Coro y Técnica Vocal II", sigla: "CV", fase: "admision", quien: "Artes (solo donde la comisión la ofrece)",
    intro: "Materia práctica de la vía de Música. Pocas comunidades la examinan en la PAU: confirma si la tuya la ofrece antes de contar con ella.",
    formato: ["Donde existe, combina preguntas teóricas (aparato fonador, técnica vocal, repertorio coral) y, a veces, una parte práctica o de análisis de partitura.", "Revisa siempre la lista de materias de admisión de tu comunidad."],
    claves: ["Aparato respiratorio, fonador y resonador.", "Técnica: respiración costo-diafragmática, apoyo, emisión, articulación.", "Clasificación de las voces.", "Repertorio coral de distintas épocas.", "Salud vocal."],
    consejos: artes(["Practica lectura a primera vista con partituras corales sencillas.", "Cuida la voz: hidratación, descanso y calentamiento."]),
    errores: ["Confundir tesitura y extensión.", "Describir la respiración clavicular como la adecuada."],
    modelo: {
      titulo: "técnica vocal y repertorio",
      instrucciones: "Responde a las tres preguntas. Duración: 90 minutos.",
      preguntas: [
        { q: "Describe la respiración costo-diafragmática y por qué es la adecuada para el canto.", puntos: 4, sol: "En la inspiración desciende el diafragma y se expanden las costillas inferiores y la zona abdominal, sin elevar los hombros. Permite mayor capacidad y, sobre todo, controlar la salida del aire (apoyo), lo que da estabilidad al sonido, frases largas y menos tensión en la laringe." },
        { q: "Explica la diferencia entre tesitura y extensión vocal, y clasifica las voces de un coro mixto.", puntos: 3, sol: "<b>Extensión</b>: todas las notas que una voz puede emitir, de la más grave a la más aguda. <b>Tesitura</b>: la zona de notas en que la voz canta con comodidad y buena calidad. Coro mixto: sopranos, contraltos, tenores y bajos (SATB), con subdivisiones (mezzosoprano, barítono)." },
        { q: "Da tres consejos de salud vocal para un cantante.", puntos: 3, sol: "Hidratarse bien, calentar la voz antes de cantar y no forzarla; evitar gritar, el tabaco y el alcohol; dormir suficiente; respetar el reposo vocal si hay afonía y consultar al médico si dura más de dos semanas." },
      ],
    },
  },
];
