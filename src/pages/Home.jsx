import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { About, Banner, Contact, Country, Team } from '../components';
import styles from './home.module.scss';

function Home() {
  const aboutRef = useRef(null);
  const countryRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    // URL dagi fragmentga qarab tegishli bo'limga skroll qilamiz
    if (location.hash === "#about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === "#country" && countryRef.current) {
      countryRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === "#team" && teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className={styles.home}>
      <Banner />
      <div ref={aboutRef}><About /></div>
      <div ref={teamRef}><Team /></div>
      <div ref={countryRef}><Country /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default Home;
