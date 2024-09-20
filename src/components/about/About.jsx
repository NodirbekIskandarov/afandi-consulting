import React, { useEffect } from 'react'
import styles from './about.module.scss'
import rasm from '../../assets/images/aboutimg.png'
import odam from '../../assets/images/odam.png'
import { getRequest } from '../../utils/request'
import { about } from '../../utils/API_urls'
import axios from 'axios'
function About() {
    // useEffect(() => {
    //     getRequest(about)
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    useEffect(() => {
        axios.get("http://172.15.156.13:8000/api/v1/get/about/")
        .then(response => {
            console.log(response, "response")
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
  return (
    <div className={styles.about}>
        <div className={styles.info}>
            <div className={styles.text_part}>
                <h3>About us</h3>
                <p>Consulting was founded in 2021 in Uzbekistan though our company is relatively new in the CIS market, we have provided our services to students who wish to study abroad. The founders of the company are young people with experience studying abroad and with degrees from high-rank universities. Our personnel consists of education experts with more than 5 years of experience working in the CIS market and possessing a good command of English, Russian, Uzbek, and Turkish languages.</p>
                <button>Book a consultation</button>
            </div>
            <div className={styles.img_part}>
                <img src={rasm} alt="about us rasm" />
            </div>
        </div>

        <div className={styles.team}>
            <h3>Our team</h3>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img src={odam} alt="odam rasm" />
                    <span className={styles.name}>Omolara Dada</span>
                    <div className={styles.position}>
                        <div></div>
                        <span>Web designer</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About