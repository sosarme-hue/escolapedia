// Ampliación de un tema a nivel de libro de texto (ver «Tema ampliado» en el README).
// Uso al final de un tema:
//   require("./_amplia").amplia(module.exports, {
//     minutos, objetivos: [...],
//     tras: { "Título de un bloque existente": [bloque, ...] },   // inserta bloques nuevos detrás de ese bloque
//     final: [bloque, ...],                                         // bloques al final
//     ejemplos, errores, ejercicios, quiz: [...5 más], tarjetas: [...3 más],
//   });
// Un bloque nuevo es { html, svg?, video? }; el vídeo es { id, titulo, canal, vistas }.

const tabla = (cab, filas) => `<table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

const bloque = (b) => (b.video ? { ...b, video: { megusta: 0, ...b.video } } : b);

function amplia(T, o) {
  if (o.minutos) T.minutos = o.minutos;
  if (o.objetivos) T.objetivos.push(...o.objetivos);
  // Se inserta de atrás hacia delante para que los índices no se muevan.
  const tras = Object.entries(o.tras || {}).map(([t, nuevos]) => {
    const i = T.bloques.findIndex((b) => b.html.includes(`<h3>${t}</h3>`));
    if (i < 0) throw new Error(`amplia: no encuentro el bloque «${t}» en «${T.titulo}»`);
    return [i, nuevos];
  }).sort((a, b) => b[0] - a[0]);
  for (const [i, nuevos] of tras) T.bloques.splice(i + 1, 0, ...nuevos.map(bloque));
  if (o.final) T.bloques.push(...o.final.map(bloque));
  if (o.ejemplos) T.ejemplos = o.ejemplos;
  if (o.errores) T.errores = o.errores;
  if (o.ejercicios) T.ejercicios = o.ejercicios;
  if (o.quiz) T.quiz.push(...o.quiz);
  if (o.tarjetas) T.tarjetas.push(...o.tarjetas);
  return T;
}

module.exports = { amplia, tabla };
