import React from 'react';
import './Card.scss';

export default function Card({
  items = [],
  itemKey = (i, idx) => (i && (i.id ?? i.key)) ?? idx,
}) {
  return (
    <div className="list-card" role="list">
      {items.map((item, idx) => (
        <article
          role="listitem"
          key={itemKey(item, idx)}
          className="list-card__item"
        >
          <div className="list-card__body">
            <h3 className="list-card__title">{item.title}</h3>
            <p className="list-card__desc">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
