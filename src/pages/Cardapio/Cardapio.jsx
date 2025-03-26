import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Card from '../../components/Card/Card.jsx'; 
import './Cardapio.css';
import productsData from '../../json/db-products.json'; 
import { Link } from 'react-router-dom';

function Cardapio() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <Header />
      <main className="container-cardapio">
        <h1>Cardápio</h1>
        <Link to="/favoritos">Favoritos</Link>

        <div className="cards-container">
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cardapio;

