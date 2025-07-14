const malla = document.getElementById("malla");

const estructura = {
  "Semestre 1": [
    { codigo: "CBI111", nombre: "Biología Celular" },
    { codigo: "MAT110", nombre: "Introducción a Matemática Aplicada" },
    { codigo: "MYF101", nombre: "Morfología y Función I" },
    { codigo: "LIC001", nombre: "Fundamentos del Actuar Comunitario" },
    { codigo: "ENF102", nombre: "Introducción a los Estudios de Enfermería" },
    { codigo: "ENF110", nombre: "Primeros Auxilios" }
  ],
  "Semestre 2": [
    { codigo: "CBI202", nombre: "Histoembriología", prereq: ["CBI111", "MYF101"] },
    { codigo: "ENF201", nombre: "Enfermería en el Curso de Vida Humano", prereq: ["ENF102", "ENF110"] },
    { codigo: "LCE001", nombre: "Inglés I" },
    { codigo: "CQU203", nombre: "Fundamentos de Química y Biología", prereq: ["MAT110"] },
    { codigo: "LIC002", nombre: "Fund. Éticos del Actuar Comunitario", prereq: ["LIC001"] }
  ],
  "Semestre 3": [
    { codigo: "AES519", nombre: "Bioestadística", prereq: ["MAT110"] },
    { codigo: "MYF302", nombre: "Fisiología General", prereq: ["MYF101", "CBI202"] },
    { codigo: "ENF301", nombre: "Proceso de Atención en Enfermería I", prereq: ["ENF201", "MYF101"] },
    { codigo: "LCE002", nombre: "Inglés II", prereq: ["LCE001"] },
    { codigo: "CBI302", nombre: "Microbiología y Parasitología", prereq: ["CBI111", "CBI202"] },
    { codigo: "LIC003", nombre: "Salud Pública y Políticas Públicas", prereq: ["LIC002"] }
  ],
  "Semestre 4": [
    { codigo: "ENF302", nombre: "Psicología para el Ejercicio de la Enfermería", prereq: ["ENF301"] },
    { codigo: "ENF401", nombre: "Fisiopatología", prereq: ["MYF302"] },
    { codigo: "ENF402", nombre: "Proceso de Atención en Enfermería II", prereq: ["ENF301", "MYF302"] },
    { codigo: "ENF404", nombre: "Farmacología", prereq: ["CQU203", "MAT110", "MYF302"] },
    { codigo: "ENF410", nombre: "Fund. de Enfermería en Salud Comunitaria", prereq: ["LIC001", "ENF102", "ENF201", "ENF301"] },
    { codigo: "LIC004", nombre: "Metodologías Participativas e Intervención Comunitaria", prereq: ["LIC003"] }
  ],
  "Semestre 5": [
    { codigo: "ENF505", nombre: "Gestión y Administración en Enfermería I", prereq: ["AES519", "ENF402"] },
    { codigo: "ENF506", nombre: "Educación para la Salud", prereq: ["ENF302"] },
    { codigo: "ENF500", nombre: "Práctica Integrada I", prereq: ["ENF302", "ENF401", "ENF402", "ENF404", "LCE002", "ENF410", "LIC004"] },
    { codigo: "ENF501", nombre: "Salud y Morbilidad del Adulto I", prereq: ["ENF401", "ENF402", "ENF404"] },
    { codigo: "ENF504", nombre: "Epidemiología", prereq: ["LIC004", "AES519"] },
    { codigo: "LIC005", nombre: "Trabajo Intercomunitario e Interdisciplinario I", prereq: ["LIC004"] }
  ],
  "Semestre 6": [
    { codigo: "ENF600", nombre: "Práctica Integrada II", prereq: ["ENF500", "ENF501", "ENF505", "ENF504", "ENF506", "LIC005", "ENF410"] },
    { codigo: "ENF602", nombre: "Salud y Morbilidad del Adulto II", prereq: ["ENF501", "ENF500"] },
    { codigo: "ENF605", nombre: "Gestión y Administración en Enfermería II", prereq: ["ENF505"] },
    { codigo: "ENF606", nombre: "Bioética", prereq: ["ENF500"] },
    { codigo: "ENF701", nombre: "Salud del Adulto Mayor", prereq: ["ENF501"] },
    { codigo: "LIC006", nombre: "Trabajo Intercomunitario e Interdisciplinario II", prereq: ["LIC005"] }
  ],
  "Semestre 7": [
    { codigo: "ENF603", nombre: "Enfermería en Salud Mental", prereq: ["ENF602", "ENF302"] },
    { codigo: "ENF700", nombre: "Práctica Integrada III", prereq: ["ENF600", "ENF602", "ENF605", "ENF506", "ENF606", "ENF701", "ENF410"] },
    { codigo: "ENF705", nombre: "Metodología de la Investigación", prereq: ["ENF606", "ENF605", "ENF602", "ENF600", "ENF504", "LCE001", "LCE002"] },
    { codigo: "ENF804", nombre: "Salud del Niño y Adolescente I", prereq: ["ENF602", "ENF506", "ENF600"] },
    { codigo: "ENF805", nombre: "Enfermería en Urgencias", prereq: ["ENF602", "ENF600", "ENF701"] }
  ],
  "Semestre 8": [
    { codigo: "ENF703", nombre: "Infecciones y Atención de Salud", prereq: ["ENF602", "ENF600"] },
    { codigo: "ENF800", nombre: "Práctica Integrada IV", prereq: ["ENF603", "ENF700", "ENF804", "ENF805"] },
    { codigo: "ENF801", nombre: "Cuidados Paliativos Integrales", prereq: ["ENF602", "ENF804", "ENF700"] },
    { codigo: "ENF802", nombre: "Salud del Niño y Adolescente II", prereq: ["ENF804", "ENF700"] },
    { codigo: "ENF803", nombre: "Salud Ocupacional y Ambiental", prereq: ["ENF602", "ENF504"] },
    { codigo: "ENF904", nombre: "Seminario de Grado", prereq: ["ENF805", "ENF804", "ENF705", "ENF700", "ENF606"] }
  ],
  "Semestre 9": [
    { codigo: "ENF906", nombre: "Soporte Vital Avanzado para Personal", prereq: ["ENF904", "ENF803", "ENF802", "ENF801", "ENF800", "ENF703"] },
    { codigo: "ENF901", nombre: "Internado I", prereq: ["ENF904", "ENF803", "ENF802", "ENF801", "ENF800", "ENF703"] }
  ],
  "Semestre 10": [
    { codigo: "ENF902", nombre: "Internado II", prereq: ["ENF904", "ENF803", "ENF802", "ENF801", "ENF800", "ENF703"] },
    { codigo: "ENF903", nombre: "Preparación Examen de Título", prereq: ["ENF904", "ENF803", "ENF802", "ENF801", "ENF800", "ENF703", "ENF906"] }
  ]
};

// resto del script igual (con localStorage y funciones de clic)
const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

for (const [semestre, ramos] of Object.entries(estructura)) {
  const col = document.createElement("div");
  col.className = "semestre";
  col.innerHTML = `<h2>${semestre}</h2>`;

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.codigo;
    div.textContent = ramo.nombre;
    col.appendChild(div);
  });

  malla.appendChild(col);
}

function actualizarEstados() {
  for (const ramos of Object.values(estructura)) {
    ramos.forEach(ramo => {
      const el = document.getElementById(ramo.codigo);
      el.classList.remove("aprobado", "no-cursable");

      const aprobado = estado[ramo.codigo];

      if (aprobado) {
        el.classList.add("aprobado");
      } else if (ramo.prereq && !ramo.prereq.every(c => estado[c])) {
        el.classList.add("no-cursable");
      }
    });
  }
}

document.querySelectorAll(".ramo").forEach(el => {
  el.addEventListener("click", () => {
    const codigo = el.id;
    const prereq = Object.values(estructura).flat().find(r => r.codigo === codigo)?.prereq;

    if (prereq && !prereq.every(p => estado[p])) return;

    estado[codigo] = !estado[codigo];
    localStorage.setItem("estadoRamos", JSON.stringify(estado));
    actualizarEstados();
  });
});

actualizarEstados();
