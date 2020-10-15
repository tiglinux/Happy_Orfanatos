import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import '../styles/pages/landing.css';
//Images
import logoImg from '../images/Logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Vila Velha</strong>
          <span>Espírito Santo</span>
        </div>
        <Link to="/orfanatos" className='enter-app'>
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>

      </div>
      <h2 className="tituloDevelop">2020 - Desenvolvido por : <a href="http://www.tiagoribeirosantos.6te.net" target="blank">Tiago Ribeiro Santos - Programador</a> </h2>
    </div>
  );
}

export default Landing;