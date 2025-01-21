import React, { useState } from "react";
import { Settings2, X } from "lucide-react";
import { useToolsPanel } from "../../context/ToolsPanelContext";
import styles from "./ToolsPanel.module.css";

const ToolsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Local state for visibility
  const { backgroundColor, setBackgroundColor } = useToolsPanel(); // Access context

  const togglePanel = () => setIsOpen((prev) => !prev);

  return (
    <div>
      {/* Button to toggle ToolsPanel */}
      <button onClick={togglePanel} className={styles.toggleButton}>
        <Settings2 size={24} />
      </button>

      {/* Conditionally render the ToolsPanel content */}
      {isOpen && (
        <div className={styles.toolsPanel}>
          <div className={styles.header}>
            <h2>Customize Feed</h2>
            <button onClick={togglePanel} className={styles.closeButton}>
              <X size={20} />
            </button>
          </div>

          {/* Background Color Selector */}
          <div className={styles.options}>
            <label>Background Color</label>
            <select
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            >
              <option value="bgWhite">White</option>
              <option value="bgGray100">Light Gray</option>
              <option value="bgBlue50">Light Blue</option>
              <option value="bgGreen50">Light Green</option>
              <option value="bgPurple50">Light Purple</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolsPanel;
