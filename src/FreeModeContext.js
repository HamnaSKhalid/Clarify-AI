// src/FreeModeContext.js
import React, { createContext, useContext, useState } from 'react';

const FreeModeContext = createContext();

export const useFreeMode = () => useContext(FreeModeContext);

export const FreeModeProvider = ({ children }) => {
  const [freeModeEnabled, setFreeModeEnabled] = useState(false);

  const toggleFreeMode = () => setFreeModeEnabled((prev) => !prev);

  return (
    <FreeModeContext.Provider value={{ freeModeEnabled, toggleFreeMode }}>
      {children}
    </FreeModeContext.Provider>
  );
};
