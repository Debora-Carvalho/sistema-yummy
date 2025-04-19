import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import { FaHamburger, FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
    return (
      <header className='header'>
        <Link to={"/"} className='header-logo-container'>
          <FaHamburger className='icon-burger'/>
          <h1>Yummy</h1>
        </Link>

        <div className='header-nav-container'>
          <div className='header-nav-container__links'>
            <Link to={"/"}>Sobre</Link>
            <Link to={"/cardapio"}>Cardápio</Link>
            <a href="">Avaliações</a>
            <Link to={"/contatos"}>Contatos</Link>
          </div>

          <div className='search-bar'>
            <FaSearch className='search-icon' />
            <input type='text' placeholder='Buscar...' className='search-input' />
          </div>

          <div className='btn-cart'>
            <Link to={"/pedido"}>
              <MdShoppingCart className='icon-cart'/>
            </Link>
          </div>
        </div>
      </header>
    );
};

export default Header;