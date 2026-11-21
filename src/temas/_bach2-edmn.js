// Ayudas de Empresa y Diseño de Modelos de Negocio (2º de Bachillerato, modalidad de Humanidades y Ciencias Sociales, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza los dibujos y la comprobación «nivel libro» de Fundamentos de Administración y Gestión (_bach2-fag.js)
// y cambia el saber básico por el de esta materia (RD 243/2022).
const F = require("./_bach2-fag");
const { txt, marco } = require("./_eso4L4");
// Lienzo de modelo de negocio (Canvas) de 9 bloques en 260×180. c: { socios, actividades, recursos, propuesta, relaciones, canales, segmentos, costes, ingresos } (textos cortos).
function lienzo(t, c) {
  const top = t ? 24 : 6, H = 172 - top, h1 = H * 0.68, h2 = H - h1 - 3, W = 49.6, x0 = 6;
  const cols = ["var(--leaf)", "var(--pen)", "var(--red)", "var(--sun)", "var(--inf)"];
  let s = t ? txt(t, 130, 12, 240, 11.5, 'font-weight="700"') : "";
  const celda = (x, y, w, h, tit, cont, col) => `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="5" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="1.5"/>`
    + txt(tit, x + w / 2, y + 8, w - 4, 7.2, `font-weight="700" fill="${col}"`) + (cont ? txt(cont, x + w / 2, y + 12 + (h - 12) / 2, w - 6, 7.2) : "");
  const X = (i) => x0 + i * W;
  s += celda(X(0), top, W - 2, h1, "Socios clave", c.socios, cols[0]);
  s += celda(X(1), top, W - 2, h1 / 2 - 1.5, "Actividades", c.actividades, cols[1]);
  s += celda(X(1), top + h1 / 2 + 1.5, W - 2, h1 / 2 - 1.5, "Recursos", c.recursos, cols[1]);
  s += celda(X(2), top, W - 2, h1, "Propuesta de valor", c.propuesta, cols[2]);
  s += celda(X(3), top, W - 2, h1 / 2 - 1.5, "Relaciones", c.relaciones, cols[3]);
  s += celda(X(3), top + h1 / 2 + 1.5, W - 2, h1 / 2 - 1.5, "Canales", c.canales, cols[3]);
  s += celda(X(4), top, W - 2, h1, "Segmentos", c.segmentos, cols[4]);
  s += celda(X(0), top + h1 + 3, 2.5 * W - 2, h2, "Estructura de costes", c.costes, "var(--muted)");
  s += celda(X(2.5), top + h1 + 3, 2.5 * W - 2, h2, "Fuentes de ingresos", c.ingresos, "var(--leaf)");
  return marco(`Lienzo de modelo de negocio: ${t || ""}. ${Object.entries(c).map(([k, v]) => `${k}: ${v}`).join("; ")}`, s);
}


const SAB = (s) => `${s} (RD 243/2022, Empresa y Diseño de Modelos de Negocio, 2º de Bachillerato: saberes básicos «A. La empresa y su entorno», «B. El modelo de negocio y de gestión», «C. Herramientas para innovar en modelos de negocio y de gestión» y «D. Estrategia empresarial y métodos de análisis de la realidad empresarial: estudio de casos y simulación»; en Cataluña, Decret 171/2022, Empresa i Disseny de Models de Negoci).`;

const CNMV = { t: "CNMV: Portal del Inversor y cuentas anuales de las sociedades cotizadas", url: "https://www.cnmv.es/" };
const RM = { t: "Registro Mercantil Central (BORME y denominaciones sociales)", url: "https://www.rmc.es/" };
const ODS = { t: "Naciones Unidas: Objetivos de Desarrollo Sostenible", url: "https://www.un.org/sustainabledevelopment/es/" };
const PACTO = { t: "Red Española del Pacto Mundial de Naciones Unidas", url: "https://www.pactomundial.org/" };
const COTEC = { t: "Fundación Cotec para la innovación: informes anuales", url: "https://cotec.es/" };
const INEID = { t: "INE: Estadística sobre actividades de I+D e innovación en las empresas", url: "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176755&menu=ultiDatos&idp=1254735576669" };
const STRAT = { t: "Strategyzer: Business Model Canvas y Value Proposition Canvas (A. Osterwalder)", url: "https://www.strategyzer.com/library/the-business-model-canvas" };
const LEAN = { t: "The Lean Startup (Eric Ries): principios del método", url: "https://theleanstartup.com/principles" };
const IDEO = { t: "IDEO U: qué es el design thinking", url: "https://www.ideou.com/pages/design-thinking" };
const IGUALDAD = { t: "Instituto de las Mujeres: planes de igualdad en las empresas", url: "https://www.igualdadenlaempresa.es/" };
const ICAC = { t: "ICAC: Instituto de Contabilidad y Auditoría de Cuentas", url: "https://www.icac.gob.es/" };

module.exports = { ...F, lienzo, SAB, CNMV, RM, ODS, PACTO, COTEC, INEID, STRAT, LEAN, IDEO, IGUALDAD, ICAC };
