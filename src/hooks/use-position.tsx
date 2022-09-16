import { useState, useEffect } from 'react';

export const usePosition = (active: boolean) => {
  const [position, setPosition] = useState<GeolocationCoordinates>();
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = (position: GeolocationPosition) => {
    setPosition(position.coords);
  };

  const onError = (positionError: GeolocationPositionError) => {
    setError(positionError.message);
  };

  useEffect(() => {
    if (active) {
      const geo = navigator.geolocation;
      if (!geo) {
        setError('Geolocation is not supported');
        return;
      }
      const watcher = geo.watchPosition(onChange, onError);
      return () => geo.clearWatch(watcher);
    }
  }, []);

  return { position, error };
};
