import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

// Componente Home personalizado
function Home() {
  return (
    <div>
      <h1>Bienvenidos a la Página de Inicio</h1>
      <p>
        Esta es una aplicación de ejemplo que demuestra cómo usar React Router con una estructura de layout.
      </p>
      <img src={logo} alt="Logo de React" style={{ width: '150px', marginTop: '20px' }} />
    </div>
  );
}

// Componente About personalizado
function About() {
  return (
    <div>
      <h2>Acerca de Nosotros</h2>
      <p>
        Somos un equipo dedicado a construir aplicaciones web modernas utilizando tecnologías como React, Node.js y más.
      </p>
      <ul>
        <li>Frontend con React</li>
        <li>Backend con Node.js</li>
        <li>Diseño responsive</li>
        <li>Buenas prácticas de desarrollo</li>
      </ul>
    </div>
  );
}

// Componente principal App
function App() {
  return (
    <BrowserRouter basename="/desafio4">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
