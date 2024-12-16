import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrusel.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/10/mixcollage-17-oct-2024-02-33-pm-5555.jpg',
    altText: 'X-Men Mansion X   76294',
    caption: '¡Revive las épicas aventuras de los X-Men con el set LEGO Mansión X! Llena de detalles únicos y espacios para tus héroes favoritos, es perfecta para coleccionar y crear tus propias historias. ¡Una pieza imprescindible para los fanáticos de Marvel!',
    key: 1,
  },
  {
    src: 'https://www.topgear-magazine.fr/wp-content/uploads/2024/07/LEGO-Technic-McLaren-P1.jpg',
    altText: 'Mc Laren P1   42172',
    caption: '¡Conduce la emoción con el set LEGO McLaren P1! Una réplica impresionante del icónico superdeportivo, llena de detalles realistas y perfecta para los amantes de la velocidad y la ingeniería. ¡Construye, exhibe y siente la adrenalina en cada pieza!',
    key: 2,
  },
  {
    src: 'https://greatyellowbrick.co.za/cdn/shop/files/lego-marvel-super-heroes-avengers-tower-76269_008_1024x1024@2x.jpg?v=1699543778',
    altText: 'Avengers Tower',
    caption: '¡Protege el mundo con el set LEGO Torre de los Avengers! Construye la emblemática base de los héroes más poderosos, llena de detalles y acción para revivir tus escenas favoritas. ¡Un imprescindible para fans de Marvel y constructores épicos!',
    key: 3,
  },
  {
    src: 'https://www.lego.com/cdn/cs/set/assets/bltc8d6ff83e527359f/Harry_Potter_option_2.jpg?fit=crop&quality=80&width=700&dpr=1',
    altText: 'Harry Potter Hogwarts   71043',
    caption: '¡Adéntrate en el mágico mundo de Hogwarts con este impresionante set LEGO de Harry Potter! Construye el icónico castillo con sus torres, aulas y secretos, mientras revives las aventuras de tus personajes favoritos. ¡Es hora de hacer magia y llevar Hogwarts a tu hogar, ladrillo por ladrillo!',
    key: 4,
  },
  {
    src: 'https://www.brickmo.com/media/image/ea/13/72/LEGO_Exklusiv_10300_Die_Zeitmaschine_aus_Zuruck_in_die_Zukunft_10300_LEGO-Exklusiv-Set_LEGO-Online-Shop_BRICKMO_10_600x600@2x.jpg',
    altText: 'Time Machine 10300',
    caption: '¡Viaja a través del tiempo con el set LEGO de la Máquina del Tiempo de "Volver al Futuro"! Construye la icónica DeLorean con detalles que los fanáticos amarán, como el condensador de flujo y las opciones para personalizarla según tu película favorita. ¡Perfecta para revivir aventuras con Marty y Doc mientras haces historia, pieza por pieza!',
    key: 5,
  },
];

function Carrusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}  />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrusel;