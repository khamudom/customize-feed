import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Technology", href: "#" },
    { label: "Politics", href: "#" },
    { label: "Science", href: "#" },
    { label: "Entertainment", href: "#" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.logo}>NewsApp</div>

          <nav className={styles.desktopNav}>
            <div className={styles.navList}>
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className={styles.navItem}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search news..."
              className={styles.searchInput}
            />
            <Search className={styles.searchIcon} size={18} />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuButton}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavList}>
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className={styles.navItem}>
                  {item.label}
                </a>
              ))}
              <div className={styles.mobileSearchContainer}>
                <input
                  type="text"
                  placeholder="Search news..."
                  className={styles.mobileSearchInput}
                />
                <Search className={styles.searchIcon} size={18} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
