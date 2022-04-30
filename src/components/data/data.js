const randomNum =()=>Math.floor(Math.random() * 200);

export const dummy = [
  { id: 1, parameter: "Debit", range: randomNum(), unit: "01", satuan: "m3/s" },
  { id: 2, parameter: "TSS", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 3, parameter: "pH", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 4, parameter: "NO3N", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 5, parameter: "PO4", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 6, parameter: "NH3N", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 7, parameter: "TDS", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 8, parameter: "BOD 5", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 9, parameter: "COD", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 10, parameter: "Fe 5", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 11, parameter: "Cu", range: randomNum(), unit: "01", satuan: "mg/L" },
  { id: 12, parameter: "Cr", range: randomNum(), unit: "01", satuan: "mg/L" },
];

