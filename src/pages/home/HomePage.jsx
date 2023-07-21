import React from 'react';
import { Navbar } from '../../components/Navbar';
import './style.css';
import { Footer } from '../../components/Footer';
import { CardApp } from '../../components/CardApp';
// import {moda} from '../../components/modal'


const Homes = () => {

  console.log('home page');
  return (
    <>
      <div id='home'>
        <Navbar />
        <div className='banner'>
        <img src={require('./assets/picas_Gineth_Avila.png')} alt='mama_picas' className='home_banner'/>
        </div>
        <p>Bienvenido a nuestra página de inicio.</p>

        <CardApp />
        {/* <modal /> */}
        <Footer />
      </div>

    </>
  );
};

export default Homes;