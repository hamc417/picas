import React from 'react';
import './styles.css'


function Footer() {
  return (
    <footer className='footer barra'>
      <div className="footer-left">
        <img src="logo.png" alt="Logo" />
        <p>Frase del lado izquierdo</p>
      </div>
      <div className="footer-center">
        <div className="contact-info">
          <p>Información de contacto</p>
          <div className="social-media-icons">
            <a href="https://www.whatsapp.com"><img src="whatsapp.png" alt="WhatsApp" /></a>
            <a href="https://www.instagram.com"><img src="instagram.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <img src="imagen.png" alt="Imagen" />
        <p>Frase del lado derecho</p>
      </div>
    </footer>
  );
}

export default Footer;
