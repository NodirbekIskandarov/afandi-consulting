import React from 'react'
import { About, Banner, Contact, Country } from '../components'

function Home() {
  return (
    <div style={{
      width: "1400px",
      margin: "0 auto"
    }}>
      <Banner/>
      <About />
      <Country/>
      <Contact/>
    </div>
  )
}

export default Home