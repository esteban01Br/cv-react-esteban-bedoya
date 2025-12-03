import { useState } from "react";

export default function FormularioTecnologia({ agregarTecnologia }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página

    if (!nombre.trim() || !tipo.trim()) return;

    agregarTecnologia({ nombre, tipo });

    setNombre("");
    setTipo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Tecnología</h3>

      <input
        type="text"
        placeholder="Nombre de la tecnología"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Seleccionar tipo</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="otros">Otros</option>
      </select>

      <button type="submit">Agregar</button>
    </form>
  );
}
