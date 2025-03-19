import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './NaoEncontrada.css';

function NaoEncontrada() {
    return (
        <>
        <Header />
        <main className='container-naoEncontrada'>
          <h1>Ops!</h1>
          <p>O conteúdo que você está procurando não foi encontrado</p>
        </main>
        <Footer />
        </>
    );
}

export default NaoEncontrada;