import React from "react";
import { X } from "lucide-react";
import { ToolsPanelProps } from "../../types/toolsPanel";
import styles from "./ToolsPanel.module.css";

const ToolsPanel: React.FC<ToolsPanelProps> = ({
  isOpen,
  onClose,
  backgroundColor,
  onBackgroundColorChange,
  backgroundImage,
  onBackgroundImageChange,
}) => (
  <div
    className={`${styles.toolsPanel} ${isOpen ? styles.open : styles.closed}`}
  >
    <div className={styles.content}>
      <div className={styles.header}>
        <h2 className={styles.title}>Customize Feed</h2>
        <button onClick={onClose} className={styles.closeButton}>
          <X size={20} />
        </button>
      </div>

      <div className={styles.options}>
        <div className={styles.option}>
          <label className={styles.label}>Background Color</label>
          <select
            value={backgroundColor}
            onChange={(e) => onBackgroundColorChange(e.target.value)}
            className={styles.select}
          >
            <option value="bg-white">White</option>
            <option value="bg-gray-100">Light Gray</option>
            <option value="bg-blue-50">Light Blue</option>
            <option value="bg-green-50">Light Green</option>
            <option value="bg-purple-50">Light Purple</option>
          </select>
        </div>

        <div className={styles.option}>
          <label className={styles.label}>Background Image</label>
          <select
            value={backgroundImage}
            onChange={(e) => onBackgroundImageChange(e.target.value)}
            className={styles.select}
          >
            <option value="">None</option>
            <option value="/api/placeholder/1920/1080">Pattern 1</option>
            <option value="/api/placeholder/1920/1080">Pattern 2</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);

export default ToolsPanel;
