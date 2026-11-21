// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Seguridad informática y criptografía: amenazas, autenticación, cifrado simétrico y asimétrico, hash, firma digital y redes.
const B = require("./_bach2-tic");

const fondo = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
const flecha = (id) => `<defs><marker id="${id}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8z" fill="var(--ink)"/></marker></defs>`;
const llave = (x, y, c) => `<circle cx="${x}" cy="${y}" r="6" fill="none" stroke="${c}" stroke-width="2.4"/><path d="M${x + 6} ${y} H${x + 22} M${x + 16} ${y} V${y + 6} M${x + 21} ${y} V${y + 5}" stroke="${c}" stroke-width="2.4"/>`;

// Cifrado César: alfabeto desplazado.
const cesar = () => {
  const a = "ABCDEFGHIJKLM".split("");
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Cifrado César con desplazamiento 3: la A se sustituye por la D, la B por la E, y así sucesivamente; la palabra HOLA se cifra como KROD">
  ${fondo}${B.tx(130, 20, "Cifrado César, desplazamiento 3", { fs: 12, maxW: 236, bold: true, font: B.D })}
  ${a.map((l, i) => `${B.tx(20 + i * 18.5, 50, l, { fs: 11, maxW: 16, bold: true, font: "ui-monospace,monospace" })}<path d="M${20 + i * 18.5} 56 V 70" stroke="var(--muted)" stroke-width="1.2" marker-end="url(#fc)"/>${B.tx(20 + i * 18.5, 86, String.fromCharCode(((l.charCodeAt(0) - 65 + 3) % 26) + 65), { fs: 11, maxW: 16, bold: true, color: "var(--red)", font: "ui-monospace,monospace" })}`).join("")}
  ${flecha("fc")}
  ${B.tx(130, 104, "… y así hasta la Z (que pasa a C)", { fs: 9.5, maxW: 220, color: "var(--muted)" })}
  <rect x="40" y="118" width="180" height="44" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
  ${B.tx(130, 137, "HOLA  →  KROD", { fs: 14, maxW: 170, bold: true, color: "var(--pen)", font: "ui-monospace,monospace" })}
  ${B.tx(130, 154, "solo 25 claves posibles: se rompe a mano", { fs: 9, maxW: 170, color: "var(--muted)" })}
</svg>`;
};

// Cifrado simétrico.
const simetrico = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Cifrado simétrico: Ana cifra el mensaje con una clave secreta, envía el texto cifrado y Luis lo descifra con la misma clave, que ambos deben compartir previamente">
  ${fondo}${flecha("fs")}${B.tx(130, 20, "Simétrico: la misma clave", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
  <rect x="10" y="44" width="62" height="36" rx="6" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${B.tx(41, 66, "«Hola»", { fs: 11, maxW: 56, bold: true })}
  <rect x="99" y="44" width="62" height="36" rx="6" fill="var(--ink)" fill-opacity=".85"/>${B.tx(130, 66, "x9#Qe", { fs: 11, maxW: 56, bold: true, color: "#fff", font: "ui-monospace,monospace" })}
  <rect x="188" y="44" width="62" height="36" rx="6" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${B.tx(219, 66, "«Hola»", { fs: 11, maxW: 56, bold: true })}
  <path d="M72 62 H96" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#fs)"/><path d="M161 62 H185" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#fs)"/>
  ${B.tx(84, 100, "cifrar", { fs: 9.5, maxW: 50, color: "var(--muted)" })}${B.tx(173, 100, "descifrar", { fs: 9.5, maxW: 56, color: "var(--muted)" })}
  ${llave(72, 116, "var(--sun)")}${llave(162, 116, "var(--sun)")}
  ${B.tx(41, 36, "Ana", { fs: 10, maxW: 50, bold: true, color: "var(--pen)" })}${B.tx(219, 36, "Luis", { fs: 10, maxW: 50, bold: true, color: "var(--leaf)" })}
  ${B.tx(130, 146, "misma clave secreta (AES)", { fs: 10, maxW: 230, bold: true, color: "var(--sun)" })}
  ${B.tx(130, 164, "problema: ¿cómo se la paso a Luis?", { fs: 9.5, maxW: 230, color: "var(--red)" })}
</svg>`;

// Cifrado asimétrico.
const asimetrico = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Cifrado asimétrico: Luis publica su clave pública; Ana cifra con ella y solo Luis puede descifrar con su clave privada, que nunca comparte">
  ${fondo}${flecha("fa")}${B.tx(130, 20, "Asimétrico: pública y privada", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
  <rect x="10" y="44" width="62" height="36" rx="6" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${B.tx(41, 66, "«Hola»", { fs: 11, maxW: 56, bold: true })}
  <rect x="99" y="44" width="62" height="36" rx="6" fill="var(--ink)" fill-opacity=".85"/>${B.tx(130, 66, "7Fp!2", { fs: 11, maxW: 56, bold: true, color: "#fff", font: "ui-monospace,monospace" })}
  <rect x="188" y="44" width="62" height="36" rx="6" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${B.tx(219, 66, "«Hola»", { fs: 11, maxW: 56, bold: true })}
  <path d="M72 62 H96" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#fa)"/><path d="M161 62 H185" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#fa)"/>
  ${B.tx(41, 36, "Ana", { fs: 10, maxW: 50, bold: true, color: "var(--pen)" })}${B.tx(219, 36, "Luis", { fs: 10, maxW: 50, bold: true, color: "var(--leaf)" })}
  ${llave(62, 104, "var(--leaf)")}${B.tx(84, 128, "pública de Luis", { fs: 9, maxW: 90, bold: true, color: "var(--leaf)" })}
  ${llave(152, 104, "var(--red)")}${B.tx(175, 128, "privada de Luis", { fs: 9, maxW: 90, bold: true, color: "var(--red)" })}
  ${B.tx(130, 152, "la pública se comparte; la privada, nunca", { fs: 9.5, maxW: 236 })}
  ${B.tx(130, 168, "RSA · curvas elípticas", { fs: 9.5, maxW: 230, color: "var(--muted)" })}
</svg>`;

// Funciones hash.
const hash = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Función hash SHA-256: textos casi iguales, hola y Hola, producen resúmenes completamente distintos de la misma longitud, y no se puede volver del resumen al texto">
  ${fondo}${flecha("fh")}${B.tx(130, 20, "Función hash (SHA-256)", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
  ${[["hola", "b221d9db…db79", 46], ["Hola", "e633f4fc…e88f", 96]].map(([t, h, y]) => `<rect x="10" y="${y - 14}" width="52" height="24" rx="5" fill="var(--card)" stroke="var(--pen)" stroke-width="1.8"/>${B.tx(36, y + 2, t, { fs: 11, maxW: 46, bold: true, font: "ui-monospace,monospace" })}
    <path d="M62 ${y - 2} H82" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#fh)"/><rect x="84" y="${y - 14}" width="42" height="24" rx="5" fill="var(--sun)"/>${B.tx(105, y + 2, "hash", { fs: 10, maxW: 38, bold: true, color: "#fff" })}
    <path d="M126 ${y - 2} H146" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#fh)"/>${B.tx(200, y + 2, h, { fs: 9.5, maxW: 104, color: "var(--red)", bold: true, font: "ui-monospace,monospace" })}`).join("")}
  ${B.tx(130, 134, "cambia una letra → cambia todo", { fs: 10, maxW: 230, bold: true })}
  ${B.tx(130, 152, "siempre 256 bits · no se puede invertir", { fs: 9.5, maxW: 230, color: "var(--muted)" })}
  ${B.tx(130, 168, "integridad · contraseñas · firmas", { fs: 9.5, maxW: 230, color: "var(--pen)" })}
</svg>`;

module.exports = B.tema(B.textos({
  titulo: "Seguridad informática y criptografía",
  minutos: 120,
  objetivos: [
    "Explicar los objetivos de la seguridad de la información y analizar amenazas, vulnerabilidades y riesgos",
    "Reconocer los principales tipos de malware y de ataques de ingeniería social y aplicar medidas de prevención",
    "Gestionar la autenticación de forma segura con contraseñas robustas, gestores y verificación en dos pasos",
    "Describir y programar en Python técnicas criptográficas: cifrado clásico, simétrico, asimétrico y funciones hash",
    "Explicar cómo funcionan la firma digital, los certificados y la seguridad en las redes",
    "Planificar copias de seguridad y la respuesta ante incidentes, respetando la legislación y la ética",
  ],
  claves: ["confidencialidad", "integridad", "disponibilidad", "riesgo", "malware", "ransomware", "phishing", "autenticación", "2FA", "criptografía", "clave", "AES", "RSA", "hash", "firma digital", "copia de seguridad"],
  pregunta: {
    texto: "Cada vez que pagas con el móvil, tus datos bancarios viajan por redes que no controlas, pasando por decenas de ordenadores desconocidos. ¿Por qué nadie puede leerlos ni cambiar el importe por el camino?",
    respuesta: "Gracias a la <mark>criptografía</mark>. Tus datos viajan <b>cifrados</b> con claves que solo conocen tu móvil y el servidor del banco, acordadas en el momento mediante <b>criptografía de clave pública</b>; los mensajes llevan una especie de huella, calculada con funciones <b>hash</b>, que delata cualquier modificación; y el banco demuestra su identidad con un <b>certificado digital</b>. Las matemáticas protegen la confidencialidad, la integridad y la autenticidad. Aun así, el eslabón más débil suele ser la persona: por eso también hay que aprender a reconocer los engaños.",
  },
  lectura: {
    titulo: "Bletchley Park y el nacimiento de la informática",
    html: `<p>Durante la Segunda Guerra Mundial, el ejército alemán cifraba sus comunicaciones con <b>Enigma</b>, una máquina con rotores que cambiaban la sustitución de letras con cada pulsación. Con millones de billones de configuraciones posibles, se consideraba indescifrable. En una mansión inglesa, Bletchley Park, miles de personas, muchas de ellas mujeres, trabajaron en secreto para romperla, apoyándose en el trabajo previo de los criptógrafos polacos.</p>
    <p>El matemático <b>Alan Turing</b> diseñó máquinas electromecánicas, las «bombas», que probaban configuraciones a gran velocidad aprovechando errores humanos, como mensajes que siempre empezaban igual. Más tarde, para descifrar otro sistema alemán, se construyó Colossus, uno de los primeros ordenadores electrónicos. Se calcula que este trabajo acortó la guerra en unos dos años.</p>
    <p>La historia deja dos lecciones que siguen vigentes: la seguridad de un sistema depende tanto de las matemáticas como del comportamiento de las personas que lo usan, y la criptografía y la informática han avanzado siempre juntas.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "La seguridad de la información",
      html: `<p>La <mark>seguridad informática</mark> protege los sistemas y la información frente a accesos, usos, modificaciones o destrucciones no autorizados. Sus tres objetivos básicos, conocidos como la tríada <b>CID</b>, son:</p>
      <ul><li><b>Confidencialidad</b>: solo las personas autorizadas acceden a la información.</li>
      <li><b>Integridad</b>: la información no se modifica sin autorización, o la modificación se detecta.</li>
      <li><b>Disponibilidad</b>: la información y los servicios están accesibles cuando se necesitan.</li></ul>
      <p>Se añaden la <b>autenticación</b> (comprobar la identidad de quien accede) y el <b>no repudio</b> (quien envía un mensaje no puede negar haberlo hecho).</p>
      <p>Para proteger un sistema hay que analizar sus riesgos con cuatro conceptos:</p>
      <ul><li><b>Activo</b>: lo que tiene valor y hay que proteger (datos, equipos, servicios, reputación).</li>
      <li><b>Amenaza</b>: lo que puede causar daño (un atacante, un virus, un incendio, un error humano).</li>
      <li><b>Vulnerabilidad</b>: la debilidad que una amenaza puede aprovechar (un programa sin actualizar, una contraseña débil).</li>
      <li><b>Riesgo</b>: la probabilidad de que una amenaza aproveche una vulnerabilidad, multiplicada por el impacto que causaría.</li></ul>
      <p>Las medidas de seguridad pueden ser <b>preventivas</b> (evitan el incidente: actualizaciones, contraseñas), <b>detectoras</b> (lo descubren: antivirus, registros) y <b>correctoras</b> (reducen el daño: copias de seguridad). Ninguna medida es infalible: se aplican varias capas, de modo que si una falla, otra protege. Es la <b>defensa en profundidad</b>.</p>`,
      svg: B.cajas("Objetivos de la seguridad de la información", [["Confidencialidad", "solo quien|está autorizado"], ["Integridad", "sin cambios|no autorizados"], ["Disponibilidad", "accesible|cuando se necesita"], ["Autenticación", "y no|repudio"]], { t: "La tríada CID" }),
    },
    {
      h: "El software malicioso",
      html: `<p>El <mark>malware</mark> (<i>malicious software</i>) es cualquier programa diseñado para dañar un sistema o aprovecharse de él sin el consentimiento de su propietario. Los tipos principales son:</p>
      <ul><li><b>Virus</b>: se inserta en otros archivos y se propaga cuando se ejecutan.</li>
      <li><b>Gusano</b>: se propaga solo por la red aprovechando vulnerabilidades, sin intervención humana.</li>
      <li><b>Troyano</b>: se presenta como un programa útil o un juego, pero abre una puerta trasera al atacante.</li>
      <li><b>Ransomware</b>: cifra los archivos de la víctima y exige un rescate para recuperarlos. Es una de las mayores amenazas actuales para empresas, hospitales y administraciones.</li>
      <li><b>Spyware</b> y <b>keyloggers</b>: espían la actividad y registran las teclas pulsadas para robar contraseñas.</li>
      <li><b>Adware</b>: muestra publicidad no deseada.</li>
      <li><b>Botnet</b>: red de equipos infectados («zombis») controlados a distancia, usada para enviar spam o lanzar ataques de <b>denegación de servicio</b> (DDoS), que saturan un servidor con millones de peticiones.</li></ul>
      <p>El malware llega sobre todo por correos y mensajes con archivos o enlaces maliciosos, descargas de programas pirateados o de fuentes no oficiales, memorias USB y vulnerabilidades de programas sin actualizar.</p>
      <p>Las medidas de prevención más eficaces son <b>mantener actualizados</b> el sistema operativo y las aplicaciones, que corrigen las vulnerabilidades conocidas; instalar programas solo desde fuentes oficiales; usar un <b>antivirus</b> actualizado; no abrir adjuntos ni enlaces inesperados; trabajar con una cuenta sin privilegios de administrador; y tener <b>copias de seguridad</b>, la única defensa realmente eficaz contra el ransomware.</p>`,
      svg: B.rejilla("Tipos de software malicioso", ["Tipo", "Qué hace"], [["Virus", "infecta archivos"], ["Gusano", "se propaga solo"], ["Troyano", "se disfraza"], ["Ransomware", "cifra y pide rescate"], ["Spyware", "espía y roba"]], { t: "Malware" }),
    },
    {
      h: "Ingeniería social y phishing",
      html: `<p>La mayoría de los ataques no empiezan rompiendo un sistema, sino engañando a una persona. La <mark>ingeniería social</mark> es el conjunto de técnicas que manipulan a las personas para que revelen información o hagan algo que beneficia al atacante. Explota emociones como la urgencia, el miedo, la curiosidad, la codicia o la confianza en la autoridad.</p>
      <p>La técnica más común es el <mark>phishing</mark>: un mensaje que suplanta a una entidad de confianza (un banco, una empresa de paquetería, la Agencia Tributaria, una red social) para que la víctima pulse un enlace a una web falsa e introduzca sus datos, o descargue un archivo infectado. Tiene variantes por SMS (<i>smishing</i>), por llamada telefónica (<i>vishing</i>) y dirigidas a una persona concreta con información personalizada (<i>spear phishing</i>).</p>
      <p>Señales de alarma:</p>
      <ul><li>Urgencia o amenaza: «su cuenta se bloqueará en 24 horas».</li>
      <li>Remitente o dominio extraño, a veces casi idéntico al real (<code>c0rreos-envio.com</code>).</li>
      <li>Petición de contraseñas, códigos o datos bancarios: ninguna entidad seria los pide así.</li>
      <li>Premios inesperados, saludos genéricos y errores de redacción.</li></ul>
      <p>Ante la duda, no hay que pulsar el enlace: se accede a la entidad escribiendo su dirección o desde su aplicación oficial, o se llama a su teléfono de siempre. En España, el número <b>017</b> del INCIBE ofrece ayuda gratuita y confidencial en ciberseguridad.</p>`,
      svg: B.flujo("Cómo actuar ante un mensaje sospechoso", ["Desconfiar de la urgencia", "Revisar remitente y enlace (sin pulsar)", "No dar claves ni códigos", "Comprobar por el canal oficial", "Avisar y borrar el mensaje"], { t: "Ante el phishing" }),
      video: B.V("seg-phishing", "Qué es el phishing y cómo funciona"),
    },
    {
      h: "Autenticación y contraseñas",
      html: `<p>La <mark>autenticación</mark> es el proceso de comprobar que alguien es quien dice ser. Se basa en uno o varios <b>factores</b>:</p>
      <ul><li>Algo que <b>se sabe</b>: una contraseña o un PIN.</li>
      <li>Algo que <b>se tiene</b>: el móvil, una tarjeta o una llave de seguridad.</li>
      <li>Algo que <b>se es</b>: la huella dactilar o el rostro (biometría).</li></ul>
      <p>La <b>autenticación en dos pasos</b> (2FA) o multifactor combina factores de tipos distintos: aunque un atacante robe la contraseña, no podrá entrar sin el código del móvil. Es una de las medidas más eficaces y debe activarse en el correo, las redes sociales y el banco. Las <b>llaves de acceso</b> (<i>passkeys</i>) sustituyen la contraseña por criptografía de clave pública y son resistentes al phishing.</p>
      <p>La fortaleza de una contraseña depende sobre todo de su <b>longitud</b> y de que sea impredecible. Con un alfabeto de N símbolos y una longitud L, hay N<sup>L</sup> combinaciones: una contraseña de 8 letras minúsculas tiene 26<sup>8</sup> ≈ 2·10<sup>11</sup> combinaciones, que un equipo potente prueba en segundos; con 16 caracteres variados, serían necesarios millones de años. Una buena técnica es la <b>frase de contraseña</b>: varias palabras al azar, como <code>tortuga-faro-mostaza-nube</code>.</p>
      <p>Reglas básicas: una contraseña distinta para cada servicio (si se filtra una, no caen las demás), ninguna basada en datos personales y nunca compartirlas. Como es imposible recordar decenas de contraseñas, se usa un <b>gestor de contraseñas</b>, que las genera aleatorias y las guarda cifradas con una única contraseña maestra.</p>`,
      svg: B.barras("Tiempo aproximado para probar todas las combinaciones a 10 000 millones por segundo, en escala logarítmica de segundos", [["8 minúsculas", 1.3], ["8 variados", 5.8], ["12 variados", 13.7], ["16 variados", 21.6]], { t: "Fuerza bruta (log₁₀ s)", unidad: "" }),
    },
    {
      h: "Fundamentos de criptografía",
      html: `<p>La <mark>criptografía</mark> es la ciencia que estudia cómo proteger la información transformándola para que solo puedan entenderla quienes conocen un secreto, la <b>clave</b>. El mensaje original se llama <b>texto en claro</b>; el resultado, <b>texto cifrado</b>; el proceso de transformarlo, <b>cifrado</b>, y el inverso, <b>descifrado</b>. El <b>criptoanálisis</b> estudia cómo romper los cifrados.</p>
      <p>Uno de los cifrados más antiguos es el de <b>César</b>, que usaba Julio César: cada letra se sustituye por la que está un número fijo de posiciones más adelante en el alfabeto. Es fácil de programar con aritmética modular:</p>
      ${B.code(`def cesar(texto, k):
    resultado = ""
    for c in texto.upper():
        if "A" <= c <= "Z":
            resultado += chr((ord(c) - 65 + k) % 26 + 65)
        else:
            resultado += c
    return resultado

print(cesar("HOLA", 3))     # KROD
print(cesar("KROD", -3))    # HOLA`)}
      <p>Es muy inseguro: solo hay 25 claves posibles y basta probarlas todas, un ataque de <b>fuerza bruta</b>. Además, los cifrados de sustitución conservan las <b>frecuencias</b> de las letras: en español, la letra más repetida del texto cifrado corresponderá probablemente a la E o la A.</p>
      <p>La criptografía moderna se basa en el <b>principio de Kerckhoffs</b>: un sistema debe ser seguro aunque el atacante conozca el algoritmo; todo el secreto debe estar en la clave. Por eso los algoritmos actuales son públicos y han sido analizados por expertos de todo el mundo, y su seguridad depende de que el número de claves posibles sea tan enorme que probarlas todas sea imposible en la práctica.</p>`,
      svg: cesar(),
      video: B.V("seg-cripto", "Cifrado simétrico y asimétrico explicado fácilmente"),
    },
    {
      h: "Cifrado simétrico",
      html: `<p>En el <mark>cifrado simétrico</mark> se usa <b>la misma clave</b> para cifrar y para descifrar, de modo que emisor y receptor deben compartirla en secreto. El algoritmo estándar actual es <b>AES</b> (<i>Advanced Encryption Standard</i>), elegido en 2001 tras un concurso internacional, que trabaja con bloques de 128 bits y claves de 128, 192 o 256 bits. Una clave de 256 bits tiene 2<sup>256</sup> valores posibles, un número mayor que el de átomos del universo observable: la fuerza bruta es imposible.</p>
      <p>Los algoritmos simétricos son muy <b>rápidos</b>, por lo que se usan para cifrar grandes cantidades de datos: discos duros completos (BitLocker, FileVault), archivos comprimidos con contraseña, redes wifi (WPA2 y WPA3) y el tráfico de las conexiones HTTPS y de las aplicaciones de mensajería.</p>
      <p>En Python, la biblioteca <code>cryptography</code> permite usarlo con pocas líneas. Su módulo Fernet aplica AES de forma segura y añade un control de integridad:</p>
      ${B.code(`from cryptography.fernet import Fernet

clave = Fernet.generate_key()        # clave aleatoria
f = Fernet(clave)
cifrado = f.encrypt("Examen el jueves".encode())
print(cifrado)                        # b'gAAAAABm...'
print(f.decrypt(cifrado).decode())    # Examen el jueves`)}
      <p>Una regla de oro: <b>no hay que inventar algoritmos criptográficos propios</b> ni programarlos desde cero, sino usar bibliotecas reconocidas, porque los errores sutiles son muy fáciles de cometer y muy difíciles de detectar.</p>
      <p>El gran problema del cifrado simétrico es la <b>distribución de claves</b>: ¿cómo se envía la clave al receptor sin que nadie la intercepte, si todavía no hay un canal seguro? Además, con n personas que quieran comunicarse en parejas hacen falta n(n − 1)/2 claves distintas: 4950 para 100 personas.</p>`,
      svg: simetrico(),
    },
    {
      h: "Cifrado asimétrico o de clave pública",
      html: `<p>En 1976, Whitfield Diffie y Martin Hellman propusieron una idea revolucionaria: usar <b>dos claves</b> distintas, relacionadas matemáticamente. Es el <mark>cifrado asimétrico</mark> o de clave pública. Cada persona tiene:</p>
      <ul><li>Una <b>clave pública</b>, que puede dar a conocer a todo el mundo.</li>
      <li>Una <b>clave privada</b>, que guarda en secreto y nunca comparte.</li></ul>
      <p>Lo que se cifra con la clave pública de alguien solo puede descifrarse con su clave privada. Así, para enviar un mensaje secreto a Luis, Ana lo cifra con la clave pública de Luis, y solo Luis podrá leerlo. Desaparece el problema de distribuir claves secretas.</p>
      <p>El algoritmo más conocido es <b>RSA</b> (1977), cuya seguridad se basa en que multiplicar dos números primos grandes es fácil, pero descomponer el resultado en sus factores es prácticamente imposible con los ordenadores actuales cuando el número tiene más de 600 cifras. Un ejemplo de juguete con números pequeños:</p>
      ${B.code(`p, q = 61, 53
n = p * q                 # 3233, parte de las dos claves
phi = (p - 1) * (q - 1)   # 3120
e = 17                    # clave pública: (e, n)
d = pow(e, -1, phi)       # 2753, clave privada: (d, n)

m = 65                    # mensaje (un número menor que n)
c = pow(m, e, n)          # cifrar: 2790
print(pow(c, d, n))       # descifrar: 65`)}
      <p>Actualmente también se usa la criptografía de <b>curvas elípticas</b>, que logra la misma seguridad con claves más cortas.</p>
      <p>El cifrado asimétrico es mucho más <b>lento</b> que el simétrico. Por eso, en la práctica se usa un sistema <b>híbrido</b>: con criptografía asimétrica se acuerda una clave simétrica aleatoria para la sesión, y con ella se cifran los datos. Así funcionan HTTPS y WhatsApp. Los futuros ordenadores cuánticos podrían romper RSA, y ya se están adoptando algoritmos <b>poscuánticos</b>.</p>`,
      svg: asimetrico(),
    },
    {
      h: "Funciones hash",
      html: `<p>Una <mark>función hash</mark> criptográfica transforma cualquier dato, sea una palabra o una película, en un resumen de longitud fija, como una huella digital del dato. La más usada es <b>SHA-256</b>, que produce siempre 256 bits (64 cifras hexadecimales). Sus propiedades son:</p>
      <ul><li>Es <b>determinista</b>: el mismo dato da siempre el mismo resumen.</li>
      <li>Es <b>de un solo sentido</b>: a partir del resumen no se puede obtener el dato original.</li>
      <li>Tiene <b>efecto avalancha</b>: un cambio mínimo en el dato cambia por completo el resumen.</li>
      <li>Es <b>resistente a colisiones</b>: es prácticamente imposible encontrar dos datos con el mismo resumen.</li></ul>
      ${B.code(`import hashlib
print(hashlib.sha256(b"hola").hexdigest())   # b221d9db…
print(hashlib.sha256(b"Hola").hexdigest())   # e633f4fc… (totalmente distinto)`)}
      <p>Las funciones hash tienen muchos usos:</p>
      <ul><li><b>Comprobar la integridad</b> de archivos descargados: la web publica el resumen y, si coincide con el calculado, el archivo no se ha alterado.</li>
      <li><b>Guardar contraseñas</b>: los servicios bien diseñados no guardan las contraseñas, sino su resumen. Al iniciar sesión, calculan el resumen de lo que escribes y lo comparan. Para evitar las tablas de resúmenes precalculados, se añade a cada contraseña un valor aleatorio, la <b>sal</b>, y se usan funciones deliberadamente lentas, como bcrypt o Argon2.</li>
      <li>Las <b>firmas digitales</b> y las <b>cadenas de bloques</b> (<i>blockchain</i>), en las que cada bloque incluye el resumen del anterior.</li></ul>
      <p>Funciones antiguas como MD5 y SHA-1 ya no son seguras, porque se han encontrado colisiones.</p>`,
      svg: hash(),
      video: B.V("seg-hash", "Qué es un hash, con ejemplo en Python"),
    },
    {
      h: "Firma digital y certificados",
      html: `<p>La <mark>firma digital</mark> combina las funciones hash y la criptografía asimétrica para garantizar la <b>autenticidad</b> (quién firma), la <b>integridad</b> (el documento no ha cambiado) y el <b>no repudio</b> (el firmante no puede negarlo). Funciona usando las claves al revés que para cifrar:</p>
      <ol><li>El firmante calcula el resumen hash del documento.</li>
      <li>Cifra ese resumen con su <b>clave privada</b>: el resultado es la firma, que se adjunta al documento.</li>
      <li>El receptor descifra la firma con la <b>clave pública</b> del firmante y obtiene el resumen original.</li>
      <li>Calcula él mismo el resumen del documento recibido. Si ambos coinciden, la firma es válida.</li></ol>
      <p>Pero ¿cómo sabemos que una clave pública pertenece realmente a quien dice? Para eso están los <mark>certificados digitales</mark>: documentos electrónicos que asocian una clave pública con una identidad y que están firmados por una <b>autoridad de certificación</b> de confianza. El conjunto de autoridades, certificados y normas forma la <b>infraestructura de clave pública</b> (PKI).</p>
      <p>En España, la Fábrica Nacional de Moneda y Timbre emite certificados para los ciudadanos, y el <b>DNI electrónico</b> lleva un chip con certificados para identificarse y firmar. La firma electrónica permite hacer trámites con las administraciones, como presentar la declaración de la renta o solicitar una beca, y tiene la misma validez legal que la manuscrita según el reglamento europeo eIDAS. El sistema <b>Cl@ve</b> facilita el acceso a muchos de estos servicios.</p>
      <p>Los navegadores usan los mismos principios con los certificados de los sitios web, como vimos en HTTPS.</p>`,
      svg: B.flujo("Cómo funciona la firma digital", ["Resumen hash del documento", "Cifrar el resumen con la clave privada", "Enviar documento + firma", "Descifrar con la clave pública", "Comparar resúmenes: ¿coinciden?"], { t: "Firma digital" }),
    },
    {
      h: "Seguridad en las redes",
      html: `<p>Las redes son la puerta de entrada de muchos ataques. Las principales medidas de protección son:</p>
      <ul><li>El <b>cortafuegos</b> (<i>firewall</i>), que controla el tráfico entre redes según unas reglas: bloquea las conexiones no autorizadas desde internet y puede limitar qué programas se conectan al exterior. Los sistemas operativos y los routers incluyen uno.</li>
      <li>Una red <b>wifi</b> bien configurada: cifrado WPA3 o, al menos, WPA2 con una contraseña larga; cambiar la contraseña de administración del router; desactivar WPS; y actualizar su firmware. Una red de invitados separada evita que los visitantes accedan a los equipos de casa.</li>
      <li><b>Precaución en las wifi públicas</b>: un atacante en la misma red podría interceptar el tráfico o crear un punto de acceso falso con el nombre de la red real. Hay que evitar las operaciones sensibles o usar una <b>VPN</b> (red privada virtual), que crea un túnel cifrado hasta un servidor de confianza.</li>
      <li><b>Protocolos cifrados</b>: HTTPS en la web, SSH para administrar servidores, SFTP para transferir archivos.</li>
      <li>La <b>segmentación</b>: separar en redes distintas los equipos según su importancia, de modo que si uno se ve comprometido el ataque no se extienda.</li></ul>
      <p>El <b>Internet de las cosas</b> (cámaras, altavoces, enchufes inteligentes) multiplica los riesgos: muchos dispositivos tienen contraseñas por defecto y apenas se actualizan, y se han usado para formar enormes botnets.</p>`,
      svg: B.capas("Defensa en profundidad en una red", [["Usuario", "formación y 2FA"], ["Equipo", "actualizaciones y antivirus"], ["Red", "cortafuegos y segmentos"], ["Datos", "cifrado y copias"]], { t: "Capas de protección" }),
    },
    {
      h: "Copias de seguridad y respuesta a incidentes",
      html: `<p>Un disco que se estropea, un robo, un ransomware o un borrado por error pueden hacer perder años de trabajo. La medida correctora fundamental es la <mark>copia de seguridad</mark> (<i>backup</i>). La regla más aceptada es la <b>3-2-1</b>:</p>
      <ul><li><b>3</b> copias de los datos (el original y dos copias).</li>
      <li>En <b>2</b> soportes distintos (por ejemplo, el disco del ordenador y un disco externo).</li>
      <li><b>1</b> copia fuera del lugar habitual, por ejemplo en la nube, para protegerse de incendios o robos.</li></ul>
      <p>Frente al ransomware, al menos una copia debe estar <b>desconectada</b> o ser inmutable, porque el malware cifra también los discos conectados. Las copias pueden ser <b>completas</b> (todo), <b>incrementales</b> (solo lo cambiado desde la última copia) o <b>diferenciales</b> (lo cambiado desde la última completa), y deben hacerse de forma <b>automática</b> y periódica. Y lo más olvidado: hay que <b>comprobar</b> de vez en cuando que se pueden restaurar.</p>
      <p>Cuando se produce un <b>incidente</b>, conviene actuar con método:</p>
      <ol><li><b>Contener</b>: desconectar de la red el equipo afectado para que no se extienda.</li>
      <li><b>Avisar</b> al responsable o, en casa, pedir ayuda al 017 del INCIBE.</li>
      <li><b>Cambiar las contraseñas</b> desde un equipo limpio y activar la verificación en dos pasos.</li>
      <li><b>Erradicar</b> el malware y <b>recuperar</b> los datos desde las copias.</li>
      <li><b>Aprender</b>: analizar qué falló para que no se repita.</li></ol>
      <p>Ante un ransomware, los expertos desaconsejan pagar el rescate: no garantiza recuperar los datos y financia a los delincuentes. Si se han filtrado datos personales, la ley obliga a notificarlo a la AEPD en 72 horas, y los delitos deben denunciarse.</p>`,
      svg: B.cajas("Regla 3-2-1 de las copias de seguridad", [["3 copias", "original|y dos copias"], ["2 soportes", "disco interno|y externo"], ["1 fuera", "nube u|otro lugar"], ["+ 1 aislada", "contra el|ransomware"]], { t: "Regla 3-2-1" }),
    },
    {
      h: "Legislación, ética y profesiones",
      html: `<p>El <b>Código Penal</b> español castiga los delitos informáticos: acceder sin autorización a un sistema, aunque no se cause daño; interceptar comunicaciones; dañar o borrar datos y sistemas; las estafas informáticas; la suplantación de identidad; o difundir imágenes íntimas sin consentimiento. «Solo quería probar» no es una excusa: entrar en la cuenta de otra persona adivinando su contraseña es un delito.</p>
      <p>La normativa de <b>protección de datos</b> (RGPD) obliga a quien trata datos personales a aplicar medidas de seguridad adecuadas al riesgo, como el cifrado, y la directiva europea <b>NIS2</b> y el <b>Esquema Nacional de Seguridad</b> fijan los requisitos para las administraciones y los servicios esenciales.</p>
      <p>La línea que separa a un delincuente de un profesional de la seguridad es la <b>autorización</b>. El <mark>hacking ético</mark> consiste en buscar vulnerabilidades en sistemas con el permiso expreso de su propietario, para corregirlas antes de que las aprovechen los atacantes: son las <b>auditorías</b> y las <b>pruebas de penetración</b>. Muchas empresas tienen programas de recompensas (<i>bug bounty</i>) que pagan a quien les comunica fallos de forma responsable. Quien descubre una vulnerabilidad por casualidad debe comunicarla al responsable y no aprovecharla ni difundirla.</p>
      <p>La ciberseguridad es uno de los sectores con más demanda de profesionales: analistas de seguridad, auditores, especialistas en respuesta a incidentes, criptógrafos, peritos informáticos forenses… En España, el <b>INCIBE</b> (Instituto Nacional de Ciberseguridad) y el <b>CCN-CERT</b> coordinan la respuesta a incidentes, y existen ciclos formativos, grados y másteres especializados, además de competiciones de retos de seguridad (CTF) para estudiantes.</p>`,
      svg: B.comparar("Hacking ético frente a ataque delictivo", ["Hacking ético", ["con autorización", "informa al dueño", "corrige fallos", "auditoría, bug bounty"]], ["Delito", ["sin permiso", "aprovecha el fallo", "daña o roba", "Código Penal"]]),
    },
  ],
  figura: {
    titulo: "Ideas clave de seguridad y criptografía",
    items: [["Objetivos", "CID", "confidencialidad,", "integridad, disponib."], ["Personas", "2FA", "contraseñas largas,", "contra el phishing"], ["Cifrado", "AES · RSA", "simétrico rápido,", "asimétrico sin secreto"], ["Huella", "hash", "integridad, claves", "y firma digital"]],
  },
  video: B.V("seg-general", "Qué es la ciberseguridad y cómo funciona"),
  quiz: [
    ["La confidencialidad garantiza que…", ["los datos estén siempre accesibles", "solo accedan las personas autorizadas", "los datos no cambien", "el sistema sea rápido"], 1, "Tríada CID."],
    ["Una contraseña débil es un ejemplo de…", ["activo", "amenaza", "vulnerabilidad", "impacto"], 2, "Debilidad aprovechable."],
    ["El malware que cifra los archivos y pide un rescate es…", ["un gusano", "un ransomware", "un adware", "un keylogger"], 1, "Secuestro de datos."],
    ["Un troyano…", ["se propaga solo por la red", "se disfraza de programa útil", "solo muestra anuncios", "es un antivirus"], 1, "Como el caballo de Troya."],
    ["Un ataque DDoS busca…", ["robar contraseñas", "saturar un servicio para dejarlo inaccesible", "cifrar datos", "enviar correos"], 1, "Ataca la disponibilidad."],
    ["El phishing es…", ["un virus de móvil", "un engaño que suplanta a una entidad de confianza", "un cortafuegos", "un tipo de cifrado"], 1, "Ingeniería social."],
    ["El teléfono gratuito de ayuda en ciberseguridad en España es…", ["112", "017", "016", "091"], 1, "INCIBE."],
    ["La autenticación en dos pasos combina…", ["dos contraseñas", "factores de tipos distintos", "dos usuarios", "dos navegadores"], 1, "Saber, tener, ser."],
    ["Lo que más aumenta la fortaleza de una contraseña es…", ["poner el nombre de la mascota", "la longitud", "cambiar una letra por un número", "repetirla en varios sitios"], 1, "Crecen exponencialmente las combinaciones."],
    ["El principio de Kerckhoffs dice que…", ["el algoritmo debe ser secreto", "el secreto debe estar solo en la clave", "no hay que usar claves", "hay que cambiar el algoritmo cada año"], 1, "Algoritmos públicos."],
    ["El cifrado César con desplazamiento 3 convierte «SOL» en…", ["TPM", "VRO", "PLI", "SOL"], 1, "S→V, O→R, L→O."],
    ["AES es un algoritmo de cifrado…", ["asimétrico", "simétrico", "hash", "de firma"], 1, "Estándar simétrico."],
    ["El principal problema del cifrado simétrico es…", ["su lentitud", "la distribución segura de la clave", "que no cifra", "que es público"], 1, "Ambos necesitan la misma clave."],
    ["Para enviar un mensaje secreto a Luis con cifrado asimétrico se usa…", ["la clave privada de Ana", "la clave pública de Luis", "la clave privada de Luis", "ninguna"], 1, "Solo Luis podrá descifrar con su privada."],
    ["La seguridad de RSA se basa en la dificultad de…", ["sumar números", "factorizar números muy grandes", "ordenar listas", "comprimir datos"], 1, "Producto de dos primos."],
    ["Una función hash es…", ["reversible", "de un solo sentido", "un tipo de virus", "una clave pública"], 1, "No se puede invertir."],
    ["Los servicios bien diseñados guardan las contraseñas…", ["en texto claro", "como resumen hash con sal", "cifradas con César", "en una hoja de cálculo"], 1, "bcrypt, Argon2."],
    ["Para firmar digitalmente un documento se cifra su resumen con…", ["la clave pública del receptor", "la clave privada del firmante", "la clave pública del firmante", "una contraseña"], 1, "Cualquiera lo comprueba con la pública."],
    ["Una VPN…", ["acelera internet", "crea un túnel cifrado hasta un servidor", "elimina los virus", "sustituye al antivirus"], 1, "Útil en wifi públicas."],
    ["La regla 3-2-1 se refiere a…", ["contraseñas", "copias de seguridad", "cortafuegos", "certificados"], 1, "3 copias, 2 soportes, 1 fuera."],
  ],
  examen: [
    ["Descifra «FDVD» sabiendo que se usó César con desplazamiento 3.", ["CASA", "GEWE", "CAJA", "FDVD"], 0, "F→C, D→A, V→S, D→A."],
    ["¿Cuántas contraseñas distintas de 4 cifras (0-9) existen?", ["40", "1000", "10 000", "4⁴"], 2, "10⁴."],
    ["¿Cuántas claves simétricas hacen falta para que 10 personas se comuniquen en parejas?", ["10", "20", "45", "100"], 2, "10·9/2 = 45."],
    ["Ana firma un contrato y lo envía; por el camino alguien cambia una cifra. ¿Qué pasa al verificar la firma?", ["es válida", "falla, porque el resumen del documento ya no coincide", "se corrige sola", "no se puede verificar nunca"], 1, "Integridad."],
    ["Un hospital sufre un ransomware. ¿Cuál es la primera acción?", ["pagar el rescate", "aislar de la red los equipos afectados", "formatear todo sin más", "esperar"], 1, "Contener."],
    ["¿Por qué HTTPS combina cifrado asimétrico y simétrico?", ["por costumbre", "el asimétrico acuerda la clave y el simétrico, más rápido, cifra los datos", "el simétrico es más seguro", "para usar menos claves públicas"], 1, "Sistema híbrido."],
    ["Una web guarda las contraseñas con SHA-256 sin sal. ¿Qué riesgo tiene si se filtra la base de datos?", ["ninguno", "contraseñas comunes se descubren con tablas precalculadas y las iguales se ven repetidas", "se pueden descifrar con la clave pública", "se borran"], 1, "Por eso sal y funciones lentas."],
    ["Un estudiante encuentra un fallo en la web de su instituto que deja ver notas ajenas. ¿Qué debe hacer?", ["publicarlo en redes", "comunicarlo al centro sin aprovecharlo", "cambiar sus notas", "venderlo"], 1, "Divulgación responsable."],
  ],
  feynman: ["Qué significan confidencialidad, integridad y disponibilidad", "Qué diferencia hay entre amenaza, vulnerabilidad y riesgo", "Cómo funcionan el ransomware y el phishing y cómo protegerse", "Por qué la 2FA y las contraseñas largas son tan eficaces", "Cómo funciona el cifrado César y por qué es inseguro", "Qué diferencia hay entre cifrado simétrico y asimétrico", "Qué propiedades tiene una función hash y para qué se usa", "Cómo funcionan la firma digital y la regla 3-2-1"],
  mapa: ["SEGURIDAD Y CRIPTOGRAFÍA", [["Amenazas", "malware · phishing"], ["Defensa", "2FA · actualizar · copias"], ["Cifrado", "César · AES · RSA"], ["Integridad", "hash · firma · certificados"]]],
  tarjetas: [
    ["Tríada CID", "Confidencialidad, integridad y disponibilidad."],
    ["Riesgo", "Probabilidad de que una amenaza aproveche una vulnerabilidad × impacto."],
    ["Malware", "Virus, gusano, troyano, ransomware, spyware, botnet."],
    ["Phishing", "Suplantación para robar datos; urgencia y enlaces falsos."],
    ["Factores", "Algo que se sabe, se tiene o se es; 2FA combina dos."],
    ["Contraseña", "Larga, única por servicio, en un gestor."],
    ["César", "Desplazar letras k posiciones; 25 claves."],
    ["Simétrico", "Misma clave; AES; rápido; problema de distribución."],
    ["Asimétrico", "Pública y privada; RSA; lento; se usa en sistemas híbridos."],
    ["Hash", "Resumen fijo, de un sentido, avalancha; SHA-256."],
    ["Firma digital", "Hash cifrado con la clave privada; se verifica con la pública."],
    ["3-2-1", "3 copias, 2 soportes, 1 fuera (y una aislada)."],
  ],
  ejemplos: [
    ["Analiza el riesgo de un portátil de un profesor con las notas, sin contraseña y sin copia, que se lleva a casa a diario.", ["Activo: notas y datos personales del alumnado.", "Amenazas: robo, pérdida, avería, malware.", "Vulnerabilidades: sin contraseña, sin cifrado, sin copias.", "Medidas: contraseña y cifrado del disco, copias automáticas en la nube del centro, actualizaciones."], "Riesgo alto (probabilidad media e impacto muy grande); con las medidas pasa a bajo."],
    ["Calcula cuántas combinaciones tiene una contraseña de 10 caracteres con minúsculas, mayúsculas y cifras, y cuánto se tardaría en probarlas a 10¹⁰ por segundo.", ["Alfabeto: 26 + 26 + 10 = 62 símbolos.", "Combinaciones: 62¹⁰ ≈ 8,4·10¹⁷.", "Tiempo: 8,4·10¹⁷ / 10¹⁰ ≈ 8,4·10⁷ s."], "Unos 8,4·10⁷ segundos, aproximadamente 2,7 años; con 14 caracteres serían millones de años."],
    ["Cifra «ATAQUE» con César y desplazamiento 5, y explica cómo romperlo sin conocer la clave.", ["A→F, T→Y, A→F, Q→V, U→Z, E→J.", "Fuerza bruta: probar los 25 desplazamientos y quedarse con el que da un texto con sentido.", "O análisis de frecuencias en textos largos."], "FYFVZJ. Se rompe en segundos probando las 25 claves."],
    ["Ana quiere enviar a Luis un archivo grande en secreto. Describe un sistema híbrido.", ["Ana genera una clave AES aleatoria y cifra el archivo con ella (rápido).", "Cifra la clave AES con la clave pública de Luis (RSA).", "Envía el archivo cifrado y la clave cifrada.", "Luis descifra la clave AES con su clave privada y después el archivo."], "Se combina la rapidez del simétrico con la ausencia de secreto compartido del asimétrico."],
    ["Comprueba la integridad de un archivo descargado en Python.", ["Leer el archivo en binario.", "Calcular su SHA-256.", "Compararlo con el resumen publicado en la web oficial."], "import hashlib\nwith open(\"instalador.iso\", \"rb\") as f:\n    h = hashlib.sha256(f.read()).hexdigest()\nprint(h == resumen_publicado)"],
    ["Diseña un plan de copias para el trabajo de fin de curso de un estudiante.", ["Original en el portátil.", "Copia automática diaria en un servicio en la nube (fuera).", "Copia semanal en un disco USB que se desconecta después (aislada).", "Restaurar una vez al mes un archivo para comprobarlo."], "Cumple la regla 3-2-1, protege frente a ransomware y verifica la restauración."],
  ],
  errores: [
    "Usar la misma contraseña en varios servicios o contraseñas cortas basadas en datos personales.",
    "Pensar que solo atacan a empresas grandes y que «mis datos no le interesan a nadie».",
    "Pulsar enlaces de mensajes urgentes sin comprobar el remitente ni el dominio.",
    "Confundir cifrar con hacer un hash: el cifrado se deshace con la clave, el hash no se invierte.",
    "Usar la clave privada para cifrar un mensaje secreto a otra persona en lugar de su clave pública.",
    "Tener copias de seguridad siempre conectadas al equipo o no comprobar nunca que se pueden restaurar.",
  ],
  ejercicios: {
    b: [
      ["Define confidencialidad, integridad y disponibilidad con un ejemplo de ataque a cada una.", "Confidencialidad: solo acceden los autorizados (robo de una base de datos). Integridad: sin cambios no autorizados (modificar una nota). Disponibilidad: accesible cuando se necesita (un ataque DDoS que tumba una web)."],
      ["Clasifica en amenaza, vulnerabilidad o activo: un ladrón, los datos de clientes, un programa sin actualizar.", "Amenaza, activo y vulnerabilidad."],
      ["Explica la diferencia entre un virus y un gusano.", "El virus se inserta en archivos y se propaga cuando alguien los ejecuta; el gusano se propaga solo por la red aprovechando vulnerabilidades."],
      ["¿Qué es el ransomware y cuál es la mejor defensa?", "Malware que cifra los archivos y pide un rescate. La mejor defensa son las copias de seguridad aisladas y actualizar los sistemas."],
      ["Enumera tres señales de un mensaje de phishing.", "Urgencia o amenaza, remitente o dominio sospechoso y petición de contraseñas o datos bancarios (también errores de redacción o premios inesperados)."],
      ["Nombra los tres tipos de factores de autenticación con un ejemplo de cada uno.", "Algo que se sabe (contraseña), algo que se tiene (el móvil) y algo que se es (huella dactilar)."],
      ["¿Por qué no hay que repetir la misma contraseña en varios servicios?", "Porque si se filtra en un servicio, los atacantes la prueban en todos los demás y podrían acceder a todas las cuentas."],
      ["Cifra «HOLA MUNDO» con César y desplazamiento 1.", "IPMB NVOEP."],
      ["¿Qué diferencia hay entre texto en claro y texto cifrado?", "El texto en claro es el mensaje original legible; el texto cifrado es el resultado de aplicarle el cifrado con una clave."],
      ["En el cifrado asimétrico, ¿qué clave se comparte y cuál no?", "Se comparte la clave pública; la clave privada se guarda en secreto y no se comparte nunca."],
      ["Indica dos usos de las funciones hash.", "Comprobar la integridad de archivos y guardar contraseñas de forma segura (también firmas digitales y blockchain)."],
      ["Explica la regla 3-2-1.", "Tener 3 copias de los datos, en 2 soportes distintos y 1 de ellas fuera del lugar habitual."],
    ],
    m: [
      ["Programa en Python una función que descifre César probando las 25 claves (fuerza bruta).", "def romper(cifrado):\n    for k in range(1, 26):\n        print(k, cesar(cifrado, -k))\n# Se lee la lista y se elige el texto con sentido."],
      ["Programa una función que cuente la frecuencia de cada letra de un texto y explica para qué sirve en criptoanálisis.", "from collections import Counter\ndef frecuencias(t):\n    return Counter(c for c in t.upper() if c.isalpha()).most_common()\nEn un cifrado de sustitución, la letra más frecuente del texto cifrado suele corresponder a la E o la A en español, lo que revela la clave."],
      ["Calcula cuántas combinaciones tienen un PIN de 4 cifras y una contraseña de 8 minúsculas. ¿Por qué el PIN es aceptable en una tarjeta?", "10⁴ = 10 000 y 26⁸ ≈ 2,1·10¹¹. El PIN es aceptable porque la tarjeta se bloquea tras tres intentos fallidos, lo que impide la fuerza bruta."],
      ["Explica por qué una frase de contraseña como «tortuga-faro-mostaza-nube» puede ser más segura que «P@ssw0rd!».", "Es mucho más larga (25 caracteres) y aleatoria, por lo que tiene muchísimas más combinaciones; «P@ssw0rd!» es una variación de una palabra común que está en todos los diccionarios de ataque."],
      ["Usa la biblioteca cryptography para cifrar y descifrar un texto con Fernet, y explica dónde debe guardarse la clave.", "from cryptography.fernet import Fernet\nk = Fernet.generate_key(); f = Fernet(k)\nc = f.encrypt(b\"secreto\"); print(f.decrypt(c))\nLa clave debe guardarse fuera del código y del repositorio, por ejemplo en un gestor de secretos o una variable de entorno."],
      ["Calcula cuántas claves hacen falta para que 100 personas se comuniquen en parejas con cifrado simétrico y con asimétrico.", "Simétrico: 100·99/2 = 4950 claves secretas. Asimétrico: 100 pares de claves (una pública y una privada por persona)."],
      ["Con el RSA de juguete del tema (n = 3233, e = 17, d = 2753), cifra el mensaje m = 42 y comprueba el descifrado en Python.", "c = pow(42, 17, 3233)\nprint(c, pow(c, 2753, 3233))  # el segundo valor es 42"],
      ["Calcula en Python el SHA-256 de tu nombre y de tu nombre con una letra cambiada. ¿Qué propiedad observas?", "import hashlib\nfor t in [\"Lucia\", \"Lucio\"]:\n    print(hashlib.sha256(t.encode()).hexdigest())\nLos resúmenes son totalmente distintos: efecto avalancha."],
      ["Explica por qué se añade una sal a las contraseñas antes de calcular su hash.", "Para que dos contraseñas iguales tengan resúmenes distintos y para inutilizar las tablas de resúmenes precalculados: el atacante tendría que atacar cada contraseña por separado."],
      ["Describe paso a paso cómo verifica el receptor una firma digital.", "Descifra la firma con la clave pública del firmante y obtiene el resumen original; calcula el resumen del documento recibido; si ambos coinciden, el documento es auténtico e íntegro."],
      ["¿Para qué sirve un certificado digital y quién lo firma?", "Para asegurar que una clave pública pertenece a una persona o entidad concreta. Lo firma una autoridad de certificación de confianza."],
      ["Enumera cinco medidas para proteger la wifi de casa.", "Cifrado WPA3 o WPA2 con contraseña larga, cambiar la contraseña de administración del router, desactivar WPS, actualizar el firmware y crear una red de invitados."],
      ["¿Qué riesgos tiene conectarse a una wifi abierta en una cafetería y cómo se reducen?", "Un atacante podría interceptar el tráfico no cifrado o crear un punto de acceso falso. Se reduce usando solo webs con HTTPS, evitando operaciones bancarias y usando una VPN."],
      ["Explica la diferencia entre copias completas, incrementales y diferenciales.", "Completa: copia todo. Incremental: copia lo cambiado desde la última copia de cualquier tipo (rápida, pero restaurar exige todas). Diferencial: copia lo cambiado desde la última completa (restaurar exige la completa y la última diferencial)."],
    ],
    a: [
      ["Programa el cifrado de Vigenère en Python y explica por qué es más seguro que César.", "def vigenere(t, clave, signo=1):\n    r, j = \"\", 0\n    for c in t.upper():\n        if c.isalpha():\n            k = ord(clave[j % len(clave)].upper()) - 65\n            r += chr((ord(c) - 65 + signo * k) % 26 + 65); j += 1\n        else:\n            r += c\n    return r\nCada letra se desplaza una cantidad distinta según la letra de la clave, por lo que una misma letra se cifra de varias formas y el análisis de frecuencias simple no funciona."],
      ["Programa un sistema de registro e inicio de sesión que guarde las contraseñas con sal y hash usando hashlib.pbkdf2_hmac.", "import hashlib, os\nusuarios = {}\ndef registrar(u, clave):\n    sal = os.urandom(16)\n    h = hashlib.pbkdf2_hmac(\"sha256\", clave.encode(), sal, 200_000)\n    usuarios[u] = (sal, h)\ndef entrar(u, clave):\n    if u not in usuarios: return False\n    sal, h = usuarios[u]\n    return hashlib.pbkdf2_hmac(\"sha256\", clave.encode(), sal, 200_000) == h"],
      ["Genera con Python una contraseña aleatoria segura de 16 caracteres y explica por qué se usa el módulo secrets y no random.", "import secrets, string\nalf = string.ascii_letters + string.digits + \"!-_.\"\nprint(\"\".join(secrets.choice(alf) for _ in range(16)))\nsecrets usa un generador criptográficamente seguro e impredecible; random es predecible si se conoce su estado y no sirve para seguridad."],
      ["Verifica con la clave pública del RSA de juguete una firma: el resumen del documento es 123 y la firma recibida es pow(123, 2753, 3233).", "f = pow(123, 2753, 3233)       # firma con la privada\nprint(pow(f, 17, 3233) == 123)   # True: firma válida\nSi el documento cambiara, su resumen ya no sería 123 y la comprobación fallaría."],
      ["Una pyme de diez empleados te pide un plan básico de ciberseguridad. Propón medidas técnicas, organizativas y de formación.", "Técnicas: actualizaciones automáticas, antivirus, cortafuegos, 2FA en correo y servicios, cifrado de portátiles, copias 3-2-1 con una aislada, wifi separada para invitados. Organizativas: inventario de activos, cuentas sin privilegios, política de contraseñas con gestor, plan de respuesta a incidentes. Formación: simulacros de phishing y sesiones periódicas."],
      ["Analiza un ataque real de ransomware a un hospital: vías de entrada probables, consecuencias y medidas que lo habrían limitado.", "Respuesta abierta. Entrada: correo de phishing o vulnerabilidad sin parchear en un acceso remoto. Consecuencias: citas canceladas, historias clínicas inaccesibles, riesgo para pacientes y fuga de datos. Medidas: parches, 2FA en accesos remotos, segmentación de la red, copias aisladas y probadas, formación y un plan de contingencia."],
      ["Explica por qué los ordenadores cuánticos amenazan a RSA pero no tanto a AES, y qué es la criptografía poscuántica.", "Un ordenador cuántico suficientemente grande podría factorizar números enormes con el algoritmo de Shor, rompiendo RSA y las curvas elípticas. Contra AES solo reduciría a la mitad la seguridad efectiva (algoritmo de Grover), que se compensa con claves de 256 bits. La criptografía poscuántica usa problemas matemáticos que se creen resistentes a ordenadores cuánticos, ya estandarizados por el NIST."],
      ["Investiga la «cadena de confianza» de un certificado: abre el candado de una web y describe los certificados que aparecen.", "Respuesta abierta. Aparece el certificado del sitio, emitido por una autoridad intermedia, que a su vez está firmada por una autoridad raíz incluida en el almacén de confianza del navegador o del sistema operativo. Si cualquier eslabón falla o caduca, el navegador muestra una advertencia."],
      ["Debate: ¿deberían los gobiernos poder exigir una «puerta trasera» en el cifrado de las aplicaciones de mensajería para investigar delitos?", "Respuesta abierta. A favor: facilitaría investigar terrorismo o abuso infantil. En contra: una puerta trasera debilita la seguridad de todos los usuarios y la pueden descubrir y usar delincuentes o gobiernos autoritarios; los delincuentes usarían otras herramientas. La mayoría de los expertos en criptografía se oponen."],
      ["Debate: un compañero dice que «hackear la cuenta de alguien para gastarle una broma no es delito». Analízalo desde el punto de vista legal y ético.", "Es falso: el acceso no autorizado a sistemas o cuentas está castigado en el Código Penal aunque no se cause daño, y además vulnera la intimidad de la víctima. Éticamente, viola la confianza y puede causar un daño real. Lo correcto es respetar la privacidad y, si se conoce un fallo, comunicarlo."],
    ],
  },
  glosario: [
    ["Confidencialidad", "Garantía de que solo las personas autorizadas acceden a la información."],
    ["Integridad", "Garantía de que la información no se modifica sin autorización."],
    ["Disponibilidad", "Garantía de que la información y los servicios están accesibles cuando se necesitan."],
    ["Vulnerabilidad", "Debilidad de un sistema que puede aprovechar una amenaza."],
    ["Malware", "Software diseñado para dañar un sistema o aprovecharse de él."],
    ["Ransomware", "Malware que cifra los datos y exige un rescate."],
    ["Phishing", "Engaño que suplanta a una entidad de confianza para robar datos."],
    ["Autenticación", "Comprobación de la identidad de quien accede a un sistema."],
    ["Criptografía", "Ciencia que protege la información transformándola mediante claves."],
    ["Clave", "Dato secreto o público que controla el cifrado y el descifrado."],
    ["Cifrado simétrico", "Cifrado que usa la misma clave para cifrar y descifrar."],
    ["Cifrado asimétrico", "Cifrado con una clave pública y otra privada relacionadas."],
    ["Función hash", "Función que obtiene un resumen de longitud fija y no reversible de un dato."],
    ["Sal", "Valor aleatorio que se añade a una contraseña antes de calcular su hash."],
    ["Firma digital", "Resumen cifrado con la clave privada que garantiza autoría e integridad."],
    ["Certificado digital", "Documento firmado que vincula una clave pública con una identidad."],
    ["Cortafuegos", "Sistema que controla el tráfico entre redes según unas reglas."],
    ["Copia de seguridad", "Duplicado de los datos para recuperarlos en caso de pérdida."],
  ],
  situacion: {
    titulo: "Auditoría de ciberseguridad del aula",
    reto: "En grupos, actuad como un equipo de auditores con autorización del centro: analizad los riesgos de seguridad del aula de informática y de vuestros hábitos digitales, programad herramientas criptográficas sencillas y presentad un plan de mejora.",
    pasos: [
      "Firmad un acuerdo de autorización con el profesorado que delimite qué se puede revisar y qué no.",
      "Haced un inventario de activos y un análisis de riesgos (amenazas, vulnerabilidades, probabilidad e impacto).",
      "Encuestad de forma anónima a la clase sobre contraseñas, 2FA y copias, y analizad los resultados.",
      "Programad en Python un cifrador César y Vigenère, un comprobador de hash de archivos y un generador de contraseñas seguras.",
      "Redactad un plan de mejora priorizado y una campaña de concienciación contra el phishing para el centro.",
    ],
    producto: "Informe de auditoría con análisis de riesgos y plan de mejora, programas en Python comentados y materiales de la campaña de concienciación.",
    evaluacion: [
      "El análisis de riesgos identifica activos, amenazas y vulnerabilidades y los valora con criterio.",
      "Los programas funcionan y usan correctamente las técnicas criptográficas.",
      "Las medidas propuestas son realistas, priorizadas y justificadas.",
      "Se respetan la autorización, la privacidad y la ética en todo el proceso.",
    ],
  },
  familias: [
    "Revisad juntos si tenéis activada la verificación en dos pasos en el correo y el banco.",
    "Pensad cómo haríais una copia de seguridad de las fotos familiares siguiendo la regla 3-2-1.",
    "Comentad algún mensaje de phishing que hayáis recibido y cómo lo reconocisteis.",
    "Guardad en la agenda el 017, el teléfono gratuito de ayuda en ciberseguridad del INCIBE.",
  ],
  saberes: "Seguridad informática y criptografía: objetivos de la seguridad (confidencialidad, integridad y disponibilidad), análisis de riesgos, malware, ingeniería social y phishing, autenticación multifactor y gestión de contraseñas, criptografía clásica y criptoanálisis, cifrado simétrico (AES) y asimétrico (RSA), funciones hash, firma digital, certificados y PKI, seguridad en redes, copias de seguridad, respuesta a incidentes, legislación y hacking ético (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Organizar un concurso de descifrado con mensajes en César y Vigenère y pistas de frecuencias.",
    "Usar los materiales y simulacros gratuitos de phishing del INCIBE para la tutoría.",
    "Calcular en clase el tiempo de fuerza bruta de contraseñas reales anónimas para mostrar la importancia de la longitud.",
    "Participar en retos de seguridad (CTF) para estudiantes de Secundaria, siempre en entornos autorizados.",
  ],
  fuentes: [
    { t: "INCIBE: oficina de seguridad del internauta", url: "https://www.incibe.es/ciudadania" },
    { t: "CCN-CERT: guías y buenas prácticas", url: "https://www.ccn-cert.cni.es/" },
    { t: "Documentación de la biblioteca cryptography para Python", url: "https://cryptography.io/en/latest/" },
    { t: "Python: módulo hashlib", url: "https://docs.python.org/es/3/library/hashlib.html" },
  ],
}));
