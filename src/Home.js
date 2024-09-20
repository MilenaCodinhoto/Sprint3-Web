import React, { useEffect } from 'react';
import './css/inicio.css';
import './css/menu.css';
import './css/style.css';
import formulaeLogo from './assets/formulae-logo.png';
import carroInicio from './assets/carro-inicio.png';
import userIcon from './assets/icon-user.svg';
import { handleMenuToggle } from './js/menuToggle';
import { Link } from 'react-router-dom'; // Importa o componente Link

const Home = () => {
  useEffect(() => {
    handleMenuToggle();
  }, []);

  return (
    <>
      <header>
        <img src={formulaeLogo} alt="Logo da FormulaE" />
        <nav>
          <div className="menuToggle unclicked" id="menuToggle">
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
        <section className="sec-inicio">
          <span id="box-1"></span>
          <span id="box-2"></span>
          <div className="content-inicio">
            <h1>FormulaE: A corrida com carros elétricos de alta performance</h1>
            <Link to="/sobre" className="link-inicio">Saber mais</Link>
          </div>
        </section>
        <div className="box-img">
          <img src={carroInicio} alt="Carro inicial" />
        </div>
      </main>

      <footer>
  <div className="contt-email">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      {/* SVG content */}
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

export default Home;
