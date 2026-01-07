import React from 'react';
import '../Table.scss';
import './Irregular.scss';

const Irregular = ({ items = [] }) => {
  return (
    <div className="table-component table-irregular">
      <div className="table-irregular__wrap">
        {items.map((row, i) => (
          <div className="table-irregular__row" key={row.id ?? i}>
            {row.cells.map((cell, idx) => (
              <div className="table-irregular__cell" key={idx}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Irregular;
