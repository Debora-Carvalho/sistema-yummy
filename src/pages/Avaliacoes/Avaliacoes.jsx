import React from 'react';
import '../../pages/Avaliacoes/Avaliacoes.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Avaliacoes() {
    return(
        <>
            <Header />
            <main className='container-avaliacoes'>
                <h1>Avaliações</h1>

                <div className="cards-avaliacoes">
                    
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Avaliacoes;