import React, { useState } from 'react';
import { useCarrinho } from '../../contexts/CarrinhoContext';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ModalResumoPedido from '../../components/ModalResumoPedido/ModalResumoPedido.jsx';
import ModalExtras from '../../components/ModalExtras/ModalExtras.jsx';
import ImgCarrinhoVazio from '../../assets/images/carrinho-vazio.svg';
import { PiNotePencilBold } from "react-icons/pi";
import './Pedido.css';

function Pedido() {
  const { carrinho, atualizarItemDoCarrinho } = useCarrinho();

  const [formaPagamento, setFormaPagamento] = useState('');
  const [enderecoEntrega, setEnderecoEntrega] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [isModalResumoOpen, setIsModalResumoOpen] = useState(false);
  const [isModalExtrasOpen, setIsModalExtrasOpen] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const total = carrinho.reduce(
    (sum, item) =>
      sum + item.quantidade * (item.price + item.extras.reduce((eSum, extra) => eSum + extra.price, 0)),
    0
  );

  const handleAbrirModalExtras = (item) => {
    setItemSelecionado(item);
    setIsModalExtrasOpen(true);
  };

  const handleAtualizarItem = (selectedExtras) => {
    const itemAtualizado = {
      ...itemSelecionado,
      extras: selectedExtras,
    };

    atualizarItemDoCarrinho(itemSelecionado.id, itemAtualizado);
    setIsModalExtrasOpen(false);
    setItemSelecionado(null);
  };

  const handleConfirmarPedido = () => {
    setIsModalResumoOpen(true);
  };

  return (
    <>
      <Header />
      <main className="container-pedido">
        {carrinho.length === 0 ? (
          <div className="carrinho-vazio">
            <img src={ImgCarrinhoVazio} alt="Carrinho Vazio" className='carrinho-vazio__imagem' />
            <h1 className='carrinho-vazio__titulo'>Ops!</h1>
            <p className='carrinho-vazio__texto'>
              Seu carrinho está vazio. Adicione itens para continuar.
            </p>
          </div>
        ) : (
          <div className="container-pedido-card">
            <div className="container-pedido-card-resumo">
              <h2>Resumo do Pedido</h2>
              <p>Total: R$ {total.toFixed(2)}</p>

              <div className="form-group">
                <label htmlFor="formaPagamento">Forma de Pagamento</label>
                <select
                  id="formaPagamento"
                  value={formaPagamento}
                  onChange={(e) => setFormaPagamento(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="cartao">Cartão de Crédito</option>
                  <option value="dinheiro">Dinheiro</option>
                  <option value="pix">Pix</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="enderecoEntrega">Endereço de Entrega</label>
                <input
                  type="text"
                  id="enderecoEntrega"
                  value={enderecoEntrega}
                  onChange={(e) => setEnderecoEntrega(e.target.value)}
                  placeholder="Digite o endereço"
                />
              </div>

              <div className="form-group">
                <label htmlFor="observacoes">Observações</label>
                <textarea
                  id="observacoes"
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Observações para a entrega. Ex: Retire a cebola do hambúrguer."
                />
              </div>

              <button className="btn-confirmar" onClick={handleConfirmarPedido}>
                Confirmar Pedido
              </button>
            </div>

            <div className="container-pedido-card-itens">
              {carrinho.map((item, index) => (
                <div key={index} className="pedido-item">
                  <img
                    src={new URL(`../../assets/images/${item.image}`, import.meta.url).href}
                    alt={item.name}
                  />
                  <p>{item.name} - {item.quantidade}x</p>
                  <p>Extras: {item.extras.map((extra) => extra.name).join(', ') || 'Nenhum'}</p>
                  <p>
                    Subtotal: R$ {(
                      item.quantidade *
                      (item.price + item.extras.reduce((sum, extra) => sum + extra.price, 0))
                    ).toFixed(2)}
                  </p>

                  <button
                    onClick={() => handleAbrirModalExtras(item)}
                    className="btn-editar-item"
                  >
                    Editar 
                    <PiNotePencilBold />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* MODAL DE EXTRAS */}
      {itemSelecionado && (
        <ModalExtras
          product={itemSelecionado}
          isOpen={isModalExtrasOpen}
          onClose={() => setIsModalExtrasOpen(false)}
          onConfirm={handleAtualizarItem}
        />
      )}

      {/* MODAL DE RESUMO DO PEDIDO */}
      {isModalResumoOpen && (
        <ModalResumoPedido
          onClose={() => setIsModalResumoOpen(false)}
          carrinho={carrinho}
          total={total}
          formaPagamento={formaPagamento}
          enderecoEntrega={enderecoEntrega}
          observacoes={observacoes}
        />
      )}
    </>
  );
}

export default Pedido;
