import { useState, useEffect } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
/*
const tailwindConfig = require('../../tailwind.config');
const config = resolveConfig(tailwindConfig);
*/

interface Screen {
  id: string;
  size: number;
}

const screens: Screen[] = [
  // => @media (max-width: 991px) { ... }
  {
    id: 'sm',
    size: 576,
  },
  // => @media (min-width: 576px) { ... }
  {
    id: 'md',
    size: 768,
  },
  // => @media (min-width: 768px) { ... }
  {
    id: 'lg',
    size: 992,
  },
  // => @media (min-width: 992px) { ... }
  {
    id: 'xl',
    size: 1200,
  },
  // => @media (min-width: 1200px) { ... }
];

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('');
  const resize = () => {
    const filteredSizes = screens.filter(
      (filter) => filter.size <= window.innerWidth
    );

    if (filteredSizes.length === 0) {
      setBreakpoint('sm');
      return;
    }

    const selected = filteredSizes[filteredSizes.length - 1];
    setBreakpoint(selected.id);
  };

  useEffect(() => {
    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return breakpoint;
};
