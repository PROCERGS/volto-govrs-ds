import React from 'react';
import CarouselDefault from './CarouselDefault';
import CarouselCard from './CarouselCard';

const Carousel = ({ variante = 'default', cardVariant, ...props }) => {
  const normalizedVariant = (variante || 'default').toString().toLowerCase();
  const Component =
    normalizedVariant === 'card' ? CarouselCard : CarouselDefault;
  return <Component cardVariant={cardVariant} {...props} />;
};

export default Carousel;
