import React, { useEffect, useState } from 'react'
import styles from'./footer.module.scss'
import footerimg from '../../assets/images/footerimg.png'
import { Link, useNavigate } from 'react-router-dom'
import { getRequest } from '../../utils/request'
import { country, sociallist } from '../../utils/API_urls'
import { useTranslation } from 'react-i18next'
function Footer() {
  const navigate = useNavigate()
  const {t, i18n} = useTranslation()
  const language = i18n.language
  const nameKey = `name_${language}`
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
            <span>{t("Afandi consulting offers online training in Environmental and Holistic Wellness.")}</span>
          </div>

          <div className={styles.menu}>
            <div className={styles.company}>
              <span>{t("Company")}</span>
              <span className={styles.link} onClick={() => handleMenuClick('home')} >{t("Home")}</span>
              <span className={styles.link} onClick={() => handleMenuClick('about')}>{t("About us")}</span>
              <span className={styles.link} onClick={() => handleMenuClick('team')}>{t("Team")}</span>
              <span className={styles.link} onClick={() => handleMenuClick('contact')}>{t("Contact")}</span>
            </div>
            <div className={styles.country}>
              <span>{t("Country")}</span>
              {
                countryList?.slice(0, 4)?.map((item, index) => {
                  return (
                    <span key={index} className={styles.link} onClick={() => navigateFunc(item?.uuid)}>{item?.[nameKey]}</span>
                  )
                })
              }
            </div>
            <div className={styles.social}>
              <span>{t("Social")}</span>
              {
                data?.map((item, index) => {
                  return (
                    <Link className={styles.link} to={item?.link} key={index}>{item?.[nameKey]}</Link>
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