import React, { useState } from "react";
import "./FiltroNav.css";

function FiltroNav({ onFilterChange }) {
    const [filtroSelecionado, setFiltroSelecionado] = useState("Todos");

    const filtros = ["Todos", "Favoritos", "Salgados", "Doces", "Bebidas"];

    const handleFiltroClick = (filtro) => {
        setFiltroSelecionado(filtro);
        onFilterChange(filtro);
    };

    return (
        <nav className="filtro-nav">
            {filtros.map((filtro) => (
                <button 
                    key={filtro} 
                    className={filtro === filtroSelecionado ? "btn-filtro ativo" : "btn-filtro"} 
                    onClick={() => handleFiltroClick(filtro)}
                >
                    {filtro}
                </button>
            ))}
        </nav>
    );
}

export default FiltroNav;
