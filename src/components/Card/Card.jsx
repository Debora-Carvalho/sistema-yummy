import React, { useState } from 'react';
import './Card.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { useFavoritoContext } from '../../contexts/Favorito.jsx';
import ModalExtras from '../ModalExtras/ModalExtras.jsx'; 

function Card({ product, onAddToCart }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === product.id);
    const icone = ehFavorito ? <FaHeart color="red" /> : <FaRegHeart color="black" />;

    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = (selectedExtras) => {
        onAddToCart(product, selectedExtras);
        setShowModal(false); 
    };

    return (
        <>
            {/* CARD PRINCIPAL */}
            <div className="product-card">
                <div className="product-card__header">
                    <h3 className="product-name">{product.name}</h3>
                    <button onClick={() => adicionarFavorito(product)} className="btn-favorito">
                        {icone}
                    </button>
                </div>

                <img 
                    src={new URL(`../../assets/images/${product.image}`, import.meta.url).href}
                    alt={product.name} 
                    className="product-image"
                />

                <div className="product-card__buy">
                    <p className="product-price">R$ {product.price.toFixed(2)}</p>
                    <button onClick={() => onAddToCart(product, [])} className="btn-cart">
                        Adicionar <MdShoppingCart className="btn-cart__icon" />
                    </button>
                </div>

                {/* Botão para abrir o modal */}
                <button onClick={() => setShowModal(true)} className="btn-extras">
                    Extras
                </button>
            </div>

            {/* MODAL DE PERSONALIZAÇÃO */}
            <ModalExtras 
                product={product} 
                isOpen={showModal} 
                onClose={() => setShowModal(false)}
                onConfirm={handleAddToCart}
            />
        </>
    );
}

export default Card;
