import { createContext, useState, useContext } from "react";

export const LocationContext = createContext();

export function LocationContextProvider({ children }) {

  const [contextLocation, setContextLocation] = useState({
    cityName: "",
    temperature: {
      celsius: "",
      farhenheit: "",
    },
  });
  const value = { contextLocation, setContextLocation };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}

export function useLocationContext() {
  const context = useContext(LocationContext)
  if (!context) {
    throw new Error('Bueno, ok')
  }
  return context
}