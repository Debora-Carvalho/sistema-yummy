import React from "react";
import './Header.css';
import { FaHamburger } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
    return (
      <header className='header'>
        <div className='header-logo-container'>
            <FaHamburger className='icon-burger'/>
            <h1>Yummy</h1>
        </div>

        <div className='header-nav-container'>
          <div className='header-nav-container__links'>
            <a href="">Sobre</a>
            <a href="">Cardápio</a>
            <a href="">Avaliações</a>
            <a href="">Contatos</a>
          </div>

          <div className='btn-cart'>
            <MdShoppingCart className='icon-cart'/>
          </div>
        </div>
      </header>
    );
};

export default Header;