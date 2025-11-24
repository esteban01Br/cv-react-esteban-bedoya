import React from "react";

function StackTecnologias() {
  // Lista de tecnologías con su nivel o tipo
  const tecnologias = [
    { nombre: "JavaScript", tipo: "principal" },
    { nombre: "React", tipo: "principal" },
    { nombre: "Node.js", tipo: "backend" },
    { nombre: "HTML", tipo: "base" },
    { nombre: "CSS", tipo: "base" },
    { nombre: "Git", tipo: "herramienta" },
    { nombre: "GitHub", tipo: "herramienta" },
    { nombre: "Vite", tipo: "herramienta" },
    { nombre: "Tailwind CSS", tipo: "estilos" },
    { nombre: "MongoDB", tipo: "baseDatos" },
  ];

  // Función de color condicional
  const getColor = (tipo) => {
    switch (tipo) {
      case "principal":
        return "#4CAF50"; // verde
      case "backend":
        return "#2196F3"; // azul
      case "base":
        return "#FF9800"; // naranja
      case "herramienta":
        return "#9C27B0"; // morado
      case "estilos":
        return "#E91E63"; // rosado
      case "baseDatos":
        return "#3F51B5"; // azul oscuro
      default:
        return "#607D8B"; // gris
    }
  };

  return (
    <section className="section">
      <h2>Stack de Tecnologías</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {tecnologias.map((tec, index) => (
          <span
            key={index}
            style={{
              padding: "8px 14px",
              borderRadius: "12px",
              backgroundColor: getColor(tec.tipo),
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {tec.nombre}
          </span>
        ))}
      </div>

      <hr />
    </section>
  );
}

export default StackTecnologias;
