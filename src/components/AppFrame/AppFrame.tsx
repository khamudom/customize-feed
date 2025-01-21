import React from "react";
import styles from "./AppFrame.module.css";

interface AppFrameProps {
  children: React.ReactNode;
}

const AppFrame: React.FC<AppFrameProps> = ({ children }) => {
  return <div className={styles.appFrame}>{children}</div>;
};

export default AppFrame;
