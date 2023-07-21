import React from 'react';
import {Card} from '../card'
import './styles.css'


function CardApp() {
  const cards = [
    
    {
      src: require('./assets/pediatra_picas.jpg'),
      alt: 'pediatra_picas',
      title: 'Capacitacion',
      description: 'Capacitamos profesionales',
    },
    {
      src: require('./assets/padres_picas.jpg'),
      alt: 'padres_picas',
      title: 'Formacion padres',
      description: 'Capacitacion padres en primera infancia',
    },
    {
      src: require('./assets/individual_picas.jpg'),
      alt: 'atencion_picas',
      title: 'Atencion individual',
      description: 'Citas programadas',
    },
  ];
 
  return (
    <>
    
    <div className='card_container px-5 gap-3 mb-2' >
      {cards.map((card, index) => (
        <Card
          key={index}
          src={card.src}
          alt={card.alt}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    

 

    </>
  );
}

export default CardApp;
