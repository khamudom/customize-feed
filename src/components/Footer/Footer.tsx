import React from "react";
import styles from "./Footer.module.css";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Grid Section */}
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h2>Your Brand</h2>
            <p>
              Empowering you with the latest news and updates, delivered with
              precision and care.
            </p>
          </div>

          <div className={styles.section}>
            <h3>About Us</h3>
            <div className={styles.linkList}>
              <a href="#" className={styles.link}>
                Our Story
              </a>
              <a href="#" className={styles.link}>
                Careers
              </a>
              <a href="#" className={styles.link}>
                Contact
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Support</h3>
            <div className={styles.linkList}>
              <a href="#" className={styles.link}>
                Help Center
              </a>
              <a href="#" className={styles.link}>
                Privacy Policy
              </a>
              <a href="#" className={styles.link}>
                Terms of Service
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Twitter />
              </a>
              <a href="#" className={styles.socialLink}>
                <Facebook />
              </a>
              <a href="#" className={styles.socialLink}>
                <Instagram />
              </a>
              <a href="#" className={styles.socialLink}>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
