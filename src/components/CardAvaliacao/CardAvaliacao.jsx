import React from 'react';
import './CardAvaliacao.css';
import { FaStar } from 'react-icons/fa';

function CardAvaliacao({ review }) {
    return (
        <div className="card-avaliacao">
            <div className="card-avaliacao__cabecalho">
                <img 
                    src={new URL(`../../assets/images/perfil/${review.imagem}`, import.meta.url).href}
                    alt={review.nome} 
                    className="card-avaliacao__imagem"
                />

                <div className="card-avaliacao__info">
                    <h2>{review.nome}</h2>
                    <div className="card-avaliacao__estrela">
                        <FaStar />
                        <span>{review.avaliacao.toFixed(1)} / 5</span>
                    </div>
                </div>
            </div>
            <p className="card-avaliacao__descricao">{review.descricao}</p>
        </div>
    );
}

export default CardAvaliacao;
