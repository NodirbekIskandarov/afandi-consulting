import React from 'react'
import styles from './header.module.scss'
import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/vector.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={styles.main}>
        <div className={styles.header}>
            <div className={styles.logo_part}>
                <a href="/">
                    <img src={logo} alt='logotip'/>
                </a>
            </div>

            <div className={styles.menu_part}>
                <div className={styles.menu}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/" className={styles.link}>About</Link>
                    <Link to="/" className={styles.link}>Country</Link>
                    <Link to="/" className={styles.link}>Team</Link>
                    <Link to="/" className={styles.link}>Contact</Link>
                </div>

                <div className={styles.call}>
                    <a href="/"><img src={vector} alt="avatar" /> <span>Call now</span></a>   
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Header