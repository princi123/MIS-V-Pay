import React, { createContext, useContext, useState } from "react";
const SalesDataContext = createContext();

export const SalesDataProvider = ({ children }) => {
  const [subSalesData, setSubSalesData] = useState(null);
  return (
    <SalesDataContext.Provider value={{ subSalesData, setSubSalesData }}>
      {children}
    </SalesDataContext.Provider>
  );
};
export const useSalesData = () => {
  return useContext(SalesDataContext);
};
