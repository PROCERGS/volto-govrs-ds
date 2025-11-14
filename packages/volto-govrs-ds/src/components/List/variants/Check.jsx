import React from 'react';
import './Check.scss';

export default function Check({
  items = [],
  itemKey = (i, idx) => (i && (i.id ?? i.key)) ?? idx,
  onToggle,
}) {
  return (
    <ul className="list-check">
      {items.map((item, idx) => (
        <li key={itemKey(item, idx)} className="list-check__item">
          <label>
            <input
              type="checkbox"
              checked={!!item.checked}
              onChange={() => onToggle?.(item)}
            />
            <span className="list-check__label">{item.title}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
