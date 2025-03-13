import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import Cardapio from "./pages/Cardapio/Cardapio.jsx";
import Favoritos from "./pages/Favoritos/Favoritos.jsx";
import NaoEncontrada from "./pages/NaoEncontrada/NaoEncontrada.jsx";
import './App.css';

function App() {
  return (
    <>
    <Home />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;

