import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cardapio from "./pages/Cardapio/Cardapio.jsx";
import Favoritos from "./pages/Favoritos/Favoritos.jsx";
import NaoEncontrada from "./pages/NaoEncontrada/NaoEncontrada.jsx";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />}></Route>
                <Route path="/cardapio" element={<Cardapio />}></Route>
                <Route path="/favoritos" element={<Favoritos />}></Route>
                <Route path="*" element={<NaoEncontrada />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;