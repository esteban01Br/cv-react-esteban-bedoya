🌟 Hoja de Vida - Esteban Bedoya

Proyecto desarrollado con React + Vite
Este repositorio contiene el código fuente de mi Hoja de Vida (HV) construida en React, organizada por componentes y ahora con funcionalidades interactivas como renderizado condicional, formularios controlados y manejo de estado global en App.jsx.

La aplicación muestra de forma clara:

Información personal

Perfil profesional

Formación académica

Experiencia laboral

Habilidades

Stack de tecnologías

Proyectos

Secciones interactivas (nuevo)

🚀 Tecnologías utilizadas

React

Vite

JavaScript (ES6+)

HTML5 & CSS3

Flexbox / Grid

Componentes funcionales

Hooks (useState, useEffect)

Renderizado condicional

Formularios controlados


📂 Estructura del proyecto

mi-cv-react/
├── src/
│   ├── components/
│   │    ├── CabeceraCV.jsx
│   │    ├── Perfil.jsx
│   │    ├── Educacion.jsx
│   │    ├── Experiencia.jsx
│   │    ├── Habilidades.jsx
│   │    ├── StackTecnologias.jsx
│   │    ├── Proyectos.jsx
│   │    ├── ToggleHabilidades.jsx       ← Nuevo
│   │    ├── FormularioTecnologia.jsx    ← Nuevo
│   ├── cvData.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js


🧑‍💻 Descripción del proyecto

Este proyecto consiste en una aplicación web donde presento mi Hoja de Vida de manera visual, organizada e interactiva.
Incluye componentes dinámicos y manejo de datos desde un archivo cvData.js, manteniendo la lógica principal en App.jsx.

Dentro de la aplicación podrás encontrar:

📸 Foto de perfil

👤 Información personal

📝 Perfil profesional

🎓 Formación académica

💼 Experiencia laboral

🧩 Habilidades (técnicas y blandas)

🧪 Stack de tecnologías

📁 Proyectos

🔘 Mostrar/Ocultar habilidades (ToggleHabilidades)

➕ Formulario para agregar nuevas tecnologías al stack

🆕 Funcionalidades nuevas (requeridas por la actividad)
✔ ToggleHabilidades.jsx

Muestra u oculta el componente Habilidades.

Usa useState y renderizado condicional.

✔ FormularioTecnologia.jsx

Formulario controlado para agregar nuevas tecnologías al stack.

Usa useState, onChange, onSubmit y preventDefault().

Envía la nueva tecnología hacia el estado global de App.jsx.

✔ Manejo del estado global en App.jsx

Estado inicial importado desde cvData.js.

Función global agregarTecnologia() pasada como prop.

Renderizado dinámico del stack actualizado.

🧠 Uso de props en este proyecto
🔹 Paso de funciones como props

App envía funciones a componentes hijos:

<FormularioTecnologia agregarTecnologia={agregarTecnologia} />

🔹 Paso de datos como props
<StackTecnologias tecnologias={tecnologias} />

🔹 Renderizado condicional por props

<ToggleHabilidades>
  <Habilidades />
</ToggleHabilidades>

📌 Autoevaluación (respuestas)

¿Ventaja de mantener el estado en App.jsx?
Permite que varios componentes compartan datos sin duplicarlos.

¿Cómo evité que el formulario recargara la página?
Con e.preventDefault() en el onSubmit.

¿Por qué setTecnologias([...prev, nueva]) y no push()?
Porque push() NO crea un nuevo estado, React no lo detectaría.

¿Cómo adaptaría FormularioTecnologia para otros datos?
Cambiando los inputs y la estructura del objeto (idiomas, proyectos, cursos, etc.).

¿Qué pasa si el estado se maneja en el componente hijo?
El padre pierde control, se rompe el flujo de datos y la app se vuelve difícil de escalar.

🛠️ Instalación y ejecución

Clonar el repositorio:

git clone https://github.com/esteban01Br/cv-react-esteban-bedoya.git

Instalar dependencias:
npm install

ejecutar
npm run dev


Abrir en:
http://localhost:5173/

📧 Contacto

Esteban Bedoya
📍 Colombia
🔗 GitHub: https://github.com/esteban01Br

