import React from "react";

function Experiencia() {
  const experiencias = [
    {
      cargo: "Desarrollador Front-End",
      empresa: "TechNova",
      año: "2024",
      descripcion: "Diseño e implementación de interfaces en React para aplicaciones empresariales."
    },
    {
      cargo: "Practicante en Desarrollo Web",
      empresa: "CodeFactory",
      año: "2023",
      descripcion: "Apoyo en desarrollo de componentes y mantenimiento de sitios web."
    },
    {
      cargo: "Freelancer Web",
      empresa: "Autónomo",
      año: "2022",
      descripcion: "Creación de sitios web personales con HTML, CSS y JavaScript."
    },
    {
      cargo: "Proyecto Académico",
      empresa: "SENA",
      año: "2021",
      descripcion: "Desarrollo de aplicación para gestión de tareas usando React y Node.js."
    },
  ];

  return (
    <section className="section">
      <h2>Experiencia Laboral</h2>
      {experiencias.map((exp, index) => (
        <div key={index}>
          <h3>{exp.cargo} - {exp.empresa} ({exp.año})</h3>
          <p>{exp.descripcion}</p>
        </div>
      ))}
      <hr />
    </section>
  );
}

export default Experiencia;

// Commit sugerido: feat: componente Experiencia con 4 cargos definidos
