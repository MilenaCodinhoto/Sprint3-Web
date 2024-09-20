import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Componente principal
import Sobre from './pages/Sobre'; // Página Sobre
import Circuitos from './pages/Circuitos'; // Página Circuitos
import Desenvolvedores from './pages/Desenvolvedores'; // Página Desenvolvedores
import Login from './pages/Login'; // Página de Login

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/circuitos" element={<Circuitos />} />
        <Route path="/desenvolvedores" element={<Desenvolvedores />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
