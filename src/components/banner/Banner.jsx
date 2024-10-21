import React, { useEffect, useState } from 'react';
import styles from './banner.module.scss';
import { getRequest } from '../../utils/request';
import { banner } from '../../utils/API_urls';
import { useTranslation } from 'react-i18next';

function Banner() {
  const [data, setData] = useState([])
  const {i18n} = useTranslation()
  const language = i18n.language
  const titleKey = `title_${language}`
  const textKey = `text_${language}`
  useEffect(() => {
    getRequest(banner)
    .then(response => {
      setData(response?.data[0])
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div className={styles.banner}>
      <div className={styles.text_part}>
        <span>{data?.[titleKey]}</span>
        <p>
          {data?.[textKey]}
        </p>
      </div>

      <div className={styles.banner_img}>
        <img src={data?.image} alt='banner img' />
      </div>
    </div>
  );
}

export default Banner;