import React from 'react'
import styles from'./footer.module.scss'
import footerimg from '../../assets/images/footerimg.png'
function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logo_part}>
            <img src={footerimg} alt="footerlogo" />
            <span>Afandi consulting offers online training in Environmental and Holistic Wellness.</span>
          </div>

          <div className={styles.menu}>
            <div className={styles.company}>

            </div>
            <div className={styles.country}>

            </div>
            <div className={styles.social}>

            </div>
          </div>

          <div className={styles.line}></div>
        </div>
    </div>
  )
}

export default Footer