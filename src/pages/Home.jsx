import React, { useEffect } from 'react'
import { About, Banner, Contact, Country, Team } from '../components'
import styles from './home.module.scss'
function Home() {
  useEffect(() => {
    localStorage.clear();
  }, [])
  return (
    <div className={styles.home}>
      <Banner/>
      <About />
      <Team/>
      <Country/>
      <Contact/>
    </div>
  )
}

export default Home