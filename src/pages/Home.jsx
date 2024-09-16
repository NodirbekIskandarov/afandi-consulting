import React from 'react'
import { About, Banner, Country } from '../components'

function Home() {
  return (
    <div style={{
      width: "1400px",
      margin: "0 auto"
    }}>
      <Banner/>
      <About />
      <Country/>
    </div>
  )
}

export default Home