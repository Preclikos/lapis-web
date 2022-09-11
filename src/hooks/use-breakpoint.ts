import { useState, useEffect } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

const tailwindConfig = require('../../tailwind.config');
const config = resolveConfig(tailwindConfig);

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(1200);
  const resize = () => {
    setBreakpoint(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  console.log(config.theme?.screens?.length);

  return breakpoint;
};
