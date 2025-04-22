import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import './ModalResumoPedido.css';

function ModalResumoPedido({
    onClose,
    carrinho,
    total,
    formaPagamento,
    enderecoEntrega,
    observacoes
}) {
    return (
        <div className="modal-overlay">
            <div className="modal-resumo">
                <div className="modal-resumo-header">
                    <button onClick={onClose} className="btn-close__modal-resumo">X</button>
                </div>

                <h2>Resumo do Pedido</h2>

                <div className="modal-resumo-body">
                    <h3>Itens:</h3>
                    {carrinho.map((item, index) => (
                        <div key={index} className="modal-resumo-item">
                            <img src={new URL(`../../assets/images/${item.image}`, import.meta.url).href} alt={item.name} />
                            <p>{item.name} - {item.quantidade}x</p>
                            <p>Extras: {item.extras.map(extra => extra.name).join(', ')}</p>
                            <p>Subtotal: R$ {(item.quantidade * (item.price + item.extras.reduce((sum, extra) => sum + extra.price, 0))).toFixed(2)}</p>
                        </div>
                    ))}

                    <h3>Total: R$ {total.toFixed(2)}</h3>

                    <p>Forma de pagamento: {formaPagamento}</p>
                    <p>Endereço de entrega: {enderecoEntrega}</p>
                    <p>Observações: {observacoes || 'nenhuma'}</p>
                </div>

                <div className="modal-resumo-footer">
                    <button className="btn-resumo-cancelar" onClick={onClose}>Cancelar</button>
                    <button className="btn-resumo-confirmar">Confirmar pedido 
                        <MdShoppingCart className="btn-resumo-cart__icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalResumoPedido;
