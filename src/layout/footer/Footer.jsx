import React, { useEffect, useState } from 'react'
import styles from'./footer.module.scss'
import footerimg from '../../assets/images/footerimg.png'
import { Link, useNavigate } from 'react-router-dom'
import { getRequest } from '../../utils/request'
import { country, sociallist } from '../../utils/API_urls'
function Footer() {
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [countryList, setCountryList] = useState()
  const handleMenuClick = (section) => {
    navigate(`/#${section}`);  // URL ga fragment (#about, #team) qo‘shib yo‘naltiramiz
  };
  useEffect(() => {
    getRequest(sociallist)
    .then(response => {
      setData(response?.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    getRequest(country)
    .then(response => {
      setCountryList(response?.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  function navigateFunc(id) {
    localStorage.setItem('uuid', id);
    navigate('/details/jobs')
  }
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logo_part}>
            <a href="/"><img src={footerimg} alt="footerlogo" /></a>
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
              {
                countryList?.slice(0, 4)?.map((item, index) => {
                  return (
                    <span key={index} className={styles.link} onClick={() => navigateFunc(item?.uuid)}>{item?.name}</span>
                  )
                })
              }
            </div>
            <div className={styles.social}>
              <span>Social</span>
              {
                data?.map((item, index) => {
                  return (
                    <Link className={styles.link} to={item?.link} key={index}>{item?.name}</Link>
                  )
                })
              }
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