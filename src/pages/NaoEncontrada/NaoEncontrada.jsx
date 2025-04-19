import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './NaoEncontrada.css';
import ImgPaginaNaoEncontrada from '../../assets/images/pagina-nao-encontrada.svg'; 

function NaoEncontrada() {
    return (
        <>
        <Header />
        <main className='container-nao-encontrada'>
          <img src={ImgPaginaNaoEncontrada} alt="Página não encontrada" />
          <p className='container-nao-encontrada__texto'>
            O conteúdo que você está procurando não foi encontrado
          </p>
        </main>
        <Footer />
        </>
    );
}

export default NaoEncontrada;