import React from "react";

function Educacion() {
  const formaciones = [
    { institucion: "SENA", curso: "Tecnólogo en Análisis y Desarrollo de Software", año: "2025" },
    { institucion: "Platzi", curso: "Curso de React desde Cero", año: "2024" },
    { institucion: "Google", curso: "Fundamentos de UX/UI Design", año: "2023" },
    { institucion: "Udemy", curso: "JavaScript Moderno ES6+", año: "2022" },
  ];

  return (
    <section className="section">
      <h1>Educación y Formación Complementaria</h1>
      <ul>
        {formaciones.map((f, index) => (
          <li key={index}>
            <strong>{f.curso}</strong> - {f.institucion} ({f.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;

// Commit sugerido: feat: componente Educacion con formación complementaria
