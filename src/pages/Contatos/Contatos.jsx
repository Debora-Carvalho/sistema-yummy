import React from 'react';
import './Contatos.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import ImgPaginaContatos from "../../assets/images/pagina-contatos.jpg";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

function Contatos() {
    return (
        <div className='container-principal'>
            <Header />
            <main className='container-contatos'>
                <div className="container-contatos-imagem">
                    <img className='contatos-imagem__img' src={ImgPaginaContatos} alt="Garota ruiva comendo hambúrguer" />
                </div>

                <div className="info-contato">
                    <div className='info-contato__endereco'>
                        <h1>Estamos no endereço</h1>
                        <div className='info-contato-tag'>
                            <div className='info-contato-tag__logo'>
                                <MdLocationPin />
                            </div>
                            <p className='info-contato-tag__texto'>Rua das Oliveiras, 123 - São Paulo, São Paulo - SP</p>
                        </div>
                    </div>

                    <div className='info-contato__links'>
                        <h1>Fale com a gente</h1>
                        <div className='info-contato-tag'>
                            <div className='info-contato-tag__logo'>
                                <IoLogoWhatsapp />
                            </div>
                            <p className='info-contato-tag__texto'>(11) 98765-4321</p>
                        </div>

                        <div className='info-contato-tag'>
                            <div className='info-contato-tag__logo'>
                                <AiFillInstagram />
                            </div>
                            <p className='info-contato-tag__texto'>@yummyburger</p>
                        </div>

                        <div className='info-contato-tag'>
                            <div className='info-contato-tag__logo'>
                                <MdEmail />
                            </div>
                            <p className='info-contato-tag__texto'>atendimento@yummyburger.com</p>                            
                        </div>
                    </div>                    
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contatos;
