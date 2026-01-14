import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useMapContext } from './MapProvider';

const containerStyle = { width: '100%', height: '400px' };
const buildSvgPin = (n) => {
  const label = String(n);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="40" height="56" viewBox="0 0 40 56" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-20%" y="-10%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#0f4b7a" flood-opacity="0.35"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <path d="M20 1C10.059 1 2 9.059 2 19c0 11.5 13.341 28.503 17.24 33.218a1 1 0 0 0 1.52 0C24.659 47.503 38 30.5 38 19 38 9.059 29.941 1 20 1Z" fill="#1c7ed6" stroke="#0f4b7a" stroke-width="2"/>
  </g>
  <text x="20" y="24" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="18" font-weight="700">${label}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function MapWithMarkers({
  center = { lat: -23.55, lng: -46.64 },
  zoom = 12,
  markers = [],
  editable = true,
  onMarkersChange = () => {},
  mapOptions = {},
  showMarkerList = false,
  markerListLabel = 'Todos os lugares',
  selectedMarkerId,
  onMarkerSelect,
}) {
  const { isLoaded, apiKey, devMode, loadError } = useMapContext();
  const mapRef = useRef(null);
  const [localSelectedId, setLocalSelectedId] = useState(
    selectedMarkerId || null,
  );
  const isControlled =
    selectedMarkerId !== undefined && selectedMarkerId !== null;
  const effectiveSelectedId = isControlled ? selectedMarkerId : localSelectedId;

  useEffect(() => {
    if (isControlled) return;
    if (!localSelectedId && markers.length) {
      setLocalSelectedId(markers[0].id);
    }
  }, [isControlled, localSelectedId, markers]);

  useEffect(() => {
    if (!mapRef.current) return;
    if (!effectiveSelectedId) return;
    const target = markers.find((m) => m.id === effectiveSelectedId);
    if (!target) return;
    mapRef.current.panTo({ lat: target.lat, lng: target.lng });
  }, [effectiveSelectedId, markers]);

  const handleMapClick = useCallback(
    (e) => {
      if (!editable) return;
      const newMarker = {
        id: Date.now().toString(),
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };
      onMarkersChange([...markers, newMarker]);
    },
    [editable, markers, onMarkersChange],
  );

  const handleDragEnd = useCallback(
    (e, id) => {
      const updated = markers.map((m) =>
        m.id === id ? { ...m, lat: e.latLng.lat(), lng: e.latLng.lng() } : m,
      );
      onMarkersChange(updated);
    },
    [markers, onMarkersChange],
  );

  const handleMarkerSelect = useCallback(
    (id) => {
      if (!id) return;
      if (!isControlled) setLocalSelectedId(id);
      onMarkerSelect?.(id);
    },
    [isControlled, onMarkerSelect],
  );
  const decoratedMarkers = useMemo(
    () =>
      markers.map((m, idx) => ({
        ...m,
        icon: {
          url: buildSvgPin(idx + 1),
          scaledSize: { width: 36, height: 52 },
          anchor: { x: 18, y: 52 },
        },
        listLabel: `${idx + 1}. ${m.title || 'Local'}`,
      })),
    [markers],
  );

  const markerOptions = useMemo(
    () => decoratedMarkers.map((m) => ({ value: m.id, label: m.listLabel })),
    [decoratedMarkers],
  );

  if (!apiKey)
    return <div>Informe a Google Maps API key para carregar o mapa.</div>;
  if (devMode)
    return (
      <div>
        Dev mode ativado. Informe uma Google Maps API key para renderizar o mapa
        real.
      </div>
    );
  if (loadError) return <div>Erro ao carregar mapa.</div>;
  if (!isLoaded) return <div>Carregando mapa…</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onClick={handleMapClick}
        options={mapOptions}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      >
        {decoratedMarkers.map((m) => (
          <Marker
            key={m.id}
            position={{ lat: m.lat, lng: m.lng }}
            draggable={editable}
            onDragEnd={(e) => handleDragEnd(e, m.id)}
            title={m.title}
            icon={m.icon}
          />
        ))}
      </GoogleMap>

      {showMarkerList && markerOptions.length > 0 && (
        <div
          style={{
            marginTop: 12,
            border: '1px solid #d9d9d9',
            borderRadius: 6,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '10px 12px',
              background: '#f5f5f5',
              fontWeight: 600,
              color: '#444',
            }}
          >
            {markerListLabel}
          </div>
          <select
            value={effectiveSelectedId || ''}
            onChange={(e) => handleMarkerSelect(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: 'none',
              borderTop: '1px solid #e1e1e1',
              outline: 'none',
            }}
          >
            {markerOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
