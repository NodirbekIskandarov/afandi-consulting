import React from 'react'
import styles from './country.module.scss'
import country from '../../assets/images/country.png'
function Country() {
  return (
    <div className={styles.country}>
        <div className={styles.title}>
            <span>Conutry</span>
            <p>Transform Your Life and Impact the World with Our Globally Accredited Courses</p>
        </div>

        <div className={styles.cards}>
            <div className={styles.card}>
                <img src={country} alt="country rasm" />
                <span className={styles.name}>UK</span>
                <br />
                <span className={styles.desc}>Permaculture and the Creation of Sustainable Livelihoods</span>
            </div>
        </div>
    </div>
  )
}

export default Country