CV React – Esteban Bedoya

Proyecto desarrollado en React utilizando Vite, como parte del ejercicio práctico solicitado para reforzar el uso de renderizado condicional, renderizado de listas y buenas prácticas con Git/GitHub mediante commits organizados.

El proyecto incluye:

Componente CabeceraCV.jsx con datos personales y presentación.

Componente Perfil.jsx con una descripción profesional resumida.

Componente Experiencia.jsx con 10 cargos y proyectos renderizados desde un arreglo.

Componente Educacion.jsx que muestra formación académica y complementaria de forma dinámica.

Componente StackTecnologias.jsx con etiquetas de tecnologías y colores condicionales para cada tipo.

Navegación simple y secciones visualmente organizadas.

🚀 Cómo ejecutar este proyecto

Clonar el repositorio:

git clone https://github.com/esteban01Br/cv-react-esteban-bedoya.git

cd cv-react-esteban-bedoya
npm install


npm run dev
Visitar la aplicación en el navegador:
http://localhost:5173/

📌 Uso de Props en los Componentes

En este proyecto se utilizan props para hacer que los componentes sean reutilizables, dinámicos y fáciles de mantener. Las props permiten enviar información desde un componente padre hacia un componente hijo, evitando código repetido y organizando mejor la estructura del CV.

✔️ ¿Cómo se usan las props en este proyecto?

1. Componente Experiencia.jsx

Las experiencias se almacenan como un arreglo en el componente padre.
Cada ítem se envía mediante props:
<Experiencia
  cargo={item.cargo}
  empresa={item.empresa}
  año={item.año}
  descripcion={item.descripcion}
/>
Esto permite renderizar automáticamente múltiples experiencias desde un solo componente.

2. Componente Educacion.jsx

La educación también se pasa como props:
<Educacion
  institucion={item.institucion}
  titulo={item.titulo}
  año={item.año}
/>
Gracias a esto, el componente es totalmente reutilizable para cualquier tipo de formación académica.

3. Componente StackTecnologias.jsx

Las props permiten identificar el tipo de tecnología para aplicar estilos de forma condicional:
<Tecnologia nombre="React" tipo="frontend" />
<Tecnologia nombre="Node.js" tipo="backend" />
Dentro del componente se usa tipo para asignar colores distintos según la categoría, mostrando un claro ejemplo de renderizado condicional con props.

🎯 Beneficios de usar props

Componentes más limpios, reutilizables y escalables.

Datos centralizados en arreglos, evitando duplicación.

Fácil mantenimiento: agregar nueva información es tan simple como añadir un objeto al arreglo.

Comportamiento dinámico mediante renderizado condiciona

📚 Historial de Commits Relevantes

feat: componente CabeceraCV con datos personales actualizados  
feat: componente Perfil con descripción personalizada  
feat: componente Experiencia dinámico con 10 cargos definidos  
feat: componente Educación dinámico con formación complementaria  
feat: componente StackTecnologías dinámico y con renderizado condicional  
docs: actualización del README con explicación del uso de props  


