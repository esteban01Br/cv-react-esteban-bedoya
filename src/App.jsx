import { useState } from "react";
import { tecnologiasIniciales } from "./cvData";
  
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

export default function App() {
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const agregarTecnologia = (nuevaTec) => {
    setTecnologias((prev) => [...prev, nuevaTec]);
  };

  return (
    <>
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      <StackTecnologias tecnologias={tecnologias} />

      <ToggleHabilidades>
        <Habilidades />
      </ToggleHabilidades>

      <Proyectos />
    </>
  );
  }
