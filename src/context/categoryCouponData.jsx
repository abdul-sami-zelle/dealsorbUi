// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function CategoryCouponData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [catCouponData, setCatCouponData] = useState({});

  return (
    <DataContext.Provider value={{ catCouponData, setCatCouponData }}>
      {children}
    </DataContext.Provider>
  );
}
