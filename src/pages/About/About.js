import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer';

function About() {
  console.log('pagina about')
  return (
    
      <div>
        <NavBar/>
      <h1>Acerca de nosotros</h1>
      <p>Descripción sobre nuestra empresa o proyecto.</p>
      <Footer/>
      </div>
        
  );
}

export default About;
