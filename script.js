function crearTarjeta(materia) {
  const div = document.createElement("div");
  div.classList.add("materia");
  div.textContent = `${materia.nombre} (${materia.creditos})`;
  div.dataset.nombre = materia.nombre;
  if (materia.prereq) {
    div.classList.add("bloqueada");
  }
  div.addEventListener("click", () => marcarVista(div, materia));
  return div;
}

function marcarVista(div, materia) {
  if (div.classList.contains("bloqueada")) return;

  div.classList.toggle("vista");

  const vistas = document.querySelectorAll(".materia.vista");
  const vistasNombres = [...vistas].map(el => el.dataset.nombre);

  document.querySelectorAll(".materia.bloqueada").forEach(bloq => {
    const m = materias.find(mat => mat.nombre === bloq.dataset.nombre);
    if (m.prereq.every(p => vistasNombres.includes(p))) {
      bloq.classList.remove("bloqueada");
    }
  });
}

function reiniciarMalla() {
  document.querySelectorAll(".materia").forEach(div => {
    div.classList.remove("vista");
    const m = materias.find(mat => mat.nombre === div.dataset.nombre);
    if (m.prereq) div.classList.add("bloqueada");
    else div.classList.remove("bloqueada");
  });
}

function mostrarMalla() {
  const container = document.getElementById("malla");
  for (let i = 1; i <= 10; i++) {
    const semestreDiv = document.createElement("div");
    semestreDiv.classList.add("semestre");
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${i}`;
    semestreDiv.appendChild(titulo);

    const materiasSemestre = materias.filter(m => m.semestre === i);
    materiasSemestre.forEach(m => {
      const tarjeta = crearTarjeta(m);
      semestreDiv.appendChild(tarjeta);
    });

    container.appendChild(semestreDiv);
  }
}

document.addEventListener("DOMContentLoaded", mostrarMalla);
