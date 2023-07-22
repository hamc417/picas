import React from 'react';
import './styles.css';

function Card({ src, alt, title, description, info, onCardClick }) {
  return (
    <>
      <div
        className="col card-container" // Agregamos la clase "card-container" para aplicar el estilo
        onClick={() => onCardClick({ src, alt, title, description, info })}
      >
        <div className="card h-100 p-3 align-items-center m-0">
          <img src={src} alt={alt} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
