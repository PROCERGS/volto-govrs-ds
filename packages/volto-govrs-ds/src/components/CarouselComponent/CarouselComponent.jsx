import React from 'react';
import CarouselDefault from './CarouselDefault';
import CarouselCard from './CarouselCard';

const CarouselComponent = ({ variante = 'default', ...props }) => {
  const normalizedVariant = (variante || 'default').toString().toLowerCase();
  const Component =
    normalizedVariant === 'card' ? CarouselCard : CarouselDefault;

  return <Component {...props} />;
};

export default CarouselComponent;
