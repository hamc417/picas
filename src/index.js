import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';
// import {Homes} from './pages/home'
import { RoutesApp } from './routes';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    
      <React.StrictMode>
        <RoutesApp />
      </React.StrictMode>
    
  </Router>

);

//reportWebVitals();
