import React, { createContext, ReactNode, useContext, useState } from "react";

interface ToolsPanelContextProps {
  isOpen: boolean;
  togglePanel: () => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
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
  const [isOpen, setIsOpen] = useState(false); // Manage visibility of ToolsPanel
  const [backgroundColor, setBackgroundColor] = useState("bgWhite");
  const [theme, setTheme] = useState("light");

  const togglePanel = () => setIsOpen((prev) => !prev);

  return (
    <ToolsPanelContext.Provider
      value={{
        isOpen,
        togglePanel,
        backgroundColor,
        setBackgroundColor,
        theme,
        setTheme,
      }}
    >
      {children}
    </ToolsPanelContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToolsPanel = (): ToolsPanelContextProps => {
  const context = useContext(ToolsPanelContext);
  if (!context) {
    throw new Error("useToolsPanel must be used within a ToolsPanelProvider");
  }
  return context;
};
