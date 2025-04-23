import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Home.css';
import { FaStar, FaHamburger } from 'react-icons/fa';
import { MdFastfood } from "react-icons/md";
import ImgCliente1 from '../../assets/images/perfil/1_lucas.jpg';
import ImgCliente2 from '../../assets/images/perfil/2_marina.jpg';
import ImgCliente3 from '../../assets/images/perfil/3_joao.jpg';
import ImgCliente4 from '../../assets/images/perfil/4_ana.jpg';

function Home() {
  return (
    <div className='container'>
      <Header />
      <main className='container-home'>
        <div className='container-home__content'>
          <h1 className='title-home'>Sei que você está com
            <span className='title-home__detail'> fome</span>
          </h1>
        </div>

        <div className='container-home__tags'>
          <div className='description-home__tags'>
            <div className='tag-icon'>
              <FaHamburger />
            </div>
            <div className='tag-description'>
              Peça online rápido e fácil!
            </div>
          </div>

          <div className='description-home__tags'>
            <div className='tag-icon'>
              <MdFastfood />
            </div>
            <div className='tag-description'>
              Monte seu combo do jeitinho que quiser!
            </div>
          </div>

          <div className='description-home__tag-avaliacao'>
            <div className='tag-icon__avaliacao'>
              <div className='tag__imagens-perfil'>
                <img className='tag__imagens-perfil-img' src={ImgCliente1} alt='Foto de perfil do cliente'/>
                <img className='tag__imagens-perfil-img' src={ImgCliente2} alt='Foto de perfil do cliente'/>
                <img className='tag__imagens-perfil-img' src={ImgCliente3} alt='Foto de perfil do cliente'/>
                <img className='tag__imagens-perfil-img' src={ImgCliente4} alt='Foto de perfil do cliente'/>
              </div>
              <div className='tag__imagens-numero'>
                100+ 
              </div>
            </div>
            <div className='tag-description'>
              <FaStar className='tag-description__estrela'/>
              avaliações reais de clientes satisfeitos com a Yummy
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
