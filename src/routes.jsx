import React from 'react';
import {Router, Routes, Route } from 'react-router-dom';
import {Homes} from './pages/home';
import {About} from './pages/About';
import {Blog} from './pages/Blog';
import {Contacto} from './pages/contacts';

export function RoutesApp() {
  return (
       <div>
          <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacto/>} />
        </Routes>
       </div>
      );
}
