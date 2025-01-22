import React from "react";
import { Settings2 } from "lucide-react";
import { useToolsPanel } from "../../context/ToolsPanelContext";
import styles from "./ToolsPanelToggle.module.css";

const ToolsPanelToggle: React.FC = () => {
  const { togglePanel } = useToolsPanel(); // Use context to toggle the panel

  return (
    <button onClick={togglePanel} className={styles.toggleButton}>
      <Settings2 size={24} />
    </button>
  );
};

export default ToolsPanelToggle;
