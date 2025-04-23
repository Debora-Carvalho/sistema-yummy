import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Card from '../../components/Card/Card.jsx'; 
import FiltroNav from '../../components/FiltroNav/FiltroNav.jsx';
import './Cardapio.css';
import productsData from '../../json/db-products.json'; 
import { Link } from 'react-router-dom';
import { useFavoritoContext } from '../../contexts/Favorito.jsx';

function Cardapio() {
  const { favorito } = useFavoritoContext();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  useEffect(() => {
    let filtered = products;
    if (filter === "Favoritos") {
      filtered = favorito;
    } else if (filter === "Salgados") {
      filtered = products.filter(product => product.type === "Salgado");
    } else if (filter === "Doces") {
      filtered = products.filter(product => product.type === "Doce");
    } else if (filter === "Bebidas") {
      filtered = products.filter(product => product.type === "Bebida");
    }
    setFilteredProducts(filtered);
  }, [filter, products, favorito]);

  return (
    <>
      <Header />
      <main className="container-cardapio">
        <h1>Cardápio</h1>
        
        {/* Barra de filtros */}
        <FiltroNav onFilterChange={setFilter} />

        {/* <Link to="/favoritos">Favoritos</Link> */}

        <div className="cards-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <p className='cards-container__nao-encontrado'>Nenhum produto encontrado.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cardapio;
