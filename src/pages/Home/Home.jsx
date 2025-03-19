import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Home.css';

function Home() {
  return (
    <div className='container'>
      <Header />
      <main className='container-home'>
        <h1>Bem-vindo ao Yummy!</h1>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
