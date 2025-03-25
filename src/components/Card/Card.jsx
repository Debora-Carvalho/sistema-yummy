import React, { useState } from 'react';
import './Card.css';

function Card({ product, onAddToCart, onToggleFavorite, isFavorite }) {
    const [showExtras, setShowExtras] = useState(false);
    const [selectedExtras, setSelectedExtras] = useState([]);

    const handleExtraChange = (extra, checked) => {
        setSelectedExtras(prev => 
            checked ? [...prev, extra] : prev.filter(e => e !== extra)
        );
    };

    const handleToggleExtras = () => {
        setShowExtras(prev => !prev);
    };

    const handleAddToCart = () => {
        onAddToCart(product, selectedExtras); 
    };

    return (
        <div className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <img src={product.image} alt={product.name} className="product-image"/>
            <p className="product-price">R$ {product.price.toFixed(2)}</p>

            <button onClick={handleToggleExtras}>
                    {showExtras ? 'Ocultar extras' : 'Mais detalhes'}
            </button>

            {showExtras && (
                <div className="extras">
                    {product.extras.map(extra => (
                        <div key={extra.name}>
                            <input
                                type="checkbox"
                                id={extra.name}
                                onChange={(e) => handleExtraChange(extra, e.target.checked)}
                            />
                            <label htmlFor={extra.name}>{extra.name} - R${extra.price.toFixed(2)}</label>
                        </div>
                    ))}
                </div>
            )}

            <div className='card-buttons'>
                <button onClick={handleAddToCart}>Adicionar ao carrinho</button>

                <button onClick={() => onToggleFavorite(product)}>
                    {isFavorite ? 'Desfavoritar' : 'Favoritar'}
                </button>
            </div>
        </div>
    );
}

export default Card;

