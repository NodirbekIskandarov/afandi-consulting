import React from 'react'
import { About, Banner, Contact, Country } from '../components'
import styles from './home.module.scss'
function Home() {
  return (
    <div className={styles.home}>
      <Banner/>
      <About />
      <Country/>
      <Contact/>
    </div>
  )
}

export default Home