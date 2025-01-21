import React from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
  sidebar?: React.ReactNode;
  footer: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  header,
  content,
  sidebar,
  footer,
}) => {
  return (
    <div className={styles.layout}>
      <header className={styles.headerContainer}>{header}</header>
      <main className={styles.mainContainer}>
        <div className={styles.contentContainer}>{content}</div>
        <aside className={styles.sidebarContainer}>{sidebar}</aside>
      </main>
      <footer className={styles.footerContainer}>{footer}</footer>
    </div>
  );
};

export default Layout;
