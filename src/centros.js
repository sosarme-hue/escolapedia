// Página «Escolapedia para centros»: academias, escuelas y ayuntamientos.
// Planes orientativos y piloto de centros fundadores. Aún no hay pagos en la web: el contacto es por correo.
module.exports = function centros({ page, write, SITE, nTemas, nMaterias, nPau }) {
  const ul = (xs) => `<ul>${xs.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  const box = (h, inner) => `<div class="box"><h3>${h}</h3>${inner}</div>`;
  const MAIL = "partenopides@gmail.com";
  const mail = (asunto) => `mailto:${MAIL}?subject=${encodeURIComponent(asunto)}`;
  const tabla = (head, rows) => `<div class="tscroll"><table class="rec-t"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td>${i ? c : `<b>${c}</b>`}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const fmt = (n) => n.toLocaleString("es-ES");

  const body = `<main><div class="wrap rec centros" style="padding-bottom:48px">
  <div class="crumbs"><a href="../">Inicio</a> › Para centros</div>
  <div class="page-h"><h1>Escolapedia para academias y centros</h1>
  <p>Todo el temario de Infantil a 2.º de Bachillerato y la PAU, listo para usar en vuestras clases y para que el alumnado siga practicando en casa. Con licencia para uso comercial, panel del profesor y vuestro logo.</p></div>

  <p class="cta-row"><a class="btn-c" href="${mail("Piloto Escolapedia para centros")}">Pedir una demo o un piloto</a> <a class="btn-c alt" href="#planes">Ver planes</a></p>

  <div class="cifras">
    <div><b>${fmt(nTemas)}</b><span>temas completos</span></div>
    <div><b>${fmt(nMaterias)}</b><span>materias, de Infantil a Bachillerato</span></div>
    <div><b>${nPau}</b><span>materias PAU con modelo resuelto</span></div>
    <div><b>3</b><span>exámenes por materia, con soluciones</span></div>
  </div>

  <section class="rec-sec"><h2>Qué os aporta</h2>
  <div class="who">
    ${box("Material listo para clase", ul(["Explicación, ejemplos resueltos, ejercicios por niveles y soluciones en cada tema.", "Fichas en PDF y exámenes trimestrales para imprimir.", "Modo proyector para la pizarra digital."]))}
    ${box("Práctica entre clases", ul(["Tests con corrección al momento y tarjetas de repaso espaciado.", "El alumno repasa en casa lo que habéis visto en clase.", "Sección PAU 2027 con modelos resueltos, tests y plan de estudio."]))}
    ${box("Seguimiento", ul(["Panel del profesor: grupos, temas y tests asignados y resultados por alumno.", "Informe para las familias, si lo queréis.", "<small>El panel se estrena con los centros fundadores en enero de 2027.</small>"]))}
    ${box("Con vuestra marca y legal", ul(["Fichas y exámenes con el logo del centro.", "Licencia de uso comercial: el contenido abierto de Escolapedia es CC BY-NC y no se puede usar en clases de pago sin ella.", "Contrato de encargado de tratamiento (RGPD) para los datos del alumnado."]))}
  </div></section>

  <section class="rec-sec" id="planes"><h2>Planes para academias y escuelas</h2>
  <p>Pagáis por alumnos que usan Escolapedia, no por profesor. Precios sin IVA. Con pago anual, 2 meses gratis.</p>
  ${tabla(["Plan", "Precio", "Para quién"], [
    ["Academia 50", "49 € al mes", "Hasta 50 alumnos activos. Academia pequeña, una sede."],
    ["Academia 150", "99 € al mes", "Hasta 150 alumnos. Academia mediana o dos sedes."],
    ["Academia ilimitada", "199 € al mes", "Academia grande o red de sedes."],
    ["Escuela", "3 € por alumno y año (mínimo 600 € al año)", "Colegio privado o concertado, por curso escolar."],
  ])}
  <p class="caption">Todos incluyen licencia de uso comercial, cuentas Plus para el alumnado matriculado, panel del profesor y marca blanca.</p></section>

  <section class="rec-sec"><h2>Ayuntamientos y programas de refuerzo</h2>
  <p>Refuerzo escolar gratuito para todo el alumnado de un municipio o de un programa, de Infantil a la PAU.</p>
  ${tabla(["Licencia", "Precio", "Para quién"], [
    ["Municipal o comarcal", "1 a 2 € por alumno y año (mínimo 1.500 € al año)", "Ayuntamientos y consells comarcals."],
    ["Programa de refuerzo", "Tarifa cerrada por programa", "Programas para alumnado vulnerable y planes educativos de entorno."],
  ])}</section>

  <section class="rec-sec"><h2>Centros fundadores: piloto gratis de enero a marzo de 2027</h2>
  <div class="who">
    ${box("Qué recibís", ul(["Tres meses gratis, hasta 60 alumnos.", "Cuentas Plus, panel del profesor y fichas con vuestro logo.", "Después, un 50 % de descuento el primer año."]))}
    ${box("Qué os pedimos", ul(["Usarlo en clase y en casa.", "Una breve charla de opinión cada dos semanas.", "Permiso para contar la experiencia con vuestro nombre."]))}
  </div>
  <p class="cta-row"><a class="btn-c" href="${mail("Quiero ser centro fundador de Escolapedia")}">Quiero ser centro fundador</a></p></section>

  <section class="rec-sec"><h2>Preguntas frecuentes</h2>
  <div class="who">
    ${box("¿Sigue siendo gratis para el alumnado?", "<p>Sí. Los temas, tests y exámenes que hoy son gratis lo seguirán siendo. La licencia de centro añade uso comercial, seguimiento y material con vuestra marca.</p>")}
    ${box("¿Por qué necesita licencia una academia?", "<p>El contenido abierto se publica con licencia CC BY-NC 4.0, que no permite el uso comercial. Una academia que cobra sus clases necesita el permiso del autor, y la licencia de centro lo da.</p>")}
    ${box("¿Sigue el currículo de mi comunidad?", "<p>Sigue las enseñanzas mínimas de la LOMLOE (RD 95/2022, 157/2022, 217/2022 y 243/2022), con lenguas cooficiales y una sección propia de la PAU en Cataluña.</p>")}
    ${box("¿Cómo empezamos?", `<p>Escribid a <a href="${mail("Escolapedia para centros")}">${MAIL}</a> con el nombre del centro, los niveles y el número aproximado de alumnos. Os enseñamos la plataforma en 30 minutos.</p>`)}
  </div></section>
</div></main>`;

  write("centros", page({ title: `Escolapedia para academias y centros · ${SITE}`, desc: "Licencias de Escolapedia para academias, escuelas y ayuntamientos: uso comercial, panel del profesor, marca blanca y piloto gratis.", depth: 1, nav: "profesores", body }));
};
