import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useToolsPanel } from "../../context/ToolsPanelContext";
import styles from "./ToolsPanel.module.css";

const ToolsPanel: React.FC = () => {
  const {
    isOpen,
    togglePanel,
    backgroundColor,
    setBackgroundColor,
    theme,
    setTheme,
  } = useToolsPanel();

  const panelRef = useRef<HTMLDivElement>(null);

  // Close the ToolsPanel when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        togglePanel();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, togglePanel]);

  if (!isOpen) return null;

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
  };

  return (
    <div ref={panelRef} className={styles.toolsPanel}>
      <div className={styles.header}>
        <h2>Customize Feed</h2>
        <button onClick={togglePanel} className={styles.closeButton}>
          <X size={20} />
        </button>
      </div>

      <div className={styles.themeSection}>
        <h3>Theme</h3>
        <p>Choose a theme for the feed</p>
        <div className={styles.toggleContainer}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={handleThemeChange}
            />
            <span className={styles.slider}></span>
          </label>
          <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
        </div>
      </div>

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
  );
};

export default ToolsPanel;
