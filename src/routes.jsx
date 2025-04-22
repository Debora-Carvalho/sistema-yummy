import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cardapio from "./pages/Cardapio/Cardapio.jsx";
import Pedido from "./pages/Pedido/Pedido.jsx";
import Favoritos from "./pages/Favoritos/Favoritos.jsx";
import Avaliacoes from "./pages/Avaliacoes/Avaliacoes.jsx";
import NaoEncontrada from "./pages/NaoEncontrada/NaoEncontrada.jsx";
import Contatos from "./pages/Contatos/Contatos.jsx";
import FavoritosProvider from "./contexts/Favorito.jsx"; 
import CarrinhoProvider from "./contexts/CarrinhoContext.jsx"; 

function AppRoutes() {
    return(
        <FavoritosProvider>
            <CarrinhoProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index path="/" element={<Home />}></Route>
                        <Route path="/cardapio" element={<Cardapio />}></Route>
                        <Route path="/pedido" element={<Pedido />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/avaliacoes" element={<Avaliacoes />}></Route>
                        <Route path="/contatos" element={<Contatos />}></Route>
                        <Route path="*" element={<NaoEncontrada />}></Route>
                    </Routes>
                </BrowserRouter>
            </CarrinhoProvider>
        </FavoritosProvider>
    )
}

export default AppRoutes;