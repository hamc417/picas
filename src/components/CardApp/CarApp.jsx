import React, { useState } from 'react';
import { Card } from '../card';
import { ModalApp } from '../ModalApp';
import './styles.css';

function CardApp() {
  const cards = [
    {
      src: require('./assets/pediatra_picas.jpg'),
      alt: 'pediatra_picas',
      title: 'Capacitacion',
      description: 'Capacitamos profesionales',
      info:'Capacitaciones y conferencias dinámicas y enriquecedoras para profesionales de la salud, en ciencias sociales y docentes que deseen profundizar sus conocimientos y habilidades en atención temprana, desarrollo psicomotor y estimulación neuronal, como:'
    },
    {
      src: require('./assets/padres_picas.jpg'),
      alt: 'padres_picas',
      title: 'Formacion padres',
      description: 'Capacitacion padres en primera infancia',
      info: 'Brindo programas de educación especializados para padres de familia, cuidadores, con el objetivo de capacitarlos en la implementación de estrategias eficaces de estimulación ydesarrollo en la primera infancia, como',
    },
    {
      src: require('./assets/individual_picas.jpg'),
      alt: 'atencion_picas',
      title: 'Atencion individual',
      description: 'Citas programadas',
      info: 'aca va la informacion extra',
    },
  ];

  const [modalInfo, setModalInfo] = useState(null);

  const handleCardClick = (info) => {
    setModalInfo(info);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <>
      <div className="card_container px-5 gap-3 mb-2">
        {cards.map((card, index) => (
          <Card
            key={index}
            src={card.src}
            alt={card.alt}
            title={card.title}
            description={card.description}
            info={card.info} // Pasamos la información adicional a cada tarjeta
            onCardClick={handleCardClick}
          />
        ))}
      </div>

      {modalInfo && (
        <ModalApp
          title={modalInfo.title}
          description={modalInfo.description}
          source={modalInfo.src}
          extraInfo={modalInfo.info} // Asegurémonos de pasar la información adicional desde la tarjeta seleccionada
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default CardApp;
