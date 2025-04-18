import React, { useEffect, useState } from 'react'; 
import './ModalExtras.css';
import { FaStar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

function ModalExtras({ product, isOpen, onClose, onConfirm }) {
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [showMessage, setShowMessage] = useState(false);
    
    // Reseta os extras e a quantidade sempre que o modal é aberto
    useEffect(() => {
        if (isOpen) {
            setSelectedExtras([]);
            setQuantity(1);
        }
    }, [isOpen]);

    const handleExtraChange = (extra) => {
        setSelectedExtras(prev =>
            prev.some(e => e.name === extra.name)
                ? prev.filter(e => e.name !== extra.name)  // Remove extra se já estiver selecionado
                : [...prev, extra]  // Adiciona extra se não estiver
        );
    };

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
        showTemporaryMessage(`+1 ${product.name}`);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
            showTemporaryMessage(`-1 ${product.name}`);
        }
    };

    const showTemporaryMessage = (message) => {
        setShowMessage(message);
        setTimeout(() => setShowMessage(false), 1500);
    };

    const subtotal = (product.price + selectedExtras.reduce((sum, extra) => sum + extra.price, 0)) * quantity;

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
                            <button
                                key={extra.name}
                                className={`extra-button ${selectedExtras.some(e => e.name === extra.name) ? 'selected' : ''}`}
                                onClick={() => handleExtraChange(extra)}
                            >
                                {extra.name} - R$ {extra.price.toFixed(2)}
                            </button>
                        ))}
                    </div>

                    <div className="modal-buttons">
                        <div className="quantity-controls">
                            <button onClick={decreaseQuantity} className="btn-quantity">-</button>
                            <input type="text" value={quantity} readOnly className="quantity-input" />
                            <button onClick={increaseQuantity} className="btn-quantity">+</button>
                        </div>
                        <button onClick={() => onConfirm(selectedExtras, quantity)} className="btn-confirm">
                            <p className="modal-subtotal"> R$ {subtotal.toFixed(2)}</p>
                            <p className="btn-confirm-div">|</p>
                            Adicionar <MdShoppingCart className="btn-cart__icon" />
                        </button>
                    </div>

                    {showMessage && <div className="message-toast">{showMessage}</div>}
                </div>
            </div>
        </div>
    );
}

export default ModalExtras;
