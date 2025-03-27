import React, { useEffect, useState } from 'react';
import './ModalExtras.css';
import { FaStar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

function ModalExtras({ product, isOpen, onClose, onConfirm }) {
    const [selectedExtras, setSelectedExtras] = useState([]);
    
    // reseta os extras sempre que o modal é aberto
    useEffect(() => {
        if (isOpen) {
            setSelectedExtras([]);
        }
    }, [isOpen]);

    const handleExtraChange = (extra, checked) => {
        setSelectedExtras(prev => 
            checked ? [...prev, extra] : prev.filter(e => e.name !== extra.name)
        );
    };

    const subtotal = product.price + selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

    if (!isOpen) return null; 

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className='modal-product-image'>
                    <img 
                        src={new URL(`../../assets/images/${product.image}`, import.meta.url).href}
                        alt={product.name} 
                        className="modal-image"
                    />
                </div>

                <div className='modal-product-infos'>
                    <div className='container-btn-close'>
                        <button onClick={onClose} className="btn-close">X</button>
                    </div>
                    <h2>{product.name}</h2>
                    <div className="modal-tags">
                        <p className="modal-price">R$ {product.price.toFixed(2)}</p>
                        <div className="modal-tags__rating-type">
                            <p className="modal-tag-rating-star"><FaStar className="star"/>{product.rating}</p>
                            <p className="modal-tag-type">{product.type}</p>
                        </div>
                    </div>
                    <p className="modal-description">{product.description}</p>

                    <h3>Escolha os extras:</h3>
                    <div className="modal-extras">
                        {product.extras.map(extra => (
                            <div key={extra.name} className="extra-item">
                                <input
                                    type="checkbox"
                                    id={extra.name}
                                    onChange={(e) => handleExtraChange(extra, e.target.checked)}
                                />
                                <label htmlFor={extra.name}>{extra.name} - R$ {extra.price.toFixed(2)}</label>
                            </div>
                        ))}
                    </div>

                    <p className="modal-subtotal">Subtotal: R$ {subtotal.toFixed(2)}</p>

                    <div className="modal-buttons">
                        <button onClick={() => onConfirm(selectedExtras)} className="btn-confirm">
                            Adicionar ao Carrinho <MdShoppingCart className="btn-cart__icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalExtras;
