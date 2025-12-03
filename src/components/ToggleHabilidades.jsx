import { useState } from "react";

export default function ToggleHabilidades({ children }) {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggle}>
        {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {visible && <div>{children}</div>}
    </div>
  );
}
