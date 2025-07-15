const materias = [
  {
    nombre: "Introducción a la Ingeniería",
    codigo: "ING-100",
    semestre: 1,
    creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Cálculo Diferencial",
    codigo: "MAT-110",
    semestre: 1,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Álgebra Lineal",
    codigo: "MAT-123",
    semestre: 1,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Matemáticas Discretas",
    codigo: "MAT-122",
    semestre: 1,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Cálculo I",
    codigo: "MAT-132",
    semestre: 2,
    creditos: 4,
    prerequisitos: ["MAT-110"]
  },
  {
    nombre: "Investigación Operativa I",
    codigo: "MAT-251",
    semestre: 2,
    creditos: 3,
    prerequisitos: ["MAT-123"]
  }
];
