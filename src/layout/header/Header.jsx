import React, { useState } from 'react';
import styles from './header.module.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo_part}>
          <Link to="/">
            <img src={logo} alt='Logo' />
          </Link>
        </div>

        <nav className={`${styles.menu_part} ${isMenuOpen ? styles.active : ''}`}>
          {isMenuOpen && (
            <div className={styles.menuOverlay}>
              <div className={styles.closeButton} onClick={closeMenu}>
                <FaTimes />
              </div>
              <div className={styles.menu}>
                {['Home', 'About', 'Country', 'Team', 'Contact'].map((item) => (
                  <Link key={item} to="/" className={styles.link} onClick={closeMenu}>
                    {item}
                  </Link>
                ))}
                <div className={styles.call}>
                  <a href="tel:1234567890"><span>Call now</span></a>
                </div>
              </div>
            </div>
          )}
        </nav>

        <div className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;