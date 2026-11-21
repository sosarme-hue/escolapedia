// Ayudas de Empresa y Diseño de Modelos de Negocio (2º de Bachillerato, modalidad de Humanidades y Ciencias Sociales, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza los dibujos y la comprobación «nivel libro» de Fundamentos de Administración y Gestión (_bach2-fag.js)
// y cambia el saber básico por el de esta materia (RD 243/2022).
const F = require("./_bach2-fag");

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

module.exports = { ...F, SAB, CNMV, RM, ODS, PACTO, COTEC, INEID, STRAT, LEAN, IDEO, IGUALDAD, ICAC };
