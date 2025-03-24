import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Home.css';
import { FaHamburger, FaHotdog, FaIceCream, FaPizzaSlice, FaCoffee } from 'react-icons/fa';

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
                Escolha um de nossos deliciosos produtos e receba com qualidade no conforto da sua casa!
              </div>
            </div>

            <div className='description-home__tags'>
              <div className='tag-icon'>
                <FaHamburger />
              </div>
              <div className='tag-description'>
                Escolha um de nossos deliciosos produtos e receba com qualidade no conforto da sua casa!
              </div>
            </div>

            <div className='description-home__tags'>
              <div className='tag-icon'>
                <FaHamburger />
              </div>
              <div className='tag-description'>
                Escolha um de nossos deliciosos produtos e receba com qualidade no conforto da sua casa!
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
