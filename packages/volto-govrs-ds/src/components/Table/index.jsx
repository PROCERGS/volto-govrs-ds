import React from 'react';
import Default from './variants/Default';
import Irregular from './variants/Irregular';

const variants = {
  default: Default,
  irregular: Irregular,
};

const Table = ({ variant = 'default', ...props }) => {
  const Comp = variants[variant] || Default;
  return <Comp {...props} />;
};

export default Table;
