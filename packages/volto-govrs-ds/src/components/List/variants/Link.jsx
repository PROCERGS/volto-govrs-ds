import React from 'react';
import './Link.scss';

export default function Link({
  items = [],
  itemKey = (i, idx) => (i && (i.id ?? i.key)) ?? idx,
}) {
  return (
    <nav className="list-link" role="navigation">
      <ul className="list-link__list">
        {items.map((item, idx) => (
          <li key={itemKey(item, idx)} className="list-link__item">
            <a href={item.href || '#'} className="list-link__anchor">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
