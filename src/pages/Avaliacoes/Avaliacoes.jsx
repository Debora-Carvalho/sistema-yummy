import React, { useEffect, useState } from 'react';
import '../../pages/Avaliacoes/Avaliacoes.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import CardAvaliacao from '../../components/CardAvaliacao/CardAvaliacao.jsx';
import reviewsData from '../../json/db-reviews.json';

function Avaliacoes() {
    const [avaliacoes, setAvaliacoes] = useState([]);

    useEffect(() => {
        setAvaliacoes(reviewsData);
    }, []);

    return (
        <>
            <Header />
            <main className='container-avaliacoes'>
                <h1>Avaliações</h1>

                <div className="cards-avaliacoes">
                    {avaliacoes.map((avaliacao) => (
                        <CardAvaliacao key={avaliacao.id} review={avaliacao} />
                    ))}
                </div>

                <p className='cards-avaliacoes__mais'>Carregar mais avaliações...</p>
            </main>
            <Footer />
        </>
    );
}

export default Avaliacoes;
