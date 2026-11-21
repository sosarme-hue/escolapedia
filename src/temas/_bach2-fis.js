// Ayudas para Física de 2º de Bachillerato (nivel libro). Reutiliza los dibujos SVG de 260 × 180
// (ficha, pasos, compara, graf, barras, rejilla…) y la figura y el mapa de 1º de Bachillerato.
const H = require("./_bach1L2");

// Vídeos elegidos con tools/videos.py (los más vistos y sin repetir ids de otros temas). El título lo pone cada tema.
const VID = {
  "cg-a": { id: "WuNMsJjva8w", canal: "Academia FísicaPRO", vistas: 179943 },
  "cg-b": { id: "CbqVhtj1Tz8", canal: "AntonioProfe", vistas: 136348 },
  "cg-c": { id: "9YYrnzX7RX4", canal: "profesor10demates", vistas: 140153 },
  "sat-a": { id: "Jovk4Fe5fEw", canal: "unicoos", vistas: 229734 },
  "sat-b": { id: "HGSQz3cHkbc", canal: "Socratica Español", vistas: 235086 },
  "sat-c": { id: "1B4f55oUopQ", canal: "unicoos", vistas: 375195 },
  "sat-d": { id: "VBMHfgb06vE", canal: "profesor10demates", vistas: 100961 },
  "ce-a": { id: "jebYYznwG4U", canal: "Profesor Particular Puebla", vistas: 936495 },
  "ce-b": { id: "MyOyBUmd9uw", canal: "Vitual", vistas: 1321414 },
  "ce-c": { id: "vPMkNtnikf8", canal: "espiral ciencias", vistas: 413858 },
};
const V = (k, titulo, busqueda) => ({ ...VID[k], titulo, megusta: 0, ...(busqueda ? { busqueda } : {}) });

const PROFE = "Saberes básicos de Física de 2º de Bachillerato (RD 243/2022, BOE-A-2022-5521)";
const PAU = { t: "Modelos y exámenes de Física de la PAU (CRUE y universidades)", url: "https://www.crue.org/" };

module.exports = { ...H, V, PROFE, PAU };
