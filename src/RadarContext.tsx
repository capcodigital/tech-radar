import { createContext } from 'react';

const RadarContext = createContext({
  name: '',
  setName: (name: string) => {},
});

export default RadarContext;
