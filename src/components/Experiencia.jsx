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
    {
      cargo: "Proyecto Personal",
      empresa: "GitHub",
      año: "2024",
      descripcion: "Creación de un portafolio profesional usando React + Vite."
    },
    {
      cargo: "Desarrollo de Landing Page",
      empresa: "MarketingPlus",
      año: "2023",
      descripcion: "Implementación de landing pages optimizadas para conversión."
    },
    {
      cargo: "Maquetador Web",
      empresa: "PixelArt",
      año: "2022",
      descripcion: "Creación de interfaces responsivas con CSS Grid y Flexbox."
    },
    {
      cargo: "Proyecto: To-Do App",
      empresa: "Proyecto Personal",
      año: "2023",
      descripcion: "Aplicación de tareas con filtros, React Hooks y persistencia en localStorage."
    },
    {
      cargo: "Asistente de Programación",
      empresa: "Academia CodeKids",
      año: "2021",
      descripcion: "Acompañamiento a estudiantes en proyectos básicos de programación."
    },
    {
      cargo: "Proyecto de Consumo de API",
      empresa: "Autónomo",
      año: "2024",
      descripcion: "Desarrollo de una app para consultar clima usando API pública OpenWeather."
    }
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