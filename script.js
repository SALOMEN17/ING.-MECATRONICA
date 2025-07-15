const contenedor = document.getElementById("contenedor-malla");

const semestres = {};

materias.forEach(materia => {
  if (!semestres[materia.semestre]) {
    semestres[materia.semestre] = [];
  }
  semestres[materia.semestre].push(materia);
});

for (let i = 1; i <= 10; i++) {
  const columna = document.createElement("div");
  columna.className = "semestre";
  const titulo = document.createElement("h2");
  titulo.textContent = `${i}° Semestre`;
  columna.appendChild(titulo);

  const listaMaterias = semestres[i] || [];
  listaMaterias.forEach(materia => {
    const boton = document.createElement("div");
    boton.className = "materia";
    boton.textContent = `${materia.nombre} (${materia.creditos} créditos)`;

    boton.addEventListener("click", () => {
      if (!boton.classList.contains("vista")) {
        const cumplidos = materia.prerequisitos.every(req => {
          return document.querySelector(`.materia.vista[data-codigo="${req}"]`);
        });
        if (cumplidos) {
          boton.classList.add("vista");
          boton.setAttribute("data-codigo", materia.codigo);
        } else {
          alert("Primero debes ver los prerrequisitos.");
        }
      }
    });

    boton.setAttribute("data-codigo", materia.codigo);
    columna.appendChild(boton);
  });

  contenedor.appendChild(columna);
}
