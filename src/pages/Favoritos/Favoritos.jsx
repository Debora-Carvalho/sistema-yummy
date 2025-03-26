import React from "react";
import './Favoritos.css';
import Card from '../../components/Card/Card.jsx'; 
import { useFavoritoContext } from '../../contexts/Favorito.jsx';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Header />
      <main className="container-favoritos">
        <h1>Página de Favoritos</h1>
        <div className="cards-container">
          {favorito.length === 0 ? (
            <p>Não há produtos favoritados.</p>
          ) : (
            favorito.map((fav) => {
              return <Card product={fav} key={fav.id} />;
            })
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Favoritos;  
