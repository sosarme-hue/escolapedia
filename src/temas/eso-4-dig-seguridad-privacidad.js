// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Seguridad y privacidad digital",
  minutos: 40,
  objetivos: ["Reconocer las amenazas más comunes: malware, phishing y robo de cuentas", "Proteger dispositivos y cuentas con contraseñas fuertes y doble factor", "Cuidar los datos personales y configurar la privacidad"],
  claves: ["malware", "phishing", "contraseña", "doble factor", "datos personales", "cookies"],
  pregunta: {
    texto: "Te llega un SMS: «Tu paquete no se ha podido entregar. Paga 1,99 € aquí para recibirlo». No esperas ningún paquete. ¿Qué harías?",
    respuesta: "No tocar el enlace. Es un caso típico de <mark>phishing</mark> (smishing, por SMS): un engaño que se hace pasar por una empresa conocida para robarte los datos de la tarjeta o las contraseñas. Mete prisa y pide un pago pequeño para que no lo pienses. Lo correcto es borrarlo y, si dudas, entrar en la web oficial escribiendo tú la dirección.",
  },
  bloques: [
    {
      html: `<h3>Las amenazas</h3><p>Se llama <b>malware</b> a cualquier programa malicioso: <b>virus</b> (se pegan a otros archivos), <b>gusanos</b> (se copian solos por la red), <b>troyanos</b> (parecen útiles pero abren la puerta al atacante), <b>espías</b> (spyware) y <mark>ransomware</mark>, que cifra tus archivos y pide un rescate. Entran sobre todo por descargas de sitios no oficiales, archivos adjuntos y enlaces trampa, y aprovechan programas sin actualizar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tipos de malware: virus, gusano, troyano, espía y ransomware">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="86" r="30" fill="var(--red)"/>${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${130 + 30 * Math.cos(a)} ${86 + 30 * Math.sin(a)} L ${130 + 40 * Math.cos(a)} ${86 + 40 * Math.sin(a)}" stroke="var(--red)" stroke-width="4"/>`; }).join("")}
        <text x="130" y="91" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>malware</text>
        ${[["virus", 44, 30], ["gusano", 216, 30], ["troyano", 40, 150], ["espía", 220, 150], ["ransomware", 130, 172]].map(([t, x, y]) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <path d="M60 38 L 100 64 M200 38 L 160 64 M60 140 L 102 104 M200 140 L 158 104 M130 128 V 158" stroke="var(--line)" stroke-width="2"/>
      </svg>`,
    },
    {
      html: `<h3>El engaño: phishing e ingeniería social</h3><p>Muchos ataques no rompen nada: <b>engañan a las personas</b>. Es la <b>ingeniería social</b>. El <mark>phishing</mark> llega por correo, SMS o mensajería haciéndose pasar por un banco, una tienda, una red social o un amigo. Pistas para detectarlo: <b>urgencia</b> («tu cuenta se bloqueará hoy»), premios demasiado buenos, faltas de ortografía, remitente o enlace con una dirección rara y peticiones de contraseñas o códigos. Ninguna empresa seria te pedirá tu contraseña por mensaje.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mensaje falso con señales de alerta: urgencia, enlace raro y petición de datos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="20" width="150" height="140" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <g ${F} font-size="10"><text x="30" y="40" font-weight="700" fill="var(--ink)">Banco Seguro</text><text x="30" y="62" fill="var(--red)" font-weight="700">¡URGENTE! Bloqueo hoy</text><text x="30" y="84" fill="var(--ink)">Verifica tu cuenta:</text><text x="30" y="102" fill="var(--pen)" text-decoration="underline">bnco-seguro.xyz</text><text x="30" y="124" fill="var(--ink)">Escribe tu clave y</text><text x="30" y="140" fill="var(--ink)">el código del SMS</text></g>
        ${[[58, "urgencia"], [98, "enlace raro"], [132, "pide datos"]].map(([y, t]) => `<circle cx="186" cy="${y}" r="9" fill="var(--sun)"/><text x="186" y="${y + 4}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>!</text><text x="198" y="${y + 4}" font-size="9" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Contraseñas fuertes y doble factor</h3><p>Una buena contraseña es <b>larga</b> (12 caracteres o más), <b>única</b> para cada servicio y difícil de adivinar: nada de fechas de nacimiento ni «123456». Un truco es usar una <b>frase de paso</b> con varias palabras, números y símbolos. Un <b>gestor de contraseñas</b> las recuerda por ti. Y lo más eficaz es activar la <mark>verificación en dos pasos</mark> (2FA): además de la contraseña, se pide un código del móvil o una llave, así que aunque roben la clave no podrán entrar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos pasos para entrar: contraseña larga y código en el móvil">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="50" width="120" height="30" rx="6" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="26" y="70" font-size="12" fill="var(--pen)" ${F}>••••••••••••••</text>
        <text x="16" y="40" font-size="10" font-weight="700" fill="var(--ink)" ${F}>1. contraseña larga</text>
        <rect x="176" y="32" width="54" height="94" rx="9" fill="var(--ink)"/><rect x="182" y="42" width="42" height="72" rx="3" fill="var(--paper)"/><text x="203" y="84" text-anchor="middle" font-size="10" font-weight="700" fill="var(--leaf)" ${F}>482913</text>
        <text x="203" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>2. código</text>
        <path d="M140 66 H 168" stroke="var(--ink)" stroke-width="2.5"/><path d="M164 61 L 170 66 L 164 71" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="20" y="110" width="110" height="44" rx="8" fill="var(--leaf)"/><text x="75" y="130" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>larga · única</text><text x="75" y="145" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>+ 2FA activado</text>
      </svg>`,
    },
    {
      html: `<h3>Proteger los dispositivos</h3><p>Medidas básicas: mantener <b>actualizados</b> el sistema y las aplicaciones; descargar apps solo de <b>tiendas oficiales</b> y revisar los <b>permisos</b> que piden (¿una linterna necesita tus contactos?); usar un <b>antivirus</b> y el cortafuegos; bloquear la pantalla con PIN o huella; desconfiar de los <mark>wifi públicos</mark> abiertos para cosas importantes y comprobar que las webs donde escribes datos usan <b>HTTPS</b> (el candado). Y hacer copias de seguridad por si algo falla.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escudo rodeado de medidas: actualizar, tienda oficial, permisos, bloqueo y HTTPS">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 30 L 168 44 V 86 C 168 112 150 128 130 138 C 110 128 92 112 92 86 V 44 Z" fill="var(--pen)"/><path d="M114 84 L 126 96 L 148 72" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
        <g ${F} font-size="10" font-weight="700" fill="var(--ink)"><text x="16" y="44">actualizar</text><text x="16" y="88">tienda oficial</text><text x="16" y="132">bloqueo PIN</text><text x="184" y="44">permisos</text><text x="184" y="88">antivirus</text><text x="184" y="132">HTTPS 🔒</text></g>
        <text x="130" y="166" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>varias capas de protección</text>
      </svg>`,
    },
    {
      html: `<h3>Datos personales y privacidad</h3><p>Son <b>datos personales</b> el nombre, la foto, la dirección, el teléfono, la ubicación, la voz o lo que buscas. Las empresas los recogen, a veces con <b>cookies</b> que siguen lo que haces en la web, para mostrarte publicidad. En Europa, el <mark>Reglamento General de Protección de Datos</mark> (RGPD) obliga a pedir tu consentimiento y te da derechos: acceder a tus datos, corregirlos, borrarlos u oponerte a su uso. En España, hasta los <b>14 años</b> hace falta el permiso de los padres para que una red social trate tus datos. Revisa la configuración de privacidad y comparte lo mínimo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Datos personales alrededor de una persona y el escudo del RGPD">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="70" r="18" fill="var(--ink)"/><path d="M100 118 C 100 96 160 96 160 118 Z" fill="var(--ink)"/>
        ${[["nombre", 40, 36], ["ubicación", 220, 36], ["fotos", 34, 96], ["búsquedas", 222, 96], ["teléfono", 54, 146], ["cookies", 206, 146]].map(([t, x, y]) => `<rect x="${x - 32}" y="${y - 13}" width="64" height="20" rx="10" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="${x}" y="${y + 1}" text-anchor="middle" font-size="9" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <rect x="104" y="134" width="52" height="24" rx="6" fill="var(--leaf)"/><text x="130" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>RGPD</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Cinco hábitos que evitan la mayoría de los problemas",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cinco hábitos de seguridad: actualizar, contraseñas únicas, doble factor, desconfiar de enlaces y copias de seguridad">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Actualizar", "sistema y apps", "var(--pen)"], ["Claves únicas", "largas y distintas", "var(--sun)"], ["Doble factor", "código o llave", "var(--leaf)"], ["Desconfiar", "de enlaces y prisas", "var(--red)"], ["Copias", "3-2-1", "var(--inf)"]]
        .map(([n, d, c], i) => `<rect x="${14 + i * 124}" y="30" width="114" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <circle cx="${71 + i * 124}" cy="78" r="22" fill="${c}"/><text x="${71 + i * 124}" y="86" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" ${D}>${i + 1}</text>
          <text x="${71 + i * 124}" y="132" text-anchor="middle" font-size="14" font-weight="700" fill="${c}" ${F}>${n}</text>
          <text x="${71 + i * 124}" y="156" text-anchor="middle" font-size="11" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "2TferQprZ0g", titulo: "Las 10 claves para usar Internet con seguridad", canal: "PantallasAmigas", vistas: 2233145, megusta: 0, busqueda: "seguridad en internet adolescentes claves" },
  quiz: [
    { q: "El malware que cifra tus archivos y pide un rescate es…", o: ["un gusano", "ransomware", "spyware"], a: 1, e: "Ransom significa rescate en inglés." },
    { q: "¿Cuál es una señal típica de phishing?", o: ["Un mensaje que mete prisa y pide tu contraseña", "Una web con HTTPS", "Un aviso de actualización en los ajustes del sistema"], a: 0, e: "Urgencia + petición de datos = alarma." },
    { q: "¿Qué contraseña es más segura?", o: ["123456", "Lucas2010", "Tortuga-azul-come-7-fresas!"], a: 2, e: "Larga, con palabras sin relación, números y símbolos." },
    { q: "La verificación en dos pasos sirve para…", o: ["recordar la contraseña", "que no basten tu contraseña para entrar si te la roban", "navegar más rápido"], a: 1, e: "Hace falta además un código o un dispositivo tuyo." },
    { q: "¿Qué ley europea protege tus datos personales?", o: ["El RGPD", "El REBT", "El TCP/IP"], a: 0, e: "Reglamento General de Protección de Datos." }
  ],
  examen: [
    { q: "Un programa que parece un juego gratis pero da el control del móvil a un atacante es un…", o: ["troyano", "antivirus", "cortafuegos"], a: 0, e: "Como el caballo de Troya: un regalo con sorpresa." },
    { q: "Una app de linterna pide acceso a tus contactos y micrófono. ¿Qué haces?", o: ["Aceptar, es normal", "Desconfiar y no instalarla o denegar permisos", "Instalarla dos veces"], a: 1, e: "Los permisos deben tener sentido con lo que hace la app." },
    { q: "En España, ¿desde qué edad puedes dar tú solo el consentimiento a una red social?", o: ["12 años", "14 años", "18 años"], a: 1, e: "Por debajo de 14 hace falta el permiso de padres o tutores." },
  ],
  feynman: ["Los tipos de malware y cómo entran", "Cómo reconocer un mensaje de phishing", "Cómo crear contraseñas fuertes y para qué sirve el doble factor", "Las medidas básicas para proteger un móvil", "Qué son los datos personales y qué derechos da el RGPD"],
  mapa: mapa("SEGURIDAD Y PRIVACIDAD", "var(--eso)", [
    ["Amenazas", "virus · troyano · ransomware", "var(--red)"],
    ["Engaños", "phishing · ingeniería social", "var(--sun)"],
    ["Protección", "claves · 2FA · actualizar", "var(--leaf)"],
    ["Privacidad", "datos · cookies · RGPD", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["¿Qué es el phishing?", "Un engaño que suplanta a una empresa o persona para robar datos."],
    ["¿Qué es el ransomware?", "Malware que cifra tus archivos y pide un rescate."],
    ["¿Qué es la 2FA?", "Verificación en dos pasos: contraseña más un código o dispositivo."],
    ["¿Qué significa el candado HTTPS?", "Que la conexión con esa web va cifrada."],
    ["Cuatro derechos del RGPD", "Acceder, corregir, borrar y oponerte al uso de tus datos."],
  ],
  familias: ["Activad juntos la verificación en dos pasos en una cuenta importante de casa.", "Buscad un mensaje sospechoso real en el móvil y señalad las pistas de phishing.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Seguridad de dispositivos y de datos: amenazas, medidas de protección, contraseñas y autenticación; protección de datos personales y privacidad (RD 217/2022, Digitalización 4º).",
    ideas: ["Concurso para detectar mensajes de phishing reales anonimizados.", "Comprobar en haveibeenpwned si un correo de prueba aparece en filtraciones.", "Revisar en parejas la configuración de privacidad de una red social."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "INCIBE, Oficina de Seguridad del Internauta", url: "https://www.incibe.es/ciudadania" },
  ],
  revisado: "2026-11-12",
};
