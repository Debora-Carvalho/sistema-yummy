import React, { useEffect, useState } from 'react';
import './ModalExtras.css';

function ModalExtras({ product, isOpen, onClose, onConfirm }) {
    const [selectedExtras, setSelectedExtras] = useState([]);
    
    // Reseta os extras sempre que o modal é aberto
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
                <h2>{product.name}</h2>
                <img 
                    src={new URL(`../../assets/images/${product.image}`, import.meta.url).href}
                    alt={product.name} 
                    className="modal-image"
                />
                <p className="modal-price">Preço base: R$ {product.price.toFixed(2)}</p>

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
                    <button onClick={onClose} className="btn-cancel">Cancelar</button>
                    <button onClick={() => onConfirm(selectedExtras)} className="btn-confirm">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalExtras;
