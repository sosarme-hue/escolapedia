// Ayudas de los temas de Lengua Catalana y Literatura I (1º de Bachillerato, nivel libro). Los temas se escriben en catalán.
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza las ayudas de Historia del Mundo Contemporáneo (_bach1-hmc.js: cajas, flujo, versus, rueda, cuadro, crono, fig...)
// y añade las referencias curriculares de Catalán I y tema(), que pone materia y curso y comprueba el formato «nivel libro».
const H = require("./_bach1-hmc");

const MATERIA = "Lengua Catalana y Literatura I";

const SAB = (s) => `${s} (RD 243/2022, Llengua Cooficial i Literatura, 1r de Batxillerat; a Catalunya, Decret 171/2022, Llengua Catalana i Literatura I: sabers «Les llengües i els seus parlants», «Comunicació», «Educació literària» i «Reflexió sobre la llengua»).`;

const IEC = { t: "Institut d'Estudis Catalans: Gramàtica essencial de la llengua catalana (GEIEC)", url: "https://geiec.iec.cat/" };
const DIEC = { t: "Diccionari de la llengua catalana de l'IEC (DIEC2)", url: "https://dlc.iec.cat/" };
const OPTIMOT = { t: "Optimot, consultes lingüístiques (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" };
const LLETRA = { t: "Lletra, la literatura catalana a internet (UOC)", url: "https://lletra.uoc.edu/" };
const VIQUI = (t, slug) => ({ t: `${t}, Viquipèdia`, url: `https://ca.wikipedia.org/wiki/${slug}` });

// Tabla HTML dentro del texto de un bloque: cabecera y filas (la primera celda de cada fila va en negrita).
const tb = (cab, filas) => `<table class="tb"><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr>${filas.map((f) => `<tr>${f.map((c, i) => (i ? `<td>${c}</td>` : `<th>${c}</th>`)).join("")}</tr>`).join("")}</table>`;

const strip = (s) => String(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T = { materia: MATERIA, curso: "1-bachillerato", minutos: 120, ...o, fuentes: [H.RD, H.DC, ...(o.fuentes || [])], revisado: o.revisado || "2026-11-21" };
  const av = [];
  const w = T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3300) av.push(`${w} paraules`);
  if (T.bloques.length < 10 || T.bloques.length > 16) av.push(`${T.bloques.length} blocs`);
  if (T.bloques.some((b) => !b.svg)) av.push("blocs sense dibuix");
  if (T.bloques.filter((b) => b.video).length < 2) av.push("falten vídeos de bloc");
  const c = (n) => T.ejercicios.filter((e) => e.nivel === n).length;
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40) av.push(`${T.ejercicios.length} exercicis (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 12) av.push(`targetes ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 6 || T.errores.length !== 6) av.push(`exemples ${T.ejemplos.length} errors ${T.errores.length}`);
  if (T.glosario.length < 12 || T.glosario.length > 20) av.push(`glossari ${T.glosario.length}`);
  const lw = strip(T.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} paraules`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T.titulo}: ${av.join(", ")}`);
  return T;
}

module.exports = { ...H, MATERIA, SAB, IEC, DIEC, OPTIMOT, LLETRA, VIQUI, tb, tema };
