import React from "react";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

function App() {
  // =============================
  // 1. DATOS DEFINIDOS EN APP.jsx
  // =============================
  const datosPersonales = {
    nombre: "Esteban Bedoya",
    cargo: "Desarrollador Frontend",
    ciudad: "Medellín, Colombia",
    contacto: "esteban@example.com"
  };

  const resumen = "Desarrollador frontend con experiencia en React, JavaScript y diseño de interfaces modernas.";

  const experiencias = [
    { cargo: "Front-End Developer", empresa: "TechNova", periodo: "2024" },
    { cargo: "Practicante Desarrollador", empresa: "CodeFactory", periodo: "2023" },
    { cargo: "Freelancer Web", empresa: "Autónomo", periodo: "2022" },
  ];

  const estudios = [
    { institucion: "SENA", curso: "Tecnólogo en ADSO", año: "2025" },
    { institucion: "Platzi", curso: "Curso de React", año: "2024" },
    { institucion: "Google", curso: "UX/UI Fundamentals", año: "2023" }
  ];

  return (
    <div className="container">
      {/* 2. Envías props a cada componente */}
      <CabeceraCV 
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={resumen} />

      <Experiencia experiencias={experiencias} />

      <Educacion estudios={estudios} />
    </div>
  );
}

export default App;

// ajustes de componentes cv
// segundo commit test

