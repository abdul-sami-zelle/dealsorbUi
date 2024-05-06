// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [productData, setProductData] = useState({});

  return (
    <DataContext.Provider value={{ productData, setProductData }}>
      {children}
    </DataContext.Provider>
  );
}
