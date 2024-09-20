import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/sobre.css';
import '../css/menu.css';
import '../css/style.css';
import formulaeLogo from '../assets/formulae-logo.png';
import backgroundTop from '../assets/backgroundTop.png';
import carSobre from '../assets/car-sobre.png';
import box1Sobre from '../assets/box1-sobre.png';
import box2Sobre from '../assets/box2-sobre.png';
import box3Sobre from '../assets/box3-sobre.png';
import userIcon from '../assets/icon-user.svg';

const Sobre = () => {
  useEffect(() => {
    // Aqui você pode adicionar a lógica dos arquivos JS que estavam sendo importados, por exemplo:
    // sobre.js ou comum.js
  }, []);

  return (
    <>
      <header>
        <img src={formulaeLogo} alt="Logo da FormulaE" />
        <nav>
          <div className="menuToggle" id="menuToggle">
            <span className="menu-span unclicked"></span>
            <span className="menu-span unclicked"></span>
            <span className="menu-span unclicked"></span>
          </div>
          <ul className="menu" id="menu">
            <li className="item-menu"><Link to="/" className="link-menu">Home</Link></li>
            <li className="item-menu"><Link to="/sobre" className="link-menu">Sobre</Link></li>
            <li className="item-menu"><Link to="/circuitos" className="link-menu">Circuitos</Link></li>
            <li className="item-menu"><Link to="/desenvolvedores" className="link-menu">Desenvolvedores</Link></li>
            <li id="link-login">
              <Link to="/login" id="btn-login">
                <div className="icone">
                  <img src={userIcon} alt="Ícone de usuário" />
                </div>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="sec1">
          <div className="box1">
            <h1>O que é a Formula E:</h1>
            <img src={backgroundTop} alt="Fundo topo" />
          </div>
          <div className="box2">
            <p>
              A Fórmula E é uma categoria de corridas automobilísticas que se destaca por sua abordagem pioneira e
              sustentável. Desde o seu lançamento em 2014, a Fórmula E tem desafiado as convenções do
              automobilismo tradicional ao utilizar exclusivamente veículos elétricos de alta performance. Essa
              iniciativa não apenas promove a conscientização sobre a importância da mobilidade elétrica, mas
              também impulsiona a inovação tecnológica, servindo como um campo de testes para o desenvolvimento de
              tecnologias de propulsão limpa.
            </p>
            <img src={carSobre} alt="Carro Fórmula E" />
          </div>
        </section>

        <section className="sec2">
          <h1>AS CORRIDAS DE FÓRMULA E SÃO CORRIDAS DE ALTA VELOCIDADE COM...</h1>
          <div className="container-tech">
            <div className="info-tech" id="info-inovacao">
              <img src={box1Sobre} alt="Inovação e aceleração" />
              <div className="text-tech">
                <h3>Inovação e aceleração recorde</h3>
                <p>Pináculo do desempenho.</p>
              </div>
            </div>
            <div className="info-tech" id="info-cidades">
              <img src={box2Sobre} alt="Cidades Globais" />
              <div className="text-tech">
                <h3>Entretenimento eletrizante nas maiores cidades</h3>
                <p>11 locais globais.</p>
              </div>
            </div>
            <div className="info-tech" id="info-corrida">
              <img src={box3Sobre} alt="Corrida limpa" />
              <div className="text-tech">
                <h3>A corrida em direção a um futuro mais limpo e mais rápido</h3>
                <p>Sem emissões de gases desde o dia zero.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="contt-email">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            {/* Conteúdo SVG */}
          </svg>
          <p>support@lemmatech.com</p>
        </div>
        <p className="copyright">© 2024 LemmaTech Solutions</p>
        <div className="social-media">
          <button className="icon-media" onClick={() => window.open('https://wa.me/')} aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </button>
          <button className="icon-media" onClick={() => window.open('https://www.instagram.com/')} aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button className="icon-media" onClick={() => window.open('https://www.linkedin.com/')} aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Sobre;
