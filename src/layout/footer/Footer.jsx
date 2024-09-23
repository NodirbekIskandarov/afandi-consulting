import React from 'react'
import styles from'./footer.module.scss'
import footerimg from '../../assets/images/footerimg.png'
import { Link, useNavigate } from 'react-router-dom'
function Footer() {
  const navigate = useNavigate()
  const handleMenuClick = (section) => {
    navigate(`/#${section}`);  // URL ga fragment (#about, #team) qo‘shib yo‘naltiramiz
  };
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logo_part}>
            <img src={footerimg} alt="footerlogo" />
            <span>Afandi consulting offers online training in Environmental and Holistic Wellness.</span>
          </div>

          <div className={styles.menu}>
            <div className={styles.company}>
              <span>Company</span>
              <span className={styles.link} onClick={() => handleMenuClick('home')} >Home</span>
              <span className={styles.link} onClick={() => handleMenuClick('about')}>About us</span>
              <span className={styles.link} onClick={() => handleMenuClick('team')}>Team</span>
              <span className={styles.link} onClick={() => handleMenuClick('contact')}>Contact</span>
            </div>
            <div className={styles.country}>
              <span>Country</span>
              <Link className={styles.link} to="/">Uk</Link>
              <Link className={styles.link} to="/">Austrial</Link>
              <Link className={styles.link} to="/">Irlandy</Link>
              <Link className={styles.link} to="/">United States</Link>
              <Link className={styles.link} to="/">Canada</Link>
            </div>
            <div className={styles.social}>
              <span>Social</span>
              <Link className={styles.link} to="/">Facebook</Link>
              <Link className={styles.link} to="/">Instagram</Link>
              <Link className={styles.link} to="/">Linkedin</Link>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.past}>
            <span>© 2024 Afandi | All rights reserved | Uzbekistan Company</span>
          </div>
        </div>
    </div>
  )
}

export default Footer