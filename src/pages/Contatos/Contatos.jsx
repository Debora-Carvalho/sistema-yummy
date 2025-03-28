import React from 'react';
import './Contatos.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Contatos() {
    return (
        <div className='container'>
            <Header />
            <main className='container-contatos'>
                <section className="info-contato">
                    <h1>Fale com a gente</h1>
                    <div className='info-contato__text'>
                        <p><strong>Endereço:</strong> Rua Exemplo, 123 - Cidade, Estado</p>
                        <p><strong>Telefone:</strong> (11) 98765-4321</p>
                        <p><strong>Email:</strong> contato@exemplo.com</p>
                    </div>
                </section>

                <section className="formulario-contato">
                    <h2>Nos envie uma mensagem</h2>
                    <form>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Contatos;
