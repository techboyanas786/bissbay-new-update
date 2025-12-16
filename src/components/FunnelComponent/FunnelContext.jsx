import React, { createContext, useState, useContext } from "react";

const FunnelContext = createContext();

export const FunnelProvider = ({ children }) => {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <FunnelContext.Provider value={{ activeStage, setActiveStage }}>
      {children}
    </FunnelContext.Provider>
  );
};

export const useFunnel = () => useContext(FunnelContext);