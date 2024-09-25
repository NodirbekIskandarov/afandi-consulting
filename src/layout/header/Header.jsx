import React, { useState } from 'react';
import styles from './header.module.scss';
import logo from '../../assets/images/logo.png';
import vector from '../../assets/images/vector.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (section) => {
    navigate(`/#${section}`);  // URL ga fragment (#about, #team) qo‘shib yo‘naltiramiz
    closeMenu();
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo_part}>
            <Link to="/">
              <img src={logo} alt='Logo' />
            </Link>
          </div>

          <div className={styles.menu_part}>
            <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
              {['Home', 'About', 'Country', 'Team', 'Contact'].map((item) => (
                <span
                  key={item}
                  className={styles.link}
                  onClick={() => handleMenuClick(item.toLowerCase())}  // Tanlangan qismni URL ga fragment sifatida qo‘shamiz
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
            {['Home', 'About', 'Country', 'Team', 'Contact'].map((item) => (
              <span
                key={item}
                className={styles.link}
                onClick={() => handleMenuClick(item.toLowerCase())}  // URL fragmenti qo'shamiz
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
