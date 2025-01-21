import React, { createContext, ReactNode, useContext, useState } from "react";

interface ToolsPanelContextProps {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

interface ToolsPanelProviderProps {
  children: ReactNode;
}

const ToolsPanelContext = createContext<ToolsPanelContextProps | undefined>(
  undefined
);

export const ToolsPanelProvider: React.FC<ToolsPanelProviderProps> = ({
  children,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("bgWhite");

  return (
    <ToolsPanelContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </ToolsPanelContext.Provider>
  );
};

export const useToolsPanel = (): ToolsPanelContextProps => {
  const context = useContext(ToolsPanelContext);
  if (!context) {
    throw new Error("useToolsPanel must be used within a ToolsPanelProvider");
  }
  return context;
};
