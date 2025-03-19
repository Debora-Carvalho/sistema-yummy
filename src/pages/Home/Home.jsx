import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Home.css';

function Home() {
  return (
    <>
    <Header />
    <main className='container-home'>
      <h1>Bem-vindo ao Yummy!</h1>
    </main>
    <Footer />
    </>
  );
}

export default Home;
