// TotalHoursContext.js
import React, { createContext, useContext, useState } from 'react';

const TotalHoursContext = createContext();

export function TotalHoursProvider({ children }) {
  const [totalHours, setTotalHours] = useState(0);

  const addHours = (hours) => {
    setTotalHours((prevTotalHours) => prevTotalHours + hours);
  };

  return (
    <TotalHoursContext.Provider value={{ totalHours, addHours }}>
      {children}
    </TotalHoursContext.Provider>
  );
}

export function useTotalHours() {
  return useContext(TotalHoursContext);
}
