import React from 'react';
import styles from './banner.module.scss';
import banner from '../../assets/images/banner.png';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.text_part}>
        <span>Live Sustainably, Teach Others, Find Your Purpose</span>
        <p>
          Embrace a Sustainable Lifestyle, Inspire and Educate Your Community, and Discover Deep Fulfillment by Sharing Knowledge and Practices for a Greener Future.
        </p>
      </div>

      <div className={styles.banner_img}>
        <img src={banner} alt='banner img' />
      </div>
    </div>
  );
}

export default Banner;