import React, { useState } from "react";
import styles from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import vector from "../../assets/images/vector.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (section) => {
    navigate(`/#${section}`);
    closeMenu();
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage); // Change the language using i18n
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo_part}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className={styles.menu_part}>
            <div
              className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}
            >
              {["Home", "About", "Country", "Team", "Contact"].map((item) => (
                <span
                  key={item}
                  className={styles.link}
                  onClick={() => handleMenuClick(item.toLowerCase())}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className={styles.call}>
              <a href="tel:1234567890">
                <img src={vector} alt="Call now" />
                <span>Call now</span>
              </a>
            </div>

            <div className={styles.languageSelect}>
              <select
                defaultValue={i18n.lng}
                onChange={handleLanguageChange}
                className={styles.languageDropdown}
              >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="uz">UZ</option>
                <option value="de">DE</option>
              </select>
            </div>

            <div className={styles.menuToggle} onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.closeButton} onClick={closeMenu}>
            <FaTimes />
          </div>
          <div className={styles.menu}>
            {["Home", "About", "Country", "Team", "Contact"].map((item) => (
              <span
                key={item}
                className={styles.link}
                onClick={() => handleMenuClick(item.toLowerCase())}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
