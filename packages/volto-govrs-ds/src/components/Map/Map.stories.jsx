import React, { useMemo } from 'react';
import MapWithMarkers from './MapWithMarkers';
import { MapProvider } from './MapProvider';

export default {
  title: 'Components/Map',
};

const storybookApiKey =
  (
    process.env.STORYBOOK_GOOGLE_MAPS_API_KEY ||
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY ||
    process.env.VITE_GOOGLE_MAPS_KEY ||
    ''
  ).trim() || null;

const Template = (props) => <MapWithMarkers {...props} />;

export const MapDocs = () => {
  return (
    <div style={{ padding: 16, maxWidth: 920 }}>
      <h1>MapWithMarkers — Documentação</h1>

      <section style={{ marginTop: 8 }}>
        <h2>Visão geral</h2>
        <p>
          O componente <code>MapWithMarkers</code> renderiza um mapa do Google
          Maps com marcadores numerados. Passe a lista de locais via prop{' '}
          <code>markers</code> para controlar quais pontos são mostrados. Cada
          item do array deve ser um objeto com
          <code>id</code>, <code>lat</code>, <code>lng</code> e opcionalmente{' '}
          <code>title</code>.
        </p>
      </section>

      <section style={{ marginTop: 12 }}>
        <h2>Exemplo de uso</h2>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`const markers = [
  { id: 'm1', lat: -30.0335, lng: -51.2304, title: 'Procergs' },
  { id: 'm2', lat: -30.037, lng: -51.215, title: 'Procergs 2' },
];

<MapProvider apiKey={process.env.STORYBOOK_GOOGLE_MAPS_API_KEY}>
  <MapWithMarkers markers={markers} showMarkerList markerListLabel="Todos os lugares" />
</MapProvider>`}</code>
        </pre>
      </section>

      <section style={{ marginTop: 12 }}>
        <h2>Props</h2>
        <ul>
          <li>
            <code>markers</code>: <strong>required</strong> — array de objetos{' '}
            {`{ id, lat, lng, title? }`}.
          </li>
          <li>
            <code>center</code>: centro inicial do mapa (objeto `
            {`{ lat, lng }`}`), padrão Porto Alegre.
          </li>
          <li>
            <code>zoom</code>: nível de zoom inicial (padrão 13).
          </li>
          <li>
            <code>editable</code>: permite adicionar/arrastar marcadores
            (boolean).
          </li>
          <li>
            <code>showMarkerList</code>: exibe um select com os marcadores.
          </li>
        </ul>
      </section>
    </div>
  );
};

export const MapInterativo = (args) => {
  const apiKey = useMemo(() => storybookApiKey, []);
  return (
    <div style={{ position: 'relative' }}>
      <MapProvider apiKey={apiKey} devMode={false}>
        <Template {...args} />
      </MapProvider>
    </div>
  );
};

MapInterativo.args = {
  center: { lat: -30.0335, lng: -51.2204 },
  zoom: 13,
  editable: false,
  showMarkerList: true,
  markerListLabel: 'Todos os lugares',
  markers: [
    { id: 'm1', lat: -30.0335, lng: -51.2304, title: 'Procergs' },
    { id: 'm2', lat: -30.037, lng: -51.215, title: 'Procergs 2' },
    { id: 'm3', lat: -30.047, lng: -51.22, title: 'Procergs 3' },
  ],
};
