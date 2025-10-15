import React from 'react';
import '../theme/HeadersETextos/Listas.scss';

export default {
  title: 'Typography/Lists',
  parameters: { layout: 'padded' },
};

const Measurements = ({ size, lh, weight }) => (
  <div
    style={{ fontSize: 13, color: '#444' }}
  >{`${size} / ${lh} / ${weight}`}</div>
);

export const ListsFull = () => (
  <div>
    <div className="listas-container" style={{ maxWidth: 960 }}>
      <h3 style={{ marginTop: 0 }}>Listas — base</h3>
      <div className="listas--base">
        <div className="listas-demo">
          <ul>
            <li>Lista 1</li>
            <li>Lista 2</li>
            <li>Lista 3</li>
          </ul>
          <Measurements size="20px" lh="32px" weight="400" />
        </div>
      </div>

      <div style={{ padding: 16, marginTop: 24 }}>
        <h3>Uso</h3>
        <p style={{ color: '#444' }}>
          Use a classe <code> listas--base </code> para listas que sigam a
          tipografia do sistema.
        </p>
      </div>
    </div>
  </div>
);

ListsFull.storyName = 'Lists';
