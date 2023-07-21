import React from 'react';
import { Footer } from '../../components/Footer';
import NavBar from '../../components/Navbar/Navbar';

function Blog() {
  return (
    <div>
      <NavBar/>
      <h1>Blog</h1>
      <p>Aquí encontrarás nuestros últimos artículos.</p>
      <Footer/>
    </div>
  );
}

export default Blog;
