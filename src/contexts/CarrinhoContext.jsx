import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);

const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto, extras, quantidade) => {
    const produtoExistente = carrinho.find(item => item.id === produto.id);
    
    if (produtoExistente) {
      // Se o produto já estiver no carrinho, atualiza a quantidade
      const novosItens = carrinho.map(item => 
        item.id === produto.id 
          ? { ...item, quantidade: item.quantidade + quantidade, extras }
          : item
      );
      setCarrinho(novosItens);
    } else {
      // Se o produto não estiver no carrinho, adiciona novo
      setCarrinho([...carrinho, { ...produto, quantidade, extras }]);
    }
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoProvider;
