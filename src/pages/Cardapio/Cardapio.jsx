import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Cardapio.css';

function Cardapio() {
  return (
    <>
    <Header />
    <main className='container-cardapio'>
      <h1>Cardápio</h1>
    </main>
    <Footer />
    </>
  );
}

export default Cardapio;