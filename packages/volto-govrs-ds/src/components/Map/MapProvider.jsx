import React, { createContext, useContext } from 'react';
import { useLoadScript } from '@react-google-maps/api';

export const MapContext = createContext({
  isLoaded: false,
  loadError: null,
  apiKey: null,
  devMode: false,
});

export const useMapContext = () => useContext(MapContext);

export function MapProvider({
  apiKey,
  libraries = ['places'],
  children,
  devMode: devModeProp = false,
  ...loadOptions
}) {
  const key =
    (
      apiKey ||
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY ||
      process.env.VITE_GOOGLE_MAPS_KEY ||
      ''
    ).trim() || null;

  const safeKey = key || ' ';
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: safeKey,
    libraries,
    ...loadOptions,
  });

  return (
    <MapContext.Provider
      value={{
        isLoaded,
        loadError: key
          ? loadError
          : new Error('Google Maps API key is missing'),
        apiKey: key,
        devMode: devModeProp,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export default MapProvider;
