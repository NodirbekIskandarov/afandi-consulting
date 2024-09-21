import React, { useEffect, useState } from 'react';
import styles from './banner.module.scss';
import { getRequest } from '../../utils/request';
import { banner } from '../../utils/API_urls';

function Banner() {
  const [data, setData] = useState([])
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
        <span>{data?.title}</span>
        <p>
          {data?.text}
        </p>
      </div>

      <div className={styles.banner_img}>
        <img src={data?.image} alt='banner img' />
      </div>
    </div>
  );
}

export default Banner;