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
                <div className="modal-header">
                    <button onClick={onClose} className="btn-close">X</button>
                </div>

                <h2>Resumo do Pedido</h2>

                <div className="modal-body">
                    <h3>Itens:</h3>
                    {carrinho.map((item, index) => (
                        <div key={index} className="modal-item">
                            <img src={new URL(`../../assets/images/${item.image}`, import.meta.url).href} alt={item.name} />
                            <p>{item.name} - {item.quantidade}x</p>
                            <p>Extras: {item.extras.map(extra => extra.name).join(', ')}</p>
                            <p>Subtotal: R$ {(item.quantidade * (item.price + item.extras.reduce((sum, extra) => sum + extra.price, 0))).toFixed(2)}</p>
                        </div>
                    ))}

                    <h3>Total: R$ {total.toFixed(2)}</h3>

                    <h3>Forma de Pagamento: {formaPagamento || 'Não selecionada'}</h3>
                    <h3>Endereço de Entrega: {enderecoEntrega || 'Não informado'}</h3>
                    <h3>Observações: {observacoes || 'Nenhuma'}</h3>
                </div>

                <div className="modal-footer">
                    <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
                    <button className="btn-confirmar">Confirmar Pedido <MdShoppingCart className="btn-cart__icon" /></button>
                </div>
            </div>
        </div>
    );
}

export default ModalResumoPedido;
